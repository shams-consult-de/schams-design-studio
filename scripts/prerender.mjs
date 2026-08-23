import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
// Nitro writes either to .output/ (older config) or dist/ (newer). Detect it.
const candidates = [
  { server: path.join(rootDir, ".output", "server", "index.mjs"), public: path.join(rootDir, ".output", "public") },
  { server: path.join(rootDir, "dist", "server", "index.mjs"), public: path.join(rootDir, "dist", "client") },
];
const detected = candidates.find((c) => fs.existsSync(c.server)) ?? candidates[0];
const outputPublicDir = detected.public;
const serverEntryPath = detected.server;
const staticDir = path.join(rootDir, "build-static");

// List of all static routes to pre-render
const staticRoutes = [
  "/",
  "/leistungen",
  "/architektur",
  "/stadtplanung",
  "/barrierefreiheit",
  "/projekte",
  "/buero",
  "/philosophie",
  "/forschung",
  "/kundenfeedback",
  "/karriere",
  "/blog",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/geschichte",
];

// Read blog slugs dynamically from src/lib/blog.ts
function getBlogRoutes() {
  try {
    const blogFile = fs.readFileSync(path.join(rootDir, "src", "lib", "blog.ts"), "utf-8");
    const slugMatches = [...blogFile.matchAll(/slug:\s*["']([^"']+)["']/g)].map(
      (m) => `/blog/${m[1]}`,
    );
    return Array.from(new Set(slugMatches));
  } catch (err) {
    console.warn("Could not read blog slugs:", err);
    return [];
  }
}

async function prerender() {
  console.log("\n🚀 Starting Static Pre-Rendering for IONOS...");

  if (!fs.existsSync(serverEntryPath)) {
    console.error(`Server entry not found at ${serverEntryPath}. Run npm run build first.`);
    process.exit(1);
  }

  const serverModule = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);
  const handler = serverModule.default;

  const allRoutes = [...new Set([...staticRoutes, ...getBlogRoutes()])];
  console.log(`Pre-rendering ${allRoutes.length} routes into static HTML files...`);

  let renderedCount = 0;

  for (const route of allRoutes) {
    try {
      const url = `https://shams-consult.de${route}`;
      const request = new Request(url, {
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml",
          "User-Agent": "Prerenderer/1.0",
        },
      });

      const dummyCtx = {
        waitUntil: () => {},
        passThroughOnException: () => {},
        context: {
          waitUntil: () => {},
        },
      };
      const response = await handler.fetch(request, {}, dummyCtx);
      if (response.status !== 200 && response.status !== 304) {
        console.warn(`⚠️ Warning: Route ${route} returned status ${response.status}`);
      }

      let html = await response.text();

      // Ensure proper base / relative paths if necessary
      const targetDir =
        route === "/"
          ? outputPublicDir
          : path.join(outputPublicDir, ...route.split("/").filter(Boolean));
      fs.mkdirSync(targetDir, { recursive: true });

      const targetFile = path.join(targetDir, "index.html");
      fs.writeFileSync(targetFile, html, "utf-8");
      renderedCount++;
      console.log(`  ✓ ${route} -> ${path.relative(rootDir, targetFile)}`);
    } catch (err) {
      console.error(`  ✗ Failed to prerender ${route}:`, err);
    }
  }

  // Also create a 404.html fallback
  try {
    const notFoundUrl = "https://shams-consult.de/404-fallback-not-found";
    const req = new Request(notFoundUrl, { headers: { Accept: "text/html" } });
    const dummyCtx = {
      waitUntil: () => {},
      passThroughOnException: () => {},
      context: { waitUntil: () => {} },
    };
    const res = await handler.fetch(req, {}, dummyCtx);
    const html404 = await res.text();
    fs.writeFileSync(path.join(outputPublicDir, "404.html"), html404, "utf-8");
    console.log("  ✓ /404 -> dist/client/404.html");
  } catch (err) {
    console.warn("Could not generate 404.html:", err);
  }

  // Create .htaccess in .output/public for IONOS Apache web hosting
  const htaccessContent = `# ==============================================================================
# IONOS Apache Web Server Configuration - Shams Consult (Static Build)
# ==============================================================================

# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # 1. Force HTTPS
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # 2. Canonical Domain (optional, remove www if non-www)
  # RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
  # RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

  # 3. Serve directory index.html if it exists
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # 4. If exact file or directory exists, serve directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # 5. Route .html clean URLs (e.g. /leistungen -> /leistungen/index.html or /leistungen.html)
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^([^/]+)/?$ $1/index.html [L]

  # 6. Fallback to index.html for SPA dynamic client-side routes
  RewriteRule ^ index.html [L]
</IfModule>

# Custom Error Pages
ErrorDocument 404 /404.html

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Caching & Performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"

  # HTML pages - fast revalidation
  ExpiresByType text/html "access plus 0 seconds"

  # Static assets (JS, CSS, Images, Fonts) - long-term cache
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json image/svg+xml
</IfModule>
`;

  fs.writeFileSync(path.join(outputPublicDir, ".htaccess"), htaccessContent, "utf-8");
  // Also copy .htaccess to public/.htaccess so it stays in source control
  fs.writeFileSync(path.join(rootDir, "public", ".htaccess"), htaccessContent, "utf-8");
  console.log("  ✓ .htaccess created for IONOS Apache hosting");

  // Mirror everything into a stable folder the deploy step can always upload.
  fs.rmSync(staticDir, { recursive: true, force: true });
  fs.cpSync(outputPublicDir, staticDir, { recursive: true });
  console.log(`  ✓ static site mirrored to build-static/`);

  console.log(
    `\n🎉 Static export complete! ${renderedCount} pages ready in dist/client/ for IONOS deployment.\n`,
  );
}

prerender().catch((err) => {
  console.error("Prerender error:", err);
  process.exit(1);
});
