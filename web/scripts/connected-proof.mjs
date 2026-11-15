import assert from "node:assert/strict";
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
const legacy = path.resolve(project, process.env["CREDIT_OS_LEGACY"] ?? ".legacy");
const python = path.join(
  project,
  ".venv",
  ...(process.platform === "win32" ? ["Scripts", "python.exe"] : ["bin", "python"]),
);

async function startService(workspace) {
  const child = spawn(
    python,
    ["-m", "proof.serve", "--legacy", legacy, "--root", workspace, "--port", "0"],
    { cwd: project, stdio: ["ignore", "pipe", "pipe"] },
  );
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
  const approval = page.getByRole("checkbox", {
    name: "I accept the listed checks and limitations",
  });
  if (await approval.count()) await approval.check();
  const submitted = response(page, /\/api\/submissions\/[^/]+\/submit$/u, "POST");
  const activity = page.waitForURL(/\/run\/\d{8}-\d{6}-\d{2}$/u);
  await submitButton.click();
  assert.equal((await submitted).status(), 200);
  await activity;
  return new URL(page.url()).pathname.split("/").at(-1);
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
        await report
          .getByText("The synthetic issuer shows one observed item.", { exact: false })
          .first()
          .waitFor();
        await page.reload();
        await report
          .getByText("The synthetic issuer shows one observed item.", { exact: false })
          .first()
          .waitFor();
        const handoff = page.waitForEvent("download");
        await report.locator('a[href$="/CP-2.md"]').click();
        const file = await handoff;
        assert.equal(file.suggestedFilename(), "CP-2.md");
        assert.match(
          await readFile(await file.path(), "utf8"),
          /The synthetic issuer shows one observed item\./u,
        );
        assert.equal(new URL(page.url()).pathname, `/report/${run}`);
        assert.deepEqual(errors, []);
        await page.screenshot({
          path: path.join(artifacts, `${channel}-finished-report.png`),
          fullPage: true,
        });
        const record = {
          browser: brand,
          version: browser.version(),
          run,
          platform: process.platform,
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
