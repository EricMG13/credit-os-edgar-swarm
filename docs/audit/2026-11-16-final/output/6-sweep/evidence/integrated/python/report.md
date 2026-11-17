# Stage 6 integrated Python, Node and quality verification

Runtime source pin `e40eabe1bcf13591bdae7899b5e0a65038a7f926`. Test-run finish `22926bd1982c8847a9913459587d3003bb7986df` includes the reviewed measurement-helper and audit-document updates.
Quality pin `22926bd1982c8847a9913459587d3003bb7986df`, with `audit/final-repairs` at `bb94ddceff3a1f02c7239ebca72de285df79c607`.
Python 3.13.15 and uv 0.12.5. Node 24.22.1. All commands used their existing dependencies,
a 300-second cap and an explicit sweep-worktree PYTHONPATH. The three imported application
packages resolve inside that worktree. No sync or install was run.

- CI Python selected 5,829 of 6,004 nodes. 5,828 passed and 1 had the pre-existing conditional skip.
- The 15 supplemental files selected 457 nodes, all passed.
- Both independently collected node sets equal stage 5 and the executed JUnit node sets.
  Zero missing, extra, repeated or overlapping nodes. Signal remains in existing checks.
- The exact five workflow Node scripts passed 573 checks, with zero failures and skips.
- The SHA-256 runtime/test manifest covered 1,915 tracked files and remained unchanged during verification.

| Shard | Executed | Passed | Skipped | Seconds | Exit |
| --- | ---: | ---: | ---: | ---: | ---: |
| ci-01 | 535 | 535 | 0 | 7.397 | 0 |
| ci-02 | 1,370 | 1,370 | 0 | 99.979 | 0 |
| ci-03 | 834 | 834 | 0 | 55.908 | 0 |
| ci-04 | 145 | 145 | 0 | 10.292 | 0 |
| ci-05 | 222 | 222 | 0 | 35.368 | 0 |
| ci-06 | 367 | 366 | 1 | 49.591 | 0 |
| ci-07 | 1,311 | 1,311 | 0 | 31.571 | 0 |
| ci-08 | 1,045 | 1,045 | 0 | 22.734 | 0 |
| changed-01 | 121 | 121 | 0 | 5.004 | 0 |
| changed-02 | 95 | 95 | 0 | 15.090 | 0 |
| changed-03 | 114 | 114 | 0 | 28.751 | 0 |
| changed-04 | 116 | 116 | 0 | 14.919 | 0 |
| changed-05 | 11 | 11 | 0 | 12.689 | 0 |

Sum of sequential test-shard wall times was 389.293 seconds, compared with 284.643 seconds for the same stage 5 selection.
The shared host ran other checks during both sets. These figures do not establish a
performance change. The slowest timed case in this run was
`tests/test_final_audit_tools.py::test_cumulative_audit_helpers_pass_the_default_quality_gate` at 11.584 seconds, including fixture work.

| Quality gate | Exit | Changed Python files | Owned lines | Findings |
| --- | ---: | ---: | ---: | ---: |
| quality-default | 0 | 49 | 6,538 | 0 |
| quality-sweep | 0 | 3 | 266 | 0 |

Both quality commands ran their default code and import checks.
The case-sensitive-disk skip and all 175 CI deselections match the existing scope.
Three of those deselections come from the unchanged workflow known-failure file.

Exact commands, exit codes and per-shard timing are in `results.json` and
`quality-results.json`. The paired logs, JUnit XML and collected/executed node lists
are saved in the same scratch directory. The orchestration log's final Node report
parser expected a `#` prefix. Node 24 emitted its normal Unicode TAP summary prefix.
The report was rebuilt from the original commands and unedited logs without rerunning tests.

Not verified: unchanged weekly/slow tests, excluded known failures, browser-marked
Python tests, the case-insensitive-filesystem scenario and paid/live operations.
Frontend, file, browser and sweep acceptance checks are separate coordinator work.
