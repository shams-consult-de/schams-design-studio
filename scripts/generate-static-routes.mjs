import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

async function generateStaticRoutes() {
  console.log("\n🚀 Generating Static Route HTML Files for Production...");

  const indexHtmlPath = path.join(distDir, "index.html");
  if (!fs.existsSync(indexHtmlPath)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

  // 1. Static Top-Level and Alias Routes
  const staticRoutes = [
    "/about",
    "/ueber-uns",
    "/über-uns",
    "/wir-ueber-uns",
    "/buero",
    "/büro",
    "/team",
    "/projects",
    "/projekte",
    "/portfolio",
    "/clients",
    "/kunden",
    "/partner",
    "/partners",
    "/site-visits",
    "/album",
    "/einblicke",
    "/vor-ort",
    "/founder",
    "/gruender",
    "/gründer",
    "/inhaber",
    "/vita",
    "/research",
    "/forschung",
    "/lehre",
    "/blog",
    "/magazin",
    "/news",
    "/services",
    "/leistungen",
    "/hoai",
    "/kontakt",
    "/contact",
    "/beratung",
    "/termin",
    "/impressum",
    "/imprint",
    "/datenschutz",
    "/privacy",
    "/datenschutzerklaerung",
    "/datenschutzerklärung",
    "/widerruf",
    "/widerrufsbelehrung",
    "/barrierefreiheit",
    "/accessibility",
  ];

  // 2. Dynamic Project Routes
  try {
    const projectsFile = fs.readFileSync(path.join(rootDir, "src", "data", "projects.ts"), "utf-8");
    const slugMatches = [...projectsFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
    for (const slug of slugMatches) {
      staticRoutes.push(`/project/${slug}`);
      staticRoutes.push(`/projekt/${slug}`);
    }
  } catch (err) {
    console.warn("Could not extract project slugs:", err);
  }

  // 3. Dynamic Blog Routes
  try {
    const blogFile = fs.readFileSync(path.join(rootDir, "src", "data", "blog.ts"), "utf-8");
    const slugMatches = [...blogFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
    for (const slug of slugMatches) {
      staticRoutes.push(`/blog/${slug}`);
      staticRoutes.push(`/magazin/${slug}`);
    }
  } catch (err) {
    console.warn("Could not extract blog slugs:", err);
  }

  // 4. Dynamic Case Study Routes
  try {
    const caseStudyFile = fs.readFileSync(path.join(rootDir, "src", "data", "caseStudies.ts"), "utf-8");
    const idMatches = [...caseStudyFile.matchAll(/id:\s*["']([^"']+)["']/g)].map((m) => m[1]);
    for (const id of idMatches) {
      staticRoutes.push(`/case-study/${id}`);
      staticRoutes.push(`/fallstudie/${id}`);
    }
  } catch (err) {
    console.warn("Could not extract case study IDs:", err);
  }

  const uniqueRoutes = Array.from(new Set(staticRoutes));
  console.log(`Writing index.html entry points for ${uniqueRoutes.length} routes...`);

  let count = 0;
  for (const route of uniqueRoutes) {
    try {
      const parts = route.split("/").filter(Boolean);
      const targetDir = path.join(distDir, ...parts);
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.join(targetDir, "index.html"), indexHtml, "utf-8");
      count++;
    } catch (err) {
      console.error(`  ✗ Error creating route ${route}:`, err);
    }
  }

  // Write 404.html fallback
  fs.writeFileSync(path.join(distDir, "404.html"), indexHtml, "utf-8");
  console.log("  ✓ Created dist/404.html fallback");

  console.log(`🎉 Successfully created ${count} static route entry points in dist/!\n`);
}

generateStaticRoutes().catch((err) => {
  console.error("Static route generation failed:", err);
  process.exit(1);
});
