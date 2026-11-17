# Stage 5 assembled Python and CI page-logic verification

Result: the exact CI Python selection has one unresolved failure. This is scoped Stage 5 verification, not audit completion; stages 6 and 7 were not started by this verifier.

- Worktree `/workspace/audit-final`, branch `audit/final-repairs`; pinned and final HEAD `5e1d98b37305a9da59fb6944740ff17b721051af` (final observed `5e1d98b37305a9da59fb6944740ff17b721051af`).
- Diff/base `origin/main` = `2b881075e51459592bb629ed8abe7ee24e4fa1d9`; changed-test scope derived with `git diff --name-only origin/main...HEAD -- "*.py"`.
- Instructions read: root `AGENTS.md`, audit README including R1–R17, `stages/5-repair.md`, `docs/QUALITY-GATE.md`, `.github/workflows/checks.yml`, and `tests/known-failures.txt`.
- uv 0.12.5 is the existing `/workspace/audit-tooling/bin/uv`; the requested suffixed path `/workspace/audit-tooling/bin/uv0.12.5` was absent. System uv 0.13.6 was not used for checks.
- Every uv check used `run --no-sync`; no sync, package install, build, frontend packager, source edit, commit or push was performed.
- Runtime provenance checked: Python 3.13.15 at `/workspace/audit-final/.venv/bin/python3`; deploy_workflow, credit_os and react_frontend imports resolve inside this exact worktree.
- Every check ran sequentially with `timeout 300` and explicit `PYTHONPATH=/workspace/audit-final/src:/workspace/audit-final/apps/issuer-library:/workspace/audit-final`.

## Counts and distinct scope

- CI: 43 workflow paths (including `tests/model`); 6,004 collected total, 5,829 selected node IDs across 56 selected files. Results: 5,827 passed, 1 failed, 1 existing conditional skip; 175 deselected in total.
- CI deselections are exactly 172 tests excluded by the unchanged `not live and not browser` marker expression, plus the three unchanged known failures listed below. There are no additional deselections.
- Changed/new Python tests outside CI: all 15 relevant files from the final diff, 457 selected nodes, 457 passed, no failures/skips/deselections. All 24 changed/new Python test files are covered across CI and supplemental scopes.
- The two Python scopes are disjoint: 6,286 distinct selected/executed nodes across 71 selected files. Counts are 6,284 passed, 1 failed, 1 existing skip. JUnit node IDs were reconciled against independent collect-only output: zero missing, extra or duplicate nodes in either scope.
- Default quality gate (`--json`, default `--checks all`, default `--base origin/main`): exit 0, 46 changed Python files, 6,257 owned lines, zero findings and no import-contract failure.
- CI Node page logic: exactly five workflow scripts, including Signal renderer; 573 passed, zero failed/skipped; exit 0.
- One existing `inbox_fixtures` PytestAssertRewriteWarning appeared in several collections/shards; it did not suppress or alter test outcomes.

| Check | Selected/executed | Passed | Failed | Skipped | Deselected | Seconds | Exit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| ci-01 | 535 | 535 | 0 | 0 | 0 | 8.029 | 0 |
| ci-02 | 1370 | 1370 | 0 | 0 | 13 | 82.767 | 0 |
| ci-03 | 834 | 834 | 0 | 0 | 5 | 32.184 | 0 |
| ci-04 | 145 | 145 | 0 | 0 | 0 | 3.740 | 0 |
| ci-05 | 222 | 222 | 0 | 0 | 0 | 22.523 | 0 |
| ci-06 | 367 | 366 | 0 | 1 | 156 | 39.823 | 0 |
| ci-07 | 1311 | 1311 | 0 | 0 | 1 | 21.510 | 0 |
| ci-08 | 1045 | 1044 | 1 | 0 | 0 | 18.778 | 1 |
| changed-01 | 121 | 121 | 0 | 0 | 0 | 3.346 | 0 |
| changed-02 | 95 | 95 | 0 | 0 | 0 | 10.152 | 0 |
| changed-03 | 114 | 114 | 0 | 0 | 0 | 26.782 | 0 |
| changed-04 | 116 | 116 | 0 | 0 | 0 | 10.913 | 0 |
| changed-05 | 11 | 11 | 0 | 0 | 0 | 4.096 | 0 |
| quality | 46 files / 6,257 lines | — | 0 findings | — | — | 3.217 | 0 |
| node | 573 | 573 | 0 | 0 | 0 | 1.776 | 0 |

Test shard wall time: 284.643s; longest shard 82.767s. Collect-only: CI 13.179s, changed 2.349s. No timeout occurred.

## Failure and existing exclusions

`tests/test_pathway_tiers.py::test_a_summary_issued_before_per_pathway_caps_must_be_made_again` failed at line 251 with `ValueError: too many values to unpack (expected 3)` while unpacking `issued.read_text(encoding="ascii").split()` into `digest, prior, cap_line`. The current `_record_issued` at `src/deploy_workflow/run_start/submissions.py:847` adds a fourth `limits=<hex JSON>` line to retain approved limitations. The unchanged legacy test assumes exactly three fields and fails during fixture construction, before exercising its historical two-line-record rejection assertion. This report does not treat the cap gate as proven by the failing test. No implementation, test expectation or gate was changed to resolve it.

Full trace: `/workspace/scratch/final-fast-python/ci-08.log`; JUnit: `ci-08.xml`; exact failure node and trace also appear in `results.json`. The coordinator was notified immediately.

The sole runtime skip is `tests/test_run_start_submissions.py::test_a_name_differing_in_case_or_form_is_kept_not_replaced`, reason `case-sensitive disk` at line 1327. The same conditional skip is present in origin/main at line 1326; this verifier added no skip.

The only explicit known-failure deselections, read from the existing file, are:

- `tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment`
- `tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause`
- `tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once`

Their existing reason is the missing `docs/rulings/2026-10-31-context-plan.md` ruling; they were not run or reclassified.

The supplemental launcher coverage uses SourceFake/canned synthetic handoffs and dummy credentials, and checks real local scheduler/export behavior at USD 0. The Teams sender tests use a local loopback HTTP server and injected senders; they do not call a real Teams webhook. No paid/live/provider/seat/browser/external-app command was issued by this verifier.

## Exact commands and retained evidence

Common environment for every command: `cwd=/workspace/audit-final`; `PYTHONPATH=/workspace/audit-final/src:/workspace/audit-final/apps/issuer-library:/workspace/audit-final`.

Every command below has its stdout/stderr in the matching `<name>.log` and its command, cwd, pin, exit and elapsed time in `<name>.json` under `/workspace/scratch/final-fast-python/`. Test shards also retain JUnit XML. `manifest.json` retains initial hashes, exact selection, changed-file scope and known-failure list; `shards.json` retains the complete partition.

### collect-ci: exit 0, 13.179s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once --collect-only tests/test_document_key.py tests/test_synthetic_market_data.py tests/test_library_index.py tests/test_update_library.py tests/test_issuer_library_packaging.py tests/test_reader_summary.py tests/test_credit_os_catalogue.py tests/test_credit_os_store.py tests/test_cpos_launch.py tests/test_cpos_facilities.py tests/test_cpos_periods.py tests/test_cpos_scale.py tests/model tests/test_credit_os_chips.py tests/test_quality_gate.py tests/test_work_pc_delta.py tests/test_inbox_activity.py tests/test_inbox_filing.py tests/test_inbox_layout.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py tests/test_run_start_submissions.py tests/test_run_start_prior.py tests/test_run_start_scheduler.py tests/test_run_start_service.py tests/test_run_start_page.py tests/test_context_module_options.py tests/test_handoff_loop.py tests/test_context_form.py tests/test_library_reader_refs.py tests/test_changes.py tests/test_citation_markers.py tests/test_web_search_scope.py tests/test_prose_checks.py tests/test_confidence.py tests/test_method_scripts.py tests/test_method_scripts_rest.py tests/test_cpos_register_scope.py tests/test_http_base.py tests/test_methodology_selection.py tests/test_portfolio_workbook.py tests/test_portfolio_export.py tests/test_pathway_tiers.py
```

### collect-changed: exit 0, 2.349s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once --collect-only proof/test_launcher.py tests/test_approved_summary_limits.py tests/test_confidence_trace_projection.py tests/test_delivery_reader_wording.py tests/test_downside_follows_forward_model.py tests/test_final_audit_tools.py tests/test_inbox_teams.py tests/test_react_frontend.py tests/test_react_library_cards.py tests/test_react_run_activity.py tests/test_react_run_reason_sentences.py tests/test_react_runtime_identity.py tests/test_react_runtime_metadata.py tests/test_react_sources.py tests/test_run_expectations_words.py
```

### quality: exit 0, 3.217s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync python tools/quality_gate.py --json
```

### node: exit 0, 1.776s

```bash
timeout 300 node --test apps/issuer-library/credit_os/web/reader.test.cjs apps/issuer-library/credit_os/web/static.test.cjs apps/issuer-library/credit_os/web/calendar.test.cjs apps/issuer-library/credit_os/web/changes.test.cjs src/deploy_workflow/signal/web/render.test.cjs
```

### ci-01: exit 0, 8.029s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_document_key.py tests/test_synthetic_market_data.py tests/test_library_index.py tests/test_update_library.py tests/test_issuer_library_packaging.py tests/test_reader_summary.py tests/test_credit_os_catalogue.py tests/test_credit_os_store.py --junitxml=/workspace/scratch/final-fast-python/ci-01.xml
```

### ci-02: exit 0, 82.767s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_cpos_launch.py tests/test_cpos_facilities.py tests/test_cpos_periods.py tests/test_cpos_scale.py --junitxml=/workspace/scratch/final-fast-python/ci-02.xml
```

### ci-03: exit 0, 32.184s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/model --junitxml=/workspace/scratch/final-fast-python/ci-03.xml
```

### ci-04: exit 0, 3.740s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_credit_os_chips.py tests/test_quality_gate.py tests/test_work_pc_delta.py --junitxml=/workspace/scratch/final-fast-python/ci-04.xml
```

### ci-05: exit 0, 22.523s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_inbox_activity.py tests/test_inbox_filing.py tests/test_inbox_layout.py tests/test_inbox_runs.py tests/test_inbox_scheduler.py --junitxml=/workspace/scratch/final-fast-python/ci-05.xml
```

### ci-06: exit 0, 39.823s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_run_start_submissions.py tests/test_run_start_prior.py tests/test_run_start_scheduler.py tests/test_run_start_service.py tests/test_run_start_page.py --junitxml=/workspace/scratch/final-fast-python/ci-06.xml
```

### ci-07: exit 0, 21.510s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_context_module_options.py tests/test_handoff_loop.py tests/test_context_form.py tests/test_library_reader_refs.py tests/test_changes.py tests/test_citation_markers.py tests/test_web_search_scope.py tests/test_prose_checks.py tests/test_confidence.py --junitxml=/workspace/scratch/final-fast-python/ci-07.xml
```

### ci-08: exit 1, 18.778s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_method_scripts.py tests/test_method_scripts_rest.py tests/test_cpos_register_scope.py tests/test_http_base.py tests/test_methodology_selection.py tests/test_portfolio_workbook.py tests/test_portfolio_export.py tests/test_pathway_tiers.py --junitxml=/workspace/scratch/final-fast-python/ci-08.xml
```

### changed-01: exit 0, 3.346s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_approved_summary_limits.py tests/test_confidence_trace_projection.py tests/test_delivery_reader_wording.py tests/test_downside_follows_forward_model.py tests/test_run_expectations_words.py --junitxml=/workspace/scratch/final-fast-python/changed-01.xml
```

### changed-02: exit 0, 10.152s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once proof/test_launcher.py tests/test_inbox_teams.py --junitxml=/workspace/scratch/final-fast-python/changed-02.xml
```

### changed-03: exit 0, 26.782s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_react_frontend.py tests/test_react_sources.py --junitxml=/workspace/scratch/final-fast-python/changed-03.xml
```

### changed-04: exit 0, 10.913s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_react_library_cards.py tests/test_react_run_activity.py tests/test_react_run_reason_sentences.py tests/test_react_runtime_identity.py tests/test_react_runtime_metadata.py --junitxml=/workspace/scratch/final-fast-python/changed-04.xml
```

### changed-05: exit 0, 4.096s

```bash
timeout 300 /workspace/audit-tooling/bin/uv run --no-sync pytest -q -p no:cacheprovider -m 'not live and not browser' --deselect=tests/model/test_o5_done_when.py::test_the_live_pause_refuses_and_touches_no_environment --deselect=tests/model/test_gate.py::test_only_the_model_testing_ruling_lifts_the_pause --deselect=tests/model/test_gate.py::test_good_ruling_construction_touches_nothing_and_complete_reads_the_three_key_variables_once tests/test_final_audit_tools.py --junitxml=/workspace/scratch/final-fast-python/changed-05.xml
```

## Protected files

- SHA-256 comparison of 3,164 initially tracked files: 0 changed. Initial/final HEAD are identical. This includes source, tests, expected fixtures, skip lists, gates, configs and lockfiles.
- SHA-256 comparison of all 36 existing `web/dist` files: 0 changed; no build/packager was run.
- Only concurrent fidelity-worker output appeared as untracked files under the audit fidelity output directory. Initial/final status snapshots and hash results are retained in `initial-status.txt`, `final-status.txt` and `source-integrity.json`.
- Writes by this verifier were confined to `/workspace/scratch/final-fast-python/` and this scratch report, plus normal ignored tool caches/temporary test outputs. No protected repository file was edited.

Not verified: resolution of the pathway issued-record failure; the three known-failure nodes; the existing case-insensitive-filesystem scenario; live/paid providers, seat checks, real Submit and real Teams; browser-marked tests and full frontend Vitest/build/proof gates (owned by the coordinator/capture work); weekly/full suites and unchanged slow financial_workflow tests; stage 6 and stage 7.
