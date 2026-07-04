import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarCheck, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Sprechen Sie <br /> uns an.
            </h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-black pb-1 text-xl italic transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              <Mail className="h-5 w-5" aria-hidden="true" /> {CONTACT.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" /> Erstgespräch buchen
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Über WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-5">
            {CONTACT.offices.map((o) => (
              <div key={o.name}>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {o.name}
                </h3>
                <address className="mt-4 text-sm not-italic leading-relaxed text-brand-black/70">
                  {o.street}
                  <br />
                  {o.city}
                  <br />
                  <a href={o.phoneHref} className="mt-2 inline-flex items-center gap-2 hover:text-brand-accent">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {o.phone}
                  </a>
                </address>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Rechtliches
            </h3>
            <ul className="mt-4 flex flex-col space-y-2 text-sm">
              <li>
                <Link to="/impressum" className="hover:text-brand-accent">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-brand-accent">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/barrierefreiheit" className="hover:text-brand-accent">
                  Barrierefreiheit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-8 text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Shams Consult — Architektur & Stadtplanung. Alle Rechte vorbehalten.</p>
          <p>Mitglied Architekten- und Stadtplanerkammer Hessen · AKH Nr. 21886</p>
        </div>
      </div>
    </footer>
  );
}
