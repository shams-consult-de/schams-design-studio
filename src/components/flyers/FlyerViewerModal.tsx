import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PortalFile } from "../../data/flyers";
import { FcnPartnershipFlyer } from "./FcnPartnershipFlyer";
import { B2bDeveloperFlyer } from "./B2bDeveloperFlyer";
import { CaseStudyFlyer } from "./CaseStudyFlyer";
import { DinLangFlyer } from "./DinLangFlyer";
import { GalleryFlyer } from "./GalleryFlyer";

interface FlyerViewerModalProps {
  file: PortalFile | null;
  isOpen: boolean;
  onClose: () => void;
  autoPrint?: boolean;
  initialLanguage?: "de" | "en" | "all";
}

export function FlyerViewerModal({
  file,
  isOpen,
  onClose,
  autoPrint = false,
  initialLanguage = "de",
}: FlyerViewerModalProps) {
  const [language, setLanguage] = useState<"de" | "en" | "all">(initialLanguage);
  const [zoom, setZoom] = useState<number>(0.85);

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage, file]);

  useEffect(() => {
    if (!isOpen) return;

    // Lock body scrolling when modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Handle ESC key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // If autoPrint requested, trigger print after rendering settles
    let timer: NodeJS.Timeout | undefined;
    if (autoPrint) {
      timer = setTimeout(() => {
        window.print();
      }, 500);
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      if (timer) clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, autoPrint, onClose]);

  if (!isOpen || !file) return null;

  const isDinLang = file.id !== "shams-fcn-partnership";

  const renderFlyer = () => {
    switch (file.id) {
      case "shams-fcn-partnership":
        return <FcnPartnershipFlyer />;
      case "b2b-developer-flyer":
        return <B2bDeveloperFlyer language={language} />;
      case "fcn-kundentag-flyer":
        return <DinLangFlyer language={language} />;
      case "portfolio-gallery-flyer":
        return <GalleryFlyer language={language} />;
      case "casestudy-story-flyer":
        return <CaseStudyFlyer language={language} />;
      default:
        return (
          <div className="text-center p-12 text-zinc-400">
            Dokument konnte nicht geladen werden.
          </div>
        );
    }
  };

  const modalContent = (
    <div className="flyer-modal-root fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex flex-col items-center">
      {/* Print isolation styles */}
      <style>{`
        @page {
          size: ${isDinLang ? "210mm 148mm" : "148mm 210mm"};
          margin: 0;
        }
        @media print {
          #root {
            display: none !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .flyer-modal-root {
            position: static !important;
            overflow: visible !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            width: 100% !important;
          }
          .flyer-viewer-ui {
            display: none !important;
          }
          .flyer-canvas-main {
            padding: 0 !important;
            margin: 0 !important;
            overflow: visible !important;
            display: block !important;
            width: 100% !important;
          }
          .flyer-print-container {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
          }
          .flyer-root,
          .flyer-fcn,
          .flyer-b2b,
          .flyer-din-lang,
          .flyer-gallery,
          .flyer-casestudy {
            display: block !important;
            gap: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
          }
          .sheet {
            box-shadow: none !important;
            margin: 0 !important;
            page-break-after: always !important;
            break-after: page !important;
          }
          .sheet:last-of-type,
          .sheet:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
          .fold-marker {
            display: none !important;
          }
          .panel {
            border-right: none !important;
          }
        }
      `}</style>

      {/* TOP FLOATING BAR (DESKTOP / MOBILE TOP HEADER) */}
      <header className="flyer-viewer-ui sticky top-4 z-50 w-full max-w-5xl px-4 my-2 flex items-center justify-between pointer-events-none">
        <div className="bg-zinc-900/90 border border-zinc-700/80 rounded-2xl px-4 py-2 text-white flex items-center gap-3 shadow-2xl backdrop-blur pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div className="text-xs">
            <span className="font-bold text-zinc-200">{file.title.de}</span>
            <span className="hidden sm:inline text-zinc-400 ml-2">({file.format})</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="bg-zinc-900/90 border border-zinc-700/80 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-2xl px-4 py-2 text-xs font-bold transition-all shadow-2xl backdrop-blur flex items-center gap-1.5 cursor-pointer pointer-events-auto"
          title="Schließen (ESC)"
        >
          <span>✕</span>
          <span className="hidden sm:inline">Schließen</span>
        </button>
      </header>

      {/* FLYER CANVAS WORKSPACE */}
      <main className="flyer-canvas-main flex-1 w-full flex justify-center py-6 px-2 sm:px-4 overflow-x-auto">
        <div
          className="flyer-print-container transition-transform duration-200 origin-top"
          style={{ transform: `scale(${zoom})` }}
        >
          {renderFlyer()}
        </div>
      </main>

      {/* BOTTOM ERGONOMIC ACTION DOCK (THUMB ZONE OPTIMIZED) */}
      <nav
        aria-label="Flyer-Steuerung"
        className="flyer-viewer-ui sticky bottom-4 z-50 w-full max-w-3xl px-4 mb-2 pointer-events-none"
      >
        <div className="bg-zinc-950/95 border border-zinc-800/90 rounded-2xl p-2.5 text-white flex flex-wrap items-center justify-between gap-3 shadow-2xl shadow-black/80 backdrop-blur-lg pointer-events-auto">
          {/* Language Switcher (For DIN Lang Flyers) */}
          {isDinLang ? (
            <div className="flex items-center gap-1 bg-zinc-900 rounded-xl p-1 border border-zinc-800">
              <button
                type="button"
                onClick={() => setLanguage("de")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  language === "de"
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  language === "en"
                    ? "bg-red-600 text-white shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("all")}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-colors cursor-pointer ${
                  language === "all"
                    ? "bg-zinc-700 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
                title="Beide Seiten für beidseitigen Druck"
              >
                Beide Seiten
              </button>
            </div>
          ) : (
            <div className="text-xs text-zinc-400 font-medium px-2">
              DIN A5 Whitepaper · 5 Seiten
            </div>
          )}

          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs bg-zinc-900 rounded-xl px-2.5 py-1.5 border border-zinc-800 text-zinc-300">
            <span>Zoom:</span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.4, Number((z - 0.1).toFixed(2))))}
              className="px-2 py-0.5 hover:text-white cursor-pointer font-bold"
            >
              −
            </button>
            <span className="font-mono w-10 text-center">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(1.2, Number((z + 0.1).toFixed(2))))}
              className="px-2 py-0.5 hover:text-white cursor-pointer font-bold"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => setZoom(0.85)}
              className="text-[10px] uppercase tracking-wider text-zinc-400 hover:text-white ml-1 cursor-pointer font-semibold"
            >
              Reset
            </button>
          </div>

          {/* Primary Action Button: Print / Save PDF */}
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-950/50 cursor-pointer"
            title="Drucken oder als PDF speichern"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <path d="M6 14h12v8H6z" />
            </svg>
            <span>Drucken / Als PDF</span>
          </button>
        </div>
      </nav>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : modalContent;
}

