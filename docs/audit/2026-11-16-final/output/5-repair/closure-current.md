# Stage 5 closure refresh

Actual final `bb94ddceff3a1f02c7239ebca72de285df79c607`; coordination `fe08fbefc1a2106ffff834b3efe82a683b2ba6fe`. Read-only inventory; no repository mutation or new test execution.

The live register has 523 source rows and 408 canonical findings. All **248 required canonicals** (85 repair,163 batch) have reviewed, landed commit maps; **88 merged aliases** inherit those outcomes. All115 merged aliases are retained. **No required ID, alias or source map is missing; no confirmed residual Stage5 production repair was found.**

The ledger marks these rows `landed-reviewed`, with application-ready `closed_by_candidate` hashes. It deliberately leaves `closed_by` null for the lead to apply after combined acceptance and the last register rebuild. This avoids claiming that ancestry alone constitutes final acceptance.

Canonical severity: High 6, Medium 111, Low 206, Info 85.
Dispositions: repair 85, merged 115, rejected 106, parked 31, deferred 6, batch 163, sweep 17.

The historical242-row planning snapshot is preserved by path/hash. Its old92 accepted/148 pending/2 open states no longer describe current ancestry. All195 historical notes,10 corrections and15 lead follow-ups are retained, with current resolutions.

Final source consequences checked:

- T22 final5b5610fe and R4-012 final78a6baab now have final fresh PASS reports and accepted-final ancestry. Earlier reviews remain historical.
- T10 final f7110d90 lease backport supplements the already-landed draft UI; source and UI callers are both mapped.
- R4-002 exact helper files, frozen fixture test and ZIP match the separately reviewed source bytes; actual landing is additive copy5e1d98b3.
- R4-01501a163ab, R4-0163df13dc4, R4-017/01863c4a7f7+8f4ba250, R4-0198f4ba250 and R4-020daca9e00 all have named fresh review evidence.
- J5-010 fixture3a51→76ad1ce1, C3-022 currency-prefix72f1→daca9e00 and T35 collector d08→13a598e4 are explicit reviewed consequences, without invented new product findings.

Root evidence actions:

1. Complete/record combined gate acceptance, then apply248 canonical closure hashes and their88 alias mappings after the last register rebuild.
2. Include the ten exact corrections below additively in the final repair report; preserve old logs/reports.
3. Retain/reference the accepted full fidelity evidence in `/workspace/scratch/final-fidelity-bb94`: captures0, unchanged diff1 with7 differences/14 omissions/352 unmatched items individually accounted for.
4. Keep17 sweep,6 deferred,31 parked and106 rejected rows separate. The protected public source route needs the Stage6 caller check; visible `sourceLinks` is used and must stay. New Teams work remains work-PC-onlyR15.

Historical evidence corrections:

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

Application map (all landed commits and exact report/review paths are in the JSON):

| Canonical | Task/family | Proposed final closure | Aliases |
| --- | --- | --- | --- |
| C1-001 | T01 | `6f93a1ae` | C5-001 |
| C4-028 | T13 | `301b20af` | — |
| J1-001 | T02 | `d7b1e66f` | — |
| R2-003 | T19 | `7cd8f10b` | — |
| R4-006 | T18 | `f7f1e011` | — |
| S1-001 | T26 | `33d9d886` | J6-005 |
| B0-003 | T12 | `b967babc` | J1-014 |
| C1-002 | T05 | `43e84d98` | — |
| C1-003 | T05 | `43e84d98` | — |
| C1-004 | T04 | `9f925943` | — |
| C1-005 | T04 | `9f925943` | — |
| C1-007 | T17 | `cc1a7171` | — |
| C1-013 | T03 | `bbebfef4` | — |
| C1-024 | T04 | `9f925943` | — |
| C1-031 | T05 | `43e84d98` | — |
| C2-002 | T07 | `0bf18aeb` | J2-001 |
| C2-003 | T07 | `0bf18aeb` | — |
| C2-004 | T08 | `edebd9d8` | — |
| C2-006 | T08 | `edebd9d8` | — |
| C2-007 | T11 | `0b3b0607` | — |
| C2-008 | T10 | `b2e30d7f` | — |
| C3-001 | T15 | `1dcd1174` | J3-003, J4-001 |
| C3-002 | T14 | `a6bf5d2f` | C3-003, C4-034, J3-001 |
| C3-005 | T14 | `a6bf5d2f` | — |
| C3-006 | T16 | `f40b9161` | C5-026 |
| C3-007 | T17 | `cc1a7171` | J2-016, J5-007 |
| C3-008 | T17 | `cc1a7171` | — |
| C3-020 | T15 | `d9c1fced` | C1-009, J4-007 |
| C3-024 | T17 | `cc1a7171` | — |
| C3-026 | T17 | `cc1a7171` | — |
| C3-028 | T14 | `a6bf5d2f` | — |
| C3-029 | T13 | `301b20af` | C4-005 |
| C4-001 | T16 | `f40b9161` | J3-005, J4-009 |
| C4-002 | T18 | `f7f1e011` | — |
| C4-003 | T18 | `f7f1e011` | C5-004, R4-008, R4-009, R4-010 |
| C4-004 | T19 | `de7ffa96` | — |
| C4-007 | T20 | `62012403` | — |
| C4-025 | T18 | `f7f1e011` | — |
| C4-026 | T18 | `f7f1e011` | — |
| C5-003 | T22 | `5b5610fe` | J4-005, J3-015, R4-013 |
| C5-005 | T38 | `b4cef728` | S4-019 |
| C5-008 | T16 | `f40b9161` | — |
| C5-009 | T21 | `e1d15407` | J3-013 |
| C5-010 | T21 | `e1d15407` | — |
| C5-011 | T21 | `e1d15407` | — |
| C5-012 | T23 | `74323f7a` | — |
| J1-002 | T12 | `b967babc` | — |
| J1-004 | T08 | `edebd9d8` | — |
| J2-002 | T07 | `0bf18aeb` | — |
| J2-003 | T09 | `25578109` | C2-011, J2-007 |
| J2-013 | T08 | `edebd9d8` | — |
| J3-007 | T21 | `e1d15407` | C5-036 |
| J4-003 | T18 | `f7f1e011` | C4-019, R4-007 |
| J5-001 | T04 | `9f925943` | — |
| J5-004 | T09 | `25578109` | C2-014 |
| R1-003 | T02 | `d7b1e66f` | — |
| R4-001 | T42 | `13123339` | — |
| R4-011 | T43 | `ff93a150` | — |
| R4-012 | T44 | `78a6baab` | — |
| R4-015 | T45 | `01a163ab` | — |
| R4-017 | T46 | `8f4ba250` | — |
| R4-018 | T46 | `8f4ba250` | — |
| S1-002 | T27 | `d7961192` | S2-003, S2-013, S3-001, S4-004, S4-020, S5-017, J6-011, J6-002, J6-003 |
| S1-004 | T25 | `f33f9a14` | X1-018 |
| S2-001 | T32 | `41c5580a` | J6-006 |
| S2-002 | T31 | `c2349e8e` | S3-008, S4-013, J6-013 |
| S2-006 | T33 | `b3f1b192` | — |
| S2-007 | T34 | `4fe6c1bc` | — |
| S3-005 | T37 | `3a8a871f` | — |
| S3-006 | T37 | `3a8a871f` | C3-025 |
| S3-007 | T35 | `b43a8ea1` | — |
| S3-011 | T38 | `5c0dad18` | — |
| S4-006 | T39 | `52c6d453` | — |
| S4-008 | T39 | `3adcf75c` | — |
| S4-009 | T39 | `52c6d453` | — |
| S5-001 | T38 | `685fbd54` | — |
| S5-002 | T40 | `685fbd54` | — |
| S5-004 | T40 | `0b916a40` | — |
| S6-003 | T25 | `f33f9a14` | J6-010 |
| S6-007 | T41 | `6f2fcf6a` | — |
| X1-019 | T19 | `de7ffa96` | — |
| X1-024 | T19 | `de7ffa96` | — |
| B0-002 | docs | `e0e5d4f0` | — |
| C1-008 | connected-shell | `4a5caa07` | — |
| C1-014 | connected-report-shell | `da9491a7` | C3-030, C5-031, J1-010, J3-018 |
| C1-018 | connected-shell | `4a5caa07` | — |
| C1-019 | connected-shell | `4a5caa07` | — |
| C1-022 | connected-shell | `4a5caa07` | — |
| C1-023 | shared-connected-format | `da9491a7` | J1-013 |
| C1-027 | connected-shell | `9c71184d` | — |
| C1-032 | connected-report-shell | `615b39bf` | — |
| C2-009 | connected-start | `23ddf26c` | — |
| C2-010 | connected-start | `23ddf26c` | J2-008 |
| C2-012 | connected-start | `23ddf26c` | — |
| C2-013 | connected-start | `23ddf26c` | J2-004 |
| C2-015 | connected-start | `23ddf26c` | J1-005 |
| C2-018 | connected-start | `23ddf26c` | — |
| C2-019 | connected-start | `924b8c4b` | — |
| C2-020 | connected-start | `23ddf26c` | — |
| C2-022 | connected-start | `23ddf26c` | — |
| C2-023 | connected-start | `23ddf26c` | — |
| C3-011 | shared-connected-format | `b4cef728` | — |
| C3-012 | connected-report-shell | `da9491a7` | — |
| C3-015 | connected-report-shell | `b4cef728` | — |
| C3-016 | connected-report-shell | `b4cef728` | — |
| C3-017 | connected-report-shell | `3585d850` | — |
| C3-018 | connected-report-shell | `602adb3d` | — |
| C3-021 | connected-report-shell | `b4cef728` | — |
| C3-027 | connected-report-shell | `b4cef728` | — |
| C3-031 | connected-report-shell | `58541d03` | C4-023 |
| C4-006 | connected-forecast | `f7f1e011` | — |
| C4-010 | connected-forecast | `f7f1e011` | — |
| C4-011 | shared-components | `6468d298` | — |
| C4-012 | connected-forecast | `f7f1e011` | — |
| C4-013 | shared-connected-format | `67144f04` | C3-022 |
| C4-020 | connected-charts | `daacef9d` | — |
| C4-021 | connected-charts | `f77f2f88` | — |
| C4-022 | connected-forecast | `f7f1e011` | — |
| C4-024 | connected-forecast | `f7f1e011` | J3-014 |
| C4-027 | connected-charts | `7cd8f10b` | — |
| C4-029 | connected-forecast | `f7f1e011` | — |
| C4-030 | connected-calendar | `b4cef728` | — |
| C4-031 | connected-forecast | `f7385e3d` | — |
| C4-035 | connected-forecast | `f7f1e011` | — |
| C4-036 | connected-forecast | `c21718f0` | — |
| C5-013 | design-docs | `a108f655` | R4-014 |
| C5-014 | connected-evidence | `5d1e108d` | — |
| C5-017 | connected-evidence | `2aeb518d` | — |
| C5-018 | connected-evidence | `2aeb518d` | — |
| C5-019 | connected-evidence | `2aeb518d` | — |
| C5-022 | connected-evidence | `2aeb518d` | — |
| C5-023 | connected-evidence | `2aeb518d` | — |
| C5-024 | connected-evidence | `2aeb518d` | — |
| C5-025 | connected-report-shell | `b4cef728` | — |
| C5-033 | runtime-metadata | `ff93a150` | — |
| C5-035 | connected-evidence | `c9cc2efa` | — |
| C5-037 | connected-evidence | `2aeb518d` | — |
| C5-038 | connected-evidence | `2aeb518d` | — |
| J1-003 | connected-start | `23ddf26c` | J3-002, J2-014 |
| J1-006 | connected-start | `23ddf26c` | — |
| J1-007 | connected-start | `23ddf26c` | — |
| J1-008 | connected-shell | `4a5caa07` | — |
| J1-009 | connected-report-shell | `b4cef728` | J3-008, J4-014 |
| J1-011 | connected-shell | `874e073c` | J3-009 |
| J1-012 | connected-report-shell | `b4cef728` | — |
| J1-015 | T07 | `23ddf26c` | — |
| J1-016 | connected-start | `23ddf26c` | — |
| J1-017 | connected-start | `23ddf26c` | — |
| J1-018 | connected-start | `23ddf26c` | — |
| J2-005 | connected-start | `23ddf26c` | — |
| J2-006 | connected-start | `23ddf26c` | — |
| J2-009 | connected-shell | `4a5caa07` | — |
| J2-010 | connected-shell | `9c71184d` | — |
| J2-012 | connected-start | `6f2953aa` | — |
| J2-015 | connected-shell | `4a5caa07` | — |
| J3-011 | connected-calendar | `b4cef728` | — |
| J3-012 | connected-evidence | `2aeb518d` | J4-011 |
| J3-016 | connected-downside | `b4cef728` | — |
| J3-017 | connected-report-shell | `b4cef728` | — |
| J3-019 | connected-report-shell | `b4cef728` | — |
| J3-020 | connected-evidence | `2aeb518d` | — |
| J5-005 | connected-report-shell | `b4cef728` | — |
| J6-007 | static-library-fixtures | `ea81c2c3` | — |
| J6-014 | static-shell | `1c81bb9c` | — |
| R2-001 | connected-charts | `78a6baab` | — |
| R2-002 | connected-charts | `daacef9d` | — |
| R4-003 | static-library-fixtures | `8588a69e` | — |
| R4-004 | connected-report-shell | `47cbe0a3` | — |
| R4-016 | optional-proof-probe-cleanup | `3df13dc4` | — |
| R4-019 | native-local-file-icon-guard | `8f4ba250` | — |
| R4-020 | neutral-record-link-style | `daca9e00` | — |
| S1-007 | static-shell | `ea81c2c3` | S6-004 |
| S1-008 | static-shell | `1c81bb9c` | — |
| S1-010 | static-shell | `c165080d` | — |
| S1-011 | static-shell | `1c81bb9c` | — |
| S1-015 | static-shell | `0cfca97e` | — |
| S1-019 | connected-shell | `874e073c` | — |
| S2-008 | static-library-fixtures | `ea81c2c3` | J6-008, J6-016 |
| S2-012 | design-docs | `06ab5157` | — |
| S2-015 | static-library-loading | `2756be5c` | S3-019, S4-015 |
| S2-017 | static-library | `137ed6fc` | — |
| S2-020 | static-library | `2756be5c` | J6-012 |
| S2-022 | static-library | `bd7e4a96` | — |
| S2-023 | static-library | `ce14a518` | — |
| S3-012 | static-library | `2756be5c` | — |
| S3-014 | static-library | `a53f30e4` | — |
| S3-017 | static-library | `2756be5c` | — |
| S3-018 | static-library | `2756be5c` | — |
| S3-020 | static-library | `2756be5c` | — |
| S3-025 | static-library | `2756be5c` | — |
| S3-026 | static-library | `e2fd28c2` | — |
| S3-027 | static-library | `9fa61fa3` | — |
| S3-028 | static-model | `93fa4e78` | — |
| S3-036 | static-library-fixtures | `ea81c2c3` | — |
| S3-037 | static-model | `93fa4e78` | — |
| S4-001 | static-library-fixtures | `ea81c2c3` | — |
| S4-002 | static-library-fixtures | `ea81c2c3` | — |
| S4-003 | static-library-fixtures | `8588a69e` | J6-001 |
| S4-018 | static-library | `bfc6c932` | — |
| S5-009 | static-library-fixtures | `adf0aa5b` | — |
| S5-010 | static-model | `a0ba38b8` | — |
| S5-011 | static-model | `a0ba38b8` | — |
| S5-012 | static-model | `a0ba38b8` | — |
| S5-016 | static-model | `9296bd24` | — |
| S5-018 | static-library-fixtures | `adf0aa5b` | — |
| S5-019 | static-model | `a0ba38b8` | — |
| S5-020 | static-model | `a0ba38b8` | — |
| S6-008 | static-library-fixtures | `ea81c2c3` | S2-024, S5-003, J6-004 |
| S6-014 | static-run | `ea81c2c3` | — |
| S6-016 | static-run | `9db3f0d8` | — |
| S6-017 | static-run | `5f947345` | — |
| S6-018 | static-run | `10f5d91e` | — |
| S6-022 | static-run | `3ef6d7db` | — |
| S6-023 | static-run | `3907a71d` | — |
| S6-024 | static-run | `3ef6d7db` | C2-017 |
| S6-025 | static-run | `6f97fee0` | — |
| S6-026 | static-run | `3ef6d7db` | — |
| S6-027 | static-run | `6f97fee0` | — |
| S6-029 | static-run | `6f97fee0` | — |
| S6-031 | static-library-fixtures | `3ef6d7db` | — |
| X1-001 | shared-components | `db8afca4` | C1-017, C2-016, C3-032, C4-016, S1-014, S2-019, S3-015, S4-016, S6-021 |
| X1-002 | shared-components | `664bb77c` | — |
| X1-003 | shared-components | `f2e21370` | — |
| X1-004 | shared-components | `4c13de2c` | S6-020 |
| X1-009 | shared-components | `d7afe32b` | — |
| X1-016 | shared-components | `0cfca97e` | — |
| X1-020 | shared-components | `53e679e7` | — |
| X1-023 | shared-components | `66100535` | — |
| C1-028 | runtime-metadata | `ff93a150` | — |
| C2-027 | connected-start | `23ddf26c` | — |
| C5-028 | connected-evidence | `c9cc2efa` | — |
| C5-030 | design-docs | `0ac0976b` | — |
| J1-019 | proof-docs | `06ab5157` | J3-022 |
| J5-010 | connected-evidence | `47cbe0a3` | — |
| J6-017 | shared-components | `daacef9d` | — |
| R1-001 | T01 | `6f93a1ae` | — |
| R1-007 | T01b | `992ee872` | — |
| R1-008 | T01b | `992ee872` | — |
| R3-001 | static-model | `a0ba38b8` | — |
| R4-002 | audit-tools | `5e1d98b3` | — |
| S2-025 | static-library | `2756be5c` | — |
| S3-032 | static-library | `2756be5c` | — |
| S6-033 | static-run | `3ef6d7db` | — |
| S6-037 | connected-shell | `4a5caa07` | — |
| X1-006 | shared-components | `6bd30c9e` | — |
| X1-015 | shared-components | `cfa2517c` | — |
| X1-017 | shared-components | `a7a38914` | — |
| X1-026 | shared-components | `15b7c5a0` | — |

Not verified: this read-only inventory reran no tests/build/browser/network activity. Lead combined acceptance, Stage6 and Stage7 remain separate; no live/paid/provider/seat/real Submit/Teams result is claimed.
