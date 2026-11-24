# S3 removed derived figures

Figures the leads no longer print because the module did not write them (ruling i, 2026-11-24). Each is a candidate for the module to write in its own handoff (methodology plan).


## CP-1B

Removed from `earningsDelta.tsx` / `earningsDeltaData.ts`. Each is something the module could write.

- Title "<measure> moved most: up/down N" and "Largest moves are tied at N (derived)": a ranking by computed |current - prior|. The module should state which movers matter, in its own order and words.
- The "ranked movers, largest change first" order and the cap of ten: the page now lists every pair in the handoff's own order.
- KPI title "<measure> up 0.5 percentage points; ... ; N more" and its "(derived)" suffix: computed readings in a title.
- Bridge title "From <opening> N to <closing> N, in K steps": the step count and the opening-to-closing reading.
- Bridge running total per step (aria-label "running total N" and the table-view column "Running total (derived)"): the module should write a running total column if the reader needs it.
- The "+22, derived" tag for a change the handoff writes as "22 reported": now printed as stated ("+22 reported"), never derived.
- A computed change for a pair whose two periods are different kinds (FY2024 to LTM Dec-2024): not made (one basis only).
- A computed change next to a stated YoY column when the table states more than two annual periods (the stated column cannot be tied to one pair): the exact prior to current difference of the latest two is shown, marked derived.

Kept, as the one allowed computed figure: the exact prior to current change of one stated measure on one basis and unit, only where the handoff states no change of its own (chart tables carry no change column), labelled "derived" in the row, the table view and the aria-label.
