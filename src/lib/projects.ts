export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
}

const jim = (id: string, ver: string, name = "image.jpg") =>
  `https://image.jimcdn.com/app/cms/image/transf/none/path/sc1699083d70b354e/image/${id}/version/${ver}/${name}`;

export const projects: Project[] = [
  {
    slug: "mehrfamilienhaus-dreieich-goetzenhain",
    title: "Mehrfamilienhaus Dreieich-Götzenhain",
    location: "Dreieich",
    year: "2021",
    category: "Wohnungsbau",
    image: jim("i7cf7fb0fe93f7c74", "1687253071"),
    imageAlt: "Neubau Mehrfamilienhaus in Dreieich Götzenhain 2021",
    description:
      "Neubau eines dreistöckigen Mehrfamilienhauses mit großen Fenstern und Balkonen, eingebettet in Bestandsbäume.",
  },
  {
    slug: "einfamilienhaus-lingen-ems",
    title: "Einfamilienhaus Lingen (Ems)",
    location: "Lingen (Ems)",
    year: "2021",
    category: "Wohnungsbau",
    image: jim("i38231a24ab2f9bbd", "1700878158"),
    imageAlt: "Realisierung 2021, Einfamilienhaus, Lingen (Ems)",
    description:
      "Planung, Baugenehmigung und Realisierung eines Einfamilienhauses — von der Bodenplatte über den Rohbau bis zu bodentiefen Fenstern.",
  },
  {
    slug: "netto-supermarkt-muenster-hessen",
    title: "„Netto“ Supermarkt & 22 Wohnungen, Münster (Hessen)",
    location: "Münster (Hessen)",
    year: "2023",
    category: "Mischnutzung · Ausführungsplanung",
    image: jim("i695b62e8a616ae15", "1701007055"),
    imageAlt:
      "Ausführungsplanung und Realisierung Netto Supermarkt, 22 Wohnungen und einer Tiefgarage",
    description:
      "Ausführungsplanung und Realisierung eines Nahversorgungszentrums mit „Netto“-Supermarkt, 22 Wohnungen und Tiefgarage — mit grünem Innenhof im Obergeschoss.",
  },
  {
    slug: "bebauungsplan-toepfenmuehle-gersfeld",
    title: "Bebauungsplan „Töpfenmühle“ Gersfeld (Rhön)",
    location: "Gersfeld (Rhön)",
    year: "2023",
    category: "Bauleitplanung",
    image: jim("i8864e965b260b110", "1701080364"),
    imageAlt:
      "Begründung Bebauungsplan Töpfenmühle Gersfeld (Rhön), Verfahrensstand: Auslegung",
    description:
      "Aufstellung des Bebauungsplans „Töpfenmühle“ mit Planzeichen und textlichen Festsetzungen. Verfahrensstand: öffentliche Auslegung.",
  },
  {
    slug: "kindergarten-schemmerhofen",
    title: "Kindergarten Schemmerhofen bei Ulm",
    location: "Schemmerhofen",
    year: "2024",
    category: "Bildungsbau",
    image: jim("if2d29c85d328e5ee", "1706042241", "image.png"),
    imageAlt: "Kindergarten in Schemmerhofen bei Ulm",
    description:
      "Kindgerechter Neubau eines Kindergartens im Auftrag von Obermeier + Traub Ulm (LPH 1–4).",
  },
  {
    slug: "vep-maienweg-ulm",
    title: "Vorhabenbezogener Bebauungsplan Maienweg 2, Ulm",
    location: "Ulm",
    year: "2023",
    category: "Vorhabenbezogener Bebauungsplan",
    image: jim("id2ee11947d036960", "1692611287"),
    imageAlt:
      "Vorhabenbezogener Bebauungsplan Maienweg 2 Ulm, Architekturbüro Shams Consult",
    description:
      "Vorhabenbezogener Bebauungsplan (VEP) inkl. textlicher Festsetzungen, Schnitten und Fassadenkonzeption für ein innerstädtisches Vorhaben.",
  },
  {
    slug: "machbarkeitsstudie-reutlingen",
    title: "Städtebauliche Machbarkeitsstudie Reutlingen",
    location: "Reutlingen",
    year: "2020",
    category: "Stadtplanung & Städtebau",
    image: jim("ia59d02cfc9ed73b5", "1592996685"),
    imageAlt:
      "Städtebauliche Machbarkeitsstudien Reutlingen — Analyse und Konzeption",
    description:
      "Analyse und städtebauliches Konzept mit Bauabschnitten für ein Entwicklungsgebiet in Reutlingen.",
  },
  {
    slug: "bebauungsplan-neu-ulm-baufeld-5-ost",
    title: "Bebauungsplan M 115 „Baufeld 5 – OST“, Neu-Ulm",
    location: "Neu-Ulm",
    year: "2020",
    category: "Bauleitplanung",
    image: jim("i5088a07bdd845df3", "1592996685"),
    imageAlt:
      "Bebauungsplan M 115 „Baufeld 5 – OST“ Stadt Neu-Ulm, für Obermeier u. Traub",
    description:
      "Bebauungsplanung für ein innerstädtisches Baufeld im Auftrag von Obermeier + Traub.",
  },
  {
    slug: "vep-alten-und-pflegeheim-guenzburg",
    title: "VEP Alten- und Pflegeheim Spital, Günzburg",
    location: "Günzburg",
    year: "2020",
    category: "Vorhabenbezogener Bebauungsplan",
    image: jim("i7c03c4c0ce088a11", "1590116458"),
    imageAlt:
      "Vorhabenbezogener Bebauungsplan Alten- und Pflegeheim Spital Günzburg",
    description:
      "Vorhabenbezogener Bebauungsplan für ein Alten- und Pflegeheim im Auftrag von Obermeier + Traub.",
  },
  {
    slug: "vep-dillingerstrasse-guenzburg",
    title: "VEP Dillingerstraße, Günzburg",
    location: "Günzburg",
    year: "2020",
    category: "Vorhabenbezogener Bebauungsplan",
    image: jim("i7a414d9622049f4e", "1590116458"),
    imageAlt:
      "Vorhabenbezogener Bebauungsplan Dillingerstr. Günzburg, für Obermeier u. Traub",
    description:
      "Vorhabenbezogener Bebauungsplan für eine gemischt genutzte Innenentwicklung in Günzburg.",
  },
  {
    slug: "lagerhalle-feinkost-fleischverarbeitung",
    title: "Lagerhalle Feinkost & Fleischverarbeitung",
    location: "Süddeutschland",
    year: "2019",
    category: "Gewerbebau",
    image: jim("idf46a1816828711e", "1590115673"),
    imageAlt: "Lagerhalle für Feinkost und Fleischverarbeitung",
    description:
      "Neubau einer funktionalen Lager- und Produktionshalle für Feinkost und Fleischverarbeitung.",
  },
  {
    slug: "qs-nachhaltiges-gebaeude-goetzenhain",
    title: "Qualitätssiegel Nachhaltiges Gebäude, Götzenhain",
    location: "Dreieich-Götzenhain",
    year: "2025",
    category: "Nachhaltigkeit & Zertifizierung",
    image: jim("i1718622424f46a77", "1753015408", "dreist%C3%B6ckiges-mehrfamilienhaus-mit-gro%C3%9Fen-fenstern-und-balkonen-mit-b%C3%A4umen-davor-in-dreieich-g%C3%B6tzenhain.png"),
    imageAlt:
      "Dreistöckiges Mehrfamilienhaus mit großen Fenstern und Balkonen mit Bäumen davor in Dreieich-Götzenhain",
    description:
      "Begleitung des Qualitätssiegels Nachhaltiges Gebäude (QNG) für ein Mehrfamilienhaus in Dreieich-Götzenhain.",
  },
];

// Weitere Bilder aus der Original-Website (Ausschnitte, Detailpläne, Baustellen)
export const galleryImages: { url: string; alt: string }[] = [
  { url: jim("ic648cfa922789aae", "1700879330"), alt: "Ausführungsplanung Grundriss EG „Netto“ Supermarkt, Münster (Hessen)" },
  { url: jim("i1c8b8a3e1be34ae3", "1700879330"), alt: "Ausführungsplanung Obergeschoss Wohnungen mit grünem Innenhof, Münster (Hessen)" },
  { url: jim("i391090f2c8d7f146", "1701080570"), alt: "Planzeichen und textliche Festsetzungen, Bebauungsplan Töpfenmühle Gersfeld (Rhön)" },
  { url: jim("ia91a54507b4fb31d", "1700878158"), alt: "Rohbau Baustelle, Einfamilienhaus Lingen (Ems)" },
  { url: jim("i559fc05c39e8cf67", "1700878158", "image.png"), alt: "Planung und Baugenehmigung, Einfamilienhaus Lingen (Ems)" },
  { url: jim("ic641595ff80b5105", "1700878158"), alt: "Bodenplatte, Einfamilienhaus Lingen (Ems)" },
  { url: jim("i11ff5fca81dafe94", "1700878158"), alt: "Öffnungen im Rohbau — bodentiefe Fenster, Einfamilienhaus Lingen (Ems)" },
  { url: jim("i6c625b899858080b", "1700879470", "bestimmungsphase-mit-den-genehmigungsbeh%C3%B6rden.jpg"), alt: "Bestimmungsphase mit den Genehmigungsbehörden" },
  { url: jim("i5186bc0e8a5baed5", "1708088015"), alt: "In Zusammenarbeit mit O+T und Firma Gapp für UWS Ulm" },
  { url: jim("i837d76a2508a2a2e", "1706042241", "image.png"), alt: "Im Auftrag von Obermeier und Traub Ulm (LPH 1–4)" },
  { url: jim("ie93b0804ebb3515b", "1592996685"), alt: "Städtebauliche Machbarkeitsstudien Reutlingen, Bauabschnitte" },
  { url: jim("i084fce94ec37ec22", "1592996685"), alt: "Städtebauliche Machbarkeitsstudien, Bauabschnitte" },
  { url: jim("ib6196f04e9d1f093", "1692611408"), alt: "Textliche Festsetzungen VEP Maienweg 2, Ulm" },
  { url: jim("i4435133fc097f838", "1692611454"), alt: "Schnitte VEP Bebauungsplan Maienweg 2, Ulm" },
  { url: jim("icface8012d92d467", "1692611464"), alt: "Fassaden VEP Maienweg 2, Ulm" },
  { url: jim("i05760e0b4239fa9a", "1626306790", "architektenleistung-leistungsphasen-1-8-hoai.jpg"), alt: "Architektenleistung: Leistungsphasen 1–8 HOAI" },
  { url: jim("ic12655acbe06a3f9", "1667207002", "architektenleistung-leistungsphasen-1-9-hoai.jpg"), alt: "Architektenleistung: Leistungsphasen 1–9 HOAI" },
  { url: jim("i3a38239f91355027", "1707152085", "architektenb%C3%BCro-shams-consult-architekt-und-stadtplaner.jpg"), alt: "Architekturbüro Shams Consult — Architekt und Stadtplaner" },
  { url: jim("i2f58a7e76fe134ac", "1691673000", "from-nobody-to-somebody-to-help-and-share-experiences-with-everybody-vertrauen-ideen-und-expertise-f%C3%BCr-eine-verantwortungsvolle-gestaltung-die-reise-vom-traum-zum-erfolg.jpg"), alt: "„From nobody to somebody, to help and share experiences with everybody.“ — Vertrauen, Ideen und Expertise" },
];
