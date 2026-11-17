# T01 review, round 4 (last round)

Reviewer: fresh reviewer, model Opus 5.5 (claude-opus-5-5) at medium effort (ruling R12). I did not
write this change. Scope: `git diff d8d3d634 e08ac10`, round 4 especially (`git diff 97cb702 e08ac10`).
No code file edited; the six earlier review files left as found.

## Verdict: PASS

## Checks

- **L6b, line 220.** `credit_os_catalogue.py:220` reads `context not used ({error})`;
  `git diff d8d3d634 e08ac10 -- src/deploy_workflow/credit_os_catalogue.py` shows no hunk there, so
  the line is exactly the base text. Only `Refused` (library_index.py, run-relative messages) and
  `ContextRefused` (validation messages) reach it.
- **L6b, line 417.** `why = str(error) if isinstance(error, Refused) else type(error).__name__`.
  Tests assert both branches: `test_a_refused_delivery_issue_keeps_its_path_free_reason` (exact text
  `deliveries/<sha>/CP-1.md no longer has its recorded sha256`) and
  `test_an_unreadable_handoff_issue_names_the_error_kind_not_the_path` (exact
  `(PermissionError)`, and `str(tmp_path)` absent). The context case is asserted for both refusal
  kinds by `test_a_refused_context_keeps_its_path_free_reason`.
- **Refused texts.** Every `raise Refused` in `src/deploy_workflow/library_index.py` (lines 85-305)
  formats only run-relative names, module ids or literal text; none interpolates an `OSError` or an
  absolute path (line 92 chains the `OSError` with `from`, which `str()` does not show).
- **R1-004.** `describe` (`apps/issuer-library/credit_os/source.py:264-273`) returns the type name
  alone for any `OSError` other than `UnreadableFile`; `UnicodeDecodeError` and non-OS errors keep
  `type: text[:80]` as before. No caller (`store.py`, `evidence.py`, `cashflow.py`) changed.
  Tests: a direct call on `PermissionError`/`FileNotFoundError` carrying an absolute path gives the
  bare type name; three cases pin the unchanged text for other errors.
- **`UnreadableFile` exception.** Every raise in the repository: `source.py:233` ("a link"), `:237`
  ("an invalid path", the `ValueError` cause chained, not in `str`), `:241` ("not a regular file"),
  `:243` and `:253` ("over the size limit"), `store.py:621` ("view.json is not the plain file its
  delivery record lists"). All take one literal string, never the `(errno, strerror, filename)` form,
  and nothing subclasses it. None can carry a path. Sound.
- **R3-3.** T01.md round-3 "Disclosed" paragraph now states that `views.js:1619-1626`
  (`libraryNotShown`) draws every catalogue issue verbatim. Fixed.
- **F6.** `tests/test_react_frontend.py` adds the truthy non-dict `catalogue` (`"my workspace"`),
  which kills the mutation the adversarial review described. Fixed.
- **C1-001 / C5-001.** `catalogue()` no longer writes `workspace`; the C1-001 probe (re-run) reports
  `undefined` on both routes, `VERDICT not reproduced`.
- **No test weakened.** The only removed test lines across the whole change are the base assertion
  `result["workspace"] == str(tmp_path)` (replaced by `"workspace" not in result` and a path-absence
  check, the intended behaviour change) and two import lines rewritten. Round 4 renamed the round-3
  context test and made it stricter (reason text asserted, not just the kind).
- **Files.** The whole change touches only `react_frontend/__init__.py`,
  `src/deploy_workflow/credit_os_catalogue.py`, `apps/issuer-library/credit_os/source.py`,
  `tests/test_react_frontend.py`, `tests/test_credit_os_catalogue.py`, `tests/test_credit_os_store.py`
  and the report. All T01's (source.py joined under L6b).

## Re-run

| Command | Result |
| :--- | :--- |
| `timeout 300 uv run pytest -q tests/test_react_frontend.py tests/test_credit_os_catalogue.py tests/test_update_library.py tests/test_react_preview.py tests/test_react_sources.py` | 247 passed |
| `timeout 300 uv run pytest -q tests/test_credit_os_store.py tests/test_credit_os_chips.py tests/test_library_reader_refs.py` | 395 passed, 2 skipped (permissions not enforced for this user) |
| `timeout 600 uv run python tools/quality_gate.py --base d8d3d634` | exit 0; 0 findings in 6 changed files, 461 lines in scope |
| `C1_BASE=http://127.0.0.1:8741 timeout 600 node docs/audit/2026-11-16-final/output/2-sections/C1/probes/c1-001-snapshot-leaks-workspace-path.cjs` | exit 0; `catalogue.workspace` undefined on `/connected/snapshot` and `/connected/library`; `VERDICT not reproduced` |

Port 8741 was free before and after the probe.

## Review findings

None at High, Medium or Low.

Info only (no change asked): `library_index.py:85` echoes a run-recorded `relative` with `!r`; a
record holding an absolute string would show that string. It is the run's own recorded text, not a
server path the code computes, and the line is unchanged from base.

Not verified: the C5 probe (not asked this round); R1-004 end to end through `update_library` to
`/connected/snapshot` (`describe` checked by direct call and by reading every caller); a real locked
file at `credit_os_catalogue.py:417` (the suite patches `Path.read_bytes`); the static library page in a
browser; the parked R1-005, R1-006, F2, F3, R2-2 and L-2 / R2-3; a live run.
