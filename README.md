# Credit OS Connected

One local React interface for the legacy Credit OS workflow. The React source starts at
Credit OS revision `4df574a1`. The server loads RBOT-HTML revision
`8e3954ae024e792a2f3ecdee0b7320041f9034a7` from a separate source tree.

The connected app uses the legacy HTTP service for uploads, readiness, submission and
run status. It reads the library export produced by the legacy scheduler and opens
published reports and handoff downloads in the same React shell. The shipped web build
also retains its offline mode.

## Windows work PC

Download the Windows ZIP from [GitHub Releases](https://github.com/EricMG13/credit-os2/releases).
Follow the [Windows work-PC proof steps](docs/windows-work-pc.md) to validate the checksum,
extract the bundle, and run the same synthetic upload-to-report test in Chrome and Edge.

## Set up from source

Use Python 3.12.14, uv 0.12.5 and Node 24. The lockfiles pin the work-PC runtime packages,
including Copilot SDK 1.0.8, pydantic 2.13.4, pypdf 6.21.4 and openpyxl 3.1.5.

Download the [pinned legacy source ZIP](https://github.com/EricMG13/RBOT-HTML/archive/8e3954ae024e792a2f3ecdee0b7320041f9034a7.zip),
extract its inner directory as `.legacy`, and put this line in `.legacy/.credit-os-revision`:

```text
8e3954ae024e792a2f3ecdee0b7320041f9034a7
```

The app also accepts another path to the pinned archive through `--legacy`. Set
`CREDIT_OS_LEGACY` to that path for browser proof. Keep the run root separate from legacy
source and use a short, local filesystem path as required by the scheduler.

```sh
uv sync --locked
npm --prefix web ci
npm --prefix web run build
```

## Prove the connected flow

Install branded Google Chrome and Microsoft Edge, then run:

```sh
npm --prefix web run proof:connected
```

If a browser lives outside its usual install location, set `CHROME_PATH` or `EDGE_PATH`
to its executable. The proof checks the browser brand, starts a fresh loopback service
and run workspace per browser, and uses the same tracked synthetic filing in each.
It verifies the upload and submission responses, waits for the legacy scheduler to
finish, opens the published report, and reloads it by URL. The synthetic launcher
checks the uploaded file and uses canned model replies. Legacy CP-OS builds the
handoffs and the legacy scheduler publishes them. Screenshots go to `proof-artifacts/`.

To repeat the synthetic flow manually, run
`uv run --locked python -m proof.serve --legacy .legacy --root <short-empty-local-path>`
and open the printed address. Use `proof/northbridge-filing.txt`, issuer
`Northbridge Synthetic Group`, and as-of date `2025-03-31`.

The regular command `uv run --locked python -m connected --legacy .legacy --root <local-workspace>`
opens the same UI for existing reports and submission review. Paid Submit is disabled
in that mode. The synthetic proof makes no live provider calls.

## Verified on 15 November 2026

The browser proof passed on macOS arm64 with the work-PC package pins. Both sessions
uploaded the same synthetic case, completed it through the legacy scheduler, reloaded
the React report, and downloaded the matching CP-2 handoff.

| Browser | Version | Synthetic run |
| --- | --- | --- |
| Google Chrome | 157.0.8103.78 | `20261115-102606-01` |
| Microsoft Edge | 157.0.4341.60 | `20261115-102613-01` |

The same proof command can be run on the Windows work PC. Physical work-PC acceptance
is still pending.
