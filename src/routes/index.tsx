import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Compass, Building2, Users, PenTool, Ruler, Layers, MessageSquare } from "lucide-react";
import heroFacade from "@/assets/hero-facade.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Schams Consult — Architektur & Stadtplanung" },
      {
        name: "description",
        content:
          "Schams Consult ist ein Büro für Architektur und Stadtplanung. Wir gestalten Lebensräume, die Funktionalität mit ästhetischer Langlebigkeit verbinden.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { Icon: Building2, title: "Architektur", price: "LP 1–9", body: "Ganzheitliche Planung von Wohn-, Kultur- und Gewerbebauten in allen HOAI-Leistungsphasen." },
  { Icon: Compass, title: "Stadtplanung", price: "Konzept", body: "Nachhaltige Quartierskonzepte, städtebauliche Rahmenpläne und Freiraumstrategien." },
  { Icon: PenTool, title: "Beratung", price: "Individuell", body: "Strategische Begleitung von Bauherren, Investoren und Kommunen." },
  { Icon: Ruler, title: "Machbarkeitsstudien", price: "Analyse", body: "Standorte, Nutzungsszenarien und wirtschaftliche Potenziale fundiert bewerten." },
  { Icon: Layers, title: "Bauleitplanung", price: "F- & B-Plan", body: "Flächennutzungs- und Bebauungspläne in enger Abstimmung mit Behörden." },
  { Icon: MessageSquare, title: "Partizipation", price: "Moderation", body: "Beteiligungsprozesse — vom Bürgerworkshop bis zum Fachdialog." },
];

function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero — full-bleed image with overlay */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <img
          src={heroFacade}
          alt="Detailaufnahme einer Betonfassade mit klaren geometrischen Schatten"
          width={1920}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-white/85 via-brand-white/50 to-transparent"
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Architektur · Stadtplanung · Beratung
            </p>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-brand-black md:text-7xl lg:text-[5.5rem]">
              Ihr Raum — <br />
              <span className="font-serif italic font-normal">unsere Vision.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-brand-black/75">
              Schams Consult gestaltet Lebensräume, die Funktionalität mit ästhetischer
              Langlebigkeit verbinden — vom Einzelbau bis zum Quartier.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-brand-white shadow-lg shadow-brand-accent/25 transition-transform hover:-translate-y-0.5"
              >
                Projekt anfragen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                to="/projekte"
                className="inline-flex items-center gap-2 rounded-full border border-brand-black/20 bg-brand-white/70 px-7 py-4 text-base font-medium text-brand-black backdrop-blur transition-colors hover:border-brand-black"
              >
                Projekte ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <header className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Leistungen
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Was wir für Sie <span className="italic">planen</span>.
            </h2>
          </div>
          <p className="max-w-md text-brand-black/70">
            Sechs Disziplinen, die einander ergänzen — interdisziplinär, präzise
            und mit Respekt vor dem Kontext.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, price, body }) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-concrete/40 p-8 transition-all hover:-translate-y-1 hover:border-brand-accent/50 hover:bg-brand-white hover:shadow-xl hover:shadow-brand-black/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-brand-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {price}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-black/70">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Gallery — Projects */}
      <section className="bg-concrete/60 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Portfolio
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Ausgewählte <span className="italic">Projekte</span>.
              </h2>
            </div>
            <Link
              to="/projekte"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-black transition-colors hover:text-brand-accent"
            >
              Alle Projekte <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </header>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {featured.map((p) => (
              <article key={p.slug} className="group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-brand-black">{p.title}</h3>
                <p className="text-xs text-brand-black/60">{p.location} · {p.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns / Team-Werte */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
              Über uns
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Ein Büro. <br />
              <span className="italic">Drei Prinzipien.</span>
            </h2>
            <p className="mt-6 max-w-md text-brand-black/70">
              Schams Consult vereint Architektur, Städtebau und Beratung unter einem
              Dach. Wir arbeiten interdisziplinär und im Dialog mit unseren Partnern.
            </p>
            <Link
              to="/buero"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-black px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-accent"
            >
              Mehr über das Büro
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 lg:col-span-7 md:grid-cols-3">
            {[
              { Icon: Compass, title: "Strategie", body: "Nachhaltige Stadtentwicklung mit ökologischen Kreisläufen und sozialer Inklusion." },
              { Icon: PenTool, title: "Gestaltung", body: "Materialität, Licht und präzise Detailplanung — von der Skizze bis zur Bauleitung." },
              { Icon: Users, title: "Dialog", body: "Partizipative Planung mit Bauherren, Behörden und Bürgern auf Augenhöhe." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col rounded-2xl bg-brand-black p-8 text-brand-white">
                <Icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standort & Öffnungszeiten */}
      <section className="bg-brand-black py-24 text-brand-white lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">
                Standort
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Besuchen Sie <span className="italic">uns</span>.
              </h2>
              <address className="mt-8 flex items-start gap-4 not-italic">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                <div className="leading-relaxed">
                  <strong className="block font-semibold">Schams Consult</strong>
                  Architektur & Stadtplanung<br />
                  Deutschland
                </div>
              </address>
              <div className="mt-10">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-white/70">
                  Sprechzeiten
                </h3>
              </div>
              <dl className="divide-y divide-brand-white/10 rounded-2xl border border-brand-white/10">
                {[
                  ["Montag – Freitag", "09:00 – 18:00"],
                  ["Samstag", "Nach Vereinbarung"],
                  ["Sonntag", "Geschlossen"],
                ].map(([day, hrs]) => (
                  <div key={day} className="flex items-center justify-between px-6 py-5">
                    <dt className="font-medium">{day}</dt>
                    <dd className="text-brand-white/70">{hrs}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
