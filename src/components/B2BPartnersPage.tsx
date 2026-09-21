import { Language } from "../lib/i18n";

interface B2BPartnersPageProps {
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function B2BPartnersPage({
  language,
  onBack,
  onBookConsultation,
}: B2BPartnersPageProps) {
  const isDe = language === "de";

  const metrics = [
    {
      value: "100%",
      label: isDe ? "Rechtssicherheit" : "Legal Certainty",
      sub: isDe ? "BauGB & HBO verzahnt" : "Zoning & Building Code unified",
    },
    {
      value: "Ø 4–6 Mon.",
      label: isDe ? "Zeitersparnis" : "Time Saved",
      sub: isDe ? "Keine Reibungsverluste" : "Zero coordination lag",
    },
    {
      value: "100+",
      label: isDe ? "Erfolgreiche Projekte" : "Delivered Projects",
      sub: isDe ? "Wohnbau, Gewerbe & B-Pläne" : "Residential, Commercial & Master Plans",
    },
    {
      value: "20+ Jahre",
      label: isDe ? "Praxiserfahrung" : "Hands-on Experience",
      sub: isDe ? "Mitglied AKH Nr. 21886" : "AKH Chamber Member #21886",
    },
  ];

  const hoaiPhases = [
    {
      step: "01",
      name: isDe ? "Grundlagen & Machbarkeit" : "Feasibility & Pre-Design",
      lp: "LP 1–2",
      desc: isDe
        ? "Prüfung von Bebauungsplänen, § 34 BauGB, Abstandsflächen, BGF-Potenzial und Erschließung vor Grundstücksankauf."
        : "Evaluation of binding zoning plans, BauGB § 34, setback codes, GFA upside, and access before land acquisition.",
    },
    {
      step: "02",
      name: isDe ? "Entwurf & Baugenehmigung" : "Design & Permitting",
      lp: "LP 3–4",
      desc: isDe
        ? "Direkte behördliche Abstimmung auf Augenhöhe mit Bauaufsicht, Denkmal- und Umweltämtern für schnelle Genehmigungen."
        : "Direct peer-level alignment with building authorities, heritage, and environmental agencies for prompt approvals.",
    },
    {
      step: "03",
      name: isDe ? "Ausführungs- & Detailplanung" : "Technical Execution Planning",
      lp: "LP 5",
      desc: isDe
        ? "Präzise 1:50- und Detailwerkplanung, Schnittstellenkoordination von Statik, TGA, Brandschutz und Baustoffen."
        : "Precise 1:50 and fabrication details, cross-discipline coordination of structural, MEP, fire safety, and materials.",
    },
    {
      step: "04",
      name: isDe ? "Vergabe & Bauleitung vor Ort" : "Tendering & On-Site Supervision",
      lp: "LP 6–8",
      desc: isDe
        ? "VOB-konforme Ausschreibung, Kostenkontrolle und persönliche Präsenz auf der Baustelle bis zur Abnahme."
        : "Rigorous tendering, real-time cost control, and personal on-site presence through to client acceptance.",
    },
  ];

  const flyers = [
    {
      id: "b2b",
      title: isDe ? "B2B Bauträger & Investoren" : "B2B Developers & Investors",
      subtitle: isDe ? "Flächeneffizienz, B-Plan-Sicherheit & BGF-Maximierung" : "GFA Optimization & Permitting Certainty",
      format: isDe ? "DIN Lang Z-Falz (6 Seiten)" : "DIN Lang Z-Fold (6 Pages)",
      downloadUrl: "/documents/flyer-b2b-developer.html?print=true",
      accent: "from-red-600 to-rose-700",
    },
    {
      id: "fcn",
      title: isDe ? "FCN Kundentag & Baustoff-Dialog" : "FCN Customer Day & Materials Dialogue",
      subtitle: isDe ? "Praxisnaher Schulterschluss mit Industrie & Betonherstellern" : "Direct Exchange with Manufacturers & Precast Concrete",
      format: isDe ? "DIN Lang Z-Falz (6 Seiten)" : "DIN Lang Z-Fold (6 Pages)",
      downloadUrl: "/documents/flyer-din-lang.html?print=true",
      accent: "from-zinc-800 to-zinc-950",
    },
    {
      id: "casestudy",
      title: isDe ? "Projektphasen & Bau-Story" : "Project Lifecycle & Build Story",
      subtitle: isDe ? "Vom Vorentwurf über den Rohbau bis zur Schlüsselübergabe" : "From Concept and Shell Construction to Handover",
      format: isDe ? "DIN Lang Z-Falz (6 Seiten)" : "DIN Lang Z-Fold (6 Pages)",
      downloadUrl: "/documents/flyer-casestudy.html?print=true",
      accent: "from-blue-700 to-slate-900",
    },
    {
      id: "gallery",
      title: isDe ? "Fotogalerie & Portfolio" : "Photo Gallery & Portfolio",
      subtitle: isDe ? "Echte Baustellenbegehungen & Referenzen in Rhein-Main" : "Authentic Site Inspections & Regional References",
      format: isDe ? "DIN Lang Z-Falz (6 Seiten)" : "DIN Lang Z-Fold (6 Pages)",
      downloadUrl: "/documents/flyer-gallery.html?print=true",
      accent: "from-amber-700 to-zinc-900",
    },
  ];

  const galleryImages = [
    {
      src: "/images/b2b/Image.jpg",
      title: isDe ? "Moderne Mehrfamilienhaus-Architektur" : "Modern Multi-Family Residential Architecture",
      desc: isDe ? "Präzise Ausführung, großzügige Verglasungen und nachhaltige Bauweise." : "Precise execution, expansive glazing, and sustainable construction.",
    },
    {
      src: "/images/b2b/1.png",
      title: isDe ? "Projektplanung & Genehmigung" : "Project Planning & Permitting",
      desc: isDe ? "Konzeptskizzen, B-Plan-Abstimmung und Entwurfsoptimierung." : "Concept sketches, zoning alignment, and layout optimization.",
    },
    {
      src: "/images/b2b/2.png",
      title: isDe ? "Rohbau & Baustellenbegehung" : "Structural Shell & Site Inspection",
      desc: isDe ? "Regelmäßige Qualitätskontrollen direkt vor Ort auf der Baustelle." : "Routine on-site quality inspections where building happens.",
    },
    {
      src: "/images/b2b/4.png",
      title: isDe ? "Fassaden & Materialität" : "Facades & Materiality",
      desc: isDe ? "Hochwertige Kombination aus Klinker, Putz und seriellen Betonelementen." : "High-grade tactile finishes, masonry, and precast concrete.",
    },
    {
      src: "/images/b2b/5.png",
      title: isDe ? "Innenausbau & Details" : "Interior Fit-Out & Detailing",
      desc: isDe ? "Lichtdurchflutete Grundrisse mit kompromissloser Flächeneffizienz." : "Daylit living spaces engineered for maximum usable floor area.",
    },
    {
      src: "/images/b2b/6.png",
      title: isDe ? "Fertigstellung & Schlüsselübergabe" : "Completion & Final Handover",
      desc: isDe ? "Termin- und budgettreue Übergabe an zufriedene Bauherren und Investoren." : "On-schedule, on-budget delivery to clients and investors.",
    },
  ];

  return (
    <article className="min-h-screen bg-white text-zinc-900 pt-28 pb-24 relative overflow-hidden">
      {/* Background Architectural Watermark */}
      <div
        className="absolute right-0 top-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Back Navigation (Fitts's Law compliant) */}
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
            Shams Consult · {isDe ? "B2B Bauträger & Partner" : "B2B Developers & Partners"}
          </span>
        </div>

        {/* Hero Section */}
        <header className="space-y-6">
          <div className="inline-block">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {isDe ? "B2B-PROJEKTENTWICKLUNG & INVESTOREN" : "B2B PROJECT DEVELOPMENT & INVESTORS"}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {isDe ? (
              <>
                Architektur & Stadtplanung{" "}
                <span className="text-[#DC2626]">aus einer Hand</span> für Bauträger und Investoren
              </>
            ) : (
              <>
                Architecture & Urban Planning{" "}
                <span className="text-[#DC2626]">in One Hand</span> for Developers and Investors
              </>
            )}
          </h1>

          <p className="max-w-3xl text-lg sm:text-xl text-zinc-600 font-light leading-relaxed">
            {isDe
              ? "Vom ersten städtebaulichen Vorentwurf über die Schaffung von belastbarem Baurecht (BauGB) bis zur HOAI-Bauleitung vor Ort: Wir bündeln Hochbau und Stadtplanung, um Reibungsverluste zu eliminieren, Flächenpotenziale maximal auszuschöpfen und Genehmigungsverfahren im Rhein-Main-Gebiet spürbar zu beschleunigen."
              : "From preliminary statutory zoning through legally impervious building permits to on-site HOAI supervision: We fuse architecture and master planning in a single hand to eradicate friction, maximize usable floor area, and streamline permitting across Frankfurt and the Rhine-Main metropolitan area."}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-zinc-600 font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {isDe ? "Mitglied AKH Nr. 21886" : "Chamber Member AKH #21886"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              {isDe ? "Dipl.-Ing. Architektur + M.Sc. Stadtplanung" : "Dipl.-Ing. Architecture + M.Sc. Urban Planning"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {isDe ? "HOAI Leistungsphasen 1–8 vollumfänglich" : "Full HOAI Phases 1–8 Coverage"}
            </span>
          </div>
        </header>

        {/* Metrics Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-red-200 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#DC2626] font-mono tracking-tight">
                {m.value}
              </div>
              <div className="mt-3">
                <div className="font-bold text-sm sm:text-base text-zinc-950">{m.label}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{m.sub}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Section 1: The B2B Advantage (Flyer 1 Knowledge) */}
        <section className="rounded-3xl bg-zinc-950 text-white p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
              {isDe ? "DER STRATEGISCHE VORTEIL" : "THE STRATEGIC ADVANTAGE"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight">
              {isDe
                ? "Warum Projektentwickler und Bauträger auf Shams Consult setzen"
                : "Why Developers and Investors Partner with Shams Consult"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-[#DC2626] flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="font-bold text-lg text-white">
                {isDe ? "Maximale Flächeneffizienz" : "Maximized Floor Area"}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {isDe
                  ? "Wir reizen GRZ-, GFZ- und Abstandsflächenvorgaben planerisch und rechtlich optimal aus, um den wirtschaftlichen Ertrag Ihres Baugrundstücks zu maximieren."
                  : "We optimize site coverage, floor-area ratios, and setback bylaws to maximize the commercial yield of every square meter."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-[#DC2626] flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="font-bold text-lg text-white">
                {isDe ? "Kein Reibungsverlust" : "Zero Interface Friction"}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {isDe
                  ? "Schluss mit zeitraubendem Streit zwischen externem Stadtplaner und Hochbauarchitekt. Wir vereinen beide Disziplinen in einer Person und beschleunigen Abstimmungen."
                  : "No more costly finger-pointing between disconnected zoning consultancies and architects. Both mindsets are unified under one responsible lead."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-[#DC2626] flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="font-bold text-lg text-white">
                {isDe ? "Behördendialog auf Augenhöhe" : "Peer-Level Regulatory Alignment"}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {isDe
                  ? "Dank fundierter Expertise im BauGB und Landesbauordnungen verhandeln wir mit Bauaufsichtsämtern sachlich, lösungsorientiert und durchsetzungsstark."
                  : "Leveraging rigorous knowledge of German statutory building law, we coordinate with municipal planning authorities productively and swiftly."}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: FCN Kundentag & Baustoff-Partnerschaften (Flyer 2 Knowledge) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-zinc-200 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-50 to-white">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
                {isDe ? "INDUSTRIE- & BAUSTOFF-PARTNERSCHAFTEN" : "INDUSTRY & MATERIAL PARTNERSHIPS"}
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {isDe
                ? "FCN Kundentag: Zukunftsfähiges Bauen durch direkte Industrie-Kooperation"
                : "FCN Customer Day: Future-Proof Architecture via Direct Manufacturer Dialogue"}
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
              {isDe
                ? "Gute Architektur entsteht nicht im Elfenbeinturm, sondern im engen Schulterschluss mit führenden Baustoffherstellern und Fachingenieuren. Auf Veranstaltungen wie dem FCN Kundentag von F.C. Nüdling vertiefen wir technische Innovationen: Von nachhaltigen Betonelementen und CO₂-reduzierten Pflastersystemen bis hin zu langlebigen Außenanlagenkonzepten."
                : "Enduring architecture isn't conceived in isolation—it flourishes through active collaboration with premier material manufacturers. At partner events such as the FCN Customer Day by F.C. Nüdling, we examine modern material science: from circular precast concrete elements to eco-paving and climate-resilient stormwater landscaping."}
            </p>

            <blockquote className="border-l-4 border-[#DC2626] pl-4 italic text-zinc-800 text-sm sm:text-base">
              {isDe
                ? "„Wer bereits in der Entwurfsphase modernste Baustofftechnologien mitdenkt, spart in der Bauausführung wertvolle Wochen und sichert nachhaltige Wirtschaftlichkeit für den Investor.“"
                : "“Integrating cutting-edge material technologies at the conceptual design phase prevents costly on-site delays and safeguards long-term commercial returns for investors.”"}
              <footer className="mt-2 text-xs font-bold text-zinc-500 not-italic">
                — Dipl.-Ing. Majeed Shams
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-zinc-200 bg-zinc-900">
              <img
                src="/images/b2b/Image.jpg"
                alt="FCN Kundentag und Baustoff-Dialog"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 3: HOAI Leistungsphasen 1–8 Bau-Story (Flyer 3 Knowledge) */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
              {isDe ? "TRANSPARENTER PROJEKTABLAUF" : "TRANSPARENT PROJECT LIFECYCLE"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {isDe
                ? "Von der grünen Wiese bis zur Schlüsselübergabe (HOAI LP 1–8)"
                : "From Greenfield Feasibility to Final Handover (HOAI LP 1–8)"}
            </h2>
            <p className="text-base text-zinc-600 max-w-3xl">
              {isDe
                ? "Wir begleiten Bauträger und Bauherren verlässlich durch alle Projektmeilensteine mit transparenter Kommunikation und lückenloser Präsenz vor Ort."
                : "We guide developers and investors reliably across every statutory milestone with candid communication and dependable on-site presence."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hoaiPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#DC2626]">
                    <span>PHASE {phase.step}</span>
                    <span className="px-2 py-0.5 rounded bg-red-50 text-[#DC2626] border border-red-200">
                      {phase.lp}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-zinc-950 mt-4 leading-snug">
                    {phase.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Baustellen & Portfolio Galerie (Flyer 4 Knowledge) */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
              {isDe ? "PRÄSENZ VOR ORT & REFERENZEN" : "ON-SITE PRESENCE & REFERENCES"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {isDe
                ? "Echte Baustellenbegehungen und realisierte Architektur"
                : "Authentic Site Inspections & Realized Architecture"}
            </h2>
            <p className="text-base text-zinc-600 max-w-3xl">
              {isDe
                ? "Keine anonymen Renderings ohne Substanz: Sehen Sie Einblicke in Bauphasen, Rohbauten und fertiggestellte Projekte in Frankfurt am Main, Rödermark und Rhein-Main."
                : "No sterile 3D concepts disconnected from reality: discover real-life build phases, structural shells, and finished landmarks across the Rhine-Main metropolitan area."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 shadow-sm flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-base text-zinc-950 group-hover:text-[#DC2626] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Download Hub for All 4 DIN-Lang PDF Flyers */}
        <section className="rounded-3xl bg-zinc-50 border border-zinc-200 p-8 sm:p-12 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
              {isDe ? "DOWNLOAD-HUB & UNTERLAGEN" : "DOWNLOAD HUB & BROCHURES"}
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
              {isDe
                ? "Die 4 gedruckten DIN-Lang Z-Falz Flyer als PDF herunterladen"
                : "Download All 4 DIN-Lang Z-Fold Flyers as High-Res PDFs"}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-3xl">
              {isDe
                ? "Kompaktes Wissen für Ihre interne Abstimmung, Investorenpräsentationen oder die Vorprüfung Ihres nächsten Bauvorhabens:"
                : "Compact reference dossiers for internal board reviews, investor pitches, or evaluating your upcoming development:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {flyers.map((flyer) => (
              <div
                key={flyer.id}
                className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between hover:border-red-300 transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                    {flyer.format}
                  </span>
                  <h3 className="font-bold text-lg text-zinc-950">{flyer.title}</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">{flyer.subtitle}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href={flyer.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <span>🖨️</span>
                    <span>{isDe ? "PDF generieren" : "Generate PDF"}</span>
                  </a>
                  <span className="text-[11px] font-mono text-zinc-400">PDF · On-Demand</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Direct Consultation Call-to-Action */}
        <section className="rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white p-8 sm:p-12 space-y-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
                {isDe ? "UNVERBINDLICHES ERSTGESPRÄCH" : "INITIAL FEASIBILITY DIALOGUE"}
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold tracking-tight">
              {isDe
                ? "Planen Sie ein Wohn- oder Gewerbeprojekt in Rhein-Main?"
                : "Planning a Residential or Commercial Development in Rhine-Main?"}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {isDe
                ? "Sprechen Sie direkt mit Dipl.-Ing. Majeed Shams über Machbarkeit, Bebauungsplanpotenziale und die nächsten strategischen Schritte für Ihr Grundstück."
                : "Confer directly with Managing Principal Dipl.-Ing. Majeed Shams on feasibility, zoning parameters, and tactical next steps for your site."}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all cursor-pointer shadow-lg hover:shadow-red-600/30"
            >
              <span>{isDe ? "Erstgespräch vereinbaren" : "Schedule Consultation"}</span>
              <span>→</span>
            </button>
            <a
              href="tel:+4961062664400"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 transition-colors"
            >
              <span>☎</span>
              <span>+49 6106 2664400</span>
            </a>
          </div>
        </section>
      </div>

      {/* Science-Backed Mobile Sticky Action Bar (Bottom Thumb Zone) */}
      <div className="fixed bottom-4 inset-x-4 z-40 sm:hidden">
        <div className="flex items-center gap-2 bg-zinc-950/95 backdrop-blur-md p-2 rounded-2xl border border-zinc-800 shadow-2xl">
          <a
            href="tel:+4961062664400"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider border border-zinc-700"
          >
            <span>☎</span>
            <span>{isDe ? "Anrufen" : "Call"}</span>
          </a>
          <button
            type="button"
            onClick={onBookConsultation}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#DC2626] text-white text-xs font-bold uppercase tracking-wider shadow-md"
          >
            <span>{isDe ? "Erstgespräch" : "Consult"}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
