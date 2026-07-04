import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type IconProps = HTMLAttributes<HTMLElement> & {
  /** Font Awesome icon name without the `fa-` prefix, e.g. `calendar-check`. */
  name: string;
  /** Optional FA style variant. Defaults to `solid`. */
  variant?: "solid" | "regular" | "brands";
  className?: string;
};

/**
 * Thin wrapper around Font Awesome (loaded via CDN in the root route head).
 * The glyph inherits color from `currentColor` and size from `font-size`,
 * so use Tailwind text-size utilities (e.g. `text-base`, `text-xl`) to size it.
 */
export function Icon({ name, variant = "solid", className, ...rest }: IconProps) {
  return (
    <i
      aria-hidden="true"
      {...rest}
      className={cn(`fa-${variant} fa-${name} inline-block leading-none`, className)}
    />
  );
}
