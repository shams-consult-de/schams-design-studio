export type Language = "de" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
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
  metrics: {
    yearsExp: { value: string; label: string };
    completedProjects: { value: string; label: string };
    experts: { value: string; label: string };
    largestProject: { value: string; label: string };
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
  projects: {
    badge: string;
    viewAll: string;
    items: Array<{
      title: string;
      location: string;
      image: string;
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
  premiumTestimonials: {
    badge: string;
    heading: string;
    subtitle: string;
    featured: {
      quote: string;
      project: string;
      location: string;
      badges: string[];
      button: string;
    };
    founder: {
      name: string;
      title: string;
      quote: string;
      referralQuote: string;
    };
    reviews: Array<{
      quote: string;
      client: string;
      projectType: string;
    }>;
    trustBanner: {
      tagline: string;
      statement: string;
    };
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  trustedBy: {
    badge: string;
    quotes: Array<{
      quote: string;
      author: string;
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
    rights: string;
  };
}

export const content: Record<Language, Translations> = {
  de: {
    nav: {
      home: "Start",
      about: "Über uns",
      services: "Leistungen",
      projects: "Projekte",
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
    metrics: {
      yearsExp: { value: "15+", label: "Jahre Erfahrung" },
      completedProjects: { value: "100+", label: "Realisierte Projekte" },
      experts: { value: "16", label: "Team aus 16 Architekten & Fachplanern" },
      largestProject: { value: "€13,5 Mio.", label: "Größtes Projektvolumen" },
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
    premiumTestimonials: {
      badge: "CLIENT FEEDBACK",
      heading: "Vertrauen von Bauherren, Investoren und Bauträgern in ganz Deutschland.",
      subtitle:
        "Unsere Auftraggeber schätzen Präzision, Transparenz und langfristige Partnerschaften. Jedes Projekt spiegelt unseren Anspruch an durchdachte Planung und erfolgreiche Umsetzung wider.",
      featured: {
        quote:
          "Shams Consult war das einzige Architekturbüro, das es geschafft hat, unser Projekt nach jahrelangen erfolglosen Versuchen mit anderen Architekten behördlich genehmigen zu lassen.",
        project: "Wohnungsbau & Mehrfamilienhaus",
        location: "Frankfurt am Main, Deutschland",
        badges: ["Baugenehmigung erwirkt", "Geschosswohnungsbau", "Erfolgreiche Baurechtschaffung"],
        button: "Erfolgsgeschichte lesen",
      },
      founder: {
        name: "Majeed Shams",
        title: "Architekt · Stadtplaner · Büroinhaber",
        quote: "„Wir messen unseren Erfolg am Vertrauen, das unsere Bauherren in uns setzen.“",
        referralQuote: "„Wir sind stolz darauf, dass der Großteil unserer Aufträge aus Weiterempfehlungen entsteht.“",
      },
      reviews: [
        {
          quote: "Professionelle und verlässliche Begleitung über den gesamten Projektverlauf hinweg.",
          client: "Privater Bauherr",
          projectType: "Einfamilienhaus & Wohnungsbau",
        },
        {
          quote: "Herausragende Expertise im Bauplanungsrecht und behördlichen Genehmigungsverfahren.",
          client: "Gewerblicher Bauträger",
          projectType: "Gewerbe- & Wohnkomplex",
        },
        {
          quote: "Verlässlicher Partner von der ersten Konzeptskizze bis zur schlüsselfertigen Übergabe.",
          client: "Kommunale Institution",
          projectType: "Städtebauliche Rahmenplanung",
        },
      ],
      trustBanner: {
        tagline: "VERTRAUEN DURCH ERGEBNISSE",
        statement: "Die Beziehungen, die wir aufbauen, sind genauso wichtig wie die Gebäude, die wir entwerfen.",
      },
      stats: [
        { value: "98%", label: "Kundenzufriedenheit" },
        { value: "100+", label: "Realisierte Projekte" },
        { value: "15+", label: "Jahre Erfahrung" },
        { value: "100%", label: "Persönlicher Einsatz" },
      ],
    },
    trustedBy: {
      badge: "VERTRAUEN AUS DER PRAXIS",
      quotes: [
        {
          quote:
            "Shams Consult hat unserem komplexen Bauvorhaben Struktur, Klarheit und zügige Genehmigungssicherheit verliehen.",
          author: "Stadt Offenbach am Main",
        },
        {
          quote:
            "Die Fachkompetenz im Bauplanungsrecht und der Genehmigungsbegleitung ist herausragend. Uneingeschränkt zu empfehlen.",
          author: "Privater Bauträger",
        },
        {
          quote:
            "Ein verlässlicher Partner, der messbare Ergebnisse liefert und bleibende Werte für Bauherren schafft.",
          author: "Investorengruppe",
        },
      ],
    },
    blog: {
      badge: "Magazin & Fachwissen",
      title: "Architektur, Nachhaltigkeit & Raumgestaltung.",
      subtitle: "Fundierte Fachbeiträge und Planungsprinzipien unseres Gründers zu kreislaufgerechtem Bauen, QNG-Zertifizierung und Raumwirkung.",
      viewAll: "Alle Artikel lesen",
      readMore: "Artikel lesen",
      allTopics: "Alle Themen",
      searchPlaceholder: "Artikel durchsuchen...",
      noResults: "Keine passenden Artikel gefunden.",
      resetFilters: "Filter zurücksetzen",
      backToHome: "Zurück zur Startseite",
      backToBlog: "Zurück zur Übersicht",
      availableArticles: "Fachartikel verfügbar",
      authorName: "Gründer & Architekt",
      authorRole: "Architekt & Stadtplaner AKH",
      moreArticles: "Weitere Beiträge",
      relatedTopics: "Ähnliche Fachthemen",
      ctaHeading: "Haben Sie ein konkretes Bau- oder Planungsvorhaben?",
      ctaSubheading: "Vereinbaren Sie ein unverbindliches Erstgespräch für Architektur, Stadtplanung oder QNG-Nachhaltigkeitszertifizierung.",
      ctaButton: "Erstberatung anfragen",
      prev: "Zurück",
      next: "Weiter",
      pauseScroll: "Auto-Scroll pausieren",
      startScroll: "Auto-Scroll starten",
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
      mapTabLabel: "Interaktive Anfahrtskarte",
      directPhone: "Telefonische Direktdurchwahl",
      officesTitle: "Unsere Bürostandorte & Anfahrt",
      officesSubtitle: "Zwei Standorte für optimale Erreichbarkeit im gesamten Rhein-Main-Gebiet.",
    },
    footer: {
      description:
        "Architektur- und Stadtplanungsbüro mit fundierter Erfahrung für private Bauherren, Bauträger und Kommunen in Frankfurt & Rhein-Main.",
      quickLinksTitle: "NAVIGATION",
      servicesTitle: "LEISTUNGEN",
      contactTitle: "KONTAKT",
      followTitle: "FOLGEN SIE UNS",
      brandTagline: "Architektur · Stadtplanung · Projektentwicklung",
      legalImpressum: "Impressum",
      legalDatenschutz: "Datenschutz",
      legalBarrierefreiheit: "Barrierefreiheit",
      legalWiderruf: "Widerruf",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      caseStudies: "Case Studies",
      process: "Process",
      blog: "Blog",
      contact: "Contact",
      bookConsultation: "Book consultation",
    },
    hero: {
      titlePart1: "The relationships we build are just as important",
      titleHighlight: "as the buildings we design.",
      subtitle:
        "Architecture, Urban Planning and Project Development for public institutions, investors and private clients.",
      philosophyStatement:
        "The relationships we build are just as important as the buildings we design.",
      bookConsultation: "Book consultation",
      viewProjects: "View projects",
      founderName: "Dipl.-Ing. Majeed Shams",
      founderTitle: "Architect · Urban Planner",
      founderRole: "Researcher · Founder",
      founderCompany: "Shams Consult",
      founderStoryCta: "Read Founder's Story & Journey →",
      trustBadges: [
        { label: "AKH Chamber Reg.", detail: "Registered German Architect & Planner" },
        { label: "HOAI 1–9 & VOB", detail: "Full Statutory Tariff Compliance" },
        { label: "DIN 276 Standards", detail: "German Cost & Precision Control" },
        { label: "Frankfurt University of Applied Sciences", detail: "Lecturer in Urban Architecture" },
      ],
    },
    metrics: {
      yearsExp: { value: "15+", label: "Years Experience" },
      completedProjects: { value: "100+", label: "Completed Projects" },
      experts: { value: "16", label: "Team of 16 Architecture Experts" },
      largestProject: { value: "€13.5M", label: "Largest Project" },
    },
    services: {
      badge: "What we do",
      title: "Architecture, Urban Planning & Project Development",
      viewAll: "View all services",
      items: [
        {
          title: "Architecture",
          desc: "Designing buildings that perform beautifully and sustainably for decades.",
        },
        {
          title: "Urban Planning",
          desc: "Creating sustainable places where communities and business grow and thrive.",
        },
        {
          title: "Project Development",
          desc: "Reducing investment risk through strategic planning and project management.",
        },
        {
          title: "Due Diligence",
          desc: "Helping investors make informed decisions with authoritative regulatory analysis.",
        },
      ],
    },
    projects: {
      badge: "Featured projects",
      viewAll: "View all projects",
      items: [
        {
          title: "Business Complex",
          location: "Frankfurt, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
        },
        {
          title: "Residential Development",
          location: "Wiesbaden, Germany",
          image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
        },
        {
          title: "Education Campus",
          location: "Darmstadt, Germany",
          image: "/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg",
        },
      ],
    },
    process: {
      badge: "HOAI service phases 1–9",
      titlePart1: "Structured delivery through",
      titlePart2: "the 9 HOAI phases.",
      subtitle: "From initial site evaluation to turnkey handover — legally compliant under the official German architect tariff.",
      steps: [
        { num: "01", name: "Basic Evaluation", desc: "Requirements analysis, site assessment & statutory brief", norm: "HOAI § 34" },
        { num: "02", name: "Preliminary Design", desc: "Concept sketches, feasibility & cost estimation (DIN 276)", norm: "DIN 276" },
        { num: "03", name: "Integrated Design", desc: "Coordinated architectural design & binding cost calculation", norm: "DIN 276" },
        { num: "04", name: "Permit Application", desc: "Building permit submission under German building codes (HBO/LBO)", norm: "HBO / LBO" },
        { num: "05", name: "Working Drawings", desc: "Detailed construction plans (1:50 to 1:1) & technical coordination", norm: "DIN / VDI" },
        { num: "06", name: "Tender Preparation", desc: "VOB-compliant bill of quantities & performance specifications", norm: "VOB/A" },
        { num: "07", name: "Contract Awarding", desc: "Neutral bid evaluation, price leveling & contractor negotiations", norm: "VOB" },
        { num: "08", name: "Site Supervision", desc: "On-site German construction management, quality & schedule control", norm: "LBO / VOB/B" },
        { num: "09", name: "Project Handover", desc: "Official handover inspection, warranty tracking & documentation", norm: "BGB / VOB" },
      ],
    },
    founder: {
      badge: "Founder",
      name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
      roles: "Architect · Urban Planner · Researcher",
      bio: "With over 15 years of experience in planning and municipal building authorities, Majeed Shams has helped investors, municipalities and developers bring ambitious projects to life across Germany and beyond.",
      button: "Read more about founder",
      stats: [
        { title: "15+ Years", desc: "of Experience" },
        { title: "100+ Projects", desc: "Delivered" },
        { title: "Research & Teaching", desc: "Frankfurt UAS Lecturer" },
        { title: "Public & Private", desc: "Sector Expert" },
      ],
    },
    premiumTestimonials: {
      badge: "Client feedback",
      heading: "Trusted by homeowners, investors and developers across Germany.",
      subtitle:
        "Our clients value precision, transparency and long-term partnerships. Every project reflects our commitment to thoughtful planning and successful execution.",
      featured: {
        quote:
          "Shams Consult was the only architectural office that managed to get our project approved after years of unsuccessful attempts with other architects.",
        project: "Apartment Development",
        location: "Frankfurt, Germany",
        badges: ["Building Approval", "Residential Development", "Successful Planning"],
        button: "Read full story",
      },
      founder: {
        name: "Majeed Shams",
        title: "Architect · Urban Planner · Founder",
        quote: "“We measure success by the trust our clients place in us.”",
        referralQuote: "“We're proud that most of our work comes from referrals.”",
      },
      reviews: [
        {
          quote: "Professional guidance throughout the entire project.",
          client: "Residential Client",
          projectType: "Single & Multi-Family Housing",
        },
        {
          quote: "Outstanding expertise in planning and regulations.",
          client: "Commercial Project",
          projectType: "Mixed-Use Development",
        },
        {
          quote: "Reliable partner from concept to completion.",
          client: "Urban Development",
          projectType: "Master Planning & Zoning",
        },
      ],
      trustBanner: {
        tagline: "Trust built through results",
        statement: "The relationships we build are just as important as the buildings we design.",
      },
      stats: [
        { value: "98%", label: "Client Satisfaction" },
        { value: "100+", label: "Completed Projects" },
        { value: "15+", label: "Years Experience" },
        { value: "100%", label: "Personal Commitment" },
      ],
    },
    trustedBy: {
      badge: "Trusted by partners",
      quotes: [
        {
          quote:
            "Shams Consult brought clarity, structure and excellence to our complex project.",
          author: "City of Offenbach",
        },
        {
          quote:
            "Their expertise in planning and regulations is outstanding. Highly recommended.",
          author: "Private Developer",
        },
        {
          quote:
            "A reliable partner who delivers results and creates lasting value.",
          author: "Investment Group",
        },
      ],
    },
    blog: {
      badge: "Magazine & insights",
      title: "Architecture, Sustainability & Spatial Design.",
      subtitle: "In-depth expert essays and planning insights by our founder on circular construction, QNG certification, and spatial design.",
      viewAll: "View all articles",
      readMore: "Read article",
      allTopics: "All Topics",
      searchPlaceholder: "Search articles...",
      noResults: "No matching articles found.",
      resetFilters: "Reset filters",
      backToHome: "Back to Home",
      backToBlog: "Back to Blog",
      availableArticles: "Articles Available",
      authorName: "Founder & Architect",
      authorRole: "Architect & Urban Planner",
      moreArticles: "More articles",
      relatedTopics: "Related Topics",
      ctaHeading: "Do you have a specific construction or planning project?",
      ctaSubheading: "Schedule an introductory consultation for architecture, urban development, or QNG sustainability certification.",
      ctaButton: "Request Consultation",
      prev: "Prev",
      next: "Next",
      pauseScroll: "Pause scroll",
      startScroll: "Start scroll",
    },
    contact: {
      badge: "Expert Consultation · 100% Credited Toward Project Contract",
      headlinePart1: "Start your project with ",
      headlineHighlight: "clarity",
      subtitle: "Book your 30–60 minute architectural and planning consultation with our founder & managing principal. The €185 (+ VAT) expense allowance is fully credited as a balance toward your project commission.",
      calendarCardTitle: "ONLINE BOOKING",
      calendarCardHeading: "Book your preferred time slot directly",
      calendarCardDesc: "Choose your preferred slot in our Microsoft 365 calendar for a 30–60 min consultation with our founder (phone or Teams). The €185 (+ VAT) allowance is 100% credited toward your project commission.",
      calendarCardButton: "Select free slot in calendar →",
      calendarCardBenefits: [
        "30–60 minutes in-depth consultation with our founder",
        "Review of zoning regulations, building code & sustainability options",
        "100% fee credit (€185 + VAT) applied toward your subsequent project commission",
      ],
      emailCardTitle: "Email the Architecture Office",
      emailCardDesc: "Send us your project documents, blueprints, or inquiries directly via email.",
      emailCardButton: "Write email to office@shams-consult.de →",
      whatsappTitle: "Quick question via WhatsApp?",
      whatsappDesc: "Send us a direct message with initial details or photos of your plot.",
      whatsappButton: "Start WhatsApp Chat →",
      whatsappMessage: "Hello Mr. Shams, I would like to request an initial consultation for my building project.",
      phoneCardTitle: "Telephone Consultation",
      phoneCardDesc: "Call us directly during office hours in Frankfurt or Rödermark.",
      liveCalendar: "Live Calendar",
      onlineStatus: "Online",
      getDirections: "Open Directions in Google Maps ↗",
      mapTabLabel: "Interactive Location Map",
      directPhone: "Direct Phone Line",
      officesTitle: "Our Office Locations & Directions",
      officesSubtitle: "Two strategic locations serving Frankfurt and the wider Rhine-Main metropolitan region.",
    },
    footer: {
      description:
        "Planning office for architecture and urban planning with deep regulatory experience for private clients, developers, and municipalities.",
      quickLinksTitle: "QUICK LINKS",
      servicesTitle: "SERVICES",
      contactTitle: "CONTACT",
      followTitle: "FOLLOW US",
      brandTagline: "Architecture · Urban Planning · Project Development",
      legalImpressum: "Legal Notice (Impressum)",
      legalDatenschutz: "Privacy Policy",
      legalBarrierefreiheit: "Accessibility",
      legalWiderruf: "Right of Withdrawal",
      rights: "All rights reserved.",
    },
  },
};
