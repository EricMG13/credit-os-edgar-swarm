# Batch b: Low and Info repairs (stage 5 step 7)

Worktree `wt-batch-b`, branch `audit/lead-batch-b`, base `ca0db16`. One commit per finding or per
small set in the same file; no push, no merge. 29 findings assigned.

## Counts

| Outcome | Count | Findings |
| :--- | ---: | :--- |
| repaired | 20 | S1-007 (with S6-004), S1-015, S2-017, S2-022, S2-023, S3-014, S3-026, S3-027, S4-018, S5-009, S6-014, S6-016, S6-017, S6-018, S6-022 (in part), S6-023 (in part), S6-025, S6-027, S6-029, X1-016 |
| open | 4 | J6-007, S3-036, S4-003 (with J6-001), S5-018 |
| closed by R14 | 4 | S4-017, S5-007, S6-013, S6-028 |
| closed by R16 | 1 | S5-025 |
| already repaired | 0 | |

Lead messages that changed the scope while the batch ran:

- R14 (mouse-only desktop PC): S4-017, S5-007, S6-013 and S6-028 are closed by R14. S4-017 was
  already committed (`dbe8982`); it is left in place as instructed. S5-007, S6-013 and S6-028 were not
  started. S4-018 was committed (`bfc6c93`) before the message with its 390 px parts (ids kept on
  one line, shortcut hint hidden below `sm`); they are left in place as instructed. The part the
  message keeps is the id matching.
- R16 (no screen reader): S5-025 is closed by R16; nothing was changed for it. S6-029 stays, repaired.

## Per finding

Test edits that change an existing expected value are named ("test edit"). Each asserted the
behaviour the finding calls defective. Where no test applies it says so.

### Repaired

- **X1-016.** `web/src/pages/Kit7e.tsx`: the paid-run sample reads "It stops at the Full cap of USD 25."
  Test: `Kit7e.test.tsx`. Test edit: the cap assertion `/cap of USD 20/` is now `/Full cap of USD 25/`.
  Commit `0cfca97`.
- **S1-015.** `web/src/pages/Kit.tsx`: the Chart or Table sample group has `disallowEmptySelection`.
  Test: new `Kit.test.tsx` case (press Table twice; it stays selected), failed before the change.
  Commit `0cfca97`.
- **S2-017.** `web/src/pages/library/parts/FilterBar.tsx`: a visible `<label for>` "Search issuers" above
  the search field, `aria-label` kept, placeholder removed (the label carries the words), row aligned
  at `items-end`. The Input component's own `label` prop was not used: its required-asterisk span
  changes the accessible name in jsdom and breaks the exact-name queries of `Home.test.tsx`. Test: new
  `parts/FilterBar.test.tsx`, failed before. Commit `137ed6f`.
- **S2-022.** `parts/ChangeCard.tsx`: the `ReactNode` import moved to the top. No test applies (an
  import order; lint and typecheck cover it). Commit `bd7e4a9`.
- **S2-023 (OQ-09).** `parts/ModuleItems.tsx`: the chevron is drawn on linked rows only. Test edit:
  `Overview.test.tsx` "collapses a repeated state into one plain item..." asserted `[1,0,0,0,0,0,0]`
  chevrons; it asserts `[0,1,1,1,1,1,1]`. Commit `ce14a51`.
- **S4-018.** `parts/JumpMenu.tsx`: the option's `textValue` is label plus detail, so typing `T-0014`
  finds the row. Also in the commit (kept, see R14 above): `whitespace-nowrap` on the detail and
  `max-sm:hidden` on the two shortcut hints. Test edit: `EvidenceJump.test.tsx` "matches the label
  only, not the detail" now asserts the label-and-detail match; one new test for the class parts.
  Commit `bfc6c93`.
- **S3-026.** `parts/recordNav.ts`: a block with no `nav` key (the prose module's matrix, watch list,
  questions, pathway) is named by its own heading instead of sharing "Records". A data module whose
  blocks all say "no entry" keeps one "Records" entry. Test: new `parts/recordNav.test.ts`, failed
  before. Test edits in `Module.test.tsx` (three): the "one Records entry" navigator test (now a
  heading-named entry), the navigator section list (the four headings replace "Records"), and the
  side-by-side grid test (it reaches the row through the block's own `[data-section]` wrapper, which
  every block now has). Commit `e2fd28c`. The finding's other half, delivery sending a nav label, is
  Python and is not touched.
- **S3-027.** `web/fixtures/library.json`: the debt stack footnote reads "Drawn amounts at face value;
  leases as reported." (no "Basis:" label). Test edit: `Module.test.tsx` debt stack footnote assertion.
  The "Not plotted" footnote is S3-004's and is untouched. Commit `9fa61fa`.
- **S3-014.** `web/fixtures/library.json`: Source readiness (the data module of Brevane Marine r-0412)
  delivers a status block "Readiness checks" (Met: source file read in full, pinned to this run) and a
  facts block "Coverage" (source files 1, read in full 1, as of 31 Dec 2026), all drawn from figures
  already in that run. Test: new `Module.test.tsx` describe "the fixture's data module", failed before.
  Commit `a53f30e`.
- **S5-009.** `web/fixtures/model.json`: the Net debt walk table rows are "Effect of free cash flow on
  net debt, FY26" and "..., FY27". Test edit: `StatementsSections.test.tsx` row-trace names. The chart
  step labels ("Cash flow FY26") and the chart note are unchanged: both are pinned by tests and the
  note's exact text by `getByText`; the sign convention now sits in the row label. Commit `4e61ce9`.
- **S1-007 (merged S6-004).** `web/fixtures/run.json`: every cap is USD 25.00 / max 25 (33 strings, 17
  bars); the capped run's spend is its cap, USD 25.00. Test edits (the old figure is the defect): 28
  assertions in `slice.test.ts`, `ActivityEnded.test.tsx`, `ActivityPage.test.tsx`, `Start.test.tsx`,
  `StartPage.test.tsx`, `Steps.test.tsx` (USD 20.00 to USD 25.00, `max` 20 to 25, aria value 20 to 25;
  the "bad bar" probe value 21 to 26 so it still exceeds the max). Commit `dcd68f4`. Not changed, not
  in this finding: the library fixture's Evidence "Spend against the cap" bars still read "of USD 20.00"
  for Full runs (`library.json` lines 1901, 4637, 5575, 6148).
- **S6-014 (OQ-06).** `run.json`: the failed and interrupted alerts drop "Review and start again" and
  "Review and resume" and the sentence about resuming through Start; each keeps one action, "Open what
  finished". Test edits: `ActivityEnded.test.tsx` and `slice.test.ts` expectations; the outside-address
  test in `slice.test.ts` now edits the capped run's alt link (the failed run has none). The disabled
  Stop run (S6-033) is not in this chunk. Commit `3432818`.
- **S6-016.** `activity/Summary.tsx`: the default spend caption is "Spend and cap". Test: new
  `activity/Summary.test.tsx`, failed before. Commit `9db3f0d`.
- **S6-017.** `run.json`: the saved example's readiness no longer lists "Model service reachable" or
  "Spending cap set" (counts follow). `start/Readiness.tsx` draws no Met group when none is met.
  Test edits: `StartPage.test.tsx` readiness lists and counts (six items to four, no Met group on the
  first draft, neither item present; the "two items with the same text" test sets its own count).
  Commit `5f94734`.
- **S6-018.** `slice-read.ts`: the guard is `/\bCP-[0-9A-Z]/i`. Test: new cases in `slice.test.ts` (CP-DR,
  CP-MODEL, CP-L10, CP-OS, cp-1a, a code inside a sentence refused; "Capped", "CP", "cpu-bound" kept),
  failed before. Commit `10f5d91`.
- **S6-022 (in part).** Confirm `gap-7` to `gap-8`; ModuleSteps skeleton `gap-1.5 pt-1.5` to `gap-2 pt-2`;
  Documents `mt-0.5`, `mt-1.5` to `mt-1`, `mt-2`; RunAlert outer ring `size-[38px]` to `size-10`. Left:
  the file-icon pictogram literals in `Documents.tsx` (a token needs `theme.css`, outside the chunk),
  `gap-1.5` in `Context.tsx` and `gap-0.5` in `Start.tsx` (not in the chunk list). No test applies
  (spacing classes). Commit `a2fdde7`.
- **S6-023 (in part).** `Readiness.tsx`: the group's nested tinted box and each item's bordered box are
  gone; items are rows divided by hairlines. Not done: reusing one component with the connected
  `StartReadiness` (the static panel groups items by state and its tests read that structure).
  Test: new `StartPage.test.tsx` case, failed before. Commit `3907a71`.
- **S6-025, S6-027, S6-029.** `start/Documents.tsx`: the hint reads "Up to 50 MB per file"; "or drag and
  drop" is gone; the text Remove button is named "Remove file <name>". `run.json`: the two Next reasons
  add "This page is a saved example, so nothing can be added here." and "...replaced or removed here."
  Test edits: `Documents.test.tsx` (hint, drag and drop, the text Remove name), `slice.test.ts` and
  `StartPage.test.tsx` (the Next reasons). Commit `6f97fee`.

### Open

- **J6-007.** Needs either the hint text in `RunFrame.tsx` (repair-3's file) or a non-null
  `forecastHref`. The reader accepts only `#/model/<issuer>/<run>/forecast`, and `model.json` holds
  only TransDigm, so a Halden link would open a page with no model. `read.test.ts` "reads null for every
  run of the fixture, the model holding none of them" pins `[null, null, null, null]`. Not changed.
- **S3-036.** A trace for each fact needs six new traces and six new Evidence trace rows; the row count
  59 is asserted in `readEvidence.test.ts` (50, 61, 251, 316), `fixtureAgreement.test.ts` (274) and
  `EvidenceTrace.test.tsx` (99, 303, 306, 319), all Evidence-page tests outside this chunk, and the
  "name the row in the drawer heading" route needs distinct traces too. Delivery (Python) is the other
  half. Not changed.
- **S4-003 (with J6-001).** The ruled repair is href `null` plus a reason sentence for every download in
  `library.json` (lines 1941-1974, 2766, 4680, 5606-5676, 6129-6192). The pinned tests are in files
  outside the chunk: `Evidence.test.tsx` (177-179, 189-190) and `EvidenceRecord.test.tsx` (176-183)
  assert the Halden 2026-09-30 links, and the link form would then need synthetic-data tests. The
  rendered anchor already carries `download=""` (checked in jsdom), so the page-replacing navigation in
  the probe is the headless shell's. Shipping sample files needs `web/public/`, outside the chunk. Not
  changed.
- **S5-018.** One unit form (US$m per CM-320) means rewriting about 30 asserted strings in
  `FrontPage.test.tsx`, `StatementsPage.test.tsx`, `StatementsSections.test.tsx`, `ForecastPage.test.tsx`
  and `read-sections.test.ts`, plus the choice between "US$m" and the library fixture's "USD 1,150m"
  style. The brief forbids editing that many expected values for a wording unification. Not changed.

### Closed

- **S4-017, S5-007, S6-013, S6-028:** closed by R14. **S5-025:** closed by R16.

## Checks

All run in the worktree with `PATH=$HOME/.local/bin:$PATH`.

| Check | Exit |
| :--- | ---: |
| `npm --prefix web run lint` | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `vitest run src/pages/library src/pages/run` (36 files, 1110 tests) | 0 |
| `vitest run src/pages/model src/pages/Kit src/pages/Kit7e src/pages/signal src/App.test.tsx src/shell` (59 files, 1477 tests) | 0 |
| `node --test scripts/fixture-data.test.mjs` (12 tests) | 0 |
| `tools/quality_gate.py` | not run: no Python changed |

Signal's tests (`src/pages/signal/`) are in the vitest run above because library parts changed.

Files to expect merge conflicts in with repair-3 (test files edited in small hunks):
`Overview.test.tsx` (S2-023), `Module.test.tsx` (S3-026, S3-027, S3-014), `EvidenceJump.test.tsx`
(S4-018), `StatementsSections.test.tsx` (S5-009), `slice.test.ts`, `StartPage.test.tsx`,
`Start.test.tsx`, `Steps.test.tsx` (caps, readiness, Next reasons). The `model` heading-order tests
(`StatementsPage.test.tsx`, `StatementsSections.test.tsx`) hit the 5 s default timeout once when a whole
directory ran in parallel and passed on a rerun alone.

Not verified: no screenshot or browser run of any change (the focus ring, the label above the search
field, the toast, the readiness rows, the alert ring and the Documents step were checked in jsdom
only); no `npm run build` or `file-check` of the fixture build; the full vitest suite and the slow
tests were not run; no Python changed, so the quality gate and Python tests were not run; the library
fixture's USD 20.00 Evidence bars and the open findings above were not changed.

## Chunk b2

Four items on the same branch, committed and pushed one by one. Commits: `d2eabd2` (item 1),
`6468d29` (item 2), `3e8b5ff` (item 4), `7f84b16` (item 3).

**One test file fails and is outside this chunk's list.** Item 4 changes the Full cap in the fixture
from 20 to 25; `web/src/pages/library/readRecord.test.ts` pins the old cap in two assertions and now
fails 2 tests: lines 92 to 94 (`text: "USD 11.40 of USD 20.00"`, `max: 20`) and line 174 (a spend of 21
as "above its cap"). They need `USD 25.00`, `max: 25` and a value above 25 (26). I did not edit that
file: the brief limits this chunk to its listed files, and the edit was declined by the permission
check when attempted. Nothing else in `web/src/pages/library` fails.

### Outcomes

| Item | Outcome | Files |
| :--- | :--- | :--- |
| 1. component-map count | repaired | `docs/design/component-map.md` |
| 2. C4-011 yield wrap | repaired (wrap); four decimals left as authored | `web/src/components/chart/ComparisonChart.tsx`, `ComparisonChart.test.tsx` |
| 3. J6-006 / S2-001 fixture side | repaired by giving the four issuers the report their cards describe | `web/fixtures/library.json` |
| 4. RV-4 caps | repaired, with the readRecord.test.ts consequence above | `web/fixtures/library.json`, `web/src/pages/library/EvidenceRecord.test.tsx`, `web/src/pages/run/slice-start.ts` |

**1.** Line 353 said the module state "takes shapes from the design system's ten by meaning"; it now
says eleven. That is the only change. `docs/design/states-2.md` is untouched. No test applies.

**2. C4-011.** The value column of each panel was a fixed 56px, and `wrap-anywhere` broke "7.0100%"
after "7.0100" (measured in headless Chromium on a scratch page using the app's CSS: box 56 by 44 px,
two lines; "USD 1,150m" broke the same way). The column is now `minmax(56px,max-content)`: 56px at
least, as wide as its widest value. The same page after the change: "7.0100%" is one line (22 px high,
column 57 px) at 1440 and at 390 px; the short-value panel is still 56 px; the over-12-character
branch (`minmax(56px,min(33%,9rem))`, wrapping) is unchanged. No digit is changed. The four decimals
are authored digits: `securityQuote` draws the first `yield N%` of the handoff's market text
("yield 7.0100%, 7.01% rounded"), and the Securities test "shows the paired observed quote with all
authored digits" pins "7.005000%". It stays as it is, and so do the decimals.
Tests: `ComparisonChart.test.tsx`, a new case "sizes the value column to its widest value, so a unit
stays on its number" (a 7-character yield pair; class and exact texts), failed before the change.
Test edit: the layout case's pinned class `grid-cols-[72px_minmax(0,1fr)_56px]` is now
`grid-cols-[72px_minmax(0,1fr)_minmax(56px,max-content)]`; the fixed 56px column was the defect, and
the 56px minimum the mock sets is kept. jsdom cannot measure a wrap, so the class assertions stand in
for it; the wrap itself was measured in Chromium as above.

**3. J6-006 / S2-001, fixture side.** Cards that stop claiming a finished report were not an option:
`Home.test.tsx` pins the Tessaly lead and the Running, Failed and Capped cards' notes ("Seven modules
delivered; their findings can be read."), and it may not change. So the entries carry the report.
Corvane Packaging (run 2026-06-30), Ardenne Cable (2026-03-31), Tessaly Foods (2026-09-30) and Lumora
Health (2026-09-30) each hold one run in `runs`, the run their card describes; `history.latest`
names it, `history.empty` is `null`, and the entry's `report` opens it (`report: null` stays on the
Running, Failed and other entries). The pages now read: no "No report yet", the feed draws every run,
one "Open report" each, and Overview, Changes, Modules and the Evidence tabs render for each run
(checked with a temporary vitest render, since deleted).
- Corvane, Ardenne and Tessaly runs are built from Brevane Marine's two-module run (Business profile
  and Source readiness), with their own words, metrics (the cards' own figures), dates, gap, source
  file, run code and hashes. Lumora's is a Capped run with seven delivered modules (Business profile,
  Industry and competition, Financial performance, Cash flow and liquidity, Covenants and
  documentation, Management and governance, Environmental, social and governance) and one
  "Six modules not run" Overview item that opens no module, so its pinned card note holds. The leverage
  and net leverage metrics are explicit gaps, as the card has none.
- Two card edits, not pinned by any test: Ardenne's progress "13 of 13 modules" and Tessaly's
  "6 of 6 modules" now read "2 of 2 modules" (value and max too), because their reports hold two
  modules. Lumora's "7 of 13" and Corvane's "5 of 13" (the running run) already agree.
- No card `href` changed: the cards still open the issuer's history. `fixtureAgreement.test.ts`
  compares a card with its run only when `href` names a loaded run, so it does not compare these four
  (Tessaly's "adjusted" basis would not pass it: its trace has no "company-adjusted" statement).
- Tessaly's run is a "Monitoring update", which is not a pathway in
  `docs/rulings/2026-11-15-pathway-tiers-and-caps.md`; its spend bar uses USD 20, the cap of the five
  purpose pathways, spend 6.40. This is a choice, not a ruling: change it if Monitoring update
  should carry another cap. The other runs use USD 25 (Full); Lumora's stopped at USD 24.60 of 25.00.
- The invented module text is fixture content in the style of the Halden run's; none of it is a
  module's written analysis.
No test file is edited for this item; all of `src/pages/library` passes apart from the two
readRecord.test.ts assertions above (they come from item 4, not from this item).
The code half of S2-001 (History drawing its runs under "No report yet") is T32 in `History.tsx` and
`RunFeed.tsx`, outside this chunk; with these reports the page no longer reaches that state for these
four issuers, but the code defect is unchanged for an issuer that has runs and no report.

**4. RV-4.** The four Evidence "Spend against the cap" bars (Halden 2026-09-30, 2026-03-31,
2025-09-30 and Brevane Marine r-0412) read "of USD 25.00" with `max` 25; the spend values are
unchanged. `EvidenceRecord.test.tsx` lines 132 and 134: the bar's name is "USD 11.40 of USD 25.00" and
`aria-valuemax` is "25" (test edit: the first bar, the two pinned values only). `slice-start.ts:39`:
the comment's example label reads "Submit, spend up to USD 25.00" (comment only). No test applies to
the comment. Observation, not changed: the Halden 2026-03-31 Capped run's spend note still says "The
run finished inside its cap", though the run stopped at its cap.

### Checks

All in the worktree with `PATH=$HOME/.local/bin:$PATH`.

| Check | Exit |
| :--- | ---: |
| `npm --prefix web run lint` | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `vitest run src/components/chart src/pages/library src/pages/connected/report/Securities.test.tsx src/pages/signal` (82 files, 1783 tests) | 1: 2 failures, both `readRecord.test.ts` (see above); 81 files and 1781 tests pass |
| `node --test web/scripts/fixture-data.test.mjs` (12 tests) | 0 |
| `tools/quality_gate.py` | not run: no Python changed |

Not verified: no browser run of the fixture build or of the four new reports (they were rendered in
jsdom only); the `ComparisonChart` wrap was measured in Chromium on a scratch page with the app's CSS,
not on the Securities page of the connected build, and with whatever font that CSS loads; no
`npm run build`, `test:file` or file-check, and no `params` entries were added for the new issuers'
history or run routes, so the build's route visits do not reach them; the full vitest suite and the
slow tests were not run; the two `readRecord.test.ts` assertions were not changed.

Follow-up edit (owner, 2026-11-17: "update to $25"): `web/src/pages/library/readRecord.test.ts` lines 92-94 now pin "USD 11.40 of USD 25.00" and `max: 25`, and line 174 uses a spend of 26 as "above its cap" (all three are the Full run Halden 2026-09-30, cap USD 25); after it `vitest run src/pages/library src/pages/signal` exited 0 (61 files, 1503 tests) and `node --test web/scripts/fixture-data.test.mjs` exited 0 (12 tests).
