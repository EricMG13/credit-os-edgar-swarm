# T09 review, round 3

Reviewer: Claude Opus 5.5, medium effort (owner instruction for T07 to T10 reviewers). I did not write this change.
Reviewed: `git diff edebd9d8 89a635d` (rounds 46d9d25a, b0cbffc1, 89a635d), round 3 (`git diff b0cbffc1 89a635d`)
especially, against J2-003 (C2-011, J2-007), J5-004 (C2-014), lead ruling L18, and the round-2 reviews
`T09-review-2.md` and `T09-review-2-adversarial.md`.

Verdict: PASS (one Low, unusual input, for the Low batch or the lead).

## Findings

1. Low (unusual input, R3), `src/deploy_workflow/run_start/submissions.py:632` (`issuer_key`) and
   `web/src/pages/connected/start/plain.ts:494` (`issuerKey`). The key still drops combining marks after NFKD.
   In scripts where a mark is part of the letter, that merges different names. Checked on both sides, with the
   same result: "टाटा" and "टीटी" both give `टट` (Devanagari vowel signs), "ガス" and "カス" both give `カス`
   (dakuten), and "Йога" and "Иога" both give `иога`. With a Latin legal-form word ("ガス Ltd" / "カス Ltd")
   both names have the usual ID `ltd`, so the page keeps it and the service accepts, and the two issuers are
   merged on the default route. This is the round-2 adversarial finding 1 with a smaller reach: CJK, plain
   Cyrillic and Greek names are now told apart (pinned by the new cases). Suggested repair: drop marks only
   where they follow a Latin base letter, or compare on NFKC plus case folding without dropping marks. Either
   way, keep the same rule on both sides.

Observation, not a finding: Greek final sigma means "ΟΣ-ΑΕ" and "ΟΣΑΕ" give different keys (`οςαε` / `οσαε`) on
both sides. This errs on the safe side: the same issuer is refused, not merged.

## Round-2 review findings

`T09-review-2.md`:
1. Medium, the offer was suffixed when the usual ID was free. Fixed. `idProblem` now looks up the holder of the
   usual ID when the refused ID is something else, and `issuerIdRefusal(message, usualHolder)` offers the usual
   ID when it is free or held by this issuer. It offers the suffixed ID only when another issuer holds the usual
   ID, and nothing when the offer would be the ID just refused. Walk step 2 now offers and takes
   `eastmoor-synthetic-utilities-plc`, and the review opens with it.
2. Low, misleading "text could not be decoded" for a workbook or PDF. Fixed. The reason is given only for text
   suffixes; `holdings.xlsx could not be read.` and `annual-report.pdf could not be read.` (walk and probe).
   The unit test now models the real service message (codec text) for the xlsx.
3. Low, no page-level test of the Submit-time refusal. Fixed. `ConnectedApp.test.tsx` has two Submit refusal
   cases (refused usual ID: suffixed offer; typed ID with the usual free: usual offer). Each checks the review is
   cleared, the step is Documents, the field has `aria-invalid`, the offer is shown and navigate is not called.
   A third test covers the review-sheet note.
4. Low, round-2 count. Corrected in the report (15 failed, 2 passed).

`T09-review-2-adversarial.md`:
1. Medium, non-Latin names reduced to the same key. Fixed for CJK, Cyrillic and Greek letters (the key keeps
   `\p{L}\p{N}` / category L and N). The residue is finding 1 above.
2. Medium, the suffixed offer when the usual ID was free. Fixed (as standard 1).
3. Low, the invalid `-811c9dc5` offer. Fixed: `issuerIdFor` returns "" when the usual slug is empty, no offer is
   made, and the sentence ends "Otherwise type an Issuer ID of your own for <name>." (unit test and walk step 4:
   no `Use` button).
4. Low, the Unicode-version difference. Knowingly left and documented in both docstrings.
5. Low, "a different issuer" stated as fact. Fixed in the service sentence, the field sentence and the
   review-sheet note. No "different issuer" remains, and the page tests assert that.
6. Low, fail-open on unreadable or nameless records. Knowingly left as unusual input (report, "Left").

## Reader sentences checked

- Service: `Issuer ID "x" is filed under the name "H", not "N". If that is this issuer under another name, type
  that name; otherwise use another Issuer ID.`
  - True: H is the latest run's name under x, and no run under x carries N's key.
  - Typing H (any case or spacing) is accepted, because the service accepts any record carrying the name's key.
- Field:
  `Issuer ID x is filed under the name "H". If that is this issuer under another name, type that name.`
  It then ends in one of three ways:
  - `Otherwise use Y for N, or type another Issuer ID.`, where Y is checked as above;
  - `Otherwise type another Issuer ID.`, when the only candidate is the refused ID;
  - `Otherwise type an Issuer ID of your own for N.`, when the slug is empty.

  All three are true.
- Review-sheet note:
  `Issuer ID Y was used for this run because U is filed under the name "H". If that is this issuer under another name, type that name.`
  It is shown only when the review's ID is the settled suffixed one and a named holder exists, and it is true.
- Offer rule, traced through `issuerIdRefusal` and `issuerIdFor`:
  - When the refused ID is the usual one, the service's holder is used and the suffixed ID is offered.
  - When the refused ID is not the usual one, the usual ID's own holder is looked up:
    - free, a nameless holder, or the same key: the usual ID is offered;
    - another issuer: the suffixed ID is offered.
  - When the slug is empty, nothing is offered.
  - `holderOf` never throws, so a failed lookup does not hide the refusal.
- Document refusals: "X could not be read." with "its text could not be decoded." only for text suffixes, and
  "its contents are not a valid zip archive." only for a non-workbook "not a zip file" (for example notes.docx).
  "empty.txt is empty (0 bytes)." and "None of the selected documents could be read as an issuer filing..." are
  unchanged and true.

## Changed tests

- `plain.test.ts`: "gives a reader sentence and offers the suffixed ID" became "offers the name's usual ID when it
  is free, not the suffixed one", plus a separate suffixed-ID case. The "offers nothing" case now passes the usual
  ID's holder. `documentRefusal`'s xlsx case now uses the real service message. The issuerKey `ß`/`ø` expectations
  changed to the new key. Each change follows the new behaviour; none is weakened.
- `walk-issuer-id.cjs`:
  - Step 2 now expects `Use eastmoor-synthetic-utilities-plc` and that ID taken.
  - Step 1's note text changed to the new wording.
  - Step 4 was added.
- Python: the `match=`/`in` strings follow the new wording only, and one non-Latin test was added.

## Scope

The changed files are StartRun.tsx, plain.ts, plain.test.ts, ConnectedApp.test.tsx (StartRun's test),
submissions.py (L18) with `tests/test_run_start_submissions.py` and `tests/test_run_start_scheduler.py`, the
report and the `T09/` folder. `git ls-files -s | awk '$1=="120000"'` prints nothing, and `web/node_modules` is
untracked.

## Re-runs (this review)

- `cd web && timeout 300 npx vitest run src/pages/connected`: 51 files, 1064 tests passed.
- `npm --prefix web run lint`, `format:check`, `typecheck`, `unused`: exit 0 each.
  `timeout 600 npm --prefix web run build`: exit 0.
- `timeout 300 uv run pytest -q tests/test_run_start_submissions.py tests/test_run_start_scheduler.py
  tests/test_run_start_prior.py tests/test_run_start_service.py tests/test_react_frontend.py`: 436 passed,
  3 skipped.
- `timeout 600 uv run python tools/quality_gate.py --base edebd9d8`: 0 findings, 3 changed files, 344 lines in
  scope.
- T07 walks (carried-work, case-date, leave-and-return, payload, random-steps) and T08 walk-t08, with
  `C2_PORT=8749`: exit 0 each, 0 lines starting FAIL.
- `walk-remove-bad-file.cjs` (8762 lock): exit 0, 6 ok.
  `walk-issuer-id.cjs` (8765 lock): exit 0, every check ok (steps 1 to 4), 0 blocked requests, 0 console
  problems, 0 HTTP >= 400.
- `j2-003-unreadable-document-message.cjs` (8762 lock): exit 0, alert `annual-report.pdf could not be read.`,
  badges Ignored/Selected/Selected.
  `j2-documents-step-mistakes.cjs` (8762 lock): exit 0, `empty.txt is empty (0 bytes).`, row Ignored.
- Finding 1: the keys were checked directly with Python `issuer_key` and the same expression in Node.

Not verified: the J5-004, p04 and p05 probes (not re-run); finding 1 driven through the page or the service with
a live walk (the keys only were computed); the full vitest and pytest suites; a real 32-bit code collision; the
request `settleIssuerId` sends to `/api/issuers/` for a name whose slug is empty (unchanged since round 2).
