import { Language, Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface SiteVisitsMovingSectionProps {
  t: Translations["siteVisitsPage"];
  language?: Language;
  onNavigateSiteVisits?: () => void;
  onNavigate?: (path: string) => void;
}

export function SiteVisitsMovingSection({
  t,
  language = "de",
  onNavigateSiteVisits,
  onNavigate,
}: SiteVisitsMovingSectionProps) {
  const isDe = language === "de";
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
          <div>
            <h2 className="font-sans text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
              {t.title}
            </h2>
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
                  decoding="async"
                  width="320"
                  height="200"
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

      {/* 3 Audience Navigation Paths (Direct, Clean, Without Eyebrow/Header text) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-zinc-200/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Privatkunden */}
          <div
            onClick={() => (onNavigate ? onNavigate("/projects?category=residential") : undefined)}
            className="group relative bg-white hover:bg-zinc-50/80 border border-zinc-200 hover:border-[#DC2626] rounded-xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                  <Icon name="house" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#DC2626] transition-colors">
                  {isDe ? "Bauherren" : "Homeowners"}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-zinc-950 group-hover:text-[#DC2626] transition-colors">
                {isDe ? "Privatbau & Sanierung" : "Private Residential"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "Stadtvillen, Wohnhäuser, Aufstockung, Sanierung & anspruchsvolle Innenarchitektur."
                  : "Villas, modern family homes, extensions, and high-end residential interiors."}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-[#DC2626]">
              <span>{isDe ? "Wohnprojekte ansehen" : "Explore Residential"}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Gewerbe */}
          <div
            onClick={() => (onNavigate ? onNavigate("/projects?category=commercial") : undefined)}
            className="group relative bg-white hover:bg-zinc-50/80 border border-zinc-200 hover:border-[#DC2626] rounded-xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                  <Icon name="building" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#DC2626] transition-colors">
                  {isDe ? "Gewerbebau" : "Commercial"}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-zinc-950 group-hover:text-[#DC2626] transition-colors">
                {isDe ? "Gewerbe & Sonderbauten" : "Business & Commercial"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "Bürogebäude, Gewerbehallen, Baurecht (§ 34 BauGB), Nutzungsänderungen & B-Pläne."
                  : "Office spaces, commercial facilities, building law & master zoning plans (§ 34 BauGB)."}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-[#DC2626]">
              <span>{isDe ? "Gewerbeprojekte ansehen" : "Explore Commercial"}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: B2B-Partner & Bauträger */}
          <div
            onClick={() => (onNavigate ? onNavigate("/b2b") : undefined)}
            className="group relative bg-white hover:bg-zinc-50/80 border border-zinc-200 hover:border-[#DC2626] rounded-xl p-5 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                  <Icon name="handshake" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#DC2626] transition-colors">
                  {isDe ? "B2B-Partner" : "Partners & B2B"}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-zinc-950 group-hover:text-[#DC2626] transition-colors">
                {isDe ? "Bauträger & Fachplaner" : "Developers & Partners"}
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                {isDe
                  ? "HOAI LP 1–9, Ausführungs- & Detailplanung (LP 5), Ausschreibung & Bauüberwachung."
                  : "HOAI LP 1–9 execution planning, site supervision, tendering & legal certainty."}
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-zinc-900 group-hover:text-[#DC2626]">
              <span>{isDe ? "B2B-Partner Portal" : "B2B Partner Portal"}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
