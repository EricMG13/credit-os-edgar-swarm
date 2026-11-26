# EDGAR swarm results for the Nov 18 issuer list (complete, Nov 26)

All 242 issuers in the ledger (`plan.json`) are `published`: 0 pending, 0 failed, 0 skipped.

- 50 were published by the Nov 24 checkpoint (`codex/swarm-results-2026-11-18-consolidated`).
- 190 were analysed Nov 24–26 by 15 shard sessions (`claude/swarm-results-2026-11-24-s01` to `-s15`,
  list in `tools/swarm/shards-2026-11-24.json` on `claude/epic-pascal-3x3mra`), Sonnet analysts at
  xhigh effort, CP-OS host mode through CP-2, analysis only (`tools/swarm/analyse.workflow.js`).
- Churchill Downs and Commercial Metals were completed by the Nov 24 pilot at high effort.

Verification (central, this commit): each shard folder was copied into the central root and
`run_issuer.py ID verify` run twice; all 192 passed the second run, and no first run wrote any file
other than the restored `inputs/` and `source-text/` copies (`verification/central-verify.tsv`).
Ledger `done` used the controlling session's claims; attempts per module match the run folders' request
records for all 242. Engine: `claude/nice-gates-xwsl4g` (credit-os2 `2e48875`, method `deploy-v-r14`).

Limits:
- Answers are checked by the launcher's format and method checks only. Analysts logged defects they
  could not fix in accepted answers (`verification/shard-reports.json`, `notes`).
- 78 issuers have accepted answers committed by sessions other than their shard's own session (42 of
  them only by such sessions, the `01EB6yc...` sessions whose origin is unresolved); see
  `verification/provenance.json`. Where both analysed an issuer, the branch version was kept.
- `library/data.js` (331 MB) exceeds GitHub's limit and is not committed. Rebuild it with
  `uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine` after restoring `runs/`.
- Run folders exclude filing copies (`inputs/`, `source-text/`); the launcher restores them from the
  verified `swarm-inputs-20261118` release.
