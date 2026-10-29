import { Language } from "../lib/i18n";
import { OpenThesisTopic, openThesesData } from "../lib/openTheses";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";
import { Icon } from "./icon";

interface ResearchTopicPageProps {
  topic: OpenThesisTopic;
  language: Language;
  onBack: () => void;
  onNavigateTopic: (slug: string) => void;
}

export function ResearchTopicPage({
  topic,
  language,
  onBack,
  onNavigateTopic,
}: ResearchTopicPageProps) {
  const isDe = language === "de";
  const allTopics = openThesesData[language];
  const otherTopics = allTopics.filter((t) => t.id !== topic.id);

  const mailtoHref = `mailto:${topic.applicationEmail}?subject=${encodeURIComponent(
    topic.applicationSubject
  )}&body=${encodeURIComponent(
    isDe
      ? `Sehr geehrter Herr Shams,\n\nich interessiere mich für die ausgeschriebene Abschlussarbeit "${topic.title}" (${topic.number}).\n\nIm Anhang finden Sie mein kurzes Anschreiben, meinen Lebenslauf sowie meinen aktuellen Notenspiegel.\n\nIch freue mich über ein kurzes Kennenlerngespräch.\n\nMit freundlichen Grüßen,\n`
      : `Dear Mr. Shams,\n\nI am writing to express my interest in the thesis topic "${topic.title}" (${topic.number}).\n\nPlease find attached my brief cover letter, CV, and current transcript of records.\n\nI look forward to discussing the potential collaboration.\n\nBest regards,\n`
  )}`;

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-28 md:pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Übersicht" : "Back to Research Hub"}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Frankfurt UAS · Fachbereich 1
            </span>
            <FrankfurtUasLogo className="h-6 w-auto" variant="dark" />
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#DC2626] text-white text-xs font-extrabold uppercase tracking-wider">
              {topic.number}
            </span>
            <span className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-mono font-medium">
              {topic.degrees}
            </span>
            {topic.disciplines.map((d) => (
              <span
                key={d}
                className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-mono"
              >
                {d}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
            {topic.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {topic.subtitle}
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm leading-relaxed">
            <span className="font-bold text-zinc-950 block mb-1">
              {isDe ? "Kurzübersicht:" : "Overview:"}
            </span>
            {topic.teaser}
          </div>
        </div>

        {/* Real Case Study Banner */}
        <section className="p-6 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626]">
            <span>🏗️</span>
            <span>{isDe ? "Reales Praxisprojekt als Fallstudie" : "Built Case Study"}</span>
          </div>
          <h2 className="font-sans text-lg sm:text-xl font-bold text-white">
            {topic.pilotProject.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            {topic.pilotProject.description}
          </p>
        </section>

        {/* Key Facts / Statistics Bar */}
        <section className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">
            {isDe ? "Zahlen & Daten zum Thema" : "Key Facts & Data"}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topic.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1"
              >
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-[#DC2626]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-600 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{isDe ? "Ausgangslage & Problemstellung" : "Context & Challenge"}</span>
          </h2>
          <div className="space-y-3 text-sm text-zinc-700 leading-relaxed font-light">
            {topic.problemStatement.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{isDe ? "Zielsetzung der Abschlussarbeit" : "Research Objectives"}</span>
          </h2>
          <div className="space-y-2.5">
            {topic.objectives.map((obj, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-zinc-950 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm text-zinc-800 leading-snug font-normal">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Questions */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{isDe ? "Mögliche Forschungsfragen" : "Key Research Questions"}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.researchQuestions.map((q, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#DC2626]">
                    0{i + 1} · {q.title}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Framework & Supervision */}
        <section className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {isDe ? "Rahmenbedingungen" : "Framework & Mentorship"}
            </span>
            <h3 className="font-sans text-lg font-bold text-zinc-950">
              {isDe ? "Wissenschaft trifft Praxis: So läuft die Betreuung" : "Science Meets Practice: Supervision Details"}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {topic.framework.map((f, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-700 flex items-start gap-2.5"
              >
                <span className="text-zinc-400 font-mono">▪</span>
                <span className="leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="space-y-2 border-t border-zinc-200 pt-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
            {isDe ? "Quellen & Grundlagen" : "Key Sources & Literature"}
          </span>
          <ul className="space-y-1 text-xs text-zinc-500 font-light list-disc list-inside">
            {topic.sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Desktop CTA Banner */}
        <section className="p-8 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {isDe ? "Interesse an diesem Thema?" : "Interested in this Topic?"}
            </span>
            <h3 className="font-sans text-xl font-bold text-white">
              {isDe ? "Jetzt für dieses Thema bewerben" : "Apply for this Thesis Topic"}
            </h3>
            <p className="text-xs text-zinc-300 font-light max-w-lg">
              {isDe
                ? "Senden Sie uns ein kurzes Anschreiben, Ihren Lebenslauf und Notenspiegel direkt per E-Mail an office@shams-consult.de."
                : "Send a brief cover letter, your CV, and your transcript of records directly to office@shams-consult.de."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={topic.pdfDownloadUrl}
              download={topic.pdfFileName}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/20"
            >
              <Icon name="file-pdf" className="text-sm" />
              <span>{isDe ? "PDF Flyer" : "PDF Flyer"}</span>
            </a>

            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <span>{isDe ? "Per E-Mail bewerben" : "Apply via Email"}</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Other Open Topics */}
        {otherTopics.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-zinc-200">
            <h3 className="font-sans text-base font-bold text-zinc-950">
              {isDe ? "Weitere offene Forschungsthemen" : "Other Open Research Topics"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherTopics.map((other) => (
                <div
                  key={other.id}
                  onClick={() => onNavigateTopic(other.slug)}
                  className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-[#DC2626] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#DC2626]">
                      {other.number}
                    </span>
                    <span className="text-xs text-zinc-400 group-hover:text-[#DC2626] transition-colors">
                      →
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-zinc-900 group-hover:text-[#DC2626] transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-zinc-600 line-clamp-2 font-light">
                    {other.teaser}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Science-backed UX: Mobile Sticky Action Bar at the bottom (Thumb Zone) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-zinc-200 p-3 shadow-2xl flex items-center gap-2">
        <a
          href={topic.pdfDownloadUrl}
          download={topic.pdfFileName}
          className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-zinc-300 min-h-[48px]"
        >
          <Icon name="file-pdf" className="text-sm text-[#DC2626]" />
          <span>PDF Flyer</span>
        </a>

        <a
          href={mailtoHref}
          className="flex-[2] py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm min-h-[48px]"
        >
          <span>{isDe ? "Jetzt bewerben" : "Apply Now"}</span>
          <span>→</span>
        </a>
      </div>
    </article>
  );
}
