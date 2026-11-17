# T01 adversarial review, round 4 (last round): server paths through catalogue, workspace and activity issues

Reviewer: adversarial, fresh agent, did not write the change. Model Opus 5.5 (`claude-opus-5-5`) at medium effort
(ruling R12). Worktree `/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch
`worktree-agent-ab170c7c60311be95`, HEAD `e08ac10`. Attacked `git diff d8d3d634 e08ac10`, round 4 (`97cb702..e08ac10`)
especially. No code file was edited and no earlier review file was touched. Scratch work is under the session
scratchpad (`r4adv/`), never the repository. The one service I started used port 8755 with roots `/tmp/r4s` and
`/tmp/r4sweb` (under 80 characters); it was stopped and the roots removed. Port 8741 was not used. Date 2026-11-17.

## Verdict: PASS

With real OS errors forced as `nobody` on copies of a synthetic run root, no absolute or relative server path reaches
`/connected/snapshot` (scoped or unscoped), `/connected/library` or `/library/data.js` through catalogue issues,
workspace issues or activity issues. Round 3's adversarial F1 (R1-004: 19 files whose unreadable state put a
50-character path prefix into `data.js`) no longer reproduces: 0 of 392 builds leak. The one path I still saw on
these routes is `sourceWarning` (T01b, R1-007). `UnreadableFile` holds no path at any raise site. Nothing High or
Medium is within T01.

## Findings

| # | Severity | Where | Reason | Scope |
| :-- | :--- | :--- | :--- | :--- |
| R4A-1 | Low | `apps/issuer-library/credit_os/source.py:271-272` | `describe` gives every OSError that has no subclass of its own the same word, `OSError`. Real cases: ELOOP (a link swapped in after `is_symlink`, opened with `O_NOFOLLOW`), ENXIO (a Unix socket where a run file should be), EIO, ENAMETOOLONG, EMFILE. The errno name (`errno.errorcode[error.errno]`, e.g. `OSError (ELOOP)`) contains no path and would keep the kind useful. | Within T01 (usefulness, not a leak) |
| R4A-2 | Low | `apps/issuer-library/credit_os/source.py:271` | Keeping `UnreadableFile`'s text is safe only by convention. Every current raise (`source.py:233,237,241,243,253`, `store.py:621`) passes one literal, path-free argument, and there is no subclass. A future `UnreadableFile(errno, strerror, path)` or `UnreadableFile(f"... {path}")` would put the path in the issue (shown: `describe(UnreadableFile(13, "Permission denied", "/abs/u"))` gives `UnreadableFile: [Errno 13] Permission denied: '/abs/u'`). A guard such as `error.filename is None` would make it structural. | Within T01 (hardening; no current leak) |
| R4A-3 | Low | `docs/audit/2026-11-16-final/output/5-repair/T01.md:250-251` | The round-3 sentence that an OSError escaping `pinned_context` "is old behaviour and not a leak" is still there. The round-4 section routes it to the lead (F3, now T01b / R1-008) but does not correct the sentence. Carried from review 3 (F3 wording). | Within T01 (report wording) |
| R4A-4 | Info | `src/deploy_workflow/credit_os_catalogue.py:210-221` | `pinned_context` does not catch OSError. A context input or `workflow.json` that is chmod 000 or deleted mid-read makes `catalogue()` raise: 1 to 2 of 98 files per mode below. The same happens from `update_library.handoff_zip` for the 14 `instructions/*.md` files. The exception text holds the absolute path, and it reaches the browser only through the scheduler's rebuild note. | T01b (R1-008); not counted against T01 |
| R4A-5 | Info | `react_frontend/sources.py:232,247,256` | Reproduced. `workflow.json` was made chmod 000 after start. Then `/connected/snapshot` and `?run=` both carry `[Errno 13] Permission denied: '/tmp/r4s/.../workflow.json'` in `workspace.runs.<run>.evidence.sources[0].sourceWarning`. | T01b (R1-007); not counted against T01 |

## Questions answered

### Can a path reach the four routes through issues? No

**Build level.** Script `r4adv/buildinto4.py`, run as `nobody` after a warm-up as root. For each of 98 run files
(every file except the `requests/` and `live/modules/` families, which are sampled through CP-0 and CP-1), the script
ran `build_library` and then changed one file before `build_into`. Each mode used a fresh copy. It then searched the
written `data.js` for `/tmp`, `/home`, `/root`, `/var`, `/usr`, `/opt` and `/mnt`:

| Mode | Built | Raised | `data.js` holding a path |
| :--- | :--- | :--- | :--- |
| chmod 000 | 82 | 16 | 0 |
| deleted | 83 | 15 | 0 |
| a directory in place of the file | 83 | 15 | 0 |
| deleted mid-read (`os.open`, `open` and `Path.read_bytes` unlink the target first) | 82 | 16 | 0 |

These are the issue reasons the 392 builds wrote, by count. Most name only the error kind: `(PermissionError)` 22,
`(FileNotFoundError)` 18, `(UnreadableFile: not a regular file)` 5, `(UnreadableFile: view.json is not the plain file
its delivery record lists)` 4 and `(ValueError)` 1 (`events.jsonl`, from `update_library.py:95`). The other four name
a run-relative file: `inputs/<sha> is missing / is not a file` and `deliveries/<sha>/delivery.json is missing / is
not a file`, the run-relative `Refused` reason ruling L6b keeps. Every raise was the `pinned_context` or
`handoff_zip` path (R4A-4, T01b).

**Service level.** Script `r4adv/svc4.py`, run as `nobody` against the service from `make_server`, port 8755. There
were 17 conditions, each applied in two cases: before start (so the start-up rebuild reads the broken file) and after
start (so the request reads it). The script searched all six bodies and every JSON string in them:
`/connected/snapshot`, `/connected/snapshot?run=`, `/connected/library`, `/library/data.js`, `/connected/activity`
and `/activity.js`. The 17 conditions:

- `live/calls.jsonl`: chmod 000, a Unix socket, a directory
- `requests/CP-0/<sha>/1.method-checks.json`: chmod 000, a directory
- the run's `delivery-*.json`: chmod 000
- the run's `completed-*.json`: chmod 000, a socket
- in the delivery: `view.json` chmod 000 or a directory, `forecast.md`, `delivery.json` and `CP-1.md` each chmod 000
- `events.jsonl`, `workflow.json` and the context input: chmod 000
- the delivery folder: chmod 000

Results: 34 of 34 runs answered 200 on the unscoped snapshot and `/connected/library`. Where the run was still
admitted, the scoped snapshot answered 200; otherwise it answered 404. All six bodies were clean in every run but
one: `workflow.json` made unreadable after start leaks through `sourceWarning` (R4A-5, T01b). Round 3's leaking case
(`1.method-checks.json` chmod 000 before start) is now clean on all six routes.

### Is `UnreadableFile` safe? Yes, today

- **Raises:** the raise sites are `source.py:233` (`"a link"`), `:237` (`"an invalid path"`, `from` a ValueError for
  an embedded NUL), `:241` (`"not a regular file"`), `:243` and `:253` (`"over the size limit"`) and `store.py:621`
  (`"view.json is not the plain file its delivery record lists"`). Each passes one argument, so `errno`, `strerror`
  and `filename` are all `None`, and `str()` is the literal. The chained cause is not shown.
- **Subclasses:** there are none in the repository. The two `Refused` subclasses, `_Taken` and `SourceMismatch`, are
  of an unrelated class.
- **The one wrap:** `update_library.py:219` wraps the error as `Refused(f"... {label} is not a plain file
  ({error})")`, where `label` is run-relative.
- **The risk:** it is structural only, which is R4A-2.

### Does `describe` still give a useful kind? Mostly

These were checked by direct call. `PermissionError`, `FileNotFoundError`, `IsADirectoryError`, `NotADirectoryError`,
`TimeoutError`, `UnsupportedOperation`, `BadGzipFile` and `SameFileError` are each named by their class. Plain
`OSError` (ELOOP, ENXIO, EIO, ENAMETOOLONG, EMFILE) collapses to `OSError` (R4A-1). `UnicodeDecodeError` keeps its
reason. Other errors keep `type: str[:80]`.

I read every exception that reaches a `describe` caller: `store.py:600,1042,1167,1319,1330,1580`,
`evidence.py:45,116,157` and `cashflow.py:1700`. Most are raised by the library's own code with module, locator or
row text and no filesystem path. `store.py:1580` catches every `Exception` from `collect_runs`, whose only path
arithmetic is `relative_to(run_dir)` on paths from `run_dir.glob`. The catalogue's other `issues.append` lines (`:220`
`Refused`/`ContextRefused`, `:284`, `:312`, `:326`, `:420`) hold no server path. `store.py:1178` sends only
`Path(previous_directory).name`.

### C5 probe

Run from the worktree root under its lock:

```
timeout 900 flock /tmp/repair1-port-8735.lock timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C5/probes/snapshot-path-leak.cjs
```

Output:

```
checked: /connected/snapshot?run=20261117-101331-01 after one synthetic run
absolute paths in the snapshot: []
/connected/library catalogue.workspace: null
RESULT: no absolute workspace path in the snapshot
exit 1
```

Exit 1 is this inverted probe's passing result: no leak.

## Commands run

| Command | Result |
| :--- | :--- |
| C5 probe under `flock` (above) | exit 1, no leak |
| `r4adv/buildinto4.py {chmod0,dir,delete,race}` (as `nobody`, 4 x 98 builds) | 0 `data.js` with a path; 62 raises (T01b) |
| `r4adv/svc4.py` (as `nobody`, 17 conditions x before/after start, 6 routes, port 8755) | clean except `sourceWarning` (T01b) |
| direct `describe` calls on 10 error shapes | as above; R4A-1, R4A-2 |
| `timeout 300 .venv/bin/python -m pytest -q -p no:cacheprovider tests/test_credit_os_store.py tests/test_credit_os_catalogue.py tests/test_react_frontend.py` | 408 passed |
| `timeout 600 .venv/bin/python tools/quality_gate.py --base d8d3d634` | 0 findings, 6 changed files, 461 lines in scope |

## Not verified

- A real I/O error (EIO) or descriptor exhaustion (EMFILE) through the service. Their `describe` output was checked
  only by direct call.
- A real link swapped in between `is_symlink` and `os.open` (ELOOP). Reasoned through, not raced.
- Windows error text and paths.
- The browser rendering of the new issue words on the static library's "Not shown" list.
- The 18-route sweep of round 3. Only the six routes above were run.
- The C1 probe (port 8741 not to be used).
- Any live run.
