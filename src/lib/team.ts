export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  highlightBadge?: string;
  lines: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
    role: "Büroinhaber · Architekt & Stadtplaner",
    image: "/images/team/Majeed-Shams.jpg",
    highlightBadge: "Büroleitung",
    lines: [
      "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2008",
      "Masterstudium Stadtplanung HfT Stuttgart — Master of Engineering 2011",
      "Lehrbeauftragter / Dozent seit 2020 — Frankfurt UAS, Fachbereich Architektur & Bauingenieurwesen",
      "Über 5 Jahre behördlicher Prüfer im Bauamt (Karlsruhe, Weinstadt, Dieburg)",
      "Gastdozent BTU Cottbus & ehem. CIM-Experte für GiZ / BMZ / Auswärtiges Amt",
    ],
  },
  {
    name: "Hatice Erol Yeniyapan",
    role: "Dipl.-Ing. (FH) Architektin, M.A.",
    image: "/images/team/Hatice-Erol-Yeniyapan.jpg",
    highlightBadge: "Entwurf & Planung",
    lines: [
      "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2009/10",
      "Masterstudium Architektur Hochschule Karlsruhe (HsKA) — Master of Arts (M.A.)",
      "Schwerpunkte: Hochbauentwurf, nachhaltige Wohnkonzepte & Genehmigungsplanung",
    ],
  },
  {
    name: "Samuel Allaw (B.Eng.)",
    role: "Bauleitung & Projektsteuerung",
    image: "/images/team/Samuel-Allaw.png",
    highlightBadge: "Bauüberwachung",
    lines: [
      "Bachelor of Engineering — Bauingenieurwesen, Hochschule Darmstadt",
      "Spezialist für Kostencontrolling, Bauzeitenpläne & Baustellenkoordination vor Ort",
      "Realisierung komplexer Mehrfamilienhaus- & Mischnutzungsprojekte",
    ],
  },
  {
    name: "Yasmine Yagcioglu",
    role: "Dipl.-Ing. (FH) Architektur",
    image: "/images/team/Yasmine-Yagcioglu.jpg",
    highlightBadge: "Ausführungsplanung",
    lines: [
      "Architekturstudium Hochschule Mainz — University of Applied Sciences, 2011",
      "Fokus auf Detail- & Werkplanung (LPH 5), Bauantragsvorbereitung und Behördenabstimmung",
    ],
  },
  {
    name: "Ronak Namdari (M.A.)",
    role: "Master of Art in Architecture",
    image: "/images/team/Ronak-Namdari.png",
    highlightBadge: "Konzeptdesign",
    lines: [
      "Städelschule, Frankfurt am Main — Master of Arts (M.A.)",
      "Kreativkonzepte, räumliche Transformationen & innovative Typologien",
    ],
  },
  {
    name: "Farhad Minaei (B.Arch.)",
    role: "3D-Visualisierung & Modellierung",
    image: "/images/team/Farhad-Minaei.png",
    highlightBadge: "BIM & 3D",
    lines: [
      "Bachelor of Architecture",
      "Fotorealistische 3D-Renderings, BIM-Modellierung & Lichtsimulationen für Bauherren & Behörden",
    ],
  },
];

export const networkStats = {
  expertsCount: "16+",
  expertsDesc: "Fester Verbund aus erfahrenen Architekt:innen, Fachplaner:innen, Statiker:innen & Energieberater:innen",
  projectsCompleted: "100+",
  budgetRange: "10.000 € – 13,5 Mio. €",
  yearsExperience: "15+ Jahre",
};
