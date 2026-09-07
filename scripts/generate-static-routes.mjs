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

function renderHtmlWithMeta(baseHtml, meta) {
  let html = baseHtml;

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
  console.log("\n🚀 Starting SEO Optimized Static Route & Sitemap Generation...");

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

  // Route definition map
  const routeConfigs = new Map();

  // 1. Primary Top-Level Routes
  routeConfigs.set("/services", {
    title: "Architekturleistungen & HOAI Leistungsphasen 1–9 | Shams Consult Frankfurt",
    description: "Ganzheitliche Architektur, rechtssichere Bauanträge, Bauvoranfragen und städtebauliche Planung im Rhein-Main-Gebiet. Uneingeschränkte Bauvorlageberechtigung.",
    canonicalUrl: `${SITE_URL}/services`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Leistungen", item: "/services" }],
    priority: "0.9",
    changefreq: "weekly",
  });

  routeConfigs.set("/projects", {
    title: "Realisierte Projekte & Bauten — Portfolio | Shams Consult",
    description: "Entdecken Sie unsere Referenzen: Mehrfamilienhäuser, Gewerbeimmobilien, Baugenehmigungen und Stadtplanung in Frankfurt am Main & Hessen.",
    canonicalUrl: `${SITE_URL}/projects`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Projekte", item: "/projects" }],
    priority: "0.9",
    changefreq: "weekly",
  });

  routeConfigs.set("/about", {
    title: "Über uns — Architekturbüro Shams Consult | Frankfurt & Rhein-Main",
    description: "Erfahren Sie mehr über Shams Consult: Staatlich anerkanntes Planungsbüro für Architektur & Stadtplanung (AKH Hessen Nr. 21886) in Frankfurt am Main.",
    canonicalUrl: `${SITE_URL}/about`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Über uns", item: "/about" }],
    priority: "0.8",
    changefreq: "monthly",
  });

  routeConfigs.set("/founder", {
    title: "Dipl.-Ing. Majeed Shams — Freier Architekt & Stadtplaner | Shams Consult",
    description: "Profil von Dipl.-Ing. (FH) Majeed Shams M.Eng.: Freier Architekt & Stadtplaner, AKH Hessen Mitglied (Nr. 21886), 15+ Jahre Planungserfahrung.",
    canonicalUrl: `${SITE_URL}/founder`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Gründer", item: "/founder" }],
    priority: "0.8",
    changefreq: "monthly",
  });

  routeConfigs.set("/research", {
    title: "Forschung, Thesen & Lehre | Shams Consult Architektur",
    description: "Wissenschaftliche Thesen und städtebauliche Forschungsschwerpunkte von Shams Consult an der Schnittstelle von Architektur und Urbanistik.",
    canonicalUrl: `${SITE_URL}/research`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Forschung", item: "/research" }],
    priority: "0.7",
    changefreq: "monthly",
  });

  routeConfigs.set("/blog", {
    title: "Fachmagazin für Architektur & Baurecht | Shams Consult",
    description: "Fachartikel zu Architektur, Bauordnungsrecht Hessen, HBO, nachhaltigem Bauen und Städtebau von Architekt Dipl.-Ing. Majeed Shams.",
    canonicalUrl: `${SITE_URL}/blog`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Magazin", item: "/blog" }],
    priority: "0.8",
    changefreq: "weekly",
  });

  routeConfigs.set("/clients", {
    title: "Auftraggeber, Partner & Referenzen | Shams Consult",
    description: "Erfolgreiche Zusammenarbeiten mit institutionellen Bauherren, Bauträgern, Kommunen und privaten Auftraggebern in Hessen.",
    canonicalUrl: `${SITE_URL}/clients`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Partner", item: "/clients" }],
    priority: "0.7",
    changefreq: "monthly",
  });

  routeConfigs.set("/site-visits", {
    title: "Baustelleneinblicke & Vor-Ort-Impressionen | Shams Consult",
    description: "Direkte Einblicke von der Baustelle: Qualitätskontrolle, VOB-konforme Bauüberwachung und Baufortschritte in Frankfurt und Rhein-Main.",
    canonicalUrl: `${SITE_URL}/site-visits`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Baustelleneinblicke", item: "/site-visits" }],
    priority: "0.7",
    changefreq: "weekly",
  });

  routeConfigs.set("/contact", {
    title: "Kontakt & Beratungstermin vereinbaren | Shams Consult",
    description: "Vereinbaren Sie ein unverbindliches Erstgespräch für Ihr Bauvorhaben in Frankfurt am Main oder im Rhein-Main-Gebiet. Telefon: +49 (0) 69 74 22 3 777.",
    canonicalUrl: `${SITE_URL}/contact`,
    breadcrumbs: [{ name: "Home", item: "/" }, { name: "Kontakt", item: "/contact" }],
    priority: "0.8",
    changefreq: "monthly",
  });

  // Legal Pages (noindex, follow)
  const legalConfigs = [
    {
      route: "/impressum",
      title: "Impressum & Berufsrecht | Shams Consult",
      description: "Impressum und berufsrechtliche Angaben des Architekturbüros Shams Consult in Frankfurt am Main.",
    },
    {
      route: "/datenschutz",
      title: "Datenschutzerklärung | Shams Consult",
      description: "Datenschutzerklärung der Shams Consult gemäß DSGVO.",
    },
    {
      route: "/widerruf",
      title: "Widerrufsbelehrung | Shams Consult",
      description: "Widerrufsbelehrung für Verbraucher bei Verträgen mit Shams Consult.",
    },
    {
      route: "/barrierefreiheit",
      title: "Erklärung zur Barrierefreiheit | Shams Consult",
      description: "Erklärung zur digitalen Barrierefreiheit gemäß BITV 2.0 und WCAG 2.1 AA.",
    },
  ];

  for (const legal of legalConfigs) {
    routeConfigs.set(legal.route, {
      title: legal.title,
      description: legal.description,
      canonicalUrl: `${SITE_URL}${legal.route}`,
      noIndex: true,
      priority: "0.2",
      changefreq: "yearly",
    });
  }

  // 2. Dynamic Projects
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const projImg = proj.image.startsWith("http") ? proj.image : `${SITE_URL}${proj.image.startsWith("/") ? "" : "/"}${proj.image}`;
    const meta = {
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
      image: projImg,
      imageTitle: proj.title.de,
    };

    routeConfigs.set(`/project/${slug}`, meta);
    if (proj.id && proj.id !== slug) {
      routeConfigs.set(`/project/${proj.id}`, meta);
    }
  }

  // 3. Dynamic Blog Posts
  for (const post of blogPosts) {
    const postImg = post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`;
    const meta = {
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
      lastmod: post.isoDate,
      changefreq: "monthly",
      image: postImg,
      imageTitle: post.title.de,
    };

    routeConfigs.set(`/blog/${post.slug}`, meta);
  }

  // 4. Dynamic Case Studies
  for (const cs of caseStudies) {
    const meta = {
      title: `Fallstudie: ${cs.projectTitle.de} | Shams Consult`,
      description: `${cs.subtitle.de} — Bewertung: ${cs.rating}/5 Sterne von ${cs.reviewerName}.`,
      canonicalUrl: `${SITE_URL}/case-study/${cs.id}`,
      ogImage: DEFAULT_IMAGE,
      ogType: "article",
      breadcrumbs: [
        { name: "Home", item: "/" },
        { name: "Referenzen", item: "/clients" },
        { name: cs.projectTitle.de, item: `/case-study/${cs.id}` },
      ],
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

    routeConfigs.set(`/case-study/${cs.id}`, meta);
  }

  // 5. Alias & Synonyms (Canonical points to the main canonical route to avoid duplicate content)
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
    const parent = routeConfigs.get(mapping.canonical);
    if (parent) {
      for (const alias of mapping.aliases) {
        routeConfigs.set(alias, {
          ...parent,
          isAlias: true,
        });
      }
    }
  }

  // Dynamic aliases for projects, blog, case studies
  for (const proj of projects) {
    const slug = proj.slug || proj.id;
    const parent = routeConfigs.get(`/project/${slug}`);
    if (parent) {
      routeConfigs.set(`/projekt/${slug}`, { ...parent, isAlias: true });
      routeConfigs.set(`/projekte/${slug}`, { ...parent, isAlias: true });
    }
  }

  for (const post of blogPosts) {
    const parent = routeConfigs.get(`/blog/${post.slug}`);
    if (parent) {
      routeConfigs.set(`/magazin/${post.slug}`, { ...parent, isAlias: true });
      routeConfigs.set(`/news/${post.slug}`, { ...parent, isAlias: true });
      routeConfigs.set(`/artikel/${post.slug}`, { ...parent, isAlias: true });
    }
  }

  for (const cs of caseStudies) {
    const parent = routeConfigs.get(`/case-study/${cs.id}`);
    if (parent) {
      routeConfigs.set(`/fallstudie/${cs.id}`, { ...parent, isAlias: true });
      routeConfigs.set(`/referenz/${cs.id}`, { ...parent, isAlias: true });
    }
  }

  // 6. Write route-specific index.html files
  console.log(`Writing customized HTML entry points for ${routeConfigs.size} routes...`);

  let count = 0;
  for (const [route, meta] of routeConfigs.entries()) {
    try {
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
