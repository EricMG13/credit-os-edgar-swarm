# Forecast Low/Info batch

Scope: the eight `connected-forecast` records in `/workspace/scratch/batch-inventory.json`, including the original findings/probes and C4-024's merged J3-014 record. Implementation shares T18 files and commits `6128728f`, `eaf0a879`, `3791c5d6`, `f7f1e011` (final code pin); no separate review loop is claimed. Lead's final combined fidelity review remains authoritative.

| ID | Outcome and evidence |
| :--- | :--- |
| C4-006 | Addressed. All three original basis amounts use `withUnit`; the read-only bridge/source validation is preserved. Six existing independent bridge text expectations are updated only to attach units. The zero-valued bridge remains zero and the default source-line tokens remain pinned. The trigger currently exists only in fixtures/intercepted state, so this is not claimed as a live observed case. |
| C4-010 | Addressed. A case's missing last cash proxy reads `n.a.` and retains that exact cell reason on its card. Regression uses the literal missing reason and a null exact value, not zero. |
| C4-012 | Addressed. Only the display-note expression in `visuals/index.tsx` maps exact `x` to `x (times)`. Stored descriptors, source-table units and numerical validation remain `x`; the new UI regression asserts both rendered caption and unchanged inputs. This also applies to the same module chart caption policy. |
| C4-017 | Closed under R16, without code. `ForecastNavigation` uses active state only for `aria-current`; the Button has the same `link-gray` appearance for every section and neither button/styles select this attribute. The defect is screen-reader-only. No new viewport observer or scroll behavior was introduced. |
| C4-022 | Addressed. Multiple model options name the model ordinal, its recorded case labels and run date; builder `candidate`/`alternate` mode words are not shown. Regression uses a literal 31 March 2025 date and both mode strings. |
| C4-024 / J3-014 | Addressed. Grid column groups use the same `forecastCaseLabel` mapping as case cards and charts: Downside shock, Upside case and Downside drivers. Stored group names still drive selection and note lookup. Authored notes and the Downside module's distinct scenario names are retained. |
| C4-029 | Addressed. Descriptions are looked up by stored case group, then drawn with its reader-facing name. An `Upside` note is retained on the `Upside case` card; the same lookup covers the stored driver-downside group. |
| C4-035 | Addressed by labeling precision. Cards and the cash-proxy chart/comparison explain their two-decimal presentation; the grid keeps its authored `display` and traces retain its exact original number. No source digits were rounded away or overwritten. |

## Validation and changed expectations

All eight recovery tests were run red before production changes; the extra ratio-caption test also failed before its display fix. After implementation and confidence follow-up, 25 affected files / 333 tests pass; the final focused source-context run passes four files / 40 tests. Caller/Signal checks pass 43 files / 743 tests. Typecheck, lint, format, knip, duplication, build, script checks, Python quality gate and native Chrome/Edge file gates pass. Exact commands, source-probe outcomes and existing expected-text changes are in `T18.md`.

C4-006 changes six old basis-sentence expectations only by adding currency/million units; C4-024 changes one old grid-header expectation to its existing reader label. No test is skipped, deleted or loosened. C4-017 is resolved by the owner's scope ruling rather than by a test expectation. Existing numbers, missing versus zero, periods, currencies, source identities and limitations remain retained.

Not verified: final combined fidelity/closure review, any live case, and independent primary/adversarial final verdicts on T18 code `f7f1e011`. Early independent source/context findings and their test-first fixes are recorded in T18.md; early `eaf0a879` is not claimed as a pass. The original Low/Info probes and snapshots remain unchanged. Native Chrome/Edge synthetic and snapshot-intercepted state checks passed as recorded in T18.md; no live-model conclusion is claimed.
