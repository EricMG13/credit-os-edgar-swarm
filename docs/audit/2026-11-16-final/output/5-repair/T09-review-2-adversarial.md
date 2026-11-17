# T09 adversarial review, round 2

Model: Claude Opus 5.5, medium effort. Reviewed `git diff edebd9d8 b0cbffc1` (round 2 commit b0cbffc1) in worktree
`.claude/worktrees/agent-aa8c0762b4610bc65`. Scope: the Issuer ID half (J5-004, C2-014, ruling L18). The J2-003 half
was read but not attacked.

Verdict: **CHANGES NEEDED**

## Round-1 adversarial findings

- 1 (cut on a separator, short name colliding): addressed. `settleIssuerId` now looks up the holder for every name.
- 2 (carry over another issuer's run): addressed. The ID is settled before the carry; walk step 3 passes.
- 3 (no service-side check): addressed. `refuse_filed_elsewhere` runs in `_summarise` and in `digest`. Submit calls
  `digest` in `_record_for` under `Scheduler.lock`, after the earlier record has been saved to disk, so these routes
  all reach it:
  - a hand-typed ID;
  - a carried ID with a changed name;
  - an approval made before another issuer filed the ID;
  - two approved drafts, submitted in either order.

  A resubmission of the same `sid` returns its existing record before the check, which is correct. The recovery path
  (`_sealed_digest`) also calls `digest`, but there the run's own saved record matches its name, so it is not refused.
- 5 (Ltd/Limited split goes unremarked): partly addressed. The review sheet now names the holder. The note still calls
  the holder "a different issuer" even when it is the same issuer written another way (finding 5 below).
- 7 (the extra `getPriorInputs` request): addressed. `holderOf` reads `issuer_name` from `/api/issuers/<id>`.

## Re-run evidence

- `timeout 300 uv run pytest -q tests/test_run_start_submissions.py tests/test_run_start_scheduler.py -k "issuer or filed or elsewhere"`:
  15 passed.
- `cd web && timeout 300 npx vitest run src/pages/connected/start/plain.test.ts`: 174 passed.
- `walk-issuer-id.cjs` under the 8765 lock: exit 0. Every line is `ok`, and the walk recorded no HTTP errors and no
  console errors.
- J5-004 probe under the 8765 lock: exit 0, `RESULT NOT REPRODUCED`. The IDs were
  `northbridge-synthetic-group-internationa` and `northbridge-synthetic-group-int-518e588e`, on two cards.
- Scratch checks of the service rule (calling `refuse_filed_elsewhere` directly on a scratch root under `/tmp`):
  - CJK "中国银行 Ltd" holds `ltd`; "中国建设银行 Ltd" under `ltd` is **ACCEPTED**.
  - Cyrillic "Газпром" holds `gazprom`; "Лукойл" under `gazprom` is **ACCEPTED**.
  - "A & B Holdings Limited" holds the ID: "A and B Holdings Limited" and "A & B Holdings Ltd" are both REFUSED.
  - "Straße AG" holds the ID: "Strasse AG" is REFUSED; "  STRAßE  ag " is accepted.
  - An ID whose only record has an empty `issuer_name` is accepted for any issuer.
  - An ID whose only record has an unknown field (a newer format) is skipped, so any issuer is accepted.
  - An older-format minimal record (no optional fields) loads, and the check works on it: a different issuer is
    refused and the same issuer is accepted.
- Live walk (scratch script; proof.serve on port 8760, root `/tmp/t09r2/w`; the service was stopped afterwards),
  through the page's default route with no ID typed:
  - "中国银行 Ltd" and then "中国建设银行 Ltd" both reach review and submit with Issuer ID `ltd`. `/api/issuers/ltd`
    shows 2 runs, the latest named 中国建设银行 Ltd. **The two issuers are merged.**
  - "Газпром" with the hand-typed Issuer ID `a-b-holdings-limited` is refused on the field. The page offers the button
    `Use -811c9dc5`, which is not a valid ID because it starts with a hyphen.
- Differential check of `issuer_key` (Python 3.13, Unicode 15.1) against `issuerKey` (Node 22, Unicode 17), one input
  per code point: 37 code points disagree. All are Unicode 16/17 additions (U+A7F1 and U+1CCD6 to U+1CCF9). Python
  drops them and JS maps them to ASCII. Every other code point, including Ø, é, ß, İ, full-width letters and the
  Kelvin sign, agrees.
- Cost: with about 300 run records, the check takes about 5 ms; with about 3,300, about 67 ms. It reads and parses
  every record once per summary and once per Submit, and the Submit read happens while `Scheduler.lock` is held. That
  is acceptable at a few hundred runs.

## Findings

1. **Medium, within T09.** `src/deploy_workflow/run_start/submissions.py:628` (`issuer_key`), mirrored at
   `web/src/pages/connected/start/plain.ts:491` (`issuerKey`).
   - The cause: the key keeps only a-z and 0-9. Names written in non-Latin letters therefore reduce to the same key:
     "" for a fully Cyrillic, Greek or CJK name, or "ltd" for "<CJK> Ltd".
   - The effect: `refuse_filed_elsewhere` treats two different issuers as one and accepts the second.
   - It happens on the default route with no hand typing, because `issuerSlug` gives both names the same usual ID.
     The live walk merged 中国银行 Ltd and 中国建设银行 Ltd under `ltd`.
   - Repair: compare names on a Unicode-aware key, for example NFKC, casefold, then keep the `\w` letters and digits,
     and use the same key on both sides. Alternatively, treat a key that is empty or holds only a legal-form word as
     "not provably the same". The ID slug can stay ASCII.
2. **Medium, within T09.** `web/src/pages/connected/start/plain.ts:533` (`issuerIdRefusal`).
   - The cause: the offer is always `issuerIdFor(name, holder)`, the suffixed form, even when the name's usual ID is
     free.
   - The evidence: in the walk, a hand-typed ID for "Eastmoor Synthetic Utilities plc" was refused, and the page
     offered `eastmoor-synthetic-utilities-pl-0a1652a5` although `eastmoor-synthetic-utilities-plc` holds no run.
   - The split (by code): once the offer is taken, Eastmoor's next run on the ordinary route settles to the free usual
     ID (`settleIssuerId` finds no holder). The one issuer is then split across two IDs, and "Carry over" cannot find
     the first run.
   - Repair: offer `issuerIdFor(name, await holderOf(issuerSlug(name)))`, that is, the usual ID when it is free or
     held by this issuer.
3. **Low, within T09.** `web/src/pages/connected/start/plain.ts:514` (`issuerIdFor`) and `plain.ts:499`
   (`nameCode`).
   - When the usual slug is empty (a non-Latin name), the suffixed ID is `-` followed by the hash of an empty key.
     That is always `-811c9dc5`, which is invalid because it starts with a hyphen.
   - The page still offers it (`Use -811c9dc5`, live). The input pattern or the service then refuses it.
   - Every non-Latin name would get the same code.
4. **Low, within T09.** `web/src/pages/connected/start/plain.ts:491` versus `submissions.py:628`. The two
   normalisations disagree on 37 code points added in Unicode 16/17, because Node's ICU is newer than Python's
   `unicodedata`. In practice the inputs are unrealistic. It means the "same literal cases" pinning does not prove the
   two keys equal on every input.
5. **Low, within T09 (the residue of round-1 finding 5).** `web/src/pages/connected/StartRun.tsx:2236` (`idNote`).
   - Names that differ only in legal form or connective ("Ltd"/"Limited", "&"/"and", "ß"/"ss") get different keys.
     The service then refuses the same issuer under its own ID.
   - When the usual ID is shared, the page suffixes the name, so the issuer is split. The note still states as fact
     that the holder is "a different issuer".
   - The refusal names the holder, so the analyst can recover by retyping the name exactly.
   - Suggested wording: "already filed under <holder>; if that is this issuer, type its name as filed".
6. **Low, new observation (accepted fail-open, recorded for the lead).** `submissions.py:646-648`. Two kinds of record
   leave an ID open to any issuer:
   - a record with an empty `issuer_name` (only legacy records; Submit always writes a name);
   - a record that `_load` refuses (corrupt JSON, an unknown field from a newer format, an unknown status).

   This happens only on unusual inputs. Ordinary records, including older formats with missing optional fields, load
   and are checked.

No finding was raised against the route coverage of question 1: summary, Submit, resubmission, approval made before
another issuer filed the ID, concurrent drafts, carried run with a changed name, and hand-typed ID. Case variants of an
ID cannot occur, because `SLUG` is lower-case ASCII. Case and spacing variants of the name do not split an issuer.

Not verified:
- The Eastmoor split in finding 2 was established from the code; the second Eastmoor run was not driven.
- The "& vs and" split on the page with a shared long usual ID. With short names the two usual slugs already differ,
  which also happened before T09.
- The full pytest and vitest suites.
- The J2-003 half beyond reading the diff.
- `web/dist` was not rebuilt. It already contained the round-2 strings, so it was taken to be current.
