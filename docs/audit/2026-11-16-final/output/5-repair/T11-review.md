# T11 review: review sheet, long names at 390 px; decisions that block Submit first

Reviewer: fresh agent, did not write the change. Reviewed `bc1b19b2` against base `e574f0d7` (`git diff e574f0d7 bc1b19b2`).
Findings: C2-001 (Medium), C2-007 (Medium). Probe port 8751.

Verdict: **CHANGES NEEDED** (two Medium findings; neither is a High).

## What the change does

Three files: `web/src/pages/connected/start/ReviewSheet.tsx` (repair), `ReviewSheet.test.tsx` (new), `docs/audit/2026-11-16-final/output/5-repair/T11.md` (report). No other file. `StartRun.tsx` is untouched (`git diff --stat` shows no line), so the approval checkbox, the blocker line, the Submit button, the dialog and the cap text are byte-identical. The sheet moves `LimitsToDecide` above the "What will run" section and adds `min-w-0` and `wrap-anywhere` to the two sections and `min-w-0` to `Block`.

## Findings

### R1 (Medium) `ReviewSheet.tsx:385` with `:81-84`: `wrap-anywhere` now breaks the block titles mid-word at 390 px and 360 px (a regression this change introduces)

`overflow-wrap: anywhere` is inherited by every `h4` block title. The title is a flex item beside a `whitespace-nowrap` Edit button, and `anywhere` also lowers the title's minimum content width, so the title is squeezed to a sliver and split inside the word. Measured on the default flow (Basic Full assessment, no agreement, no long names), base against repaired, from the built bundles:

| Viewport | Block title | Base (height, width) | Repaired (height, width) |
| :--- | :--- | :--- | :--- |
| 390 | Issuer and documents | 48 px, 86 px (two lines, whole words) | 96 px, 67 px (four lines, "docume / nts") |
| 390 | Purpose and modules | 72, 89 | 72, 71 |
| 390 | Context details | 24, 117 | 48, 114 |
| 360 | Issuer and documents | 48, 86 | 144, 37 (six lines: "Issu / er / and / doc / ume / nts") |
| 360 | Purpose and modules | 72, 89 | 120, 41 |
| 1440 | all | same | same |

I looked at the 390 px and 360 px screenshots: the first heading on the sheet reads "Issuer and docume nts" at 390 px. The text is still drawn (the multiset of 145 text lines is equal on both builds at 390 and 360, 144 at 1440), so nothing is removed, but the reader sees a broken heading in the ordinary default flow, not only with hostile input. The implementer's fidelity check compared text lines, which cannot see a mid-word break, and p20 measures only the Edit buttons' right edge. Rubric D-32 (long text wraps in full, a qualification is never truncated) and D-42 (content reflows without loss) are the standard; a heading split inside a word is a reflow loss.

Suggested repair (same file): on the `Block` header row use `flex flex-wrap items-center justify-between gap-3` and give the `h4` `wrap-normal` (Tailwind 4.3.3 has it), so a narrow row drops the Edit button below the title instead of crushing the title. Re-measure `h4` heights at 390 and 360 px; no title may be taller than its word-wrap lines (two lines at most for "Issuer and documents").

### R2 (Medium) `ReviewSheet.tsx:211-220` (and `:295`): the Limits to decide card, which this change puts first, is still clipped at 390 px on the Deep pathway

The card holds a `Leave out Legal & covenants and Recovery & fulcrum` button. `Button` is `whitespace-nowrap` (`web/src/components/base/buttons/button.tsx:15`), so the button's minimum width (about 380 px) sets the minimum width of the `ul`, the `li` and the section's inner grid track. `min-w-0` on the `<section>` stops the section from widening the page grid, but not its own inner track, and `wrap-anywhere` does not break a nowrap button. Measured at 390 px (column 316 px, right edge 353):

| Pathway (no agreement chosen) | Base column scrollWidth | Repaired column scrollWidth | Leave out button right edge |
| :--- | :--- | :--- | :--- |
| Lite | 335 | 316 | none |
| Full | 335 | 316 | 269 |
| Deep | 409 | **409** | **432** (viewport 390) |

On Deep the Limits section is 408 px wide in a 316 px column: the "0 of 6 decided" counter, the right edge of every card, the ends of the reason lines and the last word of the Leave out label are cut off by the viewport (I viewed the screenshot). It is not a regression: the base overflows the same way on Deep (and worse elsewhere). It is also not caused by long service text: with 12 unbroken 150-character tokens injected into the service reasons, fixes and ignored-document reasons, and long unbroken values in Issuer details, Valuation and peers and Scenario assumptions (counted in the DOM: 12 tokens in the limits section, 20 in "What will run", 19 of them in the three Advanced blocks), there was no overflow at 390, 600 or 1100 px once the Leave out button was not wide (agreement chosen; `scrollWidth 316 = clientWidth 316`, `badCount 0`). So the two things the report listed under Not verified hold; the nowrap button is what it missed.

It matters for this task because C2-007 moves this card to the first thing the analyst sees at 390 px and the finding's standard (D-17, D-42) is that the decisions that block Submit are legible without loss. Not in the register (grep of `register.jsonl` for "Leave out" finds only J1-001, C2-010, C2-028).

Suggested repair (same file): give that button `className="max-w-full text-left whitespace-normal"`, the form the codebase already uses for a Button at `StartRun.tsx:2424`. Re-measure Deep at 390 px: the Limits section `scrollWidth` must equal `clientWidth`. If the owner prefers, register it as a new finding and repair it in a later task instead; the repair is one line.

### R3 (Low) `ReviewSheet.test.tsx:94-105`: the C2-001 test pins class names, so it cannot see R1 or R2

`expect(inputs).toHaveClass("min-w-0", "wrap-anywhere")` passes on the repaired file while the layout still breaks a heading mid-word (R1) and still clips the Deep limit card (R2). The report says this (jsdom has no layout, the probe is the layout evidence), and the stage brief allows it; no change needed beyond noting that the acceptance evidence for C2-001 is the browser probe, and that p20 and p23 should not be read as proof that the sheet reflows at 390 px for every pathway. The test does fail on the base (see below), so it is not vacuous for the cause it targets.

### R4 (Low) `ReviewSheet.tsx:81` at 320 px: one pixel of overflow remains

At a 320 px viewport the first block header ends at x=284 against a column edge of 283 (`Edit issuer and documents`). Base is far worse (column 335 wide at 320). Outside the 390 px scope of C2-001; listed only because R1's repair is the same row.

## Checks asked for

| Check | Result |
| :--- | :--- |
| Fixes both causes | C2-007: yes (limits at 74 px from the heading at 1440 and 390; `notGivenAboveLimits 0`, `blocksAboveLimits 0`). C2-001: yes for the reported cause (long file and issuer names; p20 `editOffscreen 0` at 390, 600, 820, 1100), but R1 and R2 are left or introduced at the same viewport. |
| Every row, block and "Not given" line still drawn | Yes. Sorted text lines of the review column equal on base and repaired at 1440 (144), 390 (145), 360 (145); nine blocks and five Edit buttons in the Deep Advanced flow; the second new test guards 4 named blocks, "Not given", "Documents read", 5 Edit buttons and the limit checkbox. Only the order of the two sections changed. |
| Approval, blocker line, Submit unchanged | Yes: `StartRun.tsx` not in the diff. `p01-submit-flow.cjs` re-run on the repaired build: exit 0, Submit disabled before approval, "3 decisions left before you can approve.", enabled after approval, synthetic dialog text and `USD 0.00`, focus returns, run `Finished`, `log.bad` empty. |
| Breaks a caller or existing test | No. `ReviewSheet` is imported only by `StartRun.tsx:68` and drawn at `:2263`. `cd web && timeout 300 npx vitest run src/pages/connected/start ConnectedApp`: 8 files, 391 tests passed, exit 0 (93 s). Nothing under `web/src/pages/signal/` imports it. |
| New test fails on the base | Yes. I extracted `git archive e574f0d7 web` to the scratchpad, kept the base `ReviewSheet.tsx` (diffed identical to `git show e574f0d7:...`), added the new test file and ran it: 2 failed, 1 passed. `C2-007` fails at `followsInDocument(limits, inputs)` (false); `C2-001` fails at `toHaveClass("min-w-0","wrap-anywhere")` (received `grid gap-4`); the "still draws every block" guard passes on both. |
| Long service text in a limit card, long Advanced values at 390 px | Not a problem on their own (see R2). Row titles in the Advanced blocks are fixed strings (`ROW_SPECS` title and a number, module names); what is user text is the values, which I filled. |
| Added anything not asked for | No. The JSX comment, three class additions and the move are within the finding; the test file and report are the brief's steps 1 and 4. |
| Touched a file outside T11's files | No. Three files, listed above. |
| Gates | `npm --prefix web run lint` exit 0; `typecheck` exit 0; `format:check` exit 0 (re-run by me). |
| Probes | After `timeout 600 npm --prefix web run build` (exit 0): `p20-narrow-review-overflow.cjs` exit 0, `editOffscreen 0` of 5 at 390/600/820/1100, `submitRight 353` at 390, `log.bad` empty. `p23-review-order.cjs` exit 0, `limitsFromHeading 74` at both widths, `approveFromHeading 3578` and `4826`, 22 groups. Both match the implementer's numbers. |

## Evidence files

My scratch probes and screenshots are in the session scratchpad (`.../scratchpad/probe/`: `long2.cjs`, `deepbasic.cjs`, `shots.cjs`, `shots2.cjs`, `default390.cjs`, with a copy of the C2 `lib.cjs` that passes `--web` to serve a base build built from `git archive e574f0d7`). Nothing there is committed. The repaired build is `web/dist` of this worktree (ignored by git).

Not verified: Safari and Firefox rendering of `overflow-wrap: anywhere` (headless Chromium only); viewport widths between 391 and 599 px and above 390 px for the Deep pathway; the other four purpose pathways (Earnings Update, Relative Value, Covenant & Refinancing, Distressed & Restructuring, Portfolio Decision) for a long Leave out label (I measured Lite, Full, Deep); a second Leave out button on a sheet with two Will refuse groups; whether a real service sends an unbroken token as long as my 150-character injected one; the design-rubric screenshots D-17, D-22, D-03 were not retaken; the full `npm --prefix web run gates` and `proof:connected` (stage 5 step 10 runs them after all groups).
