# Stage 5 step 7, chunk a: fresh review

Reviewed: branch `audit/lead-batch-a` at e355ac3 against base `origin/audit/final-repairs` (ca0db16),
the brief `BATCH-BRIEF.md`, each finding's record in `register.jsonl`, and the report `batch-a.md`.
No code was changed by this review. Nothing was pushed.

## Overall: FAIL

One Medium review finding (J1-007), three Low. The code for 15 of the 16 findings is correct and every new
test fails on the base source and passes on the branch. J1-007's new sentence is right for the connected
app and wrong for the legacy run-start form, which this release keeps (R17).

Review findings: High 0, Medium 1, Low 3.

## Verdict per finding

| Finding | Outcome in batch-a.md | Verdict |
| :--- | :--- | :--- |
| B0-002 | repaired | pass. `AGENTS.md` differs from the base by that one line (`tests/known-failures.txt`); the file exists and both workflows and `docs/QUALITY-GATE.md` use that name |
| C2-019 | repaired | pass. Sentence "At most N plurals." appears only at the maximum, joined by `aria-describedby`; every `RowSpec` has a `plural`; test failed on the base |
| C3-017 | repaired | pass. `#overview` and `#evidence/record` are real routes (`tabRoute("Record")`); first run keeps one action; the added "Comparison problem:" line in `Record.tsx` is what makes the link lead somewhere for the unreadable state, so it is within the repair |
| C3-018 | repaired | pass. The paragraph, link or gap and the `PublishedSource` share one flex row; the test failed on the base |
| C3-021 | repaired | Low (RV-2): the Changes page is repaired; the Overview figure tiles in the fallback Bottom line card are not, so the finding is open in part, as the report itself says, but it is counted under "repaired" |
| C3-031 (C4-023) | repaired | pass. `moves.length > 2` means two or more alternatives; with one the sentence "Compared with the 5% move: 10%" is drawn; the three-move case keeps the select |
| C4-011 | open | pass. The 56 px value column is set in `web/src/components/chart/ComparisonChart.tsx:172`, outside the files the finding's evidence names; the Securities test pins the authored digits, so leaving it open is correct |
| C4-014 (J5-009) | closed by R14, commit left | Low (RV-3): see RV-3 |
| C4-021 | repaired in part | pass. Both gap sentences are plain and drawn in `GapPanel`; the old test that asserted "validated portfolio basis" changes only to the new reason, table assertions unchanged. The open half is real: the all-or-nothing return is in `bullet()` in `visuals/charts.tsx:444` (and `chartCells` at :426), not in `BulletChart.tsx` |
| C4-031 | repaired | pass. Loading is told from "no basis"; a failed request or a disabled provider is answered with no basis, as before; a stale answer for another folder is loading; provider props unchanged |
| C4-036 | repaired | pass. The retained T2DS.6 table keeps the handoff's row order, in a `<ul>`; only a module-written first-break ranking is sorted and drawn as an `<ol>`; the existing ranking test is unchanged and passes |
| C5-014 | repaired | pass. Titles are "register · figure"; backticks and `##` marks are stripped from registers, figures and reasons. Snake_case registers and module codes stay: they are on the Evidence page, where AGENTS.md allows them. The three existing tests changed only their way of finding a card, and still assert status, figures and the register list |
| C5-015 | closed by R16, commits left | Low (RV-3) |
| C5-016 | closed by R16, commit left | Low (RV-3) |
| C5-033 | repaired in part | Low (RV-4) on the wording of the null case; the delivery event kinds (`delivery_started`, `delivered`) are the ones `cpos.py` writes and `run_activity.py` passes on; the open half (library admission, retained against executed) is real, since `outputEntries` drops outputs of another run |
| J1-007 | repaired in part | **Medium** (RV-1) |
| C4-001 (ruling L14, two items) | repaired | pass. The Securities sentence has no "handoff"; chart gap reasons go through `readerText` (a module code becomes the module's name, a file reference still becomes "See Evidence."); `readerText` changes only codes, never a value, period or qualification |

## Review findings

### RV-1 Medium: J1-007's new fix text is wrong on the legacy run-start form

`src/deploy_workflow/run_expectations.py` (rules `portfolio-workbook-none`, `portfolio-workbook-not-chosen`)
is shared by both start pages. The legacy form (`docs/templates/context-form.html`, served by
`deploy_workflow.run_start`, kept in this release by R17 and pinned by `tests/test_run_start_page.py`)
draws the service's `fix` text (`itemRow`, line 1926) and maps both rules to its `issuer` step
(`STAGE_OF_RULE`, lines 1832-1833), so the Check shows a "Go to Issuer and dates" button. On that form the
Portfolio workbook select is inside `#st-issuer` (`#attach`, line 540) and there is no "More context" step
(its steps are Purpose, Documents, Issuer and dates, Legal, Market, Valuation, Assumptions, Start). Before
the change the sentence was right there; now it says "on the More context step" next to a button for
another step. `docs/design/2026-11-12-run-start-four-steps.md` ruling 16 also keeps group names in fix
sentences as written. No test pins the legacy rendering, which is why every test passes.

Cause: the sentence names a step, and the two pages have different steps. The finding's own
suggested change asked for "on the More context step", so the implementer followed the record, but the
record did not account for the legacy form.
Repair: name only the control, which both pages label "Portfolio workbook" (legacy `ATTACH` title,
connected `plain.ts:49`), for example "choose it as the Portfolio workbook", and keep the go-to-step
button as the way to the step; or give the text per surface. Then adjust `PORTFOLIO_FIXES` in
`tests/test_run_expectations_words.py` to the new sentence.

### RV-2 Low: C3-021 is counted as repaired but is open in part

The report's own text says the Overview figure tiles inside the fallback Bottom line card are not in this
chunk. The outcome table lists the finding under "repaired (9)". Under the brief ("leave the finding open
and say why") it belongs with "repaired in part", which would make the counts 8, 4, 1, 1, 2.

### RV-3 Low: work for findings closed by R14 and R16 is still in the diff

c0c2f16 (C4-014, year markers `size-6`, row cap `max-w-[6.5rem]`), the `aria-label` removal and the
"makes no landmark" test in 5d1e108 (C5-015), the call-table `heading` names and h5 to h4 in f1e1e53
(C5-015, C5-016) were made before the rulings reached the implementer and were left. R14 and R16 keep
"reviewed fixes already merged"; these are not merged. They are harmless to the tests, but c0c2f16 changes
the calendar's marker layout (four markers to a row, not six) with no browser check, and the `aria-label`
removal is the reason three existing ScriptChecks tests had to look cards up by heading instead of by
region. The lead decides at merge whether to drop them; if kept, the fidelity step (step 9) should cover
the calendar.

### RV-4 Low: "No delivery recorded" for an unreadable event log

`deliveryFigure` reads `run.events ?? []`. The service sends `events: null` when the run's event log cannot
be read (`react_frontend/run_activity.py` `_feed`), and `[]` when there is none. Both draw "No delivery
recorded", so an unreadable log reads as a run that never delivered, on a page that is showing a delivered
report. Missing is not zero (AGENTS.md). Draw the null case as "Delivery not available" (the pending case
already does). The wording of every Delivery line was chosen by the implementer and is disclosed as not
read by the owner.

## Claims in batch-a.md checked

| Claim | Result |
| :--- | :--- |
| Tests failed first for every repaired finding except B0-002 | true: the 11 changed or new web test files and `tests/test_run_expectations_words.py`, copied onto the base source, give 27 web failures and 4 Python failures, one or more for each finding |
| A few tests are guards that passed from the start | consistent (they pass on the base: first-run single action, sentence-only card, three-move selector, ranking list) |
| 16 ids, counts 9 / 3 / 1 / 1 / 2 | the sum is right; C3-021 is misfiled (RV-2) |
| Only the named existing tests changed | true: `LegacyVisuals.test.tsx` (limits reason), `Securities.test.tsx` (absence sentence), `ScriptChecks.test.tsx` (card lookup); no expected value other than the one the finding changes; no skip, `.only`, ignore comment or gate edit in the diff |
| Quality gate 0 findings, 2 files, 23 lines | true, reproduced |
| `tests/test_cpos_launch.py` did not finish | reproduced in 8 parts: all 955 pass |
| `tests/test_run_start_page.py` and `tests/test_context_form.py` not run | run here, see below |
| Full `src/pages src/components` vitest run, 0 | not repeated here; this review ran `src/pages/connected` in full |
| Not verified: no browser run of any changed screen | still true |

## Checks run

All from `/tmp/claude-0/-home-user-credit-os2/625821d3-887b-573e-b79d-e0aafcff3023/scratchpad/wt-batch-a`
with `PATH=$HOME/.local/bin:$PATH` (uv 0.12.5), each under `timeout 300`.

| Command | Exit | Result |
| :--- | :--- | :--- |
| `uv sync --locked` | 0 | 38 packages checked |
| `uv run pytest tests/test_context_form.py -q` | 0 | 54 passed |
| `uv run pytest tests/test_run_expectations_words.py tests/test_portfolio_workbook.py tests/test_run_start_submissions.py tests/test_context_form.py -q` (every Python test that asserts a changed Check sentence, plus the form) | 0 | 330 passed, 3 skipped |
| `uv run pytest tests/test_run_start_page.py -q -x`, default `google-chrome` | 1 | 1 failed: the first browser test timed out at 120 s; full headless Chromium hangs here even on a blank page (`timeout 60` exit 124). Environment, not the change |
| `uv run pytest tests/test_run_start_page.py -q` with a `google-chrome` wrapper on `PATH` that runs the brief's `chrome-headless-shell` | 1 | 153 passed, 3 failed: `test_no_step_scrolls_sideways_at_375px`, `test_the_run_screen_and_start_do_not_scroll_sideways_at_375px`, `test_the_start_module_rows_stack_at_375px_and_leave_the_reason_wide` (the shell cannot make a 375 px window). Same three fail on the base (`-k 375px` on a detached worktree of ca0db16: exit 1, 3 failed) |
| `uv run pytest @part_00 ... @part_07 -q`, the 955 node ids of `tests/test_cpos_launch.py` in 8 files, two streams at a time | 0 for each of the 8 | 142, 144 (1 skipped), 42, 118, 120, 129, 128, 132 passed |
| `uv run python tools/quality_gate.py --base origin/audit/final-repairs` | 0 | 0 findings, 2 changed files, 23 lines in scope |
| `npm --prefix web run lint` | 0 | eslint `--max-warnings=0` clean |
| `npm --prefix web run format:check` | 0 | prettier clean |
| `npm --prefix web run typecheck` | 0 | `tsc --noEmit` clean |
| `npx vitest run` on the 11 changed test files (`BreakPoints`, `Changes`, `MacroSensitivity`, `OverviewModules`, `PortfolioBasis`, `Record`, `ScriptChecks`, `Securities`, `RowEditor`, `EventLane`, `LegacyVisuals`) | 0 | 11 files, 153 tests passed |
| `npx vitest run src/pages/connected --exclude "**/ConnectedApp.test.tsx"` | 1 (read from the failure summary; the code was not captured separately) | 46 of 47 files passed; `ReportLibrary.design.test.tsx` had 2 timeouts (a 1 s `findBy` on "Loading this page"), run while the Python parts were using the machine |
| `npx vitest run src/pages/connected/ReportLibrary.design.test.tsx`, three more runs on the branch | 0, 1, 0 | the run that failed lost a different test each time; the same file on the base fails `filters by sector and pathway ...` (exit 1). Timing flake in both trees, not the change |
| `npx vitest run src/pages/connected/ConnectedApp.test.tsx` | 0 | 185 passed |
| New tests against the base source (copied into a detached worktree of ca0db16): `npx vitest run` on the 11 files | 1 | 27 failed, 126 passed, so the tests exercise the repairs |
| `uv run pytest tests/test_run_expectations_words.py` on the base source with the new tests | 1 | 4 failed (both portfolio rules, two tests each) |

Exit codes in the table are those of the command itself (run with its output written to a file), not of a
`tail` after it; the 11-file vitest run and `tests/test_context_form.py` were repeated to capture them.

Commands used outside the worktree: a detached worktree of `origin/audit/final-repairs` in the scratchpad
(`wt-base-review`) for the base comparisons, removed after the review.

Not verified: no browser run of any changed screen, so none of the layout claims is shown at pixel level
(the Changes page without a card, the Overview flex row, the Add-button sentence, the Delivery item, the
loading line, the calendar markers); the legacy start form's rendering of the two portfolio Checks was read
from its source, not drawn; `npx vitest run src/pages src/components` (Signal's tests) and the full Python
suite were not run, and no shared or Signal file is in the diff; `tests/test_document_key.py` was not run;
the three 375 px tests and the one `ReportLibrary.design` test fail or flake in this environment on the base
as well, so this review cannot say they would pass on the work PC; the chunk's file list was not given to
this review, so "no file outside the list" was judged against each finding's evidence paths, which every
changed file matches; `VERIFICATION.md` was not checked (not in the chunk).

## Round 2 review

Reviewer: a fresh session that wrote neither round. Reviewed `audit/lead-batch-a` at 976e96b: the commits
b4f16fd (J1-007), 0877bbd (C5-033) and 976e96b (`batch-a.md`), against the brief, README ruling R17 (the
legacy run-start form stays in this release), the round 1 review above and `batch-a.md`. No code was changed
by this review and nothing was pushed. The only file this review changes is this one.

### Overall: PASS

Review findings in round 2: High 0, Medium 0, Low 0, Info 1. RV-1 (Medium), RV-2 and RV-4 (Low) are closed.
RV-3 (work closed by R14 and R16 still in the diff) is not a round 2 item; it stays with the lead, as the
round 1 review and `batch-a.md` say.

### Verdict per item

| Item | Verdict |
| :--- | :--- |
| J1-007 / RV-1 | pass. Both fix sentences name only the control and no step: "Add the fund's workbook, in the layout of the portfolio template, and choose it as the Portfolio workbook." and "Choose it as the Portfolio workbook, or remove it." Both labels read in the source: connected `ATTACHMENTS.portfolio_workbook = "Portfolio workbook"` (`web/src/pages/connected/start/plain.ts:49`), drawn as the select's label by `SelectField` with `title={ATTACHMENTS[key]}` (`web/src/pages/connected/StartRun.tsx:939`; the file is in `web/src/pages/connected/`, not in `start/`, which `batch-a.md` does not say); legacy `ATTACH` entry `title:'Portfolio workbook'` (`docs/templates/context-form.html:902`), drawn as `<label for="f-portfolio">` by `renderAttachments` (line 2278). The legacy form keeps its step buttons ("Go to Issuer and dates" for both rules, `STAGE_OF_RULE` line 1833), so the sentence is now true beside the button on either page. The rule gates, `reason`, `severity`, `detail` and every other rule are unchanged (the diff is the two `fix` strings). The test asserts the exact text, no "step", no "More context" and, from round 1, that no rule fix names "Issuer and dates"; the two new parametrised cases fail on the pre-round-2 source and pass on the branch |
| C5-033 / RV-4 | pass. `deliveryFigure` returns "The run's event log could not be read." only for `events === null`; "No delivery recorded" is reached only for a readable log (`[]` or other events) with neither a `delivered` nor a `delivery_started` event. `Run.events` is typed `RunEvent[] | null`, not optional (`api.ts:134`), and the service always sends the key (`react_frontend/run_activity.py:336`, `_feed`), so dropping `?? []` cannot reach `undefined.find`. The pending case (run record not yet answered) is unchanged and still tested. The null test fails on the pre-round-2 source ("Unable to find an element with the text: The run's event log could not be read.") and passes now; the three readable-log cases now also assert the new sentence is absent. Nothing else in `Record.tsx` changed (8 lines in one function and its comment) |
| `batch-a.md` counts and C3-021 | pass. C3-021 moved from "repaired" to "repaired in part"; the table reads 8 repaired (B0-002, C2-019, C3-017, C3-018, C3-031, C4-031, C4-036, C5-014), 4 in part (C3-021, C4-021, C5-033, J1-007), 1 open (C4-011), 1 closed by R14 (C4-014), 2 closed by R16 (C5-015, C5-016): 16 ids, the same ids as the round 1 verdict table. The round 2 text, the check table, and the "28 lines in scope" and "330 passed, 3 skipped" figures were reproduced below |
| No file outside those named | pass. `git diff e355ac3..976e96b --name-only` lists six files: this review, `batch-a.md`, `run_expectations.py`, `test_run_expectations_words.py`, `Record.tsx`, `Record.test.tsx`. b4f16fd touches 2 files, 0877bbd 2, 976e96b 1. `docs/templates/context-form.html` was not edited, so R17's legacy form is as it was |

### Other tests or fixtures asserting the old sentences

`grep -rIn` over the whole worktree (excluding `node_modules`, `.git`, `.venv`) for "under Issuer and dates",
"More context step", "on the More context", "under Portfolio workbook", "Portfolio workbook on", "choose it
under" and the old first sentence's tail. No test or fixture asserts either old portfolio sentence. What
remains is not the service's wording:

- `web/src/pages/connected/ConnectedApp.test.tsx:2222` and `:2234`: a canned service reply whose `fix` is
  "Add the fund's workbook and choose it under Issuer and dates."; the test asserts that whatever the service
  sends is drawn, with the id `run:workbook-none`, which is no rule's id. It passes (185 tests).
- `docs/templates/context-form.html:1395, 1418` (and the patch copies under `docs/work-pc/syncs/`): the legacy
  form's own client-side rules ("choose it under Issuer and dates"). They are right for that form, which has
  an Issuer and dates group, and are not run_expectations text.
- `tests/test_portfolio_workbook.py:471-530` and `tests/test_run_start_submissions.py:272` assert the rule ids
  and outcomes, not the fix text.

### Checks run

All from `/tmp/claude-0/-home-user-credit-os2/625821d3-887b-573e-b79d-e0aafcff3023/scratchpad/wt-batch-a`
at 976e96b with `PATH=$HOME/.local/bin:$PATH` (uv 0.12.5), each under `timeout 300`, run one after another.
The exit code is the command's own: each was run with its output written to a file and its status echoed to
that file.

| Command | Exit | Result |
| :--- | :--- | :--- |
| `uv run pytest tests/test_run_expectations_words.py tests/test_portfolio_workbook.py tests/test_context_form.py tests/test_run_start_submissions.py -q` | 0 | 330 passed, 3 skipped (the three skips are "root reads any folder" twice and "case-sensitive disk" once) |
| `uv run python tools/quality_gate.py --base origin/audit/final-repairs` | 0 | 0 findings, 2 changed files, 28 lines in scope |
| `npm --prefix web run lint` | 0 | `eslint --max-warnings=0 .` clean |
| `npm --prefix web run format:check` | 0 | Prettier clean |
| `npm --prefix web run typecheck` | 0 | `tsc --noEmit` clean |
| `npx vitest run src/pages/connected/report/Record.test.tsx` (from `web/`) | 0 | 1 file, 9 tests passed |
| `npx vitest run src/pages/connected/ConnectedApp.test.tsx` (from `web/`) | 0 | 1 file, 185 tests passed |
| New tests against the pre-round-2 source (a detached worktree of 879874d with `tests/test_run_expectations_words.py` and `Record.test.tsx` taken from 976e96b; removed after): `uv run pytest tests/test_run_expectations_words.py -q` | 1 | 2 failed (`test_a_portfolio_workbook_fix_names_the_control_only` for both rules), 55 passed |
| the same detached worktree: `npx vitest run src/pages/connected/report/Record.test.tsx` | 1 | 1 failed (the null-log test), 8 passed |

The two last rows are not acceptance proof for the repair; they show that the added tests exercise it.

### Info

- I-1: the new comment in `tests/test_run_expectations_words.py:106-108` cites "README ruling R17" without a
  path; the ruling is in `docs/audit/2026-11-16-final/README.md`. It reads as a pointer to the repository
  README. No change needed for the hand-over; the lead may shorten it to "kept in this release" at merge.

Not verified: no browser run of either start page, so neither the Check text beside its button on the legacy
form nor the connected review sheet was drawn, only read from the source and exercised by string tests; the
connected page's own go-to-step button for these two Checks is `batch-a.md`'s open item and was not looked at;
the `portfolio-workbook-not-chosen` rule has no pathway gate, so whether the Portfolio workbook select is
drawn at every level and pathway where that Check can fire was not traced (the control is drawn for
Advanced, Portfolio decision, Credit snapshot and Deep credit assessment, per `StartRun.tsx`; the sentence
had the same reach before round 2); `tests/test_run_start_page.py` (browser tests) was not run in round 2
(round 1 ran it: 153 passed, 3 failed, the same 3 as on the base: 375 px windows); the rest of the Record
page and the other vitest files were not rerun (round 1 ran all of `src/pages/connected`; the only source
change since is `deliveryFigure`); the full Python suite, Signal's tests and `tests/test_cpos_launch.py`
were not run; RV-3 was not re-examined; whether the owner accepts the wording "The run's event log could not
be read." is the owner's call (the session chose it).
