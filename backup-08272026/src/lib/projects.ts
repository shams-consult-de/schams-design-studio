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

export const projects: Project[] = [
  {
    slug: "mehrfamilienhaus-dreieich-goetzenhain",
    title: "Mehrfamilienhaus Dreieich-Götzenhain",
    location: "Dreieich",
    year: "2021",
    category: "Wohnungsbau",
    image: "/images/image-3a7a9c.jpg",
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
    image: "/images/image-09c215.jpg",
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
    image: "/images/image-37e42d.jpg",
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
    image: "/images/image-f22e9f.jpg",
    imageAlt: "Begründung Bebauungsplan Töpfenmühle Gersfeld (Rhön), Verfahrensstand: Auslegung",
    description:
      "Aufstellung des Bebauungsplans „Töpfenmühle“ mit Planzeichen und textlichen Festsetzungen. Verfahrensstand: öffentliche Auslegung.",
  },
  {
    slug: "kindergarten-schemmerhofen",
    title: "Kindergarten Schemmerhofen bei Ulm",
    location: "Schemmerhofen",
    year: "2024",
    category: "Bildungsbau",
    image: "/images/image-f36e2e.png",
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
    image: "/images/image-0996f8.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Maienweg 2 Ulm, Architekturbüro Shams Consult",
    description:
      "Vorhabenbezogener Bebauungsplan (VEP) inkl. textlicher Festsetzungen, Schnitten und Fassadenkonzeption für ein innerstädtisches Vorhaben.",
  },
  {
    slug: "machbarkeitsstudie-reutlingen",
    title: "Städtebauliche Machbarkeitsstudie Reutlingen",
    location: "Reutlingen",
    year: "2020",
    category: "Stadtplanung & Städtebau",
    image: "/images/image-a8071d.jpg",
    imageAlt: "Städtebauliche Machbarkeitsstudien Reutlingen — Analyse und Konzeption",
    description:
      "Analyse und städtebauliches Konzept mit Bauabschnitten für ein Entwicklungsgebiet in Reutlingen.",
  },
  {
    slug: "bebauungsplan-neu-ulm-baufeld-5-ost",
    title: "Bebauungsplan M 115 „Baufeld 5 – OST“, Neu-Ulm",
    location: "Neu-Ulm",
    year: "2020",
    category: "Bauleitplanung",
    image: "/images/image-f9659f.jpg",
    imageAlt: "Bebauungsplan M 115 „Baufeld 5 – OST“ Stadt Neu-Ulm, für Obermeier u. Traub",
    description:
      "Bebauungsplanung für ein innerstädtisches Baufeld im Auftrag von Obermeier + Traub.",
  },
  {
    slug: "vep-alten-und-pflegeheim-guenzburg",
    title: "VEP Alten- und Pflegeheim Spital, Günzburg",
    location: "Günzburg",
    year: "2020",
    category: "Vorhabenbezogener Bebauungsplan",
    image: "/images/image-067b12.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Alten- und Pflegeheim Spital Günzburg",
    description:
      "Vorhabenbezogener Bebauungsplan für ein Alten- und Pflegeheim im Auftrag von Obermeier + Traub.",
  },
  {
    slug: "vep-dillingerstrasse-guenzburg",
    title: "VEP Dillingerstraße, Günzburg",
    location: "Günzburg",
    year: "2020",
    category: "Vorhabenbezogener Bebauungsplan",
    image: "/images/image-1109bb.jpg",
    imageAlt: "Vorhabenbezogener Bebauungsplan Dillingerstr. Günzburg, für Obermeier u. Traub",
    description:
      "Vorhabenbezogener Bebauungsplan für eine gemischt genutzte Innenentwicklung in Günzburg.",
  },
  {
    slug: "lagerhalle-feinkost-fleischverarbeitung",
    title: "Lagerhalle Feinkost & Fleischverarbeitung",
    location: "Süddeutschland",
    year: "2019",
    category: "Gewerbebau",
    image: "/images/image-35c767.jpg",
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
    image: "/images/dreist-ckiges-mehrfamilienhaus-mit-gro-en-fenstern-a8b20c.png",
    imageAlt:
      "Dreistöckiges Mehrfamilienhaus mit großen Fenstern und Balkonen mit Bäumen davor in Dreieich-Götzenhain",
    description:
      "Begleitung des Qualitätssiegels Nachhaltiges Gebäude (QNG) für ein Mehrfamilienhaus in Dreieich-Götzenhain.",
  },
];

// Weitere Bilder aus der Original-Website (Ausschnitte, Detailpläne, Baustellen)
export const galleryImages: { url: string; alt: string }[] = [
  {
    url: "/images/image-3f0563.jpg",
    alt: "Ausführungsplanung Grundriss EG „Netto“ Supermarkt, Münster (Hessen)",
  },
  {
    url: "/images/image-1a0e10.jpg",
    alt: "Ausführungsplanung Obergeschoss Wohnungen mit grünem Innenhof, Münster (Hessen)",
  },
  {
    url: "/images/image-a13c4d.jpg",
    alt: "Planzeichen und textliche Festsetzungen, Bebauungsplan Töpfenmühle Gersfeld (Rhön)",
  },
  { url: "/images/image-84d2bc.jpg", alt: "Rohbau Baustelle, Einfamilienhaus Lingen (Ems)" },
  {
    url: "/images/image-7ae73a.png",
    alt: "Planung und Baugenehmigung, Einfamilienhaus Lingen (Ems)",
  },
  { url: "/images/image-ba584f.jpg", alt: "Bodenplatte, Einfamilienhaus Lingen (Ems)" },
  {
    url: "/images/image-5407c3.jpg",
    alt: "Öffnungen im Rohbau — bodentiefe Fenster, Einfamilienhaus Lingen (Ems)",
  },
  {
    url: "/images/bestimmungsphase-mit-den-genehmigungsbeh-rden-509467.jpg",
    alt: "Bestimmungsphase mit den Genehmigungsbehörden",
  },
  { url: "/images/image-da898e.jpg", alt: "In Zusammenarbeit mit O+T und Firma Gapp für UWS Ulm" },
  { url: "/images/image-9a6621.png", alt: "Im Auftrag von Obermeier und Traub Ulm (LPH 1–4)" },
  {
    url: "/images/image-e2377f.jpg",
    alt: "Städtebauliche Machbarkeitsstudien Reutlingen, Bauabschnitte",
  },
  { url: "/images/image-7b0ec1.jpg", alt: "Städtebauliche Machbarkeitsstudien, Bauabschnitte" },
  { url: "/images/image-bce962.jpg", alt: "Textliche Festsetzungen VEP Maienweg 2, Ulm" },
  { url: "/images/image-82b84f.jpg", alt: "Schnitte VEP Bebauungsplan Maienweg 2, Ulm" },
  { url: "/images/image-8368e4.jpg", alt: "Fassaden VEP Maienweg 2, Ulm" },
  {
    url: "/images/architektenleistung-leistungsphasen-1-8-hoai-bd62b9.jpg",
    alt: "Architektenleistung: Leistungsphasen 1–8 HOAI",
  },
  {
    url: "/images/architektenleistung-leistungsphasen-1-9-hoai-bbd3ad.jpg",
    alt: "Architektenleistung: Leistungsphasen 1–9 HOAI",
  },
  {
    url: "/images/architektenb-ro-shams-consult-architekt-und-stadtp-0c2d1e.jpg",
    alt: "Architekturbüro Shams Consult — Architekt und Stadtplaner",
  },
  {
    url: "/images/from-nobody-to-somebody-to-help-and-share-experien-8deb8b.jpg",
    alt: "„From nobody to somebody, to help and share experiences with everybody.“ — Vertrauen, Ideen und Expertise",
  },
];
