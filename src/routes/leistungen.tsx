import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { CONTACT } from "@/lib/contact";

const services = [
  {
    n: "01",
    title: "Architektur",
    body: "Ganzheitliche Planung von Wohn-, Kultur- und Gewerbebauten. Von der Vorentwurfsphase bis zur Objektüberwachung realisieren wir Projekte in allen Leistungsphasen der HOAI.",
  },
  {
    n: "02",
    title: "Stadtplanung & Städtebau",
    body: "Integrierte Stadtplanung, die soziale, wirtschaftliche und ökologische Anforderungen verbindet — von einzelnen Quartieren bis zur strategischen Planung ganzer Stadtregionen. Immer im rechtlichen Rahmen und mit Beteiligung der Akteure vor Ort.",
  },
  {
    n: "03",
    title: "Bauleitplanung",
    body: "Erstellung von Flächennutzungs- und Bebauungsplänen sowie städtebaulicher Verträge in enger Abstimmung mit Behörden und Öffentlichkeit.",
  },
  {
    n: "04",
    title: "Stadtentwicklungskonzepte",
    body: "Vorbereitende Untersuchungen, Rahmenplanungen und Stadtentwicklungskonzepte für wachsende und schrumpfende Kommunen.",
  },
  {
    n: "05",
    title: "Freiraumgestaltung",
    body: "Gestaltung städtischer Freiräume, Quartiersplätze und öffentlicher Räume mit Fokus auf Aufenthaltsqualität und Klimaanpassung.",
  },
  {
    n: "06",
    title: "Städtebauliche Beratung",
    body: "Strategische Begleitung von Bauherren, Investoren und Kommunen — inklusive Machbarkeitsstudien, Satzungen und Richtlinien.",
  },
  {
    n: "07",
    title: "Bauberatung & Planungsrecht",
    body: "Über 100 geprüfte Bauanträge in Dieburg, Weinstadt und Karlsruhe fließen in unsere rechtssichere Planungsarbeit ein — von Baugenehmigung bis Nutzungsänderung.",
  },
  {
    n: "08",
    title: "Öffentlichkeitsarbeit & Bürgerbeteiligung",
    body: "Moderation und Gestaltung von Beteiligungsprozessen — vom Bürgerworkshop bis zum Fachdialog mit Trägern öffentlicher Belange. Aktivierende Planung mit den Menschen vor Ort.",
  },
];

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Shams Consult" },
      {
        name: "description",
        content:
          "Leistungen von Shams Consult: Architektur, Stadtplanung & Städtebau, Bauleitplanung, Stadtentwicklungskonzepte, Bauberatung und Bürgerbeteiligung.",
      },
      { property: "og:title", content: "Leistungen — Shams Consult" },
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
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-brand-black/70">
            Shams Consult deckt das gesamte Leistungsspektrum von Architektur, Städtebau
            und Stadtplanung ab — interdisziplinär, praxisnah und mit über 15 Jahren
            Erfahrung im Bau- und Planungsrecht.
          </p>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-12">
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

      <section className="bg-brand-black py-20 text-brand-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Gemeinsam Stadt <span className="italic">weiterdenken</span>.
            </h2>
            <p className="mt-3 max-w-xl text-brand-white/70">
              Sie planen ein Entwicklungsprojekt oder benötigen Unterstützung bei einer
              kommunalen Planung? Wir begleiten Sie von der ersten Idee bis zur Umsetzung.
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
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Icon name="comment" className="text-base" /> Über WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
