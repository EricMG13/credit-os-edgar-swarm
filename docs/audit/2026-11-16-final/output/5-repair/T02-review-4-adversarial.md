# T02 adversarial review, round 4 (J1-001, R1-003): Teams module total with CP-8

Reviewer: fresh adversarial agent, did not write the change. Model: Claude Opus 5.5 (claude-opus-5-5), medium effort (ruling R12).
Worktree `.claude/worktrees/agent-a8133f4ec56fbb293`, base d8d3d634, rounds a3e2dcb0, 4d881a3, 6085a85, 7bbb7f5.
Attacked `git diff d8d3d634 7bbb7f5`, round 4 (`progress` in `src/deploy_workflow/inbox/teams.py:451-469`) especially.
No code file edited; the scratch script is in the session scratchpad, none in the repository; no service started.
Written 2026-11-17.

## Verdict: PASS

The round-4 total (the list's plan less CP-MODEL, union every row whose state is not "waiting") cannot raise,
cannot fall below done, is never 0 for a run that could launch, and equals what the launcher runs for every
single leave-out of every pathway, with and without CP-8. The only gaps found are display timing (CP-8 counted
only once it starts) and hand-edited logs; both Low, and the first predates T02 on the preset path.

## What I ran

| Check | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q -p no:cacheprovider tests/test_inbox_teams.py tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_activity.py tests/test_react_run_activity.py` | 253 passed, 1 skipped (root reads any folder) |
| `timeout 590 uv run python tools/quality_gate.py --base d8d3d634` | "0 finding(s) in 5 changed file(s), 234 line(s) in scope" |
| `git diff --stat a3e2dcb0 7bbb7f5 -- runs.py scheduler.py` | empty: rounds 2 to 4 left Submit and the argv alone |
| `"--modules"` builders in `src`, `react_frontend`, `proof`, `apps` | only `runs.py:296`, after `_check_options` (`runs.py:282`), which uses `known_module` |
| Exhaustive differential (scratch): every pathway, every single leave-out, CP-8 run or not, all modules accepted | 0 mismatches against `len(plan(list) less CP-MODEL) + CP-8` |
| `METHODS` keys that `registry.canonical` maps elsewhere | none, so the plan's names and the event names agree |

## Event-stream attacks (credit_snapshot, CP-4 left out, the 13 planned modules accepted)

| Log addition | `progress` | Note |
| :--- | :--- | :--- |
| none | (13, 13) | |
| `module_started` CP-8, then `delivery_started`, `delivered` (CP-8 not produced) | (13, 14) | CP-8 "stopped"; the run page shows the same row (manifest holds CP-8) |
| CP-8 started and accepted / accepted without a start | (14, 14) / (14, 14) | |
| unknown `CP-ZZ`, `CP-OS`, `CP-MEMO`, `Report`, `CP-MODEL`, no `module` field, `module` an int or a list | (13, 13) | no row in `module_states` (not in `METHODS`, or filtered as `NOT_ANALYTICAL`), so not counted |
| left-out CP-4 started (hand edit) / started and accepted | (13, 14) / (14, 14) | finding 2 |
| a module accepted twice; a relaunch restarting CP-0 | (13, 13); (12, 13) | |
| unparsable earlier line, 100,000-deep nesting, non-object lines, empty log | (0, 13) | `read_events` turns `RecursionError` into `ValueError`; caught |

Other records: `modules` `None`, `5`, `"CP-0"`, `("CP-0", None)`, `("CP-0", {...})`, `(nan,)` all give (0, 14) without
raising; `("CP-MODEL",)` with no events (0, 2); `("CP-0", "CP-8")` (0, 2) (Submit accepts CP-8, the launcher refuses it:
carried from round 1, not T02); unknown pathway with no list (0, 0), which `cap_of` refuses to launch, as before T02.

Done cannot exceed total: every "done" row is a non-waiting row and so in the union; the fallback total is the
row count. `min` stays as a guard.

## Consistency with the run page

`react_frontend/run_activity.py` (`_planned`, lines 107-115) lists the codes of `workflow.json` `instructions`,
which `cpos_launch._prepare` writes from `texts`, i.e. `ordered`, CP-8 included when a prior run is used
(`cpos_launch.py:1077-1080, 1167-1170`). Once a run has finished, or has started CP-8, the card total equals
the run page's row count in every case above except the hand-edited one.

## Findings

1. Low, `src/deploy_workflow/inbox/teams.py:460-468` (within T02 for explicit lists; the same gap predates T02 on
   the preset path, where `len(states)` also lacks CP-8 until it starts). With an earlier run listed, CP-8 is in
   `workflow.json` from launch, but the card counts it only from its first event. So the started card
   (`teams.py:739-740`, posted before CP-8 can start) says "13 modules" where the run page shows 14 rows, a run
   stopped before CP-8 reads e.g. 5 of 13 against the page's 14, and the day summary's total for a running run
   moves from 13 to 14 mid-run. The round-4 report says "the record cannot tell which happened"; the record
   cannot, but the run folder's `workflow.json` can, and the run page already reads it. Display only; reading the
   manifest would exceed the L6/L6a scope, so it is for the lead to rule on or list.
2. Low, `src/deploy_workflow/inbox/teams.py:468` (within T02, hand-edit only). A module the plan does not hold but
   the preset lists (a left-out module) counts toward the total once a hand-edited log shows it started; the run
   page, reading the manifest, does not show it. The launcher never writes such an event, so no change is needed.

No High or Medium finding.
