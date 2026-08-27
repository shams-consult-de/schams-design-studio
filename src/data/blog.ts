export type BlogCategory =
  | "Nachhaltiges Bauen"
  | "Design und Ästhetik"
  | "Qualitätssiegel Nachhaltiges Bauen (QNG)";

export interface BlogPost {
  slug: string;
  category: {
    de: string;
    en: string;
  };
  date: {
    de: string;
    en: string;
  };
  isoDate: string;
  readTime: {
    de: string;
    en: string;
  };
  title: {
    de: string;
    en: string;
  };
  excerpt: {
    de: string;
    en: string;
  };
  image: string;
  imageAlt: {
    de: string;
    en: string;
  };
  body: {
    de: string;
    en: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reduktion-in-der-architektur",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "20. Juli 2025",
      en: "July 20, 2025",
    },
    isoDate: "2025-07-20",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Reduktion in der Architektur: Klarheit, die wirkt",
      en: "Reduction in Architecture: Clarity That Resonates",
    },
    excerpt: {
      de: "Reduktion ist kein Verzicht, sondern Entscheidung. In diesem Beitrag zeigen wir, wie Klarheit, gezielte Akzente und gestalterische Zurückhaltung starke Räume schaffen.",
      en: "Reduction is not sacrifice, but decision. Discover how clarity, deliberate accents, and understated restraint create compelling spaces.",
    },
    image: "/images/reduktion-in-der-architektur-klarheit-die-wirkt.jpg",
    imageAlt: {
      de: "Minimalistischer, heller Innenraum mit Podest-Schlafbereich, großen Fenstern, Holzfußboden und klarer, ruhiger Möblierung.",
      en: "Minimalist, bright interior with platform bed, expansive windows, wooden flooring, and serene furnishings.",
    },
    body: {
      de: `Minimalismus ist in der Architektur allgegenwärtig – aber häufig missverstanden. Allzu oft wird Reduktion mit Verzicht verwechselt, mit Leere, Strenge oder gar kühler Distanz. Dabei geht es nicht um das Weglassen um des Weglassens willen. Es geht um das Fokussieren auf das Wesentliche.

Reduktion ist für uns kein ästhetisches Dogma, sondern eine gestalterische Entscheidung mit Haltung: Die Konzentration auf Struktur, Material, Licht und Raumproportion – präzise gedacht und klar umgesetzt.

Ein Raum muss nicht laut sein, um zu wirken. Nicht jeder Entwurf braucht visuelle Fülle, um Substanz zu zeigen. Wirkliche Gestaltung entsteht dort, wo Klarheit die Führung übernimmt.

## Reduktion als Entwurfsstrategie: Konzentration statt Verzicht

Wenn wir Räume entwerfen, stellen wir uns früh die Frage: Was trägt wirklich zur Wirkung bei? Welche Elemente sind notwendig – funktional, atmosphärisch oder räumlich? Und welche können wir bewusst weglassen, ohne an Qualität zu verlieren?

Diese Entscheidungen setzen Sicherheit im Entwurf voraus – denn mit jedem Element, das gestrichen wird, wächst die Bedeutung des verbleibenden.

Beispielhafte Fragen aus der Entwurfsarbeit:
- Ist diese Fuge notwendig – oder lenkt sie ab?
- Wie klar kann die Raumstruktur sein, ohne monoton zu werden?
- Gibt es eine bessere Lösung als einen weiteren Materialwechsel?

Gute Reduktion ist nie zufällig oder beliebig. Sie ist das Ergebnis eines sorgfältigen, oft längeren Planungsprozesses. Denn: Je weniger Elemente zur Verfügung stehen, desto präziser müssen diese aufeinander abgestimmt sein.

## Zurückhaltende Architektur: Klarheit als gestalterisches Prinzip

Zurückhaltung wird oft als „neutral“ wahrgenommen – dabei ist sie alles andere als passiv. Sie ist eine bewusste Entscheidung gegen Überinformation, gegen visuelle Reizüberflutung, gegen gestalterische Beliebigkeit.

Ein zurückhaltender Raum zwingt sich nicht in den Vordergrund. Aber er schafft Atmosphäre, Klarheit, Konzentration. Er lässt Menschen Raum für eigene Wahrnehmung und Interpretation.

Diese Haltung prägt nicht nur den Raum als Ganzes, sondern besonders das Detail:
- Wie sieht ein Übergang von Wand zu Decke aus – ohne sichtbare Schattenfuge?
- Wie kann ein Türgriff gestaltet sein, der in der Wand verschwindet statt sich aufzudrängen?
- Wie viel Ausdruck braucht ein Fensterrahmen – oder ist gerade seine Reduktion das Besondere?

Architektonische Zurückhaltung bedeutet, Gestaltung nicht als Behauptung, sondern als Einladung zu verstehen.

## Akzente setzen: Wie gezielte Gestaltungsspannung entsteht

Ein reduzierter Raum lebt von Klarheit. Aber Klarheit heißt nicht Gleichförmigkeit.

Ein bewusster Akzent kann gezielt Spannung erzeugen – gerade dann, wenn er aus einem ruhigen Gesamtbild hervorsticht. Diese Akzente entstehen nicht willkürlich, sondern folgen der Logik des Raums. Sie lenken den Blick, setzen Schwerpunkte, helfen bei Orientierung oder erzählen eine Geschichte.

Mögliche Mittel:
- Ein besonderer Materialwechsel an einer sensiblen Schnittstelle
- Eine farbliche Intervention im ansonsten monochromen Raum
- Eine Öffnung, die nicht symmetrisch ist, sondern bewusst bricht
- Ein Lichtakzent, der den Fokus setzt – nicht das Volumen

Gerade in der Reduktion entfalten solche Akzente ihre volle Wirkung. Sie schaffen Identität – nicht durch Masse, sondern durch Bedeutung.

## Minimalismus mit Präzision: Reduzierte Räume brauchen Exaktheit

Reduktion fordert uns – nicht nur im Denken, sondern auch im Bauen. Denn je „einfacher“ ein Raum erscheint, desto sichtbarer werden kleine Fehler oder Unsauberkeiten.

Ein reduzierter Entwurf verlangt:
- Exakte Planung von Übergängen, Fugen, Fluchten
- Stimmige Materialwahl – mit echtem Ausdruck, nicht mit Imitation
- Sorgfalt bei Detaillierung und Ausführung – nichts darf „zufällig“ sein
- Disziplin in der Abstimmung mit Fachplanern – denn jede technische Lösung muss gestalterisch integriert werden

Diese Präzision ist herausfordernd, aber lohnend. Denn sie schafft Architektur, die auch in 20 oder 30 Jahren noch stimmig wirkt – zeitlos, statt zeitgeistig.

## Die Kraft klarer Gestaltung in Architektur und Raumplanung

Reduktion ist kein Verzicht. Sie ist Konzentration auf das, was zählt. Sie führt uns zu Entwürfen, die nicht durch visuelle Lautstärke, sondern durch innere Stimmigkeit überzeugen. Wenn wir reduzieren, schaffen wir nicht Leere, sondern Raum für Wirkung. Wir gestalten bewusst – nicht um Aufmerksamkeit zu erzeugen, sondern um Bedeutung zu ermöglichen.

Ein klarer Raum ist nie langweilig. Er ist konzentriert. Kraftvoll. Selbstverständlich. Architektur mit Zurückhaltung ist Architektur mit Haltung.`,
      en: `Minimalism is omnipresent in modern architecture — yet frequently misunderstood. All too often, reduction is confused with deprivation, cold detachment, or bare emptiness. True minimalism is never about omitting for the sake of omission. It is about sharpening the focus on what truly matters.

For our studio, reduction is not an aesthetic dogma, but a conscious design posture: focusing entirely on structure, tactile material, natural light, and spatial proportion — meticulously conceived and executed with precision.

A space does not need to shout to make an impact. True design resonance emerges where clarity takes the lead.

## Reduction as a Design Strategy: Focus Over Sacrifice

When designing spaces, we ask critical questions early on: What genuinely contributes to the spatial experience? Which elements are indispensable functionally, atmospherically, or volumetrically? And which can be omitted without diminishing quality?

Good reduction is never arbitrary. It requires deep confidence in design — because with every element stripped away, the weight of what remains increases exponentially.

## Restraint as an Active Principle

Architectural restraint is often perceived as neutral, but it is deeply deliberate. It stands against sensory overload and stylistic arbitrariness. A quiet space does not force itself upon its inhabitants; instead, it provides breathing room for personal perception and calm focus.

## Precision in Detail

The fewer visual components available, the higher the requirement for millimeter precision in execution — from seamless material transitions to integrated lighting and clean structural alignments. Timeless design outlives short-lived architectural trends.`,
    },
  },
  {
    slug: "wirtschaftliche-umsetzung-nachhaltiger-projekte",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "13. Juli 2025",
      en: "July 13, 2025",
    },
    isoDate: "2025-07-13",
    readTime: {
      de: "5 Min. Lesezeit",
      en: "5 min read",
    },
    title: {
      de: "Tipps für die wirtschaftliche Umsetzung nachhaltiger Projekte",
      en: "Tips for the Cost-Effective Execution of Sustainable Projects",
    },
    excerpt: {
      de: "Der Schlüssel zu wirtschaftlich nachhaltigem Bauen liegt nicht allein in der Materialwahl oder Technik, sondern in der strategischen Projektentwicklung ab Leistungsphase 0.",
      en: "The key to economically sustainable building lies not only in material choices or technology, but in strategic project development from Phase 0.",
    },
    image: "/images/tipps-fuer-die-wirtschaftliche-umsetzung-nachhaltiger-projek.jpg",
    imageAlt: {
      de: "Majeed Shams im Vordergrund rechts begutachtet den Neubau des Bürogebäudes",
      en: "Majeed Shams inspecting the new construction of an office building",
    },
    body: {
      de: `Der Schlüssel zu wirtschaftlich nachhaltigem Bauen liegt nicht allein in der Materialwahl oder Technik, sondern in der strategischen Projektentwicklung. Bei Shams Consult zeigen wir: Wer frühzeitig und ganzheitlich denkt, schafft Bauprojekte mit echtem Mehrwert – ökologisch, sozial und finanziell.

## 1. Frühzeitig planen – Nachhaltigkeit von Anfang an mitdenken

Je früher ökologische und soziale Aspekte in die Planung integriert werden, desto effizienter lassen sie sich umsetzen. Bereits in der Leistungsphase 0 – also vor dem eigentlichen Bauantrag – sollten wichtige Fragen geklärt werden:
- Welche Ziele verfolgen wir – ökologisch, sozial, wirtschaftlich?
- Welche Standards (z. B. QNG) sollen angestrebt werden?
- Welche Flächen, Funktionen und Flexibilitäten braucht das Gebäude langfristig?

Shams Consult unterstützt Sie ab der ersten Idee: Als qualifizierte Nachweisberechtigte für das Qualitätssiegel Nachhaltiges Gebäude (QNG) begleiten wir Sie durch alle erforderlichen Nachweise – und machen nachhaltiges Bauen nachvollziehbar und förderfähig.

## 2. Mit QNG-Qualifizierung langfristigen Wert sichern

Das Qualitätssiegel Nachhaltiges Gebäude (QNG) des Bundes ist ein zentraler Baustein für förderfähige, nachhaltige Immobilien. Es bewertet Gebäude ganzheitlich – nach ökologischen, ökonomischen und sozialen Kriterien – und bietet klare Orientierung für Investoren, Nutzer und Behörden.

Ihre Vorteile mit Shams Consult:
- Wir integrieren die QNG-Kriterien von Anfang an in Ihr Projekt
- Wir führen Sie fachkundig durch den Nachweisprozess
- Wir schaffen die Basis für Förderanträge (z. B. BEG-Förderung)
- Wir stärken die Zukunftsfähigkeit und Werthaltigkeit Ihrer Immobilie

## 3. Fördermittel, Steuervorteile und Abschreibungen clever nutzen

Die öffentliche Hand stellt attraktive Förderinstrumente zur Verfügung, die nachhaltiges Bauen und Sanieren finanziell begünstigen:
- **Bundesförderung für effiziente Gebäude (BEG):** Investitionszuschüsse und zinsvergünstigte Kredite für QNG-zertifizierte Gebäude.
- **Degressive Abschreibung (AfA):** Neubauten mit hoher energetischer Qualität profitieren von beschleunigten Abschreibungen.
- **Sonderabschreibungen:** Zusätzliche Anreize im geförderten Wohnungsbau und Denkmalschutz.
- **Regionale Förderprogramme:** Gezielte Landeszuschüsse für CO₂-neutrales Bauen und Holzbau.

## 4. Investitionen strategisch steuern – Lebenszyklus statt reiner Baukosten

Anstelle kurzfristig niedriger Baukosten sollte der Fokus auf möglichst geringen Lebenszykluskosten liegen. Diese umfassen sämtliche Aufwendungen über die gesamte Nutzungsdauer hinweg:
- Deutlich reduzierte Betriebs- und Wartungskosten durch energieeffiziente Systeme
- Hochwertige, langlebige Materialien, die selten gewartet werden müssen
- Flexible Nutzungskonzepte und hohe Rückbau- sowie Recyclingfähigkeit

Wer heute in nachhaltige Qualität investiert, spart morgen an Betrieb, Wartung und Umbau.`,
      en: `The key to economically sustainable construction does not lie solely in material selection or engineering technology, but in proactive, strategic project development. Early lifecycle thinking creates genuine ecological and financial value.

## 1. Early-Stage Integration from Phase 0
Integrating social and environmental requirements from the preliminary design stage eliminates costly downstream retrofits and ensures smooth regulatory approvals.

## 2. QNG Certification & Federal Grants
As qualified certifiers for the German Federal Quality Seal for Sustainable Buildings (QNG), Shams Consult guides clients through the entire certification process, unlocking substantial BEG low-interest loans and subsidies.

## 3. Optimising Lifecycle Costs (LCC)
Evaluating long-term operational, maintenance, and eventual recycling expenses rather than pure upfront construction cost yields substantial ROI over the 30–50 year building lifecycle.`,
    },
  },
  {
    slug: "proportion-rhythmus-massstab",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "06. Juli 2025",
      en: "July 06, 2025",
    },
    isoDate: "2025-07-06",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Proportion, Rhythmus, Maßstab: Gestaltungsprinzipien aus der Praxis",
      en: "Proportion, Rhythm, Scale: Practical Design Principles",
    },
    excerpt: {
      de: "Was macht einen Raum stimmig? Die Antwort liegt oft in drei stillen Prinzipien der Gestaltung: Proportion, Rhythmus und Maßstab – das Fundament, auf dem Architektur wirkt.",
      en: "What makes a space feel right? The answer lies in three quiet principles of design: proportion, rhythm, and scale — the true foundation of architecture.",
    },
    image: "/images/proportion-rhythmus-massstab-gestaltungsprinzipien-aus-der-p.jpg",
    imageAlt: {
      de: "Holztreppe über mehrere Etagen mit Blick auf ein Dachfenster in der Mitte",
      en: "Multi-story timber staircase with a centered skylight view",
    },
    body: {
      de: `Was macht einen Raum stimmig? Warum fühlt sich ein Gebäude „richtig“ an – lange bevor wir es bewusst analysieren? Die Antwort liegt oft in drei stillen, aber kraftvollen Prinzipien der Gestaltung: Proportion, Rhythmus und Maßstab.

Sie sind keine Mode, keine Frage des Stils – sondern das Fundament, auf dem Architektur wirkt. Wer mit ihnen arbeitet, schafft Klarheit, Orientierung und Qualität.

## Proportion: Das Verhältnis entscheidet

Proportion beschreibt das Verhältnis von Längen, Flächen und Volumen. Ein zu hoher Raum kann unbehaglich wirken, ein zu niedriger gedrungen. Eine zu kleine Tür in einer großen Wandfläche wirkt verloren.

Wir fragen uns bei jeder Planung:
- Wie „steht“ der Raum im Verhältnis zu seiner Nutzung?
- Wie verhalten sich Wand, Öffnung, Decke und Boden zueinander?
- Wo liegt die Balance zwischen Weite und Nähe, Offenheit und Begrenzung?

## Rhythmus: Architektur als Struktur in Bewegung

Rhythmus entsteht durch Wiederholung mit gezielter Variation. In der Fassadengliederung erzeugt ein gleichmäßiges Achsraster Ruhe und Ordnung. Wird dieser Rhythmus an einem Eingang bewusst akzentuiert, entsteht intuitive Orientierung.

## Maßstab: Zwischen Mensch und Raum vermitteln

Der Maßstab beschreibt die Größenverhältnisse im Bezug zum menschlichen Körper. Ein gelungener Maßstab schafft Geborgenheit und Vertrauen – von der städtebaulichen Einbettung bis hin zur Haptik und Höhe eines Handlaufs.`,
      en: `Proportion, rhythm, and human scale form the silent, structural scaffolding of architecture. Harmonious geometric ratios (e.g. 1:2, 2:3, golden ratio) and deliberate facade rhythms establish instinctive spatial clarity, comfort, and legibility.`,
    },
  },
  {
    slug: "flaecheneffizienz-soziale-nachhaltigkeit",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "05. Juli 2025",
      en: "July 05, 2025",
    },
    isoDate: "2025-07-05",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Flächeneffizienz und soziale Nachhaltigkeit",
      en: "Spatial Efficiency and Social Sustainability",
    },
    excerpt: {
      de: "Nachhaltiges Bauen ist nicht nur eine ökologische Herausforderung – es ist auch eine soziale. Wie Raum genutzt und geteilt wird, prägt Kosten und Gemeinschaft.",
      en: "Sustainable building is not only an ecological challenge — it is a social one. How spatial areas are designed and shared shapes costs and community cohesion.",
    },
    image: "/images/flaecheneffizienz-und-soziale-nachhaltigkeit.jpg",
    imageAlt: {
      de: "Ansicht einer offenen Küche mit Esstisch und Barhockern",
      en: "Open-plan kitchen and dining area with barstools",
    },
    body: {
      de: `Nachhaltiges Bauen ist nicht nur eine technische oder ökologische Herausforderung – es ist auch eine soziale. Denn wie viel Raum wir nutzen, wie wir ihn gestalten und teilen, hat enorme Auswirkungen auf Umwelt, Kosten und gesellschaftlichen Zusammenhalt.

## Warum weniger Fläche oft mehr ist

In vielen Bauprojekten liegt das größte Einsparpotenzial in der Reduktion von Fläche. Denn jeder Quadratmeter bedeutet mehr Materialverbrauch, mehr Energiebedarf für Heizung und Kühlung und höhere Baukosten. Ein bewusster Umgang mit Fläche spart Ressourcen und steigert die Lebensqualität durch intelligente Mehrfachnutzung.

## Flexible Grundrisse und Sharing-Konzepte
- Multifunktionale Wohn- und Arbeitszonen
- Gemeinschaftsflächen und Co-Housing-Konzepte
- Barrierefreie, schwellenlose Erschließung für generationsübergreifendes Wohnen`,
      en: `Optimising square meters through flexible floor layouts, non-load-bearing partition systems, and communal shared amenities reduces environmental footprint while enhancing living standards and social cohesion.`,
    },
  },
  {
    slug: "material-spricht",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "29. Juni 2025",
      en: "June 29, 2025",
    },
    isoDate: "2025-07-29",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Material spricht, wenn man es lässt: Wie wir Materialien bewusst auswählen",
      en: "Material Speaks When Allowed: How We Consciously Curate Materials",
    },
    excerpt: {
      de: "Material ist Träger von Atmosphäre, Herkunft und Identität. Warum wir Baustoffe wählen, die ehrlich altern dürfen, statt nur oberflächlich zu wirken.",
      en: "Material carries atmosphere, origin, and identity. Why we select authentic materials that age gracefully over superficial finishes.",
    },
    image: "/images/material-spricht-wenn-man-es-laesst-wie-wir-materialien-bewu.jpg",
    imageAlt: {
      de: "Holztreppe mit geschwungenem Treppengeländer im Bürogebäude",
      en: "Timber staircase with curved railing in a modern building",
    },
    body: {
      de: `Material ist nie neutral. Es ist Träger von Atmosphäre, Herkunft und Identität. Für uns ist Materialwahl ein zentraler Bestandteil des architektonischen Entwurfsprozesses.

Wir bevorzugen Materialien, die in Würde altern und patinieren dürfen, statt künstliche Imitationen einzusetzen. Die haptische Qualität von Holz, Sichtbeton, Lehm und Naturstein tritt in direkten Dialog mit Licht und Raumgeometrie.`,
      en: `Materials convey narrative and authenticity. By celebrating genuine textures, regional timber, tactile plaster, and stone that develop character over time, spaces achieve lasting emotional depth.`,
    },
  },
  {
    slug: "energieeffizienz-in-der-praxis",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "22. Juni 2025",
      en: "June 22, 2025",
    },
    isoDate: "2025-07-22",
    readTime: {
      de: "5 Min. Lesezeit",
      en: "5 min read",
    },
    title: {
      de: "Energieeffizienz in der Praxis – mehr als nur Dämmung",
      en: "Energy Efficiency in Practice – Far Beyond Simple Insulation",
    },
    excerpt: {
      de: "Ein ganzheitliches Energiekonzept verbindet Hüllflächeneffizienz, modernste Haustechnik und regenerative Quellen für langfristige Wirtschaftlichkeit.",
      en: "A holistic energy concept integrates building envelope efficiency, modern HVAC systems, and renewables for lasting economic value.",
    },
    image: "/images/energieeffizienz-in-der-praxis-mehr-als-nur-daemmung.jpg",
    imageAlt: {
      de: "Seitenansicht eines modernisierten Fachwerkhauses",
      en: "Side view of a modernized historic half-timbered building",
    },
    body: {
      de: `Energieeffizienz bedeutet, den Energiebedarf über den gesamten Gebäudelebenszyklus zu minimieren. Ein effektives Konzept kombiniert:
- Kompakte Baukörper mit optimalem A/V-Verhältnis
- Hochgedämmte, wärmebrückenfreie Hüllen und 3-fach Verglasung
- Wärmepumpentechnik, kontrollierte Wohnraumlüftung mit Wärmerückgewinnung und integrierte Photovoltaik`,
      en: `Comprehensive energy design transcends insulation. Compact envelope geometries, airtight construction with heat-recovery ventilation, and rooftop PV systems create self-sufficient, resilient structures.`,
    },
  },
  {
    slug: "licht-als-entwurfspartner",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "14. Juni 2025",
      en: "June 14, 2025",
    },
    isoDate: "2025-07-14",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Licht als Entwurfspartner und mächtiges Gestaltungsmittel",
      en: "Light as a Design Partner and Powerful Architectural Medium",
    },
    excerpt: {
      de: "Licht ist immateriell, dynamisch und formt den Charakter eines Raumes im Tagesverlauf. Wie Tageslichtsimulationen Entwürfe lebendig machen.",
      en: "Light is immaterial, dynamic, and shapes spatial character throughout the day. How daylight simulation enriches living architecture.",
    },
    image: "/images/licht-als-entwurfspartner-und-maechtiges-gestaltungsmittel-i.jpg",
    imageAlt: {
      de: "Lichtdurchfluteter Raum mit markanter Schattenführung",
      en: "Sunlit room with distinctive architectural shadow play",
    },
    body: {
      de: `Licht ist für uns kein nachträgliches Detail, sondern ein aktiver Entwurfspartner. Durch gezielte Platzierung von Öffnungen, diffusem Nordlicht für Arbeitsplätze und dynamischem Sonnenlicht für Aufenthaltsbereiche bleibt das Gebäude im Tages- und Jahreszeitenverlauf lebendig.`,
      en: `Natural daylight defines volume, texture, and psychological well-being. Early daylight simulation ensures optimal illumination without glare or unwanted thermal loads.`,
    },
  },
  {
    slug: "raum-wirkt",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "09. Juni 2025",
      en: "June 09, 2025",
    },
    isoDate: "2025-07-09",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Raum wirkt – ob wir wollen oder nicht: Wie Architektur Emotionen lenkt",
      en: "Spaces Have Impact: How Architecture Triggers Emotion & Guides Behaviour",
    },
    excerpt: {
      de: "Architektur kommuniziert ohne Worte. Räume steuern Wahrnehmung, Wohlbefinden und Produktivität – eine bewusste planerische Verantwortung.",
      en: "Architecture communicates without words. Spaces shape perception, well-being, and productivity — a profound planning responsibility.",
    },
    image: "/images/raum-wirkt-ob-wir-wollen-oder-nicht-wie-architektur-emotione.jpg",
    imageAlt: {
      de: "Moderne Innenraumgestaltung mit Fokus auf Raumwirkung",
      en: "Modern interior design focusing on atmospheric perception",
    },
    body: {
      de: `Jeder Raum hat Wirkung. Architektur spricht durch Akustik, Proportion, Material und Licht. Ob ein Foyer Vertrauen und Offenheit ausstrahlt oder ein Seminarraum maximale Konzentration unterstützt, ist das Ergebnis präziser planerischer Entscheidungen.`,
      en: `Built environments actively shape mood and social interactions. Intentional spatial sequencing guides human behavior naturally and intuitively.`,
    },
  },
  {
    slug: "was-wir-unter-guter-gestaltung-verstehen",
    category: {
      de: "Design und Ästhetik",
      en: "Design & Aesthetics",
    },
    date: {
      de: "08. Juni 2025",
      en: "June 08, 2025",
    },
    isoDate: "2025-07-08",
    readTime: {
      de: "3 Min. Lesezeit",
      en: "3 min read",
    },
    title: {
      de: "Was wir unter guter Gestaltung verstehen",
      en: "What We Understand as Good Design",
    },
    excerpt: {
      de: "Gute Gestaltung ist kein Selbstzweck oder Deko-Effekt. Sie ist Haltung, Strategie und die bewusste Antwort auf Raum, Funktion und Mensch.",
      en: "Good design is never decorative self-indulgence. It is an attitude, strategy, and deliberate response to space, function, and human needs.",
    },
    image: "/images/was-wir-unter-guter-gestaltung-verstehen.jpg",
    imageAlt: {
      de: "Klares architektonisches Detail und Raumgeometrie",
      en: "Clean architectural detailing and spatial geometry",
    },
    body: {
      de: `Gute Gestaltung beginnt bei der präzisen Fragestellung und endet erst dort, wo ein Raum im Alltag seine Qualität beweist. Sie verbindet Funktionalität, ästhetische Zeitlosigkeit und gesellschaftliche Verantwortung.`,
      en: `Design excellence unites purpose, material honesty, and emotional resonance into an enduring spatial statement.`,
    },
  },
  {
    slug: "materialien-mit-verantwortung",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "07. Juni 2025",
      en: "June 07, 2025",
    },
    isoDate: "2025-07-07",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Materialien mit Verantwortung – Baustoffe der Zukunft",
      en: "Materials with Responsibility – Building Blocks of the Future",
    },
    excerpt: {
      de: "Holz-Hybrid, Lehm und Hanf: Ökologische Alternativen reduzieren graue Energie und schaffen gesunde, zukunftsfähige Lebensräume.",
      en: "Timber-hybrid, clay, and hemp: Ecological materials reduce embodied carbon and create healthy, future-proof spaces.",
    },
    image: "/images/materialien-mit-verantwortung-baustoffe-der-zukunft.jpg",
    imageAlt: {
      de: "Dachgeschoss mit Holzbalken und gedämmten Wänden",
      en: "Attic with exposed timber rafters and insulated envelope",
    },
    body: {
      de: `Die Wahl der Baustoffe entscheidet über den CO₂-Fußabdruck und die Schadstofffreiheit eines Gebäudes. Holz-Hybrid-Konstruktionen, Lehmbaustoffe und Hanfdämmungen stehen heute technisch und gestalterisch auf Augenhöhe mit konventionellen Materialien und bieten überragende Recyclingfähigkeit.`,
      en: `Low embodied energy, cradle-to-cradle recyclability, and non-toxic indoor air quality define the next generation of building materials.`,
    },
  },
  {
    slug: "nachhaltig-planen",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "31. Mai 2025",
      en: "May 31, 2025",
    },
    isoDate: "2025-05-31",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Nachhaltig planen – der Schlüssel liegt im Entwurf",
      en: "Sustainable Planning – The Key Lies in the Initial Design",
    },
    excerpt: {
      de: "Standortwahl, solare Ausrichtung und Hüllflächen-Kompaktheit: Wie schon in den ersten Leistungsphasen der ökologische Fußabdruck minimiert wird.",
      en: "Site selection, solar orientation, and compactness: How the ecological footprint is drastically reduced from the earliest design stages.",
    },
    image: "/images/nachhaltig-planen-der-schluessel-liegt-im-entwurf.jpg",
    imageAlt: {
      de: "Entwurf eines mehrstöckigen Mehrfamilienhauses mit Grünanlagen",
      en: "Architectural blueprint of a multi-family residential building with gardens",
    },
    body: {
      de: `Ein nachhaltiges Gebäude entsteht am Zeichentisch. Durch zonierte Grundrisse, passive Solargewinne im Winter, wirksamen sommerlichen Sonnenschutz und Begrünungskonzepte werden Energieverbräuche vorab ohne Zusatzkosten minimiert.`,
      en: `Passive architectural design — solar orientation, compact massing, natural ventilation — provides the greatest environmental impact at zero cost premium.`,
    },
  },
  {
    slug: "was-bedeutet-nachhaltiges-bauen",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "25. Mai 2025",
      en: "May 25, 2025",
    },
    isoDate: "2025-05-25",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "Was bedeutet nachhaltiges Bauen eigentlich?",
      en: "What Does Sustainable Building Actually Mean?",
    },
    excerpt: {
      de: "Die drei Säulen Ökologie, Ökonomie und Soziales im Bauwesen: Von GEG und ESG-Kriterien bis zu ganzheitlichen Lebenszykluskosten.",
      en: "The three pillars of ecology, economy, and society in construction: From GEG and ESG standards to lifecycle cost optimisation.",
    },
    image: "/images/was-bedeutet-nachhaltiges-bauen-eigentlich.jpg",
    imageAlt: {
      de: "Grafik und Baukonzept für nachhaltige Architektur",
      en: "Concept schematic for sustainable architectural planning",
    },
    body: {
      de: `Nachhaltigkeit im Bauwesen stützt sich auf Ökologie (Ressourcenschonung & CO₂-Reduktion), Ökonomie (Lebenszykluskosten & Werterhalt) und Soziales (Barrierefreiheit, Raumgesundheit & Inklusion).`,
      en: `Sustainable architecture bridges ecological responsibility, long-term asset value preservation, and universal social accessibility.`,
    },
  },
  {
    slug: "nachhaltigkeit-beginnt-vor-dem-spatenstich",
    category: {
      de: "Nachhaltiges Bauen",
      en: "Sustainable Building",
    },
    date: {
      de: "24. Mai 2025",
      en: "May 24, 2025",
    },
    isoDate: "2025-05-24",
    readTime: {
      de: "4 Min. Lesezeit",
      en: "4 min read",
    },
    title: {
      de: "„Nachhaltigkeit beginnt lange vor dem ersten Spatenstich“",
      en: "“Sustainability Begins Long Before Breaking Ground”",
    },
    excerpt: {
      de: "Im Gespräch erläutert Majeed Shams, was zukunftsfähige Baukultur ausmacht, warum weniger oft mehr ist und wie zirkuläres Bauen gelingt.",
      en: "In conversation, Majeed Shams explains what defines sustainable building culture, why less is more, and how circular construction succeeds.",
    },
    image: "/images/nachhaltigkeit-beginnt-lange-vor-dem-ersten-spatenstich.jpg",
    imageAlt: {
      de: "Porträt und Skizzen zur nachhaltigen Architektur",
      en: "Portrait and schematics on ecological architecture",
    },
    body: {
      de: `„Nachhaltigkeit ist nicht gleichbedeutend mit teurer Technik oder einer Solaranlage auf dem Dach. Architektur selbst kann durch kluge Grundrisse, regionale Baustoffe und Zirkularität nachhaltig sein.“ – Dipl.-Ing. Majeed Shams im Interview.`,
      en: `“Sustainability is not merely adding solar panels to a conventional structure; it begins with the spatial concept, material restraint, and circular longevity.” — Dipl.-Ing. Majeed Shams.`,
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
