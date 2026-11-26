---
module_id: CP-1
module_name: FinancialFoundation
issuer_id: cnm-1856525
analysis_date: 2026-11-18
run_id: cnm-1856525-2026-11-18-credit_snapshot-host
method_version: deploy-v-r14
pathway: credit_snapshot
---

# CP-1 Financial foundation for Core & Main, Inc. (cnm-1856525), as of 2026-11-18

## Request

Financial foundation for Core & Main, Inc. (issuer id cnm-1856525), as of 2026-11-18, on the credit snapshot pathway. The scope is the issuer's income statement, cash flow statement, balance sheet, debt and liquidity, with calculated leverage and cover ratios where the sources allow.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-01-28_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 28, 2024 | 2024-03-19 (signature page and auditor's report) | 7d49a2886a7b87956b9b3c00170119569c12f68ef6f9901dc1e2c0c33d36ab4a | Fiscal 2023 debt note (principal USD 1,893 million) and availability under the revolving facility at that date. |
| 10-K_2025-02-02_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended February 2, 2025 | 2025-03-25 (auditor's report; the signature page prints 2024-03-25) | e22a4f864a5fbd988927e6678e529c0188660ca06badc8d8df757277e51e3278 | Fiscal 2023 and fiscal 2024 income statement, cash flow statement, balance sheet, EBITDA reconciliation, debt note and revolving facility availability. |
| 10-Q_2026-05-03_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 3, 2026 | 2026-06-10 (signature page) | e961340eaef56046003419c49345b8385cc4758b7ed1e0f6ebe7c011c8ca7772 | First-quarter fiscal 2026 and 2025 statements, balance sheet at 2026-05-03, EBITDA reconciliation, revolving facility availability. |
| 10-Q_2026-08-02_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended August 2, 2026 | 2026-09-09 (signature page) | 28b726b3f6668bcdd97245f0621ab2882b59eb8ea624fb56e28ade1353c29582 | Second-quarter and six-month statements, balance sheet at 2026-08-02 and 2026-02-01, debt note, maturities, liquidity, product-category net sales, subsequent events. |
| EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 first quarter results | 2026-06-10 (dateline) | 477e5f3e43d234f37f42b280aadf2b1519060085427091f1fc6c99c4a3062f24 | First-quarter net debt table (principal at 2026-05-03). |
| EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the launch of a senior notes offering | 2026-06-25 (dateline) | cb8f146c390230ebda3e60db4c869cf724b254ec5081fea6559ffb69b3f490ec | Guarantor group and intended use of proceeds of the notes due 2034. |
| EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 second quarter results | 2026-09-09 (dateline) | da395e9c6715bf9c1e1ddee4a29d0807fc00729e5c3b140e2d774d335674b8b5 | Net debt table at 2026-08-02, reported share repurchases after quarter end, outlook, issuer margins. |

| Handoff module | sha256 | Use |
| --- | --- | --- |
| Source readiness (CP-0) | 67d2612aff08ec2c003fef819ef1089cc758031524f3ceaeac38cbc3f4c2730a | Source inventory, document dates, perimeter and the missing-document list. |

## Findings

### Bottom line

Debt of USD 2,449 million is backed by USD 1,538 million of cash and revolver availability, but leverage and interest cover can be stated only for fiscal 2023 and 2024, because the annual report for the year ended February 1, 2026 is missing.
Basis: calculation TD5; calculation LQ1; 10-Q_2026-08-02_cnm.htm.jsonl, page 11

On balance-sheet carrying value, net debt was USD 2,137 million at August 2, 2026, below USD 2,253 million at the end of fiscal 2024, when it was 2.49x reported EBITDA, even though the company repurchased USD 257 million of shares in the first half of fiscal 2026 and raised USD 293 million of net new debt. A further USD 11 million of repurchases after the quarter end lifts pro forma net debt to USD 2,148 million.
Basis: calculation ND5; calculation ND2; calculation LV2; calculation DF1; calculation PB1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1

Reported EBITDA covered cash interest paid 8.47x in fiscal 2023 and 4.59x in fiscal 2024; no later cover ratio can be stated.
Basis: calculation CV1; calculation CV2

### Key findings

Net debt on carrying value rose from USD 1,877 million at the end of fiscal 2023 to USD 2,253 million at the end of fiscal 2024, taking net debt to reported EBITDA from 2.11x to 2.49x, because acquisitions of USD 741 million and share repurchases of USD 176 million were funded beside operating cash flow of USD 621 million. Net debt then fell to USD 1,928 million at the end of fiscal 2025 and rose by USD 209 million to USD 2,137 million by August 2, 2026, as USD 257 million of share repurchases and USD 42 million of tax receivable agreement payments outweighed free cash flow of USD 112 million. The direction since fiscal 2024 is lower, but no ratio can be stated for the later dates.
Basis: calculation ND1; calculation ND2; calculation ND3; calculation ND5; calculation NC1; calculation NC3; calculation FC4; calculation LV1; calculation LV2; 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-08-02_cnm.htm.jsonl, page 8

Reported EBITDA covered cash interest paid 4.59x in fiscal 2024 against 8.47x in fiscal 2023, because interest expense rose from USD 81 million to USD 142 million after the acquisitions and larger borrowings, and cash interest paid rose from USD 105 million to USD 197 million. In the first half of fiscal 2026 cash interest paid was USD 59 million against USD 49 million while interest expense eased from USD 61 million to USD 59 million; without trailing twelve-month EBITDA the current cover ratio is not established.
Basis: calculation CV1; calculation CV2; 10-K_2025-02-02_cnm.htm.jsonl, pages 106, 108; 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8

Liquidity at August 2, 2026 was USD 1,538 million: USD 312 million of cash and about USD 1,226 million of availability under the undrawn USD 1,250 million revolver, which depends on the borrowing base; an April 2026 amendment extended its maturity from 2029 to 2031. The July 2026 refinancing replaced the 2028 term loan with a USD 800 million term loan due 2033 and USD 750 million of senior notes due 2034, so scheduled principal is only USD 17 million a year until the USD 928 million term loan falls due in 2031.
Basis: calculation LQ1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 18, 19, 36

Operating cash flow was USD 144 million in the first half of fiscal 2026 against USD 111 million, after working capital absorbed USD 242 million (USD 255 million a year earlier), and free cash flow after USD 32 million of capital expenditure was USD 112 million. Share repurchases and tax receivable agreement payments of USD 299 million exceeded that by USD 187 million, and net new debt of USD 293 million covered the gap, so shareholder returns in the half were partly debt-funded.
Basis: calculation FC4; calculation FC3; calculation WC1; calculation WC2; calculation SR1; calculation SR2; calculation DF1; 10-Q_2026-08-02_cnm.htm.jsonl, page 8

Outside debt, the balance sheet carries USD 644 million of tax receivable agreement liabilities, whose cash payments were USD 42 million in the first half against USD 18 million, USD 300 million of operating lease liabilities and USD 1,223 million of supplier purchase obligations that are generally cancellable; none is in the debt or net debt figures.
Basis: calculation LS1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8, 40

Reported EBITDA and Adjusted EBITDA are the issuer's own figures, with add-backs of USD 25 million in fiscal 2024, so the choice of measure moves net leverage by only 0.07x; depreciation and amortization is stated as USD 183 million, USD 186 million and USD 194 million on three bases in fiscal 2024, and fiscal 2024 had 53 weeks.
Basis: calculation AB1; calculation LV2; calculation LV3; calculation LV4; 10-K_2025-02-02_cnm.htm.jsonl, pages 78, 97, 106, 108

### Contrary evidence and what would change the view

The strongest case against reading the lower net debt as deleveraging is seasonality and funding: working capital absorbed USD 242 million in the half and part of the repurchases was debt-funded, so the year-end balance for fiscal 2026 could look different from the August balance. The case for stability is that the revolver was undrawn at August 2, 2026 and at the end of fiscal 2025, and the earliest bullet maturity is in 2031. A fiscal 2025 annual report showing EBITDA far below the USD 905 million of fiscal 2024, or third-quarter results showing net debt staying near USD 2,137 million after the seasonal working capital outflow reverses, would change the view.
Basis: calculation WC1; calculation DF1; calculation ND5; 10-Q_2026-08-02_cnm.htm.jsonl, pages 11, 18, 36

### Limitations

- Trailing twelve-month EBITDA, cash interest and operating cash flow cannot be built because no fiscal 2025 annual statements are supplied, so leverage and interest cover are stated only at the year ends of fiscal 2023 and fiscal 2024.
  Basis: calculation LT1; 10-Q_2026-08-02_cnm.htm.jsonl, page 11
- Fiscal 2024 had 53 weeks, so growth and cover comparisons between fiscal 2023 and fiscal 2024 are not like for like.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 78, 111
- Debt is stated at carrying value, net of issuance costs, while the company's own net debt is stated gross of them; the USD 29 million difference at August 2, 2026 is derived and not itemized in the quarterly report.
  Basis: calculation RC1; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 10, 12
- Maintenance and growth capital expenditure are not disclosed, so free cash flow here is operating cash flow less total capital expenditure.
  Basis: calculation FC4; 10-Q_2026-08-02_cnm.htm.jsonl, page 8

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-01-28_cnm.htm.jsonl | Annual report (Form 10-K) | Fiscal 2023 (year ended 2024-01-28) with fiscal 2022 and 2021 comparatives | USD | millions | Core & Main, Inc. consolidated | US GAAP | Tier 1 audited statements | Fiscal 2023 debt principal and revolver availability; cross-check of fiscal 2023 lines | Superseded for balances by later reports; fiscal 2023 lines are re-presented in the fiscal 2024 report |
| 10-K_2025-02-02_cnm.htm.jsonl | Annual report (Form 10-K) | Fiscal 2024 (year ended 2025-02-02) with fiscal 2023 and 2022 comparatives | USD | millions | Core & Main, Inc. consolidated | US GAAP | Tier 1 audited statements; EBITDA tables are unaudited non-GAAP | Annual statements for fiscal 2023 and 2024, debt note, EBITDA reconciliation | 53-week year; one annual cycle behind the year ended 2026-02-01 |
| 10-Q_2026-05-03_cnm.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2026-05-03 with 2025-05-04 comparatives; balance sheet at 2026-02-01 | USD | millions | Core & Main, Inc. consolidated | US GAAP | Tier 2b unaudited | First-quarter statements and balance sheet | Unaudited; no auditor review stated |
| 10-Q_2026-08-02_cnm.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-08-02 with 2025-08-03 comparatives; balance sheet at 2026-02-01 | USD | millions | Core & Main, Inc. consolidated | US GAAP | Tier 2b unaudited | Latest statements, debt, maturities, liquidity, subsequent events | Unaudited; no auditor review stated; carrying value by instrument not disclosed |
| EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-05-03 | USD | millions | Core & Main, Inc. consolidated | US GAAP and issuer non-GAAP | Tier 2b unaudited | Principal debt at 2026-05-03 | Net debt stated gross of issuance costs |
| EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl | Offering announcement (Exhibit 99.1) | No financial period; announced 2026-06-25 | USD | millions | Core & Main LP as issuer; guarantors Core & Main Midco, LLC and Core & Main Intermediate GP, LLC | Not applicable | Tier 2b issuer announcement | Guarantor group and intended use of proceeds | Launch notice only; terms are in the second-quarter report |
| EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and six months ended 2026-08-02 | USD | millions | Core & Main, Inc. consolidated | US GAAP and issuer non-GAAP | Tier 2b unaudited | Principal debt at 2026-08-02, repurchases after quarter end, margins | Net debt stated gross of issuance costs |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Core & Main, Inc. | Registrant and reporting entity; holding company whose main asset is its interest in Core & Main Holdings, LP | Sunday nearest January 31 (52 or 53 weeks) | USD | millions | Consolidated with Core & Main Holdings, LP and Core & Main LP; non-controlling interests are Holdings partnership interests not held by the registrant | US GAAP | FY2023, FY2024, Q1 2025, Q1 2026, Q2 2025, Q2 2026, H1 2025, H1 2026; balance sheets at FY2023, FY2024, FY2025, Q1 2026, Q2 2026 |
| Core & Main Holdings, LP | Intermediate partnership consolidated by the registrant | Same as registrant | USD | millions | Included in the registrant's consolidated statements | US GAAP | No separate statements supplied |
| Core & Main LP | Operating entity; borrower under the term loans and revolving facility; issuer of the notes due 2034 | Same as registrant | USD | millions | Included in the registrant's consolidated statements; no separate statements supplied | US GAAP | No separate statements supplied |
| Core & Main Midco, LLC and Core & Main Intermediate GP, LLC | Guarantors of the notes due 2034; direct parent companies of Core & Main LP | Same as registrant | USD | millions | Included in the registrant's consolidated statements | US GAAP | No separate statements supplied |

Fiscal 2024 (year ended 2025-02-02) had 53 weeks; the first six months of fiscal 2026 and of fiscal 2025 each had 26 weeks; fiscal 2026 (ending 2027-01-31) has 52 weeks. Subsequent events after the balance-sheet date of 2026-08-02: the August 2026 repricing of the 2031 Senior Term Loan margin from 2.00% to 1.75%, and USD 11 million of share repurchases after quarter end with no day stated.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Total Debt taken at balance-sheet carrying value | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 12 | Definition | Principal 2,478 (issuer net debt table, USD millions) | Carrying value 2,449 (17 + 2,432, USD millions) | The method sets debt at carrying value, net of unamortized discount and issuance costs; principal is kept in the debt reconciliation | Q2 2026 and every balance-sheet date |
| Fiscal 2023 cash flow lines taken from the later annual report | 10-K_2024-01-28_cnm.htm.jsonl, page 113; 10-K_2025-02-02_cnm.htm.jsonl, page 108 | Presentation | Fiscal 2023 report: Other 7; accrued liabilities 4; other liabilities 1 | Fiscal 2024 report: deferred income tax expense 2; other 5; accrued liabilities 5 | The later filing re-presents the same operating total of 1,069; the later presentation is used and the totals tie | FY2023 |
| Fiscal 2023 financing line label | 10-K_2024-01-28_cnm.htm.jsonl, page 113; 10-K_2025-02-02_cnm.htm.jsonl, page 108 | Label | Repurchase and retirement of partnership interests (1,344) | Repurchase and retirement of equity interests (1,344) | Same amount under the later label | FY2023 |
| Net Cash Change for the first quarter of fiscal 2025 where the statement prints a dash | 10-Q_2026-05-03_cnm.htm.jsonl, page 8 | Derived total | Dash | 0 (operating 77 plus investing -16 plus financing -61; closing 8 less opening 8) | A total the statement leaves as a dash is worked from its components and ties to the cash roll-forward | Q1 2025 |
| EBITDA taken as the issuer states it, with no normalization | 10-K_2025-02-02_cnm.htm.jsonl, page 97; 10-Q_2026-05-03_cnm.htm.jsonl, page 36; 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 | None | Issuer EBITDA 905 and Adjusted EBITDA 930 (fiscal 2024, USD millions) | Same figures | The issuer's unadjusted EBITDA is the primary measure; its adjusted EBITDA is shown beside it and labelled | All periods |
| Fiscal period labels | 10-Q_2026-08-02_cnm.htm.jsonl, page 12 | Label | Fiscal 2024 means the year ended 2025-02-02 | Column header FY2024 | The year in a header is the company's fiscal year | All periods |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | Q1 2025 | Q1 2026 | Q2 2025 | Q2 2026 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 6,702 | 7,441 | 1,911 | 1,910 | 2,093 | 2,145 | 4,004 | 4,055 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Cost of sales | 4,884 | 5,461 | 1,401 | 1,390 | 1,533 | 1,572 | 2,934 | 2,962 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Gross profit | 1,818 | 1,980 | 510 | 520 | 560 | 573 | 1,070 | 1,093 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Selling, general and administrative | 931 | 1,078 | 293 | 299 | 302 | 301 | 595 | 600 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Depreciation and amortization | 147 | 183 | 46 | 44 | 45 | 45 | 91 | 89 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total operating expenses | 1,078 | 1,261 | 339 | 343 | 347 | 346 | 686 | 689 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Operating income | 740 | 719 | 171 | 177 | 213 | 227 | 384 | 404 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Interest expense | 81 | 142 | 30 | 27 | 31 | 32 | 61 | 59 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Other expense | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement prints a dash for this line | 2 | Not supplied: the statement prints a dash for this line | 2 | USD millions | Reported; the comparative periods print a dash, shown as not supplied rather than zero | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Income before provision for income taxes | 659 | 577 | 141 | 150 | 182 | 193 | 323 | 343 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Provision for income taxes | 128 | 143 | 36 | 37 | 41 | 43 | 77 | 80 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Net income | 531 | 434 | 105 | 113 | 141 | 150 | 246 | 263 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Net income attributable to non-controlling interests | 160 | 23 | 5 | 5 | 7 | 6 | 12 | 11 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Net income attributable to Core & Main, Inc. | 371 | 411 | 100 | 108 | 134 | 144 | 234 | 252 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Earnings per share, basic | 2.15 | 2.14 | 0.53 | 0.57 | 0.71 | 0.77 | 1.23 | 1.34 | USD per share | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Earnings per share, diluted | 2.15 | 2.13 | 0.52 | 0.57 | 0.70 | 0.77 | 1.22 | 1.34 | USD per share | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Equity-based compensation (from the EBITDA reconciliation) | 10 | 14 | 5 | 3 | 5 | 4 | 10 | 7 | USD millions | Reported in the EBITDA reconciliation; share-based compensation add-back | 10-K_2025-02-02_cnm.htm.jsonl, page 97; 10-Q_2026-05-03_cnm.htm.jsonl, page 36; 10-Q_2026-08-02_cnm.htm.jsonl, page 41 |
| EBITDA (Reported) | 889 | 905 | 218 | 223 | 259 | 270 | 477 | 493 | USD millions | Reported: issuer EBITDA, net income plus depreciation and amortization (including depreciation in cost of sales), income taxes and interest expense; unadjusted | 10-K_2025-02-02_cnm.htm.jsonl, page 97; 10-Q_2026-05-03_cnm.htm.jsonl, page 36; 10-Q_2026-08-02_cnm.htm.jsonl, page 41 |
| EBITDA (Adjusted) | 910 | 930 | 224 | 226 | 266 | 274 | 490 | 500 | USD millions | Reported: issuer Adjusted EBITDA; adds back equity-based compensation, acquisition expenses and, in fiscal 2023, offering expenses; includes income attributable to non-controlling interests; no cost savings or run-rate add-backs | 10-K_2025-02-02_cnm.htm.jsonl, page 97; 10-Q_2026-05-03_cnm.htm.jsonl, page 36; 10-Q_2026-08-02_cnm.htm.jsonl, page 42 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | Q1 2025 | Q1 2026 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 531 | 434 | 105 | 113 | 246 | 263 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Depreciation and amortization | 154 | 194 | 48 | 47 | 96 | 97 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Equity-based compensation expense | 10 | 14 | 5 | 3 | 10 | 7 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Deferred income tax expense | 2 | 13 | 3 | 6 | 7 | 13 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Other operating items | 5 | 8 | 4 | 2 | 7 | 6 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| (Increase) decrease in receivables | 21 | -2 | -257 | -213 | -300 | -397 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| (Increase) decrease in inventories | 328 | -36 | -163 | -119 | -152 | -155 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| (Increase) decrease in other assets | 2 | -13 | -5 | -1 | -5 | -1 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Increase (decrease) in accounts payable | 11 | 14 | 361 | 301 | 196 | 301 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Increase (decrease) in accrued liabilities | 5 | -5 | -24 | -57 | 6 | 10 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Net Cash from Operating Activities | 1,069 | 621 | 77 | 82 | 111 | 144 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 7; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Capital expenditures | -39 | -35 | -13 | -14 | -23 | -32 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Acquisitions of businesses, net of cash acquired | -231 | -741 | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108 |
| Investment in tax advantaged limited partnerships | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement prints a dash for this line | -17 | USD millions | Reported | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Other investing items | Not supplied: the statement prints a dash for this line | -12 | -3 | -7 | -5 | -7 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Net Cash from Investing Activities | -270 | -788 | -16 | -21 | -28 | -56 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Repurchase and retirement of equity interests | -1,344 | -176 | -39 | -88 | -47 | -257 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Distributions to non-controlling interest holders | -41 | -11 | -2 | -2 | -4 | -4 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Payments pursuant to Tax Receivable Agreements | -5 | -11 | -18 | -42 | -18 | -42 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Borrowings on asset-based revolving credit facility | 665 | 774 | 100 | Not supplied: the statement prints a dash for this line | 100 | Not supplied: the statement prints a dash for this line | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Repayments on asset-based revolving credit facility | -235 | -1,110 | -93 | Not supplied: the statement prints a dash for this line | -93 | Not supplied: the statement prints a dash for this line | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Issuance of long-term debt | Not supplied: the statement prints a dash for this line | 950 | Not supplied: the statement does not present this line for the period | Not supplied: the statement does not present this line for the period | Not supplied: the statement prints a dash for this line | 929 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Repayments of long-term debt | -15 | -223 | -6 | -6 | -12 | -617 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Debt issuance costs | Not supplied: the statement prints a dash for this line | -15 | Not supplied: the statement prints a dash for this line | -2 | Not supplied: the statement prints a dash for this line | -19 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Other financing items | Not supplied: the statement prints a dash for this line | -4 | -3 | 9 | 8 | 14 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Net Cash from Financing Activities | -975 | 174 | -61 | -131 | -66 | 4 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Net Cash Change | -176 | 7 | 0 | -70 | 17 | 92 | USD millions | Reported; Q1 2025 is Calculated as 77 + -16 + -61 = 0 because the statement prints a dash | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Opening Cash | 177 | 1 | 8 | 220 | 8 | 220 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Closing Cash | 1 | 8 | 8 | 150 | 25 | 312 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Cash Interest Paid | 105 | 197 | 14 | 41 | 49 | 59 | USD millions | Reported: cash paid for interest, excluding the effects of the interest rate swap | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| Cash paid for income taxes | 116 | 143 | 29 | 29 | 69 | 40 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-05-03_cnm.htm.jsonl, page 8; 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 1 | 8 | 220 | 150 | 312 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Receivables, net of allowance for credit losses | 973 | 1,066 | 1,048 | 1,259 | 1,439 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Inventories | 766 | 908 | 986 | 1,103 | 1,137 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Prepaid expenses and other current assets | 33 | 43 | 48 | 45 | 49 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Total current assets | 1,773 | 2,025 | 2,302 | 2,557 | 2,937 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Property, plant and equipment, net | 151 | 168 | 178 | 184 | 192 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Operating lease right-of-use assets | 192 | 244 | 287 | 297 | 297 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Intangible assets, net | 784 | 935 | 823 | 791 | 759 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Goodwill | 1,561 | 1,898 | 1,920 | 1,921 | 1,921 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Deferred income taxes (asset) | 542 | 558 | 565 | 561 | 552 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Other assets | 66 | 42 | 10 | 13 | 51 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |
| Total Assets | 5,069 | 5,870 | 6,085 | 6,324 | 6,709 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Current maturities of long-term debt | 15 | 24 | 24 | 24 | 17 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Accounts payable | 504 | 562 | 512 | 814 | 815 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Accrued compensation and benefits | 106 | 123 | 123 | 65 | 89 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Current operating lease liabilities | 55 | 67 | 75 | 77 | 79 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Other current liabilities | 94 | 90 | 140 | 126 | 190 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total current liabilities | 774 | 866 | 874 | 1,106 | 1,190 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Long-term debt | 1,863 | 2,237 | 2,124 | 2,120 | 2,432 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Non-current operating lease liabilities | 138 | 178 | 214 | 223 | 221 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Deferred income taxes (liability) | 48 | 87 | 89 | 89 | 90 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Tax receivable agreement liabilities | 706 | 706 | 680 | 642 | 644 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Other liabilities | 16 | 22 | 30 | 30 | 28 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total Liabilities | 3,545 | 4,096 | 4,011 | 4,210 | 4,605 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total stockholders' equity attributable to Core & Main, Inc. | 1,451 | 1,698 | 1,997 | 2,040 | 2,031 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Non-controlling interests | 73 | 76 | 77 | 74 | 73 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total Equity | 1,524 | 1,774 | 2,074 | 2,114 | 2,104 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Total Debt | 1,878 | 2,261 | 2,148 | 2,144 | 2,449 | USD millions | Calculated: current maturities of long-term debt plus long-term debt, carrying value net of unamortized discount and issuance costs (calculations TD1 to TD5); operating lease liabilities are separate lines and are not included | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 6; 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| Cash & Equivalents | 1 | 8 | 220 | 150 | 312 | USD millions | Reported: cash and cash equivalents | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-Q_2026-05-03_cnm.htm.jsonl, page 5; 10-Q_2026-08-02_cnm.htm.jsonl, page 5 |

### T4.16 Segment revenue

Core & Main reports one operating and reportable segment; the table shows the issuer's net sales by product category, in the issuer's order and labels.

| Business unit | FY2023 | FY2024 | Q2 2025 | Q2 2026 | H1 2025 | H1 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Pipes, valves & fittings products | 4,504 | 5,006 | 1,430 | 1,461 | 2,727 | 2,735 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| Storm drainage products | 985 | 1,147 | 335 | 334 | 630 | 612 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| Fire protection products | 688 | 596 | 155 | 176 | 307 | 354 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| Meter products | 525 | 692 | Not supplied: the category is reported under another label in this period | Not supplied: the category is reported under another label in this period | Not supplied: the category is reported under another label in this period | Not supplied: the category is reported under another label in this period | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| Smart utility products | Not supplied: the category is reported under another label in this period | Not supplied: the category is reported under another label in this period | 173 | 174 | 340 | 354 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| Total net sales | 6,702 | 7,441 | 2,093 | 2,145 | 4,004 | 4,055 | USD millions | Reported | 10-K_2025-02-02_cnm.htm.jsonl, pages 86, 87; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Senior ABL Credit Facility | Asset-based revolving credit facility; no borrowings at 2026-08-02 | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | 1,250 | Secured: substantially all assets of Core & Main LP are pledged for the credit facilities | Senior secured; priority against the term loans is not stated | USD | 0 | Not applicable | Term SOFR plus 1.25% to 1.50%, or alternate base rate plus 0.25% to 0.50%, by borrowing capacity; 0.25% fee on unfunded commitments | Floating | Term SOFR | 125 to 150 | Not applicable | 2031-04-09 | 0 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 36, 39 |
| 2031 Senior Term Loan | Senior secured term loan | Not supplied: carrying value by instrument is not disclosed | 928 | 928 | Not applicable | Secured: substantially all assets of Core & Main LP are pledged for the credit facilities | Senior secured; priority against the revolving facility is not stated | USD | 928 | Not applicable | Term SOFR plus 2.00% at 2026-08-02 (cut to 1.75% in August 2026); weighted average rate 5.66% excluding the swap | Floating | Term SOFR | 200 | 0 | 2031-02-09 | 9.44 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 17, 19, 23, 39 |
| 2033 Senior Term Loan | Senior secured term loan | Not supplied: carrying value by instrument is not disclosed | 800 | 800 | Not applicable | Secured: substantially all assets of Core & Main LP are pledged for the credit facilities | Senior secured; priority against the revolving facility is not stated | USD | 800 | Not applicable | Term SOFR plus 1.75%; weighted average rate 5.48% excluding the swap | Floating | Term SOFR | 175 | 0 | 2033-07-01 | 8.00 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 19, 39 |
| 2034 Senior Notes | Senior unsecured notes issued by Core & Main LP and guaranteed on an unsecured basis by Core & Main Midco, LLC and Core & Main Intermediate GP, LLC | Not supplied: carrying value by instrument is not disclosed | 750 | 750 | Not applicable | Unsecured | Senior unsecured; equal in right of payment with all senior indebtedness of Core & Main LP | USD | 750 | Not applicable | 6.0% per annum, interest paid semi-annually from 2027-01-01 | Fixed | Not applicable | Not applicable | Not applicable | 2034-07-01 | 0 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 39; EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 |
| Financing cost adjustment | Net unamortized discount and issuance costs: carrying value less principal, derived because the quarterly report does not itemize it | -29 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -29 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | calculation RC1; 10-Q_2026-08-02_cnm.htm.jsonl, page 6; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 10, 12 |

The Reporting Currency Amount cells (0, 928, 800, 750 and -29) add to the balance-sheet Total Debt of 2,449 at 2026-08-02.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LTM Net sales | LTM to 2026-08-02 (fiscal 2025 plus H1 2026 less H1 2025) | Not supplied: fiscal 2025 annual statements are not in the supplied documents | USD 4,055m | USD 4,004m | Not calculable: the fiscal 2025 component is not supplied | Not Calculable | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | Stubs are the six months ended 2026-08-02 and 2025-08-03; no component of the fiscal 2025 year is supplied, so no LTM figure is built or estimated |
| LTM EBITDA (Reported) | LTM to 2026-08-02 (fiscal 2025 plus H1 2026 less H1 2025) | Not supplied: fiscal 2025 annual statements are not in the supplied documents | USD 493m | USD 477m | Not calculable: the fiscal 2025 component is not supplied | Not Calculable | 10-Q_2026-08-02_cnm.htm.jsonl, page 41 | Stubs are the six months ended 2026-08-02 and 2025-08-03; no component of the fiscal 2025 year is supplied, so no LTM figure is built or estimated |
| LTM EBITDA (Adjusted) | LTM to 2026-08-02 (fiscal 2025 plus H1 2026 less H1 2025) | Not supplied: fiscal 2025 annual statements are not in the supplied documents | USD 500m | USD 490m | Not calculable: the fiscal 2025 component is not supplied | Not Calculable | 10-Q_2026-08-02_cnm.htm.jsonl, page 42 | Stubs are the six months ended 2026-08-02 and 2025-08-03; no component of the fiscal 2025 year is supplied, so no LTM figure is built or estimated |
| LTM Cash Interest Paid | LTM to 2026-08-02 (fiscal 2025 plus H1 2026 less H1 2025) | Not supplied: fiscal 2025 annual statements are not in the supplied documents | USD 59m | USD 49m | Not calculable: the fiscal 2025 component is not supplied | Not Calculable | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 | Stubs are the six months ended 2026-08-02 and 2025-08-03; no component of the fiscal 2025 year is supplied, so no LTM figure is built or estimated |
| LTM Net Cash from Operating Activities | LTM to 2026-08-02 (fiscal 2025 plus H1 2026 less H1 2025) | Not supplied: fiscal 2025 annual statements are not in the supplied documents | USD 144m | USD 111m | Not calculable: the fiscal 2025 component is not supplied | Not Calculable | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 | Stubs are the six months ended 2026-08-02 and 2025-08-03; no component of the fiscal 2025 year is supplied, so no LTM figure is built or estimated |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,878 | Net debt data row 2024-01-28; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 889 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2024-01-28 | USD | US$m | 2.11 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,877 | Net debt data row 2024-01-28; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 889 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2024-01-28 | USD | US$m | 2.11 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 889 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 105 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 2024-01-28 | USD | US$m | 8.47 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,878 | Net debt data row 2024-01-28; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 910 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2024-01-28 | USD | US$m | 2.06 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,877 | Net debt data row 2024-01-28; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 910 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2024-01-28 | USD | US$m | 2.06 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 910 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 105 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 2024-01-28 | USD | US$m | 8.67 | Calculated | Tier 1 | Fiscal year of 52 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,261 | Net debt data row 2025-02-02; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 905 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2025-02-02 | USD | US$m | 2.50 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,253 | Net debt data row 2025-02-02; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 905 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2025-02-02 | USD | US$m | 2.49 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 905 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 197 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 2025-02-02 | USD | US$m | 4.59 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-stated unadjusted EBITDA; debt at carrying value |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,261 | Net debt data row 2025-02-02; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 930 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2025-02-02 | USD | US$m | 2.43 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,253 | Net debt data row 2025-02-02; 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 930 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 2025-02-02 | USD | US$m | 2.42 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 930 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 197 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 2025-02-02 | USD | US$m | 4.72 | Calculated | Tier 1 | Fiscal year of 53 weeks; issuer-adjusted EBITDA; debt at carrying value |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,148 | Net debt data row 2026-02-01; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,928 | Net debt data row 2026-02-01; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | Not supplied: fiscal 2025 cash interest paid is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,148 | Net debt data row 2026-02-01; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,928 | Net debt data row 2026-02-01; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | No supplied document states it | Not supplied: fiscal 2025 cash interest paid is not in the supplied documents | No supplied document states it | 2026-02-01 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Annual EBITDA and cash interest for fiscal 2025 are not supplied |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,449 | Net debt data row 2026-08-02; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,137 | Net debt data row 2026-08-02; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | Not supplied: trailing twelve-month cash interest paid is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,449 | Net debt data row 2026-08-02; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,137 | Net debt data row 2026-08-02; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: no EBITDA denominator is supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: trailing twelve-month EBITDA is not calculable | No supplied document states it | Not supplied: trailing twelve-month cash interest paid is not calculable | No supplied document states it | 2026-08-02 | USD | US$m | Not calculable: an operand is not supplied | Not Calculable | Tier 2b | Interim balance sheet; trailing twelve-month EBITDA and cash interest are not calculable |
| Gross margin | Gross profit / Net sales | 1,818 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 6,702 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | FY2023 | USD | US$m | 0.2713 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals |
| Gross margin | Gross profit / Net sales | 1,980 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | 7,441 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | FY2024 | USD | US$m | 0.2661 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals |
| Gross margin | Gross profit / Net sales | 1,070 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | 4,004 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | H1 2025 | USD | US$m | 0.2672 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals |
| Gross margin | Gross profit / Net sales | 1,093 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | 4,055 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | H1 2026 | USD | US$m | 0.2695 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 910 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 6,702 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | FY2023 | USD | US$m | 0.1358 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 930 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | 7,441 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | FY2024 | USD | US$m | 0.1250 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 490 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 | 4,004 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | H1 2025 | USD | US$m | 0.1224 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 500 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 | 4,055 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | H1 2026 | USD | US$m | 0.1233 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Operating cash flow / Adjusted EBITDA | Net Cash from Operating Activities / EBITDA (Adjusted) | 1,069 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 910 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | FY2023 | USD | US$m | 1.1747 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Operating cash flow / Adjusted EBITDA | Net Cash from Operating Activities / EBITDA (Adjusted) | 621 | 10-K_2025-02-02_cnm.htm.jsonl, page 108 | 930 | 10-K_2025-02-02_cnm.htm.jsonl, page 97 | FY2024 | USD | US$m | 0.6677 | Calculated | Tier 1 | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Operating cash flow / Adjusted EBITDA | Net Cash from Operating Activities / EBITDA (Adjusted) | 111 | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 | 490 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 | H1 2025 | USD | US$m | 0.2265 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |
| Operating cash flow / Adjusted EBITDA | Net Cash from Operating Activities / EBITDA (Adjusted) | 144 | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 | 500 | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 | H1 2026 | USD | US$m | 0.2880 | Calculated | Tier 2b | Ratio of two US$m amounts, printed to four decimals; issuer-adjusted EBITDA |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | H1 2025 | H1 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Net sales growth, issuer-reported (%) | 11.0 | Not supplied: the supplied documents do not state the growth rate of the first half of fiscal 2025 | 1.3 | Slower | Fiscal 2024 included a 53rd selling week and acquisitions; first-half 2026 growth is on net sales of 4,055 |
| Margin | Gross profit as a percentage of net sales, issuer-reported (%) | 26.6 | 26.7 | 27.0 | Higher in 2026 | The company attributes the first-half 2026 gain to its gross margin initiatives and purchasing and pricing management; fiscal 2023 was 27.1% |
| Margin | SG&A as a percentage of net sales, issuer-reported (%) | 14.5 | 14.9 | 14.8 | Lower in 2026 | Higher distribution costs and growth investment are offset by cost actions and lower variable compensation; fiscal 2023 was 13.9% |
| Operating | Supplier purchase obligations (USD millions) | 1,225 | Not supplied: the supplied documents state this balance only at 2025-02-02 and 2026-08-02 | 1,223 | Flat | Generally cancellable and outside debt; payments are expected within the following fiscal year |
| Operating | Share repurchase program authorization (USD millions) | 500 | Not supplied: the supplied documents state the authorization only at 2025-02-02 and 2026-08-02 | 1,000 | Higher | The program authorized in June 2024 for up to 500 had 412 of the 1,000 authorization remaining at 2026-08-02; 257 was used in the six months ended 2026-08-02 |
| Operating | Branch network | Over 370 locations | Not supplied: the supplied documents state the count only at 2025-02-02 and 2026-08-02 | Over 370 locations | Stable | The count is stated only as over 370; seven greenfield locations were opened in fiscal 2026 to date |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt: carrying value against principal | Balance-sheet carrying value, current plus long-term, net of discount and issuance costs | Issuer net debt table uses total debt gross of unamortized discounts and issuance costs | Carrying 2,449 (17 + 2,432) at 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 against principal 2,478 at EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 12 | Q2 2026; also FY2024 (2,261 against 2,283) and FY2023 (1,878 against 1,893) | 29 of 2,478 at Q2 2026 (1.2%) | Financial foundation and later credit modules | Use carrying value as the leverage numerator and show principal beside it; the difference is net unamortized discount and issuance costs |
| Net debt | Carrying-value debt less cash | Total debt gross of unamortized costs less cash and cash equivalents | Net debt 2,137 against issuer 2,166 at 2026-08-02; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 10, 12 | Q2 2026 | 29 | Financial foundation and later credit modules | Quote the carrying basis and name the issuer basis when its figure is cited |
| Depreciation and amortization | One figure for the period | Three figures: income statement 183, EBITDA reconciliation 186 (includes depreciation in cost of sales) and cash flow 194 in fiscal 2024 | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106, 108 | FY2023 (147, 149, 154) and FY2024 | 3 to 11 on EBITDA of 905 in fiscal 2024 | Financial foundation, Earnings quality | Use the issuer reconciliation figure inside EBITDA and do not recompute EBITDA from operating income and the statement line |
| EBITDA (Adjusted) | Reported EBITDA with only stated, sourced add-backs | Adds back equity-based compensation, acquisition and other expenses, and in fiscal 2023 offering expenses; includes income attributable to non-controlling interests | 10-K_2025-02-02_cnm.htm.jsonl, page 97; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 10, 11 | All periods | Add-backs of 25 in fiscal 2024 (2.8% of EBITDA) | Financial foundation, Earnings quality | Reported EBITDA is the primary denominator; adjusted ratios are separate labelled rows; the realisation status of add-backs is not stated |
| Cash flow presentation of fiscal 2023 | One presentation per period | Fiscal 2023 report: Other 7, accrued liabilities 4, other liabilities 1; fiscal 2024 report: deferred income tax 2, other 5, accrued liabilities 5 | 10-K_2024-01-28_cnm.htm.jsonl, page 113; 10-K_2025-02-02_cnm.htm.jsonl, page 108 | FY2023 | No effect on any total (operating cash flow 1,069) | Financial foundation | Use the later presentation |
| July 2026 refinancing | All figures of one event with their roles | Debt note: new 800 term loan and 750 notes; cash flow statement: issuance of long-term debt 929 and repayments 617 in the six months | 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 16, 18 | Q2 2026 | The cash flow lines are not the sum of the new instruments (800 + 750 = 1,550) and the quarterly report does not reconcile them; principal rose 318 in the quarter | Financial foundation, Refinancing & LME | Use the debt note for instrument amounts and the cash flow statement for cash; the net change in principal ties (929 - 611 = 318) |
| Fiscal calendar | Comparable periods | Fiscal 2024 had 53 weeks; fiscal 2023 and the first halves of fiscal 2025 and 2026 did not | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 12 | FY2024 against FY2023 | Not quantified by the issuer | Financial foundation, Fundamental credit | Treat fiscal 2024 growth and ratios as affected by the extra week; no 52-week figure is stated |
| Product categories | A stable category set | Fiscal 2023 and 2024 report meter products; the 2026 reports report smart utility products; the quarterly reports do not say whether the category is the same | 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, page 13 | FY2023, FY2024 against 2025 and 2026 interims | Net sales 692 for meter products in fiscal 2024 against 354 for smart utility products in the first half of 2026 | Financial foundation, Business & governance | Do not join the two series |
| Interest: expense against cash paid | Cash interest and interest expense kept apart | Cash paid for interest excludes the effects of the interest rate swap | 10-K_2025-02-02_cnm.htm.jsonl, pages 106, 108; 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8 | All periods | Fiscal 2024: 142 expense against 197 paid | Financial foundation, Rates, FX & hedging | Interest cover uses cash interest paid; expense is shown separately |

The review covered the debt, net debt, depreciation and amortization, EBITDA, cash flow, product-category, interest and fiscal-calendar definitions across the seven documents; no other conflict between the annual reports, quarterly reports and releases was found in the figures used.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-30 | 2024-01-28 |
| FY2024 | 2024-01-29 | 2025-02-02 |
| FY2025 | 2025-02-03 | 2026-02-01 |
| Q1 2025 | 2025-02-03 | 2025-05-04 |
| Q2 2025 | 2025-05-05 | 2025-08-03 |
| H1 2025 | 2025-02-03 | 2025-08-03 |
| Q1 2026 | 2026-02-02 | 2026-05-03 |
| Q2 2026 | 2026-05-04 | 2026-08-02 |
| H1 2026 | 2026-02-02 | 2026-08-02 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2024-01-28 | 2.11 | 2.11 | x | Debt at carrying value over issuer-stated unadjusted EBITDA for the 52-week fiscal year ended 2024-01-28 |
| 2025-02-02 | 2.50 | 2.49 | x | Debt at carrying value over issuer-stated unadjusted EBITDA for the 53-week fiscal year ended 2025-02-02 |
| 2026-02-01 | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | Not supplied: fiscal 2025 annual EBITDA is not in the supplied documents | x | Debt at carrying value is 2,148 and net debt 1,928, but no annual EBITDA is supplied |
| 2026-08-02 | Not supplied: trailing twelve-month EBITDA is not calculable | Not supplied: trailing twelve-month EBITDA is not calculable | x | Interim balance sheet; debt at carrying value is 2,449 and net debt 2,137, but trailing twelve-month EBITDA needs the fiscal 2025 annual figure |

Leverage is shown at fiscal year ends only because an interim ratio needs trailing twelve-month EBITDA, which the supplied documents do not allow.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2024-01-28 | 8.47 | x | Issuer-stated unadjusted EBITDA over cash paid for interest excluding the effects of the swap, fiscal 2023 |
| 2025-02-02 | 4.59 | x | Issuer-stated unadjusted EBITDA over cash paid for interest excluding the effects of the swap, fiscal 2024 (53 weeks) |
| 2026-02-01 | Not supplied: fiscal 2025 annual EBITDA and cash interest are not in the supplied documents | x | No annual statements for fiscal 2025 are supplied |
| 2026-08-02 | Not supplied: trailing twelve-month EBITDA and cash interest are not calculable | x | Interim date; the six months to 2026-08-02 show cash interest paid of 59 against 49 a year earlier |

Cover uses cash interest paid, which excludes swap effects and differs from interest expense, and fiscal 2024 had 53 weeks.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2024-01-28 | 1 | 804 | US$m | Cash and cash equivalents; revolver availability after 430 drawn and 16 of letters of credit, as the company states, subject to borrowing base |
| 2025-02-02 | 8 | 1,142 | US$m | Cash and cash equivalents; revolver availability after 93 drawn and 15 of letters of credit, as the company states, subject to borrowing base |
| 2026-02-01 | 220 | Not supplied: the letters of credit and availability at 2026-02-01 are not stated in the supplied documents | US$m | The revolver was undrawn at this date but its availability is not stated |
| 2026-05-03 | 150 | 1,226 | US$m | Revolver undrawn; availability after about 24 of letters of credit, as the company states, subject to borrowing base |
| 2026-08-02 | 312 | 1,226 | US$m | Revolver undrawn; availability after about 24 of letters of credit on the 1,250 commitment, as the company states, subject to borrowing base |

Availability is the company's own approximate figure and is subject to the borrowing base, so it is not guaranteed cash.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 9 | US$m | Scheduled principal payments for the remainder of fiscal 2026; amortization of the term loans only |
| FY2027 | 17 | US$m | Scheduled principal payments, as the quarterly report states; amortization of the term loans only |
| FY2028 | 17 | US$m | Scheduled principal payments, as the quarterly report states; amortization of the term loans only |
| FY2029 | 17 | US$m | Scheduled principal payments, as the quarterly report states; amortization of the term loans only |
| FY2030 | 17 | US$m | Scheduled principal payments, as the quarterly report states; amortization of the term loans only |
| Thereafter | 2,401 | US$m | Calculated residual: principal 2,478 less the five stated years of 77; it holds the 2031 and 2033 term loan balances and the 2034 notes, and no year-by-year split is stated |

The first five rows are scheduled amortization only and the last row is a calculated residual, so the chart understates how soon each bullet maturity falls due.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2024-01-28 | 1,878 | 1 | 1,877 | US$m | Carrying value, current maturities 15 plus long-term debt 1,863, net of 15 of unamortized costs; principal 1,893; no finance leases or securitization in the debt lines; operating lease liabilities are separate lines and excluded |
| 2025-02-02 | 2,261 | 8 | 2,253 | US$m | Carrying value, current maturities 24 plus long-term debt 2,237, net of 22 of unamortized costs; principal 2,283; no finance leases or securitization in the debt lines; operating lease liabilities are separate lines and excluded |
| 2026-02-01 | 2,148 | 220 | 1,928 | US$m | Carrying value, current maturities 24 plus long-term debt 2,124; principal at 2026-02-01 is not stated in the supplied documents; operating lease liabilities are separate lines and excluded; balance sheet derived from audited statements |
| 2026-05-03 | 2,144 | 150 | 1,994 | US$m | Carrying value, current maturities 24 plus long-term debt 2,120; principal 2,160; operating lease liabilities are separate lines and excluded |
| 2026-08-02 | 2,449 | 312 | 2,137 | US$m | Carrying value, current maturities 17 plus long-term debt 2,432, net of 29 of derived unamortized costs; principal 2,478; operating lease liabilities are separate lines and excluded; reported, before the USD 11 million of repurchases after quarter end |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-08-02 | 2,478 | -29 | 2,449 | US$m | Principal is the sum of the maturity ladder (77 of scheduled payments plus 2,401 thereafter) and equals the instruments 0 + 928 + 800 + 750; the reconciling item of -29 is net unamortized discount and issuance costs, derived as carrying value less principal because the quarterly report does not itemize it; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Share repurchases after quarter end | Not supplied: the source states subsequent to quarter end only | 11 | 2,148 | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | The second-quarter release states USD 11 million spent to repurchase 0.3 million shares after the quarter end; net debt rises by the cash paid, from 2,137 to 2,148 on the carrying basis (2,177 on the issuer's gross basis); the day is not stated |
| Repricing of the 2031 Senior Term Loan margin from 2.00% to 1.75% | Not supplied: the source states August 2026 only | Not supplied: the repricing changes the margin and no change in principal is stated | Not supplied: no principal change is stated | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | The subsequent-events note states the repricing completed in August 2026 and the Seventh Amendment is dated 2026-08-11; net debt is not changed on the face of the note; the amendment text is not supplied |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2025-05-04 | 1,911 | 224 | US$m | Quarter of 13 weeks ended 2025-05-04; Adjusted EBITDA is issuer-adjusted |
| 2025-08-03 | 2,093 | 266 | US$m | Quarter of 13 weeks ended 2025-08-03; Adjusted EBITDA is issuer-adjusted |
| 2026-05-03 | 1,910 | 226 | US$m | Quarter of 13 weeks ended 2026-05-03; Adjusted EBITDA is issuer-adjusted |
| 2026-08-02 | 2,145 | 274 | US$m | Quarter of 13 weeks ended 2026-08-02; Adjusted EBITDA is issuer-adjusted |

The rows are quarters of 13 weeks and the business is seasonal, so compare each quarter with the same quarter of the prior year, not with the neighbouring quarter.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Senior ABL Credit Facility | 1 | Yes | 0 | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | Drawn amount is nil on a 1,250 commitment; borrower Core & Main LP; secured by substantially all assets of Core & Main LP; the filings do not state its lien priority against the term loans, so the shared rank reflects secured status only |
| 2031 Senior Term Loan | 1 | Yes | 928 | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | Principal at 2026-08-02; borrower Core & Main LP; secured by substantially all assets of Core & Main LP; lien priority against the revolver is not stated |
| 2033 Senior Term Loan | 1 | Yes | 800 | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | Principal at 2026-08-02; borrower Core & Main LP; secured by substantially all assets of Core & Main LP; lien priority against the revolver is not stated |
| 2034 Senior Notes | 2 | No | 750 | Not supplied: trailing twelve-month EBITDA is not calculable | US$m | Principal; issuer Core & Main LP; guaranteed on an unsecured senior basis by Core & Main Midco, LLC and Core & Main Intermediate GP, LLC; equal in right of payment with all senior indebtedness but unsecured |

The ranking separates secured from unsecured debt only, and amounts are principal, not carrying value.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), six months ended 2026-08-02 | 493 | US$m | Issuer-stated EBITDA, the reported measure, before any add-back |
| Equity-based compensation | 7 | US$m | Add-back classified as share-based compensation; realisation status not stated; the Other expenses line prints a dash for this period and no amount is stated |
| Adjusted EBITDA (issuer-adjusted), six months ended 2026-08-02 | 500 | US$m | Issuer-stated Adjusted EBITDA, the specified adjusted measure; includes income attributable to non-controlling interests |

### Financials and credit metrics

| Metric | Period | Value | Unit | Basis |
| --- | --- | --- | --- | --- |
| Net sales, fiscal 2024 | FY2024 | 7,441 | US$m | Reported |
| EBITDA (Reported), fiscal 2024 | FY2024 | 905 | US$m | Reported |
| EBITDA (Adjusted), fiscal 2024 | FY2024 | 930 | US$m | Reported, issuer-adjusted |
| Net debt / EBITDA (Reported), fiscal 2024 | FY2024 | 2.49 | x | Calculated at carrying value |
| EBITDA / cash interest, fiscal 2024 | FY2024 | 4.59 | x | Calculated |
| Net sales, first half of fiscal 2026 | H1 2026 | 4,055 | US$m | Reported; 1.27% above the first half of fiscal 2025 |
| EBITDA (Adjusted), first half of fiscal 2026 | H1 2026 | 500 | US$m | Reported, issuer-adjusted; 2.04% above the first half of fiscal 2025 |
| Net Cash from Operating Activities, first half of fiscal 2026 | H1 2026 | 144 | US$m | Reported |
| Free cash flow, first half of fiscal 2026 | H1 2026 | 112 | US$m | Calculated: operating cash flow less capital expenditure |
| Total Debt at carrying value | 2026-08-02 | 2,449 | US$m | Calculated; principal 2,478 |
| Net debt at carrying value | 2026-08-02 | 2,137 | US$m | Calculated; issuer basis 2,166 |
| Liquidity: cash plus revolver availability | 2026-08-02 | 1,538 | US$m | Calculated; availability subject to borrowing base |
| Net debt / EBITDA, trailing twelve months | LTM to 2026-08-02 | Not calculable: the fiscal 2025 annual figure is not supplied | x | Not calculable |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Credit snapshot data foundation | Ready with Limitations | Statements, net debt, liquidity and maturities at 2026-08-02 are sourced; trailing twelve-month figures are not | Supply the annual report for the year ended 2026-02-01 |
| Leverage and interest cover at fiscal year ends 2023 and 2024 | Ready | Fiscal 2024 had 53 weeks; EBITDA is issuer-stated | None |
| Leverage and interest cover at 2026-08-02 | Not Ready | No fiscal 2025 annual EBITDA or cash interest, so no trailing twelve-month figure | Supply the annual report for the year ended 2026-02-01 |
| Liquidity at 2026-08-02 | Ready with Limitations | Revolver availability is approximate and subject to the borrowing base | None |
| Maturity profile | Ready with Limitations | Only five years of amortization are stated; the remainder is a calculated residual | None |
| Capital structure by seniority | Ready with Limitations | Lien priority between the revolver and the term loans is not stated; no executed documents | Supply the credit agreements and indenture |
| Covenant capacity | Not Ready | The covenant ratio is defined in agreements that are not supplied and no covenant figure is reported | Supply the credit agreements |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 40 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 14 |
| Fields total | 15 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 9 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| TD1 | Total debt at carrying value, FY2023 balance sheet at 2024-01-28 | 15 + 1,863 | 1,878 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| TD2 | Total debt at carrying value, FY2024 balance sheet at 2025-02-02 | 24 + 2,237 | 2,261 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| TD3 | Total debt at carrying value, FY2025 balance sheet at 2026-02-01 | 24 + 2,124 | 2,148 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| TD4 | Total debt at carrying value, Q1 2026 balance sheet at 2026-05-03 | 24 + 2,120 | 2,144 | US$m | 10-Q_2026-05-03_cnm.htm.jsonl, pages 5, 6 |
| TD5 | Total debt at carrying value, Q2 2026 balance sheet at 2026-08-02 | 17 + 2,432 | 2,449 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| ND1 | Net debt, FY2023 balance sheet at 2024-01-28: gross debt less cash | 1,878 - 1 | 1,877 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| ND2 | Net debt, FY2024 balance sheet at 2025-02-02: gross debt less cash | 2,261 - 8 | 2,253 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| ND3 | Net debt, FY2025 balance sheet at 2026-02-01: gross debt less cash | 2,148 - 220 | 1,928 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| ND4 | Net debt, Q1 2026 balance sheet at 2026-05-03: gross debt less cash | 2,144 - 150 | 1,994 | US$m | 10-Q_2026-05-03_cnm.htm.jsonl, pages 5, 6 |
| ND5 | Net debt, Q2 2026 balance sheet at 2026-08-02: gross debt less cash | 2,449 - 312 | 2,137 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| PR1 | Contractual principal at 2026-08-02 | 0 + 928 + 800 + 750 | 2,478 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 39; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 12 |
| LD1 | Maturities after fiscal 2030 as a residual | 2,478 - (9 + 17 + 17 + 17 + 17 = 77) | 2,401 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 19 |
| RC1 | Reconciling items at 2026-08-02: carrying value less principal | 2,449 - 2,478 | -29 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 12 |
| RC2 | Check: unamortized costs at 2025-02-02 as stated | 2,261 - 2,283 (the note states 22) | -22 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 127 |
| RC3 | Check: unamortized costs at 2024-01-28 as stated | 1,878 - 1,893 (the note states 15) | -15 | US$m | 10-K_2024-01-28_cnm.htm.jsonl, page 135 |
| LQ1 | Liquidity at 2026-08-02: cash plus revolver availability | 312 + 1,226 | 1,538 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 36 |
| LV1 | Net debt / EBITDA (Reported), FY2023 | 1,877 / 889 | 2.11 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| LV2 | Net debt / EBITDA (Reported), FY2024 | 2,253 / 905 | 2.49 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| LV3 | Net debt / EBITDA (Adjusted), FY2024, for the measure comparison | 2,253 / 930 | 2.42 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| LV4 | Difference between net debt / EBITDA on the reported and the adjusted measure, FY2024 | 2.49 - 2.42 | 0.07 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 106 |
| CV1 | EBITDA / cash interest, FY2023 | 889 / 105 | 8.47 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| CV2 | EBITDA / cash interest, FY2024 | 905 / 197 | 4.59 | x | 10-K_2025-02-02_cnm.htm.jsonl, pages 97, 108 |
| AB1 | Add-backs to EBITDA, FY2024 | 930 - 905 | 25 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 97 |
| NC1 | Change in net debt, FY2023 to FY2024 | 2,253 - 1,877 | 376 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| NC2 | Change in net debt, FY2024 to 2026-08-02 | 2,137 - 2,253 | -116 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| NC3 | Change in net debt, 2026-02-01 to 2026-08-02 | 2,137 - 1,928 | 209 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6 |
| FC1 | Free cash flow, FY2023: operating cash flow less capital expenditures | 1,069 + -39 | 1,030 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 108 |
| FC2 | Free cash flow, FY2024 | 621 + -35 | 586 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 108 |
| FC3 | Free cash flow, H1 2025 | 111 + -23 | 88 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| FC4 | Free cash flow, H1 2026 | 144 + -32 | 112 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| WC1 | Working capital change, H1 2026: five working-capital lines | -397 + -155 + -1 + 301 + 10 | -242 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| WC2 | Working capital change, H1 2025 | -300 + -152 + -5 + 196 + 6 | -255 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| DF1 | Net new debt in H1 2026: issuance less repayments less issuance costs | 929 + -617 + -19 | 293 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| SR1 | Share repurchases plus tax receivable agreement payments, H1 2026 | 257 + 42 | 299 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| SR2 | Excess of those payments over free cash flow, H1 2026 | 299 - 112 | 187 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 8 |
| LS1 | Operating lease liabilities at 2026-08-02: current plus non-current | 79 + 221 | 300 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| PB1 | Pro forma net debt after USD 11 million of repurchases | 2,137 + 11 | 2,148 | US$m | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 |
| GR1 | Net sales growth, FY2024 over FY2023 | 7,441 / 6,702 - 1 | 11.03% | % | 10-K_2025-02-02_cnm.htm.jsonl, page 106 |
| GR2 | Net sales growth, H1 2026 over H1 2025 | 4,055 / 4,004 - 1 | 1.27% | % | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 |
| GR3 | Adjusted EBITDA growth, H1 2026 over H1 2025 | 500 / 490 - 1 | 2.04% | % | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 |
| EB1 | EBITDA bridge, six months ended 2026-08-02: reported plus add-back | 493 + 7 | 500 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 |
| SG1 | Product category net sales add to the total, Q2 2026 | 1,461 + 334 + 176 + 174 | 2,145 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| SG2 | Product category net sales add to the total, Q2 2025 | 1,430 + 335 + 155 + 173 | 2,093 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| SG3 | Product category net sales add to the total, H1 2026 | 2,735 + 612 + 354 + 354 | 4,055 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| SG4 | Product category net sales add to the total, H1 2025 | 2,727 + 630 + 307 + 340 | 4,004 | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, page 13 |
| SG5 | Product category net sales add to the total, FY2024 | 5,006 + 1,147 + 596 + 692 | 7,441 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| SG6 | Product category net sales add to the total, FY2023 | 4,504 + 985 + 688 + 525 | 6,702 | US$m | 10-K_2025-02-02_cnm.htm.jsonl, page 86 |
| LT1 | Trailing twelve-month Adjusted EBITDA to 2026-08-02: fiscal 2025 plus H1 2026 less H1 2025 | Fiscal 2025 Not supplied: no document gives it; 500; 490 | Not calculable: the fiscal 2025 input is missing | US$m | 10-Q_2026-08-02_cnm.htm.jsonl, pages 41, 42 |

## Gaps

- High severity: The annual statements for fiscal 2025 (the year ended February 1, 2026) are not supplied, so the income statement and cash flow columns for fiscal 2025 are absent, no trailing twelve-month EBITDA, cash interest, revenue or operating cash flow can be built, and leverage and interest cover at fiscal 2025 and at August 2, 2026 are not calculable. The action that would close it is the annual report for that year.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 11; calculation LT1
- Medium severity: Lines that the statements print only in some periods, or print as a dash, are shown as not supplied in the other periods and are not read as zero: other expense, acquisitions, investment in tax advantaged limited partnerships, borrowings and repayments on the revolver, issuance of long-term debt, debt issuance costs, and other investing and financing items. This restricts nothing beyond those lines, because the totals tie, and no action is needed beyond reading the dash as not stated.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 108; 10-Q_2026-08-02_cnm.htm.jsonl, pages 6, 8
- Medium severity: Revolver availability and letters of credit at February 1, 2026 are not stated, so undrawn committed facilities for fiscal 2025 are not supplied, and the principal debt at that date is not stated. The action that would close it is the annual report for the year ended February 1, 2026.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 36
- Medium severity: Cumulative leverage in the debt stack is not supplied for any facility because no trailing twelve-month EBITDA denominator exists; the amounts and ranks are stated. The action that would close it is the fiscal 2025 annual report, which would allow a trailing twelve-month figure.
  Basis: calculation LT1
- Medium severity: The cash flow statement shows issuance of long-term debt of USD 929 million and repayments of USD 617 million in the six months ended August 2, 2026, which are not the new USD 800 million term loan and USD 750 million of notes, and the quarterly report does not reconcile them; the net change in principal ties but the gross flows should not be read as instrument amounts. The action that would close it is the issuer's reconciliation of the refinancing, which the executed amendment and indenture would give.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 8, 16, 18
- Medium severity: Carrying values by instrument are not disclosed in the quarterly report, so the net unamortized discount and issuance costs of USD 29 million at August 2, 2026 is derived as carrying value less principal; it restricts the instrument-level carrying values, which are not supplied. The action that would close it is the debt note of the annual report for the year ended February 1, 2026 or the third-quarter report.
  Basis: calculation RC1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 19
- Low severity: Maintenance and growth capital expenditure are not disclosed, so only total capital expenditure is used in free cash flow; interest income, exceptional items, restricted cash, finance lease liabilities, supplier finance arrangements and a separate second-quarter cash flow statement are not presented in the statements and notes searched, so none is stated and the second-quarter cash flow columns are omitted. No action closes this from the issuer's public statements.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 8
- Low severity: The lien priority between the revolving facility and the term loans, and the guarantors of the credit facilities, are not stated in the supplied filings, so the debt stack ranks secured debt together and the unsecured notes behind it without a ranking between the secured facilities. The action that would close it is the credit agreements.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 19; EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1
- Low severity: The repricing of the 2031 Senior Term Loan is dated only as August 2026 in the subsequent-events note and the repurchases after quarter end carry no day, so the post-balance-sheet rows state no day and no principal effect for the repricing. The action that would close it is the third-quarter report.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 23; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1
- Low severity: The company reports one operating segment and no corporate or eliminations line, so no segment sum is stated beyond the product-category net sales, whose meter category is reported as smart utility products in the 2026 documents without a stated link between them. The action that would close it is the issuer's own mapping of the two labels.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 86; 10-Q_2026-08-02_cnm.htm.jsonl, pages 12, 13
- Low severity: The covenant ratio that governs excess cash flow repayment, a secured leverage ratio of 3.25 or more, and the fixed charge coverage test are defined in agreements that are not supplied and no reported covenant figure is stated, although the quarterly report states compliance with all debt covenants at August 2, 2026, so covenant capacity is not inferred. The action that would close it is the credit agreements and the issuer's reported covenant figures.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 18, 19

## Next module

The orchestrator selects the next module.

