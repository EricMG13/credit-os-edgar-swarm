# Stage 7 final verification

Source pin

`a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`, the merged stage 6 tree
on `audit/final-repairs`. The later handoff commits carry documentation
and evidence. Their application, test, workflow, manifest, tool and runtime
archive inputs match this source. The exact archive commit is identified
in the final audit PR.

Python 3.13.15, uv 0.12.5, Node 24.22.1 and npm 11.9.0 ran on Linux.
The installed Chrome and Edge builds are recorded in the native proof
records. Long verification commands used `timeout 300`.

| Check | Exit and result |
| --- | --- |
| `uv sync --locked` | 0. Resolved 39 packages and checked 38 installed. |
| Fast Python with original workflow selection and accepted supplemental files | 0 per shard. 6,285 passes and one existing conditional disk-case skip, all 6,286 identities reconciled. |
| `uv run --no-sync python tools/quality_gate.py --json` after locked sync | 0. Scope 49 files and 6,538 lines, no findings and imports passed. |
| Existing Node page-logic checks | 0. All 573 original legacy and Signal cases. |
| `npm --prefix web ci` | 0. Fresh locked install, 471 packages. |
| `npm --prefix web run lint`, `format:check`, `typecheck` | 0 for each. |
| `npm --prefix web run test`, original native test selection and coverage merge | Native coverage merge 0. All 5,259 tests in 308 files passed, including 630 Signal tests, across 12 accepted fresh batches. Line coverage 97.69% against the original 80% gate. |
| `npm --prefix web run audit`, `unused`, `duplication` | 0 for each. No production vulnerabilities or Knip issue. 285 clones and 2,785 duplicated lines, below the established threshold. |
| `npm --prefix web run build` | 0. Both entries built from the verified application source. |
| `npm --prefix web run test:scripts` | 0. All 73 original cases passed. |
| `npm --prefix web run test:file:gates` | 0. All 138 checks passed with native Chrome and the local denial proxy. |
| `npm --prefix web run proof:connected` | 0. Native Chrome 157.0.8103.78 and Edge 155.0.4283.62 each finished the synthetic journey on the checkout distribution. |
| `uv run --locked python tools/package_react_windows.py --revision HEAD` | 0 on the verified source. ZIP and sidecar validated. |
| Extracted runtime ZIP, locked cached setup and browser verification | 0 for locked Python and npm setup from cache, 0 for native Chrome and Edge connected proof and 0 for all 138 direct file checks against the already-built assets. |

The `gates` command was verified through all of its existing component
commands. A single unsharded frontend run had exceeded the 300-second
audit cap on the earlier combined tree. Fresh Stage 7 native shards
preserve the full selection, each test's timeout and the original global
80% line check when merged. The first two attempts at shard 8 failed in different unchanged tests. The
[frontend record](evidence/frontend/report.md) retains both failures, the
accepted reruns and the merged threshold result.

## Offline and source review

The final checkout and release ZIP connected proofs recorded zero outside
app requests on both browser channels. The checkout browser proof's
archive fields are null. Its separate [source pin](evidence/checkout/source-commit)
records the tested Git revision. The [ZIP proof](evidence/release/native-proof-summary.json)
carries both the source commit and archive checksum. The file checks
covered 138 cases per build, including the guard canary. The checkout
and ZIP proxies denied 1,493 and 1,484 native browser background attempts,
respectively. Denials did not forward traffic. Native screenshot samples
recorded zero outside app requests or WebSockets. The
[screen report](screens-diff.md) gives the exact states and guard totals.

The two connected stylesheets are different build artifacts. The clean
archive leaves out the checkout's root ignore rules. Tailwind can then
scan the first pass's static dist during the connected pass. Two otherwise
identical scratch builds reproduced all 36 original dist files in each
arm when the presence of the dist ignore rule was changed. The checkout
and the extracted archive therefore have independent execution evidence.
See the [release record](release.md) and [screen comparison](screens-diff.md).

The [redacted source scan](evidence/security/secret-review.md) found no
validated credential in scope. The 19 pattern hits were synthetic test
sentinels and one exact historical copy. R13/R15 permit the ordinary path
strings recorded in the scan.

## Release identity

- `delivery/credit-os2-react.zip` holds 7,440,549 bytes.
- SHA-256 `db51d1996b3913ef77a6e51ba3281554cb7c3be33f95ffaf2a966b2544a7088e`.
- The sidecar passes `sha256sum -c`. `SOURCE-COMMIT.txt` names the verified
  application source above.
- 1,363 selected source members, 36 built members and one provenance
  member all match the archive inventory. The release has both React
  surfaces, the synthetic proof, retained legacy inputs and the empty
  shipped data placeholder. The full-source archive has the separate
  developer tools, tests and work-PC documents.

The [full-source path check](evidence/rehearsal/source-archive-paths.json)
found two case-only audit evidence directories in the original GitHub
archive. A documentation-only rename unified the directory spelling and
preserved both diagnostic hashes. The corrected local archive had no
path-name conflicts. The standalone work-PC baseline hashes exported
bytes, including the launcher’s CRLF line endings.

## GitHub workflow scope

The sweep's two PR checks passed at `a326492d`, and its merge produced
the verified application source. The weekly full suite has no run for
this audit repair branch in GitHub's workflow records. A Windows proof
job is not configured in the repository's workflows or in the active
GitHub workflow list. The Linux proofs above are firsthand and do not
establish behavior on the work PC.

Not verified: actual Windows runtime and work-PC approval or installation,
paid/live provider execution, a real seat or Submit, Teams posts, and
the weekly full suite on this branch. The [audit summary](../SUMMARY.md)
consolidates all final verification limits.
