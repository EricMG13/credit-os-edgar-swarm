# Run Credit OS 2

Credit OS 2 is based on RBOT-HTML `b8cf4ca`. It keeps that revision's Python pin,
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

On the Windows work PC, install Node.js 24, uv 0.12.5, Google Chrome and
Microsoft Edge. Save the candidate ZIP and its `.zip.sha256` file together.
Run the following in PowerShell. Choose a short, unused, writable local folder.

```powershell
$zip = 'C:\Downloads\credit-os2-react.zip'
$folder = 'C:\credit-os2-test'
$expected = ((Get-Content -LiteralPath "$zip.sha256" -Raw -ErrorAction Stop).Trim() -split '\s+')[0]
$actual = (Get-FileHash -LiteralPath $zip -Algorithm SHA256 -ErrorAction Stop).Hash.ToLowerInvariant()
if ($actual -ne $expected) { throw 'Candidate ZIP checksum mismatch.' }
if (Test-Path -LiteralPath $folder) { throw 'Choose an unused extraction folder.' }
Expand-Archive -LiteralPath $zip -DestinationPath $folder -ErrorAction Stop
Set-Location -LiteralPath $folder -ErrorAction Stop
Get-Content .\SOURCE-COMMIT.txt
$env:CREDIT_OS_PROOF_ZIP_SHA256 = $actual
try {
    .\Run-React-Proof.cmd
    $status = $LASTEXITCODE
    Write-Output "Browser proof exit code $status."
    if ($status -ne 0) { throw "Browser proof failed with exit code $status." }
} finally {
    Remove-Item Env:CREDIT_OS_PROOF_ZIP_SHA256
}
```

Keep the printed terminal result and the contents of the new
`proof-artifacts/run-…` folder. Its `proof.json` pairs the two branded browser
records with the same ZIP hash and source commit. It identifies the operating
system and lists the screenshots for each synthetic run. The Windows release
gate requires both browsers in that record and exit code 0 on the work PC.

On macOS or after setup, run the following command.

```sh
npm --prefix web run proof:connected
```

Playwright launches the installed branded browsers. Set `CHROME_PATH` or `EDGE_PATH`
to the corresponding executable if it is installed in a nonstandard location.
Success is two passing tests and exit code 0. Each browser uses a separate temporary
workspace and uploads the same synthetic Northbridge filing and portfolio workbook.
It inspects both documents, selects the workbook in the form, and checks the
finished report and all five redesigned views, the issuer calendar and its source
row, keyboard focus after closing figure and row traces, the exact original
handoff download, a published CP-1 chart, downside cases and break points with
source links and a 390 px layout, rate and currency shocks, dated instrument
quotes and recovery qualifications, the workbook-matched portfolio limits chart
and source table, and the model forecast that RBOT-HTML calculates. Run charts in
Forecast are checked against the owning module and the same Evidence link.
Results and screenshots are saved under
`proof-artifacts/`. The proof substitutes canned model responses and makes no
paid calls.

To prepare a local release candidate from committed sources, run:

```sh
uv run --locked python tools/package_react_windows.py --revision HEAD
```

The builder installs the locked frontend dependencies in a temporary source
directory and writes `delivery/credit-os2-react.zip` and its checksum. Candidate
archives contain the synthetic filing and canned handoffs in `proof/handoffs/`.
The bundled proof runs independently of development fixtures and local issuer data.

## Open the interface

Run the service against a short, local workflow workspace. Use a new folder for the
manual synthetic proof. Enter `Northbridge Synthetic Group` and `2025-03-31`,
then choose Full credit assessment (RBOT's Credit Snapshot pathway). Upload
`proof/northbridge-filing.txt` and `proof/northbridge-portfolio.xlsx`, click
Inspect documents, and select `northbridge-portfolio.xlsx` under Portfolio workbook.

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

Full credit assessment and Portfolio Decision accept the pinned [workbook
template](templates/portfolio.template.xlsx) or the fund's own exports. For the
exports, upload the mandate, constraints and exposure report CSVs and the
holdings workbook. Select the holdings workbook in the Portfolio workbook field.
RBOT-HTML lists the validation findings in the run summary. A published limits
record without a validated portfolio basis stays in a table.

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
