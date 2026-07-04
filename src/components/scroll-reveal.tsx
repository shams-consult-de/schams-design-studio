import { useEffect } from "react";

/**
 * Global scroll-triggered reveal. Every element with `data-reveal`
 * fades + slides in when it enters the viewport. Optional attributes:
 *   data-reveal="up|left|right|scale"   (default: up)
 *   data-reveal-delay="120"             (ms)
 * Respects prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduce) {
      nodes.forEach((n) => n.classList.add("reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -80px 0px" },
    );

    nodes.forEach((n) => io.observe(n));

    // Re-scan on route change / dynamic content
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal-in)")
        .forEach((n) => io.observe(n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
