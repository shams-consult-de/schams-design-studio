import { Translations } from "../lib/i18n";

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
      {/* 1. Phone Call */}
      <a
        href={`tel:${phone}`}
        className="p-2.5 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
        title={`${t.call}: +49 6074 8056262`}
        aria-label={t.call}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* 2. WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full hover:bg-[#25D366]/20 text-[#25D366] transition-colors cursor-pointer"
        title={t.whatsapp}
        aria-label={t.whatsapp}
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.394-10.416c-4.288 0-7.777 3.489-7.777 7.778 0 1.374.359 2.664.984 3.784l-1.044 3.82 3.916-1.027c1.077.587 2.316.923 3.921.923 4.287 0 7.776-3.488 7.776-7.778 0-4.288-3.489-7.778-7.776-7.778z" />
        </svg>
      </a>

      {/* Separator */}
      <span className="h-4 w-px bg-white/20 my-auto" />

      {/* 3. Book Consultation */}
      <button
        type="button"
        onClick={onBookConsultation}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-red-950/30 cursor-pointer"
        aria-label={t.book}
      >
        <svg
          className="w-3.5 h-3.5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>{t.book}</span>
      </button>
    </aside>
  );
}
