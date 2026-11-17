---
module_id: CP-1
module_name: Financial foundation
issuer_id: magn
analysis_date: 2026-11-05
run_id: magn-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1 handoff: Magnera Corp (magn)

## Request
Financial foundation for Magnera Corp (magn), as of 2026-11-05, on the credit snapshot pathway. The scope is the statements, debt, liquidity and leverage figures that later modules read, taken from the annual report for fiscal 2025 and the three quarterly reports and releases of fiscal 2026.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-09-27_form10k.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-09-27 | 2025-11-25 | 8a2d31e8517added759c44fb832ba0e833b0182f88931d77ac8b15219681b6e7 | Fiscal 2024 and 2025 statements, debt note, segment note, controls disclosure and exhibit list. |
| 10-Q_2025-12-27_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2025-12-27 | 2026-02-05 | fc18cf0b3124192f072f0a094fbc1605152c44349946b7208b65f0ac25d88f0f | First quarter of fiscal 2026 statements, debt note and segment note. |
| 10-Q_2026-03-28_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-28 | 2026-05-07 | 00a31fc7f5573cbb41dba62ba9751e7ac35317c740673bba1de0ff348e567d96 | Second quarter of fiscal 2026 statements, debt note and segment note. |
| 10-Q_2026-06-27_form10q.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-27 | 2026-08-06 | 9bf0a737948e12b9a435299f2c1d5be9f80cbb7bbc87ba8bb4baa3f7134d16c0 | Third quarter of fiscal 2026 statements, debt note, segment note, outlook and liquidity text. |
| EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl | Earnings release for the first quarter of fiscal 2026 (Exhibit 99.1) | 2026-02-05 | 2c929f0530d2fad28d8d608f7ff32ddbeacac9282e05451c75240bd19f5fad90 | First quarter adjusted EBITDA reconciliation, inventories and guidance. |
| EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl | Earnings release for the second quarter of fiscal 2026 (Exhibit 99.1) | 2026-05-07 | 35c908fa7ed7e14681927f2c36fd3b1ad0328d835bdae7fd06641846130d5ea2 | Second quarter adjusted EBITDA reconciliation, inventories and quarterly free cash flow. |
| EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | Earnings release for the third quarter of fiscal 2026 (Exhibit 99.1) | 2026-08-06 | 907fd63efeb9c514c2f2ef515ae237b76f56ae49850c45b010a3ceaedd06a508 | Third quarter adjusted EBITDA reconciliation, pro forma adjusted EBITDA and inventories. |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 46328c881cda3b884534bb9d82387479cf67ab83525ba3706620ec778f418e03 | Source authority, coverage limits and the conflicts logged between the documents. |

## Findings

### Bottom line

Magnera Corp is heavily leveraged: net debt is 6.48x last-twelve-months reported EBITDA, or 4.36x the issuer's adjusted EBITDA, so creditors depend on those adjustments being repeatable.

Nine-month free cash flow was USD 32 million after USD 44 million of capital spending, against USD 1,901 million of debt and USD 280 million of cash at June 27, 2026. No debt matures before 2029 and the USD 350 million revolver has no borrowings, but how much of it is available is not stated. The documents state no event after the balance sheet date that changes net debt.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, page 8; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6; calculation F8; calculation R4; calculation N4

### Analysis by dimension

Leverage is high on every basis and is lower only if the issuer's adjustments are accepted. Total debt at carrying value is USD 1,901 million, 7.60x reported EBITDA of USD 250 million and 5.11x adjusted EBITDA of USD 372 million. The USD 122 million gap between the two measures is restructuring, non-cash and other charges the issuer excludes, and the issuer's pro forma figure of USD 405 million adds USD 35 million of synergies that are not yet in results. Reported EBITDA is therefore the primary basis here and adjusted EBITDA the best case.
Basis: EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6; calculation R4; calculation D1; calculation D11

Net debt has barely moved. It fell by USD 26 million between September 2025 and June 2026, because USD 65 million of repayments was partly offset by a USD 25 million fall in cash and by amortisation of discounts, so most of the improvement in the adjusted ratio from 4.65x to 4.36x comes from higher last-twelve-months EBITDA: on fiscal 2025 EBITDA the June 2026 net debt would still be 4.58x.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 8; calculation D2; calculation D10; calculation D16; calculation R1; calculation R4

Interest cover is thin. In fiscal 2025 reported EBITDA covered cash interest of USD 124 million 1.70x and adjusted EBITDA covered it 2.85x. Cash interest paid is not printed for 2026, so cover is shown against interest expense, net of USD 151 million for the twelve months to June 2026: 1.66x on reported EBITDA and 2.46x on adjusted EBITDA. About 35.91% of principal is the floating-rate term loan, so a rise in rates feeds straight into that thin cover.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 34; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation R5; calculation R9; calculation D7

Cash generation is lumpy and weak against the debt load. Free cash flow on the cash flow statement was USD 36 million in fiscal 2025, not the USD 126 million the annual report shows, which adds USD 90 million of operating cash flow earned before the merger. Over nine months of fiscal 2026 it was USD 32 million, made up of USD 73 million in the second quarter, an outflow of USD 13 million in the first and an outflow of USD 28 million in the third. The outlook for the year of USD 90 million to USD 110 million of free cash flow therefore needs USD 58 million to USD 78 million in the fourth quarter. Working capital absorbed USD 34 million in nine months against USD 119 million a year earlier, which the quarterly report names as the main reason operating cash flow rose by USD 69 million.
Basis: 10-K_2025-09-27_form10k.htm.jsonl, page 17; 10-Q_2026-06-27_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 13; 10-Q_2026-06-27_form10q.htm.jsonl, page 18; calculation D17; calculation F2; calculation F4; calculation F8; calculation F10; calculation F11; calculation D14; calculation D15

Liquidity looks adequate near term but cannot be verified from the filings. Cash of USD 280 million, of which about 58% is held outside the United States and is repatriable without significant restrictions according to the issuer, plus the USD 350 million revolver commitment gives USD 630 million on a commitment basis. Letters of credit and any borrowing base are not stated, so availability may be lower. Nothing matures until the 2029 notes of USD 500 million, followed by USD 1,466 million in 2031, so the refinancing exposure is nearly three years away.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 8; 10-Q_2026-06-27_form10q.htm.jsonl, page 19; calculation D5; calculation D6; calculation D12

Definitions and data quality need care. Three measures carry more than one figure: EBITDA (reported against adjusted), free cash flow (annual report against cash flow statement) and the debt repaid in the nine months (USD 63 million in the narrative against USD 65 million in the cash flow statement). Management also states that its disclosure controls were not effective at June 27, 2026, and that material weaknesses were reported at fiscal year end 2025, so the latest quarterly figures carry more reliance risk than a clean control record would. Receivables are also sold through customer supply chain financing programs whose size is not stated, which can move operating cash flow between periods without changing debt.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 7; 10-Q_2026-06-27_form10q.htm.jsonl, page 18; 10-Q_2026-06-27_form10q.htm.jsonl, page 20; 10-K_2025-09-27_form10k.htm.jsonl, page 17; 10-K_2025-09-27_form10k.htm.jsonl, page 22; calculation D10; calculation F10

No event after the balance sheet date is stated in the documents read, and the fiscal year ended September 26, 2026 has not been reported, so year-end debt and cash are not established and the figures here are as at June 27, 2026.
Basis: 10-Q_2026-06-27_form10q.htm.jsonl, page 6

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-09-27 | 9.25 | 7.81 | x | Carrying-value debt over fiscal 2025 reported EBITDA derived as operating income plus depreciation and amortization; the fiscal 2025 year includes the merged business from 2024-11-04 only. |
| 2025-12-27 | 7.95 | 6.86 | x | Carrying-value debt over last-twelve-months reported EBITDA derived as operating income plus depreciation and amortization; the prior-year stub includes the merged business from 2024-11-04 only. |
| 2026-03-28 | 7.63 | 6.41 | x | Carrying-value debt over last-twelve-months reported EBITDA derived as operating income plus depreciation and amortization; the prior-year stub includes the merged business from 2024-11-04 only. |
| 2026-06-27 | 7.60 | 6.48 | x | Carrying-value debt over last-twelve-months reported EBITDA derived as operating income plus depreciation and amortization; the prior-year stub includes the merged business from 2024-11-04 only. |

Ratios use reported EBITDA, which the issuer does not state and which is calculated here, so they are higher than any ratio on the issuer's adjusted EBITDA shown in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2025 / 2025-09-27 | 1.70 | x | Reported EBITDA over the annual report's net cash interest for fiscal 2025. |
| 2025-12-27 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Cash interest paid is not printed in the quarterly reports, so no cash cover is stated; interest expense, net cover is in the calculation register. |
| 2026-03-28 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Cash interest paid is not printed in the quarterly reports, so no cash cover is stated; interest expense, net cover is in the calculation register. |
| 2026-06-27 | Not supplied: cash interest paid is not printed in the quarterly reports | x | Cash interest paid is not printed in the quarterly reports, so no cash cover is stated; interest expense, net cover is in the calculation register. |

Only fiscal 2025 has a cash interest figure, so the quarterly dates carry no cover on a cash basis.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-09-27 | 305 | 350 | US$m | Cash is cash and cash equivalents; undrawn committed facilities is the USD 350 million revolving credit facility commitment, which the filing states has no borrowings outstanding. Letters of credit and any borrowing base are not printed, so availability may be lower. |
| 2025-12-27 | 264 | 350 | US$m | Cash is cash and cash equivalents; undrawn committed facilities is the USD 350 million revolving credit facility commitment, which the filing states has no borrowings outstanding. Letters of credit and any borrowing base are not printed, so availability may be lower. |
| 2026-03-28 | 303 | 350 | US$m | Cash is cash and cash equivalents; undrawn committed facilities is the USD 350 million revolving credit facility commitment, which the filing states has no borrowings outstanding. Letters of credit and any borrowing base are not printed, so availability may be lower. |
| 2026-06-27 | 280 | 350 | US$m | Cash is cash and cash equivalents; undrawn committed facilities is the USD 350 million revolving credit facility commitment, which the filing states has no borrowings outstanding. Letters of credit and any borrowing base are not printed, so availability may be lower. |

The revolver figure is the commitment less nil borrowings and is not an availability figure.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2029 | 500 | US$m | The 4.75% first priority senior secured notes at 2026-06-27 principal; the annual report labels this amount fiscal 2029 although the notes mature in October 2029. |
| 2031 | 1466 | US$m | Term loan 706 and 7.25% first priority senior secured notes 760 at 2026-06-27 principal, both maturing in November 2031; the annual report labels this fiscal 2031. |

Amounts are contractual principal at June 27, 2026 and do not include the revolver, which matures in November 2029 and has no borrowings.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2187 | 3204 | 792 | 796 | 857 | US$m | Reported; period flows |
| EBITDA (Reported) | 34 | 211 | 63 | 68 | 72 | US$m | Calculated: operating income plus depreciation and amortization |
| EBITDA (Adjusted) | 282 | 354 | 93 | 90 | 99 | US$m | Reported: issuer-defined |
| Operating income (loss) | -141 | 5 | 14 | 17 | 22 | US$m | Reported |
| Net income (loss) | -154 | -159 | -34 | -18 | -20 | US$m | Reported |
| Net cash from operating activities | 192 | 103 | 2 | 87 | -13 | US$m | Reported for fiscal years and Q1 and Q2 (release); Q3 is nine months less six months |
| Additions to property, plant and equipment | -72 | -67 | -15 | -14 | -15 | US$m | Reported for fiscal years and Q1; Q2 is six months less Q1, Q3 is nine months less six months |
| Free cash flow | 120 | 36 | -13 | 73 | -28 | US$m | Calculated: operating cash flow less capital additions |
| Cash and cash equivalents | 230 | 305 | 264 | 303 | 280 | US$m | Reported; period end |
| Total debt | Not supplied: the 2024 balance sheet prints a dash for long-term debt | 1952 | 1931 | 1899 | 1901 | US$m | Reported at carrying value; period end |
| Net debt | Not calculable: 2024 debt is not printed | 1647 | 1667 | 1596 | 1621 | US$m | Calculated: total debt less cash; period end |
| Total debt / reported EBITDA (last twelve months) | Not calculable: 2024 debt is not printed | 9.25 | 7.95 | 7.63 | 7.60 | x | Calculated |
| Net debt / reported EBITDA (last twelve months) | Not calculable: 2024 debt is not printed | 7.81 | 6.86 | 6.41 | 6.48 | x | Calculated |
| Net debt / adjusted EBITDA (last twelve months) | Not calculable: 2024 debt is not printed | 4.65 | 4.59 | 4.38 | 4.36 | x | Calculated |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-09-27 | 1952 | 305 | 1647 | US$m | Gross debt is the long-term debt line at balance-sheet carrying value, net of discounts and deferred fees, and holds the term loan and two series of senior secured notes; operating lease liabilities are not in it. Contractual principal is 2,031. |
| 2025-12-27 | 1931 | 264 | 1667 | US$m | Gross debt is the long-term debt line at balance-sheet carrying value, net of discounts and deferred fees, and holds the term loan and two series of senior secured notes; operating lease liabilities are not in it. Contractual principal is 2,004. |
| 2026-03-28 | 1899 | 303 | 1596 | US$m | Gross debt is the long-term debt line at balance-sheet carrying value, net of discounts and deferred fees, and holds the term loan and two series of senior secured notes; operating lease liabilities are not in it. Contractual principal is 1,969. |
| 2026-06-27 | 1901 | 280 | 1621 | US$m | Gross debt is the long-term debt line at balance-sheet carrying value, net of discounts and deferred fees, and holds the term loan and two series of senior secured notes; operating lease liabilities are not in it. Contractual principal is 1,966. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-06-27 | 1966 | -65 | 1901 | US$m | Principal is the term loan 706, the 4.75% notes 500 and the 7.25% notes 760; reconciling items are debt discounts, deferred fees and other, as printed in the debt note; the revolver has no borrowings. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | The three quarterly reports to June 27, 2026 and the three releases to August 6, 2026 state no issue, repayment, acquisition, disposal or dividend after the balance sheet date; the report for the fiscal year ended September 26, 2026 was not supplied. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 2187 | 282 | US$m | Twelve months; issuer-adjusted EBITDA; pre-merger carve-out figures for the Treasure business before the merger of 2024-11-04. |
| FY2025 | 3204 | 354 | US$m | Twelve months; issuer-adjusted EBITDA; includes the merged business from 2024-11-04 only. |
| LTM to 2025-12-27 | 3294 | 363 | US$m | Twelve months constructed as fiscal 2025 plus the first quarter of 2026 less the first quarter of 2025; issuer-adjusted EBITDA. |
| LTM to 2026-03-28 | 3266 | 364 | US$m | Twelve months constructed as fiscal 2025 plus six months of 2026 less six months of 2025; issuer-adjusted EBITDA. |
| LTM to 2026-06-27 | 3284 | 372 | US$m | Twelve months constructed as fiscal 2025 plus nine months of 2026 less nine months of 2025; issuer-adjusted EBITDA; the issuer's own table shows the same adjusted figure. |

The fiscal 2024 row is a carve-out of one business and is not comparable with the merged group from fiscal 2025.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no facility is shown | Not supplied: the documents name the debt senior secured but state no ranking among the term loan, revolver and notes | Not supplied: collateral is not described | Not supplied: no ranked facility is stated | Not supplied: no ranked facility is stated | US$m | The credit agreements, indentures and intercreditor terms were not supplied, so legal rank, collateral and guarantor scope are not stated; the facilities are listed in the debt instruments register. |

No qualification.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), fiscal 2025 | 211 | US$m | Calculated: operating income 5 plus depreciation and amortization 206; the reported measure. |
| Restructuring, transaction, business optimization and other activities | 94 | US$m | Issuer add-back; classification restructuring and transaction costs; realisation status realised, since the charges are in the income statement; includes 84 of restructuring and other charges and 5 of other items per the note. |
| Argentina hyperinflation | 4 | US$m | Issuer add-back; classification other; realisation status not stated. |
| Corporate expense allocation | 3 | US$m | Issuer add-back; carve-out allocation from the former parent; realisation status not stated. |
| Other non-cash charges | 42 | US$m | Issuer add-back; stock compensation and other non-cash items including a 16 inventory step-up charge; realisation status not stated. |
| EBITDA (Adjusted), fiscal 2025 | 354 | US$m | Issuer-defined adjusted EBITDA, the specified adjusted measure. |

The issuer does not state EBITDA before adjustments, so the opening step is calculated here, and no add-back is merged or balanced.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2023-10-01 | 2024-09-28 |
| FY2025 | 2024-09-29 | 2025-09-27 |
| Q1 2026 | 2025-09-28 | 2025-12-27 |
| Q2 2026 | 2025-12-28 | 2026-03-28 |
| Q3 2026 | 2026-03-29 | 2026-06-27 |
| H1 2026 | 2025-09-28 | 2026-03-28 |
| 9M 2025 | 2024-09-29 | 2025-06-28 |
| 9M 2026 | 2025-09-28 | 2026-06-27 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2187 | 3204 | 792 | 796 | 857 | 2365 | 2445 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Cost of goods sold | 1950 | 2867 | 695 | 701 | 745 | 2116 | 2141 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Gross profit | 237 | 337 | 97 | 95 | 112 | 249 | 304 | USD millions | Calculated: net sales less cost of goods sold | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Selling, general and administrative | 107 | 190 | 50 | 50 | 56 | 144 | 156 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Amortization of intangibles | 48 | 50 | 11 | 12 | 11 | 41 | 34 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Goodwill and other impairment | 172 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | USD millions | Reported; the fiscal 2024 charge is a goodwill impairment | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Restructuring and other activities | 30 | 89 | 22 | 16 | 23 | 69 | 61 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Corporate expense allocation | 21 | 3 | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | Not supplied: the quarterly statement has no separate line | USD millions | Reported; a carve-out allocation from the former parent that ended with the merger | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Operating income (loss) | -141 | 5 | 14 | 17 | 22 | -5 | 53 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Other expense (income), net | -9 | 30 | 3 | -1 | 3 | 26 | 5 | USD millions | Reported; expense positive, income negative | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Interest expense, net | 3 | 141 | 40 | 35 | 37 | 102 | 112 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Income (loss) before income taxes | -135 | -166 | -29 | -17 | -18 | -133 | -64 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Income tax expense (benefit) | 19 | -7 | 5 | 1 | 2 | -14 | 8 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Net income (loss) | -154 | -159 | -34 | -18 | -20 | -119 | -72 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 |
| Depreciation and amortization | 175 | 206 | 49 | 51 | 50 | 169 | 150 | USD millions | Reported in the segment note reconciliation | 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| EBITDA (Reported) | 34 | 211 | 63 | 68 | 72 | 164 | 203 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states no unadjusted EBITDA and other expense (income) is excluded | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3; 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| EBITDA (Adjusted) | 282 | 354 | 93 | 90 | 99 | 264 | 282 | USD millions | Reported: issuer-defined adjusted EBITDA, which adds back depreciation and amortization, restructuring, transaction, business optimization and other activities, Argentina hyperinflation, corporate expense allocation and other non-cash charges to operating income | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| Net sales: Americas | 1493 | 1833 | 440 | 437 | 476 | 1366 | 1353 | USD millions | Reported segment net sales | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| Net sales: Rest of World | 694 | 1371 | 352 | 359 | 381 | 999 | 1092 | USD millions | Reported segment net sales | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| Adjusted EBITDA: Americas | 223 | 241 | 58 | 58 | 71 | 181 | 187 | USD millions | Reported segment adjusted EBITDA | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |
| Adjusted EBITDA: Rest of World | 59 | 113 | 35 | 32 | 28 | 83 | 95 | USD millions | Reported segment adjusted EBITDA | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -154 | -159 | -34 | -52 | -119 | -72 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Depreciation | 127 | 156 | 38 | 77 | 128 | 116 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Amortization of intangibles | 48 | 50 | 11 | 23 | 41 | 34 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Non-cash interest expense | 5 | 17 | 7 | 13 | 12 | 18 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Goodwill and other impairment | 172 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Share-based compensation expense | 7 | 19 | 5 | 9 | 15 | 13 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Deferred income tax | -9 | -27 | 1 | Not supplied: the quarterly statement prints a dash for this line | 7 | -2 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Loss on disposition of facility | Not supplied: the annual statement has no separate line | Not supplied: the annual statement has no separate line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statement prints a dash for this line | 7 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Other non-cash operating activities, net | -3 | 55 | 9 | 9 | 45 | 11 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Changes in working capital, net | Not supplied: the annual statement prints this item by component, not as one line | Not supplied: the annual statement prints this item by component, not as one line | -31 | 20 | -119 | -34 | USD millions | Reported in the quarterly statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Changes in other assets and liabilities | Not supplied: the annual statement prints this item by component, not as one line | Not supplied: the annual statement prints this item by component, not as one line | -4 | -10 | -3 | -15 | USD millions | Reported in the quarterly statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Accounts receivable | -27 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported in the annual statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Inventories | -16 | 31 | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported in the annual statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Prepaid expenses and other assets | 2 | -22 | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported in the annual statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Accounts payable and other liabilities | 40 | -17 | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported in the annual statements | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 192 | 103 | 2 | 89 | 7 | 76 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Additions to property, plant and equipment | -72 | -67 | -15 | -29 | -52 | -44 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Cash acquired from merger | Not supplied: the annual statement prints a dash for this line | 37 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | 37 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Settlement of net investment hedges | Not supplied: the annual statement prints a dash for this line | 22 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | 22 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Proceeds from sale of assets or divestiture | 4 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | 7 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Other investing activities and other | 29 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | Not supplied: the quarterly statements print no such line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -39 | -8 | -15 | -29 | 7 | -37 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Proceeds from long-term borrowings | Not supplied: the annual statement prints a dash for this line | 1556 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | 1556 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Repayments on long-term borrowings | -2 | -484 | -27 | -63 | -434 | -65 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Transfers from (to) parent, net | -107 | 34 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | 34 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Cash distributions to parent | Not supplied: the annual statement prints a dash for this line | -1111 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | -1111 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Debt fees and other, net | Not supplied: the annual statement prints a dash for this line | -16 | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | -17 | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -109 | -21 | -27 | -63 | 28 | -65 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| FX Effect on Cash | 1 | 1 | -1 | 1 | 4 | 1 | USD millions | Reported as the effect of currency translation on cash | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Net Cash Change | 45 | 75 | -41 | -2 | 46 | -25 | USD millions | Reported net change in cash and cash equivalents | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Opening Cash | 185 | 230 | 305 | 305 | 230 | 305 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Closing Cash | 230 | 305 | 264 | 303 | 276 | 280 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, pages 24–25; 10-Q_2025-12-27_form10q.htm.jsonl, page 4; 10-Q_2026-03-28_form10q.htm.jsonl, page 4; 10-Q_2026-06-27_form10q.htm.jsonl, page 4 |
| Cash Interest Paid | Not supplied: the annual report prints cash interest for fiscal 2025 only | 124 | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: the quarterly reports do not print cash interest paid | USD millions | Reported as net cash interest for fiscal 2025 | 10-K_2025-09-27_form10k.htm.jsonl, page 34 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 230 | 305 | 264 | 303 | 280 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Accounts receivable | 359 | 522 | 553 | 536 | 531 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Finished goods | 156 | 303 | 301 | 297 | 297 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Raw materials | 103 | 171 | 175 | 175 | 201 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Inventories | 259 | 474 | 476 | 472 | 498 | USD millions | Reported; the quarterly totals are printed in the releases | 10-K_2025-09-27_form10k.htm.jsonl, page 24; EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 5; EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl, page 5; EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 5 |
| Prepaid expenses and other current assets | 38 | 122 | 72 | 96 | 83 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total current assets | 886 | 1423 | 1365 | 1407 | 1392 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Property, plant and equipment | 949 | 1476 | 1453 | 1424 | 1393 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Goodwill and intangible assets | 850 | 890 | 880 | 870 | 858 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Right-of-use assets | 49 | 62 | 60 | 59 | 58 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Other assets | 73 | 138 | 135 | 136 | 133 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total Assets | 2807 | 3989 | 3893 | 3896 | 3834 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Accounts payable | 295 | 356 | 326 | 369 | 361 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Accrued employee costs | 47 | 90 | 80 | 81 | 86 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Other current liabilities | 115 | 155 | 150 | 155 | 122 | USD millions | Reported; includes the current operating lease liability of 18 at 2025-09-27 | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total current liabilities | 457 | 601 | 556 | 605 | 569 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Long-term debt | Not supplied: the 2024 balance sheet prints a dash for long-term debt | 1952 | 1931 | 1899 | 1901 | USD millions | Reported at carrying value, net of discounts and deferred fees | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Deferred income taxes | 78 | 46 | 48 | 52 | 50 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Operating lease liabilities | 39 | 45 | 44 | 43 | 42 | USD millions | Reported; noncurrent portion only | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Other long-term liabilities | 94 | 281 | 276 | 258 | 255 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total Liabilities | 668 | 2925 | 2855 | 2857 | 2817 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Common stock | Not supplied: the 2024 balance sheet prints a dash for this line | 1 | 1 | 1 | 1 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Berry net investment | 2307 | Not supplied: the annual statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | Not supplied: the quarterly statement prints a dash for this line | USD millions | Reported; the former parent's net investment before the merger | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Additional paid-in capital | Not supplied: the 2024 balance sheet prints a dash for this line | 1417 | 1422 | 1426 | 1430 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Retained loss | Not supplied: the 2024 balance sheet prints a dash for this line | -159 | -193 | -211 | -231 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Accumulated other comprehensive loss | -168 | -195 | -192 | -177 | -183 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total Equity | 2139 | 1064 | 1038 | 1039 | 1017 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Total Debt | Not supplied: the 2024 balance sheet prints a dash for long-term debt | 1952 | 1931 | 1899 | 1901 | USD millions | Reported: the long-term debt line at carrying value; no current portion is printed | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |
| Cash & Equivalents | 230 | 305 | 264 | 303 | 280 | USD millions | Reported | 10-K_2025-09-27_form10k.htm.jsonl, page 24; 10-Q_2025-12-27_form10q.htm.jsonl, pages 3–4; 10-Q_2026-03-28_form10q.htm.jsonl, pages 3–4; 10-Q_2026-06-27_form10q.htm.jsonl, pages 3–4 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1952 | Net debt data | 211 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3; 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | FY2025 / 2025-09-27 | USD | US$m | 9.25 | Calculated | Tier 1 audited statements | Fiscal-year EBITDA from the statements. Reported EBITDA is operating income plus depreciation and amortization. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1647 | Net debt data | 211 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3; 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | FY2025 / 2025-09-27 | USD | US$m | 7.81 | Calculated | Tier 1 audited statements | Fiscal-year EBITDA from the statements. Reported EBITDA is operating income plus depreciation and amortization. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 211 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3; 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | 124 | 10-K_2025-09-27_form10k.htm.jsonl, page 34 | FY2025 / 2025-09-27 | USD | US$m | 1.70 | Calculated | Tier 1 audited statements | Cash interest paid is the annual report's net cash interest for fiscal 2025. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1952 | Net debt data | 354 | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | FY2025 / 2025-09-27 | USD | US$m | 5.51 | Calculated | Tier 1 audited statements | Fiscal-year EBITDA from the statements. Adjusted EBITDA is the issuer's own definition. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1647 | Net debt data | 354 | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | FY2025 / 2025-09-27 | USD | US$m | 4.65 | Calculated | Tier 1 audited statements | Fiscal-year EBITDA from the statements. Adjusted EBITDA is the issuer's own definition. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 354 | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | 124 | 10-K_2025-09-27_form10k.htm.jsonl, page 34 | FY2025 / 2025-09-27 | USD | US$m | 2.85 | Calculated | Tier 1 audited statements | Cash interest paid is the annual report's net cash interest for fiscal 2025. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1931 | Net debt data | 243 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 7.95 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1667 | Net debt data | 243 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 6.86 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 243 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2025-12-27 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1931 | Net debt data | 363 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 5.32 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1667 | Net debt data | 363 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 4.59 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 363 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2025-12-27 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1899 | Net debt data | 249 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 7.63 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1596 | Net debt data | 249 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 6.41 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 249 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2026-03-28 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1899 | Net debt data | 364 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 5.22 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1596 | Net debt data | 364 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 4.38 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 364 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2026-03-28 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1901 | Net debt data | 250 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 7.60 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1621 | Net debt data | 250 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 6.48 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Reported EBITDA is operating income plus depreciation and amortization. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 250 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2026-06-27 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1901 | Net debt data | 372 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 5.11 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1621 | Net debt data | 372 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 4.36 | Calculated | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months EBITDA: fiscal 2025 plus the current stub less the prior-year stub, the prior-year stub including the merged business from 2024-11-04 only. Adjusted EBITDA is the issuer's own definition. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 372 | T4.8 Constructed period register | Not supplied: the quarterly reports do not print cash interest paid | Not supplied: no source states it | 2026-06-27 | USD | US$m | Not calculable: cash interest paid is not printed in the quarterly reports | Not Calculable | Tier 1 balances with Tier 2b quarterly measures | Last-twelve-months cash interest paid is not printed; the interest expense, net rows give a cover on the accrued charge instead. |
| EBITDA / interest expense, net | EBITDA (Reported) / Interest expense, net | 211 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3; 10-K_2025-09-27_form10k.htm.jsonl, pages 41–42; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | 141 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 | FY2025 / 2025-09-27 | USD | US$m | 1.50 | Calculated | Tier 1 audited statements | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| Adjusted EBITDA / interest expense, net | EBITDA (Adjusted) / Interest expense, net | 354 | 10-K_2025-09-27_form10k.htm.jsonl, page 41; 10-Q_2025-12-27_form10q.htm.jsonl, page 9; 10-Q_2026-03-28_form10q.htm.jsonl, page 10; 10-Q_2026-06-27_form10q.htm.jsonl, page 11 | 141 | 10-K_2025-09-27_form10k.htm.jsonl, pages 23–24; 10-Q_2025-12-27_form10q.htm.jsonl, page 3; 10-Q_2026-03-28_form10q.htm.jsonl, page 3; 10-Q_2026-06-27_form10q.htm.jsonl, page 3 | FY2025 / 2025-09-27 | USD | US$m | 2.51 | Calculated | Tier 1 audited statements | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| EBITDA / interest expense, net | EBITDA (Reported) / Interest expense, net | 243 | T4.8 Constructed period register | 155 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 1.57 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| Adjusted EBITDA / interest expense, net | EBITDA (Adjusted) / Interest expense, net | 363 | T4.8 Constructed period register | 155 | T4.8 Constructed period register | 2025-12-27 | USD | US$m | 2.34 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| EBITDA / interest expense, net | EBITDA (Reported) / Interest expense, net | 249 | T4.8 Constructed period register | 151 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 1.65 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| Adjusted EBITDA / interest expense, net | EBITDA (Adjusted) / Interest expense, net | 364 | T4.8 Constructed period register | 151 | T4.8 Constructed period register | 2026-03-28 | USD | US$m | 2.41 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| EBITDA / interest expense, net | EBITDA (Reported) / Interest expense, net | 250 | T4.8 Constructed period register | 151 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 1.66 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |
| Adjusted EBITDA / interest expense, net | EBITDA (Adjusted) / Interest expense, net | 372 | T4.8 Constructed period register | 151 | T4.8 Constructed period register | 2026-06-27 | USD | US$m | 2.46 | Calculated | Tier 2b quarterly measures | Interest expense, net is the accrued charge including non-cash interest, not cash interest paid. |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-09-27_form10k.htm.jsonl | Annual report on Form 10-K | Fiscal 2023 to 2025; balance sheets 2024-09-28 and 2025-09-27 | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 1: audited statements | Statements, debt, liquidity and segment figures | Fiscal 2024 and 2023 are carve-out figures of the Treasure business before the merger of 2024-11-04; adverse opinion on internal control; page numbers are supplied text pages. |
| 10-Q_2025-12-27_form10q.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2025-12-27 and prior-year quarter | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited without auditor review stated | Statements, debt, liquidity and segment figures | Disclosure controls reported as not effective; prior-year quarter part carve-out. |
| 10-Q_2026-03-28_form10q.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-03-28 and prior-year comparatives | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited without auditor review stated | Statements, debt, liquidity and segment figures | Disclosure controls reported as not effective; prior-year comparatives part carve-out. |
| 10-Q_2026-06-27_form10q.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-06-27 and prior-year comparatives | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited without auditor review stated | Statements, debt, liquidity and segment figures | Newest period; disclosure controls reported as not effective at 2026-06-27. |
| EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2025-12-27 | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited issuer release | Adjusted EBITDA reconciliation, guidance and quarterly free cash flow | Non-GAAP measures defined by the issuer; cash flow header dates differ slightly from the filing. |
| EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and six months ended 2026-03-28 | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited issuer release | Adjusted EBITDA reconciliation, guidance and quarterly free cash flow | Non-GAAP measures defined by the issuer. |
| EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and nine months ended 2026-06-27 | USD | Millions | Consolidated Magnera Corporation | US GAAP | Tier 2b: unaudited issuer release | Adjusted EBITDA reconciliation, guidance and quarterly free cash flow | Non-GAAP measures defined by the issuer; prior-year cash flow header reads June 26, 2025 against June 28, 2025 in the filing. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Magnera Corporation | Issuer and registrant, formerly Glatfelter Corporation | FY2024 ended 2024-09-28; FY2025 ended 2025-09-27; FY2026 ends 2026-09-26 | USD | Millions | Consolidated Magnera Corporation and subsidiaries; two segments, Americas and Rest of World | US GAAP | FY2024; FY2025; Q1, Q2 and Q3 2026; H1, 9M 2025 and 9M 2026 |
| Treasure Holdco, Inc. | Accounting acquirer, a former subsidiary of Berry Global Group; its pre-merger combined statements are the fiscal 2024 comparatives | Same as above | USD | Millions | Carve-out combined statements before 2024-11-04 | US GAAP carve-out | FY2024; the part of FY2025 and 2025 interim periods before 2024-11-04 |
| Subsidiary guarantors | Not supplied: the documents name subsidiary guarantors only as parties to supplemental indentures listed in the exhibit index | Not supplied: not applicable to an unnamed entity | USD | Millions | Not supplied: guarantor perimeter is not described in the documents supplied | US GAAP | Not supplied: no guarantor financial statements were supplied |

The merger with Glatfelter closed on 2024-11-04, so fiscal 2025 includes the acquired business for about eleven months and the first quarter of 2025 for about two months. No subsequent event after 2026-06-27 is stated in any document; the fiscal year ending 2026-09-26 has closed before the as-of date and its results are not in the documents supplied.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Derive reported EBITDA | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Derivation | Operating income and depreciation and amortization as printed | Operating income plus depreciation and amortization | The issuer states no unadjusted EBITDA; other expense (income) is excluded as non-operating. | All income statement periods |
| Sign convention for other expense (income) | 10-Q_2026-03-28_form10q.htm.jsonl | Presentation | Q2 2026 other income printed as (1) | -1 with expense positive | One sign convention across the statement. | Q2 2026 and FY2024 |
| Use of the segment note depreciation and amortization | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Source choice | Depreciation on the cash flow statement and amortization on the income statement | Total depreciation and amortization of the segment note | The segment note prints one total for every period including discrete quarters, which the cash flow statement does not. | All income statement periods |
| Last-twelve-months construction | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Derived period | Fiscal 2025 and current and prior-year stubs | Fiscal 2025 plus current stub less prior-year stub | The method's LTM rule; no reported LTM figure is replaced, though the issuer's own LTM depreciation and amortization of 186 differs from the 187 built here by rounding. | 2025-12-27; 2026-03-28; 2026-06-27 |
| Quarterly cash flows not in the statement table | 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl; EX-99.1_2026-05-07_ef20072634_ex99-1.htm.jsonl | Derived period | Six-month and nine-month cumulative cash flows | Q2 and Q3 operating cash flow and capital additions in the credit metrics table only | The quarterly statements print cumulative cash flows only; the second quarter operating cash flow of 87 is also printed in the release. | Q2 2026; Q3 2026 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2025-12-27 | LTM | USD 211m | USD 63m (Q1 2026) | USD 31m (Q1 2025) | USD 243m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; reported EBITDA is operating income plus depreciation and amortization. The prior-year stub includes the merged business from 2024-11-04 only. |
| EBITDA (Reported), LTM to 2026-03-28 | LTM | USD 211m | USD 131m (H1 2026) | USD 93m (H1 2025) | USD 249m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; reported EBITDA is operating income plus depreciation and amortization. The prior-year stub includes the merged business from 2024-11-04 only. |
| EBITDA (Reported), LTM to 2026-06-27 | LTM | USD 211m | USD 203m (9M 2026) | USD 164m (9M 2025) | USD 250m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; reported EBITDA is operating income plus depreciation and amortization. The prior-year stub includes the merged business from 2024-11-04 only. |
| EBITDA (Adjusted), LTM to 2025-12-27 | LTM | USD 354m | USD 93m (Q1 2026) | USD 84m (Q1 2025) | USD 363m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; issuer-defined adjusted EBITDA. The prior-year stub includes the merged business from 2024-11-04 only. |
| EBITDA (Adjusted), LTM to 2026-03-28 | LTM | USD 354m | USD 183m (H1 2026) | USD 173m (H1 2025) | USD 364m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; issuer-defined adjusted EBITDA. The prior-year stub includes the merged business from 2024-11-04 only. |
| EBITDA (Adjusted), LTM to 2026-06-27 | LTM | USD 354m | USD 282m (9M 2026) | USD 264m (9M 2025) | USD 372m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; issuer-defined adjusted EBITDA. The prior-year stub includes the merged business from 2024-11-04 only. |
| Interest expense, net, LTM to 2025-12-27 | LTM | USD 141m | USD 40m (Q1 2026) | USD 26m (Q1 2025) | USD 155m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; accrued interest expense, net. The prior-year stub includes the merged business from 2024-11-04 only. |
| Interest expense, net, LTM to 2026-03-28 | LTM | USD 141m | USD 75m (H1 2026) | USD 65m (H1 2025) | USD 151m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; accrued interest expense, net. The prior-year stub includes the merged business from 2024-11-04 only. |
| Interest expense, net, LTM to 2026-06-27 | LTM | USD 141m | USD 112m (9M 2026) | USD 102m (9M 2025) | USD 151m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; accrued interest expense, net. The prior-year stub includes the merged business from 2024-11-04 only. |
| Net sales, LTM to 2025-12-27 | LTM | USD 3,204m | USD 792m (Q1 2026) | USD 702m (Q1 2025) | USD 3,294m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; net sales. The prior-year stub includes the merged business from 2024-11-04 only. |
| Net sales, LTM to 2026-03-28 | LTM | USD 3,204m | USD 1,588m (H1 2026) | USD 1,526m (H1 2025) | USD 3,266m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; net sales. The prior-year stub includes the merged business from 2024-11-04 only. |
| Net sales, LTM to 2026-06-27 | LTM | USD 3,204m | USD 2,445m (9M 2026) | USD 2,365m (9M 2025) | USD 3,284m | Calculated | 10-K_2025-09-27_form10k.htm.jsonl; 10-Q_2025-12-27_form10q.htm.jsonl; 10-Q_2026-03-28_form10q.htm.jsonl; 10-Q_2026-06-27_form10q.htm.jsonl | Fiscal 2025 plus the current stub less the prior-year stub; net sales. The prior-year stub includes the merged business from 2024-11-04 only. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Net sales growth against the prior-year period | -3.87% | 46.50% | 12.82% | -3.40% | 2.15% | Mixed | Fiscal 2025 growth is the merger; the first quarter of 2026 still includes merger carry-over, while the second quarter fell and the third rose slightly. |
| Margin | Gross margin | 10.84% | 10.52% | 12.25% | 11.93% | 13.07% | Rising in 2026 | Period flows; gross profit is net sales less cost of goods sold. |
| Margin | Adjusted EBITDA margin | 12.89% | 11.05% | 11.74% | 11.31% | 11.55% | Below fiscal 2024 | Issuer-defined adjusted EBITDA. |
| Margin | Reported EBITDA margin | 1.55% | 6.59% | 7.95% | 8.54% | 8.40% | Rising from fiscal 2025 | Calculated reported EBITDA. |
| Margin | Operating margin | -6.45% | 0.16% | 1.77% | 2.14% | 2.57% | Rising | Operating income (loss) over net sales. |
| Margin | Net margin | -7.04% | -4.96% | -4.29% | -2.26% | -2.33% | Improving from a loss | Net income (loss) over net sales. |
| Cash flow | Free cash flow (period flow, US$m) | 120 | 36 | -13 | 73 | -28 | Volatile | Operating cash flow less capital additions; Q2 and Q3 derived from cumulative statements. |
| Cash flow | Capital additions over net sales | 3.29% | 2.09% | 1.89% | 1.76% | 1.75% | Falling | Capital additions are reported cash additions. |
| Cash flow | Free cash flow over adjusted EBITDA | 42.55% | 10.17% | -13.98% | 81.11% | -28.28% | Volatile | Calculated. |
| Liquidity | Cash plus revolver commitment (period end, US$m) | Not supplied: no revolver existed at 2024-09-28 | 655 | 614 | 653 | 630 | Stable | Commitment basis; availability not stated. |
| Liquidity | Share of cash held outside the United States (period end) | Not supplied: not printed for fiscal 2024 | 86% | Not supplied: the report says primarily outside the United States without a percentage | 64% | 58% | Falling | Reported by the issuer. |
| Operating | Personal Care share of net sales (period flow) | 49% | 48% | 44% | 44% | 45% | Lower than fiscal 2025 | Reported share; the quarterly shares are for the quarter. |
| Operating | Consumer Solutions share of net sales (period flow) | 51% | 52% | 56% | 56% | 55% | Higher than fiscal 2025 | Reported share. |
| Debt | Repayments on long-term borrowings (period flow, US$m) | 2 | 484 | 27 | 36 | 2 | Slowing | Q2 is six months less Q1 and Q3 is nine months less six months; the fiscal 2025 figure includes refinancing at the merger. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the primary denominator; adjusted EBITDA is shown beside it | Adjusted EBITDA adds back depreciation and amortization, restructuring and business optimization, Argentina hyperinflation, corporate allocation and other non-cash charges to operating income | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6; 10-K_2025-09-27_form10k.htm.jsonl, page 41 | All periods | High: 122 between 250 and 372 at 2026-06-27 and 143 between 211 and 354 in fiscal 2025 | Financial foundation; Fundamental credit | Both are carried; ratios on reported EBITDA are primary and adjusted ratios are labelled |
| Free cash flow | Operating cash flow less capital additions | Annual report adds 90 of pre-merger operating cash flow to operating cash flow of 103 before capital additions of 67 to reach 126; the releases and 10-Qs use operating cash flow less capital additions | 10-K_2025-09-27_form10k.htm.jsonl, page 17; 10-Q_2026-06-27_form10q.htm.jsonl, page 18 | FY2025 | High: 126 against 36 | Financial foundation; Fundamental credit | 36 is used; 126 is recorded as the issuer's figure |
| Debt | Carrying value net of discounts and deferred fees | Principal 1,966 against carrying value 1,901 at 2026-06-27; fair value of the marketable debt is 48 below book value | 10-Q_2026-06-27_form10q.htm.jsonl, pages 8 and 10 | 2026-06-27 | Medium: 65 | Financial foundation; Fundamental credit | Carrying value is used for leverage; principal is shown in the reconciliation |
| Debt repaid | Repayments on long-term borrowings in the cash flow statement | The narrative describes a 63 prepayment of debt year to date while the statement shows repayments of 65 | 10-Q_2026-06-27_form10q.htm.jsonl, pages 4 and 18 | 9M 2026 | Low: 2 | Financial foundation | The statement figure of 65 is used; the difference is unexplained |
| Cash interest | Interest paid in cash | Net cash interest of 124 for fiscal 2025, equal to interest expense, net of 141 less non-cash interest expense of 17; no quarterly figure | 10-K_2025-09-27_form10k.htm.jsonl, pages 24 and 34 | FY2025; all interim periods | Medium | Financial foundation; Fundamental credit | Cash cover is stated for fiscal 2025 only; accrued interest cover is shown for interim periods |
| Pro forma adjusted EBITDA | Last-twelve-months adjusted EBITDA | The issuer adds 35 of synergies and cost reductions and deducts 2 for a divestiture to reach 405 | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6 | LTM to 2026-06-27 | Medium: 33 net | Fundamental credit | Kept out of every ratio; the synergies are not realised |
| Depreciation and amortization, last twelve months | Fiscal 2025 plus current stub less prior-year stub | The release prints 186 for the twelve months to 2026-06-27; the construction gives 187 | EX-99.1_2026-08-06_ef20079553_ex99-1.htm.jsonl, page 6 | LTM to 2026-06-27 | Low: 1, rounding | Financial foundation | The method's construction is used |
| Fiscal 2026 outlook | Outlook as most recently stated | Operating cash flow of 170 to 190 and capital spending of 80 in the first quarter release; 150 to 170 and 60 in the third quarter report; free cash flow of 90 to 110 unchanged | EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 2; EX-99.1_2026-02-05_ef20064605_ex99-1.htm.jsonl, page 6; 10-Q_2026-06-27_form10q.htm.jsonl, page 13 | FY2026 | Medium | Fundamental credit | The third quarter report is current; the change in the mix is a limitation |
| Claims outside debt | Lease, pension and other obligations separated from financial debt | Operating lease liabilities of 60 at 2026-06-27 (18 current and 42 noncurrent), an unfunded pension obligation of 27 at 2025-09-27, an environmental liability of 17 against an escrow asset of 9, a tax claim not expected to exceed 66 and cross-currency swap liabilities of 78 are outside the debt line | 10-Q_2026-06-27_form10q.htm.jsonl, pages 8, 9 and 12; 10-K_2025-09-27_form10k.htm.jsonl, page 39 | 2026-06-27 | Medium: 248 in total, not added to debt | Financial foundation; Fundamental credit | Kept outside Total Debt; named so later modules can weigh them |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage analysis | Ready with Limitations | Reported EBITDA is derived; cash interest is printed for fiscal 2025 only; year-end 2026 not reported | Use reported EBITDA as primary and label adjusted ratios |
| Liquidity analysis | Ready with Limitations | Revolver availability, letters of credit and borrowing base are not stated | Treat 630 as a commitment-basis figure |
| Refinancing and maturity analysis | Ready with Limitations | Call schedules and amendment terms are not in the documents | Use contractual maturities of 2029 and 2031 |
| Earnings quality | Ready with Limitations | Adjusted against reported EBITDA gap of 122; carve-out comparatives | Read the bridge and the conflict register together |
| Covenant and structural priority analysis | Not Ready | Credit agreements, indentures, collateral and guarantor scope were not supplied | Obtain the executed documents before any such conclusion |
| Forecast inputs | Ready with Limitations | Only the issuer's annual outlook is available; no segment guidance | Use the outlook as the issuer's statement only |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term loan | Term loan | Not supplied: carrying values are not disclosed by instrument | 706 | 706 | Not applicable | Described as senior secured; collateral not described | Not supplied: relative priority is not stated | USD | 706 | Not applicable | SOFR plus 4.25% | floating | SOFR | 425 | Not applicable | November 2031 | Not supplied: scheduled amortisation is not stated | 10-Q_2026-06-27_form10q.htm.jsonl, page 8; 10-Q_2026-06-27_form10q.htm.jsonl, page 19 |
| Revolving credit facility (asset-based) | Revolving credit facility | Not supplied: carrying values are not disclosed by instrument | 0 | 0 | 350 | Described as senior secured; collateral not described | Not supplied: relative priority is not stated | USD | 0 | Not applicable | SOFR plus 1.50% to 2.00% | floating | SOFR | 150 to 200 | Not applicable | November 2029 | Not applicable | 10-Q_2026-06-27_form10q.htm.jsonl, page 8; 10-Q_2026-06-27_form10q.htm.jsonl, page 19 |
| 4.75% First Priority Senior Secured Notes | Senior secured notes | Not supplied: carrying values are not disclosed by instrument | 500 | 500 | Not applicable | Named first priority senior secured; collateral not described | Not supplied: relative priority is not stated | USD | 500 | Not applicable | 4.75% | fixed | Not applicable | Not applicable | Not applicable | October 2029 | 0 | 10-Q_2026-06-27_form10q.htm.jsonl, page 8 |
| 7.25% First Priority Senior Secured Notes | Senior secured notes | Not supplied: carrying values are not disclosed by instrument | 760 | 760 | Not applicable | Named first priority senior secured; collateral not described | Not supplied: relative priority is not stated | USD | 760 | Not applicable | 7.25% | fixed | Not applicable | Not applicable | Not applicable | November 2031 | 0 | 10-Q_2026-06-27_form10q.htm.jsonl, page 8 |
| Financing cost adjustment | Debt discounts, deferred fees and other | -65 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -65 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-27_form10q.htm.jsonl, page 8 |

The reporting currency amounts add to 1,901, the Total Debt of the balance sheet at 2026-06-27. The cross-currency swaps of EUR 250 million to November 2027 and EUR 425 million to November 2029 hedge net investment and are not debt.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 34 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 7 |
| Fields present | 22 |
| Fields total | 24 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 3 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| N1 | Net debt at FY2025 / 2025-09-27 | 1,952 less 305 | 1,647 |
| N2 | Net debt at 2025-12-27 | 1,931 less 264 | 1,667 |
| N3 | Net debt at 2026-03-28 | 1,899 less 303 | 1,596 |
| N4 | Net debt at 2026-06-27 | 1,901 less 280 | 1,621 |
| E1 | EBITDA (Reported), FY2024 | Operating income -141 plus depreciation and amortization 175 | 34 |
| E2 | EBITDA (Reported), FY2025 | Operating income 5 plus depreciation and amortization 206 | 211 |
| E3 | EBITDA (Reported), Q1 2026 | Operating income 14 plus depreciation and amortization 49 | 63 |
| E4 | EBITDA (Reported), Q2 2026 | Operating income 17 plus depreciation and amortization 51 | 68 |
| E5 | EBITDA (Reported), Q3 2026 | Operating income 22 plus depreciation and amortization 50 | 72 |
| E6 | EBITDA (Reported), 9M 2025 | Operating income -5 plus depreciation and amortization 169 | 164 |
| E7 | EBITDA (Reported), 9M 2026 | Operating income 53 plus depreciation and amortization 150 | 203 |
| E8 | EBITDA (Reported) stubs | Q1 2025: operating income (22) plus depreciation and amortization 53; H1 2026: 63 plus 68; H1 2025: operating income (18) plus depreciation and amortization 111 | 31; 131; 93 |
| L1 | EBITDA (Reported), last twelve months to 2025-12-27 | Fiscal 2025 211 plus Q1 2026 63 less Q1 2025 31 | 243 |
| L2 | EBITDA (Reported), last twelve months to 2026-03-28 | Fiscal 2025 211 plus H1 2026 131 less H1 2025 93 | 249 |
| L3 | EBITDA (Reported), last twelve months to 2026-06-27 | Fiscal 2025 211 plus 9M 2026 203 less 9M 2025 164 | 250 |
| L4 | EBITDA (Adjusted), last twelve months to 2025-12-27 | Fiscal 2025 354 plus Q1 2026 93 less Q1 2025 84 | 363 |
| L5 | EBITDA (Adjusted), last twelve months to 2026-03-28 | Fiscal 2025 354 plus H1 2026 183 less H1 2025 173 | 364 |
| L6 | EBITDA (Adjusted), last twelve months to 2026-06-27 | Fiscal 2025 354 plus 9M 2026 282 less 9M 2025 264 | 372 |
| L7 | Interest expense, net, last twelve months to 2025-12-27 | Fiscal 2025 141 plus Q1 2026 40 less Q1 2025 26 | 155 |
| L8 | Interest expense, net, last twelve months to 2026-03-28 | Fiscal 2025 141 plus H1 2026 75 less H1 2025 65 | 151 |
| L9 | Interest expense, net, last twelve months to 2026-06-27 | Fiscal 2025 141 plus 9M 2026 112 less 9M 2025 102 | 151 |
| L10 | Net sales, last twelve months to 2025-12-27 | Fiscal 2025 3,204 plus Q1 2026 792 less Q1 2025 702 | 3,294 |
| L11 | Net sales, last twelve months to 2026-03-28 | Fiscal 2025 3,204 plus H1 2026 1,588 less H1 2025 1,526 | 3,266 |
| L12 | Net sales, last twelve months to 2026-06-27 | Fiscal 2025 3,204 plus 9M 2026 2,445 less 9M 2025 2,365 | 3,284 |
| R1 | Leverage at FY2025 / 2025-09-27 | Total debt 1,952 and net debt 1,647 over reported EBITDA 211 and adjusted EBITDA 354 | Total debt / EBITDA 9.25x; net debt / EBITDA 7.81x; total debt / adjusted EBITDA 5.51x; net debt / adjusted EBITDA 4.65x |
| R2 | Leverage at 2025-12-27 | Total debt 1,931 and net debt 1,667 over reported EBITDA 243 and adjusted EBITDA 363 | Total debt / EBITDA 7.95x; net debt / EBITDA 6.86x; total debt / adjusted EBITDA 5.32x; net debt / adjusted EBITDA 4.59x |
| R3 | Leverage at 2026-03-28 | Total debt 1,899 and net debt 1,596 over reported EBITDA 249 and adjusted EBITDA 364 | Total debt / EBITDA 7.63x; net debt / EBITDA 6.41x; total debt / adjusted EBITDA 5.22x; net debt / adjusted EBITDA 4.38x |
| R4 | Leverage at 2026-06-27 | Total debt 1,901 and net debt 1,621 over reported EBITDA 250 and adjusted EBITDA 372 | Total debt / EBITDA 7.60x; net debt / EBITDA 6.48x; total debt / adjusted EBITDA 5.11x; net debt / adjusted EBITDA 4.36x |
| R5 | Cash interest cover at FY2025 / 2025-09-27 | Reported EBITDA 211 and adjusted EBITDA 354 over cash interest paid 124 | 1.70x; 2.85x |
| R6 | Cover of interest expense, net at FY2025 / 2025-09-27 | Reported EBITDA 211 and adjusted EBITDA 354 over interest expense, net 141 | 1.50x; 2.51x |
| R7 | Cover of interest expense, net at 2025-12-27 | Reported EBITDA 243 and adjusted EBITDA 363 over interest expense, net 155 | 1.57x; 2.34x |
| R8 | Cover of interest expense, net at 2026-03-28 | Reported EBITDA 249 and adjusted EBITDA 364 over interest expense, net 151 | 1.65x; 2.41x |
| R9 | Cover of interest expense, net at 2026-06-27 | Reported EBITDA 250 and adjusted EBITDA 372 over interest expense, net 151 | 1.66x; 2.46x |
| F1 | Free cash flow, FY2024 | Net cash from operating activities 192 less additions to property, plant and equipment 72 | 120 |
| F2 | Free cash flow, FY2025 | Net cash from operating activities 103 less additions to property, plant and equipment 67 | 36 |
| F3 | Free cash flow, Q1 2026 | Net cash from operating activities 2 less additions to property, plant and equipment 15 | -13 |
| F4 | Free cash flow, Q2 2026 | Net cash from operating activities 87 less additions to property, plant and equipment 14 | 73 |
| F5 | Free cash flow, Q3 2026 | Net cash from operating activities -13 less additions to property, plant and equipment 15 | -28 |
| F6 | Free cash flow, 9M 2025 | Net cash from operating activities 7 less additions to property, plant and equipment 52 | -45 |
| F7 | Free cash flow, H1 2026 | Net cash from operating activities 89 less additions to property, plant and equipment 29 | 60 |
| F8 | Free cash flow, 9M 2026 | Net cash from operating activities 76 less additions to property, plant and equipment 44 | 32 |
| F9 | Quarterly cash flows not printed | Q2 2026 operating cash flow 87 (release, also H1 89 less Q1 2) and capital additions 14 (H1 29 less Q1 15); Q3 2026 operating cash flow 76 less 89 and capital additions 44 less 29 | Q2 2026: 87 and 14; Q3 2026: (13) and 15 |
| F10 | Annual report free cash flow definition | Operating cash flow 103 plus pre-merger operating cash flow 90 less capital additions 67 | 126 |
| F11 | Free cash flow still needed for the fiscal 2026 outlook | Outlook free cash flow 90 to 110 less nine-month free cash flow 32 | 58 to 78 |
| D1 | Gap between last-twelve-months adjusted and reported EBITDA at 2026-06-27 | Adjusted 372 less reported 250 | 122 |
| D2 | Change in net debt from 2025-09-27 to 2026-06-27 | Net debt 1,647 less 1,621; carrying value of debt 1,952 less 1,901 is 51 although principal repaid is 65, the other 14 being amortisation of discounts and fees (79 to 65); cash 305 less 280 is 25 | 26 |
| D3 | Contractual principal at 2026-06-27 | Term loan 706 plus 4.75% notes 500 plus 7.25% notes 760 | 1,966 |
| D4 | Reconciling items from principal to carrying value at 2026-06-27 | Carrying value 1,901 less principal 1,966 (debt discounts, deferred fees and other) | -65 |
| D5 | Debt maturing in 2031 at 2026-06-27 | Term loan 706 plus 7.25% notes 760 | 1,466 |
| D6 | Cash plus revolver commitment | FY2025: 305 plus 350; 2025-12-27: 264 plus 350; 2026-03-28: 303 plus 350; 2026-06-27: 280 plus 350 | 655; 614; 653; 630 |
| D7 | Floating-rate share of principal at 2026-06-27 | Term loan 706 over principal 1,966 | 35.91% |
| D8 | Cash interest reconciled to interest expense, net for fiscal 2025 | Interest expense, net 141 less non-cash interest expense 17 | 124 |
| D9 | Adjusted EBITDA bridge for fiscal 2025 | Reported EBITDA 211 plus restructuring and other 94 plus Argentina hyperinflation 4 plus corporate expense allocation 3 plus other non-cash charges 42 | 354 |
| D10 | Debt repaid from 2025-09-27 to 2026-06-27 | Term loan 731 less 706 is 25; 7.25% notes 800 less 760 is 40 | 65 |
| D11 | Pro forma adjusted EBITDA as stated by the issuer | Last-twelve-months adjusted EBITDA 372 less divestiture 2 plus synergies and cost reductions 35 | 405 |
| D12 | Cash held outside the United States | Cash 280 at 2026-06-27 times 58% | 162 |
| D16 | Net debt at 2026-06-27 over fiscal 2025 adjusted EBITDA | Net debt 1,621 over adjusted EBITDA 354 | 4.58x |
| D17 | Increase in operating cash flow in the nine months | Net cash from operating activities 76 less 7 | 69 |
| D18 | Claims outside the debt line | Operating lease liabilities 60 plus pension obligation 27 plus environmental liability 17 plus tax claim 66 plus swap liabilities 78 | 248 |
| D13 | Debt maturing in 2029 and 2031 against contractual principal | 2029: 500 plus 2031: 1,466 | 1,966 |
| D14 | Working capital outflow in the nine months | Changes in working capital, net: 9M 2026 is a decrease of 34 and 9M 2025 a decrease of 119 | 34; 119 |
| D15 | Quarterly free cash flow outflows | Q1 2026 free cash flow of minus 13 and Q3 2026 of minus 28 expressed as outflows | 13; 28 |
| K1 | Net sales growth against the prior-year period | Net sales over prior-year net sales less one: FY2024 2,187 over 2,275; FY2025 3,204 over 2,187; Q1 792 over 702; Q2 796 over 824; Q3 857 over 839 | FY2024 -3.87%; FY2025 46.50%; Q1 2026 12.82%; Q2 2026 -3.40%; Q3 2026 2.15% |
| K2 | Gross margin | Gross profit over net sales | FY2024 10.84%; FY2025 10.52%; Q1 2026 12.25%; Q2 2026 11.93%; Q3 2026 13.07% |
| K3 | Adjusted EBITDA margin | Adjusted EBITDA over net sales | FY2024 12.89%; FY2025 11.05%; Q1 2026 11.74%; Q2 2026 11.31%; Q3 2026 11.55% |
| K4 | Reported EBITDA margin | Reported EBITDA over net sales | FY2024 1.55%; FY2025 6.59%; Q1 2026 7.95%; Q2 2026 8.54%; Q3 2026 8.40% |
| K5 | Operating margin | Operating income (loss) over net sales | FY2024 -6.45%; FY2025 0.16%; Q1 2026 1.77%; Q2 2026 2.14%; Q3 2026 2.57% |
| K6 | Net margin | Net income (loss) over net sales | FY2024 -7.04%; FY2025 -4.96%; Q1 2026 -4.29%; Q2 2026 -2.26%; Q3 2026 -2.33% |
| K7 | Capital additions over net sales | Additions to property, plant and equipment over net sales | FY2024 3.29%; FY2025 2.09%; Q1 2026 1.89%; Q2 2026 1.76%; Q3 2026 1.75%; 9M 2026 1.80% |
| K8 | Free cash flow over adjusted EBITDA | Free cash flow over adjusted EBITDA | FY2024 42.55%; FY2025 10.17%; Q1 2026 -13.98%; Q2 2026 81.11%; Q3 2026 -28.28% |

## Gaps

| Gap | Effect | Severity | Action |
| --- | --- | --- | --- |
| Lines printed as a dash in the filings are Not supplied rather than zero: goodwill impairment, several cash flow lines and the former parent's net investment in the statement tables | Those cells carry no figure; the printed identities still balance | Low | No action; read the dash as nil only if the issuer confirms it |
| The issuer states no unadjusted EBITDA | Reported EBITDA is calculated as operating income plus depreciation and amortization and excludes other expense (income) | Medium | Confirm the issuer's own unadjusted figure if it publishes one |
| Cash interest paid is printed for fiscal 2025 only | No cash interest cover is stated for the quarterly dates; accrued interest cover stands in | Medium | Obtain the interest paid supplemental disclosure for 2026 |
| The 2024 balance sheet prints a dash for long-term debt | No leverage is stated for fiscal 2024; the ratio tables start at fiscal 2025 | Low | None needed for the current view |
| Fiscal 2023 annual figures are not carried into the tables | They are carve-out figures before the merger and are not comparable | Low | Add if a pre-merger trend is wanted |
| Revolver availability, letters of credit drawn on it and any borrowing base are not printed | Liquidity is a commitment-basis figure and availability may be lower | High | Obtain the revolver compliance or availability disclosure |
| Legal rank, collateral and guarantor scope of the term loan, revolver and notes are not stated | No debt stack is shown and no secured subtotal is stated | High | Obtain the credit agreements, indentures and intercreditor terms |
| Carrying values by instrument are not disclosed | Only principal by instrument and one aggregate adjustment of minus 65 are shown | Low | None needed |
| The second and third quarter cash flows are printed cumulatively only | Discrete quarter flows are derived in the credit metrics table and calculations, not in the statement table | Low | None needed |
| No corporate or elimination line is disclosed for segments | The two segments sum to the consolidated total in every period | Low | None needed |
| Pre-merger periods are carve-out figures and the prior-year stubs include the merged business from 2024-11-04 only | Last-twelve-months figures to the first and second quarters of 2026 are not like-for-like with the merged group | Medium | Use the issuer's comparable basis figures with care |
| The fiscal year ended 2026-09-26 is not reported and no later document was supplied | Year-end debt, cash and leverage are not established | High | Add the fiscal 2026 annual report when filed |
| Receivables sold through customer supply chain financing programs have no stated size | Operating cash flow may be flattered or depressed by timing and the programs are not debt on the balance sheet | Medium | Obtain the amounts sold at each period end |
| The narrative states a 63 debt prepayment while the cash flow statement shows repayments of 65 | A difference of 2 is unexplained | Low | Ask the issuer for the reconciliation |
| Management reports ineffective disclosure controls and material weaknesses in controls | Reliance on the latest quarterly figures is lower than for a clean control record | Medium | Watch the remediation and any restatement |

## Next module
The orchestrator selects the next module.
