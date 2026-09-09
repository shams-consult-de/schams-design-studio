interface ArchitecturalHeroBackgroundProps {
  className?: string;
}

export function ArchitecturalHeroBackground({
  className = "absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0",
}: ArchitecturalHeroBackgroundProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Complete Frankfurt Architectural Skyline Sketch with prominent Commerzbank Tower */}
      <img
        src="/images/frankfurt-skyline-sketch.png"
        alt=""
        className="absolute top-0 h-full w-[112%] max-w-none left-[-2%] sm:left-[0%] lg:left-[1%] object-cover object-[50%_top] opacity-40 lg:opacity-50 filter contrast-125 select-none"
        loading="eager"
        width="3189"
        height="1450"
      />

      {/* Horizontal Gradient: solid white on text column (WCAG AAA contrast), fading to reveal the Commerzbank Tower & skyline */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 via-36% sm:via-38% lg:via-36% to-transparent" />

      {/* Top soft blend to protect header navigation */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/80 to-transparent" />

      {/* Subtle bottom grounding fade */}
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

