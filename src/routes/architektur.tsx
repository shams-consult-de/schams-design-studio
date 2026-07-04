import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/architektur")({
  head: () => ({
    meta: [
      { title: "Architektur — Shams Consult" },
      {
        name: "description",
        content:
          "Architektur mit Weitblick: Planung für Lebensqualität und Funktion. Entwurf, Genehmigung und Realisierung — vom Wohnbau bis zum Sonderbau.",
      },
      { property: "og:title", content: "Architektur — Shams Consult" },
      { property: "og:description", content: "Ganzheitlich gedachte Lösungen — vom Entwurf bis zur Realisierung." },
      {
        property: "og:image",
        content:
          "https://shams-consult.de/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg",
      },
      { property: "og:url", content: "https://shams-consult.de/architektur" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/architektur" }],
  }),
  component: ArchitekturPage,
});

const leistungen = [
  "Entwurfsplanung und Genehmigungsplanung",
  "Wohn- und Geschäftsbauten für private und institutionelle Bauherren",
  "Öffentliche Gebäude & Sonderbauten",
  "Revitalisierung, Umbau und Nachverdichtung bestehender Strukturen",
  "Energieeffizientes und nachhaltiges Bauen",
];

function ArchitekturPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Architektur
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Architektur mit <span className="italic">Weitblick</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Planung für Lebensqualität und Funktion.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24" data-reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black">
              Unser Anspruch: Gestaltung, die Bestand hat.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Bei Shams Consult steht Architektur nicht nur für gutes Design, sondern für
              ganzheitlich gedachte Lösungen, die sich an den Bedürfnissen von Nutzern,
              Städten und Investoren orientieren. Wir entwickeln wirtschaftlich tragfähige,
              rechtssichere und gestalterisch hochwertige Gebäude — vom Entwurf bis zur
              Realisierung.
            </p>
            <p>
              Mit über 15 Jahren Erfahrung und fundiertem Wissen im Bau- und Planungsrecht
              begleiten wir Bauvorhaben in jeder Leistungsphase — kompetent, kreativ und
              zuverlässig.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Leistungen
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Unsere Leistungen im Bereich <span className="italic">Architektur</span>
            </h2>
          </div>
          <ul className="space-y-3 lg:col-span-6 lg:col-start-7">
            {leistungen.map((l) => (
              <li key={l} className="flex gap-3 border-b border-border pb-3 text-brand-black/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12" data-reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border image-zoom">
            <img
              src="/images/architektenleistung-leistungsphasen-1-9-hoai-.jpg"
              alt="Architektenleistung: Leistungsphasen 1–9 HOAI"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-brand-black/70">
              Neubau Doppelhaushälfte mit Carports, Eppertshausen — LPH 1–9 HOAI
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border image-zoom">
            <img
              src="/images/architektenleistung-leistungsphasen-1-8-hoai-.jpg"
              alt="Architektenleistung: Leistungsphasen 1–8 HOAI"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="p-4 text-sm text-brand-black/70">
              Luxuriöses Zweifamilienhaus, Rödermark 2021–2023 — LPH 1–8 HOAI
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Sie planen ein <span className="italic">Bauvorhaben</span>?
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Tel.: {CONTACT.phoneRoedermark} · E-Mail: {CONTACT.email}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Icon name="calendar-check" className="text-base" /> Erstgespräch buchen
            </a>
            <Link
              to="/projekte"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-brand-accent hover:text-brand-accent"
            >
              Projekte ansehen <Icon name="arrow-right" className="text-base" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
