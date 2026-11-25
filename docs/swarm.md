# EDGAR swarm runbook

Runs the owner's HY list through CP-OS host mode up to CP-2 (CP-0, CP-1, CP-1A, CP-2). The host
Claude Code session writes each module's answer; no provider is called and nothing is charged.
Run it from a local or cloud Claude Code session with the repository checked out and `uv` installed.

## Inputs

| Input | From | Notes |
| --- | --- | --- |
| Packs `packs/<cik>-<slug>/` | `secdata.edgar packs` (SECData) | owner runs it |
| Contexts `contexts/<cik>-<slug>.json` | `secdata.contexts` (SECData) | one `context/1` per usable issuer |
| `hy-list.md` | SECData (242 issuers; ratings provisional) | the `--approved` table, columns Issuer and CIK |
| `SEC_USER_AGENT` | environment or session secret only | needed by SECData, never written to a file or the repo |

No filing, credential or key is committed. The packs, contexts and the root stay outside the repo.

## Steps

1. Prepare offline while the workflow is stopped. A rerun keeps claim and completion details for
   each unchanged issuer ID:
   `uv run python tools/swarm/prepare.py --approved hy-list.md --packs packs/ --contexts contexts/ --root ROOT`
   It registers each issuer and writes `ROOT/swarm/plan.json`; read its `skipped` list.
2. Pilot batch: launch the script with
   `Workflow({scriptPath: 'tools/swarm/swarm.workflow.js', args: {root: ROOT, repo: REPO, concurrency: 5, limit: 5}})`.
   The script has no shell, so each ledger, verify and `update_library` command runs inside a
   small low-effort runner agent; the analysts are Sonnet agents at high effort. Read the five run folders and the
   ledger (`uv run python tools/swarm/ledger.py --root ROOT status`) before going on.
3. Full run: the same workflow with `args {root, repo, concurrency: 10}`. It claims batches of
   up to `concurrency` issuers, runs one Sonnet analyst (high effort) per issuer, records the
   outcome in the ledger, rebuilds the library once per batch, and stops when nothing is pending.
   A cloud container is reclaimed when the session ends, and the root goes with it. To keep the
   outputs, also pass `results: WORKTREE` (a git worktree on a results branch) and `trailer`
   (the closing lines of each commit message). After each batch a runner copies the run folders
   without `inputs/` and `source-text/` (the filing copies), the library and `plan.json` there,
   commits and pushes. A failed save is logged; the next batch saves everything again.
   If `library/data.js` exceeds GitHub's 100 MiB limit, the checkpoint keeps the runs, ledger and
   downloads. Rebuild the index with `uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine`.
   `effort` sets the analysts' effort (default `high`, the approved level; `xhigh` only on the
   owner's instruction for that run).
4. Second pass: `args {root, repo, secondPass: true}` claims the `failed` issuers once more. It
   is explicit; the first pass never retries them. The launcher resumes the run folder.
5. Resume after a stop: start the same workflow again. `running` claims older than an hour (set
   with `args.stale_seconds` or `ledger.py next --stale-seconds`) go back to `pending`; `published` stays published.
   Remove a `plan.json.lock` file only if no ledger command is running. In a fresh session with a
   saved results worktree, first restore the same verified inputs under `ROOT/inputs`, copy
   `WORKTREE/runs/` to `ROOT/_engine/runs/` and `WORKTREE/plan.json` to `ROOT/swarm/plan.json`,
   then run prepare with the restored packs and contexts so the ledger uses the new root. Before
   starting, confirm `ledger.py --root ROOT status` matches the checkpoint counts. Use one
   workflow per results branch when saving batches.

One issuer by hand: `uv run python tools/swarm/run_issuer.py ISSUER_ID --root ROOT` prints the
launcher command (`--config host --modules through-cp2 --prior none --no-library --out RUN_FOLDER`);
exit 3 means write the answer at the printed `Answer:` path and rerun it; `... verify` reruns it and
passes only on exit 0 with no new file.

## Layer 1 and CP-DR extension

Takes every issuer through CP-0, CP-1, CP-1A, CP-1B, CP-DR, CP-1C, CP-1D and CP-2 (the `layer1-dr`
module set). Each run answers all eight modules itself: the library refuses a run that reuses
modules of an earlier one, so nothing is retained from the `through-cp2` runs.

It runs on a root of its own, so the library lists one run per issuer there (two runs of one issuer
share a `run_id`, and the index would show the narrower one). Never copy the `through-cp2` run
folders or `plan.json` into it:

1. Restore only the verified inputs under a new root (as in "Sub-session shards", step 1).
2. Prepare with the set: `uv run python tools/swarm/prepare.py --approved ROOT/inputs/hy-list.md --packs ROOT/inputs/packs/ --contexts ROOT/inputs/contexts/ --root ROOT --set layer1-dr`.
   Run folders are `swarm-<id>-l1` and each plan entry carries `"modules": "layer1-dr"`; a plan that
   already holds the other set is refused, nothing written.
3. Run the workflow as before (`swarm.workflow.js` or `analyse.workflow.js`) and build the library there.

`run_issuer.py` reads `modules` from the entry (an entry without it keeps the `through-cp2`
command). Host mode makes no web lookup (`--config host` refuses `--web-lookup`), so CP-DR and CP-1C
state peer and web gaps instead of fetching them; no peer pack is supplied. The analyst reports the
attempts of each module it was asked.

## Engine of the published runs

The 187 published `through-cp2` runs were made before the merge of the PR #81 engine. Their
relaunch check (`run_issuer.py ID verify`) passes only with the engine at `86ac1a2a`: the merged
engine's CP-2 instructions and layout scope differ, so it refuses (writing nothing). The 55
unfinished issuers and all extension runs use the merged engine. To fold pre-merge folders in or
re-verify them, use a `git worktree` at `86ac1a2a`.

## Ledger statuses

| Status | Meaning |
| --- | --- |
| `pending` | not started |
| `running` | claimed with `claimed_at`; reclaimed when older than the stale limit |
| `published` | launcher exit 0, relaunch check wrote no new file, attempts per module recorded |
| `failed` | stopped, over the retry cap, or the check failed; `reason` kept; second pass only |
| `skipped` | set aside by the controller with a reason (`ledger.py skip`) |

Only the controller (the workflow script) writes the ledger; analysts never do.
`ledger.py next` returns each issuer's claim generation (`claims`). The controller passes that
value with `--claim` to `done`, `fail` or `skip`; a worker holding an older, reclaimed claim cannot
finish the newer claim.

## Effort and retry decision

Analysts run Sonnet at high, owner-approved 2026-11-17 after the blind review (`docs/swarm/pilot-2026-11-16-effort.md`).
A module may be resubmitted at most 2 times (3 launcher attempts). A module over that cannot be
recorded `published`; the issuer is `failed`.

## Not verified

- Answers are format-checked by the launcher only; no independent review of content is run.
- The pilot compared 4 issuers; high was preferred on all 4 by a blind sampled review. Its token cost over medium is not measured.
- Ratings in `hy-list.md` are provisional.
- The Nov 18 cloud run exercised the workflow and pushed shard results. The Nov 24 checkpoint
  changes were checked offline with Node and a temporary Git remote.

## Sub-session shards (analysis first, verification after)

Used for the Nov 24 resume (`tools/swarm/shards-2026-11-24.json`, 190 issuers, 15 shards,
effort `xhigh`). The controlling session claims every remaining issuer in its ledger first
(`ledger.py next --n N --stale-seconds 0`) and keeps the claims. Each shard session then runs
analysis only and never writes a ledger:

1. Restore inputs under `ROOT=/home/user/swarm-root` (the same path in every session, so run
   manifests agree): download the `swarm-inputs-20261118` release assets with
   `gh api repos/EricMG13/credit-os-edgar-swarm/releases/tags/swarm-inputs-20261118` and
   `gh api -H 'Accept: application/octet-stream' .../releases/assets/ID`, check `SHA256SUMS`,
   extract into `ROOT`, and check every hash in `ROOT/inputs/sha256.json` (paths are relative to `ROOT`).
2. Use uv 0.12.5 (`pip install uv==0.12.5`; put it first on `PATH`), `uv sync`, then
   `uv run python tools/swarm/prepare.py --approved ROOT/inputs/hy-list.md --packs ROOT/inputs/packs/ --contexts ROOT/inputs/contexts/ --root ROOT`.
3. Run `Workflow({scriptPath: 'tools/swarm/analyse.workflow.js', args: {root: ROOT, repo: REPO, issuers: [...shard ids], effort: 'xhigh'}})`.
4. Only after the whole shard's analysis is finished: run
   `uv run python tools/swarm/run_issuer.py ID verify --root ROOT` once for every shard issuer
   whose analyst reported exit 0, and add `verify` (`ok`, or `failed: <last line>`) to its report.
   Then build the shard library with
   `uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine`.
5. Save: on branch `claude/swarm-results-2026-11-24-sNN`, commit `runs/swarm-<id>/` for the shard
   (from `ROOT/_engine/runs/`, without `inputs/` and `source-text/`), `library/` (from
   `ROOT/_engine/library/`) and `reports.json` (the reports with `verify`), and push.

The controlling session then fetches every shard branch, copies the run folders into its
`ROOT/_engine/runs/`, runs `run_issuer.py ID verify` twice for each (the first restores the
filing copies; the shard's own check does not replace this one), records `ledger.py done` or `fail` with the kept claim, rebuilds the library and
saves the batch.
