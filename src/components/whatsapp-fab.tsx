import { CONTACT } from "@/lib/contact";
import { Icon } from "@/components/icon";

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Über WhatsApp kontaktieren"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
    >
      <Icon name="comment" className="text-xl" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
