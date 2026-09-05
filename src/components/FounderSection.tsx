import { Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface FounderSectionProps {
  t: Translations["founder"];
  onNavigateFounder?: () => void;
}

export function FounderSection({ t, onNavigateFounder }: FounderSectionProps) {
  const icons = ["award", "drafting-compass", "desktop", "users"];

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
                    <Icon name={icons[idx] ?? "circle-check"} className="text-lg" />
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
