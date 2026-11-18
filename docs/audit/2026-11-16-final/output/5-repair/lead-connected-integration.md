# Local combined review snapshot

This branch is a review candidate only: `audit/review-connected-integration`.
Nothing was pushed, promoted, or merged into `audit/final-repairs` or `main`.
At the first snapshot, the two original repair branches were unaccepted running
sessions. Their pushed snapshots were combined locally to expose integration
conflicts. Later phases below record their separate acceptance and the reviewed
T18/T22 recovery; the initial snapshot did not complete or take over either task.

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

## Phase 5: approved contract/docs and R4-014 placement clarification

The lead gave GO for the contract chunk and its narrow documentation follow-up
after reading the original independent contract review and the fresh
`/workspace/scratch/contract-doc-scope-review.md`. The original review had zero
High/Medium findings; the follow-up accepts `e896e256` with zero High/Medium/Low
findings and resolves its sole Low. The primary Evidence/download/internal-record
authority remains decisions 9/10 and H4 of the unchanged owner ruling. This
candidate stays local-only; neither actual-final nor main was changed.

| Contract own source commit | Candidate commit |
| :--- | :--- |
| Source-icon and restart docs `1e66f273` | `06ab5157` |
| Current matrices `6d89aa68` | `fb5ae23c` |
| Record downloads and annual-input caption `eb50afb6` | `0ac0976b` |
| Report and annual-only control `43ed1a76` | `4f11f8a1` |
| Primary placement clarification `5c39a559` | `4c46a2f6` |
| R4-014 design-doc clarification `e896e256` | `a108f655` |

### Phase 5 conflict

Only `Evidence.tsx` conflicted. The contract commit moved `ReportRecord` before
the reused handoff/model downloads; T18 had added `RecordedModelQualifications`
beside that record in a fragment at its old position. Moved that complete
existing fragment to the new metadata-first position and removed its old copy.
Both the current runtime Record fields and the unchanged full model qualification
ledger remain, the latter exactly once. Summary/Trace offers, T18's precise
module-written-gap wording and EmptyState structure remain intact. No assertion,
expected value, timeout, skip or gate changed in this resolution. All other picks
were clean, including the design-system automatic merge.

### Phase 5 checks

| Check | Exit/result |
| :--- | :--- |
| Evidence family, ArtifactDownloads states, Record family, Forecast recovery and RuntimeMetadata | 0; 11 files / 106 tests passed |
| Full frontend lint | 0 |
| Full frontend format and typecheck | 0 for both |
| Saved R4-014 documentation-scope probe | 0; three rows, zero failures |
| Probe `node --check` | 0 |
| Matrix structure, original IDs and connected section retention | 0; current 347 content / 64 control rows, original 332 / 49 retained with matching headers and unique IDs |
| Historical content/control SHA-256 | Both exact original hashes preserved |
| Primary rulings, historical matrices/crosswalk, Signal, prompts, proof handoffs and runtime identity adapter | Empty phase diff |
| `git diff --check` | 0 |

Commands retained under `/workspace/scratch/integrate-stage5-contract-*` use
`timeout 300`; Vitest uses one worker. The structural check preserves historical
content hash `c50bba4ba27106e86ebccd330ae86898963da38bd6746e457d63a08929a48fad`
and control hash `3bef212f8973cbe42c8bc3e322810047fe32bcc447c5c7c1f1e843c041bc8920`.
No Python code changed, so the completed phase-4 default quality result applies
without a duplicate run. No shared or Signal code changed; the preceding 630
Signal tests remain the last combined Signal result. The conflict only relocates
existing components and introduces no new function or design requiring another
simplification pass. Final combined confidence/fidelity remain the lead's work.

Not verified: R4-012's five unchanged failures and T22
R4-013 repair/review/integration; group 2 PR/CI/actual-final acceptance; full combined
gates, connected proof, browser/download-byte fidelity and release packaging;
Windows/weekly/full Python, live providers, paid execution, seat, real Submit and
Teams. No branch was pushed or promoted by this integration.

## Phase 6: reviewed T22 confidence recovery and original group 2 milestone

The lead gave GO to merge original group 2 `170704a1` after both fresh primary
and adversarial round-2 reviews accepted code `5b5610fe` with zero remaining
High/Medium/Low findings. Read both reports at
`/workspace/scratch/t22-round2-{primary,adversarial}-review.md`. The original
group's PR/CI/lead acceptance is still separate; this phase starts at `620521d5`
and does not promote the candidate or modify the original worktree.

| Source milestone | Candidate commit |
| :--- | :--- |
| Original group 2 merge `170704a1` | merge `338cdafe` |
| T22 initial code `12e53e21` and reports `4b948312` | Same source commits, inherited through `338cdafe` |
| Reviewed T22 round-2 code `5b5610fe` and reports `4726ebd0` | Same source commits, inherited through `338cdafe` |
| Original group's R4-001 backport `ee69c684` | Same source commit, inherited through `338cdafe`; equivalent repair already present from Evidence `bcf9dff7` as `13123339` |
| C5-025/T22 assertion consequence | `c058ab98` |

### Phase 6 conflict and named assertion consequence

Only `ReportContent.tsx` conflicted, in `buildTrace` setup and citation children.
Kept the lead's source-free placeholder handling, ordinary table source grouping,
denominator wording, reader-text work and existing citation helper. Added the
reviewed optional confidence projection/type, accepted input/method groups,
confidence-only placeholder filtering and exact source qualification. Confidence
traces use the full section's filtered citation list so later-block citations
are retained; ordinary table traces keep their existing per-row groups. The
remaining T22 source/store/chip/enrichment changes merged cleanly and retain
exact source identity validation. T18's final context and the Record qualification
ledger are unchanged. No scorer, method, calculation or analytical text changed.

The first caller run had one finding-required structural assertion consequence:
lead `report.auditFollowups.test.tsx` expected Coverage `0.75` and Timeliness
`0.80` as root derivation nodes. Approved T22 places accepted rows under
`Recorded confidence inputs`. `c058ab98` requires exactly that single root group
and retains both exact ordered label/value pairs in its children. This also
keeps the original no-placeholder coverage. No value, count, timeout, skip,
configuration or gate was relaxed; no product repair was invented.

### Phase 6 checks

| Check | Exit/result |
| :--- | :--- |
| Confidence projection/authority oracle, store, chips and actual verified-source bridge Python files | 0; five files / 509 tests passed |
| Initial actual frontend callers: Confidence, ReportContent family, LibraryIndex trace, source files, Evidence/Modules/Overview and T18 Forecast | 1; 18 files, 194 passed and the one structural assertion above failed |
| Assertion consequence plus Confidence recovery and ReportContent records | 0; three files / 45 tests passed; resolves the only failure, so all 195 tests across the 18 distinct files now pass |
| Full frontend lint, format and typecheck before the test-only consequence | 0 for all |
| Final changed-test ESLint/Prettier | 0 for both |
| Typecheck after the assertion consequence | 0 |
| Default main-based Python quality gate, no base override | 0; 41 files / 4,706 scoped lines, zero findings |
| Protected scorer/prompts/proof handoffs/Signal phase diff | Empty; no Signal import of the changed connected report helpers |
| Product/test range whitespace and working-tree `git diff --check` | 0 for both |
| Complete phase range `git diff --check 620521d5..HEAD` | 2; nine whitespace findings in eight imported raw historical T22 evidence logs, preserved as captured |

The complete-range whitespace findings are EOF blank lines in
`t22-affected-web.txt`, `t22-final-focused.txt`, `t22-lint.txt`,
`t22-red-real-placeholder.txt`, `t22-red-split-qualification.txt`,
`t22-red-web.txt` and `t22-types.txt`, plus two pytest RED blank lines with spaces
in `t22-red-python.txt`. They are confined to `evidence/t22/`; their captured
bytes were not silently rewritten. No gate configuration or exclusion changed.

Evidence commands/results are retained under
`/workspace/scratch/integrate-stage5-t22-*`. They use uv exactly 0.12.5 with
`--no-sync`, explicit candidate PYTHONPATH, `timeout 300` and one Vitest worker.
The final focused formatting check corrected only the newly added assertion's
line wrapping; initial scratch checks with the wrong cwd were corrected and are
not acceptance evidence. No unrelated Signal run was repeated: source search
found no affected caller and the final full gate remains the lead's work.
Fresh source reviews provide the confidence/simplification evidence for the
original functions; this integration preserves their design while retaining
the lead's existing ordinary-table grouping.

Not verified: historical raw-log whitespace remains as
listed; R4-012 repair/final review/integration and proof-harness alignment;
original group 2 PR/CI/actual-final acceptance; final combined full gates,
connected proof and browser/handoff fidelity; Windows/weekly/full Python,
provider/live/paid/seat/real Submit/Teams. No branch was pushed or promoted.

## Phase 7: final reviewed R4-012 and accepted group 2 ancestry

The lead gave GO for the complete final R4-012 chain after the mandatory fresh
review accepted exact code `78a6baab` with zero remaining High/Medium/Low findings.
Read `/workspace/scratch/reference-last-review.md`; the lead also independently
ran the unchanged nine-case/45-boundary probe successfully. This is the final
authorized R12 return; this integration adds no repair loop. The lead confirmed
group 2 PR 58 was CI-green and merged at 19:12:23 as actual-final `94c9ea57`.
Both milestones are integrated locally; the candidate remains unpromoted.

| Source milestone | Candidate commit |
| :--- | :--- |
| R4-012 final tip `cfac2839` | merge `32f7f65a` |
| Predicate code `a30247eb`, `02fefa34`, `78a6baab`; reports `05da92cf`, `cfac2839` | Same source commits, inherited through `32f7f65a` |
| Accepted actual-final `94c9ea57` / PR 58 source completion `37ad6561` | merge `3e4bc4ee` |

Both merges were clean. `publishedReport.ts` keeps T22's complete optional
`confidenceTrace` input/method/section type while adding only the reviewed
reference-boundary behavior. Its unrelated parser, currency and reader-text work
is retained. The actual-final merge contributes only thirteen completion-doc,
review and captured-log files because all reviewed product commits were already
present. An ancestry check confirms `94c9ea57` is now a candidate ancestor, ready
for a later authorized fast-forward; no actual-final worktree was changed here.
No new expectation or conflict resolution was needed in this phase.

### Phase 7 checks

| Check | Exit/result |
| :--- | :--- |
| Final reference, Forecast reader-text and chart Basis callers plus T22 confidence, lead report follow-ups and exact citation-range controls | Initial exit 1; eleven files / 306 passed and one unchanged page-title timing assertion failed |
| Unchanged report follow-ups file alone | 0; 17 passed, resolving that sole intermittent assertion; all 307 tests across the eleven distinct files now pass |
| Unchanged eight-case original predicate/chart probe | 0; eight cases, no failures |
| Unchanged nine-case actual-boundary probe | 0; all 45 predicate/chart/FindingParagraph/PublishedTable/ForecastScope checks pass |
| Full frontend lint | 0 |
| Full frontend format and typecheck | 0 for both |
| Python, protected scorer/prompts/proof handoffs/Signal and T22 ReportContent/Confidence/MetricGrid phase diff | Empty |
| Product/test range whitespace and working-tree `git diff --check` | 0 for both |
| Complete phase range `git diff --check 135d2d19..HEAD` | 2; four EOF blank-line findings in imported raw group-2 completion logs |

The newly imported raw-log whitespace is confined to
`completion-evidence/group2/repair2-final-lint.log`, `repair2-final-types.log`,
`repair2-r4-001-backport.log` and `repair2-t18-t22-combined-web.log`. The nine
earlier historical T22 log findings from phase 6 also remain preserved. No raw
evidence bytes, assertions, thresholds, gate configuration or test selection
rules were changed to hide either set of warnings.

Commands/results are retained under
`/workspace/scratch/integrate-stage5-reference-*`. Tests use `timeout 300` and
one worker; both unchanged local Vite/React probes use `timeout 60`. No Python
code changed, so phase 6's default gate still covers the identical Python tree;
it was not repeated. No Signal caller of the reference helper was found in the
reviewed source searches, and no unrelated broad suite was repeated. The source
worker's direct confidence/simplification review and fresh final review remain
the design evidence; this clean merge writes no new production function.

The initial extra caller failure was C1-014/C5-005: after the Sources heading
appeared, the immediate `document.title` assertion briefly read `Credit OS`
rather than the exact expected Evidence title. The unchanged file passes alone.
Its assertion, timeout, fixture, and `ReportLibrary.tsx` title effect have no phase
change; no test or product edit was made. The original 280 R4-012 cases all pass,
as do the T22/source controls. This records the timing-sensitive result rather
than hiding it behind the later successful rerun.

Not verified: page-title timing under the eventual combined full gate; proof-harness alignment and
additive coordination audit-data/helper copying; final combined full gates,
connected proof, native-browser/handoff fidelity and actual-final promotion;
historical raw-log whitespace remains as listed; Windows/weekly/full Python,
unlimited natural-language citation forms, analytical correctness,
provider/live/paid/seat/real Submit/Teams. No branch was pushed or promoted.

## Phase 8: reviewed synthetic classification and strict connected proof

The lead gave GO for R4-015 `01a163ab` after both fresh primary/adversarial
reviews reported zero High/Medium/Low findings. Read
`/workspace/scratch/R4-015-{primary,adversarial}-review.md`. The lead separately
accepted proof tip `3df13dc4`: frozen core `f251fbc7` has an independent PASS,
and `/workspace/scratch/R4-016-review.md` accepts the retained browser-probe
cleanup with zero High/Medium/Low findings. This candidate remains local; the
lead owns any later fast-forward and canonical native proof on actual final.

| Reviewed source milestone | Candidate commit |
| :--- | :--- |
| R4-015 classification `01a163ab` | merge `f034d750` |
| Proof tip `3df13dc4` | merge `67ade28d` |
| Frozen harness `f251fbc7`, report `0b0af426`, retained-probe cleanup `3df13dc4` | Same source commits, inherited through `67ade28d` |

Both merges were clean. All five R4-015 product/test files compare byte-for-byte
with reviewed `01a163ab`; both actual harness files compare byte-for-byte with
frozen `f251fbc7`. No merge resolution, expected-value edit or new product code
was needed. Record retains known live, synthetic, retained and host-session
behavior plus the reviewed pending-versus-settled unknown distinction and neutral
labels. Its exact timing, source, response, approved-limit and delivery fields
remain intact. The harness retains exact synthetic/Adapter status/200 assertions
and the settled synthetic API check; the earlier native RED is not relabelled
as a passing proof.

The unsafe fidelity-guard branch was not merged. R4-017/R4-018's pure-helper and
redirect return remains separately owned and awaiting review/GO; this task did
not duplicate that helper move or alter another branch/worktree.

### Phase 8 checks

| Check | Exit/result |
| :--- | :--- |
| Actual runtime identity/HTTP, runtime metadata, activity, React service and synthetic proof-launcher Python callers | 0; five files / 195 tests passed |
| Record, Record final-audit, RuntimeMetadata and reused Record download contracts | 0; four files / 40 tests passed |
| Offline proof network unit tests | 0; three passed, none skipped or cancelled |
| Full frontend lint, format and typecheck | 0 for all |
| Default main-based Python quality gate, no base override | 0; 41 files / 4,909 scoped lines, zero findings |
| Main harness and retained browser-probe `node --check` | 0 for both |
| Exact reviewed product/test and frozen harness comparisons | Empty diffs; 0 for both |
| Protected source/calculation/prompt/handoff/Signal phase diff | Empty; only connected Record reads the changed execution field |
| Complete phase range and working-tree `git diff --check` | 0; no new raw-log whitespace warnings in this phase |
| Accepted actual-final `94c9ea57` ancestry | 0; remains a candidate ancestor |

Evidence commands/results use
`/workspace/scratch/integrate-stage5-classification-*` and
`/workspace/scratch/integrate-stage5-proof-network.*`. Python uses exact uv
0.12.5, `--no-sync` and the candidate's explicit three-part PYTHONPATH. Every
long command uses `timeout 300`; Vitest uses one worker. The network tests issue
only local proxy requests and mock-context attempts; importing the reviewed
harness does not run its browser journey. No native browser or canonical proof
was run in this phase. Source workers' direct confidence/simplification and
fresh reviews remain the design evidence; the clean merges add no function.

Not verified: the strict canonical Chrome/Edge connected proof after promotion
on actual-final's own environment; R4-017/R4-018 fidelity-helper return/review;
additive coordination audit-data/helper copying, final combined full gates and
browser/handoff fidelity, Windows/weekly/full Python; earlier historical log
whitespace and page-title timing under the full gate; provider/live/paid/seat/
real Submit/Teams. No branch was pushed or promoted by this integration.

## Phase 9: final reviewed pure guard and local proof consequences

The lead gave GO for `bffc2732` after the fresh final review at
`/workspace/scratch/fidelity-guard-final-review.md` accepted exact code `8f4ba250`
with zero High/Medium/Low findings. The lead's independent second read also
accepted the pure import, redirect readers, local file-icon boundary and exact
CP-6 lead identity/text assertions. This phase starts at `b97e9ea2`; the lead
had already fast-forwarded actual final to that preceding milestone. Root owns
the next promotion and canonical native proof. No final capture is run here.

| Reviewed source milestone | Candidate commit |
| :--- | :--- |
| Final proof/fidelity return `bffc2732` | merge `d077360c` |
| Retained baseline/tools `3e6bc4ee`, guard ancestry `738433b8`, repaired pure import/redirect code `63c4a7f7`, report `5881baa9`, final local consequences `8f4ba250`, report `bffc2732` | Same source commits, inherited through `d077360c`; accepted final behavior is the reviewed `8f4ba250` code |

The merge was clean. Six reviewed code/test files compare byte-for-byte with
the frozen final code. The retained browser probe auto-merged only its import
to `offline-network.mjs`; its already accepted R4-016 startup/cleanup body stays
intact. No application, Python, protected Signal, prompt, calculation, handoff,
package-manifest or packager source changed. No expected value or integration
assertion was edited. The authorized compact-lead proof consequence maps to
C1-008/C3-001/J4-001 and C1-025, retaining exact paragraph bytes and provenance;
R4-019 recognizes only the narrowly validated local browser file-icon address.

### Phase 9 checks

| Check | Exit/result |
| :--- | :--- |
| Original guard + audit pure-import/redirect + local-icon/compact-lead tests | 0; 12 passed, none skipped or cancelled |
| Original frontend script suite | 0; 73 passed, none skipped or cancelled |
| Unchanged comparator self-test | 0; all 28 planted changes reported |
| Full frontend lint, format and typecheck | 0 for all |
| Both audit test files with explicit web ESLint config | 0 |
| Default main-based Python quality gate | 0; unchanged 41 files / 4,909 scoped lines, zero findings |
| Capture syntax and changed code/test whitespace | 0 |
| R4-016 missing-browser cleanup control | Expected natural exit 1 in 0.43 seconds, preserving the missing-executable error; five-second timeout not reached |
| Six reviewed code/test files versus final frozen pin | Empty diff; exit 0 |
| Immutable before/comparator manifest | All 126 SHA-256 values match the local files, recorded before/after manifests and retained source `3e6bc4ee` |
| Actual packager SOURCE_PATHS archive and validate_source | 0; 1,519 archive entries validate; pure helper and both packaged callers have exact source bytes |
| Complete phase range whitespace | Exit 2; 36 findings in eight retained raw diagnostic logs; changed code/test check remains 0 |

The pure helper's packaged SHA-256 is
`417557253458f8da5f4deb07aab5a50b90f2910bc776ab3706be196b706d492e`.
The archive check uses the actual unchanged packager's source selection and
validation without installing dependencies, building a release or writing a
release bundle. The 126 immutable entries exclude the intentionally repaired
capture script; no baseline/comparator bytes changed. Comparator tests mutate
only temporary copies. Boundary tests use local listeners and request/launch
stubs, and no native browser or analytical run was launched by this integration.

The new raw whitespace findings are confined to `fidelity/diagnostics/`:
guard-return `lint.log`, `red-final.log`, `red.log`, `typecheck.log`; and
proof-local-consequences `lint.log`, `native-observed-before.log`, `red.log`,
`typecheck.log`. Those captured logs and earlier raw-log warnings remain intact.
No gate configuration, threshold, timeout or exclusion changed.

Evidence uses `/workspace/scratch/integrate-stage5-guard-*`. Long commands use
`timeout 300`; Python uses exact uv 0.12.5, `--no-sync` and explicit candidate
PYTHONPATH. No unrelated frontend/Signal/Python behavior suite was repeated.
The reviewed source design and clean merge need no new integration function.
For the later additive coordination copy, the candidate's current fidelity
directory, pure helper and packaged callers remain authoritative: the older
coordination capture must not overwrite this reviewed return.

Not verified: the next canonical native Chrome/Edge proof on actual final;
final AFTER capture/comparison and browser/handoff fidelity acceptance; additive
coordination audit-data/helper copying and full combined gates; earlier raw-log
whitespace and page-title timing under the full gate; Windows/weekly/full Python,
provider/live/paid/seat/real Submit/Teams. No root worktree, source branch, final
branch or main was mutated, pushed or promoted by this task.
