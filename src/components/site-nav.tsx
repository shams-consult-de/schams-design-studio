import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { useEffect, useState } from "react";
import { CONTACT, LOGO_URL } from "@/lib/contact";

const links = [
  { to: "/", label: "Start", icon: "house" },
  { to: "/architektur", label: "Architektur", icon: "layer-group" },
  { to: "/stadtplanung", label: "Stadtplanung", icon: "layer-group" },
  { to: "/projekte", label: "Projekte", icon: "building" },
  { to: "/buero", label: "Über\u00A0uns", icon: "building" },
  { to: "/forschung", label: "Forschung", icon: "flask" },
  { to: "/blog", label: "Blog", icon: "book-open" },
  { to: "/karriere", label: "Karriere", icon: "briefcase" },
  { to: "/kundenfeedback", label: "Feedback", icon: "star" },
  { to: "/kontakt", label: "Kontakt", icon: "envelope" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 16);
        // Hide on scroll down (past 120px), show on scroll up
        if (y > 120 && y > last + 4) setHidden(true);
        else if (y < last - 4 || y < 120) setHidden(false);
        last = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`sticky top-0 z-40 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-border/70 bg-brand-white/85 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-transparent bg-brand-white/70 backdrop-blur-md"
      } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 ease-out lg:px-12 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Shams Consult — Startseite"
        >
          <img
            src={LOGO_URL}
            alt="Shams Consult — Architektur & Stadtplanung"
            width={200}
            height={64}
            className={`w-auto transition-all duration-500 ease-out group-hover:scale-[1.03] ${
              scrolled ? "h-9 lg:h-11" : "h-11 lg:h-14"
            }`}
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex xl:gap-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className="group relative px-2 py-1.5 text-xs font-medium text-brand-black/75 transition-colors hover:text-brand-accent xl:text-sm"
                activeProps={{
                  className:
                    "text-brand-accent font-semibold [&_.nav-indicator]:scale-x-100 [&_.nav-indicator]:opacity-100",
                }}
                activeOptions={{ exact: to === "/" }}
              >
                <span>{label}</span>
                <span
                  className="nav-indicator pointer-events-none absolute bottom-0 left-2 right-2 h-0.5 scale-x-0 rounded-full bg-brand-accent opacity-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
          <li className="ml-1 xl:ml-2">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold text-brand-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/30 xl:text-sm"
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                aria-hidden="true"
              />
              <Icon
                name="calendar-check"
                className="text-sm transition-transform duration-300 group-hover:rotate-[-8deg]"
              />
              <span className="whitespace-nowrap">Erstgespräch buchen</span>
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <Icon name="xmark" className="text-2xl" />
          ) : (
            <Icon name="bars" className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {links.map(({ to, label, icon }, i) => (
            <li
              key={to}
              className={`transform transition-all duration-500 ease-out ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
            >
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-3 py-3 text-base font-medium transition-colors hover:text-brand-accent"
              >
                <Icon
                  name={icon}
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                />
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2 pb-4">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 text-sm font-semibold text-brand-white transition-transform hover:scale-[1.02]"
            >
              <Icon name="calendar-check" className="text-base" />
              Erstgespräch buchen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
