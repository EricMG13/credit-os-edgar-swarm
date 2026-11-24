# EDGAR swarm checkpoint for the Nov 18 issuer list

This Nov 24 checkpoint combines the 16 source shards listed in `source-shards.json`.
The ledger records 242 issuers, with 50 published, 192 pending and zero running.
Offline verification recovered the retained Constellium and Thryv deliveries from shard 11.
The 14 other interrupted claims returned to pending. Snap and PBF Holding retain their partial
run folders. The library lists the 50 completed runs and their four handoffs per issuer.

- `plan.json` is the resumable ledger. The source snapshots are pinned by commit.
- `runs/` preserves the 52 retained run folders from the source shards.
- `library/` contains the combined publication and downloads.

To restore the checkpoint in a fresh host session, use the exact `swarm-inputs-20261118`
prerelease as described in the code repository's swarm runbook. Verify the release checksum
and its input hashes. Extract its `inputs/` tree under the new run root. Copy this checkpoint's
`runs/` into `ROOT/_engine/runs/` and its `plan.json` into `ROOT/swarm/plan.json`. Run the current
`tools/swarm/prepare.py` against the restored inputs to refresh paths and check that the ledger
reports 50 published and 192 pending. Use a dedicated worktree of this branch for batch saves.

Run directories exclude raw filing copies and converted source text. The launcher restores
those copies from the verified inputs when reopening a retained run. If the combined index
outgrows GitHub's file limit, the workflow keeps the ledger, runs and downloads so the index
can be rebuilt offline.
