import { CONTACT } from "@/lib/contact";
import { Icon } from "@/components/icon";

export function WhatsAppFab() {
  return (
    <>
      {/* Mobile Sticky Quick-Action Dock (Thumb-Zone Optimized for Conversion) */}
      <aside aria-label="Schnellkontakt" className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
        <div className="flex items-center justify-between gap-1.5 rounded-full border border-border/80 bg-brand-white/95 p-1.5 shadow-2xl backdrop-blur-md">
          <a
            href={CONTACT.offices[0].phoneHref}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-concrete py-2.5 text-xs font-semibold text-brand-black transition-colors hover:bg-concrete/80 active:scale-95"
          >
            <Icon name="phone" className="text-sm text-brand-accent" />
            <span>Anrufen</span>
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] py-2.5 text-xs font-semibold text-white shadow-sm shadow-[#25D366]/30 transition-transform active:scale-95"
          >
            <Icon name="comment" className="text-sm" />
            <span>WhatsApp</span>
          </a>
          <a
            href={CONTACT.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-brand-accent py-2.5 text-xs font-semibold text-brand-white shadow-sm shadow-brand-accent/30 transition-transform active:scale-95"
          >
            <Icon name="calendar-check" className="text-sm" />
            <span>Termin</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Über WhatsApp kontaktieren"
        className="fixed bottom-6 right-6 z-40 hidden sm:inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <Icon name="comment" className="text-xl" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
