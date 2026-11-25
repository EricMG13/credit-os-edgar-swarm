# EDGAR swarm checkpoint for the Nov 18 issuer list

The ledger records 242 issuers: 177 published and 65 running. The controlling session holds the
65 running claims while cloud shard sessions finish their analysis (`docs/swarm.md`,
"Sub-session shards"). Those sessions never write this ledger.

- Nov 24: 50 published from the 16 source shards listed in `source-shards.json`.
- Nov 25: the Mac run's crk-23194, cxt-25445, dbd-28823 and dlx-27996 passed the offline relaunch
  check and were recorded. The 73 runs the Nov 24 cloud shards finished
  (`claude/swarm-results-2026-11-24-s01` to `-s15`, tips of 2026-11-25 02:59 UTC) were copied
  here and each passed the relaunch check twice (the first restores the filing copies) before
  being recorded. The cloud copies of the four Mac issuers were not used.
- Nov 25 (later): the 15 resumed cloud shards were paused by the controller after their current
  issuer. The 50 runs they finished (shard tips of 2026-11-25 12:59–13:29 UTC; s15 had not pushed)
  were copied here, each passed the relaunch check twice and was recorded. 17 partial runs stay on
  their shard branches.
- Partial run folders kept here: chdn, cmc-22444 and pbf-holding-co-llc.
- Every published run holds CP-0, CP-1, CP-1A and CP-2 only (the `through-cp2` set); CP-1B,
  CP-1C, CP-1D and CP-DR were not run.

`plan.json` is the resumable ledger. `runs/` holds 180 run folders. `library/` holds the
downloads; `library/data.js` (244 MiB) is over GitHub's 100 MiB limit and is left out. Rebuild it
with `uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine`.

To restore in a fresh host session, use the exact `swarm-inputs-20261118` prerelease as described
in the code repository's swarm runbook. Verify the release checksum and its input hashes. Extract
its `inputs/` tree under the new run root. Copy `runs/` into `ROOT/_engine/runs/` and `plan.json`
into `ROOT/swarm/plan.json`, then run the current `tools/swarm/prepare.py` against the restored
inputs to refresh paths.

Run directories exclude raw filing copies and converted source text. The launcher restores those
copies from the verified inputs when reopening a retained run.
