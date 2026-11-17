# repair-1 work in progress (not applied)

Saved so nothing is lost if the session's container is reclaimed. None of these patches is applied
to `audit/repair-1`; code reaches the branch only after its review passes.

| Patch | What | State |
| :--- | :--- | :--- |
| `T09-rounds-1-3.patch` | T09 rounds 1 (46d9d25a), 2 (b0cbffc1) and 3 (89a635d): `git diff edebd9d8 89a635d` from branch `worktree-agent-aa8c0762b4610bc65` | In review (round 3). Reviews: `output/5-repair/T09-review*.md`. |
| `T01c-withdrawn.patch` | T01c's uncommitted edits to `scheduler.py` and its tests | Withdrawn: R1-013 closed by owner ruling R13 (paths are not a defect). Not to be applied. |
| `T06-withdrawn.patch` | T06's uncommitted edits to `ConnectedApp.tsx` and a new focus test | Withdrawn: J5-003 is keyboard-only, no longer a defect under owner ruling R14. Not to be applied. |
