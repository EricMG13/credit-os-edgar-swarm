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

1. Prepare (offline; rerun any time, it keeps statuses):
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
4. Second pass: `args {root, repo, secondPass: true}` claims the `failed` issuers once more. It
   is explicit; the first pass never retries them. The launcher resumes the run folder.
5. Resume after a stop: start the same workflow again. `running` claims older than an hour (set
   with `args.stale_seconds` or `ledger.py next --stale-seconds`) go back to `pending`; `published` stays published.
   Remove a `plan.json.lock` file only if no ledger command is running.

One issuer by hand: `uv run python tools/swarm/run_issuer.py ISSUER_ID --root ROOT` prints the
launcher command (`--config host --modules through-cp2 --prior none --no-library --out RUN_FOLDER`);
exit 3 means write the answer at the printed `Answer:` path and rerun it; `... verify` reruns it and
passes only on exit 0 with no new file.

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
- `swarm.workflow.js` was syntax-checked with node, never run through the Workflow tool, so the agent schemas, the runner agents and `parallel` ordering are untested.
