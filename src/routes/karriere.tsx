import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere — Shams Consult" },
      {
        name: "description",
        content:
          "Karriere bei Shams Consult in Frankfurt am Main. Aktuelle Stellenanzeigen für studentische Hilfskräfte, Praktikant:innen und Freelancer:innen.",
      },
      { property: "og:title", content: "Karriere — Shams Consult" },
      {
        property: "og:description",
        content:
          "Werde Teil eines innovativen Architektur- und Stadtplanungsbüros in Frankfurt am Main.",
      },
      { property: "og:url", content: "https://shams-consult.de/karriere" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/karriere" }],
  }),
  component: KarrierePage,
});

const jobs = [
  {
    title: "Studentische Hilfskraft (m/w/d) Architektur / Stadtplanung",
    location: "Frankfurt am Main / remote",
    start: "ab sofort",
    description:
      "Wir sind ein innovatives Architekturbüro mit Sitz in Frankfurt am Main, spezialisiert auf Bau- und Planungsrecht. Seit über 15 Jahren realisieren wir hochwertige Bauprojekte und legen großen Wert auf ein interdisziplinäres, wertschätzendes Team.",
    href: "https://sway.cloud.microsoft/QE2rjDQozmGkpViD?ref=email",
  },
  {
    title: "Studentische Hilfskraft, Praktikant/in oder Freelancer/in — Marketing / Social Media",
    location: "Frankfurt am Main / remote",
    start: "ab sofort",
    description:
      "Unterstütze unser Team bei der Content-Erstellung, Social-Media-Betreuung und beim Aufbau unserer Marke im digitalen Raum. Ideal für kreative Köpfe mit Interesse an Architektur und Stadtplanung.",
    href: "https://sway.cloud.microsoft/JNNbDOUzGgtBsk5G?ref=email",
  },
];

function KarrierePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Karriere
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Arbeiten bei <span className="italic">Shams Consult</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Werden Sie Teil eines interdisziplinären Teams an der Schnittstelle von
            Architektur, Stadtplanung und Forschung.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24" data-reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black">
              Menschen mit Haltung — für Projekte mit Bedeutung.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Wir bieten Ihnen ein Umfeld, in dem Sie Verantwortung übernehmen und mit
              erfahrenen Architekt:innen und Stadtplaner:innen an anspruchsvollen Vorhaben
              arbeiten. Unser Büro ist geprägt von flachen Hierarchien, offener
              Kommunikation und dem gemeinsamen Anspruch, Räume zu schaffen, die Bestand
              haben.
            </p>
            <p>
              Sie finden aktuell keine passende Stelle? Wir freuen uns über
              Initiativbewerbungen an{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="underline decoration-brand-accent underline-offset-4 hover:text-brand-accent"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-concrete py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Offene Stellen
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Aktuelle <span className="italic">Stellenanzeigen</span>
            </h2>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((j) => (
              <a
                key={j.title}
                href={j.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-brand-white p-8 transition-transform hover:-translate-y-1 hover:border-brand-accent"
                data-reveal
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-accent">
                    {j.location} · {j.start}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">{j.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
                    {j.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                  Stellenanzeige lesen
                  <Icon name="up-right-from-square" className="text-base transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl">
            Fragen zur <span className="italic">Bewerbung</span>?
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Icon name="envelope" className="text-base" /> {CONTACT.email}
          </a>
        </div>
      </section>
    </>
  );
}
