import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

async function optimizeHeroImages() {
  console.log("Optimizing Hero Images...");

  // Frankfurt skyline sketch (LCP element)
  const skylineInput = path.join(publicDir, "images/frankfurt-skyline-sketch.png");
  const skylineWebp = path.join(publicDir, "images/frankfurt-skyline-sketch.webp");
  if (fs.existsSync(skylineInput)) {
    const meta = await sharp(skylineInput).metadata();
    await sharp(skylineInput)
      .resize({ width: Math.min(meta.width || 1920, 1920), withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(skylineWebp);
    const beforeSize = fs.statSync(skylineInput).size;
    const afterSize = fs.statSync(skylineWebp).size;
    console.log(`Skyline: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB (saved ${(((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)}%)`);
  }

  // Founder Majeed Shams portrait
  const founderInput = path.join(publicDir, "images/team/majeed-shams-authentic.png");
  const founderWebp = path.join(publicDir, "images/team/majeed-shams-authentic.webp");
  if (fs.existsSync(founderInput)) {
    await sharp(founderInput)
      .resize({ width: 683, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(founderWebp);
    const beforeSize = fs.statSync(founderInput).size;
    const afterSize = fs.statSync(founderWebp).size;
    console.log(`Founder portrait: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB (saved ${(((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)}%)`);
  }

  // Team skyline and team planning images
  const extraTeam = [
    { input: "images/team-frankfurt-skyline.png", output: "images/team-frankfurt-skyline.webp", width: 1400 },
    { input: "images/team-planning.png", output: "images/team-planning.webp", width: 1400 },
  ];
  for (const item of extraTeam) {
    const inPath = path.join(publicDir, item.input);
    const outPath = path.join(publicDir, item.output);
    if (fs.existsSync(inPath)) {
      await sharp(inPath)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: 80, effort: 5 })
        .toFile(outPath);
      const bSize = fs.statSync(inPath).size;
      const aSize = fs.statSync(outPath).size;
      console.log(`${item.input}: ${(bSize / 1024).toFixed(1)} KB -> ${(aSize / 1024).toFixed(1)} KB (saved ${(((bSize - aSize) / bSize) * 100).toFixed(1)}%)`);
    }
  }
}

async function optimizeSiteVisits() {
  console.log("Optimizing Site Visits Images...");
  const dir = path.join(publicDir, "images/partners/site-visits");
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      const input = path.join(dir, file);
      const baseName = path.parse(file).name;
      const outputWebp = path.join(dir, `${baseName}.webp`);

      const beforeSize = fs.statSync(input).size;
      await sharp(input)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(outputWebp);

      const afterSize = fs.statSync(outputWebp).size;
      console.log(`${file}: ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB (saved ${(((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)}%)`);
    }
  }
}

async function main() {
  try {
    await optimizeHeroImages();
    await optimizeSiteVisits();
    console.log("Image optimization complete!");
  } catch (err) {
    console.error("Optimization failed:", err);
    process.exit(1);
  }
}

main();
