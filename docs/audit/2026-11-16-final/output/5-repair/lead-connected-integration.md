# Local combined review snapshot

This branch is a review candidate only: `audit/review-connected-integration`.
Nothing was pushed, promoted, or merged into `audit/final-repairs` or `main`.
The two original repair branches remain unaccepted running sessions. Their pushed
snapshots were combined locally to expose integration conflicts; this does not
complete T18 or T22 or take either task over.

Base: `ad5d55ac`. Its first-parent chain after reviewed batch integration
`152fdeef` is `adf0aa5b`, `ea81c2c3`, `9296bd24`, `a0ba38b8`, `47ea2e2a`,
`d831d898`, `ad5d55ac` (fixture and static Model/navigation candidate).

## Graph and dependencies

Merged the fixed pushed snapshots first, then cherry-picked only the lead-owned
chunks in dependency order. Original branches and their worktrees were untouched.

| Input | Local commit |
| :--- | :--- |
| `origin/audit/repair-1` at `301c7ded` | merge `d81c4387` |
| `origin/audit/repair-2` at `f9453f27` | merge `023baed5` |
| Shell `3c96a56e` | `9c71184d` |
| Shell `61b78d89` | `e175ebd0` |
| Shell `8bb65aea` | `6f2953aa` |
| Shell `215ab2d0` | `874e073c` |
| Shell `803cf846` | `4a5caa07` |
| Static library/run `9112aa0d` | `467d51d0` |
| Static library/run `f6c00ee6` | `1c81bb9c` |
| Static library/run `2805660b` | `2756be5c` |
| Static library/run `6b85260c` | `3ef6d7db` |
| Static library/run report `9e311221` | `6f01b2ee` |
| Connected start `592981af` | `1e389645` |
| Connected start test/report follow-up `8e251fbf` | `23ddf26c` |
| Evidence `bcf9dff7` | `13123339` |
| Evidence `e9d262eb` | `94ef01d1` |
| Evidence `859ae5f0` | `19af408e` |
| Evidence `e07d42e2` | `c9cc2efa` |
| Evidence `ca34e739` | `2aeb518d` |
| Evidence reports/probe `7ebb6476` | `8f27f983` |
| Fixture confidentiality round 2 `b1434885` | `9d7fc4c1` |
| Static viewport/query round 2 `83dacf2c` | `10c00cf5` |
| Fresh static-pair review report `0b3cf47d` | `eb7a4889` |
| Decided README rulings R1–R17 from coordination | docs-only `b9349028` |
| Combined test consequences C3-007/S3-012 | `66d8ec0b` |

Did not replay duplicate static commits `662909ad` or `adb4b6f3`. The start worker
confirmed its complete own range was exactly `301c7ded..8e251fbf`; the second commit
changes only tests and its report. The static-pair reviewer confirmed PASS for both
chunks after the two independent round 2 repairs; its report is included above.
Later connected report/chart follow-up work is not part of this candidate.

## Conflicts and test consequences

The original repair snapshot merges were clean. Three lead cherry-picks had
actual conflicts:

1. `ReportLibrary.design.test.tsx`: retained T17's fixed report-error sentence,
   absence of the raw service error, absence of loading and absence of report
   section navigation. Initially also retained the shell test's absence-of-activity
   assertion; the combined test showed that conflicts with C3-007's required
   recovery action. The lead explicitly approved the finding-required exception:
   the snapshot-error test now requires the `Run activity` link within `main`,
   with exact href `/run/northbridge-2026`. The catalogue-only no-action assertion
   remains unchanged.
2. `report/Record.tsx`: retained batch a's delivery item, its unreadable-null-event
   distinction, the named Started and accepted section, module-specific call-table
   headings and h4 headings. Added Evidence's accurate empty-field labels, truthful
   recorded execution type, module-name issue heading, provenance/admission gaps
   and approved-summary-limit section. Neither side's behaviour was discarded.
3. `report/ScriptChecks.tsx`: retained batch a's heading and removal of the named
   region while applying Evidence's border-only check-item layout and empty-state
   explanations. The existing no-named-region regression remains intact.

The static round 2 query targeted the old blocked-reason wrapper. After the
library/run chunk's S3-012 Bottom line band, the status badge is a sibling of that
band. `66d8ec0b` scopes the same exact `Not assessable` assertion to the blocked
module's container (the Bottom line region's parent), preserving the reason,
qualification and Evidence-link assertions. No expected text or value changed.

Tests failed on these integration consequences before their resolutions. An
intermediate edit matched an identical earlier catalogue-only assertion; it was
restored before the final run. One intermediate filter case also reproduced the
already recorded `ReportLibrary.design` timing failure. Its unchanged case passes
in the final 21-test file run. No timeout, test, threshold or gate was loosened.

## Checks

uv is exactly 0.12.5; Python used `uv run --no-sync` with this worktree's explicit
`PYTHONPATH`. Each long command used `timeout 300`; Vitest used `--maxWorkers=1`.
No application network call, live/provider action, Teams call or real Submit was
made. Unit tests use their existing retained data and mocked services.

| Check | Exit | Result |
| :--- | ---: | :--- |
| `npm --prefix web run lint` | 0 | Includes the combined production tree and static round 2 code |
| `npm --prefix web run format:check`, initial final pass | 1 | New recovery assertion needed formatting; fixed with Prettier |
| `npm --prefix web run format:check`, settled pass | 0 | All files formatted |
| `npm --prefix web run typecheck`, settled pass | 0 | No type errors |
| Targeted ESLint on both final query-resolution tests | 0 | No warnings |
| Default `uv run --no-sync python tools/quality_gate.py --json` | 0 | 0 findings, 35 changed Python files, 3,219 lines in scope |
| ConnectedApp + loading + ReportLibrary design | 1 | 240 passed, one required-action expectation conflict; the two unaffected files' 220 tests passed |
| Evidence/Record/ScriptChecks/record-empty tests | 0 | 5 files, 39 tests passed |
| Start and shell targeted tests | 0 | 10 files, 269 tests passed |
| Static route/library/run/Module/Overview targeted tests | 1 | 162 passed, one blocked-status query conflict; four unaffected files' 60 tests passed |
| Final ReportLibrary design + Module + ModuleNav compact + Module search | 0 | 4 files, 134 tests passed, including both corrected cases |
| `pytest tests/test_approved_summary_limits.py tests/test_react_library_cards.py tests/test_react_run_reason_sentences.py tests/test_react_run_activity.py -q` | 0 | 58 passed; one existing import-rewrite warning |
| `git diff --check` | 0 | No whitespace errors |

The successful runs cover 25 distinct Vitest files and 722 tests. The default
Python gate's scope does not yet include coordination's retained audit helper
scripts; the lead must include their separately reviewed R4-002 repair when copying
the final coordination outputs. Signal directories, prompts and proof handoffs
have no changes in this integration diff. No new production function was written;
the conflict resolutions retain the simpler existing components and both sets of
independent assertions.

## Remaining

Original repair-1/repair-2 completion, fresh review and CI acceptance still belong
to the lead under the user's two-hour takeover condition. T18/T22 code was not
pushed in these snapshots and was not invented here. The connected report/chart
follow-up worker's pending work, combined full frontend gates, fidelity capture,
stage 6 sweep and stage 7 send-off remain outside this local integration task.

Not verified: acceptance of either original repair group, unpushed T18/T22 work,
later connected report/chart follow-ups, full frontend gates and connected proof,
combined browser fidelity, full Python/weekly/Windows CI, live providers and Teams
cards. The static-pair review report contains its own native Chrome/Edge checks;
this task exercised the combined candidate through targeted offline tests only.
