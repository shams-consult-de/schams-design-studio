import { createFileRoute } from "@tanstack/react-router";
import { projects, galleryImages } from "@/lib/projects";

export const Route = createFileRoute("/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte — Schams Consult" },
      {
        name: "description",
        content:
          "Ausgewählte Projekte von Schams Consult: Wohnungsbau, Stadtplanung, Kultur- und Bildungsbauten in Deutschland.",
      },
      { property: "og:title", content: "Projekte — Schams Consult" },
      { property: "og:url", content: "/projekte" },
    ],
    links: [{ rel: "canonical", href: "/projekte" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
      <header className="border-t border-border pt-12">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Portfolio
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
          Ausgewählte <span className="italic">Projekte</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-brand-black/70">
          Ein Ausschnitt aus unserer Arbeit — Wohnbauten, öffentliche Räume, Kultur-
          und Bildungsbauten, die den Anspruch teilen, ihren Ort präziser zu machen.
        </p>
      </header>

      <div className="mt-24 grid gap-x-12 gap-y-24 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.slug} className={i % 2 === 1 ? "group md:mt-24" : "group"}>
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
                <h2 className="font-serif text-2xl">{p.title}</h2>
                <span className="shrink-0 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  {p.year} / {p.location}
                </span>
              </div>
              <p className="mt-2 text-sm text-brand-black/60">{p.category}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-black/70">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-32 border-t border-border pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Galerie
        </p>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl">
          Pläne, Baustellen & <span className="italic">Details</span>
        </h2>
        <p className="mt-4 max-w-xl text-brand-black/70">
          Weitere Einblicke aus laufenden und realisierten Projekten — von
          Ausführungsplänen über Bebauungspläne bis zur Baustellendokumentation.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {galleryImages.map((g) => (
            <figure key={g.url} className="group overflow-hidden">
              <img
                src={g.url}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <figcaption className="mt-2 text-[11px] leading-snug text-brand-black/60">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
