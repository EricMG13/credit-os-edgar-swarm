# T10 adversarial review (C2-008)

Reviewer: second, adversarial. Model: Opus 5.5 (claude-opus-5-5), medium effort. Did not write T10.
Commit reviewed: 39247ded on base 6aea8e52 (`git diff 6aea8e52 39247ded`). No code file edited.

## Verdict: PASS

No High or Medium defect found. Eviction removes only unsealed drafts that have no upload in flight
and no issued approval, and that have been idle for at least 2 hours. It runs under `_LOCK` and
removes only as many as the ceiling needs. A request for an evicted draft gets a 404 "unknown
submission". The page then drops the draft and, on the next try, makes a new one and re-uploads the
analyst's own files. Three Low observations follow.

## What was tried

Scratch pytest (12 cases, outside the repository, run against the worktree's code). All passed or
printed as described:

- A sealed (submitted) draft aged 3 h is never counted or removed. A draft with `issued` or with a
  `_PENDING` reservation is kept (the implementer's tests cover this too).
- Submit cannot race eviction. `_record_for` requires `issued == approved == current`, and a draft
  with `issued` is never evicted. `seal()` takes `_LOCK` and a sealed draft is no longer open. A
  failed Submit unseals, which renames inside the folder and refreshes its mtime, and `issued` is
  still there. T08: a repeated Submit returns the record before any folder access, so it is unaffected.
  T09: `refuse_filed_elsewhere` reads run records, not drafts, so it is unaffected.
- Ordering: the oldest by mtime goes first. Ties are broken by path, so the order is fixed. With 3
  aged drafts, the first `new()` removes only the oldest and the second removes one more. A future
  mtime is never idle, so the draft is refused rather than evicted. Copies made without `-p` look
  fresh, so they are safe. A forward clock jump of 2 h or more would make live drafts look idle
  (Low, below).
- Flood: 40 threads call `new()` at a 10-draft ceiling holding 5 fresh and 5 aged drafts. Exactly 5
  calls succeed. All fresh drafts survive and the open count stays at 10. Nothing touched in the
  last 2 h is removed, however many forms are opened.
- Path safety: `files` symlinked to an outside folder is evicted, but `rmtree` removes only the
  link and the outside file survives. An id-named symlink in `uploads/` is never counted or followed.
  Names must match `_ID`.
- Partial delete: when `rmtree` raises, the folder is logged and kept, and `new()` returns the
  "too many" refusal (400), not a 500.
- Evicted draft: `add_file`, `remove_file`, `reading`, `seal` and `issued` all raise
  `Refused("unknown submission")`, which the service maps to 404. `_record_issued` re-checks
  `folder.is_dir()` under `_LOCK` and the sid is never reused, so no digest can be issued for an
  evicted draft. Submit therefore cannot start a run with no documents or with another draft's
  documents.

Live walks (proof.serve, port 8760, roots under /tmp/cs-C2/, each service stopped, port free after):

- The implementer's `walk-abandoned-drafts.cjs` with `C2_PORT=8760` exited 0 and all five checks were ok.
- Scratch walk: a page reaches Purpose with 3 files, its draft is aged 3 h, and 49 other drafts are
  made. The next `POST /api/submissions` returns 200 and evicts the page's draft. `reading`, upload
  and delete on it each return 404 `{"error": "unknown submission"}`. "Review run" shows the alert
  "unknown submission". With room on the ceiling, a second "Review run" makes a new draft,
  re-uploads the same three files from the browser and draws the review. No page errors. With the
  ceiling full of live drafts, the retry shows "too many unfinished submissions; try again later",
  which is correct.
- `pytest tests/test_run_start_submissions.py tests/test_run_start_scheduler.py`: 251 passed, 3 skipped.
  `quality_gate.py --base 6aea8e52`: 0 findings.

## Findings

1. Low, `src/deploy_workflow/run_start/submissions.py:622-625`, within T10. `reading()` touches the
   draft outside `_LOCK`. A `new()` that had already chosen this draft can still `rmtree` it
   mid-read. Simulated: `reading` then returns `error: "--sources the uploaded documents: not a
   folder"`. That is not a 500, but it is not the truthful "unknown submission" either. The window
   is the `rmtree` time, and the next request gets the 404.
2. Low, `src/deploy_workflow/run_start/submissions.py:205` (and the page's 404 text), within T10's
   finding. The reader message after eviction is a bare lower-case "unknown submission". It does
   not say the draft was released after 2 hours idle, or that pressing the button again re-sends the
   documents. The refusal at a full ceiling still says only "try again later". C2-008's expected
   result asks that "a refusal states how to recover".
3. Low, `src/deploy_workflow/run_start/submissions.py:185`, within T10. Idleness compares wall-clock
   `time.time()` with folder mtime. A forward clock step of 2 h or more makes every live draft look
   idle at the ceiling. The 24-hour sweep has the same dependency, so the eviction does not add a
   new kind of risk. `summary()` does not touch the draft, but the page calls `reading` (which
   touches) before each summary, so this does not matter in practice.

Residual already stated in T10.md, and confirmed: a form idle for more than 2 h before its review,
when the ceiling is reached, loses its server draft. The page recovers by re-uploading from the
browser.
