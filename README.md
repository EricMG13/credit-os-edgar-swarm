# EDGAR swarm results, HY list (inputs 2026-11-18)

Outputs of the full swarm run of the owner's 242-issuer high-yield list on the latest credit-os2
engine. The workflow `tools/swarm/swarm.workflow.js` on branch `claude/nice-gates-xwsl4g` of this
repository (`claude/swarm-latest-engine` at `a03caec`, merging credit-os2 `main` `2e48875`, plus
the results-saving step and the `effort` argument) writes one commit here after each batch.

| Path | Content |
| --- | --- |
| `plan.json` | the swarm ledger (`swarm-plan/1`): status, attempts and reason per issuer |
| `runs/swarm-<issuer>/` | the CP-OS host-mode run folder per issuer (CP-0, CP-1, CP-1A, CP-2) |
| `library/` | the issuer library that `update_library.py` built from those runs |

Each run folder is kept without `inputs/` and `source-text/`. These two folders hold copies of the
SEC filings and the text taken from them. The packs and contexts come from the private prerelease
`swarm-inputs-20261118` of this repository (`inputs/packs/`, `inputs/contexts/`,
`inputs/hy-list.md`; `SHA256SUMS` and the inner `inputs/sha256.json` checked before the run).

Scope: all 242 issuers in `inputs/hy-list.md`; `prepare.py` registered 242 and skipped 0. The six
issuers the 2026-11-17 run published on the older engine (American Airlines, Churchill Downs,
Dycom, Olin, Iron Mountain, Caesars) were reset to `pending` and are redone here. Answers are
written by Sonnet analysts in host mode; the effort level is the one the owner approves for the
run. No provider was called. The launcher checks the format of each answer. No independent review
of content was run.

The paths in `plan.json` and the run manifests are the paths in the container that ran the
swarm (`/home/user/swarm-root`).
