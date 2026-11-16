# Stage 5: Repair

The first stage that changes code. Steps 1 to 6 run in the `repair-<n>` sub-sessions, one per
group of tasks that share no file, each on its own branch with a pull request into
`audit/final-repairs`. Steps 7 to 11 run in the lead on `audit/final-repairs` once every group is
merged. Each task gets one fresh implementing agent, then a fresh reviewing agent that did not
write the change. Controllers write no code.

## Inputs

| Layer | File | Section | Why |
| :--- | :--- | :--- | :--- |
| L1 | `docs/audit/2026-11-16-final/README.md` | Rulings, Rules | R3, R5, R6 and the standing rules |
| L3 | `AGENTS.md` | all | Project rules, the quality gate, fidelity checks |
| L3 | `docs/QUALITY-GATE.md` | all | The Python gate |
| L4 | `output/4-register/tasks.md` | one task per implementing agent | The work |
| L4 | `output/4-register/register.jsonl` | the task's findings | Expected and actual behaviour |
| L4 | The probes the task names | all | The answer key; the implementer does not edit them |
| L4 | `output/1-rubrics/design-rubric.md` | rules a design task cites | The standard a design repair must meet |

## Process

Per task:

1. **Failing test first.** Write a test that fails for the finding's cause, at the surface where
   it was seen, and run it to see it fail. For a design or wording repair where no test applies,
   say why under `Not verified:` and use the probe and a before and after screenshot instead.
2. **Smallest repair.** Change only what the finding justifies. No new dependency. No new
   abstraction. Do not touch Signal. Do not change analytical methods, `prompts/`, calculations
   or rulings. A component comes only from the approved sources in the design rubric.
3. **Check.** The new test passes, the task's probes exit 0, and the tests the change affects
   pass. Run the changed-code gates: for `web/`, `lint`, `format:check`, `typecheck` and the
   affected vitest files; for Python, `uv run python tools/quality_gate.py`.
4. **Report** to `output/5-repair/<task id>.md`: files changed, the test, each probe's exit code,
   each gate's exit code, ending with `Not verified:`.
5. **Review.** A fresh agent reads the diff against the finding and the rubric: does it fix the
   cause, does it break a caller, did it weaken a test or a gate, did it add anything not asked
   for. A task touching money, ordering or security code gets a second, adversarial read.
   A High or Medium review finding goes back to a fresh implementer, at most twice; after that
   the task is left open and listed for the owner.
6. **Commit** the task on its own, naming the finding ids.

After all tasks:

7. **The Low and Info batch.** One implementer repairs every `batch` finding, checked against
   each finding's probe or evidence, with one review of the whole batch.
8. **Self-review of the branch.** Enumerate what is least certain in the combined diff, trace
   each doubt to its cause, and repair what is confirmed. For any non-trivial changed function,
   compare it with the simplest correct alternative and keep the simpler.
9. **Fidelity check.** For every presentation change, compare the values, periods, units,
   sources and limitations on screen with the handoff, before and after. Draft the
   `VERIFICATION.md` entry with its scope; the coordinator adds it (keep the file under 1,000
   lines).
10. **Full frontend gates.** `npm --prefix web run gates` and `npm --prefix web run
    proof:connected`. Signal's tests are part of this and must pass.
11. **Push** `audit/final-repairs`. The pull request into `main` is opened in stage 7, after the
    sweep.

## Outputs

| File | Contents |
| :--- | :--- |
| `output/5-repair/<task id>.md` | One report per task |
| `output/5-repair/batch.md` | The Low and Info batch report |
| `output/5-repair/review.md` | Each review's verdict and the branch self-review |
| `output/5-repair/report.md` | Findings closed, findings open, gates, each group's pull request, ending with `Not verified:` |
| `output/4-register/register.jsonl` | Updated: each repaired finding gains `closed_by` (the commit) |
