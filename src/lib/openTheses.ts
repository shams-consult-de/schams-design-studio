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
        "Die zunehmende Versiegelung verändert den natürlichen Wasserhaushalt grundlegend: Rund 45 Prozent der Siedlungs- und Verkehrsflächen in Deutschland sind versiegelt, und täglich kommen im Mittel etwa 52 Hektar neue Fläche hinzu. Niederschlag kann kaum noch versickern oder verdunsten; er fließt oberflächlich ab und überlastet die Kanalnetze.",
        "Der Klimawandel verschärft die Lage drastisch. Kurze, heftige Starkregen verursachten zwischen 2002 und 2021 an Wohngebäuden Schäden von rund 12,6 Milliarden Euro. Zugleich fehlen in Sommern Hitze- und Trockenperioden gespeicherte Wasserreserven. Das Leitbild der Schwammstadt setzt hier an: Regenwasser dezentral zurückhalten, versickern und verdunsten.",
        "In der Praxis erfolgt die Versickerung fast ausschließlich mit Rigolen aus Kunststoff, die jahrzehntelang im Erdreich verbleiben und deren Recycling ungeklärt ist. Shams Consult hat gemeinsam mit einem Bauherrn und der Firma ROCKWOOL ein mineralisches Vorzeigeprojekt aus recycelbarem Basaltgestein realisiert.",
        "Es fehlen jedoch systematische Vergleichsdaten zu Leistungsfähigkeit, CO₂-Bilanz, Lebensdauer und Kosten sowie städtebauliche Planungsgrundlagen zur Übertragung auf Quartiere und Stadtteile."
      ],
      objectives: [
        "Untersuchung der Übertragbarkeit mineralischer Rigolensysteme auf die Quartiers- und Stadtteilebene.",
        "Systematischer Kriterienvergleich von Kunststoff-, Kies- und Steinwollerigolen hinsichtlich Sickerleistung, Flächenbedarf, CO₂-Bilanz, Rückbaubarkeit und Lebenszykluskosten.",
        "Kombination und Optimierung verschiedener Modelle (Retention, Verdunstung, Baumrigolen, Gründächer) für ein Modellquartier.",
        "Entwicklung eines übertragbaren Planungsleitfadens für Kommunen, Planende und Bauherren."
      ],
      researchQuestions: [
        { title: "Skalierung", desc: "Wie lässt sich das Pilotprojekt auf ein Quartier oder einen Stadtteil übertragen (Flächenbedarf, Speichervolumen, Bemessung z. B. nach DWA-Regelwerk)?" },
        { title: "Materialforschung", desc: "Welche mineralischen oder recycelten Materialien eignen sich als Alternative zu Kunststoffrigolen, und wie schneiden sie ökologisch und wirtschaftlich ab?" },
        { title: "Bewirtschaftungsmodelle", desc: "Wie lassen sich Versickerung, Retention und Verdunstung (z. B. Baumrigolen, Gründächer) städtebaulich kombinieren und optimieren?" },
        { title: "Leitfaden", desc: "Welche Planungsschritte, Kennwerte und Kriterien gehören in einen praxistauglichen Planungsleitfaden für Kommunen und Planungsbüros?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor- oder Masterarbeit, auch als interdisziplinäre Teamarbeit möglich",
        "Realisiertes Praxisprojekt als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Umweltbundesamt: Bebauung und Versiegelung; Siedlungs- und Verkehrsfläche (umweltbundesamt.de).",
        "Statistisches Bundesamt / Umweltbundesamt: Anstieg der Siedlungs- und Verkehrsfläche, Nationale Nachhaltigkeitsstrategie (2024).",
        "GDV – Gesamtverband der Deutschen Versicherungswirtschaft: Starkregenbilanz 2002–2021 (gdv.de).",
        "ROCKWOOL Rainwater Systems: Merkblatt Wasseraufnahme und -abgabe (Rockflow); Hoogheemraadschap Hollands Noorderkwartier (HHNK)."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Schwammstadt.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Schwammstadt.pdf",
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
      teaser: "Wer heute nachhaltig baut, muss die CO₂-Bilanz eines Gebäudes über den gesamten Lebenszyklus nachweisen. Für jedes Projekt beginnen Planende oft von vorn. Die Arbeit zeigt am Beispiel eines Mehrfamilienhauses, wie Bauteile schonend ausgebaut, im Neubau wiederverwendet und mit digitalen Werkzeugen erfasst werden.",
      stats: [
        { value: "198,8 Mio. t", label: "Bau- und Abbruchabfälle 2023 in Deutschland – 52 % des gesamten Abfallaufkommens" },
        { value: "≈ 28 %", label: "der deutschen Treibhausgasemissionen gehen auf den Gebäudebetrieb zurück" },
        { value: "24 kg", label: "CO₂-Äq. je m² und Jahr: Lebenszyklus-Grenzwert für geförderte klimafreundliche Wohngebäude (KfW 296)" },
        { value: "QNG", label: "Geforderte Qualitätssiegel-Kriterien für Neubau und Sanierung" }
      ],
      pilotProject: {
        title: "Mehrfamilienhaus mit Alt- und Neubau",
        description: "Reales Projekt von Shams Consult: Schonender Rückbau im Bestand als Rohstoffquelle für den zirkulären Neubau."
      },
      problemStatement: [
        "Der Bausektor ist für mehr als die Hälfte des deutschen Abfallaufkommens verantwortlich: 2023 fielen rund 198,8 Millionen Tonnen Bau- und Abbruchabfälle an. Rund 28 Prozent der Treibhausgasemissionen entstehen im Betrieb von Gebäuden; Herstellung, Bau und Entsorgung kommen hinzu.",
        "Förderprogramme wie das KfW-Programm 296 knüpfen zinsgünstige Kredite an strenge Treibhausgas-Grenzwerte von max. 24 kg CO₂-Äquivalent je Quadratmeter und Jahr über den Lebenszyklus sowie das Qualitätssiegel Nachhaltiges Gebäude (QNG).",
        "In der Planungspraxis fehlt es jedoch an standardisierten Werkzeugen. Jedes Projekt startet die Ökobilanzierung und Nachweisführung aufwendig von vorn. Gleichzeitig landen beim Abriss von Altbauten hochwertige Baustoffe auf der Deponie, statt nach Cradle-to-Cradle-Prinzipien weitergenutzt zu werden."
      ],
      objectives: [
        "Entwicklung übertragbarer Vorlagen, Checklisten und Bemessungshilfen für die QNG-Kriterien am Mehrfamilienhaus.",
        "Variantenvergleich von Konstruktionen und Baustoffen zur maximalen Reduktion der Treibhausgasemissionen.",
        "Erstellung eines praxisorientierten Leitfadens für den selektiven Rückbau und die Wiederverwendung von Bauteilen nach Baualtersklassen.",
        "Strukturierung der Datenerfassung: Bauteilkatalog, Materialpass, Logistik und Kosten für die Wiederverwendung."
      ],
      researchQuestions: [
        { title: "Systematik Neubau", desc: "Welche Vorlagen, Checklisten und Werkzeuge vereinfachen die Nachweisführung für das Qualitätssiegel Nachhaltiges Gebäude (QNG) bei Mehrfamilienhäusern?" },
        { title: "Bauteiloptimierung", desc: "Welche Konstruktionen, Baustoffe und technischen Systeme senken Treibhausgasemissionen und Primärenergiebedarf am stärksten?" },
        { title: "Rückbau im Bestand", desc: "Welche Bauteile lassen sich bei Altbauten geordnet rückbauen und wiederverwenden? Wie werden Schadstoffe, Normen und Gewährleistung gehandhabt?" },
        { title: "Prozess & Logistik", desc: "Wie lässt sich die Kette von Erfassung (Bauteilkatalog, Materialpass), Sortierung, Zwischenlagerung und Wiedereinbau effizient organisieren?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (Dipl.-Ing. Majeed Shams M.Eng.)",
        "Bachelor- oder Masterarbeit, auch als Teamarbeit (Schwerpunkt Neubau oder Bestand)",
        "Mehrfamilienhaus-Projekt mit Altbau und Neubau als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Umweltbundesamt: Abfallaufkommen, Daten 2023 (umweltbundesamt.de).",
        "Bierwirth, A.; Kaselofsky, J.: Klimaneutrale Gebäude. Bundeszentrale für politische Bildung (bpb 2025).",
        "KfW: Merkblatt 296 – Klimafreundlicher Neubau im Niedrigpreissegment, Technische Mindestanforderungen.",
        "Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen: Qualitätssiegel Nachhaltiges Gebäude (QNG)."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Cradle-to-Cradle.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Cradle-to-Cradle.pdf",
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
      teaser: "Mit dem neuen Gebäudetyp E sollen Bauherren künftig rechtssicher auf nicht-sicherheitsrelevante Komfortstandards verzichten dürfen. Die Arbeit zeigt an einem realen Umbauprojekt von Shams Consult, wie einfaches Bauen gelingt, ohne dass die Wohnqualität – etwa beim Schallschutz – darunter leidet.",
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
        "In Deutschland fehlen mehrere Hunderttausend Wohnungen. Hohe Baukosten und eine dichte Normenlandschaft bremsen den Wohnungsneubau und Bestandsumbau massiv. Viele DIN-Normen gelten als anerkannte Regeln der Technik – wer von ihnen abweicht, trug bisher ein extremes Haftungsrisiko.",
        "Mit dem Gebäudetyp E hat die Bundesregierung Ende Oktober 2026 einen Gesetzentwurf zur Reform des BGB vorgelegt: Planende und Bauherren können vertraglich von reinen Komfortstandards (Raumhöhen, Steckdosenanzahl, Trittschallstandards) abweichen, während Brandschutz, Standsicherheit und gesunde Wohnverhältnisse unangetastet bleiben.",
        "Gerade bei Umnutzungen im Bestand bietet das enorme Chancen, wirft aber bauphysikalische Fragen auf: Wie lässt sich guter Schallschutz zwischen Wohnungen kostengünstig ohne überzogene Normvorgaben realisieren? Ohne praxiserprobte Konstruktionen drohen Kostensenkungen zulasten der Wohnqualität."
      ],
      objectives: [
        "Systematische Einordnung des rechtlichen Rahmens von Gebäudetyp E und Landesbauordnung bei Umbau und Umnutzung.",
        "Prüfung von Komfortstandards: Wo lässt sich sparen, ohne dass Bewohner es spüren?",
        "Entwicklung robuster, kostengünstiger Konstruktionsdetails (zweischalige Wohnungstrennwände, Schalenentkopplung, Vorsatzschalen, schwimmende Estriche im Bestand).",
        "Ableitung eines übertragbaren Best-Practice-Leitfadens für Bauherren und Architekten."
      ],
      researchQuestions: [
        { title: "Rechtsrahmen", desc: "Was erlauben der neue Gebäudetyp E und die Landesbauordnung bei Umbau und Nutzungsänderung im Bestand – und wo liegen rechtliche Grenzen?" },
        { title: "Standards prüfen", desc: "Auf welche Komfortstandards (z. B. Raumhöhe, Ausstattungsdichte, Treppenhausbreiten) lässt sich ohne spürbaren Qualitätsverlust verzichten?" },
        { title: "Schallschutz ohne Verzicht", desc: "Welche bauphysikalischen Konstruktionen sichern verlässlichen Schallschutz im Bestand zu vertretbaren Kosten?" },
        { title: "Leitfaden & Modell", desc: "Wie lässt sich das Vorgehen systematisch auf andere Bestands- und Konversionsprojekte übertragen?" }
      ],
      framework: [
        "Erstbetreuung durch die Hochschule der Bewerberin bzw. des Bewerbers",
        "Zweitbetreuung durch Shams Consult (auf Bau- und Planungsrecht spezialisiertes Büro)",
        "Bachelor- oder Masterarbeit, auch als Teamarbeit",
        "Laufendes Umbauprojekt mit Bauantrag als Fallstudie, Beginn nach Absprache"
      ],
      sources: [
        "Haufe Immobilien: Gebäudetyp E – Weniger Baustandards und Haftungsrisiken, Oktober 2026 (BMWSB, BMJV, Destatis).",
        "Bundesingenieurkammer: Bundeskabinett beschließt geänderte Fassung des Gebäudetyp-E-Gesetzes (Änderung §§ 650a, 650o BGB).",
        "Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen (BMWSB): Leitlinie Einfaches Bauen."
      ],
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Gebaeudetyp-E.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Gebaeudetyp-E.pdf",
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
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Schwammstadt.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Schwammstadt.pdf",
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
      teaser: "Sustainable construction demands lifecycle CO₂ proof. Yet design studios start from scratch on every project. This research develops actionable templates, deconstruction catalogs, and circular workflows based on a real multi-family housing project.",
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
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Cradle-to-Cradle.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Cradle-to-Cradle.pdf",
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
      pdfDownloadUrl: "/documents/theses/Shams-Consult_Abschlussarbeit_Gebaeudetyp-E.pdf",
      pdfFileName: "Shams-Consult_Abschlussarbeit_Gebaeudetyp-E.pdf",
      applicationEmail: "office@shams-consult.de",
      applicationSubject: "Thesis Application Topic 03 – Building Type E"
    }
  ]
};
