---
target: connected report reader, Fable reviewers
total_score: 21
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:web/src/pages/connected/ReportLibrary.tsx"
target_fingerprint: "sha256:48d96f173470e72955b8f6cb46856222d729b5bfff286d7f3a82ca7bf9dc0344"
target_path: web/src/pages/connected/ReportLibrary.tsx
timestamp: 2026-11-16T05-13-06Z
slug: web-src-pages-connected-reportlibrary-tsx
---
Method: dual-agent (A: Fable design reviewer · B: Fable evidence reviewer), both Fable 5.2, isolated and run in parallel.

Target: `web/src/pages/connected/ReportLibrary.tsx` and the pages it draws, HEAD `3f78f4f` (tree identical to `c519093`). Rendered from the retained Caesars run `20261115-114658-01` on the read-only preview at port 58342, at 1440×900 and 375×812. Mode: Read, with Operate elements.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Modules "On this page" stays on "Bottom line" at 5,200px scroll; `#calendar` highlights no tab |
| 2 | Match System / Real World | 2 | "Native delivery complete. The normal library withheld listing…", "T4.13 Readiness", `interest_rate`, ISO dates |
| 3 | User Control and Freedom | 3 | Esc closes the drawer and returns focus; register tables cannot be collapsed |
| 4 | Consistency and Standards | 2 | `$2,928m` / `USD 2,928 million` / `965 US$m`; `11245` vs `11,812.24`; two date formats |
| 5 | Error Prevention (misreading) | 2 | Forecast line charts run min-to-max, so +2.8% fills the plot height |
| 6 | Recognition Rather Than Recall | 2 | Trace controls at opacity 0 at rest; module-state glyph has no legend; verdict scale never shown |
| 7 | Flexibility and Efficiency | 2 | No in-report search, collapse or skip link; 14 separate Chart/Table toggles on Forecast |
| 8 | Aesthetic and Minimalist Design | 2 | Empty "Chart data: …" cards; about 300px blank inside the Cash proxy card |
| 9 | Error Recovery | 3 | Gaps carry reasons and remediation; Changes empty state is clean |
| 10 | Help and Documentation | 1 | No glossary for "cash proxy", "action bias" or module states |
| **Total** | | **21/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment.** Authored above the fold, category-interchangeable below it. Authored: the navy bottom-line band with a one-word verdict, the per-figure trace control, the Downside scenario explorer with typed causal edges and break-point strips, instrument decision cards with shape-coded badges, covenant thresholds drawn while current values are n.a. Interchangeable: every section is the same white 28px-radius card with a 22px heading over a prose wall or a generic table; in Financial foundation that pattern is 75% of the page length. The shell, tabs and Evidence lists could serve any admin product unchanged.

**Deterministic scan.** `impeccable detect` 4.8.0 returned 0 findings (exit 0) in all four directories: `web/src/pages/connected`, `web/src/pages/library/parts`, `web/src/components/chart`, `web/src/shell`. It scanned `.tsx` by regex only; the element rules (tiny-text, low-contrast) never ran on a parsed page, so this is an undercount, not a clean bill. No false positives. Measured in the browser instead: no text under 12px, no text pair under 4.5:1 (lowest 4.69:1, `#63676e` on `#e5e8ff`), no unnamed controls, no console errors, no page-level horizontal overflow.

**Visual overlays.** None. The page's CSP (`script-src 'self'`) blocked both the inline and the `localhost` detector script, so no live server was started and no overlay is visible in any tab.

## Overall Impression

The first screen of Overview is the best thing here and does what the reader standard asks: verdict, four figures, the case for and against. Everything after Limitations works against it. The single biggest opportunity is to end each reader page where the findings end and move the registers to Evidence.

## What's Working

1. Judgement-first is laid out, not only written: a one-word verdict, four traceable figures, Key findings beside Contrary evidence at `lg`.
2. The Downside and Security selection figures belong to credit work: typed causal edges (Assumption / Explanation / Test outcome), break points, per-instrument decisions with shape-plus-word status.
3. Gap mechanics are honest: "Show 11 unavailable rows and reasons", covenant thresholds with a "not a compliance opinion" note, and mobile swaps the module rail for a select.

## Priority Issues

**[P1] Module pages turn into a register dump after Limitations.**
- What: CP-1 is 28,702px at 1440×900 (about 32 screens) and 42,764px on mobile. Findings end at 7,035px; the remaining 21,667px is 13 tables. Income statement is 30 rows over 5,103px with a 140px label column in a 1,263px table inside a 966px wrapper; Debt instruments has 17 columns. Row labels repeat "· USD millions · Reported; FY Tier 1, interim Tier 2b"; values have no thousands separators. T-codes and "calculations C13 and C16" sit on a non-Evidence page, and "On this page" hides these sections (`Modules.tsx:57`).
- Why it matters: the reader cannot tell where findings stop, and the statements are unreadable as statements. It also breaks the rule that registers and ids live only on Evidence.
- Fix: end the reader page at Limitations; move registers to Evidence or one collapsed "Records" group; build one statement table with a label column of at least 280px, the unit in the caption, separators and a sticky first column. `ReportContent.tsx:288-332, 513-543`; `report/ModuleTable.tsx:129`.
- Suggested command: `/impeccable distill`

**[P1] The trace control, the product's trust mechanic, is close to invisible and fails at the headline.**
- What: opacity 0 at rest on desktop (`TraceControl.tsx:57`), so Overview shows 2 of 17 trace buttons. With Show sources on it is a 28px box with a `#e8e9eb` border on white (1.21:1) around a 10px ring that is the same glyph as the decorative bullet in the verdict band (`BottomLine.tsx:21-26`), about 130px right of the 806px paragraph it belongs to. On mobile the always-on 44px control cuts paragraph text to about 245px of a 311px card. Drawer content is 523px wide in a 400px drawer because of 41-digit decimals (`DerivationTree.tsx:10`). The verdict's own trace says only "Basis was not recorded for this item — n.a.". The Show sources switch is a 136×22px target, and CP-1 has 195 trace buttons as tab stops.
- Why it matters: a committee member cannot see which statements are sourced, and the one they check first returns nothing.
- Fix: a persistent quiet marker at 3:1 or better with its own glyph, inline at the paragraph end on mobile; round drawer values with full precision on expand; when no basis exists, use gap styling and point to the Key findings that carry the argument.
- Suggested command: `/impeccable clarify`

**[P2] Handoff scaffolding and machine values read as extracted Markdown.**
- What: cards titled "Chart data: revenue and EBITDA" hold only a repeated caption, because `ReportContent.tsx:305-313` keeps "drawing" sections after removing their tables. Chart gaps print raw strings with no gap styling (`visuals/index.tsx:115-123`) although `theme.css:393-408` defines gap tokens. Raw-plus-formatted duplicates ("0.0601 (6.01%)", "3059.3745 (USD 3,059.37 million)"), label-colon prose ("Final Action Bias: Watchlist. … Debate winner: Neither wins."), `rate_increase` and "Python's arithmetic" in Model limitations, a qualification paragraph inside a column header about 230px tall (`ForecastTable.tsx:162`), and the admission notice as an unlabelled white card on every page (`ReportLibrary.tsx:661-665`).
- Why it matters: it breaks the "nothing extracted from Markdown" rule and leaks pipeline vocabulary to a reader who has not seen the pipeline.
- Fix: drop empty drawing sections; one gap component (hatch, sentence case, reason list); one formatted value per figure; draw the decision as a bull/bear/chair scorecard; give the notice an info-styled "Test preview" label with a plain first line and the recorded reason beneath it.
- Suggested command: `/impeccable clarify`

**[P2] One chart form repeats, and several encodings mislead.**
- What: 5 of 7 Financial foundation charts are blue vertical columns of 440–490px each for three periods. EBITDA bridge steps (182 / 72 / 95 on a 0–3,624 axis) are slivers and the legend lists an absent "Decrease". Ticks are unrounded min / mid / max ("2667.5", "981.5", `visualData.ts:88-98`). "Cash proxy by scenario" draws only the selected scenario. Three full-width three-point Forecast lines have truncated axes. The seven run charts repeat on Forecast. Issuer calendar gives each event its own lane: 11,168px.
- Why it matters: repeated form hides which chart answers which question, and a truncated axis makes a 2.8% move look like a trend.
- Fix: small multiples for three-period ratios; a bridge scaled to the delta; rounded ticks with separators; all four scenarios on one chart; one shared timeline with collision stacking.
- Suggested command: `/impeccable layout`

**[P2] Wayfinding and scroll containment.**
- What: no scroll-spy (`Modules.tsx:81-89` sets the active section only on click); `calendar` is outside `tabs` (`ReportLibrary.tsx:295-304`) so no tab is current there; the "Report" tab and "Report history" both go to `#history`; the header offers 10 options, module nav 17–18. Overview repeats CP-6's Key findings, Contrary evidence and Limitations word for word, and Evidence Summary and Trace both draw the Handoffs list. On Forecast the window itself scrolls (document 5,521px against a 900px viewport; 8,261 against 812 on mobile) because two `caption.sr-only` elements escape `main`; elsewhere the nav rail overflows the document by 16px.
- Why it matters: on pages of 10 to 30 screens the reader has no reliable "where am I", and Forecast has two competing scrollbars.
- Fix: IntersectionObserver for the active section; show Calendar under Overview; remove one history entry; make the scroll container the positioning context for the captions.
- Suggested command: `/impeccable layout`

## Cognitive Load

5 of 8 checklist items fail (high): chunking, visual hierarchy, minimal choices, working memory, progressive disclosure. Overview alone fails 2. Decision points over 4 options: report header 10; module nav 17–18; Evidence Summary 6 tabs, 5 sub-tabs, a 13-option module select and 13 download buttons.

## Emotional Journey

Peak: Overview's first screen. Valleys: the first sentence under the issuer name is pipeline jargon; the verdict's trace opens a mostly empty drawer; scrolling past Limitations lands in "T4.4 Income statement". Ending: weak — every module opened ends on a "Confidence inputs" audit table and Forecast ends on a lowercase raw gap string.

## Persona Red Flags

**Alex (power user)**: no search or severity filter on the 87-row Gaps table, where severity is plain text; no collapse on a 28,702px page; Chart/Table toggled chart by chart; 12 "Download <module>" buttons.

**Sam (accessibility)**: no skip link; 195 trace buttons as tab stops on CP-1; heading order jumps h2→h4 ("credit-risk transmission"); `document.title` is "Credit OS" on every route; the module-page table scroller (299/538) has no tabindex, role or label; trace box boundary 1.21:1; six section tabs and rail links are 36px high on mobile. Passes: text contrast, accessible names, visible focus ring, Esc and focus return.

**Committee member (project persona)**: jargon greets them before the verdict; the Avoid / Watchlist / Starter Position scale is never drawn; dates read "2027-02-15 · day"; "Dates to watch" names owners such as "Source readiness"; the verdict's trace is empty; on mobile the bottom line starts at y=632 of a 748px viewport.

## Minor Observations

- Desktop prose runs 110–115 characters per line (806px cap at 16px); Forecast "Base interest is cash interest…" and Evidence metadata lines are uncapped at 183–191. Mobile runs the other way: the Overview bottom line is 31 characters per line and one Forecast block is 94px wide, 15 characters over 13 lines.
- Library card: five tiles at `xl:grid-cols-5` in a half-width card wrap "965 / US$m" and "2026-06- / 30" (`ReportLibrary.tsx:53`).
- A continuation paragraph floats outside any card between the figures and Key findings (CP-1, CP-2A, CP-6).
- "stress scenario" heading is lowercase; Record shows "Recorded cap USD 28.07419180"; Changes has no h2.
- Break-point bars need the caption "Longer bars indicate a smaller decline": the encoding is inverted.
- Five all-"n.a." columns are drawn in the Forecast model table.
- History shows "Finished" while the header shows "Test preview".

## Questions to Consider

1. If the reader has one screen, why do the findings pages spend 21,000px proving the work was done?
2. Is "Modules" a reader's navigation or the pipeline's org chart? Would "Can they pay / What ranks ahead / What breaks it" serve better?
3. If trace is the trust mechanic, what if every paragraph showed its evidence strength at rest (sourced / calculated / inferred / no basis) instead of hiding a dot?

## Run Notes

- Not inspected: `/start`, Run activity, modules CP-0, CP-1A, CP-2E, CP-2G, CP-4, CP-5, CP-DR; Changes with a real comparison (this run has no earlier run); the Table side of chart toggles; downloads; error states.
- Not tested: screen-reader output, 200% zoom, reduced motion, dark scheme, tablet widths, real touch, non-text contrast of chart series.
- Desktop was a 1440×900 emulation; mobile was emulated. Characters-per-line figures are estimates.
- Parent spot-checked five source claims (`TraceControl.tsx:57`, `Modules.tsx:81-89`, `ReportLibrary.tsx:295-304`, `ReportContent.tsx:305-313`, the `sr-only` captions); the measurements are the reviewers' and were not re-run.
- The previous run of this slug (28/40) was scored by a different reviewer model on an earlier commit, so the scores are not like-for-like.
