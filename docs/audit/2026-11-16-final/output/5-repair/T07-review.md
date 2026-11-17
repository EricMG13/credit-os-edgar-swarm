# T07 review: Start a run (J2-002, C2-002 with J2-001, C2-003)

Reviewer: fresh agent, did not write the change. Worktree `.claude/worktrees/agent-a8a172c2dea681d93`,
branch `worktree-agent-a8a172c2dea681d93`, commit f400e0ea, base 6f93a1ae. Round 1 of the task.

Verdict: **CHANGES NEEDED**. One Medium finding: the finding J2-002 names "today's date as the case
date" and the change leaves it as it was (a gap against the finding, a decision for the lead, not a code
defect). Everything else passes: the change fixes the cause of the other three findings, no caller broke,
no test was weakened, nothing outside T07's files was touched. If the lead decides the date default stays
and records that, narrowing J2-002's closure to the two issuer fields, the verdict is PASS.

## Review findings

| # | Severity | Where | Reason |
| :-- | :-- | :-- | :-- |
| 1 | Medium | `web/src/pages/connected/StartRun.tsx:2557` (`as_of: today()` in `startingContext`); report "design choice 2" | J2-002's title, actual and suggested change name the case date and "empty required fields"; the as-of date is still prefilled with today's date and nothing on a first load says it is a default. |
| 2 | Low | `web/src/pages/connected/StartRun.tsx:2107-2113` (`holdsWork`) | Documents carried by Start from this run or Carry over, and the purpose, legal and module choices made after them, do not count as work: with no analyst name typed, Reload raises no confirmation (observed). |
| 3 | Low | `web/src/pages/connected/ConnectedApp.test.tsx:4264` | The test "sends the same answers and digest after Back and a second review" takes its digest from the mocked summary (`plan.digest`) and compares fixed strings, so it does not show that Back changes nothing; the name overstates it. No defect: against the real service the bodies and digest are identical (below). |
| 4 | Low | `docs/audit/2026-11-16-final/output/3-journeys/J2/probes/j2-001-leave-mid-form.cjs:9`, `.../C2/probes/p10-navigation.cjs:20` | Both probes dismiss the leave confirmation themselves, so on the repaired page j2-001 exits 1 (a `locator.click` timeout) and p10 stops with a `page.reload` timeout. Stage 5 step 3 asks that the task's probes exit 0; these cannot, by their own handler. Not a defect of the change; the lead should accept the report's scratch walks as the evidence and record it. |
| 5 | Info | `web/src/pages/connected/StartRun.tsx:556-581` (`useStepHistory`) | After a confirmed Reload the first Back looks like nothing happened (the two stale entries of the earlier load are passed over in two hops); the second Back leaves. Consistent with the stated design. |

### 1. The case date (Medium): is keeping today's date consistent with the finding and the rulings?

It is a gap against the finding, and no ruling supports it.

- J2-002's title ends "and today's date as the case date". Its actual line says "Issuer name ..., Issuer ID ...
  and As-of date today's date (2026-11-17); all three are required, none is a placeholder", and "the form
  shows no mark that these are defaults". The suggested change is "Open the form with empty required fields".
  The journey record (`J2/journey.md`, comparison table) lists "an example issuer and today's date (J2-002)".
- The report's reason is CT-003 ("the case date is the user's"). CT-003 says `decided_by: the user` and
  "Date as ISO"; it does not say the field opens on today's date. CT-001 says the same of the issuer name
  (`decided_by: the user`, "Required"), and J2-002 cites both rows together to say the prefill is wrong. The
  reading that keeps the date therefore keeps the issuer name too, so it does not separate the two.
- The hint the report cites, "Set to today for the new run" (`StartRun.tsx:769-772`), is drawn only when the
  page starts from an earlier run (`priorAsOf`, line 1996 needs `copy`). On a first load, which is what J2-002
  is about, nothing marks the date as a default (the screenshot I took of the first load shows
  `11/17/2026` in the date field, no hint).
- No owner question (OQ-01 to OQ-13) and no ruling covers an example value, the case date's default, history
  or leaving the form. R5 is not engaged by the issuer fields (the finding itself asks for them to be empty);
  whether emptying the date counts as removing something the reader sees is the lead's call, and the same
  argument would have applied to the example issuer.
- The register contradicts itself: J1-015 (Low, batch) calls today's date "the default for any new page" and
  asks to empty it only when starting from an earlier run. One decision should settle both.
- Size of the repair if wanted: `as_of: ""` in `startingContext`; the date input is `required`
  (`StartRun.tsx:758-767`) so Continue still demands a date, and the browser's own empty date shows
  `mm/dd/yyyy`. It also changes `priorAsOf` (line 1996, `run.as_of === today()`), so J1-015's
  from-an-earlier-run case should be decided in the same change. The report calls it "one line"; it is one
  line plus that hint and its test.

Options for the lead: (a) send back to a fresh implementer to open the as-of date empty and update the
`priorAsOf` hint; (b) record that today's date stays (J1-015 as precedent) and narrow J2-002's closure to the
issuer fields; (c) list it for the owner if emptying is read as removing something the reader sees (R5).

## Does it fix the cause

- J2-002 (issuer fields): yes. The service sent `cases/context/research-minimal.json` unchanged as the
  form's starting context. `_form_template()` (`react_frontend/__init__.py:339-350`) sends the same context
  with `identity.issuer_name` and `identity.issuer_id` empty, and the two fields carry the placeholders
  `e.g. Northbridge Group plc` and `e.g. northbridge-group-plc` (`StartRun.tsx:731`, `748`), the
  pattern the page already uses for other examples (`e.g. ${example}`). The example file is untouched.
  `context` is used only by `/connected/context` (`react_frontend/__init__.py:305`), so nothing else relied on the
  example issuer; `web/scripts/connected-proof.mjs:154` types the issuer name itself. The screenshot shows the
  placeholders clearly lighter than a value (placeholder colour at 50% alpha against the text colour).
- C2-002 / J2-001: yes, by the two routes the finding names, see (2) and (3) below.
- C2-003: yes, see (4).

## (2) The leave confirmation (`beforeunload`)

- Does the finding call for it? Yes. C2-002's suggested change: "Push a history entry per step ... or raise a
  beforeunload warning once a document or answer exists"; J2-001's expected: "can come back to it, or is warned
  before it is lost". The change does both. R5: it adds a confirmation, removes no control and no visible
  content, and the analyst can still leave (accepting it leaves; observed). No owner question covers it.
- Fires only when it should. Observed in Chromium with a dialog handler (scratch walk, C2_PORT 8747):
  untouched form, Reload: 0 dialogs; untouched form, Library link: 0; in-page Back and Forward between steps:
  0; with typed work, Library link and Reload: 1 each (dismissed: the page stays with every value; accepted: leaves, a
  blank form on return); a complete synthetic Submit: 0 dialogs, and Back then Forward over the run page: 0
  (the blank form holds nothing); Start from this run untouched: 0; Carry over from latest run with nothing
  else typed: 0. The flag `submitted` is set after `submit` resolves and just before `navigate`
  (`StartRun.tsx:1826`), so a failed Submit still warns (correct: the work is still there); the vitest test
  asks at the moment `navigate` is called.
- Traps no probe or flow. The only dialog handlers in the repository are in `p10-navigation.cjs` and
  `j2-001-leave-mid-form.cjs` (searched `.cjs`, `.mjs`, `.js`, `.ts`); Playwright accepts a beforeunload
  dialog when no handler is attached, so `page.goto` and the proof scripts are not held (they have no handler,
  `web/scripts/connected-proof.mjs` was not run: it needs a branded browser). The two probes with handlers are
  finding 4.
- Gap: finding 2 (carried documents and later choices are not "work").

## (3) Per-step history entries

- Back never left the user on a broken step. A seeded random walk of Back, Forward, Previous, Continue, Review
  run, Edit issuer and documents and the stepper buttons (scratch `fuzz.cjs` and `fuzz2.cjs`, about 250
  actions over 14 sequences, the second set weighted to the review sheet): after every action the step
  shown (`Documents`, `Purpose`, `More context`, `Review and start`) equalled `history.state.startRun`, the
  Issuer name and both files were intact whenever Documents was shown, and there were no page errors or
  console errors. The URL stays `/start`, so the step shown cannot disagree with the address.
- Forward works (walk: Back, Back, Forward, Forward returned Documents, Purpose, More context in turn; the
  Previous button's entry retraces). A Forward or Back onto a review the page no longer holds, or onto a step
  whose documents were changed, is passed over (`showPlace`, `StartRun.tsx:1966-1972`) and nothing is
  rebuilt or requested; Back from a review reaches More context with the typed note kept.
- Submit's payload and the approval digest do not change. Against the real synthetic service (`proof.serve`),
  scratch `payload.cjs` made one run straight through and one with a Back from the review sheet and a second
  review: the `/summary` bodies and the `/submit` bodies were identical (dates masked), and the digest was
  the same, `510d4ad0...ab865`, in both. `makeAnswers`, `prepareReview` and `submitReviewed` are unchanged apart
  from the one flag. A test exists but is weaker than its name (finding 3).
- Not exercised: Chrome's "history manipulation" skipping of entries added without a user gesture (the
  entries are added on a click or Enter, so they should not be skipped; headless `goBack` does not apply the
  intervention); a Back during a request in flight (the report says the late result pushes its own entry).

## (4) C2-003: what carry-over keeps

- It keeps only what the earlier run recorded. `carriedLegal` (`StartRun.tsx:2574-2578`) reads
  `prior.context.attachments.legal_documents` and applies it only if the page offers that choice, else
  `none`; nothing is guessed from file names. The run records the legal choice and three booleans
  (`makeAnswers`, `StartRun.tsx:1651-1659`; `run_start/prior.py` returns the run's own `context.json` with dates
  blanked) and no file name for any role, so "It did not record which files you chose for the agreement and
  the portfolio workbook: choose them again on More context" is true. The sentence names only the roles the
  run recorded (a legal choice other than none, and each attachment that was `true`) and is left off when the
  earlier run had no files or its listing was refused (`carriedIntro`, `StartRun.tsx:2584-2597`).
- `p13-from-run.cjs` (re-run, C2_PORT 8747) exit 0: `earlierAnswers` `legal_documents: "executed"`,
  `portfolio_workbook: true`; the form's Legal documents opens at `executed`, the workbook at none; the line
  reads "Starting from run ... Review the copied answers, add dates, and inspect its available documents. It
  did not record which files you chose for the agreement and the portfolio workbook: choose them again on More
  context." The probe then stops at its own wait for "Review and start", because Review run now asks for the
  agreement file first (an alert on the control, no `/summary` request; covered by a test), where before it
  reached a review reading "Will refuse: Legal & covenants". The analyst can still change Legal documents
  back to No agreement, so what the user controls is the same.
- The Carry over from latest run path uses the same function and sentence (observed in the scratch run;
  the vitest test covers the Legal choice and that a different issuer resets it).

## (5) The two changed assertions in `tests/test_react_frontend.py`

`test_same_origin_service_and_submit_gate` and `test_synthetic_mode_uses_the_explicit_launcher` asserted that
`/connected/context` equals the example file (the defect). They now expect a test-side `_form_template()`
that reads the same file and blanks the two issuer fields; it does not import the production
`_form_template`, so the expected value stays independent. Nothing else in them changed. The new
`test_start_form_template_names_no_issuer` asserts the two fields are `""`, that "Northbridge" is absent from
`identity`, that the other identity fields equal the file's, and that the example file itself is unchanged.
Changed only to what the finding requires: yes. No test skipped, no gate loosened.

## (6) Files

`git diff 6f93a1ae f400e0ea --stat`: `react_frontend/__init__.py`, `web/src/pages/connected/StartRun.tsx`,
their tests `tests/test_react_frontend.py` and `web/src/pages/connected/ConnectedApp.test.tsx`, and the report
`docs/audit/2026-11-16-final/output/5-repair/T07.md`. All inside T07's list. Nothing under `web/src/pages/signal/`
imports `StartRun.tsx` (only `ConnectedApp.tsx` and its test do). C2-005 was dropped under R14 and no residue
of its code remains in the diff (no `swapped` flag, no `role="status"` on the carried-run line, the existing
focus test is unchanged).

## What I re-ran

| Command | Result |
| :-- | :-- |
| `cd web && timeout 300 npx vitest run src/pages/connected/ConnectedApp.test.tsx src/pages/connected/start` | exit 0, 7 files, 403 tests passed (one run, no load timeout) |
| The 13 new vitest tests against the BASE `StartRun.tsx` (copy of `web/` at 6f93a1ae in the scratchpad, new test file dropped in) | 13 failed, 2 passed (the two guards), as the report says |
| `npm --prefix web run lint` / `format:check` / `typecheck` / `unused` | exit 0 each |
| `timeout 300 uv run pytest -q tests/test_react_frontend.py` | exit 0, 82 passed; the other six `tests/test_react_*.py` files 91 passed |
| `timeout 600 uv run python tools/quality_gate.py --base 6f93a1ae` | exit 0, 0 findings, 2 files, 105 lines |
| `timeout 600 npm --prefix web run build` | exit 0 |
| J2-002 probe under the 8762 lock | exit 0: Issuer name `value ""`, placeholder `e.g. Northbridge Group plc`; Issuer ID `value ""`, placeholder `e.g. northbridge-group-plc`; "As-of date" `value 2026-11-17` (finding 1); "NOT REPRODUCED" (the probe's verdict looks at the issuer fields only) |
| `C2_PORT=8747` `p13-from-run.cjs` | exit 0, lines above |
| `C2_PORT=8747` `p01-submit-flow.cjs` | exit 0: a complete synthetic run, `endStatus` Finished, one `/submit`, no blocked request |
| `j2-001-leave-mid-form.cjs` under the 8762 lock | exit 1 as the report says: Back from step 3 stays on `/start`, Forward returns to step 3, then the probe's own dismissed confirmation keeps it on the form (finding 4) |
| Scratch scripts in the scratchpad (not in the repository): `walk.cjs`, `fuzz.cjs`, `fuzz2.cjs`, `payload.cjs`, `carry.cjs`, `shot.cjs` | results above; service on 8747 only |

Not verified: Firefox and Safari (only the Chromium headless shell and jsdom ran), including whether
`preventDefault` alone raises the confirmation there; Chrome's skipping of history entries without a user
gesture and the real Back button (Playwright's `goBack` used); bfcache restoring a submitted form after
Back; a Back during Continue, Review run or Submit in flight; closing the tab; a second tab on the same
form; `npm --prefix web run proof:connected` (needs a branded browser, which this machine lacks); the
as-of date after Back to Documents across midnight; the legacy `/library` start form and the static app's run
start, neither of which this file serves; the Python test failing at BASE (the report's before-output was
relied on for that one, the vitest before-state I re-ran).
