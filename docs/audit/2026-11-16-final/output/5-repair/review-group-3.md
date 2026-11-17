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

## T33, S2-005 part (S2-006 follows under ruling L5)

- Commit reviewed: fac83bf. Verdict: PASS. Merged onto audit/repair-3.
- Confirmed cause: the point column is fit-content under `items-start`, and the badge's `size-max` widens it to 446 px at 390 px. The register's "inner span" does not exist.
- The one-class repair (`max-w-full` on the column) brings the column, sentence and badge to 276 px at 390 px. Rows at 520 px and up are unchanged.
- The new test fails on the parent source and passes at HEAD.
- The reviewer could not check out parent files in the worktree (harness denied), so it ran the parent source from a `git archive` copy in scratch.
- The 48 px page scroll left at 390 px is the Limitations header row (T36's S2-004/S3-003), not the badge.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, duplication 0, unused 0, build 0.
  - vitest: 5 files, 138 tests, exit 0, on re-run after one load-related failure in routes.test.tsx.
  - Probe long-qualifier.mjs 0 ("ok" at 1440, 390 and 320 px).
- Low:
  - The new test asserts class names, so it detects change rather than layout. A layout check would belong in web/scripts (open-from-disk), outside the task's files.
  - The test copies the fixture loader from Overview.test.tsx.
  - An unbroken qualifier token (a URL or an id) would still overflow. That is outside S2-005.
- Info: the register's cause for S2-005 should name the column's width, not an inner span.

## T29 (S1-005)

- Commit reviewed: 305dc04. Verdict: PASS. Merged onto audit/repair-3.
- Cause confirmed in react-aria-components 1.22.1: TooltipInner closes on any ancestor scroll and no prop turns that off. A one-frame hold-back of the drawn state is the smallest repair found.
- The new test fails on the parent source (scratch copy; the harness denied a checkout in the worktree) and passes with the repair.
- Every importer of the shared Tooltip was checked, Signal's NameChip included: none passes isOpen or defaultOpen, and every test that queries a tooltip after focus or hover uses findBy*.
- Adversarial checks:
  - jsdom: no rAF leak or state update after unmount; controlled open and close work.
  - headless Chromium: the tooltip stayed open in 6 of 6 trials, and in 6 more trials under 4x and 8x CPU throttling.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, build 0.
  - vitest: 9 files, 99 tests, exit 0.
  - Signal: 34 files, 630 tests, exit 0, with `--testTimeout=120000 --maxWorkers=2` under load.
  - Probe tooltip-scroll-close.mjs 0; step 1 now ends with the tooltip open.
- Low:
  - Neighbouring tooltips now swap with a gap of about one frame (21 ms) instead of 0 ms.
  - Under StrictMode, in development only, a tooltip mounted open is missing for its first frame. No app caller mounts one open.
- Info: a dead `state === null` branch; aria-describedby points at a tooltip that is not drawn for one frame.
