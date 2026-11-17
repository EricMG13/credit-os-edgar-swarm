state: running
updated: 2026-11-17T11:57Z
done: branch audit/repair-2 cut from audit/final-repairs ca0db16; environment checked (uv 0.12.5, uv sync, npm ci, a worktree sharing web/node_modules passes typecheck, lint, format:check, vitest and build; c4-probe-027 runs in 26 s on a custom port); worker brief written
next: owner ruling R14 (desktop and mouse only) applied: T24 withdrawn; T14 drops its keyboard-only parts (C3-002 focus, C3-004, C5-006) in round 2 before merging; T21 drops C5-002, T22 drops C5-007 and J5-002. Tasks now merge with git merge --no-ff in tasks.md order (T15 and T16 are built on T14's commits, so a squash merge could re-add what T14 drops). T13 round 2 under review; T15 round 2 fixer; T16 under review
blocked: none (owner ruling R16: screen-reader-only findings are not defects, recorded in the worker brief; lead ruling L14 on T16: its next round rewords cashflow.py LTM_NOTE and cell reasons and maps lower-case module codes to names in readerText; Securities.tsx and visuals/index.tsx go to the lead's batch; Downside.tsx:234 to T18)
reports: docs/audit/2026-11-16-final/output/sessions/repair-2/worker-brief.md

| Task | Starts after | State |
| :--- | :--- | :--- |
| T13 | - | round 3 (Opus medium) fix 71c5acc: decimal comma scoped to one measure in one unit, no pool; English-grouping guard; module codes drawn as names; under review 5 and adversarial review 6 (Opus medium) |
| T14 | - | reviewed PASS after round 2 (R14 drop): closed C3-002 (scroll and Back), C3-003, C4-034, J3-001, C3-005, C3-028; withdrawn under R14 C3-002 focus, C3-004, C5-006; held for merge after T13 |
| T15 | T14 | reviewed PASS after round 2 (C3-001, J3-003, J4-001 Overview, C3-020, J4-007, C1-009 closed; J4-001 library card trace open for the lead, LibraryIndex.tsx is group 1); held for merge after T14 |
| T16 | T14 | fix round 1 (round 2, Sonnet): review 1 PASS, adversarial CHANGES NEEDED (High: three pinned digests not re-pinned; Medium: chart-gap reasons dropped whole), plus lead ruling L14 (cashflow.py wording, lower-case codes) |
| T17 | T14, T15, T16 | waiting |
| T18 | T16 | waiting |
| T19 | - | reviewed PASS (C4-004, X1-024, X1-019 closed); round 2 for R2-003 (stack() decimal-comma column evidence) after T13 merges; merges after T18 |
| T20 | T16 | waiting |
| T21 | T14, T16 | waiting (C5-002 withdrawn under R14) |
| T22 | T16, T18 | waiting (C5-007 and J5-002 withdrawn under R14) |
| T23 | - | reviewed PASS (C5-012 closed); held for merge after T22 |
| T24 | T21 | withdrawn under R14 (C5-034, keyboard focus); report written |
