import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Lassen Sie uns gemeinsam <br /> Räume schaffen.
            </h2>
            <a
              href="mailto:office@schamsconsult.de"
              className="mt-8 inline-block border-b border-brand-black pb-1 text-xl italic transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              office@schamsconsult.de
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Büro
              </h3>
              <address className="mt-4 text-sm not-italic leading-relaxed text-brand-black/70">
                Schams Consult
                <br />
                Architektur & Stadtplanung
                <br />
                Deutschland
              </address>
            </div>
            <div>
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
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-8 text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Schams Consult. Alle Rechte vorbehalten.</p>
          <p>Architektur & Stadtplanung</p>
        </div>
      </div>
    </footer>
  );
}
