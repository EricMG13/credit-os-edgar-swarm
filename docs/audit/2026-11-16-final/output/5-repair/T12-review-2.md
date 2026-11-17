# T12 follow-up review: findings L1-L3 of the first review

Reviewer: fresh Sonnet agent (did not write the change), group repair-1. Follow-up commit `1b0b03d72e2f`
(the brief wrote `1b0b03d6`; HEAD of `worktree-agent-acdfc884ab3d4aa2e` is `1b0b03d`, which is the
commit named in its message "T12: read the capital structure from the canned CP-4; pin the gated
replies; true proof wording (B0-003, J1-002; review L1-L3)"). Diff reviewed: `git diff 8c57664 1b0b03d`.
Base for the gate: `65a293eb`.

## Verdict: PASS

L1, L2 and L3 of the first review are fixed. No High or Medium finding. Two Low findings (one is a
false statement in the report about how a missing section is reported; one is an edge of the new
regex), both in T12's own files and neither reachable without editing `proof/handoffs/CP-4.md`.

## What changed

Four files: `proof/launcher.py`, `proof/test_launcher.py`, `docs/react-workflow.md`, and the report
`output/5-repair/T12.md` (its new Follow-up section). `git diff --stat 8c57664 1b0b03d` shows
nothing else; `git diff 8c57664 1b0b03d -- proof/handoffs web src prompts` is empty. `git status` is
clean apart from this file, `T12-review.md` and the `web/node_modules` symlink from set-up. The test
file changed by addition only (imports, `MODULES`, four helpers and two new tests); no existing test or
expected value was edited, skipped or loosened. No gate loosened.

## Are L1 to L3 fixed?

**L1 (hand-typed copy of CP-4's section): fixed.** `CAPITAL_STRUCTURE` is gone. `capital_structure()`
(`proof/launcher.py:72-80`) reads `HANDOFFS / "CP-4.md"` at reply time and cuts the section out by
regex; `canned_handoff` calls it (`:128`). It reads nothing else: the only file opened is CP-4.md and
only the matched section is returned. `HANDOFFS` is read as a module global at call time, so the new
test's `monkeypatch.setattr(launcher, "HANDOFFS", ...)` takes effect. The delivered string is
unchanged for the shipped CP-4 (`### Capital structure\n\n| Item | Value |\n| --- | --- |\n| Observed | 1 |\n`),
so no reply changed. My mutation M1 (below) puts the hand-typed constant back: the read-through test
fails; the first review's `1` to `7` mutation is exactly what that test does in a copy of the handoffs.

**L2 (nothing pinned "only CP-3 and CP-4 change, only with no legal documents"): fixed.**
`test_replies_differ_from_the_canned_handoffs_only_when_no_legal_documents` (`proof/test_launcher.py:183`)
runs `canned_handoff` for all 14 modules for `executed`, `draft` and `none`. `MODULES` is the 14 of the
Full pathway (checked against `proof/handoffs/`: the 14 files). Ungated, every reply equals the canned
handoff in a wrapper the test writes out itself (`canned`, `:166`, spelled out, not calling the launcher);
gated, exactly `{"CP-3", "CP-4"}` differ, CP-3 equals the canned CP-3 with the section inserted before
`## Calculations`, and CP-4 is the blocked form with no Capital structure.

On the question put to me, whether it is acceptable that the test takes the gate decision from the
engine's `no_legal_documents`: yes. The value handed to `canned_handoff` is the parametrised literal
`gated`, not the engine's output; the engine's function is only called to assert
`no_legal_documents(context) is gated` for each of the three literals (`:191`), which pins the engine's
rule to the test's own expectation per case and would fail if the engine started gating `draft`. The
expected replies come from the files and from literals (`section`, the blocked front matter and the
Bottom line prefix), not from the launcher. Two limits, neither a defect: (1) the ungated expectation is
"the canned file", the fixture itself, which any such test must take from the file; (2) the test does not
exercise `run_engine`'s own call `gated = no_legal_documents(...)` (`proof/launcher.py:156`); the two
scheduler cases (`executed`, `none`) do, and `draft` is not driven end to end. Also: the test pins
CP-4.md's section to the literal `| Observed | 1 |`, so a future edit of the canned CP-4 needs a test edit
(wanted: it is the "one value" the first review asked to be pinned; `proof/handoffs/` is barred anyway).

**L3 (stale documentation): fixed and true.** `docs/react-workflow.md:83-87` now says "four-step Run page"
(`STEPPER_STEPS` in `web/src/pages/connected/StartRun.tsx:107-112` has four entries; the proof's check
label is "four-step intake", `web/scripts/connected-proof.mjs:1369`), "inspects the three uploaded
documents" (the proof uploads the filing, workbook and agreement in one `setInputFiles` and presses
Inspect documents once, `:173-188`), and "selects the workbook and the executed agreement in the form"
(`:255-264`: the Portfolio workbook select, Legal documents `executed`, The agreement select). No other
"five-step" or "both documents" remains in the doc. (`README.md:168` still says "five steps" for the
analyst's path; it is outside T12's files and was not part of L3.)

## Reading the section at reply time: missing file or section

Driven end to end through the real scheduler (the J1-002 flow with `legal_documents: "none"`) with a
scratch wrapper that points `proof.launcher.HANDOFFS` at a broken copy (scratch files in the session
scratchpad; nothing edited in the worktree). Control (an intact copy): `finished`, 14 accepted.

| CP-4.md in the copy | Run status | Reason on the page | Log tail | Where the cause is |
| :--- | :--- | :--- | :--- | :--- |
| intact | finished | none | `Accepted: ... CP-3 ... CP-6`, `Charged: USD 0E-8` | n/a |
| heading renamed (no section) | failed | `stopped: provider` | `Stopped: cpos_live_stopped: sent_unknown; charge=None; overrun=False` | only `live/calls.jsonl` and a response json in the retained run |
| file deleted | failed | `stopped: provider` | same | only `live/calls.jsonl` and a response json |
| section is the last thing in the file | failed | `stopped: provider` | same | same |

So the behaviour is not "exit 2 with a clear message". `capital_structure()` is called from inside the
patched `LiveAdapter.complete` (`proof/launcher.py:176`), so its `ValueError` or `OSError` is caught by
the engine's live loop and reported as a provider failure, never reaching `launcher.main`'s
`except (OSError, ValueError)` (`:211`), which is what the report says (finding F1). There is no traceback
on the page or in the log; the page says `stopped: provider` and a reader would look for a provider fault.
The same happens for every other canned read in `canned_handoff` (the pre-existing
`(HANDOFFS / f"{module}.md").read_text()`), so it is not new in kind, but the follow-up added a new way to
reach it and described it wrongly.

## Other checks

- **Nothing under `proof/handoffs/` changed**: confirmed above.
- **No test weakened**: the diff to `proof/test_launcher.py` only adds; `test_real_scheduler_exports_the_submitted_run`
  is untouched in this commit and passes for both `legal` values.
- **Outside T12's files**: none (the report is T12's own).
- **Labelling** (AGENTS.md): the new tests' docstrings and the report's Follow-up section say what they
  cover (offline, canned replies, no provider; "says nothing about a live CP-4"). Expected values in the
  L2 test are written out (section literal, `startswith` front matter, Bottom line prefix); none is computed by
  `canned_handoff` or `capital_structure`.
- **Report numbers**: "26 passed", "0 findings, 2 files, 320 lines", J1-002 `Finished / 14 of 14 / 0 Not run / Open report present` all reproduce.

## Mutations of the new tests

Scratch copy of the commit's tree; each mutation run with `-k "replies_differ or gated_cp3 or scheduler"`, then reverted.

| # | Mutation of `proof/launcher.py` | Result |
| :--- | :--- | :--- |
| M1 | `capital_structure()` returns a hand-typed copy again | read-through test fails (L2 test passes, as it should) |
| M2 | the section also added to CP-5 under the gate | L2 `[none]` fails |
| M3 | CP-4 blocked regardless of the gate | L2 `[executed]`, `[draft]` and scheduler `[executed]` fail |
| M4 | no blank line before `## Calculations` | L2 `[none]` fails |
| M5 | the section returned with an extra trailing newline | L2 `[none]` fails |
| M6 | a stray line appended to CP-6 when gated | L2 `[none]` fails |
| M7 | the section inserted after the Calculations heading | L2 `[none]` and scheduler `[none]` fail |

Every mutation was caught. (In the scratch copy `test_browser_proof_refuses_an_existing_workspace` fails
with `ModuleNotFoundError`: the scratch tree has only `proof/`, `cases/context` and `pyproject.toml`; it
passes in the worktree and is not part of the result.)

## Re-runs

| Check | Command | Result |
| :--- | :--- | :--- |
| Tests | `timeout 300 uv run pytest -q proof tests/test_react_portfolio.py tests/test_package_react_windows.py` | 26 passed (9.7 s) |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base 65a293eb` | exit 0; 0 findings, 2 changed files, 320 lines in scope |
| J1-002 probe | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node docs/audit/2026-11-16-final/output/3-journeys/J1/probes/j1-002-accepted-limit-fails-run.cjs` | exit 0: review sheet promises 5 affected modules; `Finished`; `14 of 14 modules; rows reading "Not run": 0`; Open report present |

No load timeout occurred; nothing was re-run for load.

## Review findings

| # | Severity | Where | Finding |
| :--- | :--- | :--- | :--- |
| F1 | Low | `docs/audit/2026-11-16-final/output/5-repair/T12.md:174`; `proof/launcher.py:72-80`, `:128`, `:176` | The report says a missing section "raises `ValueError`, which `main` reports as exit 2". Driven through the scheduler it is not: `capital_structure()` runs inside the patched `LiveAdapter.complete`, so the engine reports a provider failure (`stopped: provider`, log `sent_unknown`) and the real cause is only in the retained `live/calls.jsonl`. Needs a corrupted `proof/handoffs/CP-4.md` (barred to edit; the L2 and scheduler `[none]` tests fail on it). Either correct the report's sentence, or read the section in `run_engine` beside `gated` (before the engine starts) so `main` prints it and exits 2. |
| F2 | Low | `proof/launcher.py:77` | The lookahead `(?=^#{2,3} )` has no end-of-file alternative, so a `### Capital structure` that is the last section of CP-4.md is reported "has no Capital structure section" although the docstring says the section runs "up to the next heading". CP-4.md has a following heading today, so no reply is affected; `(?=^#{2,3} |\Z)` removes it. |

Not findings: CP-3's insertion mirrors the production `replace` anchor (`\n## Calculations`) in the test, but is compared to a literal
section, so a wrong anchor or a double newline fails (M4, M5, M7); `README.md:168` ("five steps") is the same stale count in a file outside T12.
L4 of the first review (`inbox/runs.py` reason text) stays with the lead as the report says.

Not verified: a live model's CP-4 at the gate (R4, no paid call); `proof:connected` on branded Chrome and Edge (none here), so the doc's description of the proof was read against the script text, not run; Windows and the packaged proof (not built); the L2 test's `draft` case end to end through the scheduler (only `canned_handoff` is driven); a `--modules` subset with CP-4 but not CP-3 under no legal documents; the first review's J1 journey exit-1 explanation was not re-run.
