# T07 review, round 3 (J2-002, J1-015 as-of, C2-002 with J2-001, C2-003)

Reviewer: fresh agent, did not write the change. Model: Claude Opus 5.5 (`claude-opus-5-5`), effort medium
(owner instruction for T07 to T10 reviewers). Worktree `.claude/worktrees/agent-a8a172c2dea681d93`, branch
`worktree-agent-a8a172c2dea681d93`, reviewed `git diff 6f93a1ae dc726f3` (rounds f400e0e, 4fdf62d, dc726f3),
rounds 2 and 3 most closely.

Verdict: **PASS**. Two Low findings, neither blocking.

## Review findings

| # | Severity | Where | Reason |
| :-- | :-- | :-- | :-- |
| 1 | Low | `web/src/pages/connected/ConnectedApp.test.tsx:4121-4130`, `:4200`, `:4211` | The prior-run fixtures now carry `as_of: ""` (what the service sends), so the two new from-run tests would also pass if `startingContext` carried the earlier run's date; the page's own blanking on those paths is shown only by the new-form test (same line, `StartRun.tsx:2546`), the service's by `test_run_start_prior.py`, and the real-app walk. Not a defect. |
| 2 | Low | `web/src/pages/connected/StartRun.tsx:2102-2110` (`holdsWork`) | A case date typed on its own does not count as work, so Reload with only a date typed raises no confirmation. A date alone is little to lose; noted, not a defect. |

## J2-002: closed

- Issuer name and Issuer ID: the service sends them empty (`_form_template`, `react_frontend/__init__.py:339-350`;
  the example file is unchanged) and the form shows `e.g. ...` placeholders. Case date: `startingContext` sets
  `as_of: ""` on every path (`StartRun.tsx:2546`), the input stays `required` (`:758-766`).
- All three entry paths: new form (walk-case-date section 1; J2-002 probe), Start from this run and Carry over from
  latest run (walk-case-date section 4, on a real finished synthetic run), plus "This is a different issuer"
  (`resetIssuer`, `:1879-1882`, same `startingContext`). Every check held.
- J2-002 probe (`timeout 900 flock /tmp/repair1-port-8762.lock timeout 600 node .../j2-002-prefilled-example-issuer.cjs`),
  exit 0: Issuer name `{"value":"","placeholder":"e.g. Northbridge Group plc","required":true}`, Issuer ID
  `{"value":"","placeholder":"e.g. northbridge-group-plc","required":true}`, As-of date `{"value":"",...,"required":true}`,
  `NOT REPRODUCED`, 0 blocked requests, 0 page errors. (The probe prints the service context's `as_of=2026-10-31`;
  the page overrides it, as shown.)
- Required is enforced: Continue with no date stays on Documents with the date focused and no request made; a date
  emptied after the step and passed by browser Forward is refused at Review run with "Issuer and case date ·
  As-of date: required." (walk-case-date sections 2 and 3).

## J1-015: as-of part closed in the real app; two parts remain

- Closed: Start from this run no longer opens on today's date; the "Set to today" line is gone (L15a). On the
  round-2 build the same walk fails exactly here (`FAIL Start from this run: the as-of date opens empty [2026-11-17]`,
  same for Carry over; exit 1), so the closure is real and the walk discriminates.
- Remaining, untouched by T07: (a) Your name opens empty on Start from this run although the README says the
  analyst's own name is kept; (b) the documents list reads "No documents yet" until Inspect documents is pressed.
- Partly met by C2-003's change: the part "the portfolio workbook choice was not carried ... not said at the step"
  is now said on the step when the earlier run recorded the workbook (`carriedIntro`, `:2567-2584`: "It did not record
  which files you chose for ... the portfolio workbook: choose them again on More context").

## Does Carry over or Start from this run wipe what the analyst typed?

- Start from this run opens a new page from a link; nothing typed on that page is lost. (J1-015's lost "Ana L" was
  typed on the earlier page; part (a) above.)
- Carry over from latest run (`copyLatestWork`, `:1592-1621`) replaces the context with the earlier run's, so a date
  typed before pressing it becomes empty. This is not new: at BASE the same call set today's date over the typed one
  (`as_of: today()`). Now the loss is visible, beside the button on the same Documents step, and cannot be carried
  forward unnoticed: the field is empty and required, Continue stops and focuses it. Before, the substitution of today
  was silent and would have been submitted. The analyst's name is kept; the analyst note, file roles and module
  choices were already reset by Carry over at BASE and still are.
- R5: not engaged. Nothing the reader sees is removed beyond the "Set to today" line the lead ordered dropped (L15a),
  and the analyst keeps control of the date. L15a explicitly says Carry over opens the date empty. Acceptable, not a
  defect. Keeping a date typed before Carry over would be a nicety for the lead, not a requirement of any finding.

## C2-002 / J2-001 and C2-003 still hold

- walk-leave-and-return (20 checks), walk-random-steps (265 actions, 0 problems), walk-carried-work (4 checks): exit 0,
  every check held. walk-carried-work against a build of round 1 (f400e0e) exits 1 on exactly the two carried-work
  checks, so carried documents now count (review-1 finding 2 fixed) and the walk discriminates.
- C2-003: `carriedLegal` applied at mount and on Carry over (`:367`, `:1615`); the carry-over tests and walk pass.
- L15 (walks as evidence in place of `j2-001-leave-mid-form.cjs` and `p10-navigation.cjs`) is recorded in
  `T07/probes-that-cannot-pass.txt`; those two probes were not re-run this round.

## Submit payload and digest

walk-payload, exit 0: straight through and with a Back and a second review, `/summary` body
`c4dd8c49...02c7`, `/submit` body `d0ab781f...bfbfe`, digest `510d4ad0...b865`, identical in both and equal to the
round-2 figures in the report; the typed date is sent as `as_of` and as `cutoff`. The vitest "sends the same request
bodies and digest once the date is entered" passes.

## Tests changed

- Round 3 removed lines (whole diff, `ConnectedApp.test.tsx`): the "today's date + Set to today" assertions in
  "carries a prior run's documents and answers, with a buffer for new dates" (replaced by `toHaveValue("")`, the test
  still enters 2026-09-29 and goes on), the test "stops saying the date was set to today..." (its line no longer
  exists, L15a), the two "as before" tests (replaced by the empty-and-required tests), the `hint` constant, and four
  fixture dates `2025-03-31` to `""` (inputs, matching `run_start/prior.py:22,62`, which blanks them; not expected values).
- `typeDate()` is added in six tests (`:1062`, `:1342`, `:1549`, `:2577`, `:2853`, `:4559`) and in `contextStepFrom`
  (`:4500`, used by the recorded-choice cases), which makes the ten the report names. Each only enters the date an
  analyst must now enter; no assertion or expected value was edited.
- Python: `test_same_origin_service_and_submit_gate` and `test_synthetic_mode_uses_the_explicit_launcher` now expect
  the issuer-less template (J2-002); `test_start_form_template_names_no_issuer` added.

## Scope

Files changed: `react_frontend/__init__.py`, `web/src/pages/connected/StartRun.tsx` (both T07's), their tests
`tests/test_react_frontend.py`, `web/src/pages/connected/ConnectedApp.test.tsx`, and the report and walks under
`docs/audit/2026-11-16-final/output/5-repair/`. Nothing else. Not imported by Signal.

## Re-run (this review)

| Command | Result |
| :-- | :-- |
| `cd web && timeout 300 npx vitest run src/pages/connected` | 46 files, 977 tests passed |
| `npm --prefix web run lint` / `format:check` / `typecheck` / `unused` | 0 / 0 / 0 / 0 |
| `timeout 300 uv run pytest -q tests/test_react_frontend.py tests/test_run_start_prior.py` | 93 passed |
| `timeout 600 uv run python tools/quality_gate.py --base 6f93a1ae` | 0 findings in 2 changed files, 105 lines in scope |
| `timeout 600 npm --prefix web run build` | 0 |
| walks (`C2_PORT=8747`): case-date, payload, carried-work, leave-and-return, random-steps | exit 0 each, every check held |
| J2-002 probe under the 8762 lock | exit 0, NOT REPRODUCED |
| walk-case-date on a scratch build of 4fdf62d (round 2) | exit 1, 2 checks failed (from-run and carry-over dates) |
| walk-carried-work on a scratch build of f400e0e (round 1) | exit 1, 2 checks failed (carried documents not counted) |

Scratch builds were made from `git archive` into the session scratchpad; no repository or worktree was changed.

Not verified: Firefox and Safari; closing a real tab; the real Back button and Chrome's history intervention; a Back
during a request in flight; the live path, the static app's and the legacy `/library` start forms; `proof:connected`
(needs a branded browser); the visual look of the empty date and placeholders (no screenshot taken);
`j2-001-leave-mid-form.cjs`, `p10-navigation.cjs`, `p13-from-run.cjs` and `p01-submit-flow.cjs` not re-run this round.
