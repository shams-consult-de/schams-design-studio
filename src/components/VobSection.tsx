import { Translations } from "../lib/i18n";

interface VobSectionProps {
  t: Translations["vob"];
}

export function VobSection({ t }: VobSectionProps) {
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
                  <rect width="5" height="1" y="1" fill="#FF0000" />
                  <rect width="5" height="1" y="2" fill="#FFD700" />
                </svg>
                <span className="text-zinc-200">{t.badge}</span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{t.title}</span>
                  <span className="text-xs font-normal text-zinc-400 font-mono hidden sm:inline">
                    · {t.subtitle}
                  </span>
                </h3>
              </div>
            </div>

            <span className="text-[11px] font-mono font-bold text-[#DC2626] bg-red-950/40 border border-red-900/60 px-3 py-1 rounded-full">
              {t.guaranteeBadge}
            </span>
          </div>

          {/* 3 Ultra-concise VOB Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.pillars.map((pillar, idx) => (
              <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs font-mono font-bold text-[#DC2626] block">
                  {pillar.part}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
