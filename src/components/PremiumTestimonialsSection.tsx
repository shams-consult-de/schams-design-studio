import { Translations } from "../lib/i18n";

interface PremiumTestimonialsProps {
  t: Translations["premiumTestimonials"];
  onSelectFeaturedCaseStudy: () => void;
  onSelectCaseStudyByIndex: (index: number) => void;
}

export function PremiumTestimonialsSection({
  t,
  onSelectFeaturedCaseStudy,
  onSelectCaseStudyByIndex,
}: PremiumTestimonialsProps) {
  const minimalIcons = [
    (
      // Home / Residential Icon
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#D71920]" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.5Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21V12H15V21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      // Commercial Building Icon
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#D71920]" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7H10M14 7H16M8 11H10M14 11H16M8 15H10M14 15H16M11 21V18H13V21" strokeLinecap="round" />
      </svg>
    ),
    (
      // Urban / Masterplan Icon
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#D71920]" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21L9 15M9 15L15 21M9 15V3M15 21L21 15M21 15V9L15 3V21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#FBFBFA] text-[#111111] overflow-hidden border-b border-zinc-200">
      {/* Subtle Architectural Blueprint Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111111 1px, transparent 1px),
            linear-gradient(to bottom, #111111 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* ================================================================= */}
        {/* 1. SECTION TITLE (Editorial Heading + Subtitle)                   */}
        {/* ================================================================= */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D71920]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D71920]">
              {t.badge}
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-[#111111] tracking-tight leading-[1.12] break-words">
            {t.heading}
          </h2>

          <p className="text-xs sm:text-base text-zinc-600 font-light leading-relaxed pt-1">
            {t.subtitle}
          </p>
        </div>

        {/* ================================================================= */}
        {/* 2. SPLIT MAGAZINE LAYOUT (60% Left / 40% Right)                   */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* --------------------------------------------------------------- */}
          {/* LEFT SIDE (60%): Floating White Card with Featured Testimonial   */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-6 sm:p-10 lg:p-14 shadow-xl border border-zinc-100 flex flex-col justify-between relative overflow-hidden group">
            {/* Light gray quotation watermark in background */}
            <span
              className="absolute -top-6 -left-2 font-serif text-[100px] sm:text-[160px] text-zinc-100/90 leading-none select-none pointer-events-none -z-0"
              aria-hidden="true"
            >
              “
            </span>

            {/* Thin Red Accent Left Line */}
            <div className="absolute top-6 bottom-6 left-0 w-1 bg-gradient-to-b from-[#D71920] to-transparent rounded-r-full" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* 5 Red Stars */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm tracking-widest text-[#D71920]">
                <span>★★★★★</span>
              </div>

              {/* Featured Quote */}
              <blockquote className="font-sans text-lg sm:text-2xl lg:text-[1.7rem] font-medium text-[#111111] leading-snug tracking-tight">
                „{t.featured.quote}“
              </blockquote>

              {/* Project & Location Tag */}
              <div className="pt-1">
                <p className="font-sans text-xs sm:text-sm font-bold text-zinc-950">
                  {t.featured.project}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-500 font-light mt-0.5">
                  {t.featured.location}
                </p>
              </div>

              {/* 3 Achievement Badges with Checkmarks */}
              <div className="pt-2 flex flex-wrap gap-2 sm:gap-2.5">
                {t.featured.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F5] border border-zinc-200/70 text-[10px] sm:text-[11px] font-semibold text-zinc-800"
                  >
                    <span className="text-[#D71920] font-bold text-xs">✓</span>
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Right: Red Outlined Button */}
            <div className="relative z-10 pt-8 sm:pt-10 flex justify-end">
              <button
                type="button"
                onClick={onSelectFeaturedCaseStudy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D71920] text-[#D71920] hover:bg-[#D71920] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider group-hover:shadow-md cursor-pointer"
              >
                <span>{t.featured.button}</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* RIGHT SIDE (40%): Founder Portrait & Signature Anchor           */}
          {/* --------------------------------------------------------------- */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 lg:p-10 border border-zinc-100 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "radial-gradient(#D71920 0.75px, transparent 0.75px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              {/* Portrait of Majeed Shams */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/60 shadow-xs flex items-end justify-center">
                <img
                  src="/images/team/shams-majeed-main-image.png"
                  alt={t.founder.name}
                  className="w-full h-full object-contain object-bottom filter contrast-105"
                  loading="lazy"
                />
              </div>

              {/* Founder Details & Handwritten Signature */}
              <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
                <div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-[#111111] leading-tight">
                    {t.founder.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-500 font-normal mt-0.5 leading-snug">
                    {t.founder.title}
                  </p>
                </div>

                {/* Handwritten Signature Script */}
                <div className="text-right">
                  <span className="font-signature text-2xl sm:text-4xl text-zinc-800 -rotate-6 inline-block select-none opacity-85 hover:opacity-100 transition-opacity">
                    Majeed Shams
                  </span>
                </div>
              </div>

              {/* Founder Guiding Quote */}
              <p className="text-xs sm:text-sm text-zinc-700 font-light italic leading-relaxed">
                {t.founder.quote}
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. BOTTOM ROW: 3 ELEGANT REVIEW CARDS                             */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.reviews.map((rev, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCaseStudyByIndex(idx)}
              className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-zinc-200/80 hover:border-zinc-400 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 group card-lift cursor-pointer"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest text-[#D71920]">
                    ★★★★★
                  </span>

                  <div className="h-8 w-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    {minimalIcons[idx]}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-800 font-medium leading-relaxed">
                  „{rev.quote}“
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="font-sans text-xs font-bold text-[#111111]">
                    {rev.client}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 font-light mt-0.5">
                    {rev.projectType}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================================= */}
        {/* 4. EDITORIAL TRUST ANCHOR & REFERRAL PROMISE                      */}
        {/* ================================================================= */}
        <div className="bg-[#111111] text-white rounded-2xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#D71920]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D71920] block">
                {t.trustBanner.tagline}
              </span>
              <p className="font-sans text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug tracking-tight">
                {t.trustBanner.statement}
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-8 space-y-3">
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
                {t.founder.referralQuote}
              </p>
              <div className="flex items-center gap-3 pt-1">
                <img
                  src="/images/team/shams-majeed-main-image.png"
                  alt={t.founder.name}
                  className="h-10 w-10 rounded-full object-cover object-top border border-[#D71920]"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    — {t.founder.name}
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    {t.founder.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 5. BOTTOM STATISTICS GRID                                         */}
        {/* ================================================================= */}
        <div className="pt-4 border-t border-zinc-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 text-center">
            {t.stats.map((st, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-sans text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-none">
                  {st.value}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-600 font-medium uppercase tracking-wider">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
