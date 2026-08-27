interface AkhLogoProps {
  className?: string;
}

export function AkhLogo({ className = "h-10 w-auto" }: AkhLogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      title="Architekten- und Stadtplanerkammer Hessen (AKH)"
    >
      <img
        src="/images/partners/akh-logo.png"
        alt="AKH Architekten- und Stadtplanerkammer Hessen"
        className="h-full w-auto object-contain shrink-0"
        loading="eager"
      />

      <div className="flex flex-col justify-center text-left leading-tight space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="font-sans font-black text-xs sm:text-sm tracking-tight text-zinc-950 uppercase">
            AKH
          </span>
          <span className="h-2.5 w-px bg-[#DC2626]" />
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#DC2626]">
            Hessen
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-tight text-zinc-800 uppercase">
          Architekten- & Stadtplanerkammer
        </span>
        <span className="text-[8px] sm:text-[9px] font-medium tracking-normal text-zinc-500">
          Körperschaft des öffentlichen Rechts
        </span>
      </div>
    </div>
  );
}
