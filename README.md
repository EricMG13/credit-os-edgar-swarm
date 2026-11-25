# EDGAR swarm checkpoint for the Nov 18 issuer list

The ledger records 242 issuers: 127 published and 115 running. The controlling session holds the
115 running claims while cloud shard sessions finish their analysis (`docs/swarm.md`,
"Sub-session shards"). Those sessions never write this ledger.

- Nov 24: 50 published from the 16 source shards listed in `source-shards.json`.
- Nov 25: the Mac run's crk-23194, cxt-25445, dbd-28823 and dlx-27996 passed the offline relaunch
  check and were recorded. The 73 runs the Nov 24 cloud shards finished
  (`claude/swarm-results-2026-11-24-s01` to `-s15`, tips of 2026-11-25 02:59 UTC) were copied
  here and each passed the relaunch check twice (the first restores the filing copies) before
  being recorded. The cloud copies of the four Mac issuers were not used.
- Partial run folders kept: chdn, cmc-22444, pbf-holding-co-llc and snap-1564408.

`plan.json` is the resumable ledger. `runs/` holds 131 run folders. `library/` holds the
downloads; `library/data.js` (182 MiB) is over GitHub's 100 MiB limit and is left out. Rebuild it
with `uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine`.

To restore in a fresh host session, use the exact `swarm-inputs-20261118` prerelease as described
in the code repository's swarm runbook. Verify the release checksum and its input hashes. Extract
its `inputs/` tree under the new run root. Copy `runs/` into `ROOT/_engine/runs/` and `plan.json`
into `ROOT/swarm/plan.json`, then run the current `tools/swarm/prepare.py` against the restored
inputs to refresh paths.

Run directories exclude raw filing copies and converted source text. The launcher restores those
copies from the verified inputs when reopening a retained run.
