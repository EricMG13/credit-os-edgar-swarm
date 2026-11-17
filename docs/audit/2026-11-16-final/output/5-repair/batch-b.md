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
