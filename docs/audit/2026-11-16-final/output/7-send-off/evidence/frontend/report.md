# Stage 7 final frontend tests and coverage

**Pass.** All 5,259 tests passed across 308 files, including 630 Signal tests in 34 files. The native merge exited 0 and met the original global 80% lines threshold at **97.69%** (9912/10146 lines).

The application pin was `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`. All 693 tracked web inputs retained SHA-256 manifest digest `722e365a7cf43ae465be40629df1a99e113a45b397879e678774ec5bad095d6e` from collection through the final merge. The web manifest also matched Stage 6, and the fresh locked npm install completed before collection. Observed Git HEAD started at `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f` and ended at `a987af9b9ca5072d28f2e1f9e1dc5269c6c1858f`. The source manifest covers the frontend test files, configuration, package manifest, lockfile and fixtures. The run used Node v24.22.1 and pinned Vitest and V8 coverage 4.1.12.

Native file collection matched the original 308 paths. Reported and executed identities both match the original full test selection, using the path relative to each worktree, in-file ordinal and full test name. This preserves duplicate names at distinct ordinals. No files or tests are missing, extra, skipped or run twice in the accepted shard selection. All 12 accepted blobs were generated on the final application source. No other revision's blob entered the merge.

| Native shard or partition batch | Files | Passed | Exit | Seconds | Per-shard coverage |
| --- | ---: | ---: | ---: | ---: | --- |
| 1/8 | 39 | 613 | 1 | 181.125 | ERROR: Coverage for lines (55.84%) does not meet global threshold (80%) |
| 2/8 | 39 | 527 | 1 | 121.721 | ERROR: Coverage for lines (57.56%) does not meet global threshold (80%) |
| 3/8 | 39 | 851 | 1 | 178.617 | ERROR: Coverage for lines (54.86%) does not meet global threshold (80%) |
| 4/8 | 39 | 560 | 1 | 132.856 | ERROR: Coverage for lines (65.22%) does not meet global threshold (80%) |
| 5/8 | 38 | 995 | 1 | 262.991 | ERROR: Coverage for lines (74.9%) does not meet global threshold (80%) |
| 6/8 | 38 | 516 | 1 | 136.447 | ERROR: Coverage for lines (59.73%) does not meet global threshold (80%) |
| 7/8 | 38 | 757 | 1 | 93.273 | ERROR: Coverage for lines (42.88%) does not meet global threshold (80%) |
| 8/8 case-choice | 1 | 3 | 1 | 9.091 | ERROR: Coverage for lines (13.63%) does not meet global threshold (80%) |
| 8/8 run-reasons | 1 | 3 | 1 | 5.282 | ERROR: Coverage for lines (3.61%) does not meet global threshold (80%) |
| 8/8 rest-1 | 12 | 201 | 1 | 36.458 | ERROR: Coverage for lines (40.01%) does not meet global threshold (80%) |
| 8/8 rest-2 | 12 | 67 | 1 | 32.058 | ERROR: Coverage for lines (26.55%) does not meet global threshold (80%) |
| 8/8 rest-3 | 12 | 166 | 1 | 48.564 | ERROR: Coverage for lines (31.29%) does not meet global threshold (80%) |

A shard can exit 1 because its partial lines coverage is below the original 80% threshold. Every test in each accepted shard passed. Vitest's native blob includes generated coverage before that partial gate, and native merge applies the configured threshold to the combined map. The merged report covered 325 files and measured 96.05% statements, 89.78% branches and 97.95% functions.

Every subprocess used `timeout 300`. Execution batches retained the package's `npm --prefix web run test` command and added native `--shard` or explicit shard 8 file selection plus blob/JSON reporters with one test worker and one coverage processing worker. Exact commands, elapsed times and exit codes are in `commands.json`. The unchanged original global test and coverage settings were applied by the final native `--merge-reports` invocation.

The original shard 8 ran twice. The first attempt timed out the S5-010 case choice test at the unchanged 5,000 ms limit under concurrent host load. The second passed S5-010 but saw the Ended without a report region before the React Aria grid populated. Both attempts ran the same 38 files as the Stage 6 native shard, verified from all three native execution results. The accepted replacement partition ran case-choice.test.tsx and runReasons.test.tsx separately, plus three batches of 12 remaining files. Its explicit manifest and native JSON item evidence reconcile to the exact 38 original file identities. Neither rejected attempt supplied a blob to the merge.

- shard-8 attempt 1, exit 1, 152.271 s. Log `shard-8.log`.
- shard-8 attempt 2, exit 1, 97.404 s. Log `shard-8-attempt-2.log`.

The accepted shards totalled 1238.483 seconds of command time. The 1823.891 seconds of elapsed wall time includes any retries, diagnostics and gaps during execution. The current slowest file was `web/src/pages/connected/ConnectedApp.test.tsx` at 137.136 s. The slowest individual test was “connected run start: the review sheet shows every input Submit sends V27 shows no raw data: no braces, keys, module codes, ids or the form's version” in `web/src/pages/connected/ConnectedApp.test.tsx` at 5.950 s. These are measurements of the test execution under the observed resource load. See `timings.json` and the compatible inputs under `timing-input/`.

All raw evidence is in `/workspace/scratch/stage7-frontend`. `summary.json` records the final counts and threshold, and `identity-reconciliation.json` shows the exact path and test comparison.

Not verified in this frontend test gate: builds, connected and file browser proof, Python and unrelated external services.
