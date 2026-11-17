# T02 review, round 2 (J1-001, R1-003): CP-MODEL accepted in a module list; Teams module total

Reviewer: fresh agent, did not write the change. Worktree `.claude/worktrees/agent-a8133f4ec56fbb293`,
base d8d3d634, round 1 a3e2dcb0, round 2 4d881a3. No code file edited; scratch scripts live in the
session scratchpad. Written 2026-11-17.

## Verdict: CHANGES NEEDED

J1-001 is repaired and stays repaired, round 2 touches only what the lead allowed, there is one
definition of the forecast code, and no test weakened. But R1-003 is only partly fixed: on two of the
six presets that hold the forecast (relative_value, portfolio_decision) the Teams module total is now
one short, where round 1's total happened to be right (finding 1, Medium). The cause is that an
explicit list is counted as listed, while the launcher runs the list plus the producers it pulls in.
The ruling L6 prescribed "leave the forecast code out"; the implementer did exactly that. The gap is in
what that rule assumes, so the lead may prefer to rule on it; as the code stands, the figure on those
two pathways is wrong.

## Re-run results

| Check | Command | Result |
| :--- | :--- | :--- |
| Target tests | `timeout 300 uv run pytest -q tests/test_inbox_teams.py tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_start_forecast_pathways.py` | exit 0, 293 passed (30 s; no load timeout) |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, "0 finding(s) in 5 changed file(s), 133 line(s) in scope" |
| Probe J1-001 | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node docs/audit/2026-11-16-final/output/3-journeys/J1/probes/j1-001-leave-out-refused-at-submit.cjs` | exit 0: `review sheet shows: Left out: Legal & covenants; modules Modules (13)`; `url after confirming: http://127.0.0.1:8761/run/20261117-094310-01; alerts: ["stopped: checker"]` (J1-002, not this task); `Advanced, one module unticked: url http://127.0.0.1:8761/run/20261117-094320-01; alerts []` |
| New Teams test fails on the old formula | scratch pytest plugin putting the a3e2dcb0 `progress` body back (`len(record.modules) or len(states)`) | `-k progress`: 1 failed, `assert (13, 14) == (13, 13)`; 1 passed |
| Drift test fails when it should | scratch plugin mutations, test run unchanged | `runs.FORECAST_CODE = "CP-FORECAST"`: fails; `cpos_launch.NOT_ANALYTICAL` without CP-MODEL: fails; presets with CP-MODEL renamed: fails; `known_module` that accepts anything: the three `unknown module` tests and five hostile cases fail |

## Round 2 diff against the grant

`git diff a3e2dcb0 4d881a3 --stat`: `teams.py` (3 added, 2 removed lines), `tests/test_inbox_teams.py` (+15),
`tests/test_run_start_scheduler.py` (+12), the report. Whole change since base: the same plus `runs.py`,
`scheduler.py`; `git diff d8d3d634 4d881a3 -- tests` removes no line (only additions), no expected value
edited, nothing skipped. `api.ts`, `StartRun.tsx`, `web/`, `cpos_launch.py`, the probes and the two earlier
review files are untouched. `teams.py` changed in the import line (`FORECAST_CODE` added to the existing
`runs` import) and `progress`; nothing else. The only `record.modules` read in `teams.py` is line 457, and
`progress` is called from `_run_card` (started, finished and stopped cards) and `Day` (the day digest, line
794); all four now read the new total. So the cards and digest are consistent with each other; the question
is whether the total is right (finding 1).

## One definition

`grep -rn CP-MODEL src/deploy_workflow/inbox/*.py`: `runs.py:32` (the definition) and a docstring mention at
`runs.py:247`. `scheduler.py` holds no literal and reads the name through `runs.known_module` (line 322);
`teams.py` imports `FORECAST_CODE` from `runs` (line 57); `activity.py` uses `cpos_launch.NOT_ANALYTICAL`
for another job and holds no literal. Outside the inbox package no module defines it either (the other hits
are the launcher's inline literals and unrelated delivery code). One definition, no second literal.

## Can `progress` give a wrong count

`total = listed or len(states)` with `listed` the non-forecast entries of `record.modules`; `done` is capped
by `min(..., total)`. Run through the real function (credit_snapshot unless stated, accepted events written
for the modules the launcher runs):

| Record | Result | Right? |
| :--- | :--- | :--- |
| No list, all 14 accepted / none accepted | (14, 14) / (0, 14) | yes |
| Preset list with CP-MODEL, all accepted | (14, 14) | yes |
| List without CP-MODEL, CP-4 left out | (13, 13) | yes |
| Leave-out list with CP-MODEL (the page's own), CP-4 left out | (13, 13) | yes |
| Same on relative_value, CP-5 left out; launcher runs 11 | (10, 10) | **no, one short** |
| Same on portfolio_decision, CP-6 left out; launcher runs 8 | (7, 7) | **no, one short** |
| `CP-MODEL` alone, CP-0 and CP-1 accepted | (2, 14) | **no** (runs 2 modules) |
| `CP-0 CP-1 CP-1 CP-MODEL`, CP-0 and CP-1 accepted | (2, 3) | no (runs 2) |
| `CP-0 CP-MODEL CP-MODEL`, CP-0 accepted | (1, 1) | yes |
| Unknown pathway, `[]` or `[CP-MODEL]` | (0, 0) | total 0 (hand-edited record; was already so for `[]`) |

`done > total` cannot happen (the `min`). Total 0 arises only for a pathway the plan does not know. The
launcher's plan comes from `deploy_vii.registry.plan`, the same function `activity.module_states` uses.

## Findings

1. **Medium, `src/deploy_workflow/inbox/teams.py:457`.** R1-003 is not fixed for relative_value and
   portfolio_decision. For those presets `plan()` adds `CP-1A` to the run although it is not in the preset
   list (`activity.module_states("relative_value", [])` has 12 rows against 11 preset analytical codes;
   `portfolio_decision` 9 against 8). An explicit list therefore holds one module fewer than the run
   executes. Measured: relative_value with CP-5 left out, the launcher's 11 modules all accepted:
   `progress` = (10, 10), so the finished card reads "10/10 modules" while the run page reads 11 of 11, the
   started card "10 modules", the stopped card's bar and the day digest likewise one short. At a3e2dcb0
   the total was 11 (the CP-MODEL entry stood in for the pulled-in `CP-1A`), so on these two pathways round
   2 moves the figure from right to one low while moving the other four forecast presets (credit_snapshot,
   earnings_update, covenant_refinancing, deep_credit_assessment, where list and plan agree) from one high
   to right. Reachable through the page: the preset list on those pathways with any one module unticked
   (the plan lists, `plan((*requested, "CP-MODEL"))`, give launcher runs 11 for relative_value and 8 or 9
   for portfolio_decision against 10 and 7 listed). Before T02 such a run could not start. Suggested
   (within `progress`): count the modules the launcher would run, e.g. the number of `plan()` entries for
   the listed analytical codes plus CP-MODEL minus CP-MODEL itself (`deploy_vii.registry.plan`, which
   `activity` already imports), or any count that does not depend on the list holding every producer. This
   also repairs findings 2 and 3 if the list is de-duplicated first. It adds an import to `teams.py`, so
   the lead has to extend ruling L6 ("`progress` only") or accept the gap.
2. **Low, `src/deploy_workflow/inbox/teams.py:457`.** A list holding only `CP-MODEL` has `listed == 0`, so
   the total falls back to every row of the preset: (2, 14) for a run that executes CP-0 and CP-1. Not
   reachable from the page (it never offers a forecast-only list; the adversarial round-1 review ran it
   through the launcher with a crafted body). It read (1, 1) at a3e2dcb0, also wrong. The T02 report lists
   this under Not verified.
3. **Low, `src/deploy_workflow/inbox/teams.py:457`.** A duplicated module counts twice (`CP-0 CP-1 CP-1
   CP-MODEL` gives total 3 for two modules). Crafted body only and the same as `len(record.modules)` was
   before; `len({*record.modules} - {FORECAST_CODE})` would fix it.
4. **Low, `tests/test_inbox_teams.py:365`.** The new test uses credit_snapshot only, a preset where the
   list and the launcher's plan agree, so it cannot see finding 1. A second case on relative_value or
   portfolio_decision (list = preset minus one module, expected = the 11 or 8 the launcher runs, written as
   a literal) would have caught it. The test itself is sound: expected `(13, 13)` and `len == 14` are
   literals, it fails on the old formula (shown above) and the existing
   `test_progress_counts_accepted_modules_of_the_run` passes unchanged.

## Checks that came out clean

- J1-001: `known_module` is `METHODS` plus the exact forecast code, read by `_check_options` and
  `Scheduler.submit`; the probe exits 0; the round-1 attack matrix (misspellings, look-alikes, non-strings,
  digest binding) was not re-run, and nothing in round 2 touches it.
- The drift test pins `FORECAST_CODE == "CP-MODEL"` (a literal in the test), membership in the launcher's
  `NOT_ANALYTICAL`, `known_module("CP-MODEL")` and every `PATHWAY_MODULES` code passing `known_module`. It
  recomputes nothing beyond membership and fails under the three mutations above. Not pinned: the launcher's
  three inline `"CP-MODEL"` literals (`cpos_launch.py:1042, 1043, 1079`; `tests/test_start_forecast_pathways.py`
  covers them by behaviour with the literal) and `FORECAST_CODE not in METHODS` (info only).
- The report's before and after claims for round 2 hold: 293 passed, gate 5 files and 133 lines, probe exit 0.

Not verified: a posted Teams card (the figures above are `teams.progress` on constructed records and event
logs; no webhook); that the page offers each single leave-out of relative_value and portfolio_decision (the
launcher's plan lists above are computed for every single leave-out, the Advanced picker was not driven on
those two pathways); a real launcher run of relative_value (the 11-module count comes from
`deploy_vii.registry.plan`, which the launcher calls at `cpos_launch.py:1079`, not from a run); the regular
(non-synthetic) service and any provider run (R4); `tests/test_run_start_page.py` (its browser launch hangs
in this sandbox); the `web/` gates (no `web/` file changed).
