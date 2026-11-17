# T01 review, round 3: R1-001 (lead ruling L6) and the round-2 review findings

Reviewer: fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch `worktree-agent-ab170c7c60311be95`.
Round 1 `55572433`, round 2 `dd8acc5d`, round 3 `97cb702`, base `d8d3d634`. Reviewed `git diff d8d3d634 97cb702`
and the round-3 diff `git diff dd8acc5d 97cb702`. No code file edited; the four earlier review files are untouched.
Scratch work is under the session scratchpad (`r3/`), not the repository. Date 2026-11-17.

## Verdict: CHANGES NEEDED (one Medium, on the line 220 change; everything else passes)

The leak itself is closed and the round-2 review findings are fixed. The one problem is that round 3 followed L6 on a
premise that is false for `credit_os_catalogue.py:220`: no text that can reach that line carries a server path, and the
change removes a reason the library page shows its reader (R5). The answer to the key question is (a). L6 is a lead
ruling, so the controller should put this evidence to the lead before sending the task back; the repair is two lines
and three tests.

## Key question: can any text reaching line 220 carry a server path?

No. Answer: **(a) keep line 220's original `{error}` text; change only line 417 (and only its `OSError` branch).**

### Every raise site that can reach line 220

`pinned_context` (`credit_os_catalogue.py:203-221`) catches only `Refused` and `ContextRefused`. Its `try` body calls
`read_inside`, `json_object`, `read_pinned` and `load_context`, and nothing else raises into the `except`.

| Call | Raises into line 220 | Text built from | Server path? |
| :--- | :--- | :--- | :--- |
| `read_inside` (`library_index.py:79-99`) | `Refused` x5 (`:85,92,94,96,98`) | `relative` only: `workflow.json`, `inputs/<digest>`; the `OSError` from `os.lstat` is turned into `"<relative> is missing"` and its text dropped (`:91-92`) | No |
| `read_inside`, `os.stat(path).st_size` and `path.read_bytes()` (`:97,99`) | `OSError`, **not** caught at 220 | n/a | It propagates out of `catalogue()`; it never becomes issue text here |
| `read_pinned` (`:102-106`) | `Refused` | `relative`, `"no longer has its recorded sha256"` | No |
| `json_object` (`:109-116`) | `Refused` | the literal name `"workflow.json"` | No |
| `load_context` (`deploy_vii/context.py:375-409`) | `ContextRefused` x7, plus pydantic and `_Rules` problems | a JSON pointer plus a fixed message, a duplicate or extra key name from the file, `_Rules` text with a form value (`:539`) | No: no `Path`, `open` or `resolve` in `load_context` or `_Rules` (the `Path` uses are in the CLI, `:937-962`, which line 220 cannot reach) |
| `ContextRefused.__init__` (`:68-70`) | `"; ".join(problems)` | the problems above | No |

Probe (`scratchpad/r3/probe220.py`, repeating the `try` body over hostile run folders and printing each `str(error)`
with whether the folder root occurs in it):

```
missing workflow.json:  Refused: 'workflow.json is missing'                      | has root: False
workflow not json:      Refused: 'workflow.json is not valid JSON'              | has root: False
digest absolute path:   Refused: "'inputs//etc/passwd' is not a path inside the run"  | has root: False
digest parent:          Refused: "'inputs/../../x' is not a path inside the run"      | has root: False
digest dict:            Refused: "inputs/{'a': 1} is missing"                   | has root: False
digest wrong hash:      Refused: 'inputs/000...0 is missing'                    | has root: False
digest with NUL:        NOT CAUGHT AT 220 -> ValueError
ctx {} / dup key / extra key named '/Users/me/secret': ContextRefused: ...      | has root: False
```

What can appear is text the run's own files hold (a hostile `workflow.json` digest, a key name in the pinned
`context.json`), echoed back. That is the run's content, not a path the server discovered; it needs a hostile run
folder (R3: parked). The service's workspace root never occurs in any of them.

The earlier adversarial review (R-3) reached the same split and produced only one real example, the `OSError` at 417
(`T01-review-adversarial.md:75-90`: "every `Refused` message ... is built from `relative` ... `ContextRefused` text is a
JSON pointer plus a message ... A path needs an `OSError`"). Line 417 is the only one of the two catches whose
`except` tuple contains `OSError` (`credit_os_catalogue.py:416`); line 219's does not. The controller's report that "an
`OSError` can carry an absolute path" is true of 417 only.

### Where the reader sees catalogue issue text (R5)

- The only drawing code is the static issuer library page the service serves at `/library/`:
  `apps/issuer-library/credit_os/web/views.js:1619-1626`, `libraryNotShown(activity)`, draws every issue as
  `<li class="report-row">${esc(i)}</li>` under "Issues" inside a closed `<details>` "Not shown (N folders, M issues)",
  and `views.js:1631` puts it in the library home view.
- `activity.issues` is `[*cat["issues"], *store["issues"]]` (`apps/issuer-library/update_library.py:279-282`), so the
  catalogue's issues are in that list verbatim.
- The same disclosure draws the excluded folders' reasons verbatim (`views.js:1624`, `esc(reason)`, the `Refused` text),
  and those are unchanged. After round 3, in one disclosure, a folder's reason keeps its words and a context's or
  delivery's issue is only a class name.
- The connected React app draws neither: `web/src/pages/connected` has no reader of `catalogue.issues` or
  `activity.issues` (`Record.tsx:22-40,156` is the handoff's own issues, a different list). Nothing under `proof/` or
  `react_frontend/` reads either list.
- Before round 3 the line-220 text read, for example, `run-a: context not used (inputs/<sha256> no longer has its
  recorded sha256)`; after it reads `run-a: context not used (Refused)`. The same for `ContextRefused`, where the
  validation message that says which field is wrong is replaced by `ContextRefused`. No test pinned the parenthetical
  (`tests/test_credit_os_catalogue.py:260,268,488` match only "context not used"), so only R5 protects it.
- R5: a change that removes something the reader sees is not made, and is listed for the owner. Line 220 had no leak to
  justify it. So the line-220 change should be reverted (answer (a)); if the lead nonetheless wants it, R5 makes it an
  `owner-decisions.md` entry, not a quiet repair.

### What 417 should do

At 417 the `OSError` branch is the real leak (`delivery_folder`'s `os.listdir`, `read_inside`'s `os.stat` and
`read_bytes` can raise it; its text is `[Errno 13] Permission denied: '<abs path>'`), and the new test proves it. The
`Refused` branch there is path-free (names below the run: `deliveries/<sha>/..., does not hold exactly the files its
delivery.json lists`, `no delivery folder holds the delivery ...`) and was also reduced to the word "Refused". The
smallest repair that closes the leak and keeps what the reader sees:

```python
except (Refused, OSError) as error:
    why = str(error) if isinstance(error, Refused) else type(error).__name__
    issues.append(f"{name}: delivery not catalogued ({why})")
```

`test_an_unreadable_handoff_issue_names_the_error_kind_not_the_path` is unchanged by this and keeps its purpose.

## Round-2 review findings: fixed?

| Finding | Status | Evidence |
| :--- | :--- | :--- |
| L-1 / R2-1: a parseable `data.js` lacking `activity` or `chips` answered 500 | Fixed | `_decode_publication` (`react_frontend/__init__.py:63-72`) now requires only a JSON object; the four-key check sits in `_read_publication` (`:52-60`), the connected app's reader. Tests `test_library_data_js_with_the_key_loses_only_the_key` (no `chips`; no `activity`; none of the other three) and `..._without_the_key_is_served_as_read` (`{"catalogue":[]}`, `{}`, no newline, hand-made CRLF file) pass; my battery below agrees |
| I-1: `_read_publication` lost its docstring | Fixed | `:53`, "Decode the published assignment as JSON and retain the original JSON bytes."; `_decode_publication` has its own (`:64`) |
| I-2 / R2-4: the key was dropped in two forms; the test compared parsed values | Fixed | one helper `_without_workspace` (`:88-91`) used by `_visible_scope` (`:84`) and `_library_data` (`:108`); `_publish` and the spelling test go through `update_library.embedded_json` and compare bytes (`tests/test_react_frontend.py:536-537,567`). Mutation: no new weakness found |
| L-3: the round-2 "the outcome is the same" claim | Fixed | the Round 2 section of `T01.md` now says what round 2 did to files lacking `activity` or `chips`, and that round 3 narrowed it; its browser comparison is the second review's table, as the report says |

## Does `_library_data` serve every key-free file byte for byte, and 500 only an unparseable one?

Mostly. Scratch battery calling `react_frontend._library_data` directly (`scratchpad/r3/libdata.py`), service-side
behaviour as read:

| `data.js` begins with the assignment, and is | Result |
| :--- | :--- |
| `{}`, no newline at the end, CRLF, trailing blanks, pretty-printed non-ASCII, `catalogue` not an object or `null`, a literal `1e400` with no key | served, byte-identical to the file |
| holds `catalogue.workspace` | served without the key, in the builder's form; the path is not in the body |
| an array, empty after the prefix, non-UTF-8, `NaN`, a trailing statement or comment, or the key plus `1e400` or a 5,000-digit integer | 500 (unparseable by this decoder, as intended) |
| valid JavaScript with **no final `;`** (`window.CREDIT_OS_DATA={...}\n`, which the page loads by ASI) | 500: `_decode_publication` requires `endswith(";")` (`:67`). See R3-4 |
| two `catalogue` keys, the first holding `workspace`, the last without | served byte-identical **with the path in the body** (the parse keeps the last key). See R3-5 |
| BOM or leading whitespace before the assignment | served as read, key included (known: L-2, parked) |

A file that does not begin with the assignment is returned as the same `Reply` object (`:101-102`), so `index.html` and
every other library file are byte for byte. `ValueError` to `TypeError` for a non-object changes nothing: the base
handler maps any `Exception` to the fixed 500 (`src/deploy_workflow/http_base.py:228-234`), and no code in
`react_frontend` catches `ValueError` around these calls (only `_scope_query`, `:160`, which is unrelated).

## The renamed and split test

`test_library_data_js_refuses_a_publication_that_is_not_one` became
`test_library_data_js_refuses_data_that_is_not_a_json_object`. Its purpose (a file that begins with the assignment and
cannot be read is refused with 500, as `/connected/snapshot` refuses it) is kept and widened to five cases (trailing
statement, truncated, trailing comma, a JSON array, empty). Its second case, `{"catalogue":[]}`, asserted L-1's 500; it
moved to the "served as read" test, which is the behaviour L-1 required. No test was weakened: the spelling test
compares bytes instead of parsed values and keeps the root-absent and file-unchanged checks; no expected value,
skip or gate was edited.

## Mutation check of round 3's tests

Copy of `src/` in the scratchpad with only line 417 reverted to `({error})`
(`PYTHONPATH=scratchpad/r3/mut/src`, import path confirmed): `test_an_unreadable_handoff_issue_names_the_error_kind_not_the_path`
fails with `... delivery not catalogued ([Errno 13] Permission denied: '/tmp/pytest-of-root/.../CP-1.md')`; the two
`error_kind[...]` tests for line 220 pass, as they only assert the type name. So the 417 test is a real guard; the line
220 tests guard a text change that is not needed.

## Files outside T01

`git diff --stat d8d3d634 97cb702`: `react_frontend/__init__.py`, `src/deploy_workflow/credit_os_catalogue.py`,
`tests/test_credit_os_catalogue.py`, `tests/test_react_frontend.py` and the report. None outside T01 (tests and report
are allowed by the worker notes). `git status`: only the four earlier review files, this one, and the
`web/node_modules` set-up link. Nothing under `web/`, `apps/`, `proof/`, `prompts/` or Signal.

## Re-run

| Command | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q tests/test_react_frontend.py tests/test_credit_os_catalogue.py tests/test_update_library.py tests/test_react_preview.py tests/test_react_sources.py tests/test_run_start_service.py` | 342 passed (57 s) |
| `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0: 0 findings, 4 changed files, 420 lines in scope |
| `C1_BASE=http://127.0.0.1:8741 timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C1/probes/c1-001-snapshot-leaks-workspace-path.cjs` (8741 free before) | exit 0: `catalogue.workspace in /connected/snapshot: undefined`, `... /connected/library: undefined`, `path drawn on the report page: false`, `VERDICT not reproduced` |
| Line 417 reverted in a scratch copy, `-k error_kind` | 1 failed (the unreadable-handoff test), 2 passed |

The C5 probe was not run (not requested for this round). Nothing of mine is left running.

## Review findings

| # | Severity | Where | Reason |
| :--- | :--- | :--- | :--- |
| R3-1 | Medium | `src/deploy_workflow/credit_os_catalogue.py:220` (tests `test_a_refused_context_issue_names_the_error_kind[Refused]`, `[ContextRefused]`, `tests/test_credit_os_catalogue.py:271-282`) | Only `Refused` and `ContextRefused` reach this catch; neither can carry a server path (probe above), so the change fixes no leak, yet it replaces the reason the library page's "Not shown" list draws (`views.js:1625`) with a bare class name, which R5 forbids without an owner decision. Restore `({error})`; the two tests should assert the reason text (for `Refused`, the `inputs/<sha> no longer has its recorded sha256` wording). Rests on lead ruling L6, whose premise (that the OSError reaches 220) is wrong, so the lead should confirm. |
| R3-2 | Low | `src/deploy_workflow/credit_os_catalogue.py:417` | The `OSError` branch is the real leak and is fixed, but the `Refused` branch (path-free run-relative reasons) is cut to "Refused" too; keep `str(error)` for `Refused` and name the class only for `OSError` (snippet above). Same R5 reason, hence Low: L6 asks for the kind at 417 and it is a one-line refinement. |
| R3-3 | Low | `docs/audit/2026-11-16-final/output/5-repair/T01.md` (Round 3, "Disclosed, for the lead") | "Nothing in `web/src`, `apps/`, ... reads the parenthetical" is true of parsing but leaves out that `apps/issuer-library/credit_os/web/views.js:1625` draws every issue verbatim on the library page, which is the R5 fact the lead needed to weigh. |
| R3-4 | Info | `react_frontend/__init__.py:67` | A hand-made `data.js` with no final `;` is valid JavaScript the page loads, but now answers 500 (before round 2 it was served raw). Neither builder writes one; unusual input, R3: parked. |
| R3-5 | Info | `react_frontend/__init__.py:103-106` | A `data.js` with two `catalogue` keys, the first holding `workspace`, parses to the last, finds no key and is served as read with the path in the bytes (browser reads the last key). Hostile input, R3: parked; same family as L-2. |
| R3-6 | Info | `apps/issuer-library/credit_os/store.py:600,1167,1319`, `evidence.py:45,116` (not T01's files) | The same path-in-issue-text class: these catch `OSError` and write `describe(error)` (`credit_os/source.py:264-268`: type plus the first 80 characters of `str(error)`) into `store["issues"]`, which reaches `data.js` `activity.issues` and `/connected/snapshot`. `describe(PermissionError(13,'Permission denied','/home/analyst/credit-os/_engine/runs/run-a/live/calls.jsonl'))` gives `PermissionError: [Errno 13] Permission denied: '/home/analyst/credit-os/_engine/runs/run-a/live/c`. Reached only by an `OSError` on a run file; not reproduced end to end. For the lead: `NEEDS FILE` if L6's reading ("an absolute path reaching /connected/snapshot is a leaked path") is to cover it. |

## Not verified

The C5 probe (`snapshot-path-leak.cjs`, port 8735), not requested; a real locked file forcing an `OSError` through
`read_bytes` (the suite patches `Path.read_bytes`, as the report says); the static library page in a browser for the
files round 3 now serves as read (taken from the second review's table); the "Not shown" disclosure rendered in a
browser after a real `OSError` at 417 (read from `views.js`, not run); `describe()` leaks (R3-6) end to end through
`update_library`; Windows spellings of the file name; `tests/test_library_page_browser.py` and
`npm --prefix web run gates` (no `web/` file changed); a live run.
