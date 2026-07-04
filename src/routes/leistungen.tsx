import { createFileRoute } from "@tanstack/react-router";

const services = [
  {
    n: "01",
    title: "Architektur",
    body: "Ganzheitliche Planung von Wohn-, Kultur- und Gewerbebauten. Von der Vorentwurfsphase bis zur Objektüberwachung realisieren wir Projekte in allen Leistungsphasen der HOAI.",
  },
  {
    n: "02",
    title: "Stadtplanung",
    body: "Entwicklung nachhaltiger Quartierskonzepte, städtebaulicher Rahmenpläne und Freiraumstrategien für wachsende und schrumpfende Kommunen.",
  },
  {
    n: "03",
    title: "Beratung",
    body: "Strategische Begleitung von Bauherren, Investoren und Kommunen in allen Phasen der Projektentwicklung und Genehmigung.",
  },
  {
    n: "04",
    title: "Machbarkeitsstudien",
    body: "Detaillierte Analyse von Standorten, Nutzungsszenarien und wirtschaftlichen Potenzialen zur fundierten Entscheidungsgrundlage.",
  },
  {
    n: "05",
    title: "Bauleitplanung",
    body: "Erstellung von Flächennutzungs- und Bebauungsplänen sowie städtebaulicher Verträge in enger Abstimmung mit Behörden und Öffentlichkeit.",
  },
  {
    n: "06",
    title: "Partizipation",
    body: "Moderation und Gestaltung von Beteiligungsprozessen — vom Bürgerworkshop bis zum Fachdialog mit Trägern öffentlicher Belange.",
  },
];

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Schams Consult" },
      {
        name: "description",
        content:
          "Leistungen von Schams Consult: Architektur, Stadtplanung, Beratung, Machbarkeitsstudien, Bauleitplanung und Partizipation.",
      },
      { property: "og:title", content: "Leistungen — Schams Consult" },
      { property: "og:url", content: "/leistungen" },
    ],
    links: [{ rel: "canonical", href: "/leistungen" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32">
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Expertise
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Unsere <span className="italic">Leistungen</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-brand-black/70">
            Interdisziplinär, präzise und mit Respekt vor dem Kontext — sechs
            Disziplinen, die einander ergänzen.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-12 lg:pb-32">
        <div className="grid gap-16 md:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
          {services.map((s) => (
            <div key={s.n} className="border-t border-border pt-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
                {s.n}
              </span>
              <h2 className="mt-4 font-serif text-3xl">{s.title}</h2>
              <p className="mt-4 max-w-md text-base font-light leading-relaxed text-brand-black/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
