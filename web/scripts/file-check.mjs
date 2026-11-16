// The browser check as the gates run it: build both pages, then open the offline one.
// Exit 77 from open-from-disk.mjs (no browser, CI unset) is a skip: one line, exit 0.
// Every other non-zero status is a failure and is returned as it came.
import { spawnSync } from "node:child_process";
import path from "node:path";

const here = import.meta.dirname;
const run = (script, args) =>
  spawnSync(process.execPath, [script, ...args], {
    stdio: "inherit",
    cwd: path.join(here, ".."),
    timeout: 300_000,
    killSignal: "SIGKILL",
  });

// CREDIT_OS_OUT_DIR sends the build and the check to another folder, so tests that run this
// script never rebuild the shared dist/ that other test files read.
const outDir = process.env["CREDIT_OS_OUT_DIR"];
const build = run(path.join("scripts", "build.mjs"), []);
if (build.status !== 0) process.exit(build.status ?? 1);

const check = run(path.join("scripts", "open-from-disk.mjs"), outDir ? [outDir] : []);
if (check.status === 77 && !process.env["CI"]) {
  console.log("SKIPPED browser check on file:// (no browser found); set CI=true to require it");
  process.exit(0);
}
process.exit(check.status ?? 1);
