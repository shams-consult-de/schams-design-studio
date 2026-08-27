import { Translations } from "../lib/i18n";

interface FounderSectionProps {
  t: Translations["founder"];
  onNavigateFounder?: () => void;
}

export function FounderSection({ t, onNavigateFounder }: FounderSectionProps) {
  const icons = [
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5" />
        <path d="M9 13L7 21L12 18.5L17 21L15 13" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="9" height="14" rx="1" />
        <rect x="13" y="3" width="7" height="17" rx="1" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="12" rx="1" />
        <path d="M8 20H16M12 16V20" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="17" cy="9.5" r="2.5" />
        <path d="M3 19C3 15.5 6 13.5 9 13.5C12 13.5 15 15.5 15 19" strokeLinecap="round" />
        <path d="M15 15C17 15 20 16 20 19" strokeLinecap="round" />
      </svg>
    ),
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#0c0d0e] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#16171b] rounded-sm border border-white/10 p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative aspect-[4/5] w-full max-w-sm rounded-sm overflow-hidden bg-zinc-900 border border-white/10 shadow-lg">
                <img
                  src="/images/team/Majeed-Shams.jpg"
                  alt={t.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle: Bio & Read More Button */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
                {t.badge}
              </span>

              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {t.name}
              </h2>

              <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                {t.roles}
              </p>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {t.bio}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onNavigateFounder}
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
                >
                  <span>{t.button}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right: 4 Credential Feature Rows */}
            <div className="lg:col-span-3 space-y-6 pt-6 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-sm bg-[#22242a] text-[#DC2626] flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-white leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-light">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
