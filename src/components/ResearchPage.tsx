import { useState } from "react";
import { Language } from "../lib/i18n";
import { thesesAndResearch, ThesisItem } from "../lib/theses";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";

interface ResearchPageProps {
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

type FilterType = "all" | "Fachpublikation" | "Masterarbeit" | "Bachelorarbeit";

export function ResearchPage({
  language,
  onBack,
  onBookConsultation,
}: ResearchPageProps) {
  const isDe = language === "de";
  const [selectedType, setSelectedType] = useState<FilterType>("all");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Extract all unique topics
  const allTopics = Array.from(
    new Set(thesesAndResearch.flatMap((t) => t.topics))
  );

  const filteredTheses = thesesAndResearch.filter((item: ThesisItem) => {
    const matchesType = selectedType === "all" || item.type === selectedType;
    const matchesTopic = !selectedTopic || item.topics.includes(selectedTopic);
    return matchesType && matchesTopic;
  });

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Startseite" : "Back to Home"}</span>
          </button>

          <div className="flex items-center gap-2">
            <FrankfurtUasLogo className="h-6 w-auto" variant="dark" />
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {isDe
                ? "WISSENSCHAFTLICHE FORSCHUNG & LEHRE"
                : "ACADEMIC RESEARCH & TEACHING"}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {isDe
              ? "Bauforschung & Thesen an der Frankfurt UAS"
              : "Construction Research & Theses at Frankfurt UAS"}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-3xl">
            {isDe
              ? "Als Dozent an der Frankfurt University of Applied Sciences (Frankfurt UAS) betreut Dipl.-Ing. Majeed Shams zukunftsweisende Abschlussarbeiten und publiziert praxisorientierte Forschungsbeiträge zu Baukostensteuerung, Mängelprävention und Baurechtsreformen."
              : "As a lecturer at Frankfurt University of Applied Sciences (Frankfurt UAS), Dipl.-Ing. Majeed Shams supervises groundbreaking theses and publishes peer-reviewed research on cost management, defect avoidance, and statutory zoning reforms."}
          </p>
        </div>

        {/* Institutional Authority Hero Card */}
        <div className="bg-[#111112] text-white rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-zinc-200 text-xs font-mono">
                <span>Frankfurt University of Applied Sciences</span>
                <span>·</span>
                <span className="text-[#DC2626] font-bold">Fachbereich 1: Architektur & Bauingenieurwesen</span>
              </div>

              <h2 className="font-sans text-xl sm:text-2xl font-bold text-white leading-snug">
                {isDe
                  ? "Verbindung von universitärer Spitzenforschung & realer Baupraxis"
                  : "Bridging Academic Rigor & Real-World Construction Practice"}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {isDe
                  ? "Jede wissenschaftliche Arbeit zielt auf messbaren Mehrwert für Bauherren ab: Reduktion von Baukostenrisiken nach DIN 276, Vermeidung von Baumängeln und Beschleunigung kommunaler Genehmigungsprozesse."
                  : "Every thesis and publication translates directly into actionable client advantages: mitigating budget overruns (DIN 276), eliminating site defects, and fast-tracking municipal building approvals."}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center gap-3 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
              <FrankfurtUasLogo className="h-10 w-auto" variant="light" />
              <div className="text-left md:text-right space-y-0.5">
                <span className="text-xs font-bold text-white block">Dipl.-Ing. Majeed Shams M.Eng.</span>
                <span className="text-[11px] text-zinc-400 block">Dozent, Erst- & Zweitprüfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls: Type Tabs & Topic Pills */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
            {/* Type Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 rounded-xl border border-zinc-200 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedType("all")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedType === "all"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {isDe ? "Alle Arbeiten (7)" : "All Research (7)"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("Fachpublikation")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedType === "Fachpublikation"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {isDe ? "Fachpublikationen (1)" : "Publications (1)"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("Masterarbeit")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedType === "Masterarbeit"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {isDe ? "Masterarbeiten (2)" : "Master Theses (2)"}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("Bachelorarbeit")}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedType === "Bachelorarbeit"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {isDe ? "Bachelorarbeiten (4)" : "Bachelor Theses (4)"}
              </button>
            </div>

            {/* Results count */}
            <span className="text-xs font-mono text-zinc-500">
              {filteredTheses.length} {isDe ? "Ergebnisse" : "papers found"}
            </span>
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-bold text-zinc-500 mr-1">
              {isDe ? "Themen:" : "Topics:"}
            </span>
            {selectedTopic && (
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#DC2626] text-white cursor-pointer"
              >
                ✕ {selectedTopic}
              </button>
            )}
            {allTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                  selectedTopic === topic
                    ? "bg-[#DC2626] text-white border-[#DC2626]"
                    : "bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Theses & Research Cards List */}
        <div className="space-y-6">
          {filteredTheses.map((thesis) => {
            const isPublication = thesis.type === "Fachpublikation";
            const isMaster = thesis.type === "Masterarbeit";

            return (
              <div
                key={thesis.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 shadow-xs hover:shadow-xl transition-all duration-300 space-y-5"
              >
                {/* Card Header: Type Badge & Term */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-md ${
                        isPublication
                          ? "bg-red-50 text-[#DC2626] border border-red-200"
                          : isMaster
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {thesis.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {thesis.term}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-zinc-500">
                    {thesis.institution}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1.5">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 leading-snug">
                    {thesis.title}
                  </h3>
                  {thesis.subtitle && (
                    <p className="text-sm font-medium text-zinc-600">
                      {thesis.subtitle}
                    </p>
                  )}
                </div>

                {/* Authors & Supervisors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs">
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">
                      {isPublication ? (isDe ? "Autoren" : "Authors") : (isDe ? "Verfasser" : "Author")}
                    </span>
                    <span className="font-bold text-zinc-900">{thesis.author}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono tracking-wider">
                      {isDe ? "Akademische Betreuung / Prüfer" : "Academic Supervisors"}
                    </span>
                    <span className="font-bold text-zinc-900">{thesis.supervisors}</span>
                  </div>
                </div>

                {/* Abstract Summary */}
                <p className="text-xs sm:text-sm text-zinc-700 font-light leading-relaxed">
                  {thesis.summary}
                </p>

                {/* Key Takeaway Box */}
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#DC2626]">
                    <span>✓</span>
                    <span>{isDe ? "Praxis-Erkenntnis für Bauherren & Investoren:" : "Practical Takeaway for Developers & Clients:"}</span>
                  </div>
                  <p className="text-xs text-zinc-800 font-medium leading-relaxed">
                    {thesis.keyTakeaway}
                  </p>
                </div>

                {/* Topic Tags Footer */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {thesis.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
              {isDe
                ? "Planen Sie Ihr Projekt mit universitärer Präzision"
                : "Plan Your Project with Academic Precision"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {isDe
                ? "Profitieren Sie von fundierten Kostenkalkulationen nach DIN 276, lückenloser Bauüberwachung und rechtssicherer Genehmigungsplanung."
                : "Benefit from precise cost estimations (DIN 276), rigorous on-site supervision, and airtight municipal permit strategies."}
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer"
          >
            <span>{isDe ? "Kostenloses Erstgespräch anfragen" : "Book Free Consultation"}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
