import { Project } from "../data/projects";
import { Language, Translations } from "../lib/i18n";
import { Icon } from "./icon";

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

        {/* On-Site Construction & Technical Photo Documentation Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-6 pt-2">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
                {language === "de" ? "BAUAUSFÜHRUNG & FOTODOKUMENTATION" : "CONSTRUCTION & PHOTO DOCUMENTATION"}
              </span>
              <h3 className="font-sans text-xl font-bold text-zinc-950">
                {language === "de" ? "Vor-Ort-Einblicke & Technische Montage" : "On-Site Field Records & Technical Assembly"}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.title[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-zinc-950/80 text-white text-[10px] font-mono">
                      Phase 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-5 space-y-1.5 bg-white">
                    <h4 className="font-sans text-sm font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors">
                      {item.title[language]}
                    </h4>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {item.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Press / Blog Reference Card */}
        {(project.externalReferenceUrl || project.blogSlug) && (
          <section className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DC2626]">
                {language === "de" ? "FACHBEITRAG & PRESSEBERICHT" : "RELATED ARTICLE & PRESS COVERAGE"}
              </span>
              <h4 className="font-sans text-base font-bold text-zinc-950">
                {project.externalReferenceTitle
                  ? project.externalReferenceTitle[language]
                  : language === "de"
                  ? "Tipps für die wirtschaftliche Umsetzung nachhaltiger Projekte"
                  : "Tips for the Cost-Effective Execution of Sustainable Projects"}
              </h4>
              <p className="text-xs text-zinc-600 font-light">
                {language === "de"
                  ? "Erfahren Sie mehr über zukunftsfähige Projektsteuerung, QNG-Zertifizierung und Fördermittel in unserem Fachmagazin."
                  : "Learn more about sustainable project management, QNG certification, and public funding programs."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {project.blogSlug && (
                <a
                  href={`/blog/${project.blogSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>{language === "de" ? "Fachartikel lesen" : "Read Article"}</span>
                  <span>→</span>
                </a>
              )}
              {project.externalReferenceUrl && (
                <a
                  href={project.externalReferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-200 text-xs font-bold transition-all shadow-xs"
                >
                  <span>{language === "de" ? "Pressebericht" : "Press Article"}</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </section>
        )}

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
                    <Icon name="file-lines" className="text-xl text-[#DC2626]" />
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
