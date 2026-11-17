# R4-020 and C3-022: final frontend verification consequences

Base: `5e1d98b37305a9da59fb6944740ff17b721051af`. Isolated branch:
`audit/lead-final-web-consequences`, code commit
`72f1c59cc611dfe69e587eb117bb0742fddc1d6f`.

The complete frontend selection identified two deterministic failures. This small stage 5
follow-up changes exactly two source lines and does not change the final-repairs or sweep
worktrees, dependencies, build output, test selection or coverage configuration.

## Repairs and expectations

- **R4-020, Low batch:** the Forecast's existing `Model notes and limitations` anchor drew
  blue underlined text. The unchanged global `linkStyle.test.ts` rejects that combination.
  Its class changes from `text-action underline` to `text-secondary underline`, the same
  neutral foreground token used by the approved Button's `link-gray` appearance. The
  anchor, visible text, underline, `#evidence/record` destination and conditional placement
  remain exact. No function or component is added. This is a class-only design consequence,
  not another return of the accepted T18 High/Medium repair.
- **C3-022, merged into C4-013:** the approved reporting-currency display uses `US$` for
  USD money. The existing MetricTile comparator now draws `+US$5m vs FY2023`; its stale
  assertion still looked for `+$5m vs FY2023`. Only the expected literal currency prefix
  changes to `US$`. The plus sign, value `5`, scale `m`, prior period `FY2023`, tone/shape
  assertions and comparator count remain unchanged. No production money formatter,
  calculation, fixture value or currency expectation elsewhere changes. The finding's
  CM-320/R-18 behaviour justifies this named expectation alignment.

## Verification

All commands ran from the isolated worktree; long commands used `timeout 300`. The npm
dependencies and Python environment were read-only links to the existing actual-final
install. No install, sync, build, browser or application call ran here. Evidence below is
relative to `output/5-repair/evidence/final-web-consequences/`.

| Check | Command | Exit / result | Evidence |
| --- | --- | --- | --- |
| Unchanged RED | In `web/`: `node node_modules/vitest/vitest.mjs run --maxWorkers=1 src/pages/connected/linkStyle.test.ts src/pages/library/parts/MetricTile.yearChange.test.tsx --reporter=verbose` | 1; two failed, one passed, 2.13 seconds; exact class violation and missing old currency string | `red.log` |
| GREEN and affected callers | Same Vitest command with the two failing files, `MetricTile.traced.test.tsx`, four `LegacyForecast*.test.tsx` files and four `report/Forecast*.test.tsx` files | 0; 97 passed across 11 files, 142.18 seconds | `green.log` |
| Lint | `npm --prefix web run lint` | 0; completed within the unchanged 300-second limit under concurrent sweep load | `lint.log` |
| Format | `npm --prefix web run format:check` | 0 | `format.log` |
| Types | `npm --prefix web run typecheck` | 0 | `typecheck.log` |
| Default Python quality gate | `uv run --no-sync python tools/quality_gate.py`, uv 0.12.5, explicit own-worktree `PYTHONPATH` | 0; 46 changed files, 6,257 lines, no findings | `quality.log` |
| Source whitespace | `git diff 5e1d98b3 --check` | 0 for the two-line code/test diff | Lead command output |

The existing Forecast recovery assertions exercise the exact link text and destination.
The affected Forecast tests also retain source/limitation qualification, case and currency
checks. Targeted tests do not replace the lead's complete frontend selection or its original
global 80% coverage threshold.

The raw command logs retain their emitted trailing blank lines. A full staged whitespace
check reports only that blank EOF in `red.log`, `green.log`, `lint.log` and `typecheck.log`;
the code/test and Markdown whitespace checks pass. The original evidence is preserved.

Confidence review traced the least certain points: the gray class keeps the visible underline
and exact Record link, and the expectation alignment retains the original number, sign, scale
and year while making the already approved currency explicit. Diff inspection confirms every
other byte of both files is unchanged. There is no changed nontrivial function to redesign;
the two local substitutions are the simplest sufficient implementation. Historical named
review skills were unavailable; direct confidence and simplification review follows R7.

Fresh independent review of code `72f1c59cc611dfe69e587eb117bb0742fddc1d6f`:
**PASS, High 0 / Medium 0 / Low 0**. The reviewer independently reran the original
two failing files: three tests passed in 16.25 seconds. The separate adversarial money
read confirmed the exact sign, value, scale, currency and prior period, with no production
formatting change or weakened tone/shape/count assertion. The reviewer confirmed the
neutral token matches the approved `link-gray` appearance and that the existing anchor's
name, destination and condition remain exact. Their report predates the lint result and
correctly marks it unverified there; the completed lint result above supplies that remaining
check. Full report: `reviews/final-web-consequences-review.md`.

Not verified: full merged frontend coverage/gates, final presentation/fidelity capture, native-browser proof, release/Windows/work-PC checks and the stage 6 sweep were not rerun by this worker. No paid/provider/live run, seat check, real Submit or Teams action ran. Signal, prompts, methods, calculations, canned handoffs and module-written text were not changed.
