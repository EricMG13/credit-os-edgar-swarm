# Stage 6 measurements

The starting measurement source is `5e1d98b37305a9da59fb6944740ff17b721051af`.
The isolated build reproduced all 36 files from the stage 5 native proof
build byte for byte. The final comparison will share the accepted repair tip
on both sides. The updated base, after measurements and sweep gates are
pending.

| Measure | Stage 0 reference | Discovery base |
| --- | --- | --- |
| Frontend unused exports and files | 0 knip issues | 0 knip issues, one existing CSS configuration hint |
| Frontend duplication | 160 clones, 1,449 duplicate lines (1.57%), 497 files | 287 clones, 2,805 duplicate lines (2.46%), 633 files |
| Python duplication excluding Signal | No comparable scan recorded | 250 clones, 2,935 duplicate lines (1.87%), 275 files |
| Tracked code lines excluding Signal | Pending same-scope readback | 280,090 |
| Suppression directives on that scope | Pending same-scope readback | 104 |
| Static asset bytes, raw and gzip | Pending same-tool rebuild readback | 1,609,887 and 447,782 |
| Connected asset bytes, raw and gzip | Pending same-tool rebuild readback | 1,594,128 and 476,602 |
| Whole build, raw and gzip | Pending same-tool rebuild readback | 3,561,819 and 1,271,125 across 36 files |
| ReportLibrary chunk, raw and gzip | Pending same-tool rebuild readback | 693,313 and 205,033 |
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

The stage 0 frontend measurement used Node 22 and a smaller source tree.
The current build uses Node 24.22.1 and npm 11.9.0. The older figures are
historical context. Changes attributed to this sweep will use the same tools
on both sides.

Not verified: accepted-sweep after measurements, combined gates and final
offline proof remain pending.
