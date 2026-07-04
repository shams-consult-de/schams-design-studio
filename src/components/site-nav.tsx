import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Home, Building2, Layers, Mail, Menu, X, FlaskConical, CalendarCheck, Star, BookOpen, Briefcase } from "lucide-react";
import { CONTACT, LOGO_URL } from "@/lib/contact";

const links = [
  { to: "/", label: "Start", Icon: Home },
  { to: "/architektur", label: "Architektur", Icon: Layers },
  { to: "/stadtplanung", label: "Stadtplanung", Icon: Layers },
  { to: "/projekte", label: "Projekte", Icon: Building2 },
  { to: "/buero", label: "Über\u00A0uns", Icon: Building2 },
  { to: "/forschung", label: "Forschung", Icon: FlaskConical },
  { to: "/blog", label: "Blog", Icon: BookOpen },
  { to: "/karriere", label: "Karriere", Icon: Briefcase },
  { to: "/kundenfeedback", label: "Feedback", Icon: Star },
  { to: "/kontakt", label: "Kontakt", Icon: Mail },
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
        <Link to="/" className="group flex items-center gap-3" aria-label="Shams Consult — Startseite">
          <img
            src={LOGO_URL}
            alt="Shams Consult — Architektur & Stadtplanung"
            width={200}
            height={64}
            className="h-11 w-auto transition-transform duration-500 group-hover:scale-[1.03] lg:h-14"
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </Link>

        <ul className="hidden items-center gap-2 lg:flex xl:gap-3">
          {links.map(({ to, label, Icon }) => (
            <li key={to}>
              <Link
                to={to}
                aria-label={label}
                className="group relative flex h-10 w-14 items-center justify-center overflow-visible rounded-lg text-brand-black/80 transition-colors hover:text-brand-accent"
                activeProps={{ className: "text-brand-accent" }}
                activeOptions={{ exact: to === "/" }}
              >
                <span className="absolute inset-0 flex h-10 w-14 items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-3">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="absolute inset-0 flex h-10 w-14 translate-y-6 items-center justify-center px-0.5 text-center text-xs font-medium opacity-0 transition-all duration-300 ease-out group-hover:translate-y-3 group-hover:opacity-100">
                  {label}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-white transition-transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Erstgespräch buchen
            </a>
          </li>
        </ul>

        <button
          className="lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border lg:hidden">
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
            <li className="pt-2 pb-4">
              <a
                href={CONTACT.bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3 text-sm font-semibold text-brand-white"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Erstgespräch buchen
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
