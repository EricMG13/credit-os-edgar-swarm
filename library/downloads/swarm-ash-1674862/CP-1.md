---
issuer_id: ash-1674862
module_id: CP-1
analysis_date: 2026-11-18
---

## Request

Financial foundation for Ashland Inc. (issuer ash-1674862), as of 2026-11-18, on the credit snapshot pathway. The scope is the statements, debt, liquidity, reported and adjusted EBITDA and credit ratios from the five supplied SEC filings, with the latest balance sheet at 2026-06-30.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ash_ash-20240930.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2024 | 2024-11-18 (signature date) | 5e1a481df3781af713f3addf5fd5e6269c46f3eb3a280ab14d7ee80c28e89486 | Cross-check of fiscal 2024 and 2023 figures against the later annual report; cash interest paid, liquidity and covenant ratios at 2024-09-30 |
| 10-K_2025-09-30_ash_ash-20250930.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2025 | 2025-11-20 (signature date) | f09d68592cee7e4e673c412620f066ba42ce0020f4ee741d27326171c43cea46 | Fiscal 2023 to 2025 statements, 2024-09-30 and 2025-09-30 balance sheets, EBITDA reconciliation, debt note, liquidity, free cash flow, segment sales |
| 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended December 31, 2025 | 2026-02-03 (signature date) | f44789fe9df3664ff7eac7dd2aaaa0efa3fa8c1f3866f899fe702f62f0f97767 | 2025-12-31 balance sheet, liquidity, covenant ratios, Q1 2026 Adjusted EBITDA |
| 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 (signature date) | dfa86a0d9d2b31e4a724248c6c13b720be49a0f08f548f4898c2688739bf408f | 2026-03-31 balance sheet, liquidity, covenant ratios, six-month Adjusted EBITDA |
| 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 (signature date) | e052d086570fcb1d4d12840a47830a340abd5b0829f75dd023eceada69cdf858 | Latest statements, debt note and 2026 credit agreement terms, liquidity, covenants, EBITDA reconciliation, free cash flow, segments, reserves, subsequent-event scan |

Upstream module output used:

| Module | Document | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 Source readiness | Source readiness for Ashland Inc. as of 2026-11-18 | b35b1cb2dfcb5d07185e58ffa9ef24a94bb0e6a1959c0ff39c50a50a33f59baf | Source inventory, periods, document dates and the list of missing documents; no figures taken from it |

## Findings

### Bottom line

Ashland's leverage is moderate at 2.43x trailing adjusted EBITDA, with USD 934 million of net debt and USD 936 million of liquidity, but earnings are eroding, so creditor protection rests on liquidity and a cash build that is partly one-off.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; calculation C-19; calculation C-05; calculation C-51

Trailing adjusted EBITDA of USD 384 million is below USD 459 million in fiscal 2024, and reported EBITDA is not a usable leverage base for fiscal 2025 because of a USD 706 million goodwill impairment. The USD 440 million cash balance includes a USD 103 million tax refund, and the next large maturity is USD 571 million of euro notes in fiscal 2028. The issuer reports covenant leverage of 2.3x against a limit of 4.0x and coverage of 6.9x against a minimum of 3.0x.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 64–65; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67; calculation C-40; calculation C-57; calculation C-69

### Credit analysis by dimension

#### Leverage and earnings

Leverage has fallen in 2026 because cash rose, not because earnings recovered. Net debt of USD 934 million at 2026-06-30 is USD 235 million lower than USD 1,169 million at 2025-09-30, as cash grew by USD 225 million and carrying debt fell by USD 10 million, while trailing adjusted EBITDA slipped to USD 384 million from USD 401 million in fiscal 2025 and USD 459 million in fiscal 2024. Net debt to adjusted EBITDA therefore moved from 2.29x in fiscal 2024 to 2.92x in fiscal 2025 and back to 2.43x, and the covenant ratio the issuer reports follows the same path at 2.3x, 2.8x and 2.3x.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 97; calculation C-05; calculation C-02; calculation C-56; calculation C-10; calculation C-14; calculation C-19

Reported EBITDA is not a usable leverage base for fiscal 2025. It was negative USD 601 million after a USD 706 million goodwill impairment and USD 175 million of Avoca impairment and sale losses, so the reported-basis leverage multiple is not calculable for that year, while it is 9.50x in fiscal 2024 and 4.50x on the last twelve months. The adjusted figure therefore carries the analysis, but its add-backs are not all one-off: environmental reserve adjustments of USD 29 million, plant optimization of USD 28 million and restructuring of USD 18 million have appeared in every fiscal year since 2024 and in 2026, and make up USD 75 million, or 19.53%, of trailing adjusted EBITDA.
Basis: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; calculation C-06; calculation C-16; calculation C-63; calculation C-70

Sales are growing again, but profit is not. Sales rose 7.34% to USD 497 million in Q3 2026 and 1.34% to USD 1,365 million over nine months, yet adjusted EBITDA fell 3.54% in the quarter and 6.03% over nine months, taking the nine-month adjusted margin from 20.94% to 19.41%, so the revenue recovery is not yet reaching earnings.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; calculation C-28; calculation C-27; calculation C-31; calculation C-30; calculation C-64

#### Coverage

Interest cover is comfortable on adjusted earnings and cannot be measured for the latest twelve months. Adjusted EBITDA covered cash interest paid of USD 52 million by 8.83x in fiscal 2024 and cash interest paid of USD 54 million by 7.43x in fiscal 2025, while reported EBITDA covered it 2.73x in fiscal 2024 and was negative 11.13x in fiscal 2025. The quarterly reports print no interest paid, so cover for the twelve months to 2026-06-30 is not calculable; the issuer's covenant coverage of 6.9x at that date, against a 3.0x minimum, is the only recent measure and rests on a covenant EBITDA that differs from reported Adjusted EBITDA.
Basis: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 121; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67; calculation C-11; calculation C-15; calculation C-08; calculation C-12

#### Cash-flow quality

Cash flow in 2026 is stronger than earnings suggest, and part of it will not repeat. Operating cash flow from continuing operations was USD 295 million in the nine months to 2026-06-30 against USD 94 million a year earlier, but USD 103 million of it was a tax refund on the Nutraceuticals capital loss; without the refund, operating cash flow is USD 192 million and free cash flow USD 141 million rather than USD 244 million. Changes in operating assets and liabilities added USD 136 million against a USD 106 million outflow a year earlier, so the inflow is largely working capital and the refund rather than earnings. Free cash flow in fiscal 2025 was only USD 36 million, 8.98% of adjusted EBITDA, because working capital absorbed USD 191 million, so the cash conversion that supports deleveraging has been uneven. Discontinued operations, which carry retained asbestos and environmental liabilities, took a further USD 31 million in nine months and USD 40 million in fiscal 2025.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 64–65; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 90; calculation C-57; calculation C-24

Shareholder returns have been cut back, which helps creditors. Dividends of USD 57 million were paid in the nine months to 2026-06-30 and no shares were repurchased, against USD 157 million of dividends and repurchases in the prior-year nine months; in fiscal 2024, returns of USD 458 million exceeded free cash flow of USD 325 million, USD 133 million more. A USD 520 million repurchase authorization remains available, so buybacks can resume.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 72; calculation C-65; calculation C-58

#### Liquidity and maturities

Liquidity of USD 936 million at 2026-06-30 (cash of USD 440 million plus USD 496 million undrawn on the new USD 500 million revolver, after USD 4 million of letters of credit) covers the USD 668 million of notes due in fiscal 2028 and fiscal 2029 by 1.40x, but the revolver was cut from USD 600 million on 2026-05-28 and is the only committed source after cash. Nothing material falls due before fiscal 2028 (USD 4 million in fiscal 2027); the USD 571 million euro notes are 40.70% of principal, and the USD 450 million notes follow in fiscal 2031. The dollar value of the EUR 500 million notes moved from USD 586 million to USD 571 million, an implied rate of 1.142 dollars per euro against 1.172, so debt carrying values and the euro-dollar rate move together.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 150; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66; calculation C-51; calculation C-53; calculation C-54; calculation C-55

Restricted investments of USD 332 million are held for asbestos and environmental payments and are excluded from both liquidity and net debt. The two receivable sale programs had USD 177 million of sales outstanding at 2026-06-30 against USD 162 million at 2025-09-30; that is funding which would need to be replaced if the programs ended, and the U.S. program was scheduled to terminate on 2026-09-11 with no later update in the filings read.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 16; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 151; calculation C-61

#### Non-debt claims and funding float

The retained asbestos and environmental liabilities are large and only partly pre-funded. Asbestos reserves of USD 445 million are matched by insurance receivables of USD 156 million and an asbestos trust of USD 220 million, leaving USD 69 million; environmental reserves of USD 231 million are matched by an environmental trust of USD 112 million, leaving USD 119 million. The reserves are non-inflated, non-discounted estimates from a model of about 35 years that was raised by USD 31 million for Ashland and USD 17 million for Hercules in fiscal 2026, so they can move against creditors. Employee benefit obligations of USD 88 million and operating lease liabilities of USD 102 million are small beside debt and are not included in total debt.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 21–22; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 23; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 25; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2; calculation C-59; calculation C-60; calculation C-62

#### Data quality and definitions

Several definitions differ and are kept apart. Total debt is carrying value of USD 1,374 million, which is USD 29 million below principal of USD 1,403 million because of discounts and issuance costs; operating cash flow used in the cash identity includes discontinued operations (USD 264 million for nine months) while the issuer's own figure is USD 295 million from continuing operations; and covenant EBITDA is a different measure from the issuer's Adjusted EBITDA, so the issuer's covenant net leverage of 2.3x and the 2.43x derived here are not the same measure. Segment EBITDA in the segment note totals USD 90 million for Q3 2026 against consolidated EBITDA of USD 69 million because it excludes discontinued operations and the pension income line.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 32–33; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67; calculation C-67; calculation C-68

#### Subsequent events

No event after 2026-06-30 is stated in the latest quarterly report, so no pro forma adjustment is made to net debt. The 2026 credit agreement of 2026-05-28 falls inside the quarter and is already in the June figures.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 73

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2022-10-01 | 2023-09-30 |
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| Q1 2026 | 2025-10-01 | 2025-12-31 |
| Q2 2026 | 2026-01-01 | 2026-03-31 |
| Q3 2026 | 2026-04-01 | 2026-06-30 |
| Q3 2025 | 2025-04-01 | 2025-06-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ash_ash-20240930.htm.jsonl | Annual report, Form 10-K | FY2024, FY2023, FY2022 (income, cash flow); 2024-09-30 and 2023-09-30 (balance sheet) | USD | millions | Ashland Inc. and consolidated subsidiaries | US GAAP | Tier 1 (audited annual statements) | Cross-check of fiscal 2024 and 2023; interest paid; liquidity and covenant ratios at 2024-09-30 | Superseded by the later annual report for fiscal 2024 comparatives; the two agree on every figure compared |
| 10-K_2025-09-30_ash_ash-20250930.htm.jsonl | Annual report, Form 10-K | FY2025, FY2024, FY2023 (income, cash flow); 2025-09-30 and 2024-09-30 (balance sheet) | USD | millions | Ashland Inc. and consolidated subsidiaries | US GAAP | Tier 1 (audited annual statements) | Annual statements, EBITDA reconciliation, debt note, liquidity, free cash flow | Part III is incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | Quarterly report, Form 10-Q | Three months to 2025-12-31 with prior-year comparatives; balance sheet 2025-12-31 | USD | millions | Ashland Inc. and consolidated subsidiaries | US GAAP (interim) | Tier 2b (unaudited; no auditor review stated) | 2025-12-31 balance sheet, liquidity, covenant ratios, Q1 Adjusted EBITDA | Prints no interest paid |
| 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | Quarterly report, Form 10-Q | Three and six months to 2026-03-31 with prior-year comparatives; balance sheet 2026-03-31 | USD | millions | Ashland Inc. and consolidated subsidiaries | US GAAP (interim) | Tier 2b (unaudited; no auditor review stated) | 2026-03-31 balance sheet, liquidity, covenant ratios, six-month Adjusted EBITDA | Prints no interest paid |
| 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Quarterly report, Form 10-Q | Three and nine months to 2026-06-30 with prior-year comparatives; balance sheet 2026-06-30 | USD | millions | Ashland Inc. and consolidated subsidiaries | US GAAP (interim) | Tier 2b (unaudited; no auditor review stated) | Latest statements, debt, liquidity, covenants, reconciliations, reserves | Prints no interest paid; no subsequent-events note |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ashland Inc. | Registrant and issuer of the financial statements; borrower under the 2026 Credit Agreement; the debt note does not name the issuer or guarantors of each note | September 30 | USD | millions | Ashland Inc. and consolidated subsidiaries, continuing operations with discontinued operations shown separately | US GAAP | FY2023 to FY2025; Q1, Q2, Q3 and nine months of 2026 with 2025 comparatives |
| Ashland Industries Europe GmbH | Swiss Borrower under the 2026 Credit Agreement; its obligations are guaranteed by Ashland Inc. | September 30 | USD (the filing reports in USD; its own functional currency is not stated) | millions | Consolidated within Ashland Inc.; no separate statements | US GAAP | Not supplied: no separate statements |
| Ashland Services B.V. | Party to the 2020 indenture for the euro notes per the exhibit list; issuer or guarantor role is not stated in the sources read | September 30 | USD (the filing reports in USD) | millions | Consolidated within Ashland Inc.; no separate statements | US GAAP | Not supplied: no separate statements |

No subsequent event is stated after the balance-sheet date of 2026-06-30 in the latest quarterly report; the Moody's and S&P rating actions are described only by quarter and are covered in the gap lines.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Total Liabilities derived as total current liabilities plus total noncurrent liabilities | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123 | Subtotal built from stated lines | Not printed | 2,777; 2,707; 2,641; 2,633; 2,708 | The filing prints no total liabilities line and the balance-sheet identity needs one | FY2024; FY2025; Q1 2026; Q2 2026; Q3 2026 |
| Net Cash from Operating Activities includes the operating cash flows of discontinued operations | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125 | Classification so that the cash identity holds | 294; 462; 134; 94; 295 (continuing operations only) | 243; 411; 94; 67; 264 | The printed net change in cash includes cash used by discontinued operations, which are operating cash flows; the issuer's own operating cash flow line is kept as a separate row | FY2023; FY2024; FY2025; 9M 2025; 9M 2026 |
| Net Cash from Investing Activities for 9M 2025 read as zero | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 | Calculated from printed lines | A dash | 0 | The filing prints a dash for the total; the printed investing lines sum to zero, and the cash identity requires zero | 9M 2025 |
| No currency conversion | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 | None | USD 571 million printed for the EUR 500 million notes | USD 571 million | Every statement figure is already in USD millions; the euro notes are carried in USD as printed and no rate is applied by this module | All periods |
| Last-twelve-month and fourth-quarter figures built from stated components | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 | Derived period | Not printed | See T4.8 Constructed period register | A last-twelve-months figure is the latest full year plus the current stub less the prior-year stub; a fourth quarter is the full year less nine months | LTM 2026-06-30; Q4 FY2025 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sales | 2,191 | 2,113 | 1,824 | 1,347 | 1,365 | 463 | 497 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Cost of sales | 1,523 | 1,495 | 1,275 | 957 | 943 | 331 | 327 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Gross profit | 668 | 618 | 549 | 390 | 422 | 132 | 170 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Selling, general and administrative expense | 365 | 404 | 344 | 268 | 264 | 106 | 99 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Research and development expense | 51 | 55 | 54 | 41 | 41 | 13 | 15 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Intangibles amortization expense | 93 | 76 | 63 | 47 | 46 | 15 | 15 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Equity and other income | 7 | 6 | 4 | 1 | 2 | Not supplied: the filing prints a dash | 1 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Goodwill impairment | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 706 | 706 | Not supplied: the filing prints a dash | 706 | Not supplied: the filing prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Income (loss) on acquisitions and divestitures, net | 6 | -115 | -161 | -165 | 3 | Not supplied: the filing prints a dash | 1 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Operating income (loss) | 172 | -26 | -775 | -836 | 76 | -708 | 43 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Net interest and other expense (income) | 6 | -24 | 33 | 34 | 19 | -5 | -8 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Other net periodic benefit loss (income) | 6 | 22 | 1 | 4 | -3 | 1 | -5 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Income (loss) from continuing operations before income taxes | 160 | -24 | -809 | -874 | 60 | -704 | 56 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Income tax expense (benefit) | -8 | -223 | 13 | -19 | 18 | 15 | 15 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Income (loss) from continuing operations | 168 | 199 | -822 | -855 | 42 | -719 | 41 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Income (loss) from discontinued operations, net of income taxes | 10 | -30 | -23 | -22 | -22 | -23 | -25 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Net income (loss) | 178 | 169 | -845 | -877 | 20 | -742 | 16 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–2 |
| Depreciation and amortization in the EBITDA reconciliation | 243 | 220 | 198 | 149 | 136 | 49 | 46 | USD millions | Reported; excludes accelerated depreciation shown as a key item | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| EBITDA (Reported) | 419 | 142 | -601 | -713 | 193 | -683 | 69 | USD millions | Reported: the issuer's unadjusted EBITDA, net income plus income tax, net interest and other, and depreciation and amortization; it includes discontinued operations and the 706 goodwill impairment | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| EBITDA (Adjusted) | 459 | 459 | 401 | 282 | 265 | 113 | 109 | USD millions | Reported: the issuer's Adjusted EBITDA, EBITDA plus the loss from discontinued operations plus key items; add-backs are in the Chart data: EBITDA bridge table | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| Sales - Life Sciences | 869 | 810 | 641 | 468 | 491 | 162 | 180 | USD millions | Reported segment schedule | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 180; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 |
| Sales - Personal Care | 598 | 634 | 577 | 426 | 428 | 147 | 155 | USD millions | Reported segment schedule | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 180; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 |
| Sales - Specialty Additives | 600 | 572 | 511 | 380 | 372 | 131 | 136 | USD millions | Reported segment schedule | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 180; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 |
| Sales - Intermediates | 185 | 144 | 137 | 104 | 103 | 33 | 37 | USD millions | Reported segment schedule | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 180; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 |
| Sales - Corporate and eliminations | -61 | -47 | -42 | -31 | -29 | -10 | -11 | USD millions | Reported intersegment sales eliminations; Unallocated and other has no sales; not an operating unit | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 180; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 178 | 169 | -845 | -877 | 20 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Loss (income) from discontinued operations, net of income taxes | -10 | 30 | 23 | 22 | 22 | USD millions | Reported add-back | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Depreciation and amortization | 243 | 274 | 237 | 187 | 141 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Original issue discount and debt issuance cost amortization | 6 | 6 | 7 | 5 | 6 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Deferred income taxes | -32 | -302 | 73 | 5 | 4 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Stock based compensation expense | 22 | 15 | 14 | 11 | 13 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Income from restricted investments | -43 | -74 | -33 | -15 | -28 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Loss (income) on acquisitions and divestitures, net | -7 | 107 | 177 | 176 | Not supplied: the filing prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Goodwill impairment | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 706 | 706 | Not supplied: the filing prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Pension contributions | -8 | -15 | -12 | -9 | -10 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Change in operating assets and liabilities | -58 | 227 | -191 | -106 | 136 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Total cash flows provided by operating activities from continuing operations | 294 | 462 | 134 | 94 | 295 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Additions to property, plant and equipment | -170 | -137 | -98 | -64 | -51 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Total cash flows used by investing activities from continuing operations | -109 | -51 | -3 | Not supplied: the filing prints a dash | 22 | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Repurchase of common stock | -300 | -380 | -100 | -100 | Not supplied: the filing prints a dash | USD millions | Reported; a dash is a missing value, not zero | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Cash dividends paid | -76 | -78 | -76 | -57 | -57 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Total cash flows used by financing activities from continuing operations | -371 | -479 | -179 | -161 | -60 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Cash used by discontinued operations: operating cash flows | -51 | -51 | -40 | -27 | -31 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Free Cash Flow (issuer: operating cash flow from continuing operations less additions to property, plant and equipment) | 124 | 325 | 36 | 30 | 244 | USD millions | Reported by the issuer as a non-GAAP measure | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 90; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 64 |
| Ongoing Free Cash Flow (issuer) | 217 | 270 | 127 | 75 | 159 | USD millions | Reported by the issuer as a non-GAAP measure; 9M 2026 deducts a 103 tax refund | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 90; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 64 |
| Net Cash from Operating Activities | 243 | 411 | 94 | 67 | 264 | USD millions | Calculated: operating cash flows from continuing operations plus the operating cash flows of discontinued operations, so that the three activity totals reconcile to the printed net change in cash | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Net Cash from Investing Activities | -109 | -51 | -3 | 0 | 22 | USD millions | Reported for FY2023 to FY2025 and 9M 2026; 9M 2025 is Calculated: the printed investing lines sum to zero where the filing prints a dash | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Net Cash from Financing Activities | -371 | -479 | -179 | -161 | -60 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| FX Effect on Cash | 8 | 2 | 3 | 1 | -1 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Net Cash Change | -229 | -117 | -85 | -93 | 225 | USD millions | Reported: increase (decrease) in cash and cash equivalents | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Opening Cash | 646 | 417 | 300 | 300 | 215 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Closing Cash | 417 | 300 | 215 | 207 | 440 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 124–125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| Cash Interest Paid | 53 | 52 | 54 | Not supplied: the quarterly report prints no interest paid | Not supplied: the quarterly report prints no interest paid | USD millions | Reported annual supplemental disclosure; paid in cash, not the income statement expense | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 121 |
| Income taxes paid (including discontinued operations) | 63 | 53 | 33 | Not supplied: the quarterly report prints no income taxes paid | Not supplied: the quarterly report prints no income taxes paid | USD millions | Reported annual supplemental disclosure | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 300 | 215 | 304 | 343 | 440 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 243 | 242 | 190 | 244 | 256 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Inventories | 545 | 568 | 565 | 506 | 490 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Other current assets | 107 | 180 | 95 | 116 | 106 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total current assets | 1,195 | 1,205 | 1,154 | 1,209 | 1,292 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Net property, plant and equipment | 1,303 | 1,201 | 1,181 | 1,163 | 1,149 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Goodwill | 1,381 | 705 | 707 | 700 | 700 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Intangibles, net | 751 | 563 | 548 | 529 | 513 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Operating lease assets, net | 114 | 103 | 100 | 101 | 100 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Restricted investments | 295 | 297 | 297 | 276 | 285 | USD millions | Reported; held to pay asbestos and environmental claims | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Asbestos insurance receivable, net | 132 | 127 | 124 | 122 | 139 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Deferred income taxes (asset) | 210 | 157 | 157 | 157 | 157 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Other noncurrent assets | 264 | 253 | 251 | 242 | 243 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total noncurrent assets | 4,450 | 3,406 | 3,365 | 3,290 | 3,286 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total Assets | 5,645 | 4,611 | 4,519 | 4,499 | 4,578 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Trade and other payables | 214 | 189 | 167 | 181 | 198 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Accrued expenses and other liabilities | 256 | 213 | 180 | 195 | 208 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Current operating lease obligations | 20 | 21 | 19 | 19 | 18 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total current liabilities | 490 | 423 | 366 | 395 | 424 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Long-term debt | 1,349 | 1,384 | 1,387 | 1,374 | 1,374 | USD millions | Reported; carrying value net of debt issuance costs; no current portion | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Asbestos litigation reserves | 414 | 389 | 372 | 362 | 399 | USD millions | Reported noncurrent portion | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Deferred income taxes (liability) | 29 | 31 | 31 | 31 | 31 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Employee benefit obligations | 110 | 96 | 99 | 96 | 88 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Operating lease obligations | 99 | 85 | 83 | 85 | 84 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Other liabilities | 286 | 299 | 303 | 290 | 308 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total noncurrent liabilities | 2,287 | 2,284 | 2,275 | 2,238 | 2,284 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total Liabilities | 2,777 | 2,707 | 2,641 | 2,633 | 2,708 | USD millions | Calculated: total current liabilities plus total noncurrent liabilities; the filing prints no total liabilities line | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total Equity | 2,868 | 1,904 | 1,878 | 1,866 | 1,870 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Total Debt | 1,349 | 1,384 | 1,387 | 1,374 | 1,374 | USD millions | Reported: balance-sheet carrying value of all debt, current plus long-term, net of issuance costs and discounts; operating lease liabilities are separate lines and are not included | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 300 | 215 | 304 | 343 | 440 | USD millions | Reported | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.375% Senior Notes, due 2031 | Notes (titled senior notes) | 450 | 450 | Not applicable | Not applicable | Not supplied: the debt note states no security | Not supplied: the debt note states no ranking beyond the title | USD | 450 | Not applicable | 3.375% | not stated | Not applicable | Not applicable | Not applicable | 2031 (fiscal 2031 ladder) | 0 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| 2.00% Senior Notes, due 2028 | Notes (titled senior notes), EUR 500 million | Not supplied: the carrying value is printed in USD only | EUR 500 | Not applicable | Not applicable | Not supplied: the debt note states no security | Not supplied: the debt note states no ranking beyond the title | EUR | 571 | Not applicable: the issuer prints the USD amount (implied 1.142 dollars per euro) | 2.00% | not stated | Not applicable | Not applicable | Not applicable | 2028 (fiscal 2028 ladder) | 0 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| 6.875% Notes, due 2043 | Notes | 282 | Not supplied: not printed; the ladder ends at 2031 and debt beyond it is 281 by difference | Not applicable | Not applicable | Not supplied: the debt note states no security | Not supplied: the debt note states no ranking | USD | 282 | Not applicable | 6.875% | not stated | Not applicable | Not applicable | Not applicable | 2043 | Not supplied: no amortisation schedule is stated | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 |
| 6.50% Junior Subordinated Notes, due 2029 | Notes (titled junior subordinated) | 76 | 97 (the fiscal 2029 ladder amount; the only instrument due in 2029) | Not applicable | Not applicable | Not supplied: the debt note states no security | Not supplied: the debt note states no ranking beyond the title | USD | 76 | Not applicable | 6.50% | not stated | Not applicable | Not applicable | Not applicable | 2029 (fiscal 2029 ladder) | 0 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| Other (issuer line; includes 9 of debt issuance costs) | Other | -5 | 4 (the fiscal 2027 ladder amount) | Not applicable | Not applicable | Not supplied: not stated | Not supplied: not stated | USD | -5 | Not applicable | Not supplied: not stated | not stated | Not applicable | Not applicable | Not applicable | 2027 (fiscal 2027 ladder) | Not supplied: not stated | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 |
| 2026 Credit Agreement revolving facility (Ashland Inc. and the Swiss Borrower) | Revolving credit facility, five-year, with a USD 125 million letter of credit sublimit | 0 | Not applicable | 0 (500 less 4 of letters of credit less 496 of capacity) | 500 | Unsecured (the revolving facility is stated to be unsecured); obligations of the Swiss Borrower are guaranteed by Ashland Inc. | Not supplied: the filing states no ranking | USD (euro loans permitted) | 0 | Not applicable | Term SOFR or EURIBOR plus 1.375% initially, then 1.250% to 1.750% by leverage; alternate base rate plus 0.375%, then 0.250% to 0.750% | floating | Term SOFR, EURIBOR or an alternate base rate | 137.5 initially; 125 to 175 on the leverage grid | Not supplied: no floor is stated | Not supplied: five years from 2026-05-28; the date is not stated | Not applicable | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 |

The Reporting Currency Amount cells reconcile to Total Debt: 450 plus 571 plus 282 plus 76 less 5 is 1,374.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sales | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 1,824m | USD 1,365m | USD 1,347m | USD 1,842m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Stubs are comparable nine-month periods |
| EBITDA (Reported) | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD -601m | USD 193m | USD -713m | USD 305m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | The fiscal 2025 and 9M 2025 components include the goodwill impairment, which cancels in the last twelve months |
| EBITDA (Adjusted) | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 401m | USD 265m | USD 282m | USD 384m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Issuer-defined Adjusted EBITDA |
| Net income (loss) | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD -845m | USD 20m | USD -877m | USD 52m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Includes discontinued operations |
| Gross profit | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 549m | USD 422m | USD 390m | USD 581m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Stubs are comparable nine-month periods |
| Operating cash flow, continuing operations | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 134m | USD 295m | USD 94m | USD 335m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | 9M 2026 includes a USD 103m tax refund |
| Additions to property, plant and equipment | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 98m | USD 51m | USD 64m | USD 85m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Capital expenditure shown as a positive outflow |
| Free Cash Flow (issuer) | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 36m | USD 244m | USD 30m | USD 250m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Equals LTM operating cash flow less LTM capital expenditure |
| Cash Interest Paid | LTM to 2026-06-30 (FY2025 + 9M 2026 - 9M 2025) | USD 54m | Not supplied: the quarterly report prints no interest paid | Not supplied: the quarterly report prints no interest paid | Not calculable: a stub is missing | Not Calculable | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Interest cover for the last twelve months is therefore not calculable |
| EBITDA (Adjusted) | LTM to 2025-12-31 (FY2025 + Q1 2026 - Q1 2025) | USD 401m | USD 58m | USD 61m | USD 398m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | Current stub is Q1 2026 and the prior-year stub is Q1 2025, issuer key-results table |
| EBITDA (Adjusted) | LTM to 2026-03-31 (FY2025 + H1 2026 - H1 2025) | USD 401m | USD 156m | USD 169m | USD 388m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | Current stub is H1 2026 and the prior-year stub is H1 2025, issuer key-results table |
| Sales | Q4 FY2025 (FY2025 - 9M 2025) | USD 1,824m | USD 1,347m | Not applicable | USD 477m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | No discrete fourth quarter is reported; calculated and labelled |
| EBITDA (Reported) | Q4 FY2025 (FY2025 - 9M 2025) | USD -601m | USD -713m | Not applicable | USD 112m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | No discrete fourth quarter is reported; calculated and labelled |
| EBITDA (Adjusted) | Q4 FY2025 (FY2025 - 9M 2025) | USD 401m | USD 282m | Not applicable | USD 119m | Calculated | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | No discrete fourth quarter is reported; calculated and labelled |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,349 | Net debt data Gross debt, FY2024 / 2024-09-30 | 142 | T4.4 Income statement EBITDA (Reported) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 9.50 | Calculated | Tier 1 | Reported EBITDA includes impairments and discontinued operations; read beside the adjusted rows |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,049 | Net debt data Net debt, FY2024 / 2024-09-30 | 142 | T4.4 Income statement EBITDA (Reported) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 7.39 | Calculated | Tier 1 | Reported EBITDA includes impairments and discontinued operations; read beside the adjusted rows |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 142 | T4.4 Income statement EBITDA (Reported) FY2024 | 52 | T4.5 Cash flow statement Cash Interest Paid FY2024 | FY2024 / 2024-09-30 | USD | US$m | 2.73 | Calculated | Tier 1 | Cash interest paid is an annual disclosure; it differs from the interest expense in the income statement |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,349 | Net debt data Gross debt, FY2024 / 2024-09-30 | 459 | T4.4 Income statement EBITDA (Adjusted) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 2.94 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,049 | Net debt data Net debt, FY2024 / 2024-09-30 | 459 | T4.4 Income statement EBITDA (Adjusted) FY2024 | FY2024 / 2024-09-30 | USD | US$m | 2.29 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 459 | T4.4 Income statement EBITDA (Adjusted) FY2024 | 52 | T4.5 Cash flow statement Cash Interest Paid FY2024 | FY2024 / 2024-09-30 | USD | US$m | 8.83 | Calculated | Tier 1 | Cash interest paid is an annual disclosure; it differs from the interest expense in the income statement |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,384 | Net debt data Gross debt, FY2025 / 2025-09-30 | -601 | T4.4 Income statement EBITDA (Reported) FY2025 | FY2025 / 2025-09-30 | USD | US$m | Not calculable: EBITDA (Reported) is negative at USD -601 million, so a multiple has no meaning | Not Calculable | Tier 1 | Fiscal 2025 reported EBITDA is negative after the goodwill impairment and the Avoca loss; use the adjusted rows |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,169 | Net debt data Net debt, FY2025 / 2025-09-30 | -601 | T4.4 Income statement EBITDA (Reported) FY2025 | FY2025 / 2025-09-30 | USD | US$m | Not calculable: EBITDA (Reported) is negative at USD -601 million, so a multiple has no meaning | Not Calculable | Tier 1 | Fiscal 2025 reported EBITDA is negative after the goodwill impairment and the Avoca loss; use the adjusted rows |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | -601 | T4.4 Income statement EBITDA (Reported) FY2025 | 54 | T4.5 Cash flow statement Cash Interest Paid FY2025 | FY2025 / 2025-09-30 | USD | US$m | -11.13 | Calculated | Tier 1 | Cash interest paid is an annual disclosure; it differs from the interest expense in the income statement |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,384 | Net debt data Gross debt, FY2025 / 2025-09-30 | 401 | T4.4 Income statement EBITDA (Adjusted) FY2025 | FY2025 / 2025-09-30 | USD | US$m | 3.45 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,169 | Net debt data Net debt, FY2025 / 2025-09-30 | 401 | T4.4 Income statement EBITDA (Adjusted) FY2025 | FY2025 / 2025-09-30 | USD | US$m | 2.92 | Calculated | Tier 1 | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 401 | T4.4 Income statement EBITDA (Adjusted) FY2025 | 54 | T4.5 Cash flow statement Cash Interest Paid FY2025 | FY2025 / 2025-09-30 | USD | US$m | 7.43 | Calculated | Tier 1 | Cash interest paid is an annual disclosure; it differs from the interest expense in the income statement |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,374 | Net debt data Gross debt, LTM to 2026-06-30 | 305 | T4.8 Constructed period register LTM EBITDA (Reported) | 2026-06-30 | USD | US$m | 4.50 | Calculated | Tier 2b | Reported EBITDA includes impairments and discontinued operations; read beside the adjusted rows; EBITDA is the twelve months to 2026-06-30 built in T4.8 |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 934 | Net debt data Net debt, LTM to 2026-06-30 | 305 | T4.8 Constructed period register LTM EBITDA (Reported) | 2026-06-30 | USD | US$m | 3.06 | Calculated | Tier 2b | Reported EBITDA includes impairments and discontinued operations; read beside the adjusted rows; EBITDA is the twelve months to 2026-06-30 built in T4.8 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 305 | T4.8 Constructed period register LTM EBITDA (Reported) | Not supplied: the quarterly reports print no interest paid | Not supplied: the quarterly reports print no interest paid | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not printed for the twelve months to 2026-06-30 | Not Calculable | Tier 2b | Interim reports print no interest paid; the covenant coverage ratio the issuer reports is a different measure |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,374 | Net debt data Gross debt, LTM to 2026-06-30 | 384 | T4.8 Constructed period register LTM EBITDA (Adjusted) | 2026-06-30 | USD | US$m | 3.58 | Calculated | Tier 2b | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs; EBITDA is the twelve months to 2026-06-30 built in T4.8 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 934 | Net debt data Net debt, LTM to 2026-06-30 | 384 | T4.8 Constructed period register LTM EBITDA (Adjusted) | 2026-06-30 | USD | US$m | 2.43 | Calculated | Tier 2b | Issuer-defined Adjusted EBITDA adds back recurring items such as environmental reserve adjustments, plant optimization and restructuring costs; EBITDA is the twelve months to 2026-06-30 built in T4.8 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 384 | T4.8 Constructed period register LTM EBITDA (Adjusted) | Not supplied: the quarterly reports print no interest paid | Not supplied: the quarterly reports print no interest paid | 2026-06-30 | USD | US$m | Not calculable: cash interest paid is not printed for the twelve months to 2026-06-30 | Not Calculable | Tier 2b | Interim reports print no interest paid; the covenant coverage ratio the issuer reports is a different measure |
| Adjusted EBITDA margin | Adjusted EBITDA / Sales x 100 | 459 | T4.4 EBITDA (Adjusted) FY2024 | 2,113 | T4.4 Sales FY2024 | FY2024 | USD | US$m | 21.72 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Adjusted EBITDA margin | Adjusted EBITDA / Sales x 100 | 401 | T4.4 EBITDA (Adjusted) FY2025 | 1,824 | T4.4 Sales FY2025 | FY2025 | USD | US$m | 21.98 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Adjusted EBITDA margin | Adjusted EBITDA / Sales x 100 | 384 | T4.8 EBITDA (Adjusted) LTM to 2026-06-30 | 1,842 | T4.8 Sales LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 20.85 | Calculated | Tier 2b | Twelve months to 2026-06-30 built in T4.8; ratio shown as a percentage |
| Free cash flow / Adjusted EBITDA | Issuer Free Cash Flow / Adjusted EBITDA x 100 | 325 | T4.5 Free Cash Flow (issuer) FY2024 | 459 | T4.4 EBITDA (Adjusted) FY2024 | FY2024 | USD | US$m | 70.81 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Free cash flow / Adjusted EBITDA | Issuer Free Cash Flow / Adjusted EBITDA x 100 | 36 | T4.5 Free Cash Flow (issuer) FY2025 | 401 | T4.4 EBITDA (Adjusted) FY2025 | FY2025 | USD | US$m | 8.98 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Free cash flow / Adjusted EBITDA | Issuer Free Cash Flow / Adjusted EBITDA x 100 | 250 | T4.8 Free Cash Flow (issuer) LTM to 2026-06-30 | 384 | T4.8 EBITDA (Adjusted) LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 65.10 | Calculated | Tier 2b | Twelve months to 2026-06-30; includes a USD 103 million tax refund received in 9M 2026 |
| Sales growth | Sales / prior-period Sales - 1 | 1,824 | T4.4 Sales FY2025 | 2,113 | T4.4 Sales FY2024 | FY2025 | USD | US$m | -13.68 | Calculated | Tier 1 | Fiscal 2025 against fiscal 2024; both years include divested businesses to different dates |
| Sales growth | Sales / prior-period Sales - 1 | 1,365 | T4.4 Sales 9M 2026 | 1,347 | T4.4 Sales 9M 2025 | 9M 2026 | USD | US$m | 1.34 | Calculated | Tier 2b | Nine months to 2026-06-30 against the prior-year nine months |
| Sales growth | Sales / prior-period Sales - 1 | 497 | T4.4 Sales Q3 2026 | 463 | T4.4 Sales Q3 2025 | Q3 2026 | USD | US$m | 7.34 | Calculated | Tier 2b | Quarter ended 2026-06-30 against the prior-year quarter |
| Adjusted EBITDA growth | Adjusted EBITDA / prior-period Adjusted EBITDA - 1 | 401 | T4.4 EBITDA (Adjusted) FY2025 | 459 | T4.4 EBITDA (Adjusted) FY2024 | FY2025 | USD | US$m | -12.64 | Calculated | Tier 1 | Fiscal 2025 against fiscal 2024 |
| Adjusted EBITDA growth | Adjusted EBITDA / prior-period Adjusted EBITDA - 1 | 265 | T4.4 EBITDA (Adjusted) 9M 2026 | 282 | T4.4 EBITDA (Adjusted) 9M 2025 | 9M 2026 | USD | US$m | -6.03 | Calculated | Tier 2b | Nine months to 2026-06-30 against the prior-year nine months |
| Adjusted EBITDA growth | Adjusted EBITDA / prior-period Adjusted EBITDA - 1 | 109 | T4.4 EBITDA (Adjusted) Q3 2026 | 113 | T4.4 EBITDA (Adjusted) Q3 2025 | Q3 2026 | USD | US$m | -3.54 | Calculated | Tier 2b | Quarter ended 2026-06-30 against the prior-year quarter |
| Capex / Sales | Additions to property, plant and equipment / Sales x 100 | 137 | T4.5 Additions to property, plant and equipment FY2024 (shown as a positive outflow) | 2,113 | T4.4 Sales FY2024 | FY2024 | USD | US$m | 6.48 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Capex / Sales | Additions to property, plant and equipment / Sales x 100 | 98 | T4.5 Additions to property, plant and equipment FY2025 (shown as a positive outflow) | 1,824 | T4.4 Sales FY2025 | FY2025 | USD | US$m | 5.37 | Calculated | Tier 1 | Issuer figures; ratio shown as a percentage |
| Capex / Sales | Additions to property, plant and equipment / Sales x 100 | 85 | T4.8 Additions to property, plant and equipment LTM to 2026-06-30 | 1,842 | T4.8 Sales LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 4.61 | Calculated | Tier 2b | Twelve months to 2026-06-30 built in T4.8 |
| Net debt / LTM adjusted EBITDA at quarter end | Net debt / LTM Adjusted EBITDA | 1,083 | Net debt data Net debt, 2025-12-31 | 398 | T4.8 EBITDA (Adjusted) LTM to 2025-12-31 | Q1 2026 | USD | US$m | 2.72 | Calculated | Tier 2b | LTM Adjusted EBITDA at 2025-12-31 is fiscal 2025 plus Q1 2026 less Q1 2025, built in T4.8 |
| Net debt / LTM adjusted EBITDA at quarter end | Net debt / LTM Adjusted EBITDA | 1,031 | Net debt data Net debt, 2026-03-31 | 388 | T4.8 EBITDA (Adjusted) LTM to 2026-03-31 | Q2 2026 | USD | US$m | 2.66 | Calculated | Tier 2b | LTM Adjusted EBITDA at 2026-03-31 is fiscal 2025 plus H1 2026 less H1 2025, built in T4.8 |
| Liquidity / Total Debt | (Cash and cash equivalents + undrawn revolver) / Total Debt | 936 | Chart data: liquidity, Cash plus Undrawn committed facilities, 2026-06-30 | 1,374 | Net debt data Gross debt, 2026-06-30 | 2026-06-30 | USD | US$m | 0.68 | Calculated | Tier 2b | Liquidity excludes restricted investments of USD 332 million |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Geography | Sales outside North America (% of sales) | 69 | 73 | 72 | 73 | Up | Share of sales outside the U.S. and Canada has risen as North American sales fell; Source: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 56; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 35 |
| Product mix | Cellulosics (% of sales) | 37 | 39 | 39 | 40 | Up | Cellulosics is the largest product category; Source: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 178; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 29 |
| Product mix | Polyvinylpyrrolidones (% of sales) | 23 | 25 | 25 | 24 | Flat | The two product categories together are 64% of sales in 9M 2026; Source: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 178; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 29 |
| Covenant (issuer-reported) | Consolidated net leverage ratio, covenant basis (x) | 2.3 | 2.8 | Not supplied: the June 2025 quarterly report is not in the set | 2.3 | Down since FY2025 | Quarter-end values were 2.7 at 2025-12-31 and 2.6 at 2026-03-31; maximum permitted 4.0 under both the 2022 and 2026 credit agreements; Source: 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 95; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 97; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 15; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 15; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67 |
| Covenant (issuer-reported) | Consolidated interest coverage ratio, covenant basis (x) | 7.8 | 6.5 | Not supplied: the June 2025 quarterly report is not in the set | 6.9 | Up since FY2025 | Quarter-end values were 6.5 at 2025-12-31 and 6.5 at 2026-03-31; minimum required 3.0; Source: 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 95; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 97; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 15; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 15; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67 |
| Funding | Revolving credit facility commitment (USD millions) | 600 | 600 | Not supplied: the June 2025 quarterly report is not in the set | 500 | Down | The 2022 facility of USD 600 million was replaced on 2026-05-28 by a USD 500 million facility; Source: 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 150; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| Funding | Receivables sold and outstanding under the two programs (USD millions) | Not supplied: not extracted for 2024-09-30 | 162 | Not supplied: the June 2025 quarterly report is not in the set | 177 | Up | U.S. program 59 and foreign program 103 at 2025-09-30; 68 and 109 at 2026-06-30; Source: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 16 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs and discounts | Debt table in the note is carrying value; the management discussion also states principal | Carrying value 1,374 against principal 1,403 at 2026-06-30 (discounts 20 and issuance costs 9); 1,384 against 1,419 at 2025-09-30 (discounts 25 and issuance costs 10); 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 149 | 2025-09-30; 2026-06-30 | 29 at 2026-06-30; 35 at 2025-09-30 (USD millions) | Financial foundation; Short credit snapshot | Carrying value is used for every ratio; principal is shown beside it in the reconciliation |
| EBITDA | Reported EBITDA is the primary denominator | Issuer EBITDA is net income plus tax, net interest and D&A, and includes discontinued operations; segment EBITDA excludes discontinued operations and the pension line | Consolidated EBITDA of 69 against segment total EBITDA of 90 for Q3 2026; 193 against 217 for 9M 2026; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 32 | Q3 2026; 9M 2026 and earlier periods | 21 for Q3 2026; 24 for 9M 2026 (USD millions) | Financial foundation | Consolidated EBITDA is used; the segment figure is not mixed in |
| Adjusted EBITDA against covenant EBITDA | Adjusted EBITDA as the issuer reconciles it | Covenant Adjusted EBITDA is defined in the credit agreement and differs from Adjusted EBITDA | Issuer net leverage 2.3 against 2.43 derived here at 2026-06-30; 2.8 against 2.92 at 2025-09-30; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67 | All periods | 0.13 turn at 2026-06-30 | Financial foundation; Short credit snapshot | Both are shown and labelled; covenant capacity is not inferred |
| Operating cash flow | Net cash from operating activities that reconciles the three activity totals to the net change in cash | Issuer operating cash flow is from continuing operations only; discontinued operations are shown below the line | 295 from continuing operations against 264 including discontinued operations of 31 for 9M 2026; 134 against 94 for FY2025; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 | FY2023 to 9M 2026 | 31 for 9M 2026; 40 for FY2025 (USD millions) | Financial foundation | The issuer's figure is kept as its own row; the identity row includes discontinued operations |
| Free cash flow | Operating cash flow less capital expenditure | Issuer Free Cash Flow is operating cash flow from continuing operations less additions to property, plant and equipment; Ongoing Free Cash Flow also removes a tax refund, receivable program flows, restructuring and environmental payments | Free Cash Flow 244 against Ongoing Free Cash Flow 159 for 9M 2026; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 64 | 9M 2026; FY2025 | 85 for 9M 2026 (USD millions) | Financial foundation | Free Cash Flow is used; the tax refund is shown separately in the analysis |
| Depreciation and amortization | Cash flow statement D&A | D&A in the EBITDA reconciliation excludes accelerated depreciation shown as a key item | 141 in the cash flow against 136 in the reconciliation for 9M 2026; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 | FY2025; 9M 2025; 9M 2026 | 5 for 9M 2026 (USD millions) | Financial foundation | The reconciliation figure is used for EBITDA |
| Net debt | Gross debt less cash and cash equivalents | Restricted investments of 332 and receivables sold of 177 are not netted or added | Restricted investments are held for asbestos and environmental payments; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 | 2026-06-30 | 332 and 177 (USD millions) | Financial foundation; Short credit snapshot | Net debt follows the method; both items are named in the analysis |
| Avoca divestiture (one event, several figures) | One event, all figures with their roles | Impairment 183, pre-tax gain on sale 8, key item for impairment and sale 175 (183 less 8), and a loss on divestitures of 165 in the income statement for 9M 2025 that also holds an 11 gain on a property sale | Four figures, one event: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 62 | 9M 2025; FY2025 | Within 1 of each other once the roles are applied (183 less 8 less 11 is 164) | Financial foundation | The income statement figure is used in T4.4; the key item is used in the bridge |
| Note title | Coupon of the 2031 senior notes | The debt note states 3.375%; an exhibit description in the annual report states 3.75% senior notes due 2031 | 3.375% in the debt note against 3.75% in the exhibit list; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 149; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 46 | FY2025; FY2024 | Not quantified; the coupon affects interest only | Financial foundation | The debt note is used; the difference is unresolved |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 9.50 | 7.39 | x | Carrying value of debt over issuer EBITDA (Reported); fiscal 2024 EBITDA includes the Nutraceuticals impairment of 107 |
| FY2025 / 2025-09-30 | Not supplied: reported EBITDA is negative, so a multiple has no meaning | Not supplied: reported EBITDA is negative, so a multiple has no meaning | x | EBITDA (Reported) is negative at -601 after the goodwill impairment, so both multiples are not calculable; see the adjusted rows in T4.9 |
| 2026-06-30 | 4.50 | 3.06 | x | EBITDA (Reported) is the twelve months to 2026-06-30 built in T4.8; the adjusted equivalents are 3.58x and 2.43x |

The multiples use reported EBITDA, which carries impairments; fiscal 2025 is not calculable and the adjusted multiples are in the register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 2.73 | x | EBITDA (Reported) over cash interest paid of 52 |
| FY2025 / 2025-09-30 | -11.13 | x | EBITDA (Reported) of -601 over cash interest paid of 54, so the multiple is negative |
| 2026-06-30 | Not supplied: cash interest paid is not printed for the twelve months to 2026-06-30 | x | The quarterly reports print no interest paid, so the twelve-month cover is not calculable |

Cash interest paid is an annual disclosure, so only the fiscal years are measured.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 300 | 596 | US$m | Cash from the balance sheet; undrawn committed facilities are the revolving credit facility capacity after letters of credit (USD 4 million of the USD 600 million facility); the receivable sale programs add no availability |
| FY2025 / 2025-09-30 | 215 | 596 | US$m | Cash from the balance sheet; undrawn committed facilities are the revolving credit facility capacity after letters of credit (USD 4 million of the USD 600 million facility); the receivable sale programs add no availability |
| 2025-12-31 | 304 | 596 | US$m | Cash from the balance sheet; undrawn committed facilities are the revolving credit facility capacity after letters of credit (USD 4 million of the USD 600 million facility); the receivable sale programs add no availability |
| 2026-03-31 | 343 | 596 | US$m | Cash from the balance sheet; undrawn committed facilities are the revolving credit facility capacity after letters of credit (USD 4 million of the USD 600 million facility); the receivable sale programs add no availability |
| 2026-06-30 | 440 | 496 | US$m | Cash from the balance sheet; undrawn committed facilities are the revolving credit facility capacity after letters of credit (USD 4 million at every date shown); the receivable sale programs add no availability |

The undrawn facility fell by USD 100 million at 2026-06-30 because the revolver was replaced by a smaller one.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 0 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the issuer states zero |
| FY2027 | 4 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the instrument is not named in the ladder |
| FY2028 | 571 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the euro notes at the 2026-06-30 dollar value |
| FY2029 | 97 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the 6.50% junior subordinated notes |
| FY2030 | 0 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the issuer states zero |
| FY2031 | 450 | US$m | Fiscal year of maturity as the issuer's ladder states it; principal, not carrying value; the 3.375% senior notes |

The ladder stops at fiscal 2031, so the 6.875% notes due 2043 are not in it and are carried in the reconciling items.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 | 2,191 | 459 | US$m | Annual period; Adjusted EBITDA is the issuer-adjusted measure |
| FY2024 | 2,113 | 459 | US$m | Annual period; Adjusted EBITDA is the issuer-adjusted measure |
| FY2025 | 1,824 | 401 | US$m | Annual period; Adjusted EBITDA is the issuer-adjusted measure; sales fell after the Nutraceuticals and Avoca disposals |

Only annual periods are charted so that durations are not mixed; the last twelve months are in T4.8.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states a legal rank | Not supplied: no source states a legal rank | Not supplied: no source states security for the notes | Not supplied: no legal rank, so no stack | Not supplied: no legal rank, so no stack | US$m | The debt note gives instrument titles, amounts and maturities only; the revolver is stated to be unsecured but no ranking is stated; the indentures and credit agreement are not supplied |

No facility is ranked because no source states a legal rank; the instruments are in T4.18.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2026-06-30 | 305 | US$m | Reported measure: the issuer's unadjusted EBITDA built from fiscal 2025 plus 9M 2026 less 9M 2025 (calculation C-39) |
| Loss (income) from discontinued operations, net of income taxes | 23 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals 23 plus 22 less 22 |
| Environmental reserve adjustments | 29 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals 34 plus 28 less 33 |
| Other plant optimization costs | 28 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals 22 plus 18 less 12 |
| Restructuring, separation and other costs | 18 | US$m | Add-back; classification restructuring; realisation status not stated; LTM equals 22 plus 14 less 18 |
| Accelerated depreciation | 6 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals 41 plus 5 less 40 |
| Goodwill impairment | 0 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals 706 plus 0 less 706 |
| Avoca business impairment and sale | 0 | US$m | Add-back; classification transaction costs; realisation status not stated; LTM equals 175 plus 0 less 175 |
| Nutraceuticals business impairment and sale | 1 | US$m | Add-back; classification transaction costs; realisation status not stated; LTM equals 1 plus 0 less 0 |
| Held for sale depreciation and amortization | 0 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals -2 plus 0 less -2 |
| Income on divestitures, net | -6 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals -14 plus -2 less -10 |
| Tax credit | -11 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals -3 plus -8 less 0 |
| Loss (gain) on pension plan remeasurements | -9 | US$m | Add-back; classification other stated; realisation status not stated; LTM equals -3 plus -5 less 1 |
| Adjusted EBITDA (issuer-defined), LTM to 2026-06-30 | 384 | US$m | Adjusted measure the issuer reports; the steps above add to it exactly (calculation C-70) |

Every line is a last-twelve-months figure built from stated components, and the issuer does not say which add-backs are realised.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-06-30 | Basis |
| --- | --- | --- | --- | --- |
| Sales (US$m) | 2,113 | 1,824 | 1,842 | Reported; LTM calculated in T4.8 |
| Sales growth (%) | -3.56 | -13.68 | Not calculable: the prior twelve-month figure needs nine-month 2024 data that is not in the set | Calculated; fiscal 2024 against fiscal 2023 sales of 2,191 |
| Gross margin (%) | 29.25 | 30.10 | 31.54 | Calculated from reported gross profit |
| EBITDA (Reported) (US$m) | 142 | -601 | 305 | Reported; includes impairments and discontinued operations |
| EBITDA (Adjusted) (US$m) | 459 | 401 | 384 | Reported by the issuer; LTM calculated in T4.8 |
| Adjusted EBITDA margin (%) | 21.72 | 21.98 | 20.85 | Calculated |
| Operating cash flow, continuing (US$m) | 462 | 134 | 335 | Reported; LTM calculated in T4.8 |
| Additions to property, plant and equipment (US$m) | 137 | 98 | 85 | Reported; LTM calculated in T4.8 |
| Free Cash Flow, issuer (US$m) | 325 | 36 | 250 | Reported; LTM calculated in T4.8 |
| Free Cash Flow / Adjusted EBITDA (%) | 70.81 | 8.98 | 65.10 | Calculated |
| Cash and cash equivalents (US$m) | 300 | 215 | 440 | Reported |
| Total Debt, carrying value (US$m) | 1,349 | 1,384 | 1,374 | Reported |
| Net debt (US$m) | 1,049 | 1,169 | 934 | Calculated: total debt less cash |
| Total debt / EBITDA, reported basis (x) | 9.50 | Not calculable: reported EBITDA is negative | 4.50 | Calculated |
| Net debt / EBITDA, reported basis (x) | 7.39 | Not calculable: reported EBITDA is negative | 3.06 | Calculated |
| Total debt / adjusted EBITDA (x) | 2.94 | 3.45 | 3.58 | Calculated |
| Net debt / adjusted EBITDA (x) | 2.29 | 2.92 | 2.43 | Calculated |
| Adjusted EBITDA / cash interest (x) | 8.83 | 7.43 | Not calculable: no interest paid is printed for the twelve months | Calculated |
| Liquidity: cash plus undrawn revolver (US$m) | 896 | 811 | 936 | Reported by the issuer and recomputed |
| Covenant net leverage ratio, issuer basis (x), maximum 4.0 | 2.3 | 2.8 | 2.3 | Reported by the issuer; not recomputed |
| Covenant interest coverage ratio, issuer basis (x), minimum 3.0 | 7.8 | 6.5 | 6.9 | Reported by the issuer; not recomputed |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-09-30 | 1,349 | 300 | 1,049 | US$m | Reported carrying value of debt net of issuance costs and discounts; the quarterly report for this date states no principal total; no lease liabilities or receivable sales are in gross debt; restricted investments are not netted |
| FY2025 / 2025-09-30 | 1,384 | 215 | 1,169 | US$m | Reported carrying value of debt net of issuance costs and discounts; principal is USD 1,419 million, so carrying value is below principal by discounts and issuance costs; no lease liabilities or receivable sales are in gross debt; restricted investments are not netted |
| 2025-12-31 | 1,387 | 304 | 1,083 | US$m | Reported carrying value of debt net of issuance costs and discounts; the quarterly report for this date states no principal total; no lease liabilities or receivable sales are in gross debt; restricted investments are not netted |
| 2026-03-31 | 1,374 | 343 | 1,031 | US$m | Reported carrying value of debt net of issuance costs and discounts; the quarterly report for this date states no principal total; no lease liabilities or receivable sales are in gross debt; restricted investments are not netted |
| 2026-06-30 | 1,374 | 440 | 934 | US$m | Reported carrying value of debt net of issuance costs and discounts; principal is USD 1,403 million, so carrying value is below principal by discounts and issuance costs; no lease liabilities or receivable sales are in gross debt; restricted investments are not netted |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-06-30 | 1,122 | 252 | 1,374 | US$m | Principal is the sum of the six ladder rows; reconciling items are debt beyond the ladder of 281 (the 2043 notes, being total principal of 1,403 less the ladder of 1,122) less discounts of 20 and issuance costs of 9, summed in the calculations; carrying value is Gross debt |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | The latest quarterly report states no event after 2026-06-30 that changes net debt; the sources read were the five filings supplied, and the 2026-05-28 credit agreement is inside the quarter and already reflected |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage on adjusted earnings | Ready with Limitations | Adjusted EBITDA is issuer-defined and its add-backs recur; covenant EBITDA is a different measure | Read the adjusted and reported multiples together; do not infer covenant capacity |
| Leverage on reported earnings | Ready with Limitations | Fiscal 2025 reported EBITDA is negative, so its multiples are not calculable | Use the adjusted rows for fiscal 2025 |
| Interest cover | Ready with Limitations | Cash interest paid is annual only; the last twelve months are not calculable | Obtain the fiscal 2026 annual report |
| Liquidity and maturities | Ready | Receivable program status after 2026-09-11 is not established | Confirm the program renewal |
| Debt structure and ranking | Not Ready | No source states ranking, security or guarantors for the notes; indentures and the credit agreement are not supplied | Obtain the indentures and the 2026 credit agreement |
| Cash-flow quality | Ready | Quarterly cash flow is cumulative only; no discrete Q3 cash flow | None needed for this run |
| Quarterly trend | Ready with Limitations | Fiscal 2024 quarters are not in the set; the fourth quarter of fiscal 2025 is calculated | Obtain the 2024 quarterly reports if a longer series is wanted |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 30 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 10 |

## Calculations

Each result is worked from the figures stated in the inputs column; ratios are rounded half up to two places.

| Calc ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C-01 | Net debt at FY2024 / 2024-09-30 | Gross debt USD 1,349 million less cash USD 300 million | USD 1,049 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123 |
| C-02 | Net debt at FY2025 / 2025-09-30 | Gross debt USD 1,384 million less cash USD 215 million | USD 1,169 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123 |
| C-03 | Net debt at 2025-12-31 | Gross debt USD 1,387 million less cash USD 304 million | USD 1,083 million | 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 2 |
| C-04 | Net debt at 2026-03-31 | Gross debt USD 1,374 million less cash USD 343 million | USD 1,031 million | 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 2 |
| C-05 | Net debt at 2026-06-30 | Gross debt USD 1,374 million less cash USD 440 million | USD 934 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2 |
| C-06 | Total debt / EBITDA, FY2024 / 2024-09-30 | 1,349 divided by 142 (USD millions) | 9.50x | Net debt data; T4.4; T4.5; T4.8 |
| C-07 | Net debt / EBITDA, FY2024 / 2024-09-30 | 1,049 divided by 142 (USD millions) | 7.39x | Net debt data; T4.4; T4.5; T4.8 |
| C-08 | EBITDA / cash interest, FY2024 / 2024-09-30 | 142 divided by 52 (USD millions) | 2.73x | Net debt data; T4.4; T4.5; T4.8 |
| C-09 | Total debt / adjusted EBITDA, FY2024 / 2024-09-30 | 1,349 divided by 459 (USD millions) | 2.94x | Net debt data; T4.4; T4.5; T4.8 |
| C-10 | Net debt / adjusted EBITDA, FY2024 / 2024-09-30 | 1,049 divided by 459 (USD millions) | 2.29x | Net debt data; T4.4; T4.5; T4.8 |
| C-11 | Adjusted EBITDA / cash interest, FY2024 / 2024-09-30 | 459 divided by 52 (USD millions) | 8.83x | Net debt data; T4.4; T4.5; T4.8 |
| C-12 | EBITDA / cash interest, FY2025 / 2025-09-30 | -601 divided by 54 (USD millions) | -11.13x | Net debt data; T4.4; T4.5; T4.8 |
| C-13 | Total debt / adjusted EBITDA, FY2025 / 2025-09-30 | 1,384 divided by 401 (USD millions) | 3.45x | Net debt data; T4.4; T4.5; T4.8 |
| C-14 | Net debt / adjusted EBITDA, FY2025 / 2025-09-30 | 1,169 divided by 401 (USD millions) | 2.92x | Net debt data; T4.4; T4.5; T4.8 |
| C-15 | Adjusted EBITDA / cash interest, FY2025 / 2025-09-30 | 401 divided by 54 (USD millions) | 7.43x | Net debt data; T4.4; T4.5; T4.8 |
| C-16 | Total debt / EBITDA, 2026-06-30 | 1,374 divided by 305 (USD millions) | 4.50x | Net debt data; T4.4; T4.5; T4.8 |
| C-17 | Net debt / EBITDA, 2026-06-30 | 934 divided by 305 (USD millions) | 3.06x | Net debt data; T4.4; T4.5; T4.8 |
| C-18 | Total debt / adjusted EBITDA, 2026-06-30 | 1,374 divided by 384 (USD millions) | 3.58x | Net debt data; T4.4; T4.5; T4.8 |
| C-19 | Net debt / adjusted EBITDA, 2026-06-30 | 934 divided by 384 (USD millions) | 2.43x | Net debt data; T4.4; T4.5; T4.8 |
| C-20 | Adjusted EBITDA margin, FY2024 | 459 divided by 2,113, times 100 | 21.72% | T4.4; T4.5; T4.8; Net debt data |
| C-21 | Adjusted EBITDA margin, FY2025 | 401 divided by 1,824, times 100 | 21.98% | T4.4; T4.5; T4.8; Net debt data |
| C-22 | Adjusted EBITDA margin, 2026-06-30 | 384 divided by 1,842, times 100 | 20.85% | T4.4; T4.5; T4.8; Net debt data |
| C-23 | Free cash flow / Adjusted EBITDA, FY2024 | 325 divided by 459, times 100 | 70.81% | T4.4; T4.5; T4.8; Net debt data |
| C-24 | Free cash flow / Adjusted EBITDA, FY2025 | 36 divided by 401, times 100 | 8.98% | T4.4; T4.5; T4.8; Net debt data |
| C-25 | Free cash flow / Adjusted EBITDA, 2026-06-30 | 250 divided by 384, times 100 | 65.10% | T4.4; T4.5; T4.8; Net debt data |
| C-26 | Sales growth, FY2025 | 1,824 divided by 2,113 less 1, times 100 | -13.68% | T4.4; T4.5; T4.8; Net debt data |
| C-27 | Sales growth, 9M 2026 | 1,365 divided by 1,347 less 1, times 100 | 1.34% | T4.4; T4.5; T4.8; Net debt data |
| C-28 | Sales growth, Q3 2026 | 497 divided by 463 less 1, times 100 | 7.34% | T4.4; T4.5; T4.8; Net debt data |
| C-29 | Adjusted EBITDA growth, FY2025 | 401 divided by 459 less 1, times 100 | -12.64% | T4.4; T4.5; T4.8; Net debt data |
| C-30 | Adjusted EBITDA growth, 9M 2026 | 265 divided by 282 less 1, times 100 | -6.03% | T4.4; T4.5; T4.8; Net debt data |
| C-31 | Adjusted EBITDA growth, Q3 2026 | 109 divided by 113 less 1, times 100 | -3.54% | T4.4; T4.5; T4.8; Net debt data |
| C-32 | Capex / Sales, FY2024 | 137 divided by 2,113, times 100 | 6.48% | T4.4; T4.5; T4.8; Net debt data |
| C-33 | Capex / Sales, FY2025 | 98 divided by 1,824, times 100 | 5.37% | T4.4; T4.5; T4.8; Net debt data |
| C-34 | Capex / Sales, 2026-06-30 | 85 divided by 1,842, times 100 | 4.61% | T4.4; T4.5; T4.8; Net debt data |
| C-35 | Net debt / LTM adjusted EBITDA at quarter end, Q1 2026 | 1,083 divided by 398 | 2.72x | T4.4; T4.5; T4.8; Net debt data |
| C-36 | Net debt / LTM adjusted EBITDA at quarter end, Q2 2026 | 1,031 divided by 388 | 2.66x | T4.4; T4.5; T4.8; Net debt data |
| C-37 | Liquidity / Total Debt, 2026-06-30 | 936 divided by 1,374 | 0.68x | T4.4; T4.5; T4.8; Net debt data |
| C-38 | LTM Sales to 2026-06-30 | FY2025 1,824 plus 9M 2026 1,365 less 9M 2025 1,347 (USD millions) | USD 1,842 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| C-39 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 -601 plus 9M 2026 193 less 9M 2025 -713 (USD millions) | USD 305 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-40 | LTM EBITDA (Adjusted) to 2026-06-30 | FY2025 401 plus 9M 2026 265 less 9M 2025 282 (USD millions) | USD 384 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-41 | LTM operating cash flow from continuing operations to 2026-06-30 | FY2025 134 plus 9M 2026 295 less 9M 2025 94 (USD millions) | USD 335 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| C-42 | LTM additions to property, plant and equipment to 2026-06-30 | FY2025 98 plus 9M 2026 51 less 9M 2025 64 (USD millions) | USD 85 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| C-43 | LTM issuer Free Cash Flow to 2026-06-30 | FY2025 36 plus 9M 2026 244 less 9M 2025 30 (USD millions); check: LTM operating cash flow 335 less LTM capital expenditure 85 | USD 250 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 90; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 64 |
| C-44 | LTM net income to 2026-06-30 | FY2025 -845 plus 9M 2026 20 less 9M 2025 -877 (USD millions) | USD 52 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2 |
| C-45 | LTM gross profit to 2026-06-30 | FY2025 549 plus 9M 2026 422 less 9M 2025 390 (USD millions) | USD 581 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| C-46 | Fourth quarter of fiscal 2025 Sales (calculated; no discrete fourth quarter is reported) | FY2025 1,824 less 9M 2025 1,347 (USD millions) | USD 477 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| C-47 | Fourth quarter of fiscal 2025 EBITDA (Reported) (calculated) | FY2025 -601 less 9M 2025 -713 (USD millions) | USD 112 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-48 | Fourth quarter of fiscal 2025 EBITDA (Adjusted) (calculated) | FY2025 401 less 9M 2025 282 (USD millions) | USD 119 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-49 | LTM EBITDA (Adjusted) to 2025-12-31 | FY2025 401 plus Q1 2026 58 less Q1 2025 61 (USD millions) | USD 398 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 34 |
| C-50 | LTM EBITDA (Adjusted) to 2026-03-31 | FY2025 401 plus H1 2026 156 less H1 2025 169 (USD millions) | USD 388 million | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 36 |
| C-51 | Available liquidity at 2026-06-30 | Cash 440 plus revolver capacity 496, where 496 is the 500 facility less 4 of letters of credit (USD millions) | USD 936 million, equal to the issuer's stated figure | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 |
| C-52 | Available liquidity at 2025-09-30 | Cash 215 plus revolver capacity 596 (USD millions) | USD 811 million, equal to the issuer's stated figure | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 91 |
| C-53 | Liquidity cover of the fiscal 2028 and fiscal 2029 maturities | Liquidity 936 divided by fiscal 2028 maturity 571 plus fiscal 2029 maturity 97, which is 668 (USD millions) | 1.40x | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| C-54 | Euro notes as a share of total principal | Fiscal 2028 maturity 571 divided by total principal 1,403 (USD millions) | 40.70% | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 |
| C-55 | Implied euro-dollar rates on the EUR 500 million notes | Carrying value 586 divided by 500 at 2025-09-30; 571 divided by 500 at 2026-06-30 (millions) | 1.172 and 1.142 dollars per euro | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 149; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 |
| C-56 | Change in net debt since 2025-09-30 | Net debt 934 less net debt 1,169 (USD millions); cash rose 225 and carrying debt fell 10 | USD -235 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 123 |
| C-57 | Operating cash flow and free cash flow excluding the tax refund, 9M 2026 | Operating cash flow 295 less refund 103 = 192; free cash flow 244 less refund 103 (USD millions) | USD 192 million and USD 141 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 64–65 |
| C-58 | Shareholder returns against free cash flow, fiscal 2024 | Repurchases 380 plus dividends 78 = 458, less free cash flow 325 (USD millions) | USD 458 million returned, USD 133 million above free cash flow | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 125; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 90 |
| C-59 | Asbestos reserves net of insurance receivables and trust assets, 2026-06-30 | Ashland reserve 262 plus Hercules reserve 183 = 445, less insurance receivables 103 plus 53 = 156, less asbestos trust 220 (USD millions) | USD 69 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 21–22; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 23; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 |
| C-60 | Environmental reserves net of the environmental trust, 2026-06-30 | Reserves 231 less environmental trust 112 (USD millions) | USD 119 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 25; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 |
| C-61 | Receivables sold under the two programs, 2026-06-30 and 2025-09-30 | U.S. 68 plus foreign 109; U.S. 59 plus foreign 103 (USD millions) | USD 177 million and USD 162 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 16 |
| C-62 | Operating lease liabilities, 2026-06-30 | Current 18 plus noncurrent 84 (USD millions) | USD 102 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2 |
| C-63 | LTM recurring add-backs: environmental, plant optimization and restructuring | Environmental 29 plus plant optimization 28 plus restructuring 18 (USD millions) | USD 75 million, 19.53% of LTM Adjusted EBITDA of 384 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-64 | Adjusted EBITDA margin, 9M 2026 and 9M 2025 | 265 divided by 1,365; 282 divided by 1,347 (USD millions), times 100 | 19.41% and 20.94% | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |
| C-65 | Dividends and repurchases, 9M 2026 against 9M 2025 | Dividends 57 and 57; repurchases none printed and 100 (USD millions) | USD 57 million paid in 9M 2026 against USD 157 million in 9M 2025 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 |
| C-66 | Debt beyond the maturity ladder | Total principal 1,403 less ladder 1,122, where 1,122 is 0 plus 4 plus 571 plus 97 plus 0 plus 450 (USD millions) | USD 281 million | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 |
| C-67 | Reconciling items between ladder principal and carrying value | Debt beyond ladder 281 less discounts 20 less issuance costs 9 (USD millions) | USD 252 million; ladder 1,122 plus 252 equals carrying value 1,374 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 |
| C-68 | Debt table check, 2026-06-30 | 450 plus 571 plus 282 plus 76 less 5 of other (USD millions) | USD 1,374 million, equal to long-term debt on the balance sheet | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 |
| C-69 | Covenant ratios stated by the issuer | Net leverage 2.3, 2.8, 2.7, 2.6, 2.3 and coverage 7.8, 6.5, 6.5, 6.5, 6.9 at 2024-09-30, 2025-09-30, 2025-12-31, 2026-03-31, 2026-06-30; limits 4.0 and 3.0 | Stated, not recomputed | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67 |
| C-70 | LTM EBITDA bridge to 2026-06-30 | EBITDA (Reported) 305 plus discontinued operations 23 plus key items 56 (USD millions); each line is fiscal 2025 plus 9M 2026 less 9M 2025 | USD 384 million, equal to LTM Adjusted EBITDA | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 74; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 52 |

## Gaps

- Cash interest paid is printed only in the annual reports, so interest cover for the twelve months to 2026-06-30 and for the interim balance-sheet dates is not calculable. This restricts the coverage trend since the fiscal 2025 year end. Severity Medium. The fiscal 2026 annual report would close it.
- Reported EBITDA for fiscal 2025 is negative at USD -601 million after a USD 706 million goodwill impairment, so total debt and net debt multiples on reported earnings are not calculable for that year. This restricts the reported-basis trend, and the adjusted multiples stand in. Severity Medium. No action closes it; the adjusted rows are the substitute.
- No source states the legal ranking, security or guarantors of the 3.375% senior notes, the 2.00% senior notes, the 6.875% notes, the 6.50% junior subordinated notes or the revolver beyond its unsecured status, so no debt stack is drawn and security, ranking and rate type are not established for the notes. This restricts any structural-priority view. Severity Medium. The indentures and the 2026 credit agreement would close it.
- The carrying value of the EUR 500 million notes in euros and the principal of the 6.875% notes are not printed; the first is stated only in dollars and the second is implied by difference at USD 281 million for all debt beyond the maturity ladder. This restricts the instrument schedule. Severity Low. The indenture or the annual report principal table would close it.
- The maturity date of the new revolver is not stated; it is a five-year facility from 2026-05-28. This restricts the exact timing of the facility expiry. Severity Low. The credit agreement would close it.
- The status of the U.S. receivables sale program after its scheduled termination on 2026-09-11 is not stated in any filing read, and USD 68 million of sales were outstanding at 2026-06-30. This restricts the view of funding after that date. Severity Medium. A later filing or amendment would close it.
- The filings print a dash for several line items (goodwill impairment in periods without one, equity and other income in Q3 2025, the divestiture line in Q3 2025, the repurchase and acquisition and divestiture lines of the cash flow in some periods, and the nine-month 2025 total of investing cash flows). A dash is treated as a missing value, except that the nine-month 2025 investing total is read as zero because the printed lines sum to zero. This restricts nothing material. Severity Low. The filings' own notes would close it.
- Quarterly cash flow statements are cumulative from the start of the fiscal year, so no discrete third-quarter cash flow, and no interest or tax paid, is available. Severity Low. The fiscal 2026 annual report would close it.
- No quarterly report for fiscal 2024 is in the set, so the fourth quarter of fiscal 2024 cannot be isolated and growth in the last twelve months cannot be calculated. This restricts the quarterly history before the first quarter of fiscal 2025. Severity Low. The 2024 quarterly reports would close it.
- The agency ratings are stated only by the issuer and by quarter of the action; agency reports and action dates are not supplied. This does not change any figure in this module. Severity Low. Agency reports would close it.


## Next module

The orchestrator selects the next module.
