# Redesign S8: Library and Coverage

2026-11-24. Branch `claude/redesign-s8-library-coverage`. Work package S8 of
`docs/superpowers/plans/2026-11-24-frontend-redesign.md`. Requirement: `docs/design/screen-map.md`
§ Library, § Coverage, § On every screen; the Coverage ruling
`docs/rulings/2026-11-24-coverage-page.md` binds Coverage.

## 1. Screen-map rows covered

### Library

| Rank | Row | Needs | Built as | Gap today |
|---|---|---|---|---|
| P1 | Each issuer, stance as a word chip, change as "was → now"; sorted changed first, then weakest | Method: typed stance (CP-6) | One row per issuer; a stance chip slot | **Gap.** No typed stance is published. The chip slot draws the designed gap ("Stance not stated") and the expanded row says why. "was → now" and the sort need a stance, so rows keep the publication's order (newest as-of date first within the catalogue order the service sent). |
| P1 | Search by issuer | Code | Command field at the top of the list (searchbox, "Search issuers") | none |
| P2 | Net leverage, interest cover, liquidity with direction against the prior period | Code | Three aligned mono columns, each with a two-point mark (prior → current) and the change word from the catalogue's own `prior`/`change` | Liquidity: the catalogue states `cash` and `undrawn` as separate figures and no total; the column draws cash, and undrawn beneath it when stated, never a sum. A figure with no stated prior draws its value and "No prior period stated" with no mark. A missing figure is the gap cell, never zero. |
| P2 | Pathway, as-of date, run state | Code | Chips in the row | Run state is what the publication knows: Delivered, Test preview, or No report published |
| P2 | Next dated event | Code | Date in mono with event name, issuer row right | **Gap in the row, filled on expand.** The library index does not carry events and placing them is the Calendar's logic (`buildCalendar`); a Python copy would duplicate it. The row draws "Dates are on the Calendar" with a link; the expanded row loads that run's scoped snapshot on demand and draws the first upcoming row from the existing `buildCalendar` / `upcomingCalendarRows`. See Requests |
| P3 | Filters: sector, pathway, state | Code | Filter chips (toggle buttons in labelled groups) under the search | none |
| P3 | Earlier runs | Code | Row expands (disclosure button, `aria-expanded`); earlier runs newest first, each with its date, pathway and an Open report link | none |
| P1 (empty) | No runs yet, one action | Code | Existing `EmptyState` with its single "Start a run" link (`/start`, inside `main footer`, as the synthetic-run driver clicks it). Not moved or renamed | none |

Also kept from the old page: the credit view paragraph with its single sources link and the
"Read this credit view in Evidence" rule for a source-bearing passage (moves into the expanded
row); `HeadlineFigures` with its on-demand trace lookup (all six headline figures, in the
expanded row); the retained-preview callout and read-only mode; unavailable saved filters shown
as such; load, unreachable and failed states with Try again; address-bound filters (`q`,
`sector`, `pathway`). The Cards/List layout switch goes: the screen map has one row per issuer.
`layout` is dropped from the address.

### Coverage

| Rank | Row | Built as |
|---|---|---|
| P1 | Issuer × module, five states | **Modules** view (default): matrix, column groups by the five stages (`report/stages.ts` `byStage`), each cell a status shape and its word (Delivered, Delivered with gaps, Not assessable, Unreadable, No handoff published, Not asked for in this run, No handoff; run plan not recorded). Issuer name opens the issuer detail; compare checkbox kept |
| P1 | One figure across issuers for a chosen period | **Rank** view: horizontal bars in the figure's own unit, one list per reporting unit (units never ranked together); the exact figure text, period, Basis and a View sources link per row; "Not ranked: no figure for P in the newest run" listed apart with the reason, no bar, never zero; grouping (sector, pathway, choice word) and order kept |
| P2 | Find a sentence or figure | **Find** view: results grouped by issuer, one passage per list item with module, label, creditor impact, confidence and a View sources link each |
| P2 | One figure over the periods | **Trend** view: small multiples, one panel per issuer, one shared y scale and shared period axis, drawn from the newest run; a panel with fewer than three points is a figure with its values written, not a line; a table view of every value; reporting unit choice |
| P2 | Saved groups; sector and pathway filters | Chips above the views: sector and pathway chip groups, saved groups as chips, active filters as removable chips; Module / Module state / Module confidence selects remain behind one "More filters" disclosure because fourteen module chips would be the wall of controls the screen map removes |
| P3 | Open the issuer's report at the figure | The per-row View sources and Open report links, as before |
| E | Module codes, hashes, file names, run folders | Not drawn (the existing test keeps asserting it) |

Views use the kit `Segmented` (buttons, `aria-pressed`); periods are chips. The page adds no
parser, score, average or difference; every figure is `figure(fact)` as written; missing is
listed apart; `coverageData.ts` is not changed (it already carries every field the screens use).

## 2. Components, data, states, grid

New files (all under `web/src/pages/connected/`):

- `libraryRows/IssuerRow.tsx`: one issuer: name (h3, link to the newest report when published), sector, stance slot, three `FigureMark`s, chips, next-event slot, expand button, expanded panel.
- `libraryRows/FigureMark.tsx`: value, two-point mark (aria-hidden SVG, prior grey, current teal/orange by `tone`), change word via `changeText` + `ToneMark`; gap cell via `Missing`.
- `libraryRows/Chips.tsx`: `ChipGroup` (labelled group of toggle chips, unavailable value shown) — used by Library and Coverage.
- `libraryRows/nextEvent.ts(x)`: lazy hook: `getSnapshot(folder)` → `buildCalendar` → `upcomingCalendarRows`; states loading, none, error.
- `coverage/Controls.tsx`, `coverage/Matrix.tsx`, `coverage/Rank.tsx`, `coverage/Find.tsx`, `coverage/Trend.tsx`, `coverage/StateMark.tsx`: the Coverage views; `Coverage.tsx` keeps the data hook, address state and filter state and composes them.

Reuse (no second copy): `Segmented`, `BarCell`, `StatsStrip` not needed; `Tile`/`GapNote`/`Figure`/`Well`; `StatusShape`; `StatusBadge`; `TextLink`; `HeadlineFigures`; `PublishedSource`; `Missing`; `byStage`.

States: loading (skeleton rows in the final layout, `role=status` "Loading reports"); empty (EmptyState); error / unreachable (Alert + Try again); no matches (status line + Clear filters, focus returns to search); not published run (chip "No report published", no link); preview (callout); read-only (no Start a run).

Grid: 1440 px — Library row is a CSS grid of nine tracks: issuer (minmax 220) · stance · three figures · pathway/as-of/state chips · next event · expand; header labels row visible from `lg`. 390 px — each row stacks: name and chips, then the three figures in a three-column strip, then stance and the next-event slot; header row hidden and each cell carries its own label. Coverage: Segmented and chips wrap; Modules matrix scrolls inside its own box with the issuer column sticky (page never scrolls sideways); Trend panels 1 / 2 / 3–4 across; Rank bars full width with the table's other columns inside the same scroll box.

## 3. Files and tests

Change: `LibraryIndex.tsx`, `Coverage.tsx`. Add the files above. `react_frontend/library_cards.py`: unchanged (no field the map needs is in the publication but unsent that does not require new analysis; events are the exception, see Requests). `coverageData.ts`: unchanged. `docs/design/preview/drive-synthetic-run.cjs`: unchanged if the link keeps its name.

Tests written before each block: `FigureMark.test.tsx`, `IssuerRow.test.tsx`, `Chips.test.tsx`, `nextEvent.test.tsx`, and one per Coverage view. Rewritten (they pin layout or control form): `libraryStates.test.tsx` (radio/select → chips; heading and empty state kept), `shellFinalAudit.test.tsx` Library group (C1-019 selects/radios → chips; C1-022 label class), `LibraryIndex.metricTrace.test.tsx` (preview-in-both-layouts; the trace tests now expand the row first), `Coverage.test.tsx` (`radio` → `button` pressed; selects → chips). Kept as they are: every test of values, links, states, gaps, groups, bounds, preview, empty, no code/hash/file name.

## 4. What is drawn as a gap and why

| Gap | Why |
|---|---|
| Stance, was → now, sort by change | Typed stance (CP-6) is a Method change outside the frontend (`screen-map.md` § What must change, item 1) |
| Next event in the collapsed row | Events are not in the library index; filled on expand from the existing calendar reader |
| Liquidity as one number | The catalogue states cash and undrawn apart; delivery adds no analysis |
| Rank bars of mixed sign | `BarCell` draws from zero; a negative figure draws its own length in the signal tone with its sign in the written text; no figure is rescaled |

## 5. Sub-agent plan

- Spec and the Rank / Trend / Find / Matrix logic (reads handoff data, money-adjacent comparisons): done here on the session's own model, high.
- Presentational blocks (`FigureMark`, `Chips`, Library skeleton) and the test rewrites: Sonnet agents, medium.
- Fixture work (multi-issuer Coverage fixture for screenshots): Haiku.
- One independent review of the session's diff (given the diff, not these conclusions) before reporting.

## 6. Requests to the coordinator

1. `BarCell` fixes the figure column at 5rem (`w-20`); Coverage figures can be wider ("1,250.00 US$m"). Coverage overrides it with a parent arbitrary variant; a `valueWidth` prop would be cleaner. Not blocking.
2. Library next event: a typed `nextEvent` in `/connected/library` would remove the lazy snapshot load. It needs the event placing in Python (a copy of `eventRecords`) or the Calendar's output sent in the index; not built here.
3. If stance lands (CP-6 typed), the Library chip slot, the "was → now" and the sort are one small change in `IssuerRow.tsx` and `LibraryIndex.tsx`.

## 7. Verification

Phase 2, 2026-11-24. Synthetic-run preview (README recipe) plus a fixture-driven page.

**How multi-issuer pages were made.** The synthetic driver was run twice (the second from a scratch
copy with another issuer name, as-of date and a direct `/start` visit, because with one report in
the library the "Start a run" link is in the page header, not in `main footer`), giving two
issuers. For five issuers with different values, states, gaps, two earlier runs and an unpublished
run, a scratch Playwright script served fixture JSON for `/connected/library` and
`/connected/coverage` over the built app. The fixture values are synthetic and invented for layout.
`drive-synthetic-run.cjs` is unchanged: the empty-state "Start a run" link is kept, inside
`main footer`, with the same name.

**Screenshots looked at (1440 and 390):** Library empty; Library populated, synthetic (2 issuers)
and fixture (5 issuers, one row open); Coverage Modules, Rank, Find, Trend, synthetic and fixture.
What was seen and fixed: the issuer name ran into the stance chip and the Calendar link ran past the
row edge at 1440 (name and link now wrap; link text shortened to "Open Calendar"); the 14-column
matrix was wider than the content (column and cell padding reduced, header names at caption size).
No horizontal page scroll at 390 on any of the ten shots (`scrollWidth <= innerWidth`).

**Seen and left:** at 390 the Coverage filter area (view control, search, sector and pathway chips,
more-filters line, figure strip, groups) is about 1,100 px tall before the matrix starts; it works
and nothing overflows, but a phone reader scrolls a long way. The Library row at 390 stacks to
about 770 px per issuer. The shell's top bar at 390 clips "Run activity" and shows no "Start a run"
(frozen shell, not this package). Find on the synthetic run is 10,000 px because every module says
the same sentence for every field.

**Checks run:** `npx tsc --noEmit`; `npx eslint --max-warnings=0` and `npx prettier --check` on every
changed file; `npx vitest run src/pages src/components src/shell src/styles` (320 files, 5,332
tests pass; one unrelated test, `report.auditFollowups` T17, failed once under load in a wider run
and passes alone and on the base); `npm run build`; `npm run unused` (reports `Bento` and
`LeadProps`, which belong to the coordinator's frozen files; nothing of this package);
`uv run python tools/quality_gate.py` (0 findings). **Not run:** Python tests, the weekly full suite,
`npm run gates`, a retained-TransDigm fixture pass of the Library (no multi-issuer retained
publication exists; the Library figures were checked on synthetic and fixture data only).

**Tests rewritten because they pinned layout or control form:** `libraryStates` (select and layout
radio to chips), `shellFinalAudit` Library group (C1-008, C1-019, C1-022 and the two credit-view
tests now open the row first), `LibraryIndex.metricTrace` (the retained-preview test no longer has a
layout switch; trace tests open the row; the scoped snapshot is now read when a row is opened for its
next event as well as when a figure is traced, and the test says so), `ReportLibrary.design` (three
tests), `Coverage.test` (view radios to pressed buttons; period, saved-group and sector controls to
chips). Every assertion on values, links, gaps, groups, bounds, preview and empty states is kept.
Added: `Chips`, `FigureMark`, `IssuerRow`, `nextEvent`, `coverage/Trend`, `coverage/views` tests.
