---
target: Actual Caesars report in updated Credit OS preview
total_score: 25
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Users/ericguei/.codex/worktrees/rbot-react/credit-os-connected/web/src/pages/connected/report/Forecast.tsx"
target_fingerprint: "sha256:ec931198863ef58d24ee7258d5065e0cd5f7bdf7d4ff867beee963ad87036429"
target_path: /Users/ericguei/.codex/worktrees/rbot-react/credit-os-connected/web/src/pages/connected/report/Forecast.tsx
timestamp: 2026-11-16T02-54-56Z
slug: web-src-pages-connected-report-forecast-tsx
---
Method: dual-agent Astra (A: /root/astra_design_review · B: /root/astra_evidence_review)

The report is recognizably Credit OS, but its live content does not consistently fit the components. Preserve the React visual language. The next pass should improve interpretation, comparison and navigation, not replace the design.

Scope: retained Caesars report, as of 2 October 2026, updated frontend dd765b5. Read/Operate surface. All five report pages inspected on desktop; Overview, Forecast and Modules also inspected at 390×844. This is a design critique, not analytical validation or Windows release acceptance.

Design health: 25/40 — Acceptable, with significant improvements needed.

| Heuristic | Score /4 | Main evidence |
|---|---:|---|
| System status | 3 | Preview status visible; completion versus admission needs explanation. |
| Real-world language | 2 | Historical dates under a forward-looking heading. |
| User control | 3 | Section links and trace dismissal work; Escape checked. |
| Consistency | 3 | Coherent components; case labels conflict with content. |
| Error prevention | 2 | Material forecast qualifications arrive late. |
| Recognition over recall | 2 | Scenario comparison requires remembering prior selections. |
| Efficiency | 2 | Long forecast and narrow module navigation impede scanning. |
| Minimalist design | 3 | Strong hierarchy; repeated banners and dense sections add noise. |
| Error recovery | 2 | Useful Changes empty state; network failure recovery not exercised. |
| Contextual help | 3 | Units, limitations and traces help; case distinctions need explanation. |
| Total | 25/40 | Assessment A score, corroborated by independent browser evidence. |

What works: the Watchlist banner and four dated headline measures establish a clear decision hierarchy. Credit OS typography, navigation, cards and chart/table controls form a coherent analytical interface. Evidence stays separate, traces retain the selected statement, and missing support is presented honestly. The first-run Changes empty state is clear. Preserve these choices.

Priority issues:

1. P1 — Put the forecast's reading conditions beside the figures they qualify. Base case and a precise FY2029 cash proxy appear before notes explaining that this is a conditional illustration, that inputs are unreviewed, and that interest/balance bases differ. LegacyForecast.tsx renders the main table at line 418, other cases at 424, notes at 432 and limitations at 439. Select the existing module-written qualifications into a compact scope/basis block beside the case selector and relevant figures, retaining exact wording and full detail below. Preserve the useful 464.86 versus 647.95 reconciliation already beside the opening chart. Suggested command: $impeccable clarify.

2. P1 — Make scenario comparison a real comparison. The table displays only the selected case; changing the radio replaces that single row. Forecast.tsx:142 says “Two cases” above four choices, including two unexplained downside variants. LegacyForecast.tsx:346 filters the series before passing the table to “Scenario comparison” at line 371. Keep selected-case chart behavior, show all available exact scenario rows in the comparison table and highlight the selected row. Rename the heading “Forecast cases”; use existing module-written scenario descriptions, or show an explicit description gap. Suggested command: $impeccable clarify.

3. P2 — Make Dates to watch match its promise. The Overview lists 1973, 2014, 2017, 2018 and 2020. ReportLibrary.tsx:436–442 takes the first five calendar entries. Select already-recorded upcoming events relative to the report's 2 October 2026 as-of date, preserving precision and trace identity. Keep historical events in the full calendar. Do not invent future events when none are established. Suggested command: $impeccable clarify.

4. P2 — Format chart axes for reading. Revenue ticks visibly include 12147.690268558208 and 11979.963534279104; Closing cash has the same problem. LegacyForecast.tsx:241 calls ticks(values), whose default formatter in visualData.ts:88–96 is String. Apply consistent display precision and readable magnitude labels while retaining exact values in tables, tooltips and evidence. These are axis labels, not a finding of incorrectly plotted data. Suggested command: $impeccable typeset.

5. P2 — Shorten navigation before analysis on narrow screens. At 390×844, the persistent 68px rail leaves 322px for the main region. The Modules navigation is 792px tall; the bottom-line heading begins at document y=1515. Use a compact module selector and collapsible section navigation at narrow widths while retaining the desktop design. No page-level horizontal overflow was observed. Suggested command: $impeccable adapt.

Cognitive load: three checklist failures—chunking, minimal choices and working memory. Grouping and hierarchy work; progressive disclosure is uneven. Six report links, twelve module links and five local section destinations exceed four visible options, but stable navigation need not be hidden solely to meet a numeric rule. The avoidable burden is remembering values between scenario selections and passing long navigation before reading the conclusion.

Emotional journey: the initial judgement and measures create confidence; the technical preview banner introduces uncertainty. Forecast's precision initially suggests certainty, then later qualifications force reinterpretation. Move those qualifications earlier without weakening them. The inspected Overview trace ends with “Basis was not recorded”; that is an observed display state, not proof that the underlying handoff lacks a usable basis. Check mapping before declaring an analytical gap.

Persona red flags: Alex, the power analyst, cannot compare all paths simultaneously. Jordan, the first-time committee reader, must decipher the two downside options and “retained-method check.” Sam benefits from named controls, chart/table alternatives and working Escape dismissal, but long tables/repeated missing-value text impose traversal load. Full keyboard completion, contrast, screen-reader behavior and 200% zoom were not audited.

Minor observations: Evidence repeats the large admission notice. Retain one accurate status explanation, link details to Evidence, and preserve the distinction between construction completion and normal-listing eligibility. “Report” and “Report history” both target history. These are presentation issues; this critique does not clear the report for analytical use.

Independent deterministic scans: report, visuals and shared chart component directories each returned zero findings. No detector false positives. Source heuristics did not catch the observed data-to-component and layout problems. Original React code and exact Claude Overview/Forecast exports were consulted; placeholder figures are not acceptance evidence.

Questions to consider: should readers compare all paths without changing the active chart? Which existing qualification must be seen before interpreting Base case? Should watch dates be explicitly relative to the report's as-of date?

No application code, backend pins or ZIP changed. ZIP publication remains held pending Chrome and Edge passes on the Windows work PC.
