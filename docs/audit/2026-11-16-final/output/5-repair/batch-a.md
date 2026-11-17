# Stage 5 step 7, chunk a: Low and Info batch

Worktree `wt-batch-a`, branch `audit/lead-batch-a`, base `origin/audit/final-repairs` (ca0db16).
Nothing pushed or merged. No paid call. Tests came first where a test could show the defect: every
repaired finding except B0-002 (a rules-file name) has at least one test that was run and seen to fail
before the repair. A few added tests were guards that passed from the start (a first run's single
Overview action, a sentence-only card, the selector with three moves, a ranking's ordered list).

## Outcome counts

| Outcome | Findings |
| :--- | :--- |
| repaired (8) | B0-002, C2-019, C3-017, C3-018, C3-031 (C4-023 merged in), C4-031, C4-036, C5-014 |
| repaired in part, the rest open (4) | C3-021, C4-021, C5-033, J1-007 |
| open (1) | C4-011 |
| closed by R14 (1) | C4-014 (J5-009 merged in); commit left in place |
| closed by R16 (2) | C5-015, C5-016; commits left in place |
| already repaired (0) | none |

That is 16 ids. The lead's two added items under C4-001 (ruling L14) are repaired; they are at the end
of the findings list and are not counted among the 16.

## Findings

### B0-002 repaired
`AGENTS.md` now names `tests/known-failures.txt` (OQ-12, owner-approved). Commit e0e5d4f.
Test: none applies (a rules-file name). Checked that the file and the two workflows use that name.

### C2-019 repaired
A disabled Add button at its maximum now has the sentence "At most 20 facilities." beside it, joined
to the button by `aria-describedby`. `rows.ts` gains a `plural` on each row spec (the nouns do not
all take an "s": facility). Files: `web/src/pages/connected/start/RowEditor.tsx`, `rows.ts`.
Test: `RowEditor.test.tsx` "says why the add button is disabled at the maximum, and only then"
(failed first). Commit 924b8c4.

### J1-007 repaired in part
Text repaired: the two Checks that said "under Issuer and dates" (a section the connected page does not
have) are in `src/deploy_workflow/run_expectations.py`, rules `portfolio-workbook-none` and
`portfolio-workbook-not-chosen`. Round 1 (b088080) named the step "More context", which is right for the
connected page and wrong for the legacy form (`docs/templates/context-form.html`, kept by R17), where
the same select is on Issuer and dates and the form draws the service's `fix` text beside a button for
its own step (review RV-1, Medium). Round 2 names only the control. Both pages label the select
"Portfolio workbook" (connected `ATTACHMENTS.portfolio_workbook` in `start/plain.ts`, drawn by
`SelectField` in `StartRun.tsx`; legacy `ATTACH` title in the form, drawn as the select's `<label>`).
The sentences are now "Add the fund's workbook, in the layout of the portfolio template, and choose it
as the Portfolio workbook." and "Choose it as the Portfolio workbook, or remove it." The form was not
edited.
Test: `tests/test_run_expectations_words.py` (exact fix text for both rules, no "step" and no "More
context" in either, and no rule fix names "Issuer and dates"); the two round-2 cases failed first.
Commits b088080 (round 1), b4f16fd (round 2).
Open: the go-to-step button. It needs `ReviewSheet.tsx` / `StartRun.tsx`, not in this chunk's list.
`web/src/pages/connected/ConnectedApp.test.tsx` still carries "Issuer and dates" in a canned service
reply (lines 2222, 2234); it is a fixture string, not asserted wording of the service, and was not
edited. `portfolio-workbook-false` ("Add the portfolio workbook and choose it.") names no location; its
text is pinned by `WORDS` in the same test file and was left.

### C3-017 repaired
The sentence-only Changes states (missing comparison, not produced, not compared, unreadable) now carry
"Open the Overview" (`#overview`) and "Review comparison evidence" (`#evidence/record`, where the
service's comparison note is drawn). The first-run state keeps its single Overview action. The Record
tab did not draw a comparison `problem`, so the link would have led nowhere for the unreadable state:
`Record.tsx` now draws it as "Comparison problem:" beside the existing "Comparison note:".
Files: `report/Changes.tsx`, `report/Record.tsx`. Tests: `Changes.test.tsx` (three states, first run),
`Record.test.tsx` (new file). Commit 3585d85 (with C3-021).

### C3-018 repaired
Each Bottom line by module row draws the paragraph (or the Evidence link, or the gap panel) and its
trace control in one flex row, as `FindingParagraph` does. File: `report/OverviewModules.tsx`.
Test: `report/OverviewModules.test.tsx` (new; failed first). Commit 602adb3.
Noticed, not changed (module-written or C4 wording): the row's gap reason still says "handoff".

### C3-021 repaired in part (Changes page done; Overview figure tiles open, not in this chunk)
When the comparison has rows the section is no longer a card: the heading, the Cards/Table switch and
the change cards stand on the page; a sentence-only state keeps its card. File: `report/Changes.tsx`.
Tests: `Changes.test.tsx` "lets the change cards stand on the page" and "keeps a sentence-only state in
its card". Open: the Overview figure tiles inside the fallback Bottom line card (HeadlineFigures /
ReportContent, not in the list); counted under "repaired in part" since round 2 (review RV-2).
Commit 3585d85.

### C3-031 repaired (C4-023 merged in)
`FxShocks` draws the "Compare with the 5% move" select only when there are two or more alternatives; with
one it prints "Compared with the 5% move: 10%". File: `report/MacroSensitivity.tsx`. Tests:
`MacroSensitivity.test.tsx` (two moves: no select; three moves: select with 10% and 15%). Downside's
selectors have two options each and were not touched. Commit 58541d0.

### C4-011 open
The yield label wraps because `ComparisonChart` sets a 56 px value column (widened only when a text is
longer than 12 characters); widening it or setting no-wrap is in `web/src/components/chart/ComparisonChart.tsx`,
not in this chunk's list. Drawing the module's rounded text from `Securities.tsx` instead would change
what `Securities.test.tsx` "shows the paired observed quote with all authored digits" requires (the
chart table cell is "7.005000%"; `ComparisonChart` also throws unless table cells equal the panel
texts) and would drop the qualifier "rounded". No change made.

### C4-014 closed by R14 (J5-009 merged)
Per the lead's message (owner ruling R14). Already committed before the message (c0c2f16: year markers
`size-6`, row cap `max-w-[6.5rem]`, class-level test in `EventLane.test.tsx`); the commit is left in place.
No browser measurement was made; the lead may drop the commit.

### C4-021 repaired in part
An undrawable chart on a module page is now the hatched gap panel plus the source table, with plain
reasons: portfolio limits: "The portfolio limits could not be checked against the mandate for this run.";
other charts: "The chart is not drawn because its figures are not on one comparable scale." The
"Source table available ... report ... basis" sentences are gone. Files: `visuals/index.tsx`.
Tests: `LegacyVisuals.test.tsx` (the existing "keeps portfolio limits as records..." test asserted the
defective sentence "validated portfolio basis"; it now asserts the new reason and the gap panel, same
table assertions). Commit f7385e3 (with C4-031).
Open: "one covenant row with no threshold removes the bullet chart for every test". The all-or-nothing
check is in `bullet()` in `visuals/charts.tsx` (not in this chunk), so a `BulletChart.tsx` change alone
would have no effect; `BulletChart.tsx` was not changed.

### C4-031 repaired
`PortfolioBasisProvider` now tells loading from "no basis": `usePortfolioBasisLoading()` is true from the
request until it answers (a stale answer for another folder counts as loading; a failed request counts as
answered with no basis, as before). While loading, a limits chart draws its title, source link and
"Loading the portfolio limits." (`role="status"`), no gap claim and no table. The provider's props are
unchanged, so `ReportLibrary.tsx` was not touched. Files: `report/PortfolioBasis.tsx`, `visuals/index.tsx`.
Tests: `report/PortfolioBasis.test.tsx` (new: loading then answered-with-no-basis; not enabled).
Commit f7385e3.

### C4-036 repaired
The retained T2DS.6 break points table keeps the handoff's row order and is a `<ul>`; only a table the
module wrote as a first-break ranking is ordered by required decline and drawn as an `<ol>`
(`breakPointView` returns `ranked`). File: `report/BreakPoints.tsx`. Tests: `BreakPoints.test.tsx`
(B1, B2, B3 stay in order on the k = 0.05 basis, chart and table; ranking stays an ordered list);
the existing ranking test is unchanged. Commit c21718f.

### C5-014 repaired
A script-check card is headed by its register and the figure checked ("T4.10 · columns",
"T4C.4 · Headroom: all", or the register alone when the figure is "all"); backticks and `###` heading
marks are stripped from registers and reasons. Snake_case register names and module codes are stored
identifiers on the Evidence page and were left. File: `report/ScriptChecks.tsx`. Tests:
`ScriptChecks.test.tsx` (titles; no markdown marks). Existing tests that located a card by its
region name ("Net debt: disagreed", "2 registers: not checked") now locate it by its heading
(`cardOf`) because the card is no longer a named region; no expected value changed otherwise. Commit 5d1e108.

### C5-015 closed by R16
Per the lead's message (owner ruling R16). Already committed: ScriptChecks cards lost their
`aria-label` (5d1e108), and Record's call tables are named per module via `heading` (f1e1e53). Both left
in place; the ScriptChecks card title and markdown changes belong to C5-014.

### C5-016 closed by R16
Per the lead's message. Already committed in f1e1e53 (Record headings h5 to h4); left in place.

### C5-033 repaired in part
Done in `report/Record.tsx`: a "Delivery" item in the run totals from the run record's events ("Report
delivered <time>", "Report delivery started <time>; not finished", "No delivery recorded", and loading or
unavailable while the record is pending); the Started/Accepted times table is named "Started and
accepted". Tests: `Record.test.tsx` (delivered, started only, never started, pending). Commit f1e1e53.
Round 2 (review RV-4): a run whose event log could not be read (`events: null`, which the service sends
when the log is unreadable; `[]` means a log without a delivery) drew "No delivery recorded", so missing
read as zero. `deliveryFigure` now returns "The run's event log could not be read." for `null` and keeps
"No delivery recorded" for a log that holds no delivery event. Tests: `Record.test.tsx` gains "says the
event log could not be read, not that no delivery was recorded, when it is null" (failed first) and the
"never started" and other log cases now also assert that sentence is absent. Commit 0877bbd.
Open: library admission and retained-versus-executed. Neither is in the run record the page receives,
and `outputEntries` drops outputs whose `run` differs from the report's, so Record cannot show a retained
output. That needs service data (a source change outside this chunk).

### C4-001 (lead's added items, ruling L14) repaired
1. `report/Securities.tsx`: "The handoff does not supply a pair of comparable last trades." is now "No
   pair of comparable last trades is supplied for this run." Test: `Securities.test.tsx` (new test that the
   sentence is drawn as a note and no "handoff" word is on the page). The existing absence assertion in
   "draws the price chart from a market basis..." was changed to the new sentence so it still asserts
   absence.
2. `visuals/index.tsx`: chart gap reasons on module pages pass through `readerText` (imported from
   `../publishedReport`, where Forecast takes it), with "See Evidence." kept for a reason that holds a file
   reference when the source link exists. Forecast.tsx was not edited, and it does not yet import
   `readerText` in this worktree's base, so the import is from the shared module itself. Test:
   `LegacyVisuals.test.tsx` "draws a chart gap reason in the reader's words" (module codes in two forms
   become the module's name). Commit dfb5b7b.
The rest of C4-001 (Forecast, Downside, Calendar, RunCharts, `cpos_forecast.py`) is not in this chunk.

## Checks (worktree `wt-batch-a`, HEAD 15f482b plus this report)

| Check | Exit |
| :--- | :--- |
| `npm --prefix web run lint` | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `npx vitest run src/pages src/components` (167 files, 3,886 tests, Signal's included) | 0 |
| `uv run python tools/quality_gate.py --base origin/audit/final-repairs` | 0 (0 findings, 2 changed files, 23 lines in scope) |
| `uv run pytest tests/test_run_expectations_words.py tests/test_portfolio_workbook.py -q` | 0 (107 passed) |
| `uv run pytest tests/test_cpos_launch.py tests/test_document_key.py -q -x` | 124 (cut off by `timeout 300` at 43 percent; every test up to there passed or skipped) |

An earlier vitest run that took `src/pages/signal` together with the connected files, while the pytest
run above was also using the machine, showed six failures in `src/pages/signal/share.test.tsx` (a first
test timed out at 5 s, the rest followed). That file passes alone (12 tests) and in the full run above.
No Signal or shared code was changed.

## Round 2 (Sonnet 5.5): J1-007, C5-033, counts

Repairs the review's Medium (RV-1) and Lows RV-2 and RV-4; RV-3 (work closed by R14 and R16) is left for the
lead, as instructed.

| Item | Files | Test | Commit |
| :--- | :--- | :--- | :--- |
| J1-007 / RV-1 | `src/deploy_workflow/run_expectations.py` | `tests/test_run_expectations_words.py` (`PORTFOLIO_FIXES`, `test_a_portfolio_workbook_fix_names_the_control_only`; the old sentences were asserted only there) | b4f16fd |
| C5-033 / RV-4 | `web/src/pages/connected/report/Record.tsx` | `web/src/pages/connected/report/Record.test.tsx` | 0877bbd |
| C3-021 / RV-2 | this report (counts: 8 repaired, 4 in part, 1 open, 1 R14, 2 R16 = 16) | none applies | the commit holding this report |

`docs/templates/context-form.html` was not edited. `web/src/pages/connected/ConnectedApp.test.tsx` lines
2222 and 2234 still carry "Issuer and dates" in a canned service reply; it is not asserted wording and was
not edited.

| Round 2 check | Exit |
| :--- | :--- |
| `uv run pytest tests/test_run_expectations_words.py tests/test_portfolio_workbook.py tests/test_context_form.py tests/test_run_start_submissions.py -q` | 0 (330 passed, 3 skipped) |
| `uv run python tools/quality_gate.py --base origin/audit/final-repairs` | 0 (0 findings, 2 changed files, 28 lines in scope) |
| `npm --prefix web run lint` | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `npx vitest run src/pages/connected/report/Record.test.tsx` (9 tests) | 0 |
| `npx vitest run src/pages/connected/ConnectedApp.test.tsx src/pages/connected/report` (25 files, 485 tests) | 0 |

Each ran under `timeout 300` with its exit code taken from the command itself. The two new Python cases and
the new vitest case each failed before their repair. `tests/test_run_start_page.py` (browser tests) was not
run in round 2; the review ran it (153 passed, 3 failed on the base too: the 375 px window tests).

Not verified: the legacy start form's rendering of the two reworded Checks was read from its source and
not drawn (round 2); no browser run of any changed screen (no probe from `docs/audit/.../probes/` was re-run
against `proof.serve`), so layout claims are untested at pixel level: the Changes page without a card,
the flex row on Overview, the Add-button sentence beside its button, the Delivery item in the Record
totals, the single-line yield label (open) and the 24 px markers (closed by R14); the
`tests/test_cpos_launch.py` and `tests/test_document_key.py` runs did not finish in round 1 (the review
ran `test_cpos_launch.py` in parts, all passing); `tests/test_context_form.py` ran in round 2 (passed),
`tests/test_run_start_page.py` (browser) did not run in round 2; the full Python suite and the weekly job were not run; no fidelity check was recorded in
`VERIFICATION.md` for the presentation changes (that file is not in this chunk's list); the Record
"Delivery" wording (including "The run's event log could not be read.") and the "Loading the portfolio
limits." line were chosen by this session and have not been read by the owner.
