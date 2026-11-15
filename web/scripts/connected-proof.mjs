import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { arch, release } from "node:os";
import path from "node:path";
import { createInterface } from "node:readline";
import { after, test } from "node:test";
import { chromium } from "playwright";

const project = path.resolve(import.meta.dirname, "../..");
const sourceCommit = await readFile(path.join(project, "SOURCE-COMMIT.txt"), "utf8").then(
  (text) => text.trim(),
  (error) => {
    if (error.code !== "ENOENT") throw error;
    return null;
  },
);
const zipSha256 = process.env.CREDIT_OS_PROOF_ZIP_SHA256?.toLowerCase() ?? null;
if (sourceCommit !== null && !/^[0-9a-f]{40}$/u.test(sourceCommit)) {
  throw new Error("Invalid source commit in SOURCE-COMMIT.txt");
}
if (zipSha256 !== null && (!sourceCommit || !/^[0-9a-f]{64}$/u.test(zipSha256))) {
  throw new Error("ZIP proof requires the extracted source commit and a valid archive SHA-256");
}
const provenance = {
  source_commit: sourceCommit,
  zip_sha256: zipSha256,
  platform: process.platform,
  os_release: release(),
  architecture: arch(),
};
const proofRoot = path.join(project, "proof-artifacts");
await mkdir(proofRoot, { recursive: true });
const artifacts = await mkdtemp(path.join(proofRoot, "run-"));
console.log(`Browser proof artifacts: ${artifacts}`);
const python = path.join(
  project,
  ".venv",
  ...(process.platform === "win32" ? ["Scripts", "python.exe"] : ["bin", "python"]),
);
const browserProofs = [];

after(async () => {
  if (browserProofs.length === 2) {
    await writeFile(
      path.join(artifacts, "proof.json"),
      JSON.stringify({ ...provenance, browser_proofs: browserProofs }, null, 2) + "\n",
    );
  }
});

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
  const files = [
    ["northbridge-filing.txt", "text/plain"],
    [
      "northbridge-portfolio.xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
  ];
  const uploaded = files.map(([name]) =>
    page.waitForResponse(
      async (result) =>
        /\/api\/submissions\/[^/]+\/files$/u.test(new URL(result.url()).pathname) &&
        result.request().method() === "POST" &&
        (await result.json()).name === name,
    ),
  );
  await page.getByLabel("Documents", { exact: true }).setInputFiles(
    await Promise.all(
      files.map(async ([name, mimeType]) => ({
        name,
        mimeType,
        buffer: await readFile(path.join(project, "proof", name)),
      })),
    ),
  );
  const [, ...uploads] = await Promise.all([
    page.getByRole("button", { name: "Inspect documents", exact: true }).click(),
    ...uploaded,
  ]);
  for (const upload of uploads) assert.equal(upload.status(), 200);
  await page
    .getByRole("combobox", { name: "Portfolio workbook", exact: true })
    .selectOption({ label: "northbridge-portfolio.xlsx" });
  await page.getByRole("button", { name: "Review run", exact: true }).click();
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

async function checkTraceFocus(page, source, detail) {
  const trigger = await source.elementHandle();
  try {
    await source.press("Enter");
    const drawer = page.getByRole("dialog");
    await drawer.getByText(detail).first().waitFor();
    const href = await drawer.getByRole("link", { name: "Open in Evidence" }).getAttribute("href");
    await page.keyboard.press("Escape");
    await drawer.waitFor({ state: "hidden" });
    await page.waitForFunction((element) => document.activeElement === element, trigger);
    return href;
  } finally {
    await trigger.dispose();
  }
}

async function checkCalendar(report, artifacts, channel, page) {
  await report.getByRole("link", { name: "Issuer calendar", exact: true }).click();
  await page.waitForURL((url) => url.hash === "#calendar");
  await page.reload();
  const events = report.getByRole("figure", { name: "Published events", exact: true });
  const scenario = events.getByRole("region", { name: "Scenario" });
  await scenario
    .getByRole("img", { name: /Synthetic review, 2025-Q3, quarter/u })
    .first()
    .waitFor();
  await events.getByRole("radio", { name: "Table", exact: true }).check();
  const table = events.getByRole("table", { name: "Published events", exact: true });
  assert.equal(await table.getByRole("row").count(), 37);
  assert.equal(
    await table.getByRole("rowheader", { name: "Synthetic note", exact: true }).count(),
    9,
  );
  await events.screenshot({ path: path.join(artifacts, `${channel}-calendar.png`) });
  const source = table.getByRole("button", { name: /^Show sources for Synthetic note ·/u }).first();
  const href = await checkTraceFocus(page, source, /Filing p\.1/u);
  assert.match(href, /#evidence\/\d+-\d+$/u);
  await table.waitFor();
  await source.press("Enter");
  await page.getByRole("dialog").getByRole("link", { name: "Open in Evidence" }).click();
  await page.waitForURL(new URL(href, page.url()).href);
  await report.getByRole("cell", { name: "Filing p.1", exact: true }).waitFor();
}

async function checkModuleRecords(report, page, modules) {
  await modules.getByRole("link", { name: /^Source readiness, Delivered/u }).click();
  const readiness = report.getByRole("region", { name: "Readiness by area", exact: true });
  await readiness.getByRole("group", { name: "Ready with limitations", exact: true }).waitFor();
  await readiness.getByRole("group", { name: "Conditional", exact: true }).waitFor();
  await checkTraceFocus(
    page,
    readiness.getByRole("button", { name: "Show sources for Financial statements", exact: true }),
    /Filing p\.1/u,
  );
  await modules.getByRole("link", { name: /^Fundamental credit, Delivered/u }).click();
  const watch = report.getByRole("region", { name: "Monitoring triggers", exact: true });
  await watch.getByText("Below 3.1x", { exact: true }).waitFor();
  await watch.getByText("Not supplied: no agreed floor", { exact: true }).waitFor();
  assert.equal(await watch.getByRole("img").count(), 0);
  await checkTraceFocus(
    page,
    watch.getByRole("button", { name: "Show sources for Interest cover", exact: true }),
    /Filing p\.1; synthetic threshold/u,
  );
}

async function checkDownside(report, modules, artifacts, channel, page) {
  await modules.getByRole("link", { name: /^Downside, Delivered/u }).click();
  const scenarios = report.getByRole("region", { name: "Downside scenarios", exact: true });
  const chart = scenarios.getByRole("figure", { name: "Stressed flows and credit metrics" });
  await chart.locator('[data-case="Cost shock"][data-zero]').waitFor();
  const select = scenarios.getByRole("combobox", { name: "Compare with Control (unstressed)" });
  await select.selectOption({ label: "Cost and rate shock" });
  await chart.getByText("-5.1250 (−USD 5.13 million)", { exact: true }).waitFor();
  const negative = chart.locator('[data-case="Cost and rate shock"][data-left="0"]').first();
  assert.ok(Number(await negative.getAttribute("data-width")) > 0);
  await chart.screenshot({ path: path.join(artifacts, `${channel}-downside.png`) });
  await chart.getByRole("radio", { name: "Table", exact: true }).check();
  await chart.getByRole("cell", { name: "-5.1250 (−USD 5.13 million)", exact: true }).waitFor();
  const trace = chart.getByRole("button", { name: "Show sources for Stressed FCF (USD millions)" });
  await checkTraceFocus(page, trace, /Filing p\.2/u);
  await scenarios.getByText("Full scenario results", { exact: true }).click();
  await scenarios
    .getByRole("cell", { name: "Not calculated: net debt is missing", exact: true })
    .waitFor();
  await checkDownsideThresholds(report, page);
}

async function checkDownsideThresholds(report, page) {
  const panel = report.getByRole("region", { name: "EBITDA break points", exact: true });
  const chart = panel.getByRole("figure", { name: "EBITDA break points", exact: true });
  await chart.getByText("0.10 (10%)", { exact: true }).waitFor();
  assert.match(await chart.getByRole("listitem").first().innerText(), /FCF reaches zero/u);
  await panel.getByRole("combobox", { name: "Cash-interest basis" }).selectOption("1");
  await chart.getByText("0.12 (12%)", { exact: true }).waitFor();
  assert.match(await chart.getByRole("listitem").first().innerText(), /Cover reaches watch level/u);
  assert.equal(await chart.locator("[data-decline]").count(), 2);
  await chart.getByRole("radio", { name: "Table", exact: true }).check();
  await chart.getByRole("cell", { name: "Analyst watch level, not a covenant" }).waitFor();
  await checkTraceFocus(
    page,
    chart.getByRole("button", { name: "Show sources for Cover reaches watch level" }),
    /Filing p\.1/u,
  );
  const watches = report.getByRole("region", { name: "Monitoring sensitivities", exact: true });
  await watches.getByRole("img", { name: "Leading", exact: true }).waitFor();
  await watches.getByRole("img", { name: "Lagging", exact: true }).waitFor();
  const viewport = page.viewportSize();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForFunction(() => document.documentElement.scrollWidth === 390);
  await page.setViewportSize(viewport);
}

async function checkMacro(report, modules, artifacts, channel, page) {
  await modules.getByRole("link", { name: /^Rates, FX & hedging, Delivered/u }).click();
  const rates = report.getByRole("region", { name: "Interest rate shocks", exact: true });
  const chart = rates.getByRole("figure", { name: "Added annual interest", exact: true });
  await chart.getByText("8.00", { exact: true }).waitFor();
  await chart.getByText("5.00", { exact: true }).waitFor();
  await chart.locator("[data-missing]").waitFor();
  await chart.screenshot({ path: path.join(artifacts, `${channel}-rate-shocks.png`) });
  await chart.getByRole("radio", { name: "Table", exact: true }).check();
  await chart.getByRole("cell", { name: "5.00", exact: true }).waitFor();
  await checkTraceFocus(
    page,
    chart.getByRole("button", { name: "Show sources for Added annual interest" }),
    /Filing p\.1/u,
  );
  await rates.getByText("All rate-shock results and limitations", { exact: true }).click();
  await rates
    .getByRole("cell", { name: "Not supplied: no hedge sensitivity retained", exact: true })
    .waitFor();
  const currency = report.getByRole("figure", {
    name: "Foreign-currency strengthening",
    exact: true,
  });
  await currency.locator("[data-bar][data-zero]").first().waitFor();
  await currency.getByRole("radio", { name: "Table", exact: true }).check();
  const change = currency.getByRole("row", { name: /Change in EBITDA/u });
  await change.getByRole("cell", { name: "2.00", exact: true }).waitFor();
  await change.getByRole("cell", { name: "4.00", exact: true }).waitFor();
}

async function checkSecurities(report, modules, artifacts, channel, page) {
  await modules.getByRole("link", { name: /^Security selection, Delivered/u }).click();
  const section = report.getByRole("region", { name: "Instrument decisions", exact: true });
  const loan = section.getByRole("article").filter({ hasText: "Synthetic term loan" });
  await loan.getByText("Not supplied: no loan observation", { exact: true }).waitFor();
  await loan.getByText("Requires More Work", { exact: true }).waitFor();
  await checkTraceFocus(
    page,
    loan.getByRole("button", { name: "Show sources for Synthetic term loan" }),
    /Filing p\.3/u,
  );
  const figure = section.getByRole("figure", { name: "Last-trade prices and yields", exact: true });
  await figure.getByText("7.0100%", { exact: true }).waitFor();
  await figure.getByText("$88.12", { exact: true }).waitFor();
  assert.equal(await figure.locator("[data-bar]").count(), 4);
  await figure.screenshot({ path: path.join(artifacts, `${channel}-instrument-quotes.png`) });
  await figure.getByRole("radio", { name: "Table", exact: true }).check();
  await figure.getByRole("cell", { name: "8.9000%", exact: true }).waitFor();
  await section.getByText("Credit and recovery rationale", { exact: true }).click();
  await section.getByRole("cell", { name: "Recovery basis unavailable", exact: true }).waitFor();
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
  await checkModuleRecords(report, page, modules);
  await checkDownside(report, modules, artifacts, channel, page);
  await checkMacro(report, modules, artifacts, channel, page);
  await checkSecurities(report, modules, artifacts, channel, page);
  await modules.getByRole("link", { name: /^Financial foundation, Delivered/u }).click();
  const debt = report.getByRole("figure", { name: "Debt maturities", exact: true });
  await debt.getByRole("radio", { name: "Chart", exact: true }).waitFor();
  await debt.locator("svg.recharts-surface").first().waitFor();
  await debt.screenshot({ path: path.join(artifacts, `${channel}-debt-maturities.png`) });
  await debt.getByRole("radio", { name: "Table", exact: true }).check();
  for (const value of ["500", "1,250", "Not supplied: the schedule stops here"]) {
    await debt.getByText(value, { exact: true }).first().waitFor();
  }
  const source = debt.getByRole("button", {
    name: "Show sources for Debt maturities",
    exact: true,
  });
  const sourceHref = await checkTraceFocus(page, source, "Basis");
  assert.match(sourceHref, /#evidence\/\d+-\d+$/u);
  assert.ok(await debt.getByRole("radio", { name: "Table", exact: true }).isChecked());
  await source.press("Enter");
  await page.getByRole("dialog").getByRole("link", { name: "Open in Evidence" }).click();
  await page.waitForURL(new URL(sourceHref, page.url()).href);
  await report
    .getByRole("cell", { name: "Not supplied: the schedule stops here", exact: true })
    .waitFor();
  await page.reload();
  await report.getByRole("cell", { name: "1,250", exact: true }).waitFor();

  await section("Modules").click();
  await modules.getByRole("link", { name: /^Committee decision, Delivered/u }).click();
  const limits = report.getByRole("figure", { name: "Portfolio limits", exact: true });
  await limits.getByText("2.37%", { exact: true }).waitFor();
  assert.equal(await limits.locator("[data-bar]").count(), 2);
  assert.equal(await limits.locator("[data-tick]").count(), 2);
  await limits.screenshot({ path: path.join(artifacts, `${channel}-portfolio-limits.png`) });
  await checkTraceFocus(
    page,
    limits.getByRole("button", { name: "Show sources for Portfolio limits", exact: true }),
    /Compliance_Monitor snapshot/u,
  );
  await limits.getByRole("radio", { name: "Table", exact: true }).check();
  for (const value of ["2.37%", "2.50%", "3.73%", "5.00%"]) {
    await limits.getByRole("cell", { name: value, exact: true }).waitFor();
  }
  assert.equal(await limits.getByText("2.40%", { exact: true }).count(), 0);
  await report
    .locator("summary")
    .filter({ hasText: /^Published exposures and proposals$/u })
    .click();
  const publishedLimits = report.getByRole("table", {
    name: "Published exposures and proposals",
    exact: true,
  });
  await publishedLimits.getByRole("cell", { name: "2.40", exact: true }).waitFor();
  await publishedLimits
    .getByRole("cell", { name: "Not supplied: no proposal", exact: true })
    .waitFor();

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
  const runCharts = report.getByRole("region", { name: "Run charts", exact: true });
  await runCharts
    .getByRole("figure", { name: "Portfolio limits", exact: true })
    .getByText("3.73%", { exact: true })
    .waitFor();
  const forecastDebt = runCharts.getByRole("figure", { name: "Debt maturities", exact: true });
  await forecastDebt.getByRole("radio", { name: "Table", exact: true }).check();
  await forecastDebt.getByRole("cell", { name: "1,250", exact: true }).waitFor();
  assert.equal(
    await checkTraceFocus(
      page,
      forecastDebt.getByRole("button", { name: "Show sources for Debt maturities", exact: true }),
      "Basis",
    ),
    sourceHref,
  );
  const bridge = runCharts.getByRole("figure", { name: "Liquidity bridge", exact: true });
  await bridge.locator('[data-step="Debt repayment"][data-kind="down"]').waitFor();
  await bridge.getByRole("radio", { name: "Table", exact: true }).check();
  for (const value of ["-450", "570"]) {
    await bridge.getByRole("cell", { name: value, exact: true }).waitFor();
  }
  const refinancing = runCharts.getByRole("figure", { name: "Refinancing need", exact: true });
  await refinancing.locator('[data-missing][data-series="Committed resources"]').waitFor();
  await refinancing.getByRole("radio", { name: "Table", exact: true }).check();
  await refinancing
    .getByRole("cell", { name: "Not supplied: no commitment is stated", exact: true })
    .waitFor();
  await runCharts.getByRole("table", { name: "Portfolio limits", exact: true }).waitFor();
  await runCharts.getByRole("link", { name: "Financial foundation", exact: true }).click();
  await report.getByRole("heading", { name: "Financial foundation", exact: true }).waitFor();

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
        path.join(process.platform === "win32" ? artifacts : "/tmp", "coc-"),
      );
      let service;
      let browser;
      let record;
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
        const stopped = page
          .getByRole("status")
          .filter({ hasText: /^(Failed|Capped|Rejected|Interrupted)$/u });
        await open.or(stopped).waitFor({ timeout: 60000 });
        const state = await page.request.get(new URL(`/api/runs/${run}`, service.endpoint).href);
        assert.equal(state.status(), 200);
        const completed = await state.json();
        assert.equal(completed.status, "finished", completed.reason ?? "The run did not finish.");
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
        await checkCalendar(report, artifacts, channel, page);
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
        record = {
          ...provenance,
          browser: brand,
          version: browser.version(),
          run,
          screenshots: [
            "finished-report",
            "calendar",
            "debt-maturities",
            "downside",
            "rate-shocks",
            "instrument-quotes",
            "portfolio-limits",
            "revenue",
            "evidence",
          ].map((view) => `${channel}-${view}.png`),
          checks: [
            "upload",
            "approved submission",
            "finished publication",
            "overview",
            "issuer calendar date precision and originating row",
            "figure and row trace keyboard focus restoration",
            "changes",
            "financial chart, table and source trace reload",
            "readiness and monitoring records with source traces",
            "downside case comparison with signed cash flow and explicit gap",
            "downside break-point ranking, watch timing, and narrow layout",
            "rate and currency shocks with zero and unreported hedge outcomes",
            "dated instrument quotes, decision and recovery qualification",
            "selected workbook attestation, portfolio limits and proposal qualification",
            "forecast chart and model",
            "forecast run figures and original module",
            "signed liquidity bridge and unfunded refinancing row",
            "report history",
            "evidence reload and handoff",
          ],
        };
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
      await writeFile(
        path.join(artifacts, `${channel}.json`),
        JSON.stringify(record, null, 2) + "\n",
      );
      browserProofs.push(record);
      console.log(`${brand} ${record.version} completed run ${record.run}`);
    },
  );
}
