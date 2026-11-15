# Run the Credit OS 2 synthetic proof on the Windows work PC

Use the Windows release bundle. It includes the React build, the pinned legacy source,
the test launcher, and the synthetic filing. The work PC needs Node.js 24, uv 0.12.5,
Google Chrome and Microsoft Edge. The launcher asks uv for Python 3.12.14 and installs
the locked Python and npm packages. The first install needs access to the package
registries or your work PC's configured mirrors. No Git or model credentials are needed.

## 1. Download and extract the ZIP

Sign in to GitHub with access to
[EricMG13/credit-os2 Releases](https://github.com/EricMG13/credit-os2/releases).
Download `credit-os2-windows.zip` and `credit-os2-windows.zip.sha256` from the same release
to Downloads. Open PowerShell and enter the following. Use a short local destination
outside OneDrive or a network share.

```powershell
$zip = Join-Path $env:USERPROFILE 'Downloads\credit-os2-windows.zip'
$destination = Join-Path $env:USERPROFILE 'co2'
$expected = ((Get-Content -LiteralPath "$zip.sha256" -Raw).Trim() -split '\s+')[0]
$actual = (Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash
if ($actual -ne $expected) { throw 'The ZIP checksum does not match the release.' }
Expand-Archive -LiteralPath $zip -DestinationPath $destination
Set-Location (Join-Path $destination 'credit-os2')
```

## 2. Check tools and run both browsers

In the same PowerShell window:

```powershell
node --version
uv --version
.\Run-Windows-Proof.cmd
$LASTEXITCODE
```

Node must report `v24.x` and uv should report `uv 0.12.5`. The Windows CI proof uses
Node `24.16.0` and uv `0.12.5`. Use your approved work-PC install method if either is
missing. The script installs Python 3.12.14 through uv if that interpreter is absent.

Playwright finds the standard Chrome and Edge installations. If it reports a missing
browser, set the corresponding variable to the actual executable and rerun.

```powershell
# Examples for standard machine-wide installs
$env:CHROME_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$env:EDGE_PATH = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
.\Run-Windows-Proof.cmd
$LASTEXITCODE
```

If legacy refuses a long temporary path, set both `TEMP` and `TMP` to a short
writable folder on a local disk in this PowerShell session, then rerun.

## 3. Check the result

The final output must name both **Google Chrome** and **Microsoft Edge**, show two tests
passed and zero failed, and return exit code `0`. The script uploads the same synthetic
filing in each browser, submits it, waits for the legacy scheduler, opens and reloads
the report, and verifies the downloaded handoff. It checks the real browser brand.

The output prints a fresh directory under `proof-artifacts`. A pass writes
`chrome.json`, `msedge.json` and a finished-report screenshot for each browser.
If a browser fails, keep its console output and the newest artifact directory.
The test copies the synthetic scheduler logs there on failure. Both browsers must pass
on this PC to finish work-PC acceptance.
