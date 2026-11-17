# J5-010: align the historical issued-record fixture

Base: `5e1d98b37305a9da59fb6944740ff17b721051af`; branch `audit/lead-issued-fixture`.
This is the test-only schema-consumer consequence of the approved J5-010 Summary limits
repair, not a new product finding or an observed product cap-validation failure.

## Required setup change

The approved J5-010 change records exact approved Summary decision items on a fourth
`limits=<hexJSON>` line beside digest, prior and cap. The existing pathway test unpacked the
whole current issued record into exactly three names. It therefore failed while constructing
its historical fixture, before writing that fixture or exercising the cap-refusal assertions.
The final exact CI run on the base executed 5,829 nodes: 5,827 passed, one existing skip and
this failure (retained `/workspace/scratch/final-fast-python/ci-08.log` and `ci-08.xml`).

Only `tests/test_pathway_tiers.py` changes: the setup read takes the first three fields with
`split()[:3]`, retaining the existing cap guard and extracting the digest/prior needed to write
the historical record. The expected `cap=40`, exact refusal text and empty run-list assertion
are unchanged. The test still deliberately writes exactly the original two-line
`digest\nprior\n` record, which contains neither cap nor Summary limits. No production parser,
format, calculation, expected value, test selection or gate is changed; no abstraction or
additional test is added.

## Retained verification

All Python commands ran in this isolated worktree using uv **0.12.5**, `--no-sync`,
`timeout 300`, and
`PYTHONPATH=/workspace/audit-issued-fixture/src:/workspace/audit-issued-fixture/apps/issuer-library:/workspace/audit-issued-fixture`.
The shared `.venv` was linked for read-only use; no sync, install, build or npm command ran.
The import-path check confirms the exercised application modules came from this worktree.
Evidence paths below are relative to `output/5-repair/evidence/issued-record-fixture/`.

| Check | Command after `uv run --no-sync` | Exit / result | Evidence |
| --- | --- | --- | --- |
| Unchanged RED | `pytest tests/test_pathway_tiers.py::test_a_summary_issued_before_per_pathway_caps_must_be_made_again -q --junitxml=.../red.xml` | 1; `ValueError: too many values to unpack (expected 3)` at line 251 | `red.log`, `red.xml` |
| Repaired test and callers | `pytest tests/test_pathway_tiers.py tests/test_approved_summary_limits.py tests/test_run_start_submissions.py tests/test_run_start_prior.py tests/test_run_start_scheduler.py tests/test_inbox_activity.py tests/test_inbox_runs.py -q --junitxml=.../green.xml` | 0; 428 passed, one existing case-sensitive-disk skip | `green.log`, `green.xml` |
| Format | `ruff format --check tests/test_pathway_tiers.py` | 0; one file already formatted | `format.log` |
| Default quality gate | `python tools/quality_gate.py` | 0; no findings, 47 changed files / 6,272 lines against default `origin/main` | `quality.log` |
| Application import identity | `python -c ...` imports submissions, runs, scheduler, credit_os and run_activity and prints each `__file__` | 0; all five paths under this worktree | `import-paths.log` |
| Whitespace | `git diff --check` | 0 | `diff-check.log` |

The existing pytest plugin rewrite warning remains visible in both test logs. No warning
filter or skip was added. The current issued writer and approved-limits reader were inspected
only to trace the extra field; the repair does not reproduce either parser.

Confidence review checked that truncating the setup read cannot suppress the existing cap
guard, that the historical write still drops both cap and limits, and that the unchanged
refusal assertion now runs. The one-line prefix selection is the simplest local repair;
there is no nontrivial function redesign requiring a rewrite tournament. A fresh reviewer
must review the committed pin before integration.

Not verified: the complete final CI selection was not rerun here; browser/fidelity and release checks remain with the lead. No paid/provider/live execution, seat check, real Submit or Teams action ran. Signal, methods, prompts, calculations, canned handoffs and module text were not changed. Historical named review skills were unavailable; direct confidence and simplification review was used under R7.
