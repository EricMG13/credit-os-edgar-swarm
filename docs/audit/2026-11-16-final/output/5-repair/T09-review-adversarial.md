# T09 adversarial review (second reviewer)

Model: Claude Opus 5.5, medium effort. Commit reviewed: 46d9d25a (base edebd9d8), worktree
`.claude/worktrees/agent-aa8c0762b4610bc65`. Scope of this review: the J5-004/C2-014 half (Issuer ID).
The J2-003 half was read, not attacked.

Verdict: **CHANGES NEEDED**

## Re-run evidence

- `cd web && timeout 300 npx vitest run src/pages/connected/start/plain.test.ts`: 160 passed.
- J5-004 probe under the 8765 lock: exit 0, `RESULT NOT REPRODUCED`, IDs
  `["northbridge-synthetic-group-internationa","northbridge-synthetic-group-int-518e588e"]`, two cards,
  search "Holdings" finds the Holdings card. This matches the report. (A first attempt hit 404s on
  `connected-assets/*` because another session rebuilt `web/dist` at 13:44 during the run. The re-run was clean.)
- Scratch probes (scratchpad, proof.serve on 8760, roots under `/tmp/t09r/`, service stopped afterwards):
  - S1, cut lands on a hyphen: "Northbridge Synthetic Group Investments Holdings Limited" then
    "Northbridge Synthetic Group Investments Finance plc". Both review sheets show
    `northbridge-synthetic-group-investments` (39 characters). **Merged.**
  - S2, the holder's run had just been submitted (status `running`): "Southgate Synthetic Infrastructure Partners
    Holdings Limited" then "... Finance plc" gives `southgate-synthetic-infrastructure-partn` and
    `southgate-synthetic-infrastruct-cf5ac85b`. Kept apart: the run record exists from submit.
  - S3, variants of one issuer: "... International Holdings Limited", "... Holdings Ltd", then the first name in
    upper case gives `...-internationa`, `northbridge-synthetic-group-int-42be45c7` and `...-internationa`. Case
    is handled. **Ltd/Limited splits.**
  - S4: Holdings has run. A new form is started with "Northbridge Synthetic Group International Finance plc"
    typed in, and "Carry over from latest run" is pressed. It carries Holdings' run, the name box becomes
    "...Holdings Limited", and the ID box is locked to `northbridge-synthetic-group-internationa`. The name box
    stays editable.
  - Hand-typed ID: "Eastmoor Synthetic Utilities plc" with `northbridge-synthetic-group-internationa` typed into
    Issuer ID reaches review with that ID and no warning. This is unchanged from before T09.
  - Order: B, then A, then A, then B was not run end to end. By code, the holder is the latest run under the
    usual ID. Only the first issuer to use that ID ever lands on it, so the IDs stay stable outside the holes below.

## Findings

1. **High, within T09.** `web/src/pages/connected/StartRun.tsx:1713`: `issuerId.length < 40` skips the
   lookup whenever the 40-character cut lands on a separator. `issuerSlug` then trims the hyphen to 39
   characters, so two ordinary names sharing 39 characters still get one ID (S1 shows the merge at runtime).
   The same gate also misses this case: a short name whose full slug equals a long name's cut, for example
   "Northbridge Synthetic Group Investments" (parent) after "... Investments Holdings Limited". The shorter
   name is never looked up and takes the long name's ID. Repair (StartRun.tsx, plain.ts): look up the holder
   of every ID that comes from a name, not only 40-character ones.
2. **Medium, within T09.** `web/src/pages/connected/StartRun.tsx:1672` (`copyLatestWork`): the ID is settled
   only at review, so the box shows the usual ID until then, and "Carry over from latest run" looks up that
   usual ID.
   - For issuer B, this carries issuer A's run and A's name, and locks the ID to A's ID (S4, runtime).
   - B can never carry over its own earlier runs, which are filed under the suffixed ID.
   - If the analyst retypes B's name, `settleIssuerId` returns at once (`customSlug !== undefined`, line 1713),
     so B is submitted under A's ID: a merge. This last step follows from the code; the submit was not driven.
   Repair (StartRun.tsx): settle the ID before the carry-over lookup, and in carry mode check the typed name
   against the carried issuer's name.
3. **Medium, new observation, outside T09's files.** Nothing on the service side stops an ID from holding two
   issuers. `src/deploy_workflow/run_start/submissions.py:795` checks only the length. The page's check runs
   once, at review, so these paths still merge:
   - a hand-typed ID (shown at runtime; the same before T09);
   - a carried ID whose name was then changed;
   - two analysts reviewing different issuers at the same time;
   - another issuer taking the ID between review and Submit;
   - `prior.issuer`'s documented fail-open, which skips unreadable records (`prior.py:101-104`).
   A full fix needs `src/deploy_workflow/run_start/submissions.py`, using `prior.py`/`inbox/runs.py`. At submit
   it would refuse, or ask about, an `issuer_id` whose recorded runs carry a different normalised issuer name.
4. **Medium, within the T09 commit, file outside the task.** `web/node_modules` was committed as a symlink to
   `/home/user/credit-os2/web/node_modules`. The ignore rule `/web/node_modules/` (`.gitignore:30`) matches
   directories only, and a symlink is not one, so the link was not ignored. Merged into `audit/final-repairs`,
   the commit tracks a path where the main checkout has a real, ignored directory. The checkout then conflicts,
   or the link points at itself. Repair: drop it from the commit (`git rm --cached web/node_modules`).
5. **Low, within T09.** `web/src/pages/connected/start/plain.ts:510` (`issuerIdFor`): any difference in letters
   or digits makes a different issuer. So "Holdings Ltd" after "Holdings Limited", or a dropped trailing "plc",
   moves one issuer to a second ID (S3, runtime). This matches the existing rule for short names, but the review
   sheet never says that the usual ID belongs to "<holder's name>" and that this run got a new one, so the analyst
   cannot catch the split. Repair (StartRun.tsx): add one sentence on review naming the holder whenever the ID is
   suffixed.
6. **Low, new observation.** Runs that were already merged before T09 are not separated. With such data the
   holder is whichever merged issuer has the latest as-of date, so the other issuer's next run goes to a
   suffixed ID, apart from its own history. Repairing that needs a data or service change (run records in
   `src/deploy_workflow/inbox/runs.py`).
7. **Low, within T09.** `StartRun.tsx:1714` makes a second request, `getPriorInputs`, to read the holder's
   name, although `/api/issuers/<id>` already returns `issuer_name` (`prior.py:115`). That is one more round
   trip and one more way to fail the review, for example on a record the inputs endpoint refuses.

## Questions from the brief, answered

- **Same issuer:** names compare equal when their letters and digits match after NFKD, lower-casing and
  stripping marks. Case, spacing and punctuation are tolerated; Ltd/Limited and plc differences are not
  (finding 5). Non-Latin letters are dropped from the key, so two names that differ only in such letters after
  character 40 compare as one issuer. That is an unusual input, parked.
- **8-hex code:** FNV-1a over the normalised key (ASCII only), using `Math.imul` and `>>> 0`. It is
  deterministic in every engine. Three issuers sharing 40 characters get the usual ID, a code for B and a code
  for C. Two issuers sharing the first 31 characters differ by their codes; a collision is 1 in 2^32, and the
  suffixed ID is not checked against its own holder.
- **Lookup:** a failure throws and the review fails, with no silent merge. The list is read when requested, so
  it is not stale. A run that has just been submitted is already recorded (S2). An unreadable record is skipped
  by the service's fail-open (finding 3). Submit always uses the ID settled at review; there is no re-check at
  Submit (finding 3).
- **Hand-typed IDs:** they can merge two issuers, and could before T09 (finding 3).

Not verified: the final submit of the carry-over-then-retype merge (finding 2 follows from the code); a real
32-bit code collision; Report history row naming; the J2-003 half beyond reading the diff; the full vitest suite.
