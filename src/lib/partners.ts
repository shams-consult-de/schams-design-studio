export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
  tagline: string;
  title: string;
  description: string;
  jointProject: string;
  projectYear?: string;
  location?: string;
  projectSlug?: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "netto",
    name: "Netto Marken-Discount",
    logo: "/images/partners/netto.svg",
    websiteUrl: "https://www.netto-online.de",
    tagline: "Einzelhandel & Nahversorgung",
    title: "Netto Marken-Discount – Nahversorgungszentrum mit Wohnungsbau",
    description:
      "Netto Marken-Discount gehört mit über 4.300 Filialen zu den führenden Lebensmitteleinzelhändlern in Deutschland.",
    jointProject:
      "Ausführungsplanung (HOAI LPH 5) für einen modernen Supermarkt mit 22 integrierten Wohneinheiten, Bäckerei, begrüntem Innenhof und Tiefgarage in Münster (Hessen).",
    projectYear: "2023–2024",
    location: "Münster (Hessen)",
    projectSlug: "supermarkt-muenster",
  },
  {
    id: "bima",
    name: "Bundesanstalt für Immobilienaufgaben (BImA)",
    logo: "/images/partners/bima.svg",
    websiteUrl: "https://www.bundesimmobilien.de",
    tagline: "Bundesimmobilien & Bundesbehörden",
    title: "BImA Berlin – Behördenzentrum des Bundes",
    description:
      "Die BImA ist das zentrale Immobilienunternehmen des Bundes und eine der größten Immobilieneigentümerinnen Deutschlands.",
    jointProject:
      "Planung und Genehmigungsbegleitung für ein Ausweichquartier für über 200 Bundesmitarbeitende eines Behördenzentrums in der Bundeshauptstadt Berlin in Kooperation mit Adapteo.",
    projectYear: "2024–2025",
    location: "Berlin",
  },
  {
    id: "adapteo",
    name: "Adapteo Group",
    logo: "/images/partners/adapteo.png",
    websiteUrl: "https://adapteo.de/nachhaltigkeit",
    tagline: "Modulare & zirkuläre Raumlösungen",
    title: "Adapteo – Flexibles Bauen für öffentliche Einrichtungen",
    description:
      "Adapteo ist ein führender europäischer Anbieter für modulare Gebäude und zirkuläre Bauweisen für Schulen, Kitas und Verwaltungen.",
    jointProject:
      "Gemeinsame Realisierung eines hochmodernen Ausweichquartiers für über 200 Mitarbeitende eines Behördenzentrums in Berlin.",
    projectYear: "2024–2025",
    location: "Neu-Isenburg / Berlin",
  },
  {
    id: "schoofs",
    name: "SCHOOFS Immobilien",
    logo: "/images/partners/schoofs.jpg",
    websiteUrl: "https://www.schoofs-immobilien.de/",
    tagline: "Projektentwicklung & Mischnutzung",
    title: "SCHOOFS Immobilien – Lebensmitteleinzelhandel & Wohnungsbau",
    description:
      "Schoofs Immobilien ist ein bundesweit führender Projektentwickler für moderne Einzelhandelsimmobilien und urbane Quartiere.",
    jointProject:
      "Architektonische Planung und Ausführungsplanung (LPH 5) für ein kombiniertes Nahversorgungs- und Wohnensemble in Hessen.",
    location: "Neu-Isenburg & Köln",
  },
  {
    id: "stadt-ulm",
    name: "Stadt Ulm",
    logo: "/images/partners/stadt-ulm.svg",
    websiteUrl: "https://www.ulm.de",
    tagline: "Kommunale Bauleitplanung & Städtebau",
    title: "Stadt Ulm – Vorhabenbezogener Bebauungsplan Maienweg 2",
    description:
      "Die Universitätsstadt Ulm steht für zukunftsorientierte Stadtentwicklung und geordnete innerstädtische Nachverdichtung.",
    jointProject:
      "Aufstellung des vorhabenbezogenen Bebauungsplans gem. § 12 / § 13a BauGB für eine harmonische Wohnbebauung im Stadtteil Söflingen.",
    projectYear: "2023",
    location: "Ulm (Baden-Württemberg)",
    projectSlug: "vep-maienweg-ulm",
  },
  {
    id: "giz",
    name: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
    logo: "/images/partners/giz.svg",
    websiteUrl: "https://www.giz.de",
    tagline: "Bundesunternehmen für internationale Zusammenarbeit",
    title: "GIZ & BMZ – Städtebauliche Fachexpertisen",
    description:
      "Die GIZ arbeitet als Bundesunternehmen weltweit für eine nachhaltige Entwicklung im Auftrag der Bundesregierung (BMZ, Auswärtiges Amt).",
    jointProject:
      "Einsatz als CIM-Fachexperte für Stadtplanung, Baurecht und Wiederaufbau in internationalen Regierungsprojekten.",
    location: "Bonn / Eschborn",
  },
  {
    id: "stadtwerke-rodgau",
    name: "Stadtwerke Rodgau (KdöR)",
    logo: "/images/partners/stadtwerke-rodgau.jpg",
    websiteUrl: "https://www.stadtwerke-rodgau.de",
    tagline: "Kommunale Infrastruktur & Umwelt",
    title: "Stadtwerke Rodgau – Ökologische Kommunalprojekte",
    description:
      "Die Stadtwerke Rodgau sind ein kommunaler Eigenbetrieb der Stadt Rodgau für Infrastruktur und Umweltschutz.",
    jointProject:
      "Erfolgreiche Genehmigungsplanung für die städtische Kompostierungs- und Umweltanlage.",
    location: "Rodgau (Kreis Offenbach)",
  },
  {
    id: "frankfurt-uas",
    name: "Frankfurt University of Applied Sciences",
    logo: "/images/partners/frankfurt-uas.jpg",
    websiteUrl: "https://www.frankfurt-university.de",
    tagline: "Wissenschaft, Forschung & Lehre",
    title: "Frankfurt UAS – Forschung & Lehre Fachbereich 1",
    description:
      "Die Frankfurt UAS zeichnet sich durch Spitzenlehre am Fachbereich Architektur, Bauingenieurwesen und Geomatik aus.",
    jointProject:
      "Offizieller Lehrauftrag und praxisorientierte Betreuung von Master- und Bachelorabschlussarbeiten im Bereich Städtebau und Baurecht.",
    location: "Frankfurt am Main",
  },
  {
    id: "stadt-neu-ulm",
    name: "Stadt Neu-Ulm",
    logo: "/images/partners/stadt-neu-ulm.svg",
    websiteUrl: "https://nu.neu-ulm.de",
    tagline: "Städtebauliche Rahmenplanung",
    title: "Stadt Neu-Ulm – Bebauungsplan M 115 „Baufeld 5 – OST“",
    description:
      "Große Kreisstadt an der Donau mit dynamischer städtebaulicher Entwicklungsachse.",
    jointProject:
      "Städtebauliche Bebauungsplanung und Strukturkonzeption für ein innerstädtisches Entwicklungsfeld.",
    location: "Neu-Ulm (Bayern)",
    projectSlug: "vep-baufeld-5-neu-ulm",
  },
  {
    id: "stadt-guenzburg",
    name: "Stadt Günzburg",
    logo: "/images/partners/stadt-guenzburg.svg",
    websiteUrl: "https://www.guenzburg.de",
    tagline: "Vorhabenbezogene Bebauungspläne",
    title: "Stadt Günzburg – VEP Alten- und Pflegeheim Spital",
    description:
      "Historische Kreisstadt in Bayerisch-Schwaben mit aktiver Stadtentwicklungspolitik.",
    jointProject:
      "Vorhabenbezogene Bebauungspläne für moderne Pflege- und Sozialeinrichtungen sowie gemischte Quartiersentwicklung.",
    location: "Günzburg (Bayern)",
    projectSlug: "vep-spital-guenzburg",
  },
  {
    id: "instinkt",
    name: "INSTINKT Wohnraumberatung GmbH",
    logo: "/images/partners/instinkt.jpg",
    websiteUrl: "https://de.linkedin.com/company/instinkt-wohnraumberatung-gmbh",
    tagline: "Wohnungs- & Reihenhausbau",
    title: "INSTINKT – Moderner Wohnungsbau im Rhein-Main-Gebiet",
    description:
      "Bauträger- und Wohnungsbaugesellschaft mit Sitz in Eschborn für hochwertige Wohnhäuser im Rhein-Main-Gebiet.",
    jointProject:
      "Architektonische Planung und Begleitung von drei innovativen Wohnbauprojekten im Rhein-Main-Gebiet.",
    location: "Eschborn / Frankfurt",
  },
  {
    id: "stadt-gersfeld",
    name: "Stadt Gersfeld (Rhön)",
    logo: "/images/partners/stadt-gersfeld.svg",
    websiteUrl: "https://www.gersfeld.de",
    tagline: "Qualifizierte Bebauungspläne",
    title: "Stadt Gersfeld – Bebauungsplan „Töpfenmühle“",
    description:
      "Heilklimatischer Kurort im Biosphärenreservat Rhön mit hohen Anforderungen an Landschafts- und Artenschutz.",
    jointProject:
      "Aufstellung des qualifizierten Bebauungsplans gem. § 30 Abs. 1 BauGB inklusive umfassender Umwelt- und Artenschutzprüfung.",
    location: "Gersfeld (Rhön, Hessen)",
    projectSlug: "vep-toepfenmuehle-gersfeld",
  },
  {
    id: "schemmerhofen",
    name: "Gemeinde Schemmerhofen",
    logo: "/images/partners/schemmerhofen.svg",
    websiteUrl: "https://www.schemmerhofen.de",
    tagline: "Kommunale Bildungs- & Sozialbauten",
    title: "Gemeinde Schemmerhofen – Neubau Kindertagesstätte",
    description:
      "Zukunftsorientierte Gemeinde im Landkreis Biberach mit starkem Fokus auf Bildungsinfrastruktur.",
    jointProject:
      "Kindgerechter Neubau einer modernen Kindertagesstätte mit Freianlagenkonzept (LPH 1–4).",
    location: "Schemmerhofen bei Ulm",
    projectSlug: "kindergarten-schemmerhofen",
  },
];
