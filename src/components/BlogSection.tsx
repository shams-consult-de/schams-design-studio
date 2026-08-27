import { useState, useRef } from "react";
import { Language, Translations } from "../lib/i18n";
import { blogPosts, BlogPost } from "../data/blog";

interface BlogSectionProps {
  t: Translations["blog"];
  language: Language;
  onSelectPost: (post: BlogPost) => void;
  onViewAll: () => void;
}

export function BlogSection({
  t,
  language,
  onSelectPost,
  onViewAll,
}: BlogSectionProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Manual step navigation
  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Double list for continuous infinite loop marquee
  const loopedPosts = [...blogPosts, ...blogPosts];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#FFFFFF] text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* ================================================================= */}
        {/* SECTION HEADER & MOVEMENT CONTROLS                                */}
        {/* ================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626] block">
              {t.badge}
            </span>

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              {t.title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Action Bar: View All Link */}
          <div className="self-start md:self-auto">
            <button
              type="button"
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#DC2626] hover:text-[#B91C1C] transition-colors group cursor-pointer border border-[#DC2626]/30 hover:border-[#DC2626] px-4 py-2 rounded-xl"
            >
              <span>{t.viewAll}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CONTINUOUS AUTO-MOVING HORIZONTAL BLOG CAROUSEL                   */}
        {/* ================================================================= */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto no-scrollbar py-2"
          style={{ scrollBehavior: "smooth" }}
        >
          <div
            className={`flex gap-6 ${
              isPlaying ? "animate-marquee-smooth" : ""
            }`}
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          >
            {loopedPosts.map((post, idx) => (
              <article
                key={`${post.slug}-${idx}`}
                onClick={() => onSelectPost(post)}
                className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 bg-white rounded-2xl border border-zinc-200/90 hover:border-[#DC2626] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer card-lift select-none"
              >
                {/* Blog Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={post.image}
                    alt={post.imageAlt[language]}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-zinc-900 uppercase tracking-wider shadow-xs">
                      <span className="text-[#DC2626]">●</span>
                      <span>{post.category[language]}</span>
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-bold text-white font-mono">
                      {post.readTime[language]}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      {post.date[language]}
                    </span>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug line-clamp-2">
                      {post.title[language]}
                    </h3>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3">
                      {post.excerpt[language]}
                    </p>
                  </div>

                  {/* Bottom Trigger */}
                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-zinc-500">
                      {t.authorName}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                      <span>{t.readMore}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Subtle Carousel Controls Below Track */}
        <div className="flex items-center justify-center gap-2 !mt-3 pt-0">
          <button
            type="button"
            onClick={() => handleManualScroll("left")}
            title={t.prev}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Previous"
          >
            <span>‹</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? t.pauseScroll : t.startScroll}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <span className="text-[10px]">{isPlaying ? "⏸" : "▶"}</span>
          </button>

          <button
            type="button"
            onClick={() => handleManualScroll("right")}
            title={t.next}
            className="h-8 w-8 rounded-full bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-bold transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Next"
          >
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
