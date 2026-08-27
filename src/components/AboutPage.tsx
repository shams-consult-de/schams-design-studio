import { Language } from "../lib/i18n";

interface AboutPageProps {
  language: Language;
  onBack: () => void;
  onNavigateFounder: () => void;
  onBookConsultation: () => void;
}

export function AboutPage({
  language,
  onBack,
  onNavigateFounder,
  onBookConsultation,
}: AboutPageProps) {
  const isDe = language === "de";

  const teamMembers = [
    {
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      role: isDe ? "Büroinhaber · Architekt & Stadtplaner" : "Managing Principal · Architect & Urban Planner",
      image: "/images/team/Majeed-Shams.jpg",
      credentials: isDe
        ? "Mitglied AKH Nr. 21886 · HsKA Diplom m. Auszeichnung 2008 · HfT Stuttgart M.Eng. 2011 · Dozent Frankfurt UAS"
        : "Chamber Member AKH #21886 · HsKA with Honors 2008 · HfT Stuttgart M.Eng. 2011 · Lecturer Frankfurt UAS",
    },
    {
      name: "Hatice Erol Yeniyapan (Dipl.-Ing. FH, M.A.)",
      role: isDe ? "Architektin" : "Architect",
      image: "/images/team/Hatice-Erol-Yeniyapan.jpg",
      credentials: isDe
        ? "Hochschule Karlsruhe (HsKA) Diplom mit Auszeichnung 2009/10 · Master of Arts (M.A.)"
        : "Karlsruhe University of Applied Sciences (HsKA) with Honors 2009/10 · Master of Arts (M.A.)",
    },
    {
      name: "Samuel Allaw (B.Eng.)",
      role: isDe ? "Bauleitung & Projektsteuerung" : "Site Supervision & Project Management",
      image: "/images/team/Samuel-Allaw.png",
      credentials: isDe
        ? "Bachelor of Engineering · Bauingenieurwesen Hochschule Darmstadt"
        : "Bachelor of Engineering · Civil Engineering Darmstadt University of Applied Sciences",
    },
    {
      name: "Yasmine Yagcioglu (Dipl.-Ing. FH)",
      role: isDe ? "Architektur" : "Architecture",
      image: "/images/team/Yasmine-Yagcioglu.jpg",
      credentials: isDe
        ? "Architekturstudium Hochschule Mainz – University of Applied Sciences 2011"
        : "Architecture Degree Mainz University of Applied Sciences 2011",
    },
    {
      name: "Ronak Namdari (M.A.)",
      role: isDe ? "Architektur & Konzeptentwurf" : "Architecture & Conceptual Design",
      image: "/images/team/Ronak-Namdari.png",
      credentials: isDe
        ? "Master of Arts in Architecture · Staatliche Hochschule für Bildende Künste (Städelschule) Frankfurt am Main"
        : "Master of Arts in Architecture · Staedelschule Frankfurt am Main",
    },
    {
      name: "Farhad Minaei (B.Arch.)",
      role: isDe ? "3D-Visualisierung & Modellierung" : "3D Visualization & Computational Modeling",
      image: "/images/team/Farhad-Minaei.png",
      credentials: isDe
        ? "Bachelor of Architecture · Spezialist für digitale Gebäudemodelle, Renderings & BIM"
        : "Bachelor of Architecture · Specialist for Digital Building Models, Renderings & BIM",
    },
  ];

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
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
            Shams Consult · {isDe ? "Unternehmensprofil" : "Company Profile"}
          </span>
        </div>

        {/* Header Block: Firm Profile */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {isDe ? "ÜBER DAS ARCHITEKTURBÜRO" : "ABOUT THE ARCHITECTURAL PRACTICE"}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {isDe
              ? "Architekturbüro Shams Consult."
              : "Shams Consult Architectural Practice."}
          </h1>

          <p className="font-sans text-lg sm:text-xl text-zinc-700 font-normal leading-relaxed">
            {isDe
              ? "Planungsbüro für Innovation, Kreativität, Bau- und Planungsrecht mit Sitz in der Metropolregion Frankfurt / Rhein-Main."
              : "Planning practice for innovation, architectural design, and zoning law based in the Frankfurt / Rhine-Main metropolitan area."}
          </p>
        </div>

        {/* 1. Core Profile & Mission */}
        <section className="p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {isDe ? "UNSERE IDENTITÄT & ANSPRUCH" : "OUR IDENTITY & MISSION"}
            </span>
            <h2 className="font-sans text-2xl font-bold text-zinc-950">
              {isDe
                ? "Erfahrung, Verantwortung und Gestaltungsanspruch"
                : "Experience, Responsibility, and Architectural Rigor"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-700 font-light leading-relaxed">
            <p>
              {isDe
                ? "Shams Consult steht für anspruchsvolle Architektur, integrierte Stadtplanung und anwendungsorientierte Forschung. Wir verbinden über 15 Jahre fundierte Praxiserfahrung im Bau- und Planungsrecht mit Innovationsfreude, interdisziplinärem Denken und einem klaren gesellschaftlichen Anspruch."
                : "Shams Consult stands for sophisticated architecture, integrated urban planning, and applied research. We combine over 15 years of proven practical experience in building and planning law with interdisciplinary rigor and clear societal responsibility."}
            </p>
            <p>
              {isDe
                ? "Für uns bedeutet Architektur und Bauberatung weit mehr als nur die Planung von Gebäuden: Es ist eine vertrauensvolle Partnerschaft, in der wir individuelle Vorstellungen mit technischen, rechtlichen und wirtschaftlichen Möglichkeiten in Einklang bringen."
                : "For us, architecture and planning consultancy extend far beyond blueprints: it is a partnership of trust, aligning individual aspirations with technical, regulatory, and financial feasibility."}
            </p>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-zinc-200 text-xs">
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Praxiserfahrung" : "Experience"}
              </span>
              <strong className="text-zinc-950 text-base font-extrabold block mt-0.5">
                15+ Jahre
              </strong>
            </div>
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Experten-Team" : "Team Scale"}
              </span>
              <strong className="text-zinc-950 text-base font-extrabold block mt-0.5">
                16 Fachkräfte
              </strong>
            </div>
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Kammerzulassung" : "Chamber Reg."}
              </span>
              <strong className="text-zinc-950 text-base font-extrabold block mt-0.5">
                AKH Nr. 21886
              </strong>
            </div>
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Arbeitsweise" : "Workflow"}
              </span>
              <strong className="text-[#DC2626] text-base font-extrabold block mt-0.5">
                100% Digital
              </strong>
            </div>
          </div>
        </section>

        {/* 2. Official Chamber Registration & Qualifications */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {isDe ? "QUALIFIKATIONEN & BEHÖRDLICHE ANERKENNUNG" : "QUALIFICATIONS & REGULATORY ACCREDITATIONS"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950">
              {isDe ? "Behördliche Expertise & Bundesweite Zertifizierungen" : "Regulatory Authority & Federal Certifications"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <div className="text-2xl">🏛️</div>
              <h3 className="font-sans text-base font-bold text-zinc-950">
                {isDe ? "AKH Kammerzulassung" : "Chamber Registration"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "Eingetragenes Mitglied der Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886) für Hochbau und Stadtplanung."
                  : "Officially registered with the Hessian Chamber of Architects and Urban Planners (AKH #21886)."}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <div className="text-2xl">🌿</div>
              <h3 className="font-sans text-base font-bold text-zinc-950">
                {isDe ? "QNG & dena Energieeffizienz" : "QNG & Federal LCA Expert"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "Gelistet in der Energieeffizienz-Expertenliste des Bundes für „Klimafreundlicher Neubau – Lebenszyklusanalyse (LCA) für Wohngebäude & QNG-Zertifizierung“."
                  : "Listed in the official Federal Energy Efficiency Expert Registry for Life Cycle Assessment (LCA) and QNG green building certification."}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-3">
              <div className="text-2xl">🎓</div>
              <h3 className="font-sans text-base font-bold text-zinc-950">
                {isDe ? "Forschung & Lehre" : "Academia & Teaching"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "Lehrauftrag an der Frankfurt University of Applied Sciences (Frankfurt UAS) im Fachbereich Architektur, Bauingenieurwesen und Geomatik."
                  : "Official academic lectureship at Frankfurt University of Applied Sciences in Architecture and Urban Planning."}
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Interdisciplinary Team with Real Portrait Photos */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              {isDe ? "UNSER EXPERTENTEAM" : "OUR EXPERT TEAM"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-zinc-950">
              {isDe ? "Lernen Sie unser Team kennen" : "Meet Our Team of Professionals"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-2xl">
              {isDe
                ? "Unser Büro vereint erfahrene Architekten, Stadtplaner, Bauingenieure und Visualisierungsspezialisten für integrale Projekterfolge."
                : "Our practice unifies experienced architects, urban planners, civil engineers, and computational specialists for integrated project delivery."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Team Portrait Image Container */}
                <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-sans text-base font-bold text-zinc-950 leading-snug group-hover:text-[#DC2626] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#DC2626]">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-[11px] text-zinc-600 font-light leading-relaxed pt-2.5 border-t border-zinc-100">
                    {member.credentials}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Cross-link to Founder's Personal Story */}
        <section className="p-8 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
              {isDe ? "DIE PERSÖNLICHE GESCHICHTE DES GRÜNDERS" : "THE FOUNDER'S PERSONAL JOURNEY"}
            </span>
            <h3 className="font-sans text-xl font-bold text-white">
              {isDe
                ? "Möchten Sie den persönlichen Lebensweg von Majeed Shams erfahren?"
                : "Would you like to read Majeed Shams' personal story?"}
            </h3>
            <p className="text-xs text-zinc-300 font-light max-w-xl">
              {isDe
                ? "Die bewegende Geschichte der Ankunft im Jahr 2005 mit null Euro, der Pressebericht der Rheinischen Post und das persönliche Lebensmotto."
                : "The true story of arriving in Germany in 2005 with zero Euros, the 2005 Rheinische Post newspaper feature, and the motto that drives him."}
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateFounder}
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            {isDe ? "Zur Gründergeschichte →" : "Read Founder's Story →"}
          </button>
        </section>

        {/* 5. Bottom Consultation Booking */}
        <div className="text-center space-y-4 pt-4 border-t border-zinc-100">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-zinc-950">
            {isDe
              ? "Lassen Sie uns über Ihr nächstes Bauvorhaben sprechen."
              : "Let's Discuss Your Next Development Project."}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-lg mx-auto">
            {isDe
              ? "Persönliche, fundierte baurechtliche und gestalterische Erstberatung direkt mit unserem Team."
              : "Personal, authoritative regulatory and architectural consultation directly with our practice team."}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-md"
            >
              {isDe ? "Erstgespräch vereinbaren →" : "Book Consultation →"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
