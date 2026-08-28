import { Language, Translations } from "../lib/i18n";
import { partnersData } from "../lib/partners";

interface ClientsMovingSectionProps {
  t: Translations["clients"];
  language?: Language;
  onNavigateClients?: () => void;
}

export function ClientsMovingSection({
  t,
  language = "de",
  onNavigateClients,
}: ClientsMovingSectionProps) {
  const handleClientsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateClients) {
      onNavigateClients();
    } else {
      window.location.href = "/clients";
    }
  };

  // Double the list for infinite continuous loop
  const loopedPartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="py-10 sm:py-12 bg-[#F8F9FA] text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-zinc-900">
              {t.badge}
            </h2>
          </div>

          <a
            href="/clients"
            onClick={handleClientsClick}
            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span>{t.viewAll}</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Continuous Auto-Moving Logos Track with Soft Fade Gradients */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div className="animate-marquee-smooth flex items-center gap-5 sm:gap-7 py-2">
          {loopedPartners.map((partner, idx) => (
            <a
              key={`${partner.id}-${idx}`}
              href="/clients"
              onClick={handleClientsClick}
              title={`${partner.name} – ${partner.tagline[language]}`}
              className="flex items-center justify-center h-16 sm:h-20 w-44 sm:w-52 px-5 py-3 rounded-xl bg-white border border-zinc-200/90 hover:border-zinc-400 transition-all duration-300 shrink-0 shadow-xs hover:shadow-md group cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 sm:max-h-12 w-auto max-w-[140px] sm:max-w-[160px] object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
