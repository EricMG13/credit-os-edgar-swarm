# RLJ Lodging Trust — Financial foundation

## Request

RLJ Lodging Trust (rlj-1511337), as of 2026-11-18, credit snapshot pathway. Scope: the issuer's statements, debt, leverage and interest cover from the five supplied filings, with the source readiness result as the only upstream input.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_rlj.htm.jsonl | Annual report on Form 10-K of RLJ Lodging Trust for the year ended December 31, 2024 | 2025-02-26 | 8e907f76c8096883c6960b8e2d6eaa4a167a22984d995d1d6b869bf0b3124819 | Checked FY2024 revenue against the comparative in the later annual report; principal at 2024-12-31 from its future minimum principal payments table |
| 10-K_2025-12-31_rlj.htm.jsonl | Annual report on Form 10-K of RLJ Lodging Trust for the year ended December 31, 2025 | 2026-02-27 | 5691958f2b3e56a37c3110f4f6efb99b106f14e7e7b2d39d08083d82ccaa5bba | Audited FY2024 and FY2025 statements, EBITDA reconciliation, debt, lease and covenant notes, interest paid, subsequent events |
| 10-Q_2026-03-31_rlj.htm.jsonl | Quarterly report on Form 10-Q of RLJ Lodging Trust for the quarter ended March 31, 2026 | 2026-05-04 | af1a7b955dd82f5edd940108d30ce76a7c87b0ef22654366d4a803f91f06eb4f | Read for the first-quarter refinancing description; no figure of the tables is taken from it |
| 10-Q_2026-06-30_rlj.htm.jsonl | Quarterly report on Form 10-Q of RLJ Lodging Trust for the quarter ended June 30, 2026 | 2026-08-07 | b861a925a61127533033e1b6b42a2d14b9caf3a9f46dbaa53d045b0c152c52ea | Read for the June 30, 2026 drawdown and its use; no figure of the tables is taken from it |
| 10-Q_2026-09-30_rlj.htm.jsonl | Quarterly report on Form 10-Q of RLJ Lodging Trust for the quarter ended September 30, 2026 | 2026-11-05 | 4f25ef809d70e5bd50dc15ec26f3c70e8d354a6467f55010bfcc2029eb45dafe | Unaudited nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, debt and covenant notes, maturity table, EBITDA and FFO reconciliations, subsequent event |

The document dates are signature dates; for the two annual reports they match the filing dates that later filings name, and the filing dates of the quarterly reports are not stated in the supplied text.

| Module | Document | sha256 |
| --- | --- | --- |
| Source readiness (CP-0) | Source readiness handoff for RLJ Lodging Trust as of 2026-11-18 | 0b7156bbfe6bbd0a5a1438445be388222b1290ba369b19d0a480bfa1379f45cd |

## Findings

### Bottom line

Reported leverage is fully traceable: net debt was 5.31x last-twelve-months EBITDA at September 30, 2026 (5.04x pro forma for the hotel sale on 2026-10-08), while EBITDA covered cash interest only 2.94 times, a narrowing margin that leaves creditors relying on earnings, not debt reduction.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–6; 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39; calculation C3; calculation C4; calculation C7; calculation C12; calculation C13

The 2026 refinancing moved the first scheduled maturity to 2027 and, after extension options, to 2029, and cash plus the undrawn revolver gave liquidity of USD 1,048.34 million; the main limits are that no source states a legal rank for any facility, covenant ratio values are not printed and no balance sheet follows the sale.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, pages 10–13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42; calculation C14

### Leverage and coverage

Reported gross leverage rose from 6.44x at FY2024 to 6.95x at FY2025 and stood at 6.67x on a last-twelve-months basis at September 30, 2026, because the carrying value of debt barely moved while reported EBITDA fell 8.23% in FY2025 and has only partly recovered since. Net leverage followed the same path at 5.25x, 5.65x and 5.31x (5.04x pro forma for the hotel sale on 2026-10-08, which keeps the sold hotels' earnings in EBITDA and so flatters the ratio if those hotels earned a positive EBITDA). On issuer-adjusted EBITDA the gross ratios are 6.14x, 6.57x and 6.15x, lower mainly because share-based compensation of USD 15.34 million is 83.70% of the USD 18.33 million of FY2025 add-backs.
Basis: 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39; calculation C1; calculation C2; calculation C3; calculation C4; calculation C5; calculation C12; calculation C13; calculation C18; calculation C19

EBITDA covered cash interest 3.32x, 3.03x and 2.94x at the same three dates, a narrowing margin because cash interest paid reached USD 112.06 million on a last-twelve-months basis while EBITDA stayed below its FY2024 level. Reported EBITDA rose 5.26% in the first nine months of 2026, but the coupon on the replaced debt is higher: the repayment of the 3.75% notes was funded mainly with term loans priced at 5.51% and 5.91%, which is 1.76 percentage points to 2.16 percentage points more on that slice.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, page 25; 10-Q_2026-09-30_rlj.htm.jsonl, page 12; 10-Q_2026-09-30_rlj.htm.jsonl, page 11; 10-K_2025-12-31_rlj.htm.jsonl, page 123; calculation C7; calculation C18; calculation C24

### Cash-flow quality

Operating cash flow rose by USD 28.85 million in the first nine months of 2026, more than twice the USD 12.79 million rise in reported EBITDA, helped by payables and other liabilities adding USD 13.18 million more than a year earlier, so part of the improvement is working-capital driven rather than earnings driven. Capital spending fell to USD 76.17 million from USD 111.71 million, taking capex to 6.46% of revenue on a last-twelve-months basis against 9.36% in FY2025, and free cash flow after capex of USD 133.60 million exceeded distributions of USD 88.03 million by USD 45.56 million.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, page 6; 10-K_2025-12-31_rlj.htm.jsonl, page 90; calculation C20; calculation C21; calculation C22; calculation C8; calculation C9

### Liquidity and maturities

Cash of USD 448.34 million and the fully undrawn USD 600.00 million revolver gave liquidity of USD 1,048.34 million at September 30, 2026, excluding restricted cash of USD 37.49 million; pro forma cash is not established because the filing does not say how the USD 90.00 million of cash from the hotel sale is used. Scheduled principal is USD 500.00 million in 2027, USD 300.00 million in 2028 and USD 689.40 million in 2029 (31.22% of the total), so 2029, the year of the notes and the mortgage loans, is the largest single maturity year, ahead of the 2027 term loan that carries two extension options.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42; calculation C14; calculation C16; calculation C25

### Definitions and data quality

The statements tie: assets equal liabilities plus equity at each date, the three cash flow totals add to the change in cash, and the debt note equals the balance sheet. Three definitions need care: issuer EBITDA includes USD 1.51 million of the issuer's share of an unconsolidated joint venture's interest and depreciation in FY2025, cash flow cash includes restricted cash while net debt excludes it, and debt at carrying value is net of USD 12.92 million of deferred financing costs and includes a USD 0.84 million fair value adjustment on one mortgage loan, so principal exceeds carrying value by USD 12.07 million at September 30, 2026.
Basis: 10-K_2025-12-31_rlj.htm.jsonl, page 69; 10-Q_2026-09-30_rlj.htm.jsonl, page 10; 10-Q_2026-09-30_rlj.htm.jsonl, pages 12–13; calculation C26; calculation C17; calculation C15

### Events after the balance sheet date

The sale of seven hotels closed on 2026-10-08 for about USD 110.00 million, of which about USD 90.00 million was cash and about USD 20.00 million was seller financing; pro forma net debt is USD 1,657.98 million and pro forma net leverage 5.04x, with seller financing, transaction costs and the sold hotels' earnings not reflected. The February 2026 refinancing, the July 1, 2026 repayment of the 3.75% notes and the June 30, 2026 drawdown that pre-funded it fall inside the periods above and are not adjusted.
Basis: 10-Q_2026-09-30_rlj.htm.jsonl, pages 9–10; 10-Q_2026-09-30_rlj.htm.jsonl, page 25; 10-K_2025-12-31_rlj.htm.jsonl, page 124; calculation C12; calculation C13

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6.44 | 5.25 | x | Year-end debt at carrying value over the issuer's reported EBITDA for FY2024; audited |
| FY2025 / 2025-12-31 | 6.95 | 5.65 | x | Year-end debt at carrying value over the issuer's reported EBITDA for FY2025; audited |
| 2026-09-30 | 6.67 | 5.31 | x | Debt at 2026-09-30 over reported EBITDA last-twelve-months: FY2025 plus nine months 2026 less nine months 2025; interim figures unaudited; not pro forma for the 2026-10-08 hotel sale (net debt over EBITDA is 5.04 pro forma) |

The latest row is last-twelve-months and not pro forma for the 2026-10-08 hotel sale.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3.32 | x | Reported EBITDA over cash interest paid in FY2024; audited |
| FY2025 / 2025-12-31 | 3.03 | x | Reported EBITDA over cash interest paid in FY2025; audited |
| 2026-09-30 | 2.94 | x | Reported EBITDA and cash interest paid both last-twelve-months: FY2025 plus nine months 2026 less nine months 2025; interim figures unaudited |

Cash interest paid differs from interest expense, and the latest row is last-twelve-months.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 409.809 | 500.000 | US$m | Cash and cash equivalents excluding restricted cash reserves; Revolver capacity at year-end after USD 100.0 million outstanding (FY2025 annual report, page 108) |
| FY2025 / 2025-12-31 | 410.160 | 600.000 | US$m | Cash and cash equivalents excluding restricted cash reserves; Revolver fully undrawn; term loan commitments arranged in February 2026 are not counted |
| 2026-09-30 | 448.342 | 600.000 | US$m | Cash and cash equivalents excluding restricted cash reserves; Revolver fully undrawn and both delayed draw term loans fully drawn; access to the Revolver depends on covenant compliance; not pro forma for the 2026-10-08 sale |

Restricted cash reserves are excluded and Revolver access depends on covenant compliance.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2027 | 500.000 | US$m | $500 Million Term Loan Maturing 2027 (September 2027); two one-year extension options at the issuer's discretion subject to conditions; contractual principal at 2026-09-30 excluding extension options |
| 2028 | 300.000 | US$m | $300 Million Term Loan Maturing 2028 (April 2028); two one-year extension options at the issuer's discretion subject to conditions; contractual principal at 2026-09-30 excluding extension options |
| 2029 | 689.400 | US$m | 2029 Senior Notes 500.000 (September 2029) plus mortgage loans 91.700 and 72.700 (April 2029, two one-year extension options) and 25.000 principal of the January 2029 mortgage loan; contractual principal at 2026-09-30 excluding extension options |
| 2031 | 569.000 | US$m | $569 Million Term Loan Maturing 2031 (February 2031), fully drawn; contractual principal at 2026-09-30 excluding extension options |
| 2033 | 150.000 | US$m | $150 Million Term Loan Maturing 2033 (February 2033), fully drawn; contractual principal at 2026-09-30 excluding extension options |

The maturity table prints a dash for 2026 and 2030, so those years have no row, and principal excludes extension options and deferred financing costs.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Revenue | 1369.440 | 1349.860 | 1406.034 | US$m | Reported; latest column last-twelve-months |
| EBITDA (Reported) | 344.655 | 316.288 | 329.073 | US$m | Issuer-reported EBITDA, which includes its share of an unconsolidated joint venture's interest and depreciation; latest column last-twelve-months |
| EBITDA (Adjusted) | 361.622 | 334.615 | 356.845 | US$m | Issuer-adjusted EBITDA; latest column last-twelve-months |
| Total debt (carrying value) | 2220.081 | 2197.218 | 2196.326 | US$m | Balance-sheet Debt, net at the period end |
| Cash and cash equivalents | 409.809 | 410.160 | 448.342 | US$m | Excludes restricted cash reserves |
| Net debt | 1810.272 | 1787.058 | 1747.984 | US$m | Total debt less cash and cash equivalents |
| Cash interest paid | 103.711 | 104.330 | 112.061 | US$m | Interest paid per the cash flow supplement; latest column last-twelve-months |
| Liquidity (cash plus undrawn Revolver) | 909.809 | 1010.160 | 1048.342 | US$m | Cash and cash equivalents plus undrawn Revolver capacity |
| Total debt / EBITDA | 6.44 | 6.95 | 6.67 | x | Reported EBITDA |
| Net debt / EBITDA | 5.25 | 5.65 | 5.31 | x | Reported EBITDA |
| EBITDA / cash interest | 3.32 | 3.03 | 2.94 | x | Reported EBITDA |
| Total debt / adjusted EBITDA | 6.14 | 6.57 | 6.15 | x | Issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | 5.01 | 5.34 | 4.90 | x | Issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | 3.49 | 3.21 | 3.18 | x | Issuer-adjusted EBITDA |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2220.081 | 409.809 | 1810.272 | US$m | Gross debt is Debt, net: senior notes 994.037, Revolver 100.000, term loans 918.707 and mortgage loans 207.337, each net of deferred financing costs, with a mortgage fair value adjustment; lease liabilities are on their own line and excluded; principal 2231.000 (future minimum principal payments table of the FY2024 annual report, page 105, excluding extension options) |
| FY2025 / 2025-12-31 | 2197.218 | 410.160 | 1787.058 | US$m | Gross debt is Debt, net: senior notes 996.401, Revolver nil, term loans 1020.057 and mortgage loans 180.760, each net of deferred financing costs, with a mortgage fair value adjustment; lease liabilities excluded; principal 2204.750 (maturity table of the FY2025 annual report, page 75, excluding extension options) |
| 2026-09-30 | 2196.326 | 448.342 | 1747.984 | US$m | Gross debt is Debt, net: senior notes 497.774, Revolver nil, term loans 1508.747 and mortgage loans 189.805, each net of deferred financing costs, with a mortgage fair value adjustment; lease liabilities and held-for-sale liabilities excluded; principal 2208.400 (maturity table of the Q3 2026 quarterly report, page 42); reported, not pro forma |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2208.400 | -12.074 | 2196.326 | US$m | Reconciling items are deferred financing costs netted in debt (senior notes 2.226, term loans 10.253, mortgage loans 0.436, total -12.915) and a fair value adjustment included in one mortgage loan (+0.841); Revolver deferred financing costs of 6.5 sit in other assets and are not netted |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Sale of seven hotels near Midway Airport, Chicago, closed | 2026-10-08 | -90.000 | 1657.984 | 5.04 | US$m | Net debt falls by the USD 90.0 million of cash received at closing, whether the cash is held or used to repay debt; USD 20.0 million of seller financing, transaction costs, prorations and the sold hotels' EBITDA are not stated or not reflected; pro forma net leverage keeps those hotels' earnings in the 2026-09-30 last-twelve-months EBITDA; source: the Q3 2026 quarterly report |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1369.440 | 361.622 | US$m | Twelve months; revenue as reported; Adjusted EBITDA is the issuer-adjusted identity |
| FY2025 / 2025-12-31 | 1349.860 | 334.615 | US$m | Twelve months; revenue as reported; Adjusted EBITDA is the issuer-adjusted identity |
| 2026-09-30 | 1406.034 | 356.845 | US$m | Twelve months to 2026-09-30, last-twelve-months: FY2025 plus nine months 2026 less nine months 2025; Adjusted EBITDA is the issuer-adjusted identity; interim components unaudited |

The latest row is last-twelve-months built from reported components, and every row is twelve months.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | US$m | The filings state security for some facilities (the Revolver and term loans are unsecured credit facilities; the mortgage loans encumber cross-collateralized hotels) but no legal rank of any facility, and the security of the 2029 senior notes is not stated, so no row is drawn; the debt instruments register keeps the facts |

No qualification beyond the missing legal ranks named in the basis.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA, FY2025 | 316.288 | US$m | Issuer-reported EBITDA, the reported measure; FY2025 as printed in the annual report reconciliation |
| (Gain) loss on sale of hotel properties, net | 1.526 | US$m | Issuer add-back; realisation status not stated; FY2025 as printed in the annual report reconciliation |
| Transaction costs | 0.410 | US$m | Issuer add-back; realisation status not stated; FY2025 as printed in the annual report reconciliation |
| Pre-opening costs | 0.874 | US$m | Issuer add-back for brand-conversion expenses; realisation status not stated; FY2025 as printed in the annual report reconciliation |
| Loss on extinguishment of indebtedness, net | 0.047 | US$m | Issuer add-back; realisation status not stated; FY2025 as printed in the annual report reconciliation |
| Amortization of share-based compensation | 15.340 | US$m | Issuer add-back, classified as share-based compensation; realisation status not stated; FY2025 as printed in the annual report reconciliation |
| Other expenses (income) | 0.130 | US$m | Issuer add-back for items outside the normal course, with no further detail; FY2025 as printed in the annual report reconciliation |
| Adjusted EBITDA, FY2025 | 334.615 | US$m | Issuer-adjusted EBITDA, the specified adjusted measure; FY2025 as printed in the annual report reconciliation |

The bridge is FY2025 as the issuer prints it and the subtotal EBITDAre is not a step.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 30 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 25 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

### Statement periods

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_rlj.htm.jsonl | Annual report (Form 10-K) with auditor's report | FY2024 with FY2023 and FY2022 income statement comparatives | USD | thousands | RLJ Lodging Trust consolidated, including the Operating Partnership | US GAAP | Tier 1 audited | Revenue restatement check only | Superseded for later balances by the FY2025 annual report |
| 10-K_2025-12-31_rlj.htm.jsonl | Annual report (Form 10-K) with auditor's report | FY2025 with FY2024 and FY2023 comparatives | USD | thousands | RLJ Lodging Trust consolidated, including the Operating Partnership | US GAAP | Tier 1 audited | FY2024 and FY2025 statements, EBITDA and FFO reconciliations, debt and covenant notes, interest paid | Debt note shows terms before the February 2026 amendments |
| 10-Q_2026-03-31_rlj.htm.jsonl | Quarterly report (Form 10-Q) | Three months to 2026-03-31 | USD | thousands | RLJ Lodging Trust consolidated, including the Operating Partnership | US GAAP | Tier 2b unaudited, no auditor review stated | Context for the February 2026 refinancing | Superseded by later quarterly reports |
| 10-Q_2026-06-30_rlj.htm.jsonl | Quarterly report (Form 10-Q) | Three and six months to 2026-06-30 | USD | thousands | RLJ Lodging Trust consolidated, including the Operating Partnership | US GAAP | Tier 2b unaudited, no auditor review stated | Context for the June 30, 2026 drawdown | Balance sheet date is one day before the 2026 notes repayment |
| 10-Q_2026-09-30_rlj.htm.jsonl | Quarterly report (Form 10-Q) | Three and nine months to 2026-09-30 | USD | thousands | RLJ Lodging Trust consolidated, including the Operating Partnership | US GAAP | Tier 2b unaudited, no auditor review stated | Latest balance sheet, nine-month statements, debt, covenant and maturity notes, subsequent event | Unaudited; no balance sheet after the 2026-10-08 sale |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RLJ Lodging Trust | Registrant and sole general partner of the Operating Partnership; issuer of the statements | December 31 | USD | thousands | Consolidates the Operating Partnership, wholly owned subsidiaries and majority-controlled joint ventures | US GAAP | FY2022 to FY2025 income statements; balance sheets at 2023-12-31 to 2025-12-31 and 2026-03-31, 2026-06-30, 2026-09-30; nine months 2026 and 2025 |
| RLJ Lodging Trust, L.P. | Operating Partnership holding substantially all assets and liabilities; owned 99.5% of units by the Trust at 2026-09-30; named in the credit agreement and indenture exhibits | December 31 | USD | thousands | Not presented separately | US GAAP | Not supplied: no separate statements |
| RLJ Lodging Trust Master TRS, Inc. and other taxable REIT subsidiaries | Lessees of 91 of the 92 hotels at 2026-09-30 | December 31 | USD | thousands | Consolidated | US GAAP | Not supplied: no separate statements |
| Joint venture owning The Knickerbocker hotel | Consolidated joint venture with a 5% third-party interest | December 31 | USD | thousands | Consolidated | US GAAP | Not supplied: no separate statements |
| Unconsolidated joint venture owning one hotel | 50% non-controlling interest, equity method | December 31 | USD | thousands | Equity method | US GAAP | Not supplied: no separate statements |

Subsequent events: the 2026-10-08 sale of seven hotels is flagged under the post-balance-sheet adjustments and the February 2026 refinancing in the debt notes; neither is blended into period figures.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Statements in USD thousands restated to US$m in the money tables, with no rounding | 10-K_2025-12-31_rlj.htm.jsonl; 10-Q_2026-09-30_rlj.htm.jsonl | Unit | USD 2,196,326 thousand | US$m 2196.326 | The money unit is millions; the statements keep thousands | All |
| Last-twelve-months figures built as FY2025 plus nine months 2026 less nine months 2025 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | Derived period | FY2025 316,288; nine months 2026 255,712; nine months 2025 242,927 (EBITDA, USD thousand) | US$m 329.073 | Interim balance sheet dates need a twelve-month EBITDA and cash interest; every component is stated | 2026-09-30 |
| Net debt uses balance-sheet cash and equivalents, which excludes restricted cash reserves; cash flow cash includes them | 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | Definition | Cash flow closing cash 485,827 (USD thousand) | Cash and equivalents 448.342 (US$m) | Restricted cash reserves are held for capital expenditure and are not freely available | 2026-09-30 |
| Debt kept at balance-sheet carrying value; Revolver deferred financing costs of 6.5 million stay in other assets | 10-Q_2026-09-30_rlj.htm.jsonl, page 12 | None | Not applicable | Not applicable | The method fixes carrying value as the debt basis and the filing places those costs in assets | All |
| Mortgage loan principal of 25,000 (USD thousand) is the fixed-rate total of 525,000 less the 500,000 senior notes; the printed carrying value of 25,841 includes a fair value adjustment | 10-Q_2026-09-30_rlj.htm.jsonl, page 13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 | Split | Printed carrying value 25,841 (USD thousand) | Principal 25,000 and fair value adjustment 841 | The maturity table and the mortgage note together state the split | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Room revenue | 1,121,586 | 1,093,265 | 831,122 | 875,383 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Food and beverage revenue | 153,108 | 158,218 | 116,331 | 121,635 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Other revenue | 94,746 | 98,377 | 73,814 | 80,423 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Total revenues | 1,369,440 | 1,349,860 | 1,021,267 | 1,077,441 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Room expense | 288,567 | 293,405 | 220,101 | 228,902 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Food and beverage expense | 117,766 | 119,799 | 88,978 | 93,548 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Management and franchise fee expense | 107,978 | 102,757 | 78,848 | 81,221 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Other operating expenses | 363,631 | 371,558 | 278,610 | 298,793 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Total property operating expenses | 877,942 | 887,519 | 666,537 | 702,464 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Depreciation and amortization | 179,431 | 186,356 | 139,147 | 142,414 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Property tax, insurance and other | 107,043 | 101,315 | 80,340 | 78,392 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| General and administrative | 54,804 | 47,644 | 35,566 | 39,728 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Transaction costs | 320 | 410 | 240 | 866 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Total operating expenses | 1,219,540 | 1,223,244 | 921,830 | 963,864 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Other income, net | 5,342 | 3,477 | 2,706 | 2,853 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Interest income | 17,314 | 13,580 | 10,118 | 9,869 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Interest expense | -111,358 | -112,298 | -83,737 | -85,624 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| (Loss) gain on sale of hotel properties, net | 8,262 | -1,526 | 802 | -3,754 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Loss on extinguishment of indebtedness, net | -129 | -47 | -34 | -399 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Income before equity in (loss) income from unconsolidated joint ventures | 69,331 | 29,802 | 29,292 | 36,522 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Equity in (loss) income from unconsolidated joint ventures | 459 | -100 | -313 | -123 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Income before income tax expense | 69,790 | 29,702 | 28,979 | 36,399 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Income tax expense | -1,599 | -1,148 | -974 | -844 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Net income | 68,191 | 28,554 | 28,005 | 35,555 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Net (income) loss attributable to noncontrolling interest in consolidated joint ventures | 45 | -30 | 118 | -4 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Net income attributable to noncontrolling interest in the Operating Partnership | -215 | -15 | -44 | -88 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Net income attributable to RLJ | 68,021 | 28,509 | 28,079 | 35,463 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Preferred dividends | -25,115 | -25,115 | -18,836 | -18,836 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| Net income attributable to common shareholders | 42,906 | 3,394 | 9,243 | 16,627 | USD thousands | Reported | 10-K_2025-12-31_rlj.htm.jsonl, pages 87–88; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| EBITDA (Reported) | 344,655 | 316,288 | 242,927 | 255,712 | USD thousands | Issuer-reported EBITDA: net income plus depreciation and amortization, interest expense net of interest income, income tax expense and the issuer's share of an unconsolidated joint venture's interest and depreciation; non-GAAP reconciliation | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |
| EBITDA (Adjusted) | 361,622 | 334,615 | 254,185 | 276,415 | USD thousands | Issuer-adjusted: EBITDA plus loss (gain) on sale of hotel properties, transaction costs, pre-opening costs, loss on extinguishment of indebtedness, amortization of share-based compensation and other expenses (income) | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |

### Segment schedule

| Business unit | Period | Revenue | Hotel EBITDA | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| Hotel (the single reportable segment) | FY2024 | 1,369,440 | 398,755 | USD thousands | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |
| Hotel (the single reportable segment) | FY2025 | 1,349,860 | 369,078 | USD thousands | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |
| Hotel (the single reportable segment) | 9M 2025 | 1,021,267 | 280,324 | USD thousands | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |
| Hotel (the single reportable segment) | 9M 2026 | 1,077,441 | 303,833 | USD thousands | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |

The filings report one segment, so there is no corporate or elimination row, and revenue by unit is the total; revenue by geographic market is disclosed separately and is not a business-unit split.

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 68,191 | 28,554 | 28,005 | 35,555 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Loss (gain) on sale of hotel properties, net | -8,262 | 1,526 | -802 | 3,754 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Loss on extinguishment of indebtedness, net | 129 | 47 | 34 | 399 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Depreciation and amortization | 179,431 | 186,356 | 139,147 | 142,414 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Amortization of deferred financing costs | 6,623 | 7,551 | 5,632 | 5,617 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Non-cash lease expense and other amortization | 5,507 | 4,189 | 3,155 | 1,844 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Equity in loss (income) from unconsolidated joint ventures | -459 | 100 | 313 | 123 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Distributions of income from unconsolidated joint venture | 400 | Not supplied: printed as a dash for FY2025 | Not supplied: line not printed in the statement for 9M 2025 | Not supplied: line not printed in the statement for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Amortization of share-based compensation | 20,804 | 15,340 | 11,280 | 12,317 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Hotel and other receivables, net | 651 | -4,319 | -4,931 | -1,926 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Prepaid expense and other assets | 4,240 | -849 | -9,503 | -10,156 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Accounts payable and other liabilities | 1,906 | -5,166 | 17,960 | 31,140 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Advance deposits and deferred revenue | 7,897 | 10,837 | 640 | 3,396 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Accrued interest | -1,639 | -368 | -10,009 | -14,710 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Net Cash from Operating Activities | 285,419 | 243,798 | 180,921 | 209,767 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Acquisitions, net | -158,749 | Not supplied: printed as a dash for FY2025 | Not supplied: line not printed in the statement for 9M 2025 | Not supplied: line not printed in the statement for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Proceeds from sales of hotel properties, net | 19,503 | 69,042 | 23,638 | 12,632 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Improvements and additions to hotel properties and other assets | -136,484 | -126,403 | -111,711 | -76,171 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Net Cash from Investing Activities | -275,730 | -57,361 | -88,073 | -63,539 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Borrowings under Revolver | 200,000 | Not supplied: printed as a dash for FY2025 | Not supplied: line not printed in the statement for 9M 2025 | Not supplied: line not printed in the statement for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repayments of Revolver | -100,000 | -100,000 | -100,000 | Not supplied: printed as a dash for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Borrowings on Term Loans | 500,000 | 100,000 | 100,000 | 494,000 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repayments of Term Loans | -400,000 | Not supplied: printed as a dash for FY2025 | Not supplied: line not printed in the statement for 9M 2025 | Not supplied: line not printed in the statement for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repayment of 2026 Senior Notes | Not supplied: line not printed in the statement for FY2024 | Not supplied: line not printed in the statement for FY2025 | Not supplied: printed as a dash for 9M 2025 | -500,000 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Proceeds from mortgage loan | Not supplied: line not printed in the statement for FY2024 | Not supplied: line not printed in the statement for FY2025 | Not supplied: printed as a dash for 9M 2025 | 23,400 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repayments of mortgage loans | -200,000 | -26,250 | Not supplied: printed as a dash for 9M 2025 | -13,750 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repurchase of common shares under share repurchase programs | -21,998 | -28,591 | -28,591 | Not supplied: printed as a dash for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Repurchase of common shares to satisfy employee tax withholding requirements | -9,014 | -3,556 | -3,556 | -3,502 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Distributions on preferred shares | -25,115 | -25,115 | -18,836 | -18,836 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Distributions on common shares | -69,814 | -91,362 | -68,705 | -68,859 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Distributions on and redemption of Operating Partnership units | -340 | -449 | -320 | -337 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Payments of deferred financing costs | -5,410 | -2,197 | -2,104 | -14,578 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Distribution to consolidated joint venture partner | Not supplied: printed as a dash for FY2024 | -181 | Not supplied: line not printed in the statement for 9M 2025 | Not supplied: line not printed in the statement for 9M 2026 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Net Cash from Financing Activities | -131,691 | -177,701 | -122,112 | -102,462 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Net Cash Change | -122,002 | 8,736 | -29,264 | 43,766 | USD thousands | Reported; outflows negative | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Opening Cash | 555,327 | 433,325 | 433,325 | 442,061 | USD thousands | Reported; cash, cash equivalents and restricted cash reserves, as the cash flow statement prints them | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Closing Cash | 433,325 | 442,061 | 404,061 | 485,827 | USD thousands | Reported; cash, cash equivalents and restricted cash reserves, as the cash flow statement prints them | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| Cash Interest Paid | 103,711 | 104,330 | 87,534 | 95,265 | USD thousands | Reported; interest paid from the supplemental cash flow information (operating activities under US GAAP) | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Investment in hotel properties, net | 4,250,524 | 4,112,387 | 3,922,238 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Investment in unconsolidated joint ventures | 7,457 | 7,357 | 7,234 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 409,809 | 410,160 | 448,342 | USD thousands | Reported cash and cash equivalents, excluding restricted cash reserves | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Restricted cash reserves | 23,516 | 31,901 | 37,485 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Hotel and other receivables, net | 25,494 | 29,643 | 31,568 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Lease right-of-use assets | 128,111 | 123,524 | 121,610 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Prepaid expense and other assets | 38,968 | 27,158 | 52,344 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Hotel properties held for sale, net | Not supplied: line not printed in the statement for FY2024 | Not supplied: line not printed in the statement for FY2025 | 105,847 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total Assets | 4,883,879 | 4,742,130 | 4,726,668 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total Debt | 2,220,081 | 2,197,218 | 2,196,326 | USD thousands | Reported Debt, net: carrying value net of deferred financing costs, including a mortgage fair value adjustment; lease liabilities on their own line are not added | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Accounts payable and other liabilities | 154,643 | 141,568 | 168,505 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Advance deposits and deferred revenue | 40,242 | 51,029 | 49,149 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Lease liabilities | 119,102 | 118,189 | 118,630 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Accrued interest | 20,900 | 20,532 | 5,822 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Distributions payable | 30,634 | 30,934 | 31,239 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Liabilities associated with hotel properties held for sale | Not supplied: line not printed in the statement for FY2024 | Not supplied: line not printed in the statement for FY2025 | 5,257 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total Liabilities | 2,585,602 | 2,559,470 | 2,574,928 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Series A Cumulative Convertible Preferred Shares | 366,936 | 366,936 | 366,936 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Common shares of beneficial interest | 1,533 | 1,511 | 1,523 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 2,992,487 | 2,977,616 | 2,987,969 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive income | 13,788 | 1,919 | 13,416 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Distributions in excess of net earnings | -1,090,186 | -1,178,456 | -1,230,993 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total shareholders' equity | 2,284,558 | 2,169,526 | 2,138,851 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Noncontrolling interest in consolidated joint ventures | 7,589 | 7,438 | 7,442 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Noncontrolling interest in the Operating Partnership | 6,130 | 5,696 | 5,447 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total noncontrolling interest | 13,719 | 13,134 | 12,889 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |
| Total Equity | 2,298,277 | 2,182,660 | 2,151,740 | USD thousands | Reported; sign as printed | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2029 Senior Notes | Senior notes | 500,000 | 500,000 | Not applicable | Not applicable | Not supplied: security not stated | Not supplied: rank not stated | USD | 500,000 | Not applicable | 4.00% | fixed | Not applicable | Not applicable | Not applicable | September 2029 | 0 | 10-Q_2026-09-30_rlj.htm.jsonl, page 11; 10-K_2025-12-31_rlj.htm.jsonl, page 106 |
| Revolver | Revolving credit facility | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash; borrowing capacity equals the commitment | 600,000 | Unsecured credit facility | Not supplied: rank not stated | USD | Not supplied: printed as a dash | Not applicable | Not supplied: undrawn; rate printed as a dash | floating | SOFR plus a 10 bp adjustment (agreements at 2025-12-31) | Not supplied: grid of 135 bp to 220 bp at 2025-12-31; amended grid not printed | Not supplied: not stated | February 2030 (extension to February 2031 on conditions) | Not applicable | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–12; 10-K_2025-12-31_rlj.htm.jsonl, page 107 |
| $500 Million Term Loan Maturing 2027 | Term loan | 500,000 | 500,000 | 500,000 | 500,000 | Unsecured credit facility | Not supplied: rank not stated | USD | 500,000 | Not applicable | 4.97% effective after hedges | floating | SOFR plus a 10 bp adjustment (agreements at 2025-12-31) | Not supplied: grid of 135 bp to 220 bp at 2025-12-31; amended grid not printed | Not supplied: not stated | September 2027 (two one-year extension options at the issuer's discretion, subject to conditions) | Not supplied: not stated | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–12; 10-K_2025-12-31_rlj.htm.jsonl, page 107 |
| $300 Million Term Loan Maturing 2028 | Term loan | 300,000 | 300,000 | 300,000 | 300,000 | Unsecured credit facility | Not supplied: rank not stated | USD | 300,000 | Not applicable | 5.51% effective after hedges | floating | SOFR plus a 10 bp adjustment (agreements at 2025-12-31) | Not supplied: grid of 135 bp to 220 bp at 2025-12-31; amended grid not printed | Not supplied: not stated | April 2028 (two one-year extension options at the issuer's discretion, subject to conditions) | Not supplied: not stated | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–12; 10-K_2025-12-31_rlj.htm.jsonl, page 107 |
| $569 Million Term Loan Maturing 2031 | Term loan | 569,000 | 569,000 | 569,000 | 569,000 | Unsecured credit facility | Not supplied: rank not stated | USD | 569,000 | Not applicable | 5.51% effective after hedges | floating | SOFR plus a 10 bp adjustment (agreements at 2025-12-31) | Not supplied: grid of 135 bp to 220 bp at 2025-12-31; amended grid not printed | Not supplied: not stated | February 2031 (delayed draw, fully drawn) | Not supplied: not stated | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–12; 10-K_2025-12-31_rlj.htm.jsonl, page 107 |
| $150 Million Term Loan Maturing 2033 | Term loan | 150,000 | 150,000 | 150,000 | 150,000 | Unsecured credit facility | Not supplied: rank not stated | USD | 150,000 | Not applicable | 5.91% effective after hedges | floating | SOFR plus a 10 bp adjustment (agreements at 2025-12-31) | Not supplied: grid of 135 bp to 220 bp at 2025-12-31; amended grid not printed | Not supplied: not stated | February 2033 (delayed draw, fully drawn) | Not supplied: not stated | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–12; 10-K_2025-12-31_rlj.htm.jsonl, page 107 |
| Mortgage loan encumbering three hotels | Mortgage loan | 91,700 | 91,700 | Not applicable | Not applicable | Secured: 3 cross-collateralized hotels | Not supplied: rank not stated | USD | 91,700 | Not applicable | 5.21% effective after hedges | floating | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | April 2029 (two one-year extension options at the issuer's discretion) | 0 | 10-Q_2026-09-30_rlj.htm.jsonl, page 13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| Mortgage loan encumbering four hotels | Mortgage loan | 72,700 | 72,700 | Not applicable | Not applicable | Secured: 4 cross-collateralized hotels | Not supplied: rank not stated | USD | 72,700 | Not applicable | 5.20% effective after hedges | floating | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | April 2029 (two one-year extension options at the issuer's discretion) | 0 | 10-Q_2026-09-30_rlj.htm.jsonl, page 13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| Mortgage loan encumbering one hotel | Mortgage loan | 25,841 | 25,000 | Not applicable | Not applicable | Secured: one hotel | Not supplied: rank not stated | USD | 25,841 | Not applicable | 5.06% | fixed | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | January 2029 | 0 | 10-Q_2026-09-30_rlj.htm.jsonl, page 13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| Financing cost adjustment | Aggregate deferred financing costs on senior notes (2,226), term loans (10,253) and mortgage loans (436) | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -12,915 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–13 |

All amounts are USD thousands as the filing prints them; carrying values are as printed before the aggregate deferred financing costs, and the cells plus the financing cost adjustment equal Total Debt of 2,196,326 at 2026-09-30.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 316.288m | USD 255.712m | USD 242.927m | USD 329.073m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | Every component is stated; interim components unaudited |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 334.615m | USD 276.415m | USD 254.185m | USD 356.845m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | Every component is stated; interim components unaudited |
| Total revenues | LTM to 2026-09-30 | USD 1349.860m | USD 1077.441m | USD 1021.267m | USD 1406.034m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | Every component is stated; interim components unaudited |
| Cash Interest Paid | LTM to 2026-09-30 | USD 104.330m | USD 95.265m | USD 87.534m | USD 112.061m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 | Every component is stated; interim components unaudited |
| Capex (improvements and additions to hotel properties and other assets) | LTM to 2026-09-30 | USD 126.403m | USD 76.171m | USD 111.711m | USD 90.863m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | Total capex only; the split between maintenance and growth is not stated |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 243.798m | USD 209.767m | USD 180.921m | USD 272.644m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | Every component is stated; interim components unaudited |
| FFO (NAREIT definition, issuer-reported) | LTM to 2026-09-30 | USD 192.027m | USD 163.402m | USD 148.191m | USD 207.238m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38 | Issuer-defined FFO attributable to common shareholders and unitholders |
| Hotel EBITDA (segment measure) | LTM to 2026-09-30 | USD 369.078m | USD 303.833m | USD 280.324m | USD 392.587m | Calculated | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 | Every component is stated; interim components unaudited |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 344.655 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2024 / 2024-12-31 | USD | US$m | 6.44 | Calculated | Tier 1 audited | Year-end; audited |
| Net debt / EBITDA | Net debt / EBITDA (Reported); net debt = Total Debt less Cash & Equivalents | 1810.272 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 344.655 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2024 / 2024-12-31 | USD | US$m | 5.25 | Calculated | Tier 1 audited | Year-end; audited |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 344.655 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 103.711 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2024 / 2024-12-31 | USD | US$m | 3.32 | Calculated | Tier 1 audited | Year-end; audited |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 361.622 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2024 / 2024-12-31 | USD | US$m | 6.14 | Calculated | Tier 1 audited | Year-end; audited |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted); net debt = Total Debt less Cash & Equivalents | 1810.272 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 361.622 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2024 / 2024-12-31 | USD | US$m | 5.01 | Calculated | Tier 1 audited | Year-end; audited |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 361.622 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 103.711 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2024 / 2024-12-31 | USD | US$m | 3.49 | Calculated | Tier 1 audited | Year-end; audited |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 316.288 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2025 / 2025-12-31 | USD | US$m | 6.95 | Calculated | Tier 1 audited | Year-end; audited |
| Net debt / EBITDA | Net debt / EBITDA (Reported); net debt = Total Debt less Cash & Equivalents | 1787.058 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 316.288 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2025 / 2025-12-31 | USD | US$m | 5.65 | Calculated | Tier 1 audited | Year-end; audited |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 316.288 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 104.330 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2025 / 2025-12-31 | USD | US$m | 3.03 | Calculated | Tier 1 audited | Year-end; audited |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 334.615 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2025 / 2025-12-31 | USD | US$m | 6.57 | Calculated | Tier 1 audited | Year-end; audited |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted); net debt = Total Debt less Cash & Equivalents | 1787.058 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 334.615 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2025 / 2025-12-31 | USD | US$m | 5.34 | Calculated | Tier 1 audited | Year-end; audited |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 334.615 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 104.330 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2025 / 2025-12-31 | USD | US$m | 3.21 | Calculated | Tier 1 audited | Year-end; audited |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | 329.073 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 2026-09-30 | USD | US$m | 6.67 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| Net debt / EBITDA | Net debt / EBITDA (Reported); net debt = Total Debt less Cash & Equivalents | 1747.984 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | 329.073 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 2026-09-30 | USD | US$m | 5.31 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 329.073 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 112.061 | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 | 2026-09-30 | USD | US$m | 2.94 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | 356.845 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 2026-09-30 | USD | US$m | 6.15 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted); net debt = Total Debt less Cash & Equivalents | 1747.984 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | 356.845 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 2026-09-30 | USD | US$m | 4.90 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 356.845 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 112.061 | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 | 2026-09-30 | USD | US$m | 3.18 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Last-twelve-months components in the constructed period register; interim components unaudited; not pro forma for the 2026-10-08 sale |
| EBITDA margin (reported) | EBITDA (Reported) / Total revenues x 100 | 344.655 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 1369.440 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 25.17 | Calculated | Tier 1 audited | Percent |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Total revenues x 100 | 361.622 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 1369.440 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 26.41 | Calculated | Tier 1 audited | Percent; issuer-adjusted EBITDA |
| EBITDA margin (reported) | EBITDA (Reported) / Total revenues x 100 | 316.288 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 1349.860 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 23.43 | Calculated | Tier 1 audited | Percent |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Total revenues x 100 | 334.615 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 1349.860 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 24.79 | Calculated | Tier 1 audited | Percent; issuer-adjusted EBITDA |
| EBITDA margin (reported) | EBITDA (Reported) / Total revenues x 100 | 329.073 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 1406.034 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | LTM to 2026-09-30 | USD | US$m | 23.40 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Total revenues x 100 | 356.845 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 1406.034 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | LTM to 2026-09-30 | USD | US$m | 25.38 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent; issuer-adjusted EBITDA |
| Capex / revenue | Capex / Total revenues x 100 | 136.484 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 1369.440 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 9.97 | Calculated | Tier 1 audited | Percent; total capex, no maintenance and growth split |
| FFO / total debt | FFO / Total Debt x 100 | 215.015 | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68 | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 9.69 | Calculated | Tier 1 audited | Percent; issuer-defined FFO |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt x 100 | 285.419 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 12.86 | Calculated | Tier 1 audited | Percent |
| Free cash flow / total debt | (Net Cash from Operating Activities - Capex) / Total Debt x 100 | 148.935 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 6.71 | Calculated | Tier 1 audited | Percent; free cash flow is operating cash flow less capex, before distributions |
| (EBITDA less capex) / cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 208.171 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 103.711 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2024 | USD | US$m | 2.01 | Calculated | Tier 1 audited | Times |
| Liquidity / total debt | Liquidity (Cash & Equivalents + undrawn Revolver) / Total Debt x 100 | 909.809 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, page 108 | 2220.081 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2024 | USD | US$m | 40.98 | Calculated | Tier 1 audited | Percent; restricted cash excluded |
| Capex / revenue | Capex / Total revenues x 100 | 126.403 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 1349.860 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 9.36 | Calculated | Tier 1 audited | Percent; total capex, no maintenance and growth split |
| FFO / total debt | FFO / Total Debt x 100 | 192.027 | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68 | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 8.74 | Calculated | Tier 1 audited | Percent; issuer-defined FFO |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt x 100 | 243.798 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 11.10 | Calculated | Tier 1 audited | Percent |
| Free cash flow / total debt | (Net Cash from Operating Activities - Capex) / Total Debt x 100 | 117.395 | 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 5.34 | Calculated | Tier 1 audited | Percent; free cash flow is operating cash flow less capex, before distributions |
| (EBITDA less capex) / cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 189.885 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-K_2025-12-31_rlj.htm.jsonl, page 90 | 104.330 | 10-K_2025-12-31_rlj.htm.jsonl, page 123 | FY2025 | USD | US$m | 1.82 | Calculated | Tier 1 audited | Times |
| Liquidity / total debt | Liquidity (Cash & Equivalents + undrawn Revolver) / Total Debt x 100 | 1010.160 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, page 108 | 2197.218 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | 45.97 | Calculated | Tier 1 audited | Percent; restricted cash excluded |
| Capex / revenue | Capex / Total revenues x 100 | 90.863 | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | 1406.034 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | LTM to 2026-09-30 | USD | US$m | 6.46 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent; total capex, no maintenance and growth split |
| FFO / total debt | FFO / Total Debt x 100 | 207.238 | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38 | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | LTM to 2026-09-30 | USD | US$m | 9.44 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent; issuer-defined FFO |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt x 100 | 272.644 | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | LTM to 2026-09-30 | USD | US$m | 12.41 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent |
| Free cash flow / total debt | (Net Cash from Operating Activities - Capex) / Total Debt x 100 | 181.781 | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | LTM to 2026-09-30 | USD | US$m | 8.28 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent; free cash flow is operating cash flow less capex, before distributions |
| (EBITDA less capex) / cash interest | (EBITDA (Reported) - Capex) / Cash Interest Paid | 238.210 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | 112.061 | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 | LTM to 2026-09-30 | USD | US$m | 2.13 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Times |
| Liquidity / total debt | Liquidity (Cash & Equivalents + undrawn Revolver) / Total Debt x 100 | 1048.342 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 12 | 2196.326 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | LTM to 2026-09-30 | USD | US$m | 47.73 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent; restricted cash excluded |
| Revenue growth | Total revenues FY2025 / Total revenues FY2024 - 1 x 100 | 1349.860 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | 1369.440 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 | FY2025 | USD | US$m | -1.43 | Calculated | Tier 1 audited | Percent change |
| Revenue growth | Total revenues 9M 2026 / Total revenues 9M 2025 - 1 x 100 | 1077.441 | 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | 1021.267 | 10-Q_2026-09-30_rlj.htm.jsonl, page 3 | 9M 2026 | USD | US$m | 5.50 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent change; unaudited |
| EBITDA (Reported) growth | EBITDA (Reported) FY2025 / EBITDA (Reported) FY2024 - 1 x 100 | 316.288 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | 344.655 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 | FY2025 | USD | US$m | -8.23 | Calculated | Tier 1 audited | Percent change |
| EBITDA (Reported) growth | EBITDA (Reported) 9M 2026 / EBITDA (Reported) 9M 2025 - 1 x 100 | 255.712 | 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 242.927 | 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 9M 2026 | USD | US$m | 5.26 | Calculated | Tier 1 audited annual plus Tier 2b unaudited interim | Percent change; unaudited |

Percentages and times in the free-name rows are the operands' quotient as stated, and fixed rows are leverage and cover on reported EBITDA first and issuer-adjusted EBITDA second.

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Operating | Occupancy (annual basis: comparable properties of the FY2025 annual report) | 72.7% | 71.6% | Not supplied: different comparable set | Not supplied: different comparable set | Down in FY2025 | Source: 10-K_2025-12-31_rlj.htm.jsonl, page 64; period-end set differs from the nine-month set |
| Operating | ADR (annual basis: comparable properties of the FY2025 annual report) | $200.88 | $200.22 | Not supplied: different comparable set | Not supplied: different comparable set | Down in FY2025 | Source: 10-K_2025-12-31_rlj.htm.jsonl, page 64 |
| Operating | RevPAR (annual basis: comparable properties of the FY2025 annual report) | $145.99 | $143.43 | Not supplied: different comparable set | Not supplied: different comparable set | Down in FY2025 | Source: 10-K_2025-12-31_rlj.htm.jsonl, page 64 |
| Operating | Occupancy (nine-month basis: comparable properties of the Q3 2026 quarterly report) | Not supplied: different comparable set | Not supplied: different comparable set | 72.6% | 74.4% | Up in 9M 2026 | Source: 10-Q_2026-09-30_rlj.htm.jsonl, page 34 |
| Operating | ADR (nine-month basis: comparable properties of the Q3 2026 quarterly report) | Not supplied: different comparable set | Not supplied: different comparable set | $201.29 | $210.32 | Up in 9M 2026 | Source: 10-Q_2026-09-30_rlj.htm.jsonl, page 34 |
| Operating | RevPAR (nine-month basis: comparable properties of the Q3 2026 quarterly report) | Not supplied: different comparable set | Not supplied: different comparable set | $146.21 | $156.51 | Up in 9M 2026 | Source: 10-Q_2026-09-30_rlj.htm.jsonl, page 34 |
| Portfolio | Hotel properties owned at period end | 96 | 93 | 95 | 92 | Down in FY2025 and in 9M 2026 | Source: 10-K_2025-12-31_rlj.htm.jsonl, page 63; 10-Q_2026-09-30_rlj.htm.jsonl, page 30; period-end, not averaged |
| Earnings | Hotel EBITDA, segment measure (USD thousands) | 398,755 | 369,078 | 280,324 | 303,833 | Down in FY2025; up in 9M 2026 | Source: 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25; period flow |
| Earnings | FFO attributable to common shareholders and unitholders (USD thousands) | 215,015 | 192,027 | 148,191 | 163,402 | Down in FY2025; up in 9M 2026 | Source: 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38; period flow, issuer definition |
| Earnings | Adjusted FFO (USD thousands) | 241,846 | 209,418 | 160,684 | 180,040 | Down in FY2025; up in 9M 2026 | Source: 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38; period flow, issuer definition |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Unadjusted EBITDA: net income plus interest, tax, depreciation and amortization | EBITDA also adds the issuer's share of an unconsolidated joint venture's interest and depreciation (USD thousand 1,390 in FY2024 and 1,512 in FY2025); Hotel EBITDA of 369,078 for FY2025 is a different segment measure before corporate costs | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123 | FY2024; FY2025; interim | Low: the joint venture line is under 0.5% of EBITDA; Hotel EBITDA is 52,790 above EBITDA for FY2025 (USD thousand) | Liquidity; Fundamental credit; Earnings quality | Use the issuer's EBITDA as Reported and show Adjusted beside it; never use Hotel EBITDA as the leverage denominator |
| Total debt | Balance-sheet carrying value, current plus long-term | Debt, net of deferred financing costs; the maturity table shows principal | 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 | 2026-09-30 | Carrying value 2,196,326 against principal 2,208,400 (USD thousand), a difference of 12,074 | Refinancing & LME; Liquidity | Leverage uses carrying value; principal is kept in the reconciliation and the maturity ladder |
| Net debt | Total debt less cash and cash equivalents | Cash flow statement cash includes restricted cash reserves (485,827 against cash and equivalents 448,342, USD thousand) | 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 | 2026-09-30 | Restricted cash reserves of 37,485 (USD thousand) would lower net debt by that amount if counted | Liquidity; Fundamental credit | Net debt excludes restricted cash reserves, which are held for capital expenditure |
| Lease obligations | Lease liabilities on their own balance-sheet lines are not added to Total Debt | Lease liabilities of 118,630 (USD thousand) are presented on their own line | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 | 2026-09-30 | Would add 5.40% of Total Debt if included | Fundamental credit; Liquidity | Kept out of Total Debt and carried to the analysis as a separate claim |
| Cash interest | Cash interest paid, from the cash flow statement | Interest paid 95,265 for nine months 2026 against interest expense 85,624 and interest expense net of interest income 75,755 (USD thousand) | 10-Q_2026-09-30_rlj.htm.jsonl, page 25; 10-Q_2026-09-30_rlj.htm.jsonl, page 3; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 | 9M 2026 | Cash paid exceeds expense by 9,641 (USD thousand) in nine months 2026 | Fundamental credit | Cover uses cash interest paid, as the method requires |
| Sale of seven hotels (multi-figure event) | All figures of one event shown, each with its role, in one row | Consideration about 110,000 (USD thousand) is cash of about 90,000 plus seller financing of about 20,000; the hotels were held for sale at a net carrying value of 105,847 at 2026-09-30 | 10-Q_2026-09-30_rlj.htm.jsonl, pages 9–10 | 2026-10-08 | Pro forma net debt uses the 90,000 of cash only | Liquidity; Fundamental credit | Cash received serves the net debt adjustment; consideration and carrying value serve context |
| June 2026 drawdown (multi-figure event) | All figures of one event shown, each with its role, in one row | Term loans of 494,000 drawn on 2026-06-30 raised cash to 937,599 at 2026-06-30; the 2026 notes of 500,000 were repaid on 2026-07-01 (USD thousand) | 10-Q_2026-06-30_rlj.htm.jsonl, page 2; 10-Q_2026-06-30_rlj.htm.jsonl, page 25; 10-Q_2026-09-30_rlj.htm.jsonl, page 11 | 2026-06-30; 2026-09-30 | Cash and debt at 2026-06-30 are not like-for-like with other quarter-ends | Liquidity | The leverage tables use 2026-09-30, not the interim 2026-06-30 balance sheet |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover at FY2024, FY2025 and 2026-09-30 | Ready | Interim figures unaudited; latest row last-twelve-months | None |
| Liquidity inputs and maturity ladder at 2026-09-30 | Ready with Limitations | Revolver access depends on covenant compliance; ladder excludes extension options; pro forma cash not established | Obtain a post-sale balance sheet |
| Pro forma net debt after the 2026-10-08 sale | Ready with Limitations | Seller financing, costs and the sold hotels' EBITDA not stated | Obtain the later filing or earnings release that states them |
| Debt stack by legal rank | Not Ready | No source states the legal rank of any facility | Obtain the executed credit agreement and indentures |
| Covenant headroom | Not Ready | Covenant levels and compliance are printed but no ratio value | Obtain compliance certificates or the credit agreement definitions |
| Forecast base | Ready with Limitations | No management outlook; capex not split between maintenance and growth | Obtain the earnings release and outlook |

## Calculations

Each row below is worked from figures printed in the supplied filings; amounts are US$m (the filings print USD thousands) and ratios are rounded half up to two decimals.

| Calc ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Net debt at FY2024 = Total Debt less Cash & Equivalents | 2220.081 less 409.809 | 1810.272 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 |
| C2 | Net debt at FY2025 | 2197.218 less 410.160 | 1787.058 | 10-K_2025-12-31_rlj.htm.jsonl, page 87 |
| C3 | Net debt at 2026-09-30 | 2196.326 less 448.342 | 1747.984 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2 |
| C4 | Last-twelve-months EBITDA (Reported) to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 316.288 + 255.712 - 242.927 | 329.073 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |
| C5 | Last-twelve-months EBITDA (Adjusted) to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 334.615 + 276.415 - 254.185 | 356.845 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |
| C6 | Last-twelve-months total revenues to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 1349.860 + 1077.441 - 1021.267 | 1406.034 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-Q_2026-09-30_rlj.htm.jsonl, page 3 |
| C7 | Last-twelve-months cash interest paid to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 104.330 + 95.265 - 87.534 | 112.061 | 10-K_2025-12-31_rlj.htm.jsonl, page 123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |
| C8 | Last-twelve-months capex to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 126.403 + 76.171 - 111.711 | 90.863 | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| C9 | Last-twelve-months net cash from operating activities to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 243.798 + 209.767 - 180.921 | 272.644 | 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| C10 | Last-twelve-months FFO to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 192.027 + 163.402 - 148.191 | 207.238 | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38 |
| C11 | Last-twelve-months Hotel EBITDA to 2026-09-30 = FY2025 + 9M 2026 - 9M 2025 | 369.078 + 303.833 - 280.324 | 392.587 | 10-K_2025-12-31_rlj.htm.jsonl, pages 122–123; 10-Q_2026-09-30_rlj.htm.jsonl, page 25 |
| C12 | Pro forma net debt after the 2026-10-08 sale = net debt at 2026-09-30 less cash received at closing | 1747.984 less 90.000 | 1657.984 | 10-Q_2026-09-30_rlj.htm.jsonl, page 9 |
| C13 | Pro forma net leverage = pro forma net debt / last-twelve-months EBITDA (Reported) | 1657.984 / 329.073 | 5.04 | Not applicable: derived from rows above |
| C14 | Liquidity = Cash & Equivalents + undrawn Revolver | 409.809 + 500.000; 410.160 + 600.000; 448.342 + 600.000 | 909.809; 1010.160; 1048.342 | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, page 108; 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 12 |
| C15 | Reconciling items = carrying value less contractual principal at 2026-09-30 | 2196.326 less 2208.400 | -12.074 | 10-Q_2026-09-30_rlj.htm.jsonl, page 2; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| C16 | Maturity ladder = sum of the rows; 2029 row = senior notes + mortgage loans | 500.000 + 300.000 + 689.400 + 569.000 + 150.000 (2026 and 2030 print dashes, so no rows); 2029: 500.000 + 91.700 + 72.700 + 25.000 | 2208.400; 689.400 | 10-Q_2026-09-30_rlj.htm.jsonl, page 11; 10-Q_2026-09-30_rlj.htm.jsonl, page 13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| C17 | Deferred financing costs netted and the mortgage fair value adjustment | 2.226 + 10.253 + 0.436; fair value adjustment 25.841 - 25.000; principal less carrying value 2208.400 - 2196.326 | 12.915; 0.841; 12.074 (= 12.915 - 0.841) | 10-Q_2026-09-30_rlj.htm.jsonl, pages 11–13; 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| C18 | Change in EBITDA (Reported): FY2025 on FY2024; 9M 2026 on 9M 2025 | 316.288 / 344.655 - 1; 255.712 / 242.927 - 1 | -8.23%; 5.26% | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |
| C19 | FY2025 add-backs = Adjusted EBITDA less EBITDA; share-based compensation share | 334.615 less 316.288; 15.340 / 18.327 x 100 | 18.327; 83.70% | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 |
| C20 | Operating cash flow rise against EBITDA rise, 9M 2026 on 9M 2025 | 209.767 - 180.921; 255.712 - 242.927; payables 31.140 - 17.960; 28.846 / 12.785 | 28.846; 12.785; 13.180; 2.26 times | 10-Q_2026-09-30_rlj.htm.jsonl, page 6; 10-Q_2026-09-30_rlj.htm.jsonl, page 39 |
| C21 | Free cash flow after capex less distributions, 9M 2026 | 209.767 - 76.171; distributions 18.836 + 68.859 + 0.337; difference | 133.596; 88.032; 45.564 | 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| C22 | Capex / revenue: FY2025; last-twelve-months | 126.403 / 1349.860; 90.863 / 1406.034 | 9.36%; 6.46% | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, page 3; 10-Q_2026-09-30_rlj.htm.jsonl, page 6 |
| C23 | FFO / Total Debt: FY2024; FY2025; 2026-09-30 | 215.015 / 2220.081; 192.027 / 2197.218; 207.238 / 2196.326 | 9.69%; 8.74%; 9.44% | 10-K_2025-12-31_rlj.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rlj.htm.jsonl, pages 37–38 |
| C24 | Rate step-up on the replaced notes, percentage points (effective term loan rates after hedges less the notes' 3.75%) | 5.51 - 3.75; 5.91 - 3.75 | 1.76; 2.16 | 10-Q_2026-09-30_rlj.htm.jsonl, page 11; 10-Q_2026-09-30_rlj.htm.jsonl, page 12; 10-K_2025-12-31_rlj.htm.jsonl, page 106 |
| C25 | 2029 principal as a share of total principal | 689.400 / 2208.400 x 100 | 31.22% | 10-Q_2026-09-30_rlj.htm.jsonl, page 42 |
| C26 | Statement identities: assets = liabilities + equity; operating + investing + financing = net change; opening + net change = closing (USD thousand) | FY2024 4,883,879 = 2,585,602 + 2,298,277; FY2025 4,742,130 = 2,559,470 + 2,182,660; 2026-09-30 4,726,668 = 2,574,928 + 2,151,740; 9M 2026: 209,767 - 63,539 - 102,462 = 43,766 and 442,061 + 43,766 = 485,827; debt note total 2,196,326 = balance sheet | All hold exactly | 10-K_2025-12-31_rlj.htm.jsonl, page 87; 10-K_2025-12-31_rlj.htm.jsonl, page 90; 10-Q_2026-09-30_rlj.htm.jsonl, pages 2–3; 10-Q_2026-09-30_rlj.htm.jsonl, page 6; 10-Q_2026-09-30_rlj.htm.jsonl, page 10 |
| C27 | EBITDA bridge FY2025: reported EBITDA plus the six add-backs equals Adjusted EBITDA | 316.288 + 1.526 + 0.410 + 0.874 + 0.047 + 15.340 + 0.130 | 334.615 | 10-K_2025-12-31_rlj.htm.jsonl, pages 68–69 |
| C28 | Figures quoted in the analysis, rounded half up to two decimals, shown as exact value then quoted value | Liquidity at 2026-09-30 (cash plus undrawn revolver): 1048.342 ; Cash and cash equivalents at 2026-09-30: 448.342 ; Undrawn revolver at 2026-09-30: 600.000 ; Restricted cash reserves at 2026-09-30: 37.485 ; Net debt at 2026-09-30: 1747.984 ; Pro forma net debt after the 2026-10-08 sale: 1657.984 ; Cash received at closing on 2026-10-08: 90.000 ; Seller financing on 2026-10-08: 20.000 ; Consideration for the seven hotels: 110.000 ; LTM reported EBITDA: 329.073 ; FY2024 reported EBITDA: 344.655 ; FY2025 reported EBITDA: 316.288 ; LTM cash interest paid: 112.061 ; Reported EBITDA change, FY2025 on FY2024 (%): -8.23 ; Reported EBITDA change, 9M 2026 on 9M 2025 (%): 5.26 ; Share-based compensation add-back FY2025: 15.340 ; Total add-backs FY2025 (Adjusted EBITDA less EBITDA): 18.327 ; Share-based compensation share of FY2025 add-backs (%): 83.70 ; Rise in operating cash flow, 9M 2026 on 9M 2025: 28.846 ; Rise in reported EBITDA, 9M 2026 on 9M 2025: 12.785 ; Larger increase in payables and other liabilities, 9M 2026 on 9M 2025: 13.180 ; Free cash flow after capex, 9M 2026: 133.596 ; Distributions, 9M 2026 (preferred, common and OP units): 88.032 ; Free cash flow less distributions, 9M 2026: 45.564 ; Capex / revenue FY2025 (%): 9.36 ; Capex / revenue LTM (%): 6.46 ; Capex 9M 2025: 111.711 ; Capex 9M 2026: 76.171 ; Principal due 2027: 500.000 ; Principal due 2028: 300.000 ; Principal due 2029: 689.400 ; 2029 maturities as a share of principal (%): 31.22 ; Coupon step-up on the replaced notes, new term loan at 5.51% less 3.75% (percentage points): 1.76 ; Coupon step-up on the replaced notes, new term loan at 5.91% less 3.75% (percentage points): 2.16 ; Joint venture adjustment inside FY2025 EBITDA: 1.512 ; Deferred financing costs netted in debt at 2026-09-30 (notes 2.226, term loans 10.253, mortgage 0.436): 12.915 ; Principal above carrying value at 2026-09-30: 12.074 ; Fair value adjustment inside the 25.841 mortgage loan carrying value: 0.841 | 1,048.34 ; 448.34 ; 600.00 ; 37.49 ; 1,747.98 ; 1,657.98 ; 90.00 ; 20.00 ; 110.00 ; 329.07 ; 344.66 ; 316.29 ; 112.06 ; 8.23 ; 5.26 ; 15.34 ; 18.33 ; 83.70 ; 28.85 ; 12.79 ; 13.18 ; 133.60 ; 88.03 ; 45.56 ; 9.36 ; 6.46 ; 111.71 ; 76.17 ; 500.00 ; 300.00 ; 689.40 ; 31.22 ; 1.76 ; 2.16 ; 1.51 ; 12.92 ; 12.07 ; 0.84 | Not applicable: rounding of the rows above and of printed figures |

## Gaps

- The balance sheet at 2025-09-30 is not in any supplied filing, so the 9M 2025 column is left out of the balance sheet table; it restricts only a year-earlier comparison of debt and cash. Severity Low; the action is to supply the third-quarter 2025 quarterly report.
- The filings report one hotel segment, so no segment revenue other than the total is stated and the segment schedule carries Hotel EBITDA only; revenue by geographic market is disclosed but is not a business-unit split. Severity Low; no action closes this.
- Instrument-level debt amounts are printed before the aggregate deferred financing costs and net only by group, so the debt instruments register uses the printed amounts plus one financing cost adjustment. Severity Low; no action closes this.
- Term loan amortisation, floors, margins and reference rates for the amended agreements are not printed in the quarterly reports, and the annual report prints a margin grid only for the agreements at 2025-12-31; this restricts rate-sensitivity work beyond the printed hedge and market-risk tables. Severity Low; the action is to supply the executed credit agreement.
- No source states the legal rank of any facility and the security of the 2029 senior notes is not stated, so the debt stack is not drawn; this restricts any rank-based leverage or recovery view. Severity Medium; the action is to supply the executed indenture and credit agreement.
- The maturity table prints a dash for 2026 and 2030, so the maturity ladder has no rows for those years and principal excludes extension options. Severity Low; no action closes this.
- After the sale of seven hotels on 2026-10-08 the filing states cash of about USD 90.0 million and seller financing of about USD 20.0 million but not transaction costs, prorations, the use of the cash or the sold hotels' EBITDA, and no balance sheet after the sale is supplied; pro forma net debt and leverage are therefore indicative, pro forma cash is not established, and the pro forma leverage is flattered if the sold hotels earned a positive EBITDA. Severity Medium; the action is to obtain a post-sale balance sheet.
- Covenant levels and compliance are printed but no covenant ratio value is, so covenant headroom is not calculable from the supplied filings. Severity Medium; the action is to obtain compliance certificates or the credit agreement definitions.
- Capital spending is stated in total only, with no split between maintenance and growth. Severity Low; the action is to obtain the issuer's capital plan.
- Several cash flow lines are printed as dashes or are absent from the interim statements, and each is shown as not supplied rather than zero. Severity Low; no action closes this.
- Only year-to-date cash flows are reported for 2026, so a standalone third-quarter 2026 or fourth-quarter 2025 cash flow is not stated. Severity Low; no action closes this.
- Operating statistics are printed for comparable-property sets that differ between the annual report and the quarterly reports, so the annual and nine-month series are kept in separate rows and not joined. Severity Low; no action closes this.
- The statements are the Trust's consolidated statements and no Operating Partnership or guarantor statements are supplied, so debt and cash cannot be split by obligor. Severity Low; the action is to supply guarantor information if the debt documents require it.

## Next module

The orchestrator selects the next module.
