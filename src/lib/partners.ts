export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
  tagline: {
    de: string;
    en: string;
  };
  title: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
  jointProject: {
    de: string;
    en: string;
  };
  projectYear?: string;
  location?: {
    de: string;
    en: string;
  };
  projectSlug?: string;
  newsUrl?: string;
  newsTitle?: {
    de: string;
    en: string;
  };
}

export const partnersData: PartnerItem[] = [
  {
    id: "netto",
    name: "Netto Marken-Discount",
    logo: "/images/partners/netto.svg",
    websiteUrl: "https://www.netto-online.de",
    tagline: {
      de: "Einzelhandel & Nahversorgung",
      en: "Retail & Neighborhood Centers",
    },
    title: {
      de: "Netto Marken-Discount – Nahversorgungszentrum mit Wohnungsbau",
      en: "Netto Marken-Discount – Community Retail & Residential Development",
    },
    description: {
      de: "Netto Marken-Discount gehört mit über 4.300 Filialen zu den führenden Lebensmitteleinzelhändlern in Deutschland.",
      en: "Netto Marken-Discount is one of Germany's leading grocery retailers with over 4,300 stores nationwide.",
    },
    jointProject: {
      de: "Ausführungsplanung (HOAI LPH 5) für einen modernen Supermarkt mit 22 integrierten Wohneinheiten, Bäckerei, begrüntem Innenhof und Tiefgarage in Münster (Hessen).",
      en: "Executive working design (HOAI Phase 5) for a state-of-the-art supermarket featuring 22 integrated apartments, bakery, landscaped courtyard, and underground parking in Münster (Hesse).",
    },
    projectYear: "2023–2024",
    location: {
      de: "Münster (Hessen)",
      en: "Münster (Hesse)",
    },
    projectSlug: "supermarkt-muenster",
  },
  {
    id: "bima",
    name: "Bundesanstalt für Immobilienaufgaben (BImA)",
    logo: "/images/partners/bima.svg",
    websiteUrl: "https://www.bundesimmobilien.de",
    tagline: {
      de: "Bundesimmobilien & Bundesbehörden",
      en: "Federal Real Estate & Authorities",
    },
    title: {
      de: "BImA Berlin – Behördenzentrum des Bundes",
      en: "BImA Berlin – Federal Administrative Headquarters",
    },
    description: {
      de: "Die BImA ist das zentrale Immobilienunternehmen des Bundes und eine der größten Immobilieneigentümerinnen Deutschlands.",
      en: "BImA is the central real estate enterprise of the German Federal Government and one of Germany's largest property owners.",
    },
    jointProject: {
      de: "Planung und Genehmigungsbegleitung für ein Ausweichquartier für über 200 Bundesmitarbeitende eines Behördenzentrums in der Bundeshauptstadt Berlin in Kooperation mit Adapteo.",
      en: "Planning and statutory approval management for an interim facility housing over 200 federal staff in Berlin in partnership with Adapteo.",
    },
    projectYear: "2024–2025",
    location: {
      de: "Berlin",
      en: "Berlin",
    },
  },
  {
    id: "adapteo",
    name: "Adapteo Group",
    logo: "/images/partners/adapteo.png",
    websiteUrl: "https://adapteo.de/nachhaltigkeit",
    tagline: {
      de: "Modulare & zirkuläre Raumlösungen",
      en: "Modular & Circular Building Solutions",
    },
    title: {
      de: "Adapteo – Flexibles Bauen für öffentliche Einrichtungen",
      en: "Adapteo – Flexible Buildings for Public Institutions",
    },
    description: {
      de: "Adapteo ist ein führender europäischer Anbieter für modulare Gebäude und zirkuläre Bauweisen für Schulen, Kitas und Verwaltungen.",
      en: "Adapteo is a premier European provider of modular and circular construction solutions for educational, daycare, and administrative facilities.",
    },
    jointProject: {
      de: "Gemeinsame Realisierung eines hochmodernen Ausweichquartiers für über 200 Mitarbeitende eines Behördenzentrums in Berlin.",
      en: "Joint delivery of an advanced modular interim headquarters for over 200 staff at a federal agency complex in Berlin.",
    },
    projectYear: "2024–2025",
    location: {
      de: "Neu-Isenburg / Berlin",
      en: "Neu-Isenburg / Berlin",
    },
  },
  {
    id: "schoofs",
    name: "SCHOOFS Immobilien",
    logo: "/images/partners/schoofs.jpg",
    websiteUrl: "https://www.schoofs-immobilien.de/",
    tagline: {
      de: "Projektentwicklung & Mischnutzung",
      en: "Project Development & Mixed-Use",
    },
    title: {
      de: "SCHOOFS Immobilien – Lebensmitteleinzelhandel & Wohnungsbau",
      en: "SCHOOFS Immobilien – Retail & Residential Mixed-Use",
    },
    description: {
      de: "Schoofs Immobilien ist ein bundesweit führender Projektentwickler für moderne Einzelhandelsimmobilien und urbane Quartiere.",
      en: "Schoofs Immobilien is a leading nationwide developer specializing in retail parks and urban mixed-use quarters.",
    },
    jointProject: {
      de: "Architektonische Planung und Ausführungsplanung (LPH 5) für ein kombiniertes Nahversorgungs- und Wohnensemble in Hessen.",
      en: "Architectural and executive design (HOAI Phase 5) for a mixed-use retail and residential development in Hesse.",
    },
    location: {
      de: "Neu-Isenburg & Köln",
      en: "Neu-Isenburg & Cologne",
    },
  },
  {
    id: "stadt-ulm",
    name: "Stadt Ulm",
    logo: "/images/partners/stadt-ulm.svg",
    websiteUrl: "https://www.ulm.de",
    tagline: {
      de: "Kommunale Bauleitplanung & Städtebau",
      en: "Municipal Urban & Master Planning",
    },
    title: {
      de: "Stadt Ulm – Vorhabenbezogener Bebauungsplan Maienweg 2",
      en: "City of Ulm – Project-Based Binding Land-Use Plan Maienweg 2",
    },
    description: {
      de: "Die Universitätsstadt Ulm steht für zukunftsorientierte Stadtentwicklung und geordnete innerstädtische Nachverdichtung.",
      en: "The university city of Ulm is renowned for progressive urban development and sustainable inner-city densification.",
    },
    jointProject: {
      de: "Aufstellung des vorhabenbezogenen Bebauungsplans gem. § 12 / § 13a BauGB für eine harmonische Wohnbebauung im Stadtteil Söflingen.",
      en: "Development of the project-based binding land-use plan under § 12 / § 13a BauGB for a residential quarter in the Söflingen district.",
    },
    projectYear: "2023",
    location: {
      de: "Ulm (Baden-Württemberg)",
      en: "Ulm (Baden-Württemberg)",
    },
    projectSlug: "vep-maienweg-ulm",
  },
  {
    id: "giz",
    name: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    logo: "/images/partners/giz.svg",
    websiteUrl: "https://www.giz.de",
    tagline: {
      de: "Bundesunternehmen für internationale Zusammenarbeit",
      en: "Federal Agency for International Cooperation",
    },
    title: {
      de: "GIZ & BMZ – Städtebauliche Fachexpertisen",
      en: "GIZ & BMZ – Urban Planning & International Expertise",
    },
    description: {
      de: "Die GIZ arbeitet als Bundesunternehmen weltweit für eine nachhaltige Entwicklung im Auftrag der Bundesregierung (BMZ, Auswärtiges Amt).",
      en: "GIZ operates globally as a federal enterprise supporting sustainable international development on behalf of the German Federal Government.",
    },
    jointProject: {
      de: "Einsatz als CIM-Fachexperte für Stadtplanung, Baurecht und Wiederaufbau in internationalen Regierungsprojekten.",
      en: "Deployment as CIM senior expert for urban planning, statutory building law, and reconstruction in governmental projects.",
    },
    location: {
      de: "Bonn / Eschborn",
      en: "Bonn / Eschborn",
    },
  },
  {
    id: "stadtwerke-rodgau",
    name: "Stadtwerke Rodgau (KdöR)",
    logo: "/images/partners/stadtwerke-rodgau.jpg",
    websiteUrl: "https://www.stadtwerke-rodgau.de",
    tagline: {
      de: "Kommunale Infrastruktur & Umwelt",
      en: "Municipal Infrastructure & Environment",
    },
    title: {
      de: "Stadtwerke Rodgau – Ökologische Kommunalprojekte",
      en: "Stadtwerke Rodgau – Environmental Municipal Infrastructure",
    },
    description: {
      de: "Die Stadtwerke Rodgau sind ein kommunaler Eigenbetrieb der Stadt Rodgau für Infrastruktur und Umweltschutz.",
      en: "Stadtwerke Rodgau is the municipal utility of the City of Rodgau responsible for public utilities, infrastructure, and ecological management.",
    },
    jointProject: {
      de: "Erfolgreiche Genehmigungsplanung für die städtische Kompostierungs- und Umweltanlage.",
      en: "Permit and approval design for the municipal composting and environmental recycling facility.",
    },
    location: {
      de: "Rodgau (Kreis Offenbach)",
      en: "Rodgau (Offenbach District)",
    },
  },
  {
    id: "frankfurt-uas",
    name: "Frankfurt University of Applied Sciences",
    logo: "/images/partners/frankfurt-uas.jpg",
    websiteUrl: "https://www.frankfurt-university.de",
    tagline: {
      de: "Wissenschaft, Forschung & Lehre",
      en: "Science, Research & Academic Teaching",
    },
    title: {
      de: "Frankfurt UAS – Forschung & Lehre Fachbereich 1",
      en: "Frankfurt UAS – Academic Teaching & Urban Research",
    },
    description: {
      de: "Die Frankfurt UAS zeichnet sich durch Spitzenlehre am Fachbereich Architektur, Bauingenieurwesen und Geomatik aus.",
      en: "Frankfurt UAS excels in architectural education, structural engineering, and geomatics research.",
    },
    jointProject: {
      de: "Offizieller Lehrauftrag und praxisorientierte Betreuung von Master- und Bachelorabschlussarbeiten im Bereich Städtebau und Baurecht.",
      en: "Official academic lectureship and supervisory guidance for Master and Bachelor theses in urban design and building law.",
    },
    location: {
      de: "Frankfurt am Main",
      en: "Frankfurt am Main",
    },
  },
  {
    id: "stadt-neu-ulm",
    name: "Stadt Neu-Ulm",
    logo: "/images/partners/stadt-neu-ulm.svg",
    websiteUrl: "https://nu.neu-ulm.de",
    tagline: {
      de: "Städtebauliche Rahmenplanung",
      en: "Urban Framework Planning",
    },
    title: {
      de: "Stadt Neu-Ulm – Bebauungsplan M 115 „Baufeld 5 – OST“",
      en: "City of Neu-Ulm – Master Plan M 115 'Plot 5 – East'",
    },
    description: {
      de: "Große Kreisstadt an der Donau mit dynamischer städtebaulicher Entwicklungsachse.",
      en: "Major district city on the Danube river with dynamic urban development initiatives.",
    },
    jointProject: {
      de: "Städtebauliche Bebauungsplanung und Strukturkonzeption für ein innerstädtisches Entwicklungsfeld.",
      en: "Master planning, development concepts, and zoning documentation for a core urban development area.",
    },
    location: {
      de: "Neu-Ulm (Bayern)",
      en: "Neu-Ulm (Bavaria)",
    },
    projectSlug: "vep-baufeld-5-neu-ulm",
  },
  {
    id: "stadt-guenzburg",
    name: "Stadt Günzburg",
    logo: "/images/partners/stadt-guenzburg.svg",
    websiteUrl: "https://www.guenzburg.de",
    tagline: {
      de: "Vorhabenbezogene Bebauungspläne",
      en: "Project-Based Master Plans",
    },
    title: {
      de: "Stadt Günzburg – VEP Alten- und Pflegeheim Spital",
      en: "City of Günzburg – Project-Based Plan for Senior Living Spital",
    },
    description: {
      de: "Historische Kreisstadt in Bayerisch-Schwaben mit aktiver Stadtentwicklungspolitik.",
      en: "Historic district town in Bavarian Swabia with an active sustainable development agenda.",
    },
    jointProject: {
      de: "Vorhabenbezogene Bebauungspläne für moderne Pflege- und Sozialeinrichtungen sowie gemischte Quartiersentwicklung.",
      en: "Project-based binding land-use plans for modern elderly care facilities and mixed-use urban regeneration.",
    },
    location: {
      de: "Günzburg (Bayern)",
      en: "Günzburg (Bavaria)",
    },
    projectSlug: "vep-spital-guenzburg",
  },
  {
    id: "instinkt",
    name: "INSTINKT Wohnraumberatung GmbH",
    logo: "/images/partners/instinkt.jpg",
    websiteUrl: "https://de.linkedin.com/company/instinkt-wohnraumberatung-gmbh",
    tagline: {
      de: "Wohnungs- & Reihenhausbau",
      en: "Residential & Townhouse Construction",
    },
    title: {
      de: "INSTINKT – Moderner Wohnungsbau im Rhein-Main-Gebiet",
      en: "INSTINKT – Contemporary Residential Housing in Rhine-Main",
    },
    description: {
      de: "Bauträger- und Wohnungsbaugesellschaft mit Sitz in Eschborn für hochwertige Wohnhäuser im Rhein-Main-Gebiet.",
      en: "Property developer and general contractor based in Eschborn specializing in quality residential buildings across Rhine-Main.",
    },
    jointProject: {
      de: "Architektonische Planung und Begleitung von drei innovativen Wohnbauprojekten im Rhein-Main-Gebiet.",
      en: "Architectural design and planning supervision for three residential developments in the Rhine-Main metropolitan area.",
    },
    location: {
      de: "Eschborn / Frankfurt",
      en: "Eschborn / Frankfurt",
    },
  },
  {
    id: "stadt-gersfeld",
    name: "Stadt Gersfeld (Rhön)",
    logo: "/images/partners/stadt-gersfeld.png",
    websiteUrl: "https://www.gersfeld.de",
    tagline: {
      de: "Qualifizierte Bebauungspläne",
      en: "Qualified Binding Land-Use Plans",
    },
    title: {
      de: "Stadt Gersfeld – Bebauungsplan „Töpfenmühle“",
      en: "City of Gersfeld – Binding Land-Use Plan 'Töpfenmühle'",
    },
    description: {
      de: "Heilklimatischer Kurort im Biosphärenreservat Rhön mit hohen Anforderungen an Landschafts- und Artenschutz.",
      en: "Climatic health resort in the Rhön UNESCO Biosphere Reserve with strict ecological and conservation standards.",
    },
    jointProject: {
      de: "Aufstellung des qualifizierten Bebauungsplans gem. § 30 Abs. 1 BauGB inklusive umfassender Umwelt- und Artenschutzprüfung.",
      en: "Drafting the qualified binding land-use plan pursuant to § 30 (1) BauGB including comprehensive environmental impact assessments.",
    },
    location: {
      de: "Gersfeld (Rhön, Hessen)",
      en: "Gersfeld (Rhön, Hesse)",
    },
    projectSlug: "vep-toepfenmuehle-gersfeld",
  },
  {
    id: "schemmerhofen",
    name: "Gemeinde Schemmerhofen",
    logo: "/images/partners/schemmerhofen.svg",
    websiteUrl: "https://www.schemmerhofen.de",
    tagline: {
      de: "Kommunale Bildungs- & Sozialbauten",
      en: "Municipal Educational & Community Buildings",
    },
    title: {
      de: "Gemeinde Schemmerhofen – Neubau Kindertagesstätte",
      en: "Municipality of Schemmerhofen – New Childcare & Daycare Center",
    },
    description: {
      de: "Zukunftsorientierte Gemeinde im Landkreis Biberach mit starkem Fokus auf Bildungsinfrastruktur.",
      en: "Progressive municipality in Biberach district with a strong investment focus on community and education.",
    },
    jointProject: {
      de: "Kindgerechter Neubau einer modernen Kindertagesstätte mit Freianlagenkonzept (LPH 1–4).",
      en: "Child-centric architectural design for a new early childhood education center and outdoor landscape (HOAI Phases 1–4).",
    },
    location: {
      de: "Schemmerhofen bei Ulm",
      en: "Schemmerhofen near Ulm",
    },
    projectSlug: "kindergarten-schemmerhofen",
  },
  {
    id: "fischer-bau",
    name: "Fischer-Bau GmbH",
    logo: "/images/partners/fischer-bau.png",
    websiteUrl: "https://fischerbau.de/",
    tagline: {
      de: "Massivhausbau, Gewerbe & Projektentwicklung",
      en: "Solid Construction, Commercial & Project Development",
    },
    title: {
      de: "Fischer-Bau – Nachhaltige Massivbauweise & Großprojekte",
      en: "Fischer-Bau – Sustainable Solid Construction & Major Projects",
    },
    description: {
      de: "Fischer-Bau steht seit Jahrzehnten für qualitätsvollen Massivhausbau, energieeffiziente Wohnquartiere und innovative Großprojekte.",
      en: "Fischer-Bau has stood for premium solid construction, energy-efficient residential neighborhoods, and major commercial projects for decades.",
    },
    jointProject: {
      de: "Architektur- und Bauleitplanung für zukunftsweisende Bauvorhaben und innovative Gewerbekonzepte, u. a. im Bereich moderner Rechenzentren mit nachhaltiger Abwärmenutzung.",
      en: "Architectural and zoning design for forward-looking developments and innovative commercial concepts, including modern data centers with sustainable waste-heat recovery.",
    },
    location: {
      de: "Hannover / Hessen",
      en: "Hannover / Hesse",
    },
    newsUrl:
      "https://www.hna.de/lokales/rotenburg-bebra/bebra-ort46578/bebra-it-rechenzentrum-bau-projekt-plan-konzept-idee-investition-news-94362529.html",
    newsTitle: {
      de: "HNA-Pressebericht: Rechenzentrum-Projekt Bebra",
      en: "HNA Press Article: Data Center Project Bebra",
    },
  },
  {
    id: "gemeinde-walluf",
    name: "Gemeinde Walluf",
    logo: "/images/partners/gemeinde-walluf.svg",
    websiteUrl: "https://www.walluf.de/",
    tagline: {
      de: "Kommunale Stadt- & Bauleitplanung",
      en: "Municipal Urban & Master Planning",
    },
    title: {
      de: "Gemeinde Walluf – Städtebauliche Entwicklung im Rheingau",
      en: "Municipality of Walluf – Urban Development in Rheingau",
    },
    description: {
      de: "Die hessische Rheingaugemeinde Walluf – die Pforte zum Rheingau – steht für traditionsreiche Baukultur und zukunftsorientierte Ortsentwicklung.",
      en: "The Hessian municipality of Walluf—the gateway to the Rheingau—combines rich architectural heritage with forward-looking urban development.",
    },
    jointProject: {
      de: "Städtebauliche Beratung, Bauleitplanung und planerische Begleitung kommunaler Entwicklungsprojekte im Rheingau-Taunus-Kreis.",
      en: "Urban planning advisory, binding land-use planning, and development guidance for municipal projects in the Rheingau-Taunus district.",
    },
    location: {
      de: "Walluf (Rheingau-Taunus-Kreis)",
      en: "Walluf (Rheingau-Taunus District)",
    },
  },
  {
    id: "fcn-nuedling",
    name: "F. C. Nüdling (FCN)",
    logo: "/images/partners/fcn-nuedling.svg",
    websiteUrl: "https://www.nuedling.de/",
    tagline: {
      de: "Betonelemente, Baustoffe & Recycling",
      en: "Precast Concrete, Materials & Circular Systems",
    },
    title: {
      de: "F. C. Nüdling – Zukunftsweisende Baustoffe & Betonsysteme",
      en: "F. C. Nüdling – Advanced Concrete Systems & Building Materials",
    },
    description: {
      de: "Die FCN-Unternehmensgruppe mit Hauptsitz in Fulda ist ein führender deutscher Hersteller für hochwertige Betonelemente, Pflastersysteme und nachhaltige Baustoffe.",
      en: "The FCN Group, headquartered in Fulda, is a premier German manufacturer of advanced concrete components, paving systems, and sustainable building materials.",
    },
    jointProject: {
      de: "Fachliche Kooperation und Planungsintegration für modulare Betonsysteme, ressourceneffiziente Baustoffe und Außenanlagenkonzepte.",
      en: "Technical collaboration and design integration for modular concrete structures, resource-efficient materials, and landscape concepts.",
    },
    location: {
      de: "Fulda (Hessen)",
      en: "Fulda (Hesse)",
    },
  },
];
