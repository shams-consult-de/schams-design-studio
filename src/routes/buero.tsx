import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/buero")({
  head: () => ({
    meta: [
      { title: "Über uns — Shams Consult" },
      {
        name: "description",
        content:
          "Über Shams Consult — Architektur, Stadtplanung und Forschung. Gegründet und geleitet von Dipl.-Ing. Majeed Shams. Team, Philosophie und Geschichte.",
      },
      { property: "og:title", content: "Über uns — Shams Consult" },
      { property: "og:url", content: "/buero" },
    ],
    links: [{ rel: "canonical", href: "/buero" }],
  }),
  component: BueroPage,
});

const team = [
  {
    name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
    role: "Büroinhaber · Architekt und Stadtplaner",
    lines: [
      "Mitglied Architekten- und Stadtplanerkammer Hessen (AKH Nr. 21886)",
      "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2008",
      "Masterstudium Stadtplanung HfT Stuttgart — Master of Engineering 2011",
      "Lehrbeauftragter / Dozent seit 2020 — Frankfurt UAS, Fachbereich Architektur/Stadtplanung und Bauingenieurwesen",
      "Gastdozent BTU Cottbus, 2015",
    ],
  },
  {
    name: "Hatice Erol Yeniyapan",
    role: "Dipl.-Ing. (FH) Architektin, M.A.",
    lines: [
      "Architekturstudium Hochschule Karlsruhe (HsKA) — Diplom mit Auszeichnung 2009/10",
      "Masterstudium Architektur Hochschule Karlsruhe (HsKA) — Master of Arts (M.A.)",
    ],
  },
  {
    name: "Samuel Allaw (B.Eng.)",
    role: "Bauleitung / Projektsteuerung",
    lines: ["Bachelor of Engineering — Bauingenieurwesen, Hochschule Darmstadt"],
  },
  {
    name: "Yasmine Yagcioglu",
    role: "Dipl.-Ing. (FH) Architektur",
    lines: ["Architekturstudium Hochschule Mainz — University of Applied Sciences, 2011"],
  },
  {
    name: "Ronak Namdari (M.A.)",
    role: "Master of Art in Architecture",
    lines: ["Städelschule, Frankfurt am Main — Master of Arts (M.A.)"],
  },
  {
    name: "Farhad Minaei (B.Arch.)",
    role: "3D-Visualisierung",
    lines: ["Bachelor of Architecture"],
  },
];

function initials(name: string) {
  return name
    .replace(/\(.*?\)|Dipl\.-Ing\.|M\.Eng\.|M\.A\.|B\.Eng\.|B\.Arch\./g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

function BueroPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32">
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Über uns
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Über <span className="italic">Shams Consult</span>.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Erfahrung, Verantwortung und Gestaltungsanspruch.
          </p>
        </header>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black md:text-3xl">
              „From nobody to somebody, to help and share experiences with everybody.“
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Shams Consult steht für anspruchsvolle Architektur, integrierte Stadtplanung
              und anwendungsorientierte Forschung. Gegründet und geleitet von Dipl.-Ing.
              Majeed Shams, verbinden wir über 15 Jahre Praxiserfahrung im Bau- und
              Planungsrecht mit Innovationsfreude, interdisziplinärem Denken und einem
              klaren gesellschaftlichen Anspruch.
            </p>
            <p>
              Für uns bedeutet Architektur und Bauberatung weit mehr als nur die Planung
              von Gebäuden. Es ist eine Zusammenarbeit des Vertrauens, in der wir Ihre
              individuellen Wünsche mit unserer langjährigen Erfahrung und Expertise
              kombinieren — im Einklang mit den technischen, rechtlichen und
              wirtschaftlichen Möglichkeiten, für eine nachhaltige Zukunft.
            </p>
            <p>
              Bereits zahlreiche Kunden und Partner haben uns ihr Vertrauen geschenkt. Wir
              haben Architektur- und Städtebauprojekte mit Budgets von 1.000 Euro bis
              13,5 Mio. Euro erfolgreich betreut.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Team
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Lernen Sie unser <span className="italic">Team</span> kennen.
            </h2>
          </header>

          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <li key={m.name} className="flex flex-col rounded-2xl border border-border bg-brand-white p-8">
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent/10 font-serif text-2xl text-brand-accent"
                >
                  {initials(m.name)}
                </div>
                <h3 className="mt-6 font-serif text-xl">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-accent">{m.role}</p>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-brand-black/70">
                  {m.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophie */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Philosophie
            </span>
            <h3 className="mt-6 font-serif text-2xl">Vertrauen</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Vertrauen ist der Schlüssel für den ersten Schritt und die Grundlage jeder
              erfolgreichen Zusammenarbeit — mit Bauherren, Kommunen und Partnern.
            </p>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Verantwortung
            </span>
            <h3 className="mt-6 font-serif text-2xl">Gestaltungswille</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Verantwortung und Gestaltungswille leiten unser tägliches Handeln — im
              Einklang mit technischen, rechtlichen und wirtschaftlichen Möglichkeiten.
            </p>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
              Geschichte
            </span>
            <h3 className="mt-6 font-serif text-2xl">Die Reise vom Traum zum Erfolg</h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
              Majeed Shams kam 2005 mit null Euro aus Afghanistan nach Deutschland. Aus
              Architekturstudium in Karlsruhe und Masterstudium in Stuttgart wurde ein
              Büro mit über 15 Jahren Berufserfahrung.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl">
            Lernen Sie uns persönlich <span className="italic">kennen</span>.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Erstgespräch buchen
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-brand-accent hover:text-brand-accent"
            >
              Kontakt <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
