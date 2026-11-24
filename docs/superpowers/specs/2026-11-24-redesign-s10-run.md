# Redesign S10: Run activity, Run progress, shared pipeline

Branch `claude/redesign-s10-run`. Plan: `docs/superpowers/plans/2026-11-24-frontend-redesign.md`.
Requirement: `docs/design/screen-map.md` § Run activity and run progress, § On every screen,
§ States every screen draws.

## 1. Screen-map rows covered

| Screen | Rank | What to show | How | Where | Needs |
|---|---|---|---|---|---|
| Activity | P1 | Runs in flight and their state | List, running first; state chip; progress as modules done of total | Main | Code |
| Activity | P2 | Failed, capped or interrupted runs with the reason | Reason in words on the row | Main | Code |
| Progress | P1 | The pipeline live: which module is running, done, failed | The same staged node graph as Overview, animated on the running edge | Top | Code |
| Progress | P1 | Spend against the cap | Meter with the amount in mono | Beside the pipeline | Code |
| Progress | P2 | What just happened | Feed, newest first | Under the pipeline | Code |
| Progress | P1 (done) | Open report | One primary button | Top right | Code |
| Progress | P1 (failed) | What failed, why, and what to do | Notice with retry or resume | Top | Code |
| Overview row 7 | P3 | The run as a pipeline (owned by S1; S10 owns the graph it draws) | Five stages, nodes, animated edges, blocked dashed | Row 7 | Code |
| All | — | States: loading skeleton in final layout, empty, unreachable service, read-only preview, synthetic test chip | | | Code |

## 2. Per row: component, data, states, place

### `components/pipeline/Pipeline.tsx` (new, presentational)

`Pipeline({ stages, label })`; `stages: { name; nodes: PipelineNode[] }[]`;
`PipelineNode = { id; name; state: "delivered" | "running" | "queued" | "blocked" | "failed"; href?; word?; detail? }`.
Draws only what it is given; no reading of handoffs or run records.

- Stages are columns from `lg` (24 px gap carries a 12 px stub per node and a bus); below `lg` one
  vertical line with the stages stacked (moved unchanged from `PipelineRow`).
- Node = link when `href` is given, otherwise a static item (same box). Right side: delivered is a
  dot with a screen-reader word; every other state is a status badge (Run states or Module state
  set; `word` picks the exact word, e.g. "Interrupted", "Not run", "Not assessable").
- Edges (`pipeline-flow` is the only animation; inside `prefers-reduced-motion: no-preference` already):
  the edge leaving a delivered node and the edge into a running node animate; a blocked or failed
  node passes nothing on (no out-edge) and its in-edge is dashed orange when blocked; queued edges
  are plain connector colour.
- Running node: tinted fill and accent edge. Blocked: dashed orange outline (as Overview).
  Failed (module stopped without an assessment word): badge tone sets the edge, never red for a finding.
- Also exports `PipelineLegend` (dot/dash keys for the states present) for the run page.

### `report/overview/PipelineRow.tsx`

Same export, same props, same output. Maps its nodes (`Delivered` → delivered, `Not assessable` →
blocked, anything else → queued with its word) and renders `<Pipeline label="Stages">` inside the
existing well, the legend and the bottom lines unchanged. `lowerRows.test.tsx` stays green.

### Run progress (`RunProgress.tsx`)

12-column bento (`Bento`, `Tile`, `Well`, `GapNote`, `Figure`), reading `ConnectedRun` as today
(`getRun` 2 s poll, `getReport`, `runFigures.ts` helpers; no new request).

1. Header (frozen `PageHeader`): breadcrumb; issuer; chips: run state, pathway, as-of, **Synthetic
   test** (drawn from the first paint, before the run loads); right: **Open report** (primary link,
   only when the report is ready) and "Use this run’s inputs" (secondary, unchanged conditions).
2. Notice (full width, top, only when `reason`, held, stalled, waiting or report problem): the
   existing Alert texts and roles kept. For failed, capped, rejected and interrupted it also says what
   stopped (the module row the record marks, via `moduleSteps`) and what to do (the existing restart
   sentence: review the inputs in a new draft; the new run has its own cap).
3. Pipeline tile (span 8): "Pipeline", `Pipeline` over `byStage(modules)` with a final "Report"
   stage for the Report row, outer list named "Modules in this run" (the test hook), nodes from
   `moduleSteps` (word → state: Finished delivered, Running running, Queued/Not run queued, Not
   assessable blocked with its detail line, Interrupted failed). Caption "n of m modules done" in mono.
4. Spend tile (span 4): amount in mono large, "of USD cap", meter (`ProgressBar`, the existing
   label text), then modules finished and elapsed as mono key-values. No cap or unreadable journal:
   the gap note with the service's reason (`spendFigure.note`); never zero.
5. Feed tile (span 12): "What just happened", `Feed` restyled as compact rows, newest first; the
   existing "activity log is unavailable" and "No activity recorded yet" sentences kept.

States: loading = header + the same three tiles as skeletons; run not found / unreachable / failed =
the existing alerts with Try again or a link back, and the three tiles as gap notes that say the run's
progress is not known (not blank, not zero); finished with report pending / absent / unreachable =
existing alerts and the Check for report control; read-only preview = ConnectedApp's (see requests).

### Run activity (`RunActivity.tsx`)

1. Header: "Run activity", Updated stamp, **Synthetic test** chip when `mode="synthetic"`, "Start a run".
2. Counts strip (`StatsStrip`: Running, Waiting, Ended without a report; `dt`/`dd` pairs kept).
3. Running first: a card per run: issuer link, pathway, state chip (Running), stalled chip, line
   "n of m modules" in mono, a proportional meter and a per-module segment strip (one cell per module:
   done, running, waiting), then the notes (files, reason, name-differs). Module list stays as a
   labelled list of names with state words.
4. Waiting: the table (keyboard-focus follow kept), in a tile.
5. Ended without a report: table with state chip (Failed / Capped / Rejected / Interrupted), ended
   time, and the reason in words as the widest column; "Showing the latest n of m" kept.
6. States: loading skeleton in the same two-column layout with the counts strip placeholder; empty
   ("No run in progress" + "Open the library" + Start a run); unreadable records; failed poll (alert,
   last good list kept); held by the service. All existing texts kept.

### `pages/run/activity/*` (Feed, Summary, ModuleSteps, ActivityPage)

`ActivityPage` is the hash-routed slice surface (`#/run/...`), not the connected app's pages. Its
tests pin its behaviour and it stays. `Feed` is restyled (compact, mono time, state shape) and
shared with Run progress; `Summary` and `ModuleSteps` stay for `ActivityPage` and are no longer
imported by the connected pages. `activity.css` unchanged.

## 3. Files

Add: `web/src/components/pipeline/Pipeline.tsx`, `Pipeline.test.tsx`, `index.ts`;
`web/src/pages/connected/runProgressParts.tsx` (Spend tile, notice, stage mapping),
`web/src/pages/connected/runActivityParts.tsx` (run card, tables) if the page files grow past reading size.
Change: `RunProgress.tsx`, `RunActivity.tsx`, `report/overview/PipelineRow.tsx`, `run/activity/Feed.tsx`.
Delete: nothing.

Tests to add: `Pipeline.test.tsx` (states, edges, link vs static, reduced-motion class contract);
new-layout tests in `runProgress.layout.test.tsx` and `runActivity.layout.test.tsx` (synthetic chip,
spend meter in mono, pipeline from run modules incl. Report stage, notice what/why/what-to-do, gap
tiles when unreachable, running-first order, ended reason on the row).
Tests to rewrite: only locators that pin layout (`runStates.test.tsx` row helper keeps the "Modules in
this run" list name so it stays; `ConnectedApp.test.tsx` expectations on the "Modules and report
delivery" heading, which names the old card, move to "Pipeline").
Behaviour tests kept as is: polling, state names, reasons, earliest unaccepted module at a checker
stop, links, "Open report", Failed / Capped / Rejected / Interrupted words.

## 4. Gaps drawn today

- A module's per-module duration or spend is not in the run record: not drawn.
- Nodes on Run progress have no link: a run's modules have no page until the report is published.
- An open "retry or resume" beyond "Use this run’s inputs" (a new draft) does not exist in the service;
  none is invented.

## 5. Sub-agent plan

- Pipeline component and `PipelineRow` extraction: me (Sonnet, high); the Overview tests are the guard.
- Run progress and Run activity layout: me. Test rewrites and the new layout tests: one Sonnet
  sub-agent after the components exist.
- One independent review of the final diff (Opus, high), given the code not my conclusions.

## 6. Requests to the coordinator

1. `ConnectedApp.tsx`: pass `mode` to `<RunActivity mode={mode} />` (RunActivity accepts an optional
   `mode`; without it no chip is drawn on the list).
2. `ConnectedApp.tsx`: the read-only preview for `run-list` and `run` is a bare "Read-only preview"
   header. The screen map lists a read-only preview state; the page would be better drawn as the
   screen's own header with a gap tile that says runs are not available in a read-only preview. I
   export `RunReadOnly` from `RunActivity.tsx` for that.

## 7. Verification

(Filled in during phase 2.)
