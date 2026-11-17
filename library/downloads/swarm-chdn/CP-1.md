---
issuer_id: chdn
module_id: CP-1
analysis_date: 2026-11-05
module_status: Complete
---

# Financial foundation for Churchill Downs Inc

## Request

Churchill Downs Inc (issuer id chdn), as of 2026-11-05, credit snapshot pathway. This answer normalises the issuer's financial statements for FY2024, FY2025 and 2026 to 2026-09-30, builds last-twelve-months figures, net debt and leverage and interest-cover metrics, and records the definition conflicts and gaps behind them.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_chdn-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | 791973148b4d2826daf79f6e0ecd898b524ba905f6928d4b1fa58e745cfa58e6 | Audited FY2025 and FY2024 statements, debt note and maturity table, Adjusted EBITDA reconciliation, covenant table |
| 10-Q_2026-03-31_chdn-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-22 | 3d979cd66a5fd3c2d7447c580ef853c0c5a7867f89e2461cd6b817f9d370c641 | Checked for maturity dates of the senior notes and for subsequent events |
| 10-Q_2026-06-30_chdn-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-29 | 4eca3b557126cb1eb2e1c2c8c7ed3827f930ac9e114b1865fffc6dfad00959f1 | Checked for maturity dates of the senior notes and for subsequent events |
| 10-Q_2026-09-30_chdn-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-28 | 7fff97ce9977f2b2156048dbf8e8996f9058aaa73d34344c7b548ba853ea7229 | Q3 2026 and nine months 2026 statements, debt note, September 2026 refinancing, subsequent events, Adjusted EBITDA reconciliation |
| EX-99.1_2026-04-22_ex991pressrelease04-22x26.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-22 | bbdcb62a4845e34e0fdd4338c48e18f02c4eceb2b21c6ecefed1bd7b13c21521 | Net bank leverage statement for Q1 2026 |
| EX-99.1_2026-07-29_ex991pressrelease07-29x26.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-29 | 85b22b14ac2149df8072938d3dbc3e8d85579a1e2355ea8fce27bcd305c203d4 | Net bank leverage statement for Q2 2026 |
| EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-28 | ecea350f3f38425e2e2322d4e7d883986fb7f745d76fde798f61a64ba8bc0e4f | Segment Adjusted EBITDA tables with eliminations, redemption of the 2027 senior notes, capital return announcements |

| Module | Supplied output | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | Source readiness for Churchill Downs Inc, as of 2026-11-05 | 908c09ef3b48d22533d09970329c8b72eafe45e8b7f955d3a47b8d04fdfe599d | Source hierarchy, periods covered, gaps and the list of absent documents |

## Findings

### Bottom line

Net debt fell to 3.94x EBITDA at 2026-09-30 from 4.64x at year-end 2025, with higher earnings and cash-funded debt repayment each contributing, but slower buybacks drove the repayment and the new USD 750 million repurchase authority can reverse it.

Net debt was USD 4,555 million at 2026-09-30. Pro forma for the 2026-10-19 redemption of the 2027 notes, which the revolver funded, it is USD 4,555 million and 3.94x, and USD 4,631 million and 4.00x if about USD 76 million of implied October repurchases is added. On the issuer's own Adjusted EBITDA the 2026-09-30 net leverage is 3.66x.
Basis: calculation C2; calculation C3; calculation C5; calculation C10; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28

### Key findings

Net debt over EBITDA fell by 0.70x between year-end 2025 and 2026-09-30, using EBITDA for the last twelve months. Higher EBITDA explains 0.38x of the fall and lower net debt explains 0.32x, so the improvement is about as much earnings growth as repayment. On Adjusted EBITDA the same ratio moved from 4.09x to 3.66x, and total debt over EBITDA moved from 4.62x at year-end 2024 to 4.83x at year-end 2025 and 4.08x at 2026-09-30.
Basis: calculation C2; calculation C3; calculation C4; calculation C5; calculation C6

Net debt fell by USD 374.6 million in the nine months because free cash flow after capital expenditure, cash interest and cash tax was USD 484 million, against dividends of USD 31 million, repurchases of USD 44 million and USD 31 million to buy out a noncontrolling interest. Repurchases were USD 396 million in nine months 2025, so the deleveraging reflects a pause in buybacks, a discretionary choice by the company rather than a structural change in how cash is used. Debt had risen in 2025 as the revolver grew by USD 279.5 million while the company spent USD 427.8 million on repurchases and USD 185.3 million on gaming rights.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4; 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 78–79; calculation C7; calculation C8

Cash interest paid fell from USD 306.8 million in FY2024 to USD 294.5 million in FY2025 and USD 274.5 million over the last twelve months, which lifted EBITDA cover from 3.46x to 3.61x and 4.22x, or 4.54x on Adjusted EBITDA. The improvement follows the lower debt balance; the new term loan B due 2033 prices at 175 bp over SOFR, the same margin as the term loan B-1 it replaced.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 68; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; calculation C3; calculation C5

Adjusted EBITDA of USD 1,245.3 million for the last twelve months is USD 88.1 million above calculated EBITDA of USD 1,157.2 million. Equity-investee earnings sit inside both measures: equity income was USD 139.4 million in FY2025 but only USD 116.0 million, or 83.21%, arrived as distributions, so part of EBITDA is not cash available to creditors. Adjusted EBITDA also adds back the issuer's share of equity-investee interest, depreciation and amortization of USD 38.6 million in FY2025 and USD 47.5 million of impairments.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 77–79; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27; calculation C3; calculation C11; calculation C12

Liquidity at 2026-09-30 was USD 167 million of cash and USD 1,111 million of undrawn revolver, USD 1,278 million in all. The USD 600 million redemption of the 2027 notes on 2026-10-19 was funded from the revolver, so pro forma undrawn revolver capacity is USD 511 million and cash plus undrawn is USD 678 million, before about USD 76 million of implied repurchases.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 2–3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28; calculation C9

After the redemption the next note maturity is USD 700 million of 2028 senior notes due 2028-01-15. The amended revolver and term loan A are due September 2031 but carry a springing maturity if notes due before 2031-09-25 are not refinanced at least 91 days ahead, and if that test covers the 2028 notes it would fall about 2027-10-16. The credit agreement is not supplied, so which notes the test covers is not established.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; calculation C13

Principal debt was USD 4,748 million against a carrying value of USD 4,722 million at 2026-09-30, a difference of USD 26 million of unamortized premium and financing costs. The quarterly report's own net debt line of USD 4,063 million is debt net of current maturities and costs, not net of cash, so this module reports net debt after cash of USD 4,555 million. The releases quote net bank leverage of 3.8x without a definition, and principal debt over last-twelve-months Adjusted EBITDA is 3.81x, which matches at one decimal but is not stated to be the definition.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 43–44; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, page 1; calculation C14

The annual report states that the 2030 and 2031 senior notes mature on 13 April 2030 and 25 April 2031, but the three 2026 quarterly reports state 1 April 2030 and 1 May 2031. The later dates are used here, the years are unaffected, and the Source readiness listing, which used the annual report's dates, is corrected by this answer.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 111–112; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; Source readiness (CP-0)

Deferred revenue, a non-debt funding float tied to advance receipts for events such as the Kentucky Derby, fell from USD 70 million at year-end 2025 to USD 48 million at 2026-09-30 as the revenue was recognised, which is a working-capital outflow rather than a debt repayment.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 17; calculation C15

### Contrary evidence and what would change the view

Shareholder returns are the strongest evidence against reading the deleveraging as durable. A new repurchase authority of up to USD 750 million, including USD 306 million left from the earlier programme, was approved on 2026-10-27, the remaining authority fell from USD 382 million to USD 306 million within October, and the implied repurchases would lift pro forma net leverage to 4.00x. The company also says it is exploring a sale of nine regional gaming properties carrying USD 280 million to USD 300 million of annual Adjusted EBITDA, which would remove earnings before any proceeds are applied to debt. A fourth quarter release showing buybacks resuming, or sale terms that do not apply proceeds to debt, would reverse the improvement; sale proceeds applied to debt at or above the current multiple would extend it.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 43; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, pages 3–4; calculation C10

### Limitations

The issuer states no unadjusted EBITDA, so reported EBITDA is calculated from net income, interest, tax and depreciation and amortization, and the last-twelve-months build combines one-decimal annual amounts with whole-million interim amounts.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; calculation C3

The maturity table is the one printed at 2025-12-31 and predates the September 2026 refinancing; the quarterly reports print no later table, and rebuilding one would need amortization schedules that are not stated.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 112; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 13–15

No source states the legal rank of any facility, the revolver availability at 2024-12-31 or covenant results after 2025-12-31, so the debt stack is unranked and covenant headroom is not calculated.
Basis: 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 69–70; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.62 | 4.46 | x | Reported EBITDA is calculated because the issuer states none; debt at carrying value; annual figures |
| FY2025 / 2025-12-31 | 4.83 | 4.64 | x | Reported EBITDA is calculated because the issuer states none; debt at carrying value; annual figures |
| 2026-09-30 | 4.08 | 3.94 | x | Reported EBITDA is calculated because the issuer states none; debt at carrying value; last twelve months to 2026-09-30 |

The ratios use calculated EBITDA and carrying-value debt, and the 2026-09-30 row uses last-twelve-months EBITDA.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3.46 | x | Reported EBITDA is calculated because the issuer states none; cash interest is cash paid; annual figures |
| FY2025 / 2025-12-31 | 3.61 | x | Reported EBITDA is calculated because the issuer states none; cash interest is cash paid; annual figures |
| 2026-09-30 | 4.22 | x | Reported EBITDA is calculated because the issuer states none; cash interest is cash paid; last twelve months to 2026-09-30 |

Cash interest paid is the denominator and the 2026-09-30 row uses last-twelve-months amounts.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 175.5 | Not supplied: the annual report does not state the revolver availability at 2024-12-31 | US$m | Cash and cash equivalents excluding restricted cash of 77.2; undrawn availability for 2024 is not stated |
| FY2025 / 2025-12-31 | 200.6 | 534.8 | US$m | Cash excludes restricted cash of 87.9; undrawn is the stated availability under the revolver after 8.2 of letters of credit, of 1,200 commitment less 657.0 drawn |
| 2026-09-30 | 167 | 1111 | US$m | Cash excludes restricted cash of 92; undrawn is calculated as the 1,200 revolver commitment less 79 drawn less 10 of letters of credit, where the filing prints only about 1.1 billion; the 2026-10-19 redemption of the 2027 notes was funded from this revolver and is not reflected |

The 2026-09-30 undrawn figure is calculated from rounded commitment and does not reflect the redemption on 2026-10-19.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 | 63.1 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; predates the September 2026 refinancing |
| 2027 | 663.1 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; predates the September 2026 refinancing, which moved the revolver and term loan A from 2029 to 2031, repaid term loan B-1 and added a term loan B due 2033; the 2027 notes were redeemed on 2026-10-19 |
| 2028 | 1039.9 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; predates the September 2026 refinancing |
| 2029 | 1589.0 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; predates the September 2026 refinancing |
| 2030 | 1200.0 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; predates the September 2026 refinancing |
| Thereafter | 600.0 | US$m | Contractual principal maturities at 2025-12-31 as printed in the annual report; the amount after 2030 is the 2031 senior notes; predates the September 2026 refinancing |

The ladder is dated 2025-12-31 and predates the September 2026 refinancing and the October 2026 redemption.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM 2026-09-30 | Unit | Basis and source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total net revenue | 2734.3 | 2925.9 | 2260 | 2339 | 3004.9 | USD millions | Reported; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue from external customers: Live and Historical Racing | 1225.6 | 1394.7 | 1083 | 1148 | 1459.7 | USD millions | Reported; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue from external customers: Wagering Services and Solutions | 469.5 | 488.2 | 383 | 392 | 497.2 | USD millions | Reported; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue from external customers: Gaming | 1039.1 | 1042.9 | 794 | 799 | 1047.9 | USD millions | Reported; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue from external customers: All Other | 0.1 | 0.1 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not calculable: the nine-month All Other amounts are printed as dashes | USD millions | Reported; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 125; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Eliminations of segment revenue | Not supplied: the line is not printed for these periods | Not supplied: the line is not printed for these periods | Not supplied: the line is not printed for these periods | Not supplied: the line is not printed for these periods | Not calculable: no eliminations are printed for these periods | USD millions | External-customer revenue by segment already sums to consolidated revenue; intercompany revenue is eliminated only in the segment Adjusted EBITDA presentation, for example 85 of eliminations in nine months 2026; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 125; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, page 14 |
| Adjusted EBITDA | 1159.2 | 1205.3 | 958 | 998 | 1245.3 | USD millions | Issuer-adjusted; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Adjusted EBITDA: Live and Historical Racing | 574.6 | 637.0 | 515 | 542 | 664.0 | USD millions | Issuer-adjusted; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Adjusted EBITDA: Wagering Services and Solutions | 165.6 | 177.3 | 135 | 145 | 187.3 | USD millions | Issuer-adjusted; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Adjusted EBITDA: Gaming | 506.9 | 483.0 | 374 | 384 | 493.0 | USD millions | Issuer-adjusted; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Adjusted EBITDA: All Other (corporate) | -87.9 | -92.0 | -66 | -73 | -99.0 | USD millions | Issuer-adjusted; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Adjusted EBITDA: eliminations | 0 | 0 | 0 | 0 | 0 | USD millions | Calculated as total Adjusted EBITDA less the segments and All Other, which is nil in every period; the quarterly release prints a dash; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, page 14 |
| EBITDA (Reported) | 1062.1 | 1063.2 | 845 | 939 | 1157.2 | USD millions | Calculated: net income plus interest, tax and depreciation and amortization; the issuer states none |
| Adjusted EBITDA margin | 42.39 | 41.19 | 42.39 | 42.67 | 41.44 | % | Calculated: Adjusted EBITDA over total net revenue |
| Net Cash from Operating Activities | 771.7 | 769.8 | 674 | 660 | 755.8 | USD millions | Reported; last twelve months calculated; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Capital expenditures (maintenance plus project) | 547.0 | 274.9 | 225 | 176 | 225.9 | USD millions | Calculated: capital maintenance plus capital project expenditures, excluding acquisitions of gaming rights |
| Free cash flow after capital expenditures | 224.7 | 494.9 | 449 | 484 | 529.9 | USD millions | Calculated: net cash from operating activities less capital maintenance and capital project expenditures; levered, after cash interest and cash tax; working capital included |
| Cash Interest Paid | 306.8 | 294.5 | 193 | 173 | 274.5 | USD millions | Reported; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Total Debt at period end | 4907.2 | 5130.2 | Not calculable: no 2025-09-30 balance sheet is a statement column | 4722 | 4722 | USD millions | Calculated carrying value at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Net Debt at period end | 4731.7 | 4929.6 | Not calculable: no 2025-09-30 balance sheet is a statement column | 4555 | 4555 | USD millions | Calculated: total debt less cash and cash equivalents; restricted cash is not deducted |
| Total debt / EBITDA | 4.62 | 4.83 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 4.08 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |
| Net debt / EBITDA | 4.46 | 4.64 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 3.94 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |
| EBITDA / cash interest | 3.46 | 3.61 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 4.22 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |
| Total debt / adjusted EBITDA | 4.23 | 4.26 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 3.79 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |
| Net debt / adjusted EBITDA | 4.08 | 4.09 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 3.66 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |
| Adjusted EBITDA / cash interest | 3.78 | 4.09 | Not calculable: interim ratios are stated on a last twelve months basis only | Not calculable: interim ratios are stated on a last twelve months basis only | 4.54 | x | Calculated from the calculation register; the last twelve months column is the 2026-09-30 balance sheet over last twelve months EBITDA |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4907.2 | 175.5 | 4731.7 | US$m | Reported balance sheet at 2024-12-31. Gross debt is current maturities plus long-term debt plus notes payable at carrying value, net of issuance costs and discounts; the debt note lists only the credit facility instruments and the senior notes, so lease and rent financing obligations are outside gross debt. Principal was 4,938.7. Cash excludes restricted cash of 77.2 |
| FY2025 / 2025-12-31 | 5130.2 | 200.6 | 4929.6 | US$m | Reported balance sheet at 2025-12-31. Gross debt is current maturities plus long-term debt plus notes payable at carrying value, net of issuance costs and discounts; the debt note lists only the credit facility instruments and the senior notes, so lease and rent financing obligations are outside gross debt. Principal was 5,155.1. Cash excludes restricted cash of 87.9. Not pro forma for any later event |
| 2026-09-30 | 4722 | 167 | 4555 | US$m | Reported balance sheet at 2026-09-30, unaudited. Gross debt is current maturities plus long-term debt plus notes payable at carrying value, net of issuance costs and discounts; the debt note lists only the credit facility instruments and the senior notes, so lease and rent financing obligations are outside gross debt. Principal was 4,748. Cash excludes restricted cash of 92. Reported, not pro forma: the redemption of the 2027 senior notes on 2026-10-19 is shown separately |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 5155.1 | -24.9 | 5130.2 | US$m | Principal from the maturity table; reconciling item is unamortized premium and deferred finance charges of 24.9, a net reduction; carrying value equals Gross debt of the Net debt data row for the same period |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Redemption of the 2027 senior notes with revolver borrowings | 2026-10-19 | 0 | 4555 | 3.94 | US$m | The 600 of 2027 senior notes was repaid from the revolver, so net debt is unchanged before any redemption premium or accrued interest, which the sources do not state; pro forma net leverage uses 2026-09-30 net debt over last twelve months EBITDA (Reported) of 1157.2; the revolver then carries about 679, and the next note maturity is the 2028 senior notes |
| Share repurchases implied by the fall in remaining authority from 382 at 2026-09-30 to 306 at 2026-10-27 | Not supplied: the sources state only that the remaining authority fell between 2026-09-30 and 2026-10-27 | 76 | 4631 | 4.00 | US$m | Analyst Judgement: 382 less 306 is the change in remaining authority, read as repurchases at trade date; a new program of up to 750 was approved on 2026-10-27 and includes the 306 remaining; share count, price and settlement are not stated, and the funding source is not stated, so net debt is assumed to rise by the full amount |
| Annual dividend declared at 0.469 per share, payable 2027-01-05 | 2026-10-27 | Not supplied: the aggregate dividend is not stated and the record-date share count is not stated | Not supplied: the aggregate dividend is not stated | Not supplied: the aggregate dividend is not stated | US$m | Declared on 2026-10-27 and payable after the as-of date; the cash leaves net debt on payment; 68,548,342 shares were outstanding at 2026-10-21 but the count at the record date is not stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2734.3 | 1159.2 | US$m | Annual; Adjusted EBITDA is the issuer-adjusted measure, which includes its share of equity-investee EBITDA |
| FY2025 / 2025-12-31 | 2925.9 | 1205.3 | US$m | Annual; Adjusted EBITDA is the issuer-adjusted measure, which includes its share of equity-investee EBITDA |
| 2026-09-30 | 3004.9 | 1245.3 | US$m | Last twelve months, calculated as FY2025 plus nine months 2026 less nine months 2025; same twelve-month duration as the annual rows; issuer-adjusted measure |

Adjusted EBITDA is the issuer's measure and includes its share of equity-investee EBITDA, so it is not comparable with reported EBITDA.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: legal rank is not stated in the sources | Not supplied: legal rank is not stated in the sources | Not supplied: security is stated for the credit agreement (collateralized by substantially all wholly owned assets) and the notes are described as senior unsecured, but no source states legal rank or cumulative priority | Not supplied: no legal rank is stated, so no facility is ranked | Not supplied: no legal rank is stated, so no cumulative leverage is stated | US$m | Facilities at 2026-09-30: 2031 Revolver, Term Loan A due 2031 and Term Loan B due 2033 under the credit agreement, and the 2027, 2028, 2030 and 2031 senior notes; obligor and guarantor scope is not stated because the indentures and credit agreement are not supplied; the debt instruments register shows each instrument's stated security |

No source states legal rank, so no facility is ranked.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), FY2025 | 1063.2 | US$m | Opening: calculated EBITDA (Reported) for FY2025, net income plus interest, tax and depreciation and amortization |
| Stock-based compensation | 30.2 | US$m | Share-based compensation; realisation status not stated |
| Pre-opening expenses | 11.7 | US$m | Other stated item; realisation status not stated |
| Other expense, net | 10.1 | US$m | Other stated item; realisation status not stated |
| Transaction expense, net | 5.1 | US$m | Transaction costs; realisation status not stated |
| Asset impairments, net | 47.5 | US$m | Other stated item; non-cash; realisation status not stated |
| Interest, depreciation and amortization expense related to equity investments | 38.6 | US$m | Other stated item: the issuer adds its share of equity-investee interest, depreciation and amortization; realisation status not stated |
| Other charges and recoveries, net | -1.1 | US$m | Other stated item; a net recovery; realisation status not stated |
| Adjusted EBITDA, FY2025 | 1205.3 | US$m | Closing: issuer-stated Adjusted EBITDA for FY2025; no plug line; legal reserves and Rivers Des Plaines items are nil in 2025 |

The bridge is for FY2025 only and starts from calculated EBITDA because the issuer states no unadjusted figure.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_chdn-20251231.htm.jsonl | Annual report, Form 10-K | FY2025 with FY2024 and FY2023 comparatives | USD | Millions to one decimal | Churchill Downs Incorporated consolidated | US GAAP | Tier 1 audited | Statements, debt note, maturities, covenants, Adjusted EBITDA reconciliation | Part III incorporated by reference to an absent proxy statement |
| 10-Q_2026-03-31_chdn-20260331.htm.jsonl | Quarterly report, Form 10-Q | Q1 2026 | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP | Tier 2b unaudited | Cross-check of debt terms and events | Superseded by the later quarterly reports for balances |
| 10-Q_2026-06-30_chdn-20260630.htm.jsonl | Quarterly report, Form 10-Q | Q2 2026 and six months 2026 | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP | Tier 2b unaudited | Cross-check of debt terms and events | Superseded by the later quarterly report for balances |
| 10-Q_2026-09-30_chdn-20260930.htm.jsonl | Quarterly report, Form 10-Q | Q3 2026 and nine months 2026 with 2025 comparatives | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP | Tier 2b unaudited | Latest statements, debt note, subsequent events, Adjusted EBITDA reconciliation | Covenant tests not printed |
| EX-99.1_2026-04-22_ex991pressrelease04-22x26.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | Net bank leverage statement | Net bank leverage not defined |
| EX-99.1_2026-07-29_ex991pressrelease07-29x26.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026 | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | Net bank leverage statement | Net bank leverage not defined |
| EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl | Earnings release, Exhibit 99.1 | Q3 2026 and nine months 2026 | USD | Whole millions | Churchill Downs Incorporated consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | Segment Adjusted EBITDA with eliminations, post-period events | Net bank leverage not defined |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Churchill Downs Incorporated | Issuer and registrant, and the borrower described in the filings' Credit Agreement; guarantors and the issuer of the 2030 notes, a wholly owned subsidiary, are not named | 31 December | USD | Millions | Consolidated group with unconsolidated affiliates on the equity method; one reporting perimeter across the sources | US GAAP | FY2023 to FY2025 annual; Q1, Q2 and Q3 2026 and nine months 2026 with 2025 comparatives |

Subsequent events after the 2026-09-30 balance sheet are the redemption of the 2027 senior notes on 2026-10-19 after a conditional notice of 2026-09-18, the annual dividend declared on 2026-10-27 and payable on 2027-01-05, and the new repurchase program approved on 2026-10-27; none is blended into the period figures.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, pages 3–4

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Reported EBITDA calculated from components | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | Derivation | Not supplied: the issuer states no unadjusted EBITDA | 1063.2 for FY2025 | Method step 4 derives EBITDA from net income, interest, tax and depreciation and amortization when it is not stated | All income statement columns |
| Total Debt set to carrying value | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 | Basis | 5155.1 principal at 2025-12-31 | 5130.2 carrying value | Method uses carrying value net of issuance costs and discounts, with principal kept in the reconciliation | FY2024, FY2025, Q3 2026 |
| Last twelve months built from full year and nine-month stubs | 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 77–79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | Derived period | Not supplied: no last-twelve-months figure is printed | 1157.2 for EBITDA (Reported) | LTM is the latest full year plus the current stub less the prior-year stub | 2026-09-30 |
| Source precision kept | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 | None | Annual one decimal and interim whole millions | Unchanged | No rounding or scaling is applied, so a derived total can carry up to about half a million of rounding | All columns |
| Undrawn revolver at 2026-09-30 calculated | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14 | Derivation | About 1.1 billion stated | 1111 | Commitment of 1,200 less 79 drawn less 10 of letters of credit; the same method reproduces the stated 534.8 at 2025-12-31 | 2026-09-30 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 1,063.2m | USD 939m | USD 845m | USD 1,157.2m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub; EBITDA is calculated because the issuer states none |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 1,205.3m | USD 998m | USD 958m | USD 1,245.3m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub; issuer-adjusted measure |
| Cash Interest Paid | LTM to 2026-09-30 | USD 294.5m | USD 173m | USD 193m | USD 274.5m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub |
| Revenue | LTM to 2026-09-30 | USD 2,925.9m | USD 2,339m | USD 2,260m | USD 3,004.9m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 769.8m | USD 660m | USD 674m | USD 755.8m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub |
| Capital maintenance expenditures | LTM to 2026-09-30 | USD 70.2m | USD 57m | USD 53m | USD 74.2m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub; stated here as the positive amount paid |
| Capital project expenditures | LTM to 2026-09-30 | USD 204.7m | USD 119m | USD 172m | USD 151.7m | Calculated | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | Full year at one decimal and interim stubs in whole millions, so the derived value carries rounding of up to about half a million in each stub; stated here as the positive amount paid |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4907.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 1062.1 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | FY2024 / 2024-12-31 | USD | US$m | 4.62 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 4731.7 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 1062.1 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | FY2024 / 2024-12-31 | USD | US$m | 4.46 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1062.1 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 306.8 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79 | FY2024 / 2024-12-31 | USD | US$m | 3.46 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4907.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 1159.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | FY2024 / 2024-12-31 | USD | US$m | 4.23 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Net debt / adjusted EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Adjusted) | 4731.7 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 1159.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | FY2024 / 2024-12-31 | USD | US$m | 4.08 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1159.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | 306.8 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79 | FY2024 / 2024-12-31 | USD | US$m | 3.78 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 5130.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 | 1063.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | FY2025 / 2025-12-31 | USD | US$m | 4.83 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 4929.6 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 | 1063.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | FY2025 / 2025-12-31 | USD | US$m | 4.64 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1063.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78 | 294.5 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79 | FY2025 / 2025-12-31 | USD | US$m | 3.61 | Calculated | Tier 1 audited | Annual figures at one decimal; EBITDA is derived because the issuer states none |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 5130.2 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 | 1205.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | FY2025 / 2025-12-31 | USD | US$m | 4.26 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Net debt / adjusted EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Adjusted) | 4929.6 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 | 1205.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | FY2025 / 2025-12-31 | USD | US$m | 4.09 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1205.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 | 294.5 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79 | FY2025 / 2025-12-31 | USD | US$m | 4.09 | Calculated | Tier 1 audited | Annual figures at one decimal; Adjusted EBITDA is the issuer's own measure |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4722 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13 | 1157.2 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 4.08 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; EBITDA is derived because the issuer states none |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 4555 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13 | 1157.2 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 3.94 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; EBITDA is derived because the issuer states none |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1157.2 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 274.5 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 4.22 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; EBITDA is derived because the issuer states none |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 4722 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13 | 1245.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 3.79 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; Adjusted EBITDA is the issuer's own measure |
| Net debt / adjusted EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Adjusted) | 4555 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13 | 1245.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 3.66 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; Adjusted EBITDA is the issuer's own measure |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1245.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | 274.5 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 4.54 | Calculated | Tier 2b unaudited, derived last twelve months | Last twelve months to 2026-09-30 built as FY2025 plus nine months 2026 less nine months 2025; mixes one-decimal annual and whole-million interim amounts; Adjusted EBITDA is the issuer's own measure |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net revenue: Live and Historical Racing | 1225.6 | 1394.7 | 1083 | 1148 | 300 | 308 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue: Wagering Services and Solutions | 469.5 | 488.2 | 383 | 392 | 118 | 116 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue: Gaming | 1039.1 | 1042.9 | 794 | 799 | 265 | 272 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net revenue: All Other | 0.1 | 0.1 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Total net revenue | 2734.3 | 2925.9 | 2260 | 2339 | 683 | 696 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Operating expense: Live and Historical Racing | 735.4 | 861.4 | 651 | 683 | 205 | 216 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Operating expense: Wagering Services and Solutions | 296.5 | 301.3 | 235 | 240 | 77 | 76 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Operating expense: Gaming | 748.9 | 763.0 | 575 | 575 | 192 | 195 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Operating expense: All Other | 15.0 | 17.6 | 13 | 12 | 5 | 2 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Selling, general and administrative expense | 237.7 | 246.2 | 175 | 180 | 59 | 60 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Asset impairments, net | 3.9 | 47.5 | 48 | Not supplied: the filing prints a dash | 46 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Transaction expense (benefit), net | -12.1 | 5.1 | 3 | 6 | 1 | 4 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Total operating expense | 2025.3 | 2242.1 | 1700 | 1696 | 585 | 553 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Operating income | 709.0 | 683.8 | 560 | 643 | 98 | 143 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Interest expense, net | -289.8 | -297.7 | -222 | -211 | -75 | -69 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Equity in income of unconsolidated affiliates | 144.9 | 139.4 | 105 | 115 | 35 | 38 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Miscellaneous, net | 9.1 | 6.9 | 6 | 5 | 3 | -1 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Total other (expense) income | -135.8 | -151.4 | -111 | -91 | -37 | -32 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Income from operations before provision for income taxes | 573.2 | 532.4 | 449 | 552 | 61 | 111 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Income tax provision | -144.1 | -146.9 | -115 | -147 | -22 | -31 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net income | 429.1 | 385.5 | 334 | 405 | 39 | 80 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net income attributable to noncontrolling interests | 2.3 | 2.5 | 2 | 1 | 1 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Net income attributable to Churchill Downs Incorporated | 426.8 | 383.0 | 332 | 404 | 38 | 80 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2 |
| Depreciation and amortization | 199.1 | 233.1 | 174 | 176 | 57 | 61 | USD millions | Reported in the cash flow statement and the Adjusted EBITDA reconciliation | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| Stock-based compensation expense | 36.1 | 30.2 | 18 | 19 | 7 | 6 | USD millions | Reported in the Adjusted EBITDA reconciliation | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| EBITDA (Reported) | 1062.1 | 1063.2 | 845 | 939 | 193 | 241 | USD millions | Calculated: net income plus interest expense, net, plus income tax provision, plus depreciation and amortization; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| EBITDA (Adjusted) | 1159.2 | 1205.3 | 958 | 998 | 262 | 264 | USD millions | Issuer-adjusted: Adjusted EBITDA as defined by the issuer, which includes its share of equity-investee EBITDA and the noncontrolling interest portion and adds back stock-based compensation, pre-opening expense, transaction expense, impairments and other items | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 429.1 | 385.5 | 334 | 405 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Depreciation and amortization | 199.1 | 233.1 | 174 | 176 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Equity in income of unconsolidated affiliates | -144.9 | -139.4 | -105 | -115 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Distributions from unconsolidated affiliates | 138.7 | 116.0 | 91 | 106 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Stock-based compensation | 36.1 | 30.2 | 18 | 19 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Deferred income taxes | 44.5 | 86.8 | 58 | 62 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Asset impairments | 3.9 | 87.5 | 88 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Gain on settlement of liability | Not supplied: the filing prints a dash | -40.0 | -40 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Amortization of operating lease assets | 5.6 | 6.4 | 5 | 5 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Other operating adjustments | 9.7 | 8.8 | 8 | 8 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Change in income taxes | -4.5 | -3.5 | 42 | 20 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Change in deferred revenue | -12.1 | -2.8 | -27 | -22 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Change in other assets and liabilities | 66.5 | 1.2 | 28 | -4 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 771.7 | 769.8 | 674 | 660 | USD millions | Reported; operating activities include distributions from unconsolidated affiliates and exclude discontinued operations | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Capital maintenance expenditures | -83.6 | -70.2 | -53 | -57 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Capital project expenditures | -463.4 | -204.7 | -172 | -119 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Acquisition of gaming rights, net of cash acquired | Not supplied: the filing prints a dash | -185.3 | -185 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Other investing activities | 1.8 | -11.3 | -11 | -2 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -545.2 | -471.5 | -421 | -178 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Proceeds from borrowings under long-term debt obligations | 965.5 | 1098.1 | 948 | 1266 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Repayments of borrowings under long-term debt obligations | -900.8 | -881.7 | -754 | -1673 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Payment of dividends | -29.2 | -30.8 | -30 | -31 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Acquisition of noncontrolling interest | Not supplied: the line is not printed for this period | Not supplied: the line is not printed for this period | Not supplied: the line is not printed for this period | -31 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Repurchase of common stock | -186.0 | -427.8 | -396 | -44 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Taxes paid related to net share settlement of stock awards | -30.1 | -17.0 | -4 | -3 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Debt issuance costs | -2.6 | -0.3 | Not supplied: the filing prints a dash | -7 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Change in bank overdraft | -10.9 | -2.3 | -2 | 8 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Other financing activities | -2.5 | -0.7 | 1 | 3 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -196.6 | -262.5 | -237 | -512 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Operating cash flows of discontinued operations | 1.0 | Not supplied: the filing prints a dash | Not supplied: the line is not printed for this period | Not supplied: the line is not printed for this period | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Net Cash Change | Not supplied: the filing's net change of 30.9 includes 1.0 of discontinued operations cash flows that the three activity totals exclude, so the identity cannot be supported | 35.8 | 16 | -30 | USD millions | Reported; opening and closing cash include restricted cash | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Opening Cash | 221.8 | 252.7 | 252 | 289 | USD millions | Reported; cash, cash equivalents and restricted cash at the start of the period | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Closing Cash | 252.7 | 288.5 | 268 | 259 | USD millions | Reported; cash, cash equivalents and restricted cash at the end of the period | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Cash Interest Paid | 306.8 | 294.5 | 193 | 173 | USD millions | Reported; supplemental disclosure, classified in operating activities under US GAAP | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| Cash paid for income taxes | 103.0 | 63.6 | 17 | 65 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 175.5 | 200.6 | 167 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Restricted cash | 77.2 | 87.9 | 92 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Accounts receivable, net | 98.7 | 93.5 | 106 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Income taxes receivable | 14.5 | 17.0 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Other current assets | 46.4 | 44.2 | 53 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total current assets | 412.3 | 443.2 | 418 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Property and equipment, net | 2874.9 | 2918.6 | 2921 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Investment in and advances to unconsolidated affiliates | 661.2 | 684.6 | 694 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Goodwill | 900.2 | 900.2 | 900 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Other intangible assets, net | 2409.0 | 2515.3 | 2510 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Other assets | 18.3 | 22.6 | 24 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total Assets | 7275.9 | 7484.5 | 7467 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Accounts payable | 180.3 | 184.3 | 221 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Accrued expenses and other current liabilities | 402.0 | 400.5 | 403 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Income taxes payable | Not supplied: the line is not printed for this period | Not supplied: the filing prints a dash | 3 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Current deferred revenue | 52.9 | 54.7 | 36 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Current maturities of long-term debt and notes payable | 63.1 | 63.1 | 659 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Dividends payable | 31.0 | 30.7 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total current liabilities | 729.3 | 733.3 | 1322 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Long-term debt, net of current maturities and loan origination fees | 1767.9 | 1985.9 | 1578 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Notes payable, net of current maturities and debt issuance costs | 3076.2 | 3081.2 | 2485 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Non-current deferred revenue | 20.0 | 15.4 | 12 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Deferred income taxes | 432.7 | 519.9 | 582 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Other liabilities | 146.5 | 93.0 | 85 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total Liabilities | 6172.6 | 6428.7 | 6064 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Temporary Equity | 19.7 | 46.1 | 24 | USD millions | Reported as redeemable noncontrolling interest, between liabilities and equity | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Retained earnings | 1084.6 | 1010.7 | 1380 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Accumulated other comprehensive loss | -1.0 | -1.0 | -1 | USD millions | Reported | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total Equity | 1083.6 | 1009.7 | 1379 | USD millions | Reported as total Churchill Downs Incorporated shareholders' equity | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Total Debt | 4907.2 | 5130.2 | 4722 | USD millions | Calculated: current maturities plus long-term debt plus notes payable, each net of issuance costs and discounts; carrying value, not principal | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |
| Cash & Equivalents | 175.5 | 200.6 | 167 | USD millions | Reported: cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3 |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | LTM 2026-09-30 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Profitability | Adjusted EBITDA margin in % | 42.39 | 41.19 | 41.44 | Fell from FY2024 to FY2025 and recovered in the last twelve months | Calculated as Adjusted EBITDA over total net revenue; the LTM figure is 1245.3 over 3004.9 |
| Growth | Net revenue growth in % | 11.07 | 7.01 | Not calculable: the prior-year last-twelve-months revenue needs nine months 2024, which is not supplied | Slowing | FY2024 growth is over FY2023 revenue of 2461.7 in the annual report; nine months 2026 revenue grew 3.50% over nine months 2025 |
| Returns | Annual dividend per share in USD | 0.409 | 0.438 | 0.469 declared 2026-10-27 | Rose each year | Declared per outstanding share; payable 2027-01-05 |
| Earnings | Diluted EPS attributable to the issuer in USD | 5.68 | 5.29 | Not calculable: per-share amounts are not additive across changing share counts | Fell from FY2024 to FY2025 | Nine months 2026 diluted EPS was 5.73 against 4.55 a year earlier |
| Cash conversion | Distributions over equity income in % | Not supplied: not extracted for 2024 | 83.21 | Not calculable: nine-month ratios shown in the note | Not applicable | Nine months 2026 was 92.17% and nine months 2025 was 86.67% |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is unadjusted earnings before interest, tax, depreciation and amortization | The issuer states only Adjusted EBITDA, which includes its share of equity-investee EBITDA and the noncontrolling interest portion and adds back stock-based compensation, pre-opening, transaction, impairment and other items | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 | All | Adjusted exceeds calculated EBITDA by 88.1 over the last twelve months and 142.1 in FY2025 | Financial foundation; Fundamental credit | Use calculated EBITDA as the primary denominator and show Adjusted EBITDA beside it, labelled |
| Net debt | Total debt at carrying value less cash and cash equivalents | The quarterly report's net debt line is total debt net of current maturities and issuance costs, with cash not deducted: 4063 at 2026-09-30 against this module's 4555 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 43–44 | 2025-12-31 and 2026-09-30 | 492 at 2026-09-30 | Financial foundation; Fundamental credit | Use net debt after cash and keep the filing's label for the filing's number |
| Net bank leverage | Not part of the method | Quoted as 3.8x for Q1 and Q3 2026 and 3.7x for Q2 2026 with no definition or calculation | EX-99.1_2026-04-22_ex991pressrelease04-22x26.htm.jsonl, page 1; EX-99.1_2026-07-29_ex991pressrelease07-29x26.htm.jsonl, page 1; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, page 1 | Q1, Q2, Q3 2026 | Principal debt of 4748 over last-twelve-months Adjusted EBITDA of 1245.3 is 3.81x, which matches at one decimal | Financial foundation; Fundamental credit | Do not adopt the issuer's measure; Analyst Judgement is that it is probably principal debt over Adjusted EBITDA, which the sources do not confirm |
| Debt carrying value against principal | Carrying value, with principal shown separately | Principal 4748 and carrying 4722 at 2026-09-30; principal 5155.1 and carrying 5130.2 at 2025-12-31 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 | 2025-12-31 and 2026-09-30 | 26 and 24.9 | Financial foundation | Carrying value is the leverage numerator; principal appears in the reconciliation |
| Maturity dates of the 2030 and 2031 senior notes | One stated maturity date for each note | The annual report states 2030-04-13 and 2031-04-25; the three 2026 quarterly reports state 2030-04-01 and 2031-05-01 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 111–112; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16 | 2025-12-31 and 2026 | None on the years; the days differ by 12 and 6 | Financial foundation; Fundamental credit | Use the later quarterly report dates and flag the conflict; the indentures would resolve it |
| Segment revenue | External revenue by segment sums to total net revenue | Segment Adjusted EBITDA tables state revenue including intercompany: 714 plus All Other 2 less 20 of eliminations is 696 for Q3 2026 | EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, pages 13–14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 25–26 | Every period | 20 in Q3 2026 and 85 in nine months 2026 | Financial foundation | Use external-customer revenue for revenue and the Adjusted EBITDA tables for segment earnings |
| Cash | Cash and cash equivalents excluding restricted cash | Cash flow statement cash includes restricted cash: 259 at 2026-09-30 against 167 and 92 on the balance sheet | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 2–4 | Every period | 92 at 2026-09-30 | Financial foundation | Net debt deducts cash and cash equivalents only |
| Perimeter | One consolidated perimeter | The company says it is exploring a sale of nine wholly owned regional gaming properties representing USD 280 million to USD 300 million of annual Adjusted EBITDA | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 32 | From 2026-07-29 | Material to EBITDA if completed; no held-for-sale presentation is printed | Financial foundation; Fundamental credit | Keep one perimeter and note the exploration; no pro forma is stated by the sources |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Statement tables, net debt and leverage | Ready with Limitations | Calculated reported EBITDA; mixed precision; interim ratios on a last-twelve-months basis | Treat leverage as approximate to the second decimal |
| Interest cover | Ready | Cash interest paid is printed for each period | None |
| Debt structure and priority | Not Ready | No legal rank, guarantor scope or executed documents | Obtain the credit agreement and indentures |
| Covenant headroom | Not Ready | Covenant results printed only at 2025-12-31 | Obtain the compliance certificate or definitions |
| Pro forma position | Ready with Limitations | Redemption effect is nil on net debt; repurchase effect is implied; dividend aggregate not stated | Update when a fourth quarter release is supplied |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2031 Revolver | Revolving credit facility | 79 | 79 | 79 | 1200 | Credit Agreement collateralized by substantially all wholly owned assets | Not supplied: ranking is not stated | USD | 79 | Not applicable | SOFR plus applicable margin; 0.25% commitment fee | Floating | SOFR | 150 | Not applicable | September 2031, with springing maturity | 0 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 13–14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23 |
| Term Loan A due 2031 | Term loan | 1063 | 1069 | 1069 | Not applicable | Credit Agreement collateralized by substantially all wholly owned assets | Not supplied: ranking is not stated | USD | 1063 | Not applicable | SOFR plus applicable margin | Floating | SOFR | 150 | Not applicable | September 2031, with springing maturity | 55 (1.25% of 1,100 each quarter, four quarters) | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 13–14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23 |
| Term Loan B due 2033 | Term loan | 495 | 500 | 500 | Not applicable | Credit Agreement collateralized by substantially all wholly owned assets | Not supplied: ranking is not stated | USD | 495 | Not applicable | SOFR plus 175 bp | Floating | SOFR | 175 | Not applicable | 2033-09-25 | 5 (0.25% of 500 each quarter, four quarters) | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 13–14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23 |
| 2027 Senior Notes | Senior unsecured notes | 599 | 600 | Not applicable | Not applicable | Described as senior unsecured | Not supplied: ranking is not stated | USD | 599 | Not applicable | 5.50% | Fixed | Not applicable | Not applicable | Not applicable | 2027-04-01; redeemed 2026-10-19 | 0 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28 |
| 2028 Senior Notes | Senior unsecured notes | 700 | 700 | Not applicable | Not applicable | Described as senior unsecured | Not supplied: ranking is not stated | USD | 700 | Not applicable | 4.75% | Fixed | Not applicable | Not applicable | Not applicable | 2028-01-15 | 0 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23 |
| 2030 Senior Notes | Senior unsecured notes | 1192 | 1200 | Not applicable | Not applicable | Described as senior unsecured; issued by a wholly owned subsidiary | Not supplied: ranking is not stated | USD | 1192 | Not applicable | 5.75% | Fixed | Not applicable | Not applicable | Not applicable | 2030-04-01 in the quarterly reports; 2030-04-13 in the annual report | 0 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 111 |
| 2031 Senior Notes | Senior unsecured notes | 594 | 600 | Not applicable | Not applicable | Described as senior unsecured | Not supplied: ranking is not stated | USD | 594 | Not applicable | 6.75% | Fixed | Not applicable | Not applicable | Not applicable | 2031-05-01 in the quarterly reports; 2031-04-25 in the annual report | 0 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 112 |

The instrument carrying values add to the Total Debt of 4722 at 2026-09-30, and no financing cost adjustment row is needed because each instrument's carrying value is disclosed; Term Loan B-1 due 2028 was repaid in the third quarter of 2026.
Basis: 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 13–15; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23; calculation C1

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 18 |
| Fields total | 19 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

## Calculations

Each row recomputes a figure from printed inputs, in USD millions unless stated, with the result as used in the tables above.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Total Debt at carrying value | 2024-12-31: 63.1 + 1,767.9 + 3,076.2. 2025-12-31: 63.1 + 1,985.9 + 3,081.2. 2026-09-30: 659 + 1,578 + 2,485; instrument carrying values 79 + 1,063 + 495 + 599 + 700 + 1,192 + 594 | 4,907.2; 5,130.2; 4,722 and 4,722 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 23 |
| C2 | Net debt after cash | 4,907.2 - 175.5; 5,130.2 - 200.6; 4,722 - 167 | 4,731.7; 4,929.6; 4,555 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 2–3 |
| C3 | EBITDA and last twelve months | EBITDA (Reported) = net income + interest + tax + depreciation and amortization: FY2024 429.1 + 289.8 + 144.1 + 199.1 = 1,062.1; FY2025 385.5 + 297.7 + 146.9 + 233.1 = 1,063.2; nine months 2025 334 + 222 + 115 + 174 = 845; nine months 2026 405 + 211 + 147 + 176 = 939. Last twelve months = FY2025 + nine months 2026 - nine months 2025: EBITDA (Reported) 1,063.2 + 939 - 845; Adjusted EBITDA 1,205.3 + 998 - 958; cash interest 294.5 + 173 - 193; revenue 2,925.9 + 2,339 - 2,260 | EBITDA (Reported) 1,157.2; Adjusted EBITDA 1,245.3; cash interest 274.5; revenue 3,004.9; Adjusted EBITDA less EBITDA (Reported) 1,245.3 - 1,157.2 = 88.1 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 77–79; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |
| C4 | Total debt over EBITDA | 5,130.2 / 1,063.2; 4,907.2 / 1,062.1; 4,722 / 1,157.2 | 4.83x at 2025-12-31; 4.62x at 2024-12-31; 4.08x at 2026-09-30 | See calculation C1 and calculation C3 |
| C5 | Net debt and cover ratios | Net debt / EBITDA: 4,731.7 / 1,062.1 = 4.46; 4,929.6 / 1,063.2 = 4.64; 4,555 / 1,157.2 = 3.94. Net debt / Adjusted EBITDA: 4,929.6 / 1,205.3 = 4.09; 4,555 / 1,245.3 = 3.66. EBITDA / cash interest: 1,062.1 / 306.8 = 3.46; 1,063.2 / 294.5 = 3.61; 1,157.2 / 274.5 = 4.22. Adjusted EBITDA / cash interest: 1,245.3 / 274.5 = 4.54 | As listed | See calculation C2 and calculation C3 |
| C6 | Change in net leverage attributed | Year-end 2025 net debt over year-end 2025 EBITDA 4.64; year-end 2025 net debt over last-twelve-months EBITDA 4,929.6 / 1,157.2 = 4.26; 2026-09-30 net debt over last-twelve-months EBITDA 3.94. EBITDA effect 4.64 - 4.26; net debt effect 4.26 - 3.94; total 4.64 - 3.94 | 0.38x from EBITDA; 0.32x from net debt; 0.70x in total | See calculation C5 |
| C7 | Free cash flow after capital expenditure | Net cash from operating activities less capital maintenance less capital project expenditures: FY2024 771.7 - 83.6 - 463.4; FY2025 769.8 - 70.2 - 204.7; nine months 2025 674 - 53 - 172; nine months 2026 660 - 57 - 119; last twelve months 755.8 - 74.2 - 151.7 | 224.7; 494.9; 449; 484; 529.9 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 78–79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| C8 | Debt movement | Principal 5,155 - 4,748; carrying value 5,130.2 - 4,722; revolver 657.0 - 79 and 657.0 - 377.5; net debt 4,929.6 - 4,555 | Principal down 407; carrying value down 408.2; revolver down 578 in 2026 and up 279.5 in 2025; net debt down 374.6 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 43; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 107 |
| C9 | Liquidity | Revolver commitment 1,200 less drawn less letters of credit: 2025-12-31 1,200 - 657.0 - 8.2; 2026-09-30 1,200 - 79 - 10. Cash plus undrawn 167 + 1,111. Pro forma for the 2027 notes redemption: undrawn 1,111 - 600; drawn 79 + 600; cash plus undrawn 167 + 511 | 534.8 and 1,111; 1,278; pro forma undrawn 511, drawn 679 and cash plus undrawn 678 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28 |
| C10 | Pro forma net debt and leverage | Redemption funded from the revolver: 4,555 + 0 = 4,555; 4,555 / 1,157.2 = 3.94. Implied repurchases: 382 - 306 = 76; 4,555 + 76 = 4,631; 4,631 / 1,157.2 = 4.00 | 4,555 and 3.94x; 76; 4,631 and 4.00x | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 28; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 43 |
| C11 | Equity-investee cash conversion | Distributions over equity income: FY2025 116.0 / 139.4; nine months 2026 106 / 115; nine months 2025 91 / 105 | 83.21%; 92.17%; 86.67% | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 78; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 4 |
| C12 | EBITDA bridge FY2025 | 1,063.2 + 30.2 + 11.7 + 10.1 + 5.1 + 47.5 + 38.6 - 1.1 | 1,205.3, equal to Adjusted EBITDA; adjustments total 142.1 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126 |
| C13 | Springing maturity date | 2028-01-15 less 91 days | 2027-10-16 | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 14; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 16 |
| C14 | Net bank leverage check | Principal 4,748 / last-twelve-months Adjusted EBITDA 1,245.3; filing net debt 4,063 against net debt after cash 4,555 | 3.81x; difference 492 (4,555 - 4,063) | 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 44; EX-99.1_2026-10-28_ex991pressrelease10-28x26.htm.jsonl, page 1 |
| C15 | Deferred revenue | Current plus non-current: 2025-12-31 55 + 15 (10-K 54.7 + 15.4 = 70.1); 2026-09-30 36 + 12 | 70 and 48, a fall of 22 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 77; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 17 |
| C16 | Statement identities | Assets = liabilities + temporary equity + equity: 7,467 = 6,064 + 24 + 1,379; 7,484.5 = 6,428.7 + 46.1 + 1,009.7; 7,275.9 = 6,172.6 + 19.7 + 1,083.6. Cash flows: 769.8 - 471.5 - 262.5 = 35.8 and 252.7 + 35.8 = 288.5; 674 - 421 - 237 = 16 and 252 + 16 = 268; 660 - 178 - 512 = -30 and 289 - 30 = 259 | All hold with no difference; FY2024 net change of 30.9 includes 1.0 of discontinued operations and is left as a gap | 10-K_2025-12-31_chdn-20251231.htm.jsonl, pages 77–79; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, pages 2–4 |
| C17 | Segment sums | External revenue: 1,148 + 392 + 799 = 2,339; 308 + 116 + 272 = 696. Adjusted EBITDA FY2025: 637.0 + 177.3 + 483.0 - 92.0 | 2,339; 696; 1,205.3 | 10-K_2025-12-31_chdn-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_chdn-20260930.htm.jsonl, page 27 |

## Gaps

- The legal rank, guarantor scope and cumulative priority of every facility at 2026-09-30 are not stated, which leaves the debt stack unranked and limits any priority or recovery reading; severity High; the action is to supply the credit agreement and the indentures.
- Covenant levels and the issuer's actual ratios are printed only at 2025-12-31, so covenant headroom at 2026-09-30 is not established and is not inferred; severity High; the action is to supply the covenant section of a later filing or a compliance certificate.
- The revolver availability at 2024-12-31 is not stated, so the undrawn facilities for that year are not supplied; severity Low; the action is to read the FY2024 annual report.
- The annual report's net change in cash for FY2024 includes cash flows of discontinued operations that the three activity totals exclude, so the net change in cash for that year is left as not supplied; severity Low; the action is to treat the activity totals as the comparable measure.
- The filings print dashes rather than amounts for All Other revenue in the interim periods, for impairments in nine months 2026 and Q3 2026, for the noncontrolling interest in Q3 2026, for the gain on settlement of a liability, the acquisition of gaming rights and impairments in some cash flow periods, for debt issuance costs in nine months 2025, and for income taxes receivable, income taxes payable and dividends payable on some balance sheet dates; each is left as not supplied rather than read as zero; severity Low.
- The cash flow lines for the acquisition of a noncontrolling interest and for discontinued operations are printed only in some periods, so the other periods are not supplied; severity Low.
- The last-twelve-months revenue of All Other and the 2025-09-30 balance sheet are not available, so those cells of the credit metrics table are not calculable; severity Low.
- The aggregate dividend declared on 2026-10-27 is not stated and the share count at the record date is not stated, so the dividend's effect on net debt is not supplied; severity Medium; the action is to update when the payment is reported.
- The redemption price and accrued interest on the 2027 senior notes are not stated, so a premium or accrued interest paid on 2026-10-19 is not reflected; severity Low.
- The October 2026 repurchases are implied by the change in remaining authority and are not stated directly; severity Medium; the action is to confirm from the fourth quarter report.
- The debt maturity ladder is dated 2025-12-31 and no later table is printed, so the maturity profile after the September 2026 refinancing is not stated; severity Medium; the action is to obtain the amortization schedules.
- The proceeds and repayments of borrowings in nine months 2026 exclude USD 198 million of debt exchanged non-cash in the refinancing, so gross financing flows do not equal the change in debt; severity Low.
- Diluted earnings per share and share counts are kept out of the statement tables, which hold amounts in USD millions only; severity Low.

## Next module

The orchestrator selects the next module.
