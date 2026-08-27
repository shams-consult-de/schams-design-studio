import { useState, useRef } from "react";
import { Translations } from "../lib/i18n";

interface ServicesSectionProps {
  t: Translations["services"];
  processT: Translations["process"];
}

type StageFilter = "all" | "planning" | "tendering" | "construction";

export function ServicesSection({ t, processT }: ServicesSectionProps) {
  const [activeStage, setActiveStage] = useState<StageFilter>("all");
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const timelineScrollRef = useRef<HTMLDivElement>(null);

  const icons = [
    (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" />
        <path d="M16 4V28M4 10L16 16L28 10" />
      </svg>
    ),
    (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28V12L12 6V28" />
        <path d="M12 16L20 10V28" />
        <path d="M20 20L28 14V28" />
        <path d="M2 28H30" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 6L28 12L16 18L4 12L16 6Z" />
        <path d="M4 17L16 23L28 17" />
        <path d="M4 22L16 28L28 22" />
      </svg>
    ),
    (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="14" r="9" />
        <path d="M20.5 20.5L28 28" strokeLinecap="round" />
        <path d="M10 14H18M14 10V18" strokeLinecap="round" />
      </svg>
    ),
  ];

  // Stage classification for the 9 HOAI phases
  const getStageInfo = (idx: number) => {
    const normalizedIdx = idx % 9;
    if (normalizedIdx <= 3) {
      return {
        stageKey: "planning" as const,
        stageNumber: 1,
        stageLabel: "LPH 1–4",
        stageName: "Planung & Genehmigung",
        badgeBg: "bg-blue-50 text-blue-700 border-blue-200/80",
        dotColor: "bg-blue-500",
        accentColor: "#2563EB",
      };
    }
    if (normalizedIdx <= 6) {
      return {
        stageKey: "tendering" as const,
        stageNumber: 2,
        stageLabel: "LPH 5–7",
        stageName: "Ausführung & Vergabe",
        badgeBg: "bg-amber-50 text-amber-700 border-amber-200/80",
        dotColor: "bg-amber-500",
        accentColor: "#D97706",
      };
    }
    return {
      stageKey: "construction" as const,
      stageNumber: 3,
      stageLabel: "LPH 8–9",
      stageName: "Bauleitung & Übergabe",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      dotColor: "bg-emerald-500",
      accentColor: "#059669",
    };
  };

  const handleScroll = (direction: "left" | "right") => {
    if (timelineScrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      timelineScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Double list for continuous infinite loop marquee
  const loopedSteps = [...processT.steps, ...processT.steps];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ================================================================= */}
        {/* PART 1: CORE SERVICES & DISCIPLINES                               */}
        {/* ================================================================= */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
              {t.badge}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              {t.title}
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.items.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-zinc-200 hover:border-zinc-400 shadow-xs flex flex-col justify-between space-y-5 hover:shadow-xl transition-all duration-300 card-lift"
              >
                <div>
                  <div className="mb-6">{icons[idx]}</div>
                  <h3 className="font-sans text-lg font-bold text-zinc-950 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light mt-2.5 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* PART 2: CONTINUOUS AUTO-MOVING 9 HOAI PHASES TIMELINE             */}
        {/* ================================================================= */}
        <div id="process" className="pt-12 border-t border-zinc-100 space-y-8">
          {/* Process Header & Enhanced 4 Stage + Playback Controls Bar */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-2.5">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
                  {processT.badge}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                <span>{processT.titlePart1} </span>
                <span className="text-[#DC2626]">{processT.titlePart2}</span>
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed max-w-2xl">
                {processT.subtitle}
              </p>
            </div>

            {/* Enhanced Controls Toolbar: 4 Stage Filters + Play/Pause & Step Controls */}
            <div className="flex flex-wrap items-center gap-2.5 self-start xl:self-end">
              {/* 4 Improved Segmented Stage Filter Pills */}
              <div className="flex items-center p-1 bg-zinc-100/90 rounded-xl border border-zinc-200 shadow-2xs text-xs font-medium overflow-x-auto no-scrollbar">
                {/* 1. All 9 Phases */}
                <button
                  type="button"
                  onClick={() => { setActiveStage("all"); setSelectedStep(null); }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeStage === "all"
                      ? "bg-white text-zinc-950 font-bold shadow-xs border border-zinc-200/80"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
                  <span>Alle 9 Phasen</span>
                </button>

                {/* 2. Planning LPH 1-4 */}
                <button
                  type="button"
                  onClick={() => { setActiveStage("planning"); setSelectedStep(null); }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeStage === "planning"
                      ? "bg-white text-blue-950 font-bold shadow-xs border border-blue-200/80"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>LPH 1–4 · Planung</span>
                </button>

                {/* 3. Tendering LPH 5-7 */}
                <button
                  type="button"
                  onClick={() => { setActiveStage("tendering"); setSelectedStep(null); }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeStage === "tendering"
                      ? "bg-white text-amber-950 font-bold shadow-xs border border-amber-200/80"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span>LPH 5–7 · Vergabe</span>
                </button>

                {/* 4. Construction LPH 8-9 */}
                <button
                  type="button"
                  onClick={() => { setActiveStage("construction"); setSelectedStep(null); }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeStage === "construction"
                      ? "bg-white text-emerald-950 font-bold shadow-xs border border-emerald-200/80"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  <span>LPH 8–9 · Bauleitung</span>
                </button>
              </div>

              {/* Playback & Manual Navigation Controls */}
              <div className="flex items-center gap-1 bg-zinc-100/90 p-1 rounded-xl border border-zinc-200 shadow-2xs">
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause timeline motion" : "Start timeline motion"}
                  title={isPlaying ? "Auto-Lauf anhalten" : "Auto-Lauf starten"}
                  className="p-1.5 px-2.5 rounded-lg bg-white border border-zinc-200/80 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#DC2626]">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                      <span className="font-mono text-[11px]">Pause</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-emerald-600">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                      <span className="font-mono text-[11px]">Start</span>
                    </>
                  )}
                </button>

                {/* Left Step Arrow */}
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  aria-label="Scroll left"
                  title="Nach links bewegen"
                  className="p-1.5 rounded-lg bg-white border border-zinc-200/80 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all shadow-2xs cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Right Step Arrow */}
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  aria-label="Scroll right"
                  title="Nach rechts bewegen"
                  className="p-1.5 rounded-lg bg-white border border-zinc-200/80 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 transition-all shadow-2xs cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Continuous Auto-Moving Marquee Track with Side Fade Gradients */}
          <div className="relative w-full overflow-hidden">
            {/* Left & Right Soft Fade Gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

            {/* Scrollable Container with Continuous Auto-Scroll */}
            <div
              ref={timelineScrollRef}
              className="relative w-full overflow-x-auto no-scrollbar py-3"
              style={{ scrollBehavior: "smooth" }}
            >
              <div
                className={`flex gap-5 ${
                  isPlaying ? "animate-marquee-smooth" : ""
                }`}
                style={{
                  animationDuration: "48s",
                  animationPlayState: isPlaying ? "running" : "paused",
                }}
              >
                {loopedSteps.map((step, idx) => {
                  const stage = getStageInfo(idx);
                  const isSelected = selectedStep === idx;
                  const isDimmed = activeStage !== "all" && stage.stageKey !== activeStage;

                  return (
                    <div
                      key={`${step.num}-${idx}`}
                      onClick={() => setSelectedStep(isSelected ? null : idx)}
                      className={`w-[290px] sm:w-[320px] shrink-0 bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between space-y-4 group cursor-pointer card-lift select-none relative ${
                        isSelected
                          ? "border-[#DC2626] shadow-xl ring-2 ring-[#DC2626]/20 translate-y-[-3px]"
                          : isDimmed
                          ? "border-zinc-200 opacity-40 hover:opacity-90 shadow-2xs"
                          : "border-zinc-200/90 hover:border-zinc-400 shadow-xs hover:shadow-lg"
                      }`}
                    >
                      {/* Top Header: Connected Milestone Node + Norm Tag + LPH */}
                      <div className="flex items-center justify-between gap-2">
                        {/* Milestone Node */}
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 transition-all shadow-xs shrink-0 ${
                              isSelected
                                ? "bg-[#DC2626] text-white border-white ring-2 ring-[#DC2626]/30 scale-105"
                                : "bg-zinc-50 text-zinc-900 border-zinc-300 group-hover:border-[#DC2626] group-hover:text-[#DC2626]"
                            }`}
                          >
                            {step.num}
                          </div>
                          <span className="font-mono text-xs font-bold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                            LPH {parseInt(step.num, 10)}
                          </span>
                        </div>

                        {/* German Statutory Norm Tag */}
                        {step.norm && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/90 shrink-0">
                            {step.norm}
                          </span>
                        )}
                      </div>

                      {/* Content: Title & German Architecture Deliverables Description */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${stage.dotColor}`} />
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${stage.badgeBg}`}>
                            {stage.stageName}
                          </span>
                        </div>

                        <h4 className="font-sans text-sm font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                          {step.name}
                        </h4>

                        <p className="text-xs text-zinc-600 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Card Footer: Timeline Progression Indicator */}
                      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                        <span>Phase {parseInt(step.num, 10)} / 9</span>
                        <span className="font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors">
                          {parseInt(step.num, 10) === 1
                            ? "Start"
                            : parseInt(step.num, 10) === 9
                            ? "Abschluss"
                            : "Fortlaufend"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

