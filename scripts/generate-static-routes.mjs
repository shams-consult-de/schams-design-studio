import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

const SITE_URL = "https://shams-consult.de";
const DEFAULT_IMAGE = `${SITE_URL}/images/stadtvilla_mfa_roedermark.jpg`;

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getHreflangs(dePath, enPath) {
  const deNormalized = dePath === "/" || dePath === "" ? "/" : (dePath.startsWith("/") ? dePath : `/${dePath}`);
  const enNormalized = enPath === "/en" || enPath === "/en/" ? "/en" : (enPath.startsWith("/") ? enPath : `/${enPath}`);
  return [
    { lang: "de", href: `${SITE_URL}${deNormalized}` },
    { lang: "en", href: `${SITE_URL}${enNormalized}` },
    { lang: "x-default", href: `${SITE_URL}${deNormalized}` },
  ];
}

function renderHtmlWithMeta(baseHtml, meta) {
  let html = baseHtml;

  // 0. Update <html lang="...">
  const lang = meta.lang || (meta.canonicalUrl.includes("/en") ? "en" : "de");
  html = html.replace(/<html\s+lang=["'][^"']*["']/i, `<html lang="${lang}"`);

  // 1. Replace Title
  const titleTagRegex = /<title>[\s\S]*?<\/title>/i;
  if (titleTagRegex.test(html)) {
    html = html.replace(titleTagRegex, `<title>${escapeHtml(meta.title)}</title>`);
  }

  // 2. Replace Description
  const descRegex = /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  const newDesc = `<meta name="description" content="${escapeHtml(meta.description)}" />`;
  if (descRegex.test(html)) {
    html = html.replace(descRegex, newDesc);
  } else {
    html = html.replace("</head>", `  ${newDesc}\n</head>`);
  }

  // 3. Replace Canonical URL
  const canonicalRegex = /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i;
  const newCanonical = `<link rel="canonical" href="${meta.canonicalUrl}" />`;
  if (canonicalRegex.test(html)) {
    html = html.replace(canonicalRegex, newCanonical);
  } else {
    html = html.replace("</head>", `  ${newCanonical}\n</head>`);
  }

  // 3.5 Alternate Hreflang Tags
  if (meta.alternateLanguages && meta.alternateLanguages.length > 0) {
    let hreflangTags = "";
    for (const alt of meta.alternateLanguages) {
      hreflangTags += `\n    <link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`;
    }
    html = html.replace(/<link\s+rel=["']alternate["']\s+hreflang=["'][^"']*["']\s+href=["'][^"']*["']\s*\/?>\s*/gi, "");
    html = html.replace("</head>", `${hreflangTags}\n</head>`);
  }

  // 4. Replace Robots tag
  const robotsRegex = /<meta\s+name=["']robots["']\s+content=["'][\s\S]*?["']\s*\/?>/i;
  const robotsContent = meta.noIndex ? "noindex, follow" : "index, follow, max-image-preview:large";
  const newRobots = `<meta name="robots" content="${robotsContent}" />`;
  if (robotsRegex.test(html)) {
    html = html.replace(robotsRegex, newRobots);
  } else {
    html = html.replace("</head>", `  ${newRobots}\n</head>`);
  }

  // 5. Replace Open Graph Tags
  const image = meta.ogImage
    ? meta.ogImage.startsWith("http")
      ? meta.ogImage
      : `${SITE_URL}${meta.ogImage.startsWith("/") ? "" : "/"}${meta.ogImage}`
    : DEFAULT_IMAGE;

  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:image" content="${image}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:type" content="${meta.ogType || "website"}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:locale["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:locale" content="${lang === "en" ? "en_US" : "de_DE"}" />`
  );

  // 6. Replace Twitter Tags
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:image" content="${image}" />`
  );

  // 7. Inject Route Breadcrumb Schema & Structured Data into <head>
  let extraHead = "";
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
    extraHead += `\n    <script id="route-breadcrumb-schema" type="application/ld+json">${JSON.stringify(breadcrumbData)}</script>`;
  }

  if (meta.customJsonLd) {
    extraHead += `\n    <script id="route-detail-schema" type="application/ld+json">${JSON.stringify(meta.customJsonLd)}</script>`;
  }

  if (extraHead) {
    html = html.replace("</head>", `${extraHead}\n  </head>`);
  }

  return html;
}

async function generateStaticRoutes() {
  console.log("\n🚀 Starting SEO Optimized Static Route & Sitemap Generation (DE + EN)...");

  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseIndexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  // Load project, blog, and case study data
  const { projects } = await import(pathToFileURL(path.join(rootDir, "src", "data", "projects.ts")).href);
  const { blogPosts } = await import(pathToFileURL(path.join(rootDir, "src", "data", "blog.ts")).href);
  const { caseStudies } = await import(pathToFileURL(path.join(rootDir, "src", "data", "caseStudies.ts")).href);
  const { regionalLandingPages } = await import(pathToFileURL(path.join(rootDir, "src", "data", "regionalLandingPages.ts")).href);
  const { comparisonTopics } = await import(pathToFileURL(path.join(rootDir, "src", "data", "comparisons.ts")).href);

  // Route definition map
  const routeConfigs = new Map();

  // 0. Home Routes (DE + EN)
  const homeHreflangs = getHreflangs("/", "/en");
  routeConfigs.set("/", {
    title: "Shams Consult — Architekturbüro für Architektur, Stadtplanung & Projektentwicklung | Frankfurt & Rödermark",
    description: "Shams Consult — Architekturbüro für Architektur, Stadtplanung und Projektentwicklung in Frankfurt am Main & Rödermark (Rhein-Main). AKH Hessen Mitglied (Nr. 21886). 15+ Jahre Erfahrung. Jetzt Erstgespräch vereinbaren.",
    canonicalUrl: `${SITE_URL}/`,
    breadcrumbs: [{ name: "Home", item: "/" }],
    priority: "1.0",
    changefreq: "weekly",
    lang: "de",
    alternateLanguages: homeHreflangs,
  });

  routeConfigs.set("/en", {
    title: "Shams Consult — Architecture, Urban Planning & Project Development | Frankfurt & Rödermark",
    description: "Shams Consult — Architectural practice for architecture, urban planning & project development in Frankfurt & Rödermark (Rhine-Main). AKH Hessen Member (No. 21886). 15+ years experience. Schedule your consultation today.",
    canonicalUrl: `${SITE_URL}/en`,
    breadcrumbs: [{ name: "Home", item: "/en" }],
    priority: "1.0",
    changefreq: "weekly",
    lang: "en",
    alternateLanguages: homeHreflangs,
  });

  // 1. Primary Top-Level Routes (German + English)
  const topRoutes = [
    {
      deRoute: "/services",
      enRoute: "/en/services",
      deTitle: "Architekturleistungen & HOAI Leistungsphasen 1–9 | Shams Consult Frankfurt",
      deDesc: "Ganzheitliche Architektur, rechtssichere Bauanträge, Bauvoranfragen und städtebauliche Planung im Rhein-Main-Gebiet. Uneingeschränkte Bauvorlageberechtigung.",
      enTitle: "Architectural Services & HOAI Phases 1–9 | Shams Consult Frankfurt",
      enDesc: "Holistic architecture, code-compliant building applications, preliminary zoning inquiries and urban master planning in Rhine-Main.",
      deName: "Leistungen",
      enName: "Services",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      deRoute: "/projects",
      enRoute: "/en/projects",
      deTitle: "Realisierte Projekte & Bauten — Portfolio | Shams Consult",
      deDesc: "Entdecken Sie unsere Referenzen: Mehrfamilienhäuser, Gewerbeimmobilien, Baugenehmigungen und Stadtplanung in Frankfurt am Main & Hessen.",
      enTitle: "Realized Projects & Architecture Portfolio | Shams Consult",
      enDesc: "Explore our architectural references: residential complexes, commercial developments, and urban master plans in Frankfurt & Rhine-Main.",
      deName: "Projekte",
      enName: "Projects",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      deRoute: "/about",
      enRoute: "/en/about",
      deTitle: "Über uns — Architekturbüro Shams Consult | Frankfurt & Rhein-Main",
      deDesc: "Erfahren Sie mehr über Shams Consult: Staatlich anerkanntes Planungsbüro für Architektur & Stadtplanung (AKH Hessen Nr. 21886) in Frankfurt am Main.",
      enTitle: "About the Practice — Shams Consult Architecture | Frankfurt & Rhine-Main",
      enDesc: "Learn about Shams Consult: Licensed architectural practice & urban planning consultancy (AKH Hessen No. 21886) in Frankfurt am Main.",
      deName: "Über uns",
      enName: "About Us",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/founder",
      enRoute: "/en/founder",
      deTitle: "Dipl.-Ing. Majeed Shams — Freier Architekt & Stadtplaner | Shams Consult",
      deDesc: "Profil von Dipl.-Ing. (FH) Majeed Shams M.Eng.: Freier Architekt & Stadtplaner, AKH Hessen Mitglied (Nr. 21886), 15+ Jahre Planungserfahrung.",
      enTitle: "Dipl.-Ing. Majeed Shams — Architect & Urban Planner | Shams Consult",
      enDesc: "Professional profile of Dipl.-Ing. (FH) Majeed Shams M.Eng.: Licensed German Architect & Urban Planner, AKH Hesse Member No. 21886.",
      deName: "Gründer",
      enName: "Founder",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      deRoute: "/research",
      enRoute: "/en/research",
      deTitle: "Forschung, Thesen & Lehre | Shams Consult Architektur",
      deDesc: "Wissenschaftliche Thesen und städtebauliche Forschungsschwerpunkte von Shams Consult an der Schnittstelle von Architektur und Urbanistik.",
      enTitle: "Research, Academic Theses & Teaching | Shams Consult Architecture",
      enDesc: "Scientific theses and urban planning research by Shams Consult at the intersection of architecture and urbanism.",
      deName: "Forschung",
      enName: "Research",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      deRoute: "/blog",
      enRoute: "/en/blog",
      deTitle: "Fachmagazin für Architektur & Baurecht | Shams Consult",
      deDesc: "Fachartikel zu Architektur, Bauordnungsrecht Hessen, HBO, nachhaltigem Bauen und Städtebau von Architekt Dipl.-Ing. Majeed Shams.",
      enTitle: "Architecture Journal & Insights | Shams Consult Frankfurt",
      enDesc: "Expert articles on German building codes (HBO), sustainability, and urban planning by Dipl.-Ing. Majeed Shams.",
      deName: "Magazin",
      enName: "Journal",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      deRoute: "/clients",
      enRoute: "/en/clients",
      deTitle: "Auftraggeber, Partner & Referenzen | Shams Consult",
      deDesc: "Erfolgreiche Zusammenarbeiten mit institutionellen Bauherren, Bauträgern, Kommunen und privaten Auftraggebern in Hessen.",
      enTitle: "Clients, Partners & References | Shams Consult",
      enDesc: "Successful collaborations with institutional clients, developers, municipalities, and private builders in Germany.",
      deName: "Partner",
      enName: "Partners",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      deRoute: "/site-visits",
      enRoute: "/en/site-visits",
      deTitle: "Baustelleneinblicke & Vor-Ort-Impressionen | Shams Consult",
      deDesc: "Direkte Einblicke von der Baustelle: Qualitätskontrolle, VOB-konforme Bauüberwachung und Baufortschritte in Frankfurt und Rhein-Main.",
      enTitle: "Site Visits & Construction Insights | Shams Consult",
      enDesc: "On-site construction supervision, German VOB compliance, and progress updates from projects across Rhine-Main.",
      deName: "Baustelleneinblicke",
      enName: "Site Visits",
      priority: "0.7",
      changefreq: "weekly",
    },
    {
      deRoute: "/contact",
      enRoute: "/en/contact",
      deTitle: "Kontakt & Beratungstermin vereinbaren | Shams Consult",
      deDesc: "Vereinbaren Sie ein unverbindliches Erstgespräch für Ihr Bauvorhaben in Frankfurt am Main oder im Rhein-Main-Gebiet. Telefon: +49 (0) 69 74 22 3 777.",
      enTitle: "Contact & Consultation Booking | Shams Consult",
      enDesc: "Schedule a non-binding initial consultation for your building project in Frankfurt or Rhine-Main. Phone: +49 (0) 69 74 22 3 777.",
      deName: "Kontakt",
      enName: "Contact",
      priority: "0.8",
      changefreq: "monthly",
    },
  ];

  for (const r of topRoutes) {
    const hreflangs = getHreflangs(r.deRoute, r.enRoute);
    routeConfigs.set(r.deRoute, {
      title: r.deTitle,
      description: r.deDesc,
      canonicalUrl: `${SITE_URL}${r.deRoute}`,
      breadcrumbs: [{ name: "Home", item: "/" }, { name: r.deName, item: r.deRoute }],
      priority: r.priority,
      changefreq: r.changefreq,
      lang: "de",
      alternateLanguages: hreflangs,
    });
    routeConfigs.set(r.enRoute, {
      title: r.enTitle,
      description: r.enDesc,
      canonicalUrl: `${SITE_URL}${r.enRoute}`,
      breadcrumbs: [{ name: "Home", item: "/en" }, { name: r.enName, item: r.enRoute }],
      priority: r.priority,
      changefreq: r.changefreq,
      lang: "en",
      alternateLanguages: hreflangs,
    });
  }

  // 1.05 Comparison & Decision Guide Routes (DE + EN)
  const compHreflangs = getHreflangs("/vergleich", "/en/vergleich");
  routeConfigs.set("/vergleich", {
    title: "Architektur-Vergleich & Entscheidungshilfe für Bauherren | Shams Consult",
    description: "Boutique-Architekturbüro vs. Großbüro, Freier Architekt vs. Bauträger, Vollarchitektur vs. reiner Entwurf: Objektiver Leitfaden für Bauherren in Hessen.",
    canonicalUrl: `${SITE_URL}/vergleich`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Vergleiche", item: "/vergleich" }],
    priority: "0.8",
    changefreq: "monthly",
    lang: "de",
    alternateLanguages: compHreflangs,
  });
  routeConfigs.set("/en/vergleich", {
    title: "Architecture Comparisons & Decision Guide for Clients | Shams Consult",
    description: "Boutique architecture firm vs. large corporate firm, licensed architect vs. general contractor: Objective decision guide for builders in Germany.",
    canonicalUrl: `${SITE_URL}/en/vergleich`,
    breadcrumbs: [{ name: "Home", item: "/en" }, { name: "Comparisons", item: "/en/vergleich" }],
    priority: "0.8",
    changefreq: "monthly",
    lang: "en",
    alternateLanguages: compHreflangs,
  });

  for (const comp of comparisonTopics) {
    const hreflangs = getHreflangs(`/vergleich/${comp.slug}`, `/en/vergleich/${comp.slug}`);
    const metaDe = {
      title: comp.metaTitle.de,
      description: comp.metaDescription.de,
      canonicalUrl: `${SITE_URL}/vergleich/${comp.slug}`,
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Vergleiche", item: "/vergleich" },
        { name: comp.badge.de, item: `/vergleich/${comp.slug}` },
      ],
      priority: "0.8",
      changefreq: "monthly",
      lang: "de",
      alternateLanguages: hreflangs,
    };
    const metaEn = {
      title: comp.metaTitle.en || comp.metaTitle.de,
      description: comp.metaDescription.en || comp.metaDescription.de,
      canonicalUrl: `${SITE_URL}/en/vergleich/${comp.slug}`,
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Comparisons", item: "/en/vergleich" },
        { name: comp.badge.en || comp.badge.de, item: `/en/vergleich/${comp.slug}` },
      ],
      priority: "0.8",
      changefreq: "monthly",
      lang: "en",
      alternateLanguages: hreflangs,
    };
    routeConfigs.set(`/vergleich/${comp.slug}`, metaDe);
    routeConfigs.set(`/${comp.slug}`, metaDe);
    routeConfigs.set(`/en/vergleich/${comp.slug}`, metaEn);
    routeConfigs.set(`/en/${comp.slug}`, metaEn);
  }

  // 1.1 City-Specific Hub-and-Spoke Regional Landing Pages (DE + EN)
  for (const page of Object.values(regionalLandingPages)) {
    const metaTitleDe = typeof page.metaTitle === "string" ? page.metaTitle : (page.metaTitle?.de || "");
    const metaTitleEn = typeof page.metaTitle === "object" ? (page.metaTitle?.en || metaTitleDe) : metaTitleDe;
    const metaDescriptionDe = typeof page.metaDescription === "string" ? page.metaDescription : (page.metaDescription?.de || "");
    const metaDescriptionEn = typeof page.metaDescription === "object" ? (page.metaDescription?.en || metaDescriptionDe) : metaDescriptionDe;
    const eyebrowDe = typeof page.eyebrow === "string" ? page.eyebrow : (page.eyebrow?.de || "");
    const eyebrowEn = typeof page.eyebrow === "object" ? (page.eyebrow?.en || eyebrowDe) : eyebrowDe;
    const h1De = typeof page.h1 === "string" ? page.h1 : (page.h1?.de || "");
    const cityNameDe = typeof page.office?.city === "string" ? page.office.city : (page.office?.city?.de || "");

    const hreflangs = getHreflangs(page.path, `/en${page.path}`);

    const localBusinessSchema = {
      "@type": ["LocalBusiness", "ProfessionalService", "ArchitecturalService"],
      name: `Shams Consult — ${h1De}`,
      description: metaDescriptionDe,
      url: `${SITE_URL}${page.path}`,
      telephone: page.office.phoneHref.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: page.office.street,
        addressLocality: cityNameDe.replace(/^\d+\s*/, "").replace(/\(.*?\)/, "").trim(),
        postalCode: cityNameDe.match(/\d{5}/)?.[0] || "60596",
        addressCountry: "DE",
      },
    };

    const graph = [localBusinessSchema];

    if (page.faqs && page.faqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: typeof faq.question === "string" ? faq.question : (faq.question?.de || ""),
          acceptedAnswer: {
            "@type": "Answer",
            text: typeof faq.answer === "string" ? faq.answer : (faq.answer?.de || ""),
          },
        })),
      });
    }

    routeConfigs.set(page.path, {
      title: metaTitleDe,
      description: metaDescriptionDe,
      canonicalUrl: `${SITE_URL}${page.path}`,
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: eyebrowDe, item: page.path },
      ],
      priority: "0.9",
      changefreq: "weekly",
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@graph": graph,
      },
    });

    routeConfigs.set(`/en${page.path}`, {
      title: metaTitleEn,
      description: metaDescriptionEn,
      canonicalUrl: `${SITE_URL}/en${page.path}`,
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: eyebrowEn, item: `/en${page.path}` },
      ],
      priority: "0.9",
      changefreq: "weekly",
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@graph": graph,
      },
    });
  }

  // Legal Pages (noindex, follow)
  const legalConfigs = [
    {
      deRoute: "/impressum",
      enRoute: "/en/impressum",
      deTitle: "Impressum & Berufsrecht | Shams Consult",
      enTitle: "Legal Notice & Regulatory Details | Shams Consult",
      deDesc: "Impressum und berufsrechtliche Angaben des Architekturbüros Shams Consult in Frankfurt am Main.",
      enDesc: "Legal notice and regulatory details of Shams Consult architecture practice in Frankfurt am Main.",
    },
    {
      deRoute: "/datenschutz",
      enRoute: "/en/datenschutz",
      deTitle: "Datenschutzerklärung | Shams Consult",
      enTitle: "Privacy Policy | Shams Consult",
      deDesc: "Datenschutzerklärung der Shams Consult gemäß DSGVO.",
      enDesc: "Privacy policy of Shams Consult in accordance with GDPR.",
    },
    {
      deRoute: "/widerruf",
      enRoute: "/en/widerruf",
      deTitle: "Widerrufsbelehrung | Shams Consult",
      enTitle: "Right of Withdrawal | Shams Consult",
      deDesc: "Widerrufsbelehrung für Verbraucher bei Verträgen mit Shams Consult.",
      enDesc: "Information on the right of withdrawal for consumer contracts with Shams Consult.",
    },
    {
      deRoute: "/barrierefreiheit",
      enRoute: "/en/barrierefreiheit",
      deTitle: "Erklärung zur Barrierefreiheit | Shams Consult",
      enTitle: "Accessibility Statement | Shams Consult",
      deDesc: "Erklärung zur digitalen Barrierefreiheit gemäß BITV 2.0 und WCAG 2.1 AA.",
      enDesc: "Accessibility statement in accordance with BITV 2.0 and WCAG 2.1 AA.",
    },
  ];

  for (const legal of legalConfigs) {
    const hreflangs = getHreflangs(legal.deRoute, legal.enRoute);
    routeConfigs.set(legal.deRoute, {
      title: legal.deTitle,
      description: legal.deDesc,
      canonicalUrl: `${SITE_URL}${legal.deRoute}`,
      noIndex: true,
      priority: "0.2",
      changefreq: "yearly",
      lang: "de",
      alternateLanguages: hreflangs,
    });
    routeConfigs.set(legal.enRoute, {
      title: legal.enTitle,
      description: legal.enDesc,
      canonicalUrl: `${SITE_URL}${legal.enRoute}`,
      noIndex: true,
      priority: "0.2",
      changefreq: "yearly",
      lang: "en",
      alternateLanguages: hreflangs,
    });
  }

  // 2. Dynamic Projects (DE + EN)
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const projImg = proj.image.startsWith("http") ? proj.image : `${SITE_URL}${proj.image.startsWith("/") ? "" : "/"}${proj.image}`;
    const hreflangs = getHreflangs(`/project/${slug}`, `/en/project/${slug}`);

    const metaDe = {
      title: `${proj.title.de} — Referenz | Shams Consult`,
      description: `${proj.categoryLabel.de}: ${proj.subtitle.de} — Standort: ${proj.location.de} (${proj.year}).`,
      canonicalUrl: `${SITE_URL}/project/${slug}`,
      ogImage: projImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Projekte", item: "/projects" },
        { name: proj.title.de, item: `/project/${slug}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: proj.title.de,
        description: proj.subtitle.de,
        image: projImg,
        creator: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
        locationCreated: {
          "@type": "Place",
          name: proj.location.de,
        },
        dateCreated: proj.year,
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    const metaEn = {
      title: `${proj.title.en} — Reference | Shams Consult`,
      description: `${proj.categoryLabel.en}: ${proj.subtitle.en} — Location: ${proj.location.en} (${proj.year}).`,
      canonicalUrl: `${SITE_URL}/en/project/${slug}`,
      ogImage: projImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Projects", item: "/en/projects" },
        { name: proj.title.en, item: `/en/project/${slug}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "VisualArtwork",
        name: proj.title.en,
        description: proj.subtitle.en,
        image: projImg,
        creator: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
        locationCreated: {
          "@type": "Place",
          name: proj.location.en,
        },
        dateCreated: proj.year,
      },
      priority: "0.8",
      changefreq: "monthly",
    };

    routeConfigs.set(`/project/${slug}`, metaDe);
    routeConfigs.set(`/en/project/${slug}`, metaEn);
  }

  // 3. Dynamic Blog Posts (DE + EN)
  for (const post of blogPosts) {
    const postImg = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`;
    const hreflangs = getHreflangs(`/blog/${post.slug}`, `/en/blog/${post.slug}`);

    const metaDe = {
      title: `${post.title.de} | Shams Consult Magazin`,
      description: post.excerpt.de,
      canonicalUrl: `${SITE_URL}/blog/${post.slug}`,
      ogImage: postImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Magazin", item: "/blog" },
        { name: post.title.de, item: `/blog/${post.slug}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.de,
        description: post.excerpt.de,
        image: postImg,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: "Dipl.-Ing. Majeed Shams",
          jobTitle: "Freier Architekt & Stadtplaner",
          url: `${SITE_URL}/founder`,
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
      priority: "0.8",
      changefreq: "monthly",
    };

    const metaEn = {
      title: `${post.title.en} | Shams Consult Journal`,
      description: post.excerpt.en,
      canonicalUrl: `${SITE_URL}/en/blog/${post.slug}`,
      ogImage: postImg,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "Journal", item: "/en/blog" },
        { name: post.title.en, item: `/en/blog/${post.slug}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title.en,
        description: post.excerpt.en,
        image: postImg,
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: "Dipl.-Ing. Majeed Shams",
          jobTitle: "Licensed Architect & Urban Planner",
          url: `${SITE_URL}/en/founder`,
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
      priority: "0.8",
      changefreq: "monthly",
    };

    routeConfigs.set(`/blog/${post.slug}`, metaDe);
    routeConfigs.set(`/en/blog/${post.slug}`, metaEn);
  }

  // 4. Dynamic Case Studies (DE + EN)
  for (const cs of caseStudies) {
    const hreflangs = getHreflangs(`/case-study/${cs.id}`, `/en/case-study/${cs.id}`);

    const metaDe = {
      title: `Fallstudie: ${cs.projectTitle.de} | Shams Consult`,
      description: `${cs.subtitle.de} — Erfolgreiche Begleitung mit ${cs.rating}/5 Sternen von ${cs.reviewerName}.`,
      canonicalUrl: `${SITE_URL}/case-study/${cs.id}`,
      ogImage: DEFAULT_IMAGE,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Referenzen", item: "/clients" },
        { name: cs.projectTitle.de, item: `/case-study/${cs.id}` },
      ],
      lang: "de",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "Review",
        name: cs.projectTitle.de,
        reviewBody: cs.reviewText,
        reviewRating: {
          "@type": "Rating",
          ratingValue: cs.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Person",
          name: cs.reviewerName,
        },
        itemReviewed: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
      },
      priority: "0.7",
      changefreq: "monthly",
    };

    const metaEn = {
      title: `Case Study: ${cs.projectTitle.en} | Shams Consult`,
      description: `${cs.subtitle.en} — ${cs.rating}/5 stars rating from ${cs.reviewerName}.`,
      canonicalUrl: `${SITE_URL}/en/case-study/${cs.id}`,
      ogImage: DEFAULT_IMAGE,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/en" },
        { name: "References", item: "/en/clients" },
        { name: cs.projectTitle.en, item: `/en/case-study/${cs.id}` },
      ],
      lang: "en",
      alternateLanguages: hreflangs,
      customJsonLd: {
        "@context": "https://schema.org",
        "@type": "Review",
        name: cs.projectTitle.en,
        reviewBody: cs.reviewText,
        reviewRating: {
          "@type": "Rating",
          ratingValue: cs.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Person",
          name: cs.reviewerName,
        },
        itemReviewed: {
          "@type": "Organization",
          name: "Shams Consult",
          url: SITE_URL,
        },
      },
      priority: "0.7",
      changefreq: "monthly",
    };

    routeConfigs.set(`/case-study/${cs.id}`, metaDe);
    routeConfigs.set(`/en/case-study/${cs.id}`, metaEn);
  }

  // 5. Alias & Synonyms (Canonical points to the main canonical route)
  const aliasMappings = [
    // About aliases
    { aliases: ["/ueber-uns", "/über-uns", "/wir-ueber-uns", "/buero", "/büro", "/team", "/profil", "/agentur"], canonical: "/about" },
    // Projects aliases
    { aliases: ["/projekte", "/portfolio", "/bauten", "/arbeiten"], canonical: "/projects" },
    // Founder aliases
    { aliases: ["/gruender", "/gründer", "/inhaber", "/vita", "/architekt"], canonical: "/founder" },
    // Research aliases
    { aliases: ["/forschung", "/lehre", "/thesen", "/publikationen"], canonical: "/research" },
    // Clients aliases
    { aliases: ["/kunden", "/partner", "/partners", "/referenzen", "/auftraggeber"], canonical: "/clients" },
    // Site Visits aliases
    { aliases: ["/album", "/einblicke", "/vor-ort", "/baustellen"], canonical: "/site-visits" },
    // Blog aliases
    { aliases: ["/magazin", "/news", "/aktuelles", "/artikel", "/beitraege"], canonical: "/blog" },
    // Services aliases
    { aliases: ["/leistungen", "/hoai"], canonical: "/services" },
    // Contact aliases
    { aliases: ["/kontakt", "/beratung", "/termin"], canonical: "/contact" },
    // Legal aliases
    { aliases: ["/imprint"], canonical: "/impressum" },
    { aliases: ["/privacy", "/datenschutzerklaerung", "/datenschutzerklärung"], canonical: "/datenschutz" },
    { aliases: ["/widerrufsbelehrung"], canonical: "/widerruf" },
    { aliases: ["/accessibility"], canonical: "/barrierefreiheit" },
  ];

  for (const mapping of aliasMappings) {
    const parentDe = routeConfigs.get(mapping.canonical);
    if (parentDe) {
      for (const alias of mapping.aliases) {
        routeConfigs.set(alias, { ...parentDe, isAlias: true });
        routeConfigs.set(`/en${alias}`, {
          ...parentDe,
          title: routeConfigs.get(`/en${mapping.canonical}`)?.title || parentDe.title,
          canonicalUrl: `${SITE_URL}/en${mapping.canonical}`,
          isAlias: true,
          lang: "en",
        });
      }
    }
  }

  // Dynamic aliases for projects, blog, case studies
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const parentDe = routeConfigs.get(`/project/${slug}`);
    const parentEn = routeConfigs.get(`/en/project/${slug}`);
    if (parentDe) {
      routeConfigs.set(`/projekt/${slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/projekte/${slug}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/projekt/${slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/projekte/${slug}`, { ...parentEn, isAlias: true });
    }
  }

  for (const post of blogPosts) {
    const parentDe = routeConfigs.get(`/blog/${post.slug}`);
    const parentEn = routeConfigs.get(`/en/blog/${post.slug}`);
    if (parentDe) {
      routeConfigs.set(`/magazin/${post.slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/news/${post.slug}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/artikel/${post.slug}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/magazin/${post.slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/news/${post.slug}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/artikel/${post.slug}`, { ...parentEn, isAlias: true });
    }
  }

  for (const cs of caseStudies) {
    const parentDe = routeConfigs.get(`/case-study/${cs.id}`);
    const parentEn = routeConfigs.get(`/en/case-study/${cs.id}`);
    if (parentDe) {
      routeConfigs.set(`/fallstudie/${cs.id}`, { ...parentDe, isAlias: true });
      routeConfigs.set(`/referenz/${cs.id}`, { ...parentDe, isAlias: true });
    }
    if (parentEn) {
      routeConfigs.set(`/en/fallstudie/${cs.id}`, { ...parentEn, isAlias: true });
      routeConfigs.set(`/en/referenz/${cs.id}`, { ...parentEn, isAlias: true });
    }
  }

  // 6. Write route-specific index.html files
  console.log(`Writing customized HTML entry points for ${routeConfigs.size} routes...`);

  let count = 0;
  for (const [route, meta] of routeConfigs.entries()) {
    try {
      if (route === "/") {
        const customizedHtml = renderHtmlWithMeta(baseIndexHtml, meta);
        fs.writeFileSync(path.join(distDir, "index.html"), customizedHtml, "utf-8");
        count++;
        continue;
      }
      const parts = route.split("/").filter(Boolean);
      const targetDir = path.join(distDir, ...parts);
      fs.mkdirSync(targetDir, { recursive: true });

      const customizedHtml = renderHtmlWithMeta(baseIndexHtml, meta);
      fs.writeFileSync(path.join(targetDir, "index.html"), customizedHtml, "utf-8");
      count++;
    } catch (err) {
      console.error(`  ✗ Error creating route ${route}:`, err);
    }
  }

  // Write customized 404.html fallback
  const notFoundMeta = {
    title: "Seite nicht gefunden (404) | Shams Consult",
    description: "Die gewünschte Seite existiert leider nicht. Besuchen Sie unsere Startseite oder nehmen Sie Kontakt auf.",
    canonicalUrl: `${SITE_URL}/404`,
    noIndex: true,
  };
  fs.writeFileSync(path.join(distDir, "404.html"), renderHtmlWithMeta(baseIndexHtml, notFoundMeta), "utf-8");
  console.log("  ✓ Created optimized dist/404.html");

  // 7. Generate XML Sitemap (Only canonical, non-alias, indexable URLs)
  console.log("\n🗺️ Generating XML Sitemap...");

  const todayIso = new Date().toISOString().split("T")[0];
  const seenUrls = new Set([`${SITE_URL}/`]);
  const sitemapUrls = [
    {
      loc: `${SITE_URL}/`,
      priority: "1.0",
      changefreq: "weekly",
      lastmod: todayIso,
    },
  ];

  for (const [route, meta] of routeConfigs.entries()) {
    // Only include canonical pages that are not aliases and not noIndex
    if (!meta.isAlias && !meta.noIndex && route !== "/") {
      if (!seenUrls.has(meta.canonicalUrl)) {
        seenUrls.add(meta.canonicalUrl);
        sitemapUrls.push({
          loc: meta.canonicalUrl,
          priority: meta.priority || "0.7",
          changefreq: meta.changefreq || "monthly",
          lastmod: meta.lastmod || todayIso,
          image: meta.image,
          imageTitle: meta.imageTitle,
        });
      }
    }
  }

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemapXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  sitemapXml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const item of sitemapUrls) {
    sitemapXml += `  <url>\n`;
    sitemapXml += `    <loc>${escapeHtml(item.loc)}</loc>\n`;
    sitemapXml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    sitemapXml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    sitemapXml += `    <priority>${item.priority}</priority>\n`;
    if (item.image) {
      sitemapXml += `    <image:image>\n`;
      sitemapXml += `      <image:loc>${escapeHtml(item.image)}</image:loc>\n`;
      if (item.imageTitle) {
        sitemapXml += `      <image:title>${escapeHtml(item.imageTitle)}</image:title>\n`;
      }
      sitemapXml += `    </image:image>\n`;
    }
    sitemapXml += `  </url>\n`;
  }

  sitemapXml += `</urlset>\n`;

  // Write to both dist/sitemap.xml and public/sitemap.xml
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf-8");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8");

  console.log(`  ✓ Generated sitemap.xml with ${sitemapUrls.length} canonical URLs in public/ and dist/`);
  console.log(`🎉 Successfully created ${count} static route entry points with tailored SEO metadata!\n`);
}

generateStaticRoutes().catch((err) => {
  console.error("Static route generation failed:", err);
  process.exit(1);
});
