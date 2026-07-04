export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: "Nachhaltiges Bauen" | "Design und Ästhetik" | "Qualitätssiegel Nachhaltiges Bauen (QNG)";
  excerpt: string;
  image: string;
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reduktion-in-der-architektur",
    title: "Reduktion in der Architektur: Klarheit, die wirkt",
    date: "20. Juli 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Reduktion ist kein Verzicht, sondern Entscheidung. In diesem Beitrag zeigen wir, wie Klarheit, gezielte Akzente und gestalterische Zurückhaltung starke Räume schaffen.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/ic949eb8f5fd203af/version/1753019052/reduktion-in-der-architektur-klarheit-die-wirkt.png",
    href: "https://www.shams-consult.de/reduktion-in-der-architektur-klarheit-die-wirkt/",
  },
  {
    slug: "wirtschaftliche-umsetzung-nachhaltiger-projekte",
    title: "Tipps für die wirtschaftliche Umsetzung nachhaltiger Projekte",
    date: "13. Juli 2025",
    category: "Nachhaltiges Bauen",
    excerpt:
      "Der Schlüssel zu wirtschaftlich nachhaltigem Bauen liegt nicht allein in der Materialwahl oder Technik, sondern in der strategischen Projektentwicklung.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/ie3b09ea40af7df72/version/1752403315/tipps-f%C3%BCr-die-wirtschaftliche-umsetzung-nachhaltiger-projekte.png",
    href: "https://www.shams-consult.de/tipps-f%C3%BCr-die-wirtschaftliche-umsetzung-nachhaltiger-projekte/",
  },
  {
    slug: "proportion-rhythmus-massstab",
    title: "Proportion, Rhythmus, Maßstab: Gestaltungsprinzipien aus der Praxis",
    date: "06. Juli 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Was macht einen Raum stimmig? Warum fühlt sich ein Gebäude „richtig“ an — lange bevor wir es bewusst analysieren? Die Antwort liegt oft in drei stillen, aber kraftvollen Prinzipien.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/if6da08ec415a657a/version/1751797332/proportion-rhythmus-ma%C3%9Fstab-gestaltungsprinzipien-aus-der-praxis.png",
    href: "https://www.shams-consult.de/proportion-rhythmus-ma%C3%9Fstab-gestaltungsprinzipien-aus-der-praxis/",
  },
  {
    slug: "flaecheneffizienz-soziale-nachhaltigkeit",
    title: "Flächeneffizienz und soziale Nachhaltigkeit",
    date: "05. Juli 2025",
    category: "Nachhaltiges Bauen",
    excerpt:
      "Nachhaltiges Bauen ist nicht nur eine technische oder ökologische Herausforderung — es ist auch eine soziale.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/i609f94defd48ad28/version/1751721532/fl%C3%A4cheneffizienz-und-soziale-nachhaltigkeit.png",
    href: "https://www.shams-consult.de/fl%C3%A4cheneffizienz-und-soziale-nachhaltigkeit/",
  },
  {
    slug: "material-spricht",
    title: "Material spricht, wenn man es lässt",
    date: "29. Juni 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Material ist nie neutral. Es ist mehr als Oberfläche, mehr als Textur — Träger von Atmosphäre, Herkunft und Identität.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/ie6c7f3873bd67905/version/1751206080/material-spricht-wenn-man-es-l%C3%A4sst-wie-wir-materialien-bewusst-ausw%C3%A4hlen-und-inszenieren.png",
    href: "https://www.shams-consult.de/material-spricht-wenn-man-es-l%C3%A4sst-wie-wir-materialien-bewusst-ausw%C3%A4hlen-und-inszenieren/",
  },
  {
    slug: "energieeffizienz-in-der-praxis",
    title: "Energieeffizienz in der Praxis — mehr als nur Dämmung",
    date: "22. Juni 2025",
    category: "Nachhaltiges Bauen",
    excerpt:
      "Energieeffizienz ist einer der zentralen Bausteine nachhaltigen Bauens — und weit mehr als eine Frage der Wärmedämmung.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/i2c8c831aeb3e5a4d/version/1751719417/energieeffizienz-in-der-praxis-mehr-als-nur-d%C3%A4mmung.png",
    href: "https://www.shams-consult.de/energieeffizienz-in-der-praxis-%E2%80%93-mehr-als-nur-d%C3%A4mmung/",
  },
  {
    slug: "licht-als-entwurfspartner",
    title: "Licht als Entwurfspartner in der Architektur",
    date: "14. Juni 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Warum wir Licht nicht nur planen, sondern als aktiven Gestaltungsfaktor begreifen — für Räume, die im Tagesverlauf lebendig bleiben.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/id651d13a815f9bea/version/1749911756/licht-als-entwurfspartner-und-m%C3%A4chtiges-gestaltungsmittel-in-der-architektur.png",
    href: "https://www.shams-consult.de/licht-als-entwurfspartner-und-m%C3%A4chtiges-gestaltungsmittel-in-der-architektur/",
  },
  {
    slug: "raum-wirkt",
    title: "Raum wirkt — ob wir wollen oder nicht",
    date: "09. Juni 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Als Architekturbüro sehen wir darin eine zentrale Verantwortung: Räume so zu gestalten, dass sie nicht nur funktional erfüllen, sondern atmosphärisch und emotional positiv wirken.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/i2386c7fc88ee26ea/version/1749473613/raum-wirkt-ob-wir-wollen-oder-nicht-wie-architektur-emotionen-ausl%C3%B6st-und-verhalten-beeinflusst.png",
    href: "https://www.shams-consult.de/wie-architektur-emotionen-ausl%C3%B6st-und-verhalten-beeinflusst/",
  },
  {
    slug: "was-wir-unter-guter-gestaltung-verstehen",
    title: "Was wir unter guter Gestaltung verstehen",
    date: "08. Juni 2025",
    category: "Design und Ästhetik",
    excerpt:
      "Gute Gestaltung ist weit mehr als eine Frage des Geschmacks — sie ist Haltung, Strategie und Verantwortung zugleich.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/i3631a94f4bc3fc1c/version/1749389277/was-wir-unter-guter-gestaltung-verstehen.png",
    href: "https://www.shams-consult.de/was-wir-unter-guter-gestaltung-verstehen/",
  },
  {
    slug: "materialien-mit-verantwortung",
    title: "Materialien mit Verantwortung — Baustoffe der Zukunft",
    date: "07. Juni 2025",
    category: "Nachhaltiges Bauen",
    excerpt:
      "Welche Materialien sind wirklich nachhaltig? Ein Blick auf konventionelle und ökologische Baustoffe, Auswahlkriterien und innovative Lösungen.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/i63d95a7deeeb623c/version/1749387210/materialien-mit-verantwortung-baustoffe-der-zukunft.png",
    href: "https://www.shams-consult.de/materialien-mit-verantwortung-%E2%80%93-baustoffe-der-zukunft/",
  },
  {
    slug: "nachhaltig-planen",
    title: "Nachhaltig planen — der Schlüssel liegt im Entwurf",
    date: "31. Mai 2025",
    category: "Nachhaltiges Bauen",
    excerpt:
      "Nachhaltigkeit beginnt lange vor dem Baustart. Die entscheidenden Weichen werden im Entwurfsprozess gestellt.",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=2000x1500:format=png/path/sc1699083d70b354e/image/ic949eb8f5fd203af/version/1753019052/reduktion-in-der-architektur-klarheit-die-wirkt.png",
    href: "https://www.shams-consult.de/nachhaltig-planen-%E2%80%93-der-schl%C3%BCssel-liegt-im-entwurf/",
  },
];
