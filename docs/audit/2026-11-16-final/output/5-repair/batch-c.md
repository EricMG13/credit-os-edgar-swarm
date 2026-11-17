# Batch c: Low and Info repairs

Branch `audit/lead-batch-c`, worktree `wt-batch-c`. Ten findings: seven repaired, three closed by owner
rulings the lead sent while the batch ran (R14 twice, R16 once), none open.

## Outcomes

| Finding | Outcome | Commit |
| :--- | :--- | :--- |
| C4-037 | closed by R14 (lead message): no change, nothing committed | none |
| X1-021 | closed by R14 (lead message): no change, nothing committed | none |
| X1-011 | closed by R16 (lead message): the repair was already committed when the message came, left in place as told | 27e591d |
| X1-002 | repaired | 664bb77 |
| X1-009 | repaired (OQ-09) | d7afe32 |
| X1-017 | repaired (OQ-09) | c0b4ed5 |
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
- Design system: the Tabs row (`docs/design/design-system.md`, component table) now says so.
- Test (new, written first, failed): `tabs.test.tsx`, both orientations: selected styling; hovered unselected has
  `text-secondary`, no line, not the selected colour; hovering the selected tab leaves it as it was.

### X1-017: "Not ready" shares the slashed circle (OQ-09)

- Files: `web/src/components/status/sets.ts` (`Not ready` is now `diamond`, `error`), `docs/design/design-system.md`
  (Source readiness row, the shape recurrence sentence now lists Not ready under the diamond, and a rationale bullet).
- Choice made by me: OQ-09 says "give Not ready its own shape". The design system fixes ten shapes, each with one
  meaning, and `shapes.tsx` is outside my file list, so I used the existing shape that means what Not ready means:
  the diamond, "Problem" (Failed, High, Will refuse and Unreadable use it). The tone changes from neutral to error
  with it, because every diamond in the system is error-toned. If the owner wanted an eleventh shape, that is a
  `shapes.tsx` change and a revised "ten shapes" line; the lead can reopen it.
- Tests (written first, failed): in `sets.test.ts`, the slashed circle belongs to "Not assessable" and no other
  state; Not ready is the diamond in error. The existing row-for-row test against the design system still passes.

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

## Not verified:

- The rest of `src/pages/connected/` (about 47 files) passed in one combined run that also had 8 failures, all in
  `ConnectedApp.test.tsx` and `ReportContent.records.test.tsx`; both pass when run alone. The machine was at load 10
  to 14 from other batches' test runs, which looks like timeouts, but I did not rerun the whole directory quietly.
  Top-level `src/*.test.tsx` and `src/shell` were not run.
- No browser check of the changed components (select wrapping, tab hover, the track n.a., the diamond badge) and no
  grayscale or contrast check of the diamond-in-error badge for Not ready; behaviour is asserted by class and DOM in
  jsdom only. The Tailwind `wrap-anywhere` utility is the one the app already uses.
- Whether the owner meant "its own shape" for Not ready to be a new eleventh shape (see X1-017).
- The static library (`apps/issuer-library`) and the Python build were not looked at for a second drawing of the
  Source readiness shapes; a grep of `src`, `apps` and `tests` found no shape table outside `web/`.
- `npm run unused` (knip), `duplication` and the full `build`/file-open gates were not run.
