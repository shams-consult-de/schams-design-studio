import { Language } from "../lib/i18n";

interface VobSectionProps {
  language: Language;
}

export function VobSection({ language }: VobSectionProps) {
  const isDe = language === "de";

  const vobPillars = [
    {
      part: "VOB/A",
      title: isDe ? "Ausschreibung & Vergabe" : "Tendering & Awarding",
      desc: isDe ? "Transparente Preisvergleiche ohne verdeckte Kosten" : "Transparent contractor pricing without hidden fees",
    },
    {
      part: "VOB/B",
      title: isDe ? "Vertragsrecht & Fristen" : "Contract Execution",
      desc: isDe ? "Rechtssichere Bauverträge und verbindliche Termintreue" : "Binding milestone schedules and dispute prevention",
    },
    {
      part: "VOB/C",
      title: isDe ? "Technische Baunormen" : "Technical Standards",
      desc: isDe ? "Strikte DIN-Konformität und aktive Mängelprävention" : "Strict DIN compliance and active defect prevention",
    },
  ];

  return (
    <section className="py-10 bg-[#0F1014] text-white border-b border-white/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#14161C] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl space-y-6">
          {/* Header Strip with German Flag */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              {/* Official German Flag Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 border border-white/15 text-xs font-mono font-bold select-none shadow-xs">
                <svg viewBox="0 0 5 3" className="h-3 w-4.5 rounded-[2px] overflow-hidden">
                  <rect width="5" height="1" y="0" fill="#000000" />
                  <rect width="5" height="1" y="1" fill="#DD0000" />
                  <rect width="5" height="1" y="2" fill="#FFCE00" />
                </svg>
                <span className="text-zinc-200">DE Norm</span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{isDe ? "VOB-Konformität" : "German VOB Compliance"}</span>
                  <span className="text-xs font-normal text-zinc-400 font-mono hidden sm:inline">
                    · {isDe ? "Vergabe- & Bauvertragsordnung" : "Construction Contract Procedures"}
                  </span>
                </h3>
              </div>
            </div>

            <span className="text-[11px] font-mono font-bold text-[#DC2626] bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-full">
              {isDe ? "100% Rechtssicher & Mängelfrei" : "100% Defect & Legal Protection"}
            </span>
          </div>

          {/* 3 Ultra-concise VOB Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {vobPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 transform hover:-translate-y-0.5 space-y-1"
              >
                <span className="text-xs font-mono font-bold text-[#DC2626]">{pillar.part}</span>
                <h4 className="text-xs sm:text-sm font-bold text-white">{pillar.title}</h4>
                <p className="text-[11px] text-zinc-400 font-light leading-snug">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
