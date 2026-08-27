import { Project } from "../data/projects";
import { Language } from "../lib/i18n";

interface ProjectDetailProps {
  project: Project;
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function ProjectDetail({
  project,
  language,
  onBack,
  onBookConsultation,
}: ProjectDetailProps) {
  const isDe = language === "de";

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Projektübersicht" : "Back to Projects"}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            Shams Consult · {project.categoryLabel[language]}
          </span>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {project.categoryLabel[language]}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {project.title[language]}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            {project.subtitle[language]}
          </p>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs mt-4">
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Standort" : "Location"}
              </span>
              <strong className="text-zinc-900 block font-semibold mt-0.5">
                {project.location[language]}
              </strong>
            </div>

            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Auftraggeber" : "Client"}
              </span>
              <span className="text-zinc-900 block font-medium mt-0.5 line-clamp-2">
                {project.client[language]}
              </span>
            </div>

            {project.legalBasis && (
              <div>
                <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                  {isDe ? "Rechtsgrundlage" : "Legal Basis"}
                </span>
                <span className="text-zinc-900 block font-medium mt-0.5">
                  {project.legalBasis}
                </span>
              </div>
            )}

            {project.year && (
              <div>
                <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                  {isDe ? "Jahr / Status" : "Year / Status"}
                </span>
                <span className="text-[#DC2626] block font-bold mt-0.5">
                  {project.year}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Authentic Plan / Architecture Drawing Image */}
        {project.image && (
          <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-md">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-auto max-h-[500px] object-contain mx-auto bg-zinc-950"
              loading="lazy"
            />
            <figcaption className="p-3.5 sm:p-4 text-xs text-zinc-500 bg-zinc-50 border-t border-zinc-200">
              <strong>{isDe ? "Plandokumentation:" : "Architectural Plan:"}</strong> {project.imageAlt}
            </figcaption>
          </figure>
        )}

        {/* Project Key Highlights */}
        <div className="p-6 rounded-2xl bg-[#111111] text-white space-y-4 shadow-xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DC2626] block">
            {isDe ? "PROJEKT-HIGHLIGHTS" : "KEY PROJECT HIGHLIGHTS"}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFacts[language].map((fact, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-200">
                <span className="text-[#DC2626] font-bold text-sm">✓</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Project Narrative */}
        <div className="space-y-10 text-zinc-700 leading-relaxed pt-2">
          {/* 1. Ausgangslage */}
          <section className="space-y-3">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 border-l-4 border-[#DC2626] pl-3.5">
              {isDe ? "1. Ausgangslage & Projektbeteiligte" : "1. Context & Stakeholders"}
            </h2>
            <p className="text-sm sm:text-base font-light text-zinc-700">
              {project.overview[language]}
            </p>
          </section>

          {/* 2. Herausforderung */}
          <section className="space-y-3">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 border-l-4 border-[#DC2626] pl-3.5">
              {isDe ? "2. Zielsetzung & Problemstellung" : "2. Objectives & Challenges"}
            </h2>
            <p className="text-sm sm:text-base font-light text-zinc-700">
              {project.challenge[language]}
            </p>
          </section>

          {/* 3. Konzept & Umsetzung */}
          <section className="space-y-3">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 border-l-4 border-[#DC2626] pl-3.5">
              {isDe ? "3. Städtebauliches Konzept & Architektur" : "3. Urban Concept & Architecture"}
            </h2>
            <p className="text-sm sm:text-base font-light text-zinc-700">
              {project.concept[language]}
            </p>
          </section>

          {/* 4. Ergebnis */}
          <section className="space-y-3">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 border-l-4 border-[#DC2626] pl-3.5">
              {isDe ? "4. Ergebnis & Genehmigungserfolg" : "4. Results & Permitting Success"}
            </h2>
            <p className="text-sm sm:text-base font-light text-zinc-700">
              {project.outcome[language]}
            </p>
          </section>
        </div>

        {/* Official Documents & Downloads (if available, e.g. Maienweg 2 Ulm) */}
        {project.documents && project.documents.length > 0 && (
          <section className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
                  {isDe ? "AMTLICHE DOKUMENTE & DOWNLOADS" : "OFFICIAL DOCUMENTS & DOWNLOADS"}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-zinc-950">
                  {isDe ? "Rechtskräftige Satzungsunterlagen" : "Legally Enacted Statutes"}
                </h3>
              </div>

              {project.externalReferenceUrl && (
                <a
                  href={project.externalReferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#DC2626] hover:underline hidden sm:inline"
                >
                  {isDe ? "Stadtportal ansehen ↗" : "City Portal ↗"}
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-zinc-400 shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-zinc-900 group-hover:text-[#DC2626] transition-colors block line-clamp-2">
                      {doc.title}
                    </span>
                    {doc.size && (
                      <span className="text-[10px] text-zinc-400 font-mono block">
                        {doc.size}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-[#DC2626] shrink-0 font-bold">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Consultation Call to Action */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
            {isDe
              ? "Planen Sie ein ähnliches Bau- oder Bebauungsplanvorhaben?"
              : "Planning a Similar Development or Zoning Project?"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            {isDe
              ? "Lassen Sie Ihr Vorhaben unverbindlich baurechtlich und städtebaulich von unserem Gründer & Büroinhaber prüfen."
              : "Have your project evaluated from a regulatory, urban planning, and architectural standpoint by our founder & principal architect."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isDe ? "Projekt-Erstgespräch anfragen →" : "Request Consultation →"}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="bg-transparent border border-zinc-600 hover:border-white text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {isDe ? "Alle Projekte ansehen" : "View All Projects"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
