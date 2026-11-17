# Stage 6 integrated frontend tests and coverage

**Pass.** All 5,259 tests passed across 308 files, including 630 Signal tests in 34 files. The native merge exited 0 and met the original global 80% lines threshold at **97.69%** (9912/10146 lines).

The application pin was `e40eabe1bcf13591bdae7899b5e0a65038a7f926`. All 693 tracked web inputs retained SHA-256 manifest digest `722e365a7cf43ae465be40629df1a99e113a45b397879e678774ec5bad095d6e` from collection through the final merge. Observed Git HEAD started at `e40eabe1bcf13591bdae7899b5e0a65038a7f926` and ended at `3a3e6e8519b096d200ba4455e19b6fd1be3266bd`. The source manifest covers the frontend test files, configuration, package manifest, lockfile and fixtures. The run used Node v24.22.1 and pinned Vitest and V8 coverage 4.1.12.

Native file collection matched the original 308 paths. Reported and executed identities both match the original full test selection, using the path relative to each worktree, in-file ordinal and full test name. This preserves duplicate names at distinct ordinals. No files or tests are missing, extra, skipped or run twice in the accepted shard selection. All eight blobs were generated on the integrated application source. No other revision's blob entered the merge.

| Native shard | Files | Passed | Exit | Seconds | Per-shard coverage |
| --- | ---: | ---: | ---: | ---: | --- |
| 1/8 | 39 | 613 | 1 | 232.432 | ERROR: Coverage for lines (55.84%) does not meet global threshold (80%) |
| 2/8 | 39 | 527 | 1 | 123.079 | ERROR: Coverage for lines (57.56%) does not meet global threshold (80%) |
| 3/8 | 39 | 851 | 1 | 101.195 | ERROR: Coverage for lines (54.86%) does not meet global threshold (80%) |
| 4/8 | 39 | 560 | 1 | 123.858 | ERROR: Coverage for lines (65.22%) does not meet global threshold (80%) |
| 5/8 | 38 | 995 | 1 | 241.572 | ERROR: Coverage for lines (74.9%) does not meet global threshold (80%) |
| 6/8 | 38 | 516 | 1 | 126.898 | ERROR: Coverage for lines (59.73%) does not meet global threshold (80%) |
| 7/8 | 38 | 757 | 1 | 83.447 | ERROR: Coverage for lines (42.88%) does not meet global threshold (80%) |
| 8/8 | 38 | 440 | 1 | 94.877 | ERROR: Coverage for lines (54.38%) does not meet global threshold (80%) |

A shard can exit 1 because its partial lines coverage is below the original 80% threshold. Every test in each accepted shard passed. Vitest's native blob includes generated coverage before that partial gate, and native merge applies the configured threshold to the combined map. The merged report covered 325 files and measured 96.05% statements, 89.78% branches and 97.95% functions.

Every subprocess used `timeout 300`. Shards retained the package's `npm --prefix web run test` command and added native `--shard` and blob/JSON reporters with one test worker and one coverage processing worker. Exact commands, elapsed times and exit codes are in `commands.json`. The unchanged original global test and coverage settings were applied by the final native `--merge-reports` invocation.

- shard-2 attempt 1, exit 1, 145.051 s. Log `shard-2.log`.

Shard 2 first saw the default document title just after the Evidence Sources heading appeared. The unchanged focused file passed all 17 tests on both the repair base and sweep pin. The same full shard then passed without a source, test, or setting change. The first raw failure, control runs, and rerun are retained separately. The parent reader title remains a passive effect and the sweep edit in that file affects only History rows.

The accepted shards totalled 1127.358 seconds of command time. The 1128.767 seconds of elapsed wall time includes the interrupted sequence and title diagnostics between accepted shards. The current slowest file was `web/src/pages/connected/ConnectedApp.test.tsx` at 124.136 s. The slowest individual test was “connected run start: the review sheet shows every input Submit sends V27 shows no raw data: no braces, keys, module codes, ids or the form's version” in `web/src/pages/connected/ConnectedApp.test.tsx` at 5.628 s. These are measurements of the test execution under the observed resource load. See `timings.json` and the compatible inputs under `timing-input/`.

All raw evidence is in `/workspace/scratch/stage6-integrated-frontend`. `summary.json` records the final counts and threshold, and `identity-reconciliation.json` shows the exact path and test comparison. The collector's initial preflight recognized the existing dependency symlink as an untracked web input and stopped before testing. After the exact symlink exception, the successful collection and run checked every other untracked web path and the complete tracked manifest.

Not verified in this frontend test gate: builds, connected and file browser proof, Python and unrelated external services.
