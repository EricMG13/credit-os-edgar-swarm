# T12 review: synthetic proof finishes a run with no legal documents; documented steps complete a run

Reviewer: fresh Sonnet agent (did not write the change), group repair-1. Commit `8c576641` on
`worktree-agent-acdfc884ab3d4aa2e`, BASE `65a293eb`. Findings reviewed: B0-003 (with J1-014), J1-002.
Files changed by the commit: `proof/launcher.py`, `proof/test_launcher.py`, `docs/react-workflow.md`,
and the implementer's report `output/5-repair/T12.md`. Nothing under `proof/handoffs/`, `web/`,
`src/`, `prompts/` or Signal. `proof/test_launcher.py` is the test file of a T12 file, which the
worker notes allow.

## Verdict: PASS

No High or Medium finding. Four Low findings and one disclosed residual (below).

## The central question

### (a) Is the synthetic launcher the right layer?

Yes. Evidence from the engine:

- `src/deploy_workflow/run_expectations.py:396` `no_legal_documents(context)` is `attachments.legal_documents == "none"`.
  It is the one rule the forecast's CP-4 rules and the launcher's routing, instructions and acceptance of CP-4 share.
- `src/deploy_workflow/owners/cpos_launch.py:779` sends CP-4 the `_SOURCE_GATE` text when the rule holds. `:1294-1302`
  `_source_gate_issues` refuses a CP-4 draft that is not `module_status: Blocked` (`_blocked_at_gate`, `:676`). `:517-520`
  `_layout` moves the `capital-structure` block from CP-4 to CP-3 for such a run.
- The engine's own tests pin both sides: `tests/test_cpos_launch.py:1970` (a blocked CP-4 finishes the run, CP-4 called once, CP-3
  delivers Capital structure with `| Observed | 1 |`) and `:1990` (a filled CP-4 is refused three times and the run stops). So the
  engine does what it should; a model that follows the gate finishes the run. The defect is that
  `proof/launcher.py` stands in for the model and answers CP-4 with the canned handoff written as if an agreement existed,
  ignoring the gate. I re-ran the new test against the old launcher (a scratch copy of the commit's tree with the base
  `proof/launcher.py`): `[none]` fails with `stopped: checker ... CP-4 not accepted within bounds`, which is the J1-002 failure.
- A change to the engine would be wrong (its behaviour is pinned and correct). A change to `proof/handoffs/CP-4.md` is
  barred (tasks.md T12 note; worker notes). A new file in `proof/handoffs/` is barred by the same note. The finding's own
  `suggested_change` says "deliver a blocked Legal & covenants handoff in the synthetic proof", and `proof/launcher.py` is in
  T12's file list. The blocked text lives in the launcher as the stand-in for a model's reply at the gate; no canned
  handoff and no module-written text changed.
- The second consequence (CP-3 must carry Capital structure) is real. I removed the CP-3 insertion in a scratch copy and the
  `[none]` test fails again, so the insertion is needed and the test catches its absence.

### (b) Is every value copied or structural, and is `1` the canned CP-4 value?

- The blocked CP-4 (`proof/launcher.py:25-70`) mirrors the engine test's accepted blocked form
  (`tests/test_cpos_launch.py:1809-1890`): the same `NO_DOCUMENT` wording, the same selectors, the same one not-assessable row
  each, `x` as the reporting unit (also the canned CP-4's own unit for the leverage rows), the Bottom line copied from the
  engine test's `blocked_cp4`. It contains no numeral and no amount. `module_status: Blocked`, `Source gate`, `Blocked`,
  `Not assessable.` are fixed structural words from the gate's own wording.
- `| Observed | 1 |` is the canned CP-4 section (`proof/handoffs/CP-4.md:20-25`) word for word: same table, same row, same value
  (the quantity has no unit or period in either handoff; it is the placeholder the Bottom line calls "one observed item", which
  every canned module repeats). It is also the value the engine's own CP-3 test fixture writes. No figure is invented.
- I diffed the launcher's reply for every module against the base launcher's: with `gated=False` all 14 are byte-identical, and
  with `gated=True` only CP-3 (the one inserted section) and CP-4 (the blocked form) differ.
- Weakness, Low (finding L1): the `1` is a second copy of CP-4.md's text and nothing pins them equal. I changed it to `7` in a
  scratch copy and the whole `[none]` test still passed.

### (c) Does the reader still see "synthetic"; can anything be mistaken for unsupported analysis?

I drove the real service (port 8761, under the lock) for both cases with a scratch driver and read all five pages of each report.

- The report header reads `Synthetic test` and the run header the same, in both runs. Every other module still says
  "The synthetic issuer shows one observed item" and carries its own `Synthetic data only in the cp ... case` limitation.
- Overview, none-run vs executed-run: the only differences are Legal & covenants (`Not assessable`, with the gate sentence, instead of
  `Delivered` / the canned sentence) and the loss of CP-4's `Synthetic data only in the cp four case` limitation line (the blocked
  handoff has no limitations section, as the gate prescribes). The Evidence page counts differ only by the missing agreement upload
  (3 source files vs 2).
- The Forecast page shows the covenant-headroom chart as `Not established for this run / No executed governing document` instead of the
  canned 4.2x and 2.6x rows. The `x` unit and the not-assessable cells are not drawn. So no covenant figure is shown, and what is shown
  is a statement of absence that is true of the run.
- Capital structure (`Observed | 1`) now sits under CP-3 (Security selection) in the none-run and under CP-4 in the executed run. It is the same
  placeholder, in a header-labelled synthetic report. A reader cannot take "Not assessable: no executed governing document was supplied" for
  analysis; it is what a live CP-4 writes at the gate. No finding.

### (d) Is a run that supplies the agreement unchanged?

Yes. `blocked = module == "CP-4" and gated` and the CP-3 branch are both false when `gated` is false, and the `return` list is built from the
same elements as before (the empty `BLOCKED_FRONT` splice adds nothing). The byte comparison above covers all 14 modules; `[executed]` in the
test asserts CP-4 is not Blocked and keeps its Capital structure, and CP-3 has none. A `draft` context is also `gated=False` (the engine
does not gate it). The fixture context declares `executed` by default (`cases/context/research-minimal.json`), so the `[executed]` case asserts what
the old test asserted; no expected value was edited.

## Other checks

- **Documentation matches the controls.** Every name in the rewritten paragraph exists in the code: Your name, Continue to purpose, Continue to context,
  Review run, Submit run, Start synthetic run, Legal documents (options No agreement / Executed agreement, `start/plain.ts:40-43`), The agreement,
  Portfolio workbook, Limits to decide, `Approve: I have read this summary...`, More context, Also affects, Will refuse (`StartRun.tsx`,
  `start/ReviewSheet.tsx`). The "Review inputs" / "Approve summary" buttons survive only in static-app and test files. I followed both paragraphs'
  controls with a driver: with the agreement, Finished, 3 limits; without it, Finished, `Legal & covenants stops with "No executed governing document"`
  and `Also affects: Refinancing & LME, Security selection, Evidence validation, Committee decision` on the sheet, 14 of 14 modules, Open report present.
  The added statements (other modules show no sign of the limit; first run of an issuer only; new empty folder) are true.
- **`j1-journey.cjs` exit 1 is explained correctly and is not a regression.** I ran it: run A (documented steps, no agreement) is now `Finished`,
  so step 4 ("Start from this run") starts a second Full run for the same issuer; the launcher requires `args.prior == "none"` (`proof/launcher.py`
  `run_engine`), so run B shows `Failed ... launcher exited 2` and the probe times out waiting for "Open report". The rule predates T12, and J1's own
  report already lists "the synthetic launcher refuses a second Full run on the same issuer" under Not verified. B0-003's probe signal is `none`
  (not an exit probe), and the worker did not edit the probe.
- **No test weakened.** The old test gained a `legal` parameter; `[executed]` asserts the same things; the new assertions only add. The `[none]` case
  fails on the base launcher (reproduced) and passes on the change. No test skipped, no gate loosened.
- **No file outside T12's.** `git diff --stat 65a293eb 8c576641`: the report, `docs/react-workflow.md`, `proof/launcher.py`, `proof/test_launcher.py`.
  `git status` is clean apart from the untracked `web/node_modules` symlink from set-up.
- **Callers.** `canned_handoff` is called only from `run_engine`; `gated` is keyword-only with a default that keeps the old behaviour.
  `ContextRefused` (a `ValueError`) from the new `load_context` call is caught by `main` (exit 2); the scheduler only passes a context the form already validated.
- **Labelling.** The launcher comments, the test docstring and the draft VERIFICATION entry state the scope (offline, canned replies, no provider,
  nothing about a live CP-4; the four "Also affects" modules show no limit). That meets AGENTS.md's labelling rule and R4.

## Re-runs

| Check | Command | Result |
| :--- | :--- | :--- |
| Tests | `timeout 300 uv run pytest -q proof tests/test_react_portfolio.py` | 16 passed (8 s) |
| Package tests | `timeout 300 uv run pytest -q tests/test_package_react_windows.py` | 6 passed |
| Quality gate | `timeout 600 uv run python tools/quality_gate.py --base 65a293eb` | exit 0; 0 findings, 2 files, 239 lines |
| J1-002 probe | `timeout 900 flock /tmp/repair1-port-8761.lock timeout 600 node .../j1-002-accepted-limit-fails-run.cjs` | exit 0: `Finished`, `14 of 14 modules`, `rows reading "Not run": 0`, Open report present |
| J1 journey | same lock, `j1-journey.cjs` | exit 1 as the worker said (run A Finished; run B `Failed ... launcher exited 2`; TimeoutError) |
| New test, base launcher | scratch copy of the commit with `proof/launcher.py` from `65a293eb` | `[none]` fails: `stopped: checker`, `CP-4 not accepted within bounds` |
| Mutation: no CP-3 section | scratch copy, CP-3 branch off | `[none]` fails |
| Mutation: `Observed | 7` | scratch copy | **passes** (finding L1) |

No load timeout occurred. `web/dist` already existed and no `web/` file changed, so it was not rebuilt.

## Review findings

| # | Severity | Where | Finding |
| :--- | :--- | :--- | :--- |
| L1 | Low | `proof/launcher.py:72`; `proof/test_launcher.py:148` | `CAPITAL_STRUCTURE` is a hand-typed second copy of `proof/handoffs/CP-4.md:20-25`, and no test pins the two equal; changing `1` to `7` leaves the test green and the CP-3 page would then contradict "one observed item". Read the section from `HANDOFFS / "CP-4.md"` at reply time, or assert the delivered CP-3 section equals CP-4.md's. |
| L2 | Low | `proof/test_launcher.py:134-149` | Requirement (d) (only CP-3 and CP-4 replies change when gated; every other reply, and every reply when not gated, is unchanged) is checked by nothing. A unit test of `canned_handoff` for all 14 modules with `gated` false and true (compare to the file contents) would pin it; I verified it by script only. |
| L3 | Low | `docs/react-workflow.md:83-84` | In the description the worker edited, three uploads are now named but it still says "inspects both documents", and "five-step Run page" is stale (the proof's own label is "four-step intake", `web/scripts/connected-proof.mjs:1369`; the form has four steps). Say "the documents" and "four-step". |
| L4 | Low (disclosed, outside T12's files) | `src/deploy_workflow/inbox/runs.py:352`, `src/deploy_workflow/run_events.py` `stop_reason` | The product-side half of J1-002 stays open: a genuine checker stop still shows only "stopped: checker" on the run page. The worker disclosed it as NEEDS FILE. The task title ("a refused module is reported as such") is met only for the synthetic cause; the lead should decide who takes `runs.py`/`run_events.py` before J1-002 is marked closed. The J1-002 exit probe passes. |

Not findings: the review sheet's "five limited modules" is shown for Legal & covenants only because the four "Also affects" modules answer with canned text
(the doc says so, and T12.md lists it under Not verified); the second-Full-run refusal; the `x` unit in the blocked chart row (copied from the engine's
own accepted fixture and not drawn).

Not verified: what a live model writes at CP-4's gate (R4, no paid call; the blocked text is a stand-in copied from the engine's test fixture); the
packaged zip (`tools/package_react_windows.py` was not built) and Windows; `proof:connected` on branded Chrome and Edge (this machine has neither); a
`--modules` subset that includes CP-4 but not CP-3 under no legal documents (the scheduler's Full run never makes one; the engine would then keep
Capital structure on CP-4 and the blocked CP-4 would lack it); the J1-002 probe against the base launcher (the worker's "before" output was not
re-run; the base-launcher test failure reproduces the same cause); load timeouts under ten parallel agents (none seen).
