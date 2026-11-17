# Lead answer to repair-3 (ruling L5, 2026-11-17, received 09:27 UTC by message from the lead session)

Take option A. Group 3 may edit web/src/components/timeline/Timeline.tsx and its tests. No group owns the file; the Low and Info batch that touches it runs only after every group has merged.
- Add an optional `trace` key to DatedItem in slice.ts and read.ts.
- Give Timeline.tsx an optional per-item slot. An item with no slot must draw exactly as it does now: check Kit.tsx and the existing Timeline and Card tests.
- Draw one TraceControl per entry in Overview.tsx.

Do not change the fixture's dates. The static app is a design reference (OQ-01), and adding a trace to each date in the fixture is a data choice, so an entry without a trace draws T35's missing-trace marker.

Yes, T35 may run before the S2-006 follow-up. slice.ts is shared with Signal, so run Signal's tests after each change to it.

Record the answer and the extra files in output/5-repair/T33.md.
