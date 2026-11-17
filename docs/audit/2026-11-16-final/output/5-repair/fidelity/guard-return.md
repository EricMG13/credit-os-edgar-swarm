# R4-017 / R4-018: fidelity capture guard, first return

Implementation ready for fresh security/caller review and the lead's second read.
Branch `audit/lead-fidelity-guard-return`, base `738433b801eac7a406208057b43e11fb4be0a48e`,
code pin `63c4a7f7a855f094e289fb985d7a58a072968fcd`. No push, merge or final capture.

## Causes and repair

R4-017: capture imported `REPO_ROOT/web/scripts/connected-proof.mjs` before it knew
whether that older proof script was safe to import. A local sentinel in an older
root executed before capture failed for missing guard exports. The three already
reviewed guard helpers now live in pure `web/scripts/offline-network.mjs` and are
shared by proof, capture, the existing Node unit tests and the optional browser
evidence probe. Their bodies are unchanged byte-for-byte (SHA-256, excluding only
trailing newlines, `b8697cb021f565e6d665b48b7663b9b51c479dbfde794c1d49acef1afd9a00f8`).
An older root without this pure module fails before any old proof code executes.
`FID_ATTACH` validation now precedes both browser launches.

R4-018: the browser context guard and denial proxy did not cover Node `fetch` or
automatic redirects in Playwright's API client. Capture now validates each direct
request's initial URL, uses Node `redirect: "error"`, uses API `maxRedirects: 0`,
and requires status 200 before reading JSON. The existing synthetic completion
check and comparison fixture content are unchanged.

Changed files: `capture.mjs`, new `guard-return.test.mjs`, new
`web/scripts/offline-network.mjs`, `web/scripts/connected-proof.mjs`, the existing
`web/scripts/connected-proof-network.test.mjs` import, and the existing
`proof-alignment-evidence/network-guard-browser.mjs` import. The last import change
does not include the separately owned R4-016 cleanup.

## Tests and gates

All commands were bounded by `timeout 300`. Retained evidence is under
[`diagnostics/guard-return/`](diagnostics/guard-return/).

| Check | Result |
| --- | --- |
| First boundary run before repair (`red.log`) | exit 1, all 5 controls failed |
| Final same controls against saved base-738 capture (`red-final.log`) | exit 1, all 5 failed |
| `node --test …/fidelity/guard-return.test.mjs` (`green.log`) | exit 0, 5 passed, no skips |
| `npm --prefix web run test:scripts` (`node-scripts.log`) | exit 0, all existing 73 passed, no skips |
| `node …/fidelity/compare-selftest.mjs` | exit 0, 28/28 changes reported |
| `npm --prefix web run build` | exit 0 |
| `npm --prefix web run lint` | exit 0 |
| `npm --prefix web run format:check` | exit 0 |
| `npm --prefix web run typecheck` | exit 0 |
| New boundary test, explicit web ESLint config | exit 0 |
| Syntax checks: capture, boundary test, optional evidence probe | exit 0 |
| `uv run --no-sync python tools/quality_gate.py --base 738433b8` | exit 0; no changed Python files |
| `git diff --check` | exit 0 |
| Actual packager source archive and `validate_source` | exit 0; helper included, bytes identical |

The boundary controls run the actual capture script against temporary roots for
the import/launch tests. They execute the exact extracted capture networking code
with real Node fetch and real Playwright APIRequestContext against two independent
`127.0.0.1` listeners. Direct 200 responses succeed; 301, 302, 303, 307 and 308 each
fail without visiting the redirect receiver; 500 fails; both initial URL checks
reject before invoking a request. No browser or provider is needed. Outside
addresses in these controls are parser-only strings behind request/launch stubs.
The original guard tests and expected data are unchanged; their denial-proxy
payloads connect only to the loopback proxy, which has no forwarding/resolver code.

The first script-suite invocation preceded the local build: 77/78 passed, one
policy test failed because `web/dist/index.html` did not exist. After moving the
five audit-only controls outside the packaged web script suite and building,
all original 73 passed. That earlier log remains as `node-scripts-before-build.log`.
The initial Python gate invocation auto-synced the shared editable environment;
this setup output is retained separately as `environment-setup-quality.log` and
was disclosed to the lead. The final gate used uv 0.12.5, `--no-sync` and explicit
own-tree `PYTHONPATH`; no manifest or lockfile changed. The lead controls final sync.

## Fidelity, caller check and simplest design

All 126 comparator/baseline files match the base commit and the recorded before/
after manifests. Both manifests have SHA-256
`050ddb0fb6e96c1941d888ced8420d1b18e18e18835f69643078bd58ad7a2b59`.
No comparator key, baseline, expectation, source identity, synthetic handoff,
application module text, method, calculation, prompt, Signal or Teams file changed.

Confidence review traced four doubts: old dependency side effects, redirect
coverage outside browser routing, accidental proof behavior changes, and packaged
caller completeness. The sentinel/real loopback controls cover the first two.
An exact source comparison confirms proof differs only by moving the three helper
bodies and importing them. Every actual helper caller now imports the pure module.
The actual packager's `SOURCE_PATHS` archive at the code pin includes the new helper
and its packaged callers; no packager edit or release bundle was needed. An older
prepared capture root must receive this helper before capture can proceed.

Post-edit simplification retained one physical move and explicit options at the
two direct request sites. Importing the old proof and validating afterward cannot
prevent its side effects; a version/hash whitelist or source inspection would add
unneeded policy. No new runtime abstraction, dependency or helper behavior was added.
The browser guard, denial proxy, main proof assertions, exact numbers, source
identity checks, timeouts and no-skip coverage remain unchanged.

Not verified: final fidelity capture/comparison on the lead-approved source pin;
full synthetic browser journey; native browser execution of the optional evidence
probe; fresh security/caller review and lead second read; work-PC release execution;
provider/live/seat/real Submit/Teams behavior. No non-loopback connection, DNS override,
paid execution, push or merge was performed.
