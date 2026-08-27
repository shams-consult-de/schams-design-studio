export interface CaseStudy {
  id: string;
  reviewerName: string;
  reviewerBadge?: string;
  rating: number;
  googleReviewUrl: string;
  projectTitle: {
    de: string;
    en: string;
  };
  subtitle: {
    de: string;
    en: string;
  };
  projectType: {
    de: string;
    en: string;
  };
  location?: {
    de: string;
    en: string;
  };
  legalBasis?: string;
  reviewText: string;
  ownerResponse?: string;
  challenge: {
    de: string;
    en: string;
  };
  solution: {
    de: string;
    en: string;
  };
  outcome: {
    de: string;
    en: string;
  };
  badges: {
    de: string[];
    en: string[];
  };
}

export const googleProfileUrl =
  "https://www.google.de/search?kgmid=/g/11hyhn96mk&hl=de&q=Architekturb%C3%BCro+Shams+Consult+Architektur+und+Stadtplanung";

export const caseStudies: CaseStudy[] = [
  {
    id: "samuel-allaw-9-wohneinheiten",
    reviewerName: "Samuel Allaw",
    reviewerBadge: "Local Guide",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Baugenehmigung für 9 Wohnungen nach jahrelangem Stillstand",
      en: "Building Approval for 9 Apartments After Years of Inaction",
    },
    subtitle: {
      de: "Durchsetzung der Baugenehmigung bei der Bauaufsicht durch Einfügungsnachweis (§ 35/34 BauGB)",
      en: "Securing Building Approval via Compliance Assessment (§ 35/34 BauGB)",
    },
    projectType: {
      de: "Wohnungsbau (9 Wohnungen)",
      en: "Residential Project (9 Apartments)",
    },
    location: {
      de: "Unbeplanter Innenbereich",
      en: "Unplanned Infill Zone",
    },
    legalBasis: "§ 35 / § 34 BauGB (Einfügungsnachweis)",
    reviewText:
      "Ausgezeichnet ! Shams Consult hat als einziges Architekturbüro unser geplantes Projekt bei der Bauaufsicht durchgesetzt. Wir haben Jahre lang mit anderen Architekten für eine Baugenehmigung gekämpft, jedoch ohne Erfolg. Herr Shams hat unser kompliziertes Projekt mit 9 Wohnungen an sich genommen und uns die lang ersehnte Baugenehmigung erbracht. Die Kommunikation war zu jeder Zeit super und wir haben uns sehr gut aufgehoben gefühlt. Die Abwicklung war zu jeder Zeit sehr professionell. Wir können Herrn Shams und sein Büro wärmstens weiterempfehlen!",
    ownerResponse:
      "Herr Allaw, vielen Dank für Ihre positive Bewertung. Ihr Grundstück liegt in einem 'unbeplanten Innenbereich'. Durch unsere Erfahrung in den Fachdisziplinen Architektur und Städtebau, und vor allem durch Ihr Geduld und Vertrauen in uns, könnten wir einen überzeugenden Einfügungsnachweis gemäß § 35 BauGB erbringen. Es war kein einfaches Baugenehmigungsverfahren! Ende gut alles gut :) Ihre Zufriedenheit ist uns wichtig! Wir freuen uns, dass wir Ihre Erwartungen erfüllen konnten. Vielen Dank für Ihre Empfehlung!",
    challenge: {
      de: "Das geplante Projekt mit 9 Wohnungen lag in einem 'unbeplanten Innenbereich'. Der Bauherr hatte zuvor über Jahre hinweg erfolglos mit anderen Architekten um eine Baugenehmigung gekämpft.",
      en: "The planned 9-unit residential project was located in an 'unplanned inner area'. The client had struggled unsuccessfully for years with other architects to obtain a permit.",
    },
    solution: {
      de: "Unser Gründer übernahm das komplizierte Verfahren und erbrachte auf Basis langjähriger städtebaulicher und architektonischer Erfahrung einen fundierten Einfügungsnachweis gemäß § 35 BauGB bei der Bauaufsicht.",
      en: "Our founder took over the complex proceedings and produced an authoritative compliance assessment under § 35 BauGB for the municipal building authority.",
    },
    outcome: {
      de: "Erfolgreiche Erteilung der lang ersehnten Baugenehmigung für alle 9 Wohnungen durch die Bauaufsicht.",
      en: "Successful issuance of the long-awaited building permit for all 9 apartments by the local building authority.",
    },
    badges: {
      de: ["Baugenehmigung durchgesetzt", "9 Wohnungen", "Einfügungsnachweis § 35 BauGB"],
      en: ["Permit Approved", "9 Apartments", "Compliance § 35 BauGB"],
    },
  },
  {
    id: "simon-richter-bebauungsplan-turmhaeuser",
    reviewerName: "Simon Richter",
    reviewerBadge: "Local Guide",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Aufstellung & Durchsetzung eines Bebauungsplans im Außenbereich für 'Turmhäuser'",
      en: "Zoning Plan in Outer Area for 'Tower Houses' & Monument Integration",
    },
    subtitle: {
      de: "Integration von Bestandsgebäuden, Denkmalschutz und städtebaulichen Festsetzungen",
      en: "Integration of Existing & Listed Buildings with Environmental Protection",
    },
    projectType: {
      de: "Bebauungsplan & Wohnprojekt",
      en: "Zoning Master Plan & Residential Project",
    },
    location: {
      de: "Außenbereich (§ 35 BauGB)",
      en: "Outer Area (§ 35 BauGB)",
    },
    legalBasis: "§ 35 BauGB, Denkmalschutz & Artenschutz",
    reviewText:
      "Hervorragende Beratung und flexible Anpassung an unsere Vorstellungen und Wünsche! Herr Shams und sein Team waren während der Bearbeitung der Planung immer erreichbar und standen mit Rat und Tat zur Seite. Sehr gut empfanden wir die hohe Motivation der Planer und die Bereitschaft auch einige extra Meter zu gehen falls nötig. Ausgezeichneter Service und gute Fachkompetenz. Vielen Dank an das Planungsbüro für die gute Arbeit.",
    ownerResponse:
      "Sehr geehrter Herr Richter, vielen Dank für Ihre positive Bewertung! Die Aufstellung und Durchsetzung eines Bebauungsplans im sogenannten 'Außenbereich' (§35 BauGB) stellt immer eine besondere Herausforderung dar. Dies war bei Ihrem Vorhaben auch der Fall! Zudem mussten wir in Ihrem Projekt die Bestandsgebäude und die denkmalgeschützten Gebäude integrieren sowie passende städtebauliche Festsetzungen formulieren... Wir schätzen vor allem Ihr Engagement, Ihre Unterstützung und Ihre Geduld. Wir freuen uns, dass Sie und Ihre Nachbarn Ihre 'Turmhäuser :)' auf Basis des von uns erarbeiteten Bebauungsplans realisieren können. Wir bedanken uns auch bei den Fachplanern für ihren Beitrag zum Arten- und Umweltschutz. Gerne stehen wir Ihnen weiterhin zur Seite und wünschen Ihnen viel Erfolg!",
    challenge: {
      de: "Die Aufstellung und Durchsetzung eines Bebauungsplans im Außenbereich (§ 35 BauGB) für mehrere Nachbarn mit gleichzeitiger Einbindung von Bestandsgebäuden und denkmalgeschützten Gebäuden.",
      en: "Drafting and passing a zoning plan in the outer area (§ 35 BauGB) for neighbor landowners while integrating existing and historical listed structures.",
    },
    solution: {
      de: "Shams Consult formulierte maßgeschneiderte städtebauliche Festsetzungen, koordinierte die Fachplaner für den Arten- und Umweltschutz und integrierte die Denkmalschutzauflagen rechtssicher in den Bebauungsplan.",
      en: "Shams Consult formulated customized urban planning regulations, coordinated environmental and species conservation planners, and integrated heritage protection requirements.",
    },
    outcome: {
      de: "Erfolgreich erarbeiteter und rechtswirksamer Bebauungsplan, auf dessen Basis die Bauherren und ihre Nachbarn ihre 'Turmhäuser' bauen können.",
      en: "Legally ratified zoning plan enabling the client and neighbors to construct their 'tower houses'.",
    },
    badges: {
      de: ["B-Plan im Außenbereich", "Denkmalschutz integriert", "Umweltschutz konform"],
      en: ["Outer Area Master Plan", "Heritage Integration", "Eco Compliance"],
    },
  },
  {
    id: "jasman-grewal-legalisierung-5-wohneinheiten",
    reviewerName: "Jasman Kaur Grewal",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Schwieriges Legalisierungsverfahren für 5 Wohneinheiten",
      en: "Complex Legalization Procedure for 5 Residential Units",
    },
    subtitle: {
      de: "Vollständige behördliche Genehmigung aller 5 Wohneinheiten",
      en: "Complete Municipal Approval for All 5 Housing Units",
    },
    projectType: {
      de: "Legalisierungsverfahren",
      en: "Building Legalization",
    },
    reviewText:
      "Shams Consult hat ein schwieriges Legalisierungsverfahren erfolgreich abgeschlossen und alle 5 Wohneinheiten genehmigen lassen. Professionell und absolut empfehlenswert!",
    challenge: {
      de: "Ein schwieriges baurechtliches Legalisierungsverfahren für ein bestehendes Gebäude mit 5 Wohneinheiten.",
      en: "A challenging regulatory legalization process for an existing property with 5 residential units.",
    },
    solution: {
      de: "Professionelle baurechtliche Prüfung, strukturierte Vorbereitung aller Antragsunterlagen und zielgerichtete Führung des Legalisierungsverfahrens bei der Baubehörde.",
      en: "Professional regulatory review, structured documentation, and targeted management of the legalization procedure with the building authority.",
    },
    outcome: {
      de: "Erfolgreicher Abschluss des Verfahrens mit offizieller Genehmigung aller 5 Wohneinheiten.",
      en: "Successful completion of the process with official approval granted for all 5 residential units.",
    },
    badges: {
      de: ["Legalisierung abgeschlossen", "Alle 5 Einheiten genehmigt", "Professionell"],
      en: ["Legalization Completed", "All 5 Units Approved", "Professional"],
    },
  },
  {
    id: "lingyi-peng-internationale-bauherren",
    reviewerName: "彭玲怡 (Lingyi Peng)",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Geduldige Begleitung & Genehmigungsantrag bei Sprachbarriere",
      en: "Patient Guidance & Permit Application Overcoming Language Hurdles",
    },
    subtitle: {
      de: "Verständliche Aufklärung der deutschen Bauvorschriften und erfolgreicher Genehmigungsantrag",
      en: "Clear Explanation of German Building Regulations & Successful Permit Filing",
    },
    projectType: {
      de: "Genehmigungsantrag",
      en: "Building Permit Application",
    },
    reviewText:
      "Herr Shams hat für uns eine Genehmigung beantragt. Wir sind Ausländer und verstehen nicht so gut Deutsch. Er ist sehr nett und geduldig. Er hat uns wirklich gut geklärt und hat uns sehr viel geholfen. Wir möchten dem Architekturbüro weiterempfehlen.",
    ownerResponse:
      "Vielen Dank für Ihre freundlichen Worte! Wir freuen uns, dass wir Ihnen helfen konnten. Ihre Weiterempfehlung bedeutet uns viel. Wir stehen Ihnen jederzeit gerne zur Verfügung. Team Shams Consult",
    challenge: {
      de: "Ausländische Bauherren mit begrenzten Deutschkenntnissen benötigten eine verständliche und verlässliche Begleitung für einen behördlichen Genehmigungsantrag.",
      en: "International clients with limited German proficiency required clear, dependable assistance for a municipal permit application.",
    },
    solution: {
      de: "Herr Shams begleitete die Bauherren mit großer Geduld, erklärte alle behördlichen Schritte verständlich und übernahm die vollständige Beantragung der Genehmigung.",
      en: "Mr. Shams guided the clients with great patience, clearly explained every regulatory step, and handled the complete permit application process.",
    },
    outcome: {
      de: "Erfolgreich beantragte und erteilte Genehmigung bei voller Zufriedenheit der Bauherren.",
      en: "Successfully filed and approved permit with full customer satisfaction.",
    },
    badges: {
      de: ["Geduldige Beratung", "Genehmigung beantragt", "Volle Unterstützung"],
      en: ["Patient Guidance", "Permit Filed", "Full Support"],
    },
  },
  {
    id: "holger-elvers-projektleitung-rhein-neckar",
    reviewerName: "Holger Elvers",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Ausgezeichnete Beratung & Projektleitung im Rhein-Neckar-Kreis",
      en: "Outstanding Advisory & Project Management in the Rhine-Neckar District",
    },
    subtitle: {
      de: "Stets freundliche und fachlich exzellente Projektleitung",
      en: "Consistently Friendly and Technically Excellent Project Leadership",
    },
    projectType: {
      de: "Beratung & Projektleitung",
      en: "Advisory & Project Management",
    },
    location: {
      de: "Rhein-Neckar-Kreis",
      en: "Rhine-Neckar District",
    },
    reviewText:
      "Ausgezeichnete Beratung und Projektleitung. Ich habe mich jederzeit gut aufgehoben gefühlt. Die Kommunikation mit Hr. Shams war stets freundlich und immer fachlich exzellent.",
    ownerResponse:
      "Liebevoller Dank für Ihre wunderbare Bewertung! Es war eine Freude, Sie zu beraten und Ihr Projekt zu leiten. Ihr Vertrauen bedeutet uns viel. Herzliche Grüße und vielen Dank von Herrn Shams und dem gesamten Team nach Rhein-Neckar-Kreis! Team Shams Consult",
    challenge: {
      de: "Bedarf an einer fachlich fundierten, kontinuierlichen Projektleitung und Beratung mit verlässlicher Kommunikation.",
      en: "Need for technically sound, continuous project management and advisory with dependable communication.",
    },
    solution: {
      de: "Unser Büroinhaber leitete das Projekt mit hoher Fachkompetenz und hielt den Auftraggeber zu jedem Zeitpunkt freundlich und transparent auf dem Laufenden.",
      en: "Our founder managed the project with high expertise, maintaining friendly and transparent communication at all times.",
    },
    outcome: {
      de: "Erstklassig geführtes Bauprojekt und langfristiges Vertrauen des Bauherrn.",
      en: "First-class project leadership resulting in lasting client trust.",
    },
    badges: {
      de: ["Ausgezeichnete Projektleitung", "Fachlich exzellent", "Rhein-Neckar-Kreis"],
      en: ["Project Leadership", "Technically Excellent", "Rhine-Neckar District"],
    },
  },
  {
    id: "pascal-bagrowski-zusammenarbeit",
    reviewerName: "Pascal Bagrowski",
    reviewerBadge: "Local Guide",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Fachlich 1A-Zusammenarbeit mit innovativen eigenen Ideen",
      en: "Top-Tier Professional Collaboration with Creative Design Input",
    },
    subtitle: {
      de: "Partnerschaftliche Planung auf Augenhöhe und mit gegenseitigem Respekt",
      en: "Respectful Collaboration Delivering Concrete Creative Value",
    },
    projectType: {
      de: "Bauvorhaben & Entwurfsplanung",
      en: "Construction Project & Design Planning",
    },
    reviewText:
      "Die Zusammenarbeit mit dem Architekt Shams war von gegenseitigem Respekt geprägt. Fachlich 1A, bringt Herr Shams seine eigenen Ideen positiv ins Bauvorhaben mit ein.",
    ownerResponse:
      "Vielen Dank für Ihre lobenden Worte und die Anerkennung unserer Zusammenarbeit mit Herrn Shams. Wir schätzen Ihr Feedback sehr. Team Shams Consult",
    challenge: {
      de: "Entwicklung eines Bauvorhabens, das neben solider Fachplanung auch eigenständige, vorausschauende architektonische Ideen erforderte.",
      en: "Executing a construction project requiring creative, forward-looking architectural input alongside solid planning.",
    },
    solution: {
      de: "Herr Shams brachte seine eigene fundierte Fachexpertise und kreative Entwurfsideen konstruktiv und partnerschaftlich in die Planung ein.",
      en: "Mr. Shams actively contributed his technical expertise and creative design ideas constructively into the project.",
    },
    outcome: {
      de: "Hervorragende Zusammenarbeit auf fachlichem 1A-Niveau mit spürbarem Mehrwert für das gesamte Bauvorhaben.",
      en: "Outstanding top-tier collaboration providing tangible value to the overall development.",
    },
    badges: {
      de: ["Fachlich 1A", "Eigene Ideen eingebracht", "Gegenseitiger Respekt"],
      en: ["Top Quality", "Creative Input", "Mutual Respect"],
    },
  },
  {
    id: "omar-fedai-fachkompetenz",
    reviewerName: "Omar Fedai",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "100% Weiterempfehlung: Überzeugung durch Fachkompetenz & Professionalität",
      en: "100% Recommendation: Proven Expertise & Professionalism",
    },
    subtitle: {
      de: "Souveräne architektonische Betreuung und vollste Kundenzufriedenheit",
      en: "Confident Architectural Advisory with Complete Client Satisfaction",
    },
    projectType: {
      de: "Architektur- und Planungsleistung",
      en: "Architectural & Planning Services",
    },
    reviewText:
      "Herr Shams überzeugte mich mit Fachkompetenz und Professionalität. Ich kann das Architektenbüro zu 100% weiterempfehlen.",
    ownerResponse:
      "vielen Dank für Ihre positive Rückmeldung! Wir freuen uns, dass unsere Fachkompetenz und Professionalität Sie überzeugt haben. Ihre volle Weiterempfehlung bedeutet uns sehr viel und wir sind dankbar für Ihr Vertrauen. Wir stehen auch zukünftig gerne mit unserem besten Service zur Verfügung. Team Shams Consult",
    challenge: {
      de: "Bauherr suchte ein Architekturbüro mit nachweisbarer Fachkompetenz und durchgehender Professionalität.",
      en: "Client needed an architectural practice with proven expertise and end-to-end professionalism.",
    },
    solution: {
      de: "Strukturierte und professionelle Projektbearbeitung durch Herrn Shams mit klarer fachlicher Ausrichtung.",
      en: "Structured, highly professional execution by Mr. Shams with clear technical focus.",
    },
    outcome: {
      de: "Vollste Überzeugung des Kunden und uneingeschränkte 100%-Weiterempfehlung des Büros.",
      en: "Complete client endorsement with an unconditional 100% referral.",
    },
    badges: {
      de: ["100% Weiterempfehlung", "Fachkompetenz", "Professionalität"],
      en: ["100% Referral", "Expertise", "Professionalism"],
    },
  },
  {
    id: "jamo-planung-bis-genehmigung",
    reviewerName: "Jamo",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Super Unterstützung von der Planung bis zur Genehmigung",
      en: "Great Support from Initial Planning to Building Approval",
    },
    subtitle: {
      de: "Durchgängige Begleitung des gesamten Bauvorhabens durch Herrn Shams und das Team",
      en: "End-to-End Project Execution by Mr. Shams and the Planning Team",
    },
    projectType: {
      de: "Planung & Baugenehmigung",
      en: "Planning & Building Approval",
    },
    reviewText:
      "Tolles Team! Herr Shams war von der Planung bis zur Genehmigung unseres Bauvorhabens super Unterstützung.",
    ownerResponse:
      "Vielen Dank für Ihre großartige Bewertung! Es war uns eine Freude, Sie bei der Planung und Genehmigung Ihres Bauvorhabens zu unterstützen. Unser Team und insbesondere Herr Shams freuen sich sehr über Ihr positives Feedback und stehen Ihnen auch in Zukunft gerne zur Seite. Team Shams Consult",
    challenge: {
      de: "Bauherr benötigte verlässliche Unterstützung über den gesamten Prozess von der ersten Planung bis zur behördlichen Genehmigung.",
      en: "Client required dependable support throughout the entire cycle from initial concepts to municipal permit.",
    },
    solution: {
      de: "Herr Shams und das Team begleiteten das Vorhaben in allen Phasen strukturiert und führten den Bauantrag erfolgreich durch die Behördenabstimmung.",
      en: "Mr. Shams and the team guided the project through all phases, successfully steering the permit application through municipal channels.",
    },
    outcome: {
      de: "Erfolgreich genehmigtes Bauvorhaben und begeisterte Bauherren.",
      en: "Successfully approved building project with delighted clients.",
    },
    badges: {
      de: ["Planung bis Genehmigung", "Tolles Team", "Super Unterstützung"],
      en: ["Concept to Permit", "Great Team", "Great Support"],
    },
  },
  {
    id: "petra-dunkel-telefonische-betreuung",
    reviewerName: "Petra Dunkel",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Verlässliche telefonische Betreuung & Zeit für alle Anliegen",
      en: "Reliable Phone Support & Dedicated Time for All Client Questions",
    },
    subtitle: {
      de: "Kontinuierliche Begleitung auch ohne persönlichen Vor-Ort-Kontakt (während Pandemie)",
      en: "Continuous Communication Even Without In-Person Contact",
    },
    projectType: {
      de: "Bauherrenberatung",
      en: "Client Advisory & Support",
    },
    reviewText:
      "Obwohl coronabedingt kein persönlicher Kontakt möglich war, hat Herr Shams uns immer telefonisch auf dem Laufenden gehalten und sich immer die Zeit genommen die wir für unsere Fragen und Anliegen hatten. Positive: Responsiveness, Professionalism, Value",
    ownerResponse:
      "vielen Dank für Ihr freundliches Feedback! Ihre Zufriedenheit liegt uns am Herzen! Team Shams Consult",
    challenge: {
      de: "Aufgrund von Kontaktbeschränkungen war kein persönlicher Vor-Ort-Kontakt für die Projektbesprechungen möglich.",
      en: "Due to pandemic restrictions, no in-person meetings were possible for project discussions.",
    },
    solution: {
      de: "Herr Shams hielt die Bauherren kontinuierlich telefonisch auf dem Laufenden und nahm sich stets die erforderliche Zeit für alle Detailfragen.",
      en: "Mr. Shams kept the clients regularly updated by phone, consistently dedicating ample time to address all questions and concerns.",
    },
    outcome: {
      de: "Reibungsloser Informationsfluss, höchste Zufriedenheit bei Erreichbarkeit, Professionalität und Wert.",
      en: "Seamless communication flow, achieving top marks in responsiveness, professionalism, and value.",
    },
    badges: {
      de: ["Hohe Erreichbarkeit", "Volle Transparenz", "Zeit für Fragen"],
      en: ["High Responsiveness", "Full Transparency", "Dedicated Time"],
    },
  },
  {
    id: "rs-architektur-muenster",
    reviewerName: "R S",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Sehr kompetent & professionell: Weiterempfehlung nach Münster",
      en: "Highly Competent & Professional: Full Recommendation from Münster",
    },
    subtitle: {
      de: "Erfolgreiche architektonische und beratende Betreuung",
      en: "Successful Architectural and Advisory Project Support",
    },
    projectType: {
      de: "Architektur- und Planungsleistung",
      en: "Architectural & Planning Services",
    },
    location: {
      de: "Münster",
      en: "Muenster",
    },
    reviewText:
      "Sehr kompetent und professionell, wir können das Architekturbüro Shams nur weiterempfehlen!",
    ownerResponse:
      "Vielen Dank für die Empfehlung. Liebe Grüße nach Münster! Team Shams Consult",
    challenge: {
      de: "Bedarf an einer fachlich versierten, kompetenten architektonischen Betreuung.",
      en: "Need for technically adept, competent architectural project management.",
    },
    solution: {
      de: "Präzise, professionelle Bearbeitung aller Planungsanforderungen durch Shams Consult.",
      en: "Precise, highly professional execution of all planning requirements by Shams Consult.",
    },
    outcome: {
      de: "Vollste Zufriedenheit des Bauherrn und klare Empfehlung des Architekturbüros.",
      en: "Complete client satisfaction and clear recommendation of the firm.",
    },
    badges: {
      de: ["Sehr kompetent", "Professionell", "Münster"],
      en: ["Highly Competent", "Professional", "Muenster"],
    },
  },
  {
    id: "mahi-jan-kreativ-unkompliziert",
    reviewerName: "Mahi Jan",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Kompetent, unkompliziert, kreativ und freundlich",
      en: "Competent, Straightforward, Creative and Friendly Planning",
    },
    subtitle: {
      de: "Klare Weiterempfehlung durch kreative und unkomplizierte Zusammenarbeit",
      en: "Clear Recommendation Through Creative and Approachable Collaboration",
    },
    projectType: {
      de: "Architekturplanung",
      en: "Architectural Planning",
    },
    reviewText:
      "Klare Weiterempfehlung! Sehr kompetent, unkompliziert, kreativ und freundlich!!!",
    ownerResponse:
      "Vielen Dank für Ihre freundlichen Worte und die klare Weiterempfehlung! Es freut uns sehr zu hören, dass Sie unsere Kompetenz, Unkompliziertheit, Kreativität und Freundlichkeit schätzen. Wir sind stets bemüht, unseren Kunden den bestmöglichen Service zu bieten und freuen uns darauf, Sie auch in Zukunft unterstützen zu dürfen! Team Shams Consult",
    challenge: {
      de: "Bauherr wünschte eine fachlich kompetente, aber zugleich unkomplizierte und kreative Planungsbetreuung.",
      en: "Client sought technically sound yet straightforward, creative architectural guidance.",
    },
    solution: {
      de: "Shams Consult verband kreative architektonische Lösungsansätze mit einer freundlichen, unbürokratischen Abwicklung.",
      en: "Shams Consult combined creative architectural design approaches with friendly, straightforward execution.",
    },
    outcome: {
      de: "Begeisterte Auftraggeber und eine eindeutige Weiterempfehlung des Büros.",
      en: "Enthusiastic clients and an unequivocal recommendation of the firm.",
    },
    badges: {
      de: ["Klare Weiterempfehlung", "Unkompliziert", "Kreativ & Freundlich"],
      en: ["Clear Recommendation", "Straightforward", "Creative & Friendly"],
    },
  },
  {
    id: "sher-ahmad-beratung",
    reviewerName: "Sher Ahmad",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Sehr gute und freundliche Architektenunterstützung",
      en: "Very Good and Friendly Architectural Project Support",
    },
    subtitle: {
      de: "Zuverlässige Begleitung bei der Realisierung des Vorhabens",
      en: "Reliable Support for Successful Project Realization",
    },
    projectType: {
      de: "Architektenleistung",
      en: "Architectural Services",
    },
    reviewText: "Sehr gut und freundlicher Architekt.",
    ownerResponse:
      "Vielen Dank für Ihre positive Bewertung! Es war uns eine Freude, Sie bei Ihrem Projekt zu unterstützen. Falls Sie in Zukunft weitere Unterstützung benötigen, stehen wir Ihnen gerne wieder zur Verfügung. Team Shams Consult",
    challenge: {
      de: "Projektunterstützung durch einen erfahrenen, zuverlässigen und ansprechbaren Architekten.",
      en: "Project support required from an experienced, reliable, and approachable architect.",
    },
    solution: {
      de: "Herr Shams begleitete das Projekt mit verlässlicher Fachberatung und freundlicher Betreuung.",
      en: "Mr. Shams supported the project with dependable technical advisory and friendly client care.",
    },
    outcome: {
      de: "Erfolgreiche Unterstützung des Projekts und zufriedener Bauherr.",
      en: "Successful project support and fully satisfied client.",
    },
    badges: {
      de: ["Sehr gut", "Freundlicher Architekt", "Zuverlässig"],
      en: ["Very Good", "Friendly Architect", "Reliable"],
    },
  },
  {
    id: "ali-top-bewertung",
    reviewerName: "Ali",
    rating: 5,
    googleReviewUrl: googleProfileUrl,
    projectTitle: {
      de: "Top-Bewertung & langjährige Zufriedenheit",
      en: "Top Rating & Long-Term Client Satisfaction",
    },
    subtitle: {
      de: "Nachhaltige Partnerschaft und erstklassige Betreuung",
      en: "Sustainable Partnership and First-Class Client Support",
    },
    projectType: {
      de: "Architektur & Stadtplanung",
      en: "Architecture & Urban Planning",
    },
    reviewText: "Top",
    ownerResponse:
      "vielen Dank für Ihre positive Bewertung! Team Shams Consult",
    challenge: {
      de: "Anspruch an erstklassige architektonische Beratung und verlässliche Umsetzung.",
      en: "Demand for first-class architectural consultation and reliable execution.",
    },
    solution: {
      de: "Ganzheitliche Betreuung durch das Planungsbüro Shams Consult.",
      en: "Holistic advisory and execution provided by Shams Consult.",
    },
    outcome: {
      de: "Ausgezeichnete Bewertung ('Top') und langfristiges Vertrauen.",
      en: "Excellent rating ('Top') and lasting trust.",
    },
    badges: {
      de: ["Top Bewertung", "5.0 Sterne", "Shams Consult"],
      en: ["Top Rating", "5.0 Stars", "Shams Consult"],
    },
  },
];
