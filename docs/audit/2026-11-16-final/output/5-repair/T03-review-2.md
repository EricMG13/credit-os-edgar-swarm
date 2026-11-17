# T03 review, round 2: run reasons in the reader's words (C1-013)

Reviewer: fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-aeac320a8eed12416`, branch
`worktree-agent-aeac320a8eed12416`. Round 1 is `0e302ecb`, round 2 is `688bb9a`, base `d8d3d634`.
Reviewed the whole change `git diff d8d3d634 688bb9a`, with attention to `git diff 0e302ecb 688bb9a`.
Read: `AGENTS.md` (voice standard), the audit `README.md`, `stages/5-repair.md` step 5,
`WORKER-NOTES.md` (Reviewer output), task T03, finding C1-013, `T03.md` (both rounds) and
`T03-review.md` (R1 to R6). Code files were not edited.

## Verdict: PASS

R1 to R6 are fixed. Every reader sentence is true to the code that writes its reason. The only
review findings are two Low items (a cosmetic held-note join and a residual of R6's test advice)
and four Info notes. None needs to go back to an implementer; the two Low items are cheap and the
implementer may take them in the batch or leave them.

## R1 to R6 status

| # | Round 1 finding | Status | How checked |
| :--- | :--- | :--- | :--- |
| R1 | Negative launcher exit code not mapped | Fixed | Pattern is `launcher exited -?\d+; see logs/\S+\.log` (`run_activity.py:262`). A real SIGKILLed child (`poll()` gives -9) through `runs.outcome` stores `launcher exited -9; see logs/<id>.log`; `_shown` sends the `_NO_REASON` sentence. Test `test_a_launcher_exit_reaches_the_page_in_the_readers_words` takes the stored text from `runs.outcome` for 2, 3221225786, -9 and -1073741510. |
| R2 | Rebuild note not mapped | Fixed | `_REBUILD_NOTE` (`run_activity.py:280`) and `_NOT_REBUILT`. `update_library.py not found`, a permission error naming `/x/library/index.html`, and a multi-line error with an absolute path all become the sentence with no error text. Applies to `held` (listing) and `held_reason` (reply). |
| R3 | "the run's log" for failures the scheduler logs to the service log | Fixed | See the log table below. The five sentences say "the service's log"; `launcher exited N` and `stopped: other` still say "the run's log". |
| R4 | "paused" and "ruling" on a reader page | Fixed | New sentence uses neither word; wording checked below. |
| R5 | `_NO_CONTEXT` named a control the page does not have | Fixed | It now ends with the shared `_TRY_AGAIN`, the label of `RunProgress.tsx:117`. "Start from this run" is shown for `failed` (`RESTARTABLE`), and `prior.inputs` returns `context: None` and no files for a run with no `context.json` (`prior.py:source`, `_read_context`), so the form asks for them. |
| R6 | Stored strings typed by hand | Mostly fixed | Launcher cases come from `runs.outcome`; rebuild cases from `scheduler._REBUILD_FAILED`. Residual: see N2. |

## Review findings

| # | Severity | Where | Reason |
| :--- | :--- | :--- | :--- |
| N1 | Low | `react_frontend/run_activity.py:280-293` (`_REBUILD_NOTE`, `_in_readers_words`) | A held note that joins the rebuild note and the daily-limit note reads "...check the service's log. daily limit of 30 runs reached; waiting until tomorrow": a lower-case fragment after a full stop. Cosmetic; optional one-line fix. |
| N2 | Low | `tests/test_react_run_activity.py:142` | R6 residual: the no-context stored text is still typed by hand although `scheduler._NO_CONTEXT` is an importable constant (the other writers are inline f-strings with no constant). |
| N3 | Info | `docs/audit/2026-11-16-final/output/5-repair/T03.md` (R4 paragraph), `run_activity.py:252` | The report says a `stopped: ruling` at run time means the ruling file changed after start-up. In the current launcher that case ends as `launcher exited 2` (or a traceback), not as a `stopped` event, so `ruling` is a dormant mapping. The reader sentence is true; the report's account of when it occurs is not. |
| N4 | Info | `tests/test_react_frontend.py:366-372` | After rounds 1 and 2 no test sends an unmapped ended-run reason with the service root through `listing` or `reply`; the one that did now asserts a mapped sentence. Root removal is still covered for the running run's reason, for `held`, and by the `_plain_reason` table. |
| N5 | Info | `run_activity.py:205` (`_TRY_AGAIN`) | "choose Start from this run on the run's page" is also drawn on the run's own page (the RunProgress alert), where it reads slightly oddly. True and actionable; not worth a change. |
| N6 | Info | `RunProgress.tsx:123-127` | The page's `error` line draws service error text. Checked: an unreadable run record is a `ValueError` that `http_base` turns into a fixed 500 text (`http_base.py:228-234`); no code, exit code or path reaches it. Out of T03 (T04 covers error states). |

### N1 detail (joined held note)

The scheduler joins its held notes with `"; "` in this order: rebuild, daily limit, unreadable
(`scheduler.py:471`). `_REBUILD_NOTE.sub` consumes the first `"; "` and puts one space after the
mapped sentence. Through `_shown`:

```
rebuild + limit:      "...ask whoever runs the service to check the service's log. daily limit of 30 runs reached; waiting until tomorrow"
rebuild + unreadable: "...check the service's log. 1 run record could not be read. Its run is not started, ..."   (reads correctly: a digit)
rebuild + limit + unreadable: "...service's log. daily limit of 30 runs reached; waiting until tomorrow; 1 run record could not be read. ..."
rebuild alone:        "...check the service's log."   (reads correctly)
```

A reader takes the lower-case tail as a second notice with no end stop; it is understandable, and
the daily-limit note already starts in lower case when it stands alone in the same alert, so this
is the existing style meeting a new capital. Rated Low, not Medium: it needs a persistent rebuild
failure and a day at the 30-run limit (`Settings.max_per_day`), nothing is wrong or misleading, and
the unreadable-record note, the more likely partner, reads correctly. The fix, if wanted:
`(?P<more>; (?P<head>.))?` and `+ (" " + note["head"].upper() if note["more"] else "")`. The
implementer's alternative (a trailing `;`) is rightly rejected: it would leave the usual
single-note case with no full stop.

## Is every reader sentence true to its writer

### Which log holds what

| Claim in the sentence | Writer | True? |
| :--- | :--- | :--- |
| "the run's log" (`launcher exited N`, `stopped: other` or unknown) | `runs.start` appends the launcher's stdout and stderr to `layout.logs/<id>.log` (`runs.py` `start`); `cpos_launch.main` prints `Stopped: ...` and errors to stderr; the stored text itself named `logs/<id>.log` | Yes |
| "the service's log" (`could not be filed`) | `scheduler.py:542` `self._logger.exception("run %s could not be filed")` | Yes |
| "the service's log" (`could not be started`, both writers) | `scheduler.py:636` (`cannot be built into a command`) and `:657` (`could not be started`), both `self._logger.exception` | Yes |
| "the service's log" (`stopped by the scheduler`) | `scheduler.py:675` `self._logger.exception("... its process ID could not be saved")` | Yes |
| "the service's log" (rebuild) | `scheduler.py:434-441` `_rebuild_failed` logs once per distinct error (`exception` or `error`) | Yes |
| "the run's record" (`not listed`, `expected one deliveries/...`) | The reason lives in `_engine/state/<id>.json`; the scheduler logs nothing for these (`scheduler.py:513-521`) | Yes |
| No log claim (`_NO_CONTEXT`) | `scheduler.py:612-624` writes the failed record and logs nothing | Yes, none made |

"The service's log" is `_engine/logs/watcher.log` (`startup.open_log`, `_RootHandler`); the scheduler,
`runs` and `activity` loggers propagate to it. The run's own log never holds the scheduler's
messages, as the code comment on `_SERVICE_LOG_THEN_TRY_AGAIN` says.

### Each other claim

- `launcher exited N`: "ended before it finished, and the service recorded no reason" is right: only the
  exit code was recorded (`runs.outcome`, last line), no stop event.
- `stopped: provider`: `run_events.stop_reason` gives `provider` for a `RunStopped` that is not a cap
  or overrun and for `cpos_live_stopped` without `overrun=True` (`handoff.py:1820`); budget ends as
  `capped`. "A problem with a model provider call, not the spending cap" is true.
- `stopped: checker` (`cpos_module_failed`, `cpos_live_not_accepted`, `cpos_retained_rejected`) and
  `stopped: interrupted` (`cpos_interrupted`, `cpos_live_already_started`): the sentences follow the
  kind's own word and claim no more.
- `could not be started`: "so it did not run" is true for both writers (`command()` raised, or
  `runs.start` raised with no child; a child that started and then failed to close a handle is
  returned, not raised).
- `stopped by the scheduler`: `_stop(child)` then the stored reason; the sentence says exactly that.
- `not listed` and `expected one deliveries/...`: "finished, but ... no report" is right: the record
  is `failed` with `ended` taken from a finished outcome.
- Rebuild note: "runs that have ended wait to be filed" and "tries again on each check" are right:
  `_reap` calls `_rebuild()` on every step while `_rebuild_error` is set, and returns without
  deciding ended runs when it fails (`scheduler.py:494-496`).
- Hygiene sweep: every mapped sentence, plus the unmapped scheduler texts (`_CUT_SHORT`,
  `_OLD_WATCHER`, `_CHANGED`, `stopped at the cap`, `the run's process ended without a result`),
  was run through `_shown` and checked for `CP-`, `/`, `.log`, `.json` and a two-digit number: none.
- All writers of a run reason were enumerated (`scheduler.py` lines 196, 217, 267, 509-521, 543, 620,
  637, 658, 669, and `runs.outcome`); each is mapped or plain.

### R4: the "ruling" sentence

Sentence: "The run stopped because the approval that lets the service make paid model calls was not in
place for this setup. Starting it again will stop the same way until whoever runs the service puts
it in place."

- `stop_reason` writes `ruling` only for `LivePauseInForce` (`run_events.py:127`), which
  `check_ruling` raises when the ruling file is unreadable, not under `docs/rulings`, lacks exactly
  one of the `lifts`, `by`, `date`, `configs` lines, does not lift `live-provider-pause`, is not
  `by: user`, has a bad date, or does not name the config (`adapter.py:173-205`). The ruling is
  the owner's recorded approval of live (paid) provider calls; "approval ... for this setup" is a
  faithful plain reading, and "starting it again will stop the same way" is right because the check
  is a file check with no retry.
- "paid model calls" is accurate. It is not alarming: it names what the approval is for, not a claim
  that calls were made; the Start page uses the same register ("Start a paid run?", `StartRun.tsx:2355`),
  and the sentence cannot appear in a synthetic service: `proof/launcher.py` writes no stop event
  (`grep` shows none), so the one place that says "makes no paid provider calls"
  (`StartRun.tsx:2322`) cannot be contradicted by it.
- Start-up (`startup.check_launchable`) runs `check_ruling` for every launch config and refuses to
  start the service otherwise, so a service that is up had the approval at start.
- N3: the report goes further and says that at run time this stop "means that file changed". In the
  launcher, `main` runs `check_ruling` first and returns 2 (`cpos_launch.py:1898, 1948`), and
  `run_live_handoffs` builds the adapter (`check_live_gate`, `adapter.py:371`) before the executor
  exists and before the `try` that appends the `stopped` event (`cpos.py:~895-944`); `LivePauseInForce`
  is not a `ValueError` or `RuntimeError`, so it would propagate as a traceback. I found no raise site
  after the executor exists. So a changed ruling reaches the page as `launcher exited 2` or `1`, which
  gets the `_NO_REASON` sentence (true, and it points to the run's log where the cause is printed), and
  the `ruling` kind is a defensive mapping nothing currently writes. No reader sentence is false;
  the report's account (and its Not verified line "read from `check_ruling` and the start-up check")
  should not be taken as showing the stop occurs.

## Can a module code, exit code or path still reach RunActivity or RunProgress

Fields the service sends and how each is drawn:

| Field | Drawn by | Route for a code, exit code or path |
| :--- | :--- | :--- |
| `reason` (running, waiting, ended, run reply) | `serviceText(...)` in `RunActivity.tsx:48, 195`, `RunProgress.tsx:130` | Service side: `_shown` maps every scheduler writer; the exit code and log path are gone. Page side: `serviceText` turns any `CP-` code into a module name. A relative path in a text `_shown` does not know would pass (only the scheduler writes these, and all are mapped or plain). |
| `held`, `held_reason` | `serviceText` in `RunActivity.tsx:278`, `RunProgress.tsx:133` | Mapped by `_REBUILD_NOTE`; the other two notes (`daily limit...`, unreadable-record note) carry no code or path (`scheduler.py:106-118, 594`) |
| `modules` (`[code, state]`) | `moduleName(code)` | Names, not codes |
| `events[].module` | `moduleName(...)`; kind through the fixed `MILESTONES` table | Names only |
| `pathway` | `pathwayName` | Name |
| `issuer_name`, `submitted_by` | As typed by the analyst | Not a service-written code or path |
| `execution`, `cap`, `spent`, `held` (amount), `stalled` | Figures or not drawn | None |
| `error` (a failed read) | `ErrorNotice` | Fixed 500 text or "unknown run" (N6) |

I found no remaining route. The probe's two `shows delivery path: true` lines are the stubbed
browser answer that bypasses the service (the implementer says so and I agree); through the real
service the same stored text is mapped to the `not listed` sentence (unit-tested).

## Did either changed existing test lose its purpose

- `tests/test_react_frontend.py::test_activity_sends_a_reason_without_the_service_root`: round 1
  changed the `p-path` expectation from root-stripped text to the reader sentence; round 2 changed
  only "run's log" to "service's log". Its purpose, that no sent reason carries the service root,
  holds: the `all(root not in reason ...)` assertion and the running run's `waiting on <root>/inbox/a.pdf`
  case are unchanged. Residual: N4.
- `tests/test_react_run_activity.py::test_the_listing_sends_the_held_note_without_the_service_root`:
  it stored the real rebuild note with a root path; that note is now mapped away, so it stores an
  unmapped note with a root path and still tests that `held` goes through root removal. The rebuild
  note has its own test (3 cases, via `scheduler._REBUILD_FAILED`). Purpose kept.
- No expected value was changed to get a pass; no test was skipped; no gate was loosened.

## Files touched

`git diff d8d3d634 688bb9a --name-only`: the report `T03.md`, `react_frontend/run_activity.py`,
`tests/test_react_frontend.py`, `tests/test_react_run_activity.py`, `RunActivity.tsx`,
`RunProgress.tsx`, and the new `runReasons.test.tsx`. All are T03's files or their tests; none is
outside. Round 2 changed no `web/` file. `T03-review.md` is untouched and still uncommitted.

## Re-run results

| Step | Command | Result |
| :--- | :--- | :--- |
| Python tests | `timeout 300 uv run pytest -q tests/test_react_run_activity.py tests/test_react_frontend.py tests/test_inbox_activity.py` | exit 0: 131 passed, 1 skipped (root reads any folder) |
| New vitest | `cd web && timeout 300 npx vitest run src/pages/connected/runReasons.test.tsx` | exit 0: 1 file, 3 passed |
| Affected vitest (extra) | `cd web && timeout 300 npx vitest run src/pages/connected/ConnectedApp.test.tsx` | exit 0: 185 passed |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0: 0 findings, 3 files, 385 lines |
| Probe | service `proof.serve --root <scratch> --port 8743`, then `C1_BASE=http://127.0.0.1:8743 node docs/audit/2026-11-16-final/output/2-sections/C1/probes/c1-013-raw-run-reasons.cjs` | exit 0; real run 20261117-093455-01 ended Failed; alert is the `_NO_REASON` sentence; `shows 'CP-1': false` on both pages; `VERDICT not reproduced` |
| Own probes | held joins, real SIGKILLed child, hygiene sweep (scratch scripts, not committed) | as in the sections above |

The service on port 8743 was stopped afterwards. The tree is clean except `web/node_modules` and
the two review files.

Not verified: no run was produced end to end for any path but the launcher refusal (exit 2); the
other writers were checked against their code and driven through `runs.outcome`, the scheduler's
constants and `_shown`, not by running a service into them. A real SIGKILL was read with
`Popen.poll()` and `runs.outcome`, not under the scheduler. No browser showed the held alert with
the joined notes or a multi-sentence Reason cell (wrapping is T05). Whether an analyst finds the
sentences clear was not tested. Whether anything outside the launcher paths read can raise
`LivePauseInForce` after the executor exists was checked by search of `src`, not exhaustively by
execution. `lint`, `format:check` and `typecheck` were not re-run (no `web/` file changed in round
2; round 1's exits stand). Signal's tests, the full `npm --prefix web run gates` and
`proof:connected` were not run (stage 5 step 10). The adversarial second read that stage 5
reserves for money, ordering and security code was not run (T03 is not in that class).
