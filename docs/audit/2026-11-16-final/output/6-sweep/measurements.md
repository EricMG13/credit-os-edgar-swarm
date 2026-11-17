# Stage 6 measurements

The starting measurement source is `5e1d98b37305a9da59fb6944740ff17b721051af`.
The isolated build reproduced all 36 files from the stage 5 native proof
build byte for byte. The final comparison will share the accepted repair tip
on both sides. The updated base, after measurements and sweep gates remain
pending.

| Measure | Stage 0 reference | Discovery base |
| --- | --- | --- |
| Frontend unused exports and files | 0 knip issues | 0 knip issues, one existing CSS configuration hint |
| Frontend duplication | 160 clones, 1,449 duplicate lines (1.57%), 497 files | 287 clones, 2,805 duplicate lines (2.46%), 633 files |
| Python duplication excluding Signal | No comparable scan recorded | 250 clones, 2,935 duplicate lines (1.87%), 275 files |
| Tracked code lines excluding Signal | 257,110 | 280,090 |
| Suppression directives on that scope | 104 | 104 |
| Static asset bytes, raw and gzip | 1,587,935 and 441,096 | 1,609,887 and 447,782 |
| Connected asset bytes, raw and gzip | 1,469,051 and 435,630 | 1,594,128 and 476,602 |
| Whole build, raw and gzip | 3,414,790 and 1,223,473 | 3,561,819 and 1,271,125 across 36 files |
| ReportLibrary chunk, raw and gzip | 660,688 and 193,989 | 693,313 and 205,033 |
| Frontend test selection and line coverage | 3,950 tests in 173 files, 96.59% | 5,259 tests in 308 files, 97.69%, two stage 5 failures |
| Synthetic report render timing | No comparable isolated timing recorded | Repeated cold route samples in progress |

The web numbers use the pinned jscpd 5.4.1 gate with the existing include
scope and threshold. Python uses the same installed detector on the sweep
source folders with its Python format and Signal excluded. Report byte
counts sum the individual files; gzip is per file at level 6 with fixed
mtime. Code lines count tracked Python, TypeScript, JavaScript, CSS and HTML
in the six sweep source folders, including tests within them. The suppression
count includes 73 Ruff noqa, 24 Ruff format skip, 4 ESLint disable and
3 Python type-ignore directives. Raw baseline artifacts and measurement
scripts are in `/workspace/scratch/stage6-before/`.

The retained fast run's slowest Python case took 4.162 seconds:
`tests/model/test_loop.py::test_a_narrative_repair_says_to_call_read_inputs_again`.
The retained frontend run's slowest file, `ConnectedApp.test.tsx`, took
129.529 seconds. The eight shards took 610.131 seconds wall time and 1,013.375
seconds in aggregate. Host load and the different test selections limit
timing comparisons.

The stored stage 0 unused and duplication results used Node 22 and a smaller
source tree. Its bundle sizes, source lines and suppression counts in the
table were remeasured at `2b881075` with the current toolchain.
The current build uses Node 24.22.1 and npm 11.9.0. The older figures are
historical context. Changes attributed to this sweep will use the same tools
on both sides.

Not verified: accepted-sweep after measurements, combined gates and final
offline proof remain pending.
