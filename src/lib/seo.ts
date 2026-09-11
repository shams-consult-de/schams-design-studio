import { Project } from "../data/projects";
import { BlogPost } from "../data/blog";
import { CaseStudy } from "../data/caseStudies";
import { Language } from "./i18n";

export const SITE_URL = "https://shams-consult.de";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/stadtvilla_mfa_roedermark.jpg`;

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  breadcrumbs?: Array<{ name: string; item: string }>;
  article?: {
    publishedTime: string;
    author: string;
    section: string;
  };
  customJsonLd?: Record<string, unknown>;
  alternateLanguages?: Array<{ lang: string; href: string }>;
}

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function setAlternateHreflang(lang: string, href: string) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", lang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setRobots(noIndex?: boolean) {
  let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
  if (!robots) {
    robots = document.createElement("meta");
    robots.setAttribute("name", "robots");
    document.head.appendChild(robots);
  }
  robots.setAttribute(
    "content",
    noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"
  );
}

function setJsonLd(id: string, data: Record<string, unknown> | null) {
  const existing = document.getElementById(id);
  if (!data) {
    if (existing) existing.remove();
    return;
  }
  let script = existing as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.text = JSON.stringify(data);
}

export function updatePageSeo(meta: SeoMetadata) {
  // 1. Page Title
  document.title = meta.title;

  // 2. Meta description
  setMetaTag("name", "description", meta.description);

  // 3. Canonical Link
  setCanonical(meta.canonicalUrl);

  // 4. Alternate Hreflang
  if (meta.alternateLanguages && meta.alternateLanguages.length > 0) {
    for (const alt of meta.alternateLanguages) {
      setAlternateHreflang(alt.lang, alt.href);
    }
  }

  // 5. Robots
  setRobots(meta.noIndex);

  // 6. Open Graph
  const image = meta.ogImage
    ? meta.ogImage.startsWith("http")
      ? meta.ogImage
      : `${SITE_URL}${meta.ogImage.startsWith("/") ? "" : "/"}${meta.ogImage}`
    : DEFAULT_OG_IMAGE;

  setMetaTag("property", "og:title", meta.title);
  setMetaTag("property", "og:description", meta.description);
  setMetaTag("property", "og:url", meta.canonicalUrl);
  setMetaTag("property", "og:image", image);
  setMetaTag("property", "og:type", meta.ogType || "website");
  setMetaTag("property", "og:locale", meta.canonicalUrl.includes("/en") ? "en_US" : "de_DE");

  // 7. Twitter Card
  setMetaTag("name", "twitter:title", meta.title);
  setMetaTag("name", "twitter:description", meta.description);
  setMetaTag("name", "twitter:image", image);

  // 8. Dynamic Breadcrumbs Schema
  if (meta.breadcrumbs && meta.breadcrumbs.length > 0) {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: meta.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: b.name,
        item: b.item.startsWith("http") ? b.item : `${SITE_URL}${b.item.startsWith("/") ? "" : "/"}${b.item}`,
      })),
    };
    setJsonLd("route-breadcrumb-schema", breadcrumbData);
  } else {
    setJsonLd("route-breadcrumb-schema", null);
  }

  // 9. Custom JSON-LD (e.g. Article / CreativeWork)
  if (meta.customJsonLd) {
    setJsonLd("route-detail-schema", meta.customJsonLd);
  } else {
    setJsonLd("route-detail-schema", null);
  }
}

export function getProjectSeo(project: Project, language: Language = "de"): SeoMetadata {
  const lang = language === "en" ? "en" : "de";
  const slug = project.slug || project.id;
  const title = `${project.title[lang]} — ${lang === "en" ? "Reference" : "Referenz"} | Shams Consult`;
  const description = `${project.categoryLabel[lang]}: ${project.subtitle[lang]} — ${lang === "en" ? "Location" : "Standort"}: ${project.location[lang]} (${project.year}).`;
  const canonicalUrl = `${SITE_URL}${lang === "en" ? "/en" : ""}/project/${slug}`;
  const image = project.image.startsWith("http") ? project.image : `${SITE_URL}${project.image.startsWith("/") ? "" : "/"}${project.image}`;

  return {
    title,
    description,
    canonicalUrl,
    ogImage: image,
    ogType: "article",
    breadcrumbs: [
      { name: lang === "en" ? "Home" : "Start", item: lang === "en" ? "/en" : "/" },
      { name: lang === "en" ? "Projects" : "Projekte", item: lang === "en" ? "/en/projects" : "/projects" },
      { name: project.title[lang], item: `${lang === "en" ? "/en" : ""}/project/${slug}` },
    ],
    alternateLanguages: [
      { lang: "de", href: `${SITE_URL}/project/${slug}` },
      { lang: "en", href: `${SITE_URL}/en/project/${slug}` },
      { lang: "x-default", href: `${SITE_URL}/project/${slug}` },
    ],
    customJsonLd: {
      "@context": "https://schema.org",
      "@type": "VisualArtwork",
      name: project.title[lang],
      description: project.subtitle[lang],
      image,
      creator: {
        "@type": "Organization",
        name: "Shams Consult",
        url: SITE_URL,
      },
      locationCreated: {
        "@type": "Place",
        name: project.location[lang],
      },
      dateCreated: project.year,
    },
  };
}

export function getBlogPostSeo(post: BlogPost, language: Language = "de"): SeoMetadata {
  const lang = language === "en" ? "en" : "de";
  const title = `${post.title[lang]} | Shams Consult ${lang === "en" ? "Journal" : "Magazin"}`;
  const description = post.excerpt[lang];
  const canonicalUrl = `${SITE_URL}${lang === "en" ? "/en" : ""}/blog/${post.slug}`;
  const image = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`;

  return {
    title,
    description,
    canonicalUrl,
    ogImage: image,
    ogType: "article",
    breadcrumbs: [
      { name: lang === "en" ? "Home" : "Start", item: lang === "en" ? "/en" : "/" },
      { name: lang === "en" ? "Journal" : "Magazin", item: lang === "en" ? "/en/blog" : "/blog" },
      { name: post.title[lang], item: `${lang === "en" ? "/en" : ""}/blog/${post.slug}` },
    ],
    alternateLanguages: [
      { lang: "de", href: `${SITE_URL}/blog/${post.slug}` },
      { lang: "en", href: `${SITE_URL}/en/blog/${post.slug}` },
      { lang: "x-default", href: `${SITE_URL}/blog/${post.slug}` },
    ],
    article: {
      publishedTime: post.isoDate,
      author: "Dipl.-Ing. Majeed Shams",
      section: post.category[lang],
    },
    customJsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title[lang],
      description: post.excerpt[lang],
      image,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
      author: {
        "@type": "Person",
        name: "Dipl.-Ing. Majeed Shams",
        jobTitle: lang === "en" ? "Licensed Architect & Urban Planner" : "Freier Architekt & Stadtplaner",
        url: `${SITE_URL}${lang === "en" ? "/en" : ""}/founder`,
      },
      publisher: {
        "@type": "Organization",
        name: "Shams Consult",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.png`,
        },
      },
    },
  };
}

export function getCaseStudySeo(caseStudy: CaseStudy, language: Language = "de"): SeoMetadata {
  const lang = language === "en" ? "en" : "de";
  const title = lang === "en" ? `Case Study: ${caseStudy.projectTitle.en} | Shams Consult` : `Fallstudie: ${caseStudy.projectTitle.de} | Shams Consult`;
  const description = `${caseStudy.subtitle[lang]} — ${caseStudy.rating}/5 stars from ${caseStudy.reviewerName}.`;
  const canonicalUrl = `${SITE_URL}${lang === "en" ? "/en" : ""}/case-study/${caseStudy.id}`;

  return {
    title,
    description,
    canonicalUrl,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "article",
    breadcrumbs: [
      { name: lang === "en" ? "Home" : "Start", item: lang === "en" ? "/en" : "/" },
      { name: lang === "en" ? "References" : "Referenzen", item: lang === "en" ? "/en/clients" : "/clients" },
      { name: caseStudy.projectTitle[lang], item: `${lang === "en" ? "/en" : ""}/case-study/${caseStudy.id}` },
    ],
    alternateLanguages: [
      { lang: "de", href: `${SITE_URL}/case-study/${caseStudy.id}` },
      { lang: "en", href: `${SITE_URL}/en/case-study/${caseStudy.id}` },
      { lang: "x-default", href: `${SITE_URL}/case-study/${caseStudy.id}` },
    ],
    customJsonLd: {
      "@context": "https://schema.org",
      "@type": "Review",
      name: caseStudy.projectTitle[lang],
      reviewBody: caseStudy.reviewText,
      reviewRating: {
        "@type": "Rating",
        ratingValue: caseStudy.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        "@type": "Person",
        name: caseStudy.reviewerName,
      },
      itemReviewed: {
        "@type": "Organization",
        name: "Shams Consult",
        url: SITE_URL,
      },
    },
  };
}
