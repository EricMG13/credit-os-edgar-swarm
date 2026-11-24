---
issuer_id: cco
module_id: CP-1
analysis_date: 2026-11-05
---

# Financial foundation: Clear Channel Outdoor Holdings, Inc. (cco), as of 2026-11-05

## Request

Financial foundation for Clear Channel Outdoor Holdings, Inc. (issuer id cco), as of 2026-11-05, on the credit snapshot pathway. The scope is the issuer's statements, debt, leverage, cash interest cover and liquidity inputs from the seven supplied documents, as reported on a continuing-operations basis in USD.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_cco-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-26 | 571124584b3bbe99a4fbff8adfaba5f0fb8933c5a0003d1ef35708c36c286d39 | FY2025 and FY2024 statements, debt note and maturity schedule, segment note, covenants, leases, commitments, digital revenue |
| 10-Q_2025-09-30_cco-20250930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2025 | 2025-11-06 | 607e09a97951d1ad4c47649541e08f4b1e6c417cc3bd1376061667bd020f7126 | Q3 2025 statements, nine-month cash flows, balance sheet at 2025-09-30, segment table, refinancing fee wording |
| 10-Q_2026-03-31_cco-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-06 | a3ad502aa08b83254f97c12e4f79050207a26c6003570b7bd60e33a1124d566c | Q1 2026 statements, balance sheet at 2026-03-31, segment table, facility availability |
| 10-Q_2026-06-30_cco-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-05 | fc57da6e0f4d7240050e6201742116917e571f4d11e190fcdcea84112429a51c | Latest statements, six-month cash flows, balance sheet at 2026-06-30, debt table, facilities, cash reconciliation, Spain sale |
| EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl | Earnings release (Exhibit 99.1) for the fourth quarter and full year of 2025 | 2026-02-26 | 5cc1d0e97fcf82997c8a6a84c737a99df944d52765b5ff540d0441e7f806a5a6 | Q4 2025 income statement and segment figures, FY2025 Adjusted EBITDA reconciliation, net debt |
| EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-06 | d85dec563195c10f63eb072d829bbf7b6a81552ec09b651fb1bdefa50ffbbbd6 | Q1 2026 and Q1 2025 Adjusted EBITDA reconciliation, net debt |
| EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-05 | 86540d4f0d27c129f16354d25b76c67a8e72d707aa0c050724d976a7c4c17aa5 | Q2 and first-half 2026 and 2025 Adjusted EBITDA reconciliation, net debt, Spain sale |

| Handoff | Module | sha256 |
|---|---|---|
| Source readiness handoff | Source readiness (CP-0) | 25f5941e7738cbbb9cc441b22baccaa2ada8f37b47d3d88bed27566de603a4d3 |

## Findings

### Bottom line

Leverage is very high: on the last twelve months to 30 June 2026, total debt is 9.38x Adjusted EBITDA and 10.46x reported EBITDA, while cash interest cover is only 1.40x on Adjusted EBITDA, so creditors depend on refinancing access rather than internally generated cash.
Basis: calculation C32; calculation C29; calculation C34; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2

Near-term funding is not the constraint: undrawn facilities of USD 205.5 million sit beside cash and about USD 197 million of cash interest expected in the second half of 2026, and no note or loan matures before 2028. Reported EBITDA is derived here as operating income plus depreciation and amortization because the company states none, and cash flows mix continuing and discontinued operations, so cover and free cash flow carry that qualification.
Basis: calculation C48; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 32; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 33; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117; calculation C1

### Leverage and cover

Leverage on the last twelve months to 30 June 2026 is 9.38x total debt to Adjusted EBITDA and 10.46x on reported EBITDA; net of cash the figures are 9.03x and 10.07x. Year-end 2025 stood at 10.11x and 10.51x, so the improvement comes from earnings, with Adjusted EBITDA up 7.82% over FY2025 while total debt rose only 0.09%, rather than from repayment. FY2024 looks worse at 11.90x and 12.49x, but that year's debt still includes the term loan of the former Europe-North business whose earnings are outside the continuing figures, so the true improvement is smaller than the headline.
Basis: calculation C32; calculation C26; calculation C20; calculation C50; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 101

Cash interest cover is 1.40x on Adjusted EBITDA and 1.25x on reported EBITDA for the last twelve months, against 1.28x and 1.23x for 2025. Cover is thin because the August 2025 refinancing swapped USD 2.0 billion of 5.125% and 9.000% secured notes for USD 2.05 billion of 7.125% and 7.500% secured notes, which lifted the weighted average cost of debt from 7.4% to 7.6% between the 2024 and 2025 year-ends, and cash interest stays near USD 390 million a year while Adjusted EBITDA is only about 1.4 times that. A shortfall in EBITDA therefore falls straight onto liquidity, not onto a cushion.
Basis: calculation C34; calculation C31; calculation C8; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 73; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 102

### Cash flow quality

Free cash flow after cash interest is positive but small: operating cash flow of USD 160.374 million less capital expenditure of USD 76.122 million leaves USD 84.252 million for the last twelve months, 1.65% of total debt, against USD 31.981 million for 2025 and a deficit of USD 62.649 million for 2024. The figures combine continuing and discontinued operations because the cash flow statement does not separate them. Operating cash flow is stated after operating lease cash payments of USD 105.949 million (net of interest) in the first half of 2026 and after USD 12.2 million of Merger transaction costs paid in the same half, the latter being one-off in nature.
Basis: calculation C12; calculation C52; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 33

### Liquidity and maturities

At 30 June 2026 cash of USD 192.138 million and USD 205.5 million of undrawn facility availability total USD 397.638 million against about USD 197 million of cash interest expected in the second half of 2026. No note or loan matures before 2028, when USD 1,324.631 million falls due, almost all of it the 2028 senior notes and the term loan. Availability under the receivables facility is capped by a borrowing base tied to receivables, and the revolver letter of credit of USD 7.0 million that related to the Spain business was cancelled on 4 August 2026.
Basis: calculation C48; calculation C51; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 33; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 32; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117

### Funding float and leases

Deferred revenue rose by USD 27.293 million to USD 102.73 million between year-end 2025 and 30 June 2026, a customer prepayment float that supports cash until the campaigns run. Operating lease liabilities of USD 1,361.914 million at 30 June 2026 sit outside total debt while the related site lease cost is inside EBITDA, so leverage here is not lease-adjusted and a lease-adjusted view would be materially higher.
Basis: calculation C46; calculation C47; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2

### Subsequent events

After the balance sheet date the sale of the Spain business closed on 4 August 2026 for a purchase price of about USD 132.3 million; net proceeds are not stated, so no pro forma net debt is shown. The Merger, whose debt amendments and conditional notices of redemption for the 2028 and 2029 senior notes take effect only on completion, was still pending in the last document supplied, and none of this is blended into the period figures above.
Basis: 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 9; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 16–17; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 1

### Financials and credit metrics

| Metric | Unit | FY2024 | FY2025 | LTM 2026-06-30 |
|---|---|---|---|---|
| Revenue | US$m | 1,505.23 | 1,604.14 | 1,679.056 |
| EBITDA (Adjusted), issuer-defined | US$m | 475.758 | 504.79 | 544.254 |
| EBITDA (Reported), calculated | US$m | 453.181 | 485.558 | 488.113 |
| Adjusted EBITDA margin | % | 31.61 | 31.47 | 32.41 |
| Cash interest paid | US$m | 434.52 | 394.429 | 390.057 |
| Free cash flow, operating cash flow less capital expenditure | US$m | -62.649 | 31.981 | 84.252 |
| Total debt, carrying value | US$m | 5,660.305 | 5,102.993 | 5,107.629 |
| Cash and cash equivalents | US$m | 109.707 | 190.022 | 192.138 |
| Net debt | US$m | 5,550.598 | 4,912.971 | 4,915.491 |
| Total debt / adjusted EBITDA | x | 11.90 | 10.11 | 9.38 |
| Net debt / adjusted EBITDA | x | 11.67 | 9.73 | 9.03 |
| Total debt / EBITDA (Reported) | x | 12.49 | 10.51 | 10.46 |
| Net debt / EBITDA (Reported) | x | 12.25 | 10.12 | 10.07 |
| Adjusted EBITDA / cash interest | x | 1.09 | 1.28 | 1.40 |
| EBITDA (Reported) / cash interest | x | 1.04 | 1.23 | 1.25 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 12.49 | 12.25 | x | Total and net debt at carrying value at 2024-12-31 (including the 375.000 term loan of the former Europe-North business, whose earnings are excluded) over FY2024 EBITDA (Reported), calculated as operating income plus depreciation and amortization; adjusted ratios in the register |
| FY2025 / 2025-12-31 | 10.51 | 10.12 | x | Carrying-value debt at 2025-12-31 over FY2025 EBITDA (Reported), calculated; adjusted ratios in the register |
| 2026-06-30 | 10.46 | 10.07 | x | Carrying-value debt at 2026-06-30 over last-twelve-months EBITDA (Reported), calculated; Q3 2025 to Q2 2026; adjusted ratios in the register; not pro forma |

Reported EBITDA is calculated as operating income plus depreciation and amortization because the company states none, and FY2024 debt still includes the term loan of the former Europe-North business whose earnings are excluded.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 1.04 | x | FY2024 EBITDA (Reported) over cash interest paid for the whole company, including interest on the former CCIBV term loan |
| FY2025 / 2025-12-31 | 1.23 | x | FY2025 EBITDA (Reported) over cash interest paid for the whole company, including about three months of interest on the CCIBV term loan repaid on 2025-03-31 |
| 2026-06-30 | 1.25 | x | LTM EBITDA (Reported) over LTM cash interest paid (FY2025 plus H1 2026 less H1 2025), a period with no CCIBV interest |

Cash interest is for the whole company, so the 2024 and 2025 figures include interest on a repaid term loan of a discontinued business while the last twelve months do not.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 109.707 | Not supplied: the supplied documents state no facility availability at 2024-12-31 | US$m | Cash is balance sheet cash of continuing operations |
| FY2025 / 2025-12-31 | 190.022 | 205.8 | US$m | Excess availability: revolving credit facility 93.1 (commitment 100.0 less letters of credit 6.9) plus receivables-based facility 112.7 (limit 200.0 less letters of credit 87.3, capped by the borrowing base); no borrowings |
| 2026-03-31 | 182.421 | 204.5 | US$m | Excess availability: revolving credit facility 93.0 plus receivables-based facility 111.5; letters of credit 95.5; no borrowings |
| 2026-06-30 | 192.138 | 205.5 | US$m | Excess availability: revolving credit facility 93.0 plus receivables-based facility 112.4, printed total 205.5 (rounding); printed total letters of credit 94.5; no borrowings; the revolver letter of credit of 7.0 was cancelled on 2026-08-04 with the Spain sale |

Receivables facility availability is limited by a borrowing base, so undrawn availability is not a fixed commitment.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0.312 | US$m | Debt maturing in the year, principal, from the 10-K maturity schedule at 2025-12-31 (finance leases included) |
| FY2027 | 0.297 | US$m | Debt maturing in the year, principal, from the 10-K maturity schedule at 2025-12-31 (finance leases included) |
| FY2028 | 1,324.631 | US$m | Debt maturing in the year, principal: the 2028 senior notes 899.311 and the term loan 425.000 plus finance leases 0.320 |
| FY2029 | 906.301 | US$m | Debt maturing in the year, principal, from the 10-K maturity schedule at 2025-12-31 (finance leases included) |
| FY2030 | 865.251 | US$m | Debt maturing in the year, principal, from the 10-K maturity schedule at 2025-12-31 (finance leases included) |
| FY2031 | 2,052.105 | US$m | All debt maturing after 2030 (the 10-K Thereafter line): the 2031 and 2033 senior secured notes 2,050.000 plus finance leases 2.105; labelled FY2031 so the table orders |

The schedule is printed at 31 December 2025 and the FY2031 row holds everything after 2030.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5,660.305 | 109.707 | 5,550.598 | US$m | Total debt at carrying value (current plus long-term, net of discount and fees) includes finance leases of 3.974 and the 375.000 term loan of the former CCIBV (Europe-North) business, whose earnings are outside continuing EBITDA; principal 5,703.974 less discount 7.313 and fees 36.356 (2024 column of the 10-K debt table) |
| FY2025 / 2025-12-31 | 5,102.993 | 190.022 | 4,912.971 | US$m | Total debt at carrying value includes finance leases of 3.636; principal 5,148.897 (ladder total) less discount 3.605 and fees 42.299 |
| 2026-03-31 | 5,105.29 | 182.421 | 4,922.869 | US$m | Total debt at carrying value includes finance leases; reported, not pro forma; cash excludes cash held by discontinued operations |
| 2026-06-30 | 5,107.629 | 192.138 | 4,915.491 | US$m | Total debt at carrying value includes finance leases of 3.489; principal 5,148.75 less discount 2.967 and fees 38.154; cash excludes 10.143 held by discontinued operations; reported, not pro forma for the Spain sale |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 5,148.897 | -45.904 | 5,102.993 | US$m | Ladder drawn at 2025-12-31, the date the schedule is printed. Reconciling items: original issue discount -3.605 and long-term debt fees -42.299 (sum -45.904); no debt is left out of the ladder. At 2026-06-30 the notes and term loan principal is unchanged and finance leases are 3.489, but their instalment years are not printed |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Completed sale of the business in Spain for a purchase price of approximately USD 132.3 million | 2026-08-04 | Not supplied: net proceeds are not stated; the price is before post-closing adjustments and transaction costs | Not supplied: net proceeds are not stated | Not supplied: net proceeds are not stated | US$m | Subsequent event after the 2026-06-30 balance sheet; the company intends to apply net proceeds to reduce debt, subject to the outcome of the Merger. Not reflected in any period figure. The Spain cash of 10.143 is already outside Cash of continuing operations, so only the sale proceeds would move net debt; the revolver letter of credit of 7.0 was cancelled on the same date |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,505.23 | 475.758 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted as printed in the releases |
| FY2025 / 2025-12-31 | 1,604.14 | 504.79 | US$m | Twelve months; issuer-adjusted; continuing operations |
| 2026-06-30 | 1,679.056 | 544.254 | US$m | Twelve months to 2026-06-30 (last twelve months: FY2025 plus H1 2026 less H1 2025); issuer-adjusted, including Q3 2025 calculated |

Adjusted EBITDA is issuer-defined and the last-twelve-months figure includes a calculated third quarter of 2025.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Receivables-Based Credit Facility | 1 | Yes | 0 | 0.00 | US$m | First-priority lien on accounts receivable and related assets (ABL priority collateral), second-priority on the notes collateral; borrower the Company and certain subsidiaries, guarantors certain domestic subsidiaries; undrawn; limit 200.0, borrowing-base capped; ranking is by collateral pool, equal to the other secured debt; principal at 2026-06-30; cumulative principal 0 over LTM EBITDA (Reported) 488.113, in times |
| Revolving Credit Facility | 1 | Yes | 0 | 0.00 | US$m | First-priority lien on the notes collateral pari passu with the secured notes and term loan, second-priority on the ABL collateral; borrower the Company, guarantors certain wholly-owned domestic subsidiaries; undrawn; commitment 100.0; principal at 2026-06-30; cumulative principal 0 over LTM EBITDA (Reported) 488.113, in times |
| Term Loan Facility | 1 | Yes | 425 | 0.87 | US$m | Same security and guarantors as the revolving credit facility; drawn 425.000; principal at 2026-06-30; cumulative principal 425 over LTM EBITDA (Reported) 488.113, in times |
| 7.875% Senior Secured Notes due 2030 | 1 | Yes | 865 | 2.64 | US$m | First-priority on the notes collateral, second-priority on the ABL collateral; guaranteed by certain wholly-owned domestic subsidiaries; principal at 2026-06-30; cumulative principal 1,290 over LTM EBITDA (Reported) 488.113, in times |
| 7.125% Senior Secured Notes due 2031 | 1 | Yes | 1,150 | 5.00 | US$m | Same security and guarantors; principal at 2026-06-30; cumulative principal 2,440 over LTM EBITDA (Reported) 488.113, in times |
| 7.500% Senior Secured Notes due 2033 | 1 | Yes | 900 | 6.84 | US$m | Same security and guarantors; principal at 2026-06-30; cumulative principal 3,340 over LTM EBITDA (Reported) 488.113, in times |
| 7.750% Senior Notes due 2028 | 2 | No | 899.311 | 8.69 | US$m | Senior unsecured, effectively subordinated to secured debt to the value of its collateral; guaranteed on a senior unsecured basis by certain wholly-owned domestic subsidiaries; structurally subordinated to non-guarantor subsidiaries; notes repurchased and held by the Company (about 100.7) are excluded; principal at 2026-06-30; cumulative principal 4,239.311 over LTM EBITDA (Reported) 488.113, in times |
| 7.500% Senior Notes due 2029 | 2 | No | 905.95 | 10.54 | US$m | Senior unsecured, same ranking and guarantors as the 2028 senior notes; notes repurchased and held by the Company are excluded; principal at 2026-06-30; cumulative principal 5,145.261 over LTM EBITDA (Reported) 488.113, in times |

Equal rank is by collateral pool rather than a single lien, and finance leases are left out because their rank is not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 485.558 | US$m | Opening measure: operating income 310.606 plus depreciation and amortization 174.952, calculated; the company states no unadjusted EBITDA |
| Other operating (income) expense, net | -2.749 | US$m | Issuer add-back line, classification other; the company removes net other operating income of 2.749; realisation status not stated |
| Share-based compensation | 25.474 | US$m | Issuer add-back, classification share-based compensation, continuing operations; realisation status not stated (a non-cash charge) |
| Restructuring and other costs (reversals), net | -3.493 | US$m | Issuer add-back, classification restructuring; a net reversal that lowers Adjusted EBITDA; includes 10.1 of insurance proceeds received in the first half of 2025 per the releases; realisation status not stated |
| EBITDA (Adjusted), FY2025 | 504.79 | US$m | Closing measure: the issuer's Adjusted EBITDA; the steps sum to it exactly; source: the FY2025 reconciliation in the February release |

The steps are the issuer's own reconciling items and sum to its Adjusted EBITDA exactly.

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q4 2025 | 2025-10-01 | 2025-12-31 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| Q2 2026 | 2026-04-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cco-20251231.htm.jsonl | Annual report on Form 10-K | FY2025 and FY2024 (income statement and cash flows also 2023); balance sheets 2025-12-31 and 2024-12-31 | USD | thousands | Consolidated; continuing operations with Spain, Europe-North and Latin America in discontinued operations | US GAAP, audited | Tier 1 | Annual statements, debt note, maturities, leases, commitments, segments, covenant wording | Cash flows combine continuing and discontinued operations; no consolidated Adjusted EBITDA |
| 10-Q_2025-09-30_cco-20250930.htm.jsonl | Quarterly report on Form 10-Q | Q3 2025 and nine months 2025; balance sheet 2025-09-30 | USD | thousands | Same | US GAAP, unaudited; auditor review not stated | Tier 2b | Q3 2025 statements, nine-month cash flows | No earnings release for the quarter is supplied |
| 10-Q_2026-03-31_cco-20260331.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 and Q1 2025; balance sheet 2026-03-31 | USD | thousands | Same | US GAAP, unaudited; auditor review not stated | Tier 2b | Q1 2026 statements, liquidity | Same |
| 10-Q_2026-06-30_cco-20260630.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 and six months 2026 with 2025 comparatives; balance sheet 2026-06-30 | USD | thousands | Same | US GAAP, unaudited; auditor review not stated | Tier 2b | Latest statements, debt, facilities, cash reconciliation | Same |
| EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q4 2025 and FY2025 with 2024 comparatives | USD | thousands | Continuing operations | Issuer-prepared; non-GAAP reconciliations | Tier 2b | Adjusted EBITDA reconciliation, Q4 2025 income statement, net debt | Non-GAAP measures not audited |
| EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 and Q1 2025 | USD | thousands | Continuing operations | Issuer-prepared; non-GAAP | Tier 2b | Adjusted EBITDA Q1 2026 and Q1 2025, net debt | Same |
| EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026, six months 2026 and 2025 | USD | thousands | Continuing operations | Issuer-prepared; non-GAAP | Tier 2b | Adjusted EBITDA Q2 and H1, net debt, Spain sale | Same |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Clear Channel Outdoor Holdings, Inc. | Issuer, reporting entity and borrower under the Senior Secured Credit Facilities | 31 December | USD | thousands | Consolidated with subsidiaries; continuing operations are America, Airports and Other (Singapore) | US GAAP | FY2024, FY2025, Q3 2025, Q4 2025, Q1 2026, Q2 2026, H1 2025, H1 2026, 9M 2025; balance sheets at 2024-12-31, 2025-09-30, 2025-12-31, 2026-03-31, 2026-06-30 |
| Certain wholly-owned domestic subsidiaries (not named) | Guarantors of the credit facilities and notes | 31 December | USD | thousands | Within the consolidated group; no guarantor-level statements supplied | US GAAP | Not supplied: the filings name no guarantor and print no guarantor financials |
| Business in Spain; former Europe-North, Latin American and Brazil businesses | Discontinued operations (Spain sold 2026-08-04) | 31 December | USD | thousands | Excluded from continuing operations; included in the combined cash flow statement and, for Spain, in the current assets and liabilities of discontinued operations | US GAAP | Through the sale dates |
| Madison Parent Inc. and Madison Merger Sub Inc. | Acquirer vehicles under the pending Merger Agreement | Not supplied: not a reporting entity here | USD | Not supplied: no statements | Not part of the reporting group before completion | Not applicable | Not applicable |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Money tables restated from USD thousands to US$m | all statements | Unit | Thousands as printed | Millions, exact to three decimals | The money unit is US$m even where statements print thousands; no value changes | All money tables |
| EBITDA (Reported) derived as operating income plus depreciation and amortization | 10-K_2025-12-31_cco-20251231.htm.jsonl | Derivation | Not stated by the issuer | 453,181 (FY2024); 485,558 (FY2025); 488,113 LTM to 2026-06-30 (USD thousands) | The issuer states no unadjusted EBITDA; the components are printed; labelled calculated, an Analyst Judgement on definition | All |
| Q3 2025 Adjusted EBITDA derived | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl | Derivation | Not printed | 132,515 (USD thousands) | No Q3 2025 earnings release is supplied; FY2025 less H1 2025 less Q4 2025 | Q3 2025 and LTM |
| Cash for net debt is balance sheet cash of continuing operations | 10-Q_2026-06-30_cco-20260630.htm.jsonl | Perimeter | 202,281 including discontinued operations; 207,825 including restricted cash | 192,138 | Matches the company's net debt; discontinued operations cash leaves with the Spain sale | All net debt rows |
| Notes repurchased and held by the Company are excluded from principal | 10-K_2025-12-31_cco-20251231.htm.jsonl | Perimeter | 7.750% 2028 notes 1,000,000 issued; 7.500% 2029 notes 1,050,000 issued | 899,311 and 905,950 | The debt table prints outstanding amounts net of notes held by the Company, which were repurchased and not cancelled | All debt rows |
| Finance leases stay inside total debt; operating lease liabilities stay outside | 10-K_2025-12-31_cco-20251231.htm.jsonl | Perimeter | Operating lease liabilities 1,367,706 (2025-12-31) | Not added to total debt | The issuer presents operating lease liabilities on their own balance sheet lines; finance leases are inside its debt lines | All |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Revenue | 1,505,230 | 1,604,140 | 736,988 | 811,904 | 405,637 | 461,515 | 373,864 | 438,040 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Direct operating expenses | 680,578 | 748,023 | 354,059 | 376,280 | 184,430 | 209,534 | 180,102 | 196,178 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Selling, general and administrative expenses | 252,907 | 262,383 | 129,373 | 136,560 | 66,228 | 66,782 | 66,592 | 69,968 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Corporate expenses | 126,904 | 110,925 | 50,903 | 67,399 | 30,282 | 29,740 | 30,818 | 36,581 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Depreciation and amortization | 173,998 | 174,952 | 86,339 | 82,769 | 43,873 | 44,740 | 41,523 | 41,246 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Other operating expense (income), net | -8,340 | -2,749 | -6,100 | 20,357 | 107 | 3,244 | 15,346 | 5,011 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Operating income | 279,183 | 310,606 | 122,414 | 128,539 | 80,717 | 107,475 | 39,483 | 89,056 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Interest expense, net | -401,541 | -395,649 | -195,387 | -197,525 | -101,053 | -99,209 | -98,498 | -99,027 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Gain (loss) on extinguishment of debt, net | -2,393 | -14,956 | 28,796 | Not supplied: the statement prints a dash | -43,752 | Not supplied: the statement prints a dash | Not supplied: no such line in that period's statement | Not supplied: the statement prints a dash | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Other income (expense), net | -8,378 | 1,199 | 912 | 1,009 | 69 | 218 | 741 | 268 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Income (loss) from continuing operations before income taxes | -133,129 | -98,800 | -43,265 | -67,977 | -64,019 | 8,484 | -58,274 | -9,703 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Income tax benefit (expense) attributable to continuing operations | 9,365 | -4,947 | -5,706 | 8,528 | 14,432 | -13,673 | 8,827 | -299 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Income (loss) from continuing operations | -123,764 | -103,747 | -48,971 | -59,449 | -49,587 | -5,189 | -49,447 | -10,002 | USD thousands | Reported, sign as printed; continuing operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Income (loss) from discontinued operations | -52,114 | 128,486 | 122,833 | 6,491 | -9,262 | 14,915 | 1,453 | 5,038 | USD thousands | Reported, sign as printed; discontinued operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Consolidated net income (loss) | -175,878 | 24,739 | 73,862 | -52,958 | -58,849 | 9,726 | -47,994 | -4,964 | USD thousands | Reported, sign as printed; continuing and discontinued operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Less: Net income attributable to noncontrolling interests | 3,376 | 4,800 | 1,833 | 959 | 1,245 | 1,722 | 600 | 359 | USD thousands | Reported, sign as printed; continuing and discontinued operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| Net income (loss) attributable to the Company | -179,254 | 19,939 | 72,029 | -53,917 | -60,094 | 8,004 | -48,594 | -5,323 | USD thousands | Reported, sign as printed; continuing and discontinued operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| EBITDA (Reported) | 453,181 | 485,558 | 208,753 | 211,308 | 124,590 | 152,215 | 81,006 | 130,302 | USD thousands | Calculated: Operating income + Depreciation and amortization; the issuer states no unadjusted EBITDA | calculation C1 |
| EBITDA (Adjusted) | 475,758 | 504,790 | 207,815 | 247,279 | 132,515 | 164,460 | 103,847 | 143,432 | USD thousands | Issuer-adjusted, as printed in the releases; Q3 2025 calculated (FY2025 less H1 2025 less Q4 2025) | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl, page 8; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, pages 8–9; calculation C2 |
| Revenue: America | 1,143,510 | 1,196,824 | 557,304 | 602,803 | 309,959 | 329,561 | 278,487 | 324,316 | USD thousands | Reported segment revenue; segments sum to Revenue | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12 |
| Revenue: Airports | 361,488 | 407,127 | 179,668 | 208,827 | 95,610 | 131,849 | 95,226 | 113,601 | USD thousands | Reported segment revenue; segments sum to Revenue | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12 |
| Revenue: Other | 232 | 189 | 16 | 274 | 68 | 105 | 151 | 123 | USD thousands | Reported segment revenue; segments sum to Revenue | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12 |
| Segment Adjusted EBITDA: America | 487,990 | 501,038 | 215,472 | 247,079 | 133,441 | 152,125 | 104,702 | 142,377 | USD thousands | Reported Segment Adjusted EBITDA (revenue less direct operating and SG&A expenses, excluding restructuring and other costs) | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 2; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12 |
| Segment Adjusted EBITDA: Airports | 87,860 | 95,219 | 38,660 | 52,816 | 21,866 | 34,693 | 22,926 | 29,890 | USD thousands | Reported Segment Adjusted EBITDA (revenue less direct operating and SG&A expenses, excluding restructuring and other costs) | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 2; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12 |
| Segment Adjusted EBITDA: Other | -1,142 | -1,137 | -571 | -559 | -325 | -241 | -281 | -278 | USD thousands | Reported Segment Adjusted EBITDA (revenue less direct operating and SG&A expenses, excluding restructuring and other costs); Q4 2025 calculated as year less nine months | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 13; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 13–14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 2; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 11–12; calculation C3 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Consolidated net income (loss) | -175,878 | 24,739 | 15,013 | 73,862 | -52,958 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Non-cash operating lease expense, net of interest | 270,492 | 207,105 | 160,214 | 113,219 | 94,143 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Depreciation, amortization and impairment | 239,572 | 174,952 | 130,212 | 86,339 | 82,769 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Loss (gain) on dispositions and held-for-sale classification, net | 28,606 | -134,951 | -140,424 | -144,276 | -250 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Share-based compensation | 26,214 | 25,643 | 19,151 | 12,762 | 13,832 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Amortization of deferred financing charges and note discounts | 11,640 | 10,128 | 7,695 | 5,329 | 4,968 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Foreign exchange transaction loss (gain) | -6,592 | 3,999 | 4,035 | Not supplied: line not printed for this period | Not supplied: line not printed for this period | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Credit loss expense | 2,876 | 3,217 | 2,598 | 1,606 | 3,352 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Deferred income taxes | -11,496 | 710 | -5,884 | 9,537 | -8,927 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Loss (gain) on extinguishment and modification of debt, net | 16,768 | 20,356 | 20,356 | -23,396 | Not supplied: the statement prints a dash | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Other reconciling items, net | 2,664 | 1,213 | -1,214 | 3,447 | -784 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Decrease (increase) in accounts receivable | -23,890 | 4,383 | 35,096 | 32,135 | 3,897 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Decrease (increase) in prepaid expenses and other operating assets | 9,231 | -5,841 | -9,136 | -7,907 | 4,730 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Increase (decrease) in accounts payable and accrued expenses | -31,416 | -20,441 | -47,680 | -51,899 | -9,909 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Decrease in operating lease liabilities (cash payments, net of interest) | -280,025 | -207,736 | -167,376 | -124,080 | -105,949 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Increase (decrease) in accrued interest | -6,726 | 8,150 | 22,221 | -8,790 | -10,185 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Increase in deferred revenue | 13,249 | 9,688 | 23,295 | 27,151 | 27,373 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Increase (decrease) in other operating liabilities | -5,543 | -10,454 | -9,622 | -2,713 | 1,738 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Net Cash from Operating Activities | 79,746 | 114,860 | 58,550 | 2,326 | 47,840 | USD thousands | Issuer line: Net cash provided by operating activities; continuing and discontinued operations combined | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Capital expenditures | -142,395 | -82,879 | -56,898 | -42,080 | -35,323 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Payments for acquisition of businesses and/or assets, net of cash acquired | -26,638 | -563 | -522 | Not supplied: line not printed for this period | Not supplied: line not printed for this period | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Proceeds from sales of businesses and/or assets, net of direct costs to sell and cash sold | 13,712 | 607,807 | 603,502 | 599,292 | 1,288 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Other investing activities, net | -618 | -1,106 | -1,106 | 74 | -693 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | -155,939 | 523,259 | 544,976 | 557,286 | -34,728 | USD thousands | Issuer line: Net cash provided by (used for) investing activities | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Proceeds from long-term debt | 1,657,000 | 2,050,000 | 2,050,000 | Not supplied: line not printed for this period | Not supplied: line not printed for this period | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Payments on long-term debt | -1,635,562 | -2,610,918 | -2,610,854 | -574,673 | -145 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Debt issuance and modification costs | -20,744 | -27,944 | -27,184 | -1,421 | -25 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Taxes paid related to net share settlement of equity awards | -4,878 | -4,525 | -4,444 | -4,412 | -14,686 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Payments to noncontrolling interests, net | -3,992 | -4,908 | -4,833 | -4,775 | -6,133 | USD thousands | Reported, sign as printed (outflow negative) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | -8,176 | -598,295 | -597,315 | -585,281 | -20,989 | USD thousands | Issuer line: Net cash provided by (used for) financing activities | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| FX Effect on Cash | -4,100 | 4,764 | 4,679 | 4,414 | -958 | USD thousands | Issuer line: Effect of exchange rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Net Cash Change | -88,469 | 44,588 | 10,890 | -21,255 | -8,835 | USD thousands | Issuer line: Net increase (decrease) in cash, cash equivalents and restricted cash; equals the three activity totals plus the FX effect | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Opening Cash | 260,541 | 172,072 | 172,072 | 172,072 | 216,660 | USD thousands | Cash, cash equivalents and restricted cash at the start of the period (includes cash held by discontinued operations and restricted cash) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Closing Cash | 172,072 | 216,660 | 182,962 | 150,817 | 207,825 | USD thousands | Cash, cash equivalents and restricted cash at the end of the period; not the balance sheet cash line | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 434,520 | 394,429 | 282,012 | 210,220 | 205,848 | USD thousands | Supplemental disclosure: cash paid for interest, positive amount; whole company including discontinued operations | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |
| Cash paid for income taxes, net of refunds | 16,150 | 7,391 | 6,905 | 6,737 | 997 | USD thousands | Supplemental disclosure, as printed | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 79–80; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 5–6; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 5–6 |

### T4.6 Balance sheet

| Line item | FY2024 | Q3 2025 | FY2025 | Q1 2026 | Q2 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 109,707 | 155,010 | 190,022 | 182,421 | 192,138 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 344,096 | 340,285 | 371,377 | 345,700 | 367,992 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Prepaid expenses | 27,112 | 23,025 | 21,791 | 25,558 | 18,795 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Other current assets | 2,093 | 8,272 | 7,295 | 3,317 | 6,322 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Current assets of discontinued operations | 1,176,036 | 173,019 | 202,709 | 176,772 | 187,273 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Current Assets | 1,659,044 | 699,611 | 793,194 | 733,768 | 772,520 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Structures, net | 335,761 | 306,157 | 298,846 | 287,743 | 282,858 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Other property, plant and equipment, net | 144,226 | 136,390 | 142,977 | 144,720 | 145,714 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Permits, net | 613,305 | 564,629 | 548,288 | 531,947 | 515,940 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Other intangible assets, net | 218,465 | 209,222 | 205,953 | 202,785 | 199,803 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Goodwill | 507,819 | 507,819 | 507,819 | 507,819 | 507,819 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Operating lease right-of-use assets | 1,315,529 | 1,317,116 | 1,313,912 | 1,296,377 | 1,318,530 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Other assets | 10,114 | 19,590 | 17,886 | 18,297 | 19,897 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Assets | 4,804,263 | 3,760,534 | 3,828,875 | 3,723,456 | 3,763,081 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accounts payable | 38,769 | 30,788 | 32,109 | 35,145 | 37,223 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accrued expenses | 163,615 | 150,311 | 169,693 | 132,263 | 161,978 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Current operating lease liabilities | 132,877 | 133,175 | 142,139 | 131,803 | 134,384 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accrued interest | 90,945 | 113,166 | 99,095 | 103,011 | 88,910 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Deferred revenue | 70,214 | 78,423 | 75,437 | 96,680 | 102,730 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Current portion of long-term debt | 348 | 299 | 312 | 316 | 314 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Current liabilities of discontinued operations | 775,210 | 109,431 | 99,309 | 86,880 | 90,348 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Current Liabilities | 1,271,978 | 615,593 | 618,094 | 586,098 | 615,887 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Long-term debt | 5,659,957 | 5,099,813 | 5,102,681 | 5,104,974 | 5,107,315 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Non-current operating lease liabilities | 1,229,345 | 1,229,341 | 1,225,567 | 1,205,137 | 1,227,530 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Deferred tax liabilities, net | 221,814 | 215,017 | 221,616 | 210,987 | 212,688 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Other liabilities | 60,952 | 56,054 | 55,285 | 54,609 | 56,780 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Liabilities | 8,444,046 | 7,215,818 | 7,223,243 | 7,161,805 | 7,220,200 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Noncontrolling interests | 11,669 | 9,935 | 11,581 | 12,017 | 6,401 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Common stock | 5,032 | 5,131 | 5,135 | 5,146 | 5,280 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 3,589,930 | 3,606,810 | 3,613,197 | 3,618,997 | 3,619,142 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accumulated deficit | -6,960,129 | -6,948,194 | -6,940,190 | -6,988,784 | -6,994,107 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive loss | -257,837 | -98,246 | -53,391 | -55,018 | -56,191 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Treasury stock | -28,448 | -30,720 | -30,700 | -30,707 | -37,644 | USD thousands | Reported | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Equity | -3,639,783 | -3,455,284 | -3,394,368 | -3,438,349 | -3,457,119 | USD thousands | Issuer line: Total Stockholders' Deficit, including noncontrolling interests | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |
| Total Debt | 5,660,305 | 5,100,112 | 5,102,993 | 5,105,290 | 5,107,629 | USD thousands | Carrying value: current portion plus long-term debt, net of original issue discount and debt fees; includes finance leases of 3,974 (FY2024), 3,636 (FY2025) and 3,489 (Q2 2026) thousand; operating lease liabilities are separate balance sheet lines and are not in it | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3; 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 100–101; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| Cash & Equivalents | 109,707 | 155,010 | 190,022 | 182,421 | 192,138 | USD thousands | Balance sheet cash of continuing operations; excludes cash held by discontinued operations and restricted cash | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 77–78; 10-Q_2025-09-30_cco-20250930.htm.jsonl, pages 2–3; 10-Q_2026-03-31_cco-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_cco-20260630.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Receivables-Based Credit Facility | Asset-based revolving credit facility | Not supplied: not disclosed by instrument | 0 | 0 | 200,000 | First priority on ABL collateral, second on notes collateral | Equal to other secured debt, by collateral pool | USD | 0 | Not applicable | Applicable Rate plus base rate or Term SOFR (margin not stated) | Floating | Term SOFR, base rate | Not supplied: the Applicable Rate is not stated in the supplied text | Not supplied: the base rate definition has a 0.00% minimum; no floor is stated for Term SOFR loans | 2030-06-12 | Not applicable | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| Revolving Credit Facility | Revolving credit facility | Not supplied: not disclosed by instrument | 0 | 0 | 100,000 | First priority on notes collateral, second on ABL collateral | Equal to other secured debt | USD | 0 | Not applicable | Applicable Rate plus base rate or Term SOFR (margin not stated) | Floating | Term SOFR, base rate | Not supplied: the Applicable Rate is not stated in the supplied text | Not supplied: the base rate definition has a 0.00% minimum; no floor is stated for Term SOFR loans | 2030-06-12 | Not applicable | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| Term Loan Facility | Term loan | Not supplied: not disclosed by instrument | 425,000 | 425,000 | 425,000 | First priority on notes collateral, second on ABL collateral | Equal to other secured debt | USD | 425,000 | Not applicable | Applicable Rate plus base rate or Term SOFR (margin not stated) | Floating | Term SOFR, base rate | Not supplied: the Applicable Rate is not stated in the supplied text | Not supplied: the base rate definition has a 0.00% minimum; no floor is stated for Term SOFR loans | 2028-08-23 (subject to a springing maturity) | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117 |
| 7.875% Senior Secured Notes due 2030 | Senior secured notes | Not supplied: not disclosed by instrument | 865,000 | 865,000 | 865,000 | First priority on notes collateral, second on ABL collateral; guaranteed by certain wholly-owned domestic subsidiaries | Pari passu with other senior secured debt | USD | 865,000 | Not applicable | 7.875% | Fixed | Not applicable | Not applicable | Not applicable | 2030-04-01 | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| 7.125% Senior Secured Notes due 2031 | Senior secured notes | Not supplied: not disclosed by instrument | 1,150,000 | 1,150,000 | 1,150,000 | First priority on notes collateral, second on ABL collateral; guaranteed by certain wholly-owned domestic subsidiaries | Pari passu with other senior secured debt | USD | 1,150,000 | Not applicable | 7.125% | Fixed | Not applicable | Not applicable | Not applicable | 2031-02-15 | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| 7.500% Senior Secured Notes due 2033 | Senior secured notes | Not supplied: not disclosed by instrument | 900,000 | 900,000 | 900,000 | First priority on notes collateral, second on ABL collateral; guaranteed by certain wholly-owned domestic subsidiaries | Pari passu with other senior secured debt | USD | 900,000 | Not applicable | 7.500% | Fixed | Not applicable | Not applicable | Not applicable | 2033-03-15 | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| 7.750% Senior Notes due 2028 | Senior unsecured notes | Not supplied: not disclosed by instrument | 899,311 | 899,311 | 899,311 | Unsecured; guaranteed by certain wholly-owned domestic subsidiaries | Senior unsecured, effectively subordinated to secured debt; USD 1.0 billion issued; about USD 100.7 million repurchased and held by the Company | USD | 899,311 | Not applicable | 7.750% | Fixed | Not applicable | Not applicable | Not applicable | 2028-04-15 | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| 7.500% Senior Notes due 2029 | Senior unsecured notes | Not supplied: not disclosed by instrument | 905,950 | 905,950 | 905,950 | Unsecured; guaranteed by certain wholly-owned domestic subsidiaries | Senior unsecured, effectively subordinated to secured debt; USD 1.05 billion issued; about USD 144.1 million repurchased and held by the Company | USD | 905,950 | Not applicable | 7.500% | Fixed | Not applicable | Not applicable | Not applicable | 2029-06-01 | 0 | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 104–116; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| Finance leases | Finance lease obligations carried within debt | Not supplied: not disclosed by instrument | 3,489 | 3,489 | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 3,489 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: only the total of 3,489 is printed at 2026-06-30; instalments 312 (2026), 297 (2027) at 2025-12-31 | Not supplied: instalments are printed only at year-end | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117 |
| Financing cost adjustment | Original issue discount and long-term debt fees, aggregate | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -41,121 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-06-30 | USD 1,604.14m | USD 811.904m | USD 736.988m | USD 1,679.056m | Calculated | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3 | Continuing operations; equals the sum of Q3 2025, Q4 2025, Q1 2026 and Q2 2026 |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 485.558m | USD 211.308m | USD 208.753m | USD 488.113m | Calculated | calculation C1 | Calculated EBITDA; the issuer states none |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 504.79m | USD 247.279m | USD 207.815m | USD 544.254m | Calculated | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 1 | Issuer-adjusted; Q3 2025 inside the LTM is calculated |
| Cash Interest Paid | LTM to 2026-06-30 | USD 394.429m | USD 205.848m | USD 210.22m | USD 390.057m | Calculated | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 6 | Whole company; the prior-year stub contains CCIBV interest to 2025-03-31, so the LTM has none |
| Net Cash from Operating Activities | LTM to 2026-06-30 | USD 114.86m | USD 47.84m | USD 2.326m | USD 160.374m | Calculated | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 5 | Continuing and discontinued operations combined |
| Capital expenditures (cash flow statement, outflow negative) | LTM to 2026-06-30 | USD -82.879m | USD -35.323m | USD -42.08m | USD -76.122m | Calculated | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 5 | Continuing and discontinued operations combined; the cash flow statement prints it as an outflow |
| EBITDA (Adjusted) for Q3 2025 | Q3 2025 (calculated) | USD 504.79m | USD 207.815m | USD 164.46m | USD 132.515m | Calculated | calculation C2 | Full-year component FY2025, then H1 2025 and Q4 2025 are subtracted (not a current stub less a prior stub); not printed by the company |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,660.305 | Net debt data FY2024 / 2024-12-31 | 453.181 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 12.49 | Calculated | Tier 1 | Debt at carrying value includes the CCIBV term loan of 375.000 of the former Europe-North business; EBITDA (Reported) is calculated, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 5,550.598 | Net debt data FY2024 / 2024-12-31 | 453.181 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 12.25 | Calculated | Tier 1 | Debt at carrying value includes the CCIBV term loan of 375.000 of the former Europe-North business; EBITDA (Reported) is calculated, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 453.181 | calculation C1 | 434.52 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2024 / 2024-12-31 | USD | US$m | 1.04 | Calculated | Tier 1 | FY2024 cash interest includes interest on the discontinued CCIBV term loan; EBITDA (Reported) is calculated, not issuer-stated |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 5,660.305 | Net debt data FY2024 / 2024-12-31 | 475.758 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2024 / 2024-12-31 | USD | US$m | 11.90 | Calculated | Tier 2b | Debt at carrying value includes the CCIBV term loan of 375.000 of the former Europe-North business; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 5,550.598 | Net debt data FY2024 / 2024-12-31 | 475.758 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2024 / 2024-12-31 | USD | US$m | 11.67 | Calculated | Tier 2b | Debt at carrying value includes the CCIBV term loan of 375.000 of the former Europe-North business; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 475.758 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | 434.52 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2024 / 2024-12-31 | USD | US$m | 1.09 | Calculated | Tier 2b | FY2024 cash interest includes interest on the discontinued CCIBV term loan; issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,102.993 | Net debt data FY2025 / 2025-12-31 | 485.558 | calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 10.51 | Calculated | Tier 1 | Debt at carrying value; EBITDA (Reported) is calculated, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,912.971 | Net debt data FY2025 / 2025-12-31 | 485.558 | calculation C1 | FY2025 / 2025-12-31 | USD | US$m | 10.12 | Calculated | Tier 1 | Debt at carrying value; EBITDA (Reported) is calculated, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 485.558 | calculation C1 | 394.429 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2025 / 2025-12-31 | USD | US$m | 1.23 | Calculated | Tier 1 | FY2025 cash interest includes CCIBV interest to 2025-03-31; EBITDA (Reported) is calculated, not issuer-stated |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 5,102.993 | Net debt data FY2025 / 2025-12-31 | 504.79 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2025 / 2025-12-31 | USD | US$m | 10.11 | Calculated | Tier 2b | Debt at carrying value; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,912.971 | Net debt data FY2025 / 2025-12-31 | 504.79 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2025 / 2025-12-31 | USD | US$m | 9.73 | Calculated | Tier 2b | Debt at carrying value; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 504.79 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | 394.429 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2025 / 2025-12-31 | USD | US$m | 1.28 | Calculated | Tier 2b | FY2025 cash interest includes CCIBV interest to 2025-03-31; issuer-adjusted EBITDA |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,107.629 | Net debt data 2026-06-30 | 488.113 | calculation C6 | 2026-06-30 | USD | US$m | 10.46 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; debt not pro forma; EBITDA (Reported) is calculated, not issuer-stated |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 4,915.491 | Net debt data 2026-06-30 | 488.113 | calculation C6 | 2026-06-30 | USD | US$m | 10.07 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; debt not pro forma; EBITDA (Reported) is calculated, not issuer-stated |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 488.113 | calculation C6 | 390.057 | calculation C8 | 2026-06-30 | USD | US$m | 1.25 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; EBITDA (Reported) is calculated, not issuer-stated |
| Total debt / adjusted EBITDA | Total debt / EBITDA (Adjusted) | 5,107.629 | Net debt data 2026-06-30 | 544.254 | calculation C7 | 2026-06-30 | USD | US$m | 9.38 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; debt not pro forma; issuer-adjusted EBITDA, Q3 2025 calculated |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 4,915.491 | Net debt data 2026-06-30 | 544.254 | calculation C7 | 2026-06-30 | USD | US$m | 9.03 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; debt not pro forma; issuer-adjusted EBITDA, Q3 2025 calculated |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 544.254 | calculation C7 | 390.057 | calculation C8 | 2026-06-30 | USD | US$m | 1.40 | Calculated | Tier 2b | Interim: LTM operands; no statement tie; issuer-adjusted EBITDA, Q3 2025 calculated |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Revenue x 100 | 475.758 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | 1,505.23 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 | FY2024 / 2024-12-31 | USD | US$m | 31.61 | Calculated | Tier 1 | Percent of revenue; continuing operations |
| EBITDA (Reported) margin | EBITDA (Reported) / Revenue x 100 | 453.181 | calculation C1 | 1,505.23 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 | FY2024 / 2024-12-31 | USD | US$m | 30.11 | Calculated | Tier 1 | Percent of revenue; continuing operations |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Revenue x 100 | 504.79 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | 1,604.14 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 | FY2025 / 2025-12-31 | USD | US$m | 31.47 | Calculated | Tier 1 | Percent of revenue; continuing operations |
| EBITDA (Reported) margin | EBITDA (Reported) / Revenue x 100 | 485.558 | calculation C1 | 1,604.14 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 | FY2025 / 2025-12-31 | USD | US$m | 30.27 | Calculated | Tier 1 | Percent of revenue; continuing operations |
| EBITDA (Adjusted) margin | EBITDA (Adjusted) / Revenue x 100 | 544.254 | calculation C7 | 1,679.056 | calculation C5 | 2026-06-30 | USD | US$m | 32.41 | Calculated | Tier 2b | Percent of revenue; continuing operations |
| EBITDA (Reported) margin | EBITDA (Reported) / Revenue x 100 | 488.113 | calculation C6 | 1,679.056 | calculation C5 | 2026-06-30 | USD | US$m | 29.07 | Calculated | Tier 2b | Percent of revenue; continuing operations |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | H1 2025 | H1 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Digital revenue, consolidated (USD thousands) | 622,251 | 707,695 | 316,189 | 353,776 | Rising | Digital was 41.3% of FY2024 revenue, 44.1% of FY2025 and 43.6% of H1 2026 revenue (42.9% in H1 2025), as the company reports |
| Growth | Digital revenue, America (USD thousands) | 415,093 | 445,479 | 203,424 | 221,258 | Rising | 36.3% of America revenue in FY2024, 37.2% in FY2025, 36.7% in H1 2026 |
| Growth | Digital revenue, Airports (USD thousands) | 207,158 | 262,216 | 112,765 | 132,518 | Rising | 57.3% of Airports revenue in FY2024, 64.4% in FY2025, 63.5% in H1 2026 |
| Margin | Adjusted EBITDA margin (percent of revenue) | 31.61 | 31.47 | 28.20 | 30.46 | Rising | Calculated; LTM to 2026-06-30 is 32.41 (calculation C53) |
| Cash flow | Free cash flow, operating cash flow less capital expenditure (USD thousands) | -62,649 | 31,981 | Not supplied: not calculated for the half-year columns | Not supplied: not calculated for the half-year columns | Improving | Continuing and discontinued operations combined; LTM to 2026-06-30 is 84,252 (calculation C12) |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is unadjusted and is the primary denominator | The issuer reports only Adjusted EBITDA (releases) and Segment Adjusted EBITDA (filings); no unadjusted EBITDA | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 98–99; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | All | High: FY2025 reported EBITDA 485,558 against Adjusted 504,790 (difference 19,232, USD thousands) | Fundamental credit, Liquidity, Downside | Both are shown and labelled; reported EBITDA is calculated as operating income plus depreciation and amortization |
| Segment Adjusted EBITDA against Adjusted EBITDA | Consolidated, after corporate expenses | Segment Adjusted EBITDA excludes corporate expenses (FY2025 595,120 in total) and restructuring costs | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2025 | High: segment total 595,120 against Adjusted EBITDA 504,790 | Fundamental credit, Peer benchmark | Use consolidated Adjusted EBITDA in leverage; segment figures only for operating analysis |
| Restructuring and other costs | One definition across tables | FY2025 is 1,386 in the segment note (segment costs only) and a net reversal of 3,493 in the Adjusted EBITDA reconciliation (includes corporate and a 10.1 million insurance recovery) | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2025 | Medium: 4,879 difference (USD thousands) | Earnings quality | Keep both; the reconciliation figure is the one inside Adjusted EBITDA |
| Cash | Cash and equivalents on the balance sheet | Balance sheet 192,138; with discontinued operations 202,281; with restricted cash 207,825 (USD thousands, 2026-06-30) | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 20; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 32 | All balance sheet dates | Medium: 15,687 between the lowest and highest | Liquidity | Net debt and Cash use 192,138, as the company does; the rest is disclosed |
| Total debt | Balance sheet carrying value | Principal 5,148,750 against carrying value 5,107,629 at 2026-06-30 (difference 41,121, USD thousands: discount 2,967 and fees 38,154) | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 | All | Low: 0.8% of principal | Refinancing & LME | Carrying value is the denominator; principal is in the principal-to-carrying table |
| Notes held by the Company | Principal outstanding to creditors | The 2028 and 2029 senior notes are shown net of about USD 100.7 million and USD 144.1 million repurchased and held, not cancelled (the notes state USD 95.7 million plus USD 5.0 million, and USD 134.1 million plus USD 10.0 million) | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 114–116 | All | Medium: about USD 244.8 million of face value (USD 100.7 million and USD 144.1 million) would be debt if the notes were resold | Refinancing & LME, Legal & covenants | Outstanding amounts exclude them; whether they count under the indentures is not established |
| Cash interest | Cash paid for interest on the continuing perimeter | Cash paid for interest is for the whole company: FY2025 394,429 includes CCIBV interest to 2025-03-31; income statement interest expense, net is 395,649 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2024, FY2025, H1 2025 | Low: the LTM period contains no CCIBV interest | Fundamental credit | Use the LTM figure for current cover |
| Share-based compensation | Continuing operations | Cash flow statement 25,643 (FY2025) includes discontinued operations; the Adjusted EBITDA reconciliation uses 25,474 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 | FY2025 | Low: 169 (USD thousands) | Earnings quality | Use the reconciliation figure inside Adjusted EBITDA |
| Depreciation and amortization | Continuing operations | Income statement 174,952 (FY2025) equals the cash flow line; FY2024 income statement 173,998 against cash flow depreciation, amortization and impairment 239,572 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 | FY2024 | Medium: 65,574 (USD thousands) of discontinued operations depreciation and impairment | Earnings quality | Use the income statement for EBITDA |
| August 2025 refinancing fees | One figure | Other transaction fees of USD 25.6 million in the Q3 2025 report and USD 26.3 million in the annual report | 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 40; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 69 | Q3 2025, FY2025 | Low: USD 0.7 million | Refinancing & LME | Both kept; the later annual figure is the current statement for FY2025 |
| Merger transaction costs | EBITDA before one-off transaction costs only where labelled adjusted | EBITDA (Reported) as calculated here includes Merger transaction costs of USD 15.8 million (Q1 2026) and USD 4.4 million (Q2 2026), USD 20.2 million in H1 2026, inside Other operating expense (income), net; the issuer's Adjusted EBITDA excludes them | EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 5; EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl, page 8 | Q1 2026, Q2 2026, H1 2026 and the LTM | Medium: USD 20.2 million is 4.1% of LTM EBITDA (Reported) | Fundamental credit, Downside | Both EBITDA measures are shown; the reported row carries the costs, the adjusted row does not |
| FY2024 debt perimeter | Debt and EBITDA on the same perimeter | FY2024 total debt of 5,660,305 includes the CCIBV term loan of 375,000 of the former Europe-North business, while EBITDA is continuing operations only | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 101; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 102 | FY2024 | Medium: 375,000 is 6.6% of FY2024 total debt (USD thousands) | Fundamental credit | FY2024 leverage overstates the leverage of the continuing perimeter; FY2025 onwards is unaffected because the loan was repaid on 2025-03-31 |
| Lease obligations | Operating lease cost sits inside EBITDA; lease liabilities are not debt | Operating lease liabilities 1,367,706 (2025-12-31) on their own balance sheet lines; finance leases 3,636 inside debt | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117 | All | High for any lease-adjusted view: about 27% of carrying debt | Fundamental credit, Peer benchmark | Leverage excludes operating leases consistently with EBITDA after rent; a lease-adjusted view is not computed |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and cash interest cover on the last twelve months to 2026-06-30 | Ready with Limitations | Reported EBITDA is calculated; Q3 2025 Adjusted EBITDA is derived; cash flows mix continuing and discontinued operations; not pro forma for the Spain sale or the Merger | Use the labelled reported and adjusted rows together; state the Merger outcome after 2026-08-05 |
| Liquidity and maturity wall | Ready with Limitations | Maturity years by finance lease are printed only at year-end; availability is capped by a receivables borrowing base; the facilities are described only through filings | Use the 2025-12-31 ladder; check the receivables borrowing base in a later filing |
| Segment and operating KPI view | Ready | Segment Adjusted EBITDA excludes corporate expenses; Q4 2025 Other is calculated | None |
| Capital structure ranking and guarantors | Ready with Limitations | Guarantor entities and spreads are not named; executed documents are not supplied | Obtain the indentures and credit agreements |
| Forward modelling | Ready with Limitations | The company gives no guidance; interim cash flows are year-to-date only | Analyst assumptions are needed |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 38 |
| Calculated | 26 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 6 |
| Fields present | 15 |
| Fields total | 15 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 12 |

## Calculations

Every new figure below is worked from the printed figures; amounts are USD thousands unless a row says US$m or USD million, and no gap is read as zero.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported), calculated, because the company states no unadjusted EBITDA: operating income plus depreciation and amortization | FY2024: 279,183 + 173,998 = 453,181; FY2025: 310,606 + 174,952 = 485,558; H1 2025: 122,414 + 86,339 = 208,753; H1 2026: 128,539 + 82,769 = 211,308; Q3 2025: 80,717 + 43,873 = 124,590; Q4 2025: 107,475 + 44,740 = 152,215; Q1 2026: 39,483 + 41,523 = 81,006; Q2 2026: 89,056 + 41,246 = 130,302 | FY2024 453,181; FY2025 485,558; H1 2025 208,753; H1 2026 211,308; Q3 2025 124,590; Q4 2025 152,215; Q1 2026 81,006; Q2 2026 130,302. FY2025 = H1 2025 + Q3 2025 + Q4 2025 and H1 2026 = Q1 2026 + Q2 2026 both hold exactly | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 3; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 4–5; 10-Q_2026-03-31_cco-20260331.htm.jsonl, page 3 |
| C2 | Q3 2025 Adjusted EBITDA, calculated because no Q3 2025 earnings release is supplied | FY2025 504,790 - H1 2025 207,815 - Q4 2025 164,460 | 132,515; cross-check: Q1 2025 79,257 + Q2 2025 128,558 = 207,815 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl, page 1; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 1 |
| C3 | Q4 2025 Segment Adjusted EBITDA for Other, calculated as year less nine months | FY2025 -1,137 - 9M 2025 -896 | -241; the three segment figures then sum to 186,577 = FY2025 595,120 - 9M 2025 408,543 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 99; 10-Q_2025-09-30_cco-20250930.htm.jsonl, page 14 |
| C4 | Adjusted EBITDA for H1 2025 and H1 2026 as printed, and their quarters | Q1 2025 79,257 + Q2 2025 128,558; Q1 2026 103,847 + Q2 2026 143,432 | H1 2025 207,815; H1 2026 247,279, equal to the printed six-month figures | EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl, page 8; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, pages 8–9 |
| C5 | LTM to 2026-06-30: Revenue | FY2025 1,604,140 + H1 2026 811,904 - H1 2025 736,988 | 1,679,056 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 3 |
| C6 | LTM to 2026-06-30: EBITDA (Reported) | FY2025 485,558 + H1 2026 211,308 - H1 2025 208,753 | 488,113 | calculation C1 |
| C7 | LTM to 2026-06-30: EBITDA (Adjusted) | FY2025 504,790 + H1 2026 247,279 - H1 2025 207,815 | 544,254 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 1; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 1 |
| C8 | LTM to 2026-06-30: Cash Interest Paid | FY2025 394,429 + H1 2026 205,848 - H1 2025 210,220 | 390,057 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 6 |
| C9 | LTM to 2026-06-30: Net Cash from Operating Activities (continuing and discontinued operations combined) | FY2025 114,860 + H1 2026 47,840 - H1 2025 2,326 | 160,374 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 5 |
| C10 | LTM to 2026-06-30: Capital expenditures (cash flow statement, continuing and discontinued operations combined) | FY2025 -82,879 + H1 2026 -35,323 - H1 2025 -42,080 | -76,122 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 5 |
| C11 | LTM cross-check by discrete quarters | Revenue 405,637 + 461,515 + 373,864 + 438,040; EBITDA (Reported) 124,590 + 152,215 + 81,006 + 130,302; Adjusted 132,515 + 164,460 + 103,847 + 143,432 | 1,679,056; 488,113; 544,254: each equals the full-year method | calculation C5 |
| C12 | Free cash flow, last twelve months to 2026-06-30 (operating cash flow less capital expenditure, continuing and discontinued operations combined) | 160,374 - 76,122 | 84,252; as a share of total debt 2026-06-30: 84,252 / 5,107,629 = 0.02% | calculation C9; calculation C10 |
| C13 | Net debt at FY2024 / 2024-12-31: total debt at carrying value less cash and cash equivalents on the balance sheet | 5,660,305 - 109,707 | 5,550,598; equals the net debt the company prints | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 6 |
| C14 | Net debt at FY2025 / 2025-12-31: total debt at carrying value less cash and cash equivalents on the balance sheet | 5,102,993 - 190,022 | 4,912,971; equals the net debt the company prints | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 6 |
| C15 | Net debt at 2026-03-31: total debt at carrying value less cash and cash equivalents on the balance sheet | 5,105,290 - 182,421 | 4,922,869; equals the net debt the company prints | EX-99.1_2026-05-06_exhibit991-ccohearningsrel.htm.jsonl, page 5 |
| C16 | Net debt at 2026-06-30: total debt at carrying value less cash and cash equivalents on the balance sheet | 5,107,629 - 192,138 | 4,915,491; equals the net debt the company prints | EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 6 |
| C17 | Total debt / EBITDA, FY2024 | Total debt 5,660.305 / EBITDA (Reported) 453.181 (US$m) | 12.49 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 77; calculation C1 |
| C18 | Net debt / EBITDA, FY2024 | Net debt 5,550.598 / EBITDA (Reported) 453.181 (US$m) | 12.25 | calculation C13; calculation C1 |
| C19 | EBITDA / cash interest, FY2024 | EBITDA (Reported) 453.181 / Cash interest paid 434.52 (US$m) | 1.04 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 |
| C20 | Total debt / adjusted EBITDA, FY2024 | Total debt 5,660.305 / EBITDA (Adjusted) 475.758 (US$m) | 11.90 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 77; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 |
| C21 | Net debt / adjusted EBITDA, FY2024 | Net debt 5,550.598 / EBITDA (Adjusted) 475.758 (US$m) | 11.67 | calculation C13; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 |
| C22 | Adjusted EBITDA / cash interest, FY2024 | EBITDA (Adjusted) 475.758 / Cash interest paid 434.52 (US$m) | 1.09 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 |
| C23 | Total debt / EBITDA, FY2025 | Total debt 5,102.993 / EBITDA (Reported) 485.558 (US$m) | 10.51 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 77; calculation C1 |
| C24 | Net debt / EBITDA, FY2025 | Net debt 4,912.971 / EBITDA (Reported) 485.558 (US$m) | 10.12 | calculation C14; calculation C1 |
| C25 | EBITDA / cash interest, FY2025 | EBITDA (Reported) 485.558 / Cash interest paid 394.429 (US$m) | 1.23 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 |
| C26 | Total debt / adjusted EBITDA, FY2025 | Total debt 5,102.993 / EBITDA (Adjusted) 504.79 (US$m) | 10.11 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 77; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 |
| C27 | Net debt / adjusted EBITDA, FY2025 | Net debt 4,912.971 / EBITDA (Adjusted) 504.79 (US$m) | 9.73 | calculation C14; EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9 |
| C28 | Adjusted EBITDA / cash interest, FY2025 | EBITDA (Adjusted) 504.79 / Cash interest paid 394.429 (US$m) | 1.28 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 |
| C29 | Total debt / EBITDA, LTM to 2026-06-30 | Total debt 5,107.629 / EBITDA (Reported) 488.113 (US$m) | 10.46 | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2; calculation C6 |
| C30 | Net debt / EBITDA, LTM to 2026-06-30 | Net debt 4,915.491 / EBITDA (Reported) 488.113 (US$m) | 10.07 | calculation C16; calculation C6 |
| C31 | EBITDA / cash interest, LTM to 2026-06-30 | EBITDA (Reported) 488.113 / Cash interest paid 390.057 (US$m) | 1.25 | calculation C7; calculation C8 |
| C32 | Total debt / adjusted EBITDA, LTM to 2026-06-30 | Total debt 5,107.629 / EBITDA (Adjusted) 544.254 (US$m) | 9.38 | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2; calculation C7 |
| C33 | Net debt / adjusted EBITDA, LTM to 2026-06-30 | Net debt 4,915.491 / EBITDA (Adjusted) 544.254 (US$m) | 9.03 | calculation C16; calculation C7 |
| C34 | Adjusted EBITDA / cash interest, LTM to 2026-06-30 | EBITDA (Adjusted) 544.254 / Cash interest paid 390.057 (US$m) | 1.40 | calculation C7; calculation C8 |
| C35 | EBITDA (Adjusted) margin, FY2024 | 475.758 / 1,505.23 x 100 (US$m) | 31.61 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 |
| C36 | EBITDA (Reported) margin, FY2024 | 453.181 / 1,505.23 x 100 (US$m) | 30.11 | calculation C1; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 |
| C37 | EBITDA (Adjusted) margin, FY2025 | 504.79 / 1,604.14 x 100 (US$m) | 31.47 | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, page 9; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 |
| C38 | EBITDA (Reported) margin, FY2025 | 485.558 / 1,604.14 x 100 (US$m) | 30.27 | calculation C1; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 78 |
| C39 | EBITDA (Adjusted) margin, LTM to 2026-06-30 | 544.254 / 1,679.056 x 100 (US$m) | 32.41 | calculation C7; calculation C5 |
| C40 | EBITDA (Reported) margin, LTM to 2026-06-30 | 488.113 / 1,679.056 x 100 (US$m) | 29.07 | calculation C6; calculation C5 |
| C41 | Debt table foots at 2026-06-30 | 0 + 0 + 425,000 + 865,000 + 1,150,000 + 900,000 + 899,311 + 905,950 + 3,489 = 5,148,750; less original issue discount 2,967; less long-term debt fees 38,154 | 5,107,629 = current portion 314 + long-term debt 5,107,315 | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| C42 | Maturity ladder at 2025-12-31 to carrying value | 312 + 297 + 1,324,631 + 906,301 + 865,251 + 2,052,105 = 5,148,897; less original issue discount 3,605; less long-term debt fees 42,299 | reconciling items -45,904; carrying value 5,102,993 = balance sheet debt | 10-K_2025-12-31_cco-20251231.htm.jsonl, pages 100–101; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117 |
| C43 | Finance lease instalments inside the 10-K ladder, to show the ladder holds the notes at the dates the debt table states | 2028: 1,324,631 - (425,000 + 899,311) = 320; 2029: 906,301 - 905,950 = 351; 2030: 865,251 - 865,000 = 251; 2026 312; 2027 297; thereafter 2,052,105 - (1,150,000 + 900,000) = 2,105 | 312 + 297 + 320 + 351 + 251 + 2,105 = 3,636 = finance leases at 2025-12-31 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 101; 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117 |
| C44 | Adjusted EBITDA bridge FY2025 (US$m) | EBITDA (Reported) 485.558 + other operating (income) expense, net -2.749 + share-based compensation 25.474 + restructuring and other costs (reversals), net -3.493 | 504.79 = issuer Adjusted EBITDA | EX-99.1_2026-02-26_exhibit991-ccohearningsrel.htm.jsonl, pages 9–10 |
| C45 | Cumulative leverage of the debt stack at 2026-06-30: cumulative principal over LTM EBITDA (Reported) | Receivables-Based Credit Facility 0; Revolving Credit Facility 0; Term Loan Facility 425; 7.875% Senior Secured Notes due 2030 1,290; 7.125% Senior Secured Notes due 2031 2,440; 7.500% Senior Secured Notes due 2033 3,340; 7.750% Senior Notes due 2028 4,239.311; 7.500% Senior Notes due 2029 5,145.261; denominator 488.113 (US$m) | Receivables-Based Credit Facility: 0.00; Revolving Credit Facility: 0.00; Term Loan Facility: 0.87; 7.875% Senior Secured Notes due 2030: 2.64; 7.125% Senior Secured Notes due 2031: 5.00; 7.500% Senior Secured Notes due 2033: 6.84; 7.750% Senior Notes due 2028: 8.69; 7.500% Senior Notes due 2029: 10.54 | calculation C6 |
| C46 | Change in deferred revenue from 2025-12-31 to 2026-06-30 | 102,730 - 75,437 | 27,293 | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2 |
| C47 | Operating lease liabilities, current plus non-current | 2025-12-31: 142,139 + 1,225,567; 2026-06-30: 134,384 + 1,227,530 | 1,367,706 (equals the lease note total) and 1,361,914; not in total debt | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 2 |
| C48 | Cash plus undrawn committed facilities at 2026-06-30 (US$m), and the issuer's cash interest estimate for the second half of 2026 | 192.138 + 205.5; issuer estimate of cash interest for the second half of 2026: 197 | 397.638 against 197 | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 33; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 32 |
| C49 | Cash definitions at 2026-06-30 | 192,138 balance sheet + 10,143 held in discontinued operations = 202,281; + restricted 1,652 + 748 + 3,144 = 5,544 gives 207,825 | 192,138; 202,281; 207,825 (the last is the cash flow statement total) | 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 20 |
| C50 | Change in LTM Adjusted EBITDA and total debt from FY2025 to LTM 2026-06-30 | Adjusted EBITDA 504.79 to 544.254; total debt 5,102.993 to 5,107.629 | Adjusted EBITDA +39.464 (7.82%); total debt +4.636 (0.09%) | calculation C7 |
| C51 | Debt maturing in 2028 (ladder at 2025-12-31) and the notes and term loan behind it | 899,311 + 425,000 + finance leases 320 | 1,324,631 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 117; 10-Q_2026-06-30_cco-20260630.htm.jsonl, page 15 |
| C52 | Free cash flow for FY2024 and FY2025 (operating cash flow less capital expenditure, continuing and discontinued operations combined) | FY2024 79,746 - 142,395; FY2025 114,860 - 82,879 | FY2024 -62,649; FY2025 31,981 | 10-K_2025-12-31_cco-20251231.htm.jsonl, page 80 |
| C53 | Adjusted EBITDA margin for H1 2025 and H1 2026 | 207,815 / 736,988 x 100; 247,279 / 811,904 x 100 | 28.20; 30.46 | EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, page 1; EX-99.1_2026-08-05_exhibit991-ccohearningsrel.htm.jsonl, pages 8–9 |
| C54 | Cumulative secured and total debt over LTM EBITDA (Reported), from the debt stack | Secured principal 3,340.000 / 488.113; total principal 5,145.261 / 488.113 | 6.84; 10.54 | calculation C45 |

## Gaps

Each gap names the figure it touches, what it restricts and what would close it; none is written as zero.

| Gap | Line item or metric and period | What it restricts | Severity | Action |
|---|---|---|---|---|
| Unadjusted EBITDA is not stated by the company | EBITDA (Reported), all periods | Reported-basis leverage and cover rest on a calculated figure (operating income plus depreciation and amortization) | High | State the company's own unadjusted measure if it publishes one; until then use the labelled pair |
| The Merger outcome and any debt actions after 2026-08-05 are not in the documents | Total debt, net debt, maturities, cash interest at 2026-06-30 | Pro forma capital structure; the amendments and conditional redemption of the 2028 and 2029 senior notes take effect only on completion | High | Supply the completion or termination filing and later current reports |
| Q3 2025 Adjusted EBITDA is not printed (no Q3 2025 earnings release) | EBITDA (Adjusted), Q3 2025 and the LTM to 2026-06-30 | The LTM Adjusted EBITDA contains a calculated quarter (calculation C2) | Medium | Supply the Q3 2025 earnings release if one was issued |
| Interim cash flow statements combine continuing and discontinued operations | Operating cash flow, capital expenditure, free cash flow, cash interest; all periods | Cash conversion and free cash flow mix perimeters; capital expenditure of discontinued operations is printed separately for 2026 and 2025 halves | Medium | Bridge in the cash flow analysis using the printed discontinued capital expenditure |
| The net proceeds of the Spain sale are not stated | Post-balance-sheet adjustment, pro forma net debt and net leverage | No pro forma net debt or leverage for the sale | Medium | Supply the next quarterly report |
| The margins of the term loan and facilities (Applicable Rate), floors and guarantor names are not in the text | Debt instruments: spread and floor columns; guarantor entities | Floating-rate cost and guarantee scope cannot be modelled by instrument | Medium | Supply the credit agreements |
| The term loan maturity has a springing feature tied to secured notes outstanding on dates in 2027 and 2028, and the wording predates the 2025 refinancing | Term Loan Facility, 2028 maturity | Whether the 2028 date can spring earlier is not established | Medium | Supply the credit agreement and its latest amendment |
| FY2024 debt includes the CCIBV term loan of the former Europe-North business while EBITDA is continuing operations only | Total debt / EBITDA and net debt / EBITDA, FY2024 | FY2024 leverage is overstated against the continuing perimeter | Medium | Treat FY2024 as context only |
| Instrument-level carrying values are not disclosed | Debt instruments: Carrying Value column | Only principal by instrument plus one aggregate financing cost adjustment of -41,121 (USD thousands) | Low | None needed |
| Several lines are not printed in every period, and some print a dash | Income statement extinguishment line (H1 2026, Q4 2025, Q2 2026, Q1 2026); cash flow lines for foreign exchange loss, acquisitions, debt proceeds and extinguishment in the half-year columns | Each such cell is stated as not supplied; none is zero; sums are unaffected because the printed totals tie | Low | None needed |
| The year of finance lease instalments is printed only at year-end | Debt maturities at 2026-06-30 | The ladder is drawn at 2025-12-31; finance leases are 3.489 at 2026-06-30 | Low | Use the next annual report |
| Facility availability at 2024-12-31 is not in the documents | Chart data: liquidity, FY2024 | Undrawn facilities are not supplied for FY2024 | Low | Supply the FY2024 annual report |
| The rank and security of finance leases are not stated | Chart data: debt stack | Finance leases of 3.489 are left out of the stack | Low | Supply the lease documents |
| Q4 2025 Segment Adjusted EBITDA for Other is calculated | Segment Adjusted EBITDA: Other, Q4 2025 | Calculated as year less nine months (-241), not printed | Low | None needed |

## Next module

The orchestrator selects the next module.
