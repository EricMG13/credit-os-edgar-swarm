# PRELIMINARY fidelity harness preparation

This is preparation on `0b0af426` plus the copied tools. It is not the final source,
an AFTER capture, or stage 5 fidelity acceptance. Final capture waits for the lead's
GO and exact source pin.

`3e6bc4ee` copied all 127 coordination fidelity files byte for byte. The complete
SHA-256 list is `baseline-sha256.json`; it includes the immutable 118-screen,
5,818-item comparison with zero differences, zero not-found items and 396 omissions.
`before/`, `compare.mjs`, `compare-selftest.mjs`, `compare-before.json` and
`compare-before.md` are unchanged.

The original capture had neither a context guard nor a denial proxy. The retained
`PRELIMINARY-offline-before.log` is the observed failing guard-presence assertion
(exit 1); no unguarded browser was launched. The smallest repair imports the
already reviewed `createOfflineProxy`, `installOfflineGuard` and local-URL predicate
from `web/scripts/connected-proof.mjs` (`f251fbc7`, import-safe). Every page gets its
guard before creation, service workers are blocked, and all browser subprocesses
use the local denial proxy. External `FID_ATTACH` values are rejected. The Python
child's explicit `PYTHONPATH` includes this repository's `src`, issuer-library app
and root, avoiding another checkout's editable imports. The 300-second command
cap replaces the obsolete 600-second comment; no in-script timeout or gate changed.

Checks observed:

- `npm --prefix web run build`: exit 0, retained build log; existing bundle-size
  notice only. uv is exactly 0.12.5 at `/workspace/audit-tooling/bin/uv`.
- `node --check .../capture.mjs`: exit 0.
- `node --test web/scripts/connected-proof-network.test.mjs`: exit 0, three tests.
  The denial-proxy test addresses only a local listener; it does not resolve or
  connect to the example host named in the request target.
- Identical guard-presence assertion after repair plus before-page ordering,
  service-worker and proxy checks: exit 0.
- `compare-selftest.mjs`: exit 0, all 28 planted changes reported. No comparator
  key, rule, expected value, source handoff or module text changed.
- Native Chrome 157, connected `ONLY=overview` diagnostic in
  `/tmp/fidelity-PRELIMINARY-base`: exit 0; one screen, 67 figures, 46 drawers,
  zero coverage gaps or trace errors. It uploads all three proof files and chooses
  the executed credit agreement. Direct `/start` navigation means this harness
  does not have the proof script's old duplicate-Start-link selector problem.
  Existing step-label selectors succeeded, so none was changed.
- Context-level external attempts: zero for the blank control and capture.
  Native browser background requests were separately denied by the local proxy:
  10 in the blank control, 44 in the diagnostic. These are recorded, not allowlisted.

Confidence/simplification review: source identity is explicit; browser guards cover
all created contexts before pages and popups; the proxy is reused, not duplicated;
failure cleanup retains traffic evidence. The diagnostic is deliberately partial
and proves only setup and the Overview capture on this older source. Comparison
against final merged presentation, full screen coverage, all new differences and
omissions, and the VERIFICATION draft remain pending. No provider, live, seat,
real Submit, Teams action, work-PC work or stage 6/7 work was performed.

Not verified: the final source and its report; a live model run; another machine or
browser; visual mark geometry, hover content, and the existing comparator's stated
limitations. A fresh reviewer must accept the harness change before integration.
