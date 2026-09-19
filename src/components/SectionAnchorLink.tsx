import { useState, useCallback } from "react";
import { Icon } from "./icon";

interface SectionAnchorLinkProps {
  sectionId: string;
  language?: "de" | "en";
  className?: string;
}

export function SectionAnchorLink({
  sectionId,
  language = "de",
  className = "",
}: SectionAnchorLinkProps) {
  const [copied, setCopied] = useState(false);

  const cleanId = sectionId.replace(/^#/, "");

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const basePath = language === "en" ? "/en" : "";
      const directUrl = `${window.location.origin}${basePath}#${cleanId}`;

      // Update browser URL bar so the user immediately sees the direct link
      window.history.pushState(null, "", `#${cleanId}`);

      // Smooth scroll target into view with header offset
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }

      // Copy to clipboard with fallback
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(directUrl)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
          })
          .catch(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
          });
      } else {
        // Fallback for older browsers
        try {
          const textArea = document.createElement("textarea");
          textArea.value = directUrl;
          textArea.style.position = "fixed";
          textArea.style.opacity = "0";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        } catch {
          setCopied(true);
          setTimeout(() => setCopied(false), 2200);
        }
      }
    },
    [cleanId, language]
  );

  const label =
    language === "en"
      ? "Copy direct link to this section"
      : "Direktlink zu diesem Abschnitt kopieren";
  const copiedLabel = language === "en" ? "Link copied!" : "Link kopiert!";

  return (
    <span className={`relative inline-flex items-center align-middle ml-2 group/anchor ${className}`}>
      <button
        type="button"
        onClick={handleCopy}
        className="opacity-60 hover:opacity-100 focus:opacity-100 p-1 rounded-md text-zinc-400 hover:text-[#DC2626] hover:bg-zinc-100/80 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]/40"
        title={label}
        aria-label={label}
      >
        <Icon name="link" className="text-xs sm:text-sm" />
      </button>

      {/* Science-backed visual feedback tooltip */}
      {copied && (
        <span
          role="status"
          className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1 text-[11px] font-semibold bg-zinc-900 text-white rounded shadow-lg whitespace-nowrap z-50 pointer-events-none animate-in fade-in zoom-in-95 duration-150"
        >
          {copiedLabel}
        </span>
      )}
    </span>
  );
}
