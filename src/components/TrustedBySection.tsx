import { FrankfurtUasLogo } from "./FrankfurtUasLogo";
import { Translations } from "../lib/i18n";

interface TrustedBySectionProps {
  t: Translations["trustedBy"];
}

export function TrustedBySection({ t }: TrustedBySectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-white text-zinc-900 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
            {t.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left/Center: 3 Quote Blocks */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.quotes.map((q, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-2xl font-serif text-[#DC2626] leading-none block font-black">
                  ““
                </span>
                <p className="text-xs text-zinc-700 font-light leading-relaxed">
                  {q.quote}
                </p>
                <span className="text-[11px] font-semibold text-[#DC2626] block pt-1">
                  – {q.author}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Official Municipal & University Emblems Grid */}
          <div className="lg:col-span-4 pt-6 lg:pt-0 lg:border-l lg:border-zinc-200 lg:pl-8">
            <div className="grid grid-cols-2 gap-4 items-center justify-items-center">
              {/* Stadt Offenbach */}
              <div className="p-2.5 border border-zinc-300 rounded-sm w-full text-center flex flex-col items-center justify-center h-16 bg-[#fafafa]">
                <span className="font-serif text-[11px] font-extrabold tracking-wider text-zinc-900 leading-none">
                  STADT
                </span>
                <span className="font-serif text-[10px] font-bold text-zinc-800 tracking-wider">
                  OFFENBACH
                </span>
                <span className="text-[7px] tracking-widest text-zinc-500 mt-0.5">AM MAIN</span>
              </div>

              {/* Wiesbaden */}
              <div className="p-2.5 border border-zinc-300 rounded-sm w-full text-center flex flex-col items-center justify-center h-16 bg-[#fafafa]">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-[9px] text-zinc-600">⚜</span>
                  <span className="font-serif text-xs font-bold text-zinc-900 tracking-wide">
                    WIESBADEN
                  </span>
                  <span className="text-[9px] text-zinc-600">⚜</span>
                </div>
                <span className="text-[7px] text-zinc-500 uppercase tracking-wider">Landeshauptstadt</span>
              </div>

              {/* Darmstadt */}
              <div className="p-2.5 border border-zinc-300 rounded-sm w-full text-center flex items-center justify-center gap-1.5 h-16 bg-[#fafafa]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-700">
                  <path d="M10 2L3 7V17H17V7L10 2Z" />
                </svg>
                <span className="font-serif text-xs font-bold text-zinc-900 tracking-wider">
                  Darmstadt
                </span>
              </div>

              {/* Frankfurt UAS */}
              <div className="p-2 border border-zinc-300 rounded-sm w-full flex items-center justify-center h-16 bg-[#fafafa]">
                <FrankfurtUasLogo className="h-7 w-auto scale-90" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
