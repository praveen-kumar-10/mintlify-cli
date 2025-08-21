import fs from "fs-extra";
import path from "path";

export async function copyDir(src, dest) {
  await fs.copy(src, dest, { overwrite: true });
}

export async function ensureDir(dir) {
  await fs.ensureDir(dir);
}

export function resolvePath(...args) {
  return path.resolve(process.cwd(), ...args);
}
