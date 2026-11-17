// T07 walk (J2-002 and J1-015, ruling L15): the case date is the analyst's to enter. A new form opens with the as-of date
// empty and required; Continue waits for it; Start from this run and Carry over from latest run open it empty too (ruling
// L15a: the service blanks the earlier run's date, so no path opens on a date the analyst did not enter); a date left out
// reaches Review run only by a path the form does not block, and the review asks for it. Needs a finished synthetic run to start from, which the walk makes through the page.
//   C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/walk-case-date.cjs
"use strict";
const { L, check, run, stepShown, issuerName, where } = require("./walk-lib.cjs");

run("walk-case-date", async (page, ctx, log) => {
  const date = page.getByRole("textbox", { name: "As-of date", exact: true });
  const value = () => date.inputValue({ timeout: 1500 }).catch(() => null);
  const hint = page.getByText(/^Set to today for the new run\. The earlier run used /);

  const section = async (label, body) => {
    try {
      await body();
    } catch (error) {
      check(`${label}: the section ran to its end`, false, String(error).slice(0, 200));
    }
  };

  // 1. A new form: the date is empty, required, unexplained.
  await section("a new form", async () => {
    await page.goto(`${L.BASE}/start`);
    await issuerName(page).waitFor();
    check("a new form: the as-of date is empty", (await value()) === "", await value());
    check("a new form: the as-of date is required", (await date.getAttribute("required")) !== null);
    check("a new form: no line says the date was set to today", (await hint.count()) === 0);
  });

  // 2. Continue waits for the date; the browser asks for it and nothing is requested.
  await section("Continue with no date", async () => {
    await page.goto(`${L.BASE}/start`);
    await issuerName(page).waitFor();
    await issuerName(page).fill("Northbridge Synthetic Group");
    await page.getByRole("textbox", { name: "Your name", exact: true }).fill("Audit Z");
    await L.addFiles(page, ["filing", "workbook"]);
    const before = log.requests.filter((r) => r.startsWith("POST /api/submissions")).length;
    await page.getByRole("button", { name: "Continue to purpose", exact: true }).click();
    await page.waitForTimeout(1200);
    const asked =
      (await stepShown(page)) === "Documents" &&
      (await date.evaluate((el) => el.validity.valueMissing && document.activeElement === el));
    check(
      "Continue with no date stays on Documents, the date asked for and focused, no request made",
      (await stepShown(page)) === "Documents" &&
        asked &&
        log.requests.filter((r) => r.startsWith("POST /api/submissions")).length === before,
      { step: await stepShown(page), asked },
    );
    await date.fill("2025-03-31");
    await L.toPurpose(page);
    check("with a date entered the form goes on to Purpose", (await stepShown(page)) === "Purpose");
  });

  // 3. A date emptied after the form was passed: Back to Documents, empty it, Forward past the required check; Review run asks.
  await section("a date emptied after the form was passed", async () => {
    await page.goBack();
    await page.waitForTimeout(500);
    await date.fill("");
    await page.goForward();
    await page.waitForTimeout(500);
    await L.toContext(page);
    await page.getByRole("button", { name: "Review run", exact: true }).click();
    await page.waitForTimeout(2500);
    const step = await stepShown(page);
    const alerts = await page.locator("[role=alert]").allInnerTexts();
    check("Review run with the date emptied does not open a review", step !== "Review and start", {
      step,
    });
    check(
      "Review run with the date emptied names the as-of date",
      alerts.some((t) => /As-of date/i.test(t)),
      alerts,
    );
  });

  // 4. Started from an earlier run, and carried over from the latest: the date opens empty and required (ruling L15a).
  await section("Start from this run and Carry over", async () => {
    const earlier = await L.finishedRun(ctx);
    await page.goto(`${L.BASE}/start?from=${earlier}`);
    await issuerName(page).waitFor();
    await page.waitForTimeout(800);
    check("Start from this run: the as-of date opens empty", (await value()) === "", await value());
    check("Start from this run: the as-of date is required", (await date.getAttribute("required")) !== null);
    check("Start from this run: no line says the date was set to today", (await hint.count()) === 0);
    await page.goto(`${L.BASE}/start`);
    await issuerName(page).waitFor();
    await issuerName(page).fill("Northbridge Synthetic Group");
    await page.getByRole("button", { name: "Carry over from latest run", exact: true }).click();
    await page.getByText(/Starting from run /).waitFor({ timeout: 8000 });
    await page.waitForTimeout(500);
    check("Carry over from latest run: the as-of date opens empty", (await value()) === "", await value());
    check("Carry over from latest run: the as-of date is required", (await date.getAttribute("required")) !== null);
    check("Carry over from latest run: no line says the date was set to today", (await hint.count()) === 0);
  });
});
