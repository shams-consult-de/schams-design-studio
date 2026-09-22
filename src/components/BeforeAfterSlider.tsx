import { useState, useRef, useCallback, useEffect } from "react";
import { Language } from "../lib/i18n";
import { BEFORE_AFTER_PROJECTS, BeforeAfterProject } from "../data/beforeAfter";

interface BeforeAfterCardProps {
  project: BeforeAfterProject;
  language: Language;
  onInteractionStart: () => void;
  onInteractionEnd: () => void;
}

function BeforeAfterCard({
  project,
  language,
  onInteractionStart,
  onInteractionEnd,
}: BeforeAfterCardProps) {
  const isDe = language === "de";
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rawPos = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, rawPos));
    setSliderPos(Math.round(clamped * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    onInteractionStart();
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    onInteractionEnd();
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // safe fallback
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <article className="w-full shrink-0 basis-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col justify-between select-none">
      {/* Card Header */}
      <div className="p-5 sm:p-7 pb-4 border-b border-zinc-800/80 space-y-2 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="flex items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-[#DC2626]/15 text-[#DC2626] text-xs font-bold uppercase tracking-wider border border-[#DC2626]/30">
            {project.category[isDe ? "de" : "en"]}
          </span>
          <span className="text-xs text-zinc-400 font-mono">
            {project.afterPhase}
          </span>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
          {project.title[isDe ? "de" : "en"]}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
          {project.subtitle[isDe ? "de" : "en"]}
        </p>
      </div>

      {/* Interactive Reveal Canvas (Full Width Immersion) */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={sliderPos}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={
          isDe
            ? `Vorher-Nachher Schieberegler für ${project.title.de}`
            : `Before-After reveal slider for ${project.title.en}`
        }
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] max-h-[580px] overflow-hidden select-none touch-none cursor-ew-resize focus:outline-none focus:ring-4 focus:ring-[#DC2626]/40 bg-zinc-950"
      >
        {/* Layer 1: AFTER Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.afterImage}
            alt={project.afterAlt}
            className="w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Layer 2: BEFORE Image (Clipped Overlay with Hardware Acceleration) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <img
            src={project.beforeImage}
            alt={project.beforeAlt}
            className="w-full h-full object-cover object-center pointer-events-none"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Badges in Top Corners */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md text-white text-xs font-bold border border-white/10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{project.beforeLabel[isDe ? "de" : "en"]}</span>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">
              ({project.beforePhase})
            </span>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md text-white text-xs font-bold border border-white/10 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{project.afterLabel[isDe ? "de" : "en"]}</span>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">
              ({project.afterPhase})
            </span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.8)] pointer-events-none z-30"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Ergonomic Grab Handle (Thumb Zone: WCAG 48px Touch Target) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none transition-transform duration-75"
          style={{ left: `${sliderPos}%` }}
        >
          <div
            className={`w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl border-2 border-zinc-900 ${
              isDragging ? "scale-110 ring-4 ring-[#DC2626]/40" : "hover:scale-105"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-zinc-900"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
              <polyline points="9 18 15 12 9 6" />
              <polyline points="15 18 21 12 15 6" />
            </svg>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none sm:hidden">
          <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur text-[10px] text-zinc-200 font-medium">
            {isDe ? "◂ Regler wischen ▸" : "◂ Swipe slider ▸"}
          </span>
        </div>
      </div>

      {/* Bottom Controls & Stats */}
      <div className="bg-zinc-950 p-4 sm:p-6 border-t border-zinc-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Preset Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSliderPos(100)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                sliderPos === 100
                  ? "bg-amber-500 text-zinc-950 font-bold"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              ← {isDe ? "Vorher" : "Before"}
            </button>

            <button
              type="button"
              onClick={() => setSliderPos(50)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                sliderPos === 50
                  ? "bg-white text-zinc-950 font-bold"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              50 : 50
            </button>

            <button
              type="button"
              onClick={() => setSliderPos(0)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                sliderPos === 0
                  ? "bg-emerald-500 text-zinc-950 font-bold"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {isDe ? "Nachher" : "After"} →
            </button>
          </div>

          {/* FCN Component Pill */}
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <strong className="text-zinc-200">FCN-Komponente:</strong>{" "}
              {project.fcnHighlight[isDe ? "de" : "en"]}
            </span>
          </div>
        </div>

        {/* Project Description & Stats */}
        <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {project.description[isDe ? "de" : "en"]}
            </p>
          </div>

          {/* Stats / KPI Chips */}
          <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-3">
            {project.stats.map((st, i) => (
              <div
                key={i}
                className="bg-zinc-900/90 border border-zinc-800 rounded-xl px-3 py-2 text-center flex-1 sm:flex-initial min-w-[76px]"
              >
                <div className="text-sm sm:text-base font-extrabold text-white">
                  {st.value}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                  {st.label[isDe ? "de" : "en"]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

interface BeforeAfterSliderProps {
  language: Language;
  className?: string;
}

export function BeforeAfterSlider({
  language,
  className = "",
}: BeforeAfterSliderProps) {
  const isDe = language === "de";
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  const total = BEFORE_AFTER_PROJECTS.length;

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % total);
  }, [total]);

  // Automated timed slide transition: advances the entire project altogether
  useEffect(() => {
    if (!isPlaying || isHovered || isInteracting) return;

    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, isInteracting, handleNext]);

  return (
    <div
      className={`space-y-4 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Index Tabs (Click to directly switch full-screen project) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-3">
        <div className="flex flex-wrap gap-2">
          {BEFORE_AFTER_PROJECTS.map((proj, idx) => {
            const active = idx === currentIdx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  active
                    ? "bg-zinc-950 text-white shadow-md ring-2 ring-zinc-950/20"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950"
                }`}
                aria-pressed={active}
              >
                <span className="font-mono text-xs opacity-60 mr-1.5">
                  0{idx + 1}.
                </span>
                {proj.category[isDe ? "de" : "en"]}
              </button>
            );
          })}
        </div>

        <div className="text-xs text-zinc-500 font-mono hidden sm:flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span>
            {currentIdx + 1} / {total} {isDe ? "Projekt" : "Project"}
          </span>
        </div>
      </div>

      {/* Full-Width Slide Carousel Window (Only 1 Project Occupies Screen At Once) */}
      <div className="relative w-full overflow-hidden rounded-3xl">
        <div
          className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {BEFORE_AFTER_PROJECTS.map((proj) => (
            <BeforeAfterCard
              key={proj.id}
              project={proj}
              language={language}
              onInteractionStart={() => setIsInteracting(true)}
              onInteractionEnd={() => setIsInteracting(false)}
            />
          ))}
        </div>
      </div>

      {/* Subtle Carousel Controls Below Slide (Controls the Full-Project Movement) */}
      <div className="flex items-center justify-center gap-2 !mt-4 pt-0">
        <button
          type="button"
          onClick={handlePrev}
          title={isDe ? "Vorheriges Projekt anzeigen" : "Show previous project"}
          className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          aria-label="Previous project"
        >
          <span>‹</span>
        </button>

        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          title={
            isPlaying
              ? (isDe ? "Auto-Wechsel pausieren" : "Pause auto-advance")
              : (isDe ? "Auto-Wechsel starten" : "Start auto-advance")
          }
          className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <span className="text-[10px]">{isPlaying ? "⏸" : "▶"}</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          title={isDe ? "Nächstes Projekt anzeigen" : "Show next project"}
          className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
          aria-label="Next project"
        >
          <span>›</span>
        </button>
      </div>
    </div>
  );
}
