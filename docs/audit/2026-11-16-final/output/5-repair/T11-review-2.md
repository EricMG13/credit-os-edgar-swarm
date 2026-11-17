# T11 review, round 2: review sheet, long names at 390 px; decisions that block Submit first

Reviewer: fresh agent, did not write the change. Reviewed `git diff e574f0d7 c24ca2d` (round 1 `bc1b19b2`, round 2 `c24ca2d`), with attention to round 2 (`git diff bc1b19b c24ca2d`). Findings: C2-001 (Medium), C2-007 (Medium); first review `T11-review.md` (R1 and R2 Medium, R3 and R4 Low). Probe port 8751.

Verdict: **PASS**. No High or Medium finding. Two Low notes, neither needs a change in this task.

## What round 2 changes

Three lines of `web/src/pages/connected/start/ReviewSheet.tsx` and two tests added to `ReviewSheet.test.tsx`, plus the report section. Whole change against base: three files (`ReviewSheet.tsx`, the new `ReviewSheet.test.tsx`, `docs/audit/2026-11-16-final/output/5-repair/T11.md`), nothing outside T11's files. `StartRun.tsx` is not in the diff.

- `ReviewSheet.tsx:81`: the block header row `flex items-center justify-between gap-3` becomes `flex flex-wrap items-center justify-between gap-3` (R1: the Edit button drops under the title instead of squeezing it).
- `ReviewSheet.tsx:214`: the Leave out `Button` gets `className="max-w-full text-left whitespace-normal"` (R2: the label wraps inside the card); label, `onPress`, position and the paragraph below it are unchanged.

## Findings

### F1 (Low) `ReviewSheet.tsx:86-96` (Edit `Button` is still `whitespace-nowrap`): at 150 and 200 percent text the sheet still widens at 390 px

Not caused by this change, not part of C2-001 (a long name at 390 px), R1 or R2, and the implementer disclosed it. Measured (Deep, no agreement, default names, root font enlarged in the built page, base `e574f0d7` built from `git archive` against head `c24ca2d`):

| Root font (text size) | Review column scrollWidth / clientWidth, base | head |
| :--- | :--- | :--- |
| 20 px (125 percent) | 510 / 298 (7 buttons cut off) | 298 / 298 |
| 24 px (150 percent) | 612 / 280 (7 buttons cut off) | 332 / 280, no button past the viewport, 2-line titles, no word split |
| 32 px (200 percent) | 815 / 244 (7 cut off) | 442 / 244 (4 buttons cut off) |

So the head is better than base at every size, and clean at 125 percent, but D-42 ("nothing is cut off at 200 percent text") is not met by the nowrap Edit buttons. The same one-line class set as the Leave out button would likely close it. Suggested: leave it for the Low and Info batch or the owner list; no change needed to pass T11.

### F2 (Low) `ReviewSheet.test.tsx:145-171`: the two new tests pin class names, not layout

Carries over R3 of round 1. The tests are not vacuous: I ran the round-2 test file against round 1's `ReviewSheet.tsx` (`git show bc1b19b:...` in a scratch copy of `c24ca2d`): 2 failed, 3 passed (`toHaveClass("flex","flex-wrap")` received `flex items-center justify-between gap-3`; `toHaveClass("max-w-full","text-left","whitespace-normal")` received the base nowrap class list). On `c24ca2d` all 5 pass. The layout evidence is the browser measurement below, not committed. No change needed.

## Checks asked for

| Check | Result |
| :--- | :--- |
| R1 fixed at 390 and 360 px | Yes. My own scratch script (own copy of the C2 `lib.cjs` with `--web`, nothing in the repository), built `c24ca2d`: every `h4` block title is one line at 390 and 360 px in all 8 pathways x (no agreement, executed agreement) x (default names, 58-character file name, 150-character issuer name, 69-character agreement name): `h4MaxLines 1`, `headingSplits` empty (no two adjacent alphanumeric characters of an `h3`-`h6` on different lines), e.g. "Issuer and documents" 169 x 24 px, "Purpose and modules" 165 x 24 px. Base at the same widths: 2 to 3 lines (86 x 48, 89 x 72). At 24 px root font the titles wrap to two lines between words, no split. Also clean at 320 px (Lite and Deep, 8 variants) and 450, 520, 700 px (Full and Deep). |
| R2 fixed at 390 and 360 px | Yes. Limits card `scrollWidth` equals `clientWidth` in every variant. Leave out button right edge: Deep and Distressed (no agreement) 340 at 390 px (column right edge 353) and 310 at 360 px (323); Full and Covenant 269; base Deep was 433. The label is on two lines inside the card (screenshot at 360 px viewed). |
| Overflow on Lite, Full, Deep and the purpose pathways, with and without an agreement | None. 8 pathways (Lite, Full, Deep, Earnings Update, Relative Value, Covenant & Refinancing, Distressed & Restructuring, Portfolio Decision) x 2 agreement states x 2 name sets x 390 and 360 px = 64 sheets: review column `scrollWidth` = `clientWidth`, no element beyond the column edges (`overCount 0`), no button past the viewport, document `scrollWidth` = viewport, Submit right edge = column right edge, `log.bad`, `pageerrors`, `blocked` empty. Earnings Update and Distressed need `fy-2024` style periods to reach the sheet (my first attempt with other text was refused by the form, my script's mistake, not the change). Mid-word breaks in the default-name sheets: 0; with the unbroken names the breaks are only inside those tokens, contained in the card. |
| Everything the sheet showed still shown, in the same order, apart from the round-1 move | Yes. Base and head built, same inputs: Lite, Full, Deep and Covenant x (none, agreement) x (default, long) x (390, 360) = 32 sheets. The review column's `innerText` lines split as prefix, "What will run" block, "Limits to decide" block, tail (blocker, approval, Submit): base is prefix + What + Limits + tail, head is prefix + Limits + What + tail, and each of the four parts is identical line for line in all 32 (113 to 163 lines per sheet). Only wrapping and the section order differ. |
| Approval, blocker line, Submit unchanged | Yes. `StartRun.tsx` untouched. `p01-submit-flow.cjs` on the rebuilt `c24ca2d`: exit 0, `submitDisabledBeforeApproval true`, blocker "3 decisions left before you can approve.", enabled after approval, dialog "Start a synthetic test?" with Cancel and "Start synthetic run", "spends USD 0.00", focus returns to Submit run after Escape and Cancel, run `Finished`, `log.bad` empty. |
| A test weakened | No. Round 2 adds the Deep fixture, an optional `review` argument on `renderSheet` whose default is exactly the earlier `{ answers, summary }`, and two tests; no existing assertion, expected value or fixture line changed (`git diff bc1b19b c24ca2d` on the test file is additions plus the one signature line). Lint, format and typecheck pass. |
| Touched a file outside T11's | No (list above). |
| Breaks a caller | No. `ReviewSheet` is drawn only by `StartRun.tsx`; no other consumer (grep) and nothing under `web/src/pages/signal/` imports it. `web/scripts/connected-proof.mjs` finds the sheet by region name, not by order. |
| Cause fixed, nothing added not asked for | Yes. R1's cause was the inherited `wrap-anywhere` lowering the title's minimum width inside a non-wrapping row; the wrapping row removes the squeeze. R2's cause was the base Button's nowrap setting the grid track; fixed on that button only. I did not choose `wrap-normal` on the `h4` (the first review's suggestion); not needed, measured above. |

## Commands I ran

| Command | Result |
| :--- | :--- |
| `cd web && timeout 300 npx vitest run src/pages/connected/start ConnectedApp` | exit 0, 8 files, 393 tests passed (85 s) |
| `npm --prefix web run lint` / `format:check` / `typecheck` | each exit 0 |
| `timeout 600 npm --prefix web run build` | exit 0 |
| `C2_PORT=8751 node .../p20-narrow-review-overflow.cjs` | exit 0; 390 px `editRights [258, 254, 337, 337, 211]`, `editOffscreen 0` of 5, `submitRight 353`, `columnWidth 316`; 600, 820, 1100 px `editOffscreen 0`; `log.bad`, `pageerrors`, `blocked` empty |
| `C2_PORT=8751 node .../p23-review-order.cjs` | exit 0; 390 px `limitsFromHeading 74`, `approveFromHeading 4826`; 1440 px `74`, `3578`; `notGivenAboveLimits 0`, `blocksAboveLimits 0` both |
| `C2_PORT=8751 node .../p01-submit-flow.cjs` | exit 0, results above |
| round-2 tests against round 1's `ReviewSheet.tsx` (scratch copy) | 2 failed, 3 passed |

The numbers match the implementer's round-2 table (p20 positions, p23 values, 393 tests). Scratch files (script, JSON, screenshots) are in the session scratchpad under `t11rev2/`; nothing there is committed and no service is left running on 8751.

Fidelity record for VERIFICATION.md (coordinator, step 9): scope is the connected review sheet; the implementer's round-1 scope (Full, no agreement, 390 and 1440 px) and round-2 scope (Deep, no agreement, default and long names, 390, 360, 320 px) are both met by my wider check above (4 pathways x agreement x names x 2 widths for text identity; 8 pathways x the same for layout).

Not verified: Safari and Firefox rendering of `overflow-wrap: anywhere` and `flex-wrap` (headless Chromium only); the sheet after pressing Leave out (the flow leaves the Review step, so the "Put back" row was not measured; that row was already `flex-wrap` and is not changed); a sheet with two Leave out buttons (no pathway I ran produced more than one); long unbroken tokens in service reasons and in the Advanced-block values on round 2's build (measured on round 1's build by the first review; round 2 changed neither); a screen reader's reading of the wrapped Edit button; text sizes other than 125, 150 and 200 percent at 390 px; the full `npm --prefix web run gates` and `proof:connected` (stage 5 step 10 runs them after all groups).
