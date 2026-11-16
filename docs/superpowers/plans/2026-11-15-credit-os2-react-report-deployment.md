# Credit OS 2 React Report Deployment Plan

**Goal** — Ship the full React issuer report redesign in one Credit OS 2 interface, then publish a Windows ZIP after the same extracted candidate passes upload-to-report proof in Google Chrome and Microsoft Edge.

**Architecture** — Keep CP-OS and RBOT-HTML as the owners of execution, analytical handoffs, delivery and library admission. Adapt published run data in the existing React reader and reuse its page, chart, table and trace components. The existing submission, activity, library and report routes stay connected at one loopback address.

**Versions** — RBOT-HTML backend baseline `be953752`, original connected baseline `b271d90`, Python `3.13.15` and the existing `uv.lock`, React and React DOM `19.3.0` and the existing `web/package-lock.json`. The existing Windows setup uses Node.js 24 and uv 0.12.5.

**Design inputs** — [React report design](../../design/react-module-coverage.md), [design system](../../design/design-system.md), [component map](../../design/component-map.md), [library mocks](../../design/mocks/library.md), [model mocks](../../design/mocks/model.md), [91-figure map](../../design/react-visualisation-map.md) and [350-section Caesars crosswalk](../../design/react-live-handoff-crosswalk.csv). Compare the five redesigned views with the local mockups in `delivery/caesars-20261115-114658-01/mockups/`. The mockups are reference images. The React sources settle component behaviour and responsive states.

## Scope and constraints

- Ship Overview, Changes, Modules, Forecast and Evidence, with Report history and existing library, intake and activity entry points connected. Signal is outside this deployment.
- Keep the existing scheduler, providers, analytical methods, version pins, approval flow and normal run cap. Use offline synthetic execution and a read-only retained Caesars replay for verification. The earlier USD 50 authorization applied to that live test.
- Render module-written passages and values with their original units, date, definitions, qualifications and source identity. Put source names, calculations, raw references and handoff downloads in Evidence or the trace drawer. Show one trace control per traced paragraph, row or figure.
- Treat missing, withheld, provisional, restricted and zero as different states. Mark charts explicitly when data is missing or incompatible. Excel remains an input, and HTML Model, charts and calculation JSON remain report artifacts.
- Use targeted checks per task and the existing CI for the integrated candidate. Run confidence-review after code changes. Follow the user's instruction to skip tournaments. Record presentation fidelity and proof scope in `VERIFICATION.md` under its existing 1,000-line limit.

## Evidence to carry through release

| Fixture or condition | Acceptance proof |
| --- | --- |
| Northbridge synthetic upload | From upload and reviewed Submit to CP-OS finishing and the report appearing through the normal library route. Verify all five views, chart/table values of 500 and 1,250 US$m, the FY2027 maturity gap, FY2025E base revenue of 1,050 and the exact CP-2 download. |
| Caesars retained live delivery | As of 2 October 2026, 12 accepted handoffs and 18 source files. Check the Watchlist judgement, the 2030 maturity of 3,962 US$m, four FY2027E–FY2029E scenarios and the net debt trace of 11,699 − 965 = 10,734 US$m. |
| Caesars financial qualifications | Show FY2027 base calculation cash proxy of 464.86 US$m, handoff free cash flow of 647.95 US$m and the 183.09 US$m difference. Carry forward the missing portfolio inputs and limited legal coverage. |
| Caesars admission status | The normal library withheld listing after the retained-method check. Use the already-labelled read-only test snapshot for design fidelity. Check that the normal workflow distinguishes delivery from admission and still respects the admission decision. |
| Later, restricted and older-format runs | Use existing paired and retained fixtures to exercise a comparable CP-8 pair, an incompatible pair, a missing comparison, absent forecast, restricted output, multiple retained outputs and a previous-format handoff. |

## Task 1 — Pin the baseline and type the report data

**Files** — `web/src/pages/connected/publishedReport.ts`, `publishedReport.test.ts`, `ReportContent.tsx`, `web/src/pages/library/slice.ts`. Add `web/src/pages/connected/reportView.ts` and `reportView.test.ts` for the typed reader projection and independent fixtures.

- [ ] Record the release base and check that the tracked scopes under `src/deploy_workflow`, `src/deploy_vii`, `apps/issuer-library/engine`, `pyproject.toml`, `uv.lock`, `.python-version` and the web lockfile stay at their current RBOT-HTML baseline, with the web lockfile at the connected baseline. Keep the historical source and run directories read-only.
- [ ] Extend the existing `Snapshot` types only as needed for fields actually published by RBOT-HTML. Implement `buildReportView(snapshot: Snapshot, routeKey: string, run: PublishedRun): ConnectedReportView` in `reportView.ts`. Reuse existing `BottomLineText`, `Metric`, `ModuleState` and `Trace` shapes where applicable. Resolve the run, designated outputs, retained output versions, typed sections and calculation model with the existing output and model selectors.
- [ ] Key each trace to the run folder, selected output identity and hash, and block or row line. Preserve the evidence links and explicitly represent missing source, unsupported structure and unavailable model values. Keep numbers as exact text where the source carries precision, converting only when a chart needs a coordinate.
- [ ] Test a real zero, missing cell, withheld value, wrong unit/period, a duplicate label in two handoff tables, an alternate output and two same-issuer runs. Each must preserve its own provenance and state through the projection. From `web`, run `npx vitest run src/pages/connected/publishedReport.test.ts src/pages/connected/reportView.test.ts`.

## Task 2 — Replace the report shell and Overview

**Files** — `web/src/pages/connected/ReportLibrary.tsx`, `layout.tsx`, `ConnectedApp.test.tsx`, and existing `web/src/shell/{Shell,PageHeader}.tsx` and library reading parts. Put new connected page bodies under `web/src/pages/connected/report/` and keep route selection in the reader.

- [ ] Build the shared issuer/run header, state, source toggle and six report tabs from the React shell and report components. Preserve `/report/<folder>`, `#history`, `#modules/<id>/<output>`, `#forecast` and existing Evidence deep links. Test reload, back/forward navigation and the link to the same run's activity.
- [ ] Render `BottomLine`, `MetricTile`, findings, contrary evidence, what would change the view and limitations in that order. Put the Watchlist decision and its financing uncertainty first for Caesars. Move module navigation to Modules and original handoff downloads to Evidence. Use the validated lead and existing pathway rules when the handoff set varies.
- [ ] Distinguish pending delivery, finished delivery and library admission using the existing status and published records. Show a reason only when the service records one. Link Report history to the existing run list for that issuer. Test fresh, retained, incomplete and error states.

## Task 3 — Bind all module outputs and visualisations

**Files** — `web/src/pages/connected/report/Modules.tsx`, `ReportContent.tsx`, `visuals/{index.tsx,charts.tsx,visualData.ts,EventLane.tsx,EdgeMap.tsx}` and `visuals/LegacyVisuals.test.tsx`. Reuse the typed blocks in `web/src/pages/library/parts/`.

- [ ] Start with Financial foundation. Mount `ModuleNav` with reader names and run-scoped selection. Put the module judgement before metrics and charts. Render debt maturities with the existing `ColumnsChart` binding and confirm Chart and Table share the same published rows. Preserve selected output, alternative output access, section jumps and one figure trace.
- [ ] Implement the remaining modules using the 25-entry registry map, one at a time. Use the 350-section crosswalk for the Caesars replay. Reuse `StatementBlock`, `MetricsBlock`, `MatrixBlock`, `WatchBlock`, `QuestionsBlock` and related typed components for matching records. Route registers and citations to Evidence; keep module-only analysis on its owning page. Test a data-heavy page and a prose-heavy page through keyboard navigation and focus restoration.
- [ ] Give every one of the 91 catalogue entries a verified connected binding or its documented table/gap state. Use accepted descriptors or an explicitly mapped run field as chart input. Cover period and unit compatibility, missing-value reasons, exact zero, labelled map edges and date precision. Use pathname or data identifiers for binding and keep display titles available for reader labels.
- [ ] Exercise the eight Caesars chart descriptors, seven event lanes, seven maps and the recorded portfolio chart gap. Display a compatible limits view only when mandate, exposure, as-of, NAV basis and rules are validated for that run. Use the supplied Portfolio Data privately for the format check. Use a synthetic working portfolio fixture for tests and keep the October Caesars gap.

## Task 4 — Complete Evidence and Changes

**Files** — `web/src/pages/connected/report/{Evidence,Changes}.tsx`, `ReportContent.tsx`, `web/src/pages/library/parts/{EvidenceFrame,ModuleFilter,TraceDrawer,DerivationTree,ChangeCard,ChangesTable}.tsx`. Use `react_frontend/__init__.py` and `tests/test_react_frontend.py` only if a required published artifact is missing from an existing route.

- [ ] Render Evidence Summary, Trace, Sources, Gaps and Record with one module filter. Open the right trace from a paragraph, chart and table row, show the exact source locator and calculated operands, preserve reload, and return keyboard focus to the initiating control. Verify the Caesars `C11` and `C14` tree against the original CP-1 handoff and 10-Q.
- [ ] Verify available original handoff and model/calculation downloads byte-for-byte or by SHA-256. Keep access scoped to the existing published run and asset routes. If the hosted workspace lacks an original asset, use the existing unavailable state until a trusted published manifest can resolve that file. Test absent and wrong-run artifacts.
- [ ] Render the first-run Changes empty state. For later runs, bind CP-8's recorded comparable measures and authored explanation to change cards and their table. Match issuer, pathway, quantity family, period and currency. Test a comparable pair, a withheld or incompatible pair, and a missing or unreadable comparison. A displayed delta comes from the accepted comparison, with its qualification.
- [ ] Check restricted clearance and withheld admission independently of handoff completion. Explain the Caesars retained-method outcome in Evidence and keep the test-preview label on every replay page. Use the normal pipeline for official listing checks.

## Task 5 — Finish the Forecast experience

**Files** — `web/src/pages/connected/report/Forecast.tsx`, `visuals/LegacyForecast.tsx`, `web/src/components/chart/{PathChart,ChartTable}.tsx` and connected forecast tests.

- [ ] Use the published model grid, exact values and named drivers to render cases, scenario paths, statements and assumptions. Apply the existing `PathChart` and `ChartTable` to the same series. Keep units and forecast/actual boundaries visible. When historical free cash flow and projected cash proxy have different bases, use separate displays.
- [ ] Keep the narrative and mechanical calculation beside one another where the published case records the difference. Test Caesars's four named cases, FY2027 base and FY2029 downside shock of 131.38 US$m, the second-half 2026 gap and the standalone pre-merger perimeter. Use independently read expected values from the accepted delivery.
- [ ] Check no-model, incomplete-case and multi-model states. Keep the existing qualified HTML Model and calculation records accessible through Evidence where published. Keep general issuer event lanes and maps on their owning module page.

## Task 6 — Prove the candidate through both branded browsers

**Files** — `web/scripts/connected-proof.mjs`, `proof/launcher.py` or existing synthetic fixtures as needed, `web/src/pages/connected/ConnectedApp.test.tsx`, `VERIFICATION.md`.

- [ ] Run focused component and adapter tests as each task closes. From the repo root run `uv run python tools/quality_gate.py`, the affected Python tests with `PYTHONPATH=src:. uv run --locked pytest -q tests/test_react_frontend.py proof/test_launcher.py`, and the existing web checks for lint, format, typecheck and build. Run connected Vitest and script tests from `web` first, then confirm the relevant CI gates on the candidate. Use the existing confidence review for the changed code.
- [ ] Extend the registered proof script to check reviewed Submit, finished status, normal publication, all five report views and history, chart/table parity, gap state, exact download, route reload and trace navigation. `npm --prefix web run proof:connected` must report both branded browsers passing with status 0 and a separate workspace per run.
- [ ] Replay the retained Caesars data in read-only mode in Chrome and Edge. Check all five views against the mockups at desktop width, and check narrow layout, keyboard trace navigation and long tables. Compare values, labelled gaps and source locators to the accepted handoffs and calculation output. Track which additional views used synthetic or retained fixtures in `VERIFICATION.md`.

## Task 7 — Package, prove on Windows and publish

**Files** — `Run-React-Proof.cmd`, `docs/react-workflow.md`, `VERIFICATION.md`. Add a reproducible React ZIP builder at `tools/package_react_windows.py` and an archive-content test at `tests/test_package_react_windows.py`. Adapt the archive pattern from commit `ec477f8` for the current connected tree.

- [ ] Build from a clean checkout of the candidate commit with `uv sync --locked`, `npm --prefix web ci` and `npm --prefix web run build`. Package tracked runtime sources, the compiled `web/dist`, both lockfiles, the Python pin, self-contained synthetic proof files under `proof/`, and the Windows guide. Archive-test extraction from a clean folder and the absence of credentials, local environments, `node_modules`, portfolio files and retained case data. Write a SHA-256 for the candidate ZIP and record its source commit.
- [ ] Save the exact [Windows proof instructions](../../react-workflow.md#run-the-browser-proof) before cutting the candidate commit. The PowerShell commands verify the companion checksum, extract to a fresh local directory, record the verified archive hash, and run the installed browsers through `Run-React-Proof.cmd`.

- [ ] Require exit code `0`, one passing Google Chrome record and one passing Microsoft Edge record from the same ZIP, with OS, browser version, synthetic run ID, screenshots, source commit and ZIP digest. Save the proof from `proof-artifacts/` and summarise it in `VERIFICATION.md`. Record the final Windows results in a follow-up documentation commit and in the release notes so the archive can keep its tested bytes and source tag. When the designated work PC is unavailable, record the missing proof and keep the ZIP as a candidate. If either browser fails, fix the cause, rebuild and rerun both against the new digest.
- [ ] After both Windows proofs pass, publish the tested ZIP and checksum on `EricMG13/credit-os2` with the exact tested source commit, Windows instructions and a note identifying the Caesars replay as retained evidence. Keep the previously working ZIP available. To roll back, extract the prior ZIP beside the newer build and point it to the backed-up workflow root if needed. Keep workflow data outside application folders so switching binaries leaves the original run records intact.

## Completion

A user can go from document upload to a finished React report on the packaged Windows build in Chrome and Edge. Each redesigned page is backed by the accepted data contract, each mapped visual has its documented data state, and Evidence traces and downloads lead to the original records. The release points to the ZIP digest and commit actually proved.
