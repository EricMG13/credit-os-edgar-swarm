# Missing-source marker capture contract

Scope: stage 5 step 9 collector repair on `5e1d98b37305a9da59fb6944740ff17b721051af`,
branch `audit/lead-capture-markers`, worktree `/workspace/audit-capture-markers`.
Frozen code and tests: `d08bca8a`.
This is a fidelity-harness consumer alignment for the reviewed **T35 / S3-007**
missing-source marker, including the T33 / S2-006 follow-up described in T35.
It changes no application behavior, source value, comparison rule or acceptance baseline.
T25's saved-example notice was read; it does not define the marker contract.

The lead's actual-final RED record, read without changing it, reports 69 Halden
screens, 259 source controls and 154 errors, all controls ending
`: no source recorded` and all reporting `locator.waitFor: Timeout 3000ms exceeded.`
It is retained in `/workspace/audit-final/docs/audit/2026-11-16-final/output/5-repair/fidelity/after-static-marker-red.json`
and `diagnostics/final-after-red/halden/`. Those counts were not rerun by this repair.

## Cause and repaired contract

`TraceControl.tsx:79–101` deliberately renders MissingTrace as a button with the
original control name plus `: no source recorded`, `aria-disabled="true"`, no
native `disabled` state, and the tooltip `No source recorded`. It has no action
and opens no dialog. The collector previously selected this button and waited
for a drawer anyway.

`capture.mjs` now records each selected control as one of:

- A complete original drawer in `sourceDrawers`, read using the existing dialog
  extractor and the existing 3,000 ms active-control timeout.
- A validated MissingTrace marker in `unavailableSourceControls`, preserving its
  ordinal, exact name, `ariaDisabled`, native `disabled`, exact tooltip and
  observed `opensDialog: false`. Keyboard focus must expose the real tooltip;
  Enter followed by two animation frames must leave no visible dialog.
- A failure in `sourceControlErrors`. A broken active control, ambiguous disabled
  control, enabled missing-source name, unexpected tooltip or marker opening a
  dialog remains an error and makes the actual capture process exit 1.

`traceControls` still counts every selected source control. `traceUnavailable`
is separate from `traceDrawers` and `traceErrors`, and is also totaled per surface.
Older retained screen records lacking this newly introduced count contribute zero
to that count only. Missing markers and failures are never represented as sourced
drawers with null contents. The unchanged comparator receives only real drawers;
capture errors remain separately recorded and fail the capture gate.

Only `capture.mjs`, its new interface test, this report and the compact
[contract evidence](diagnostics/capture-markers-contract.json) are changed.
The selector, active drawer extractor, page timeout, retry behavior, fixtures,
handoffs and application sources are unchanged.

## Test first and interface proof

The new `capture-markers.test.mjs` bundles the real `TraceControl`, `TraceDrawer`,
`RunContext` and tooltip components with existing pinned esbuild/React dependencies.
It draws the unchanged fixture's `cash-conversion` trace, a genuine MissingTrace
marker and deliberate broken-control variants. Each case runs the actual collector
CLI against an isolated temporary static page. Existing library/model fixtures are
read-only symlinks; generated bundles and captures stay under `/tmp`. No actual-final
build or application source is touched. This is a local component/collector contract
test, not an AFTER capture of the application.

The meaningful RED ran before editing `capture.mjs`: 2 controls, 1 full drawer,
1 timeout error and exit 1. The expected missing-marker behavior failed. An earlier
test-only filename mismatch was corrected before this behavioral RED; that failed
setup run is not counted as defect evidence.

GREEN retains both controls as 1 full drawer and 1 unavailable marker, 0 errors,
exit 0. The complete original sourced drawer record is identical as parsed JSON
between RED and GREEN, canonical SHA-256
`11fd53c0e69dbd5bff23db2c2ee1d19dbef368a6741042628e267cc2ab89851f`.
The unchanged `compare.mjs` also consumes the mixed serialized result successfully,
retains the original source statement and sees only the genuine sourced control.

| Actual interface case                          | Controls | Drawers | Unavailable | Errors | CLI exit |
| :--------------------------------------------- | -------: | ------: | ----------: | -----: | -------: |
| Genuine sourced control + genuine MissingTrace |        2 |       1 |           1 |      0 |        0 |
| Broken active control + genuine MissingTrace   |        2 |       0 |           1 |      1 |        1 |
| Unexplained aria-disabled control              |        2 |       1 |           0 |      1 |        1 |
| Enabled control using missing-source name      |        2 |       1 |           0 |      1 |        1 |
| Native-disabled marker-shaped control          |        2 |       1 |           0 |      1 |        1 |
| Marker-shaped control with wrong tooltip       |        2 |       1 |           0 |      1 |        1 |
| Marker-shaped control that opens a dialog      |        2 |       1 |           0 |      1 |        1 |

Run from this worktree with the existing dependency link:

```sh
timeout 300 env CHROMIUM_PATH=/workspace/audit-browsers/chrome/opt/google/chrome/chrome \
  node --test docs/audit/2026-11-16-final/output/5-repair/fidelity/capture-markers.test.mjs
```

Optional `FID_MARKER_EVIDENCE=<scratch-directory>` retains each raw local result;
`FID_CAPTURE_SCRIPT=<saved-script>` can exercise a predecessor collector.
Native Chrome runs behind the existing loopback denial proxy, with the context
guard installed before every page and service workers blocked. Application
context attempts were zero in every case. Native browser background attempts were
denied locally by the proxy and are counted separately in the evidence. No external
browser/Node/API destination or DNS override was used.

## Checks and self-review

- Capture interface suite: exit 0, 7 passed, zero skipped in 145.6 seconds; the mixed case also exercises
  the unchanged comparator as its downstream consumer.
- Existing `guard-return.test.mjs`, `offline-network.test.mjs` and
  `connected-proof-network.test.mjs`: exit 0, 8 Node tests passed.
- Comparator self-test: exit 0, all 28 planted changes reported.
- SHA-256 manifest: all 126 immutable files unchanged, including the comparator,
  comparator self-test, README, before records and baseline comparison records.
- Node syntax checks and ESLint for both changed scripts: exit 0. New test and
  changed `captureTraces` body pass Prettier; unrelated historical formatting was
  preserved. `git diff --check`: exit 0.
- `/workspace/audit-tooling/bin/uv` is exactly 0.12.5. Quality gate with `--no-sync`,
  `--base 5e1d98b3` and this worktree's explicit `PYTHONPATH`: exit 0, zero findings;
  no Python file changed.

Confidence review traced possible hidden active failures to the old shared drawer
assumption, then exercised the broken-active and ambiguous-state cases above. It
checked source-control totals, exact original drawer retention and unchanged
downstream comparison behavior. Marker tooltip and opens-dialog failures are
asserted by their specific error messages, not just a nonzero exit.

Post-edit rewrite comparison rejected filtering disabled controls (loses the
control record), trusting the label alone (accepts enabled or ambiguous controls),
and treating the marker as a drawer (invents sourced content). The narrow inline
contract branch preserves the existing successful drawer path without an extra
abstraction. Confidence-review and rewrite-tournament skills were not available;
the stage-5 step-8 manual fallback above was used. Fresh independent review is
required before merge; this implementer neither merges nor pushes.

Not verified: full merged connected/static AFTER capture, full final-source fidelity
comparison/diff and presentation acceptance; post-merge frontend/package/Windows
gates; delayed dialogs beyond the marker's keyboard-event/two-frame observation;
paid/provider/live execution, seats, real Submit, Teams or any outside application.
