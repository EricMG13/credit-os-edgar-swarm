# Stage 6 discovery baseline

The measurement pin is `5e1d98b37305a9da59fb6944740ff17b721051af`, in the
isolated detached checkout `/workspace/sweep-baseline`. This is the discovery
baseline before the outstanding stage 5 verification changes. Re-measure
against the accepted repair tip before attributing a difference to the sweep.

The stage 0 reference is `2b881075e51459592bb629ed8abe7ee24e4fa1d9`. Its
historical reports used Python 3.13.18, Node 22.23.4 and npm 10.9.9. For
the byte and source comparisons below, both source pins were checked out
separately and built with Node 24.22.1, npm 11.9.0 and the same locked
dependency files. The current Python tooling uses uv 0.12.5, Python 3.13.15
and pytest 9.1.1. The lockfile and configuration inputs were preserved.

| Measurement | Stage 0 | Stage 6 discovery base |
| --- | ---: | ---: |
| Knip reported issues | 0 | 0 |
| Knip configuration hints | 1 | 1 |
| Frontend files scanned by jscpd | 497 | 633 |
| Frontend jscpd clones | 160 | 287 |
| Frontend duplicated lines | 1,449 (1.57%) | 2,805 (2.46%) |
| Frontend duplicated tokens | 11,184 (1.68%) | 19,879 (2.43%) |
| Python jscpd clones | unmeasured in stage 0 | 250 |
| Python duplicated lines | unmeasured in stage 0 | 2,935 (1.87%) |
| Tracked source lines in measured scope | 257,110 | 280,090 |
| Suppression sites in measured scope | 104 | 104 |
| Static assets, raw / gzip bytes | 1,587,935 / 441,096 | 1,609,887 / 447,782 |
| Connected assets, raw / gzip bytes | 1,469,051 / 435,630 | 1,594,128 / 476,602 |
| ReportLibrary JS, raw / gzip bytes | 660,688 / 193,989 | 693,313 / 205,033 |
| Complete dist, raw / gzip bytes | 3,414,790 / 1,223,473 | 3,561,819 / 1,271,125 |

The fresh discovery build exited 0. All 36 files matched the previously built
stage 5 proof artifacts byte for byte. The static group is `web/dist/assets/`
and the connected group is `web/dist/connected-assets/`. The complete count
includes both HTML files, fonts and copied public artifacts. Gzip is summed
per file with level 6 and mtime 0. These figures are independent of the Vite
rounded sizes and are not estimates of a single navigation's transfers.
`tree-metrics.json` and `stage0-tree-metrics.json` retain per-file hashes,
sizes, source lines and suppression sites.

The measured code scope is tracked Python, JavaScript, TypeScript, CSS and
HTML under the six sweep paths, including source-adjacent tests and excluding
any path with a `signal` segment. Suppressions are Python comment-token
directives and JS/TS/CSS textual directive patterns, including intentional
test directives. Both pins have 73 Ruff noqa, 24 format-off or format-skip,
3 Python type-ignore and 4 ESLint-disable sites. Counts exclude configuration.
The frontend gate uses its established full `web/src` scope, including
Signal, for aggregate verification. It supplies no basis to classify Signal
as a sweep candidate.

## Commands and test evidence

Each fresh long command was capped at 300 seconds. Commands below are from the
detached worktree. The locked dependencies were linked to the existing
installation. No setup install or sync was run in either measurement checkout.

| Command or evidence | Exit and result |
| --- | --- |
| `npm --prefix web run unused` | 0. One existing CSS configuration hint. See `unused.log`. |
| `npm --prefix web run duplication` | 0 at the existing 3% threshold. TSX 2.97%, TS 0.92%. See `web-duplication.log`. |
| `node web/node_modules/jscpd/run-jscpd.js --threshold 3 --reporters json --output <scratch> web/src` | 0. Quantities match the frontend gate. See `web-jscpd/jscpd-report.json`. |
| `node web/node_modules/jscpd/run-jscpd.js --format python --ignore '**/signal/**' --reporters console,json --output <scratch> src react_frontend apps/issuer-library proof tools` | 0. Pinned local jscpd 5.4.1, 275 Python files, 156,588 lines scanned. Analysis only, without adding a gate. See `python-jscpd/jscpd-report.json`. |
| `npm --prefix web run build` | 0 on both pins. See `build.log` and `stage0-reference-build.log`. |
| `uv run --no-sync python tools/quality_gate.py --base 5e1d98b37305a9da59fb6944740ff17b721051af --json` | 0. Identical code base has 0 changed Python files and no import findings. The separate pinned stage 5 default gate against `origin/main` observed 46 files, 6,257 owned lines and 0 findings. |
| Pinned stage 5 lint, format and typecheck | All three exited 0 before the aggregate command reached the coverage timeout. See `/workspace/scratch/final-frontend-gates.log`. |
| Pinned stage 5 frontend native coverage merge | 1, with 5,257 passed and 2 failed, 5,259 executions across 308 files. Complete identity reconciliation. Original global 80% lines threshold passed at 97.69%. The failures are the link style and MetricTile currency display assertion, both independently reproduced. |
| Pinned stage 5 npm registry audit | 0 vulnerabilities, exit 0. See `/workspace/scratch/final-npm-audit.log`. No registry call was made for this sweep measurement. |
| Pinned stage 5 exact fast Python selection | CI 5,827 passed, 1 failed, 1 existing conditional skip. Supplemental 457 passed. All 6,286 selected nodes covered. The sole failure is the historical issued-record test fixture. See `/workspace/scratch/final-fast-python.md`. |
| Fresh discovery `npm --prefix web run test:scripts` | 124 under shared load. 66 completed passes and one cancelled file, `scripts/no-browser.test.mjs`, which repeatedly builds inside the tests. No completed assertion failed. See `script-tests.log`. |
| Pinned stage 5 Node page tests | 573 passed, exit 0. See `/workspace/scratch/final-fast-python/node.log`. |
| Pinned stage 5 connected proof | 2 passed, exit 0. Native Chrome 157.0.8103.78 and Edge 155.0.4283.62. See `/workspace/scratch/final-assembled-proof.log`. The measured build artifacts are identical; the proof did not measure individual page renders. |

The stage 0 fast Python suite selected 7,248 nodes with a different scope
than current exact CI plus changed tests. It reported 7,239 passes, 3
existing failures and 6 skips. Frontend stage 0 selected 3,950 tests in 173
files and reported 96.59% lines. The repaired tree's tests include new
coverage. These scopes cannot give a speed comparison.

From the pinned stage 5 shard reports, the slowest individual test across the
Python CI and supplemental scopes was
`tests/model/test_loop.py::test_a_narrative_repair_says_to_call_read_inputs_again`
at 4.162 seconds including setup and teardown. The 13 sequential shards took
284.643 seconds. The frontend's slowest file was the connected app test file
at 129.529 seconds. Its V27 review sheet test was the slowest individual
frontend test at 5.662 seconds. Eight shards ran in pairs with one worker
each, 610.131 seconds elapsed across the sequence and 1,013.375 seconds in
summed shard durations. Native JSON and JUnit evidence is indexed by
`test-metrics.json`. These durations reflect their recorded host load and suite
settings. They do not establish a causal performance change.

## Synthetic screen timing

Chrome 157.0.8103.78 opened 26 default connected report routes for an actual
completed Northbridge synthetic Full credit assessment. Each route started
in a fresh context at 1440 × 900. The measurement starts immediately before
the local navigation, waits for the load event, report navigation and exact
visible section heading, then waits two animation frames. Three sequential
samples per route completed, 78 total. Context setup, synthetic run processing,
and later drawer or disclosure interactions are outside the measured interval.

| Route | Median elapsed | Samples |
| --- | ---: | --- |
| Forecast | 4,732.771 ms | 4,732.771 / 4,971.819 / 2,627.229 ms |
| CP-1, Financial foundation | 3,369.652 ms | 3,369.652 / 3,798.450 / 2,203.057 ms |
| CP-3C, Refinancing & LME | 2,426.795 ms | 3,214.303 / 2,426.795 / 1,015.862 ms |

Forecast had the highest median. Shared load varied while the run was active,
and repeated samples varied accordingly. Use these values to locate the
cost. A speed claim needs a paired run with comparable load. This measurement
does not specifically isolate React render cost from HTTP, parsing and paint.

The measurement exited 0. The application attempted zero non-loopback
requests across setup and measured contexts. The no-forward proxy separately
denied 418 browser requests. The synthetic proof reused the real collector's
unchanged intake with the executed agreement selected and the measured
implementation's pure offline guard. It used a fresh temporary service root
and removed it after completion. The timeout and current package pins were
unchanged.

Repeat against a built checkout with matching source and toolchain:

```bash
timeout 300 env CHROMIUM_PATH=/workspace/audit-browsers/chrome/opt/google/chrome/chrome \
  node /workspace/scratch/stage6-before/render-timing.mjs <checkout> <result.json>
```

Keep `render-routes.json` beside the script. The raw samples and options are
in `render-timing.json`. The script already contains the intake functions
from the exact discovery capture pin. This remains the same benchmark code
when the stage 5 collector is repaired.

## Repeat after the sweep

Build on the final source pin and use `python3 tree-metrics.py <repo> <json>`.
Run the same pinned unused and duplication commands. For lines removed use
`git diff --numstat <accepted repair tip>...<sweep tip> -- src react_frontend apps/issuer-library proof tools web`
and keep additions, deletions, and the net delta distinct. For test timing,
use the original CI partitions and the same eight frontend shards, worker
limits, coverage settings and JSON reporters. Point `test-metrics.py` at the
new shard results. Report the prerequisites and limits when comparing timing
runs. If measurements support an actual performance change, take paired
before and after samples under comparable load.

Not verified: current stage 6 candidate diffs, after measurements, final full
gate acceptance, runtime parity with the stage 0 browser, Windows, work PC,
or paid/live/provider/seat/real Submit/Teams operations. The final browser file
gate and the cancelled script file remain to be verified on the applicable
acceptance tree. The stage 0 report records its separate browser limitation.
