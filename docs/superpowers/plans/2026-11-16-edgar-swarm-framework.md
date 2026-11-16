# EDGAR swarm framework: approved issuers through CP-OS to CP-2, host Claude Code

Goal: run the owner's HY list (SECData `hy-list.md`, 242 issuers, chosen 2026-11-16; ratings unverified, provisional until `ratings-prompt.md` is run; `approved-list.md` has 248)  through the
credit-os2 launcher up to CP-2, with the host Claude Code session writing each module's answer
(no provider call, no spend), and pre-populate the app with every issuer.

## Prior art (searched 2026-11-16)

| Where | Found | Decision |
| --- | --- | --- |
| `EricMG13/final-workflow` branch `claude/swarm-run-20261105` (local `~/Documents/Final-workflow-PY`, remote `fw`) | `cpos_launch --config host` (`HOST = "host"`, `MODULE_SETS = {"minimum": ("CP-1","CP-1A","CP-2","CP-5")}`), +182 lines in `owners/cpos_launch.py`, +180 lines of tests, `docs/templates/host-analyst-checklist.md`; ran 118 issuers, 15 workflows x 2 Sonnet analysts | Adapt: port host mode into this repo's launcher, new set `through-cp2` |
| `EricMG13/SECData` | `secdata.edgar packs` (pack folders `<cik>-<slug>`), `secdata.contexts` (one `context/1` per usable issuer from the pack and EDGAR) | Reuse unchanged; run by the owner (needs `SEC_USER_AGENT`) |
| this repo | `inbox/filing.py` issuer registry (`issuers.json`: issuer ID to folder), `inbox/runs.py` run records, `update_library.py` | Reuse for pre-population |

## Pipeline

```
SECData corpus-merged.json + hy-list.md
  -> secdata packs / contexts (owner runs)        packs/<cik>-<slug>/, contexts/<slug>.json
  -> tools/swarm/prepare.py   (offline)           registers issuers, writes swarm/plan.json
  -> tools/swarm/run_issuer.py (one issuer)       cpos_launch --config host --modules through-cp2
  -> Workflow script (batches of Sonnet analysts) fills runs, updates ledger
  -> update_library                               app shows every issuer, runs through CP-2
```

## Tasks

| # | Task | Agent | Files | Needs |
| --- | --- | --- | --- | --- |
| T1 | Port host mode into `cpos_launch` and add module set `through-cp2` | mx-feature | `src/deploy_workflow/owners/cpos_launch*.py`, `tests/test_cpos_launch_host.py`, `docs/templates/host-analyst-checklist.md` | none |
| T2 | `tools/swarm/prepare.py`: pre-populate issuers and write the plan ledger | mx-feature | `tools/swarm/prepare.py`, `tests/test_swarm_prepare.py` | none (fixtures) |
| T3 | `tools/swarm/ledger.py` + Workflow script: batches, resume, retry cap, no review loop | mx-feature | `tools/swarm/`, `docs/swarm.md` | T1, T2 |
| T4 | Offline end-to-end on 2 fixture issuers with a canned host answer; gates | mx-precise review | tests | T1-T3 |

T1 and T2 touch disjoint files and run in parallel. No commit, no merge: owner decides.

## Rules carried over

- Excel is input only. No credentials in files; `SEC_USER_AGENT` stays in the environment.
- Host mode makes no provider call; the pathway cap does not apply, and the run records say so.
- An accepted answer cannot be replaced, so analysts follow the checklist before submitting.
- Prior record: CP-OS rejected only format; 64 of 118 runs passed every module first time.
  Retry cap here: 2 resubmissions per module, then the issuer is marked `failed` in the ledger.
- Owner's 2026-11-06 ruling "remove the review process, too slow" applied to that run only; it is
  not inherited here. Review level for the swarm output is the owner's call.
- Not verified: no issuer pack exists locally yet; T1-T3 are built against fixtures.
