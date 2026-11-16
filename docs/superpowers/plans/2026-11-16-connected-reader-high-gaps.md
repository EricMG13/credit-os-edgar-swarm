# Connected Reader High Gaps Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close eight of the nine High gaps found by the 2026-11-16 review of the connected interface (`web/src/pages/connected/**`), so the reader follows the reader ruling and ended runs are reachable.

**Architecture:** Every fix is selection, ordering or labelling of text the handoffs and the service already publish. Pure selection lives in `reportView.ts` and `publishedReport.ts`; components only draw. One service change adds ended runs to the run listing. No new dependency, no new analysis.

**Tech Stack:** React 19.3, TypeScript 5.9, Vitest 4 with Testing Library, Tailwind 4; Python (uv, pytest) for `react_frontend/`.

**Spec:**
- `docs/rulings/2026-11-11-reader-and-issuer-report.md` (decisions 3, 6; H1, H2, H3, H5; check 7; amendment 2026-11-12)
- `docs/rulings/2026-11-12-module-output-review-changes.md` (item 9, confidence)
- `src/deploy_vii/methods/cp8.md` (Limitations ledger, lines 181-193)
- `docs/design/react-module-coverage.md` (screen layout table)
- `AGENTS.md` (delivery adds no analysis; missing content stays an explicit gap)

## Findings addressed

| Review finding | What | Task | PR |
|---|---|---|---|
| 2 | Module codes on screen | 1 | 1 |
| 3 | App-written CP-1 lead sentence and relabelled measures | 2 | 1 |
| 4 | Published confidence score never shown | 3 | 1 |
| 5 | CP-8 limitations ledger missing from Changes | 5 | 2a |
| 6 | Missing or misordered reader passages shown silently | 6 | 2a |
| 1 | Overview omits other modules' bottom lines and run-wide limitations | 7 | 2b |
| 7 | Ended runs listed nowhere | 9 | 3 |
| 9 | "Approve summary" button approves nothing | 10 | 3 |

**Not in this plan (owner decisions):**
- Finding 8, resume from retained responses. It needs a new route that starts paid work; paid execution stays with the owner. No task here.
- Overview key charts (ruling H5 item 4). A chart descriptor carries only `title` and `table` (`apps/issuer-library/credit_os/handoff_fields.py:240-243`), not its catalogue id, so the page cannot tell which charts `docs/visualisations/catalogue.csv` places on Overview without guessing from titles. Needs the publisher to carry the id.

## Controller rulings (made before the first dispatch)

1. An unknown module id is shown as stored. A test pins that every module the run start can schedule has a plain name, so the fallback is unreachable for scheduled modules.
2. `Name (CP-x)` in handoff text is shown as `Name` on every page (amendment 2026-11-12). Superseded for bare codes by the reader ruling's amendment of 2026-11-16: on findings pages a standalone known module code is replaced by the module's name (`readerText`); a code in a register id, file name or path, and an unknown code, stay; the Evidence page and trace drawer keep `plainModuleNames`.
3. CP-1 metric tiles take the handoff's own row label. Selection of which tiles a page shows moves from label strings to a `key`.
4. `actionBias` on the Overview lead stays: it selects the module's own "Final Action Bias" word.
5. The Overview lead keeps Bottom line, Key findings and Contrary evidence (design spec of 15 November, later than H5). Its Limitations card is replaced by the run-wide list, which includes the lead's items.
6. The Overview lead candidates stay as coded (`reportView.ts:66`: CP-6, CP-2, CP-L10, and CP-1B on Earnings Update).
7. Confidence is drawn as one metric tile on the module page. The States 2 confidence scale is an unruled draft and is not built.
8. Ended runs come in a new `ended` key of `GET /connected/activity`, at most 20, never with spend, folders or file names (the listing's existing promise).
9. Run-start approval stays at the review step, where the summary and cap exist (`docs/rulings/2026-11-11-run-start-submit.md`). The Confirm step's button is renamed to what it does.

## Global Constraints

- The page derives nothing: no delta, total, ratio, ranking or rewritten sentence. Counting displayed rows for a group label is allowed.
- No stub or fake value stands in for real behaviour. No catch-all hides a failure unless the fail-open is documented and logged.
- Each task's test assertions below are its answer key. The implementer does not edit their expected values and does not weaken a comparison. If an assertion looks wrong, report BLOCKED.
- No new dependency. Kit parts come from `web/src/components/**` and `web/src/pages/library/parts/**`.
- Stored handoffs, routes, `href`s, download names and source file names do not change (amendment 2026-11-12: display only).
- Audit material (file names, hashes, ids, refs, registers) is drawn only on Evidence and in the trace drawer. One trace control per paragraph, row or figure.
- Missing is never zero: a missing value shows its reason, never `0`.
- Web commands run with cwd `web/`. Per task run only the affected test files; the full suite runs once per PR.
- Web gates per PR: `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run unused`, `npm run duplication`, `npm test`. Python gates per PR: `uv run python tools/quality_gate.py` and the affected pytest files (repo root).
- PR size: at most 800 changed lines, lock files excluded.
- Every task report ends with a `Not verified:` line.
- Agents: `mx-feature` implements; `mx-precise` reviews each task. Whole-branch review per PR: `/sweep refactoring discover changed-update`, then `mx-architect` running `adversarial-reviewer`. `confidence-review` and `rewrite-tournament` run once per PR on the branch diff.
- Branches merge only on the owner's instruction.

## Review Focus

1. A stored file name holding `(CP-1)` must be shown unchanged. Test in Task 1.
2. A snapshot or activity payload from an older service has no `confidence` and no `ended`. The page draws without them. Tests in Tasks 3 and 9.
3. A module with a retained output and a designated one: Overview uses the designated output only. Test in Task 7.
4. A run with no `record.steps`: module order falls back to the run's module list. Test in Task 7.
5. A limitations ledger row with a status word outside the four, or an empty cell, is still drawn. Test in Task 5.

---

## PR 1: display fidelity

### Task 1: Plain module names

**Files:**
- Modify: `web/src/pages/connected/api.ts:373-376`
- Modify: `web/src/pages/connected/publishedReport.ts` (new export)
- Modify: `web/src/pages/connected/ReportContent.tsx:33-41,60,144,152`
- Modify: `web/src/pages/connected/reportView.ts:20`, `web/src/pages/connected/report/Calendar.tsx:70`, `web/src/pages/connected/report/Evidence.tsx:110`
- Test: `web/src/pages/connected/api.test.ts`, `publishedReport.test.ts`, `ReportLibrary.design.test.tsx`; update the ten `(CP-x)` expectations in `ConnectedApp.test.tsx`, `report/Evidence.test.tsx`, `report/ScriptChecks.test.tsx`

**Interfaces:**
- Produces: `moduleName(id: string): string` returns the plain name, or `id` when unknown.
- Produces: `plainModuleNames(text: string): string` in `publishedReport.ts`.

- [ ] **Step 1: Write the failing tests**

```ts
// api.test.ts
it("names a module without its code", () => {
  expect(moduleName("CP-2D")).toBe("Liquidity");
  expect(moduleName("CP-1")).toBe("Financial foundation");
  expect(moduleName("CP-99")).toBe("CP-99");
});
it("has a plain name for every module the run start can schedule", () => {
  for (const { modules } of Object.values(PATHWAYS))
    for (const id of modules) expect(moduleName(id)).not.toMatch(/^CP-/);
});

// publishedReport.test.ts
it("shows a named upstream module without its code", () => {
  expect(plainModuleNames("Liquidity (CP-2D); calculation C-4")).toBe("Liquidity; calculation C-4");
  expect(plainModuleNames("Report (CP-1).pdf, page 3")).toBe("Report (CP-1).pdf, page 3");
  expect(plainModuleNames("The CP-2 view is unchanged")).toBe("The CP-2 view is unchanged");
});
```

In `ReportLibrary.design.test.tsx`, using the file's existing fixture and render helper, add one test per view (`#overview`, `#changes`, `#modules`, `#forecast`, `#evidence/summary`):

```ts
expect(document.body.textContent).not.toMatch(/\(CP-[A-Z0-9]+\)/);
```

Give the fixture one table cell `Liquidity (CP-2D)` and one Basis line `Basis: Financial foundation (CP-1)` so the test can fail.

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/api.test.ts src/pages/connected/publishedReport.test.ts src/pages/connected/ReportLibrary.design.test.tsx`
Expected: FAIL (`"Liquidity (CP-2D)"` received; `plainModuleNames` not exported).

- [ ] **Step 3: Implement**

- `moduleName` returns `MODULE_NAMES[id]` or `id`.
- `plainModuleNames` removes each ` (CP-<letters and digits>)` that is not followed by `.` and a word character.
- `richParts` applies `plainModuleNames` to its plain and bold parts, not to backtick code parts.
- The trace drawer's Basis node value and the Basis text at `report/Evidence.tsx:110` pass through `plainModuleNames`.
- Delete the three `.replace(/ \(CP-[^)]+\)$/, "")` calls, now redundant.

- [ ] **Step 4: Update the ten old expectations, run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Show module names without their codes"
```

### Task 2: CP-1 shows the module's own lead and labels

**Files:**
- Modify: `web/src/pages/connected/reportView.ts:74-224`
- Modify: `web/src/pages/connected/report/Modules.tsx:222-240`
- Modify: `web/src/pages/connected/ReportLibrary.tsx:126-134`
- Test: `web/src/pages/connected/reportView.test.ts`, `report/Modules.test.tsx`

**Interfaces:**
- Produces: `type MetricKey = "liquidity" | "freeCashFlow" | "leverage" | "interestCover" | "netDebt" | "principal" | "maturities"`
- Produces: `foundationMetrics(entry, catalogue): { key: MetricKey; metric: Metric; line?: number }[]`

- [ ] **Step 1: Write the failing tests**

In `reportView.test.ts` ("reader data fidelity"), change the two existing label expectations:

```ts
// "binds exact zero and refuses ambiguous metrics..."
{ key: "liquidity", metric: { label: "Total liquidity at period end", value: { text: "$0m" } }, line: 12 }
// "keeps a zero maturity amount only for its stated forward window and currency"
{ key: "maturities", metric: { label: "Maturities from 2026-07-01 to end-2027", value: { text: "$0m" } }, line: 46 }
```

and add, with the file's `table`, `foundation`, `period`, `headers` and `date`:

```ts
it("labels each CP-1 tile with the handoff's own words", () => {
  const measures = table(
    "Financials and credit metrics",
    headers,
    [
      ["Total liquidity at period end", "310", "US$m"],
      ["Free cash flow (operating cash flow less capex), twelve months", "42", "US$m"],
      ["(Total debt plus financing obligations) / EBITDA", "5.4", "x"],
      ["EBITDA / (cash interest for debt plus cash rent recorded as interest)", "2.1", "x"],
      ["Net debt at period end", "1200", "US$m"],
    ],
    10,
  );
  const debt = table(
    "Debt principal to carrying value",
    ["Period", "Contractual principal", "Discount", "Carrying value", "Reporting unit"],
    [["2026-12-31", "1500", "20", "1480", "US$m"]],
    20,
  );
  const rows = foundationMetrics(foundation([period, measures, debt]), date);
  expect(rows.map(({ key, metric }) => [key, metric.label, metric.note])).toEqual([
    ["liquidity", "Total liquidity at period end", "2026-12-31"],
    ["freeCashFlow", "Free cash flow (operating cash flow less capex), twelve months", "2026-12-31"],
    ["leverage", "(Total debt plus financing obligations) / EBITDA", "2026-12-31"],
    ["interestCover", "EBITDA / (cash interest for debt plus cash rent recorded as interest)", "2026-12-31"],
    ["netDebt", "Net debt at period end", "2026-12-31"],
    ["principal", "Contractual principal", "2026-12-31"],
  ]);
});
```

In `report/Modules.test.tsx`, for a CP-1 entry whose Bottom line passage starts `Leverage is high but liquidity covers the next two years.`:

```ts
expect(screen.queryByText(/Lease-adjusted gross leverage is/)).toBeNull();
expect(screen.getByText("Leverage is high but liquidity covers the next two years.")).toBeVisible();
```

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/reportView.test.ts src/pages/connected/report/Modules.test.tsx`
Expected: FAIL (`"Available liquidity"` received; the app sentence is found).

- [ ] **Step 3: Implement**

- `creditMetrics` becomes `[key, source label, unit]`; `metricBinding` takes the key and uses the source label. `principal` labels with the column header `Contractual principal`; `maturityTotal` labels with the calculation row's text. Notes are the date only.
- `Modules.tsx`: delete the `leverage` lookup and the `judgement` prop on CP-1; select tiles by key `netDebt`, `principal`, `interestCover`.
- `ReportLibrary.tsx` Overview: select tiles by key `liquidity`, `freeCashFlow`, `leverage`, `maturities`.

- [ ] **Step 4: Run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Lead CP-1 with its own bottom line and the handoff's measure labels"
```

### Task 3: Confidence score on the module page

**Files:**
- Modify: `web/src/pages/connected/publishedReport.ts:10-25,351-352`
- Create: `web/src/pages/connected/report/Confidence.tsx`
- Modify: `web/src/pages/connected/report/Modules.tsx` (`ModuleFindings` and the generic module branch)
- Test: `web/src/pages/connected/report/Modules.test.tsx`, `publishedReport.test.ts`

**Interfaces:**
- Produces: `Output.confidence?: { value: number; band: string } | { missing: string }` (as published by `apps/issuer-library/credit_os/store.py:761-768`).
- Produces: `ModuleConfidence({ snapshot, run, entry, entryIndex }): ReactNode`, null when the output has no `confidence`.

- [ ] **Step 1: Write the failing tests**

```tsx
// report/Modules.test.tsx: a CP-2 entry with a "Confidence inputs" table under Findings
it("shows the published confidence score with its band", () => {
  renderModule({ confidence: { value: 72, band: "Medium" } });
  const tile = screen.getByText("Confidence score").closest("li");
  expect(tile).toHaveTextContent("72");
  expect(tile).toHaveTextContent("Medium");
  expect(within(tile!).getByRole("button", { name: "Show sources for this figure" })).toBeVisible();
  expect(screen.queryByRole("heading", { name: "Confidence inputs" })).toBeNull();
});
it("shows why there is no score", () => {
  renderModule({ confidence: { missing: "The confidence inputs could not be read." } });
  expect(screen.getByText("The confidence inputs could not be read.")).toBeVisible();
});
it("draws nothing for a run that predates the score", () => {
  renderModule({});
  expect(screen.queryByText("Confidence score")).toBeNull();
});
```

(`renderModule` is a local helper over the file's existing render; it spreads its argument into the CP-2 output.)

In `publishedReport.test.ts`: `classifySections` gives a level-3 `Confidence inputs` section under `Findings` the role `registers`.

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/report/Modules.test.tsx src/pages/connected/publishedReport.test.ts`
Expected: FAIL (no "Confidence score").

- [ ] **Step 3: Implement**

- Add the `confidence` field to `Output`; add `confidence inputs` to `REGISTERS`.
- `ModuleConfidence` draws `MetricGrid` with one record: label `Confidence score`; value `String(value)` with note `band`, or a gap cell (`{ kind: "gap", reason: missing }`); `line` is the line of the handoff's `Confidence inputs` table, so the tile's trace opens those inputs. With no such table, no trace control.
- `Modules.tsx` puts `ModuleConfidence` first in `afterBottomLine` for every module page.

- [ ] **Step 4: Run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Show the published confidence score on the module page"
```

### Task 4 (PR 1 close): gates, reviews, record

- [ ] Run the web gates listed in Global Constraints; all exit 0.
- [ ] Run `confidence-review` and `rewrite-tournament` (post-edit) on the PR diff.
- [ ] Run `/sweep refactoring discover changed-update`, then the `mx-architect` adversarial review. Record both verdicts and report paths in the PR body.
- [ ] Fidelity check (AGENTS.md): open the synthetic Northbridge report (`npm run proof:connected`) and compare the CP-1 tiles, the module names and the confidence tile against the handoffs in `proof/handoffs/`. The coordinator adds one entry to `VERIFICATION.md` with its scope at merge.

---

## PR 2: reader composition (branch from `main` after PR 1 merges)

Refreshed 2026-11-16 against the merged head `242d6633` (`main` at `915b0f79` plus PR 1). Findings 5, 6 and 1 were re-checked there and still hold. What moved under this section since the plan was written:

- `findingBlocks` (`ReportContent.tsx:372`) now takes `chartsDrawn` and filters register sections through `registerBlocks(section, entry)` (`:329`); the CP-6 exception lives there.
- Coded sections' tables go to a "Statements and records" card (`recordSections`, `RecordsCard`), which links to Evidence.
- `findingsLayout` (`:525`) takes `chartsDrawn`. `FindingParagraph` and `plainText` are exported. Section headings are drawn through `drawingTitle`.
- `GapPanel` takes `{ reason, role? }`.
- PR 1 added `plainModuleNames` and `CONFIDENCE_INPUTS` (`publishedReport.ts`), `MetricKey`, and `TILE_KEYS` in `ReportLibrary.tsx`.

Carried from PR 1's reviews, binding on every task here:

- Any handoff text a new component draws passes through `richParts` or `plainModuleNames`. A new aria-label or trace-control name built from handoff text does too.
- Every new render test asserts a marker that exists only when the fixture's content is drawn, so it cannot pass on an empty view.
- Each wrap or branch added gets a test that fails without it.

**Size:** PR 1 reached 856 lines against the 800 cap. PR 2 is therefore two pull requests: **PR 2a** is Tasks 5 and 6 with the close in Task 8; **PR 2b** is Task 7 with its own close, branched from `main` after 2a merges.

### Task 5: CP-8 limitations ledger on Changes

**Files:**
- Modify: `web/src/pages/connected/ReportContent.tsx:329-342` (`registerBlocks`)
- Modify: `web/src/pages/connected/report/ModuleTable.tsx:195-205` (`typedModuleTable`)
- Test: `web/src/pages/connected/report/Changes.test.tsx`, `reportView.test.ts`

**Interfaces:**
- Consumes: `typedModuleTable(module, title, table, traceAt)`.
- Produces: a typed block for module `CP-8`, title `Limitations ledger`.

- [ ] **Step 1: Write the failing tests**

Fixture: a selected CP-8 entry with, under `Findings`, a level-3 section `Limitations ledger` and the table

| Earlier ref | Current ref | Limitation | Status | What closed it |
|---|---|---|---|---|
| E1 | C1 | Segment margins are not disclosed | Remaining | — |
| E2 | — | Revolver terms were unavailable | Closed | Amended credit agreement supplied |
| — | C2 | Hedge book not provided | New | — |
| E3 | — | Lease schedule not reconciled | Parked |  |

```tsx
// report/Changes.test.tsx
const ledger = screen.getByRole("region", { name: "Limitations" });
const groups = within(ledger).getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
expect(groups).toEqual(["Closed (1)", "Remaining (1)", "New (1)", "Parked (1)"]);
expect(within(ledger).getByText("Revolver terms were unavailable")).toBeVisible();
expect(within(ledger).getByText("Amended credit agreement supplied")).toBeVisible();
expect(within(ledger).getByText("Lease schedule not reconciled")).toBeVisible();
expect(within(ledger).queryByText(/^(E1|E2|E3|C1|C2)$/)).toBeNull();
expect(within(ledger).getAllByRole("button", { name: /^Show sources for/ })).toHaveLength(4);
```

In `reportView.test.ts`: `findingBlocks` returns the CP-8 `Limitations ledger` section, and still returns nothing for a CP-2 section headed `Gap ledger`.

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/report/Changes.test.tsx src/pages/connected/reportView.test.ts`
Expected: FAIL (no region named "Limitations").

- [ ] **Step 3: Implement**

- `registerBlocks`: return the reader blocks of a CP-8 entry's `Limitations ledger` section, beside the existing CP-6 exception. `recordSections` then no longer lists it under "Statements and records"; assert that in the Changes test (`queryByRole("link", { name: "Limitations ledger" })` is null).
- `typedModuleTable`: for CP-8 `Limitations ledger`, a `<section aria-label="Limitations">` with one group per Status, in the order Closed, Remaining, New, No longer stated, then any other status in table order. Group heading: `<status> (<rows in group>)`. Each row: the Limitation cell; for a non-empty, non-`—` "What closed it" cell, that text beneath; one trace control (`traceAt(row.line)`). Cell text is drawn with `richParts`. The two ref columns are not drawn. Follow the layout of `readiness()` in the same file (`ModuleTable.tsx:33`).

- [ ] **Step 4: Run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Show CP-8's limitations ledger on Changes"
```

### Task 6: Reader passages in order, with a gap for a missing one

**Files:**
- Modify: `web/src/pages/connected/publishedReport.ts:354-359` (export `PASSAGES`, new function)
- Modify: `web/src/pages/connected/ReportContent.tsx:525-554` (`findingsLayout`) and `:732-747` (the `ReportFindings` return)
- Test: `web/src/pages/connected/publishedReport.test.ts`, `report/Modules.test.tsx`

**Interfaces:**
- Produces: `PASSAGES` (exported, the four headings in order).
- Produces: `missingPassages(entry: OutputEntry): string[]`.

- [ ] **Step 1: Write the failing tests**

```ts
// publishedReport.test.ts; passage(heading, text) builds a level-3 section under Findings
const CONTRARY = "Contrary evidence and what would change the view";
it("lists the reader passages a prose module did not write", () => {
  expect(missingPassages(entry("CP-2", ["Bottom line", "Limitations"]))).toEqual([
    "Key findings",
    CONTRARY,
  ]);
});
it("asks a data module for its bottom line only", () => {
  expect(missingPassages(entry("CP-1", ["Bottom line"]))).toEqual([]);
  expect(missingPassages(entry("CP-1C", ["Key findings"]))).toEqual(["Bottom line"]);
});
it("asks a blocked module for nothing more", () => {
  expect(missingPassages(entry("CP-2", ["Bottom line"], "Not assessable: no accounts."))).toEqual([]);
});
it("does not judge an earlier-format handoff", () => {
  expect(missingPassages(entry("CP-2", []))).toEqual([]);
});
```

```tsx
// report/Modules.test.tsx: CP-2 handoff with sections in the order Limitations, Bottom line, Key findings
const headings = screen.getAllByRole("heading").map((h) => h.textContent);
const at = ["Bottom line", "Key findings", CONTRARY, "Limitations"].map((name) => headings.indexOf(name));
expect(at.every((index) => index >= 0)).toBe(true);
expect(at).toEqual([...at].sort((a, b) => a - b));
const gap = screen.getByRole("heading", { name: CONTRARY }).closest("section");
expect(gap).toHaveTextContent("Not established for this run");
```

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/publishedReport.test.ts src/pages/connected/report/Modules.test.tsx`
Expected: FAIL (`missingPassages` not exported; headings in handoff order).

- [ ] **Step 3: Implement**

- `missingPassages`: with no reader passage present, `[]`. For a blocked entry or a data module (`CP-0`, `CP-PARSE`, `CP-1`, `CP-1C`), `["Bottom line"]` less what is present. Otherwise `PASSAGES` less what is present.
- `findingsLayout`: the four passages first, in `PASSAGES` order, then every other section in handoff order. The Overview pairing of Key findings with Contrary evidence is unchanged.
- `findingsLayout` and the Overview filter at `:534-539` use the exported `PASSAGES`, not a second copy of the four headings.
- `ReportFindings` (module pages and Changes, not Overview): at the place of each missing passage, a card with the passage name as `h2` and `GapPanel` (`@/components/gap/GapPanel`) with reason `Not established for this run. The module's handoff has no such passage.`
- The "Statements and records" card stays last, after every section.

- [ ] **Step 4: Run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Order the reader passages and show a gap for a missing one"
```

### Task 7: Overview carries every module's bottom line and the run's limitations

Refreshed 2026-11-16 against `main` at `bbb5b3dd` (PR 2a merged as #18, module codes as #23). Module-written text drawn on Overview goes through `readerText` (`publishedReport.ts:21`); components that use `richParts` pass `readerText` as its second argument. `moduleCodes.cases.json` is an answer key and is not edited.

**Files:**
- Modify: `web/src/pages/connected/reportView.ts` (three new exports)
- Create: `web/src/pages/connected/report/OverviewModules.tsx`
- Modify: `web/src/pages/connected/ReportLibrary.tsx:117-230` (`Overview`)
- Modify: `web/src/pages/connected/ReportContent.tsx:541-570` (`findingsLayout`: Overview no longer draws the lead's Limitations)
- Test: `web/src/pages/connected/reportView.test.ts`, `ReportLibrary.design.test.tsx`

**Interfaces:**
- Consumes: `moduleState`, `blocked`, `passages`, `readParagraph`, `containsReference`, `readerText`, `evidencePath`, `PublishedSource`, `PASSAGES` (Task 6).
- Produces:
  - `moduleOrder(run: PublishedRun): string[]`
  - `moduleBottomLines(view: ReportView, run: PublishedRun): { id: string; name: string; state: ModuleState; entry: OutputEntry; text: string | null; line: number | null }[]`
  - `runLimitations(view: ReportView, run: PublishedRun): { id: string; name: string; entry: OutputEntry; text: string; line: number }[]`
  - `ModuleBottomLines({ run, rows })`, `RunLimitations({ run, rows })`

- [ ] **Step 1: Write the failing tests**

```ts
// reportView.test.ts
it("orders modules as the run ran them, then any the record does not name", () => {
  expect(moduleOrder(run({ steps: ["CP-1", "CP-0", "CP-1"], modules: ["CP-0", "CP-1", "CP-2"] })))
    .toEqual(["CP-1", "CP-0", "CP-2"]);
  expect(moduleOrder(run({ steps: null, modules: ["CP-0", "CP-2"] }))).toEqual(["CP-0", "CP-2"]);
});
it("gives one bottom line per module that ran, other than the lead", () => {
  // CP-2 is the lead. CP-2D is blocked. CP-1 has a retained output and a designated one.
  const rows = moduleBottomLines(view, published);
  expect(rows.map((row) => [row.id, row.state, row.text])).toEqual([
    ["CP-0", "Delivered", "The documents cover the last three financial years."],
    ["CP-1", "Delivered", "Leverage is high but liquidity covers the next two years."],
    ["CP-2D", "Not assessable", "Not assessable: no liquidity schedule was supplied."],
  ]);
});
it("lists each limitation of the run once, in module order", () => {
  // CP-1 writes A and B. CP-2 writes A again with other case, punctuation and a Basis line, then C.
  expect(runLimitations(view, published).map((row) => [row.id, row.text])).toEqual([
    ["CP-1", "Segment margins are not disclosed, so margin trends are group-level only."],
    ["CP-1", "The 2026 audit is not yet signed."],
    ["CP-2", "No covenant compliance certificate was supplied."],
  ]);
});
```

CP-2's repeated item in the fixture is the block `- segment margins are NOT disclosed; so margin trends are group-level only!\nBasis: Financial foundation (CP-1)`. The retained CP-1 output's bottom line is `An earlier draft.` and must not appear.

```tsx
// ReportLibrary.design.test.tsx, #overview
const lines = screen.getByRole("region", { name: "Bottom line by module" });
expect(within(lines).getByRole("link", { name: "Liquidity" })).toHaveAttribute("href", "#modules/CP-2D");
expect(within(lines).getByText("Not assessable")).toBeVisible();
const limits = screen.getByRole("region", { name: "Limitations" });
expect(within(limits).getAllByRole("listitem").length).toBe(runLimitations(view, run).length);
expect(within(limits).getAllByRole("button", { name: /^Show sources for/ }).length).toBe(
  within(limits).getAllByRole("listitem").length,
);
```

- [ ] **Step 2: Run them and see them fail**

Run: `npx vitest run --coverage.enabled=false src/pages/connected/reportView.test.ts src/pages/connected/ReportLibrary.design.test.tsx`
Expected: FAIL (functions not exported; no such region).

- [ ] **Step 3: Implement**

- `moduleOrder`: module ids in order of first appearance in `run.record.steps`, then the remaining keys of `run.modules`.
- `moduleBottomLines`: for each module in `moduleOrder` with a designated entry, except the lead's module: `text` is the body of the first text block of its `Bottom line` passage (`readParagraph`, `**` and backticks removed, as `BottomLine` does), else `output.summary.bottomLine`, else `null`. A text for which `containsReference` is true becomes `null`. The text is passed through `readerText`. `line` is that block's line.
- `runLimitations`: for each module in `moduleOrder` (lead included) that is not blocked, each text block of its `Limitations` passage. Normalise for comparison only (lower case, Basis line dropped, punctuation removed, whitespace collapsed; ruling check 7); the first occurrence is kept and shown as written, less its Basis line and any `Name (CP-x)` code (`readParagraph`, then `readerText`). An item for which `containsReference` is true is shown as a link, "Read this limitation in Evidence", as `FindingParagraph` does.
- `ModuleBottomLines`: `<section aria-label="Bottom line by module">`; per row the module name as a link to `#modules/<id>`, `StatusBadge set="Module state"`, the text; a link "Read this bottom line in Evidence" when the bottom line holds a reference (`referenced`); `GapPanel` "Not established for this run" only when the module wrote none, and `PublishedSource href={evidencePath(run.folder, entry, line)}`.
- `RunLimitations`: `<section aria-label="Limitations">`, a list; per item the text, the module name, and `PublishedSource`. Empty list: one sentence that does not assert absence, "No limitation is listed on this page for this run. Each module's page shows what it recorded." A module with no `Limitations` passage and a `Reader summary` contributes its `summary.limitation` (earlier-format runs); summary texts are read through `readParagraph`.
- `Overview`: after the lead and the figures, `ModuleBottomLines`, then `RunLimitations`, then "Dates to watch". On Overview `findingsLayout` keeps every passage slot except `Limitations` (its `slotLines` filter); the pairing of Key findings with Contrary evidence is unchanged.
- Add to the Overview design test: the fixture's CP-1 bottom line holds `Liquidity (CP-2D)`, and the "Bottom line by module" region shows `Liquidity` and no `CP-`. One limitation in the fixture holds a bare `CP-2D`; the "Limitations" region shows `Liquidity` there and no `CP-`.

- [ ] **Step 4: Run the affected files**

Run: `npx vitest run --coverage.enabled=false src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "Overview: one bottom line per module and the run's limitations"
```

### Task 8 (close of PR 2a, and again of PR 2b): gates, reviews, record

Same four steps as Task 4, run once for each of the two pull requests. Run `npm run unused` after Task 7 in particular: it adds a file and three exports. Fidelity check scope: Overview's module rows and limitations, a module page's passage order, and Changes' ledger, each against the Northbridge handoffs.

---

## PR 3: run pages (branch from `main` after PR 2 merges)

Refreshed 2026-11-16 against `main` at `4be1e30d` (Start's PR D merged as #31 and #30). PR 3 is Task 9 only.

- Task 9 still applies: `react_frontend/run_activity.py:130-161` lists only running and queued runs.
- Task 10 is dropped. The Start flow no longer has a Confirm step: `FORM_STEPS` (`StartRun.tsx:52-56`) is Documents, Purpose and More context, whose buttons are "Continue to purpose", "Continue to context" and "Review run", and `ConnectedApp.test.tsx:137-140` already asserts that no "Approve summary" button exists. `docs/react-workflow.md:115` still says "Approve summary"; that file belongs to the Start work and is not changed here.
- Keep to `react_frontend/run_activity.py`, the run types in `api.ts`, `RunActivity.tsx` and their tests. `ReportLibrary.tsx`, `reportView.ts`, `publishedReport.ts`, `report/**` and `web/scripts/connected-proof.mjs` are another session's.

### Task 9: Ended runs on Run activity

**Files:**
- Modify: `react_frontend/run_activity.py:130-161` (`listing`)
- Modify: `web/src/pages/connected/api.ts:125-134` (`LiveRun`, `Activity`)
- Modify: `web/src/pages/connected/RunActivity.tsx`
- Test: `tests/test_react_frontend.py`, `web/src/pages/connected/ConnectedApp.test.tsx`

**Interfaces:**
- Produces: `GET /connected/activity` gains `"ended": [{id, issuer_name, pathway, status, reason, ended_at, submitted_by}]`.
- Produces: `type EndedRun = Pick<Run, "id" | "issuer_name" | "pathway" | "reason"> & { status: "failed" | "capped" | "rejected" | "interrupted"; ended_at: string; submitted_by: string }`; `Activity.ended?: EndedRun[]`.

- [ ] **Step 1: Write the failing tests**

```python
# tests/test_react_frontend.py
def test_activity_list_shows_ended_runs_without_spend_or_file_names(hosted: _Server) -> None:
    # Save four records with runs.save, as the test above does:
    #   c-capped   capped    ended_at 2026-10-31T12:05:00Z  reason "Spending cap reached"
    #   d-failed   failed    ended_at 2026-10-31T12:10:00Z  reason "Provider error"
    #   e-finished finished  ended_at 2026-10-31T12:20:00Z
    #   a-running  running
    listing = json.loads(raw)
    assert set(listing) == {"updated", "held", "runs", "ended"}
    assert [run["id"] for run in listing["ended"]] == ["d-failed", "c-capped"]
    assert set(listing["ended"][0]) == {
        "id", "issuer_name", "pathway", "status", "reason", "ended_at", "submitted_by",
    }
    assert listing["ended"][1]["reason"] == "Spending cap reached"
    assert [run["id"] for run in listing["runs"]] == ["a-running"]


def test_activity_list_keeps_the_twenty_latest_ended_runs(hosted: _Server) -> None:
    # 25 failed records, ended_at 12:00 to 12:24.
    assert len(listing["ended"]) == 20
    assert listing["ended"][0]["ended_at"] == "2026-10-31T12:24:00Z"
```

Update the key-set assertion in `test_activity_list_shows_runs_in_progress_without_spend_or_file_names` to include `"ended"`.

```tsx
// ConnectedApp.test.tsx, beside the existing /runs tests
it("lists a run that ended without a report", async () => {
  // activity: runs [], ended [{ id: "c-capped", issuer_name: "Harbour Packaging",
  //   pathway: "credit_snapshot", status: "capped", reason: "Spending cap reached",
  //   ended_at: "2026-10-31T12:05:00Z", submitted_by: "analyst" }]
  const ended = await screen.findByRole("region", { name: "Ended without a report" });
  expect(within(ended).getByRole("link", { name: "Harbour Packaging" })).toHaveAttribute(
    "href",
    "/run/c-capped",
  );
  expect(within(ended).getByText("Capped")).toBeVisible();
  expect(within(ended).getByText("Spending cap reached")).toBeVisible();
  expect(screen.queryByText("No run in progress")).toBeNull();
});
it("draws the list from a service that sends no ended runs", async () => {
  // activity without the "ended" key
  expect(await screen.findByText("No run in progress")).toBeVisible();
  expect(screen.queryByRole("region", { name: "Ended without a report" })).toBeNull();
});
```

- [ ] **Step 2: Run them and see them fail**

Run (repo root): `uv run pytest tests/test_react_frontend.py -k "activity_list" -q`
Run (`web/`): `npx vitest run --coverage.enabled=false src/pages/connected/ConnectedApp.test.tsx`
Expected: FAIL (`"ended"` missing; no such region).

- [ ] **Step 3: Implement**

- `listing`: `ended` is the records whose status is `failed`, `capped`, `rejected` or `interrupted`, newest first by `ended_at or claimed_at` then id, cut to `_ENDED_SHOWN = 20`, with exactly the seven fields. The docstring says what is and is not sent.
- `RunActivity`: a third `Group`, "Ended without a report": a table of Issuer (link to `/run/<id>`), Pathway, State (`StatusBadge set="Run states"`), Ended (`stamp`), Reason. The tally gains `Ended`. The "No run in progress" empty state shows only when running, waiting and ended are all empty.

- [ ] **Step 4: Run both test files and the Python gate**

Run (repo root): `uv run pytest tests/test_react_frontend.py tests/test_react_run_activity.py -q` and `uv run python tools/quality_gate.py`
Run (`web/`): `npx vitest run --coverage.enabled=false src/pages/connected/ConnectedApp.test.tsx`
Expected: PASS, exit 0.

- [ ] **Step 5: Commit**

```bash
git add react_frontend/run_activity.py tests/test_react_frontend.py web/src/pages/connected
git commit -m "List runs that ended without a report on Run activity"
```

### Task 10: dropped

See the note at the head of this section.

### Task 11 (PR 3 close): gates, reviews, record

Same four steps as Task 4, plus the Python gates. Fidelity check scope: Run activity's ended group against the saved run records.

## Not verified

- `confidence` reaching `/connected/snapshot` was confirmed by reading the code only (`store.py:761-768,851` writes it; `react_frontend/sources.py:181-185` passes each output whole), not against a served snapshot.
- The module tests' existing render helpers and fixtures were not read line by line; each task names the file and the assertions, and the implementer fits them to the helper in place.
- The 800-line size of each PR is an estimate.
- GitNexus has no index for this repository, so no blast radius was computed.
