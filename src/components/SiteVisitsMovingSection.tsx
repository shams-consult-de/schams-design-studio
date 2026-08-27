import { Translations } from "../lib/i18n";

interface SiteVisitsMovingSectionProps {
  t: Translations["siteVisitsPage"];
  onNavigateSiteVisits?: () => void;
}

export function SiteVisitsMovingSection({
  t,
  onNavigateSiteVisits,
}: SiteVisitsMovingSectionProps) {
  const handleAlbumClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateSiteVisits) {
      onNavigateSiteVisits();
    } else {
      window.location.href = "/site-visits";
    }
  };

  // Double items for infinite continuous seamless loop
  const loopedItems = [...t.items, ...t.items, ...t.items];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FA] text-zinc-900 border-b border-zinc-200 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
              <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#DC2626]">
                {t.badge}
              </h2>
            </div>
            <p className="font-sans text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
              {t.title}
            </p>
          </div>

          <a
            href="/site-visits"
            onClick={handleAlbumClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-[#DC2626] transition-colors cursor-pointer group shrink-0"
          >
            <span>{t.viewAlbum}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Horizontal Continuous Auto-Moving Track with Soft Edge Fades */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10" />

        <div className="animate-marquee-smooth flex items-center gap-6 sm:gap-8 py-2">
          {loopedItems.map((item, idx) => (
            <a
              key={`${item.id}-${idx}`}
              href="/site-visits"
              onClick={handleAlbumClick}
              className="flex flex-col w-72 sm:w-80 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-400 overflow-hidden shrink-0 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Tag & Phase Badge */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-mono font-medium">
                    {item.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-red-600/90 backdrop-blur-md text-white text-[10px] font-mono font-bold">
                    {item.phase}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 space-y-1 bg-white">
                <h3 className="font-sans text-sm font-bold text-zinc-950 group-hover:text-[#DC2626] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-500 font-light line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
