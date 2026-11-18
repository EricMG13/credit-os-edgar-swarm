# Stage 6 discovery at 5e1d98b3

Read-only source discovery on the application tree
`5e1d98b37305a9da59fb6944740ff17b721051af`, with sweep setup `059301aa`.
This accounts for each of the 17 existing sweep rows and nine related observations.
Implementation candidates below still need worker evidence and review.

## Existing sweep rows

| ID | Class | Discovery evidence and proposed disposition |
| --- | --- | --- |
| B0-005 | Not acted on | Preserve the public route set. The connected React client does not use the legacy `/activity.js`, but `apps/issuer-library/credit_os/web/index.html:12` does, with browser and service tests. `/connected/reports` has admission and frontend route tests. `/api/runs/<id>`, `/library/*`, `/index.html`, `/data.js`, `/assets/*` and the licence retain documented service or release roles. |
| C1-025 | Performance cost | The workspace run cards are already projected, but `react_frontend/__init__.py:_library_index` returns all 29 `catalogue.real` keys on the measured sample. See measured cost below. Keep the current route response shape under the contract. |
| C1-026 | Not acted on | `ConnectedApp.tsx:76–78` accepts the two extra slash forms while the service only serves the unsuffixed paths. A single call path does not establish dead code for the tested `ConnectedApp` component. The unknown-page and no-report fallbacks are exercised by `ConnectedApp.test.tsx:2165` and `ReportLibrary.design.test.tsx:301,360`. Test seams keep their callers. |
| C2-026 | Dead | `IntakeView.capText` at `StartRun.tsx:349` is set at line 2445 and never read. Remove those two entries only. `view.synthetic` now has a visible consumer at line 1034. The other `capText` values serve the Summary, readiness and paid confirmation controls. |
| C3-023 | Structural cost | `ReportContent.tsx:314` ignores `traceForLine`'s `_index`. Removing its computation and pass-through is a mechanical cleanup with broad but identifiable callers, including tests. `findingsTraces` rebuilds on local render at lines 626 and 798, but the layout creates a new sections array. A memo keyed directly on that array is unproven. Keep Changes card data and trace behavior. |
| C4-033 | Not acted on | The connected Forecast readers still handle zero-input, Base FCF, period and interest qualifications. Absence of exact strings in current producer and method copies is insufficient for data written by a model or an older publication. Forecast tests exercise these readers. Preserve the text patterns and retained handoffs. |
| C5-039 | Not acted on | `hasRecordedGap` has no render caller and eight references in the Evidence test file. Keep the tested behavior. Current `ReportContent.tsx:296` uses the output ID prefix to validate attested source addresses. Evidence uses separately validated page ranges and names. An ID shape change needs equivalent source-binding evidence. |
| S2-026 | Structural cost | Two live static-to-connected imports remain, `ChangeCard.tsx:7` → ToneMark and `MetricTile.tsx:2` → YearChange. Move the shared components to their shared owner and update direct imports if this removes both edges without changing expected DOM or reader text. Do not claim a bundle saving from relocation alone. |
| S2-027 | Not acted on | No matching production pair in pinned jscpd for the four empty states. `NoReport` adds issuer context and a feed, `OverviewPrompt` uses a per-state icon and Overview target, and `NoRuns` and `Absent` differ in heading and actions. An abstraction that preserves those differences has no measured gain yet. |
| S3-031 | Not acted on | `readWatch` still omits `detail`, while connected callers use the shared block fields. `WatchBlock`, `StatementBlock`, `StatusBlock` and `ModuleNav` have actual shared consumers. Adding or removing a static display field changes fixture behavior. |
| S3-034 | Not acted on | `read.ts:2080` explicitly accepts the no-modules head state. `Module.tsx:252–255` draws the designed empty state for a null first module. The required evidence for a complete fixture does not make that state unreachable. |
| S4-023 | Not acted on | The Trace and Gaps pages already share `useSort`, `RegisterPage` and `EmptyRegister`. Their landing targets differ in element type and their address checks differ in shape. The pinned detector reports no pair of these production files. The undrawn trace value remains a typed and tested slice field. |
| S5-023 | Not acted on | No reported production clone between Analysis and Limitations. The model's recovery section calls `PublishedModel`, which uses `Collapsible.open` for original delivered HTML. Keep reader type guards, count display, route titles, source behavior and the supported dormant path. |
| S6-036 | Dead (narrow) | `Readiness.tsx:29–32,53–65` has one caller, `StartPage.tsx:127`, passing a non-null cap validated at `slice-start.ts:91–98` and no cap title override. Regain the original narrow type and remove the unreachable Unavailable branch, preserving the rendered panel. The connected panel has different data and a live nullable cap. Keep draft validation, position data, file limit, activity controls and reference fixtures. |
| X1-013 | Not acted on | Kit remains reachable by address at `App.tsx`'s `/kit` branch, as R10 requires. The Kit draws the loading button, tab badge, metric note/from, ProgressSteps and file progress row. Its destructive variant is in the tested colour list. Residual variants need a caller-by-caller proof that includes the kit, tests and all shared component callers. Knip found zero issues. |
| X1-014 | Structural cost | Two shared-component imports into the TraceControl page module now exist, `ChartFrame.tsx:3` and `Timeline.tsx:6`. Keep the exact `group/trace relative` classes and make those two edges zero. Measure the layer change separately from any bundle byte effect. |
| X1-025 | Duplicate | The pinned detector reports ColumnsChart:334–343 against ScatterPlot:295–304 and StackChart:238–247, 10 lines and 51 tokens each. This is actual common table-toggle wiring. Use the existing shared chart boundary where sensible. Preserve toggle state, table content and focus and accept a dedupe only if the original detector's count falls. |

## Related bounded candidates

| Item | Class | Discovery evidence and proposed disposition |
| --- | --- | --- |
| SW-D01 | Dead | Ruff 0.17.1 reports one F401 across 287 tracked Python files under the six sweep roots, outside Signal. `run_start/submissions.py:24` imports `Decimal` but the name has no reader in the module. No direct import, attribute, string patch or declared entry point references the binding. Verify the run-start callers and exact report/submission tests if removed. The six F403 reports are documented aliased engine facades with compatibility and type-checker consumers. |
| SW-D02 | Duplicate | `ReportLibrary.tsx:271–285` and `report/RunCharts.tsx:102–116` share one 15-line, 88-token production clone. The heading-link and visual group have a common layout and differ in chart heading-level prop. Preserve that difference and keep the groups, request paths and labels if deduplicated. |
| SW-D03 | Duplicate | `EventLane.tsx:180–194,344–358` repeats 15 lines and 60 tokens of pointer and focus activation callbacks. If simplified, keep the same four event transitions, row link and selected mark. Verify its focused tests and a reduced clone count. |
| SW-D04 | Not acted on | A detector hit between library `SourcesSwitch.tsx:1–13` and model `ShowSources.tsx:1–14` covers similar subscription machinery. The stores are intentionally separate and the switches have different DOM classes. Merging state would change user-controlled behavior. A store abstraction was not measured. |
| SW-D05 | Performance cost | Each noncurrent `HistoryRow` fetches and retains a full `Snapshot` through `useResource`, then derives only module labels and run labels on render. Project with the existing `runDetails` in the row's loader if before/after evidence confirms smaller retained state and the same rendering, missing/error states and requests. Use a paired fixture (the retained samples below have one admitted run each). |
| SW-D06 | Structural cost | `ReportLibrary.tsx:120–146` retains one Map entry per departed keyed report location during that reader's mount. Static `App.tsx` has the corresponding scroll restoration mechanism. The cost count is one entry per distinct departure, but no measured page slowdown warrants eviction and Back/Forward offsets are a visible contract. Preserve. |
| SW-D07 | Not acted on | The handover's source-removal observation is stale for `Trace.sourceLinks`: the drawer now passes it to `citedSourceNames` to render validated names. Evidence uses `citedSourcePages` and `sourceCitationNote`. R10/OQ-04 still removes the source-opening UI. Keep the existing public route and its tests, including `tests/test_react_performance.py:235+`, and the internal source identity transport. |
| SW-D08 | Not acted on | Nov 13's 46 findings concern model input, tools, compaction, effort, scheduling and live cost. This tree now records compaction in `model/copilot_adapter.py`, `owners/cpos.py` and `owners/cpos_launch_review.py`. Carry no historical per-run saving forward as measured here. The remaining prompt, provider, calculation and method changes lack like-for-like offline acceptance or are protected. |
| SW-D09 | Not acted on | Three import-layer exclusions remain documented by `.importlinter`. Their causes are CP-OS request fingerprints, method definitions, and handoff acceptance. The package entry point, dynamic valuation-basis and issuer-library imports, retained legacy web files, and release packager paths give additional reachability evidence. No confirmed Python module deletion from import search. |

## Discovery measurements

The original pinned frontend gates reported Knip zero issues and one existing CSS hint.
The same pinned `npm --prefix web run duplication` scan reported 287 clones, 2,805
duplicated lines (2.46%) and 19,879 tokens (2.43%) across 633 files. Eleven clone pairs
have both endpoints in production non-Signal source. This report identifies the
pairs relevant to its candidates. The rest cross test code or different behaviors.
The pinned scan and the audit's stage 0 baseline have different source trees.

For C1-025 and SW-D05, called the current `_library_index` and `_visible_scope` functions
directly with the read-only `Layout` of three retained synthetic publications. All code
imports resolved to this sweep worktree. The measurement did not launch a server or
browser. Measured UTF-8 JSON with the service's separators and `ensure_ascii=False`,
then gzip with Python's default compression level. Repeated scope preparation five
times per fixture and use the median. None of these timings is a browser render time.

| Retained publication SHA-256 prefix | Library body raw / gzip (bytes) | Local nine-key projection raw / gzip (bytes) | One scoped snapshot raw / gzip (bytes) | Median scope preparation |
| --- | ---: | ---: | ---: | ---: |
| `d4a63390cf3ed` | 43,598 / 3,716 | 2,018 / 653 | 579,712 / 44,508 | 23.718 ms |
| `97881392ef12` | 43,742 / 3,832 | 2,162 / 732 | 584,204 / 44,959 | 30.148 ms |
| `eeceef98da72` | 43,642 / 3,762 | 2,062 / 682 | 584,104 / 44,907 | 28.525 ms |

The projection kept `id,name,issuer,title,date,sector,period,metrics,ratings`, the
current TypeScript `CatalogueRun` fields. It is a size comparison measured in memory.
The service result and current JSON contract were left intact. Each scoped snapshot
has 14 outputs. A History loader projection can reduce the retained object, but the
existing server still sends that snapshot on each request. Memory allocation and
browser timing require separate measurement for any stronger claim.

Ruff scan evidence is in `/workspace/scratch/stage6-discovery-python-ruff.json`.
`xargs` returned 123 because Ruff found the existing F-code reports. The scan is
independent of the changed-code quality gate. The retained fast-test XML contains
6,286 actual cases. Its slowest measured case was
`tests/model/test_loop.py::test_a_narrative_repair_says_to_call_read_inputs_again`
at 4.162 seconds, including fixture setup and teardown. No targeted optimisation
is justified from that single measurement. Sources for the retained frontend and
fast-test metrics are `/workspace/scratch/final-npm-{unused,duplication}.log` and
`/workspace/scratch/final-fast-python/`.

Not verified: implementation and after-measurements, native render timing, stage 6
acceptance gates and release packaging. This discovery created no code changes
and made no new runtime service or external application calls.
