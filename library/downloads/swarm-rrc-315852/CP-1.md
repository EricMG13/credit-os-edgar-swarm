---
issuer_id: rrc-315852
module_id: CP-1
module_name: Financial foundation
analysis_date: 2026-11-18
run_id: rrc-315852-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# Financial foundation: Range Resources Corp (rrc-315852), as of 2026-11-18

## Request

Range Resources Corp (issuer rrc-315852), as of 2026-11-18, on the credit_snapshot pathway (the full credit assessment). The scope is the extraction and normalisation of the FY2024, FY2025 and 2026 year-to-date financial statements, debt and liquidity from the five supplied filings, and leverage, cover and cash flow measures to the latest balance sheet at 2026-09-30.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_rrc.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-25 | af3e831de20bab2e8080ac53dda18470e8ef8f51d3e7696ab46e2006adccede9 | FY2024 audited statements cross-checked against the FY2025 comparatives; covenant levels at 2024-12-31; undrawn letters of credit and commitments at 2024-12-31 |
| 10-K_2025-12-31_rrc.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 | b37e9894de70dc98ae33c4f54a3594fae7c9c0e322fe266547e1de92ee6e7584 | FY2025 and FY2024 audited statements, debt note, maturity schedule, covenant levels, supplemental cash flow note, FY2023 revenue |
| 10-Q_2026-03-31_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-21 | 8912ea8893f9e37355082bc56c57589bef2ab40f68df5a8272cfc97f1730383d | Read for Q1 2026 debt and liquidity; statements not tabulated |
| 10-Q_2026-06-30_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-21 | 61f21be4e900f20f2715526bd1eda19e12050235ef80f9e644e8da1f0cc2551e | Read for Q2 2026 debt and liquidity; statements not tabulated |
| 10-Q_2026-09-30_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-27 | 5f22b9d6b4ae8c0fa2605705fd5765842826e27b4fdbc6d3490b900d914c70da | Q3 2026, 9M 2026 and 9M 2025 statements, balance sheet at 2026-09-30, debt, liquidity, fair values, commitments and the subsequent-event note |

The supplied output of an earlier module of this run:

| Module | sha256 | Use |
|---|---|---|
| Source readiness (CP-0) | a39f13109b27fc59cddf9f4132f36ec672af9c672fbcdf0331d7ad63ac0f0d8c | Source tiers, period coverage and the limits on legal, ratings and market inputs |

Document dates are the signature dates printed in each filing.

## Findings

### Bottom line

Range's reported leverage is low and falling: carrying-value debt was 0.49x last-twelve-months EBITDA at 2026-09-30, against 2.33x at FY2024, so creditors face little balance-sheet leverage on the filings' own figures. That view rests on EBITDA derived in this analysis, because the issuer reports none, and it excludes USD 241.48 million of divestiture obligations; adding them and operating leases gives 0.73x.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–4, 16; 10-K_2025-12-31_rrc.htm.jsonl, pages 107–109; calculation C-33; calculation C-47

EBITDA covered cash interest paid 20.33x over the last twelve months. Liquidity is almost entirely the undrawn revolver, USD 1,540.90 million, because cash was only USD 12 thousand. The EQT merger signed after quarter end is excluded from every figure, and covenant headroom is not calculable.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 9, 18, 34; calculation C-35; calculation C-38

### Key findings

Carrying-value debt fell from USD 1,697.88 million at FY2024 to USD 1,198.33 million at FY2025 and USD 780.92 million at 2026-09-30, while derived EBITDA rose from USD 727.72 million to USD 1,307.05 million for FY2025 and USD 1,593.77 million over the last twelve months, so total debt over EBITDA moved from 2.33x to 0.92x to 0.49x. The FY2025 fall followed the repayment of the notes due 2025 at maturity from cash on hand and revolver borrowings, with revenue up 28.90%. In 9M 2026 the 8.25% notes due 2029 were redeemed using revolver borrowings, which rose by a net USD 176.00 million over the nine months, while operating cash flow of USD 1,161.75 million funded capital spending and shareholder returns. For creditors this means leverage is now set by shareholder-return and merger decisions rather than by operating strain.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, pages 107–109, 131; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–4, 8–9; calculation C-27; calculation C-30; calculation C-33; calculation C-53

EBITDA covered cash interest paid 6.40x in FY2024, 12.48x in FY2025 and 20.33x over the last twelve months, because cash interest paid fell from USD 113.68 million to USD 78.40 million as the higher-coupon notes were retired. Cash interest paid in 9M 2026 of USD 73.07 million exceeded interest expense of USD 48.46 million, consistent with the accrued interest balance falling from USD 31.93 million at FY2025 to USD 4.70 million, so the cash measure sits above the current expense run rate and understates cover going forward.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, pages 107, 140; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3, 16; calculation C-29; calculation C-32; calculation C-35; calculation C-08

Operating cash flow was USD 1,171.32 million in FY2025, or 0.90x of EBITDA, and total capital spending of USD 641.52 million, including acreage purchases, left free cash flow of USD 529.81 million, or 0.41x of EBITDA. In 9M 2026 reported EBITDA included derivative fair value income of USD 98.23 million against cash settlements received of USD 37.85 million, so USD 60.38 million, or 4.88% of EBITDA, was non-cash; in FY2025 income of USD 121.54 million and settlements of USD 122.67 million were close to neutral. Accrued liabilities and other absorbed USD 76.73 million in 9M 2026, the largest working-capital outflow of the period.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, pages 108–109; 10-Q_2026-09-30_rrc.htm.jsonl, pages 3–4; calculation C-18; calculation C-48; calculation C-49; calculation C-50

Cash was only USD 12 thousand at 2026-09-30 and USD 204 thousand at FY2025, so liquidity is the undrawn revolver: commitments of USD 2,000.00 million less USD 294.00 million drawn and USD 165.10 million of undrawn letters of credit leave USD 1,540.90 million, down from USD 1,716.80 million at FY2025 as net revolver borrowings rose by USD 176.00 million. The revolver is secured by substantially all assets, matures on 2030-10-02 and has a borrowing base of USD 3,000.00 million, above its commitments; the only other debt is USD 500.00 million of notes due 2030. Liquidity therefore depends on the lenders' continued commitments and compliance with covenants whose levels the interim reports do not print.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8–9, 34; 10-K_2025-12-31_rrc.htm.jsonl, pages 91, 130; calculation C-38; calculation C-37; calculation C-53

Total debt excludes USD 241.48 million of divestiture contract obligation, for gathering, transportation and processing contracts retained on the sale of the North Louisiana assets, and USD 137.34 million of operating lease liabilities, both shown on their own balance sheet lines. Adding both gives USD 1,159.74 million and 0.73x of last-twelve-months EBITDA, still low. Firm transportation, gathering and processing minimum commitments over the next 15 years also rose by about USD 1,500 million in 9M 2026, a fixed claim ahead of equity that no debt measure here includes.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3, 16–17; calculation C-44; calculation C-45; calculation C-46; calculation C-47

The merger agreement signed with EQT on 2026-10-25 is an all-stock transaction expected to close in Q1 2027. The quarterly report states no cash consideration, debt assumption or refinancing, so no pro forma net debt is stated and every figure here is before the merger. Termination fees of USD 423 million payable by Range and USD 1,148 million payable by EQT are contingent and are not adjustments to net debt.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 18–19

### Contrary evidence and what would change the view

The strongest evidence against reading Range as lightly levered is that reported EBITDA includes USD 60.38 million of non-cash derivative gains in 9M 2026 and excludes USD 241.48 million of divestiture obligations and USD 137.34 million of operating leases; with the obligations added, leverage is 0.73x rather than 0.49x, which is still low. Shareholder returns of USD 176.31 million in 9M 2026 were 28.24% of free cash flow of USD 624.25 million, so they do not strain leverage today. The view would weaken if buybacks and dividends outran free cash flow and the revolver funded the gap, or if lower prices turned derivative gains into losses; the pending merger could change the capital structure in ways the filings do not state.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 3–4, 16; calculation C-48; calculation C-47; calculation C-52

### Limitations

- EBITDA is derived because the filings report neither EBITDA nor an adjusted figure, and the covenant measure, EBITDAX as the credit agreement defines it, is not reconciled in any filing, so covenant headroom is not calculable.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, page 131; 10-Q_2026-09-30_rrc.htm.jsonl, page 34
- Interim figures are tabulated for 9M 2025, 9M 2026, Q3 2025 and Q3 2026 only; the Q1 and Q2 2026 reports were read for debt and liquidity but their balance sheets and statements are not tabulated.
- The security and legal rank of the notes, and the terms of the credit agreement, are not stated in the sources, so the debt stack by legal rank is not drawn.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 8–9; 10-K_2025-12-31_rrc.htm.jsonl, page 155
- Last-twelve-months figures combine an audited annual report with unaudited interim reports, and the interim statements carry no auditor report.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_rrc.htm.jsonl | Annual report on Form 10-K | FY2024 with FY2023 and FY2022 income and cash flow columns | USD | thousands | Range Resources Corporation and its subsidiaries, consolidated | US GAAP, successful efforts method | Tier 1 (audited statements) | Cross-check of FY2024 figures; covenant levels at 2024-12-31; facility at 2024-12-31 | Extracted text flattens tables to one cell per line |
| 10-K_2025-12-31_rrc.htm.jsonl | Annual report on Form 10-K | FY2025 with FY2024 and FY2023 income and cash flow columns; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | Range Resources Corporation and its subsidiaries, consolidated | US GAAP, successful efforts method | Tier 1 (audited statements) | FY2024 and FY2025 statements, debt note, covenant levels, supplemental cash flow note | Extracted text flattens tables to one cell per line |
| 10-Q_2026-03-31_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three months to 2026-03-31 | USD | thousands | Range Resources Corporation and its subsidiaries, consolidated | US GAAP, successful efforts method | Tier 2b (unaudited, no auditor report in the filing) | Read for debt and liquidity at 2026-03-31 | Statements not tabulated here |
| 10-Q_2026-06-30_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three and six months to 2026-06-30 | USD | thousands | Range Resources Corporation and its subsidiaries, consolidated | US GAAP, successful efforts method | Tier 2b (unaudited, no auditor report in the filing) | Read for debt and liquidity at 2026-06-30 | Statements not tabulated here |
| 10-Q_2026-09-30_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months to 2026-09-30, with 2025 comparatives; balance sheet at 2026-09-30 | USD | thousands | Range Resources Corporation and its subsidiaries, consolidated | US GAAP, successful efforts method | Tier 2b (unaudited, no auditor report in the filing) | 9M 2026, 9M 2025, Q3 2026 and Q3 2025 statements; latest balance sheet; debt, fair value, commitments, subsequent event | Extracted text flattens tables to one cell per line; unaudited |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Range Resources Corporation | Issuer and borrower under the bank credit facility | 12-31 | USD | thousands | Consolidated with its directly and indirectly owned subsidiaries | US GAAP | FY2022 to FY2025 income and cash flow; year-end balance sheets 2023 to 2025; Q1, Q2 and Q3 2026 with 2025 comparatives |
| Subsidiary guarantors of the notes and the bank credit facility | Guarantors, full and unconditional and joint and several, subject to release provisions | 12-31 | USD | thousands | Assets, liabilities and results not materially different from the consolidated statements | US GAAP | Same as the issuer |

The merger agreement signed on 2026-10-25 is a subsequent event to the 2026-09-30 balance sheet. It is excluded from every period figure and is flagged under the post-balance-sheet table.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 10, 18

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Money tables restate USD thousands as US$m | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Unit scale | 1,198,334 USD thousands | 1198.334 US$m | The money unit is millions; each figure is divided by 1,000 exactly, with no rounding | FY2024, FY2025, 2026-09-30 |
| EBITDA derived from components | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Calculated | Not supplied: no EBITDA is printed | 1,307,049 USD thousands for FY2025 | Income before income taxes plus interest plus depletion, depreciation and amortization; no add-backs, so derivative fair value income and the loss on early extinguishment stay in | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Total Debt built from balance sheet debt lines | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Calculated | Three separate lines | 780,918 USD thousands at 2026-09-30 | Current maturities plus bank debt net plus senior notes net, each net of unamortized issuance costs; leases and the divestiture obligation stay out | FY2024, FY2025, 9M 2026 |
| Last twelve months to 2026-09-30 | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Constructed period | FY2025, 9M 2026 and 9M 2025 separately | LTM EBITDA 1,593,769 USD thousands | FY2025 plus 9M 2026 less 9M 2025; every component is reported | 2026-09-30 |
| FY2024 taken from the FY2025 annual report comparatives | 10-K_2025-12-31_rrc.htm.jsonl; 10-K_2024-12-31_rrc.htm.jsonl | Source selection | FY2024 annual report columns | FY2025 annual report comparative columns | The two agree on net income, total assets, operating cash flow and cash at 2024-12-31; the later report carries the consistent line labels | FY2024 |
| Total capital expenditure follows the issuer definition | 10-Q_2026-09-30_rrc.htm.jsonl | Definition | Additions to properties only | Additions to properties plus field service assets plus acreage purchases | The Q3 report states 9M 2026 capital expenditure as reported in investing activities, which matches the three lines | FY2024, FY2025, 9M 2025, 9M 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Natural gas, NGLs and oil sales | 2,213,850 | 2,815,591 | 2,070,049 | 2,450,258 | 611,491 | 737,919 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Derivative fair value income | 56,726 | 121,535 | 88,736 | 98,229 | 92,946 | 58,118 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Brokered natural gas, NGLs and marketing (revenue) | 133,048 | 172,573 | 131,224 | 161,248 | 43,807 | 46,523 | USD thousands | Reported; the FY2025 annual report labels the line Brokered natural gas and marketing | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Other income | 13,460 | 5,816 | 5,348 | 832 | 284 | 266 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Total revenues and other income | 2,417,084 | 3,115,515 | 2,295,357 | 2,710,567 | 748,528 | 842,826 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Direct operating | 95,321 | 102,171 | 72,323 | 87,397 | 23,830 | 30,932 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Transportation, gathering, processing and compression | 1,177,925 | 1,223,324 | 911,933 | 990,075 | 301,110 | 349,934 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Taxes other than income | 21,625 | 32,822 | 23,087 | 20,103 | 8,265 | 7,354 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Brokered natural gas, NGLs and marketing (expense) | 140,545 | 185,554 | 142,068 | 165,666 | 48,882 | 48,206 | USD thousands | Reported; the FY2025 annual report labels the line Brokered natural gas and marketing | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Exploration | 26,843 | 30,179 | 22,424 | 18,481 | 8,105 | 5,953 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Abandonment and impairment of unproved properties | 8,417 | 28,936 | 16,254 | 14,232 | 4,899 | 5,774 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| General and administrative | 172,139 | 178,315 | 128,549 | 140,749 | 44,712 | 47,691 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Exit costs | 37,214 | 25,746 | 25,484 | 22,853 | 8,085 | 6,334 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Deferred compensation plan | 9,593 | 1,422 | 2,026 | 735 | -765 | -52 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Interest | 118,758 | 104,897 | 80,225 | 48,460 | 24,268 | 14,624 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Loss (gain) on early extinguishment of debt | -257 | -3 | -3 | 12,344 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; the FY2025 annual report labels the line Gain on early extinguishment of debt | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Depletion, depreciation and amortization | 358,356 | 370,462 | 275,866 | 283,657 | 93,793 | 102,049 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Total costs and expenses | 2,166,479 | 2,283,825 | 1,700,236 | 1,804,752 | 565,184 | 618,799 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Income before income taxes | 250,605 | 831,690 | 595,121 | 905,815 | 183,344 | 224,027 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Income tax expense (benefit): Current | 8,165 | 9,394 | 5,623 | 11,205 | -1,022 | 2,775 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Income tax expense (benefit): Deferred | -23,900 | 164,272 | 110,561 | 182,334 | 40,059 | 45,929 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Total income tax expense (benefit) | -15,735 | 173,666 | 116,184 | 193,539 | 39,037 | 48,704 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| Net income | 266,340 | 658,024 | 478,937 | 712,276 | 144,307 | 175,323 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| EBITDA (Reported) | 727,719 | 1,307,049 | 951,212 | 1,237,932 | 301,405 | 340,700 | USD thousands | Calculated: income before income taxes plus interest plus depletion, depreciation and amortization; the issuer states no EBITDA | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |

Range operates in one segment and reports no segment revenue, so no segment schedule is stated. The issuer states no adjusted EBITDA, so there are no add-backs.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, page 19

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 266,340 | 658,024 | 478,937 | 712,276 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Deferred income tax expense (benefit) | -23,900 | 164,272 | 110,561 | 182,334 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Depletion, depreciation and amortization | 358,356 | 370,462 | 275,866 | 283,657 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Abandonment and impairment of unproved properties | 8,417 | 28,936 | 16,254 | 14,232 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Derivative fair value income | -56,726 | -121,535 | -88,736 | -98,229 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Cash settlements on derivative financial instruments | 432,392 | 122,673 | 98,072 | 37,849 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Divestiture contract obligation, including accretion | 37,088 | 25,746 | 25,484 | 22,853 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Allowance for bad debt | 50 | Not supplied: the filing prints a dash | Not supplied: the line is not printed in this period's report | Not supplied: the line is not printed in this period's report | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Amortization of debt issuance costs and other | 4,526 | 4,079 | 2,996 | 3,464 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Deferred and stock-based compensation | 53,864 | 48,153 | 36,378 | 37,435 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Gain on the sale of assets | -311 | -261 | -158 | -32 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Loss (gain) on early extinguishment of debt | -257 | -3 | -3 | 12,344 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Changes in working capital: Accounts receivable | -19,586 | -56,398 | 63,063 | 56,514 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Other current assets | 3,676 | -3,016 | -5,084 | -10,794 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Accounts payable | -443 | 9,087 | 8,016 | -15,418 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Accrued liabilities and other | -118,972 | -78,895 | -107,828 | -76,733 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net cash provided from operating activities | 944,514 | 1,171,324 | 913,818 | 1,161,752 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Additions to natural gas, NGLs and oil properties | -570,426 | -581,489 | -433,415 | -506,436 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Additions to field service assets and other | -2,069 | -3,212 | -2,036 | -9,875 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Acreage purchases | -56,085 | -56,814 | -51,499 | -21,192 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Proceeds from disposal of assets | 313 | 187 | 161 | 67 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Purchases of marketable securities held by the deferred compensation plan | -41,798 | -23,117 | -18,459 | -7,119 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Proceeds from the sales of marketable securities held by the deferred compensation plan | 46,232 | 23,052 | 23,009 | 8,353 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net cash used in investing activities | -623,833 | -641,393 | -482,239 | -536,202 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Borrowings on credit facility | Not supplied: the filing prints a dash | 1,334,000 | 885,000 | 2,262,000 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Repayments on credit facility | Not supplied: the filing prints a dash | -1,216,000 | -756,000 | -2,086,000 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Repayment of senior notes | -79,272 | -608,699 | -608,699 | -608,250 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Dividends paid | -77,463 | -85,680 | -64,437 | -70,834 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Treasury stock purchases | -65,260 | -230,568 | -176,613 | -105,476 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Debt issuance costs | Not supplied: the filing prints a dash | -8,885 | Not supplied: the line is not printed in this period's report | Not supplied: the line is not printed in this period's report | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Taxes paid for employee shares withheld | -25,217 | -21,638 | -21,482 | -21,199 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Change in cash overdrafts | -1,084 | -8,921 | -5,798 | 1,758 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Proceeds from the sales of common stock held by the deferred compensation plan | 20,131 | 12,174 | 12,135 | 2,259 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net cash used in financing activities | -228,165 | -834,217 | -735,894 | -625,742 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 944,514 | 1,171,324 | 913,818 | 1,161,752 | USD thousands | Reported total | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -623,833 | -641,393 | -482,239 | -536,202 | USD thousands | Reported total | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -228,165 | -834,217 | -735,894 | -625,742 | USD thousands | Reported total | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Net Cash Change | 92,516 | -304,286 | -304,315 | -192 | USD thousands | Reported; operating plus investing plus financing, with no FX effect printed | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Opening Cash | 211,974 | 304,490 | 304,490 | 204 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Closing Cash | 304,490 | 204 | 175 | 12 | USD thousands | Reported | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| Cash Interest Paid | 113,679 | 104,719 | 99,385 | 73,068 | USD thousands | Reported in the supplemental cash flow note as interest paid; operating activities under US GAAP | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |
| Federal income taxes paid | 800 | 4,100 | 3,800 | 4,750 | USD thousands | Reported in the supplemental cash flow note, shown as a positive amount paid | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |
| State income taxes paid | 234 | 6,165 | 3,300 | 6,325 | USD thousands | Reported in the supplemental cash flow note, shown as a positive amount paid; Pennsylvania only | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |
| Cash Taxes Paid | 1,034 | 10,265 | 7,100 | 11,075 | USD thousands | Calculated: federal plus state taxes paid | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 304,490 | 204 | 12 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Accounts receivable, net of allowance | 302,212 | 358,687 | 302,264 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Derivative assets (current) | 84,479 | 53,645 | 121,379 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Prepaid assets | 12,722 | 9,930 | 20,899 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Other current assets | 17,558 | 22,014 | 21,860 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total current assets | 721,461 | 444,480 | 466,414 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Derivative assets (non-current) | 2,619 | 15,752 | 9,988 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Natural gas, NGLs and oil properties, net (successful efforts method) | 6,421,700 | 6,708,366 | 6,941,366 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Other property and equipment, net | 2,465 | 4,935 | 17,609 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Operating lease right-of-use assets | 119,838 | 173,477 | 130,583 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Other assets | 79,592 | 74,938 | 78,466 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total assets | 7,347,675 | 7,421,948 | 7,644,426 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Accounts payable | 133,132 | 164,352 | 144,875 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Asset retirement obligations (current) | 1,189 | 1,173 | 1,173 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Accrued liabilities | 289,148 | 322,102 | 335,707 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Deferred compensation liabilities (current) | 21,649 | 5,775 | 5,055 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Accrued interest | 36,920 | 31,934 | 4,701 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Derivative liabilities (current) | 9,634 | 1,196 | 2,547 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Operating lease liabilities (current) | 87,138 | 58,778 | 59,994 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Divestiture contract obligation (current) | 86,991 | 75,842 | 75,258 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Current maturities of long-term debt | 608,269 | Not supplied: the filing prints a dash | Not supplied: the line is not printed in this period's report | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total current liabilities | 1,274,070 | 661,152 | 629,310 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Bank debt, net of unamortized debt issuance costs | Not supplied: the filing prints a dash | 106,700 | 284,484 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Senior notes, net of unamortized debt issuance costs | 1,089,614 | 1,091,634 | 496,434 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Deferred tax liabilities | 541,378 | 701,601 | 883,926 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Derivative liabilities (non-current) | 10,488 | 2,363 | 2,602 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Deferred compensation liabilities (non-current) | 65,233 | 68,635 | 70,773 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Operating lease liabilities (non-current) | 35,737 | 115,515 | 77,345 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Asset retirement obligations and other liabilities | 137,181 | 153,081 | 161,376 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Divestiture contract obligation (non-current) | 257,317 | 202,586 | 166,225 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total liabilities | 3,411,018 | 3,103,267 | 2,772,475 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Preferred stock | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Common stock | 2,674 | 2,686 | 2,696 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Common stock held in treasury, at cost | -513,941 | -746,486 | -852,633 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 5,927,893 | 5,971,258 | 5,989,619 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive income | 611 | 424 | 389 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Retained deficit | -1,480,580 | -909,201 | -268,120 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total stockholders' equity | 3,936,657 | 4,318,681 | 4,871,951 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total liabilities and stockholders' equity | 7,347,675 | 7,421,948 | 7,644,426 | USD thousands | Reported; FY2024 and FY2025 from the FY2025 annual report, 9M 2026 from the Q3 2026 report | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total Assets | 7,347,675 | 7,421,948 | 7,644,426 | USD thousands | Reported total | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total Liabilities | 3,411,018 | 3,103,267 | 2,772,475 | USD thousands | Reported total | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total Equity | 3,936,657 | 4,318,681 | 4,871,951 | USD thousands | Reported total stockholders equity; no temporary equity or minority interest is printed | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Total Debt | 1,697,883 | 1,198,334 | 780,918 | USD thousands | Calculated carrying value: current maturities of long-term debt plus bank debt net plus senior notes net, each net of unamortized issuance costs; the FY2024 bank debt dash is nil borrowings per the debt note | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 304,490 | 204 | 12 | USD thousands | Reported cash and cash equivalents | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bank credit facility | Secured revolving credit facility | 284,484 | 294,000 | 294,000 | 2,000,000 | Secured by substantially all of the issuer's assets | Not supplied: no source states its legal rank against the notes | USD | 284,484 | Not applicable | SOFR plus 1.75% or ABR plus 0.75% at 2026-09-30; weighted average rate 5.5% for 2026 to date | Floating | SOFR or ABR | 175 | Not applicable | 2030-10-02 | 0 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8–9; 10-K_2025-12-31_rrc.htm.jsonl, page 92 |
| 4.75% senior notes due 2030 | Senior notes | 496,434 | 500,000 | Not applicable | Not applicable | Not supplied: no source states whether the notes are secured | Not supplied: no source states the legal rank | USD | 496,434 | Not applicable | 4.75% | Fixed | Not applicable | Not applicable | Not applicable | 2030 | 0 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8; 10-K_2025-12-31_rrc.htm.jsonl, page 92 |

The bank credit facility has a maximum facility amount of USD 4,000,000 thousand and a borrowing base of USD 3,000,000 thousand; the commitment is USD 2,000,000 thousand. Undrawn letters of credit of USD 165,100 thousand are not debt and reduce availability. The carrying values add to Total Debt of USD 780,918 thousand; the 8.25% senior notes due 2029 were redeemed in January 2026 and are not outstanding at the balance sheet date.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8–9

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-09-30 | USD 1,307.049m | USD 1,237.932m | USD 951.212m | USD 1,593.769m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Derived EBITDA in each component; all three components reported |
| Cash Interest Paid | LTM to 2026-09-30 | USD 104.719m | USD 73.068m | USD 99.385m | USD 78.402m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | From the supplemental cash flow notes; 9M 2026 includes the January 2026 coupon on the redeemed notes |
| Total revenues and other income | LTM to 2026-09-30 | USD 3,115.515m | USD 2,710.567m | USD 2,295.357m | USD 3,530.725m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Includes derivative fair value income and brokered revenue |
| Net income | LTM to 2026-09-30 | USD 658.024m | USD 712.276m | USD 478.937m | USD 891.363m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | After a loss on early extinguishment of debt of USD 12.344m in 9M 2026 |
| Interest expense | LTM to 2026-09-30 | USD 104.897m | USD 48.460m | USD 80.225m | USD 73.132m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Income statement interest, not cash paid |
| Net cash provided from operating activities | LTM to 2026-09-30 | USD 1,171.324m | USD 1,161.752m | USD 913.818m | USD 1,419.258m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | After working capital changes |
| Total capital expenditure | LTM to 2026-09-30 | USD 641.515m | USD 537.503m | USD 486.950m | USD 692.068m | Calculated | 10-K_2025-12-31_rrc.htm.jsonl; 10-Q_2026-09-30_rrc.htm.jsonl | Additions to properties, field service assets and acreage purchases |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 1697.883 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 / 2024-12-31 | USD | US$m | 2.33 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| Net debt / EBITDA | Net debt (Total Debt less cash) / EBITDA (Reported) | 1393.393 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 / 2024-12-31 | USD | US$m | 1.91 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 113.679 | 10-K_2025-12-31_rrc.htm.jsonl, page 140 | FY2024 / 2024-12-31 | USD | US$m | 6.40 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 1198.334 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 / 2025-12-31 | USD | US$m | 0.92 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| Net debt / EBITDA | Net debt (Total Debt less cash) / EBITDA (Reported) | 1198.130 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 / 2025-12-31 | USD | US$m | 0.92 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 104.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 140 | FY2025 / 2025-12-31 | USD | US$m | 12.48 | Calculated | Tier 1 (audited) | EBITDA is derived (income before income taxes plus interest plus DD&A); includes derivative fair value income and unadjusted items |
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 780.918 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 0.49 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | EBITDA is last twelve months (FY2025 plus 9M 2026 less 9M 2025), derived; includes derivative fair value income and a loss on early extinguishment of USD 12.344 million |
| Net debt / EBITDA | Net debt (Total Debt less cash) / EBITDA (Reported) | 780.906 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 0.49 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | EBITDA is last twelve months (FY2025 plus 9M 2026 less 9M 2025), derived; includes derivative fair value income and a loss on early extinguishment of USD 12.344 million |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | 78.402 | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 | 2026-09-30 | USD | US$m | 20.33 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | EBITDA is last twelve months (FY2025 plus 9M 2026 less 9M 2025), derived; includes derivative fair value income and a loss on early extinguishment of USD 12.344 million |
| FCF conversion | Free cash flow / EBITDA (Reported) | 315.934 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | 0.43 | Calculated | Tier 1 (audited) | Free cash flow is operating cash flow less total capital expenditure including acreage purchases |
| FCF conversion | Free cash flow / EBITDA (Reported) | 529.809 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 0.41 | Calculated | Tier 1 (audited) | Free cash flow is operating cash flow less total capital expenditure including acreage purchases |
| FCF conversion | Free cash flow / EBITDA (Reported) | 727.190 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | LTM 2026-09-30 | USD | US$m | 0.46 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Free cash flow is operating cash flow less total capital expenditure including acreage purchases |
| Operating cash flow / EBITDA | Net cash from operating activities / EBITDA (Reported) | 944.514 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | 1.30 | Calculated | Tier 1 (audited) | Derived EBITDA; operating cash flow is after working capital changes |
| Operating cash flow / EBITDA | Net cash from operating activities / EBITDA (Reported) | 1171.324 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 0.90 | Calculated | Tier 1 (audited) | Derived EBITDA; operating cash flow is after working capital changes |
| Operating cash flow / EBITDA | Net cash from operating activities / EBITDA (Reported) | 1419.258 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | LTM 2026-09-30 | USD | US$m | 0.89 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Derived EBITDA; operating cash flow is after working capital changes |
| Operating cash flow / total debt | Net cash from operating activities / Total Debt (carrying value) | 944.514 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 1697.883 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | FY2024 | USD | US$m | 0.56 | Calculated | Tier 1 (audited) | Carrying-value debt excludes the divestiture contract obligation and operating leases |
| Operating cash flow / total debt | Net cash from operating activities / Total Debt (carrying value) | 1171.324 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 1198.334 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | FY2025 | USD | US$m | 0.98 | Calculated | Tier 1 (audited) | Carrying-value debt excludes the divestiture contract obligation and operating leases |
| Operating cash flow / total debt | Net cash from operating activities / Total Debt (carrying value) | 1419.258 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 | 780.918 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 | LTM 2026-09-30 | USD | US$m | 1.82 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Carrying-value debt excludes the divestiture contract obligation and operating leases |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less total capital expenditure) / Cash Interest Paid | 99.139 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 113.679 | 10-K_2025-12-31_rrc.htm.jsonl, page 140 | FY2024 | USD | US$m | 0.87 | Calculated | Tier 1 (audited) | Total capital expenditure includes acreage purchases; cash interest paid, not interest expense |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less total capital expenditure) / Cash Interest Paid | 665.534 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 104.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 140 | FY2025 | USD | US$m | 6.36 | Calculated | Tier 1 (audited) | Total capital expenditure includes acreage purchases; cash interest paid, not interest expense |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) less total capital expenditure) / Cash Interest Paid | 901.701 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 | 78.402 | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 | LTM 2026-09-30 | USD | US$m | 11.50 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Total capital expenditure includes acreage purchases; cash interest paid, not interest expense |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt (carrying value) | 1639.190 | 10-K_2024-12-31_rrc.htm.jsonl, pages 86, 123; 10-K_2025-12-31_rrc.htm.jsonl, page 107 | 1697.883 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | FY2024 | USD | US$m | 0.97 | Calculated | Tier 1 (audited) | Undrawn committed facilities are commitments less drawn borrowings and undrawn letters of credit; the borrowing base is not the limit |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt (carrying value) | 1717.004 | 10-K_2025-12-31_rrc.htm.jsonl, pages 91, 107, 130 | 1198.334 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | FY2025 | USD | US$m | 1.43 | Calculated | Tier 1 (audited) | Undrawn committed facilities are commitments less drawn borrowings and undrawn letters of credit; the borrowing base is not the limit |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt (carrying value) | 1540.912 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 9, 34 | 780.918 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | 1.97 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Undrawn committed facilities are commitments less drawn borrowings and undrawn letters of credit; the borrowing base is not the limit |
| Capex / revenue | Total capital expenditure / Total revenues and other income | 628.580 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 2417.084 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | 0.26 | Calculated | Tier 1 (audited) | Total capital expenditure includes acreage purchases and field service assets |
| Capex / revenue | Total capital expenditure / Total revenues and other income | 641.515 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 | 3115.515 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 0.21 | Calculated | Tier 1 (audited) | Total capital expenditure includes acreage purchases and field service assets |
| Capex / revenue | Total capital expenditure / Total revenues and other income | 692.068 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 | 3530.725 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | LTM 2026-09-30 | USD | US$m | 0.20 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Total capital expenditure includes acreage purchases and field service assets |
| EBITDA margin | EBITDA (Reported) / Total revenues and other income x 100 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 2417.084 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | 30.11 | Calculated | Tier 1 (audited) | Revenue includes derivative fair value income and brokered revenue |
| EBITDA margin | EBITDA (Reported) / Total revenues and other income x 100 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 3115.515 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 41.95 | Calculated | Tier 1 (audited) | Revenue includes derivative fair value income and brokered revenue |
| EBITDA margin | EBITDA (Reported) / Total revenues and other income x 100 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | 3530.725 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | LTM 2026-09-30 | USD | US$m | 45.14 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Revenue includes derivative fair value income and brokered revenue |
| Revenue growth | FY2024 revenue / FY2023 revenue - 1 | 2417.084 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 3374.872 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | -0.2838 | Calculated | Tier 1 (audited) | Total revenues and other income including derivative fair value income |
| Revenue growth | FY2025 revenue / FY2024 revenue - 1 | 3115.515 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | 2417.084 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 0.2890 | Calculated | Tier 1 (audited) | Total revenues and other income including derivative fair value income |
| Adjusted total debt / EBITDA | (Total Debt + divestiture contract obligation + operating lease liabilities) / EBITDA (Reported) | 2165.066 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 727.719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2024 | USD | US$m | 2.98 | Calculated | Tier 1 (audited) | Adds balance sheet obligations that the issuer presents outside its debt lines; an analyst measure, not the issuer's or the covenant definition |
| Adjusted total debt / EBITDA | (Total Debt + divestiture contract obligation + operating lease liabilities) / EBITDA (Reported) | 1651.055 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 | 1307.049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 | FY2025 | USD | US$m | 1.26 | Calculated | Tier 1 (audited) | Adds balance sheet obligations that the issuer presents outside its debt lines; an analyst measure, not the issuer's or the covenant definition |
| Adjusted total debt / EBITDA | (Total Debt + divestiture contract obligation + operating lease liabilities) / EBITDA (Reported) | 1159.740 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 | 1593.769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 | LTM 2026-09-30 | USD | US$m | 0.73 | Calculated | Tier 1 audited FY2025 with Tier 2b unaudited 2026 and 2025 interim | Adds balance sheet obligations that the issuer presents outside its debt lines; an analyst measure, not the issuer's or the covenant definition |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM 2026-09-30 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Leverage | Total debt / EBITDA (x) | 2.33 | 0.92 | 0.49 | Improving | Carrying-value debt over derived EBITDA; LTM at 2026-09-30 |
| Leverage | Net debt / EBITDA (x) | 1.91 | 0.92 | 0.49 | Improving | Cash is near zero, so net and gross are close |
| Leverage | Adjusted total debt / EBITDA (x) | 2.98 | 1.26 | 0.73 | Improving | Adds the divestiture contract obligation and operating leases; an analyst measure |
| Coverage | EBITDA / cash interest (x) | 6.40 | 12.48 | 20.33 | Improving | Cash interest paid, not expense |
| Cash flow | Free cash flow (US$m) | 315.934 | 529.809 | 727.190 | Improving | Operating cash flow less total capital expenditure including acreage purchases |
| Cash flow | Free cash flow / EBITDA (x) | 0.43 | 0.41 | 0.46 | Stable | Capital spending absorbs more than half of EBITDA |
| Cash flow | Operating cash flow / EBITDA (x) | 1.30 | 0.90 | 0.89 | Lower than FY2024 | Working capital and derivative timing move this ratio |
| Liquidity | Cash plus undrawn committed facilities (US$m) | 1639.190 | 1717.004 | 1540.912 | Lower than FY2025 | Almost all undrawn revolver; cash was USD 0.012m at 2026-09-30 |
| Liquidity | Liquidity / total debt (x) | 0.97 | 1.43 | 1.97 | Higher than FY2025 | Debt fell faster than liquidity |
| Margin | EBITDA margin (%) | 30.11 | 41.95 | 45.14 | Improving | EBITDA over total revenues and other income |
| Growth | Revenue growth (fraction) | -0.2838 | 0.2890 | Not calculable: the prior twelve-month period is not tabulated | Recovered in FY2025 | Total revenues and other income including derivative fair value income |
| Operating | Average daily production (mcfe per day) | 2,175,504 | 2,235,776 | Not calculable: quarterly volumes for the twelve months are not tabulated | Rising | 9M 2026 averaged 2,335,381 mcfe per day against 2,208,577 in 9M 2025 |
| Market value | Fair value of the 4.75% senior notes due 2030 (US$m) | 469.285 | 493.895 | 475.130 | Lower than FY2025 | Level 2 fair value on end-of-period market quotes against principal of 500.000 US$m |

Production figures are period-flow rates and the fair value is a period-end balance; other rows are ratios or last-twelve-months flows.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, pages 82, 133; 10-Q_2026-09-30_rrc.htm.jsonl, pages 12, 23

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA: income before income taxes plus interest plus depletion, depreciation and amortization, unadjusted | No EBITDA or adjusted EBITDA is printed; the credit agreement covenant uses EBITDAX, defined in the credit agreement and not reconciled | The annual report prints a covenant ceiling of 3.75x debt to EBITDAX; the quarterly reports state compliance only | All periods | 9M 2026 EBITDA includes USD 60.380m of non-cash derivative gain (4.88% of EBITDA); exploration expense of USD 18.481m in 9M 2026 and abandonment and impairment of unproved properties of USD 14.232m are not added back, which an EBITDAX measure would add | Fundamental credit; Liquidity; Legal & covenants | Use derived reported EBITDA for ratios; do not infer covenant headroom; obtain the credit agreement definitions |
| Total debt | Balance sheet carrying value, net of issuance costs | Debt note prints principal of 794,000 thousand and total debt net of issuance costs of 780,918 thousand | Debt note against balance sheet | 2026-09-30 | Difference of 13,082 thousand of unamortized issuance costs, 1.65% of principal; leverage on principal is 0.50x against 0.49x | Fundamental credit | Use carrying value 780,918 thousand; keep principal 794,000 thousand beside it |
| Total debt | Excludes lease liabilities the issuer presents on their own lines | Divestiture contract obligation of 241,483 thousand and operating lease liabilities of 137,339 thousand sit on separate balance sheet lines | Balance sheet presentation | 2026-09-30 | Adding both lifts total debt over EBITDA from 0.49x to 0.73x; the divestiture obligation is a gathering, transportation and processing commitment with no future benefit, running into 2030 | Fundamental credit; Liquidity | Keep both out of Total Debt; show the adjusted measure beside it |
| Capital expenditure | Total capital expenditure: additions to properties, field service assets and acreage purchases | Investing line additions to natural gas, NGLs and oil properties of 506,436 thousand for 9M 2026; the report states capital expenditure of 537.5 million reported in investing activities | Cash flow line against the MD&A figure | 9M 2026 | Difference of 31,067 thousand between the property additions line and total capital expenditure of 537,503 thousand; no maintenance and growth split is disclosed | Fundamental credit | Use total capital expenditure including acreage purchases |
| Interest | Cash interest paid for coverage | Income statement interest expense | Supplemental cash flow note against the income statement | 9M 2026 | Interest paid of 73,068 thousand against expense of 48,460 thousand, a difference of 24,608 thousand; FY2025 paid 104,719 thousand against expense 104,897 thousand | Fundamental credit | Use cash interest paid as the cover denominator as the method states |
| Redemption of the 8.25% senior notes due 2029 | One event, all figures shown with their roles | Principal 600,000 thousand (debt note); cash paid 608,250 thousand at 101.375% of par (cash flow statement); loss on early extinguishment 12,344 thousand (income statement), which includes the premium of 8,250 thousand and the remaining unamortized issuance costs | Debt note, cash flow statement and income statement | 9M 2026 | The loss stays inside EBITDA (Reported); principal drives the debt reduction, cash paid drives the cash flow, and the loss is a P and L charge | Fundamental credit; Refinancing & LME | Use principal for debt, 608,250 thousand for cash and keep the loss in unadjusted EBITDA |
| Transportation, gathering and processing commitments | Not debt; a fixed commitment | Minimum commitments over the next 15 years increased by approximately USD 1.5 billion in 9M 2026, previously disclosed as contingent on construction | Commitments note | 9M 2026 | Not quantified in a table in the quarterly report; outside every debt measure here | Fundamental credit; Liquidity | Carry as an off-debt claim and do not add to debt |

The figures in this register come from the debt note, the cash flow note and the quarterly report.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 3–4, 8–9, 16–17; 10-K_2025-12-31_rrc.htm.jsonl, page 131

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage, cover and cash flow measures to 2026-09-30 | Ready with Limitations | EBITDA is derived; interim ratios use last-twelve-months figures built from the FY2025 annual report and the Q3 2026 report; interim statements are unaudited | Obtain the issuer's EBITDAX reconciliation if one exists |
| Liquidity at 2026-09-30 | Ready with Limitations | Undrawn capacity is commitments less drawn borrowings and undrawn letters of credit; the credit agreement terms and any borrowing base redetermination conditions are not supplied | Supply the credit agreement |
| Covenant headroom | Not Ready | Covenant levels are printed only in the annual reports; EBITDAX is not reconciled; compliance is stated without figures in the quarterly reports | Supply the credit agreement and the latest compliance certificate |
| Debt stack by legal rank | Not Ready | Security and legal rank of the notes are not stated; the bank facility is stated as secured but its rank against the notes is not | Supply the indenture and the credit agreement |
| Pro forma capital structure for the EQT merger | Not Ready | The quarterly report states no cash consideration, debt assumption or refinancing | Supply the merger agreement and EQT filings |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1697.883 | 304.490 | 1393.393 | US$m | Gross debt is Total Debt at balance-sheet carrying value: current maturities of long-term debt plus bank debt net plus senior notes net, each net of unamortized issuance costs; contractual principal is USD 1708.702m beside it. No lease or finance lease obligation is carried inside the debt lines; operating lease liabilities and the divestiture contract obligation stay outside. |
| FY2025 / 2025-12-31 | 1198.334 | 0.204 | 1198.130 | US$m | Gross debt is Total Debt at balance-sheet carrying value: current maturities of long-term debt plus bank debt net plus senior notes net, each net of unamortized issuance costs; contractual principal is USD 1218.000m beside it. No lease or finance lease obligation is carried inside the debt lines; operating lease liabilities and the divestiture contract obligation stay outside. |
| 2026-09-30 | 780.918 | 0.012 | 780.906 | US$m | Gross debt is Total Debt at balance-sheet carrying value: current maturities of long-term debt plus bank debt net plus senior notes net, each net of unamortized issuance costs; contractual principal is USD 794.000m beside it. No lease or finance lease obligation is carried inside the debt lines; operating lease liabilities and the divestiture contract obligation stay outside. |

Net debt is gross debt less cash; the post-balance-sheet table gives the only stated event after the 2025-12-31 balance sheet.
Basis: 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108, 129; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2.33 | 1.91 | x | Carrying-value debt over derived reported EBITDA for the fiscal year |
| FY2025 / 2025-12-31 | 0.92 | 0.92 | x | Carrying-value debt over derived reported EBITDA for the fiscal year |
| 2026-09-30 | 0.49 | 0.49 | x | Carrying-value debt at 2026-09-30 over derived reported EBITDA, last twelve months to 2026-09-30 (FY2025 plus 9M 2026 less 9M 2025) |

The 2026-09-30 row uses last-twelve-months EBITDA built from the FY2025 annual report and the Q3 2026 report, and EBITDA is derived because the issuer reports none.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 6.40 | x | Derived reported EBITDA over cash interest paid for the fiscal year |
| FY2025 / 2025-12-31 | 12.48 | x | Derived reported EBITDA over cash interest paid for the fiscal year |
| 2026-09-30 | 20.33 | x | Derived reported EBITDA over cash interest paid, last twelve months to 2026-09-30 (FY2025 plus 9M 2026 less 9M 2025) |

Cash interest paid in the last-twelve-months row includes accrued interest paid on the 8.25% notes when they were redeemed in January 2026, so cover on the current debt is higher than shown.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 304.490 | 1334.700 | US$m | Cash plus undrawn committed facilities: commitments USD 1500.0m less drawn USD 0m less undrawn letters of credit USD 165.3m; the borrowing base of USD 3,000.0m is not the limit |
| FY2025 / 2025-12-31 | 0.204 | 1716.800 | US$m | Cash plus undrawn committed facilities: commitments USD 2000.0m less drawn USD 118.0m less undrawn letters of credit USD 165.2m; the borrowing base of USD 3,000.0m is not the limit |
| 2026-09-30 | 0.012 | 1540.900 | US$m | Cash plus undrawn committed facilities: commitments USD 2000.0m less drawn USD 294.0m less undrawn letters of credit USD 165.1m; the borrowing base of USD 3,000.0m is not the limit |

Availability depends on the lenders' continued commitments and on covenant compliance, whose terms are not supplied.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2030 | 794.000 | US$m | Principal outstanding at 2026-09-30: bank debt of USD 294.000m maturing 2030-10-02 and the 4.75% senior notes due 2030 of USD 500.000m; the Q3 report prints no maturity schedule, and no other debt is carried, so no earlier year has a maturity |

The ladder is drawn from the instruments' stated maturity years, not from a printed schedule.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 794.000 | -13.082 | 780.918 | US$m | Principal is bank debt 294.000 plus senior notes 500.000; the reconciling item is the unamortized debt issuance costs of 13.082 (bank 9.516 and notes 3.566); no debt is left out of the ladder |

No qualification.

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Redemption of the 8.25% senior notes due 2029 at 101.375% of par, funded by revolver borrowings | 2026-01-15 | 8.250 | 1206.380 | 0.92 | US$m | Event after the 2025-12-31 balance sheet; the premium of USD 8.250m is the only change to FY2025 net debt, since the 600.000m principal moved from notes to the revolver; accrued interest, cash flow and other events from January 2026 are not reflected; already inside the 2026-09-30 balance sheet. No event after 2026-09-30 that changes net debt is stated: the EQT merger, expected to close in Q1 2027, is all-stock and its termination fees are contingent |

The pro forma figures adjust only FY2025 year-end net debt for this event and are not an estimate of the 2026-09-30 position.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2417.084 | 727.719 | US$m | Total revenues and other income; the EBITDA column is derived EBITDA (Reported), an unadjusted house calculation, because the issuer states no adjusted EBITDA; twelve months |
| FY2025 / 2025-12-31 | 3115.515 | 1307.049 | US$m | Total revenues and other income; the EBITDA column is derived EBITDA (Reported), unadjusted; twelve months |
| 2026-09-30 | 3530.725 | 1593.769 | US$m | Total revenues and other income and derived EBITDA (Reported), unadjusted; last twelve months to 2026-09-30 (FY2025 plus 9M 2026 less 9M 2025); twelve months |

Revenue includes derivative fair value income, which is non-cash to the extent it exceeds settlements.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no facility has a legal rank stated in the sources | Not supplied: the credit agreement and indenture are not supplied | Not supplied: the notes' security is not stated | Not supplied: no rank, so no ordered amount | Not supplied: no rank, so no cumulative leverage | US$m | The bank credit facility is stated as secured by substantially all assets with USD 294.000m drawn, and the 4.75% senior notes due 2030 have USD 500.000m principal; no source states their legal rank against each other, and both are named under Gaps |

No qualification.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | Not supplied: the issuer states no adjusted EBITDA, so no bridge can be stated | US$m | The first row is the reported measure; derived EBITDA (Reported) for FY2025 is USD 1307.049m but no adjusted measure exists to bridge to |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA and no add-backs | US$m | The last row is the issuer-adjusted measure, which the filings do not state |

No qualification.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit |
|---|---|---|---|---|
| Total revenues and other income | 2417.084 | 3115.515 | 3530.725 | US$m |
| EBITDA (Reported), derived | 727.719 | 1307.049 | 1593.769 | US$m |
| EBITDA margin | 30.11 | 41.95 | 45.14 | % |
| Net income | 266.340 | 658.024 | 891.363 | US$m |
| Net cash from operating activities | 944.514 | 1171.324 | 1419.258 | US$m |
| Total capital expenditure | 628.580 | 641.515 | 692.068 | US$m |
| Free cash flow | 315.934 | 529.809 | 727.190 | US$m |
| Cash interest paid | 113.679 | 104.719 | 78.402 | US$m |
| Total Debt (carrying value) | 1697.883 | 1198.334 | 780.918 | US$m |
| Cash | 304.490 | 0.204 | 0.012 | US$m |
| Net debt | 1393.393 | 1198.130 | 780.906 | US$m |
| Total debt / EBITDA | 2.33 | 0.92 | 0.49 | x |
| Net debt / EBITDA | 1.91 | 0.92 | 0.49 | x |
| EBITDA / cash interest | 6.40 | 12.48 | 20.33 | x |
| Undrawn committed facilities | 1334.700 | 1716.800 | 1540.900 | US$m |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 36 |
| Calculated | 58 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 9 |
| Fields present | 23 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 9 |

## Calculations

All amounts are in the unit stated in the row. Rows C-01 to the last C row show each calculation with its inputs; the rows marked P show each figure the narrative quotes, rounded to two decimals from the exact value beside it. Each ratio is numerator divided by denominator, half up.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C-01 | EBITDA (Reported) FY2024, USD thousands | Income before income taxes 250,605 plus interest 118,758 plus depletion, depreciation and amortization 358,356 | 727,719 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 |
| C-02 | EBITDA (Reported) FY2025, USD thousands | Income before income taxes 831,690 plus interest 104,897 plus depletion, depreciation and amortization 370,462 | 1,307,049 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 |
| C-03 | EBITDA (Reported) 9M 2025, USD thousands | Income before income taxes 595,121 plus interest 80,225 plus depletion, depreciation and amortization 275,866 | 951,212 | 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-04 | EBITDA (Reported) 9M 2026, USD thousands | Income before income taxes 905,815 plus interest 48,460 plus depletion, depreciation and amortization 283,657 | 1,237,932 | 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-05 | EBITDA (Reported) Q3 2025, USD thousands | Income before income taxes 183,344 plus interest 24,268 plus depletion, depreciation and amortization 93,793 | 301,405 | 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-06 | EBITDA (Reported) Q3 2026, USD thousands | Income before income taxes 224,027 plus interest 14,624 plus depletion, depreciation and amortization 102,049 | 340,700 | 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-07 | LTM EBITDA (Reported) to 2026-09-30, USD thousands | FY2025 1,307,049 plus 9M 2026 1,237,932 less 9M 2025 951,212 | 1,593,769 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-08 | LTM cash interest paid to 2026-09-30, USD thousands | FY2025 104,719 plus 9M 2026 73,068 less 9M 2025 99,385 | 78,402 | 10-K_2025-12-31_rrc.htm.jsonl, page 140; 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |
| C-09 | LTM total revenues and other income to 2026-09-30, USD thousands | FY2025 3,115,515 plus 9M 2026 2,710,567 less 9M 2025 2,295,357 | 3,530,725 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-10 | LTM net income to 2026-09-30, USD thousands | FY2025 658,024 plus 9M 2026 712,276 less 9M 2025 478,937 | 891,363 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-11 | LTM net cash from operating activities to 2026-09-30, USD thousands | FY2025 1,171,324 plus 9M 2026 1,161,752 less 9M 2025 913,818 | 1,419,258 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-12 | Total capital expenditure FY2024, USD thousands | Additions to natural gas, NGLs and oil properties 570,426 plus additions to field service assets and other 2,069 plus acreage purchases 56,085 | 628,580 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 |
| C-13 | Total capital expenditure FY2025, USD thousands | Additions to natural gas, NGLs and oil properties 581,489 plus additions to field service assets and other 3,212 plus acreage purchases 56,814 | 641,515 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 |
| C-14 | Total capital expenditure 9M 2025, USD thousands | Additions to natural gas, NGLs and oil properties 433,415 plus additions to field service assets and other 2,036 plus acreage purchases 51,499 | 486,950 | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-15 | Total capital expenditure 9M 2026, USD thousands | Additions to natural gas, NGLs and oil properties 506,436 plus additions to field service assets and other 9,875 plus acreage purchases 21,192 | 537,503 | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-16 | LTM total capital expenditure to 2026-09-30, USD thousands | FY2025 641,515 plus 9M 2026 537,503 less 9M 2025 486,950 | 692,068 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-17 | Free cash flow FY2024 (operating cash flow less total capital expenditure), USD thousands | Operating cash flow 944,514 less total capital expenditure 628,580 | 315,934 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 |
| C-18 | Free cash flow FY2025 (operating cash flow less total capital expenditure), USD thousands | Operating cash flow 1,171,324 less total capital expenditure 641,515 | 529,809 | 10-K_2025-12-31_rrc.htm.jsonl, page 109 |
| C-19 | Free cash flow 9M 2026 (operating cash flow less total capital expenditure), USD thousands | Operating cash flow 1,161,752 less total capital expenditure 537,503 | 624,249 | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-20 | LTM free cash flow to 2026-09-30, USD thousands | LTM operating cash flow 1,419,258 less LTM total capital expenditure 692,068 | 727,190 | 10-K_2025-12-31_rrc.htm.jsonl, page 109; 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-21 | Total Debt at 2024-12-31 (carrying value), USD thousands | Current maturities of long-term debt 608,269 plus bank debt net 0 plus senior notes net 1,089,614 | 1,697,883 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 |
| C-22 | Total Debt at 2025-12-31 (carrying value), USD thousands | Current maturities of long-term debt 0 plus bank debt net 106,700 plus senior notes net 1,091,634 | 1,198,334 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 |
| C-23 | Total Debt at 2026-09-30 (carrying value), USD thousands | Current maturities of long-term debt 0 plus bank debt net 284,484 plus senior notes net 496,434 | 780,918 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 |
| C-24 | Net debt at 2024-12-31, USD millions | Gross debt 1697.883 less cash 304.490 | 1393.393 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 |
| C-25 | Net debt at 2025-12-31, USD millions | Gross debt 1198.334 less cash 0.204 | 1198.130 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 |
| C-26 | Net debt at 2026-09-30, USD millions | Gross debt 780.918 less cash 0.012 | 780.906 | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 |
| C-27 | Total debt / EBITDA, FY2024 / 2024-12-31 | Numerator 1697.883 divided by denominator 727.719, USD millions | 2.33x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-28 | Net debt / EBITDA, FY2024 / 2024-12-31 | Numerator 1393.393 divided by denominator 727.719, USD millions | 1.91x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-29 | EBITDA / cash interest, FY2024 / 2024-12-31 | Numerator 727.719 divided by denominator 113.679, USD millions | 6.40x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-30 | Total debt / EBITDA, FY2025 / 2025-12-31 | Numerator 1198.334 divided by denominator 1307.049, USD millions | 0.92x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-31 | Net debt / EBITDA, FY2025 / 2025-12-31 | Numerator 1198.130 divided by denominator 1307.049, USD millions | 0.92x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-32 | EBITDA / cash interest, FY2025 / 2025-12-31 | Numerator 1307.049 divided by denominator 104.719, USD millions | 12.48x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-33 | Total debt / EBITDA, 2026-09-30 | Numerator 780.918 divided by denominator 1593.769, USD millions | 0.49x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-34 | Net debt / EBITDA, 2026-09-30 | Numerator 780.906 divided by denominator 1593.769, USD millions | 0.49x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-35 | EBITDA / cash interest, 2026-09-30 | Numerator 1593.769 divided by denominator 78.402, USD millions | 20.33x | Calculated from the EBITDA, cash interest and net debt rows above |
| C-36 | Undrawn committed facilities at 2024-12-31, USD millions | Commitments 1500.0 less drawn 0 less undrawn letters of credit 165.3 | 1334.700 | 10-K_2024-12-31_rrc.htm.jsonl, pages 86, 123 |
| C-37 | Undrawn committed facilities at 2025-12-31, USD millions | Commitments 2000.0 less drawn 118.0 less undrawn letters of credit 165.2 | 1716.800 | 10-K_2025-12-31_rrc.htm.jsonl, pages 91, 130 |
| C-38 | Undrawn committed facilities at 2026-09-30, USD millions | Commitments 2000.0 less drawn 294.0 less undrawn letters of credit 165.1 | 1540.900 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 9, 34 |
| C-39 | Liquidity at 2026-09-30 (cash plus undrawn committed facilities), USD millions | Cash 0.012 plus undrawn committed facilities 1540.9 | 1540.912 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 9, 34 |
| C-40 | Liquidity at 2025-12-31 (cash plus undrawn committed facilities), USD millions | Cash 0.204 plus undrawn committed facilities 1716.8 | 1717.004 | 10-K_2025-12-31_rrc.htm.jsonl, pages 107, 130 |
| C-41 | Contractual principal at 2026-09-30, USD millions | Bank debt 294.000 plus 4.75% senior notes 500.000 | 794.000 | 10-Q_2026-09-30_rrc.htm.jsonl, page 8 |
| C-42 | Unamortized debt issuance costs at 2026-09-30, USD millions | Bank debt principal 294.000 less carrying 284.484 equals 9.516; senior notes principal 500.000 less carrying 496.434 equals 3.566; total 13.082 (printed as 13,082 thousand) | -13.082 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 8 |
| C-43 | Carrying value check at 2026-09-30, USD millions | Principal 794.000 plus reconciling items -13.082 | 780.918 | 10-Q_2026-09-30_rrc.htm.jsonl, page 8 |
| C-44 | Divestiture contract obligation at 2026-09-30, USD thousands | Current 75,258 plus non-current 166,225; the exit cost note prints the same 241,483 | 241,483 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3, 16 |
| C-45 | Operating lease liabilities at 2026-09-30, USD thousands | Current 59,994 plus non-current 77,345 | 137,339 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| C-46 | Debt plus divestiture obligation plus operating leases at 2026-09-30, USD millions | Total Debt 780.918 plus divestiture obligation 241.483 plus operating leases 137.339 | 1159.740 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3, 16 |
| C-47 | Adjusted total debt / LTM EBITDA at 2026-09-30 | Debt plus divestiture obligation plus operating leases 1159.740 divided by LTM EBITDA 1593.769 | 0.73x | Calculated from the rows above |
| C-48 | Non-cash derivative gain inside 9M 2026 EBITDA, USD thousands | Derivative fair value income 98,229 less cash settlements received 37,849 | 60,380 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 3–4 |
| C-49 | Non-cash derivative gain as a share of 9M 2026 EBITDA | 60,380 divided by 1,237,932 | 4.88% | Calculated from the rows above |
| C-50 | Derivative fair value income less cash settlements FY2025, USD thousands | Derivative fair value income 121,535 less cash settlements received 122,673 | -1,138 | 10-K_2025-12-31_rrc.htm.jsonl, pages 108–109 |
| C-51 | Shareholder returns 9M 2026, USD thousands | Treasury stock purchases 105,476 plus dividends paid 70,834 | 176,310 | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-52 | Shareholder returns as a share of 9M 2026 free cash flow | 176,310 divided by 624,249 | 28.24% | Calculated from the rows above |
| C-53 | Net revolver borrowings 9M 2026, USD thousands | Borrowings 2,262,000 less repayments 2,086,000 | 176,000 | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| C-54 | Revenue growth FY2025 | Total revenues and other income 3,115,515 divided by FY2024 2,417,084 less 1 | 0.2890 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 |
| C-55 | Revenue growth FY2024 | Total revenues and other income 2,417,084 divided by FY2023 3,374,872 less 1 | -0.2838 | 10-K_2025-12-31_rrc.htm.jsonl, page 108 |
| C-56 | EBITDA margin FY2025 | EBITDA 1,307,049 divided by total revenues and other income 3,115,515 | 41.95% | Calculated from the rows above |
| C-57 | Redemption premium on the 8.25% senior notes due 2029, USD thousands | Redemption price 101.375% of 600,000 equals 608,250 less principal 600,000 | 8,250 | 10-K_2025-12-31_rrc.htm.jsonl, page 131; 10-Q_2026-09-30_rrc.htm.jsonl, pages 4, 9 |
| C-58 | Pro forma net debt at 2025-12-31 after the January 2026 redemption, USD millions | Net debt 1198.130 plus premium 8.250 | 1206.380 | Calculated from the rows above |
| C-59 | Pro forma net debt / EBITDA at 2025-12-31 | 1206.380 divided by FY2025 EBITDA 1307.049 | 0.92x | Calculated from the rows above |
| C-60 | Residual of the 9M 2026 loss on early extinguishment after the premium, USD thousands | Printed loss 12,344 less premium 8,250; the filing says the loss includes the remaining unamortized issuance costs but does not print them separately | 4,094 | 10-Q_2026-09-30_rrc.htm.jsonl, pages 3, 9 |
| C-61 | LTM interest expense to 2026-09-30, USD thousands | FY2025 104,897 plus 9M 2026 48,460 less 9M 2025 80,225 | 73,132 | 10-K_2025-12-31_rrc.htm.jsonl, page 108; 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| C-reg | Calculation register rows | Each row of the calculation register states its numerator and denominator; the Calculated Value is numerator divided by denominator to two decimals, or to four decimals for revenue growth | See the register | Calculated from the register rows |
| P-01 | Narrative figure: LTM EBITDA | Exact value 1593.769 US$m; rounded half up to two decimals | USD 1,593.77 million | Calculated from the rows above |
| P-02 | Narrative figure: Total debt / LTM EBITDA at 2026-09-30 | Exact value 0.49; rounded half up to two decimals | 0.49x | Calculated from the rows above |
| P-03 | Narrative figure: Total debt / EBITDA FY2024 | Exact value 2.33; rounded half up to two decimals | 2.33x | Calculated from the rows above |
| P-04 | Narrative figure: Total debt / EBITDA FY2025 | Exact value 0.92; rounded half up to two decimals | 0.92x | Calculated from the rows above |
| P-05 | Narrative figure: EBITDA / cash interest LTM | Exact value 20.33; rounded half up to two decimals | 20.33x | Calculated from the rows above |
| P-06 | Narrative figure: EBITDA / cash interest FY2024 | Exact value 6.40; rounded half up to two decimals | 6.40x | Calculated from the rows above |
| P-07 | Narrative figure: EBITDA / cash interest FY2025 | Exact value 12.48; rounded half up to two decimals | 12.48x | Calculated from the rows above |
| P-08 | Narrative figure: Adjusted total debt / LTM EBITDA | Exact value 0.73; rounded half up to two decimals | 0.73x | Calculated from the rows above |
| P-09 | Narrative figure: Divestiture contract obligation at 2026-09-30 | Exact value 241.483 US$m; rounded half up to two decimals | USD 241.48 million | Calculated from the rows above |
| P-10 | Narrative figure: Operating lease liabilities at 2026-09-30 | Exact value 137.339 US$m; rounded half up to two decimals | USD 137.34 million | Calculated from the rows above |
| P-11 | Narrative figure: Undrawn committed facilities at 2026-09-30 | Exact value 1540.9 US$m; rounded half up to two decimals | USD 1,540.90 million | Calculated from the rows above |
| P-12 | Narrative figure: Cash at 2026-09-30 | Exact value 12 USD thousand; rounded half up to two decimals | USD 12 thousand | Calculated from the rows above |
| P-13 | Narrative figure: Cash at 2025-12-31 | Exact value 204 USD thousand; rounded half up to two decimals | USD 204 thousand | Calculated from the rows above |
| P-14 | Narrative figure: Total Debt FY2024 | Exact value 1697.883 US$m; rounded half up to two decimals | USD 1,697.88 million | Calculated from the rows above |
| P-15 | Narrative figure: Total Debt FY2025 | Exact value 1198.334 US$m; rounded half up to two decimals | USD 1,198.33 million | Calculated from the rows above |
| P-16 | Narrative figure: Total Debt 2026-09-30 | Exact value 780.918 US$m; rounded half up to two decimals | USD 780.92 million | Calculated from the rows above |
| P-17 | Narrative figure: EBITDA FY2024 | Exact value 727.719 US$m; rounded half up to two decimals | USD 727.72 million | Calculated from the rows above |
| P-18 | Narrative figure: EBITDA FY2025 | Exact value 1307.049 US$m; rounded half up to two decimals | USD 1,307.05 million | Calculated from the rows above |
| P-19 | Narrative figure: Revenue growth FY2025 | Exact value 0.288956031317074623802896383; rounded half up to two decimals | 28.90% | Calculated from the rows above |
| P-20 | Narrative figure: Net revolver borrowings 9M 2026 | Exact value 176.000 US$m; rounded half up to two decimals | USD 176.00 million | Calculated from the rows above |
| P-21 | Narrative figure: Operating cash flow 9M 2026 | Exact value 1161.752 US$m; rounded half up to two decimals | USD 1,161.75 million | Calculated from the rows above |
| P-22 | Narrative figure: Cash interest paid FY2024 | Exact value 113.679 US$m; rounded half up to two decimals | USD 113.68 million | Calculated from the rows above |
| P-23 | Narrative figure: LTM cash interest paid | Exact value 78.402 US$m; rounded half up to two decimals | USD 78.40 million | Calculated from the rows above |
| P-24 | Narrative figure: Cash interest paid 9M 2026 | Exact value 73.068 US$m; rounded half up to two decimals | USD 73.07 million | Calculated from the rows above |
| P-25 | Narrative figure: Interest expense 9M 2026 | Exact value 48.460 US$m; rounded half up to two decimals | USD 48.46 million | Calculated from the rows above |
| P-26 | Narrative figure: Accrued interest at 2025-12-31 | Exact value 31.934 US$m; rounded half up to two decimals | USD 31.93 million | Calculated from the rows above |
| P-27 | Narrative figure: Accrued interest at 2026-09-30 | Exact value 4.701 US$m; rounded half up to two decimals | USD 4.70 million | Calculated from the rows above |
| P-28 | Narrative figure: Operating cash flow FY2025 | Exact value 1171.324 US$m; rounded half up to two decimals | USD 1,171.32 million | Calculated from the rows above |
| P-29 | Narrative figure: Operating cash flow / EBITDA FY2025 | Exact value 0.90; rounded half up to two decimals | 0.90x | Calculated from the rows above |
| P-30 | Narrative figure: Total capital expenditure FY2025 | Exact value 641.515 US$m; rounded half up to two decimals | USD 641.52 million | Calculated from the rows above |
| P-31 | Narrative figure: Free cash flow FY2025 | Exact value 529.809 US$m; rounded half up to two decimals | USD 529.81 million | Calculated from the rows above |
| P-32 | Narrative figure: FCF conversion FY2025 | Exact value 0.41; rounded half up to two decimals | 0.41x | Calculated from the rows above |
| P-33 | Narrative figure: Derivative fair value income 9M 2026 | Exact value 98.229 US$m; rounded half up to two decimals | USD 98.23 million | Calculated from the rows above |
| P-34 | Narrative figure: Cash settlements on derivatives 9M 2026 | Exact value 37.849 US$m; rounded half up to two decimals | USD 37.85 million | Calculated from the rows above |
| P-35 | Narrative figure: Non-cash derivative gain 9M 2026 | Exact value 60.380 US$m; rounded half up to two decimals | USD 60.38 million | Calculated from the rows above |
| P-36 | Narrative figure: Non-cash derivative gain share of 9M 2026 EBITDA | Exact value 0.04877489232041824591334580575; rounded half up to two decimals | 4.88% | Calculated from the rows above |
| P-37 | Narrative figure: Derivative fair value income FY2025 | Exact value 121.535 US$m; rounded half up to two decimals | USD 121.54 million | Calculated from the rows above |
| P-38 | Narrative figure: Cash settlements on derivatives FY2025 | Exact value 122.673 US$m; rounded half up to two decimals | USD 122.67 million | Calculated from the rows above |
| P-39 | Narrative figure: Accrued liabilities and other outflow 9M 2026 | Exact value 76.733 US$m; rounded half up to two decimals | USD 76.73 million | Calculated from the rows above |
| P-40 | Narrative figure: Revolver commitments | Exact value 2000.0 US$m; rounded half up to two decimals | USD 2,000.00 million | Calculated from the rows above |
| P-41 | Narrative figure: Revolver drawn at 2026-09-30 | Exact value 294.0 US$m; rounded half up to two decimals | USD 294.00 million | Calculated from the rows above |
| P-42 | Narrative figure: Undrawn letters of credit at 2026-09-30 | Exact value 165.1 US$m; rounded half up to two decimals | USD 165.10 million | Calculated from the rows above |
| P-43 | Narrative figure: Undrawn committed facilities at 2025-12-31 | Exact value 1716.8 US$m; rounded half up to two decimals | USD 1,716.80 million | Calculated from the rows above |
| P-44 | Narrative figure: Borrowing base | Exact value 3000 US$m; rounded half up to two decimals | USD 3,000.00 million | Calculated from the rows above |
| P-45 | Narrative figure: 4.75% senior notes principal | Exact value 500.000 US$m; rounded half up to two decimals | USD 500.00 million | Calculated from the rows above |
| P-46 | Narrative figure: Shareholder returns 9M 2026 | Exact value 176.310 US$m; rounded half up to two decimals | USD 176.31 million | Calculated from the rows above |
| P-47 | Narrative figure: Free cash flow 9M 2026 | Exact value 624.249 US$m; rounded half up to two decimals | USD 624.25 million | Calculated from the rows above |
| P-48 | Narrative figure: Shareholder returns share of 9M 2026 free cash flow | Exact value 0.2824353743458139300183100013; rounded half up to two decimals | 28.24% | Calculated from the rows above |
| P-49 | Narrative figure: Debt plus divestiture obligation plus operating leases | Exact value 1159.740 US$m; rounded half up to two decimals | USD 1,159.74 million | Calculated from the rows above |
| P-50 | Narrative figure: Transport commitments increase | Exact value USD 1.5 billion approximately (Q3 report); rounded half up to two decimals | USD 1,500 million | Calculated from the rows above |
| P-51 | Narrative figure: Termination fee payable by Range | Exact value USD 423 million (Q3 report); rounded half up to two decimals | USD 423 million | Calculated from the rows above |
| P-52 | Narrative figure: Termination fee payable by EQT | Exact value USD 1.148 billion (Q3 report); rounded half up to two decimals | USD 1,148 million | Calculated from the rows above |

## Gaps

- The executed credit agreement and the indentures are not supplied, so covenant definitions, borrowing base mechanics, change-of-control terms and guarantee release terms are not read from the governing documents; this restricts covenant capacity and the legal rank of the debt. Severity: High. Action: supply the executed credit agreement and the indenture for the notes due 2030.
- Covenant headroom at 2026-09-30 is not calculable: the annual report prints a debt to EBITDAX ceiling of 3.75x and a minimum current ratio of 1.0x as of FY2025, EBITDAX as the credit agreement defines it is not reconciled in any filing, and the quarterly reports state compliance without figures. Severity: High. Action: supply the latest compliance certificate.
- The issuer states no EBITDA, no adjusted EBITDA and no add-backs, so EBITDA is derived, the EBITDA bridge is not stated and comparison with an issuer-adjusted or lender measure is restricted. Severity: Medium. Action: obtain an earnings release or investor presentation with a reconciliation.
- The legal rank of the bank credit facility against the senior notes, and whether the notes are secured, are not stated in the sources, so both facilities are left out of the debt stack. Severity: Medium. Action: supply the indenture and the credit agreement.
- No pro forma capital structure is stated for the merger with EQT, and the quarterly report states no cash consideration, debt assumption or refinancing, so net debt after the merger is not established. Severity: High. Action: supply the merger agreement and EQT's filings.
- No split of capital expenditure between maintenance and growth is disclosed, so free cash flow is stated after total capital expenditure including acreage purchases. Severity: Medium. Action: obtain the issuer's capital budget detail.
- Cells the filings print as a dash are written as not supplied and are not read as zero: Loss (gain) on early extinguishment of debt in Q3 2025; Loss (gain) on early extinguishment of debt in Q3 2026; Current maturities of long-term debt at FY2025; Current maturities of long-term debt at 9M 2026 (no such line in the report); Bank debt, net of unamortized debt issuance costs at FY2024; Preferred stock at FY2024; Preferred stock at FY2025; Preferred stock at 9M 2026; Allowance for bad debt in FY2025; Borrowings on credit facility in FY2024; Repayments on credit facility in FY2024; Debt issuance costs in FY2024. Lines that a period's report does not print are also not supplied: Allowance for bad debt in 9M 2025; Allowance for bad debt in 9M 2026; Debt issuance costs in 9M 2025; Debt issuance costs in 9M 2026. Where the debt note states no borrowings, as for bank debt in FY2024, the dash is nil in substance. Severity: Low. Action: none needed for the ratios, which do not depend on these cells.
- The Q1 and Q2 2026 statements and a stand-alone Q4 2025 quarter are not tabulated, so debt at 2026-03-31 and 2026-06-30 and a Q4 2025 result are not stated; the last-twelve-months figures are built from the annual report and the nine-month figures and do not need them. Severity: Low. Action: tabulate them if a quarterly trend is needed.
- Range reports one operating segment, so no segment schedule is stated. Severity: Low. Action: none.
- This module corrects the Source readiness statement that no bond or loan quotes were supplied: the Q3 report prints end-of-period fair values of the senior notes based on market quotes, USD 475.13 million against USD 500.00 million of principal for the notes due 2030 at 2026-09-30, and the annual report prints the equivalent figures for 2025 and 2024. They are fair-value disclosures, not dated quotes or spreads, so market-implied work stays limited to them. Severity: Low. Action: supply dated quotes.
- The schedule of undrawn letters of credit, USD 165.10 million in total, is not supplied, so what they secure is not established. Severity: Low. Action: supply the facility's letter-of-credit schedule.
- Asset retirement obligations of USD 157.02 million and deferred compensation liabilities of USD 75.83 million at 2026-09-30 sit outside Total Debt and are not added to any leverage measure. Severity: Low. Action: none unless a credit view treats them as debt-like.

## Next module

The orchestrator selects the next module.
