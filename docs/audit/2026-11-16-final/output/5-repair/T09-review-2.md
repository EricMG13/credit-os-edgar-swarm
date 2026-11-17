# T09 review, round 2

Reviewer: Claude Opus 5.5, medium effort (owner instruction for T07 to T10 reviewers). I did not write this change.
Reviewed: `git diff edebd9d8 b0cbffc1` (round 1 46d9d25a, round 2 b0cbffc1), round 2 especially, against
J2-003 (C2-011, J2-007), J5-004 (C2-014), lead ruling L18 and the two round-1 reviews.

Verdict: CHANGES NEEDED (one Medium).

## Findings

1. Medium, `web/src/pages/connected/start/plain.ts:533` (`issuerIdRefusal`). The offer is
   `issuerIdFor(found.name, found.holder)`. `found.holder` holds the refused ID, but `issuerIdFor`
   expects the holder of the name's own usual ID. When the refused ID is not the name's usual ID, the page
   offers a suffixed ID even though the usual ID is free. That happens with a hand-typed ID, and with a
   carried ID after the name is changed. The walk shows it: "Eastmoor Synthetic Utilities plc" with the
   Northbridge ID typed in is offered `Use eastmoor-synthetic-utilities-pl-0a1652a5`, although
   `eastmoor-synthetic-utilities-plc` is held by no run. If the analyst takes the offer, the run is filed
   under the suffixed ID. Eastmoor's next run, typed normally, settles on the usual
   `eastmoor-synthetic-utilities-plc` (it has no holder). One issuer then has two IDs: two Library cards,
   and CP-8 has no earlier run to compare with. That is the identity damage J5-004 exists to prevent,
   reached through the page's own button. The unit test at `plain.test.ts` ("gives a reader sentence and
   offers the suffixed ID") and walk step 2 both pin this behaviour. Fix: when `found.id !==
   issuerSlug(found.name)`, offer the name's usual ID. It can be checked with `holderOf`/`settleIssuerId`,
   or the service can be left to check it. Offer the suffix only when the usual ID is the one refused.
2. Low, `web/src/pages/connected/start/plain.ts:550` (`unreadableBecause`). A truncated workbook is not a
   valid zip, so `_is_workbook` returns False, and `handoff._pages` then decodes it as UTF-8 and fails.
   The reader is told "holdings.xlsx could not be read: its text could not be decoded." The same sentence
   is given for a PNG named annual-report.pdf. This is literally what the service did, but it points to a
   text-encoding problem when the file is in fact a damaged workbook or not a PDF. The Latin-1 .txt case
   ("notes.txt could not be read: its text could not be decoded.") is true and apt. The unit test at
   `plain.test.ts:551` models a truncated workbook as "File is not a zip file". The real service message
   for one is a codec error (re-run: `holdings.xlsx UnicodeDecodeError 'utf-8' codec can't decode byte
   0xc7`), so the test does not pin the case it names. Suggest giving the decode reason only for text
   suffixes (.txt, .md, .csv, .json, .jsonl, .htm, .html) and "X could not be read." otherwise.
3. Low, `web/src/pages/connected/StartRun.tsx:1989`. The refusal at Submit (clear the review, put the
   refusal on the Issuer ID field, return to Documents) is exercised by no test or walk. Walk step 2 is
   refused at the summary, and the vitest suite has no page-level test of the ID refusal, the offer button
   or the review-sheet note. The Submit-time refusal is covered only on the service side
   (`test_an_id_filed_between_review_and_submit_is_refused_and_nothing_starts`).
4. Low, `docs/audit/2026-11-16-final/output/5-repair/T09.md:87`. The report says that before the repair
   "16 failed ..., 1 passed". With round 1's code (identical to base for Python) and round 2's tests, I
   get 15 failed and 2 passed. Both acceptance tests pass before the repair, as acceptance tests should.
   The evidence holds; the count is off by one.

Observation for the lead, not a finding: under L18 the service compares names by letters and digits only.
A renamed issuer, or "Holdings Ltd" typed after "Holdings Limited", is therefore refused on its own ID and
offered a suffixed one. A renamed issuer has no way to keep its ID and its CP-8 history. This follows the
ruling as written, and the review sheet now names the holder, so the analyst can see it happen.

## Round-1 review findings

`T09-review.md`:
1. High, a word-boundary cut was not looked up. Fixed. `settleIssuerId` looks up every name-derived ID,
   and the service refuses whatever gets through. Unit test: "separates a short name or a word-boundary cut".
2. High, `discardDocument` showed raw text and left a phantom row. Fixed: it goes through `readDocuments`.
   `walk-remove-bad-file` passes (below).
3. Medium, false "not a <ext> file". Fixed; finding 2 above is the residue.
4. Medium, `web/node_modules` symlink committed. Fixed. The net diff has no symlink (`git ls-tree -r
   b0cbffc1` has no 120000 entry); the local link is untracked.
5. Low, no reason given for a suffixed ID. Fixed: the line under the review sheet names the usual ID and
   its holder.
6. Low, setup.exe "Selected" alone and "Ignored" beside a good file. Left as it was before T09, and the
   round-2 report does not mention it.

`T09-review-adversarial.md`:
1. High, a 39-character or short colliding ID. Fixed (as finding 1 above).
2. Medium, Carry over ran before the ID was settled. Fixed: `copyLatestWork` settles first. Walk step 3
   carries Finance's own run under `...-int-518e588e`.
3. Medium, no service check. Fixed under L18 in `refuse_filed_elsewhere`, called from `_summarise` and
   `digest`. Submit's `_record_for` calls `digest` under the scheduler lock, so two concurrent submits
   cannot both pass. `_sealed_digest` (recovery) also passes, because the run's own record carries its name.
   One fail-open is knowingly kept: an unreadable record is skipped, as `prior.issuer` does.
4. Medium, the symlink. Fixed.
5. Low, Ltd/Limited split not shown. Partly fixed: the holder is named on the sheet. The split itself is
   L18's rule (observation above).
6. Low, runs merged before T09. Knowingly left (R1-015). The service accepts either issuer; the page
   suffixes by the latest name.
7. Low, `getPriorInputs` used for the holder. Fixed: it now uses `/api/issuers/<id>` `issuer_name` with
   one request.

## L18 checks

- The service refuses at the summary and at Submit, comparing names with `issuer_key` (NFKD, lower case,
  marks dropped, a-z0-9). The page uses the same reduction, and both sides pin the same 9 literal cases.
- The page shows the refusal on the field (`aria-invalid` set) with `Use <id>`. Every derived ID is
  checked, and the ID is settled before Carry over. The holder is named on the review sheet. The slug rule
  is unchanged.
- Six named refusal tests: hand-typed, carried and renamed, the Northbridge long names, a short name that
  collides, the already-merged ID ("Other" refused), and filed between review and Submit (scheduler). I ran
  them against round 1's code (46d9d25a extracted to a scratch folder, round 2's test files copied in,
  `PYTHONPATH` pointing at that tree): all six failed. They pass on b0cbffc1. The two acceptance tests
  pass both before and after.
- R1-015 is left as ruled.

## Reader sentences checked

- "Issuer ID X is already used for H, a different issuer. Use Y for N, or type another Issuer ID." is true,
  apart from the choice of Y (finding 1).
- "Issuer ID Y was used for this run because U is already filed under H, a different issuer." is true. It
  is shown only when the review's ID is the settled suffixed one and a named holder exists.
- "Letters a–z, digits and hyphens, up to 40 characters." is true; it omits only that the ID cannot start
  with a hyphen.
- "X could not be read." with a reason only for codec and zip failures, "empty.txt is empty (0 bytes).",
  and "None of the selected documents could be read as an issuer filing..." are true. Finding 2 covers
  the binary-file wording.
- J2-003 refusals, read through the walk and the service: removing a bad file while another remains names
  the next file in a reader sentence, and the removed file does not come back. Latin-1 text is true. A
  truncated workbook is literally true but misleading (finding 2).

## Scope

The changed files are StartRun.tsx, plain.ts, plain.test.ts, ConnectedApp.test.tsx (StartRun's test),
submissions.py (allowed by L18) with its tests (`test_run_start_submissions.py`,
`test_run_start_scheduler.py`), the report and the T09/ folder. No symlink is tracked. ConnectedApp.test.tsx
changes only by the added `/api/issuers/synthetic-generale` request and the call indices it moves (5 to 6,
6 to 7).

## Re-runs (this review)

- `cd web && timeout 300 npx vitest run src/pages/connected`: the first run had 2 failures in 2 files under
  load, not identified. The re-run had 51 files and 1053 tests passed.
- `npm --prefix web run lint`, `format:check`, `typecheck`, `unused`: exit 0 each.
  `timeout 600 npm --prefix web run build`: exit 0.
- `timeout 300 uv run pytest -q tests/test_run_start_submissions.py tests/test_run_start_scheduler.py
  tests/test_run_start_prior.py tests/test_run_start_service.py tests/test_react_frontend.py`: 431 passed,
  3 skipped.
- `timeout 600 uv run python tools/quality_gate.py --base edebd9d8`: exit 0, 0 findings, 326 lines in scope.
- T07 walks (carried-work, case-date, leave-and-return, payload, random-steps) and T08 walk-t08 with
  `C2_PORT=8749`: exit 0 each, 0 lines starting FAIL.
- `walk-remove-bad-file.cjs` (8762 lock): exit 0, all 6 checks ok.
  `walk-issuer-id.cjs` (8765 lock): exit 0, all checks ok. Its step 2 shows the offer
  `eastmoor-synthetic-utilities-pl-0a1652a5` behind finding 1.
- `j2-003-unreadable-document-message.cjs` (8762 lock): exit 0,
  `alerts: ["annual-report.pdf could not be read: its text could not be decoded."]`, badges
  Ignored/Selected/Selected, NOT REPRODUCED.
  `j2-documents-step-mistakes.cjs` (8762 lock): exit 0, `empty.txt is empty (0 bytes).`, row Ignored.
- Service messages checked directly with `handoff._pages`. Truncated xlsx: UnicodeDecodeError. Latin-1
  .txt: UnicodeDecodeError. Damaged `%PDF`: PdfStreamError, which the page reads as "X could not be read.".

Not verified: the J5-004 and p04/p05 probes (not re-run in this round); the Submit-time ID refusal at page
level (finding 3); the identity of the 2 vitest failures in the first loaded run; the full vitest and pytest
suites; a real 32-bit code collision.
