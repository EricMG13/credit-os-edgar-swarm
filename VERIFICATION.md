# Verification record

Keep one running record here. A pass applies only to the stated scope. Earlier verification of the
engine is in [EricMG13/final-workflow](https://github.com/EricMG13/final-workflow)'s
`VERIFICATION.md`, which also keeps the retained runs this copy leaves out.

## 2026-11-16 — Issuer calendar: year strip over a grouped list (branch `claude/calendar-compact-strip`, from `claude/fable-reviewers-critique-b4de59` at `189b305a`)

Scope: presentation only, `web/src/pages/connected/visuals/EventLane.tsx` and its tests; no backend, handoff, provider or model change. Nothing pushed.
- Changed: the per-event rows with a position track are replaced by (1) a strip with one column per year that has events and one marker per event, gaps between years named ("No events 1974 to 2013"), and (2) one list in date order grouped by year. A row shows date and precision, category mark, title, credit relevance, module and trace control; status, published date and (on module pages) source are in a per-row detail panel, closed at first, with "Show all details". The legend entries are toggles that show or hide a category (owner request, this session). A marker moves focus to its row; row and marker highlight each other on hover and focus. No heading elements in the drawing (the old `h5` skipped a level).
- Rulings by this session: a linear date axis was rejected (60 of 69 Caesars events fall in 2020–2032, 18 in 2026, so positions overplot); every detail line visible at 14px/22px cannot reach half height (about 200 characters per event), so status and published date moved to the detail panel; markers are outside the tab order (`tabIndex=-1`) and the rows' own controls are the keyboard path.
- Prior art: nothing reusable in the owner's repositories (`gh search code`, owner `EricMG13`: timeline, strip, calendar); patterns taken from Preline Timeline (date-group label beside rows) and Preline Accordion (button `aria-expanded`/`aria-controls`, hidden panel), read on the live pages; no approved library has a unit dot strip; Flowbite's pages returned HTTP 429 and were not read. No dependency added.
- Answer key: `EventLane.fixture.ts`, 14 hand-written events (four categories, four precisions, a same-date pair, a "Not supplied" published text) with stated year, order and gaps; `EventLane.test.tsx` asserts each event's title, date, precision, relevance, status, published and source text once, its marker, category, year group and original row index against it.
- Gates from `web/`, all exit 0: lint, format:check, typecheck, test (159 files, 3,308 tests, statements 93.48%), unused, duplication, build. One task review (no High or Medium; five Low, all applied).
- Fidelity check, retained Caesars run `20261115-114658-01`, read-only preview of the built branch, 69 events: at 1440x900 the calendar page is 4,138px (8,480px before in the same browser pane, recorded earlier as 8,568px), figure 3,346px (7,688px); 69 markers, 69 rows, each marker's `aria-controls` resolves to a distinct row, 138 row controls (trace and details) in tab order, no duplicate id, headings h1, h2, h3, h3, no horizontal overflow; Historical off leaves 23 rows and 1,856px; both off shows "No categories are selected."; "Show all details" opens all 69 panels (7,588px). At 375x812: 12,854px (27,904px before), no horizontal overflow, 141 row and toggle targets all at least 44x44 with none overlapping, markers not touch targets. Keyboard: Tab reaches the row controls and Enter on a trace control opens its drawer.
- Not verified: a screen reader; real touch devices; Windows and CI; the visible focus ring on the row a marker jumps to (the preview pane did not hold focus); the module-page use of the drawing in a browser (tests only); a run with Scenario or User reminder events in a browser (fixture only); `test:scripts`, `test:file:gates`, `proof:connected`; a mutation run. No paid execution.

## 2026-11-16 — Report reader design critique: five priorities, review fixes, main merged (branch `claude/fable-reviewers-critique-b4de59`)

Scope: presentation only, all under `web/`; no backend, handoff, provider or model change. Source: an Impeccable critique of the connected issuer report reader (21/40; snapshot under `.impeccable/critique/`). Gated code head `8d2089bc`; the branch holds `origin/main` at `8c4abeb7` (three merges, the last docs only; the first resolved conflicts in `ReportContent.tsx`, `ReportLibrary.tsx` and `ReportLibrary.design.test.tsx`, resolution reviewed from git objects: nothing dropped from either side). Nothing pushed.
- Changed: numbered record tables (`T4.4 …`, `P3 …`, `Confidence inputs`) leave module pages for a "Statements and records" card linking to Evidence, while every module-written sentence in such a section stays on the page; trace controls visible at rest, drawer values wrap; "Chart data:" headings and tables a chart already draws removed; qualifications moved from forecast table headers to a note list under the table; axis ticks from zero on round steps, every scenario drawn with one emphasised and one end value label; scroll-spy navigator; skip link, per-page title, heading order, 44px phone targets, a disclosure for empty forecast columns. Calendar: the shared-lane drawing was built, measured taller (17,038px against 11,168px) and withdrawn; rows kept with a wider label column.
- Gates on `8d2089bc`, from `web/`, all exit 0: lint, format:check, typecheck, test (159 files, 3,287 tests, statements 93.51%), unused, duplication, build, test:scripts, test:file:gates.
- Reviews: per-task review of each change; whole-branch adversarial review (1 High, 2 Medium), confidence review (2 Medium) and a rewrite tournament on the pre-merge head; one fix wave; its re-review found all four fixed and nothing above Low. The High was a qualification sentence inside a coded section no longer drawn (fixture `tests/fixtures/esg/CP-2E-h4.md` lines 134 and 232); it is drawn once again.
- Fidelity check, retained Caesars run `20261115-114658-01` in a read-only preview of the built head at 1440x900: CP-1 module page 10,716px (28,702px before) with no register-code heading and no "Chart data:" heading; records card lists 8 tables and the Evidence link; 63 trace controls, none hidden; no heading-level skip; navigator marks "Figures and records" while its block is in view, the last entry at the bottom and "Bottom line" at the top; Forecast headers at most 77px (273px before) with the interest-basis qualification once per note list and in no header; no overlapping chart text in 10 charts; calendar 8,568px with no horizontal overflow; Overview shows the labelled "Test preview" note. At 375x812: no horizontal overflow, trace hit area 44x44, no pinned column.
- Open, not fixed: a table's scroll-region label can differ from its heading on the Overview; `ticks` keeps an unused parameter; a heading that only looks like a code ("P50 …") is treated as one; promoted monitoring tables keep their code in the heading (`T2.12`, predates); a non-finite chart value falls back to an empty axis without a log (unreachable today); a scenario ending early could put its name near the emphasised value label (not measured).
- For the owner: the calendar's planned lane layout is not delivered and needs a different design; five uncoded CP-1 summary tables stay on the module page; module-written prose defects, the repeated run charts on Forecast and the History list reading "Finished" for a test-preview run predate this work.
- Not verified: a screen reader; real touch devices; Windows and CI; the browser proof script (`proof:connected`); the CP-2E coded-section fix in a browser (its handoffs are fixtures, not a retained run); the Changes page beyond its shared code path; a mutation run. No paid execution.

## 2026-11-16 — Start a run: four steps and one plain review (PR #6, main `76ed9dde`)

- Scope: the connected Start a run flow only. Five steps became four (Documents, Purpose, More context, Review and start; completed stepper steps are buttons) and the review became one sheet, "What will run", with an Edit button per block and no module code, run id or launcher flag below the Advanced level. Service text is rewritten on the page only (`web/src/pages/connected/start/plain.ts`); the Python service, the summary data and the submit request are unchanged. Brief: `.impeccable/surfaces/web-src-pages-connected-startrun-tsx.md`.
- Merged main twice on the way (`ed26598a` per-pathway caps; `c88773d8` intake hooks and panels, where main's file was taken whole and the four-step changes re-applied). Paid-submit path reviewed after each merge by a read-only reviewer: main's cap, review and submit functions are byte-identical; 33 cases in paid and synthetic mode (jsdom, mock fetch) found no submit against a cap, pathway, digest, acceptance or approval other than the review on screen; 11 of 12 hand mutants killed (the survivor: the pathway cards' `invalidateReview` is redundant while no pathway control shares the screen with the review).
- Defects found by review and fixed test-first: the review footer read "Step 5 of 5"; a run id reached the Changes line when a skipped run's reason quoted an issuer name with brackets; the `SEC:` label stayed on a lookup line; the comparison caveat ("earlier format", "earlier methods") was dropped and is now shown without the run folder; focus fell to the page body after a stepper return (the step heading's `key`, dropped on main in `89e4e2be`, is restored, which also returns focus after Continue and Previous).
- Gates at `57eadd8e`, the merged tree: `npm --prefix web run gates` exit 0; Chrome 157.0.8103.78 run `20261116-100900-01` passes the synthetic upload-to-finished-report proof on macOS (`proof-artifacts/run-xBeXl3`); Python quality gate zero findings (no Python changed); 800 changed lines. Merged on the owner's instruction while CI's "fast tests and page logic" was still running; its result was not seen before the merge.
- Presentation fidelity scope: the Purpose step and the review viewed in Chrome at 1440 px and 390 px at `08144b4b`, before both merges; afterwards the adopted shorter `ReviewSheet` was compared by rendered markup against the version it replaced on seven summary fixtures (identical), and the page was not viewed again. Not verified: Edge and Windows; keyboard focus in a real browser (jsdom only); paid mode against the live service (no provider called); widths of about 640–815 px and 1041–1159 px, where neither the step line nor the stepper labels name the step. Known, with the owner: lookup lines, one environment-variable name and omitted-section ids are drawn as the service sends them.

## 2026-11-16 — Six-fix PR integration with current main

- Main advanced to `ed26598a` (Run activity). Merged it into the six-fix branch, retaining both verification entries and resolving the API conflict with upstream LiveRun/Activity/getActivity plus the private ReportEntry type. Astra confirms all six-fix production changes and upstream activity routes/components are preserved exactly; no new feature or design change. Native backend and pins remain unchanged.
- Combined-source verification: 196 connected tests pass (86.90% line coverage), 30 bridge tests pass, full web ESLint/Prettier and TypeScript pass, Python quality gate zero findings. Clean offline install/dual build from tree `510a7c0f05f61356fbd1de95f3fb49162c9a0bde`; Chrome 157.0.8103.78 `20261116-092647-01` and Edge 157.0.4341.60 `20261116-092716-01` each pass all 38 synthetic upload-to-finished-report checks on macOS. Evidence: `proof-artifacts/run-wxeUO5/proof.json`. Final Fallow audit against current main: PASS, zero introduced and zero inherited findings.
- No paid execution, tournaments or ZIP. ZIP remains held pending actual Windows work-PC proof in both browsers. Historical verification entries retained in git history when trimmed below 1,000 lines.

## 2026-11-16 — Six remaining frontend Fallow findings

- Verified each reported item before editing using its `fallow inspect`, `dead-code --trace` or `dupes --trace` command. Removed only ReportEntry's unused export; extracted the repeated following paragraphs and empty findings notice; isolated citation rendering; split Run intake into stable step/panel components, state hooks and bounded derived-data helpers. No suppression, dependency, native backend or Credit OS design changes.
- Confidence review, ranked: (1) form extraction could alter approval/submission or hidden data — Astra found Listed equity uncheck retained an old ticker; restored the original atomic clear and verified the actual review payload. Frozen cap, pending locks, retries and single submission retain their guards; (2) hooks/components could reset state, focus or uploaded/prior files — stable top-level definitions and hook order reviewed; UI regressions exercise carry-latest success/no-history, file copying, exact reviewed context and zero premature submit; (3) report extraction could move qualifications/trace identity — literal paragraph order, bold qualification, exact block line/hash/source link and both empty notices tested; (4) citation extraction could change missing/empty/file/source precedence — exact original file/page URLs, SHA-256, excerpt, missing identity and mismatch warning verified. Astra independently approves final Run, report and citation changes. No remaining confirmed defect in scope; no tournaments.
- Final combined connected suite: 194 tests across 25 files passed, 86.64% line coverage. A separate cold-import reader test exceeded its one-second heading wait; allowed three seconds for the lazy chunk and reran the entire ConnectedApp file: 24/24 passed. This test-only change does not alter the frozen runtime. TypeScript, changed-file ESLint/Prettier, clean offline install and dual build pass. Python quality gate: zero findings (no Python changes). Final Fallow against `24531dae`: PASS, zero introduced and zero inherited findings.
- Frozen runtime/build source tree `9e4bdadb490826c28acc70c9003df3b832eba3f2`; Chrome 157.0.8103.78 run `20261116-091915-01` and Edge 157.0.4341.60 run `20261116-091944-01` each pass all 38 synthetic upload-to-finished-report checks on macOS. Evidence: `proof-artifacts/run-ozVMtZ/proof.json`. Read-only Caesars preview moved to `http://127.0.0.1:58346/report/20261115-114658-01#overview`. Its run records, outputs, handoffs, models and chips equal the preceding preview exactly; visible Overview keeps its Test preview/withheld-method qualification. This is retained data, not a new live analytical run.
- Fidelity scope: Astra compares rendered structures/classes/copy and source identities against merged `24531dae`; focused tests and branded browser checks cover the five-step Run and report pages, including selected narrow layouts. Native backend and pins remain RBOT-HTML `be953752`; React manifest/lock unchanged. No paid providers, Signal changes, historical-run mutation, ZIP, push or publication. Windows work-PC Chrome and Edge proof remains outstanding; ZIP stays held. Trimmed oldest whole entries below 1,000 lines; git history retains them.

## 2026-11-16 — Run activity section in the connected interface (branch `claude/run-activity-section-81a806`)

- Added `/runs`: the runs that are running and waiting, after the Claude Design brand-application mock "E · Run activity" and today's HTML Run activity view. Counts, the service's hold note, a card per running run (pathway, state, a stalled mark, module progress and one chip per module, source-file count, the name warning) and a Waiting table with each run's reason. Each issuer links to its run page. The rail's Run item opens it; Start a run stays a button there and on Library; a run page's breadcrumb returns to it.
- New `GET /connected/activity` reads the live records fresh through `deploy_workflow.inbox.activity.snapshot` and sends a fixed set of fields: no spend, folder, process ID, digest or file names (a count only). The hold note is read from the `_engine/activity.js` the scheduler writes. RBOT-HTML's scheduler and `inbox` modules are unchanged. Departures from the mock, following the later HTML view's rule: no run code and no file list; the page re-reads every 5 seconds.
- Confidence review, ranked: (1) audit fields reaching the page — the endpoint test compares a running run's whole entry with a hand-written one; (2) the list and the run page disagreeing on progress — both now use `finishedFigure` and the prepared plan's modules (seen as 3 of 15 against 3 of 14 in the browser, repaired); (3) a failed read shown as "no run" — a failed or malformed read shows "Run activity could not be read", tested. Rewrite review of `listing`, `useActivity` and `RunningCard` done inline, no sub-agents: kept. Reading the whole list from `activity.js` was rejected, since it is absent until the first poll.
- Gates: `tests/test_react_frontend.py` 9 pass with 118 scheduler and activity tests; 186 frontend tests across 24 files; TypeScript, ESLint and Prettier on the changed folders, knip, duplication and build pass; Python quality gate zero findings. Not run: the full suites, the Chrome and Edge connected proof, the a11y gate.
- Presentation fidelity scope: seeded local preview (two running, one stalled, three waiting, a hold note; no scheduler loop, no provider) viewed at 1440 px, 800 px and 375 px, and one run page for the breadcrumb. The empty and unreadable states are covered by tests only. `StatusBadge` gains an optional `label`; no other design-system component changed.
- After merging main at RBOT-HTML `be953752` (per-pathway caps): the run list takes no cap, as main's snapshot and single-run reply no longer do. Inherited findings fixed on the owner's instruction: the ESLint error at `web/src/ConnectedLoadBoundary.tsx:22` (braces only) and Prettier on `web/.fallowrc.json` and `web/knip.json`; ESLint and Prettier now pass on all of `web`. The browser preview was not repeated after the merge. Merged without an independent review, changed-update sweep or whole-branch adversarial review (owner: no sub-agents).

## 2026-11-16 — RBOT-HTML main update to be953752

- Merged RBOT-HTML `be953752e5e6b981e24082d452637c5120d63825` (remote main verified again before completion). Native `src/`, `apps/issuer-library`, Python manifest/lock/version exactly match that revision; React manifest/lock unchanged. Imported methodology, PDF Form-XObject extraction, pathway tiers and retained script-check evidence without replacing the Credit OS frontend or performance fixes.
- Adapted the bridge and React intake to native per-pathway caps (Lite USD 15, Full 25, Deep 40, purpose pathways 20), exact `X-Shown-Cap` summary/submit acknowledgements, and native historical-cap display. Deep shows 20 analytical modules; native delivery adds CP-MODEL. Changing pathway invalidates review; pending review locks navigation; absent/malformed/mismatched caps block submission.
- Evidence conditionally shows native retained script checks with exact outcomes, counts, reasons, script hashes and accepted-response attribution. Earnings-update Overview can use CP-1B only after higher-priority leads; it is labelled Earnings view and cannot supply a committee action. Source serving reuses the new PDF extractor while preserving original bytes.
- Confidence review, ranked: (1) changed scheduler/summary contracts could break startup or acknowledge the wrong cap — traced bridge callers, repaired removed global-cap arguments, checked frozen approval, mismatch, missing-cap, concurrent navigation and retry cases; (2) historical caps or optional-module selection could drift — native tier regressions and independent Astra review pass; (3) retained script checks could imply a different attempt or alter null/zero — adapter uses native accepted records and exact values, reader tests and browser/native comparisons pass; (4) earnings fallback/helper extraction could change qualifications or trace identity — scoped fallback tests, explicit action/maturity boundary cases and final Astra comparison pass; (5) PDF extraction could change original downloads — form-body/page and exact-byte regression passes; (6) performance/offline/data fidelity could regress — lazy/scoped-fetch browser assertions, dual build and exact retained-Caesars data equality pass. Initial browser attempts exposed test-helper argument/navigation omissions; repaired the script and reran both from upload. No confirmed defect remains in this scope.
- Astra backend, intake and report reviewers approve; final helper recheck confirms exact paragraph order, qualifications, section references and trace identities. No tournaments. Presentation fidelity scope: existing Credit OS Run/report assertions in both branded browsers (desktop and selected mobile views); inspected the new Evidence Script checks desktop screenshot. Caesars remains a retained qualified Test preview, not new live analysis; no script checks invented for its historical snapshot.
- Tests: 3,067 focused native Python passes (known failures/irrelevant live cases deselected), 565 native JavaScript passes, 72 bridge passes, 186 connected React passes across 24 files with 84.9% line coverage; final test-fixture type correction followed by TypeScript and 10 reader tests passing. Changed-file ESLint/Prettier, TypeScript, fresh offline install, dual build and existing Chrome file:// gates pass. Python quality gate: zero findings. Fallow against `63d7edd`: PASS, zero introduced and six inherited findings; no suppression changes.
- Frozen runtime/build tree `3d727f069ea7dccb4a8635f11b553930ca5de0e0`; passing browser-proof tree `9d545b0fbb89099bd8be3a3daa4161592748be3b` differs in test scripts only (subsequent test-only Paragraph end fields typechecked). Chrome 157.0.8103.78 run `20261116-085154-01` and Edge 157.0.4341.60 run `20261116-085227-01` each pass all 38 synthetic upload-to-finished-report checks on macOS. Artifacts: `proof-artifacts/run-JGyo4g/proof.json`; synthetic responses retained, no real provider invoked.
- Updated Caesars preview: `http://127.0.0.1:58345/report/20261115-114658-01#overview`, isolated read-only copy. Run records, outputs, handoffs, models and chips exactly equal the preceding preview. Native merge verification records remain in the upstream parent history; oldest local entries trimmed to stay under 1,000 lines. No predecessor/historical-run mutation, Signal work, paid execution or ZIP creation/publication. Actual Windows work-PC Chrome and Edge proof remains outstanding; ZIP stays held.

## 2026-11-16 — Three connected-interface performance fixes

- Removed whole-publication enrichment from original-source requests: each request verifies the requested file's publication/workflow identity and current bytes; raw file downloads skip page extraction. Library uses a compact index; a report fetch scopes heavy content to its run and a valid Changes dependency while retaining history/ambiguity metadata. Added negotiated gzip and immutable caching for hashed connected assets.
- Separate connected build lazily loads Run, activity, library and report routes; the offline classic-script build still works from file://. Credit OS components/styles, native analytical code and dependency versions remain unchanged. The 628.4 KB report-reader chunk is deferred on Run; 227.4 KB is the bootstrap file alone, not total initial JavaScript.
- Local retained-Caesars measurements (three requests, medians; not Web Vitals): library 2,933,438 to 18,654 decoded bytes (2,318 gzip), 357.5 to 12.9 ms; unchanged 12,160-byte source page 353.8 to 13.7 ms. Final frozen preview confirms compact sizes and exact equality of retained run records, outputs, handoffs, models and chips against the previous preview. Measurements: `proof-artifacts/run-HAyUPU/performance-measurements.json`.
- Confidence review, ranked: (1) scoped data could alter financial history/CP-8 admission — Astra reproduced duplicate-folder ambiguity loss and null-current crashes; repaired and independently rechecked, with wrong-issuer/unfinished/missing-prior cases; (2) direct source access could weaken identity checks — request-time hash/tamper, admission, traversal and page tests pass; (3) split builds could break offline use or error recovery — dual build/file gates pass; real reload button unit-tested (real failed-chunk injection not tested); (4) extraction could change reader data/design — retained-data equality, component and browser checks pass; (5) search after filter changes — reproduced stale event.currentTarget crash, capture value synchronously, component and both browser regressions pass; (6) gzip/cache/query boundaries — quality-value, malformed/duplicate query, gzip round-trip/Vary/cache tests pass. No remaining confirmed defect in this scope.
- Astra backend final recheck approves admission, source verification, scoped snapshots and CP-8 guards; Astra UI final review approves repeated search, Overview design and exact trace excerpt/warning/page identity/focus. Forecast/Evidence/Run desktop/mobile fidelity sampled on the preceding implementation build; both final branded proofs cover the synthetic equivalents. Actual Caesars remains a retained, qualified Test preview, not a new analytical run.
- Gates: 51 focused Python tests; 63 frontend tests across seven files; TypeScript/build, changed-file ESLint and Chrome file:// gates pass. Python quality gate: zero findings. Fallow against `c519093`: PASS, zero introduced/inherited findings. No tournaments.
- Fresh offline install and dual build, runtime tree `7662375c19bd55eb4082ba72bdd0ef79f81f0d50`; final proof tree `db9b41075f6849450fa7e918e389ca895fefbf8e` differs only in the browser script. Corrected test-only URL serialization, the paired fixture's scoped-route interception and additional-page creation after initial proof failures. Final Chrome 157.0.8103.78 run `20261116-044325-01` and Edge 157.0.4341.60 run `20261116-044350-01` each pass all 37 upload-to-finished-report checks on macOS, including source bytes/pages, repeated searches, scoped fetches and deferred route bundles. Evidence: `proof-artifacts/run-HAyUPU/proof.json`.
- Caesars opened at `http://127.0.0.1:58344/report/20261115-114658-01#overview` from the frozen runtime/build, in an isolated read-only copy. Native backend/Python pins match RBOT-HTML `256101a`; React dependencies unchanged. No paid providers, Signal work, historical-run mutation or ZIP creation/publication. Actual Windows work-PC Chrome and Edge proof remains outstanding; ZIP stays held. Trimmed oldest entries to keep this record under 1,000 lines; git history retains them.

## 2026-11-16 — Caesars original source files and citation links

- Root causes: the retained preview copied deliveries/library but omitted workflow pins and inputs; native inventory parsing assumed key/file columns while Caesars CP-0 uses Original/sha256; raw TXT input pages were unavailable to the JSONL-only citation reader. Added a React-side bridge using verified workflow identities, original input bytes and RBOT's native page extraction, without changing native code or saved handoffs.
- Evidence Sources, cited rows and the trace drawer now open the verified original file and available cited page/range. Actual extracted text alone is labelled as a source excerpt. Native unmatched-quote/value findings remain explicit; page labels state that supplied-source pagination can differ from printed filings. Existing Credit OS layout/components remain.
- Retained Caesars `20261115-114658-01`: 18 original files match recorded SHA-256 across retained inputs/source pack; all 18 HTTP file responses and first pages checked exactly. 1,049 page references now link; 819 missing-text and 230 missing-inventory warnings resolved. Remaining recorded limitations: 706 rows without a page/register citation, 106 Not Supplied, 29 pages without a source key, and 156 unmatched quote/value checks. This proves connectivity to retained inputs (some extracts), not new source authentication or analytical correctness.
- Confidence review, ranked: (1) wrong source or hidden tampering — require published filename/hash plus workflow identity, rehash bytes on access, reject traversal/symlinks and unavailable/withheld runs; (2) lost genuine warnings/legacy evidence — reproduced and fixed missing-file identity loss and no-workflow chip replacement, retaining native reasons; (3) misleading excerpts/page identity — fixed claim-as-excerpt fallback, URL punctuation encoding and ambiguous page labels, using native page extraction unchanged; (4) historical mutation — reproduced copied data.js symlink overwrite in temporary fixtures, replaced directory entry before exclusive creation, regression verifies original target untouched; (5) preview startup — shortened temporary prefix after native 80-character root limit refused startup, then successfully served an isolated read-only copy. No outstanding defect in this scope.
- Astra source reviewer independently confirms hash/identity/failure behaviour and symlink preservation; Astra UI reviewer confirms actual source text, pages 1–2, mismatch warning, drawer focus/Escape and readable links at 390px. No remaining blockers in either review. No tournaments.
- Targeted verification: 36 Python tests pass; 62 frontend tests across five files pass; TypeScript, changed-file ESLint and build pass. Python quality gate: zero findings. Fallow against `fbcc5ac`: PASS, zero introduced findings, two inherited ReportContent findings (unchanged ReportFindings complexity and duplication).
- Fresh offline source build from tree `585f57dcf86dfaf5f8ce2bc67629dcf2c5394061`: Chrome 157.0.8103.78 `20261116-041031-01` and Edge 157.0.4341.60 `20261116-041049-01` each pass 34 synthetic upload-to-finished-report checks on macOS, including actual source file/page opening. Evidence: `proof-artifacts/run-YDopBV/proof.json` and `caesars-sources.json`. Subsequent runtime change only shortens the standalone retained-preview temporary-directory prefix, verified by successful startup and HTTP read-only checks.
- Presentation fidelity scope: actual Caesars Sources, CP-1 cited excerpts and trace drawer sampled in browser, including 390px; Credit OS styling preserved. User preview open at `http://127.0.0.1:58342/report/20261115-114658-01#evidence/sources`, using tested web assets. Test-preview/admission qualification retained; original report untouched. POST/DELETE blocked by read-only mode.
- RBOT-HTML backend/Python pins match `256101a`; React dependencies unchanged. No paid providers, Signal work, ZIP creation, push or publication. Real Windows work-PC Chrome and Edge proof is still outstanding; ZIP remains held.

## 2026-11-16 — Five remaining Fallow findings

- Verified all four clone IDs with their `fallow dupes --trace` commands and Evidence with `fallow inspect` before edits. Shared chart name/shape validation, positional keys and period data preparation; shared exact evidence section-line membership; split Evidence routing, navigation, summary, sources and handoffs into bounded components. No suppressions.
- Audit then exposed the pre-existing comparison-row complexity; verified its inspect command and extracted unchanged comparability, period and difference predicates. Final audit against `fbcc5ac`: PASS, zero introduced and zero inherited findings.
- Confidence review, ranked: (1) financial semantics — Astra independently checked 19,440 before/after cases plus literal missing/zero/currency/precision/revision expectations; implementer checked another 10,000; (2) chart data/key/validation fidelity — independent Astra frozen-input assertions cover sparse cells, zero/null, signed values, hostile/duplicate names, order and exact errors; (3) evidence identity/routing/admission — retained exact match predicate, module/source filters, alternate links and stale-address rejection, covered by regression tests and parent diff review. No outstanding defect in this scope.
- Targeted tests pass: chart subset 96; Evidence/publishedReport/design subset 32; connected app/design/Changes/legacy visuals/Forecast subset 58 (overlapping design tests); final Evidence rerun 11/11. TypeScript, changed-file ESLint/Prettier and Python quality gate pass (zero findings).
- Fresh offline install/build from source tree `34510a2dd75d3ce8154534329c3f49525a0d7b02`; Chrome 157.0.8103.78 `20261116-035824-01` and Edge 157.0.4341.60 `20261116-035841-01` each pass all 33 synthetic upload-to-finished-report checks on macOS. Evidence: `proof-artifacts/run-vuQ8ku/proof.json`. Final commit additionally tightens one test-only excluded-module matcher; runtime source matches this tested tree.
- Presentation fidelity scope: unchanged classes/markup/labels and chart data checked by component tests and branded browser proof. Opened retained Caesars in the app at `http://127.0.0.1:58341/report/20261115-114658-01#evidence/summary`; 12 handoffs/18 sources; Financial foundation opens the exact saved CP-1 revision. Observed Credit OS layout and Evidence controls preserved. This retained preview still reports missing source text/inventory entries; opening its handoff does not establish complete underlying source availability.
- RBOT-HTML backend and pins remain identical to `256101a`; React dependencies unchanged. No providers, Signal, tournaments, ZIP build or publication. Actual Windows work-PC Chrome and Edge proof remains outstanding; ZIP stays held.

## 2026-11-16 — Evidence gap complexity repair

- Verified the app finding before editing with `fallow inspect --file src/pages/connected/report/Evidence.tsx --format json`: `gapRecords` cyclomatic 15 / cognitive 24. Extracted table title selection and row conversion; retained block filters and per-row appending. No suppressions or design changes.
- The subsequent audit exposed `checkReadingLayout` CRAP 42 (cyclomatic 6, estimated coverage absent). Verified with its `fallow inspect` command before separating null/dimension assertions; preserved exact `===` semantics. This browser check executes in both branded proofs.
- Confidence review, ranked: (1) lost gap/source identity — Astra compared 3,600 adversarial inputs with the original, exact equality; (2) title fallback, no-gap and ledger exclusions, sparse/zero details and order — nine Evidence tests pass, including two independent boundary regressions; (3) large-table append — reproduced spread argument-limit failure, replaced with individual appends, Astra verified actual helpers with 200,000 rows; (4) assertion semantics — restored original handling of negative zero. No outstanding Astra finding.
- 38 targeted tests pass; final Evidence subset 9/9 passes. TypeScript, changed-file ESLint/Prettier and Python quality gate pass (zero findings). Final Fallow audit against `fbcc5ac`: PASS, zero introduced findings, five inherited findings remain.
- Final source tree `e26d7fe86f3bf6d9a480aa4907c7b1dae1a5cc10`; fresh build passes all 33 upload-to-finished-report checks in each browser on macOS: Chrome 157.0.8103.78 (`20261116-035417-01`) and Edge 157.0.4341.60 (`20261116-035435-01`). Evidence: `proof-artifacts/run-9vzN45/proof.json`. This is synthetic source-snapshot proof, not a Windows or ZIP proof.
- Fidelity scope: behavior-preserving Evidence parser and test assertions only; no layout, component, chart, number, qualification or backend edits. Native backend and pins match RBOT-HTML `256101a`; React dependencies unchanged. No providers, tournaments, Signal changes or ZIP build/publication. Windows work-PC Chrome and Edge proof remains required.
- Trimmed the oldest verification entry to keep this record below 1,000 lines; git history retains it.

## 2026-11-16 — Financial qualifications and five reading-design fixes

- Forecast preserves all recorded labels, dates, units and values while placing
  exact base-period qualifications beside uniquely matched period headers and
  exact interest-basis qualifications in the Interest row. Ambiguous/unrecognised
  period tokens keep a visible table-level note; no analytical relabelling.
- Historical chart qualifications now follow their owning chart, with paragraph
  traces distinct from table traces. Ownership requires one matching section and
  one table; source-bearing passages point to Evidence instead of leaking references.
- Compact model tables hide only wholly unavailable/unmodelled rows without exact
  operands, retain zeros/unknown states, and expand every missing-data reason.
  Entirely unavailable tables remain visible. Forecast section jumps precede scope
  and preserve keyboard focus; Evidence's duplicate preview notice is removed.
- Under 768px the incumbent rail becomes bottom navigation and reading width grows;
  narrow source controls are 44px, with matching text clearance. Cash charts use a
  keyboard-scrollable minimum plot width under 480px to separate period labels.
  Shared line rendering was extracted without changing points/labels/styles.
- Two Astra confidence reviews ranked (1) qualification ownership/financial fidelity,
  (2) missing versus zero, (3) source identity, (4) responsive width/trace overlap,
  (5) navigation/focus/admission. Repaired partial-token association, all-missing
  empty tables and mobile case/qualification text clearance; targeted regressions
  cover them. Reviewers report no outstanding issue in the inspected scope.
- 177 focused tests across 15 files pass; final Forecast/table subset 10/10 passes.
  TypeScript, changed-file ESLint/Prettier and Python quality gate pass. Fallow
  retains five inherited findings and labels `gapRecords` as introduced; its exact
  function is unchanged from `fbcc5ac` (SHA-256
  `554ac0b77d38e6a36775e67ed4d9b749f1965bdc38194b16f2a1cc21baf83753`).
  No suppressions. Newly introduced chart duplication and changed-function
  complexity were resolved; unchanged gap parsing was not refactored for this task.
- Fresh offline install/build; source tree
  `01e1525e6735cf738bf1eb2591ac546b1f270894`. Chrome 157.0.8103.78 run
  `20261116-033501-01` and Edge 157.0.4341.60 run `20261116-033518-01` each pass
  all 33 synthetic upload-to-report checks on macOS. Added browser checks cover
  Forecast jumps, 390px main width, 44px source targets and nonoverlapping period
  labels. Evidence: `proof-artifacts/run-ySH02V/proof.json` (source snapshot, no ZIP).
- Fidelity check: Astra inspected actual retained Caesars at 1728x996 and 390x844;
  Credit OS palette/type/icon language preserved, qualifications visible locally,
  one Evidence notice, working keyboard jumps/trace dismissal/focus restoration,
  mobile chart scroll and separated labels. Judgement card height about 334px
  versus the reviewed ~650px. Viewport restored and reviewer tab closed.
- User preview opened at port 58340, actual run `20261115-114658-01`; its assets
  exactly match the tested build. CP-1 and CP-2G downloads retain their original
  SHA-256 identities. Preview remains read-only and retains its admission notice.
- Backend/Python pins match RBOT-HTML `256101a`; React dependencies unchanged.
  No providers, Signal work or tournaments. ZIP not built/published; both browsers
  still require acceptance on the actual Windows work PC.

## 2026-11-16 — Remaining Modules and ReportReader findings resolved

- Verified both findings using `fallow inspect --file ... --format json` before
  editing. Modules now separates output selection, figures, findings and saved
  outputs. ReportReader separates its header, badges and status messages while
  retaining its hooks, admission lookup and route handling. No suppressions.
- Two Astra reviewers used confidence-review. Ranked doubts: (1) unpublished-run
  admission and preview truthfulness, (2) retained-output selection/source identity,
  (3) null/loading/error boundaries, (4) metrics and transformed figure table lines,
  (5) navigation remounts, original workspace keys and title fallbacks. Compared
  source and consumers with `71d55d4`; no defects found. Added adversarial tests for
  catalogue-only rejection, preview with empty reason, null/error/title states,
  default/selected/singleton/ambiguous outputs, invalid output addresses and exact
  alternate evidence links. Calendar fixture now checks a distinct workspace key.
- 72 focused tests across ten files pass. TypeScript, changed-file ESLint/Prettier
  and Python quality gate pass. Fallow audit against `dd765b5`: PASS, zero introduced
  and zero inherited findings. Backend/Python pins match RBOT-HTML `256101a`;
  React dependency files unchanged. No providers, Signal work or tournaments.
- Clean offline install/build, source tree
  `9be6488b01f37c6b859ad39db4c02ab527d9c334`. Chrome 157.0.8103.78 run
  `20261116-031733-01` and Edge 157.0.4341.60 run `20261116-031749-01` each pass
  all 32 synthetic upload-to-report checks on macOS, including module charts,
  mobile navigation, report history and evidence traces. Artifacts:
  `proof-artifacts/run-cxcHo3/proof.json`. Source-snapshot proof, not ZIP proof.
- Fidelity scope: compiled CSS byte-identical to the prior build; Astra confirmed
  unchanged markup/order, and browser checks cover chart values and source links.
  Actual retained Caesars Forecast opened at port 58339 with its original Test
  preview/admission qualification; CP-2G download SHA-256 unchanged.
- ZIP not built or published. Chrome and Edge acceptance on the Windows work PC
  remains pending; macOS passes do not satisfy that gate.

## 2026-11-16 — Five branch-introduced Fallow findings resolved

- Verified all five with their `fallow inspect --file ... --format json` commands
  before editing. Extracted calendar validation/row mapping, forecast display and
  unique-row lookup, and comparison rendering; simplified the unique-JSON lookup.
  No suppressions, threshold changes, backend changes or dependency changes.
- Fallow audit against `dd765b5`: PASS, zero introduced, two inherited findings
  (`Modules` and `ReportReader`). RBOT-HTML and pins remain at `256101a`.
- Confidence review with Astra ranked (1) calendar validation/order/source identity,
  (2) unique forecast-input provenance, (3) missing/zero/duplicate chart cells and
  caption layout, (4) comparison admission, (5) portfolio-provider scope. Traced
  callers and previous code. Astra caught an empty-units caption regression;
  normalized units outside the chart callback and added a regression. Other
  semantics verified equivalent, including empty comparison headings being absent.
- 71 focused tests pass across eight files; new guards cover ambiguous JSON,
  invalid/duplicate event source lines and missing chart units. TypeScript,
  changed-file ESLint/Prettier and changed-code quality gate pass (zero findings).
- Fresh offline install and production build; source tree
  `55f78cdd1d61e13e0dba8889e82fd63d1d785212`. Branded Chrome 157.0.8103.78
  (`20261116-031230-01`) and Edge 157.0.4341.60 (`20261116-031246-01`) each pass
  all 32 synthetic checks on macOS. Evidence: `proof-artifacts/run-rzGwkj/proof.json`.
  This is source-snapshot proof, not ZIP or Windows acceptance.
- Fidelity scope: unchanged compiled CSS (SHA-256
  `914e40937b01bfc5efe4ecad2f6000924dff284e2fca629f897cb6831afd08f0`), browser
  chart/table/trace assertions and actual Caesars Forecast opened at port 58338.
  Retained CP-2G bytes match the prior SHA-256; preview stays read-only with its
  Test preview/admission qualification. No providers, Signal work or tournaments.
- ZIP not built or published; Chrome and Edge work-PC acceptance remains pending.

## 2026-11-16 — Five Caesars design critique priorities implemented

- Preserved Credit OS React components and RBOT-HTML source/Python pins at
  `256101a`; React dependencies unchanged. No providers, Signal work or tournaments.
- Forecast now promotes exact reference-free scope/basis sentences before case
  selection, with traces and the complete original notes retained below. Case
  cards say Forecast cases; descriptions come from retained notes or explicit gaps.
  Comparison keeps every case, highlights the selection and retains row traces;
  the chart and its table still follow the selected case, including missing values.
- Forecast axes use readable labels without changing series/table values; close
  ticks fall back to exact labels rather than merge through display rounding.
- Dates to watch uses the run as-of date, excludes Historical events, retains
  recorded precision/status/source identity and qualifies overlapping partial dates.
  Narrow Modules uses a native selector and collapsible section jump; desktop
  navigation is preserved, with complementary 1000/1001px visibility boundaries.
- Confidence review ranked (1) analytical fidelity/reference leakage, (2) case
  selection versus comparison, (3) date/status ambiguity, (4) keyboard/navigation
  boundaries, (5) rounded values/missing versus zero. Tests and Astra reviewers
  confirmed and repaired false absence wording, missing-case comparison vanishing,
  historical partial dates appearing upcoming, first-section activation failing,
  and the breakpoint overlap. Numeric inputs and retained handoffs were untouched.
- Two independent Astra reviewers rereviewed their fixes and inspected actual
  Caesars in Chrome. Forecast: four rows, selected chart, readable axes, exact
  464.86/647.95/183.09 bridge, trace to handoff line 310. Overview: watch dates begin
  November 2026. At 390px the module selector and first-section jump work; all
  temporary review tabs closed and viewport restored. This is scoped fidelity
  review, not analytical clearance or Windows proof.
- 61 focused tests pass, plus TypeScript, changed-file ESLint/Prettier and Python
  quality gate (zero findings). Fallow still reports five 'new' and two inherited
  complexity warnings: AST comparison shows four flagged new functions unchanged
  from HEAD and the fifth differs only in its axis formatter call, with no added
  branching. Existing complexity risks are retained; no suppressions were added.
- Fresh offline dependency install and production build; staged production tree
  `fb91f1e5e7eb01f403a13ba30ffd5ca19d040d14`. Both branded browsers passed all 32
  synthetic upload-to-report checks on macOS: Chrome 157.0.8103.78 run
  `20261116-030448-01`, Edge 157.0.4341.60 run `20261116-030505-01`.
  Evidence: `proof-artifacts/run-4l6Qel/proof.json`. Added checks cover all-case
  comparison, early scope, compact navigation and breakpoint/first-section behavior.
- Updated read-only actual Caesars preview is at port 58337, run
  `20261115-114658-01`; original Test preview/admission qualification remains.
  ZIP was not rebuilt or published. Chrome and Edge work-PC acceptance is pending.

## 2026-11-16 — Four remaining Fallow findings resolved

- Split Forecast case cards and assumptions into components; split browser intake
  checks and browser execution from resource ownership. Reclassified the Vite
  Tailwind plugin as a development dependency after tracing its sole import to
  vite.config.ts. All locked versions, resolutions and integrity values unchanged.
- Fallow audit against `b3a607f`: PASS, zero introduced or inherited findings.
  No suppressions or threshold changes. Native RBOT-HTML and Python pins still
  match `256101a`. No provider execution, Signal work or tournaments.
- Confidence review, ranked: (1) weakened proof or submission races — all 167
  assertion/wait expressions preserved by AST comparison; response listeners
  remain before actions, cancellation and exactly-one-submit pass in both browsers;
  (2) case state and source identity — state remains in Forecast, exact row and
  hash lookup unchanged, 15 focused boundary/Forecast tests pass;
  (3) build dependency classification — clean offline npm ci and production build
  pass with every package version unchanged; (4) design drift — all Forecast
  class expressions and compiled CSS unchanged, desktop/mobile intake and debt
  screenshots pixel-identical to the preceding proof, revenue chart visually checked.
  Verified fine within this scope; Windows work-PC execution remains open.
- TypeScript, ESLint, Prettier and changed-code quality gate pass (zero findings).
  Built source tree `0fb3973faa8494c2b51093afbdbe71b20f1dfb36` in an isolated
  directory with a fresh dependency install. Chrome 157.0.8103.78 run
  `20261116-024417-01` and Edge 157.0.4341.60 run `20261116-024434-01` each passed
  all 30 synthetic checks on macOS. Proof: `proof-artifacts/run-D9auAO/proof.json`.
- This is source-snapshot proof, not Windows or archive acceptance. The held ZIP
  was not regenerated or published; release still requires Chrome and Edge passes
  on the Windows work PC. Oldest complete entries trimmed; git retains them.

## 2026-11-16 — Two requested Fallow findings resolved

- Verified both findings with `fallow inspect --file` for
  `scripts/connected-proof.mjs` and `src/pages/connected/report/Forecast.tsx`.
  Separated the forecast's recorded bridge validation from its rendering;
  split the browser proof into debt, portfolio, forecast and Evidence checks.
  No suppression or threshold change. Fallow audit against `b3a607f` PASS:
  zero introduced findings, four inherited findings remain outside this request.
- Confidence review checked zero versus missing values, unit identity,
  duplicate or absent rows, nonfinite values, source line identity and proof
  ordering. Nine new rendering cases plus existing Forecast tests pass (15).
  AST comparison confirms all 45 assertions/waits from the original checkCharts
  remain exact. TypeScript, ESLint, Prettier and changed-code quality gate pass.
- Built staged source tree `ed759e0477d3c685619568dc160b7631368b0dbe` in an isolated
  directory using installed pinned dependencies. Chrome 157.0.8103.78 run
  `20261116-023941-01` and Edge 157.0.4341.60 run `20261116-023955-01` each passed
  all 30 synthetic checks on macOS. Proof: `proof-artifacts/run-z6RLzy/proof.json`.
  This is source-snapshot proof; the previously held ZIP was not regenerated.
- RBOT-HTML and pins still match `256101a`; React lock unchanged. Windows work
  PC acceptance remains pending. No ZIP publication, Signal work or tournaments.

## 2026-11-16 — Connected admission, durable traces and Credit OS design

- Scope: React reader and additive connected adapter only. Native RBOT-HTML
  source, issuer-library engine and Python pins still match `256101a`; React
  dependency lock remains unchanged. No provider execution, Signal work,
  tournaments or publication.
- Admission now applies to the snapshot consumed by the Library and report
  reader, the report listing, forecast artifacts and portfolio attestation.
  Managed running/queued/failed/capped/rejected/interrupted reports stay out;
  native retained reports without scheduler records remain available, including
  folders containing spaces and Unicode. Source publications are not changed.
- Evidence links bind output identity, SHA-256 revision and exact paragraph,
  table row or section line. Reordering cannot select another output. Old ordinal
  links and missing revisions/rows show an unavailable state. Overview, Changes,
  Modules, Forecast, calendar and Evidence use the same resolver.
- Credit OS fidelity scope: original React components and Claude HTML exports
  at `450f6406`, Library filters and Cards/List, Overview dates with traces,
  Changes Cards/Table, Forecast case cards and shared chart/table selection,
  source-control hover, existing Evidence navigation and expandable Record.
  Gaps counts actual saved gap rows, preserves effects and delivered severity,
  and filters explicit None records. Module-scoped counts and empty states agree.
- Confidence review ranked identity/reordering, admission timing, exact data
  preservation, null/zero budget display, filters and case-label matching.
  Reproduced and repaired empty-result controls disappearing, deferred event
  reads, Gap ID being mistaken for Gap, unknown severity being discarded, and
  Downside shock selection differing from its raw Downside case column label.
  Budget totals use one retained reservation snapshot and exact decimal sums;
  unreadable journals remain unavailable, holds are separate from settled charges.
  Native historical admission and invalidation of unversioned bookmarks are
  deliberate. Browser/platform scope and retained source limitations stay explicit.
- Checks before browser proof: 74 targeted Python tests, 1,425 frontend tests,
  TypeScript, ESLint, formatting and the changed-code quality gate passed.
  Fallow retains baseline findings plus complexity/duplication warnings in
  touched code; the new unused export was removed. Browser results follow below.
- Browser preparation found and fixed a duplicated-label locator in Record.
  Visual inspection also required an explicit label for unrecorded model units;
  the native synthetic model leaves units null, and the UI does not infer them.
- Final clean-extraction browser proof: Chrome 157.0.8103.78 completed
  `20261116-023525-01`; Edge 157.0.4341.60 completed `20261116-023541-01`.
  Both passed all 30 recorded checks on macOS, including source hover with
  Show sources off, Base/Downside selection (independent 315/252 fixture values),
  exact source reload, output reorder and rejection of an old ordinal link.
  Paired Changes uses an explicitly separate fixture, not a second analytical run.
  The final null-unit change also passed 15 focused frontend tests.
- Candidate source `ab6641058546f8dc9ccde1054a44ce9b0beb62d7`; SHA-256
  `b0faadd99b3801d4c7ee922c0553b566196bd1c189cfdacc9913c43f7a783ce1`.
  Proof retained at `proof-artifacts/run-EkSYga/proof.json`; logs and screenshots
  are beside it. Preview run `20261116-023313-01` is synthetic and its 16 compiled
  files match the final candidate. Opened the Forecast view in the app preview.
  Browser retries corrected only test selectors and the paired fixture's digest
  lookup; no native backend or analytical output changed.
- The Windows release gate remains open. Keep the ZIP local until Chrome and
  Edge both pass on the actual Windows work PC using `docs/react-workflow.md`.

## 2026-11-15 — Evidence Record and report traces

- Viewed the Record tab with the existing Evidence tabs and module filter.
  Run totals use RBOT-HTML's scheduler timestamps and spend journal. Module
  timings, calls, instructions and hashes use the published record. Synthetic
  adapter responses carry an explicit label, and unavailable totals remain
  unavailable in retained reports without a scheduler record.
- Verified the Overview passage, a specific Modules debt chart row, and the
  Forecast model's pinned input block. A separate paired-run fixture checked
  the Changes measure link and both maturity schedule sources. It confirmed
  that a recorded zero opens the earlier row and that the current source
  excludes the other maturity rows. The upload-to-report proof used actual
  RBOT-HTML publication of the synthetic run. Confidence review checked
  ambiguous row bindings, exact amounts and the selected delivery's handoff.
- Fixed two browser proof issues. The debt locator now searches within the
  chosen row, and the download check waits until Summary has switched tabs
  and cleared the module filter.
- Backend and pins match `256101a`. The quality gate, 68 targeted Python tests,
  1,408 web tests, production build, lint and formatting passed.
- Candidate `f495920049e6691bb00538ee8802c62eb82290a4` SHA-256
  `228292e206f850acc376db101f5650a887d1018ef04df4c7b4d567a15cbf3c7d`.
  Chrome 157.0.8103.78 (`20261115-223326-01`) and Edge 157.0.4341.60
  (`20261115-223341-01`) each passed 27 checks from a clean macOS extraction.
  The preview build's files match the candidate and the preview run is
  `20261115-222925-01`. The ZIP stays local pending both work PC passes.

## 2026-11-15 — Credit OS Run start and Run activity exports

- Compared both screens with `Run start.dc.html` and `Run activity.dc.html` from
  Credit OS design commit `450f6406e25d26e53cf8af87956e529dc8c67bb2`. Checked
  the five-step layout, document picker, Readiness, paid warning dialog and the
  activity summary and two panels against the browser captures. The reference's
  Stop run control has no RBOT-HTML endpoint.
- Confidence review checked that opening or canceling either dialog sends no
  submission, final confirmation reuses the approved digest and uncertain retries
  reuse the exact payload. Checked recorded zero spend, a historical USD 50.00
  cap against the current USD 20.00 setting, missing event logs, private event
  fields, elapsed time and report-only delivery. The digested summary receives
  the optional analyst note as a native research question with line breaks
  converted to spaces for the native table contract.
- The RBOT-HTML backend and pins match `256101a`. Quality gate, 68 targeted
  Python tests, 172 web tests, ESLint, Prettier and production build passed.
- Candidate `f045f69768c4aed90cd23e7c9a7a41f2f7cf7af6` SHA-256
  `af69e17f9d7f306fd2fda39223bd3af2accffad899976399b59f2b7cc7b7cb75`.
  Clean macOS extraction passed Chrome 157.0.8103.78 (`20261115-214116-01`)
  and Edge 157.0.4341.60 (`20261115-214130-01`). Each passed 24 checks
  from upload through the published report. The paid dialog was exercised with
  submission blocked. The separate synthetic preview completed
  `20261115-214052-01` with USD 0.00 spent and 14 of 14 modules finished.
  The ZIP stays local pending both browsers on the Windows work PC.

## 2026-11-15 — RBOT-HTML 256101a and browser proof

- Native backend and pins match upstream `256101a`. All 16 compiled React
  files match the five-step Run candidate. The current upstream work-PC pack
  and historical handoffs retain their original bytes.
- Both browsers initially reached the new checker and failed on the old
  synthetic CP-2E headers. The corrected fixture separates the chart data
  from the native registers. Each browser verified the new completeness
  records and native agreement on USD 500m unhedged debt, 62.5% and USD 5m
  added interest. Confidence review also checked rejection of a renamed
  header and an incorrect gross-interest value. Quality, 657 targeted
  Python tests, 98 web tests and the build passed.
- Candidate `8862b08` SHA-256
  `0692c62a670c42e1af4d94c9d066920db09c4a5c53037467f6ad84574afea379`.
  Clean macOS extraction passed Chrome (`20261115-210759-01`) and Edge
  (`20261115-210811-01`). The offline preview completed
  `20261115-210806-01`. Windows work-PC proof and publication are pending.

## 2026-11-15 — Connected five-step Run intake

- Compared the connected page with the Credit OS Run mock and kit. Documents,
  Purpose, Confirm, More context and Start use the existing stepper, drop zone,
  purpose cards, details list and side Readiness. The cap comes from the native
  scheduler. At 390 px the compact stepper and uploader fit inside the form.
- Confidence review checked drag and drop, duplicate stored names, valid
  file attachment choices, back navigation, pre-approval refusal, expired
  approval and identical retries. The native summary is requested after
  More context and the final submit uses its exact answers and digest.
  Targeted web (98) and Python (27) tests, quality, lint, format and build passed.
- Candidate `cac625b`, SHA-256
  `6fb94dabd80d044070e3ced0bb1850e4df2d3bcd321b4712185ae5f27060b2a3`.
  Clean extraction passed Chrome (`20261115-210031-01`) and Edge
  (`20261115-210040-01`) on macOS. The interactive offline preview completed
  `20261115-205932-01` and serves the same compiled JS and CSS. The engine and
  pins match the existing RBOT-HTML `b8cf4ca` baseline. Upstream advanced to
  `256101a`. Windows work-PC proof and publication are pending.

## 2026-11-15 — Windows candidate and extracted-project checks

- The archive had omitted the React design system and brand tokens used by
  12 web test files. Confidence review traced those reads and verified the
  revised ZIP contains both files byte for byte. The Windows guide now records
  the retained Caesars result. Packaged application, proof inputs and pins
  match the preceding candidate. The Python quality gate and 27 targeted tests
  passed. Extracted `CI=1 npm run gates` passed locally (3,047 web tests,
  70 script tests and the file-browser checks).
- Candidate `9c9a924`, SHA-256
  `f6def4b788135bfb583e11829e339c92d90df22c1657ddcebf71bb6c2097fbfd`.
  Its verified clean extraction passed macOS Chrome (`20261115-173348-01`)
  and Edge (`20261115-173359-01`). The same build replayed all five Caesars
  views at 1,440 and 390 px, checked against the mock layouts and native data.
  The replay restored the download copy after local preview startup and verified
  the CP-2 hash, C11/C14 and 464.86 versus 647.95 US$m. Windows work-PC proof
  and publication are pending.

## 2026-11-15 — Portfolio limits from a validated fund export

- Confidence review exercised the frozen source links and pinned bytes, plot
  and table agreement, exact zero and zero maximum, report date and check
  date, absent NAV, duplicate limits, minimum limits and exposure definitions
  the holdings cannot corroborate. The targeted Python suite passed 103
  tests. The changed-code quality gate and packaged web build passed.
- The standard candidate `b532d3e` had SHA-256
  `422d6a7769214b199aa7cfdf50511f52dcfeb617866a25a4a99701efcb5febcc`.
  Its verified clean extraction passed full macOS Chrome
  (`20261115-172838-01`) and Edge (`20261115-172847-01`) proof.
- A separate synthetic upload used the same application with export fixtures
  and a matching canned CP-6 handoff. Chrome (`20261115-172851-01`) and Edge
  (`20261115-172902-01`) rendered 29.80% against 30.0% and 0.00% against
  5.00% in Modules and Forecast. The 29.90% illustrative proposal stayed in
  the original table. Both browsers showed the retained Caesars portfolio gap
  at 390 px in both views. Windows work-PC proof and publication are pending.

## 2026-11-15 — Portfolio limits from a validated workbook

- The native synthetic run uploaded and selected the test workbook. Both
  browsers showed 2.37% against 2.50% and 3.73% against 5.00% in Modules and
  Forecast. The illustrative 2.40 proposal stayed in the original table.
- Confidence review checked the frozen source hash, selected output, date,
  mismatching limit data and authored gap. CSV exports still use the source
  table. Both browsers retained the Caesars gap at 390 px in both views.
  Targeted web (97) and Python (17) tests, quality, lint, format and build passed.
- Candidate `eb1a5c1` SHA-256
  `8a2cd284e9b023c7138c973fcce0986a41067d7e9e6ad3b33c14213a8ddb3626`.
  Clean macOS extraction passed Chrome (`20261115-172022-01`) and Edge
  (`20261115-172031-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Security decisions and last trades

- Both macOS browsers checked six retained Caesars decisions, two observed
  bond prices ($93.28 and $84.94), exact yields (8.063520% and 9.318398%),
  original quote and row traces, recovery qualifications, and year-precision
  maturities. The module fit at 390 px with both tables open.
- Confidence review checked future, impossible and conflicting quote dates,
  missing locators, and unquoted rows. Targeted web (103) and Python (15)
  tests, quality, lint, format and build passed.
- Candidate `2c971bc` SHA-256
  `79b6b93b02754cbfebc493f297bf4c4be06796f411f00df26d4a5b4fa1a79080`.
  Clean macOS extraction passed Chrome (`20261115-170434-01`) and Edge
  (`20261115-170442-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Rate and currency sensitivity

- The read-only Caesars handoff's 100 bp shock adds USD 59.68 million
  annual cash interest and moves all-in cover from 1.52x to 1.48x. Both
  browsers checked the distinct calculation traces, hedge terms, FX gap and
  dated events at 390 px. The hedged cash impact remains unestablished.
- Confidence review checked mixed currencies, zero versus missing net interest,
  before/after quote alignment, and the reported shock basis. Focused web
  (85) and Python (15) tests, quality, lint, format and build passed.
- Candidate `944bc5e` SHA-256
  `8c2c14f4448697e51529a98cdd424b233417bce799aab95b998e94539b4176c6`.
  Clean macOS extraction passed Chrome (`20261115-165617-01`) and Edge
  (`20261115-165625-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Downside break points and narrow report layout

- Retained Caesars showed the first break at 17.86% EBITDA decline with
  interest held and 15.55% under the recorded cash-interest shock. Both
  browsers verified the analyst-watch qualification, unresolved break
  values, six leading and two lagging flags, and the original calculation.
- Confidence review checked share spelling, zero, reversed rank, unknown
  values, source focus, and the table header's containing block. Both
  macOS browsers saw all five report routes at 390 px. Focused web (940)
  and Python (15) tests, quality, lint, format and build passed.
- Candidate `ecef6fc` SHA-256
  `affdcadd30fece8505fabe1fc32412ce83ebc8dead650fe8f33724dd130fcaf1`.
  Clean macOS extraction passed Chrome (`20261115-164826-01`) and Edge
  (`20261115-164833-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Downside case comparison

- The retained Caesars CP-2A handoff supplied an unstressed control and three
  named shocks. Chrome and Edge matched the cover-watch result of −31.3278 USD
  million free cash flow and 1.22x all-in cover across chart, table and row trace.
  The 720 px layout passed after the trace tooltip closed. The report still has
  the same pre-existing horizontal overflow at 390 px.
- Confidence review verified reordered columns, ambiguous control and shock
  inputs, negative and zero geometry, cross-currency rejection and missing
  net debt. Focused web (80) and Python (15) tests, quality, lint and build passed.
- Candidate `203c547` SHA-256
  `697bdea7f42e71c7454d0f19ea0cb82b31ad891dead59a34658bc54c4d32a58f`.
  Clean macOS extraction passed Chrome (`20261115-164043-01`) and Edge
  (`20261115-164051-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Module readiness and monitoring records

- The retained Caesars replay in macOS Chrome and Edge showed six CP-0 readiness
  decisions (five with limitations, one conditional) and eight CP-2 triggers.
  The USD 1,502 million liquidity threshold and the unresolved covenant basis
  match the handoffs. Both browsers checked section jumps and row trace focus.
- Confidence review checked the combined and split register columns, module
  ownership, unavailable thresholds and preservation of source qualifications.
  Focused web (927) and Python (15) tests, quality, lint, format and build passed.
- Candidate `c96d161` SHA-256
  `5b0599d74f0ccbedd122c8920f8deaf225f4494eef309c7ee4c19c957cae86df`.
  Clean extraction passed macOS Chrome (`20261115-162914-01`) and Edge
  (`20261115-162922-01`). Windows work-PC proof and publication are pending.

## 2026-11-15 — Keyboard source traces for figures and calendar rows

- Both macOS browsers opened the Caesars Watchlist passage, maturity chart
  and calendar row by keyboard. Escape returned focus to the exact control
  and kept the selected Table view. Modules and Forecast opened the same maturity
  source. The Evidence route reloaded with the 3,962 US$m maturity and the original
  quarterly filing reference. The calendar table fit the 720 px viewport.
- Confidence review reproduced lost focus and the reset Table view. Checked
  same-run row identities, deduplicated exact source records, both trace dismissal
  and deep-link navigation, and chart stability during module route changes.
  Focused web (305) and Python (15) tests, quality, lint, format and build passed.
- Candidate `3104896` SHA-256
  `f30be0c81281f0b7fa560ed148e26099018c98cf08837dd6ddd39e61a1070c4b`.
  Clean extraction passed macOS Chrome (`20261115-161824-01`) and Edge
  (`20261115-161832-01`), with paired proof. Windows work-PC proof and
  publication are pending.

## 2026-11-15 — Cross-module issuer calendar

- Both macOS browsers checked 69 retained Caesars calendar rows, split into 46
  historical and 23 scheduled events. Exact dates, publication dates, precision
  and row traces matched the native handoffs. Both displayed the authored watch
  gap, opened the source by keyboard, reloaded the route and fit 720 px.
- Confidence review checked duplicate descriptors, coincident independent rows,
  retained alternatives, incompatible dates and source text placement. The
  synthetic path checked a scenario quarter and nine distinct same-day entries.
  Focused web (53) and Python (15) tests, quality, lint, format and build passed.
- Candidate `2611797` SHA-256
  `0c89b8bbe33df260a6d7e8da45d2d8a174adddb1bc97c70650eb037ac5da92ff`.
  Clean extraction passed macOS Chrome (`20261115-161013-01`) and Edge
  (`20261115-161020-01`). The paired proof contains the hash and ten screenshots.
  Windows work-PC proof and publication remain pending.

## 2026-11-15 — Paired browser proof tied to the candidate ZIP

- The Windows guide verifies the companion checksum and extracts into a fresh
  local folder. The runner records the exact archive hash, source commit, host
  platform and release, run IDs, browser versions and screenshot names together.
  Windows synthetic workspaces use the short extraction path.
- Confidence review checked invalid provenance and a failing second browser.
  The latter returned exit 1, left Chrome's individual record, and wrote no
  paired proof. The Python quality gate, focused Python tests (15), lint and
  formatting passed.
- Candidate `3712f2a`, ZIP SHA-256
  `df2e529a8ea938989646d68f62711cfe4ac85335cd39f1d0979ecb602e00a044`.
  A clean macOS extraction passed in Chrome (`20261115-160346-01`) and Edge
  (`20261115-160352-01`). Verified `proof.json` against the ZIP, the exact
  individual records and all eight screenshots. The React assets are identical
  to the preceding candidate. Windows work-PC proof and publication are pending.

## 2026-11-15 — Latest RBOT-HTML and additional chart contracts

- Verified upstream at `b8cf4ca`. The engine, native library and Python pins match it.
  The React lockfile is unchanged. [Upstream method and portfolio verification](https://github.com/EricMG13/RBOT-HTML/blob/b8cf4ca58083e1a822fb45515cd7ce63ce467834/VERIFICATION.md)
- The new native validator recognizes the supplied holdings, market data, mandate, exposure
  and constraints. Validation failed for both the May exposure date and the October
  Caesars date. React now offers the workbook selection for Full credit assessment.
- Confidence review reproduced intermittent-data chart fallback and dropped recovery
  columns. Both macOS browsers verified ten plots and one mixed-unit record from the
  native descriptor parser, with exact zero, no-quote and recovery gaps. The figures
  used synthetic handoffs. Caesars separately passed 23 retained descriptor checks.
- Restored the newly required CP-2E and CP-3 registers in the synthetic handoffs.
  Candidate source `3cb2b40` and ZIP SHA-256
  `e2c984bf061d7b571cdc20b1f0d046032abf184ae20f4becf00120db1690811c`.
  The clean extraction passed macOS Chrome (`20261115-155903-01`) and Edge
  (`20261115-155910-01`), including the signed bridge and missing funding commitment.
  Python (285), web (302), quality, typecheck, formatting and build checks passed.
  Windows work-PC proof and publication remain pending.

## 2026-11-15 — Published run charts in Forecast

- Forecast takes figures and stated gaps from the current module output. Each
  chart keeps the owning module and same handoff-line trace used in Modules.
  The collection works without a calculation model. Native chart rejections
  keep their diagnostic text in Evidence Record.
- Confidence review checked alternate output identity, non-assessable charts,
  recorded build rejections, zero versus a missing value, and cited gap text.
  No dated event lanes or relationship maps entered the Forecast collection.
- The retained Caesars case showed eight figures in Chrome and Edge on macOS.
  Both kept the portfolio gap, the FY2027 cash-basis reconciliation, and the
  2030 maturity of 3,962 US$m through the chart table and Evidence reload.
  Both layouts fit 720 px. See `proof-artifacts/caesars-forecast-run-charts/`.
- Source `47cbd8b`, ZIP SHA-256 `70d1414ead1682be2791ced60b314cca7b2abdec2350034442513ad09027c4f2`.
  Extracted-package synthetic runs passed in macOS Chrome (`20261115-154748-01`)
  and Edge (`20261115-154754-01`). Targeted web tests passed (73) and Python
  passed (15). Lint, format, typecheck, build and quality gate passed.
  Windows work-PC proof and publication are pending.

## 2026-11-15 — Portfolio evidence and all retained Caesars figures

- The pinned portfolio validator at RBOT-HTML `fc010a7` rejects the supplied two-sheet
  workbook and accepts the repository template. The dated May exposure was outside the
  October Caesars case. No supplied portfolio files were included in the ZIP.
- Confidence review reproduced a plot from numeric limits alone. The connected reader now
  shows the source table, with a validation gap, when no validated portfolio basis is
  published. Tests preserve 0.00, the exact limit and the reason when no proposal exists.
  The existing portfolio chart component passed its synthetic component checks. The
  native snapshot still has no validated portfolio basis to bind a positive PD.1 case.
- The retained Caesars replay on macOS Chrome and Edge checked eight plotted financial
  charts, six dated event lanes, seven maps, two authored gaps and the source links and
  visible table rows of all 21 figures. Records are under
  `proof-artifacts/caesars-figure-audit/`. The preview served an isolated copy with
  same-origin POST and DELETE returning 405.
- Candidate `425655b` SHA-256 `44bcf35e6bd4172a874cadbc363e60e92762be0a07af0467d755fef144e07df5`.
  The extracted ZIP passed on macOS Chrome 157.0.8103.78 (run `20261115-153911-01`)
  and Edge 157.0.4341.60 (run `20261115-153916-01`). Both checked chart-source route
  reload, the portfolio table and its qualification, and the original CP-2 file hash.
  Focused tests passed (70 web and 15 Python), with clean lint, format, build and
  quality gate results. The work-PC browser proof and ZIP publication are pending.

## 2026-11-15 — Credit OS 2 React issuer report redesign

- Upstream GitHub main was verified at RBOT-HTML `fc010a7`. Engine files and
  Python/workspace pins match that commit. React and its lockfile are preserved.
- Read-only Caesars replay, macOS Chrome 157.0.8103.78 and Edge 157.0.4341.60.
  Verified five report views, 12 retained handoffs, eight chart descriptors,
  seven event lanes, seven maps and the explicit portfolio chart gap.
- Fidelity checks used 3,962 US$m 2030 maturities, the original CP-2 hash,
  C11/C14 lineage, and 464.86 versus 647.95 US$m FY2027 forecast bases.
  Narrow report views fit at 720 px; Escape returned focus from the trace.
- Confidence review checked run and output identity, qualified forecasts, zero
  versus missing, comparable units and same-run artifact downloads. Fixed the
  driver-only downside label, lost module filter, chart qualification,
  methodology files in the package, and responsive overflow.
- The 91-figure map documents available producers and table/gap states. The
  browser evidence covers delivered cases and fixtures, not every pathway or
  a new paid run. The Caesars replay remains a labelled test preview.
- Candidate source `df9902b` and ZIP digest
  `f0e0dde8da058c9d8e739bfc7d9265e7234b7295cc4efec849a9093281912507`.
  A clean extraction passed the full 14-module synthetic workflow in macOS
  Chrome (run `20261115-152941-01`) and Edge (run `20261115-152946-01`).
  Both verified the exact handoff download. Package validation confirmed the
  14 synthetic handoffs and excluded retained issuer data and credentials.
  The extracted proof uses its own fixtures and made no provider calls.
- Paired CP-8 proof used the RBOT-HTML synthetic lite-assessment publisher with
  an earlier-format prior. macOS Chrome and Edge checked the exact −1.40x
  leverage change, the withheld cash difference, maturity gap, module
  explanation, and Evidence reload and back/forward. Targeted tests also cover
  same-period revisions, mismatched pair identity, maturity zero versus missing,
  and the distinction between missing, unreadable and first-run comparisons.
- Work-PC proof is pending. Keep the ZIP local until both Windows browsers pass.

## 2026-11-15 — Unified React frontend on RBOT-HTML

- The RBOT-HTML engine under `src/`, Python pin and lock inputs match `9d040f8`.
  The new entry point uses the same scheduler, run approval, spend cap and publisher.
- Chrome 157.0.8103.78 and Edge 157.0.4341.60 on macOS completed synthetic Northbridge
  from upload and approval to a finished report with original handoff download.
  Both showed CP-1 debt maturities, its FY2027 gap, and calculated base revenue of 1,050.
- Focused Python tests passed (369). Adapter quality gate reported zero findings.
  Report checks exposed and corrected duplicate dating, retained-folder routing,
  and event and relationship figures appearing among forecast charts.
- The synthetic proof covers one full pathway with canned model responses.
  Native Claude medium preflight could plan the pathway offline. The available
  OpenRouter credential did not supply the direct Anthropic key it requires, and
  the available sample pack lacks the evidence for a complete analytical report.
  See [React workflow](docs/react-workflow.md).

## 2026-11-15 — Restructure, second part: removals, method provenance, CP-3C and CP-6A, review (branch `claude/busy-dijkstra-bgex9m`, PR #126)

Scope is **offline only**. No provider or model was called. No model has written a CP-3C or CP-6A
handoff for the full credit assessment under the new instructions: that needs the owner's paid run.
This entry follows the one below and its checks supersede that entry's totals.

- Removed, code that no used entry point, journal registry, rule list or test reaches (5,181 lines,
  no test removed): the Deploy VII earnings owner runtime (`earnings_workflow.py` 4,604 to 689
  lines; `compose_delta` and what it reaches stay for CP-1B), `owner_workflow`'s JSON-lines
  transport and `python -m` entry, CP-OS's `navigation`/`verify_navigation`, and 85 uncalled reader
  and compute definitions in 16 module files. Checked independently: no kept top-level definition
  changed (AST, docstrings aside), no removed name is referenced, no undefined name in `src`,
  `apps` or `tools`. Launcher offline preparation, 10 runs over 7 pathways on synthetic input:
  identical before and after each stage. Kept for the owner's decision: the `OwnerWorkflow` journal
  chain (`model_testing`, `run_pathway`, `model.loop`), which a 2026-11-13 ruling and `tests/model`
  still rely on.
- Method provenance: `manifest.json` gives `source_revision` with its basis for 15 more files; 19
  files say "not recorded at import; bytes pinned by sha256" (cp-os was not reachable; two of them
  had been attributed to cp-os `b57a344` wrongly); a `project_files` list registers the three
  project method files; three unregistered CP-3B duplicates removed after a byte comparison. No
  method file's sha256 changed. `tests/test_methodology_selection.py` has no known differences left.
- Full credit assessment (ruling `docs/rulings/2026-11-15-full-assessment-cp3c-cp6a.md`):
  `credit_snapshot` adds CP-2D and CP-3C. CP-6's scope section no longer cuts T6E.4, T6E.6, T6E.7
  and T6E.11 (project file, sha256 `617c887c18dd`); CP-6's instructions gain `CP6A_BLOCK` on both
  pathways that run CP-6; `posture_issues` refuses a non-blocked CP-6 handoff without
  `### Portfolio posture` and the method's `Final Sizing Posture:` first sentence. Launcher prepared
  offline for the 7 active pathways before and after: only `credit_snapshot` (two new modules, CP-6)
  and `portfolio_decision` (CP-6) differ. Fidelity check, synthetic fixture only: default library
  build identical apart from `built_at` and the workspace path; with two hand-made SYNTHETIC
  handoffs, `tests/test_library_full_assessment_browser.py` checks CP-6's and CP-3C's pages against
  the Markdown. Prompt-size ceiling for the pathway raised to 1,483,647 characters (the owner's
  1,340,000 plus the measured addition): for the owner to confirm. Cost is estimated, not measured.
- Review: eight reviewers, one per slice, no high-severity finding. Fixed: Signal imports without
  `credit_os` and names missing brand files at start-up; three permission skips no longer call
  `os.geteuid` where it is absent (Windows); a failed pack prune no longer blocks the pack commit;
  the bundle test starts a Python on the bundle's two import roots and finds the library and engine
  inside it (Linux; not the Windows package). Gate: lines moved verbatim count as moved only in a
  file the change adds, and code that only moved is still checked with ruff's `F` rules.
- Open after review: delivery's call item reads a section named `Final Sizing Posture`, not the new
  `### Portfolio posture` (the library page shows it; settle after a paid run); `posture_issues`
  checks the first sentence only; no test pins that `OwnerWorkflow.open` refuses a retained
  JSON-lines run; no test runs `compose_delta`.
- Checks on the final head: the CI fast list 4,631 passed, 6 skipped, known failures deselected;
  node page tests 567 passed; quality gate 0 findings; `lint-imports` 3 contracts kept. GitHub Actions,
  full weekly suite on `7cba8c6` (before the removals): 5,956 passed, 1 failed, a test that read
  one packet of a two-write reply; the test now reads to the close.
- Not verified: the full weekly suite on the final head (re-run requested); `Smoke-test.ps1` and
  the Windows package on Windows; the pack workflow on GitHub Actions. Oldest two entries trimmed.

## 2026-11-15 — Restructure: packaging, shared HTTP base, import contracts, file splits (branch `claude/busy-dijkstra-bgex9m`)

Scope is **offline only**: code layout, packaging, tooling and documents. No provider or model run,
no analytical, method or presentation change. Evidence is deterministic tests plus before/after
output comparisons on synthetic data and the retained TDG fixture of 2026-11-13 (labelled below).
Each step was done on its own branch, reviewed, then merged here.

- Packaging: a uv workspace; `apps/issuer-library` is the member `issuer-library` (`credit_os`,
  `update_library`). No `sys.path` edit remains for engine/app discovery; Signal finds its brand
  files with `importlib.resources`. The engine/library dependency is circular at run time and is
  declared so. Synthetic fixture library built before and after: identical except `built_at` and
  the workspace path in `data.js`.
- HTTP: `deploy_workflow/http_base.py` holds the server, request checks, body rules and static
  serving for run start and Signal; each passes its own policy. About 550 raw requests per service,
  old code against new: byte-identical replies. Behaviour change, deliberate: run start now closes
  an HTTP/0.9 request line with no reply (it answered a bare 500 and logged a traceback); the base
  closes these for every service.
- Import direction: `deploy_vii` no longer imports `deploy_workflow`. `platform_io`, `context`,
  `financial_series`, `liquidity_series`, `restructuring_series` and `trailing_period` moved into
  `deploy_vii`; each old name is an alias of the same module object. `.importlinter` (import-linter
  2.16): engine contract with no exception; `deploy_workflow` layers, exhaustive, 5 ignored imports
  each with what removes it. The gate runs it (`--checks imports`) and scopes a file git reports as
  moved by its diff from the file it moved from.
- Splits, pure moves (every top-level block verbatim, once, in order; checked by two independent
  scripts): `owners/cpos_launch.py` 3,986 to about 1,830 lines plus `cpos_launch_methods`,
  `_tables`, `_prompts`, `_review`; `credit_os/store.py` 3,976 to 1,639 plus `source`,
  `handoff_fields`, `cashflow`, `evidence`. Launcher offline preparation, 10 runs on synthetic
  input: output trees identical. Forecast grid from the retained TDG fixture
  (`tdg_sol_high_2026_11_13`; dated evidence, one issuer) and the synthetic library: identical.
  `pin_label_forged` and its normaliser moved from `cp3d` to `owners/pins` (1,849 inputs, same output).
- Method selection: `METHODOLOGY-REVIEW.md` gains an appendix table of the 64 sent method files;
  `tests/test_methodology_selection.py` fails when it drifts from `METHODS`, `manifest.json` or the
  bytes on disk. Known differences are listed in the test; 8 deliberate drifts each failed it.
- Documents and packs: 47 unread history files removed from `docs/` (in git before `3275ff7`).
  Pack numbers follow the highest ever issued; the pack workflow prunes packs older than 14 days
  (dry run on the real folder: 0 removed, 69 kept).
- Not done, with reasons: no package merge or rename (direction was already nearly clean); no
  module framework (measured: 401 lines of structural clones in 44,452); `earnings_workflow.py` and
  `owner_workflow.py` not split (50 existing gate findings in code no test executes; branch
  `-s5b-split-workflows` kept unmerged); `cp*.py` not split (no fixture drives their submit path).
- Checks on the merged branch: CI fast list plus the new files, 5,101 passed, 6 skipped, with the
  known failures deselected; node page tests 567 passed; quality gate 0 findings (61 files, 8,469
  lines in scope); `lint-imports` 3 contracts kept. Two permission tests now skip under root, as
  their neighbour already did.
- Browser tests on the merged branch: library page 104 passed, 1 skipped; library changes 8;
  Signal page 13; model shell 7; launcher 10; changes 1. The run start page's browser tests could
  not run in this container: Chrome times out on `--dump-dom`, identically on `main` (9d040f8).
- Not verified: the full suite; the run start page in a browser; `Smoke-test.ps1` and the Windows
  package on Windows; the pack workflow and `checks.yml` on GitHub Actions;
  `test_financial_workflow.py` genuine-case tests (over 300 s). Oldest two entries trimmed from
  this file; git history keeps them.

## 2026-11-14 — Synthetic pack follow-ups and the document-key test (branch `claude/synthetic-pack-followups`, PR #124)

Scope is **offline and synthetic only**; nothing under `src/` changes. Closes the two Low items left
open by the entry below.

- Change: `tests/test_synthetic_market_data.py` recomputes every ratings-average column with its own
  code and checks index values against hand-written bounds in `schema.json`; the brand word `Linden`
  is replaced and the fixtures regenerated (rename only); new `tests/test_document_key.py`; both test
  files join the pull-request test list.
- `tests/test_document_key.py`: `guess_kind` against `document-key.json` for the 25 keyed documents
  present (35 real ones are not in this repository): 21 under the launcher's own paging, 4 synthetic
  files (07, 10, 18, 19) only under the key's paging; 13 prose cases must stay `unrecognised`.
- Withdrawn: a banner-label rule in `_wraps` (46f1f31, reverted in 39fdf96). Two reviews and the sweep
  each found prose that `main` reads as `unrecognised` and the rule read as a confident kind.
- Commands: `uv run pytest tests/test_document_key.py tests/test_synthetic_market_data.py -q`;
  `uv run pytest tests/test_cpos_launch.py -q -m "not live and not browser"` 837 passed;
  `uv run python tools/quality_gate.py` 0 findings. Exit 0 each.
- Reviews: `/sweep refactoring discover changed-update` no confirmed defect (register
  `.superpowers/sdd/pack-followups/sweep/register.md`); whole-branch `adversarial-reviewer`
  (`mx-architect`) pass, no High or Medium (`.superpowers/sdd/pack-followups/branch-review.md`).
- For the owner: the key's note pages synthetic text files at `=== PAGE ===` without the banner; the
  launcher gives one 12,000-character page with it. Either the key's paging or the classifier's
  handling of a heading line above a cover line needs a ruling; neither was changed.
- Not verified: the 35 real keyed documents; real issuer files with a heading above a mixed-case
  title; `Tamsin` against a register of real companies; a mutation tool (hand mutants only).

## 2026-11-14 — Synthetic loan market-data pack (branch `claude/synthetic-market-data-screenshots-bb52f7`, PR #121)

Scope is **offline and synthetic only**: fictional issuers, no provider call, no model response, nothing
under `src/` changed. The pack is test data in the shape of the owner's loan relative-value sheets; it
is not issuer evidence and proves no pathway.

- Change: `tools/synthetic_market_data.py` (seeded, stdlib) writes `tests/fixtures/market-data/`: 7 sector
  CSVs, 4 ratings averages, index statistics, and one issuer's `issuer-quotes.txt` and
  `issuer-context-quotes.json`. Answer key written by hand: `schema.json`.
- Connection proven: the quotes file is classified `market_quotes`; the context rows pass
  `load_context`; `cp3-no-quotes-no-talk` and `cp3d-no-quotes` fire without it and clear with it, at
  rule level and through CP-OS `prepare` (`relative_value`), with a control.
- Commands: `uv run pytest tests/test_synthetic_market_data.py -q` 28 passed; `uv run pytest
  tests/test_cpos_launch.py -q -m "not live and not browser"` 809 passed (reviewer's run);
  `uv run python tools/quality_gate.py --base 7c21c1e` 0 findings. Exit 0 each.
- Reviews: task reviews (`mx-precise`) pass; whole-branch `adversarial-reviewer` (`mx-architect`)
  pass, no High or Medium; report `.superpowers/sdd/synthetic-market-data/branch-review.md`.
- Owner ruling 2026-11-14: sector-peer sheets stay unrecognised by the run-start classifier.
- Two Low items open at merge (thin checks on derived files; the brand word `Linden`) were closed
  in PR #124, entry above.
- For the owner, predates this change: `_wraps` in `run_expectations.py` skips a cover line under a
  six-word unpunctuated heading, so `synthetic/18-market-quotes.txt` reads as `unrecognised`.
- Not verified: any model run consuming the quotes; the context-quotes route through `prepare`;
  Windows line endings; names against a register of real companies; `/sweep` discover was not run.

## 2026-11-14 — CP-1 follow-ups: a spaced prefixed currency symbol keeps the gap option; the library list marks adjusted leverage (branch `claude/cp1-spaced-prefix-advice`)
Scope: OFFLINE only; tests on synthetic handoffs and catalogue rows; no model run, no browser.
- Unit advice (`5a1ab8c`): on a USD issuer `C $m`, `A $m` and `HK $ thousands` in a CP-1 money table were told to restate under `US$m` with no gap option; they now get "use `US$m` if the figure is in the statement currency in millions, else write `Not supplied: reported in <unit>`". Test first (three cases red), reviewer probe `probe_adv7_spaced_prefix_told_to_restate.py` exit 0; `$m` on USD and `£m` on GBP keep the definite advice.
- Library list view (`1882de8`): a leverage, net leverage or cover figure on adjusted EBITDA shows `adj.` beside the number, full name in the title; a figure with no label renders as before (string pinned). Fidelity check: `static.test.cjs` only.
- Library screening (`6a4b45c`, owner: "Take them out"): for leverage, net leverage and interest cover, a figure carrying the adjusted label is treated as not recorded by the range filters and the sort (one helper, `screenFigure`); cash and undrawn unchanged; the figure is still displayed. Test first (the adjusted run passed a leverage range before). The ruling record, which had wrongly said adjusted leverage was already out of the filters, is corrected and carries the owner's words.
- Gates: `uv run pytest tests/test_cpos_cp1_check.py tests/test_cpos_launch.py tests/test_library_index.py tests/test_credit_os_catalogue.py tests/test_credit_os_store.py -q -m "not browser"` 1379 passed, 1 skipped (paid), exit 0; the node suite `checks.yml` lists, 566 passed, exit 0; `uv run python tools/quality_gate.py` exit 0, 0 findings.
- Wording (`611dfc3`, owner: "Yes, reword it"): the count line reads "Leverage recorded for N of M runs · A on adjusted EBITDA, not screened" and the hidden-rows heading "…no figure recorded, or a figure on adjusted EBITDA" when adjusted figures are present; both strings are pinned unchanged when there are none. Fidelity check: `static.test.cjs` only; node suite, the two library pytest files and the quality gate exit 0 on this commit.
Not verified: the marker and the reworded lines in a browser (the leverage columns are narrow, it may wrap under the number); `US $m` on a USD issuer has no test of its own; any model run; browser-marked tests and the full suite.

## 2026-11-13 — CP-1 runs the Deploy V method, adapted; its figures are checked in code at acceptance (branch `claude/cp1-deploy-v-method`, ruling `docs/rulings/2026-11-13-cp1-deploy-v-method-and-acceptance-check.md`)
Scope: OFFLINE only. Tests, reviewer probes (`.superpowers/sdd/cp1-method/probes/`) and the check run over two retained TDG CP-1 handoffs; no provider or model call, and no handoff written under this method exists. Built, not accepted: Forecast, charts, Overview and Changes read CP-1's tables, so a paid run (the owner's separate action) is needed before acceptance.
- Method: caos-databricks `dfff264` CP-1 skill, runbook and step file archived byte for byte (`8b9905f`), then named edits (manifest `edit` strings): workbook step and routing removed, step 13's analytical rules restated, project conventions for missing values, gaps and headings, fixed rows for the operands the check reads, debt at carrying value, reported EBITDA primary. `STEP_CONTRACTS` no longer sent. Sent files 78,387 -> about 29,000 characters; every pathway within its unchanged `INSTRUCTION_BUDGET` ceiling (tightest: short_snapshot 157,043 of 157,500).
- Check (`cpos_cp1_check.py`, through `_owned_issues`): six required tables counted by code; ratio operands readable; leverage and cover recomputed to two places; chart, net debt, statement and cash ties, two-sided; statement identities; ladder sum, principal plus reconciling items, carrying value against gross debt; one heading per read table, laid out so every reader reads the same rows. Expected values are hand-worked from the TDG FY2024 10-K figures (carrying 24,880, reported EBITDA 3,813: 6.53x, 4.88x, 3.29x), typed into the tests; hypothesis properties use an independent Fraction oracle.
- Retained handoffs (`tools/cp1_check_proof.py`): both refused, "1 of 6 required tables are present" (the Period table only); diagnostics show ladders of 24,319 and 24,806 against a stated principal of 25,068, short by 749 and 262; their leverage is on principal over adjusted EBITDA (6.01x). A CP-1 retained before the check is not resumable.
- `calculate`: `difference` and `product`, refused when 38 digits cannot hold the result exactly.
- Reviews: method task review (changes, one fix round); check: spec review, adversarial review and two adversarial re-reviews (three fix rounds, the third from a root-cause plan: five readers located a table differently, so the check now refuses the inputs they disagree on).
- Gates: `uv run pytest tests/test_cpos_cp1_check.py tests/test_cpos_launch.py tests/test_changes.py tests/test_library_index.py tests/test_handoff_loop.py -q` 1757 passed, 1 skipped (paid), exit 0; `uv run python tools/quality_gate.py` exit 0, 0 findings.
- Existing expectations changed, each forced by the method or a ruling: scored-module lists and the CP-1 method hash pin; the synthetic CP-1 chart fixture (its old leverage figures implied two EBITDAs for one year) and the Changes expectations that follow from it (2.80, 2.25, 4.00; differences -1.40, -1.60).
- Whole-branch review: "changes required" on two Mediums. The defect (a correct handoff with `FY2024` chart periods beside a dated register was refused) was fixed in a fourth round the owner approved (`8424d1b`; rows are matched by the period the Period table dates; adversarial re-review pass, 81 period-form layouts accepted, the wrong-figure variant refused in each). Lows are in the ruling.
- Second pass (coordinator's review, then two owner rulings; still OFFLINE only). Instruction size: CP-1's method text cut by 5,851 characters (`ffa7864`, `c532bb3`; review found four rules made vaguer, restored, re-review pass). Own currency (`fc954e8`, `750bb2d`): CP-1's money tables are in `US$m` for a USD issuer, else the statements' code and `m`; a GBP relabelling of the passing fixture is accepted through `_owned_issues` and the report adapter with figures labelled `GBPm` and facts in `GBP`; `GBP thousands` ties within half a unit; US$ tables on a GBP issuer, two currencies, and a `USD` register Currency are refused; the run expectation `chart-strip-usd` is removed. Adjusted-only EBITDA (`1360c21`): the leverage and interest-cover tables may be headed with the adjusted names (5.96, 4.46, 3.60; 5.82, 4.79, 2.93 accepted; adjusted headers beside any stated reported EBITDA, mixed tables and a chart off its register row refused); the Changes pack marks reported against adjusted "not comparable".
- Second-pass reviews: adversarial review of the check, "changes required" (one High: an adjusted operand with no statement row was accepted; three Mediums); task review of delivery, library and Changes, one Medium (the run-start form's non-USD warning). Fixed in `be8fc0b`; adversarial re-review closed all five and found one Medium the fix opened (a prefixed symbol such as `C$m` told to restate under `US$m`), fixed in `2cb3087`, re-review pass with one Low (a space inside `C $m`). Reviewer probes: `probe_adv5_*`, `probe_adv6_*`, `probe_c1_*`, `probe_c2_*`, `probe_e_*` exit 0.
- Fidelity check of the presentation changes (library store and metric card label, delivery strip labels, run-start form warning): tests only, on synthetic handoffs (`tests/test_credit_os_store.py`, `tests/test_credit_os_catalogue.py`, the node suite 546 passed, `tests/test_context_form.py`, the strip tests in `tests/test_cpos_launch.py`); no browser run.
- Gates on the tree merged with `main` `7c21c1e`: `uv run pytest tests/test_cpos_cp1_check.py tests/test_cpos_launch.py tests/test_cpos_register_scope.py tests/test_changes.py tests/test_library_index.py tests/test_handoff_loop.py tests/test_credit_os_store.py tests/test_credit_os_catalogue.py tests/test_context_form.py -q -m "not browser"` 2385 passed, 1 skipped (paid), exit 0; `uv run python tools/quality_gate.py` exit 0, 0 findings. Sizes: earnings_update 545,434 of 546,000; short_snapshot 155,712 of 157,500; all eight under their ceilings.
Not verified: any model run under the method: no model output has passed the check, and a CP-1 that cannot satisfy it within three writes stops the run at the second module; at what cost; a real GBP or adjusted-only handoff (VMO2 included); the library and the report drawing `GBPm` tables, an adjusted label or a chart with no unit in a browser; the browser-marked tests on the final tree; agreement of CP-1's figures with the filing (the check proves its tables agree with each other; `FX Effect on Cash`, `Temporary Equity` and `Reconciling items` can absorb an error); interim rows have no statement tie; other modules' money tables stay `US$m`; the full suite, slow gates and `tests/model`.

## 2026-11-13 — Signal: an unexpected error on one source no longer starves the rest (branch `claude/signal-ingest-starvation`)

Scope is **offline only**: recorded feeds, no network, no live service run. Defect (adversarial
review, PR 102 W1 / PR 106-109 W2): an exception other than a refused fetch or unreadable feed left
no check row, so that source failed first on every pass and later sources were never checked.
Now `ingest.run_due` logs the traceback, records a failed check `unexpected error (<Type>); see the
log` (the exception text is not stored) and continues. Three tests failed for that cause before the
fix. At `07090d5`: `uv run pytest tests/test_signal_ingest.py tests/test_signal_service.py
tests/test_signal_cli.py -q` 77 passed; `uv run python tools/quality_gate.py` 0 findings; the
reviewer's loop-coverage probe exits 0. Not verified: the real service loop against a live feed; a
store error raised by `record_check` itself (still propagates to the loop); the full suite.
Open, older than this change: a story whose topic match raised straight after it was added is not
matched on a later pass.

## 2026-11-13 — CP-DR web lookup: page fetch and SEC EDGAR tools (branch `claude/t5-cpdr-lookup-2e88f4`)

Ruling: `docs/rulings/2026-11-13-cpdr-web-lookup.md`. Scope is **offline only**: no live request, no
provider call, no paid run. Every test uses hand-written fixtures and fake resolvers, connectors and
clocks. SEC JSON field names are unverified against real responses. A real run needs the owner to
set `DEPLOY_WORKFLOW_SEC_USER_AGENT` and is a separate paid action.

- Change: `fetch_page`, `sec_company_search`, `sec_filing_list` and `sec_concept_facts` for CP-DR;
  an allowlist of 28 domains; pages retained under `<run>/live/web/` with a status against the research
  cutoff; fail-closed acceptance checks on CP-DR's handoff; `--web-lookup` and `--web-host`.
- Commands, each run on the tree of the commit that carries this entry (second pass, Task 5, on top
  of the Task 4 commit 72c868b):
  - `uv run pytest tests/test_weblookup.py tests/test_web_lookup_tools.py tests/test_web_search_scope.py tests/test_handoff_loop.py -q`: 589 passed, exit=0 (fix round 1).
  - `uv run pytest tests/test_run_start_submissions.py tests/test_run_start_page.py tests/test_run_start_service.py -q`: 375 passed, exit=0 (headless Chrome; two earlier runs under load lost one or two Chrome launches each, exit status 2, and those tests pass alone).
  - `uv run pytest tests/test_cpos_launch.py -q`: 806 passed, 1 skipped (the paid test), exit=0.
  - `uv run python tools/quality_gate.py`: 0 findings in 28 changed files, exit=0 (fix round 1).
  - Instruction size (Task 6): `earnings_update` 521,231 -> 520,888 characters (-343; `INSTRUCTION_BUDGET` unchanged), from the CP-DR method text only (named edit 2c names the two web paragraphs once as "a web paragraph"); `WEB_LOOKUP_RULES` (sent at call time, not in the total) 2,775 -> 2,613 (-162). Probe: `.superpowers/sdd/t5-cpdr-lookup/probes/t6_instruction_size.py`.
- Scope of the acceptance tests (fix round 3): 15 cases (five `test_rt_*` tests) run the launcher's real checker on a CP-DR handoff in the method's register layout (TDR.1 to
  TDR.6, the house Basis-line citation form); the remaining acceptance tests call
  `web_handoff_issues` directly or a stub checker (unit scope). Two launcher tests cover the
  relaunch rule (a started folder keeps its recorded lookup setting).
- Hostile cases covered by tests: redirect off the allowlist; oversized body (refused, not
  truncated); private and local addresses, also on a redirect hop; a post-cutoff page (later event,
  rejected in a TDR.6 row); a quote not in the cited page; the User-Agent variable missing (refused,
  names the variable) and never written anywhere; an injected instruction in page text; a forged
  `<<<END>>>` delimiter; a PDF answer (refused, nothing retained).
- Reviews: per-task review and two security reviews with probes. Findings were fixed in follow-up
  commits: 2b34e1a, 0315d23, 0c61069, 73e5490, then the whole-branch review's fix round 3 (the
  check's citation form, list-item units, TDR.6 one-hop evidence, hosted-search URLs and the
  relaunch rule; see `git log --oneline 82b17f3..HEAD`).
- Second-pass review (outside review of the branch): W1 an SEC filing document is dated by its
  filing date from a filing list retained in the run, W2 a page is dated by the later of its
  published and modified dates, N1 a cached row gets the index shape check, N2 an unreadable page
  file gives a plain message (all in 72c868b); W5 a resumed run applies the web checks to a retained
  CP-DR handoff (`HandoffExecutor.web_issues` through `cpos._with_web_checks`, tested with the
  launcher's real `checker` in `test_w5_*` of `tests/test_cpos_launch.py`); W4 the run-start
  summary carries the launcher's own `Lookup:` and `SEC:` lines, drawn on the research module's row
  (`tests/test_run_start_submissions.py`, `test_run_start_page.py`). W3 (URLs that carry run material
  are flagged, not refused) was answered, not changed: the ruling gives the reason. Commits on this
  branch for the pass: 72c868b, then the Task 5 code and docs commits (`git log --oneline
  e76625c..HEAD` also lists the merged-in main commits).
- Security review of 72c868b, fix round 1 (the commit after c0220c8; `git log --oneline
  c0220c8..HEAD`): an unreadable retained page gives the plain sentence on a repeated `fetch_page`
  too; a filing list is recognised by its submissions address as well as its tool, and a document
  retained before its list is re-dated by a new index row on the next fetch of its address (no
  request; pages and bytes are counted per distinct address); the published date is the first found (meta, JSON-LD,
  body line, `<time>`) and the modified date the latest stated, `page_date` the later of the two;
  the filing-date lookup compares the host as the allowlist does, decodes the path, uses the latest
  of several accessions, reads a list through the content-type extension and logs a damaged index.
- Fix round 2 (re-review of 1c5daed and the Task 5 Low items): the page budget is the number of
  distinct `url` values in the index and the byte budget the sum of `bytes` over them (a body
  served at many addresses is charged per address; the re-dated row stays free); an unreadable
  page that is later re-dated no longer stops `ModuleTools` registering later rows; the resume
  recheck of a damaged index uses no known pages, as the live write does, and gives the one plain
  issue only when that leaves the handoff an issue; a row whose `url`, `final_url` or
  `content_type` is not text is a damaged index; a torn last index line is cut off before the next
  append. Tests: `test_r1_*`, `test_r2_*`, `test_r3_*`, `test_r4_*`, and the extended
  `test_a_torn_last_index_line_is_ignored_and_repaired`.
- Low batch (re-review of 230f68b; commit: the one after 230f68b, `git log --oneline 230f68b..HEAD`): a row is a line that ends with a newline, so `_read_index` ignores an unterminated last line whether or not it parses (as `_append_row` cuts it); with a damaged index the resume recheck gives the one plain issue whenever the handoff names any web source (a `web-` id or an address), whatever the hosted-search setting. Tests: `test_l1_*`, `test_l2_*`.
- Relaunch rule: a relaunch compares the recorded lookup setting with what the flag settles to for
  the run's modules and case kind (a run without CP-DR started with `--web-lookup on` records `off`
  and relaunches with the same flag).
- Ruling points: with hosted `web_search` also on, a `## Sources` URL that was not fetched is
  accepted (owner point open); the dropped checks are governed by instruction only.
- Merge with `claude/quality-defects-appendix-cpdr` (67 commits): both records kept; on the merged tree
  the web lookup, launcher and handoff-loop tests, `test_cpos_launch.py` and the quality gate exit 0.
- Run-start summary change (the `Lookup:` and `SEC:` notes on the research module's row): its
  fidelity check is `tests/test_run_start_submissions.py` and `tests/test_run_start_page.py`
  (headless Chrome, synthetic case).
- Not verified: live network behaviour; real SEC responses, headers, encodings and content types; real model use of the
  tools and its citations; the full suite; concurrent writers to one run's web folder.
