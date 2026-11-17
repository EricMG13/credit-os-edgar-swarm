# T01 adversarial review, round 3: server paths in /connected/snapshot, /connected/library and /library/data.js

Reviewer: adversarial, fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch `worktree-agent-ab170c7c60311be95`.
Attacked `git diff d8d3d634 97cb702` (round 1 `55572433`, round 2 `dd8acc5d`, round 3 `97cb702`), round 3
especially. No code file was edited and no earlier review file was touched; scratch work is under the session
scratchpad (`r3adv/`), not the repository. Services I started used port 8755 and roots under `/tmp` shorter than 80
characters; all are stopped and the roots removed. Port 8741 was not used. Date 2026-11-17.

## Verdict: PASS for T01's own change, with three Medium new observations the lead must route

Inside T01 (`react_frontend/__init__.py`, `src/deploy_workflow/credit_os_catalogue.py` and their tests) I found no
High or Medium defect. `catalogue.workspace` does not reach `/connected/snapshot` (scoped or not),
`/connected/library` or `/library/data.js` for any file shape I tried except two parked, unusual ones (F5). No text
that can reach `credit_os_catalogue.py:220` carries a server path, and no OSError, forced as a real non-root
`PermissionError`, a deletion race, a directory or a link in place of a file, puts a path into `catalogue.issues`.

The reason this is not a clean pass for the leak itself: with real OS errors, a server path still reaches
`/connected/snapshot` and `/library/data.js` through two other producers outside T01's files (F1, F2), and the report's
sentence that an uncaught OSError from the pinned context is "not a leak" is false for `/connected/activity` and
`/activity.js` (F3). All three exist unchanged at the base. If the lead reads ruling L6 as binding on every issue and
warning text in the snapshot rather than on the catalogue's own `issues`, the verdict becomes CHANGES NEEDED and the
three need files T01 may not edit (`NEEDS FILE` below).

## Findings

| # | Severity | Where | Reason | Scope |
| :-- | :--- | :--- | :--- | :--- |
| F1 | Medium | `apps/issuer-library/credit_os/source.py:264-268` (`describe`), used at `store.py:600,1042,1167,1319,1330,1580`, `evidence.py:45,116,157`, `cashflow.py:1700` | `describe()` is `type: str(error)[:80]`. For an OSError that is `[Errno 13] Permission denied: '` plus the first 50 characters of the absolute path. The text lands in `workspace.issues[]` and `activity.issues[]` of data.js, so it reaches `/connected/snapshot` (scoped: `workspace.issues`; unscoped: both) and `/library/data.js`, and the static library home draws it under "Not shown, Issues". Same symptom as R1-001 through a sibling producer; round 3 closed only the two catalogue f-strings. | New observation (NEEDS FILE `apps/issuer-library/credit_os/source.py`; one function, about ten call sites in `store.py`, `evidence.py`, `cashflow.py`) |
| F2 | Medium | `react_frontend/sources.py:232,247,256` | `sourceWarning` is `str(error)` of an OSError raised by `read_inside` (`inputs/<digest>`, `workflow.json`). `enrich()` runs on every `/connected/snapshot` request, so the full absolute path reaches `workspace.runs.<run>.evidence.sources[].sourceWarning`, scoped and unscoped, and `web/src/pages/connected/report/Evidence.tsx:455` draws it to the reader. | New observation (NEEDS FILE `react_frontend/sources.py`) |
| F3 | Medium | `src/deploy_workflow/credit_os_catalogue.py:211-217` (uncaught OSError in `pinned_context`), `src/deploy_workflow/inbox/scheduler.py:419`, `react_frontend/run_activity.py:252` | An unreadable pinned context makes `catalogue()` raise (shown end to end); the scheduler stores `str(error)` as `held`, and `/connected/activity` and `/activity.js` send `[Errno 13] ... '<abs>/inputs/<sha>'`. `buildinto.py` shows 15 more files (`workflow.json`, 14 `instructions/CP-*.md`) whose OSError also escapes `build_into`; the scheduler treats those the same way (not run end to end). T01.md round 3 says this is "old behaviour and not a leak": it is not on the three named routes, but it is a leak. This is review 1's R-2, still open. | New observation, carried (belongs with T03's `run_activity.py`); report wording is inaccurate (within T01) |
| F4 | Low | `src/deploy_workflow/credit_os_catalogue.py:220` (and 417) | Answer to question 3: line 220 cannot carry a server path, and its change removes reader-visible text. The static library draws `activity.issues` (`views.js:1625`, via `static-boot.js:16`), which holds this line, so the reader saw `context not used (<reason>)` and now sees `(Refused)` or `(ContextRefused)`; an analyst loses the validation message that says what to fix in the context. R5 says such a change is listed for the owner; `owner-decisions.md` has no entry. Lead-ruled (L6) and disclosed by the report. | Within T01, lead-ruled; record for the owner |
| F5 | Low | `react_frontend/__init__.py:94-110` (`_library_data`) | Two shapes still serve the path raw. (a) A top-level `catalogue` key given twice, the first holding `workspace`: `json.loads` keeps the last, so the first, with the path, is served byte for byte (same in round 2; the page's own object is clean, the bytes are not). (b) The prefix not at byte 0 (BOM, leading newline, `window.CREDIT_OS_DATA = `, a comment before it): review 2's R2-3, parked. Neither builder writes either shape. | Within T01, unusual input; park under R3 |
| F6 | Info | `tests/test_react_frontend.py:597-606` | Mutation check: removing the `isinstance(catalogue, dict)` test (`"workspace" not in (catalogue or {})`) survives all 23 targeted tests, because the only non-dict `catalogue` case is `[]`, which is falsy. The real code is right (probe below: `["workspace"]`, `"my workspace"`, `null`, `3` all served as read), so this is a coverage gap. Dropping the `base == engine/library` guard in `_file` also survives (review 2's R2-4, equivalent today). | Within T01 |
| F7 | Info | `react_frontend/__init__.py:63-72` | The relaxation means only an unparseable file answers 500, and "unparseable" here includes a key-free file with non-UTF-8 bytes, `NaN`, a 100,000-deep array (RecursionError) or a 5,000-digit integer: they were served as read before round 2 and answer 500 now. Neither builder writes them (`allow_nan=False`, ASCII). Stated for completeness. | Within T01, no action |
| F8 | Info | `react_frontend/__init__.py:101-110` | An older `data.js` (retained preview, or a library whose rebuild failed) can still hold an OSError path in `catalogue.issues`, `workspace.issues` or `activity.issues`; `_library_data` and `_without_workspace` filter only `catalogue.workspace`. Same population and same reasoning as round 1's older-publication case; the start-up rebuild replaces the file. Run-relative names (`runs/<run>/deliveries/<sha>/...`, `inputs/<sha>`) are the catalogue's own design (artifact and file `href`, `name`) and are not counted as leaks. | Within T01, no action |

## Answers to the questions

### (1) Can a path still reach the three routes? Catalogue issues: no. Elsewhere in the same bodies: yes (F1, F2)

Method: the 230-file synthetic run root from the C5 probe, copied to `/tmp`, the service and all builders run as
`nobody` after the imports were warmed (root ignores chmod 000, so real permission errors needed a real non-root
user). Scripts: `r3adv/osfail.py`, `sweep.py`, `buildinto.py`, `svc_describe.py`, `race.py`.

`catalogue()` after `build_library`, with one file changed in between (real OS conditions):

| Condition | `catalogue.issues` | Path in the catalogue |
| :--- | :--- | :--- |
| `CP-1.md` chmod 000 | `delivery not catalogued (PermissionError)` | none |
| `CP-1.md` deleted / a directory / a link | `delivery not catalogued (Refused)` | none |
| `delivery.json` chmod 000 | `delivery not catalogued (PermissionError)` | none |
| `CP-1.md` or `delivery.json` deleted between lstat and read (patched `read_bytes` that unlinks first) | `delivery not catalogued (FileNotFoundError)` | none |
| context input deleted / a directory / truncated | `context not used (Refused)` | none |
| `view.json`, a source input, `events.jsonl` chmod 000 | none | none |
| context input chmod 000, or `workflow.json` chmod 000, or the context deleted mid-read | `catalogue()` raises (uncaught OSError, text holds the absolute path) | no catalogue; F3 |

Every `issues.append` in `credit_os_catalogue.py` was read: lines 220 and 417 now give the kind; 312 appends a
`ValueError` from `chart_rows`, whose three messages are fixed strings; 284 and 326 are fixed or use constants. No
other catalogue field is built from an exception.

Then the whole body of 18 routes (`/connected/context`, `snapshot`, `snapshot?run=`, `library`, `activity`,
`activity/<run>`, `reports`, `report/<run>`, `portfolio/<run>`, `/api/runs/<run>`, `/inputs`, `/api/issuers/...`,
`/library/data.js`, `/library/index.html`, `/activity.js`, `/data.js`, `/`, a source download), scanned for any
`/tmp`, `/home` or `/root` string, with each condition applied after start and again after one rebuild step:

| Condition | Result |
| :--- | :--- |
| `workflow.json` chmod 000 (after start) | `/connected/snapshot` and `?run=`: `[Errno 13] Permission denied: '/tmp/r3a/.../workflow.json'` in `workspace.runs.<run>.evidence.sources[0..2].sourceWarning` (F2) |
| source input chmod 000 | same two routes, `.../inputs/<sha>` in `sourceWarning`, before and after a rebuild (F2) |
| context input chmod 000, after one rebuild step | `/connected/activity` and `/activity.js` carry the path in `held` (F3); the snapshot routes are clean |
| `requests/CP-0/<sha>/1.method-checks.json` chmod 000 before the service starts | `/connected/snapshot`: `workspace.issues[0]` and `activity.issues[0]` hold `...could not be read (PermissionError: [Errno 13] Permission denied: '/tmp/r3a/s-method-check`; `?run=`: `workspace.issues[0]`; `/library/data.js`: both. `/connected/library` clean (it keeps only `real`) (F1) |
| `CP-1.md`, `delivery.json`, `view.json`, `events.jsonl`, source deleted, context deleted/dir/truncated | all 18 routes clean |

F1 across the run folder: one file at a time made unreadable between `build_library` and `build_into`
(`buildinto.py`, 98 files, the `requests/` and `live/modules/` families sampled): 19 produced a data.js with the
80-character path prefix in an issue (`completed-*.json`, `delivery-*.json`, 14 files under `deliveries/<sha>/`,
`live/calls.jsonl`, two `requests/*/*.method-checks.json`), 16 raised an uncaught OSError (`workflow.json`, the
context, 14 `instructions/*.md`), 8 gave an issue by kind or a hash mismatch (`events.jsonl`: `(PermissionError)`;
`CP-1.md`: `delivery not catalogued (PermissionError)`), and the rest were clean.

### (2) Does relaxing `_library_data` reopen the round-2 leak? No for every shape that holds `catalogue.workspace` and parses

`r3adv/shapes.py`, in-process service, 33 shapes, `/library/data.js` body compared with the file and searched for the
planted root:

| Shape | Result |
| :--- | :--- |
| key-free, builder form; key-free, 35 MB | served as read, byte for byte (0.3 s) |
| key present: builder form, pretty-printed, no trailing newline, key first, duplicate `workspace` inside `catalogue`, JSON-escaped key name (`workspace`), value a list, value `null`, 35 MB | key dropped, no root, ASCII, `<` as `<`, 0.4 s |
| `catalogue` as `[]`, `["workspace"]`, `"my workspace"`, `null`, `3` | served as read (the dict test holds) |
| unparseable: trailing statement, trailing comment, two assignments, `JSON.parse(...)` form, `NaN`, `1e999` with the key, 100,000-deep, non-UTF-8 byte with or without the key | 500 (the traceback is in the service log) |
| key present but the assignment not at byte 0: BOM, leading newline, `window.CREDIT_OS_DATA = `, a comment before, `Window.`, `x` before | served raw, path in the body (F5b, review 2's R2-3) |
| top-level `catalogue` twice, first holding the key | served raw, path in the body (F5a) |
| `workspace` nested under the top-level `workspace`, `Workspace`, `"workspace "` | served raw: a different field, not `catalogue.workspace` |
| `catalogue.issues` or `activity.issues` holding a path (an older writer's residue) | served raw (F8) |

No file that parses and holds `catalogue.workspace` is served with it, apart from F5a. The 4-key rule that round 3
moved into `_read_publication` still guards `/connected/snapshot`, `/connected/library`, `/connected/reports` and the
source route; `TypeError` instead of `ValueError` for a non-object changes nothing (no caller catches `ValueError`;
all give the same fixed 500).

### (3) Line 220

Raise sites that reach `pinned_context`'s `except (Refused, ContextRefused)`:

- `read_inside` (`library_index.py:85-98`): `'<relative>' is not a path inside the run`, `<relative> is missing`,
  `is a link`, `is not a file`, `is larger than 64 MiB`, with `relative` = `workflow.json` or `inputs/<digest>`.
  `digest` is the value of `sources.context.sha256` in `workflow.json`, so a hostile `workflow.json` can put any
  string there, including a path-looking one, into the first form. That is content chosen by the file's author, not
  a path of the server, and round 3 removes it as a side effect.
- `read_pinned` (`library_index.py:105`): `inputs/<digest> no longer has its recorded sha256`.
- `json_object` (`library_index.py:113,115`): `workflow.json is not valid JSON / not a JSON object`.
- `load_context` (`deploy_vii/context.py:324,330,384,388,392,396,400,405,453,846`): JSON pointer plus pydantic
  messages, a duplicate key name from the file, a decode reason and a line number. The CLI-only raises at 921-962 are
  not reached from `load_context`.

No input derived from the server's own state puts a server path into line 220's text; the report's disclosure is
right. The OSError cannot be caught here at all (`read_inside` raises it from `os.stat` and `read_bytes`, outside the
`except`), which is F3. What the reader saw and no longer sees: the reason clause (F4), on the library home "Not
shown" list. `type(error).__name__` itself cannot hold a path. Line 417's change is different: its `OSError` branch
did carry the path, so that line needed it; for its `Refused` branch the reason is lost the same way.

## What I attacked that held

- C5 probe, under its lock: `timeout 900 flock /tmp/repair1-port-8735.lock timeout 600 node
  docs/audit/2026-11-16-final/output/2-sections/C5/probes/snapshot-path-leak.cjs` from the worktree root:

  ```
  checked: /connected/snapshot?run=20261117-095006-01 after one synthetic run
  absolute paths in the snapshot: []
  /connected/library catalogue.workspace: null
  RESULT: no absolute workspace path in the snapshot
  exit 1
  ```

  Exit 1 is the passing result of this inverted output probe.
- Ordinary completed synthetic run: `/connected/snapshot`, `?run=`, `/connected/library` and `/library/data.js` hold
  no absolute path, and the relative-looking strings (193, 193, 129, 193) are all run-relative artifact and file
  names and `../runs/<run>/...` links, the catalogue's design.
- `_visible_scope` mutates the deep copy `enrich()` returns, never the shared publication; key order is kept;
  `kept = {**snapshot, "catalogue": ...}` keeps the catalogue in its position, so a re-emitted file equals the
  builder's output (verified in round 2 for 8 positions; unchanged code).
- Tests, re-run at `97cb702`: `timeout 300 .venv/bin/python -m pytest -q -p no:cacheprovider
  tests/test_react_frontend.py tests/test_credit_os_catalogue.py tests/test_update_library.py
  tests/test_react_preview.py tests/test_react_sources.py tests/test_run_start_service.py
  tests/test_react_admission.py`: 348 passed. Quality gate `timeout 600 .venv/bin/python tools/quality_gate.py --base
  d8d3d634`: 0 findings, 4 changed files, 420 lines in scope.
- Mutation check of the new tests on a scratch copy of the tree under `r3adv/mut3/` (never the repository), 24
  targeted tests: line 417 back to `{error}` fails 1; line 220 back to `{error}` fails 2; `ensure_ascii=False` fails 8;
  the key kept in the re-emitted file fails 8; the 4-key rule re-added to `_library_data` fails 7; `workspace` left in
  the snapshot fails 2; the `isinstance` test removed survives (F6); the `_file` guard removed survives (R2-4).

## Commands run

| Command | Result |
| :--- | :--- |
| C5 probe under `flock` (above) | exit 1, no leak |
| `r3adv/osfail.py` (as `nobody`, 14 conditions, catalogue level and service level, 8755) | table in question 1 |
| `r3adv/sweep.py` (18 routes, 8 conditions, request and after-rebuild) | F2, F3 reproduced; the rest clean |
| `r3adv/leak2.py` | JSON pointer of the F2 leak |
| `r3adv/buildinto.py` (98 files, one at a time, `build_library` then `build_into`) | F1: 19 data.js with a path prefix, 16 raised |
| `r3adv/svc_describe.py` (service started after the file was made unreadable) | F1 on `/connected/snapshot` (both scopes) and `/library/data.js` |
| `r3adv/race.py` (`Path.read_bytes` unlinks the file first) | issue `(FileNotFoundError)`, no path; context and `workflow.json` raise |
| `r3adv/shapes.py` (33 `data.js` shapes) | table in question 2 |
| `r3adv/guard.py` | non-dict `catalogue` served as read |
| `r3adv/rel.py` | relative-looking strings are run-relative names by design |
| the pytest run, the quality gate, 8 mutations | as above |

NEEDS FILE (if the lead routes F1 to F3 into T01): `apps/issuer-library/credit_os/source.py` (`describe`: give an
OSError its kind only, as `update_library.py:95,110` and `library_index.py:561` already do),
`react_frontend/sources.py` (`sourceWarning` from `type(error).__name__` for an OSError), and
`react_frontend/run_activity.py:252` (`held`, with `scheduler.py:419`, or catch the OSError in `pinned_context`).

Not verified: the body of each 500 (round 2 showed it is the fixed `{"error": "the service failed; see its log"}`; I saw only the status and that the traceback goes to the log); the C1 probe `c1-001-snapshot-leaks-workspace-path.cjs` (port 8741 not to be used; its field is covered
by the C5 probe and my sweeps); a real Windows path, a real sharing lock (`WinError 32`) or Windows spellings of the
file name (`DATA~1.JS`, `::$DATA`), argued from the content-based filter and not run; the browser rendering of the
library home "Not shown" list and of Evidence with the leaked text (read from `views.js:1620-1627` and
`Evidence.tsx:455`, not loaded); a retained preview from a real earlier build (constructed shapes only); concurrent
requests for a very large `data.js` (one request each, 35 MB: 0.3 to 0.4 s); the effect of F1 to F3 at the base
`d8d3d634` (the files are unchanged by the diff, so argued, not re-run); the other reviewer's round-3 file
`T01-review-3.md` (not read, so that this review stays independent); any live run.
