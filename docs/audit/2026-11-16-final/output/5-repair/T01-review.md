# T01 review: stop sending the server's workspace path to the browser (C1-001, C5-001)

Reviewer: fresh agent, did not write the change. Worktree `.claude/worktrees/agent-ab170c7c60311be95`,
branch `worktree-agent-ab170c7c60311be95`, commit 55572433, base d8d3d634.

Verdict: **PASS**. No High or Medium finding. Two Low and one Info note, none needing a change to T01.

## Does it fix the cause

Yes. The cause is `catalogue()` writing `"workspace": str(workspace)` into the published catalogue
(`src/deploy_workflow/credit_os_catalogue.py`, base line 517), which `GET /connected/snapshot`
(scoped or not) forwards unchanged. The change removes the key at the writer and, because a
`data.js` already on disk (or a retained preview) still carries it, drops it again in
`_visible_scope` (`react_frontend/__init__.py:73-81`), the one function that serialises the catalogue
for `/connected/snapshot`. Both files are the files T01 names in `tasks.md`. `/connected/library`
already projected the catalogue to `real`, so it needed nothing. No other route returns the
catalogue: `sources.reply`, `artifacts.reply`, `portfolio.attested` and `_report_entries` read
`catalogue.real` or other top-level keys only.

The `_visible_scope` rebuild creates a new dict (`{**enriched, "catalogue": catalogue}`) and does not
mutate the admitted or enriched snapshot. The only other caller of `_visible_scope`'s second return
value (`_visible_publication`, used by `tests/test_react_sources.py`) still passes.

## Callers of the catalogue and /connected/snapshot

Grepped `web/`, `react_frontend/`, `apps/`, `proof/`, `src/`, `tools/`, `tests/` for every form of
`catalogue.workspace`, `catalogue["workspace"]`, `DESIGN_APP.workspace`.

- No reader of the catalogue's `workspace` anywhere. Every other `["workspace"]` / `.workspace` hit is
  the top-level `snapshot.workspace` (runs, outputs, handoffs, models), a different object.
- `web/src` reads `catalogue.real` and the catalogue's `built_at`-class fields only (`ReportLibrary.tsx`,
  `Modules.tsx`, `HeadlineFigures`, `foundationMetrics`); the `Snapshot` type is `{ real: ... }`.
- `apps/issuer-library/credit_os/web/static-boot.js:22` copies it to `window.DESIGN_APP.workspace`
  as `catalogue.workspace||''`. The only `DESIGN_APP` reads are `.problem` and `.issues`
  (`views.js:1507,1995-1997`), so the value becomes `''` and nothing observes it.
- `apps/issuer-library/credit_os/store.py` and `update_library.py` read `catalogue["real"]` and
  `["issues"]` only.
- `web/public/data.js` (the static app fixture, which the service serves at `/data.js`) has a
  different shape (`{ schema, issuers }`), so it never carried the field.

## Test weakening

One existing test changed: `tests/test_credit_os_catalogue.py::test_catalogue_lists_only_library_runs`.
It asserted `result["workspace"] == str(tmp_path)`, which is the defective behaviour. It now asserts
`"workspace" not in result` and `str(tmp_path) not in json.dumps(result)`. The `real` assertion above
it is untouched. The change is confined to the behaviour the finding requires (the second assertion
is a stricter statement of the same requirement, not a loosening). No test was skipped, no expected
value elsewhere edited, no gate loosened (`git diff d8d3d634 55572433 --stat` shows five files; nothing
under `web/`, `apps/`, `proof/`, `prompts/`, `src/deploy_workflow/signal/`).

New test: `tests/test_react_frontend.py::test_snapshot_sends_no_server_path_even_from_an_older_publication`
(two parameter cases, unscoped and `?run=demo`). It builds an older-style `data.js` with
`catalogue.workspace`, reads the real HTTP route, and asserts the key is absent, the rest of the
catalogue and `workspace.runs` are unchanged, and the service root string appears nowhere in the body.
The expected values are literals taken from the fixture, not from production code.

## Added beyond what was asked

Nothing beyond the finding. The reader-side filter is within the task's file list and is needed for
existing libraries (the task's own suggested change names `_visible_scope`); the writer-side removal
is the other option the finding names. The module docstring line was updated to match. The report is
under `output/5-repair/`, as the stage brief requires.

## Files outside T01

None. Changed files: `react_frontend/__init__.py`, `src/deploy_workflow/credit_os_catalogue.py`,
`tests/test_credit_os_catalogue.py`, `tests/test_react_frontend.py`, and the report. `web/node_modules`
shows as untracked in `git status` (the worktree set-up symlink); it is not in the commit.

## Re-run evidence

| Check | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q tests/test_credit_os_catalogue.py tests/test_react_frontend.py` | 113 passed |
| New test against the base source (a copy of d8d3d634's `src/` and `react_frontend/` in the scratchpad, the new test files copied in, run with the worktree's venv and `PYTHONPATH` set to the copy; the copy's `deploy_workflow` and `react_frontend` were confirmed to be the ones imported) | both parametrised cases fail: `assert 'workspace' not in {'real': [...], 'workspace': '/tmp/.../_engine', ...}` |
| Changed catalogue test against the base source | fails: `assert 'workspace' not in {'real': [...], ...}` |
| `timeout 580 uv run pytest -q tests/test_update_library.py tests/test_credit_os_chips.py tests/test_react_sources.py tests/test_react_admission.py tests/test_react_preview.py tests/test_react_portfolio.py tests/test_react_run_activity.py proof` | 253 passed, 2 skipped (existing "permissions are not enforced for this user") |
| C1-001 probe, own `proof.serve` from this worktree on port 8741, `C1_BASE=http://127.0.0.1:8741` | exit 0: `catalogue.workspace in /connected/snapshot: undefined`, `... in /connected/library: undefined`, `VERDICT not reproduced` |
| Whole scoped and unscoped `/connected/snapshot` bodies after that run | catalogue keys `real, illustrative, sources, built_at, issues, live, policy_locked`; no absolute path string and no occurrence of the service root |
| `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0: 0 findings, 4 changed files, 76 lines in scope |
| Static library browser tests, `tests/test_library_page_browser.py` with a `chromium` shim on PATH pointing to the headless shell | 104 passed, 1 skipped (a screenshot-writing test that needs `FORECAST_SCREENSHOT`) |

The browser run closes the implementer's "Not verified" about the static library's behaviour without
`catalogue.workspace`. The C5 probe was not run (another reviewer uses its port). I read it: it exits 0
when the leak reproduces and 1 when it does not (`snapshot-path-leak.cjs:81-83`), so the implementer's
reading (exit 1 after the repair is the passing result) is correct. The `proof.serve` on 8741 was
stopped after the probe.

## Review findings

| # | Severity | Where | Note |
| :--- | :--- | :--- | :--- |
| 1 | Low | `apps/issuer-library/credit_os/web/static-boot.js:22` | `workspace: catalogue.workspace||''` is now a dead assignment (nothing reads `DESIGN_APP.workspace`). Outside T01's files and the file is hash-pinned in `apps/issuer-library/credit_os/SOURCE.md`; leave for the stage 6 sweep, no change to T01. |
| 2 | Low | `src/deploy_workflow/credit_os_catalogue.py:220,417` | `issues` entries append the text of a caught exception (`({error})`), which for an `OSError` can name an absolute path. Unusual input, outside C1-001's probe; the implementer parked it under R3 and I agree. If a future probe shows an ordinary-input path in `issues`, register it separately. |
| 3 | Info | `output/4-register/tasks.md` T01 probe list | The second probe (`snapshot-path-leak.cjs`) is labelled `(exit)` and filed under C1-001, but it is the C5-001 `output` probe and its exit code is inverted (0 = leak present). The implementer's report says so. The lead should read the C5 probe by its `RESULT:` line, not its exit code. |

No High or Medium findings, so nothing goes back to an implementer.

Not verified: the C5 probe (`snapshot-path-leak.cjs`, port 8735) was not run by me, by instruction; a `data.js` published by an earlier build was not run end to end through a real browser against the connected app (the service-level test feeds one in directly, and the static library tests build `data.js` fresh); `npm --prefix web run gates` and `proof:connected` were not run (no `web/` file changed; they belong to stage 5 step 10); no live run; the `issues`-text path (finding 2) was not probed; the second, adversarial read that the stage brief requires for security code is not part of this review.
