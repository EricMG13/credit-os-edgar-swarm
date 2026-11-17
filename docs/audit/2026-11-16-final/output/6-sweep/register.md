# Stage 6 candidate register

Initial discovery covered all 17 inherited rows and nine related observations
on `5e1d98b3`. The [discovery ledger](discovery.md) holds each row's evidence
and proposed disposition. The table below tracks the items selected for work.
Results remain provisional until review and the sweep gates.

| Item | Source | Class | Current evidence | Outcome |
| --- | --- | --- | --- | --- |
| SW-01 | C2-026 | Dead | The `IntakeView` declaration and initializer in `StartRun.tsx` carry one unread field, `capText`. `view.synthetic` is used for visible wording. Other `capText` reads feed the spending-cap display. | Isolated patch `e0c8c23c` removes both entries. Gates and review pending. |
| SW-02 | X1-014 | Structural cost | `ChartFrame.tsx` and `Timeline.tsx` import a two-class string from the library page's `TraceControl.tsx`. These are two shared-component imports of a page-owned module. | Integrated from `e27ca3f7`. Imports 2 → 0, both stylesheets byte identical, 79 focused tests and 12 independent tests passed. See [verification](SW-02.md) and [review](reviews/SW-02.md). |
| SW-03 | X1-025 | Duplicate | The existing jscpd report identifies a 10-line, 51-token table-toggle block in `ColumnsChart.tsx`, `ScatterPlot.tsx` and `StackChart.tsx`. | Isolated patch `e3848445` reduces the scan from 287 to 285 clones and 2,805 to 2,785 duplicated lines. Tests and review pending. |
| SW-D05 | HistoryRow, observed during C1-025 readback | Performance cost | Each noncurrent row retains a parsed snapshot with 14 outputs. The measured service response was 579,712–584,204 UTF-8 bytes. | Worker checking a local projection that preserves requests and screen output. Measure retained data with the same paired fixture. |

The static design reference and Kit have reachable entry points. The legacy
pages and existing public routes are preserved under the rulings. The source
drawer still reads source identity data to display validated citation names.
The measured 43,598–43,742 byte library response includes public fields, so
its shape is preserved.

The next candidate decisions cover the unreachable static readiness
branch and one unused Python import. The
discovery ledger records the evidence and conditions for each.
