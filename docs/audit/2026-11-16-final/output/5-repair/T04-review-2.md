# T04 review, round 2: run page states (C1-004 run pages, C1-005, C1-024, J5-001 part)

Reviewer: fresh Sonnet reviewer, group repair-1, second read. Did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-a0e7c1f61a5d9a4e5`, branch
`worktree-agent-a0e7c1f61a5d9a4e5`, commits round 1 `6c26d1ce`, round 2 `7014032`, base `bbebfef4`.
Read the whole `git diff bbebfef4 7014032`, round 2 (`git diff 6c26d1c 7014032`) closely. No code file
was edited; `T04-review.md` (round 1) was read and not touched.

**Verdict: PASS.** Findings 1 to 4 of the first review are fixed at their cause, every gate and the three
C1 probes pass when run here, and no file outside T04's list changed. Four Low findings below, none
blocking; each is wording, a test name or a disclosed interface gap.

## Findings

| # | Severity | File:line | Reason |
| :--- | :--- | :--- | :--- |
| 1 | Low | `docs/audit/2026-11-16-final/output/5-repair/T04.md:24` and `:57` | Two round-1 sentences are now false: "No Python changed, so `react_frontend/run_activity.py` is untouched" and "`layout.tsx` and `react_frontend/run_activity.py`: not changed". Round 2 changed `run_activity.py` and `tests/test_react_run_activity.py` (its own "Files changed in round 2" list says so). Other superseded round-1 lines carry a "(Round 1; superseded ...)" mark; these two do not. Mark them or edit them to say "round 1 only". |
| 2 | Low | `docs/audit/2026-11-16-final/output/5-repair/T04.md:257` and `:276` | The heading says "J5-001 closes as partly repaired"; the last sentence of that section says "J5-001 is therefore not closed by this task". Both can be read two ways. Say once: J5-001's label, row sentence, alert title and Start-again action are repaired; its cause half (why the checker refused, what to change) is R1-012 and stays open there. |
| 3 | Low | `web/src/pages/connected/runFigures.test.ts:22` and `:27` | Two `moduleWord` test names still describe the old third parameter: "reads the module a failed run stopped at as Not assessable" and "keeps Interrupted for a stop the run itself did not fail on". In round 2 the parameter is `refused` (the checks stopped the run there), and no `failed` run is passed in. The assertions are right (`moduleWord("stopped", false, true)` is `Not assessable`); only the names mislead the next reader. This file was not changed in round 2. |
| 4 | Low | `web/src/pages/connected/runFigures.ts:140-142` (declared locally), `react_frontend/run_activity.py:420` (sent) | `stopped_by` is sent by the service and read by the page, but `Run` in `api.ts` does not declare it; `runFigures.ts` declares `type StoppedRun = Run & { stopped_by?: string }` instead, and no test ties the Python field to the TypeScript type (the existing contract test holds only `RunStatus`, `EndedRun` and `ModuleState`). Disclosed in the report and correct under the file rule. It needs one line in `api.ts` by whoever owns it (`api.ts` is named by T02, merged, and T08, not by T04; the lead can place it), after which `StoppedRun` can go. If a later change renames the field in Python, the page quietly falls back to `Interrupted` and the Python test still passes. |

Not findings, recorded so they are not re-raised: the "rejected N times" count spans every launch of the
run folder (disclosed in the report's Not verified); review findings 5, 6 and 8 of round 1 stay open as the
lead has ruled, and 7 goes to T05.

## Round 1 findings 1 to 4: fixed

1. **`isPendingReport` unused (Medium): fixed.** `RunProgress.tsx:15` imports it and `:116` uses it in
   `reportState`'s catch. `npm --prefix web run unused` exits 0 (it exited 1 at round 1). `api.ts` is not
   edited.
2. **`waitOver()` read twice per poll (Low): fixed.** `RunProgress.tsx:131` computes `giveUp` once; `:132`
   passes it to `reportState`, `:135` uses it to decide whether to look again. `waitOver` is read nowhere
   else (definition `:104`). I ran the round-2 `runStates.test.tsx` against the round-1 source (a copy of
   `6c26d1c`'s `web/` in a scratch folder, since removed): 8 fail, including "decides once per look whether
   the wait is over, so no clock reading leaves the page waiting without a timer"; on the branch all 21
   pass. The test's clock moves 5 s per reading, so it fails on exactly the old two-reading shape.
3. **`Not assessable` given to every stopped or running module of a failed run (Low): fixed.**
   `runFigures.ts:148-151` `refusedModule`: the last `module_started` module of a run whose status is
   `failed` and whose `stopped_by` is `checker`; `:167` passes `code === refused`. Any other module, and any
   other kind of failed run, reaches `moduleWord` with `refused` false, which is the pre-round-1 function
   (`Interrupted` for stopped or running, `Finished`, `Queued`, `Not run`). Checked with the real service
   (below): a provider stop and a launcher exit both read `Interrupted`, no sentence. Tests cover delivery
   failed with CP-8 not produced, scheduler failure after a clean exit, `provider`, `ruling`,
   `interrupted`, a launcher exit, and a checker stop after an earlier launch left CP-8 and Report stopped.
4. **"after the checks rejected its draft N times" for any stop (Low): fixed** by 3: the sentence is built
   by `stoppedDetail` only when the word is `Not assessable`, and the word is given only to the
   checker-stopped module. Verified on the real service below.

## Answers to the checks

**`stopped_by` is read from what the service records, with no invented value.** `reply` sends
`_stopped_by(record.reason)` (`run_activity.py:296-301, 420`). `record.reason` is what `runs.outcome`
writes (`f"stopped: {state.stop}"`, `inbox/runs.py:352`), and `_stopped_by` returns the kind only when it
is a key of `_STOPS` (`provider`, `checker`, `interrupted`, `ruling`), else `""`. I drove it through the
real path (event log, `runs.outcome`, `runs.save`, `reply`): `checker`, `provider`, `ruling`,
`interrupted` give those words; `stopped: other`, a budget stop (`capped`), a launcher exit and no stop give
`""`; a hostile stored text (`"stopped: checker\n/home/user/secret/path"`, `"stopped: /home/user/x.py"`,
`"stopped: Checker"`) gives `""`. No stored text, code or path can reach the field.

**No code or path a reader could see.** The field is one of four fixed words or empty. Nothing in `web/src`
draws it (grep: only `runFigures.ts` reads it), and a browser dump of three seeded failed runs on the real
service (checker, provider, launcher exit) shows no stop-kind word in the page text. It is used only to
choose the module row's word and sentence. The voice standard is kept: no source, id, file name or module
code in a new sentence.

**Other consumers of `reply`.** The only caller is `react_frontend/__init__.py:276`; the page reads it
through `getRun` (`api.ts:255`), which does not validate the shape, so an extra field breaks nothing.
`tests/test_react_frontend.py` reads single fields (`held_reason`, `reason`, `events`) and does not compare
whole replies; all 100 tests of the two Python files pass. A service that does not send the field leaves
the checker-stopped module reading `Interrupted` (as before round 1).

**`Not assessable` only on the module a checker stop ended on.** Every checker-class stop is raised inside
a module's own work, after that module's `module_started` (`owners/cpos.py:603-614`, `_handoff`;
`cpos_module_failed`, `cpos_live_not_accepted`, `cpos_retained_rejected`), and modules run one at a time, so
the last `module_started` is the module the checks refused. A checker stop in delivery (every module
accepted) gives no `Not assessable` row, which reads as before round 1. An unreadable log (`events` null)
falls back to `Interrupted`.

**Every other module of every failed-run path reads as before round 1.** `moduleWord(state, live, false)`
is the base function line for line; `detail` is `null` for every module that is not `Not assessable`, as at
base (`RunProgress` at `bbebfef4` passed `detail: null`).

**The wait decision is computed once**: see 2 above.

**`isPendingReport` is used correctly.** It is `error instanceof RequestError && error.status === 404`
(`api.ts:445`). In `reportState`'s catch a 404 is `pending` (or `absent` once `giveUp`); anything else (a
500, a network `TypeError`, a parse error) is `unreachable` by `isUnreachable` or `failed`, drawn as an
error alert (tested: a report that answers 500 draws one error alert, inserted once). `problemOf` keeps its
own 404 test for the run, where 404 means "no such run", not "report pending": the two are different
questions, so this is not duplication to remove. An abort is discarded by `cancelled()` before it is read.

**The changed existing fixture.** `runStates.test.tsx` is a new file in this branch (round 1), not a base
file; round 2 added `stopped_by: "checker"` to its `stopped` fixture. The tests that spread it
(`capped` run, `interrupted` run) do not reach `refusedModule` (status is not `failed`), so nothing else
changes; no assertion or expected value was edited, and all 21 pass. No existing base test changed in the
whole diff.

**No file outside T04's.** Changed files from `git diff bbebfef4 7014032 --name-only`: `RunProgress.tsx`,
`runFigures.ts`, `useResource.ts`, `run_activity.py` (all four in the task's list), `runFigures.test.ts`,
`runStates.test.tsx`, `useResource.test.ts`, `tests/test_react_run_activity.py` (tests of those files), and
the report. Nothing in `api.ts`, `layout.tsx`, `handoff.py`, `cpos_launch.py`, `prompts/`, `proof/` or
Signal.

**R5 (nothing the reader sees is removed, nothing the user controls is changed).** Round 2 removes nothing
against base: it narrows round 1's `Not assessable` back to the one module the checks stopped, so the other
modules read what they read at base. Round 1's changes replace an endless wait and two plain lines with
alerts and add controls (Try again, Check again, Start from this run when no report exists); none removes
a control or a figure. No owner-decision entry is needed.

## Re-runs (this reviewer)

| What | Command | Result |
| :--- | :--- | :--- |
| Vitest, all of `src/pages/connected` | `cd web && timeout 580 npx vitest run src/pages/connected` | exit 0, 48 files, 979 tests passed (no load timeout) |
| Lint | `npm --prefix web run lint` | exit 0 |
| Format | `npm --prefix web run format:check` | exit 0 |
| Typecheck | `npm --prefix web run typecheck` | exit 0 |
| Unused exports | `npm --prefix web run unused` | exit 0 (knip's one `.css` configuration hint only) |
| Duplication | `npm --prefix web run duplication` | exit 0 |
| Python tests | `timeout 300 uv run pytest -q tests/test_react_run_activity.py tests/test_react_frontend.py` | exit 0, 100 passed |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base bbebfef4` | exit 0, 0 findings, 2 changed files, 82 lines |
| Build | `timeout 600 npm --prefix web run build` | exit 0 |
| Probe C1-004 | `C1_BASE=http://127.0.0.1:8744 node .../c1-004-error-states.cjs` | exit 0, `VERDICT not reproduced` (the Library read failure still prints a plain line with `hasIcon: false`: T05's) |
| Probe C1-005 | `C1_BASE=http://127.0.0.1:8744 node .../c1-005-finished-run-waits-forever.cjs` | exit 0, `6 {"waiting":false,"alerts":1,"openReport":false}` |
| Probe C1-024 | `C1_BASE=http://127.0.0.1:8744 node .../c1-024-alert-reannounced-every-poll.cjs` | exit 0, `5 {"added":1,"removed":0}` |

The service on 8744 was a `proof.serve` started from this worktree on a fresh root after my own
`npm --prefix web run build`, and stopped afterwards. No test or probe timed out, so none was re-run.

Beyond the brief: I seeded three failed runs into that service (a checker stop at CP-4 after two rejected
drafts, a provider stop, a launcher exit with CP-4 still running) and read the real replies and pages in a
browser. `stopped_by` was `checker`, `provider` and `""`. The checker run's Legal & covenants row read "The
run stopped here after the checks rejected its draft 2 times. Not assessable"; the other two read
`Interrupted` with no sentence. Each page had one error alert titled "Why this run ended without a report"
with the reader's sentence from T03.

Not verified:
- The 10 s boundary was reasoned and tested with a clock that moves 5 s per reading, not provoked in a
  browser at the exact boundary.
- A real failed run from the engine (not seeded) was not produced: the current synthetic launcher finishes
  the J5 scenario (T12), and the pre-T12 launcher was not re-created. The J5 probe was not re-run; the
  seeded runs above are service replies from records written by `runs.save`, with event logs written by
  hand in the engine's event format.
- R1-012 and owner question OQ-15 are cited by the report and the lead's ruling L12; neither is in the
  worktree's `register.jsonl` or `owner-decisions.md`, so I did not read them.
- Screen-reader announcement, keyboard order and the 390 px layout of the new alerts were not checked.
- The other tasks' probes that matched "Failed to fetch" (round 1 finding 6) were not run.
- `npm --prefix web run gates` in full (`test`, `audit`, `test:scripts`, `test:file:gates`) was not run;
  nothing under `web/src/pages/signal/` imports a changed file, so Signal's tests were not run.
