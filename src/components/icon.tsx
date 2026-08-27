import type { HTMLAttributes } from "react";

interface IconProps extends HTMLAttributes<HTMLElement> {
  name: string;
  className?: string;
}

export function Icon({ name, className = "", ...props }: IconProps) {
  // Brand icon name list
  const brandIcons = ["linkedin", "linkedin-in", "instagram", "x-twitter", "twitter", "whatsapp", "facebook", "youtube", "github"];

  // 1. High-precision vector SVGs for social media & primary UI elements (renders instantly without webfont delays)
  if (name === "linkedin" || name === "linkedin-in") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (name === "x-twitter" || name === "twitter") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  if (name === "xing") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM6.719 3.593c-.496 0-.715.32-.879.622l-3.056 5.32c-.09.158-.09.349 0 .506l4.675 8.163c.09.158.257.247.469.247h3.344c.496 0 .715-.32.879-.622.004-.006.004-.016 0-.022l-4.628-8.082c-.004-.006-.004-.016 0-.022l3.009-5.239c.09-.158.09-.349 0-.506-.09-.158-.257-.247-.469-.247H6.719z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-4 h-4 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    );
  }

  if (name === "bars") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    );
  }

  if (name === "xmark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 inline-block align-middle ${className}`}
        aria-hidden="true"
        {...props}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }

  // 2. Fallback to FontAwesome classes with correct collection prefix
  const isBrand = brandIcons.includes(name);
  const isFa = name.startsWith("fa-") || name.startsWith("fas ") || name.startsWith("fab ");
  const iconClass = isFa
    ? name
    : isBrand
    ? `fa-brands fa-${name}`
    : `fa-solid fa-${name}`;

  return <i className={`${iconClass} ${className}`} aria-hidden="true" {...props} />;
}
