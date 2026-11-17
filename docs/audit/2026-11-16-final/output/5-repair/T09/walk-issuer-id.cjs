// T09 round 2 walk (J5-004, ruling L18): an Issuer ID is one issuer's, at every route.
//  1. Holdings runs under the usual (cut) ID; Finance, with the same first 40 characters, gets a suffixed ID and the
//     review sheet says which issuer holds the usual one.
//  2. A third issuer types the Holdings ID by hand: the review is refused on the Issuer ID field with a reader
//     sentence naming the holder; the page offers the suffixed ID; taking the offer reaches the review sheet.
//     The offer is Eastmoor's own usual ID (free), not a suffixed one; the refusal says only that the ID is filed under
//     the holder's name, and what to do if that is this issuer under another name (round 3).
//  3. "Carry over from latest run" on the Finance name looks up the suffixed ID: it carries Finance's run, not Holdings'.
//  4. A name with no Latin letters types the Holdings ID: refused, no ID offered, the analyst is asked to type one.
// Exit 1 when a check fails, 0 when every check holds. Port 8765 (lock: /tmp/repair1-port-8765.lock):
//   timeout 900 flock /tmp/repair1-port-8765.lock timeout 600 node docs/audit/2026-11-16-final/output/5-repair/T09/walk-issuer-id.cjs
"use strict";
const lib = require("../../3-journeys/J5/probes/_j5lib.cjs");

const failures = [];
function check(label, ok, seen) {
  console.log(`${ok ? "ok  " : "FAIL"} ${label}  [${JSON.stringify(seen)}]`);
  if (!ok) failures.push(label);
}
const main = async (page) => (await page.locator("main").innerText()).replace(/\s+/g, " ");
const HOLDINGS = "Northbridge Synthetic Group International Holdings Limited";
const FINANCE = "Northbridge Synthetic Group International Finance plc";
const USUAL = "northbridge-synthetic-group-internationa";

lib.segment("t09-id", async ({ page, origin }) => {
  const a = await lib.submitRun(page, origin, { issuer: HOLDINGS, asOf: "2025-03-31" });
  await lib.waitEnded(origin, a);
  await lib.waitPublished(origin, a);

  let sheet = "";
  const b = await lib.submitRun(page, origin, {
    issuer: FINANCE,
    asOf: "2025-06-30",
    onReview: async (p) => {
      await p.waitForTimeout(500);
      sheet = await main(p);
    },
  });
  await lib.waitEnded(origin, b);
  await lib.waitPublished(origin, b);
  const id = /Issuer ID\s+(northbridge-synthetic-group-int-[0-9a-f]{8})/.exec(sheet)?.[1];
  check("1: Finance gets a suffixed ID", Boolean(id), id);
  check(
    "1: the review sheet names the holder of the usual ID",
    sheet.includes(`${USUAL} is filed under the name "${HOLDINGS}". If that is this issuer under another name, type that name.`),
    sheet.slice(sheet.indexOf("Issuer ID") - 40, sheet.indexOf("Issuer ID") + 260),
  );

  // 2. a hand-typed ID filed under another issuer
  let failed = "";
  try {
    await lib.submitRun(page, origin, {
      issuer: "Eastmoor Synthetic Utilities plc",
      asOf: "2025-06-30",
      onDocuments: async (p) => {
        await p.getByLabel("Issuer ID", { exact: true }).fill(USUAL);
      },
    });
  } catch (error) {
    failed = String(error).slice(0, 80);
  }
  const text = await main(page);
  const sentence = `Issuer ID ${USUAL} is filed under the name "${HOLDINGS}". If that is this issuer under another name, type that name.`;
  check("2: Submit is not reached; the Issuer ID field shows the refusal", Boolean(failed) && text.includes(sentence), text.slice(Math.max(0, text.indexOf("Issuer ID") - 20), text.indexOf("Issuer ID") + 420));
  const offer = page.getByRole("button", { name: /^Use eastmoor-synthetic-utilities-plc$/ });
  check("2: the name's usual ID is offered (it is free), not a suffixed one", (await offer.count()) === 1, await offer.allInnerTexts());
  check("2: the field is marked invalid", (await page.locator('[data-field="issuer_id"]').getAttribute("aria-invalid")) === "true");
  await offer.click();
  const taken = await page.getByLabel("Issuer ID", { exact: true }).inputValue();
  check("2: taking the offer fills the field", taken === "eastmoor-synthetic-utilities-plc", taken);
  await page.getByRole("button", { name: "Continue to purpose", exact: true }).click();
  await page.getByRole("button", { name: "Continue to context", exact: true }).click();
  await page.getByRole("button", { name: "Review run", exact: true }).click();
  await page.getByRole("button", { name: "Submit run", exact: true }).waitFor();
  check("2: the review sheet opens with the taken ID", (await main(page)).includes(`Issuer ID ${taken}`), taken);

  // 3. carry over: the issuer's own run, found under the settled ID
  await page.goto(origin + "/start");
  await page.getByLabel("Issuer name", { exact: true }).fill(FINANCE);
  await page.getByRole("button", { name: "Carry over from latest run", exact: true }).click();
  await page.waitForTimeout(1500);
  const carried = await main(page);
  const idField = await page.getByLabel("Issuer ID", { exact: true }).inputValue();
  check("3: carry over from latest run carries Finance run (not Holdings) under the suffixed ID", idField === id && carried.includes(`Starting from run ${b}.`), { idField, intro: carried.slice(carried.indexOf("Issuer and case date"), carried.indexOf("Issuer and case date") + 300) });

  // 4. a name with no Latin letters: no invalid ID is offered
  let failed4 = "";
  try {
    await lib.submitRun(page, origin, {
      issuer: "中国银行",
      asOf: "2025-06-30",
      onDocuments: async (p) => {
        await p.getByLabel("Issuer ID", { exact: true }).fill(USUAL);
      },
    });
  } catch (error) {
    failed4 = String(error).slice(0, 80);
  }
  const text4 = await main(page);
  check("4: Submit is not reached; the Issuer ID field asks for an ID of the analyst's own", Boolean(failed4) && text4.includes("Otherwise type an Issuer ID of your own for 中国银行."), text4.slice(Math.max(0, text4.indexOf("Issuer ID") - 20), text4.indexOf("Issuer ID") + 420));
  check("4: no ID is offered", (await page.getByRole("button", { name: /^Use / }).count()) === 0, await page.getByRole("button", { name: /^Use / }).allInnerTexts());
}).then(() => {
  process.exit(failures.length ? 1 : process.exitCode || 0);
});
