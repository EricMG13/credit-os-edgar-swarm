---
issuer_id: alks
module_id: CP-1
analysis_date: 2026-11-05
run_id: alks-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Ready with limitations
---

## Request

Financial foundation for Alkermes plc. (issuer id alks), as of 2026-11-05, on the credit snapshot pathway. Scope: statements, debt, net debt, leverage and interest cover from FY2024 to the nine months ended 2026-09-30.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-25 | e4cb39ef2746983905a66c4851e17231fe0e2b3eb3dd9d346653644971686601 | Audited FY2025 and FY2024 statements, debt history, bridge facility and term loan terms |
| 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-05 | 2f002a6c3ee21ba1a12ed08afd7616a7de0cb6e62154bfb1ecb118ba4eafd45f | Read for the debt note; no figure is taken from it that the Q1 release does not also state |
| 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-28 | bc67cf08c7dfc8de310d0ecdd1030e2a1391c6b7ce68e53f0b348219bcf79e99 | Read for the debt note and as a cross-check of the quarterly series |
| 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-03 | df6328c67d9ab03d30760e47eacac03760e7e83fb341e7073082128f2c7068d4 | Latest balance sheet, nine-month statements, debt note, liquidity, product sales |
| EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-05 | 3f53152d2ff381e382b1d7a092db23f6a1d1dce5883995e4eda0a38a2d5d57a8 | Q1 2026 and Q1 2025 revenue, EBITDA and adjusted EBITDA |
| EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-28 | 4e5567773d88766be4958174400b81baacad01bd80fe607c8eb27ade6994b31f | Q2 2026 and Q2 2025 revenue, EBITDA and adjusted EBITDA |
| EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-03 | 041cf8e725b3d45a5b701a4d1acae145f94c2d37b75244f3f5fe173ac5392fc6 | Q3 and nine-month EBITDA and adjusted EBITDA reconciliation, product sales |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 0e5b581d2f91b190b3dfd8805d4398aeed4711c3f5c9d4876162d9c95cb1b0ca | Effective source set, period coverage and the known absence of legal documents, ratings and prices |

## Findings

### Bottom line

Alkermes has gone from net cash to net debt of USD 866.42 million at 2026-09-30, or 5.93x reported last-twelve-months EBITDA, after funding the Avadel acquisition with senior secured term loans. The ratio overstates the steady-state burden because that EBITDA carries acquisition costs and includes LUMRYZ only from the closing date, yet the issuer's adjusted EBITDA cannot be annualised from the sources.
Basis: calculation C3; calculation C5; calculation C7; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–29

At year-end 2025 the company held net cash of USD 388.57 million and no debt, so the change is acquisition-driven. Cash and cash equivalents are USD 631.31 million and scheduled principal is only USD 26.50 million in 2027, but cash interest paid and any undrawn committed facility are not stated, so interest cover and total liquidity cannot be fully established.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29; calculation C5; calculation C14

### Leverage and coverage

Leverage came from the acquisition rather than from operations: gross debt rose from nil to USD 1,497.73 million of term-loan carrying value because the Avadel purchase, with preliminary consideration of USD 2,306.92 million at the closing on 2026-02-12, was funded by a senior secured term loan A, a term loan B and cash that had been escrowed at year-end. Net debt of USD 866.42 million is after USD 631.31 million of cash and equivalents and leaves out USD 156.26 million of investments; on the issuer's broader cash and investments measure of USD 787.57 million, net debt would be USD 710.16 million, so the choice of cash definition moves net debt by about one fifth.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–28; calculation C5; calculation C10

Reported last-twelve-months EBITDA of USD 146.17 million is far below the USD 285.59 million of FY2025 because reported EBITDA is struck after USD 118.14 million of Avadel acquisition costs in the nine months that the issuer adds back, and because LUMRYZ contributes only from the closing date. The issuer's adjusted EBITDA for the nine months to 2026-09-30 is USD 339.54 million against USD 293.66 million a year earlier, which says the underlying earnings base has grown, but no adjusted last-twelve-months figure can be built because the adjusted measure for FY2025 is not stated, so leverage on the issuer's own measure is not calculable and the reported ratio is the only one supported.
Basis: EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; calculation C2; calculation C3; calculation C7

Interest cover is calculable only for FY2024, at 19.66x on USD 23.01 million of cash interest paid, which is before the acquisition debt existed. For 2025 the cash flow statement prints a dash for cash interest and the 2026 quarterly reports give cash paid for taxes only, so cover on the acquired structure is not calculable; interest expense of USD 74.37 million in the nine months to 2026-09-30, which includes bridge facility costs of about USD 7.40 million, shows the scale of the charge but is not a cash figure and is not used as the denominator.
Basis: 10-K_2025-12-31_alks-20251231.htm.jsonl, page 167; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28–29; calculation C8

The strongest evidence against reading the leverage as high is the direction of the issuer's adjusted earnings and the fact that reported EBITDA is depressed by items the issuer treats as one-off; it would prevail if the fourth-quarter 2025 release shows adjusted EBITDA near the level of the 2026 quarters, which would put adjusted last-twelve-months leverage well below the reported ratio. Against that, the share-based compensation and acquisition-cost add-backs are large relative to reported EBITDA, so the adjusted figure rests on exclusions rather than on cash earnings.
Basis: EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; calculation C2

### Liquidity and maturities

Liquidity is cash-based: cash and cash equivalents are USD 631.31 million, with a further USD 156.26 million of investments that the issuer counts in its broader measure, and no undrawn committed facility is described in the sources. Scheduled principal is light in the near term, USD 26.50 million in 2027, USD 40.56 million in 2028 and USD 45.25 million a year to 2030, then USD 1,347.56 million falls due in 2031 when term loan A matures in February 2031 and term loan B in August 2031, so the refinancing exposure sits at the end of the maturity profile rather than in the next two years. Both loans float on Term SOFR; the August 2026 amendment cut the margin on term loan A by 0.75 percentage points and on term loan B by 0.50 percentage points, and two zero-cost collars with a cap of 5.25% were added in October 2026.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28–30; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49; calculation C5; calculation C6

The credit agreement requires a maximum secured net leverage ratio and a minimum interest coverage ratio for everything but term loan B, and the company states that it was in compliance at 2026-09-30, but neither the levels nor the reported ratios are printed, so covenant headroom is not established and nothing is inferred about it.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28–30

### Cash flow and data quality

Operating cash flow fell to USD 72.92 million in the nine months to 2026-09-30 from USD 350.69 million a year earlier because working capital absorbed USD 156.81 million, mainly a fall in payables and accrued expenses, and acquisition costs and higher interest weighed on earnings; capital spending was only USD 15.64 million, leaving free cash flow of USD 57.28 million before the acquisition outlay. Accrued sales discounts, allowances and reserves, a non-interest-bearing obligation to payers that funds operations, rose to USD 323.41 million from USD 247.13 million, of which USD 214.93 million is Medicaid rebates, so a shortfall in net sales would be amplified by rebates that are paid in arrears.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 50–51; calculation C9; calculation C12

Debt excludes a contingent consideration liability of USD 136.92 million, which becomes payable in cash if the milestone attached to the Avadel contingent value right is achieved (the company expects that to be determined by the end of 2027), and operating lease liabilities of USD 73.35 million; both are credit-relevant claims outside the debt figure. The purchase price allocation is preliminary for up to one year from the closing date, so goodwill and intangible values can still change. No net debt event after 2026-09-30 is stated; the October 2026 collars change no debt.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 16–17; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6 and 53; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 0.00 | -0.64 | x | Calculated on reported EBITDA of the year (derived, continuing operations basis) and nil debt; net figure is net cash. |
| FY2025 / 2025-12-31 | 0.00 | -1.36 | x | Calculated on reported EBITDA of the year (derived) and nil debt; net figure is net cash before the acquisition. |
| 2026-09-30 | 10.25 | 5.93 | x | Last twelve months to 2026-09-30 on reported EBITDA (FY2025 plus nine months 2026 less nine months 2025); includes LUMRYZ only from 2026-02-12 and is after acquisition costs; carrying-value debt. |

Reported EBITDA is derived for the two fiscal years and is a last-twelve-months figure after acquisition costs at 2026-09-30, so the interim ratios are not comparable with the annual ones.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 19.66 | x | Reported EBITDA of the year over cash interest paid of the year (derived EBITDA); before the acquisition. |
| FY2025 / 2025-12-31 | Not supplied: cash interest paid for 2025 is a dash in the cash flow statement, so cover cannot be calculated | x | No cash interest paid is stated; the bridge facility costs of USD 12.277 million total interest expense were not paid in cash in the year as far as the statement shows, but no source states zero. |
| 2026-09-30 | Not supplied: cash interest paid is not stated in the quarterly reports | x | The interim reports state cash paid for taxes only; interest expense of the nine months was USD 74.368 million, a different measure that is not used here. |

Cover can be stated only for FY2024, before the acquisition debt, because cash interest paid is not disclosed afterwards.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 291.146 | Not supplied: no revolving or other undrawn committed facility is described in the sources read | US$m | Cash and cash equivalents only (excludes restricted cash and investments); balance-sheet date 2024-12-31. |
| FY2025 / 2025-12-31 | 388.570 | Not supplied: no revolving or other undrawn committed facility is described in the sources read | US$m | Cash and cash equivalents only (excludes restricted cash and investments); balance-sheet date 2025-12-31. |
| 2026-09-30 | 631.314 | Not supplied: no revolving or other undrawn committed facility is described in the sources read | US$m | Cash and cash equivalents only (excludes restricted cash and investments); balance-sheet date 2026-09-30. |

Cash excludes restricted cash and investments, and the undrawn facility column is not supplied because no facility is described.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 6.625 | US$m | Scheduled principal for the remainder of calendar 2026 from 2026-09-30. |
| FY2027 | 26.500 | US$m | Scheduled principal of the two term loans. |
| FY2028 | 40.563 | US$m | Scheduled principal of the two term loans. |
| FY2029 | 45.250 | US$m | Scheduled principal of the two term loans. |
| FY2030 | 45.250 | US$m | Scheduled principal of the two term loans. |
| FY2031 | 1,347.562 | US$m | The source row reads Thereafter; both term loans mature in 2031 (term loan A 2031-02-12, term loan B 2031-08-12), so the whole row falls in 2031. |

Principal is shown at its scheduled amount, not at carrying value, and the last row combines both term loans' final maturities in 2031.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | LTM to 2026-09-30 | Unit | Basis and source |
|---|---|---|---|---|---|---|---|
| Revenue | 1,557.632 | 1,475.899 | 1,091.352 | 1,369.052 | 1,753.599 | US$m | Reported; LTM calculated (C4). 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 |
| EBITDA (Reported) | 452.411 | 285.588 | 221.217 | 81.798 | 146.169 | US$m | FY2024 and FY2025 derived (C1, C2); interim as stated by the issuer; LTM calculated (C3). EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| EBITDA (Adjusted, issuer) | Not supplied: not stated for FY2024 | Not supplied: not stated for FY2025 | 293.658 | 339.544 | Not calculable: FY2025 adjusted EBITDA is not stated | US$m | Issuer-adjusted. EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| Net income (loss) | 367.070 | 241.664 | 192.323 | -49.692 | -0.351 | US$m | Reported; LTM calculated (C4). 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 |
| Cash flows provided by operating activities | 439.124 | 520.754 | 350.685 | 72.917 | 242.986 | US$m | Reported; LTM calculated (C4). 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 |
| Additions of property, plant and equipment | -33.484 | -40.420 | -40.440 | -15.638 | -15.618 | US$m | Reported; outflow negative. 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 |
| Free cash flow (operating cash flow less capital additions) | 405.640 | 480.334 | 310.245 | 57.279 | 227.368 | US$m | Calculated (C9); levered, working capital included |
| Gross debt at period end | 0.000 | 0.000 | Not supplied: no balance sheet at 2025-09-30 is in the sources | 1,497.731 | 1,497.731 | US$m | Carrying value (C5). 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 |
| Cash and cash equivalents at period end | 291.146 | 388.570 | Not supplied: no balance sheet at 2025-09-30 is in the sources | 631.314 | 631.314 | US$m | Reported. 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5 |
| Net debt at period end | -291.146 | -388.570 | Not supplied: no balance sheet at 2025-09-30 is in the sources | 866.417 | 866.417 | US$m | Calculated (C5); a negative figure is net cash |
| Total debt / EBITDA | 0.00 | 0.00 | Not supplied: no balance sheet at 2025-09-30 is in the sources | Not supplied: interim balance, the last-twelve-months column holds the ratio | 10.25 | x | Calculated (C7); reported EBITDA |
| Net debt / EBITDA | -0.64 | -1.36 | Not supplied: no balance sheet at 2025-09-30 is in the sources | Not supplied: interim balance, the last-twelve-months column holds the ratio | 5.93 | x | Calculated (C7); reported EBITDA; negative is net cash |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 0.000 | 291.146 | -291.146 | US$m | Reported. Gross debt nil: the former term loans of USD 289.5 million were prepaid in December 2024. Cash is cash and cash equivalents only; investments of USD 533.670 million (short-term USD 460.522 million, long-term USD 73.148 million) are not counted. Principal equals carrying value (nil). |
| FY2025 / 2025-12-31 | 0.000 | 388.570 | -388.570 | US$m | Reported. Gross debt nil: the bridge facility was terminated undrawn and the comparative debt table of the 2026 report prints a dash. Cash is cash and cash equivalents only; restricted cash of USD 731.206 million escrowed for the acquisition and investments of USD 199.790 million are not counted, so net debt is a net cash position before the acquisition. Pro forma for the acquisition: not stated by the sources. |
| 2026-09-30 | 1,497.731 | 631.314 | 866.417 | US$m | Reported. Gross debt is carrying value of term loan A USD 735.016 million plus term loan B USD 762.715 million, net of USD 10.4 million unamortised discount and USD 3.6 million unamortised financing costs, current plus long-term, with no finance leases inside debt; principal USD 1,511.750 million (calculation C6). Cash is cash and cash equivalents only; investments of USD 156.260 million are not counted. Interim balance sheet. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1,511.750 | -14.019 | 1,497.731 | US$m | Principal is the scheduled maturities of both term loans. Reconciling items are the unamortised original issue discount of USD 10.4 million and unamortised deferred financing costs of USD 3.6 million, both stated rounded to USD 0.1 million, plus a rounding residual of USD 0.019 million (calculation C6); no debt is left out of the ladder. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | Sources read: the three 2026 quarterly reports, the three earnings releases and the 2025 annual report. The October 2026 interest rate collars are zero-cost and change no net debt; no issue, repayment, acquisition, disposal or dividend after 2026-09-30 is stated. The acquisition of 2026-02-12 is inside the 2026-09-30 figures; against the FY2025 year end it is a later event for which the sources state no pro forma net debt. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| Q1 2025 | 306.510 | 45.579 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |
| Q2 2025 | 390.657 | 126.533 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |
| Q3 2025 | 394.185 | 121.546 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |
| Q4 2025 | 384.547 | Not supplied: the fourth-quarter 2025 release is not among the sources and the annual report states no adjusted EBITDA | US$m | Revenue is calculated as FY2025 less nine months 2025 because no fourth quarter is reported (calculation C4); quarter of three months. |
| Q1 2026 | 392.911 | 80.261 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |
| Q2 2026 | 496.009 | 139.218 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |
| Q3 2026 | 480.132 | 120.065 | US$m | Quarter of three months; Adjusted EBITDA is issuer-adjusted (EBITDA plus share-based compensation, Avadel acquisition costs and the contingent consideration change), as stated in the earnings release. |

Adjusted EBITDA is the issuer's own measure, and the fourth quarter of 2025 has revenue only because no release for it is among the sources.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Term Loan A Facility, due 2031-02-12 | 1 | Yes | 735.016 | 10.25 | US$m | Obligors: Alkermes plc (TopCo Borrower), Alkermes, Inc. (U.S. Borrower) and Alkermes Finance LLC (U.S. Co-Borrower); guaranteed by subsidiary guarantors, who are not named, and secured by a lien on substantially all assets of the borrowers and guarantors. Amount is carrying value at 2026-09-30; both term loans are described as senior secured under one credit agreement and there is no other debt, so each is ranked 1, although the filings do not state the priority between the two; cumulative leverage is therefore the total debt of USD 1,497.731 million over last-twelve-months reported EBITDA of USD 146.169 million. |
| Term Loan B Facility, due 2031-08-12 | 1 | Yes | 762.715 | 10.25 | US$m | Obligors: Alkermes plc (TopCo Borrower), Alkermes, Inc. (U.S. Borrower) and Alkermes Finance LLC (U.S. Co-Borrower); guaranteed by subsidiary guarantors, who are not named, and secured by a lien on substantially all assets of the borrowers and guarantors. Amount is carrying value at 2026-09-30; both term loans are described as senior secured under one credit agreement and there is no other debt, so each is ranked 1, although the filings do not state the priority between the two; cumulative leverage is therefore the total debt of USD 1,497.731 million over last-twelve-months reported EBITDA of USD 146.169 million. The term loan B carries no financial maintenance covenant. |

Both facilities share one rank, so cumulative leverage is the same for each and equals total debt over last-twelve-months reported EBITDA.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), nine months 2026 | 81.798 | US$m | Opening: the issuer's EBITDA of the nine months to 2026-09-30 (net loss plus interest, tax, depreciation and amortization). Closing: issuer-adjusted EBITDA. |
| Share-based compensation | 112.624 | US$m | Issuer's label; classification share-based compensation; realisation status not stated; includes USD 18.408 million of acceleration for former Avadel employees. |
| Costs related to the acquisition of Avadel | 118.140 | US$m | Issuer's label; classification transaction costs, inventory fair-value step-up amortisation and integration items as the issuer groups them; realisation status not stated. |
| Change in the fair value of contingent consideration | 26.982 | US$m | Issuer's label; classification other, a non-cash remeasurement of the Avadel contingent value right; realisation status not stated. |
| EBITDA (Adjusted), nine months 2026 | 339.544 | US$m | Closing: issuer-adjusted EBITDA as stated in the earnings release; opening plus the three add-backs equals it exactly. |

The bridge is for the nine months to 2026-09-30 and rests on the issuer's reconciliation, whose add-backs are not classified as realised or unrealised.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 40 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 6 |
| Fields present | 12 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 1 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Product sales, net | 1,083,534 | 1,184,643 | 869,151 | 1,167,118 | 317,423 | 417,280 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Manufacturing and royalty revenues | 474,095 | 291,256 | 222,201 | 201,934 | 76,762 | 62,852 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Research and development revenue | 3 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Total revenues | 1,557,632 | 1,475,899 | 1,091,352 | 1,369,052 | 394,185 | 480,132 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Cost of goods manufactured and sold | 245,331 | 196,457 | 150,248 | 253,910 | 51,591 | 94,220 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Research and development | 245,326 | 323,964 | 230,926 | 337,385 | 81,739 | 121,120 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Selling, general and administrative | 645,238 | 701,522 | 514,326 | 690,720 | 171,773 | 208,502 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Change in fair value of contingent consideration | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 26,982 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 568 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Amortization of acquired intangible assets | 1,101 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 53,958 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 19,698 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Total expenses | 1,136,996 | 1,221,943 | 895,500 | 1,362,955 | 305,103 | 444,108 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Operating income | 420,636 | 253,956 | 195,852 | 6,097 | 89,082 | 36,024 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Interest income | 42,450 | 45,304 | 33,174 | 20,370 | 11,943 | 6,487 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Interest expense | -22,578 | -12,277 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -74,368 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -27,551 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Other income (expense), net | 3,242 | 4,467 | 2,047 | -1,164 | -280 | -223 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Total other income (expense), net | 23,114 | 37,494 | 35,221 | -55,162 | 11,663 | -21,287 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Income (loss) before income taxes | 443,750 | 291,450 | 231,073 | -49,065 | 100,745 | 14,737 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Income tax provision (benefit) | 71,612 | 49,786 | 38,750 | 627 | 17,984 | -1,550 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Net income (loss) from continuing operations | 372,138 | 241,664 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Loss from discontinued operations, net of tax | -5,068 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Net income (loss) | 367,070 | 241,664 | 192,323 | -49,692 | 82,761 | 16,287 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Earnings (loss) per ordinary share, basic | 2.22 | 1.47 | 1.17 | -0.30 | 0.50 | 0.10 | USD per share | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Earnings (loss) per ordinary share, diluted | 2.17 | 1.43 | 1.14 | -0.30 | 0.49 | 0.09 | USD per share | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Weighted average ordinary shares, basic | 165,392 | 164,703 | 164,490 | 167,037 | 165,086 | 167,872 | shares in thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| Weighted average ordinary shares, diluted | 169,198 | 168,743 | 168,445 | 167,037 | 168,510 | 176,370 | shares in thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| EBITDA (Reported) | 452,411 | 285,588 | 221,217 | 81,798 | 96,881 | 62,960 | USD thousands | FY2024 and FY2025 calculated: income before income taxes plus interest expense less interest income plus depreciation and amortization of the cash flow statement (calculation C1 and C2); 9M and Q3 columns as stated by the issuer in its reconciliation | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| EBITDA (Adjusted) | Not supplied: no adjusted EBITDA for FY2024 is stated in the sources | Not supplied: no adjusted EBITDA for FY2025 is stated in the sources | 293,658 | 339,544 | 121,546 | 120,065 | USD thousands | Issuer-adjusted: EBITDA plus share-based compensation, costs related to the Avadel acquisition and the change in fair value of contingent consideration; stated for the 2025 and 2026 interim columns only | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (loss) | 367,070 | 241,664 | 192,323 | -49,692 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Depreciation and amortization | 28,533 | 27,165 | 23,319 | 76,865 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Amortization of inventory step-up | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 72,397 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Share-based compensation expense | 96,637 | 98,716 | 72,441 | 94,216 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Change in fair value of contingent consideration | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 26,982 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Deferred income taxes | 40,522 | 28,774 | 30,494 | 329 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Loss on debt extinguishment | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 538 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Other non-cash charges | 4,512 | 5,311 | 4,396 | 8,091 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Receivables | -52,052 | 50,503 | 30,134 | -74,675 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Contract assets | -4,284 | 4,990 | 4,273 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Inventory | 3,091 | -14,061 | -9,198 | 9,860 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Prepaid expenses and other assets | 2,254 | 852 | -2,984 | -33,610 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Right-of-use assets | 7,215 | 7,549 | 5,628 | 6,660 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Accounts payable and accrued expenses | -57,967 | 100,893 | 27,864 | -116,444 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Accrued sales discounts, allowances and reserves | 8,811 | -25,326 | -19,709 | 53,207 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Contract liabilities | -3,525 | -1,249 | -1,249 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Operating lease liabilities | -10,123 | -10,320 | -7,733 | -8,550 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Other long-term liabilities | 8,430 | 5,293 | 686 | 6,743 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Cash flows provided by operating activities | 439,124 | 520,754 | 350,685 | 72,917 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Additions of property, plant and equipment | -33,484 | -40,420 | -40,440 | -15,638 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the sale of property, plant and equipment | 461 | 1,086 | 34 | 14 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Return of Fountain Healthcare Partners II, L.P. investment | 43 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the sale of the Athlone facility | 97,933 | 1,708 | 1,708 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Business combination, net of cash acquired | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -2,085,073 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Purchases of investments | -486,547 | -364,369 | -308,534 | -65,406 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Sales and maturities of investments | 310,286 | 697,492 | 320,383 | 106,682 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Cash flows provided by (used in) investing activities | -111,308 | 295,497 | -26,849 | -2,059,421 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the issuance of ordinary shares under share-based compensation arrangements | 27,572 | 43,411 | 32,233 | 55,622 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Payments for the repurchase of ordinary shares | -200,282 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -27,696 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Employee taxes paid related to net share settlement of equity awards | -29,637 | -31,032 | -30,766 | -25,211 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the issuance of debt, net | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 1,557,097 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Payments of deferred financing costs | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -2,980 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Prepayment of long-term debt | -289,542 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Principal payments of long-term debt | -2,250 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | -58,790 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Cash flows provided by (used in) financing activities | -494,139 | 12,379 | 1,467 | 1,498,042 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Cash paid for taxes (supplemental) | 2,592 | 5,237 | 3,108 | 34,894 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 439,124 | 520,754 | 350,685 | 72,917 | USD thousands | Reported totals; Cash Interest Paid is cash paid, not the income statement expense | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -111,308 | 295,497 | -26,849 | -2,059,421 | USD thousands | Reported totals; Cash Interest Paid is cash paid, not the income statement expense | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | -494,139 | 12,379 | 1,467 | 1,498,042 | USD thousands | Reported totals; Cash Interest Paid is cash paid, not the income statement expense | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Net Cash Change | -166,323 | 828,630 | 325,303 | -488,462 | USD thousands | Reported totals; Cash Interest Paid is cash paid, not the income statement expense | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Opening Cash | 457,469 | 291,146 | 291,146 | 1,119,776 | USD thousands | Reported; includes restricted cash (USD 731,206 thousand at 2025-12-31) | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Closing Cash | 291,146 | 1,119,776 | 616,449 | 631,314 | USD thousands | Reported; includes restricted cash (USD 731,206 thousand at 2025-12-31) | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 23,010 | Not supplied: the 2025 supplemental line prints a dash for cash paid for interest | Not supplied: the nine-month report gives cash paid for taxes only, not for interest | Not supplied: the nine-month report gives cash paid for taxes only, not for interest | USD thousands | Reported totals; Cash Interest Paid is cash paid, not the income statement expense | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 167–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 7–8 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 291,146 | 388,570 | 631,314 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Restricted cash | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 731,206 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Receivables, net | 384,528 | 334,025 | 459,090 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Investments—short-term | 460,522 | 199,645 | 124,150 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Inventory | 182,887 | 196,625 | 261,098 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Prepaid expenses and other current assets | 91,282 | 79,090 | 105,086 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Contract assets | 4,990 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total current assets | 1,415,355 | 1,929,161 | 1,580,738 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Property, plant and equipment, net | 227,564 | 221,722 | 215,023 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Investments—long-term | 73,148 | 145 | 32,110 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Right-of-use assets | 84,245 | 77,209 | 79,728 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Intangible assets, net and goodwill (one line in the annual report) | 83,917 | 83,842 | Not supplied: the 2026 report shows intangible assets and goodwill on two lines | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Intangible assets, net | Not supplied: the 2024 balance sheet shows one combined line | 815 | 1,741,758 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Goodwill | Not supplied: the 2024 balance sheet shows one combined line | 83,027 | 592,519 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Deferred tax assets | 154,835 | 125,815 | 120,771 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Other assets | 16,503 | 49,099 | 72,876 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Accounts payable and accrued expenses | 185,332 | 289,565 | 294,437 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Accrued sales discounts, allowances and reserves | 272,452 | 247,126 | 323,406 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Operating lease liabilities—short-term | 6,166 | 6,746 | 7,590 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Contract liabilities—short-term | 1,249 | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Current portion of long-term debt | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 26,500 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total current liabilities | 465,199 | 543,437 | 651,933 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Operating lease liabilities—long-term | 69,372 | 63,253 | 65,760 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Contingent consideration | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 136,922 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Long-term debt | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 1,471,231 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Deferred tax liabilities | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | Not supplied: no amount is printed for this line and period (a dash or a line not presented) | 177,206 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Other long-term liabilities | 56,019 | 61,008 | 67,750 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Ordinary shares | 1,767 | 1,810 | 1,852 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Treasury shares, at cost | -419,255 | -450,287 | -503,194 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Additional paid-in capital | 2,860,890 | 3,004,666 | 3,153,839 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Accumulated other comprehensive loss | -1,967 | -2,100 | -3,290 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Accumulated deficit | -976,458 | -734,794 | -784,486 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total Assets | 2,055,567 | 2,486,993 | 4,435,523 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total Liabilities | 590,590 | 667,698 | 2,570,802 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total Equity | 1,464,977 | 1,819,295 | 1,864,721 | USD thousands | Reported | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Total Debt | 0 | 0 | 1,497,731 | USD thousands | Balance-sheet carrying value, current plus long-term, net of discount and issuance costs; nil at FY2024 and FY2025 (no debt line; the comparative debt table of the 2026 report prints a dash and the former term loans were prepaid in December 2024); at 9M 2026 current portion 26,500 plus long-term 1,471,231 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| Cash & Equivalents | 291,146 | 388,570 | 631,314 | USD thousands | Cash and cash equivalents only; excludes restricted cash and investments | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 0.000 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | 452.411 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | FY2024 / 2024-12-31 | USD | US$m | 0.00 | Calculated | Tier 1 audited | Derived EBITDA on a continuing-operations basis; debt nil. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -291.146 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | 452.411 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | FY2024 / 2024-12-31 | USD | US$m | -0.64 | Calculated | Tier 1 audited | Derived EBITDA on a continuing-operations basis; debt nil. A negative ratio is net cash. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 452.411 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | 23.010 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168 | FY2024 / 2024-12-31 | USD | US$m | 19.66 | Calculated | Tier 1 audited | Before the acquisition debt; cash interest paid from the supplemental cash flow disclosure. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 0.000 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Not supplied: adjusted EBITDA for FY2024 is not stated in the sources | Not supplied | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2024 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -291.146 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Not supplied: adjusted EBITDA for FY2024 is not stated in the sources | Not supplied | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2024 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: adjusted EBITDA for FY2024 is not stated in the sources | Not supplied | 23.010 | Net debt data period; supplemental cash flow disclosure | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2024 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 0.000 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | 285.588 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | FY2025 / 2025-12-31 | USD | US$m | 0.00 | Calculated | Tier 1 audited | Derived EBITDA on a continuing-operations basis; debt nil. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -388.570 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | 285.588 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | FY2025 / 2025-12-31 | USD | US$m | -1.36 | Calculated | Tier 1 audited | Derived EBITDA on a continuing-operations basis; debt nil. A negative ratio is net cash. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 285.588 | Statement table T4.4 EBITDA (Reported), derived; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | Not supplied: cash interest paid for 2025 is a dash in the annual report | Not supplied | FY2025 / 2025-12-31 | USD | US$m | Not calculable: cash interest paid for 2025 is a dash in the annual report | Not Calculable | Tier 1 audited | Denominator not stated. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 0.000 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Not supplied: adjusted EBITDA for FY2025 is not stated in the sources | Not supplied | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2025 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -388.570 | Net debt data; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Not supplied: adjusted EBITDA for FY2025 is not stated in the sources | Not supplied | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2025 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: adjusted EBITDA for FY2025 is not stated in the sources | Not supplied | Not supplied: cash interest paid is not stated for this period | Not supplied | FY2025 / 2025-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2025 is not stated in the sources | Not Calculable | Tier 1 audited | Issuer-adjusted measure unavailable for this period. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,497.731 | Net debt data; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 | 146.169 | Constructed period register, last twelve months (calculation C3) | 2026-09-30 | USD | US$m | 10.25 | Calculated | Tier 2b unaudited | Last-twelve-months EBITDA after acquisition costs, with LUMRYZ only from 2026-02-12. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 866.417 | Net debt data; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 | 146.169 | Constructed period register, last twelve months (calculation C3) | 2026-09-30 | USD | US$m | 5.93 | Calculated | Tier 2b unaudited | Last-twelve-months EBITDA after acquisition costs, with LUMRYZ only from 2026-02-12. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 146.169 | Constructed period register, last twelve months (calculation C3) | Not supplied: the 2026 quarterly reports state cash paid for taxes only | Not supplied | 2026-09-30 | USD | US$m | Not calculable: the 2026 quarterly reports state cash paid for taxes only | Not Calculable | Tier 2b unaudited | Denominator not stated. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,497.731 | Net debt data; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 | Not supplied: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not supplied | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited | Issuer-adjusted measure unavailable for this period. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 866.417 | Net debt data; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 | Not supplied: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not supplied | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited | Issuer-adjusted measure unavailable for this period. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not supplied | Not supplied: cash interest paid is not stated for this period | Not supplied | 2026-09-30 | USD | US$m | Not calculable: adjusted EBITDA for the last twelve months is not calculable because FY2025 adjusted EBITDA is not stated | Not Calculable | Tier 2b unaudited | Issuer-adjusted measure unavailable for this period. |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K | FY2025 with FY2024 and FY2023 comparatives (year ended 2025-12-31) | USD | Thousands | Alkermes plc and subsidiaries, consolidated; excludes Avadel | US GAAP | Tier 1 audited statements | Audited statements, year-end 2025 and 2024, debt history | Year-end statements predate the acquisition and the term loans |
| 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 | USD | Thousands | Consolidated, Avadel from 2026-02-12 | US GAAP | Tier 2b unaudited | Not used for a figure: the Q1 earnings release gives the quarter's EBITDA | Acquisition accounting preliminary |
| 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 and six months | USD | Thousands | Consolidated, Avadel from 2026-02-12 | US GAAP | Tier 2b unaudited | Cross-check of the quarterly series | Acquisition accounting preliminary |
| 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026 and nine months to 2026-09-30, with 2025 comparatives | USD | Thousands | Consolidated, Avadel from 2026-02-12 | US GAAP | Tier 2b unaudited | Latest balance sheet, income statement, cash flow, debt note | Cash interest paid not stated; purchase price allocation preliminary |
| EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 | USD | Thousands in tables, millions in text | Consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | Quarterly EBITDA and adjusted EBITDA | Non-GAAP definitions are the issuer's |
| EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 2026 and six months | USD | Thousands in tables, millions in text | Consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | Quarterly EBITDA and adjusted EBITDA | Non-GAAP definitions are the issuer's |
| EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 2026 and nine months | USD | Thousands in tables, millions in text | Consolidated | US GAAP with non-GAAP measures | Tier 2b unaudited | EBITDA and adjusted EBITDA reconciliation | Non-GAAP definitions are the issuer's |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Alkermes plc | Issuer and TopCo Borrower of the credit agreement | 31 December | USD | Thousands | Consolidated with subsidiaries; Avadel included from 2026-02-12 | US GAAP | FY2024, FY2025; Q1, Q2, Q3 2026; nine months 2025 and 2026 |
| Alkermes, Inc. | U.S. Borrower | 31 December | USD | Not stated separately | Subsidiary inside the consolidated figures | US GAAP | Not reported separately |
| Alkermes Finance LLC | U.S. Co-Borrower | 31 December | USD | Not stated separately | Subsidiary inside the consolidated figures | US GAAP | Not reported separately |
| Subsidiary guarantors | Guarantors of the credit agreement, not named in the sources | Not supplied: not named | USD | Not stated separately | Not supplied: the guarantor group is not listed | US GAAP | Not reported separately |
| Avadel Pharmaceuticals Limited (formerly Avadel Pharmaceuticals plc) | Acquired business, operated within the group; integrated so that its net result cannot be separated | 31 December | USD | Thousands | Inside consolidated figures from 2026-02-12; LUMRYZ revenue USD 225.986 million in the nine months | US GAAP | From 2026-02-12 only |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Money tables presented in millions | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–8 | Unit scaling | USD thousands as printed | US$m with three decimals | The money tables use the unit of the statements in millions; no figure is rounded | All periods |
| EBITDA (Reported) derived for FY2025 | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | Derivation from components | Not stated | 285,588 USD thousands | The annual report states no EBITDA; derived the way the issuer's reconciliation builds it (net income less interest income plus interest expense, tax, depreciation and amortization) | FY2025 |
| EBITDA (Reported) derived for FY2024 | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | Derivation from components | Not stated | 452,411 USD thousands | Continuing operations basis: starts from income before taxes, so the loss from discontinued operations is excluded | FY2024 |
| Last-twelve-months construction | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | Period construction | Not stated | 146,169 USD thousands | Full year plus current stub less prior-year stub, every component available | 2026-09-30 |
| Total Debt as carrying value | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 27 | Basis choice | Principal 1,511,750 USD thousands | Carrying value 1,497,731 USD thousands | Debt is carried at balance-sheet value net of discount and issuance costs; the principal difference is logged in the definition register | 2026-09-30 |
| Dashes shown as not supplied | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–8 | Presentation | A dash in the filing | Not supplied: no amount is printed | A dash is never read as zero | All statement tables |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM | USD 1,475.899m | USD 1,369.052m | USD 1,091.352m | USD 1,753.599m | Calculated | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 6 | Nine-month periods are comparable; includes LUMRYZ from 2026-02-12. |
| EBITDA (Reported) | LTM | USD 285.588m | USD 81.798m | USD 221.217m | USD 146.169m | Calculated | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | FY2025 component is derived, not stated by the issuer; after acquisition costs. |
| EBITDA (Adjusted) | LTM | Not supplied: FY2025 adjusted EBITDA is not stated | USD 339.544m | USD 293.658m | Not calculable: the full-year component is missing | Not Calculable | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | Any one missing component makes the last-twelve-months figure missing. |
| Net income (loss) | LTM | USD 241.664m | USD -49.692m | USD 192.323m | USD -0.351m | Calculated | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 166; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 | Net loss over the last twelve months is USD 0.351m. |
| Cash flows provided by operating activities | LTM | USD 520.754m | USD 72.917m | USD 350.685m | USD 242.986m | Calculated | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 | Working capital outflow in the 2026 stub. |
| Additions of property, plant and equipment | LTM | USD -40.420m | USD -15.638m | USD -40.440m | USD -15.618m | Calculated | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 | Outflows are negative. |
| Cash interest paid | LTM | Not supplied: FY2025 cash interest paid is a dash | Not supplied: not stated in the nine-month report | Not supplied: not stated in the nine-month report | Not calculable: no component is stated | Not Calculable | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168 | Interest expense is a different measure and is not substituted. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Product net sales | VIVITROL net sales | 121.125 | 127.560 | 343.781 | 364.448 | Up | Reported, USD millions. 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| Product net sales | ARISTADA and ARISTADA INITIO net sales | 98.050 | 103.899 | 272.820 | 294.442 | Up | Reported, USD millions. 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| Product net sales | LYBALVI net sales | 98.248 | 95.899 | 252.550 | 282.242 | Down in the quarter, up in the nine months | Reported, USD millions. 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |
| Product net sales | LUMRYZ net sales | Not supplied: product acquired on 2026-02-12 and not owned in 2025 | 89.922 | Not supplied: product acquired on 2026-02-12 and not owned in 2025 | 225.986 | New product | Reported, USD millions; the issuer's release gives about 4,100 patients on therapy at the end of Q3 2026. 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2 |
| Product net sales | Total product sales, net | 317.423 | 417.280 | 869.151 | 1,167.118 | Up | Reported, USD millions; the sum of the four products. 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 21 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs | Principal USD 1,518.4 million at the August 2026 amendment and USD 1,511.750 million in the maturity table at 2026-09-30; carrying value USD 1,497.731 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–29 | 2026-09-30 | USD 14.019 million, 0.9% of principal | Financial foundation; Fundamental credit | Carrying value used for ratios; principal kept in the debt reconciliation; the USD 6.625 million difference between the two principal figures is one scheduled instalment |
| EBITDA | Reported EBITDA, unadjusted | Issuer EBITDA is net income plus interest, tax, depreciation and amortization; adjusted EBITDA also adds share-based compensation, Avadel costs and contingent consideration changes; FY2024 and FY2025 EBITDA are not stated | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 | FY2024; FY2025; last twelve months | Reported last-twelve-months USD 146.169 million against adjusted nine months USD 339.544 million | Financial foundation; Fundamental credit | Reported EBITDA is the denominator; adjusted shown beside it where stated; FY2024 and FY2025 derived and labelled |
| Cash and net debt | Cash and cash equivalents; restricted cash and investments reported apart | The issuer counts cash, cash equivalents and total investments of USD 787.574 million at 2026-09-30 and USD 588.360 million at 2025-12-31; its liquidity table also counts USD 731.206 million of restricted cash in the 2025 total of USD 1,319.5 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5 and 49; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | FY2025; 2026-09-30 | Net debt of USD 866.417 million against USD 710.157 million on the issuer's measure | Financial foundation; Liquidity | Net debt uses cash and equivalents only; the issuer's wider measure is shown as a calculation |
| Perimeter of year-end debt | Debt of the reporting perimeter at the balance-sheet date | The FY2025 balance sheet excludes Avadel and the term loans that funded it; the acquisition closed 2026-02-12 | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 165 and 193 | FY2025 against 2026 periods | Debt moves from nil to USD 1,497.731 million | Financial foundation; Fundamental credit | Earlier periods are not comparable; no pro forma net debt is stated by the sources |
| Interest | Cash interest paid for cover; interest expense kept apart | Interest expense of USD 74.368 million in nine months 2026 includes USD 7.4 million of bridge facility costs and amendment costs; cash interest paid is not stated | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6, 28–29 | 9M 2026; last twelve months | Cover not calculable for 2025 and 2026 | Financial foundation | Cover left as not calculable; expense not substituted |
| Non-debt obligations | Debt excludes lease liabilities on their own lines and contingent consideration | Operating lease liabilities USD 73.350 million and contingent consideration USD 136.922 million (payable up to USD 165.7 million) sit outside debt | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6 and 17 | 2026-09-30 | USD 210.272 million combined carrying amount | Fundamental credit | Kept outside debt; named as claims |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Statements and net debt for 2024 to 2026-09-30 | Ready with Limitations | FY2024 and FY2025 EBITDA are derived; the balance sheet at 2025-09-30 is not in the sources; per-facility principal at 2026-09-30 is not stated | Confirm EBITDA against the fourth-quarter 2025 release |
| Leverage on reported EBITDA | Ready with Limitations | Last-twelve-months EBITDA is built on a derived FY2025 figure and includes LUMRYZ only from 2026-02-12 | Obtain the fourth-quarter 2025 release and a pro forma full-year Avadel EBITDA if the issuer states one |
| Leverage on adjusted EBITDA | Not Ready | FY2025 adjusted EBITDA is not stated, so no last-twelve-months adjusted figure exists | Obtain the fourth-quarter 2025 release with its adjusted EBITDA reconciliation |
| Interest cover | Not Ready | Cash interest paid is not stated for 2025 or 2026 | Obtain the cash paid for interest for the nine months to 2026-09-30 and for FY2025 |
| Liquidity | Ready with Limitations | No undrawn committed facility is described; cash excludes investments | Confirm in the executed credit agreement that no revolving facility exists |
| Debt maturities and capital structure | Ready | Both term loans share one rank under one credit agreement; guarantors not named | None needed for the maturity profile |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term Loan A Facility | Senior secured term loan A | 735.016 | Not supplied: facility principal at 2026-09-30 is not stated; USD 745.3 million at the 2026-08-12 amendment | Fully drawn at closing (USD 750.0 million originally) | USD 750.0 million at closing | Lien on substantially all assets of the borrowers and subsidiary guarantors | Senior secured; rank 1 as the only debt; priority between the two loans is not stated | USD | 735.016 | Not applicable | Term SOFR plus 1.75% to 2.25% by secured net leverage, or Alternate Base Rate plus 0.75% to 1.25% | Floating | Term SOFR | 175 to 225 | Not supplied: no floor is stated for the loans | 2031-02-12 | Not supplied: the note gives total scheduled principal of USD 26.5 million in 2027 and USD 40.563 million in 2028 for both loans | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–29 |
| Term Loan B Facility | Senior secured term loan B | 762.715 | Not supplied: facility principal at 2026-09-30 is not stated; USD 773.1 million at the 2026-08-12 amendment | Fully drawn at closing (USD 775.0 million originally) | USD 775.0 million at closing | Lien on substantially all assets of the borrowers and subsidiary guarantors | Senior secured; rank 1 as the only debt; priority between the two loans is not stated | USD | 762.715 | Not applicable | Term SOFR plus 2.25%, or Alternate Base Rate plus 1.25% | Floating | Term SOFR | 225 | Not supplied: no floor is stated for the loans | 2031-08-12 | Not supplied: the note gives total scheduled principal for both loans only | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–29 |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported) FY2025, derived | Income before income taxes 291,450 plus interest expense 12,277 less interest income 45,304 plus depreciation and amortization 27,165 (USD thousands); equivalently net income 241,664 plus tax 49,786 plus the same interest and D&A | 285,588 (USD thousands) = USD 285.588 million | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 |
| C2 | EBITDA (Reported) FY2024, derived on continuing operations | Income before income taxes 443,750 plus interest expense 22,578 less interest income 42,450 plus depreciation and amortization 28,533 (USD thousands); the loss from discontinued operations of 5,068 is excluded | 452,411 (USD thousands) = USD 452.411 million | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–167 |
| C3 | EBITDA (Reported), last twelve months to 2026-09-30 | FY2025 285,588 plus nine months 2026 81,798 less nine months 2025 221,217 (USD thousands) | 146,169 (USD thousands) = USD 146.169 million | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; calculation C1 |
| C4 | Last-twelve-months revenue, net result, operating cash flow and capital additions; Q4 2025 revenue | Revenue 1,475,899 plus 1,369,052 less 1,091,352; net income 241,664 plus (49,692) less 192,323; operating cash flow 520,754 plus 72,917 less 350,685; capital additions 40,420 plus 15,638 less 40,440; Q4 2025 revenue 1,475,899 less 1,091,352 (USD thousands) | Revenue 1,753,599; net income (351); operating cash flow 242,986; capital additions 15,618; Q4 2025 revenue 384,547 (USD thousands) | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166 and 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 |
| C5 | Net debt = gross debt less cash and cash equivalents | FY2024: 0.000 less 291.146; FY2025: 0.000 less 388.570; 2026-09-30: gross debt 26.500 current plus 1,471.231 long-term = 1,497.731, less 631.314 (US$m) | Net debt USD (291.146) million at FY2024, USD (388.570) million at FY2025 and USD 866.417 million at 2026-09-30 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 |
| C6 | Term-loan principal against carrying value | Scheduled principal 6.625 + 26.500 + 40.563 + 45.250 + 45.250 + 1,347.562 = 1,511.750; carrying value 735.016 + 762.715 = 1,497.731; difference 14.019; disclosed discount 10.4 and financing costs 3.6 total 14.0; rounding residual 0.019 (US$m) | Reconciling items (14.019) i.e. −14.019 US$m; principal 1,511.750 plus −14.019 equals 1,497.731 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27, 29 and 30 |
| C7 | Leverage on reported EBITDA | FY2024: 0.000 / 452.411 = 0.00 and (291.146) / 452.411 = −0.64; FY2025: 0.000 / 285.588 = 0.00 and (388.570) / 285.588 = −1.36; 2026-09-30: 1,497.731 / 146.169 = 10.25 and 866.417 / 146.169 = 5.93 (x) | 0.00x, −0.64x, 0.00x, −1.36x, 10.25x, 5.93x | Net debt data and statement tables |
| C8 | Interest cover FY2024 | EBITDA 452.411 / cash interest paid 23.010 (US$m) | 19.66x | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 166–168 |
| C9 | Free cash flow = operating cash flow less additions of property, plant and equipment | FY2024 439.124 less 33.484; FY2025 520.754 less 40.420; 9M 2025 350.685 less 40.440; 9M 2026 72.917 less 15.638; LTM 242.986 less 15.618 (US$m) | 405.640; 480.334; 310.245; 57.279; 227.368 (US$m) | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 |
| C10 | Net debt on the issuer's cash and investments measure, 2026-09-30 | Cash 631.314 plus short-term investments 124.150 plus long-term investments 32.110 = 787.574; gross debt 1,497.731 less 787.574 (US$m) | 710.157 (US$m); investments alone 156.260 (US$m) | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 and 49; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| C11 | Term-loan carrying values by facility | Term loan A 735.016 plus term loan B 762.715; less current portion 26.500 gives long-term 1,471.231 (US$m) | 1,497.731 (US$m) | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27 |
| C12 | Working capital change, nine months 2026 | Receivables (74.675) plus inventory 9.860 plus prepaid (33.610) plus right-of-use assets 6.660 plus payables (116.444) plus accrued sales discounts 53.207 plus lease liabilities (8.550) plus other long-term liabilities 6.743 (US$m) | (156.809) (US$m) | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 7 |
| C13 | Adjusted EBITDA bridge, nine months 2026 | EBITDA 81.798 plus share-based compensation 112.624 plus Avadel costs 118.140 plus contingent consideration change 26.982 (US$m) | 339.544 (US$m) | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |
| C14 | Amounts rounded to two decimals for the narrative (half up) | Net debt at 2026-09-30: 866.417 rounds to 866.42; Net cash at 2025-12-31: 388.570 rounds to 388.57; Cash and cash equivalents at 2026-09-30: 631.314 rounds to 631.31; Gross debt at 2026-09-30: 1,497.731 rounds to 1,497.73; Last-twelve-months reported EBITDA: 146.169 rounds to 146.17; FY2025 reported EBITDA (derived): 285.588 rounds to 285.59; Adjusted EBITDA, nine months 2026: 339.544 rounds to 339.54; Adjusted EBITDA, nine months 2025: 293.658 rounds to 293.66; Preliminary Avadel consideration: 2,306.920 rounds to 2,306.92; Investments at 2026-09-30: 156.260 rounds to 156.26; Cash and total investments at 2026-09-30: 787.574 rounds to 787.57; Net debt on the issuer's cash and investments measure: 710.157 rounds to 710.16; Cash interest paid FY2024: 23.010 rounds to 23.01; Interest expense, nine months 2026: 74.368 rounds to 74.37; Scheduled principal 2027: 26.500 rounds to 26.50; Scheduled principal 2028: 40.563 rounds to 40.56; Scheduled principal 2029: 45.250 rounds to 45.25; Scheduled principal 2031: 1,347.562 rounds to 1,347.56; Operating cash flow, nine months 2026: 72.917 rounds to 72.92; Operating cash flow, nine months 2025: 350.685 rounds to 350.69; Working capital outflow, nine months 2026: 156.809 rounds to 156.81; Capital spending, nine months 2026: 15.638 rounds to 15.64; Free cash flow, nine months 2026: 57.279 rounds to 57.28; Accrued sales discounts, allowances and reserves at 2026-09-30: 323.406 rounds to 323.41; Accrued sales discounts, allowances and reserves at 2025-12-31: 247.126 rounds to 247.13; Medicaid rebate accrual at 2026-09-30: 214.927 rounds to 214.93; Contingent consideration liability: 136.922 rounds to 136.92; Operating lease liabilities at 2026-09-30: 73.350 rounds to 73.35; Avadel acquisition costs added back, nine months 2026: 118.140 rounds to 118.14; Reported EBITDA, nine months 2026: 81.798 rounds to 81.80; Bridge financing costs in interest expense, nine months 2026: 7.400 rounds to 7.40 | USD 866.42 million; USD 388.57 million; USD 631.31 million; USD 1,497.73 million; USD 146.17 million; USD 285.59 million; USD 339.54 million; USD 293.66 million; USD 2,306.92 million; USD 156.26 million; USD 787.57 million; USD 710.16 million; USD 23.01 million; USD 74.37 million; USD 26.50 million; USD 40.56 million; USD 45.25 million; USD 1,347.56 million; USD 72.92 million; USD 350.69 million; USD 156.81 million; USD 15.64 million; USD 57.28 million; USD 323.41 million; USD 247.13 million; USD 214.93 million; USD 136.92 million; USD 73.35 million; USD 118.14 million; USD 81.80 million; USD 7.40 million | Calculations C1 to C13 and the statement tables |

## Gaps

- Cash interest paid is not stated for FY2025 (the annual report prints a dash) or for the nine months to 2026-09-30 (the quarterly report gives cash paid for taxes only), so interest cover cannot be calculated for 2025 or for the last twelve months, which restricts every coverage conclusion on the acquired debt; severity High; the action that would close it is the cash paid for interest in the fourth-quarter 2025 and nine-month 2026 cash flow disclosures.
- Adjusted EBITDA is stated for the 2025 and 2026 interim periods only and not for FY2024 or FY2025, so no last-twelve-months adjusted EBITDA or adjusted leverage can be built; severity High; the fourth-quarter 2025 earnings release with its reconciliation would close it.
- Reported EBITDA for FY2024 and FY2025 is derived from statement lines, not stated by the issuer, and the last-twelve-months figure rests on the FY2025 derivation; severity Medium; confirming it against the fourth-quarter 2025 release would close it.
- Covenant levels and the issuer's reported ratios are not printed, so covenant headroom is not established; severity Medium; the executed credit agreement and compliance certificate would close it.
- The sources state no pro forma net debt or full-year pro forma EBITDA for the Avadel acquisition, only pro forma revenue and net income, so leverage for the combined business over a full year cannot be stated; severity Medium; a pro forma statement from the issuer would close it.
- No revolving or other undrawn committed facility is described, so undrawn facilities are shown as not supplied rather than zero; severity Medium; the executed credit agreement would confirm it.
- Principal for each term loan at 2026-09-30 is not stated, only the total schedule and the principal at the August 2026 amendment; severity Low; the facility-level principal from the agent would close it.
- The company reports one segment and gives product net sales instead, so no segment schedule is stated; severity Low.
- Several lines print dashes in the filings (for example interest expense in 2025, contingent consideration changes before 2026 and some cash flow lines); they are shown as not supplied rather than zero, never as a stated nil; severity Low.
- The balance sheet at 2025-09-30 is not in the sources, so the nine-month 2025 balance sheet column and period-end ratios for that date are not supplied; severity Low.
- The 2024 balance sheet shows intangible assets and goodwill on one line, so the split is not supplied for FY2024; severity Low.
- The unamortised discount and financing costs are stated to USD 0.1 million, so a rounding residual of USD 0.019 million stands in the reconciling items; severity Low.
- The purchase price allocation for the Avadel acquisition is preliminary for up to one year from the closing date, so intangible assets, goodwill and deferred taxes may change; severity Medium.
- The earlier Source readiness analysis cites the page after the one that carries the third-quarter release's cash and investments totals; this analysis cites the correct page, and the figures themselves agree; severity Low.
- FY2024 depreciation and amortization is taken from the consolidated cash flow statement, which may include the discontinued business, so FY2024 EBITDA could be slightly overstated; severity Low.

## Next module

The orchestrator selects the next module.
