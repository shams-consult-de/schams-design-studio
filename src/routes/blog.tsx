import { createFileRoute } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { blogPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Shams Consult" },
      {
        name: "description",
        content:
          "Fachbeiträge zu nachhaltigem Bauen, Design und Ästhetik sowie zum Qualitätssiegel Nachhaltiges Bauen (QNG) aus der Praxis von Shams Consult.",
      },
      { property: "og:title", content: "Blog — Shams Consult" },
      { property: "og:description", content: "Nachhaltiges Bauen, Design und Ästhetik — aus der Praxis." },
      {
        property: "og:image",
        content: blogPosts[0]?.image,
      },
      { property: "og:url", content: "https://shams-consult.de/blog" },
    ],
    links: [{ rel: "canonical", href: "https://shams-consult.de/blog" }],
  }),
  component: BlogPage,
});

const categories = [
  "Alle",
  "Nachhaltiges Bauen",
  "Design und Ästhetik",
  "Qualitätssiegel Nachhaltiges Bauen (QNG)",
] as const;

function BlogPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-24 lg:px-12 lg:pt-32" data-reveal>
        <header className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
            Blog
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            Gedanken zu <span className="italic">Architektur</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-brand-black/70">
            Beobachtungen, Prinzipien und Erfahrungen aus unserer täglichen Arbeit — zu
            nachhaltigem Bauen, Design und Ästhetik sowie dem Qualitätssiegel Nachhaltiges
            Bauen (QNG).
          </p>
        </header>

        <ul className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest text-brand-black/70"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {featured && (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12" data-reveal>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-10 rounded-2xl border border-border bg-brand-white p-6 lg:grid-cols-12 lg:p-10"
          >
            <div className="lg:col-span-7 overflow-hidden rounded-xl image-zoom">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-brand-accent">
                {featured.category} · {featured.date}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-brand-black/70 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                Mehr lesen
                <Icon name="up-right-from-square" className="text-base transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug} data-reveal>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col"
              >
                <div className="overflow-hidden rounded-xl border border-border image-zoom">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-brand-accent">
                  {p.category} · {p.date}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                  Mehr lesen
                  <Icon name="up-right-from-square" className="text-base transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
