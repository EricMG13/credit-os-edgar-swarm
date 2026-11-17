# Lead answer to repair-3 (ruling L5, 2026-11-17, received 09:27 UTC by message from the lead session)

Take option A. Group 3 may edit web/src/components/timeline/Timeline.tsx and its tests. No group owns the file; the Low and Info batch that touches it runs only after every group has merged.
- Add an optional `trace` key to DatedItem in slice.ts and read.ts.
- Give Timeline.tsx an optional per-item slot. An item with no slot must draw exactly as it does now: check Kit.tsx and the existing Timeline and Card tests.
- Draw one TraceControl per entry in Overview.tsx.

Do not change the fixture's dates. The static app is a design reference (OQ-01), and adding a trace to each date in the fixture is a data choice, so an entry without a trace draws T35's missing-trace marker.

Yes, T35 may run before the S2-006 follow-up. slice.ts is shared with Signal, so run Signal's tests after each change to it.

Record the answer and the extra files in output/5-repair/T33.md.

# Lead answer to repair-3 (ruling L7, 2026-11-17, received 09:41 UTC by message from the lead session)

Take option A. Group 3 may edit web/src/pages/model/parts/ModelShell.tsx and its tests. No group owns it; the sweep that touches it runs only after every group has merged.

After T40 merges, a T25 follow-up draws the same "Design reference with sample data" note inside the model frame, through ModelShell.tsx, and on RunsIndexPage.tsx, using the same words as the note on the other pages. Keep the existing tests as they are. If the "Sample data" badge then says the same thing twice, keep one of the two and name the choice in output/5-repair/T25.md.

# Lead answers to repair-3 on T38 (ruling L8, 2026-11-17, received 09:44 UTC by message from the lead session)

1. C5-005, the connected half (hiding Show sources on the connected Evidence tab): group 3 does not take it. ReportLibrary.tsx is group 2's file. I will repair it myself in lead step 7, after every group has merged, with its own test and review. In output/5-repair/T38.md, record that T38 closes the static half of C5-005 and S4-019 only.

2. S5-001: yes, group 3 may edit web/src/pages/model/slice/types.ts and its tests. No group owns the file. ModelShell.tsx is yours under L7. Do it as you describe: forecast becomes ForecastPage | null; read.ts reads an absent forecast as null; ModelShell falls back to the Model tabs; ForecastPage draws one fixed sentence. The model slice is not imported by Signal, but run Signal's tests anyway if the build touches shared files.

3. The one-case variant is out of scope for T38. A model with one case is still refused at read.ts:302. I am registering it as finding R3-001 and listing it for the owner. Do not change that check.

# Lead note, ruling R12 (owner, 2026-11-17: "anything above 2 rounds should go to opus"; received 10:01 UTC by message from the lead session)

From now on, a task that needs a third round or more (a second send-back after review) runs from that round with Opus workers (model "opus") at xhigh effort, for both the implementer and the reviewer, not Sonnet. This applies now to every task already past round 2. A task still failing review after round 4 is left open and listed for the lead. Note the model of each round in output/5-repair/<task>.md. No reply needed.

Controller's reading: a follow-up that carries out a lead ruling on a part held back from round 1 (T33 S2-006 under L5, T25 model pages under L7, T38 S5-001 under L8) is new work, not a send-back after review, so it does not count as a round under R12. At the time of R12 no task had had a send-back.

# Lead correction to R12 (owner, 2026-11-17: "opus medium"; received 10:01 UTC by message from the lead session)

Rounds 3 and later run on Opus at medium effort, not xhigh, for both implementer and reviewer. Everything else in R12 stands.

# Lead answers to repair-3 on T35 (ruling L9, 2026-11-17, received 10:05 UTC by message from the lead session)

(a) Yes. Group 3 may edit web/src/pages/library/parts/StatementBlock.tsx, web/src/pages/library/parts/MetricTile.tsx and web/src/pages/library/EvidenceSummary.tsx, and their tests. No group owns them, and the batch that touches them runs only after every group has merged. Draw TraceControl unconditionally in StatementBlock. Give MetricTile an optional `traced` prop, true by default, and have EvidenceSummary pass `traced={false}`, because Evidence draws no trace controls by design (OQ-03).

(b) Accept the marker on both surfaces. A missing source drawn as an explicit gap adds to what the reader sees and removes nothing, so R5 does not apply; AGENTS.md wants missing content stated. Condition: T35's reviewer lists every connected place where the marker can now appear, and marks each one "missing by data" or "null by design". Put that list in output/5-repair/T35.md. Each "null by design" place in a group 2 file comes to me for step 7. Do not edit group 2's files. Only the connected Evidence tab must not show a marker; if it does, say so in the report.

I have noted the ReportLibrary.design.test.tsx failure and the fixture cards whose report is null, for step 7.

# Lead answer to repair-3 on T35 (ruling L9a, 2026-11-17, received 10:27 UTC by message from the lead session)

Yes, make the one-line change in StatementBlock.tsx. When traceForRow is given, skip the table-level control; otherwise draw it, marker included. L9's "unconditionally" meant "draw a stated gap where a trace is missing". It did not mean "add a marker to a table whose rows each carry their own trace", so this follows the intent.

Add a test for each case: with traceForRow there is no table-level control or marker and each row keeps its control; without traceForRow the static Capital structure table shows the marker. Then the reviewer checks that S3-007's probe still exits 0. Name this in output/5-repair/T35.md beside the reviewer's list of connected places.

# Lead: owner ruling R14 (2026-11-17, received 10:59 UTC by message from the lead session)

Owner: "only pc, no need for keyboard". The app runs only on desktop PCs with a mouse. A finding that shows only at 480 px or less, on touch, or with the keyboard alone (focus, tab order, arrow keys, focus rings) is no longer a defect. Screen-reader, contrast and colour findings stay.

For group 3:
- Withdraw T28 (S1-003) if it is not merged.
- T27: drop S1-002's focus half; keep the route titles and the scroll reset.
- T37: drop S3-006's narrow-screen picker; keep the navigator search and S3-005.
- T39: drop S4-007 if it is not done; keep S4-006, S4-008 and S4-009.
- T41: drop S6-001, S6-002 and S6-010 if they are not done; keep S6-007.
- S3-011 (contrast) stays.
- T29, T30, T33's S2-005 part, T35's S3-002 part, T36 and T40's S5-005 and S5-008 parts are merged or reviewed: keep them, do not revert.

No round is spent on the dropped findings from now on. Record R14 in the affected task reports.

Controller's application:
- T28 was not started; it is withdrawn, and output/5-repair/T28.md records that.
- T27 round 2 was redirected. It keeps the titles, the live-region announcement (screen reader, kept) and the scroll reset and restore, removes the route-change focus moves, and drops the round-1 Medium (keyboard-only outline on main) as moot.
- T41 had merged with S6-001, S6-002 and S6-010 done, so they are kept.
- T37 and T39 start with the dropped parts left out.

# Lead answer to repair-3 on T35 M1 (ruling L9b, 2026-11-17, received 11:00 UTC by message from the lead session)

Yes. Group 3 may edit web/src/pages/library/parts/MatrixBlock.tsx and its test, using the L9a rule: when the block's rows carry their own traces, skip the table-level control; otherwise draw it, marker included. Add a test for each case, using the connected tests' fixture shapes for the risk matrix. Then merge T35.

Put the reviewer's connected list into output/5-repair/T35.md as measured. Items 3 and 4 (the Confidence tile with no inputs table, and a bottom-line band with no block at summary.line) are "missing by data", so their marker is correct and stays. Item 5 needs nothing.

# Lead: owner ruling R16 (2026-11-17, received 11:08 UTC by message from the lead session)

Owner: "screen reader - not required". A finding that changes only what a screen reader announces is no longer a defect. For group 3: T27 round 2 drops "the announcement" and keeps the route titles and the scroll reset. Spend no round on screen-reader names, live regions or heading levels. Do not revert reviewed work that is already merged. Record R16 in the task reports.

Controller's application: T27 round 2 was told to remove the live region and keep titles and scroll. Merged work is not reverted. T37 and T39 start without screen-reader-only parts.
