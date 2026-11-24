# Redesign S6: Changes and Calendar

Package S6 of `docs/superpowers/plans/2026-11-24-frontend-redesign.md`. Branch
`claude/redesign-s6-changes-calendar`. Owns `report/Changes.tsx`, `report/Calendar.tsx`,
`visuals/EventLane.tsx` and new files beside them.

## 1. Screen-map rows covered

Report · Changes (reader: Decider; goal: compare with the earlier run)

| Rank | What | Form | Place | Needs |
|---|---|---|---|---|
| P1 | Verdict in one sentence, stance was → now | Largest type | Top tile | Code; Method for typed stance |
| P1 | Measures that moved, earlier → current, with the stated cause | Ranked list, largest move first, dumbbell each, cause in words | Main column | Code; Method: causes often "Unresolved" |
| P2 | Which modules changed their conclusion | Module × status matrix | Right column | Code |
| P2 | Maturities then and now | Two walls on one axis | Under the measures | Code |
| P3 | Measures that did not move | Collapsed count, expandable | Bottom | Code |
| P3 | Limitations added or removed | Two short lists | Bottom | Code |
| P1 (empty) | No earlier run, one fixed sentence | Empty state | Centre | Code |

Report · Calendar (Decider)

| Rank | What | Form | Place | Needs |
|---|---|---|---|---|
| P1 | Everything dated, on one axis | Lanes on a true time axis; as-of date marked | Top | Code; Method for typed event kind |
| P2 | The list behind the axis | Table sorted by date with owning module and a trace | Under the axis | Code |

## 2. Components

### Changes (`ReportChanges`, props unchanged: `snapshot, run, entries, change`)

12-column `Bento`; one `h2` "Changes since the last run" above it (the page's only h2; tiles are h3).

| Tile | Span (1440 / 390) | Reads | States |
|---|---|---|---|
| Verdict | 12 / 1 | CP-8 selected entry, `Bottom line` passage (first paragraph) in display type; `pack.prior.as_of` and `pack.current.as_of` as two chips ("Earlier run, as of …" → "This run, as of …"); stance was → now as a `GapNote` ("The comparison does not state a stance for either run") because stance is not a typed field | data; no Bottom line in the handoff: the chips and the gap only; no comparison: the empty state below |
| Measures that moved | 8 / 1 | `comparisonRows(change,"reader")` plus `pack.measures` for tone; Cause and Effect cells of CP-8 `What changed: the issuer` (by measure label, same match as `comparisonTrace.measure`); trace per row | list / table view (`Segmented`, "List" and "Table"; the table is the existing `ComparisonTable`); a measure with no stated cause draws "Cause not stated"; "Unresolved" is drawn as written in a signal-edged chip; not-assessable rows listed after, with the reason |
| Modules | 4 / 1 | `pack.modules`, `verdicts.modules[code].status/cause/why`; trace per row | matrix rows: Unchanged; Strengthened, Weakened, Reversed (column "Revised", exact word kept); New; Not run this time (column "Missing"). A status the table does not give: no cell marked, "Explanation not stated". Each row expands to Earlier and Current bottom lines |
| Maturities then and now | 12 / 1 | `pack.maturity_profile` | wall pair on one axis; table view; gap tile with the stated reason when omitted or unusable; a missing side is a hatched cell, never zero |
| Did not move | 12 / 1 | comparable rows with a zero difference | `details`, count in the summary, closed |
| Limitations added / removed | 6 + 6 / 1 | CP-8 `Limitations ledger`, status `New` (added) and `Closed` (removed), with "What closed it" | each list or its own "none recorded"; reference columns never drawn |
| The comparison's findings | 12 / 1 | `ReportFindings` for CP-8 (S2's component, unchanged) | below the bento; carries the full ledger |

Dumbbell: one inline SVG per measure. Axis spans zero to the larger figure (both ends padded) so
the segment length is the real size of the move; the earlier dot is the prior-series grey ring, the
current dot the primary or, where the owner's table gives a tone, the better/worse colour; the
tone is also a word and a shape (`ToneMark`). Never a column chart. Ranking key is the move
relative to the earlier figure, computed only to order the list; no computed number is drawn.
Sources of a figure stay in the trace control.

Empty states (one `Tile`, hatched, one sentence, one action): first run ("No earlier run to
compare." with its explanation), and the fixed sentences "The comparison was planned but not
produced for this run.", "This run was not compared with an earlier run.", "No comparison was
recorded for this run.", unreadable comparison; actions as today (Open the Overview; Review
comparison evidence).

### Calendar (`Calendar`, props `calendar` plus optional `asOf`)

`buildCalendar` and `upcomingCalendarRows` keep their signatures and results.

| Block | Span | Reads | States |
|---|---|---|---|
| Axis | 12 / 1 | `calendar.rows` (`from`, `to`, status lane) | lanes Historical, Scheduled, Scenario, User reminder (recorded status; typed event kind is Method item 7, so kind lanes are not drawn); true time axis between the first and last date with year ticks; a day event is a mark, a month/quarter/year event is a span with its width the recorded period; as-of date a vertical rule labelled "As of …" when `asOf` is valid; legend toggles lanes (kept from the old figure); no rows: sentence and gaps as today |
| Table behind the axis | 12 / 1 | same rows, date order | event, date and precision, status, credit relevance, owning module, trace; sorted by date; a table view of the same figure |
| Gaps and unplaced rows | 12 / 1 | `calendar.gaps` | as today, in a gap-toned tile, reasons in words |

Marks at 390 px: the axis scrolls inside its own figure (no page overflow); lane labels stay left.

## 3. Files

Change: `report/Changes.tsx`, `report/Calendar.tsx`, `visuals/EventLane.tsx`. Add:
`report/changes/{rank.ts, Dumbbell.tsx, MeasureList.tsx, ModuleMatrix.tsx, MaturityPair.tsx,
Verdict.tsx, LedgerLists.tsx, EmptyState.tsx}`, `visuals/EventAxis.tsx`, tests beside them.
Delete: none.

Tests rewritten (layout or class names): `Changes.colour.test.tsx` (the worse colour is the
orange `warning` token, not red, per DESIGN.md), the two "card" layout tests in `Changes.test.tsx`,
the year-strip and marker tests in `Calendar*.test.tsx`. Kept unchanged: every value, period,
cause, href, empty-state sentence, unplaced-row and bad-date test.

## 4. Drawn as a gap, and why

- Stance was → now: stance is not a typed field (Method item 1).
- Cause of a moved measure: CP-8 often writes "Unresolved" (Method item 6); drawn as written.
- Calendar lanes by kind (maturity, test, reporting, corporate): events carry no typed kind (Method item 7); lanes are the recorded status.
- Maturities: only the periods the pack carries; no interpolation of missing years.

## 5. Sub-agents

| Part | Model · effort | Why |
|---|---|---|
| Spec, Changes data layer, tests of values and causes | this session (Sonnet) | reads handoff data |
| Calendar axis (`EventAxis`, `Calendar`, its tests) | Sonnet · medium sub-agent | contained, presentational |
| Independent review of the diff | Opus · high sub-agent | given the code, not these conclusions |

## 6. Requests to the coordinator

1. `ReportLibrary.tsx` (S1) should pass `asOf={run.asOf}` to `<Calendar>`; the prop is optional and the as-of rule is drawn only when it arrives.
2. Overview's changes tile and dates tile are untouched by this package; `comparisonForRun`, `comparisonRows`, `buildCalendar`, `upcomingCalendarRows` and `ComparisonTable` keep their signatures.

## 7. Verification

(filled in during phase 2)
