# CP-1 handoff for CENTENE CORP

## Request
CENTENE CORP (cnc), as of 2026-11-05, credit snapshot pathway. Scope: Financial foundation, meaning normalised statements, net debt, leverage and cover metrics, debt reconciliation and definition conflicts, built from the supplied filings and results releases. No credit recommendation is made here.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_cnc-20251231.htm.jsonl | Annual report on Form 10-K of Centene Corporation for the year ended December 31, 2025 | 2026-02-17 | 097062d4e055a3b7fe83b7f7a6e69a627cdfc677e170580a5543c61781d7f32c | Audited FY2025 and FY2024 statement columns, debt note, maturity ladder, segment note, cash flow supplemental data and exhibit index; the date is the signature date the document states |
| 10-Q_2026-03-31_cnc-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-28 | 6fdb16147461b8c90a892872b86f94619262dc29b1649522f12be59d50d43010 | Corroborates the December 31, 2025 comparative balance sheet lines; quarterly columns are not tabulated; the date is the signature date the document states |
| 10-Q_2026-06-30_cnc-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-28 | 2be254120598acb867bfc89cb539dc675621975d5b2820213b11fde2ab54d522 | Corroborates the December 31, 2025 comparative balance sheet lines; quarterly columns are not tabulated; the date is the signature date the document states |
| 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-27 | cfb19f79c82250660e2e3f3fc4242fe18840a50e06dfa54c4c173df9081f0994 | Nine-month 2026 and 2025 statement columns, balance sheet at September 30, 2026, debt note, liquidity and subsequent-event text; the date is the signature date the document states |
| EX-99.1_2026-04-28_a20260428ex991pressrelease.htm.jsonl | Exhibit 99.1 news release reporting first quarter 2026 results | 2026-04-28 | 85e525be3f7df9445c1acc49590c58f56053e97a34531af048cb7fd64ca5f94b | March 2026 receivable sale and debt repurchase commentary; debt to capitalization history |
| EX-99.1_2026-07-28_a20260728ex991pressrelease.htm.jsonl | Exhibit 99.1 news release reporting second quarter 2026 results | 2026-07-28 | ef848078ad02a5ade77bb7226070a38945f9e917a1e3e86d5abb0edd73e6d395 | Second quarter debt commentary and supplemental data |
| EX-99.1_2026-10-27_a20261027ex991pressrelease.htm.jsonl | Exhibit 99.1 news release reporting third quarter 2026 results | 2026-10-27 | 916ad849ec4d38de97614bebc7921009e1fad702ea222f32804d2cf10f3a8c80 | October 2026 debt events, debt to capitalization, days in claims payable and membership history |

Supplied handoff:

| Module | Name | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness | d46c0f15aab6565c030b2eb85cad35862c45697f1b8fa34ee2e98db39f333100 | Source set, authority tiers and the gaps it logged: no executed credit agreement, no issuer EBITDA, no agency ratings, three December 31, 2025 balance sheet lines that differ between documents |

## Findings

### Bottom line

Total debt is 4.11x last-twelve-months EBITDA derived from the statements, but most of the USD 20,700 million of cash sits in regulated subsidiaries, so net debt of negative USD 5,158 million overstates what is available to repay creditors.
Basis: calculation C10; calculation C14; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 46

Debt fell from USD 17,401 million at the end of 2025 to USD 15,542 million at September 30, 2026, mainly through senior note repurchases, and the remaining USD 569 million of the 2027 notes was redeemed in October 2026, which the quarter-end figures do not include.
Basis: 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 20–21; EX-99.1_2026-10-27_a20261027ex991pressrelease.htm.jsonl, page 3

EBITDA covers cash interest 6.03x over the same twelve months; for full-year 2025 reported EBITDA is negative after a USD 7,311 million impairment, so leverage for that year is not calculable.
Basis: calculation C10; calculation C11; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 130

### Leverage and coverage

Leverage on a last-twelve-months basis is 4.11x total debt to derived EBITDA, against 2.99x at the end of 2024, and total debt is USD 1,859 million lower than at the end of 2025. EBITDA is derived from net earnings, income tax, interest expense, depreciation and amortization because Centene states no EBITDA in any source, and it includes investment and other income, which is a material earnings line. The derivation keeps the USD 513 million impairment recorded in the fourth quarter of 2025 inside the last-twelve-months figure, and removing it would give USD 4,295 million of EBITDA and 3.62x leverage, which is an analyst judgement and not used in the checked ratios.
Basis: calculation C10; calculation C12; calculation C13; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9

Cash interest cover is 6.03x on last-twelve-months cash interest of USD 627 million, against 9.01x in 2024. The cover uses interest paid from the cash flow statement; interest expense in the income statement was USD 678 million for 2025 against USD 647 million paid.
Basis: calculation C11; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 130; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132

### Cash-flow quality and funding float

Operating cash flow is USD 4,287 million for the nine months of 2026 against USD 4,651 million a year earlier, and it swings with the timing of pass-through payments and claims. Medical claims liabilities of USD 21,495 million at September 30, 2026 fund operations without interest and are a working-capital float that rose from USD 20,544 million at the end of 2025, with days in claims payable of 48 against 46 at year end. A fall in that float would absorb cash that the consolidated balance sheet shows as available.
Basis: 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8; EX-99.1_2026-10-27_a20261027ex991pressrelease.htm.jsonl, page 14

In March 2026 Centene sold a USD 1,000 million participating interest in 2025 plan year Part D receivables for net cash of USD 970 million and used the proceeds toward redeeming 2027 notes, so part of the debt reduction was funded by a sale of receivables that is not in the debt figure.
Basis: 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 48; EX-99.1_2026-04-28_a20260428ex991pressrelease.htm.jsonl, page 4

### Liquidity and parent-level resources

Consolidated cash and cash equivalents are USD 20,700 million at September 30, 2026, but unregulated cash is only USD 376 million, of which USD 175 million is available for general corporate use, so about USD 20,324 million is held by regulated subsidiaries that face dividend and capital limits. The revolving credit facility of USD 4,000 million is undrawn and matures in March 2030, and letters of credit of USD 113 million sit outside it.
Basis: 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 46–47; calculation C14; calculation C16

### Data quality, definitions and subsequent events

Three December 31, 2025 balance sheet lines differ between the annual report and the 2026 reports by USD 22 million each, and the year-end figures here use the annual report column. Cash in the balance sheet is USD 69 million below cash including restricted cash at year end 2025, and the cash flow statement closing balances are not tied to opening cash plus net change because of cash reclassified to held for sale.
Basis: 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132; calculation C15

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_cnc-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 flows; balance sheets at 2025-12-31 and 2024-12-31 | USD | millions | Consolidated, Centene Corporation and subsidiaries; parent-only condensed statements also printed | US GAAP | Tier 1 (audited) | FY2024 and FY2025 statement columns, debt note, maturity ladder, segment note | SEC filing date not stated; three December 31, 2025 balance sheet lines differ in the 2026 filings |
| 10-Q_2026-03-31_cnc-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 and Q1 2025; balance sheet at 2026-03-31 | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited) | Corroboration of December 31, 2025 comparatives; not tabulated | Quarterly columns are not tabulated in this module |
| 10-Q_2026-06-30_cnc-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 2026 and six months; balance sheet at 2026-06-30 | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited) | Corroboration of December 31, 2025 comparatives; not tabulated | Quarterly and six-month columns are not tabulated in this module |
| 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 2026 and nine months 2026 and 2025; balance sheet at 2026-09-30 with 2025-12-31 comparative | USD | millions | Consolidated | US GAAP | Tier 2b (unaudited) | 9M 2026 and 9M 2025 statement columns, latest balance sheet, debt note, liquidity text | SEC filing date not stated; no maturity schedule at 2026-09-30 |
| EX-99.1_2026-04-28_a20260428ex991pressrelease.htm.jsonl | Issuer news release (Exhibit 99.1) | Q1 2026 | USD | millions | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer-prepared, unaudited) | Receivable sale and note repurchase commentary | Never overrides a filing |
| EX-99.1_2026-07-28_a20260728ex991pressrelease.htm.jsonl | Issuer news release (Exhibit 99.1) | Q2 2026 | USD | millions | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer-prepared, unaudited) | Debt commentary | Never overrides a filing |
| EX-99.1_2026-10-27_a20261027ex991pressrelease.htm.jsonl | Issuer news release (Exhibit 99.1) | Q3 2026 | USD | millions | Consolidated | US GAAP with non-GAAP measures | Tier 2b (issuer-prepared, unaudited) | October 2026 debt events; debt to capitalization; days in claims payable | Never overrides a filing |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Centene Corporation | Issuer, parent registrant, issuer of the senior notes and party to the credit agreement (exhibit index) | December 31 | USD | millions | Consolidated, Centene Corporation and subsidiaries | US GAAP | Flows FY2023 to FY2025 and 9M 2026 and 2025; balance sheets 2024-12-31, 2025-12-31, 2026-03-31, 2026-06-30, 2026-09-30 |
| Centene Corporation (parent company only) | Parent-only condensed financial information (equity method for subsidiaries) | December 31 | USD | millions | Parent only | US GAAP | FY2025, FY2024 and FY2023 (annual report only) |
| Magellan Health businesses | Business within the Other segment held for sale at 2026-09-30 | December 31 | USD | millions | Within consolidated; no separate statements | US GAAP | Held-for-sale balances only |
| Guarantor group or restricted group | Not stated in any source | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no guarantor or restricted group is named | Not supplied: not stated | Not supplied: not stated |

Subsequent events flagged, none blended into period figures. In January 2026 Centene repurchased a further USD 29 million par of the 2027 notes, which falls after the audited year-end balance sheet. On February 13, 2026 it entered into a receivable purchase agreement for 2025 plan year Part D receivables with a maximum outstanding purchase amount of USD 4,250 million. In March 2026 it sold a USD 1,000 million participating interest under that agreement. In October 2026 it redeemed the remaining USD 569 million of the 2027 notes, which falls after the September 30, 2026 balance sheet.
Basis: 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 173; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 48; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA derived from statement lines, since no source states EBITDA | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Calculated (derived) | Not supplied: the issuer states no EBITDA | FY2024 USD 6,200m; FY2025 USD -4,775m; 9M 2025 USD -3,729m; 9M 2026 USD 4,828m | Net earnings (loss) plus income tax (benefit) expense plus interest expense plus depreciation expense plus amortization of acquired intangibles; equals earnings before income tax plus interest expense plus depreciation and amortization | FY2024, FY2025, 9M 2025, 9M 2026 |
| Interest expense kept with its printed sign; cash interest paid shown as a positive amount | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Presentation | Interest expense printed as a negative in other income (expense) | Interest expense unchanged; Cash Interest Paid shown positive | The statement table rule makes cash interest paid positive | All |
| Total Debt set to current portion plus long-term debt at carrying value | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Definition | Two balance sheet debt lines | FY2024 USD 18,533m; FY2025 USD 17,401m; 9M 2026 USD 15,542m | Equals total debt in the debt note, net of issuance costs | FY2024, FY2025, 9M 2026 |
| Last-twelve-months figures built as FY2025 plus 9M 2026 less 9M 2025 | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Derived period | No reported last-twelve-months figure | See the constructed period register | Method step for derived periods; every component is stated; reported periods are never replaced | LTM to 2026-09-30 |
| EBITDA before impairment shown beside reported EBITDA for the last twelve months (Analyst Judgement) | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Analyst Judgement | LTM EBITDA USD 3,782m | LTM EBITDA before impairment USD 4,295m | Impairment is non-cash; the figure is a memo and is not used in any checked ratio | LTM to 2026-09-30 |
| Lines printed as a dash read as missing, not zero | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Presentation | Dash in the statement | Not supplied: the statement prints a dash for this line | Method rule that a source dash is a missing value with a gap line | Lines named in the gap list |
| Closing cash left unsupported where cash is reclassified to held for sale | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Identity | Printed closing balance FY2025 USD 17,957m and 9M 2026 USD 20,887m | Not supplied (closing cash row) | Opening cash plus net change does not equal the printed closing balance because the statement prints a separate held-for-sale reclassification | FY2025, 9M 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Premium | 142,303 | 171,556 | 127,578 | 131,839 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Service | 3,202 | 3,025 | 2,276 | 2,296 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Premium and service revenues | 145,505 | 174,581 | 129,854 | 134,135 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Premium tax (revenue) | 17,566 | 20,196 | 15,198 | 20,035 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Total revenues | 163,071 | 194,777 | 145,052 | 154,170 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Medical costs | 125,707 | 157,702 | 116,213 | 118,460 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Cost of services | 2,729 | 2,670 | 1,990 | 2,106 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Selling, general and administrative expenses | 12,400 | 12,904 | 9,534 | 9,735 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Depreciation expense | 549 | 590 | 430 | 411 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Amortization of acquired intangible assets | 692 | 685 | 516 | 488 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Premium tax expense | 17,806 | 20,538 | 15,449 | 20,218 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Impairment | 13 | 7,311 | 6,798 | Not supplied: the statement prints a dash for this line | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Total operating expenses | 159,896 | 202,400 | 150,930 | 151,418 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Earnings (loss) from operations | 3,175 | -7,623 | -5,878 | 2,752 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Investment and other income | 1,784 | 1,572 | 1,203 | 1,175 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Gain on debt extinguishment | Not supplied: the statement prints a dash for this line | 1 | Not supplied: the statement prints a dash for this line | 2 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Interest expense | -702 | -678 | -510 | -466 | USD millions | Reported (FY columns audited, 9M columns unaudited); printed as a negative | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Earnings (loss) before income tax | 4,257 | -6,728 | -5,185 | 3,463 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Income tax (benefit) expense | 963 | -51 | 392 | 902 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Net earnings (loss) | 3,294 | -6,677 | -5,577 | 2,561 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| (Earnings) loss attributable to noncontrolling interests | 11 | 3 | 4 | Not supplied: the statement prints a dash for this line | USD millions | Reported (FY columns audited, 9M columns unaudited); the annual report prints the loss attributable to noncontrolling interests as a positive add-back | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Net earnings (loss) attributable to Centene Corporation | 3,305 | -6,674 | -5,573 | 2,561 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| Depreciation and amortization (derived) | 1,241 | 1,275 | 946 | 899 | USD millions | Calculated: depreciation expense plus amortization of acquired intangible assets; equals the cash flow statement line | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| EBIT (derived) | 4,959 | -6,050 | -4,675 | 3,929 | USD millions | Calculated: earnings before income tax plus interest expense; includes investment and other income and the debt extinguishment gain | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| EBITDA (Reported) | 6,200 | -4,775 | -3,729 | 4,828 | USD millions | Calculated: net earnings plus income tax plus interest expense plus depreciation and amortization; the issuer states no EBITDA; includes impairment of USD 13m (FY2024), 7,311m (FY2025) and 6,798m (9M 2025), the 9M 2026 impairment line being a dash, and includes investment and other income | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |

### T4.4a Segment schedule

| Segment | Measure | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Medicaid | Total revenues | 101,417 | 110,434 | 82,391 | 90,436 | USD millions | Reported segment note; Other/Eliminations is the issuer's combined column (internal revenues and eliminations net to zero) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Medicare | Total revenues | 23,032 | 37,210 | 27,600 | 32,646 | USD millions | Reported segment note; Other/Eliminations is the issuer's combined column (internal revenues and eliminations net to zero) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Commercial | Total revenues | 33,702 | 42,003 | 31,211 | 27,612 | USD millions | Reported segment note; Other/Eliminations is the issuer's combined column (internal revenues and eliminations net to zero) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Other/Eliminations | Total revenues | 4,920 | 5,130 | 3,850 | 3,476 | USD millions | Reported segment note; Other/Eliminations is the issuer's combined column (internal revenues and eliminations net to zero) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Consolidated | Total revenues | 163,071 | 194,777 | 145,052 | 154,170 | USD millions | Reported; equals total revenues in the income statement | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Medicaid | Segment gross margin | 6,246 | 5,690 | 4,081 | 4,534 | USD millions | Reported: premium and service revenues less medical costs and cost of services | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Medicare | Segment gross margin | 2,595 | 2,983 | 2,605 | 3,418 | USD millions | Reported: premium and service revenues less medical costs and cost of services | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Commercial | Segment gross margin | 7,663 | 5,101 | 4,604 | 5,263 | USD millions | Reported: premium and service revenues less medical costs and cost of services | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Other/Eliminations | Segment gross margin | 565 | 435 | 361 | 354 | USD millions | Reported: premium and service revenues less medical costs and cost of services | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |
| Consolidated | Segment gross margin | 17,069 | 14,209 | 11,651 | 13,569 | USD millions | Reported segment gross margin total | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 169–170; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 23–24 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net earnings (loss) | 3,294 | -6,677 | -5,577 | 2,561 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Depreciation and amortization | 1,241 | 1,275 | 946 | 899 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Stock compensation expense | 212 | 204 | 146 | 178 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Impairment | 13 | 7,311 | 6,798 | Not supplied: the statement prints a dash for this line | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| (Gain) loss on debt extinguishment | Not supplied: the statement prints a dash for this line | -1 | Not supplied: the statement prints a dash for this line | -2 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Deferred income taxes | 13 | -60 | 13 | 35 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| (Gain) loss on divestitures, net | -120 | -2 | 10 | 15 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Premium and trade receivables | -4,333 | 1,480 | -3,338 | -2,262 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Other assets | 46 | -230 | -245 | 403 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Medical claims liabilities | 368 | 2,336 | 3,176 | 1,024 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Unearned revenue | -54 | 80 | -5 | -56 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Accounts payable and accrued expenses | -528 | -657 | 2,681 | 1,178 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Other long-term liabilities | -70 | -46 | 38 | 163 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Other operating activities, net | 72 | 75 | 8 | 151 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Net Cash from Operating Activities | 154 | 5,088 | 4,651 | 4,287 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Capital expenditures | -644 | -767 | -554 | -568 | USD millions | Reported (FY columns audited, 9M columns unaudited); total capital expenditures, no maintenance and growth split stated | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Purchases of investments | -7,183 | -4,541 | -3,765 | -3,511 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Sales and maturities of investments | 5,785 | 5,780 | 4,131 | 4,728 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Divestiture proceeds, net of divested cash | 990 | Not supplied: the statement prints a dash for this line | Not supplied: the statement prints a dash for this line | 3 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Net Cash from Investing Activities | -1,052 | 472 | -188 | 652 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Proceeds from long-term debt | 1,300 | 750 | 750 | Not supplied: the statement prints a dash for this line | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Payments and repurchases of long-term debt | -622 | -1,895 | -1,708 | -1,872 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Common stock repurchases | -3,124 | -475 | -473 | -57 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Proceeds from common stock issuances | 46 | 37 | 29 | 26 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Purchase of noncontrolling interest | Not supplied: the statement prints a dash for this line | -19 | -19 | Not supplied: the statement prints a dash for this line | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Other financing activities, net | -6 | -19 | -13 | -3 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Net Cash from Financing Activities | -2,406 | -1,621 | -1,434 | -1,906 | USD millions | Reported (FY columns audited, 9M columns unaudited) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| FX Effect on Cash | 8 | Not supplied: the statement prints a dash for this line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported; FY2025 prints a dash | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Net Cash Change | -3,296 | 3,939 | 3,029 | 3,033 | USD millions | Reported net increase (decrease); equals operating plus investing plus financing plus the FX effect where stated | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Cash reclassified (to) from held for sale | Not supplied: the statement prints a dash for this line | -138 | Not supplied: the statement prints a dash for this line | -103 | USD millions | Reported; printed between the net change and the beginning balance | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Opening Cash | 17,452 | 14,156 | 14,156 | 17,957 | USD millions | Reported cash, cash equivalents and restricted cash at the beginning of the period | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Closing Cash | 14,156 | Not supplied: the statement prints a separate held-for-sale reclassification, so the printed closing balance is not opening cash plus net change | 17,185 | Not supplied: the statement prints a separate held-for-sale reclassification, so the printed closing balance is not opening cash plus net change | USD millions | Printed closing cash, cash equivalents and restricted cash is USD 17,957m for FY2025 and USD 20,887m for 9M 2026; a reclassification of USD 138m and USD 103m to held for sale sits between the net change and the closing balance | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Cash Interest Paid | 688 | 647 | 458 | 438 | USD millions | Reported supplemental interest paid; positive amount; classified within operating activities | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| Income taxes paid, net | 1,002 | 448 | 540 | 15 | USD millions | Reported supplemental cash taxes paid; classified within operating activities | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 131–132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 14,063 | 17,888 | 20,700 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Premium and trade receivables | 19,713 | 18,105 | 20,329 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Short-term investments | 2,622 | 2,432 | 2,886 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Other current assets | 1,601 | 1,945 | 1,546 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total current assets | 37,999 | 40,370 | 45,461 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Long-term investments | 17,429 | 17,035 | 14,794 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Restricted deposits | 1,390 | 1,412 | 1,470 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Property, software and equipment, net | 2,067 | 2,037 | 2,109 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Goodwill | 17,558 | 10,835 | 10,835 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Intangible assets, net | 5,409 | 4,530 | 4,042 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Other long-term assets | 593 | 528 | 569 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Medical claims liability | 18,308 | 20,544 | 21,495 | USD millions | Reported; non-debt funding float | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Accounts payable and accrued expenses | 13,174 | 13,774 | 15,459 | USD millions | Reported; FY2025 column is the annual report figure, which the 2026 reports show differently (see the conflict register) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Return of premium payable | 2,008 | 1,592 | 1,346 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Unearned revenue | 661 | 736 | 680 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Current portion of long-term debt | 110 | 50 | 88 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total current liabilities | 34,261 | 36,696 | 39,068 | USD millions | Reported; FY2025 column is the annual report figure, which the 2026 reports show differently (see the conflict register) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Long-term debt | 18,423 | 17,351 | 15,454 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Deferred tax liability | 684 | 833 | 719 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Other long-term liabilities | 2,567 | 1,811 | 1,732 | USD millions | Reported; FY2025 column is the annual report figure, which the 2026 reports show differently (see the conflict register) | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Common stock | 1 | 1 | 1 | USD millions | Reported, par value amount | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Additional paid-in capital | 20,562 | 20,777 | 20,926 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Accumulated other comprehensive (loss) | -504 | -58 | -514 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Retained earnings | 15,348 | 8,674 | 11,235 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Treasury stock, at cost | -8,997 | -9,441 | -9,441 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total Centene stockholders' equity | 26,410 | 19,953 | 22,207 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Nonredeemable noncontrolling interest | 90 | 80 | 76 | USD millions | Reported | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total Assets | 82,445 | 76,747 | 79,280 | USD millions | Reported total assets | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total Liabilities | 55,935 | 56,691 | 56,973 | USD millions | Reported total liabilities | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Temporary Equity | 10 | 23 | 24 | USD millions | Reported redeemable noncontrolling interests, outside stockholders' equity | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total Equity | 26,500 | 20,033 | 22,283 | USD millions | Reported total stockholders' equity, including nonredeemable noncontrolling interest | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |
| Total Debt | 18,533 | 17,401 | 15,542 | USD millions | Calculated: current portion of long-term debt plus long-term debt, at carrying value net of issuance costs; equals total debt in the debt note; no lease or pension liability is carried inside it | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20 |
| Cash & Equivalents | 14,063 | 17,888 | 20,700 | USD millions | Reported cash and cash equivalents; excludes restricted cash held in restricted deposits | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 8–9 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| $2,500 million 4.25% Senior Notes due December 15, 2027 | Senior notes | 568 | 569 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 568 | Not applicable | 4.25% | fixed | Not applicable | Not applicable | Not applicable | 2027-12-15 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Remaining USD 569 million par redeemed in full in October 2026, after the balance sheet date |
| $2,300 million 2.45% Senior Notes due July 15, 2028 | Senior notes | 2,101 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 2,101 | Not applicable | 2.45% | fixed | Not applicable | Not applicable | Not applicable | 2028-07-15 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Repurchased USD 200 million par in the nine months of 2026 |
| $3,500 million 4.625% Senior Notes due December 15, 2029 | Senior notes | 3,277 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 3,277 | Not applicable | 4.625% | fixed | Not applicable | Not applicable | Not applicable | 2029-12-15 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Carrying value as printed |
| $2,000 million 3.375% Senior Notes due February 15, 2030 | Senior notes | 2,000 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 2,000 | Not applicable | 3.375% | fixed | Not applicable | Not applicable | Not applicable | 2030-02-15 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Carrying value as printed |
| $2,200 million 3.00% Senior Notes due October 15, 2030 | Senior notes | 2,200 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 2,200 | Not applicable | 3.00% | fixed | Not applicable | Not applicable | Not applicable | 2030-10-15 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Carrying value as printed |
| $2,200 million 2.50% Senior Notes due March 1, 2031 | Senior notes | 2,200 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 2,200 | Not applicable | 2.50% | fixed | Not applicable | Not applicable | Not applicable | 2031-03-01 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Carrying value as printed |
| $1,300 million 2.625% Senior Notes due August 1, 2031 | Senior notes | 1,300 | Not supplied: the outstanding principal is not printed at 2026-09-30 | Not applicable | Not applicable | Unsecured (the annual report calls the senior notes senior unsecured notes in its fair value policy) | Senior (stated as senior unsecured notes in the annual report fair value policy) | USD | 1,300 | Not applicable | 2.625% | fixed | Not applicable | Not applicable | Not applicable | 2031-08-01 | 0 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; Carrying value as printed |
| Term Loan Facility | Term loan | 1,963 | Not supplied: only a rounded USD 2.0 billion of borrowings is stated | Not supplied: the debt table prints 1,963 and the discussion states USD 2.0 billion rounded | 2,000 | Not supplied: security not stated | Not supplied: ranking not stated | USD | 1,963 | Not applicable | Not supplied: the margin depends on the corporate rating and its level at 2026-09-30 is not stated | floating | Not supplied: the benchmark rate is not named | Not supplied: not stated | Not supplied: not stated | 2030-03-05 | Not supplied: the repayment schedule by year is not printed | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 21; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 159; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 47 |
| Revolving Credit Facility | Revolving credit facility | 0 | 0 | 0 | 4,000 | Not supplied: security not stated | Not supplied: ranking not stated | USD | 0 | Not applicable | Not supplied: the margin at 2026-09-30 is not stated; the annual report states the base rate plus 0.25% at 2025-12-31 | floating | Not supplied: the benchmark rate is not named | Not supplied: not stated | Not supplied: not stated | 2030-03-05 | Not applicable | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 47; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 159 |
| Debt issuance costs (netted in total debt) | Financing cost adjustment | -67 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -67 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total revenues | LTM | USD 194,777m | USD 154,170m | USD 145,052m | USD 203,895m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | FY2025 plus 9M 2026 less 9M 2025; includes premium tax revenue |
| EBITDA (Reported, derived) | LTM | USD -4,775m | USD 4,828m | USD -3,729m | USD 3,782m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Derived from statement lines; includes the fourth quarter 2025 impairment |
| Impairment | LTM | USD 7,311m | USD 0m | USD 6,798m | USD 513m | Estimated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | 9M 2026 impairment is printed as a dash; nil is used here because the 9M 2026 operating expense lines sum to the printed total without it (Analyst Judgement); see the gap list |
| EBITDA before impairment (memo) | LTM | USD 2,536m | USD 4,828m | USD 3,069m | USD 4,295m | Estimated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Analyst Judgement memo; not used in checked ratios |
| Net earnings (loss) | LTM | USD -6,677m | USD 2,561m | USD -5,577m | USD 1,461m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | FY2025 plus 9M 2026 less 9M 2025 |
| Net cash from operating activities | LTM | USD 5,088m | USD 4,287m | USD 4,651m | USD 4,724m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Swings with the timing of pass-through payments |
| Capital expenditures | LTM | USD 767m | USD 568m | USD 554m | USD 781m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Shown as positive outflows |
| Cash interest paid | LTM | USD 647m | USD 438m | USD 458m | USD 627m | Calculated | 10-K_2025-12-31_cnc-20251231.htm.jsonl; 10-Q_2026-09-30_cnc-20260930.htm.jsonl | Cash paid, not interest expense |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / reported EBITDA | 18,533 | Net debt data, FY2024 / 2024-12-31 | 6,200 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 2.99 | Calculated | Tier 1 (audited statements) | Carrying-value debt; EBITDA derived, not issuer-stated |
| Total debt / EBITDA | Total debt / reported EBITDA | 17,401 | Net debt data, FY2025 / 2025-12-31 | -4,775 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: reported EBITDA for FY2025 is negative after a USD 7,311 million impairment, so there is no positive denominator | Not Calculable | Tier 1 (audited statements) | Carrying-value debt; EBITDA derived, not issuer-stated |
| Total debt / EBITDA | Total debt / reported EBITDA | 15,542 | Net debt data, 2026-09-30 | 3,782 | T4.8 EBITDA (Reported, derived), LTM | 2026-09-30 | USD | US$m | 4.11 | Calculated | Tier 1 and 2b (audited year plus unaudited interim) | Carrying-value debt; EBITDA derived, not issuer-stated; last twelve months to 2026-09-30 |
| Net debt / EBITDA | Net debt / reported EBITDA | 4,470 | Net debt data, FY2024 / 2024-12-31 | 6,200 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 0.72 | Calculated | Tier 1 (audited statements) | Net debt uses consolidated cash, most of which is held by regulated subsidiaries; EBITDA derived |
| Net debt / EBITDA | Net debt / reported EBITDA | -487 | Net debt data, FY2025 / 2025-12-31 | -4,775 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: reported EBITDA for FY2025 is negative after a USD 7,311 million impairment, so there is no positive denominator | Not Calculable | Tier 1 (audited statements) | Net debt uses consolidated cash, most of which is held by regulated subsidiaries; EBITDA derived |
| Net debt / EBITDA | Net debt / reported EBITDA | -5,158 | Net debt data, 2026-09-30 | 3,782 | T4.8 EBITDA (Reported, derived), LTM | 2026-09-30 | USD | US$m | -1.36 | Calculated | Tier 1 and 2b (audited year plus unaudited interim) | Net debt uses consolidated cash, most of which is held by regulated subsidiaries; EBITDA derived; last twelve months |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 6,200 | T4.4 EBITDA (Reported), FY2024 | 688 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 9.01 | Calculated | Tier 1 (audited statements) | Cash interest paid, not interest expense; EBITDA derived |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | -4,775 | T4.4 EBITDA (Reported), FY2025 | 647 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | -7.38 | Calculated | Tier 1 (audited statements) | Cash interest paid, not interest expense; EBITDA derived; negative in FY2025 because of the impairment |
| EBITDA / cash interest | Reported EBITDA / cash interest paid | 3,782 | T4.8 EBITDA (Reported, derived), LTM | 627 | T4.8 Cash interest paid, LTM | 2026-09-30 | USD | US$m | 6.03 | Calculated | Tier 1 and 2b (audited year plus unaudited interim) | Cash interest paid, not interest expense; EBITDA derived |
| (EBITDA - Capex) / cash interest | (EBITDA - capital expenditures) / cash interest paid | 5,556 | T4.4 EBITDA less T4.5 capital expenditures, FY2024 / 2024-12-31 | 688 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 8.08 | Calculated | Tier 1 and 2b | EBITDA derived |
| (EBITDA - Capex) / cash interest | (EBITDA - capital expenditures) / cash interest paid | -5,542 | T4.4 EBITDA less T4.5 capital expenditures, FY2025 / 2025-12-31 | 647 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | -8.57 | Calculated | Tier 1 and 2b | EBITDA derived; negative in FY2025 because of the impairment |
| (EBITDA - Capex) / cash interest | (EBITDA - capital expenditures) / cash interest paid | 3,001 | T4.4 EBITDA less T4.5 capital expenditures, 2026-09-30 | 627 | T4.8 Cash interest paid, LTM | 2026-09-30 | USD | US$m | 4.79 | Calculated | Tier 1 and 2b | EBITDA derived |
| CFO / total debt (%) | Net cash from operating activities / total debt x 100 | 154 | T4.5 Net Cash from Operating Activities | 18,533 | Net debt data, FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | 0.83 | Calculated | Tier 1 and 2b | Operating cash flow swings with the timing of pass-through payments |
| CFO / total debt (%) | Net cash from operating activities / total debt x 100 | 5,088 | T4.5 Net Cash from Operating Activities | 17,401 | Net debt data, FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 29.24 | Calculated | Tier 1 and 2b | Operating cash flow swings with the timing of pass-through payments |
| CFO / total debt (%) | Net cash from operating activities / total debt x 100 | 4,724 | T4.8 Net cash from operating activities, LTM | 15,542 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 30.40 | Calculated | Tier 1 and 2b | Operating cash flow swings with the timing of pass-through payments |
| FCF / total debt (%) | Free cash flow (operating cash flow less capital expenditures) / total debt x 100 | -490 | Operating cash flow less capital expenditures | 18,533 | Net debt data, FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | -2.64 | Calculated | Tier 1 and 2b | Free cash flow is levered and includes working capital |
| FCF / total debt (%) | Free cash flow (operating cash flow less capital expenditures) / total debt x 100 | 4,321 | Operating cash flow less capital expenditures | 17,401 | Net debt data, FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 24.83 | Calculated | Tier 1 and 2b | Free cash flow is levered and includes working capital |
| FCF / total debt (%) | Free cash flow (operating cash flow less capital expenditures) / total debt x 100 | 3,943 | Operating cash flow less capital expenditures | 15,542 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 25.37 | Calculated | Tier 1 and 2b | Free cash flow is levered and includes working capital |
| FCF conversion | Free cash flow / EBITDA | -490 | Operating cash flow less capital expenditures | 6,200 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | -0.08 | Calculated | Tier 1 and 2b | EBITDA derived; working capital included in free cash flow |
| FCF conversion | Free cash flow / EBITDA | 4,321 | Operating cash flow less capital expenditures | -4,775 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: reported EBITDA is negative | Not Calculable | Tier 1 and 2b | EBITDA negative after the impairment |
| FCF conversion | Free cash flow / EBITDA | 3,943 | Operating cash flow less capital expenditures | 3,782 | T4.8 EBITDA (Reported, derived), LTM | 2026-09-30 | USD | US$m | 1.04 | Calculated | Tier 1 and 2b | EBITDA derived; working capital included in free cash flow |
| EBITDA margin (%) | EBITDA / total revenues x 100 | 6,200 | T4.4 EBITDA (Reported), FY2024 | 163,071 | T4.4 Total revenues | FY2024 / 2024-12-31 | USD | US$m | 3.80 | Calculated | Tier 1 and 2b | Total revenues include premium tax revenue passed through |
| EBITDA margin (%) | EBITDA / total revenues x 100 | -4,775 | T4.4 EBITDA (Reported), FY2025 | 194,777 | T4.4 Total revenues | FY2025 / 2025-12-31 | USD | US$m | -2.45 | Calculated | Tier 1 and 2b | Total revenues include premium tax revenue passed through |
| EBITDA margin (%) | EBITDA / total revenues x 100 | 3,782 | T4.8 EBITDA (Reported, derived), LTM | 203,895 | T4.8 Total revenues, LTM | 2026-09-30 | USD | US$m | 1.85 | Calculated | Tier 1 and 2b | Total revenues include premium tax revenue passed through |
| Capex / revenue (%) | Capital expenditures / total revenues x 100 | 644 | T4.5 Capital expenditures | 163,071 | T4.4 Total revenues | FY2024 / 2024-12-31 | USD | US$m | 0.39 | Calculated | Tier 1 and 2b | Total capital expenditures |
| Capex / revenue (%) | Capital expenditures / total revenues x 100 | 767 | T4.5 Capital expenditures | 194,777 | T4.4 Total revenues | FY2025 / 2025-12-31 | USD | US$m | 0.39 | Calculated | Tier 1 and 2b | Total capital expenditures |
| Capex / revenue (%) | Capital expenditures / total revenues x 100 | 781 | T4.8 Capital expenditures, LTM | 203,895 | T4.8 Total revenues, LTM | 2026-09-30 | USD | US$m | 0.38 | Calculated | Tier 1 and 2b | Total capital expenditures |
| Liquidity / total debt | (Cash and cash equivalents + undrawn revolver) / total debt | 21,888 | Cash and cash equivalents plus undrawn revolving credit facility | 17,401 | Net debt data, FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 1.26 | Calculated | Tier 1 and 2b | Consolidated cash is mostly held by regulated subsidiaries and is not all available to the parent |
| Liquidity / total debt | (Cash and cash equivalents + undrawn revolver) / total debt | 24,700 | Cash and cash equivalents plus undrawn revolving credit facility | 15,542 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 1.59 | Calculated | Tier 1 and 2b | Consolidated cash is mostly held by regulated subsidiaries and is not all available to the parent |
| Liquidity / total debt | (Cash and cash equivalents + undrawn revolver) / total debt | Not calculable: the 2024 undrawn commitment is not stated | Not supplied | 18,533 | Net debt data, FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the 2024 undrawn commitment is not stated | Not Calculable | Tier 1 and 2b | Revolver commitment at 2024-12-31 not stated in the sources |
| Total revenues growth (%) | Total revenues FY2025 / total revenues FY2024 - 1, x 100 | 194,777 | T4.4 Total revenues, FY2025 | 163,071 | T4.4 Total revenues, FY2024 | FY2025 | USD | US$m | 19.44 | Calculated | Tier 1 and 2b | Includes premium tax revenue |
| Total debt / EBITDA before impairment (memo) | Total debt / EBITDA before impairment | 15,542 | Net debt data, 2026-09-30 | 4,295 | T4.8 EBITDA before impairment (memo), LTM | 2026-09-30 | USD | US$m | 3.62 | Estimated | Tier 1 and 2b | Analyst Judgement memo; not the reported-EBITDA ratio |
| Debt to total capital (%) | Total debt / (total debt + total equity) x 100 | 15,542 | Net debt data, 2026-09-30 | 37,825 | Total debt plus total equity, 2026-09-30 | 2026-09-30 | USD | US$m | 41.09 | Calculated | Tier 1 and 2b | Issuer states 41.1% on the same definition; the covenant definition is not available |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Margin | Health benefits ratio (issuer-reported, period flow) | 88.3% | 91.9% | 91.1% | 89.9% | Worse in 2025, better in 2026 | Medical costs over premium revenues as the issuer defines it; excludes premium tax revenue |
| Leverage | Debt to capitalization (issuer-reported, period end) | 41.2% | 46.5% | 45.5% | 41.1% | Lower in 2026 | Total debt over total debt plus total equity; the credit agreement maximum is 0.60 to 1.00 on its own definition, which is not available |
| Operating | Days in claims payable (period end) | 53 | 46 | 48 | 48 | Up from year end 2025, level with a year earlier | Medical claims liability over average daily expense; the issuer measure |
| Operating | Total at-risk membership (period end) | 25,853,600 | 27,633,500 | 27,968,100 | 25,698,200 | Lower in 2026 | Excludes the TRICARE eligibles of 2024; Marketplace membership fell sharply in 2026 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Issuer unadjusted EBITDA; none stated, so derived from statement lines | Not stated by the issuer; adjusted EPS and adjusted SG&A are the only non-GAAP measures in the releases | All sources | All periods | FY2025 derived EBITDA USD -4,775m includes a USD 7,311m impairment; LTM includes a USD 513m impairment | Financial foundation; Fundamental credit | Derived measure labelled as calculated; memo before impairment shown separately |
| Debt | Carrying value, current plus long-term, net of issuance costs; principal kept apart | Total debt in the debt note equals the carrying value | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 160 | FY2025 | Principal USD 17,493m less carrying USD 17,401m is USD 92m (issuance costs 89m and net discount 3m) | Financial foundation | Carrying value used; principal at 2025-12-31 shown in the reconciliation; principal at 2026-09-30 not printed |
| Cash and net debt | Cash & Equivalents on the balance sheet; no netting of restricted or regulated cash | Cash flow statement uses cash including restricted cash; discussion separates regulated and unregulated cash | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 46; EX-99.1_2026-10-27_a20261027ex991pressrelease.htm.jsonl, page 14 | FY2025, 9M 2026 | At 2026-09-30 balance sheet cash is USD 20,700m, cash including restricted cash USD 20,887m, unregulated cash USD 376m of which USD 175m is available for general corporate use | Financial foundation; Liquidity; Fundamental credit | Net debt is shown on consolidated cash as the method defines it and the limitation is stated in every row |
| December 31, 2025 balance sheet lines | One figure per line and date | Annual report: accounts payable and accrued expenses 13,774, total current liabilities 36,696, other long-term liabilities 1,811; 2026 reports: 13,796, 36,718, 1,789; total liabilities 56,691 in both | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-Q_2026-03-31_cnc-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_cnc-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 12 | FY2025 | USD 22m on three lines; total liabilities, total debt and cash unchanged | Financial foundation | Annual report column used for FY2025; the 2026 report figures are logged here; the quarterly reports state a general reclassification of 2025 amounts |
| Revenue | Total revenues as printed | Total revenues include premium tax revenue billed separately; premium and service revenues exclude it | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 | All periods | Premium tax revenue is USD 20,196m of FY2025 total revenues of USD 194,777m | Financial foundation | Margins on total revenues are labelled; the issuer ratios use premium and service revenues |
| Interest | Cash interest paid is the cover denominator | Interest expense printed in the income statement differs from interest paid in the cash flow statement | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 130; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132 | FY2025 | Interest expense USD 678m against interest paid USD 647m | Financial foundation | Cover uses cash interest paid |
| Part D receivable sale (multi-figure event) | One event with all figures and roles | Participating interest sold USD 1,000m; net cash proceeds USD 970m; pre-tax loss USD 30m in SG&A; proceeds used toward redeeming 2027 notes; no recourse for CMS credit losses; sale accounted for as a sale of receivables | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 48; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 14; EX-99.1_2026-04-28_a20260428ex991pressrelease.htm.jsonl, page 4 | 9M 2026 | Receivable derecognised at USD 1,000m for USD 970m of cash; outside the debt figure | Financial foundation; Liquidity | Operating cash flow includes the proceeds; the sale is not netted against debt |
| Lease liabilities | Lease liabilities the issuer carries on other lines stay outside Total Debt | Operating lease liabilities of USD 761m at 2025-12-31 (146 short-term within accounts payable and accrued expenses, 615 long-term within other long-term liabilities); not stated at 2026-09-30 | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 160 | FY2025 | USD 761m outside total debt of USD 17,401m | Financial foundation; Liquidity | Not added to Total Debt; no lease liability is carried inside the debt lines |
| Letters of credit and surety bonds | Contingent obligations outside Total Debt | Letters of credit of USD 113m (outside the revolving credit facility) and surety bonds of USD 750m at 2026-09-30; USD 120m and USD 784m at 2025-12-31 | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 47; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 160 | FY2025, 9M 2026 | Not debt; no drawing is stated | Financial foundation; Liquidity | Kept outside Total Debt and outside undrawn committed facilities |
| Debt to capital | Total debt divided by total debt plus total equity, as the issuer states it | Credit agreement covenant maximum 0.60 to 1.00 stated by the issuer; the agreement itself is not supplied; the annual report mentions an elective step-up to 0.65 to 1.00 after a material acquisition | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 159; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 47 | 9M 2026 | Issuer ratio 41.1% against the stated maximum of 0.60 to 1.00; covenant capacity is not inferred | Legal & covenants | No covenant capacity is calculated |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Statement tables and net debt for FY2024, FY2025 and 2026-09-30 | Ready with Limitations | EBITDA is derived; closing cash is unsupported where cash moved to held for sale; three December 31, 2025 lines differ by document | Use the annual report column for year end and label the 2026 report figures |
| Leverage and cover metrics | Ready with Limitations | FY2025 EBITDA is negative after the impairment so FY2025 leverage is not calculable; LTM figures use derived EBITDA | Show the before-impairment memo beside the reported ratios |
| Liquidity and parent-level resources | Ready with Limitations | Unregulated cash is USD 376m; regulated cash is not freely available; the 2024 undrawn commitment is not stated | State parent-level liquidity separately from consolidated cash |
| Maturity ladder and refinancing | Ready with Limitations | The ladder is drawn at 2025-12-31; no schedule is printed at 2026-09-30; October 2026 redemption is after the balance sheet date | Adjust the 2025-12-31 ladder only for events the sources state |
| Debt stack, security and ranking | Not Ready | Legal rank and security of the credit facilities and guarantor scope are not stated; executed documents not supplied | Obtain the credit agreement and indentures |
| Quarterly trend | Not Ready | Quarterly columns for Q1, Q2 and Q3 are not tabulated here | Use the quarterly reports directly |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.99 | 0.72 | x | Carrying-value debt over derived reported EBITDA; net debt uses consolidated cash, mostly in regulated subsidiaries |
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA for FY2025 is negative after a USD 7,311 million impairment | Not supplied: reported EBITDA for FY2025 is negative after a USD 7,311 million impairment | x | Reported EBITDA for FY2025 is negative; ratios on derived EBITDA before impairment are in the register as a memo only |
| 2026-09-30 | 4.11 | -1.36 | x | Carrying-value debt over derived reported EBITDA; last twelve months to 2026-09-30; net debt uses consolidated cash, mostly in regulated subsidiaries |

Net debt is negative at the latest date only because consolidated cash is mostly held by regulated subsidiaries, so the net leverage figure is not a measure of parent-level capacity.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 9.01 | x | Derived reported EBITDA over cash interest paid |
| FY2025 / 2025-12-31 | -7.38 | x | Derived reported EBITDA over cash interest paid; negative because of the FY2025 impairment |
| 2026-09-30 | 6.03 | x | Derived reported EBITDA over cash interest paid; last twelve months to 2026-09-30 |

FY2025 cover is negative because EBITDA includes a USD 7,311 million impairment.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 14,063 | Not supplied: the revolving commitment at 2024-12-31 is not stated | US$m | Cash and cash equivalents on the balance sheet, mostly held by regulated subsidiaries |
| FY2025 / 2025-12-31 | 17,888 | 4,000 | US$m | Cash and cash equivalents on the balance sheet, mostly held by regulated subsidiaries; undrawn is the USD 4,000m revolving credit facility with no borrowings |
| 2026-09-30 | 20,700 | 4,000 | US$m | Cash and cash equivalents on the balance sheet, mostly held by regulated subsidiaries; undrawn is the USD 4,000m revolving credit facility with no borrowings |

Unregulated cash is USD 376 million at September 30, 2026, so consolidated cash overstates parent-level liquidity.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 50 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; no schedule is printed at 2026-09-30 |
| 2027 | 2,316 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; no schedule is printed at 2026-09-30 |
| 2028 | 2,400 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; no schedule is printed at 2026-09-30 |
| 2029 | 3,377 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; no schedule is printed at 2026-09-30 |
| 2030 | 5,850 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; no schedule is printed at 2026-09-30 |
| 2031 and later | 3,500 | US$m | Contractual principal at 2025-12-31 as printed in the annual report, by year ending December 31; the last row is the printed Thereafter line; no schedule is printed at 2026-09-30 |

The ladder is drawn at December 31, 2025 and does not reflect the 2026 repurchases or the October 2026 redemption.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Total revenues | 163,071 | 194,777 | 203,895 | US$m | Includes premium tax revenue; last twelve months to 2026-09-30 |
| EBITDA (Reported, derived) | 6,200 | -4,775 | 3,782 | US$m | Derived from statement lines; FY2025 includes a USD 7,311m impairment |
| Net earnings (loss) | 3,294 | -6,677 | 1,461 | US$m | As reported, before noncontrolling interests |
| Net cash from operating activities | 154 | 5,088 | 4,724 | US$m | Swings with the timing of pass-through payments |
| Capital expenditures | 644 | 767 | 781 | US$m | Shown as positive outflows |
| Cash interest paid | 688 | 647 | 627 | US$m | Cash paid, not interest expense |
| Total debt (carrying value) | 18,533 | 17,401 | 15,542 | US$m | Period-end balance, latest column at 2026-09-30 |
| Cash and cash equivalents | 14,063 | 17,888 | 20,700 | US$m | Period-end balance; mostly regulated subsidiaries |
| Net debt | 4,470 | -487 | -5,158 | US$m | Gross debt less consolidated cash |
| Total debt / EBITDA | 2.99 | Not calculable | 4.11 | x | Negative FY2025 EBITDA leaves no ratio |
| Net debt / EBITDA | 0.72 | Not calculable | -1.36 | x | Negative FY2025 EBITDA leaves no ratio |
| EBITDA / cash interest | 9.01 | -7.38 | 6.03 | x | Cash interest paid is the denominator |
| Debt to capitalization (issuer-reported) | 41.2 | 46.5 | 41.1 | % | Period-end value stated by the issuer |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 18,533 | 14,063 | 4,470 | US$m | Reported balance sheet date. Includes senior notes, term loan and revolver borrowings net of issuance costs; no leases or finance obligations are carried inside it; principal is not printed at 2024-12-31. Cash is consolidated cash and cash equivalents, mostly regulated subsidiaries |
| FY2025 / 2025-12-31 | 17,401 | 17,888 | -487 | US$m | Reported balance sheet date. Includes senior notes and the term loan net of issuance costs; no revolver borrowings; no leases or finance obligations are carried inside it; principal USD 17,493m at 2025-12-31. Cash is consolidated cash and cash equivalents, mostly regulated subsidiaries |
| 2026-09-30 | 15,542 | 20,700 | -5,158 | US$m | Reported balance sheet date. Includes senior notes and the term loan net of issuance costs; no revolver borrowings; no leases or finance obligations are carried inside it; principal is not printed at 2026-09-30. Cash is consolidated cash and cash equivalents, mostly regulated subsidiaries |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 17,493 | -92 | 17,401 | US$m | Principal is the sum of the printed aggregate maturities at 2025-12-31; reconciling items are debt issuance costs of 89 and a net discount of 3 (see the calculations); carrying value is total debt in the debt note; the ladder is not available at 2026-09-30 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Redemption of the remaining 2027 senior notes at par | Not supplied: the source states October 2026 only | 1 | -5,157 | -1.36 | US$m | Carrying value of 568 removed from debt and 569 of cash paid, so net debt rises by 1; assumes the payment was made from cash and cash equivalents, which the sources do not state; EBITDA is last-twelve-months derived EBITDA; the redemption is not in the 2026-09-30 balance sheet; the program increase of USD 2.0 billion in the same month changes no balance |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 163,071 | 6,200 | US$m | Twelve months; total revenues; the EBITDA column is reported EBITDA derived from statement lines because the issuer states no adjusted EBITDA |
| FY2025 | 194,777 | -4,775 | US$m | Twelve months; total revenues; reported EBITDA derived, negative after the USD 7,311m impairment |
| LTM to 2026-09-30 | 203,895 | 3,782 | US$m | Twelve months constructed as FY2025 plus 9M 2026 less 9M 2025; reported EBITDA derived |

The EBITDA column is reported EBITDA derived from statement lines, not an issuer-adjusted measure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: the legal rank of the credit facilities and the guarantor scope are not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | US$m | The annual report calls the senior notes senior unsecured notes only in its fair value policy; the security and rank of the term loan and revolver and every guarantor scope are not stated, so no facility can be ranked |

No facility is ranked because the legal rank, security and guarantors of the credit facilities are not stated in the sources.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA (derived) | Not supplied: the issuer states no adjusted EBITDA and no add-backs, so no bridge exists | US$m | Opening measure is reported EBITDA derived from statement lines; the closing measure is the issuer-adjusted EBITDA, which is not stated |
| Adjusted EBITDA (issuer-stated) | Not supplied: the issuer states no adjusted EBITDA | US$m | No issuer adjusted EBITDA appears in any source |

No bridge is stated because the issuer reports neither an EBITDA nor an adjusted EBITDA.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 19 |
| Calculated | 12 |
| Assumption-Based | 1 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 23 |
| Fields total | 25 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 14 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| C1 | Total debt FY2024 | Current portion 110 plus long-term debt 18,423 | 18,533 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158 |
| C2 | Total debt FY2025 | Current portion 50 plus long-term debt 17,351 | 17,401 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158 |
| C3 | Total debt at 2026-09-30 | Current portion 88 plus long-term debt 15,454 | 15,542 | US$m | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20 |
| C4 | Net debt FY2024 | Gross debt 18,533 less cash 14,063 | 4,470 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129 |
| C5 | Net debt FY2025 | Gross debt 17,401 less cash 17,888 | -487 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 129 |
| C6 | Net debt at 2026-09-30 | Gross debt 15,542 less cash 20,700 | -5,158 | US$m | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8 |
| C7 | EBITDA (Reported, derived) by column | FY2024: 3,294 + 963 + 702 + 549 + 692; FY2025: -6,677 + -51 + 678 + 590 + 685; 9M 2025: -5,577 + 392 + 510 + 430 + 516; 9M 2026: 2,561 + 902 + 466 + 411 + 488 | FY2024 6,200; FY2025 -4,775; 9M 2025 -3,729; 9M 2026 4,828 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| C8 | Reconciling items FY2025 | Debt issuance costs -89 plus net discount of senior notes and term loan -3, where the net discount is carrying value of senior notes 15,490 plus term loan 2,000 less principal 17,493 (17,490 - 17,493 = -3); -89 + -3 | -92 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 160 |
| C9 | Check of carrying value FY2025 | Principal 17,493 plus reconciling items -92 | 17,401 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 160 |
| C10 | LTM EBITDA (Reported, derived) and LTM leverage | FY2025 -4,775 plus 9M 2026 4,828 less 9M 2025 -3,729 = 3,782; total debt 15,542 / 3,782 = 4.11 | 3,782 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| C11 | LTM cash interest and cover | FY2025 647 plus 9M 2026 438 less 9M 2025 458 = 627; EBITDA 3,782 / 627 = 6.03 | 627 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 11 |
| C12 | LTM impairment and EBITDA before impairment | Impairment FY2025 7,311 plus 9M 2026 nil less 9M 2025 6,798 = 513; EBITDA 3,782 + 513 = 4,295; total debt 15,542 / 4,295 = 3.62 | 4,295 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 9 |
| C13 | Debt change since year end 2025 | Total debt 17,401 less 15,542 | 1,859 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 158; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 20 |
| C14 | Cash held outside unregulated entities at 2026-09-30 | Cash and cash equivalents 20,700 less unregulated cash and cash equivalents 376 | 20,324 | US$m | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 46 |
| C15 | Cash including restricted cash less balance sheet cash at year end 2025 | Printed 17,957 less 17,888 | 69 | US$m | 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 132 |
| C16 | Undrawn revolving credit facility | Commitment 4,000 less borrowings 0 | 4,000 | US$m | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, page 47; 10-K_2025-12-31_cnc-20251231.htm.jsonl, page 159 |
| C17 | Pro forma net debt after the October 2026 redemption | Debt 15,542 less 568 = 14,974; cash 20,700 less 569 = 20,131; 14,974 less 20,131 | -5,157 | US$m | 10-Q_2026-09-30_cnc-20260930.htm.jsonl, pages 20–21 |

## Gaps

- The issuer states no EBITDA in any source, so EBITDA is derived from statement lines for FY2024, FY2025, 9M 2025 and 9M 2026; this restricts leverage and cover to a derived measure, and the action is to keep any issuer-adjusted EBITDA as a separate labelled figure if one is later supplied. Severity: Medium.
- Reported EBITDA for FY2025 is negative after a USD 7,311 million impairment, so total debt and net debt to EBITDA are not calculable for that year; the action is to read the memo before impairment, which is an analyst judgement. Severity: Medium.
- Consolidated cash and cash equivalents of USD 20,700 million at September 30, 2026 include cash held by regulated subsidiaries, and unregulated cash is only USD 376 million of which USD 175 million is available for general corporate use, so net debt of USD -5,158 million is not a parent-level measure; the action is to assess parent liquidity separately from consolidated cash. Severity: High.
- Closing cash for FY2025 and 9M 2026 is not supported by opening cash plus net change because the statements print a separate reclassification of cash to held for sale of USD 138 million and USD 103 million, so the closing cash cells are not supplied; the action is to read the printed closing balances in the basis column. Severity: Low.
- Income statement lines printed as a dash are shown as not supplied, not zero: impairment for 9M 2026, gain on debt extinguishment for FY2024 and 9M 2025, and earnings attributable to noncontrolling interests for 9M 2026; the totals are not affected, and the 9M 2026 impairment is read as nil only in the last-twelve-months memo because the operating expense lines sum to the printed total without it. Severity: Low.
- Cash flow statement lines printed as a dash are shown as not supplied, not zero: impairment for 9M 2026, gain on debt extinguishment for FY2024 and 9M 2025, divestiture proceeds for FY2025 and 9M 2025, proceeds from long-term debt for 9M 2026, purchase of noncontrolling interest for FY2024 and 9M 2026, cash reclassified to held for sale for FY2024 and 9M 2025, and the effect of exchange rate changes for FY2025, which the interim statements do not print at all; the activity totals do not depend on them. Severity: Low.
- The revolving credit commitment at December 31, 2024 is not stated in the sources, so undrawn committed facilities and liquidity to debt for FY2024 are not supplied; the action is to obtain the former credit agreement terms. Severity: Low.
- No maturity schedule is printed at September 30, 2026, so the maturity ladder and the principal reconciliation are drawn at December 31, 2025 and do not reflect 2026 repurchases of USD 1,847 million par of the 2027 and 2028 notes or the October 2026 redemption; the action is to apply only the events the sources state. Severity: Medium.
- The outstanding principal of each senior note at September 30, 2026 is not printed except the USD 569 million remaining on the 2027 notes, and the term loan principal is stated only as a rounded USD 2.0 billion against 1,963 in the debt table; the action is to obtain the indentures and the credit agreement. Severity: Low.
- The legal rank and security of the term loan and revolver and every guarantor scope are not stated, so the debt stack is not supplied; only the fair value policy calls the senior notes senior unsecured notes. The action is to obtain the executed documents. Severity: Medium.
- The issuer states no adjusted EBITDA and no add-backs, so the EBITDA bridge is not supplied. Severity: Low.
- Three December 31, 2025 balance sheet lines differ by USD 22 million between the annual report and the 2026 reports, and the quarterly reports state only a general reclassification of 2025 amounts; the annual report column is used and the difference is logged. Severity: Low.
- Quarterly columns for the first, second and third quarters and the six-month period are not tabulated, and balance sheets at March 31 and June 30, 2026 are not tabulated, so quarter-on-quarter trends are outside these tables; the action is to use the quarterly reports for quarterly earnings. Severity: Low.
- The credit agreement covenant definitions of debt and capital are not supplied, so covenant capacity is not calculated; the issuer reports debt to capital of 41.1% against a stated maximum of 0.60 to 1.00. The action is to obtain the executed credit agreement. Severity: Medium.
- The quarterly reports state no SEC filing date, only signature dates, so document dates in the sources table are signature dates. Severity: Low.

## Next module
The orchestrator selects the next module.
