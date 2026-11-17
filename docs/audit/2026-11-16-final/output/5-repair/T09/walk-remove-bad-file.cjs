// T09 round 2 walk (J2-003, review finding 2): remove one unreadable file while another unreadable file
// remains. The page must keep naming the next file in a reader sentence (no decoder text), the removed file
// must not come back as an "Ignored" row, and removing the last bad file must leave the readable one.
// Exit 1 when a check fails (it does on the base commit), 0 when every check holds.
//   timeout 600 flock /tmp/repair1-port-8762.lock node docs/audit/2026-11-16-final/output/5-repair/T09/walk-remove-bad-file.cjs
"use strict";
const fs = require("node:fs");
const L = require("../../3-journeys/J2/probes/_j2lib.cjs");

const dir = "/tmp/jr/t09-walk-input";
fs.rmSync(dir, { recursive: true, force: true });
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`${dir}/annual-report.pdf`, Buffer.from("\x89PNG\r\n\x1a\n", "latin1"));
fs.writeFileSync(`${dir}/holdings.xlsx`, fs.readFileSync(`${L.REPO}/proof/northbridge-portfolio.xlsx`).subarray(0, 300));
const pick = (name, type) => ({ name, mimeType: type, buffer: fs.readFileSync(`${dir}/${name}`) });

const failures = [];
function check(label, ok, seen) {
  console.log(`${ok ? "ok  " : "FAIL"} ${label}  [${JSON.stringify(seen)}]`);
  if (!ok) failures.push(label);
}
const rows = (page) =>
  page.locator("[aria-label='Documents added'] li").evaluateAll((els) => els.map((e) => e.innerText.replace(/\s+/g, " ").trim()));
const alerts = (page) => page.locator("[role=alert]").evaluateAll((els) => els.map((e) => e.textContent.trim()));
const RAW = /codec|decode byte|position \d+|Cannot read/;

L.run("t09-walk", async ({ page, origin }) => {
  await page.goto(origin + "/start");
  await page.getByLabel("Issuer name", { exact: true }).waitFor();
  await L.fillIssuer(page);
  await page.getByLabel("Documents", { exact: true }).setInputFiles([
    pick("annual-report.pdf", "application/pdf"),
    pick("holdings.xlsx", L.XLSX),
    L.caseFile("northbridge-filing.txt"),
  ]);
  await page.getByRole("button", { name: "Inspect documents", exact: true }).click();
  await L.sleep(2500);
  let a = await alerts(page);
  let r = await rows(page);
  check("first refusal names annual-report.pdf in a reader sentence", a.length === 1 && /^annual-report\.pdf could not be read/.test(a[0]) && !RAW.test(a[0]), a);
  check("annual-report.pdf row is marked Ignored", r.some((x) => /^annual-report\.pdf.*Ignored/.test(x)), r);

  await page.getByRole("button", { name: /Remove/ }).first().click();
  await L.sleep(2500);
  a = await alerts(page);
  r = await rows(page);
  check("after Remove: the next refusal names holdings.xlsx in a reader sentence", a.length === 1 && /^holdings\.xlsx could not be read/.test(a[0]) && !RAW.test(a[0]), a);
  check("after Remove: annual-report.pdf is gone and does not reappear as Ignored", !r.some((x) => /annual-report/.test(x)), r);
  check("after Remove: holdings.xlsx is the Ignored row", r.some((x) => /^holdings\.xlsx.*Ignored/.test(x)), r);

  await page.locator("[aria-label='Documents added'] li", { hasText: "holdings.xlsx" }).getByRole("button", { name: /Remove/ }).click();
  await L.sleep(2500);
  a = await alerts(page);
  r = await rows(page);
  check("after the last bad file is removed: no refusal and only the readable file remains", a.length === 0 && r.length === 1 && /northbridge-filing/.test(r[0]), { a, r });
}).then(
  () => process.exit(failures.length ? 1 : 0),
  (error) => {
    console.log(`FAIL walk broke: ${error}`);
    process.exit(1);
  },
);
