# Group 3 reviews (repair-3)

One entry per task: the reviewer was a fresh Sonnet agent at xhigh effort that did not write the change. No group 3 task touches money, ordering or security code (tasks.md), so none needed a second, adversarial read. The branch self-review (stage 5 step 8) is the lead's.

## T34 (S2-007)

- Commit reviewed: 4fe6c1b. Verdict: PASS. Merged onto audit/repair-3 as a2fbd07.
- The new test fails with ChangesTable.tsx at its parent (5 of 5 fail) and passes after the repair.
- The cause-and-effect cell matches the card text character for character for all six changes of halden 2026-09-30.
- The existing test change in Changes.test.tsx touches only the expected heads, which asserted the defect.
- Gates the reviewer saw: lint 0, format:check 0, typecheck 0, build 0. The probe changes-table-columns.mjs exits 0 and shows 6 of 6 kind, cause and effect and 5 of 5 direction words. Vitest: 32, 12 and 66 passed.
- Low:
  - A test timed out once under a load average of about 31, then passed on re-run.
  - A blank kind, cause or effect draws n.a. in the Table but an empty badge in the Cards. The root is read.ts accepting blank words, which is outside T34's files.
  - Direction draws the delivered words without the card's arrow.

## T26 (S1-001, J6-005)

- Commit reviewed: 33d9d88. Verdict: PASS. Merged onto audit/repair-3.
- With the parent's links.ts and routes.tsx, the two new test files fail 9 of 9; with the repair they pass 9 of 9.
- The four existing test edits change only `#/run` to `#/run/start`, and the Home.test.tsx href regex is as strict as before.
- `/run/start` cannot shadow `/run/start/:draft`, because segment counts differ. `#/run` still draws Run activity.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0.
  - vitest: 36 files, 1164 tests, exit 0, with `--testTimeout=30000` after two load timeouts at the default 5 s.
  - Probes start-a-run-link.mjs 0 and j6-start-run-buttons-lead-to-example.cjs 0 (not reproduced).
  - file-check.mjs 0; route-visits.test.mjs 0.
- Low:
  - An "ok" run slice with no drafts shows StartPage's "No draft has this address" at `/run/start`. That wording is in StartPage.tsx, which is outside the group's files.
  - New run from Halden's report shows the fixture draft's TransDigm breadcrumb. That comes from the fixture data; T25 (OQ-01) labels the static pages as a design reference.
  - `#/run/start/` with a trailing slash now draws the first draft instead of Page not found.
