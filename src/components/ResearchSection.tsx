import { Language } from "../lib/i18n";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";

interface ResearchSectionProps {
  language: Language;
  onNavigateResearch?: () => void;
}

export function ResearchSection({
  language,
  onNavigateResearch,
}: ResearchSectionProps) {
  const isDe = language === "de";

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateResearch) {
      onNavigateResearch();
    } else {
      window.location.href = "/research";
    }
  };

  return (
    <section id="research" className="py-12 lg:py-16 bg-[#090A0C] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#008dc7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#12141A] via-[#161822] to-[#12141A] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 group">
          
          {/* Left: Official University Logo with Ambient Backlight Glow & Credentials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
            {/* Luminous Logo Container with Continuous Breathing & Revolving Aura */}
            <div className="relative shrink-0 group/logo">
              {/* Dynamic Revolving Colored Aura Halo */}
              <div className="absolute -inset-3 bg-[conic-gradient(from_0deg,#008dc7,#92c4e0,#dc2626,#008dc7)] rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-aura-spin pointer-events-none" />
              {/* Soft Pulsing Ambient Diffuser */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#008dc7] via-[#38bdf8] to-[#dc2626] rounded-2xl blur-lg opacity-60 animate-aura-breathe pointer-events-none" />

              {/* Main Crisp White Container */}
              <div className="relative p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_0_30px_rgba(0,141,199,0.4)] border border-white/50 ring-1 ring-[#008dc7]/40 hover:scale-105 transition-transform duration-300">
                <FrankfurtUasLogo className="h-10 sm:h-12 w-auto" variant="dark" />
              </div>
            </div>

            <div className="space-y-1 text-left max-w-2xl">
              <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                {isDe
                  ? "Frankfurt UAS · Dozent für Städtebau & Architektur"
                  : "Frankfurt UAS · Lecturer in Urban Architecture"}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {isDe
                  ? "Wissenschaftliche Fundierung trifft praktische Bauerfahrung. Dipl.-Ing. Majeed Shams forscht und lehrt an der Frankfurt UAS zu Baukostensteuerung, Mängelprävention und Baurecht."
                  : "Scientific rigor meets real-world construction experience. Dipl.-Ing. Majeed Shams lectures at Frankfurt UAS and supervises research on cost control, defect prevention, and urban law."}
              </p>
            </div>
          </div>

          {/* Right: Clean Direct CTA to Secondary Research Landing Page */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end justify-center pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
            <a
              href="/research"
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-lg cursor-pointer text-center"
            >
              <span>{isDe ? "Forschungsarbeiten ansehen" : "Explore Research Papers"}</span>
              <span className="text-sm">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
