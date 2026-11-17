# T01b adversarial review, round 1: leaked server paths in `sourceWarning` and the rebuild note

Reviewer: adversarial, fresh agent, did not write the change. Model Sonnet (`claude-sonnet-5-5`), round 1 (ruling R12).
Worktree `/home/user/credit-os2/.claude/worktrees/agent-abe2611a17b373b32`, branch `worktree-agent-abe2611a17b373b32`,
commit `d0911f5`, base `d7b1e66f`. Attacked `git diff d7b1e66f d0911f56` (two production files, two test files, the report).
No code file was edited and no other review file was touched (`T01b-review.md` is the first reviewer's). Scratch work is under the
session scratchpad (`t01badv/`), never the repository. Services were in-process `make_server` on port 8758 with roots under
`/tmp` of 13 characters or fewer, stopped after each run, roots removed. Date 2026-11-17.

## Verdict: PASS

Both required changes hold under real operating-system errors. `sourceWarning` names the error kind and the file by its
name inside the runs folder (`<run>/inputs/<sha> could not be read (PermissionError)`, `<run>/workflow.json ...`), and the
rebuild note carries the error kind only (`the library could not be rebuilt (PermissionError); ended runs wait for it`).
In 666 probes of the brief's files on this worktree (and 534 on a tree with T01 merged), on the six named routes plus six more (details below), no absolute path, no service root, no `Permission
denied` and no `[Errno` reached any of them. `watcher.log` keeps the full error. Nothing High or Medium is within T01b.
One High and one Low are new observations in the same class on `/activity.js` (a different producer, not in L10).

## Findings

| # | Severity | Where | Reason | Scope |
| :-- | :--- | :--- | :--- | :--- |
| A1 | Low | `react_frontend/sources.py:229-230` | `_problem` returns `str(error)` for a non-OSError refusal, and two of those name no file: a `workflow.json` that is not valid JSON gives `Expecting property name enclosed in double quotes: line 1 column 2 (char 1)` and a source whose bytes differ gives `source bytes do not match recorded sha256` (both seen in the truncation probes). No path, but the reader is not told which file. Pre-existing; L10 names the OSError cases and those are done. Optional: append the run-relative name. | Within T01b (usefulness only, not a leak) |
| A2 | Low | `src/deploy_workflow/inbox/scheduler.py:419`, `react_frontend/sources.py:229` | Kind only is by ruling, and it is coarse: 84 of the 146 held notes the battery produced read `(Refused)` (each a different cause), and a plain `OSError` (EIO, ELOOP, ENXIO) says nothing. `errno.errorcode[error.errno]` would add a path-free word. Detail stays in `watcher.log`; `/connected/activity` maps the note to a plain sentence anyway. Same point as T01 review 4 R4A-1. | Within T01b (optional hardening) |
| N1 | High | `src/deploy_workflow/inbox/scheduler.py:639-641` and `:659-662` | `reason = f"could not be started: {error}"` stores an OSError's text, with the absolute path, in the run record, and `/activity.js` serves it as written (and `/api/runs/<id>`: `_RUN_FIELDS` holds `reason`, `run_start/service.py:153-156,353`). Reproduced with real errors: a missing launcher gives `could not be started: [Errno 2] No such file or directory: '/tmp/ibyid8m7i7/nowhere/launcher'`; a launcher without the execute bit gives `[Errno 13] Permission denied: '/tmp/ibbegxaxm6/launcher.py'`; a run log that is a directory gives `[Errno 21] Is a directory: '/tmp/ibx2pfz_4w/_engine/logs/20261117-102743-01.log'`. Same class and same raw route as R1-008, not covered by L10. `/connected/activity` is safe (T03's `_NOT_STARTED` sentence). R3: a leaked path is always repaired. | New observation (not T01b; for the lead to schedule) |
| N2 | Low | `src/deploy_workflow/inbox/scheduler.py:545`, `src/deploy_workflow/inbox/filing.py:46` | `could not be filed: {error}` where `filing._load` raises `ValueError(f"{path} is not a map ...")`. Reproduced: `could not be filed: /tmp/ibq57m1tn4/_engine/state/issuers.json is not a map of issuer ID to folder name` in `activity.js`. Needs an earlier-format delivery with `report.html` and an issuer registry that is valid JSON but not a map (a hand edit); R3 parks hostile or unusual input. `/connected/activity` maps it to `_NOT_FILED`. | New observation (not T01b) |
| N3 | Info | `src/deploy_workflow/credit_os_chips.py:548` | Not reachable from the snapshot on these inputs (answer below). | New observation (no action) |
| N4 | Info | whole base | This worktree lacks T01. With `live/` made unreadable (chmod 000 on the directory) its `workspace.issues[0]` still holds `live/calls.jsonl could not be read (PermissionError: [Errno 13] Permission denied: '<root>/_engine/runs/<run>/l...` on `/connected/snapshot`, `?run=` and `/library/data.js` (2 probes). That is T01's R1-004 (`describe()`, `apps/issuer-library/credit_os/source.py:264-268`), fixed on `audit/repair-1` (`describe` there names an OSError by its kind). Against a tree of `audit/repair-1` plus the T01b production diff the same probes are clean (582 probes, 0 hits). Re-run after merge. | Not a T01b finding |

## Method

Scripts are in `/tmp/claude-0/-home-user-credit-os2/ea255210-3ebe-5dda-8eed-03ecdcc4b367/scratchpad/t01badv/`. The harness
`svc_t01b.py` was adapted from the T01 round 4 `svc4.py`: it copies the C5 synthetic run root (one completed run, 18 files in
`inputs/`, 14 in `instructions/`) as root, warms the imports, drops to `nobody` (uid 65534, groups cleared), and then
breaks one file per case with a real chmod 000, deletion, a directory in its place, a link to `/etc/hostname`, or a
truncation to `{`. A seventh mode, "race", unlinks the target at the moment `open`, `os.open` or `Path.read_bytes` first
touches it (deleted mid-read). Each case runs twice: *before* start (the Scheduler's start-up rebuild reads the broken file) and
*after* start (the run's routes are probed with no rebuild, which is where `sourceWarning` appears because the old
`data.js` still lists the run; then the poll's real `_rebuild()` and two `step()`s, then probed again). The Scheduler is
the real one: `update_library_at` ran for real, `step()` wrote `_engine/activity.js`, and the service answered over HTTP.

The files broken: every file in `inputs/` (including the source `c92a94e6...`, the pinned context `c1864cf8...`), every file in
`instructions/`, `workflow.json`, `identity.json`, `events.jsonl`, the folders `inputs/`, `instructions/`, the run folder and
the `runs` folder. A further set outside T01b's brief: `state/<run>.json`, `state/`, `library/data.js`, `library/`, `activity.js`,
the run's `completed-*` and `delivery-*` files, the delivery's `delivery.json`, `view.json` and `CP-0.md`, `live/`,
`requests/`.

Routes searched for an absolute path (`/tmp`, `/home`, `/root`, `/var`, `/usr`, `/opt`, `/mnt`, `/etc`), the root or its name,
`_engine`, `Permission denied`, `[Errno`, `No such file`, `Is a directory`: `/connected/snapshot`, `/connected/snapshot?run=<run>`,
`/connected/library`, `/library/data.js`, `/connected/activity`, `/activity.js`, and `/connected/context`, `/connected/reports`,
`/connected/activity/<run>`, `/connected/artifacts/<run>`, `/connected/sources/<run>/<sha>/<name>` with and without `?page=1`. JSON
bodies were walked string by string. The one field removed before the scan is `catalogue.workspace` (T01's R1-001).

| Run | Modes | Probes | Absolute path, root, OS text on a route |
| :-- | :--- | :-- | :--- |
| Worktree, brief's files | chmod 000, deleted, directory, link, truncated | 549 | 0 |
| Worktree, brief's files | deleted mid-read | 117 | 0 |
| Worktree, other files | chmod 000, deleted, directory, truncated | 120 | 2 probes, all N4 |
| `audit/repair-1` plus T01b diff, brief's files | the five modes | 534 | 0 |
| `audit/repair-1` plus T01b diff, other files | the four modes | 48 | 0 |
| Worktree, an ended run (a `running` record whose process is gone) and 16 broken targets in 3 modes | chmod 000, deleted, directory | 43 | 0 (raw `activity.js`) |

The held notes the service wrote across those runs, by count: `(PermissionError)` 32, `(FileNotFoundError)` 30 + 28, `(Refused)` 84,
`(OSError)` 1; none carries text beyond the kind. The `sourceWarning` texts, all path-free: `<run>/inputs/<sha> could not be read
(PermissionError)`, `... is missing`, `... is not a file`, `... is a link`, `<run>/workflow.json ...` the same five,
and, in the race mode, `could not be read (FileNotFoundError)`. For every failing rebuild `watcher.log` held the full text
(`has-errno` in the log checks), and no route serves it (`/library/../logs/watcher.log`, `%2e%2e`, `%2f`, `/logs/watcher.log`,
`/_engine/logs/watcher.log`, `/watcher.log` all 404).

## Questions answered

### Can an absolute path, the root or `Permission denied: '<path>'` still reach the six routes through the files T01b names? No

See the table: 0 hits on the worktree for the brief's files (666 probes) and on the merged-state tree (534 probes of the brief's files, 582 with the other files). The probes
include the case the task singles out, a chmod 000 `workflow.json` and `inputs/<sha>` after start (the snapshot's
enrichment reads them on each request), and the pinned context and `instructions/*.md` before and after start (the
rebuild's reads). Scoped and unscoped snapshots both show the repaired sentence; the library index and `data.js` never
carry a `sourceWarning` (only `enrich` writes one; `grep sourceWarning` finds `react_frontend/sources.py:258,264,271` as the sole producer).

### Does the rebuild note carry a path through any other producer of `_rebuild_failed`'s error text? No

`_rebuild_failed` has two callers, `scheduler.py:419` (`type(error).__name__`) and `:422` (the fixed `update_library.py not found`).
The held note is `_rebuild_error`, `_limit_held` (`daily limit of {int} runs ...`) and `_unreadable_held` (a count), joined with
`; `; none holds a path. The log text and `logger.exception` are unchanged. The class name of an exception holds no path.
For the neighbouring producers of text on `/activity.js`, see N1 and N2: the run's own `reason`, which is not the held note.
The `not listed: <why>` reason (`scheduler.py:519`) was exercised with a real excluded run in 43 ended-run probes: `why` was one of
`unreadable run record (PermissionError)`, `deliveries/<sha>/...`, `workflow.json is not a file`, `not a CP-OS launcher run (no
workflow.json)`; no path.

### Does `sourceWarning` name a run-relative file a reader can act on, and never the root? Yes for the OSError cases; two refusals name no file (A1)

`<run>/inputs/<64 hex> could not be read (PermissionError)` and `<run>/workflow.json could not be read (PermissionError)`. The
name is relative to the runs folder (the form `read_inside`'s own refusals print, and the snapshot's `folder` on every record),
so an operator reads `runs/<run>/inputs/<sha>`; it names no root, no `_engine`, no `runs/`. The chip `reason` for the same source
carries the same sentence (`Checked.cache` is the one entry). The Evidence page draws it (`web/src/pages/connected/report/Evidence.tsx:455`)
next to the source's name, which is what makes a content-addressed `inputs/<sha>` findable.

### Is `credit_os_chips.py:548` reachable from the snapshot on these inputs? No

Static: `Pages.read` runs only from `Pages.get` when `name not in self.cache`. `sources._refresh` sets `pages.cache = checked.cache`
and builds `Pages` from `_inventory(cp0, checked.inventory)`. `_load_source` sets `checked.inventory[name]` and `checked.cache[name]`
together, for every name with a valid identity; `_inventory` keeps an alias only when `canonical.get(name) == (name, digest)`. Every
file name in the inventory is therefore in the cache, so `read` is never the first reader. Dynamic: with a fixture run that
does cite a source (CP-0 inventory plus a cell with a Basis line; `reach548b.py`), real chmod 000, delete, directory, link,
truncation, deleted mid-read, and chmod 000 of `inputs/`, the run folder and `runs/`, as `nobody`: 20 probes, `Pages.read`
called 0 times, every chip reason is the repaired sentence or a fixed one. (The C5 synthetic run has no cited-source chip at all:
`Pages.get` is never called on it, so it proves nothing for this question; the fixture run does.)

## Existing tests changed, and the new ones

The four changed tests asserted the defective note text and are changed to the kind only; no expected value other than that
was edited, none skipped, no gate loosened. Re-run: with the base `sources.py` and `scheduler.py` swapped into a scratch copy of
`d0911f5`, the new and changed tests fail 9 of 124 (4 new sources cases, the new scheduler test, 2 `surprise` cases, 2 f5 tests);
with the repair in place `tests/test_react_sources.py tests/test_inbox_scheduler.py` pass, and so do
`tests/test_react_run_activity.py tests/test_react_frontend.py tests/test_run_start_scheduler.py tests/test_inbox_activity.py`
(186 passed, 1 skipped: `test_inbox_activity.py:188`, "root reads any folder"). Nothing outside T01b's two production files and the tests
beside them changed. Nothing was added that the finding did not ask for.

## Commands run

| Command | Result |
| :--- | :--- |
| `.venv/bin/python -m pytest -q -p no:cacheprovider tests/test_react_sources.py tests/test_inbox_scheduler.py` | all pass |
| the same with the base production files in a scratch copy | 9 failed, 115 passed (as the report states) |
| `... tests/test_react_run_activity.py tests/test_react_frontend.py tests/test_run_start_scheduler.py tests/test_inbox_activity.py` | 186 passed, 1 skipped |
| `svc_t01b.py chmod0,delete,dir,symlink,trunc` (worktree) | 549 probes, 0 hits, 0 raised |
| `svc_t01b.py race` | 117 probes, 0 hits |
| `svc_t01b_extra.py chmod0,delete,dir,trunc` with `TARGETS=state,library,activity.js,completed,delivery,live,requests...` | 120 probes, 2 hits (N4) |
| the same two against `audit/repair-1` plus `git diff d7b1e66f d0911f56 -- <two production files>` (`WT_OVERRIDE`) | 534 + 48 probes, 0 hits |
| `ended_run.py` | 43 probes, 0 hits |
| `reach548.py`, `reach548b.py` | `Pages.read` called 0 times |
| `test_other_reasons.py` (scratch pytest, outside the repository) | N1 and N2 reproduced |
| `logroute.py` | `watcher.log` is served by no route |

The quality gate was not re-run (the implementer's run is in the report, exit 0); the review changed no code.

Not verified: a browser render of the Evidence page with the repaired sentence (the string reaches the snapshot, which I
read; `Evidence.tsx:455` draws it unchanged); `proof.serve` and its `service._loop` end to end (the in-process Scheduler and
`make_server` are the same classes, but `nobody` cannot run the Python under `/root`, so the synthetic launcher child could not
run as `nobody`; every run used a copy of a completed run root); a real chmod on a Windows or network file system; an OSError
raised by something other than the file reads listed (disk full while writing `activity.js`, a failing `os.stat` after `lstat`
beyond the race mode's unlink); the web gates, Signal and the full suite; that N1 and N2 hold on a tree other than this base
(`scheduler.py` is unchanged by T01, so they should); whether the Teams run card (`inbox/teams.py`, off in a synthetic service) carries a run `reason`; not read.
