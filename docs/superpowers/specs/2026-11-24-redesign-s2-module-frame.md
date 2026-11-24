# S2 · Module frame: spec

2026-11-24. Work package S2 of `docs/superpowers/plans/2026-11-24-frontend-redesign.md`.
Branch `claude/redesign-s2-module-frame`. Requirement: `docs/design/screen-map.md` § Report ·
Modules (frame shared by every module), § On every screen; look: the approved mockup
`docs/design/mockups/2026-11-24/Module-CP1.dc.html`.

The old page (`report/Modules.tsx` before this branch) is not the starting point: it drew every
module as findings → confidence tile → metric grid → figures → a generic chart-card grid
(`LegacyVisuals cards`) → limitations → every other table as its own card → a link list to
Evidence. The new frame is built from the screen-map rows below.

## 1. Screen-map rows covered

Report · Modules (frame shared by every module):

| Rank | What to show | How | Where | Needs |
|---|---|---|---|---|
| P1 | The module's bottom line | Large type in the header tile, with status and basis | Top of the content column | Code |
| P1 | The module's lead visual (§ Modules) | Specific to the module; never the generic chart card | Directly under the header | Per module |
| P2 | Headline figures of that module | Stats strip divided by hairlines; mono numerals; prior value, delta, direction | Under the header | Code |
| P2 | Key findings; contrary evidence; what would change the view | Numbered claims; counter surface | After the lead visual | Code |
| P2 | Limitations of this module | Gap wells | After findings | Code |
| P3 | Navigator: modules by stage with status | Left column, grouped by the five stages; current tinted; blocked marked | Left, 232 px | Code |
| P3 | Statements, registers, calculations | One region with tabs, closed by default; tables with inline bars | Bottom | Code |
| P3 | Next module | One forward link | End | Code |
| E | Source register, entity keys, definition conflicts, handoff file | Not on the module page | Evidence | — |

On every screen (the parts this page draws): basis label (one quiet line per tile or table),
trace control (one per paragraph, row or figure), gap state (hatched, dashed, the reason in
words, in place), better / worse (teal "better", orange "worse", with an arrow or word),
blocked (dashed orange outline, slash icon, "Not assessable" and the reason).

Out of scope here: the report header and section control (S1), the lead visuals themselves
(S3, S4), the trace drawer's inside (S7).

## 2. Blocks

Grid at 1440: page frame `navigator 232 px | 16 px | content`; content is `Bento` (12 columns,
16 px gap). At 390: one column; the navigator becomes a closed disclosure above the content;
every tile spans the full width; no horizontal page scroll (wide tables scroll inside their
own focusable region).

Data the frame reads, for the module page `#modules/<id>[/<output>]`: `view.modules` (id,
name, state, outputs), the selected `OutputEntry` (its `sections`, `output.confidence`,
`output.summary`, `output.charts | chartGaps | events | maps`), `view.catalogue` (run money
unit, CP-1 headline figures) and `run` (folder, as-of). Nothing else.

### 2.1 Navigator — `StageNav` (new export in `library/parts/ModuleNav.tsx`)

- Props: `modules: NavModule[]` (id, name, state), `current: string`, `hrefFor(id)`.
- Groups from `byStage(modules)`: a numbered stage label ("01", mono) and the stage name as h3;
  one link per module: state shape, name, module code (quiet mono, as the mockup); the current
  link has `aria-current="page"` and the accent tint; a `Not assessable` module draws the slash
  icon in the signal colour and the word "Not assessable" under its name; `Delivered with gaps`
  and `Not run` show their word. Accessible name `"<name>, <state>"`.
- Header: h2 "Modules", "`n` of `m` delivered", "`k` not assessable" when any.
- States: data (groups); empty (no modules: nothing drawn); a module outside the five stages is
  listed under "Other" (from `byStage`).
- 1440: left column, 232 px, not sticky (mockup). Below 1024 px: a `<details>` disclosure
  "Modules in this run · n of m delivered", closed, holding the same groups.
- The old `ModuleNav` (search, section links, scroll spy) stays exported unchanged for the static
  library page `pages/library/Module.tsx`, which this package does not own; the connected module
  page no longer uses it. Section links ("On this page") are dropped: the screen map's navigator
  is modules by stage, and with records closed the page is a few screens long.

### 2.2 Header tile — `ModuleHeader` (new, `report/ModuleFrame.tsx`)

- Content: module code chip and name (h2), `StatusBadge` "Module state"; basis line: stage name,
  "stage `n` of 5", and "Amounts in `<unit>`" where the run states a money unit
  (`runMoneyUnit(view.catalogue)`); the bottom line in large type (`text-h3`, `text-h2` from lg)
  with one trace control; continuation paragraphs of the Bottom line passage below it in body
  type, each with its own trace; the confidence meter at the right (2.3).
- Source of the bottom line: the `Bottom line` passage's first paragraph; else the module's
  `summary.bottomLine`; a paragraph holding a source reference is replaced by "Read this passage
  in Evidence" (unchanged rule).
- States: data; gap (no bottom line owed and none written: the hatched gap note "Not established
  for this run. The module's handoff has no such passage." in place of the sentence); blocked
  (`moduleState` is `Not assessable`: dashed orange outline, slash icon, "Not assessable" and the
  reason as the module wrote it); unreadable handoff (`parseError`: the sentence "This handoff
  could not be read into sections." and the link "Open Evidence").
- 1440: span 12. 390: full width, the meter under the sentence.

### 2.3 Confidence — `ModuleConfidence` (rewritten `report/Confidence.tsx`)

- A meter 0–100 with the score in mono, "/ 100", and the band word; its own trace control
  ("Show sources for the confidence score") opening the scored inputs (`traceForConfidence`,
  unchanged). A published zero is drawn as 0. `{ missing }` draws the gap words "Not scored:"
  and the reason; a run that predates the score draws nothing.

### 2.4 Headline figures — `StatsStrip` (kit)

- CP-1: the `foundationMetrics` records (net debt, contractual principal, interest cover,
  leverage, liquidity, free cash flow, maturities as the handoff states them), each as a `Stat`:
  label, value as written, `prior` and `delta` from the record's `yearChange` (exact difference
  already computed by `reportView`), `tone` from `signal.tone` where the owner's table gives a
  direction, one trace control per stat (`traceForLine`).
- Other modules: no headline-figure source exists in their handoffs today; the strip is not
  drawn (nothing implied). A lead may draw its own figures (request 6.1).
- 1440: span 12, cells divided by hairlines. 390: two columns.

### 2.5 Lead — `leadFor(module)`

- `const Lead = leadFor(id)`; when defined, `<Lead snapshot run view entry entryIndex />` is drawn
  directly under the header (and the stats strip), span 12, nothing around it.
- When undefined: the module's existing typed figures, unchanged components: `Downside`,
  `BreakPoints`, `MacroSensitivity`, `Securities` (CP-2A, CP-2E, CP-3), the module's event
  lanes and relationship maps (`LegacyVisuals` given only `events` and `maps`, never `charts`),
  and the typed module tables drawn where their section sits (readiness groups, monitoring
  watch lists, risk matrix, research questions, CP-8 limitations ledger). Generic chart
  descriptors (`charts`) are not drawn as cards: their tables go to the records region (2.8)
  with their qualification text, their gaps to the limitations tile (2.7).
- When a lead is defined the typed module tables are not drawn in the flow (the lead owns the
  module's visual); every one of their tables stays in the records region.

### 2.6 Findings — `ModuleFindings` (new, `report/ModuleFrame.tsx`)

- Key findings: an ordered list of numbered claims ("01", "02", …, mono), one per paragraph of
  the passage, text as written, one trace control each. A table inside the passage is drawn
  inline with `PublishedTable`.
- Contrary evidence and what would change the view: the passage as written on the counter
  surface (`Tile tone="counter"`, info tint), one trace per paragraph. The split into outcome
  wells needs a typed field (Method, screen map § What must change #7); until then the passage
  as written.
- Other reader sections the module wrote under Findings (prose such as CP-1 "Financial
  interpretation"): one tile per section, heading as drawn (`drawingTitle`), paragraphs with
  traces; their plain tables go to the records region; typed module tables per 2.5.
- States: an owed passage the handoff lacks (`missingPassages`) is drawn in its place as the
  hatched gap with the fixed sentence; a module that owes only the bottom line (data modules,
  blocked) draws no findings gap.
- 1440: Key findings span 7 beside the counter span 5; either alone spans 12. 390: stacked.

### 2.7 Limitations — `ModuleLimitations` (new, `report/ModuleFrame.tsx`)

- Title "Limitations of this module", the quiet label "As the module reports them"; one gap well
  per paragraph of the Limitations passage (hatched square, text as written, trace control);
  then one well per chart gap the module declared (`chartGaps` with a `gap` reason): the figure's
  title and the reason as written ("See Evidence" where the reason holds a reference).
- States: passage missing and owed → the gap note in place; nothing owed and nothing written →
  not drawn.
- 1440 and 390: span 12.

### 2.8 Statements, registers and calculations — `ModuleRecords` (new, `report/ModuleRecords.tsx`)

- One region (`section`, h3 "Statements and records", a quiet count line), closed by default: a
  button "Show records" / "Hide records" with `aria-expanded` and `aria-controls`.
- Open: a `Segmented` of kinds — Statements, Registers, Calculations, Chart tables — each with
  its count, only kinds that hold a table; then, when the kind holds more than one table, a second
  `Segmented` "Table" naming each table; then the chosen table with its title (h4), any prose of
  its section above it, and one trace control per row.
- Which tables, by `classifySections` role (pure function `moduleRecords`, `report/moduleRecords.ts`):
  - Statements: tables in `finding` and `passage` sections, coded or not (CP-1 income
    statement, cash flow, balance sheet, debt instruments, segment schedule, KPI dashboard, net
    debt, …), except E headings.
  - Registers: tables in `registers` sections that the page drew before (`registerBlocks`:
    monitoring, probability × impact, leading indicators, dated events; CP-6 T6E.4/6/7; CP-8
    limitations ledger).
  - Calculations: tables of the top-level `Calculations` section.
  - Chart tables: the table of every `charts`, `chartGaps`, `events` and `maps` descriptor, with
    the section's qualification text.
  - Held in Evidence (links, not tables): every other register (source register, confidence
    inputs, period and calculation registers, entity keys, definition conflicts) — the E row —
    listed by title with a link to its place in Evidence, and "Open this module in Evidence".
  - Nothing a handoff carries becomes unreachable: every table of a reader section is in one
    kind, or in the Evidence list.
- Inline bars (`BarCell`): a column is an amount column when its header names an amount
  (principal, amount, debt, cash, balance, commitment, drawn, maturing, liquidity, outstanding,
  value, revenue, sales, EBITDA, flow, capex) and not a ratio, rate, spread, margin, date or
  period, and every non-empty cell is a plain number or a stated gap; the share is the cell's
  absolute value over the column's largest; the text is the cell exactly as written; a gap cell
  draws its words and no bar; a negative value takes the secondary tone. Statement tables whose
  columns are periods draw mono numbers without bars.
- States: no tables and no Evidence list → region not drawn; unreadable handoff → the Evidence
  link only.
- 1440 and 390: span 12; tables of five or more columns scroll inside their named region.

### 2.9 Next module — `NextModule` (new, `report/ModuleFrame.tsx`)

- The module after the current one in stage order (`byStage` flattened); a link tile: "Next
  module", code chip, name (h-size), "<stage> · stage n of 5 · <state>", arrow. The last module
  draws nothing.
- 1440: span 4 at the right end of the last row. 390: full width.

### 2.10 Kept behaviour

Saved outputs navigation (`Output used in report`, `Saved output n`), the invalid-address rule
(no substitution), "Handoff unavailable", "This module is unavailable in the published run.",
the trace drawer for every paragraph and row, references replaced by Evidence links, module
codes replaced by names in reader text (`readerText`).

## 3. Files

| File | Change |
|---|---|
| `report/Modules.tsx` | Rewritten: frame assembly; navigator; output selection kept |
| `report/ModuleFrame.tsx` | New: header, findings, limitations, next module |
| `report/moduleRecords.ts` | New: pure classification of the module's tables into kinds, amount columns |
| `report/ModuleRecords.tsx` | New: the records region |
| `report/Confidence.tsx` | Rewritten: the meter |
| `library/parts/ModuleNav.tsx` | New export `StageNav`; `ModuleNav` unchanged for the static library |
| `ReportContent.tsx` | Export the trace builder for a set of sections (`sectionTraces`) and the reader-block rule; `ReportFindings` unchanged for Overview and Changes; module-only props removed once unused |
| `report/ModuleTable.tsx` | Unchanged API; `typedModuleTable` reused |
| `report/Record.tsx` | Not changed: it is Evidence's run record (S7's page), not part of the module frame |

Tests to add (written before each block): `moduleRecords.test.ts` (kinds, E list, amount
columns, missing vs zero), `ModuleRecords.test.tsx` (closed by default, kinds, table choice, bars,
traces, Evidence links), `ModuleFrame.test.tsx` (header states incl. blocked and gap, numbered
claims, counter surface, limitation wells and chart gaps, next module), `StageNav.test.tsx`
(stages, current, blocked word, counts, disclosure), `Modules.frame.test.tsx` (order of blocks,
lead drawn under the header when `leadFor` returns one, nothing when undefined, no generic
chart card, every table reachable).

Tests to rewrite (old layout pinned): `Modules.order.test.tsx` (figures before Limitations →
typed figures in the lead slot; chart cards gone), `Modules.navigator.test.tsx` ("On this page"
entries → stage groups), `ReportContent.records.test.tsx` § "coded registers leave the module
page" and the continuation-card case (records now in the region; behaviour kept: labels without
code, links into Evidence, no register code), `Modules.test.tsx` cases that read the confidence
group beside the bottom line, the confidence tile, and region names. Behaviour tests of values,
links, states and gaps are kept.

## 4. Gaps drawn today

- Headline figures for every module but CP-1: no typed headline figures in their handoffs; strip
  not drawn (request 6.1).
- "What would change the view" as two outcome wells: Method (typed split); the passage as written.
- Leads for every module until S3 and S4 land: the existing typed figures or nothing.
- The header's basis cannot state reported / as defined / pro forma per module: not a handoff
  field; the line states stage and unit only.

## 5. Sub-agent plan

| Part | Model · effort | Why |
|---|---|---|
| Spec, `moduleRecords.ts` (reads handoff tables, missing vs zero), `Modules.tsx` assembly | Opus · high (me) | Reads handoff data; defines the frame |
| `ModuleRecords.tsx` + tests | Opus · high (sub-agent) | Draws handoff tables and amounts |
| `StageNav` + tests | Sonnet · high | Presentational, well specified |
| Old-test rewrites | Sonnet · medium | Mechanical against the new frame |
| Independent review of the diff | Opus · high, given the code only | Plan's rule: one independent review before done |

## 6. Requests to the coordinator

1. `LeadProps` / `leads/index.ts` (frozen): allow a lead module to export headline `Stat`s for the
   strip (for example `statsFor(module, props)`), so modules other than CP-1 can fill the P2 strip
   from typed tables S3/S4 already read. Until then the strip is CP-1 only.
2. `components/status/sets.ts`: the "Module state" set draws `Not assessable` in neutral grey; the
   screen map's blocked state is the signal colour with a slash. The navigator draws its own
   signal slash beside the badge; a set change would make every badge agree.

## 7. Verification

Filled in during phase 2.
