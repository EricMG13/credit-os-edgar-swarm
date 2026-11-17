# T04 review: run page states (C1-004 run pages, C1-005, C1-024, J5-001 part)

Reviewer: fresh Sonnet reviewer, group repair-1. Did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-a0e7c1f61a5d9a4e5`, branch
`worktree-agent-a0e7c1f61a5d9a4e5`, commit `6c26d1ce`, base `bbebfef4`. No code file was edited.

**Verdict: CHANGES NEEDED** (one Medium; the rest Low). The three Medium findings C1-005, C1-024 and
the run-page half of C1-004 are fixed at their cause and every re-run gate and probe passes. The
Medium below is a gate this commit breaks that a one-line change inside T04's own files removes.

## Findings

| # | Severity | File:line | Reason |
| :--- | :--- | :--- | :--- |
| 1 | Medium | `web/src/pages/connected/api.ts:445` (caused by `RunProgress.tsx:13-21`) | `isPendingReport` is now an unused export: `npm --prefix web run unused` (knip) prints `Unused exports (1) isPendingReport` and exits 1, and `npm run gates` (stage 5 step 10) chains `unused`. Its only importer was `RunProgress`. The report defers it to the sweep, but step 10 runs first. Fix inside T04's files: call `isPendingReport(failure)` in `reportState`'s catch (it is the report's "not there yet" test) instead of reading `problemOf(...) === "missing"`; or report `NEEDS FILE: web/src/pages/connected/api.ts` and delete it. |
| 2 | Low | `RunProgress.tsx:117` and `:133` | `waitOver()` is evaluated twice per poll. If the 10 s boundary falls between the two calls, `reportState` returns `pending` (line 117) and line 133 then sees the wait over, so no timer is set and no `absent` is shown: the page stays on "Waiting for the report to become available…" with no polling. Window is about a millisecond per 2 s poll, so very rare, but it is the C1-005 symptom. Compute the decision once (return it from `reportState`). |
| 3 | Low | `runFigures.ts:132-135`, `:141-147`, `:152-163` | `Not assessable` plus "The run stopped here." is given to every `stopped` or `running` module of a `failed` run, not only the module the run stopped at. Cases where it is untrue: (a) CP-8 planned and not produced is left `stopped` by `delivery_started` (`run_events.py:61-62`), so a run that then fails in delivery shows CP-8 and Report both "stopped here"; (b) a run `failed` by the scheduler after a clean exit (`not listed`, `deliveries`, `could not be filed`: `scheduler.py:515-543`) with a CP-8 not produced; (c) the "launcher exited N" path has no stop event, so the module is `running` at the log end and also reads "stopped here". The label is defensible for all of these (D-14), the sentence is not for (a) and (b). Also: for a `failed` run with `stopped: interrupted` (`run_events.py:125`) the module reads Not assessable while the run's reason (T03) says "was interrupted". |
| 4 | Low | `runFigures.ts:141-147` | "…stopped here after the checks rejected its draft N times." counts every `draft_rejected` for the module in the feed (last 80 milestones, `run_activity.py:26`), whatever stopped the run. With `stopped: provider` or `ruling` the run's own reason alert (T03) names a different cause beside a row that reads as if the checks stopped it. The words "after" are true in time but read as cause. Say the count without "after" (for example "The checks rejected its draft N times before the run stopped here.") or show it only when the stop reason was the checks. |
| 5 | Low | `RunProgress.tsx:52-70` (`RUN_PROBLEMS`), `react_frontend/run_activity.py:395` | Two sentences assert more than the page knows. "The service could not read this run" is drawn for any non-404 answer and any non-network error (400, a gateway 502/503, a malformed reply). "The service has no run at this address" is drawn for the 404 `run activity is unavailable` (symlinked run folder) as well as `unknown run`. The second is an unusual input (parked under R3); the first is generic wording that names a cause. Suggest "The service did not return this run." |
| 6 | Low | `web/src/pages/connected/useResource.ts:11-14` (cross-task) | `errorText` now words a network failure for every caller. Read well for each: Library line, Report reader line, Record, Model files `role=status` line, Start a run (context load, prior-inputs note, Submit). No test or caller in `web/src` relied on "Failed to fetch". But three audit probes did, and they change answer: `J2/probes/j2-013-...cjs` (`hidden` needs `/Failed to fetch/`, so it prints NOT REPRODUCED while the message is still 2,900 px off screen: T08's reviewer must read the `top`/`inViewport` fields, not the verdict); `C3/probes/p07-report-error-states.cjs` (`rawBrowserText` is now false for the network half: T17); `C2/probes/p12-states.cjs` Submit (network) message. Also the Submit text now reads "The service cannot be reached. Try again, or ask whoever runs the service to check it. Retrying Submit run is safe." (`StartRun.tsx:1783`): for a POST whose reply was lost the request may have arrived, so "cannot be reached" overstates, and "Try again" repeats "Retrying … is safe". T08 owns that sentence. |
| 7 | Low | register / `tasks.md` | C1-004's Library-read-failure half (`LibraryIndex.tsx:216`, a plain red line, no icon, no action) has no owner: the report says T05, but T05's findings in `tasks.md` are C1-002, C1-003, C1-006, C1-031 and do not include it. The C1-004 probe's verdict is a conjunction, so it now prints `not reproduced` while that line is still drawn (its output shows it). Do not close C1-004 on this commit alone, and assign the Library half. J5-001 must stay open: the module's own cause ("no agreement chosen") is the NEEDS FILE the controller has taken to the lead. |
| 8 | Low | `RunProgress.tsx:147-152`, `:247-257` | "Check again" with the report still missing, and "Try again" while the service is still down, change nothing the reader can see or hear (the alert is kept so the button keeps its place). The reader cannot tell the press did anything. Not wrong for C1-024; a short status line ("Checked at 10:42:07") would answer it. Also Try again is nearly redundant while the page is polling. |

## Answers to the checks

**Does each repair fix its cause?**
- C1-024: yes. `problem` (the run's read) and `report` (the finished run's report) are separate state and each is cleared only by its own answer; one `Alert` in one place. Probe: 1 insertion, 0 removals over 5 report polls (was 5 and 4). The unit test counts with a `MutationObserver`.
- C1-005: yes. A finished run's missing report is waited for 10 s, then polling stops, an alert with "Check again" and "Start from this run" appear. Probe: 6 polls, `waiting:false, alerts:1`.
- C1-004 (run pages): yes. Unknown run is a warning alert with a link back; a fetch that never arrived and a failed read are error alerts with Try again; the service's own word and the browser's are not drawn; the h1 is `Run`, not the breadcrumb's words. The Library and report halves are other tasks (finding 7).
- J5-001: the label (`Not assessable`), the row sentence and the reason alert title are in place. The cause of the refusal is not recorded in a reader-safe form (NEEDS FILE, with the controller). Not closed.

**Is the 10 s wait risky for a report that is merely slow to publish?** No, for the normal path. The scheduler decides a run `finished` only in `_decide` (`inbox/scheduler.py:507-521`), after `_rebuild()` has rewritten `library/data.js` and checked `record.id in library.runs`; `_put` saves the record after that. `run_activity.reply` reports `record.status`, so the page cannot see `finished` before the library lists the run. The report endpoint reads `data.js` on each request (`react_frontend/__init__.py:299-303`) and `admission.admitted` hides a managed run only while its record is not `finished`, so the first look after `finished` finds the report. The one transient is the library swap (`update_library.py:331-336`: rename to `.library-old`, then rename the new folder in) when another run's end triggers a rebuild: for a moment `data.js` is absent and the report answers 404. A 2 s retry absorbs it, and 10 s covers five of them. The finding suggested about a minute; the C1-005 probe waits 12 s and requires the wait to be over, so a minute cannot pass it, and 10 s is the largest value the probe allows. Finding 2 is the only way the wait can misreport.

**Every new reader sentence true to the record?** Yes except the notes in findings 3, 4 and 5. "No report was published for this run / The run finished, but the service has no published report for it" is what a 404 for 10 s on a `finished` run means. "This page keeps trying and updates when the service answers" is true (polling continues for those states). The reason alert wraps T03's sentence unchanged; the title "Why this run ended without a report" is true for every status that has a reason (`failed`, `capped`, `interrupted`, `rejected`: `scheduler.py` sets `reason` only on ended states). No source, id, file name or module code is in a new sentence (voice standard).

**"Not assessable" for the stopped module of a failed run, "Interrupted" elsewhere.** `moduleWord(state, live, failed)` is identical to the old function when `failed` is false (checked: stopped -> Interrupted, running and not live -> Interrupted, live running -> Running, done, waiting). Failed paths from `runs.outcome` and the scheduler: `stopped: checker | provider | interrupted | ruling | other` (module `stopped`): Not assessable, correct for checker, ruling, other; defensible for provider; finding 3 for `interrupted`. `launcher exited N`: module `running` at log end: Not assessable (was Interrupted); defensible. `could not be started`, no-context: no module events, rows read Not run. Post-exit scheduler failures: all modules done, no stopped row, except CP-8 not produced (finding 3). `capped` keeps Interrupted for the module the cap cut off, and `interrupted` and `rejected` keep it too; the tests pin `interrupted`. The `Not assessable` row uses the existing `StatusBadge set="Module state"` (slashed circle, neutral), as D-14 describes.

**`errorText` for every caller.** See finding 6. The change is limited to a `TypeError` whose message is a browser's fetch failure (`failed to fetch`, `networkerror`, `load failed`); other errors pass through as before, and a page-code `TypeError` is not "unreachable" (tested). Safari's other offline wordings ("The network connection was lost.") are not matched and fall to "The run could not be loaded"; low value, the work PC is Windows.

**Shared components unchanged?** Yes. `Alert` (title, tone, action), `Button` (`size="sm" color="secondary" onPress`), `TextLink` and `ModuleSteps`/`StatusBadge` are used as they are; the diff touches none of them. `ErrorNotice` in `layout.tsx` is untouched (still used by Library, Report reader, Start a run). Screenshots read at 1440 and 390 px (failed run, unknown run, no report): alert, badge and row sentence wrap and sit correctly; no horizontal scroll.

**Focus and announcement; T06.** Each alert is a single `role="alert"` node (Alert's warning and error tones) inserted once; none takes focus. Try again and Check again keep focus while the alert stays; when the answer is a success the alert and button go and focus falls to the body (same as before for any removed control; not a regression). `layout.tsx` and `ConnectedApp.tsx` are unchanged, so T06's route-change focus work is not constrained: the h1 stays one `PageHeader` element whose text changes from `Run` to the issuer name when the run loads (a focused h1 stays the same element). `RunProgress` is keyed by run id (`ConnectedApp.tsx:78`), so its state resets per run.

**Did a test weaken?** No. Every test is new (`runStates.test.tsx`, `useResource.test.ts`) or added (`runFigures.test.ts`: 3 `moduleWord` tests); no existing assertion, value or skip was changed; `ConnectedApp.test.tsx` and `runReasons.test.tsx` are untouched and pass. Expected values are literal, not computed from production code.

**Files outside T04's list?** No. Changed: `RunProgress.tsx`, `runFigures.ts`, `useResource.ts`, their three test files (one new beside `useResource.ts`, one new `runStates.test.tsx`), and the report. `layout.tsx` and `run_activity.py` are unchanged (listed in the task, not needed). No Python changed. No file under `web/src/pages/signal/` imports a changed file (grep of `useResource|runFigures|RunProgress|connected/layout|pages/connected` finds nothing), so Signal's tests were not run.

## Re-runs (this reviewer)

| What | Command | Result |
| :--- | :--- | :--- |
| Vitest, the four named files | `cd web && timeout 300 npx vitest run src/pages/connected/runStates.test.tsx src/pages/connected/useResource.test.ts src/pages/connected/runFigures.test.ts src/pages/connected/ConnectedApp.test.tsx` | exit 0, 4 files, 206 tests passed |
| Vitest, whole `src/pages/connected` | `cd web && timeout 580 npx vitest run src/pages/connected` | exit 0, 48 files, 971 tests passed |
| Lint | `npm --prefix web run lint` | exit 0 |
| Format | `npm --prefix web run format:check` | exit 0 |
| Typecheck | `npm --prefix web run typecheck` | exit 0 |
| Build | `timeout 600 npm --prefix web run build` | exit 0 |
| Unused exports | `npm --prefix web run unused` | **exit 1**: `Unused exports (1) isPendingReport src/pages/connected/api.ts:445` (finding 1) |
| Duplication | `npm --prefix web run duplication` | exit 0 |
| Probe C1-004 | `C1_BASE=http://127.0.0.1:8744 node .../c1-004-error-states.cjs` | exit 0; unknown run is a warning alert (icon, one action in the alert, h1 `Run`); network failure reads "The service cannot be reached…"; the unknown report and Library read failure still print plain lines (T17, finding 7) |
| Probe C1-005 | `C1_BASE=http://127.0.0.1:8744 node .../c1-005-finished-run-waits-forever.cjs` | exit 0; `polls 6 {"waiting":false,"alerts":1,"openReport":false}` |
| Probe C1-024 | `C1_BASE=http://127.0.0.1:8744 node .../c1-024-alert-reannounced-every-poll.cjs` | exit 0; `5 report polls, {"added":1,"removed":0}` |

The service on 8744 was a `proof.serve` started from this worktree on a fresh root after my own
`npm run build`, and stopped afterwards. No load timeout occurred, so nothing was re-run. The J5
probe was not re-run (the brief did not ask for it; the report's J5 output is read as written, with
its own caution that the probe's `why` pattern matches the new alert title).

## Not verified

- A real failed run: the failed-run page was seen only on an intercepted service reply (a stopped
  CP-4 with three `draft_rejected` events), not from a service run; the report's J5 evidence rests on
  the pre-T12 launcher, which I did not re-create.
- The race in finding 2 was found by reading, not reproduced (it needs the 10 s boundary to fall in a
  sub-millisecond window); the library-swap 404 was read from `update_library.py`, not provoked.
- Screen-reader announcement and keyboard order were not heard or walked; the single insertion of the
  alert is measured by the probe's and the unit test's `MutationObserver`.
- The probes of other tasks named in finding 6 were not run; their dependence on "Failed to fetch" was
  read from their source.
- `npm --prefix web run gates` in full (the remaining `test`, `audit`, `test:scripts` and
  `test:file:gates` steps) was not run; only the steps named above.
