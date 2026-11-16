import { spawnSync } from "node:child_process";
import path from "node:path";

const vite = path.join(import.meta.dirname, "..", "node_modules", "vite", "bin", "vite.js");
const outDir = process.env["CREDIT_OS_OUT_DIR"];
const output = outDir ? ["--outDir", outDir] : [];

for (const args of [
  ["build", ...output, ...(outDir ? ["--emptyOutDir"] : [])],
  ["build", "--config", "vite.connected.config.ts", ...output],
]) {
  const result = spawnSync(process.execPath, [vite, ...args], { stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
