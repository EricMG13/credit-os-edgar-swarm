# T02 review, round 3 (J1-001, R1-003): CP-MODEL accepted in a module list; Teams module total is what the launcher runs

Reviewer: fresh agent, did not write the change. Worktree `.claude/worktrees/agent-a8133f4ec56fbb293`,
base d8d3d634, round 1 a3e2dcb0, round 2 4d881a3, round 3 6085a85. No code file edited; scratch scripts
and a scratch pytest plugin live in the session scratchpad. Written 2026-11-17.

## Verdict: CHANGES NEEDED

J1-001 is fixed and stays fixed. R1-003 is now right on all nine pathways for a full list, every single
leave-out, every pair I tried, and an empty list, measured against the launcher's own plan
(`Prepared.ordered`), not against `plan()` called from `progress`. `done` never exceeds `total` and the
card never raises. The change stays inside the grants. One gap remains: when the launcher adds CP-8
because an earlier run of the issuer is listed, an explicit list's total leaves CP-8 out for the whole
run, so `done` and `total` disagree with the run page and a card reads "13/13" while CP-8 is still
running or after it stopped (finding 1, Medium). It is the same one-short the earlier formulas had on
lists and it falls outside the formula ruling L6a gave, so the lead may rule it accepted; the report
discloses it only under Not verified.

## Re-run results

| Check | Command | Result |
| :--- | :--- | :--- |
| Target tests | `timeout 300 uv run pytest -q tests/test_inbox_teams.py tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_start_forecast_pathways.py tests/test_inbox_activity.py` | exit 0, 339 passed, 1 skipped ("root reads any folder"), 27 s; no load timeout |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` (run twice; real exit code taken without a pipe the second time) | exit 0, "0 finding(s) in 5 changed file(s), 199 line(s) in scope" |
| J1-001 probe | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node docs/audit/2026-11-16-final/output/3-journeys/J1/probes/j1-001-leave-out-refused-at-submit.cjs` | exit 0: `review sheet shows: Left out: Legal & covenants; modules Modules (13)`; `url after confirming: http://127.0.0.1:8761/run/20261117-095342-01; alerts: ["stopped: checker"]` (J1-002, not this task); `Advanced, one module unticked: url http://127.0.0.1:8761/run/20261117-095352-01; alerts []` |
| New tests fail on the earlier formulas | scratch pytest plugin putting a formula back into `teams.progress`, tests unchanged | round-2 formula (`listed or len(states)`): 5 failed (the two preset-leave-out cases, `CP-MODEL` alone, repeated module, unknown module), 2 passed. Plan without the `ValueError` fallback: the unknown-module test fails alone. Rows only (`len(states)`): 6 failed, 1 passed. So each test pins what it claims |

## Round 3 diff against the grants

`git diff d8d3d634 6085a85 --name-only`: `runs.py`, `scheduler.py`, `teams.py`, `tests/test_inbox_teams.py`,
`tests/test_run_start_scheduler.py`, `output/5-repair/T02.md`. Nothing under `web/`, no probe, no
`cpos_launch.py`, no `prompts/`, no calculation, nothing in Signal. `scheduler.py` is the one line at 322.
`runs.py` is `FORECAST_CODE`, `known_module` and `_check_options` (ruling L4). `teams.py`
(`git diff ... | grep '^[-+]'`): the added `from deploy_vii.registry import plan`, `FORECAST_CODE` added to
the existing `runs` import line, and the body of `progress` (451-467); nothing else (rulings L6 and L6a).
`git diff d8d3d634 6085a85 -- tests` removes no line: only additions, no expected value edited, nothing
skipped, no gate loosened.

## One definition of the forecast code

`grep -rn CP-MODEL src/deploy_workflow/inbox/ src/deploy_workflow/run_start/ react_frontend/*.py`: the one
definition `runs.py:32` and a docstring mention at `runs.py:247`. `scheduler.py` has no literal and reads
the name through `runs.known_module` (line 322); `teams.py` imports `FORECAST_CODE` from `runs`. The
launcher's own inline literals are outside T02's files, as the report says.

## R1-003 measured against the launcher, not against `plan()`

Script `probe_progress.py`: for each of the nine presets (`PATHWAY_MODULES`) it calls the launcher's
`prepare` (`cpos_launch.prepare`, the code that builds the run; context and issuer folder from
`tests/test_cpos_launch.py`) with the list the page would send, takes `Prepared.ordered` as what runs,
writes a `module_accepted` event for each, and calls `teams.progress` on a record holding the same list.
Expected is `(len(ordered), len(ordered))`.

| Case set | Cases | Mismatches |
| :--- | :--- | :--- |
| Empty list (preset), all nine pathways | 9 | 0: (14,14) credit_snapshot, (8,8) earnings_update, (12,12) relative_value, (12,12) covenant_refinancing, (13,13) distressed_restructuring, (9,9) portfolio_decision, (3,3) short_snapshot, (5,5) lite, (20,20) deep |
| Full preset list verbatim, all nine | 9 | 0 |
| Every single leave-out of every drawn module (preset less `CP-MODEL`, plus `CP-MODEL` kept, as the page sends), all nine | 94, of which 93 launched | 0 (the launcher refused `short_snapshot` less CP-L10: it fills no report section; the pathway is deactivated and the page never offers it) |
| Pairs (the sheet can leave out two or more at once): all pairs on relative_value, portfolio_decision, lite_credit_assessment, earnings_update | 125, of which 123 launched (the 2 refused are the "all but CP-5" lists on relative_value and portfolio_decision: no report section) | 0 |

Totals that differ from the list's length, all matching the launcher: relative_value less CP-5 is 11 (list
holds 10 analytical codes, the plan adds CP-1A), portfolio_decision less CP-6 is 8, credit_snapshot less
CP-4 is 13, earnings_update less CP-1A is 7. Leaving out a producer other modules need (CP-0, CP-1, CP-2 on
credit_snapshot) leaves the total unchanged, because the plan pulls it back, as the launcher does. The
report's `(11, 11)` and `(8, 8)` literals in the tests agree with `Prepared.ordered`.

## Can `progress` fail or exceed

Script `fuzz.py` (25 odd module tuples on four pathways, including an unknown pathway, non-string
entries `5`, `None`, `[]`, `{}`, `b"CP-0"`, `nan`, a 100 000-character name, `CP-8`, `CP-OS`, `CP-MEMO`,
duplicates and `CP-MODEL` alone): 100 cases, nothing raised, `0 <= done <= total` every time. Unknown or
non-string names fall back to the pathway's rows; an unknown pathway reads `(0, 0)` or the list's plan as
before (hand-edited records only). `registry.plan` raises only `ValueError` here (`canonical`, and the
cycle check; the catalog holds no dangling requirement: 25 modules, every `required`/`optional` id exists,
every module plans alone). `Record` loading turns `modules` into a tuple (`runs.py:146`), so the whole
value is always iterable. `Day` (line 801) and `_run_card` (line 735) call `progress` for each running or
stopped record, so a raise there would drop a card or break the digest; it cannot.

## CP-8 after an earlier run (the lead's question): measured

The launcher adds CP-8 to the run when an earlier run of the issuer and pathway is listed
(`cpos_launch.py:1075-1081`: `requested = (*requested, CP-8)`, `planned = plan(...)`, `ordered` drops only
`CP-MODEL`), whatever the list is; the run page then reads its modules from the run's `workflow.json`
(`react_frontend/run_activity.py:108` `_planned`), which names CP-8. `progress` reads the rows from
`activity.module_states`, which adds a CP-8 row once CP-8 has an event (`activity.py:44`), but the list's
total from `plan(record.modules)` never holds CP-8. Run through the real function (script `probe_cp8.py`,
credit_snapshot, events written for the modules that ran; the launcher runs 13 without a prior and 14
with one for the CP-4 leave-out):

| Record | CP-8 state | Card `(done, total)` | Run page |
| :--- | :--- | :--- | :--- |
| Preset (empty list) | no event yet | (14, 14) | 14 modules from the manifest (15 with CP-8) |
| Preset | running | (14, 15) | 15 |
| Preset | done | (15, 15) | 15 |
| Leave-out CP-4 list | no event yet | (13, 13) | 14 |
| Leave-out CP-4 list | **running** | **(13, 13)**: reads all done | 14, one running |
| Leave-out CP-4 list | **done** | **(13, 13)**: one short | 14, all done |

So `done` and `total` are consistent with each other (never `done > total`) but not with the run page, and
the explicit list diverges from the preset: the preset's total grows to include CP-8 as soon as it starts,
the list's never does, and `min(done, total)` hides the extra done row. A stopped card for a run that
stopped inside CP-8 reads full.

## Findings

1. **Medium, `src/deploy_workflow/inbox/teams.py:459-465`.** With an explicit module list and an earlier
   run of the issuer listed, the total omits CP-8 and `done` is clamped, so the card reads "13/13 modules"
   while CP-8 runs or after it stops, and "13/13" at the end of a run whose page shows 14 modules; the same
   run on the preset reads (14, 15) then (15, 15). The comment "What the launcher runs for the list" and
   the report's "the total is now what the launcher runs" are not true then. Reachable through the page
   after J1-001: a leave-out run on any pathway after an earlier run of the same issuer and pathway (the
   sheet's own text says only that a leave-out run is not used as the *earlier* run, not that it cannot
   have one). Same shortfall as the earlier formulas and as `len(record.modules)` before T02 for lists on
   non-forecast pathways, and outside the formula ruling L6a gave, so it is not a regression; the report
   lists it under Not verified. Measured fix, inside `progress` and the existing imports: count what has
   started beyond the plan, `planned = {n for n in plan(record.modules) if n != FORECAST_CODE}` and
   `total = len(planned | {code for code, state in states if state != "waiting"})`. In a scratch plugin it
   gives (13,14) with CP-8 running and (14,14) done, matches the preset's behaviour, and all seven existing
   `progress` tests pass; the left-out module stays "waiting" and is not counted. The lead may rule this
   out of scope instead; either way record it.
2. **Low, `tests/test_inbox_teams.py` (after line 437).** No test names the CP-8 case, in either direction;
   whichever way finding 1 is ruled, one literal-valued case (list less CP-4, 13 accepted plus a CP-8
   event, expected pair written out) should pin it so the behaviour is chosen, not accidental.

Nothing else. J1-001 and the rest of R1-003 are repaired.

## Checks that came out clean

- J1-001: `known_module` is `METHODS` plus the exact forecast code, read by `_check_options` and
  `Scheduler.submit`; probe exit 0; the 54 scheduler tests and the hostile-module cases (`cp-model`,
  `CP-MODEL2`, `--cap`, `CP-NOPE`) pass. Not re-run: the round-1 attack matrix; round 3 does not touch it.
- No test weakened, no expected value edited. Expected totals and accepted lists are written out in the
  tests (`(13, 13)`, `(11, 11)`, `(8, 8)`, `(2, 2)`, `(2, 2)`, `(1, 14)`, `len(modules) == 14`); the
  preset lists the tests start from come from `PATHWAY_MODULES`, an input, and `CP-1A not in modules` is
  asserted. The relative_value and portfolio_decision figures were also confirmed independently of
  `plan()` through `Prepared.ordered` (table above).
- The quality gate and strict mypy cover `progress` and the tests; one comment line the implementer
  shortened for E501 is gone.
- The report's before and after claims for round 3 hold: 339 passed, 1 skipped; gate 5 files and 199
  lines; probe exit 0.

Not verified: a posted Teams card (all figures are `teams.progress` on constructed records and event logs,
no webhook set); a real launcher run with an earlier run listed (the CP-8 rows above use `Prepared.ordered`
for runs without a prior and the launcher's code at `cpos_launch.py:1075-1081` plus synthetic CP-8 events
for the prior case, not a launched run with a prior); the run page's own row count for a leave-out run
(read from `run_activity._planned`, not rendered); that the Advanced picker offers each single leave-out
on every pathway (the lists were built from the presets, as the page does, not clicked); the regular
(non-synthetic) service and any provider run (R4); `tests/test_run_start_page.py` (browser launch hangs in
this sandbox); the `web/` gates (no `web/` file changed).
