# T02 adversarial review, rounds 1 to 3 (J1-001, R1-003): Submit and launch, Teams module total

Reviewer: fresh adversarial agent, did not write the change. Worktree
`.claude/worktrees/agent-a8133f4ec56fbb293`, base d8d3d634, round 1 a3e2dcb0, round 2 4d881a3, round 3
6085a85. Attacked `git diff d8d3d634 6085a85` (`runs.py`, `scheduler.py`, `teams.py`, three test files, the
report). No code file edited; scratch tests and scripts are in the session scratchpad, none in the
repository. Written 2026-11-17.

## Verdict: CHANGES NEEDED

One Medium, within T02, and it is the same class as R1-003: with an earlier run of the issuer listed, the
launcher appends CP-8, so for an explicit list the Teams total is one short of what the launcher runs and of
what the run page shows (finding 1). The report names the cause ("a record does not say that") and leaves it
open, and L6a prescribed the formula, so the lead may rule it accepted; as the code stands the figure is
wrong on a re-run with a leave-out. Everything else I tried held: Submit and the argv are unchanged since
round 1, the approval digest is still bound, `progress` cannot raise for any record shape I could build, the
call costs about 40 microseconds, and `lint-imports` keeps all three contracts.

Stage 5 step 5 limits a Medium to two returns to an implementer, and rounds 2 and 3 were those two. So if
the lead does not rule finding 1 accepted, it stays open and is listed for the owner.

## What I ran

| Check | Command | Result |
| :--- | :--- | :--- |
| Target tests | `timeout 290 uv run pytest -q -p no:cacheprovider tests/test_inbox_teams.py tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_start_forecast_pathways.py tests/test_inbox_activity.py` | 339 passed, 1 skipped (root reads any folder) |
| Quality gate | `timeout 580 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, "0 finding(s) in 5 changed file(s), 199 line(s) in scope" |
| Import contracts | `timeout 300 uv run lint-imports` | "Contracts: 3 kept, 0 broken"; `tests/test_quality_gate.py` 11 passed |
| Rounds 2 and 3 left Submit alone | `git diff a3e2dcb0 6085a85 -- src/deploy_workflow/inbox/runs.py src/deploy_workflow/inbox/scheduler.py` | 0 lines; the round 2 to 3 stat is `teams.py` (12), two test files, the report |
| Mutation of the round 3 tests | scratch pytest plugin on `teams.plan`: the list as the plan (de-duplicated) / a plan that raises `KeyError` | 4 failed, 3 passed / 7 failed: the tests are bound to the plan and to the `ValueError` catch (`-k progress`) |
| Real synthetic leave-out runs | scratch copy of the J1 Advanced flow on port 8756, root `/tmp/jr3/e2e`, two runs of one issuer with "Rates, FX & hedging" (CP-2E) unticked, to their end; service stopped, nothing left on 8756 | both `finished`; record `modules` = 14 codes with CP-MODEL; launcher `Modules:` line 13; `teams.progress` (13, 13); `react_frontend.run_activity.reply` 13 of 13 |
| Differential, every single leave-out | scratch test: real `cpos_launch.prepare` offline against `sum(m != "CP-MODEL" for m in plan(list))`, every active pathway, the preset and each single leave-out | 99 cases, all equal |
| Differential, random lists | scratch test, 250 random lists (subsets of presets, random method samples, with CP-MODEL, duplicates, shuffled) | 234 launched, 0 mismatches; 16 refused by the launcher (not examined) |

## (1) Submit and launch

Rounds 2 and 3 did not touch `runs.py` or `scheduler.py` (diff above), so the round 1 attack matrix
(`T02-review-adversarial.md`) still stands. The only argv builder is `runs.command` (`runs.py:296`, the only
`"--modules"` in `src/`, `react_frontend/`, `proof/`, `apps/`), it calls `_check_options` first, and that
uses `known_module`: `METHODS` plus the exact `CP-MODEL`. `known_module` is False for all of `--live`,
`CP-0 `, `CP-0\n`, and is True for every key of `METHODS` and for `CP-MODEL` only.

Digest binding re-checked with a scratch test on the real `Scheduler.submit` (fake launcher): approved on
`[CP-0, CP-1, CP-MODEL]`, then Submit with `[CP-0, CP-1]`, `[CP-0, CP-1, CP-MODEL, CP-MODEL]`,
`[CP-MODEL, CP-0, CP-1]`, `[]`, `[CP-MODEL]`: each "the documents or answers changed after approval", and
`[CP-0, CP-1, cp-model]`: "unknown module cp-model"; no run recorded after any of them, and the approved
list then submits unchanged with `record.modules == ("CP-0", "CP-1", "CP-MODEL")`.

Nothing other than a method code or the exact forecast code can reach the argv. `CP-8` still passes
`known_module` (it is in `METHODS`) and the launcher refuses it (carried from round 1, not T02).

## (2) The Teams count

`progress` cannot raise for a modules value a record can hold. `Record.modules` is always a tuple (`_load`
coerces with `tuple(...)`; a non-iterable makes `_load` refuse the record), so I fed `teams.progress` the
tuples a hand edit can produce, on a real layout and event log:

| `modules` | `progress` |
| :--- | :--- |
| `"CP-0"` (a string, so the characters), `[["CP-0"]]`, `[{"a":1}]`, `[1,2]`, `[None]`, `[NaN]`, `[""]`, `[true]`, `["cp-0"]` | (0, 14), no raise (falls back to the 14 rows) |
| `["CP-8"]`, `["CP-0","CP-1","CP-8"]` | (0, 2), (0, 3): plan accepts CP-8, the launcher refuses it, the run never ran, so the count is moot |
| `["CP-MEMO"]`, `["CP-OS"]`, aliases `["CP-PARSE"]`, `["CP-2C"]` | (0, 8), (0, 1), (0, 1), (0, 2) |
| `{"CP-0":1,"CP-1":2}` (keys), `CP-MODEL` three times | (0, 2), (0, 2) |
| 40, 10,000 and 1,000,000 copies of `CP-0` | (0, 1) in 0.083 s for the million; a million junk names: (0, 14) in under a millisecond (fails on the first name) |
| unknown pathway (`nope`, `""`) with `[]` / `["CP-0","CP-1"]` / `["CP-MODEL"]` | (0, 0) / (0, 2) / (0, 2) |

`done > total` cannot happen (the `min`). A total of 0 arises only for an unknown pathway with no list, which
`cap_of` refuses to launch, and it was 0 before T02 (`_bar` guards a zero total). With a non-empty list the
total is never 0: even `CP-MODEL` alone plans CP-0 and CP-1. Every card path is guarded as well: `_deliver`
(`teams.py:749`) drops one card and `tick` (`teams.py:702`) keeps the poll going.

Against the launcher the total is exactly its plan less the forecast code: the 99 and 234 launcher runs above
agree, and so do the two real synthetic runs and the run page, with one exception, finding 1.

Cost: `plan` on the largest pathway (`deep_credit_assessment`, 21 modules) is 42 microseconds
(`credit_snapshot` 31, `relative_value` 25); `progress` with a 21-module list is 232 microseconds against 113
without a list. `progress` runs once per posted card and once per summary slot (`teams.py:735, 801`), never per
request, and `activity.module_states` already calls `plan` on the same path, so the first call has loaded the
cached registry.

## (3) Import contracts

`from deploy_vii.registry import plan` in `teams.py` is `deploy_workflow` importing `deploy_vii`, the allowed
direction (`.importlinter` forbids only `deploy_vii` importing `deploy_workflow` or `credit_os`). `activity.py:15`
already imports the same name, and `teams.py` already imports `deploy_vii.report_view`. `lint-imports`: 3 kept,
0 broken. No import cycle: `deploy_vii.registry` imports `deploy_vii.contracts` only.

## Findings

1. **Medium, `src/deploy_workflow/inbox/teams.py:459-463`, within T02 (R1-003's figure; needs a lead ruling
   because L6a fixed the formula).** With an earlier run of the issuer and pathway listed, the launcher
   appends CP-8 to the plan (`cpos_launch.py:1077-1078`), so an explicit list runs one module more than
   `plan(record.modules)` less the forecast code. Measured with the real `prepare` and a prior run
   (`tests/test_changes.make_run`), the real manifest, `react_frontend.run_activity.reply` and
   `teams.progress`, every launched module accepted, credit_snapshot:

   | Record | Launcher runs | Run page | Teams `progress` |
   | :--- | :--- | :--- | :--- |
   | CP-2E left out (the page's list) | 14, CP-8 last | 14 of 14 | **(13, 13)** |
   | the full preset as an explicit list | 15 | 15 of 15 | **(14, 14)** |
   | no list (a preset run) | 15 | 15 of 15 | (15, 15) |

   So a finished leave-out re-run reads "13/13 modules" on the Teams card while the run page reads 14, and the
   same pathway on a preset reads 15/15 (the preset path counts CP-8 because `module_states` adds a row for a
   module with events). The `min(done, total)` hides it: `done` counts CP-8's row but `total` does not, so a
   run with CP-8 done and one other module not done (CP-6 stopped, say) also reads 13/13, complete. Before T02
   such a run could not start on six presets, so the figure is newly reachable, like R1-003. Display only.
   The report's reason, "a record does not say that", is not quite right: `record.prior` names the earlier run
   or `none` (`submissions.issued_prior`), though the launcher also leaves CP-8 out when its first request
   would not fit the cap, so the record alone is not exact either. A count that follows the run's own events
   is: add the modules that have events and are not in the plan, e.g. `len(planned | {m for m, s in states if s
   != "waiting"})` with `planned` the plan less the forecast code (CP-8 then counts once it starts, as it
   already does on the preset path). No test pins the case; one with `make_run`-style prior or just a
   `module_accepted` event for CP-8 on a leave-out list would.
2. **Low, `src/deploy_workflow/inbox/teams.py:459-460` and `T02.md` (round 3), within T02.** Comment and
   report say the total "is what the launcher runs", which finding 1 contradicts. The report also says
   `plan` raised `ValueError` for `5` and `None`: it raises `TypeError` for both and returns `()` for `""`,
   `[]` and `{}`. No effect on the code, because `progress` only calls `plan` on a non-empty tuple, and every
   tuple a record can hold (table above) raises `ValueError` or plans; the report line is inaccurate. If the
   lead keeps L6a's formula unchanged, the comment should say CP-8 is not counted.
3. **Low (Info), `src/deploy_workflow/inbox/activity.py:42`, pre-existing, not T02, hostile input (R3 parks
   it).** A hand-edited record whose `pathway` is a list or dict makes `PATHWAY_MODULES.get(pathway)` raise
   `TypeError` (unhashable) in `module_states`, so `teams.progress` raises (shown for `["x"]` with `[]`, a list
   and `["CP-MODEL"]`). Contained by `_deliver` and `tick`, and `cap_of`, `_pathway` and the scheduler hit the
   same value first; it was the same before T02.
4. **Info, carried from the first adversarial read, not T02.** `CP-8` passes `known_module` and is refused at
   launch; registry aliases (`CP-PARSE`, `CP-2C`) pass the summary but not Submit; `CP-MODEL` is accepted for
   the lite pathway that holds no forecast. No round 2 or 3 change touches any of these.

No test's expected value was edited and none was skipped or weakened: `git diff d8d3d634 6085a85 -- tests`
adds 117 lines and removes none, and the expected totals (13, 11, 8, 2, 14) are literals. No file outside the
rulings was touched (`runs.py`, `scheduler.py`, `teams.py` import and `progress`, tests, the report); `api.ts`,
`StartRun.tsx`, `web/`, the launcher and the probes are unchanged.

Not verified: a real posted Teams card (every figure is `teams.progress` on constructed or synthetic-run
records, no webhook set); a launcher run with an earlier run (the synthetic proof service never finds one:
its sheet says "An earlier run exists but could not be used for comparison", so finding 1 is shown with the
real `prepare`, manifest and run-page code on a hand-built prior run and event log, not a service run);
any live or provider run (R4); the J1 probe itself on port 8761 (I ran my own copy of its Advanced flow on
8756 and did not rerun the probe); the 16 random lists the launcher refused; `tests/test_run_start_page.py`
(its browser launch hangs in this sandbox, as the report says); the `web/` gates (no `web/` file changed).
