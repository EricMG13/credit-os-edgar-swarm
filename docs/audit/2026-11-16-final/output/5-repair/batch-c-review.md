# Batch c review (stage 5 step 7)

Reviewer: fresh session, did not write the batch. Worktree `wt-batch-c`, branch `audit/lead-batch-c`, HEAD
`2d7af32`, diff read: `git diff origin/audit/final-repairs..HEAD` (24 files, 528 insertions, 61 deletions; no
Python, no Signal file, no `proof/`, `prompts/` or fixture touched).

## Overall verdict: FAIL

One Medium finding (R-1, X1-017). Nothing High. Every other finding passes. Every check below exited 0.

Review findings: High 0, Medium 1, Low 2, Info 2.

## Verdict per finding

| Finding | Verdict | Reason |
| :--- | :--- | :--- |
| C4-037 | pass | Closed by R14. No commit touches the bridge's label code; the only `WaterfallChart.tsx` change is the colour constants (X1-026). |
| X1-021 | pass | Closed by R14. `PathChart.tsx` is not in the diff. |
| X1-011 | pass (Info R-5) | Closed by R16; the committed change was left in place on the lead's word. It only drops `aria-hidden` from the visible label: no visual change, the kit's `getByRole("status", { name })` test is untouched. |
| X1-002 | pass | `font-display` added to `EmptyState.Title`; `text-xl` kept for the reason the report gives (source component's own size). Test written first, covers h2, h3 and a caller class. Signal's empty states take the same face: D-30 applies to the shared component. |
| X1-009 | pass | Selected keeps the colour and the 2 px line; hovered unselected gets `text-secondary` only. I checked with `tailwind-merge` that `text-secondary` replaces the base `text-quaternary` (output `text-sm text-secondary`), so the colour change really lands. Both orientations are tested. Signal's two Tabs uses take the new hover (OQ-09 has no carve-out; their tests pass). |
| X1-017 | **fail (Medium R-1)** | See R-1 and answer (a). |
| X1-026 | pass (Low R-2) | Cause fixed: three tokens, one `@theme` block, aliases of the colours already drawn, so the chart is unchanged on screen. The edit to `WaterfallChart.test.tsx` is only the three `fill` expectations, from the two chart tokens and `brand-400` to `var(--color-waterfall-*)`, as the finding requires; the new legend-swatch test and the `theme.test.ts` test (follows the `var()` chain to the design system's hex) keep the colour pinned independently. I built `web/` into a scratch folder: all three tokens and the tokens they reference are in the built CSS (`--color-waterfall-total:var(--color-chart-1)`, `-up:var(--color-brand-400)`, `-down:var(--color-chart-3)`; `brand-400:#4d5fff`, `chart-1:#001aff`, `chart-3:#994a34`). Folder removed. |
| X1-006 | pass (Info R-4) | `p` to `div` in `Alert`, and in `Callout`, with identical classes. Preflight zeroes `p` margins, so string children draw as before. No test, caller or CSS selector in `web/src` depends on the `p`. Test asserts no React nesting error for a paragraph and a list. |
| X1-023 | pass (Low R-3) | Cause fixed: `Track` no longer returns null on a null range; the markers are drawn and, where nothing is drawn, the track says n.a. A row with a range and no markers is unchanged (tested). The test edits are checked one by one below. |
| X1-015 | pass | `truncate` and `whitespace-nowrap` replaced by `min-w-0` and `wrap-anywhere` on the select value, option label, supporting text and the file name; the class exists in the built CSS and is used elsewhere. Short values draw as before. The file size keeps `truncate` (not named). Tests check class and DOM only (jsdom). |

### Test edits, one by one

`web/src/components/chart/WaterfallChart.test.tsx` (15 added, 3 changed): the three `fill` expectations are
the only changed lines; they move to the token names the finding requires. Not weakened: the strings are exact,
and a new test pins the legend swatches to the same tokens.

`web/src/components/chart/RangeStripChart.test.tsx` (21 added, 2 changed):
1. "draws no strip and no tick where the range is missing" becomes "draws a tick per case but no strip": the
   strip assertion is kept, the `data-marker` null assertion is replaced by the two ticks' names, and positions
   55 and 52 on the row's 0 to 100 axis, which are the finding's figures, not computed by the component.
2. One added line in the "Working capital days" test (no `data-track-missing`): additive.
3. New test for the n.a. track (no range, no marker) and its value cells.

`web/src/pages/model/ForecastPage.test.tsx` (9 changed lines each side): title reworded; `[data-marker]` count 8 to
10 (four rows with two markers, plus Aftermarket's two: 4 x 2 + 2); the Aftermarket assertion from "no marker" to
"two markers"; the full-colour test 8 to 10 and the per-case arrays from four to five entries, with the same
true/false pattern. Each is the behaviour the finding requires, nothing else changed, the strip count (5) and the
missing-value assertions are intact.

All other test files are new, additive (0 deletions).

## Review findings

### R-1 Medium: X1-017 gives "Not ready" the diamond, not its own shape, and changes its tone

- OQ-09 (accepted by R10) reads "Give 'Not ready' its own shape". The diamond is the "Problem" shape that Error,
  Failed, Failing, High, Will refuse and Unreadable already carry (design-system.md recurrence sentence), so "Not ready"
  now shares a shape with six words. It stopped sharing the slashed circle, which fixes the finding's contradiction,
  but it did not get a shape of its own.
- The brief says a finding that needs a file outside the chunk's list stays open with the reason. The report says
  `shapes.tsx` was outside the list; the finding should have been left open there, not met by a different decision.
- The tone changed from neutral to error. OQ-09 rules a shape only. The reader now sees "Not ready" in the red
  badge where it was grey. The report's reason ("every diamond is error-toned") is true of the diamond uses but the
  cross is neutral in Run states and error in Security recommendation, so tone and shape are not tied.
- `docs/design/design-system.md` now carries "**Not ready is the diamond** (owner, 2026-11-17, OQ-09): a source the
  review cannot rely on is a problem". The owner did not rule the diamond or that rationale; the sentence puts the
  implementer's choice under the owner's name (see (c)).
- Repair: either revert commit `c0b4ed5` and leave X1-017 open for the file list to include `shapes.tsx`, or have the
  lead ask the owner whether the diamond is acceptable. Do not record the diamond as the owner's ruling.

### R-2 Low: design-system.md adds rationale the owner did not give

Tabs row: names the token (`text-secondary`) and adds "so a hovered tab never reads as selected". Waterfall: "up is
a lighter step of the same Ultramarine, so a rise reads as part of the walk it adds to" and "The legend names each
kind in words; no status colour is used", under "(owner, 2026-11-17, OQ-09)". The hexes, slots and token names are
needed and correct; the two rationale sentences are the implementer's. See (c).

### R-3 Low: a type comment now says the opposite of the behaviour

`web/src/pages/model/slice/types.ts:392`: "`range: null` draws no strip, so no marker either." After X1-023 the
markers are drawn. The file is probably outside the chunk's list (the lead's list is not in the brief), in which case
the lead should add it or the batch should say so; the reader (`read-forecast.test.ts:40`) already holds a null-range
row with two markers.

### R-4 Info: `Callout` was changed too

X1-006 names `Alert` only. `Callout` is in the same file, takes the same `ReactNode`, had the same defect and has
its own test. No caller or test depends on it. Left as acceptable.

### R-5 Info: X1-011's commit stays although R16 closed it

On the lead's instruction. No visual effect. If the lead wants the diff to match R16 strictly, drop `27e591d`.

## Answers to (a) to (c)

**(a) X1-017: does the diamond meet "its own shape"?** No. The diamond is the existing "Problem" shape, used by six
other words, so "Not ready" has no shape of its own and the implementer also changed its tone to error unasked.

What a distinct shape needs (I changed nothing):
- `web/src/components/status/shapes.tsx`: one new name in `SHAPES` (the `Shape` type derives from it) and one drawing
  in `DRAWINGS` (a `Record<Shape, ...>`, so typecheck forces it), drawn in the 10 px box and checked at that size;
  the owner or designer picks the shape and its meaning.
- `web/src/components/status/sets.ts`: `"Not ready": [<new shape>, <tone>]`, tone chosen, not inherited from the diamond.
- `docs/design/design-system.md`: "Ten shapes" becomes eleven (the shapes table, the "ten status shapes" line at
  `:289`, the Source readiness row, the recurrence sentence, the rationale bullet). `docs/design/states-2.md:289`
  already records that "Ten shapes, each with one meaning" must change before a new state can take a new shape.
- Tests that hard-code ten and read the design system: `StatusBadge.test.tsx` ("has the ten shapes":
  `toHaveLength(10)` and `new Set(markup).size` is 10) and, for the Source readiness row, `sets.test.ts`;
  `shapes.test.tsx` iterates `SHAPES`. Editing the 10s is the ruling's behaviour change and must be named.
- Callers that draw "Not ready": `web/src/pages/connected/report/ModuleTable.tsx` (the CP-0 readiness groups, through
  `StatusBadge set="Source readiness"`) and `web/src/pages/Kit.tsx` (renders every state of `STATUS_SETS`); neither
  needs code. Signal does not draw Source readiness; its `StatusShape` users (`FreshnessBadge`, `ArchivedBadge`) only
  see the wider `Shape` type.

**(b) theme.css additions for X1-026.** Pass. Three custom properties in the one `@theme` block, under a comment,
after the chart palette: tokens only, no rule, no hex (aliases of `chart-1`, `brand-400`, `chart-3`). The existing
tokens are defined once, in the same block; `theme.css` has no dark block and the design system says "No dark
mode" (`design-system.md:560`), so "light and dark in the same way" means one definition, as for the existing
tokens. The built CSS carries all three.

**(c) design-system.md.** Partly. What matches OQ-09: the Tabs row says a hovered unselected tab changes text colour
only; the Waterfall table gives the three tokens, their hexes (which match `theme.css`) and columns. What does not:
the Source readiness row ("diamond, error"), the recurrence sentence and the "Not ready is the diamond (owner ...)"
bullet record the implementer's choice as the owner's (R-1); the Tabs token name and "never reads as selected", and
the two Waterfall rationale sentences, are additions (R-2). No other part of the document changed; the
design-system-reading tests (`StatusBadge.test.tsx`, `sets.test.ts`, `theme.test.ts`) pass.

## Checks (commands and exit codes)

`npm` commands run from the worktree root; vitest from `web/` (`npx vitest run <paths>`), each under `timeout 300`,
one at a time, with `export PATH=$HOME/.local/bin:$PATH`. The machine's load average was 3 to 16 from other sessions.

| Command | Exit | Result |
| :--- | :---: | :--- |
| `npm --prefix web run lint` | 0 | eslint, max-warnings 0, 69 s |
| `npm --prefix web run format:check` | 0 | all files formatted |
| `npm --prefix web run typecheck` | 0 | |
| `vitest run src/pages/connected/ConnectedApp.test.tsx` | 0 | 185 tests, 105 s |
| `vitest run src/pages/connected/ReportContent.records.test.tsx` | 0 | 22 tests |
| `vitest run src/shell` | 0 | 1 file, 18 tests |
| `vitest run src/App.test.tsx src/ConnectedLoadBoundary.test.tsx src/data.test.ts src/motion.test.ts src/react-aria-style.test.ts src/route.test.ts` (all top-level `web/src` tests) | 0 | 6 files, 60 tests |
| `vitest run src/pages/signal` | 0 | 34 files, 630 tests |
| `vitest run src/components src/styles` (all changed components, `theme.test.ts`) | 0 | 35 files, 388 tests |
| `vitest run src/pages/Kit*.test.tsx src/pages/route-table.test.ts src/pages/worked-example.test.tsx` | 0 | 9 files, 147 tests |
| `vitest run src/pages/model` (`ForecastPage`, `PortfolioFitPage`, `read-forecast`) | 0 | 16 files, 689 tests |
| `vitest run src/pages/library src/pages/run` (Alert and Callout callers) | 0 | 32 files, 1091 tests |
| `vitest run src/pages/connected --exclude ConnectedApp --exclude ReportContent.records` (rest of connected, incl. `visuals`) | 0 | 43 files, 743 tests |
| `CREDIT_OS_OUT_DIR=<scratch> node scripts/build.mjs` (vite build, both configs; output grepped, then removed) | 0 | tokens, `wrap-anywhere`, `font-display` present |
| `node` one-off with `tailwind-merge`: `cx("text-quaternary text-sm","text-secondary")` | 0 | `text-sm text-secondary` |

The two files that failed under load in the implementer's combined run both pass alone; the rest of `connected`
passes without them. That is consistent with the implementer's reading (timeouts at load), not proof of it.

Not verified:
- Any real browser rendering: select and file-name wrapping, tab hover, the track n.a., the three waterfall colours
  and the Not ready badge were checked by class, DOM and built CSS only, not by sight, and no contrast or grayscale check
  was made of the diamond-in-error badge.
- The owner's intent for "its own shape" (an eleventh shape, or the diamond): not asked.
- The full vitest suite (weekly CI), `npm run unused`, `duplication`, `test:scripts`, `test:file:gates`; none of the
  changed lines is Python, so the Python quality gate was not run.
- Whether `types.ts` and `ForecastPage.test.tsx` are in the chunk's file list (the list is not in the brief).
- Behaviour of the timing-sensitive tests at normal load; they ran at load 3 to 16.

## Round 2 review (commit a7a3891)

Reviewer: a fresh session, which wrote neither round. Read: the brief, OQ-09 and R10, `git show a7a3891`, and
`git diff origin/audit/final-repairs..HEAD` for `web/src/components/status/` and `docs/design/design-system.md`
(`origin/audit/final-repairs` is `ca0db16`, the merge base). Changed no code.

### Overall verdict for the chunk: PASS

Findings: High 0, Medium 0, Low 1, Info 2. Every check below exited 0.

### R-1 (X1-017): repaired

- Own shape. "Not ready" is the new eleventh shape `hollow square`. A scan of every state of every set
  (`StatusBadge.test.tsx`, new test, and `sets.test.ts`, new test) finds `hollow square` on "Source readiness: Not
  ready" alone, and the drawn markup differs from every other word's. The diamond and the slashed circle no longer
  carry it, and "Not assessable" keeps the slashed circle alone (the round 1 slashed-circle test stays).
- Style of the other ten. `shapes.tsx` draws it as a `rect`, `fill="none"`, `currentColor` stroke 1.5 (the ring's
  `RING` stroke), at 0.75 with side 8.5, so the outer edge fills the 10 by 10 box like the ring and the diamond. The
  size test (`SHAPES` less the dashed ring, 10 by 10) now covers it. I drew ten of the eleven shapes (not the dashed ring) in headless Chromium at 1x and
  8x (scratch file, not committed): at 1x it reads as an outlined square beside the filled square and the ring, and the
  stroke matches the ring's.
- Tone. `git diff origin/audit/final-repairs..HEAD -- web/src/components/status/sets.ts` is one line,
  `"Not ready": ["slashed circle", "neutral"]` to `["hollow square", "neutral"]`. The tone is what it was.
- Callers. `StatusBadge.tsx`, `ModuleTable.tsx` (`StatusBadge set="Source readiness"`) and `Kit.tsx` (reads
  `STATUS_SETS`) are not in the diff and read the set, so they draw the new shape. `grep` for `SHAPES` and for
  `"slashed circle"` / `"diamond"` outside `components/status/` finds no other table of shapes. The Kit, ModuleTable
  and Signal tests pass.
- Edited expected values. `StatusBadge.test.tsx`: `toHaveLength(10)` to 11, the distinct-markup size 10 to 11, the title
  "ten" to "eleven"; `shapes.test.tsx`: the title "other nine" to "other ten" (no value). These are exactly the count the
  finding requires, and each assertion stays exact (the shape list is still compared with the design system's table,
  sorted; the markup set is still a size, not a bound). Round 1's own test of the diamond was replaced. Nothing else is
  loosened: `sets.test.ts` still reads the design system's set table row for row (its Source readiness row now ends
  "Not ready: hollow square, neutral") and still checks one shape per state in a set.
- Scope of the commit. `git show a7a3891 --name-only` lists the five files under `web/src/components/status/`,
  `docs/design/design-system.md` and `docs/audit/2026-11-16-final/output/5-repair/batch-c.md` (the chunk's own report,
  which the brief requires). No other file.

### R-2: repaired

`design-system.md`, as it stands against the merge base, changes three things, each from OQ-09:
- Tabs row: "hover changes the text colour only" (X1-009). The token name and "never reads as selected" are gone.
- Waterfall: the three tokens, hexes and columns, which `theme.css` and `theme.test.ts` hold to the same values
  (X1-026). The two rationale sentences ("lighter step of the same Ultramarine, so a rise reads as part of the walk it
  adds to", "The legend names each kind in words; no status colour is used") are gone.
- "Not ready": the owner's words are "has its own shape (owner, 2026-11-17, OQ-09)"; the shape is then stated in a
  separate sentence with no attribution ("The shape is the hollow square: an outlined 10px square, drawn in the
  ring's 1.5px stroke. No other state uses it."). The diamond bullet is gone, and a `grep` finds no "diamond" next to
  "Not ready". The date matches R10 (owner, 2026-11-17). The count is eleven in all three places in this file (the Icons
  line, the "Status shapes" lead-in and the shapes table), and the recurrence sentence now names the hollow square as
  Not ready alone.

Nothing credits the owner with the hollow square, a tone or a rationale.

### Review findings (round 2)

- Low R2-1, for the lead: `docs/design/states-2.md:289` ("seven of ten shapes are used ... 'Ten shapes, each with one
  meaning'") and `docs/design/component-map.md:353` ("takes shapes from the design system's ten") still say ten shapes.
  Both are outside this chunk's list; the design system now has eleven. States-2 line 289 is a record of a blocked
  option, so the lead may leave it as history; the component-map line is a statement of the current system.
- Info R2-2: the Waterfall lead-in ends "so no colour in the chart is a local constant", under "(owner, 2026-11-17,
  OQ-09)". It is the reason the finding gives, not a new choice, so I left it; it is the only clause in the paragraph
  that is not a token, hex or column.
- Info R2-3: the choice of the hollow square is the implementer's (the report says so); OQ-09 says only "its own shape".
  The lead may want the owner to see it. The earlier Info items from round 1 (R-3 to R-5) are unchanged and not part of
  this commit.

### Checks (commands and exit codes)

`npm` commands from the worktree root; vitest from `web/` (`npx vitest run <path>`); each under `timeout 300`, one at a
time, after `export PATH=$HOME/.local/bin:$PATH`. Load average 3 to 4 at the start.

| Command | Exit | Result |
| :--- | :---: | :--- |
| `git show a7a3891 --name-only`; `git diff origin/audit/final-repairs..HEAD` for `web/src/components/status/` and `docs/design/design-system.md` | 0 | read |
| `npm --prefix web run lint` | 0 | eslint, max-warnings 0, 54 s |
| `npm --prefix web run format:check` | 0 | all files use Prettier code style |
| `npm --prefix web run typecheck` | 0 | tsc --noEmit |
| `vitest run src/components` | 0 | 34 files, 376 tests |
| `vitest run src/pages/signal` | 0 | 34 files, 630 tests |
| `vitest run src/pages/Kit` | 0 | 7 files, 94 tests |
| `vitest run src/pages/connected/report` | 0 | 21 files, 274 tests |
| headless Chromium screenshot of ten shapes (not the dashed ring) at 1x and 8x (scratch folder) | 0 | file written, read by eye |

### Not verified:

- The hollow square in a badge on a real page, by sight; and any grayscale or contrast check of the neutral badge with
  it. I looked at the bare SVG at 1x and 8x only.
- Whether the owner accepts the hollow square (OQ-09 does not name a shape).
- That the new tests fail against the old `sets.ts` and `shapes.tsx`: I read them but did not run them against the
  previous code (the implementer's report says four failures before the change).
- The rest of `src/pages/connected/` (ConnectedApp, ReportContent.records), `src/pages/model`, `src/pages/library`,
  `src/pages/run` and `src/styles` after this commit; they were not run in round 2 and are unaffected by it as far as
  the diff shows (no file outside the status folder and the design doc changed).
- The full vitest suite (weekly CI), `npm run unused`, `duplication`, and the Python gate (no Python in the diff).
- Timing-sensitive tests at normal load.
