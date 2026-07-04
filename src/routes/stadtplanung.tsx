import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/stadtplanung")({
  head: () => ({
    meta: [
      { title: "Stadtplanung & Städtebau — Shams Consult" },
      {
        name: "description",
        content:
          "Integrierte Stadtplanung und Städtebau: Stadtentwicklungskonzepte, Rahmenplanung, Bürgerbeteiligung und städtebauliche Beratung.",
      },
      { property: "og:title", content: "Stadtplanung & Städtebau — Shams Consult" },
      {
        property: "og:description",
        content: "Wir gestalten zukunftsfähige Räume — von einzelnen Quartieren bis zur Stadtregion.",
      },
      {
        property: "og:image",
        content:
          "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sc1699083d70b354e/image/ia59d02cfc9ed73b5/version/1592996685/image.jpg",
      },
      { property: "og:url", content: "/stadtplanung" },
    ],
    links: [{ rel: "canonical", href: "/stadtplanung" }],
  }),
  component: StadtplanungPage,
});

const leistungen = [
  "Erstellung von Stadtentwicklungskonzepten",
  "Vorbereitende Untersuchungen und Rahmenplanungen",
  "Gestaltung von städtischen Freiräumen",
  "Städtebauliche Beratung",
  "Satzungen und Richtlinien",
  "Öffentlichkeitsarbeit",
  "Bürgerbeteiligung und aktivierende Planungen",
];

function StadtplanungPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Stadtplanung & Städtebau
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Wir gestalten <span className="italic">zukunftsfähige</span> Räume
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-brand-black/80">
            Nachhaltige Entwicklung für Städte und Quartiere.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24" data-reveal>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-black">
              Soziale, wirtschaftliche und ökologische Anforderungen integrieren.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-brand-black/75 lg:col-span-6 lg:col-start-7">
            <p>
              Shams Consult steht für integrierte Stadtplanung, die soziale, wirtschaftliche
              und ökologische Anforderungen miteinander verbindet. Unsere Arbeit reicht von
              der Entwicklung einzelner Quartiere bis hin zur strategischen Planung ganzer
              Stadtregionen — immer im rechtlichen Rahmen und mit Beteiligung der Akteure
              vor Ort.
            </p>
            <p>
              Unser Büro deckt das gesamte Leistungsspektrum des Städtebaus und der
              Stadtplanung ab. Unsere Planung basiert auf umfassender Praxiserfahrung und
              laufender Forschung — z. B. im Bereich Mobilitätswende, Defektmanagement und
              Baukosteneffizienz.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Leistungen
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Folgende Leistungen bieten wir <span className="italic">an</span>
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
        <figure className="overflow-hidden rounded-2xl border border-border image-zoom">
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x800:format=jpg/path/sc1699083d70b354e/image/ia59d02cfc9ed73b5/version/1592996685/image.jpg"
            alt="Städtebauliche Machbarkeitsstudien Reutlingen — Analyse und Konzeption"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="p-4 text-sm text-brand-black/70">
            Städtebauliche Machbarkeitsstudien Reutlingen — Analyse und Konzeption
          </figcaption>
        </figure>
      </section>

      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Gemeinsam Stadt <span className="italic">weiterdenken</span>.
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Telefon: {CONTACT.phoneRoedermark} · E-Mail: {CONTACT.email}
            </p>
          </div>
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
              to="/forschung"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:border-brand-accent hover:text-brand-accent"
            >
              Zur Forschung <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
