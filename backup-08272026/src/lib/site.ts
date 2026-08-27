// Canonical site URL used for absolute canonical and Open Graph links.
// Update once a custom domain is live.
export const SITE_URL = "https://shams-consult.de";

/** Build an absolute URL for a given site-relative path. */
export const absUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
};
