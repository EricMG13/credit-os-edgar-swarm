# T01 review, round 2: R-1 and R-4 after the second implementation

Reviewer: fresh agent, did not write the change. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-ab170c7c60311be95`, branch
`worktree-agent-ab170c7c60311be95`. Round 1 is `55572433`, round 2 is `dd8acc5d`, base `d8d3d634`.
Reviewed the whole `git diff d8d3d634 dd8acc5d` and the round-2 diff `git diff 55572433 dd8acc5d`.
No code file edited. The three earlier uncommitted review files are untouched. Date 2026-11-17.

## Verdict: PASS

R-1 and R-4 are fixed. No High or Medium finding. Three Low and two Info notes; none needs a third
implementation. One of the Lows (L-1) is a behaviour change the finding did not ask for, with a cheap
optional remedy; it is on inputs the service never writes, so it is parked, not sent back (R3).

## R-1 (`GET /library/data.js` sent `catalogue.workspace`): fixed

- Route: `service.Handler._get` serves every `/library/<path>` through `Handler._file`
  (`src/deploy_workflow/run_start/service.py:255`), which is `http_base.contained_file` with the library
  CSP headers (`service.py:374-377`). Round 2 overrides `_file` in the React handler
  (`react_frontend/__init__.py:396-398`) and passes a reply read from the library folder through
  `_library_data` (`:87-102`).
- Test fails before and passes after. I copied `src/`, `react_frontend/` and `docs/rulings` from
  `55572433` to the scratchpad (`r1copy/`), put round 2's `tests/test_react_frontend.py` beside them,
  confirmed the copy's modules were the ones imported, and ran `-k "library_data_js or library_files"`:
  `7 failed, 1 passed` (five spellings leak the root; the two malformed cases answer 200, not 500; the
  "served as written" test passes, as it should). At `dd8acc5d`: all 8 pass.
- Scratch end to end (`scratchpad/rev2/scratch.py`, service from this worktree, builder
  `update_library.embedded_json` for the expected form):

| Case (older `data.js`, `catalogue.workspace` = the service root) | Result |
| :--- | :--- |
| `/library/data.js` | 200; the body equals, byte for byte, the builder's own output without the key; a nested `workspace` field inside `catalogue.real[]` kept; U+2028, `<`, a 20-digit integer, `1.0`, `<` text kept |
| `Accept-Encoding: gzip` | 200, gzip, root absent after decoding; type `text/javascript`, library CSP and `X-Frame-Options: SAMEORIGIN` kept |
| `?x=1`, `//data.js`, `/./data.js`, `data.js/` | 200, root absent |
| CRLF line ending | 200, root absent |
| A 16 MB older file | 200 in 0.20 s (0.10 s for a file that already lacks the key) |
| Real headless Chromium on the real static library page, older `data.js` | `DESIGN_APP.workspace === ""`, `problem === ""`, page opens (from disk the same file gives the path) |

- The C1-001 probe passes (below). The static library page reads `catalogue.workspace` only into
  `DESIGN_APP.workspace`, which nothing reads, so the removal changes nothing the reader sees.

## R-4 (wording): fixed

The test docstring (`tests/test_react_frontend.py:483`) now says "the snapshot drops it". The
`_visible_scope` comment (`react_frontend/__init__.py:80-81`) says nothing reads the field and neither
the reply nor `data.js` sends it. Both are true for the field after round 2. (They stay true only for a
`data.js` that begins with the assignment; see L-2.)

## Does the `_file` override break a caller or another served file

Every route that reaches `Handler._file`, found by grep over `src/`, `react_frontend/`, `proof/`,
`apps/`, `tools/`:

| Caller | `base` | Effect of the override |
| :--- | :--- | :--- |
| `service.Handler._get`, `/library/<path>` (`service.py:255`) | `engine/library` | Filter applies: the only route it is meant for |
| `service.Handler._get`, `/activity.js` (`service.py:257`) | `engine` | Not equal to `engine/library`: unchanged |
| `react_frontend` `_get`, `/data.js`, `/symbol.svg`, `/THIRD-PARTY-NOTICES.md`, `/assets/`, `/connected-assets/`, `/fonts/` (`__init__.py:386-393`) | `dist` and `dist/<dir>` | Unchanged. `/data.js` here is the static app's fixture in `dist`, a different file with a different shape |

- The signature, keyword-only `direct`, the 200-or-raised-404 contract of `contained_file` and the header
  dict are kept. `super()._file` runs first, so containment, link, NUL and type rules and the
  `refuse(404)` raise are exactly upstream's. The same `reply` object comes back when the filter does not
  apply, so `_get`'s `response.headers[...]` edit for assets still works.
- No other class overrides `_file` or subclasses this `Handler`; `proof.serve` and `preview` use
  `make_server`. `contained_file` is used only by `service.py`. `Signal` does not use this handler.
- The comparison `base == self._layout.engine / "library"` is built the same way as upstream's argument
  (same `_layout.engine`), so it holds on Windows too without `resolve()`.
- A library file other than `data.js` is affected only if its bytes begin with `window.CREDIT_OS_DATA=`.
  None of the library's own files does (grepped `apps/issuer-library/credit_os/web/`; zips begin `PK`).
  One that did, and was not a publication, would now answer 500 (scratch `x.js`: 500).
- `_read_publication` keeps its behaviour for its three callers (`None` for a missing or non-regular
  file, otherwise the same decode); the split is behaviour neutral. The docstring moved to
  `_decode_publication`; `_read_publication` has none (Info, I-1).

## Is the new 500 justified by the finding

Not by the finding, which names `/connected/snapshot`. It follows from R-1's repair: the filter must read
the file to know whether the key is present, and a file it cannot read is refused (fail closed), as
`/connected/snapshot` already refuses it (existing test, `{};console.log(0);`). A file that begins with
the assignment and cannot be read was previously served as written.

Did the static library page behave better before? I ran the real library page in headless Chromium on
the real built page, with the file served as it lay on disk (before) and through the service (after):

| `data.js` | Before (raw) | After (500) |
| :--- | :--- | :--- |
| Truncated | "The data file did not load" | the same message |
| `{"catalogue":[]}` | "The data file lacks workspace." | "The data file did not load" (different words, same stated problem) |
| Invalid JSON or JS | a stated problem | a stated problem |
| Older publication, all four keys | works | works, key removed |
| Lacks `chips` only | **works**, no problem stated | **"The workspace could not be read: The data file did not load"**, no runs listed |
| Lacks `activity` only | **works**; Run activity says it could not be read (`static-boot.js:14-18`, `SOURCE.md:126`: "keeps the rest working") | **whole page unreadable**, same banner |

So for malformed files the page was no better before. For a file that parses but lacks `activity` or
`chips`, which the page is built to tolerate, it was better before: the 500 comes from reusing
`_decode_publication`, which requires all four `EXPORT_KEYS` as objects (`__init__.py:64-66`), stricter
than the control needs. R5 is not triggered for any file the service itself produces: the library
builder (`apps/issuer-library/update_library.py:281-293`) always writes all four, and the retained
preview needs all four for the connected app already (`/connected/snapshot` refuses the same file). It is a
change not asked for, narrow, on hand-made files. See L-1.

## Is it the simplest correct design

Considered, with what each covers:

| Design | Size | Covers | Verdict |
| :--- | :--- | :--- | :--- |
| Round 2: `_file` override, `_library_data`, `_decode_publication` split, plus round 1's `_visible_scope` filter | about 33 lines of code, 3 tests | the snapshot routes and every spelling of `/library/data.js`, scoped or not, stale file or retained preview | Correct for every route; the smallest in the two files T01 owns |
| Intercept `path == "/library/data.js"` in `_get` | about 10 lines | only the literal spelling; `%64ata.js`, `//data.js`, `./data.js`, a link to it all leak | Simpler, not correct |
| Strip once in `_decode_publication` and always re-emit | similar | same routes, and `_visible_scope`'s dict rebuild goes | Equal size; rewrites every `data.js` on every request and changes the bytes of retained-preview files; not simpler |
| Filter where the publication is written: `react_frontend/preview.py::_write_snapshot` (the only writer that can put an older catalogue back after the start-up rebuild) | about 3 lines, one test | the retained preview on both routes at once, no new 500, no `_file` override, no per-request parse; round 1's read filter becomes unneeded | **Simpler**, and correct for the realistic population (`Scheduler.__init__` rebuilds `data.js` at every start, so the retained preview is the one place an older file returns). Not correct for a stale file left when a rebuild fails. And `preview.py` is not one of T01's files, so it needs a `NEEDS FILE` |

So the write-side filter is the simpler design and covers every case that can occur in practice except a
failed-rebuild leftover; within T01's two files, the round-2 design is the smallest that closes every
route, and I would keep it. For the lead's record: if `preview.py` were added to T01's files, writing the
key out at `_write_snapshot` would replace the `_file` override, the split and three tests with a small
change and no new refusal. I am not asking for it (L-1, below, is the cheaper remedy if the lead wants to
remove the regression).

## Did it weaken a test, or touch a file outside T01

- Round 2 changed no expected value. It added three tests (eight cases) and one helper; the only edit to
  an existing test is the docstring wording of R-4. The new expectations are built from the planted dict,
  not from production code. Round 1's change to `test_catalogue_lists_only_library_runs` (an assertion
  that encoded the defect, now `"workspace" not in result` plus no root string anywhere) is still the
  behaviour the finding requires.
- Files changed `d8d3d634..dd8acc5d`: `react_frontend/__init__.py`, `src/deploy_workflow/credit_os_catalogue.py`
  (T01's two), `tests/test_credit_os_catalogue.py`, `tests/test_react_frontend.py` (their tests), and
  `docs/audit/.../5-repair/T01.md`. Nothing under `web/`, `apps/`, `proof/`, `prompts/`, or Signal.
  `git status` shows only the three uncommitted review files and `web/node_modules` (set-up symlink).

## Re-run

| Command | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q tests/test_react_frontend.py tests/test_credit_os_catalogue.py tests/test_update_library.py tests/test_react_preview.py tests/test_run_start_service.py` | 302 passed |
| `timeout 300 uv run pytest -q tests/test_react_performance.py tests/test_react_sources.py tests/test_react_admission.py` | 48 passed |
| `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0: 0 findings, 4 changed files, 256 lines in scope |
| `C1_BASE=http://127.0.0.1:8741 timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C1/probes/c1-001-snapshot-leaks-workspace-path.cjs` (stale service on 8741 checked: none) | exit 0: `catalogue.workspace in /connected/snapshot: undefined`, `... in /connected/library: undefined`, `VERDICT not reproduced` |
| New tests against round 1's source (scratch copy) | 7 failed, 1 passed, as described above |

The C5 probe was not run, by instruction. The scratch services I started (ports chosen at random and
8799) are stopped; the `proof.serve` on 8761 belongs to another worker.

## Review findings

| # | Severity | Where | Reason |
| :--- | :--- | :--- | :--- |
| L-1 | Low | `react_frontend/__init__.py:96` (reuses `_decode_publication`, `:64-66`) | A `data.js` that parses but lacks `activity` or `chips` (which `static-boot.js:14-18` and `SOURCE.md:126` tolerate) now answers 500 on `/library/data.js` and the page reads "The workspace could not be read"; before it worked. Only for hand-made files; the builder writes all four keys. Optional remedy: in `_library_data` require only a JSON object with an object `catalogue`, and return any other file as read. |
| L-2 | Low | `react_frontend/__init__.py:94` | The filter keys on `body.startswith("window.CREDIT_OS_DATA=")`; a `data.js` with a leading newline or a BOM is served as written, with the key (scratch: `LEAK`), though `/connected/snapshot` refuses the same file. Neither builder writes one (hostile or unusual input, R3: parked); the report already says so. |
| L-3 | Low | `docs/audit/2026-11-16-final/output/5-repair/T01.md:138` | "For the browser the outcome is the same ... the message differs only for such a malformed file" is not true for a file that lacks only `activity` or `chips` (L-1): the page worked before and does not now. Correct the sentence or fix L-1. |
| I-1 | Info | `react_frontend/__init__.py:52-54` | `_read_publication` lost its docstring in the split (the text now sits on `_decode_publication`). |
| I-2 | Info | `react_frontend/__init__.py:82`, `:97-98` | The key is dropped in two forms (dict comprehension in `_visible_scope`, `del` in `_library_data`); fine, but a single helper would be the one place to change. |

No High or Medium finding, so nothing goes back to an implementer.

Not verified: the C5 probe (`snapshot-path-leak.cjs`, port 8735), by instruction; a retained preview
built from a real earlier snapshot run end to end through `react_frontend.preview` (the preview path was
read, and the older-file case was exercised by planting the file, not by `preview`); Windows path
spellings (`DATA.JS`, `DATA~1.JS`) on the work PC, argued from the content-based filter only;
`tests/test_library_page_browser.py` and `npm --prefix web run gates` / `proof:connected` (no `web/` file
changed; the static library tests do not go through this service); R-2, R-3, R-5 and R-6 of the earlier
adversarial review (not part of this round); no live run.
