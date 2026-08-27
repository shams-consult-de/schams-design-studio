export interface Testimonial {
  id: string;
  author: string;
  role: string;
  projectType: string;
  rating: number;
  text: string;
  highlightText: string;
  date: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "samuel-allaw",
    author: "Samuel Allaw",
    role: "Projektentwickler & Bauherr",
    projectType: "Mehrfamilienhaus mit 9 Wohneinheiten",
    rating: 5,
    highlightText: "Hat als einziges Architekturbüro unser geplantes 9-Wohnungen-Projekt bei der Bauaufsicht durchgesetzt!",
    text: "Ausgezeichnet! Shams Consult hat als einziges Architekturbüro unser geplantes Projekt bei der Bauaufsicht durchgesetzt. Wir haben jahrelang mit anderen Architekten für eine Baugenehmigung gekämpft, jedoch ohne Erfolg. Herr Shams hat unser kompliziertes Projekt mit 9 Wohnungen an sich genommen und uns die lang ersehnte Baugenehmigung erbracht. Die Kommunikation war zu jeder Zeit super und wir haben uns sehr gut aufgehoben gefühlt.",
    date: "Google Rezension · 5.0 ★★★★★",
    verified: true,
  },
  {
    id: "frau-rauck",
    author: "Familie Rauck",
    role: "Private Bauherren",
    projectType: "Wohnhausplanung & Genehmigung",
    rating: 5,
    highlightText: "Sehr kompetent und professionell – uneingeschränkte Empfehlung!",
    text: "Sehr kompetent und professionell, wir können das Architekturbüro Shams Consult nur wärmstens weiterempfehlen! Termintreue, hervorragende Ideen für unseren Grundriss und eine reibungslose Abstimmung mit den Behörden.",
    date: "Google Rezension · 5.0 ★★★★★",
    verified: true,
  },
  {
    id: "omar-fedai",
    author: "Omar Fedai",
    role: "Gewerblicher Investor",
    projectType: "Baugenehmigung & Nutzungsänderung",
    rating: 5,
    highlightText: "Überzeugt durch außergewöhnliche Fachkompetenz und Professionalität.",
    text: "Herr Shams überzeugte mich mit immenser Fachkompetenz und Professionalität. Er kennt die Abläufe im Bauamt bis ins letzte Detail, wodurch wir wertvolle Monate gespart haben. Ich kann das Architekturbüro zu 100% weiterempfehlen.",
    date: "Google Rezension · 5.0 ★★★★★",
    verified: true,
  },
  {
    id: "holger-elvers",
    author: "Holger Elvers",
    role: "Bauherr / Bestandssanierung",
    projectType: "Kaufberatung & Kernsanierung",
    rating: 5,
    highlightText: "Ausgezeichnete Beratung und Projektleitung von Anfang bis Ende.",
    text: "Ausgezeichnete Beratung und Projektleitung. Ich habe mich jederzeit gut aufgehoben gefühlt. Die Kommunikation mit Herrn Shams war stets freundlich, transparent und immer fachlich hochkompetent.",
    date: "Google Rezension · 5.0 ★★★★★",
    verified: true,
  },
];

export interface PartnerLogo {
  name: string;
  tag: string;
  description: string;
  projectNote: string;
}

export const corporatePartners: PartnerLogo[] = [
  {
    name: "Adapteo",
    tag: "Modulares & Temporäres Bauen",
    description: "Spezialist für modulare Großgebäude aus Neu-Isenburg.",
    projectNote: "Gemeinsame Realisierung des Ausweichquartiers für über 200 Mitarbeitende eines Bundesbehördenzentrums in Berlin (2025) für die Bundesanstalt für Immobilienaufgaben (BImA).",
  },
  {
    name: "SCHOOFS Immobilien",
    tag: "Projektentwicklung & Handel",
    description: "Bundesweit führender Projektentwickler im Bereich Nahversorgung & Wohnen.",
    projectNote: "Begleitung bei Planung und Realisierung moderner Supermärkte, Wohnbauten und Außenanlagen im Rhein-Main-Gebiet.",
  },
  {
    name: "Frankfurt UAS",
    tag: "Forschung & Wissenschaft",
    description: "Fachbereich 1: Architektur, Bauingenieurwesen und Geomatik.",
    projectNote: "Majeed Shams ist seit 2020 ehrenamtlicher Lehrbeauftragter und betreut zukunftsweisende Bachelor- und Masterarbeiten.",
  },
  {
    name: "Stadtwerke Rodgau",
    tag: "Kommunale Infrastruktur",
    description: "Kommunaler Eigenbetrieb für umweltfreundliche Infrastruktur.",
    projectNote: "Erfolgreiche Genehmigungsplanung für die Kompostierungsanlage und nachhaltige Infrastrukturvorhaben.",
  },
  {
    name: "INSTINKT Bauunternehmen",
    tag: "Wohnungsbau Rhein-Main",
    description: "Regionaler Bauträger für hochwertige Ein-, Doppel- und Reihenhäuser.",
    projectNote: "Architektonische Planung und Genehmigungsmanagement für innovative Wohnquartiere in Hessen.",
  },
];
