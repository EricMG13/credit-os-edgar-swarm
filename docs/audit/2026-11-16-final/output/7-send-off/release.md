# Stage 7 release candidate and extracted runtime verification

The candidate is `/workspace/audit-final/delivery/credit-os2-react.zip`.
It was built from the frozen application source
`a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`. The handoff
documentation can have a later commit without changing this package's
provenance.

- Archive size: 7,440,549 bytes.
- SHA-256: `db51d1996b3913ef77a6e51ba3281554cb7c3be33f95ffaf2a966b2544a7088e`.
- `SOURCE-COMMIT.txt` contains the exact application commit.
- `sha256sum -c credit-os2-react.zip.sha256` exited 0.

| Command or check | Exit and result |
| --- | --- |
| `timeout 300 /workspace/audit-tooling/bin/uv run --locked python tools/package_react_windows.py --revision HEAD` | 0. Pinned uv 0.12.5, source checkout above. Packager used a clean temporary build and locked npm install. |
| ZIP membership and independent extraction hash reconciliation | 0. 1,363 source members exactly matched `git archive` of the packager scope, plus 36 built files and 1 provenance file. All 1,400 extracted members matched their ZIP bytes. |
| Extracted `uv sync --locked --offline` and `npm --prefix web ci --offline --no-audit --no-fund` | 0 each against local caches. Both installs belonged to the extraction. Imports resolved to its Python sources and Playwright installation. |
| Extracted `npm --prefix web run proof:connected` | 0. Two branded browsers, two passes, zero failures and skips. Uses the existing package build and includes archive SHA-256 in `proof.json`. |
| Direct extracted `node web/scripts/open-from-disk.mjs web/dist` with `CI=true` and a deny-only loopback proxy | 0. All 138 checks passed, including the deliberate CSP violation canary. The local proxy denied 1,484 connections and had no unexpected failures. No rebuild. |
| Controlled scratch builds of the archive source, with and without only `/web/dist/` in `.gitignore` | 0 each. Reproduced both complete build manifests. |
| Archive SHA-256 and member seal after runtime checks | 0. SHA-256 verified again after both runtime checks; all 1,400 original extracted members unchanged. |

The destination preserves both built React entry points, the shipped
empty static data placeholder, local fonts, source fixtures, the connected
service, the synthetic handoffs and `Run-React-Proof.cmd`. Legacy library
and start-form sources remain included as the surface map describes.
Frontend tests that live under `web/` are included. The repository-wide
`tests/` and `tools/`, `AGENTS.md`, audit documents and work-PC
initialisation prompt are outside the runtime ZIP and come from the full
source archive. No environment files, install trees, private-key files,
unsupported Windows paths or case-folded duplicates were found.

## Build byte comparison

All 36 files were compared by SHA-256 against the fresh, successful
checkout build. Thirty-four files match exactly, including the complete
shipped static surface, all JavaScript and copied assets. The two
differences are the connected stylesheet and its hash-dependent link
in `connected.html`. Normalizing just the stylesheet filename makes
that HTML byte-identical.

The packager source archive excludes the repository's `.gitignore`.
Repeating the build on the same archive source without that file exactly
reproduced all 36 shipped files. Adding just the `/web/dist/` exclusion
reproduced all 36 checkout files. The first Vite pass builds the static
output, and without that ignore the Tailwind discovery in the connected
pass can see the generated output. The packaged connected CSS is
134,180 bytes versus 124,617 in the checkout. The PostCSS comparison
found 83 new scopes and 84 more leaves using the recorded scoped-leaf
definition. No checkout scope or declaration was removed. Two shared
default/property blocks gained declarations, some shared scope order
changed, and no added scope contained a URL. This is a packaging build
difference. The ZIP and all repository sources remained unchanged during
the measurement. An independent matched Forecast capture found identical PNG hashes, computed styles, geometry and text at 1440 px and 390 px. The full screen census is reported separately.

## Runtime evidence

The extracted proof drove the package with native Google Chrome
157.0.8103.78 (run `20261117-223409-01`) and native Microsoft Edge
155.0.4283.62 (run `20261117-223511-01`) on Linux. The browsers used
separate synthetic roots, the uploaded Northbridge agreement was selected
as executed, and the service remained in synthetic mode. Both contexts
reported zero attempted outside application requests. The local
non-forwarding proxy denied 169 Chrome and 209 Edge browser requests
during the two runs. Each blank-page control had zero app-context
requests and seven browser proxy denials.

Evidence paths are relative to `/workspace/scratch/stage7-release/`.
The archive evidence is `package.log`, `archive-proof.json`,
`archive-members.txt`, `archive-sha256.json`, and
`extraction-seal.json`. Build comparison evidence is
`dist-comparison.json`, `css-causality.json` and `css-delta.json`.
Native proof detail is in `native-proof-summary.json` and
`extracted/proof-artifacts/run-Gesls9/`. The extracted static command
output is `extracted-static.log` with its local-proxy evidence alongside.

Not verified: the Windows work PC and Command Prompt launcher, an
approved work-PC package installation, a live/provider run, a real
seat, real Submit or Teams. Browser evidence here is native Linux.
