# T05 review: Library and Run activity states (C1-002, C1-003, C1-031, C1-004 Library read failure)

Reviewer: fresh agent (did not write the change), Sonnet 5.5. Worktree
`/home/user/credit-os2/.claude/worktrees/agent-a5559f8f6956ecfc1`, branch `worktree-agent-a5559f8f6956ecfc1`,
commit `800accec`, base `9f925943`. Diff read in full: `git diff 9f925943 800accec`. No code file was edited.
Scratch scripts are under the session scratchpad, not in the repository. The service used was this worktree's
`proof.serve` on `C1_BASE=http://127.0.0.1:8745` only; I stopped it afterwards.

## Verdict: PASS

No High or Medium finding. Three Low findings and one Info note below.

## What I re-ran

| Check | Command | Result |
| :--- | :--- | :--- |
| Connected vitest | `cd web && timeout 300 npx vitest run src/pages/connected` | exit 0, 51 files, 997 tests (83.6 s) |
| New tests fail on BASE source | a scratch copy of `web/` with `LibraryIndex.tsx` and `RunActivity.tsx` taken from `9f925943`, then the two new test files | 12 failed, 1 passed: the same 12/1 as the report (the one that passes is "a library with a report keeps its filters") |
| lint / format:check / typecheck / unused | `npm --prefix web run <gate>` | all exit 0 |
| Build | `timeout 600 npm --prefix web run build` | exit 0 (5.8 s) |
| C1-002 probe | `C1_BASE=http://127.0.0.1:8745 node .../c1-002-library-empty-state.cjs` | exit 0, `svgInMain` 1, `selects` 0, `radios` 0, links `["Start a run","Start a run"]` |
| C1-031 probe | same, `c1-031-run-activity-read-failure.cjs` | exit 0, `alerts` 1, list and counts kept, "Showing the list as it was at 17 Nov 2026, 08:00 UTC", list back after the next poll |
| C1-004 probe | same, `c1-004-error-states.cjs` | exit 0; "library read fails": Error alert, icon, one action; "service unreachable (library)": "The service cannot be reached". Its "unknown report" line is still the plain line (T17's half, not T05's) |
| C1-003 probe (extra) | same, `c1-003-run-activity-table-clipping.cjs` | exit 0 but vacuous, as the report says: the probe's selector `div.overflow-hidden` no longer matches, so every width prints `null`. I measured instead (below). |

No load timeout occurred, so nothing was re-run.

## Judged points

### (1) Hiding Sector, Pathway, Search and Cards/List on an empty Library

Required by the finding, not forbidden by R5, nothing usable is lost.

- The finding's title names the controls as the defect ("drawn under filter and layout controls that have
  nothing to act on") and its `suggested_change` says "hide the filters and Cards/List toggle while there is
  nothing to filter". The lead dispositioned it `repair`, not `owner`. D-31 itself asks for the empty-state
  component with icon, title, one sentence and the next action; it does not mention hiding, so the finding, not the
  rubric, carries the requirement. Content matrix CM-033 describes search, filter and Cards/List as part of listing
  completed runs; CM-036 says an empty library "says so".
- What the reader could use: with no report the Sector and Pathway selects offered only "All", the toggle laid out
  nothing, and BASE already hid the Search box for an empty index. The Cards/List choice was local state of
  `MatchRuns`, so it was never kept across a mount anyway. No figure, name, date or source was removed.
- They come back: with the real synthetic service on 8745, a run finished, then (a) a fresh load of `/` and
  (b) in-app navigation Run activity then Library each showed `selects 2, radios 2, search 1` and the report card;
  the empty state was gone. The Library reads its index once per mount, exactly as before, so a tab left open does
  not gain the controls until the next load or navigation (unchanged behaviour).
- They stay for no match: typing a string that matches nothing showed "No issuers match these filters." with the
  Search box, both selects and the toggle still drawn (`selects 2, radios 2, search 1`); clearing the box brought
  the card back, and List drew the table. `ReportLibrary.design.test.tsx` lines 136 and 174 keep covering this and
  pass unchanged.

### (2) C1-003 measured at 1280 and 1440 px

Scratch script: Playwright, `C1_BASE` 8745, the activity answer supplied in the browser; for every `th` and `td`
word, a client-rect check against the smallest clipping ancestor (the `Table`'s own `overflow-x-auto` and the
panel), plus a mid-word-break check (a word whose range has more than one rect), plus whether the table's scroller
needs to scroll. Positive control: forcing the old grid (`minmax(0,1fr) 440px`) on the repaired page makes the
detector report "assessment" and "credit" past the panel edge and `needsScroll: true`, so the detector works.

| Case | 1280 | 1440 |
| :--- | :--- | :--- |
| Ordinary names (the probe's four, five pathway labels incl. "Earnings Update", "Relative Value"), Running + Waiting: Waiting table | 560 px in a 560 px panel, no scroll, nothing clipped, no mid-word break | 640 in 640, the same |
| Same, Waiting alone | 1146 in 1146, the same | 1306 in 1306, the same |
| Ended table (five columns, 92-char reason) | 1146 in 1146, nothing clipped, no mid-word break | 1306 in 1306, the same |
| Long names (81, 65 and 83-char issuers, a 65-char unknown pathway label), Running + Waiting: Waiting table | 745 in 560: scrolls; Pathway column and the end of the long names are outside the visible panel until scrolled | 745 in 640: scrolls, the same |
| Same, Waiting alone, and the Ended table | no scroll, nothing clipped | no scroll, nothing clipped |
| Long pathway label alone | wraps inside its cell, no clip | the same |

Sweep of one issuer name, cut at 35 to 80 characters, with one Running and one Waiting run (nowrap link, as
`TextLink` is):

| Width, grid | Waiting table scrolls from | Running card leaves its column from |
| :--- | :--- | :--- |
| 1280, old `1fr` + 440 px | 45 characters | never (up to 80 characters tried) |
| 1280, repaired two equal columns | 64 characters | 70 characters (5 px); at 75 it is 46 px past and overlaps the Waiting panel; at 80, 84 px |
| 1440, old | 45 characters | never |
| 1440, repaired | 75 characters | 80 characters (4 px) |

So on ordinary inputs the repair does what the finding asks: no column of the Waiting or Ended table is clipped or
cut mid-word at 1280 or 1440. For very long issuer names the Waiting table still scrolls inside its panel (it did
before, from 45 characters; now from 64 at 1280 and 75 at 1440), and a trade is introduced (Low finding 1).
Both tables' text wraps in the cell for pathway, reason and date; only the issuer link never wraps.

### (3) C1-031

Holds. Traced and exercised:

- State: `read` (last good list) and `failed` (latest poll did not read). `setRead` and `setFailed(false)` are
  called together after the await, and a failure sets only `failed`. So the stale list can be on screen only while
  `failed` is true, and the warning is drawn whenever `failed && read`. I found no path that shows an old list
  without the warning after a failed poll.
- Time: the sentence uses `read.updated`, which `react_frontend/run_activity.py:353` fills from
  `snapshot["updated"]`, the time the service built that list. It is the same value the header shows as "Updated".
  Real service plus an intercepted dropped connection (`connectionreset`) and not only a 500: good list, then
  "Run activity could not be refreshed ... Showing the list as it was at 17 Nov 2026, 08:00 UTC. This page reads
  it again every few seconds.", one alert, counts and the Alpha card kept, then the alert went away on the next good
  poll.
- First read: with no list yet it is an error alert with the old title "Run activity could not be read", the old
  sentence word for word, and the old "Open the library" action; a heading with that title and the "No run in
  progress" empty state are not drawn.
- An answer without a `runs` array is a failed read, not an empty list (unit test, and read by the code).
- A persistent failure keeps one alert element with unchanged text, so it is not re-announced each poll (C1-024).

### (4) Library read-failure alert

Holds. 500: "The library could not be loaded / The service could not read the published library. Try again, or ask
whoever runs the service to check it." A dropped connection: "The service cannot be reached / The library could not
be loaded. ..." and never "Failed to fetch". Both are an error Alert with the shape icon and one "Try again"
button. In the browser, with the first request refused and the second passed through to the real service: the alert
showed, Try again made request 2, the library drew and the alert count went 1 to 0. A retry held pending keeps the
alert (no "Loading reports" line, no flash), and an earlier request is aborted when a later one starts, so a late
answer cannot overwrite a newer one. `git diff 9f925943 800accec -- web/src/components/application/empty-state/empty-state.tsx`
is empty: the component is used as it is.

### (5) No test weakened, no file outside T05

`git diff --name-only 9f925943 800accec`: `LibraryIndex.tsx`, `RunActivity.tsx`, the two new test files and the
report `T05.md`. `RunProgress.tsx` is not touched, nor `layout.tsx`, `useResource.ts`, `empty-state.tsx`, Signal or
any probe. No existing test was edited, skipped or loosened; `ReportLibrary.design.test.tsx`,
`ConnectedApp.test.tsx`, `runReasons.test.tsx` and `runStates.test.tsx` pass unchanged. C1-006 is not built (R16)
and its probe still exits 1, as the report states and as R16 allows. C1-003's phone half is not repaired (R14).

## Review findings

1. **Low** `web/src/pages/connected/RunActivity.tsx:317`: `xl:grid-cols-2` narrows the Running column (from about 684
   to 562 px at 1280, 842 to 642 at 1440), and the Running card's nowrap issuer link then leaves its column from
   about 70 characters at 1280 (75 characters: 46 px past and under the Waiting panel; 80: 84 px, and in the
   screenshot "1 of 3 modules" and a module badge are cut off by the Waiting panel). At BASE that case did not
   overflow. The report does not
   name it. A name that long is an unusual input, so under R3 it is parked rather than repaired; the net effect on
   ordinary names is a clear improvement (the Waiting table fits up to about 60 characters at 1280 where it
   scrolled from 45).
2. **Low** `docs/audit/2026-11-16-final/output/5-repair/T05.md:201`: the report says a name "wider than about 400 px"
   still scrolls at 1280. Measured, the Waiting table scrolls from a 64-character issuer name at 1280 (about 520 px)
   and from 75 at 1440. State that threshold when the closure is recorded.
3. **Low** `web/src/pages/connected/runActivity.states.test.tsx:132-145`: the "not cut off" test walks only the
   ancestors between the table and its `section`, so it guards the panel class (`overflow-hidden`), which the report
   itself shows is not what cut the column. The grid width (`xl:grid-cols-2`, the actual repair) is outside that
   walk, and putting `xl:grid-cols-[minmax(0,1fr)_440px]` back would pass every test. jsdom has no layout, so a
   class assertion on the Running/Waiting wrapper is the most a test can do here; the browser measurement above
   stands in for it.
4. **Info** `c1-003-run-activity-table-clipping.cjs`: it exits 0 vacuously (`null` at every width). Close C1-003 on
   the measured table in (2), not on that exit code. The probe is the audit's answer key and was not edited.

Not verified:
- Widths between 1024 and 1279 px (there the two groups stack at full width) and any width under 1024 px: R14 puts
  narrower than desktop out of scope; the 768 and 390 px behaviour was not looked at.
- Real scrollbars: the headless browser hides them, so whether the 745 px Waiting table's inner scrollbar is easy to
  see on the work PC's browser was not seen.
- A request that hangs with no answer: `getActivity` has no timeout, so a hung poll shows the old list with no
  warning and schedules no further poll; this is as before the change and was not exercised.
- The wording of the new alerts and of "A report appears here once a run has finished." was judged for truth, not
  read by an analyst; no screen reader or keyboard was used (R14, R16).
- `npm --prefix web run gates` in full, Signal's tests and `proof:connected` were not run (the change touches no
  Signal file and no shared module).
- A malformed library answer such as `{}` (no `catalogue`) still throws in `ReportLibrary`, as before; not
  exercised against a live service.
