// T07 walk (C2-002 with J2-001): Back, Forward, Reload and the rail's Library link in the middle of the Start a run
// form, the browser's leave confirmation dismissed and accepted, a complete Submit, and the page closed.
// Written from the T07 reviewer's scratch walk (walk.cjs) with a check on every observation. It replaces the exit codes of
// j2-001-leave-mid-form.cjs and p10-navigation.cjs, which cannot pass on the repaired page (see ../T07.md, Round 2).
//   C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/walk-leave-and-return.cjs
"use strict";
const {
  L,
  check,
  run,
  stepShown,
  issuerName,
  issuerValue,
  rowCount,
  where,
} = require("./walk-lib.cjs");

const ISSUER = "Northbridge Synthetic Group";
const NOTE = "Check the 2028 maturities.";

run("walk-leave-and-return", async (page, ctx) => {
  let dialogs = [];
  let mode = "dismiss";
  const answer = async (d) => {
    dialogs.push(d.type());
    if (mode === "accept") await d.accept();
    else await d.dismiss();
  };
  page.on("dialog", answer);
  const settle = () => page.waitForTimeout(500);
  const stepAndState = async () => ({ step: await stepShown(page), url: where(page) });

  // 1. A form with nothing on it: no confirmation anywhere.
  await page.goto(`${L.BASE}/runs`);
  await page.goto(`${L.BASE}/start`);
  await issuerName(page).waitFor();
  check("a new form opens with the issuer name empty", (await issuerValue(page)) === "");
  await issuerName(page).click(); // a user gesture, so the browser may ask
  await page.reload();
  await issuerName(page).waitFor();
  check("an untouched form: Reload raises no confirmation", dialogs.length === 0, dialogs);
  await issuerName(page).click();
  await page.getByRole("link", { name: "Library", exact: true }).first().click();
  await page.waitForURL(`${L.BASE}/`);
  check(
    "an untouched form: the Library link leaves at once, no confirmation",
    dialogs.length === 0 && where(page) === "/",
    { dialogs, url: where(page) },
  );

  // 2. A form with work: documents, a name, the purpose step and a note on More context.
  await page.goto(`${L.BASE}/start`);
  await L.fillIdentity(page, { issuer: ISSUER });
  await L.addFiles(page, ["filing", "workbook"]);
  await L.toPurpose(page);
  await L.toContext(page);
  await page.getByLabel("Anything the analysis should know").fill(NOTE);
  check(
    "at the third step the address is still /start and the step is More context",
    (await stepAndState()).step === "More context" && where(page) === "/start",
    await stepAndState(),
  );
  dialogs = [];
  await page.goBack();
  await settle();
  check(
    "Back from More context shows Purpose and stays on /start",
    (await stepAndState()).step === "Purpose" && where(page) === "/start",
    await stepAndState(),
  );
  await page.goBack();
  await settle();
  check(
    "Back again shows Documents with the issuer, the name and both files kept",
    (await stepShown(page)) === "Documents" &&
      (await issuerValue(page)) === ISSUER &&
      (await rowCount(page)) === 2 &&
      (await page.getByRole("textbox", { name: "Your name", exact: true }).inputValue()) ===
        "Audit Z",
    { issuer: await issuerValue(page), rows: await rowCount(page) },
  );
  await page.goForward();
  await settle();
  check("Forward shows Purpose", (await stepShown(page)) === "Purpose");
  await page.goForward();
  await settle();
  check(
    "Forward again shows More context with the note kept",
    (await stepShown(page)) === "More context" &&
      (await page.getByLabel("Anything the analysis should know").inputValue()) === NOTE,
  );
  check(
    "moving between steps with Back and Forward raises no confirmation",
    dialogs.length === 0,
    dialogs,
  );

  // 3. The Previous button makes an entry too, so Back retraces it.
  await page.getByRole("button", { name: "Previous", exact: true }).click();
  await settle();
  const trail = [await stepShown(page)];
  for (let i = 0; i < 3; i += 1) {
    await page.goBack();
    await settle();
    trail.push(await stepShown(page));
  }
  check(
    "Previous, then Back three times, retraces Purpose, More context, Purpose, Documents",
    JSON.stringify(trail) === JSON.stringify(["Purpose", "More context", "Purpose", "Documents"]),
    trail,
  );

  // 4. Leaving by the rail's Library link with work on the form: the browser asks; dismissed keeps everything, accepted leaves.
  dialogs = [];
  mode = "dismiss";
  await page.getByRole("link", { name: "Library", exact: true }).first().click();
  await page.waitForTimeout(1000);
  check(
    "Library link with work: one confirmation was raised and dismissing it keeps the form",
    dialogs.length === 1 &&
      where(page) === "/start" &&
      (await issuerValue(page)) === ISSUER &&
      (await rowCount(page)) === 2,
    { dialogs, url: where(page), issuer: await issuerValue(page), rows: await rowCount(page) },
  );
  mode = "accept";
  dialogs = [];
  await page.getByRole("link", { name: "Library", exact: true }).first().click();
  await page.waitForURL(`${L.BASE}/`);
  check(
    "Library link, confirmation accepted: the page leaves for the Library",
    dialogs.length === 1 && where(page) === "/",
    { dialogs, url: where(page) },
  );
  await page.goBack();
  await issuerName(page).waitFor();
  check(
    "Back after leaving shows a blank Documents form (what the confirmation warned about)",
    (await stepShown(page)) === "Documents" &&
      (await issuerValue(page)) === "" &&
      (await rowCount(page)) === 0,
    { step: await stepShown(page), issuer: await issuerValue(page), rows: await rowCount(page) },
  );

  // 5. Reload with work: dismissed keeps the form, accepted gives a blank one.
  await L.fillIdentity(page, { issuer: ISSUER });
  await L.addFiles(page, ["filing"]);
  await issuerName(page).click();
  dialogs = [];
  mode = "dismiss";
  const dismissedReload = await page.reload({ timeout: 4000 }).then(
    () => "reloaded",
    (e) => String(e).slice(0, 60),
  );
  check(
    "Reload with work: one confirmation; dismissed, the form keeps its issuer and file",
    dialogs.length === 1 && (await issuerValue(page)) === ISSUER && (await rowCount(page)) === 1,
    { dialogs, dismissedReload, issuer: await issuerValue(page), rows: await rowCount(page) },
  );
  mode = "accept";
  dialogs = [];
  await page.reload();
  await issuerName(page).waitFor();
  check(
    "Reload with work, confirmation accepted: a blank form",
    dialogs.length === 1 && (await issuerValue(page)) === "" && (await rowCount(page)) === 0,
    { dialogs, issuer: await issuerValue(page), rows: await rowCount(page) },
  );

  // 6. Closing the page with work on it asks as well (Playwright runs the page's beforeunload when asked).
  await L.fillIdentity(page, { issuer: ISSUER });
  await L.addFiles(page, ["filing"]);
  await issuerName(page).click(); // the browser asks only after the analyst has used the page
  dialogs = [];
  mode = "dismiss";
  await page.close({ runBeforeUnload: true });
  await page.waitForTimeout(500);
  check(
    "closing the page with work: one confirmation, and dismissing it keeps the page open",
    dialogs.length === 1 && !page.isClosed(),
    { dialogs, closed: page.isClosed() },
  );

  // 7. A complete Submit raises no confirmation; Back from the run page opens a blank form, as before (J2-001's last clause).
  const run2 = await ctx.newPage();
  L.watch(run2, L.newLog());
  dialogs = [];
  mode = "dismiss";
  run2.on("dialog", answer);
  await L.reachReview(run2, { agreement: true });
  await L.decideAndApprove(run2);
  await run2.getByRole("button", { name: /^Submit/ }).click();
  const confirm = run2.getByRole("dialog");
  await confirm.waitFor();
  await confirm.getByRole("button", { name: "Start synthetic run" }).click();
  await run2.waitForURL(/\/run\//, { timeout: 30000 });
  check(
    "a complete Submit raises no confirmation and reaches the run page",
    dialogs.length === 0 && /^\/run\//.test(where(run2)),
    { dialogs, url: where(run2) },
  );
  await run2.goBack();
  await run2.waitForTimeout(1200);
  check(
    "Back from the run page opens a blank form and raises no confirmation (not restored: the draft was consumed)",
    dialogs.length === 0 && (await issuerValue(run2)) === "",
    { dialogs, url: where(run2), issuer: await issuerValue(run2) },
  );
  await run2.goForward();
  await run2.waitForTimeout(1200);
  check(
    "Forward to the run page raises no confirmation",
    dialogs.length === 0 && /^\/run\//.test(where(run2)),
    { dialogs, url: where(run2) },
  );
  await L.waitForEnd(run2); // the service must not be stopped under a run that is still writing its folder
});
