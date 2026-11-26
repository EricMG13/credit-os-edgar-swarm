## Request

Valaris Ltd (issuer id val), as of 2026-11-05, credit snapshot pathway. Scope: the financial foundation of the consolidated group from the supplied annual report, three quarterly reports and three results releases: statements, debt, liquidity, leverage and cover.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_val-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-20 | b0f40796936a513fe6362c5f87d6a2a2819cd2f6e423112bfcf4a7c94647ac50 | Audited FY2025 and FY2024 statements, debt and facility notes, contractual obligations, cash paid for interest |
| 10-Q_2026-03-31_val-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-05 | 856b19f20ceb9a456e4cf71dc5d1f96d12072575504148e1684cf5301164037f | Period identity check and revolver availability at 2026-03-31 |
| 10-Q_2026-06-30_val-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter and six months ended 30 June 2026 | 2026-08-06 | d045ec4aa0f0c5450f1ffc05520139072532c8f88ec1804bd561ac63d9d380b7 | Period identity check and revolver availability at 2026-06-30 |
| 10-Q_2026-09-30_val-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter and nine months ended 30 September 2026 | 2026-11-03 | 73a1a96ecd1c9340e41638f2528ea86ae030d4c896022c1e422144610c8461ec | Nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, debt note, liquidity, commitments, subsequent sale of a rig |
| EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl | Press release (Exhibit 99.1) reporting first quarter 2026 results | 2026-05-04 | fb13914842f3e3a58a0b5ccdbd3cb04d0eb99161ae6d4b18bdfd3afa295e84b5 | Q1 2025 and Q2 2025 Adjusted EBITDA as stated by the issuer |
| EX-99.1_2026-08-05_a06302026ex991pressrelease.htm.jsonl | Press release (Exhibit 99.1) reporting second quarter 2026 results | 2026-08-05 | 21077052c215c76afaa6a29e3ea89e20e01ee6140be558608fa94290eaa87b1f | Q2 2025 Adjusted EBITDA as stated by the issuer |
| EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl | Press release (Exhibit 99.1) reporting third quarter 2026 results | 2026-11-02 | 649e9df09c58fc28e42170873dd9e204e4698e7b6a16ba8868ab909251dcc271 | Five-quarter statements and balance sheets, Adjusted EBITDA reconciliation, segment and operating statistics, backlog |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 1e761d9a63bbdc3b7947502d56fde61ed32ffc1cd5ab22ffd2de75b5fc7248e9 | Accepted source inventory, document dates, perimeter and limitations; no financial balances or ratios |

No external sources were used.

## Findings

### Bottom line

Valaris Ltd's trailing leverage is moderate but rising, with total debt at 2.97x last-twelve-month reported EBITDA, and liquidity is ample, so creditors face earnings-recovery risk rather than refinancing risk before the 2030 maturity. Net debt was USD 563.4 million at 2026-09-30, or USD 555.9 million pro forma for the October 2026 rig sale; net leverage was 1.54x, against 0.78x at the end of FY2025.
Basis: calculation C26; calculation C27; calculation C21; calculation C15; calculation C45; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 21

The recovery is real but recent: Adjusted EBITDA reached USD 150.6 million in Q3, more than twice the USD 66.7 million of Q1, yet nine-month operating cash flow of USD 155.3 million covered under half of capital additions of USD 328.0 million. Cash of USD 525.1 million plus the undrawn USD 375.0 million revolver gives USD 900.1 million of liquidity.
Basis: calculation C43; calculation C34; calculation C33; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 1; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 51

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_val-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025, FY2024 and FY2023 (years to 31 December) | USD | millions | Valaris Limited consolidated; ARO (50% joint venture) equity method | US GAAP, audited | Tier 1 (audited statements) | Annual statements, debt and facility notes, contractual obligations, cash paid for interest | Audited; chunk numbers differ from printed page numbers |
| 10-Q_2026-03-31_val-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 and comparatives | USD | millions | Valaris Limited consolidated; ARO equity method | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | Period identity check and revolver availability | No cash flow detail beyond the quarter statements; no cash paid for interest |
| 10-Q_2026-06-30_val-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 2026 and six months | USD | millions | Valaris Limited consolidated; ARO equity method | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | Period identity check and revolver availability | No cash paid for interest |
| 10-Q_2026-09-30_val-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 2026 and nine months | USD | millions | Valaris Limited consolidated; ARO equity method | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | Nine-month statements, latest balance sheet, debt note, liquidity and commitments | No cash paid for interest; revolver covenant levels not printed |
| EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 with four prior quarters | USD | millions | Valaris Limited consolidated; ARO at 100% in separate tables | US GAAP statements, issuer-defined non-GAAP measures | Tier 2c (issuer material) | Stated quarterly Adjusted EBITDA for Q1 2025 and Q2 2025 | Adjusted EBITDA is the issuer's definition |
| EX-99.1_2026-08-05_a06302026ex991pressrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 2026 with four prior quarters | USD | millions | Valaris Limited consolidated; ARO at 100% in separate tables | US GAAP statements, issuer-defined non-GAAP measures | Tier 2c (issuer material) | Cross-check of stated quarterly Adjusted EBITDA | Adjusted EBITDA is the issuer's definition |
| EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 2026 with four prior quarters | USD | millions | Valaris Limited consolidated; ARO at 100% in separate tables | US GAAP statements, issuer-defined non-GAAP measures | Tier 2c (issuer material) | Quarterly statements and balance sheets for five quarters, reconciliation, segment data, backlog | The release says no further guidance updates will be given |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Valaris Limited | Issuer and registrant; parent of the consolidated group | 31 December | USD | millions | Consolidated | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026; nine months 2026 and 2025 |
| Valaris Finance Company LLC | Wholly-owned co-issuer of the 2030 Second Lien Notes | Not supplied: no stand-alone statements | USD | Not supplied: no stand-alone statements | Consolidated within Valaris Limited | US GAAP | Not supplied: no stand-alone statements |
| Certain subsidiaries of Valaris Limited | Guarantors of the notes and of the 2028 Credit Agreement | Not supplied: no guarantor statements | USD | Not supplied: no guarantor statements | Consolidated within Valaris Limited | US GAAP | Not supplied: no guarantor statements |
| Saudi Aramco Rowan Offshore Drilling Company (ARO) | 50/50 joint venture with Saudi Aramco, unconsolidated variable interest entity | Not supplied: the documents do not state ARO's year end; its quarters are shown on calendar quarter ends | USD | millions (100% basis in release tables) | Equity method; the group's share of earnings is one line | US GAAP | Condensed income statement for five quarters in the Q3 release; no full ARO statements |

Subsequent events after the balance sheet date of 2026-09-30, each kept out of the period figures: the sale of the rig VALARIS 111 to a second buyer for USD 10.5 million completed in October 2026, with a pre-tax gain of about USD 8.0 million in Q4 and a payment of about USD 3.0 million to the first buyer; the drillship VALARIS DS-18 started its contract after quarter end; the semi-annual coupon on the 2030 Second Lien Notes fell due on 2026-10-30; and the pending all-stock business combination with Transocean Ltd. is scheduled to close on or about 2026-12-01, after the as-of date of 2026-11-05.
Basis: 10-Q_2026-09-30_val-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 57; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 1

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived as operating income plus depreciation | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl | Derivation | Not supplied: the issuer states no unadjusted EBITDA | FY2025 623.3; LTM to 2026-09-30 367.0 | The issuer states only Adjusted EBITDA; operating income plus depreciation keeps equity earnings of ARO, merger and integration expenses and other operating items inside the measure | FY2024, FY2025, quarters, nine months and LTM |
| EBITDA (Adjusted) for FY2025 and nine-month columns summed from stated quarters | EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl; EX-99.1_2026-08-05_a06302026ex991pressrelease.htm.jsonl; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl | Aggregation of issuer-stated quarters | Quarterly Adjusted EBITDA of 181.3, 200.7, 163.2 and 97.0 | FY2025 642.2 | The issuer states Adjusted EBITDA by quarter only; each quarter reconciles to operating income plus depreciation, merger and integration expenses, other operating loss and minus equity earnings of ARO | FY2025, 9M 2025, 9M 2026 |
| Annual loss on impairment placed on the line Other operating (income) loss | 10-K_2025-12-31_val-20251231.htm.jsonl | Reclassification of label | Loss on impairment 27.3 | Other operating (income) loss 27.3 | The annual statement prints the item as Loss on impairment; the quarterly statements print it within Other operating (income) loss; the two quarters (7.8 and 19.5) add to 27.3 | FY2025 |
| A dash in a source statement is carried as Not supplied, never as zero | 10-K_2025-12-31_val-20251231.htm.jsonl; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | Treatment of nil lines | — | Not supplied | Method rule: a dash is a missing value with a gap line | Lines for merger costs, other operating items, share repurchases, debt issuance costs |
| No currency conversion | All sources | None | USD | USD | Every statement is in US dollars; the money unit is US$m | All |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revenues (exclusive of reimbursable revenues) | 2,211.9 | 2,207.9 | 555.6 | 502.2 | 430.1 | 502.3 | 555.6 | 1,705.7 | 1,488.0 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Reimbursable revenues | 150.7 | 161.1 | 40.1 | 35.2 | 35.3 | 36.9 | 38.0 | 125.9 | 110.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Total operating revenues | 2,362.6 | 2,369.0 | 595.7 | 537.4 | 465.4 | 539.2 | 593.6 | 1,831.6 | 1,598.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Contract drilling expenses (exclusive of depreciation and reimbursable expenses) | 1,618.5 | 1,477.1 | 367.6 | 380.3 | 340.4 | 380.4 | 379.9 | 1,096.8 | 1,100.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Reimbursable expenses | 142.4 | 152.6 | 38.0 | 33.1 | 33.0 | 35.1 | 37.4 | 119.5 | 105.5 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Total contract drilling expenses (exclusive of depreciation) | 1,760.9 | 1,629.7 | 405.6 | 413.4 | 373.4 | 415.5 | 417.3 | 1,216.3 | 1,206.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Depreciation | 122.1 | 146.3 | 37.1 | 40.6 | 42.7 | 44.6 | 47.3 | 105.7 | 134.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| General and administrative | 116.3 | 97.1 | 26.9 | 27.0 | 25.3 | 27.2 | 25.7 | 70.1 | 78.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Merger and integration expenses | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 13.6 | 11.4 | 15.5 | Not supplied: the statement prints a dash for this period | 40.5 | USD millions | Reported; first incurred in Q1 2026 | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Other operating (income) loss | Not supplied: the statement prints a dash for this period | 27.3 | Not supplied: the statement prints a dash for this period | 19.5 | -2.8 | Not supplied: the statement prints a dash for this period | 3.0 | 7.8 | 0.2 | USD millions | Reported; annual column is the annual statement's Loss on impairment | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Total operating expenses | 1,999.3 | 1,900.4 | 469.6 | 500.5 | 452.2 | 498.7 | 508.8 | 1,399.9 | 1,459.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Equity in earnings (losses) of ARO | -11.0 | 8.4 | 4.4 | 2.5 | 6.8 | 10.6 | -3.5 | 5.9 | 13.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Operating income | 352.3 | 477.0 | 130.5 | 39.4 | 20.0 | 51.1 | 81.3 | 437.6 | 152.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Interest income | 86.1 | 70.8 | 22.6 | 18.7 | 17.0 | 16.3 | 16.3 | 52.1 | 49.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Interest expense, net | -84.8 | -98.8 | -24.9 | -24.8 | -24.3 | -24.0 | -24.9 | -74.0 | -73.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Other, net | 16.6 | 103.3 | 87.7 | 3.1 | -2.3 | 37.2 | 28.7 | 100.2 | 63.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Total other income (expense) | 17.9 | 75.3 | 85.4 | -3.0 | -9.6 | 29.5 | 20.1 | 78.3 | 40.0 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Income before income taxes | 370.2 | 552.3 | 215.9 | 36.4 | 10.4 | 80.6 | 101.4 | 515.9 | 192.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Provision (benefit) for income taxes | 0.4 | -426.8 | 28.6 | -680.4 | 28.4 | 33.6 | 54.7 | 253.6 | 116.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Net income (loss) | 369.8 | 979.1 | 187.3 | 716.8 | -18.0 | 47.0 | 46.7 | 262.3 | 75.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Net (income) loss attributable to noncontrolling interests | 3.6 | 3.7 | 0.8 | 0.7 | 1.6 | 3.4 | -0.6 | 3.0 | 4.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| Net income (loss) attributable to Valaris | 373.4 | 982.8 | 188.1 | 717.5 | -16.4 | 50.4 | 46.1 | 265.3 | 80.1 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| EBITDA (Reported) | 474.4 | 623.3 | 167.6 | 80.0 | 62.7 | 95.7 | 128.6 | 543.3 | 287.0 | USD millions | Calculated: operating income plus depreciation; includes equity earnings of ARO, merger and integration expenses and other operating items; issuer states no unadjusted EBITDA (calculations C01, C02, C04, C05 and C08) | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| EBITDA (Adjusted) | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | 642.2 | 163.2 | 97.0 | 66.7 | 96.5 | 150.6 | 545.2 | 313.8 | USD millions | Issuer-adjusted; quarters as stated in the quarterly releases, FY2025 and nine-month columns summed from the stated quarters (calculations C03, C06, C07 and C09); the annual report states no Adjusted EBITDA | EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl, page 10; EX-99.1_2026-08-05_a06302026ex991pressrelease.htm.jsonl, page 11; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11 |

### Segment schedule

| Segment | Measure | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Floaters | Revenues (exclusive of reimbursable revenues) | 293.0 | 255.4 | 192.6 | 279.0 | 346.0 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Jackups | Revenues (exclusive of reimbursable revenues) | 216.7 | 208.8 | 195.8 | 183.4 | 171.2 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Other (leased and managed rigs) | Revenues (exclusive of reimbursable revenues) | 45.9 | 38.0 | 41.7 | 39.9 | 38.4 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Floaters | Adjusted EBITDA | 105.8 | 58.4 | 42.1 | 111.6 | 157.6 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Jackups | Adjusted EBITDA | 93.4 | 89.5 | 68.2 | 40.6 | 43.1 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Other (leased and managed rigs) | Adjusted EBITDA | 29.7 | 17.2 | 20.0 | 12.7 | 16.7 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |
| Support costs (general and administrative plus onshore support) | Adjusted EBITDA | -65.7 | -68.1 | -63.6 | -68.4 | -66.8 | USD millions | Reported; ARO is not a consolidated segment and is excluded; Adjusted EBITDA by segment excludes onshore support and general and administrative costs, shown in the support costs row | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 10–11 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Net income (loss) | 369.8 | 979.1 | 187.3 | 716.8 | -18.0 | 47.0 | 46.7 | 262.3 | 75.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Depreciation expense | 122.1 | 146.3 | 37.1 | 40.6 | 42.7 | 44.6 | 47.3 | 105.7 | 134.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Deferred income tax expense (benefit) | 5.8 | -515.1 | -0.8 | -687.6 | 9.5 | 11.2 | 45.8 | 172.5 | 66.5 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Net (gain) loss on sale of property | 0.2 | -118.6 | -89.5 | -1.2 | 1.6 | -37.7 | -27.5 | -117.4 | -63.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Loss on impairment and other operating (income) loss | Not supplied: the statement prints a dash for this period | 27.3 | Not supplied: the statement prints a dash for this period | 19.5 | -2.8 | Not supplied: the statement prints a dash for this period | 3.0 | 7.8 | 0.2 | USD millions | Reported; annual column is Loss on impairment | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Share-based compensation expense | 27.7 | 25.2 | 6.8 | 6.8 | 6.4 | 9.2 | 10.6 | 18.4 | 26.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Accretion of discount on Notes Receivable from ARO | -40.0 | -24.7 | -6.2 | -6.2 | -6.1 | -6.1 | -6.2 | -18.5 | -18.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Equity in losses (earnings) of ARO | 11.0 | -8.4 | -4.4 | -2.5 | -6.8 | -10.6 | 3.5 | -5.9 | -13.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Bad debt expense (recovery) | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | -0.5 | -0.3 | -0.3 | -11.1 | 0.8 | -0.6 | -10.6 | USD millions | Reported; the annual statement shows no separate line | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Changes in contract liabilities | -31.7 | -41.0 | -5.9 | -1.7 | 0.4 | 6.5 | 19.8 | -39.3 | 26.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Changes in deferred costs | 39.3 | 16.1 | 4.8 | 7.0 | -22.8 | -7.4 | -8.5 | 9.1 | -38.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Changes in contract assets | -1.0 | -10.3 | -5.3 | -4.7 | -6.9 | -0.6 | -4.1 | -5.5 | -11.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Other | 6.9 | 8.0 | 2.2 | 2.2 | 1.1 | 0.8 | 0.5 | 6.7 | 2.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Changes in operating assets and liabilities | -133.2 | 78.9 | 77.3 | -13.0 | 80.3 | -28.6 | -56.6 | 91.8 | -4.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Contributions to pension plans and other post-retirement benefits | -21.5 | -16.6 | -4.8 | -3.5 | -3.3 | -4.1 | -7.9 | -13.1 | -15.3 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Net Cash from Operating Activities | 355.4 | 546.2 | 198.1 | 72.2 | 75.0 | 13.1 | 67.2 | 474.0 | 155.3 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Additions to property and equipment | -455.1 | -343.5 | -69.8 | -106.3 | -100.9 | -105.5 | -121.6 | -237.2 | -328.0 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Proceeds from disposition of assets | 2.8 | 137.9 | 108.7 | 1.6 | 5.2 | 55.1 | 42.3 | 136.3 | 102.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Net Cash from Investing Activities | -452.3 | -205.6 | 38.9 | -104.7 | -95.7 | -50.4 | -79.3 | -100.9 | -225.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Payments for share repurchases | -126.4 | -100.0 | -75.0 | -25.0 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | -75.0 | Not supplied: the statement prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Payments related to tax withholdings for share-based awards | -29.9 | -3.6 | -2.7 | -0.5 | -1.4 | -0.1 | -6.0 | -3.1 | -7.5 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Debt issuance costs | -0.8 | Not supplied: the statement prints a dash for this period | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | Not supplied: the line is not presented in this source's cash flow statement | USD millions | Reported; only the annual FY2024 statement shows the line | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Other financing | -1.2 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | 1.7 | Not supplied: the statement prints a dash for this period | 1.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Net Cash from Financing Activities | -158.3 | -103.6 | -77.7 | -25.5 | -1.4 | -0.1 | -4.3 | -78.1 | -5.8 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Net Cash Change | -255.2 | 237.0 | 159.3 | -58.0 | -22.1 | -37.4 | -16.4 | 295.0 | -75.9 | USD millions | Reported as the increase (decrease) in cash and cash equivalents and restricted cash; no FX line is printed | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Opening Cash | 635.7 | 380.5 | 516.2 | 675.5 | 617.5 | 595.4 | 558.0 | 380.5 | 617.5 | USD millions | Reported; cash and cash equivalents plus restricted cash | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Closing Cash | 380.5 | 617.5 | 675.5 | 617.5 | 595.4 | 558.0 | 541.6 | 675.5 | 541.6 | USD millions | Reported; cash and cash equivalents plus restricted cash (not the balance sheet cash line) | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 9–10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Cash Interest Paid | 78.3 | 90.5 | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | USD millions | Reported in the supplemental cash flow note: interest paid, net of amounts capitalized; interim periods not stated | 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 368.2 | 599.4 | 662.7 | 578.3 | 541.2 | 525.1 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Accounts receivable, net | 571.2 | 474.8 | 513.7 | 447.9 | 458.1 | 538.1 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Assets held for sale | Not supplied: the statement prints a dash for this period | 6.4 | Not supplied: the statement prints a dash for this period | 9.2 | 2.0 | 2.0 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Other current assets | 139.3 | 144.7 | 167.2 | 169.5 | 197.4 | 193.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total current assets | 1,078.7 | 1,225.3 | 1,343.6 | 1,204.9 | 1,198.7 | 1,258.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Property and equipment, net | 1,932.9 | 2,088.8 | 2,034.4 | 2,165.0 | 2,233.8 | 2,259.2 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Long-term notes receivable from ARO | 296.2 | 345.0 | 314.7 | 351.1 | 357.2 | 363.4 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Investment in ARO | 113.4 | 121.8 | 119.3 | 128.6 | 139.2 | 135.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Deferred tax assets | 849.5 | 1,364.2 | 673.9 | 1,355.5 | 1,345.3 | 1,298.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Other assets | 149.1 | 159.7 | 152.1 | 158.6 | 174.2 | 166.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total Assets | 4,419.8 | 5,304.8 | 4,638.0 | 5,363.7 | 5,448.4 | 5,482.5 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Accounts payable - trade | 328.5 | 348.2 | 327.1 | 398.5 | 416.0 | 393.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Accrued liabilities and other | 351.0 | 343.4 | 390.9 | 379.2 | 358.8 | 375.1 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total current liabilities | 679.5 | 691.6 | 718.0 | 777.7 | 774.8 | 768.8 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total Debt | 1,082.7 | 1,086.0 | 1,085.2 | 1,086.8 | 1,087.6 | 1,088.5 | USD millions | Reported long-term debt at balance-sheet carrying value (the notes net of unamortised costs and premium); no current portion; lease liabilities are not included | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Deferred tax liabilities | 30.1 | 29.7 | 27.0 | 30.5 | 31.5 | 30.9 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Other liabilities | 383.2 | 325.8 | 357.2 | 307.0 | 336.7 | 325.6 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total Liabilities | 2,175.5 | 2,133.1 | 2,187.4 | 2,202.0 | 2,230.6 | 2,213.8 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Total Equity | 2,244.3 | 3,171.7 | 2,450.6 | 3,161.7 | 3,217.8 | 3,268.7 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |
| Cash & Equivalents | 368.2 | 599.4 | 662.7 | 578.3 | 541.2 | 525.1 | USD millions | Reported cash and cash equivalents; excludes restricted cash of USD 16.5 million at 2026-09-30 | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 8–9 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8.375% Senior Secured Second Lien Notes due 2030 (Valaris Limited and Valaris Finance Company LLC) | Fixed rate notes | 1,088.5 | 1,100.0 | 1,100.0 | Not applicable | Second-priority lien on the collateral; guaranteed jointly and severally on a senior secured basis by certain subsidiaries | 2 | USD | 1,088.5 | Not applicable | 8.375% per annum, effective rate 8.76% | fixed | Not applicable | Not applicable | Not applicable | 2030-04-30 | 0 | 10-Q_2026-09-30_val-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 21; 10-K_2025-12-31_val-20251231.htm.jsonl, page 127 |
| 2028 Credit Agreement (senior secured revolving facility) | Revolving credit facility | 0 | 0 | 0 | 375.0 | First-priority lien on the collateral; guaranteed by Valaris Finance Company LLC and certain subsidiaries | 1 | USD | 0 | Not applicable | Margin 2.50% to 4.00% over Term SOFR plus 0.10%, by rating; commitment fee 0.375% to 0.75% | floating | Term SOFR plus 0.10% | Not supplied: the margin depends on ratings and no rating is supplied | 0 | 2028-04-03 | 0 | 10-Q_2026-09-30_val-20260930.htm.jsonl, pages 21–22; 10-K_2025-12-31_val-20251231.htm.jsonl, pages 128–129 |

The revolver is undrawn and the notes' carrying value equals Total Debt at 2026-09-30 (USD 1,088.5 million + USD 0 million). Carrying value of the notes is disclosed, so no separate financing cost adjustment row is needed.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Total operating revenues | LTM to 2026-09-30 | USD 2,369.0m | USD 1,598.2m | USD 1,831.6m | USD 2,135.6m | Calculated | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | Nine-month figures are unaudited |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 623.3m | USD 287.0m | USD 543.3m | USD 367.0m | Calculated | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | Operating income plus depreciation in each component; cross-checked to the sum of Q4 2025 to Q3 2026 |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 642.2m | USD 313.8m | USD 545.2m | USD 410.8m | Calculated | EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl; EX-99.1_2026-08-05_a06302026ex991pressrelease.htm.jsonl; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl | Components are sums of issuer-stated quarters; cross-checked to the sum of Q4 2025 to Q3 2026 |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 546.2m | USD 155.3m | USD 474.0m | USD 227.5m | Calculated | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | The nine-month 2026 figure includes about USD 43.0m of U.S. income tax refunds |
| Additions to property and equipment | LTM to 2026-09-30 | USD -343.5m | USD -328.0m | USD -237.2m | USD -434.3m | Calculated | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | Outflow shown as negative |
| Interest expense, net | LTM to 2026-09-30 | USD 98.8m | USD 73.2m | USD 74.0m | USD 98.0m | Calculated | 10-K_2025-12-31_val-20251231.htm.jsonl; 10-Q_2026-09-30_val-20260930.htm.jsonl | Net of capitalised interest; an expense, not cash paid |
| Cash Interest Paid | LTM to 2026-09-30 | USD 90.5m | Not supplied: the quarterly reports state no cash paid for interest | Not supplied: the quarterly reports state no cash paid for interest | Not calculable: stub components missing | Not Calculable | 10-K_2025-12-31_val-20251231.htm.jsonl | One missing component makes the whole derived figure missing |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,082.7 | Net debt data FY2024 / 2024-12-31 | 474.4 | T4.4 EBITDA (Reported); calculation C01 | FY2024 / 2024-12-31 | USD | US$m | 2.28 | Calculated | Tier 1 (audited) | Reported EBITDA is operating income plus depreciation (annual); carrying value of debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 714.5 | Net debt data FY2024 / 2024-12-31 | 474.4 | T4.4 EBITDA (Reported); calculation C01 | FY2024 / 2024-12-31 | USD | US$m | 1.51 | Calculated | Tier 1 (audited) | Reported EBITDA is operating income plus depreciation (annual); carrying value of debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 474.4 | T4.4 EBITDA (Reported); calculation C01 | 78.3 | T4.5 Cash Interest Paid; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 | FY2024 / 2024-12-31 | USD | US$m | 6.06 | Calculated | Tier 1 (audited) | Cash interest paid is interest paid net of amounts capitalized |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,082.7 | Net debt data FY2024 / 2024-12-31 | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | Not supplied | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA stated | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA by quarter from Q3 2025 only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 714.5 | Net debt data FY2024 / 2024-12-31 | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | Not supplied | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA stated | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA by quarter from Q3 2025 only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | Not supplied | 78.3 | T4.5 Cash Interest Paid; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no adjusted EBITDA stated | Not Calculable | Tier 1 (audited) | Issuer states Adjusted EBITDA by quarter from Q3 2025 only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,086.0 | Net debt data FY2025 / 2025-12-31 | 623.3 | T4.4 EBITDA (Reported); calculation C02 | FY2025 / 2025-12-31 | USD | US$m | 1.74 | Calculated | Tier 1 (audited) | Reported EBITDA is operating income plus depreciation (annual); carrying value of debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 486.6 | Net debt data FY2025 / 2025-12-31 | 623.3 | T4.4 EBITDA (Reported); calculation C02 | FY2025 / 2025-12-31 | USD | US$m | 0.78 | Calculated | Tier 1 (audited) | Reported EBITDA is operating income plus depreciation (annual); carrying value of debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 623.3 | T4.4 EBITDA (Reported); calculation C02 | 90.5 | T4.5 Cash Interest Paid; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 | FY2025 / 2025-12-31 | USD | US$m | 6.89 | Calculated | Tier 1 (audited) | Cash interest paid is interest paid net of amounts capitalized |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,086.0 | Net debt data FY2025 / 2025-12-31 | 642.2 | T4.4 EBITDA (Adjusted); calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 1.69 | Calculated | Tier 1 (audited) | Issuer-adjusted EBITDA (annual); carrying value of debt |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 486.6 | Net debt data FY2025 / 2025-12-31 | 642.2 | T4.4 EBITDA (Adjusted); calculation C03 | FY2025 / 2025-12-31 | USD | US$m | 0.76 | Calculated | Tier 1 (audited) | Issuer-adjusted EBITDA (annual); carrying value of debt |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 642.2 | T4.4 EBITDA (Adjusted); calculation C03 | 90.5 | T4.5 Cash Interest Paid; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 | FY2025 / 2025-12-31 | USD | US$m | 7.10 | Calculated | Tier 1 (audited) | Cash interest paid is interest paid net of amounts capitalized |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,088.5 | Net debt data 2026-09-30 | 367.0 | T4.4 EBITDA (Reported); calculation C08 | 2026-09-30 | USD | US$m | 2.97 | Calculated | Tier 2b (unaudited) | Reported EBITDA is operating income plus depreciation (last twelve months); carrying value of debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 563.4 | Net debt data 2026-09-30 | 367.0 | T4.4 EBITDA (Reported); calculation C08 | 2026-09-30 | USD | US$m | 1.54 | Calculated | Tier 2b (unaudited) | Reported EBITDA is operating income plus depreciation (last twelve months); carrying value of debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 367.0 | calculation C08 | Not supplied: the quarterly reports state no cash paid for interest | Not supplied | 2026-09-30 | USD | US$m | Not calculable: no last-twelve-month cash interest paid | Not Calculable | Tier 2b (unaudited) | Cash interest paid is stated for years only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,088.5 | Net debt data 2026-09-30 | 410.8 | T4.4 EBITDA (Adjusted); calculation C09 | 2026-09-30 | USD | US$m | 2.65 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA (last twelve months); carrying value of debt |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 563.4 | Net debt data 2026-09-30 | 410.8 | T4.4 EBITDA (Adjusted); calculation C09 | 2026-09-30 | USD | US$m | 1.37 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA (last twelve months); carrying value of debt |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 410.8 | calculation C09 | Not supplied: the quarterly reports state no cash paid for interest | Not supplied | 2026-09-30 | USD | US$m | Not calculable: no last-twelve-month cash interest paid | Not Calculable | Tier 2b (unaudited) | Cash interest paid is stated for years only |
| EBITDA (Reported) / interest expense, net | EBITDA (Reported) / Interest expense, net | 367.0 | calculation C08 | 98.0 | T4.8 Interest expense, net | 2026-09-30 | USD | US$m | 3.74 | Proxy | Tier 2b (unaudited) | Proxy for cover where cash interest paid is not stated; interest expense is accrued and net of capitalised interest |
| EBITDA (Adjusted) / interest expense, net | EBITDA (Adjusted) / Interest expense, net | 410.8 | calculation C09 | 98.0 | T4.8 Interest expense, net | 2026-09-30 | USD | US$m | 4.19 | Proxy | Tier 2b (unaudited) | Proxy for cover where cash interest paid is not stated; interest expense is accrued and net of capitalised interest |
| EBITDA (Adjusted) / interest expense, net, Q3 2026 | EBITDA (Adjusted) / Interest expense, net | 150.6 | T4.4 EBITDA (Adjusted) Q3 2026 | 24.9 | T4.4 Interest expense, net Q3 2026 | Q3 2026 | USD | US$m | 6.05 | Proxy | Tier 2b (unaudited) | One quarter, not annualised; interest expense is accrued and net of capitalised interest |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Operations | Fleet utilisation, total fleet, Valaris Total (%) | 67 | 63 | 58 | 61 | 67 | Flat year on year, with a trough in Q1 2026 | Period flow rate; days under contract over available days for the whole fleet including stacked rigs |
| Operations | Revenue efficiency, total floaters and jackups (%) | 95 | 98 | 98 | 98 | 97 | Up year on year, stable at 97% to 98% | Period flow rate; day rate revenue as a share of the maximum potential |
| Operations | Operating days, floaters and jackups | 2,286 | 2,141 | 1,885 | 2,010 | 2,060 | Down year on year | Period flow; days under contract, excluding leased and managed rigs |
| Operations | Average daily revenue, Valaris Total (USD) | 176,000 | 177,000 | 171,000 | 189,000 | 200,000 | Rising | Period flow rate; revenue excluding reimbursables over operating days |
| Operations | Active-fleet utilisation, drillships (%) | 63 | 58 | 49 | 68 | 80 | Rising since Q1 2026 | Period flow rate; excludes preservation-stacked rigs |
| Backlog | Contract backlog, Valaris Total (USD millions), at the release date after each quarter | 4,450.3 | 4,672.3 | 4,929.1 | 4,585.2 | 4,750.1 | Higher than a year earlier; peaked on 2026-05-04 | Period-end value at the release dates 2025-10-23, 2026-02-17, 2026-05-04, 2026-08-05 and 2026-11-02; may include contracts subject to final investment decision |
Basis: EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 11–13

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is operating income plus depreciation | Adjusted EBITDA excludes depreciation, other operating (income) loss, gains and losses on sale of assets, merger and integration expenses and equity in earnings of ARO | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 15 | LTM to 2026-09-30: 410.8 adjusted against 367.0 reported, difference 43.8 (merger 40.5, other operating loss 19.7, less equity earnings of ARO 16.4) | High: 11.9% of reported LTM EBITDA | Fundamental credit; Financial foundation consumers | Leverage uses reported EBITDA as primary; adjusted ratios are separate labelled rows |
| Total debt | Balance-sheet carrying value of all debt lines | The notes at principal USD 1,100.0 million; carrying value USD 1,088.5 million at 2026-09-30 | 10-Q_2026-09-30_val-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 21 | Difference USD 11.5 million (net unamortised costs, discount and premium); 1.05% of principal | Low | Leverage, Refinancing & LME | Carrying value is used; principal is shown beside it |
| Cash | Cash and cash equivalents on the balance sheet | The cash flow statement ends on cash plus restricted cash of USD 541.6 million; restricted cash USD 16.5 million | 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 30 | Difference USD 16.5 million at 2026-09-30 | Low | Liquidity, net debt | Balance-sheet cash is used for net debt; restricted cash is excluded |
| Interest | Cash interest paid for cover | Interest expense, net is accrued and net of capitalised interest; FY2025 USD 98.8 million against USD 90.5 million paid | 10-K_2025-12-31_val-20251231.htm.jsonl, page 129; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153 | FY2025 difference USD 8.3 million; the expense includes USD 6.6 million of non-cash amortisation of debt premium and issuance costs and is net of USD 1.9 million of capitalised interest | Medium for quarterly cover, none stated for interim cash paid | Fundamental credit | Annual cover uses cash paid; interim cover uses a labelled proxy on net interest expense |
| Net debt | Gross debt less balance-sheet cash | Notes receivable from ARO (carrying USD 363.4 million) and the investment in ARO (USD 135.7 million) are not netted | 10-Q_2026-09-30_val-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 17 | Not netted; recovery depends on ARO repayments due in October 2027 and October 2028 | Medium | Fundamental credit, Liquidity | Net debt excludes ARO receivables; they are noted as a separate claim |
| Perimeter | Consolidated Valaris Limited | ARO is reported at 100% in release tables and at 50% through equity earnings in the statements | EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 4; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 14 | Segment table removes ARO from consolidated results; ARO Adjusted EBITDA of USD 45.5 million in Q3 is not in group EBITDA | Medium | Business & governance, Fundamental credit | Group EBITDA excludes ARO; ARO is a separate line |
| Debt scope | Leases are not debt | Lease liabilities are carried in accrued liabilities (USD 27.9 million) and other liabilities (USD 41.3 million) at 2026-09-30 | 10-Q_2026-09-30_val-20260930.htm.jsonl, page 29 | USD 69.2 million outside Total Debt | Low | Leverage | Total Debt excludes lease liabilities, which the issuer presents on their own lines |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2.28 | 1.51 | x | Reported EBITDA (operating income plus depreciation), fiscal year; debt at carrying value (principal USD 1,100.0 million) |
| FY2025 / 2025-12-31 | 1.74 | 0.78 | x | Reported EBITDA (operating income plus depreciation), fiscal year; debt at carrying value (principal USD 1,100.0 million) |
| 2026-09-30 | 2.97 | 1.54 | x | Reported EBITDA (operating income plus depreciation), last twelve months to 2026-09-30; debt at carrying value (principal USD 1,100.0 million) |

The last-twelve-month row uses unaudited nine-month figures; adjusted-EBITDA leverage is in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 6.06 | x | Reported EBITDA over cash interest paid, net of amounts capitalized (10-K_2025-12-31_val-20251231.htm.jsonl, page 153); adjusted-EBITDA cover is not supplied for FY2024 because no FY2024 Adjusted EBITDA is stated |
| FY2025 / 2025-12-31 | 6.89 | x | Reported EBITDA over cash interest paid, net of amounts capitalized (10-K_2025-12-31_val-20251231.htm.jsonl, page 153); adjusted-EBITDA cover is 7.10x in the register |
| 2026-09-30 | Not supplied: the quarterly reports state no cash paid for interest, so no last-twelve-month cash interest | x | Proxy cover on interest expense, net is 3.74x on reported and 4.19x on adjusted EBITDA in the register; not a cash measure |

Cash interest paid is stated for fiscal years only, so the latest period has no cash-based cover.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 368.2 | Not supplied: the supplied annual report states revolver availability at 2025-12-31 and later dates only | US$m | Balance-sheet cash and cash equivalents (restricted cash excluded); revolver commitment USD 375.0 million but availability at this date is not stated |
| FY2025 / 2025-12-31 | 599.4 | 375.0 | US$m | Balance-sheet cash and cash equivalents (restricted cash excluded); undrawn is the USD 375.0 million revolver commitment with nothing drawn and no letters of credit issued under it |
| 2026-03-31 | 578.3 | 375.0 | US$m | Balance-sheet cash and cash equivalents (restricted cash excluded); undrawn is the USD 375.0 million revolver commitment with nothing drawn and no letters of credit issued under it |
| 2026-06-30 | 541.2 | 375.0 | US$m | Balance-sheet cash and cash equivalents (restricted cash excluded); undrawn is the USD 375.0 million revolver commitment with nothing drawn and no letters of credit issued under it |
| 2026-09-30 | 525.1 | 375.0 | US$m | Balance-sheet cash and cash equivalents (restricted cash excluded); undrawn is the USD 375.0 million revolver commitment with nothing drawn and no letters of credit issued under it |

Availability under the revolver depends on compliance with covenants whose levels are not printed.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0 | US$m | Contractual principal due in the rest of 2026: none; the annual report states no debt principal payments are due until 2030 |
| FY2027 | 0 | US$m | None due; the revolver matures in 2028 and is undrawn |
| FY2028 | 0 | US$m | None due; the USD 375.0 million revolver matures on 2028-04-03 with nothing outstanding |
| FY2029 | 0 | US$m | None due |
| FY2030 | 1,100.0 | US$m | The 8.375% Senior Secured Second Lien Notes due 2030-04-30 at principal (carrying value USD 1,088.5 million); callable at 102.094% from 2027-04-30 and at par from 2028-04-30 |

The ladder is drawn at the balance sheet date of 2026-09-30 on contractual principal, not carrying value.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Total operating revenues | 2,362.6 | 2,369.0 | 2,135.6 | USD millions | Reported; LTM is calculated (FY2025 + 9M 2026 - 9M 2025) | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| EBITDA (Reported) | 474.4 | 623.3 | 367.0 | USD millions | Calculated: operating income plus depreciation | 10-K_2025-12-31_val-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8 |
| EBITDA (Adjusted) | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | 642.2 | 410.8 | USD millions | Issuer-adjusted; FY2025 and LTM calculated from stated quarters | EX-99.1_2026-05-04_a03312026ex991pressrelease.htm.jsonl, page 10; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11 |
| Net cash from operating activities | 355.4 | 546.2 | 227.5 | USD millions | Reported; LTM is calculated | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Additions to property and equipment | -455.1 | -343.5 | -434.3 | USD millions | Reported; LTM is calculated | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Operating cash flow less capital additions | -99.7 | 202.7 | -206.8 | USD millions | Calculated: operating cash flow plus additions to property and equipment, before disposal proceeds | 10-K_2025-12-31_val-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10 |
| Total debt (carrying value) | 1,082.7 | 1,086.0 | 1,088.5 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 9 |
| Cash and cash equivalents | 368.2 | 599.4 | 525.1 | USD millions | Reported | 10-K_2025-12-31_val-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 9 |
| Net debt | 714.5 | 486.6 | 563.4 | USD millions | Calculated: gross debt less cash | calculation C11; calculation C12; calculation C15 |
| Total debt / EBITDA (Reported) | 2.28 | 1.74 | 2.97 | x | Calculated | calculation C17; calculation C20; calculation C26 |
| Net debt / EBITDA (Reported) | 1.51 | 0.78 | 1.54 | x | Calculated | calculation C18; calculation C21; calculation C27 |
| Total debt / EBITDA (Adjusted) | Not supplied: the supplied sources state no FY2024 Adjusted EBITDA | 1.69 | 2.65 | x | Calculated on issuer-adjusted EBITDA | calculation C23; calculation C28 |
| EBITDA / cash interest (Reported) | 6.06 | 6.89 | Not calculable: no last-twelve-month cash interest paid | x | Calculated; cash interest paid is annual only | calculation C19; calculation C22 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,082.7 | 368.2 | 714.5 | US$m | Reported (not pro forma). Gross debt is the carrying value of the 2030 Second Lien Notes, the only debt line, net of unamortised costs and premium; principal USD 1,100.0 million; no finance leases or securitisation in debt; lease liabilities excluded. Net debt does not net the ARO notes receivable |
| FY2025 / 2025-12-31 | 1,086.0 | 599.4 | 486.6 | US$m | Reported (not pro forma). Gross debt is the carrying value of the 2030 Second Lien Notes, the only debt line, net of unamortised costs and premium; principal USD 1,100.0 million; no finance leases or securitisation in debt; lease liabilities excluded. Net debt does not net the ARO notes receivable |
| 2026-03-31 | 1,086.8 | 578.3 | 508.5 | US$m | Reported (not pro forma). Gross debt is the carrying value of the 2030 Second Lien Notes, the only debt line, net of unamortised costs and premium; principal USD 1,100.0 million; no finance leases or securitisation in debt; lease liabilities excluded. Net debt does not net the ARO notes receivable |
| 2026-06-30 | 1,087.6 | 541.2 | 546.4 | US$m | Reported (not pro forma). Gross debt is the carrying value of the 2030 Second Lien Notes, the only debt line, net of unamortised costs and premium; principal USD 1,100.0 million; no finance leases or securitisation in debt; lease liabilities excluded. Net debt does not net the ARO notes receivable |
| 2026-09-30 | 1,088.5 | 525.1 | 563.4 | US$m | Reported (not pro forma). Gross debt is the carrying value of the 2030 Second Lien Notes, the only debt line, net of unamortised costs and premium; principal USD 1,100.0 million; no finance leases or securitisation in debt; lease liabilities excluded. Net debt does not net the ARO notes receivable |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1,100.0 | -11.5 | 1,088.5 | US$m | Principal is USD 700.0 million issued at par in April 2023 plus USD 400.0 million issued at 100.75% of par in August 2023; the reconciling item is the net of unamortised issuance costs, discount and premium, found by difference because no component table is printed; the undrawn revolver adds no debt |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Sale of the rig VALARIS 111 to a second buyer for conversion to a mobile offshore production unit | Not supplied: the source states October 2026 only | -7.5 | 555.9 | 1.51 | US$m | Cash proceeds of USD 10.5 million less a payment of about USD 3.0 million to the first buyer under the termination provisions (10-Q_2026-09-30_val-20260930.htm.jsonl, page 57); the first buyer's USD 1.7 million received on 2026-09-30 is already in cash and the source does not say whether the payment includes its return; the pre-tax gain of about USD 8.0 million is not in net debt; pro forma leverage is on LTM reported EBITDA of USD 367.0 million; the 2026-10-30 coupon and the Transocean combination are not reflected |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-09-30 | 555.6 | 163.2 | US$m | Quarter ended 2025-09-30: revenues exclusive of reimbursables and issuer-adjusted EBITDA as stated by the issuer (EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11); three-month periods only |
| 2025-12-31 | 502.2 | 97.0 | US$m | Quarter ended 2025-12-31: revenues exclusive of reimbursables and issuer-adjusted EBITDA as stated by the issuer (EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11); three-month periods only |
| 2026-03-31 | 430.1 | 66.7 | US$m | Quarter ended 2026-03-31: revenues exclusive of reimbursables and issuer-adjusted EBITDA as stated by the issuer (EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11); three-month periods only |
| 2026-06-30 | 502.3 | 96.5 | US$m | Quarter ended 2026-06-30: revenues exclusive of reimbursables and issuer-adjusted EBITDA as stated by the issuer (EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11); three-month periods only |
| 2026-09-30 | 555.6 | 150.6 | US$m | Quarter ended 2026-09-30: revenues exclusive of reimbursables and issuer-adjusted EBITDA as stated by the issuer (EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 11); three-month periods only |

Each row is one quarter, and Adjusted EBITDA is the issuer's own measure, which excludes equity earnings of ARO, merger costs and asset-sale gains.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| 2028 Credit Agreement (senior secured revolver) | 1 | Yes | 0 | 0.00 | US$m | First-priority lien; guaranteed by Valaris Finance Company LLC and certain subsidiaries; commitment USD 375.0 million, nothing drawn at 2026-09-30 (10-Q_2026-09-30_val-20260930.htm.jsonl, pages 21–22) |
| 8.375% Senior Secured Second Lien Notes due 2030 | 2 | Yes | 1,088.5 | 2.97 | US$m | Second-priority lien on the same collateral; issued by Valaris Limited and Valaris Finance Company LLC and guaranteed by certain subsidiaries; carrying value shown, principal USD 1,100.0 million; cumulative leverage on LTM reported EBITDA of USD 367.0 million (10-Q_2026-09-30_val-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 21; 10-K_2025-12-31_val-20251231.htm.jsonl, page 127) |

The revolver is undrawn, so cumulative leverage through the second lien notes equals total leverage on carrying value; obligor scope beyond the named guarantors is not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Reported EBITDA, last twelve months to 2026-09-30 | 367.0 | US$m | Operating income plus depreciation (calculation C08) |
| Merger and integration expenses | 40.5 | US$m | Issuer add-back; classification transaction costs; realisation status not stated; first incurred in Q1 2026, so the last-twelve-month figure equals the nine-month 2026 figure |
| Other operating loss, net | 19.7 | US$m | Issuer add-back; classification other (impairments and remeasurement of rigs held for sale, which the issuer describes as non-cash); realisation status not stated: FY2025 27.3 + 9M 2026 0.2 - 9M 2025 7.8 |
| Equity in earnings of ARO | -16.4 | US$m | Issuer deduction; classification other; realisation status not stated: FY2025 8.4 + 9M 2026 13.9 - 9M 2025 5.9, removed because the issuer's measure excludes it |
| Adjusted EBITDA (issuer-adjusted), last twelve months to 2026-09-30 | 410.8 | US$m | Sum of issuer-stated quarters Q4 2025 to Q3 2026 (calculation C09); the bridge reconciles exactly |

The bridge is on the last twelve months, built from year and nine-month stubs, and every step is as the issuer states it.

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q4 2025 | 2025-10-01 | 2025-12-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Leverage and coverage

Reported leverage rose from 1.74x at the end of FY2025 to 2.97x on the last twelve months to 2026-09-30 although debt barely moved, so the change is entirely earnings: last-twelve-month reported EBITDA fell from USD 623.3 million to USD 367.0 million because Adjusted EBITDA of USD 66.7 million and USD 96.5 million in the first two quarters of 2026 replaced USD 181.3 million and USD 200.7 million a year earlier, while four drillships returned to work after idle periods. Net leverage rose from 0.78x to 1.54x, and on the issuer's adjusted measure total leverage rose from 1.69x to 2.65x. Creditors are therefore looking at a trailing ratio that overstates current leverage if the 2026 recovery holds and understates it if the recovery stalls.
Basis: calculation C20; calculation C21; calculation C26; calculation C27; calculation C23; calculation C28; calculation C08; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 8; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 1

Within 2026 the trend runs the other way: Adjusted EBITDA was USD 66.7 million in Q1, USD 96.5 million in Q2 and USD 150.6 million in Q3, a rise of more than twofold from Q1, as three drillships started new contracts and a fourth won a higher day rate, and as the war-risk cost drag moderated from about USD 30 million in Q2 to about USD 24 million in Q3. The recovery is therefore operating-led, with revenue efficiency of 97% in Q3, but only the last two quarters show it; the trailing measures should improve as the weak Q4 2025 (Adjusted EBITDA of USD 97.0 million) leaves the last twelve months, if Q4 2026 comes in above that level.
Basis: calculation C43; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, pages 1–3

Cash interest cover was 6.89x in FY2025 and 6.06x in FY2024 on reported EBITDA, and 7.10x on adjusted EBITDA in FY2025. Cash interest paid is stated only for fiscal years, so cash-based cover for the last twelve months is not calculable; on accrued net interest expense the proxy is 3.74x on reported and 4.19x on adjusted EBITDA, which is thinner than the annual figure but still adequate for a fixed-rate bond whose coupon is about USD 92.1 million a year.
Basis: calculation C22; calculation C19; calculation C25; calculation C30; calculation C31; 10-K_2025-12-31_val-20251231.htm.jsonl, page 153

### Cash flow quality

The group is not self-funding at the current investment rate. In the nine months of 2026 operating cash flow of USD 155.3 million fell short of capital additions of USD 328.0 million, so operating cash flow less capital additions was negative USD 172.7 million against positive USD 236.8 million a year earlier; asset sales of USD 102.6 million and about USD 43.0 million of U.S. tax refunds inside operating cash flow limited the fall in balance-sheet cash to USD 74.3 million. Receivables rose by USD 80.0 million in Q3 and changes in operating assets and liabilities used USD 56.6 million, so working capital absorbed part of the earnings recovery.
Basis: calculation C34; calculation C35; calculation C37; calculation C42; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 29; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 52

The issuer expects 2026 capital additions of USD 445.0 million to USD 470.0 million, which implies USD 117.0 million to USD 142.0 million in the fourth quarter. At the Q3 operating cash flow of USD 67.2 million the fourth quarter would again fall short of capital additions, so operating cash flow less capital additions would stay negative into the year end; this is an inference from the stated range, not a figure the issuer gives.
Basis: calculation C38; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 52

Contract liabilities (deferred customer revenue) rose from USD 150.9 million to USD 208.0 million over nine months, a USD 57.1 million non-debt funding float that supports cash today and unwinds as the related contracts are performed, so part of the cash balance is customer prepayment rather than earnings.
Basis: calculation C39; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 29

### Liquidity

Liquidity was USD 900.1 million at 2026-09-30 (cash of USD 525.1 million plus the undrawn USD 375.0 million revolver), against no principal maturity before 2030 and a single bond. Letters of credit and surety bonds of USD 113.7 million are issued outside the revolver, so the full facility is available subject to covenants whose levels are not printed. The unconsolidated ARO joint venture is a contingent call on cash: each partner may be asked for up to USD 1.1 billion of newbuild funding if ARO cannot raise third-party finance, and USD 400.7 million of notes receivable from ARO are due in October 2027 and October 2028 with an expected extension.
Basis: calculation C33; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 22; 10-Q_2026-09-30_val-20260930.htm.jsonl, pages 25–26; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 51; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 54

### Definitions and data quality

Reported EBITDA is a derived measure (operating income plus depreciation) because the issuer states only Adjusted EBITDA; the difference to the issuer's measure was USD 43.8 million over the last twelve months, mostly merger costs of USD 40.5 million and other operating loss of USD 19.7 million, less USD 16.4 million of equity earnings of ARO. Each stated quarter of Adjusted EBITDA reconciles exactly to the statements, and the last-twelve-month figures agree whether built from year and nine-month stubs or from four quarters. Cash interest paid for interim periods and FY2024 Adjusted EBITDA are not stated anywhere in the supplied documents.
Basis: calculation C44; calculation C10; EX-99.1_2026-11-02_a09302026ex991pressrelease.htm.jsonl, page 15

### Subsequent events

The October 2026 sale of VALARIS 111 reduces net debt by about USD 7.5 million and lowers pro forma net leverage to 1.51x from 1.54x on reported EBITDA, a small effect. The larger event for creditors is the pending all-stock combination with Transocean, scheduled to close on or about 2026-12-01: the supplied documents do not say how Valaris debt is treated in the transaction, but if a change of control triggering event occurs under the indenture, noteholders may be offered repurchase at 101.0% of principal. No effect on net debt is stated, so none is estimated.
Basis: calculation C45; calculation C46; 10-Q_2026-09-30_val-20260930.htm.jsonl, pages 11–12; 10-Q_2026-09-30_val-20260930.htm.jsonl, page 57; 10-K_2025-12-31_val-20251231.htm.jsonl, page 127

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and net debt snapshot | Ready with Limitations | LTM EBITDA is unaudited and built from nine-month stubs; reported EBITDA is derived; debt excludes leases and ARO receivables | Use reported leverage as primary and the adjusted rows as labelled alternatives |
| Interest cover | Ready with Limitations | Cash interest paid is stated for fiscal years only; latest cover is a proxy on accrued net interest expense | Obtain cash interest paid for the nine months of 2026 and 2025 |
| Liquidity | Ready | Revolver availability depends on covenants whose levels are not printed | None for the snapshot |
| Debt maturity profile | Ready | Notes terms are as summarised in the filings; indenture not supplied | None for the snapshot |
| Earnings trend by quarter | Ready | Adjusted EBITDA is the issuer's measure; FY2024 Adjusted EBITDA not stated | None for the snapshot |
| Covenant headroom | Not Ready | Covenant levels and definitions are not printed; no executed credit agreement | Obtain the credit agreement and compliance certificate |
| Peer comparison | Not Ready | No peer data supplied | Supply peer filings |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 13 |
| Fields total | 16 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

## Calculations

All arithmetic is exact on the printed figures; ratios are rounded half up to two decimals.

| ID | Calculation | Inputs | Result | Unit |
|---|---|---|---|---|
| C01 | EBITDA (Reported) FY2024 | operating income 352.3 + depreciation 122.1 | 474.4 | USD millions |
| C02 | EBITDA (Reported) FY2025 | operating income 477.0 + depreciation 146.3 | 623.3 | USD millions |
| C03 | EBITDA (Adjusted) FY2025 | Q1 2025 181.3 + Q2 2025 200.7 + Q3 2025 163.2 + Q4 2025 97.0 | 642.2 | USD millions |
| C04 | EBITDA (Reported) 9M 2025 | operating income 437.6 + depreciation 105.7 | 543.3 | USD millions |
| C05 | EBITDA (Reported) 9M 2026 | operating income 152.4 + depreciation 134.6 | 287.0 | USD millions |
| C06 | EBITDA (Adjusted) 9M 2025 | Q1 2025 181.3 + Q2 2025 200.7 + Q3 2025 163.2 | 545.2 | USD millions |
| C07 | EBITDA (Adjusted) 9M 2026 | Q1 2026 66.7 + Q2 2026 96.5 + Q3 2026 150.6 | 313.8 | USD millions |
| C08 | EBITDA (Reported) last twelve months to 2026-09-30 | FY2025 623.3 + 9M 2026 287.0 - 9M 2025 543.3 | 367.0 | USD millions |
| C09 | EBITDA (Adjusted) last twelve months to 2026-09-30 | FY2025 642.2 + 9M 2026 313.8 - 9M 2025 545.2 | 410.8 | USD millions |
| C10 | Cross-check of last-twelve-month EBITDA through quarters | Reported: Q4 2025 80.0 + Q1 2026 62.7 + Q2 2026 95.7 + Q3 2026 128.6; Adjusted: 97.0 + 66.7 + 96.5 + 150.6 | 367.0 reported; 410.8 adjusted | USD millions |
| C11 | Net debt at 2024-12-31 | gross debt 1,082.7 - cash 368.2 | 714.5 | USD millions |
| C12 | Net debt at 2025-12-31 | gross debt 1,086.0 - cash 599.4 | 486.6 | USD millions |
| C13 | Net debt at 2026-03-31 | gross debt 1,086.8 - cash 578.3 | 508.5 | USD millions |
| C14 | Net debt at 2026-06-30 | gross debt 1,087.6 - cash 541.2 | 546.4 | USD millions |
| C15 | Net debt at 2026-09-30 | gross debt 1,088.5 - cash 525.1 | 563.4 | USD millions |
| C16 | Reconciling items between principal and carrying value at 2026-09-30 | carrying value 1,088.5 - principal 1,100.0 | -11.5 | USD millions |
| C17 | Total debt / EBITDA (Reported) FY2024 / 2024-12-31 | gross debt 1,082.7 / EBITDA 474.4 | 2.28 | x |
| C18 | Net debt / EBITDA (Reported) FY2024 / 2024-12-31 | net debt 714.5 / EBITDA 474.4 | 1.51 | x |
| C19 | EBITDA (Reported) / cash interest FY2024 / 2024-12-31 | EBITDA 474.4 / cash interest paid 78.3 | 6.06 | x |
| C20 | Total debt / EBITDA (Reported) FY2025 / 2025-12-31 | gross debt 1,086.0 / EBITDA 623.3 | 1.74 | x |
| C21 | Net debt / EBITDA (Reported) FY2025 / 2025-12-31 | net debt 486.6 / EBITDA 623.3 | 0.78 | x |
| C22 | EBITDA (Reported) / cash interest FY2025 / 2025-12-31 | EBITDA 623.3 / cash interest paid 90.5 | 6.89 | x |
| C23 | Total debt / EBITDA (Adjusted) FY2025 / 2025-12-31 | gross debt 1,086.0 / Adjusted EBITDA 642.2 | 1.69 | x |
| C24 | Net debt / EBITDA (Adjusted) FY2025 / 2025-12-31 | net debt 486.6 / Adjusted EBITDA 642.2 | 0.76 | x |
| C25 | EBITDA (Adjusted) / cash interest FY2025 / 2025-12-31 | Adjusted EBITDA 642.2 / cash interest paid 90.5 | 7.10 | x |
| C26 | Total debt / EBITDA (Reported) 2026-09-30 | gross debt 1,088.5 / EBITDA 367.0 | 2.97 | x |
| C27 | Net debt / EBITDA (Reported) 2026-09-30 | net debt 563.4 / EBITDA 367.0 | 1.54 | x |
| C28 | Total debt / EBITDA (Adjusted) 2026-09-30 | gross debt 1,088.5 / Adjusted EBITDA 410.8 | 2.65 | x |
| C29 | Net debt / EBITDA (Adjusted) 2026-09-30 | net debt 563.4 / Adjusted EBITDA 410.8 | 1.37 | x |
| C30 | EBITDA (Reported) / interest expense, net, last twelve months to 2026-09-30 | EBITDA 367.0 / interest expense, net 98.0 | 3.74 | x |
| C31 | EBITDA (Adjusted) / interest expense, net, last twelve months to 2026-09-30 | Adjusted EBITDA 410.8 / interest expense, net 98.0 | 4.19 | x |
| C32 | EBITDA (Adjusted) / interest expense, net, Q3 2026 | Adjusted EBITDA 150.6 / interest expense, net 24.9 | 6.05 | x |
| C33 | Liquidity at 2026-09-30 | cash 525.1 + undrawn revolver 375.0 | 900.1 | USD millions |
| C34 | Operating cash flow less capital additions, 9M 2026 | operating cash flow 155.3 + additions to property and equipment -328.0 | -172.7 | USD millions |
| C35 | Operating cash flow less capital additions, 9M 2025 | operating cash flow 474.0 + additions to property and equipment -237.2 | 236.8 | USD millions |
| C36 | Operating cash flow less capital additions, last twelve months | LTM operating cash flow 227.5 (546.2 + 155.3 - 474.0) + LTM additions -434.3 (-343.5 + -328.0 - -237.2) | -206.8 | USD millions |
| C37 | Change in balance-sheet cash from 2025-12-31 to 2026-09-30 | 525.1 - 599.4 | -74.3 | USD millions |
| C38 | Fourth-quarter capital additions implied by the 2026 range | range 445.0 to 470.0 less nine-month additions 328.0 | 117.0 to 142.0 | USD millions |
| C39 | Contract liabilities (deferred revenue) at 2026-09-30 and 2025-12-31 | current 129.9 + noncurrent 78.1 = 208.0; current 87.7 + noncurrent 63.2 = 150.9 | increase of 57.1 | USD millions |
| C40 | Annual coupon on the 2030 Second Lien Notes | principal 1,100.0 x 8.375% | 92.1 | USD millions |
| C41 | Semi-annual coupon on the 2030 Second Lien Notes | principal 1,100.0 x 8.375% / 2 | 46.1 | USD millions |
| C42 | Change in accounts receivable in Q3 2026 | 538.1 - 458.1 | 80.0 | USD millions |
| C43 | Adjusted EBITDA, Q3 2026 against Q1 2026 | 150.6 / 66.7 | 2.26 | x |
| C44 | Bridge from reported to adjusted EBITDA, last twelve months | 367.0 + 40.5 + 19.7 - 16.4 | 410.8 | USD millions |
| C45 | Pro forma net debt after the October 2026 rig sale | net debt 563.4 - (proceeds 10.5 - payment 3.0 = 7.5) | 555.9 | USD millions |
| C46 | Pro forma net debt / EBITDA (Reported) after the October 2026 rig sale | pro forma net debt 555.9 / EBITDA 367.0 | 1.51 | x |

## Gaps

- Cash interest paid is not stated for any quarter or nine-month period, so EBITDA over cash interest for the last twelve months to 2026-09-30 is not calculable; it restricts cash-based cover for the latest period (High); obtain the supplemental cash flow note of each quarterly report. A proxy on accrued net interest expense is shown instead.
- FY2024 Adjusted EBITDA is not stated in the supplied documents, so adjusted leverage and cover for FY2024 are not supplied; it restricts the adjusted trend before FY2025 (Low); obtain the FY2024 earnings release.
- Revolver availability at 2024-12-31 is not stated in the supplied annual report, so the undrawn facility for FY2024 is not supplied; it restricts the FY2024 liquidity figure (Low).
- Dashes in the source statements (merger and integration expenses, other operating items, share repurchases, debt issuance costs and other financing) are carried as not supplied rather than zero, as the method requires; no total depends on them (Low).
- The line for bad debt expense (recovery) is shown separately only in the quarterly and nine-month cash flow statements, so the FY2024 and FY2025 columns are not supplied for it; operating cash flow still adds up in every column (Low).
- No financial covenant level, definition or compliance figure is printed for the 2028 Credit Agreement, so no headroom is calculated (High for covenant work, none for leverage); obtain the credit agreement.
- No component table separates the USD 11.5 million between principal and carrying value of the notes into discount, premium and issuance costs, so the reconciling item is found by difference (Low).
- The statements for Valaris Finance Company LLC and the guarantor subsidiaries are not supplied, so guarantor leverage and structural priority cannot be assessed (Medium).
- The effect of the pending Transocean combination on the group's debt, including any repurchase offer for the notes, is not stated, so no pro forma figure for it is given (Medium); revisit after closing.
- The 2026-10-30 coupon payment of about USD 46.1 million is a scheduled payment that the supplied documents do not report as made, so it is not reflected in the pro forma net debt (Low).
- ARO's full financial statements are not supplied; only a condensed 100% income statement is, so the group's exposure to ARO is limited to the notes receivable, the investment, the earnings line and the newbuild funding commitment (Medium).
- Page numbers cited in this analysis are chunk numbers of the supplied text files, not printed page numbers (Low).

## Next module

The orchestrator selects the next module.

