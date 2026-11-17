# T01 adversarial review (second read): the server's workspace path in /connected/snapshot

Reviewer: adversarial, fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch `worktree-agent-ab170c7c60311be95`,
commit `55572433`, base `d8d3d634`. No code file edited; scratch probes are under the session scratchpad,
not the repository. Date 2026-11-17.

## Verdict: CHANGES NEEDED

One Medium finding (R-1) is open against the claim the change makes for an "older publication". The
named defect (C1-001 / C5-001: `catalogue.workspace` in `/connected/snapshot`, scoped and unscoped) is fixed
and the C5 probe confirms it. R-1 is the same field on a sibling route, which the change's own reasoning
for its second half covers on one route and not on the other. If the lead rules `/library/*` out of T01,
the only change still needed is the wording in R-4, and the verdict is then PASS.

## Findings

| # | Severity | Where | Reason | Scope |
| :-- | :--- | :--- | :--- | :--- |
| R-1 | Medium | `src/deploy_workflow/run_start/service.py:254-255` (inherited by `react_frontend/__init__.py:373`); T01's filter is `react_frontend/__init__.py:77-79` | `GET /library/data.js` is the library file served byte for byte, outside `_visible_scope`. A `data.js` built before the repair (a retained preview, `react_frontend/preview.py:51`, or a failed rebuild) still repeats `catalogue.workspace`, and the browser holds it. | New observation (same field and cause, a route C1-001/C5-001 did not name) |
| R-2 | Medium | `react_frontend/run_activity.py:252` (`"held": snapshot["held"]`) | `/connected/activity` sends `held` unscrubbed, while `reason` and `held_reason` go through `_shown`. After a library rebuild failure the root path is in the body. | New observation, not T01's field; belongs with T03 (same file) or the register. Does not gate T01. |
| R-3 | Low | `src/deploy_workflow/credit_os_catalogue.py:220,417` and `react_frontend/sources.py:194` | The `{error}` issue text reaches the scoped snapshot too (`catalogue.issues` is not scoped; only `activity` is blanked), not just the unscoped one. Only on an OS-level read failure. | New observation; the implementer's parking under R3 is right, its note is incomplete |
| R-4 | Low | `tests/test_react_frontend.py:483`, `react_frontend/__init__.py:78` | The test docstring says "no reply repeats it" and the comment says "no page needs it"; R-1 shows a reply that repeats it. | Within T01 (accuracy of the claim) |
| R-5 | Low | `docs/audit/2026-11-16-final/output/4-register/tasks.md` (T01 probes) | tasks.md labels `snapshot-path-leak.cjs` `(exit)`; the register has `probe_signal: output`, and the probe exits 0 when the leak reproduces and 1 when it does not. After a correct repair it exits 1. Read the output, not the code. | New observation (already noted by the implementer) |
| R-6 | Info | `apps/issuer-library/credit_os/web/static-boot.js:22` | Dead `catalogue.workspace\|\|''`. I loaded the static library in the headless browser without the field: no problem, one run listed, no page error. Leave to the sweep. | New observation (implementer's note confirmed) |

### R-1 evidence

Scratch probe `adv.cjs` (port 8755, root `/tmp/t01adv`): a completed synthetic run, then `catalogue.workspace`
put back into `_engine/library/data.js` as an older build wrote it, then every endpoint fetched and each body
searched for the root.

```
=== B. older publication (catalogue.workspace in data.js)
/connected/snapshot                  200  root=-
/connected/snapshot?run=<run>        200  root=-
/connected/library                   200  root=-
/library/data.js                     200  root=LEAK  abs=["/tmp/t01adv/_engine"]
```

`adv2.cjs` (headless browser): on the older `data.js`, `/library/index.html` ends with
`window.DESIGN_APP.workspace === "/tmp/t01adv2/_engine"`; the connected report page's own snapshot is clean.
So the connected app is covered and the static library, served by the same service, is not.

Why it is Medium and not High: `Scheduler.__init__` calls `_rebuild()` (`scheduler.py:173`), so every
service start replaces `data.js` with one built by the new writer. I proved it (`restart.py`: planted an old
`data.js`, started the service again, `workspace in data.js? False`). The older file survives only in a
retained preview (`preview.serve_preview` rewrites the retained snapshot after start) or when the rebuild
fails. This is also why the read-side filter and this raw route cover the same population, so covering one
and not the other is inconsistent.

Resolutions, either is enough:

1. Close it in `react_frontend/__init__.py`: answer `/library/data.js` from the publication with the key
   removed (re-emit the `window.CREDIT_OS_DATA=...;` assignment). Check the static library still loads and
   that retained-preview bytes are acceptable to change (the preview keeps exact handoffs).
2. Rule `/library/*` out (the file is served as published and the rebuild replaces it at every start), and
   correct R-4 and the T01 report so neither claims the older publication is fully covered.

### R-2 evidence

Scratch `rebuildfail.py`: `cpos_launch.update_library_at` made to raise
`PermissionError(13, "Access is denied", "<root>/_engine/library")` (a locked folder on the Windows work PC is
the plausible cause), one `scheduler.step()`:

```
/activity.js          ROOT PRESENT | "held": "the library could not be rebuilt ([Errno 13] Access is denied: '/tmp/t01rb/_engine/library'); ended runs wait for it"
/connected/activity   ROOT PRESENT | "held": "the library could not be rebuilt ([Errno 13] Access is denied: '/tmp/t01rb/_engine/library'); ended runs wait for it"
```

`run_activity.py:227-231` says "absolute paths are not sent"; `listing()` applies `_shown` to `reason` but not to
`held`. `/activity.js` is raw by design (`service.py:256-257`), so scrubbing only `held` in `listing()` leaves that
route. Not on a normal run (`/connected/activity` is clean in probe A).

### R-3: the `{error}` question, decided

Question: does `credit_os_catalogue.py:220,417` put an absolute path into `issues` on ordinary inputs?
Answer: only on unusual inputs. Evidence:

- Ordinary synthetic run: `issues` is `[]` in `data.js` (probe A, `activity.issues: []`), and scratch
  `test_ordinary_run_has_no_issues` passes (`issues == []`, `"workspace" not in result`).
- Every `Refused` message in `library_index.py:85-143,177-305` is built from `relative` (a name below the
  run), never an absolute path. `ContextRefused` text is a JSON pointer plus a message
  (`deploy_vii/context.py:324-409,829-892`), no file path. Other issue producers use
  `type(error).__name__` (`update_library.py:95,110`, `library_index.py:561`, `sources.py:107`) or `describe()`
  (type plus 80 characters).
- A path needs an `OSError` from reading a file that already passed the lstat, regular-file and link checks:
  permission, a sharing lock, an I/O error, a deletion race. Reproduced only by forcing it
  (scratch `test_adv_issues.py`): `run-a: delivery not catalogued ([Errno 13] Permission denied:
  '/tmp/pytest-of-root/.../runs/run-a/deliveries/<sha>/CP-1.md')`.
- Reach (new fact): `catalogue.issues` is part of every snapshot, scoped or not; `activity.issues` only
  unscoped (`sources.py:194` keeps the catalogue whole; `scoped()` sets `"activity": {}`). Scratch
  `issues_scope.py` shows the root in both bodies. Nothing draws either list (`web/src/pages/connected` has no
  reader; `Record.tsx:40,156` is a different `issues`).
- A locked file is plausible on the Windows work PC, so a one-line change to `type(error).__name__` in the two
  f-strings would match the existing convention. Park under R3 as the implementer did, with the reach above.

## What I attacked that held

- Ordinary synthetic run, every endpoint (probe A): `/connected/context`, `/connected/snapshot`,
  `/connected/snapshot?run=`, `/connected/library`, `/connected/activity`, `/connected/activity/<run>`,
  `/connected/reports`, `/connected/report/<run>`, `/connected/artifacts/<run>`, `/connected/portfolio/<run>`,
  `/api/runs/<run>`, `/api/runs/<run>/inputs`, `/library/data.js`, `/library/index.html`, `/activity.js`,
  `/data.js`, `/`: no occurrence of the root and no absolute path (substring search, not the C5 probe's
  whole-string match).
- Older publication, connected endpoints: scoped and unscoped snapshot and `/connected/library` are clean.
- Layer: `_visible_scope` is the only serialiser of the publication for both snapshot routes; `Handler._publication`
  (the other caller) also goes through it. `_read_publication` guarantees `catalogue` is a dict, so the filter
  cannot raise on a malformed file. `sources.enrich` deep-copies, so nothing shared is mutated. Key order and
  the rest of the catalogue are unchanged (the new test asserts equality).
- Fixed 500 text (`http_base.py:228-234`): error bodies carry no exception text.
- Consumers of `catalogue.workspace`: none in `web/src`, `web/scripts`, `apps/`, `proof/`, `tools/`, `tests/`;
  the static library reads it into `DESIGN_APP.workspace`, which nothing draws. Browser check: the library page
  loads the freshly built `data.js` with no problem and no error.
- Tests: the new test fails against the base `react_frontend/__init__.py` (`assert 'workspace' not in {...,
  'workspace': '/tmp/.../_engine', ...}`, both parametrisations; scratch copy of HEAD with the base file) and
  passes at HEAD. The one changed existing assertion encoded the defect and is replaced by the behaviour the
  finding requires; nothing skipped or loosened. Files changed are inside T01's two files plus their tests.

## Commands run

| Command | Result |
| :--- | :--- |
| `timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C5/probes/snapshot-path-leak.cjs` | exit 1; `absolute paths in the snapshot: []`; `/connected/library catalogue.workspace: null`; `RESULT: no absolute workspace path in the snapshot` (the passing result for this inverted probe) |
| `pytest -q tests/test_react_frontend.py tests/test_credit_os_catalogue.py` | 113 passed |
| `pytest -q tests/test_update_library.py tests/test_credit_os_chips.py tests/test_react_preview.py tests/test_react_sources.py tests/test_react_admission.py` | 232 passed, 2 skipped (existing "permissions are not enforced for this user") |
| `uv run python tools/quality_gate.py --base d8d3d634...` | exit 0, 0 findings, 4 changed files, 76 lines in scope |
| Scratch: `adv.cjs`, `adv2.cjs` (8755), `restart.py`, `rebuildfail.py`, `issues_scope.py`, `test_adv_issues.py` | as quoted above; every service stopped, `/tmp` roots removed |

Not verified: the C1 probe `c1-001-snapshot-leaks-workspace-path.cjs` (not run: port 8741 belongs to the other
reviewer; its field, `catalogue.workspace` in the scoped snapshot, is covered by my probe A and B); a path in the
handoff text or source names written by an older builder (only the fresh synthetic run and one planted field
were exercised); the `/api/runs/<id>` `reason` on a launcher that fails to start (`scheduler.py:637-658` writes
`could not be started: {error}`; read, not run); a real Windows path or a locked file (the OSError cases were
forced with a raised `PermissionError`); the browser tests `tests/test_library_page_browser.py` (not run here;
I loaded the static library page directly with the headless shell instead); any live run.
