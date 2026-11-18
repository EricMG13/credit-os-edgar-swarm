# Batch c: Low and Info repairs

Branch `audit/lead-batch-c`, worktree `wt-batch-c`. Ten findings: seven repaired, three closed by owner
rulings the lead sent while the batch ran (R14 twice, R16 once), none open. Round 2 (below, after the round 1
checks) repairs the review's R-1 (X1-017) and R-2 (design-system.md wording); R-3 (the stale comment at
`web/src/pages/model/slice/types.ts:392`) is left for the lead and not touched.

## Outcomes

| Finding | Outcome | Commit |
| :--- | :--- | :--- |
| C4-037 | closed by R14 (lead message): no change, nothing committed | none |
| X1-021 | closed by R14 (lead message): no change, nothing committed | none |
| X1-011 | closed by R16 (lead message): the repair was already committed when the message came, left in place as told | 27e591d |
| X1-002 | repaired | 664bb77 |
| X1-009 | repaired (OQ-09) | d7afe32 |
| X1-017 | repaired (OQ-09); round 2 replaced the diamond with its own shape (review R-1) | c0b4ed5, round 2 commit below |
| X1-026 | repaired (OQ-09) | 15b7c5a |
| X1-006 | repaired | 6bd30c9 |
| X1-023 | repaired | 6610053 |
| X1-015 | repaired | cfa2517 |

Counts: repaired 7, closed by R14 2, closed by R16 1 (its commit stays), open 0, already repaired 0.

For C4-037 I had a working prototype (hyphen-aware line breaks, a minimum gap in the band, and a scroll
floor for the bridge) in the working tree, uncommitted, when R14 arrived; I reverted it and removed the
scratch harness. Nothing of it is on the branch.

## Per finding

### X1-002: empty-state title in Geist

- File: `web/src/components/application/empty-state/empty-state.tsx`: `font-display` added to `EmptyState.Title`.
- Kept `text-xl`: the design system says text inside a source component keeps the source's own size, in the three
  families (`design-system.md` Type, "Any other text inside a source component"). The finding's parenthetical
  "(and the h3 size token)" was not applied for that reason; the face is the defect (D-30).
- Test (new, written first, failed): `empty-state.test.tsx` (h2 and h3 carry `font-display`; a caller's class is kept).

### X1-009: hovered tab drawn as selected (OQ-09)

- File: `web/src/components/application/tabs/tabs.tsx`. The selected tab keeps the Ultramarine text and the 2px
  line; a hovered, unselected tab changes its text to `text-secondary` only (horizontal and vertical).
- Design system: the Tabs row (`docs/design/design-system.md`, component table) says "hover changes the text colour
  only". Round 2 (review R-2) removed the token name and the "never reads as selected" wording from that row.
- Test (new, written first, failed): `tabs.test.tsx`, both orientations: selected styling; hovered unselected has
  `text-secondary`, no line, not the selected colour; hovering the selected tab leaves it as it was.

### X1-017: "Not ready" has its own shape (OQ-09)

Round 1 (c0b4ed5) gave "Not ready" the Problem diamond in the error tone; the review failed it (R-1, Medium): the
diamond is the shape of six other words, and the owner ruled a shape, not a tone. Round 2 (model Sonnet) repairs it.

- Files: `web/src/components/status/shapes.tsx` (a name, "hollow square", in `SHAPES`, and its drawing in `DRAWINGS`),
  `web/src/components/status/sets.ts` (`Not ready` is `hollow square`, `neutral`: the tone it had before chunk c;
  `git diff origin/audit/final-repairs -- web/src/components/status/sets.ts` now changes the shape only,
  `slashed circle` to `hollow square`), `docs/design/design-system.md`.
  `StatusBadge.tsx`, `ModuleTable.tsx` and `Kit.tsx` are untouched: they read `STATUS_SETS`, which now carries the shape.
- The shape: an outlined square in the ring's style (`fill="none"`, `currentColor` stroke 1.5, a `rect` at 0.75 with
  side 8.5 so the outer edge fills the 10 by 10 box), the same size as the other nine 10px shapes. No other status
  word uses it; it differs from the filled square (Approved, Unchanged) by being an outline and from the ring by its
  corners. I drew the seven plain shapes next to each other at 6 times zoom in headless Chromium: it reads as the
  ring's weight on a square.
- The choice of shape is mine; the owner ruled only that "Not ready" has its own. The design system now says
  "Not ready has its own shape (owner, 2026-11-17, OQ-09)" and then, unattributed, which shape it is.
- `docs/design/design-system.md`: "ten status shapes" (Icons) and "Ten shapes" (Status shapes) are eleven, each with
  the hollow square added; a row in the shapes table (`"Not ready", and nothing else`); the Source readiness row
  reads `Not ready: hollow square, neutral`; the recurrence sentence takes Not ready off the diamond and says the
  hollow square is Not ready alone; the diamond bullet that put the diamond under the owner's name is replaced by
  the one-line "has its own shape" bullet.
- Tests, written first and seen to fail (4 failures) before the code change, now pass:
  - New, `sets.test.ts`: "gives 'Not ready' a shape of its own, in the neutral tone it had before (OQ-09)": the entry
    is `hollow square`, `neutral`, and "hollow square" is found on no other state of any set.
  - New, `StatusBadge.test.tsx`: "draws 'Not ready' with a shape no other status word draws (OQ-09)": renders every
    state of every set and compares `data-shape` and the drawn markup with those of "Not ready".
  - Existing tests that hard-coded ten, changed to the behaviour the ruling requires (each named):
    1. `StatusBadge.test.tsx`, "has the ten shapes of the design system" is now "has the eleven shapes ..." with
       `toHaveLength(11)` (was 10); the comment above the table parse says eleven.
    2. `StatusBadge.test.tsx`, "draws each shape as different markup": `new Set(markup).size` is 11 (was 10).
    3. `shapes.test.tsx`, the title "draws the other nine shapes 10 by 10" is now "other ten shapes"; the loop
       reads `SHAPES`, so it now covers the new shape's 10 by 10 box; no expected value changed.
    4. `sets.test.ts`, "draws 'Not ready' as the diamond ... not the slashed circle" (round 1's test of the defect
       the review found) is replaced by the new test above; the slashed-circle test is unchanged.
  - Unchanged and passing: `sets.test.ts` row-for-row against the design system (reads the new `Not ready: hollow
    square, neutral` row), the one-shape-per-state-in-a-set test, `shapes.test.tsx` size test.

### X1-026: waterfall colours (OQ-09)

- Files: `web/src/styles/theme.css` (three tokens), `web/src/components/chart/WaterfallChart.tsx` (constants and
  the "come later" comment dropped), `docs/design/design-system.md` (a Waterfall table under Chart palette).
- Tokens: `--color-waterfall-total: var(--color-chart-1)`, `--color-waterfall-up: var(--color-brand-400)`,
  `--color-waterfall-down: var(--color-chart-3)`. They alias the colours the chart already drew, so nothing changes
  on screen, no new hex enters `theme.css` (the brand-tokens test stays satisfied), and if the chart tokens are
  separated later (X1-020) the waterfall follows. A `vite build` into a scratch folder showed all three tokens and
  the two base tokens they reference in the built CSS.
- Existing test changed to the behaviour the finding requires: `WaterfallChart.test.tsx`, "tells total, up and down
  apart by data attribute and fill" now expects `var(--color-waterfall-total|down|up)` where it expected
  `var(--color-chart-1)`, `var(--color-chart-3)` and `var(--color-brand-400)`.
- Tests added (written first, failed): legend swatches use the tokens; `theme.test.ts` checks the three tokens
  against the Waterfall table's hexes, following the `var()` chain.
- Round 2 (review R-2): the two rationale sentences the owner did not give ("up is a lighter step of the same
  Ultramarine, so a rise reads as part of the walk it adds to" and "The legend names each kind in words; no status
  colour is used") are removed from `design-system.md`. The Waterfall table and its lead-in stay.

### X1-006: Alert wraps children in a p

- File: `web/src/components/alert/Alert.tsx`: `<p>` to `<div>` with the same classes, in `Alert` and, for the same
  defect two components down in the same file, in `Callout` (its children are also a `ReactNode`). String
  children render as before.
- Test (new, written first, failed): `Alert.test.tsx`: a paragraph and a list as children raise no React
  nesting error and sit in a div; the string case keeps its classes; no child, no text block; the same for Callout.

### X1-023: range strip row with no range

- File: `web/src/components/chart/RangeStripChart.tsx`. With a null range the case markers are still drawn (they
  have their own positions); where there is no range and no marker to draw, the track says n.a.
  (`data-track-missing`, the `Missing` form). A row with a range and no markers is unchanged.
- Existing tests that asserted the defect, changed to the behaviour the finding requires (named):
  1. `RangeStripChart.test.tsx`, "draws no strip and no tick where the range is missing" is now "draws a tick per
     case but no strip where the range is missing" (positions 55 and 52 on the 0 to 100 axis).
  2. `web/src/pages/model/ForecastPage.test.tsx` (a caller's test, one file outside the list, edited only
     where it counted this behaviour): "draws a strip on five rows and two markers on four..." now five rows with
     ten markers and two on the Aftermarket row; and "draws both markers of a row in full colour..." now counts
     10 markers (was 8) and arrays of five (was four). The lead may see a merge conflict here if another batch
     edits that file.
- Test added (written first, failed): n.a. in the track for a row with no range and no markers; the Working capital
  row (strip, no markers) shows no track n.a.

### X1-015: ellipsis on select values, options and file names

- Files: `web/src/components/base/select/select.tsx`, `select-item.tsx`,
  `web/src/components/application/file-upload/file-upload-base.tsx`. `truncate` and `whitespace-nowrap` on the
  value, option label, supporting text and file name are replaced by `min-w-0` and `wrap-anywhere` (already used
  elsewhere in the app), so the whole text shows and wraps (D-32). The file size keeps `truncate` (short, caller text,
  not named by the finding).
- Tests (new, written first, failed): `select.test.tsx` (selected value and an open option wrap, nothing in the
  trigger truncates), `file-upload-base.test.tsx` (a 100-character file name wraps; the delete control still names it).

### X1-011: loading indicator label (closed by R16)

Committed before the R16 message: the visible label is no longer `aria-hidden`, so it is text inside the status
region (the `aria-label` is kept; the kit's `getByRole("status", { name })` test is untouched). Test:
`loading-indicator.test.tsx`. Left in place as the lead instructed.

## Checks (run in `wt-batch-c`, final state)

| Check | Exit |
| :--- | :--- |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `npm --prefix web run lint` | 0 (after fixing a deprecated `defaultSelectedKey` in my new select test) |
| `vitest run` over `src/pages/signal`, `src/components`, `src/styles`, `src/pages/Kit*.test.tsx`, `src/pages/model`, `src/pages/library`, `src/pages/run`: 123 files, 2890 tests | 0 |
| `vitest run src/pages/connected/ConnectedApp.test.tsx` alone: 185 tests | 0 |
| `vitest run src/pages/connected/ReportContent.records.test.tsx` alone | 0 |

No Python changed, so the quality gate and Python tests were not run. No paid call, no new dependency.

## Round 2 checks (X1-017, review R-1 and R-2; model Sonnet), run in `wt-batch-c`

Each under `timeout 300`, one at a time.

| Check | Exit |
| :--- | :--- |
| New and changed tests before the code: `vitest run src/components/status` (4 failures, as intended) | 1 |
| `vitest run src/components/status` after the code (3 files, 16 tests) | 0 |
| `npm --prefix web run format:check` | 0 |
| `npm --prefix web run typecheck` | 0 |
| `npm --prefix web run lint` | 0 |
| `vitest run src/components` (34 files, 376 tests) | 0 |
| `vitest run src/pages/signal` (34 files, 630 tests) | 0 |
| `vitest run src/pages/connected/report src/pages/connected/reportView.test.ts src/pages/connected/start/plain.test.ts` (ModuleTable's readiness groups and the readers of "Not ready": 22 files, 424 tests) | 0 |
| `vitest run src/pages/Kit src/styles` (the Kit tests, `theme.test.ts`: 8 files, 107 tests) | 0 |
| `vitest run src/pages/connected/ConnectedApp.test.tsx src/pages/library/Module.test.tsx` (2 files, 287 tests) | 0 |
| Headless Chromium screenshot of the new shape beside six existing shapes at 10px, 6 times zoom (scratch file, not committed) | 0 |

`ModuleTable.tsx`, `Kit.tsx` and `StatusBadge.tsx` were not edited. No Python changed; no paid call.

## Not verified:

- The rest of `src/pages/connected/` (about 47 files) passed in one combined run that also had 8 failures, all in
  `ConnectedApp.test.tsx` and `ReportContent.records.test.tsx`; both pass when run alone. The machine was at load 10
  to 14 from other batches' test runs, which looks like timeouts, but I did not rerun the whole directory quietly.
  Top-level `src/*.test.tsx` and `src/shell` were not run.
- No browser check of the changed components (select wrapping, tab hover, the track n.a.); behaviour is asserted by
  class and DOM in jsdom only. The Tailwind `wrap-anywhere` utility is the one the app already uses. For the new
  shape (round 2) the only look is one headless screenshot of the bare SVG at 10px, not of the badge on a page, and
  no grayscale or contrast check of the neutral badge with the hollow square.
- The hollow square is my pick of shape for "Not ready"; the owner did not name one (OQ-09 says only "its own
  shape"), so the lead may want the owner to confirm it. Other design docs that mention the ten shapes
  (`docs/design/states-2.md`, `component-map.md`) are outside this chunk's file list and were not edited.
- R-3 (`web/src/pages/model/slice/types.ts:392`, a comment that says a null range draws no marker) is not repaired.
- The static library (`apps/issuer-library`) and the Python build were not looked at for a second drawing of the
  Source readiness shapes; a grep of `src`, `apps` and `tests` found no shape table outside `web/`.
- `npm run unused` (knip), `duplication` and the full `build`/file-open gates were not run.
