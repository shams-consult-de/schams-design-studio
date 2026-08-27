import { BlogPost, blogPosts } from "../data/blog";
import { Language, Translations } from "../lib/i18n";

interface BlogDetailProps {
  post: BlogPost;
  t: Translations["blog"];
  language: Language;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
  onBookConsultation: () => void;
}

export function BlogDetail({
  post,
  t,
  language,
  onBack,
  onSelectPost,
  onBookConsultation,
}: BlogDetailProps) {
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Clean markdown-like paragraph / heading renderer
  const renderBody = (text: string) => {
    const sections = text.split("\n\n");
    return sections.map((section, idx) => {
      const trimmed = section.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={idx}
            className="font-sans text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-10 mb-4 tracking-tight leading-snug"
          >
            {trimmed.replace(/^##\s+/, "")}
          </h2>
        );
      }

      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={idx}
            className="font-sans text-xl sm:text-2xl font-bold text-zinc-900 mt-8 mb-3 tracking-tight"
          >
            {trimmed.replace(/^###\s+/, "")}
          </h3>
        );
      }

      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").map((line) => line.replace(/^-\s+/, "").trim());
        return (
          <ul key={idx} className="my-5 space-y-2.5 pl-5 list-disc text-zinc-700">
            {items.map((item, itemIdx) => (
              <li key={itemIdx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      // Check if it's bold lead text
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return (
          <p
            key={idx}
            className="my-5 text-lg sm:text-xl font-medium text-zinc-900 leading-relaxed border-l-2 border-[#DC2626] pl-4 italic"
          >
            {trimmed.slice(2, -2)}
          </p>
        );
      }

      return (
        <p key={idx} className="my-5 text-base sm:text-lg text-zinc-700 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <article className="min-h-screen bg-white text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back Navigation (Fitts's Law compliant) */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{t.backToBlog}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            {post.category[language]} · {post.readTime[language]}
          </span>
        </div>

        {/* Header Information */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {post.category[language]}
            </span>
            <span className="text-xs text-zinc-400 font-mono">·</span>
            <time dateTime={post.isoDate} className="text-xs font-mono text-zinc-500 font-medium">
              {post.date[language]}
            </time>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
            {post.title[language]}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 font-light leading-relaxed pt-2">
            {post.excerpt[language]}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100 border border-zinc-200">
              <img
                src="/images/team/Majeed-Shams.jpg"
                alt="Dipl.-Ing. Majeed Shams"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-900 block">
                {t.authorName}
              </span>
              <span className="text-[11px] text-zinc-500 block">
                {t.authorRole}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-900 shadow-sm aspect-[16/9]">
          <img
            src={post.image}
            alt={post.imageAlt[language]}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Main Article Content */}
        <div className="max-w-3xl mx-auto pt-4 pb-10 border-b border-zinc-200">
          {renderBody(post.body[language])}
        </div>

        {/* Bottom Thumb-Friendly Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-zinc-50 rounded-xl border border-zinc-200">
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-800 bg-white border border-zinc-300 rounded-lg hover:border-[#DC2626] hover:text-[#DC2626] transition-colors cursor-pointer shadow-sm"
          >
            <span>←</span>
            <span>{t.viewAll}</span>
          </button>

          <button
            type="button"
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] rounded-lg hover:bg-[#B91C1C] transition-colors cursor-pointer shadow-sm"
          >
            <span>{t.ctaButton}</span>
            <span>→</span>
          </button>
        </div>

        {/* Related Articles Section */}
        {others.length > 0 && (
          <section className="pt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626] block">
                  {t.moreArticles}
                </span>
                <h2 className="font-sans text-2xl font-bold text-zinc-950 mt-1">
                  {t.relatedTopics}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => onSelectPost(item)}
                  className="bg-white border border-zinc-200 rounded-lg overflow-hidden flex flex-col justify-between text-left hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.imageAlt[language]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-[#DC2626] uppercase tracking-wider block">
                        {item.category[language]}
                      </span>
                      <h3 className="font-sans text-sm font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                        {item.title[language]}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                      <span>{item.date[language]}</span>
                      <span className="font-sans font-bold text-zinc-900 group-hover:text-[#DC2626]">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
