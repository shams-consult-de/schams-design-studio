export type Language = "de" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    siteVisits: string;
    akhBadge: string;
    caseStudies: string;
    process: string;
    blog: string;
    contact: string;
    bookConsultation: string;
  };
  hero: {
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    philosophyStatement: string;
    bookConsultation: string;
    viewProjects: string;
    founderName: string;
    founderTitle: string;
    founderRole: string;
    founderCompany: string;
    founderStoryCta: string;
    trustBadges?: Array<{
      label: string;
      detail: string;
    }>;
  };
  team: {
    badge: string;
    title: string;
    description: string;
    expertCountBadge: string;
    ctaButton: string;
  };
  metrics: {
    yearsExp: { value: string; label: string };
    completedProjects: { value: string; label: string };
    largestProject: { value: string; label: string };
    dinVob: { value: string; label: string };
  };
  akhRegistration: {
    badge: string;
    title: string;
    description: string;
    statutoryNotice: string;
  };
  clients: {
    badge: string;
    heading: string;
    subtitle: string;
    viewAll: string;
    backToHome: string;
    pageTag: string;
    visitWebsite: string;
    viewCaseStudy: string;
    ctaHeading: string;
    ctaSubtitle: string;
    ctaButton: string;
    networkBadge: string;
    networkTitle: string;
    networkCount: string;
    networkDesc: string;
    disciplines: {
      structural: string;
      mep: string;
      energy: string;
      fireSafety: string;
      tendering: string;
      landscape: string;
    };
    siteVisitsBadge: string;
    siteVisitsTitle: string;
    siteVisitsSubtitle: string;
    siteVisit1Title: string;
    siteVisit1Desc: string;
    siteVisit2Title: string;
    siteVisit2Desc: string;
    viewAllSiteVisits: string;
    pressBadge: string;
  };
  services: {
    badge: string;
    title: string;
    viewAll: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  process: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    steps: Array<{
      num: string;
      name: string;
      desc: string;
      norm?: string;
    }>;
  };
  vob: {
    badge: string;
    title: string;
    subtitle: string;
    guaranteeBadge: string;
    pillars: Array<{
      part: string;
      title: string;
      desc: string;
    }>;
  };
  caseStudies: {
    badge: string;
    title: string;
    subtitle: string;
    googleRating: string;
    reviewsCount: string;
    allReviews: string;
    viewCaseStudy: string;
  };
  projects: {
    badge: string;
    viewAll: string;
    items: Array<{
      title: string;
      location: string;
      image: string;
    }>;
  };
  projectsPage: {
    backToHome: string;
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterUrban: string;
    filterResidential: string;
    filterCommercial: string;
    filterEducation: string;
    filterSustainability: string;
    viewDetails: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  projectDetail: {
    backToProjects: string;
    clientLabel: string;
    locationLabel: string;
    legalBasisLabel: string;
    yearLabel: string;
    scopeLabel: string;
    highlightsTitle: string;
    challengeTitle: string;
    objectiveTitle: string;
    conceptTitle: string;
    outcomeTitle: string;
    officialDocsTitle: string;
    bindingNotice: string;
    inquiryHeading: string;
    inquirySub: string;
    inquiryButton: string;
    allProjectsButton: string;
  };
  research: {
    badge: string;
    title: string;
    subtitle: string;
    academicRole: string;
    institution: string;
    viewTheses: string;
    backToHome: string;
    thesesTitle: string;
    thesesSubtitle: string;
    statTheses: string;
    statThesesLabel: string;
    statFields: string;
    statFieldsLabel: string;
    statPractice: string;
    statPracticeLabel: string;
    filterAll: string;
    filterPub: string;
    filterMaster: string;
    filterBachelor: string;
    topicsLabel: string;
    academicFocus: string;
    downloadPdf: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  founder: {
    badge: string;
    name: string;
    roles: string;
    bio: string;
    button: string;
    stats: Array<{
      title: string;
      desc: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    backToHome: string;
    profileBadge: string;
    profileTitle: string;
    profileText1: string;
    profileText2: string;
    qualificationsBadge: string;
    qualificationsTitle: string;
    akhRegistrationTitle: string;
    akhRegistrationDesc: string;
    qngTitle: string;
    qngDesc: string;
    academiaTitle: string;
    academiaDesc: string;
    teamBadge: string;
    teamTitle: string;
    teamSubtitle: string;
    siteVisitsCtaBadge: string;
    siteVisitsCtaTitle: string;
    siteVisitsCtaDesc: string;
    siteVisitsCtaButton: string;
    founderStoryBadge: string;
    founderStoryTitle: string;
    founderStoryDesc: string;
    founderStoryButton: string;
  };
  siteVisitsPage: {
    backToHome: string;
    badge: string;
    title: string;
    subtitle: string;
    proofNotice: string;
    viewHighRes: string;
    viewAlbum: string;
    closeLightbox: string;
    photoRecordLabel: string;
    prev: string;
    next: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    items: Array<{
      id: string;
      image: string;
      tag: string;
      phase: string;
      title: string;
      desc: string;
    }>;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    readMore: string;
    allTopics: string;
    searchPlaceholder: string;
    noResults: string;
    resetFilters: string;
    backToHome: string;
    backToBlog: string;
    availableArticles: string;
    authorName: string;
    authorRole: string;
    moreArticles: string;
    relatedTopics: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
    prev: string;
    next: string;
    pauseScroll: string;
    startScroll: string;
  };
  contact: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtitle: string;
    calendarCardTitle: string;
    calendarCardHeading: string;
    calendarCardDesc: string;
    calendarCardButton: string;
    calendarCardBenefits: string[];
    emailCardTitle: string;
    emailCardDesc: string;
    emailCardButton: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappButton: string;
    whatsappMessage: string;
    phoneCardTitle: string;
    phoneCardDesc: string;
    liveCalendar: string;
    onlineStatus: string;
    getDirections: string;
    mapTabLabel: string;
    directPhone: string;
    officesTitle: string;
    officesSubtitle: string;
    insuranceReassurance: string;
  };
  mobileActionBar: {
    call: string;
    whatsapp: string;
    book: string;
  };
  legal: {
    backToHome: string;
    impressumTitle: string;
    datenschutzTitle: string;
    barrierefreiheitTitle: string;
    widerrufTitle: string;
    close: string;
    informationProvider: string;
    owner: string;
    contact: string;
    chamber: string;
    insurance: string;
    responsibleAuthority: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    followTitle: string;
    brandTagline: string;
    legalImpressum: string;
    legalDatenschutz: string;
    legalBarrierefreiheit: string;
    legalWiderruf: string;
    developedBy: string;
    rights: string;
  };
  notFound: {
    badge: string;
    title: string;
    message: string;
    requestedPathLabel: string;
    backHome: string;
    exploreProjects: string;
    aboutUs: string;
    contactUs: string;
    needAssistance: string;
  };
}

export const content: Record<Language, Translations> = {
  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      services: "Leistungen",
      projects: "Projekte",
      siteVisits: "Praxis-Einblicke",
      akhBadge: "AKH Hessen #21886 · Frankfurt UAS",
      caseStudies: "Fallstudien",
      process: "Prozess",
      blog: "Magazin",
      contact: "Kontakt",
      bookConsultation: "Erstgespräch anfragen",
    },
    hero: {
      titlePart1: "Die Beziehungen, die wir aufbauen, sind genauso wichtig",
      titleHighlight: "wie die Gebäude, die wir entwerfen.",
      subtitle:
        "Architektur, Stadtplanung und Projektentwicklung für öffentliche Auftraggeber, Investoren und private Bauherren.",
      philosophyStatement:
        "Die Beziehungen, die wir aufbauen, sind genauso wichtig wie die Gebäude, die wir entwerfen.",
      bookConsultation: "Erstgespräch anfragen",
      viewProjects: "Projekte ansehen",
      founderName: "Dipl.-Ing. Majeed Shams",
      founderTitle: "Architekt · Stadtplaner",
      founderRole: "Dozent · Gründer",
      founderCompany: "Shams Consult",
      founderStoryCta: "Persönliche Geschichte & Werdegang lesen →",
      trustBadges: [
        { label: "AKH Hessen", detail: "Eingetragener Architekt & Stadtplaner" },
        { label: "HOAI 1–9 & VOB", detail: "Amtliche Honorar- & Vergabeordnung" },
        { label: "DIN 276 Kostenkontrolle", detail: "Garantierte Kostensicherheit" },
        { label: "Frankfurt UAS", detail: "Dozent & Bauforschung" },
      ],
    },
    team: {
      badge: "UNSER EXPERTENTEAM",
      title: "Team aus 16 Architekten & Fachplanern",
      description:
        "Interdisziplinäres Planungs- und Baumanagement-Team aus Architekten, Bauleitern und BIM-Spezialisten unter Leitung von Dipl.-Ing. Majeed Shams.",
      expertCountBadge: "+12",
      ctaButton: "Team & Gründer kennenlernen",
    },
    metrics: {
      yearsExp: { value: "15+", label: "Jahre Erfahrung" },
      completedProjects: { value: "100+", label: "Realisierte Projekte" },
      largestProject: { value: "€13,5 Mio.", label: "Größtes Projektvolumen" },
      dinVob: { value: "100% DIN & VOB", label: "Deutsche Planungs- & Qualitätsstandards" },
    },
    akhRegistration: {
      badge: "AKH HESSEN · KDÖR",
      title: "Eingetragener Architekt & Stadtplaner (AKH Hessen · KdöR)",
      description:
        "Staatlich geschützte Berufsbezeichnung mit uneingeschränkter Bauvorlageberechtigung in allen Bundesländern · Gesetzlich vollumfänglich berufshaftpflichtversichert (§ 16 HASG).",
      statutoryNotice: "Eingetragenes Mitglied der Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886).",
    },
    clients: {
      badge: "Ausgewählte Kunden & Partner",
      heading: "Vertrauen aus Wirtschaft, Kommunen & Wissenschaft.",
      subtitle:
        "Ausgewählte institutionelle Auftraggeber, Projektentwickler und Partner, mit denen wir gemeinsam anspruchsvolle Bau- und Planungsprojekte realisieren.",
      viewAll: "Alle Kunden ansehen",
      backToHome: "Zurück zur Startseite",
      pageTag: "Kunden & Partner",
      visitWebsite: "Offizielle Website besuchen",
      viewCaseStudy: "Projektdetails ansehen",
      ctaHeading: "Planen Sie ein gemeinsames Projekt?",
      ctaSubtitle: "Lassen Sie uns unverbindlich über Ihr Bauvorhaben, Machbarkeiten und Planungsrecht sprechen.",
      ctaButton: "Termin vereinbaren →",
      networkBadge: "16+ EXPERTEN IM FESTEN PLANERVERBUND",
      networkTitle: "Kernteam & erweitertes interdisziplinäres Ingenieurnetzwerk",
      networkCount: "16+ Fachkräfte gesamt",
      networkDesc:
        "Unser 6-köpfiges Leitungs- und Planungsteam wird bei komplexen Bauvorhaben durch 10+ fest assoziierte Statiker, TGA-Fachplaner, Energieberater und Bauphysiker nahtlos verstärkt. So garantieren wir maximale Fachkompetenz und termintreue Abwicklung für Projekte jeder Größenordnung (bis 13,5 Mio. €).",
      disciplines: {
        structural: "Tragwerksplanung & Statik",
        mep: "TGA & Gebäudetechnik",
        energy: "Energieeffizienz & QNG/LCA",
        fireSafety: "Brandschutz & Bauphysik",
        tendering: "VOB-Massenermittlung & Ausschreibung",
        landscape: "Freianlagen & Landschaftsplanung",
      },
      siteVisitsBadge: "VOR-ORT-PRÄSENZ & PARTNERSCHAFT",
      siteVisitsTitle: "Persönliche Bauherrenberatung & Bestandsaufnahmen vor Ort",
      siteVisitsSubtitle:
        "Architektur entsteht nicht nur am Schreibtisch. Dipl.-Ing. Majeed Shams begleitet Bauherren persönlich vor Ort – von der millimetergenauen Bestandsaufnahme bis zur fundierten baurechtlichen Erstberatung.",
      siteVisit1Title: "Persönliche Beratung & Vertrauensaufbau",
      siteVisit1Desc:
        "Direkter Dialog auf Augenhöhe: Verständnis für individuelle Bauwünsche, Kostenrahmen und baurechtliche Spielräume.",
      siteVisit2Title: "Präzises Bauaufmaß & Technische Vermessung",
      siteVisit2Desc:
        "Exakte digitale und manuelle Erfassung der Bausubstanz als rechtssichere Planungsgrundlage für HOAI Phasen 1–4.",
      viewAllSiteVisits: "Vollständige Vor-Ort-Fotodokumentation & Baustelleneinblicke ansehen",
      pressBadge: "Pressebericht",
    },
    services: {
      badge: "Unsere Leistungen",
      title: "Architektur, Stadtplanung & Projektentwicklung",
      viewAll: "Alle Leistungen ansehen",
      items: [
        {
          title: "Architektur & Hochbau",
          desc: "Funktionale, ästhetische und nachhaltige Gebäudeplanung über alle Leistungsphasen.",
        },
        {
          title: "Stadt- & Bauleitplanung",
          desc: "Rechtssichere Bebauungspläne und städtebauliche Konzepte, in denen Zukunft wächst.",
        },
        {
          title: "Projektentwicklung",
          desc: "Minimierung von Investitionsrisiken durch strategische Baurechts- und Kostensteuerung.",
        },
        {
          title: "Due Diligence & Baurecht",
          desc: "Fundierte baurechtliche Prüfungen für fundierte und sichere Immobilienentscheidungen.",
        },
      ],
    },
    process: {
      badge: "HOAI-Leistungsphasen 1–9",
      titlePart1: "Strukturierte Planung nach",
      titlePart2: "HOAI-Leistungsphasen.",
      subtitle: "Vom ersten Konzept bis zur schlüsselfertigen Übergabe — planungssicher nach amtlicher Honorarordnung für Architekten.",
      steps: [
        { num: "01", name: "Grundlagenermittlung", desc: "Bedarfsanalyse, Standortprüfung & HOAI-Zieldefinition", norm: "HOAI § 34" },
        { num: "02", name: "Vorplanung", desc: "Erste Entwurfsskizzen, Machbarkeit & Kostenschätzung (DIN 276)", norm: "DIN 276" },
        { num: "03", name: "Entwurfsplanung", desc: "Durchgearbeitetes architektonisches Gesamtkonzept & Kostenberechnung", norm: "DIN 276" },
        { num: "04", name: "Genehmigungsplanung", desc: "Rechtssicherer Bauantrag nach HBO/LBO & direkte Behördenabstimmung", norm: "HBO / LBO" },
        { num: "05", name: "Ausführungsplanung", desc: "Detaillierte Werkpläne 1:50 bis 1:1 & Statik-/TGA-Koordination", norm: "DIN / VDI" },
        { num: "06", name: "Vorbereitung der Vergabe", desc: "VOB-konforme Massenermittlung & rechtssichere Leistungsverzeichnisse", norm: "VOB/A" },
        { num: "07", name: "Mitwirkung bei der Vergabe", desc: "Neutrale Angebotsprüfung, Preisspiegel & Vergabeverhandlungen", norm: "VOB" },
        { num: "08", name: "Objektüberwachung", desc: "Qualifizierte Bauleitung vor Ort, Qualitätskontrolle & Terminüberwachung", norm: "LBO / VOB/B" },
        { num: "09", name: "Objektbetreuung", desc: "Förmliche Bauabnahme, Mängelbeseitigung & Gewährleistungsdokumentation", norm: "BGB / VOB" },
      ],
    },
    vob: {
      badge: "DE Norm",
      title: "VOB-Konformität",
      subtitle: "Vergabe- & Bauvertragsordnung",
      guaranteeBadge: "100% Rechtssicher & Mängelfrei",
      pillars: [
        {
          part: "VOB/A",
          title: "Ausschreibung & Vergabe",
          desc: "Transparente Preisvergleiche ohne verdeckte Kosten",
        },
        {
          part: "VOB/B",
          title: "Vertragsrecht & Fristen",
          desc: "Rechtssichere Bauverträge und verbindliche Termintreue",
        },
        {
          part: "VOB/C",
          title: "Technische Baunormen",
          desc: "Strikte DIN-Konformität und aktive Mängelprävention",
        },
      ],
    },
    caseStudies: {
      badge: "VERIFIZIERTE KUNDENERFAHRUNGEN",
      title: "5.0 Sterne Google-Bewertungen",
      subtitle: "Erfahrungsberichte von Bauherren, Bauträgern und institutionellen Auftraggebern.",
      googleRating: "5.0",
      reviewsCount: "100% Empfehlungsrate",
      allReviews: "Alle Rezensionen ansehen",
      viewCaseStudy: "Fallstudie lesen",
    },
    projects: {
      badge: "Ausgewählte Projekte",
      viewAll: "Alle Projekte ansehen",
      items: [
        {
          title: "Büro- & Gewerbekomplex",
          location: "Frankfurt am Main, Deutschland",
          image: "/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
        },
        {
          title: "Wohnbebauung & Mehrfamilienhaus",
          location: "Wiesbaden, Deutschland",
          image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        },
        {
          title: "Bildungs- & Forschungscampus",
          location: "Darmstadt, Deutschland",
          image: "/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg",
        },
      ],
    },
    projectsPage: {
      backToHome: "Zurück zur Startseite",
      badge: "PROJEKTÜBERSICHT",
      title: "Ausgewählte Architektur- & Stadtplanungsprojekte.",
      subtitle: "Von städtebaulichen Bebauungsplänen über großvolumige Mischnutzungen bis zu prämierten Wohn- und Gewerbebauten.",
      filterAll: "Alle Projekte",
      filterUrban: "Stadt- & Bauleitplanung",
      filterResidential: "Wohnungsbau",
      filterCommercial: "Gewerbebau & Mischnutzung",
      filterEducation: "Bildungsbau",
      filterSustainability: "Nachhaltigkeit & QNG",
      viewDetails: "Projektdetails ansehen",
      ctaTitle: "Haben Sie ein Bauvorhaben in Planung?",
      ctaSubtitle: "Sichern Sie sich fundierte baurechtliche Klarheit und planungssichere HOAI-Begleitung für Ihr Vorhaben.",
      ctaButton: "Erstgespräch vereinbaren →",
    },
    projectDetail: {
      backToProjects: "Zurück zur Projektübersicht",
      clientLabel: "Auftraggeber & Partner",
      locationLabel: "Standort",
      legalBasisLabel: "Rechtsgrundlage / Verfahren",
      yearLabel: "Jahr / Status",
      scopeLabel: "Planungsleistung",
      highlightsTitle: "PROJEKT-HIGHLIGHTS",
      challengeTitle: "1. Ausgangslage & städtebauliche Herausforderung",
      objectiveTitle: "2. Zielsetzung & Planungsrechtliche Einordnung",
      conceptTitle: "3. Städtebauliches & Architektonisches Konzept",
      outcomeTitle: "4. Ergebnis & Mehrwert für Bauherr und Kommune",
      officialDocsTitle: "AMTLICHE PLANUNGSUNTERLAGEN",
      bindingNotice: "Rechtskräftige Satzungen und amtliche Begründungen gemäß BauGB/LBO.",
      inquiryHeading: "Planen Sie ein ähnliches Vorhaben?",
      inquirySub: "Lassen Sie uns baurechtliche Möglichkeiten und städtebauliche Potenziale Ihres Grundstücks fundiert prüfen.",
      inquiryButton: "Projekt-Erstberatung vereinbaren →",
      allProjectsButton: "Alle Projekte anzeigen",
    },
    research: {
      badge: "WISSENSCHAFT & FORSCHUNG",
      title: "Forschung, Lehre & Wissenschaft",
      subtitle: "Akademischer Lehrauftrag an der Frankfurt University of Applied Sciences (Frankfurt UAS) am Fachbereich 1.",
      academicRole: "Dozent & Wissenschaftlicher Betreuer",
      institution: "Frankfurt University of Applied Sciences",
      viewTheses: "Forschungsarbeiten & Abschlussarbeiten einsehen →",
      backToHome: "Zurück zur Startseite",
      thesesTitle: "Wissenschaftliche Arbeiten & Fachpublikationen",
      thesesSubtitle: "Praxisorientierte Spitzenforschung und Betreuung von Master- und Bachelorabschlussarbeiten an der Frankfurt University of Applied Sciences.",
      statTheses: "7+",
      statThesesLabel: "Publikationen & Thesen",
      statFields: "5+",
      statFieldsLabel: "Forschungsbereiche",
      statPractice: "100%",
      statPracticeLabel: "Praxistransfer",
      filterAll: "Alle Arbeiten",
      filterPub: "Fachpublikationen",
      filterMaster: "Masterarbeiten",
      filterBachelor: "Bachelorarbeiten",
      topicsLabel: "Themen:",
      academicFocus: "Akademischer Schwerpunkt:",
      downloadPdf: "Dokumentation / Abstract ansehen",
      ctaTitle: "Interesse an einer wissenschaftlichen Kooperation?",
      ctaSubtitle: "Wir vergeben praxisnahe Forschungsthemen und begleiten anspruchsvolle Abschlussarbeiten in Kooperation mit der Frankfurt UAS.",
      ctaButton: "Kontakt für Forschungskooperationen →",
    },
    founder: {
      badge: "Büroinhaber",
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      roles: "Architekt · Stadtplaner · Dozent Frankfurt UAS",
      bio: "Mit über 15 Jahren Erfahrung in Planung und behördlicher Bauamtsprüfung begleitet Majeed Shams private Bauherren, Bauträger und Kommunen bei der rechtssicheren und termintreuen Umsetzung anspruchsvoller Bauvorhaben.",
      button: "Mehr über den Gründer erfahren",
      stats: [
        { title: "15+ Jahre", desc: "Praxiserfahrung" },
        { title: "100+ Projekte", desc: "Erfolgreich realisiert" },
        { title: "Forschung & Lehre", desc: "Frankfurt UAS Dozent" },
        { title: "Kommunal & Privat", desc: "Behördlicher Experte" },
      ],
    },
    about: {
      badge: "BÜROPROFIL & UNTERNEHMENSWERTE",
      title: "Architektur, Städtebau & Baumanagement aus Leidenschaft.",
      subtitle: "Wir schaffen nachhaltige Lebensräume und planungssichere Baurechte mit technischer Präzision und Verlässlichkeit.",
      backToHome: "Zurück zur Startseite",
      profileBadge: "ÜBER DAS BÜRO",
      profileTitle: "Ganzheitliche Planungs- und Baukompetenz seit über 15 Jahren",
      profileText1: "Das Architekturbüro Shams Consult steht für integrale Architektur, vorausschauende Stadtplanung und qualitätsgesicherte Bauausführung. Seit über 15 Jahren realisieren wir anspruchsvolle Vorhaben von modernen Wohnbauten über innerstädtische Nahversorgungszentren bis hin zu komplexen kommunalen Bebauungsplänen.",
      profileText2: "Unser Ansatz verbindet fundiertes baurechtliches Wissen mit moderner Entwurfsästhetik und strikter Kostenkontrolle nach DIN 276. Als eingetragenes Büro in der Architekten- und Stadtplanerkammer Hessen (AKH) bieten wir volle Bauvorlageberechtigung in allen 16 Bundesländern.",
      qualificationsBadge: "QUALIFIKATIONEN & BEHÖRDLICHE ANERKENNUNG",
      qualificationsTitle: "Behördliche Expertise & Bundesweite Zertifizierungen",
      akhRegistrationTitle: "AKH Kammerzulassung",
      akhRegistrationDesc: "Eingetragenes Mitglied der Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886) für Hochbau und Stadtplanung.",
      qngTitle: "QNG & dena Energieeffizienz",
      qngDesc: "Gelistet in der Energieeffizienz-Expertenliste des Bundes für „Klimafreundlicher Neubau – Lebenszyklusanalyse (LCA) für Wohngebäude & QNG-Zertifizierung“.",
      academiaTitle: "Forschung & Lehre",
      academiaDesc: "Lehrauftrag an der Frankfurt University of Applied Sciences (Frankfurt UAS) im Fachbereich Architektur, Bauingenieurwesen und Geomatik.",
      teamBadge: "UNSER EXPERTENTEAM",
      teamTitle: "Lernen Sie unser Team kennen",
      teamSubtitle: "Unser Büro vereint erfahrene Architekten, Stadtplaner, Bauingenieure und Visualisierungsspezialisten für integrale Projekterfolge.",
      siteVisitsCtaBadge: "PRAXIS-EINBLICKE & VOR-ORT-DOKUMENTATION",
      siteVisitsCtaTitle: "Echte Vor-Ort-Präsenz & Baustellennachweise",
      siteVisitsCtaDesc:
        "Sehen Sie ungestellte fotografische Dokumentationen aus der Praxis: von präzisen Bauaufmaßen und millimetergenauer Lasermessung bis zur persönlichen Vor-Ort-Bauleitung nach HOAI.",
      siteVisitsCtaButton: "Vor-Ort-Dokumentation ansehen →",
      founderStoryBadge: "DIE PERSÖNLICHE GESCHICHTE DES GRÜNDERS",
      founderStoryTitle: "Möchten Sie den persönlichen Lebensweg von Majeed Shams erfahren?",
      founderStoryDesc: "Vom Geflüchteten zum erfolgreichen Architekten, Stadtplaner und Hochschuldozenten in Deutschland.",
      founderStoryButton: "Gründer-Biografie lesen →",
    },
    siteVisitsPage: {
      backToHome: "Zurück zur Startseite",
      badge: "VOR-ORT-EINBLICKE & PRAXIS-DOKUMENTATION",
      title: "Authentische Baustelleneinblicke & Vor-Ort-Nachweise",
      subtitle:
        "Architektur erfordert echte Vor-Ort-Präsenz. Sehen Sie hier ungestellte Eindrücke aus der täglichen Planungspraxis: von der Bestandsaufnahme bis zur Bauüberwachung nach HOAI.",
      proofNotice: "Unbearbeitete Originalaufnahmen aus laufenden Projekten und Ortsterminen.",
      viewHighRes: "Originalbild vergrößern",
      viewAlbum: "Fotodokumentation & Album ansehen",
      closeLightbox: "Schließen",
      photoRecordLabel: "Foto-Nachweis",
      prev: "← Vorheriges",
      next: "Nächstes →",
      ctaTitle: "Planen Sie ein Bauvorhaben vor Ort?",
      ctaSubtitle:
        "Gerne besichtigen wir Ihr Grundstück oder Bestandsgebäude persönlich für ein fundiertes Aufmaß und die baurechtliche Ersteinschätzung.",
      ctaButton: "Vor-Ort-Termin vereinbaren →",
      items: [
        {
          id: "residential-excavation",
          image: "/images/partners/site-visits/shams-vor-ort-aussenanlagen-bauleitung-wohnungsbau.png",
          tag: "Wohnungsbau",
          phase: "HOAI Phase 8: Objektüberwachung & Außenanlagen",
          title: "Außenanlagen & Objektüberwachung im Wohnungsbau",
          desc: "Vor-Ort-Koordination der Erdarbeiten und Pflasterflächen vor dem Mehrfamilienhaus: Direkte Abstimmung mit den ausführenden Gewerken und Baumaschinenführern.",
        },
        {
          id: "client-dialogue",
          image: "/images/partners/site-visits/shams-vor-ort-bauherrenberatung.jpg",
          tag: "Vor-Ort-Beratung",
          phase: "HOAI Phase 1",
          title: "Persönliche Bauherrenberatung & Vertrauensaufbau",
          desc: "Direkter Dialog auf Augenhöhe während einer Objektbegehung im Treppenhaus: Klärung erster Bauabsichten und baurechtlicher Möglichkeiten.",
        },
        {
          id: "industrial-safety",
          image: "/images/partners/site-visits/shams-vor-ort-gewerbehalle-begutachtung-helm.jpg",
          tag: "Gewerbebau",
          phase: "HOAI Phase 8: Bauüberwachung & Bestandsanalyse",
          title: "Gewerbehalle: Technische Bestandsanalyse & Arbeitssicherheit",
          desc: "Dipl.-Ing. Majeed Shams bei der Begutachtung von Hallentoren, baulichen Zugängen und Bestandsstrukturen vor Ort mit Schutzhelm und Warnweste.",
        },
        {
          id: "building-survey",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsaufnahme-messung.jpg",
          tag: "Bestandsaufnahme",
          phase: "HOAI Phase 1: Grundlagenermittlung",
          title: "Technisches Bauaufmaß & Laser-Vermessung",
          desc: "Präzise manuelle und lasergestützte Erfassung der Raumgeometrie und Bausubstanz vor Ort zur Erstellung verlässlicher Bestandspläne.",
        },
        {
          id: "project-strategy",
          image: "/images/partners/site-visits/shams-vor-ort-projektbesprechung-plaene.jpg",
          tag: "Strategiegespräch",
          phase: "HOAI Phase 2 & 3: Entwurfsplanung",
          title: "Projektbesprechung & Planprüfung im Team",
          desc: "Gemeinsame Durchsprache der Entwurfs- und Bauleitpläne mit Bauherren und Investoren bei einer persönlichen Besprechung.",
        },
        {
          id: "commercial-handshake",
          image: "/images/partners/site-visits/shams-vor-ort-handschlag-gewerbebau.png",
          tag: "Gewerbebau",
          phase: "HOAI Phase 1 & 8",
          title: "Vertrauensvoller Handschlag vor Gewerbeliegenschaft",
          desc: "Dipl.-Ing. Majeed Shams bei der erfolgreichen Abstimmung und Objektbegehung mit dem Geschäftsführer vor der Logistikhalle.",
        },
        {
          id: "site-supervision",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenbegehung-sicherheitsweste.png",
          tag: "Objektüberwachung",
          phase: "HOAI Phase 8: Bauüberwachung & VOB",
          title: "Baustellenbegehung mit Sicherheitsausrüstung",
          desc: "Qualitäts- und Sicherheitskontrolle vor Ort mit Warnweste und Schutzhelm: Bautechnische Prüfung der Hallenzugänge und Lagerräume.",
        },
        {
          id: "ground-measurement",
          image: "/images/partners/site-visits/shams-vor-ort-asphaltierung-hoehung-messung.jpg",
          tag: "Außenanlagen & Erdarbeiten",
          phase: "HOAI Phase 8: Bauüberwachung",
          title: "Präzise Höhenkontrolle & Vermessung der Hofflächen",
          desc: "Dipl.-Ing. Majeed Shams bei der lasergenauen Gefälle- und Höhenprüfung neu asphaltierter Hof- und Garagenzufahrten direkt vor Ort mit dem Ausführenden.",
        },
        {
          id: "site-coordination-residential",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenkoordination-wohnungsbau.jpg",
          tag: "Wohnungsbau & Koordination",
          phase: "HOAI Phase 8: Objektüberwachung",
          title: "Baustellenkoordination & Bauherrenabstimmung im Wohnungsbau",
          desc: "Direkte Abstimmung der Ausführungsdetails und Erdbaumaßnahmen vor dem Mehrfamilienhaus mit dem Bauherrn und den Erdbau-Teams vor Ort.",
        },
      ],
    },
    blog: {
      badge: "MAGAZIN & FACHARTIKEL",
      title: "Aktuelles aus Architektur, Baurecht & Stadtplanung",
      subtitle: "Fundierte Fachanalysen, rechtliche Leitfäden und praxisnahe Einblicke aus unserem Planungsalltag.",
      viewAll: "Alle Fachartikel ansehen",
      readMore: "Vollständigen Artikel lesen",
      allTopics: "Alle Themen",
      searchPlaceholder: "Fachartikel nach Stichwort durchsuchen...",
      noResults: "Keine Artikel für diesen Suchbegriff gefunden.",
      resetFilters: "Filter zurücksetzen",
      backToHome: "Zurück zur Startseite",
      backToBlog: "Zurück zum Magazin",
      availableArticles: "Fachartikel verfügbar",
      authorName: "Dipl.-Ing. Majeed Shams",
      authorRole: "Büroinhaber · Architekt · Stadtplaner · Dozent Frankfurt UAS",
      moreArticles: "Weitere Fachbeiträge",
      relatedTopics: "Themengebiete",
      ctaHeading: "Haben Sie Fragen zu einem baurechtlichen Thema?",
      ctaSubheading: "Lassen Sie uns Ihre Fragestellung in einem persönlichen Erstgespräch strukturiert besprechen.",
      ctaButton: "Beratung anfragen →",
      prev: "Zurück",
      next: "Weiter",
      pauseScroll: "Scrollen anhalten",
      startScroll: "Scrollen fortsetzen",
    },
    contact: {
      badge: "Fachberatung · 100% Verrechnung auf Projektauftrag",
      headlinePart1: "Starten Sie Ihr Projekt mit ",
      headlineHighlight: "Klarheit",
      subtitle: "Buchen Sie Ihre persönliche 30–60 minütige Bau- und Planungsberatung mit unserem Gründer & Büroinhaber. Die Aufwandsentschädigung von 185,- € zzgl. MwSt. wird bei Projekterteilung zu 100% als Guthaben angerechnet.",
      calendarCardTitle: "ONLINE-TERMINBUCHUNG",
      calendarCardHeading: "Direkt Wunschtermin im Kalender wählen",
      calendarCardDesc: "Wählen Sie in unserem Microsoft 365 Kalender bequem Ihren freien Zeitslot für eine 30–60 Min. Besprechung mit unserem Büroinhaber (telefonisch oder per Teams). Die Aufwandsentschädigung von 185 € zzgl. MwSt. wird voll auf Ihren Projektauftrag angerechnet.",
      calendarCardButton: "Freien Termin im Kalender auswählen →",
      calendarCardBenefits: [
        "30–60 Minuten fundierte Fachberatung mit dem Büroinhaber",
        "Prüfung baurechtlicher Grundlagen (B-Plan / § 34 BauGB / QNG)",
        "100% Anrechnung der Aufwandsentschädigung (185 € zzgl. MwSt.) auf Folgeauftrag",
      ],
      emailCardTitle: "E-Mail an das Architekturbüro",
      emailCardDesc: "Senden Sie uns Ihre Projektunterlagen, Pläne oder Fragen direkt per E-Mail.",
      emailCardButton: "E-Mail schreiben an office@shams-consult.de →",
      whatsappTitle: "Schnelle Frage per WhatsApp?",
      whatsappDesc: "Schreiben Sie uns direkt eine Nachricht mit ersten Eckdaten oder Fotos Ihres Grundstücks.",
      whatsappButton: "WhatsApp Chat starten →",
      whatsappMessage: "Hallo Herr Shams, ich möchte ein unverbindliches Erstgespräch für mein Bauvorhaben anfragen.",
      phoneCardTitle: "Telefonische Beratung",
      phoneCardDesc: "Rufen Sie uns während der Bürozeiten direkt in Frankfurt oder Rödermark an.",
      liveCalendar: "Live Kalender",
      onlineStatus: "Online",
      getDirections: "Route in Google Maps öffnen ↗",
      mapTabLabel: "Standorte",
      directPhone: "+49 (0) 6074 8056262",
      officesTitle: "Unsere Bürostandorte",
      officesSubtitle: "Frankfurt am Main & Rödermark",
      insuranceReassurance: "Berufshaftpflichtversichert (§ 16 HASG) · 100% Planungssicherheit",
    },
    mobileActionBar: {
      call: "Anrufen",
      whatsapp: "WhatsApp",
      book: "Termin buchen",
    },
    legal: {
      backToHome: "Zurück zur Startseite",
      impressumTitle: "Impressum",
      datenschutzTitle: "Datenschutzerklärung",
      barrierefreiheitTitle: "Erklärung zur Barrierefreiheit",
      widerrufTitle: "Widerrufsbelehrung & Muster-Widerrufsformular",
      close: "Schließen",
      informationProvider: "Angaben gemäß § 5 TMG / § 18 MStV",
      owner: "Inhaber",
      contact: "Kontakt",
      chamber: "Zuständige Kammer & Berufsrecht",
      insurance: "Berufshaftpflichtversicherung",
      responsibleAuthority: "Zuständige Aufsichtsbehörde",
    },
    footer: {
      description:
        "Shams Consult ist Ihr verlässliches Architekturbüro für Hochbau, Stadtplanung und Projektentwicklung im Rhein-Main-Gebiet und bundesweit.",
      quickLinksTitle: "Navigation",
      servicesTitle: "Leistungen",
      contactTitle: "Kontakt",
      followTitle: "Netzwerke",
      brandTagline: "Architektur · Stadtplanung · Projektentwicklung",
      legalImpressum: "Impressum",
      legalDatenschutz: "Datenschutz",
      legalBarrierefreiheit: "Barrierefreiheit",
      legalWiderruf: "Widerruf",
      developedBy: "Mit ❤️ in Deutschland entwickelt von",
      rights: "Alle Rechte vorbehalten.",
    },
    notFound: {
      badge: "404 Fehler",
      title: "Seite nicht gefunden",
      message:
        "Die von Ihnen aufgerufene Seite existiert leider nicht oder wurde im Rahmen unserer Neugestaltung verschoben.",
      requestedPathLabel: "Aufgerufener Pfad:",
      backHome: "Zur Startseite",
      exploreProjects: "Projekte ansehen",
      aboutUs: "Über Shams Consult",
      contactUs: "Kontakt & Beratung",
      needAssistance: "Haben Sie Fragen oder suchen Sie ein bestimmtes Projekt? Wir helfen Ihnen gerne weiter.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      siteVisits: "On-Site Proof",
      akhBadge: "AKH Hessen #21886 · Frankfurt UAS",
      caseStudies: "Case Studies",
      process: "Process",
      blog: "Magazine",
      contact: "Contact",
      bookConsultation: "Book Consultation",
    },
    hero: {
      titlePart1: "The relationships we build are just as important",
      titleHighlight: "as the buildings we design.",
      subtitle:
        "Architecture, urban planning, and project development for public authorities, investors, and private clients.",
      philosophyStatement:
        "The relationships we build are just as important as the buildings we design.",
      bookConsultation: "Book Consultation",
      viewProjects: "View Projects",
      founderName: "Dipl.-Ing. Majeed Shams",
      founderTitle: "Architect · Urban Planner",
      founderRole: "Lecturer · Founder",
      founderCompany: "Shams Consult",
      founderStoryCta: "Read Personal Story & Journey →",
      trustBadges: [
        { label: "AKH Hessen", detail: "Registered German Architect & Planner" },
        { label: "HOAI 1–9 & VOB", detail: "Statutory Honorarium & Procurement" },
        { label: "DIN 276 Cost Control", detail: "Guaranteed Financial Certainty" },
        { label: "Frankfurt UAS", detail: "Lecturer & Building Research" },
      ],
    },
    team: {
      badge: "OUR EXPERT TEAM",
      title: "Team of 16 Architecture Experts",
      description:
        "Interdisciplinary design & construction management team of architects, site supervisors, and BIM specialists led by Dipl.-Ing. Majeed Shams.",
      expertCountBadge: "+12",
      ctaButton: "Meet Founder & Team",
    },
    metrics: {
      yearsExp: { value: "15+", label: "Years of Experience" },
      completedProjects: { value: "100+", label: "Completed Projects" },
      largestProject: { value: "€13.5M", label: "Largest Project Volume" },
      dinVob: { value: "100% DIN & VOB", label: "German Engineering & Quality Standards" },
    },
    akhRegistration: {
      badge: "AKH HESSEN · PUBLIC LAW BODY",
      title: "Registered German Architect & Urban Planner (AKH Hessen)",
      description:
        "Protected statutory title under German law with full building permit authority across all federal states · Fully insured under statutory professional indemnity (§ 16 HASG).",
      statutoryNotice: "Officially registered member of the Hessian Chamber of Architects and Urban Planners (AKH #21886).",
    },
    clients: {
      badge: "Selected Clients & Partners",
      heading: "Trusted by Industry Leaders, Municipalities & Academia.",
      subtitle:
        "Selected institutional clients, developers, and partners with whom we deliver high-standard architectural and urban planning projects.",
      viewAll: "View All Clients",
      backToHome: "Back to Home",
      pageTag: "Clients & Partners",
      visitWebsite: "Visit Official Website",
      viewCaseStudy: "View Project Case Study",
      ctaHeading: "Planning a joint project or development?",
      ctaSubtitle: "Let's discuss your building project, feasibility, and statutory permitting in a confidential consultation.",
      ctaButton: "Book Consultation →",
      networkBadge: "16+ EXPERTS IN COLLABORATIVE NETWORK",
      networkTitle: "Core Practice & Extended Multi-Disciplinary Engineering Network",
      networkCount: "16+ Total Specialists",
      networkDesc:
        "Our 6-person core leadership is seamlessly augmented on complex commissions by 10+ permanently associated structural engineers, MEP consultants, certified energy auditors, and fire safety specialists — ensuring seamless full-service delivery for projects up to €13.5M.",
      disciplines: {
        structural: "Structural Engineering",
        mep: "MEP Engineering",
        energy: "Energy & Sustainability",
        fireSafety: "Fire Safety & Building Physics",
        tendering: "VOB Cost & Tendering",
        landscape: "Landscape Architecture",
      },
      siteVisitsBadge: "ON-SITE COMMITMENT & PARTNERSHIP",
      siteVisitsTitle: "Hands-On Client Consultation & Technical Building Surveys",
      siteVisitsSubtitle:
        "Architecture is not crafted solely behind desks. Dipl.-Ing. Majeed Shams personally attends to clients on site—from millimeter-precise building surveys to strategic zoning consultations.",
      siteVisit1Title: "Personal Client Dialogue & Trust",
      siteVisit1Desc:
        "Direct eye-level collaboration: in-depth understanding of your building ambitions, budget parameters, and statutory options.",
      siteVisit2Title: "Accurate Building Survey & On-Site Measurement",
      siteVisit2Desc:
        "Exact digital and manual survey of existing structures, establishing a reliable technical foundation for HOAI phases 1–4.",
      viewAllSiteVisits: "View Full On-Site Photo Documentation & Project Records",
      pressBadge: "Press Article",
    },
    services: {
      badge: "Our Services",
      title: "Architecture, Urban Planning & Project Development",
      viewAll: "View All Services",
      items: [
        {
          title: "Architecture & Structural Design",
          desc: "Functional, aesthetic, and sustainable building design across all project phases.",
        },
        {
          title: "Urban Planning & Master Zoning",
          desc: "Legally compliant zoning plans and urban strategies shaping sustainable growth.",
        },
        {
          title: "Project Development",
          desc: "Minimizing investment risk through strategic statutory planning and cost management.",
        },
        {
          title: "Due Diligence & Building Law",
          desc: "Sound statutory building law appraisals for reliable, risk-free property investments.",
        },
      ],
    },
    process: {
      badge: "HOAI Service Phases 1–9",
      titlePart1: "Structured delivery through the",
      titlePart2: "9 HOAI phases.",
      subtitle: "From initial concept to turnkey handover — legally secure according to the official German fee schedule for architects.",
      steps: [
        { num: "01", name: "Inception & Briefing", desc: "Requirements analysis, site assessment & project definition", norm: "HOAI § 34" },
        { num: "02", name: "Preliminary Design", desc: "Concept sketches, statutory feasibility & initial cost estimate", norm: "DIN 276" },
        { num: "03", name: "Developed Design", desc: "Coordinated architectural schemes & detailed cost calculation", norm: "DIN 276" },
        { num: "04", name: "Statutory Approvals", desc: "Permit applications & direct negotiation with building authorities", norm: "HBO / LBO" },
        { num: "05", name: "Technical Design", desc: "Working drawings 1:50 to 1:1, structural & MEP integration", norm: "DIN / VDI" },
        { num: "06", name: "Procurement Preparation", desc: "VOB-compliant bills of quantities & tender specifications", norm: "VOB/A" },
        { num: "07", name: "Tendering & Award", desc: "Objective bid evaluation, price comparison & contractor negotiations", norm: "VOB" },
        { num: "08", name: "Site Supervision", desc: "On-site quality assurance, schedule adherence & defect control", norm: "LBO / VOB/B" },
        { num: "09", name: "Handover & Closeout", desc: "Formal commissioning, defect remediation & warranty management", norm: "BGB / VOB" },
      ],
    },
    vob: {
      badge: "DE Standard",
      title: "German VOB Compliance",
      subtitle: "Construction Contract Procedures",
      guaranteeBadge: "100% Defect & Legal Protection",
      pillars: [
        {
          part: "VOB/A",
          title: "Tendering & Awarding",
          desc: "Transparent contractor pricing without hidden fees",
        },
        {
          part: "VOB/B",
          title: "Contract Execution",
          desc: "Binding milestone schedules and dispute prevention",
        },
        {
          part: "VOB/C",
          title: "Technical Standards",
          desc: "Strict DIN compliance and active defect prevention",
        },
      ],
    },
    caseStudies: {
      badge: "VERIFIED CLIENT EXPERIENCES",
      title: "5.0 Stars Google Reviews",
      subtitle: "Testimonials from private builders, developers, and municipal clients across Germany.",
      googleRating: "5.0",
      reviewsCount: "100% Recommendation Rate",
      allReviews: "View All Reviews",
      viewCaseStudy: "Read Case Study",
    },
    projects: {
      badge: "Featured Projects",
      viewAll: "View All Projects",
      items: [
        {
          title: "Commercial & Office Complex",
          location: "Frankfurt am Main, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
        },
        {
          title: "Residential Development",
          location: "Wiesbaden, Germany",
          image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        },
        {
          title: "Educational Campus",
          location: "Darmstadt, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg",
        },
      ],
    },
    projectsPage: {
      backToHome: "Back to Home",
      badge: "PROJECT PORTFOLIO",
      title: "Selected Architecture & Urban Planning Projects.",
      subtitle: "From statutory master zoning and mixed-use commercial hubs to bespoke residential and civic developments.",
      filterAll: "All Projects",
      filterUrban: "Urban & Master Planning",
      filterResidential: "Residential",
      filterCommercial: "Commercial & Mixed-Use",
      filterEducation: "Civic & Education",
      filterSustainability: "Sustainability & QNG",
      viewDetails: "View Project Details",
      ctaTitle: "Planning a New Building Project?",
      ctaSubtitle: "Gain immediate statutory clarity and full-lifecycle HOAI architecture execution.",
      ctaButton: "Book Consultation →",
    },
    projectDetail: {
      backToProjects: "Back to Projects Overview",
      clientLabel: "Client & Project Partner",
      locationLabel: "Location",
      legalBasisLabel: "Statutory Legal Basis",
      yearLabel: "Year / Status",
      scopeLabel: "Scope of Architecture",
      highlightsTitle: "PROJECT HIGHLIGHTS",
      challengeTitle: "1. Initial Situation & Urban Planning Challenge",
      objectiveTitle: "2. Objectives & Statutory Classification",
      conceptTitle: "3. Architectural & Spatial Concept",
      outcomeTitle: "4. Result & Value for Client and Municipality",
      officialDocsTitle: "OFFICIAL STATUTORY DOCUMENTS",
      bindingNotice: "Legally binding statutes and statutory justifications according to German BauGB/LBO.",
      inquiryHeading: "Planning a Similar Development?",
      inquirySub: "Let us review statutory feasibility and urban planning potential for your site.",
      inquiryButton: "Schedule Initial Consultation →",
      allProjectsButton: "View All Projects",
    },
    research: {
      badge: "ACADEMIA & RESEARCH",
      title: "Research, Teaching & Academia",
      subtitle: "Official academic lectureship at Frankfurt University of Applied Sciences (Frankfurt UAS) in Architecture & Urban Planning.",
      academicRole: "Academic Lecturer & Thesis Supervisor",
      institution: "Frankfurt University of Applied Sciences",
      viewTheses: "View Research Papers & Supervised Theses →",
      backToHome: "Back to Home",
      thesesTitle: "Academic Research & Publications",
      thesesSubtitle: "Applied cutting-edge research and supervision of Master and Bachelor theses at Frankfurt University of Applied Sciences.",
      statTheses: "7+",
      statThesesLabel: "Publications & Theses",
      statFields: "5+",
      statFieldsLabel: "Research Fields",
      statPractice: "100%",
      statPracticeLabel: "Practice Transfer",
      filterAll: "All Works",
      filterPub: "Publications",
      filterMaster: "Master Theses",
      filterBachelor: "Bachelor Theses",
      topicsLabel: "Topics:",
      academicFocus: "Academic Focus:",
      downloadPdf: "View Documentation / Abstract",
      ctaTitle: "Interested in Academic Research Cooperation?",
      ctaSubtitle: "We supervise practical research topics and thesis projects in partnership with Frankfurt UAS.",
      ctaButton: "Contact for Research Cooperation →",
    },
    founder: {
      badge: "Practice Principal",
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      roles: "Architect · Urban Planner · Frankfurt UAS Lecturer",
      bio: "With over 15 years of experience in architectural design, statutory permitting, and municipal building authority reviews, Majeed Shams steers complex building commissions with rigorous cost control and legal certainty.",
      button: "Read More About the Founder",
      stats: [
        { title: "15+ Years", desc: "Practical Experience" },
        { title: "100+ Projects", desc: "Successfully Built" },
        { title: "Research & Teaching", desc: "Frankfurt UAS Lecturer" },
        { title: "Municipal & Private", desc: "Statutory Expert" },
      ],
    },
    about: {
      badge: "PRACTICE PROFILE & VALUES",
      title: "Architecture, Urbanism & Construction Management with Passion.",
      subtitle: "We create sustainable living environments and legally binding building permits with precision and reliability.",
      backToHome: "Back to Home",
      profileBadge: "ABOUT THE PRACTICE",
      profileTitle: "Integrated Architectural & Planning Excellence for over 15 Years",
      profileText1: "Shams Consult stands for integrated architecture, forward-thinking urban planning, and rigorous quality-controlled construction delivery. For more than 15 years, we have delivered complex projects ranging from residential buildings to retail centers and municipal zoning plans.",
      profileText2: "Our methodology combines deep statutory building law knowledge with modern design aesthetics and strict cost control under DIN 276. As a registered practice with the Hessian Chamber of Architects (AKH), we hold full building permit authority across all 16 German federal states.",
      qualificationsBadge: "QUALIFICATIONS & REGULATORY ACCREDITATIONS",
      qualificationsTitle: "Regulatory Authority & Federal Certifications",
      akhRegistrationTitle: "Chamber Registration",
      akhRegistrationDesc: "Officially registered member of the Hessian Chamber of Architects and Urban Planners (AKH #21886) for architecture and urban planning.",
      qngTitle: "QNG & Federal LCA Expert",
      qngDesc: "Listed in the official Federal Energy Efficiency Expert Registry for Life Cycle Assessment (LCA) and QNG green building certification.",
      academiaTitle: "Academia & Teaching",
      academiaDesc: "Official academic lectureship at Frankfurt University of Applied Sciences in Architecture and Urban Planning.",
      teamBadge: "OUR EXPERT TEAM",
      teamTitle: "Meet Our Team of Professionals",
      teamSubtitle: "Our practice unifies experienced architects, urban planners, civil engineers, and computational specialists for integrated project delivery.",
      siteVisitsCtaBadge: "ON-SITE PRACTICE & FIELD EVIDENCE",
      siteVisitsCtaTitle: "Genuine On-Site Presence & Field Documentation",
      siteVisitsCtaDesc:
        "View authentic photographic proof of our practice: from millimeter-precise laser building surveys to hands-on site supervision under HOAI.",
      siteVisitsCtaButton: "View Field Documentation Album →",
      founderStoryBadge: "THE FOUNDER'S PERSONAL JOURNEY",
      founderStoryTitle: "Would you like to read Majeed Shams' personal story?",
      founderStoryDesc: "From refugee to successful architect, urban planner, and university lecturer in Germany.",
      founderStoryButton: "Read Founder Biography →",
    },
    siteVisitsPage: {
      backToHome: "Back to Home",
      badge: "ON-SITE PRACTICE & FIELD PROOF",
      title: "Authentic Site Visits & Real-World Documentation",
      subtitle:
        "Architecture requires true on-site presence. Explore unedited photographic records from our daily practice—from initial building surveys to HOAI site supervision.",
      proofNotice: "Unedited original field photographs from ongoing building sites and client walkthroughs.",
      viewHighRes: "View Full Resolution",
      viewAlbum: "View Photo Documentation & Album",
      closeLightbox: "Close",
      photoRecordLabel: "Photo Record",
      prev: "← Previous",
      next: "Next →",
      ctaTitle: "Planning an On-Site Project or Development?",
      ctaSubtitle:
        "We are pleased to survey your plot or building in person for accurate measurements and early zoning appraisals.",
      ctaButton: "Schedule On-Site Consultation →",
      items: [
        {
          id: "residential-excavation",
          image: "/images/partners/site-visits/shams-vor-ort-aussenanlagen-bauleitung-wohnungsbau.png",
          tag: "Residential Complex",
          phase: "HOAI Phase 8: Site Supervision & Landscape",
          title: "Site Supervision & Landscape Works for Housing Complex",
          desc: "On-site coordination of earthworks and paving for a multi-family housing development: direct technical alignment with contractors.",
        },
        {
          id: "client-dialogue",
          image: "/images/partners/site-visits/shams-vor-ort-bauherrenberatung.jpg",
          tag: "On-Site Consultation",
          phase: "HOAI Phase 1",
          title: "Personal Client Dialogue & Trust Building",
          desc: "Direct eye-level dialogue during an on-site property walkthrough: reviewing building intentions and zoning potential.",
        },
        {
          id: "industrial-safety",
          image: "/images/partners/site-visits/shams-vor-ort-gewerbehalle-begutachtung-helm.jpg",
          tag: "Commercial Project",
          phase: "HOAI Phase 8: Site Supervision & Structural Survey",
          title: "Commercial Facility: Technical Survey & Safety Inspection",
          desc: "Dipl.-Ing. Majeed Shams surveying industrial facility doors, structural access, and building condition with helmet and high-vis vest.",
        },
        {
          id: "building-survey",
          image: "/images/partners/site-visits/shams-vor-ort-bestandsaufnahme-messung.jpg",
          tag: "Building Survey",
          phase: "HOAI Phase 1: Inception & Briefing",
          title: "Technical Building Survey & Laser Measurement",
          desc: "Accurate manual and laser measurement of room geometry and existing structures to generate reliable as-built drawings.",
        },
        {
          id: "project-strategy",
          image: "/images/partners/site-visits/shams-vor-ort-projektbesprechung-plaene.jpg",
          tag: "Project Strategy",
          phase: "HOAI Phase 2 & 3: Developed Design",
          title: "Project Consultation & Plan Review",
          desc: "In-depth review of architectural and zoning drawings with clients and investors in a dedicated planning meeting.",
        },
        {
          id: "commercial-handshake",
          image: "/images/partners/site-visits/shams-vor-ort-handschlag-gewerbebau.png",
          tag: "Commercial Project",
          phase: "HOAI Phase 1 & 8",
          title: "Trusted Handshake at Commercial Facility",
          desc: "Dipl.-Ing. Majeed Shams concluding an on-site inspection and strategic alignment outside the logistics facility.",
        },
        {
          id: "site-supervision",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenbegehung-sicherheitsweste.png",
          tag: "Site Supervision",
          phase: "HOAI Phase 8: Site Supervision & VOB",
          title: "On-Site Inspection with Safety Equipment",
          desc: "On-site quality and safety control with high-vis vest and helmet: technical inspection of facility access and storage areas.",
        },
        {
          id: "ground-measurement",
          image: "/images/partners/site-visits/shams-vor-ort-asphaltierung-hoehung-messung.jpg",
          tag: "Site Works & Paving",
          phase: "HOAI Phase 8: Site Supervision",
          title: "Precision Level Inspection & Courtyard Paving Survey",
          desc: "Dipl.-Ing. Majeed Shams conducting on-site elevation and slope checks for newly asphalted access ways with the site contractor.",
        },
        {
          id: "site-coordination-residential",
          image: "/images/partners/site-visits/shams-vor-ort-baustellenkoordination-wohnungsbau.jpg",
          tag: "Residential Coordination",
          phase: "HOAI Phase 8: Site Supervision",
          title: "On-Site Construction Coordination for Housing Complex",
          desc: "Direct technical coordination of construction sequencing and earthworks on-site in front of the multi-family apartment building.",
        },
      ],
    },
    blog: {
      badge: "MAGAZINE & ARTICLES",
      title: "Latest Insights in Architecture, Building Law & Urbanism",
      subtitle: "In-depth expert analyses, statutory guidelines, and practical insights from our daily planning practice.",
      viewAll: "View All Articles",
      readMore: "Read Full Article",
      allTopics: "All Topics",
      searchPlaceholder: "Search articles by keyword...",
      noResults: "No articles found matching this term.",
      resetFilters: "Reset filters",
      backToHome: "Back to Home",
      backToBlog: "Back to Magazine",
      availableArticles: "Articles available",
      authorName: "Dipl.-Ing. Majeed Shams",
      authorRole: "Practice Principal · Architect · Urban Planner · Frankfurt UAS Lecturer",
      moreArticles: "More Articles",
      relatedTopics: "Related Topics",
      ctaHeading: "Have a Question on Building Law or Planning?",
      ctaSubheading: "Let's discuss your project parameters in a structured consultation.",
      ctaButton: "Request Consultation →",
      prev: "Previous",
      next: "Next",
      pauseScroll: "Pause Scroll",
      startScroll: "Resume Scroll",
    },
    contact: {
      badge: "Expert Consultation · 100% Credited Towards Project Order",
      headlinePart1: "Start Your Project with ",
      headlineHighlight: "Clarity",
      subtitle: "Book your personal 30–60 minute architectural and planning consultation with our founder & principal. The fee of €185 (+ VAT) is 100% credited towards your project contract.",
      calendarCardTitle: "ONLINE APPOINTMENT BOOKING",
      calendarCardHeading: "Select Your Preferred Time Slot in the Calendar",
      calendarCardDesc: "Choose your preferred time slot in our Microsoft 365 calendar for a 30–60 minute direct consultation with our principal (by phone or Microsoft Teams). The consultation fee is fully credited to your subsequent project commission.",
      calendarCardButton: "Select Time Slot in Calendar →",
      calendarCardBenefits: [
        "30–60 minutes in-depth technical consultation with the practice principal",
        "Statutory planning review (Zoning / § 34 BauGB / QNG sustainability)",
        "100% credit of the fee (€185 + VAT) against your subsequent contract",
      ],
      emailCardTitle: "Email the Architecture Practice",
      emailCardDesc: "Send us your project documents, drawings, or initial questions directly by email.",
      emailCardButton: "Email office@shams-consult.de →",
      whatsappTitle: "Quick Question via WhatsApp?",
      whatsappDesc: "Message us directly with preliminary property details or photos of your building plot.",
      whatsappButton: "Start WhatsApp Chat →",
      whatsappMessage: "Hello Mr. Shams, I would like to request an initial consultation for my building project.",
      phoneCardTitle: "Direct Telephone Consultation",
      phoneCardDesc: "Call us directly during office hours at our Frankfurt or Rödermark offices.",
      liveCalendar: "Live Calendar",
      onlineStatus: "Online",
      getDirections: "Open Route in Google Maps ↗",
      mapTabLabel: "Locations",
      directPhone: "+49 (0) 6074 8056262",
      officesTitle: "Our Practice Offices",
      officesSubtitle: "Frankfurt am Main & Rödermark",
      insuranceReassurance: "Statutory Professional Indemnity (§ 16 HASG) · Full Safety",
    },
    mobileActionBar: {
      call: "Call",
      whatsapp: "WhatsApp",
      book: "Book Consultation",
    },
    legal: {
      backToHome: "Back to Home",
      impressumTitle: "Legal Notice (Impressum)",
      datenschutzTitle: "Privacy Policy (Datenschutz)",
      barrierefreiheitTitle: "Accessibility Statement",
      widerrufTitle: "Right of Withdrawal & Model Form",
      close: "Close",
      informationProvider: "Information Pursuant to § 5 TMG / § 18 MStV",
      owner: "Principal & Owner",
      contact: "Contact Information",
      chamber: "Competent Chamber & Professional Regulations",
      insurance: "Professional Indemnity Insurance",
      responsibleAuthority: "Competent Supervisory Authority",
    },
    footer: {
      description:
        "Shams Consult is your trusted architectural practice for structural design, urban planning, and project development in the Rhine-Main region and nationwide.",
      quickLinksTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      followTitle: "Networks",
      brandTagline: "Architecture · Urban Planning · Project Development",
      legalImpressum: "Legal Notice",
      legalDatenschutz: "Privacy Policy",
      legalBarrierefreiheit: "Accessibility",
      legalWiderruf: "Withdrawal",
      developedBy: "Developed with ❤️ in Germany by",
      rights: "All rights reserved.",
    },
    notFound: {
      badge: "404 Error",
      title: "Page Not Found",
      message:
        "The page you requested does not exist or may have been moved as part of our recent website update.",
      requestedPathLabel: "Requested URL path:",
      backHome: "Back to Home",
      exploreProjects: "Explore Projects",
      aboutUs: "About Shams Consult",
      contactUs: "Contact & Consultation",
      needAssistance: "Have questions or looking for a specific project? We are happy to assist you.",
    },
  },
};
