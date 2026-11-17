// T07 walk (C2-002, review finding 2): the leave confirmation for a form that holds documents carried from an earlier run,
// by Start from this run and by Carry over from latest run, with no name typed. Written from the T07 reviewer's scratch
// carry.cjs. Needs a finished synthetic run to carry, which the walk makes through the page.
//   C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/walk-carried-work.cjs
"use strict";
const { L, check, run, issuerName, rowCount } = require("./walk-lib.cjs");

run("walk-carried-work", async (page, ctx) => {
  const earlier = await L.finishedRun(ctx);
  let dialogs = [];
  page.on("dialog", async (d) => {
    dialogs.push(d.type());
    await d.accept();
  });
  /** Reloads after a user gesture and says whether the browser asked first. */
  const reloadAsks = async () => {
    dialogs = [];
    await issuerName(page)
      .click()
      .catch(() => undefined);
    await page.reload();
    await page.waitForTimeout(600);
    return dialogs.length > 0;
  };

  await page.goto(`${L.BASE}/start?from=${earlier}`);
  await issuerName(page).waitFor();
  check(
    "Start from this run, nothing done yet: Reload raises no confirmation",
    !(await reloadAsks()),
  );

  await page.goto(`${L.BASE}/start?from=${earlier}`);
  await issuerName(page).waitFor();
  await page.getByRole("button", { name: "Inspect documents" }).click();
  await page.waitForFunction(
    () => document.querySelectorAll("[aria-label='Documents added'] li").length > 0,
    undefined,
    { timeout: 15000 },
  );
  const carried = await rowCount(page);
  const named = await page.getByRole("textbox", { name: "Your name", exact: true }).inputValue();
  check(
    "Start from this run, its documents carried and no name typed: Reload asks first",
    carried > 0 && named === "" && (await reloadAsks()),
    { carried, named },
  );

  await page.goto(`${L.BASE}/start`);
  await issuerName(page).fill("Northbridge Synthetic Group");
  await page.getByRole("button", { name: "Carry over from latest run" }).click();
  await page
    .getByText(/Starting from run/)
    .first()
    .waitFor();
  check(
    "Carry over from latest run, nothing else typed: Reload raises no confirmation",
    !(await reloadAsks()),
  );

  await page.goto(`${L.BASE}/start`);
  await issuerName(page).fill("Northbridge Synthetic Group");
  await page.getByRole("button", { name: "Carry over from latest run" }).click();
  await page
    .getByText(/Starting from run/)
    .first()
    .waitFor();
  await page.getByRole("button", { name: "Inspect documents" }).click();
  await page.waitForFunction(
    () => document.querySelectorAll("[aria-label='Documents added'] li").length > 0,
    undefined,
    { timeout: 15000 },
  );
  const carriedByButton = await rowCount(page);
  check(
    "Carry over from latest run, its documents carried: Reload asks first",
    carriedByButton > 0 && (await reloadAsks()),
    { carried: carriedByButton },
  );
});
