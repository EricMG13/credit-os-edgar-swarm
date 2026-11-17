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

## T25 (S6-003, J6-010, S1-004, X1-018); model-page labels follow under ruling L7

- Commit reviewed: 82d668e. Verdict: PASS. Merged onto audit/repair-3.
- Against the parent source (scratch copy), the three new test files fail 39 of 45. The 6 that pass are guards that hold either way. With the repair, 187 tests pass.
- SubmitConfirmation's new optional `note`: the connected StartRun passes none, so its dialog DOM is unchanged.
- `#/kit` still opens by address, with no rail item marked current.
- The shipped build (empty data.js) shows no note on any populated hash. Signal and model pages show none; library, run and kit pages show exactly one.
- kit-in-rail.mjs exits 1 because it times out clicking the removed Kit link. That is the probe expecting the defect.
- The Run started closing line ("In a live run you can close this page") is within OQ-01: the old sentence was part of the false claim that S6-003 and J6-010 quote.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, open-from-disk.mjs 0.
  - vitest: 187, 830, 345 and 204 passed, with `--testTimeout=120000 --maxWorkers=2` under load.
  - Probes: s6-saved-example-label.mjs 0 (17 of 17 pages); j6-static-submit-claims-run-started.cjs 0.
- Low:
  - Start.test.tsx:62-66, the scoped `<strong>` assertion, is vacuous if the whole paid sentence becomes a `<strong>` (mutation check passed). Suggested: also assert `sentence.closest("strong")` is null.
  - `#/kit` draws the note even on the shipped build. This is deliberate (OQ-01) and pinned by a test.

## T32 (S2-001, J6-006)

- Commit reviewed: 41c5580. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source, 6 of the 8 new tests fail, plus the changed History.test.tsx case. With the repair all pass.
- The Corvane Fasteners test in History.test.tsx asserted the defect (no list); it now asserts the one Failed run. Nothing else was loosened.
- No Open report link is invented: all five empty issuers have `report: null`.
- Page order is h1, subtitle, empty state with its two buttons, then the runs. No sideways scroll at 1440 or 390 px.
- j6-home-cards-vs-history.cjs still exits 1. It flags any card page containing "No report yet". What remains is fixture content: cards say "Finished, 6 of 6 modules" while every entry has `report: null`, and Corvane Packaging, Tessaly Foods and Ardenne Cable hold Finished runs under "No report yet". J6-006's verify_note already calls it fixture content. Tracking: no register record covers these four cards. The lead should add a Low batch line, or note that this probe keeps exiting 1 until the fixture changes.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0.
  - vitest: 10 files, 435 tests, and src/pages/library 27 files, 883 tests, all exit 0, with `--testTimeout=120000 --maxWorkers=2`.
  - Probes: history-hides-runs.mjs 0 (rows 2/2, 1/1, 2/2, 1/1).
- Low:
  - The RunFeed `<ol>` has no accessible name; `aria-label="Runs"` would add one.
  - A History.runs.test.tsx title claims the buttons sit above the runs but does not assert it.
  - The slice.ts:85-87 comment says `empty` is shown "in place of the feed"; it is now shown above it.

## T36 (S3-003, S2-004)

- Commit reviewed: d450524. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new test fails 4 of 5; the order guard passes both ways by design.
- Tab and DOM order are unchanged. The Collapse button stays 32 x 32 with the same name. Focusing it no longer scrolls the page sideways at any width.
- No Limitations control passes its card edge at 320, 390 or 480 px.
- S3-003.mjs still exits 1, at 320 px only. The reviewer confirmed this independently: with the run header's New run link hidden, the page is 320/320. The link is S3-029 and S2-021 (disposition batch), RunFrame.tsx:152. The probe can reach 0 only after the Low batch repairs that link.
- reflow.mjs: no 390 px line remains.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0.
  - vitest: 147 passed at the default timeout; src/pages/library 728 + 102 passed with long timeouts.
- Low:
  - The report says the row stays on one line at 480 px. It wraps there (correctly) and is one line from 520 to 560 px up.
  - `min-w-0` is not load-bearing.
  - The test checks classes only.
- Info: ReportLibrary.design.test.tsx "filters by sector and pathway and keeps filters available to reset an empty result" fails on both the repaired and the parent tree. It is unrelated to T36, likely a timing failure under load. It is group 2's file and is passed to the lead.

## T38, first part: S3-011, and C5-005/S4-019 static half (S5-001 follows under L8; the connected half of C5-005 is the lead's under L8)

- Commit reviewed: 68c38da. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source, 2 of the 7 new tests fail, the two that fail for the cause; the other 5 are controls.
- The reason text is now `text-text-tertiary` at 14 px: 5.26:1 on the canvas per design-rubric D-33, at or above D-30's 13 px floor. The accessibility tree is identical before and after ("Forecast No forecast for this run").
- RunTabLink's connected callers always pass an href, so the changed branch is static only and the connected tabs are unchanged.
- The Show sources switch is hidden on all five Evidence sub-tabs. It is still present on Overview, Changes and Modules, with the same trace-control counts, and its state survives tab changes.
- Probes:
  - S3-011 exit 1 → 0.
  - S4 inert-switch: switch drawn 1 → 0.
  - C5 switch-inert-on-evidence.cjs 0: the connected surface is unchanged, as held.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0.
  - vitest: src/pages/library 872 passed; connected files 319 of 320. The 1 is a findBy timeout under load; ConnectedApp.test.tsx alone passes 185.
- Low:
  - At 390 px the 14 px reason widens the Forecast tab, so the tab strip grows from two rows to three. 13 px (`text-caption`) keeps two rows and is still within D-30. A one-line choice for the lead.
  - The reason test checks classes, not the rendered colour or size.
- Info: `cursor-not-allowed` now sits on the inner span only.

## T30 (S1-006, S2-014, S4-005)

- Commit reviewed: 61fc0f2. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source all 5 new tests fail on the focus assertion; at HEAD all pass. No existing test changed.
- Focus targets are the first-named options in each suggested change: the search box on Home and the Module filter button on Evidence.
- The focus ring shows on the moved focus (D-34).
- The `display: contents` wrappers change nothing. Across 20 comparisons at 1440 and 390 px, bounding rects, accessibility tree, roles, landmarks and screenshot hashes are identical.
- `clear` has one caller per component, and no mount, effect or tab-change path calls it.
- The "Show all gaps" fix is within S4-005's cause: Gaps shares the same hook.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0, duplication 0 (1.58%).
  - vitest: src/pages/library and linkStyle, 29 files, 882 tests, exit 0.
  - Probes: S1 and S2 clear-filters-focus.mjs 0 (focus on the search input); S4 focus-after-clear 0 (focus on the Module button).
- Low:
  - S1-006's second clause ("Clear filters" is missing from output/0-baseline/clickables.jsonl) is an audit artifact outside group 3's files. It is passed to the lead.
  - Focusing the search field may raise the soft keyboard on a phone.
  - `querySelector` couples to the first input and button of FilterBar and FilterSelect. Both new tests would catch a change.

## T40 (S5-002, S5-004, S5-005, S5-008)

- Commit reviewed: 0b916a4. Verdict: PASS. Merged onto audit/repair-3.
- Against the parent source the six new test files fail 18 of 20. The 2 that pass are the Ctrl-click and keyboard-focus cases, which hold either way.
- Existing test changes:
  - The unreadable-notice tests in RunPage, AnalysisPage, ForecastPage, PortfolioFitPage, LimitationsPage, StatementsSections and StatementsPage asserted the raw field path; they now assert the fixed sentence and no path.
  - RunsIndexPage asserted the slug and run id.
  - None was loosened, and no figure, period or unit was edited.
- S5-004 behaviour (OQ-10), checked in Chromium:
  - Enter or a click opens TraceDrawer in place, and the address, case choice and scroll stay as they were.
  - Escape, Close and the backdrop return focus to the control. Tab stays inside the dialog.
  - Ctrl, Shift and middle clicks follow the link.
  - TraceDrawer.tsx is untouched.
- S5-005: at 390 px the label column is 128 px and 132 px is left for figures. Widths of 640 px and up are identical to the parent.
- S5-008: PressTip opens on tap and closes on a second tap, a tap elsewhere or Escape. Hover and keyboard behaviour are identical to the parent.
- p-trace-nav.mjs exits 1 only at its final `page.goBack()`, because the page no longer navigates away. Its output before that shows the repaired state.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0, unused 0.
  - vitest: src/pages/model 22 files, 709 tests; App, Shell, worked-example, route-table, RunFrame and Signal 39 files, 775 tests. All exit 0 at the default timeout.
  - Probes: p-noforecast 0, p-narrow-390 0, p-touch-tooltips 0.
- Medium, passed to the lead, not sent back: the drawer is thin. It shows the item name, a fixed sentence, an "Item" row repeating the label, and Open in Evidence; on the static build Evidence also ends in "No such issuer" (S5-003, OQ-01). CM-008 (source, page, quote, calculation steps) needs trace content in the model slice: slice/read.ts, types.ts, fixtures/model.json and delivery. None of those is in T40's files, so no fresh implementer can repair it there.
- Low:
  - PressTip lives in StatementTable.tsx and MetricTile.tsx imports it, because of the file list.
  - The StatementsPage case test leaves the drawer open and needs `hidden: true`. That is setup, not a weakening.
  - The Unreadable sentence "The other financial models ... are not affected" can mislead when two runs are unreadable.
  - Unreadable-slice tests now print one console.warn each.

## T31 (S2-002, S3-008, S4-013, J6-013)

- Commit reviewed: c2349e8. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new test fails 28 of 29 (the route-count guard passes); at HEAD 29 of 29 pass.
- Wording:
  - It matches T25's terms and is true of the shipped build (data.js `{ issuers: [] }`; README lines 109 and 129). It adds no analysis.
  - It meets D-31 (icon, title, sentence, action), CM-019, CM-036 and D-16.
- Closed: S2-002, S3-008 and S4-013. All 14 library routes on the shipped build show a designed state.
- J6-013 is closed only for the library third. Remaining:
  - Model's "No model has been delivered yet" (RunsIndexPage.tsx:23) is S5-016, in the Low batch.
  - Run's "No run data in this library" (StartPage.tsx:82, ActivityPage.tsx:201) is S6-026, in the Low batch. That covers 22 addresses, `#/run/start` among them.
  - The reviewer suggests the register mark J6-013 closed in part.
- j6-low-checks.cjs exits 2 as committed: its step b clicks the Kit rail link T25 removed. Step c, run from a scratch copy, exits 0. Library and History draw 1 control each with no overflow at 1440 or 390 px; Model and Run are unchanged.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0, unused 0, duplication 0.
  - vitest at the default timeout: 3 files, 136 tests; 19 files, 299 tests; src/pages/library 34 files, 930 tests.
  - Probes: shipped-empty-state 0, S3-008 0, S4 shipped-empty 0.
- Low:
  - On the shipped build, Home's "Start a run" lands on `#/run/start` showing "No run data in this library" with no control. Keeping the button stands only if the Low batch gives StartPage.tsx:82 a sentence and a link back (S6-026). Otherwise drop "start one to add the first issuer" and the button on the shipped Home. The batch brief should name `#/run/start` explicitly. This becomes Medium if S6-026 does not land.
  - The descriptions are two sentences where D-31 says one, and "build" is a builder word.
  - The two changed tests pin the new sentence by prefix only.
