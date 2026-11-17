// T10 walk (C2-008): 50 unfinished drafts, all abandoned for more than 2 hours (their folders aged on disk),
// must not stop a new form; a fresh draft (just made) and a draft that reached the review's summary must stay.
// Exit 1 when a check fails (it does on the base commit), 0 when every check holds.
//   C2_PORT=8750 node docs/audit/2026-11-16-final/output/5-repair/T10/walk-abandoned-drafts.cjs
"use strict";
const L = require("../../2-sections/C2/probes/lib.cjs");
const fs = require("node:fs");
const path = require("node:path");
const uploads = () => path.join(L.root(), "_engine", "uploads");
const ids = () => fs.readdirSync(uploads()).filter((n) => /^[0-9a-f]{32}$/.test(n));
const failures = [];
const check = (label, ok, seen) => { console.log(`${ok ? "ok  " : "FAIL"} ${label}  [${JSON.stringify(seen)}]`); if (!ok) failures.push(label); };
(async () => {
  const log = L.newLog();
  const browser = await L.launch();
  try {
    const ctx = await L.context(browser, { log });
    const origin = { Origin: L.BASE };
    let made = 0;
    while (ids().length < 50 && made < 60) { const r = await fetch(`${L.BASE}/api/submissions`, { method: "POST", headers: origin }); if (!r.ok) break; made += 1; }
    check("50 drafts exist", ids().length === 50, ids().length);
    const keep = ids()[0]; // stays fresh: a live form
    const issued = ids()[1]; // reached the review: carries an issued approval
    fs.writeFileSync(path.join(uploads(), issued, "issued"), "0".repeat(64) + "\n");
    const old = Date.now() / 1000 - 3 * 3600;
    for (const id of ids()) if (id !== keep) fs.utimesSync(path.join(uploads(), id), old, old);
    const p = await ctx.newPage();
    L.watch(p, log);
    await p.goto(`${L.BASE}/start`);
    await p.getByRole("textbox", { name: "Issuer name", exact: true }).waitFor();
    await L.fillIdentity(p); await L.addFiles(p, ["filing"]);
    await p.getByRole("button", { name: "Continue to purpose" }).click();
    await p.getByRole("heading", { name: "Purpose", exact: true }).waitFor({ timeout: 5000 }).catch(() => {});
    const alerts = await p.locator("[role=alert]").allInnerTexts();
    check("the form reaches Purpose with 50 abandoned drafts", (await p.getByRole("heading", { name: "Purpose", exact: true }).count()) === 1, alerts);
    check("the fresh draft is kept", ids().includes(keep), null);
    check("the draft with an approval issued is kept", ids().includes(issued), null);
    check("the count stays at or under 50", ids().length <= 50, ids().length);
  } catch (e) { check("walk ran", false, String(e).slice(0, 300)); } finally { await browser.close(); }
  process.exit(failures.length ? 1 : 0);
})();
