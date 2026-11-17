# Final frontend coverage verification — bb94ddce

**PASS:** the complete original Vitest selection has **308 files / 5259 passed tests**, including **34 Signal files / 630 tests**. Native merge exits **0** and passes the unchanged **global lines >= 80%** gate at **97.69% (9912/10146)**. No missing, extra, or duplicate file/test identities; no failed, skipped, pending, or todo tests.

## Source and scope

- Current pin: `bb94ddceff3a1f02c7239ebca72de285df79c607`. Node 24.22.1; installed Vitest and @vitest/coverage-v8 4.1.12.
- Verified the full 643-file source/config/package/lock manifest against prior pin `5e1d98b37305a9da59fb6944740ff17b721051af`. The only differences are exactly the authorized `LegacyForecast.tsx` neutral-link class and `MetricTile.yearChange.test.tsx` US$ assertion prefix. [Exact patch](final-frontend-coverage-bb94ddce/source-diff.patch).
- Current source/config/package/lock manifest stayed unchanged before/after every shard and final merge. SHA-256: `608c57837cf86449aa96955881b5dd1f4cefb88016db92c76840cd517e9982d3`; [before](final-frontend-coverage-bb94ddce/source-before.json) and [after](final-frontend-coverage-bb94ddce/source-after.json).
- No source, tests, expected values, config, thresholds, includes, exclusions, package/lock, or Signal changes by this worker. No install, build, dist modification, commit, or push. Only original mocked JSDOM tests were executed.

## Why all eight shards were fresh

Retained native module graphs had all 308 test roots. Conservative transitive-import traversal found consumers of the edited LegacyForecast component in every shard: 1=5, 2=9, 3=2, 4=5, 5=10, 6=6, 7=1, 8=8 test files. Reusing any of the other six original blobs would retain tests consuming changed production source. Therefore all eight native shards were rerun sequentially, order **4, 6, 1, 2, 3, 5, 7, 8**, with **zero old blobs reused**. [Dependency paths](final-frontend-coverage-bb94ddce/dependency-analysis.json).

The old 5e1d98b3 execution remains separately retained and failed two tests. Its blobs/results are historical evidence, never relabeled as bb94ddce results. Both previously failing tests now pass inside their complete fresh native shards.

## Exact selection and original gate

Current native files-only collection exactly matches the prior 308-file selection. The prior dynamic collection contains 5,259 test identities; the exact two-line patch changes no test declaration, import, parameterization, suite, or test name. Every fresh shard and the native full merged report reconciles to all those identities with zero missing/extra/duplicates. Identity is absolute path + 1-based in-file ordinal + full test name; this preserves the 27 pre-existing repeated full-name strings independently.

[Current collection](final-frontend-coverage-bb94ddce/collection-files.json), [original dynamic collection with original provenance](final-frontend-coverage/collection.json), [fresh executed identities](final-frontend-coverage-bb94ddce/executed-identities.json), [reconciliation](final-frontend-coverage-bb94ddce/identity-reconciliation.json), [structured final summary](final-frontend-coverage-bb94ddce/summary.json).

Each shard is timeout 300, maxWorkers=1, coverage.processingConcurrency=1, executed one at a time. **Every shard exits 1 because its original partial global coverage check fails; none is claimed as a passing standalone gate.** All tests in each shard pass and its native blob retains the generated coverage. The full native merge uses all eight fresh blobs, exits 0, and applies the original configuration without threshold overrides.

| Shard | Files | Tests | Passed | Failed | Exit | Seconds | Original partial line threshold |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1/8 | 39 | 613 | 613 | 0 | 1 | 146.281 | 55.84% < 80%; failed |
| 2/8 | 39 | 527 | 527 | 0 | 1 | 103.378 | 57.57% < 80%; failed |
| 3/8 | 39 | 851 | 851 | 0 | 1 | 96.391 | 54.86% < 80%; failed |
| 4/8 | 39 | 560 | 560 | 0 | 1 | 122.185 | 65.22% < 80%; failed |
| 5/8 | 38 | 995 | 995 | 0 | 1 | 263.041 | 74.9% < 80%; failed |
| 6/8 | 38 | 516 | 516 | 0 | 1 | 120.946 | 59.73% < 80%; failed |
| 7/8 | 38 | 757 | 757 | 0 | 1 | 146.884 | 42.88% < 80%; failed |
| 8/8 | 38 | 440 | 440 | 0 | 1 | 137.280 | 54.38% < 80%; failed |

Full native coverage covers **325 files**: lines **97.69%**, statements **96.05%**, branches **89.78%**, functions **97.95%**. The original global line threshold is **80%**. [Native merge log](final-frontend-coverage-bb94ddce/merge.log), [native merged tests](final-frontend-coverage-bb94ddce/merged-tests.json), [native coverage JSON](final-frontend-coverage-bb94ddce/merged-coverage/coverage-final.json).

Installed native merge behavior was inspected before the original execution: BlobReporter saves generated coverage before per-shard threshold reporting; native mergeReports combines maps and calls generateReports(map,true), which invokes the original global threshold. [Retained installed-source evidence](final-frontend-coverage/native-merge-source.txt).

## Commands and logs

All paths below are under `/workspace/scratch/final-frontend-coverage-bb94ddce`. Original raw evidence remains under `/workspace/scratch/final-frontend-coverage`.

Current collection, from `/workspace/audit-final/web`:

`timeout 300 node node_modules/vitest/vitest.mjs list --filesOnly --maxWorkers=1 --json=/workspace/scratch/final-frontend-coverage-bb94ddce/collection-files.json` (exit 0).

Fresh native shards, from `/workspace/audit-final`, i in order 4,6,1,2,3,5,7,8:

`timeout 300 npm --prefix web run test -- --shard=<i>/8 --maxWorkers=1 --coverage.processingConcurrency=1 --reporter=default --reporter=blob --reporter=json --outputFile.blob=/workspace/scratch/final-frontend-coverage-bb94ddce/blobs/shard-<i>.json --outputFile.json=/workspace/scratch/final-frontend-coverage-bb94ddce/shard-<i>.json --coverage.reportsDirectory=/workspace/scratch/final-frontend-coverage-bb94ddce/coverage-<i>`

[Exact expanded commands, pin, exits, and elapsed times](final-frontend-coverage-bb94ddce/commands.json). Per-shard logs/results: `shard-<i>.log`, `shard-<i>.json`; blobs: `blobs/shard-<i>.json`.

Full native merge:

`timeout 300 npm --prefix web run test -- --merge-reports=/workspace/scratch/final-frontend-coverage-bb94ddce/blobs --maxWorkers=1 --coverage.processingConcurrency=1 --reporter=default --reporter=json --outputFile.json=/workspace/scratch/final-frontend-coverage-bb94ddce/merged-tests.json --coverage.reportsDirectory=/workspace/scratch/final-frontend-coverage-bb94ddce/merged-coverage` (exit 0).

The parent's earlier original monolithic gates/test attempts timed out at 300 seconds and are not claimed as complete passes. This resource-bounded native full selection/merge verifies the original test and global coverage portion, not the unrelated frontend gate stages owned by other workers.

Not verified: Browser/connected flows, build/file gates, Python, provider/paid/live/seat/real Submit/Teams behavior, stage 6 changes, or any application source after the recorded bb94ddce pin.
