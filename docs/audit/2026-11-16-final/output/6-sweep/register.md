# Stage 6 candidate register

Discovery is in progress on `5e1d98b3`. Counts below are starting
measurements. Outcomes remain provisional until review and the sweep gates.

| Item | Source | Class | Current evidence | Outcome |
| --- | --- | --- | --- | --- |
| SW-01 | C2-026 | Dead | The `IntakeView` declaration and initializer in `StartRun.tsx` carry one unread field, `capText`. `view.synthetic` is used for visible wording. Other `capText` reads feed the spending-cap display. | Measure the narrower view after removing its single unread field. |
| SW-02 | X1-014 | Structural cost | `ChartFrame.tsx` and `Timeline.tsx` import a two-class string from the library page's `TraceControl.tsx`. These are two shared-component imports of a page-owned module. | Remove the shared-to-page edges while retaining the exact rendered classes and trace behavior. |
| SW-03 | X1-025 | Duplicate | The existing jscpd report identifies a 10-line, 51-token table-toggle block in `ColumnsChart.tsx`, `ScatterPlot.tsx` and `StackChart.tsx`. | Check whether the simplest shared implementation reduces the measured clone count and preserves rendering. |

Initial caller checks already found the compact library-index projection
(C1-025) and a visible reader of cited source names in the drawer. Remaining
register rows are under review against the current source.
