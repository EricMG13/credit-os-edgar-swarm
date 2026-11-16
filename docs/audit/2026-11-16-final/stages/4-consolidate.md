# Stage 4: Consolidate and rule

The coordinator's own work, with one verifying agent per batch of High and Medium findings.
Nothing outside `output/4-register/` changes.

## Inputs

| Layer | File | Section | Why |
| :--- | :--- | :--- | :--- |
| L1 | `docs/audit/2026-11-16-final/README.md` | Rulings | R3 and R5 decide what is repaired |
| L1 | `docs/audit/2026-11-16-final/FINDINGS-SCHEMA.md` | Severity | To re-grade consistently |
| L4 | `output/2-sections/*/findings.jsonl`, `harmony.csv`, `report.md` | all | Section findings |
| L4 | `output/3-journeys/*/findings.jsonl`, `report.md` | all | Journey findings |
| L4 | `output/0-baseline/baseline.md`, `api-map.md` | all | Gate failures and unmatched service routes are findings too |

## Process

1. **Merge.** Concatenate every findings file. Add a finding for each gate that failed in stage 0
   and each unmatched row of the API map.
2. **Deduplicate.** Findings with the same cause become one, keeping every screen and every
   original id. A journey finding and a section finding with one cause are one finding.
3. **Verify.** A fresh agent (not one that wrote the finding) runs the probe of every High and
   Medium finding and reads the code at the cited lines. Mark each `confirmed`, `not reproduced`
   or `not a defect` with the reason. Only confirmed findings go forward at High or Medium.
4. **Re-grade** against the schema's severity table, so the same kind of defect has the same
   severity everywhere.
5. **Rule.** Give every finding one disposition:
   - `repair` — confirmed High or Medium, ordinary kind;
   - `batch` — Low or Info, repaired together at the end of stage 5;
   - `sweep` — a measured structural or performance cost, dead code or duplication, for stage 6;
   - `owner` — `owner_decision` is true (ruling R5), or the right answer is a choice only the
     owner can make;
   - `parked` — hostile-input kind (ruling R3);
   - `rejected` — not reproduced or not a defect.
6. **Group repairs into tasks.** One task per cause or per tightly related set in the same
   files. Two tasks never touch the same file; if they would, merge them or order them. For each
   task: the findings it closes, the files, the probes that are its answer key, and whether it
   touches money, ordering or security code.
7. **Harmony summary.** Merge every `harmony.csv` into one table: each content and control row,
   its mark, and its disposition.

## Outputs

All under `docs/audit/2026-11-16-final/output/4-register/`.

| File | Contents |
| :--- | :--- |
| `register.jsonl` | Every finding with `verified`, final `severity`, `disposition` and `task` |
| `register.md` | The same as a table a person can read, High first, with counts by severity, section and disposition |
| `tasks.md` | The repair tasks in order, each with findings, files, probes and sensitivity |
| `harmony.md` | The merged harmony table |
| `owner-decisions.md` | Each `owner` finding as a question with the options and the coordinator's recommendation |
| `parked.md` | The parked findings |
| `report.md` | What was merged, verified and rejected, ending with `Not verified:` |
