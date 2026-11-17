// T07 walk (C2-002): random Back, Forward, Previous, Continue, Review run, Edit issuer and documents and stepper clicks on
// one form. After every action the step the form shows must be the step the history entry stands for (history.state.startRun),
// the page must still be on /start (Back from the first entry leaves it, which ends that sequence), and the issuer name and
// both files must be intact whenever Documents is shown.
// Written from the T07 reviewer's scratch fuzz.cjs and fuzz2.cjs (seeded, so a run repeats). The leave confirmation is accepted
// so a walk is never held up by it.
//   C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/walk-random-steps.cjs
"use strict";
const { L, check, run, stepShown, issuerValue, rowCount, where } = require("./walk-lib.cjs");

const NAMES = {
  documents: "Documents",
  purpose: "Purpose",
  context: "More context",
  review: "Review and start",
};
const rng = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
// [first seed .. last seed, actions per sequence, start on More context, cumulative cut-offs for back, forward, continue, previous, review, edit]
const SETS = [
  { seeds: [1, 8], actions: 22, toContext: false, cuts: [0.2, 0.32, 0.52, 0.64, 0.76, 0.86] },
  { seeds: [1, 6], actions: 24, toContext: true, cuts: [0.25, 0.4, 0.5, 0.6, 0.85, 0.93] },
];
const ACTS = ["back", "forward", "continue", "previous", "review", "edit"];

run("walk-random-steps", async (page) => {
  page.on("dialog", (d) => d.accept());
  let problems = 0;
  let actions = 0;
  for (const set of SETS) {
    for (let seed = set.seeds[0]; seed <= set.seeds[1]; seed += 1) {
      const next = rng(seed * 7919);
      await page.goto(`${L.BASE}/runs`);
      await page.goto(`${L.BASE}/start`);
      await page.getByRole("textbox", { name: "Issuer name", exact: true }).waitFor();
      await L.fillIdentity(page);
      await L.addFiles(page, ["filing", "workbook"]);
      if (set.toContext) {
        await L.toPurpose(page);
        await L.toContext(page);
      }
      const trail = [];
      for (let i = 0; i < set.actions; i += 1) {
        const r = next();
        const index = set.cuts.findIndex((cut) => r < cut);
        const act = index < 0 ? "stepper" : ACTS[index];
        const before = await stepShown(page);
        const press = (role, name) =>
          page.getByRole(role, { name }).first().click({ timeout: 2000 });
        const present = async (name) => (await page.getByRole("button", { name }).count()) > 0;
        try {
          if (act === "back") await page.goBack({ timeout: 3000 });
          else if (act === "forward") await page.goForward({ timeout: 3000 });
          else if (act === "continue" && (await present(/^Continue to (purpose|context)$/)))
            await press("button", /^Continue to (purpose|context)$/);
          else if (act === "previous" && (await present("Previous")))
            await press("button", "Previous");
          else if (act === "review" && (await present("Review run")))
            await press("button", "Review run");
          else if (act === "edit" && (await present("Edit issuer and documents")))
            await press("button", "Edit issuer and documents");
          else if (act === "stepper") {
            const buttons = page.getByRole("button", {
              name: /^(Documents|Purpose|More context)$/,
            });
            const n = await buttons.count();
            if (n) await buttons.nth(Math.floor(next() * n)).click({ timeout: 2000 });
          }
        } catch (error) {
          trail.push(`${act}: ${String(error).slice(0, 60)}`);
        }
        await page.waitForTimeout(450);
        actions += 1;
        if (!where(page).startsWith("/start")) {
          // Back from the first entry (Documents) goes to the page before the form: that ends the sequence, and is right.
          const right = act === "back" && before === "Documents";
          if (!right) problems += 1;
          trail.push(
            `${act}: LEFT /start -> ${where(page)}${right ? " (Back from the first entry)" : " UNEXPECTED"}`,
          );
          break;
        }
        const shown = await stepShown(page);
        const placed = await page.evaluate(() => (history.state && history.state.startRun) || null);
        const agree = placed !== null && NAMES[placed] === shown;
        trail.push(`${act}:${before}->${shown}${agree ? "" : ` MISMATCH state=${placed}`}`);
        if (!agree) problems += 1;
        if (shown === "Documents") {
          const issuer = await issuerValue(page);
          const rows = await rowCount(page);
          if (issuer !== "Northbridge Synthetic Group" || rows !== 2) {
            problems += 1;
            trail.push(`LOST VALUES issuer=${issuer} rows=${rows}`);
          }
        }
      }
      console.log(
        `seed ${seed} (${set.toContext ? "from More context" : "from Documents"}): ${trail.join(" | ")}`,
      );
    }
  }
  check(
    `after each of ${actions} actions the step shown is the history entry's, /start is kept and typed values are intact`,
    problems === 0,
    { problems },
  );
});
