# Canonical proof consequences: compact lead and local browser icons

Ready for fresh combined review. Branch `audit/lead-proof-local-consequences` starts
at report pin `5881baa9`; additional code is
`8f4ba2502c89cc1fcfbcc18bc1f086df97cf0440`. Earlier R4-017/R4-018 code/report history
is unchanged. No push, merge, native proof rerun or final fidelity capture.

The lead's actual-final proof at `b97e9ea2` reached `checkCompactLibrary` in both
Chrome and Edge. It rejected the approved `lead` field because the old expected
keys contained only `folder`, `issuerKey` and `pathway`. Edge also reported the
native image URL
`edge://fileicon/?path=%2Ftmp%2Fplaywright-artifacts-L5o3oy%2F712760fd-0bc0-4e76-9677-a327863eded5`
as non-loopback. That URL invokes a local browser service, with no network host.
The original observed log is retained as `native-observed-before.log` under
[`diagnostics/proof-local-consequences/`](diagnostics/proof-local-consequences/).

## Changes and scope

The compact-library assertion is the finding-authorized consequence of the
approved C1-025/C3-001 source-card provenance work, not a new application defect.
Inspection of `react_frontend/library_cards.py`, `_library_index` and the TypeScript
`LibraryIndex` type confirms exactly five lead fields: `module`, `output`, `sha256`,
`line` and `text`. Only `lead` is added to the expected outer run keys. The proof
now requires that exact nested shape and the selected CP-6 output's id, module,
run, hash and paragraph line/text from a run-scoped snapshot. It independently
requires the unchanged synthetic bottom line, a positive integer source line,
and a serialized lead below 2,000 characters, preserving compactness. The source
keeps the whole selected paragraph; no application truncation limit was added.
All other existing key, catalogue and publication assertions remain in place.

R4-019 is the Low classification finding assigned by the lead. `offline-network.mjs`
now admits only the `chrome:` or `edge:` `fileicon` service at `/`, with one `path`
parameter containing an absolute POSIX or drive-letter local path. UNC and
relative paths, remote URLs, control characters, unknown services, other paths,
ports, credentials, fragments and additional parameters remain denied. This is
one narrow classifier clause; the proxy, context routing and request guards are
unchanged. No browser protocol is admitted wholesale.

Changed files are `web/scripts/offline-network.mjs`,
`web/scripts/connected-proof.mjs`, and new audit-only
`proof-local-consequences.test.mjs`. No application, module text, source handoff,
numeric/semantic expectation, Signal, method, calculation, prompt or Teams file
changed. The original 73 script tests remain untouched. Audit-only controls stay
outside the packaged web script suite.

## Red, green and gates

All commands were bounded by `timeout 300` and retained in the diagnostics folder.

| Check | Result |
| --- | --- |
| New controls before repair (`red.log`) | exit 1: observed Edge URL false, local-icon positive false, old lead-key expectation false |
| New controls plus prior guard-return controls (`green.log`) | exit 0: 9 passed, no skips |
| Existing `npm --prefix web run test:scripts` | exit 0: original 73 passed, no skips |
| `npm --prefix web run lint` | exit 0 |
| `npm --prefix web run format:check` | exit 0 |
| `npm --prefix web run typecheck` | exit 0 |
| New audit test, explicit web ESLint config | exit 0 |
| Syntax checks on the two changed scripts and new test | exit 0 |
| uv 0.12.5 `run --no-sync python tools/quality_gate.py --base 5881baa9`, explicit own-tree `PYTHONPATH` | exit 0: no changed Python files |
| Comparator/baseline SHA verification | exit 0: all 126 immutable files unchanged |
| `git diff --check` | exit 0 |

New controls cover the observed URL and 47 additional parser-only icon addresses,
including POSIX/Windows positives and the denied cases above. They execute the
exact extracted `checkCompactLibrary` function with inert request fixtures: the
approved exact lead succeeds, and 13 mutations of public keys, provenance, run,
issuer, pathway or text fail. No negative control issues an outside browser/API/
Node request. The prior five real-loopback import/redirect controls still pass.

Confidence review traced the risk of broad browser-scheme admission to the exact
service/path/query and local-path checks; the parser controls keep every remote
case denied. The risk of merely loosening the compact key list is addressed by
the exact nested object, independent synthetic sentence and selected source
identity assertions. Post-edit simplification retained one classifier clause and
direct assertions in the existing proof function, adding no runtime abstraction
or dependency. All 126 comparator/baseline files retain manifest SHA-256
`050ddb0fb6e96c1941d888ced8420d1b18e18e18835f69643078bd58ad7a2b59`.

Not verified: native Chrome/Edge proof on the integrated approved combined pin;
final fidelity capture/comparison; fresh combined security/caller review and lead
second read; work-PC execution; provider/live/seat/real Submit/Teams behavior.
