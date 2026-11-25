---
issuer_id: cvi
module_id: CP-0
analysis_date: 2026-11-05
run_id: cvi-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
evidence_class: full_run
---
# CVR ENERGY INC - Source readiness, as of 2026-11-05

## Request
CVR ENERGY INC (issuer id cvi), as of 2026-11-05, credit snapshot pathway. This module assesses whether the supplied filings and releases can support the requested Source readiness, Business & governance, Financial foundation and Fundamental credit work. The scope is seven documents dated February 18, 2026 to November 3, 2026, and no earlier module output was supplied.

## Sources
| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_cvi-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-18 | 11b2ae0e09456bfa771d4cab8a17d5e6eecebad270822a0aa27a6321ae3e1326 | Audited FY2025 statements, debt and lease notes, cash requirements, business, risk factors and Part III coverage |
| 10-Q_2026-03-31_cvi-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 | 0d5ec22f9043f7de61004c1d3fc3166812200367bbaae195e5e1fbdd81619bfc | Q1 2026 interim statements, debt note, liquidity and subsequent-event coverage |
| 10-Q_2026-06-30_cvi-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 | 358aaec14a40e7fb2473ba1f5c1574588c88cdab98ea0a6156b8c6e07d430343 | Q2 2026 and six-month interim statements, debt note and liquidity coverage |
| 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | c1bc2003ec1856161a58b4e8e6474dd136cd1e6864fe6be884dd4ce7689172a8 | Latest balance sheet, nine-month statements, debt and liquidity, pending acquisition, risk factors |
| EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl | Exhibit 99.1 press release, first quarter 2026 results | 2026-04-29 | ec1426d7dc5a0e9978dd49bcfe1d59907ecfcc63064a0912a9028158f50040e7 | Q1 2026 segment results, non-GAAP reconciliations and management commentary |
| EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl | Exhibit 99.1 press release, second quarter 2026 results | 2026-07-29 | 1459a1187a6f9d055543784814ad9e46560c18ce90ff9327aed9062ea6d7d429 | Q2 2026 segment results, non-GAAP reconciliations, cash and debt summary |
| EX-99.1_2026-11-03_d897437dex991.htm.jsonl | Exhibit 99.1 press release, third quarter 2026 results | 2026-11-03 | a8afdbbc4ca0ef0b0aa3933661eb6fa3f49fab4f6b6643dc433309cf920a00ae | Q3 2026 results, non-GAAP reconciliations, cash and debt summary, fourth quarter outlook |

No earlier module output was supplied to this module; it reads the seven source files only.

## Findings
### Bottom line
The filed accounts to September 30, 2026 support a credit snapshot of CVR Energy, but creditors cannot test covenants, claim priority or the pending acquisition financing, because no executed financing documents, ratings or market prices were supplied.

The 2025 annual report, three 2026 quarterly reports and three results releases cover the statements, debt, liquidity and segment results, and the latest report was signed two days before the as-of date. The pending Marathon refinery purchase, priced at about USD 4.2 billion, is described only in the third quarter report and release, so a pro forma debt figure is not established in these sources.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12; 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 191; calculation C4

### T1 - Input gate
| Gate item | Result | Detail | Source |
|---|---|---|---|
| Issuer | Confirmed | CVR Energy, Inc., NYSE symbol CVI, Sugar Land, Texas, commission file number 001-33492 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 1 |
| Reporting entity and perimeter | Consolidated CVR Energy, Inc. | The consolidated accounts include CVR Partners, LP as a variable interest entity; CVR Energy holds approximately 37% of its common units and 100% of its general partner interests, so debt, cash and earnings of the nitrogen fertilizer business sit inside every consolidated figure | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11 and 13 |
| Controlling holder | Stated | Icahn Enterprises L.P. and affiliates own approximately 71% of the common stock at September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 11 |
| Objective | Credit snapshot | The pathway use case: a short credit view of the issuer from filed statements, with the requested modules Source readiness, Business & governance, Financial foundation and Fundamental credit | Run settings (not issuer evidence) |
| As-of date and cutoff | 2026-11-05 and 2026-11-05 | The newest source is dated 2026-11-03; no source is dated after the cutoff. Dividend and distribution payment dates of November 23, 2026 are scheduled future dates inside sources dated before the cutoff | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 2 |
| Periods | Current Q3 2026, prior FY2025 | Latest balance sheet September 30, 2026 against December 31, 2025; nine months 2026 against nine months 2025; FY2025 audited | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8–9 |
| Statement coverage | Audited annual and unaudited interim | FY2025 statements carry an unqualified audit opinion; the three 2026 quarterly reports and all three releases are unaudited, and the releases use company-defined non-GAAP measures | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 128–129; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 6–7 |
| Legal documents | None supplied | Run settings declare no legal documents; indentures, credit agreements and the acquisition agreements are described in the filings but not supplied | Run settings (not issuer evidence) |
| Ratings, quotes, valuation, portfolio | None supplied | Run settings leave ratings, quotes, valuation inputs and portfolio limits blank | Run settings (not issuer evidence) |
| Overall readiness for the requested modules | READY_WITH_LIMITATIONS | Primary filings carry the statements, debt, liquidity, segment and business evidence the requested modules need; the limitations are listed under Gaps | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8–9, 16–17 and 59 |

### P3 - Input inventory
| Source | Format | Chunks supplied | Document family | Period or date covered | Entity | Version relationship |
|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cvi-20251231.htm.jsonl | Page-text extract of an HTML filing | 192 | Annual report | Year ended December 31, 2025, with FY2024 and FY2023 comparatives | CVR Energy, Inc. consolidated | Original; the only annual report supplied |
| 10-Q_2026-03-31_cvi-20260331.htm.jsonl | Page-text extract of an HTML filing | 59 | Quarterly report | Three months ended March 31, 2026 | CVR Energy, Inc. consolidated | Original; separate period from the other quarterly reports |
| 10-Q_2026-06-30_cvi-20260630.htm.jsonl | Page-text extract of an HTML filing | 58 | Quarterly report | Three and six months ended June 30, 2026 | CVR Energy, Inc. consolidated | Original; separate period from the other quarterly reports |
| 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Page-text extract of an HTML filing | 73 | Quarterly report | Three and nine months ended September 30, 2026 | CVR Energy, Inc. consolidated | Original; newest periodic report |
| EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl | Page-text extract of an HTML exhibit | 14 | Earnings release | Three months ended March 31, 2026 | CVR Energy, Inc. consolidated and by segment | Original; accompanies the first quarter report, not a duplicate of it |
| EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl | Page-text extract of an HTML exhibit | 11 | Earnings release | Three and six months ended June 30, 2026 | CVR Energy, Inc. consolidated and by segment | Original; accompanies the second quarter report, not a duplicate of it |
| EX-99.1_2026-11-03_d897437dex991.htm.jsonl | Page-text extract of an HTML exhibit | 12 | Earnings release | Three and nine months ended September 30, 2026 | CVR Energy, Inc. consolidated and by segment | Original; accompanies the third quarter report, not a duplicate of it |

### T2 - Source register
| Source | Document | Authority tier | Period or date | Perimeter | Quality label | Role in effective set | Limitation |
|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cvi-20251231.htm.jsonl | Annual report on Form 10-K | 1 - primary filing | FY2025, signed 2026-02-18 | Consolidated, with CVR Partners as a variable interest entity | Audited, complete text | Active content for FY2025 statements, notes and risk factors | Part III is incorporated from a proxy statement that is not supplied; segment presentation differs from 2026 reports |
| 10-Q_2026-03-31_cvi-20260331.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Q1 2026, signed 2026-04-29 | Consolidated | Unaudited, complete text | Active content for Q1 2026 | Condensed notes refer back to the annual report for debt terms |
| 10-Q_2026-06-30_cvi-20260630.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Q2 2026, signed 2026-07-29 | Consolidated | Unaudited, complete text | Active content for Q2 2026 | Condensed notes refer back to the annual report for debt terms |
| 10-Q_2026-09-30_cvi-20260930.htm.jsonl | Quarterly report on Form 10-Q | 1 - primary filing | Q3 2026, signed 2026-11-03 | Consolidated | Unaudited, complete text | Active content for the latest balance sheet and the pending acquisition | Acquisition terms are described, not supplied as executed documents |
| EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl | Press release, Exhibit 99.1 | 2 - issuer release | Q1 2026, dated 2026-04-29 | Consolidated and by segment | Unaudited, complete text | Active content for non-GAAP reconciliations; the filing controls where the two differ | Company-defined adjusted measures |
| EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl | Press release, Exhibit 99.1 | 2 - issuer release | Q2 2026, dated 2026-07-29 | Consolidated and by segment | Unaudited, complete text | Active content for non-GAAP reconciliations; the filing controls where the two differ | Company-defined adjusted measures |
| EX-99.1_2026-11-03_d897437dex991.htm.jsonl | Press release, Exhibit 99.1 | 2 - issuer release | Q3 2026, dated 2026-11-03 | Consolidated and by segment | Unaudited, complete text | Active content for non-GAAP reconciliations and the fourth quarter outlook; the filing controls where the two differ | Company-defined adjusted measures; the separately announced acquisition release is not supplied |

### T4 - Content-to-module map
| Module | Disposition | Evidence demand | Content located | Source | Readiness | Limitation |
|---|---|---|---|---|---|---|
| CP-1 Financial foundation | Recommended | Statements, debt by instrument, cash, leases, post-balance-sheet items, LTM bridge | Balance sheet, operations and cash flow statements; debt and finance lease note with facility table; liquidity build; LTM inputs from FY2025 plus nine-month comparatives | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 131–133 and 150–151; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 8–9, 16–17 and 59 | READY_WITH_LIMITATIONS | Pending acquisition is outside the balance sheet; no pro forma statements; fourth quarter 2025 is not supplied on its own |
| CP-1A Business & governance | Recommended | Business model, assets, ownership and control, related parties, management | Item 1 business description; segment note; controlling holder and perimeter; related-party note; signature pages and release quotations that show a chief executive and an interim chief financial officer change during 2026 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 17–43, 175–177; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11 and 73; 10-Q_2026-03-31_cvi-20260331.htm.jsonl, page 59; EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl, page 2; EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl, page 1 | READY_WITH_LIMITATIONS | Director independence, compensation and related-transaction detail are in a proxy statement that is not supplied |
| CP-2 Fundamental credit | Recommended | Operating drivers, risk factors, liquidity, acquisition risk, outlook | MD&A drivers, risk factors including acquisition risks, RFS waiver accounting, fourth quarter outlook | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 30–63 and 65–71; EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 10; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 43–85 | READY_WITH_LIMITATIONS | No ratings, market prices or peer financials; acquisition terms rest on the filing's description |
| CP-1B Earnings changes | Available, not in the requested route | Quarter and year comparisons, segment KPIs, guidance | Quarterly segment tables and prior-year comparatives in the three releases and the nine-month statements | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 1–2 and 7–9; EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl, pages 1–2; EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl, page 3 | READY_WITH_LIMITATIONS | Renewables restated into Other from 2026 while the annual report shows it separately |
| CP-1D Earnings quality | Available, not in the requested route | Non-GAAP reconciliations, one-offs, derivative and RFS items | EBITDA, adjusted EBITDA and free cash flow reconciliations; RFS obligation changes; unrealized derivative losses; inventory valuation impacts | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 10–11; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 56–57 | READY_WITH_LIMITATIONS | Adjustments are company-defined |
| CP-2D Liquidity | Available, not in the requested route | Cash, undrawn facilities net of letters of credit, expiries | Liquidity build and facility table with availability, letters of credit and maturity dates; minimum cash undertaking tied to the acquisition | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 16, 31 and 59 | READY_WITH_LIMITATIONS | Borrowing-base detail is in credit agreements that are not supplied |
| CP-3C Refinancing & LME | Available, not in the requested route | Maturity wall, 2026 refinancing, acquisition financing | February 2026 notes issuance, redemptions, term loan repayment, ABL amendment; commitments for a bridge facility and ABL upsizing | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 12 and 16–17; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 118–119 and 150–157 | READY_WITH_LIMITATIONS | Commitment letter terms are described, not supplied |
| CP-2E Rates, FX & hedging | Available, not in the requested route | Derivative positions, collateral triggers | Commodity derivative tables, fair values and rating-linked collateral language; no interest rate swap found | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 19–21; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 161–164 | READY_WITH_LIMITATIONS | Rating level that triggers collateral is not stated |
| CP-2A Downside and CP-2G Forward credit model | Available, not in the requested route | Scenario inputs, guidance, capital plan | Fourth quarter operating and capital expenditure outlook; 2026 capital expenditure estimates | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 10; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 60 | READY_WITH_LIMITATIONS | Scenario assumptions are blank in the run settings; guidance covers one quarter only |
| CP-4 Legal & covenants; CP-4A Covenant capacity; CP-4B Structural priority; CP-4D Intercreditor control; CP-4C Recovery & fulcrum | Blocked | Executed indentures, credit agreements, security and guarantee terms | Only summaries: fixed charge coverage test described in general terms, compliance statements, instrument list | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 150–159; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 17 | BLOCKED | No executed legal document is supplied, and a filing summary is not one |
| CP-2H Ratings & triggers | Blocked | Agency ratings, outlooks, rating-linked terms | Mention of 2024 downgrades without agency or level; derivative collateral triggers | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 63; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 19 | BLOCKED | No rating, agency or outlook is stated |
| CP-1C Peer benchmark | Blocked | Peer financial data and multiples | Peer group named in a performance graph only | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 87 | BLOCKED | No peer financials are supplied |
| CP-3D Market-implied risk | Blocked | Quotes, spreads, prices | None in the filings; run settings leave quotes blank | Run settings (not issuer evidence) | BLOCKED | No market data is supplied |
| CP-8 Changes since the last run | Inapplicable | An earlier run of the same issuer and pathway | Run settings state a first run of this pathway | Run settings (not issuer evidence) | Not applicable | No earlier run exists to compare |

### T6 - Evidence trace
| Claim | Value | Period | Source | Lineage class |
|---|---|---|---|---|
| Consolidated cash and cash equivalents | USD 1,278 million | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 | Directly Sourced |
| Total liquidity | USD 1.9 billion, being cash of USD 1.3 billion, USD 530 million available under the CVR Energy ABL and USD 45 million available under the CVR Partners ABL | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 59 | Directly Sourced |
| Total long-term debt and finance lease obligations, including current portion | USD 1,781 million | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 16 | Directly Sourced |
| Total long-term debt, including current portion, before finance leases | USD 1,720 million | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 59 | Directly Sourced |
| Finance lease bridge between the two debt totals | USD 61 million | At September 30, 2026 | calculation C2 | Calculated |
| Adjusted EBITDA, company-defined | USD 582 million | Q3 2026 | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 8 | Directly Sourced |
| Net income attributable to CVR Energy stockholders, including the removal of an RFS liability of USD 253 million | USD 570 million | Q3 2026 | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 1 | Directly Sourced |
| Pending acquisition, cash consideration, purchase agreement dated 2026-11-02 | approximately USD 4.2 billion | Agreement date 2026-11-02 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 11 | Directly Sourced |
| Committed acquisition financing | Senior secured 364-day bridge of up to USD 2.5 billion; ABL commitments up by USD 550 million to USD 1.1 billion; USD 800 million convertible preferred placement; up to USD 500 million of equity from the controlling holder | Agreement date 2026-11-02 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 12 | Directly Sourced |
| Minimum unrestricted cash undertaking | USD 500 million until closing or termination | From 2026-11-02 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 31 | Directly Sourced |
| Covenant compliance statement | The company and its subsidiaries were in compliance with all covenants | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 17 | Directly Sourced |
| Controlling holder | Icahn Enterprises L.P. and affiliates, approximately 71% of common stock | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 11 | Directly Sourced |
| Reporting perimeter | CVR Partners consolidated as a variable interest entity; approximately 37% of common units and 100% of general partner interests held by CVR Energy | At September 30, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11 and 13 | Directly Sourced |
| Debt held by the Nitrogen Fertilizer Segment | USD 570 million of USD 1.8 billion consolidated total debt and finance lease obligations | At September 30, 2026 | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 2 | Directly Sourced |
| Annual audit opinion | Unqualified opinion from Grant Thornton LLP, dated 2026-02-18 | FY2025 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 128–129 | Directly Sourced |
| Fourth quarter outlook | Petroleum throughput of 210,000 bpd to 225,000 bpd; total capital expenditures of USD 75 million to USD 95 million | Q4 2026 | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 10 | Directly Sourced |
| Credit ratings | Not supplied: the annual report says corporate credit ratings were downgraded in the second half of 2024 but names no agency, rating or outlook | Not stated | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 63 | Insufficient Information |
| Executed financing and acquisition documents | Not supplied: indentures, the two asset-based credit agreements, the purchase agreement, the debt commitment letter and the subscription agreements are described but not included | Not stated | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12 | Insufficient Information |
| Directors, compensation and related-transaction disclosures of Part III | Not supplied: incorporated by reference to the 2026 proxy statement | FY2025 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 180 | Insufficient Information |
| Market quotes, peer financials, valuation inputs and portfolio limits | Not supplied: the run settings leave them blank | Not stated | Run settings (not issuer evidence) | Insufficient Information |

### Events: Sources
| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-18 | day | 2026-02-18 | Annual report on Form 10-K for FY2025 signed, with the audit opinion of the same date | Historical — report and audit opinion dated February 18, 2026 | 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 191 | Sets the audited FY2025 baseline for debt, leases and cash requirements that later periods are measured against |
| 2026-04-29 | day | 2026-04-29 | First quarter 2026 results release issued | Historical — release dated April 29, 2026 | EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl, page 2 | Gives the first quarter segment results and non-GAAP reconciliations |
| 2026-04-29 | day | 2026-04-29 | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 signed | Historical — report signed April 29, 2026 | 10-Q_2026-03-31_cvi-20260331.htm.jsonl, page 59 | Gives the first quarter statements, debt note and liquidity |
| 2026-07-29 | day | 2026-07-29 | Second quarter 2026 results release issued | Historical — release dated July 29, 2026 | EX-99.1_2026-07-29_exhibit991-cviq22026earnin.htm.jsonl, page 1 | Gives the second quarter segment results and the June 30, 2026 cash and debt summary |
| 2026-07-29 | day | 2026-07-29 | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 signed | Historical — report signed July 29, 2026 | 10-Q_2026-06-30_cvi-20260630.htm.jsonl, page 58 | Gives the second quarter statements, debt note and liquidity |
| 2026-11-03 | day | 2026-11-03 | Third quarter 2026 results release issued | Historical — release dated November 3, 2026 | EX-99.1_2026-11-03_d897437dex991.htm.jsonl, page 1 | Latest results and fourth quarter outlook; announces the Marathon refinery purchase that the third quarter report describes |
| 2026-11-03 | day | 2026-11-03 | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 signed | Historical — report signed November 3, 2026 | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 73 | Newest periodic report, two days before the as-of date; carries the latest balance sheet and the acquisition financing description |

### Confidence inputs
| Input | Value |
|---|---|
| Directly Sourced | 15 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

## Calculations
| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Source chunks supplied | 192 + 59 + 58 + 73 + 14 + 11 + 12 | 419 chunks | Input inventory above |
| C2 | Finance lease bridge between the two debt totals at September 30, 2026, in USD millions | 1,781 less 1,720 = 61; cross-check 4 + 25 + 20 finance lease obligations net of current portion + 12 current portion = 61 | USD 61 million | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 15–16 and 59 |
| C3 | Age of the latest balance sheet at the as-of date | September 30, 2026 to October 31, 2026 = 31 days; October 31, 2026 to November 5, 2026 = 5 days | 36 days | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 8 |
| C4 | Age of the latest periodic report at the as-of date | November 3, 2026 to November 5, 2026 | 2 days | 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 73 |

## Gaps
- Executed financing and acquisition documents are not in the source set. The indentures for the 2028, 2031 and 2034 notes and for the 2028 nitrogen fertilizer notes, the two asset-based credit agreements, the Marathon purchase agreement, the debt commitment letter and the equity subscription agreements are described in the filings but not supplied, and the run settings declare no legal documents. Covenant terms are known only as the filings summarise them, so Legal & covenants, Covenant capacity, Structural priority, Intercreditor control and Recovery & fulcrum cannot be assessed. This is a material gap for those modules and a limitation, not a block, for the requested route.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12 and 17; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 150–159
- No pro forma financial statements or pro forma debt are supplied. The September 30, 2026 balance sheet predates the purchase agreement of November 2, 2026, and the effect of the bridge facility, the ABL upsizing and the equity placements on debt and cash is not established in these sources.
Basis: 10-Q_2026-09-30_cvi-20260930.htm.jsonl, pages 11–12
- No credit rating is supplied. The annual report says corporate credit ratings were downgraded in the second half of 2024, and the 2026 quarterly reports tie derivative collateral to downgrades below specified levels, but none names an agency, a rating or an outlook. Ratings & triggers is blocked.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 63; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 19
- Directors, executive compensation, security ownership and related-transaction disclosures of Part III are incorporated by reference to a 2026 proxy statement that is not supplied. The related-party note and the signature pages are the only governance evidence, so Business & governance rests on them.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 2 and 180
- No quotes, valuation inputs, peer financials or portfolio limits are supplied, because the run settings leave them blank. The annual report names six peers only in a stock performance graph. Peer benchmark and Market-implied risk are blocked.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, page 87
- Segment presentation differs between the annual report and the 2026 reports. From the first quarter of 2026 the renewables business is reported within Other with prior periods restated, while the annual report for 2025 still shows Renewables as a separate segment, so 2025 segment figures are not like for like across the two.
Basis: 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 175–176; 10-Q_2026-09-30_cvi-20260930.htm.jsonl, page 33; EX-99.1_2026-04-29_exhibit991-cviq12026earnin.htm.jsonl, page 2
- Two debt totals appear for September 30, 2026 and differ by the finance lease obligations: USD 1,781 million including them and USD 1,720 million before them. Neither is wrong; the definition must be stated wherever a debt figure is quoted.
Basis: calculation C2
- The interim reports and releases are unaudited, and the adjusted measures in the releases follow company-defined adjustments. The fourth quarter of 2025 is not supplied on its own, but a last-twelve-month period to September 30, 2026 can be built from the annual report and the comparatives in the third quarter report.
Basis: EX-99.1_2026-11-03_d897437dex991.htm.jsonl, pages 6–8; 10-K_2025-12-31_cvi-20251231.htm.jsonl, pages 132–133

## Next module
The orchestrator selects the next module.
