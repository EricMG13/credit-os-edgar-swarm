# Stage 5: integration of reviewed batches a, b and c

Base: `3010c9c8f21a317cdbb299b6453a0b73d74209c3`
(`origin/audit/final-repairs`, including repair group 3).
All three batch branches share merge base `ca0db16ae5bdbd744dcb0f9b10a5f3096a72073b`.
This integration adds no production repair beyond the reviewed batch changes.

| Batch | Reviewed source | Merge commit | Result |
| :--- | :--- | :--- | :--- |
| a | `efd45ff00499777744688629eedbb8979c0c88de` | `bd2b647f` | Clean merge; final round in `batch-a-review.md` is PASS |
| b | `72ac503f` | `e53c48c6` | Two test-file conflicts resolved below; `batch-b2-review.md` is PASS |
| c | `f1409335` | `cb60ba18` | Clean merge; final round in `batch-c-review.md` is PASS |

Batches b and c form one integration milestone: b's component-map count of eleven
shapes is consistent with c's added hollow-square shape. No intermediate b-only
tree was submitted for acceptance.

## Conflict resolutions and expected values

- `web/src/pages/library/Module.test.tsx`: retained group 3's reading order
  (Limitations before records), then retained batch b's four individual record
  headings instead of the old single `Records` entry. The exact expected list is
  Bottom line, Key findings, Contrary evidence, What would change the view,
  Limitations, Risks by probability and impact, Indicators to watch, Questions this
  module set out to answer, How a programme delay reaches the credit. This combines
  T37/S3-005's order with batch b's S3-026 navigator repair; it does not weaken the
  list assertion.
- `web/src/pages/run/start/Start.test.tsx`: retained group 3's lookup scoped to the
  paid sentence, because the design-reference note also contains a `strong` node.
  Changed the conflicting sentence's expected cap from USD 20 to USD 25, as batch
  b's S1-007/S6-004 repair and the owner's approved Full-cap update require. The
  assertion that the sentence has no bold amount when its supplied amount is
  absent remains exact.

Other automatically merged test changes remain as reviewed in the batch reports,
including the Full-cap fixture expectations, record headings, and range markers
when a range is missing. No test was skipped, no gate changed, and no new test
expectation was chosen merely to obtain a pass.

The combined tree also exposed fixture conflicts outside Git's conflict markers.
Commit `f67a17f0` preserves those regressions with these named adjustments:

- `EvidenceRecord.moduleFilter.test.tsx`: its exact spend-bar name is USD 11.40 of
  USD 25.00, replacing USD 20.00 only. The unchanged register-row assertion remains.
- `Start.savedExample.test.tsx`: the exact Submit button name uses USD 25.00.
- `Started.focus.test.tsx`: the exact Submit and confirmation button names both
  use USD 25.00. All existing focus assertions remain.
- `Module.search.test.tsx`: the old six-button count becomes the same independent
  exact nine-label list recorded above, so the test continues to prove that
  searching modules leaves the section list intact after S3-026.
- `History.runs.test.tsx`: its no-report scenarios are now explicitly constructed
  from a clone of the fixture for the same five issuer ids. For each, history
  `latest`, entry `report` and entry `changes` are null, `empty` is an explicit
  no-report sentence, and `runs` is empty. The shipped fixture now correctly supplies
  reports for four of those issuers; the regression continues exercising absent
  reports, including the exact issuer-id assertion, every history row, and the
  empty-history case. No production fixture or expectation for those states changed.

The old cap assertions failed first (three files, four failed tests), and the old
Module-search and History assumptions failed in the earlier combined run. After
these adjustments all seven conflict/consequence files passed (152 tests).

## Checks

Commands ran with `timeout 300`. Node is 24.22.1; uv is exactly 0.12.5 from
`/workspace/audit-tooling/bin/uv`; installed Chromium is `/usr/bin/chromium`.
The worktree uses the main checkout's installed npm packages and Python environment.

| Check | Exit | Result |
| :--- | ---: | :--- |
| `npm --prefix web run lint` | 0 | No warnings |
| `npm --prefix web run format:check` | 0 | All matched files formatted |
| `npm --prefix web run typecheck` | 0 | No type errors |
| Targeted ESLint and Prettier checks on the five fixture-conflict test files, then `npm --prefix web run typecheck` | 0 | Clean after `f67a17f0`'s changes |
| `vitest run` on `Module.test.tsx`, `Module.search.test.tsx`, `History.runs.test.tsx`, `EvidenceRecord.moduleFilter.test.tsx`, `Start.test.tsx`, `Start.savedExample.test.tsx`, `Started.focus.test.tsx`, with `--maxWorkers=2` | 0 | 7 files, 152 tests passed |
| `vitest run` on the other 29 batch-changed non-shared test files, with `--maxWorkers=2` | 0 | 29 files, 559 tests passed |
| `vitest run src/components src/styles src/pages/signal --maxWorkers=2` | 0 | 71 files, 1,026 tests passed, including all Signal tests |
| `uv run --no-sync python tools/quality_gate.py --base origin/audit/final-repairs` | 0 | 0 findings, 2 changed Python files, 28 lines in scope |
| `PYTHONPATH=<this worktree>/src:<this worktree>/apps/issuer-library:<this worktree> uv run --no-sync pytest tests/test_run_expectations_words.py tests/test_portfolio_workbook.py tests/test_context_form.py tests/test_run_start_submissions.py -q` | 0 | 332 passed, 1 existing case-sensitive-disk skip |
| `git diff --check origin/audit/final-repairs` | 0 | No whitespace errors |

An initial Python run imported the main checkout's editable installation, rather
than this worktree, and failed the four new portfolio-wording cases. The corrected
run above explicitly selected this worktree's Python source and passed. An initial
uncapped vitest process was stopped to bound concurrent workers; acceptance uses
the capped targeted runs recorded above. An overbroad capped run was stopped after
revealing the integration consequences above; it is not claimed as a pass. All
batch-changed test files and the five additionally affected group 3 files are
covered by the targeted acceptance runs.

## Review of integration uncertainty

The two uncertain areas were the interaction of record navigation with T37's
reading order, and the paid sentence's fixture change with T25's design-reference
notice. Both resolutions preserve the independent assertions from each side.
There is no new nontrivial production function to simplify in this integration.
Protected Signal directories, prompts and proof handoffs have no changes in this
integration diff. Existing Low and Info follow-ups in the three batch reports stay
with the lead's remaining batch.

Not verified: browser rendering and the before/after fidelity capture; full frontend
gates and connected proof; weekly and Windows CI; real model execution and Teams
cards (out of scope). Named historical models and the confidence-review and
rewrite-tournament skills are unavailable here; the available agent performed the
explicit integration review above. Final combined-tree verification remains the
lead's stage 5 and stage 7 work.
