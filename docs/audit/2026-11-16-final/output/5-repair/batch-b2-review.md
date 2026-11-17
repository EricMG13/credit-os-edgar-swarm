# Batch b, chunk b2: fresh review (stage 5 step 7)

Reviewer: fresh session, did not write the chunk. Worktree `wt-batch-b`, branch `audit/lead-batch-b`,
reviewed head `01398c5`; chunk b2 is `bbebf06..01398c5` (`d2eabd2`, `6468d29`, `3e8b5ff`, `7f84b16`,
`eec66a3`, `01398c5`). No code was changed by this review. A temporary render test was written to
render the four new runs and deleted afterwards (`git status` showed only the untracked
`web/node_modules` link).

## Verdict

**PASS. High 0, Medium 0.** Four items pass. Eleven Low or Info findings (four Low, seven Info) are listed
below; none blocks the merge. Two are worth an edit in the fixture if the lead wants it clean (F1, F2).

| Item | Verdict |
| :--- | :--- |
| 1. component-map "ten" to "eleven" | pass (F9, Info: true only with batch c) |
| 2. C4-011 value-column wrap | pass (F10, Info) |
| 3. Four issuers' cards and new runs in `library.json` | pass with Low findings F1 to F5 and Info F6, F7, F8 |
| 4. RV-4 four Evidence bars to USD 25 | pass (F11, Info, pre-existing) |

## Item 1: docs/design/component-map.md

`git show d2eabd2` is one line in one file: "the design system's ten by meaning" now reads "eleven".
Nothing else in the file changed. No test applies. Pass.

- **F9 (Info).** The statement is true on `audit/lead-batch-c`, not on this branch. Commit `a7a3891`
  there adds the eleventh shape ("hollow square", for "Not ready") and `design-system.md` reads
  "Eleven shapes"; on this branch `docs/design/design-system.md:347` still reads "Ten shapes",
  `shapes.tsx` has 10 entries and `StatusBadge.test.tsx` pins 10. After batch c is merged the two
  documents agree; merging b alone leaves component-map and design-system contradicting each other.
  No change needed if c is merged too.

## Item 2: C4-011, ComparisonChart value column

Diff: `ComparisonChart.tsx` one class string, the non-long branch
`grid-cols-[72px_minmax(0,1fr)_56px]` to `grid-cols-[72px_minmax(0,1fr)_minmax(56px,max-content)]`.
The long-text branch (a text over 12 characters, `minmax(56px,min(33%,9rem))`) is untouched. No digit,
text or prop changes. Pass.

- **Callers (all four read).** `Securities.tsx:223` (price and yield pair), `Downside.tsx:195`,
  `MacroSensitivity.tsx:205` and `model/sections/CaseComparison.tsx:14` pass `panels` and `table`
  props only; none sets a class or width on the chart. The only layout change is inside each panel:
  the value column is at least 56px and as wide as the widest value of that panel (up to 12
  characters), and the bar column (`minmax(0,1fr)`) takes the rest. A panel whose values are all
  short is unchanged at 56px. Panels in one chart may now differ by up to about 25px in bar-track
  width; each panel has its own scale, so no bar is compared across panels. Tests of the four callers
  and `endHeading.test.tsx` pass.
- **Wrap, measured independently** (headless Chromium on a scratch page with the same grid columns,
  `overflow-wrap:anywhere`, tabular figures, Arial 14px, not the app's font, so "7.0100%" itself fits in
  56px here). At 300, 358 and 1200px: old column, "USD 1,150m" is 56 by 44 px (two lines); new column,
  80 by 22 px (one line). "7.005000%", "-1,234,567.8" were two lines in the old column and one line in
  the new. Short-value panels stay 56px. The unchanged long branch still wraps "USD 1,150,200m" at
  300px (99 by 44 px).
- **The one edited pinned class** (`ComparisonChart.test.tsx` line 129, the layout case). It asserted
  the fixed `_56px` column, which is the defect C4-011 names (a unit left alone on a second line); the
  edit is to `minmax(56px,max-content)` and the 56px minimum is kept. It is the behaviour the finding
  requires and nothing else in that assertion changed. The new case (class and exact texts) fails
  before the change (it asserts `not.toHaveClass("..._56px]")`). It cannot measure a wrap in jsdom, so
  it pins the class, not the line count; the author's and my Chromium measurements stand in.
- **F10 (Info).** C4-011's expected line also cites "at most two decimals"; the chunk keeps the authored
  "7.0100%" (the finding's suggested change offered "widen the value column" or "no-wrap" as
  alternatives, and `Securities.test.tsx` pins "7.005000%"). The long-text branch still wraps a
  14-character value at 300px. Both are outside what the lead asked for.

## Item 3: library home cards and the four issuers' runs

**Diff scope** (computed by parsing `bbebf06:web/fixtures/library.json` against `HEAD`): top-level
`issuers` and `params` identical; `slice.home` differs in `cards` only, in two cards' `progress`;
`home.list`, filters and subtitle identical; Halden's 2026-06-30 run, `corvane-fasteners` and every
other existing run identical except the four spend bars (item 4). Each of the four issuers' `history`
differs in three fields only: `latest` (null to the run id), `empty` (text to null) and the one entry's
`report` (null to the run id). Each new `runs` entry has the key structure of Brevane's `r-0412` (Lumora's two gap tiles carry `reason` where a value tile carries `text` and `at`). App
code: `7f84b16` touches `web/fixtures/library.json` and nothing else; no `.ts`, `.tsx` or test file
changed in the commit. Pass.

**Card against entry, field by field** (script over the parsed fixture): for each of Corvane, Tessaly,
Ardenne and Lumora the card's `asOf`, `pathway`, `lead`, the three measures' text and basis wording
equal the run's header, Overview bottom line and headline tiles; a measure the card holds as null is
absent or a stated gap in the run (Ardenne interest cover absent; Lumora leverage and net leverage
gaps); the history entry's date, pathway and state equal the run's header and its text is the card's
lead or its short form; the run's "ran" date equals the Record timing note's date for all four (2 Aug
2026, 4 Nov 2026, 12 May 2026, 10 Nov 2026). The home list's count lines ("3 of 5", "4 of 5", "4 of 5"
runs, and the adjusted counts) still follow from the five cards' measures. The card state differs from
the run state for Corvane (Running card, Finished 30 Jun report) and Ardenne (Failed card, Finished 31
Mar report) by design: the card is the issuer's latest run and its note names the report shown.
Pass.

**Internal consistency of each run:** the Overview module summary, `head.tabs.modulesCount`,
`modules.length` and the Evidence module filter agree for all four (2, 2, 2, 7; the reader enforces
`modulesCount == modules.length`); gap, source, trace and register counts match their lists; run codes
(`CRP-20260630-FR-0001`, `TSF-20260930-MU-0001`, `ARC-20260331-FR-0001`, `LMH-20260930-FR-0001`),
hashes (all 64 hexadecimal, all distinct from each other and from Brevane's) and file names are
specific to each run. Caps by pathway (ruling `2026-11-15-pathway-tiers-and-caps.md`): Corvane, Ardenne
and Lumora are "Full review" and read of USD 25.00, max 25, spend below the cap (10.25, 10.25, 24.60);
Tessaly is discussed below. Every page of every new run renders (temporary vitest render of the
Overview, Changes, Modules, each module, the Evidence summary, sources, trace, gaps and record pages
and the history page for each of the four: no alert, no loading skeleton, no "No report yet"; the
history page draws one "Open report" per run that has a report).

**Tessaly's cap.** The run is a "Monitoring update" with spend USD 6.40 of USD 20.00. No ruling or
fixture text names a cap for it. The cap ruling lists Lite 15, Full 25, Deep 40, the five purpose
pathways 20 and the deactivated short snapshot 20; "Monitoring update" is none of them. The words
appear only in `library.json` (the pathway filter at line 39, Halden's 30 Jun 2026 history row, and
now Tessaly's card, entry and run) and in `Home.test.tsx` filter picks; no code, doc or ruling maps it
to a cap. USD 20 is therefore the author's choice (F7).

Findings:

- **F1 (Low).** Tessaly's run contradicts itself on whether it has an earlier run. Overview text and
  the Business profile bottom line say "what moved since the last run" (`library.json:6341`, `:6441`),
  while Changes says "This is the first run on Tessaly Foods" and the history holds one run. Fix:
  drop "since the last run" in both sentences. Fixture text, not pinned by a test.
- **F2 (Low).** Lumora's Record, Model calls table (`library.json:7852` and the total after it): the one
  listed row (Business profile) carries 31 calls, 3 retries and 1,512,000 / 79,800 tokens, equal to the
  total's, yet costs 5.10 against a total of 24.60. The spend note says six modules' calls "are not
  listed", but six delivered modules' calls are not listed either. Halden's capped run lists a row with
  fewer calls than its total. Fix: give the row its own smaller calls and tokens. Not pinned.
- **F3 (Low).** Lumora lists seven modules; the six not run are one collapsed Overview item that opens
  nothing, and the Modules page has no entry for them. Halden's capped run lists every not-run module
  with a "Not run" page and a reason (the Overview test cites sweep ruling SW-01: the tab counts the
  modules the run lists). The chunk's choice keeps the pinned card note ("Seven modules delivered...")
  true and the counts consistent, but the reader cannot see each not-run module's reason. Acceptable
  for a fixture; list the six as `Not run` entries if the capped run should read like Halden's.
- **F4 (Info).** Lumora's "Leverage" gap tile carries the note "Net debt to EBITDA" (copied from the
  net leverage tile, `library.json:7358`); gross leverage is debt to EBITDA. Halden's runs use the same
  note only for net leverage.
- **F5 (Low).** Corvane and Ardenne are "Full review" runs with two modules ("2 of 2 delivered"), and
  the Ardenne and Tessaly cards' progress was edited from "13 of 13" and "6 of 6" to "2 of 2" to match.
  Brevane's existing Full-review run has the same two-module shape, and no test pins the old figures, so
  this follows precedent, but a Full run is a 13-module pathway (Halden's runs). Fixture realism only.
- **F6 (Info).** All four cards keep `href: null`, so `fixtureAgreement.test.ts` (compares a card with its
  run only when `href` names a loaded run) does not cover them, and Tessaly would fail its basis rule
  (its run has no trace stating "company-adjusted"). My manual comparison above found no
  disagreement. The cards open the issuer history, where "Open report" opens the run.
- **F8 (Info).** The four runs add 12 more dead `downloads/...` hrefs (3 each), which the open S4-003 repair
  will have to turn into `null` plus a reason, and no `params` entries were added for the new issuers'
  routes (`History.test.tsx` pins the history params to Halden, Corvane Fasteners and Brevane), so the
  build's route visits do not reach them. Both are known from the report. T32's code defect (History
  drawing no runs under "No report yet") stays reproducible with `corvane-fasteners`.

## Item 4: RV-4, four Evidence spend bars

Four bars changed: Halden 2026-09-30 (11.40), 2026-03-31 (9.80), 2025-09-30 (10.25) and Brevane
`r-0412` (10.25), each text "of USD 25.00" and `max` 25, value unchanged; all four runs are "Full
review". No other "USD 20" remains in the library fixture except Tessaly's (F7); `run.json` was done in
S1-007. Test edits are the corrected cap and nothing else: `EvidenceRecord.test.tsx` lines 132 and 134
(the bar's name "USD 11.40 of USD 25.00" and `aria-valuemax` "25"); `readRecord.test.ts` lines 92 to 94
(text and `max` 25) and line 174 (the over-cap case's value 21 to 26, so it still exceeds the max).
`slice-start.ts` is one comment (the example label "Submit, spend up to USD 25.00"); no code line.
Pass.

- **F7 (Info).** Tessaly's USD 20 cap, as above. If "Monitoring update" is meant to be an Earnings-Update-like
  purpose pathway, 20 is right; the chunk's report labels it a choice.
- **F11 (Info, pre-existing).** Halden's 2026-03-31 run is "Capped" but its spend reads 9.80 of 25.00 with the
  note "The run finished inside its cap" (it read 9.80 of 20.00 before). Outside this chunk.
- Report hygiene (Info): the Checks table in `batch-b.md` still shows the vitest row as exit 1; the
  follow-up paragraph beneath it records the passing rerun. My rerun below agrees with the follow-up.

## Checks run

Each in the worktree with `export PATH=$HOME/.local/bin:$PATH`, under `timeout 300`.

| Command | Exit | Result |
| :--- | ---: | :--- |
| `npm --prefix web run lint` | 0 | eslint, 0 warnings |
| `npm --prefix web run format:check` | 0 | all files use Prettier style |
| `npm --prefix web run typecheck` | 0 | `tsc --noEmit` clean |
| `cd web && npx vitest run src/components/chart` | 0 | 20 files, 263 tests |
| `cd web && npx vitest run src/pages/library` | 0 | 27 files, 873 tests |
| `cd web && npx vitest run src/pages/run` | 0 | 9 files, 237 tests |
| `cd web && npx vitest run src/pages/model` | 0 | 16 files, 689 tests |
| `cd web && npx vitest run src/pages/connected/report` | 0 | 21 files, 274 tests |
| `cd web && npx vitest run src/pages/signal` | 0 | 34 files, 630 tests |
| `node --test web/scripts/fixture-data.test.mjs` | 0 | 12 tests, 12 pass |

Also run, not gates: a temporary vitest render of the four runs (4 tests, pass; file deleted); Node
scripts over `library.json` at `bbebf06` and `HEAD` (diff scope, card against run, hash uniqueness);
a headless Chromium measurement of the grid columns. The scripts and output are in the reviewer's
scratchpad, not committed.

## Overall: PASS

High 0, Medium 0, Low 4 (F1, F2, F3, F5), Info 7 (F4, F6, F7, F8, F9, F10, F11).

Not verified: no run of the fixture build, `npm run build` or `test:file`/file-check (the new runs are
outside `params`, so those visits would not reach them anyway); no browser view of the four new reports
or of the Securities page in the connected build (the wrap was measured on a scratch page with Arial,
not the app's font or CSS, and "7.0100%" itself already fits 56px in that font, so the measured wrap
cases are "USD 1,150m", "7.005000%" and "-1,234,567.8"); the full vitest suite and the slow tests; no
Python test or `tools/quality_gate.py` (no Python changed); the `audit/lead-batch-c` merge was read
(`a7a3891`) but not built with this branch; no check that the invented fixture sentences (covenant
timing, volumes, subscribers) are plausible beyond internal agreement; no paid call.
