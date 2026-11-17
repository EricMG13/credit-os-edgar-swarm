# repair-1 work in progress (not applied)

Saved so nothing is lost if the session's container is reclaimed. None of these patches is applied
to `audit/repair-1`; code reaches the branch only after its review passes.

| Patch | What | State |
| :--- | :--- | :--- |
| `T01c-withdrawn.patch` | T01c's uncommitted edits to `scheduler.py` and its tests | Withdrawn: R1-013 closed by owner ruling R13 (paths are not a defect). Not to be applied. |
| `T06-withdrawn.patch` | T06's uncommitted edits to `ConnectedApp.tsx` and a new focus test | Withdrawn: J5-003 is keyboard-only, no longer a defect under owner ruling R14. Not to be applied. |
| `T10-round-1.patch` | T10 round 1 (39247ded): `git diff 6aea8e52 39247ded` from branch `worktree-agent-abccbe877b31f2ea6` | In review (Opus, medium: reviewer and adversarial). |
