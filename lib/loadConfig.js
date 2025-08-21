import fs from "fs-extra";

export async function loadConfig(path) {
  if (!(await fs.pathExists(path))) {
    throw new Error(`Config file not found: ${path}`);
  }
  const raw = await fs.readFile(path, "utf-8");
  try {
    return JSON.parse(raw); // assuming docs.config is JSON
  } catch {
    throw new Error("Invalid docs.config format (must be valid JSON)");
  }
}
