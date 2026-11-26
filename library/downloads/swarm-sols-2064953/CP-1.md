---
module_id: CP-1
issuer_id: sols-2064953
issuer_name: Solstice Advanced Materials Inc.
analysis_date: 2026-11-18
run_id: sols-2064953-2026-11-18-credit_snapshot-host
---

## Request
Build the financial foundation for Solstice Advanced Materials Inc. (sols-2064953) as of 2026-11-18 under the credit snapshot pathway. Scope is FY2025 and the first three quarters of 2026 on consolidated, carrying-value debt, reported and issuer-adjusted EBITDA, cash generation, liquidity and dated post-quarter events.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_sols.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, audited (document date is the signature date) | 2026-02-19 | 7c90189e70a6693a7cc324c40b85457fdc856116fd3a16fc8bcdb68065fc95c8 | Controlling audited FY2025 statements, adjusted EBITDA reconciliation, debt note, covenant levels, maturity table, leases, supplemental cash flow. |
| 10-Q_2026-03-31_sols.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026, unaudited (document date is the signature date) | 2026-05-06 | 0e9644bfc053ce8beea466130dc15e0ca471878de4ba901a02c5c1aab4722e0d | Q1 2026 statements, balance sheet at 2026-03-31, debt note, reconciliation of Adjusted EBITDA. |
| 10-Q_2026-06-30_sols.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026, unaudited (document date is the signature date) | 2026-07-30 | d2f3784944d0ae597e996d939fde4ad3228ce1aedb334fa1e125a1baba01a5d2 | Q2 and H1 2026 statements, balance sheet at 2026-06-30, debt note, reconciliation of Adjusted EBITDA, subsequent events. |
| 10-Q_2026-09-30_sols.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026, unaudited (document date is the signature date) | 2026-11-04 | cd58fecc2014e34722b591ed5e78e80d986546bfb738a4bfb7fe8fd47ec0e23f | Latest statements, balance sheet at 2026-09-30, debt note, liquidity, terminated merger, buyback and dividend. |
| PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl | Preliminary information statement (Exhibit 99.1 to Amendment No. 1 to the Form 10 registration statement), dated 30 September 2025 | 2025-09-30 | 5c12b6bf98006137ff203cff7f0f47241eeeaf296c5188fe8e8e0a0d507cf928 | Pre-spin description of the 2033 notes (interest dates, redemption, escrow) only; no pre-spin figure is used. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 60f638c62282b8a817a15cc44cacee8ab71e62bac73ca931766853f66415490f | Source inventory, reporting basis break at 2025-10-30, source dates and the gaps in executed debt documents, ratings and market data; no financial balance or ratio imported. |

No external sources were used.

## Findings

### Bottom line

Leverage is moderate at 2.25x total debt and 1.44x net debt to reported LTM EBITDA at 30 September 2026, but the improvement since year-end is cash-driven, and the buyback will draw on that cash.
Reported EBITDA for the twelve months is USD 873 million against USD 895 million in FY2025, while net debt fell from USD 1,438 million to USD 1,253 million as cash rose by USD 180 million.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 6–8; 10-K_2025-12-31_sols.htm.jsonl, pages 114–116; calculation C02; calculation C04; calculation C08

No cash interest figure is printed for any period, so interest cover cannot be stated on a cash basis; interest expense for the nine months includes USD 34 million of fees for the terminated Element Solutions acquisition. Free cash flow of USD 446 million for the twelve months is flattered by working capital and should not be extrapolated.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8, 10–11; calculation C07; calculation C12; calculation C13

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_sols.htm.jsonl | Annual Form 10-K | FY2025 with FY2024 and FY2023 comparatives; periods before 2025-10-30 carve-out | USD | millions | Solstice Advanced Materials Inc. consolidated, including the 50% owned ConverDyn joint venture | US GAAP | Tier 1 audited statements; non-GAAP schedules are management's | FY2025 statements, debt note, covenant levels, maturity table, supplemental cash flow | Mixed carve-out and consolidated basis; interest on the new debt covers only the months after issuance |
| 10-Q_2026-03-31_sols.htm.jsonl | Quarterly Form 10-Q | Three months to 2026-03-31 with 2025 comparatives | USD | millions | Same | US GAAP | Tier 2b unaudited | Q1 2026 and Q1 2025 stubs; balance sheet at 2026-03-31 | Comparative quarter is carve-out basis |
| 10-Q_2026-06-30_sols.htm.jsonl | Quarterly Form 10-Q | Three and six months to 2026-06-30 with 2025 comparatives | USD | millions | Same | US GAAP | Tier 2b unaudited | H1 2026 and H1 2025 stubs; balance sheet at 2026-06-30; subsequent events to 2026-07-30 | Comparative periods are carve-out basis |
| 10-Q_2026-09-30_sols.htm.jsonl | Quarterly Form 10-Q | Three and nine months to 2026-09-30 with 2025 comparatives | USD | millions | Same | US GAAP | Tier 2b unaudited | 9M 2026, 9M 2025 and Q3 stubs; balance sheet at 2026-09-30; liquidity and post-quarter dividend | No subsequent-events note; some items recast to current presentation |
| PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl | Preliminary information statement | Pre-spin; terms of the planned 2033 notes | USD | millions | Business of Honeywell, pre-spin | US GAAP carve-out | Tier 1 by type, superseded for current facts | Notes terms only | Preliminary and subject to completion; no figure from it is used in a table |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Solstice Advanced Materials Inc. | Issuer, registrant, borrower under the credit agreement and issuer of the 5.625% senior notes due 2033 | December 31 | USD | millions | Consolidated subsidiaries, including variable interest entities where it is primary beneficiary and noncontrolling interests | US GAAP; periods before 2025-10-30 are combined carve-out statements allocated from Honeywell, later periods consolidated | FY2025; 9M 2026; 9M 2025; Q3 2026; Q3 2025; H1 2026; H1 2025; Q1 2026; Q1 2025; balance sheets at 2025-12-31, 2026-03-31, 2026-06-30, 2026-09-30 |
| Domestic wholly owned subsidiaries | Guarantors of the senior credit facilities and, on an unsecured basis, of the notes | December 31 | USD | millions | Names not supplied; no stand-alone figures | Not supplied: no guarantor financial statements | Not supplied: no stand-alone periods |
| ConverDyn | 50% owned joint venture, consolidated variable interest entity; noncontrolling interest holds the other 50% | December 31 | USD | millions | Fully consolidated in the issuer's statements, including its cash and its product loans | US GAAP | Balance-sheet totals at 2025-12-31 and 2026-09-30 only |
| Honeywell International Inc. | Former parent until 2025-10-30; no shareholding since | December 31 | USD | millions | Outside the perimeter after the spin-off; its debt was never attributed to Solstice | Not applicable | Credit support for letters of credit ended in the second quarter of 2026 |

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q1 2025 | 2025-01-01 | 2025-03-31 |

Balance-sheet columns are instants at the End date; statement columns of flows run from Start to End. The company states calendar quarter ends and closes its books on the preceding Saturday, which it says is not significant to results.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 12–13

Subsequent events are kept out of period figures. After the 2025-12-31 balance sheet: the dividend of USD 0.075 per share declared on 2026-02-11. After 2026-03-31: the dividend declared on 2026-04-27. After 2026-06-30: the merger agreement of 2026-07-06, the dividend declared 2026-07-17, the credit agreement amendment of 2026-07-24 and, in the third quarter, the termination of the merger and bridge commitment on 2026-08-27 and the buyback authorisation announced the same day. After 2026-09-30: the dividend announced on 2026-11-03 for payment on 2026-12-10, shown in the post-balance-sheet table.
Basis: 10-K_2025-12-31_sols.htm.jsonl, page 163; 10-Q_2026-03-31_sols.htm.jsonl, page 39; 10-Q_2026-06-30_sols.htm.jsonl, pages 32, 49–50; 10-Q_2026-09-30_sols.htm.jsonl, pages 10–11, 24–25, 48

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-Q_2026-09-30_sols.htm.jsonl, pages 11–12 | Presentation only | USD millions; US GAAP; consolidated | USD millions; US GAAP; consolidated | No currency conversion, perimeter change or house add-back; carve-out comparatives are kept as printed and flagged | All |
| EBITDA (Reported) derived | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115, 99 | Calculated aggregation | No unadjusted EBITDA printed | FY2025 895; 9M 2026 710; 9M 2025 732 | Net income plus income tax plus interest and other financial charges plus depreciation plus amortization; calculation C03 | All income statement columns |
| Total Debt from balance-sheet lines | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 | Calculated aggregation | Debt note total incl. finance leases: FY2025 2118 principal, 2072 carrying; 2026-09-30 2103 and 2054 | FY2025 1972; 2026-09-30 1967 | Current portion plus long-term debt; finance lease liabilities stay on their own lines and are shown as a sensitivity; calculations C01, C17 | 2025-12-31; 2026-03-31; 2026-06-30; 2026-09-30 |
| LTM construction | 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Derived period | Year-to-date stubs | LTM at 2026-03-31, 2026-06-30, 2026-09-30 | Full year plus current stub less prior-year stub; calculations C04 to C07 | LTM |
| Fourth quarter of 2025 derived | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Derived period | No stand-alone fourth quarter reported | Net sales 987; Adjusted EBITDA 189 | FY2025 less 9M 2025; labelled calculated; calculation C10 | Q4 2025 |
| Dash lines read as missing | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 | Missing-value rule | Source prints a dash | Not supplied: the source prints a dash | A dash is a missing value, not zero, by the method's null rule | Cash flow lines |

### T4.4 Income statement

| Line item | FY2025 | 9M 2026 | 9M 2025 | Q3 2026 | Q3 2025 | H1 2026 | H1 2025 | Q1 2026 | Q1 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Product sales | 3587 | 2957 | 2687 | 980 | 905 | 1977 | 1783 | 915 | 838 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Service sales | 299 | 229 | 212 | 66 | 64 | 163 | 147 | 77 | 59 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Net sales | 3886 | 3185 | 2899 | 1046 | 969 | 2139 | 1930 | 991 | 897 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Cost of products sold | 2419 | 1995 | 1745 | 652 | 613 | 1343 | 1132 | 628 | 531 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Cost of services sold | 217 | 159 | 162 | 49 | 46 | 110 | 116 | 47 | 45 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Total cost of products and services sold | 2636 | 2153 | 1907 | 701 | 659 | 1453 | 1248 | 675 | 577 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Research and development expenses | 97 | 83 | 70 | 30 | 26 | 53 | 45 | 28 | 22 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Selling, general and administrative expenses | 421 | 350 | 309 | 120 | 113 | 230 | 198 | 108 | 93 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Transaction-related costs | 117 | 78 | 90 | 31 | 32 | 47 | 58 | 23 | 28 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Other expense (income) | -60 | -16 | -43 | -7 | -36 | -9 | -9 | -7 | -11 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Interest and other financial charges | 28 | 112 | 5 | 60 | 2 | 53 | 3 | 29 | 1 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Total costs, expenses and other | 3239 | 2761 | 2338 | 934 | 796 | 1827 | 1543 | 855 | 710 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Income before taxes | 647 | 424 | 561 | 112 | 173 | 312 | 387 | 136 | 188 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Income tax expense | 362 | 98 | 330 | 24 | 182 | 73 | 148 | 31 | 47 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Net income | 285 | 326 | 231 | 88 | -9 | 239 | 239 | 105 | 140 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Net income attributable to noncontrolling interest | 48 | 43 | 35 | 8 | 26 | 35 | 8 | 20 | 6 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Net income attributable to Solstice Advanced Materials | 237 | 283 | 196 | 80 | -35 | 204 | 231 | 85 | 134 | USD millions | Reported; FY2025 audited (Tier 1), other columns unaudited (Tier 2b); costs as positive expense, other expense (income) as printed | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 |
| Depreciation | 191 | 160 | 151 | 54 | 46 | 107 | 105 | 53 | 50 | USD millions | Reported in the cash flow statement and the Adjusted EBITDA reconciliation; used in calculation C03 | 10-K_2025-12-31_sols.htm.jsonl, pages 99, 116; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-03-31_sols.htm.jsonl, pages 7, 38 |
| Amortization | 29 | 14 | 15 | 4 | 4 | 10 | 11 | 6 | 7 | USD millions | Reported in the cash flow statement and the Adjusted EBITDA reconciliation; used in calculation C03 | 10-K_2025-12-31_sols.htm.jsonl, pages 99, 116; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-03-31_sols.htm.jsonl, pages 7, 38 |
| EBITDA (Reported) | 895 | 710 | 732 | 230 | 225 | 482 | 506 | 224 | 245 | USD millions | Calculated: net income + income tax expense + interest and other financial charges + depreciation + amortization; the issuer prints no unadjusted EBITDA; calculation C03; includes transaction-related costs and other expense (income) | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6; 10-K_2025-12-31_sols.htm.jsonl, pages 99, 116; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-03-31_sols.htm.jsonl, pages 7, 38 |
| EBITDA (Adjusted) | 1000 | 804 | 811 | 265 | 236 | 539 | 575 | 249 | 271 | USD millions | Issuer-stated Adjusted EBITDA (non-GAAP): adds back income taxes, depreciation, amortization, interest and other financial charges, remeasurement of foreign currencies, stock-based compensation, nonoperating pension, transaction-related costs, repositioning, environmental reserves, asset retirement obligation accretion, impairments, litigation and insurance settlements, disposal gains and losses and other unusual items; its FY2025 components add to 1001 against the printed 1000 | 10-K_2025-12-31_sols.htm.jsonl, pages 99, 116; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-03-31_sols.htm.jsonl, pages 7, 38 |

### T4.5 Cash flow statement

| Line item | FY2025 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Net income | 285 | 326 | 231 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Depreciation | 191 | 160 | 151 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Amortization | 29 | 14 | 15 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Equity income of affiliated companies | -19 | -13 | -15 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Gain on sale of fixed assets | -15 | Not supplied: the source prints a dash | -15 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Stock-based compensation expense | 27 | 17 | 19 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Accrued interest on long-term debt | 24 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Other adjustments | Not supplied: line not printed in this statement | 34 | 1 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Deferred income taxes (operating) | 52 | 14 | -6 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Accounts receivable | -51 | -66 | -46 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Inventories | -146 | 48 | -150 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Other assets | -117 | -104 | -24 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Accounts payable | 77 | 84 | 82 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Accrued and other liabilities, current | 102 | 201 | 26 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Deferred income and customer advances | 2 | -5 | 2 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Other liabilities, noncurrent | 15 | -16 | 18 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 455 | 693 | 289 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Capital expenditures paid | -336 | -325 | -248 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Cash paid for long-life catalysts and deferred maintenance | -2 | Not supplied: the source prints a dash | -1 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Purchase of intangible assets | -16 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Proceeds from disposals of property, plant and equipment | 23 | Not supplied: the source prints a dash | 23 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Capitalized software | Not supplied: line not printed in this statement | -3 | -2 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -330 | -328 | -228 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Net transfers to Parent | -684 | Not supplied: the source prints a dash | -310 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Issuance of long-term debt | 2000 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Payment of deferred financing costs | -38 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Dividend to parent | -1500 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Repurchases of common stock | Not supplied: line not printed in this statement | -100 | Not supplied: the source prints a dash | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Dividends | Not supplied: line not printed in this statement | -36 | Not supplied: the source prints a dash | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Finance lease payments | -13 | -10 | -18 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Bridge loan fees | Not supplied: line not printed in this statement | -34 | Not supplied: the source prints a dash | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Principal payments of long-term debt | Not supplied: line not printed in this statement | -3 | Not supplied: the source prints a dash | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | -235 | -183 | -328 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| FX Effect on Cash | -15 | -2 | 23 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Net Cash Change | Not supplied: the filing prints (126) but its three activity totals and the foreign exchange effect add to (125) and closing less opening cash is (127), so the total cannot be supported | 180 | -244 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Opening Cash | 661 | 534 | 661 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Closing Cash | 534 | 714 | 417 | USD millions | Reported; outflows negative; FY2025 audited, 9M columns unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Cash Interest Paid | Not supplied: only interest paid on finance leases (4) is printed; interest on the new debt was accrued at year-end, not paid | Not supplied: the quarterly report prints no cash interest paid | Not supplied: the quarterly report prints no cash interest paid | USD millions | Not printed for debt interest in any period | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |
| Income taxes paid, net of refunds | 50 | Not supplied: the quarterly report prints no cash taxes paid | Not supplied: the quarterly report prints no cash taxes paid | USD millions | Supplemental cash flow information | 10-K_2025-12-31_sols.htm.jsonl, page 117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 |

### T4.6 Balance sheet

| Line item | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash & Equivalents | 534 | 642 | 750 | 714 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Accounts receivable | 645 | 632 | 671 | 667 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Inventories | 715 | 704 | 666 | 664 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Product loans receivable, current | 300 | 311 | 314 | 331 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Other current assets | 193 | 146 | 168 | 300 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total current assets | 2388 | 2436 | 2568 | 2677 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Property, plant and equipment, net | 2055 | 2084 | 2126 | 2180 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Goodwill | 820 | 819 | 817 | 818 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Intangible assets, net | 49 | 48 | 47 | 47 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Deferred income taxes (asset) | 6 | 6 | 6 | 6 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Equity method investments | 162 | 168 | 174 | 178 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Other noncurrent assets | 192 | 188 | 182 | 168 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total Assets | 5673 | 5748 | 5918 | 6074 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Accounts payable | 909 | 910 | 942 | 957 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Current portion of long-term debt | 4 | 6 | 6 | 5 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Product loans payable, current | 320 | 331 | 330 | 332 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Finance lease liabilities, current | 14 | 14 | 14 | 14 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Accrued and other liabilities, current | 467 | 444 | 468 | 629 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total current liabilities | 1713 | 1705 | 1760 | 1936 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Long-term debt | 1968 | 1965 | 1966 | 1962 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Deferred income taxes (liability) | 233 | 237 | 245 | 247 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Product loans payable, noncurrent | 16 | 16 | 15 | 14 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Finance lease liabilities, noncurrent | 104 | 100 | 95 | 91 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Other noncurrent liabilities | 262 | 254 | 250 | 249 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total Liabilities | 4296 | 4275 | 4330 | 4500 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Common stock | 2 | 2 | 2 | 2 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Additional paid-in capital | 1495 | 1500 | 1506 | 1507 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Treasury stock, at cost | Not supplied: the source prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | -101 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Accumulated other comprehensive loss | -127 | -128 | -142 | -131 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Retained earnings | 41 | 113 | 220 | 288 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total Solstice Advanced Materials shareowners' equity | 1411 | 1486 | 1586 | 1565 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Noncontrolling interest | -34 | -14 | 2 | 9 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total Equity | 1377 | 1473 | 1588 | 1574 | USD millions | Reported; FY2025 audited, interim dates unaudited | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total Debt | 1972 | 1971 | 1972 | 1967 | USD millions | Calculated: current portion of long-term debt + long-term debt, balance-sheet carrying value net of unamortized discount and issuance costs; finance lease liabilities are separate lines and excluded; calculation C01 | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term Loan Facility due 2032 | Seven-year term B loan | Not supplied: carrying value is disclosed in total only | 998 | 998 | Not applicable: term loan fully drawn | Senior secured first lien on substantially all assets of the company and the guarantors, per the filing's summary | 1 | USD | 998 | Not applicable | Adjusted Term SOFR + 1.75%; 5.57% at 2026-09-30 | floating | Adjusted Term SOFR | 175 | 0 | 2032; day not stated (seven years from 2025-10-29) | 10 a year in the 10-K maturity table for 2027 to 2030; 8 in 2026 | 10-Q_2026-09-30_sols.htm.jsonl, pages 20–22; 10-K_2025-12-31_sols.htm.jsonl, pages 145–147; PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl, pages 256–257 |
| Revolving Credit Facility | Five-year revolver | 0 | 0 | 0 | 1000 | Senior secured first lien, same collateral and guarantors as the term loan | 1 | USD | 0 | Not applicable | Adjusted Term SOFR + 1.50% to 2.00% by first lien leverage; commitment fee 0.25% to 0.35% on the undrawn amount | floating | Adjusted Term SOFR | 150 to 200 | 0 | Five years from 2025-10-29; day not stated | Not applicable | 10-Q_2026-09-30_sols.htm.jsonl, pages 20–22; 10-K_2025-12-31_sols.htm.jsonl, pages 145–147; PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl, pages 256–257 |
| 5.625% Senior Notes due 2033 | Senior notes | Not supplied: carrying value is disclosed in total only | 1000 | 1000 | Not applicable: notes fully issued | Senior unsecured; guaranteed on a senior unsecured basis by the domestic subsidiaries that guarantee the senior credit facilities | 2 | USD | 1000 | Not applicable | 5.625%; interest 31 March and 30 September | fixed | Not applicable | Not applicable | Not applicable | 2033-09-30 | 0 | 10-Q_2026-09-30_sols.htm.jsonl, pages 20–22; 10-K_2025-12-31_sols.htm.jsonl, pages 145–147; PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl, pages 256–257 |
| Sidecar LC Facilities | Uncommitted bilateral letter of credit facilities | Not applicable: letters of credit are contingent, not drawn debt | Not applicable | Not applicable: 282 of letters of credit issued and unused | Not applicable: 750 aggregate, uncommitted | Not supplied: security and ranking not stated | Not supplied: rank not stated | USD | Not applicable: outside Total Debt | Not applicable | Maintenance fee 0.60% to 0.95% a year on letters of credit outstanding | Not applicable | Not applicable | Not applicable | Not applicable | Not supplied: facility terms not stated | Not applicable | 10-Q_2026-09-30_sols.htm.jsonl, pages 21–22 |
| Finance lease liabilities | Finance leases | 105 | 105 | Not applicable | Not applicable | Not supplied: security and ranking not stated | Not supplied: rank not stated | USD | Not applicable: shown on its own balance-sheet lines, outside Total Debt | Not applicable | Weighted average rate 4.4% at 2025-12-31 | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Weighted average remaining term 11 years at 2025-12-31 | Not supplied: 2026 payments 19 in the 10-K lease table | 10-Q_2026-09-30_sols.htm.jsonl, page 20; 10-K_2025-12-31_sols.htm.jsonl, page 144 |
| Financing cost adjustment | Unamortized discount 14 and debt issuance costs 15 | -29 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -29 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_sols.htm.jsonl, page 20 |

The instrument rows plus the financing cost adjustment add to 1969 against the balance-sheet Total Debt of 1967; the two-unit difference is rounding in the printed note components and is not plugged. Carrying value is not disclosed instrument by instrument.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 20; calculation C23; calculation C24

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) LTM at 2026-03-31 | LTM | USD 895m | USD 224m | USD 245m | USD 874m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited; FY2025 mixes carve-out and consolidated periods |
| EBITDA (Reported) LTM at 2026-06-30 | LTM | USD 895m | USD 482m | USD 506m | USD 871m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited; FY2025 mixes carve-out and consolidated periods |
| EBITDA (Reported) LTM at 2026-09-30 | LTM | USD 895m | USD 710m | USD 732m | USD 873m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited; FY2025 mixes carve-out and consolidated periods |
| EBITDA (Adjusted) LTM at 2026-03-31 | LTM | USD 1000m | USD 249m | USD 271m | USD 978m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47 | Issuer definition; FY2025 reconciliation components add to 1001 |
| EBITDA (Adjusted) LTM at 2026-06-30 | LTM | USD 1000m | USD 539m | USD 575m | USD 964m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47 | Issuer definition; FY2025 reconciliation components add to 1001 |
| EBITDA (Adjusted) LTM at 2026-09-30 | LTM | USD 1000m | USD 804m | USD 811m | USD 993m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47 | Issuer definition; FY2025 reconciliation components add to 1001 |
| Net sales LTM at 2026-03-31 | LTM | USD 3886m | USD 991m | USD 897m | USD 3980m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited |
| Net sales LTM at 2026-06-30 | LTM | USD 3886m | USD 2139m | USD 1930m | USD 4095m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited |
| Net sales LTM at 2026-09-30 | LTM | USD 3886m | USD 3185m | USD 2899m | USD 4172m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Year-to-date stubs are unaudited |
| Interest and other financial charges LTM at 2026-03-31 | LTM | USD 28m | USD 29m | USD 1m | USD 56m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Expense not cash; includes USD 34m of terminated-merger fees from the third quarter of 2026 |
| Interest and other financial charges LTM at 2026-06-30 | LTM | USD 28m | USD 53m | USD 3m | USD 78m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Expense not cash; includes USD 34m of terminated-merger fees from the third quarter of 2026 |
| Interest and other financial charges LTM at 2026-09-30 | LTM | USD 28m | USD 112m | USD 5m | USD 135m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | Expense not cash; includes USD 34m of terminated-merger fees from the third quarter of 2026 |
| Operating cash flow LTM at 2026-09-30 | LTM | USD 455m | USD 693m | USD 289m | USD 859m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 116; 10-Q_2026-09-30_sols.htm.jsonl, page 7 | Working-capital inflow in the 2026 stub |
| Capital expenditures paid LTM at 2026-09-30 | LTM | USD 336m | USD 325m | USD 248m | USD 413m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 116; 10-Q_2026-09-30_sols.htm.jsonl, page 7 | Paid basis; incurred basis differs |
| Net sales, fourth quarter of 2025 | Q4 | USD 3886m | Not supplied: not a stub | USD 2899m | USD 987m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6 | FY2025 less 9M 2025; no reported fourth quarter |
| EBITDA (Adjusted), fourth quarter of 2025 | Q4 | USD 1000m | Not supplied: not a stub | USD 811m | USD 189m | Calculated | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47 | FY2025 less 9M 2025; carries rounding |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1972 | Balance sheet; calculation C01 | 895 | FY2025 EBITDA (Reported); calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 2.20 | Calculated | Tier 1 audited statements | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1438 | Net debt data; calculation C02 | 895 | FY2025 EBITDA (Reported); calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 1.61 | Calculated | Tier 1 audited statements | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 895 | FY2025 EBITDA (Reported); calculation C03 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 1 audited statements | Cash interest on the term loan and notes is not printed; interest expense is shown as a proxy below |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1972 | Balance sheet; calculation C01 | 1000 | Issuer Adjusted EBITDA; calculation C05 | FY2025 / 2025-12-31 | USD | US$m | 1.97 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA, shown separately from the reported ratios |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1438 | Net debt data; calculation C02 | 1000 | Issuer Adjusted EBITDA; calculation C05 | FY2025 / 2025-12-31 | USD | US$m | 1.44 | Calculated | Tier 1 audited statements | Issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1000 | Issuer Adjusted EBITDA; calculation C05 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | FY2025 / 2025-12-31 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 1 audited statements | Cash interest on the term loan and notes is not printed |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1971 | Balance sheet; calculation C01 | 874 | LTM EBITDA (Reported); calculation C04 | 2026-03-31 | USD | US$m | 2.26 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1329 | Net debt data; calculation C02 | 874 | LTM EBITDA (Reported); calculation C04 | 2026-03-31 | USD | US$m | 1.52 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 874 | LTM EBITDA (Reported); calculation C04 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-03-31 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed; interest expense is shown as a proxy below |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1971 | Balance sheet; calculation C01 | 978 | Issuer Adjusted EBITDA; calculation C05 | 2026-03-31 | USD | US$m | 2.02 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA, shown separately from the reported ratios |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1329 | Net debt data; calculation C02 | 978 | Issuer Adjusted EBITDA; calculation C05 | 2026-03-31 | USD | US$m | 1.36 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 978 | Issuer Adjusted EBITDA; calculation C05 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-03-31 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1972 | Balance sheet; calculation C01 | 871 | LTM EBITDA (Reported); calculation C04 | 2026-06-30 | USD | US$m | 2.26 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1222 | Net debt data; calculation C02 | 871 | LTM EBITDA (Reported); calculation C04 | 2026-06-30 | USD | US$m | 1.40 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 871 | LTM EBITDA (Reported); calculation C04 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-06-30 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed; interest expense is shown as a proxy below |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1972 | Balance sheet; calculation C01 | 964 | Issuer Adjusted EBITDA; calculation C05 | 2026-06-30 | USD | US$m | 2.05 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA, shown separately from the reported ratios |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1222 | Net debt data; calculation C02 | 964 | Issuer Adjusted EBITDA; calculation C05 | 2026-06-30 | USD | US$m | 1.27 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 964 | Issuer Adjusted EBITDA; calculation C05 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-06-30 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 1967 | Balance sheet; calculation C01 | 873 | LTM EBITDA (Reported); calculation C04 | 2026-09-30 | USD | US$m | 2.25 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1253 | Net debt data; calculation C02 | 873 | LTM EBITDA (Reported); calculation C04 | 2026-09-30 | USD | US$m | 1.44 | Calculated | Tier 2b unaudited interim | Carrying-value debt; reported EBITDA derived from printed lines; not a covenant ratio |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 873 | LTM EBITDA (Reported); calculation C04 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-09-30 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed; interest expense is shown as a proxy below |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 1967 | Balance sheet; calculation C01 | 993 | Issuer Adjusted EBITDA; calculation C05 | 2026-09-30 | USD | US$m | 1.98 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA, shown separately from the reported ratios |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1253 | Net debt data; calculation C02 | 993 | Issuer Adjusted EBITDA; calculation C05 | 2026-09-30 | USD | US$m | 1.26 | Calculated | Tier 2b unaudited interim | Issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 993 | Issuer Adjusted EBITDA; calculation C05 | Not supplied: cash interest paid is not printed for this period | Cash flow statements print no cash interest on the debt | 2026-09-30 | USD | US$m | Not calculable: no cash interest figure | Not Calculable | Tier 2b unaudited interim | Cash interest on the term loan and notes is not printed |
| Reported EBITDA / interest and other financial charges (proxy) | LTM EBITDA (Reported) / LTM interest and other financial charges | 873 | Calculation C04 | 135 | Calculation C07 | 2026-09-30 | USD | US$m | 6.47 | Proxy | Tier 2b unaudited interim | Expense not cash; includes 34 of terminated-merger fees; the term loan was drawn on 2025-10-29, about a month into the twelve-month window |
| Adjusted EBITDA / interest and other financial charges (proxy) | LTM EBITDA (Adjusted) / LTM interest and other financial charges | 993 | Calculation C05 | 135 | Calculation C07 | 2026-09-30 | USD | US$m | 7.36 | Proxy | Tier 2b unaudited interim | As above |
| Adjusted EBITDA / interest excluding terminated-merger fees (proxy) | LTM EBITDA (Adjusted) / LTM interest excluding fees | 993 | Calculation C05 | 101 | Calculation C16 | 2026-09-30 | USD | US$m | 9.83 | Proxy | Tier 2b unaudited interim | Excludes the fees the issuer names; the earlier months of the window have less debt outstanding |
| Adjusted EBITDA / annualised contractual interest (estimated) | LTM EBITDA (Adjusted) / annualised contractual interest | 993 | Calculation C05 | 111.84 | Calculation C16 | 2026-09-30 | USD | US$m | 8.88 | Estimated | Tier 2b unaudited interim | Principal x stated rate at 2026-09-30; no fees; the revolver is undrawn; a forward run rate, not cash paid |
| Adjusted EBITDA margin | LTM EBITDA (Adjusted) / LTM net sales x 100 | 993 | Calculation C05 | 4172 | Calculation C06 | 2026-09-30 | USD | US$m | 23.80 | Calculated | Tier 2b unaudited interim | Percentage; the issuer prints margins for fiscal years and quarters, not LTM |
| Free cash flow / EBITDA (Reported) | LTM free cash flow / LTM EBITDA (Reported) | 446 | Calculation C12 | 873 | Calculation C04 | 2026-09-30 | USD | US$m | 51.09 | Calculated | Tier 2b unaudited interim | Percentage; free cash flow is operating cash flow less capex paid, flattered by working-capital inflow |
| Free cash flow / total debt | LTM free cash flow / Total Debt | 446 | Calculation C12 | 1967 | Calculation C01 | 2026-09-30 | USD | US$m | 22.67 | Calculated | Tier 2b unaudited interim | Percentage; as above |
| Capital expenditures paid / net sales | LTM capex paid / LTM net sales x 100 | 413 | Calculation C12 | 4172 | Calculation C06 | 2026-09-30 | USD | US$m | 9.90 | Calculated | Tier 2b unaudited interim | Percentage; paid basis; 2026 guidance is 420 to 440, basis not stated |
| Net sales growth, nine months | 9M 2026 net sales / 9M 2025 net sales - 1 | 3185 | 10-Q_2026-09-30_sols.htm.jsonl, page 5 | 2899 | 10-Q_2026-09-30_sols.htm.jsonl, page 5 | 2026-09-30 | USD | US$m | 0.0987 | Calculated | Tier 2b unaudited interim | Fraction (0.0987 is 9.87%); the issuer prints 10% and 9.9% total change |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Issuer reported | Adjusted EBITDA margin (%) | 25.7 | 25.1 | 25.3 | 25.3 | 25.2 | Lower than 2025 quarters (29.5% to 30.2% in H1 2025; 24.4% in Q3 2025) | Issuer-printed one-decimal margins; FY2024 was 29.1%; period-end margin is flat at about 25% through 2026 |
| Issuer reported | Organic net sales growth (%) | 2 | 8.0 | 10.6 | 8.3 | 9.0 | Higher | Volume-led: 9M 2026 volume 6.2%, price 2.8%, currency 0.9% of the 9.9% total change |
| Segment | Refrigerants & Applied Solutions Segment Adjusted EBITDA margin (%) | 35.2 | 34.1 | 32.9 | 34.5 | 33.8 | Lower | Prior-year comparatives were 38.9% (FY2024), 39.3%, 39.4% and 35.4% for Q1 to Q3 2025; mix of low global warming potential refrigerants, raw material inflation and plant turnaround |
| Segment | Electronic & Specialty Materials Segment Adjusted EBITDA margin (%) | 18.5 | 20.8 | 21.6 | 21.2 | 21.2 | Higher | Memory-driven electronic materials volume; prior-year comparatives 20.3%, 18.8% and 16.7% for Q1 to Q3 2025 |
| Operating | Remaining performance obligations at period end (USD billions) | Not supplied: not read for FY2025 | Not supplied: not read | Not supplied: not read | Not supplied: not read | 3.3 | Not comparable | Period-end value 3.3 at 2026-09-30, of which 29% is due within one year; earlier period-end values are not captured here |

Margins are the issuer's printed one-decimal figures; they differ from the two-decimal calculations in the register by rounding only.
Basis: 10-K_2025-12-31_sols.htm.jsonl, pages 97–99; 10-Q_2026-03-31_sols.htm.jsonl, pages 36–38; 10-Q_2026-06-30_sols.htm.jsonl, pages 42–47; 10-Q_2026-09-30_sols.htm.jsonl, pages 20, 42–47

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Total debt | Every balance-sheet debt line at carrying value; lease liabilities on their own lines are not added | Debt note total includes finance lease liabilities (FY2025 principal 2118, carrying 2072; 2026-09-30 principal 2103, carrying 2054) | Debt note against balance sheet lines | All four balance-sheet dates | Finance leases 118 at 2025-12-31 and 105 at 2026-09-30; adding them gives 1.56x net leverage against 1.44x | Financial foundation; Fundamental credit | Primary Total Debt excludes finance leases; the sensitivity with leases is calculation C17 | 10-K_2025-12-31_sols.htm.jsonl, pages 144–145; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 20 |
| Principal against carrying value | Carrying value is the leverage denominator; principal is logged beside it | Principal 2000 at 2025-12-31 and 1998 at 2026-09-30; carrying 1972 and 1967 | Discount 15 and issuance costs 13 at 2025-12-31; 14 and 15 at 2026-09-30 | 2025-12-31; 2026-09-30 | Difference 28 and 31; at 2026-09-30 the note components give 1969 against the balance sheet 1967 | Financial foundation | Carrying value used; the two-unit gap is printed rounding | 10-K_2025-12-31_sols.htm.jsonl, pages 144, 147; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 20 |
| EBITDA | Reported EBITDA is the primary denominator, adjusted shown beside it | The issuer prints only Adjusted EBITDA (non-GAAP); FY2025 1000 against derived reported 895 | Add-backs: transaction-related costs 117, stock-based compensation 27, other adjustments -38 in FY2025 | FY2025; 9M 2026; 9M 2025; LTM | Difference of 105 in FY2025 and 94 in 9M 2026, mainly transaction costs related to the spin-off and the terminated merger | All | Both are shown and labelled; no house adjustment | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47 |
| Cash interest | Cash interest paid is the cover denominator | Only interest paid on finance leases (4 for FY2025) is printed; income statement interest and other financial charges include 34 of bridge and backstop fees in the third quarter of 2026 | Cash flow statements against income statement | FY2025; 9M 2026; 9M 2025 | Cover cannot be stated on cash interest; proxies on expense are labelled | Financial foundation | Gap stated; proxies in the calculation register | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 10–11 |
| Capital expenditure | Capex paid in the cash flow statement is the cash measure | Segment note total 286 for 9M 2026 (with 73 unpaid at 2026-09-30) against 325 paid; FY2025 408 incurred against 336 paid | Cash flow statement against segment table and MD&A | 9M 2026; FY2025 | Difference 39 for 9M 2026; unpaid capex 73 at 2026-09-30 against 111 at 2025-12-31 | Financial foundation; Fundamental credit | Paid basis for free cash flow; incurred named wherever used | 10-Q_2026-09-30_sols.htm.jsonl, pages 7, 33, 52; 10-K_2025-12-31_sols.htm.jsonl, pages 105, 143 |
| Non-debt funding float: supply chain finance | Supplier finance is credit-relevant float, not ordinary payables | Included in accounts payable; 127 at 2026-09-30, 118 at 2026-06-30, 98 at 2026-03-31 and 2025-12-31 | Supply chain financing disclosure against balance sheet | All balance-sheet dates | Net debt with it added is 1380 (1.58x) against 1253 (1.44x); balance rose 29 in nine months | Financial foundation; Liquidity | Not added to Total Debt; sensitivity in calculation C17 | 10-Q_2026-09-30_sols.htm.jsonl, pages 14, 53; 10-Q_2026-06-30_sols.htm.jsonl, page 53; 10-Q_2026-03-31_sols.htm.jsonl, page 42; 10-K_2025-12-31_sols.htm.jsonl, page 105 |
| Non-debt funding float: ConverDyn obligations | Related-party obligations that accrue interest are debt-like float | Accrued to an affiliate of General Atomics 75 at 2026-09-30 and 69 at 2025-12-31, accruing interest at prime plus 2% and payable only after ConverDyn pays the company; product loans payable 346 against product loans receivable 331 at 2026-09-30 | Related-party note against balance sheet | 2025-12-31; 2026-09-30 | 75 and a net 15 of uranium product loans; the loan to the General Atomics affiliate runs to 2026-12-31 | Financial foundation; Fundamental credit | Outside Total Debt; flagged for the credit view | 10-Q_2026-09-30_sols.htm.jsonl, pages 16–17, 22–23, 27; 10-K_2025-12-31_sols.htm.jsonl, page 147 |
| Noncontrolling interest in EBITDA | Consolidated EBITDA is before noncontrolling interest | Net income attributable to noncontrolling interest 48 in FY2025 and 43 in 9M 2026, mainly the other 50% of ConverDyn | Income statement | FY2025; 9M 2026; LTM | EBITDA includes 100% of ConverDyn while debt is at the issuer; cash held in ConverDyn is within consolidated cash | Financial foundation; Fundamental credit | Consolidated basis kept; share of cash and earnings not separable from the sources | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 27 |
| Cash flow footing, FY2025 | Net change equals the sum of activity totals and foreign exchange; opening plus change equals closing | Printed net change (126); parts add to (125); closing less opening (127) | Cash flow statement | FY2025 | One unit, rounding in the filing | Financial foundation | Net Cash Change written as not supplied; no plug | 10-K_2025-12-31_sols.htm.jsonl, page 117 |
| Prior-period presentation | Periods compared on one presentation | Items recast to current presentation; FY2024 comparatives in the annual report differ from the 2025 information statement (selling, general and administrative 392 against 398) | 10-K against information statement | FY2024 | Not used in any table here | Financial foundation | FY2024 not extracted; recast noted | 10-K_2025-12-31_sols.htm.jsonl, page 115; PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl, page 286 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2.20 | 1.61 | x | Carrying-value debt over FY2025 EBITDA (Reported), calculated from printed lines; audited year; calculations C08 |
| 2026-03-31 | 2.26 | 1.52 | x | Carrying-value debt over LTM EBITDA (Reported), calculated from printed lines; unaudited interim stubs; calculations C08 |
| 2026-06-30 | 2.26 | 1.40 | x | Carrying-value debt over LTM EBITDA (Reported), calculated from printed lines; unaudited interim stubs; calculations C08 |
| 2026-09-30 | 2.25 | 1.44 | x | Carrying-value debt over LTM EBITDA (Reported), calculated from printed lines; unaudited interim stubs; calculations C08 |

The reported EBITDA is a derived sum of printed lines that includes the spin-off and merger costs, so adjusted-basis ratios, 1.97x to 2.05x total debt and 1.26x to 1.44x net debt, are lower.
Basis: 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; calculation C08; calculation C09

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | Not supplied: cash interest paid is not printed for this period | x | The cash flow statement prints only interest paid on finance leases (FY2025: 4); the quarterly reports print no cash interest paid |
| 2026-03-31 | Not supplied: cash interest paid is not printed for this period | x | The cash flow statement prints only interest paid on finance leases (FY2025: 4); the quarterly reports print no cash interest paid |
| 2026-06-30 | Not supplied: cash interest paid is not printed for this period | x | The cash flow statement prints only interest paid on finance leases (FY2025: 4); the quarterly reports print no cash interest paid |
| 2026-09-30 | Not supplied: cash interest paid is not printed for this period | x | The cash flow statement prints only interest paid on finance leases (FY2025: 4); the quarterly reports print no cash interest paid |

No cover figure is drawn, and the expense-based proxies in the calculation register are not cash cover.
Basis: 10-K_2025-12-31_sols.htm.jsonl, page 117; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–8

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 534 | 1000 | US$m | Cash and cash equivalents; revolver commitment of 1000 with no borrowings; sidecar letters of credit unused 270 are on uncommitted facilities and not netted; cash includes foreign subsidiaries' and ConverDyn's cash |
| 2026-03-31 | 642 | 1000 | US$m | Cash and cash equivalents; revolver commitment of 1000 with no borrowings; sidecar letters of credit unused 263 are on uncommitted facilities and not netted; cash includes foreign subsidiaries' and ConverDyn's cash |
| 2026-06-30 | 750 | 1000 | US$m | Cash and cash equivalents; revolver commitment of 1000 with no borrowings; sidecar letters of credit unused 276 are on uncommitted facilities and not netted; cash includes foreign subsidiaries' and ConverDyn's cash |
| 2026-09-30 | 714 | 1000 | US$m | Cash and cash equivalents; revolver commitment of 1000 with no borrowings; sidecar letters of credit unused 282 are on uncommitted facilities and not netted; cash includes foreign subsidiaries' and ConverDyn's cash |

Whether letters of credit issued under the uncommitted sidecar facilities reduce the revolver is not stated in the filings.
Basis: 10-K_2025-12-31_sols.htm.jsonl, pages 103, 115; 10-Q_2026-03-31_sols.htm.jsonl, pages 6, 20; 10-Q_2026-06-30_sols.htm.jsonl, pages 6, 22; 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 22, 52; calculation C18

### Financials and credit metrics

| Metric | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | LTM Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net sales | 3886 | 991 | 1148 | 1046 | 4172 | USD millions | Reported; Q2 and Q3 are three-month columns; LTM calculated (C06) | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-03-31_sols.htm.jsonl, page 5; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-09-30_sols.htm.jsonl, page 5 |
| Adjusted EBITDA (issuer) | 1000 | 249 | 290 | 265 | 993 | USD millions | Issuer-stated; LTM calculated (C05) | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-03-31_sols.htm.jsonl, page 38; 10-Q_2026-06-30_sols.htm.jsonl, page 46; 10-Q_2026-09-30_sols.htm.jsonl, page 46 |
| EBITDA (Reported, derived) | 895 | 224 | 256 | 230 | 873 | USD millions | Calculated from printed lines (C03, C04) | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-03-31_sols.htm.jsonl, page 6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-09-30_sols.htm.jsonl, page 5 |
| Adjusted EBITDA margin | 25.73 | 25.13 | 25.26 | 25.33 | 23.80 | % | Calculated to two decimals (C20) | Calculation C20 |
| Interest and other financial charges | 28 | 29 | 23 | 60 | 135 | USD millions | Reported expense; LTM calculated (C07); Q3 2026 includes 34 of fees | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-03-31_sols.htm.jsonl, page 6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-09-30_sols.htm.jsonl, page 5 |
| Total Debt (carrying) | 1972 | 1971 | 1972 | 1967 | 1967 | USD millions | Period-end; LTM column is the latest period end (C01) | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Cash and equivalents | 534 | 642 | 750 | 714 | 714 | USD millions | Period-end; Q1 to Q3 are 2026-03-31, 2026-06-30 and 2026-09-30 | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Net debt | 1438 | 1329 | 1222 | 1253 | 1253 | USD millions | Period-end (C02) | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 |
| Total debt / EBITDA (Reported) | 2.20 | 2.26 | 2.26 | 2.25 | 2.25 | x | FY2025 on the fiscal year, others on LTM (C08) | Calculation C08 |
| Net debt / EBITDA (Reported) | 1.61 | 1.52 | 1.40 | 1.44 | 1.44 | x | As above (C08) | Calculation C08 |
| Total debt / EBITDA (Adjusted) | 1.97 | 2.02 | 2.05 | 1.98 | 1.98 | x | Issuer-adjusted (C09) | Calculation C09 |
| Net debt / EBITDA (Adjusted) | 1.44 | 1.36 | 1.27 | 1.26 | 1.26 | x | Issuer-adjusted (C09) | Calculation C09 |
| Operating cash flow | 455 | 199 | 262 | 232 | 859 | USD millions | Q2 and Q3 are differences of year-to-date totals; LTM calculated (C12) | 10-K_2025-12-31_sols.htm.jsonl, page 116; 10-Q_2026-09-30_sols.htm.jsonl, page 7; 10-Q_2026-06-30_sols.htm.jsonl, page 7; 10-Q_2026-03-31_sols.htm.jsonl, page 7 |
| Capital expenditures paid | 336 | 75 | 138 | 112 | 413 | USD millions | Paid basis; derived quarters (C12) | 10-K_2025-12-31_sols.htm.jsonl, page 116; 10-Q_2026-09-30_sols.htm.jsonl, page 7; 10-Q_2026-06-30_sols.htm.jsonl, page 7; 10-Q_2026-03-31_sols.htm.jsonl, page 7 |
| Free cash flow (operating cash flow less capex paid) | 119 | 124 | 124 | 120 | 446 | USD millions | Before dividends, buybacks and lease payments (C12) | Calculation C12 |
| Cash plus undrawn committed revolver | 1534 | 1642 | 1750 | 1714 | 1714 | USD millions | Period-end (C18) | Calculation C18 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 8 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded |
| FY2027 | 10 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded |
| FY2028 | 10 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded |
| FY2029 | 10 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded |
| FY2030 | 10 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded |
| Thereafter | 1953 | US$m | 10-K maturity table as of 2025-12-31 (calendar years); term loan and notes principal only; finance leases excluded; the 2033 notes and the 2032 term loan fall in the residual |

The ladder is as of 2025-12-31 because the quarterly reports print no schedule, so the 2026 row includes payments already made, and the revolver, undrawn, is not in it.
Basis: 10-K_2025-12-31_sols.htm.jsonl, page 147; calculation C11

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 1972 | 534 | 1438 | US$m | Carrying value: current portion of long-term debt plus long-term debt, net of unamortized discount and issuance costs; term loan and 5.625% notes only; finance lease liabilities 118 are on their own lines and excluded; principal total 2000; calculated net debt; calculations C01, C02 |
| 2026-03-31 | 1971 | 642 | 1329 | US$m | Carrying value: current portion of long-term debt plus long-term debt, net of unamortized discount and issuance costs; term loan and 5.625% notes only; finance lease liabilities 114 are on their own lines and excluded; principal total 2000; calculated net debt; calculations C01, C02 |
| 2026-06-30 | 1972 | 750 | 1222 | US$m | Carrying value: current portion of long-term debt plus long-term debt, net of unamortized discount and issuance costs; term loan and 5.625% notes only; finance lease liabilities 109 are on their own lines and excluded; principal total 2000; calculated net debt; calculations C01, C02 |
| 2026-09-30 | 1967 | 714 | 1253 | US$m | Carrying value: current portion of long-term debt plus long-term debt, net of unamortized discount and issuance costs; term loan and 5.625% notes only; finance lease liabilities 105 are on their own lines and excluded; principal total 1998; calculated net debt; calculations C01, C02 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2001 | -29 | 1972 | US$m | Ladder rows as printed add to 2001 against the printed total 2000. Reconciling items: unamortized discount -15, unamortized debt issuance costs -13, rounding in the printed ladder -1. Finance leases of 118 are on their own lines and outside the ladder. Annual report pages 144 and 147; calculation C11. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Quarterly dividend of USD 0.075 per share declared, payable 2026-12-10 to holders of record on 2026-11-25 | 2026-11-03 | 11.79 | 1264.79 | 1.45 | US$m | Q3 report page 48 states the per-share amount and dates, not the aggregate; amount calculated as 0.075 x 157,211,032 shares outstanding at 2026-10-28 (cover); added to net debt of 1253 at 2026-09-30 over LTM EBITDA (Reported) of 873; calculation C14. Not reflected: repurchases after 2026-09-26, the remaining USD 400 million of the buyback authorisation, and all other cash flows. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| Q1 2025 | 897 | 271 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-03-31_sols.htm.jsonl, pages 5, 38; 2025 quarters are carve-out basis |
| Q2 2025 | 1033 | 304 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-06-30_sols.htm.jsonl, pages 6, 46; 2025 quarters are carve-out basis |
| Q3 2025 | 969 | 236 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-09-30_sols.htm.jsonl, pages 5, 46; 2025 quarters are carve-out basis |
| Q4 2025 | 987 | 189 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; calculated FY2025 less 9M 2025 (C10); derived, not reported; 2025 quarters are carve-out basis |
| Q1 2026 | 991 | 249 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-03-31_sols.htm.jsonl, pages 5, 38 |
| Q2 2026 | 1148 | 290 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-06-30_sols.htm.jsonl, pages 6, 46 |
| Q3 2026 | 1046 | 265 | US$m | Three-month period; issuer-adjusted EBITDA (non-GAAP), not house-adjusted; 10-Q_2026-09-30_sols.htm.jsonl, pages 5, 46 |

The fourth quarter of 2025 is derived from the annual and nine-month figures and carries the filings' rounding, and the 2025 quarters are before the spin-off.
Basis: 10-K_2025-12-31_sols.htm.jsonl, pages 99, 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; calculation C10

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Credit Facility (drawn) | 1 | Yes | 0 | 0.00 | US$m | Obligor Solstice Advanced Materials Inc.; guaranteed by its domestic wholly owned subsidiaries; first lien on substantially all assets; USD 1000 million commitment undrawn at 2026-09-30; cumulative principal over LTM EBITDA (Reported) of 873; calculation C21 |
| Term Loan Facility due 2032 | 1 | Yes | 998 | 1.14 | US$m | Same obligor, guarantors and first lien as the revolver; principal not carrying value; equal rank with the revolver; calculation C21 |
| 5.625% Senior Notes due 2033 | 2 | No | 1000 | 2.29 | US$m | Obligor Solstice Advanced Materials Inc.; guaranteed on a senior unsecured basis by the domestic subsidiaries that guarantee the senior credit facilities; principal; calculation C21 |

Finance leases and the uncommitted letter of credit facilities are left out because no source states their legal rank, and the executed credit agreement and indenture are not supplied, so the ranking rests on the filings' summaries.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 20–22; 10-K_2025-12-31_sols.htm.jsonl, pages 145–146; calculation C21

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | 230 | US$m | Opening amount: Q3 2026 derived reported EBITDA, calculation C03 |
| Other adjustments | -2 | US$m | Issuer's own line: gains and losses on disposal of long-lived assets, remeasurement of foreign currencies, environmental reserves, asset retirement obligations, nonoperating pension and certain legal costs net of recoveries; classification other; realisation not stated |
| Stock-based compensation expense | 6 | US$m | Issuer add-back; classification share-based compensation; realisation not stated |
| Transaction-related costs | 31 | US$m | Issuer add-back; classification transaction costs, including 23 of professional fees for the terminated merger; realisation not stated |
| EBITDA (Adjusted) | 265 | US$m | Closing amount: issuer-stated Adjusted EBITDA for Q3 2026 (non-GAAP); the bridge reconciles exactly; calculation C15 |

The bridge is drawn for the third quarter because the FY2025 and nine-month reconciliations as printed are one unit of rounding away from the stated totals, and it shows that most of the adjustment is cost the issuer treats as non-recurring.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 11, 46; calculation C15

### Financial interpretation


Leverage is modest in absolute terms, and the move since year-end owes more to cash than to earnings. Total debt at carrying value has been flat near USD 1,970 million since the spin-off, while LTM reported EBITDA slipped from USD 895 million to USD 873 million; net leverage fell from 1.61x to 1.44x only because cash rose from USD 534 million to USD 714 million. On the issuer's adjusted measure, LTM EBITDA is USD 993 million and total leverage 1.98x. The strongest contrary evidence is the earnings base itself: adjusted EBITDA margin was 30.2% in the first quarter of 2025 and about 25% in each quarter of 2026, as refrigerant mix, raw material inflation and plant turnaround timing pressed the Refrigerants & Applied Solutions segment and corporate costs rose by 21% for the nine months as an independent company, while Electronic & Specialty Materials gained. A further fall in margin would raise leverage with no change in debt.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 32–33, 42–47; 10-Q_2026-03-31_sols.htm.jsonl, page 38; Source readiness (CP-0); calculation C04; calculation C08; calculation C09; calculation C20

Coverage cannot be stated on cash interest because none is printed. Expense-based proxies are strong, at 7.36x adjusted LTM EBITDA over LTM interest and other financial charges and 9.83x excluding the USD 34 million of bridge and backstop fees, and the term loan and notes together carry about USD 111.84 million of annual interest at stated rates, so adjusted EBITDA covers that run-rate 8.88x. These are proxies; the pre-spin description scheduled the notes' first coupon for 2026-03-31, so little or no interest on the new debt was paid in 2025, and no covenant ratio is computed because the credit agreement is not supplied.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 10–11, 20, 22; PREDECESSOR_2024_10-12BA_EX99.1_sols.htm.jsonl, page 256; calculation C07; calculation C16

Cash generation looks better than it is. LTM free cash flow of USD 446 million compares with USD 119 million in FY2025, but the nine-month 2026 operating cash flow includes a USD 156 million inflow from the changes in assets and liabilities against a USD 98 million outflow a year earlier, driven by inventory destocking and a USD 201 million rise in accrued liabilities that the issuer attributes to timing. Capital expenditures paid are rising, at USD 325 million for nine months against USD 248 million, with 2026 guidance of USD 420 million to USD 440 million, basis not stated. Shareholder returns have started: USD 100 million of buybacks and USD 36 million of dividends in nine months, with up to USD 400 million of authorisation left that the issuer intends to substantially complete by the end of the first quarter of 2027 from cash and operating cash flow, equal to 56.02% of September cash.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8, 24–25, 49, 51–52, 56; 10-K_2025-12-31_sols.htm.jsonl, page 116; calculation C12; calculation C13; calculation C19

Liquidity is ample and there is no maturity wall: cash of USD 714 million plus the undrawn USD 1,000 million first lien revolver gives USD 1,714 million, the only scheduled principal is the term loan's amortisation of USD 10 million a year, and the first large maturities are the 2032 term loan and the 2033 notes. About 60.78% of cash is held by foreign subsidiaries, and the uncommitted letter of credit facilities, with USD 282 million issued, are not counted. The credit agreement amendment of 2026-07-24 and the terminated USD 4,685 million bridge show how quickly the capital structure can change: the commitment was 4.72 times LTM adjusted EBITDA, and the USD 34 million of fees was expensed in the third quarter.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 10–11, 20–22, 48, 52; 10-K_2025-12-31_sols.htm.jsonl, page 147; 10-Q_2026-06-30_sols.htm.jsonl, page 50; calculation C18; calculation C19; calculation C25

Three items sit outside Total Debt and matter for definition risk. Finance lease liabilities of USD 105 million would lift net leverage to 1.56x; supply chain finance of USD 127 million, up from USD 98 million at year-end, sits in accounts payable and would lift it to 1.58x; and ConverDyn owes an affiliate of General Atomics USD 75 million at prime plus 2%, which it cannot pay until it has fully repaid the issuer the cost of operating the facility, alongside uranium product loans of USD 346 million payable against USD 331 million receivable, the receivable arrangement running to 2026-12-31. The earnings base includes all of ConverDyn while debt and the dividend are the issuer's, with noncontrolling interest taking USD 43 million of nine-month net income.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 14, 16–17, 20, 27, 53; calculation C17

A supported downside sequence starts with weaker refrigerant pricing or mix, the first source of margin loss, then lower adjusted EBITDA, higher leverage on unchanged debt, and a smaller cushion if buybacks and capital expenditure continue. The observable triggers are quarterly segment margins, working capital reversing the 2026 inflow, the pace of buybacks against cash, and any new acquisition financing. No numerical stress is established here.
Basis: 10-Q_2026-09-30_sols.htm.jsonl, pages 42–45, 49; calculation C20

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported leverage and liquidity at 2026-09-30 and trend through 2026 | Ready with Limitations | Reported EBITDA is derived; FY2025 mixes carve-out and consolidated periods; finance leases, supply chain finance and ConverDyn obligations are outside Total Debt | Use carrying-value debt with the adjusted ratios beside it; state the sensitivities |
| Interest cover | Not Ready | No cash interest paid for the term loan and notes in any period | Use the labelled expense proxies only; obtain cash interest paid from the next annual report |
| Cash generation and discretionary cash | Ready with Limitations | Free cash flow benefits from working-capital timing; capex paid and incurred differ; dividends and buybacks reduce cash | Show working-capital lines and shareholder returns beside free cash flow |
| Covenant and debt-document analysis | Not Ready | Executed credit agreement, amendment and indenture not supplied; covenant ratios not reported | Obtain the executed documents and the compliance calculation |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 18 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 3 |
| Fields present | 25 |
| Fields total | 26 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 13 |

## Calculations

Each calculation below is worked from printed figures; no figure is taken from outside the supplied filings.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Total debt at carrying value, 2025-12-31, 2026-03-31, 2026-06-30, 2026-09-30 | 4 + 1968; 6 + 1965; 6 + 1966; 5 + 1962 | 1972; 1971; 1972; 1967 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 | Current portion of long-term debt plus long-term debt, the two balance-sheet debt lines; finance lease liabilities sit on their own lines and are not added. |
| C02 | Net debt, same four dates | 1972 - 534; 1971 - 642; 1972 - 750; 1967 - 714 | 1438; 1329; 1222; 1253 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7 | Cash is all cash and equivalents; restricted cash is not separately stated. |
| C03 | EBITDA (Reported), derived: net income + income tax + interest and other financial charges + depreciation + amortization | FY2025: 285 + 362 + 28 + 191 + 29; 9M 2026: 326 + 98 + 112 + 160 + 14; 9M 2025: 231 + 330 + 5 + 151 + 15; Q3 2026: 88 + 24 + 60 + 54 + 4; Q3 2025: -9 + 182 + 2 + 46 + 4; H1 2026: 239 + 73 + 53 + 107 + 10; H1 2025: 239 + 148 + 3 + 105 + 11; Q1 2026: 105 + 31 + 29 + 53 + 6; Q1 2025: 140 + 47 + 1 + 50 + 7; Q2 2026: 134 + 42 + 23 + 54 + 3 | FY2025 895; 9M 2026 710; 9M 2025 732; Q3 2026 230; Q3 2025 225; H1 2026 482; H1 2025 506; Q1 2026 224; Q1 2025 245; Q2 2026 256 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 114–115, 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6, 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 6, 46–47; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6, 38 | The issuer prints no unadjusted EBITDA; this is the sum of printed lines and includes transaction-related costs, other expense (income) and stock-based compensation. |
| C04 | LTM EBITDA (Reported) = FY2025 + current stub - prior-year stub | 2026-03-31: 895 + 224 - 245; 2026-06-30: 895 + 482 - 506; 2026-09-30: 895 + 710 - 732 | 2026-03-31 874; 2026-06-30 871; 2026-09-30 873 | USD millions | calculation C03 | Interim stubs are year-to-date figures from unaudited quarterly reports; FY2025 mixes pre-spin carve-out and post-spin periods. |
| C05 | LTM EBITDA (Adjusted), issuer-stated Adjusted EBITDA = FY2025 + current stub - prior-year stub | 2026-03-31: 1000 + 249 - 271; 2026-06-30: 1000 + 539 - 575; 2026-09-30: 1000 + 804 - 811 | 2026-03-31 978; 2026-06-30 964; 2026-09-30 993 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, page 99; 10-Q_2026-09-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-06-30_sols.htm.jsonl, pages 46–47; 10-Q_2026-03-31_sols.htm.jsonl, page 38 | Issuer definition; the FY2025 reconciliation components add to 1001 against the printed 1000, a rounding difference in the filing. |
| C06 | LTM net sales = FY2025 + current stub - prior-year stub | 2026-03-31: 3886 + 991 - 897; 2026-06-30: 3886 + 2139 - 1930; 2026-09-30: 3886 + 3185 - 2899 | 2026-03-31 3980; 2026-06-30 4095; 2026-09-30 4172 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 | Year-to-date stubs from unaudited reports. |
| C07 | LTM interest and other financial charges (income statement) = FY2025 + current stub - prior-year stub | 2026-03-31: 28 + 29 - 1; 2026-06-30: 28 + 53 - 3; 2026-09-30: 28 + 112 - 5 | 2026-03-31 56; 2026-06-30 78; 2026-09-30 135 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, page 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6; 10-Q_2026-06-30_sols.htm.jsonl, page 6; 10-Q_2026-03-31_sols.htm.jsonl, pages 5–6 | Expense, not cash paid; the periods before 2025-10-30 carry no debt interest, and the 2026-09-30 figure includes 34 of terminated-merger fees. |
| C08 | Total debt / EBITDA (Reported) and Net debt / EBITDA (Reported), four dates | FY2025 / 2025-12-31: 1972 / 895 and 1438 / 895; 2026-03-31: 1971 / 874 and 1329 / 874; 2026-06-30: 1972 / 871 and 1222 / 871; 2026-09-30: 1967 / 873 and 1253 / 873 | FY2025 / 2025-12-31: 2.20x and 1.61x; 2026-03-31: 2.26x and 1.52x; 2026-06-30: 2.26x and 1.40x; 2026-09-30: 2.25x and 1.44x | times | calculations C01, C02, C03, C04 | FY2025 uses the fiscal-year EBITDA; the other dates use LTM EBITDA. Carrying-value debt; not a covenant ratio. |
| C09 | Total debt / EBITDA (Adjusted) and Net debt / EBITDA (Adjusted), four dates | FY2025 / 2025-12-31: 1972 / 1000 and 1438 / 1000; 2026-03-31: 1971 / 978 and 1329 / 978; 2026-06-30: 1972 / 964 and 1222 / 964; 2026-09-30: 1967 / 993 and 1253 / 993 | FY2025 / 2025-12-31: 1.97x and 1.44x; 2026-03-31: 2.02x and 1.36x; 2026-06-30: 2.05x and 1.27x; 2026-09-30: 1.98x and 1.26x | times | calculations C01, C02, C05 | Issuer-adjusted EBITDA; labelled separately from the reported ratios. |
| C10 | Fourth quarter of 2025, derived (no stand-alone quarter is reported): net sales and Adjusted EBITDA = FY2025 - 9M 2025; margin | 3886 - 2899; 1000 - 811; 189 / 987 x 100 | 987; 189; 19.15% | USD millions; % | 10-K_2025-12-31_sols.htm.jsonl, pages 99, 115; 10-Q_2026-09-30_sols.htm.jsonl, pages 5–6, 46–47 | Calculated, not reported; carries the filing's rounding and mixes the last carve-out and post-spin weeks. |
| C11 | Debt maturity ladder at 2025-12-31 and principal-to-carrying reconciliation | 8 + 10 + 10 + 10 + 10 + 1953; reconciling items -15 (unamortized discount) -13 (unamortized debt issuance costs) -1 (rounding in the printed ladder: 2001 rows against the printed total 2000); 2001 - 29 | 2001; -29; 1972 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 144, 147 | The filing prints 2000 as the total of rows that add to 2001; the one-unit difference is carried in reconciling items, not plugged elsewhere. Principal is the term loan and the notes; finance leases are outside. |
| C12 | Operating cash flow, capital expenditures paid and free cash flow (OCF less capex paid), by quarter and LTM | Q2 2026 OCF 461 - 199; Q3 2026 OCF 693 - 461; Q2 capex 213 - 75; Q3 capex 325 - 213; LTM OCF 455 + 693 - 289; LTM capex 336 + 325 - 248; LTM FCF 859 - 413; FY2025 FCF 455 - 336; quarterly FCF Q1 199 - 75, Q2 262 - 138, Q3 232 - 112 | 262; 232; 138; 112; 859; 413; 446; 119; 124, 124, 120 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 116–117; 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8; 10-Q_2026-06-30_sols.htm.jsonl, pages 7–8; 10-Q_2026-03-31_sols.htm.jsonl, page 7 | Quarterly figures are differences of year-to-date totals; free cash flow is before dividends, buybacks and lease payments; capex paid, not incurred. |
| C13 | Working-capital lines of operating cash flow (changes in assets and liabilities) and operating cash flow before them | 9M 2026: -66 + 48 - 104 + 84 + 201 + 14 - 5 - 16; 9M 2025: -46 - 150 - 24 + 82 + 26 - 6 + 2 + 18; swing 156 - (-98); OCF before: 693 - 156; 289 - (-98) | 156; -98; 254; 537; 387 | USD millions | 10-Q_2026-09-30_sols.htm.jsonl, pages 7–8 | Sum of the printed lines under changes in assets and liabilities; the 9M 2026 lines add to 156, and the printed totals carry rounding of 1. |
| C14 | Pro forma net debt after the dividend declared 2026-11-03: per-share dividend x shares outstanding at 2026-10-28; added to net debt at 2026-09-30; over LTM EBITDA (Reported) | 0.075 x 157.211032 = 11.790827400; 1253 + 11.79; 1264.79 / 873 | 11.79; 1264.79; 1.45x | USD millions; times | 10-Q_2026-09-30_sols.htm.jsonl, pages 1, 48 | The aggregate amount is not stated; it is calculated from the share count on the cover and moves with the record-date count. |
| C15 | Bridge from EBITDA (Reported) to EBITDA (Adjusted), Q3 2026, issuer's own reconciling lines | 230 + (-2) + 6 + 31 | 265 | USD millions | 10-Q_2026-09-30_sols.htm.jsonl, pages 46, 5–6 | The FY2025 and nine-month reconciliations as printed do not foot to the printed Adjusted EBITDA by one unit of rounding, so the quarter that foots exactly is shown. |
| C16 | Interest proxies: LTM interest and other financial charges to 2026-09-30 less the 34 of terminated-merger fees; EBITDA over each; annualised contractual interest on the term loan and notes | 135 - 34; 873 / 135; 993 / 135; 993 / 101; 998 x 5.57% + 1000 x 5.625%; 993 / 111.84 | 101; 6.47x; 7.36x; 9.83x; 111.84; 8.88x | USD millions; times | 10-Q_2026-09-30_sols.htm.jsonl, pages 6, 10–11, 20, 22 | Proxies on expense and on stated rates, not cash interest paid; the annualised figure is principal x rate at 2026-09-30, estimated, and leaves out commitment and letter of credit fees. |
| C17 | Sensitivity of net debt at 2026-09-30 to items the issuer carries outside its debt lines: finance leases 14 + 91; supply chain finance 127; each over LTM EBITDA (Reported) | 1967 + 105 = 2072; 2072 - 714 = 1358; 1358 / 873; 1253 + 127 = 1380; 1380 / 873 | 2072; 1358; 1.56x; 1380; 1.58x | USD millions; times | 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 14, 20, 53 | Illustrations of definition risk, not the primary measure; supply chain finance is included in accounts payable. |
| C18 | Cash plus undrawn committed revolver at four dates | 534 + 1000; 642 + 1000; 750 + 1000; 714 + 1000 | 1534; 1642; 1750; 1714 | USD millions | 10-K_2025-12-31_sols.htm.jsonl, pages 115–116; 10-Q_2026-03-31_sols.htm.jsonl, pages 6–7; 10-Q_2026-06-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7; 10-Q_2026-09-30_sols.htm.jsonl, page 22 | The 1000 revolver is undrawn at each date; the sidecar letter of credit facilities are uncommitted and are not added. |
| C19 | Remaining buyback authorisation and foreign cash relative to cash at 2026-09-30 | 400 / 714 x 100; 434 / 714 x 100 | 56.02%; 60.78% | % | 10-Q_2026-09-30_sols.htm.jsonl, pages 52, 56 | The remaining authorisation is a ceiling, not a commitment; foreign cash availability for debt service is not established. |
| C20 | Adjusted EBITDA margin = Adjusted EBITDA / net sales x 100 | FY2025 1000 / 3886; Q1 2026 249 / 991; Q2 2026 290 / 1148; Q3 2026 265 / 1046; LTM 993 / 4172 | 25.73%; 25.13%; 25.26%; 25.33%; 23.80% | % | calculations C05, C06, C10 | Two-decimal calculations; the issuer prints one decimal (25.7%, 25.1%, 25.3%, 25.3%). |
| C21 | Debt stack cumulative leverage on principal over LTM EBITDA (Reported) at 2026-09-30 | 0 / 873; (0 + 998) / 873; (0 + 998 + 1000) / 873 | 0.00; 1.14; 2.29 | times | 10-Q_2026-09-30_sols.htm.jsonl, pages 20, 22; calculation C04 | Principal, not carrying value; the sidecar letter of credit facilities and finance leases are outside the stack. |
| C22 | Capital expenditures: paid against incurred, nine months to 2026-09-30, and unpaid balance movement | 325 - 286; 111 - 73 | 39; 38 | USD millions | 10-Q_2026-09-30_sols.htm.jsonl, pages 7, 33; 10-K_2025-12-31_sols.htm.jsonl, page 143 | The one-unit difference between the two results is rounding; the two bases are not reconciled here. |
| C23 | Principal against carrying value of the term loan and notes at 2026-09-30, and the difference to the balance sheet | 998 + 1000; 14 + 15; 1998 - 29; 1969 - 1967 | 1998; 29; 1969; 2 | USD millions | 10-Q_2026-09-30_sols.htm.jsonl, pages 6–7, 20 | The note's components give 1969 against 1967 on the balance sheet; the two units are rounding of the printed components and are left as printed. |
| C24 | Sum of the debt instruments' Reporting Currency Amount rows against Total Debt at 2026-09-30 | 998 + 0 + 1000 - 29 | 1969 | USD millions | 10-Q_2026-09-30_sols.htm.jsonl, pages 20, 22 | Compare calculation C23: the same 2 difference to the balance-sheet total of 1967. |
| C25 | Terminated bridge commitment relative to LTM Adjusted EBITDA at 2026-09-30 | 4685 / 993 | 4.72x | times | 10-Q_2026-09-30_sols.htm.jsonl, page 48; calculation C05 | Commitment size only; the bridge was never drawn and was terminated on 2026-08-27. |

## Gaps

Cash interest paid on the term loan and the 2033 notes is not printed for FY2025, the nine months of 2026 or the nine months of 2025, so EBITDA over cash interest is not calculable in the leverage-and-cover charts; the annual report prints only USD 4 million of interest paid on finance leases. Severity High. Action: use the next annual report's supplemental cash flow disclosure or a cash interest schedule.

The executed credit agreement, its first amendment of 2026-07-24 and the indenture are not supplied, and the 10-Qs state only that the company complies with its financial covenants, so covenant ratios and headroom are not calculable and the ranking rests on the filings' summaries. Severity High. Action: obtain the executed documents and the compliance calculation.

The cash flow statement for FY2025 does not foot: the printed net decrease is 126, its parts add to 125 and closing less opening cash is 127, so Net Cash Change is written as not supplied; the difference of one unit is rounding in the filing. Severity Low. Action: none beyond noting it.

Several cash flow lines are not printed in every statement column, and the source prints a dash for others, so cells are written as not supplied rather than zero; examples are accrued interest on long-term debt, repurchases of common stock, bridge loan fees and net transfers to Parent. Severity Low. Action: read each column from its own filing.

Cash taxes paid are printed for FY2025 only (USD 50 million), not in the quarterly reports. Severity Low. Action: take the annual figure when it is next printed.

No stand-alone fourth quarter of 2025 is reported, so Q4 2025 net sales of 987 and Adjusted EBITDA of 189 are calculated as the year less nine months and carry rounding. Severity Medium. Action: obtain an earnings release for the fourth quarter if one exists.

Reported (unadjusted) EBITDA is not printed by the issuer; it is calculated from printed lines, and the issuer's FY2025 Adjusted EBITDA reconciliation components add to 1001 against the printed 1000. Severity Medium. Action: keep both measures labelled and state which is used.

The debt maturity table is printed only as of 2025-12-31 and its rows add to 2001 against the printed total of 2000; the quarterly reports print no schedule, so the maturing amounts for 2026 are not updated. Severity Low. Action: use the next annual report's table.

Carrying value is disclosed only in total, not for the term loan and the notes separately, and the debt note components at 2026-09-30 give 1969 against the balance sheet's 1967. Severity Low. Action: take the allocation from the credit agreement or indenture if supplied.

The legal rank and security of the finance lease liabilities and of the uncommitted letter of credit facilities are not stated, so they are left out of the debt stack. Severity Low. Action: obtain the lease and letter of credit terms.

The sidecar letter of credit facilities are uncommitted and whether letters of credit reduce the revolver is not stated, so undrawn committed facilities are shown as the full USD 1,000 million. Severity Medium. Action: confirm in the executed credit agreement.

Cash held by foreign subsidiaries was USD 434 million of USD 714 million, and cash held within the consolidated ConverDyn joint venture is not separately stated, so unrestricted cash available to creditors at the issuer is not established. Severity Medium. Action: obtain restricted-cash and joint venture cash detail.

The aggregate of the dividend declared on 2026-11-03 is not stated; it is calculated from the per-share amount and the share count on the cover. Severity Low. Action: confirm in the payment announcement.

Remaining performance obligations are read only for 2026-09-30; earlier period-end values and segment margins for the fourth quarter of 2025 are not captured. Severity Low. Action: read earlier filings if a trend is needed.

FY2024 comparatives are not extracted: the annual report recasts items against the 2025 information statement, so FY2024 is out of scope for the tables. Severity Low. Action: extract FY2024 from the annual report only if a two-year comparison is wanted.

## Next module
The orchestrator selects the next module.
