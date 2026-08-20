import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost, blogPosts, toIsoDate } from "@/lib/blog";
import { BlogComments } from "@/components/blog-comments";
import { Icon } from "@/components/icon";
import { absUrl } from "@/lib/site";
import { LOGO_URL } from "@/lib/contact";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Beitrag nicht gefunden — Shams Consult" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = absUrl(`/blog/${post.slug}`);
    const image = absUrl(post.image);
    return {
      meta: [
        { title: `${post.title} — Shams Consult` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { property: "article:section", content: post.category },
        { property: "article:published_time", content: post.date },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: [image],
            datePublished: toIsoDate(post.date),
            dateModified: toIsoDate(post.date),
            articleSection: post.category,
            inLanguage: "de-DE",
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@type": "Organization", name: "Shams Consult" },
            publisher: {
              "@type": "Organization",
              name: "Shams Consult",
              logo: { "@type": "ImageObject", url: LOGO_URL },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: absUrl("/") },
              { "@type": "ListItem", position: 2, name: "Blog", item: absUrl("/blog") },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-3xl">Beitrag konnte nicht geladen werden</h1>
      <p className="mt-3 text-sm text-brand-black/70">{error.message}</p>
      <Link to="/blog" className="mt-6 inline-block text-brand-accent underline">
        Zurück zum Blog
      </Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl">Beitrag nicht gefunden</h1>
      <p className="mt-3 text-sm text-brand-black/70">
        Der gewünschte Blogbeitrag existiert nicht oder wurde verschoben.
      </p>
      <Link to="/blog" className="mt-6 inline-block text-brand-accent underline">
        Alle Beiträge ansehen
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="mx-auto max-w-3xl px-6 pt-24 lg:pt-32" data-reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-accent hover:underline"
          >
            <Icon name="arrow-left" className="text-xs" />
            Zurück zum Blog
          </Link>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-brand-accent">
            {post.category} · <time dateTime={toIsoDate(post.date)}>{post.date}</time>
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-brand-black/70">
            {post.excerpt}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-5xl px-6 lg:px-12" data-reveal>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={post.image}
              alt={post.imageAlt}
              loading="eager"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-3xl px-6 pb-16 text-[17px] leading-relaxed text-brand-black/85 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-brand-black [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-serif [&_h3]:text-2xl [&_p]:my-5 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1.5 [&_strong]:font-semibold [&_strong]:text-brand-black [&_a]:text-brand-accent [&_a]:underline"
          data-reveal
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </article>

      <BlogComments postSlug={post.slug} />

      {others.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12" data-reveal>
          <div className="border-t border-border pt-12">
            <h2 className="font-serif text-3xl">Weitere Beiträge</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col"
                >
                  <div className="overflow-hidden rounded-xl border border-border image-zoom">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-brand-accent">
                    {p.category} · <time dateTime={toIsoDate(p.date)}>{p.date}</time>
                  </p>
                  <h3 className="mt-2 font-serif text-lg leading-snug transition-colors group-hover:text-brand-accent">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
