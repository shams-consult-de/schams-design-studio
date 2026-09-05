import { Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface DesktopStickyActionBarProps {
  t: Translations["mobileActionBar"];
  contactT: Translations["contact"];
  onBookConsultation: () => void;
}

export function DesktopStickyActionBar({
  t,
  contactT,
  onBookConsultation,
}: DesktopStickyActionBarProps) {
  const phone = "+4960748056262";
  const whatsappUrl = `https://wa.me/4960748056262?text=${encodeURIComponent(
    contactT.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Direktkontakt"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/90 text-white backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-950/20"
    >
      <a
        href={`tel:${phone}`}
        className="p-2.5 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        title={`${t.call}: +49 6074 8056262`}
        aria-label={t.call}
      >
        <Icon name="phone" className="text-base" />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-[#25D366]/20 text-[#25D366] transition-colors cursor-pointer"
        title={t.whatsapp}
        aria-label={t.whatsapp}
      >
        <Icon name="whatsapp" className="text-xl" />
      </a>

      <span className="h-4 w-px bg-white/20 my-auto" />

      <button
        type="button"
        onClick={onBookConsultation}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-red-950/30 cursor-pointer"
        aria-label={t.book}
      >
        <Icon name="calendar-check" className="text-sm shrink-0" />
        <span>{t.book}</span>
      </button>
    </aside>
  );
}