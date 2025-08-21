import { copyDir, ensureDir, resolvePath } from "./fileUtil.js";
import path from "path";

export async function generateProject(contentDir, outputDir) {
  const outPath = resolvePath(outputDir);

  // Ensure output directory
  await ensureDir(outPath);

  // 1. Copy Next.js template → site
  const templatePath = resolvePath("template");
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
