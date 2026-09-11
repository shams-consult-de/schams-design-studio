import { Language } from "./i18n";

/**
 * Extracts language and clean sub-path from any pathname.
 * E.g.:
 * "/en" -> { lang: "en", cleanPath: "/" }
 * "/en/projects" -> { lang: "en", cleanPath: "/projects" }
 * "/de/projects" -> { lang: "de", cleanPath: "/projects" }
 * "/projects" -> { lang: "de", cleanPath: "/projects" }
 * "/" -> { lang: "de", cleanPath: "/" }
 */
export function parsePathLocale(pathname: string): { lang: Language; cleanPath: string } {
  let path = pathname;
  try {
    path = decodeURIComponent(pathname);
  } catch {
    path = pathname;
  }
  path = path.replace(/\/+/g, "/").trim().toLowerCase();
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  if (path === "/en") {
    return { lang: "en", cleanPath: "/" };
  }
  if (path.startsWith("/en/")) {
    return { lang: "en", cleanPath: path.slice(3) };
  }
  if (path === "/de") {
    return { lang: "de", cleanPath: "/" };
  }
  if (path.startsWith("/de/")) {
    return { lang: "de", cleanPath: path.slice(3) };
  }

  return { lang: "de", cleanPath: path === "" ? "/" : path };
}

/**
 * Produces a localized URL path for the target language.
 * E.g.:
 * getLocalizedPath("/projects", "en") => "/en/projects"
 * getLocalizedPath("/en/projects", "de") => "/projects"
 * getLocalizedPath("/", "en") => "/en"
 * getLocalizedPath("/en", "de") => "/"
 * getLocalizedPath("/project/stadtvilla", "en") => "/en/project/stadtvilla"
 */
export function getLocalizedPath(pathname: string, targetLang: Language): string {
  // Preserve query / hash if present
  let searchAndHash = "";
  let pathOnly = pathname;
  const match = pathname.match(/[?#].*$/);
  if (match) {
    searchAndHash = match[0];
    pathOnly = pathname.slice(0, match.index);
  }

  const { cleanPath } = parsePathLocale(pathOnly);

  let result: string;
  if (targetLang === "en") {
    result = cleanPath === "/" ? "/en" : `/en${cleanPath}`;
  } else {
    result = cleanPath;
  }

  return `${result}${searchAndHash}`;
}
