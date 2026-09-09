import { useState } from "react";
import { Language } from "../lib/i18n";
import { comparisonTopics, ComparisonTopic } from "../data/comparisons";
import { Icon } from "./icon";

interface ComparisonPageProps {
  initialTopicId?: string;
  language: Language;
  onNavigateHome: () => void;
  onBookConsultation: () => void;
  onNavigateTopic?: (slug: string) => void;
}

export function ComparisonPage({
  initialTopicId,
  language,
  onNavigateHome,
  onBookConsultation,
  onNavigateTopic,
}: ComparisonPageProps) {
  const isDe = language === "de";

  // Find initial topic or default to first
  const defaultTopic =
    comparisonTopics.find((t) => t.id === initialTopicId || t.slug === initialTopicId) ||
    comparisonTopics[0];

  const [activeTopic, setActiveTopic] = useState<ComparisonTopic>(defaultTopic);

  const handleSelectTopic = (topic: ComparisonTopic) => {
    setActiveTopic(topic);
    if (onNavigateTopic) {
      onNavigateTopic(topic.slug);
    } else {
      window.history.pushState({}, "", `/vergleich/${topic.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-3 border-b border-zinc-100 bg-zinc-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs text-zinc-500 font-medium">
            <li>
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-zinc-950 transition-colors cursor-pointer"
              >
                {isDe ? "Home" : "Home"}
              </button>
            </li>
            <li aria-hidden="true" className="text-zinc-400">/</li>
            <li>
              <span className="text-zinc-500">
                {isDe ? "Entscheidungshilfe & Vergleiche" : "Decision Guide & Comparisons"}
              </span>
            </li>
            <li aria-hidden="true" className="text-zinc-400">/</li>
            <li>
              <span className="text-zinc-950 font-semibold">
                {activeTopic.badge[language] ?? activeTopic.badge.de}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        {/* Subtle Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Bold Architectural Crimson Circle Accent in Far-Right Margin */}
        <div
          className="absolute -right-12 sm:right-4 lg:right-10 top-12 pointer-events-none select-none z-0 hidden lg:flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center animate-couch-settle">
            {/* Concentric Outer Accent Ring */}
            <div className="absolute w-[240px] h-[240px] lg:w-[280px] lg:h-[280px] rounded-full border-2 border-[#DC2626]/30" />

            {/* Solid Bold Crimson Architectural Circle */}
            <div className="w-[170px] h-[170px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#DC2626] shadow-2xl shadow-red-600/35" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#DC2626] bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
              <span>{activeTopic.badge[language] ?? activeTopic.badge.de}</span>
            </div>

            {/* H1 */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
              {activeTopic.title[language] ?? activeTopic.title.de}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed max-w-3xl">
              {activeTopic.subtitle[language] ?? activeTopic.subtitle.de}
            </p>

            {/* Action CTA & Consultation Trigger */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookConsultation}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md text-center cursor-pointer min-h-[44px]"
              >
                {isDe ? "Erstgespräch vereinbaren" : "Schedule Initial Consultation"}
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="bg-white border border-zinc-300 hover:border-zinc-950 text-zinc-900 px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer min-h-[44px]"
              >
                {isDe ? "Zurück zur Übersicht" : "Back to Home"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Interactive Topic Tab Bar */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 shrink-0 mr-2 hidden sm:inline">
              {isDe ? "Themen:" : "Topics:"}
            </span>
            {comparisonTopics.map((topic) => {
              const isActive = topic.id === activeTopic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-sm ring-1 ring-zinc-950"
                      : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
                  }`}
                >
                  {topic.badge[language] ?? topic.badge.de}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Core Value Summary Callout */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-50/70 via-white to-zinc-50 border border-red-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
              <Icon name="scale-balanced" className="text-2xl" />
            </div>
            <div className="space-y-1 text-left flex-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#DC2626]">
                {isDe ? "Das Wichtigste auf einen Blick" : "Key Takeaway at a Glance"}
              </h2>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-normal">
                {activeTopic.summary[language] ?? activeTopic.summary.de}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Comparison Matrix Table */}
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-left space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {isDe ? "Detailvergleich im direkten Gegenüber" : "Direct Criteria Comparison"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light">
              {isDe
                ? "Objektiver Leistungs- und Modellvergleich nach Kriterien des deutschen Baurechts und der HOAI."
                : "Objective performance and structural delivery comparison based on German building standards and HOAI regulations."}
            </p>
          </div>

          {/* Responsive Comparison Grid / Cards */}
          <div className="overflow-hidden border border-zinc-200 rounded-2xl shadow-xs bg-white">
            {/* Header Row (Desktop) */}
            <div className="hidden lg:grid grid-cols-12 bg-zinc-100/80 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-700 py-3.5 px-6">
              <div className="col-span-4">
                {isDe ? "Kriterium & Fragestellung" : "Criterion & Context"}
              </div>
              <div className="col-span-4 text-[#DC2626] flex items-center gap-2 font-extrabold">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span>{activeTopic.shamsLabel[language] ?? activeTopic.shamsLabel.de}</span>
              </div>
              <div className="col-span-4 text-zinc-600">
                {activeTopic.competitorLabel[language] ?? activeTopic.competitorLabel.de}
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-zinc-200">
              {activeTopic.criteria.map((criterion, idx) => {
                const shamsText = criterion.shamsConsult.text[language] ?? criterion.shamsConsult.text.de;
                const competitorText = criterion.competitorModel.text[language] ?? criterion.competitorModel.text.de;
                const explanation = criterion.explanation[language] ?? criterion.explanation.de;
                const title = criterion.title[language] ?? criterion.title.de;

                return (
                  <div key={idx} className="p-5 lg:p-6 transition-colors hover:bg-zinc-50/50">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
                      {/* Column 1: Criterion Title & Practical Context */}
                      <div className="lg:col-span-4 space-y-1.5 text-left">
                        <h3 className="font-sans text-sm sm:text-base font-bold text-zinc-950">
                          {title}
                        </h3>
                        <p className="text-xs text-zinc-500 italic leading-relaxed">
                          💡 {explanation}
                        </p>
                      </div>

                      {/* Column 2: Shams Consult Advantage */}
                      <div className="lg:col-span-4 p-4 rounded-xl bg-red-50/60 border border-red-100 text-left space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-5 w-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                            ✓
                          </span>
                          <span className="text-xs font-bold text-[#DC2626]">
                            {activeTopic.shamsLabel[language] ?? activeTopic.shamsLabel.de}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-900 leading-relaxed font-medium">
                          {shamsText}
                        </p>
                      </div>

                      {/* Column 3: Competitor Model Compromise */}
                      <div className="lg:col-span-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-left space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="h-5 w-5 rounded-full bg-zinc-200 text-zinc-600 flex items-center justify-center text-xs font-bold shrink-0">
                            ✕
                          </span>
                          <span className="text-xs font-bold text-zinc-700">
                            {activeTopic.competitorLabel[language] ?? activeTopic.competitorLabel.de}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                          {competitorText}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Strategic Takeaways Checklist */}
      <section className="py-12 bg-zinc-50 border-t border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {isDe ? "Fazit & Mehrwert" : "Core Takeaways"}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
              {isDe ? "Ihre Vorteile bei Shams Consult" : "Your Advantages with Shams Consult"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTopic.takeaways.map((takeaway, tIdx) => {
              const text = takeaway[language] ?? takeaway.de;
              return (
                <div
                  key={tIdx}
                  className="bg-white p-6 rounded-xl border border-zinc-200/90 shadow-xs flex items-start gap-4 text-left"
                >
                  <div className="h-7 w-7 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-sm shrink-0 font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-16 bg-[#0e0f11] text-white relative overflow-hidden">
        <div
          className="absolute -left-12 sm:-left-6 lg:left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden lg:flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative flex items-center justify-center animate-couch-settle">
            {/* Concentric Outer Accent Ring */}
            <div className="absolute w-[210px] h-[210px] lg:w-[240px] lg:h-[240px] rounded-full border-2 border-[#DC2626]/30" />

            {/* Solid Bold Crimson Architectural Circle */}
            <div className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] rounded-full bg-[#DC2626] shadow-2xl shadow-red-600/35" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            {isDe ? "Persönliche Beratung" : "Personal Consultation"}
          </span>

          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isDe
              ? "Lassen Sie uns Ihr Bauvorhaben unverbindlich vergleichen"
              : "Let's Benchmark Your Development in an Initial Consultation"}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            {isDe
              ? "Ob Neubau, Aufstockung, Umnutzung oder städtebaulicher Bebauungsplan: Wir analysieren Ihr Grundstück und zeigen Ihnen, wie Sie mit unserem Modell Planungssicherheit gewinnen."
              : "Whether new construction, vertical addition, adaptive reuse, or master planning: We audit your property and demonstrate how our approach ensures financial and permit certainty."}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-8 rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              {isDe ? "Erstgespräch vereinbaren" : "Schedule Initial Consultation"}
            </button>
            <a
              href="tel:+496974223777"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-sm text-xs transition-colors cursor-pointer min-h-[44px] flex items-center gap-2 border border-white/15"
            >
              <Icon name="phone" />
              <span>+49 (0) 69 74 22 3 777</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
