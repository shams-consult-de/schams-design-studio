interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function FrankfurtUasLogo({ className = "h-8 w-auto", variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  const primaryText = isLight ? "#FFFFFF" : "#18181B";
  const secondaryText = isLight ? "#D4D4D8" : "#52525B";
  const tertiaryText = isLight ? "#A1A1AA" : "#71717A";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`} title="Frankfurt University of Applied Sciences">
      {/* Visual Logo Mark */}
      <svg
        viewBox="0 0 130 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Frankfurt University of Applied Sciences Logo"
      >
        {/* Red accent square / bars */}
        <rect x="2" y="6" width="28" height="28" rx="4" fill="#DC2626" />
        <path d="M9 14H23M9 20H19M9 26H23" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Text representation of Frankfurt UAS */}
        <text x="36" y="16" fill={primaryText} fontSize="9.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.5">
          FRANKFURT
        </text>
        <text x="36" y="25" fill={secondaryText} fontSize="7" fontWeight="600" fontFamily="sans-serif" letterSpacing="0.2">
          UNIVERSITY
        </text>
        <text x="36" y="33" fill={tertiaryText} fontSize="6" fontWeight="500" fontFamily="sans-serif">
          OF APPLIED SCIENCES
        </text>
      </svg>
    </div>
  );
}
