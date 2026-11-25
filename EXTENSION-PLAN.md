# Plan: extend the EDGAR swarm to layer 1 and CP-DR

Written 2026-11-25 for a new controlling session, possibly on another account. Nothing here has
run yet. Host mode throughout: no provider, Copilot or paid call; no keys; no merges; no push to
`main`; never commit filings (`inputs/`, `source-text/`).

## Where things stand

| Item | State |
| --- | --- |
| Ledger (`plan.json` here) | 242 issuers: 187 published, 55 `running` |
| Published runs | CP-0, CP-1, CP-1A, CP-2 only (`through-cp2`); relaunch check passed twice each |
| 55 unfinished issuers | 12 partial run folders on the shard branches, 43 never started |
| Shard branches | `claude/swarm-results-2026-11-24-s01` … `-s15`, all paused by the controller; finished runs are already copied here |
| Engine code | `claude/nice-gates-xwsl4g` (`b1ab22ea`, draft PR #3) |
| Inputs | prerelease `swarm-inputs-20261118` (verify its checksum and input hashes) |

The 55 `running` claims were held by the Mac controller. They go back to `pending` on their own
after the stale limit (`ledger.py next --stale-seconds`, default one hour), so a new controller
needs no hand edit.

## Goal

Every issuer gets CP-0, CP-1, CP-1A, CP-1B, CP-1C, CP-1D, CP-DR and CP-2, with CP-2 written after
the new modules so it can use them (CP-2's optional inputs are CP-1B, CP-1C, CP-1D and CP-DR).

## What the code allows today (read 2026-11-25)

- A run folder holds one request. A different module set in the same `--out` is refused
  ("holds a different request; choose a new --out"), so the extension needs a new run folder
  per issuer.
- An accepted answer cannot be replaced, so CP-2 must be answered again in the new folder.
- `HandoffPlan.retained_handoffs` (`src/deploy_workflow/owners/cpos.py`) can pin earlier accepted
  handoffs so they are not asked again. It is refused when a retained module's upstream pins
  differ from the producers it would be sent (`cpos_retained_stale`) or when the source hashes
  differ (`cpos_retained_sources`). CP-0, CP-1 and CP-1A keep the same producers, so they can be
  retained; CP-2 cannot. The launcher (`cpos_launch.py`) does not expose this yet.
- Source hashes include an earlier run's handoff copies for CP-8, so retention needs
  `--prior none` (no CP-8). CP-8 can run in a later, separate pass if wanted.
- In host mode CP-DR reads only the run's own files; web search is off. CP-1C needs peers. With
  single-issuer packs and no web, expect CP-1C and CP-DR to state gaps for peer data.
- `tools/swarm/run_issuer.py` hard-codes `--modules through-cp2`.

## Steps

1. **Restore.** Follow `docs/swarm.md` "Resume after a stop" with this checkpoint and the
   `swarm-inputs-20261118` inputs. Rebuild `library/data.js`
   (`uv run python apps/issuer-library/update_library.py --workspace ROOT/_engine`). Confirm
   `ledger.py --root ROOT status` shows 187 published and 55 running.
2. **Finish the first pass** for the 55 unfinished issuers with the existing workflow (resumes the 12
   partials). Alternative: run them directly with the extended set from step 4 and skip
   `through-cp2`. That saves a CP-2 answer per issuer, but the partials' accepted modules are only
   reused if step 3 lands first.
3. **Code (one PR on the engine branch, SDD per the global rules).** Changes:
   - A module set `layer1-dr` in `MODULE_SETS`:
     `CP-0, CP-1, CP-1A, CP-1B, CP-1C, CP-1D, CP-DR, CP-2`.
   - A launcher option `--retain-from RUN_FOLDER` that pins that folder's accepted CP-0, CP-1 and
     CP-1A handoffs into `retained_handoffs`. It is refused when the sources or upstream pins differ.
   - `run_issuer.py`, `prepare.py` and `ledger.py` take a module set and a run-folder suffix
     (e.g. `swarm-<id>-l1`), so the extension gets its own ledger file and run folders and
     the published `through-cp2` runs stay untouched.
   - Tests: a retained run asks only CP-1B, CP-1C, CP-1D, CP-DR and CP-2. A changed source refuses.
     The relaunch check passes.
4. **Pilot 5 issuers** with the swarm workflow, the extended set and `--retain-from` the published
   run, at `high` effort (the approved level). Record per issuer: attempts per module, how
   CP-1C and CP-DR handle missing peer data, whether CP-2 cites the new modules, and usage per
   issuer. The owner reads the five before going on.
5. **Full extension** in shards as on Nov 24 (`docs/swarm.md` "Sub-session shards"). Size the
   shards to the measured usage per issuer, and save each shard's runs to its own results branch.
6. **Fold in** as before: copy each finished run, run the relaunch check twice (the first restores
   the filing copies) and record it in the extension ledger. Rebuild the library and push the
   checkpoint.

## Decisions for the owner

- Retain CP-0, CP-1 and CP-1A (recommended; needs step 3) or rerun all eight modules in the new
  folder (no code change, about twice the work).
- CP-8 on the extended runs: off with retention; a separate pass later if wanted.
- Analyst effort: `high` (approved 2026-11-17) unless the owner names `xhigh` for this run.
- Check the cloud session "Layer 1 modules in Lite and Full" before step 3, in case it already
  changes the module sets or pathway presets.

## Not verified

- No extended run has been attempted, so CP-1B's period needs, and CP-1C and CP-DR without
  peers or web, are untested on these packs.
- Usage per issuer for the extended set is unmeasured.
- The analysis content of the published runs has not been reviewed. The relaunch check only
  confirms each run completes cleanly.
