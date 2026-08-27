import { MouseEvent } from "react";
import { Icon } from "./icon";
import { CONTACT } from "../lib/contact";
import { Translations } from "../lib/i18n";

interface FooterProps {
  t: Translations["footer"];
  navT: Translations["nav"];
  servicesT: Translations["services"];
  onNavigate?: (path: string) => void;
}

export function Footer({ t, navT, servicesT, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, path: string, sectionId?: string) => {
    e.preventDefault();
    if (sectionId) {
      if (window.location.pathname === "/" || window.location.pathname === "") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        if (onNavigate) {
          onNavigate(path);
        } else {
          window.location.href = path;
        }
      }
    } else {
      if (onNavigate) {
        onNavigate(path);
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <footer className="bg-[#0a0a0b] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3-Column Navigation, Services & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Column 1: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="/about" onClick={(e) => handleNav(e, "/about")} className="hover:text-white transition-colors">{navT.about}</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, "/services", "services")} className="hover:text-white transition-colors">{navT.services}</a></li>
              <li><a href="/projects" onClick={(e) => handleNav(e, "/projects")} className="hover:text-white transition-colors">{navT.projects}</a></li>
              <li><a href="/research" onClick={(e) => handleNav(e, "/research")} className="hover:text-white transition-colors">Frankfurt UAS · Forschung & Thesen</a></li>
              <li><a href="/blog" onClick={(e) => handleNav(e, "/blog")} className="hover:text-white transition-colors">{navT.blog}</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, "/contact", "contact")} className="hover:text-white transition-colors">{navT.contact}</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              {servicesT.items.map((svc, idx) => (
                <li key={idx}>
                  <a href="/services" onClick={(e) => handleNav(e, "/services", "services")} className="hover:text-white transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-300">
              {t.contactTitle}
            </h4>
            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors block"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Icon name="linkedin-in" />
                </a>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Icon name="instagram" />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Icon name="facebook" />
                </a>
                <a
                  href={CONTACT.xing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-300 hover:text-white hover:border-[#DC2626] hover:bg-[#DC2626]/10 transition-colors"
                  aria-label="Xing"
                  title="Xing"
                >
                  <Icon name="xing" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Shams Consult. {t.rights}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="/impressum"
              onClick={(e) => handleNav(e, "/impressum")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalImpressum}
            </a>
            <span>•</span>
            <a
              href="/datenschutz"
              onClick={(e) => handleNav(e, "/datenschutz")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalDatenschutz}
            </a>
            <span>•</span>
            <a
              href="/barrierefreiheit"
              onClick={(e) => handleNav(e, "/barrierefreiheit")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalBarrierefreiheit}
            </a>
            <span>•</span>
            <a
              href="/widerruf"
              onClick={(e) => handleNav(e, "/widerruf")}
              className="hover:text-white underline transition-colors"
            >
              {t.legalWiderruf}
            </a>
          </div>
        </div>
      </div>

      {/* Signature Animated Emblem Watermark */}
      <div className="w-full pt-10 sm:pt-14 pb-4 flex items-center justify-center select-none overflow-hidden group px-6">
        <img
          src="/images/animated-logo.webp"
          alt="Shams Consult Emblem"
          className="h-16 sm:h-24 md:h-32 lg:h-40 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Developed with Love in Germany Credit (Centered at very bottom) */}
      <div className="w-full pb-8 pt-2 flex items-center justify-center text-center px-4">
        <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-mono text-zinc-500">
          <span>{t.developedBy}</span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            {/* Crisp German Flag SVG for universal rendering on Windows, Mac, iOS & Android */}
            <span
              className="inline-flex items-center justify-center w-4 h-2.5 rounded-2xs overflow-hidden shadow-2xs border border-white/20 shrink-0"
              title="Deutschland"
              aria-label="Deutschland"
            >
              <svg viewBox="0 0 5 3" className="w-full h-full" aria-hidden="true">
                <rect width="5" height="1" y="0" fill="#000000" />
                <rect width="5" height="1" y="1" fill="#DD0000" />
                <rect width="5" height="1" y="2" fill="#FFCE00" />
              </svg>
            </span>
            <a
              href="https://nordible.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-300 hover:text-white underline decoration-zinc-600 hover:decoration-white transition-colors cursor-pointer"
            >
              nordible.co ↗
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
