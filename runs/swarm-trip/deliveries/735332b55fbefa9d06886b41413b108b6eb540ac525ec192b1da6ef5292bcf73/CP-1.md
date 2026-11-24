## Request
Financial foundation for TripAdvisor, Inc. as of 2026-11-05 under the credit snapshot pathway. Scope is the annual statements for FY2023 to FY2025 (all operations), the nine-month 2026 and 2025 statements (continuing operations), carrying-value debt, liquidity, last-twelve-months figures on the continuing perimeter and events to the cutoff.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_trip-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-13 | 8885b42791d5e90823a0c9c46491e45285d32d010f68b9715cb0b383be7e31bf | Audited FY2025, FY2024 and FY2023 statements, debt notes, contractual obligations, segment and Adjusted EBITDA reconciliation. |
| 10-Q_2026-03-31_trip-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | 9289cc81c4291efc67a199ffd3d95096f8d91f0c627c0d49a15ca4c0525a91f8 | Interest rate and notes maturity text; first-quarter perimeter before TheFork was discontinued. |
| 10-Q_2026-06-30_trip-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-06 | 358dea410a455694571e6fd8ed4ffb768fc6929fddacda37801383944ce9f7e1 | Put option on TheFork, discontinued-operations presentation and repayment of the 2026 notes. |
| 10-Q_2026-09-30_trip-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-05 | 37e12b49f799525884b2d1c8f8223439d80dbaee990e3c8305474f0abf40c5c7 | Latest balance sheet, nine-month statements, debt table, liquidity, covenant wording and the TheFork sale. |
| EX-99.1_2026-05-07_trip-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-07 | 986da54f4628e6ef7caa0f060a29736fbe7ef71884de15f953b1b79776621916 | First-quarter results as first reported, including TheFork, for the perimeter bridge. |
| EX-99.1_2026-08-06_trip-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-06 | 4b5f625f62e6af22d7ff5c0ad78ab3c67f22ed4bd26c03b70a227ec22f7f24b0 | Read for the discontinued-operations presentation; no figure taken from it. |
| EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-05 | 08c99d197b1e28c92053c736e4c07c927f197a67f49f8aceaed0f5db801c0a1c | Recast quarterly continuing-operations series for 2025 and 2026, non-GAAP reconciliations, free cash flow, sale proceeds. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 61e62f12db8ad1e7313bae27fae1379922767a0d24e4298e5d42cc5cae7f3f26 | Source inventory, perimeter and perimeter differences, and the listed limitations; no figure imported from it without a source page. |

## Findings

### Bottom line
Creditor protection rests on cash, not earnings: net debt is only USD 116.1 million, but last-twelve-months adjusted EBITDA has fallen to USD 207.3 million from USD 294.7 million in FY2025 and reported EBITDA is negative. Adjusted EBITDA still covers cash interest 3.50x.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2–3; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 12–16; calculation C02; calculation C05; calculation C06; calculation C07

The USD 833.9 million of Term Loan B principal is the only borrowing outstanding, because the 2026 convertible notes were repaid from cash in April 2026. The USD 741.0 million net proceeds of the TheFork sale, received on 2026-11-01, are outside these figures and would leave net debt at negative USD 624.9 million.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 11, 20, 24; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 2; calculation C08; calculation C10

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_trip-20251231.htm.jsonl | Annual report on Form 10-K | FY2025, FY2024, FY2023; balance sheets 2025-12-31 and 2024-12-31 | USD | millions, whole numbers | Consolidated, all operations including TheFork | US GAAP, audited | Tier 1 audited statements | Annual statements, debt terms, covenant level, Adjusted EBITDA reconciliation | Whole-million rounding; TheFork not separated; no FY2023 balance sheet. |
| 10-Q_2026-03-31_trip-20260331.htm.jsonl | Quarterly report on Form 10-Q | Three months to 2026-03-31 | USD | millions, one decimal | Consolidated including TheFork | US GAAP, unaudited | Tier 2b unaudited | Notes maturity and interest-rate text only | Predates the discontinued-operations presentation; no figure taken into the tables. |
| 10-Q_2026-06-30_trip-20260630.htm.jsonl | Quarterly report on Form 10-Q | Three and six months to 2026-06-30 | USD | millions, one decimal | Continuing operations excluding TheFork | US GAAP, unaudited | Tier 2b unaudited | Put option and repayment of the 2026 notes | Superseded by the September filing for balances. |
| 10-Q_2026-09-30_trip-20260930.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months to 2026-09-30; balance sheet 2026-09-30 | USD | millions, one decimal | Continuing operations excluding TheFork, which is held for sale | US GAAP, unaudited | Tier 2b unaudited | Latest statements, debt, liquidity, subsequent events | The sale closed after the balance sheet date. |
| EX-99.1_2026-05-07_trip-ex99_1.htm.jsonl | Earnings press release | Three months to 2026-03-31 | USD | millions, one decimal | Consolidated including TheFork | GAAP and issuer-defined non-GAAP | Tier 2b issuer release | Perimeter bridge for the first quarter | Superseded for Q1 2026 by the recast series. |
| EX-99.1_2026-08-06_trip-ex99_1.htm.jsonl | Earnings press release | Three and six months to 2026-06-30 | USD | millions, one decimal | Continuing operations excluding TheFork | GAAP and issuer-defined non-GAAP | Tier 2b issuer release | Presentation check only | No figure used. |
| EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl | Earnings press release | Q1 2025 to Q3 2026 recast quarters and nine months 2026 | USD | millions, one decimal | Continuing operations excluding TheFork | GAAP and issuer-defined non-GAAP | Tier 2b issuer release | Recast quarterly series, FY2025 continuing totals, free cash flow | Non-GAAP measures are the issuer's own definitions; interest expense is not in the recast tables. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Tripadvisor, Inc. | Registrant and borrower under the Amended Credit Agreement | December 31 | USD | millions | Consolidated subsidiaries; FY2025 and earlier include TheFork, the 2026 interim figures exclude it | US GAAP | FY2025; FY2024; FY2023; 9M 2026; 9M 2025; balance sheets at 2025-12-31, 2024-12-31 and 2026-09-30 |
| Subsidiary Loan Parties | Provide security under the Amended Credit Agreement | December 31 | USD | millions | Not separately reported | Not supplied: no standalone statements | Not supplied: no standalone periods |
| TheFork | Restaurant-reservation business sold on 2026-11-01; discontinued operation from Q2 2026 | December 31 | USD | millions | Segment until the second quarter of 2026, then discontinued operations and held for sale | US GAAP | Held-for-sale balances at 2026-09-30 and 2025-12-31; nine-month discontinued results |

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2023 | 2023-01-01 | 2023-12-31 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |

Balance-sheet figures are instants at the end date of their column. A subsequent event is flagged with its date below and is never blended into period figures: the sale of TheFork closed on 2026-11-01 and a restructuring plan was initiated on 2026-11-04.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 11; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 3

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | Presentation only | USD millions; US GAAP | USD millions; US GAAP | No currency conversion and no house adjustment; whole-million annual figures and one-decimal 2026 figures keep their source precision | All |
| Debt at carrying value | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 24 | Calculated aggregation | FY2025: 353, 819; FY2024: 5, 831; 2026-09-30: 8.5, 814.4 | FY2025: 1172; FY2024: 836; 2026-09-30: 822.9 | Current portion plus long-term debt, net of issuance costs; finance and operating lease liabilities sit on their own balance-sheet lines and are not added | FY2025; FY2024; 9M 2026 |
| Reported EBITDA derived | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | Calculated | Operating income and depreciation and amortization | FY2025: 172; FY2024: 177; FY2023: 213; 9M 2026: -265.1; 9M 2025: 169.2 | The issuer states no unadjusted EBITDA; reported EBITDA is operating income plus depreciation and amortization, with the goodwill impairment and restructuring left in | All income-statement columns |
| Continuing perimeter for the last twelve months | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 12–16; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 6, 35 | Normalization | FY2025 as filed: revenue 1891, Adjusted EBITDA 319 | FY2025 continuing: revenue 1674.3, Adjusted EBITDA 294.7 | Last-twelve-months figures use the recast continuing series; fiscal-year rows keep the as-filed consolidated figures so they tie to the audited statements | FY2025; LTM to 2026-09-30 |
| Cash interest paid | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 7 | Presentation only | FY2025: 59; 9M 2026: 43.1; 9M 2025: 42.9 | Same | Supplemental disclosure of cash paid; interest paid sits inside operating activities under US GAAP and is kept apart from accrued interest expense | All |
| Nine-month cash flows | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 5–7 | Presentation only | Continuing operations 130.4, -31.8, -366.4; total company 134.1, -47.5, -366.0 | Totals used for the activity rows so the cash identities hold; continuing rows added beside them | The total includes TheFork's discontinued cash flows; closing cash of 750.1 includes TheFork cash of 43.3 | 9M 2026; 9M 2025 |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Revenue | 1891 | 1835 | 1788 | 1204.1 | 1319.3 | USD millions | Reported; FY columns all operations, 9M columns continuing operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Cost of sales (exclusive of depreciation and amortization) | 145 | 131 | 119 | 95.3 | 94.8 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Marketing | 791 | 729 | 705 | 589.6 | 573.3 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Personnel (including stock-based compensation) | 573 | 595 | 570 | 298.7 | 371.6 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Technology | 99 | 91 | 80 | 66.0 | 62.9 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| General and administrative | 68 | 91 | 79 | 42.3 | 37.9 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Depreciation and amortization | 92 | 85 | 87 | 56.5 | 53.5 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Impairment of goodwill | 0 | 0 | 0 | 369.5 | Not supplied: source dash | USD millions | FY columns: the annual report states no goodwill impairment in any of the three years; 9M 2026: non-cash charge in the third quarter | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 157; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Restructuring and other related reorganization costs | 43 | 21 | 22 | 7.8 | 9.6 | USD millions | Reported expense magnitude | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Total costs and expenses | 1811 | 1743 | 1662 | 1525.7 | 1203.6 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Operating income (loss) | 80 | 92 | 126 | -321.6 | 115.7 | USD millions | Reported EBIT | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Interest expense | -63 | -46 | -44 | -46.1 | -46.5 | USD millions | Reported accrued expense, shown negative as in the statements; not cash paid | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Interest income | 40 | 48 | 47 | 18.8 | 30.3 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Other income (expense), net | -12 | -7 | -4 | 1.5 | -9.3 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Total other income (expense), net | -35 | -5 | -1 | -25.8 | -25.5 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Income (loss) before income taxes | 45 | 87 | 125 | -347.4 | 90.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| (Provision) benefit for income taxes | -5 | -82 | -115 | 22.7 | -7.8 | USD millions | Reported accrued tax; not cash paid | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Net income (loss) from continuing operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | -324.7 | 82.4 | USD millions | Reported for the nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Net income (loss) from discontinued operations, net of tax | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | 1.6 | -4.2 | USD millions | TheFork results, reported for the nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Net income (loss) | 40 | 5 | 10 | -323.1 | 78.2 | USD millions | Reported; FY columns all operations, 9M columns continuing plus discontinued | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| Stock-based compensation (inside personnel) | 108 | 120 | 96 | 50.5 | 77.1 | USD millions | Reported memo amount | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| EBITDA (Reported) | 172 | 177 | 213 | -265.1 | 169.2 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| EBITDA (Adjusted) | 319 | 339 | 334 | 163.9 | 251.3 | USD millions | Issuer Adjusted EBITDA, its segment profit measure; FY columns all operations, 9M columns continuing; adds back stock-based compensation, goodwill impairment, restructuring, legal, transaction and non-recurring items | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 186–187; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 35 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | FY2023 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income (loss) | 40 | 5 | 10 | -323.1 | 78.2 | USD millions | Reported starting line; 9M columns include discontinued operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Less: net income (loss) from discontinued operations, net of tax | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | 1.6 | -4.2 | USD millions | Reported deduction to reach continuing net income in the nine-month columns | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Depreciation and amortization | 92 | 85 | 87 | 56.5 | 53.5 | USD millions | Reported noncash adjustment; 9M columns continuing operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Stock-based compensation expense | 108 | 120 | 96 | 50.5 | 77.1 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Impairment of goodwill | 0 | 0 | 0 | 369.5 | Not supplied: source dash | USD millions | Noncash adjustment; FY columns: no impairment in the three years | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 157; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Deferred merchant payables | 52 | 19 | 32 | 94.0 | 134.2 | USD millions | Reported working-capital movement; non-debt funding float | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Deferred income tax expense (benefit) | -2 | -14 | -25 | -42.8 | -5.5 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Provision for expected credit losses | 8 | 8 | 6 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported noncash adjustment in the annual report | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109 |
| Other, net | 18 | 9 | 9 | 2.2 | 15.6 | USD millions | Reported noncash adjustment | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Accounts receivable, prepaid expenses and other assets | -8 | -24 | 6 | -56.9 | -47.3 | USD millions | Reported working-capital movement | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Accounts payable, accrued expenses and other liabilities | -46 | 13 | 11 | -25.0 | 14.2 | USD millions | Reported working-capital movement | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Income tax receivables and payables, net | -23 | -75 | -1 | -2.4 | -4.0 | USD millions | Reported working-capital movement; FY2024 includes an IRS audit settlement | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Deferred revenue | 6 | -2 | 4 | 9.5 | 17.3 | USD millions | Reported working-capital movement | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net Cash from Operating Activities | 245 | 144 | 235 | 134.1 | 347.9 | USD millions | Reported after interest, taxes and working capital; 9M columns total company including discontinued operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from operating activities, continuing operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | 130.4 | 337.5 | USD millions | Reported for the nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from operating activities, discontinued operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | 3.7 | 10.4 | USD millions | TheFork operating cash flow, nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Capital expenditures, including capitalized website development | -82 | -74 | -63 | -31.8 | -48.2 | USD millions | Reported total capex; 9M columns continuing operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Other investing activities, net | -2 | 1 | Not supplied: source dash | Not supplied: source dash | -2.2 | USD millions | Reported investing flow; dashes are missing, not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from investing activities, continuing operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | -31.8 | -50.4 | USD millions | Reported for the nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from investing activities, discontinued operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | -15.7 | -14.9 | USD millions | TheFork investing cash flow, nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net Cash from Investing Activities | -84 | -73 | -63 | -47.5 | -65.3 | USD millions | Reported; 9M columns total company including discontinued operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Proceeds from the issuance of Term Loan B Facility, net of financing costs | 341 | 493 | Not supplied: source dash | Not supplied: source dash | 341.4 | USD millions | Reported financing inflow; FY2023 and 9M 2026 are dashes, missing and not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Repayment of notes at maturity | Not supplied: source dash | -500 | Not supplied: source dash | -345.0 | Not supplied: source dash | USD millions | Reported financing outflow: the 2025 notes in FY2024 and the 2026 notes in 9M 2026; other columns are dashes, missing and not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Principal payments on Term Loan B Facility | -9 | -1 | Not supplied: source dash | -6.4 | -6.4 | USD millions | Reported financing outflow; FY2023 is a dash, missing and not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Payment of financing costs related to the Credit Facility | Not supplied: source dash | -1 | -3 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported financing outflow; the FY2025 dash is missing, not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109 |
| Repurchase of common stock related to the Merger, including transaction costs | -411 | Not supplied: source dash | Not supplied: source dash | Not supplied: source dash | -410.7 | USD millions | Reported financing outflow; the dashes are missing, not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Repurchase of common stock under the share repurchase program | -90 | -25 | -100 | Not supplied: source dash | -40.0 | USD millions | Reported financing outflow; 9M 2026 is a dash, missing and not zero | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Payment of withholding taxes on net share settlements of equity awards | -20 | -21 | -17 | -7.2 | -13.0 | USD millions | Reported financing outflow | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 109–110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Payments of finance lease obligation and other financing activities, net | -8 | -8 | -7 | -7.8 | -5.6 | USD millions | Reported financing outflow; lease principal is in financing activities | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from financing activities, continuing operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | -366.4 | -134.3 | USD millions | Reported for the nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net cash from financing activities, discontinued operations | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | Not supplied: no discontinued operation is presented in the annual report | 0.4 | -2.4 | USD millions | TheFork financing cash flow, nine-month columns only | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net Cash from Financing Activities | -197 | -63 | -127 | -366.0 | -136.7 | USD millions | Reported; 9M columns total company including discontinued operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| FX Effect on Cash | 7 | -11 | 1 | -5.4 | 7.4 | USD millions | Reported; included in the net change | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Net Cash Change | -29 | -3 | 46 | -284.8 | 153.3 | USD millions | Reported; all activities plus the FX effect | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Opening Cash | 1064 | 1067 | 1021 | 1034.9 | 1064.3 | USD millions | Reported cash, cash equivalents and restricted cash at the start of the period; no cash was restricted in the annual periods | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Closing Cash | 1035 | 1064 | 1067 | 750.1 | 1217.6 | USD millions | Reported end-of-period balance; 9M 2026 includes TheFork cash of 43.3 so continuing cash is 706.8 | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Cash Interest Paid | 59 | 58 | 39 | 43.1 | 42.9 | USD millions | Reported positive cash paid; cover denominator | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 7 |
| Cash taxes paid | 29 | 170 | 140 | 8.7 | 20.3 | USD millions | Reported positive cash paid, net of refunds | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Free cash flow, calculated | 163 | 70 | 172 | 98.6 | 289.3 | USD millions | Calculated: operating cash flow less total capex; FY columns all operations, 9M columns continuing operations; after interest, taxes and working capital | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 1035 | 1064 | 706.8 | USD millions | Reported; none restricted in the annual periods; 9M 2026 excludes TheFork cash of 43.3 held in assets held for sale | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Accounts receivable, net | 209 | 207 | 227.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Prepaid expenses and other current assets | 47 | 49 | 35.4 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Current assets held for sale from discontinued operations | Not supplied: not a separate line in the annual report | Not supplied: not a separate line in the annual report | 290.7 | USD millions | TheFork assets at 2026-09-30 | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Total current assets | 1291 | 1320 | 1260.1 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Property and equipment, net | 210 | 200 | 146.4 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Operating lease right-of-use assets | 35 | 17 | 28.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Intangible assets, net | 33 | 36 | 32.0 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Goodwill | 844 | 814 | 355.3 | USD millions | Reported; 9M 2026 is after the impairment and after TheFork goodwill moved to held for sale | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Non-marketable investments | 28 | 30 | 27.0 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Deferred income taxes, net (asset) | 137 | 101 | 171.3 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Other long-term assets | 47 | 43 | 32.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Total Assets | 2625 | 2561 | 2052.5 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Accounts payable | 23 | 49 | 7.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Deferred merchant payables | 308 | 255 | 396.8 | USD millions | Reported; traveler payments held before experience operators are paid, inside reported cash; liability, not financial debt | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 108, 128; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Deferred revenue | 53 | 47 | 62.9 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Current portion of debt | 353 | 5 | 8.5 | USD millions | Reported carrying value; FY2025 includes the 2026 convertible notes | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Income taxes payable | 12 | 23 | 17.9 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Accrued expenses and other current liabilities | 249 | 249 | 165.4 | USD millions | Reported; includes the current portion of finance lease and operating lease liabilities | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 108, 158; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Current liabilities held for sale from discontinued operations | Not supplied: not a separate line in the annual report | Not supplied: not a separate line in the annual report | 62.3 | USD millions | TheFork liabilities at 2026-09-30 | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Total current liabilities | 998 | 628 | 721.0 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Long-term debt | 819 | 831 | 814.4 | USD millions | Reported carrying value after the current portion; net of issuance costs | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Finance lease obligation, net of current portion | 36 | 43 | 29.4 | USD millions | Reported on its own line, outside the debt lines | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Operating lease liabilities, net of current portion | 29 | 11 | 24.3 | USD millions | Reported on its own line, outside the debt lines | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Deferred income taxes, net (liability) | 1 | 1 | 1.1 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Other long-term liabilities | 97 | 104 | 96.0 | USD millions | Reported; includes unrecognized tax benefits | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Total Liabilities | 1980 | 1618 | 1686.2 | USD millions | Reported | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Total Equity | 645 | 943 | 366.3 | USD millions | Reported total stockholders' equity; no noncontrolling interest or temporary equity | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 4 |
| Total Debt | 1172 | 836 | 822.9 | USD millions | Calculated: current portion plus long-term debt at carrying value; leases outside | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 24 |

### T4.18 Debt instruments

All amounts are USD millions at 2026-09-30, the latest balance-sheet date. The 0.25% convertible 2026 notes of USD 345.0 million were repaid at maturity on 2026-04-01 and are not outstanding at this date.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 20, 24–26, 62–63; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 160–166

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term Loan B Facility | Term loan | 822.9 | 833.9 | 833.9 | Not applicable: term loan | Secured by substantially all assets of the Company and the Subsidiary Loan Parties | Not supplied: rank against other secured claims not stated | USD | 822.9 | Not applicable | SOFR + 2.75%; effective rate 6.92% | floating | SOFR | 275 | Not supplied: floor not stated | 2031-07-08 | 8.5 | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 20, 24–26, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 161, 163 |
| Revolving credit facility | Revolver | 0 | 0 | 0 | 500.0 | Secured under the Amended Credit Agreement | Not supplied: rank against the Term Loan B not stated | USD | 0 | Not applicable | Adjusted Term SOFR, EURIBO or Daily Simple SONIA plus 1.75% to 2.50% by leverage; commitment fee 0.25% to 0.40% | floating | Adjusted Term SOFR, EURIBO, Daily Simple SONIA | 175 to 250 | Not supplied: floor not stated | 2028-06-29 | 0 | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 161–162 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue, continuing operations | LTM to 2026-09-30 | USD 1,674.3m | USD 1,204.1m | USD 1,319.3m | USD 1,559.1m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | FY2025 is the recast continuing total, not the as-filed 1891. |
| Adjusted EBITDA, continuing operations | LTM to 2026-09-30 | USD 294.7m | USD 163.9m | USD 251.3m | USD 207.3m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 13; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 35 | Issuer-adjusted; equals the fourth quarter of 2025 plus nine months 2026. |
| EBITDA (Reported), continuing operations | LTM to 2026-09-30 | USD 161.7m | USD -265.1m | USD 169.2m | USD -272.6m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 12; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | The FY2025 provision for income taxes is a dash in the recast table; the four quarters sum to 0.1, which is used. |
| Cash interest paid | LTM to 2026-09-30 | USD 59m | USD 43.1m | USD 42.9m | USD 59.2m | Calculated | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 7 | The FY2025 amount is consolidated and rounded; whether any TheFork interest is inside is not stated. |
| Operating cash flow, continuing operations | LTM to 2026-09-30 | USD 234.7m | USD 130.4m | USD 337.5m | USD 27.6m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 | The release quarters of 2025 sum to 337.7 against 337.5 in the quarterly report; the quarterly report figure is used. |
| Capital expenditures, continuing operations | LTM to 2026-09-30 | USD 61.3m | USD 31.8m | USD 48.2m | USD 44.9m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 | Includes capitalized website development. |
| Free cash flow, continuing operations | LTM to 2026-09-30 | USD 173.4m | USD 98.6m | USD 289.3m | USD -17.3m | Calculated | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 | Operating cash flow less capex; the prior stub is 337.5 less 48.2. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Carrying debt / reported EBITDA | Not supplied: no balance sheet at 2023-12-31 | Not applicable | 213 | Income statement FY2023; C03 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no debt figure for 2023-12-31 | Not Calculable | 1 | The FY2023 balance sheet is not in the filings. |
| Net debt / EBITDA | Net carrying debt / reported EBITDA | Not supplied: no balance sheet at 2023-12-31 | Not applicable | 213 | Income statement FY2023; C03 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no net debt figure for 2023-12-31 | Not Calculable | 1 | The FY2023 balance sheet is not in the filings. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 213 | Income statement FY2023; C03 | 39 | Cash flow FY2023 | FY2023 / 2023-12-31 | USD | US$m | 5.46 | Calculated | 1 | Consolidated, whole millions. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | Not supplied: no balance sheet at 2023-12-31 | Not applicable | 334 | Segment reconciliation FY2023 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no debt figure for 2023-12-31 | Not Calculable | 1 plus issuer non-GAAP | The FY2023 balance sheet is not in the filings. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | Not supplied: no balance sheet at 2023-12-31 | Not applicable | 334 | Segment reconciliation FY2023 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: no net debt figure for 2023-12-31 | Not Calculable | 1 plus issuer non-GAAP | The FY2023 balance sheet is not in the filings. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 334 | Segment reconciliation FY2023 | 39 | Cash flow FY2023 | FY2023 / 2023-12-31 | USD | US$m | 8.56 | Calculated | 1 plus issuer non-GAAP | Consolidated, whole millions. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 836 | Balance sheet FY2024; C01 | 177 | Income statement FY2024; C03 | FY2024 / 2024-12-31 | USD | US$m | 4.72 | Calculated | 1 | Consolidated, all operations; the debt is the 2026 notes and the Term Loan B. |
| Net debt / EBITDA | Net carrying debt / reported EBITDA | -228 | Balance sheet FY2024; C02 | 177 | Income statement FY2024; C03 | FY2024 / 2024-12-31 | USD | US$m | -1.29 | Calculated | 1 | Negative: cash exceeded debt. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 177 | Income statement FY2024; C03 | 58 | Cash flow FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.05 | Calculated | 1 | Cash paid, not accrued interest. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 836 | Balance sheet FY2024; C01 | 339 | Segment reconciliation FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.47 | Calculated | 1 plus issuer non-GAAP | Issuer add-backs not independently accepted. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | -228 | Balance sheet FY2024; C02 | 339 | Segment reconciliation FY2024 | FY2024 / 2024-12-31 | USD | US$m | -0.67 | Calculated | 1 plus issuer non-GAAP | Negative: cash exceeded debt. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 339 | Segment reconciliation FY2024 | 58 | Cash flow FY2024 | FY2024 / 2024-12-31 | USD | US$m | 5.84 | Calculated | 1 plus issuer non-GAAP | Cash paid, not accrued interest. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 1172 | Balance sheet FY2025; C01 | 172 | Income statement FY2025; C03 | FY2025 / 2025-12-31 | USD | US$m | 6.81 | Calculated | 1 | Includes the 2026 notes of USD 345.0 million repaid on 2026-04-01; all operations. |
| Net debt / EBITDA | Net carrying debt / reported EBITDA | 137 | Balance sheet FY2025; C02 | 172 | Income statement FY2025; C03 | FY2025 / 2025-12-31 | USD | US$m | 0.80 | Calculated | 1 | Cash of 1035 includes TheFork cash and cash held for experience operators. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 172 | Income statement FY2025; C03 | 59 | Cash flow FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.92 | Calculated | 1 | Cash paid, not accrued interest. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 1172 | Balance sheet FY2025; C01 | 319 | Segment reconciliation FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.67 | Calculated | 1 plus issuer non-GAAP | All operations; the continuing figure is 294.7. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | 137 | Balance sheet FY2025; C02 | 319 | Segment reconciliation FY2025 | FY2025 / 2025-12-31 | USD | US$m | 0.43 | Calculated | 1 plus issuer non-GAAP | All operations; issuer add-backs not independently accepted. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 319 | Segment reconciliation FY2025 | 59 | Cash flow FY2025 | FY2025 / 2025-12-31 | USD | US$m | 5.41 | Calculated | 1 plus issuer non-GAAP | All operations; cash paid, not accrued interest. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 822.9 | Balance sheet 2026-09-30; C01 | -272.6 | Last twelve months to 2026-09-30; C05 | 2026-09-30 | USD | US$m | Not calculable: last-twelve-months reported EBITDA is negative | Not Calculable | 1 | Continuing operations; the denominator is negative after the goodwill impairment. |
| Net debt / EBITDA | Net carrying debt / reported EBITDA | 116.1 | Balance sheet 2026-09-30; C02 | -272.6 | Last twelve months to 2026-09-30; C05 | 2026-09-30 | USD | US$m | Not calculable: last-twelve-months reported EBITDA is negative | Not Calculable | 1 | Continuing operations; before the TheFork proceeds. |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | -272.6 | Last twelve months to 2026-09-30; C05 | 59.2 | Last twelve months to 2026-09-30 | 2026-09-30 | USD | US$m | -4.60 | Calculated | 1 | Negative because of the noncash goodwill impairment; not a cash-servicing measure. |
| Total debt / adjusted EBITDA | Carrying debt / issuer Adjusted EBITDA | 822.9 | Balance sheet 2026-09-30; C01 | 207.3 | Last twelve months to 2026-09-30; C06 | 2026-09-30 | USD | US$m | 3.97 | Calculated | 1 plus issuer non-GAAP | Continuing operations; Term Loan B only. |
| Net debt / adjusted EBITDA | Net carrying debt / issuer Adjusted EBITDA | 116.1 | Balance sheet 2026-09-30; C02 | 207.3 | Last twelve months to 2026-09-30; C06 | 2026-09-30 | USD | US$m | 0.56 | Calculated | 1 plus issuer non-GAAP | Before the TheFork proceeds; pro forma is in the post-balance-sheet table. |
| Adjusted EBITDA / cash interest | Issuer Adjusted EBITDA / cash interest paid | 207.3 | Last twelve months to 2026-09-30; C06 | 59.2 | Last twelve months to 2026-09-30; C06 | 2026-09-30 | USD | US$m | 3.50 | Calculated | 1 plus issuer non-GAAP | Cash interest is a consolidated paid figure; issuer add-backs include 70.3 of stock-based compensation. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|
| Issuer reported | Adjusted EBITDA margin, continuing operations | 17.6% | 13.6% | Lower | Issuer non-GAAP margin from the recast series; page 16 of the third-quarter release. |
| Issuer reported | Experiences revenue growth, year on year | 10% | 1% | Lower | Third quarter 2026 growth was -3%; the series is on the recast perimeter. |
| Issuer reported | Hotels and Other revenue growth, year on year | -8% | -21% | Lower | Accelerating decline; the third quarter of 2026 was -23%. |
| Issuer reported | Hotels and Other Adjusted EBITDA growth, year on year | -19% | -35% | Lower | Third quarter 2026 growth was -41%; issuer-adjusted measure. |
| Issuer reported | Experiences Adjusted EBITDA growth, year on year | 15% | -35% | Lower | Third quarter 2026 growth was -27%; issuer-adjusted measure. |
| Operating | Experience bookings, third quarter 2026 | Not supplied: full-year count not printed in the sources read | 6.8 million | Higher | Third-quarter bookings grew about 2% while gross booking value was about flat. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Affected conclusions | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Debt principal versus carrying value | Every balance-sheet debt line at carrying value | Principal before unamortized issuance costs | 2026-09-30 principal 833.9 against carrying 822.9; 2025-12-31 principal 1185 (345 + 840) against carrying 1172 | 2026-09-30; 2025-12-31 | 11.0 at 2026-09-30; 13 at 2025-12-31 | Leverage and maturity analysis | Use carrying values in ratios and principal in the ladder; the difference is unamortized costs | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 20; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 152 |
| Reported against adjusted EBITDA | Primary denominator is unadjusted EBITDA | Adjusted EBITDA adds back stock-based compensation, goodwill impairment, restructuring, legal, transaction and non-recurring items | FY2025 reported 172 against adjusted 319 (all operations); last twelve months reported -272.6 against adjusted 207.3 (continuing) | FY2023 to FY2025; LTM to 2026-09-30 | Very large in the latest period: the 369.5 noncash impairment | Leverage and cover | Keep reported primary and adjusted separate and labelled; add-backs are not accepted by this module | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 186–187; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 35 |
| Perimeter | One perimeter for all periods | Annual report includes TheFork; 2026 interim figures exclude it | FY2025 revenue 1891 as filed against 1674.3 continuing; Adjusted EBITDA 319 against 294.7; year-end cash 1035 against 978.0 | FY2025; Q1 2026 | 216.7 of revenue and 24.3 of Adjusted EBITDA for FY2025 | Trend and leverage comparisons | Fiscal-year rows keep the as-filed perimeter to tie to audited statements; last-twelve-months rows use the recast series; never mix them in one ratio | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 13–14; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 186 |
| Interest | Coverage uses cash interest paid | Accrued interest expense and effective interest rate are also printed | FY2025 expense 63 against cash paid 59; 9M 2026 expense 46.1 against paid 43.1; Term Loan B rate 6.92% effective against 6.65% stated | FY2025; 9M 2026 | 4 for FY2025; 3.0 for 9M 2026 | Interest cover | Use cash paid; keep accrued expense and both rates visible | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 7, 25, 62 |
| Operating cash flow, nine months 2025 | One figure per period | Quarterly report prints 337.5; the release quarters sum to 337.7 | 101.1 + 203.7 + 32.9 = 337.7 against 337.5 | 9M 2025; LTM to 2026-09-30 | 0.2 | Last-twelve-months cash flow | Quarterly report figure used; the difference is rounding in the release | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14 |
| TheFork sale, multiple figures | Separate price, cash received and gain | Put option price 700.0; net cash at closing about 741.0 after working capital, cash and indebtedness adjustments and expenses; expected gain about 487.0; transaction costs 16.0 to 18.0 netted against the gain | Different roles of one economic event | Event of 2026-11-01 | 41.0 between the put price and net cash received | Pro forma net debt | Net cash received of 741.0 is used for net debt; the others are context and the final amount may differ materially | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 11, 65 |
| Letters of credit at 2025-12-31 | One figure | Annual report prints 4 million; the quarterly report prints 3.6 million | Whole-million rounding in the annual report | 2025-12-31 | 0.4 | Undrawn facility availability | Use the one-decimal figure, 3.6 | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 161; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 62 |
| Non-debt funding float | Deferred merchant payables are a working-capital float, not ordinary payables | Reported as a current liability, with the related cash inside reported cash | 396.8 at 2026-09-30 against 308 at 2025-12-31 | 2025-12-31; 2026-09-30 | 396.8 against cash of 706.8 | Liquidity and net debt | Cash is shown as reported; usable cash after the float is 310.0 | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 128; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | Not supplied: no balance sheet at 2023-12-31 | Not supplied: no balance sheet at 2023-12-31 | x | Reported EBITDA 213; the debt figures are not in the filings. |
| FY2024 / 2024-12-31 | 4.72 | -1.29 | x | Carrying debt 836 and cash 1064; reported EBITDA 177; all operations. |
| FY2025 / 2025-12-31 | 6.81 | 0.80 | x | Carrying debt 1172 includes the 2026 notes repaid in April 2026; reported EBITDA 172; all operations. |
| 2026-09-30 | Not supplied: last-twelve-months reported EBITDA is negative | Not supplied: last-twelve-months reported EBITDA is negative | x | Carrying debt 822.9, net debt 116.1; continuing operations; adjusted ratios of 3.97x and 0.56x are in the calculation register. |

The latest point cannot be charted on reported EBITDA because the last twelve months include a noncash goodwill impairment, so the adjusted ratios in the register are the usable measure for 2026-09-30.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2–3; calculation C05; calculation C07

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 5.46 | x | Reported EBITDA 213 over cash interest paid 39; all operations. |
| FY2024 / 2024-12-31 | 3.05 | x | Reported EBITDA 177 over cash interest paid 58; all operations. |
| FY2025 / 2025-12-31 | 2.92 | x | Reported EBITDA 172 over cash interest paid 59; all operations. |
| 2026-09-30 | -4.60 | x | Last-twelve-months reported EBITDA of -272.6 over cash interest paid of 59.2; continuing operations; adjusted cover is 3.50x. |

The negative latest value reflects a noncash goodwill impairment inside reported EBITDA and is not a measure of cash interest servicing.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 7; calculation C05; calculation C07

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1064 | 497 | US$m | Cash as reported; revolver of 500 less standby letters of credit of 3 issued; all operations. |
| FY2025 / 2025-12-31 | 1035 | 496.4 | US$m | Cash as reported, including TheFork; revolver of 500 less standby letters of credit of 3.6 issued. |
| 2026-09-30 | 706.8 | 497.7 | US$m | Continuing-operations cash, excluding TheFork cash of 43.3; revolver of 500.0 undrawn less standby letters of credit of 2.3; includes cash held for experience operators of up to 396.8. |

Reported cash includes traveler money awaiting payment to experience operators, so cash overstates what is freely available.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 128; calculation C09

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Revenue | 1835 | 1891 | 1204.1 | USD millions | Reported; FY columns all operations, 9M continuing operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| EBITDA (Reported) | 177 | 172 | -265.1 | USD millions | Calculated: operating income plus depreciation and amortization | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 |
| EBITDA (Adjusted), issuer | 339 | 319 | 163.9 | USD millions | Issuer non-GAAP; FY columns all operations, 9M continuing | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 186–187; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 35 |
| Net cash from operating activities | 144 | 245 | 134.1 | USD millions | Reported; 9M total company | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Free cash flow, calculated | 70 | 163 | 98.6 | USD millions | Operating cash flow less capex; 9M continuing operations | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6 |
| Total Debt | 836 | 1172 | 822.9 | USD millions | Carrying value at period end | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Cash & Equivalents | 1064 | 1035 | 706.8 | USD millions | Reported at period end | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Net debt | -228 | 137 | 116.1 | USD millions | Calculated: total debt less cash | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 |
| Cash plus undrawn revolver | 1561 | 1531.4 | 1204.5 | USD millions | Calculated: cash plus revolver less letters of credit | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 2.1 | US$m | Remaining fourth-quarter installment, 0.25% of 850.0 rounded; calculated from the stated amortization. |
| FY2027 | 8.5 | US$m | Four quarterly installments of 0.25%; 1.00% a year of 850.0. |
| FY2028 | 8.5 | US$m | Same schedule; the revolver of 500.0 matures on 2028-06-29 and is undrawn. |
| FY2029 | 8.5 | US$m | Same schedule. |
| FY2030 | 8.5 | US$m | Same schedule. |
| FY2031 | 797.8 | US$m | First-quarter installment plus the balance due on 2031-07-08; calculated as principal less the earlier installments. |

The ladder is calculated from the stated amortization and maturity because the quarterly report prints no maturity table, and it excludes finance and operating leases.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 24–25, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 95; calculation C10

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | Not supplied: no balance sheet at 2023-12-31 | Not supplied: no balance sheet at 2023-12-31 | Not supplied: no balance sheet at 2023-12-31 | US$m | The annual report prints balance sheets for 2025 and 2024 only. |
| FY2024 / 2024-12-31 | 836 | 1064 | -228 | US$m | Carrying debt: current portion 5 plus long-term debt 831, including the 2026 notes of 343 net and Term Loan B of 493 net; principal total 844; leases outside the debt lines. Net debt is negative: cash exceeded debt. |
| FY2025 / 2025-12-31 | 1172 | 1035 | 137 | US$m | Carrying debt: current portion 353 plus long-term debt 819, including the 2026 notes of 344 net; principal total 1185; leases outside the debt lines. All operations; the continuing-operations cash is 978.0. |
| 2026-09-30 | 822.9 | 706.8 | 116.1 | US$m | Carrying debt: current portion 8.5 plus long-term debt 814.4, all Term Loan B net of issuance costs; principal 833.9. Continuing operations; before the sale proceeds of 2026-11-01 and excluding TheFork cash of 43.3. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 833.9 | -11.0 | 822.9 | US$m | Ladder principal of Term Loan B only. Reconciling item: unamortized debt issuance costs of 11.0; the revolver is undrawn and the 2026 notes are repaid; finance leases are on their own balance-sheet lines and are not in the ladder or the debt total. Calculation C11. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Sale of TheFork to American Express completed; net cash consideration received | 2026-11-01 | -741.0 | -624.9 | Not supplied: last-twelve-months reported EBITDA is negative | US$m | Net cash received at closing of about 741.0 after adjustments and expenses; net debt of 116.1 at 2026-09-30 less 741.0. Pro forma net leverage on adjusted EBITDA of 207.3 is -3.01x. The amount may change with final adjustments; no use of the proceeds, including any repayment of the Term Loan B, is reflected; the restructuring plan of 2026-11-04 is not reflected. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2025-03-31 | 352.5 | 46.3 | US$m | Quarter ended on this date; continuing operations; issuer-adjusted EBITDA, not house-adjusted. |
| 2025-06-30 | 476.0 | 97.2 | US$m | Same quarterly duration and perimeter; issuer-adjusted EBITDA. |
| 2025-09-30 | 490.8 | 107.8 | US$m | Same quarterly duration and perimeter; issuer-adjusted EBITDA. |
| 2025-12-31 | 355.0 | 43.4 | US$m | Same quarterly duration and perimeter; issuer-adjusted EBITDA. |
| 2026-03-31 | 325.8 | 16.4 | US$m | Same quarterly duration; recast from 382.4 and 22.1 as first reported including TheFork; issuer-adjusted EBITDA. |
| 2026-06-30 | 441.9 | 76.4 | US$m | Same quarterly duration and perimeter; issuer-adjusted EBITDA. |
| 2026-09-30 | 436.4 | 71.1 | US$m | Same quarterly duration and perimeter; issuer-adjusted EBITDA. |

The series is seasonal, with the second and third quarters strongest, so quarters should be compared with the same quarter a year earlier; the issuer-adjusted measure is higher than reported EBITDA.
Basis: EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 13–16; calculation C06

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Term Loan B Facility | 1 | Yes | 833.9 | Not supplied: the common reported EBITDA denominator is negative | US$m | Borrower: the Company; secured by substantially all assets of the Company and the Subsidiary Loan Parties under the Amended Credit Agreement; principal at 2026-09-30. The undrawn revolver is left out because its rank against the Term Loan B is not stated. Adjusted cumulative leverage is 3.97x. |

The stack is the single drawn facility and is not a complete creditor waterfall: executed documents and obligor scope are not supplied.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 24–26, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 161

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | 172 | US$m | FY2025, all operations; operating income of 80 plus depreciation and amortization of 92; opening amount. |
| Stock-based compensation | 108 | US$m | Issuer add-back; share-based compensation; realisation status not stated; noncash expense. |
| Restructuring and other related reorganization costs | 43 | US$m | Issuer add-back; restructuring; realisation status not stated; cash and noncash components not split. |
| Legal reserves, settlements and other | -4 | US$m | Issuer adjustment; legal; net credit removed from Adjusted EBITDA; realisation status not stated. |
| EBITDA (Adjusted) | 319 | US$m | Closing issuer Adjusted EBITDA, all operations, as printed in the segment reconciliation; no house acceptance of the add-backs. |

The bridge reconciles exactly for FY2025 on the as-filed perimeter and does not show whether any add-back recurs; the latest twelve months are not bridged because the rounded quarterly components leave a small unexplained difference.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 186–187; calculation C04

### Financial interpretation

Leverage is low and falling in debt terms, but the earnings base is shrinking faster than the debt. Gross debt fell by USD 349.1 million between the year end and 2026-09-30 because the 2026 notes were repaid from cash, which took gross leverage on issuer-adjusted EBITDA to 3.97x at the latest date and left net leverage at 0.56x. The transmission is search-driven traffic loss in Hotels and Other, where adjusted EBITDA fell 41% in the third quarter, with Experiences margin also lower; if last-twelve-months adjusted EBITDA keeps falling at the recent pace, adjusted gross leverage rises quickly even with no new borrowing.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 22, 24, 46; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 1–2, 16; calculation C07; calculation C13

Interest cover is adequate on the adjusted measure but is weakening because the cash that earned interest has been spent. Net interest cost for nine months 2026 was USD 27.3 million against USD 16.2 million a year earlier, because interest income fell with the cash balance while the floating-rate Term Loan B cost stayed near USD 40.8 million. Adjusted EBITDA covers cash interest paid 3.50x, down from 5.41x at FY2025, so a further earnings fall or a rate rise would erode cover without any change in debt.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 25; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 163; calculation C07; calculation C12

Cash generation is the weakest dimension. Last-twelve-months free cash flow is negative at USD 17.3 million: operating cash flow was only USD 27.6 million against capital expenditure of USD 44.9 million, after a working-capital timing swing and a fall in net income. Nine-month free cash flow of USD 98.6 million compares with USD 289.3 million a year earlier, and the issuer states that cash flows from experience bookings are typically negative in the second half of the year; fourth-quarter 2025 free cash flow was negative USD 116.1 million, so the fourth quarter of 2026 is likely to repeat that seasonal outflow unless working-capital timing differs.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 6, 64, 66; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; calculation C06

Liquidity is ample but flattered by customer money. Cash of USD 706.8 million plus the undrawn USD 497.7 million revolver gives USD 1,204.5 million against debt that amortizes at USD 8.5 million a year, and the revolver matures on 2028-06-29. Deferred merchant payables of USD 396.8 million are traveler payments awaiting transfer to experience operators and sit inside reported cash, so cash after the float is USD 310.0 million; a drop in experience bookings would shrink the float first and consume cash before it touched earnings. The sale proceeds raise liquidity but are not in these figures.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 62; 10-K_2025-12-31_trip-20251231.htm.jsonl, page 128; calculation C09

The strongest contrary evidence is the sale: the USD 741.0 million net proceeds exceed net debt of USD 116.1 million several times over and would cover most of the USD 833.9 million of Term Loan B principal, and management says it expects to prioritize reduction of long-term debt. That would make the debt question one of earnings durability rather than refinancing. The view would change if a goodwill charge recurs, since USD 44.3 million of goodwill remains in Hotels and Other, or if the proceeds are directed to shareholders or acquisitions rather than debt.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 11, 46, 65; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 2; calculation C08

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported debt, cash and carrying-value net debt at 2025-12-31 and 2026-09-30 | Ready | Carrying values tie to the balance sheets; year-end figures are consolidated and rounded | Quote year-end figures with their perimeter. |
| Leverage and cover on the continuing perimeter | Ready with Limitations | Reported EBITDA is negative for the last twelve months; adjusted ratios use issuer add-backs; cash interest is a consolidated paid figure | Use the adjusted ratios and label them; do not mix as-filed and recast periods. |
| Covenant headroom | Not Ready | The reported covenant ratio and its EBITDA definition are not in the sources | Do not infer capacity from these tables. |
| Pro forma position after the TheFork sale | Ready with Limitations | Net proceeds are approximate and no use of proceeds is disclosed | Show the pro forma beside the reported net debt and state it as an event. |

### Limitations

The annual figures cover all operations including TheFork and are rounded to whole USD millions, while the 2026 figures cover continuing operations to one decimal, so FY2025 and the latest period are not like-for-like. The last twelve months are built from the issuer's recast quarterly series, and the TheFork proceeds of USD 741.0 million are outside the balance-sheet figures.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 186; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 12–16; Source readiness (CP-0); calculation C14

The issuer states no unadjusted EBITDA, so reported EBITDA is calculated as operating income plus depreciation and amortization and is negative for the last twelve months; the adjusted ratios rest on issuer add-backs that include stock-based compensation of USD 70.3 million.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 35; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 12; calculation C05

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 18 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 8 |

## Calculations
All amounts are USD millions unless stated. Ratios are shown to two decimals; amounts keep source precision.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Carrying debt at FY2025, FY2024 and 2026-09-30 | 353 + 819; 5 + 831; 8.5 + 814.4 | 1172; 836; 822.9 | USD millions | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 | Leases on their own lines are not added. |
| C02 | Net debt | 1172 - 1035; 836 - 1064; 822.9 - 706.8 | 137; -228; 116.1 | USD millions | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 3 | Before the sale proceeds; cash includes cash held for experience operators. |
| C03 | EBITDA (Reported), operating income plus depreciation and amortization | FY2025: 80 + 92; FY2024: 92 + 85; FY2023: 126 + 87; 9M 2026: -321.6 + 56.5; 9M 2025: 115.7 + 53.5 | 172; 177; 213; -265.1; 169.2 | USD millions | 10-K_2025-12-31_trip-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | The issuer states no unadjusted EBITDA. |
| C04 | FY2025 bridge from reported to adjusted EBITDA | 172 + 108 + 43 - 4 | 319 | USD millions | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 186–187 | All operations; add-backs as printed. |
| C05 | Last-twelve-months reported EBITDA, continuing operations | Fourth quarter 2025 operating income: -29.9 + -7.7 + 10.9 = -26.7. FY2025 operating income: 115.7 + -26.7 = 89.0. FY2025 EBITDA: 89.0 + 72.7 = 161.7. LTM: 161.7 + -265.1 - 169.2 | -272.6 | USD millions | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 12; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | Quarterly components are rounded; the same figure follows from -7.5 + -265.1. |
| C06 | Last-twelve-months series, continuing operations | Revenue: 1674.3 + 1204.1 - 1319.3. Adjusted EBITDA: 294.7 + 163.9 - 251.3. Cash interest: 59 + 43.1 - 42.9. Operating cash flow: 234.7 + 130.4 - 337.5. Capex: 61.3 + 31.8 - 48.2. Free cash flow: 173.4 + 98.6 - 289.3; check 27.6 - 44.9. Quarterly sums: 352.5 + 476.0 + 490.8 = 1319.3; 46.3 + 97.2 + 107.8 = 251.3; 46.3 + 97.2 + 107.8 + 43.4 = 294.7. Fourth quarter 2025 free cash flow: -103.0 - 13.1 | 1559.1; 207.3; 59.2; 27.6; 44.9; -17.3; -17.3; -116.1 | USD millions | EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 13–14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 6, 7, 35 | Perimeter of cash interest is consolidated. |
| C07 | Ratios, carrying debt, net debt and EBITDA over cash interest | FY2024: 836 / 177; -228 / 177; 177 / 58; 836 / 339; -228 / 339; 339 / 58. FY2025: 1172 / 172; 137 / 172; 172 / 59; 1172 / 319; 137 / 319; 319 / 59. FY2023: 213 / 39; 334 / 39. 2026-09-30: -272.6 / 59.2; 822.9 / 207.3; 116.1 / 207.3; 207.3 / 59.2 | 4.72; -1.29; 3.05; 2.47; -0.67; 5.84. 6.81; 0.80; 2.92; 3.67; 0.43; 5.41. 5.46; 8.56. -4.60; 3.97; 0.56; 3.50 | x | See the calculation register | Leverage on a negative denominator is not calculable. |
| C08 | Pro forma net debt after the TheFork sale | 116.1 - 741.0; adjusted leverage -624.9 / 207.3 | -624.9; -3.01 | USD millions; x | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 11 | Net cash approximate and subject to final adjustments. |
| C09 | Liquidity components | Undrawn revolver: 500.0 - 2.3; 500.0 - 3.6; 500 - 3. Cash plus revolver: 706.8 + 497.7; 1035 + 496.4; 1064 + 497. Cash after the float: 706.8 - 396.8 | 497.7; 496.4; 497. 1204.5; 1531.4; 1561. 310.0 | USD millions | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 62 | Availability may be constrained by the covenant, which is not tested here. |
| C10 | Debt maturity ladder at 2026-09-30 | 0.25% of 850.0 = 2.125, shown as 2.1; 4 x 2.125 = 8.5; FY2031: 833.9 - 2.1 - 4 x 8.5 = 797.8; ladder: 2.1 + 8.5 + 8.5 + 8.5 + 8.5 + 797.8 | 833.9 | USD millions | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 24–25, 62 | Calculated from the stated amortization; no table is printed. |
| C11 | Principal to carrying value | 833.9 - 11.0 | 822.9 | USD millions | 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 20, 24 | Equals the sum in the first calculation. |
| C12 | Net interest and interest change, nine months | 2026: 46.1 - 18.8; 2025: 46.5 - 30.3; difference 27.3 - 16.2 | 27.3; 16.2; 11.1 | USD millions | 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 2 | Continuing operations. |
| C13 | Gross debt change and statement identities | Debt change: 1172 - 822.9 = 349.1. Assets: 1980 + 645; 1618 + 943; 1686.2 + 366.3. Cash change: 245 - 84 - 197 + 7; 144 - 73 - 63 - 11; 235 - 63 - 127 + 1; 134.1 - 47.5 - 366.0 - 5.4; 347.9 - 65.3 - 136.7 + 7.4. Cash roll: 1064 - 29; 1067 - 3; 1021 + 46; 1034.9 - 284.8; 1064.3 + 153.3 | 349.1. 2625; 2561; 2052.5. -29; -3; 46; -284.8; 153.3. 1035; 1064; 1067; 750.1; 1217.6 | USD millions | 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107–110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3–6 | All identities reconcile; the debt change is gross, not net. |
| C14 | Perimeter bridges | Revenue Q1 2026: 382.4 - 325.8 = 56.6 = 57.3 - 0.7. Year-end cash: 978.0 + 56.9 = 1034.9 against 1035. FY2025 revenue: 1891 - 1674.3 = 216.7; Adjusted EBITDA 319 - 294.7 = 24.3 | 56.6; 1034.9; 216.7; 24.3 | USD millions | EX-99.1_2026-05-07_trip-ex99_1.htm.jsonl, page 1; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 13–14; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 3, 16 | The year-end cash bridge ties within rounding of the annual figure. |

## Gaps

- Medium: Reported EBITDA is negative for the last twelve months to 2026-09-30 because of the noncash goodwill impairment, so leverage on reported EBITDA is not calculable at the latest date. The adjusted ratios remain available but rest on issuer add-backs, including stock-based compensation, whose cash character is not tested; a house-normalized or covenant-defined EBITDA would be needed to judge the quality of earnings.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 35; calculation C05; calculation C07
- Medium: The reported covenant ratio, its EBITDA definition and the headroom are not in the sources; the maximum total net leverage ratio of 4.5 to 1.0 is stated only in the annual report for the revolver. No covenant capacity is inferred from these tables, and the executed credit agreement is needed for any covenant conclusion.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, page 161; 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 62
- Medium: The fiscal-year rows are on the as-filed consolidated perimeter including TheFork, while the latest period is on the continuing perimeter. Both are shown and bridged, but a like-for-like fiscal-year series for 2024 and 2023 on the continuing perimeter is not supplied, so earlier leverage cannot be compared exactly with the latest.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 186; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 13–14; calculation C14
- Low: The use of the USD 741.0 million net proceeds is not disclosed beyond an expectation to prioritize long-term debt reduction, and the amount may change with final adjustments. The pro forma net debt is a mechanical adjustment to the September balance and excludes other cash movements since then, including the restructuring costs expected from the November plan.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 11, 65; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, pages 2–3; calculation C08
- Low: The balance sheet at 2023-12-31 is not in the filings, so debt, cash and leverage for FY2023 are not supplied; the 2025-09-30 balance sheet is also not supplied, so nine-month 2025 balance-sheet figures are absent.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107–108
- Low: Interest expense for the fourth quarter and full year of 2025 on a continuing basis is not printed, and cash interest paid is a consolidated or total-company figure whose TheFork component is not stated; the last-twelve-months cash interest of USD 59.2 million therefore mixes a rounded annual figure with one-decimal interim figures.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 107, 110; 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 7; calculation C06
- Low: The rank of the revolver against the Term Loan B and any guarantor scope beyond the security granted by the Subsidiary Loan Parties are not stated, so the revolver is left out of the debt stack and floors on both facilities are not established.
Basis: 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 161–162
- Low: Source dashes remain missing and are not read as zero: the nine-month 2025 goodwill impairment cells, several financing, investing and Term Loan B proceeds cells in periods with no such transaction, and the nine-month 2026 repurchase cells. Discontinued-operations rows, held-for-sale balance-sheet rows, continuing cash-flow rows and the credit-loss provision are not applicable to every column and are marked as such. The net cash totals reconcile, so the dashes do not affect the identities.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, pages 2, 6; 10-K_2025-12-31_trip-20251231.htm.jsonl, pages 109–110
- Low: Operating cash flow for nine months 2025 is 337.5 in the quarterly report and 337.7 as the sum of the release quarters, a rounding difference of 0.2 that carries into the last-twelve-months cash flow; the quarterly report figure is used.
Basis: 10-Q_2026-09-30_trip-20260930.htm.jsonl, page 6; EX-99.1_2026-11-05_trip-ex99_1.htm.jsonl, page 14; calculation C06

## Next module
The orchestrator selects the next module.
