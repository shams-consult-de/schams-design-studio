import { Language, Translations } from "../lib/i18n";
import { Icon } from "./icon";
import { CONTACT, getWhatsappHref } from "../lib/contact";

interface MobileStickyActionBarProps {
  t: Translations["mobileActionBar"];
  contactT: Translations["contact"];
  language?: Language;
  onBookConsultation: () => void;
  onNavigate?: (path: string) => void;
}

export function MobileStickyActionBar({
  t,
  contactT,
  language = "de",
  onBookConsultation,
  onNavigate,
}: MobileStickyActionBarProps) {
  const whatsappUrl = getWhatsappHref(contactT.whatsappMessage);

  return (
    <aside
      aria-label="Schnellkontakt und Zielgruppen"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="max-w-md mx-auto space-y-2">
        {/* Ergonomic 3-Path Audience Switcher in Bottom Thumb Zone */}
        <div className="flex items-center justify-between gap-1.5 px-0.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 shrink-0">
            {language === "en" ? "Weg:" : "Weg:"}
          </span>
          <div className="flex items-center gap-1.5 w-full justify-end">
            <button
              type="button"
              onClick={() => onNavigate?.("/projects?category=residential")}
              className="py-1 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-zinc-200 hover:text-white text-[11px] font-bold tracking-wide transition-all border border-white/5 cursor-pointer flex items-center gap-1"
            >
              <Icon name="house" className="text-[10px] text-red-400" />
              <span>{language === "en" ? "Residential" : "Privat"}</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.("/projects?category=commercial")}
              className="py-1 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 text-zinc-200 hover:text-white text-[11px] font-bold tracking-wide transition-all border border-white/5 cursor-pointer flex items-center gap-1"
            >
              <Icon name="building" className="text-[10px] text-zinc-300" />
              <span>{language === "en" ? "Commercial" : "Gewerbe"}</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.("/b2b")}
              className="py-1 px-2.5 rounded-lg bg-[#DC2626]/20 hover:bg-[#DC2626]/30 active:scale-95 text-red-200 hover:text-white text-[11px] font-bold tracking-wide transition-all border border-[#DC2626]/30 cursor-pointer flex items-center gap-1"
            >
              <Icon name="handshake" className="text-[10px] text-red-300" />
              <span>Partner</span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1.5">
        <a
          href={CONTACT.primaryPhoneHref}
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white font-medium text-[11px] sm:text-xs border border-white/10 transition-all text-center select-none cursor-pointer min-h-[44px]"
          aria-label={t.call}
        >
          <Icon name="phone" className="text-sm text-zinc-300 shrink-0" />
          <span className="truncate">{t.call}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 active:scale-95 text-[#25D366] font-medium text-[11px] sm:text-xs border border-[#25D366]/30 transition-all text-center select-none cursor-pointer min-h-[44px]"
          aria-label={t.whatsapp}
        >
          <Icon name="whatsapp" className="text-base shrink-0" />
          <span className="truncate">{t.whatsapp}</span>
        </a>

        <a
          href={`mailto:${CONTACT.email}`}
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-1.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white font-medium text-[11px] sm:text-xs border border-white/10 transition-all text-center select-none cursor-pointer min-h-[44px]"
          aria-label={t.email}
        >
          <Icon name="envelope" className="text-sm text-zinc-300 shrink-0" />
          <span className="truncate">{t.email}</span>
        </a>

        <button
          type="button"
          onClick={onBookConsultation}
          className="flex-[1.25] flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-bold text-[11px] sm:text-xs shadow-lg shadow-red-950/40 transition-all text-center select-none cursor-pointer min-h-[44px]"
          aria-label={t.book}
        >
          <Icon name="calendar-check" className="text-sm shrink-0" />
          <span className="truncate">{t.book}</span>
        </button>
        </div>
      </div>
    </aside>
  );
}