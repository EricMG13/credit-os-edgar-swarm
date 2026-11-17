# Stage 6 candidate register

Initial discovery covered all 17 inherited rows and nine related observations
on `5e1d98b3`. The [discovery ledger](discovery.md) holds each row's evidence
and proposed disposition. The tables record the disposition of each observation. Production changes
passed independent review and the complete combined gates.

| Item | Source | Class | Current evidence | Outcome |
| --- | --- | --- | --- | --- |
| SW-01 | C2-026 | Dead | The `IntakeView` declaration and initializer in `StartRun.tsx` carry one unread field, `capText`. `view.synthetic` is used for visible wording. Other `capText` reads feed the spending-cap display. | Integrated from `e0c8c23c`. All 502 affected tests passed in bounded runs. See [verification](SW-01.md) and [review](reviews/SW-01-SW-03.md). |
| SW-02 | X1-014 | Structural cost | `ChartFrame.tsx` and `Timeline.tsx` import a two-class string from the library page's `TraceControl.tsx`. These are two shared-component imports of a page-owned module. | Integrated from `e27ca3f7`. Imports 2 → 0, both stylesheets byte identical, 79 focused tests and 12 independent tests passed. See [verification](SW-02.md) and [review](reviews/SW-02.md). |
| SW-03 | X1-025 | Duplicate | The existing jscpd report identifies a 10-line, 51-token table-toggle block in `ColumnsChart.tsx`, `ScatterPlot.tsx` and `StackChart.tsx`. | Integrated from `e3848445`. Same scan 287 → 285 clones, 2,805 → 2,785 duplicated lines. All 254 relevant tests passed across bounded runs. See [verification](SW-03.md) and [review](reviews/SW-01-SW-03.md). |
| SW-D05 | HistoryRow, observed during C1-025 readback | Performance cost | Each noncurrent row retains a parsed snapshot with 14 outputs. The measured service response was 579,712–584,204 UTF-8 bytes. | Integrated from `e025e1f9`. Earlier-row serialized fixture state fell from 2,168 to 109 bytes with identical History markup and requests. [Verification](SW-D05.md) · [review](reviews/SW-D05.md) |
| S6-036 | S6-036 | Dead | The sole static readiness caller supplies a validated non-null cap and uses the default title. | Integrated from `810e22df`. Removed the unreachable cap branch and unused override. All 111 original checks passed on both revisions. [Verification](S6-036.md) · [review](reviews/S6-036-SW-D01.md) |
| SW-D01 | Ruff F401 discovery | Dead | The submissions module imported an unread `Decimal` binding. Dynamic callers, entry points and re-exports were checked. | Integrated from `38fcdbc6`. Ruff cleared the only confirmed unused import. The same 304 tests passed with one existing skip. [Verification](SW-D01.md) · [review](reviews/S6-036-SW-D01.md) |

The static design reference and Kit have reachable entry points. The legacy
pages and existing public routes are preserved under the rulings. The source
drawer still reads source identity data to display validated citation names.
The measured 43,598–43,742 byte library response includes public fields, so
its shape is preserved.

| Item | Disposition and reason |
| --- | --- |
| B0-005, SW-D07 | Keep public and legacy paths, active source identity transport and established response contracts. |
| C1-025 | Keep all public catalogue keys. The counterfactual body-size result is recorded, and the safe client-side retention change is SW-D05. |
| C1-026 | Keep tested route fallbacks and connected component entry points. |
| C3-023 | Leave the trace argument and layout recomputation alone. The small structural cost does not justify broad caller churn, and a stable memo key has not been established. |
| C4-033, C5-039 | Preserve supported publication patterns, exact source address binding and tested evidence behavior. |
| S2-026 | Leave the two live imports in place. A relocation alone gives no demonstrated benefit and would either retain or move the signed-change formatting dependency. |
| S2-027, S4-023, S5-023 | Keep distinct empty states, register landing behavior and the published model path. The measured detector did not establish a production clone to remove. |
| S3-031, S3-034 | Keep shared caller fields and the supported empty-module state. |
| X1-013 | Keep Kit and its exercised component variants. Knip found no unused-file or export issue. |
| SW-D02, SW-D03 | Leave the chart layout and lane handlers. They are measured clones but their small size and differing contexts offer less benefit than the accepted chart cleanup. |
| SW-D04, SW-D06 | Keep independent source switches and report scroll restoration. The suggested changes have no measured benefit and could affect existing controls. |
| SW-D08, SW-D09 | Preserve engine methods, public entry points and documented compatibility imports. Historical live-cost hypotheses have no comparable offline acceptance evidence. |
