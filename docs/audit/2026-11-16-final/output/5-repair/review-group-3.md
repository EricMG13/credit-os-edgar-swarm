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

## T25 follow-up under ruling L7 (model pages labelled)

- Commit reviewed: f33f9a1. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new tests fail 17 of 23. The 6 that pass are "not drawn" guards. At HEAD all 23 pass.
- New file web/src/shell/DesignReferenceNote.tsx:
  - The cycle claim is verified: App → route-table → model/routes → model pages → RunPage → ModelShell.
  - Exporting the note from Shell.tsx was the other route. The reviewer prefers the named file.
  - The words are identical to T25's.
- The "Sample data" badge was dropped, under L7, and the note carries all it said. Rendering 122 addresses before and after, only the 6 model run forms differ: one badge span out, one note in. The LimitationsPage.test.tsx edit removes only the "Sample data" token. The guard "leaves out the sample badge when the run is not a sample" still passes unedited.
- Model pages:
  - Each of the 8 model addresses shows exactly one note, as the first child of the p-8 frame. The shipped empty build shows none.
  - The three p-8 first-child tests and T25's 39 App.designReference tests pass unedited.
  - At 390 px, `main` overflows by 2 px (front) and 120 px (statements) with or without the note. The note does not cause it.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, build 0, unused 0, duplication 0.
  - vitest: model, App, shell and route-table, 29 files, 881 tests. Signal: 34 files, 630 tests. All at the default timeout.
  - Probes: s6-saved-example-label.mjs 0; j6-static-submit-claims-run-started.cjs 0.
- Low:
  - The report's file counts are wrong (29 and 34 files, not 101 and 119); the test counts are right.
  - The Rounds line is ambiguous (the controller tidies it).
  - `header.sample` is still validated by the model reader but no longer drawn.
- Info: RunPage.tsx's not-found and unreadable frames draw no note. That is within L7's named scope, and those states show no sample.

## T27 (S1-002 with S2-003, S2-013, S3-001, S4-004, S4-020, S5-017, J6-011, J6-002, J6-003), round 1

- Commit reviewed: a9aef12 (implementer Sonnet). Verdict: FAIL, one Medium. Sent back to a fresh Sonnet implementer for round 2.
- Medium: Shell.tsx:81 glues `focus:outline-none` to a template literal, so Tailwind builds no rule. After every keyboard route change, `main` is focused with the browser's default outline (`outline: auto 1px`) around the content area. Before T27, only the skip link focused `main`.
- What passed:
  - On the parent source the new test fails 38 of 39 (the item-row guard passes); at HEAD 39 of 39 pass.
  - No existing test, expected value, probe or config changed.
  - Titles use only reader words already on the page and follow the connected app's `page — issuer — Credit OS` form.
  - Focus rules hold on first load, when the page sets its own focus, on the same link, and on `main` otherwise. The skip link works. Typing does not lose focus.
  - `replaceState` adds no history entry and keeps the hash. One polite live region, empty on first load.
  - j6-scroll-carried-across-pages.cjs's Back value (2362) was verified to be where Playwright's click left the page, so the repair is correct and the probe baseline is wrong.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, build 0.
  - vitest: 71 files, 2284 tests. Signal: 34 files, 630 tests.
  - file-check.mjs 0 (137 PASS).
  - Nine probes exit 0. j6-low-checks.cjs exits 2 at T25's removed Kit link; its line a shows six distinct titles.
- Low, left to the lead's batch:
  - The run start steps share one title and one announcement (needs run/routes.tsx subjects). Moving between Trace items gives identical titles.
  - The `offsets` Map is never pruned.
- Info: Signal pages are all titled "Signal — Credit OS". Signal's inner scroller was not checked.

## T41 (S6-001, S6-002, S6-007, S6-010)

- Reviewed: 6f390d8 (first implementer) and 38c79f9..6f2fcf6 (second implementer). Verdict: PASS. Merged onto audit/repair-3.
- Files: the controller cleared Started.tsx (T25's) and run/routes.tsx (T26's), both group 3's and both merged. For S6-007 the index option was taken; dropping the breadcrumb word would remove something the reader sees (R5).
- Against pre-change copies:
  - Part 1: 4 of 7 new tests fail; the 3 that pass are guards.
  - Part 2: 28 of 45 fail. The 17 that pass are guards.
  - The only existing test changed is ActivityMore.test.tsx:142 (`#/run` to `#/run/runs`). The timer-ban test is unchanged and passes.
- S6-001: the focused Purpose card now paints a solid 2px #001AFF ring. The connected Start page, checked on proof.serve (synthetic, port 8732), gets the same ring.
- S6-010: badges.tsx is unchanged; the label rows override `whitespace-nowrap` through className. With a 13x13-character unbroken label there is no overflow at 1440, 390 or 320 px, and Stop run stays in view.
- S6-002: after Confirm, focus is on the Run started title; the next Tab reaches "Watch run activity". Uses no timer.
- S6-007:
  - `/run/runs` lists 10 runs in CM-090's groups. Every field comes from the slice, and each row links to `#/run/activity/<id>`.
  - `#/run`, `#/run/activity` and `/run/start` are unchanged.
  - All three empty states are tested.
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, duplication 0, unused 0.
  - vitest: run, shell and route-table 374 tests; StartRun and components 354; ConnectedApp 185; Signal 630.
  - test:scripts 0. test:file:gates 0 (`PASS route run /run/runs`).
  - Probes: s6-radio-focus, s6-submit-focus, s6-runs-link and s6-long-label all exit 0.
- Low:
  - The focused Run started title shows Chromium's default ring, not the 2px focus-token ring that StartRun.tsx:1157 and AnalysisCharts.tsx:7 use for focused headings. Batch fix: add `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus` to the title's classes.
  - Ten index links share the name "TransDigm Group" (one issuer in the fixture).
  - Ended includes the Finished run; CM-090 says "ended without a report".
- Integration: T27's route-change focus must keep the Run started title focused after Submit, then Confirm. T27 round 2 checks this on the merged tip.

## T38 follow-up under ruling L8 (S5-001)

- Commit reviewed: 5c0dad1. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new tests fail 19 of 25; the 6 that pass are controls.
- Reader:
  - Only `forecast` became nullable.
  - Each of the other ten run keys is still refused when missing, and unknown keys are still refused.
  - Malformed forecasts (`{}`, strings, arrays, missing tabs, periods or walk) are refused with a named path. Absent and `null` both read as null.
  - A present forecast reads back equal to the fixture.
  - The two-case check (read.ts:309-311) is byte-for-byte unchanged: R3-001, for the owner.
- There are two readers of `run.forecast`, ForecastPage.tsx and ModelShell.tsx, and both handle null.
- The no-forecast Forecast address draws the Model tabs. The breadcrumb, the "Open the financial model" button and the T25 note are unchanged.
- "No forecast was published for this run." is fixed wording (L8, CM-067).
- p-noforecast.mjs: the no-forecast run is listed and draws on all six addresses. The one-case and missing-headline variants stay refused.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0.
  - vitest: model, RunFrame, App and shell, 34 files, 896 tests, at the default timeout.
  - file-check.mjs 0.
- Low:
  - The library's disabled tab says "No forecast for this run", the model page "No forecast was published for this run". A wording choice.
  - The Show sources switch is drawn on the sentence page with nothing to reveal, the same class as C5-005.
  - A forecast with neither tabs nor periods gets the generic nullableRecord message.

## T35 (S3-002, S3-007), with rulings L5, L9, L9a and L9b

- Reviewed as a whole: 664dabc, merge 075007d, and 075007d..469b9fb (three Sonnet implementers). Verdict: PASS with conditions M1 and M2. The conditions were met under lead ruling L9b in 759ded2, which a second fresh reviewer passed. Merged onto audit/repair-3.
- First review:
  - On the pre-T35 source the new tests fail 11 of 15. The 4 that pass pin unchanged behaviour.
  - The 9 changed existing assertions (Module 5, Overview 3, RunFrame 1) are exactly those that asserted "a null trace draws nothing". 162 others pass with the pre-T35 tests. Evidence.test.tsx is unchanged.
- The marker:
  - It is named "<label>: no source recorded", `aria-disabled` and opens nothing.
  - A dashed gap-violet border and a file-with-cross icon keep it from being mistaken for a control.
  - Its focus ring is 8.10:1 light and 11.36:1 navy.
  - An unheld key still throws.
- S3-002: `ring-focus-inverse` on navy, 11.36:1.
- M1 (Medium): the connected risk matrix drew a false marker beside traced rows. L9b repair in MatrixBlock.tsx: skip the table-level control when the block has no trace and every row has one.
  - That rule is narrower than L9b's words. A block with its own trace keeps its control, as the unchanged Module.test.tsx:240 pins for the static matrix.
  - Second review: the connected render is now row controls only, and before L9b it carried the marker. The static render is unchanged. The new test fails 1 of 5 on 469b9fb.
- M2: T35.md now holds the reviewer's measured L9(b) list.
  - Statement tables: none since L9a.
  - Risk matrix: none since L9b.
  - Confidence tile and summary band: missing by data, the marker stays.
  - Foundation tiles: not reachable.
  - Connected Evidence tab: 0 markers across 21 pages of a synthetic run.
- Gates the reviewers saw:
  - build 0, lint 0, format:check 0, typecheck 0.
  - S3-002 0, S3-007 0.
  - vitest: library, Signal and components, 97 files, 1,895 tests; then library 35 files, 916 tests.
  - Connected 950 tests pass with `--maxWorkers=1`. ReportLibrary.design.test.tsx "filters by sector and pathway..." fails at its 1 s findBy under load in whole-directory runs, and passes alone and with one worker. Nothing in it reaches T35's components; it is already with the lead.
- Low:
  - ChangeCard.tsx:61 still draws nothing for a null trace (batch).
  - An Overview assertion checks no count (batch).
  - No committed test renders the connected matrix through ModuleTable.
  - Inert tab stops and touch are moot under R14.
- Info: StatementBlock's L9a rule and MatrixBlock's L9b rule differ only in a case the app never reaches. The `rows.length > 0` guard is unreachable.

## T27, round 2 (owner rulings R14 and R16 narrowed the scope to titles and scroll)

- Reviewed: net change 39f9875^2..bc092b5 (round 2 implementer Sonnet). Verdict: PASS. Merged onto audit/repair-3.
- Scope held:
  - Titles are `<page> — <subject> — Credit OS`, with only words already on the page.
  - Scroll resets to the top on a route change, and Back and Forward restore the offset.
  - No focus move and no live region remain. Shell.tsx is identical to the tip.
  - The round 1 Medium (the `main` outline) is moot under R14. The focus half is dropped under R14 and the announcement under R16.
- The App.tsx conflict with the T25 follow-up kept the shared DesignReferenceNote; T25's 39 tests pass unedited.
- T41's Run started focus survives: s6-submit-focus.mjs exits 0.
- From file:, `replaceState` adds no history entry and fires no hashchange.
- On the tip's source the new test fails 28 of 28; at HEAD 28 of 28 pass.
- Probes:
  - Title and scroll lines all pass.
  - S3-001.mjs and j6-focus-lost-after-tab-activation.cjs exit 1 on the dropped focus and announcement halves only.
  - j6-low-checks.cjs exits 2 at the Kit rail link T25 removed.
  - j6-scroll-carried-across-pages.cjs exits 1 on its own baseline. Playwright's click scrolls first; with a non-scrolling click the probe reports "not reproduced".
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, build 0.
  - vitest: 124 files, 3,036 tests, Signal included, at the default timeout.
  - file-check.mjs 0 (138 PASS).
  - route-visits and fixture-data: 19 of 19.
- Low, for the lead's batch:
  - Back restore drifts +32 px per round trip on the Model Statements page and the Kit, because Chromium's scroll anchoring adds late chart growth and the scroll listener stores it. `overflow-anchor: none` on `main` removes the drift. The other 21 scrollable routes restore exactly.
  - The `offsets` Map is never pruned.
- Info: Signal pages share "Signal — Credit OS", and the run start steps share one title.

## T33 follow-up under ruling L5 (S2-006)

- Commit reviewed: b3f1b19. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new tests fail 13 of 15; the 2 that pass pin behaviour that stays.
- `DatedItem.trace`:
  - An absent key reads as null, and an explicit null too. A prototype-held key is ignored.
  - A wrong type is refused with a named path.
  - A key the run lacks is refused through the same `traceKey` every other passage uses, so TraceControl cannot throw at draw time.
- Timeline.tsx: an entry with no action draws exactly as before. The whole Kit page rendered in jsdom is byte-identical before and after (170,314 bytes). The `TRACE_HOST` import follows ChartFrame.tsx's precedent.
- Overview: one control per date (4 of 4). The fixture dates draw the "no source recorded" marker, and a real trace draws a working control that opens its drawer. Both are checked at 1440 px.
- The two changed Overview.test.tsx assertions follow the finding (a marker per date; the capped run's markers 12 → 14).
- Gates the reviewer saw:
  - lint 0, format:check 0, typecheck 0, build 0.
  - vitest: 14 files, 418 tests; Signal 34 files, 630 tests; library, components, model, connected, Kit and App 150 files, 3,165 tests. All at the default timeout.
  - Probes: dates-no-trace 0 (`[1,1,1,1]`), long-qualifier 0, S3-002 0, S3-007 0.
- Low:
  - Timeline treats `action: null` as a slot. No caller passes it.
  - Overview passes `trace` through to Timeline items, which ignore it.
- Info: the control narrows the date text column by about 44 px at 1440 px.

## T37 (S3-005, S3-006 with C3-025; S3-006's narrow-screen picker dropped under R14)

- Commit reviewed: 3a8a871. Verdict: PASS. Merged onto audit/repair-3.
- On the parent source the new tests fail 7 of 8. The one that passes ("lists every module until typed") passes either way by design.
- S3-005: the order is now bottom line, Key findings, Contrary evidence, What would change the view, Limitations, then the typed records. "On this page" follows the same order (AGENTS.md, CM-004, CM-005, D-11).
- No module text changed. Across all 30 fixture module pages the multisets of text leaves and headings are identical before and after. On the two pages with bodies, exactly one block (Limitations) moved.
- The six Module.test.tsx edits change only where Limitations and its controls appear; no expected text or value changed.
- S3-006 and C3-025:
  - The kit Input with a search icon (approved source, D-08), as in FilterBar.tsx, narrows the module list by name. No match shows "No module matches", and clearing restores all 13.
  - The connected Modules page gets the same search; it was checked on proof.serve at 1440 px.
  - At 1,001 px and up the layout is unchanged.
- p15 (C3) still exits 1 on `overview.svgCharts` 0 alone. That is C3-024 (T17, group 2); the navigator half now passes.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0.
  - vitest: 3 files, 110 tests at the default timeout; library and connected 1,907 of 1,908.
  - The 1 is ConnectedApp.test.tsx "lists a run that ended without a report", a race under load. It is unrelated to T37 and passes alone (185).
  - Probes: S3-005 0, S3-006 0.
- Low:
  - For the lead: at 481 to 1,000 px (a desktop window snapped to half of a 1,920 px screen is 960 px), the navigator still comes first with no picker. R14 covers 480 px and below only, so the lead should say whether the picker stays dropped in that band.
  - The search sits at the top while the list it narrows is at the bottom of the navigator.
  - Inner spaces are not collapsed in the match.
  - Typing another module's name hides the current module's entry until the field is cleared.

## T39 (S4-006, S4-008, S4-009; S4-007 dropped under R14), round 1

- Commit reviewed: f96c8d6 (implementer Sonnet). Verdict: FAIL, two Medium. Sent back to a fresh Sonnet implementer for round 2.
- M1 (Medium), Evidence.tsx:69-72: the reset key `${item}/${restarts}` leaves out the tab. The Trace table carries gap ids, so `trace/G-03` → `gaps/G-03` keeps a held module and hides G-03. The base commit drew it. This is reachable through "Open in Evidence" for the Peer comparison limitation and the jump menu.
- M2 (Medium), Evidence.tsx:23-41: on runs that deliver `trace.emptyText` ("not traced item by item"), the per-module tile "Traced items 0" states a measured zero and drops the delivered qualification. That breaks missing versus zero.
- What passed:
  - The per-module Summary counts equal independent fixture counts on all 39 module-run combinations; a real 0 draws as 0.
  - Filtered Record rows equal the unfiltered rows exactly.
  - "4 of 13 modules shown" comes from `calls.rows.length` and `run.modules.length`.
  - The Code column is gone with every figure unchanged.
  - The filter is held on all five tabs, with item addresses resetting except in M1.
  - The two changed tests follow OQ-10.
  - On the parent source the new tests fail 11 of 17.
- Gates the reviewer saw:
  - build 0, lint 0, format:check 0, typecheck 0, duplication 0 (1.84%, same as base).
  - vitest: 41 files, 969 tests.
  - Probes: filter-scope, module-codes, record-partial and focus-after-clear all exit 0.
- Low, for the lead's batch:
  - At All the tile says "Calculations"; under a module it says "Traced items" (S4-001 relabel).
  - The Timings note "Six of thirteen shown" stays above a single filtered row.
  - Brevane's "1 of 2 modules shown" sits beside its delivered "One of one shown".
  - Evidence.tsx copies EvidenceSources.tsx's "reads" predicate.
  - Record rows match modules by name.
