import { useState } from "react";
import { Icon } from "./icon";
import { CONTACT } from "../lib/contact";
import { Language, Translations } from "../lib/i18n";

interface ContactSectionProps {
  t: Translations["contact"];
  language: Language;
  initialMessage?: string;
}

export function ContactSection({
  t,
  language,
  initialMessage: _initialMessage = "",
}: ContactSectionProps) {
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>(CONTACT.offices[0].id);

  const activeOffice =
    CONTACT.offices.find((o) => o.id === selectedOfficeId) || CONTACT.offices[0];

  const whatsappHref = `https://wa.me/4915151864090?text=${encodeURIComponent(t.whatsappMessage)}`;
  const mailtoSubject = encodeURIComponent("Projektanfrage / Architectural Inquiry — Shams Consult");
  const mailtoHref = `mailto:${CONTACT.email}?subject=${mailtoSubject}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0b] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <Icon name="shield-check" /> <span>{t.badge}</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.headlinePart1}
            <span className="font-normal text-red-400">{t.headlineHighlight}</span>.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* 1. Primary Conversion Hub: Microsoft 365 Direct Calendar Booking */}
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-[#16171b] border border-white/15 hover:border-red-500/50 transition-all rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-sans text-2xl sm:text-4xl font-bold text-white leading-tight">
                {t.calendarCardHeading}
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {t.calendarCardDesc}
              </p>

              {/* Verified Meeting Benefits */}
              <div className="space-y-2.5 pt-3">
                {t.calendarCardBenefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                    <span className="h-5 w-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs shrink-0 font-bold">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <a
                href={CONTACT.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-4 px-8 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
              >
                <Icon name="calendar-check" />
                <span>{t.calendarCardButton}</span>
              </a>

              <a
                href={mailtoHref}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 py-3.5 px-6 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center"
              >
                <span>{t.emailCardButton}</span>
              </a>

              <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-400 text-center">
                <span className="text-emerald-400">🔒</span>
                <span>
                  {language === "de"
                    ? "Berufshaftpflichtversichert (§ 16 HASG) · 100% Planungssicherheit"
                    : "Statutory Professional Indemnity (§ 16 HASG) · Full Safety"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Independent WhatsApp Direct Inquiry Section */}
        <div className="bg-[#151619] border border-white/10 hover:border-emerald-500/40 p-8 sm:p-10 rounded-3xl transition-all shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center text-lg shrink-0">
                  <Icon name="whatsapp" className="text-2xl" />
                </span>
                <h4 className="font-bold text-lg text-white">
                  {t.whatsappTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-11">
                {t.whatsappDesc}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-zinc-950 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-center"
              >
                <Icon name="whatsapp" className="text-xl" />
                <span>{t.whatsappButton}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Unified Office Locations & Interactive Map Section */}
        <div className="bg-[#151619] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-1">
              <h3 className="font-bold text-xl sm:text-2xl text-white">
                {t.officesTitle}
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                {t.officesSubtitle}
              </p>
            </div>

            {/* Office Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
              {CONTACT.offices.map((office) => (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setSelectedOfficeId(office.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedOfficeId === office.id
                      ? "bg-red-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {office.name[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Office Details & Live Map Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Active Office Information Card (4 cols) */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold block">
                    {activeOffice.tagline[language]}
                  </span>
                  <h4 className="text-lg font-bold text-white pt-1">
                    {activeOffice.name[language]}
                  </h4>
                </div>

                <div className="space-y-2 text-xs text-zinc-300 font-light border-t border-white/10 pt-4">
                  <div>
                    <p className="font-semibold text-white">{activeOffice.street}</p>
                    <p>{activeOffice.city}</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={activeOffice.phoneHref}
                      className="inline-flex items-center gap-2 text-white hover:text-red-400 transition-colors font-mono font-bold text-sm"
                    >
                      <Icon name="phone" className="text-red-400 text-xs" />
                      <span>{activeOffice.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame (8 cols) */}
            <div className="lg:col-span-8 relative min-h-[320px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-inner bg-zinc-900">
              <iframe
                title={`Map for ${activeOffice.name[language]}`}
                src={activeOffice.mapEmbedUrl}
                className="w-full h-full border-0 filter contrast-105 min-h-[320px] sm:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
