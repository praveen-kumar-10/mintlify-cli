import { copyDir, ensureDir, resolvePath } from "./fileUtil.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateProject(contentDir, outputDir) {
  const outPath = resolvePath(outputDir);

  // Ensure output directory
  await ensureDir(outPath);

  // 1. Copy Next.js template → site
  // const templatePath = resolvePath("template");
  const templatePath = path.join(__dirname, "../template")
  await copyDir(templatePath, outPath);

  // 2. Copy markdown pages
  const contentPages = path.join(resolvePath(contentDir), "pages");
  const sitePages = path.join(outPath, "pages");
  await copyDir(contentPages, sitePages);

  // 3. Copy assets (images, logo, favicon)
  const sitePublic = path.join(outPath, "public");
  await ensureDir(sitePublic);

  const assetsToCopy = ["images", "logo", "favicon.svg"];
  for (const asset of assetsToCopy) {
    const src = path.join(resolvePath(contentDir), asset);
    await copyDir(src, path.join(sitePublic, asset));
  }
}
