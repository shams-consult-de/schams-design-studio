import type { RegionalLandingPageData, LocalProject, HoaiPhase } from "./regionalLandingPages.ts";

const SHARED_PROJECTS: LocalProject[] = [
  {
    id: "shams-versickerungsrigole-regenwasser",
    title: {
      de: "Modulare Retentionsanlage & Außenanlagen",
      en: "Modular Retention Rigole & Landscape Engineering",
    },
    category: {
      de: "Nachhaltiges Bauen & Wohnungsbau",
      en: "Sustainable Engineering & Housing",
    },
    location: {
      de: "Rhein-Main-Gebiet (Metropolregion Frankfurt)",
      en: "Rhine-Main Region (Frankfurt Metro Area)",
    },
    year: "2024–2025",
    image: "/images/projects/shams-versickerungsrigole-regenwasser-aushub.jpg",
    imageAlt: {
      de: "Rigolenversickerung Wohnanlage Rhein-Main Frankfurt",
      en: "Stormwater infiltration system for residential development near Frankfurt",
    },
    specs: [
      { label: { de: "Leistungsphasen", en: "Work Phases" }, value: { de: "HOAI LPH 1–8", en: "HOAI Phases 1–8" } },
      { label: { de: "Technik", en: "Technology" }, value: { de: "Mineralische Retentionsblöcke (>95% Hohlraum)", en: "Mineral retention cores (>95% void volume)" } },
      { label: { de: "Norm", en: "Standard" }, value: { de: "DIN 1986-100 & DWA-A 138", en: "DIN 1986-100 & DWA-A 138" } },
      { label: { de: "Nutzen", en: "Advantage" }, value: { de: "100% Regenwasserentlastung", en: "100% stormwater network decoupling" } },
    ],
    overview: {
      de: "Zukunftsweisendes Schwammstadt-Konzept für ein Mehrfamilienhaus-Ensemble im Frankfurter Einzugsgebiet. Vollständige Entkopplung vom städtischen Kanalnetz und nachhaltige Gebührensenkung.",
      en: "Pioneering Sponge City solution for a multi-family residential complex in the Frankfurt commuter belt, decoupling 100% of rainwater from the municipal sewer system.",
    },
    keyFacts: [
      { de: "Bodenmechanische Berechnung der Versickerungsleistung", en: "Geotechnical soil percolation and capacity calculations" },
      { de: "Überfahrbare Rigolensysteme für PKW- & Lieferverkehr", en: "Heavy-duty load-bearing capacity for car and service transit" },
      { de: "Mehrstufiges Filtersystem mit Schlammfängen", en: "Multi-stage silt filtration preserving long-term percolation" },
      { de: "Integrale Hof- und Außenanlagenneugestaltung", en: "Holistic courtyard, paving, and landscape redesign" },
    ],
  },
  {
    id: "netto-supermarkt-muenster-hessen",
    title: {
      de: "Nahversorgungszentrum & 22 Wohneinheiten",
      en: "Mixed-Use Retail Center & 22 Residential Apartments",
    },
    category: {
      de: "Gewerbe- & Geschosswohnungsbau",
      en: "Commercial & Multi-Family Housing",
    },
    location: {
      de: "Münster bei Dieburg (Rhein-Main / Einzugsgebiet Frankfurt)",
      en: "Münster near Dieburg (Rhine-Main / Greater Frankfurt Catchment)",
    },
    year: "2023",
    image: "/images/image-37e42d.jpg",
    imageAlt: {
      de: "Nahversorgungszentrum und 22 Wohnungen Rhein-Main",
      en: "Retail center and 22 residential units in Rhine-Main",
    },
    specs: [
      { label: { de: "Leistungsphase", en: "Scope" }, value: { de: "HOAI LPH 5 (Ausführungsplanung)", en: "HOAI Phase 5 (Working Drawings)" } },
      { label: { de: "Volumen", en: "Scale" }, value: { de: "Supermarkt + 22 Wohnungen", en: "Supermarket + 22 Apartments" } },
      { label: { de: "Infrastruktur", en: "Amenities" }, value: { de: "Tiefgarage & begrünter Innenhof", en: "Underground Parking & Green Courtyard" } },
      { label: { de: "Recht", en: "Legal Basis" }, value: { de: "HBO Baugenehmigung", en: "HBO Building Permit Compliance" } },
    ],
    overview: {
      de: "Komplexe integrale Ausführungsplanung eines gemischt genutzten Nahversorgungszentrums mit Gewerbeeinheit im Erdgeschoss, barrierefreien Wohnungen in den Obergeschossen und Tiefgaragenanlage.",
      en: "Complex working drawings for a mixed-use retail development combining a ground-floor supermarket, modern accessible apartments above, and underground parking.",
    },
    keyFacts: [
      { de: "Akkurate statische und akustische Schalldämmung", en: "Rigorous structural and acoustic decoupling between retail and living" },
      { de: "Integrale MEP- und Haustechnikkoordination", en: "Seamless MEP and building services integration" },
      { de: "Optimierte Kunden- und Lieferlogistik", en: "Optimized logistics for customer parking and goods deliveries" },
      { de: "Schlüsselfertige, termingerechte Fertigstellung", en: "Turnkey delivery on schedule and within budget" },
    ],
  },
  {
    id: "stadtvilla-mfa-roedermark",
    title: {
      de: "Exklusive Stadtvilla & Mehrfamilienhaus",
      en: "Exclusive Urban Villa & Apartment Residence",
    },
    category: {
      de: "Hochwertiger Wohnungsbau",
      en: "High-End Residential Architecture",
    },
    location: {
      de: "Rödermark (Kreis Offenbach / Einzugsgebiet Frankfurt)",
      en: "Rödermark (District of Offenbach / Greater Frankfurt Catchment)",
    },
    year: "2022–2023",
    image: "/images/stadtvilla_mfa_roedermark.jpg",
    imageAlt: {
      de: "Moderne Stadtvilla Rödermark",
      en: "Modern urban villa in Rödermark",
    },
    specs: [
      { label: { de: "Leistungsphasen", en: "Work Phases" }, value: { de: "HOAI LPH 1–9", en: "HOAI Phases 1–9" } },
      { label: { de: "Energiestandard", en: "Energy Rating" }, value: { de: "KfW Effizienzhaus 40", en: "KfW Efficiency House 40" } },
      { label: { de: "Bauweise", en: "Construction" }, value: { de: "Massivbau mit Gründach", en: "Solid masonry with green roof" } },
      { label: { de: "Genehmigung", en: "Permits" }, value: { de: "HBO § 65 Genehmigung", en: "HBO § 65 Building Permit" } },
    ],
    overview: {
      de: "Vollumfängliche Planung und Bauüberwachung einer modernen Stadtvilla mit lichtdurchfluteten Wohneinheiten, Erdwärmepumpe und extensiver Dachbegrünung.",
      en: "Comprehensive architectural design and on-site supervision of a modern urban villa featuring light-flooded units, geothermal heat pumps, and extensive green roofs.",
    },
    keyFacts: [
      { de: "Präzise Werkplanung und Detailabstimmung aller Gewerke", en: "Rigorous working drawings and cross-trade integration" },
      { de: "Barrierefreie Erschließung mit Personenaufzug", en: "Barrier-free access with passenger elevator" },
      { de: "Effiziente Heiz- und Lüftungstechnik mit Wärmerückgewinnung", en: "High-efficiency HVAC with heat recovery" },
      { de: "Termin- und budgettreue Übergabe nach DIN 276", en: "On-time and within-budget delivery under DIN 276" },
    ],
  },
];

const SHARED_HOAI: HoaiPhase[] = [
  {
    phase: "LPH 1–2",
    title: { de: "Grundlagenermittlung & Vorplanung", en: "Feasibility & Preliminary Design" },
    description: {
      de: "Standortanalyse, baurechtliche Ersteinschätzung (§ 34 BauGB / B-Plan), Klärung des Raumprogramms und Vorentwurfsskizzen.",
      en: "Site assessment, initial regulatory evaluation (§ 34 BauGB / master plan), program definition, and conceptual sketches.",
    },
    deliverables: [
      { de: "Machbarkeitsanalyse & Baurechtsprüfung", en: "Feasibility study & zoning check" },
      { de: "Vorentwurfskonzepte & Variantenvergleich", en: "Preliminary design concepts & variant evaluation" },
      { de: "Kostenschätzung nach DIN 276", en: "Cost estimation under DIN 276" },
    ],
  },
  {
    phase: "LPH 3–4",
    title: { de: "Entwurfs- & Genehmigungsplanung", en: "Design Development & Building Permit" },
    description: {
      de: "Detaillierte Durcharbeitung des architektonischen Entwurfs und Einreichung prüffähiger Bauanträge bei der zuständigen Bauaufsicht nach HBO.",
      en: "Comprehensive scheme design and statutory building permit application to the local building department under HBO.",
    },
    deliverables: [
      { de: "Genehmigungspläne M 1:100", en: "Permit drawings 1:100" },
      { de: "Vollständige Bauantragsunterlagen", en: "Complete building application dossier" },
      { de: "Behörden- und Nachbarabstimmung", en: "Authority and stakeholder coordination" },
    ],
  },
  {
    phase: "LPH 5–7",
    title: { de: "Ausführungsplanung & Ausschreibung", en: "Working Drawings & Procurement" },
    description: {
      de: "Präzise Werk- und Detailpläne (1:50 bis 1:10), detaillierte Leistungsverzeichnisse (LV) und transparente Vergabeverhandlungen nach VOB.",
      en: "Detailed working and construction drawings (1:50 to 1:10), bills of quantities (BoQ), and competitive tender evaluation under VOB.",
    },
    deliverables: [
      { de: "Ausführungspläne & Detailzeichnungen", en: "Working plans & detail drawings" },
      { de: "Gewerkeübergreifende Leistungsverzeichnisse", en: "Detailed bills of quantities (BoQ)" },
      { de: "Preisspiegel & Vergabeempfehlungen", en: "Tender price audits & contract awards" },
    ],
  },
  {
    phase: "LPH 8–9",
    title: { de: "Bauüberwachung & Dokumentation", en: "Site Supervision & Final Handover" },
    description: {
      de: "Kontinuierliche Präsenz auf der Baustelle, Qualitätsprüfung aller Gewerke, strikte Kosten- und Terminkontrolle bis zur schlüssigen Endabnahme.",
      en: "Full on-site architectural clerk of works, trade quality assurance, scheduling, cost control, and seamless warranty logging.",
    },
    deliverables: [
      { de: "Objektüberwachung vor Ort (Bauleitung)", en: "On-site quality supervision & clerk of works" },
      { de: "Abnahmeprotokolle & Mängelmanagement", en: "Sign-off logs & snagging management" },
      { de: "Rechnungsprüfung & Gewährleistungsübergabe", en: "Invoice certification & warranty documentation" },
    ],
  },
];

export const suburbLandingPages: Record<string, RegionalLandingPageData> = {
  "architektur-frankfurt-westend": {
    slug: "architektur-frankfurt-westend",
    path: "/architektur-frankfurt-westend",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Westend",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Westend"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Westend",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Westend"
    },
    subtitle: {
      de: "Das Frankfurter Westend und das Holzhausenviertel zählen zu den prestigeträchtigsten Wohnlagen Hessens. Geprägt von Gründerzeit- und Klassizismus-Villen verlangen Bauanträge und Modernisierungen höchste Sensibilität im Dialog mit dem Denkmalamt Frankfurt und fundierte Kenntnis der Erhaltungssatzungen.",
      en: "Frankfurt's Westend and Holzhausen quarter represent the state's most sought-after addresses. Defined by Wilhelminian and neoclassical villas, building permits and retrofits demand utmost expertise in alignment with the Frankfurt Historic Preservation Office."
    },
    targetKeywords: [
      "Architekt Frankfurt-Westend",
      "Stadtplanung Frankfurt-Westend",
      "Bauantrag Frankfurt-Westend",
      "Baugenehmigung Frankfurt-Westend",
      "HOAI Leistungsphasen Frankfurt-Westend",
      "Architekturbüro Frankfurt-Westend"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Westend | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Westend | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Westend. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Westend. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Westend-Süd, Westend-Nord, Holzhausenviertel, Grüneburgpark",
        en: "Catchment Area: We design and plan for clients in Westend-South, Westend-North, Holzhausenviertel, Grüneburgpark"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Bauen im Frankfurter Westend: Villen, Denkmalschutz & Milieuschutz",
      en: "Building in Frankfurt Westend: Villas, Heritage & Urban Preservation"
    },
    localFocusDescription: {
      de: "Das Frankfurter Westend und das Holzhausenviertel zählen zu den prestigeträchtigsten Wohnlagen Hessens. Geprägt von Gründerzeit- und Klassizismus-Villen verlangen Bauanträge und Modernisierungen höchste Sensibilität im Dialog mit dem Denkmalamt Frankfurt und fundierte Kenntnis der Erhaltungssatzungen.",
      en: "Frankfurt's Westend and Holzhausen quarter represent the state's most sought-after addresses. Defined by Wilhelminian and neoclassical villas, building permits and retrofits demand utmost expertise in alignment with the Frankfurt Historic Preservation Office."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Hessisches Denkmalschutzgesetz (HDSchG)", en: "Hesse Monument Protection Act (HDSchG)" },
        description: { de: "Erprobte Abstimmung für denkmalgeschützte Villen, Fassadensanierungen und steuerliche Denkmalabschreibungen.", en: "Proven coordination for listed historic villas, heritage facade restorations, and tax depreciation allowances." }
      },
      {
        title: { de: "§ 34 BauGB (Einfügungsgebot)", en: "§ 34 BauGB (Urban Infill Regulation)" },
        description: { de: "Präzise Bemessung von First- und Traufhöhen sowie Grundflächenzahlen im dicht bebauten Gründerzeitbestand.", en: "Precise assessment of ridge and eaves heights as well as site occupancy indices within densely built Wilhelminian quarters." }
      },
      {
        title: { de: "Baumschutzsatzung der Stadt Frankfurt", en: "Frankfurt Municipal Tree Protection Statute" },
        description: { de: "Baumerhaltungs- und Ersatzpflanzungskonzepte bei Neubauten und Unterfangungen in alten Villengärten.", en: "Tree preservation and compensatory planting concepts for new builds and basement underpinning in historic villa gardens." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Denkmalschutzauflagen gelten bei Sanierungen im Westend?", en: "What historic preservation requirements apply to renovations in Westend?" },
        answer: { de: "Im Westend stehen zahlreiche Einzelobjekte und Ensembles unter Denkmalschutz. Veränderungen an Fenstern, Fassadengliederungen oder Dacheindeckungen bedürfen einer denkmalrechtlichen Genehmigung. Shams Consult stimmt alle Planungen vorab direkt mit dem Denkmalamt Frankfurt ab.", en: "In Westend, numerous individual buildings and architectural ensembles are listed. Modifications to windows, facade details, or roof coverings require heritage approval. Shams Consult coordinates all plans in advance directly with the Frankfurt Historic Monuments Office." }
      },
      {
        question: { de: "Sind Dachgeschossausbauten und Gauben im Westend genehmigungsfähig?", en: "Can attic conversions and dormers be approved in Westend?" },
        answer: { de: "Ja, sofern die Vorgaben der örtlichen Erhaltungssatzung und des § 34 BauGB eingehalten werden. Wir erstellen prüffähige Bauanträge mit millimetergenauen Abstandsflächen- und Brandschutznachweisen nach HBO.", en: "Yes, provided the requirements of the local preservation statute and § 34 BauGB are fulfilled. We prepare compliant building permit applications with millimeter-precise setback clearances and fire safety concepts according to HBO." }
      },
      {
        question: { de: "Übernimmt Shams Consult auch Stadtplanung und B-Plan-Verfahren im Westend?", en: "Does Shams Consult handle urban planning and zoning plan procedures in Westend?" },
        answer: { de: "Als eingetragene Stadtplaner in der AKH Hessen entwickeln wir städtebauliche Machbarkeitsstudien, Nutzungsänderungskonzepte und vorhabenbezogene Bebauungspläne für anspruchsvolle Liegenschaften.", en: "As registered urban planners with AKH Hessen, we develop urban feasibility studies, change-of-use concepts, and project-based development plans (B-Plans) for demanding prime properties." }
      }
    ]
  },

  "architektur-frankfurt-sachsenhausen": {
    slug: "architektur-frankfurt-sachsenhausen",
    path: "/architektur-frankfurt-sachsenhausen",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Sachsenhausen",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Sachsenhausen"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Sachsenhausen",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Sachsenhausen"
    },
    subtitle: {
      de: "Mit unserem Büro am Carl-von-Noorden-Platz 5 sind wir tief in Sachsenhausen verwurzelt. Ob exklusive Hangvillen am Lerchesberg, Nachverdichtungen im Brückenviertel oder Aufstockungen rund um den Schweizer Platz: Wir kennen die Behördenwege der Frankfurter Bauaufsicht wie unsere Westentasche.",
      en: "With our studio at Carl-von-Noorden-Platz 5, Sachsenhausen is our home turf. From luxury hillside villas at Lerchesberg to urban infill in the Brückenviertel and rooftop conversions near Schweizer Platz: we navigate Frankfurt municipal approvals with unmatched speed."
    },
    targetKeywords: [
      "Architekt Frankfurt-Sachsenhausen",
      "Stadtplanung Frankfurt-Sachsenhausen",
      "Bauantrag Frankfurt-Sachsenhausen",
      "Baugenehmigung Frankfurt-Sachsenhausen",
      "HOAI Leistungsphasen Frankfurt-Sachsenhausen",
      "Architekturbüro Frankfurt-Sachsenhausen"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Sachsenhausen | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Sachsenhausen | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Sachsenhausen. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Sachsenhausen. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Schweizer Platz, Brückenviertel, Lerchesberg, Deutschherrnviertel",
        en: "Catchment Area: We design and plan for clients in Schweizer Platz, Brückenviertel, Lerchesberg, Deutschherrnviertel"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur direkt in Sachsenhausen: Von Schweizer Platz bis Lerchesberg",
      en: "Architecture Studio in Sachsenhausen: From Schweizer Platz to Lerchesberg"
    },
    localFocusDescription: {
      de: "Mit unserem Büro am Carl-von-Noorden-Platz 5 sind wir tief in Sachsenhausen verwurzelt. Ob exklusive Hangvillen am Lerchesberg, Nachverdichtungen im Brückenviertel oder Aufstockungen rund um den Schweizer Platz: Wir kennen die Behördenwege der Frankfurter Bauaufsicht wie unsere Westentasche.",
      en: "With our studio at Carl-von-Noorden-Platz 5, Sachsenhausen is our home turf. From luxury hillside villas at Lerchesberg to urban infill in the Brückenviertel and rooftop conversions near Schweizer Platz: we navigate Frankfurt municipal approvals with unmatched speed."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Erhaltungssatzung Sachsenhausen (§ 172 BauGB)", en: "Sachsenhausen Preservation Statute (§ 172 BauGB)" },
        description: { de: "Rechtssichere Antragsstellung zur Wahrung des historischen Ortsbildes und Schutz vor Zweckentfremdung.", en: "Compliant applications safeguarding the historic townscape and preventing unauthorized property conversions." }
      },
      {
        title: { de: "Stellplatzsatzung Frankfurt & Mobilitätskonzepte", en: "Frankfurt Parking Space Statute & Mobility Concepts" },
        description: { de: "Optimierte Planung von Tiefgaragen, Doppelparkern und Fahrradabstellanlagen nach städtischem Schlüssel.", en: "Optimized planning of underground garages, duplex lift systems, and bicycle parking according to municipal quotas." }
      },
      {
        title: { de: "HBO Brandschutz & Abstandsflächennachweis", en: "HBO Fire Protection & Setback Clearance Calculations" },
        description: { de: "Millimetergenaue Abstandsflächenpläne und Brandwand-Integration bei Blockrandbebauung.", en: "Millimeter-accurate clearance certificates and fire wall integration for dense perimeter block developments." }
      }
    ],
    faqs: [
      {
        question: { de: "Wo befindet sich das Büro von Shams Consult in Sachsenhausen?", en: "Where is Shams Consult's office located in Sachsenhausen?" },
        answer: { de: "Unser Hauptsitz liegt zentral am Carl-von-Noorden-Platz 5 in 60596 Frankfurt am Main-Sachsenhausen — unweit von Schweizer Platz und Mainufer. Vereinbaren Sie gerne ein persönliches Erstgespräch.", en: "Our headquarters is centrally situated at Carl-von-Noorden-Platz 5 in 60596 Frankfurt am Main-Sachsenhausen — close to Schweizer Platz and the Main riverbank. You are welcome to arrange a consultation." }
      },
      {
        question: { de: "Erhalten Sie Baugenehmigungen für Hangvillen am Lerchesberg?", en: "Can you obtain building permits for hillside villas on Lerchesberg?" },
        answer: { de: "Ja, Hanglagen am Lerchesberg verlangen besondere statische und geotechnische Vorabstimmungen. Wir führen Hangsicherungen, Tiefgaragen und HBO-Bauanträge zum sicheren Genehmigungserfolg.", en: "Yes, hillside sites on Lerchesberg require specialized structural and geotechnical coordination. We handle slope stabilization, subterranean garages, and HBO building permit filings." }
      },
      {
        question: { de: "Übernimmt Shams Consult auch die Bauüberwachung vor Ort in Sachsenhausen?", en: "Does Shams Consult also oversee on-site construction supervision in Sachsenhausen?" },
        answer: { de: "Ja, wir betreuen alle 9 HOAI-Leistungsphasen lückenlos — inklusive täglicher Bauleitung, Qualitätskontrollen und Rechnungsprüfung vor Ort (LPH 8) bis zur schlüsselfertigen Übergabe.", en: "Yes, we provide seamless delivery through all 9 HOAI work phases, including daily on-site clerk of works and quality assurance (LPH 8) up to final building handover." }
      }
    ]
  },

  "architektur-frankfurt-nordend": {
    slug: "architektur-frankfurt-nordend",
    path: "/architektur-frankfurt-nordend",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Nordend & Bornheim",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Nordend & Bornheim"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Nordend & Bornheim",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Nordend & Bornheim"
    },
    subtitle: {
      de: "Dichte Gründerzeitkarrees, begehrte Altbauwohnungen und lebendige Quartiere prägen Nordend und Bornheim. Bauherren stehen vor Herausforderungen durch städtische Milieuschutzsatzungen, Denkmalschutz und strikte Stellplatzauflagen. Wir maximieren Wohnraum und Genehmigungssicherheit.",
      en: "Vibrant quarters with dense Wilhelminian blocks define Nordend and Bornheim. Clients navigate preservation statutes, heritage protection, and municipal parking requirements. We maximize habitable floor area and regulatory compliance."
    },
    targetKeywords: [
      "Architekt Frankfurt-Nordend & Bornheim",
      "Stadtplanung Frankfurt-Nordend & Bornheim",
      "Bauantrag Frankfurt-Nordend & Bornheim",
      "Baugenehmigung Frankfurt-Nordend & Bornheim",
      "HOAI Leistungsphasen Frankfurt-Nordend & Bornheim",
      "Architekturbüro Frankfurt-Nordend & Bornheim"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Nordend & Bornheim | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Nordend & Bornheim | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Nordend & Bornheim. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Nordend & Bornheim. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Nordend-West, Nordend-Ost, Bornheim, Berger Straße, Glauburgviertel",
        en: "Catchment Area: We design and plan for clients in Nordend-West, Nordend-East, Bornheim, Berger Straße, Glauburgviertel"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Nachverdichtung & Milieuschutz im Frankfurter Nordend & Bornheim",
      en: "Infill Development & Preservation in Frankfurt Nordend & Bornheim"
    },
    localFocusDescription: {
      de: "Dichte Gründerzeitkarrees, begehrte Altbauwohnungen und lebendige Quartiere prägen Nordend und Bornheim. Bauherren stehen vor Herausforderungen durch städtische Milieuschutzsatzungen, Denkmalschutz und strikte Stellplatzauflagen. Wir maximieren Wohnraum und Genehmigungssicherheit.",
      en: "Vibrant quarters with dense Wilhelminian blocks define Nordend and Bornheim. Clients navigate preservation statutes, heritage protection, and municipal parking requirements. We maximize habitable floor area and regulatory compliance."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Milieuschutzsatzungen Frankfurt am Main", en: "Frankfurt Social Preservation Statutes (Milieuschutz)" },
        description: { de: "Fachgerechte Begründung von Modernisierungen und Grundrissänderungen im sozialen Erhaltungsgebiet.", en: "Expert justification for modernizations, floor plan alterations, and building upgrades within social conservation districts." }
      },
      {
        title: { de: "Stellplatzsatzung Frankfurt & Innenhofbegrünung", en: "Frankfurt Parking Space Statute & Courtyard Infill" },
        description: { de: "Ablöseverfahren und innovative Mobilitätskonzepte (Fahrradabstellplätze, Car-Sharing) bei Innenhofbebauung.", en: "Compensation procedures and innovative mobility concepts (cargo bike hubs, car-sharing) for inner courtyard developments." }
      },
      {
        title: { de: "HBO Brandschutz bei Dachgeschossausbauten", en: "HBO Fire Protection for Attic Conversions" },
        description: { de: "Zweiter baulicher Rettungsweg und Feuerwiderstandsdauern für nachträglichen Wohnraumausbau.", en: "Second emergency escape route planning and structural fire resistance certification for residential loft additions." }
      }
    ],
    faqs: [
      {
        question: { de: "Darf man im Nordend Altbauwohnungen zusammenlegen oder teilen?", en: "Is it permitted to merge or subdivide historic apartments in Nordend?" },
        answer: { de: "In Gebieten mit sozialer Erhaltungssatzung (Milieuschutz) unterliegen Teilungen und Zusammenlegungen Genehmigungsvorbehalten. Wir prüfen die rechtlichen Chancen und führen das Antragsverfahren.", en: "In designated social preservation zones (Milieuschutz), merging or subdividing residential units is subject to municipal approval. We review legal feasibility and steer the application process." }
      },
      {
        question: { de: "Wie gelingt ein Dachgeschossausbau im denkmalgeschützten Gründerzeithaus?", en: "How does an attic conversion succeed in a heritage-listed Wilhelminian building?" },
        answer: { de: "Mit detaillierten Werkplänen, historisch nachempfundenen Gaubenformen und maßgeschneiderten Brandschutzkonzepten führen wir das Projekt zum Genehmigungserfolg.", en: "With detailed construction drawings, historically authentic dormer profiles, and customized fire safety concepts, we guide your attic conversion to swift permit approval." }
      },
      {
        question: { de: "Erstellt Shams Consult auch Energieberatung und KfW-Förderanträge?", en: "Does Shams Consult provide energy consultancy and KfW grant applications?" },
        answer: { de: "Ja, wir integrieren Fördermittelberatung (KfW 40, KfW 40 NH, Denkmal-Förderung) direkt in die Entwurfsphase.", en: "Yes, we integrate federal funding consulting (KfW Efficiency House 40, 40 NH, and Heritage Preservation Grants) directly into the conceptual design phase." }
      }
    ]
  },

  "architektur-frankfurt-bockenheim": {
    slug: "architektur-frankfurt-bockenheim",
    path: "/architektur-frankfurt-bockenheim",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Bockenheim & Europaviertel",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Bockenheim & Europaviertel"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Bockenheim & Europaviertel",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Bockenheim & Europaviertel"
    },
    subtitle: {
      de: "Zwischen dem dynamischen Europaviertel, der Konversion des alten Campus Bockenheim und industriellen Bestandsflächen im Gallus entstehen zukunftsweisende Bauvorhaben. Shams Consult plant moderne Mehrfamilienhäuser, Gewerbe-Mischquartiere und Umbauten nach Maß.",
      en: "Between the dynamic Europaviertel, the conversion of Campus Bockenheim, and industrial transformations in Gallus, pioneering developments take shape. Shams Consult delivers modern multi-family residences, mixed-use commercial quarters, and tailored conversions."
    },
    targetKeywords: [
      "Architekt Frankfurt-Bockenheim & Europaviertel",
      "Stadtplanung Frankfurt-Bockenheim & Europaviertel",
      "Bauantrag Frankfurt-Bockenheim & Europaviertel",
      "Baugenehmigung Frankfurt-Bockenheim & Europaviertel",
      "HOAI Leistungsphasen Frankfurt-Bockenheim & Europaviertel",
      "Architekturbüro Frankfurt-Bockenheim & Europaviertel"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Bockenheim & Europaviertel | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Bockenheim & Europaviertel | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Bockenheim & Europaviertel. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Bockenheim & Europaviertel. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Bockenheim, Europaviertel, Gallus, Kulturcampus, Leipziger Straße",
        en: "Catchment Area: We design and plan for clients in Bockenheim, Europaviertel, Gallus, Kulturcampus, Leipziger Straße"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Transformation, Gewerbekonversion & Wohnbau in Bockenheim",
      en: "Urban Transformation, Commercial Conversion & Housing in Bockenheim"
    },
    localFocusDescription: {
      de: "Zwischen dem dynamischen Europaviertel, der Konversion des alten Campus Bockenheim und industriellen Bestandsflächen im Gallus entstehen zukunftsweisende Bauvorhaben. Shams Consult plant moderne Mehrfamilienhäuser, Gewerbe-Mischquartiere und Umbauten nach Maß.",
      en: "Between the dynamic Europaviertel, the conversion of Campus Bockenheim, and industrial transformations in Gallus, pioneering developments take shape. Shams Consult delivers modern multi-family residences, mixed-use commercial quarters, and tailored conversions."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bebauungspläne Europaviertel & Bockenheim", en: "Europaviertel & Bockenheim Master Development Plans" },
        description: { de: "Ausnutzung von GFZ und GRZ, Baumassenzahlen und Höhenentwicklung nach städtebaulichen Vorgaben.", en: "Maximizing floor space index (GFZ) and site occupancy (GRZ), building mass ratios, and height developments according to urban codes." }
      },
      {
        title: { de: "HBO Sonderbauverordnung", en: "HBO Special Structure Regulations (Sonderbauverordnung)" },
        description: { de: "Genehmigungsplanung für Versammlungsstätten, Beherbergungsbetriebe und gewerblich genutzte Erdgeschosse.", en: "Permit planning for public assembly spaces, hotel developments, and mixed commercial ground-floor uses." }
      },
      {
        title: { de: "Immissionsschutz & Lärmkontingentierung", en: "Noise Abatement & Acoustic Zoning Allocations" },
        description: { de: "Schalltechnische Nachweise bei Wohnbebauung entlang hochfrequentierter Verkehrs- und Bahnachsen.", en: "Acoustic insulation certification for residential developments along high-frequency transit and railway corridors." }
      }
    ],
    faqs: [
      {
        question: { de: "Begleiten Sie gewerbliche Nutzungsänderungen in Bockenheim?", en: "Do you guide commercial change-of-use applications in Bockenheim?" },
        answer: { de: "Ja, wir planen und beantragen Nutzungsänderungen (z.B. von Büro zu Wohnen oder Gewerbe zu Gastronomie) bei der Bauaufsicht Frankfurt inklusive aller Stellplatz- und Brandschutznachweise.", en: "Yes, we plan and submit change-of-use permits (e.g. office to residential or retail to gastronomy) to the Frankfurt Building Authority, including all required parking and fire safety filings." }
      },
      {
        question: { de: "Können Sie vorhabenbezogene Bebauungspläne für Grundstücke im Gallus erstellen?", en: "Can you prepare project-based development plans (B-Plans) for properties in Gallus?" },
        answer: { de: "Ja, als freie Architekten und Stadtplaner erarbeiten wir städtebauliche Rahmenentwürfe und B-Plan-Entwürfe in Abstimmung mit dem Stadtplanungsamt Frankfurt.", en: "Yes, as licensed independent architects and urban planners, we prepare urban framework schemes and binding development plans in close coordination with the Frankfurt City Planning Office." }
      },
      {
        question: { de: "Welche HOAI-Leistungsphasen deckt Shams Consult ab?", en: "Which HOAI work phases does Shams Consult cover?" },
        answer: { de: "Wir bieten alle Phasen von der Grundlagenermittlung (LPH 1) bis zur Objektüberwachung und Mängelbeseitigung (LPH 9) lückenlos an.", en: "We offer all phases without interruption from initial feasibility (Phase 1) through construction supervision to final defect liability management (Phase 9)." }
      }
    ]
  },

  "architektur-frankfurt-riedberg": {
    slug: "architektur-frankfurt-riedberg",
    path: "/architektur-frankfurt-riedberg",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Riedberg & Kalbach",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Riedberg & Kalbach"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Riedberg & Kalbach",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Riedberg & Kalbach"
    },
    subtitle: {
      de: "Der Frankfurter Riedberg steht für moderne Stadtentwicklung, energieeffizientes Bauen und durchdachte Familienarchitektur. Wir entwerfen exklusive Einfamilienhäuser, Stadtvillen und Mehrparteienhäuser im Einklang mit den strengen gestalterischen und ökologischen Vorgaben des Stadtteils.",
      en: "Frankfurt's Riedberg exemplifies contemporary urban master planning, energy efficiency, and family-oriented residences. We design exclusive villas and multi-family buildings adhering to strict municipal architectural guidelines."
    },
    targetKeywords: [
      "Architekt Frankfurt-Riedberg & Kalbach",
      "Stadtplanung Frankfurt-Riedberg & Kalbach",
      "Bauantrag Frankfurt-Riedberg & Kalbach",
      "Baugenehmigung Frankfurt-Riedberg & Kalbach",
      "HOAI Leistungsphasen Frankfurt-Riedberg & Kalbach",
      "Architekturbüro Frankfurt-Riedberg & Kalbach"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Riedberg & Kalbach | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Riedberg & Kalbach | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Riedberg & Kalbach. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Riedberg & Kalbach. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Riedberg-Mitte, Universitätsviertel, Altkalbach, Niederursel",
        en: "Catchment Area: We design and plan for clients in Riedberg-Center, University Quarter, Alt-Kalbach, Niederursel"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Nachhaltige Architektur & Baugenehmigungen im Frankfurter Riedberg",
      en: "Sustainable Architecture & Permits in Frankfurt Riedberg"
    },
    localFocusDescription: {
      de: "Der Frankfurter Riedberg steht für moderne Stadtentwicklung, energieeffizientes Bauen und durchdachte Familienarchitektur. Wir entwerfen exklusive Einfamilienhäuser, Stadtvillen und Mehrparteienhäuser im Einklang mit den strengen gestalterischen und ökologischen Vorgaben des Stadtteils.",
      en: "Frankfurt's Riedberg exemplifies contemporary urban master planning, energy efficiency, and family-oriented residences. We design exclusive villas and multi-family buildings adhering to strict municipal architectural guidelines."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "B-Plan Riedberg Gestaltungsvorgaben", en: "Riedberg Development Plan Design Guidelines" },
        description: { de: "Flachdach- und Staffelgeschossregeln, Materialitätsfestsetzungen und Begrünungspflichten.", en: "Compliance with flat roof and setback-story rules, strict materiality regulations, and mandatory green roof standards." }
      },
      {
        title: { de: "DWA-A 138 Regenwasserretention", en: "DWA-A 138 Stormwater Retention & Infiltration" },
        description: { de: "Schwammstadt-Konzepte und Rigolenversickerung gemäß Frankfurter Entwässerungssatzung.", en: "Sponge City concepts and underground retention rigoles conforming to Frankfurt municipal drainage regulations." }
      },
      {
        title: { de: "Gebäudeenergiegesetz (GEG) & KfW 40", en: "Building Energy Act (GEG) & KfW Efficiency House 40" },
        description: { de: "Zukunftssichere Wärmepumpen- und Photovoltaikintegration mit maximalen Tilgungszuschüssen.", en: "Future-proof heat pump and photovoltaic integration delivering maximum federal repayment subsidies." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie lange dauert ein Bauantrag im Riedberg?", en: "How long does a building permit application take in Riedberg?" },
        answer: { de: "Im Geltungsbereich des qualifizierten Bebauungsplans greift bei vollständiger Konformität oft das Genehmigungsfreistellungsverfahren nach § 64 HBO, was die behördliche Vorlaufzeit auf unter einen Monat reduzieren kann.", en: "Within the scope of the qualified development plan, fully conforming projects frequently qualify for the permit exemption procedure (§ 64 HBO), reducing administrative approval times to under one month." }
      },
      {
        question: { de: "Planen Sie auch Retentionsdächer und Rigolen?", en: "Do you also design retention green roofs and infiltration rigoles?" },
        answer: { de: "Ja, nachhaltige Regenwasserversickerung ist eine unserer technischen Kernkompetenzen, wie unsere Referenzprojekte im Rhein-Main-Gebiet belegen.", en: "Yes, sustainable stormwater management and infiltration systems represent one of our primary technical specialties, as shown in our regional portfolio." }
      },
      {
        question: { de: "Übernehmen Sie auch die Bauleitung vor Ort im Riedberg?", en: "Do you provide on-site construction supervision in Riedberg?" },
        answer: { de: "Ja, wir stellen erfahrene Bauleiter für LPH 8, die Qualität, Termine und Rechnungen vor Ort penibel überwachen.", en: "Yes, we assign seasoned project architects for Phase 8 who rigorously monitor craftsmanship, delivery timelines, and contractor billing on-site." }
      }
    ]
  },

  "architektur-frankfurt-niederrad": {
    slug: "architektur-frankfurt-niederrad",
    path: "/architektur-frankfurt-niederrad",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Frankfurt am Main", en: "Frankfurt am Main" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Frankfurt-Niederrad & Oberrad",
      en: "Architecture, Urban Planning & Building Permits in Frankfurt Niederrad & Oberrad"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Frankfurt-Niederrad & Oberrad",
      en: "Architecture · Urban Planning · Permitting | Frankfurt Niederrad & Oberrad"
    },
    subtitle: {
      de: "Vom Büro-Monocenter zum lebendigen Mischquartier: Das Lyoner Quartier in Niederrad ist das hessische Paradebeispiel für gelungene Konversion. In Oberrad wiederum entstehen exklusive Wohnbauten nahe des Mainufers. Shams Consult begleitet Eigentümer und Projektentwickler bei beiden Bautypen.",
      en: "From office park to vibrant residential quarter: the Lyoner Quartier in Niederrad is a statewide model for successful adaptive reuse. In Oberrad, riverfront developments require high flood-mitigation expertise."
    },
    targetKeywords: [
      "Architekt Frankfurt-Niederrad & Oberrad",
      "Stadtplanung Frankfurt-Niederrad & Oberrad",
      "Bauantrag Frankfurt-Niederrad & Oberrad",
      "Baugenehmigung Frankfurt-Niederrad & Oberrad",
      "HOAI Leistungsphasen Frankfurt-Niederrad & Oberrad",
      "Architekturbüro Frankfurt-Niederrad & Oberrad"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Frankfurt-Niederrad & Oberrad | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Frankfurt Niederrad & Oberrad | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Frankfurt-Niederrad & Oberrad. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Frankfurt Niederrad & Oberrad. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Lyoner Quartier, Wohnstadt Niederrad, Mainufer Oberrad",
        en: "Catchment Area: We design and plan for clients in Lyoner Quartier, Wohnstadt Niederrad, Main Riverbanks Oberrad"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Büro-Konversion & Mainufer-Wohnungsbau in Niederrad & Oberrad",
      en: "Office Conversion & Riverfront Housing in Niederrad & Oberrad"
    },
    localFocusDescription: {
      de: "Vom Büro-Monocenter zum lebendigen Mischquartier: Das Lyoner Quartier in Niederrad ist das hessische Paradebeispiel für gelungene Konversion. In Oberrad wiederum entstehen exklusive Wohnbauten nahe des Mainufers. Shams Consult begleitet Eigentümer und Projektentwickler bei beiden Bautypen.",
      en: "From office park to vibrant residential quarter: the Lyoner Quartier in Niederrad is a statewide model for successful adaptive reuse. In Oberrad, riverfront developments require high flood-mitigation expertise."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Konversionsleitfaden Lyoner Quartier", en: "Lyoner Quartier Urban Conversion Guidelines" },
        description: { de: "Baurechtliche Umnutzung von Bürohochhäusern zu Wohnungen und Micro-Apartments nach HBO.", en: "Statutory change-of-use permits transforming commercial high-rises into contemporary apartments and micro-living units under HBO." }
      },
      {
        title: { de: "HQ-100 Hochwasserschutz Mainufer", en: "HQ-100 Flood Protection on the Main Riverbank" },
        description: { de: "Wasserrechtliche Genehmigungen und druckwasserdichte Bauweisen im Überschwemmungsgebiet.", en: "Water management authority permits and pressure-watertight tanking systems within designated flood zones." }
      },
      {
        title: { de: "Schallschutz nach DIN 4109", en: "Acoustic Insulation according to DIN 4109" },
        description: { de: "Akustische Entkopplung im Einflussbereich von Main-Neckar-Bahn und Flugkorridoren.", en: "Structural acoustic decoupling within the proximity of the Main-Neckar railway line and airport flight corridors." }
      }
    ],
    faqs: [
      {
        question: { de: "Lohnt sich die Umnutzung eines Bürogebäudes zu Wohnungen?", en: "Is converting an office building into residential apartments worthwhile?" },
        answer: { de: "Ja, insbesondere durch die Einsparung von Grauer Energie und verkürzte Rohbauzeiten. Wir prüfen im Rahmen einer Machbarkeitsstudie Tragstruktur, Fluchtwege und Wirtschaftlichkeit.", en: "Yes, particularly through significant embodied carbon savings and shortened structural construction timelines. We evaluate structural capacity, escape routes, and economic returns in a comprehensive feasibility study." }
      },
      {
        question: { de: "Welche Abstände zum Main müssen in Oberrad eingehalten werden?", en: "What minimum distances to the Main riverbank must be maintained in Oberrad?" },
        answer: { de: "Entscheidend sind die Hochwasserschutzgrenzen (HQ 100) des Regierungspräsidiums Darmstadt und die Frankfurter Grünanlagensatzung. Wir klären dies verbindlich vorab.", en: "Key constraints are set by the 100-year flood zone (HQ 100) established by the Regional Authority Darmstadt and municipal green belt statutes. We clarify these binding limits in advance." }
      },
      {
        question: { de: "Arbeitet Shams Consult mit festen Fachplanern zusammen?", en: "Does Shams Consult work with established specialist engineers?" },
        answer: { de: "Wir arbeiten entweder mit Ihren bestehenden Fachplanern oder bringen ein bewährtes Netzwerk aus Statikern, TGA-Ingenieuren und Geotechnikern ein.", en: "We collaborate seamlessly with your existing engineers or bring in our verified regional network of structural engineers, MEP consultants, and geotechnical specialists." }
      }
    ]
  },

  "architektur-dreieich-buchschlag": {
    slug: "architektur-dreieich-buchschlag",
    path: "/architektur-dreieich-buchschlag",
    parentPath: "/architektur-dreieich",
    parentName: { de: "Dreieich & Kreis Offenbach", en: "Dreieich & District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Dreieich-Buchschlag",
      en: "Architecture, Urban Planning & Building Permits in Dreieich Buchschlag"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Dreieich-Buchschlag",
      en: "Architecture · Urban Planning · Permitting | Dreieich Buchschlag"
    },
    subtitle: {
      de: "Die Villenkolonie Buchschlag ist eines der bedeutendsten Jugendstil- und Reformarchitektur-Ensembles Deutschlands. Jede bauliche Veränderung, Sanierung oder Erweiterung erfordert profundes Fingerspitzengefühl und enge Abstimmung mit der Denkmalbehörde des Kreises Offenbach.",
      en: "The Buchschlag Villa Colony is one of Germany's most prominent Art Nouveau and architectural reform ensembles. Every renovation, addition, or new building demands consummate sensitivity and close alignment with the Offenbach District Heritage Office."
    },
    targetKeywords: [
      "Architekt Dreieich-Buchschlag",
      "Stadtplanung Dreieich-Buchschlag",
      "Bauantrag Dreieich-Buchschlag",
      "Baugenehmigung Dreieich-Buchschlag",
      "HOAI Leistungsphasen Dreieich-Buchschlag",
      "Architekturbüro Dreieich-Buchschlag"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Dreieich-Buchschlag | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Dreieich Buchschlag | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Dreieich-Buchschlag. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Dreieich Buchschlag. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Villenkolonie Buchschlag, Forstweg, Pirschweg, Eleonorenanlage",
        en: "Catchment Area: We design and plan for clients in Villenkolonie Buchschlag, Forstweg, Pirschweg, Eleonorenanlage"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur & Denkmalschutz in der Villenkolonie Buchschlag",
      en: "Architecture & Heritage Protection in Buchschlag Villa Colony"
    },
    localFocusDescription: {
      de: "Die Villenkolonie Buchschlag ist eines der bedeutendsten Jugendstil- und Reformarchitektur-Ensembles Deutschlands. Jede bauliche Veränderung, Sanierung oder Erweiterung erfordert profundes Fingerspitzengefühl und enge Abstimmung mit der Denkmalbehörde des Kreises Offenbach.",
      en: "The Buchschlag Villa Colony is one of Germany's most prominent Art Nouveau and architectural reform ensembles. Every renovation, addition, or new building demands consummate sensitivity and close alignment with the Offenbach District Heritage Office."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Ensembleschutz Villenkolonie Buchschlag", en: "Villenkolonie Buchschlag Architectural Ensemble Protection" },
        description: { de: "Einhaltung der verbindlichen Gestaltungs- und Erhaltungssatzung der Stadt Dreieich.", en: "Adherence to the binding architectural design and preservation statute of the City of Dreieich." }
      },
      {
        title: { de: "Denkmalrechtliche Genehmigungen (HDSchG)", en: "Heritage Protection Approvals (HDSchG)" },
        description: { de: "Bauanträge und Detailabstimmungen mit dem Denkmalamt Kreis Offenbach in Dietzenbach.", en: "Permit applications and detailed design clearance with the Offenbach District Heritage Authority in Dietzenbach." }
      },
      {
        title: { de: "Wald- & Baumbestandssatzung Dreieich", en: "Dreieich Woodland & Tree Protection Statute" },
        description: { de: "Wurzelschutz und Abstandsflächen zu geschütztem Kiefern- und Eichenbestand.", en: "Root zone protection protocols and setback clearances respecting protected pine and oak groves." }
      }
    ],
    faqs: [
      {
        question: { de: "Darf man in Buchschlag neu bauen?", en: "Is new construction permitted in Buchschlag?" },
        answer: { de: "Ja, Ersatz- und Neubauten sind möglich, müssen sich aber in Dachform, Materialität, Firsthöhe und Farbigkeit harmonisch in das denkmalgeschützte Ensemble einfügen. Wir entwickeln genehmigungsfähige Konzepte.", en: "Yes, replacement and new buildings are possible, but their roof geometry, materials, ridge heights, and chromatic palette must blend harmoniously into the listed ensemble. We create fully approvable design schemes." }
      },
      {
        question: { de: "Welche Fördermittel gibt es für Denkmalsanierungen in Buchschlag?", en: "What subsidies and grants are available for historic renovations in Buchschlag?" },
        answer: { de: "Neben KfW-Förderungen für Effizienzhäuser Denkmal können Eigentümer erhebliche steuerliche Abschreibungen nach § 7i / § 10f EStG geltend machen. Wir unterstützen bei den Anträgen.", en: "Beyond KfW subsidies for listed heritage buildings, property owners can claim substantial tax write-offs under §§ 7i / 10f of the German Income Tax Act (EStG). We provide comprehensive application support." }
      },
      {
        question: { de: "Wie weit ist Ihr Büro von Buchschlag entfernt?", en: "How far is your architectural office from Buchschlag?" },
        answer: { de: "Unser Frankfurter Hauptsitz liegt nur ca. 12 Minuten Fahrtzeit entfernt. Wir sind regelmäßig vor Ort zur Begleitung unserer Bauvorhaben.", en: "Our Frankfurt headquarters is only about 12 minutes away by car. We are regularly on-site overseeing our ongoing projects." }
      }
    ]
  },

  "architektur-dreieich-sprendlingen": {
    slug: "architektur-dreieich-sprendlingen",
    path: "/architektur-dreieich-sprendlingen",
    parentPath: "/architektur-dreieich",
    parentName: { de: "Dreieich & Kreis Offenbach", en: "Dreieich & District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Dreieich-Sprendlingen & Götzenhain",
      en: "Architecture, Urban Planning & Building Permits in Dreieich Sprendlingen & Götzenhain"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Dreieich-Sprendlingen & Götzenhain",
      en: "Architecture · Urban Planning · Permitting | Dreieich Sprendlingen & Götzenhain"
    },
    subtitle: {
      de: "Dreieich vereint lebendige Stadtzentren mit attraktiven Wohnlagen im Grünen. Ob Mehrfamilienhäuser in Sprendlingen, Nachverdichtung nach § 34 BauGB in Götzenhain oder Gewerbeneubauten: Shams Consult plant wirtschaftlich, nachhaltig und genehmigungssicher.",
      en: "Dreieich balances vibrant city centers with green suburban living. Whether multi-family housing in Sprendlingen, infill developments under § 34 BauGB in Götzenhain, or commercial assets: Shams Consult delivers with speed and precision."
    },
    targetKeywords: [
      "Architekt Dreieich-Sprendlingen & Götzenhain",
      "Stadtplanung Dreieich-Sprendlingen & Götzenhain",
      "Bauantrag Dreieich-Sprendlingen & Götzenhain",
      "Baugenehmigung Dreieich-Sprendlingen & Götzenhain",
      "HOAI Leistungsphasen Dreieich-Sprendlingen & Götzenhain",
      "Architekturbüro Dreieich-Sprendlingen & Götzenhain"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Dreieich-Sprendlingen & Götzenhain | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Dreieich Sprendlingen & Götzenhain | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Dreieich-Sprendlingen & Götzenhain. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Dreieich Sprendlingen & Götzenhain. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Sprendlingen, Hirschsprung, Götzenhain, Offenthal, Dreieichenhain",
        en: "Catchment Area: We design and plan for clients in Sprendlingen, Hirschsprung, Götzenhain, Offenthal, Dreieichenhain"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Wohnungsbau, Nachverdichtung & Gewerbe in Dreieich",
      en: "Residential Housing, Infill & Commercial Architecture in Dreieich"
    },
    localFocusDescription: {
      de: "Dreieich vereint lebendige Stadtzentren mit attraktiven Wohnlagen im Grünen. Ob Mehrfamilienhäuser in Sprendlingen, Nachverdichtung nach § 34 BauGB in Götzenhain oder Gewerbeneubauten: Shams Consult plant wirtschaftlich, nachhaltig und genehmigungssicher.",
      en: "Dreieich balances vibrant city centers with green suburban living. Whether multi-family housing in Sprendlingen, infill developments under § 34 BauGB in Götzenhain, or commercial assets: Shams Consult delivers with speed and precision."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsicht Kreis Offenbach (Dietzenbach)", en: "Offenbach District Building Authority (Dietzenbach)" },
        description: { de: "Etablierte Prüfungsabläufe für Baugenehmigungen im gesamten Stadtgebiet Dreieich.", en: "Established administrative approval processes for building permits across the entire municipal territory of Dreieich." }
      },
      {
        title: { de: "§ 34 BauGB Nachverdichtung", en: "§ 34 BauGB Urban Infill & Densification" },
        description: { de: "Einfügungsprüfung zur optimalen Grundstücksausnutzung bei innerstädtischen Baulücken.", en: "Neighborhood contextual analysis ensuring maximum floor area utilization on urban infill sites." }
      },
      {
        title: { de: "HBO Stellplatznachweis Dreieich", en: "Dreieich Municipal Parking Space Requirements" },
        description: { de: "Rechtskonforme Planung von Tiefgaragen, Doppelparkern und oberirdischen Stellplätzen.", en: "Code-compliant planning of underground garages, mechanical duplex parkers, and surface parking bays." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie lange dauert eine Baugenehmigung in Dreieich?", en: "How long does a building permit take in Dreieich?" },
        answer: { de: "Die Bauaufsicht des Kreises Offenbach bearbeitet vereinfachte Bauanträge nach § 65 HBO in der Regel innerhalb von 3 bis 4 Monaten. Wir sichern vollständige Unterlagen zur Vermeidung von Verzögerungen.", en: "The Offenbach District Building Authority typically processes simplified building applications under § 65 HBO within 3 to 4 months. We provide complete dossiers to prevent administrative delays." }
      },
      {
        question: { de: "Planen Sie auch Gewerbeobjekte in Dreieich?", en: "Do you also design commercial buildings in Dreieich?" },
        answer: { de: "Ja, wir verfügen über umfangreiche Erfahrung in der Ausführungs- und Genehmigungsplanung von Gewerbebauten, Supermärkten und Bürogebäuden.", en: "Yes, we possess extensive experience in construction design and statutory approvals for retail properties, supermarkets, and commercial office buildings." }
      },
      {
        question: { de: "Können Sie vor dem Kauf eines Grundstücks eine Machbarkeitsstudie erstellen?", en: "Can you conduct a feasibility study prior to purchasing a plot of land?" },
        answer: { de: "Ja, wir prüfen Baurecht, GRZ/GFZ, Erschließung und Altlasten vor Unterzeichnung des Notarvertrags.", en: "Yes, we examine zoning rights, building coverage ratios (GRZ/GFZ), utility connections, and potential soil contamination before you sign the notary contract." }
      }
    ]
  },

  "architektur-neu-isenburg": {
    slug: "architektur-neu-isenburg",
    path: "/architektur-neu-isenburg",
    parentPath: "/architektur-dreieich",
    parentName: { de: "Metropolregion Frankfurt-Süd", en: "Metropolitan Region Frankfurt-South" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Neu-Isenburg",
      en: "Architecture, Urban Planning & Building Permits in Neu-Isenburg"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Neu-Isenburg",
      en: "Architecture · Urban Planning · Permitting | Neu-Isenburg"
    },
    subtitle: {
      de: "Direkt an der Frankfurter Stadtgrenze profitiert Neu-Isenburg von hervorragender Infrastruktur. Wir realisieren hochwertige Wohnanlagen, Revitalisierungen historischer Hugenottenbauten und moderne Gewerbearchitektur.",
      en: "Right on Frankfurt's municipal border, Neu-Isenburg thrives on superb connectivity. We design premium residential developments, restore historic Huguenot buildings, and plan forward-looking commercial architecture."
    },
    targetKeywords: [
      "Architekt Neu-Isenburg",
      "Stadtplanung Neu-Isenburg",
      "Bauantrag Neu-Isenburg",
      "Baugenehmigung Neu-Isenburg",
      "HOAI Leistungsphasen Neu-Isenburg",
      "Architekturbüro Neu-Isenburg"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Neu-Isenburg | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Neu-Isenburg | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Neu-Isenburg. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Neu-Isenburg. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Hugenottenallee, Buchenbusch, Gravenbruch, Zeppelinheim",
        en: "Catchment Area: We design and plan for clients in Hugenottenallee, Buchenbusch, Gravenbruch, Zeppelinheim"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur & Stadtplanung in Neu-Isenburg: Wohnen & Gewerbe",
      en: "Architecture & Urban Planning in Neu-Isenburg: Residential & Commercial"
    },
    localFocusDescription: {
      de: "Direkt an der Frankfurter Stadtgrenze profitiert Neu-Isenburg von hervorragender Infrastruktur. Wir realisieren hochwertige Wohnanlagen, Revitalisierungen historischer Hugenottenbauten und moderne Gewerbearchitektur.",
      en: "Right on Frankfurt's municipal border, Neu-Isenburg thrives on superb connectivity. We design premium residential developments, restore historic Huguenot buildings, and plan forward-looking commercial architecture."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Fluglärmschutzgesetz Frankfurt Airport", en: "Frankfurt Airport Noise Abatement Act" },
        description: { de: "Schallschutztechnische Berechnungen und Vorgaben für Schallschutzfenster in Lärmschutzbereichen.", en: "Acoustic engineering calculations and certified window soundproofing specifications conforming to noise protection zone requirements." }
      },
      {
        title: { de: "Gestaltungssatzung Hugenottenviertel", en: "Hugenottenviertel Historic Design Statute" },
        description: { de: "Erhaltung der städtebaulichen Identität bei Sanierungen und Anbauten im historischen Kern.", en: "Design alignment for renovations and extensions within the historic Huguenot settlement center." }
      },
      {
        title: { de: "Bauaufsicht Kreis Offenbach", en: "Offenbach District Building Department" },
        description: { de: "Zügige Genehmigungsverfahren für gewerbliche und private Vorhaben.", en: "Fast-track building permit procedures for commercial and residential developments." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Schallschutzauflagen gelten in Neu-Isenburg?", en: "What acoustic regulations must be considered when building in Neu-Isenburg?" },
        answer: { de: "Durch die Nähe zum Frankfurter Flughafen gelten besondere Anforderungen nach DIN 4109 und Fluglärmschutzgesetz. Wir erstellen die erforderlichen Schallschutznachweise.", en: "Due to proximity to Frankfurt Airport, specific acoustic standards under DIN 4109 and the Airport Noise Protection Act apply. We prepare the required acoustic compliance documentation." }
      },
      {
        question: { de: "Sind Büro-zu-Wohnen-Umnutzungen in Neu-Isenburg möglich?", en: "Are commercial-to-residential conversions feasible in Neu-Isenburg?" },
        answer: { de: "Ja, insbesondere im Umfeld des Bahnhofs und an Gewerberändern. Wir prüfen die planungsrechtliche Zulässigkeit und begleiten das Genehmigungsverfahren.", en: "Yes, particularly near the train station and commercial fringes. We verify zoning compatibility and coordinate change-of-use approvals with the planning office." }
      },
      {
        question: { de: "Übernimmt Shams Consult die Kostenkontrolle nach DIN 276?", en: "Does Shams Consult manage cost control under DIN 276?" },
        answer: { de: "Ja, Kostensicherheit ist ein elementarer Bestandteil unserer Arbeit von der ersten Schätzung bis zur finalen Abrechnung.", en: "Yes, cost certainty is a cornerstone of our practice. We track budgets rigorously across all stages from preliminary estimate to final invoice auditing." }
      }
    ]
  },

  "architektur-langen": {
    slug: "architektur-langen",
    path: "/architektur-langen",
    parentPath: "/architektur-dreieich",
    parentName: { de: "Kreis Offenbach", en: "District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Langen (Hessen)",
      en: "Architecture, Urban Planning & Building Permits in Langen (Hesse)"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Langen (Hessen)",
      en: "Architecture · Urban Planning · Permitting | Langen (Hesse)"
    },
    subtitle: {
      de: "Als wirtschaftlicher Dreh- und Angelpunkt zwischen Frankfurt und Darmstadt verzeichnet Langen stetige Nachfrage nach neuem Wohnraum. Shams Consult plant moderne Mehrfamilienhäuser, Einfamilienhäuser und Konversionsprojekte.",
      en: "As a strategic hub between Frankfurt and Darmstadt, Langen experiences strong housing demand. Shams Consult designs multi-family developments, modern family villas, and urban brownfield transformations."
    },
    targetKeywords: [
      "Architekt Langen (Hessen)",
      "Stadtplanung Langen (Hessen)",
      "Bauantrag Langen (Hessen)",
      "Baugenehmigung Langen (Hessen)",
      "HOAI Leistungsphasen Langen (Hessen)",
      "Architekturbüro Langen (Hessen)"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Langen (Hessen) | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Langen (Hesse) | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Langen (Hessen). Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Langen (Hesse). Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Lindenviertel, Neurott, Altstadt Langen, Steinberg, Egelsbach",
        en: "Catchment Area: We design and plan for clients in Lindenviertel, Neurott, Altstadt Langen, Steinberg, Egelsbach"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Bauantrag & Nachverdichtung in Langen (Hessen)",
      en: "Architecture, Permits & Densification in Langen (Hesse)"
    },
    localFocusDescription: {
      de: "Als wirtschaftlicher Dreh- und Angelpunkt zwischen Frankfurt und Darmstadt verzeichnet Langen stetige Nachfrage nach neuem Wohnraum. Shams Consult plant moderne Mehrfamilienhäuser, Einfamilienhäuser und Konversionsprojekte.",
      en: "As a strategic hub between Frankfurt and Darmstadt, Langen experiences strong housing demand. Shams Consult designs multi-family developments, modern family villas, and urban brownfield transformations."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "§ 34 BauGB Einfügungsgebot", en: "§ 34 BauGB Contextual Infill in Residential Quarters" },
        description: { de: "Harmonische Integration von Mehrfamilienhäusern in gewachsene Wohnsiedlungen.", en: "Harmonious integration of multi-family buildings into established neighborhood fabrics." }
      },
      {
        title: { de: "Klimaanpassung & Entsiegelung", en: "Climate Adaptation & Soil Desealing Directives" },
        description: { de: "Umsetzung von versickerungsfähigen Pflasterflächen, Dachbegrünungen und Regenwasserzisternen.", en: "Implementation of unsealed permeable pavings, green roofs, and localized stormwater retention." }
      },
      {
        title: { de: "Bauaufsicht Kreis Offenbach", en: "Offenbach District Building Control (Dietzenbach)" },
        description: { de: "Zuverlässige Einreichung von Bauanträgen und Bauvoranfragen nach HBO.", en: "Reliable building permit applications and pre-application filings under HBO." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie hoch darf in Langen im Wohngebiet gebaut werden?", en: "How high can multi-family buildings be built in Langen?" },
        answer: { de: "Die Höhenentwicklung richtet sich nach dem Bebauungsplan oder der Umgebungsbebauung nach § 34 BauGB. Wir ermitteln das maximale Bauvolumen im Rahmen einer Ersteinschätzung.", en: "Building heights depend on the specific development plan or the immediate neighborhood context under § 34 BauGB. We determine maximum permissible volumes in an initial study." }
      },
      {
        question: { de: "Was kostet eine erste Machbarkeitsprüfung für ein Grundstück in Langen?", en: "What does an initial feasibility check for a property in Langen cost?" },
        answer: { de: "Wir bieten ein strukturiertes Erstgespräch an, in dem wir die bauplanungsrechtlichen Rahmenbedingungen vorab skizzieren.", en: "We offer a structured initial consultation where we outline the statutory planning and zoning framework for your parcel." }
      },
      {
        question: { de: "Wie sichern Sie die Baukosten während der Ausführung ab?", en: "How do you secure construction costs during the build phase?" },
        answer: { de: "Durch präzise Kostenberechnungen nach DIN 276, VOB-konforme Ausschreibungen mit Preisspiegel und kontinuierliche Rechnungsprüfung.", en: "Through precise DIN 276 cost calculations, VOB-compliant procurement with detailed tender comparisons, and continuous invoice verification." }
      }
    ]
  },

  "architektur-roedermark-ober-roden": {
    slug: "architektur-roedermark-ober-roden",
    path: "/architektur-roedermark-ober-roden",
    parentPath: "/architektur-roedermark",
    parentName: { de: "Rödermark & Kreis Offenbach", en: "Rödermark & District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Rödermark Ober-Roden",
      en: "Architecture, Urban Planning & Building Permits in Rödermark Ober-Roden"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Rödermark Ober-Roden",
      en: "Architecture · Urban Planning · Permitting | Rödermark Ober-Roden"
    },
    subtitle: {
      de: "Mit unserem Planungsstandort in der Carl-Zeiss-Str. 43 in Rödermark sind wir direkt vor Ihrer Haustür. Wir entwerfen erstklassige Stadtvillen, energieeffiziente KfW-40-Wohngebäude und begleiten Gewerbeprojekte in ganz Ober-Roden.",
      en: "With our planning location at Carl-Zeiss-Str. 43 in Rödermark, we are right on your doorstep. We design luxury villas, energy-efficient KfW 40 developments, and commercial projects across Ober-Roden."
    },
    targetKeywords: [
      "Architekt Rödermark Ober-Roden",
      "Stadtplanung Rödermark Ober-Roden",
      "Bauantrag Rödermark Ober-Roden",
      "Baugenehmigung Rödermark Ober-Roden",
      "HOAI Leistungsphasen Rödermark Ober-Roden",
      "Architekturbüro Rödermark Ober-Roden"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Rödermark Ober-Roden | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Rödermark Ober-Roden | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Rödermark Ober-Roden. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Rödermark Ober-Roden. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Ober-Roden, Breidert, Messenhausen, Ortskern",
        en: "Catchment Area: We design and plan for clients in Ober-Roden, Breidert, Messenhausen, Town Center"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur vor Ort: Stadtvillen & Baugenehmigungen in Ober-Roden",
      en: "Local Architecture: Villas & Building Permits in Ober-Roden"
    },
    localFocusDescription: {
      de: "Mit unserem Planungsstandort in der Carl-Zeiss-Str. 43 in Rödermark sind wir direkt vor Ihrer Haustür. Wir entwerfen erstklassige Stadtvillen, energieeffiziente KfW-40-Wohngebäude und begleiten Gewerbeprojekte in ganz Ober-Roden.",
      en: "With our planning location at Carl-Zeiss-Str. 43 in Rödermark, we are right on your doorstep. We design luxury villas, energy-efficient KfW 40 developments, and commercial projects across Ober-Roden."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bebauungspläne Breidert & Ober-Roden", en: "Breidert & Ober-Roden Development Plans" },
        description: { de: "Rechtssichere Umsetzung von Dachneigungen, Kniestockhöhen und GRZ/GFZ-Kennwerten.", en: "Compliant implementation of permissible roof pitches, knee-wall heights, and site occupancy ratios (GRZ/GFZ)." }
      },
      {
        title: { de: "Bauaufsichtsamt Kreis Offenbach", en: "Offenbach District Building Department" },
        description: { de: "Kurze Behördenwege nach Dietzenbach für zügige Baugenehmigungsverfahren.", en: "Short administrative communication channels to Dietzenbach ensuring swift permit delivery." }
      },
      {
        title: { de: "KfW-Effizienzhaus & QNG-Standards", en: "KfW Efficiency House & QNG Sustainability Standards" },
        description: { de: "Zertifizierte Nachhaltigkeitsplanung für maximale Fördermittel nach hessischem Standard.", en: "Certified green building planning securing maximum federal and Hessian subsidies." }
      }
    ],
    faqs: [
      {
        question: { de: "Kann ich ein Beratungsgespräch direkt in Rödermark wahrnehmen?", en: "Can I schedule an in-person consultation directly in Rödermark?" },
        answer: { de: "Selbstverständlich. Sie erreichen unser Büro in der Carl-Zeiss-Str. 43 nach kurzer Terminvereinbarung.", en: "Certainly. You can visit our planning office at Carl-Zeiss-Str. 43 upon brief appointment." }
      },
      {
        question: { de: "Bauen Sie im Breidert auch moderne Flachdachvillen?", en: "Do you design contemporary flat-roof villas in the Breidert district?" },
        answer: { de: "Sofern der maßgebliche Bebauungsplan dies zulässt oder über eine Befreiung nach § 31 BauGB genehmigt werden kann. Wir prüfen dies detailliert.", en: "Provided the governing zoning plan allows it or an exemption under § 31 BauGB can be granted. We review the legal options in detail." }
      },
      {
        question: { de: "Welche Referenzen hat Shams Consult direkt in Rödermark?", en: "What references does Shams Consult have directly in Rödermark?" },
        answer: { de: "Wir haben unter anderem eine prämierte moderne Stadtvilla mit Mehrfamilienhauscharakter und Erdwärmetechnik erfolgreich in Rödermark realisiert.", en: "Among others, we successfully designed and realized an award-winning modern urban villa with multi-family character and geothermal energy in Rödermark." }
      }
    ]
  },

  "architektur-roedermark-urberach": {
    slug: "architektur-roedermark-urberach",
    path: "/architektur-roedermark-urberach",
    parentPath: "/architektur-roedermark",
    parentName: { de: "Rödermark & Kreis Offenbach", en: "Rödermark & District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Rödermark Urberach & Waldacker",
      en: "Architecture, Urban Planning & Building Permits in Rödermark Urberach & Waldacker"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Rödermark Urberach & Waldacker",
      en: "Architecture · Urban Planning · Permitting | Rödermark Urberach & Waldacker"
    },
    subtitle: {
      de: "Urberach und der idyllische Waldacker bieten großzügige Grundstücke für anspruchsvolles Wohnen im Grünen. Shams Consult plant hochwertige Einfamilienhäuser, moderne Aufstockungen und Sanierungen mit höchster Kostendisziplin.",
      en: "Urberach and scenic Waldacker offer generous lots for premium living surrounded by nature. Shams Consult designs high-standard single-family residences, modern attic extensions, and deep retrofits."
    },
    targetKeywords: [
      "Architekt Rödermark Urberach & Waldacker",
      "Stadtplanung Rödermark Urberach & Waldacker",
      "Bauantrag Rödermark Urberach & Waldacker",
      "Baugenehmigung Rödermark Urberach & Waldacker",
      "HOAI Leistungsphasen Rödermark Urberach & Waldacker",
      "Architekturbüro Rödermark Urberach & Waldacker"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Rödermark Urberach & Waldacker | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Rödermark Urberach & Waldacker | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Rödermark Urberach & Waldacker. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Rödermark Urberach & Waldacker. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Urberach, Waldacker, Bulau, Traminerweg",
        en: "Catchment Area: We design and plan for clients in Urberach, Waldacker, Bulau, Traminerweg"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Bauantrag & Sanierung in Urberach & Waldacker",
      en: "Architecture, Building Permits & Retrofits in Urberach & Waldacker"
    },
    localFocusDescription: {
      de: "Urberach und der idyllische Waldacker bieten großzügige Grundstücke für anspruchsvolles Wohnen im Grünen. Shams Consult plant hochwertige Einfamilienhäuser, moderne Aufstockungen und Sanierungen mit höchster Kostendisziplin.",
      en: "Urberach and scenic Waldacker offer generous lots for premium living surrounded by nature. Shams Consult designs high-standard single-family residences, modern attic extensions, and deep retrofits."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "§ 34 BauGB Einfügung im Waldacker", en: "§ 34 BauGB Infill in Waldacker Settlement" },
        description: { de: "Wahrung des lockeren, waldnahen Siedlungscharakters bei Bauvoranfragen.", en: "Preserving the loose, woodland-adjacent garden character in preliminary building inquiries." }
      },
      {
        title: { de: "Grundwasser- & Versickerungsvorgaben", en: "Groundwater & Infiltration Mandates" },
        description: { de: "Hydrogeologische Vorprüfungen und Rigolenplanung im Kreis Offenbach.", en: "Hydrogeological preliminary assessments and retention rigole design within the Offenbach district." }
      },
      {
        title: { de: "HBO Vereinfachtes Baugenehmigungsverfahren", en: "HBO Simplified Building Permit Procedure" },
        description: { de: "Vollständige, prüffähige Bauanträge für Ein- und Zweifamilienhäuser.", en: "Complete, audit-ready building permit dossiers for single- and two-family residences." }
      }
    ],
    faqs: [
      {
        question: { de: "Sind Aufstockungen auf bestehenden Bungalows in Waldacker möglich?", en: "Are additional stories or roof conversions possible on existing bungalows in Waldacker?" },
        answer: { de: "Ja, wir prüfen vorab die statischen Reserven der Tragstruktur und reichen eine Bauvoranfrage bezüglich der zulässigen Firsthöhe ein.", en: "Yes, we first evaluate the structural load-bearing capacity and submit a preliminary building inquiry regarding permissible ridge heights." }
      },
      {
        question: { de: "Wie arbeitet Shams Consult mit lokalen Handwerkern zusammen?", en: "How does Shams Consult collaborate with regional craft trades?" },
        answer: { de: "Wir verfügen über hervorragende Kontakte zu regionalen Meisterbetrieben im Kreis Offenbach und vergeben alle Gewerke transparent nach VOB.", en: "We maintain outstanding relationships with proven master craft firms in the Offenbach district and tender all work transparently under German VOB standards." }
      },
      {
        question: { de: "Übernehmen Sie auch die energetische Sanierung von 70er-Jahre-Häusern?", en: "Do you also manage energy-efficiency retrofits for 1970s residences?" },
        answer: { de: "Ja, energetische Kernsanierungen mit KfW-Fördermitteln gehören zu unseren festen Kernkompetenzen.", en: "Yes, deep energetic retrofits leveraging KfW subsidies are an established core competence of our studio." }
      }
    ]
  },

  "architektur-rodgau": {
    slug: "architektur-rodgau",
    path: "/architektur-rodgau",
    parentPath: "/architektur-roedermark",
    parentName: { de: "Kreis Offenbach", en: "District of Offenbach" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Rodgau",
      en: "Architecture, Urban Planning & Building Permits in Rodgau"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Rodgau",
      en: "Architecture · Urban Planning · Permitting | Rodgau"
    },
    subtitle: {
      de: "Rodgau ist eine der wachstumsstärksten Städte des Kreises Offenbach. Shams Consult entwirft moderne Doppelhäuser, barrierefreie Mehrfamilienhäuser und gewerbliche Liegenschaften in allen fünf Rodgauer Stadtteilen.",
      en: "Rodgau is one of the fastest-growing municipalities in the Offenbach district. Shams Consult plans modern duplexes, barrier-free multi-family complexes, and commercial properties across all five quarters."
    },
    targetKeywords: [
      "Architekt Rodgau",
      "Stadtplanung Rodgau",
      "Bauantrag Rodgau",
      "Baugenehmigung Rodgau",
      "HOAI Leistungsphasen Rodgau",
      "Architekturbüro Rodgau"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Rodgau | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Rodgau | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Rodgau. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Rodgau. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Jügesheim, Dudenhofen, Nieder-Roden, Hainhausen, Weiskirchen",
        en: "Catchment Area: We design and plan for clients in Jügesheim, Dudenhofen, Nieder-Roden, Hainhausen, Weiskirchen"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur & Bauanträge in Rodgau: Wohnungsbau & Stadtvillen",
      en: "Architecture & Building Permits in Rodgau: Residential Housing & Villas"
    },
    localFocusDescription: {
      de: "Rodgau ist eine der wachstumsstärksten Städte des Kreises Offenbach. Shams Consult entwirft moderne Doppelhäuser, barrierefreie Mehrfamilienhäuser und gewerbliche Liegenschaften in allen fünf Rodgauer Stadtteilen.",
      en: "Rodgau is one of the fastest-growing municipalities in the Offenbach district. Shams Consult plans modern duplexes, barrier-free multi-family complexes, and commercial properties across all five quarters."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsichtsamt Dietzenbach", en: "Dietzenbach District Building Authority" },
        description: { de: "Effiziente Baugenehmigungen für Bauherren in Jügesheim, Dudenhofen und Nieder-Roden.", en: "Efficient building permit procedures for developers and owners in Jügesheim, Dudenhofen, and Nieder-Roden." }
      },
      {
        title: { de: "Bebauungspläne Stadt Rodgau", en: "City of Rodgau Master Development Plans" },
        description: { de: "Konforme Ausnutzung der Festsetzungen zu Dachformen, Geschossflächen und Stellplätzen.", en: "Compliant utilization of zoning codes regarding roof geometry, floor areas, and parking facilities." }
      },
      {
        title: { de: "HBO Freistellungsverfahren (§ 64 HBO)", en: "HBO Building Permit Exemption (§ 64 HBO)" },
        description: { de: "Schnellere Baufreigaben bei strikter Übereinstimmung mit qualifizierten B-Plänen.", en: "Accelerated approvals when proposals strictly adhere to qualified local development plans." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie schnell kann ein Bauantrag in Rodgau eingereicht werden?", en: "How quickly can a building permit application be submitted in Rodgau?" },
        answer: { de: "Nach Fertigstellung der Entwurfs- und Genehmigungsplanung (LPH 3–4) reichen wir die Unterlagen digital bei der Bauaufsicht Dietzenbach ein.", en: "Upon completing the scheme design and permit documentation (Phases 3–4), we submit all documents digitally to the Dietzenbach Building Authority." }
      },
      {
        question: { de: "Planen Sie auch Mehrfamilienhäuser zur Vermietung in Rodgau?", en: "Do you design multi-family apartment buildings for rent in Rodgau?" },
        answer: { de: "Ja, wir optimieren Grundrisse und Wohnflächen für renditestarke, langlebige Mietwohnungsbauten.", en: "Yes, we optimize residential floor plans and net living areas for durable, high-yield rental housing." }
      },
      {
        question: { de: "Ist Ihr Büro für Termine in Rodgau erreichbar?", en: "Is your office easily accessible for appointments in Rodgau?" },
        answer: { de: "Unser Planungsstandort in Rödermark grenzt direkt an Rodgau (unter 5 Minuten Fahrtzeit nach Jügesheim).", en: "Our Rödermark studio directly borders Rodgau (less than 5 minutes drive to Jügesheim)." }
      }
    ]
  },

  "architektur-bad-homburg-hardtwald": {
    slug: "architektur-bad-homburg-hardtwald",
    path: "/architektur-bad-homburg-hardtwald",
    parentPath: "/architektur-bad-homburg",
    parentName: { de: "Bad Homburg & Hochtaunus", en: "Bad Homburg & Hochtaunus" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Bad Homburg Hardtwald",
      en: "Architecture, Urban Planning & Building Permits in Bad Homburg Hardtwald"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Bad Homburg Hardtwald",
      en: "Architecture · Urban Planning · Permitting | Bad Homburg Hardtwald"
    },
    subtitle: {
      de: "Der Bad Homburger Hardtwald und das Kurviertel gehören zu den Spitzenlagen Europas. Zwischen jahrhundertealten Parkbäumen und herrschaftlichen Anwesen schaffen wir maßgeschneiderte Neubauten und denkmalgerechte Generalsanierungen auf internationalem Niveau.",
      en: "The Bad Homburg Hardtwald and spa district rank among Europe's most prestigious residential enclaves. Amid historic mature trees and stately estates, we design bespoke villas and deep heritage modernizations."
    },
    targetKeywords: [
      "Architekt Bad Homburg Hardtwald",
      "Stadtplanung Bad Homburg Hardtwald",
      "Bauantrag Bad Homburg Hardtwald",
      "Baugenehmigung Bad Homburg Hardtwald",
      "HOAI Leistungsphasen Bad Homburg Hardtwald",
      "Architekturbüro Bad Homburg Hardtwald"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Bad Homburg Hardtwald | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Bad Homburg Hardtwald | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Bad Homburg Hardtwald. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Bad Homburg Hardtwald. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Hardtwald, Kurviertel, Tannenwaldallee, Kirdorf",
        en: "Catchment Area: We design and plan for clients in Hardtwald, Kurviertel, Tannenwaldallee, Kirdorf"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Exklusive Villenarchitektur & Denkmalschutz im Hardtwald",
      en: "Exclusive Villa Architecture & Heritage Protection in Hardtwald"
    },
    localFocusDescription: {
      de: "Der Bad Homburger Hardtwald und das Kurviertel gehören zu den Spitzenlagen Europas. Zwischen jahrhundertealten Parkbäumen und herrschaftlichen Anwesen schaffen wir maßgeschneiderte Neubauten und denkmalgerechte Generalsanierungen auf internationalem Niveau.",
      en: "The Bad Homburg Hardtwald and spa district rank among Europe's most prestigious residential enclaves. Amid historic mature trees and stately estates, we design bespoke villas and deep heritage modernizations."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Erhaltungssatzung Kurviertel & Hardtwald", en: "Kurviertel & Hardtwald Preservation Statute" },
        description: { de: "Sensible Einpassung in die historische Villenstruktur und Schutz prägender Grünstrukturen.", en: "Sensitive architectural integration into the historic villa fabric and protection of significant park vegetation." }
      },
      {
        title: { de: "Denkmalschutzamt Bad Homburg vor der Höhe", en: "Bad Homburg vor der Höhe Heritage Authority" },
        description: { de: "Verhandlung denkmalrechtlicher Zustimmungen für anspruchsvolle Fassaden- und Dachumbauten.", en: "Negotiating statutory heritage consents for sophisticated facade restorations and roof conversions." }
      },
      {
        title: { de: "Baumschutz & Tiefgaragenplanung", en: "Tree Protection & Underground Garage Engineering" },
        description: { de: "Wurzelschutzkonzepte bei Unterbauung weitläufiger Villengärten.", en: "Root preservation concepts when developing subterranean parking beneath expansive villa grounds." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche architektonischen Stile sind im Hardtwald genehmigungsfähig?", en: "What architectural styles can be approved in Hardtwald?" },
        answer: { de: "Neben klassischer Villenarchitektur sind auch moderne Baukörper möglich, sofern Proportionen, Materialität und Firsthöhen mit der Erhaltungssatzung harmonieren.", en: "Alongside classical villa architecture, contemporary cubic designs are permissible, provided proportions, materials, and ridge heights harmonize with the preservation statute." }
      },
      {
        question: { de: "Übernehmen Sie die gesamte Innenarchitektur und Lichtplanung?", en: "Do you handle complete interior design and lighting schemes?" },
        answer: { de: "Ja, wir integrieren hochwertige Innenarchitektur, Beleuchtungskonzepte und Smart-Home-Technik nahtlos in die Werkplanung.", en: "Yes, we seamlessly integrate high-end interior architecture, architectural lighting, and smart-home technology into our working drawings." }
      },
      {
        question: { de: "Wie begleiten Sie Bauherren während der Bauphase?", en: "How do you accompany clients during the construction phase?" },
        answer: { de: "Mit intensiver Bauüberwachung vor Ort (LPH 8) durch erfahrene Architekten sichern wir höchste Handwerksqualität und Termintreue.", en: "Through intensive on-site clerk of works (Phase 8) by senior architects, we safeguard the highest standard of craftsmanship and milestone adherence." }
      }
    ]
  },

  "architektur-oberursel": {
    slug: "architektur-oberursel",
    path: "/architektur-oberursel",
    parentPath: "/architektur-bad-homburg",
    parentName: { de: "Hochtaunus & Vordertaunus", en: "Hochtaunus & Vordertaunus" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Oberursel (Taunus)",
      en: "Architecture, Urban Planning & Building Permits in Oberursel (Taunus)"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Oberursel (Taunus)",
      en: "Architecture · Urban Planning · Permitting | Oberursel (Taunus)"
    },
    subtitle: {
      de: "Am Fuße des Feldbergs verbindet Oberursel stadtnahes Wohnen mit Naturqualität. Anspruchsvolle Hanggrundstücke in Oberstedten oder Nachverdichtung im Zentrum verlangen statische und gestalterische Präzision.",
      en: "Nestled at the foot of Mount Feldberg, Oberursel offers scenic living with swift access to Frankfurt. Challenging hillside sites in Oberstedten and central infill demand structural and architectural precision."
    },
    targetKeywords: [
      "Architekt Oberursel (Taunus)",
      "Stadtplanung Oberursel (Taunus)",
      "Bauantrag Oberursel (Taunus)",
      "Baugenehmigung Oberursel (Taunus)",
      "HOAI Leistungsphasen Oberursel (Taunus)",
      "Architekturbüro Oberursel (Taunus)"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Oberursel (Taunus) | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Oberursel (Taunus) | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Oberursel (Taunus). Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Oberursel (Taunus). Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Oberursel-Mitte, Oberstedten, Weißkirchen, Stierstadt, Bommersheim",
        en: "Catchment Area: We design and plan for clients in Oberursel-Center, Oberstedten, Weißkirchen, Stierstadt, Bommersheim"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Hangbauten & Bauanträge in Oberursel (Taunus)",
      en: "Architecture, Hillside Construction & Permits in Oberursel"
    },
    localFocusDescription: {
      de: "Am Fuße des Feldbergs verbindet Oberursel stadtnahes Wohnen mit Naturqualität. Anspruchsvolle Hanggrundstücke in Oberstedten oder Nachverdichtung im Zentrum verlangen statische und gestalterische Präzision.",
      en: "Nestled at the foot of Mount Feldberg, Oberursel offers scenic living with swift access to Frankfurt. Challenging hillside sites in Oberstedten and central infill demand structural and architectural precision."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsicht Hochtaunuskreis (Bad Homburg)", en: "Hochtaunuskreis Building Control (Bad Homburg)" },
        description: { de: "Erprobte Genehmigungsprozesse für Bauvorhaben im gesamten Stadtgebiet Oberursel.", en: "Proven approval workflows for construction projects across the municipal area of Oberursel." }
      },
      {
        title: { de: "Hangbebauung & Baugrundgutachten", en: "Hillside Construction & Geotechnical Reports" },
        description: { de: "Geotechnische Abstimmung zur Hangsicherung, Kellerabdichtung und Stützmauern.", en: "Specialist geotechnical coordination for slope retention, basement waterproofing, and retaining walls." }
      },
      {
        title: { de: "B-Plan Festsetzungen Taunushänge", en: "Taunus Slope Development Plan Codes" },
        description: { de: "Einhaltung maximaler Traufhöhen und Geländeveränderungen im Außenbereich.", en: "Adherence to maximum eaves heights, terrain re-profiling, and green space conservation." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie baut man wirtschaftlich an Hanglagen in Oberursel?", en: "How do you build cost-effectively on sloping sites in Oberursel?" },
        answer: { de: "Durch eine intelligente Grundrissorganisation, die das Hanggeschoss als vollwertigen Wohn- oder Wellnessbereich nutzt und teure Erdbewegungen minimiert.", en: "Through intelligent floor plan layouts that utilize the walkout basement as premium living or wellness space, minimizing expensive earth removal." }
      },
      {
        question: { de: "Übernimmt Shams Consult auch die Bauüberwachung vor Ort in Oberursel?", en: "Does Shams Consult also provide on-site supervision in Oberursel?" },
        answer: { de: "Ja, wir sind regelmäßig im Hochtaunuskreis vor Ort und steuern alle ausführenden Gewerke.", en: "Yes, we are frequently on-site throughout the Hochtaunus district, actively coordinating all construction trades." }
      },
      {
        question: { de: "Können Sie denkmalgeschützte Fachwerkhäuser in Oberursel sanieren?", en: "Can you restore heritage timber-framed buildings in Oberursel?" },
        answer: { de: "Ja, wir besitzen fundierte Erfahrung in der denkmalgerechten Sanierung historischer Fachwerkkonstruktionen.", en: "Yes, we possess solid experience in the conservation and structural restoration of historic half-timbered buildings." }
      }
    ]
  },

  "architektur-kronberg": {
    slug: "architektur-kronberg",
    path: "/architektur-kronberg",
    parentPath: "/architektur-bad-homburg",
    parentName: { de: "Hochtaunus", en: "Hochtaunus" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Kronberg im Taunus",
      en: "Architecture, Urban Planning & Building Permits in Kronberg im Taunus"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Kronberg im Taunus",
      en: "Architecture · Urban Planning · Permitting | Kronberg im Taunus"
    },
    subtitle: {
      de: "Kronberg und Schönberg sind Inbegriff gehobenen Wohnens im Rhein-Main-Gebiet. Historische Fachwerkhäuser im Burgbereich treffen auf moderne Luxusvillen in Bestlagen. Shams Consult liefert kompromisslose architektonische Qualität.",
      en: "Kronberg and Schönberg represent quintessential luxury living in the Frankfurt commuter belt. Historic half-timbered townhouses around the castle meet contemporary private villas in prime locations."
    },
    targetKeywords: [
      "Architekt Kronberg im Taunus",
      "Stadtplanung Kronberg im Taunus",
      "Bauantrag Kronberg im Taunus",
      "Baugenehmigung Kronberg im Taunus",
      "HOAI Leistungsphasen Kronberg im Taunus",
      "Architekturbüro Kronberg im Taunus"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Kronberg im Taunus | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Kronberg im Taunus | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Kronberg im Taunus. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Kronberg im Taunus. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Kronberg-Altstadt, Schönberg, Oberhöchstadt",
        en: "Catchment Area: We design and plan for clients in Kronberg Old Town, Schönberg, Oberhöchstadt"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur & Stadtplanung in Kronberg: Exklusives Wohnen am Taunus",
      en: "Architecture & Urban Planning in Kronberg: Luxury Living on the Taunus"
    },
    localFocusDescription: {
      de: "Kronberg und Schönberg sind Inbegriff gehobenen Wohnens im Rhein-Main-Gebiet. Historische Fachwerkhäuser im Burgbereich treffen auf moderne Luxusvillen in Bestlagen. Shams Consult liefert kompromisslose architektonische Qualität.",
      en: "Kronberg and Schönberg represent quintessential luxury living in the Frankfurt commuter belt. Historic half-timbered townhouses around the castle meet contemporary private villas in prime locations."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Denkmalbereich Kronberg Altstadt", en: "Kronberg Old Town Heritage Protection Zone" },
        description: { de: "Strikte Abstimmung mit der Denkmalfachbehörde bei Sanierungen und Anbauten.", en: "Rigorous alignment with the monument preservation office for historic renovations and additions." }
      },
      {
        title: { de: "Erhaltungssatzungen Schönberg & Kronberg", en: "Schönberg & Kronberg Villa Preservation Statutes" },
        description: { de: "Einhaltung der Villengebietscharakteristika und Grundstücksbegrünung.", en: "Compliance with villa quarter characteristics, generous open spaces, and green site coverage." }
      },
      {
        title: { de: "Bauaufsicht Hochtaunuskreis", en: "Hochtaunuskreis Building Authority" },
        description: { de: "Rechtssichere Bauanträge nach Hessischer Bauordnung (HBO).", en: "Statutorily secure building applications under the Hesse Building Code (HBO)." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Auflagen gelten beim Bauen in Hanglagen in Schönberg?", en: "What regulations apply to hillside building in Schönberg?" },
        answer: { de: "Hanganschnitte, Firsthöhenbegrenzungen und der Schutz alter Baumbestände müssen sorgfältig eingereicht werden. Wir berechnen alle Schnittprofile vorab.", en: "Slope cuts, ridge height ceilings, and the protection of mature tree stands must be meticulously documented. We calculate all cross-sectional profiles in advance." }
      },
      {
        question: { de: "Entwerfen Sie auch minimalistische Bauhaus-Villen in Kronberg?", en: "Do you design minimalist Bauhaus-inspired villas in Kronberg?" },
        answer: { de: "Ja, moderne, kubische Architekturformen mit raumhohen Verglasungen setzen wir gekonnt im Einklang mit dem Baurecht um.", en: "Yes, we expertly implement contemporary cubic architecture with floor-to-ceiling glass in full compliance with local building regulations." }
      },
      {
        question: { de: "Wie unterstützt Shams Consult bei der Bauvergabe?", en: "How does Shams Consult assist with contractor procurement?" },
        answer: { de: "Wir erstellen detaillierte Leistungsverzeichnisse und prüfen Angebote neutral, um die besten Preise und Qualitäten zu sichern.", en: "We compile comprehensive bills of quantities and evaluate competitive bids objectively to secure the best prices and quality." }
      }
    ]
  },

  "architektur-koenigstein": {
    slug: "architektur-koenigstein",
    path: "/architektur-koenigstein",
    parentPath: "/architektur-bad-homburg",
    parentName: { de: "Hochtaunus", en: "Hochtaunus" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Königstein im Taunus",
      en: "Architecture, Urban Planning & Building Permits in Königstein im Taunus"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Königstein im Taunus",
      en: "Architecture · Urban Planning · Permitting | Königstein im Taunus"
    },
    subtitle: {
      de: "Königstein und Falkenstein bieten spektakuläre Panoramablicke auf die Frankfurter Skyline. Die anspruchsvolle Topografie verlangt ingenieurtechnisches Können und kreative Entwurfskonzepte für repräsentative Residenzen.",
      en: "Königstein and Falkenstein provide breathtaking panoramic vistas across the Frankfurt skyline. Challenging mountain topography requires engineering mastery and visionary design for iconic residences."
    },
    targetKeywords: [
      "Architekt Königstein im Taunus",
      "Stadtplanung Königstein im Taunus",
      "Bauantrag Königstein im Taunus",
      "Baugenehmigung Königstein im Taunus",
      "HOAI Leistungsphasen Königstein im Taunus",
      "Architekturbüro Königstein im Taunus"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Königstein im Taunus | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Königstein im Taunus | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Königstein im Taunus. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Königstein im Taunus. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Königstein, Falkenstein, Schneidhain, Mammolshain",
        en: "Catchment Area: We design and plan for clients in Königstein, Falkenstein, Schneidhain, Mammolshain"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Villenarchitektur & Baugenehmigungen in Königstein & Falkenstein",
      en: "Villa Architecture & Building Permits in Königstein & Falkenstein"
    },
    localFocusDescription: {
      de: "Königstein und Falkenstein bieten spektakuläre Panoramablicke auf die Frankfurter Skyline. Die anspruchsvolle Topografie verlangt ingenieurtechnisches Können und kreative Entwurfskonzepte für repräsentative Residenzen.",
      en: "Königstein and Falkenstein provide breathtaking panoramic vistas across the Frankfurt skyline. Challenging mountain topography requires engineering mastery and visionary design for iconic residences."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Topografische Geländemodellierung", en: "Topographic Terrain Modeling & Hillside Statics" },
        description: { de: "Präzise Hangsicherungen, Stützmauern und Terrassenplanungen mit Panoramablick auf die Frankfurter Skyline.", en: "Structural stability engineering, basement retaining systems, and cantilevered terraces overlooking Frankfurt." }
      },
      {
        title: { de: "Bauamt Hochtaunuskreis", en: "Hochtaunuskreis Building Department" },
        description: { de: "Baugenehmigungen und Befreiungen (§ 31 BauGB) für Luxusanwesen in Falkenstein und Königstein.", en: "Permit applications and variances (§ 31 BauGB) for luxury residences in Falkenstein and Königstein." }
      },
      {
        title: { de: "Ökologische Bauweise & Geothermie", en: "Eco-Building & Geothermal Energy" },
        description: { de: "Geothermische Bohrungen, Erdwärmenutzung und hocheffiziente Gebäudehüllen nach GEG-Standard.", en: "Integration of geothermal probes and energy-efficient building envelopes under GEG and KfW standards." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Herausforderungen stellen Hanglagen in Königstein dar?", en: "What challenges arise when building on slopes in Königstein?" },
        answer: { de: "Hanglagen verlangen anspruchsvolle statische Berechnungen, solide Hangsicherungen und durchdachte Zufahrtslösungen. Wir nutzen das Gelände optimal zur Wertsteigerung der Immobilie.", en: "Sloping terrain requires sophisticated earthwork calculations, solid slope retention, and smart multi-level access. We optimize the site to turn challenging topography into architectural value." }
      },
      {
        question: { de: "Wie wird der Panoramablick auf Frankfurt architektonisch maximiert?", en: "How are panoramic skyline views maximized in the design?" },
        answer: { de: "Durch raumhohe Verglasungen, großzügige Terrassenstaffelungen und auskragende Baukörper, die den Ausblick optimal inszenieren.", en: "Through tailored structural floor plans with wide spans, expansive glazing, and stepped terraces that capture the Frankfurt skyline perfectly." }
      },
      {
        question: { de: "Koordiniert Shams Consult alle Fachplaner für einen Villenneubau?", en: "Can Shams Consult coordinate all specialist engineers for a villa build?" },
        answer: { de: "Ja, wir leiten das gesamte Planungs- und Fachplanerteam von Geotechnik und Statik bis hin zu TGA, Lichtdesign und Außenanlagen.", en: "Yes, we lead and coordinate the entire planning team, from geotechnical and structural engineers to HVAC, lighting, and landscape designers." }
      }
    ]
  },

  "architektur-darmstadt-mathildenhoehe": {
    slug: "architektur-darmstadt-mathildenhoehe",
    path: "/architektur-darmstadt-mathildenhoehe",
    parentPath: "/architektur-darmstadt",
    parentName: { de: "Wissenschaftsstadt Darmstadt", en: "City of Science Darmstadt" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Darmstadt Mathildenhöhe & Paulusviertel",
      en: "Architecture, Urban Planning & Building Permits in Darmstadt Mathildenhöhe & Paulusviertel"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Darmstadt Mathildenhöhe & Paulusviertel",
      en: "Architecture · Urban Planning · Permitting | Darmstadt Mathildenhöhe & Paulusviertel"
    },
    subtitle: {
      de: "Die Darmstädter Mathildenhöhe ist UNESCO-Welterbe und Wiege des Jugendstils. Bauen und Sanieren in der Pufferzone sowie im angrenzenden Paulus- und Woogsviertel verlangt herausragende gestalterische Disziplin und ständige Abstimmung mit dem Denkmalamt.",
      en: "Darmstadt's Mathildenhöhe is a UNESCO World Heritage site and cradle of Art Nouveau. Designing and restoring within the buffer zone and adjoining Paulusviertel demands exceptional architectural discipline."
    },
    targetKeywords: [
      "Architekt Darmstadt Mathildenhöhe & Paulusviertel",
      "Stadtplanung Darmstadt Mathildenhöhe & Paulusviertel",
      "Bauantrag Darmstadt Mathildenhöhe & Paulusviertel",
      "Baugenehmigung Darmstadt Mathildenhöhe & Paulusviertel",
      "HOAI Leistungsphasen Darmstadt Mathildenhöhe & Paulusviertel",
      "Architekturbüro Darmstadt Mathildenhöhe & Paulusviertel"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Darmstadt Mathildenhöhe & Paulusviertel | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Darmstadt Mathildenhöhe & Paulusviertel | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Darmstadt Mathildenhöhe & Paulusviertel. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Darmstadt Mathildenhöhe & Paulusviertel. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Mathildenhöhe (UNESCO-Welterbe), Paulusviertel, Woogsviertel",
        en: "Catchment Area: We design and plan for clients in Mathildenhöhe (UNESCO World Heritage), Paulusviertel, Woogsviertel"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur in der UNESCO-Pufferzone Mathildenhöhe & Paulusviertel",
      en: "Architecture in the UNESCO Buffer Zone Mathildenhöhe & Paulusviertel"
    },
    localFocusDescription: {
      de: "Die Darmstädter Mathildenhöhe ist UNESCO-Welterbe und Wiege des Jugendstils. Bauen und Sanieren in der Pufferzone sowie im angrenzenden Paulus- und Woogsviertel verlangt herausragende gestalterische Disziplin und ständige Abstimmung mit dem Denkmalamt.",
      en: "Darmstadt's Mathildenhöhe is a UNESCO World Heritage site and cradle of Art Nouveau. Designing and restoring within the buffer zone and adjoining Paulusviertel demands exceptional architectural discipline."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "UNESCO-Pufferzonen-Satzung", en: "UNESCO World Heritage Buffer Zone Statute" },
        description: { de: "Strenge gestalterische Vorgaben für Baumassen, Fassadengliederungen und Dachformen nahe der Welterbestätte.", en: "Stringent design criteria for building mass, facade rhythm, and roof geometry near the Mathildenhöhe ensemble." }
      },
      {
        title: { de: "Denkmalschutzamt Darmstadt", en: "Darmstadt City Monument Authority" },
        description: { de: "Konsensuale Abstimmungsprozesse für denkmalgeschützte Jugendstilvillen und historische Anbauten.", en: "Consensus-driven negotiations for listed Jugendstil villas and historical additions." }
      },
      {
        title: { de: "Gestaltungshandbuch der Stadt Darmstadt", en: "Darmstadt Urban Design Manual" },
        description: { de: "Einhaltung städtischer Farb- und Materialkataloge für schützenswerte Quartiere.", en: "Compliance with material palettes, fenestration proportions, and historic enclosure walls." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Auflagen gelten in der Pufferzone der Mathildenhöhe?", en: "What restrictions apply in the Mathildenhöhe buffer zone?" },
        answer: { de: "Vorhaben dürfen den historischen Gesamteindruck und wichtige Sichtachsen nicht beeinträchtigen. Wir entwickeln Entwürfe, die die Kriterien des Gestaltungsbeirats erfüllen.", en: "Projects within the buffer zone must not compromise the integrity or view corridors of the World Heritage site. We formulate compelling architectural designs that meet the criteria of the heritage council." }
      },
      {
        question: { de: "Können historische Villen im Paulusviertel energetisch saniert werden?", en: "Can historic villas in Paulusviertel undergo deep energetic retrofits?" },
        answer: { de: "Ja, durch Innendämmungen, denkmalkonforme Kastenfenster und moderne Wärmepumpentechnik erreichen wir hohe Effizienz bei vollem Substanzerhalt.", en: "Yes, through interior insulation systems, heritage-compliant box-type windows, and modern heat pump systems, we achieve superior energy efficiency while conserving historic fabric." }
      },
      {
        question: { de: "Wie weit ist Darmstadt von Ihrem Büro entfernt?", en: "How far is Darmstadt from your practice?" },
        answer: { de: "Von unserem Frankfurter Hauptsitz bzw. unserem Standort Rödermark sind wir in 20 bis 25 Minuten direkt in Darmstadt vor Ort.", en: "From our Frankfurt headquarters and our Rödermark studio, we reach Darmstadt in just 20 to 25 minutes." }
      }
    ]
  },

  "architektur-darmstadt-bessungen": {
    slug: "architektur-darmstadt-bessungen",
    path: "/architektur-darmstadt-bessungen",
    parentPath: "/architektur-darmstadt",
    parentName: { de: "Wissenschaftsstadt Darmstadt", en: "City of Science Darmstadt" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Darmstadt-Bessungen & Eberstadt",
      en: "Architecture, Urban Planning & Building Permits in Darmstadt Bessungen & Eberstadt"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Darmstadt-Bessungen & Eberstadt",
      en: "Architecture · Urban Planning · Permitting | Darmstadt Bessungen & Eberstadt"
    },
    subtitle: {
      de: "Bessungen besticht durch historischen Charme rund um die Orangerie, während Eberstadt großzügige Villengrundstücke und Mehrfamilienhauslagen bietet. Wir planen moderne Wohnungsbauten, Altbausanierungen und städtebauliche Nachverdichtungen.",
      en: "Bessungen enchants with historic charm near the Orangerie, while Eberstadt offers generous villa lots and multi-family residences. We plan contemporary housing developments, retrofits, and urban infill."
    },
    targetKeywords: [
      "Architekt Darmstadt-Bessungen & Eberstadt",
      "Stadtplanung Darmstadt-Bessungen & Eberstadt",
      "Bauantrag Darmstadt-Bessungen & Eberstadt",
      "Baugenehmigung Darmstadt-Bessungen & Eberstadt",
      "HOAI Leistungsphasen Darmstadt-Bessungen & Eberstadt",
      "Architekturbüro Darmstadt-Bessungen & Eberstadt"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Darmstadt-Bessungen & Eberstadt | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Darmstadt Bessungen & Eberstadt | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Darmstadt-Bessungen & Eberstadt. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Darmstadt Bessungen & Eberstadt. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Bessungen, Orangerie, Eberstadt, Villengebiete, Heimstättensiedlung",
        en: "Catchment Area: We design and plan for clients in Bessungen, Orangerie, Eberstadt, Villa Enclaves, Heimstättensiedlung"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Nachverdichtung & Bauanträge in Bessungen & Eberstadt",
      en: "Architecture, Infill & Permits in Bessungen & Eberstadt"
    },
    localFocusDescription: {
      de: "Bessungen besticht durch historischen Charme rund um die Orangerie, während Eberstadt großzügige Villengrundstücke und Mehrfamilienhauslagen bietet. Wir planen moderne Wohnungsbauten, Altbausanierungen und städtebauliche Nachverdichtungen.",
      en: "Bessungen enchants with historic charm near the Orangerie, while Eberstadt offers generous villa lots and multi-family residences. We plan contemporary housing developments, retrofits, and urban infill."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Erhaltungssatzung Bessungen", en: "Bessungen Preservation Statute" },
        description: { de: "Wahrung des ortstypischen Erscheinungsbildes bei Umbauten und Dachausbauten.", en: "Preserving the characteristic quarter ambiance during remodeling, extensions, and roof conversions." }
      },
      {
        title: { de: "Bauaufsichtsamt Darmstadt", en: "Darmstadt Building Control Office" },
        description: { de: "Zügige Antragsstellung nach HBO und Begleitung aller Fachbehörden.", en: "Prompt application filing under HBO and complete inter-agency coordination." }
      },
      {
        title: { de: "§ 34 BauGB in Villenlagen Eberstadt", en: "§ 34 BauGB Infill in Eberstadt Villa Quarters" },
        description: { de: "Harmonische Einfügung moderner Baukörper in gewachsene Gartenstadtstrukturen.", en: "Harmonious integration of contemporary volumes into established garden city environments." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie unterstützt Shams Consult bei der Bauvoranfrage in Bessungen?", en: "How does Shams Consult support preliminary building inquiries in Bessungen?" },
        answer: { de: "Wir formulieren präzise baurechtliche Fragen zur Bebaubarkeit und sichern Ihr Baurecht vor Beginn der Ausführungsplanung rechtssicher ab.", en: "We formulate precise legal questions regarding buildability and secure your development rights before costly detailed design begins." }
      },
      {
        question: { de: "Planen Sie auch studentisches Wohnen oder Micro-Apartments in Darmstadt?", en: "Do you design student housing or micro-apartment buildings in Darmstadt?" },
        answer: { de: "Ja, für Investoren in der Wissenschaftsstadt Darmstadt entwerfen wir flächenoptimierte, wirtschaftliche Wohnkonzepte.", en: "Yes, for investors in the City of Science Darmstadt, we design area-optimized, highly cost-effective residential concepts." }
      },
      {
        question: { de: "Bietet Shams Consult auch Bauleitung vor Ort in Darmstadt an?", en: "Does Shams Consult offer on-site construction supervision in Darmstadt?" },
        answer: { de: "Ja, wir übernehmen die vollständige Bauüberwachung (LPH 8) mit lückenloser Dokumentation.", en: "Yes, we undertake complete on-site supervision (Phase 8) with rigorous quality tracking and documentation." }
      }
    ]
  },

  "architektur-wiesbaden-sonnenberg": {
    slug: "architektur-wiesbaden-sonnenberg",
    path: "/architektur-wiesbaden-sonnenberg",
    parentPath: "/architektur-wiesbaden",
    parentName: { de: "Landeshauptstadt Wiesbaden", en: "State Capital Wiesbaden" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Wiesbaden-Sonnenberg & Neroberg",
      en: "Architecture, Urban Planning & Building Permits in Wiesbaden Sonnenberg & Neroberg"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Wiesbaden-Sonnenberg & Neroberg",
      en: "Architecture · Urban Planning · Permitting | Wiesbaden Sonnenberg & Neroberg"
    },
    subtitle: {
      de: "Die Hanglagen an Sonnenberg und Neroberg zählen zu den vornehmsten Adressen der hessischen Landeshauptstadt. Umgeben von denkmalgeschützten Historismus-Villen entwerfen wir elegante Neubauten und sanieren Bestandsbauten mit höchster handwerklicher Präzision.",
      en: "The hillside enclaves of Sonnenberg and Neroberg represent the state capital's finest addresses. Surrounded by heritage-listed historicist villas, we design elegant residences and restore landmark properties with master craftsmanship."
    },
    targetKeywords: [
      "Architekt Wiesbaden-Sonnenberg & Neroberg",
      "Stadtplanung Wiesbaden-Sonnenberg & Neroberg",
      "Bauantrag Wiesbaden-Sonnenberg & Neroberg",
      "Baugenehmigung Wiesbaden-Sonnenberg & Neroberg",
      "HOAI Leistungsphasen Wiesbaden-Sonnenberg & Neroberg",
      "Architekturbüro Wiesbaden-Sonnenberg & Neroberg"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Wiesbaden-Sonnenberg & Neroberg | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Wiesbaden Sonnenberg & Neroberg | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Wiesbaden-Sonnenberg & Neroberg. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Wiesbaden Sonnenberg & Neroberg. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Sonnenberg, Neroberg, Dambachtal, Rambach, Nordost",
        en: "Catchment Area: We design and plan for clients in Sonnenberg, Neroberg, Dambachtal, Rambach, Nordost"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Exklusive Villenarchitektur & Denkmalschutz in Sonnenberg & Neroberg",
      en: "Exclusive Villa Architecture & Heritage Protection in Sonnenberg & Neroberg"
    },
    localFocusDescription: {
      de: "Die Hanglagen an Sonnenberg und Neroberg zählen zu den vornehmsten Adressen der hessischen Landeshauptstadt. Umgeben von denkmalgeschützten Historismus-Villen entwerfen wir elegante Neubauten und sanieren Bestandsbauten mit höchster handwerklicher Präzision.",
      en: "The hillside enclaves of Sonnenberg and Neroberg represent the state capital's finest addresses. Surrounded by heritage-listed historicist villas, we design elegant residences and restore landmark properties with master craftsmanship."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Ensembleschutz Historismus Wiesbaden", en: "Wiesbaden Historicism Ensemble Protection" },
        description: { de: "Erhaltung der historischen Stadtgrundrisse und streng geschützten Villenensembles.", en: "Preserving historical street layouts and strictly protected Wilhelminian and neoclassical villa ensembles." }
      },
      {
        title: { de: "Bauaufsichtsamt Landeshauptstadt Wiesbaden", en: "State Capital Wiesbaden Building Authority" },
        description: { de: "Bauantragsstellung nach HBO und Vorabstimmung bei komplexen Vorhaben.", en: "Permit applications under HBO and early consultations for complex hillside developments." }
      },
      {
        title: { de: "Hangbebauung & Baugrundgutachten", en: "Hillside Development & Geotechnical Surveys" },
        description: { de: "Geotechnische Absicherung bei Hanglagen am Neroberg und im Dambachtal.", en: "Geotechnical stabilization and structural engineering for hillside plots on Neroberg and in Dambachtal." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie streng sind die Denkmalschutzvorgaben in Wiesbaden-Sonnenberg?", en: "How strict are historic preservation mandates in Wiesbaden-Sonnenberg?" },
        answer: { de: "Sehr streng, da Wiesbaden als 'Nizza des Nordens' ein einzigartiges Historismus-Ensemble bewahrt. Wir führen die Verhandlungen mit der Unteren Denkmalschutzbehörde partnerschaftlich und zielorientiert.", en: "Very strict, as Wiesbaden preserves an internationally renowned historicist ensemble. We conduct negotiations with the Lower Heritage Authority constructively and with technical authority." }
      },
      {
        question: { de: "Können Sie auch moderne Architekturformen am Neroberg genehmigen lassen?", en: "Can modern architectural expressions be approved on Neroberg?" },
        answer: { de: "Ja, moderne Villen mit klarer Formensprache und edlen Naturstein- oder Putzfassaden lassen sich bei stimmigen Proportionen hervorragend einfügen.", en: "Yes, contemporary villas with clean geometric lines, premium natural stone, and mineral render harmonize superbly when proportions are carefully calibrated." }
      },
      {
        question: { de: "Begleitet Shams Consult den gesamten Bauablauf in Wiesbaden?", en: "Does Shams Consult manage the complete construction process in Wiesbaden?" },
        answer: { de: "Ja, wir steuern alle 9 HOAI-Leistungsphasen von der ersten Skizze bis zur finalen Bauabnahme.", en: "Yes, we direct all 9 HOAI work phases from initial sketch to final occupancy sign-off." }
      }
    ]
  },

  "architektur-wiesbaden-biebrich": {
    slug: "architektur-wiesbaden-biebrich",
    path: "/architektur-wiesbaden-biebrich",
    parentPath: "/architektur-wiesbaden",
    parentName: { de: "Landeshauptstadt Wiesbaden", en: "State Capital Wiesbaden" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Wiesbaden-Biebrich & Schierstein",
      en: "Architecture, Urban Planning & Building Permits in Wiesbaden Biebrich & Schierstein"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Wiesbaden-Biebrich & Schierstein",
      en: "Architecture · Urban Planning · Permitting | Wiesbaden Biebrich & Schierstein"
    },
    subtitle: {
      de: "Rund um das Biebricher Schloss und den Schiersteiner Hafen verbindet sich maritime Lebensqualität mit urbanem Wohnungsbau. Bauen am Rhein erfordert profunde Expertise im Hochwasserschutz, in der Sanierung historischer Substanz und bei Gewerbekonversionen.",
      en: "Around Biebrich Palace and Schierstein Marina, waterfront living meets urban housing developments. Building along the Rhine demands specialized expertise in flood mitigation, historic restoration, and brownfield conversion."
    },
    targetKeywords: [
      "Architekt Wiesbaden-Biebrich & Schierstein",
      "Stadtplanung Wiesbaden-Biebrich & Schierstein",
      "Bauantrag Wiesbaden-Biebrich & Schierstein",
      "Baugenehmigung Wiesbaden-Biebrich & Schierstein",
      "HOAI Leistungsphasen Wiesbaden-Biebrich & Schierstein",
      "Architekturbüro Wiesbaden-Biebrich & Schierstein"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Wiesbaden-Biebrich & Schierstein | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Wiesbaden Biebrich & Schierstein | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Wiesbaden-Biebrich & Schierstein. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Wiesbaden Biebrich & Schierstein. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Biebrich, Rheinufer, Schierstein, Schiersteiner Hafen, Gibber",
        en: "Catchment Area: We design and plan for clients in Biebrich, Rhine Riverbanks, Schierstein, Marina Schierstein, Gibber"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Hochwasserschutz & Wohnungsbau am Rheinufer",
      en: "Architecture, Flood Mitigation & Housing on the Rhine Riverfront"
    },
    localFocusDescription: {
      de: "Rund um das Biebricher Schloss und den Schiersteiner Hafen verbindet sich maritime Lebensqualität mit urbanem Wohnungsbau. Bauen am Rhein erfordert profunde Expertise im Hochwasserschutz, in der Sanierung historischer Substanz und bei Gewerbekonversionen.",
      en: "Around Biebrich Palace and Schierstein Marina, waterfront living meets urban housing developments. Building along the Rhine demands specialized expertise in flood mitigation, historic restoration, and brownfield conversion."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "HQ-100 Hochwasserschutz Rhein", en: "HQ-100 Rhine River Flood Protection" },
        description: { de: "Planung wasserdichter 'Weiße Wanne'-Konstruktionen und Hochwasserschutz-Genehmigungen.", en: "Engineering watertight 'white tank' concrete basements and securing statutory flood defense permits." }
      },
      {
        title: { de: "Denkmalbereich Schlosspark Biebrich", en: "Biebrich Palace Park Monument Zone" },
        description: { de: "Sichtachsen- und Höhenabstimmungen im direkten Umfeld des Barockschlosses.", en: "Sightline and building height alignments within the direct sphere of the Baroque palace." }
      },
      {
        title: { de: "Bauaufsichtsamt Wiesbaden", en: "Wiesbaden Building Control Department" },
        description: { de: "Rechtssichere Bauanträge für Geschosswohnungsbau und Konversionen nach HBO.", en: "Permit applications for multi-family apartment complexes and commercial conversions under HBO." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Auflagen gelten für Tiefgaragen am Rheinufer in Biebrich?", en: "What rules apply to underground garages along the Rhine riverbank in Biebrich?" },
        answer: { de: "Tiefgaragen müssen gegen drückendes Grundwasser nach DIN EN 1992-3 bemessen und gegen Auftrieb gesichert werden. Wir integrieren die Fachstatik nahtlos.", en: "Underground garages must be engineered against hydrostatic groundwater pressure according to DIN EN 1992-3 and anchored against buoyancy. We incorporate structural engineering seamlessly." }
      },
      {
        question: { de: "Planen Sie auch Projekte im Schiersteiner Hafen?", en: "Do you plan projects in Schierstein Marina?" },
        answer: { de: "Ja, wir entwickeln hochwertige Wohn- und Bürokonzepte für maritime Lagen im Rhein-Main-Gebiet.", en: "Yes, we develop high-caliber residential and office schemes for waterfront locations in the Rhine-Main region." }
      },
      {
        question: { de: "Welche HOAI-Leistungen bietet Shams Consult an?", en: "What HOAI phases does Shams Consult deliver?" },
        answer: { de: "Wir decken alle Leistungsphasen 1 bis 9 lückenlos ab.", en: "We cover all work phases 1 through 9 comprehensively." }
      }
    ]
  },

  "architektur-hanau-wilhelmsbad": {
    slug: "architektur-hanau-wilhelmsbad",
    path: "/architektur-hanau-wilhelmsbad",
    parentPath: "/architektur-hanau",
    parentName: { de: "Brüder-Grimm-Stadt Hanau", en: "City of Hanau" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Hanau-Wilhelmsbad",
      en: "Architecture, Urban Planning & Building Permits in Hanau Wilhelmsbad"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Hanau-Wilhelmsbad",
      en: "Architecture · Urban Planning · Permitting | Hanau Wilhelmsbad"
    },
    subtitle: {
      de: "Der historische Staatspark Wilhelmsbad mit seiner Kuranlage aus dem 18. Jahrhundert ist Hanaus nobelste Wohnlage. Villenbauten und Sanierungen im Parkumfeld verlangen engste Abstimmung mit der Denkmalpflege und der Hanauer Bauaufsicht.",
      en: "The historic Staatspark Wilhelmsbad, with its 18th-century spa ensemble, is Hanau's premier address. Villas and retrofits bordering the park require intimate coordination with heritage authorities and Hanau Building Department."
    },
    targetKeywords: [
      "Architekt Hanau-Wilhelmsbad",
      "Stadtplanung Hanau-Wilhelmsbad",
      "Bauantrag Hanau-Wilhelmsbad",
      "Baugenehmigung Hanau-Wilhelmsbad",
      "HOAI Leistungsphasen Hanau-Wilhelmsbad",
      "Architekturbüro Hanau-Wilhelmsbad"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Hanau-Wilhelmsbad | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Hanau Wilhelmsbad | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Hanau-Wilhelmsbad. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Hanau Wilhelmsbad. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Wilhelmsbad, Kesselstadt, Parkpromenade, Burgallee",
        en: "Catchment Area: We design and plan for clients in Wilhelmsbad, Kesselstadt, Parkpromenade, Burgallee"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur & Denkmalschutz im Staatspark Wilhelmsbad",
      en: "Architecture & Heritage Protection at Staatspark Wilhelmsbad"
    },
    localFocusDescription: {
      de: "Der historische Staatspark Wilhelmsbad mit seiner Kuranlage aus dem 18. Jahrhundert ist Hanaus nobelste Wohnlage. Villenbauten und Sanierungen im Parkumfeld verlangen engste Abstimmung mit der Denkmalpflege und der Hanauer Bauaufsicht.",
      en: "The historic Staatspark Wilhelmsbad, with its 18th-century spa ensemble, is Hanau's premier address. Villas and retrofits bordering the park require intimate coordination with heritage authorities and Hanau Building Department."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Schutzbereich Staatspark Wilhelmsbad", en: "State Park Wilhelmsbad Protected Zone" },
        description: { de: "Erhaltung historischer Sichtachsen und parkgerechte architektonische Fassadengestaltung.", en: "Preserving historic view corridors and designing architectural facades compatible with the historic park." }
      },
      {
        title: { de: "Bauaufsichtsamt Stadt Hanau", en: "City of Hanau Building Authority" },
        description: { de: "Schnelle Genehmigungsprozesse für Bauherren und Investoren in Kesselstadt und Wilhelmsbad.", en: "Swift permit processing for homeowners and developers in Kesselstadt and Wilhelmsbad." }
      },
      {
        title: { de: "Baumschutzsatzung Stadt Hanau", en: "Hanau Municipal Tree Protection Statute" },
        description: { de: "Schutz wertvoller alter Gehölze bei Neubaugründungen und Außenanlagen.", en: "Safeguarding valuable mature trees during foundation engineering and landscape planning." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie lange dauert ein Bauantrag in Hanau-Wilhelmsbad?", en: "How long does a building permit take in Hanau-Wilhelmsbad?" },
        answer: { de: "Im vereinfachten Verfahren nach § 65 HBO dauert die Bearbeitung bei der Stadt Hanau in der Regel 3 bis 4 Monate. Durch vollständige Antragsakten vermeiden wir zeitintensive Nachforderungen.", en: "In the simplified procedure under § 65 HBO, processing by the City of Hanau typically takes 3 to 4 months. By submitting complete dossiers, we avoid time-consuming requests for additional data." }
      },
      {
        question: { de: "Entwirft Shams Consult auch moderne Villen im Umfeld von Wilhelmsbad?", en: "Does Shams Consult design contemporary villas near Wilhelmsbad?" },
        answer: { de: "Ja, wir verbinden zeitgenössische Ästhetik mit den Vorgaben des Denkmalschutzes zu harmonischen Gesamtwerken.", en: "Yes, we merge contemporary aesthetic standards with historic preservation parameters into harmonious architectural works." }
      },
      {
        question: { de: "Welche Standorte hat Shams Consult in der Region?", en: "Where are Shams Consult's offices located in the region?" },
        answer: { de: "Unser Hauptsitz in Frankfurt und unser Standort Rödermark gewährleisten schnelle Erreichbarkeit in ganz Hanau und dem Main-Kinzig-Kreis.", en: "Our Frankfurt headquarters and our Rödermark studio ensure rapid reach across Hanau and the Main-Kinzig district." }
      }
    ]
  },

  "architektur-hanau-steinheim": {
    slug: "architektur-hanau-steinheim",
    path: "/architektur-hanau-steinheim",
    parentPath: "/architektur-hanau",
    parentName: { de: "Brüder-Grimm-Stadt Hanau", en: "City of Hanau" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Hanau-Steinheim & Großauheim",
      en: "Architecture, Urban Planning & Building Permits in Hanau Steinheim & Großauheim"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Hanau-Steinheim & Großauheim",
      en: "Architecture · Urban Planning · Permitting | Hanau Steinheim & Großauheim"
    },
    subtitle: {
      de: "Alt-Steinheim fasziniert mit seinem mittelalterlichen Stadtkern, Schloss Steinheim und idyllischen Mainlagen. Wir planen denkmalgerechte Kernsanierungen historischer Fachwerkhäuser sowie energieeffiziente Neubauten und Mehrfamilienhäuser in Großauheim.",
      en: "Alt-Steinheim fascinates with its medieval core, castle, and idyllic Main riverbanks. We design sensitive restorations of half-timbered townhouses alongside energy-efficient multi-family developments in Großauheim."
    },
    targetKeywords: [
      "Architekt Hanau-Steinheim & Großauheim",
      "Stadtplanung Hanau-Steinheim & Großauheim",
      "Bauantrag Hanau-Steinheim & Großauheim",
      "Baugenehmigung Hanau-Steinheim & Großauheim",
      "HOAI Leistungsphasen Hanau-Steinheim & Großauheim",
      "Architekturbüro Hanau-Steinheim & Großauheim"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Hanau-Steinheim & Großauheim | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Hanau Steinheim & Großauheim | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Hanau-Steinheim & Großauheim. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Hanau Steinheim & Großauheim. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Alt-Steinheim, Schloss Steinheim, Großauheim, Klein-Auheim",
        en: "Catchment Area: We design and plan for clients in Old Town Steinheim, Steinheim Castle, Großauheim, Klein-Auheim"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Altstadtsanierung & Neubau in Steinheim",
      en: "Architecture, Historic Old Town Retrofits & Housing in Steinheim"
    },
    localFocusDescription: {
      de: "Alt-Steinheim fasziniert mit seinem mittelalterlichen Stadtkern, Schloss Steinheim und idyllischen Mainlagen. Wir planen denkmalgerechte Kernsanierungen historischer Fachwerkhäuser sowie energieeffiziente Neubauten und Mehrfamilienhäuser in Großauheim.",
      en: "Alt-Steinheim fascinates with its medieval core, castle, and idyllic Main riverbanks. We design sensitive restorations of half-timbered townhouses alongside energy-efficient multi-family developments in Großauheim."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Altstadtsatzung Hanau-Steinheim", en: "Hanau-Steinheim Old Town Statute" },
        description: { de: "Schutz historischer Dachformen, Fachwerkfreilegungen und ortsbildprägender Details.", en: "Protection of historic roof geometries, timber frame preservation, and quarter-defining details." }
      },
      {
        title: { de: "Hochwasserschutz Mainufer", en: "Main Riverbank Flood Protection" },
        description: { de: "Wasserrechtliche Nachweise und baulicher Flutschutz bei mainnahen Grundstücken.", en: "Water management certifications and flood-resilient construction for riverside properties." }
      },
      {
        title: { de: "Bauaufsichtsamt Hanau", en: "Hanau Building Authority" },
        description: { de: "Fachgerechte Bauantragseinreichung nach HBO 2024.", en: "Professional building permit applications under HBO 2024." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Förderungen gibt es für Fachwerksanierungen in Steinheim?", en: "What grants exist for timber-frame renovations in Steinheim?" },
        answer: { de: "Neben KfW-Effizienzhaus-Mitteln können Sanierungsförderungen der Städtebauförderung und steuerliche Denkmalabschreibungen genutzt werden.", en: "Beyond KfW Efficiency House funds, urban regeneration subsidies and tax depreciation for historic monuments (§ 7i EStG) can be utilized." }
      },
      {
        question: { de: "Planen Sie auch moderne Wohnanlagen in Großauheim?", en: "Do you also design contemporary housing developments in Großauheim?" },
        answer: { de: "Ja, in Großauheim und Klein-Auheim planen wir moderne Ein- und Mehrfamilienhäuser sowie Konversionen ehemaliger Gewerbeflächen.", en: "Yes, in Großauheim and Klein-Auheim, we design modern single- and multi-family residences as well as brownfield conversions." }
      },
      {
        question: { de: "Übernehmen Sie auch die Bauüberwachung bis zur Endabnahme?", en: "Do you provide construction supervision through to final sign-off?" },
        answer: { de: "Ja, LPH 8 und 9 (Bauüberwachung und Gewährleistungsmanagement) sind elementare Bestandteile unseres ganzheitlichen Planungsangebots.", en: "Yes, Phases 8 and 9 (construction management and warranty supervision) are essential elements of our holistic architectural service." }
      }
    ]
  },

  "architektur-offenbach": {
    slug: "architektur-offenbach",
    path: "/architektur-offenbach",
    parentPath: "/architektur-frankfurt",
    parentName: { de: "Metropolregion Frankfurt / Rhein-Main", en: "Frankfurt / Rhine-Main Metro Area" },
    h1: {
      de: "Architektur, Stadtplanung & Bauanträge in Offenbach am Main",
      en: "Architecture, Urban Planning & Building Permits in Offenbach am Main"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Offenbach am Main",
      en: "Architecture · Urban Planning · Permitting | Offenbach am Main"
    },
    subtitle: {
      de: "Offenbach am Main durchlebt einen beispiellosen städtebaulichen Wandel. Zwischen dem preisgekrönten Hafen Offenbach, dem Kaiserlei-Quartier und den Gründerzeitvillen im Offenbacher Westend entstehen hochmoderne Wohn- und Gewerbebauten. Shams Consult begleitet anspruchsvolle Projekte in allen Stadtteilen.",
      en: "Offenbach am Main is undergoing dynamic urban transformation. Between the award-winning Harbour quarter, Kaiserlei district, and historic villas in Offenbach-Westend, state-of-the-art residences take shape."
    },
    targetKeywords: [
      "Architekt Offenbach am Main",
      "Stadtplanung Offenbach am Main",
      "Bauantrag Offenbach am Main",
      "Baugenehmigung Offenbach am Main",
      "HOAI Leistungsphasen Offenbach am Main",
      "Architekturbüro Offenbach am Main"
    ],
    metaTitle: {
      de: "Architektur, Stadtplanung & Bauantrag in Offenbach am Main | Shams Consult",
      en: "Architecture, Urban Planning & Permits in Offenbach am Main | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Offenbach am Main. Vollarchitektur HOAI 1–9, Stadtplanung, B-Pläne und rechtssichere Bauanträge nach HBO.",
      en: "State-recognized studio (AKH No. 21886) for Offenbach am Main. Full architecture HOAI 1–9, urban master planning, and fast-track HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Wir planen für Bauherren in Hafen Offenbach, Westend, Bieber, Bürgel, Kaiserlei, Waldheim",
        en: "Catchment Area: We design and plan for clients in Offenbach Harbour, Westend, Bieber, Bürgel, Kaiserlei, Waldheim"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing authorization (AKH Hesse No. 21886)"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Full-service architectural delivery across HOAI phases 1–9"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone management"
      }
    ],
    localFocusTitle: {
      de: "Architektur, Hafenquartier & Bauanträge in Offenbach am Main",
      en: "Architecture, Harbour Quarter & Permits in Offenbach am Main"
    },
    localFocusDescription: {
      de: "Offenbach am Main durchlebt einen beispiellosen städtebaulichen Wandel. Zwischen dem preisgekrönten Hafen Offenbach, dem Kaiserlei-Quartier und den Gründerzeitvillen im Offenbacher Westend entstehen hochmoderne Wohn- und Gewerbebauten. Shams Consult begleitet anspruchsvolle Projekte in allen Stadtteilen.",
      en: "Offenbach am Main is undergoing dynamic urban transformation. Between the award-winning Harbour quarter, Kaiserlei district, and historic villas in Offenbach-Westend, state-of-the-art residences take shape."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsichtsamt Stadt Offenbach", en: "City of Offenbach Building Department" },
        description: { de: "Rechtssichere Genehmigungsanträge nach HBO für Geschosswohnungsbau und Sonderbauten.", en: "Legally robust HBO permit applications for multi-story residential buildings and special structures." }
      },
      {
        title: { de: "B-Pläne Hafen Offenbach & Kaiserlei", en: "Hafen Offenbach & Kaiserlei Master Plans" },
        description: { de: "Ausschöpfung städtebaulicher Kennzahlen (GFZ/GRZ) und Höhenvorgaben am Mainufer.", en: "Optimizing urban planning parameters (GFZ/GRZ) and building height allowances along the Main waterfront." }
      },
      {
        title: { de: "Erhaltungs- und Milieuschutzsatzungen", en: "Preservation and Milieuschutz Statutes" },
        description: { de: "Prüffähige Begründungen für Modernisierungen im Offenbacher Westend und Senefelderquartier.", en: "Substantiated applications for modernizations in the Offenbach Westend and Senefelder quarters." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie lange dauert ein Baugenehmigungsverfahren bei der Stadt Offenbach?", en: "How long does a building permit application take with the City of Offenbach?" },
        answer: { de: "Bei vollständigen und prüffähigen Bauantragsunterlagen nach HBO liegt die Bearbeitungsdauer im vereinfachten Verfahren meist bei 3 bis 4 Monaten.", en: "With complete and audit-ready building documents under HBO, processing in the simplified procedure generally takes 3 to 4 months." }
      },
      {
        question: { de: "Planen Sie auch Bürokonversionen oder Mischnutzungen in Offenbach?", en: "Do you plan office-to-residential conversions or mixed-use projects in Offenbach?" },
        answer: { de: "Ja, Konversionen von Gewerbeflächen zu hochwertigem Wohnraum gehören zu unseren zentralen städtebaulichen Schwerpunkten.", en: "Yes, converting commercial spaces into superior residential accommodation is one of our central urban planning specializations." }
      },
      {
        question: { de: "Wie nah ist Shams Consult an Offenbach?", en: "How close is Shams Consult to Offenbach?" },
        answer: { de: "Unser Büro am Frankfurter Carl-von-Noorden-Platz liegt nur wenige Minuten von Offenbach entfernt — wir sind extrem schnell vor Ort.", en: "Our office at Frankfurt's Carl-von-Noorden-Platz is just minutes from Offenbach — we are on-site swiftly." }
      }
    ]
  }
,

  "architektur-wiesbaden-kurviertel": {
    slug: "architektur-wiesbaden-kurviertel",
    path: "/architektur-wiesbaden-kurviertel",
    parentPath: "/architektur-wiesbaden",
    parentName: { de: "Wiesbaden", en: "Wiesbaden" },
    h1: {
      de: "Architektur, Stadtplanung & Denkmalbau im Kurviertel Wiesbaden",
      en: "Architecture, Urban Planning & Heritage Restoration in Wiesbaden Kurviertel"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Wiesbaden-Kurviertel",
      en: "Architecture · Urban Planning · Permitting | Wiesbaden Kurviertel"
    },
    subtitle: {
      de: "Das historische Wiesbadener Kurviertel, Kureck, die Wilhelmstraße und das Dambachtal sind Meisterwerke des Klassizismus und Historismus. Wir realisieren hochwertige Altbausanierungen, exklusive Dachausbauten und rechtssichere Bauanträge im engen Einklang mit dem Hessischen Denkmalschutzgesetz.",
      en: "Wiesbaden's historic spa district, Kureck, Wilhelmstraße, and Dambachtal represent grand classicism and historicist architecture. We deliver prime heritage retrofits, luxury attic conversions, and bulletproof permit filings aligned with Hessian conservation law."
    },
    targetKeywords: [
      "Architekt Wiesbaden Kurviertel",
      "Denkmalschutz Wiesbaden",
      "Bauantrag Wiesbaden Wilhelmstraße",
      "Altbausanierung Wiesbaden",
      "Architekturbüro Kureck Wiesbaden",
      "HOAI Leistungsphasen Wiesbaden"
    ],
    metaTitle: {
      de: "Architektur & Denkmalschutz im Kurviertel Wiesbaden | Shams Consult",
      en: "Architecture & Heritage Conservation in Wiesbaden Kurviertel | Shams Consult"
    },
    metaDescription: {
      de: "AKH-eingetragenes Architekturbüro für das Wiesbadener Kurviertel & Wilhelmstraße. Denkmalgerechte Sanierung, Dachgeschossausbau, HOAI 1–9 und HBO-Bauanträge.",
      en: "Licensed architect studio for Wiesbaden Kurviertel & Wilhelmstraße. Heritage restoration, attic additions, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Kurhaus, Wilhelmstraße, Taunusstraße, Parkstraße, Nerotal & Kureck",
        en: "Catchment Area: Kurhaus, Wilhelmstraße, Taunusstraße, Parkstraße, Nerotal & Kureck"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung (AKH Hessen Nr. 21886)",
        en: "Full building permit filing privileges (AKH Hesse No. 21886)"
      },
      {
        de: "Expertise in Denkmalschutz & Ensemblesatzungen nach HDSchG",
        en: "Heritage conservation & ensemble preservation under HDSchG"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Bauen im Kurviertel Wiesbaden: Bäderarchitektur, Denkmalschutz & Ensembles",
      en: "Building in Wiesbaden Kurviertel: Spa Architecture, Heritage & Ensembles"
    },
    localFocusDescription: {
      de: "Das Wiesbadener Kurviertel ist geprägt von prachtvollen Gründerzeit- und Jugendstilfassaden. Umbauten, energetische Ertüchtigungen und Dachgauben verlangen Fingerspitzengefühl mit der Unteren Denkmalschutzbehörde Wiesbaden und präzise Abstimmung von GEG-Ausnahmetatbeständen.",
      en: "The Wiesbaden spa quarter is characterized by magnificent Wilhelminian and Art Nouveau facades. Structural renovations, energetic retrofits, and dormers demand fine diplomacy with the heritage office and precise GEG statutory exemptions."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Ensembleschutz nach § 2 HDSchG", en: "Ensemble Protection under § 2 HDSchG" },
        description: { de: "Wiederherstellung historischer Stuckfassaden, Fensterteilungen und Mansarddachaufbauten im Einklang mit dem Denkmalamt.", en: "Restoration of historic stucco facades, window proportions, and mansard roof structures in compliance with heritage law." }
      },
      {
        title: { de: "Örtliche Bauvorschriften & Milieuschutz", en: "Wiesbaden Local Building Statutes & Milieuschutz" },
        description: { de: "Abstimmung von Balkonanbauten, Terrassen und Aufzugsnachrüstungen in den historischen Innenhöfen.", en: "Coordination of balconies, terraces, and elevator retrofits in the historic courtyard zones." }
      },
      {
        title: { de: "HBO Brandschutz im denkmalgeschützten Altbau", en: "HBO Fire Protection in Listed Altbau Buildings" },
        description: { de: "Zweite Rettungswege und Brandschutzertüchtigungen bei exklusiven Dachgeschossausbauten.", en: "Engineered second escape routes and fire-rated compartmentation for luxury roof conversions." }
      }
    ],
    faqs: [
      {
        question: { de: "Können Aufzugsanlagen im historischen Kurviertel nachgerüstet werden?", en: "Can passenger elevators be retrofitted in historic Kurviertel apartment buildings?" },
        answer: { de: "Ja, entweder im innenliegenden Treppenauge oder unauffällig an der Hoffassade. Wir stimmen die statischen und denkmalrechtlichen Voraussetzungen direkt mit der Bauaufsicht ab.", en: "Yes, either in the interior stairwell eye or discreetly in the rear courtyard. We prepare permit drawings and heritage clearances with the building authority." }
      },
      {
        question: { de: "Welche Vorgaben gelten für Dachausbauten an der Wilhelmstraße?", en: "What requirements apply to roof conversions on Wilhelmstraße or in Dambachtal?" },
        answer: { de: "Gaubenformen, Dacheinschnitte und Ziegelmaterialien müssen denkmalfachlich abgestimmt werden. Wir entwickeln maßgeschneiderte Konzepte zur optimalen Wohnflächengewinnung.", en: "Dormer designs, terrace cutouts, and roof materials must be submitted to the heritage department. We develop tailored solutions that maximize living space while preserving the historical silhouette." }
      },
      {
        question: { de: "Betreut Shams Consult auch historische Fassadensanierungen?", en: "Does Shams Consult manage historical facade restorations?" },
        answer: { de: "Ja, wir erstellen detaillierte Werkpläne für Stuck-, Naturstein- und Putzrestaurierungen und überwachen die Ausführung vor Ort.", en: "Yes, we draft detailed work plans for masonry, natural stone, and stucco restoration, handling tenders and on-site craftsman supervision." }
      }
    ]
  },

  "architektur-wiesbaden-dotzheim": {
    slug: "architektur-wiesbaden-dotzheim",
    path: "/architektur-wiesbaden-dotzheim",
    parentPath: "/architektur-wiesbaden",
    parentName: { de: "Wiesbaden", en: "Wiesbaden" },
    h1: {
      de: "Architektur, Neubau & Bauanträge in Wiesbaden-Dotzheim & Kohlheck",
      en: "Architecture, New Builds & Building Permits in Wiesbaden Dotzheim & Kohlheck"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Wiesbaden-Dotzheim",
      en: "Architecture · Urban Planning · Permitting | Wiesbaden Dotzheim"
    },
    subtitle: {
      de: "Dotzheim, der Kohlheck und Klarenthal bieten erstklassige Wohnlagen am Taunushang. Wir entwerfen moderne Architektenvillen, effiziente Mehrfamilienhäuser und begleiten Nachverdichtungen sowie KfW-40-Sanierungen mit voller Genehmigungssicherheit.",
      en: "Dotzheim, Kohlheck, and Klarenthal offer prime hillside residential enclaves on the edge of the Taunus. We design contemporary architect villas, efficient multi-family residences, and steer infill developments with full HBO permit compliance."
    },
    targetKeywords: [
      "Architekt Wiesbaden Dotzheim",
      "Bauantrag Kohlheck Wiesbaden",
      "Hausbau Wiesbaden Dotzheim",
      "Baugenehmigung Klarenthal",
      "Architekturbüro Dotzheim",
      "KfW 40 Wiesbaden"
    ],
    metaTitle: {
      de: "Architektur & Bauanträge in Wiesbaden-Dotzheim & Kohlheck | Shams Consult",
      en: "Architecture & Building Permits in Wiesbaden Dotzheim & Kohlheck | Shams Consult"
    },
    metaDescription: {
      de: "Architekturbüro (AKH Nr. 21886) für Wiesbaden-Dotzheim, Kohlheck & Klarenthal. Neubau Stadtvillen, Nachverdichtung, HOAI 1–9 und HBO-Bauanträge.",
      en: "Registered architect studio for Wiesbaden Dotzheim, Kohlheck & Klarenthal. Contemporary villas, urban infill, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Kohlheck, Dotzheim-Mitte, Freudenberg, Klarenthal, Sauerland",
        en: "Catchment Area: Kohlheck, Central Dotzheim, Freudenberg, Klarenthal, Sauerland"
      },
      {
        de: "Hangbebauung & Baugrundoptimierung am Taunushang",
        en: "Hillside engineering & geotechnical foundation optimization"
      },
      {
        de: "Vollumfängliche HOAI Leistungsphasen 1–9 aus einer Hand",
        en: "Comprehensive architectural services from concept to handover (HOAI 1–9)"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Wohnungsbau in Dotzheim & Kohlheck: Hanglagen, Nachverdichtung & Energieeffizienz",
      en: "Residential Planning in Dotzheim & Kohlheck: Slopes, Infill & Energy Efficiency"
    },
    localFocusDescription: {
      de: "Großzügige Gartengrundstücke in Kohlheck und am Freudenberg bergen erhebliches Nachverdichtungspotenzial nach § 34 BauGB. Wir berechnen präzise Grundflächenzahlen, entwickeln ansprechende Terrassen- und Hangarchitektur und sichern schnelle Baugenehmigungen bei der Bauaufsicht Wiesbaden.",
      en: "Expansive residential plots in Kohlheck and Freudenberg offer significant infill potential under § 34 BauGB. We calculate precise coverage metrics, design elegant hillside terrace architecture, and secure rapid approvals from the Wiesbaden building department."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "§ 34 BauGB Nachverdichtung im Kohlheck & Dotzheim", en: "§ 34 BauGB Infill in Kohlheck & Dotzheim" },
        description: { de: "Optimale Ausnutzung von Grundstücksreserven in gartenstädtisch geprägten Hanglagen.", en: "Optimal spatial utilization in garden suburb locations with steep terrain." }
      },
      {
        title: { de: "Topografische Hangsicherung & Stützwände", en: "Topographic Slope Stability & Retaining Walls" },
        description: { de: "Statische Bemessung von Hangbebauungen, Terrassierungen und sicheren Zufahrtsrampen.", en: "Structural design of stepped multi-family buildings and secure hillside access." }
      },
      {
        title: { de: "Baumschutz- & Entwässerungssatzung Wiesbaden", en: "Wiesbaden Tree Protection & Drainage Statutes" },
        description: { de: "Hydraulischer Nachweis von Retentionszisternen und Schutz gewachsenen Baumbestands.", en: "Engineered stormwater retention and preservation of established park trees." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Bauvorhaben sind in Dotzheim und Kohlheck typisch?", en: "What building types are most popular in Dotzheim and Kohlheck?" },
        answer: { de: "Vor allem moderne Hangvillen, barrierefreie Mehrfamilienhäuser mit Tiefgaragen sowie energieeffiziente Nachverdichtungen auf großzügigen Bestandsgrundstücken.", en: "Modern hillside residences, barrier-free multi-family apartment buildings with underground parking, and high-efficiency timber or masonry construction." }
      },
      {
        question: { de: "Wie wird die Hangentwässerung in Dotzheim baurechtlich gelöst?", en: "How is hillside drainage resolved in Dotzheim?" },
        answer: { de: "Über kaskadierte Versickerungsanlagen und Retentionszisternen nach DWA-A 138 in Abstimmung mit den Entsorgungsbetrieben der Landeshauptstadt Wiesbaden (ELW).", en: "Via cascading infiltration basins and retention cisterns in accordance with Wiesbaden municipal drainage regulations." }
      },
      {
        question: { de: "Übernimmt Shams Consult auch die Bauüberwachung vor Ort?", en: "Can Shams Consult manage the complete construction process on-site?" },
        answer: { de: "Ja, wir sind als Bauleiter (LPH 8) regelmäßig vor Ort auf der Baustelle, um Ausführungsqualität, Baukosten und Termine lückenlos zu sichern.", en: "Yes, our experienced site managers (Phase 8) inspect execution daily or weekly to ensure flawless craftsmanship and strict budget compliance." }
      }
    ]
  },

  "architektur-bad-homburg-gonzenheim": {
    slug: "architektur-bad-homburg-gonzenheim",
    path: "/architektur-bad-homburg-gonzenheim",
    parentPath: "/architektur-bad-homburg",
    parentName: { de: "Bad Homburg v. d. Höhe", en: "Bad Homburg" },
    h1: {
      de: "Architektur, Villenbau & Bauanträge in Bad Homburg-Gonzenheim & Kirdorf",
      en: "Architecture, Villa Construction & Building Permits in Bad Homburg Gonzenheim & Kirdorf"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Bad Homburg-Gonzenheim",
      en: "Architecture · Urban Planning · Permitting | Bad Homburg Gonzenheim"
    },
    subtitle: {
      de: "Gonzenheim, Kirdorf und Dornholzhausen vereinen gehobene Taunus-Wohnkultur mit exzellenter Frankfurter Anbindung. Wir planen anspruchsvolle Einfamilienvillen, Doppelhäuser und nachhaltige Geschosswohnungsbauten mit lückenloser Kostensicherheit nach DIN 276.",
      en: "Gonzenheim, Kirdorf, and Dornholzhausen blend upscale Taunus residential living with rapid Frankfurt connections. We design prestigious private villas, semi-detached residences, and sustainable apartments with rigorous DIN 276 budget certainty."
    },
    targetKeywords: [
      "Architekt Bad Homburg Gonzenheim",
      "Villenbau Kirdorf",
      "Bauantrag Dornholzhausen",
      "Baugenehmigung Bad Homburg",
      "Architekturbüro Gonzenheim",
      "HOAI Bad Homburg"
    ],
    metaTitle: {
      de: "Architektur & Villenbau in Bad Homburg-Gonzenheim | Shams Consult",
      en: "Architecture & Villa Design in Bad Homburg Gonzenheim | Shams Consult"
    },
    metaDescription: {
      de: "Planungsbüro (AKH Hessen) für Bad Homburg-Gonzenheim, Kirdorf & Dornholzhausen. Exklusive Villen, Nachverdichtung, HOAI 1–9 und HBO-Bauanträge.",
      en: "Licensed studio (AKH Hesse) for Bad Homburg Gonzenheim, Kirdorf & Dornholzhausen. Luxury villas, infill, HOAI 1–9, and HBO building permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Gonzenheim, Kirdorf, Dornholzhausen, Ober-Erlenbach, Ober-Eschbach",
        en: "Catchment Area: Gonzenheim, Kirdorf, Dornholzhausen, Ober-Erlenbach, Ober-Eschbach"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung vor der Bauaufsicht Hochtaunuskreis",
        en: "Full building permit filing authorization with Hochtaunus Building Authority"
      },
      {
        de: "Spezialisiert auf hochwertige Villen & barrierefreie Mehrfamilienhäuser",
        en: "Specialized in high-end villas & barrier-free multi-family residences"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Gehobener Wohnungsbau in Bad Homburg: Villen, Erhaltungssatzungen & Nachverdichtung",
      en: "Upscale Residential Living in Bad Homburg: Villas, Preservation & Infill"
    },
    localFocusDescription: {
      de: "Zwischen dem historischen Kirdorfer Dorfkern und den großzügigen Villengrundstücken in Gonzenheim und Dornholzhausen navigieren wir örtliche Gestaltungssatzungen, Baumschutzauflagen und B-Plan-Vorgaben mit höchster Präzision.",
      en: "Between historic Kirdorf village core and expansive villa estates in Gonzenheim and Dornholzhausen, we navigate municipal design bylaws, tree conservation statutes, and B-Plan parameters with proven precision."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Ortskernsatzung Kirdorf & Gonzenheim", en: "Old Village Core Preservation Statute (Kirdorf & Gonzenheim)" },
        description: { de: "Behutsame Einpassung in historische Gassen und Abstimmung von Fassaden- und Dachformen.", en: "Sensitive integration into historic village lanes and harmonious facade and roof alignment." }
      },
      {
        title: { de: "Bebauungspläne Bad Homburg Süd & Gonzenheim", en: "Bad Homburg South & Gonzenheim Master Plans" },
        description: { de: "Verbindliche Umsetzung von Vorgaben zu Firsthöhen, Vollgeschossen und Baulinien.", en: "Binding implementation of codes regarding ridge heights, full storeys, and building setbacks." }
      },
      {
        title: { de: "Baumschutzsatzung der Stadt Bad Homburg", en: "Bad Homburg Tree Protection Statute" },
        description: { de: "Schonung prägender Solitärbäume und Erstellung qualifizierter Freiflächengestaltungspläne.", en: "Preserving landmark specimen trees and preparing qualified open space landscape plans." }
      }
    ],
    faqs: [
      {
        question: { de: "Wer entscheidet über Bauanträge in Gonzenheim und Kirdorf?", en: "Who decides on building permits in Gonzenheim and Kirdorf?" },
        answer: { de: "Zuständig ist die Bauaufsicht der Stadt Bad Homburg v. d. Höhe bzw. des Hochtaunuskreises. Durch unsere langjährige regionale Präsenz pflegen wir lösungsorientierte Kontakte zu den Baubehörden.", en: "The Building Authority of the City of Bad Homburg v. d. Höhe and the Hochtaunus District is responsible. Through our regional standing, we maintain productive working relationships with the authorities." }
      },
      {
        question: { de: "Welche Bauten sind in Gonzenheim besonders gefragt?", en: "What project typologies are in high demand in Gonzenheim?" },
        answer: { de: "Gefragt sind moderne Bauhaus-Stadtvillen, energieeffiziente KfW-40-Einfamilienhäuser sowie anspruchsvolle Mehrfamilienhäuser mit Tiefgaragen für Investoren.", en: "Contemporary Bauhaus urban villas, energy-efficient KfW 40 single-family houses, and upscale multi-family apartment complexes with underground parking for investors." }
      },
      {
        question: { de: "Übernehmen Sie auch die Bauleitung (LPH 8) vor Ort?", en: "Do you also provide on-site clerk of works (Phase 8)?" },
        answer: { de: "Ja, wir stellen durch tägliche oder engmaschige Baustellenpräsenz höchste Ausführungsqualität nach VOB sicher und wahren Termine und Budgets.", en: "Yes, through rigorous site presence, we ensure premier construction quality under VOB, safeguarding timelines and budgets." }
      }
    ]
  },

  "architektur-darmstadt-arheilgen": {
    slug: "architektur-darmstadt-arheilgen",
    path: "/architektur-darmstadt-arheilgen",
    parentPath: "/architektur-darmstadt",
    parentName: { de: "Darmstadt", en: "Darmstadt" },
    h1: {
      de: "Architektur, Wohnungsbau & Bauanträge in Darmstadt-Arheilgen & Martinsviertel",
      en: "Architecture, Residential Planning & Building Permits in Darmstadt Arheilgen & Martinsviertel"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Darmstadt-Arheilgen",
      en: "Architecture · Urban Planning · Permitting | Darmstadt Arheilgen"
    },
    subtitle: {
      de: "Darmstadt-Arheilgen, das Martinsviertel und Kranichstein vereinen lebendige Gründerzeitstrukturen mit florierenden Neubaugebieten. Wir realisieren urbane Baulückenschließungen, energieeffiziente KfW-40-Wohngebäude und rechtssichere Bauanträge bei der Bauaufsicht Darmstadt.",
      en: "Darmstadt-Arheilgen, Martinsviertel, and Kranichstein combine vibrant Wilhelminian quarters with expanding residential developments. We deliver urban infill gap closures, energy-efficient KfW 40 residential projects, and compliant permit dossiers for the Darmstadt building department."
    },
    targetKeywords: [
      "Architekt Darmstadt Arheilgen",
      "Bauantrag Martinsviertel Darmstadt",
      "Baugenehmigung Kranichstein",
      "Hausbau Arheilgen",
      "Architekturbüro Darmstadt Nord",
      "HOAI Darmstadt"
    ],
    metaTitle: {
      de: "Architektur & Bauanträge in Darmstadt-Arheilgen & Martinsviertel | Shams Consult",
      en: "Architecture & Permits in Darmstadt Arheilgen & Martinsviertel | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Architekturbüro (AKH Nr. 21886) für Darmstadt-Arheilgen, Martinsviertel & Kranichstein. Neubau, Nachverdichtung, HOAI 1–9 und HBO-Bauanträge.",
      en: "State-recognized architect practice (AKH No. 21886) for Darmstadt Arheilgen, Martinsviertel & Kranichstein. Infill, multi-family, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Arheilgen, Martinsviertel, Johannesviertel, Kranichstein, Bürgerpark",
        en: "Catchment Area: Arheilgen, Martinsviertel, Johannesviertel, Kranichstein, Bürgerpark"
      },
      {
        de: "Uneingeschränkte Bauvorlageberechtigung vor der Bauaufsicht Darmstadt",
        en: "Full building permit filing privileges with Darmstadt Building Authority"
      },
      {
        de: "Urbane Baulückenschließungen & Brandschutzkonzepte nach HBO",
        en: "Urban infill gap closures & certified fire protection concepts per HBO"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Wohnbau in Darmstadt-Nord: Martinsviertel, Arheilgen & Nachverdichtung",
      en: "Residential Architecture in North Darmstadt: Martinsviertel, Arheilgen & Infill"
    },
    localFocusDescription: {
      de: "Das dichte Martinsviertel verlangt akkurate Brandschutz- und Abstandsflächennachweise im Blockrand, während in Arheilgen und Kranichstein großzügige Familienhäuser und modulare Geschosswohnungsbauten gefragt sind.",
      en: "The dense Martinsviertel requires stringent fire safety and setback calculations in dense perimeter blocks, whereas Arheilgen and Kranichstein emphasize modern family residences and modular multi-family buildings."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "§ 34 BauGB Einfügungsgebot im Martinsviertel", en: "§ 34 BauGB Infill in Martinsviertel" },
        description: { de: "Harmonische Einfügung in historische Fluchtlinien, Geschoßhöhen und Hofbebauungsstrukturen.", en: "Harmonious alignment with historic building lines, storey heights, and courtyard development fabrics." }
      },
      {
        title: { de: "Bebauungspläne Arheilgen & Kranichstein", en: "Arheilgen & Kranichstein Development Plans" },
        description: { de: "Präzise Berücksichtigung von GFZ/GRZ und Grünordnungsplänen.", en: "Precise integration of floor space ratios (GFZ/GRZ) and landscape greening mandates." }
      },
      {
        title: { de: "Baumschutz- und Stellplatzsatzung Darmstadt", en: "Darmstadt Tree Protection & Parking Space Statutes" },
        description: { de: "Erstellung prüffähiger Nachweise zu KFZ- und Fahrradabstellplätzen nach städtischem Schlüssel.", en: "Compliant calculation of vehicle and bicycle parking bays according to municipal keys." }
      }
    ],
    faqs: [
      {
        question: { de: "Wie werden Baulücken im Martinsviertel genehmigt?", en: "How are infill plots approved in Martinsviertel?" },
        answer: { de: "Über das Einfügungsgebot nach § 34 BauGB. Wir berechnen die maßgebliche Umgebungsbebauung exakt und sichern die Planung über eine qualifizierte Bauvoranfrage ab.", en: "Through the infill rule under § 34 BauGB. We calculate the prevailing neighborhood context precisely and secure approvals through a preliminary inquiry." }
      },
      {
        question: { de: "Bauen Sie auch energieeffiziente KfW-40-Häuser in Arheilgen?", en: "Do you design energy-efficient KfW 40 houses in Arheilgen?" },
        answer: { de: "Ja, wir planen standardmäßig nach KfW-Effizienzhaus-40-Standards mit Geothermie, Luft-Wasser-Wärmepumpen und Photovoltaik.", en: "Yes, we design as standard to KfW Efficiency House 40 specifications with geothermal systems, air-to-water heat pumps, and solar photovoltaics." }
      },
      {
        question: { de: "Wie lange dauert ein Bauantrag bei der Wissenschaftsstadt Darmstadt?", en: "How long does a building permit take in the City of Science Darmstadt?" },
        answer: { de: "In der Regel zwischen 3 und 4 Monaten. Durch vollständige statische und brandschutztechnische Vorprüfung vermeiden wir zeitintensive Nachforderungen.", en: "Typically between 3 and 4 months. By conducting thorough structural and fire protection pre-checks, we eliminate lengthy administrative queries." }
      }
    ]
  },

  "architektur-darmstadt-griesheim-weiterstadt": {
    slug: "architektur-darmstadt-griesheim-weiterstadt",
    path: "/architektur-darmstadt-griesheim-weiterstadt",
    parentPath: "/architektur-darmstadt",
    parentName: { de: "Darmstadt & Kreis Darmstadt-Dieburg", en: "Darmstadt & District" },
    h1: {
      de: "Architektur, Gewerbebau & Wohnen in Griesheim, Weiterstadt & Pfungstadt",
      en: "Architecture, Commercial & Residential Planning in Griesheim, Weiterstadt & Pfungstadt"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Griesheim-Weiterstadt",
      en: "Architecture · Urban Planning · Permitting | Griesheim Weiterstadt"
    },
    subtitle: {
      de: "Entlang der dynamischen Achsen A5/A67 und der Bergstraße entwickeln wir moderne Wohnungsbauten, repräsentative Gewerbehallen und gemischt genutzte Liegenschaften. Wir sichern schnelle Genehmigungsverfahren bei der Bauaufsicht Landkreis Darmstadt-Dieburg.",
      en: "Along the dynamic A5/A67 transport corridors and Bergstraße, we design contemporary residential schemes, commercial corporate facilities, and mixed-use properties, ensuring rapid building permits from the Darmstadt-Dieburg district authority."
    },
    targetKeywords: [
      "Architekt Griesheim",
      "Architekt Weiterstadt",
      "Gewerbebau Pfungstadt",
      "Bauantrag Landkreis Darmstadt-Dieburg",
      "Baugenehmigung Weiterstadt",
      "HOAI Griesheim"
    ],
    metaTitle: {
      de: "Architektur & Gewerbebau in Griesheim, Weiterstadt & Pfungstadt | Shams Consult",
      en: "Architecture & Commercial Planning in Griesheim & Weiterstadt | Shams Consult"
    },
    metaDescription: {
      de: "Architekturbüro (AKH Hessen Nr. 21886) für Griesheim, Weiterstadt, Pfungstadt & Bergstraße. Wohnbau, Gewerbe- und Logistikbauten, HOAI 1–9 und HBO-Bauanträge.",
      en: "Licensed architect practice (AKH Hesse No. 21886) for Griesheim, Weiterstadt, Pfungstadt & Bergstraße. Residential and commercial architecture, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Griesheim, Weiterstadt, Pfungstadt, Riedstadt, Seeheim-Jugenheim",
        en: "Catchment Area: Griesheim, Weiterstadt, Pfungstadt, Riedstadt, Seeheim-Jugenheim"
      },
      {
        de: "Bauvorlageberechtigung vor der Bauaufsicht Darmstadt-Dieburg in Dieburg",
        en: "Full permit filing privileges with Darmstadt-Dieburg District Building Authority"
      },
      {
        de: "Gewerbe- & Geschosswohnungsbau mit DIN 276 Kostenkontrolle",
        en: "Commercial & multi-family residential delivery under DIN 276 budget control"
      },
      {
        de: "B-Plan-Erstellung & städtebauliche Rahmenplanung (AKH Stadtplaner)",
        en: "Master planning & statutory zoning procedures by registered urban planners"
      }
    ],
    localFocusTitle: {
      de: "Wirtschaftsachse Darmstadt-West: Gewerbe, Wohnungsbau & B-Plan-Verfahren",
      en: "Darmstadt West Growth Axis: Commercial, Housing & Zoning Procedures"
    },
    localFocusDescription: {
      de: "In Weiterstadt und Griesheim kombinieren wir gewerbliche Funktionalität (LKW-Logistik, Schallkontingente, Immissionsschutz) mit hochwertiger Corporate Architecture und energieeffizientem Wohnungsbau.",
      en: "In Weiterstadt and Griesheim, we merge commercial functionality (freight logistics, acoustic quotas, environmental emissions) with distinguished corporate architecture and energy-efficient housing."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsicht Landkreis Darmstadt-Dieburg", en: "Darmstadt-Dieburg District Building Authority" },
        description: { de: "Erprobte Genehmigungsbegleitung im Kreishaus Dieburg für Vorhaben im Kreisgebiet.", en: "Proven permit guidance at the Dieburg district building office for commercial and residential schemes." }
      },
      {
        title: { de: "Gewerbegebietsfestsetzungen nach BauNVO", en: "Commercial Zone Regulations under BauNVO" },
        description: { de: "Einhaltung von Emissionskontingenten nach DIN 45691 und TA Lärm.", en: "Compliance with acoustic emission quotas according to DIN 45691 and German Technical Instructions on Noise (TA Lärm)." }
      },
      {
        title: { de: "Regenwasserretention & Löschwasserversorgung", en: "Stormwater Retention & Firefighting Water Infrastructure" },
        description: { de: "Ingenieurmäßige Berechnung von Retentionsräumen und Brandschutznachweisen für Hallenbauten.", en: "Engineering calculation of retention volumes and fire protection certificates for commercial halls." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Bauämter sind in Weiterstadt und Griesheim zuständig?", en: "Which building authorities are responsible in Weiterstadt and Griesheim?" },
        answer: { de: "Zuständig ist die Untere Bauaufsicht des Landkreises Darmstadt-Dieburg mit Sitz in Dieburg. Wir kennen die behördlichen Anforderungen im Landkreis seit vielen Jahren.", en: "The Lower Building Control Authority of the Darmstadt-Dieburg District, based in Dieburg, is responsible. We have navigated district requirements for many years." }
      },
      {
        question: { de: "Planen Sie auch Gewerbehallen und Bürokomplexe?", en: "Do you design commercial halls and office complexes?" },
        answer: { de: "Ja, wir planen schlüsselfertige Hallenbauten, Logistikstützpunkte, Werkstätten und moderne Bürogebäude nach VOB und HOAI 1–9.", en: "Yes, we design turnkey warehouse facilities, logistics hubs, workshops, and contemporary office buildings under VOB and HOAI 1–9." }
      },
      {
        question: { de: "Können Sie Bebauungspläne für Investoren aufstellen?", en: "Can you prepare binding development plans (B-Plans) for investors?" },
        answer: { de: "Als eingetragene Stadtplaner in der AKH Hessen begleiten wir vorhabenbezogene Bebauungspläne (§ 12 BauGB) und städtebauliche Verträge mit den Kommunen.", en: "As registered urban planners with AKH Hessen, we formulate project-based development plans (§ 12 BauGB) and urban contracts with local municipalities." }
      }
    ]
  },

  "architektur-hanau-innenstadt": {
    slug: "architektur-hanau-innenstadt",
    path: "/architektur-hanau-innenstadt",
    parentPath: "/architektur-hanau",
    parentName: { de: "Hanau", en: "Hanau" },
    h1: {
      de: "Architektur, Konversion & Wohnungsbau in Hanau-Innenstadt & Pioneer Park",
      en: "Architecture, Urban Conversion & Housing in Hanau Center & Pioneer Park"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Hanau-Innenstadt",
      en: "Architecture · Urban Planning · Permitting | Hanau City Center"
    },
    subtitle: {
      de: "Hanau setzt mit dem Pioneer Park und der Konversion ehemaliger Militär- und Bahnflächen bundesweit Maßstäbe. Wir entwerfen zukunftsweisende Geschosswohnungsbauten, nachhaltige Holz-Hybrid-Gebäude und gewerbliche Liegenschaften mit strikter DIN 276 Kostendisziplin.",
      en: "Hanau sets national benchmarks with the Pioneer Park and urban conversion schemes. We design visionary multi-family apartment buildings, sustainable timber-hybrid architecture, and commercial facilities with strict DIN 276 cost discipline."
    },
    targetKeywords: [
      "Architekt Hanau Innenstadt",
      "Pioneer Park Hanau Architekt",
      "Bauantrag Hanau Lamboy",
      "Baugenehmigung Hanau",
      "Geschosswohnungsbau Hanau",
      "HOAI Hanau"
    ],
    metaTitle: {
      de: "Architektur & Wohnungsbau in Hanau-Innenstadt & Pioneer Park | Shams Consult",
      en: "Architecture & Urban Housing in Hanau Center & Pioneer Park | Shams Consult"
    },
    metaDescription: {
      de: "Staatlich anerkanntes Planungsbüro (AKH Nr. 21886) für Hanau-Innenstadt, Lamboy & Pioneer Park. Moderner Wohnungsbau, Konversion, HOAI 1–9 und HBO-Bauanträge.",
      en: "Registered architectural studio (AKH No. 21886) for Hanau Center, Lamboy & Pioneer Park. Modern residential buildings, urban conversion, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Innenstadt, Lamboy, Pioneer Park, Campo Pond, Kinzigbogen",
        en: "Catchment Area: City Center, Lamboy, Pioneer Park, Campo Pond, Kinzigbogen"
      },
      {
        de: "Bauvorlageberechtigung bei der Bauaufsicht der Stadt Hanau",
        en: "Full permit filing privileges with City of Hanau Building Authority"
      },
      {
        de: "Spezialisiert auf zukunftsfähige KfW-40-Wohnanlagen & Konversionen",
        en: "Specialized in future-proof KfW 40 apartment complexes & brownfield conversions"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Moderne Stadtentwicklung in Hanau: Pioneer Park, Konversion & urbane Dichte",
      en: "Modern Urban Development in Hanau: Pioneer Park, Conversion & Urban Density"
    },
    localFocusDescription: {
      de: "Hanaus dynamischer Wandel erfordert innovative Wohnkonzepte, ressourcenschonende Bauweisen und zügige Genehmigungsverfahren im vereinfachten Baugenehmigungsverfahren nach § 65 HBO.",
      en: "Hanau's dynamic transformation demands innovative housing typologies, resource-saving construction techniques, and streamlined approvals under § 65 HBO simplified permit procedures."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bebauungspläne Pioneer Park & Lamboy", en: "Pioneer Park & Lamboy Master Development Plans" },
        description: { de: "Konforme Auslegung moderner Quartiersbebauungspläne mit hohen Nachhaltigkeitskriterien.", en: "Compliant implementation of modern neighborhood master plans featuring rigorous sustainability standards." }
      },
      {
        title: { de: "Mobilitätssatzung der Stadt Hanau", en: "Hanau Municipal Mobility Statute" },
        description: { de: "Integrierte Mobilitätskonzepte zur Stellplatzreduktion durch Car-Sharing und Bike-Infrastruktur.", en: "Integrated mobility concepts allowing parking space reductions through car-sharing hubs and cycling infrastructure." }
      },
      {
        title: { de: "Immissionsschutz & Lärmkontingentierung", en: "Noise Abatement & Acoustic Quota Allocations" },
        description: { de: "Schalltechnische Dimensionierung von Wohnfassaden an Bahntrassen und Hauptachsen.", en: "Acoustic dimensioning of residential facades adjacent to railway lines and arterial roads." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Bauweisen eignen sich für Neubauten im Pioneer Park?", en: "Which construction methods are best suited for new buildings in Pioneer Park?" },
        answer: { de: "Vor allem ressourcenschonende Holz-Hybrid- und Massivbauten mit KfW-40-Standard, begrünten Dächern und dezentralen Nahwärmeanschlüssen.", en: "Primarily resource-saving timber-hybrid and solid mineral construction with KfW 40 rating, green roofs, and district heating connections." }
      },
      {
        question: { de: "Wie schnell erteilt die Bauaufsicht Hanau Genehmigungen?", en: "How fast does the Hanau Building Authority issue permits?" },
        answer: { de: "Im vereinfachten Verfahren nach HBO liegt die Bearbeitungszeit bei rund 3 bis 4 Monaten. Durch digitale und vollständige Einreichung sichern wir termingerechte Freigaben.", en: "In the simplified HBO procedure, processing takes around 3 to 4 months. Through digital and complete filings, we secure timely approvals." }
      },
      {
        question: { de: "Begleiten Sie auch Konversionsprojekte für Investoren?", en: "Do you guide conversion projects for property developers?" },
        answer: { de: "Ja, als freie Stadtplaner (AKH Hessen) erstellen wir Machbarkeitsstudien, Nutzungskonzepte und begleiten städtebauliche Rahmenverhandlungen.", en: "Yes, as licensed urban planners (AKH Hessen), we deliver feasibility studies, mixed-use concepts, and lead urban framework negotiations." }
      }
    ]
  },

  "architektur-maintal-bruchkoebel": {
    slug: "architektur-maintal-bruchkoebel",
    path: "/architektur-maintal-bruchkoebel",
    parentPath: "/architektur-hanau",
    parentName: { de: "Hanau & Main-Kinzig-Kreis", en: "Hanau & Main-Kinzig District" },
    h1: {
      de: "Architektur, Neubau & Gewerbebau in Maintal, Bruchköbel & Main-Kinzig-West",
      en: "Architecture, New Builds & Commercial in Maintal, Bruchköbel & Main-Kinzig West"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Maintal-Bruchköbel",
      en: "Architecture · Urban Planning · Permitting | Maintal Bruchköbel"
    },
    subtitle: {
      de: "Direkt zwischen Frankfurt am Main und Hanau bieten Maintal und Bruchköbel florierende Wohnlagen und Gewerbestandorte. Wir planen hochwertige Mehrfamilienhäuser, moderne Doppelhäuser und Gewerbebauten mit reibungsloser Genehmigung beim Main-Kinzig-Kreis.",
      en: "Positioned directly between Frankfurt and Hanau, Maintal and Bruchköbel provide thriving residential enclaves and corporate parks. We design high-standard apartment buildings, modern duplexes, and commercial halls with seamless approvals from the Main-Kinzig district."
    },
    targetKeywords: [
      "Architekt Maintal",
      "Architekt Bruchköbel",
      "Bauantrag Dörnigheim",
      "Baugenehmigung Main-Kinzig-Kreis",
      "Gewerbebau Maintal",
      "HOAI Bruchköbel"
    ],
    metaTitle: {
      de: "Architektur & Bauanträge in Maintal & Bruchköbel | Shams Consult",
      en: "Architecture & Building Permits in Maintal & Bruchköbel | Shams Consult"
    },
    metaDescription: {
      de: "Architekturbüro (AKH Hessen Nr. 21886) für Maintal (Dörnigheim, Bischofsheim), Bruchköbel & Main-Kinzig-West. Neubau, Gewerbebau, HOAI 1–9 und HBO-Bauanträge.",
      en: "Architect practice (AKH Hesse No. 21886) for Maintal (Dörnigheim, Bischofsheim), Bruchköbel & West Main-Kinzig. Residential & commercial architecture, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Maintal (Dörnigheim, Bischofsheim, Hochstadt), Bruchköbel, Erlensee, Schöneck",
        en: "Catchment Area: Maintal (Dörnigheim, Bischofsheim, Hochstadt), Bruchköbel, Erlensee, Schöneck"
      },
      {
        de: "Bauvorlageberechtigung vor der Bauaufsicht Main-Kinzig-Kreis & Stadt Maintal",
        en: "Full permit filing privileges with Main-Kinzig Building Authority & City of Maintal"
      },
      {
        de: "Wohnungs- & Gewerbebau mit garantierter Kostendisziplin nach DIN 276",
        en: "Residential and commercial building delivery under guaranteed DIN 276 budget control"
      },
      {
        de: "100% Termintreue und transparente LPH 1–9 Steuerung",
        en: "100% on-time milestone delivery and transparent HOAI 1–9 management"
      }
    ],
    localFocusTitle: {
      de: "Bauen im westlichen Main-Kinzig-Kreis: Frankfurter Nähe, Wohnen & Gewerbe",
      en: "Building in Western Main-Kinzig: Frankfurt Proximity, Residential & Commercial"
    },
    localFocusDescription: {
      de: "Die unmittelbare Nachbarschaft zu Frankfurt macht Maintal und Bruchköbel zu Top-Standorten für Pendlerwohnungen und Gewerbeflächen. Wir stimmen Hochwasserschutz an der Mainachse und lokale Entwässerungssatzungen professionell ab.",
      en: "Immediate proximity to Frankfurt makes Maintal and Bruchköbel prime locations for commuter residences and business facilities. We coordinate river flood management along the Main axis and municipal drainage statutes with seasoned professionalism."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Hauptsitz Frankfurt am Main", en: "Headquarters Frankfurt am Main" },
      street: "Carl-von-Noorden-Platz 5",
      city: { de: "60596 Frankfurt am Main", en: "60596 Frankfurt am Main, Germany" },
      phone: "069 74 223 777",
      phoneHref: "tel:+496974223777",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-von-Noorden-Platz+5,+60596+Frankfurt+am+Main&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Bauaufsichten Main-Kinzig & Stadt Maintal", en: "Main-Kinzig & City of Maintal Building Control" },
        description: { de: "Erprobte Bauantragskoordination vor den zuständigen Bauaufsichtsämtern.", en: "Established building application coordination before the relevant municipal and district authorities." }
      },
      {
        title: { de: "Hochwasserschutzverordnungen am Main (HQ 100)", en: "Main River Flood Protection Statutes (HQ 100)" },
        description: { de: "Druckwasserdichte Wannenkonstruktionen und Retentionsnachweise in Mainnähe.", en: "Pressure-watertight basement tanking and water retention calculations for plots near the Main." }
      },
      {
        title: { de: "Kommunale Entwässerungssatzungen", en: "Municipal Drainage By-Laws" },
        description: { de: "Hydraulische Berechnung von Rigolensystemen und Zisternen nach DWA-A 138.", en: "Hydraulic calculation of rigole infiltration systems and cisterns conforming to DWA-A 138." }
      }
    ],
    faqs: [
      {
        question: { de: "Welche Bauprojekte betreuen Sie in Maintal und Bruchköbel?", en: "What building projects do you handle in Maintal and Bruchköbel?" },
        answer: { de: "Vom modernen Einfamilien- und Doppelhaus über Mehrfamilienhausanlagen bis hin zu Handwerksbetrieben und Logistikhallen.", en: "From contemporary single- and two-family homes to apartment complexes, artisanal workshops, and commercial logistics buildings." }
      },
      {
        question: { de: "Sind Bauanträge im Mainuferbereich von Maintal-Dörnigheim komplexer?", en: "Are building applications along the Main in Maintal-Dörnigheim more complex?" },
        answer: { de: "Ja, wegen des Hochwasserschutzes. Wir erstellen alle Nachweise zur Auftriebssicherheit und wasserdichten Ausführung direkt mit den Behörden.", en: "Yes, owing to statutory flood risk zones. We coordinate all buoyancy safety verifications and waterproof specifications directly with the water authorities." }
      },
      {
        question: { de: "Übernehmen Sie die Ausschreibung und Vergabe nach VOB?", en: "Do you manage tendering and procurement under VOB?" },
        answer: { de: "Ja, in den Leistungsphasen 6 und 7 erstellen wir detaillierte Leistungsverzeichnisse, holen Handwerkerangebote ein und verhandeln Festpreise.", en: "Yes, in work phases 6 and 7 we prepare detailed bills of quantities, solicit trade tenders, and negotiate fixed contractor pricing." }
      }
    ]
  },

  "architektur-dietzenbach": {
    slug: "architektur-dietzenbach",
    path: "/architektur-dietzenbach",
    parentPath: "/architektur-roedermark",
    parentName: { de: "Rödermark & Kreis Offenbach", en: "Rödermark & Offenbach District" },
    h1: {
      de: "Architektur, Gewerbe- & Wohnungsbau in Dietzenbach & Kreis Offenbach-Mitte",
      en: "Architecture, Commercial & Residential Planning in Dietzenbach & Central Offenbach District"
    },
    eyebrow: {
      de: "Architektur · Stadtplanung · Baurecht | Dietzenbach",
      en: "Architecture · Urban Planning · Permitting | Dietzenbach"
    },
    subtitle: {
      de: "Als Kreisstadt des Landkreises Offenbach verbindet Dietzenbach florierende Gewerbegebiete mit attraktiven Wohnlagen am Steinberg und Hexenberg. Mit unserem Planungsbüro im benachbarten Rödermark sichern wir Ihnen kürzeste Abstimmungswege zum Kreishaus Dietzenbach.",
      en: "As the administrative seat of the Offenbach district, Dietzenbach combines bustling commercial zones with attractive residential areas at Steinberg and Hexenberg. From our nearby studio in Rödermark, we ensure the shortest coordination paths to the Dietzenbach district building authority."
    },
    targetKeywords: [
      "Architekt Dietzenbach",
      "Bauamt Kreishaus Dietzenbach",
      "Baugenehmigung Kreis Offenbach",
      "Gewerbebau Dietzenbach",
      "Wohnungsbau Steinberg Dietzenbach",
      "HOAI Dietzenbach"
    ],
    metaTitle: {
      de: "Architektur, Gewerbe- & Wohnungsbau in Dietzenbach | Shams Consult",
      en: "Architecture, Commercial & Residential in Dietzenbach | Shams Consult"
    },
    metaDescription: {
      de: "Lokales Planungsbüro (AKH Hessen Nr. 21886) für Dietzenbach, Steinberg & Kreis Offenbach. Direkte Nähe zum Kreishaus, Wohnungs- & Gewerbebau, HOAI 1–9 und HBO-Bauanträge.",
      en: "Local planning studio (AKH Hesse No. 21886) for Dietzenbach, Steinberg & Offenbach district. Immediate proximity to the district hall, residential & commercial builds, full HOAI 1–9, and HBO permits."
    },
    heroHighlights: [
      {
        de: "Einzugsgebiet: Steinberg, Hexenberg, Alt-Dietzenbach, Gewerbegebiet Nord",
        en: "Catchment Area: Steinberg, Hexenberg, Old Town Dietzenbach, Commercial Zone North"
      },
      {
        de: "Kürzeste Wege zur Unteren Bauaufsichtsbehörde des Kreises Offenbach im Kreishaus",
        en: "Shortest paths to the Lower Building Authority of Offenbach District in Dietzenbach"
      },
      {
        de: "Gewerbe- & Geschosswohnungsbau mit DIN 276 Kostenkontrolle",
        en: "Commercial & multi-family residential delivery under DIN 276 budget control"
      },
      {
        de: "100% Kostensicherheit nach DIN 276 & Bauzeitengarantie",
        en: "Strict DIN 276 cost discipline and reliable milestone delivery"
      }
    ],
    localFocusTitle: {
      de: "Planen in der Kreisstadt: Kurze Wege zum Bauamt & integrale Architektur",
      en: "Planning in the District Capital: Direct Authority Access & Integrated Architecture"
    },
    localFocusDescription: {
      de: "Nur wenige Autominuten von unserem Büro in der Carl-Zeiss-Straße in Rödermark entfernt, betreuen wir Projekte in Dietzenbach persönlich vor Ort. Ob gewerbliche Umnutzung, Neubau von KfW-40-Wohnanlagen oder Baugenehmigungen im Bestand: Wir garantieren reibungslose Abläufe.",
      en: "Only minutes away from our studio at Carl-Zeiss-Straße in Rödermark, we oversee projects in Dietzenbach personally on-site. Whether commercial conversions, new KfW 40 apartment complexes, or building permits for existing properties: we guarantee smooth workflows."
    },
    localProjects: SHARED_PROJECTS,
    hoaiPhases: SHARED_HOAI,
    office: {
      name: { de: "Planungsbüro Rödermark", en: "Design Studio Rödermark" },
      street: "Carl-Zeiss-Str. 43",
      city: { de: "63322 Rödermark", en: "63322 Rödermark, Germany" },
      phone: "060 74 239 87 82",
      phoneHref: "tel:+4960742398782",
      mapEmbedUrl: "https://maps.google.com/maps?q=Carl-Zeiss-Str.+43,+63322+R%C3%B6dermark&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    localRegulations: [
      {
        title: { de: "Untere Bauaufsichtsbehörde Kreis Offenbach", en: "Offenbach District Lower Building Control Authority" },
        description: { de: "Direkte persönliche Abstimmung im Kreishaus Dietzenbach zur Verkürzung der Genehmigungsfristen.", en: "Direct personal liaison at the Dietzenbach district hall to accelerate approval timeframes." }
      },
      {
        title: { de: "Bebauungspläne Dietzenbach-Steinberg & Gewerbe", en: "Dietzenbach-Steinberg & Commercial Development Plans" },
        description: { de: "Optimale Ausnutzung von Geschossflächen- und Grundflächenzahlen (GFZ/GRZ).", en: "Optimal utilization of floor space ratios and site coverage indices (GFZ/GRZ)." }
      },
      {
        title: { de: "Stellplatzsatzung der Kreisstadt Dietzenbach", en: "City of Dietzenbach Parking Space Statute" },
        description: { de: "Prüffähige Nachweise für Tiefgaragen, Carports und oberirdische Kundenstellplätze.", en: "Audit-ready planning of underground garages, carports, and above-ground customer parking." }
      }
    ],
    faqs: [
      {
        question: { de: "Welchen Vorteil hat die Nähe von Shams Consult zu Dietzenbach?", en: "What is the advantage of Shams Consult's proximity to Dietzenbach?" },
        answer: { de: "Unser Rödermarker Standort liegt unmittelbar neben Dietzenbach. Wir kennen die Sachbearbeiter und Prüfingenieure im Kreishaus persönlich, was Abstimmungen und Voranfragen deutlich beschleunigt.", en: "Our Rödermark location is directly adjacent to Dietzenbach. We personally know the case officers and review engineers at the district hall, expediting consultations and preliminary inquiries significantly." }
      },
      {
        question: { de: "Planen Sie auch Gewerbehallen und Betriebsstätten in Dietzenbach?", en: "Do you design commercial halls and production facilities in Dietzenbach?" },
        answer: { de: "Ja, wir betreuen mittelständische Unternehmen bei Neubau, Erweiterung und Nutzungsänderung gewerblicher Hallen und Büros im Gewerbegebiet Dietzenbach.", en: "Yes, we support medium-sized enterprises with new builds, expansions, and change-of-use permits for commercial warehouses and offices in Dietzenbach's industrial estates." }
      },
      {
        question: { de: "Unterstützen Sie private Bauherren am Steinberg oder Hexenberg?", en: "Do you assist private clients on Steinberg or Hexenberg?" },
        answer: { de: "Ja, wir planen individuelle Einfamilienvillen, Doppelhäuser sowie energetische Kernsanierungen mit KfW-Förderbegleitung.", en: "Yes, we design bespoke residential villas, semi-detached homes, and deep energetic retrofits with full KfW grant support." }
      }
    ]
  }
};

