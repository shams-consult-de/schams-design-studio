import { useState, useMemo } from "react";
import { blogPosts, BlogPost } from "../data/blog";
import { Language, Translations } from "../lib/i18n";

interface BlogPageProps {
  t: Translations["blog"];
  language: Language;
  onSelectPost: (post: BlogPost) => void;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function BlogPage({
  t,
  language,
  onSelectPost,
  onBack,
  onBookConsultation,
}: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((p) => p.category[language])));
    return ["ALL", ...unique];
  }, [language]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchCategory =
        activeCategory === "ALL" || post.category[language] === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        post.title[language].toLowerCase().includes(q) ||
        post.excerpt[language].toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Back Nav */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{t.backToHome}</span>
          </button>

          <span className="text-xs font-mono text-zinc-400">
            {blogPosts.length} {t.availableArticles}
          </span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626]">
              {t.badge}
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.12]">
            {t.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Controls (Science-backed UX: clean pills with search input) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-b border-zinc-200 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {cat === "ALL" ? t.allTopics : cat}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-3 pr-8 py-2 text-xs rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:border-[#DC2626] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Verified Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              onClick={() => onSelectPost(post)}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group cursor-pointer hover:border-zinc-300"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <img
                  src={post.image}
                  alt={post.imageAlt[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-[#DC2626] uppercase tracking-wider">
                      {post.category[language]}
                    </span>
                    <span className="text-zinc-400">{post.readTime[language]}</span>
                  </div>

                  <h2 className="font-sans text-lg font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug">
                    {post.title[language]}
                  </h2>

                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                    {post.excerpt[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {post.date[language]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-900 group-hover:text-[#DC2626] transition-colors">
                    <span>{t.readMore}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredPosts.length === 0 && (
          <div className="py-16 text-center space-y-3">
            <p className="text-sm font-semibold text-zinc-500">
              {t.noResults}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("ALL");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-[#DC2626] underline hover:no-underline cursor-pointer"
            >
              {t.resetFilters}
            </button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="font-sans text-xl sm:text-2xl font-bold">
              {t.ctaHeading}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              {t.ctaSubheading}
            </p>
          </div>

          <button
            type="button"
            onClick={onBookConsultation}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#DC2626] rounded-lg hover:bg-[#B91C1C] transition-colors cursor-pointer whitespace-nowrap shadow-md"
          >
            {t.ctaButton} →
          </button>
        </div>
      </div>
    </div>
  );
}
