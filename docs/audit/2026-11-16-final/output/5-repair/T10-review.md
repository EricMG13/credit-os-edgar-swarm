# T10 review (C2-008)

Reviewer: Claude Opus 5.5, medium effort. Diff `6aea8e52..39247ded` (worktree
`agent-abccbe877b31f2ea6`). I did not write this change and edited no code file.

## Verdict: PASS

## Does it fix the cause

Yes. The cause was that `new()` refused at `MAX_OPEN = 50` unsealed folders and only the 24-hour
sweep freed one, while the page leaves a draft behind for every abandoned form. `new()` now, at
the ceiling only, calls `_make_room` (`submissions.py:179-195`), which removes the oldest drafts
idle for `IDLE_SECONDS` (2 hours), as many as needed for one slot, and refuses as before if the
ceiling is still full. An abandoned form therefore holds a slot for 2 hours instead of 24.

## Which events touch a draft

The folder mtime of `uploads/<id>` is the clock. Traced:

- upload (`add_file`): temporary `.part-*` in the folder plus `_touch` (`:466`); carry goes through
  `add_file`;
- removal (`remove_file`): `_touch` (`:484`), confirmed by a scratch probe;
- reading (`reading`): new `_touch` (`:620-622`); the page reads on every Continue and before Review;
- summary: writing or removing `issued` changes the folder, and a draft with `issued` is never
  evicted here (`:190`);
- approval: client-side only; it is covered by the `issued` file the summary wrote;
- Submit: `seal` renames `files` to `sealed`, so the folder is no longer open and not a candidate.
  An upload in flight (`_PENDING`) is never a candidate (`:189`).

## An open form idle for over 2 hours

Eviction happens only when 50 unsealed drafts exist and a new form asks for one. Then a form that
has documents but has not reached the review, idle for 2 hours or more and among the oldest, can be
removed. What the page then shows (traced in `StartRun.tsx:1609-1613`, `:1670`, `:1989-1993`):
the next Continue, Review or Remove gets 404 `unknown submission`; the page drops its draft id,
clears the uploaded map and shows the alert "Unknown submission.". The chosen files stay in the
browser, so the next Continue makes a new draft and uploads them again (carried documents are
carried again). It is not a silent failure and no document the analyst chose is lost, but the
message does not say what happened or how to recover (finding 1). A form that reached the review
is kept until the 24-hour sweep. I judge this acceptable under C2-008 and R5: it changes no
control and nothing the reader sees in ordinary use (it acts only at the ceiling), and it is
narrower than the finding's suggestions (delete on page hide, reuse). No narrower rule is needed.

## Other checks

- Submit idempotence: unchanged. `scheduler.submit` returns the existing record before touching
  files; sealed or released folders are not open and are never candidates.
- T09's check (`refuse_filed_elsewhere`) is untouched; both T09 walks pass.
- Limit: still refuses with 50 live drafts (test `test_a_recently_used_draft_is_never_made_room_from`,
  probe p22 behaviour per report).
- Bounded and deterministic: candidates sorted by `(mtime, path)`; removes at most
  `count - MAX_OPEN + 1`, all under `_LOCK`; every other removal of `uploads/<id>` (`release`,
  `sweep`) also holds `_LOCK`, so no stat race. A scratch probe (MAX_OPEN 4, three idle drafts
  aged 3, 4 and 5 hours, one fresh) removed only the 5-hour one. A failed removal is logged and
  `new()` then refuses truthfully.
- Tests: no sleeps; age is set with `os.utime` at `IDLE_SECONDS ± 60 s`. The clock is
  `time.time()` in production, not injected (unlike `sweep(now)`); with a 60 s margin this is
  deterministic in practice. Expected values reference `submissions.IDLE_SECONDS`, so the
  2-hour figure itself is not pinned (finding 3).
- Files: only `submissions.py`, `tests/test_run_start_submissions.py`, `T10.md` and `T10/`. No
  symlink is committed; `web/node_modules` is an untracked symlink in the worktree (not ignored,
  so a later `git add -A` would pick it up).

## Findings

1. Low, `web/src/pages/connected/StartRun.tsx:1609-1613` (unchanged): after an idle draft is
   released at the ceiling, the next step shows only "Unknown submission."; it does not say the
   uploads were released after 2 hours idle or that Continue uploads them again (D-31). The
   unchanged refusal "too many unfinished submissions; try again later" (`submissions.py:205`)
   likewise does not state the recovery the finding's expected result asks for.
2. Low, `src/deploy_workflow/run_start/submissions.py:621`: `contextlib.suppress(OSError)` on the
   touch drops a failure without a log line, unlike `add_file` and `remove_file`; a failed touch
   silently leaves a live draft eligible for eviction.
3. Low, `tests/test_run_start_submissions.py:1866-1917`: no test pins oldest-first order or the
   "only as many as needed" bound with two or more idle drafts, and the 2-hour value is read from
   the production constant rather than stated. Behaviour verified by my scratch probe.

## Re-run

- `timeout 300 uv run pytest -q tests/test_run_start_submissions.py tests/test_run_start_scheduler.py tests/test_run_start_service.py tests/test_react_frontend.py`: 430 passed, 3 skipped.
- `timeout 600 uv run python tools/quality_gate.py --base 6aea8e52`: 0 findings in 2 changed files, 99 lines in scope.
- `timeout 600 npm --prefix web run build`: exit 0.
- `C2_PORT=8750 node .../T10/walk-abandoned-drafts.cjs`: exit 0, all five checks ok.
- T09 `walk-issuer-id.cjs` (8765 lock): exit 0, every check ok, 0 blocked requests.
- T09 `walk-remove-bad-file.cjs` (8762 lock): exit 0, every check ok.
- Scratch probes (scratchpad, not committed): eviction order and bound; removal touches the
  draft; an evicted draft answers `unknown submission` to reading, upload and files_folder.

Not verified: the page's behaviour after an eviction in a browser (traced in code only); the
before-state failure of the five new tests (not re-run on base); probe p22 itself (not re-run;
the walk covers the repair); concurrent Submit or upload during eviction under load; web lint,
typecheck and vitest (no web file changed).
