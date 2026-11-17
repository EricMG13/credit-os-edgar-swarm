# T22 round 2 — retain confidence scope after a generic parse failure

Code pin: `5b5610fe390e848086c5c2b16a501707c7de919b` on
`audit/recovery-t22-round2`, based on reports-only `4b948312` and initial T22 code
`12e53e21`. This is the first High/Medium return under stage 5's bounded review
process. Fresh primary and adversarial review of this exact pin remain pending.

R4-013, merged into C5-003/J4-005/J3-015, is repaired in this implementation:
an unrelated malformed earlier Markdown table can leave one Unstructured handoff
even though the unchanged confidence scorer accepts fourteen later inputs and
publishes 89/High. The drawer now retains the exact confidence-scope qualification
and its source citations in that fallback, rather than presenting only rows and
the method. C5-007/J5-002 remain withdrawn under R14.

## Change and caller fidelity

- `credit_os/store.py` projects the accepted section's non-fenced, non-table prose
  from the original handoff, with its original line numbers. It uses the scorer's
  existing `_lines` heading/fence authority; it does not change that authority or
  compute another score. Original prose, including trailing spaces, is copied
  from the original lines. The existing accepted input strings/order remain exact.
- `credit_os_chips.py` builds chips for that isolated projected section when the
  generic parser has no Confidence inputs section. Earlier/fenced/next-section
  passages are not made part of the confidence trace.
- `react_frontend/sources.py` includes the same section when rebuilding chips
  against verified original source bytes. Inspection found this real caller
  deletes the old chips; a failing bridge regression was added before extending
  its existing rebuild loop. Original file/hash/page validation remains in force.
- `publishedReport.ts` types the optional section; `ReportContent.tsx` sends the
  recovered section through the existing `buildTrace` path. It retains the exact
  original output/hash Evidence address, qualification, real citations, excerpts,
  and verified source file/page links. Structured and non-confidence callers keep
  their existing paths.
- Added three backend projection cases, one actual bridge case, and one drawer
  case in `test_confidence_trace_projection.py`, `test_react_sources.py`, and
  `Confidence.recovery.test.tsx`. No existing expected value was changed.

`src/deploy_workflow/confidence.py` is unchanged. No scoring formula, calculation,
weight, rounding, cap, band, analytical method, prompt, canned handoff,
module-written passage, Forecast or Signal file changed. No dependency, route,
gate, assertion or test selection rule was weakened. No push or merge occurred.

## Test-first evidence and gates

Artifacts are in [`evidence/t22-round2/`](evidence/t22-round2/). Commands use
`timeout 300`, pinned `/workspace/audit-tooling/bin/uv` 0.12.5 with `--no-sync`,
and explicit worktree `PYTHONPATH=src:apps/issuer-library:root` as absolute paths.
Vitest uses `--maxWorkers=1`; existing linked dependencies were reused.

| Check | Result and retained artifact |
| :--- | :--- |
| Initial projection RED | Exit 1, two failures for absent recovered section; six existing cases pass. `red-python.txt`. |
| Drawer RED | Exit 1, exact qualification missing; five existing cases pass. `red-web.txt`. |
| Actual native baseline | Six pass/two fail on unchanged initial code, both qualification loss. `actual-before.json`, `actual-fixture-before.json`. |
| Actual bridge RED | Exit 1, verified-original refresh removes the recovered line's chip. `red-bridge.txt`. |
| Final Python GREEN | Exit 0, **501 passed**: projection, unchanged confidence/archive oracle, chips, store and actual React source bridge. `python-final.txt`. Earlier pre-bridge 473-pass run is retained as `python.txt`. |
| Affected frontend and Signal | Exit 0, **44 files / 771 tests passed**: Confidence recovery, ReportContent callers, Modules callers, connected Signal callers and Signal tests. `frontend-affected.txt`. |
| Full frontend lint | Exit 0. `lint.txt`. |
| Full frontend Prettier check | Exit 0; retained completed result. `format.txt`. |
| Full frontend typecheck | Exit 0. `typecheck.txt`. |
| Default Python quality gate | Exit 0, **zero findings**, 15 changed files / 865 scoped lines against `origin/main`. `quality-final.txt`. No base override. |
| Native qualification reproduction after repair | Exit 0, **8/8 each** in Chrome 157.0.8103.78 and Edge 155.0.4283.62. `actual-after-chrome.json`, `actual-after-edge.json`, `actual-fixture-after.json`. |
| Actual verified-original citation projection and native drawers | Exit 0, **8/8 each**, using actual store/chips/bridge projection with a retained original source pin. `source-citation-fixture.py`, `.json`, `source-citation-chrome.json`, `source-citation-edge.json`. |
| Independent native source-fidelity assertions | Exit 0, **7/7 each**: exact source file/hash/page links, exact source excerpt, displayed cited filename/page, exact confidence qualification, original handoff hash/line, unrelated prose excluded, zero external hosts/page errors. `source-citation-checks.json`. |
| Protected-path and whitespace diff | Exit 0; scorer/protected-path diff empty, `git diff --check` clean. |

The unchanged portable reviewer probe is retained as `adversarial-portable.mjs`.
It bundles local components and opens a local file; no workflow/model/provider or
real Submit is invoked. The committed citation fixture additionally calls actual
`sources.enrich` with original bytes, workflow pin and supplied source inventory.

The retained `frontend-related.txt` attempt spans the environment interruption
and has only a Vitest banner, with no completion code observed; it is not counted
as a pass. The explicit affected-file run above completed. `quality-before-cleanup.txt`
retains a failed intermediate gate: a redundant scratch fixture copy was removed
from the evidence directory (its scratch original was untouched), the new owned
fixture's dictionary style was corrected, and the new bridge test was formatted.
The final default gate passes without changing its configuration, comparison
base, thresholds or exclusions.

The original task probes' unchanged prior-pin evidence remains in `T22.md` and
`evidence/t22/`: C5-003 exit 0; J4-005's documented fixed-result exit 1
(`NOT REPRODUCED p005`, unchanged 89/High, method present, no repeated no-page
lines); 28 ordinary synthetic Chrome/Edge drawers passed. Those historical runs
are not claimed as reruns on this round-2 pin. The current malformed-handoff
portable probes and caller regressions above cover this return's cause.

## Confidence review, simplest design and fidelity

Doubts checked: selecting prose with rules that differ from the accepted scorer;
including a fenced example or unrelated section; losing raw count spelling or
zero; losing chips when the bridge refreshes verified sources; and changing an
ordinary trace caller. The new Windows/BOM/trailing-heading/fence regression
uses the scorer's existing rules. Exact raw prose/locators and source identity
are asserted separately from the unchanged score. The real bridge doubt became
the additional test-first repair above. All affected caller suites pass.

Alternatives considered: another JavaScript parser would duplicate section
authority; drawing the entire Unstructured handoff would include unrelated
analysis; repairing the general Markdown parser would broaden the change beyond
the finding. The retained design projects only source prose selected by the
accepted scorer and reuses existing chip, verified-source and trace machinery.
No new service, rendering component or analytical calculation was added. The
named confidence-review/rewrite-tournament skills are unavailable in this tool
catalog; these direct cause/adversarial/simplification checks implement R7's
fallback without claiming either skill ran.

Fidelity scope for the lead's combined `VERIFICATION.md` entry: explicitly
synthetic retained handoff bytes, exact FY2025 audited-standalone/overseas-exclusion
qualification, fourteen accepted input strings/order/zeros, published 89/High,
existing method, exact output/hash/line Evidence address and verified original
source filename/hash/page/excerpt. Chrome and Edge retain those details with zero
external requests/page errors. This proves presentation/source retention within
that scope, not real issuer analysis or combined-branch completion.

Not verified: fresh primary/adversarial verdicts on this code pin; combined final-T18/T22/lead-batch integration, gates and fidelity; original task probes rerun on round 2; full/weekly Python suite, full frontend gates/build/connected-service proof on this pin, Windows/work-PC behavior, real retained model analytical correctness, live/paid/provider/seat/real Submit/Teams execution, or unavailable named skills. No external application request was made.
