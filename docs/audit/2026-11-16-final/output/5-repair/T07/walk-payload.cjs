// T07 walk (ruling L15, C2-002): what Submit sends and what the approval digest binds, with a case date typed by the analyst.
// Two complete synthetic runs through the page, one straight through and one with a Back from the review sheet and a second
// review. Prints the last /summary body, the /submit body (as sha256 and the date fields) and the digest, so the same walk run
// on the code before a change and after it can be compared line by line (T07/payload-before.txt and payload-after.txt).
// Written from the T07 reviewer's scratch payload.cjs. Dates are typed (2025-03-31), so nothing needs masking.
//   C2_PORT=8747 node docs/audit/2026-11-16-final/output/5-repair/T07/walk-payload.cjs
"use strict";
const crypto = require("node:crypto");
const { L, check, walkOnce, finish } = require("./walk-lib.cjs");

const sha = (text) => crypto.createHash("sha256").update(text).digest("hex");

/** One complete synthetic run through the page on a fresh service; returns what was sent and the digest issued. */
async function submitOnce(page, ctx, withBack) {
  const bodies = { summary: [], submit: [] };
  const digests = [];
  page.on("request", (r) => {
    if (r.method() !== "POST") return;
    if (r.url().endsWith("/summary")) bodies.summary.push(r.postData());
    if (r.url().endsWith("/submit")) bodies.submit.push(r.postData());
  });
  page.on("response", async (r) => {
    if (r.request().method() === "POST" && r.url().endsWith("/summary"))
      digests.push((await r.json().catch(() => ({}))).digest);
  });
  await L.reachReview(page, { agreement: true });
  if (withBack) {
    await page.goBack();
    await page.getByRole("heading", { name: "More context", exact: true }).waitFor();
    await L.toReview(page);
  }
  await L.decideAndApprove(page);
  await page.getByRole("button", { name: /^Submit/ }).click();
  const dialog = page.getByRole("dialog");
  await dialog.waitFor();
  await dialog.getByRole("button", { name: "Start synthetic run" }).click();
  await page.waitForURL(/\/run\//, { timeout: 30000 });
  await L.waitForEnd(page); // the service must not be stopped under a run that is still writing its folder
  return {
    summary: bodies.summary.at(-1),
    submit: bodies.submit.at(-1),
    digest: digests.at(-1),
    summaries: bodies.summary.length,
    submits: bodies.submit.length,
  };
}

// Each variant gets its own fresh service, so both reviews see the same state (an earlier finished run of the same issuer
// would change the summary, and with it the digest).
const results = {};
(async () => {
  await walkOnce("walk-payload straight through", async (page, ctx) => {
    results.plain = await submitOnce(page, ctx, false);
  });
  await walkOnce("walk-payload with a Back and a second review", async (page, ctx) => {
    results.back = await submitOnce(page, ctx, true);
  });
  for (const [name, one] of [
    ["straight through", results.plain],
    ["with a Back and a second review", results.back],
  ]) {
    if (!one) continue;
    const answers = JSON.parse(one.summary);
    const sent = JSON.parse(one.submit);
    console.log(
      `${name}: summaries=${one.summaries} submits=${one.submits} as_of=${answers.context.run.as_of} cutoff=${answers.context.run.cutoff}`,
    );
    console.log(`${name}: /summary body sha256=${sha(one.summary)}`);
    console.log(`${name}: /submit body sha256=${sha(one.submit)}`);
    console.log(`${name}: digest=${one.digest}`);
    check(
      `${name}: the typed date is what is sent, as as_of and as cutoff`,
      answers.context.run.as_of === "2025-03-31" && answers.context.run.cutoff === "2025-03-31",
    );
    check(
      `${name}: Submit binds the digest the review issued, and sends the summary's answers`,
      sent.digest === one.digest && JSON.stringify(sent.answers) === JSON.stringify(answers),
      { digest: sent.digest === one.digest },
    );
    check(`${name}: exactly one /submit`, one.submits === 1);
  }
  if (results.plain && results.back) {
    check(
      "a Back and a second review change nothing: the same /summary body, /submit body and digest",
      results.plain.summary === results.back.summary &&
        results.plain.submit === results.back.submit &&
        results.plain.digest === results.back.digest,
    );
  }
  finish("walk-payload");
})();
