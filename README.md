# EDGAR swarm results, HY list 2026-11-05

Outputs of the full swarm run (owner approved 2026-11-17: "Run all 102"). The workflow
`tools/swarm/swarm.workflow.js` on branch `claude/compassionate-noether-fhd9fs` of this repository
writes one commit here after each batch.

| Path | Content |
| --- | --- |
| `plan.json` | the swarm ledger (`swarm-plan/1`): status, attempts and reason per issuer |
| `runs/swarm-<issuer>/` | the CP-OS host-mode run folder per issuer (CP-0, CP-1, CP-1A, CP-2) |
| `library/` | the issuer library that `update_library.py` built from those runs |

Each run folder is kept without `inputs/` and `source-text/`. These two folders hold copies of the
SEC filings and the text taken from them. The filings are in EricMG13/SECData at commit
`30f8f96` (`data/2026-11-05/packs/`), with the contexts in `data/2026-11-05/contexts/`.

Scope: 102 of the 242 issuers in `data/secdata/2026-11-05/hy-list.md`. The other 140 have no pack
in SECData and were not run. Answers were written by Sonnet analysts at high effort in host mode.
No provider was called. The launcher checks the format of each answer. No independent review of
content was run.

The paths in `plan.json` and the run manifests are the paths in the container that ran the
swarm (`/home/user/swarm-root`, `/home/user/secdata`).
