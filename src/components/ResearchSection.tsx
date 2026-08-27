import { Language } from "../lib/i18n";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";

interface ResearchSectionProps {
  language: Language;
  onNavigateResearch?: () => void;
}

export function ResearchSection({
  language,
  onNavigateResearch,
}: ResearchSectionProps) {
  const isDe = language === "de";

  const pillars = [
    {
      badge: isDe ? "Kostenforschung (DIN 276)" : "Cost Research (DIN 276)",
      title: isDe ? "Baukosten- & Risikomanagement" : "Construction Cost Management",
      desc: isDe
        ? "Analysen zu Baupreisschwankungen und dynamischer Pufferplanung — schützt Investoren vor unkontrollierten Nachträgen."
        : "In-depth research on material volatility and dynamic contingency buffers protecting investors from budget overruns.",
      stat: "8–15%",
      statLabel: isDe ? "Kostenersparnis durch Mängelprävention" : "Cost savings via defect prevention",
    },
    {
      badge: isDe ? "Bauleitung & VOB" : "Site Supervision & VOB",
      title: isDe ? "Mängelprävention & Qualitätssicherung" : "Defect Prevention & Quality Control",
      desc: isDe
        ? "Praxiserprobte Leitfäden zur frühzeitigen Fehlervermeidung auf Baustellen im Rhein-Main-Gebiet."
        : "Field-tested protocols for early error elimination on construction sites across the Rhine-Main metropolitan area.",
      stat: "100%",
      statLabel: isDe ? "DIN- & Normenkonformität" : "DIN & statutory standard compliance",
    },
    {
      badge: isDe ? "Kommunaler Städtebau" : "Urban Planning & Policy",
      title: isDe ? "Stellplatzsatzung & Innenentwicklung" : "Zoning Bylaws & Urban Masterplans",
      desc: isDe
        ? "Wissenschaftliche Fachbeiträge zur Reform starrer Stellplatzschlüssel und Quartierstransformation."
        : "Authoritative policy papers on parking statute reforms and sustainable urban neighborhood transformations.",
      stat: "7+",
      statLabel: isDe ? "Publikationen & betreute Thesen" : "Published papers & supervised theses",
    },
  ];

  return (
    <section id="research" className="py-20 lg:py-28 bg-[#0c0d0e] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header with Frankfurt UAS Logo and Lecturer Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between border-b border-white/10 pb-8">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
                {isDe
                  ? "Forschung & Lehre · Frankfurt University of Applied Sciences"
                  : "Research & Academia · Frankfurt University of Applied Sciences"}
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              <span>{isDe ? "Frankfurt UAS · " : "Frankfurt UAS · "}</span>
              <span className="text-[#DC2626]">
                {isDe ? "Dozent für Städtebau & Architektur" : "Lecturer in Urban Architecture"}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-3xl">
              {isDe
                ? "Wissenschaftliche Fundierung trifft 15+ Jahre behördliche und praktische Bauerfahrung. Dipl.-Ing. Majeed Shams forscht und lehrt an der Frankfurt UAS zu Themen wie Baukostenmanagement (DIN 276), Mängelvermeidung und zukunftsfähigen Stellplatzsatzungen."
                : "Scientific rigor meets 15+ years of municipal authority and practical construction expertise. Dipl.-Ing. Majeed Shams lectures and supervises research at Frankfurt UAS on construction cost management (DIN 276), defect prevention, and urban mobility statutes."}
            </p>
          </div>

          {/* Logo & Direct CTA Link */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <div className="p-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
              <FrankfurtUasLogo className="h-9 w-auto" variant="light" />
            </div>

            <button
              type="button"
              onClick={onNavigateResearch}
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <span>{isDe ? "Thesen & Publikationen ansehen" : "Explore Theses & Research"}</span>
              <span className="text-sm">→</span>
            </button>
          </div>
        </div>

        {/* 3 Core Research Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              onClick={onNavigateResearch}
              className="bg-[#16171b] p-7 rounded-2xl border border-white/10 hover:border-[#DC2626]/70 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-5 flex flex-col justify-between group cursor-pointer card-lift"
            >
              <div className="space-y-3">
                <span className="font-mono text-[11px] font-bold text-[#DC2626] bg-red-950/60 border border-red-800/60 px-2.5 py-1 rounded-md inline-block">
                  {pillar.badge}
                </span>

                <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#DC2626] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Stat Highlight */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-sans text-xl font-extrabold text-white block">
                    {pillar.stat}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-light">
                    {pillar.statLabel}
                  </span>
                </div>
                <span className="text-zinc-500 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all text-xs font-bold font-mono">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#1a1b20] to-zinc-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-sans text-base font-bold text-white">
              {isDe
                ? "Akademische Betreuung & Forschungsarbeiten einsehen"
                : "Review Academic Theses & Supervised Research"}
            </h4>
            <p className="text-xs text-zinc-400 font-light max-w-2xl">
              {isDe
                ? "Erfahren Sie, wie unsere universitären Erkenntnisse direkt in die Kostenoptimierung und Genehmigungssicherheit Ihres Bauvorhabens einfließen."
                : "Discover how scientific insights directly enhance cost efficiency, structural safety, and rapid approvals for your project."}
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateResearch}
            className="shrink-0 inline-flex items-center gap-2 border border-white/20 hover:border-white text-white hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer bg-white/5 hover:bg-white/10"
          >
            <span>{isDe ? "Alle 7 Arbeiten ansehen" : "View All 7 Theses"}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
