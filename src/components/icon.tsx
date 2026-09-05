import type { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
}

const brandIcons = new Set([
  "linkedin",
  "linkedin-in",
  "instagram",
  "x-twitter",
  "twitter",
  "whatsapp",
  "facebook",
  "xing",
  "youtube",
  "github",
]);

/** Font Awesome icon rendered from the CDN stylesheet loaded in index.html. */
export function Icon({ name, className = "", ...props }: IconProps) {
  const hasPrefix = name.startsWith("fa-") || name.startsWith("fas ") || name.startsWith("fab ");
  const iconClass = hasPrefix
    ? name
    : brandIcons.has(name)
      ? `fa-brands fa-${name}`
      : `fa-solid fa-${name}`;

  return <i className={`${iconClass} ${className}`} aria-hidden="true" {...props} />;
}