import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { createInterface } from "node:readline";
import { test } from "node:test";
import { chromium } from "playwright";

const project = path.resolve(import.meta.dirname, "../..");
const proofRoot = path.join(project, "proof-artifacts");
await mkdir(proofRoot, { recursive: true });
const artifacts = await mkdtemp(path.join(proofRoot, "run-"));
console.log(`Browser proof artifacts: ${artifacts}`);
const python = path.join(
  project,
  ".venv",
  ...(process.platform === "win32" ? ["Scripts", "python.exe"] : ["bin", "python"]),
);

async function startService(workspace) {
  const child = spawn(python, ["-m", "proof.serve", "--root", workspace, "--port", "0"], {
    cwd: project,
    env: { ...process.env, PYTHONPATH: path.join(project, "src") },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const lines = createInterface({ input: child.stdout });
  let stderr = "";
  child.stderr.setEncoding("utf8");
  child.stderr.on("data", (text) => {
    stderr = (stderr + text).slice(-24000);
  });
  const closed = new Promise((resolve) => child.once("close", resolve));
  const origin = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Synthetic service did not start")), 15000);
    child.once("error", reject);
    child.once("close", (code) => reject(new Error(`Synthetic service exited (${code})`)));
    lines.on("line", (line) => {
      const endpoint = line.match(/http:\/\/127\.0\.0\.1:\d+\//u)?.[0];
      if (endpoint !== undefined) resolve(endpoint);
    });
    closed.then(() => clearTimeout(timer));
    lines.once("close", () => clearTimeout(timer));
  });

  async function stop() {
    lines.close();
    if (child.exitCode === null && child.signalCode === null) child.kill();
    await closed;
  }

  try {
    const endpoint = await origin;
    return { endpoint, stderr: () => stderr, stop };
  } catch (error) {
    await stop();
    throw new Error(`${String(error)}\n${stderr}`, { cause: error });
  }
}

function response(page, pathPattern, method) {
  return page.waitForResponse(
    (result) =>
      pathPattern.test(new URL(result.url()).pathname) && result.request().method() === method,
  );
}

async function submit(page) {
  await page.getByRole("link", { name: "Start a run", exact: true }).click();
  await page.getByLabel("Issuer name", { exact: true }).fill("Northbridge Synthetic Group");
  await page.getByLabel("As-of date", { exact: true }).fill("2025-03-31");
  const uploaded = response(page, /\/api\/submissions\/[^/]+\/files$/u, "POST");
  await page.getByLabel("Documents", { exact: true }).setInputFiles({
    name: "northbridge-filing.txt",
    mimeType: "text/plain",
    buffer: await readFile(path.join(project, "proof", "northbridge-filing.txt")),
  });
  await page.getByRole("button", { name: "Review run", exact: true }).click();
  const upload = await uploaded;
  assert.equal(upload.status(), 200);
  assert.equal((await upload.json()).name, "northbridge-filing.txt");
  const submitButton = page.getByRole("button", { name: "Submit run", exact: true });
  await submitButton.waitFor();
  for (const label of ["I have checked this", "I accept this limit"]) {
    for (const checkbox of await page.getByRole("checkbox", { name: label, exact: true }).all())
      await checkbox.check();
  }
  const consent = page.getByRole("checkbox", {
    name: "Approve: I have read this summary and want this run started",
    exact: true,
  });
  assert.equal(await submitButton.isEnabled(), false);
  await consent.check();
  const submitted = response(page, /\/api\/submissions\/[^/]+\/submit$/u, "POST");
  const activity = page.waitForURL(/\/run\/\d{8}-\d{6}-\d{2}$/u);
  await submitButton.click();
  assert.equal((await submitted).status(), 200);
  await activity;
  return new URL(page.url()).pathname.split("/").at(-1);
}

async function checkCharts(report, artifacts, channel, page) {
  const section = (name) =>
    report
      .getByRole("navigation", { name: "Report sections" })
      .getByRole("link", { name: name === "Modules" ? /^Modules(?: \d+)?$/u : name, exact: true });
  await section("Changes").click();
  await report.getByText("No earlier run to compare.", { exact: true }).waitFor();
  await section("Modules").click();
  const modules = report.getByRole("navigation", { name: "Modules and sections" });
  await modules.getByRole("link", { name: /^Liquidity, Delivered/u }).waitFor();
  await modules.getByRole("link", { name: /^Refinancing & LME, Delivered/u }).waitFor();
  await modules.getByRole("link", { name: /^Financial foundation, Delivered/u }).click();
  const debt = report.getByRole("figure", { name: "Debt maturities", exact: true });
  await debt.getByRole("radio", { name: "Chart", exact: true }).waitFor();
  await debt.locator("svg.recharts-surface").first().waitFor();
  await debt.screenshot({ path: path.join(artifacts, `${channel}-debt-maturities.png`) });
  await debt.getByRole("radio", { name: "Table", exact: true }).check();
  for (const value of ["500", "1,250", "Not supplied: the schedule stops here"]) {
    await debt.getByText(value, { exact: true }).first().waitFor();
  }

  await section("Forecast").click();
  const revenue = report.getByRole("figure", { name: "Revenue", exact: true });
  await revenue.locator("svg.recharts-surface").first().waitFor();
  await revenue.screenshot({ path: path.join(artifacts, `${channel}-revenue.png`) });
  await revenue.getByRole("radio", { name: "Table", exact: true }).check();
  await revenue.getByText("1,050", { exact: true }).first().waitFor();
  const model = report.getByRole("table", { name: "Cash flow model", exact: true });
  const revenueRow = model.getByRole("row").filter({
    has: page.getByRole("rowheader", { name: "Revenue", exact: true }),
  });
  await revenueRow.getByRole("cell", { name: "1,050", exact: true }).first().waitFor();

  await section("Report").click();
  await report.getByRole("heading", { name: "Report history", exact: true }).waitFor();
  await section("Evidence").click();
  const evidence = report.getByRole("navigation", { name: "Evidence sections" });
  await evidence.getByRole("link", { name: "Sources", exact: true }).click();
  await report.getByRole("heading", { name: "Sources", exact: true }).waitFor();
  await evidence.getByRole("link", { name: "Summary", exact: true }).click();
  await page.reload();
  await report.getByRole("heading", { name: "Handoffs", exact: true }).waitFor();
}

for (const [channel, brand, envName] of [
  ["chrome", "Google Chrome", "CHROME_PATH"],
  ["msedge", "Microsoft Edge", "EDGE_PATH"],
]) {
  test(
    `${brand} uploads, submits and opens a finished legacy report`,
    { timeout: 120000 },
    async () => {
      const workspace = await mkdtemp(
        path.join(process.platform === "win32" ? tmpdir() : "/tmp", "coc-"),
      );
      let service;
      let browser;
      try {
        service = await startService(workspace);
        const executablePath = process.env[envName];
        browser = await chromium.launch(
          executablePath === undefined ? { channel } : { executablePath },
        );
        const page = await browser.newPage();
        page.setDefaultTimeout(15000);
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.goto(service.endpoint);
        const brands = await page.evaluate(() =>
          navigator.userAgentData?.brands.map(({ brand }) => brand),
        );
        assert.ok(brands?.includes(brand), `Expected branded ${brand}, received ${String(brands)}`);

        const run = await submit(page);
        const open = page.getByRole("link", { name: "Open report", exact: true });
        await open.waitFor({ timeout: 60000 });
        const state = await page.request.get(new URL(`/api/runs/${run}`, service.endpoint).href);
        assert.equal(state.status(), 200);
        assert.equal((await state.json()).status, "finished");
        await open.click();
        await page.waitForURL((url) => url.pathname === `/report/${run}`);
        const report = page.locator("main");
        await report.getByText("Full credit assessment", { exact: true }).waitFor();
        await report.getByText("As of 31 March 2025", { exact: true }).waitFor();
        await report
          .getByText("The synthetic issuer shows one observed item.", { exact: false })
          .first()
          .waitFor();
        await page.reload();
        await report
          .getByText("The synthetic issuer shows one observed item.", { exact: false })
          .first()
          .waitFor();
        await page.screenshot({
          path: path.join(artifacts, `${channel}-finished-report.png`),
          fullPage: true,
        });
        await checkCharts(report, artifacts, channel, page);
        const handoff = page.waitForEvent("download");
        await report
          .getByRole("link", { name: "Download Fundamental credit", exact: true })
          .click();
        const file = await handoff;
        assert.equal(file.suggestedFilename(), "CP-2.md");
        const bytes = await readFile(await file.path());
        assert.match(bytes.toString("utf8"), /The synthetic issuer shows one observed item\./u);
        const publication = await page.request.get(
          new URL("/connected/snapshot", service.endpoint).href,
        );
        assert.equal(publication.status(), 200);
        const { workspace: publishedWorkspace } = await publication.json();
        const published = Object.values(publishedWorkspace.runs).find(
          (item) => item.folder === run,
        );
        assert.ok(published);
        assert.equal(
          Object.values(published.modules).filter((module) => module.default).length,
          14,
        );
        assert.ok(published.modules["CP-2D"].default);
        assert.ok(published.modules["CP-3C"].default);
        const designated = publishedWorkspace.outputs[published.modules["CP-2"].default];
        assert.equal(createHash("sha256").update(bytes).digest("hex"), designated.sha256);
        assert.equal(new URL(page.url()).pathname, `/report/${run}`);
        assert.deepEqual(errors, []);
        await page.screenshot({
          path: path.join(artifacts, `${channel}-evidence.png`),
          fullPage: true,
        });
        const record = {
          browser: brand,
          version: browser.version(),
          run,
          platform: process.platform,
          checks: [
            "upload",
            "approved submission",
            "finished publication",
            "overview",
            "changes",
            "financial chart and table",
            "forecast chart and model",
            "report history",
            "evidence reload and handoff",
          ],
        };
        await writeFile(
          path.join(artifacts, `${channel}.json`),
          JSON.stringify(record, null, 2) + "\n",
        );
        console.log(`${brand} ${browser.version()} completed run ${run}`);
      } catch (error) {
        if (service !== undefined) console.error(service.stderr());
        await cp(path.join(workspace, "_engine", "logs"), path.join(artifacts, `${channel}-logs`), {
          recursive: true,
        }).catch((copyError) => {
          if (copyError.code !== "ENOENT") console.error(copyError);
        });
        throw error;
      } finally {
        await browser?.close();
        await service?.stop();
        await rm(workspace, { recursive: true, force: true });
      }
    },
  );
}
