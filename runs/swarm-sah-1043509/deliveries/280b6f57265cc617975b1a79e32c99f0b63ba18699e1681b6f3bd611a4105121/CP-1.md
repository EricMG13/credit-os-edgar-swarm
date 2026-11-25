---
issuer_id: sah-1043509
module_id: CP-1
analysis_date: 2026-11-18
issuer_name: Sonic Automotive Inc
pathway: credit_snapshot
run_id: sah-1043509-2026-11-18-credit_snapshot-host
---

## Request

Financial foundation for Sonic Automotive Inc, as of 2026-11-18, on the credit snapshot pathway. The scope is the five supplied filings and the Source readiness assessment: normalised statements, debt, liquidity, leverage and interest cover at balance-sheet carrying value.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_sah.htm.jsonl | Annual report on Form 10-K of Sonic Automotive, Inc. for the year ended December 31, 2024, signed February 19, 2025 | 2025-02-19 | 836d2eea368346b1f0e4515059fa1c28395fae6599d991917b246b18574ce357 | FY2024 and FY2023 comparatives, covenant ratios at 2024-12-31, liquidity table at 2024-12-31, Adjusted EBITDA for FY2024 and FY2023 |
| 10-K_2025-12-31_sah.htm.jsonl | Annual report on Form 10-K of Sonic Automotive, Inc. for the year ended December 31, 2025, signed February 23, 2026 | 2026-02-23 | ccd1eab0e7d1e563f359e792915f3bf529b431bddac2c8fb217bbe5644f4a346 | FY2024 and FY2025 statements, debt note and maturity table, liquidity, floor-plan-aligned operating cash flow, Adjusted EBITDA, segments, guarantee and security wording |
| 10-Q_2026-04-30_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended March 31, 2026, signed April 30, 2026 | 2026-04-30 | 1cd027fd7910522a80bc7bf59931c51a4fc41ba17f8f5f25d24b23cfbf353146 | Q1 2026 Adjusted EBITDA and the liquidity table at 2026-03-31 |
| 10-Q_2026-06-30_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended June 30, 2026, signed July 30, 2026 | 2026-07-30 | 97f33131d13d82a749a7edc3b15a392940d94b3e4e7b667799816fdc24397d9d | Q2 2026 Adjusted EBITDA and the liquidity table at 2026-06-30 |
| 10-Q_2026-10-29_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended September 30, 2026, signed October 29, 2026 | 2026-10-29 | e1bdf3c65867fa95357d1f034d0d04b5e8cc230819b0e8e3bb729246bf899da1 | Nine-month and Q3 2026 statements, balance sheet at 2026-09-30, debt note, covenant wording, liquidity, segments, Adjusted EBITDA, market risk and post-quarter dividends |

| Module | Handoff | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness assessment for Sonic Automotive Inc | 039c521b4491e173902585038c22599be95ef105cb7429b5b08242ca41f93208 | Source coverage, the list of agreements and ratings that are not supplied, and the file-name date convention |

## Findings

### Bottom line

Debt of 3.06x LTM reported EBITDA at 2026-09-30 looks better than 3.62x at 2025-12-31 only because the 2025 impairment dropped out; adjusted leverage rose from 2.63x to 2.97x, so creditors face weaker earnings on higher debt, not deleveraging.
Basis: calculation C5; calculation C7; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 93–94; 10-K_2025-12-31_sah.htm.jsonl, pages 104, 122

Reported operating cash flow was negative over the first nine months of 2026 as inventories rose, floor plan funding paid for the build, and issuer-defined liquidity fell to USD 585.2 million from USD 701.6 million at year-end. Covenant ratios are not printed after 2024-12-31, so headroom cannot be confirmed.
Basis: calculation C25; 10-Q_2026-10-29_sah.htm.jsonl, pages 8, 21, 87; 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-K_2024-12-31_sah.htm.jsonl, page 107

### Key findings

Total debt at carrying value rose to USD 1,749.7 million at 2026-09-30 from USD 1,615.4 million at 2025-12-31, and net debt is USD 1,739.0 million, or USD 1,752.0 million pro forma for a dividend paid after the quarter on 2026-10-15. Principal rose by USD 130.2 million, from a USD 150.0 million bridge facility and a USD 39.8 million variable-rate note to finance companies, partly offset by USD 44.6 million of reductions in the mortgage and sidecar facilities and USD 15.0 million of reductions in the fixed-rate notes. Reported net leverage is 3.04x, or 3.06x pro forma, against 3.60x at year-end, but the fall reflects the USD 173.8 million FY2025 impairment leaving the LTM base; on adjusted EBITDA net leverage rose from 2.62x to 2.95x.
Basis: calculation C1; calculation C19; calculation C20; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17; 10-K_2025-12-31_sah.htm.jsonl, pages 104, 145

LTM adjusted EBITDA of USD 589.5 million is USD 25.1 million below the USD 614.6 million of FY2025, and the decline sits in the Franchised Dealerships Segment, whose LTM adjusted EBITDA is USD 524.9 million against USD 553.9 million in FY2025, while EchoPark held at USD 49.2 million and Powersports rose to USD 15.4 million from USD 11.5 million. In Q3 2026 adjusted EBITDA was USD 134.4 million against USD 149.4 million a year earlier, down USD 15.0 million or 10.04%, while revenue was nearly flat at USD 3,988.8 million against USD 3,973.8 million; selling, general and administrative expenses rose USD 15.2 million to USD 466.8 million while gross profit rose only USD 2.0 million to USD 617.5 million, so the pressure is cost growth, not volume.
Basis: calculation C21; calculation C22; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93–94; 10-K_2025-12-31_sah.htm.jsonl, page 104

EBITDA covers cash interest 2.87x on the reported LTM basis and 2.96x on the adjusted basis, against 2.36x and 3.24x in FY2025; the reported cover rose because the impairment left the base, while the adjusted cover fell because adjusted EBITDA slipped and cash interest rose. Cover is conservative because cash interest paid of USD 198.9 million includes floor plan interest, which the EBITDA used here already deducts; adding LTM floor plan interest of USD 87.2 million back to reported EBITDA gives 3.31x.
Basis: calculation C10; calculation C18; 10-Q_2026-10-29_sah.htm.jsonl, page 8; 10-K_2025-12-31_sah.htm.jsonl, page 125

Reported operating cash flow for the nine months of 2026 was USD -14.5 million as inventories absorbed USD 415.4 million; floor plan notes funded the build mainly in financing cash flow, and on the issuer's alternative basis operating cash flow was USD 424.2 million against USD 729.7 million for the nine months of 2025. The floor plan funding appears as USD 438.7 million of non-trade financing and USD 26.6 million of trade operating flow, USD 465.3 million in all, and the combined figure is the one that serves the alternative basis. LTM operating cash flow is USD 52.4 million as printed and USD 276.3 million on that basis, against LTM capital expenditure of USD 261.0 million, so LTM free cash flow is USD -208.6 million as printed and USD 15.3 million on the alternative basis, before USD 169.3 million of acquisitions and USD 142.0 million of share repurchases in the nine months.
Basis: calculation C10; calculation C24; 10-Q_2026-10-29_sah.htm.jsonl, pages 8, 91–92

Issuer-defined liquidity resources fell by USD 116.4 million to USD 585.2 million at 2026-09-30 from USD 701.6 million at 2025-12-31, of which USD 110.0 million is the floor plan deposit balance falling to USD 190.0 million from USD 300.0 million. Cash plus committed undrawn availability is USD 395.2 million, against USD 401.6 million at year-end and USD 521.6 million at 2024-12-31, which is 0.23x total debt against 0.25x and 0.33x; the balance-sheet cash balance is only USD 10.7 million, and pro forma cash after the dividend paid on 2026-10-15 is not established.
Basis: calculation C11; calculation C25; 10-Q_2026-10-29_sah.htm.jsonl, page 87; 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-K_2024-12-31_sah.htm.jsonl, page 99

The latest maturity ladder the filings print is at 2025-12-31, with USD 1,635.2 million of principal, USD 416.2 million due in 2027 and USD 651.0 million in 2029. At 2026-09-30 the USD 150.0 million bridge facility, due within 364 days of its closing or earlier on a refinancing of the mortgage facility, and the USD 411.2 million mortgage and sidecar facilities, which amortise through 2027 and mature in 2027, together are USD 561.2 million to repay or refinance by the end of 2027, and USD 193.3 million is already classed as current.
Basis: calculation C19; calculation C5; 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17, 20–21

Total debt excludes floor plan notes payable of USD 2,288.0 million, which the issuer treats as inventory financing, and finance and operating lease liabilities of USD 407.1 million and USD 278.8 million; including floor plan notes would put LTM total debt at 7.06x reported EBITDA and including finance leases at 3.77x, so every leverage figure here states its perimeter. Reported EBITDA is not printed by the issuer and is derived from its own reconciliation lines, with floor plan interest and impairment left as expenses.
Basis: calculation C2; calculation C15; calculation C16; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 89, 93–94

The financial covenants are a minimum fixed charge coverage of 1.20x and a maximum lease-adjusted leverage of 5.75x, and the issuer states compliance at 2026-09-30, but the last printed ratio values are 2.15x and 3.07x at 2024-12-31; no ratio value is printed for 2025-12-31 or 2026-09-30, and this module does not infer covenant headroom.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 21; 10-K_2025-12-31_sah.htm.jsonl, page 149; 10-K_2024-12-31_sah.htm.jsonl, page 107

Two dividends after the quarter-end are kept out of period figures: USD 13.0 million paid on 2026-10-15, which lifts pro forma net debt to USD 1,752.0 million, and a further USD 0.41 per share payable on 2027-01-15 whose aggregate is not stated.
Basis: calculation C20; 10-Q_2026-10-29_sah.htm.jsonl, pages 7, 91

Statement identities hold at every date except the FY2024 cash flow, where the three printed activity totals sum to USD 15.2 million but the filing prints a net change of USD 15.1 million, so that net change is left unsupported. Where the filing prints a dash the cell is not supplied, not zero; the exception is the issuer's own EBITDA reconciliation, where dashes mean no adjustment because the printed totals reconcile only on that reading.
Basis: calculation C3; calculation C6; 10-K_2025-12-31_sah.htm.jsonl, page 125

### Contrary evidence and what would change the view

The strongest case that credit is firmer than it looks is that reported net leverage of 3.04x, or 3.06x pro forma for the dividend paid on 2026-10-15, is below the 3.60x of year-end, reported cover rose to 2.87x, nine-month net income recovered to USD 159.4 million from USD 71.8 million, and floor plan notes rose USD 355.3 million alongside a USD 430.1 million rise in inventory, so most of the funding growth is matched to stock; the issuer also states compliance with every restrictive covenant. The view would improve if adjusted EBITDA steadies above USD 614.6 million or debt falls, and it would weaken if the franchised segment decline continues into Q4 2026 or the USD 561.2 million of 2027 repayments is refinanced on worse terms.
Basis: calculation C19; calculation C22; calculation C23; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6, 21, 93–94

### Limitations

Interim ratios use last-twelve-month figures whose 2025 comparative columns are as shown in the 2026 quarterly reports, because no 2025 quarterly reports are supplied; the legal rank of the facilities, the covenant definitions, ratings and a current maturity schedule are not in the sources, and the source readiness assessment lists the agreements that are not supplied.
Basis: Source readiness (CP-0); 10-Q_2026-10-29_sah.htm.jsonl, page 5

This module states figures and tie-outs only; it makes no covenant, ranking or recovery judgement, and every ratio is on carrying-value debt with the perimeter stated.

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_sah.htm.jsonl | Annual report, Form 10-K | FY2024, with FY2023 and FY2022 statement comparatives | USD | millions | Sonic Automotive, Inc., consolidated | US GAAP | Tier 1, audited statements | FY2024 baseline, covenant ratios at 2024-12-31, FY2023 comparatives for growth | FY2022 column audited by a predecessor auditor; superseded by the FY2025 report for FY2024 figures only where restated, and no restatement is printed |
| 10-K_2025-12-31_sah.htm.jsonl | Annual report, Form 10-K | FY2025, with FY2024 and FY2023 comparatives | USD | millions | Sonic Automotive, Inc., consolidated | US GAAP | Tier 1, audited statements | Primary source for FY2024 and FY2025 statements, debt note, maturity table, liquidity, floor-plan-aligned operating cash flow | Proxy statement items incorporated by reference are not supplied |
| 10-Q_2026-04-30_sah.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 (quarter ended 2026-03-31) | USD | millions | Sonic Automotive, Inc., consolidated | US GAAP | Tier 2b, unaudited | Quarterly adjusted EBITDA of 148.8 and liquidity table at 2026-03-31 | Unaudited; rolled into the six- and nine-month figures |
| 10-Q_2026-06-30_sah.htm.jsonl | Quarterly report, Form 10-Q | Q2 2026 and six months ended 2026-06-30 | USD | millions | Sonic Automotive, Inc., consolidated | US GAAP | Tier 2b, unaudited | Quarterly adjusted EBITDA of 157.7 and liquidity table at 2026-06-30 | Unaudited; rolled into the nine-month figures |
| 10-Q_2026-10-29_sah.htm.jsonl | Quarterly report, Form 10-Q | Q3 2026 and nine months ended 2026-09-30 | USD | millions | Sonic Automotive, Inc., consolidated | US GAAP | Tier 2b, unaudited | Primary source for the latest balance sheet, nine-month flows, debt note, liquidity, covenant wording, segment data and post-quarter dividends | Unaudited; 2025 comparative columns are as shown in the 2026 report and no 2025 quarterly reports are supplied |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Sonic Automotive, Inc. | Issuer, borrower and registrant (Delaware) | 12-31 | USD | millions | Consolidated: Franchised Dealerships, EchoPark and Powersports segments | US GAAP | FY2022 to FY2025 (FY2022 in the FY2024 report only); Q1 2026, Q2 2026, six months 2026, Q3 2026, nine months 2026 with 2025 comparatives |
| Domestic operating subsidiaries | Guarantors of the senior notes and, with the company, of the credit facilities | 12-31 | USD | millions | Inside the consolidated statements; no separate statements are printed | US GAAP | Not supplied: no separate statements |
| Non-domestic operating subsidiary that is not a guarantor | Non-guarantor, stated to be minor in the 2024 annual report only | 12-31 | USD | millions | Inside the consolidated statements | US GAAP | Not supplied: no separate statements |

Two dividends fall after the balance-sheet date and stay out of period figures: one paid on 2026-10-15 and one approved for payment on 2027-01-15.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 91

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived from the issuer reconciliation lines | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Calculated | Not supplied: the issuer prints no unadjusted EBITDA | 524.2 / 446.4 / 303.7 / 429.1 | Income before taxes plus non-floor plan interest plus depreciation and amortization, each as printed in the reconciliation; keeps floor plan interest and impairment as expenses, consistent with the issuer definition | FY2024, FY2025, 9M 2025, 9M 2026, LTM |
| Interest and depreciation lines taken from the issuer reconciliation, not the face of the income statement | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Reclassification by the issuer | Interest expense, other, net 110.1 and depreciation and amortization 163.4 (FY2025) | Non-floor plan interest 103.5 and depreciation and amortization 170.1 (FY2025) | The issuer moves debt issuance cost amortization from interest into depreciation and amortization; the pair sums to the same total within 0.1 (FY2025: 273.5 against 273.6) | FY2024, FY2025, 9M 2025, 9M 2026 |
| Dashes in the issuer Adjusted EBITDA reconciliation read as no adjustment | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Analyst Judgement | Dash | No amount | The printed Adjusted EBITDA equals reported EBITDA plus the stated add-backs only on that reading in all four columns (calculation C3); no figure is plugged | FY2024, FY2025, 9M 2025, 9M 2026 |
| Dashes in the statement tables kept as not supplied | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | None (no adjustment) | Dash | Not supplied | A source dash is a missing value, not zero, in the statement tables | Nine months 2025 other income (expense), net; FY2025 gain on acquisition of equity interest; nine months 2025 proceeds from borrowings |
| Total Debt at balance-sheet carrying value, excluding floor plan notes payable and lease liabilities | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Definition | Debt note principal 1635.2 / 1765.4 | 1615.4 / 1749.7 | Carrying value is current maturities plus long-term debt; the difference is debt issuance costs of 19.8 and 15.7; floor plan notes and lease liabilities are separate balance-sheet lines (calculation C5) | FY2024, FY2025, 9M 2026 |
| Total Liabilities derived | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Calculated | Not supplied: not printed | 4833.4 / 4902.6 / 5451.7 | Total liabilities and stockholders' equity less total stockholders' equity (calculation C4) | FY2024, FY2025, 9M 2026 |
| Per-share lines and share counts left out of the money statement tables | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | Presentation | Earnings per share and weighted-average shares are printed | Not carried | Money, share-count and per-share quantities stay distinct; nine months 2026 diluted earnings per share is 4.87 USD on 32.8 million shares | All |
| Statements read in USD millions as printed; no currency or scale conversion | 10-K_2025-12-31_sah.htm.jsonl; 10-Q_2026-10-29_sah.htm.jsonl | None | USD millions | USD millions | All sources are in one currency and scale | All |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue - Retail new vehicles | 6507.5 | 7047.4 | 5195.2 | 5138.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Fleet new vehicles | 95.3 | 101.5 | 77.4 | 65.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Total new vehicles | 6602.8 | 7148.9 | 5272.6 | 5204.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Used vehicles | 4780.1 | 4872.6 | 3658.8 | 3980.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Wholesale vehicles | 287.1 | 314.1 | 250.5 | 222.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Total vehicles | 11670.0 | 12335.6 | 9181.9 | 9407.1 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Parts, service and collision repair | 1846.5 | 2019.1 | 1503.8 | 1590.1 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Revenue - Finance, insurance and other, net | 707.8 | 798.9 | 596.6 | 614.1 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Total revenues | 14224.3 | 15153.6 | 11282.3 | 11611.3 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Retail new vehicles | -6119.1 | -6664.1 | -4909.2 | -4869.3 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Fleet new vehicles | -92.3 | -99.8 | -76.3 | -64.2 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Total new vehicles | -6211.4 | -6763.9 | -4985.5 | -4933.5 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Used vehicles | -4609.4 | -4691.5 | -3519.1 | -3837.6 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Wholesale vehicles | -293.1 | -325.3 | -256.6 | -232.9 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Total vehicles | -11113.9 | -11780.7 | -8761.2 | -9004.0 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Cost of sales - Parts, service and collision repair | -917.6 | -990.0 | -736.9 | -774.9 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Total cost of sales | -12031.5 | -12770.7 | -9498.1 | -9778.9 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Gross profit | 2192.8 | 2382.9 | 1784.2 | 1832.4 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Selling, general and administrative expenses | -1577.0 | -1678.2 | -1244.5 | -1338.4 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Impairment charges | -3.9 | -173.8 | -173.8 | -0.4 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Depreciation and amortization | -150.4 | -163.4 | -121.6 | -116.9 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Operating income | 461.5 | 367.5 | 244.3 | 376.7 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Interest expense, floor plan | -86.9 | -84.7 | -62.2 | -64.7 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Interest expense, other, net | -118.0 | -110.1 | -82.5 | -89.2 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Other income (expense), net | -0.5 | 0.1 | Not supplied: the filing prints a dash for this period | 0.1 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Total other income (expense) | -205.4 | -194.7 | -144.7 | -153.8 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Income before taxes | 256.1 | 172.8 | 99.6 | 222.9 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Provision for income taxes | -40.1 | -54.1 | -27.8 | -63.5 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| Net income | 216.0 | 118.7 | 71.8 | 159.4 | USD millions | Reported; cost and expense lines carry the sign as printed (negative) | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5 |
| EBITDA (Reported) | 524.2 | 446.4 | 303.7 | 429.1 | USD millions | Calculated: income before taxes plus non-floor plan interest plus depreciation and amortization, each as printed in the issuer reconciliation; the issuer does not state an unadjusted EBITDA; floor plan interest, impairment and other add-backs are not added back (calculation C2) | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| EBITDA (Adjusted) | 560.1 | 614.6 | 466.1 | 441.0 | USD millions | Reported: issuer-stated Adjusted EBITDA (non-GAAP); the add-backs are stock-based compensation, impairment, acquisition and disposition items, storm damage, exit of leased dealerships, legal settlements, cyber insurance proceeds, severance, closed store accruals, debt extinguishment and CDK outage compensation as the issuer lists them for each period (calculation C3) | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 216.0 | 118.7 | 71.8 | 159.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Depreciation and amortization of property and equipment | 130.4 | 141.3 | 105.0 | 99.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Debt issuance cost amortization | 5.8 | 6.6 | 4.9 | 5.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Stock-based compensation expense | 23.5 | 23.1 | 17.3 | 17.9 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Deferred income taxes | -29.1 | -25.8 | -58.8 | -11.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Asset impairment charges | 3.9 | 173.8 | 173.8 | 0.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Gain on acquisition of equity interest | -3.5 | Not supplied: the filing prints a dash for this period | Not supplied: the line is not printed in this filing | Not supplied: the line is not printed in this filing | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Loss (gain) on disposal of dealerships and property and equipment | 0.6 | 6.4 | 6.4 | -1.1 | USD millions | Reported; the annual statement names this line Gain on disposal of dealerships and property and equipment | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Other | -0.2 | 1.5 | 0.7 | 0.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Receivables | 42.6 | 31.4 | 59.5 | 88.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Inventories | -358.3 | 104.6 | 62.1 | -415.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Other assets | 47.0 | 13.6 | 6.7 | 13.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Notes payable - floor plan - trade | 11.5 | 19.0 | -7.1 | 26.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Trade accounts payable and other liabilities | 19.0 | -46.8 | 58.2 | 1.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Total adjustments | -106.8 | 448.7 | 428.7 | -173.9 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net cash provided by (used in) operating activities | 109.2 | 567.4 | 500.5 | -14.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Purchases of businesses, net of cash acquired | -54.8 | -440.3 | -440.3 | -169.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Purchases of land, property and equipment | -187.3 | -149.9 | -112.6 | -223.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Proceeds from sales of property and equipment | 55.6 | 81.6 | 49.0 | 22.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Proceeds from sales of dealerships | 8.2 | 9.6 | 9.6 | 40.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net cash used in investing activities | -178.3 | -499.0 | -494.3 | -329.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net borrowings on notes payable - floor plan - non-trade | 258.1 | 14.4 | 229.2 | 438.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Borrowings on revolving credit facilities | 77.5 | 107.6 | 93.1 | 40.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Repayments on revolving credit facilities | -77.5 | -107.6 | -93.1 | -40.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Proceeds from borrowings (issuance of long-term debt) | 78.0 | 149.1 | Not supplied: the filing prints a dash for this period | 190.0 | USD millions | Reported; the annual statement names this line Proceeds from issuance of long-term debt | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Debt issuance costs | -8.2 | -1.5 | -1.3 | -1.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Principal payments of long-term debt | -164.8 | -126.8 | -101.4 | -59.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Principal payments of lease liabilities (reduction of finance lease liabilities) | -9.3 | -10.6 | -7.9 | -38.6 | USD millions | Reported; the annual statement names this line Reduction of finance lease liabilities | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Purchases of treasury stock | -34.4 | -82.4 | -44.1 | -142.0 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Issuance of shares under stock compensation plans | 5.7 | 0.5 | 0.5 | 0.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Dividends paid | -40.8 | -48.8 | -35.8 | -38.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net cash (used in) provided by financing activities | 84.3 | -106.1 | 39.2 | 348.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net increase (decrease) in cash and cash equivalents | 15.1 | -37.7 | 45.4 | 4.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Cash and cash equivalents, beginning of period | 28.9 | 44.0 | 44.0 | 6.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Cash and cash equivalents, end of period | 44.0 | 6.3 | 89.4 | 10.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Cash paid for interest, including amounts capitalized | 199.2 | 189.5 | 127.2 | 136.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Cash paid for income taxes | 35.7 | 100.8 | 89.4 | 80.0 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net Cash from Operating Activities | 109.2 | 567.4 | 500.5 | -14.5 | USD millions | Fixed row; equals the issuer line Net cash provided by (used in) operating activities; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net Cash from Investing Activities | -178.3 | -499.0 | -494.3 | -329.7 | USD millions | Fixed row; equals the issuer line Net cash used in investing activities; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net Cash from Financing Activities | 84.3 | -106.1 | 39.2 | 348.6 | USD millions | Fixed row; equals the issuer line Net cash (used in) provided by financing activities; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Opening Cash | 28.9 | 44.0 | 44.0 | 6.3 | USD millions | Fixed row; equals the issuer line Cash and cash equivalents, beginning of period; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Closing Cash | 44.0 | 6.3 | 89.4 | 10.7 | USD millions | Fixed row; equals the issuer line Cash and cash equivalents, end of period; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Cash Interest Paid | 199.2 | 189.5 | 127.2 | 136.6 | USD millions | Fixed row; equals the issuer line Cash paid for interest, including amounts capitalized; cash interest paid is the positive amount of cash paid, including floor plan interest | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |
| Net Cash Change | Not supplied: the filing prints a net change of 15.1 but its three activity totals sum to 15.2 | -37.7 | 45.4 | 4.4 | USD millions | Fixed row; operating plus investing plus financing; no foreign exchange effect is printed; the FY2024 total is left unsupported where the filing prints a rounding difference | 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 44.0 | 6.3 | 10.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Receivables, net | 495.9 | 469.0 | 391.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Inventories | 1957.7 | 2012.9 | 2443.0 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Other current assets | 387.9 | 344.3 | 244.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total current assets | 2885.5 | 2832.5 | 3089.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Property and Equipment, net | 1606.9 | 1562.9 | 1728.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Goodwill | 358.5 | 421.8 | 428.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Other Intangible Assets, net | 430.3 | 454.1 | 508.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Operating Right-of-Use Lease Assets | 224.3 | 279.1 | 258.9 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Finance Right-of-Use Lease Assets | 317.2 | 328.4 | 350.0 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Other Assets | 73.0 | 91.9 | 149.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Assets | 5895.7 | 5970.7 | 6513.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Notes payable - floor plan - trade | 165.6 | 184.6 | 211.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Notes payable - floor plan - non-trade | 1773.7 | 1748.1 | 2076.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Trade accounts payable | 172.0 | 151.0 | 164.9 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Operating short-term lease liabilities | 25.6 | 33.5 | 31.1 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Finance short-term lease liabilities | 11.9 | 19.2 | 120.9 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Other accrued liabilities | 412.8 | 409.1 | 451.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Current maturities of long-term debt | 76.1 | 52.4 | 193.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total current liabilities | 2637.7 | 2597.9 | 3249.8 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Long-Term Debt | 1511.9 | 1563.0 | 1556.4 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Other Long-Term Liabilities | 119.7 | 114.4 | 111.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Operating Long-Term Lease Liabilities | 220.1 | 268.3 | 247.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Finance Long-Term Lease Liabilities | 344.0 | 359.0 | 286.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Class A Common Stock | 0.7 | 0.7 | 0.7 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Class B Common Stock | 0.1 | 0.1 | 0.1 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Paid-in capital | 884.6 | 908.2 | 921.4 | USD millions | Reported; the quarterly statement writes Paid-in-Capital | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Retained earnings | 1412.0 | 1481.1 | 1602.0 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Accumulated other comprehensive income (loss) | 3.8 | -0.7 | 0.6 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Treasury stock, at cost | -1238.9 | -1321.3 | -1463.3 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Stockholders' Equity | 1062.3 | 1068.1 | 1061.5 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Liabilities and Stockholders' Equity | 5895.7 | 5970.7 | 6513.2 | USD millions | Reported | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Liabilities | 4833.4 | 4902.6 | 5451.7 | USD millions | Calculated: total liabilities and stockholders' equity less total stockholders' equity; equals the sum of the printed liability lines (calculation C4) | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Equity | 1062.3 | 1068.1 | 1061.5 | USD millions | Fixed row; equals Total Stockholders' Equity | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| Total Debt | 1588.0 | 1615.4 | 1749.7 | USD millions | Calculated: current maturities of long-term debt plus long-term debt, at balance-sheet carrying value net of debt issuance costs; excludes floor plan notes payable and lease liabilities, which the issuer carries on their own lines (calculation C5) | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6; 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 16–17 |
| Cash & Equivalents | 44.0 | 6.3 | 10.7 | USD millions | Fixed row; equals Cash and cash equivalents | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Credit Facility | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0.0 | 0.0 | 350.0 | Secured by a pledge of substantially all guarantor assets | Not supplied: no source states the legal rank | USD | 0.0 | Not applicable | 150 bp above one-month Adjusted Term SOFR | floating | one-month Adjusted Term SOFR | 150 | Not applicable | 2029-03-13 | Not applicable | 10-Q_2026-10-29_sah.htm.jsonl, pages 16–18 |
| 4.625% Senior Notes due 2029 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 650.0 | 650.0 | Not applicable | Senior unsecured, guaranteed by the domestic operating subsidiaries | Senior unsecured | USD | 650.0 | Not applicable | 4.625% | fixed | Not applicable | Not applicable | Not applicable | 2029-11-15 | 0.0 | 10-Q_2026-10-29_sah.htm.jsonl, pages 16, 19 |
| 4.875% Senior Notes due 2031 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 500.0 | 500.0 | Not applicable | Senior unsecured, guaranteed by the domestic operating subsidiaries | Senior unsecured | USD | 500.0 | Not applicable | 4.875% | fixed | Not applicable | Not applicable | Not applicable | 2031-11-15 | 0.0 | 10-Q_2026-10-29_sah.htm.jsonl, pages 16, 19 |
| Mortgage Facility and Sidecar Facility | Term loans on real estate, with revolving availability of 95.0 under the Mortgage Facility | Not supplied: carrying value by instrument is not disclosed | 411.2 | 411.2 | Not supplied: the total commitment is not stated | Secured: owned dealership properties are pledged as security | Not supplied: no source states the legal rank | USD | 411.2 | Not applicable | 175 bp above one-month Adjusted Term SOFR | floating | one-month Adjusted Term SOFR | 175 | Not applicable | 2027-11-17 | 41.6 | 10-Q_2026-10-29_sah.htm.jsonl, pages 16, 20; 10-K_2025-12-31_sah.htm.jsonl, page 50; calculation C17 |
| Bridge Facility | Senior unsecured term loan | Not supplied: carrying value by instrument is not disclosed | 150.0 | 150.0 | 150.0 | Unsecured | Senior unsecured | USD | 150.0 | Not applicable | 250 bp above one-month Term SOFR | floating | one-month Term SOFR | 250 | Not applicable | The earlier of 364 days after the closing date of 2026-03-27 and a refinancing of the Mortgage Facility | Not supplied: no amortisation schedule is stated | 10-Q_2026-10-29_sah.htm.jsonl, pages 16, 21 |
| Notes to finance companies, fixed rate | Mortgage notes secured by underlying properties or other collateral | Not supplied: carrying value by instrument is not disclosed | 14.4 | 14.4 | Not applicable | Secured by underlying properties or other collateral | Not supplied: no source states the legal rank | USD | 14.4 | Not applicable | 4.40% | fixed | Not applicable | Not applicable | Not applicable | Between 2028 and 2034 (stated for the 54.2 total of both note groups) | Not supplied: monthly principal and interest, amount not stated | 10-Q_2026-10-29_sah.htm.jsonl, pages 17, 21 |
| Notes to finance companies, variable rate | Mortgage notes secured by underlying properties or other collateral | Not supplied: carrying value by instrument is not disclosed | 39.8 | 39.8 | Not applicable | Secured by underlying properties or other collateral | Not supplied: no source states the legal rank | USD | 39.8 | Not applicable | 1.5% above one-month Term SOFR | floating | one-month Term SOFR | 150 | Not applicable | Between 2028 and 2034 (stated for the 54.2 total of both note groups) | Not supplied: monthly principal and interest, amount not stated | 10-Q_2026-10-29_sah.htm.jsonl, pages 17, 21 |
| Financing cost adjustment | Debt issuance costs, one aggregate | -15.7 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -15.7 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-10-29_sah.htm.jsonl, page 17 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 15,153.6m | USD 11,611.3m | USD 11,282.3m | USD 15,482.6m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Gross profit | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 2,382.9m | USD 1,832.4m | USD 1,784.2m | USD 2,431.1m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Net income | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 118.7m | USD 159.4m | USD 71.8m | USD 206.3m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Income before taxes (issuer reconciliation) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 172.8m | USD 222.9m | USD 99.6m | USD 296.1m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Non-floor plan interest (issuer reconciliation) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 103.5m | USD 83.5m | USD 77.7m | USD 109.3m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Depreciation & amortization (issuer reconciliation) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 170.1m | USD 122.7m | USD 126.4m | USD 166.4m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| EBITDA (Reported) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 446.4m | USD 429.1m | USD 303.7m | USD 571.8m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; reported EBITDA is derived, not issuer-stated |
| EBITDA (Adjusted) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 614.6m | USD 441.0m | USD 466.1m | USD 589.5m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Cash Interest Paid | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 189.5m | USD 136.6m | USD 127.2m | USD 198.9m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Net Cash from Operating Activities | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 567.4m | USD -14.5m | USD 500.5m | USD 52.4m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Operating cash flow with all floor plan changes treated as operating | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 581.8m | USD 424.2m | USD 729.7m | USD 276.3m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 103; 10-Q_2026-10-29_sah.htm.jsonl, page 92 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Capital expenditure (purchases of land, property and equipment, shown positive) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 149.9m | USD 223.7m | USD 112.6m | USD 261.0m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 125; 10-Q_2026-10-29_sah.htm.jsonl, page 8 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Interest expense, floor plan (shown positive) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 84.7m | USD 64.7m | USD 62.2m | USD 87.2m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Selling, general and administrative expenses (shown positive) | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 1,678.2m | USD 1,338.4m | USD 1,244.5m | USD 1,772.1m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Segment revenue: Franchised Dealerships Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 12,879.1m | USD 9,623.8m | USD 9,524.9m | USD 12,978.0m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, pages 165–166; 10-Q_2026-10-29_sah.htm.jsonl, page 25 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; segment totals as printed do not exist, so revenue is summed from the printed lines |
| Segment revenue: EchoPark Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 2,071.6m | USD 1,759.4m | USD 1,590.9m | USD 2,240.1m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 166; 10-Q_2026-10-29_sah.htm.jsonl, page 26 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; segment totals as printed do not exist, so revenue is summed from the printed lines |
| Segment revenue: Powersports Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 202.9m | USD 228.1m | USD 166.5m | USD 264.5m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, pages 166–167; 10-Q_2026-10-29_sah.htm.jsonl, page 26 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; segment totals as printed do not exist, so revenue is summed from the printed lines |
| Segment Adjusted EBITDA: Franchised Dealerships Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 553.9m | USD 385.3m | USD 414.3m | USD 524.9m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Segment Adjusted EBITDA: EchoPark Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 49.2m | USD 40.4m | USD 40.4m | USD 49.2m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |
| Segment Adjusted EBITDA: Powersports Segment | LTM to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | USD 11.5m | USD 15.3m | USD 11.4m | USD 15.4m | Calculated | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | Components are stated in USD millions; the 2025 nine-month column is as shown in the 2026 quarterly report; No limitation beyond the recast comparatives |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1588.0 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | 524.2 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2024 / 2024-12-31 | USD | US$m | 3.03 | Calculated | Tier 1, audited statements | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1544.0 | calculation C1 | 524.2 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2024 / 2024-12-31 | USD | US$m | 2.95 | Calculated | Tier 1, audited statements | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 524.2 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | 199.2 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | 2.63 | Calculated | Tier 1, audited statements | Cash interest paid includes floor plan interest that reported EBITDA already deducts; conservative |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1588.0 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | 560.1 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | FY2024 / 2024-12-31 | USD | US$m | 2.84 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP) |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1544.0 | calculation C1 | 560.1 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | FY2024 / 2024-12-31 | USD | US$m | 2.76 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 560.1 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | 199.2 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | 2.81 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP); cash interest includes floor plan interest |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1615.4 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | 446.4 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2025 / 2025-12-31 | USD | US$m | 3.62 | Calculated | Tier 1, audited statements | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1609.1 | calculation C1 | 446.4 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2025 / 2025-12-31 | USD | US$m | 3.60 | Calculated | Tier 1, audited statements | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 446.4 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | 189.5 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 2.36 | Calculated | Tier 1, audited statements | Cash interest paid includes floor plan interest that reported EBITDA already deducts; conservative |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1615.4 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | 614.6 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | FY2025 / 2025-12-31 | USD | US$m | 2.63 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP) |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1609.1 | calculation C1 | 614.6 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | FY2025 / 2025-12-31 | USD | US$m | 2.62 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 614.6 | 10-K_2025-12-31_sah.htm.jsonl, page 104 | 189.5 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 3.24 | Calculated | Tier 1, audited statements | Issuer-adjusted EBITDA (non-GAAP); cash interest includes floor plan interest |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1749.7 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 | 571.8 | calculation C7 | 2026-09-30 | USD | US$m | 3.06 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt; Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1739.0 | calculation C1 | 571.8 | calculation C7 | 2026-09-30 | USD | US$m | 3.04 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Reported EBITDA is derived, not issuer-stated; floor plan notes and leases outside total debt; Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 571.8 | calculation C7 | 198.9 | calculation C10 | 2026-09-30 | USD | US$m | 2.87 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Cash interest paid includes floor plan interest that reported EBITDA already deducts; conservative; Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1749.7 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 | 589.5 | calculation C9 | 2026-09-30 | USD | US$m | 2.97 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Issuer-adjusted EBITDA (non-GAAP); Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1739.0 | calculation C1 | 589.5 | calculation C9 | 2026-09-30 | USD | US$m | 2.95 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Issuer-adjusted EBITDA (non-GAAP); Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 589.5 | calculation C9 | 198.9 | calculation C10 | 2026-09-30 | USD | US$m | 2.96 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Issuer-adjusted EBITDA (non-GAAP); Interim period: EBITDA and cash interest are last-twelve-month figures built from three columns; no statement tie; cash interest includes floor plan interest |
| Liquidity / total debt | Cash plus undrawn committed facilities / Total Debt | 521.6 | 10-K_2024-12-31_sah.htm.jsonl, page 99; calculation C11 | 1588.0 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2024 / 2024-12-31 | USD | US$m | 0.33 | Calculated | Tier 1, audited statements | Excludes the floor plan deposit balance and floor plan availability; issuer total is shown in the KPI dashboard |
| Liquidity / total debt | Cash plus undrawn committed facilities / Total Debt | 401.6 | 10-K_2025-12-31_sah.htm.jsonl, page 98; calculation C11 | 1615.4 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2025 / 2025-12-31 | USD | US$m | 0.25 | Calculated | Tier 1, audited statements | Excludes the floor plan deposit balance and floor plan availability; issuer total is shown in the KPI dashboard |
| Liquidity / total debt | Cash plus undrawn committed facilities / Total Debt | 395.2 | 10-Q_2026-10-29_sah.htm.jsonl, page 87; calculation C11 | 1749.7 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 | 2026-09-30 | USD | US$m | 0.23 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Excludes the floor plan deposit balance and floor plan availability; issuer total is shown in the KPI dashboard |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - Purchases of land, property and equipment) / Cash Interest Paid | 336.9 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2; capex 10-K_2025-12-31_sah.htm.jsonl, page 125 | 199.2 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2024 / 2024-12-31 | USD | US$m | 1.69 | Calculated | Tier 1, audited statements | Capex is total purchases of land, property and equipment; maintenance and growth capex are not disclosed |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - Purchases of land, property and equipment) / Cash Interest Paid | 296.5 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2; capex 10-K_2025-12-31_sah.htm.jsonl, page 125 | 189.5 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2025 / 2025-12-31 | USD | US$m | 1.56 | Calculated | Tier 1, audited statements | Capex is total purchases of land, property and equipment; maintenance and growth capex are not disclosed |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - Purchases of land, property and equipment) / Cash Interest Paid | 310.8 | calculation C7; capex calculation C10 | 198.9 | calculation C10 | 2026-09-30 | USD | US$m | 1.56 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Capex is total purchases of land, property and equipment; maintenance and growth capex are not disclosed |
| Net cash from operating activities / total debt | Net Cash from Operating Activities / Total Debt | 109.2 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | 1588.0 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2024 / 2024-12-31 | USD | US$m | 0.07 | Calculated | Tier 1, audited statements | Reported operating cash flow classifies trade floor plan changes as operating and non-trade as financing |
| Net cash from operating activities / total debt | Net Cash from Operating Activities / Total Debt | 567.4 | 10-K_2025-12-31_sah.htm.jsonl, page 125 | 1615.4 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2025 / 2025-12-31 | USD | US$m | 0.35 | Calculated | Tier 1, audited statements | Reported operating cash flow classifies trade floor plan changes as operating and non-trade as financing |
| Net cash from operating activities / total debt | Net Cash from Operating Activities / Total Debt | 52.4 | calculation C10 | 1749.7 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 | 2026-09-30 | USD | US$m | 0.03 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Reported operating cash flow classifies trade floor plan changes as operating and non-trade as financing |
| Floor-plan-aligned operating cash flow / total debt | Operating cash flow with all floor plan changes treated as operating / Total Debt | 367.3 | 10-K_2025-12-31_sah.htm.jsonl, page 103 | 1588.0 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2024 / 2024-12-31 | USD | US$m | 0.23 | Calculated | Tier 1, audited statements | Numerator is the issuer-stated alternative operating cash flow |
| Floor-plan-aligned operating cash flow / total debt | Operating cash flow with all floor plan changes treated as operating / Total Debt | 581.8 | 10-K_2025-12-31_sah.htm.jsonl, page 103 | 1615.4 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145 | FY2025 / 2025-12-31 | USD | US$m | 0.36 | Calculated | Tier 1, audited statements | Numerator is the issuer-stated alternative operating cash flow |
| Floor-plan-aligned operating cash flow / total debt | Operating cash flow with all floor plan changes treated as operating / Total Debt | 276.3 | calculation C10 | 1749.7 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 | 2026-09-30 | USD | US$m | 0.16 | Calculated | Tier 2b, unaudited interim components with Tier 1 annual figures | Numerator is the issuer-stated alternative operating cash flow; last twelve months built in calculation C10 |
| Senior secured debt / EBITDA | Senior Secured Debt / EBITDA (Reported) | Not supplied: senior secured debt is not separately disclosed on the balance sheet | Not supplied: not disclosed | 524.2 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the numerator is not disclosed | Not Calculable | Tier 1, audited statements | Seniority of debt is stated only in note text, not as balance-sheet amounts |
| Senior secured debt / EBITDA | Senior Secured Debt / EBITDA (Reported) | Not supplied: senior secured debt is not separately disclosed on the balance sheet | Not supplied: not disclosed | 446.4 | 10-K_2025-12-31_sah.htm.jsonl, page 104 and calculation C2 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: the numerator is not disclosed | Not Calculable | Tier 1, audited statements | Seniority of debt is stated only in note text, not as balance-sheet amounts |
| Senior secured debt / EBITDA | Senior Secured Debt / EBITDA (Reported) | Not supplied: senior secured debt is not separately disclosed on the balance sheet | Not supplied: not disclosed | 571.8 | calculation C7 | 2026-09-30 | USD | US$m | Not calculable: the numerator is not disclosed | Not Calculable | Tier 2b, unaudited interim components with Tier 1 annual figures | Seniority of debt is stated only in note text, not as balance-sheet amounts |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM 2026-09-30 | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Liquidity | Total available liquidity resources, issuer-defined (US$m) | 861.6 | 701.6 | 585.2 | Not applicable | Not applicable | Down | Issuer table includes the floor plan deposit balance; 770.3 at 2026-03-31 and 676.1 at 2026-06-30 show a steady decline during 2026 |
| Liquidity | Floor plan deposit balance (US$m) | 340.0 | 300.0 | 190.0 | Not applicable | Not applicable | Down | Offsets used-vehicle floor plan interest; 375.0 at 2026-03-31 and 275.0 at 2026-06-30; not designated as a prepayment of floor plan notes |
| Liquidity | Revolving credit facility availability (US$m) | 338.5 | 300.3 | 289.5 | Not applicable | Not applicable | Down | Lesser of the commitment and the borrowing base, less letters of credit |
| Liquidity | Cash plus committed undrawn availability (US$m) | 521.6 | 401.6 | 395.2 | Not applicable | Not applicable | Down | Excludes the floor plan deposit and floor plan facility availability (calculation C11) |
| Margin | Gross profit as % of revenue | 15.42 | 15.72 | 15.70 | 15.49 | 15.48 | Flat | Gross profit per printed income statement (calculation C13) |
| Margin | Adjusted EBITDA as % of revenue | 3.94 | 4.06 | 3.81 | 3.76 | 3.37 | Down | Issuer-adjusted EBITDA; Q3 2026 fell by 0.39 percentage points on Q3 2025 (calculation C13) |
| Margin | Selling, general and administrative expenses as % of gross profit | 71.92 | 70.43 | 72.89 | 73.37 | 75.60 | Up | Cost growth, not volume, drives the Q3 earnings decline (calculation C13) |
| Growth | Revenue growth on the prior year, % | -1.03 | 6.53 | Not applicable | Not supplied: the Q3 2024 quarter is not in the sources | 0.38 | Up | FY2024 against FY2023 of 14372.4 from the income statement; Q3 2026 against Q3 2025 (calculation C13) |
| Growth | Adjusted EBITDA growth on the prior year, % | -7.01 | 9.73 | Not applicable | Not supplied: the Q3 2024 quarter is not in the sources | -10.04 | Down | FY2023 Adjusted EBITDA of 602.3 is from the FY2024 annual report (calculation C13) |
| Earnings | Revenue (US$m) | 14224.3 | 15153.6 | 15482.6 | 3973.8 | 3988.8 | Up | Quarterly figures are the three months to 2025-09-30 and 2026-09-30 |
| Earnings | Gross profit (US$m) | 2192.8 | 2382.9 | 2431.1 | 615.5 | 617.5 | Up | Quarterly gross profit rose by 2.0 |
| Earnings | Selling, general and administrative expenses (US$m, shown positive) | 1577.0 | 1678.2 | 1772.1 | 451.6 | 466.8 | Up | Quarterly expenses rose by 15.2 (calculation C13) |
| Earnings | EBITDA (Reported) (US$m) | 524.2 | 446.4 | 571.8 | 139.9 | 126.4 | Down | Quarterly reported EBITDA is income before taxes plus non-floor plan interest plus depreciation and amortization from the issuer reconciliation: 71.2 plus 25.8 plus 42.9, and 57.5 plus 28.5 plus 40.4 (calculation C12) |
| Earnings | EBITDA (Adjusted) (US$m) | 560.1 | 614.6 | 589.5 | 149.4 | 134.4 | Down | Quarterly series: Q4 2025 of 148.5 (derived as FY2025 less nine months 2025), Q1 2026 of 148.8, Q2 2026 of 157.7, Q3 2026 of 134.4 (calculation C14) |
| Earnings | Net income (US$m) | 216.0 | 118.7 | 206.3 | 46.8 | 41.1 | Down | FY2025 and nine months 2025 carry the 173.8 impairment charge |
| Segment | Revenue: Franchised Dealerships Segment (US$m) | 11939.2 | 12879.1 | 12978.0 | 3367.2 | 3279.1 | Flat | Segment revenue is the sum of the printed segment revenue lines; segments sum to reported revenue with no corporate or elimination line |
| Segment | Revenue: EchoPark Segment (US$m) | 2127.8 | 2071.6 | 2240.1 | 522.5 | 596.0 | Up | Sum of printed lines |
| Segment | Revenue: Powersports Segment (US$m) | 157.3 | 202.9 | 264.5 | 84.1 | 113.7 | Up | Sum of printed lines; acquisitions in 2026 add to the segment |
| Segment | Adjusted EBITDA: Franchised Dealerships Segment (US$m) | 526.2 | 553.9 | 524.9 | 131.1 | 116.0 | Down | The franchised segment accounts for the 2026 decline |
| Segment | Adjusted EBITDA: EchoPark Segment (US$m) | 27.6 | 49.2 | 49.2 | 8.2 | 7.9 | Flat | Issuer-stated segment figure |
| Segment | Adjusted EBITDA: Powersports Segment (US$m) | 6.3 | 11.5 | 15.4 | 10.1 | 10.5 | Up | Issuer-stated segment figure |
| Cash flow | Net cash from operating activities (US$m) | 109.2 | 567.4 | 52.4 | Not applicable | Not applicable | Down | Trade floor plan changes are operating; non-trade floor plan changes are financing |
| Cash flow | Operating cash flow with all floor plan changes treated as operating (US$m) | 367.3 | 581.8 | 276.3 | Not applicable | Not applicable | Down | Issuer-stated alternative: 424.2 for nine months 2026 against 729.7 for nine months 2025 |
| Cash flow | Capital expenditure, purchases of land, property and equipment (US$m, shown positive) | 187.3 | 149.9 | 261.0 | Not applicable | Not applicable | Up | Nine months 2026 capital expenditure was 223.7 against 112.6 |
| Operating | Maintenance and growth capital expenditure split | Not supplied: the split is not disclosed | Not supplied: the split is not disclosed | Not supplied: the split is not disclosed | Not applicable | Not applicable | Not applicable | Total capital expenditure is carried; the split is a gap |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Unadjusted EBITDA, the primary denominator | Adjusted EBITDA (non-GAAP) with named add-backs; no unadjusted figure printed | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 | FY2024, FY2025, LTM 2026-09-30 | Adjusted exceeds reported by 35.9, 168.2 and 17.7 respectively (calculation C3) | Fundamental credit; Liquidity | Reported EBITDA is derived from the issuer lines and used for the headline ratios; adjusted EBITDA is shown beside it in separate rows; the FY2025 gap is mainly the 173.8 impairment |
| Total debt | Every balance-sheet debt line the issuer carries, at carrying value | Long-term debt including current maturities; floor plan notes payable shown separately as inventory financing | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17, 89 | 9M 2026 and prior dates | Floor plan notes payable of 2288.0 would raise total debt to 4037.7 and LTM total debt / EBITDA to 7.06x (calculation C15) | Fundamental credit; Liquidity; Refinancing & LME | Total debt excludes floor plan notes, consistent with the issuer; every leverage figure states its perimeter |
| Lease liabilities | Lease liabilities the issuer presents on their own lines are not added to total debt | Finance lease liabilities of 407.1 and operating lease liabilities of 278.8 are separate lines; interest on finance leases of 19.5 for nine months 2026 sits in interest expense, other, net | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 85 | 9M 2026 | Adding finance lease liabilities would put LTM total debt / EBITDA at 3.77x (calculation C16) | Fundamental credit; Legal & covenants | Leases kept outside total debt; the covenant is lease-adjusted and its definition is not supplied |
| Interest cover | EBITDA over cash interest paid | Cash paid for interest includes floor plan interest; floor plan interest is already deducted in the EBITDA definition used | 10-Q_2026-10-29_sah.htm.jsonl, page 8; 10-K_2025-12-31_sah.htm.jsonl, page 125 | FY2024, FY2025, LTM 2026-09-30 | Adding LTM floor plan interest of 87.2 to reported EBITDA gives a cover of 3.31x against 2.87x (calculation C18) | Fundamental credit | The statement-tied cover is conservative; the alternative is quantified here and not used |
| Operating cash flow | Operating cash flow as printed | Trade floor plan changes are operating and non-trade floor plan changes are financing; the issuer states an alternative with all floor plan changes operating | 10-Q_2026-10-29_sah.htm.jsonl, pages 91–92; 10-K_2025-12-31_sah.htm.jsonl, page 103 | FY2024, FY2025, 9M 2025, 9M 2026 | LTM operating cash flow is 52.4 as printed and 276.3 on the alternative basis (calculation C10) | Fundamental credit; Liquidity | Both figures are shown; the cash-flow discussion states which one it uses |
| Liquidity | Cash plus committed undrawn facilities | Issuer total available liquidity resources includes the floor plan deposit balance of 190.0 | 10-Q_2026-10-29_sah.htm.jsonl, page 87 | 9M 2026 and prior dates | Issuer total 585.2 against 395.2 on the committed basis (calculation C11) | Liquidity | The chart uses cash and committed undrawn facilities; the issuer total is in the KPI dashboard |
| Debt carrying value against principal | Carrying value net of issuance costs | Debt note subtotal is principal; issuance costs are deducted in one line | 10-Q_2026-10-29_sah.htm.jsonl, pages 16–17; 10-K_2025-12-31_sah.htm.jsonl, page 145 | FY2024, FY2025, 9M 2026 | Principal 1765.4 against carrying value 1749.7 at 2026-09-30, a difference of 15.7; FY2025 1635.2 against 1615.4, a difference of 19.8 | Fundamental credit; Refinancing & LME | Carrying value is the leverage numerator; principal is the maturity ladder total |
| Floor plan financing flows | One economic funding flow shown once | Net floor plan borrowing appears as non-trade financing of 438.7, trade operating of 26.6, and a combined 465.3 in the discussion for nine months 2026 | 10-Q_2026-10-29_sah.htm.jsonl, pages 8, 92 | 9M 2026 | Moves operating cash flow between 424.2 and negative 14.5 | Fundamental credit; Liquidity | All three figures are stated with their roles; the combined figure serves the floor-plan-aligned view |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and interest cover at carrying value | Ready with Limitations | Reported EBITDA is derived; floor plan notes and leases are outside total debt; interim ratios use last-twelve-month figures with recast comparatives | State the perimeter beside every ratio; obtain the issuer unadjusted EBITDA if available |
| Liquidity position and trend | Ready with Limitations | Floor plan facility availability is not stated; the issuer total includes a floor plan deposit | Obtain floor plan availability by facility |
| Maturity profile at the latest date | Not Ready | No maturity table is printed at 2026-09-30; the ladder is at 2025-12-31 | Obtain a current maturity schedule or the facility amortisation tables |
| Covenant headroom | Not Ready | Ratio values are printed only at 2024-12-31; definitions are in unsupplied agreements | Obtain the compliance certificate figures and the credit agreement definitions |
| Cash-flow quality | Ready with Limitations | Operating cash flow depends on the floor plan classification; capital expenditure split is not disclosed | Use both operating cash flow bases and state which one is used |
| Debt stack and ranking | Not Ready | Legal rank among the secured facilities is not stated | Obtain the credit agreement and intercreditor terms |
| Segment and quarterly earnings trend | Ready | Segment revenue is summed from printed lines; Q4 2025 is derived for adjusted EBITDA only | None beyond the stated derivation |

### Financials and credit metrics

| Metric | FY2024 / 2024-12-31 | FY2025 / 2025-12-31 | LTM 2026-09-30 | Unit | Basis |
|---|---|---|---|---|---|
| Revenue | 14224.3 | 15153.6 | 15482.6 | US$m | Reported; LTM built as FY2025 plus nine months 2026 less nine months 2025 |
| Gross profit | 2192.8 | 2382.9 | 2431.1 | US$m | Reported; LTM built |
| EBITDA (Reported) | 524.2 | 446.4 | 571.8 | US$m | Calculated from issuer reconciliation lines; unadjusted |
| EBITDA (Adjusted) | 560.1 | 614.6 | 589.5 | US$m | Issuer-stated, non-GAAP; LTM built |
| Net income | 216.0 | 118.7 | 206.3 | US$m | Reported; LTM built |
| Net cash from operating activities | 109.2 | 567.4 | 52.4 | US$m | Reported; LTM built; floor plan non-trade changes sit in financing |
| Operating cash flow, floor plan changes all operating | 367.3 | 581.8 | 276.3 | US$m | Issuer-stated alternative; LTM built |
| Capital expenditure (purchases of land, property and equipment) | 187.3 | 149.9 | 261.0 | US$m | Reported, shown positive; LTM built |
| Cash interest paid | 199.2 | 189.5 | 198.9 | US$m | Reported; includes floor plan interest; LTM built |
| Total debt | 1588.0 | 1615.4 | 1749.7 | US$m | Balance-sheet carrying value; excludes floor plan notes and leases |
| Cash | 44.0 | 6.3 | 10.7 | US$m | Reported |
| Net debt | 1544.0 | 1609.1 | 1739.0 | US$m | Total debt less cash; 2026-09-30 is before the dividend paid on 2026-10-15; pro forma is 1752.0 |
| Total debt / EBITDA (Reported) | 3.03 | 3.62 | 3.06 | x | Calculated |
| Net debt / EBITDA (Reported) | 2.95 | 3.60 | 3.04 | x | Calculated; 3.06 pro forma at 2026-09-30 |
| EBITDA (Reported) / cash interest | 2.63 | 2.36 | 2.87 | x | Calculated; conservative because cash interest includes floor plan interest |
| Total debt / EBITDA (Adjusted) | 2.84 | 2.63 | 2.97 | x | Calculated |
| Net debt / EBITDA (Adjusted) | 2.76 | 2.62 | 2.95 | x | Calculated |
| EBITDA (Adjusted) / cash interest | 2.81 | 3.24 | 2.96 | x | Calculated |
| Cash plus committed undrawn facilities | 521.6 | 401.6 | 395.2 | US$m | Cash plus revolver and mortgage availability; excludes the floor plan deposit |
| Total available liquidity resources, issuer-defined | 861.6 | 701.6 | 585.2 | US$m | Reported by the issuer; includes the floor plan deposit balance |
| Liquidity / total debt | 0.33 | 0.25 | 0.23 | x | Calculated on cash plus committed undrawn facilities |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1588.0 | 44.0 | 1544.0 | US$m | Reported balance-sheet carrying value: current maturities 76.1 plus long-term debt 1511.9, net of debt issuance costs of 24.9; principal total 1612.9; excludes floor plan notes payable and lease liabilities, which the issuer carries on their own lines; no securitization or finance lease sits inside the debt lines; source: 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145; net debt in calculation C1 |
| FY2025 / 2025-12-31 | 1615.4 | 6.3 | 1609.1 | US$m | Reported balance-sheet carrying value: current maturities 52.4 plus long-term debt 1563.0, net of debt issuance costs of 19.8; principal total 1635.2; same inclusions and exclusions as the prior year; source: 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145; net debt in calculation C1 |
| 2026-09-30 | 1749.7 | 10.7 | 1739.0 | US$m | Reported balance-sheet carrying value: current maturities 193.3 plus long-term debt 1556.4, net of debt issuance costs of 15.7; principal total 1765.4; same inclusions and exclusions; includes the bridge facility of 150.0; net debt is before the post-balance-sheet dividend shown separately; source: 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6, 16–17; net debt in calculation C1 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 1635.2 | -19.8 | 1615.4 | US$m | Ladder drawn at 2025-12-31, the latest date for which the issuer prints a maturity table; contractual principal is the sum of the six Debt maturing rows; the only reconciling item is debt issuance costs of 19.8 (calculation C5); carrying value equals Gross debt in Net debt data for the same period (source: 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145); the ladder omits the bridge facility and the variable-rate note to finance companies that arose in 2026 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Cash dividend of USD 0.41 per share on Class A and Class B common stock, declared in Q3 2026 and paid after the balance-sheet date | 2026-10-15 | 13.0 | 1752.0 | 3.06 | US$m | Amount is the dividends declared in Q3 2026 of 8.1 on Class A plus 4.9 on Class B (calculation C20); net debt rises because cash falls with no change in debt; pro forma net leverage is 1752.0 over last twelve months reported EBITDA of 571.8, the denominator of the 2026-09-30 net leverage; the row stands alone and is not added to the next row |
| Cash dividend of USD 0.41 per share on Class A and Class B common stock, approved after the balance-sheet date for payment to holders of record on 2026-12-15 | 2027-01-15 | Not supplied: the aggregate is not stated and depends on shares outstanding at the 2026-12-15 record date | Not supplied: the amount is not stated | Not supplied: the amount is not stated | US$m | The per-share amount, record date and payment date are stated; shares outstanding at the cover date of 2026-10-27 are 19586727 Class A and 12029375 Class B, which at USD 0.41 per share would give about 13.0, but the record-date share count is not known, so no figure is stated; the payment date is a future date at the as-of date |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.03 | 2.95 | x | Reported EBITDA derived from the issuer reconciliation lines (524.2); total debt at carrying value 1588.0 and net debt 1544.0; floor plan notes payable and lease liabilities are outside debt; fiscal-year figures tie to the statement tables |
| FY2025 / 2025-12-31 | 3.62 | 3.60 | x | Reported EBITDA 446.4 is after the 173.8 impairment charge, which depresses the ratio; total debt 1615.4 and net debt 1609.1; same perimeter |
| 2026-09-30 | 3.06 | 3.04 | x | Last twelve months to 2026-09-30: reported EBITDA 571.8 built as FY2025 plus nine months 2026 less nine months 2025; interim EBITDA has no statement tie; total debt 1749.7 and net debt 1739.0 are before the dividend paid after the quarter; same perimeter |

Reported ratios use a derived EBITDA and exclude floor plan notes and leases, and the fall in 2026 reflects the 2025 impairment leaving the base.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.63 | x | Reported EBITDA 524.2 over cash interest paid 199.2, which includes floor plan interest that reported EBITDA already deducts, so the cover is conservative |
| FY2025 / 2025-12-31 | 2.36 | x | Reported EBITDA 446.4 over cash interest paid 189.5; the impairment charge depresses the numerator; same conservative perimeter |
| 2026-09-30 | 2.87 | x | Last twelve months: reported EBITDA 571.8 over cash interest paid 198.9, built as FY2025 plus nine months 2026 less nine months 2025; same conservative perimeter |

Cash interest includes floor plan interest that EBITDA already deducts, so cover is conservative.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 44.0 | 477.6 | US$m | Cash 44.0 per the balance sheet; undrawn committed facilities are revolving credit facility availability 338.5 plus mortgage facility availability 139.1; the floor plan deposit balance of 340.0 that the issuer counts in its liquidity total is excluded because it is neither cash nor a facility; floor plan facility availability is not stated and is excluded; source: 10-K_2024-12-31_sah.htm.jsonl, page 99; 10-K_2025-12-31_sah.htm.jsonl, page 98; sums in calculation C11 |
| FY2025 / 2025-12-31 | 6.3 | 395.3 | US$m | Cash 6.3; undrawn committed facilities are revolving credit facility availability 300.3 plus mortgage and sidecar availability 95.0; floor plan deposit balance of 300.0 excluded; revolver availability is the lesser of the commitment and the borrowing base, less letters of credit; source: 10-K_2025-12-31_sah.htm.jsonl, page 98; sums in calculation C11 |
| 2026-09-30 | 10.7 | 384.5 | US$m | Cash 10.7; undrawn committed facilities are revolving credit facility availability 289.5 (borrowing base 301.2 less letters of credit 11.7) plus mortgage and sidecar availability 95.0; floor plan deposit balance of 190.0 excluded; the issuer total of 585.2 includes that deposit; source: 10-Q_2026-10-29_sah.htm.jsonl, pages 18, 87; sums in calculation C11 |

Undrawn committed facilities exclude the floor plan deposit and floor plan availability, so the issuer's own liquidity total is higher.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2026 | 52.4 | US$m | Principal due at the printed 2025-12-31 ladder; outdated for 2026-09-30: it omits the 150.0 bridge facility, which matures within 364 days of closing or earlier on a refinancing of the mortgage facility, and the 39.8 variable-rate note to finance companies, and it shows the mortgage and sidecar facilities at their 2025-12-31 balance; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |
| 2027 | 416.2 | US$m | Same ladder; principal at 2025-12-31; the 2027 amount includes the final maturity of the mortgage and sidecar facilities; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |
| 2028 | 14.2 | US$m | Same ladder; principal at 2025-12-31; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |
| 2029 | 651.0 | US$m | Same ladder; principal at 2025-12-31; the 2029 amount is the 650.0 senior notes plus 1.0 of mortgage notes; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |
| 2030 | 1.1 | US$m | Same ladder; principal at 2025-12-31; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |
| Thereafter | 500.3 | US$m | Same ladder; principal at 2025-12-31; the thereafter amount is the 500.0 senior notes due 2031 plus 0.3 of mortgage notes; source: 10-K_2025-12-31_sah.htm.jsonl, page 145 |

The ladder is at 2025-12-31 and omits the 2026 bridge facility and variable-rate note, so it understates near-term repayments.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 14224.3 | 560.1 | US$m | Fiscal year; revenue as printed; adjusted EBITDA is the issuer-stated, issuer-adjusted measure (non-GAAP); annual duration; source: 10-K_2025-12-31_sah.htm.jsonl, pages 104, 123 |
| FY2025 / 2025-12-31 | 15153.6 | 614.6 | US$m | Fiscal year; revenue as printed; issuer-adjusted EBITDA includes add-backs of 173.8 for impairment and 23.1 for stock-based compensation and a deduction of 40.0 for cyber insurance proceeds; annual duration; source: 10-K_2025-12-31_sah.htm.jsonl, pages 104, 123 |
| 2026-09-30 | 15482.6 | 589.5 | US$m | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025 for both lines; issuer-adjusted EBITDA; a twelve-month period like the other rows; source: 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93–94 with 10-K_2025-12-31_sah.htm.jsonl, pages 104, 123; calculation C7 |

The last row is a last-twelve-month figure built from three columns, and issuer-adjusted EBITDA is used in every row.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no stack is stated | Not supplied: the filings do not state the legal rank of the secured facilities against one another | Not supplied: not stated for the stack as a whole | Not supplied: no stack is stated | Not supplied: no stack is stated | US$m | The 2029 and 2031 senior notes and the bridge facility are stated to be senior unsecured; the credit facilities are stated to be secured by a pledge of substantially all guarantor assets, and owned dealership properties are stated to be pledged for the mortgage and sidecar facilities, but no source ranks these secured facilities against one another or against the notes to finance companies, so no cumulative leverage is stated |

No stack is stated because the legal rank of the secured facilities against one another is not given.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Opening: EBITDA (Reported), last twelve months to 2026-09-30 | 571.8 | US$m | Derived from issuer reconciliation lines: income before taxes 296.1 plus non-floor plan interest 109.3 plus depreciation and amortization 166.4 (calculation C7); floor plan interest and impairment are not added back |
| Stock-based compensation expense | 23.7 | US$m | Issuer add-back; last twelve months built as 23.1 plus 17.9 less 17.3 (calculation C8) |
| Loss (gain) on exit of leased dealerships | -2.4 | US$m | Issuer add-back; a gain in nine months 2026, a dash in the other columns (calculation C8) |
| Impairment charges | 0.4 | US$m | Issuer add-back; 173.8 plus 0.4 less 173.8 (calculation C8) |
| Acquisition and disposition related loss (gain) | -5.1 | US$m | Issuer add-back; 5.6 plus -5.1 less 5.6 (calculation C8) |
| Storm damage charges | 2.1 | US$m | Issuer add-back; 5.0 plus 2.1 less 5.0 (calculation C8) |
| Cyber insurance proceeds | 0.0 | US$m | Issuer deduction of 40.0 in FY2025 and in nine months 2025 cancels in the last twelve months; the issuer prints a dash for nine months 2026 (calculation C8) |
| Loss (gain) on legal settlements | -1.0 | US$m | Issuer add-back; 0.7 plus -1.0 less 0.7 (calculation C8) |
| Closing: Adjusted EBITDA (issuer-stated), last twelve months to 2026-09-30 | 589.5 | US$m | Issuer-stated Adjusted EBITDA built as FY2025 plus nine months 2026 less nine months 2025; the opening plus the seven signed steps equals the closing (calculation C9); lines the issuer prints as a dash in every column are omitted |

The bridge covers the last twelve months and relies on reading dashes in the issuer reconciliation as no adjustment.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 7 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 10 |

## Calculations

All amounts are in USD millions unless stated. Each row shows its inputs and result.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Net debt at three dates (gross debt less cash) | FY2024: debt USD 1,588.0 million, cash USD 44.0 million; FY2025: debt USD 1,615.4 million, cash USD 6.3 million; 2026-09-30: debt USD 1,749.7 million, cash USD 10.7 million | 1,588.0 - 44.0 = USD 1,544.0 million; 1,615.4 - 6.3 = USD 1,609.1 million; 1,749.7 - 10.7 = USD 1,739.0 million | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6, 16–17 |
| C2 | EBITDA (Reported) from the issuer reconciliation lines | Income before taxes 256.1 / 172.8 / 99.6 / 222.9; non-floor plan interest 112.2 / 103.5 / 77.7 / 83.5; depreciation and amortization 155.9 / 170.1 / 126.4 / 122.7, for FY2024 / FY2025 / 9M 2025 / 9M 2026 | 256.1 + 112.2 + 155.9 = USD 524.2 million; 172.8 + 103.5 + 170.1 = USD 446.4 million; 99.6 + 77.7 + 126.4 = USD 303.7 million; 222.9 + 83.5 + 122.7 = USD 429.1 million | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| C3 | Issuer Adjusted EBITDA equals reported EBITDA plus the stated add-backs | Add-backs, with dashes read as no adjustment: FY2024 21.3 - 3.0 + 3.9 + 0.6 + 5.6 - 6.3 + 2.1 + 8.3 + 13.4 - 10.0; FY2025 23.1 + 173.8 + 5.6 + 5.0 - 40.0 + 0.7; 9M 2025 17.3 + 173.8 + 5.6 + 5.0 - 40.0 + 0.7; 9M 2026 17.9 - 2.4 + 0.4 - 5.1 + 2.1 - 1.0 | Add-backs total USD 35.9 million, USD 168.2 million, USD 162.4 million and USD 11.9 million; 524.2 + 35.9 = 560.1; 446.4 + 168.2 = 614.6; 303.7 + 162.4 = 466.1; 429.1 + 11.9 = 441.0, each equal to the printed Adjusted EBITDA (difference USD 0.0 million) | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| C4 | Total Liabilities derived | Total liabilities and stockholders' equity less total stockholders' equity: FY2024 5,895.7 - 1,062.3; FY2025 5,970.7 - 1,068.1; 9M 2026 6,513.2 - 1,061.5 | USD 4,833.4 million; USD 4,902.6 million; USD 5,451.7 million; each equals the sum of the printed liability lines (current liabilities, long-term debt, other long-term liabilities and the long-term lease liabilities) | 10-K_2025-12-31_sah.htm.jsonl, pages 122–123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| C5 | Total Debt at carrying value and the step from principal | Current maturities plus long-term debt: FY2024 76.1 + 1,511.9; FY2025 52.4 + 1,563.0; 9M 2026 193.3 + 1,556.4; principal 1,612.9 / 1,635.2 / 1,765.4 less issuance costs 24.9 / 19.8 / 15.7 | USD 1,588.0 million; USD 1,615.4 million; USD 1,749.7 million; 1,612.9 - 24.9 = 1,588.0; 1,635.2 - 19.8 = 1,615.4; 1,765.4 - 15.7 = 1,749.7, so the difference between principal and carrying value is USD 15.7 million at 2026-09-30 and USD 19.8 million at 2025-12-31 | 10-K_2025-12-31_sah.htm.jsonl, pages 122, 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 |
| C6 | Statement identities | Balance sheet: assets less liabilities less equity at each date; cash flow: operating plus investing plus financing against the net change; opening cash plus change against closing cash; income statement subtotals | All differences are USD 0.0 million except FY2024 cash flow: 109.2 - 178.3 + 84.3 = USD 15.2 million against a printed net change of USD 15.1 million; 28.9 + 15.1 = 44.0 equals the printed closing cash | 10-K_2025-12-31_sah.htm.jsonl, pages 122–125; 10-Q_2026-10-29_sah.htm.jsonl, pages 4–8 |
| C7 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 446.4; 9M 2026 429.1; 9M 2025 303.7; components: income before taxes 172.8 + 222.9 - 99.6, non-floor plan interest 103.5 + 83.5 - 77.7, depreciation and amortization 170.1 + 122.7 - 126.4 | 446.4 + 429.1 - 303.7 = USD 571.8 million; components USD 296.1 million + USD 109.3 million + USD 166.4 million = USD 571.8 million | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| C8 | LTM add-backs by line to 2026-09-30 (FY2025 + 9M 2026 - 9M 2025) | Stock-based compensation 23.1 + 17.9 - 17.3; exit of leased dealerships 0.0 - 2.4 - 0.0; impairment 173.8 + 0.4 - 173.8; acquisition and disposition 5.6 - 5.1 - 5.6; storm damage 5.0 + 2.1 - 5.0; cyber insurance -40.0 + 0.0 + 40.0; legal settlements 0.7 - 1.0 - 0.7 | USD 23.7 million; USD -2.4 million; USD 0.4 million; USD -5.1 million; USD 2.1 million; USD 0.0 million; USD -1.0 million; total USD 17.7 million | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| C9 | LTM bridge closes to LTM Adjusted EBITDA | Opening 571.8; signed steps 23.7, -2.4, 0.4, -5.1, 2.1, 0.0, -1.0; LTM Adjusted EBITDA 614.6 + 441.0 - 466.1 | 571.8 + 17.7 = USD 589.5 million, equal to 614.6 + 441.0 - 466.1 = USD 589.5 million (difference USD 0.0 million) | 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94 |
| C10 | LTM cash-flow items to 2026-09-30 | Operating cash flow 567.4 - 14.5 - 500.5; floor-plan-aligned operating cash flow 581.8 + 424.2 - 729.7; cash interest 189.5 + 136.6 - 127.2; capital expenditure 149.9 + 223.7 - 112.6 | USD 52.4 million; USD 276.3 million; USD 198.9 million; USD 261.0 million | 10-K_2025-12-31_sah.htm.jsonl, pages 103, 125; 10-Q_2026-10-29_sah.htm.jsonl, pages 8, 92 |
| C11 | Liquidity components | Undrawn committed facilities: 338.5 + 139.1; 300.3 + 95.0; 289.5 + 95.0; cash 44.0, 6.3, 10.7; issuer total 861.6, 701.6, 585.2 with floor plan deposit 340.0, 300.0, 190.0 | Undrawn USD 477.6 million; USD 395.3 million; USD 384.5 million; cash plus undrawn USD 521.6 million; USD 401.6 million; USD 395.2 million; issuer total less deposit at 2026-09-30: 585.2 - 190.0 = USD 395.2 million | 10-K_2024-12-31_sah.htm.jsonl, page 99; 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-Q_2026-10-29_sah.htm.jsonl, page 87 |
| C12 | Q3 reported EBITDA from the issuer reconciliation | Q3 2025: income before taxes 71.2, non-floor plan interest 25.8, depreciation and amortization 42.9; Q3 2026: 57.5, 28.5, 40.4 | 71.2 + 25.8 + 42.9 = USD 139.9 million; 57.5 + 28.5 + 40.4 = USD 126.4 million | 10-Q_2026-10-29_sah.htm.jsonl, page 93 |
| C13 | KPI percentages and growth rates | Gross profit over revenue, adjusted EBITDA over revenue, selling, general and administrative expenses over gross profit, and year-on-year growth, from the T4.4 and Q3 figures | Gross margin 15.42% / 15.72% / 15.70% / 15.49% / 15.48%; adjusted EBITDA margin 3.94% / 4.06% / 3.81% / 3.76% / 3.37%; expenses over gross profit 71.92% / 70.43% / 72.89% / 73.37% / 75.60%; revenue growth -1.03% (14,224.3 / 14,372.4 - 1), 6.53% and 0.38%; adjusted EBITDA growth -7.01% (560.1 / 602.3 - 1), 9.73% and -10.04% (134.4 / 149.4 - 1); columns FY2024 / FY2025 / LTM / Q3 2025 / Q3 2026 | 10-K_2025-12-31_sah.htm.jsonl, pages 104, 123; 10-K_2024-12-31_sah.htm.jsonl, page 113; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93 |
| C14 | Quarterly Adjusted EBITDA | Q4 2025 derived as FY2025 614.6 less 9M 2025 466.1; Q1 2026 148.8; Q2 2026 157.7; Q3 2026 134.4; 9M 2026 441.0 | Q4 2025 = USD 148.5 million (derived); Q1 + Q2 + Q3 2026 = 148.8 + 157.7 + 134.4 = USD 440.9 million against the printed USD 441.0 million (difference USD 0.1 million, rounding) | 10-Q_2026-04-30_sah.htm.jsonl, page 64; 10-Q_2026-06-30_sah.htm.jsonl, page 92; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94; 10-K_2025-12-31_sah.htm.jsonl, page 104 |
| C15 | Floor plan notes and leverage including them at 2026-09-30 | Floor plan notes payable, trade 211.2 and non-trade 2,076.8; total debt 1,749.7; LTM reported EBITDA 571.8 | 211.2 + 2,076.8 = USD 2,288.0 million (the discussion states approximately USD 2.3 billion); 1,749.7 + 2,288.0 = USD 4,037.7 million; 4,037.7 / 571.8 = 7.06x | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 89 |
| C16 | Lease liabilities and leverage including finance leases at 2026-09-30 | Finance lease liabilities 120.9 current + 286.2 long-term; operating lease liabilities 31.1 + 247.7; total debt 1,749.7 | Finance USD 407.1 million; operating USD 278.8 million; (1,749.7 + 407.1) / 571.8 = 2,156.8 / 571.8 = 3.77x | 10-Q_2026-10-29_sah.htm.jsonl, page 6 |
| C17 | Annual amortisation of the mortgage and sidecar facilities | Cumulative term draws 405.0 + 149.1 = 554.1; 1.875% per quarter | 554.1 x 1.875% x 4 = USD 41.6 million per year (41.5575 unrounded) | 10-Q_2026-10-29_sah.htm.jsonl, page 20 |
| C18 | Interest cover with floor plan interest added back | LTM floor plan interest 84.7 + 64.7 - 62.2; LTM reported EBITDA 571.8; LTM cash interest 198.9 | Floor plan interest USD 87.2 million; (571.8 + 87.2) / 198.9 = 659.0 / 198.9 = 3.31x against 571.8 / 198.9 = 2.87x | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 8 |
| C19 | Debt movement and 2027 repayments | Principal 1,635.2 at 2025-12-31 and 1,765.4 at 2026-09-30; bridge 150.0; variable-rate note 39.8; mortgage and sidecar 455.8 to 411.2; fixed-rate notes 29.4 to 14.4; bridge closing 2026-03-27 plus 364 days | 1,765.4 - 1,635.2 = USD 130.2 million = 150.0 + 39.8 - 44.6 - 15.0; carrying value 1,749.7 - 1,615.4 = USD 134.3 million; 150.0 + 411.2 = USD 561.2 million; the bridge date is 2027-03-26 | 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 16–17, 20–21 |
| C20 | Dividend paid after the quarter and pro forma net debt | Dividends declared in Q3 2026: Class A 8.1, Class B 4.9; net debt 1,739.0; LTM reported EBITDA 571.8 | 8.1 + 4.9 = USD 13.0 million; 1,739.0 + 13.0 = USD 1,752.0 million; 1,752.0 / 571.8 = 3.06x | 10-Q_2026-10-29_sah.htm.jsonl, pages 7, 91 |
| C21 | LTM income statement and segment items to 2026-09-30 | Revenue 15,153.6 + 11,611.3 - 11,282.3; gross profit 2,382.9 + 1,832.4 - 1,784.2; net income 118.7 + 159.4 - 71.8; expenses 1,678.2 + 1,338.4 - 1,244.5; segment adjusted EBITDA Franchised 553.9 + 385.3 - 414.3, EchoPark 49.2 + 40.4 - 40.4, Powersports 11.5 + 15.3 - 11.4 | Revenue USD 15,482.6 million; gross profit USD 2,431.1 million; net income USD 206.3 million; expenses USD 1,772.1 million; segment adjusted EBITDA USD 524.9 million, USD 49.2 million and USD 15.4 million, summing to USD 589.5 million; segment revenue USD 12,978.0 million, USD 2,240.1 million and USD 264.5 million, summing to USD 15,482.6 million | 10-K_2025-12-31_sah.htm.jsonl, pages 104, 123; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93–94 |
| C22 | Earnings changes against the prior year | Adjusted EBITDA: Q3 2026 134.4 and Q3 2025 149.4; LTM 589.5 and FY2025 614.6; revenue 3,988.8 and 3,973.8; gross profit 617.5 and 615.5; expenses 466.8 and 451.6 | Q3 adjusted EBITDA fell USD 15.0 million, or 10.04% (134.4 - 149.4 = -15.0); LTM adjusted EBITDA is USD 25.1 million below FY2025 (589.5 - 614.6 = -25.1); revenue rose USD 15.0 million (3,988.8 - 3,973.8); gross profit rose USD 2.0 million (617.5 - 615.5); expenses rose USD 15.2 million (466.8 - 451.6) | 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93 |
| C23 | Inventory against floor plan notes | Inventories 2,443.0 and 2,012.9; floor plan notes 2,288.0 and 1,932.7 (184.6 + 1,748.1) | 2,443.0 - 2,012.9 = USD 430.1 million; 2,288.0 - 1,932.7 = USD 355.3 million | 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6 |
| C24 | LTM free cash flow | LTM operating cash flow 52.4 as printed and 276.3 floor-plan-aligned; LTM capital expenditure 261.0 | 52.4 - 261.0 = USD -208.6 million; 276.3 - 261.0 = USD 15.3 million | 10-K_2025-12-31_sah.htm.jsonl, pages 103, 125; 10-Q_2026-10-29_sah.htm.jsonl, pages 8, 92 |
| C25 | Fall in issuer-defined liquidity | Total 701.6 and 585.2; floor plan deposit 300.0 and 190.0; revolver availability 300.3 and 289.5; cash 6.3 and 10.7 | 701.6 - 585.2 = USD 116.4 million = 110.0 (deposit) + 10.8 (revolver availability) - 4.4 (cash rise) | 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-Q_2026-10-29_sah.htm.jsonl, page 87 |
| C26 | Printed figures quoted in the findings | As printed in the sources | Bridge facility USD 150.0 million; variable-rate note USD 39.8 million; mortgage and sidecar facilities USD 411.2 million, falling by USD 44.6 million; fixed-rate notes down USD 15.0 million; USD 173.8 million impairment in FY2025; USD 193.3 million current maturities; USD 1,635.2 million ladder, USD 416.2 million in 2027, USD 651.0 million in 2029; nine months 2026 inventory cash outflow USD 415.4 million, operating cash flow USD -14.5 million, alternative USD 424.2 million against USD 729.7 million; USD 169.3 million acquisitions; USD 142.0 million share repurchases; USD 159.4 million and USD 71.8 million nine-month net income; covenants 1.20x and 5.75x; ratios 2.15x and 3.07x at 2024-12-31; dividend of USD 0.41 per share; FY2024 net change USD 15.1 million; floor plan funding USD 438.7 million non-trade and USD 26.6 million trade, USD 465.3 million combined; Q3 2026 adjusted EBITDA USD 134.4 million, Q3 2025 USD 149.4 million, FY2025 USD 614.6 million; Q3 revenue USD 3,988.8 million and USD 3,973.8 million, gross profit USD 617.5 million, expenses USD 466.8 million; Franchised Dealerships Segment FY2025 adjusted EBITDA USD 553.9 million and Powersports USD 11.5 million; issuer liquidity USD 585.2 million and USD 701.6 million, floor plan deposit USD 190.0 million and USD 300.0 million, fall in deposit USD 110.0 million; finance short-term lease liabilities USD 120.9 million and USD 19.2 million; no calculation, each figure is stated in the cited pages | 10-Q_2026-10-29_sah.htm.jsonl, pages 5–6, 8, 16–17, 20–21, 87, 91–93; 10-K_2025-12-31_sah.htm.jsonl, pages 98, 104, 145; 10-K_2024-12-31_sah.htm.jsonl, page 107 |
| C27 | Debt instruments sum to Total Debt | Principal 650.0, 500.0, 411.2, 150.0, 14.4, 39.8 and the financing cost adjustment -15.7 | 650.0 + 500.0 + 411.2 + 150.0 + 14.4 + 39.8 - 15.7 = USD 1,749.7 million, equal to Total Debt | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 |

## Gaps

Covenant ratio values are not printed for 2025-12-31 or 2026-09-30; the last printed values are fixed charge coverage of 2.15x and leverage of 3.07x at 2024-12-31, which are outdated, so covenant headroom is not established. This is a high-severity gap, and the compliance figures with the credit agreement definitions would close it.
Basis: 10-K_2024-12-31_sah.htm.jsonl, page 107; 10-K_2025-12-31_sah.htm.jsonl, page 149; 10-Q_2026-10-29_sah.htm.jsonl, page 21

No maturity schedule is printed at 2026-09-30, so the debt maturities table uses the ladder at 2025-12-31, which omits the USD 150.0 million bridge facility and the USD 39.8 million variable-rate note to finance companies and shows the mortgage and sidecar facilities before their 2026 repayments. This is a high-severity gap, and a current schedule by year would close it.
Basis: calculation C19; 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21

The issuer prints no unadjusted EBITDA, so reported EBITDA is derived from its own reconciliation lines and every ratio on it depends on that derivation. This is a medium-severity gap, and the issuer's own unadjusted figure would close it.
Basis: calculation C2; 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94

The legal rank of the secured facilities against one another and against the notes to finance companies is not stated, so no debt stack and no senior secured debt figure are stated and senior secured debt over EBITDA is not calculable for any period. This is a medium-severity gap, and the credit agreement and intercreditor terms would close it.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, pages 17–21; 10-K_2025-12-31_sah.htm.jsonl, page 50

Floor plan facility availability is not stated, so undrawn committed facilities count only revolving credit and mortgage availability and understate total undrawn capacity. This is a medium-severity gap, and availability by floor plan facility would close it.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, pages 18, 87

The filings print a dash for nine months 2025 other income (expense), net, for the FY2025 gain on acquisition of equity interest and for nine months 2025 proceeds from borrowings, and the quarterly statements do not print the gain on acquisition of equity interest line, so those cells are not supplied rather than zero; the FY2024 net cash change is also left unsupported, and no interest income line is printed. These are low-severity gaps that do not affect any total used in the ratios.
Basis: 10-K_2025-12-31_sah.htm.jsonl, pages 124–125; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 8; calculation C6

The fourth quarter of 2025 is not printed on its own, so only revenue and adjusted EBITDA are derived for it, and no Q3 2024 quarter is supplied, so growth rates for Q3 2025 are not stated. These are low-severity gaps, and the 2025 quarterly reports would close them.
Basis: calculation C14; 10-Q_2026-10-29_sah.htm.jsonl, pages 5, 93

The split of capital expenditure between maintenance and growth is not disclosed, so only total capital expenditure is carried and the related ratios are not calculated. This is a low-severity gap.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 89

Finance short-term lease liabilities rose to USD 120.9 million at 2026-09-30 from USD 19.2 million at 2025-12-31, and the sections read give no explanation, so a near-term cash claim cannot be ruled out; the amount sits outside total debt. This is a low-severity gap.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 6

The aggregate of the dividend approved for payment on 2027-01-15 is not stated, so its effect on net debt is not supplied. This is a low-severity gap, and the record-date share count would close it.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, pages 2, 91

Carrying value by instrument is not disclosed, so the debt instruments table carries principal with one aggregate financing cost adjustment; the total commitment of the mortgage and sidecar facilities, the amortisation of the bridge facility and of the notes to finance companies, and the legal rank of the revolving credit facility are also not stated. These are low-severity gaps, and the credit agreements would close them.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21

The 2024 annual report states that the parent company has no independent assets or operations and that the one non-guarantor operating subsidiary is minor, but the 2025 annual report and the 2026 quarterly reports do not repeat it, and no guarantor-level statements are printed. This is a low-severity gap.
Basis: 10-K_2024-12-31_sah.htm.jsonl, pages 102–103; 10-K_2025-12-31_sah.htm.jsonl, page 147; 10-Q_2026-10-29_sah.htm.jsonl, page 19

## Next module

The orchestrator selects the next module.
