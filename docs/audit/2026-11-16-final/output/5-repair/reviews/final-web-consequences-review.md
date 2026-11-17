# Fresh final-web-consequences review

Verdict: **PASS** for the isolated two-line R4-020/C3-022 consequence repair. High: 0. Medium: 0. Low: 0. Lint completion is not established by this review and remains a required integration check.

Exact code pin: `72f1c59cc611dfe69e587eb117bb0742fddc1d6f`, branch `audit/lead-final-web-consequences`, worktree `/workspace/audit-final-web-consequences`, base `5e1d98b37305a9da59fb6944740ff17b721051af`. HEAD remained at that code pin throughout review. The implementer's report/evidence and existing `.venv`/`web/node_modules` links were untracked inputs. This reviewer changed no source, test, probe, gate, fixture, build output or dependency, and performed no push or merge.

Read `AGENTS.md`, audit README R1–R17/rules, stage 5, the complete diff, the existing neutral-link test, approved Button `link-gray` style and theme token, reporting-currency ruling, CM-320, C3-022/C4-013 register entries and ruling, independent literal money answer key, unchanged `withUnit`/`changeText`/`YearChange` path, MetricTile test, Forecast caller context/recovery link assertions, and retained RED/GREEN evidence. The assignment explicitly authorizes the named display-expectation alignment; it is not a general relaxation of the audit's unchanged-expectations rule.

R4-020 changes only `text-action underline` to `text-secondary underline` on the existing anchor. `text-secondary` resolves to the defined secondary foreground and matches the approved Button's neutral `link-gray` appearance. The exact visible name, underline, `href="#evidence/record"` and `evidenceOnlyQualifications` condition remain unchanged. No source, qualification or limitation text is removed, and navigation behavior is preserved. Existing Forecast recovery assertions retain the exact name and destination. This is the minimal class-only consequence; it does not reopen T18 behavior.

C3-022 changes only the stale regex literal from `\+\$5m vs FY2023` to `\+US\$5m vs FY2023`. The literal fixture still specifies change `5`, unit `USD millions`, prior `FY2023`, and metric key `principal`. The existing production path already formats that as `+US$5m vs FY2023`: positive sign comes from `changeText`; the unchanged `withUnit` maps the USD unit to `US$` and keeps scale `m`. CM-320 and the unchanged, independently literal money answer key require this currency form. The sign, digits, scale, prior period, absent tone/shape checks, leverage tone/shape checks and comparator count assertion all remain exact. The expectation remains a literal rather than being calculated from production output.

The separate adversarial money read checked that this alignment cannot excuse a different sign, value, scale, currency or prior year: all those literals still occur in the matcher/fixture and no formatter, arithmetic, input or assertion other than the named currency prefix changed. `git diff --quiet` confirms the production money formatter, answer key, sign/tone arithmetic, YearChange component, Signal, Python sources, prompts and handoffs are unchanged. The complete committed diff contains only the two identified one-line substitutions.

Independent checks:

- From `web/`, `timeout 300 ./node_modules/.bin/vitest run src/pages/connected/linkStyle.test.ts src/pages/library/parts/MetricTile.yearChange.test.tsx --maxWorkers=1` exited 0: 2 files, 3 tests passed, 16.25 seconds. Log: `/workspace/scratch/final-web-consequences-review-test.log`.
- `git diff --check 5e1d98b3 72f1c59c` passed. No tracked working-tree change was introduced by review.
- Read the retained behavioral RED: 2 failed/1 passed in 2.13 seconds, identifying the blue-underlined anchor and old USD display assertion. Read the retained affected GREEN: 11 files/97 tests passed in 142.18 seconds, including Forecast source/limitation, case, link and currency checks. These broader results were not rerun by this reviewer.
- Read reported format/typecheck/default quality success and their evidence. The lint log contained only the command banner at review time, so neither successful lint nor a completed lint exit is inferred.

No new nontrivial function or abstraction was introduced; the two local substitutions preserve behavior and are the simplest sufficient changes.

Not verified: completion/exit of the running lint gate; independent rerun of the broader 97-test selection, format/typecheck/Python quality gates; full merged frontend coverage/gates, browser rendering, before/after presentation/fidelity capture, release/Windows/work-PC checks or stage 6 sweep; paid/provider/live execution, seats, real Submit, Teams or outside application calls.
