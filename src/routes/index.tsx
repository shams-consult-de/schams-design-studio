import { createFileRoute, Link } from "@tanstack/react-router";
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

function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col justify-end px-6 pb-16 pt-16 lg:px-12 lg:pb-24 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-6xl leading-[0.9] text-brand-black md:text-8xl lg:text-[10vw]">
              Architektur für den <br />
              <span className="italic text-brand-accent">urbanen</span> Wandel.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:self-end lg:pb-4">
            <p className="max-w-sm text-lg font-light leading-relaxed text-brand-black/70">
              Wir gestalten Lebensräume, die Funktionalität mit ästhetischer
              Langlebigkeit verbinden. Schams Consult steht für visionäre
              Stadtplanung und präzise Architektur.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden">
          <img
            src={heroFacade}
            alt="Detailaufnahme einer Betonfassade mit klaren geometrischen Schatten"
            width={1920}
            height={960}
            fetchPriority="high"
            decoding="async"
            className="aspect-[21/9] w-full object-cover outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
        <div className="mb-20 flex flex-col justify-between border-t border-border pt-12 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl lg:text-5xl">Ausgewählte Projekte</h2>
          <Link
            to="/projekte"
            className="mt-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-brand-accent md:mt-0"
          >
            Alle Projekte ansehen →
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {featured.map((p, i) => (
            <article key={p.slug} className={i === 1 ? "group md:mt-24" : "group"}>
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={1000}
                  height={1250}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <span className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                    {p.year} / {p.location}
                  </span>
                </div>
                <p className="mt-2 text-sm text-brand-black/60">{p.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="bg-brand-black py-32 text-brand-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-3">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
                01 / Strategie
              </span>
              <h3 className="mt-6 font-serif text-3xl">Nachhaltige Stadtentwicklung</h3>
              <p className="mt-6 font-light leading-relaxed text-brand-white/60">
                Wir planen für die Zukunft. Unsere Konzepte berücksichtigen ökologische
                Kreisläufe und soziale Inklusion gleichermaßen.
              </p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
                02 / Gestaltung
              </span>
              <h3 className="mt-6 font-serif text-3xl">Architektonische Exzellenz</h3>
              <p className="mt-6 font-light leading-relaxed text-brand-white/60">
                Von der ersten Skizze bis zur Bauleitung: Wir legen Wert auf
                Materialität, Licht und präzise Detailplanung.
              </p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
                03 / Dialog
              </span>
              <h3 className="mt-6 font-serif text-3xl">Partizipative Planung</h3>
              <p className="mt-6 font-light leading-relaxed text-brand-white/60">
                Gute Architektur entsteht im Dialog. Wir moderieren Prozesse zwischen
                Bauherren, Behörden und Bürgern.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
