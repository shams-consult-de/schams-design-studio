import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/projekte", label: "Projekte" },
  { to: "/buero", label: "Büro" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Hauptnavigation"
      className="sticky top-0 z-40 w-full border-b border-border bg-brand-white/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="group" aria-label="Schams Consult — Startseite">
          <span className="font-serif text-2xl tracking-tight lg:text-3xl">
            Schams <span className="text-brand-accent">Consult</span>
          </span>
        </Link>

        <div className="hidden space-x-10 text-xs font-medium uppercase tracking-[0.2em] md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-brand-accent"
              activeProps={{ className: "text-brand-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.2em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
