export interface BeforeAfterProject {
  id: string;
  category: { de: string; en: string };
  title: { de: string; en: string };
  subtitle: { de: string; en: string };
  beforeImage: string;
  beforeAlt: string;
  beforeLabel: { de: string; en: string };
  beforePhase: string;
  afterImage: string;
  afterAlt: string;
  afterLabel: { de: string; en: string };
  afterPhase: string;
  description: { de: string; en: string };
  fcnHighlight: { de: string; en: string };
  stats: Array<{ label: { de: string; en: string }; value: string }>;
}

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: "exterior-residential",
    category: {
      de: "Objektbau & Hochbau",
      en: "Commercial & Multi-Family Housing",
    },
    title: {
      de: "Mehrfamilien-Wohnanlage mit FCN Systemrohbau",
      en: "Multi-Family Residential Complex with FCN Structural System",
    },
    subtitle: {
      de: "Präziser FCN Liapor- & Betonelement-Einsatz von der Rohbaumontage bis zum schlüsselfertigen Objekt",
      en: "Precision FCN Liapor and precast elements from rough framing to turnkey completion",
    },
    beforeImage: "/images/before-after/fcn-exterior-before.jpg",
    beforeAlt: "FCN Rohbau Baustelle Mehrfamilienhaus Liapor Mauerwerk Shams Consult",
    beforeLabel: { de: "Vorher: FCN Rohbau", en: "Before: FCN Shell Assembly" },
    beforePhase: "LP 5–6 (Rohbau)",
    afterImage: "/images/before-after/fcn-exterior-after.jpg",
    afterAlt: "Schlüsselfertiges modernes Mehrfamilienhaus Shams Consult Architektur",
    afterLabel: { de: "Nachher: Fertigstellung", en: "After: Turnkey Completion" },
    afterPhase: "LP 8 (Abnahme)",
    description: {
      de: "Durch den Einsatz maßgenauer FCN Wand- und Deckenelemente wurde die Bauzeit der tragenden Hülle um über 50 % verkürzt. Vollendete Fassadenästhetik trifft auf Spitzen-Wärmedämmung und Schallschutz.",
      en: "Utilizing precision-engineered FCN wall and slab elements reduced shell erection time by over 50%. High-end architectural facade finishes unite with peak thermal insulation and acoustic ratings.",
    },
    fcnHighlight: {
      de: "FCN Liapor-Wandelemente & planebene Geschossdecken",
      en: "FCN Liapor wall modules & factory-cured floor slabs",
    },
    stats: [
      {
        label: { de: "Bauzeitersparnis", en: "Time Saved" },
        value: "–55%",
      },
      {
        label: { de: "Energieeffizienz", en: "Energy Standard" },
        value: "KfW 40 EE",
      },
      {
        label: { de: "Maßgenauigkeit", en: "Tolerance" },
        value: "±2 mm",
      },
    ],
  },
  {
    id: "interior-transformation",
    category: {
      de: "Innenarchitektur & Kernsanierung",
      en: "Interior Architecture & Gut Renovation",
    },
    title: {
      de: "Vom entkernten Rohzustand zum luxuriösen Lebensraum",
      en: "From Stripped Skeleton to Sophisticated Living Space",
    },
    subtitle: {
      de: "Ganzheitliche Kernsanierung mit optimierter Statik, Akustik und maßgeschneiderten FCN Komponenten",
      en: "Holistic gut renovation with enhanced load-bearing structure, acoustics, and custom FCN components",
    },
    beforeImage: "/images/before-after/fcn-interior-before.jpg",
    beforeAlt: "Entkernter Innenraum Rohbauzustand Kernsanierung Shams Consult",
    beforeLabel: { de: "Vorher: Entkernter Rohbau", en: "Before: Stripped Skeleton" },
    beforePhase: "LP 4–5 (Rückbau)",
    afterImage: "/images/before-after/fcn-interior-after.jpg",
    afterAlt: "Fertiggestellter luxuriöser Wohn- und Essbereich Shams Consult",
    afterLabel: { de: "Nachher: Vollendeter Ausbau", en: "After: Finished Living Space" },
    afterPhase: "LP 8 (Vollendung)",
    description: {
      de: "Aus einer dunklen, kleinteiligen Bestandsstruktur schufen wir einen lichterfüllten, offenen Wohn-Essbereich. Durchdachte Materialkompositionen und unsichtbare TGA-Integration setzen neue Maßstäbe im Innenausbau.",
      en: "A compartmentalized, dark legacy space was transformed into an expansive, sun-drenched open-concept interior. Thoughtful material palettes and concealed MEP systems define modern luxury living.",
    },
    fcnHighlight: {
      de: "Massive Ausbauelemente & schallisolierte Estrichunterbauten",
      en: "Solid interior partition systems & acoustic screed foundation",
    },
    stats: [
      {
        label: { de: "Lichte Raumhöhe", en: "Ceiling Height" },
        value: "2,85 m",
      },
      {
        label: { de: "Tageslichtfaktor", en: "Daylight Factor" },
        value: "+180%",
      },
      {
        label: { de: "Schallschutz", en: "Acoustic Rating" },
        value: "54 dB",
      },
    ],
  },
];
