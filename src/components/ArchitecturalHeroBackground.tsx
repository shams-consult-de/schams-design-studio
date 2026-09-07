interface ArchitecturalHeroBackgroundProps {
  className?: string;
}

export function ArchitecturalHeroBackground({
  className = "absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0",
}: ArchitecturalHeroBackgroundProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Real Frankfurt am Main Landmark Skyline Photo */}
      <img
        src="/images/frankfurt-skyline-hero.jpg"
        alt=""
        className="w-full h-full object-cover object-[72%_32%] lg:object-[78%_36%] opacity-40 lg:opacity-45 filter contrast-[1.05] brightness-[1.02]"
        loading="eager"
        width="1920"
        height="1440"
      />

      {/* Left-to-Right Pure White Gradient to ensure 100% WCAG contrast on hero typography */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-40% sm:via-48% lg:via-45% to-transparent" />

      {/* Soft Bottom Fade into section divider */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

