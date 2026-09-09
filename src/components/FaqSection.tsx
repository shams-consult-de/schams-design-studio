import { useState } from "react";
import { Translations } from "../lib/i18n";

interface FaqSectionProps {
  t: Translations["faqSection"];
  onBookConsultation: () => void;
}

export function FaqSection({ t, onBookConsultation }: FaqSectionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-left">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#DC2626] block">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        {/* Accessible, Thumb-Friendly FAQ Accordion */}
        <div className="space-y-3.5">
          {t.items.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-zinc-300 shadow-sm"
                    : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]"
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#DC2626] text-white rotate-180"
                        : "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-zinc-700 font-light leading-relaxed border-t border-zinc-100 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation CTA Prompt */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-zinc-950">
              {t.actionPrompt}
            </h3>
            <p className="text-xs text-zinc-500 font-light">
              Dipl.-Ing. Majeed Shams berät Sie persönlich zu Baurecht, Kosten & Machbarkeit.
            </p>
          </div>
          <button
            type="button"
            onClick={onBookConsultation}
            className="w-full sm:w-auto shrink-0 bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[46px] shadow-sm hover:shadow"
          >
            {t.actionCta}
          </button>
        </div>
      </div>
    </section>
  );
}
