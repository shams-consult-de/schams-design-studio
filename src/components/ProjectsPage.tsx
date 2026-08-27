import { useState } from "react";
import { projects, Project } from "../data/projects";
import { Language } from "../lib/i18n";

interface ProjectsPageProps {
  language: Language;
  onSelectProject: (project: Project) => void;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function ProjectsPage({
  language,
  onSelectProject,
  onBack,
  onBookConsultation,
}: ProjectsPageProps) {
  const isDe = language === "de";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: isDe ? "Alle Projekte" : "All Projects" },
    { id: "urban-planning", label: isDe ? "Bebauungspläne & Städtebau" : "Zoning & Master Planning" },
    { id: "residential", label: isDe ? "Wohnungsbau" : "Residential" },
    { id: "commercial", label: isDe ? "Gewerbe & Mischnutzung" : "Commercial & Mixed-Use" },
    { id: "education", label: isDe ? "Bildungsbau" : "Education" },
    { id: "sustainability", label: isDe ? "Nachhaltigkeit & QNG" : "Sustainability & QNG" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
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

          <span className="text-xs font-mono text-zinc-400">
            Shams Consult · {isDe ? "Verifizierte Projektreferenzen" : "Verified Project References"}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {isDe ? "PROJEKTÜBERSICHT & REFERENZEN" : "PROJECT PORTFOLIO & REFERENCES"}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {isDe
              ? "Realisierte Bauvorhaben & Städtebauliche Entwicklungen."
              : "Completed Developments & Urban Master Plans."}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {isDe
              ? "Vom vorhabenbezogenen Bebauungsplan bis zum energieeffizienten Wohnungs- und Gewerbebau — authentische Referenzen und baurechtliche Erfolge."
              : "From project-based zoning plans to energy-efficient residential and commercial architecture — authentic references and regulatory successes."}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-100 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-zinc-950 text-white shadow-xs font-extrabold"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer card-lift"
            >
              {/* Card Image Thumbnail */}
              {proj.image && (
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={proj.image}
                    alt={proj.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-zinc-900 uppercase tracking-wider shadow-xs">
                      <span className="text-[#DC2626]">●</span>
                      <span>{proj.categoryLabel[language]}</span>
                    </span>
                  </div>
                  {proj.year && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white font-mono">
                        {proj.year}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Project Title */}
                  <h2 className="font-sans text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                    {proj.title[language]}
                  </h2>

                  {/* Subtitle / Overview */}
                  <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3">
                    {proj.overview[language]}
                  </p>
                </div>

                {/* Key Highlights & Bottom Link */}
                <div className="pt-3 border-t border-zinc-100 space-y-3">
                  <div className="space-y-1">
                    {proj.keyFacts[language].slice(0, 2).map((fact, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-700 font-medium">
                        <span className="text-[#DC2626] font-bold">✓</span>
                        <span className="line-clamp-1">{fact}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-zinc-50 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-zinc-500 line-clamp-1">
                      {proj.location[language]}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                      <span>{isDe ? "Projekt ansehen" : "View Project"}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Consultation Call to Action */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
            {isDe
              ? "Haben Sie ein konkretes Grundstück oder Bauvorhaben?"
              : "Do You Have a Development Plot or Construction Project?"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            {isDe
              ? "Wir prüfen Ihr Vorhaben baurechtlich und städtebaulich auf Umsetzbarkeit, Nachverdichtungspotenzial und Wirtschaftlichkeit."
              : "We assess your project from regulatory, urban planning, and feasibility standpoints to maximize value and legal certainty."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isDe ? "Erstgespräch vereinbaren →" : "Book Consultation →"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
