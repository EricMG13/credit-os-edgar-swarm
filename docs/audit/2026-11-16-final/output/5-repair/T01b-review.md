# T01b review: an OSError's kind, never its path, in source warnings and the rebuild note (R1-007, R1-008)

Reviewer: fresh agent, did not write the change. Read `AGENTS.md`, the audit `README.md` (R3, R5), `stages/5-repair.md` step 5,
`WORKER-NOTES.md` (Reviewer output), `T01b.md` and `T03.md`. Worktree `/home/user/credit-os2/.claude/worktrees/agent-abe2611a17b373b32`,
branch `worktree-agent-abe2611a17b373b32`, commit `d0911f56`, base `d7b1e66f`. No code file was edited. Scratch work is under the
session scratchpad (`t01b-review/`), never the repository. Date 2026-11-17.

## Verdict: PASS

Both findings are fixed at their cause, one choke point each. Nothing High or Medium. Seven Low or Info points follow, one of them (F5) a
same-class leak outside T01b's files that the lead should route.

## What I checked

| Question | Answer |
| :--- | :--- |
| R1-007 fixed at the cause | Yes. `react_frontend/sources.py:225-231` (`_problem`) is the one place an `OSError` becomes stored text; both producers (`_load_source` at :240, `verified` at :255) use it. An `OSError` becomes `<folder>/inputs/<sha>` or `<folder>/workflow.json` plus `could not be read (<kind>)`. No `str(error)` of an `OSError` remains in the file: the only other `str(error)` (:264) sits in `except ValueError` and carries `Refused` text. |
| Everything in `sources.py` outside the warning unchanged | Yes. `git diff` shows only `_problem` (new) and the two call-site lines. `SourceMismatch`, `Checked`, `_identity`, `_source`, `verified_one`, `scoped`, `reply`, the links and chips code are untouched. |
| The chip `reason` change | Not extra work: it is the same defect. `Checked.cache` holds one problem string per source; `Pages.get` returns it as the chip `reason` (`credit_os_chips.py:543-546, :583`). At BASE I forced a `PermissionError` and the chip `reason` held `[Errno 13] Permission denied: '/tmp/pytest-.../_engine/runs/retained-01/inputs/<sha>'`, the same path as the warning. Leaving it would keep the absolute path on `/connected/snapshot` (R3: a leaked path is always repaired) and would need a second string kept apart for no reader gain. The report discloses it and the new test asserts it. Accept. See F1. |
| `Refused` and `SourceMismatch` keep their text | Yes, exactly. In scratch (new code, real files): tampered input gives `source bytes do not match recorded sha256` for both warning and chip reason; missing input `retained-01/inputs/<sha> is missing`; missing `workflow.json` `retained-01/workflow.json is missing`; a link `retained-01/inputs/<sha> is a link`. All path-free. See F2 for the test gap. |
| R1-008 fixed at the cause | Yes. `scheduler.py:419` passes `type(error).__name__` as the note argument; `_rebuild_failed` (:433-441) builds `_rebuild_error` from it. `_REBUILD_FAILED`, the fixed `update_library.py not found` note and the held-note join (:474) are unchanged. `_rebuild_error` is set nowhere else. |
| `watcher.log` keeps the full error | Yes. The log text `library rebuild failed: {error}` and `logger.exception("library rebuild failed")` are unchanged; the deduplication key is still the log text with the full error, so two different errors of one kind are still each logged. The new test asserts `Permission denied: '<path>'` is in the log, and my scratch run with four error types asserted the path is in the log and not on the page. |
| `/connected/activity` still shows T03's sentence | Yes. `run_activity._REBUILD_NOTE` (`run_activity.py:280-282`) is `\(.*?\)`, so it takes any kind. I ran `_in_readers_words` on `...(PermissionError); ended runs wait for it`, on `...(OSError)...; daily limit reached` and on the `update_library.py not found` note: each returns `_NOT_REBUILT`, the joined case keeps the second note. `run_activity.py` is untouched and `tests/test_react_run_activity.py` passes. |
| `/activity.js` has no path on a forced error | Yes. It is served as written (`run_start/service.py:256-257`, `direct=True`). The new test reads that file after a `PermissionError` naming `<root>/runs/<run>/inputs/<sha>`. My own scratch test forced `FileNotFoundError`, an `OSError` whose text (no filename) holds `/abs/x/workflow.json`, a `ValueError` and a `KeyError` with a path in the message: the note was `(FileNotFoundError)`, `(OSError)`, `(ValueError)`, `(KeyError)`, and neither `/abs/x` nor the root was in the file; `/abs/x` was in the log each time. |
| The three existing tests | Changed only from the error text to the kind, as the finding requires. `test_an_unexpected_rebuild_error_does_not_stop_the_scheduler`: parametrize gains `kind`, the expected note carries `RuntimeError` / `TypeError`; the `"surprise" in _log(root)` line is unchanged. `..._f5_the_page_says_why_...`: `(library is a link)` to `(ValueError)`; the test raises `ValueError("library is a link")`. `..._f5_both_notices_are_joined...`: `(locked)` to `(OSError)`; the test raises `OSError("locked")`; the `; daily limit` tail is kept. Nothing was skipped, no expected value in an unrelated assertion changed, `test_r6_...` still asserts `"library locked" in _log(root)`. |
| Files outside T01b's | None. `git diff --name-only d7b1e66f d0911f56`: the report, `react_frontend/sources.py`, `src/deploy_workflow/inbox/scheduler.py`, `tests/test_inbox_scheduler.py`, `tests/test_react_sources.py`. `web/node_modules` is the untracked worktree symlink. |
| Failing first | Reproduced. I extracted `d0911f56` into the scratchpad, put the two production files back to `d7b1e66f`, and ran `tests/test_react_sources.py tests/test_inbox_scheduler.py tests/test_react_run_activity.py tests/test_react_frontend.py`: `9 failed, 205 passed` (the 4 new sources cases, the new scheduler test, the 2 `surprise` cases, the 2 f5 tests). With the repaired files the same copy passes. |

## Commands re-run

| Command | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q tests/test_react_sources.py tests/test_inbox_scheduler.py tests/test_run_start_scheduler.py tests/test_react_run_activity.py tests/test_react_frontend.py tests/test_inbox_activity.py tests/test_credit_os_chips.py` | `425 passed, 3 skipped` (the skips: `test_inbox_activity.py:188` and `test_credit_os_chips.py:309, :424`, all "root / permissions are not enforced for this user"), exit 0 |
| `timeout 600 uv run python tools/quality_gate.py --base d7b1e66f` | `0 finding(s) in 4 changed file(s), 223 line(s) in scope`, exit 0 |
| Failing-first run against BASE production files (scratch copy) | `9 failed, 205 passed` |
| Scratch adversarial tests (scratchpad, not in the repository) | 25 + 4 passed; outputs quoted above |

## Findings

| # | Severity | Where | Reason |
| :-- | :--- | :--- | :--- |
| F1 | Info | `react_frontend/sources.py:240` | The chip `reason` for the same source changes with the warning because both read one `Checked.cache` entry. Justified (above); the task text says "sourceWarning only", so the lead should note that the chip reason is repaired by the same line. No action. |
| F2 | Low | `tests/test_react_sources.py:287-318` | The new test proves the `OSError` path and the absence of any root path, but no test pins the `Refused` / `SourceMismatch` warning text (`test_failed_original_keeps_pinned_identity_and_specific_problem` checks chip-reason substrings `sha256` / `missing`; `test_legacy_chips_survive_missing_workflow_authority` checks only that `sourceWarning` exists). A later change that put the kind on every error would keep those green. I checked the exact texts in scratch and they hold. A one-line exact assertion for the missing and tampered cases would pin it. |
| F3 | Info | `react_frontend/sources.py:240, :255` | The task note's `<run>/inputs/<sha>` is relative to the runs folder (it starts with the run id), the same form as `read_inside`'s own refusals (`<run>/inputs/<sha> is missing`). The lead's words were "run-relative name"; relative to the run folder would be `inputs/<sha>`. The implementer flagged the choice. The run-id form keeps the unreadable and missing sentences in one shape and the Evidence page may show ids, so I would keep it. The lead decides. |
| F4 | Info | `react_frontend/run_activity.py:278-279` | Stale comment: "with the library's error in parentheses" now holds the error's kind. The file is outside T01b and the regex is correct; fix only if a later task touches the file. The static issuer library (`apps/issuer-library/credit_os/web/views.js:1851`) draws the note as written, so its reader now sees `(PermissionError)`; that is what L10 asked for. |
| F5 | Medium (outside T01b; for the lead to route) | `src/deploy_workflow/inbox/scheduler.py:545, :639, :660, :675` | The same class remains one function away. Run reasons `could not be filed: {error}`, `could not be started: {error}` and `stopped by the scheduler: its record could not be saved ({error})` are stored with the OS text and `/activity.js` serves `asdict(record)` raw. Reproduced in scratch: `runs.start` raising `FileNotFoundError(2, "No such file or directory", "/abs/launcher/run.py")` leaves `could not be started: [Errno 2] No such file or directory: '/abs/launcher/run.py'` in `activity.js`. T03 maps these only for `/connected/activity`; the raw route was not covered. L10 limited T01b to the rebuild note, so this is not a T01b defect. R3 says a leaked path is always repaired: a task should take it (and `test_a_start_that_raises_oserror_fails_the_run...` at `tests/test_inbox_scheduler.py:852` asserts the stored reason text, which such a task would change). |
| F6 | Info | `react_frontend/sources.py:264` | A `workflow.json` that is not UTF-8 gives the warning `'utf-16-le' codec can't decode byte 0x7b ...` (`UnicodeDecodeError` is a `ValueError`). Path-free, so not a leak; unreadable to the reader, unchanged by this task and a hostile-input case (R3: register and park). |
| F7 | Info | `docs/audit/2026-11-16-final/` stage 5 step 9 | The Evidence warning and the held note are text a reader sees. The branch-level fidelity check (`VERIFICATION.md`, scope: the Evidence warning and the run-activity held note) should list them. Not per task. |

## Not verified

- The implementer's browser scratch check (`proof.serve`, ports 8757, phase A and B): not re-run. I covered the same ground without a browser: the real `Scheduler` writing `_engine/activity.js` and `sources.enrich` over a synthetic run in a scratch copy, plus the unit-level run_activity mapping. The served route is `contained_file` on that file, read from `run_start/service.py:256`.
- The Evidence page and the static library drawing the new texts in a browser.
- A real `chmod 000` read: I run as root, so permissions are not enforced (the three skips); both new tests and my scratch tests force the `OSError` at `Path.read_bytes` or `os.stat`, as L10 allows.
- A real library rebuild failing inside `pinned_context` or `update_library.handoff_zip`: the forcing is at `update_library_at`.
- Other call sites that could carry OS text to a served route (F5; `credit_os_chips.Pages.read` at `:548`, which I judged unreachable from the snapshot because `_refresh` fills `Checked.cache` for every published source; `apps/issuer-library/credit_os/source.py` `describe`, T01).
- `/library/data.js`, any live run, the web gates and Signal (no `web/` or Signal file changed), the full suite (weekly CI).
