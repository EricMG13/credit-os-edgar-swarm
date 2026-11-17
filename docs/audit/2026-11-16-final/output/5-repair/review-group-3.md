# Group 3 reviews (repair-3)

One entry per task: the reviewer was a fresh Sonnet agent at xhigh effort that did not write the change. No group 3 task touches money, ordering or security code (tasks.md), so none needed a second, adversarial read. The branch self-review (stage 5 step 8) is the lead's.

## T34 (S2-007)

- Commit reviewed: 4fe6c1b. Verdict: PASS. Merged onto audit/repair-3 as a2fbd07.
- The new test fails with ChangesTable.tsx at its parent (5 of 5 fail) and passes after the repair.
- The cause-and-effect cell matches the card text character for character for all six changes of halden 2026-09-30.
- The existing test change in Changes.test.tsx touches only the expected heads, which asserted the defect.
- Gates the reviewer saw: lint 0, format:check 0, typecheck 0, build 0. The probe changes-table-columns.mjs exits 0 and shows 6 of 6 kind, cause and effect and 5 of 5 direction words. Vitest: 32, 12 and 66 passed.
- Low:
  - A test timed out once under a load average of about 31, then passed on re-run.
  - A blank kind, cause or effect draws n.a. in the Table but an empty badge in the Cards. The root is read.ts accepting blank words, which is outside T34's files.
  - Direction draws the delivered words without the card's arrow.
