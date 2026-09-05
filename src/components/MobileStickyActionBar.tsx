import { Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface MobileStickyActionBarProps {
  t: Translations["mobileActionBar"];
  contactT: Translations["contact"];
  onBookConsultation: () => void;
}

export function MobileStickyActionBar({
  t,
  contactT,
  onBookConsultation,
}: MobileStickyActionBarProps) {
  const phone = "+4960748056262";
  const whatsappUrl = `https://wa.me/4960748056262?text=${encodeURIComponent(
    contactT.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Schnellkontakt"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white font-medium text-xs border border-white/10 transition-all text-center select-none cursor-pointer"
          aria-label={t.call}
        >
          <Icon name="phone" className="text-base text-zinc-300 shrink-0" />
          <span className="truncate">{t.call}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 active:scale-95 text-[#25D366] font-medium text-xs border border-[#25D366]/30 transition-all text-center select-none cursor-pointer"
          aria-label={t.whatsapp}
        >
          <Icon name="whatsapp" className="text-xl shrink-0" />
          <span className="truncate">{t.whatsapp}</span>
        </a>

        <button
          type="button"
          onClick={onBookConsultation}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-bold text-xs shadow-lg shadow-red-950/40 transition-all text-center select-none cursor-pointer"
          aria-label={t.book}
        >
          <Icon name="calendar-check" className="text-base shrink-0" />
          <span className="truncate">{t.book}</span>
        </button>
      </div>
    </aside>
  );
}