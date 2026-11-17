# T02 review, round 4 (J1-001, R1-003): the Teams module total counts CP-8 when the run starts it

Reviewer: Opus 5.5 (claude-opus-5-5), medium effort (ruling R12). A fresh reviewer; I did not write the change.
Scope: `git diff d8d3d634 7bbb7f5`, round 4 especially (`git diff 6085a85 7bbb7f5`).

## Verdict: PASS

J1-001 stays fixed; the round-3 CP-8 finding is repaired; the two Low findings below are report wording
about cases outside the asked checks, not code defects.

## Re-run

| Check | Command | Result |
| :--- | :--- | :--- |
| Tests | `timeout 300 uv run pytest -q tests/test_inbox_teams.py tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_start_forecast_pathways.py tests/test_inbox_activity.py` | exit 0, 343 passed, 1 skipped ("root reads any folder") |
| Gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, "0 finding(s) in 5 changed file(s), 234 line(s) in scope" |
| J1-001 probe | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node .../j1-001-leave-out-refused-at-submit.cjs` | exit 0: `review sheet shows: Left out: Legal & covenants; modules Modules (13)`; leave-out run started at `/run/20261117-100628-01` (alert "stopped: checker", J1-002, not this task); Advanced, one module unticked: `/run/20261117-100637-01`, no alerts |

## Checks

- **J1-001 still fixed.** `runs.known_module` (METHODS or the one `FORECAST_CODE`) is read by `_check_options`
  and `scheduler.py:322`; unchanged in round 4; the probe passes Submit with a leave-out list.
- **CP-8 finding fixed.** `progress` now takes `planned = plan(list) less CP-MODEL` and unions the rows whose
  state is not "waiting". `run_events.progress` gives a module a state only from `module_started` /
  `module_accepted`; `activity.module_states` adds a row for a started module in `METHODS` (CP-8 is in it,
  CP-MODEL is not). So for credit_snapshot less CP-4 with an earlier run: CP-8 running (13, 14), done (14, 14),
  dropped for the cap (13, 13), matching the run page's 14 / 14 / 13 (the cap path at
  `cpos_launch.py:1015-1017, 1065-1066` plans without CP-8). The new parametrised test pins all three.
- **No inflation by a left-out, waiting or never-run module.** A left-out module never gets a start event, so
  it stays "waiting" and is not in the union; waiting rows are excluded by construction; a junk or CP-MODEL
  `module_started` is not counted (scratch probe: total unchanged at 14). The launcher refuses a listed CP-8
  (`cpos_launch.py:1044-1048`) and a non-METHODS code (`:1083`), so the plan cannot hold a code the launcher
  would silently skip, apart from the Low 2 case.
- **done never exceeds total.** In the `else` branch every "done" row is in the union, so done <= total;
  in the fallback done <= len(states); `min` is kept besides. Scratch probe over `"CP-0"`, `5`, `None`,
  `[["x"]]`, `{"CP-0": 1}`, a repeated name, `("CP-8",)`, `("",)`, `(b"CP-0",)`, `("cp-0",)`, `nan`, an
  unknown pathway and a mismatched pathway: no case with done > total.
- **progress never raises.** Same probe: nothing escaped. `plan` raises `ValueError` (unknown name) or
  `TypeError` (not iterable); both caught; confirmed `plan("")`, `plan([])`, `plan({})` return `()` and
  `plan(5)`, `plan(None)` raise `TypeError`, as the corrected report says.
- **teams.py scope.** Whole diff touches only lines 54 (`from deploy_vii.registry import plan`), 58
  (`FORECAST_CODE` on the existing `runs` import) and the body of `progress`. Round 4 changes only `progress`.
- **Report and comment true.** The comment ("the list's plan less the forecast code ... a module the log
  shows started counts") matches the code. The round-3 text is corrected in place and marked. `_load` makes
  modules a tuple (`runs.py:146`); `_cap` catches the same pair (`teams.py:442`).
- **Tests.** Expected values are literal pairs; `modules` is derived from `PATHWAY_MODULES` only as input.
  No test or expected value removed or changed (`git diff d8d3d634 7bbb7f5 -- tests/` deletes only the old
  `typing` import line, replaced with one adding `cast`).
- **Files.** `runs.py`, `scheduler.py`, `teams.py`, `tests/test_inbox_teams.py`,
  `tests/test_run_start_scheduler.py`, the report: within the register's grant (scheduler.py) and rulings L4
  (runs.py and its tests) and L6/L6a (teams.py `progress` and the import, test_inbox_teams.py).

## Findings

1. **Low, `src/deploy_workflow/inbox/teams.py:460-468` (report `T02.md`, round 4).** For a list run with an
   earlier run listed, the total is 13 until CP-8's `module_started`, while the run page (from
   `workflow.json`) shows 14 from the start; it agrees only once CP-8 starts. This is what the preset path
   does too and the asked cases (running, done, dropped) match, but the report says the CP-8 finding is
   "repaired" without stating this window; one sentence should record it.
2. **Low, `docs/audit/2026-11-16-final/output/5-repair/T02.md` (round 4, Not verified).** It says a
   hand-built list holding CP-8 counts and that what runs is "not examined"; the launcher refuses a listed
   CP-8 outright (`cpos_launch.py:1044-1048`) after Submit accepts it (CP-8 is in `METHODS`), so such a run
   never starts while its card total counts CP-8. Pre-existing (Submit's check was `METHODS` before T02) and
   display only; the report should say so instead of "not examined".

Not verified: a real launcher run with an earlier run listed (CP-8 states are `teams.progress` on
constructed event logs, the run-page figures read from round-3's measurement and `cpos_launch.prepare`, not
from a run); a posted Teams card; `tests/test_run_start_page.py`; the live service path and providers; the
`web/` gates (no `web/` change); whether the lead separately authorised round 4's change to the L6a formula
(the report records no new ruling; the task brief for this review asks for the CP-8 fix).
