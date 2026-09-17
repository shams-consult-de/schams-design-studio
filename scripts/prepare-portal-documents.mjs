import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const srcDir = path.join(rootDir, "files");
const destDir = path.join(rootDir, "public", "documents");

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const htmlFiles = [
  "flyer-fcn-partnership.html",
  "flyer-b2b-developer.html",
  "flyer-casestudy.html",
  "flyer-din-lang.html",
  "flyer-gallery.html",
];

const autoPrintSnippet = `
  <script>
    (function() {
      try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('print') === 'true') {
          window.addEventListener('load', function() {
            setTimeout(function() {
              window.print();
            }, 600);
          });
        }
      } catch (e) {
        console.warn('Auto-print script error:', e);
      }
    })();
  </script>
</body>`;

for (const file of htmlFiles) {
  const srcPath = path.join(srcDir, file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Source file missing: ${srcPath}`);
    continue;
  }

  let content = fs.readFileSync(srcPath, "utf-8");

  // Normalize image paths
  content = content
    .replace(/(?:\.\.\/public|\.\/public)\/logo\.png/g, "/logo.png")
    .replace(/(?:\.\.\/public|\.\/public)\/qr-shams\.svg/g, "/qr-shams.svg")
    .replace(/(?:\.\.\/public|\.\/public)\/images\//g, "/images/")
    .replace(/(?:\.\/files\/|\.\/)(Image\.jpg)/g, "/images/b2b/$1")
    .replace(/(?:\.\/files\/|\.\/)([1-6]\.png)/g, "/images/b2b/$1");

  // Inject auto-print script if not present
  if (!content.includes("URLSearchParams") && content.includes("</body>")) {
    content = content.replace("</body>", autoPrintSnippet);
  }

  const destPath = path.join(destDir, file);
  fs.writeFileSync(destPath, content, "utf-8");
  console.log(`✓ Processed and written: public/documents/${file}`);
}

console.log("All portal HTML documents prepared successfully in public/documents/");
