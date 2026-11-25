---
module_id: CP-1
issuer_id: matv
analysis_date: 2026-11-05
pathway: credit_snapshot
---

# CP-1 Financial foundation: Mativ Holdings, Inc. (matv)

## Request

Financial foundation for Mativ Holdings, Inc. (ticker MATV) as of 2026-11-05, on the credit snapshot pathway. It extracts the income statement, cash flow statement and balance sheet, builds debt, net debt, liquidity and leverage on one basis, and logs gaps and definition conflicts. It makes no credit recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_matv-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | 0987bdd177918d1704e3f88d583ff72f6a39e66a94dd95882dba466d3888311c | Annual income statement, cash flow statement, balance sheet, segments, debt note and covenants |
| 10-Q_2026-03-31_matv-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | be2515741fe2f13e179c4c2e30c15996c434ad9db582dc94e1ef7a9b4954e68d | Terms and covenant schedule of the April 3, 2026 amendment; first-quarter leverage |
| 10-Q_2026-06-30_matv-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 7184a20d311477dd5cb1dfc9b30dba5f1ea74b357d6c5b8b24327bc29eea17ff | Cross-check of debt and net leverage after the amendment |
| 10-Q_2026-09-30_matv-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | cd05c1595b274a699b4cdcd913ff17f3c1b042cf31d245b0741f58eac17a20fb | Nine-month statements, balance sheet at 2026-09-30, debt, liquidity, subsequent events |
| EX-99.1_2026-05-06_ex991earningsrelease2026q1.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-06 | 9f2d35ab42751d0b53917904e34ca17dd018903790ffb5f1f2e30283805e8933 | First-quarter adjusted EBITDA and net debt as a cross-check |
| EX-99.1_2026-08-05_ex991earningsrelease2026q2.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-05 | 6cdc4bf84d342bfc79bbfbfa3bbc0faf89dc1156b59bfb476359102520bc07e0 | Second-quarter adjusted EBITDA and net debt as a cross-check |
| EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-04 | 1d8a4657f455e3276abc49c4e3ccf64e82f7d0ab6a0f632c1c495bd5b53fcf53 | Nine-month adjusted EBITDA, its reconciliation, free cash flow and net debt |

- Source readiness (CP-0) handoff, sha256 5b88d84f98797574b6756f5f07ba24d87482a1305c8df7defaee9a151c14802c

## Findings

### Bottom line

Net debt was USD 879.1 million at September 30, 2026, 4.43x trailing reported EBITDA of USD 198.6 million, with interest cover of 2.48x, so creditors depend on liquidity of USD 373.5 million ahead of the 2029 maturities.
Basis: 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28; calculation C14; calculation C6; calculation C7; calculation C17; calculation C19

That net leverage is above the 3.8x the company reports under its credit agreement; the filings do not print the covenant EBITDA, and the company's own add-backs to reach adjusted EBITDA were USD 27.7 million in the first nine months of 2026, which reported EBITDA does not include. Year-end 2025 leverage on reported EBITDA is not calculable because the 2025 goodwill impairment of USD 411.9 million made that EBITDA negative, and a trailing adjusted figure is not established because the fourth-quarter 2025 release is not supplied. The USD 400.0 million notes fall due in 2029, and while they remain outstanding the revolving facility and Term Loan A mature 182 days, and Term Loan B 91 days, before them.
Basis: 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28; EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; calculation C18; calculation C25

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_matv-20251231.htm.jsonl | Annual report on Form 10-K | FY2023 to FY2025; balance sheets at 2024-12-31 and 2025-12-31 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | US GAAP | Tier 1: audited statements with an unqualified opinion | Annual statements, year-end debt, covenants, segments | No adjusted EBITDA; debt table pre-dates the April 3, 2026 refinancing |
| 10-Q_2026-03-31_matv-20260331.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-31 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | US GAAP | Tier 2b: unaudited, auditor review not stated | Covenant step schedule and amendment terms | Debt table pre-dates the amendment |
| 10-Q_2026-06-30_matv-20260630.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-30 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | US GAAP | Tier 2b: unaudited, auditor review not stated | Cross-check of leverage and debt after the amendment | Not used for a statement column |
| 10-Q_2026-09-30_matv-20260930.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-30; balance sheet at 2026-09-30 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | US GAAP | Tier 2b: unaudited, auditor review not stated | Nine-month statements, latest balance sheet, debt note, liquidity | Comparatives reclassified; covenant levels given as ranges |
| EX-99.1_2026-05-06_ex991earningsrelease2026q1.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-03-31 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | Non-GAAP reconciled to US GAAP | Tier 2b: unaudited issuer release | Quarterly adjusted EBITDA series | Management measures; not used for a statement column |
| EX-99.1_2026-08-05_ex991earningsrelease2026q2.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and six months ended 2026-06-30 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | Non-GAAP reconciled to US GAAP | Tier 2b: unaudited issuer release | Quarterly adjusted EBITDA series | Management measures; not used for a statement column |
| EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and nine months ended 2026-09-30 | USD | millions | Mativ Holdings, Inc. and consolidated subsidiaries | Non-GAAP reconciled to US GAAP | Tier 2b: unaudited issuer release | Nine-month adjusted EBITDA, bridge, free cash flow, net debt | Management measures; no numeric guidance |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mativ Holdings, Inc. | Issuer and reporting entity; the listed registrant | December 31 | USD | millions, per-share amounts in dollars | Consolidated with its subsidiaries, including a wholly owned bankruptcy-remote special purpose entity used for receivables sales | US GAAP | FY2023, FY2024, FY2025, 9M 2025 and 9M 2026 for flows; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30; the Q1 to Q3 quarters of 2025 and 2026 are printed in the quarterly reports but are not statement columns |
| Borrower and guarantor subsidiaries | Three subsidiaries became additional U.S. borrowers and one became a guarantor under the amended credit agreement; the 2029 notes are guaranteed by wholly-owned subsidiaries that borrow under or guarantee the credit facilities | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: the subsidiaries are not named in the sources | Not supplied: not printed | Not supplied: not printed |

Subsequent events after the balance-sheet date of 2026-09-30 are flagged here and kept out of the period figures. On 2026-10-23 the receivables sales agreement was amended to extend its term to 2029-10-23. On 2026-11-04 the company sold a North American facility held for sale. On 2026-11-04 it announced a quarterly cash dividend of 0.10 per share payable on 2026-12-18, a scheduled payment after the cutoff.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) derived from components | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Derivation of an unstated measure | Not stated by the issuer | -270.9, 139.6, -250.9, -292.4 and 157.1 (USD millions) | The issuer prints only adjusted EBITDA; the method asks for unadjusted EBITDA, so it is net income (loss) from continuing operations plus tax plus interest expense plus depreciation and amortization | FY2023, FY2024, FY2025, 9M 2025, 9M 2026 |
| Trailing twelve months built for the interim balance-sheet date | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Constructed period | FY2025, 9M 2026 and 9M 2025 components | EBITDA (Reported) 198.6 and cash interest paid 80.1 (USD millions) | Latest full year plus current nine months less prior-year nine months, as the method states | Twelve months to 2026-09-30 |
| Segment gross profit for the annual columns | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 121 | Derivation of a comparable segment measure | Segment operating profit (annual) and segment gross profit (2026) | FAM 196.7, 174.2, 163.3 and SAS 159.1, 189.9, 199.6 for FY2023 to FY2025 (USD millions) | The segment performance measure changed from operating profit to gross profit on 2026-01-01; annual gross profit is segment net sales less segment cost of products sold, so one measure runs through every column | FY2023, FY2024, FY2025 |
| No currency or scale conversion | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 | None | USD millions as printed | USD millions | All statements are printed in USD millions; the EUR 450 million of cross-currency swaps is a hedge notional and is not converted | All periods |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2,026.0 | 1,981.1 | 1,987.0 | 1,523.9 | 1,510.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Cost of products sold | 1,670.2 | 1,617.0 | 1,624.1 | 1,248.2 | 1,215.0 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Gross profit | 355.8 | 364.1 | 362.9 | 275.7 | 295.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Selling and general expense | 263.9 | 233.8 | 228.7 | 174.2 | 166.2 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Research and development expense | 21.2 | 23.0 | 23.6 | 18.6 | 15.2 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Intangible asset amortization expense | 61.0 | 62.9 | 63.2 | 47.3 | 47.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Total nonmanufacturing expenses | 346.1 | 319.7 | 315.5 | 240.1 | 228.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Goodwill impairment expense | 401.0 | Not supplied: the filing prints a dash, not a figure | 411.9 | 411.9 | Not supplied: the filing prints a dash, not a figure | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Restructuring and other impairment expense | 22.6 | 38.1 | 19.9 | 18.2 | 4.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Operating profit (loss) | -413.9 | 6.3 | -384.4 | -394.5 | 62.5 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Interest expense | 62.2 | 74.7 | 71.1 | 54.1 | 54.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Loss on debt extinguishment | Not supplied: the filing prints a dash, not a figure | 7.3 | Not supplied: the filing prints a dash, not a figure | Not supplied: the filing prints a dash, not a figure | 8.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Other income (expense), net | -4.8 | -3.2 | -7.5 | -4.2 | 0.6 | USD millions | Reported; printed as Other expense, net in the annual report | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Income (loss) before income taxes | -480.9 | -78.9 | -463.0 | -452.8 | -0.5 | USD millions | Reported; annual columns are continuing operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Income tax expense (benefit), net | 26.8 | -30.2 | -125.6 | -14.6 | 8.8 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Net income (loss) from continuing operations | -507.7 | -48.7 | -337.4 | -438.2 | -9.3 | USD millions | Reported; the nine-month columns print Net loss, with no discontinued operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Income from discontinued operations, net of tax | 198.2 | Not supplied: the filing prints a dash, not a figure | Not supplied: the filing prints a dash, not a figure | Not supplied: the filing prints a dash, not a figure | Not supplied: the filing prints a dash, not a figure | USD millions | Reported in the annual report only; the quarterly statements print no such line | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Net income (loss) | -309.5 | -48.7 | -337.4 | -438.2 | -9.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| Depreciation and amortization | 147.8 | 143.8 | 141.0 | 106.3 | 102.7 | USD millions | Reported in the cash flow statement | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| EBITDA (Reported) | -270.9 | 139.6 | -250.9 | -292.4 | 157.1 | USD millions | Calculated; the issuer prints no unadjusted EBITDA, so it is net income (loss) from continuing operations plus income tax expense (benefit) plus interest expense plus depreciation and amortization, and it is after goodwill impairment, restructuring and other one-offs | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| EBITDA (Adjusted) | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | 171.2 | 184.8 | USD millions | Issuer-stated adjusted EBITDA for the nine-month columns; its definition adds back financing fees on the receivables sales agreement, amortization of cloud-based software costs, stock-based compensation, restructuring, restructuring related and impairment expenses, tornado related costs net of insurance recoveries, loss on debt extinguishment and other (income) expense, net | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11 |
| Net sales - Filtration & Advanced Materials (FAM) | 810.0 | 766.5 | 767.5 | 590.3 | 608.5 | USD millions | Reported segment net sales; the segments sum to consolidated net sales and no corporate or elimination net sales are disclosed | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 22 |
| Net sales - Sustainable & Adhesive Solutions (SAS) | 1,216.0 | 1,214.6 | 1,219.5 | 933.6 | 902.4 | USD millions | Reported segment net sales | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 22 |
| Gross profit - FAM | 196.7 | 174.2 | 163.3 | 123.5 | 138.8 | USD millions | Annual columns calculated as segment net sales less segment cost of products sold; nine-month columns reported; the segment performance measure changed from operating profit to gross profit on 2026-01-01 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 22 |
| Gross profit - SAS | 159.1 | 189.9 | 199.6 | 152.2 | 157.1 | USD millions | Same basis as the FAM row | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 22 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -309.5 | -48.7 | -337.4 | -438.2 | -9.3 | USD millions | Reported; annual FY2023 includes 198.2 from discontinued operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Depreciation and amortization | 147.8 | 143.8 | 141.0 | 106.3 | 102.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Net changes in operating working capital | -19.8 | 0.1 | 8.4 | 35.3 | 11.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 106.6 | 94.8 | 133.8 | 114.5 | 117.4 | USD millions | Reported; FY2023 includes 30.0 from discontinued operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Capital spending | -66.0 | -55.0 | -40.0 | -28.7 | -26.9 | USD millions | Reported; total capital spending, no maintenance and growth split is printed | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | 547.2 | -56.7 | -37.0 | -23.0 | -27.0 | USD millions | Reported; FY2023 includes 608.6 from discontinued operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Cash dividends paid | -55.3 | -21.6 | -22.3 | -16.8 | -17.0 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Proceeds from long-term debt | 241.0 | 531.0 | 82.0 | 64.0 | 705.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Payments on long-term debt | -834.6 | -554.7 | -161.9 | -131.1 | -728.1 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Payments for debt issuance costs | -1.5 | -8.3 | Not supplied: the filing prints a dash, not a figure | Not supplied: the filing prints a dash, not a figure | -32.7 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Payments on financing lease obligations | -1.0 | -1.5 | -3.1 | -2.5 | -2.5 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Purchases of common stock and shares withheld for employee taxes | -10.6 | -0.8 | -1.4 | -1.4 | -2.2 | USD millions | Reported; the nine-month columns print Shares withheld for employee taxes | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -662.9 | -55.9 | -106.7 | -87.8 | -76.8 | USD millions | Reported; FY2023 includes -0.9 from discontinued operations | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| FX Effect on Cash | 4.9 | -8.1 | 5.4 | 4.9 | -1.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Net Cash Change | -4.2 | -25.9 | -4.5 | 8.6 | 11.7 | USD millions | Reported; operating plus investing plus financing plus the exchange rate effect | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Opening Cash | 124.4 | 120.2 | 94.3 | 94.3 | 89.8 | USD millions | Reported; cash and cash equivalents and restricted cash | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Closing Cash | 120.2 | 94.3 | 89.8 | 102.9 | 101.5 | USD millions | Reported; cash and cash equivalents and restricted cash, so it differs from the balance sheet line by restricted cash | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 121.4 | 90.8 | 82.8 | 55.2 | 52.5 | USD millions | Reported; Cash paid for interest, net, a positive amount paid | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Cash paid for taxes, net | 37.5 | 14.9 | 11.5 | 9.4 | -2.2 | USD millions | Reported; 2026 is a net receipt | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| Free cash flow (calculated: net cash from operating activities plus capital spending) | Not calculable: net cash from operations includes 30.0 from discontinued operations while capital spending is continuing only | 39.8 | 93.8 | 85.8 | 90.5 | USD millions | Calculated; the nine-month figures equal the free cash flow the earnings release prints | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5; EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, page 11 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 94.3 | 84.2 | 97.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Restricted cash | Not supplied: the filing prints a dash, not a figure | 5.6 | 4.2 | USD millions | Reported; restricted to UK pension scheme obligations | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 162.4 | 180.9 | 250.3 | USD millions | Reported; the 2026 balance includes the tornado insurance recoveries receivable of 38.0 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Inventories, net | 355.1 | 329.1 | 329.1 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Income taxes receivable | 20.6 | 17.7 | 9.0 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Other current assets | 25.7 | 21.1 | 19.4 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 658.1 | 638.6 | 709.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Property, plant and equipment, net | 620.3 | 609.1 | 585.2 | USD millions | Reported; the 2026 report includes finance lease right-of-use assets in this line, the annual report shows them separately | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Finance lease right-of-use assets | 16.2 | 15.8 | Not supplied: the 2026 report includes finance lease right-of-use assets in property, plant and equipment | USD millions | Reported in the annual report only | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Operating lease right-of-use assets | 46.4 | 48.4 | 57.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Deferred income tax assets | 8.1 | 104.0 | 97.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 465.6 | 57.6 | 56.2 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Intangible assets, net | 553.4 | 514.2 | 459.6 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Other assets | 79.8 | 63.9 | 65.6 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 2,447.9 | 2,051.6 | 2,030.5 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Current debt | 2.6 | 2.9 | 3.8 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Finance lease liabilities, current | 1.6 | 1.8 | Not supplied: the 2026 report includes current finance lease liabilities in accrued expenses and other current liabilities | USD millions | Reported in the annual report only; outside Total Debt | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Operating lease liabilities, current | 9.5 | 9.0 | 8.8 | USD millions | Reported; outside Total Debt | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Accounts payable | 151.7 | 160.7 | 219.6 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Income taxes payable | 8.4 | 1.5 | 3.4 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Accrued expenses and other current liabilities | 100.7 | 109.4 | 131.8 | USD millions | Reported; the 2026 balance includes current finance lease liabilities | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 274.5 | 285.3 | 367.4 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Long-term debt | 1,086.7 | 1,015.3 | 972.6 | USD millions | Reported; carrying value net of issuance costs | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Finance lease liabilities, noncurrent | 16.3 | 16.1 | 14.7 | USD millions | Reported; outside Total Debt | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Operating lease liabilities, noncurrent | 36.4 | 38.8 | 47.4 | USD millions | Reported; outside Total Debt | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Pension and other postretirement benefits | 54.3 | 53.8 | 49.1 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Deferred income tax liabilities | 100.9 | 74.9 | 69.3 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Other liabilities | 20.3 | 68.7 | 42.9 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 1,589.4 | 1,552.9 | 1,563.4 | USD millions | Reported | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 858.5 | 498.7 | 467.1 | USD millions | Reported; total stockholders' equity, no temporary equity is printed | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 1,089.3 | 1,018.2 | 976.4 | USD millions | Reported; total debt in the debt note, current plus long-term, net of debt issuance costs; finance and operating leases are separate lines and are not added | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 99; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12 |
| Cash & Equivalents | 94.3 | 84.2 | 97.3 | USD millions | Reported; cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Facility, U.S. dollar borrowings | Revolving credit facility | Not supplied: instrument carrying values are not disclosed; issuance costs are one aggregate | 20.0 | 20.0 | 305.0 | Secured: part of the senior secured credit facilities | Senior secured credit facilities | USD | 20.0 | Not applicable | Margin 1.75% to 2.75% by Net Debt to EBITDA; commitment fee 0.30%; average rate 7.66% | Floating | Term SOFR, EURIBOR or successor rates | 175 to 275 | Not supplied: the floor is not stated | Earlier of five years from 2026-04-03 and 182 days before the 2029 notes mature | Not supplied: not split by instrument | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |
| Term Loan A Facility | Term loan | Not supplied: instrument carrying values are not disclosed; issuance costs are one aggregate | 89.7 | 89.7 | 89.9 | Secured: part of the senior secured credit facilities | Senior secured credit facilities | USD | 89.7 | Not applicable | Margin 1.75% to 2.75% by Net Debt to EBITDA; average rate 6.40% | Floating | Term SOFR, EURIBOR or successor rates | 175 to 275 | Not supplied: the floor is not stated | Earlier of five years from 2026-04-03 and 182 days before the 2029 notes mature | Not supplied: not split by instrument | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |
| Term Loan B Facility | Term loan | Not supplied: instrument carrying values are not disclosed; issuance costs are one aggregate | 498.7 | 498.7 | 500.0 | Secured: part of the senior secured credit facilities | Senior secured credit facilities | USD | 498.7 | Not applicable | Fixed margin 3.50% to 4.50% by benchmark; average rate 8.40% | Floating | Term SOFR or EURIBOR | 350 to 450 | Not supplied: the floor is not stated for the amended loan | Earlier of seven years from 2026-04-03 and 91 days before the 2029 notes mature | Not supplied: not split by instrument | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |
| 8.000% senior unsecured notes due October 1, 2029 | Senior unsecured notes | Not supplied: instrument carrying values are not disclosed; issuance costs are one aggregate | 400.0 | 400.0 | 400.0 | Unsecured: senior unsecured obligations | Senior unsecured | USD | 400.0 | Not applicable | 8.000% fixed | Fixed | Not applicable | Not applicable | Not applicable | 2029-10-01 | 0 | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |
| Other loan agreements | Other borrowings | Not supplied: instrument carrying values are not disclosed; issuance costs are one aggregate | 2.7 | Not supplied: the drawn amount is not stated apart from principal | Not supplied: not stated | Not supplied: security is not stated | Not supplied: ranking is not stated | Not supplied: the denomination is not stated | 2.7 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |
| Financing cost adjustment | Aggregate issuance costs, discounts and premiums | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -34.7 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 12–14 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-09-30 | (USD 250.9m) | USD 157.1m | (USD 292.4m) | USD 198.6m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines; the figure is derived because the issuer prints no unadjusted EBITDA |
| Net sales | LTM to 2026-09-30 | USD 1,987.0m | USD 1,510.9m | USD 1,523.9m | USD 1,974.0m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines |
| Cash Interest Paid | LTM to 2026-09-30 | USD 82.8m | USD 52.5m | USD 55.2m | USD 80.1m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 5 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 133.8m | USD 117.4m | USD 114.5m | USD 136.7m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines |
| Capital spending | LTM to 2026-09-30 | USD 40.0m | USD 26.9m | USD 28.7m | USD 38.2m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines; capital spending is shown as a positive outflow |
| Depreciation and amortization | LTM to 2026-09-30 | USD 141.0m | USD 102.7m | USD 106.3m | USD 137.4m | Calculated | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 | Latest full year FY2025 plus nine months 2026 less nine months 2025; every component is printed or derived from printed lines |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,089.3 | Net debt data | 139.6 | T4.4 Income statement | FY2024 / 2024-12-31 | USD | US$m | 7.80 | Calculated | Calculated from reported statements | EBITDA (Reported) is derived from components and includes one-off items |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 995.0 | Net debt data | 139.6 | T4.4 Income statement | FY2024 / 2024-12-31 | USD | US$m | 7.13 | Calculated | Calculated from reported statements | EBITDA (Reported) is derived from components and includes one-off items |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 139.6 | T4.4 Income statement | 90.8 | T4.5 Cash flow statement | FY2024 / 2024-12-31 | USD | US$m | 1.54 | Calculated | Calculated from reported statements | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,089.3 | Net debt data | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 995.0 | Net debt data | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | 90.8 | T4.5 Cash flow statement | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,018.2 | Net debt data | -250.9 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Calculated from reported statements | EBITDA (Reported) is derived from components; the denominator is not above zero |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 934.0 | Net debt data | -250.9 | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | Not calculable: EBITDA (Reported) is not above zero | Not Calculable | Calculated from reported statements | EBITDA (Reported) is derived from components; the denominator is not above zero |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | -250.9 | T4.4 Income statement | 82.8 | T4.5 Cash flow statement | FY2025 / 2025-12-31 | USD | US$m | -3.03 | Calculated | Calculated from reported statements | Negative because reported EBITDA is negative |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,018.2 | Net debt data | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 934.0 | Net debt data | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: no supplied document prints adjusted EBITDA for this fiscal year | T4.4 Income statement | 82.8 | T4.5 Cash flow statement | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA is not supplied | Not Calculable | Not available | No adjusted EBITDA is printed for the fiscal year |
| Total debt / EBITDA | Gross debt / LTM EBITDA (Reported) | 976.4 | Net debt data | 198.6 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 4.92 | Calculated | Calculated from reported statements | LTM EBITDA (Reported) is derived and includes one-off items; the company's own net leverage is 3.8x |
| Net debt / EBITDA | Net debt / LTM EBITDA (Reported) | 879.1 | Net debt data | 198.6 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 4.43 | Calculated | Calculated from reported statements | LTM EBITDA (Reported) is derived and includes one-off items; the company's own net leverage is 3.8x |
| EBITDA / cash interest | LTM EBITDA (Reported) / LTM Cash Interest Paid | 198.6 | T4.8 Constructed period register | 80.1 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | 2.48 | Calculated | Calculated from reported statements | Trailing twelve months built from the annual report and the nine-month reports |
| Total debt / adjusted EBITDA | Gross debt / LTM EBITDA (Adjusted) | 976.4 | Net debt data | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | Not Calculable | Not available | Nine-month adjusted EBITDA is printed, a trailing figure is not |
| Net debt / adjusted EBITDA | Net debt / LTM EBITDA (Adjusted) | 879.1 | Net debt data | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | Not Calculable | Not available | Nine-month adjusted EBITDA is printed, a trailing figure is not |
| Adjusted EBITDA / cash interest | LTM EBITDA (Adjusted) / LTM Cash Interest Paid | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | T4.8 Constructed period register | 80.1 | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing adjusted EBITDA needs fourth-quarter 2025 adjusted EBITDA, which no supplied document prints | Not Calculable | Not available | Nine-month adjusted EBITDA is printed, a trailing figure is not |

### T4.10 KPI dashboard

| KPI Category | Metric Name | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- |
| Margin | Gross margin, issuer-reported | 18.1% | 19.6% | Up | Printed in the management discussion; period flow, not an average |
| Margin | Adjusted EBITDA margin, issuer-reported | 11.2% | 12.2% | Up | Issuer measure on issuer-adjusted EBITDA |
| Margin | FAM adjusted EBITDA margin | 14.8% | 16.8% | Up | Segment measure printed in the release |
| Margin | SAS adjusted EBITDA margin | 12.0% | 12.6% | Up | Segment measure printed in the release; the third quarter alone fell |
| Sales mix | Filtration & netting share of net sales | 26% | 25% | Down | Issuer-reported category share |
| Sales mix | Advanced films share of net sales | 13% | 15% | Up | Issuer-reported category share |
| Sales mix | Tapes, labels & liners share of net sales | 29% | 30% | Up | Issuer-reported category share |
| Sales mix | Paper & packaging share of net sales | 17% | 16% | Down | Issuer-reported category share; the July 2026 tornado affected this business |
| Sales mix | Healthcare & other share of net sales | 15% | 14% | Down | Issuer-reported category share |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Unadjusted EBITDA: net income plus tax plus interest plus depreciation and amortization | Adjusted EBITDA that also adds back financing fees on receivable sales, cloud software amortization, stock-based compensation, restructuring, tornado costs, debt extinguishment and other items | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11 | 9M 2025 and 9M 2026 | Add-backs total 27.7 in 9M 2026 and 463.6 in 9M 2025, which includes the 411.9 goodwill impairment | Financial foundation; Fundamental credit | Ratios use reported EBITDA; adjusted EBITDA is shown beside it and labelled |
| Total debt | Balance-sheet carrying value, net of issuance costs | Total debt in the debt note, the same carrying value; principal is printed in the maturity table | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 14 | 2026-09-30 | Principal 1,011.1 against carrying value 976.4, a difference of 34.7 of issuance costs | Financial foundation; Refinancing & LME | Carrying value is the leverage numerator; principal is shown in the reconciliation |
| Net leverage | Net debt over trailing reported EBITDA | Net leverage under the amended credit agreement, 3.8x at 2026-09-30, on covenant EBITDA and net debt that the filings do not define | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28 | 2026-03-31 to 2026-09-30 | The figure here is 4.43x, 0.63x higher; the gap cannot be decomposed from the sources | Financial foundation; Legal & covenants; Fundamental credit | Quote both with their definitions; do not state covenant headroom from the 4.43x |
| Segment performance measure | A single measure across periods | Operating profit in the annual report; gross profit from 2026-01-01 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 120; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 21 | FY2023 to FY2025 against 2026 | Segment profit cannot be spliced across the change | Financial foundation; Business & governance | Segment gross profit is derived for the annual columns; operating profit by segment is not carried |
| Finance leases and current accruals | Lease liabilities on their own lines stay outside debt | Finance lease assets and current liabilities folded into property and accrued expenses in the 2026 reports | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 | 2025-12-31 comparatives and 2026-09-30 | Totals tie once finance leases are added back (see the calculations section); debt is unaffected | Financial foundation | Statement lines for those items are not supplied for the 2026 column |
| Restructuring add-back | One amount for one label | The 2025 add-back is 9.7 in the adjusted income reconciliation and 10.6 in the adjusted EBITDA reconciliation for the quarter, 19.4 and 20.7 for nine months | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11 | Q3 2025 and 9M 2025 | 0.9 and 1.3, unexplained | Earnings quality | Adjusted EBITDA for 2025 rests on the larger add-back; carried as a flagged difference |
| Cash | Cash and cash equivalents excluding restricted cash | Closing cash in the cash flow statement includes restricted cash | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–5 | All periods | Closing cash 101.5 against balance-sheet cash 97.3 and restricted cash 4.2 at 2026-09-30 | Financial foundation; Liquidity | Net debt and liquidity use balance-sheet cash; the cash flow rows keep their own basis |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 7.80 | 7.13 | x | Year-end debt over fiscal-year EBITDA (Reported), derived from net income, tax, interest and depreciation and amortization, after restructuring, debt extinguishment and other one-offs. |
| FY2025 / 2025-12-31 | Not supplied: EBITDA (Reported) is negative after the goodwill impairment | Not supplied: EBITDA (Reported) is negative after the goodwill impairment | x | A ratio on a negative denominator is not calculable; the register shows the inputs. |
| 2026-09-30 | 4.92 | 4.43 | x | Debt at 2026-09-30 over trailing twelve-month EBITDA (Reported) built from FY2025, nine months 2026 and nine months 2025; the company reports 3.8x on its own covenant basis. |

The 2026 ratios use trailing twelve-month EBITDA built from the annual report and the nine-month reports, and reported EBITDA is after one-off items, so they sit above the company's own covenant leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.54 | x | Fiscal-year EBITDA (Reported) over cash interest paid. |
| FY2025 / 2025-12-31 | -3.03 | x | Negative because EBITDA (Reported) is negative after the goodwill impairment; cash interest paid is the positive amount in the cash flow statement. |
| 2026-09-30 | 2.48 | x | Trailing twelve-month EBITDA (Reported) over trailing twelve-month cash interest paid. |

Cash interest is interest paid as printed in the cash flow statement, and the 2025 cover is negative because reported EBITDA was negative.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 94.3 | Not supplied: undrawn revolver capacity at 2024-12-31 is not printed in the supplied sources | US$m | Cash and cash equivalents; restricted cash is excluded. |
| FY2025 / 2025-12-31 | 84.2 | 431.2 | US$m | Cash and cash equivalents, excluding restricted cash of 5.6; undrawn capacity on the former 600.0 revolving facility as the company states it, with letters of credit not itemised. |
| 2026-09-30 | 97.3 | 276.2 | US$m | Cash and cash equivalents, excluding restricted cash of 4.2, of which 72.7 is held by foreign subsidiaries; undrawn capacity on the 305.0 revolving facility as the company states it, with letters of credit not itemised. |

Cash excludes restricted cash and undrawn capacity is as the company states it, with letters of credit not itemised.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 2.2 | US$m | Contractual principal falling due in the rest of 2026 at 2026-09-30, as the debt note prints it. |
| 2027 | 6.6 | US$m | Contractual principal as the debt note prints it. |
| 2028 | 6.1 | US$m | Contractual principal as the debt note prints it. |
| 2029 | 406.2 | US$m | Contractual principal as the debt note prints it; the 2029 figure includes the 400.0 of notes. |
| 2030 | 6.2 | US$m | Contractual principal as the debt note prints it. |
| Thereafter | 583.8 | US$m | Contractual principal as the debt note prints it; the line after 2030. |

The ladder is the company's own, and its treatment of the springing maturity dates tied to the 2029 notes is not stated, so the 2029 bucket may understate what falls due then.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Net sales | 1,981.1 | 1,987.0 | 1,523.9 | 1,510.9 | USD millions | Reported |
| Gross profit | 364.1 | 362.9 | 275.7 | 295.9 | USD millions | Reported |
| Operating profit (loss) | 6.3 | -384.4 | -394.5 | 62.5 | USD millions | Reported; FY2025 and 9M 2025 include the 411.9 goodwill impairment |
| EBITDA (Reported) | 139.6 | -250.9 | -292.4 | 157.1 | USD millions | Calculated from net income, tax, interest and depreciation and amortization |
| EBITDA (Adjusted) | Not supplied: not printed for the fiscal year | Not supplied: not printed for the fiscal year | 171.2 | 184.8 | USD millions | Issuer-stated for the nine months only |
| Net income (loss) | -48.7 | -337.4 | -438.2 | -9.3 | USD millions | Reported |
| Net cash from operating activities | 94.8 | 133.8 | 114.5 | 117.4 | USD millions | Reported |
| Capital spending | -55.0 | -40.0 | -28.7 | -26.9 | USD millions | Reported |
| Free cash flow | 39.8 | 93.8 | 85.8 | 90.5 | USD millions | Calculated: operations less capital spending |
| Cash interest paid | 90.8 | 82.8 | 55.2 | 52.5 | USD millions | Reported |
| Total debt at period end | 1,089.3 | 1,018.2 | Not supplied: no balance sheet at 2025-09-30 is printed | 976.4 | USD millions | Carrying value |
| Cash and cash equivalents at period end | 94.3 | 84.2 | Not supplied: no balance sheet at 2025-09-30 is printed | 97.3 | USD millions | Reported |
| Net debt at period end | 995.0 | 934.0 | Not supplied: no balance sheet at 2025-09-30 is printed | 879.1 | USD millions | Calculated: total debt less cash |
| Net debt / EBITDA (Reported) | 7.13 | Not calculable: EBITDA (Reported) is not above zero | Not supplied: a nine-month period has no period-end balance sheet | 4.43 | x | Calculated; the 9M 2026 column holds the trailing twelve-month ratio at 2026-09-30 |
| EBITDA (Reported) / cash interest | 1.54 | -3.03 | Not supplied: a nine-month period has no period-end balance sheet | 2.48 | x | Calculated; the 9M 2026 column holds the trailing twelve-month ratio at 2026-09-30 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1,089.3 | 94.3 | 995.0 | US$m | Reported at 2024-12-31. Gross debt is carrying value, current plus long-term, net of 23.5 of issuance costs, and includes the revolving facility, Term Loan A, Term Loan B, the delayed draw term loan, the 2029 notes and the German loan agreement; principal is 1,112.8. Finance and operating leases sit on separate balance-sheet lines and are outside it. Cash excludes restricted cash. |
| FY2025 / 2025-12-31 | 1,018.2 | 84.2 | 934.0 | US$m | Reported at 2025-12-31, before the April 3, 2026 refinancing. Gross debt is carrying value, net of 15.4 of issuance costs, and includes the same instruments; principal is 1,033.6. Finance and operating leases are outside it. Cash excludes restricted cash of 5.6. The company's own net debt is the same 934.0. |
| 2026-09-30 | 976.4 | 97.3 | 879.1 | US$m | Reported at 2026-09-30, after the refinancing. Gross debt is carrying value, net of 34.7 of issuance costs, and includes the revolving facility, Term Loan A, Term Loan B, the 2029 notes and other loan agreements; principal is 1,011.1. Finance and operating leases are outside it. Cash excludes restricted cash of 4.2. The company's own net debt is the same 879.1. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 1,011.1 | -34.7 | 976.4 | US$m | Principal is the sum of the debt maturing rows; the one reconciling item is debt issuance costs of 34.7, and no debt is left out of the ladder; carrying value is the Gross debt of the net debt row for the same date. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Sale of a North American facility held for sale | 2026-11-04 | Not supplied: the sale proceeds are not stated | Not supplied: the sale proceeds are not stated | Not supplied: the sale proceeds are not stated | US$m | The third-quarter report records the sale after the balance-sheet date and states a carrying value of 6.8 for assets held for sale at 2026-09-30, but no proceeds; nothing is reflected in 879.1. |
| Quarterly cash dividend of 0.10 per share, announced 2026-11-04 and scheduled for payment | 2026-12-18 | Not supplied: the total payable is not stated | Not supplied: the total payable is not stated | Not supplied: the total payable is not stated | US$m | A scheduled payment date after the cutoff; the per-share amount and date are stated, the total is not (dividends paid in the third quarter were 5.7); nothing is reflected in 879.1. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 9M 2025 | 1,523.9 | 171.2 | US$m | Nine months; Adjusted EBITDA is the issuer-adjusted measure printed in the release, not reported EBITDA; no fiscal-year adjusted EBITDA is printed. |
| 9M 2026 | 1,510.9 | 184.8 | US$m | Nine months; issuer-adjusted EBITDA as printed in the release, the same identity as the prior row. |

Both rows are nine-month periods on the issuer-adjusted measure; the annual report prints no adjusted EBITDA, so no fiscal-year row is stated.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Senior secured credit facilities: revolving facility drawn, Term Loan A and Term Loan B | 1 | Yes | 608.4 | 3.06 | US$m | Principal outstanding: 20.0 drawn on a 305.0 revolving facility, 89.7 Term Loan A and 498.7 Term Loan B at 2026-09-30. The company describes them together as its senior secured credit facilities and does not state their order among themselves, so they share one rank. Borrowers and guarantors are the company and its subsidiaries that borrow under or guarantee the amended credit agreement. Leverage is debt through this row over trailing twelve-month EBITDA (Reported) of 198.6. |
| 8.000% senior unsecured notes due October 1, 2029 | 2 | No | 400.0 | 5.08 | US$m | Principal 400.0; senior unsecured obligations guaranteed on a senior unsecured basis by each wholly-owned subsidiary that borrows under or guarantees the senior secured credit facilities. Cumulative leverage is debt through this row (1,008.4) over the same trailing EBITDA (Reported) of 198.6; other loan agreements of 2.7 are left out because no source states their rank. |

The three credit facilities share one rank because the filing groups them as the senior secured credit facilities and does not state their order among themselves.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months 2026 | 157.1 | US$m | Opening measure: derived reported EBITDA for the nine months to 2026-09-30 (net loss plus income tax plus interest expense plus depreciation and amortization). |
| Financing fees on the receivables sales agreement | 5.1 | US$m | Issuer's own add-back as printed in the release; classification: other stated; realisation status not stated. |
| Amortization of cloud-based software costs | 1.4 | US$m | Issuer's own add-back as printed in the release; classification: other stated; realisation status not stated. |
| Stock-based compensation | 6.1 | US$m | Issuer's own add-back as printed in the release; classification: share-based compensation; realisation status not stated. |
| Restructuring, restructuring related, and impairment expenses | 6.2 | US$m | Issuer's own add-back as printed in the release; classification: restructuring; realisation status not stated. |
| Tornado related costs, net of insurance recoveries | 0.8 | US$m | Issuer's own add-back as printed in the release; classification: other stated; realisation status not stated. |
| Loss on debt extinguishment | 8.7 | US$m | Issuer's own add-back as printed in the release; classification: other stated; realisation status not stated. |
| Other (income) expense, net | -0.6 | US$m | Issuer's own add-back as printed in the release; classification: other stated; realisation status not stated. |
| EBITDA (Adjusted), nine months 2026 | 184.8 | US$m | Closing measure: the issuer-adjusted EBITDA printed in the release for the nine months. |

The bridge starts from derived reported EBITDA and ends at the issuer's adjusted EBITDA, and every add-back is the issuer's own with no realisation status stated.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Net leverage and total leverage at 2026-09-30 on reported EBITDA | Ready with Limitations | EBITDA (Reported) is derived and includes one-off items; the company's covenant leverage of 3.8x rests on definitions the filings do not print | Quote the derived and the covenant figures together, each with its definition |
| Leverage on adjusted EBITDA | Not Ready | No fiscal-year or trailing adjusted EBITDA is printed because the fourth-quarter 2025 release is not supplied | Obtain the fourth-quarter 2025 release before stating any trailing adjusted ratio |
| Year-end 2025 leverage | Not Ready | EBITDA (Reported) for FY2025 is negative after the goodwill impairment, so the ratio is not calculable; debt and cash are stated | Use debt, cash and the covenant ratio of 4.2 printed for 2025-12-31, and not a derived ratio |
| Interest cover | Ready with Limitations | Cover uses cash interest paid and reported EBITDA; FY2025 is negative; the interest coverage covenant ratio is not printed | Present cover with the covenant minimum of 2.50x from the first-quarter report as context only |
| Liquidity | Ready with Limitations | Undrawn capacity is as stated; letters of credit under the revolver are not itemised; receivables program balances are not printed | Treat 373.5 of cash plus undrawn capacity as a ceiling until those items are supplied |
| Debt structure and maturities | Ready with Limitations | Ranking among the three secured facilities is not stated; maturities depend on the springing dates tied to the 2029 notes; floors and amortization by instrument are not stated | Read the maturity wall with both the company ladder and the springing dates |
| Post-balance-sheet effects on net debt | Not Ready | The proceeds of the 2026-11-04 facility sale and the total of the scheduled dividend are not stated | No pro forma net debt is stated; none should be worked out from the sources |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 8 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 25 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 7 |

## Calculations

Each figure below is worked from the cited statements, in USD millions unless stated, and its inputs are shown.

| ID | Check | Inputs, USD million unless stated | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported), FY2023 | Net income (loss) from continuing operations -507.7 + income tax 26.8 + interest expense 62.2 + depreciation and amortization 147.8 | -270.9 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77 |
| C2 | EBITDA (Reported), FY2024 | Net income (loss) from continuing operations -48.7 + income tax -30.2 + interest expense 74.7 + depreciation and amortization 143.8 | 139.6 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77 |
| C3 | EBITDA (Reported), FY2025 | Net income (loss) from continuing operations -337.4 + income tax -125.6 + interest expense 71.1 + depreciation and amortization 141.0 | -250.9 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77 |
| C4 | EBITDA (Reported), 9M 2025 | Net income (loss) from continuing operations -438.2 + income tax -14.6 + interest expense 54.1 + depreciation and amortization 106.3 | -292.4 | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| C5 | EBITDA (Reported), 9M 2026 | Net income (loss) from continuing operations -9.3 + income tax 8.8 + interest expense 54.9 + depreciation and amortization 102.7 | 157.1 | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| C6 | EBITDA (Reported), trailing twelve months to 2026-09-30 | FY2025 -250.9 + 9M 2026 157.1 - 9M 2025 (-292.4) | 198.6 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| C7 | Cash interest paid, trailing twelve months | FY2025 82.8 + 9M 2026 52.5 - 9M 2025 55.2 | 80.1 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 5 |
| C8 | Net sales, trailing twelve months | FY2025 1,987.0 + 9M 2026 1,510.9 - 9M 2025 1,523.9 | 1,974.0 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| C9 | Net cash from operating activities, trailing twelve months | FY2025 133.8 + 9M 2026 117.4 - 9M 2025 114.5 | 136.7 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| C10 | Capital spending, trailing twelve months | FY2025 40.0 + 9M 2026 26.9 - 9M 2025 28.7 | 38.2 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| C11 | Depreciation and amortization, trailing twelve months | FY2025 141.0 + 9M 2026 102.7 - 9M 2025 106.3 | 137.4 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 4 |
| C12 | Net debt at 2024-12-31 | Gross debt 1,089.3 - cash 94.3 | 995.0 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 99 |
| C13 | Net debt at 2025-12-31 | Gross debt 1,018.2 - cash 84.2 | 934.0 | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 99 |
| C14 | Net debt at 2026-09-30 | Gross debt 976.4 - cash 97.3 | 879.1 | 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3; EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, page 11 |
| C15 | Leverage and cover at 2024-12-31 | 1,089.3 / 139.6; 995.0 / 139.6; 139.6 / 90.8 | 7.80x; 7.13x; 1.54x | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 77 |
| C16 | Leverage and cover at 2025-12-31 | EBITDA (Reported) -250.9 is not above zero, so 1,018.2 / -250.9 and 934.0 / -250.9 are not calculable; -250.9 / 82.8 | Not calculable; Not calculable; -3.03x | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 75; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 78 |
| C17 | Leverage and cover at 2026-09-30 | 976.4 / 198.6; 879.1 / 198.6; 198.6 / 80.1 | 4.92x; 4.43x; 2.48x | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 3 |
| C18 | Difference from the company's net leverage | 4.43 computed - 3.8 reported | 0.63x higher | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28 |
| C19 | Liquidity at 2026-09-30 | Cash 97.3 + undrawn revolver capacity 276.2 | 373.5, equal to the figure the release prints | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28; EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, page 3 |
| C20 | Debt principal at 2024-12-31 and 2025-12-31 | 2024: 237.0 + 83.3 + 116.5 + 270.1 + 400.0 + 5.9 = 1,112.8, less issuance costs 23.5; 2025: 160.0 + 83.3 + 116.5 + 270.1 + 400.0 + 3.7 = 1,033.6, less issuance costs 15.4 | 1,089.3 and 1,018.2, equal to total debt printed | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 99 |
| C21 | Revolver availability against stated undrawn capacity | 2026-09-30: facility 305.0 - drawn 20.0 - stated undrawn 276.2; 2025-12-31: facility 600.0 - drawn 160.0 - stated undrawn 431.2 | 8.8 at both dates, not itemised in either report | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 28; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 63; 10-K_2025-12-31_matv-20251231.htm.jsonl, page 99 |
| C22 | Debt principal to carrying value at 2026-09-30 | Maturities 2.2 + 6.6 + 6.1 + 406.2 + 6.2 + 583.8 = 1,011.1; less issuance costs 34.7 | 976.4, equal to total debt printed | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12 |
| C23 | Debt instruments to total debt | Revolver 20.0 + Term Loan A 89.7 + Term Loan B 498.7 + notes 400.0 + other 2.7 - issuance costs 34.7 | 976.4 | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12 |
| C24 | Cumulative leverage in the debt stack | (20.0 + 89.7 + 498.7) / 198.6; (608.4 + 400.0) / 198.6 | 3.06x; 5.08x | 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 12 |
| C25 | EBITDA bridge, nine months 2026 | 5.1 + 1.4 + 6.1 + 6.2 + 0.8 + 8.7 - 0.6 | 27.7 of add-backs; 157.1 + 27.7 = 184.8, equal to the issuer's adjusted EBITDA | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11 |
| C26 | EBITDA add-backs, nine months 2025 | Adjusted EBITDA 171.2 - EBITDA (Reported) (-292.4) | 463.6, which includes the goodwill impairment of 411.9 | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, page 11; 10-Q_2026-09-30_matv-20260930.htm.jsonl, page 2 |
| C27 | Free cash flow | FY2024 94.8 - 55.0; FY2025 133.8 - 40.0; 9M 2025 114.5 - 28.7; 9M 2026 117.4 - 26.9 | 39.8; 93.8; 85.8; 90.5 | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 77–78; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 4–5 |
| C28 | Segment gross profit, annual columns | FAM FY2025 767.5 - 604.2; SAS FY2025 1,219.5 - 1,019.9; the same for FY2023 and FY2024 | FAM 196.7, 174.2, 163.3; SAS 159.1, 189.9, 199.6; each pair equals consolidated gross profit | 10-K_2025-12-31_matv-20251231.htm.jsonl, pages 75–121 |
| C29 | Balance sheet presentation at 2025-12-31 | Property, plant and equipment 609.1 + finance lease assets 15.8; accrued expenses 109.4 + current finance lease liabilities 1.8 | 624.9 and 111.2, equal to the 2026 report's comparatives | 10-K_2025-12-31_matv-20251231.htm.jsonl, page 76; 10-Q_2026-09-30_matv-20260930.htm.jsonl, pages 2–3 |
| C30 | Restructuring add-back differences, 2025 | Adjusted EBITDA reconciliation 10.6 - adjusted income reconciliation 9.7; 20.7 - 19.4 | 0.9 for Q3 2025; 1.3 for nine months 2025 | EX-99.1_2026-11-04_ex991earningsrelease2026q3.htm.jsonl, pages 10–11 |

## Gaps

- Adjusted EBITDA for FY2023, FY2024, FY2025 and the fourth quarter of 2025 is not printed in any supplied document, so trailing adjusted EBITDA and every adjusted leverage and cover ratio are not calculable; this restricts the leverage conclusions to reported EBITDA, its severity is High, and supplying the fourth-quarter 2025 earnings release would close it.
- EBITDA (Reported) is derived by this analysis from net income, tax, interest and depreciation and amortization because the issuer prints no unadjusted EBITDA; it carries restructuring, tornado costs, debt extinguishment and, in 2025, the goodwill impairment, so FY2025 leverage on it is not calculable because EBITDA is negative; severity Medium, and the action is to read the derived ratios beside the company's own covenant leverage.
- The company's net leverage of 3.8x and its covenant EBITDA and net debt definitions are not reproducible from the sources, and no interest coverage ratio is reported, so covenant headroom is not established; severity Medium, and the executed credit agreement would close it.
- Letters of credit under the revolver are not itemised, leaving 8.8 of the facility unexplained at both 2026-09-30 and 2025-12-31, and the funded balance, the post-amendment commitment and any reverse receivables balances are not printed; severity Medium, and the action is to obtain the revolver letter of credit schedule and the receivables program balances.
- The proceeds of the facility sold on 2026-11-04 and the total of the scheduled dividend are not stated, so no pro forma net debt or pro forma net leverage is established; severity Medium, and no amount should be worked out from the sources.
- No balance sheet is printed at 2023-12-31 or 2025-09-30, so those statement columns are not supplied and net debt is stated at three dates only; the 2026 reports also fold finance leases into property and accrued expenses, so those two lines are not supplied for 2026-09-30; severity Low.
- Several statement cells are recorded as not supplied because the filing prints a dash: goodwill impairment for FY2024 and 9M 2026, loss on debt extinguishment for FY2023, FY2025 and 9M 2025, payments for debt issuance costs for FY2025 and 9M 2025, restricted cash at 2024-12-31 and discontinued operations after 2023; free cash flow for FY2023 is not calculable because operations include discontinued cash flows; severity Low.
- The rank, security and currency of the other loan agreements are not stated, so they are left out of the debt stack; instrument-level carrying values, amortization by instrument and the floors on the amended loans are not stated, and the three secured facilities share one rank because the filing groups them as the senior secured credit facilities; severity Low.

## Next module

The orchestrator selects the next module.
