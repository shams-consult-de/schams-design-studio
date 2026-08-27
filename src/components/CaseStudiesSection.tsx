import { useState, useRef } from "react";
import { caseStudies, CaseStudy, googleProfileUrl } from "../data/caseStudies";
import { Language } from "../lib/i18n";

interface CaseStudiesSectionProps {
  language: Language;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export function CaseStudiesSection({
  language,
  onSelectCaseStudy,
}: CaseStudiesSectionProps) {
  const isDe = language === "de";
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Manual movement step
  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Double the list for seamless infinite loop marquee
  const loopedCaseStudies = [...caseStudies, ...caseStudies];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ================================================================= */}
        {/* 1. PROMINENT GOOGLE 5.0 TRUST BANNER                             */}
        {/* ================================================================= */}
        <div className="bg-gradient-to-br from-zinc-950 via-[#111216] to-zinc-900 text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-zinc-800 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#4285F4]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#EA4335]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Giant 5.0 & Flaunted Stars Display */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                {/* Official Google Vector Logo Icon */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white p-2 flex items-center justify-center shadow-md shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 block">
                    Google Reviews
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {isDe ? "100% Verifizierte Kundenbewertungen" : "100% Verified Client Feedback"}
                  </span>
                </div>
              </div>

              {/* Large 5.0 Rating Score with Gold Stars */}
              <div className="flex flex-wrap items-baseline gap-4 pt-1">
                <span className="font-sans text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
                  5.0
                </span>
                <div className="space-y-1">
                  <div className="flex items-center text-2xl sm:text-3xl text-amber-400 tracking-wider">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="text-xs text-zinc-300 font-medium">
                    {isDe ? "Makellose 5,0-Sterne-Gesamtbewertung" : "Flawless 5.0-Star Overall Rating"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Direct Google Link */}
            <div className="lg:col-span-6 space-y-5 lg:border-l lg:border-white/15 lg:pl-10">
              <p className="font-sans text-base sm:text-lg text-zinc-100 font-light leading-relaxed">
                {isDe
                  ? "„Shams Consult steht für absolute Zuverlässigkeit und höchste Durchsetzungsstärke bei Baugenehmigungen, Bebauungsplänen und Legalisierungen in ganz Deutschland.“"
                  : "“Shams Consult stands for unyielding reliability and proven success in building approvals, master planning, and permit legalizations across Germany.”"}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white text-zinc-950 hover:bg-zinc-100 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
                >
                  <span>{isDe ? "Auf Google ansehen & verifizieren" : "Verify on Google"}</span>
                  <span className="text-[#EA4335] font-bold">↗</span>
                </a>
                <span className="text-xs text-zinc-400 font-light">
                  {isDe ? "Direkt im offiziellen Google-Unternehmensprofil" : "Directly on Google Business Profile"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. SECTION HEADER & CLEAR MOVEMENT CONTROLS                       */}
        {/* ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626] block">
              {isDe ? "VERIFIZIERTE FALLSTUDIEN" : "VERIFIED CASE STUDIES"}
            </span>

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              {isDe
                ? "Echte Bauherren. Echte Genehmigungserfolge."
                : "Real Clients. Real Permitting Successes."}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              {isDe
                ? "Die Rezensionen bewegen sich automatisch horizontal. Fahren Sie mit der Maus über eine Karte, um sie anzuhalten, oder nutzen Sie die Steuerung."
                : "Reviews scroll automatically. Hover over any card to pause, or use the controls below to browse."}
            </p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. CONTINUOUS AUTO-MOVING HORIZONTAL MARQUEE TRACK                */}
        {/* ================================================================= */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto no-scrollbar py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          <div
            className={`flex gap-6 ${
              isPlaying ? "animate-marquee-smooth" : ""
            }`}
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          >
            {loopedCaseStudies.map((cs, idx) => (
              <article
                key={`${cs.id}-${idx}`}
                onClick={() => onSelectCaseStudy(cs)}
                className="w-[310px] sm:w-[370px] lg:w-[410px] shrink-0 bg-white rounded-2xl border border-zinc-200/90 hover:border-[#DC2626] p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer card-lift select-none"
              >
                <div className="space-y-3.5">
                  {/* 5-Star Rating & Reviewer Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-full bg-zinc-900 text-white font-bold text-xs flex items-center justify-center border border-zinc-700 shadow-xs shrink-0">
                        {cs.reviewerName.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <strong className="text-xs font-bold text-zinc-950 block leading-tight truncate">
                          {cs.reviewerName}
                        </strong>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {cs.reviewerBadge || (isDe ? "Verifizierte Google-Bewertung" : "Google Verified Review")}
                        </span>
                      </div>
                    </div>

                    <span className="text-sm text-amber-500 tracking-wider font-bold shrink-0">
                      ★★★★★
                    </span>
                  </div>

                  {/* Case Study Title */}
                  <h3 className="font-sans text-sm sm:text-base font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug line-clamp-2">
                    {cs.projectTitle[language]}
                  </h3>

                  {/* Original Google Review Excerpt */}
                  <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-4 italic border-l-2 border-zinc-200 pl-3">
                    „{cs.reviewText}“
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.badges[language].slice(0, 2).map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-50 border border-zinc-200 text-[10px] font-semibold text-zinc-700"
                      >
                        <span className="text-[#DC2626]">✓</span>
                        <span className="line-clamp-1">{badge}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-500 line-clamp-1">
                    {cs.location ? cs.location[language] : (isDe ? "Hessen / Deutschland" : "Hesse / Germany")}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                    <span>{isDe ? "Fallstudie lesen" : "Read Case Study"}</span>
                    <span>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Subtle Carousel Controls Below Track */}
        <div className="flex items-center justify-center gap-2 !mt-3 pt-0">
          <button
            type="button"
            onClick={() => handleManualScroll("left")}
            title={isDe ? "Nach links bewegen" : "Move left"}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Previous"
          >
            <span>‹</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? (isDe ? "Auto-Scroll pausieren" : "Pause scroll") : (isDe ? "Auto-Scroll starten" : "Start scroll")}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className="text-[10px]">{isPlaying ? "⏸" : "▶"}</span>
          </button>

          <button
            type="button"
            onClick={() => handleManualScroll("right")}
            title={isDe ? "Nach links bewegen" : "Move right"}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Next"
          >
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
