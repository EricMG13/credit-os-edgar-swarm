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

- Token cost of high over medium.
- Sample is 4 issuers, 8 runs, with the analysts' own reports as the source for attempts and
  defects; the launcher's run folders hold the accepted answers.
- The earlier 118-issuer swarm's analyst effort was not recorded, so there is no baseline.

## Blind quality review (2026-11-17)

Four Opus reviewers (one per issuer) saw the medium and high answer sets as A and B, in random order,
and checked sampled claims against the filings (at least 8 per module, 3 recomputed figures per
module, "not supplied" claims searched in the sources).

| Effort | Claims checked | Wrong | Unsupported | Medium or high severity |
| --- | --- | --- | --- | --- |
| medium | 106 | 11 | 12 | 11 |
| high | 120 | 8 | 3 | 5 |

High was preferred on all 4 issuers. Medium's American Airlines answer left regional D&A out of
EBITDA (8.87x against 8.02x leverage, carried into CP-2) and called two lien rankings "not stated".
High was not clean: its Caesars answer had 4 wrong claims against 1, yet was preferred for coverage.
Limits: sampled claims, not full checks; high got about 14 more checks; no per-module breakdown.

## Decision (owner, 2026-11-17: "set to high")

Swarm analysts run Sonnet at **high** (this supersedes the earlier "agreed" decision for medium),
with a cap of 2 resubmissions per module; an issuer that exceeds it is marked `failed` in the ledger
and retried in a second pass. Token cost of high over medium is not measured: the first pilot batch
(5 issuers) should record it.
