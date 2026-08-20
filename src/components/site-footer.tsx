import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Sprechen Sie <br /> uns an.
            </h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-8 inline-flex items-center gap-2 border-b border-brand-black pb-1 text-xl italic transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              <Icon name="envelope" className="text-xl" /> {CONTACT.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5"
              >
                <Icon name="calendar-check" className="text-base" /> Erstgespräch buchen
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Icon name="comment" className="text-base" /> Über WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-4">
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
                    <Icon name="phone" className="text-sm" /> {o.phone}
                  </a>
                </address>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Themen
            </h3>
            <ul className="mt-4 flex flex-col space-y-2 text-sm">
              <li><Link to="/architektur" className="hover:text-brand-accent">Architektur</Link></li>
              <li><Link to="/stadtplanung" className="hover:text-brand-accent">Stadtplanung</Link></li>
              <li><Link to="/forschung" className="hover:text-brand-accent">Forschung</Link></li>
              <li><Link to="/blog" className="hover:text-brand-accent">Blog</Link></li>
              <li><Link to="/karriere" className="hover:text-brand-accent">Karriere</Link></li>
              <li><Link to="/geschichte" className="hover:text-brand-accent">Geschichte</Link></li>
              <li><Link to="/philosophie" className="hover:text-brand-accent">Philosophie</Link></li>
            </ul>
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

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-8 text-[9px] font-medium uppercase tracking-wider text-muted-foreground md:flex-row md:items-center">
          <p className="md:whitespace-nowrap">© {new Date().getFullYear()} Shams Consult — Architektur & Stadtplanung. Alle Rechte vorbehalten.</p>
          <p className="md:whitespace-nowrap">Mitglied Architekten- und Stadtplanerkammer Hessen · AKH Nr. 21886</p>
          <p className="md:whitespace-nowrap">
            Dev Partner{" "}
            <a
              href="https://nordible.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-brand-accent hover:underline"
            >
              nordible.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
