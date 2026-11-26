---
issuer_id: mrp-2017206
module_id: CP-1
analysis_date: 2026-11-18
pathway: credit_snapshot
run_id: mrp-2017206-2026-11-18-credit_snapshot-host
module_status: Complete
---

# Financial foundation: Millrose Properties, Inc.

## Request

Financial foundation for Millrose Properties, Inc. (issuer mrp-2017206) as of 2026-11-18 on the credit snapshot pathway. The scope is the supplied annual and quarterly filings and earnings releases through the quarter ended September 30, 2026: statements, debt, liquidity, leverage and cover, in the issuer's reporting currency, US dollars.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_d931976d10k.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-03-31 | e685cb45ef45714af1ff77b6071c260056c9bf7629c6ccf8221904612d25d66b | Read for the pre-spin predecessor statements and the registrant balance sheet at 2024-12-31; no figure of it enters the period tables (perimeter differs) |
| 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-03-02 | 616c31e658faf45bda14e3d1fedcd4f03abb77762a4a96655c61315e9524dee6 | Read for FY2025 statements, the Dec 31, 2025 balance sheet, the debt note, cash paid for interest and the three-month 2025 reconciliation |
| 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-06 | 1603ca30155d7962cf13cbe1efda0aef742e66bf0128cf7a1ad64e5832f40c5f | Read for Q1 2026 statements, the March 31, 2026 balance sheet, debt table and Q1 2025 comparatives used in last-twelve-months construction |
| 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | 8bcafc9553b665072308d493d01435a99c8ed68ab391157b2bf9ed4e35bb15b9 | Read for Q2 2026 and six-month statements, the June 30, 2026 balance sheet, debt table and six-month 2025 comparatives |
| 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 | 5f450549c337801f5ee478bc162b2ba8e8e3ac6ae044144528410d453192f859 | Read for Q3 2026 and nine-month statements, the September 30, 2026 balance sheet, debt note, liquidity, market risk, commitments and subsequent events |
| EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl | Earnings release for the first quarter of 2026 (Exhibit 99.1) | 2026-05-06 | d0fad875bea6407807bfff31fe5ef8577b8b504eac03fc33d12558374693ca67 | Read for AFFO, Invested Capital, yield and the stated debt-to-capitalization target |
| EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl | Earnings release for the second quarter of 2026 (Exhibit 99.1) | 2026-08-04 | 77008254d41a40001e7f09a8cd686cfc1e3b7040c9133bbdd32f742dc2abab8e | Read for AFFO, Invested Capital, yield and the stated liquidity and leverage |
| EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl | Earnings release for the third quarter of 2026 (Exhibit 99.1) | 2026-10-27 | af1a4bc377ad60c3319197566b57454eb01d454d76b36112b8706eac8367851a | Read for AFFO, Invested Capital, yield, run rate, stated liquidity and leverage and the Dream Finders capital support |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | c43d157c0ed000fad83c2b44602b77bbfa099626b611996fd7b7c92d667e246c | Read for the source inventory, the gaps and the conflicts already recorded, and the perimeter and period limits |

## Findings

### Bottom line

Leverage rose sharply in the third quarter: total debt reached 4.95x last-twelve-months EBITDA at September 30, 2026, against 3.83x at June 30, 2026, which leaves creditors more exposed to a slowdown in homesite takedowns.
Basis: calculation C6

Debt to total capitalization reached 36.33%, above the 33% maximum that management stated as its target in the first quarter, while cash interest cover of 4.66x is the first reading that carries a full year of senior note coupons. Liquidity fell to about USD 0.8 billion from about USD 1.4 billion at June 30, 2026. A further USD 1.0 billion of notes closed on October 6, 2026 and about USD 1.1 billion of Dream Finders funding followed; neither is in the September 30, 2026 figures.
Basis: calculation C6; calculation C8; calculation C7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 40–41; EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl, page 3; EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl, page 2; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 4.35 | 4.27 | x | Fiscal year: reported EBITDA of the year; FY2025 includes pre-spin expenses of USD 24.96 million and the first months of the successor company, which overstates leverage. |
| 2026-03-31 | 3.99 | 3.90 | x | Interim: total debt at carrying value over last-twelve-months reported EBITDA built as FY2025 plus the 2026 stub less the 2025 stub. |
| 2026-06-30 | 3.83 | 3.78 | x | Interim: total debt at carrying value over last-twelve-months reported EBITDA built as FY2025 plus the 2026 stub less the 2025 stub. |
| 2026-09-30 | 4.95 | 4.85 | x | Interim: total debt at carrying value, including the USD 210.596 million single-family rental facility, over last-twelve-months reported EBITDA built as FY2025 plus the 2026 stub less the 2025 stub. |

Reported EBITDA is calculated from income from operations because the issuer states no EBITDA, and it excludes interest and preferred income, so the ratios are on a stricter base than a net-income-based measure.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | 20.30 | x | Fiscal year: the 2030 and 2032 notes issued in August and September 2025 paid no coupon in 2025, so cash interest of the year is understated and cover overstated. |
| 2026-03-31 | 6.76 | x | Interim: last-twelve-months reported EBITDA over last-twelve-months cash interest paid; coupons are semi-annual, so cash interest is lumpy by quarter. |
| 2026-06-30 | 7.58 | x | Interim: last-twelve-months reported EBITDA over last-twelve-months cash interest paid; coupons are semi-annual, so cash interest is lumpy by quarter. |
| 2026-09-30 | 4.66 | x | Interim: the first window that holds all four semi-annual coupon dates of the 2030 and 2032 notes; excludes coupons on the notes issued after quarter end. |

Cash interest paid lags interest expense, so cover is higher than a cover on interest expense would be until a full year of coupons is in the window.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 35.046 | 1225 | US$m | Cash from the balance sheet; undrawn is the revolving facility commitment of USD 1,335 million less USD 110 million drawn. |
| 2026-03-31 | 49.276 | 1410 | US$m | Revolving facility USD 1,335 million less USD 425 million drawn plus the USD 500 million delayed draw term loan, undrawn. |
| 2026-06-30 | 34.171 | 1350 | US$m | Revolving facility USD 1,335 million less USD 485 million drawn plus the USD 500 million delayed draw term loan, undrawn. |
| 2026-09-30 | 64.535 | 774.978 | US$m | Revolving facility USD 1,385 million less USD 635 million, delayed draw term loan USD 500 million less USD 496.875 million and single-family rental facility USD 235 million less USD 213.147 million; availability is subject to borrowing bases that are not printed. |

Undrawn commitments are contractual and subject to borrowing-base compliance whose headroom the filings do not print, and no letters of credit are disclosed.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2026 | 4 | US$m | Purchase money mortgages: the USD 4 million due in the fourth quarter of 2026 under the Q3 2026 wording (the 2025 annual report put USD 29 million in 2026). |
| 2027 | 29 | US$m | Purchase money mortgages: USD 29 million due in 2027 under the Q3 2026 wording; non-recourse and indemnified by a counterparty. |
| 2028 | 213.147 | US$m | Single-family rental secured credit facility maturing 2028-09-29, subject to a one-year extension option; limited recourse. |
| 2030 | 2381.875 | US$m | Revolving facility USD 635 million and delayed draw term loan USD 496.875 million (both due 2030-03-25) plus the 6.375% senior notes due 2030 of USD 1,250 million. |
| 2032 | 750 | US$m | 6.250% senior notes due 2032. |

The ladder is drawn at 2026-09-30 on contractual principal and leaves out the 2029 and 2031 senior notes issued on 2026-10-06.

### Financials and credit metrics

| Metric | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 |
|---|---|---|---|---|
| Revenue, last twelve months (US$m) | 600.461 | 712.692 | 760.542 | 792.286 |
| EBITDA (Reported), last twelve months (US$m) | 486.068 | 606.518 | 647.291 | 674.906 |
| EBITDA margin, last twelve months (%) | 80.95 | 85.10 | 85.11 | 85.18 |
| Cash interest paid, last twelve months (US$m) | 23.942 | 89.693 | 85.351 | 144.864 |
| Total debt, carrying value (US$m) | 2112.062 | 2417.184 | 2478.732 | 3338.052 |
| Cash (US$m) | 35.046 | 49.276 | 34.171 | 64.535 |
| Net debt (US$m) | 2077.016 | 2367.908 | 2444.561 | 3273.517 |
| Total debt / EBITDA (x) | 4.35 | 3.99 | 3.83 | 4.95 |
| Net debt / EBITDA (x) | 4.27 | 3.90 | 3.78 | 4.85 |
| EBITDA / cash interest (x) | 20.30 | 6.76 | 7.58 | 4.66 |
| Debt / total capitalization (%) | 26.51 | 29.23 | 29.75 | 36.33 |
| Undrawn committed facilities (US$m) | 1225 | 1410 | 1350 | 774.978 |
| Cash plus undrawn committed facilities (US$m) | 1260.046 | 1459.276 | 1384.171 | 839.513 |
| Invested Capital, management measure (US$m) | 8469.679 | 8706.272 | 8798.999 | 9245.4 |
| Weighted average yield, management measure (%) | 9.2 | 9.2 | 9.2 | 9.3 |
| AFFO of the reporting period, management measure (US$m) | 427.904 | 125.918 | 127.559 | 133.519 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2112.062 | 35.046 | 2077.016 | US$m | Reported. Gross debt is the balance-sheet carrying value of debt obligations, net of USD 30.938 million issuance costs; contractual principal USD 2,143 million. |
| 2026-03-31 | 2417.184 | 49.276 | 2367.908 | US$m | Reported. Carrying value of debt obligations, net of USD 40.816 million issuance costs; contractual principal USD 2,458 million. |
| 2026-06-30 | 2478.732 | 34.171 | 2444.561 | US$m | Reported. Carrying value of debt obligations, net of USD 39.268 million issuance costs; contractual principal USD 2,518 million. |
| 2026-09-30 | 3338.052 | 64.535 | 3273.517 | US$m | Reported. Gross debt is debt obligations, net USD 3,127.456 million plus the single-family rental secured credit facility, net USD 210.596 million, both net of issuance costs; it includes USD 33 million of non-recourse purchase money mortgages; contractual principal USD 3,378.022 million (USD 3,164.875 million plus USD 213.147 million). No leases are carried in debt lines. Excludes seller notes of USD 13 million held in other liabilities. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 3378.022 | -39.97 | 3338.052 | US$m | Principal is the sum of the maturity ladder. Reconciling items are debt issuance costs of USD 37.419 million on the notes and credit agreement debt and USD 2.551 million on the single-family rental facility; no discount, premium or omitted debt. Carrying value is Gross debt in Net debt data. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Issue of USD 1.0 billion senior notes (USD 500 million due 2029, USD 500 million due 2031) | 2026-10-06 | Not supplied: proceeds funded the Dream Finders closing, delayed draw borrowings and revolver repayments in amounts the sources do not print | Not supplied: the net effect of the issue, the draws and the repayments is not printed | Not supplied: pro forma net debt is not stated | US$m | Net proceeds about USD 991.2 million; used for general purposes including the Dream Finders homesites and to repay revolving facility borrowings; the new coupons (6.500% and 6.750%) are not in last-twelve-months cash interest. Not reflected in any period figure. |
| Dream Finders second closing and homesite funding after its acquisition of Beazer Homes | 2026-10-20 | 896.9 | 4170.417 | 6.18 | US$m | Cash funded at closing: preferred instrument USD 316.9 million plus about USD 580 million for homesites under option agreements (net of option deposits received). Isolated effect on 2026-09-30 net debt: it excludes the October 6 notes proceeds, every other post-quarter cash flow and any income the funded assets earn; net leverage is over last-twelve-months EBITDA at 2026-09-30. The release states about USD 1.1 billion including the USD 170.6 million funded on 2026-09-14, which is already in the balance sheet. |
| Payment of the dividend declared on 2026-09-23 | 2026-10-15 | 131.178 | 3404.695 | 5.04 | US$m | Dividend payable of USD 131.178 million is in other liabilities at 2026-09-30, so paying it raises net debt by that amount; isolated effect, not cumulative with the rows above. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| Q1 2025 | 82.698 | 45.634 | US$m | Reported quarter from the Q1 2026 comparatives; includes the pre-spin period to 2025-02-07 and pre-spin expenses of USD 24.96 million in EBITDA. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q2 2025 | 149.002 | 126.861 | US$m | Reported quarter from the Q2 2026 comparatives. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q3 2025 | 179.26 | 152.836 | US$m | Reported quarter from the Q3 2026 comparatives. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q4 2025 | 189.501 | 160.737 | US$m | Calculated: FY2025 less nine months 2025, because no fourth-quarter income statement is reported. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q1 2026 | 194.929 | 166.084 | US$m | Reported quarter. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q2 2026 | 196.853 | 167.634 | US$m | Reported quarter. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |
| Q3 2026 | 211.004 | 180.451 | US$m | Reported quarter. Revenue is option fee revenues plus development loan income. The issuer states no adjusted EBITDA; this column is reported EBITDA (income from operations, no depreciation or amortization presented), not an issuer-adjusted or house-adjusted measure. |

The quarters are three-month periods; the first quarter of 2025 mixes pre-spin and post-spin operations and the fourth quarter of 2025 is calculated, not reported.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Single-family rental secured credit facility | 1 | Yes | 213.147 | 0.36 | US$m | Borrowers are certain subsidiaries; secured by a pledge of equity in the borrowers, cash from the financed properties and, on certain events, mortgages; limited guaranty from the company; matures 2028-09-29. Rank 1 is shared with other property-level secured debt; cumulative leverage is through the whole rank. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |
| Purchase money mortgages | 1 | Yes | 33 | 0.36 | US$m | Property-level, secured solely by two land parcels, non-recourse to the company and indemnified by a counterparty that services the interest. Same rank group as the single-family rental facility. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |
| Revolving credit facility (USD 1,385 million commitment) | 2 | No | 635 | 5.01 | US$m | Unsecured; guaranteed by Millrose Properties SPE LLC and MPSAB, LLC; pari passu with the senior notes; matures 2030-03-25. Cumulative leverage is through the whole pari passu rank. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |
| Delayed draw term loan facility (USD 500 million commitment) | 2 | No | 496.875 | 5.01 | US$m | Unsecured; same obligors and guarantors as the revolving facility; matures 2030-03-25; utilizable for one year from 2026-03-25. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |
| 6.375% senior notes due 2030 | 2 | No | 1250 | 5.01 | US$m | Senior unsecured; fully and unconditionally guaranteed by Millrose Properties SPE LLC and MPSAB, LLC; structurally subordinated to debt of non-guarantor subsidiaries. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |
| 6.250% senior notes due 2032 | 2 | No | 750 | 5.01 | US$m | Senior unsecured; same guarantors as the 2030 notes; structurally subordinated to debt of non-guarantor subsidiaries. Amount is contractual principal at 2026-09-30; cumulative leverage is cumulative principal over last-twelve-months reported EBITDA of USD 674.906 million. |

The 2029 and 2031 senior notes issued on 2026-10-06 are not in the stack because they were not outstanding at 2026-09-30.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Reported EBITDA, last twelve months to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA, so no bridge is stated | US$m | Reported EBITDA is calculated (income from operations) at USD 674.906 million; the issuer reports AFFO instead, which is after interest expense and is not an EBITDA measure. |
| Adjusted EBITDA, last twelve months to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA | US$m | No add-back is stated by the issuer in the sources, so none is constructed. |

The bridge is not stated because the issuer reports no adjusted EBITDA.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 26 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_d931976d10k.htm.jsonl | Annual report (Form 10-K), FY2024 | FY2024 and FY2023 (Predecessor Millrose Business combined); registrant balance sheet at 2024-12-31 | USD | thousands | Predecessor Millrose Business (carve-out from Lennar) and the registrant shell | US GAAP; audited by Deloitte & Touche LLP | Tier 1 | Context for the pre-spin basis; no figure enters the period tables | Different perimeter, no revenue; not comparable with FY2025 |
| 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl | Annual report (Form 10-K), FY2025 | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | thousands | Millrose Properties, Inc. and subsidiaries from 2025-02-07; predecessor before | US GAAP; audited by Deloitte & Touche LLP | Tier 1 | FY2025 statements, debt note, cash paid for interest, Q4 2025 reconciliation | FY2025 includes the pre-spin period to 2025-02-07; Part III by reference to a proxy statement |
| 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl | Quarterly report (Form 10-Q), Q1 2026 | Three months to 2026-03-31; balance sheet at 2026-03-31 | USD | thousands | Millrose Properties, Inc. and subsidiaries | US GAAP; unaudited | Tier 2b | Q1 2026 statements; Q1 2025 stubs for last-twelve-months construction | Q1 2025 comparative includes pre-spin expenses of USD 24.96 million |
| 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl | Quarterly report (Form 10-Q), Q2 2026 | Three and six months to 2026-06-30; balance sheet at 2026-06-30 | USD | thousands | Millrose Properties, Inc. and subsidiaries | US GAAP; unaudited | Tier 2b | Q2 2026 and six-month statements; six-month 2025 stubs | Cash flows are year-to-date only |
| 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Quarterly report (Form 10-Q), Q3 2026 | Three and nine months to 2026-09-30; balance sheet at 2026-09-30 | USD | thousands | Millrose Properties, Inc. and subsidiaries | US GAAP; unaudited | Tier 2b | Latest statements, debt note, liquidity, market risk, subsequent events | Post-quarter events in notes only |
| EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl | Earnings release, Q1 2026 | Quarter to 2026-03-31 | USD | millions and thousands | Millrose Properties, Inc. | Issuer release; non-GAAP AFFO and Invested Capital | Tier 2b | Management measures and the stated debt-to-capitalization target | Supporting only; the quarterly report controls |
| EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl | Earnings release, Q2 2026 | Quarter to 2026-06-30 | USD | millions and thousands | Millrose Properties, Inc. | Issuer release; non-GAAP AFFO and Invested Capital | Tier 2b | Management measures and stated liquidity | Supporting only; the quarterly report controls |
| EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl | Earnings release, Q3 2026 | Quarter to 2026-09-30 | USD | millions and thousands | Millrose Properties, Inc. | Issuer release; non-GAAP AFFO and Invested Capital | Tier 2b | Management measures, run rate, stated liquidity and leverage | Supporting only; the quarterly report controls |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Millrose Properties, Inc. | Issuer, registrant and borrower under the credit agreement; issuer of the senior notes | December 31 | USD | thousands | Consolidated with subsidiaries from 2025-02-07 | US GAAP | FY2025; Q1, Q2 and Q3 2026 with six- and nine-month periods; 2025 comparatives |
| Millrose Properties SPE LLC and MPSAB, LLC | Subsidiary guarantors of the credit agreement and the senior notes | December 31 | USD | thousands | Included in the consolidation; not reported separately | US GAAP | None separately |
| Single-family rental subsidiaries | Borrowers under the limited-recourse secured credit facility | December 31 | USD | thousands | Included in the consolidation; not reported separately | US GAAP | 2026-09-30 only |
| Predecessor Millrose Business | Pre-spin carve-out of Lennar land assets | December 31 | USD | thousands | Combined statements to 2025-02-07 | US GAAP carve-out | FY2024 and FY2023; not carried into the period tables |

Subsequent events after 2026-09-30, flagged with their dates and kept out of period figures: the USD 1.0 billion senior notes closed on 2026-10-06; the dividend of USD 131.178 million was paid on 2026-10-15; Dream Finders completed its acquisition on 2026-10-20 and Millrose funded USD 316.9 million of preferred instrument and about USD 580 million of homesites; the board approved a share repurchase program of up to USD 250 million on 2026-10-26.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Total Debt adds the single-family rental secured credit facility to debt obligations | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Perimeter of debt | 3127456 (debt obligations, net) | 3338052 (total debt) | Every balance-sheet debt line is debt; the release excludes the facility from total corporate debt | Q3 2026 |
| EBITDA (Reported) calculated as income from operations plus depreciation and amortization of zero | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Derived measure | Not supplied: the issuer states no EBITDA | 514169 (nine months 2026) | Statements present no depreciation or amortization of operating assets; interest income and preferred income stay below the line | All periods |
| Last-twelve-months construction: FY2025 plus 2026 stub less 2025 stub | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl | Derived period | Not supplied: no reported last-twelve-months figure | 674906 (EBITDA at 2026-09-30) | Method rule for interim ratios; the pre-spin expenses sit in both FY2025 and the 2025 stub and cancel | Q1, Q2 and Q3 2026 |
| Q4 2025 as FY2025 less nine months 2025 | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl | Derived period | Not supplied: no fourth-quarter income statement | 160737 (income from operations) | No reported Q4 statement; agrees to the reported three-month net income of USD 122.238 million | Q4 2025 |
| Pre-spin expenses of USD 24.96 million left in FY2025 and Q1 2025 figures | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl | No adjustment | 24960 | 24960 | Shown, not removed: one-off identified, no normalization applied | FY2025, Q1 2025 |
| Thousands converted to US$m in money tables | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Unit | Thousands | Millions | Money tables use the statements' currency in millions; statements stay in thousands | All periods |
| Statement dashes carried as not supplied | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Missing value | Dash | Not supplied | A dash is not read as zero | Columns with dashes |

### T4.4 Income statement

| Line item | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Option fee revenues | 570957 | 185300 | 195400 | 209480 | 590180 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Development loan income | 29504 | 9629 | 1453 | 1524 | 12605 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Total revenues | 600461 | 194929 | 196853 | 211004 | 602785 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Management Fee expense | 87751 | 28153 | 29909 | 30264 | 88325 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Stock-based compensation expense | 677 | 692 | 217 | 289 | 1198 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Provision for (benefit from) credit loss expense | 1005 | Not supplied: the filing prints a dash | -907 | Not supplied: the filing prints a dash | -907 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Sales, general, and administrative expenses from pre-spin periods | 24960 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Total operating expenses | 114393 | 28845 | 29219 | 30553 | 88616 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Income from operations | 486068 | 166084 | 167634 | 180451 | 514169 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Interest income | 7702 | 1128 | 1108 | 1045 | 3282 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Income from preferred instruments | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | 996 | 996 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Interest expense | -91792 | -39212 | -40014 | -47093 | -126319 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Other expenses | -1605 | -79 | -391 | -513 | -984 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Total other income (expense) | -85695 | -38163 | -39297 | -45565 | -123025 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Net income before income taxes | 400373 | 127921 | 128337 | 134886 | 391144 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Income tax expense | 20509 | 5037 | 2456 | 4884 | 12377 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Net income | 379864 | 122884 | 125881 | 130002 | 378767 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Adjustment for expenses from pre-spin periods | 24960 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Net income attributable to Millrose Properties, Inc. common stockholders | 404824 | 122884 | 125881 | 130002 | 378767 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Cost of sales | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | USD thousands | Not presented: the statements show no cost of sales | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Gross profit | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | USD thousands | Not presented: the statements show no gross profit | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| Depreciation and amortization | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | Not supplied: not presented in the statements | USD thousands | Not presented: no depreciation of operating assets is recognized; amortization of issuance costs is inside interest expense | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| EBIT (calculated) | 486068 | 166084 | 167634 | 180451 | 514169 | USD thousands | Calculated: equals income from operations, the issuer's own operating subtotal | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| EBITDA (Reported) | 486068 | 166084 | 167634 | 180451 | 514169 | USD thousands | Calculated: income from operations plus depreciation and amortization, none presented; the issuer states no EBITDA | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |

### T4.5 Cash flow statement

| Line item | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 379864 | 122884 | 248765 | 378767 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Provision for (benefit from) credit loss expense | 1005 | Not supplied: the filing prints a dash | -907 | -907 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Sales, general, and administrative expenses from pre-spin periods | 24960 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Interest paid-in-kind | -29504 | -9629 | -11082 | -12605 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Accretion of original issue discount | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -45 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Amortization of deferred financing commitment fee | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -18 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Stock-based compensation expense | 677 | 692 | 909 | 1198 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Amortization of debt issuance and financing costs | 20273 | 2342 | 4710 | 7491 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Other assets | -8626 | 284 | 152 | -1011 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Other liabilities | 47655 | -30027 | 3796 | -23609 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Deferred tax liabilities | 20509 | 4624 | 7221 | 12377 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Takedowns of homesites under option contracts, net of builder deposit credits | 3216008 | 706131 | 1429749 | 2196771 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net cash flows from operating activities | 3672821 | 797301 | 1683313 | 2558409 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Option deposits from Lennar, Spin-Off | 584848 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Acquisition of Rausch land assets, net of builder deposits | -858938 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Investments in homesites under option contracts, net of builder deposits | -5149382 | -977419 | -2088033 | -3150232 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Other deposits | 1738 | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Investments in development loans | -353806 | -8350 | -19566 | -29678 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Paydowns of development loans | 53306 | 23749 | 310742 | 319305 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Acquisition of single-family residential properties | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -327122 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Single-family residential property deposits | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -10850 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Investments in preferred instruments, net | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -170625 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net cash used in investing activities | -5722234 | -962020 | -1796857 | -3369202 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Cash contribution from Lennar, Spin-Off | 415152 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Payments for Spin-Off deal costs | -77948 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Financing and issuance cost payments for debt obligations | -57939 | -11548 | -11548 | -16100 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Proceeds from revolving credit facility and delayed draw term loan facility borrowings | 2835000 | 350000 | 615000 | 2170000 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Repayments of revolving credit facility and delayed draw term loan facility borrowings | -2725000 | -35000 | -240000 | -1148125 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Proceeds from single-family residential secured credit facility | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | 213147 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Proceeds from senior notes | 2000000 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Dividends paid to stockholders | -298806 | -124503 | -250665 | -378522 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Dividend accrual rights paid to stockholders | Not supplied: line not presented in that report | Not supplied: line not presented in that report | -118 | -118 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Payment of seller notes | -6000 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net cash flows from financing activities | 2084459 | 178949 | 112669 | 840282 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Operating Activities | 3672821 | 797301 | 1683313 | 2558409 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Investing Activities | -5722234 | -962020 | -1796857 | -3369202 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net Cash from Financing Activities | 2084459 | 178949 | 112669 | 840282 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Net Cash Change | 35046 | 14230 | -875 | 29489 | USD thousands | Calculated: the sum of the three activity totals | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Opening Cash | Not supplied: the filing prints a dash | 35046 | 35046 | 35046 | USD thousands | Reported: the FY2025 statement prints a dash; 2026 columns are the prior period-end balance | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Closing Cash | 35046 | 49276 | 34171 | 64535 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Cash Interest Paid | 23942 | 66322 | 70140 | 143882 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| Cash taxes paid | 8500 | 0 | 0 | 0 | USD thousands | Reported: no income taxes were paid in the nine months to 2026-09-30, which covers the shorter periods | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 156–157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 8–9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |

### T4.6 Balance sheet

| Line item | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Homesites under option contracts | 8872695 | 9177273 | 9603735 | 9902361 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Development loan receivables, net | 328999 | 323229 | 49812 | 53014 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Single-family residential properties, net | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | 332651 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Preferred instruments, net | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | 170670 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Cash | 35046 | 49276 | 34171 | 64535 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Other assets | 21367 | 20271 | 19584 | 32664 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total assets | 9258107 | 9570049 | 9707302 | 10555895 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Builder deposits | 927004 | 960294 | 999761 | 1003209 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Debt obligations, net | 2112062 | 2417184 | 2478732 | 3127456 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Single-family residential secured credit facility, net | Not supplied: line not presented in that report | Not supplied: line not presented in that report | Not supplied: line not presented in that report | 210596 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Development guarantee holdback liability | 100000 | 100000 | 100000 | 100000 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Deferred tax liabilities | 77333 | 81957 | 84554 | 89710 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Other liabilities | 185446 | 156985 | 192419 | 174009 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total liabilities | 3401845 | 3716420 | 3855466 | 4704980 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Class A common stock | 1542 | 1542 | 1542 | 1542 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Class B common stock | 118 | 118 | 118 | 118 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Additional paid-in capital | 5873087 | 5873733 | 5873916 | 5874170 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Distribution in excess of net income | -18485 | -21764 | -23740 | -24915 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total stockholders' equity | 5856262 | 5853629 | 5851836 | 5850915 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total Assets | 9258107 | 9570049 | 9707302 | 10555895 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total Liabilities | 3401845 | 3716420 | 3855466 | 4704980 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total Equity | 5856262 | 5853629 | 5851836 | 5850915 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Total Debt | 2112062 | 2417184 | 2478732 | 3338052 | USD thousands | Calculated: debt obligations, net plus the single-family residential secured credit facility, net | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| Cash & Equivalents | 35046 | 49276 | 34171 | 64535 | USD thousands | Reported | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Revolving Credit Facility | Revolving credit facility | Not supplied: carrying value is disclosed in aggregate only | 635000 | 635000 | 1385000 | Unsecured | Senior unsecured; pari passu with the senior notes | USD | 635000 | Not applicable | Adjusted Term SOFR plus 1.75% to 2.25% by leverage ratio | Floating | Adjusted Term SOFR | 175 to 225 | Not supplied: no floor stated | 2030-03-25 | 0 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29–34 |
| DDTL Credit Facility | Delayed draw term loan | Not supplied: carrying value is disclosed in aggregate only | 496875 | 496875 | 500000 | Unsecured | Senior unsecured; pari passu with the senior notes | USD | 496875 | Not applicable | Adjusted Term SOFR plus 1.75% to 2.25% by leverage ratio | Floating | Adjusted Term SOFR | 175 to 225 | Not supplied: no floor stated | 2030-03-25 | 0 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29–34 |
| 6.375% senior notes due 2030 | Senior notes | Not supplied: carrying value is disclosed in aggregate only | 1250000 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed by two subsidiaries | USD | 1250000 | Not applicable | 6.375% | Fixed | Not applicable | Not applicable | Not applicable | 2030-08-01 | 0 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 32, 61 |
| 6.250% senior notes due 2032 | Senior notes | Not supplied: carrying value is disclosed in aggregate only | 750000 | Not applicable | Not applicable | Unsecured | Senior unsecured; guaranteed by two subsidiaries | USD | 750000 | Not applicable | 6.250% | Fixed | Not applicable | Not applicable | Not applicable | 2032-09-15 | 0 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 32, 63 |
| Purchase money mortgages | Property-level mortgages | Not supplied: carrying value is disclosed in aggregate only | 33000 | Not applicable | Not applicable | Secured solely by two land parcels | Property-level secured; non-recourse | USD | 33000 | Not applicable | Not supplied: interest is serviced by a counterparty and no rate is printed | Not supplied: rate type not stated | Not applicable | Not applicable | Not applicable | Not supplied: the filing gives USD 4 million in Q4 2026 and USD 29 million in 2027 | Not supplied: repayment dates only | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 33 |
| SFR Secured Credit Facility | Limited-recourse revolving credit facility | Not supplied: carrying value is net of USD 2.551 million costs at 210596 in the balance sheet | 213147 | 213147 | 235000 | Secured by equity in borrowers, property cash and on certain events mortgages | Secured; limited guaranty from the company | USD | 213147 | Not applicable | One-month Term SOFR plus 1.20% | Floating | One-month Term SOFR | 120 | 50 | 2028-09-29 | 0 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 33–34 |
| Seller notes payable | Loan from a lender specific to a community acquired from Lennar | 13000 | 13000 | Not applicable | Not applicable | Not supplied: security not stated | Not supplied: ranking not stated | USD | Not applicable: carried in other liabilities, outside Total Debt | Not applicable | Not supplied: no rate printed | Not supplied: rate type not stated | Not applicable | Not applicable | Not applicable | Not supplied: no maturity printed | Not supplied: not stated | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 28–29 |
| Financing cost adjustment | Aggregate issuance costs | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -39970 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 34 |

The Reporting Currency Amount column adds to 3338052, the Total Debt of the balance sheet at September 30, 2026.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) LTM to 2026-03-31 | LTM | USD 486.068m | USD 166.084m | USD 45.634m | USD 606.518m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl | Current stub is Q1 2026, prior-year stub Q1 2025; income from operations, no D&A |
| EBITDA (Reported) LTM to 2026-06-30 | LTM | USD 486.068m | USD 333.718m | USD 172.495m | USD 647.291m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl | Current stub is H1 2026, prior-year stub H1 2025; income from operations, no D&A |
| EBITDA (Reported) LTM to 2026-09-30 | LTM | USD 486.068m | USD 514.169m | USD 325.331m | USD 674.906m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Current stub is 9M 2026, prior-year stub 9M 2025; income from operations, no D&A |
| Revenue LTM to 2026-03-31 | LTM | USD 600.461m | USD 194.929m | USD 82.698m | USD 712.692m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl | Current stub is Q1 2026, prior-year stub Q1 2025; option fee revenues plus development loan income |
| Revenue LTM to 2026-06-30 | LTM | USD 600.461m | USD 391.781m | USD 231.7m | USD 760.542m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl | Current stub is H1 2026, prior-year stub H1 2025; option fee revenues plus development loan income |
| Revenue LTM to 2026-09-30 | LTM | USD 600.461m | USD 602.785m | USD 410.96m | USD 792.286m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Current stub is 9M 2026, prior-year stub 9M 2025; option fee revenues plus development loan income |
| Cash Interest Paid LTM to 2026-03-31 | LTM | USD 23.942m | USD 66.322m | USD 0.571m | USD 89.693m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl | Current stub is Q1 2026, prior-year stub Q1 2025; cash paid for interest, supplemental disclosure |
| Cash Interest Paid LTM to 2026-06-30 | LTM | USD 23.942m | USD 70.14m | USD 8.731m | USD 85.351m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl | Current stub is H1 2026, prior-year stub H1 2025; cash paid for interest, supplemental disclosure |
| Cash Interest Paid LTM to 2026-09-30 | LTM | USD 23.942m | USD 143.882m | USD 22.96m | USD 144.864m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | Current stub is 9M 2026, prior-year stub 9M 2025; cash paid for interest, supplemental disclosure |
| Revenue Q4 2025 | Q4 (calculated) | USD 600.461m | Not applicable | USD 410.96m | USD 189.501m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | FY2025 less nine months 2025; no reported fourth-quarter statement |
| Income from operations Q4 2025 | Q4 (calculated) | USD 486.068m | Not applicable | USD 325.331m | USD 160.737m | Calculated | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl | FY2025 less nine months 2025; no reported fourth-quarter statement |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2112.062 | T4.6 and Net debt data: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155 | 486.068 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155 | FY2025 / 2025-12-31 | USD | US$m | 4.35 | Calculated | Tier 1 | Fiscal year EBITDA includes pre-spin expenses and a partial first year |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 2077.016 | T4.6 and Net debt data: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 154–155 | 486.068 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155 | FY2025 / 2025-12-31 | USD | US$m | 4.27 | Calculated | Tier 1 | Fiscal year EBITDA includes pre-spin expenses and a partial first year |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 486.068 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155 | 23.942 | T4.8 and T4.5: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 157 | FY2025 / 2025-12-31 | USD | US$m | 20.30 | Calculated | Tier 1 | Cash interest of FY2025 excludes coupons not yet payable on notes issued in August and September 2025 |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2417.184 | T4.6 and Net debt data: 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7 | 606.518 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7 | 2026-03-31 | USD | US$m | 3.99 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 2367.908 | T4.6 and Net debt data: 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 6–7 | 606.518 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7 | 2026-03-31 | USD | US$m | 3.90 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 606.518 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7 | 89.693 | T4.8 and T4.5: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 9 | 2026-03-31 | USD | US$m | 6.76 | Calculated | Tier 2b | Cash interest paid lags interest expense; coupons are semi-annual |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 2478.732 | T4.6 and Net debt data: 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7 | 647.291 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7 | 2026-06-30 | USD | US$m | 3.83 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 2444.561 | T4.6 and Net debt data: 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 6–7 | 647.291 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7 | 2026-06-30 | USD | US$m | 3.78 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 647.291 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7 | 85.351 | T4.8 and T4.5: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 157; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 9 | 2026-06-30 | USD | US$m | 7.58 | Calculated | Tier 2b | Cash interest paid lags interest expense; coupons are semi-annual |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3338.052 | T4.6 and Net debt data: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 | 674.906 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 | 2026-09-30 | USD | US$m | 4.95 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 3273.517 | T4.6 and Net debt data: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 | 674.906 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 | 2026-09-30 | USD | US$m | 4.85 | Calculated | Tier 2b | Last-twelve-months EBITDA; carrying-value debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 674.906 | T4.8 and T4.4: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 | 144.864 | T4.8 and T4.5: 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 157; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 10 | 2026-09-30 | USD | US$m | 4.66 | Calculated | Tier 2b | Cash interest paid lags interest expense; coupons are semi-annual |
| Debt / total capitalization | Total debt / (Total debt + Total equity) x 100 | 2112.062 | Net debt data and T4.6 | 7968.324 | T4.6 | FY2025 | USD | US$m | 26.51 | Calculated | Tier 1 | Carrying-value debt including the single-family rental facility from 2026-09-30 |
| Debt / total capitalization | Total debt / (Total debt + Total equity) x 100 | 2417.184 | Net debt data and T4.6 | 8270.813 | T4.6 | Q1 2026 | USD | US$m | 29.23 | Calculated | Tier 2b | Carrying-value debt including the single-family rental facility from 2026-09-30 |
| Debt / total capitalization | Total debt / (Total debt + Total equity) x 100 | 2478.732 | Net debt data and T4.6 | 8330.568 | T4.6 | Q2 2026 | USD | US$m | 29.75 | Calculated | Tier 2b | Carrying-value debt including the single-family rental facility from 2026-09-30 |
| Debt / total capitalization | Total debt / (Total debt + Total equity) x 100 | 3338.052 | Net debt data and T4.6 | 9188.967 | T4.6 | Q3 2026 | USD | US$m | 36.33 | Calculated | Tier 2b | Carrying-value debt including the single-family rental facility from 2026-09-30 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Portfolio | Invested Capital, US$m, period end | 8469.679 | 8706.272 | 8798.999 | 9245.4 | Rising | Management non-GAAP measure: the balance on which option fees are paid; grew in each period shown |
| Portfolio | Weighted average yield, %, period end | 9.2 | 9.2 | 9.2 | 9.3 | Flat, then higher | Based on option and loan rates at the SOFR of the prior quarter end; the Lennar program yields 8.5% and other agreements about 10.8% |
| Earnings | AFFO, US$m, period flow | 427.904 | 125.918 | 127.559 | 133.519 | Rising | Management non-GAAP measure after interest expense; FY2025 is a full year, the others are quarters |
| Earnings | AFFO per share, USD, period flow | 2.58 | 0.76 | 0.77 | 0.80 | Rising | Same basis as the AFFO row |
| Earnings | Implied quarterly income run rate, US$m, period end | Not supplied: the annual report states an annual run rate | 200 | 204 | 221 | Rising | Invested Capital times weighted yield adjusted for days; Q3 2026 revenue was 211.004 |
| Counterparty | Lennar share of total revenues, %, period flow | 84 | Not supplied: the Q1 2026 report states no share | 72 | 69 | Falling | FY2025 is the share of the year; the Q3 2026 nine-month share is 71% |
| Funding float | Builder deposits, US$m, period end | 927.004 | 960.294 | 999.761 | 1003.209 | Rising | Non-interest-bearing deposits from builders that fund investment; credited against takedowns |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Total debt | Every balance-sheet debt line at carrying value: debt obligations, net plus the single-family rental secured credit facility, net | Total corporate debt of USD 3.1 billion, which equals debt obligations, net of USD 3,127.456 million | EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 6 | Q3 2026 | USD 210.596 million, 6.31% of Total Debt | Fundamental credit; Liquidity | Use USD 3,338.052 million; state that management's figure omits the limited-recourse rental facility |
| Debt to capitalization | Total debt over total debt plus total equity at carrying values | Release states 36% at 2026-09-30; about 30% at 2026-06-30 and about 29% at 2026-03-31 against a maximum target of 33% stated in the first-quarter release | EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4; EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl, page 2; EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl, page 3 | Q1 to Q3 2026 | 36.33% including the rental facility and 34.83% excluding it, both above 33% | Fundamental credit | The third-quarter release does not restate the 33% target; treat the target as management's earlier stated limit and flag the breach of it |
| Principal against carrying value | Carrying value of debt | Contractual principal USD 3,378.022 million | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 33–34 | Q3 2026 | USD 39.970 million of issuance costs | Fundamental credit | Leverage uses carrying value; principal is shown beside it |
| EBITDA | EBITDA reported by the issuer, adjusted shown beside it | The issuer states no EBITDA or adjusted EBITDA and reports AFFO of USD 133.519 million for Q3 2026 | EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, pages 9–10 | All | AFFO is after interest expense and adds back issuance cost amortization, so it is not comparable | Earnings quality; Fundamental credit | EBITDA is calculated as income from operations; AFFO is carried as a management measure only |
| Purchase money mortgage schedule | One schedule at the latest filing | USD 29 million in 2026 and USD 4 million in 2027 in the annual report and the Q1 and Q2 reports; USD 4 million in Q4 2026 and USD 29 million in 2027 in the Q3 report | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 180; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 33 | Maturity ladder at 2026-09-30 | USD 33 million moves by one year | Refinancing & LME; Liquidity | Use the Q3 2026 wording and state both |
| Liquidity | Cash plus undrawn committed facilities | Management states total liquidity of about USD 0.8 billion at 2026-09-30, USD 1.4 billion at 2026-06-30 and USD 1.5 billion at 2026-03-31, described as cash and revolving facility availability | EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4; EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl, page 2; EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl, page 3 | All interim periods | Cash plus all undrawn facilities is USD 839.513 million; cash plus the revolver alone is USD 814.535 million | Liquidity | Use cash plus all undrawn committed facilities and name the facilities |
| Cash interest | Cash interest paid, kept apart from interest expense | Interest expense of USD 126.319 million for nine months 2026 includes amortization of issuance costs; cash paid is USD 143.882 million | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 7, 10 | Q3 2026 | Timing: the first coupons of the 2030 and 2032 notes were paid in 2026 | Fundamental credit | Cover uses cash interest paid; interest expense cover is shown in the analysis |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and interest cover at 2026-09-30 | Ready with Limitations | Reported EBITDA is calculated; cash interest lags; post-quarter events outside the figures | Quote ratios with their basis |
| Liquidity at 2026-09-30 | Ready with Limitations | Borrowing-base headroom and letters of credit not printed | State the facilities that make the undrawn figure |
| Debt maturity wall | Ready with Limitations | Mortgage schedule differs between filings; 2029 and 2031 notes are post-quarter | Use the Q3 2026 schedule and add the new notes separately |
| Covenant headroom | Not Ready | No covenant level or reported ratio is printed | Obtain the executed credit agreement or compliance certificate |
| Pro forma leverage after October 2026 events | Not Ready | Amounts drawn and repaid after the quarter are not printed | Obtain the October 2026 current report and the November borrowing position |
| Growth from FY2024 | Not Ready | FY2024 is a carve-out with no revenue | Compare from FY2025 only |

### Leverage trajectory and drivers

Total debt at carrying value rose by USD 1,225.99 million between December 31, 2025 and September 30, 2026, to USD 3,338.052 million, while last-twelve-months reported EBITDA rose by USD 188.838 million, so total debt to EBITDA moved from 4.35x to 4.95x after easing to 3.83x at June 30, 2026.
Basis: calculation C1; calculation C3; calculation C6

The third quarter drove the rise. Contractual principal increased by USD 860.022 million in three months: USD 150 million on the revolving facility, USD 496.875 million on the delayed draw term loan, which was undrawn until then, and USD 213.147 million on the new single-family rental facility. The money funded a USD 170.6 million preferred instrument for Dream Finders, 1,233 rental homes carried at USD 332.651 million and land and development spending. None of these earns EBITDA in the quarter it is funded: the rental homes are not yet depreciating or let, and preferred income of USD 0.996 million sits below operating income. Leverage therefore overshoots first and falls only if the new assets reach their yield, which creditors have to underwrite.
Basis: calculation C17; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 7, 26–27, 29, 33; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 3

Against this, the growth rests on contractual cash flows. Management's own run rate of USD 221 million of quarterly income at September 30, 2026 compares with reported third-quarter revenue of USD 211.004 million, so about USD 10 million a quarter is contracted but not yet in revenue. The reading improves if fourth-quarter revenue reaches that run rate with debt flat and worsens if takedowns slow, because takedown proceeds fund both reinvestment and the repayment of revolving drawings (USD 1,148.125 million repaid in nine months).
Basis: calculation C20; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 8; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 10

### Coverage trend

Cash interest cover of 4.66x at September 30, 2026 compares with 7.58x at June 30, 2026 and 6.76x at March 31, 2026 because the window now holds all four semi-annual coupon dates of the 2030 and 2032 notes: cash interest paid in the last twelve months rose from USD 85.351 million to USD 144.864 million while EBITDA rose from USD 647.291 million to USD 674.906 million. The fiscal-year reading of 20.30x is not a trend point, since those notes were issued in August and September 2025 and paid no coupon in 2025.
Basis: calculation C5; calculation C7

Interest expense, which accrues, gives a lower and steadier cover: last-twelve-months EBITDA over interest expense of USD 161.542 million is 4.18x. Cover will fall further, because the annual coupons on the four senior note issues outstanding after October 6, 2026 total USD 192.8125 million, which alone is 3.50x covered by last-twelve-months EBITDA, before interest on the revolving, delayed draw and rental facilities.
Basis: calculation C19; calculation C15; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 32

### Cash-flow quality

Net cash from operating activities was USD 2,558.409 million in the nine months to September 30, 2026, but USD 2,196.771 million of it, 85.86%, is takedowns of homesites net of builder deposit credits, which is capital coming back rather than earnings. Without it, operating cash flow was USD 361.638 million, close to net income of USD 378.767 million. Investing outflows of USD 3,369.202 million, of which USD 3,150.232 million was new homesite investment, exceeded operating cash flow by USD 810.793 million, and dividends paid of USD 378.522 million widened the gap. Net borrowing closed it: USD 2,170 million drawn less USD 1,148.125 million repaid, plus USD 213.147 million on the rental facility. The platform recycles its own capital, but debt funds the growth and the distribution.
Basis: calculation C16; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10

Capital expenditure is not reported in maintenance and growth categories; land and development spending is shown as investment in homesites under option contracts, so no capital-intensity ratio is calculated, and working-capital movements are small beside the takedown line.
Basis: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 9

### Liquidity adequacy

Cash of USD 64.535 million plus undrawn committed facilities of USD 774.978 million gives USD 839.513 million at September 30, 2026, down from USD 1,384.171 million at June 30, 2026. Only USD 3.125 million remains on the delayed draw term loan and USD 21.853 million on the rental facility, so the revolving facility's USD 750 million is the working buffer, and its availability depends on a borrowing base the filings do not print. Near-term claims on cash are the dividend of USD 131.178 million paid on October 15, 2026, purchase money mortgage principal of USD 4 million in the fourth quarter, the Dream Finders closing and future land development commitments of USD 6.7 billion, about 73% of them to Lennar, which Millrose funds as builders exercise options.
Basis: calculation C9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 28, 33–34, 56

Net proceeds of about USD 991.2 million from the October 6, 2026 notes rebuild liquidity, but the amount left after the Dream Finders funding and the revolver repayment is not printed, so liquidity after the quarter is not established.
Basis: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 40, 44, 64

### Non-debt funding float

Builder deposits were USD 1,003.209 million at September 30, 2026 against USD 927.004 million at December 31, 2025, an increase of USD 76.205 million. They are non-interest-bearing money held from homebuilders against their option contracts and credited against takedown prices, so they fund part of the invested capital without being debt and lower the borrowing Millrose needs. The filings do not say what happens to them if Millrose failed to deliver finished homesites, which is not established. A separate non-debt obligation, the development guarantee holdback liability, is USD 100 million at every balance-sheet date and arose from the Rausch acquisition.
Basis: calculation C18; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 6

### Financing events in the period

Four financing events in 2026 shaped the balance sheet. On March 25, 2026 the company replaced its secured revolving facility with an unsecured credit agreement of a USD 1.335 billion revolving facility and a USD 500 million delayed draw term loan, releasing the liens; on August 5, 2026 an amendment cut every margin by 0.25 percentage points; on September 21, 2026 the accordion raised revolving commitments by USD 50 million to USD 1.385 billion; and on September 30, 2026 a limited-recourse rental facility of up to USD 235 million was signed, with USD 213.147 million outstanding at quarter end. The unsecured structure puts the new facilities pari passu with the senior notes, while the rental facility and the purchase money mortgages rank ahead of the notes against their own collateral. Events of default under the credit agreement include the external manager ceasing to act without a replacement acceptable to lenders within 90 days, which ties the lenders to the manager arrangement.
Basis: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 23–24, 30–31, 33–34

### Claims outside debt

Claims outside the debt figure were searched for and are small or absent: no pension or retiree medical obligations, factoring or supplier finance, lease liabilities or consent decrees appear in the 2025 annual report or the third-quarter report, and no material litigation is reported. The claims that do sit outside debt are USD 13 million of seller notes in other liabilities, the USD 100 million development guarantee holdback, builder deposits of USD 1,003.209 million, the management fee of USD 30.264 million in the third quarter payable to the external manager, the dividend payable of USD 131.178 million and future land development commitments of USD 6.7 billion.
Basis: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 7, 28–29, 34

### Subsequent events and multi-figure events

Four events after the balance-sheet date are kept out of period figures and shown with their dates in the post-balance-sheet table: the USD 1.0 billion senior notes of October 6, 2026, the dividend paid on October 15, 2026, the Dream Finders closing on October 20, 2026 and the share repurchase authority of up to USD 250 million approved on October 26, 2026, under which no repurchase is stated.
Basis: 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 40–41

Dream Finders support carries three figures. The release headline of about USD 1.1 billion is management's total; the quarterly report states aggregate funding of about USD 1.068 billion, of which USD 170.6 million was funded on September 14, 2026 and is already in the balance sheet; the sum of USD 170.6 million, USD 316.9 million and about USD 580 million is USD 1,067.5 million. Only the USD 896.9 million funded after quarter end is a post-balance-sheet event.
Basis: calculation C13; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 26, 41; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 3

### Data quality and definition risks

Four definitions need care. Reported EBITDA is calculated because the issuer states none. Management's total corporate debt of USD 3.1 billion leaves out the limited-recourse rental facility, whereas the ratio of 36% it states matches debt including that facility. The 33% debt-to-capitalization maximum stated in the first-quarter release and the 2025 annual report is not restated in the later releases while the ratio has passed it. The purchase money mortgage repayment schedule changed between the second- and third-quarter reports.
Basis: calculation C8; calculation C21; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6, 33; EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl, page 3; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4; 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 26

Three period limits apply. FY2025 includes the pre-spin period to February 7, 2025 and pre-spin expenses of USD 24.96 million, FY2024 is a carve-out with no revenue and is not carried into the tables, and the fourth quarter of 2025 is calculated as the year less nine months because no fourth-quarter statement was reported.
Basis: calculation C11; 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 155, 131; 10-K_2024-12-31_d931976d10k.htm.jsonl, pages 217–218

## Calculations

Every amount is in US dollars; the statements are in thousands and the money tables in millions. Each result is worked from the inputs shown.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Total Debt (carrying value) | FY2025 2,112,062; Q1 2026 2,417,184; Q2 2026 2,478,732 (debt obligations, net); Q3 2026 3,127,456 + 210,596, in USD thousands | USD thousands 2,112,062; 2,417,184; 2,478,732; 3,338,052. In US$m: 2112.062; 2417.184; 2478.732; 3338.052 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 6; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 6; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 6; 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 154 |
| C2 | Net debt = Gross debt less cash | FY2025 2112.062 - 35.046 ; Q1 2026 2417.184 - 49.276 ; Q2 2026 2478.732 - 34.171 ; Q3 2026 3338.052 - 64.535 (US$m) | FY2025 2077.016 ; Q1 2026 2367.908 ; Q2 2026 2444.561 ; Q3 2026 3273.517 | Net debt data and T4.6 |
| C3 | EBITDA (Reported), last twelve months = FY2025 + current stub - prior-year stub | Q1 2026: 486.068 + 166.084 - 45.634; Q2 2026: 486.068 + 333.718 - 172.495; Q3 2026: 486.068 + 514.169 - 325.331 (US$m); the stubs are income from operations and no depreciation or amortization is presented | FY2025 486.068 ; Q1 2026 606.518 ; Q2 2026 647.291 ; Q3 2026 674.906 | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| C4 | Revenue, last twelve months | Q1 2026: 600.461 + 194.929 - 82.698; Q2 2026: 600.461 + 391.781 - 231.7; Q3 2026: 600.461 + 602.785 - 410.96 (US$m) | FY2025 600.461 ; Q1 2026 712.692 ; Q2 2026 760.542 ; Q3 2026 792.286 | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| C5 | Cash interest paid, last twelve months | Q1 2026: 23.942 + 66.322 - 0.571; Q2 2026: 23.942 + 70.14 - 8.731; Q3 2026: 23.942 + 143.882 - 22.96 (US$m) | FY2025 23.942 ; Q1 2026 89.693 ; Q2 2026 85.351 ; Q3 2026 144.864 | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 157; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 9; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 9; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 10 |
| C6 | Total debt / EBITDA and Net debt / EBITDA | FY2025: 2112.062 / 486.068; 2077.016 / 486.068 ; Q1 2026: 2417.184 / 606.518; 2367.908 / 606.518 ; Q2 2026: 2478.732 / 647.291; 2444.561 / 647.291 ; Q3 2026: 3338.052 / 674.906; 3273.517 / 674.906 | FY2025 4.35x and 4.27x ; Q1 2026 3.99x and 3.90x ; Q2 2026 3.83x and 3.78x ; Q3 2026 4.95x and 4.85x | Calculations C1 to C3 |
| C7 | EBITDA / cash interest | FY2025: 486.068 / 23.942 ; Q1 2026: 606.518 / 89.693 ; Q2 2026: 647.291 / 85.351 ; Q3 2026: 674.906 / 144.864 | FY2025 20.30x ; Q1 2026 6.76x ; Q2 2026 7.58x ; Q3 2026 4.66x | Calculations C3 and C5 |
| C8 | Debt / total capitalization = Total debt / (Total debt + Total equity) x 100 | FY2025: 2112.062 / (2112.062 + 5856.262) ; Q1 2026: 2417.184 / (2417.184 + 5853.629) ; Q2 2026: 2478.732 / (2478.732 + 5851.836) ; Q3 2026: 3338.052 / (3338.052 + 5850.915) | FY2025 26.51% ; Q1 2026 29.23% ; Q2 2026 29.75% ; Q3 2026 36.33%; management states 33% as a maximum target and 36%, about 30% and about 29% for September, June and March 2026 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7; EX-99.1_2026-05-06_ck0002017206-ex99_1.htm.jsonl, page 3; EX-99.1_2026-08-04_ck0002017206-ex99_1.htm.jsonl, page 2; EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, page 4 |
| C9 | Undrawn committed facilities and cash plus undrawn | FY2025 1,335.0 - 110.0; Q1 2026 (1,335.0 - 425.0) + 500.0; Q2 2026 (1,335.0 - 485.0) + 500.0; Q3 2026 (1,385.0 - 635.0) + (500.0 - 496.875) + (235.0 - 213.147) (US$m) | FY2025 undrawn 1225, with cash 1260.046 ; Q1 2026 undrawn 1410, with cash 1459.276 ; Q2 2026 undrawn 1350, with cash 1384.171 ; Q3 2026 undrawn 774.978, with cash 839.513; management states total liquidity of about USD 0.8 billion, about USD 1.4 billion and about USD 1.5 billion for September, June and March 2026 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29–34, 56; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, pages 24, 45; 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, pages 22, 40; 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 132, 178 |
| C10 | Maturity ladder and reconciliation to carrying value | 4.0 + 29.0 + 213.147 + (635.0 + 496.875 + 1,250.0) + 750.0; less issuance costs 37.419 + 2.551 (US$m) | Principal 3,378.022; reconciling items -39.970; carrying value 3,338.052 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 33–34 |
| C11 | FY2025 less nine months 2025 for the fourth quarter and the pre-spin expenses | Revenue 600.461 - 410.96; income from operations 486.068 - 325.331; net income attributable 404.824 - 282.586 (US$m); pre-spin expenses 24.96 | Q4 2025 revenue 189.501; income from operations 160.737; net income attributable 122.238, equal to the three-month figure in the annual report | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, pages 131, 155; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| C12 | Quarters against nine months 2026 | Net income 122.884 + 125.881 + 130.002; option fees 185.3 + 195.4 + 209.48; total revenues 194.929 + 196.853 + 211.004 (US$m) | 378.767 against 378.767; 590.18 against 590.18; 602.786 against 602.785, a difference of 0.001 from rounding | 10-Q_2026-03-31_ck0002017206-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 7; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| C13 | Dream Finders funding and the post-quarter pro forma rows | 316.9 + 580 = 896.9; 3,273.517 + 896.9 = 4,170.417; 4,170.417 / 674.906; dividend 3,273.517 + 131.178 = 3,404.695; 3,404.695 / 674.906; 170.6 + 316.9 + 580 = 1,067.5 (US$m) | Funding 896.9; pro forma net debt 4170.417 and 6.18x; with the dividend 3404.695 and 5.04x; total 1,067.5 against the stated 1,068 and about 1,100 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 26, 28, 41 |
| C14 | Cumulative leverage in the debt stack | (213.147 + 33) / 674.906; 3,378.022 / 674.906 | 0.36x through the secured rank; 5.01x through the unsecured rank | Debt stack and calculation C3 |
| C15 | Annual coupons on the senior notes after October 6, 2026 | 1,250 x 6.375% + 750 x 6.25% + 500 x 6.5% + 500 x 6.75% = 79.6875 + 46.875 + 32.5 + 33.75; 674.906 / 192.8125 (US$m) | 192.8125 per year; EBITDA covers it 3.50x | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 29, 40 |
| C16 | Nine-month 2026 cash flow quality | 2,558.409 - 2,196.771; 2,196.771 / 2,558.409; 2,558.409 - 3,369.202; dividends paid 378.522; 2,170.0 - 1,148.125 + 213.147 (US$m) | Operating cash flow without takedowns 361.638; takedown share 85.86%; operating plus investing -810.793; net borrowing 1,235.022 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 9–10 |
| C17 | Third-quarter 2026 change in debt | Principal 3,378.022 - 2,518.0; revolving 635.0 - 485.0; delayed draw 496.875 - 0; rental 213.147; carrying 3,338.052 - 2,478.732; issuance costs 39.970 - 39.268 (US$m) | Principal +860.022 (150.0 + 496.875 + 213.147 + 0.0); carrying +859.320; issuance cost change 0.702 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6, 29, 33; 10-Q_2026-06-30_ck0002017206-20260630.htm.jsonl, page 24 |
| C18 | Builder deposits change | 1,003.209 - 927.004 (US$m) | 76.205 | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 6 |
| C19 | Interest expense, last twelve months, and cover on it | 91.792 + 126.319 - 56.569 = 161.542; 674.906 / 161.542 (US$m) | Interest expense 161.542; cover 4.18x | 10-K_2025-12-31_ck0002017206-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 7 |
| C20 | Run rate against reported revenue | 221 - 211.004 (US$m) | 9.996 | EX-99.1_2026-10-26_ck0002017206-ex99_1.htm.jsonl, pages 7–8 |
| C21 | Debt to capitalization excluding the rental facility | 3,127.456 / (3,127.456 + 5,850.915) x 100 | 34.83% | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, pages 6–7 |
| C22 | Nine-month 2026 net borrowing after financing costs | 2,170.0 - 1,148.125 + 213.147 = 1,235.022; less financing costs 16.1 = 1,218.922 | Net borrowing after costs 1,218.922; less dividends 378.522 and accrual rights 0.118 gives 840.282, the reported financing total | 10-Q_2026-09-30_ck0002017206-20260930.htm.jsonl, page 9 |

## Gaps

- The maximum leverage ratio, minimum interest coverage ratio and minimum tangible net worth tests of the credit agreement are named but no level, step-down or reported ratio is printed in any of the eight documents, so covenant headroom cannot be calculated and nothing is inferred. Severity: High. Action: Supply the executed credit agreement or the compliance certificate.
- The issuer states no EBITDA or adjusted EBITDA, so reported EBITDA is calculated as income from operations, with no depreciation or amortization of operating assets presented; any covenant EBITDA may differ. Severity: Medium. Action: Obtain management's covenant definition of EBITDA.
- Amounts drawn on the delayed draw term loan and repaid on the revolving facility after September 30, 2026 are not printed, so pro forma net debt after the October 6, 2026 notes is not stated; the Dream Finders and dividend rows are isolated effects. Severity: High. Action: Obtain the October 2026 current reports and the borrowing position at the latest date.
- Borrowing-base calculations for the revolving, delayed draw and rental facilities are not printed, so undrawn commitments may exceed what can be borrowed; no letters of credit are disclosed in any document (searched letters of credit, standby, LC). Severity: Medium. Action: Obtain the borrowing base certificate.
- The purchase money mortgage schedule differs: USD 29 million due in 2026 and USD 4 million in 2027 in the 2025 annual report and the first two quarterly reports, against USD 4 million in the fourth quarter of 2026 and USD 29 million in 2027 in the latest report; the latest is used and the balance of USD 33 million is the same. Severity: Low. Action: Confirm with the mortgage terms.
- FY2024 and FY2023 statements are of the pre-spin predecessor with no revenue and are not carried into the period tables, so growth from FY2024 and year-on-year comparisons across the spin cannot be measured; FY2025 includes the period to February 7, 2025. Severity: Medium. Action: Compare from FY2025 only.
- The fourth quarter of 2025 is not reported as an income statement and is calculated as FY2025 less nine months 2025; no separate 2025 quarterly reports are supplied, so the 2025 stubs come from comparatives in the 2026 reports. Severity: Low. Action: Supply the fourth-quarter 2025 release and the 2025 quarterly reports.
- Dashes in the statements are carried as not supplied rather than zero: the provision line in Q1 2026 and Q3 2026, pre-spin expenses and the pre-spin adjustment in every 2026 column, and the opening cash balance for FY2025; the lines for preferred instruments, rental properties and the rental facility are not presented before the third quarter of 2026. Severity: Low. Action: None needed; the lines are stated in the filings as nil or absent.
- Cost of sales, gross profit, depreciation and amortization, and maintenance and growth capital expenditure are not presented, so those lines and ratios are not supplied. Severity: Low. Action: None; the business model has no cost of sales line.
- Carrying value is disclosed in aggregate only, net of issuance costs, so the instrument table carries principal and one financing cost adjustment; the 2029 and 2031 notes are outside the September 30, 2026 table. Severity: Low. Action: Supply instrument-level carrying values if needed.
- Revenue is not split by segment because there is one reportable segment; the Lennar share of revenues is stated for FY2025, the second and third quarters and nine months but not for the first quarter of 2026. Severity: Low. Action: None needed.
- Cash interest paid lags interest expense because the first coupons on the 2030 and 2032 notes were paid in 2026, so cash interest cover for FY2025 and the earlier 2026 quarters overstates the position; interest expense cover is given beside it. Severity: Medium. Action: Read cover at September 30, 2026 and after.
- The 33% maximum debt-to-capitalization target is stated in the first-quarter release and the 2025 annual report but not in the second- and third-quarter releases, and the stated ratio of 36% exceeds it; the filings do not say whether the target still applies or how it is defined. Severity: Medium. Action: Ask management whether the target stands and on which debt definition.
- Option fee revenue is recognized on an effective-interest basis for sales-type leases and its relation to cash option payments is not reconciled in the sources read, so no cash revenue figure is stated. Severity: Low. Action: Supply the cash option payments received by quarter.

## Next module

The orchestrator selects the next module.
