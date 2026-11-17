# T03 review: run reasons in the reader's words (C1-013)

Reviewer: fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-aeac320a8eed12416`, branch
`worktree-agent-aeac320a8eed12416`, commit `0e302ecb` against base `d8d3d634`.
Read: `AGENTS.md` (voice standard), the audit `README.md`, `stages/5-repair.md` step 5,
`WORKER-NOTES.md` (Reviewer output, ports), task T03, finding C1-013, rubric rules D-13, D-31,
the implementer's `T03.md`, and the diff. Code files were not edited.

## Verdict: CHANGES NEEDED

The design is sound: one choke point on the service side (`_in_readers_words` inside `_shown`) plus
`serviceText` on every service-written string the two pages draw. The launcher-refusal case in the
finding is fixed and the probe passes. But the choke point is incomplete in two real, ordinary cases
that sit inside the finding's own words ("launcher exit codes and log paths", "held and
held_reason"), and one of them is reproducible with a real killed process. Two Medium findings go
back to a fresh implementer; four Low findings are listed.

## Review findings

| # | Severity | Where | Reason |
| :--- | :--- | :--- | :--- |
| R1 | Medium | `react_frontend/run_activity.py` `_REASONS`, first pattern (`launcher exited \d+; see logs/\S+\.log`) | A launcher killed by a signal ends with a negative exit code; the pattern does not match it, so the exit code and the log path reach both pages verbatim. |
| R2 | Medium | `react_frontend/run_activity.py` `_REASONS` (no entry), `listing` `held`, `reply` `held_reason` | The scheduler's own `the library could not be rebuilt (<error>); ended runs wait for it` is not mapped; the exception text (file names such as `update_library.py`, `index.html`) still reaches the "Held by the service" alert on both pages. |
| R3 | Low | `react_frontend/run_activity.py` `_NOT_FILED`, `_NOT_STARTED`, `_NOT_SAVED`, `_LOG_THEN_TRY_AGAIN` | They send the reader to "the run's log", but the scheduler writes those details to the service log (`_engine/logs/watcher.log`), not to the run's own `logs/<run>.log`, which a run that never started does not have. |
| R4 | Low | `react_frontend/run_activity.py` `_STOPS["ruling"]` | Brings the words "paused" and "ruling" to a reader page; no other reader page uses either (nothing under `StartRun.tsx` or `start/`). |
| R5 | Low | `react_frontend/run_activity.py` `_NO_CONTEXT` | Says "Submit it again from the run page"; the control on the run page is "Start from this run" (`RunProgress.tsx:117`), which every other new sentence names. |
| R6 | Low | `tests/test_react_run_activity.py` `_READER_REASONS` | The stored strings are typed by hand, not produced by the code that writes them (`runs.outcome`, the scheduler's constants), which is why R1 and R2 went unseen; there is no case for either. |

### R1 evidence (reproduced)

A real child killed with SIGKILL, read the way `Scheduler._exit_of` reads it (`child.poll()`), then
`runs.outcome` and `_shown`:

```
exit code -9 -> failed 'launcher exited -9; see logs/20261117-080332-01.log'
shown: 'launcher exited -9; see logs/20261117-080332-01.log'
```

`-1073741510` and every other negative code behave the same; positive codes (`2`, `3221225786`) are
mapped. This is the exact defect the finding names (exit code and log path), for an out-of-memory
kill or an operator `kill -9`. Fix: `-?\d+`; and make the test take the stored text from
`runs.outcome(layout, record, -9)`.

### R2 evidence (reproduced)

`_shown` on the strings the scheduler stores (`scheduler.py:47`, `:435`, `:408-428`):

```
'the library could not be rebuilt (update_library.py not found); ended runs wait for it'
  -> unchanged
"... ([Errno 13] Permission denied: '/x/y/library/index.html'); ended runs wait for it"
  -> "... Permission denied: 'index.html'); ended runs wait for it"
```

`update_library.py not found` is the ordinary case of a service started where the library app is
not installed (`cpos_launch.update_library_at`). The implementer lists this under Not verified and
in "Judgement calls", but the finding names `held` and `held_reason` and the suggested change says
"map the scheduler's own failure reasons"; this is one, and its siblings `could not be filed:` and
`could not be started:` are mapped. The scheduler already logs the error (`scheduler.py:436-440`),
so a sentence such as "The library could not be rebuilt, so ended runs wait for it. Ask whoever runs
the service to check the service log." loses nothing. The existing `ConnectedApp.test.tsx:1816`
test draws the raw text because the browser test bypasses the service; it does not need to change.

## What was checked

**Does it fix the cause.** Yes for the case the probe exercises. The cause was service-written text
drawn without `serviceText` and without a mapping. Both now exist: `RunActivity.tsx` (running note,
waiting note, Ended table, held alert) and `RunProgress.tsx` (reason alert, held alert) call
`serviceText`; the service maps the scheduler's reasons. Not complete: R1, R2.

**Each mapping against where the reason is written.**

| Stored text (writer) | Sentence | True to the record? |
| :--- | :--- | :--- |
| `launcher exited N; see logs/<id>.log` (`runs.py:355`) | ended before it finished, no reason recorded | Yes: only the exit code was recorded. Not for negative N (R1). |
| `stopped: provider` (`run_events.stop_reason`, `runs.py:352`) | model provider call problem, not the cap | Yes: `RunStopped` that is not a cap or overrun, and `cpos_live_stopped` without overrun; budget ends as `capped`. |
| `stopped: checker` | a module's answer did not pass the checks | Yes: `cpos_module_failed`, `cpos_live_not_accepted`, `cpos_retained_rejected`. |
| `stopped: interrupted` | interrupted before it finished | Follows the stored word. Also written for `cpos_live_already_started`; no cause beyond "interrupted" is claimed. Acceptable. |
| `stopped: ruling` | live runs paused, no ruling lifts it | Yes (`LivePauseInForce`); wording R4. |
| `stopped: other` or unknown | did not classify | Yes: `other` is the unclassified kind. |
| `not listed: <why>` (`scheduler.py:517`) | finished, library would not list it, no report | Yes. The raw `why` stays in `_engine/state/<id>.json`; the scheduler does not log it, and the sentence says "record", which is right. |
| `expected one deliveries/*/delivery.json, found N` (`:520`) | not exactly one delivery | Yes. |
| `could not be filed: <error>` (`:543`) | finished, report could not be filed | Yes; pointer R3. |
| `could not be started: <error>` (`:637`, `:658`) | could not be started, did not run | Yes (both writers); pointer R3. |
| `stopped by the scheduler: its record could not be saved (...)` (`:~668`) | service stopped it because its record could not be saved | Yes; pointer R3. |
| `no context.json in _engine/drops/<id>; ...` (`:620`) | submission record missing, not started | Yes ("submission record" is a plain name for `context.json`); wording R5. |

No invented cause was found. "Start from this run" exists on the run page for `failed`, `capped`,
`rejected` and `interrupted` (`RunProgress.tsx:36,84,115`), so "To try again" is actionable.

**Other routes for a code, exit code or path.**
- `reason` (listing running, ended, reply) and `held` (listing), `held_reason` (reply) all pass
  through `_shown`. No other string field is drawn by the two pages (`events` carry kind and time
  only, `_milestone`; `modules` codes are drawn through `moduleName` in both pages).
- Remaining: R1 (exit code and relative log path), R2 (file names in the rebuild note). An absolute
  path is cut to its last segment as before; a relative path, a file name and a module code in a
  reason `_shown` does not know are sent as stored (module codes are then replaced by `serviceText`).
- `reply` and `listing` are called only from `react_frontend/__init__.py:276`. No other endpoint
  returns a run reason.

**Does it break a caller.**
- Teams cards: `teams.py` does not read `Record.reason`; the stopped card uses the fixed
  `_WHY_STOPPED[status]` (`teams.py:94,486-505`). Unaffected, and `_shown` does not touch the stored
  record anyway.
- Legacy library page under `apps/issuer-library/credit_os/web/` reads `window.RUN_ACTIVITY` from
  `_engine/activity.js`, which the scheduler writes with the stored text; `_shown` is only on the
  `/connected/activity` projection. Unaffected (and, by design, still shows the stored text; that
  page is not in T03's files).
- Tests: `tests/test_react_frontend.py` (`listing["held"] == held` at `:249` uses a plain held note,
  unchanged), `tests/test_inbox_activity.py` (41 passed), `ConnectedApp.test.tsx` and the other
  affected vitest files (230 passed). The `held` field in a listing is now rewritten; no test or
  page compares it with the stored text.

**Weakened test?** No. One existing test changed
(`tests/test_react_frontend.py::test_activity_sends_a_reason_without_the_service_root`): only the
`p-path` expectation, which asserted the old behaviour the finding removes (a `could not be filed`
reason sent as stored text with the root stripped), now expects the reader's sentence. Every other
assertion is unchanged, including the root-stripping assertion for the running run and the
`all(root not in reason)` check. The `_plain_reason` unit tests are untouched. Minor: after this change no ended-run reason in that test exercises root-stripping of unmapped text through the
endpoint; the running run's reason still does.

**Added anything not asked for?** No. Passing `held` through `_shown` is named by the finding. The
docstring edits are accurate. 7 files changed, all T03's files, their tests, or the report; none
outside.

**The probe line `shows delivery path: true`.** Acceptable in itself, not as evidence that no path
reaches the page. Part 2 of the probe hands the browser the scheduler's raw `not listed: ...` text
through a stubbed route, which bypasses `run_activity` entirely; its verdict counts only the module
code, which is replaced. Through the real service that exact text is mapped to the `not listed`
sentence (the unit test uses it). A duplicate path scrubber on the page is not needed and I do not
ask for one: completing the service mapping (R1, R2) closes the real routes. The implementer's
sentence "no path reaches the page" through the real service is true only until R1 and R2 are
fixed.

## Re-run results

| Step | Command | Result |
| :--- | :--- | :--- |
| Python tests | `timeout 300 uv run pytest -q tests/test_react_run_activity.py tests/test_react_frontend.py` | 84 passed |
| Other Python | `uv run pytest -q tests/test_inbox_activity.py` | 41 passed, 1 skipped (root reads any folder) |
| New vitest | `cd web && timeout 300 npx vitest run src/pages/connected/runReasons.test.tsx` | 1 file, 3 passed |
| Affected vitest | `ConnectedApp.test.tsx`, `runFigures.test.ts`, `api.test.ts`, `moduleCodes.test.ts` | 4 files, 230 passed |
| Lint | `npm --prefix web run lint` | exit 0 |
| Typecheck | `npm --prefix web run typecheck` | exit 0 |
| Format | `npm --prefix web run format:check` | exit 0 |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0 (0 findings, 3 files, 302 lines) |
| Build | `timeout 600 npm --prefix web run build` (rebuilt before the probe) | exit 0 |
| Probe | `C1_BASE=http://127.0.0.1:8743 node docs/audit/.../c1-013-raw-run-reasons.cjs` | exit 0; real run ended Failed with the `launcher exited 2` sentence; `shows 'CP-1': false` on both pages; `VERDICT not reproduced` |

The service on port 8743 was stopped afterwards. The tree is clean except `web/node_modules` and
this file.

Not verified: no run was produced for the paths other than the launcher refusal (`not listed`,
`could not be filed`, `could not be started`, a missing `context.json`, a scheduler-stopped run),
so the sentences were checked against the writers in the code, not against a running service; the
negative-exit-code and rebuild-note cases were driven through `runs.outcome` (a real SIGKILLed
child) and `_shown`, not through a running service and a browser; no screenshot of the Ended table
with a two- or three-sentence Reason cell was taken, so wrapping and width are not judged (C1's
clipped-table finding is T05); the reader's reading of the sentences was not tested; Signal's
vitest files and the full `gates` and `proof:connected` were not run (stage 5 step 10); the
adversarial second read that stage 5 reserves for money, ordering and security code was not run
(T03 is not in that class).
