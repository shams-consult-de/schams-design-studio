import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

type Direction = "up" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  direction?: Direction;
  once?: boolean;
}

/**
 * Reveal-on-scroll wrapper. Uses IntersectionObserver so items smoothly
 * fade & slide into view when they enter the viewport — respects
 * prefers-reduced-motion by rendering the target as already visible.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const translate =
    direction === "up"
      ? "translate3d(0, 28px, 0)"
      : direction === "left"
        ? "translate3d(-28px, 0, 0)"
        : direction === "right"
          ? "translate3d(28px, 0, 0)"
          : "none";

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0,0,0)" : translate,
    transition:
      "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}
