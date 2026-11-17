# T01 adversarial review, round 2: the server's workspace path in /connected/snapshot and /library/data.js

Reviewer: adversarial, fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch `worktree-agent-ab170c7c60311be95`.
Attacked `git diff d8d3d634 dd8acc5d` (round 1 `55572433`, round 2 `dd8acc5d`), round 2 especially. No code file
was edited; scratch probes are under the session scratchpad (`r2adv/`), not the repository. Services I started
used port 8755 and roots under `/tmp` shorter than 80 characters; all are stopped and the roots removed.
Date 2026-11-17.

## Verdict: PASS

No High or Medium finding. The path no longer reaches the browser on ordinary inputs by any route I could find,
including an older publication in both writers' forms and a retained preview. The R-1 repair holds under every
path spelling, encoding, gzip, Range and conditional request I tried, and the re-emitted `data.js` is byte for
byte the builder's output. Two Low findings and three Info items follow; none gates T01.

## Findings

| # | Severity | Where | Reason | Scope |
| :-- | :--- | :--- | :--- | :--- |
| R2-1 | Low | `react_frontend/__init__.py:87-100` (`_library_data` calls `_decode_publication` before looking for the key) | The fail-closed validation also refuses a publication that holds no `workspace` key but lacks one of the four `EXPORT_KEYS` objects (for example no `chips`): the static library page rendered it before round 2 and now says "The workspace could not be read". The report says the browser outcome of the 500 "is the same"; that holds for unparseable files only. | Within T01 |
| R2-2 | Low | `src/deploy_workflow/run_start/service.py:254-255,374-377` (the base `Handler._file`, used alone by `python -m deploy_workflow.run_start`) | The legacy run-start service, which can be bound beyond loopback, still serves an older `data.js` raw. Reproduced: an older file with `catalogue.workspace` gives 200 with the root in the body. Same population as R-1's second case (a stale library after a failed rebuild; the rebuild is fail-open, `scheduler.py:412-420`), and in that same event the rebuild-failure text already names the root (R-2 of the first review, `held`). Not a file T01 may edit. | New observation (NEEDS FILE if the lead wants it closed, or fold into the T03/R-2 work) |
| R2-3 | Info | `react_frontend/__init__.py:89-92` (recognition by `startswith("window.CREDIT_OS_DATA=")` at byte 0) | A file that holds the key but does not begin with that exact text is served raw: leading newline, space or BOM, `window.CREDIT_OS_DATA = ` with spaces, a comment before it, a `JSON.parse(...)` form. Reproduced (8 variants, all leak). Neither writer produces one (`update_library.py:291-292`, `preview.py:21` both write the prefix at byte 0), and the report discloses the BOM and whitespace case. Unusual input; park under R3. | Within T01, parked |
| R2-4 | Info | `tests/test_react_frontend.py:519-566`, `react_frontend/__init__.py:98-102` | The tests compare the parsed export and ASCII/no-`<`, not the bytes against `update_library.embedded_json`; the form is copied, so drift is silent (harmless to a reader, values stay equal). Dropping the `base == engine/library` guard fails no test (an equivalent mutant today: no other `_file` body starts with the prefix). gzip and a linked `data.js` are not in the tests (checked by hand below). | Within T01 |
| R2-5 | Info | `react_frontend/__init__.py:87-102` | Every `/library/data.js` request now parses the whole file even when it has no key (9 MB: 0.12 s). Acceptable; the connected snapshot route already parses per request. | Within T01 |

Carried forward, not repaired in round 2 and not re-examined as new: R-2 (`held` unscrubbed on `/activity.js` and
`/connected/activity`), R-3 (the `{error}` issue text, scoped and unscoped), R-5 (tasks.md labels the C5 probe
`(exit)`; it is an output probe whose exit 1 is the passing result), R-6 (dead `catalogue.workspace||''` in
`static-boot.js:22`). R-4 is fixed: the test docstring now says "the snapshot drops it" and the `_visible_scope`
comment is true (nothing reads the field; neither the snapshot nor `_library_data` sends it).

## Evidence

### C5 probe, under its lock

```
timeout 900 flock /tmp/repair1-port-8735.lock timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C5/probes/snapshot-path-leak.cjs
service up on http://127.0.0.1:8735, root /tmp/cs-C5/leak-cLQpp4
checked: /connected/snapshot?run=20261117-092656-01 after one synthetic run
absolute paths in the snapshot: []
/connected/library catalogue.workspace: null
RESULT: no absolute workspace path in the snapshot
exit 1
```

Exit 1 is the passing result for this inverted output probe.

### R2-1 (no `chips`, no key): browser, same file, round 1 against round 2

`browse_variants.py` builds a real empty library, then replaces `data.js` and loads `/library/index.html`
in headless Chromium. Round 1 here means the same tree with the `_file` override removed (scratch copy).

| `data.js` | Round 1 (no override) | Round 2 (HEAD) |
| :--- | :--- | :--- |
| fresh, built | loads, `DESIGN_APP.workspace ""` | same |
| older, builder form with `catalogue.workspace` | loads, `DESIGN_APP.workspace "/tmp/t01r2b/_engine"` (the leak) | loads, `DESIGN_APP.workspace ""`, data identical to fresh |
| parseable, no key, no `chips` object | loads and lists issuers | `data.js` 500, page: "The workspace could not be read: The data file did not load" |
| malformed (`{broken;`) | 200, `SyntaxError: Unexpected token ';'`, same "could not be read" page | 500, same page |

A repair that parsed only far enough to remove the key (and failed closed only when it cannot parse at all)
would keep the third row as it was. Whether such an older library exists is not known from this repository
(git history is squashed at `64d0b92`); a retained preview must pass `EXPORT_KEYS` to open in the connected
app, but the static `/library/` page of the same copy did not need to.

### The leak: routes and forms attacked, all clean

- Ordinary completed synthetic run (`proof.serve`, port 8755, root `/tmp/t01r2e2e`): 110 URLs (every
  `/connected/*` route, `/api/runs/<id>`, `/api/runs/<id>/inputs`, `/api/issuers/northbridge`, `/activity.js`,
  `/data.js`, the app pages, and every one of the 87 files under `library/`): 0 contain the root or any
  absolute path. A disk-level scan of the built `library/` found 0 files and 0 zip members (1 zip) holding the root.
- The same sweep after planting the key in `data.js`, builder form and retained-preview form (raw JSON, non-ASCII,
  raw `<`): 110 URLs each, 0 hits. Browser: `window.CREDIT_OS_DATA` identical to the fresh build in both forms,
  `DESIGN_APP.workspace ""`, same page text, no page error; the connected report page's own snapshot is clean.
- Retained preview (`preview.stage` plus `_write_snapshot`, read-only service) with the snapshot's
  `catalogue.workspace` set to another machine's path `/Volumes/analyst-box/credit-os/_engine`:
  `/library/data.js`, `/library/%64ata.js`, `/connected/snapshot`, `?run=case`, `/connected/library`,
  `/connected/reports`, `/connected/report/case`, `/connected/activity`, `/library/index.html`: none holds it.
  `/library/data.js` parsed equals the retained snapshot minus `catalogue.workspace`, the `preview` notice is kept,
  and the file on disk is unchanged after the requests.
- Path spellings of the library file (35, in-process service on 8755): `data.js`, `/data.js`, `%64ata.js`,
  `./data.js`, `x/../data.js`, `%2e/data.js`, `%2fdata.js`, `data.js/`, `data.js?x=1`, `data.js#f`,
  `x%2f..%2fdata.js`, `./%64%61%74%61.js`, `%2e%2e/library/data.js`, `sub/../../library/data.js`, `data.js/.`,
  `data.js%00`, `data.js%20`, `data.js.`, `DATA.JS`, `data.js::$DATA`, `data.js;a=b`, `data.js%3f`, backslash and
  `%5c` forms, `//library/data.js`, `/library//data.js`, `/%6cibrary/data.js`, `/library%2fdata.js`,
  `/library/../library/data.js`, `/./library/data.js`: every one either serves the filtered file or 404s; none
  leaks. A symlink inside `library/` to `data.js` is filtered; `engine/activity.js` linked to `library/data.js` is a
  404 (`direct=True`). Because the filter reads the content, Windows aliasing (`DATA~1.JS`, `::$DATA`) cannot bypass it.
- Shapes of an older file that holds the key (builder form, preview form, pretty-printed, no trailing newline,
  CRLF, trailing blanks, key first, JSON-escaped key name `"workspace"`, duplicate key): all served without it.
  The R2-3 variants (byte-0 prefix differs) are the only ones that leak.
- gzip (`Accept-Encoding: gzip`): `Content-Encoding: gzip`, decoded body equals the builder form, `Vary` present,
  `Content-Length` is the compressed length. `Range: bytes=0-30` and `bytes=-50`, `If-None-Match`,
  `If-Modified-Since`: 200 with the whole filtered body, no `Accept-Ranges`, no `ETag`, `Last-Modified` or
  `Cache-Control` on the file (as before), so nothing is heuristically cached. `HEAD` is 501 (before and after).

### Wrong file, raise, hang, other bytes

- The override returns the same reply object for any file that does not begin with the assignment or has no key
  (`identity.py`: `_library_data(r) is r`). `index.html`, `notes.txt`, `data.old.js`, `data.js.bak` and a
  key-free current `data.js` come back byte for byte; the 404 raised by the upstream `_file` passes through.
- Raise: a file that begins with the assignment and cannot be read as the publication (invalid JSON, not UTF-8,
  `NaN`, missing key objects, `catalogue` a list, `null`, a trailing statement, 100,000-deep nesting, empty after
  the prefix) answers 500 with `{"error": "the service failed; see its log"}`, `Content-Type` JSON,
  `Cache-Control: no-store`, and the service answers the next request. A 9.0 MB file answers in 0.12 s: no hang.
- The 500 leaks nothing: for a malformed file that itself holds the root path, the body is the fixed
  `{"error": "the service failed; see its log"}` and the headers are exactly `Server: RunStart `, `Date`,
  `Content-Length`, `Content-Type` (JSON), `Cache-Control: no-store`, `Vary`, `X-Content-Type-Options` and
  `Cross-Origin-Resource-Policy`; the traceback (JSON position, `RecursionError`, source file paths) goes only to the
  service log.

### The re-emitted file against the builder

`identity.py` took a real `data.js` from a completed synthetic run (558,992 bytes, written by
`update_library.embedded_json`), inserted `catalogue.workspace` at each of the 8 positions among the catalogue's
keys, serialised in the builder's form, passed it through `_library_data`: the result equals the real builder
output byte for byte in all 8. Parse and dump of the real file reproduces it exactly, so the form is the builder's.
For preview-form input the bytes change to ASCII with `<` while every value is equal (the browser check above
and `attack2.py`: parsed equal to the snapshot minus the key).

### Tests and gates re-run

| Command | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q -p no:cacheprovider tests/test_react_frontend.py tests/test_react_performance.py tests/test_react_sources.py tests/test_react_admission.py tests/test_react_preview.py tests/test_credit_os_catalogue.py tests/test_update_library.py` | 253 passed |
| `-k "library_data_js or library_files or snapshot_sends or catalogue_lists"` | 11 passed |
| `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, 0 findings, 4 changed files, 256 lines in scope |

Mutation check of the new tests (scratch copy of `dd8acc5` under the scratchpad, never the repository):
filtering by `relative == "data.js"` fails 4 spelling cases; serving an unparseable file raw fails both refusal
cases; re-emitting non-ASCII with raw `<` fails 5; removing the override (round 1 only) fails 7; keeping the key
(`workspace = ""`) fails 5. Removing the `base == engine/library` guard fails none (R2-4).

### Round 1 parts

`_visible_scope` is still the only serialiser of the publication for both snapshot routes; the removed field has no
reader (`DESIGN_APP.workspace` is read nowhere: `views.js:1995-1997` reads only `.problem`); `catalogue()` was the
only builder of a path (`credit_os_catalogue.py:517` at the base, no other `str(workspace)`, `str(root)` or similar
in the builder files at the base); every Python `["workspace"]` reader is the top-level store object. The one changed
existing assertion encoded the defect. No file outside `react_frontend/__init__.py`,
`src/deploy_workflow/credit_os_catalogue.py`, the two test files and the report is in the diff.

## Commands run

| Command | Result |
| :--- | :--- |
| C5 probe under `flock` (above) | exit 1, no leak |
| `r2adv/attack1.py` (in-process service, 8755) | 35 spellings, shapes, variants, gzip, Range, conditional, HEAD, 9 malformed files, a 9 MB file |
| `r2adv/attack2.py` (retained preview, 8755) | clean on 10 routes, retained snapshot preserved |
| `r2adv/e2e.cjs` (`proof.serve`, 8755, real synthetic run, headless Chromium) | 3 sweeps of 110 URLs, 0 hits; browser data identical |
| `r2adv/identity.py` | byte identity at 8 key positions |
| `r2adv/browse_variants.py`, `browse_variants_mut.py` | R2-1 table |
| `r2adv/legacy.py` (base `run_start` service, 8755) | R2-2: 200, root in body |
| the three pytest runs and the quality gate | as in the table above |

## Not verified

The C1 probe `c1-001-snapshot-leaks-workspace-path.cjs` (port 8741 is not mine; its field is covered by the C5
probe and my sweeps); a real Windows path or the Windows spellings of the file name (`DATA~1.JS`, `::$DATA`,
case-insensitive names), argued from the content-based filter and not run; a retained preview from a real earlier
build of the library (a constructed one was used); older publications written by builders before `64d0b92`;
`catalogue.issues` and `activity.issues` text with a path (R-3, forced only by the first reviewer); the connected
app's other browser journeys and `npm --prefix web run gates` (no `web/` file changed); a live run.
