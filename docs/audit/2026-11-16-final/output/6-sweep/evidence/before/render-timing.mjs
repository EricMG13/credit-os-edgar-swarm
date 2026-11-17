import assert from "node:assert/strict";
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, existsSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { createInterface } from "node:readline";
import { pathToFileURL } from "node:url";

const [workspace, output] = process.argv.slice(2);
const repo = path.resolve(workspace);
const require = createRequire(path.join(repo, "web/package.json"));
const { chromium } = require("playwright");
const { createOfflineProxy, installOfflineGuard, isLoopbackRequest } = await import(
  pathToFileURL(path.join(repo, "web/scripts/offline-network.mjs")).href
);
const cases = JSON.parse(readFileSync(new URL("./render-routes.json", import.meta.url)));
const release = execFileSync("git", ["rev-parse", "HEAD"], { cwd: repo, encoding: "utf8" }).trim();
const PORT = 0;
const cleanups = [];
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, () => {
    for (const cleanup of cleanups) cleanup();
    process.exit(130);
  });
}
assert.ok(process.env.CHROMIUM_PATH);
assert.ok(existsSync(path.join(repo, "web/dist/connected.html")));
function startService(root) {
  const venv = path.join(repo, ".venv", "bin", "python");
  const [cmd, ...pre] = existsSync(venv) ? [venv] : ["uv", "run", "--no-sync", "python"];
  const child = spawn(cmd, [...pre, "-m", "proof.serve", "--root", root, "--port", String(PORT)], {
    cwd: repo,
    env: { ...process.env, PYTHONPATH: [path.join(repo, "src"), path.join(repo, "apps", "issuer-library"), repo].join(path.delimiter) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const lines = createInterface({ input: child.stdout });
  let stderr = "";
  child.stderr.setEncoding("utf8");
  child.stderr.on("data", (t) => (stderr = (stderr + t).slice(-8000)));
  const closed = new Promise((resolve) => child.once("close", resolve));
  const endpoint = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("The synthetic service did not start")), 30000);
    child.once("error", reject);
    child.once("close", (code) => reject(new Error(`The synthetic service exited (${code})`)));
    lines.on("line", (line) => {
      const m = line.match(/http:\/\/127\.0\.0\.1:\d+\//u);
      if (m) {
        clearTimeout(timer);
        resolve(m[0]);
      }
    });
  });
  const stop = async () => {
    lines.close();
    if (child.exitCode === null && child.signalCode === null) child.kill();
    await closed;
  };
  cleanups.push(() => child.kill());
  return { endpoint, stderr: () => stderr, stop };
}

// The synthetic run, the way web/scripts/connected-proof.mjs submits it: three documents uploaded, the
// credit agreement chosen as the executed agreement, one rating, every limit ticked, one approval.
async function submitSyntheticRun(page, endpoint) {
  await page.goto(new URL("/start", endpoint).href);
  await page.getByLabel("Issuer name", { exact: true }).fill("Northbridge Synthetic Group");
  await page.getByLabel("As-of date", { exact: true }).fill("2025-03-31");
  await page.getByLabel("Your name", { exact: true }).fill("Ana L");
  const files = [
    ["northbridge-filing.txt", "text/plain"],
    ["northbridge-portfolio.xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
    ["northbridge-credit-agreement.txt", "text/plain"],
  ];
  const uploaded = files.map(([name]) =>
    page.waitForResponse(
      async (r) =>
        /\/api\/submissions\/[^/]+\/files$/u.test(new URL(r.url()).pathname) &&
        r.request().method() === "POST" &&
        (await r.json()).name === name,
    ),
  );
  await page.getByLabel("Documents", { exact: true }).setInputFiles(
    files.map(([name, mimeType]) => ({ name, mimeType, buffer: readFileSync(path.join(repo, "proof", name)) })),
  );
  await Promise.all([page.getByRole("button", { name: "Inspect documents", exact: true }).click(), ...uploaded]);
  await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "Inspect documents");
  await page.getByRole("button", { name: "Continue to purpose", exact: true }).click();
  await page.getByRole("heading", { name: "Purpose", exact: true }).waitFor();
  await page.getByRole("radio", { name: "Full credit assessment", exact: true }).waitFor();
  await page.getByRole("button", { name: "Continue to context", exact: true }).click();
  await page.getByLabel(/Anything the analysis should know/u).fill("Check the 2028 maturities.\nInclude refinancing risk.");
  await page.getByRole("combobox", { name: "Portfolio workbook", exact: true }).selectOption({ label: "northbridge-portfolio.xlsx" });
  await page.getByRole("combobox", { name: "Legal documents", exact: true }).selectOption("executed");
  await page.getByRole("combobox", { name: "The agreement", exact: true }).selectOption({ label: "northbridge-credit-agreement.txt" });
  const ratings = page.getByRole("region", { name: "Ratings", exact: true });
  await ratings.getByRole("button", { name: "Add rating", exact: true }).click();
  await ratings.getByLabel("Agency", { exact: true }).selectOption("Moody's");
  await ratings.getByLabel("Scope", { exact: true }).selectOption("issuer");
  await ratings.getByLabel("Rating", { exact: true }).fill("B1");
  await ratings.getByLabel("Outlook", { exact: true }).selectOption("Negative");
  await ratings.getByLabel("As-of", { exact: true }).fill("2025-02-28");
  await page.getByRole("button", { name: "Review run", exact: true }).click();
  const submit = page.getByRole("button", { name: "Submit run", exact: true });
  await submit.waitFor();
  const limits = page.getByRole("region", { name: "Limits to decide" });
  for (const box of await limits.getByRole("checkbox").all()) await box.check();
  await page.getByRole("checkbox", { name: "Approve: I have read this summary and want this run started", exact: true }).check();
  await submit.click();
  const dialog = page.getByRole("dialog", { name: "Start a synthetic test?" });
  await dialog.waitFor();
  await dialog.getByRole("button", { name: "Start synthetic run", exact: true }).click();
  await page.waitForURL(/\/run\/\d{8}-\d{6}-\d{2}$/u);
  const run = new URL(page.url()).pathname.split("/").at(-1);
  const open = page.getByRole("link", { name: "Open report", exact: true });
  const stopped = page.getByRole("status").filter({ hasText: /^(Failed|Capped|Rejected|Interrupted)$/u });
  await open.or(stopped).waitFor({ timeout: 90000 });
  const stateUrl = new URL(`/api/runs/${run}`, endpoint).href;
  if (!isLoopbackRequest(stateUrl)) throw new Error("Run-state URL must be loopback");
  const stateResponse = await page.request.get(stateUrl, { maxRedirects: 0 });
  if (stateResponse.status() !== 200) throw new Error(`Run-state request failed: ${stateResponse.status()}`);
  const state = await stateResponse.json();
  if (state.status !== "finished") throw new Error(`The synthetic run ended as ${state.status}: ${state.reason ?? ""}`);
  return run;
}

const proxy = await createOfflineProxy();
const root = mkdtempSync("/tmp/swp-");
cleanups.push(() => rmSync(root, { recursive: true, force: true }));
const service = startService(root);
let browser;
const contextOptions = { viewport: { width: 1440, height: 900 }, reducedMotion: "reduce", serviceWorkers: "block" };
try {
  const endpoint = await service.endpoint;
  assert.equal(new URL(endpoint).hostname, "127.0.0.1");
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH, proxy: proxy.settings });
  const setupContext = await browser.newContext(contextOptions);
  const setupGuard = await installOfflineGuard(setupContext);
  const setup = await setupContext.newPage();
  setup.setDefaultTimeout(30000);
  const run = await submitSyntheticRun(setup, endpoint);
  setupGuard.assertOffline();
  await setupContext.close();

  const results = cases.map((screen) => ({ ...screen, millis: [] }));
  for (let sample = 0; sample < 3; ++sample) {
    for (const screen of results) {
      const context = await browser.newContext(contextOptions);
      try {
        const guard = await installOfflineGuard(context);
        const page = await context.newPage();
        page.setDefaultTimeout(15000);
        const destination = new URL(`/report/${run}${screen.address}`, endpoint);
        assert.ok(isLoopbackRequest(destination.href));
        const start = performance.now();
        await page.goto(destination.href, { waitUntil: "load" });
        await page.getByRole("navigation", { name: "Report sections" }).waitFor();
        await page.getByRole("heading", { name: screen.heading, exact: true }).first().waitFor();
        await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
        screen.millis.push(Math.round((performance.now() - start) * 1000) / 1000);
        guard.assertOffline();
      } finally {
        await context.close();
      }
    }
    console.log(`Round ${sample + 1}: ${results.length} report routes`);
  }
  for (const screen of results) {
    screen.medianMillis = [...screen.millis].sort((a, b) => a - b)[1];
  }
  results.sort((a, b) => b.medianMillis - a.medianMillis);
  const result = {
    commit: release,
    browser: browser.version(),
    node: process.version,
    run,
    viewport: contextOptions.viewport,
    measurement: "Cold context, goto(load) through report navigation and exact visible section heading, then two frames; samples sequential",
    options: contextOptions,
    rounds: 3,
    applicationOutsideRequests: 0,
    browserProxyBlocks: proxy.attempts.length,
    results,
  };
  writeFileSync(output, JSON.stringify(result, null, 2) + "\n");
  console.log(JSON.stringify(results.slice(0, 5)));
} catch (error) {
  console.error(service.stderr());
  throw error;
} finally {
  await browser?.close();
  await service.stop();
  await proxy.close();
  rmSync(root, { recursive: true, force: true });
}
