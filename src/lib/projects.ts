import hausAmPark from "@/assets/project-haus-am-park.jpg";
import gruenerMarkt from "@/assets/project-gruener-markt.jpg";
import kulturzentrum from "@/assets/project-kulturzentrum.jpg";
import bildungscampus from "@/assets/project-bildungscampus.jpg";

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
    slug: "haus-am-park",
    title: "Haus am Park",
    location: "Berlin",
    year: "2023",
    category: "Wohnungsbau & Landschaftsplanung",
    image: hausAmPark,
    imageAlt:
      "Mehrgeschossiges Wohngebäude mit gläsernen Balkonen im warmen Abendlicht",
    description:
      "Ein Wohnensemble aus 48 Einheiten am Rande eines Berliner Grünraums, konzipiert als Dialog zwischen privatem Rückzug und städtischer Offenheit.",
  },
  {
    slug: "gruener-markt",
    title: "Grüner Markt",
    location: "Hamburg",
    year: "2024",
    category: "Stadtplanung & Revitalisierung",
    image: gruenerMarkt,
    imageAlt:
      "Luftaufnahme eines urbanen Platzes mit Grünflächen, Bäumen und Fußwegen",
    description:
      "Neugestaltung eines innerstädtischen Quartierplatzes mit Fokus auf Aufenthaltsqualität, Biodiversität und Klimaanpassung.",
  },
  {
    slug: "kulturzentrum-nord",
    title: "Kulturzentrum Nord",
    location: "Leipzig",
    year: "2022",
    category: "Kulturbau",
    image: kulturzentrum,
    imageAlt:
      "Innenhalle eines Kulturzentrums mit Holzdach, hohen Betonsäulen und einfallendem Tageslicht",
    description:
      "Ein Kulturzentrum als offenes Wohnzimmer der Nachbarschaft. Massives Holztragwerk trifft auf Sichtbeton und großzügige Belichtung.",
  },
  {
    slug: "bildungscampus-west",
    title: "Bildungscampus West",
    location: "München",
    year: "2024",
    category: "Bildungsbau",
    image: bildungscampus,
    imageAlt:
      "Schulgebäude mit vertikaler Holzfassade und großen Fensterflächen im Morgenlicht",
    description:
      "Ein moderner Bildungscampus mit warmer Holzfassade, flexiblen Lernlandschaften und einer klaren, kindgerechten Adressbildung.",
  },
];
