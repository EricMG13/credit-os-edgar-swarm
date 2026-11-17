# Stage 7 fresh Python and Node gates

Final source pin `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f` on `audit/final-repairs`.
Default quality base `origin/main` = `2b881075e51459592bb629ed8abe7ee24e4fa1d9`.
Used the existing locked environment after the separately recorded sync
with uv 0.12.5, Python 3.13.15 and Node 24.22.1. Application, issuer library
and service imports resolve inside `/workspace/audit-final`.

- The 43 CI Python paths selected 5,829 of 6,004 nodes, with 5,828 passes and one existing conditional skip.
- The 15 supplemental files selected 457 nodes. All 457 passed.
- Collection and execution match the existing 6,286-node selection exactly.
  There are no missing, extra, repeated or overlapping node IDs.
- CI retained all 175 deselections from its existing marker and known-failure
  rules. The sole runtime skip is the case-sensitive-disk case.
- Node passed 573 checks across the existing five scripts, including the
  four legacy issuer library page-logic scripts and Signal's renderer.
- Both runtime/test SHA-256 manifests match across 1,915 tracked files.

| Gate or shard | Executed | Passed | Skipped | Seconds | Exit |
| --- | ---: | ---: | ---: | ---: | ---: |
| changed-01 | 121 | 121 | 0 | 4.722 | 0 |
| changed-02 | 95 | 95 | 0 | 18.796 | 0 |
| changed-03 | 114 | 114 | 0 | 30.993 | 0 |
| changed-04 | 116 | 116 | 0 | 15.033 | 0 |
| changed-05 | 11 | 11 | 0 | 9.048 | 0 |
| ci-01 | 535 | 535 | 0 | 10.403 | 0 |
| ci-02 | 1,370 | 1,370 | 0 | 103.370 | 0 |
| ci-03 | 834 | 834 | 0 | 50.006 | 0 |
| ci-04 | 145 | 145 | 0 | 11.978 | 0 |
| ci-05 | 222 | 222 | 0 | 35.746 | 0 |
| ci-06 | 367 | 366 | 1 | 58.508 | 0 |
| ci-07 | 1,311 | 1,311 | 0 | 42.220 | 0 |
| ci-08 | 1,045 | 1,045 | 0 | 30.294 | 0 |
| CI Node page logic | 573 | 573 | 0 | 3.422 | 0 |
| Default Python quality | — | — | — | 5.244 | 0 |

The default quality gate checked 49 changed Python files and 6,538 owned lines. Zero findings, including import checks.
The exact commands, logs, JUnit XML and node ID lists are in the same scratch directory.
Each command used the unchanged 300-second cap and the existing environment with
`uv run --no-sync`. All commands exited 0. No build or package install ran here.

The sequential Python shard times sum to 421.117 seconds, against 389.293 seconds for the same selection in stage 6.
Host contention varied, so these timings do not establish a change in performance.
The slowest timed case was `proof/test_launcher.py::test_real_scheduler_exports_the_submitted_run[executed]` at 7.526 seconds, including fixture setup and teardown.

Not verified: the weekly slow suite, the existing excluded cases, browser-marked
Python cases, the case-insensitive-filesystem scenario and paid/live execution.
Frontend, browser and release package evidence are tracked separately.
