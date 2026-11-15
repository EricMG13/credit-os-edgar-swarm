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

The repository's `docs/design/react-module-coverage.md` maps the report modules
to the React components and published data.

Full credit assessment and Portfolio Decision accept the pinned [workbook
template](templates/portfolio.template.xlsx) or the fund's own exports. For the
exports, upload the mandate, constraints and exposure report CSVs and the
holdings workbook. Select the holdings workbook in the Portfolio workbook field.
RBOT-HTML lists the validation findings in the run summary. The limits chart shows
current exposure against maximum limits when the published values match the
run's frozen portfolio inputs on the same date and `% NAV` basis. For an export,
the holdings must corroborate the exposure and the NAV. Proposals stay in the
published table. A table containing a minimum limit or an unverified row stays
in table view.

## Live runs and report verification

RBOT-HTML maps the Claude Fast preset to `opus-medium` (Claude Opus 5.5 at medium
effort). Set `ANTHROPIC_API_KEY` in the launching environment for this preset and
`OPENAI_API_KEY` for the service startup check. The regular reviewed submission
uses RBOT-HTML's USD 20 cap. Use one issuer's financial statements for the required
periods, cash and debt schedules, executed financing and covenant documents, and
dated market, peer and ratings evidence where relevant.

The redesigned reader was checked separately against the retained Caesars
Entertainment report as of 2 October 2026. The live test produced 12 accepted
handoffs from 18 source files. The final continuation reused eight responses and
completed four modules through the live provider. Across its three segments the
test settled USD 32.16235440 under a one-time USD 50 authorization. The native
library withheld listing during its retained-method check. The read-only preview
preserved that status and the missing portfolio and legal evidence. The browser
proof in this ZIP uses the synthetic Northbridge case and canned responses.
