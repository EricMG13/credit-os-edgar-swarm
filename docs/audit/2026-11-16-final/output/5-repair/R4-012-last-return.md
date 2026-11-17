# R4-012 — bounded last implementation return

Second and last implementation return under stage 5/R12. Isolated branch
`audit/lead-reference-last`, `/workspace/audit-reference-last`, starts at report tip
`05da92cfac3c59f1c1e2eedb32c11ccc7eab2064` (round-2 code `02fefa34`). Stable final code:
`78a6baab12e273f7794329e527f216e4e1ba6479`. This later report/evidence commit changes no
production code or test. Fresh independent review of that exact code pin is required;
this report is not acceptance. No push or merge was made.

## Observed defect and smallest repair

The unchanged independent boundary probe reproduced both reported ordinary passages:
`The margin rose eleven pp. 3 consecutive fiscal quarters running.` and the `twenty-one`
variant. At the starting pin each incorrectly returned `containsReference=true`; the actual
chart Basis cell, plain table, finding paragraph and ForecastScope then replaced or omitted
the exact qualification. Seven adjacent controls passed. This was observed before editing
production code, not inferred from the regular expression.

Only `web/src/pages/connected/publishedReport.ts` changes production behavior. In the `pp`
duration exception, the zero-or-one modifier limit becomes an uninterrupted sequence of
words, including hyphenated modifiers, ending at the existing duration noun. Punctuation
ends the phrase. A preceding adjacent word is also required for the spelled-magnitude route:
a bare, comma-delimited or parenthesized page locator must not become a percentage-point
quantity merely because later text mentions quarters. No quantity-word list or modifier-count
cap is introduced. The existing numeric route, explicit adjacent `See`/`at`/`on`/`as` cues,
page-token boundaries and all other source detectors remain unchanged.

New `web/src/pages/connected/publishedReport.reference-last.test.tsx` has 27 independent literal
cases. Each checks the predicate, exact chart cells, actual FindingParagraph/PublishedTable/
ForecastScope output, trace controls, and unchanged full text in Evidence. Controls include
bare `pp. 3`, `p. 3`, `pages 3`, `p1000`, source-style punctuation, explicit locator cues with
the same duration-shaped suffix, and ordinary quantities followed by an actual page, file,
G12 annotation or run code. Existing tests supply group/math labels, genuine missing and
standalone-punctuation G12 annotations, page ranges, source hashes and other boundaries.

Existing expected assertions: **no changes**. No Signal, analytical methods, prompts,
calculations, proof handoffs, module-written passages, source data, dependencies or gates
were changed. The production patch is nine added/five removed lines, including comments.

## Red, green and gates

Retained observed output: `probes/R4-012-last-return.log`. The independent probe is copied
byte-for-byte as `probes/R4-012-last-boundary-probe.mjs`; its original remains unchanged.
It loads real modules through Vite SSR and React static rendering without a listening app
server or browser navigation. No app/provider/external-network request was made.

| Check | Exit | Observed result |
| :--- | ---: | :--- |
| Unchanged independent boundary probe at starting pin | 1 | Two ordinary failures through all five boundaries; seven passing controls |
| New regression file before production edit | 1 | Seven failed, twenty passed: four expanded quantity phrases and three genuine page locators |
| New regression file after repair | 0 | All 27 passed |
| Unchanged independent boundary probe after repair | 0 | All nine passed through all five boundaries |
| Original unchanged eight-case round-2 probe | 0 | Eight passed; zero failures |
| Final focused affected tests | 0 | Eight files, 280 passed: the unchanged 253 plus 27 new checks |
| Additional actual caller tests | 0 | Ten files, 123 passed |
| Full frontend lint | 0 | `npm run lint` |
| Full frontend format, final | 0 | `npm run format:check`; initial exit 1 named only the new test, then normal Prettier applied |
| TypeScript | 0 | `npm run typecheck` |
| Changed-code Python quality/import gate | 0 | Base `05da92cf`; zero findings, zero changed Python files or scoped lines |
| `git diff --check` | 0 | No whitespace errors |

Final focused command, from `web/`:

```sh
timeout 300 node_modules/.bin/vitest run src/pages/connected/publishedReport.reference-last.test.tsx src/pages/connected/publishedReport.reference-round2.test.tsx src/pages/connected/publishedReport.reference-regression.test.ts src/pages/connected/publishedReport.reference.test.tsx src/pages/connected/report/Forecast.reader-text.test.tsx src/pages/connected/visuals/finalAudit.test.tsx src/pages/connected/visuals/LegacyForecast.finalAuditUnits.test.tsx src/pages/connected/visuals/visualData.chartTable.test.ts --maxWorkers=1
```

Additional callers were `ReportContent` drawings/findings/records/codes, `publishedReport`,
`reportView`, `LegacyForecast` base/axes/reader-text and `report/Forecast` tests. Every Vitest
run used `timeout 300` and one worker. The portable probe command, from the repository root:

```sh
timeout 60 node docs/audit/2026-11-16-final/output/5-repair/probes/R4-012-last-boundary-probe.mjs "$PWD" /workspace/scratch/reference-last-boundary-recheck.json
```

Python used `/workspace/audit-tooling/bin/uv`, verified as `uv 0.12.5`, with `run --no-sync`,
`UV_PROJECT_ENVIRONMENT=/workspace/credit-os2/.venv`, and explicit own-worktree
`PYTHONPATH=/workspace/audit-reference-last/src:/workspace/audit-reference-last/apps/issuer-library:/workspace/audit-reference-last`.
No install or synchronization ran. This zero-Python-scope result does not test TypeScript
semantics. Linked existing dependencies were used. Signal's 630-test run at `02fefa34` was
not repeated: no Signal caller/import of this helper was found, no Signal code changed,
and the lead retains the combined final full-gate requirement.

## Confidence, simpler alternatives and fidelity

Manual confidence review traced the optional-one-word cause and exercised two/three duration
modifiers, different written magnitudes, hyphenated modifiers, numeric quantities, punctuation
on each side, bare source tokens, explicit cues, and a later independent source in the same
passage. The unchanged review probe establishes the exact before/after reader consequence;
the new cases add nearby structural checks, rather than only fitting the two reported strings.

Manual post-edit simplification retained the local predicate. Changing only `?` to `*` would
also exempt bare source locators followed by a duration; the preceding-word condition keeps
those controls as references. Adding selected quantities, increasing a modifier count, or
special-casing the two sentences repeats the original cause. Ignoring all `pp` would leak
genuine page locators. Caller-specific exemptions duplicate the shared rule. No new helper,
parser dependency or caller policy is needed. The named confidence-review/rewrite-tournament
tools are unavailable in this session; this is the README R7 manual fallback.

This is a lexical boundary, not an unrestricted language parser. An unmarked use of `pp`
with preceding words can remain ambiguous; these checks establish the named quantity and
explicit/punctuated source forms, not all possible natural-language uses. That limitation
does not substitute for the mandatory fresh final-pin review, and no further implementation
return is proposed if a High/Medium remains.

The fidelity checks retain the exact ordinary sentences, `3.20`, FY2025, the source identity
`annual-report.pdf`, and trace/Evidence controls. Reference-bearing content remains unchanged
in Evidence. These are deterministic retained-data caller checks; combined native-browser
capture and the final `VERIFICATION.md` entry remain with the lead.

Not verified: fresh independent review/acceptance of the exact final code pin; combined-tree frontend/proof and native-browser fidelity; weekly/full Python suite and Windows/work-PC behavior; all possible natural-language citation forms or analytical module correctness; live issuer/model execution, paid/provider/live/seat/real Submit or Teams (outside this task).
