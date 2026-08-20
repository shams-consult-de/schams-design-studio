import { Link } from "@tanstack/react-router";
import { Icon } from "@/components/icon";
import { useEffect, useState } from "react";
import { CONTACT, LOGO_URL } from "@/lib/contact";

const navSections = [
  {
    label: "Leistungen",
    to: "/leistungen",
    children: [
      {
        to: "/architektur",
        label: "Architektur",
        description: "Wohn-, Gewerbe- & Sonderbauten",
        icon: "building",
      },
      {
        to: "/stadtplanung",
        label: "Stadtplanung",
        description: "B-Pläne & Quartiersentwicklung",
        icon: "layer-group",
      },
      {
        to: "/barrierefreiheit",
        label: "Barrierefreiheit",
        description: "Barrierefreie Fachplanung nach DIN",
        icon: "universal-access",
      },
    ],
  },
  {
    label: "Projekte",
    to: "/projekte",
  },
  {
    label: "Über uns",
    to: "/buero",
    children: [
      {
        to: "/buero",
        label: "Das Büro",
        description: "15+ Jahre Erfahrung & Kompetenznetzwerk",
        icon: "users",
      },
      {
        to: "/philosophie",
        label: "Philosophie",
        description: "Wirtschaftlich, nachhaltig & funktional",
        icon: "leaf",
      },
      {
        to: "/forschung",
        label: "Forschung & Lehre",
        description: "Frankfurt UAS & Praxiswissen",
        icon: "flask",
      },
      {
        to: "/kundenfeedback",
        label: "Feedback",
        description: "Erfahrungen unserer Auftraggeber",
        icon: "star",
      },
      {
        to: "/karriere",
        label: "Karriere",
        description: "Offene Stellen & Initiativbewerbung",
        icon: "briefcase",
      },
      {
        to: "/blog",
        label: "Blog",
        description: "Fachbeiträge & Projektberichte",
        icon: "book-open",
      },
    ],
  },
  {
    label: "Kontakt",
    to: "/kontakt",
  },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`sticky top-0 z-40 w-full border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-border/70 bg-brand-white/90 shadow-[0_6px_24px_-18px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-transparent bg-brand-white/80 backdrop-blur-md"
      } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 ease-out lg:px-12 ${
          scrolled ? "py-2.5" : "py-4"
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
            className={`w-auto transition-all duration-500 ease-out group-hover:scale-[1.02] ${
              scrolled ? "h-9 lg:h-11" : "h-11 lg:h-13"
            }`}
            decoding="async"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Navigation (Streamlined 4-Path Architecture) */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navSections.map((section) => {
            if ("children" in section) {
              return (
                <li key={section.label} className="group relative">
                  <div className="flex items-center gap-1 py-2 text-sm font-medium text-brand-black/80 transition-colors hover:text-brand-accent">
                    <Link
                      to={section.to}
                      className="cursor-pointer"
                      activeProps={{ className: "text-brand-accent font-semibold" }}
                    >
                      {section.label}
                    </Link>
                    <Icon
                      name="chevron-down"
                      className="text-[10px] text-muted-foreground transition-transform duration-300 group-hover:rotate-180 group-hover:text-brand-accent"
                    />
                  </div>

                  {/* Accessible Hover Flyout Menu */}
                  <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-80 rounded-xl border border-border/80 bg-brand-white/95 p-3 shadow-2xl backdrop-blur-xl">
                      <ul className="grid gap-1">
                        {section.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="group/item flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-concrete/80"
                              activeProps={{
                                className: "bg-concrete/80 text-brand-accent font-medium",
                              }}
                            >
                              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-concrete text-brand-black/70 transition-colors group-hover/item:bg-brand-accent/15 group-hover/item:text-brand-accent">
                                <Icon name={child.icon} className="text-xs" />
                              </span>
                              <div>
                                <p className="text-xs font-semibold text-brand-black transition-colors group-hover/item:text-brand-accent">
                                  {child.label}
                                </p>
                                <p className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">
                                  {child.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={section.label}>
                <Link
                  to={section.to}
                  className="group relative py-2 text-sm font-medium text-brand-black/80 transition-colors hover:text-brand-accent"
                  activeProps={{
                    className:
                      "text-brand-accent font-semibold [&_.nav-indicator]:scale-x-100 [&_.nav-indicator]:opacity-100",
                  }}
                  activeOptions={{ exact: section.to === "/" }}
                >
                  <span>{section.label}</span>
                  <span
                    className="nav-indicator pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 rounded-full bg-brand-accent opacity-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}

          {/* Primary High-Converting CTA */}
          <li className="ml-2">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-accent px-5 py-2.5 text-xs font-semibold text-brand-white shadow-md shadow-brand-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/35"
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

        {/* Mobile Hamburger Toggle */}
        <button
          className="rounded-lg p-2 text-brand-black transition-colors hover:bg-concrete lg:hidden"
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

      {/* Mobile Drawer Menu */}
      <div
        className={`overflow-hidden border-t border-border bg-brand-white/98 transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {navSections.map((section) => {
            if ("children" in section) {
              const isExpanded = mobileExpanded === section.label;
              return (
                <li key={section.label} className="border-b border-border/50 py-2">
                  <button
                    onClick={() => toggleMobileGroup(section.label)}
                    className="flex w-full items-center justify-between py-2 text-base font-semibold text-brand-black"
                  >
                    <span>{section.label}</span>
                    <Icon
                      name="chevron-down"
                      className={`text-xs text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-brand-accent" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <ul className="mt-1 space-y-1 pl-3 pb-2">
                      {section.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 py-2 text-sm text-brand-black/80 hover:text-brand-accent"
                          >
                            <Icon name={child.icon} className="text-xs text-brand-accent" />
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={section.label} className="border-b border-border/50 py-3">
                <Link
                  to={section.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-brand-black hover:text-brand-accent"
                >
                  <span>{section.label}</span>
                  <Icon name="arrow-right" className="text-xs text-muted-foreground" />
                </Link>
              </li>
            );
          })}

          <li className="pt-5 pb-4">
            <a
              href={CONTACT.bookingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-3.5 text-sm font-semibold text-brand-white shadow-lg shadow-brand-accent/25 transition-transform active:scale-98"
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
