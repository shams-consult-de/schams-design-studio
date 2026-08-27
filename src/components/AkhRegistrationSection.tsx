import { Language } from "../lib/i18n";
import { AkhLogo } from "./AkhLogo";

interface AkhRegistrationSectionProps {
  language: Language;
}

export function AkhRegistrationSection({ language }: AkhRegistrationSectionProps) {
  const isDe = language === "de";

  return (
    <section className="py-7 lg:py-9 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-5 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200/90 hover:border-zinc-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 group">
          
          {/* Official AKH Portal Logo Container */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-zinc-200 hover:scale-105 transition-transform duration-300">
            <AkhLogo className="h-9 sm:h-10 w-auto" />
          </div>

          {/* Title & Statutory Seal */}
          <div className="space-y-1 text-left">
            <h2 className="text-sm sm:text-base font-extrabold text-zinc-950 tracking-tight">
              {isDe
                ? "Eingetragener Architekt & Stadtplaner (AKH Hessen · KdöR)"
                : "Registered German Architect & Urban Planner (AKH Hessen)"}
            </h2>

            <p className="text-xs text-zinc-600 font-light max-w-3xl leading-relaxed">
              {isDe
                ? "Staatlich geschützte Berufsbezeichnung mit uneingeschränkter Bauvorlageberechtigung in allen Bundesländern · Gesetzlich vollumfänglich berufshaftpflichtversichert (§ 16 HASG)."
                : "Protected statutory title under German law with full building permit authority across all federal states · Fully insured under statutory professional indemnity (§ 16 HASG)."}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
