import { Project } from "../data/projects";
import { Language, Translations } from "../lib/i18n";

interface ProjectDetailProps {
  project: Project;
  t: Translations["projectDetail"];
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function ProjectDetail({
  project,
  t,
  language,
  onBack,
  onBookConsultation,
}: ProjectDetailProps) {
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
            <span>{t.backToProjects}</span>
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
                {t.locationLabel}
              </span>
              <span className="font-semibold text-zinc-900 mt-1 block">
                {project.location[language]}
              </span>
            </div>

            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {t.clientLabel}
              </span>
              <span className="font-semibold text-zinc-900 mt-1 block">
                {project.client[language]}
              </span>
            </div>

            {project.legalBasis && (
              <div>
                <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                  {t.legalBasisLabel}
                </span>
                <span className="font-semibold text-zinc-900 mt-1 block font-mono text-[11px]">
                  {project.legalBasis}
                </span>
              </div>
            )}

            {project.year && (
              <div>
                <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                  {t.yearLabel}
                </span>
                <span className="font-semibold text-zinc-900 mt-1 block font-mono">
                  {project.year}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Project Image */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-100">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Overview */}
        <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
          <h2 className="font-sans text-xl font-bold text-zinc-950">
            {t.scopeLabel}
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
            {project.overview[language]}
          </p>
        </div>

        {/* Key Highlights Section */}
        {project.keyFacts && project.keyFacts[language].length > 0 && (
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {t.highlightsTitle}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFacts[language].map((fact, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs"
                >
                  <span className="h-5 w-5 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-800 font-light">
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deep Dive: Challenge, Objective, Concept, Outcome */}
        <div className="space-y-8 pt-4">
          {project.challenge && (
            <section className="space-y-2">
              <h3 className="font-sans text-lg font-bold text-zinc-950">
                {t.challengeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                {project.challenge[language]}
              </p>
            </section>
          )}

          {project.concept && (
            <section className="space-y-2">
              <h3 className="font-sans text-lg font-bold text-zinc-950">
                {t.conceptTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                {project.concept[language]}
              </p>
            </section>
          )}

          {project.outcome && (
            <section className="space-y-2">
              <h3 className="font-sans text-lg font-bold text-zinc-950">
                {t.outcomeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                {project.outcome[language]}
              </p>
            </section>
          )}
        </div>

        {/* Official Statutory Documents */}
        {project.documents && project.documents.length > 0 && (
          <section className="p-6 rounded-2xl bg-zinc-900 text-white space-y-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#DC2626] block">
                {t.officialDocsTitle}
              </span>
              <h3 className="font-sans text-base font-bold text-white">
                {t.bindingNotice}
              </h3>
            </div>

            <div className="space-y-2 pt-2">
              {project.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#DC2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="text-xs text-zinc-200 group-hover:text-white font-medium">
                      {doc.title}
                    </span>
                  </div>
                  {doc.size && (
                    <span className="text-[10px] font-mono text-zinc-400">
                      {doc.size}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Consultation CTA */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-left">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
              {t.inquiryHeading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              {t.inquirySub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer text-center"
            >
              {t.inquiryButton}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="bg-white/10 hover:bg-white/20 text-zinc-200 px-5 py-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center"
            >
              {t.allProjectsButton}
            </button>
          </div>
        </section>
      </div>
    </article>
  );
}
