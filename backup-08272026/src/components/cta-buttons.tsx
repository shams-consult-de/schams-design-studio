import type { AnchorHTMLAttributes } from "react";
import { CONTACT } from "@/lib/contact";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

type CTAProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  /** Override the visible label. */
  label?: string;
  /** Tailwind text-size utility applied to the icon. */
  iconSize?: string;
};

/** Primary booking CTA — links to the Outlook booking page. */
export function BookingButton({
  className,
  label = "Erstgespräch buchen",
  iconSize = "text-base",
  ...rest
}: CTAProps) {
  return (
    <a
      href={CONTACT.bookingHref}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <Icon name="calendar-check" className={iconSize} />
      {label}
    </a>
  );
}

/** WhatsApp CTA — links to the pre-filled WhatsApp chat. */
export function WhatsAppButton({
  className,
  label = "Über WhatsApp",
  iconSize = "text-base",
  ...rest
}: CTAProps) {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <Icon name="whatsapp" variant="brands" className={iconSize} />
      {label}
    </a>
  );
}
