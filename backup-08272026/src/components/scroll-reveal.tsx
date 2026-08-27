import { useEffect } from "react";

/**
 * Global scroll-triggered reveal. Every element with `data-reveal`
 * fades + slides in when it enters the viewport. Optional attributes:
 *   data-reveal="up|left|right|scale"   (default: up)
 *   data-reveal-delay="120"             (ms)
 * Respects prefers-reduced-motion.
 *
 * NOTE: We deliberately wait for `window.load` (all streaming Suspense
 * boundaries hydrated) before we mutate DOM classes. Otherwise React 19
 * throws a hydration mismatch when a Suspense boundary resolves after we've
 * already added `reveal-in` to an above-the-fold element.
 */
export function ScrollReveal() {
  useEffect(() => {
    let io: IntersectionObserver | undefined;
    let mo: MutationObserver | undefined;
    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scan = () =>
        Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.reveal-in)"));

      if (reduce) {
        scan().forEach((n) => n.classList.add("reveal-in"));
        return;
      }

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("reveal-in");
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -80px 0px" },
      );

      scan().forEach((n) => io!.observe(n));

      mo = new MutationObserver(() => {
        scan().forEach((n) => io!.observe(n));
      });
      mo.observe(document.body, { childList: true, subtree: true });
    };

    // Wait until the browser has fully loaded (streaming hydration done),
    // then defer one more frame so React commits any pending Suspense work
    // before we touch the DOM.
    const schedule = () => requestAnimationFrame(() => requestAnimationFrame(start));

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      io?.disconnect();
      mo?.disconnect();
    };
  }, []);

  return null;
}
