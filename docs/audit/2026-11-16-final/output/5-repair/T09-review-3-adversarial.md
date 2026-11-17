# T09 adversarial review, round 3

Model: Claude Opus 5.5, medium effort. Reviewed `git diff edebd9d8 89a635d`, mainly round 3 (`git diff b0cbffc1 89a635d`), in
worktree `.claude/worktrees/agent-aa8c0762b4610bc65`. Scope: the Issuer ID half (J5-004, C2-014, ruling L18). The J2-003
half was read and not attacked.

Verdict: **PASS**. No High or Medium finding within T09. The three Low findings below are about documentation and the
limits of the design.

## Round-2 adversarial findings

- 1 (non-Latin names merged): addressed. In a live walk, 中国银行 Ltd was filed under `ltd` and 中国建设银行 Ltd under
  `ltd-cb471def`. Each issuer kept its own ID on its second run, including `中国建设银行 LTD`.
- 2 (suffixed offer when the usual ID is free): addressed. Walk step 2 offers `Use eastmoor-synthetic-utilities-plc`.
- 3 (`Use -811c9dc5`): addressed. Walk step 4 shows no `Use` button and asks for an ID.
- 4 (Unicode versions): the limit is documented, but the stated count is now wrong (finding 1 below).
- 5 ("a different issuer"): addressed. The service sentence, the field sentence and the review note now say "filed under
  the name ... If that is this issuer under another name, type that name."
- 6: parked, as the report says.

## Evidence

- Python `issuer_key` and the JS `issuerKey` were run on 71 ordinary names. The two sides gave identical output on every
  one. The names covered:
  - case and accents (Société Générale / SOCIETE GENERALE);
  - ß and ẞ, Ø and Æ, Turkish İ/ı/I, Greek final sigma in several contexts, Đ and Ł;
  - full-width Latin, half-width katakana, ㈱;
  - Hebrew with niqqud, Arabic with harakat, tatweel and presentation forms, Cyrillic Ё and Й;
  - the Kelvin sign, the Dž digraphs, the ﬁ ligature, Roman numeral Ⅻ, and names with digits, including ３Ｍ.
  - NFKD compatibility forms map the same way on both sides: full-width, ﬁ, Ⅻ, half-width kana and ㈱.
- Full code-point differential (`"a"+cp+"b"`), Python 3.13 / Unicode 15.1 against Node 22 / Unicode 17: **9,065** code
  points disagree, not 37. All of them are Unicode 16/17 additions. Python drops them as unassigned; JS keeps them as
  letters or digits. Ranges: CJK Ext J (U+323B0 and on), Egyptian hieroglyphs ext., Tangut, Garay, Sunuwar, and a few
  Latin and Cyrillic letters (U+A7CB to U+A7DC, U+1C89).
- Round 3 against round 2 on existing records:
  - The round-2 key is the round-3 key filtered to `[a-z0-9]`. So when two names have equal round-3 keys, their round-2
    keys are equal too. Round 3 never accepts a name that round 2 refused.
  - It refuses more only where names agree in their Latin letters and differ in other letters.
  - Base `edebd9d8` had no check, so no deployed rule ever accepted a record that round 3 now refuses.
  - An ID shared before T09 still takes any name that matches one of its runs (unchanged).
- Live walk on the synthetic service: scratch script, proof.serve on 8760, root `/tmp/t09r3/w`, stopped afterwards.
  The IDs come from the run records:

  | Names | Issuer IDs | Note |
  |---|---|---|
  | Société Générale SA, then SOCIETE GENERALE SA, then the full-width form | `societe-generale-sa` | one issuer |
  | ΜΥΤΙΛΗΝΑΙΟΣ S.A., then Μυτιληναίος S.A. | `s-a` | one issuer |
  | ΟΠΑΠ S.A. | `s-a-7054ef73` | the review sheet note names the holder |
  | مصرف الراجحي, then مَصْرِف الرَّاجِحِي (vowelled), Issuer ID typed as `al-rajhi-bank` | `al-rajhi-bank` | accepted |
  | The same name with a tatweel | (refused) | refused on the field; no offer; "type an Issuer ID of your own" |
  | Toyota Motor Corporation, then "Toyota Motor Corporation トヨタ自動車" | `toyota-motor-corporation` and `-128740d4` | the note names the holder |
  | Türkiye İş Bankası A.Ş., then TÜRKİYE İŞ BANKASI A.Ş. | `turkiye-is-bankas-a-s` and `turkiye-is-bankasi-a-s` | silently split |

- Offer and lookup, from reading the code:
  - `holderOf` returns `undefined` on a failed or stale lookup.
  - The page then uses or offers the usual ID. The service refuses it if another issuer holds it, and the next refusal
    (the refused ID is the usual one) offers the suffixed ID.
  - The offer is never the ID just refused.
  - The suffixed ID is at most 31 + 1 + 8 = 40 characters and starts with the usual slug's first character, so it is
    valid whenever the usual slug is non-empty. When the usual slug is empty, nothing is offered.
  - When the page and the service disagree (Unicode 16/17 characters only) and the page thinks the usual ID is this
    issuer's own, the offer equals the refused ID and is dropped, so there is no loop.
- Routes: round 3 did not change the service's call sites (`_summarise`, `digest`). The route coverage established in
  round 2 stands: summary, Submit, resubmission, approval before another issuer filed the ID, two drafts, a carried run
  renamed, a hand-typed ID.
- `walk-issuer-id.cjs` under the 8765 lock: exit 0, every line `ok`, 0 console or HTTP problems.
- J5-004 probe under the same lock: exit 0, `RESULT NOT REPRODUCED`, with IDs
  `northbridge-synthetic-group-internationa` and `northbridge-synthetic-group-int-518e588e` on two cards.
- `uv run pytest -q tests/test_run_start_submissions.py tests/test_run_start_scheduler.py -k "issuer or filed or elsewhere"`:
  20 passed.
- `npx vitest run src/pages/connected/start/plain.test.ts`: 182 passed.
- The end of my live walk logged a 404 on `style-C2hDzHyD.css`. Another session rebuilt `web/dist` at 15:15:18, during
  the walk. This is not a T09 finding.

## Findings

1. **Low, within T09.** `src/deploy_workflow/run_start/submissions.py:621` (`issuer_key` docstring) and
   `web/src/pages/connected/start/plain.ts:486` (`issuerKey` comment).
   - Both say that "about 37 recent characters" differ between Python and Node. With the Unicode-aware key, 9,065
     differ. 37 was round 2's count for the ASCII-only key.
   - The consequence is that the service, which drops these characters, treats two names that differ only in a
     Unicode 16/17 character as the same issuer. That is a merge, though not on ordinary names.
   - Correct the count. The design can stay.
2. **Low, within T09 (an L18 design limit, wider in round 3).** `submissions.py:621-631`.
   - The same issuer written with a variant in its native script gets a different key. Live examples: a tatweel, a
     native-script gloss after the Latin name, and ㈱ for 株式会社 (also Persian ی against Arabic ي).
   - It is then refused under its own ID (tatweel, live), or given a suffixed ID on the default route (Toyota gloss,
     live), which splits the issuer.
   - The refusal and the review note name the holder and say to type that name, so the analyst can recover. Round 2
     accepted these because their Latin letters were equal.
   - This is the price of finding 1 of round 2. It is the same class as Ltd/Limited, which is already accepted.
3. **Low, new observation (pre-existing; outside T09's files).** `web/src/pages/connected/api.ts:259` (`issuerSlug`).
   - Case alone splits a Turkish issuer. "Bankası" drops the ı, while "BANKASI" lower-cases to "bankasi". The two
     names get two usual IDs (`turkiye-is-bankas-a-s` and `turkiye-is-bankasi-a-s`) with no note, and carry over finds
     only one of them.
   - The report records the decision not to transliterate (C2-014: "it would change existing issuers' IDs").
   - This case shows the cost is more than a missing Ø: typing in capitals splits the issuer silently. Recorded for the
     lead.

## Not verified

- On "Start from this run", the copy has a read-only Issuer ID. If the name is then changed and refused, the `Use <id>`
  offer may still set a new ID. I did not drive this.
- Hash collisions of the 8-hex code, which I did not construct.
- The full pytest and vitest suites.
- The J2-003 half.
