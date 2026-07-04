import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
export const Route = createFileRoute("/forschung")({
  head: () => ({
    meta: [
      { title: "Forschung — Shams Consult" },
      {
        name: "description",
        content:
          "Forschung und Lehre bei Shams Consult — Fachbeiträge zur Stellplatzsatzung sowie betreute Bachelor- und Masterarbeiten an der Frankfurt UAS.",
      },
      { property: "og:title", content: "Forschung — Shams Consult" },
      { property: "og:url", content: "https://shams-consult.de/forschung" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/forschung" }],
  }),
  component: ForschungPage,
});

const pdfHref =
  "https://www.shams-consult.de/app/download/12519189657/Stellplatzsatzung+im+Fokus-Beitrag+von+Shams+Architektur.pdf?t=1751195764";

const arbeiten = [
  {
    typ: "Bachelor-Arbeit",
    thema:
      "Analyse und Optimierung der Prozesse der Mängelvermeidung und Mängelbearbeitung bei Bauprojekten unter Berücksichtigung wirtschaftlicher Aspekte",
    verfasser: "B.Eng. Herr Firat Y., WS 2023",
    betreuung: "Prof. Dr.-Ing. Jörg Huth · Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
  {
    typ: "Bachelor-Arbeit",
    thema:
      "Baukostenmanagement während der Covid-19-Pandemie mit erheblicher Baupreiserhöhung am Fallbeispiel Neubau eines Mehrfamilienhauses mit Tiefgarage in Dreieich",
    verfasser: "B.Eng. Frau Selina Ö., SS 2022",
    betreuung: "Prof. Dr.-Ing. Mathias Rohde · Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
  {
    typ: "Bachelor-Arbeit",
    thema:
      "Gegenüberstellung zweier kernsanierter Wohnobjekte unter verschiedenen Auftraggebern — Baukosten in unterschiedlichen Zeiten der Corona-Pandemie am Beispiel eines Mehrfamilienhauses mit Tiefgarage",
    verfasser: "B.Eng. Frau Aydan D., WS 2022",
    betreuung: "Prof. Dr.-Ing. Mathias Rohde · Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
  {
    typ: "Bachelor-Arbeit",
    thema:
      "Auswertung der Bausubstanz und der Entscheidungsfindung (Sanierung versus Abriss) am Fallbeispiel eines Zweifamilienhauses in Rödermark",
    verfasser: "B.Eng. Frau Zinat A., WS 2020/21",
    betreuung: "Prof. Dr.-Ing. Mathias Rohde · Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
  {
    typ: "Masterarbeit",
    thema:
      "Fruchtbare Mullis Elsdorf — Quartierentwicklung, agro-urbanes Siedlungsmodell und Transformation eines dynamischen Masterplanes in Elsdorf bei Düsseldorf",
    verfasser: "M.Eng. Frau Rebecca Granderath, SS 2021",
    betreuung:
      "Prof. Dipl.-Ing. Isabel Maria Finkenberger · Coaching: Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
  {
    typ: "Masterarbeit",
    thema:
      "Stadtentwicklungskonzept Dieburg — Innovative Ansätze für die Entwicklung einer historischen Stadt (Studiengang Umweltmanagement und Stadtplanung in Ballungsräumen, UAS Frankfurt)",
    verfasser: "M.Eng. Frau Nicol T. und M.Eng. Frau Piera W., SS 2020",
    betreuung: "Prof. Dr.-Ing. Michael Peterek · Dipl.-Ing. (FH) Majeed Shams M.Eng.",
  },
];

function ForschungPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32">
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Forschung & Lehre
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Forschung bei <span className="italic">Shams Consult</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-brand-black/70">
            Das Planungsbüro Shams Consult gibt aktuelle Themen der Bau- und Stadtplanung
            als „Forschungsprojekte“ heraus und unterstützt Studierende und Professor:innen
            bei der Betreuung der Abschlussarbeiten (Master & Bachelor) an der Frankfurt
            University of Applied Sciences (UAS).
          </p>
        </header>
      </section>

      {/* Fachbeitrag */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <article className="rounded-2xl border border-border bg-concrete/50 p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Aktueller Fachbeitrag · Frankfurt am Main, Januar 2024
          </p>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">
            Stellplatzsatzung im Fokus: Zeit für eine kritische Neubewertung
          </h2>
          <p className="mt-2 text-brand-black/70">
            Warum starre Vorgaben zeitgemäßer Mobilität und Wohnraumentwicklung im Weg stehen.
          </p>
          <p className="mt-4 text-sm text-brand-black/60">
            Ein Beitrag von Majeed Shams und Leonie Ries.
          </p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-black/80">
            <p>
              Die Debatte um die Stellplatzsatzung hat in den letzten Jahren an Bedeutung
              gewonnen. Als Architekt und Planverfasser von Bauanträgen sowie ehemaliger
              Prüfer in der Bauverwaltung erlebten wir die Auswirkungen dieses Instruments
              sehr intensiv. Starre Vorgaben können erheblichen volkswirtschaftlichen
              Schaden verursachen — betroffen sind Bauwillige ebenso wie
              Genehmigungsbehörden.
            </p>
            <p>
              Viele hessische Gemeinden regeln die Parkierung über eine „Stellplatzsatzung“
              mit stark variierenden Anforderungen (typisch 1,5 – 2,0 Stellplätze pro
              Wohneinheit). Diese Zahlen basieren häufig auf Erfahrungswerten statt auf
              belastbaren Prognosen und weichen vom tatsächlichen Bedarf ab.
            </p>
            <p>
              Die Stellplatzproblematik erzwingt oft eine „umgekehrte Planung“ — die Anzahl
              der Wohneinheiten wird an nachweisbare Stellplätze angepasst. Das führt zu
              nicht marktgerechten Wohnungsgrößen, verhindert Nachverdichtung und
              verteuert Mieten durch Tiefgaragen. Alternative Konzepte wie Zonen mit
              qualitativ hochwertiger ÖPNV-Erschließung, Quartiers-Mobilitätskonzepte mit
              Fahrrad- und Sharing-Fokus oder Stellplatzobergrenzen sind zeitgemäßer.
            </p>
            <p>
              Wir plädieren dafür, die Stellplatzsatzung nicht als statisches Instrument
              zu betrachten, sondern als dynamische Regelung, die sich zeitgemäßem
              Mobilitätsverhalten anpasst — im Interesse der Wohnraumschaffung und einer
              nachhaltigen Verkehrswende.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-black px-6 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-accent"
            >
              <Icon name="file-arrow-down" className="text-base" /> Vollständiger Beitrag (PDF, 163 KB)
            </a>
          </div>

          <p className="mt-6 text-xs text-brand-black/50">
            #Bauplanung #Baugenehmigung #Stellplatzsatzung #Städtebau #Baupolitik
            #Immobilien #Wohnungsbau #Verkehrsplanung · © 2024 Majeed Shams
          </p>
        </article>
      </section>

      {/* Betreute Abschlussarbeiten */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Betreute Abschlussarbeiten
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Bachelor- & <span className="italic">Masterarbeiten</span>.
            </h2>
            <p className="mt-4 max-w-2xl text-brand-black/70">
              Auswahl abgeschlossener Arbeiten in Kooperation mit der Frankfurt UAS.
            </p>
          </header>

          <ul className="grid gap-6 md:grid-cols-2">
            {arbeiten.map((a) => (
              <li
                key={a.thema}
                className="rounded-2xl border border-border bg-brand-white p-8"
              >
                <div className="flex items-center gap-2">
                  <Icon name="graduation-cap" className="text-base text-brand-accent" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                    {a.typ}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-snug">{a.thema}</h3>
                <p className="mt-3 text-sm text-brand-black/70">
                  <strong className="font-semibold text-brand-black">Verfasser:in:</strong>{" "}
                  {a.verfasser}
                </p>
                <p className="mt-1 text-sm text-brand-black/70">
                  <strong className="font-semibold text-brand-black">Betreuung:</strong>{" "}
                  {a.betreuung}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-brand-black/60">
            Weitere Informationen zur Kooperation:{" "}
            <a
              href="https://www.frankfurt-university.de/de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border-b border-brand-black hover:border-brand-accent hover:text-brand-accent"
            >
              Frankfurt University of Applied Sciences <Icon name="up-right-from-square" className="text-xs" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
