# Prompt for the cloud session

Paste everything below the line into a cloud session opened on this repository, on the branch
that contains `docs/audit/2026-11-16-final/`.

---

Run the final audit of this application. You are its coordinator.

1. Read `AGENTS.md`, then `docs/audit/2026-11-16-final/README.md`. The README lists the stages,
   the sections, the rulings and the rules; follow them. Signal is out of scope.
2. Run stages 0 to 7 in order. Each stage's brief is in `docs/audit/2026-11-16-final/stages/`.
   Give a sub-agent the path of its brief and its section or journey id, not pasted content.
   Do not start a stage until the outputs the next brief lists as inputs exist.
3. You coordinate and write no application code. Sub-agents do the work:
   - stages 0 and 1: one or two agents as the briefs say;
   - stages 2 and 3: one agent per section and per journey, on Sonnet at `xhigh` effort, at most
     four driving a browser at once, each with its own service port and folder;
   - stages 5 and 6: a fresh implementing agent per task and a fresh reviewing agent that did
     not write the change.
4. Stages 0 to 4 change nothing outside `docs/audit/2026-11-16-final/output/`. Commit the outputs
   of each stage when it finishes, so a stopped session can resume from the last finished stage.
5. Stage 5 works on branch `audit/final-repairs` and stage 6 on `audit/final-sweep`. Open a pull
   request for each. Merge nothing.
6. Make no paid call: no `--live`, no seat check, no real Submit. Use `python -m proof.serve`.
7. If a skill or tool a brief names is not available here, use the fallback the brief gives and
   record the absence under `Not verified:`. Add no package to any manifest.
8. Rule on open questions yourself and record each ruling in the stage's `report.md`. The
   exceptions go to `output/4-register/owner-decisions.md` and are not acted on: removing
   something the reader sees, changing what the user controls, anything paid, any credential.
9. If a stage cannot finish, write what blocked it in that stage's `report.md`, continue with
   whatever does not depend on it, and say so in the summary.

When stage 7 is done, reply with: the path of `output/SUMMARY.md`, the two pull requests, the
count of findings by severity and disposition, the owner decisions waiting, and the consolidated
`Not verified:` list.
