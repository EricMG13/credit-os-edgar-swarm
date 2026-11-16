# Start a Run: One Review, Grouped Limits, Typed Rows — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the connected Start a run flow as four steps with one review, where limits are grouped decisions, credit inputs are typed rows and no error is ever off-screen.

**Architecture:** `web/src/pages/connected/StartRun.tsx` keeps the flow's state and service calls. New focused modules under `web/src/pages/connected/start/` take the review sheet, the limit grouping (a pure function), the typed row editor and the readiness panel. The service, its API and the submit path are not changed.

**Tech Stack:** React 19.3, TypeScript 5.9, Tailwind 4, react-aria-components 1.22, the installed Untitled UI components, Vitest 4 with Testing Library, Playwright 1.62 for the browser proof.

**Spec:** `.impeccable/surfaces/web-src-pages-connected-startrun-tsx.md` (the confirmed design brief). Product record: `PRODUCT.md`. Critique: `.impeccable/critique/2026-11-16T08-39-46Z__web-src-pages-connected-startrun-tsx.md`.

## Global Constraints

- No new dependency. No change to the Python service, its API, the summary data or the submit request.
- The approval checkbox keeps its exact name: `Approve: I have read this summary and want this run started`.
- The confirmation dialog keeps its exact titles, text and action names, paid and synthetic.
- The spending cap is the pathway's cap from the service (`caps`, `Summary.cap`; ruling `docs/rulings/2026-11-15-pathway-tiers-and-caps.md`); the page never computes it. `capForPathway`, `requireSummaryCap`, the `X-Shown-Cap` header, `invalidateReview` and the pathway/cap re-check in submit are not changed by any task.
- Line references in Tasks 3–8 were written against `63d7edd`; main has since gained the per-pathway caps (`ed26598a`) and split `StartRun.tsx` into hooks and panels (`c88773d8`). Locate by symbol, not by line. A carried acceptance (Task 4) is still cleared wherever `invalidateReview()` runs.
- Submit and the approval stay disabled until every item whose outcome is `will_refuse`, `gap`, `limited` or `check` has its id in the accepted set. Grouping changes how ids are accepted, never which ids are required.
- The page ships `style-src 'self'`: no `style` attribute and no inline script. Tailwind classes only.
- No module code (`CP-…`), run id or launcher flag is drawn in the Start flow below the Advanced level. Advanced controls keep codes (`Committee decision (CP-6)`).
- The older static run pages under `web/src/pages/run/start` keep their behaviour. Three shared components change, by optional prop or a drawn-indicator fix only: `Stepper` (Task 1), `SubmitConfirmation` and `PurposeCards` (Task 7).
- Run tests from the repository root: `npm --prefix web exec -- vitest run --root web <path relative to web/>`.
- Every task: no stub or fake value standing in for real behaviour; no catch-all that hides a failure; the tests named in a task are its answer key and are not edited to pass; an existing assertion is changed only where this plan says so. The tests in this plan were written without being run: an implementer may correct a test's setup (fetch entries, imports, waits) to make it runnable, and may not weaken or remove an assertion; any such correction is named in the task report. Every task report ends with a `Not verified:` line.

## Pre-flight record

- **Deviation from the brief (better data found).** The brief groups limits by "the same fix line" because the page's `Summary` type shows no link between a cause and its knock-ons. The service already sends one: every item carries `inherited_from` (producer module codes) and `counted` (`src/deploy_workflow/run_expectations.py:254-256`, `:709-731`); the TypeScript type omits them. This plan groups exactly by `inherited_from` and keeps the same-fix merge for cause items. Still no service change.
- **Brief ruling 1 resolved.** The run record keeps the reviewed inputs (`GET /api/runs/<id>/inputs`, `api.ts:174`), so the "Reviewed inputs" JSON is removed from the page.
- **Brief ruling 2 narrowed.** The sentence "Will refuse wording open until A-live." is in a rule reason tied to a frozen answer key (`tests/fixtures/run-expectations/outcome-key.json:525`). It is not edited here; it goes to the owner as a finding. Lookup lines are cleaned on the page (Task 2), not in Python.
- **Prior art.** Queries: `gh search code "rowShell" --owner EricMG13` (hits: `docs/templates/context-form.html` in this repository and its ancestors); `gh search repos "react repeatable rows field array editor"` (no results). Decision: **adapt**. Task 5 ports the field labels, hints, placeholders, options, required flags and row maxima from `docs/templates/context-form.html:947-992` and `:1144-1149`; that file is the answer key for the field tables. An empty public search does not prove nothing exists.
- **Library docs.** No public-library API is used that the repository does not already call (`RadioGroup`, `DialogTrigger`, native inputs). No doc fetch was needed.
- **GitNexus.** `gitnexus status`: repository not indexed. Impact was read from `grep`: `moduleName` has 17 call sites and is not changed; `Stepper`, `PurposeCards` and `SubmitConfirmation` are shared with `web/src/pages/run/start`.
- **Baseline.** `ConnectedApp.test.tsx` and `sets.test.ts`: 22 tests pass at `63d7edd`.

## Delivery: four pull requests, in order

All four touch `StartRun.tsx`, so they run one after another in one session. Each stays under 800 changed lines (`git diff --numstat origin/main...HEAD`), ends with `npm --prefix web run gates` and `npm --prefix web run proof:connected`, and takes the reviews in "Reviews" below.

| PR | Tasks | Delivers |
|---|---|---|
| A | 1, 2 | Four steps; a plain review of what will run |
| B | 3, 4 | Limits as grouped decisions |
| C | 5 | Typed rows for facilities, quotes, ratings, research questions |
| D | 6, 7, 8 | Errors on their fields; focus, announcements, readiness panel; verification |

## File structure

| File | Responsibility |
|---|---|
| `web/src/pages/connected/StartRun.tsx` (modify) | Flow state, service calls, step forms |
| `web/src/pages/connected/start/plain.ts` (create) | Plain-language text: codes to names, lookup lines |
| `web/src/pages/connected/start/ReviewSheet.tsx` (create) | The review: what will run, limits to decide |
| `web/src/pages/connected/start/limits.ts` (create) | Pure grouping of readiness items into decisions |
| `web/src/pages/connected/start/rows.ts` (create) | Field tables for the four row kinds |
| `web/src/pages/connected/start/RowEditor.tsx` (create) | Repeatable typed rows |
| `web/src/pages/connected/start/StartReadiness.tsx` (create) | Readiness panel for this flow |
| `web/src/pages/connected/api.ts` (modify) | `ReadinessItem` type, `moduleTitle` |
| `web/src/pages/run/start/Stepper.tsx` (modify) | Optional `onSelect`; column count from step count |
| `web/src/components/status/sets.ts`, `docs/design/design-system.md` (modify) | New status set "Run limits" |
| `web/scripts/connected-proof.mjs` (modify) | Browser proof follows the new step and control names |

## Review Focus

Each line has its test in the task named.

1. **A summary without `inherited_from` or `counted`** (older fixtures, the page's own date limit): every such item still needs its own acceptance. Task 3.
2. **An inherited item whose producer cannot be found, or a cycle between producers:** it is never dropped; it becomes its own decision and grouping terminates. Task 3.
3. **An acceptance carried when it should not be:** same id with a changed reason, or after the issuer is changed, is not carried. Task 4.
4. **Prior-run row data with unknown keys, numeric values or a non-array value:** passes to the service unchanged when not edited; unknown keys survive an edit. Task 5.
5. **Paid mode with grouped limits:** Submit stays disabled until every member id of every group is accepted and the summary is approved. Task 4.

## Reviews (owner's global rules)

- Implementers: `mx-feature`. Per-task review: `mx-precise`. Task 4 changes what enables a paid Submit, so its diff also gets `mx-adversary`.
- Per PR, before merge: `/sweep refactoring discover changed-update`, then the whole-branch review (`mx-architect` running `adversarial-reviewer`), `confidence-review`, `rewrite-tournament` (post-edit) and `ponytail-review`, once each on the PR diff.
- The coordinator writes `VERIFICATION.md` at merge (Task 8) and merges only on the owner's instruction.

---

## PR A — delivered

Merged as EricMG13/credit-os2#6 (`76ed9dde`, 2026-11-16). Tasks 1 and 2 are done; their step text is removed from this plan and the pull request is the record. What later tasks rely on:

- `web/src/pages/run/start/Stepper.tsx`: `Stepper({ step, steps?, onSelect? })`, `onSelect?: (key: string) => void`; completed steps are buttons named `Go back to {title}` when `onSelect` is passed.
- `web/src/pages/connected/StartRun.tsx`: `type FormStep = "documents" | "purpose" | "context"`; `STEPPER_STEPS`, `STEP_TOTAL`; `editReviewedInputs(target)` clears the review and goes to a step (stepper and Edit buttons, both closed while busy and after an uncertain submit). The file is now hooks (`useIntakeIdentityState`, `useIntakeDocumentsState`, `useIntakeRunOptions`, `useIntakeReviewState`) and panels (`StepFields`, `IntakePanels`, `ReadinessPanel`, `ReviewConfirmation`, `InputStepForm`).
- `web/src/pages/connected/api.ts`: `moduleTitle(id: string): string` (the name without the code; an unknown id unchanged).
- `web/src/pages/connected/start/plain.ts`: `plainText`, `lookupSentence`, `changesSentence`, `comparisonCaveat`, and the form constants `PURPOSES`, `LEVELS`, `storedName`, `documentDescription`.
- `web/src/pages/connected/start/ReviewSheet.tsx`: `needsCheck(item)` (gates Submit) and

```ts
export function ReviewSheet(props: {
  review: { answers: Answers; summary: Summary };
  accepted: ReadonlySet<string>;
  onAccept: (ids: readonly string[], checked: boolean) => void;
  onEdit: (step: "documents" | "purpose" | "context") => void;
  disabled: boolean;
}): JSX.Element;
```

- Test helpers in `ConnectedApp.test.tsx`: `advanceToContext()`, `reviewSheet(summary)`.

---

## PR B

Carried in from PR A's reviews (2026-11-16), owned by Task 4:
- The review sheet shows the module count beside the module list (the brief lists it; PR A's sheet omits it).
- The project tests gain the cases only the reviewers' probes cover today: after an uncertain submit and while a submit is in flight, the stepper buttons, all three Edit buttons and the approval are closed (`.superpowers/sdd/…/probes/merge2-paid-path.probe.test.tsx` is the model).
- `start/plain.ts` holds form constants (`PURPOSES`, `LEVELS`, `storedName`, `documentDescription`); split or rename when Task 3 adds `start/limits.ts`.
- `StartRun.tsx` `readinessStatus`: `|| review !== undefined` cannot change the result; remove when the row is rebuilt.

### Task 3: Group limits into decisions

**Files:**
- Create: `web/src/pages/connected/start/limits.ts`, `web/src/pages/connected/start/limits.test.ts`
- Modify: `web/src/pages/connected/api.ts:68`

**Interfaces:**
- Produces, in `api.ts`: `export type ReadinessItem = { id: string; scope: string; outcome: string; reason: string; fix?: string; counted?: boolean; inherited_from?: string[] }`; `Summary["items"]` becomes `ReadinessItem[]`.
- Produces, in `limits.ts`:

```ts
export type LimitOutcome = "will_refuse" | "gap" | "limited" | "check";
export type LimitGroup = {
  key: string; // id of the first cause
  outcome: LimitOutcome; // most severe member: will_refuse, gap, limited, check
  kind: "check" | "limit";
  causes: ReadinessItem[];
  consequences: ReadinessItem[];
  ids: string[]; // every member id, causes first
};
export function groupLimits(items: readonly ReadinessItem[]): {
  groups: LimitGroup[];
  passive: ReadinessItem[];
};
export function decided(group: LimitGroup, accepted: ReadonlySet<string>): boolean;
export function carryAccepted(
  previous: readonly ReadinessItem[],
  accepted: ReadonlySet<string>,
  next: readonly ReadinessItem[],
): Set<string>;
```

Rules, in full:
1. An item needs a decision when its outcome is one of the four `LimitOutcome` values. Every other item is `passive`.
2. A cause is an item with no `inherited_from` entries. Causes with the same non-empty `fix` and the same kind form one group; a cause with an empty `fix` is its own group. Kind is `check` only for outcome `check`.
3. An inherited item joins one group. Take its producers in order. A producer resolves to the group of its most severe cause with outcome `will_refuse` or `limited`; failing that, through the producer's own inherited item, recursively, never visiting a module twice. The first producer that resolves wins. If none resolves, the item is the single cause of its own group.
4. Groups are ordered by outcome severity, then by first appearance. `ids` lists every member exactly once.
5. `carryAccepted` returns the ids in `next` whose id and reason both equal an item in `previous` that is in `accepted`.

- [ ] **Step 1: Write the failing tests** `limits.test.ts`:

```ts
import { carryAccepted, decided, groupLimits } from "./limits";

const FIX = "Add the executed agreement and declare it.";
const items = [
  { id: "run:no-agreement", scope: "run", outcome: "gap", reason: "No agreement supplied.", fix: FIX },
  { id: "CP-4:declared-none", scope: "CP-4", outcome: "will_refuse", reason: "Declared none.", fix: FIX, counted: true, inherited_from: [] },
  { id: "CP-2A:from:CP-4", scope: "CP-2A", outcome: "limited", reason: "Through CP-4.", fix: "", counted: false, inherited_from: ["CP-4"] },
  { id: "CP-5:from:CP-2A", scope: "CP-5", outcome: "limited", reason: "Through CP-2A.", fix: "", counted: false, inherited_from: ["CP-2A"] },
  { id: "CP-0:dates", scope: "CP-0", outcome: "check", reason: "Check source.", fix: FIX },
  { id: "CP-3:from:CP-9", scope: "CP-3", outcome: "limited", reason: "Through CP-9.", fix: "", inherited_from: ["CP-9"] },
  { id: "run:section-omitted-x", scope: "run", outcome: "information", reason: "Not produced." },
];

it("merges causes with one fix and nests what follows from them", () => {
  const { groups, passive } = groupLimits(items);
  expect(groups.map((g) => [g.key, g.outcome, g.kind, g.ids])).toEqual([
    ["run:no-agreement", "will_refuse", "limit", ["run:no-agreement", "CP-4:declared-none", "CP-2A:from:CP-4", "CP-5:from:CP-2A"]],
    ["CP-3:from:CP-9", "limited", "limit", ["CP-3:from:CP-9"]],
    ["CP-0:dates", "check", "check", ["CP-0:dates"]],
  ]);
  expect(groups[0]?.consequences.map((i) => i.scope)).toEqual(["CP-2A", "CP-5"]);
  expect(passive.map((i) => i.id)).toEqual(["run:section-omitted-x"]);
});

it("never drops an item: every decision id is in exactly one group", () => {
  const ids = groupLimits(items).groups.flatMap((g) => g.ids);
  expect([...ids].sort()).toEqual(items.filter((i) => i.outcome !== "information").map((i) => i.id).sort());
});

it("gives each item its own decision when the service sends no links", () => {
  const bare = [
    { id: "gap", scope: "run", outcome: "gap", reason: "Gap to review" },
    { id: "check", scope: "CP-0", outcome: "check", reason: "Check source" },
  ];
  expect(groupLimits(bare).groups.map((g) => g.ids)).toEqual([["gap"], ["check"]]);
});

it("terminates on a cycle and keeps both items", () => {
  const loop = [
    { id: "A:from:B", scope: "A", outcome: "limited", reason: "a", inherited_from: ["B"] },
    { id: "B:from:A", scope: "B", outcome: "limited", reason: "b", inherited_from: ["A"] },
  ];
  expect(groupLimits(loop).groups.map((g) => g.ids)).toEqual([["A:from:B"], ["B:from:A"]]);
});

it("is decided only when every member is accepted", () => {
  const [first] = groupLimits(items).groups;
  if (!first) throw new Error("no group");
  expect(decided(first, new Set(first.ids.slice(1)))).toBe(false);
  expect(decided(first, new Set(first.ids))).toBe(true);
});

it("carries an acceptance only for the same id and reason", () => {
  const next = [items[0], { ...items[1], reason: "Declared none (draft found)." }].filter((i) => i !== undefined);
  expect([...carryAccepted(items, new Set(["run:no-agreement", "CP-4:declared-none"]), next)]).toEqual(["run:no-agreement"]);
});
```

- [ ] **Step 2: Run to verify they fail**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected/start/limits.test.ts`
Expected: FAIL — `./limits` not found.

- [ ] **Step 3: Implement `limits.ts`** to the five rules above and add `ReadinessItem` to `api.ts`.

- [ ] **Step 4: Run the tests and the type check**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected/start/limits.test.ts` and `npm --prefix web run typecheck`
Expected: PASS; no type errors.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected/start/limits.ts web/src/pages/connected/start/limits.test.ts web/src/pages/connected/api.ts
git commit -m "feat(start): group readiness items into decisions"
```

### Task 4: Limits as decisions on the review

**Files:**
- Modify: `web/src/pages/connected/start/ReviewSheet.tsx`, `web/src/pages/connected/StartRun.tsx` (`needsCheck`, `checksComplete`, `makeReview`, `copyLatest`, the "different issuer" handler, the approval and Submit block)
- Modify: `web/src/components/status/sets.ts`, `web/src/components/status/sets.test.ts`, `docs/design/design-system.md:378-390`
- Test: `web/src/pages/connected/ConnectedApp.test.tsx`; `web/scripts/connected-proof.mjs:212-215`

**Interfaces:**
- Consumes: `groupLimits`, `decided`, `carryAccepted`, `LimitGroup` (Task 3); `moduleTitle`, `plainText` (Task 2).
- Produces: status set `"Run limits"` with states `Will refuse`, `Gap`, `Limited`, `Check`.

- [ ] **Step 1: Write the failing tests** in `ConnectedApp.test.tsx`. Add a fixture and four tests; leave "uses the same reviewed submit in live mode with each limit accepted" unchanged.

```tsx
const FIX = "Add the executed agreement and declare it.";
const cascade = [
  { id: "CP-4:declared-none", scope: "CP-4", outcome: "will_refuse", reason: "Legal documents declared none.", fix: FIX, inherited_from: [] },
  { id: "CP-2A:from:CP-4", scope: "CP-2A", outcome: "limited", reason: "Expected to be limited through CP-4, which it reads.", fix: "", inherited_from: ["CP-4"] },
  { id: "CP-5:from:CP-2A", scope: "CP-5", outcome: "limited", reason: "Expected to be limited through CP-2A, which it reads.", fix: "", inherited_from: ["CP-2A"] },
  { id: "run:section-omitted-x", scope: "run", outcome: "information", reason: "The report section 'x' is not produced by this pathway." },
];

it("groups a cause with the limits that follow from it, in paid mode", async () => {
  const fetchMock = testingFetch({ ...plan, items: cascade });
  render(<ConnectedApp path="/start" mode="live" />);
  await review();
  const submit = await screen.findByRole("button", { name: "Submit, spend up to USD 25.00" });
  const limits = screen.getByRole("region", { name: "Limits to decide" });
  expect(within(limits).getAllByRole("checkbox")).toHaveLength(1);
  expect(limits).toHaveTextContent("Will refuse");
  expect(limits).toHaveTextContent("Legal documents declared none.");
  expect(limits).toHaveTextContent("Also affects: Downside, Evidence validation");
  expect(limits).toHaveTextContent("No action needed (1)");
  expect(limits).not.toHaveTextContent(/CP-\d/);
  expect(screen.getByText("1 decision left before you can approve.")).toBeInTheDocument();
  const approval = screen.getByRole("checkbox", { name: /Approve: I have read this summary/ });
  expect(approval).toBeDisabled();
  expect(submit).toBeDisabled();
  fireEvent.click(screen.getByRole("checkbox", { name: "I accept these 3 limits" }));
  expect(approval).toBeEnabled();
  expect(submit).toBeDisabled();
  approve();
  expect(submit).toBeEnabled();
  expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/submit"))).toBe(false);
});

it("says there are no limits when the service finds none", async () => {
  testingFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await review();
  await screen.findByRole("button", { name: "Submit run" });
  expect(screen.getByText("No limits found for this run.")).toBeInTheDocument();
  expect(screen.getByRole("checkbox", { name: /Approve: I have read this summary/ })).toBeEnabled();
});

it("keeps an acceptance when the same limit comes back, and never the approval", async () => {
  testingFetch({ ...plan, items: cascade });
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await review();
  fireEvent.click(await screen.findByRole("checkbox", { name: "I accept these 3 limits" }));
  approve();
  fireEvent.click(screen.getByRole("button", { name: "Edit context" }));
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  expect(await screen.findByRole("checkbox", { name: "I accept these 3 limits" })).toBeChecked();
  expect(screen.getByRole("checkbox", { name: /Approve: I have read this summary/ })).not.toBeChecked();
});

it("does not keep an acceptance when the limit's reason changed", async () => {
  const changed = cascade.map((item, i) => (i === 0 ? { ...item, reason: "Legal documents declared none (draft found)." } : item));
  const base = testingFetch({ ...plan, items: cascade });
  let summaries = 0;
  vi.stubGlobal("fetch", (path: string, init?: RequestInit) => {
    if (!path.endsWith("/summary")) return base(path, init);
    summaries += 1;
    return summaries === 1 ? base(path, init) : Promise.resolve(Response.json({ ...plan, items: changed }));
  });
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await review();
  fireEvent.click(await screen.findByRole("checkbox", { name: "I accept these 3 limits" }));
  fireEvent.click(screen.getByRole("button", { name: "Edit context" }));
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  expect(await screen.findByRole("checkbox", { name: "I accept these 3 limits" })).not.toBeChecked();
  expect(screen.getByRole("checkbox", { name: /Approve: I have read this summary/ })).toBeDisabled();
});

it("drops acceptances when the issuer is changed", async () => {
  testingFetch({ ...plan, items: cascade }, undefined, {
    "/api/runs/earlier/inputs": {
      issuer_id: "northbridge", issuer_name: "Northbridge", level: "basic", max_turns: 32, modules: [],
      context, files: [{ name: file.name, size: file.size }],
    },
    "/api/submissions/sub-1/carry": { carried: [file.name], kept: [] },
  });
  render(<ConnectedApp path="/start" search="?from=earlier" mode="synthetic" />);
  await screen.findByLabelText("Issuer name");
  fireEvent.change(screen.getByLabelText("As-of date"), { target: { value: "2026-10-31" } });
  await advanceToPurpose();
  advanceToContext();
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  fireEvent.click(await screen.findByRole("checkbox", { name: "I accept these 3 limits" }));
  fireEvent.click(screen.getByRole("button", { name: "Edit issuer and documents" }));
  fireEvent.click(screen.getByRole("button", { name: "This is a different issuer" }));
  await fillInputs();
  await advanceToPurpose();
  advanceToContext();
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  expect(await screen.findByRole("checkbox", { name: "I accept these 3 limits" })).not.toBeChecked();
});
```

- [ ] **Step 2: Add the status set to its answer key first.** In `docs/design/design-system.md`, after the "Gap severity" row, add:

```
| Run limits | Will refuse: diamond, error. Gap: dashed ring, gap colours. Limited: triangle, warning. Check: ring, info |
```

Extend the "A shape recurs" paragraph: Will refuse joins the diamond list, Limited the triangle list, Check the ring list, Gap the dashed-ring list. In `sets.test.ts` add `["Run limits", 4]` after `["Gap severity", 3]` and change `15` to `16` in the size assertion and its title.

- [ ] **Step 3: Run to verify they fail**

Run: `npm --prefix web exec -- vitest run --root web src/components/status src/pages/connected/ConnectedApp.test.tsx`
Expected: FAIL — `STATUS_SETS` has 15 sets; no region "Limits to decide".

- [ ] **Step 4: Implement.**
  - `sets.ts`: add `"Run limits"` after `"Gap severity"`, matching the row above.
  - `ReviewSheet`: replace the moved list with `<section aria-labelledby>` named "Limits to decide". Heading line: `{decidedCount} of {groups.length} decided`. One card per group, in order: `StatusBadge set="Run limits"`; for each cause its scope (`Whole run` or `moduleTitle(scope)`), `plainText(reason)` and, once per distinct fix, the fix; `Also affects: {moduleTitle of each consequence scope, comma-separated}` when there are consequences; one checkbox, checked when `decided(group, accepted)`, calling `onAccept(group.ids, checked)`. Checkbox name: `I have checked this` for kind `check`; `I accept this limit` for one id; `I accept these {n} limits` otherwise. No groups: `No limits found for this run.` Passive items: `<details>` with summary `No action needed ({n})` listing `plainText(reason)`.
  - `StartRun`: `checksComplete` is every group decided (delete `needsCheck`); `onAccept` adds or removes all ids and clears the approval. Keep the last reviewed items in a ref; `makeReview` sets `accepted` to `carryAccepted(lastItems, accepted, summary.items)` and the approval to `false`. `copyLatest`, "This is a different issuer" and the 400/404 submit failure clear both the ref and `accepted`.
  - Above the approval checkbox, one line with `id="run-submit-blocker"`: `{n} decision(s) left before you can approve.` (`1 decision left…`, `2 decisions left…`) while any group is undecided; `Approve the summary to enable Submit.` when all are decided and it is not approved; nothing once approved. The approval checkbox gets `aria-describedby="run-submit-blocker"`.

- [ ] **Step 5: Update the browser proof** `connected-proof.mjs:212-215`: check every checkbox inside `page.getByRole("region", { name: "Limits to decide" })` instead of looking up the two fixed labels.

- [ ] **Step 6: Run the tests**

Run: `npm --prefix web exec -- vitest run --root web src/components/status src/pages/connected src/pages/Kit.test.tsx`
Expected: PASS, including the unchanged live-mode test.

- [ ] **Step 7: Commit**

```bash
git add web/src docs/design/design-system.md web/scripts/connected-proof.mjs
git commit -m "feat(start): limits as grouped decisions"
```

---

## PR C

### Task 5: Typed rows

**Files:**
- Create: `web/src/pages/connected/start/rows.ts`, `web/src/pages/connected/start/RowEditor.tsx`, `web/src/pages/connected/start/RowEditor.test.tsx`
- Modify: `web/src/pages/connected/StartRun.tsx:86-134` (row constants), `:196-216`, `:637-670`, `:752-781`, `:1466-1508`
- Test: `web/src/pages/connected/ConnectedApp.test.tsx:257-292`

**Interfaces:**
- Produces, in `rows.ts`:

```ts
export type Row = Record<string, unknown>;
export type RowKind = "deal_terms" | "quotes" | "ratings" | "research_questions";
export type RowField = {
  key: string;
  label: string;
  kind: "text" | "number" | "date" | "select";
  hint?: string;
  placeholder?: string;
  options?: readonly (readonly [value: string, label: string])[];
  required?: boolean;
  primaryOnly?: boolean;
  group?: string;
};
export const ROW_SPECS: Record<
  RowKind,
  { title: string; add: string; max: number; fields: readonly RowField[]; summary: (row: Row) => string }
>;
export function emptyRow(kind: RowKind): Row;
```

- Produces, in `RowEditor.tsx`:

```ts
export function RowEditor(props: {
  kind: RowKind;
  rows: readonly Row[];
  onChange: (rows: Row[]) => void;
  primary: boolean;
  required?: boolean;
  choices?: Readonly<Record<string, readonly (readonly [string, string])[]>>;
}): JSX.Element;
```

Values pinned here; everything else in the field tables is ported verbatim from `docs/templates/context-form.html:947-992` and `:1144-1149`:
- Titles, add labels, maxima: Facility / `Add facility` / 20; Quote / `Add quote` / 40; Rating / `Add rating` / 20; Question / `Add research question` / 10.
- Facility groups: Identity (`facility_id`, `instrument`, `currency`, `size_m`, `tenor_years`, `maturity`); Pricing talk (`talk_spread_bps_low`, `talk_spread_bps_high`, `talk_oid_low`, `talk_oid_high`, `floor_pct`, `coupon_pct`, `margin_bps`); Terms (`call_protection`, `use_of_proceeds`); Source (`as_of`, `provider`).
- `primaryOnly`: `tenor_years` and the four `talk_*` fields.
- `emptyRow`: every field key set to `""`, except `quotes.kind` `"observed"` and `ratings.scope` `"issuer"`.
- Summaries, parts joined with ` · `, empty parts dropped: facility `facility_id || "New facility"`, `instrument`, `"{currency} {size_m}m"` when both are set; quote `facility_id || "New quote"`, the kind's label, `as_of`; rating `agency || "New rating"`, `rating`, `outlook`; question `text || "New question"`.
- Number fields are text inputs with `inputMode="decimal"`; every value is written as a string.

- [ ] **Step 1: Write the failing tests** `RowEditor.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { RowEditor } from "./RowEditor";
import { emptyRow, ROW_SPECS } from "./rows";

it("adds an empty facility with every field key", () => {
  const onChange = vi.fn();
  render(<RowEditor kind="deal_terms" rows={[]} onChange={onChange} primary />);
  fireEvent.click(screen.getByRole("button", { name: "Add facility" }));
  expect(onChange).toHaveBeenCalledWith([emptyRow("deal_terms")]);
  expect(Object.keys(emptyRow("deal_terms"))).toHaveLength(17);
  expect(emptyRow("quotes")).toMatchObject({ kind: "observed" });
  expect(emptyRow("ratings")).toMatchObject({ scope: "issuer" });
});

it("writes one field as a string and keeps unknown keys", () => {
  const onChange = vi.fn();
  render(<RowEditor kind="deal_terms" rows={[{ facility_id: "", size_m: 500, custom: 7 }]} onChange={onChange} primary />);
  fireEvent.change(screen.getByLabelText("Facility ID"), { target: { value: "tlb-2031" } });
  expect(onChange).toHaveBeenCalledWith([{ facility_id: "tlb-2031", size_m: 500, custom: 7 }]);
});

it("shows new-issue fields only for a new issue", () => {
  const { rerender } = render(<RowEditor kind="deal_terms" rows={[emptyRow("deal_terms")]} onChange={vi.fn()} primary={false} />);
  expect(screen.queryByLabelText("Tenor (years)")).toBeNull();
  expect(screen.queryByLabelText("Talk spread low (bps)")).toBeNull();
  rerender(<RowEditor kind="deal_terms" rows={[emptyRow("deal_terms")]} onChange={vi.fn()} primary />);
  expect(screen.getByLabelText("Tenor (years)")).toBeInTheDocument();
});

it("summarises a row and removes it", () => {
  const onChange = vi.fn();
  const row = { ...emptyRow("deal_terms"), facility_id: "tlb-2031", instrument: "Term loan B", currency: "USD", size_m: "1250" };
  render(<RowEditor kind="deal_terms" rows={[row]} onChange={onChange} primary />);
  expect(screen.getByText("tlb-2031 · Term loan B · USD 1250m")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Remove Facility 1" }));
  expect(onChange).toHaveBeenCalledWith([]);
});

it("stops adding at the maximum and states a requirement", () => {
  const rows = Array.from({ length: ROW_SPECS.research_questions.max }, () => emptyRow("research_questions"));
  render(<RowEditor kind="research_questions" rows={rows} onChange={vi.fn()} primary={false} />);
  expect(screen.getByRole("button", { name: "Add research question" })).toBeDisabled();
  render(<RowEditor kind="deal_terms" rows={[]} onChange={vi.fn()} primary required />);
  expect(screen.getByText("At least one facility is required for a new issue.")).toBeInTheDocument();
});
```

- [ ] **Step 2: Change the page tests** in `ConnectedApp.test.tsx`. In "enforces primary facility input and forwards the reviewed Advanced choices", replace the lines from `const fields = …` to the `'[{"facility_id":"TL-B"}]'` change with:

```tsx
    fireEvent.change(screen.getByLabelText("Module options"), { target: { value: "[]" } });
    fireEvent.click(reviewRun);
    expect(await screen.findByRole("alert")).toHaveTextContent("Module options must be an object.");
    expect(fetchMock.mock.calls.some(([path]) => path.endsWith("/summary"))).toBe(false);
    fireEvent.change(screen.getByLabelText("Module options"), { target: { value: "{}" } });
    fireEvent.click(screen.getByRole("button", { name: "Add facility" }));
    fireEvent.change(screen.getByLabelText("Facility ID"), { target: { value: "TL-B" } });
```

The rest of that test, including `deal_terms: [{ facility_id: "TL-B" }]`, stays. Add two tests:

```tsx
it("keeps JSON inputs behind the Advanced level", async () => {
  testingFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await fillInputs();
  await advanceToPurpose();
  advanceToContext();
  expect(screen.getByRole("button", { name: "Add rating" })).toBeInTheDocument();
  expect(screen.queryByLabelText("Valuation and peers")).toBeNull();
  expect(screen.queryByText(/context\/1 JSON/)).toBeNull();
});
```

and, modelled on the existing prior-run test's fetch overrides, "passes a prior run's rows through untouched when not edited": the prior context carries `deal_terms: [{ facility_id: "A", size_m: 500, extra: "x" }]` and `quotes: "not-a-list"`; after `Review run` the `/summary` request body has `context.deal_terms` equal to exactly that array and `context.quotes` equal to `"not-a-list"`.

- [ ] **Step 3: Run to verify they fail**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected/start/RowEditor.test.tsx src/pages/connected/ConnectedApp.test.tsx`
Expected: FAIL — `./RowEditor` not found; no button "Add rating".

- [ ] **Step 4: Implement `rows.ts` and `RowEditor`.** Each row is a native `<details>` whose summary is the spec's summary line; a row just added is open. Fields sit in a two-column grid under their group headings. `Remove` is named `Remove {title} {n}`. The add button is disabled at `max`. `required` with no rows shows `At least one {title lower-cased} is required for a new issue.` Changing a field replaces that key with the input's string and leaves every other key as it was.

- [ ] **Step 5: Wire it into `StartRun`.**
  - A `rows` state, `Partial<Record<RowKind, Row[]>>`, holds a kind only once the analyst edits it; until then the editor shows `context[kind]` when that is an array of objects, otherwise no rows. `copyLatest` and "This is a different issuer" clear it.
  - `makeReview` sends `rows[kind]` for kinds present in the state and nothing for the others, so untouched prior values pass through `context`. The analyst note and the new-issue facility check read the same effective rows.
  - The question editor's `focus_module` choices are `["", "Any"]` followed by the pathway's modules as `[id, moduleTitle(id)]`.
  - The facility editor gets `primary={run.run_type === "primary"}` and `required` on the same condition.
  - `valuation`, `assumptions` and `module_options` keep their JSON textareas, each inside its `<details>`, and `readDetails`, drawn only when `level === "advanced"`. Delete the "context/1 JSON" sentence, `ROW_EXAMPLES`, `ROW_LABELS`, `isRowField` and `addContextRow`.

- [ ] **Step 6: Run the tests**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add web/src/pages/connected
git commit -m "feat(start): typed rows for facilities, quotes, ratings and questions"
```

---

## PR D

Carried in from PR A's reviews (2026-11-16), owned by Tasks 7 and 8:
- The mobile step line hides at the 640px viewport breakpoint while the stepper hides its labels on a 620px container query; at about 640–815px and 1041–1159px neither names the step. Measure in the browser and put both on one condition.
- The browser proof clicks a stepper "Go back to …" button by keyboard and checks focus lands on the step heading.

### Task 6: Errors on their fields

**Files:**
- Modify: `web/src/pages/connected/StartRun.tsx` (`readDetails`, `makeAnswers`, `makeReview`, `withDraft`, the step forms, the footer), `web/src/pages/connected/start/RowEditor.tsx`
- Test: `web/src/pages/connected/ConnectedApp.test.tsx`

**Interfaces:**
- `RowEditor` gains `error?: string` (drawn as the alert under its add button, which it describes) and `addRef?: Ref<HTMLButtonElement>`.
- Produces, inside `StartRun.tsx`: `class FieldProblem extends Error { constructor(readonly field: FieldKey, message: string) }` and `type FieldKey = "issuer_name" | "cutoff" | "agreement" | "deal_terms" | "turns" | "valuation" | "assumptions" | "module_options"`.
- Field to step: `issuer_name` → `documents`; all others → `context`.
- Field to control: `issuer_name` "Issuer name"; `cutoff` "Research cutoff"; `agreement` "The agreement"; `deal_terms` the "Add facility" button; `turns` "Turns per module"; the three JSON keys their textarea.

- [ ] **Step 1: Write the failing tests** in `ConnectedApp.test.tsx`. Start the file's setup with `Element.prototype.scrollIntoView = vi.fn();`.

```tsx
it("shows a JSON problem on its field, focuses it and clears it when fixed", async () => {
  testingFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await fillInputs();
  await advanceToPurpose();
  fireEvent.change(screen.getByLabelText("Run form level"), { target: { value: "advanced" } });
  advanceToContext();
  const options = screen.getByLabelText("Module options");
  fireEvent.change(options, { target: { value: "{" } });
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  const alert = await screen.findByRole("alert");
  expect(alert).toHaveTextContent("Module options must contain valid JSON.");
  expect(options).toHaveAttribute("aria-invalid", "true");
  expect(options).toHaveAccessibleDescription(/must contain valid JSON/);
  expect(options).toHaveFocus();
  expect(options.closest("details")).toHaveAttribute("open");
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  expect(screen.getByText("1 problem to fix: Module options must contain valid JSON.")).toBeInTheDocument();
  fireEvent.change(options, { target: { value: "{}" } });
  expect(screen.queryByRole("alert")).toBeNull();
  expect(options).not.toHaveAttribute("aria-invalid");
});

it("marks the agreement choice when none is chosen", async () => {
  testingFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await fillInputs();
  await advanceToPurpose();
  advanceToContext();
  fireEvent.change(screen.getByLabelText("Legal documents"), { target: { value: "executed" } });
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  expect(await screen.findByRole("alert")).toHaveTextContent("Choose the uploaded file that is the agreement.");
  expect(screen.getByLabelText("The agreement")).toHaveFocus();
});
```

In "enforces primary facility input…", after the first `Review run`, add `expect(screen.getByRole("button", { name: "Add facility" })).toHaveFocus();`.

The `issuer_name`, `cutoff` and `turns` messages are backstops behind the browser's own `required`, `max` and `min` checks and are not reachable through the form in a test; they take the same path and are listed under `Not verified:`.

- [ ] **Step 2: Run to verify they fail**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected/ConnectedApp.test.tsx`
Expected: FAIL — the field has no `aria-invalid`; focus is on the body.

- [ ] **Step 3: Implement.**
  - The eight validation points throw `FieldProblem` with their existing messages. `withDraft` stores a `FieldProblem` as `fieldError` and leaves the general error empty; any other failure is handled as today.
  - On a field error: go to the field's step; the control gets `aria-invalid="true"` and `aria-describedby="error-{field}"`; `<p id="error-{field}" role="alert">` with the message sits directly under the control; a containing `<details>` is opened; an effect keyed on the error focuses the control and calls `scrollIntoView?.({ block: "center" })`.
  - Changing that field's value clears `fieldError`.
  - Beside the step action: `1 problem to fix: {message}` as a button that focuses the control again.
  - Service refusals and network failures stay in the general notice above the step.

- [ ] **Step 4: Run the tests**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add web/src/pages/connected
git commit -m "fix(start): show validation errors on their fields"
```

### Task 7: Focus, announcements, readiness panel and small fixes

**Files:**
- Create: `web/src/pages/connected/start/StartReadiness.tsx`
- Modify: `web/src/pages/connected/StartRun.tsx`, `web/src/pages/run/start/Purpose.tsx:71-79`, `web/src/pages/run/start/Start.tsx:70-87`
- Test: `web/src/pages/connected/ConnectedApp.test.tsx`, `web/scripts/connected-proof.mjs`

**Interfaces:**
- Produces:

```ts
export function StartReadiness(props: {
  rows: readonly { label: string; met: boolean; detail?: string }[];
  cap: { value: number; max: number; label: string } | null;
  capTitle: string;
}): JSX.Element; // <aside aria-label="Readiness">
```

- `SubmitConfirmation` gains optional `className?: string`, passed to its trigger button.

- [ ] **Step 1: Write the failing tests** in `ConnectedApp.test.tsx`:

```tsx
it("keeps focus and announces the result after inspecting documents", async () => {
  testingFetch();
  render(<ConnectedApp path="/start" mode="synthetic" />);
  expect(await screen.findByRole("heading", { name: "Documents" })).not.toHaveFocus();
  expect(screen.getByText("Add at least one document to continue.")).toBeInTheDocument();
  await fillInputs();
  fireEvent.click(screen.getByRole("button", { name: "Inspect documents" }));
  expect(await screen.findByText("1 document inspected, 0 ignored.")).toHaveAttribute("role", "status");
});

it("reads readiness as four status rows", async () => {
  testingFetch({ ...plan, items: cascade });
  render(<ConnectedApp path="/start" mode="synthetic" />);
  await fillInputs();
  const panel = within(screen.getByRole("complementary", { name: "Readiness" }));
  expect(panel.getAllByRole("listitem")).toHaveLength(4);
  await advanceToPurpose();
  expect(panel.getByText("Purpose chosen").closest("li")).toHaveTextContent("Met");
  expect(panel.getByText("Purpose chosen").closest("li")).not.toHaveTextContent("Not met");
  advanceToContext();
  fireEvent.click(screen.getByRole("button", { name: "Review run" }));
  await screen.findByRole("button", { name: "Submit run" });
  expect(panel.getByText("Decisions made").closest("li")).toHaveTextContent("0 of 1");
  expect(screen.getByText(/of 4 ready · USD 0\.00 of USD 25\.00/)).toBeInTheDocument();
});
```

jsdom does not move focus when a fieldset is disabled, so the lost-focus defect cannot fail there. Its failing test is in the browser proof: in `connected-proof.mjs` `uploadRunDocuments`, after the uploads resolve, add `await page.waitForFunction(() => document.activeElement?.textContent?.trim() === "Inspect documents");`.

In the prior-run test "carries a prior run's documents and answers, with a buffer for new dates", give the prior context a date (`context: { ...context, run: { ...context.run, as_of: "2025-03-31" }, identity: { ...context.identity, sector: "Gaming" } }`) and add, before the as-of date is changed, `expect(screen.getByText("Set to today for the new run. The earlier run used 2025-03-31.")).toBeInTheDocument();`. On the Purpose step of any test, add `expect(screen.getByText("Web research runs for public and private cases, never for a synthetic test case.")).toBeInTheDocument();`.

- [ ] **Step 2: Run to verify they fail**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected/ConnectedApp.test.tsx`
Expected: FAIL — the heading has focus on load; no status text.

- [ ] **Step 3: Implement.**
  - **Focus.** `withDraft` remembers `document.activeElement`; when the busy state clears and focus is on the body, it refocuses that element if it is still connected and enabled. The step heading is focused only after a step change, never on first render, and takes the `field` focus-visible outline in place of `focus:outline-none`.
  - **Announcement.** After a reading: `<p role="status">{n} document(s) inspected, {m} ignored.</p>` under the document buttons (`1 document`, `2 documents`).
  - **Blocked first step.** While no document is added, `Add at least one document to continue.` sits beside the step action.
  - **Readiness.** `StartReadiness` replaces `Readiness` in this flow: an `<aside aria-label="Readiness">`, sticky from 1041px, with a plain list of four rows, each a `StatusBadge set="Met or not met"`, a label and an optional detail, and the cap bar as today. Rows: `Documents inspected`; `Purpose chosen`; `Decisions made` with detail `{decided} of {groups}` once a review exists; `Summary approved`. Below 1041px, one line above the step action: `{met} of 4 ready · {cap label}`.
  - **Prior run.** Under As-of date, when the prior context has a date: `Set to today for the new run. The earlier run used {as_of}.`
  - **Help lines.** Case kind: `Web research runs for public and private cases, never for a synthetic test case.` Run form level: `Advanced adds model, effort, turns per module, module selection and JSON inputs.`
  - **Pathway cards.** In `PurposeCards` the drawn indicator becomes round with a filled centre dot when selected. The control is already a radio; only its drawing changes.
  - **Mobile.** On the review, the action row stacks below 640px and Submit spans the row, last, through `SubmitConfirmation`'s new `className`.

- [ ] **Step 4: Run the tests**

Run: `npm --prefix web exec -- vitest run --root web src/pages/connected src/pages/run/start`
Expected: PASS, including the legacy `run/start` tests.

- [ ] **Step 5: Commit**

```bash
git add web/src
git commit -m "feat(start): focus, announcements and a status readiness panel"
```

### Task 8: Verification

**Files:**
- Modify: `VERIFICATION.md` (coordinator, at merge; 991 lines now, limit 1,000 — trim the oldest entries to fit)

- [ ] **Step 1: Web gates.** Run: `npm --prefix web run gates`. Expected: exit 0 (lint, format, typecheck, tests with coverage ≥ 80%, audit, knip, duplication, build, script tests, file gates).

- [ ] **Step 2: Browser proof.** Run `uv sync --locked` once in the worktree, then `npm --prefix web run proof:connected`. Expected: exit 0 in Chrome and Edge; artifacts under `proof-artifacts/run-*`.

- [ ] **Step 3: Fidelity check against the service's own summary.** With the synthetic service running (`PYTHONPATH=src:apps/issuer-library .venv/bin/python -m proof.serve --root <empty dir, path ≤ 80 chars> --port <port>`), start a Northbridge run to the review step and save the `/summary` response. Check with a one-off Playwright script kept in the session scratchpad, not committed, and not by eye: every item id with one of the four outcomes appears in exactly one group's checkbox on the page; issuer, as-of date, pathway and document count match the response; no `CP-` code, run id or `--` flag is in the review's text at the Basic level.

- [ ] **Step 4: Look at it.** Capture every step at 1440×900 and 390×844 and compare with the brief: four steps, three review blocks, grouped limits, typed rows, the error on its field.

- [ ] **Step 5: Record.** Add one `VERIFICATION.md` entry with the scope (synthetic Northbridge case; paid mode exercised only through the test suite and the proof's paid-dialog preview), the commands and their exit codes, and the fidelity result. Re-run `/impeccable critique` on the Start flow and record the score beside the 21/40 baseline.

**Not verified by this plan:** a paid run against a live provider; the earnings and new-issue pathways in the browser proof; 768–1040px beyond the panel's breakpoint; a real screen reader; the service's "A-live" sentence, which stays visible until the owner rules on it.
