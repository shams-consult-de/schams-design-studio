export interface PortalFile {
  id: string;
  title: {
    de: string;
    en: string;
  };
  description: {
    de: string;
    en: string;
  };
  format: string;
  documentUrl: string;
  badge?: {
    de: string;
    en: string;
  };
  isSecret?: boolean;
  classification?: "STRENG VERTRAULICH" | "VERTRAULICH" | "INTERN";
}

export interface PortalClient {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  industry: {
    de: string;
    en: string;
  };
  location: string;
  category: "all" | "concrete" | "developer" | "institutional";
  description: {
    de: string;
    en: string;
  };
  files: PortalFile[];
}

export const portalClients: PortalClient[] = [
  {
    id: "fcn",
    name: "F.C. Nüdling Fertigteiltechnik GmbH & Co. KG",
    shortName: "F.C. Nüdling (FCN)",
    logo: "/images/partners/fcn-nuedling.svg",
    location: "Fulda & Seeheim-Jugenheim",
    industry: {
      de: "Industrielle Fertigteiltechnik & Liapor Leichtbeton",
      en: "Industrial Precast Concrete & Liapor Systems",
    },
    category: "concrete",
    description: {
      de: "Strategischer Technologiepartner für seriellen Systemrohbau, klimaschonende Wandelemente und integrale HOAI-Vorplanung.",
      en: "Strategic technology partner for serial modular precasting, eco-friendly wall assemblies, and integrated HOAI engineering.",
    },
    files: [
      {
        id: "shams-fcn-partnership",
        title: {
          de: "Shams Consult × FCN – B2B Partnerschaftsprofil",
          en: "Shams Consult × FCN – B2B Partnership Profile",
        },
        description: {
          de: "5-seitiges LinkedIn Multi-Page Whitepaper für Investoren & Entscheider mit Fokus auf Vorfertigung und Wirtschaftlichkeit.",
          en: "5-page LinkedIn multi-page whitepaper for investors and leaders highlighting prefabrication and cost efficiency.",
        },
        format: "DIN A5 Portrait · 5 Seiten",
        documentUrl: "/documents/flyer-fcn-partnership.html",
        badge: {
          de: "LINKEDIN WHITEPAPER",
          en: "LINKEDIN WHITEPAPER",
        },
        isSecret: true,
        classification: "STRENG VERTRAULICH",
      },
      {
        id: "b2b-developer-flyer",
        title: {
          de: "B2B Bauträger & Investoren Vertriebsflyer",
          en: "B2B Developer & Investor Sales Flyer",
        },
        description: {
          de: "Vertriebsunterlage zur Bauzeitverkürzung, B-Plan-Sicherheit und Schnittstellenreduktion nach HOAI 1–8.",
          en: "Executive sales brief on construction compression, zoning code certainty, and unified HOAI execution.",
        },
        format: "DIN A5 Z-Falz · 6 Seiten",
        documentUrl: "/documents/flyer-b2b-developer.html",
        badge: {
          de: "B2B VERTRIEB",
          en: "B2B SALES",
        },
        isSecret: true,
        classification: "STRENG VERTRAULICH",
      },
      {
        id: "fcn-kundentag-flyer",
        title: {
          de: "FCN Kundentag & Baustoff-Dialog Flyer",
          en: "FCN Customer Day & Materials Dialogue Flyer",
        },
        description: {
          de: "Technische Broschüre zu Liapor Leichtbeton, wetterunabhängiger Werksproduktion und nachhaltigem Rohbau.",
          en: "Technical compendium covering Liapor lightweight concrete, weather-independent manufacturing, and circular build.",
        },
        format: "DIN A5 Z-Falz · 6 Seiten",
        documentUrl: "/documents/flyer-din-lang.html",
        badge: {
          de: "BAUSTOFF-DIALOG",
          en: "MATERIALS DIALOGUE",
        },
        isSecret: false,
        classification: "VERTRAULICH",
      },
      {
        id: "portfolio-gallery-flyer",
        title: {
          de: "Fotogalerie & Referenzbauten Flyer",
          en: "Photo Gallery & Built References Flyer",
        },
        description: {
          de: "Visueller Nachweis realisierter FCN-Bauprojekte in Seeheim-Jugenheim und der Metropolregion Rhein-Main.",
          en: "Visual proof of completed FCN precast projects in Seeheim-Jugenheim and the Rhine-Main metropolitan area.",
        },
        format: "DIN A5 Z-Falz · 6 Seiten",
        documentUrl: "/documents/flyer-gallery.html",
        badge: {
          de: "PORTFOLIO",
          en: "PORTFOLIO",
        },
        isSecret: false,
        classification: "VERTRAULICH",
      },
      {
        id: "casestudy-story-flyer",
        title: {
          de: "Projektphasen & Bau-Story Case Study",
          en: "Project Phases & Build Story Case Study",
        },
        description: {
          de: "Chronologische Baudokumentation von der Genehmigungsplanung bis zur schlüsselfertigen Übergabe.",
          en: "Step-by-step case study tracing the construction progression from permit engineering to turnkey delivery.",
        },
        format: "DIN A5 Z-Falz · 6 Seiten",
        documentUrl: "/documents/flyer-casestudy.html",
        badge: {
          de: "CASE STUDY",
          en: "CASE STUDY",
        },
        isSecret: true,
        classification: "STRENG VERTRAULICH",
      },
    ],
  },
];

// Backwards compatibility helper types
export interface FlyerItem {
  id: string;
  title: { de: string; en: string };
  subtitle: { de: string; en: string };
  badge: { de: string; en: string };
  partner: "fcn";
  partnerName: string;
  format: string;
  pdfUrl: string;
  fileSize?: string;
  description: { de: string; en: string };
}

export const fcnFlyersList: FlyerItem[] = portalClients[0].files.map((f) => ({
  id: f.id,
  title: f.title,
  subtitle: {
    de: f.format,
    en: f.format,
  },
  badge: f.badge || { de: "OFFIZIELL", en: "OFFICIAL" },
  partner: "fcn",
  partnerName: "F.C. Nüdling Fertigteiltechnik",
  format: f.format,
  pdfUrl: f.documentUrl,
  fileSize: "On-Demand Generator",
  description: f.description,
}));

export const flyersList = fcnFlyersList;
