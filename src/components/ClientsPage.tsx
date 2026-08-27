import { Translations } from "../lib/i18n";
import { partnersData, PartnerItem } from "../lib/partners";

interface ClientsPageProps {
  t: Translations["clients"];
  onBack: () => void;
  onBookConsultation: () => void;
}

export function ClientsPage({
  t,
  onBack,
  onBookConsultation,
}: ClientsPageProps) {
  return (
    <article className="min-h-screen bg-white text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{t.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            Shams Consult · {t.pageTag}
          </span>
        </div>

        {/* Header Block with Minimal Text */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {t.badge}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {t.heading}
          </h1>

          <p className="font-sans text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {partnersData.map((partner: PartnerItem) => (
            <div
              key={partner.id}
              className="p-7 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between space-y-6 group"
            >
              {/* Logo & Category Header */}
              <div className="flex items-center justify-between gap-4 border-b border-zinc-200/80 pb-6">
                <div className="h-14 sm:h-16 w-40 sm:w-48 p-2.5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-11 w-auto max-w-[150px] object-contain opacity-100"
                    loading="lazy"
                  />
                </div>

                {partner.location && (
                  <span className="text-[11px] font-mono font-medium text-zinc-500 bg-white px-2.5 py-1 rounded-md border border-zinc-200 shrink-0">
                    📍 {partner.location}
                  </span>
                )}
              </div>

              {/* Core Details */}
              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
                    {partner.tagline}
                  </span>
                  <h2 className="font-sans text-lg sm:text-xl font-bold text-zinc-950 mt-1 leading-snug">
                    {partner.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                  {partner.jointProject}
                </p>
              </div>

              {/* Links: Project Case Study + External Website */}
              <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  {partner.projectSlug && (
                    <a
                      href={`/project/${partner.projectSlug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors group/link"
                    >
                      <span>{t.viewCaseStudy}</span>
                      <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                    </a>
                  )}

                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    <span>{t.visitWebsite}</span>
                    <span>↗</span>
                  </a>
                </div>

                {partner.projectYear && (
                  <span className="text-[10px] font-mono text-zinc-400">
                    {partner.projectYear}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-left">
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-white">
              {t.ctaHeading}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl">
              {t.ctaSubtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg cursor-pointer shrink-0"
          >
            {t.ctaButton}
          </button>
        </section>
      </div>
    </article>
  );
}
