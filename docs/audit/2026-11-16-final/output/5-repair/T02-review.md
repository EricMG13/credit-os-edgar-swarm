# T02 review (J1-001): CP-MODEL accepted in a submitted module list

Reviewer: fresh agent, did not write the change. Worktree `.claude/worktrees/agent-a8133f4ec56fbb293`,
commit a3e2dcb0 on base d8d3d634. No code file edited.

## Verdict: PASS (T02 as scoped), with one Medium new observation that needs a lead decision

The change fixes the cause of J1-001, uses the launcher's own rule, refuses every case the existing
tests cover, weakens no test and touches nothing outside T02's files. One display figure
(`teams.py:457`, Teams cards) now reads one high for an explicit module list on a pathway whose
preset publishes the forecast; the fix is in a file outside T02's files and outside ruling L4, so it
is routed, not held against the diff (finding 1).

## Re-run results

| Check | Command | Result |
| :--- | :--- | :--- |
| Target tests | `timeout 300 uv run pytest -q tests/test_run_start_scheduler.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_start_forecast_pathways.py tests/test_inbox_teams.py` | exit 0, 291 passed |
| Also | `tests/test_run_start_scheduler.py tests/test_inbox_activity.py tests/test_react_run_activity.py` | 101 passed, 1 skipped (root reads any folder) |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, "0 finding(s) in 3 changed file(s), 95 line(s) in scope" |
| Probe J1-001 | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node .../j1-001-leave-out-refused-at-submit.cjs` (web/dist built 09:01, after the base; no `web/` file in the diff) | exit 0: `review sheet shows: Left out: Legal & covenants; modules Modules (13)`; `url after confirming: .../run/20261117-092826-01; alerts: ["stopped: checker"]`; `Advanced, one module unticked: url .../run/20261117-092836-01; alerts []` |
| New tests fail on the base | the new tests run against a copy of `src/` with base `runs.py` and `scheduler.py` (layout kept so `ROOT` resolves) | `test_a_list_holding_the_forecast_code_is_accepted_and_starts_a_run` and `test_the_launcher_command_carries_the_forecast_code_in_the_module_list` fail; the refusal cases (`cap`, `sources`, `out`, `forecast_misspelt`, `forecast_suffix`, `CP-NOPE`) pass on base and after, as guards |
| Both checks needed | same copy, new `scheduler.py` and new `runs.py` but `_check_options` restored to `name not in METHODS` | the start test fails ("condition not met in time"; `ValueError: run ...: 'CP-MODEL' is not a module`), so the test catches a repair of the scheduler check alone |

The "stopped: checker" on the first run's page is J1-002, not this task. The leave-out button
returning the analyst to More context without saying so (second sentence of J1-001 `actual`) is
register finding C2-010 (batch); the probe still prints that line, as the implementer said.

## Does it fix the cause

Yes. The cause was two server-side checks written against `METHODS` only: `Scheduler.submit`
(`scheduler.py:322`, the refusal the probe saw) and `runs._check_options` (`runs.py:264`, called by
`runs.command` before every launch). Both now call the one predicate `runs.known_module`
(`runs.py:244-250`). Repairing only the first would have let Submit accept and the launch fail; the
test above shows the second check is exercised. The page (`api.ts` `FORECAST_CODE`, `PATHWAYS` equal
to the presets, `carriedModules` in `StartRun.tsx:2495-2503` which expects CP-MODEL in a recorded
list) is right and is untouched.

## The predicate against the launcher's rule

`cpos_launch._prepare` (`cpos_launch.py:1040-1048, 1079-1082`): CP-MODEL is taken as "publish the
forecast" (exact string match, removed from the analytical plan); CP-8 is refused ("cannot be
selected"); `plan()` refuses an unknown id; then `m not in METHODS` refuses a registry module with no
method (CP-MEMO, CP-OS). The launcher's accepted set is therefore `(METHODS - {"CP-8"}) | {"CP-MODEL"}`.
`known_module` is `METHODS | {"CP-MODEL"}` with exact equality and an `isinstance(str)` guard. It
differs from the launcher's only on CP-8, which `METHODS` already contained before this change (so
nothing is widened). Verified: every code of every `PATHWAY_MODULES` preset passes it; `cp-model`,
`CP-MODEL `, `CP-MODEL\n`, `CP-NOPE`, `""`, `None`, `5` and `["CP-MODEL"]` do not.

## Is not reusing NOT_ANALYTICAL sound under L4

Yes. `NOT_ANALYTICAL = {"CP-MODEL", "CP-8"}` (`cpos_launch.py:287`, "each has its own route") names two
codes with opposite `--modules` rules, and `activity.py:45` already uses it for a different job (rows
to leave out of the module list). L4 asked for an existing set only "if one fits" and expressly allowed
`METHODS` plus the single CP-MODEL code with a stated reason. One wording point (finding 4): today
`METHODS | NOT_ANALYTICAL` and `METHODS | {"CP-MODEL"}` are the same set, because CP-8 is in `METHODS`
(checked); the reason is meaning and drift, not behaviour, and the report's sentence says it a little
loosely. The conclusion stands.

## Existing refusals and tests

`git diff --numstat` on tests: 31 added, 0 deleted; no expected value edited, nothing skipped or
loosened. `HOSTILE_MODULES` keeps `cap`, `sources`, `out` and gains two cases; each still raises
"unknown module" with nothing sealed and no run recorded (passes). `test_run_start_submissions.py:523-555`
(`NOPE`, over-long names) is a different layer and unchanged. No test anywhere asserted that CP-MODEL
is refused (grep over `tests/`).

## Consumers of `record.modules`

| Consumer | Reads | Differs now? | Evidence |
| :--- | :--- | :--- | :--- |
| `inbox/runs.py:295-296` `command` | `--modules *record.modules` | The argv now carries CP-MODEL, which the launcher takes as intended. | `test_the_launcher_command_carries_the_forecast_code_in_the_module_list`; the probe starts both runs. |
| `inbox/scheduler.py:282` `_sealed_digest` | `list(record.modules)` | No. It is the list that was approved, CP-MODEL included, so the digest matches. | The start test reaches `running`. |
| `run_start/prior.py:93` `inputs` | `list(record.modules)` pre-fills a new form | A list may now hold CP-MODEL. | `carriedModules` (`StartRun.tsx:2495-2503`) handles it present or absent, and requires every code to be in the pathway preset (CP-MODEL is, for 6 of 9 presets). Consistent. |
| `inbox/activity.py:110` | `entry.pop("modules")` drops the record's list; "modules" is rebuilt by `module_states` | No. `module_states` (`activity.py:36-48`) never reads `record.modules`: it lists the preset minus `NOT_ANALYTICAL`, plus event modules that are in `METHODS`. CP-MODEL is in neither, so no forecast entry. | Run: credit_snapshot, all launched modules accepted, `module_states` = 14 rows plus Report, `CP-MODEL row: False`. |
| `react_frontend/run_activity.py:112, 265, 305` | `_planned(manifest, states)`: the manifest's `instructions` keys that are in `METHODS` | No. The launcher writes `instructions` for `ordered` (`cpos_launch.py:1079-1080, 1167`), which excludes CP-MODEL; the forecast is `publish_forecast` (line 1104). | Read of the launcher; the fallback is `module_states`, above. |
| `web/.../runFigures.ts:43-49` `finishedFigure`, `RunProgress.tsx:157` | `run.modules` from the run-activity reply | No: that reply is the `_planned` / `module_states` list of the two rows above, which has no forecast row, so the count is the analytical modules the run launches. | As above. |
| `inbox/teams.py:457` `progress`, used by `started_card`, `finished_card`, `stopped_card` and the day digest (`teams.py:727, 793`) | `len(record.modules) or len(states)` | **Yes: the total is one high.** | See finding 1. |

## Findings

1. **Medium, `src/deploy_workflow/inbox/teams.py:457`, new observation (outside T02's files and L4; lead to decide).**
   `total = len(record.modules) or len(states)` counts CP-MODEL once it is in `record.modules`, but
   `module_states` never lists it, so done can never reach total. Run: the page's own list after "Leave
   out Legal & covenants" on credit_snapshot is 14 codes including CP-MODEL; the launcher runs 13
   analytical modules; with all 13 accepted `teams.progress` = `(13, 14)` (and `(13, 13)` for the same
   record without CP-MODEL). So the Teams finished card reads "13/14 modules" for a run that did
   everything it was asked, the started card says "14 modules", the stopped card's bar and the day digest are one short.
   This applies to explicit lists on the 6 of 9 presets that hold CP-MODEL (credit_snapshot,
   earnings_update, relative_value, covenant_refinancing, portfolio_decision, deep_credit_assessment);
   before T02 such a run could not start, so the wrong figure became reachable with this repair. The
   existing test `test_progress_counts_accepted_modules_of_the_run` states the intended rule for presets
   ("CP-MODEL is not shown"). The implementer flagged it; no number on the run page or the Library
   changes. Suggested: count `m != FORECAST_CODE` in `teams.progress`, with a test (record with
   CP-MODEL in `modules`, every launched module accepted -> `(13, 13)`). Needs a ruling to extend T02 to
   `teams.py` or a new task.
2. **Low, `tests/test_run_start_scheduler.py:409`, within T02 (optional).** Nothing ties `FORECAST_CODE`
   (`runs.py:32`) to the launcher's literal or to the page's presets. A one-line test that every code of
   every `PATHWAY_MODULES` preset passes `runs.known_module` would pin the Submit, launcher and page
   agreement that J1-001 broke (I checked it holds today).
3. **Low, `src/deploy_workflow/inbox/runs.py:250`, pre-existing, not T02.** CP-8 passes `known_module`
   because it is in `METHODS`, while the launcher refuses it in `--modules` (`cpos_launch.py:1044-1048`):
   a hand-built list with CP-8 is accepted at Submit and fails at launch. The page never sends it; this
   was so before and is not J1-001. Excluding it would be a behaviour change outside the finding.
4. **Low, `docs/audit/.../5-repair/T02.md` "Why not NOT_ANALYTICAL", within T02 (wording).** "Would add
   no new code to what is accepted" is loose: `METHODS | NOT_ANALYTICAL` equals `METHODS | {"CP-MODEL"}`
   today, so the reason is meaning and drift, not a different accepted set. No code change.

Nothing High. Nothing added beyond the finding except the two extra `HOSTILE_MODULES` cases and the
`_check_options` tests, which guard the same predicate. Files changed: `runs.py`, `scheduler.py`, the
scheduler test file and the report; `api.ts` and `StartRun.tsx` are untouched.

Not verified: `tests/test_run_start_page.py` (the legacy start page; its browser launch hangs in this
sandbox, as the implementer reported); the live service and a real provider run (R4); a run that
leaves a module out taken to its report (the probe stops once the run starts); a real Teams post
(the `(13, 14)` figure is from `teams.progress` on a constructed record and event log, not a posted card);
the `web/` gates (no `web/` file changed); the regular (non-synthetic) service beyond the shared
scheduler code.
