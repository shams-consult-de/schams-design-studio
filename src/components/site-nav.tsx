import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Home, Building2, Layers, Mail, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Start", Icon: Home },
  { to: "/leistungen", label: "Leistungen", Icon: Layers },
  { to: "/buero", label: "Büro", Icon: Building2 },
  { to: "/kontakt", label: "Kontakt", Icon: Mail },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Hauptnavigation"
      className="sticky top-0 z-40 w-full border-b border-border bg-brand-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="group" aria-label="Schams Consult — Startseite">
          <span className="font-serif text-2xl tracking-tight lg:text-[28px]">
            Schams<span className="text-brand-accent">.</span>Consult
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ to, label, Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-black/80 transition-colors hover:text-brand-accent"
                activeProps={{ className: "text-brand-accent" }}
                activeOptions={{ exact: to === "/" }}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {links.map(({ to, label, Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 text-base font-medium"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
