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
}

export const partnersData: PartnerItem[] = [
  {
    id: "adapteo",
    name: "Adapteo",
    logo: "/images/partners/adapteo.png",
    websiteUrl: "https://adapteo.de/nachhaltigkeit",
    tagline: "Partner für modulare Raumlösungen",
    title: "Adapteo – Flexibles Bauen für öffentliche Einrichtungen",
    description:
      "Unser Geschäftspartner Adapteo ist ein führendes, innovatives Unternehmen mit Sitz in Neu-Isenburg, das sich auf modulare und temporäre Gebäude spezialisiert hat. Adapteo schafft hochwertige, nachhaltige und anpassungsfähige Gebäude für Schulen, Kitas und Verwaltungen.",
    jointProject:
      "Gemeinsam mit Adapteo realisieren wir im Jahr 2025 ein Ausweichquartier für über 200 Mitarbeitende eines Behördenzentrums in der Landeshauptstadt Berlin. Es ist uns eine Freude, Adapteo und die Bundesanstalt für Immobilienaufgaben (BImA) Berlin bei der Planung und Umsetzung dieses Projekts zu begleiten.",
    projectYear: "2025",
    location: "Neu-Isenburg / Berlin",
  },
  {
    id: "stadtwerke-rodgau",
    name: "Stadtwerke Rodgau",
    logo: "/images/partners/stadtwerke-rodgau.jpg",
    websiteUrl: "https://www.stadtwerke-rodgau.de/en/",
    tagline: "Kommunale Infrastruktur & Umwelt",
    title: "Stadtwerke Rodgau – Ökologische & nachhaltige Kommunalprojekte",
    description:
      "Die Stadtwerke Rodgau sind ein Eigenbetrieb der Stadt Rodgau. Neben ihren herkömmlichen Versorgungsaufgaben fördern die Stadtwerke gezielt ökologische, umweltfreundliche und klimafreundliche Projekte im Rhein-Main-Gebiet.",
    jointProject:
      "Unser Planungsbüro hatte die Stadtwerke Rodgau bei der Genehmigungsplanung für die Kompostierungsanlage erfolgreich unterstützt. Wir freuen uns auf die Fortführung weiterer gemeinsamer Projekte.",
    location: "Rodgau (Kreis Offenbach)",
  },
  {
    id: "frankfurt-uas",
    name: "Frankfurt University of Applied Sciences",
    logo: "/images/partners/frankfurt-uas.jpg",
    websiteUrl: "https://www.frankfurt-university.de/de/",
    tagline: "Wissenschaft, Forschung & Lehre",
    title: "Frankfurt UAS – Kooperation in Forschung & Abschlussarbeiten",
    description:
      "Die Frankfurt University of Applied Sciences (Frankfurt UAS) zeichnet sich durch praxisnahe Spitzenforschung und interdisziplinäre Lehre am Fachbereich 1 (Architektur, Bauingenieurwesen und Geomatik) aus.",
    jointProject:
      "Das Planungsbüro Shams Consult gibt aktuelle Themen im Bereich der Bauplanung und Stadtplanung als praxisorientierte Forschungsprojekte heraus und unterstützt Studierende und Professoren bei der Betreuung von Bachelor- und Masterarbeiten (z.B. zu Mängelmanagement, Baukosten in Krisenzeiten und Stellplatzsatzungen).",
    location: "Frankfurt am Main",
  },
  {
    id: "instinkt",
    name: "INSTINKT Wohnraumberatung GmbH",
    logo: "/images/partners/instinkt.jpg",
    websiteUrl: "https://de.linkedin.com/company/instinkt-wohnraumberatung-gmbh",
    tagline: "Wohnungs- & Reihenhausbau",
    title: "INSTINKT – Moderner Wohnungsbau im Rhein-Main-Gebiet",
    description:
      "Die Firma INSTINKT Bauunternehmen GmbH mit Sitz in Eschborn baut regional im gesamten Rhein-Main-Gebiet sowie überregional hochwertige Einfamilienhäuser, Reihenhäuser, Doppelhäuser und moderne Bürobauten.",
    jointProject:
      "Shams Consult begleitete INSTINKT bei der architektonischen Planung und Realisierung von drei innovativen Häusern. Wir blicken mit Stolz auf die erfolgreiche Zusammenarbeit zurück.",
    location: "Eschborn / Rhein-Main",
  },
  {
    id: "schoofs",
    name: "SCHOOFS Immobilien",
    logo: "/images/partners/schoofs.jpg",
    websiteUrl: "https://www.schoofs-immobilien.de/",
    tagline: "Projektentwicklung & Mischnutzung",
    title: "SCHOOFS Immobilien – Lebensmitteleinzelhandel & Wohnungsbau",
    description:
      "Schoofs Immobilien GmbH ist ein zukunftsorientiertes Unternehmen mit Standorten in Köln und Neu-Isenburg bei Frankfurt a.M. Das Unternehmen ist bundesweit führend in der Projektentwicklung und Realisierung von Einzelhandelsimmobilien in Kombination mit urbanem Wohnungsbau.",
    jointProject:
      "Shams Consult unterstützt SCHOOFS Immobilien bei der Planung und Ausführungsplanung von einem modernen Supermarkt mit 22 Wohneinheiten, einer Bäckerei, einem begrünten Innenhof und Außenanlagen in Münster (Hessen).",
    location: "Neu-Isenburg & Köln",
  },
];
