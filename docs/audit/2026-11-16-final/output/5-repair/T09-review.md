# T09 review

Reviewer: Opus 5.5, medium effort (owner instruction for T07 to T10 reviewers). I did not write this change.
Change: commit 46d9d25a on `worktree-agent-aa8c0762b4610bc65`, base edebd9d8.

Verdict: CHANGES NEEDED

## Findings

1. High, `web/src/pages/connected/StartRun.tsx:1713`. The guard `issuerId.length < 40` misses the
   merge whenever the 40-character cut falls on a word boundary: `issuerSlug` strips the trailing
   hyphen, which leaves a 39-character ID. Then nothing is looked up and two issuers still share
   one ID. Re-run of the J5-004 probe with "Northbridge Synthetic Group Internation Holdings
   Limited" and "... Internation Finance plc" (scratch copy, port 8765 under its lock) gives:
   `RESULT REPRODUCED: Issuer IDs on the review sheets: ["northbridge-synthetic-group-internation",
   "northbridge-synthetic-group-internation"] (39 characters); Library cards: [... Finance plc]
   ["2 runs"]; search "Holdings": "No issuers match these filters."`. Roughly one long name in
   eight lands on a boundary, so the R3 corrupted-data case is only partly repaired. Fix: test
   whether the name was cut at all (its slug before `.slice(0, 40)` is longer than 40), not the
   length of the result. Add a unit test that covers a cut on a word boundary.
2. High, `web/src/pages/connected/StartRun.tsx:1654` (`discardDocument`). Removing the marked file
   calls `getReading` directly, outside the new `documentRefusal` path. If another unreadable file
   remains, which is the J2-003 journey ("remove a file, inspect again and meet the next one"),
   the raw decoder text comes back. The stale reading also redraws the removed file as a phantom
   "Ignored" row that still has a Remove button. Scratch probe (port 8762 under its lock),
   after Remove annual-report.pdf:
   `alerts: ["Cannot read holdings.xlsx: 'utf-8' codec can't decode byte 0x89 in position 11: invalid start byte"]`,
   `rows: ["holdings.xlsx / Selected / Remove", ..., "annual-report.pdf / Ignored / annual-report.pdf cannot be read: ... / Remove"]`.
   Fix: route every `getReading` through the same refusal handling, for example a shared
   `readDocuments(draft)` helper.
3. Medium, `web/src/pages/connected/start/plain.ts:532-533`. The service says "cannot read X: <any
   parser exception>" (`cpos_launch.py:433`). The page always turns this into "its contents are
   not a <extension> file", which is false for many real causes. A Latin-1 text file reads
   "notes.txt cannot be read: its contents are not a txt file." (it is a text file in another
   encoding). A truncated workbook reads "holdings.xlsx ... not a xlsx file." (it is a damaged
   xlsx, and "a xlsx" is a grammar error). A real but encrypted or corrupt PDF (it starts with
   `%PDF`, then pypdf fails) would read "not a PDF file". Say only what is known, for example
   "X cannot be read. It may be damaged, password-protected or not really a .xlsx file."
4. Medium, `web/node_modules` (new in 46d9d25a). The commit adds a symlink to the absolute path
   `/home/user/credit-os2/web/node_modules`. `.gitignore`'s `/web/node_modules/` matches only
   directories, so the symlink got through. This file is outside T09's files and would break other
   checkouts if merged. Drop it from the commit.
5. Low, `web/src/pages/connected/StartRun.tsx:1710-1717`. When the ID is changed to the suffixed
   form, nothing on the review sheet or under Issuer ID says why. J5-004's suggested change asked
   for "say so on the review sheet". The analyst sees an unfamiliar `...-518e588e` ID with no
   reason given.
6. Low, `web/src/pages/connected/StartRun.tsx:1624-1629`. For "no readable issuer file", no row is
   marked (correct, since no file is named). But setup.exe alone stays "Selected", while beside a
   good file the same setup.exe shows "Ignored / Will not be read" (j2-documents-step-mistakes
   J2-006 cases). This inconsistency already existed and is not made worse.

## Checked and holding

- The J2-003 first refusal names the right file with its own case kept (`named()` maps the
  service's capitalised "Empty.txt" back to the stored "empty.txt"). Only that row is marked, the
  sentence has no decoder text, and a refusal that names no file marks no row. Duplicate names
  cannot arise, because `refreshDocuments` refuses names that are the same apart from case or
  Unicode normalisation, and stored-name collisions reset the draft. A row's "Ignored" state clears
  when files are added (`addFiles` sets the reading to undefined) and when a removal leaves a
  readable set. It does not clear correctly when another bad file remains (finding 2).
- J5-004, for a name whose cut ID is 40 characters: same issuer, compared on letters and digits,
  keeps the usual ID. A different issuer gets 31 characters, a hyphen and 8 hex digits, which
  matches `[a-z0-9][a-z0-9-]{0,39}` and is deterministic. A re-run gives the settled ID again. A
  hand-typed or carried ID skips the lookup. The original probe re-run gives `NOT REPRODUCED`
  (IDs `northbridge-synthetic-group-internationa` and `northbridge-synthetic-group-int-518e588e`,
  two cards, "Holdings" found).
- The C2-014 help line "Letters a–z, digits and hyphens, up to 40 characters." is true of the
  pattern; it omits only that the first character cannot be a hyphen. Leaving Ø and non-Latin
  transliteration out is acceptable. `issuerSlug` is in `api.ts`, which is outside T09's files,
  and changing it would move the IDs of existing issuers and break CP-8's earlier-run pairing. The
  help line now lets the analyst type an ID when the derived one is empty or wrong.
- No existing test changed. 10 new tests in `start/plain.test.ts`. Apart from the `web/node_modules`
  symlink, every file is in T09's scope.

## Re-runs (this review)

- `cd web && timeout 300 npx vitest run src/pages/connected`: 51 files, 1039 tests passed.
- `npm --prefix web run lint`, `format:check`, `typecheck`, `unused`: all exit 0.
  `timeout 600 npm --prefix web run build`: exit 0.
- T07 walks (carried-work, case-date, leave-and-return, payload, random-steps) and T08 walk-t08 with
  `C2_PORT=8749`: all exit 0, 0 lines starting FAIL.
- `j2-003-unreadable-document-message.cjs` (8762, under its lock): exit 0. Output:
  `alerts: ["annual-report.pdf cannot be read: its contents are not a PDF file."]`,
  `["Ignored","Selected","Selected"]`, `NOT REPRODUCED`.
- `j2-documents-step-mistakes.cjs` (8762, under its lock): exit 0. Output: empty.txt reads
  `Ignored / empty.txt is empty (0 bytes).`.
- `p04-document-types.cjs` (`C2_PORT=8749`): exit 0. notes.docx and empty.txt are marked Ignored
  with the new sentences, and image.png gives the "None of the selected documents" sentence.
- The scratch probes behind findings 1 and 2 were run under the port locks and kept in the
  session scratchpad. They are not committed.

Not verified: p05-identity (not re-run); an encrypted real PDF (finding 3 for that case is
inferred from `handoff.py:_pages`, not run); a lookup failure during review; the carried-copy path
with a long shared name; the full vitest suite.
