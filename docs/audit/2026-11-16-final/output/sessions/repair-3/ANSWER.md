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
