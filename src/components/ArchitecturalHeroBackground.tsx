interface ArchitecturalHeroBackgroundProps {
  className?: string;
}

export function ArchitecturalHeroBackground({
  className = "absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0",
}: ArchitecturalHeroBackgroundProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Complete Frankfurt Architectural Skyline Sketch */}
      <img
        src="/images/frankfurt-skyline-sketch.png"
        alt=""
        className="w-full h-full object-cover object-[62%_bottom] lg:object-[68%_bottom] opacity-30 lg:opacity-35 filter contrast-125 select-none"
        loading="eager"
        width="3189"
        height="1450"
      />

      {/* Horizontal Gradient: 100% solid white on text column (WCAG AAA contrast), fading to reveal the skyline across center & right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-40% sm:via-45% lg:via-42% to-white/10" />

      {/* Top soft blend to protect header navigation */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />

      {/* Subtle bottom grounding fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

