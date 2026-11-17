# R4-012 — local reference context, round 2

First implementation return after the independent round-1 review's two Medium consequences.
Branch `audit/lead-reference-round2`, isolated at `/workspace/audit-reference-round2`, starts
from `a30247ebea898f4787fabf3142d6a6e069e4b74e`. Stable final code pin:
`02fefa3447f662460493088d76ab0f0aceb90257`. This report is a later documentation-only commit;
the code pin stays fixed for fresh review. No push, merge or acceptance is implied.
The predecessor worktree and its uncommitted report/evidence were preserved.

## Cause and change

The real `containsReference` callers replace the entire original cell or passage when it
returns true: chart Basis cells in `visualData.ts`, plain tables and findings in
`ReportContent.tsx`, and descriptions/scope sentences in `LegacyForecast.tsx`. The governing
reader ruling confines source references to Evidence and the trace drawer while preserving
module-written analytical wording and figures. Its page/gap coverage and its ordinary-text
fidelity are both required; passing the first patch's new tests did not establish either.

Only `web/src/pages/connected/publishedReport.ts` changes production behavior. A parenthesized
G identifier is an annotation unless adjacent text identifies a group/instrument label or a
mathematical definition. This restores arbitrary status annotations such as `unknown`,
`absent` and `pending` without maintaining a list of missing-status synonyms. Local labels
stay ordinary even when an earlier unrelated word says `gap` or `not comparable`. Every
parenthesized match is considered, so an ordinary G7 label cannot exempt a later G12 citation.
Standalone annotations stay references through terminal punctuation.

Page tokens keep the existing word/S&P/p.p. boundaries and now accept page numbers of any
length. The local `pp` count-and-duration continuation distinguishes an ordinary percentage-
point sentence without a finite number-word list. A directly adjacent explicit locator cue
wins over that continuation. `front page` remains headline prose, and hyphenated `one-page`
remains outside the page-token boundary. No caller policy or displayed replacement text changes.

New file `web/src/pages/connected/publishedReport.reference-round2.test.tsx` has 61 literal
checks, including actual chart cells, findings with their trace controls, plain tables with
Evidence links, unchanged full Evidence cells, and `ForecastScope`. Existing tests and their
expected values are untouched. No Signal, methods, prompts, calculations, handoffs,
module-written passages, source data, dependency or gate changed.

## Observed red and green

Retained concise output: `probes/R4-012-round2.log`. The independent review's portable probe
is copied byte-for-byte to `probes/R4-012-round2-probe.mjs`; the original in scratch is unchanged.
It calls the real modules through Vite SSR, starts no listening app server and makes no app,
provider or other network request. From the repository root:

```sh
timeout 30 node docs/audit/2026-11-16-final/output/5-repair/probes/R4-012-round2-probe.mjs "$PWD"
```

| Check | Exit | Observed result |
| :--- | ---: | :--- |
| Unchanged independent probe on `a30247eb` | 1 | Seven failures, one ordinary G7 control passed; predicate and exact chart Basis cell both checked |
| New test file before production edits | 1 | 32 failed, 12 passed (44 original round-2 cases), at actual caller boundaries |
| First local repair against unchanged existing tests | 1 | Two failures, 220 passes: the numeric-label exception was too broad for `Missing threshold at leverage 3.20x (G12).` |
| Final unchanged independent probe on `02fefa34` | 0 | Eight controls passed, zero failures |
| Final focused tests | 0 | Seven files, 253 passed; includes the unchanged five-file 191-test group and original two-file 83-test group |
| Additional direct/indirect caller tests | 0 | Ten files, 123 passed |
| Signal tests | 0 | 34 files, 630 passed; existing React act warnings |
| Full frontend lint | 0 | `npm run lint` |
| Full frontend format | 0 | `npm run format:check` |
| TypeScript | 0 | `npm run typecheck` |
| Changed-code Python quality/import gate, base `a30247eb` | 0 | Zero findings; zero changed Python files or scoped lines |
| `git diff --check` | 0 | No whitespace errors |

The final focused command (from `web/`) was:

```sh
timeout 300 npx vitest run src/pages/connected/publishedReport.reference-round2.test.tsx src/pages/connected/publishedReport.reference-regression.test.ts src/pages/connected/publishedReport.reference.test.tsx src/pages/connected/report/Forecast.reader-text.test.tsx src/pages/connected/visuals/finalAudit.test.tsx src/pages/connected/visuals/LegacyForecast.finalAuditUnits.test.tsx src/pages/connected/visuals/visualData.chartTable.test.ts --maxWorkers=1
```

Additional callers were the four `ReportContent` drawings/findings/records/codes suites,
`publishedReport.test.ts`, `reportView.test.ts`, three `LegacyForecast` base/axes/reader-text
suites, and `report/Forecast.test.tsx`. Every invocation was bounded by `timeout 300` and all
Vitest runs used one worker. The two nonexistent optional filters in that caller command
matched no files; the ten actual files above are the reported scope, with no test skipped.
Full local outputs remain `/workspace/scratch/reference-round2-*.log`.

Python used `/workspace/audit-tooling/bin/uv` (verified `uv 0.12.5`), `run --no-sync`,
`UV_PROJECT_ENVIRONMENT=/workspace/credit-os2/.venv` and
`PYTHONPATH=/workspace/audit-reference-round2/src:/workspace/audit-reference-round2/apps/issuer-library:/workspace/audit-reference-round2`.
No synchronization or install ran. The Python zero count validates no TypeScript semantics;
the actual-caller tests and frontend gates cover this TypeScript repair.

## Confidence and simplest-design review

Doubts tested: a distant gap/negation capturing an economic group, terminal group/math labels,
an arbitrary magnitude before `pp`, a duration after the abbreviation, high-numbered pages,
standalone G punctuation, status synonyms, multiple ordinary/citing G annotations, decimal
math quantities, and genuine citations with the same duration-shaped suffix after `See pp`.
Expected classifications and exact full caller strings are independent literals, not values
or expressions derived from the production predicate.

Nearby cases include G8 and G21 group names; `eleven`, `twenty-one`, `one hundred` and
`seventy-three` percentage-point changes; twelve fiscal quarters; `Leverage (G1) = 3.2x`;
`Leverage is 1.5x (G1)`; absent/pending G12 status annotations; a G7 clause followed by a real
G12 citation; the unchanged decimal/explanatory-parenthesis citation tests; and pages 1000,
1024–1026, 2025 and 10000. The first local attempt's numeric exception failed the existing
3.20x gap assertion, so it was narrowed to adjacent definition syntax before this code pin.
No expected value was adjusted to fit that repair.

Alternatives considered: adding eleven to the old list would repeat its cause; expanding the
status list would leave genuine synonyms uncovered; a clause-wide gap cue would repeat the
G7 omission; a fixed page-length/year rule would lose explicit locators; per-caller exemptions
would duplicate policy and leave other readers affected. A single larger expression would
hide the local-before/local-after decisions. The two short local predicates keep the shared
boundary and unchanged callers, with the existing independent detectors left intact.

Text alone cannot settle every natural-language use of an ambiguous parenthesized identifier
or `pp`; these checks establish the reviewed ordinary and citation forms, not an all-language
parser. No analytical inference or rewritten module text was introduced. The named
confidence-review/rewrite-tournament tools are unavailable in this session; this is the R7
manual fallback. Fresh independent review is required on `02fefa34` before integration.

## Fidelity for the lead

The actual caller assertions preserve ordinary wording, G labels, `eleven pp. 3 quarters`,
`3.20`, FY2025, source identity `annual-report.pdf`, and the existing trace/Evidence controls.
Genuine references stay reachable unchanged in Evidence; existing source-bearing Forecast
reasons still use their recorded source-table address. The lead owns combined-browser capture
and the final `VERIFICATION.md` entry. These are deterministic retained-data tests, not module
analysis acceptance or live issuer evidence.

Expected changes: none to an existing test assertion, fixture or module-written passage.

Not verified: fresh independent round-2 review and combined-tree acceptance; combined frontend/proof and native-browser fidelity capture; weekly/full Python and Windows checks; all possible natural-language citation forms; live issuer/model execution, paid/provider/live/seat/real Submit and Teams (outside this task).
