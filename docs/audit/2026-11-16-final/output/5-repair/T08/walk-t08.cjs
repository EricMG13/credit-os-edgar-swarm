// T08 walk (C2-004, C2-006, J2-013, J1-004): the run-options load states, the refused and lost Submit messages and where they
// are drawn, and the required periods of Earnings Update. It replaces the verdicts of p12-states.cjs (it waits for the text
// "Loading run options…", which is now a skeleton) and j1-004-earnings-update-required-periods.cjs (it waits for a step text that
// starts "Optional." and that Earnings Update no longer shows), neither of which can pass on the repaired page. The probes are
// not edited. Submit is never sent to the service: every submit is fulfilled or aborted here.
//   C2_PORT=8748 node docs/audit/2026-11-16-final/output/5-repair/T08/walk-t08.cjs
"use strict";
process.env.C2_PORT = process.env.C2_PORT || "8748";
const { L, check, run } = require("../T07/walk-lib.cjs");

const alerts = (page) => page.locator("[role=alert]").allInnerTexts();
const mainText = (page) => page.locator("main").innerText();

async function openStart(ctx, handler) {
  const page = await ctx.newPage();
  if (handler) await ctx.route("**/connected/context", handler);
  await page.goto(`${L.BASE}/start`);
  return page;
}

run("walk-t08", async (_page, ctx) => {
  // ---- C2-004: loading
  {
    let release;
    const gate = new Promise((resolve) => {
      release = resolve;
    });
    const page = await openStart(ctx, async (route) => {
      await gate;
      await route.continue();
    });
    await page.waitForTimeout(800);
    const text = await mainText(page);
    check("loading: no 'Loading run options…' sentence and no intro", !/Loading run options…|Choose the documents and purpose/.test(text), text.slice(-120));
    check("loading: a status region named 'Loading run options' holds a skeleton", (await page.getByRole("status", { name: "Loading run options" }).count()) === 1);
    release();
    await page.getByRole("textbox", { name: "Issuer name", exact: true }).waitFor();
    check("loading: the form and the intro arrive together", /Choose the documents and purpose/.test(await mainText(page)));
    await page.close();
  }
  // ---- C2-004: failures, with Try again
  for (const [label, fulfill] of [
    ["500 json {error:'boom: internal'}", { status: 500, contentType: "application/json", body: JSON.stringify({ error: "boom: internal" }) }],
    ["500 html", { status: 500, contentType: "text/html", body: "<html>oops</html>" }],
    ["connection refused", null],
  ]) {
    let failing = true;
    const page = await openStart(ctx, (route) => {
      if (!failing) return route.continue();
      return fulfill ? route.fulfill(fulfill) : route.abort();
    });
    const alert = page.getByRole("alert");
    await alert.waitFor();
    const text = (await alert.innerText()).replace(/\s+/g, " ");
    check(`${label}: an alert with a fixed sentence and no raw text`, /could not be loaded|cannot be reached/.test(text) && !/boom|oops|\(500\)|Failed to fetch/.test(text), text);
    check(`${label}: the intro is not shown`, !/Choose the documents and purpose/.test(await mainText(page)));
    failing = false;
    await alert.getByRole("button", { name: "Try again" }).click();
    await page.getByRole("textbox", { name: "Issuer name", exact: true }).waitFor();
    check(`${label}: Try again loads the form`, /Choose the documents and purpose/.test(await mainText(page)));
    await page.close();
  }
  // ---- C2-006 and J2-013: refused and lost Submit
  const cases = {
    s400: { status: 400, body: { error: "documents or answers changed after approval" } },
    s404: { status: 404, body: { error: "unknown submission" } },
    s500: { status: 500, body: { error: "launcher failed" } },
    snet: { abort: true },
  };
  for (const [label, spec] of Object.entries(cases)) {
    const page = await ctx.newPage();
    let hits = 0;
    await ctx.route("**/api/submissions/*/submit", (route) => {
      hits += 1;
      if (spec.abort) return route.abort();
      return route.fulfill({ status: spec.status, contentType: "application/json", body: JSON.stringify(spec.body) });
    });
    await L.reachReview(page, { agreement: false });
    await L.decideAndApprove(page);
    const submit = page.getByRole("button", { name: "Submit run", exact: true });
    await submit.click();
    await page.getByRole("dialog").getByRole("button", { name: "Start synthetic run" }).click();
    await page.waitForTimeout(1200);
    const seen = await alerts(page);
    check(`${label}: one alert`, seen.length === 1, seen);
    const text = seen[0] ?? "";
    if (label === "s400" || label === "s404") {
      check(`${label}: capitalised, with a full stop, then the next sentence`, /^[A-Z][^.]*\. Review the run again before submitting\.$/.test(text), text);
    } else {
      const box = await page.locator("[role=alert]").first().boundingBox();
      const button = await submit.boundingBox();
      const inView = !!box && box.y >= 0 && box.y + box.height <= 900;
      check(`${label}: the alert is in the viewport, ${Math.round(Math.abs((button?.y ?? 0) - (box?.y ?? 0)))} px from Submit`, inView && !!button && Math.abs(button.y - box.y) < 300, { top: box?.y, submitTop: button?.y });
      check(`${label}: says whether the run started and that a repeat is safe, no raw browser text, no repeated 'try again'`, /whether the run started|may or may not have started/.test(text) && /Submitting again is safe\./.test(text) && !/Failed to fetch|try again/i.test(text), text);
      await submit.click();
      await page.getByRole("dialog").getByRole("button", { name: "Start synthetic run" }).click();
      await page.waitForTimeout(800);
      check(`${label}: Submit can be pressed again (second request sent)`, hits === 2, hits);
    }
    await ctx.unroute("**/api/submissions/*/submit");
    await page.close();
  }
  // ---- J1-004: Earnings Update periods
  {
    const page = await ctx.newPage();
    await page.goto(`${L.BASE}/start`);
    await page.getByRole("textbox", { name: "Issuer name", exact: true }).waitFor();
    await L.fillIdentity(page);
    await L.addFiles(page, ["filing"]);
    await L.toPurpose(page);
    await page.getByText("Earnings Update", { exact: true }).first().click();
    await L.toContext(page);
    const intro = await page.locator("main p").filter({ hasText: /^Current period and Prior period are required/ }).count();
    check("Earnings Update: the step text says the two periods are required", intro === 1);
    const labels = await page.evaluate(() => [...document.querySelectorAll("label")].filter((l) => /period/i.test(l.innerText)).map((l) => l.innerText.replace(/\s+/g, " ").trim()));
    check("Earnings Update: both labels are marked required", labels.filter((x) => /\(required\)/.test(x)).length === 2, labels);
    check("Earnings Update: the stepper note no longer says Optional", /Periods required/.test(await page.getByRole("list", { name: "Steps in this run" }).innerText()));
    await page.getByRole("button", { name: "Review run", exact: true }).click();
    await page.waitForTimeout(600);
    const first = await alerts(page);
    const native = await page.evaluate(() => document.activeElement?.validationMessage ?? "");
    check("Earnings Update: Review run with both empty gives the page's own alert, not the browser's tooltip", first.some((a) => /Current period is required for Earnings Update\./.test(a)) && native === "", { first, native });
    await page.getByRole("textbox", { name: /^Current period/ }).fill("q3-2026");
    await page.getByRole("button", { name: "Review run", exact: true }).click();
    await page.waitForTimeout(600);
    check("Earnings Update: then Prior period is reported", (await alerts(page)).some((a) => /Prior period is required for Earnings Update\./.test(a)), await alerts(page));
    await page.getByRole("textbox", { name: /^Prior period/ }).fill("q2-2026");
    await page.getByRole("button", { name: "Review run", exact: true }).click();
    await page.getByRole("heading", { name: "Review and start", exact: true }).waitFor();
    check("Earnings Update: with both periods the review opens", true);
    await page.close();
  }
});
