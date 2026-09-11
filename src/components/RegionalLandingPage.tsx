import { useState } from "react";
import { RegionalLandingPageData } from "../data/regionalLandingPages";
import { Language, Translations } from "../lib/i18n";

interface RegionalLandingPageProps {
  data: RegionalLandingPageData;
  language: Language;
  t: Translations["regionalLandingPage"];
  onBookConsultation: () => void;
  onNavigateHome: () => void;
  onNavigateProject?: (id: string) => void;
}

export function RegionalLandingPage({
  data,
  language,
  t,
  onBookConsultation,
  onNavigateHome,
  onNavigateProject,
}: RegionalLandingPageProps) {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeDistrict =
    data.districts?.find((d) => d.id === selectedDistrictId) ||
    data.districts?.[0];

  const eyebrow = data.eyebrow[language] ?? data.eyebrow.de;
  const h1 = data.h1[language] ?? data.h1.de;
  const subtitle = data.subtitle[language] ?? data.subtitle.de;
  const localFocusTitle = data.localFocusTitle[language] ?? data.localFocusTitle.de;
  const localFocusDescription = data.localFocusDescription[language] ?? data.localFocusDescription.de;
  const officeName = data.office.name[language] ?? data.office.name.de;
  const officeCity = data.office.city[language] ?? data.office.city.de;

  const cityName = eyebrow.replace(/^(Architektur & Stadtplanung |Architecture & Urban Planning )/i, "");

  return (
    <article className="min-h-screen bg-white text-zinc-900">
      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-3 border-b border-zinc-100 bg-zinc-50/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs text-zinc-500 font-medium flex-wrap">
            <li>
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-zinc-950 transition-colors cursor-pointer"
              >
                {t.homeBreadcrumb}
              </button>
            </li>
            <li aria-hidden="true" className="text-zinc-400">/</li>
            {data.parentPath && data.parentName && (
              <>
                <li>
                  <a
                    href={data.parentPath}
                    className="hover:text-zinc-950 transition-colors cursor-pointer text-zinc-600"
                  >
                    {data.parentName[language] ?? data.parentName.de}
                  </a>
                </li>
                <li aria-hidden="true" className="text-zinc-400">/</li>
              </>
            )}
            <li>
              <span className="text-zinc-950 font-semibold">{eyebrow}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Bold Architectural Crimson Circle Accent */}
        <div
          className="absolute xl:right-10 2xl:right-20 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden xl:flex items-center justify-center"
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
          <div className="max-w-4xl space-y-6 text-left">
            {/* Eyebrow & Credential Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#DC2626] bg-red-50 border border-red-200/60 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
                {eyebrow}
              </span>
              <span className="text-xs font-semibold text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                {t.akhRegistrationBadge}
              </span>
              <span className="text-xs font-semibold text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                {t.experienceBadge}
              </span>
            </div>

            {/* Primary H1 Containing Exact City + Service */}
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.18]">
              {h1}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-700 font-light leading-relaxed max-w-3xl">
              {subtitle}
            </p>

            {/* Strategic Highlights Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm font-medium text-zinc-800">
              {data.heroHighlights.map((highlight) => {
                const hlText = highlight[language] ?? highlight.de;
                return (
                  <li key={hlText} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold text-base leading-none">✓</span>
                    <span>{hlText}</span>
                  </li>
                );
              })}
            </ul>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md text-center cursor-pointer min-h-[44px]"
              >
                {t.requestConsultation}
              </button>
              <a
                href={data.office.phoneHref}
                className="bg-white border border-zinc-300 hover:border-zinc-950 text-zinc-900 px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center gap-2 shadow-xs cursor-pointer min-h-[44px]"
              >
                <span>{t.callDirectly}</span>
                <span className="font-mono text-[#DC2626]">{data.office.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2.5 Multi-Disciplinary Service Triad */}
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.serviceTriadBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {t.serviceTriadHeading}
            </h2>
            <p className="text-sm text-zinc-600 font-light">
              {t.serviceTriadSubtitlePrefix} {cityName} {t.serviceTriadSubtitleSuffix}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Architektur & Hochbau */}
            <div className="bg-white border border-zinc-200 rounded-xl p-7 text-left space-y-4 hover:border-zinc-950 transition-colors">
              <span className="font-mono text-xs font-bold tracking-widest text-[#DC2626] uppercase block">
                {t.pillar1Tag}
              </span>
              <div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  {t.pillar1Title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  {t.pillar1Subtitle}
                </p>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                {t.pillar1Desc}
              </p>
              <ul className="text-xs text-zinc-700 space-y-1.5 pt-3 border-t border-zinc-100 font-light">
                {t.pillar1Bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Stadtplanung & B-Pläne */}
            <div className="bg-white border border-zinc-200 rounded-xl p-7 text-left space-y-4 hover:border-zinc-950 transition-colors">
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 uppercase block">
                {t.pillar2Tag}
              </span>
              <div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  {t.pillar2Title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  {t.pillar2Subtitle}
                </p>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                {t.pillar2Desc}
              </p>
              <ul className="text-xs text-zinc-700 space-y-1.5 pt-3 border-t border-zinc-100 font-light">
                {t.pillar2Bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-zinc-950 font-bold">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Genehmigungen & Baurecht */}
            <div className="bg-white border border-zinc-200 rounded-xl p-7 text-left space-y-4 hover:border-zinc-950 transition-colors">
              <span className="font-mono text-xs font-bold tracking-widest text-[#DC2626] uppercase block">
                {t.pillar3Tag}
              </span>
              <div>
                <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                  {t.pillar3Title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">
                  {t.pillar3Subtitle}
                </p>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-light">
                {t.pillar3Desc}
              </p>
              <ul className="text-xs text-zinc-700 space-y-1.5 pt-3 border-t border-zinc-100 font-light">
                {t.pillar3Bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span className="text-[#DC2626] font-bold">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Regional Focus & Regulatory Mastery */}
      <section className="py-12 lg:py-16 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {t.regionalExpertiseBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                {localFocusTitle}
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed font-light">
                {localFocusDescription}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.localRegulations.map((reg) => {
                const regTitle = reg.title[language] ?? reg.title.de;
                const regDesc = reg.description[language] ?? reg.description.de;
                return (
                  <div
                    key={regTitle}
                    className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 text-left hover:border-zinc-300 transition-colors"
                  >
                    <div className="w-1.5 h-6 bg-[#DC2626] rounded-full" />
                    <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wide">
                      {regTitle}
                    </h3>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {regDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3.1 Suburbs & City Districts Guide */}
      {data.districts && data.districts.length > 0 && (
        <section className="py-14 lg:py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-left space-y-3 mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {t.districtsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                {t.districtsHeading} {cityName}
              </h2>
              <p className="text-sm text-zinc-600 font-light">
                {t.districtsSubtitle}
              </p>
            </div>

            {/* Science-backed UX: Thumb-friendly district pill selector (min 44px tap target) */}
            <div
              role="tablist"
              aria-label={t.selectDistrictAria}
              className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin focus:outline-hidden"
            >
              {data.districts.map((district) => {
                const isSelected = activeDistrict?.id === district.id;
                const dName = district.name[language] ?? district.name.de;
                return (
                  <button
                    key={district.id}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => setSelectedDistrictId(district.id)}
                    className={`shrink-0 px-4 py-2.5 rounded-full text-xs font-bold transition-all min-h-[44px] cursor-pointer flex items-center gap-2 border ${
                      isSelected
                        ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                        : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isSelected ? "bg-[#DC2626]" : "bg-zinc-300"
                      }`}
                    />
                    <span>{dName}</span>
                  </button>
                );
              })}
            </div>

            {/* Active District Detail Card */}
            {activeDistrict && (
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8 text-left transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200/60 px-3 py-1 rounded-full mb-2">
                      {activeDistrict.badge[language] ?? activeDistrict.badge.de}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                      {activeDistrict.name[language] ?? activeDistrict.name.de}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium mt-1">
                      <span className="font-semibold text-zinc-700">
                        {t.coveredMicroLocationsLabel}
                      </span>{" "}
                      {activeDistrict.suburbs[language] ?? activeDistrict.suburbs.de}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {activeDistrict.path && (
                      <a
                        href={activeDistrict.path}
                        className="bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] inline-flex items-center gap-2 shadow-xs"
                      >
                        <span>{t.learnMore}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer shadow-xs"
                    >
                      {t.inquireProjectButton}
                    </button>
                  </div>
                </div>

                <p className="text-sm text-zinc-700 font-light leading-relaxed my-6">
                  {activeDistrict.summary[language] ?? activeDistrict.summary.de}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-100">
                  {/* Column 1: Architektonische Schwerpunkte */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
                      {t.architecturalFocusHeading}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-light">
                      {activeDistrict.focusAreas.map((focus) => {
                        const text = focus[language] ?? focus.de;
                        return (
                          <li key={text} className="flex items-start gap-2">
                            <span className="text-[#DC2626] font-bold text-sm leading-tight">✓</span>
                            <span>{text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Column 2: Baurecht & Lokale Satzungen */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
                      {t.zoningRequirementsHeading}
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 font-light">
                      {activeDistrict.zoningHighlights.map((zoning) => {
                        const text = zoning[language] ?? zoning.de;
                        return (
                          <li key={text} className="flex items-start gap-2">
                            <span className="text-zinc-950 font-bold text-sm leading-tight">§</span>
                            <span>{text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Bottom District Action Strip */}
                <div className="mt-8 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <span className="text-zinc-500 font-light">
                    {t.districtActionPrompt}
                  </span>
                  <div className="flex items-center gap-4">
                    {activeDistrict.path && (
                      <a
                        href={activeDistrict.path}
                        className="text-xs font-bold text-zinc-950 hover:text-[#DC2626] transition-colors min-h-[36px] flex items-center gap-1 underline underline-offset-4"
                      >
                        <span>{t.learnMore}</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="text-xs font-bold text-[#DC2626] hover:underline cursor-pointer min-h-[36px] flex items-center gap-1"
                    >
                      <span>
                        {t.inquireDistrictAction} — {activeDistrict.name[language] ?? activeDistrict.name.de}
                      </span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Real Local Project Breakdown */}
      <section className="py-14 lg:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.referencesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {t.referencesHeading}
            </h2>
            <p className="text-sm text-zinc-600 font-light">
              {t.referencesSubtitlePrefix} {cityName} {t.referencesSubtitleSuffix}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {data.localProjects.map((project) => {
              const projTitle = project.title[language] ?? project.title.de;
              const projCategory = project.category[language] ?? project.category.de;
              const projLocation = project.location[language] ?? project.location.de;
              const projImageAlt = project.imageAlt[language] ?? project.imageAlt.de;
              const projOverview = project.overview[language] ?? project.overview.de;

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                      <img
                        src={project.image}
                        alt={projImageAlt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                        {projCategory}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 text-zinc-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                        {project.year}
                      </div>
                    </div>

                    {/* Content & Specs */}
                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                          {projLocation}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                          {projTitle}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-light">
                        {projOverview}
                      </p>

                      {/* Structural Specs Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
                        {project.specs.map((spec) => {
                          const sLabel = spec.label[language] ?? spec.label.de;
                          const sValue = spec.value[language] ?? spec.value.de;
                          return (
                            <div key={sLabel} className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                              <span className="text-[10px] uppercase font-bold text-zinc-400 block">
                                {sLabel}
                              </span>
                              <span className="text-xs font-semibold text-zinc-900 block truncate" title={sValue}>
                                {sValue}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Key Facts Bullet Points */}
                      <ul className="space-y-1.5 pt-2 text-xs text-zinc-700">
                        {project.keyFacts.map((fact) => {
                          const factText = fact[language] ?? fact.de;
                          return (
                            <li key={factText} className="flex items-start gap-2">
                              <span className="text-[#DC2626] font-bold">•</span>
                              <span>{factText}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {onNavigateProject && (
                    <div className="px-6 pb-6 pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigateProject(project.id)}
                        className="text-xs font-bold text-zinc-950 hover:text-[#DC2626] transition-colors flex items-center gap-1 cursor-pointer min-h-[36px]"
                      >
                        <span>{t.viewProjectDetails}</span>
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HOAI 1–9 Service Workflow Breakdown */}
      <section className="py-14 lg:py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.structuredWorkflowBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {t.hoaiPhasesHeading}
            </h2>
            <p className="text-sm text-zinc-600 font-light">
              {t.hoaiPhasesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.hoaiPhases.map((phase, idx) => {
              const phaseTitle = phase.title[language] ?? phase.title.de;
              const phaseDesc = phase.description[language] ?? phase.description.de;

              return (
                <div
                  key={phase.phase}
                  className="relative p-6 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all flex flex-col justify-between text-left"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#DC2626] text-white">
                        {phase.phase}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-zinc-950 tracking-tight leading-snug">
                      {phaseTitle}
                    </h3>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {phaseDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200/80">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block mb-1.5">
                      {t.deliverablesLabel}
                    </span>
                    <ul className="space-y-1 text-[11px] text-zinc-700 font-medium">
                      {phase.deliverables.map((item) => {
                        const itemText = item[language] ?? item.de;
                        return (
                          <li key={itemText} className="flex items-start gap-1.5">
                            <span className="text-[#DC2626]">✓</span>
                            <span>{itemText}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Embedded Google Map & Local Office Section */}
      <section className="py-14 lg:py-20 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Office Info Card */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {t.officeAvailableBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                {officeName}
              </h2>
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs space-y-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase text-zinc-400 block">
                    {t.addressLabel}
                  </span>
                  <p className="font-semibold text-zinc-900">{data.office.street}</p>
                  <p className="text-zinc-600">{officeCity}</p>
                </div>

                <div className="space-y-1 pt-2 border-t border-zinc-200/70">
                  <span className="text-[10px] font-bold uppercase text-zinc-400 block">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={data.office.phoneHref}
                    className="font-bold text-[#DC2626] hover:underline block text-base font-mono"
                  >
                    {data.office.phone}
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="w-full bg-zinc-950 hover:bg-zinc-800 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center min-h-[44px]"
                  >
                    {t.scheduleOfficeAppointment}
                  </button>
                </div>
              </div>
            </div>

            {/* Responsive Embedded Google Map */}
            <div className="lg:col-span-7">
              <div className="w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-zinc-300 shadow-md">
                <iframe
                  title={`Google Maps ${officeName}`}
                  src={data.office.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEO FAQ Accordion & People Also Ask */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-14 lg:py-20 bg-zinc-50 border-b border-zinc-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
            <div className="space-y-3 mb-10 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                {t.faqBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                {t.faqHeading}
              </h2>
              <p className="text-sm text-zinc-600 font-light">
                {t.faqSubtitle}
              </p>
            </div>

            {/* Accessible, thumb-friendly FAQ accordion list */}
            <div className="space-y-3">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                const questionText = faq.question[language] ?? faq.question.de;
                const answerText = faq.answer[language] ?? faq.answer.de;

                return (
                  <div
                    key={questionText}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-zinc-300 shadow-sm"
                        : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer min-h-[52px]"
                    >
                      <span className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight leading-snug">
                        {questionText}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                          isOpen
                            ? "bg-[#DC2626] text-white rotate-180"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-zinc-700 font-light leading-relaxed border-t border-zinc-100 pt-4">
                        <p>{answerText}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom FAQ Consultation Prompt */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-zinc-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-zinc-600 font-light">
                {t.faqActionPrompt}
              </span>
              <button
                type="button"
                onClick={onBookConsultation}
                className="bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[44px]"
              >
                {t.faqActionCta}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 8. Bottom High-Conversion CTA Banner */}
      <section className="py-16 lg:py-20 bg-zinc-950 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#DC2626_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
            {t.startProjectBadge}
          </span>
          <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {t.readyForProjectPrefix} {cityName}?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            {t.ctaSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/30 cursor-pointer min-h-[48px]"
            >
              {t.requestConsultation}
            </button>
            <a
              href={data.office.phoneHref}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer min-h-[48px]"
            >
              <span>{data.office.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
