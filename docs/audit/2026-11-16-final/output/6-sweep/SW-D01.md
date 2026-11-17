# SW-D01 unused Decimal import

Removed the unused `from decimal import Decimal` binding from
`src/deploy_workflow/run_start/submissions.py`. The isolated before/after
Ruff F401 check reports one finding at line 24 before and zero after, with
exit codes 1 and 0. The patch is one deleted line and touches no function.

Base for the item `810e22dfa7df6d79b4cb9ee8a736b8dd922211ac`. Patch
`38fcdbc6af602ab3f88c723af03ce080b5aedde5` on
`audit/sweep-dead-branches`.

Searched the module, its imports from the scheduler, prior-input and service
callers, tests and fixtures, the package entry points and release packager.
The original import is the module's only `Decimal` occurrence. The search
found no explicit re-export, wildcard import, attribute or string reference
to `submissions.Decimal`, or dynamic lookup of the binding. The callers
continue to use the existing submission functions, exceptions and types.

Used uv 0.12.5 with `--no-sync`, the existing dependency install and an
explicit worktree `PYTHONPATH`. A direct import verified that submissions
loaded from the isolated worktree. Each long command used `timeout 300`.

| Check | Result |
| --- | --- |
| `pytest -q -m 'not live and not browser' tests/test_approved_summary_limits.py tests/test_run_start_submissions.py tests/test_run_start_service.py` before and after | Exit 0 both times, 304 passed and one existing case-sensitive-disk skip on each. The pytest rewrite warning was present on both sides. |
| `ruff check --select F401 --output-format concise src/deploy_workflow/run_start/submissions.py` | Exit 1 before with the one unused import, exit 0 after. |
| `python tools/quality_gate.py --base 622f92be89340b96bc0bf94a3ced47cbc87e3cfc` | Exit 0, zero findings with one Python file and one owned line. |
| `python tools/quality_gate.py` | Exit 1. All 62 findings are in inherited sweep measurement scripts, 40 in `evidence/before/test-metrics.py` and 22 in `evidence/before/tree-metrics.py`. The submission file has no finding. The lead has the log and scope for follow-up. |
| `git diff --check 622f92be HEAD` | Exit 0. |

The existing tests exercise upload handling, approved Summary text and
metadata, the submission service and local run records. The confidence
check traced the binding through all identified consumers before deleting
it. A direct deletion is sufficient because the module has no code that
uses it.

Not verified: the default quality gate remains open for the two sweep
measurement scripts. Combined sweep gates, browser proof and packaging
remain with the sweep lead.
