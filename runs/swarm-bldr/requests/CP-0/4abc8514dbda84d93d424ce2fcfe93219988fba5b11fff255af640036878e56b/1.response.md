---
module_id: CP-0
issuer_id: bldr
issuer_name: Builders FirstSource, Inc.
analysis_date: 2026-11-05
run_id: bldr-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

# Source readiness for Builders FirstSource, Inc. (bldr), as of 2026-11-05

## Request

Source readiness for Builders FirstSource, Inc. (bldr), as of 2026-11-05, on the credit snapshot pathway. Scope: whether the seven supplied filings and earnings releases support the requested business and governance, financial foundation and fundamental credit work, and what is missing. This module is the entry point, so no earlier module output is used.

## Sources

The issuer sources this module relied on are listed below with their exact file names and sha256 values. No earlier module output was supplied.

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_bldr-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-17 | 9bd0da5e45c4f2248ca4db64d57fc684925bf29516d1562226f10d757c9e4459 | Annual statements, debt and lease notes, business description, risk factors, Part III cross-references, exhibit list and signatures; evidence for all three selected modules |
| 10-Q_2026-03-31_bldr-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 (signature date; filing date not stated) | 363b4992626af02adfa3367e60743e610fb97e980272b73e97926fb679323cd7 | First-quarter 2026 statements, debt note and borrowing-base table |
| 10-Q_2026-06-30_bldr-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 (signature date; filing date not stated) | 02ee03cdc0624d85cbcbf7a710722ddc9ac45fd9b91dc10f08e351fa9e01c57b | Second-quarter and six-month 2026 statements, debt note and borrowing-base table |
| 10-Q_2026-09-30_bldr-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 | eb3b1081f3726d9edfb8731ffaa8e1149a0312dcd5760fffdc5c5e326cc6f78d | Third-quarter and nine-month 2026 statements, debt note, borrowing-base table, liquidity and market-risk discussion; the latest balance sheet |
| EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-30 | 57b8b8fc9c442c401865b306d40dc3f4e8bf2c98e87e713da2af276f2efa22fe | Issuer-adjusted EBITDA reconciliation, last-twelve-months figures, net debt and 2026 outlook as at the first quarter |
| EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-30 | d9ac22d1edd973fb8f940548ad5207a292c8d1318f8581d90b82000eb7ba1b98 | Issuer-adjusted EBITDA reconciliation, last-twelve-months figures, net debt and 2026 outlook as at the second quarter |
| EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-29 | e8822f68613ed2eb08d6f6868127023f13ee8e8fe4e83662a7f4abe50d874bbc | Issuer-adjusted EBITDA reconciliation, last-twelve-months figures, net debt, product-category sales and the latest 2026 outlook |

## Findings

### Bottom line

The seven supplied filings and earnings releases support the financial, liquidity and fundamental-credit work this snapshot needs, but they cannot support firm conclusions on governance, ownership, ratings or legal protections, so creditors should treat those areas as unverified.
Basis: 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 106–108; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27

The annual report and the three quarterly reports each print full statements, a debt note and a borrowing-base table, and the printed debt, borrowing-base and quarterly totals reproduce from their parts within rounding. The issuer's adjusted EBITDA appears only in the earnings releases, and its 2025 full-year figure has to be derived rather than read. Board, ownership and executive pay sit in a proxy statement that was not supplied, no credit rating appears anywhere, and the credit agreement and indentures are known only through the annual report's summaries. Nothing dated after the third-quarter release is available.
Basis: 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–4; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13; calculation C1; calculation C4; calculation C5; calculation C7; calculation C10; calculation C11

### Source-readiness summary

| Module | Readiness | Covered by the sources | Not established |
|---|---|---|---|
| Business & governance (CP-1A) | READY_WITH_LIMITATIONS | Business model, customers, acquisitions, share repurchases and capital allocation | Board, ownership concentration, executive pay and related-party dealings |
| Financial foundation (CP-1) | READY | FY2025 and 2026 quarterly statements, debt, cash interest paid, issuer-adjusted EBITDA and net debt | Reported EBITDA is not printed; capex is not split between maintenance and growth; FY2025 adjusted EBITDA is not printed |
| Fundamental credit (CP-2) | READY_WITH_LIMITATIONS | Leverage inputs, liquidity, maturities, covenant summary, cyclicality evidence and 2026 outlook | Ratings, the governance dimension and covenant wording |

### T1 - Input gate

| Item | Value | Status | Origin | Source |
|---|---|---|---|---|
| Issuer identity | Builders FirstSource, Inc., incorporated in Delaware, NYSE ticker BLDR, Commission file number 001-40620 | Matches the run issuer | Issuer document | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 1 |
| Reporting perimeter | Consolidated statements of Builders FirstSource, Inc. and subsidiaries; the registrant is also the issuer of the senior notes; subsidiary guarantors are described but not named | Perimeter stated; guarantor names not printed (G6) | Issuer document | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 93 |
| Objective | Credit snapshot pathway: a bounded creditor read of business and governance, financial foundation and fundamental credit for a portfolio manager or committee member | Stated in the run settings | Run settings | Not applicable: run setting |
| As-of date and cutoff | 2026-11-05 for both | Stated in the run settings | Run settings | Not applicable: run setting |
| Current and prior period | Current period Q3 2026 with balance sheet date 2026-09-30; prior period FY2025 with balance sheet date 2025-12-31 | Both covered | Run settings and issuer documents | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–3; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 72 |
| Reporting currency and units | USD; filings print thousands, releases print millions | Stated | Issuer document | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 |
| Annual report | Fiscal year ended 2025-12-31, filed 2026-02-17, audited by PricewaterhouseCoopers LLP | Complete | Issuer document | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 106; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 112–113 |
| Interim reports | Form 10-Q and earnings release for each of Q1, Q2 and Q3 2026 | Complete for 2026 | Issuer document | 10-Q_2026-03-31_bldr-20260331.htm.jsonl, page 1; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 1; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 1; EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl, page 1; EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl, page 1; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 1 |
| Latest document date | 2026-10-29, which is 7 days before the as-of date | Current | Issuer document | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 33; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 1 |
| Latest balance sheet date | 2026-09-30, which is 36 days before the as-of date | Current | Issuer document | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–3 |
| Segment structure | One reportable segment aggregated from three geographic operating divisions | Stated | Issuer document | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 4; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 55 |
| Legal documents | None declared in the run settings and none supplied; the annual report lists the credit agreement, indentures and security documents as exhibits | Gap G2 | Run settings and issuer document | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 109–112 |
| Portfolio inputs | Not supplied: the run settings carry no portfolio or fund limits | Not applicable to source readiness | Run settings | Not applicable: run setting |
| Prior run of this pathway | None: first run of this pathway for this issuer | Changes since the last run not applicable | Run settings | Not applicable: run setting |
| Source gate | Pass for the three selected modules; governance coverage limited by the missing proxy statement (G1) | Pass | Derived | Not applicable: derived from T2 and the gap ledger |

### T2 - Source register

| ID | Source | Document | Period covered | Published | Authority tier | Audit status | Active representation | Overlap and limitation |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_bldr-20251231.htm.jsonl | Annual report, Form 10-K | FY2025 with FY2024 and FY2023 comparatives (balance sheet FY2025 and FY2024) | 2026-02-17 | 1 - primary filing | Audited (PricewaterhouseCoopers LLP) | Extracted visible text, 114 text chunks | Part III is cross-referenced to a proxy statement that is not supplied; guarantor names are not printed |
| S2 | 10-Q_2026-03-31_bldr-20260331.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 against Q1 2025 | 2026-04-30 (signature date) | 1 - primary filing | Unaudited | Extracted visible text, 25 text chunks | Statements repeat in the Q1 release; the 10-Q controls |
| S3 | 10-Q_2026-06-30_bldr-20260630.htm.jsonl | Quarterly report, Form 10-Q | Q2 2026 and six months 2026 against 2025 | 2026-07-30 (signature date) | 1 - primary filing | Unaudited | Extracted visible text, 31 text chunks | Statements repeat in the Q2 release; the 10-Q controls |
| S4 | 10-Q_2026-09-30_bldr-20260930.htm.jsonl | Quarterly report, Form 10-Q | Q3 2026 and nine months 2026 against 2025; balance sheet 2026-09-30 against 2025-12-31 | 2026-10-29 | 1 - primary filing | Unaudited | Extracted visible text, 33 text chunks | Statements repeat in the Q3 release; the 10-Q controls |
| S5 | EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 and twelve months to 2026-03-31 | 2026-04-30 | 2 - issuer release | Unaudited | Extracted visible text, 12 text chunks | Adjusted EBITDA and net debt are issuer-defined non-GAAP measures |
| S6 | EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026, six months 2026 and twelve months to 2026-06-30 | 2026-07-30 | 2 - issuer release | Unaudited | Extracted visible text, 13 text chunks | Adjusted EBITDA reconciliation table is split across two text chunks |
| S7 | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl | Earnings release, Exhibit 99.1 | Q3 2026, nine months 2026 and twelve months to 2026-09-30 | 2026-10-29 | 2 - issuer release | Unaudited | Extracted visible text, 14 text chunks | Adjusted EBITDA and net debt are issuer-defined non-GAAP measures; latest 2026 outlook |

### T4 - Content-to-module map

| Capability | Module | Disposition | Evidence demand | Source | Readiness effect | Limitation |
|---|---|---|---|---|---|---|
| Source readiness | CP-0 | Selected | Identity, periods, coverage and gaps for the credit snapshot | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 1; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 1 | READY | See the gap ledger |
| Business & governance | CP-1A | Selected | Business model, customers, acquisitions, ownership and control, board and management conduct, capital allocation | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 4–20; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 22; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 3; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 113 | READY_WITH_LIMITATIONS | Proxy statement not supplied: ownership concentration, board independence, executive pay and related-party dealings are not established (G1) |
| Financial foundation | CP-1 | Selected | Annual and interim statements, debt, cash interest paid, EBITDA, LTM and net debt | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 71; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 72; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_bldr-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–4; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 | READY | Reported EBITDA is not printed in any source and is built from GAAP lines; capex not split (G9); FY2025 adjusted EBITDA derived (G5) |
| Fundamental credit | CP-2 | Selected | Leverage and coverage inputs, liquidity, maturities, covenant summary, cyclicality evidence, outlook | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 95; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 21–24; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–95; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, pages 2–4 | READY_WITH_LIMITATIONS | Governance dimension limited (G1); no ratings (G3); covenant wording known only from summaries (G2) |
| Earnings changes | CP-1B | Not selected | Four discrete quarters, segment and KPI drivers | EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl, pages 1–3; EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl, pages 1–3; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, pages 1–3; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 71; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2 | READY_WITH_LIMITATIONS | One reportable segment; Q4 2025 comes by difference and its non-GAAP figures are not printed (G5) |
| Short credit snapshot | CP-L10 | Not selected | Condensed credit read drawing on the statements and liquidity tables | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–4; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27 | READY | No source obstacle of its own |
| Earnings quality | CP-1D | Not selected | Add-backs, cash conversion and non-GAAP reconciliation | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 3–4 | READY | Add-backs are issuer-defined |
| Peer benchmark | CP-1C | Not selected | Peer financials and multiples | Not applicable: no source carries peer data | CONDITIONAL | No peer documents or peer list supplied |
| Liquidity | CP-2D | Not selected | Cash, undrawn facility, letters of credit, near-term maturities | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 63–64; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 95 | READY | Facility availability is a borrowing-base figure, not the commitment |
| Refinancing & LME | CP-3C | Not selected | Maturity profile, facility maturity, call and covenant flexibility | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 95; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 92; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–95 | READY_WITH_LIMITATIONS | Call prices and covenant wording sit in indentures that are not supplied (G2) |
| Downside | CP-2A | Not selected | Scenario inputs and the issuer outlook as a base | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 4 | READY_WITH_LIMITATIONS | The run settings carry no scenario assumptions |
| Forward credit model | CP-2G | Not selected | Outlook for sales, adjusted EBITDA, capex, interest and depreciation | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 4 | READY_WITH_LIMITATIONS | Issuer outlook only; no model inputs in the run settings |
| Rates, FX & hedging | CP-2E | Not selected | Variable-rate exposure, hedges, currency exposure | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 | READY_WITH_LIMITATIONS | No hedging instrument or currency exposure is described anywhere (R16) |
| Ratings & triggers | CP-2H | Not selected | Agency ratings and rating triggers | Not applicable: no source carries a rating | CONDITIONAL | No ratings supplied (G3) |
| Legal & covenants | CP-4 | Not selected | Executed credit agreement and indentures | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 109–112 | CONDITIONAL | The method requires an executed governing document; only the exhibit list and summaries are supplied (G2) |
| Recovery & fulcrum | CP-4C | Not selected | Claims by rank, collateral, guarantor entities, executed documents | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–94; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 112 | CONDITIONAL | Executed documents and guarantor names not supplied (G2, G6) |
| Security selection | CP-3 | Not selected | Instrument terms and market levels | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–95 | CONDITIONAL | Executed documents and market quotes not supplied (G2, G4) |
| Market-implied risk | CP-3D | Not selected | Market quotes and spreads | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 | CONDITIONAL | Only third-quarter fair values from Level 2 inputs are printed; no quotes (G4) |
| Evidence validation | CP-5 | Not selected | Audit of the analysts' outputs once they exist | Not applicable: no source requirement of its own | READY | None |
| Committee decision | CP-6 | Not selected | Portfolio limits and fund fit | Not applicable: no portfolio supplied | READY_WITH_LIMITATIONS | Fund limits would be stated as not supplied |
| Changes since the last run | CP-8 | Inapplicable | A prior run of the same issuer and pathway | Not applicable: first run of this pathway | Not applicable | No earlier run exists |
| Research questions | CP-DR | Not selected | Named research questions | Not applicable: the run settings list none | READY_WITH_LIMITATIONS | The missing proxy statement (G1) is the most material named document need |

### T6 - Evidence trace

| ID | Claim established | Lineage | Source | Value or wording at the locator |
|---|---|---|---|---|
| R1 | The issuer is the registrant Builders FirstSource, Inc., reporting on one consolidated perimeter with its subsidiaries | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 1; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2 | Exact name of registrant: BUILDERS FIRSTSOURCE, INC.; statements headed BUILDERS FIRSTSOURCE, INC. AND SUBSIDIARIES |
| R2 | The business is one reportable segment | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 4; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 55 | Operating divisions are aggregated into one reportable segment |
| R3 | The annual report prints a three-year income statement and cash flow statement and a two-year balance sheet | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 71; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 72; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 73 | Net sales 15,190,638 (2025), 16,400,492 (2024), 17,097,330 (2023) in USD thousand; cash paid for interest 260,515 (2025) |
| R4 | Each 2026 quarterly report prints statements with prior-year comparatives | Directly Sourced | 10-Q_2026-03-31_bldr-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–4 | Net sales Q3 2026 3,854,048 against 3,941,190 in Q3 2025; nine months 11,003,672 against 11,832,750 in USD thousand |
| R5 | Debt is printed by instrument at 2026-09-30 and 2025-12-31, with a maturity ladder at 2025-12-31 | Directly Sourced | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 91; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 95 | Total principal 4,658,904 at 2026-09-30 and 4,485,046 at 2025-12-31 in USD thousand; ladder 550,000 in 2030 and 3,750,000 thereafter |
| R6 | The revolving facility has USD 2,200.0 million of commitments maturing 2030-05-20, a springing fixed charge coverage test of 1.00 to 1.00, and no covenant violation is reported | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 92; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 | Minimum excess availability 173.2 million at 2026-09-30, otherwise fixed charge coverage of 1.00 to 1.00; not in violation of any covenants at 2026-09-30 |
| R7 | A borrowing-base table is printed at each balance sheet date | Directly Sourced | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 63–64; 10-Q_2026-03-31_bldr-20260331.htm.jsonl, page 19; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, pages 24–25 | Net excess borrowing availability 1,459.1 at 2026-09-30 and 1,527.3 at 2025-12-31 in USD million |
| R8 | The five senior unsecured note series are guaranteed by subsidiary Debt Guarantors, rank effectively behind secured debt and structurally behind non-guarantor subsidiaries | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–94 | Senior unsecured obligation of the Company and the Debt Guarantors; effectively subordinated to secured indebtedness; structurally subordinated to non-guarantor subsidiaries |
| R9 | Issuer-adjusted EBITDA, last-twelve-months EBITDA and issuer net debt are printed in the earnings releases only | Directly Sourced | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 3; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 8; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 | LTM adjusted EBITDA 1,129.1 and net debt 4,603.9 in USD million at 2026-09-30; issuer states net debt to LTM adjusted EBITDA of 4.1x |
| R10 | The issuer outlook for 2026 is stated in each release, with the latest on 2026-10-29 | Directly Sourced | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 4 | Net sales USD 14.2 billion to USD 14.6 billion; adjusted EBITDA USD 1.075 billion to USD 1.125 billion; capital expenditures USD 175 million to USD 225 million |
| R11 | Directors, executive pay, security ownership and related-party dealings are incorporated by reference from a proxy statement | Directly Sourced | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 106–108; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 30 | Items 10 to 14 appear in the definitive proxy statement for the 2026 annual meeting; the second-quarter 10-Q exhibit list states that a Definitive Proxy Statement on Schedule 14A was filed on April 2, 2026 |
| R12 | The latest supplied document is dated 2026-10-29 | Directly Sourced | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 33; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 1 | Form 10-Q filed on October 29, 2026; release dated October 29, 2026 |
| R13 | The printed debt, borrowing-base, net debt and quarterly totals reproduce from their printed parts | Calculated | calculation C4; calculation C5; calculation C6; calculation C7; calculation C8; calculation C9; calculation C10; calculation C11; calculation C12 | All differences are 0 except nine-month net sales, which differs by 1 in USD thousand |
| R14 | FY2025 issuer-adjusted EBITDA is not printed but follows from the last-twelve-months columns | Calculated | calculation C1; calculation C2; calculation C3 | 1,583.8, 1,583.9 and 1,583.8 in USD million from the Q1, Q2 and Q3 releases |
| R15 | No credit rating or rating-agency commentary appears in any source | Analyst Inference | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 8 | No hit for Moody, Fitch, Standard & Poor, S&P Global, credit rating, rating agency, investment grade or downgrade; the only occurrence of rating is energy rating requirements |
| R16 | No hedging instrument, derivative or foreign-currency exposure is described | Analyst Inference | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 29 | No hit for swap, hedge, derivative, foreign currency or exchange rate; no financial instrument is measured at fair value on a recurring basis; floating-rate exposure is the revolving facility |
| R17 | No defined benefit pension or retiree medical plan is described; employee plans are defined contribution and union multiemployer plans | Analyst Inference | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 102 | No hit for pension, retiree, postretirement or defined benefit; 401(k) plans and multiemployer plans are described |
| R18 | No supplier finance, factoring or purchase-commitment programme is described | Analyst Inference | Not applicable: no occurrence in any source | No hit for supplier finance, supply chain finance, factoring, receivables purchase, purchase commitment, purchase obligation or take-or-pay |
| R19 | The names of the subsidiary guarantors are not printed | Analyst Inference | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 93; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 112 | Debt Guarantors is defined generically; Exhibit 21.1 Subsidiaries of the Registrant is listed by title only |

### P3 - Input inventory

| ID | Source | Family | Entity | Period | Bytes | Text chunks | sha256 of the pinned file | sha256 stated in the extract header (filed HTML) | Accessibility | Duplicate or version relation |
|---|---|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_bldr-20251231.htm.jsonl | Annual report | Builders FirstSource, Inc. | FY2025 | 299,817 | 114 | 9bd0da5e45c4f2248ca4db64d57fc684925bf29516d1562226f10d757c9e4459 | 98a37e6dbf198c1f17c7e76d3c264be8e774be5ed8cb563bfa51ab28b40f9f5d | Accessible | No duplicate; base for FY2025 and earlier comparatives |
| S2 | 10-Q_2026-03-31_bldr-20260331.htm.jsonl | Quarterly report | Builders FirstSource, Inc. | Q1 2026 | 70,956 | 25 | 363b4992626af02adfa3367e60743e610fb97e980272b73e97926fb679323cd7 | f4f2fca94949d251a359273f6e6d58184853fb4a7dcefa05b7f78cb490284a3a | Accessible | Statements repeat in S5; no hash duplicate |
| S3 | 10-Q_2026-06-30_bldr-20260630.htm.jsonl | Quarterly report | Builders FirstSource, Inc. | Q2 2026 | 86,040 | 31 | 02ee03cdc0624d85cbcbf7a710722ddc9ac45fd9b91dc10f08e351fa9e01c57b | f96513b62f614ea662d6afeac469bca309695ba4e2a10f186bf3b152736809f8 | Accessible | Statements repeat in S6; no hash duplicate |
| S4 | 10-Q_2026-09-30_bldr-20260930.htm.jsonl | Quarterly report | Builders FirstSource, Inc. | Q3 2026 | 90,671 | 33 | eb3b1081f3726d9edfb8731ffaa8e1149a0312dcd5760fffdc5c5e326cc6f78d | 6474c9ad29f66248e8f92688fc59130dc8c0fc46859307d8a54a1f8197e45cd0 | Accessible | Statements repeat in S7; no hash duplicate |
| S5 | EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl | Earnings release | Builders FirstSource, Inc. | Q1 2026 | 31,900 | 12 | 57b8b8fc9c442c401865b306d40dc3f4e8bf2c98e87e713da2af276f2efa22fe | dc03bc29554de53ca2e0e7d82b00a796855904477ef4cea15f54b2ad11a09ccb | Accessible | Adds non-GAAP measures to S2 |
| S6 | EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl | Earnings release | Builders FirstSource, Inc. | Q2 2026 | 36,192 | 13 | d9ac22d1edd973fb8f940548ad5207a292c8d1318f8581d90b82000eb7ba1b98 | 3589c402997706a0d9ecde1d3725a8ced8170ad6864a105dddbfccac557ed86d | Accessible | Adds non-GAAP measures to S3 |
| S7 | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl | Earnings release | Builders FirstSource, Inc. | Q3 2026 | 37,329 | 14 | e8822f68613ed2eb08d6f6868127023f13ee8e8fe4e83662a7f4abe50d874bbc | 58f89a6138c740544ff1f16c1509da84698488280f7d0d2f98449f6cd81c3434 | Accessible | Adds non-GAAP measures to S4; latest dated source |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-04-02 | day | 2026-07-30 | Definitive proxy statement on Schedule 14A filed with the Securities and Exchange Commission; the proxy statement itself is not supplied | Historical — filed with the Securities and Exchange Commission on April 2, 2026 | 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 30 | The annual report takes its board, executive pay, ownership and related-party disclosures from the proxy statement, so its absence limits the governance work |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 12 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 8 |

## Calculations

Each check recomputes a printed figure from its printed parts, or derives a figure the sources do not print. Amounts are in USD thousand for the filings and USD million for the releases, as the Unit column states.

| ID | Check | Inputs | Computation | Result | Printed figure | Difference | Unit | Source |
|---|---|---|---|---|---|---|---|---|
| C1 | FY2025 issuer-adjusted EBITDA implied by the Q1 release | LTM to 2026-03-31 1,428.4; Q1 2026 213.8; Q1 2025 369.2 | 1,428.4 - 213.8 + 369.2 | 1,583.8 | Not printed | Not applicable | USD million | EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl, page 11 |
| C2 | FY2025 issuer-adjusted EBITDA implied by the Q2 release | LTM to 2026-06-30 1,251.7; six months 2026 543.1; six months 2025 875.3 | 1,251.7 - 543.1 + 875.3 | 1,583.9 | Not printed | 0.1 above C1 and C3, the rounding of one-decimal releases | USD million | EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl, pages 11–12 |
| C3 | FY2025 issuer-adjusted EBITDA implied by the Q3 release | LTM to 2026-09-30 1,129.1; nine months 2026 854.2; nine months 2025 1,308.9 | 1,129.1 - 854.2 + 1,308.9 | 1,583.8 | Not printed | Not applicable | USD million | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 |
| C4 | Principal total of debt at 2026-09-30 | Revolving facility 197,000; 4.25% 2032 notes 1,300,000; 6.375% 2034 notes 1,000,000; 6.75% 2035 notes 750,000; 6.375% 2032 notes 700,000; 5.00% 2030 notes 550,000; other finance obligations 161,174; finance lease obligations 730 | 197,000 + 1,300,000 + 1,000,000 + 750,000 + 700,000 + 550,000 + 161,174 + 730 | 4,658,904 | 4,658,904 | 0 | USD thousand | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 |
| C5 | Carrying value of debt at 2026-09-30 | Principal 4,658,904; unamortized discount and issuance costs 39,740; current maturities 4,114; long-term portion 4,615,050 | 4,658,904 - 39,740; and 4,114 + 4,615,050 | 4,619,164 by both routes | 4,619,164 | 0 | USD thousand | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 3 |
| C6 | Issuer net debt in the Q3 release against the 10-Q components | Revolving facility and notes 4,497.0; finance leases and other finance obligations 161.9; cash 55.0 | 4,497.0 + 161.9 - 55.0 | 4,603.9 | 4,603.9 | 0.0 | USD million | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 |
| C7 | Nine-month 2026 net sales against the sum of the three quarters | Q1 3,287,077; Q2 3,862,548; Q3 3,854,048; Q1 plus Q2 equals the six-month figure 7,149,625 | 3,287,077 + 3,862,548 + 3,854,048 | 11,003,673 | 11,003,672 | 1 | USD thousand | 10-Q_2026-03-31_bldr-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2 |
| C8 | Nine-month 2026 net income against the sum of the three quarters | Q1 -47,414; Q2 -3,900; Q3 60,409 | -47,414 - 3,900 + 60,409 | 9,095 | 9,095 | 0 | USD thousand | 10-Q_2026-03-31_bldr-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 2 |
| C9 | Income tax line in the Q3 adjusted EBITDA reconciliation against the statement of operations | GAAP income tax Q3 2026 -33.6; tax-effect of adjustments 32.1 | -33.6 + 32.1 | -1.5 | -1.5 | 0.0 | USD million | EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 12; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 |
| C10 | Borrowing base at 2026-09-30 | Accounts receivable availability 880.0; inventory availability 886.1; agent-specified reserves 55.7; cash in qualified accounts 21.3 | 880.0 + 886.1 = 1,766.1; then 1,766.1 - 55.7 + 21.3 | 1,731.7 | 1,731.7 | 0.0 | USD million | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27 |
| C11 | Net excess borrowing availability at 2026-09-30 | Borrowing base 1,731.7; outstanding borrowings 197.0; letters of credit 75.6 | 1,731.7 - 197.0 - 75.6 | 1,459.1 | 1,459.1 | 0.0 | USD million | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 27 |
| C12 | Debt principal at 2025-12-31 against the maturity ladder | Ladder total 4,300,000; other finance obligations 183,891; finance lease obligations 1,155 | 4,300,000 + 183,891 + 1,155 | 4,485,046 | 4,485,046 | 0 | USD thousand | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 95; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 91 |

## Gaps

Each gap below states the work it affects and how to close it. Nine gaps are open and one is resolved by the dating rule.

| ID | Gap | Type | Severity | Work affected | Readiness effect | Remediation | Status | Source |
|---|---|---|---|---|---|---|---|---|
| G1 | The definitive proxy statement for the 2026 annual meeting is not supplied; the annual report places directors, executive pay, security ownership and related-party dealings there (Items 10 to 14) | Missing document | MATERIAL | Business & governance (CP-1A); governance dimension of Fundamental credit (CP-2) | READY_WITH_LIMITATIONS | Supply the 2026 definitive proxy statement | Open | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 106–108; 10-Q_2026-06-30_bldr-20260630.htm.jsonl, page 30 |
| G2 | The credit agreement, indentures, notes collateral agreement and intercreditor agreement are not supplied; the annual report lists them as exhibits and summarises their terms | Missing document | MINOR | Legal & covenants (CP-4); Recovery & fulcrum (CP-4C); Security selection (CP-3); call terms for Refinancing & LME (CP-3C) | CONDITIONAL for those modules; the three selected modules use the summaries | Supply the executed documents if those modules are wanted | Open | 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 93–95; 10-K_2025-12-31_bldr-20251231.htm.jsonl, pages 109–112 |
| G3 | No credit rating or rating-agency commentary appears in any source or in the run settings; searches for Moody, Fitch, Standard & Poor, S&P Global, credit rating, rating agency, investment grade and downgrade found nothing | Missing evidence | MINOR | Ratings & triggers (CP-2H); rating context for Fundamental credit (CP-2) | CONDITIONAL for CP-2H | Supply current agency ratings and reports | Open | Not applicable: no occurrence in any source |
| G4 | No market quotes or trading levels for the notes or loans are supplied; the third-quarter 10-Q prints fair values for the five note series at 2026-09-30 from Level 2 inputs | Missing evidence | MINOR | Market-implied risk (CP-3D); Security selection (CP-3) | CONDITIONAL for those modules | Supply dated quotes | Open | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 13 |
| G5 | The fourth-quarter 2025 earnings release is not supplied, so FY2025 issuer-adjusted EBITDA and the Q4 2025 non-GAAP reconciliation are not printed; FY2025 is derived as 1,583.8 in USD million (calculations C1 to C3) | Missing document | MINOR | Financial foundation (CP-1); Earnings changes (CP-1B) | READY_WITH_LIMITATIONS | Supply the release, or label the FY2025 figure as derived | Open | EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl, page 11; EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl, pages 11–12; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 13 |
| G6 | The names of the subsidiary guarantors are not printed, and Exhibit 21.1 (subsidiaries of the registrant) is not supplied | Missing detail | MINOR | Recovery & fulcrum (CP-4C); entity-level claims analysis | CONDITIONAL for CP-4C | Supply Exhibit 21.1 and the guarantor list | Open | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 93; 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 112 |
| G7 | No document dated after 2026-10-29 is supplied, and the as-of date is 2026-11-05, so later financing or corporate events cannot be ruled out | Coverage | MINOR | All selected modules | READY_WITH_LIMITATIONS | Supply any current report filed since 2026-10-29 | Open | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 33; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 1 |
| G8 | Tables arrive as one value per line with negative values split from their closing bracket, and locators are text chunks of up to 3,000 characters, not printed pages | Extraction format | MINOR | Financial foundation (CP-1) and every tabular read | READY | Read each value against its row label and confirm totals; the tie-outs in calculations C4 to C12 do this for the debt, borrowing-base and quarterly totals | Open, mitigated by tie-outs | 10-Q_2026-09-30_bldr-20260930.htm.jsonl, pages 2–3 |
| G9 | Capital expenditure is not split between maintenance and growth in any source (searches for maintenance capital, growth capital and expansion capital found nothing) | Missing detail | MINOR | Financial foundation (CP-1); Fundamental credit (CP-2) | READY_WITH_LIMITATIONS | Treat the split as not supplied; use total capital expenditure | Open | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_bldr-20260930.htm.jsonl, page 3 |
| G10 | The 2026 capital expenditure outlook differs by document: USD 250 million to 300 million in the annual report, USD 225 million to 275 million in the Q1 release, and USD 175 million to 225 million in the Q2 and Q3 releases | Source version | MINOR | Financial foundation (CP-1); Forward credit model (CP-2G) | READY | Use the 2026-10-29 outlook and keep earlier ranges as history | Resolved: the latest dated document controls | 10-K_2025-12-31_bldr-20251231.htm.jsonl, page 65; EX-99.1_2026-04-30_bldr-ex99_1.htm.jsonl, page 4; EX-99.1_2026-07-30_bldr-ex99_1.htm.jsonl, page 4; EX-99.1_2026-10-29_bldr-ex99_1.htm.jsonl, page 4 |

## Next module

The orchestrator selects the next module.
