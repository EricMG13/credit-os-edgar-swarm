# T02 adversarial review (J1-001): CP-MODEL accepted in a submitted module list

Reviewer: second, adversarial agent; did not write the change. Worktree
`.claude/worktrees/agent-a8133f4ec56fbb293`, commit a3e2dcb0 on base d8d3d634. No code file edited;
scratch tests and scripts live in the session scratchpad, not the repository. Written 2026-11-17.

## Verdict: CHANGES NEEDED

The T02 diff as scoped (`runs.py`, `scheduler.py`, the scheduler tests) is sound. I could not put
anything other than a real method code or the exact string `CP-MODEL` into the launcher's argv by any
route (finding list below has no High and nothing wrong in the predicate). The change is held for one
Medium that this repair itself makes reachable: once `CP-MODEL` is in `record.modules`, the Teams
card's module total is one high (finding 1). It needs `src/deploy_workflow/inbox/teams.py`, which is
outside T02's file list and outside ruling L4, so the lead must either extend T02 to that file or open a
new task. If the lead rules it a separate task, the verdict for the diff as scoped is PASS.

## What I ran

| Check | Result |
| :--- | :--- |
| `timeout 290 uv run pytest -q tests/test_run_start_scheduler.py tests/test_inbox_runs.py` | 119 passed |
| `timeout 590 uv run python tools/quality_gate.py --base d8d3d634` | exit 0, "0 finding(s) in 3 changed file(s), 95 line(s) in scope" |
| Mutation of the new tests (a scratch plugin replaces `runs.known_module`; the repository is untouched) | Pre-T02 predicate (`METHODS` only): `test_a_list_holding_the_forecast_code_is_accepted_and_starts_a_run` and `test_the_launcher_command_carries_the_forecast_code_in_the_module_list` fail. Sloppier predicate (`n.upper().startswith("CP-MODEL")`): `forecast_misspelt`, `forecast_suffix` and `[cp-model]` fail. No check at all: ten fail. The tests are bound to the exact string. |
| Copy of probe `j1-001-leave-out-refused-at-submit.cjs` with the port changed to 8756 and a root under `/tmp/jr56` (the probe itself is port 8761, which I was told not to use; the copy differs only in port and root) | exit 0; output lines match the report (`Left out: Legal & covenants; modules Modules (13)`; run starts, `stopped: checker`; Advanced run starts, no alert) |
| Scratch end-to-end probe on 8756 (Advanced, "Rates, FX & hedging" unticked, agreement supplied), run to its end | sheet `Left out: Rates, FX & hedging` and `Modules (13)`; record `modules` = 14 codes including `CP-MODEL`; launcher log `Modules: CP-0, CP-1, CP-1A, CP-DR, CP-4, CP-2, CP-2A, CP-2D, CP-2G, CP-3C, CP-3, CP-5, CP-6` (13); 13 `module_accepted`; run page "13 of 13 modules", 13 rows, no forecast row; status finished |

Service stopped after each probe; nothing left on 8756; `/tmp/jr56` removed.

## Attack matrix

Each row: what the service does at Submit (a real summary first, then Submit with its digest; for
inputs the summary refuses I also forged an `issued` digest so the Submit check stands alone), what
`runs.command` produces for a record holding the list, and what the real launcher does with that argv
(run offline, no `--live`, through `python -m deploy_workflow.owners.cpos_launch`).

| Input in the module list | Submit | `runs.command` (hand-edited record) | Launcher |
| :--- | :--- | :--- | :--- |
| `--live`, `--cap`, `-h` (option-like) | Summary refuses (`Unknown r14 entry`); forged digest: `Refused: unknown module --live`; nothing sealed, no run | `ValueError: 'x' is not a module`; the scheduler marks the run failed, "could not be started" | never reached |
| `cp-model`, `Cp-Model`, `CP-MODEL ` (trailing space), `CP-MODEL2` | Refused `unknown module` | `ValueError` | never reached |
| Look-alikes: non-breaking hyphen U+2011, Cyrillic `С`, fullwidth `ＣＰ-ＭＯＤＥＬ` | Refused `unknown module` | `ValueError` | never reached |
| Non-strings: `1`, `None`, `["CP-MODEL"]`, `{"CP-MODEL":1}`, `True`; a bare string `"CP-MODEL"`; 41 names | Refused by `submissions.validated` (`each module name is text of at most 12 characters`; `modules must be a list of at most 40 names`) before any module check | `known_module` is False without a `TypeError` (the `isinstance` guard runs first) so `ValueError` | never reached |
| `""` | Refused `unknown module` | `ValueError` | never reached |
| `CP-MODEL` twice (`CP-0 CP-1 CP-MODEL CP-MODEL`) | Accepted, record keeps the list as sent | `--modules CP-0 CP-1 CP-MODEL CP-MODEL` | exit 0; plan `CP-0, CP-1`; forecast published once |
| Real module twice (`CP-0 CP-1 CP-1 CP-MODEL`) | Accepted | argv as given | exit 0; `ordered` is de-duplicated, `requested_modules` keeps the duplicate (pre-existing; the same for a list with no `CP-MODEL`) |
| `CP-MODEL` alone | Accepted (summary: modules `CP-0, CP-1`) | `--modules CP-MODEL` | exit 0; runs `CP-0` and `CP-1` (CP-MODEL requires CP-1) and publishes the forecast. With an earlier run present: `ordered = CP-0, CP-1, CP-8` but `Run.requested_modules = ("CP-8",)` (finding 4). The page cannot send this list (`limits.ts` never offers a forecast-only list; the Advanced checkbox is disabled on the last drawn module) |
| `CP-MODEL` on `lite_credit_assessment` (no forecast in its preset) | Accepted | argv as given | `publish_forecast = True` (finding 2) |
| `CP-MODEL` listed first or last, or the list reversed | Accepted | argv in the order given | order ignored: the launcher removes `CP-MODEL`, plans by the registry (`plan()`), pulls required producers (`CP-MODEL` pulls `CP-1`, `CP-0`). `CP-5 CP-2 CP-1 CP-MODEL CP-0` runs `CP-0, CP-1, CP-1A, CP-2, CP-5` |
| `CP-8` (with or without `CP-MODEL`) | Summary refuses (launcher: "CP-8 is planned automatically ... cannot be selected") so no digest exists; Submit stops at the digest check even though `known_module("CP-8")` is True | argv `--modules ... CP-8` | exit 2 (`--modules: CP-8 ... cannot be selected`); the scheduler then marks the run `failed: launcher exited 2` (pre-existing; finding 5) |
| Registry aliases (`CP-PARSE`, `CP-MEMO`, `CP-OS`) | `CP-PARSE`: summary issues a digest, Submit refuses `unknown module CP-PARSE`; `CP-MEMO`/`CP-OS`: summary refuses | `ValueError` | never reached (pre-existing, finding 6) |

So the only values that can now stand in the launcher's argv after `--modules` are: every key of
`METHODS` (including `CP-8`, as before this change) and the exact string `CP-MODEL`. Both checks use the
one predicate, `runs.known_module`; there is no path in `runs.py`, `scheduler.py` or `submissions.py`
that appends a module name to the argv without it (`runs.command` is called only by `_launch` and
`runs.start`).

## The other questions

- **Order and dependencies.** The argv order is `record.modules` order: the page's preset order
  (`api.ts` `PATHWAYS`, with `CP-MODEL` in its preset slot) minus what was left out, or whatever a
  crafted body says. The launcher does not use it. `_prepare` removes `CP-MODEL`, plans with
  `plan((*requested, "CP-MODEL"))` and takes the registry order and the required producers, so the
  position of `CP-MODEL` and the argv order change nothing (shown above: reverse and `CP-MODEL`-first
  lists run in the registry order). A leave-out of `CP-4` removes `CP-4` and the modules that require it
  (`CP-4C`); `CP-MODEL` requires only `CP-1`, and the only will-refuse rule in the code
  (`run_expectations.py:520`) is `CP-4`'s, so a leave-out can never remove the producer of a kept
  `CP-MODEL`. (A hand-built list that kept `CP-MODEL` and dropped `CP-1` would have `CP-1` pulled back in;
  the summary shows the same plan, so the sheet is still truthful.)
- **Does a leave-out run what the sheet promised?** Yes: sheet `Modules (13)` equals the launcher's
  `Modules:` line (13) equals the 13 accepted modules and the run page's "13 of 13 modules" in the real
  end-to-end run above. The summary and the launch call the same `prepare` with the same `--modules` and the
  pinned `--prior`.
- **Is the approval digest still bound to the list Submit launches?** Yes. `_digest` covers
  `list(answers["modules"])` in order with duplicates; `record.modules = tuple(answers["modules"])` is what
  `command` sends; `_sealed_digest` rebuilds it from the record. Scratch test: approved on
  `[CP-0, CP-1, CP-MODEL]`, then Submit with `[CP-0, CP-1]`, `[... CP-MODEL, CP-MODEL]`,
  `[CP-MODEL, CP-0, CP-1]`, `[]` and `[CP-MODEL]` is each refused ("changed after approval"), no run is
  recorded, and the approved list then goes through unchanged.
- **Do module counts read wrong?** Run activity and the run page do not: `activity._entry` drops the
  record's `modules` and rebuilds them from `module_states`/the run manifest (`react_frontend/run_activity.py`
  `_planned`), neither of which can hold `CP-MODEL`; the real run's page read "13 of 13 modules". The Teams
  card does (finding 1). `run_start/prior.py:93` feeds `carriedModules`, which handles `CP-MODEL`.
- **Submit's `unknown module` refusal and every existing test** are unchanged; the diff only adds lines.

## Findings

1. **Medium, `src/deploy_workflow/inbox/teams.py:457`, new observation caused by T02 (needs a lead
   decision; a repair needs `src/deploy_workflow/inbox/teams.py` and `tests/test_inbox_teams.py`).**
   `total = len(record.modules) or len(states)` now counts `CP-MODEL`, which `module_states` never lists.
   Measured with `teams.progress` on a finished leave-out run (credit_snapshot, `CP-4` left out, every
   launched module accepted): list with `CP-MODEL` (the page's own) gives `(13, 14)`; the same record without
   it gives `(13, 13)`. So the finished card reads "13/14 modules" for a run that did everything it was asked,
   the started card says "14 modules" while the review sheet and the run page say 13, and the stopped card's
   bar and the day digest are one short. Reachable on every explicit list on the six presets that hold the
   forecast (credit_snapshot, earnings_update, relative_value, covenant_refinancing, portfolio_decision,
   deep_credit_assessment); before T02 no such run could start. Suggested: count the codes that are not the
   forecast code (`runs.FORECAST_CODE`), with a test that a record carrying `CP-MODEL` and all launched
   modules accepted gives `(13, 13)`.
2. **Low, `src/deploy_workflow/inbox/runs.py:250` (and `scheduler.py:322`), new observation, not J1-001;
   repair would need `src/deploy_workflow/inbox/runs.py`, `scheduler.py` (a pathway argument) or none.**
   `known_module` accepts `CP-MODEL` for every pathway, so a crafted body can now start a
   `lite_credit_assessment` run with `publish_forecast = True`. Ruling 2026-11-13
   (`full-and-lite-credit-assessments.md`) says lite "publishes no forecast", and that adding `CP-MODEL`
   back adds about 5,700 characters to CP-1's prompt that "no live model has yet written". The cap
   (USD 15) still binds, the digest binds the list, and the page cannot send it (`changePathway` resets the
   list; the lists equal the presets). Submit already accepts any `METHODS` module on any pathway (shown:
   lite plus `CP-6` is accepted and queued), so this is the same existing class, not a new hole. Accept and
   note, or restrict `CP-MODEL` to pathways whose preset holds it.
3. **Low, `tests/test_run_start_scheduler.py:409`, within T02 (optional).** Nothing ties
   `runs.FORECAST_CODE` to the launcher's three `"CP-MODEL"` literals (`cpos_launch.py:1042, 1043, 1079`),
   to `NOT_ANALYTICAL` or to the page's presets; the J1-001 cause was exactly such a disagreement. A short
   test would pin it: every code of every `PATHWAY_MODULES` preset passes `runs.known_module`;
   `FORECAST_CODE in NOT_ANALYTICAL` and `FORECAST_CODE not in METHODS`.
4. **Low, `src/deploy_workflow/owners/cpos_launch.py:1043, 1076-1081`, new observation, launcher quirk now
   reachable through Submit (not T02's files).** `["CP-MODEL"]` with an earlier run present plans
   `ordered = (CP-0, CP-1, CP-8)` but records `requested_modules = ("CP-8",)` (CP-0 and CP-1 run only as
   producers). Same as the CLI always did; only a crafted body gets there. No repair proposed.
5. **Low, `src/deploy_workflow/inbox/runs.py:250`, pre-existing, not T02.** `CP-8` passes `known_module`
   (it is in `METHODS`) while the launcher refuses it in `--modules`: a hand-edited record with `CP-8` is
   built into a command, the launcher exits 2 and the run is marked failed after being counted as a start.
   Submit cannot carry it (no digest exists). T02's report states the same; I agree it is outside J1-001.
6. **Info, `src/deploy_workflow/inbox/scheduler.py:322`, pre-existing, not T02.** The summary and Submit
   still disagree for registry aliases (`CP-PARSE`, `CP-2C`, `CP-3A`, ...): the summary issues a digest
   (it canonicalises through `plan()`), Submit says `unknown module CP-PARSE`. Same shape as J1-001, but no
   page path sends an alias.

No finding touches a test's expected value; the diff adds 31 test lines and removes none.

Not verified: a posted Teams card (finding 1 is from `teams.progress` on a constructed record and event log,
not a real post; no webhook set); the regular, non-synthetic service and any real provider run (R4); the legacy
start page `tests/test_run_start_page.py` (its browser launch hangs in this sandbox); the canonical probe on its
own port 8761 (I ran a copy on 8756 as instructed); whether the forecast sections of the leave-out run's
report are populated (the run delivered; I did not open the Forecast page); the `web/` gates (no `web/` file
changed); `CP-8` planned-last behaviour with a leave-out list (only the offline `prepare` with a prior run).
