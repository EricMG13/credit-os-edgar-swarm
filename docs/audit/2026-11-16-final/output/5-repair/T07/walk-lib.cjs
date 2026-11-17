// Shared by the T07 walks: the C2 probe library (starts its own proof.serve and the headless Chromium shell),
// a default port, and a pass/fail tally. Not a probe; never edit the probes it reuses.
//   Run a walk from the repository root:
//     C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/<walk>.cjs
//   C2_PORT defaults to 8747 here; each walk starts its own service on that port and refuses a busy port.
//   Exit 0: every check held. Exit 1: a check failed, or the walk itself broke.
"use strict";
process.env.C2_PORT = process.env.C2_PORT || "8747";
const L = require(
  `${process.cwd()}/docs/audit/2026-11-16-final/output/2-sections/C2/probes/lib.cjs`,
);

const failures = [];
/** Prints one observation; a false `ok` is recorded as a failure. */
function check(label, ok, seen) {
  const shown =
    seen === undefined ? "" : `  [${typeof seen === "string" ? seen : JSON.stringify(seen)}]`;
  console.log(`${ok ? "ok  " : "FAIL"} ${label}${shown}`);
  if (!ok) failures.push(label);
  return ok;
}

/** The step the form shows now: the heading of its Documents, Purpose, More context or Review and start panel. */
const stepShown = (page) =>
  page.evaluate(() => {
    const h = [...document.querySelectorAll("h2")].map((x) => x.textContent.trim());
    return (
      ["Documents", "Purpose", "More context", "Review and start"].find((n) => h.includes(n)) ||
      `?${h.join("|")}`
    );
  });

const issuerName = (page) => page.getByRole("textbox", { name: "Issuer name", exact: true });
const issuerValue = async (page) =>
  (await issuerName(page)
    .inputValue({ timeout: 1500 })
    .catch(() => null)) ?? null;
const rowCount = (page) =>
  page
    .locator("[aria-label='Documents added'] li")
    .count()
    .catch(() => -1);
const where = (page) => page.url().replace(L.BASE, "");

/** Prints the tally and sets the exit code: 0 when every check held, 1 otherwise. */
function finish(name) {
  console.log(
    failures.length ? `${name}: ${failures.length} check(s) FAILED` : `${name}: every check held`,
  );
  process.exitCode = failures.length ? 1 : 0;
}

/** Opens a fresh service, a browser and a page; `body(page, context, log)` walks; then the browser and the service are stopped. */
async function walkOnce(name, body) {
  const log = L.newLog();
  const browser = await L.launch();
  try {
    const ctx = await L.context(browser, { log });
    const page = await ctx.newPage();
    L.watch(page, log);
    await body(page, ctx, log);
  } catch (error) {
    check(`${name}: the walk ran to its end`, false, String(error).slice(0, 400));
  } finally {
    await browser
      .close()
      .catch((error) =>
        check(
          `${name}: the browser and the service stopped cleanly`,
          false,
          String(error).slice(0, 300),
        ),
      );
  }
  check(
    `${name}: no page error, console error or blocked request`,
    !log.pageerrors.length && !log.console.length && !log.blocked.length,
    {
      pageerrors: log.pageerrors,
      console: log.console,
      blocked: log.blocked,
    },
  );
}

/** One walk on one fresh service, then the tally. */
async function run(name, body) {
  await walkOnce(name, body);
  finish(name);
}

module.exports = {
  L,
  check,
  run,
  walkOnce,
  finish,
  stepShown,
  issuerName,
  issuerValue,
  rowCount,
  where,
};
