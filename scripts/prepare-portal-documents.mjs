import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONTACT } from "../src/lib/contact.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const srcDir = path.join(rootDir, "files");
const publicDestDir = path.join(rootDir, "public", "documents");
const distDestDir = path.join(rootDir, "dist", "documents");

if (!fs.existsSync(publicDestDir)) {
  fs.mkdirSync(publicDestDir, { recursive: true });
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

/**
 * Synchronize contact information in HTML content with central CONTACT config
 */
function syncContactWithConfig(content) {
  let updated = content;

  // 1. Sync physical address in Whitepapers & Flyers to primary Frankfurt address
  updated = updated.replace(
    /📍\s*Carl-Zeiss-Stra(?:ß|ss)e\s*(?:3|43)[^<]*/gi,
    `📍 ${CONTACT.primaryAddress.full}`
  );
  updated = updated.replace(
    /Carl-Zeiss-Stra(?:ß|ss)e\s*(?:3|43),\s*63322\s*Rödermark/gi,
    CONTACT.primaryAddress.full
  );

  // 2. Sync phone numbers to primary Frankfurt phone
  // German display
  updated = updated.replace(/06074\s*2398782/g, CONTACT.phoneFrankfurt);
  updated = updated.replace(/060\s*74\s*239\s*87\s*82/g, CONTACT.phoneFrankfurt);
  // International display
  updated = updated.replace(/\+49\s*6074\s*2398782/g, "+49 69 74 223 777");
  updated = updated.replace(/\+49\s*60\s*74\s*23\s*98\s*782/g, "+49 69 74 223 777");
  // Href links
  updated = updated.replace(/tel:\+4960742398782/g, CONTACT.primaryPhoneHref);

  // 3. Sync email address
  updated = updated.replace(/[a-zA-Z0-9._%+-]+@shams-consult\.de/g, CONTACT.email);

  // 4. Normalize image paths
  updated = updated
    .replace(/(?:\.\.\/public|\.\/public)\/logo\.png/g, "/logo.png")
    .replace(/(?:\.\.\/public|\.\/public)\/qr-shams\.svg/g, "/qr-shams.svg")
    .replace(/(?:\.\.\/public|\.\/public)\/images\//g, "/images/")
    .replace(/(?:\.\/files\/|\.\/)(Image\.jpg)/g, "/images/b2b/$1")
    .replace(/(?:\.\/files\/|\.\/)([1-6]\.png)/g, "/images/b2b/$1")
    .replace(/(?:\.\/files\/|\.\/)(fcn-(?:exterior|interior)-(?:before|after)\.jpg)/g, "/images/before-after/$1");

  // 5. Inject auto-print script if not present
  if (!updated.includes("URLSearchParams") && updated.includes("</body>")) {
    updated = updated.replace("</body>", autoPrintSnippet);
  }

  return updated;
}

console.log(`Syncing flyer documents with central contact config (Default: ${CONTACT.primaryAddress.full}, ${CONTACT.phoneFrankfurt})...`);

for (const file of htmlFiles) {
  const srcPath = path.join(srcDir, file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`Source file missing: ${srcPath}`);
    continue;
  }

  const rawContent = fs.readFileSync(srcPath, "utf-8");
  const syncedContent = syncContactWithConfig(rawContent);

  // Write synced output to public/documents
  const publicDestPath = path.join(publicDestDir, file);
  fs.writeFileSync(publicDestPath, syncedContent, "utf-8");
  console.log(`✓ Synchronized: public/documents/${file}`);

  // Also sync to dist/documents if directory exists
  if (fs.existsSync(distDestDir)) {
    const distDestPath = path.join(distDestDir, file);
    fs.writeFileSync(distDestPath, syncedContent, "utf-8");
    console.log(`✓ Synchronized: dist/documents/${file}`);
  }
}

console.log("All portal HTML documents successfully synced with central CONTACT config.");
