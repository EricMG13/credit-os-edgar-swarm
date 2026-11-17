# Independent review: fixture and static follow-ups

Final verdict: **PASS for both chunks at `93fa4e78`**, after the independent round 2 repairs.
Open review findings: fixture **0 High / 0 Medium / 0 Low**; static **0 High / 0 Medium / 0 Low**.

Initially reviewed candidate `ad5d55ac` against base `152fdeef`, on `audit/review-static-pair`.
This reviewer did not implement either chunk. Scope includes every changed code, test and fixture
file, both follow-up reports, the actual finding records and `/workspace/scratch/batch-inventory.json`.
`AGENTS.md`, the stage 5 brief and coordination branch rulings R1–R17 govern this review.

## Initial verdicts

| Chunk | Verdict at ad5d55ac | High | Medium | Low |
| :--- | :--- | ---: | ---: | ---: |
| Fixture follow-ups (`adf0aa5b`, `ea81c2c3`) | Changes requested: preserve the existing withheld-register qualification | 0 | 0 | 1 |
| Static follow-ups (`9296bd24` through `ad5d55ac`) | Changes requested: affected test fails; S3-028 still fails on a short module page | 0 | 1 | 1 |

The counts above are new review findings, not closure totals for the original register. S6-031's
started-page introduction and S6-026's other empty run paths remain outside the workers' declared
scope; neither is closed in full by this review. The existing X1-023 repair is unchanged apart from
its stale type comment. No source or calculation evidence is inferred from a saved design example.

## Findings

### SPR-01 — Medium: the required affected Module test fails

`web/src/pages/library/Module.test.tsx:1414` calls `screen.getByText("Not assessable")` in the
blocked Recovery test. S3-037 now draws that exact word in the navigator; the compact Select also
holds supporting state text, alongside the page's own blocked status. The query matches three
elements and the test fails. Fresh bounded run: nine library UI files, 266 passed and one failed.

Keep the same visible status expectation, scoped to its intended blocked line and explanatory
reason. Do not accept an arbitrary matching label or remove the assertion. This is an integration
test blocker; the failure itself does not establish a production Recovery defect. The failing probe
is the committed test, run with `timeout 300 npm exec -- vitest run
src/pages/library/Module.test.tsx --maxWorkers=1` from `web/`.

### SPR-02 — Low, S3-028 residual: a short page cannot scroll the current entry into the window

`web/src/pages/library/parts/ModuleNav.tsx:80-105` bounds the scroll delta by the visible window,
but the navigator itself can extend below that window. Its actual scroll range can be too short.

Native Chrome, file-open build, 1,440 × 900, fresh route
`#/library/halden-aerostructures/2026-09-30/modules/credit-snapshot`:

| Measurement | Fresh load | Resize 768 → 1,440 | After manually adding 1,000 to nav.scrollTop |
| :--- | ---: | ---: | ---: |
| Navigator top / bottom | 364 / 1,216 | 364 / 1,216 | 364 / 1,216 |
| Client height / scroll height | 852 / 894 | 852 / 894 | 852 / 894 |
| Scroll top | 42 | 42 | 42 |
| Current entry top / bottom | 1,178 / 1,216 | 1,178 / 1,216 | 1,178 / 1,216 |

Each measurement follows 200 ms of settling. Scroll top 42 is already the maximum; another scroll
delta cannot show the current entry. The retained worker example used a longer page, which supplied
enough extra scroll range to mask this case. Preserve the compact picker and constrain the desktop
navigator's usable viewport before aligning its current entry. Add an independent regression whose
scroll position clamps at the browser's real maximum.

Saved independent probe: `/workspace/scratch/static-pair-review-nav.mjs`. Observed screenshot:
`/workspace/scratch/static-pair-review-credit-snapshot-nav.png`, visually inspected by this reviewer.
The probe uses native Chrome at `/workspace/audit-browsers/chrome/opt/google/chrome/chrome` and
`/workspace/scratch/static-pair-review-build/index.html`, with the current committed fixtures.

### SPR-03 — Low: the fixture removes an existing confidentiality qualification

`web/fixtures/library.json:1991` changes the already unavailable Withheld register's reason from
“The withheld register lists figures the sources marked confidential, so it is not published.” to
the generic sample-bytes sentence. Its address was already null, so this edit is not needed to
remove a dead link. `EvidenceRecord.test.tsx` changes the corresponding exact expectation too.

Preserve the original qualification, or append the sample-bytes explanation while keeping it.
The remaining download address/reason assertion changes follow S4-003/J6-001 and retain explicit
available-offer branch coverage. Probe: compare base and candidate
`slice.issuers[0].runs[0].evidence.record.registers.rows[4]`; the full before/after strings are
retained above. This is the only unjustified expectation change found in the reviewed test diff.

## Adversarial fidelity and schema read

- All original source-file records, file hashes, instruction hashes and run identities match the
  base exactly. Existing trace derivations and their exact source page references are retained;
  new missing-source qualifications do not fabricate source identities. The new source-detail
  guard rejects empty Source nodes and empty excerpts.
- Model fixture: 28 string leaves changed, zero numeric leaves changed. Every changed string keeps
  its digit groups. The free-cash-flow subtraction labels and US$m changes are exactly S5-009 and
  S5-018; missing, withheld and real zero values stay distinct. Run fixture: only the empty-note
  recap and four report addresses changed. Library numerical changes are finding-required count
  strings and Lumora's call-row cost, which now equals its unchanged USD 24.60 total.
- Seven facility facts have independent headings/results. Their original group traces remain;
  drawn zero, missing fee and withheld availability retain their different forms. Trace count 66
  and filtered count 33 follow those seven added rows; the Calculations tile counts the one
  retained derivation, without altering the separate 148-row register count.
- Each new activity report preserves the saved run state, finished-module count, module order and
  spend. Delivered entries explicitly say their original analytical passages are absent; other
  states carry the recorded reason. Missing calls, tokens and timing fields remain null. The
  standalone Model design record explicitly says no execution was performed, explaining its zero
  spend. Its bottom line and headline values are copied exactly from the Model fixture, including
  missing secured leverage and withheld revolver drawn.
- New source hashes match exact bytes: Model
  `b2b14cf3016aef2d6097038519abcf1c900a70cc90260e6c76b384c56b0bf9ab`; run
  `c42c2cbd3739e1b6d9913e895ebd43d99c8f517bbdc05000c08af6584d32dd6e`.
  These are identified as fixture records, not real issuer evidence. Missing original evidence
  stays an explicit gap. The existing six-card Home design remains unchanged.
- The one-case relaxation keeps strict object, case-count and data-alignment validation. Zero
  and three cases remain refused; a merely truncated inconsistent payload remains refused. A
  consistent one-case payload reads and renders all six pages, with and without a forecast, and
  absent/null binary comparison is an explicit gap. Parsing does not mutate its source.
- Case choice is shared per issuer/run and loaded source object; intervening pages retain it and
  another run starts on its own first case. Optional row addresses pass the existing local-address
  reader; all nine affected chart tables render supplied row controls or an explicit missing-source
  marker. Negative bars add a pattern without changing signed values or missing/withheld branches.
- The full test diff was read. Required unit spellings, periods, labels, trace counts, case-count
  refusal messages and download setup changes follow their findings. No test is skipped, no
  tolerance/gate is relaxed and no independent financial answer is replaced with production output.
  The broad “Not assessable” query still needs the narrow repair in SPR-01.

The fixture report retains initial-red output (11 fixture/reader failures, two Model label/unit
failures and two adversarial empty-source failures) in `fixture-followups-test-first.txt`.
The static report records the initial-red runs for one-case reading, case choice, row traces,
negative bars, empty pages and navigator geometry/resize. The new tests were read against their
findings; this review did not manufacture a new test-first claim for the original implementation.

The confidence read focused on lost qualifications, missing versus zero, source identities,
partial models, cross-page state and browser scroll limits. The simpler existing row helpers and
run-key convention remain appropriate; the viewport correction is incomplete as SPR-02 explains.
Requested historical review skills/models are not available in this session; direct adversarial
and simplest-design review was used under R7.

## Fresh checks on ad5d55ac

All test/gate commands use a 300-second cap; Vitest uses one worker and the frontend working
directory. Existing npm and Python environment symlinks were reused; no installation was made.

| Check | Result |
| :--- | :--- |
| Library reader/fixture tests: seven files | 0; 413 passed |
| New Model/navigation regression tests: seven files | 0; 28 passed |
| Existing affected Model/run UI and section tests: 12 files | 0; 391 passed |
| Other affected Model readers: four files | 0; 384 passed |
| Library UI: nine files | 1; 266 passed, one failed (SPR-01) |
| Signal compatibility: 34 files | 0; 630 passed |
| `npm --prefix web run lint` | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `uv run --no-sync python tools/quality_gate.py --base 152fdeef` | 0; no changed Python, zero findings; import check included |
| `node --test web/scripts/fixture-data.test.mjs` | 0; 12 passed |
| Build static and connected bundles into scratch output | 0 |
| Original S2 fixture contradiction probe | 0; basis, quarter, pathway and tile notes now agree |
| `git diff --check 152fdeef..HEAD` | 0 |
| Independent native Chrome short-page navigation probe | Reproduces SPR-02 on fresh load and resize |
| Native Chrome 157.0.8103.78 / Edge 155.0.4283.62 fixture walks | All 89 Model link instances resolve to four retained report/Evidence targets; all four ended activity links open their own saved reports; shared Downside choice survives Model → report → Forecast; four facility drawers preserve amount/zero/missing/withheld results; unavailable handoff download has no link |
| Native desktop compact picker at 481 / 768 / 1,000 | Visible and mouse-operable; module and page-section selection work; 768 screenshot visually inspected |
| Native browser runtime requests / page errors | Zero external requests and zero page errors in both browsers; short-page SPR-02 reproduced in both |

The Python invocation uses `/workspace/audit-tooling/bin/uv` and explicit
`PYTHONPATH=/workspace/review-static-pair/src:/workspace/review-static-pair/apps/issuer-library:/workspace/review-static-pair`.
An initial Vitest invocation from the repository root did not load the frontend alias/global
configuration and ran no tests; it is excluded from the acceptance counts above.

Independent native-walk script and results are saved at
`/workspace/scratch/static-pair-review-browser.mjs` and
`/workspace/scratch/static-pair-review-browser.json`. Its aggregate exit 0 means the other walks
and measurements completed; its measured `currentInsideVisibleWindow: false` is explicitly the
SPR-02 failure, not a navigator pass. Early exploratory runs stopped on overly broad probe
locators; those were scoped to the actual mouse label/control and supplied no acceptance counts.

## Final rereview of the independent repairs

The lead explicitly authorized cherry-picking the separate implementers' stable repairs. This
reviewer made no hand edits to production, tests or fixtures:

- Fixture source commit `b1434885` is `8588a69e` on this candidate. It restores the exact original
  confidentiality reason, keeps the null address, restores the exact existing assertion and adds
  a visible-reason/disabled-Open/no-link regression. Its report retains the first failure.
  Fresh rereview: fixtureFinalAudit, EvidenceRecord and readRecord, **45 passed**. **SPR-03 closed.**
- Static source commit `83dacf2c` is `93fa4e78` here. The Recovery status assertion keeps its exact
  wording and visibility, scoped to the blocked line containing the exact reason; that reason's
  visibility check remains. The new navigator regression independently clamps scroll position
  to the browser's maximum. Desktop height is bounded by the actual visible space before aligning
  the entry; compact widths clear that height. Captured ancestor scroll updates the bound while
  internal mouse scroll stays under the reader's control. No new abstraction or dependency.
  Fresh rereview: Module, ModuleNav.compact and Module.search, **113 passed**. **SPR-01 closed.**
- Fresh rebuilt file-open checks in native Chrome **157.0.8103.78** and Edge **155.0.4283.62**
  both pass the original short-page reproduction: at 1,440 × 900, navigator 364–876, client height
  512, scroll top 382, current entry **838–876**. The same geometry passes after compact-to-wide
  resize. At 1,440 × 700 the current entry is **638–676**, client height 312. No outer scroll is
  used for these fresh/resize checks. Internal manual scrolling stays where the user puts it;
  scrolling the main ancestor realigns the current entry and recomputes the usable height.
  Compact controls remain visible at 481/768/1,000, with no leftover inline desktop height.
  The final Chrome screenshot was visually inspected. **SPR-02 closed.**
- Both native browsers also render the restored confidentiality reason beside a disabled Open
  button and no Open link. Both record zero external requests and zero page errors.

Independent final probe/results: `/workspace/scratch/static-pair-review-nav-final.mjs` and
`/workspace/scratch/static-pair-review-nav-final.json`; native screenshots:
`/workspace/scratch/static-pair-review-final-Chrome.png` and
`/workspace/scratch/static-pair-review-final-Edge.png`. The implementer's committed
`static-followups-evidence/round2-credit-snapshot-after.png` and JSON corroborate these independently
observed results. The code/test diffs and both round 2 reports were read before cherry-picking.

The previously passing 2,112 tests were not repeated wholesale. Only the directly affected
regressions were rerun after these narrow fixes. Final lint, format and type checks, the Python
changed-code/import gate against `152fdeef`, the static rebuild and whitespace checks pass.
No remaining scope, caller, fidelity, money/order/source or test-weakening defect was found in
the two reviewed chunks. These verdicts do not close the workers' explicitly excluded portions
of S6-026/S6-031 or replace the lead's final combined-tree gates.

Not verified: repository-wide coverage/unused/duplication/audit and connected proof gates reserved for the lead; full combined handoff fidelity after-capture; every original browser probe (some inspect old wording or wrong heading levels); a full weekly/Python suite; Windows desktop operation; a real issuer/model run, provider, real Submit or Teams call. No Signal, method, prompt, calculation or proof-handoff file was changed by either reviewed chunk or this reviewer.
