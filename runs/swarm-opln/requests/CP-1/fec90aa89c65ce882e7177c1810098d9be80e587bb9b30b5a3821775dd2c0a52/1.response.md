## Request

OPENLANE, Inc. (opln), as of 2026-11-05, credit_snapshot pathway: the financial foundation for the group, built from the seven supplied filings and earnings slides, with leverage, cover, liquidity and the debt schedule stated on the corporate perimeter and the finance subsidiary's securitization funding shown beside it.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_opln-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 2025-12-31, with the KPMG LLP audit report | 2026-02-18 | 26a1eb6e044eb7884447c1771579bc95b55527d93c8454714335cfb05faebcc7 | Audited FY2025 and FY2024 statements, segment note, debt note and schedule of principal payments, EBITDA reconciliations, liquidity table |
| 10-Q_2026-03-31_opln-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-05 | c46e877ea2548ae22544a835acae1b3618984f266ca5c5f8d9f1ce170a2f3661 | 2026-03-31 balance sheet, first-quarter cash flows and interest paid, revolving facility availability |
| 10-Q_2026-06-30_opln-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-08-04 | 47753528b639818941177074a5796fb5ee4c271e3e7cb89f9ddc4bf548a73b8f | 2026-06-30 balance sheet, first-half cash flows and interest paid, revolving facility availability |
| 10-Q_2026-09-30_opln-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-11-04 | 9682e191d9ec651d5722722ac8ff03e1ea87ff7ece0722d12fcb449d04d13357 | Latest statements, debt and securitization notes, covenant disclosure, EBITDA reconciliations, last-twelve-months table, subsequent event |
| EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl | Earnings slides for the first quarter of 2026 (Exhibit 99.3) | 2026-05-05 | 2fc56068f78381bd02bfbe329da47d9ab40d86ee26db869d39406949616dc5f0 | First-quarter 2026 reconciliation, 2025 quarterly reconciliations, 2024 adjusted EBITDA series |
| EX-99.3_2026-08-04_q22026openlaneearningssl.htm.jsonl | Earnings slides for the second quarter of 2026 (Exhibit 99.3) | 2026-08-04 | 458d3c1fac99aaeefe126a46b683e88ca11580e6032ddf67da49e980bf2bff5d | Second-quarter 2026 reconciliation, cross-check of the 2025 quarterly reconciliations |
| EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl | Earnings slides for the third quarter of 2026 (Exhibit 99.3) | 2026-11-04 | bc88d193632549ac9eb968d3349190fc1ffa3b0842d97894dce16151e37cfd9a | Quarterly revenue series 2024 to 2026, third-quarter reconciliation, revised 2026 guidance |

| Handoff | Module | sha256 |
|---|---|---|
| Source readiness | CP-0 | 478ad0df6b0e0179f68f1346df475ca68b76ab701b365849fb5d91126eb69b50 |

## Findings

### Bottom line

OPENLANE's corporate borrowing is modest at 1.18x total debt to twelve-month EBITDA at 2026-09-30, but the finance subsidiary's USD 2,064.1 million of securitization funding sits outside that figure and is the larger claim on the group's receivables.

Net debt is USD 289.3 million, or 0.64x, after cash rose to USD 244.9 million. On adjusted EBITDA, which deducts securitization interest, total debt is 1.40x. Repurchases of USD 11.1 million in October 2026 would lift net debt to USD 300.4 million, or 0.67x.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 27; calculation C1.5; calculation C4.1; calculation C4.2; calculation C4.3; calculation C6.1; calculation C6.2

### Key findings

Net leverage has fallen from 0.96x at year-end 2025 to 0.64x because twelve-month EBITDA grew to USD 451.5 million and cash rose, while total debt stayed near USD 534.2 million after the 2025 term loan that funded the preferred share repurchase.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59; calculation C1.5; calculation C2.3; calculation C4.2; calculation C4.7

The corporate perimeter leaves out funding that matches the finance subsidiary's receivables: obligations collateralized by finance receivables were USD 2,064.1 million against finance receivables of USD 2,763.8 million, and including them lifts total debt to EBITDA to 5.75x. The securitization lenders look to those receivables through a bankruptcy-remote subsidiary, so they have first recourse to that asset pool ahead of the term loan lenders.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 15–16; calculation C3.2; calculation C3.3

The choice of EBITDA measure matters. Reported EBITDA of USD 451.5 million adds back finance interest expense, while adjusted EBITDA of USD 382.7 million deducts USD 95.9 million of securitization interest, so total leverage is 1.18x on the first and 1.40x on the second. Adjusted EBITDA is the better guide to cash that can service the term loan.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59; calculation C4.1; calculation C4.3

Interest cover is 3.42x on reported EBITDA and 2.90x on adjusted EBITDA. The cash interest of USD 132.1 million includes the securitization funding cost, which was USD 106.0 million of finance interest expense over twelve months against USD 37.3 million of corporate interest expense net of interest income, so the cover blends two perimeters and does not isolate the term loan's interest burden.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5; calculation C4.5; calculation C4.6

Liquidity is USD 650.2 million, being cash of USD 244.9 million and USD 405.3 million of undrawn revolving capacity net of letters of credit. The revolving facilities mature in 2028 and the term loan in 2032, with scheduled amortization of USD 5.5 million a year, so there is no corporate maturity pressure for several years.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17; calculation C5.5

Nine-month operating cash flow of USD 309.5 million was helped by USD 155.8 million of higher accounts payable and accrued expenses, and accounts payable include sale proceeds owed to consignors. That float reverses when volumes fall, so operating cash flow overstates the cash the business keeps through a downturn.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 34

Shareholder distributions are the main discretionary use of cash: USD 91.5 million of repurchases in nine months, followed by a board decision in October 2026 to enlarge the authorization. Term loan lenders are exposed to a recurring call on cash that the documents do not limit beyond the credit agreement's general dividend and investment covenants.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 27

### Contrary evidence and what would change the view

The strongest evidence against a benign reading is that the securitization carries most of the group's gearing: consolidated total debt to adjusted EBITDA is 6.79x, and delinquent receivables doubled to 0.6% of receivables managed from 0.3% a year earlier. If delinquency keeps rising, the cash reserve the securitization requires and a tightening of its covenants would draw on the cash that supports the term loan.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; calculation C3.4

The view of low corporate leverage would hold if delinquency stays near 0.6% and provision stays at about 1.1% of average receivables, as in the latest quarter. It would change if reported senior secured net leverage, currently 0.9x against a limit of 3.5x, moved sharply, or if the securitization facilities, now extended to January 2030, were not renewed.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 54; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 15

### Limitations

The quarterly reports print no schedule of debt maturities, so the ladder at 2026-09-30 is built from the annual report's schedule less the instalments paid in 2026.
Basis: 10-K_2025-12-31_opln-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 18; calculation C7.2

The covenant ratio of 0.9x is the issuer's own figure and its inputs are not itemised, so it cannot be reproduced from the statements and no covenant headroom is worked.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 54

Twelve-month figures for the first and second quarters of 2026 are assembled from the issuer's quarterly reconciliations and carry no auditor review.
Basis: EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6

The unused capacity under the securitization facilities is not stated, so liquidity counts only cash and the revolving facilities.
Basis: 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 56

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Auction and related fees | 735.3 | 833.5 | 215.2 | 253.2 | 628.0 | 754.0 | USD millions | Reported; categories revised from the fourth quarter of 2025 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| SaaS and other revenue | 295.1 | 257.1 | 65.3 | 73.9 | 195.0 | 214.8 | USD millions | Reported; categories revised from the fourth quarter of 2025 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Purchased vehicle sales | 327.0 | 410.2 | 108.9 | 119.4 | 293.1 | 346.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Finance revenue | 431.1 | 433.7 | 109.0 | 114.7 | 324.1 | 328.4 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Total operating revenues | 1,788.5 | 1,934.5 | 498.4 | 561.2 | 1,440.2 | 1,643.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Cost of services (exclusive of depreciation and amortization) | 956.3 | 1,041.7 | 270.2 | 309.3 | 766.2 | 887.4 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Finance interest expense | 123.5 | 109.9 | 28.1 | 28.2 | 82.6 | 78.7 | USD millions | Reported; cost of funds on the securitization borrowings | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Provision for credit losses | 54.3 | 42.4 | 11.5 | 8.4 | 29.5 | 27.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Selling, general and administrative | 408.6 | 445.2 | 110.9 | 123.4 | 332.4 | 371.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Depreciation and amortization | 95.2 | 91.7 | 22.7 | 21.5 | 68.4 | 66.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Gain on sale of business | -31.6 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported; shown as a negative expense as printed | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Loss on sale of property | Not supplied: printed as a dash | 7.0 | Not supplied: printed as a dash | Not supplied: printed as a dash | 7.0 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Total operating expenses | 1,606.3 | 1,737.9 | 443.4 | 490.8 | 1,286.1 | 1,432.0 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Operating profit | 182.2 | 196.6 | 55.0 | 70.4 | 154.1 | 211.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Interest expense | 21.8 | 18.1 | 1.1 | 10.0 | 8.2 | 30.1 | USD millions | Reported; corporate borrowings | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Other (income) expense, net | 2.5 | -13.7 | -2.2 | -0.4 | -14.6 | -5.6 | USD millions | Reported; income shown as a negative as printed | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Loss on extinguishment of debt | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | 0.7 | Not supplied: printed as a dash | 0.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Income before income taxes | 157.9 | 192.2 | 56.1 | 60.1 | 160.5 | 186.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Income taxes | 48.0 | 14.5 | 8.2 | 15.4 | 42.3 | 48.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Net income | 109.9 | 177.7 | 47.9 | 44.7 | 118.2 | 137.9 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| Marketplace operating revenues | 1,357.4 | 1,500.8 | 389.4 | 446.5 | 1,116.1 | 1,315.3 | USD millions | Reported segment revenue | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 25–26 |
| Finance operating revenues | 431.1 | 433.7 | 109.0 | 114.7 | 324.1 | 328.4 | USD millions | Reported segment revenue | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 25–26 |
| Corporate and eliminations (operating revenues) | Not supplied: no corporate or elimination line is disclosed | Not supplied: no corporate or elimination line is disclosed | Not supplied: no corporate or elimination line is disclosed | Not supplied: no corporate or elimination line is disclosed | Not supplied: no corporate or elimination line is disclosed | Not supplied: no corporate or elimination line is disclosed | USD millions | The two segments sum to consolidated revenue | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 25–26 |
| Marketplace operating profit | 50.5 | 47.7 | 18.2 | 28.9 | 42.1 | 94.7 | USD millions | Reported segment operating profit | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 25–26 |
| Finance operating profit | 131.7 | 148.9 | 36.8 | 41.5 | 112.0 | 117.0 | USD millions | Reported segment operating profit | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 137; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 25–26 |
| EBITDA (Reported) | 396.8 | 408.7 | 107.5 | 118.8 | 316.8 | 359.6 | USD millions | Issuer-reported EBITDA: net income plus income taxes, finance interest expense, interest expense net of interest income, and depreciation and amortization; it adds back the securitization funding cost | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 58–59 |
| EBITDA (Adjusted) | 293.4 | 332.6 | 87.1 | 106.8 | 256.6 | 306.7 | USD millions | Issuer-adjusted EBITDA: EBITDA plus non-cash stock-based compensation, severance and other listed items, less securitization interest; the add-backs are in the EBITDA bridge | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 58–59 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 109.9 | 177.7 | 118.2 | 137.9 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Depreciation and amortization | 95.2 | 91.7 | 68.4 | 66.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Provision for credit losses | 54.3 | 42.4 | 29.5 | 27.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Deferred income taxes | 1.7 | -31.9 | 4.0 | 5.1 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Amortization of debt issuance costs | 9.1 | 8.9 | 6.6 | 7.2 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Stock-based compensation | 14.7 | 14.6 | 9.9 | 24.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Gain on sale of business | -31.6 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Loss on sale of property | Not supplied: printed as a dash | 7.0 | 7.0 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Loss on extinguishment of debt | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | 0.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Other non-cash, net | -0.3 | 0.4 | 0.3 | 0.9 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Trade receivables and other assets | 44.4 | -69.1 | -120.8 | -117.0 | USD millions | Reported change in operating assets | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Accounts payable and accrued expenses | -4.6 | 150.2 | 143.3 | 155.8 | USD millions | Reported change in operating liabilities; accounts payable include proceeds owed to consignors | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net cash provided by operating activities - continuing operations | 292.8 | 391.9 | 266.4 | 309.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net cash used by operating activities - discontinued operations | -1.4 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net increase in finance receivables held for investment | -96.7 | -135.3 | -196.1 | -367.6 | USD millions | Reported; the finance subsidiary's loan book growth sits in investing activities | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Purchases of property, equipment and computer software | -53.0 | -55.4 | -40.7 | -40.7 | USD millions | Reported; total capital expenditure, no maintenance and growth split is disclosed | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Investments in securities | -2.8 | -1.5 | -1.1 | -1.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Proceeds from sale of investments | 0.9 | 0.8 | Not supplied: printed as a dash | 2.0 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Proceeds from the sale of business | 79.8 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Proceeds from the sale of property and equipment | 0.9 | 42.4 | 42.4 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net increase (decrease) in book overdrafts | 0.8 | -5.9 | 13.1 | 2.0 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net (repayments of) borrowings from lines of credit | -131.7 | -24.2 | -0.6 | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net increase (decrease) in obligations collateralized by finance receivables | 49.5 | 82.4 | 145.8 | 322.9 | USD millions | Reported; the securitization funding of the loan book | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Proceeds from long-term debt | Not supplied: printed as a dash | 547.3 | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported; the 2025 incremental term loans | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Payments for debt issuance costs and amendments | -15.1 | -6.9 | -0.4 | -12.4 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Payments on long-term debt | Not supplied: printed as a dash | -210.0 | -210.0 | -4.1 | USD millions | Reported; 2025 repayment of the senior notes | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Payments on finance leases | -0.9 | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Issuance of common stock under stock plans | 1.4 | 9.6 | 7.8 | 10.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Tax withholding payments for vested RSUs | -3.5 | -6.7 | -6.5 | -9.4 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Repurchase and retirement of common stock | -30.0 | -45.6 | -35.8 | -91.5 | USD millions | Reported; 9M 2026 includes excise taxes | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Repurchase and retirement of Series A Preferred Stock | Not supplied: printed as a dash | -559.3 | Not supplied: printed as a dash | -5.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Dividends paid on Series A Preferred Stock | -44.4 | -38.6 | -33.3 | -5.3 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net cash used by financing activities - continuing operations | -173.9 | -257.9 | -119.9 | 207.3 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 291.4 | 391.9 | 266.4 | 309.5 | USD millions | FY2024 is continuing operations 292.8 plus discontinued operations of -1.4; other columns are continuing operations | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -70.9 | -149.0 | -195.5 | -407.9 | USD millions | Reported; continuing operations | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -173.9 | -257.9 | -119.9 | 207.3 | USD millions | Reported; continuing operations | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| FX Effect on Cash | -21.8 | 16.7 | 11.7 | -14.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Net Cash Change | 24.8 | 1.7 | -37.3 | 94.2 | USD millions | Reported; includes restricted cash | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Opening Cash | 158.9 | 183.7 | 183.7 | 185.4 | USD millions | Cash, cash equivalents and restricted cash at the start of the period | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Closing Cash | 183.7 | 185.4 | 146.4 | 279.6 | USD millions | Cash, cash equivalents and restricted cash at the end of the period; restricted cash is excluded from Cash & Equivalents | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 140.7 | 115.4 | 85.6 | 102.3 | USD millions | Reported supplemental disclosure; includes interest on the securitization borrowings | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |
| Cash paid for taxes, net of refunds - continuing operations | 36.6 | 40.4 | 29.6 | 48.0 | USD millions | Reported supplemental disclosure | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 93–94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 4–5 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 143.0 | 141.5 | 180.1 | 189.7 | 244.9 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Restricted cash | 40.7 | 43.9 | 36.8 | 28.1 | 34.7 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Trade receivables, net | 248.2 | 314.1 | 415.7 | 391.2 | 417.4 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Finance receivables, net | 2,322.7 | 2,425.4 | 2,444.3 | 2,621.1 | 2,763.8 | USD millions | Reported; the finance subsidiary's loan book | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Other current assets | 96.9 | 86.7 | 128.1 | 98.4 | 103.3 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total current assets | 2,851.5 | 3,011.6 | 3,205.0 | 3,328.5 | 3,564.1 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Goodwill | 1,222.9 | 1,243.5 | 1,239.8 | 1,236.1 | 1,234.8 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Customer relationships, net | 117.7 | 102.7 | 98.4 | 94.2 | 90.3 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Other intangible assets, net | 160.8 | 142.8 | 139.0 | 135.2 | 132.1 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Operating lease right-of-use assets | 67.1 | 57.9 | 57.5 | 55.9 | 54.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Property and equipment, net | 149.3 | 104.2 | 100.3 | 98.0 | 96.9 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Other assets | 53.0 | 61.6 | 59.5 | 58.5 | 56.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total other assets | 1,770.8 | 1,712.7 | 1,694.5 | 1,677.9 | 1,665.1 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total Assets | 4,622.3 | 4,724.3 | 4,899.5 | 5,006.4 | 5,229.2 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Accounts payable | 547.6 | 665.8 | 899.3 | 802.9 | 827.6 | USD millions | Reported; includes amounts due to sellers from consigned vehicle sales | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Accrued employee benefits and compensation expenses | 36.5 | 50.8 | 31.1 | 42.8 | 55.0 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Accrued interest | 7.2 | 11.3 | 10.5 | 10.7 | 11.0 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Other accrued expenses | 80.8 | 90.8 | 90.1 | 85.4 | 87.8 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Income taxes payable | 10.6 | 21.4 | 17.6 | 15.9 | 18.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Obligations collateralized by finance receivables | 1,660.3 | 1,758.3 | 1,693.2 | 1,887.0 | 2,064.1 | USD millions | Reported; net of unamortized securitization issuance costs; not included in Total Debt | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Current maturities of long-term debt | 222.5 | 5.5 | 24.9 | 5.5 | 5.5 | USD millions | Reported; 2024 holds the senior notes and European borrowings; 2026-03-31 holds European line borrowings | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total current liabilities | 2,565.5 | 2,603.9 | 2,766.7 | 2,850.2 | 3,069.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Long-term debt | 0.0 | 530.1 | 529.7 | 529.2 | 528.7 | USD millions | Reported; printed as a dash for 2024, and the debt note shows all 2024 debt as current, so nil | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Deferred income tax liabilities | 24.4 | 0.6 | 0.5 | 0.5 | 0.5 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Operating lease liabilities | 60.4 | 53.0 | 52.7 | 50.8 | 49.0 | USD millions | Reported; carried on its own line and not added to Total Debt | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Other liabilities | 16.8 | 6.2 | 6.5 | 4.5 | 4.6 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total non-current liabilities | 101.6 | 589.9 | 589.4 | 585.0 | 582.8 | USD millions | Reported | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total Liabilities | 2,667.1 | 3,193.8 | 3,356.1 | 3,435.2 | 3,652.4 | USD millions | Calculated: total current liabilities plus total non-current liabilities | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Temporary Equity | 612.5 | 289.8 | 289.8 | 0.0 | 0.0 | USD millions | Reported Series A convertible preferred stock; converted to common stock in May 2026 and none outstanding at 2026-06-30 and 2026-09-30 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total Equity | 1,342.7 | 1,240.7 | 1,253.6 | 1,571.2 | 1,576.8 | USD millions | Reported total stockholders' equity | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Total Debt | 222.5 | 535.6 | 554.6 | 534.7 | 534.2 | USD millions | Calculated: current maturities of long-term debt plus long-term debt, at carrying value net of discount and issuance costs; excludes obligations collateralized by finance receivables and operating lease liabilities | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 143.0 | 141.5 | 180.1 | 189.7 | 244.9 | USD millions | Reported cash and cash equivalents; excludes restricted cash | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92; 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3; 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_opln-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives | USD | Millions | OPENLANE, Inc. and subsidiaries, consolidated | U.S. GAAP | Tier 1 audited statements | Annual statements, debt note, schedule of principal payments, annual EBITDA reconciliation | Revenue categories for 2023 and 2024 are shown on the basis adopted from the fourth quarter of 2025 |
| 10-Q_2026-03-31_opln-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 with 2025 comparatives | USD | Millions | Consolidated | U.S. GAAP | Tier 2b unaudited without auditor review | 2026-03-31 balance sheet, first-quarter cash flows and interest paid | Cash flows are year to date only |
| 10-Q_2026-06-30_opln-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 and H1 2026 with 2025 comparatives | USD | Millions | Consolidated | U.S. GAAP | Tier 2b unaudited without auditor review | 2026-06-30 balance sheet, first-half cash flows and interest paid | The exhibit index names a third credit agreement amendment dated 2026-06-30 that the notes do not describe |
| 10-Q_2026-09-30_opln-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 and 9M 2026 with 2025 comparatives | USD | Millions | Consolidated | U.S. GAAP | Tier 2b unaudited without auditor review | Latest statements, debt, securitization and covenant disclosure, twelve-month EBITDA table | No maturity schedule is printed |
| EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl | Earnings slides | Q1 2026 with the quarterly series from 2024 | USD | Millions | Consolidated with two segments | Non-GAAP reconciliations to U.S. GAAP net income | Tier 2c issuer material | Quarterly reconciliations for 2025 and 2026, 2024 adjusted EBITDA | Management measures; chart values are not in the extract |
| EX-99.3_2026-08-04_q22026openlaneearningssl.htm.jsonl | Earnings slides | Q2 2026 with the quarterly series | USD | Millions | Consolidated with two segments | Non-GAAP reconciliations to U.S. GAAP net income | Tier 2c issuer material | Cross-check of the quarterly reconciliations | Management measures; chart values are not in the extract |
| EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl | Earnings slides | Q3 2026 with the quarterly series | USD | Millions | Consolidated with two segments | Non-GAAP reconciliations to U.S. GAAP net income | Tier 2c issuer material | Quarterly revenue series, third-quarter reconciliation, revised guidance | Management measures; chart values are not in the extract |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| OPENLANE, Inc. (formerly KAR Auction Services, Inc.) | Issuer and borrower under the Credit Agreement | December 31 | USD | Millions | Consolidated: OPENLANE, Inc. and subsidiaries, including the Finance segment (Automotive Finance Corporation) and its securitization vehicles | U.S. GAAP | FY2023 to FY2025; Q1, Q2, Q3 and 9M 2026 with 2025 comparatives |
| Subsidiary Guarantors | Guarantors of the term loans and the U.S. revolving facility | December 31 | USD | Millions | Certain domestic subsidiaries; no separate statements are supplied | U.S. GAAP | Not supplied: no guarantor-group statements |
| AFC Funding Corporation and Automotive Finance Canada Inc. | Special purpose and Canadian securitization entities | December 31 | USD and CAD | Millions | Consolidated; bankruptcy-remote purchaser of U.S. finance receivables and the Canadian conduit borrower | U.S. GAAP | Facility-level amounts only |

Subsequent events: the board increased the share repurchase authorization in October 2026 and the company bought back shares in October 2026; both are after the 2026-09-30 balance sheet and are excluded from period figures. The pro forma effect on net debt is in the post-balance-sheet table.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Total Debt set to the corporate perimeter: obligations collateralized by finance receivables excluded | 10-Q_2026-09-30_opln-20260930.htm.jsonl | Perimeter | 2,598.3 | 534.2 | The securitization is matched funding of the finance subsidiary's receivables, carried on its own balance-sheet line; Analyst Judgement, with the consolidated view shown in the calculation register | 2026-09-30 and each earlier balance sheet |
| Total Debt measured at carrying value rather than principal | 10-Q_2026-09-30_opln-20260930.htm.jsonl | Carrying value | 545.9 | 534.2 | Discount and issuance costs of 11.7 are netted as the method requires; the difference is logged in the definition register | 2026-09-30 |
| FY2024 operating cash flow total includes discontinued operations | 10-K_2025-12-31_opln-20251231.htm.jsonl | Presentation | 292.8 | 291.4 | The activity totals and the cash roll-forward only reconcile with the discontinued -1.4 included | FY2024 |
| Twelve-month EBITDA, adjusted EBITDA and cash interest built from year plus current stub less prior-year stub | 10-Q_2026-09-30_opln-20260930.htm.jsonl | Derived period | Not applicable | 451.5 | Interim ratios use twelve-month figures, as the issuer's own covenant table does | 2026-03-31, 2026-06-30, 2026-09-30 |
| Finance receivables pledged at 2025-12-31 taken at the corrected amount | 10-Q_2026-09-30_opln-20260930.htm.jsonl | Correction | 2,803.5 | 2,448.2 | The later quarterly reports state that the annual report figure was an error | 2025-12-31 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM | USD 408.7m | USD 122.7m | USD 106.4m | USD 425.0m | Calculated: Q1 2026 stub less Q1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl | Issuer-reported EBITDA, which adds back finance interest expense |
| EBITDA (Reported) | LTM | USD 408.7m | USD 240.8m | USD 209.3m | USD 440.2m | Calculated: H1 2026 stub less H1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl | Issuer-reported EBITDA, which adds back finance interest expense |
| EBITDA (Reported) | LTM | USD 408.7m | USD 359.6m | USD 316.8m | USD 451.5m | Calculated: 9M 2026 stub less 9M 2025 stub; equals the issuer's own twelve-month table | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-09-30_opln-20260930.htm.jsonl | Issuer-reported EBITDA, which adds back finance interest expense |
| EBITDA (Adjusted) | LTM | USD 332.6m | USD 96.7m | USD 82.8m | USD 346.5m | Calculated: Q1 2026 stub less Q1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl | Issuer-adjusted EBITDA, after deducting securitization interest |
| EBITDA (Adjusted) | LTM | USD 332.6m | USD 199.9m | USD 169.5m | USD 363.0m | Calculated: H1 2026 stub less H1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl | Issuer-adjusted EBITDA, after deducting securitization interest |
| EBITDA (Adjusted) | LTM | USD 332.6m | USD 306.7m | USD 256.6m | USD 382.7m | Calculated: 9M 2026 stub less 9M 2025 stub; equals the issuer's own twelve-month table | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-09-30_opln-20260930.htm.jsonl | Issuer-adjusted EBITDA, after deducting securitization interest |
| Cash Interest Paid | LTM | USD 115.4m | USD 33.4m | USD 26.1m | USD 122.7m | Calculated: Q1 2026 stub less Q1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-03-31_opln-20260331.htm.jsonl | Includes interest on the securitization borrowings |
| Cash Interest Paid | LTM | USD 115.4m | USD 66.6m | USD 58.1m | USD 123.9m | Calculated: H1 2026 stub less H1 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-06-30_opln-20260630.htm.jsonl | Includes interest on the securitization borrowings |
| Cash Interest Paid | LTM | USD 115.4m | USD 102.3m | USD 85.6m | USD 132.1m | Calculated: 9M 2026 stub less 9M 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-09-30_opln-20260930.htm.jsonl | Includes interest on the securitization borrowings |
| Total operating revenues | LTM | USD 1,934.5m | USD 1,643.7m | USD 1,440.2m | USD 2,138.0m | Calculated: 9M 2026 stub less 9M 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-09-30_opln-20260930.htm.jsonl | Revenue categories revised from the fourth quarter of 2025; the total is unaffected |
| Marketplace segment adjusted EBITDA | LTM | USD 156.8m | USD 166.1m | USD 125.2m | USD 197.7m | Calculated: 9M 2026 stub less 9M 2025 stub | 10-K_2025-12-31_opln-20251231.htm.jsonl; 10-Q_2026-09-30_opln-20260930.htm.jsonl | Segment measure before corporate interest on the term loan |

No pro forma adjustment is constructed: the only post-period event the sources state is the October 2026 repurchase, which is shown in the post-balance-sheet table and kept out of period figures.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 222.5 | 143.0 | 79.5 | US$m | Reported carrying value: current maturities of 222.5 (senior notes due 2025-06-01 of 210.0 and European borrowings of 20.7, net of 8.2 of unamortized costs) and no long-term debt; principal 230.7. Excludes obligations collateralized by finance receivables of 1,660.3 and restricted cash of 40.7 |
| FY2025 / 2025-12-31 | 535.6 | 141.5 | 394.1 | US$m | Reported carrying value: current maturities of 5.5 plus long-term debt of 530.1; principal 550.0 less 14.4 of unamortized discount and issuance costs. Excludes obligations collateralized by finance receivables of 1,758.3 and restricted cash of 43.9 |
| 2026-03-31 | 554.6 | 180.1 | 374.5 | US$m | Reported carrying value: current maturities of 24.9, which include European line borrowings, plus long-term debt of 529.7. Excludes obligations collateralized by finance receivables of 1,693.2 and restricted cash of 36.8 |
| 2026-06-30 | 534.7 | 189.7 | 345.0 | US$m | Reported carrying value: current maturities of 5.5 plus long-term debt of 529.2. Excludes obligations collateralized by finance receivables of 1,887.0 and restricted cash of 28.1 |
| 2026-09-30 | 534.2 | 244.9 | 289.3 | US$m | Reported carrying value: current maturities of 5.5 plus long-term debt of 528.7; principal 545.9 less 11.7 of unamortized discount and issuance costs. Excludes obligations collateralized by finance receivables of 2,064.1 (gross 2,084.4) and restricted cash of 34.7 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 222.5 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 396.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 / 2024-12-31 | USD | US$m | 0.56 | Calculated | Tier 1 audited | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 79.5 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 396.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 / 2024-12-31 | USD | US$m | 0.20 | Calculated | Tier 1 audited | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 396.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | 140.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | FY2024 / 2024-12-31 | USD | US$m | 2.82 | Calculated | Tier 1 audited | Cash interest paid includes interest on the securitization borrowings while EBITDA before it adds that interest back; the cover mixes the corporate and finance perimeters |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 222.5 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 293.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 / 2024-12-31 | USD | US$m | 0.76 | Calculated | Tier 1 audited | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 79.5 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 293.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 / 2024-12-31 | USD | US$m | 0.27 | Calculated | Tier 1 audited | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash interest paid | 293.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | 140.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | FY2024 / 2024-12-31 | USD | US$m | 2.09 | Calculated | Tier 1 audited | Cash interest paid includes securitization interest that adjusted EBITDA has already deducted, so the cover double counts that cost |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 535.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 408.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 / 2025-12-31 | USD | US$m | 1.31 | Calculated | Tier 1 audited | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 394.1 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 408.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 / 2025-12-31 | USD | US$m | 0.96 | Calculated | Tier 1 audited | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 408.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | 115.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 3.54 | Calculated | Tier 1 audited | Cash interest paid includes interest on the securitization borrowings while EBITDA before it adds that interest back; the cover mixes the corporate and finance perimeters |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 535.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 332.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 / 2025-12-31 | USD | US$m | 1.61 | Calculated | Tier 1 audited | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 394.1 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 332.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 / 2025-12-31 | USD | US$m | 1.18 | Calculated | Tier 1 audited | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash interest paid | 332.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | 115.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | FY2025 / 2025-12-31 | USD | US$m | 2.88 | Calculated | Tier 1 audited | Cash interest paid includes securitization interest that adjusted EBITDA has already deducted, so the cover double counts that cost |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 554.6 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 | 425.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-03-31 | USD | US$m | 1.30 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 374.5 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 | 425.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-03-31 | USD | US$m | 0.88 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 425.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 122.7 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, page 4; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-03-31 | USD | US$m | 3.46 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes interest on the securitization borrowings while EBITDA before it adds that interest back; the cover mixes the corporate and finance perimeters |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 554.6 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 | 346.5 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-03-31 | USD | US$m | 1.60 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 374.5 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 | 346.5 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-03-31 | USD | US$m | 1.08 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash interest paid | 346.5 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 122.7 | 10-Q_2026-03-31_opln-20260331.htm.jsonl, page 4; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-03-31 | USD | US$m | 2.82 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes securitization interest that adjusted EBITDA has already deducted, so the cover double counts that cost |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 534.7 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 | 440.2 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-06-30 | USD | US$m | 1.21 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 345.0 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 | 440.2 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-06-30 | USD | US$m | 0.78 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 440.2 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 123.9 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, page 5; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-06-30 | USD | US$m | 3.55 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes interest on the securitization borrowings while EBITDA before it adds that interest back; the cover mixes the corporate and finance perimeters |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 534.7 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 | 363.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-06-30 | USD | US$m | 1.47 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 345.0 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 | 363.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 2026-06-30 | USD | US$m | 0.95 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash interest paid | 363.0 | EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79 | 123.9 | 10-Q_2026-06-30_opln-20260630.htm.jsonl, page 5; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-06-30 | USD | US$m | 2.93 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes securitization interest that adjusted EBITDA has already deducted, so the cover double counts that cost |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 534.2 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 451.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 1.18 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 289.3 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 451.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 0.64 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Reported EBITDA adds back the securitization funding cost; debt excludes the securitization on its own balance-sheet line |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 451.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 132.1 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-09-30 | USD | US$m | 3.42 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes interest on the securitization borrowings while EBITDA before it adds that interest back; the cover mixes the corporate and finance perimeters |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 534.2 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 382.7 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 1.40 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 289.3 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 382.7 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 0.76 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Adjusted EBITDA deducts securitization interest; debt excludes the securitization on its own balance-sheet line |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash interest paid | 382.7 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 132.1 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5; 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94 | 2026-09-30 | USD | US$m | 2.90 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Cash interest paid includes securitization interest that adjusted EBITDA has already deducted, so the cover double counts that cost |
| Total debt incl. securitization / EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Reported) | 1,882.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 396.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 | USD | US$m | 4.74 | Calculated | Tier 1 audited | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt incl. securitization / adjusted EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Adjusted) | 1,882.8 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 293.4 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2024 | USD | US$m | 6.42 | Calculated | Tier 1 audited | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt incl. securitization / EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Reported) | 2,293.9 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 408.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 | USD | US$m | 5.61 | Calculated | Tier 1 audited | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt incl. securitization / adjusted EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Adjusted) | 2,293.9 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 | 332.6 | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 | FY2025 | USD | US$m | 6.90 | Calculated | Tier 1 audited | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt incl. securitization / EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Reported) | 2,598.3 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 451.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 5.75 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt incl. securitization / adjusted EBITDA | (Gross debt + obligations collateralized by finance receivables) / EBITDA (Adjusted) | 2,598.3 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 | 382.7 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | 2026-09-30 | USD | US$m | 6.79 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Includes the securitization funding of the finance subsidiary's receivables, which the issuer carries outside its debt note |
| Total debt / Marketplace segment adjusted EBITDA | Gross debt / Marketplace segment adjusted EBITDA (LTM) | 534.2 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3 | 197.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 58 | 2026-09-30 | USD | US$m | 2.70 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Corporate debt over the segment that does not earn the securitization margin; the finance segment's cash flows also support the term loan |
| Net debt / Marketplace segment adjusted EBITDA | Net debt / Marketplace segment adjusted EBITDA (LTM) | 289.3 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3 | 197.7 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 58 | 2026-09-30 | USD | US$m | 1.46 | Calculated | Tier 2b unaudited; twelve months built from quarterly reconciliations | Corporate net debt over the segment that does not earn the securitization margin |
| Securitization gross obligations / total receivables managed | Gross obligations collateralized by finance receivables / total receivables managed | 2,084.4 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 16 | 2,763.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 16 | 2026-09-30 | USD | US$m | 0.75 | Calculated | Tier 2b unaudited | The issuer says 70% to 75% of the portfolio is funded through securitization; the ratio uses gross obligations before issuance costs |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 0.56 | 0.20 | x | Annual: carrying-value corporate debt over issuer-reported EBITDA for the year; excludes the securitization funding, which lifts total debt to EBITDA to 4.74x |
| FY2025 / 2025-12-31 | 1.31 | 0.96 | x | Annual: carrying-value corporate debt over issuer-reported EBITDA for the year; excludes the securitization funding, which lifts total debt to EBITDA to 5.61x |
| 2026-03-31 | 1.30 | 0.88 | x | Last twelve months: carrying-value corporate debt over issuer-reported EBITDA built from quarterly reconciliations; excludes the securitization funding, which lifts total debt to EBITDA to 5.29x |
| 2026-06-30 | 1.21 | 0.78 | x | Last twelve months: carrying-value corporate debt over issuer-reported EBITDA built from quarterly reconciliations; excludes the securitization funding, which lifts total debt to EBITDA to 5.50x |
| 2026-09-30 | 1.18 | 0.64 | x | Last twelve months: carrying-value corporate debt over issuer-reported EBITDA built from quarterly reconciliations; excludes the securitization funding, which lifts total debt to EBITDA to 5.75x |

Leverage is on the corporate perimeter only and reported EBITDA adds back securitization interest, so the same debt over adjusted EBITDA is higher at 1.40x for 2026-09-30.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.82 | x | Annual: issuer-reported EBITDA over cash interest paid, which includes interest on the securitization borrowings |
| FY2025 / 2025-12-31 | 3.54 | x | Annual: issuer-reported EBITDA over cash interest paid, which includes interest on the securitization borrowings |
| 2026-03-31 | 3.46 | x | Last twelve months: issuer-reported EBITDA over cash interest paid, which includes interest on the securitization borrowings |
| 2026-06-30 | 3.55 | x | Last twelve months: issuer-reported EBITDA over cash interest paid, which includes interest on the securitization borrowings |
| 2026-09-30 | 3.42 | x | Last twelve months: issuer-reported EBITDA over cash interest paid, which includes interest on the securitization borrowings |

Cash interest includes the securitization funding cost, so the cover mixes the finance and corporate perimeters.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 143.0 | 397.9 | US$m | Cash and cash equivalents as reported; undrawn is availability under the Revolving Credit Facilities after letters of credit of 42.6 (48.8 at 2024-12-31). Excludes unused securitization capacity, which is not stated, European lines of credit repayable on demand, and restricted cash |
| FY2025 / 2025-12-31 | 141.5 | 409.9 | US$m | Cash and cash equivalents as reported; undrawn is availability under the Revolving Credit Facilities after letters of credit of 42.6 (48.8 at 2024-12-31). Excludes unused securitization capacity, which is not stated, European lines of credit repayable on demand, and restricted cash |
| 2026-03-31 | 180.1 | 408.2 | US$m | Cash and cash equivalents as reported; undrawn is availability under the Revolving Credit Facilities after letters of credit of 42.6 (48.8 at 2024-12-31). Excludes unused securitization capacity, which is not stated, European lines of credit repayable on demand, and restricted cash |
| 2026-06-30 | 189.7 | 405.7 | US$m | Cash and cash equivalents as reported; undrawn is availability under the Revolving Credit Facilities after letters of credit of 42.6 (48.8 at 2024-12-31). Excludes unused securitization capacity, which is not stated, European lines of credit repayable on demand, and restricted cash |
| 2026-09-30 | 244.9 | 405.3 | US$m | Cash and cash equivalents as reported; undrawn is availability under the Revolving Credit Facilities after letters of credit of 42.6 (48.8 at 2024-12-31). Excludes unused securitization capacity, which is not stated, European lines of credit repayable on demand, and restricted cash |

Undrawn capacity moves with the Canadian dollar, which sizes the Canadian revolving facility in US dollars.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 1.4 | US$m | Fourth-quarter 2026 instalment only, being 0.25% of the original 550.0 principal (1.375, printed as 1.4); ladder drawn at 2026-09-30 |
| FY2027 | 5.5 | US$m | Four quarterly instalments of 1.375, matching the annual report's schedule of 5.5 |
| FY2028 | 5.5 | US$m | Four quarterly instalments; the revolving facilities mature on 2028-06-23 and are undrawn |
| FY2029 | 5.5 | US$m | Four quarterly instalments |
| FY2030 | 5.5 | US$m | Four quarterly instalments |
| FY2031 | 5.5 | US$m | Four quarterly instalments; the annual report states 522.5 thereafter, which this ladder splits using the stated instalment rate |
| FY2032 | 517.0 | US$m | Instalments of 4.125 for the first three quarters plus the balance due 2032-10-08; the ladder is built from the annual report's schedule less the instalments paid in 2026 |

The ladder is derived, not printed, because the quarterly reports give no maturity schedule.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Basis |
|---|---|---|---|---|
| Total operating revenues (USD millions) | 1,788.5 | 1,934.5 | 2,138.0 | Reported for the years; twelve months built as the year plus 9M 2026 less 9M 2025 |
| EBITDA, reported (USD millions) | 396.8 | 408.7 | 451.5 | Issuer-reported; adds back finance interest expense |
| EBITDA, adjusted (USD millions) | 293.4 | 332.6 | 382.7 | Issuer-adjusted; deducts securitization interest |
| Net income (USD millions) | 109.9 | 177.7 | 197.4 | Reported; twelve months as stated by the issuer |
| Net cash from operating activities (USD millions) | 291.4 | 391.9 | 435.0 | Year plus 9M 2026 less 9M 2025; includes the consignor payables float |
| Purchases of property, equipment and computer software (USD millions) | 53.0 | 55.4 | 55.4 | Total capital expenditure |
| Total debt (USD millions) | 222.5 | 535.6 | 534.2 | Carrying value, corporate perimeter |
| Cash and cash equivalents (USD millions) | 143.0 | 141.5 | 244.9 | Excludes restricted cash |
| Net debt (USD millions) | 79.5 | 394.1 | 289.3 | Total debt less cash |
| Total debt / EBITDA (x) | 0.56 | 1.31 | 1.18 | Corporate perimeter, reported EBITDA |
| Net debt / EBITDA (x) | 0.20 | 0.96 | 0.64 | Corporate perimeter, reported EBITDA |
| Total debt / adjusted EBITDA (x) | 0.76 | 1.61 | 1.40 | Corporate perimeter, adjusted EBITDA |
| EBITDA / cash interest (x) | 2.82 | 3.54 | 3.42 | Cash interest includes the securitization borrowings |
| Total debt incl. securitization / EBITDA (x) | 4.74 | 5.61 | 5.75 | Adds obligations collateralized by finance receivables |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 545.9 | -11.7 | 534.2 | US$m | Principal of the 2025 incremental term loans; the reconciling item is the unamortized discount and issuance costs of 11.7 netted against the debt. The revolving facilities and European lines are undrawn. The securitization obligations are carried on a separate line and are not part of this carrying value |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Share repurchases in the open market | Not supplied: the source states October 2026 only | 11.1 | 300.4 | 0.67 | US$m | The subsequent-events note states 306,334 shares bought for 11.1 in October 2026; Analyst Judgement assumes cash settlement, so net debt rises by that amount. Pro forma net leverage is 300.4 over the 451.5 of twelve-month reported EBITDA used at 2026-09-30. No other October cash movement is stated or reflected |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| 2024-03-31 | 429.9 | 74.8 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2024-06-30 | 443.8 | 71.4 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2024-09-30 | 459.8 | 74.5 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2024-12-31 | 455.0 | 72.7 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2025-03-31 | 460.1 | 82.8 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2025-06-30 | 481.7 | 86.7 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2025-09-30 | 498.4 | 87.1 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2025-12-31 | 494.3 | 76.0 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2026-03-31 | 527.9 | 96.7 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2026-06-30 | 554.6 | 103.2 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |
| 2026-09-30 | 561.2 | 106.8 | US$m | Quarter ended on that date; revenue as reported and adjusted EBITDA issuer-adjusted, deducting securitization interest |

Every row is a three-month quarter and the adjusted measure is the issuer's own, not a house measure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revolving Credit Facilities (USD 325 million U.S. facility and CAD 175 million Canadian facility) | 1 | Yes | 0.0 | 0.00 | US$m | Undrawn at 2026-09-30. First priority security interests over substantially all assets of the Company and the Subsidiary Guarantors; the Canadian facility is borrowed by the Canadian Borrower and guaranteed by domestic and Canadian subsidiaries for Canadian secured obligations only. Cumulative leverage is cumulative principal over 451.5 of twelve-month reported EBITDA |
| 2025 Incremental Term Loans | 1 | Yes | 545.9 | 1.21 | US$m | Principal, due 2032-10-08, guaranteed by the Subsidiary Guarantors and secured on the same first priority basis as the U.S. revolving facility. Cumulative leverage is 545.9 of principal over 451.5 of twelve-month reported EBITDA, which is higher than the 1.18x on carrying value |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (reported, twelve months to 2026-09-30) | 451.5 | US$m | Reported measure as the issuer defines it; adds back finance interest expense |
| Non-cash stock-based compensation | 30.8 | US$m | Share-based compensation; non-cash; realisation not stated |
| Loss on extinguishment of debt | 0.7 | US$m | Financing cost on the securitization amendment; realisation not stated |
| Securitization interest | -95.9 | US$m | Deduction of the securitization funding cost so that adjusted EBITDA is stated after it; realised |
| Severance | 6.2 | US$m | Restructuring; realisation not stated |
| Foreign currency losses | 0.5 | US$m | Foreign exchange on intercompany balances; realisation not stated |
| ERP implementation costs | 2.2 | US$m | Business improvement cost; realisation not stated |
| Impact of Canadian digital services tax related to prior years | -15.9 | US$m | Reversal of prior-year expense in the first quarter of 2026; realised as a refund received in the second quarter |
| Realized gain on investment securities | -1.3 | US$m | Gain removed; realised |
| Transaction-related costs | 1.7 | US$m | Transaction costs; realisation not stated |
| Other | 2.2 | US$m | Other issuer items; realisation not stated |
| Adjusted EBITDA (issuer-adjusted, twelve months to 2026-09-30) | 382.7 | US$m | The issuer's adjusted measure, defined by reference to its credit agreement covenant calculation; no house adjustment is made |

The bridge uses the issuer's own add-backs as stated; the add-backs are not independently tested.

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Marketplace | Total vehicles sold (period flow) | 372,000 | 475,000 | 1,115,000 | 1,388,000 | Up | Commercial and dealer consignment volumes both rose; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Marketplace | Commercial vehicles sold (period flow) | 185,000 | 270,000 | 574,000 | 784,000 | Up | Includes a new private label customer and more off-lease vehicles; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Marketplace | Dealer consignment vehicles sold (period flow) | 187,000 | 205,000 | 541,000 | 604,000 | Up | Growth below commercial; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Marketplace | Gross merchandise value, USD billions (period flow) | 7.3 | 10.0 | 21.7 | 29.6 | Up | Volume and average vehicle value; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Marketplace | Auction and related fees yield (rate) | 2.9% | 2.5% | 2.9% | 2.5% | Down | Mix shift to lower-yield commercial vehicles; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Total receivables managed, USD millions (period-end) | 2,489.3 | 2,763.5 | 2,489.3 | 2,763.5 | Up | Loan book growth; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Average receivables managed, USD millions (period flow) | 2,389.2 | 2,700.9 | 2,363.9 | 2,568.8 | Up | Daily balance average; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Receivables delinquent as a percentage of total receivables managed (period-end) | 0.3% | 0.6% | 0.3% | 0.6% | Up | Delinquency doubled from a low base; 31 days or more past due; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Allowance for credit losses as a percentage of total receivables managed (period-end) | 0.9% | 1.1% | 0.9% | 1.1% | Up | Allowance 30.0 against 23.0 a year earlier; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Annualized provision for credit losses as a percentage of average receivables managed (rate) | 1.6% | 1.1% | 1.5% | 1.3% | Down | Issuer expects about 2% or under over the long term; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Net finance margin, annualized, as a percentage of average receivables managed (rate) | 13.4% | 12.7% | 13.7% | 13.0% | Down | Lower fee yield on larger average loan values; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |
| Finance | Total loan transaction units (period flow) | 425,000 | 454,000 | 1,268,000 | 1,308,000 | Up | Floorplans originated plus curtailed; source 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 40; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 44; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 47 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Net income plus interest, taxes, depreciation and amortization | Adds back finance interest expense on the securitization (106.0 over twelve months) as well as corporate interest net of interest income (37.3); adjusted EBITDA then deducts securitization interest (95.9) | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | All periods | Twelve-month reported EBITDA 451.5 against adjusted 382.7, a difference of 68.8 | Leverage and cover in this run | Reported EBITDA is the primary denominator; adjusted EBITDA is shown beside it in separate rows and the choice is stated wherever a ratio is quoted |
| Total debt | Every balance-sheet debt line carried by the issuer | Debt note lists only the term loans, revolving facilities and European lines; obligations collateralized by finance receivables are a separate line | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17 | All periods | Corporate carrying value 534.2 against 2,598.3 including the securitization at 2026-09-30 | Leverage in this run | Corporate perimeter used for the fixed ratios; consolidated ratios shown as separate rows. Analyst Judgement that the securitization is matched funding |
| Total debt | Carrying value net of discount and issuance costs | Principal of 545.9 against carrying value of 534.2 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17 | 2026-09-30 | Reconciling item of -11.7 | Debt tables in this run | Carrying value used for ratios; principal kept in the reconciliation and the debt stack |
| Cash interest | Interest paid in cash on the debt in the ratio | Cash paid for interest of 132.1 over twelve months covers securitization and corporate borrowings together | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 | All periods | Cover of 3.42x on reported EBITDA mixes perimeters | Cover in this run | Cover quoted with the perimeter caveat; the cash interest paid line is not split in the filings |
| Covenant leverage | Not applicable: no covenant is inferred | Consolidated Senior Secured Net Leverage Ratio of 0.9 at 2026-09-30 against a maximum of 3.5, on the credit agreement's own debt and EBITDA definitions | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 54 | 2026-09-30 | Computed net debt to reported EBITDA is 0.64 and to adjusted EBITDA 0.76, neither equals 0.9 | Covenant statements in this run | Difference not reconciled; the issuer's ratio is quoted as stated and no headroom is worked |
| Finance receivables pledged | Amount of receivables serving as security for the securitization | 2,803.5 in the annual report and 2,448.2 as corrected in the quarterly reports for 2025-12-31 | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 16 | 2025-12-31 | Difference of 355.3 | Securitization statements in this run | The corrected amount is used; the quarterly reports describe the earlier figure as an error |
| Revenue categories | Prior-year categories as first reported | Auction fees and service revenue replaced by auction and related fees and SaaS and other revenue from the fourth quarter of 2025 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 8 | 2025 comparatives | Third-quarter 2025 auction fees of 136.3 now shown within 215.2; total revenue unchanged | Revenue lines in this run | Revised categories used throughout; totals are unaffected |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Net debt, leverage and cover on the corporate perimeter | Ready with Limitations | Securitization excluded by judgement; cash interest mixes perimeters; interim figures are twelve-month builds | Quote the perimeter and EBITDA measure with every ratio |
| Consolidated leverage including the securitization | Ready with Limitations | Legal rank of the securitization relative to the credit agreement debt is not stated | Treat as an upper bound and state the matched-funding judgement |
| Liquidity | Ready with Limitations | Unused securitization capacity and the terms of the amendment dated 2026-06-30 are not stated | Use cash plus revolving availability only |
| Debt maturity profile | Ready with Limitations | No schedule in the quarterly reports; ladder derived from the annual schedule and instalment rate | Refresh from the next annual report |
| Covenant headroom | Not Ready | Covenant inputs and definitions are not supplied; the issuer's 0.9 ratio cannot be reproduced | Obtain the credit agreement before any headroom statement |
| Earnings and cash flow trends | Ready | Quarterly reconciliations support the series; chart values on slides are not extracted | None beyond the stated limitations |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2025 Incremental Term Loans | Term loan | Not supplied: carrying value by instrument is not disclosed | 545.9 | 545.9 | 550.0 | Secured by first priority security interests in substantially all assets of the Company and the Subsidiary Guarantors | First priority; rank against the revolving facilities not separately stated | USD | 545.9 | Not applicable | Adjusted Term SOFR + 2.50% | floating | Adjusted Term SOFR | 250 | Not applicable | 2032-10-08 | 5.5 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 20 |
| Revolving Credit Facility (USD 325 million) | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0.0 | 0.0 | 325.0 | Secured on the same collateral as the term loans | First priority | USD | 0.0 | Not applicable | Adjusted Term SOFR + 2.25% (2.25% to 2.75% by leverage) | floating | Adjusted Term SOFR | 225 | Not applicable | 2028-06-23 | 0.0 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 20 |
| Canadian Revolving Credit Facility (CAD 175 million) | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0.0 | 0.0 | 175.0 | Secured by substantially all assets of the Company, the Canadian Borrower and the Canadian guarantors for Canadian secured obligations | Not supplied: rank against the other facilities is not stated | CAD | 0.0 | Not applicable | Adjusted Term CORRA + 2.50% (2.50% to 3.00% by leverage) | floating | Adjusted Term CORRA | 250 | Not applicable | 2028-06-23 | 0.0 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 18; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 20 |
| European lines of credit (EUR 40 million, USD 45.3 million) | Lines of credit | Not supplied: carrying value by instrument is not disclosed | 0.0 | 0.0 | 40.0 | Secured by certain inventory and receivables of the European subsidiaries | Not supplied: rank is not stated | EUR | 0.0 | Not applicable | Euribor + 1.25% | floating | Euribor | 125 | Not applicable | Repayable upon demand | Not applicable: repayable upon demand | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 21 |
| Financing cost adjustment | Unamortized discount and issuance costs | -11.7 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -11.7 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 20 |
| Obligations collateralized by finance receivables (U.S. and Canadian securitization facilities; outside Total Debt) | Securitization secured borrowing | 2,064.1 | 2,084.4 | 2,084.4 | Not supplied: USD 2,000.0 million U.S. and CAD 500.0 million Canadian committed liquidity are stated separately with no combined figure | Finance receivables of 2,786.7 including accrued interest and fees, plus a cash reserve of 1% or 3% of the obligations | Not supplied: rank against the credit agreement debt is not stated | USD and CAD | Not applicable: carried outside Total Debt | Not applicable | Not supplied: funding cost is reported only as finance interest expense | Not supplied: rate type is not stated | Not supplied: reference rate is not stated | Not supplied: spread is not stated | Not supplied: floor is not stated | 2030-01-31 | Not applicable: revolving | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 56 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 46 |
| Calculated | 24 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 3 |
| Fields present | 28 |
| Fields total | 28 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1.1 | Net debt at FY2024 / 2024-12-31 | 222.5 - 143.0 | USD 79.5m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C1.2 | Net debt at FY2025 / 2025-12-31 | 535.6 - 141.5 | USD 394.1m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C1.3 | Net debt at 2026-03-31 | 554.6 - 180.1 | USD 374.5m | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 |
| C1.4 | Net debt at 2026-06-30 | 534.7 - 189.7 | USD 345.0m | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 |
| C1.5 | Net debt at 2026-09-30 | 534.2 - 244.9 | USD 289.3m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| C2.1 | Twelve-month reported EBITDA to 2026-03-31 | 408.7 + 122.7 - 106.4 | USD 425.0m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7 |
| C2.2 | Twelve-month reported EBITDA to 2026-06-30 | 408.7 + (122.7 + 118.1) - (106.4 + 102.9) | USD 440.2m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6 |
| C2.3 | Twelve-month reported EBITDA to 2026-09-30 | 408.7 + 359.6 - 316.8 | USD 451.5m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C2.4 | Twelve-month adjusted EBITDA to 2026-03-31 | 332.6 + 96.7 - 82.8 | USD 346.5m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7 |
| C2.5 | Twelve-month adjusted EBITDA to 2026-06-30 | 332.6 + (96.7 + 103.2) - (82.8 + 86.7) | USD 363.0m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; EX-99.3_2026-05-05_q12026openlaneearningssl.htm.jsonl, pages 6–7; EX-99.3_2026-11-04_q32026openlaneearningssl.htm.jsonl, page 6 |
| C2.6 | Twelve-month adjusted EBITDA to 2026-09-30 | 332.6 + 306.7 - 256.6 | USD 382.7m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C2.7 | Twelve-month cash interest paid to 2026-03-31 | 115.4 + 33.4 - 26.1 | USD 122.7m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94; 10-Q_2026-03-31_opln-20260331.htm.jsonl, page 4 |
| C2.8 | Twelve-month cash interest paid to 2026-06-30 | 115.4 + 66.6 - 58.1 | USD 123.9m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94; 10-Q_2026-06-30_opln-20260630.htm.jsonl, page 5 |
| C2.9 | Twelve-month cash interest paid to 2026-09-30 | 115.4 + 102.3 - 85.6 | USD 132.1m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 5 |
| C2.10 | Twelve-month total operating revenues to 2026-09-30 | 1,934.5 + 1,643.7 - 1,440.2 | USD 2,138.0m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 2 |
| C2.11 | Twelve-month Marketplace segment adjusted EBITDA to 2026-09-30 | 156.8 + 166.1 - 125.2 | USD 197.7m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 58 |
| C2.12 | Twelve-month net cash from operating activities to 2026-09-30 | 391.9 + 309.5 - 266.4 | USD 435.0m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 4 |
| C2.13 | Twelve-month purchases of property, equipment and computer software to 2026-09-30 | 55.4 + 40.7 - 40.7 | USD 55.4m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 4 |
| C3.1 | Total debt including securitization at 2025-12-31 | 535.6 + 1,758.3 | USD 2,293.9m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C3.2 | Total debt including securitization at 2026-09-30 | 534.2 + 2,064.1 | USD 2,598.3m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 3 |
| C3.3 | Total debt including securitization over reported EBITDA at 2026-09-30 | 2,598.3 / 451.5 | 5.75x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C3.4 | Total debt including securitization over adjusted EBITDA at 2026-09-30 | 2,598.3 / 382.7 | 6.79x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C3.5 | Total debt including securitization at 2024-12-31 | 222.5 + 1,660.3 | USD 1,882.8m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C3.6 | Total debt including securitization over reported EBITDA, FY2024 | 1,882.8 / 396.8 | 4.74x | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 |
| C3.7 | Total debt including securitization over reported EBITDA, FY2025 | 2,293.9 / 408.7 | 5.61x | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 |
| C3.8 | Total debt including securitization over adjusted EBITDA, FY2025 | 2,293.9 / 332.6 | 6.90x | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 |
| C3.9 | Total debt including securitization over adjusted EBITDA, FY2024 | 1,882.8 / 293.4 | 6.42x | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 |
| C4.1 | Total debt over reported EBITDA at 2026-09-30 | 534.2 / 451.5 | 1.18x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.2 | Net debt over reported EBITDA at 2026-09-30 | 289.3 / 451.5 | 0.64x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.3 | Total debt over adjusted EBITDA at 2026-09-30 | 534.2 / 382.7 | 1.40x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.4 | Net debt over adjusted EBITDA at 2026-09-30 | 289.3 / 382.7 | 0.76x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.5 | Reported EBITDA over cash interest paid at 2026-09-30 | 451.5 / 132.1 | 3.42x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.6 | Adjusted EBITDA over cash interest paid at 2026-09-30 | 382.7 / 132.1 | 2.90x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C4.7 | Net debt over reported EBITDA at 2025-12-31 | 394.1 / 408.7 | 0.96x | 10-K_2025-12-31_opln-20251231.htm.jsonl, pages 78–79 |
| C5.1 | Liquidity at FY2024 / 2024-12-31: cash plus undrawn revolving facilities | 143.0 + 397.9 | USD 540.9m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C5.2 | Liquidity at FY2025 / 2025-12-31: cash plus undrawn revolving facilities | 141.5 + 409.9 | USD 551.4m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 92 |
| C5.3 | Liquidity at 2026-03-31: cash plus undrawn revolving facilities | 180.1 + 408.2 | USD 588.3m | 10-Q_2026-03-31_opln-20260331.htm.jsonl, pages 2–3 |
| C5.4 | Liquidity at 2026-06-30: cash plus undrawn revolving facilities | 189.7 + 405.7 | USD 595.4m | 10-Q_2026-06-30_opln-20260630.htm.jsonl, pages 2–3 |
| C5.5 | Liquidity at 2026-09-30: cash plus undrawn revolving facilities | 244.9 + 405.3 | USD 650.2m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, pages 2–3 |
| C6.1 | Net debt after the October 2026 repurchases | 289.3 + 11.1 | USD 300.4m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 27 |
| C6.2 | Pro forma net leverage on twelve-month reported EBITDA | 300.4 / 451.5 | 0.67x | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 27 |
| C7.1 | Reconciling items between principal and carrying value at 2026-09-30 | 534.2 - 545.9 | USD -11.7m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17 |
| C7.2 | Sum of the debt maturing ladder | 1.4 + 5.5 + 5.5 + 5.5 + 5.5 + 5.5 + 517.0 | USD 545.9m | 10-K_2025-12-31_opln-20251231.htm.jsonl, page 126 |
| C7.3 | Quarterly instalment on the term loans | 550.0 x 0.25% | USD 1.375m, shown as 1.4 for the remaining 2026 instalment | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 18 |
| C7.4 | Principal after three instalments paid in 2026 | 550.0 - (3 x 1.375) | USD 545.875m, printed by the issuer as 545.9 | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 17 |
| C7.5 | Sum of unamortized discount and issuance costs | 11.7 | USD 11.7m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 20 |
| C8.1 | Sum of the twelve-month add-backs and deductions | 30.8 + 0.7 - 95.9 + 6.2 + 0.5 + 2.2 - 15.9 - 1.3 + 1.7 + 2.2 | USD -68.8m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |
| C8.2 | Reported EBITDA plus add-backs and deductions | 451.5 - 68.8 | USD 382.7m | 10-Q_2026-09-30_opln-20260930.htm.jsonl, page 59 |

All inputs are figures stated in the sources or earlier rows of this table; each ratio is rounded to two decimals.

## Gaps

Income statement and cash flow lines printed as a dash in the filings (gain on sale of business, loss on sale of property, loss on extinguishment of debt and the matching cash flow lines) are shown as not supplied rather than zero, as the method requires. Severity Low; the totals of the same statements foot without them. The action that would close it is the issuer's confirmation that a dash means nil.

The quarterly reports print no schedule of debt maturities, so the maturity ladder at 2026-09-30 is derived from the annual report's schedule and the stated instalment rate. Severity Medium; it restricts the split of the amount due after 2030 between the last two years. The next annual report would close it.

The unused capacity under the U.S. and Canadian securitization facilities is not stated, so liquidity counts only cash and the revolving facilities. Severity Medium; it understates accessible funding for new loans. The issuer's facility utilisation figures would close it.

The legal rank of the securitization obligations and of the European lines of credit relative to the credit agreement debt is not stated, so both are left out of the debt stack. Severity Medium; the securitization is therefore shown only in the consolidated ratios. The executed agreements would close it.

The covenant ratio of 0.9 reported at 2026-09-30 cannot be reproduced from the statements because its debt, cash and EBITDA definitions are not itemised, and the amendment dated 2026-06-30 is not described. Severity High; it blocks any covenant headroom statement. The credit agreement and the compliance certificate would close it.

Cash interest paid is not split between the securitization borrowings and the corporate debt, so interest cover mixes the two perimeters. Severity Medium; corporate-only cover cannot be stated. A split of cash interest in the next annual report would close it.

Twelve-month figures for 2026-03-31 and 2026-06-30 use the issuer's quarterly reconciliations, which have no auditor review. Severity Low; the 2026-09-30 figures match the issuer's own twelve-month table. No further action is needed.

The balance sheet at 2025-09-30 is not supplied, so no leverage point exists for a year earlier than 2026-09-30 other than the year-end figures. Severity Low; the trend is shown at the year-ends and three 2026 quarter-ends.

The assumption that the October 2026 repurchases were paid in cash is Analyst Judgement because the note states the amount but not the funding. Severity Low; the pro forma net debt would be unchanged if funded from cash. The next quarterly report would confirm it.

## Next module

The orchestrator selects the next module.
