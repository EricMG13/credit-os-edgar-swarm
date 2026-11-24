# S9 · Start run: spec

2026-11-24. Work package S9 of `docs/superpowers/plans/2026-11-24-frontend-redesign.md`.
Branch `claude/redesign-s9-start-run`. Owner of `web/src/pages/connected/StartRun.tsx`,
`web/src/pages/connected/start/**`, `web/src/pages/run/start/**` and new files beside them.

The form commits money. The redesign changes presentation and structure only: every request it
sends stays byte-for-byte what it sends today (§ 3), every behaviour test stays (§ 6), and the
labels and control names the tests, `web/scripts/connected-proof.mjs` and
`docs/design/preview/drive-synthetic-run.cjs` use stay (§ 4). No provider call, no paid run.

Inputs read: `AGENTS.md`; the plan; `docs/design/screen-map.md` ("On every screen", "Start
run"); `docs/rulings/2026-11-11-run-start-submit.md`; `docs/rulings/2026-11-15-pathway-tiers-and-caps.md`;
`.impeccable/surfaces/web-src-pages-connected-startrun-tsx.md` (the owner-confirmed brief) and its
critique of 2026-11-16; `DESIGN.md`; `PRODUCT.md`; the Overview and Module CP-1 mockups;
`docs/design/preview/README.md`.

## 1. Screen-map rows covered

From "Start run" (all eight rows) and the "On every screen" elements that appear on it.

| Step | Rank | What to show | How | Where | Needs |
|---|---|---|---|---|---|
| All | P1 | Readiness per module for the chosen pathway, and the cap | Persistent panel: module list by stage with ready, conditional, blocked; "USD x of USD cap" | Right rail, every step | Code |
| All | P2 | Where I am | Four-step stepper | Top | Code |
| Documents | P1 | Drop zone; each file's detected type and what it unlocks | Upload list with a type chip and "unlocks: covenants, liquidity…" | Main | Code |
| Documents | P2 | What is missing for the modules I will want | Gap rows with the module they block | Under the list | Code |
| Purpose | P1 | Eight pathways as what they answer, their module count and cap | Cards: question, modules, cap. Not a dropdown | Main | Code |
| More context | P2 | Questions for deep research, legal document status, portfolio workbook, ratings | Short form in groups | Main | Code |
| Review and start | P1 | What the run will do, what it will not do, and what it will cost | Three blocks; each limit is a checkbox the analyst accepts | Main | Code |
| Review and start | P1 | Submit with the cap in the button label | One primary button; confirmation dialog | Bottom | Code |
| Review and start | P2 | For a private issuer: what leaves the building | Plain statement before Submit | Above the button | Code |

| On every screen | What | How | Where |
|---|---|---|---|
| Gap state | What is not known and why | Hatched, dashed panel with the reason in words (`GapNote`) | In the place the figure would be |
| Blocked | A module that could not run | Dashed orange outline, slash icon, "Not assessable" and the reason | Wherever the module appears (the rail) |
| Synthetic test mode | A persistent chip so a test is never mistaken for a real run | The existing "Synthetic test" badge in the page header | Page header, every step |
| Top bar | Areas, Start run as the primary action | Frozen shell (`web/src/shell/**`); not changed here | Top |

The report header, section control, basis label, trace control and better/worse marks do not
appear on Start run.

## 2. Blocks: component, props, data, states, place

The page keeps one route (`/start`, lazy chunk `StartRun-*`, which the proof script checks) and one
form state (`IntakeForm`); the blocks below are views over it. Grid: at `lg` (≥1024 px) a
12-column grid, 16 px gap: the step column spans 8, the rail spans 4 and is sticky. Below `lg` one
column: stepper, step, then the rail; the one-line readiness summary stays above the step action.
At 390 px nothing scrolls sideways; Submit is full width and last.

### 2.1 Readiness rail — `start/ReadinessRail.tsx` (P1, every step)

`<aside aria-label="Readiness">`, `lg:col-span-4`, sticky. Three parts, in order:

1. **Cap.** Kicker "Spending cap for this run" (live) or "Configured cap for paid runs"
   (synthetic). One mono line, exactly `USD 0.00 of USD 25.00` (the run has spent nothing before
   Submit; the cap is the selected pathway's, from `submission_caps_usd`), and under it the
   existing `ProgressBar` named by the same text. Cap missing: "Unavailable".
2. **Before Submit.** `<ul aria-label="Before Submit">`, the four existing condition rows as
   status (`StatusBadge` "Met or not met"): Documents inspected; Purpose chosen; Decisions made
   (`n of m` or "None needed"); Summary approved. Data: unchanged `readinessRows`.
3. **Modules by stage.** A list named by its heading "Modules", grouped by the five stages with
   `byStage` (`report/stages.ts`, read only): "01 Sources", "02 Financials", "03 Credit", "04
   Structure and market", "05 Validation and decision"; module names, never codes; the forecast
   (`CP-MODEL`) is never drawn. Header: "{n} modules · {pathway label}". Rows and states:
   - **Not checked yet** (before a review): the planned modules (`pathwayModules`, or the
     Advanced selection), names only, and one line: "Each module is checked against your
     documents when you review the run." Readiness before a review is not known to the page: the
     service computes it only for the summary, and the page adds no request.
   - **Checked** (on the review, from `summary.modules` and `summary.items`): per module the most
     severe item scoped to it. No item: `Ready` ("Source readiness" set). `gap`, `limited` or
     `check`: `Conditional` ("Source readiness" set) with the service's reason (`serviceText`).
     `will_refuse`: the blocked state — dashed orange outline, `Not assessable` ("Module state"
     set, slashed circle) and the reason. Items scoped to `run` are one "Whole run" row first.
     Passive items (`information`, `ready`) do not change a module's state. A module the service
     added (Changes since the last run) is drawn in its stage. Each stage is a sub-list named by the
     stage; the whole-run row is the list "Limits on the whole run".
   - **From your last review** (after leaving a review by Edit, the stepper or Back): the last
     summary's states, marked "From your last review. Review the run again to check changes.",
     shown only while the pathway and Issuer ID are those of that review; otherwise Not checked
     yet. Kept in page state only; it changes no request.

The one-line summary "`2 of 4 ready · USD 0.00 of USD 25.00`" (or "· Cap unavailable") stays
above each step action below `lg`. At `lg` the rail is sticky and, when taller than the window,
scrolls on its own (`max-h` with `overflow-y-auto`, keyboard-focusable), so the cap and what
Submit needs stay in view on every step.

### 2.2 Stepper — `run/start/Stepper.tsx` (P2, top)

Four steps, `<ol aria-label="Steps in this run">`: Documents (Add files), Purpose (Choose one),
More context (Optional, or "Periods required" for Earnings Update), Review and start (Paid step,
or "No-cost test" in synthetic mode). Current step tinted with the accent and underlined, marker
numbered; done steps checked and, when the form allows, buttons "Go back to {step}" (behaviour
unchanged: forward only through the step action). Below 620 px the labels are visually hidden and
"Step 2 of 4 · Purpose" is shown. Place: the top of the step column, in its own strip above the
step tile.

### 2.3 Documents — `start/DocumentsStep.tsx` (P1 drop zone and list; P2 missing)

One tile, h2 "Documents" and its guidance line; inside the existing `<form>`.
- **Drop zone** (`FileUpload.DropZone`, input "Documents", `data-dropzone`), larger, full width;
  hint "Add PDF, HTML, DOCX, TXT, Markdown, XLSX, CSV, JSON and JSONL. Up to 50 MB per file."
  "Choose a folder" and "Inspect documents" beside it. The status line "3 documents inspected, 0
  ignored." stays a live region.
- **Upload list** `<ul aria-label="Documents added">`, one row per file: name; a **type chip**
  with the service's detected kind in words ("credit agreement", "unrecognised"); the existing
  state badge (Selected, Inspected, Ignored, Repeated content, Will be copied, Copied); the
  service's facts (period end, executed or draft, the signal it found) or the reason it was
  ignored; Remove. Empty: "No documents yet."
- **What each file unlocks**: drawn as the gap state under the list — "What each file unlocks is
  not reported before review: the service checks the files against each module when you review
  the run." (§ 5).
- **What is missing for the modules** (P2): after a review of this pathway and issuer, the last
  summary's limit causes as gap rows: the module (or Whole run) they block, the service's reason
  and its fix line, headed "Missing at your last review". Before any review the same gap note
  stands in their place.
- Then the issuer block, as today and in the same order of controls: Issuer name, Issuer ID, As-of
  date, Issue classification, Your name, "Use inputs from latest run" / "This is a different
  issuer", the carried-run intro and "Open source run".

### 2.4 Purpose — `start/PurposeStep.tsx` with `run/start/Purpose.tsx` `PurposeCards` (P1)

Eight cards, still a react-aria `RadioGroup` named "Pathway" whose radios are named by the
pathway's title, in the order Lite, Full, Deep, then the five purpose pathways. Two columns in the
step column at `lg`, one below. Each card: title and radio mark; **the question it answers**
(the page's fixed copy, one per pathway, describing the pathway, not the issuer); its module count
as today ("14 base modules", from `drawnModules`); its cap in mono, "Cap USD 25.00" (or "Cap
unavailable"). Selected: accent ring and tint. Then, as short fields with one line of help each:
Market view, Case kind, Run form level; and the synthetic-limits line in synthetic mode.

### 2.5 More context — `start/ContextStep.tsx` (P2)

The same controls, regrouped into short titled groups (each a `fieldset` with a legend, no
change to any label or `data-field`): **For the research** (Anything the analysis should know;
Research questions rows); **Dates and periods** (Date of your newest file, Research cutoff,
Current period, Prior period); **Legal documents** (Legal documents, The agreement); **Files with
a role** (Management EBITDA bridge, Portfolio workbook, Prior decision record, where drawn today);
**Ratings, quotes and facilities** (Ratings, Observed quotes, Facilities and deal terms rows);
**Issuer details** (the closed disclosure); the Advanced groups (Valuation and peers, Module
options, Scenario assumptions, Model, Reasoning effort, Turns per module, Requested modules) as
today, Advanced only. Which controls are drawn, when, stays exactly as today.

### 2.6 Review and start — `start/ReviewStep.tsx`, `start/ReviewSheet.tsx` (P1)

h2 "Review and start", then three blocks in this order, each a tile:
1. **What the run will do** — the existing region "What will run" with its Edit buttons ("Edit
   issuer and documents", "Edit purpose and modules", "Edit context", and the Advanced ones).
   Drawn open, two to a row at `xl`: Issuer and documents (issuer, Issuer ID, as-of date,
   classification, submitted by, documents read and ignored), Purpose and modules (pathway,
   market view, case kind, form level, modules (n) by name in two columns, left out, omitted
   sections), Context (periods, cutoff, changes, file roles, source lookup) and Advanced choices
   (model and effort, turns). Folded under one closed disclosure, "More inputs Submit sends: …"
   naming each group: Issuer details, Context details, and at Advanced Valuation and peers, Module
   options, Scenario assumptions — the groups that are mostly "Not given", whose length pushed the
   limits 2,700 px down before (audit finding C2-007).
2. **What it will not do** — the existing region "Limits to decide" ("n of m decided"): one
   decision per shared cause with its status badge, the modules affected, the fix, "Leave out"
   where offered, and the acceptance checkbox ("I accept this limit…", "I have checked this").
   "No limits found for this run." when none; passive items under "No action needed (n)".
3. **What it will cost** — region "What it will cost": the cap in large mono ("USD 25.00",
   "Up to USD 25.00 on this pathway"; synthetic: "USD 0.00", "No-cost test"); the existing cost
   sentence ("Submit opens a confirmation…"); **what leaves the building**, moved here from the
   context block so it sits directly above the button: the OpenAI web-search sentence, the Yahoo
   Finance sentence and the native search status, each only when the summary says so; the
   unverified-model sentence; the blocker line ("2 decisions left before you can approve.");
   the consent checkbox "Approve: I have read this summary and want this run started"; the
   one-line readiness summary below `lg`; the error notice; and the one primary button —
   "Submit, spend up to USD 25.00" (live) or "Submit run" (synthetic) — which opens the existing
   confirmation dialog. The synthetic and Issuer-ID notes stay beside it.

The dialog keeps its titles ("Start a paid run?" / "Start a synthetic test?"), sentences and
actions ("Start run, up to USD 25.00" / "Start synthetic run", Cancel), and returns focus to
Submit on Cancel. Its mark is the warning triangle for a paid run and a ring in the accent for
the no-cost test (the critique of 2026-11-16 noted a warning on a USD 0.00 test). The lock icon
on Submit is dropped (it read as "locked"). Gating is unchanged: Submit is disabled until every decision is accepted and
the summary approved; in live mode also until the cap is known and the model pair is verified.

## 3. Request shapes held fixed

Held by `web/src/pages/connected/start/requests.golden.test.tsx` (five jsdom drives; files under
`start/requests.golden/`, written from the form before any change and never rewritten with `-u`)
and by `2026-11-24-redesign-s9-start-run/capture-requests.cjs`, a Playwright drive of the real
synthetic service whose output `golden-requests.json` was recorded twice on fresh roots with
identical results (13 requests; stored upload hashes equal the proof files').

| # | Request | Method | Headers | Body |
|---|---|---|---|---|
| 1 | `/connected/context` | GET | — | — |
| 2 | `/api/runs/{from}/inputs` (only with `?from=`) | GET | — | — |
| 3 | `/api/issuers/{id}` (issuer notice, 250 ms after typing; holder lookup at review and carry) | GET | — | — |
| 4 | `/api/submissions` | POST | — | — |
| 5 | `/api/submissions/{id}/files?name={name}` per new file, in selection order | POST | — | the `File` itself |
| 6 | `/api/submissions/{id}/files?name={name}` on Remove of an uploaded or carried file | DELETE | — | — |
| 7 | `/api/submissions/{id}/carry` once per draft when carrying | POST | `Content-Type: application/json` | `{"run":"{from}"}` |
| 8 | `/api/submissions/{id}/reading` after uploads, after Remove, and on each Continue/Review | GET | — | — |
| 9 | `/api/submissions/{id}/summary` on Review run | POST | `Content-Type: application/json`, `X-Shown-Cap: {pathway cap}` | `JSON.stringify(answers)`: `context`, `modules`, `max_turns`, `level`, `model`, `effort`, `submitted_by`, `newest_document_date` when set |
| 10 | `/api/submissions/{id}/submit` on the dialog's confirm (again, identical, on retry) | POST | `Content-Type: application/json`, `X-Shown-Cap: {cap}` | `JSON.stringify({answers, digest})`, the reviewed answers and the summary's digest |

Order, per drive, is exactly as recorded in the golden files. Nothing in the redesign adds,
removes, reorders or alters a request.

## 4. Control names held fixed

Every one is used by a test, the proof script or the preview driver; none is renamed.

- Labels: Documents, Document folder, Issuer name, Issuer ID, As-of date, Issue classification,
  Your name, Pathway (radio group), Market view, Case kind, Run form level, Anything the analysis
  should know, Date of your newest file, Research cutoff, Current period, Prior period, Legal
  documents, The agreement, Management EBITDA bridge, Portfolio workbook, Prior decision record,
  Listed equity, Ticker, Model, Reasoning effort, Turns per module, and every row-editor field
  (Agency, Scope, Rating, Outlook, As-of, Facility ID, Bid, Peer source, Focus module…).
- Buttons: Choose files, Choose a folder, Inspect documents / Reading documents…, Remove {file},
  Use inputs from latest run, This is a different issuer, Open source run, Use {id}, Continue to
  purpose, Continue to context, Review run / Preparing review…, Previous, Go back to {step}, Add
  rating / facility / quote / research question / peer / precedent / scenario, Remove {row},
  Edit issuer and documents, Edit purpose and modules, Edit context, Edit {block}, Leave out …,
  Put back, Choose the Portfolio workbook, 1 problem to fix: …, Submit run / Submit, spend up to
  USD {cap} / Submitting…, Cancel, Start synthetic run, Start run, up to USD {cap}.
- Checkboxes: I accept this limit…, I have checked this, Approve: I have read this summary and
  want this run started, Requested modules by module name, Pin {module}.
- Radios: each pathway title (Lite credit assessment, Full credit assessment, Deep credit
  assessment, Earnings Update, Relative Value, Covenant & Refinancing, Distressed &
  Restructuring, Portfolio Decision).
- Landmarks and regions: complementary "Readiness"; list "Steps in this run"; list "Documents
  added"; regions "What will run", "Limits to decide", "Ratings" and the other row sections; groups
  "Context", "Issuer and documents", "Purpose and modules" and the input groups; dialog "Start a
  paid run?" / "Start a synthetic test?".
- Text the tests and scripts read: "Step n of 4 · {step}", "n of 4 ready · USD 0.00 of USD 25.00",
  "USD 0.00 of USD 25.00", "Spending cap for this run", "Paid step", "No-cost test", "{n} base
  modules", "Cap USD {cap}", "1 document inspected, 0 ignored.", "Selected", "Will be copied",
  "No documents yet.", "Documents inspected", "Purpose chosen", "Decisions made", "Summary
  approved", "None needed", "No limits found for this run.", the web-search and Yahoo sentences.
- Headings: h2 per step ("Documents", "Purpose", "More context", "Review and start"), focused on a
  step change.

Added names (new, not yet used by any script): list "Before Submit", list "Modules" and its
sub-lists named by stage, list "Limits on the whole run", region "What it will cost", heading
"What leaves the building", heading and list "Missing for the modules" on Documents, and the five
More context group titles ("For the research", "Dates and periods", "Legal documents", "Files
with a role", "Ratings, quotes and facilities"). No existing name was removed or renamed.

## 5. Files

Add:
- `start/requests.golden.test.tsx`, `start/requests.golden/*.txt` (done, phase 0).
- `start/ReadinessRail.tsx` (+ `ReadinessRail.test.tsx`), `start/moduleReadiness.ts` (+ test):
  the per-module state from summary items.
- `start/DocumentsStep.tsx`, `start/PurposeStep.tsx`, `start/ContextStep.tsx`,
  `start/ReviewStep.tsx`, `start/fields.tsx` (SelectField, FieldMessage, problem attributes),
  `start/intake.ts` (pure helpers moved out of `StartRun.tsx`), each with the tests its block
  needs; `start/pathways.ts` (the card questions).

Change:
- `StartRun.tsx`: keeps `StartRun`, `IntakeForm`'s state and handlers, and the exports the tests
  import (`SelectField`, `carriedModules`, `stepOfField`, re-exported where moved); the views move
  out by step. Target under 1,400 lines.
- `start/ReviewSheet.tsx`: three blocks in the new order; disclosure sentences move to the cost
  block. `start/StartReadiness.tsx` is replaced by `ReadinessRail.tsx`.
- `run/start/Purpose.tsx` (`PurposeCards`), `run/start/Stepper.tsx`, `run/start/Start.tsx`
  (`SubmitConfirmation`): restyled to the new tokens; props and accessible structure unchanged, so
  the static `run/start` pages and their tests keep working.

Delete: `start/StartReadiness.tsx` once nothing imports it.

Tests kept unchanged: every behaviour test in `ConnectedApp.test.tsx`'s run-start suites,
`start/*.test.*`, `run/start/*.test.tsx`. Tests to rewrite, because they pin layout only:
- "reads readiness as four status rows": counts the rail's list items; it will count the items of
  the list "Before Submit".
- "web search statement" and "Yahoo Finance statement" (8 cases): look for the sentences inside
  "What will run"; they will look inside the review's cost block, still exactly once and still
  adjacent. Each rewrite is listed in the report with its reason.
Tests to add: the rail (states, stage grouping, no codes, no forecast, last-review marking, cap
line), the module-readiness mapping, the pathway card (question, count, cap), the document row
(type chip), the context groups (every control still drawn under the same conditions), the review
order (three blocks, consent and Submit last), and 390 px layout classes where they matter.

## 6. Drawn as a gap, and why

| What | Why it is a gap | What would fill it |
|---|---|---|
| "What it unlocks" per file (Documents, P1) | The reading the page receives gives each file's detected kind, period end and executed state, not which modules it serves; that is decided by the service's readiness rules (`deploy_workflow/run_expectations.py`) only when the summary is made. Copying those rules into the page would be a second, drifting statement of them | The reading endpoint returning, per document, the modules that read it (a service change outside the frontend) |
| What is missing, before the first review (Documents, P2) | Same: the service states it only with the summary. After a review the page shows the last summary's causes, marked as such | The same service change, or a readiness call before review (a new request: outside this package, and a change to what the page sends) |
| Per-module readiness before the first review (rail, P1) | Same; the rail lists the planned modules by stage and says when they are checked | The same |
| The cap in the synthetic Submit label | A synthetic test spends USD 0.00; the label "Submit run" is pinned by the tests, the proof script and the preview driver, and showing the paid cap on a no-cost test would mislead. The paid label carries the cap | — |

## 7. Sub-agent plan

| Part | Model · effort | Why |
|---|---|---|
| Spec, golden capture, the split of `StartRun.tsx`, the rail and its readiness mapping, the review blocks, consent and Submit | Opus · xhigh (this session) | They touch what is sent, what is shown about limits and money, and the consent gating |
| Pathway cards, stepper restyle, document row and type chip, context groups | Sonnet · high, one sub-agent per new file with a fixed prop contract | Presentational; the golden and behaviour tests guard them |
| Test rewrites listed above, layout tests | Sonnet · medium | Mechanical against stated intent |
| Independent review of the whole diff (requests, gating, labels, tests weakened, 390 px, contrast) | Opus · high, given the code and the rules, not this spec's conclusions | One review before reporting |

## 8. Requests to the coordinator

1. A "Run readiness" status set (Ready, Conditional, Blocked) in `components/status/sets.ts`, if
   the screen map's exact words are wanted; until then the rail uses "Source readiness" (Ready,
   Conditional) and "Module state" (Not assessable) for a module that will refuse.
2. The top bar on `/start` tints "Run activity"; the screen map has Start run as the primary
   action. The shell is frozen; please decide whether `/start` should tint Start run.
3. The service change in § 6 for "what it unlocks" belongs in the follow-on plan (outside the
   frontend).
4. `capture-requests.cjs` could move beside `docs/design/preview/drive-synthetic-run.cjs` as the
   shared request regression for the integrated branch; I have not touched that folder.

## 9. Verification

Filled in during phase 2.
