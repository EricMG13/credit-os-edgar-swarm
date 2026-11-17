# T08 review (round 1)

Reviewer: Opus 5.5 (claude-opus-5-5), medium effort. Change: commit `8ef4b55d` on `worktree-agent-a695c68499424f15c`,
base `0bf18aeb`. Implementer: Sonnet, medium effort (per the report).

Verdict: **PASS** (no High or Medium finding; two Low notes below).

## What I checked

### 1. The retry sentence ("Submitting again is safe. The service starts one run for this approval and returns that run if it already exists.")

The sentence is shown only in the `else` branch of `submitReviewed` (`StartRun.tsx`, `lostSubmitText`): a TypeError (no
answer) or any status other than 400/404. A 400/404 clears the review and says "Review the run again before submitting."
Traced in `src/deploy_workflow/inbox/scheduler.py` `submit` (:299-334), `_record_for` (:336-382), `_put` (:396),
`runs.save` (atomic `os.replace`, nothing after it), `submissions.seal` (:213, returns at once when already sealed),
and `run_start/service.py` `_post`/`_submit`/`_require_shown_cap`:

- Reply lost after the run was recorded: the whole of `submit` runs under `self.lock`; a repeat validates the same
  answers, then finds the record by `record.submission == sid` (:313-315) before touching the upload folder, the digest or
  `release`'s removed folder, and returns it. `_require_shown_cap` compares the header with the fixed cap table, not the
  folder. Same run returned, no second record. `_records` is rebuilt from `state/*.json` on start, so this holds across a
  service restart. A repeat that arrives while the first is still inside `submit` waits on the lock and gets the record.
- Refused (400/404): nothing is sealed or recorded (seal comes after every check; a refusal in `_record_for` unseals).
  The page does not show the sentence on this path; a repeat would be refused again or, if the cause went away, start the
  one run.
- 500 before recording: `_record_for` raising (including `runs.save` failing before its `os.replace`) unseals; no record
  exists, so a repeat starts exactly one. A 500 after `_put` (the `os.rename` of the sealed folder) leaves the record in
  `_records`; the repeat returns it and the poll finishes the move.
- Draft sealed, no record (process killed between `seal` and `_put`): `seal` is idempotent for a sealed folder, and
  `_record_for` deletes a left-over `context.json`, so a repeat records one run.
- `tests/test_run_start_scheduler.py::test_submit_twice_and_from_two_threads_gives_one_run` covers the repeat.

No path found where a repeated Submit starts a second run or a second paid call. The sentence is true; no High defect.

### 2. J1-004: native `required` removed

The native `required` acted only on the form submit of the More context step (the period inputs exist only there). Every
path to Review run goes through `makeReview` -> `prepareReview` -> `makeAnswers`, which now throws
`FieldProblem("current_period" | "prior_period", ...)` when `earnings` and the value is empty (values are trimmed on
change, so blanks are empty); `stepOfField` maps both to `context`. No review sheet, and so no Submit, exists without
`makeAnswers` succeeding. The block is at least where the browser's was (the check runs after the documents are re-read,
so one request is made first; harmless). Walk: "Review run with both empty gives the page's own alert ... native ''",
then Prior period, then the review opens.

### 3. C2-004 and C2-006: no raw service text

Load failure: fixed title and body, Try again; "boom: internal", the HTML body and "Failed to fetch" are not shown (walk,
three cases). Submit 400/404: "Documents or answers changed after approval. Review the run again before submitting." /
"Unknown submission. Review ...". Submit 500: the service's own 500 text is the fixed "the service failed; see its log"
(service.py:29), drawn as a sentence; an HTML 500 gives the api's fixed "(500)" sentence. The summary-step refusal left
as written (`StartRun.tsx:1554`) is drawn alone, not run into a next sentence, and C2-006's actual lists the Submit
refusals and "Failed to fetch" (already fixed text via `errorText`); leaving it is acceptable under the finding's wording.

### 4. J2-013 at 1440 px

Re-ran the probe under the 8762 lock (1440 x 900, `_j2lib.cjs:75`): exit 0,
`{"alerts":[{"text":"The page lost contact with the service, so it cannot tell whether the run started. Submitting again is safe. ...","top":787,"inViewport":true}],"viewportHeight":900,"mainScrollTop":3158,"active":"Submit run"}`.
One alert, 787 px, in the viewport; walk puts Submit at 873 px. The verdict line ("NOT REPRODUCED") was not used.

### 5. `useResource` callers

Callers: `StartRun.tsx`, `ReportLibrary.tsx:433`, `report/Record.tsx:181`, `report/PortfolioBasis.tsx:39`,
`report/ArtifactDownloads.tsx:21` (all destructure `value`/`error` only); `LibraryIndex.tsx` and `RunProgress.tsx`
import only `isUnreachable`. The added fields are additive and `attempt` stays 0 unless `retry` is called, so the effect
runs exactly as before for them. Nothing under `web/src/pages/signal/` imports `useResource`.

### 6. Changed existing tests

`ConnectedApp.test.tsx:408` and `:2371` change the asserted wording from "Retrying Submit run is safe" to "Submitting
again is safe" (the defective sentence the findings name); `:819-822` and `:3210-3211` change only the label lookup to
`/^Current period/`, `/^Prior period/` because the label now carries "(required)"; `toBeRequired()` still holds via
`aria-required`. No expected value weakened, none skipped.

### 7. The two probes that can no longer pass, and the walk in their place

- `j1-004-earnings-update-required-periods.cjs:8` waits for `main p` matching `/^Optional\./` before it reads anything;
  re-run under the 8761 lock: exit 1 with `TimeoutError ... waiting for locator('main p').filter({ hasText: /^Optional\./ })`.
- `p12-states.cjs:32` calls `getByText("Loading run options…").evaluate(...)` in its first block with no catch, so it
  stops there on a skeleton.
- `walk-t08.cjs` checks the same facts with real assertions. On a scratch build of base `0bf18aeb` (`git archive`, built,
  same port) it exits 1: "loading: no 'Loading run options…' sentence" FAIL, "status region" FAIL, "500 json ...
  no raw text" FAIL (`[boom: internal]`), "intro is not shown" FAIL, then it stops at the missing Try again button. On the
  repaired build: exit 0, every check held. Honest evidence, with the limit in Low 2.

### 8. Files

`git diff --stat 0bf18aeb 8ef4b55d`: `StartRun.tsx`, `useResource.ts`, `useResource.test.ts`, `ConnectedApp.test.tsx`,
`T08.md` and the `T08/` folder. All inside the task. `api.ts` unchanged.

## Re-runs (this review)

| Command | Result |
| :--- | :--- |
| `cd web && timeout 300 npx vitest run src/pages/connected` | exit 0, 51 files, 1029 tests |
| `npm --prefix web run lint` / `format:check` / `typecheck` / `unused` | 0 / 0 / 0 / 0 |
| `timeout 600 npm --prefix web run build` | 0 |
| `C2_PORT=8748 node .../5-repair/T08/walk-t08.cjs` (repaired) | exit 0, every check held |
| same walk on a scratch build of base | exit 1, 5 checks failed (above) |
| T07 walks `carried-work`, `case-date`, `leave-and-return`, `payload`, `random-steps` (8748) | each exit 0, every check held |
| J2-013 probe under the 8762 lock | exit 0, values above |
| J1-004 probe under the 8761 lock | exit 1, TimeoutError on `/^Optional\./` (as the report says) |

## Review findings

- **Low** `web/src/pages/connected/StartRun.tsx:1349-1358`: when the service answered, the alert's title and body open
  with the same sentence ("The run options could not be loaded" / "The run options could not be loaded. Try again, ..."),
  and the body says "Try again" beside a "Try again" button; the body could carry only the "ask whoever runs the
  service" sentence. Wording only, not a defect against C2-004.
- **Low** `docs/audit/2026-11-16-final/output/5-repair/T08/walk-t08.cjs:57`: at base the walk stops at the first missing
  Try again button, so its Submit (C2-006, J2-013) and Earnings Update (J1-004) sections are never seen failing on base;
  their "before" rests on the original probes' base output in the report (`T08/probe-output.txt`), which is consistent.

Not verified: no screenshot compared by eye; no real two-Submit run against the service with a dropped reply (the
one-run claim is from reading `scheduler.submit` and re-running `tests/test_run_start_scheduler.py -k submit_twice`, 1 passed); `p12-states.cjs`
not re-run (judged from its source); the live (non-synthetic) Submit dialog only through the unit tests.
