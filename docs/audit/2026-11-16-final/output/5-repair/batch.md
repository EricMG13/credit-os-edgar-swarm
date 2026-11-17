# Low and Info repair batch

The repaired base `bb94ddce` contains 163 canonical batch outcomes.
The [closure map](closure-current.md) links each ID and its aliases to the
landed commit. The [evidence ledger](closure-current.json) retains the exact
reports, review paths, and source-to-landing mappings.

| Family | Canonical findings |
| --- | ---: |
| audit-tools | 1 |
| connected-calendar | 2 |
| connected-charts | 5 |
| connected-downside | 1 |
| connected-evidence | 14 |
| connected-forecast | 9 |
| connected-report-shell | 17 |
| connected-shell | 12 |
| connected-start | 21 |
| design-docs | 3 |
| docs | 1 |
| native-local-file-icon-guard | 1 |
| neutral-record-link-style | 1 |
| optional-proof-probe-cleanup | 1 |
| proof-docs | 1 |
| runtime-metadata | 2 |
| shared-components | 14 |
| shared-connected-format | 3 |
| static-library | 15 |
| static-library-fixtures | 11 |
| static-library-loading | 1 |
| static-model | 9 |
| static-run | 12 |
| static-shell | 6 |

The reviewed early batches A, B and C and the subsequent connected, static,
shared component, fixture and documentation chunks are accounted for in the
same map. R4-020 adds the verified Forecast link style outcome. The C3-022
currency-prefix and J5-010 historical issued-record fixture changes follow
earlier approved behavior. They do not add findings. The final review of
batch code and independent checks is recorded in [review.md](review.md).

Not verified: real or paid runs, Windows, Teams work-PC behavior and
release-package execution. Read the [fidelity limits](fidelity/after-report.md)
for capture coverage.
