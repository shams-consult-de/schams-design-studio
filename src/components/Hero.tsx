import { Translations } from "../lib/i18n";

interface HeroProps {
  t: Translations["hero"];
  onBookConsultation?: () => void;
  onNavigateProjects?: () => void;
  onNavigateFounder?: () => void;
}

export function Hero({
  t,
  onBookConsultation,
  onNavigateProjects,
  onNavigateFounder,
}: HeroProps) {
  return (
    <section className="relative pt-24 pb-8 lg:pt-28 lg:pb-12 text-zinc-900 border-b border-zinc-200 overflow-hidden">
      {/* Background image with fixed attachment and decent opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/hero-background-bild-4.png')",
          opacity: 0.6,
          filter: "blur(3px)",
        }}
      />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (7 cols): Main Value Proposition & Complete Philosophy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
                Shams Consult · Architektur & Stadtplanung
              </span>
            </div>

            {/* Main Headline: Complete Philosophy Statement */}
            <h1 className="font-sans text-2xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight text-zinc-950 uppercase leading-[1.15]">
              <span>{t.titlePart1} </span>
              <span className="text-[#DC2626] block sm:inline">{t.titleHighlight}</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-zinc-700 font-light leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            {/* Dual CTAs Above The Fold */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookConsultation}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 sm:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md text-center cursor-pointer"
              >
                {t.bookConsultation}
              </button>

              <button
                type="button"
                onClick={onNavigateProjects}
                className="bg-transparent border border-zinc-900 hover:border-[#DC2626] text-zinc-900 hover:text-[#DC2626] px-5 sm:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
              >
                {t.viewProjects}
              </button>
            </div>
          </div>

          {/* Center/Right Column (5 cols): Centered Portrait & Clickable Founder Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-2 lg:pt-0">
            <div
              onClick={onNavigateFounder}
              className="group relative w-full max-w-sm flex flex-col items-center justify-center cursor-pointer block"
              title="Geschichte des Gründers lesen"
            >
              {/* Majeed Shams Portrait */}
              <div className="w-full flex justify-center overflow-hidden">
                <img
                  src="/images/team/shams-majeed-main-image.png"
                  alt="Dipl.-Ing. Majeed Shams"
                  className="w-auto h-auto max-h-[280px] sm:max-h-[360px] lg:max-h-[430px] object-contain filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                  width="440"
                  height="520"
                  loading="eager"
                />
              </div>

              {/* Bottom Caption: Clickable Founder Title Badge with Explicit Story CTA */}
              <div className="w-full sm:w-auto -mt-4 sm:-mt-5 z-20 bg-white/95 group-hover:bg-white backdrop-blur-xs px-4 py-3 rounded-xl border border-zinc-200 group-hover:border-zinc-400 shadow-md group-hover:shadow-xl transition-all duration-300 flex items-center justify-between gap-3 mx-auto">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-9 bg-[#DC2626] rounded-full shrink-0" />
                  <div className="text-left space-y-0.5">
                    <h2 className="text-xs font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors tracking-wide leading-tight">
                      {t.founderName}
                    </h2>
                    <p className="text-[10px] sm:text-[11px] text-zinc-600 font-normal leading-tight">
                      {t.founderTitle} · {t.founderRole}
                    </p>
                    <p className="text-[10px] font-bold text-[#DC2626] group-hover:underline flex items-center gap-1 pt-0.5">
                      <span>{t.founderStoryCta}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
