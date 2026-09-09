export interface ComparisonCriterion {
  title: { de: string; en: string };
  shamsConsult: {
    text: { de: string; en: string };
    highlight: boolean;
  };
  competitorModel: {
    text: { de: string; en: string };
    highlight: boolean;
  };
  explanation: { de: string; en: string };
}

export interface ComparisonTopic {
  id: string;
  slug: string;
  badge: { de: string; en: string };
  title: { de: string; en: string };
  subtitle: { de: string; en: string };
  metaTitle: { de: string; en: string };
  metaDescription: { de: string; en: string };
  shamsLabel: { de: string; en: string };
  competitorLabel: { de: string; en: string };
  summary: { de: string; en: string };
  criteria: ComparisonCriterion[];
  takeaways: Array<{ de: string; en: string }>;
}

export const comparisonTopics: ComparisonTopic[] = [
  {
    id: "boutique-vs-grossbuero",
    slug: "boutique-vs-grossbuero",
    badge: {
      de: "Bürostruktur im Vergleich",
      en: "Studio Structure Comparison",
    },
    title: {
      de: "Boutique-Architekturbüro vs. Großbüro: Wer plant Ihr Projekt besser?",
      en: "Boutique Architecture Studio vs. Corporate Firm: Who Best Delivers Your Vision?",
    },
    subtitle: {
      de: "Persönliche Inhaberführung und agile Bauamtsabstimmung versus mehrstufige Konzernstrukturen. Ein ehrlicher Entscheidungskompass für anspruchsvolle Bauherren in Frankfurt und Rhein-Main.",
      en: "Personal founder stewardship and agile municipal approvals versus multi-tier corporate hierarchies. An honest decision guide for discerning building owners in Frankfurt & Rhein-Main.",
    },
    metaTitle: {
      de: "Boutique-Architekturbüro vs. Großbüro: Der Vergleich | Shams Consult",
      en: "Boutique Studio vs. Corporate Architecture Firm: The Comparison | Shams Consult",
    },
    metaDescription: {
      de: "Boutique-Architekturbüro oder Großbüro? Vergleichen Sie persönliche Inhaberführung, Agilität bei Bauanträgen, Honorare und HOAI-Vollservice in Frankfurt & Hessen.",
      en: "Boutique architectural studio or corporate planning firm? Compare founder-led dedication, permit approval speed, fee structures, and full-service HOAI delivery.",
    },
    shamsLabel: {
      de: "Shams Consult (Boutique-Büro)",
      en: "Shams Consult (Boutique Studio)",
    },
    competitorLabel: {
      de: "Großes Planungsbüro (Konzern / Großbüro)",
      en: "Large Corporate Planning Firm",
    },
    summary: {
      de: "Bei Shams Consult betreut Dipl.-Ing. Majeed Shams Ihr Vorhaben persönlich als Chefaufgabe. Keine Delegation an unerfahrene Praktikanten, keine bürokratischen Reibungsverluste – dafür direkte Haftung, 15+ Jahre gewachsene hessische Behördenkontakte und absolute Kostendisziplin.",
      en: "At Shams Consult, Dipl.-Ing. Majeed Shams leads your project personally as a priority. No delegation to inexperienced trainees, no bureaucratic delays—just direct accountability, 15+ years of established municipal relationships, and rigorous cost discipline.",
    },
    criteria: [
      {
        title: {
          de: "Projektleitung & Ansprechpartner",
          en: "Project Leadership & Contact",
        },
        shamsConsult: {
          text: {
            de: "Direkte, kontinuierliche Führung durch Inhaber Dipl.-Ing. Majeed Shams (AKH #21886) über alle Leistungsphasen hinweg.",
            en: "Direct, continuous leadership by founder Dipl.-Ing. Majeed Shams (AKH #21886) across all project phases.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Präsentation durch Büropartner; die operative Bearbeitung wird häufig an wechselnde Junior-Architekten oder Werkstudenten übergeben.",
            en: "Initial pitch by studio partners; actual execution is frequently delegated to rotating junior architects or interns.",
          },
          highlight: false,
        },
        explanation: {
          de: "Bei komplexen Bauvorhaben entscheidet Erfahrung im Detail. Direkte Inhaberbetreuung verhindert Informationsverluste zwischen Entwurf und Baustelle.",
          en: "In complex developments, nuanced experience matters. Direct founder involvement eliminates communication friction between concept and construction.",
        },
      },
      {
        title: {
          de: "Entscheidungswege & Bauamt-Reaktionszeiten",
          en: "Decision Speed & Municipal Responsiveness",
        },
        shamsConsult: {
          text: {
            de: "Flache Hierarchien, sofortige Klärung von Rückfragen der Bauaufsichtsbehörden (HBO, § 34 BauGB) innerhalb von 24–48 Stunden.",
            en: "Flat hierarchies with immediate resolution of municipal building authority inquiries (HBO, § 34 BauGB) within 24–48 hours.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Mehrstufige interne Freigabeschleifen und Abteilungsabstimmungen verlangsamen Baugenehmigungsverfahren.",
            en: "Multi-tiered internal review layers and department sign-offs often slow down municipal permit issuance.",
          },
          highlight: false,
        },
        explanation: {
          de: "Bauzinsen und Baukosten steigen mit jedem Monat Verzögerung. Schnelle behördliche Klärung spart bares Geld.",
          en: "Financing rates and construction inflation mount with every month of delay. Rapid municipal clearance delivers tangible financial savings.",
        },
      },
      {
        title: {
          de: "Kostenstruktur & Honorartransparenz",
          en: "Cost Structure & Fee Transparency",
        },
        shamsConsult: {
          text: {
            de: "Faire HOAI-Honorare ohne Umlegung repräsentativer Konzern-Overheads oder administrativer Großstrukturen.",
            en: "Fair HOAI statutory fee structuring without overhead markups to finance massive administrative hierarchies.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Hohe Stundensätze und Nebenkostenpauschalen zur Deckung großer Büroinfrastrukturen und Managementschichten.",
            en: "High hourly billable rates and administrative overhead surcharges to maintain large office facilities.",
          },
          highlight: false,
        },
        explanation: {
          de: "Jeder Euro Ihres Honorars fließt direkt in fundierte planerische Ingenieursleistung für Ihr Gebäude.",
          en: "Every euro of your architectural fee directly finances rigorous engineering and dedicated design precision for your building.",
        },
      },
      {
        title: {
          de: "Regionale Behördenkenntnis (Hessen)",
          en: "Regional Authority Expertise (Hesse)",
        },
        shamsConsult: {
          text: {
            de: "Spezifische Verhandlungssicherheit mit den Bauaufsichtsämtern in Frankfurt, Taunus, Offenbach und Darmstadt.",
            en: "Tailored negotiation familiarity with municipal building authorities across Frankfurt, Taunus, Offenbach, and Darmstadt.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Oft überregionale Standardprozesse mit weniger Fingerspitzengefühl für lokale hessische Satzungen und Denkmalschutzämter.",
            en: "Often generalized national workflows with less granular intuition for local Hessian municipal bylaws and heritage agencies.",
          },
          highlight: false,
        },
        explanation: {
          de: "Hessisches Baurecht (HBO) erfordert detailliertes Verständnis lokaler Auslegungspraxis zur rechtssicheren Genehmigung.",
          en: "Hesse building regulations (HBO) require deep understanding of regional interpretation standards for bulletproof approvals.",
        },
      },
    ],
    takeaways: [
      {
        de: "Kein Weiterreichen an Junior-Kräfte: Ihr Bauvorhaben bleibt in den Händen von Dipl.-Ing. Majeed Shams.",
        en: "Zero delegation to junior staff: Your development remains under the direct stewardship of Dipl.-Ing. Majeed Shams.",
      },
      {
        de: "Schnellere Baugenehmigungen durch direkte persönliche Behördenabstimmung in Hessen.",
        en: "Faster building permits through direct, personal authority dialogue across Hesse.",
      },
      {
        de: "Volle HOAI-Leistungsphasen 1–9 aus einer Hand ohne kostspieligen Corporate-Overhead.",
        en: "Full HOAI Phases 1–9 from a single accountable source without expensive corporate overhead.",
      },
    ],
  },
  {
    id: "architekt-vs-bautraeger",
    slug: "architekt-oder-bautraeger",
    badge: {
      de: "Vertragsmodell im Vergleich",
      en: "Procurement Model Comparison",
    },
    title: {
      de: "Freier Architekt vs. Bauträger & Generalübernehmer: Die richtige Wahl für Bauherren",
      en: "Independent Architect vs. Turnkey Developer / General Contractor: The Right Choice",
    },
    subtitle: {
      de: "Unabhängige treuhänderische Vertretung versus gewinnorientierter Bauträgervertrag. Wo liegen die echten Risiken bei Festpreis, Baumängeln und Nachträgen?",
      en: "Independent fiduciary advocacy versus profit-driven turnkey development contracts. Where the real risks lie regarding fixed pricing, defects, and change orders.",
    },
    metaTitle: {
      de: "Freier Architekt oder Bauträger? Vor- und Nachteile im Vergleich | Shams Consult",
      en: "Independent Architect or Turnkey Builder? Pros & Cons Compared | Shams Consult",
    },
    metaDescription: {
      de: "Architekt oder Bauträger / GU? Vergleichen Sie Unabhängigkeit, DIN 276 Kostentransparenz, VOB-Bauleitung und individuelle Entwurfsfreiheit in Hessen.",
      en: "Architect or turnkey contractor? Compare fiduciary independence, DIN 276 cost transparency, on-site supervision, and customized architectural freedom in Hesse.",
    },
    shamsLabel: {
      de: "Freier Architekt (Shams Consult)",
      en: "Independent Architect (Shams Consult)",
    },
    competitorLabel: {
      de: "Bauträger / Generalübernehmer (GU)",
      en: "Turnkey Developer / General Contractor (GU)",
    },
    summary: {
      de: "Ein Freier Architekt ist gesetzlich der alleinige Treuhänder des Bauherrn. Ein Bauträger hingegen verdient an der Differenz zwischen Verkaufspreis und den tatsächlichen Baukosten – ein systemimmanenter Interessenkonflikt bei Materialqualität, Bauüberwachung und Nachträgen.",
      en: "An independent architect is legally mandated as the sole fiduciary representative of the building owner. A turnkey contractor, by contrast, profits from the spread between contract price and actual construction cost—an inherent conflict of interest regarding materials, oversight, and change orders.",
    },
    criteria: [
      {
        title: {
          de: "Interessenvertretung & Treuhandfunktion",
          en: "Fiduciary Advocacy & Representation",
        },
        shamsConsult: {
          text: {
            de: "100% treuhänderischer Sachwalter des Bauherrn. Gesetzlich nach AKH-Berufsordnung verpflichtet, ausschließlich die Interessen des Auftraggebers zu vertreten.",
            en: "100% fiduciary trustee of the owner. Legally bound by architectural chamber ethics to represent solely the client's financial and quality interests.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Verkäufer und Auftragnehmer in Personalunion. Profit entsteht durch minimale Einkaufskosten und Einsparungen bei der Bauausführung.",
            en: "Seller and contractor combined. Operating profit is maximized by cutting sub-contractor procurement costs and construction expenses.",
          },
          highlight: false,
        },
        explanation: {
          de: "Wer kontrolliert den Bauleiter, wenn dieser beim selben Unternehmen angestellt ist, das den Gewinn maximieren will?",
          en: "Who holds the site manager accountable if they are employed by the very contractor aiming to minimize construction expenses?",
        },
      },
      {
        title: {
          de: "Kostentransparenz nach DIN 276",
          en: "DIN 276 Cost Transparency & Audits",
        },
        shamsConsult: {
          text: {
            de: "Offene Vergabe aller Gewerke per Einzelvergabe. Der Bauherr sieht jedes Handwerkerangebot, jede Rechnung und profitiert 1:1 von Nachlässen.",
            en: "Full open-book trade procurement. The client audits every trade bid, invoices, and benefits 100% directly from contractor discounts.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Pauschaler Festpreis mit intransparenten Gewinnaufschlägen. Sonderwünsche und nachträgliche Anpassungen werden extrem teuer bepreist.",
            en: "Fixed lump-sum price with concealed profit margins. Custom adjustments and change orders are billed at steep premiums.",
          },
          highlight: false,
        },
        explanation: {
          de: "Die vermeintliche Sicherheit des 'Festpreises' erweist sich bei Planänderungen oft als kostspielige Kostenfalle.",
          en: "The perceived security of a 'fixed price' frequently turns into an expensive trap whenever design revisions or site surprises occur.",
        },
      },
      {
        title: {
          de: "Qualitätskontrolle vor Ort (LPH 8 Bauleitung)",
          en: "On-Site Quality Control (Phase 8 Supervision)",
        },
        shamsConsult: {
          text: {
            de: "Strenge, unbestechliche Bauüberwachung nach DIN & VOB. Mängel werden sofort gerügt und Zahlungsfreigaben erst nach Mängelbeseitigung erteilt.",
            en: "Rigorous, uncompromising site supervision under DIN & VOB. Defects are penalized immediately and contractor payments withheld until resolved.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Eigene Bauleiter kontrollieren eigene Handwerker. Mängel werden intern oft bagatellisiert oder vor der Abnahme kaschiert.",
            en: "In-house site supervisors audit internal subcontractors. Defects are frequently downplayed or cosmetically concealed before handover.",
          },
          highlight: false,
        },
        explanation: {
          de: "Nur ein unabhängiger Architekt stellt sicher, dass Dämmung, Abdichtung und Schallschutz exakt nach den anerkannten Regeln der Technik ausgeführt werden.",
          en: "Only an independent architect guarantees that thermal insulation, waterproofing, and acoustic engineering strictly conform to recognized technical standards.",
        },
      },
      {
        title: {
          de: "Entwurfsfreiheit & Grundstücksausnutzung",
          en: "Design Freedom & Site Yield Optimization",
        },
        shamsConsult: {
          text: {
            de: "Einzigartige Architektur, die das Grundstück baurechtlich (§ 34 BauGB / B-Plan) optimal ausnutzt und maximalen Immobilienwert stiftet.",
            en: "Custom bespoke architecture maximizing site yield under planning law (§ 34 BauGB / B-Plan) to generate enduring real estate asset value.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Standardisierte Raster und Typenhäuser aus dem Baukasten. Grundrisse sind starr; Anpassungen an schwierige Hanglagen oder Zuschnitte begrenzt.",
            en: "Standardized templates and modular catalogue designs. Floor plans are rigid; adaptability to challenging terrain or zoning constraints is limited.",
          },
          highlight: false,
        },
        explanation: {
          de: "Ein maßgeschneidertes Architektenhaus erzielt langfristig signifikant höhere Wiederverkaufswerte als ein standardisiertes Bauträgerhaus.",
          en: "A customized architect-designed property achieves substantially higher long-term resale equity than a mass-market turnkey building.",
        },
      },
    ],
    takeaways: [
      {
        de: "100% treuhänderische Unabhängigkeit: Shams Consult schützt ausschließlich Ihr Budget und Ihre Bauqualität.",
        en: "100% fiduciary independence: Shams Consult protects solely your capital and structural quality.",
      },
      {
        de: "Volle Einsicht in alle Handwerkerpreise nach DIN 276 statt intransparenter Festpreisaufschläge.",
        en: "Transparent open-book accounting under DIN 276 instead of opaque turnkey contractor markups.",
      },
      {
        de: "Unbestechliche Bauüberwachung nach VOB verhindert verdeckte Baumängel vor der Abnahme.",
        en: "Uncompromising on-site supervision under VOB prevents hidden construction defects before final sign-off.",
      },
    ],
  },
  {
    id: "vollarchitektur-vs-reiner-entwurf",
    slug: "vollarchitektur-vs-entwurf",
    badge: {
      de: "Leistungsumfang im Vergleich",
      en: "Scope of Services Comparison",
    },
    title: {
      de: "HOAI Vollarchitektur (LPH 1–9) vs. Reines Entwurfsbüro: Warum Bauleitung unverzichtbar ist",
      en: "Full HOAI Phases 1–9 vs. Pure Conceptual Studio: Why Site Supervision is Vital",
    },
    subtitle: {
      de: "Hübsche 3D-Visualisierungen nützen nichts, wenn Ausführung und Bauleitung scheitern. Warum durchgehende Verantwortung vom Entwurf bis zur Schlüsselübergabe Risiken minimiert.",
      en: "Beautiful 3D renderings are meaningless if technical execution and site management fail. Why end-to-end accountability from concept to keys minimizes risk.",
    },
    metaTitle: {
      de: "HOAI Vollarchitektur vs. Reines Entwurfsbüro | Shams Consult",
      en: "Full HOAI Phases 1–9 vs. Pure Design Studios | Shams Consult",
    },
    metaDescription: {
      de: "Vollarchitektur LPH 1–9 oder reines Entwurfsbüro? Erfahren Sie, warum Ausführungsplanung und Bauleitung (LPH 8) entscheidend für Kostensicherheit sind.",
      en: "Full HOAI service phases 1–9 or pure concept design? Discover why technical detailing and on-site supervision (Phase 8) are critical for cost certainty.",
    },
    shamsLabel: {
      de: "Shams Consult (Vollarchitektur LPH 1–9)",
      en: "Shams Consult (Full Service HOAI 1–9)",
    },
    competitorLabel: {
      de: "Reines Entwurfs- / Zeichenbüro (LPH 1–4)",
      en: "Pure Concept / Drafting Studio (Phases 1–4)",
    },
    summary: {
      de: "Viele Designbüros liefern nur Entwurfsskizzen und Bauanträge ab und überlassen die Baustelle dem Schicksal. Shams Consult übernimmt die ungeteilte Gesamtverantwortung von den ersten Grundlagen bis zur Objektbetreuung nach Fertigstellung.",
      en: "Many styling studios merely deliver visual renderings and permit applications, leaving construction execution to chance. Shams Consult assumes undivided overall accountability from initial feasibility through post-completion warranty supervision.",
    },
    criteria: [
      {
        title: {
          de: "Durchgehende Verantwortung",
          en: "Continuous End-to-End Accountability",
        },
        shamsConsult: {
          text: {
            de: "Ein einziger, voll haftpflichtversicherter Vertragspartner für alle 9 HOAI-Leistungsphasen von Entwurf über Statikkoordination bis zur Abnahme.",
            en: "A single, fully insured professional partner across all 9 HOAI phases from initial sketches through structural coordination to final handover.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Vertrag endet nach Phase 3 (Entwurf) oder 4 (Genehmigung). Der Bauherr muss Ausführungsplanung und Bauleitung mühsam neu ausschreiben.",
            en: "Contract terminates after Phase 3 (design) or 4 (permit). The client must source, onboard, and manage separate execution engineers.",
          },
          highlight: false,
        },
        explanation: {
          de: "Geteilte Verantwortung führt auf der Baustelle zu gegenseitigen Schuldzuweisungen zwischen Entwerfer und Bauleiter.",
          en: "Fragmented accountability inevitably triggers finger-pointing between concept designers and third-party site managers.",
        },
      },
      {
        title: {
          de: "Ausführungsplanung im Maßstab 1:50 bis 1:1",
          en: "Technical Detailing & Working Drawings (1:50 to 1:1)",
        },
        shamsConsult: {
          text: {
            de: "Präzise Werk- und Detailplanung aller konstruktiven Anschlüsse (Wärmebrücken, Abdichtungen, Fassadenschnitte) vor Baubeginn.",
            en: "Precise working drawings and structural junction details (thermal bridges, waterproofing, façade sections) prior to ground-breaking.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Nur grobe Genehmigungspläne (1:100). Handwerker müssen Details auf der Baustelle eigenmächtig 'improvisieren'.",
            en: "Only coarse permit plans (1:100). Contractors are forced to improvise critical technical junctions unguided on site.",
          },
          highlight: false,
        },
        explanation: {
          de: "Fehlende Detailplanung ist die Hauptursache für Bauschäden, Feuchtigkeitseintritt und teure Bauzeitverzögerungen.",
          en: "Missing technical details represent the single leading cause of structural defects, water ingress, and expensive site stoppages.",
        },
      },
      {
        title: {
          de: "Ausschreibung & Vergabeverhandlung (LPH 6 & 7)",
          en: "Tendering & Trade Procurement (Phases 6 & 7)",
        },
        shamsConsult: {
          text: {
            de: "Detaillierte Leistungsverzeichnisse mit exakten Massenermittlungen nach VOB/C. Echter Preiswettbewerb senkt Baukosten um 10–20%.",
            en: "Exhaustive bills of quantities (BoQ) with precise quantity take-offs under VOB/C. Competitive bidding reduces costs by 10–20%.",
          },
          highlight: true,
        },
        competitorModel: {
          text: {
            de: "Keine Ausschreibungskompetenz. Der Bauherr muss Handwerker selbst anfragen und kann Angebote technisch nicht vergleichen.",
            en: "Zero procurement capability. The building owner must independently solicit quotes with no ability to benchmark technical specifications.",
          },
          highlight: false,
        },
        explanation: {
          de: "Ohne professionelle Leistungsverzeichnisse stellen Handwerker während des Baus unkontrollierbare Nachtragsrechnungen.",
          en: "Without professional bills of quantities, contractors submit unpredictable, costly change orders throughout construction.",
        },
      },
    ],
    takeaways: [
      {
        de: "Keine Schnittstellenverluste: Die architektonische Vision wird auf der Baustelle 1:1 präzise umgesetzt.",
        en: "Zero interface friction: The architectural vision is translated into built reality with millimeter precision.",
      },
      {
        de: "Ausschreibungen nach VOB schützen Sie vor unberechtigten Handwerker-Nachträgen.",
        en: "VOB-compliant tendering protects your budget from unjustified contractor change orders.",
      },
      {
        de: "Ein durchgehender Ansprechpartner mit voller rechtlicher Haftung bis zur endgültigen Verjährung.",
        en: "One continuous trusted partner with full statutory liability through final warranty expiration.",
      },
    ],
  },
];
