# Final repair report

The stage 5 repair base is `bb94ddceff3a1f02c7239ebca72de285df79c607`.
All 248 required canonical outcomes are closed after the combined review,
fidelity checks and gates. Eighty-eight merged aliases inherit those
closures. The [register](../4-register/register.jsonl), [batch report](batch.md)
and [review record](review.md) identify the landed commits.

| Register dimension | Count |
| --- | --- |
| Source rows and canonical findings | 523 source, 408 canonical, 115 merged aliases |
| Canonical severity | 6 High, 111 Medium, 206 Low, 85 Info |
| Canonical dispositions | 85 repair, 163 batch, 17 sweep, 6 deferred, 31 parked, 106 rejected |

No confirmed required stage 5 production repair remains open. Deferred
work and parked hostile cases retain their recorded rulings. The 17
sweep rows have a separate contract and decision ledger.

Repair PRs [56](https://github.com/EricMG13/credit-os2/pull/56),
[57](https://github.com/EricMG13/credit-os2/pull/57) and
[58](https://github.com/EricMG13/credit-os2/pull/58) went into the repair
branch after review and passing CI.

| Check | Exit and scope |
| --- | --- |
| Python | The original CI and supplemental selection totalled 6,286 distinct cases. 6,284 passed initially with one existing disk-case skip and one failure in the historical issued-record setup. The reviewed fixture alignment restored the exact cap-refusal assertion. All 46 pathway-tier tests passed on the integrated tree. The reconciled result is 6,285 passes and one existing skip. |
| Node page logic | 0, 573 passed on the pinned selection, including Signal. |
| Frontend Vitest and coverage | Native eight-shard merge 0 on `bb94ddce`. All 5,259 cases in 308 files passed, including 630 Signal cases. Exact identities matched. Global lines 97.69% against the original 80% threshold. |
| Frontend static gates and toolchain | Lint, format and types 0. Knip had zero issues. Duplication gate 0 at 2.46%. Dependency audit 0 with zero vulnerabilities on the unchanged lock. Build 0 with both entries. |
| Frontend script checks | 0, 73 passed, zero skips. |
| Native file gate | 0, 138 checks including the violation canary. Chrome used the same file assertions and a local deny-only proxy. |
| Connected runtime proof | 0, native Chrome 157 and Edge 155 each completed the synthetic run and published report. |
| Default quality and imports | 0, no findings in 47 changed files and 6,272 owned lines, uv 0.12.5. |
| Fidelity | Capture 0 across 267 screens. Comparison 0, unchanged diff 1 with seven differences and fourteen new omissions. All flags and 352 other unmatched items are accounted for in the [fidelity report](fidelity/after-report.md). Comparator self-test passed 28 cases; 126 frozen hashes match. |

The complete frontend invocation and unsharded coverage exceeded the
300-second cap on the original assembly. The individually completed gates
and fresh native shard merge retain the original selection and global
coverage threshold. The earlier script-suite attempt timed out during
nested builds. The bounded repeat passed. [Combined check evidence](evidence/combined-bb94/)

## Historical evidence corrections

1. **T01** — T01 round-3 pinned_context OSError sentence is superseded by the T01b/R1-008 reviewed repair. R13 also excludes new path-only repair rounds.
2. **T01b** — run_activity.py still has a stale comment describing the parenthesized rebuild detail as an error; the current reader uses the recorded error kind. This is a comment account, not a new observed behavioral defect.
3. **T03** — The current launcher does not emit stopped:ruling for a ruling changed after startup; that path becomes launcher exited 2 or a traceback. The ruling label remains a dormant reason mapping; the stored-reason reader sentence is not proof that the path occurred.
4. **T04** — T04 claims that no Python changed and run_activity.py was untouched apply to round 1 only. Round 2 changed run_activity.py and test_react_run_activity.py.
5. **T04** — J5-001 presentation is repaired: status label, row sentence, alert and Start-from-this-run action. Its explanation-of-checker-cause scope is separately deferred R1-012/OQ-15; that deferred work does not make the presentation repair incomplete.
6. **T04** — The two runFigures test names describe the former failed parameter; their current literal calls exercise refused checker stops. Assertions remain correct and unchanged.
7. **T09** — The current Unicode-aware Python/Node key difference was measured as 9,065 characters. The older 37 count described the superseded ASCII-only version; the code comments still retain that old count. No normalization algorithm change is justified by this evidence correction.
8. **T14** — Use T14 round-2 scope: retain C3-002 scroll/Back only, C3-003, C4-034, J3-001, C3-005, C3-028. C3-002 focus, C3-004 and C5-006 were withdrawn under R14. Round-1 focus/filter/file descriptions are superseded.
9. **T25** — T25 follow-up reported test counts are retained, but affected file counts are 29 and 34, not 101 and 119.
10. **T12** — A missing Capital structure section inside the patched adapter is observed as a provider failure by Scheduler; the historical claim that main directly reports exit 2 is incorrect. Corrupt canned-handoff behavior stays parked, and handoffs remain unchanged.

Not verified: real provider or paid execution, real Submit, seat access,
Teams work-PC behavior, Windows or the release package. The fidelity
report identifies the exact inputs and presentation checks in scope.
