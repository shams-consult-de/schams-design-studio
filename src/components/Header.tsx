import { useState, useEffect } from "react";
import { Icon } from "./icon";
import { Language, Translations } from "../lib/i18n";

interface HeaderProps {
  t: Translations["nav"];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export function Header({
  t,
  language,
  onLanguageChange,
  onNavigateHome,
  onNavigate,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, path: "/about", sectionId: undefined },
    { label: t.services, path: "/services", sectionId: "services" },
    { label: t.projects, path: "/projects", sectionId: undefined },
    { label: t.siteVisits, path: "/site-visits", sectionId: undefined },
  ];

  const mobileNavLinks = [
    { label: t.about, path: "/about", sectionId: undefined },
    { label: t.services, path: "/services", sectionId: "services" },
    { label: t.projects, path: "/projects", sectionId: undefined },
    { label: t.siteVisits, path: "/site-visits", sectionId: undefined },
    { label: t.caseStudies, path: "/case-studies", sectionId: "case-studies" },
    { label: t.blog, path: "/blog", sectionId: undefined },
    { label: t.contact, path: "/contact", sectionId: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: (typeof navLinks)[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.sectionId) {
      if (window.location.pathname === "/") {
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        if (onNavigate) {
          onNavigate("/");
          setTimeout(() => {
            const el = document.getElementById(link.sectionId!);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      }
    } else {
      if (link.path === "/" && onNavigateHome) {
        onNavigateHome();
      } else if (onNavigate) {
        onNavigate(link.path);
      } else {
        window.location.href = link.path;
      }
    }
  };

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3.5 shadow-sm text-zinc-900"
          : "bg-white/90 backdrop-blur-xs py-4 text-zinc-900 border-b border-zinc-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            else if (onNavigate) onNavigate("/");
          }}
          className="flex items-center group focus:outline-none"
        >
          <img
            src="/logo.png"
            alt="Shams Consult - Architektur und Stadtplanung"
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            width="160"
            height="48"
            loading="eager"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold tracking-[0.12em] text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={(e) => handleLinkClick(e, link)}
              className="hover:text-[#DC2626] transition-colors uppercase relative py-1 text-zinc-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Subtle Language Switcher & Action Button */}
        <div className="flex items-center gap-3.5">
          {/* Subtle Language Switcher (DE | EN) */}
          <div className="inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200 p-0.5 text-[11px] font-bold tracking-wider text-zinc-600">
            <button
              type="button"
              onClick={() => onLanguageChange("de")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "de"
                  ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
              aria-label="Auf Deutsch umschalten"
            >
              DE
            </button>
            <span className="text-zinc-300">|</span>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Direct Phone & WhatsApp subtle icon links for desktop */}
          <div className="hidden md:flex items-center gap-0.5">
            <a
              href="tel:+4960748056262"
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950 transition-colors"
              title="Telefon: +49 (0) 6074 8056262"
              aria-label="Telefon"
            >
              <Icon name="phone" className="text-base" />
            </a>
            <a
              href="https://wa.me/4960748056262"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-zinc-100 text-[#25D366] transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <Icon name="whatsapp" className="text-xl" />
            </a>
          </div>

          <button
            type="button"
            onClick={handleConsultationClick}
            className="hidden sm:inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-[0.12em] transition-all transform hover:-translate-y-0.5 shadow-xs cursor-pointer"
          >
            <span>{t.bookConsultation}</span>
            <span>→</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-zinc-800 hover:text-[#DC2626] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <Icon name={mobileMenuOpen ? "xmark" : "bars"} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-5 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-1">
            {mobileNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-zinc-900 hover:text-[#DC2626] font-bold text-sm tracking-wider uppercase py-3 border-b border-zinc-100 flex items-center justify-between min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="text-zinc-300 text-xs">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              {language === "de" ? "Sprache wählen" : "Language"}
            </span>
            <div className="inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200 p-0.5 text-xs font-bold text-zinc-700">
              <button
                type="button"
                onClick={() => {
                  onLanguageChange("de");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  language === "de"
                    ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                    : "text-zinc-500"
                }`}
              >
                DE (Deutsch)
              </button>
              <span className="text-zinc-300">|</span>
              <button
                type="button"
                onClick={() => {
                  onLanguageChange("en");
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-white text-zinc-950 shadow-xs font-extrabold"
                    : "text-zinc-500"
                }`}
              >
                EN (English)
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleConsultationClick}
              className="w-full text-center bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3.5 px-4 rounded-sm text-xs uppercase tracking-wider block shadow-sm min-h-[48px] flex items-center justify-center cursor-pointer"
            >
              <span>{t.bookConsultation}</span>
              <span className="ml-1.5">→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
