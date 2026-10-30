export interface OpenThesisTopic {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  degrees: string;
  disciplines: string[];
  teaser: string;
  stats: Array<{ value: string; label: string; footnote?: string }>;
  pilotProject: {
    title: string;
    description: string;
  };
  problemStatement: string[];
  objectives: string[];
  researchQuestions: Array<{ title: string; desc: string }>;
  framework: string[];
  sources: string[];
  pdfDownloadUrl: string;
  pdfFileName: string;
  applicationEmail: string;
  applicationSubject: string;
}

export const openThesesData: Record<"de" | "en", OpenThesisTopic[]> = {
  de: [
    {
      id: "schwammstadt",
      slug: "schwammstadt",
      number: "Thema 01",
      title: "Schwammstadt ohne Kunststoff",
      subtitle: "Mineralische Rigolen als Baustein der Regenwasserbewirtschaftung – vom Einzelprojekt zum städtebaulichen Quartierskonzept",
      degrees: "Bachelor- oder Masterarbeit",
      disciplines: ["Architektur", "Stadtplanung", "Bauingenieurwesen"],
      teaser: "Regenwasser soll dort versickern, wo es fällt – doch meist geschieht das über Kunststoffrigolen, die für Jahrzehnte im Boden bleiben. Ausgehend von einem realisierten Pilotprojekt mit einer Steinwolle-Rigole untersucht die Arbeit, wie mineralische Systeme die Schwammstadt im Quartier tragen können.",
      stats: [
        { value: "≈ 45 %", label: "der Siedlungs- und Verkehrsflächen in Deutschland sind versiegelt" },
        { value: "52 ha", label: "neue Siedlungs- und Verkehrsfläche pro Tag (2019–2022); Ziel 2030: < 30 ha" },
        { value: "12,6 Mrd. €", label: "Starkregenschäden an Wohngebäuden 2002–2021 – jedes 10. Haus betroffen" },
        { value: "95 %", label: "ihres Volumens nimmt Steinwolle an Wasser auf – rund 950 l je m³ in ca. 10 Min." }
      ],
      pilotProject: {
        title: "Reales Pilotprojekt mit ROCKWOOL",
        description: "Einbau einer mineralischen Steinwolle-Rigole im Wohnungsbau als nachhaltige Alternative zu fossilen Kunststoffboxen."
      },
      problemStatement: [
        "Die zunehmende Versiegelung verändert den natürlichen Wasserhaushalt grundlegend: Rund 45 Prozent der Siedlungs- und Verkehrsflächen in Deutschland sind versiegelt, und täglich kommen im Mittel etwa 52 Hektar neue Siedlungs- und Verkehrsfläche hinzu. Niederschlag kann auf diesen Flächen kaum noch versickern oder verdunsten; er fließt oberflächlich ab und belastet Kanalnetze und Gewässer.",
        "Der Klimawandel verschärft diese Lage. Kurze, heftige Starkregen verursachten zwischen 2002 und 2021 an Wohngebäuden Schäden von rund 12,6 Milliarden Euro; statistisch war jedes zehnte Haus betroffen. Zugleich nehmen Hitze- und Trockenperioden zu, in denen gespeichertes Wasser fehlt. Das Leitbild der Schwammstadt setzt hier an: Regenwasser soll dezentral zurückgehalten, versickert und verdunstet werden.",
        "In der Praxis wird die dezentrale Versickerung überwiegend mit Rigolen aus Kunststoff umgesetzt. Diese Bauteile verbleiben für Jahrzehnte im Untergrund; ihre Herstellung beruht auf fossilen Rohstoffen, und Fragen zu Alterung, Rückbau und Recycling sind weitgehend offen. Damit steht ausgerechnet ein Baustein klimaangepasster Stadtentwicklung im Widerspruch zum Ziel nachhaltigen Bauens.",
        "Mineralische Alternativen wie Steinwolle, die bis zu 95 Prozent ihres Volumens an Wasser aufnehmen kann, sind marktverfügbar und in Einzelprojekten erprobt. Shams Consult hat gemeinsam mit einem Bauherrn und der Firma ROCKWOOL ein solches Vorzeigeprojekt realisiert. Es fehlen jedoch systematische Vergleichsdaten zu Leistungsfähigkeit, CO₂-Bilanz, Lebensdauer und Kosten sowie Planungsgrundlagen, die eine Übertragung vom Einzelgrundstück auf Quartiere und Stadtteile erlauben."
      ],
      objectives: [
        "Ziel der Arbeit ist es, ausgehend vom realisierten Pilotprojekt die Übertragbarkeit mineralischer Rigolensysteme auf die Quartiers- und Stadtteilebene zu untersuchen und daraus ein städtebauliches Schwammstadt-Konzept abzuleiten.",
        "Systematischer Kriterienvergleich von Kunststoff-, Kies- und Steinwollerigolen sowie weiteren mineralischen oder recycelten Materialien (Speicher- und Sickerleistung, Flächenbedarf, CO₂-Bilanz, Lebensdauer, Rückbaubarkeit und Kosten).",
        "Kombination und Optimierung verschiedener Modelle der Regenwasserbewirtschaftung (Versickerung, Retention, Verdunstung, Baumrigolen, Gründächer) für ein Modellquartier.",
        "Ergebnis ist ein übertragbarer Planungsleitfaden, der Kommunen, Planenden und Bauherren Entscheidungsgrundlagen für eine kunststofffreie, klimaangepasste Regenwasserbewirtschaftung bietet."
      ],
      researchQuestions: [
        { title: "Skalierung", desc: "Wie lässt sich das Pilotprojekt auf ein Quartier oder einen Stadtteil übertragen (Flächenbedarf, Speichervolumen, Bemessung z. B. nach DWA-Regelwerk)?" },
        { title: "Materialforschung", desc: "Welche mineralischen oder recycelten Materialien eignen sich als Alternative zu Kunststoff, und wie schneiden sie im Vergleich ab?" },
        { title: "Bewirtschaftungsmodelle", desc: "Wie lassen sich Versickerung, Retention und Verdunstung im Quartier sinnvoll kombinieren und optimieren?" },
        { title: "Konzept & Leitfaden", desc: "Welche Planungsschritte und Kriterien gehören in einen übertragbaren Leitfaden für Kommunen?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor- oder Masterarbeit, auch als Teamarbeit möglich",
        "Realisiertes Praxisprojekt als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Umweltbundesamt: Bebauung und Versiegelung; Siedlungs- und Verkehrsfläche (umweltbundesamt.de).",
        "Statistisches Bundesamt / Umweltbundesamt: Anstieg der Siedlungs- und Verkehrsfläche 2019–2022; Ziele der Deutschen Nachhaltigkeitsstrategie.",
        "GDV – Gesamtverband der Deutschen Versicherungswirtschaft: Starkregenbilanz 2002–2021.",
        "ROCKWOOL Rainwater Systems: Merkblatt Wasseraufnahme und -abgabe (Rockflow); Hoogheemraadschap Hollands Noorderkwartier: Steenwolblokken."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-01_Schwammstadt.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-01_Schwammstadt.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Abschlussarbeit Thema 01 – Schwammstadt"
    },
    {
      id: "cradle-to-cradle",
      slug: "cradle-to-cradle",
      number: "Thema 02",
      title: "Cradle to Cradle: Bauteile im Kreislauf",
      subtitle: "Werkzeuge für nachhaltige Mehrfamilienhäuser nach dem Qualitätssiegel Nachhaltiges Gebäude (QNG) – vom Rückbau bis zur Wiederverwendung",
      degrees: "Bachelor- oder Masterarbeit",
      disciplines: ["Architektur", "Bauingenieurwesen", "Projektmanagement"],
      teaser: "Nachhaltige Neubauten müssen ihre CO₂-Bilanz über den gesamten Lebenszyklus nachweisen – und beim Abriss alter Gebäude landen wertvolle Bauteile auf der Deponie. Die Arbeit entwickelt Werkzeuge und einen Leitfaden, mit denen Planende beides systematisch lösen: QNG-gerechte Mehrfamilienhäuser und die Wiederverwendung von Bauteilen aus dem Bestand.",
      stats: [
        { value: "198,8 Mio. t", label: "Bau- und Abbruchabfälle 2023 in Deutschland – mehr als die Hälfte des gesamten Abfallaufkommens" },
        { value: "≈ 28 %", label: "der deutschen Treibhausgasemissionen gehen auf den Gebäudebetrieb zurück" },
        { value: "24 kg", label: "CO₂-Äq. je m² und Jahr: Lebenszyklus-Grenzwert für geförderte klimafreundliche Wohngebäude (KfW 296)" },
        { value: "QNG", label: "Qualitätssiegel Nachhaltiges Gebäude als Qualitäts- und Fördermaßstab" }
      ],
      pilotProject: {
        title: "Mehrfamilienhaus mit Alt- und Neubau",
        description: "Reales Projekt von Shams Consult: Schonender Rückbau im Bestand als Rohstoffquelle für den zirkulären Neubau."
      },
      problemStatement: [
        "Der Gebäudesektor ist einer der größten Hebel für den Klimaschutz: Allein der Betrieb von Gebäuden ist nach dem Verursacherprinzip für rund 28 Prozent der deutschen Treibhausgasemissionen verantwortlich. Je effizienter Gebäude im Betrieb werden, desto stärker rücken die sogenannten grauen Emissionen aus Herstellung, Bau und Rückbau in den Fokus.",
        "Förderprogramme und das Qualitätssiegel Nachhaltiges Gebäude (QNG) verlangen deshalb eine Ökobilanz über den gesamten Lebenszyklus. Für geförderte klimafreundliche Wohngebäude gilt beispielsweise ein Grenzwert von 24 kg CO₂-Äquivalent je Quadratmeter und Jahr. In der Planungspraxis beginnt die Nachweisführung jedoch bei jedem Projekt nahezu von vorn: Standardisierte Vorlagen, Bauteilkataloge und abgestimmte Arbeitsabläufe fehlen, Erfahrungen aus früheren Projekten fließen kaum systematisch ein.",
        "Gleichzeitig ist das Bauwesen der größte Abfallverursacher: 2023 fielen in Deutschland rund 198,8 Millionen Tonnen Bau- und Abbruchabfälle an – mehr als die Hälfte des gesamten Abfallaufkommens. Bauteile, die noch funktionsfähig wären, werden meist zerkleinert, minderwertig verwertet oder deponiert. Eine Wiederverwendung im Sinne von Cradle to Cradle scheitert bislang an fehlender Datenerfassung im Bestand, an Fragen zu Schadstoffen, Normen und Gewährleistung sowie an Logistik, Zwischenlagerung und Kosten."
      ],
      objectives: [
        "Ziel der Arbeit ist ein übertragbares Rahmenwerk, das Planungsbüros erlaubt, Nachhaltigkeitskriterien und CO₂-Bilanzierung für Mehrfamilienhäuser auf geprüfte Vorlagen, Checklisten und Bauteilvarianten zu stützen, sodass mehrere Projekte parallel nach demselben Schema bearbeitet werden können.",
        "Entwicklung eines praxisorientierten Leitfadens zum ressourcenschonenden Rückbau im Bestand: Schonender Ausbau und Wiederverwendung je Baualtersklasse.",
        "Strukturierung der Datenerfassung: Bauteilkatalog, Materialpass, BIM, Sortierung, Zwischenlagerung und Wiedereinbau sowie Vermeidung unnötiger Kosten.",
        "Erprobung und Bewertung der Werkzeuge und des Leitfadens am Fallbeispiel eines Projekts mit Altbau und Neubau von Shams Consult zur öffentlichen Zugänglichmachung."
      ],
      researchQuestions: [
        { title: "Systematik Neubau", desc: "Welche Vorlagen, Checklisten und Werkzeuge erleichtern die QNG-Nachweisführung für Mehrfamilienhäuser?" },
        { title: "Bauteiloptimierung", desc: "Welche Konstruktionen und Systeme senken die CO₂-Bilanz am stärksten?" },
        { title: "Rückbau im Bestand", desc: "Welche Bauteile sind je Baualtersklasse wiederverwendbar, und welche rechtlichen und technischen Hürden bestehen?" },
        { title: "Prozess und Daten", desc: "Wie lassen sich Erfassung, Sortierung, Zwischenlagerung und Wiedereinbau effizient organisieren?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor- oder Masterarbeit, auch als Teamarbeit (Schwerpunkt Neubau oder Bestand)",
        "Mehrfamilienhaus-Projekt mit Altbau und Neubau als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Umweltbundesamt: Abfallaufkommen, Daten 2023 (umweltbundesamt.de).",
        "Bierwirth, A.; Kaselofsky, J.: Klimaneutrale Gebäude. Bundeszentrale für politische Bildung, Dossier Klimawandel, 2025 (nach Daten des Umweltbundesamts).",
        "KfW: Merkblatt 296 – Klimafreundlicher Neubau im Niedrigpreissegment, Technische Mindestanforderungen.",
        "Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen: Qualitätssiegel Nachhaltiges Gebäude (QNG)."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-02_Cradle-to-Cradle.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-02_Cradle-to-Cradle.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Abschlussarbeit Thema 02 – Cradle to Cradle"
    },
    {
      id: "gebaeudetyp-e",
      slug: "gebaeudetyp-e",
      number: "Thema 03",
      title: "Gebäudetyp E: einfach, aber gut",
      subtitle: "Mehr Wohnraum im Bestand ohne Qualitätsverlust – ein Best-Practice-Modell für Umbau und Nutzungsänderung",
      degrees: "Bachelor- oder Masterarbeit",
      disciplines: ["Architektur", "Bauingenieurwesen", "Baurecht"],
      teaser: "Mit dem Gebäudetyp E sollen Bauherren künftig auf Komfortstandards verzichten dürfen, um schneller und günstiger Wohnraum zu schaffen. Die Arbeit zeigt an einem realen Umbauprojekt, wie einfaches Bauen gelingt, ohne dass die Wohnqualität – etwa beim Schallschutz – darunter leidet.",
      stats: [
        { value: "10–15 %", label: "geringere Baukosten am Gebäude zeigen ausgewertete Pilotprojekte des BMWSB" },
        { value: "169.400", label: "genehmigte Wohnungen Jan.–Aug. 2026 – trotz Erholung fehlen Hunderttausende" },
        { value: "ab 2027", label: "soll das Gesetz zum Gebäudetyp E bundesweit in Kraft treten (§§ 650a, 650o BGB)" },
        { value: "Bestand", label: "Umnutzung Scheune & Wohn-/Geschäftshaus zu 6 neuen Wohneinheiten als Fallstudie" }
      ],
      pilotProject: {
        title: "Realer Umbau & Scheunenumnutzung",
        description: "Umbau eines ehemaligen Wohn- und Geschäftshauses zu 6 Wohneinheiten sowie die Umnutzung einer Scheune zu einem neuen Wohngebäude."
      },
      problemStatement: [
        "In Deutschland fehlen mehrere Hunderttausend Wohnungen. Zwar stieg die Zahl der Baugenehmigungen zuletzt wieder an – von Januar bis August 2026 wurden rund 169.400 Wohnungen genehmigt –, doch hohe Baukosten und eine dichte Normenlandschaft bremsen den Wohnungsbau weiterhin. Viele Normen gelten als anerkannte Regeln der Technik; wer von ihnen abweicht, trägt ein erhebliches Haftungsrisiko, auch wenn die Abweichung nur Komfort- oder Ausstattungsmerkmale betrifft.",
        "Mit dem Gebäudetyp E will der Gesetzgeber hier ansetzen. Ende Oktober 2026 haben Bundesbau- und Bundesjustizministerium einen neuen Entwurf vorgelegt: Bauherren und Planende sollen vertraglich von Komfortstandards abweichen können – etwa bei Raumhöhen, der Zahl der Steckdosen oder dem Trittschallschutz –, während Brandschutz, Standsicherheit, Belüftung und Belichtung unangetastet bleiben. Ausgewertete Pilotprojekte zeigen Kosteneinsparungen von 10 bis 15 Prozent; das Gesetz soll frühestens Mitte 2027 in Kraft treten.",
        "Gerade bei Umbauten und Nutzungsänderungen im Bestand bietet der Gebäudetyp E großes Potenzial, wirft aber auch Fragen auf: Welche Standards können entfallen, ohne dass Bewohnerinnen und Bewohner Einbußen spüren? Wie lässt sich insbesondere der Schallschutz zwischen neu geschaffenen Wohneinheiten sichern? Und wie verhalten sich die neuen zivilrechtlichen Spielräume zu den Anforderungen der Landesbauordnungen? Ohne praxiserprobte Antworten droht Kostensenkung zulasten der Wohnqualität."
      ],
      objectives: [
        "Ziel der Arbeit ist ein Best-Practice-Modell, das zeigt, wie der Gebäudetyp E bei Umbau und Nutzungsänderung angewendet werden kann, ohne die Wohnqualität zu mindern (anhand des Umbaus eines Wohn- und Geschäftshauses zu 6 Wohneinheiten und Scheunenumnutzung von Shams Consult).",
        "Systematische Prüfung, auf welche Komfort- und Ausstattungsstandards rechtssicher verzichtet werden kann.",
        "Entwicklung konstruktiver Details zur kostengünstigen Qualitätssicherung im Bestand (zweischalige Wohnungstrennwände, Schalenentkopplung, Vorsatzschalen, schwimmende Estriche).",
        "Ergebnis ist ein übertragbarer Leitfaden für Planende und Bauherren, der – kombiniert mit Ansätzen zu Rückbau und Wiederverwendung von Bauteilen – zeigt, wie mehr Wohnraum im Bestand schneller und günstiger entstehen kann."
      ],
      researchQuestions: [
        { title: "Rechtsrahmen", desc: "Was erlauben Gebäudetyp E und Landesbauordnung bei Umbau und Nutzungsänderung – und was nicht?" },
        { title: "Standards prüfen", desc: "Auf welche Komfortstandards (Raumhöhe, Ausstattung, Treppenhaus) lässt sich ohne spürbaren Qualitätsverlust verzichten?" },
        { title: "Schallschutz ohne Verzicht", desc: "Welche Konstruktionen sichern guten Schallschutz im Bestand zu vertretbaren Kosten?" },
        { title: "Modell und Leitfaden", desc: "Wie lässt sich das Vorgehen auf andere Umbau- und Umnutzungsprojekte übertragen?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (auf Bau- und Planungsrecht spezialisiertes Büro)",
        "Bachelor- oder Masterarbeit, auch als Teamarbeit",
        "Laufendes Umbauprojekt mit Bauantrag als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Haufe Immobilien: Gebäudetyp E – Weniger Baustandards und Haftungsrisiken, Oktober 2026 (nach Angaben von BMWSB, BMJV und Statistischem Bundesamt).",
        "Bundesingenieurkammer: Bundeskabinett beschließt geänderte Fassung des Gebäudetyp-E-Gesetzes (Änderung §§ 650a, 650o BGB).",
        "Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen (BMWSB): Leitlinie Einfaches Bauen."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-03_Gebaeudetyp-E.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-03_Gebaeudetyp-E.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Abschlussarbeit Thema 03 – Gebäudetyp E"
    }
  ],
  en: [
    {
      id: "schwammstadt",
      slug: "schwammstadt",
      number: "Topic 01",
      title: "Plastic-Free Sponge City",
      subtitle: "Mineral rainwater infiltration systems – from single pilot projects to urban district frameworks",
      degrees: "Bachelor's or Master's Thesis",
      disciplines: ["Architecture", "Urban Planning", "Civil Engineering"],
      teaser: "Rainwater should infiltrate where it falls – yet current systems rely heavily on plastic crates that remain buried for decades. Based on a built pilot project using stone wool, this research examines how mineral systems can support climate-resilient sponge city districts.",
      stats: [
        { value: "≈ 45%", label: "of Germany's urban and transport surface is completely sealed" },
        { value: "52 ha", label: "new sealed surface added daily (2019–2022); 2030 target: < 30 ha" },
        { value: "€12.6B", label: "heavy rainfall damage to residential homes 2002–2021" },
        { value: "95%", label: "of volume absorbed in water by mineral stone wool – 950 L per m³ in 10 mins" }
      ],
      pilotProject: {
        title: "Built Pilot Project with ROCKWOOL",
        description: "Installation of a mineral stone wool infiltration trench in residential housing as a circular alternative to plastic boxes."
      },
      problemStatement: [
        "Increasing soil sealing disrupts the natural water balance: around 45% of settlement areas in Germany are sealed. Precipitation cannot infiltrate or evaporate, causing surface runoff and overwhelming sewer systems.",
        "Climate change intensifies extreme weather. Flash floods caused over €12.6 billion in residential damages between 2002 and 2021. Meanwhile, urban heat islands suffer from lack of retained moisture. The sponge city model addresses this through decentralized retention and evaporation.",
        "In practice, decentralized infiltration relies on plastic crates made from fossil fuels with unresolved recycling lifecycles. Shams Consult partnered with a client and ROCKWOOL to implement a mineral basalt rockwool alternative.",
        "However, systematic comparative data on flow rates, carbon footprint, lifecycle costs, and urban scaling models are still lacking."
      ],
      objectives: [
        "Investigate scaling mineral trench systems to district and neighborhood scales.",
        "Perform a systematic comparative assessment of plastic, gravel, and stone wool trenches regarding footprint, CO₂ balance, and lifecycle costs.",
        "Combine retention, tree trenches, and green roofs into an optimized district concept.",
        "Produce an actionable planning guideline for municipalities and practitioners."
      ],
      researchQuestions: [
        { title: "Scaling", desc: "How can the pilot project be scaled to district level (surface requirement, retention volume, dimensioning according to DWA standards)?" },
        { title: "Material Science", desc: "Which mineral or recycled materials serve as viable alternatives to plastic crates ecologically and economically?" },
        { title: "Water Management", desc: "How can infiltration, retention, and evapotranspiration (tree trenches, green roofs) be combined effectively?" },
        { title: "Guideline", desc: "What planning steps and metrics belong in an actionable design manual for cities and engineering studios?" }
      ],
      framework: [
        "Primary academic supervision by the student's university",
        "Secondary practical supervision by Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor's or Master's thesis, open to interdisciplinary teams",
        "Realized pilot project as case study, starting date flexible"
      ],
      sources: [
        "Federal Environment Agency (UBA): Soil Sealing and Urban Land Use Data.",
        "German Insurance Association (GDV): Heavy Rainfall Damages 2002–2021.",
        "ROCKWOOL Rainwater Systems: Rockflow Water Infiltration Data."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-01_Schwammstadt.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-01_Schwammstadt.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Thesis Application Topic 01 – Sponge City"
    },
    {
      id: "cradle-to-cradle",
      slug: "cradle-to-cradle",
      number: "Topic 02",
      title: "Cradle to Cradle: Circular Building Components",
      subtitle: "Tools for sustainable multi-family housing under the QNG sustainability seal – from gentle deconstruction to reuse",
      degrees: "Bachelor's or Master's Thesis",
      disciplines: ["Architecture", "Civil Engineering", "Project Management"],
      teaser: "Sustainable new buildings must demonstrate their carbon footprint across the entire life cycle – and during demolition, valuable materials end up in landfills. This research develops tools and guidelines for designers to solve both systematically: QNG-compliant multi-family housing and circular component reuse.",
      stats: [
        { value: "198.8M t", label: "construction and demolition waste in Germany 2023 – 52% of total waste" },
        { value: "≈ 28%", label: "of German greenhouse gas emissions stem from building operations" },
        { value: "24 kg", label: "CO₂-eq. per m² and year: lifecycle threshold for climate-friendly KfW 296 loans" },
        { value: "QNG", label: "Quality Seal for Sustainable Buildings compliance requirements" }
      ],
      pilotProject: {
        title: "Multi-Family Building (Existing & New)",
        description: "Active Shams Consult project: selective deconstruction of existing fabric as a circular resource bank for new apartments."
      },
      problemStatement: [
        "The building sector accounts for over 52% of national waste generation (198.8 million tons in 2023).",
        "Subsidized loan programs (such as KfW 296) impose strict lifecycle emission limits of max 24 kg CO₂-eq/m²/year and mandatory QNG certification.",
        "Practitioners lack standardized tools. Every project recalculates lifecycle assessments and component catalogs from scratch while valuable vintage components end up in landfills."
      ],
      objectives: [
        "Develop reusable calculation templates and checklists for QNG multi-family housing.",
        "Evaluate construction assemblies for maximum carbon footprint reductions.",
        "Create an actionable guidebook for selective deconstruction by building age classes.",
        "Structure component pass, BIM integration, and reuse logistics."
      ],
      researchQuestions: [
        { title: "New Build Workflow", desc: "Which templates and checklists streamline QNG compliance for multi-family homes?" },
        { title: "Assembly Optimization", desc: "Which structural systems reduce embodied carbon and primary energy most effectively?" },
        { title: "Existing Fabric Deconstruction", desc: "Which components can be salvaged economically? How are hazardous materials and warranties managed?" },
        { title: "Process & Logistics", desc: "How can inventory logging (material passport), sorting, interim storage, and reinstallation be managed efficiently?" }
      ],
      framework: [
        "Primary academic supervision by the student's university",
        "Secondary practical supervision by Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor's or Master's thesis, open to team research",
        "Multi-family housing project with existing and new buildings as case study"
      ],
      sources: [
        "Federal Environment Agency (UBA): Waste Statistics 2023.",
        "Federal Ministry for Housing (BMWSB): Quality Seal Sustainable Buildings (QNG).",
        "KfW Bank: Technical Bulletin 296 – Climate-Friendly Construction."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-02_Cradle-to-Cradle.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-02_Cradle-to-Cradle.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Thesis Application Topic 02 – Cradle to Cradle"
    },
    {
      id: "gebaeudetyp-e",
      slug: "gebaeudetyp-e",
      number: "Topic 03",
      title: "Building Type E: Simple, Affordable Quality",
      subtitle: "More housing in existing fabric without quality loss – a best-practice model for conversions and adaptive reuse",
      degrees: "Bachelor's or Master's Thesis",
      disciplines: ["Architecture", "Civil Engineering", "Construction Law"],
      teaser: "Germany's new Building Type E legislation allows deviations from comfort standards to make housing faster and cheaper. Testing on a real Shams Consult barn-and-residential conversion, this research demonstrates how to build simply without sacrificing acoustic comfort.",
      stats: [
        { value: "10–15%", label: "cost reductions demonstrated in BMWSB simple building pilot projects" },
        { value: "169,400", label: "approved housing units Jan–Aug 2026 – severe nationwide shortage persists" },
        { value: "from 2027", label: "nationwide enforcement of Building Type E statutory reform (§§ 650a, 650o BGB)" },
        { value: "Conversion", label: "Conversion of existing mixed-use building and barn into 6 housing units as case study" }
      ],
      pilotProject: {
        title: "Active Barn & Mixed-Use Conversion",
        description: "Conversion of a historic commercial/residential building and agricultural barn into 6 modern residential units."
      },
      problemStatement: [
        "High construction costs and dense DIN standards paralyze affordable housing. Deviating from standard comfort norms has historically carried severe liability risks.",
        "The federal 'Building Type E' legal reform enables contractually agreed deviations from non-statutory comfort standards (e.g., room heights, socket counts, impact sound overkill) while fire safety and structural integrity remain untouched.",
        "For adaptive conversions, this unlocks great opportunities but creates acoustic engineering challenges: how can reliable sound insulation be achieved cost-effectively without expensive standard over-engineering?"
      ],
      objectives: [
        "Analyze the legal framework of Building Type E and state building codes for conversions.",
        "Systematically evaluate comfort standards that can be relaxed without perceived quality loss.",
        "Develop cost-effective acoustic details (decoupled drywall, floating screeds, cavity walls).",
        "Create a transferable guideline for owners and architects."
      ],
      researchQuestions: [
        { title: "Legal Scope", desc: "What do Building Type E and state building codes permit for adaptive reuse and conversions?" },
        { title: "Comfort Standards", desc: "Which equipment and geometric standards can be adjusted without compromising living quality?" },
        { title: "Acoustic Engineering", desc: "Which practical assemblies ensure reliable acoustic protection in existing buildings at reasonable cost?" },
        { title: "Model Guide", desc: "How can these best-practice principles be transferred to other conversion projects?" }
      ],
      framework: [
        "Primary academic supervision by the student's university",
        "Secondary practical supervision by Shams Consult (specialized in building & planning law)",
        "Bachelor's or Master's thesis, open to team work",
        "Active building permit conversion case study, start date flexible"
      ],
      sources: [
        "Haufe Real Estate: Building Type E Standards & Legal Liability (2026).",
        "Federal Chamber of Engineers (BBIK): Building Type E Reform (§ 650a BGB).",
        "Federal Ministry for Housing (BMWSB): Guidelines for Simple Building."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Thema-03_Gebaeudetyp-E.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Thema-03_Gebaeudetyp-E.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Thesis Application Topic 03 – Building Type E"
    }
  ]
};
