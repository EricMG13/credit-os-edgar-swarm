# Host-mode pilot: Sonnet at medium vs high effort (2026-11-16)

Question: what effort should the Sonnet swarm analysts run at? Four issuers, each run twice through
`cpos_launch --config host --modules through-cp2 --prior none` (CP-0, CP-1, CP-1A, CP-2), one run
per effort: American Airlines (10-K, three decks), Dycom (10-K, three decks), Caesars (10-K,
releases), GFL (40-F, releases). Packs and contexts are SECData's 2026-11-05 files. Analysts followed
`docs/templates/host-analyst-checklist.md`. No provider was called; nothing was charged.

## Result

All 8 runs ended with exit 0, every module accepted, a delivery written.

| Effort | Issuers with a rejected attempt | Extra attempts |
| --- | --- | --- |
| medium | 3 of 4 | 6 (CP-1A x2, CP-0 x1, CP-2 x2) |
| high | 0 of 4 | 0 |

- Rejections were format and fidelity checks, never content: a map Evidence cell, an H2 in the wrong
  place, a quoted figure absent from Calculations, a banned pipeline word. One medium attempt was
  wasted by the analyst's own failed `sed` edit.
- Both efforts reported defects found after acceptance that could not be fixed (wrong page
  locators, an overstated causal sentence, an "only" the filing does not support).
- Tokens: about 2.7M for the 8 runs (about 0.34M each). Not split by effort.

## Not established

- Answer quality. No blind review of each medium/high pair against the checklist was run.
- Token cost of high over medium.
- Sample is 4 issuers, 8 runs, with the analysts' own reports as the source for attempts and
  defects; the launcher's run folders hold the accepted answers.
- The earlier 118-issuer swarm's analyst effort was not recorded, so there is no baseline.

## Decision (owner, 2026-11-17: "agreed")

Swarm analysts run Sonnet at **medium**, with a cap of 2 resubmissions per module; an issuer that
exceeds it is marked `failed` in the ledger and retried in a second pass. Provisional: if the blind
review of the 8 pilot pairs shows high is clearly more accurate, use high for CP-1A and CP-2 only.
