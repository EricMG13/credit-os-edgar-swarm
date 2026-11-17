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

## Phase 2: report and chart/shared follow-ups after `d988f71a`

This continues the same local-only review candidate. The report and chart/shared
follow-ups below are now included. Original repair group acceptance, T18 recovery,
the runtime follow-up and the documentation contract remain separate lead work.
No original repair branch was changed or promoted.

| Lead-owned source commit | Local candidate commit |
| :--- | :--- |
| Report `9ad50265` | `b4cef728` |
| Report `0af85674` | `47cbe0a3` |
| Report `ed76e94f` | `eab77eab` |
| Report `b8bb7319` | `da9491a7` |
| Report `54d36d85` | `998e51a6` |
| Report `a752a690` | `1dcd1174` |
| Report `153a3191` | `c3964e13` |
| Charts/shared `8843674e` | `daacef9d` |
| Charts/shared `170f205f` | `0135aa22` |
| Charts/shared `c46da409` | `4c13de2c` |
| Charts/shared `d26a0bf7` | `53e679e7` |
| Charts/shared `3e6ea0d8` | `67144f04` |
| Charts/shared `7c87b299` | `db8afca4` |
| Charts/shared `54a8e198` | `f2e21370` |
| Charts/shared `5963e081` | `f77f2f88` |
| Charts/shared `7cc8cad0` | `cb5c0c9b` |
| Integration import cleanup | `a8a1d4d6` |

Skipped dependency commits `fe2d381a`, `2a5af229` and `0a918fa7`: their required
source changes were already present through the full shell/Evidence originals
and report `9ad50265`. No runtime milestone or documentation-contract draft was
included. The source-review tip for this phase is `a8a1d4d6`.

### Phase 2 conflicts

- `report/BreakPoints.tsx`: retained batch a's `breakRows` function, the `ranked`
  distinction and unordered retained rows. Added the report follow-up's
  `scenarioShareLabel` to the displayed row text and cash-interest basis label.
  Only an authored first-break ranking is sorted; the row-order regression passes.
- `LibraryIndex.tsx`: retained the shell's CreditView, source-safe prose handling,
  `asOfDate`, saved query/layout filters, custom loading/error handling and all
  associated imports. Added the report follow-up's lazy figure-source lookup and
  `requestSource` wiring with its keyed HeadlineFigures. Both sets of behaviour
  remain. The first lint/type runs exposed an incoming unused `useResource`
  import: the shell uses its own loader and `isUnreachable`. Removed that unused
  import only in `a8a1d4d6`, after the affected report tests passed; the subsequent
  full lint/type/format checks pass.

`publishedReport.ts` merged cleanly: it retains the report's date/view text changes
and the charts' common `containsReference` predicate. The Evidence half of C5-025,
batch a's Record delivery/source fields, approved-summary metadata and R4-004's
same-approved-wording rendering remain present. The 37-file caption-token commit
merged cleanly in Forecast, Evidence and ModuleNav, retaining their behaviour.
No test expected value, timeout, skip, gate, threshold or configuration changed
while resolving this phase; no new product repair was added.

### Phase 2 checks

Commands use the same pinned environment and `timeout 300`; each Vitest command
uses `--maxWorkers=1`. These are affected-file checks, not a repeated whole suite.

| Command/check | Exit | Result |
| :--- | ---: | :--- |
| Initial full lint/typecheck | 1 | Only the unused incoming LibraryIndex import |
| Final `npm --prefix web run lint` | 0 | No warnings |
| Final `npm --prefix web run typecheck` | 0 | No type errors |
| Final `npm --prefix web run format:check` | 0 | All matched files formatted |
| Default `uv run --no-sync python tools/quality_gate.py --json` | 0 | 0 findings, 35 changed Python files, 3,219 lines in scope |
| Report audit follow-ups, lazy card tracing, wayfinding, Record old/new, BreakPoints and ReportLibrary design | 0 | 7 files, 79 tests passed |
| Chart cleanup/scroll cues, metric composition, table missing values, HeadlineFigures signals, legacy visuals/units and new style regressions | 0 | 12 files, 112 tests passed |
| Signal tests and compact ModuleNav regression | 0 | 35 files, 635 tests passed; Signal code untouched |
| Remaining changed published-report/report-view/findings, Calendar, Downside, Forecast basis, Modules, Securities and Overview caller tests | 0 | 12 files, 200 tests passed |
| `git diff --check` | 0 | No whitespace errors |

Phase 2 therefore checks 66 distinct Vitest files and 1,026 tests. No Python source
changed in this phase; the preceding phase's service tests remain its Python
behaviour evidence. Protected Signal directories, prompts and proof handoffs have
no changes in the phase 2 diff. Independent fresh review may use the committed tip
above; this local integration does not itself accept either lead chunk or either
original repair group.

Not verified: original group acceptance and later recovered T18/T22 commits;
runtime and documentation-contract follow-ups; the complete combined frontend
gates, connected proof and browser fidelity; full Python, weekly and Windows CI;
live providers and Teams cards. Review remains local and no branch was pushed or
promoted by this task.

## Phase 3: accepted group 1, reviewed small/UI repairs and T18 review data

The candidate remains local and review-only. Phase 3 starts at `d4b3db28`.
The lead confirmed group 1 PR 57 was accepted, CI-green and merged into actual
`audit/final-repairs` as `a11e4def`; that accepted milestone is now an ancestor of
this candidate. The lead subsequently confirmed both fresh T18 reviews PASS on
`f7f1e011`, accepting that code for local integration; group 2's PR and the lead's
actual-final promotion remain separate decisions. Nothing in
this task promotes this candidate to actual final, pushes a branch or changes main.

| Source milestone/own commit | Candidate commit |
| :--- | :--- |
| Actual final `a11e4def` | merge `46d1ec94` |
| T10 lease `f7110d90` and group 1 report `206239e6` | same source commits, inherited through `46d1ec94` |
| Small L16 zero `0160cdc8` | `7cd8f10b` |
| Small C1-032 loader `1c06c00c` | `615b39bf` |
| Small S1-010 scroll `f187e3be` | `c165080d` |
| Draft UI `8300688e` | `b2e30d7f` |
| Draft report `b8b5de12` | `c1a03087` |
| UI `614aebe9` | `52c6d453` |
| UI `2eb06ef3` | `53bd9a33` |
| UI `a83e0029` | `685fbd54` |
| UI `5d366528` | `d7961192` |
| UI test scope `10869661` | `93f709ec` |
| UI explicit source slots `82679086` | `b43a8ea1` |
| UI report `fbf1bedf` | `adcd852c` |
| Group 2 takeover `7d503c5c` | same source commit, inherited through merge `70764685` |
| T18 `6128728f` | same source commit, inherited through `70764685` |
| T18 `eaf0a879` | same source commit, inherited through `70764685` |
| T18 `3791c5d6` | same source commit, inherited through `70764685` |
| T18 final code `f7f1e011` | same source commit, inherited through `70764685` |
| T18 reports `82c331f4` | merge `70764685` |
| C4-006 / T18 caller assertion consequences | `d309b859` |

Skipped draft backend `3479e06a`: its lease fix is already inherited as the
accepted `f7110d90`. Runtime metadata, contract/docs and T22 are waiting on the
lead's explicit integration go-ahead and are not included by this phase.
The lead supplied independent PASS for the report/charts and first two small
repairs. Read the additional independent PASS reports at
`/workspace/scratch/small-draft-ui-review.md` and
`/workspace/scratch/ui-tail-review.md`; this integrator is not a fresh reviewer.

### Phase 3 conflicts and finding-required expectations

The actual-final merge had one conflict, reported to the lead before resolution:
`library/Module.test.tsx` offered the old `reason.parentElement` query against
the retained candidate's Bottom line band. Kept the already approved `66d8ec0b`
query on the Bottom line region's parent, which contains the same exact
`Not assessable` badge under S3-012. No assertion was removed or relaxed.
No other production difference was introduced by that milestone except the
accepted lease fix. The phase adds no Teams difference.

The T18 merge had two conflicts, also reported before resolution:

- `Evidence.tsx`: retained the reviewed EmptyState icon/title/description
  structure, while applying T18's precise module-written-gap wording. This
  avoids implying the separate compiled-model qualification ledger is empty.
- `Forecast.basis.test.tsx`: combined T18 C4-006's units on all original bridge
  amounts with report C4-013's already reviewed explicit `US$`, `GBP` and `EUR`
  currency display. Values, zero, source-line tokens and unsupported-bridge
  checks are unchanged.

The initial affected-caller run then failed on two related assertions that had
merged without textual conflicts. `d309b859` changes only `$0.00m` to `US$0.00m`
under C4-006/C4-013, and the Evidence final-audit description from
`This run lists no gaps.` to T18's `The module handoffs list no gaps.`. The zero
and source-control assertion remain exact; the icon and title assertions remain.
These are named finding-required consequences, not weaker tests or product fixes.

That run also exposed five existing `Forecast.reader-text.test.tsx` cases where
the accepted shared `containsReference` matcher withholds ordinary `pp.`/`p.p.`,
`S&P.` and `front page`/`one-page` prose. The five independent expected strings
remain untouched. The lead was sent the exact failures and owns any repair.
No unreviewed production fix was invented here.

### Phase 3 checks

All long commands have `timeout 300`; Vitest has `--maxWorkers=1`. Python uses
exact uv 0.12.5, `--no-sync` and this worktree's explicit three-part PYTHONPATH.
No provider, live, seat, real Submit, Teams or external app call was made.

| Check | Exit/result |
| :--- | :--- |
| Full frontend lint | 0 |
| Full frontend Prettier check | 0 |
| Full frontend typecheck | 0 |
| Default main-based Python quality gate | 0; 35 files / 3,346 scoped lines, zero findings |
| `test_run_start_submissions.py` | 0; 201 passed, one existing case-sensitive-disk skip |
| Initial 16-file Forecast/visuals/Evidence/ReportLibrary callers | 1; 240 passed, seven failures described above |
| Conflict consequence rerun | 0; two files / 31 tests passed |
| UI/draft/App caller run | 0; 13 files / 521 tests passed |
| Signal caller verification | 0; 34 files / 630 tests passed |
| Final two assertion files' ESLint/Prettier checks | 0 for both |
| Protected phase paths and whitespace | `git diff --check` 0; no Signal, prompts, canned proof handoff, calculation or Teams change in this phase |

Logs are retained under `/workspace/scratch/integrate-stage5-*`. The three
primary frontend runs cover 63 distinct files / 1,398 tests. With the two named
assertion resolutions rerun, 1,393 pass and the five R4-012 cases remain failing.
No new production function was written by
this integration. Conflict handling keeps the existing components and reviewed
money formatter, so no new design or abstraction needs a rewrite tournament.
Combined confidence/simplification and browser fidelity remain the lead's later
stage-5 work. `VERIFICATION.md` inherited from T18 has 983 lines at this point.

Not verified: the five reference-matcher failures remain unresolved pending the
lead's separately assigned R4-012 repair; runtime
metadata, contract/docs and T22 integration; group 2 PR/actual-final acceptance;
complete combined gates, connected proof and browser fidelity; full
Python/weekly/Windows CI; provider/live/Submit/Teams.

## Phase 4: reviewed runtime metadata and actual engine identity

The lead gave explicit GO after the separate coordination-docs milestone
`3a19962a` on `audit/final-coordination` was committed and pushed. This candidate
remains local-only. The fresh independent runtime follow-up review accepts
`76d57bc6`, with zero remaining High/Medium/Low runtime findings, 88 tests,
the actual fourteen-response/hash synthetic proof, and a clean default Python
gate. Its full report is retained on coordination at
`output/5-repair/reviews/runtime-contract-review.md`.

| Runtime own source commit | Candidate commit |
| :--- | :--- |
| Backend `1f05c06e` | `5f5f093f` |
| Frontend `30a522e9` | `761df468` |
| Report `e825f90f` | `bd7d3b22` |
| R4-011 identity fix/test/report `76d57bc6` | `ff93a150` |

All four cherry-picks were clean; no conflict resolution or new test expectation
was needed. Record's approved-limit reader wording, prior delivery fields and
T18's separate Evidence qualification handling remain intact. The sole incoming
existing assertion change is explicitly documented by C5-033 in the runtime
report: the Record region-name list adds `Response provenance` while retaining
both exact named module call tables. The R4-011 fixture changes the fabricated
same-ID pair to the actual analytical identity and adds its actual engine pin;
it retains the source/request/acceptance rejection checks.

Signal source search found no caller/import of `connected/api`, RunProgress,
RuntimeMetadata or `run_metadata` in the protected Signal directories. They have
no changes, and the immediately preceding combined candidate's 630 Signal tests
passed; no unrelated duplicate Signal suite is counted as a new runtime run.
No prompts, methods, calculations, module-written handoffs, proof handoffs,
Teams code or package/configuration changed in this phase. This task adds only
the reviewed metadata adapter/display and its exact identity repair.

| Phase 4 check | Exit/result |
| :--- | :--- |
| Runtime Python metadata/identity/library/run-activity callers | Recovered complete output: 88 passed in 16.69 seconds |
| Explicit RuntimeMetadata, Record/Record.finalAudit, runStates, runFigures/runFigures.finalAudit and shellFinalAudit callers | 0; seven files / 82 tests passed |
| Full frontend lint/format/typecheck | Recovered complete output: no ESLint or TypeScript errors; all matched files formatted |
| Default main-based Python quality gate | Recovered complete JSON: 38 files / 4,176 scoped lines, zero findings |
| Protected paths, Signal caller search and `git diff --check` | No phase changes/callers; whitespace exit 0 |

The same uv/PYTHONPATH, 300-second bound and one-worker Vitest rules apply.
The environment restart preserved all six original logs with successful terminal
output, but not the original tool exit records. The restored frontend log reports
seven files / 60 tests without naming its files. Only that missing caller-scope
evidence was rerun, using the explicit seven-file list above and retaining exit 0
and the exact command in `integrate-stage5-runtime-web-explicit.json`; the older
60-test result is not counted as a second verification set. The other completed
checks were not repeated. The available executable is
`/workspace/audit-tooling/bin/uv`, verified as exactly uv 0.12.5.
Evidence logs use `/workspace/scratch/integrate-stage5-runtime-*`. Integration
does not add a new function beyond the reviewed sources and makes no paid/live,
seat, real Submit, Teams or external-app call. Named review/tournament tools
remain unavailable; the source workers' direct doubt tracing/simplification and
fresh review are retained, while final combined confidence/fidelity belong to
the lead.

Not verified: the original interrupted calls' tool exit records; R4-012's five untouched failures;
contract/docs R4-014 and T22 R4-013 repairs/reviews/integration; group 2 PR/CI and
actual-final promotion; full combined gates/proof/fidelity, Windows/weekly/full
Python and provider/live/Submit/Teams behavior.
