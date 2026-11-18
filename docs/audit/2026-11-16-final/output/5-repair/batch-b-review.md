# Batch b review (stage 5 step 7, chunk b)

Reviewer: a fresh session that did not write the batch. Worktree `wt-batch-b`, branch
`audit/lead-batch-b` at `101d230`, base `origin/audit/final-repairs` (`ca0db16`). Reviewed:
`git diff origin/audit/final-repairs..HEAD` (36 files, all under `web/` except the worker's own
`batch-b.md`; no Python, no Signal, no `prompts/`, no `proof/handoffs/`; `git diff --check` exit 0).
Each finding was read against its register record (`expected`, `actual`, `suggested_change`,
`ruling_note`, `merged_ids`), `BATCH-BRIEF.md`, README rulings R1 to R17 and the lead ruling L2.

## Verdict

**Overall: PASS.** No High and no Medium review finding. Four Low and eight Info review findings,
listed below. The 20 "repaired" findings fix their cause; two of them (S6-022, S6-023) and one
more (S5-009) are partial, and the report says so for S6-022 and S6-023.

| Severity | Count |
| :--- | ---: |
| High | 0 |
| Medium | 0 |
| Low | 4 (RV-1 to RV-4) |
| Info | 8 (RV-5 to RV-12) |

## Per finding

Test edits that change an existing expected value were each checked against the finding. A test
file listed as "outside the chunk" is one of Overview, Module, EvidenceJump, StatementsSections,
slice, StartPage, Start, Steps, Documents, ActivityEnded, ActivityPage, Kit, Kit7e.

| Finding | Verdict | Reason |
| :--- | :--- | :--- |
| X1-016 | pass | `Kit7e.tsx` names the Full cap of USD 25, as the finding suggests. `Kit7e.test.tsx` edit `/cap of USD 20/` to `/Full cap of USD 25/` asserts the new sentence; the JSX line break collapses to one space. |
| S1-015 | pass | `disallowEmptySelection` on the kit's Chart or Table group; the new `Kit.test.tsx` case fails on the base code. |
| S2-017 | pass | A visible `<label for>` over the search field; `aria-label` kept, placeholder removed. The new `FilterBar.test.tsx` case fails on the base code. Home tests query by accessible name, which is unchanged. The layout change (`items-end`, label above the field) was checked in jsdom only. |
| S2-022 | pass | Import moved to the top; no test applies, lint and typecheck cover it. The connected app also imports `ChangeCard`; its two Changes test files pass. |
| S2-023 (OQ-09) | pass | Chevron on linked rows only, as OQ-09 recommends. `Overview.test.tsx` `[1,0,0,0,0,0,0]` to `[0,1,1,1,1,1,1]` is the arrangement the finding requires (item 0 is the "9 modules unchanged" group, the other six are linked). `Changes.tsx` shares `ModuleItems`; its tests pass. |
| S4-018 | pass | `textValue` is label plus detail, so `T-0014` and `c-0412` find their rows. The `EvidenceJump.test.tsx` edit replaces "matches the label only" with the label-and-detail behaviour the finding requires; `T-9999` still gives "No item matches". The narrow-width half (`whitespace-nowrap`, `max-sm:hidden`) is closed by R14; see RV-5. |
| S3-026 | pass | A block with no `nav` key is named by its own heading; a data module whose blocks all say "no entry" keeps one "Records" entry. The three `Module.test.tsx` edits follow from it: the navigator entry name, the navigator list, and the side-by-side grid row now reached through the block's `[data-section]` wrapper with the same grid-class assertions. `Records.tsx` already wraps every block that has an entry, so no render code needed to change. The Python half (delivery sending a label) is untouched, as the brief requires. New `recordNav.test.ts` fails on the base code. |
| S3-027 | pass | The fixture footnote no longer carries the "Basis:" label; the `Module.test.tsx` assertion follows. No Python path produces this footnote (the static app reads fixtures only, OQ-01). |
| S3-014 | pass | The Brevane Marine data module delivers a status block and a facts block, all from figures the run already holds: the Overview line "The one source file was read in full and pinned to this run", the Evidence Sources tab "1", "31 Dec 2026". The shape is the existing record shape. The new `Module.test.tsx` case fails on the base fixture. |
| S5-009 | Low, partial (RV-1) | The two table rows are now labelled by their effect on net debt, and the arithmetic still agrees (26,300 - 2,540 - 2,836 = 20,924). The chart steps still read "Cash flow FY26" and "Cash flow FY27" and the chart note is unchanged, so chart and table still name one step differently, which the finding's `expected` line names. `StatementsSections.test.tsx` edit (three aria-labels) is the new row label and nothing else. |
| S1-007 (merged S6-004) | pass | `run.json`: all nine runs with a spend are labelled "Full credit review" and every cap is now USD 25.00, max 25: 33 strings and 17 bars; no `20` remains in the file. The capped run's spend is its cap. All 28 outside-chunk test edits are USD 20.00 to 25.00, `max` 20 to 25, aria-valuenow/valuemax 20 to 25, or the "bad bar" probe 21 to 26 (21 would no longer exceed max 25). Draft readiness counts follow the item lists. See the cap answer, RV-4 and RV-7. |
| S6-014 (OQ-06) | pass | The failed and interrupted alerts keep one action, "Open what finished", and drop the resume and start-again offers and the sentence about resuming through Start. `alt` is nullable by design (`RunAlert` draws nothing for null). The `slice.test.ts` outside-address case now edits the capped run's `alt` link (index `runs[5]`), same assertion on a link that exists. The disabled Stop run belongs to S6-033, a separate finding. |
| S6-016 | pass | Default `spendCaption` is "Spend and cap"; the connected page passes its own "Cap usage". New `Summary.test.tsx` fails on the base code. |
| S6-017 | pass | The saved example no longer lists "Model service reachable" and "Spending cap set"; counts follow (4, 0, 1, 3, 3, 4, 4, 4). `Readiness.tsx` draws no empty Met group. `StartPage.test.tsx` edits are the readiness lists and counts only; the duplicate-text test sets its own count and its own text. |
| S6-018 | pass | Guard is `/\bCP-[0-9A-Z]/i`, as the finding suggests. New cases refuse CP-DR, CP-MODEL, CP-L10, CP-OS, cp-1a, CP-1A and a code inside a sentence, and keep "Capped", "CP", "cpu-bound", "Step CP". They fail on the base code. |
| S6-022 | Low, partial (RV-2) | Ladder steps applied in Confirm, ModuleSteps, Documents and the alert ring (`size-[38px]` to `size-10`). The file-icon literals in `Documents.tsx` (lines 29, 30), `gap-1.5` in `Context.tsx` and `gap-0.5` in `Start.tsx` remain; the report names all three. No test applies to spacing classes. |
| S6-023 | Low, partial (RV-3) | Items are hairline-divided rows, the group's tinted box and the item boxes are gone, which clears D-21 and D-23. Reusing one component with the connected `StartReadiness` is not done; the report says so. The new `StartPage.test.tsx` case asserts class names and fails on the base code. |
| S6-025 | pass | Hint reads "Up to 50 MB per file", as the connected page does. |
| S6-027 | pass | "or drag and drop" is gone; both Next reasons say the page is a saved example. `Documents.test.tsx`, `slice.test.ts` and `StartPage.test.tsx` carry the new strings. |
| S6-029 | pass | The text Remove button is named "Remove file <name>"; its visible text "Remove" stays inside the name. See RV-6 on R16. |
| J6-007 | open, accepted | The hint text needs `RunFrame.tsx`, which `tasks.md` gives to repair-3; a non-null `forecastHref` would link a Halden run to a model page that does not exist (`model.json` holds TransDigm only). `read.test.ts` pins four nulls. |
| S3-036 | open, accepted | Six new traces and Evidence rows would change row counts pinned in Evidence-page tests outside the chunk (`readEvidence`, `fixtureAgreement`, `EvidenceTrace`); the Python half is delivery. |
| S4-003 (with J6-001) | open, accepted with a note | Ruling L2 says repair the fixture (href null with a reason). The hrefs are pinned in `Evidence.test.tsx` and `EvidenceRecord.test.tsx`, outside the chunk; the brief says leave a finding open when it needs a file outside the list. The edits those tests would need are the behaviour the finding requires, so the lead can assign it with those two test files. |
| S5-018 | open, accepted | About 30 asserted strings in five test files, plus a choice between "US$m" and the library's "USD 1,150m" style. The brief allows such edits when the finding requires them, so this is a cost judgement for a Low finding, not a rule. |
| S4-017, S5-007, S6-013, S6-028 | closed by R14 | Match the `ruling_note` of each. |
| S5-025 | closed by R16 | Matches its `ruling_note`. |

## Edited expected values, one by one

| File | Edit | Verdict |
| :--- | :--- | :--- |
| `Kit7e.test.tsx` | cap sentence 20 to Full cap of 25 | follows X1-016 |
| `Overview.test.tsx` | chevron counts, test title | follows S2-023 / OQ-09 |
| `EvidenceJump.test.tsx` | label-only to label-and-detail match; `T-9999` keeps "No item matches" | follows S4-018 |
| `Module.test.tsx` | navigator entry name; navigator list; grid row via `[data-section]`; debt stack footnote | follow S3-026 and S3-027; grid-class assertions unchanged |
| `StatementsSections.test.tsx` | three row aria-labels | follows S5-009 |
| `slice.test.ts` | Next reason; Submit label, amount, action; started cap; `SPEND` max; running spend bar; two feed lines; failed alert; capped bar; interrupted alert; outside-address case; bad-bar 21 to 26 | follow S6-027, S1-007, S6-014; the 26 keeps the probe above max 25 |
| `ActivityEnded.test.tsx` | failed and interrupted alerts; capped title; capped aria-valuenow and valuemax | follow S6-014, S1-007 |
| `ActivityPage.test.tsx` | bar label, feed line, `aria-valuemax` | follow S1-007 |
| `Start.test.tsx` | every USD 20.00 to 25.00, `SUBMIT` | follow S1-007 |
| `StartPage.test.tsx` | readiness lists, counts, Met group absent on the first draft, Submit label, blocked reasons, cap name | follow S6-017, S1-007, S6-027 |
| `Steps.test.tsx` | Confirm cap row | follows S1-007 |
| `Documents.test.tsx` | hint, drag and drop, the text Remove name | follow S6-025, S6-027, S6-029 |

Across all of them no assertion was removed or loosened, no test was skipped and no timeout was raised. The new tests, run against the base
production code and fixtures in a temporary detached worktree (since removed), gave 29 failures in
10 files, so they are not vacuous. Fixture changes: `library.json` has two hunks (the footnote and
the data module's records), `model.json` two row labels, `run.json` caps, alerts, readiness lists
and Next reasons only. Nothing beyond the findings. `run.json` is internally consistent: every
draft's readiness counts equal its item lists (not met 4, 3, 1, 1, 0, 0, 0; met 0, 1, 3, 3, 4, 4, 4),
and the Confirm, Start, dialog, Run started and every bar agree on 25.

## The cap answer

Caps by pathway (`docs/rulings/2026-11-15-pathway-tiers-and-caps.md`): Lite 15, Full 25, Deep 40, the
five purpose pathways 20.

- `web/fixtures/run.json`: the nine runs that carry a spend (the other two records, "none" and "unreadable", carry no
  figure) and all seven drafts are the Full credit review, so 25 is
  right everywhere, and no "20" remains. The "many-modules" stress run (22 modules, USD 17.45) is
  also labelled Full, so it takes 25.
- `web/fixtures/library.json`: the Evidence "Spend against the cap" bars still read "of USD 20.00"
  with `max` 20 for Full runs, all four labelled `"pathway": "Full review"`:
  - line 1901, Halden Aerostructures 2026-09-30, "USD 11.40 of USD 20.00"
  - line 4637, Halden Aerostructures 2026-03-31, "USD 9.80 of USD 20.00"
  - line 5575, Halden Aerostructures 2025-09-30, "USD 10.25 of USD 20.00"
  - line 6148, Brevane Marine r-0412, "USD 10.25 of USD 20.00"

  They are pinned by `EvidenceRecord.test.tsx` lines 132 and 134 (name "USD 11.40 of USD 20.00",
  `aria-valuemax` "20"); `Evidence.test.tsx` and `readRecord.test.ts` do not pin them. No finding
  in the register names these four bars (S1-007 and S6-004 name `run.json`), so the batch was right
  not to change them; see RV-4.
- `model.json` carries no cap.

## Review findings

- **RV-1 (Low), S5-009 partial.** Chart steps stay "Cash flow FY26" and "Cash flow FY27" while the
  table rows read "Effect of free cash flow on net debt, FY26" and "..., FY27"; the finding's
  `expected` line names that mismatch. The chart step labels and the chart note are pinned by tests;
  changing them is the behaviour the finding requires, so the edit is allowed. Suggested: make the
  chart steps and the note state the effect too, and name each edit.
- **RV-2 (Low), S6-022 partial, counted as repaired.** The report counts it "repaired" with "in
  part"; three literal groups remain (above). The lead should record it as partly open.
- **RV-3 (Low), S6-023 partial, counted as repaired.** Same: one shared readiness component is not
  built. The visible defects (D-21, D-23) are fixed.
- **RV-4 (Low), unregistered: the four library Evidence cap bars above.** They show USD 20.00 beside
  a Full review, which the retired R-09 rule forbids. Fixture-only (L2). Repair: set the text to
  "of USD 25.00" and `max` to 25 in the four places and edit `EvidenceRecord.test.tsx` lines 132 and
  134 to match, a value that changes only because the fixture is corrected. Register it, or fold it
  into the lead's follow-up.
- **RV-5 (Info), retained narrow-width changes.** S4-017 (`CopyToast.tsx`, new `CopyToast.test.tsx`)
  and S4-018's `whitespace-nowrap` and `max-sm:hidden` (plus one class-assertion test) are R14
  findings, closed. The report says the lead told the worker to leave them in. At 768 px and wider
  the classes are identical to the base, and `max-sm` is below 640 px, so desktop is unchanged. The
  toast uses `min-[768px]` literals, as other files use `min-[1200px]`. The lead may drop them.
- **RV-6 (Info), S6-029 under R16.** A control name is a screen-reader-only change. The report says
  the lead kept S6-029; one `aria-label`, harmless.
- **RV-7 (Info), capped run arithmetic.** The capped run's nine itemised module spends sum to USD
  14.65 against a spend of USD 25.00; the remainder (10.35, was 5.35 at cap 20) is the part-way
  Recovery module and is not stated. No sentence claims the figures add up, so nothing is false, but
  a reader who adds them sees a gap.
- **RV-8 (Info), stale comment.** `web/src/pages/run/slice-start.ts:39` still gives
  `"Submit, spend up to USD 20.00"` as its example.
- **RV-9 (Info), repeated reason.** On the Documents step the Next reason and the `NOT_CONNECTED`
  line under the drop zone now both say the page is a saved example.
- **RV-10 (Info), load-sensitive timeouts.** On the first parallel run `src/pages/library` failed one
  test this batch did not edit (`Module.test.tsx` "moves focus to the heading of the block each
  entry names", 5 s) and `src/pages/model` failed `RunPage.test.tsx`, a file it did not touch (5 s). Each file passed
  alone and both directories passed on rerun; the report names the same effect.
- **RV-11 (Info), no browser check.** The label above the search field, the toast, the readiness
  rows, the alert ring and the Documents step were checked in jsdom only (the report says so).
- **RV-12 (Info), AGENTS.md steps.** The report records no VERIFICATION.md fidelity entry and no
  confidence-review or rewrite-tournament run; the brief's Checks list does not ask for them, so the
  lead's later steps own them.

## Checks

All from the worktree with `PATH=$HOME/.local/bin:$PATH`, each under `timeout 300`. Logs are in the
reviewer's scratchpad `rev/`.

| Command | Exit | Result |
| :--- | ---: | :--- |
| `npm --prefix web run lint` | 0 | eslint, 0 warnings |
| `npm --prefix web run format:check` | 0 | prettier clean |
| `npm --prefix web run typecheck` | 0 | tsc clean |
| `npx vitest run src/pages/library` (first run) | 1 | 872 of 873; one 5 s timeout, RV-10 |
| `npx vitest run src/pages/library/Module.test.tsx` | 0 | 103 of 103; the timed-out test took 803 ms |
| `npx vitest run src/pages/library` (rerun) | 0 | 27 files, 873 tests |
| `npx vitest run src/pages/run` | 0 | 9 files, 237 tests |
| `npx vitest run src/pages/model` (first run) | 1 | 688 of 689; `RunPage.test.tsx` 5 s timeout |
| `npx vitest run src/pages/model/parts/RunPage.test.tsx` | 0 | 11 of 11 |
| `npx vitest run src/pages/model` (rerun) | 0 | 16 files, 689 tests |
| `npx vitest run src/pages/Kit src/pages/worked-example src/shell` and the six top-level `src/*.test.ts(x)` | 0 | 15 files, 180 tests (Kit, Kit7b to Kit7g, shell, App, ConnectedLoadBoundary, data, motion, react-aria-style, route) |
| `npx vitest run src/pages/signal` | 0 | 34 files, 630 tests |
| `npx vitest run src/pages/connected/report/Changes` (extra: `ChangeCard` is shared) | 0 | 2 files, 22 tests |
| `node --test scripts/fixture-data.test.mjs` (from `web/`) | 0 | 12 of 12 |
| New and edited tests against base production code and fixtures (temporary worktree, removed) | 1, expected | 29 failures in 10 files |

`tools/quality_gate.py` was not run: no Python changed.

Not verified: no browser, screenshot or `npm run build` / `file-check` run, so the label above the
search field, the toast position, the readiness rows, the alert ring and the Documents step are
unseen, and the fixture build was not exercised; the full vitest suite, the slow tests and the rest of
`src/pages/connected` were not run; the chunk's file list was not available to this review, so the
reasons for leaving J6-007, S3-036, S4-003 and S5-018 open and for leaving `Context.tsx` and
`Start.tsx` (S6-022) alone rest on the report's statement that those files are outside the chunk
(J6-007's `RunFrame.tsx` is confirmed as repair-3's in `tasks.md`); `Not verified` items in
`batch-b.md` stand; no VERIFICATION.md entry, confidence-review or rewrite-tournament was checked.
