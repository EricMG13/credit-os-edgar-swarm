# Run Credit OS 2

Credit OS 2 is based on RBOT-HTML `9d040f8`. It keeps that revision's Python pin,
`pyproject.toml`, `uv.lock`, scheduler, calculations, provider configuration and library
publication. The browser uses the Credit OS design system and React 19.3.0. Run intake,
activity, library and report navigation live at one local address.

## Set up

Install Node.js 24, uv 0.12.5, Google Chrome and Microsoft Edge. Extract the
`credit-os2-react.zip` release to a short local path, or use the repository checkout.
Open a terminal in the extracted project directory.

```sh
uv sync --locked
npm --prefix web ci
npm --prefix web run build
```

A release ZIP includes the compiled React assets. A source checkout needs the build
command before launch. uv takes Python and all Python package versions from
RBOT-HTML's existing pins.

## Run the browser proof

On Windows, run the following from the extracted project in PowerShell.

```powershell
.\Run-React-Proof.cmd
$LASTEXITCODE
```

On macOS or after setup, run the following command.

```sh
npm --prefix web run proof:connected
```

Playwright launches the installed branded browsers. Set `CHROME_PATH` or `EDGE_PATH`
to the corresponding executable if it is installed in a nonstandard location.
Success is two passing tests and exit code 0. Each browser uses a separate temporary
workspace and uploads the same synthetic Northbridge filing. The test checks the
finished report, original handoff download, a published CP-1 chart, and the model
forecast that RBOT-HTML calculates. Results and report screenshots are saved in a fresh
folder under `proof-artifacts/`. The proof substitutes canned model responses and
makes no paid calls.

## Open the interface

Run the service against a short, local workflow workspace. Use a new folder for the
manual synthetic proof, then upload `proof/northbridge-filing.txt`, enter
`Northbridge Synthetic Group` and `2025-03-31`, and choose Full credit assessment
(RBOT's Credit Snapshot pathway).

```sh
PYTHONPATH=src uv run --locked python -m proof.serve --root /path/to/empty-proof-folder
```

For the regular RBOT-HTML workflow:

```sh
PYTHONPATH=src uv run --locked python -m react_frontend --root /path/to/workflow-folder
```

In PowerShell, set `$env:PYTHONPATH = (Join-Path (Get-Location) 'src')` first, then run
either command beginning with `uv`. Open the printed loopback address. Regular mode
uses RBOT-HTML's existing provider-key checks, reviewed submission and run cap.

[Module design and data coverage](design/react-module-coverage.md)

## Claude medium live preflight

RBOT-HTML maps the Claude Fast preset to `opus-medium` (Claude Opus 5.5, medium
effort). This preset uses the direct Anthropic adapter and requires
`ANTHROPIC_API_KEY`. The hosted service also requires `OPENAI_API_KEY` at startup
for its other original presets. The existing OpenRouter route targets DeepSeek.
With the available OpenRouter credential, the Claude summary returned
`Claude Opus is not available on this service` and issued no approval digest.
No provider request was made and there is no live report to assess.

The Northbridge filing used by the browser proof contains one line and arrives
unrecognised at native intake. The strongest coherent tracked example was Harbor
Freight Systems in `tests/fixtures/run-expectations/synthetic/`. Native preparation
could read all ten files and plan the full 12-module first-run Credit Snapshot.
It recognised eight files. The market quotes and peer data went unrecognised.
The pack provided no recognised financial statements, confirmed executed agreement,
or classified observed quote. The intake forecast flagged provisional legal terms,
reliance on management claims, and an unresolved add-back baseline. These are
preflight findings.

To assess a full live report, use one issuer's financial statements for the required
periods, cash and debt schedules, executed financing and covenant documents, and
dated market, peer and ratings evidence where relevant. The existing live approval
uses the original USD 20 cap. The offline cost check covered the maximum hold for
one model call. Total live cost and the resulting report remain unverified.
