# CP-1 Financial foundation for CHS INC (chscp), as of 2026-11-05

## Request

Financial foundation for CHS INC (issuer id chscp), as of 2026-11-05, on the credit_snapshot pathway. Scope: statements, debt, liquidity, leverage and coverage built from the seven supplied filings and releases, with every figure traced to its page.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2026-08-31_chscp-20260831.htm.jsonl | Annual report on Form 10-K of CHS Inc. for the fiscal year ended August 31, 2026, with audited consolidated statements and notes | 2026-11-04 | 7af90f68bff1cc427159bcc12ffc87c427ce829f2621b0c4238922f45880492c | Date taken from the signature page; statements, debt note, liquidity, equities, segments, cash flow and contractual obligations |
| 10-Q_2025-11-30_chscp-20251130.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended November 30, 2025 | 2026-01-07 | 3b343d46b4f667e29be99b08f7d799dc25471f06dbcbf91d62c596b40053bc50 | Date taken from the signature page; period-end balance sheet, debt and facility usage at November 30, 2025 |
| 10-Q_2026-02-28_chscp-20260228.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended February 28, 2026 | 2026-04-08 | 335ab8ab1983479e957ab5bcc688bac42f2a8847cb6800ad1d72a83671457084 | Date taken from the signature page; period-end balance sheet, debt and facility usage at February 28, 2026 |
| 10-Q_2026-05-31_chscp-20260531.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 31, 2026 | 2026-07-08 | d9720f91bf0c93fa122637a031df8f3b728863173bc1b8717d0a6e377caf2082 | Date taken from the signature page; nine-month statements, balance sheet, debt and facility usage at May 31, 2026 |
| EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl | Press release on second quarter fiscal year 2026 earnings (Exhibit 99.1) | 2026-04-08 | 33496a1570da087ac1976522b03589f92cee4a9a2670952160166094e3791034 | Read for six-month segment earnings |
| EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl | Press release on third quarter fiscal year 2026 earnings (Exhibit 99.1) | 2026-07-08 | 9732954cd83cfd2faab08d34c8a937435e86ab588c7e99ee653b9179d1961e0c | Nine-month segment earnings used to derive fourth-quarter segment earnings |
| EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl | Press release on fiscal year 2026 earnings (Exhibit 99.1) | 2026-11-04 | cae53d4e6b095242a55a168a21c6d1a5d0c45880ba1e0b3a388701114a691f44 | Full-year segment earnings and fiscal 2027 distribution intent |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 65d7ae926eea08b1a1d51b5c839edac351dde3a8b8008dba76723e1db5de6107 | Source set, gaps and the conflict on the second quarter release label |

## Findings

### Bottom line

CHS carries low leverage at its August 31, 2026 year end, with net debt of USD 2,238.1 million at 1.14x EBITDA, but that is the seasonal low and 28.9% of the EBITDA is equity income, so creditors should underwrite to seasonal-high debt.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144; 10-Q_2026-02-28_chscp-20260228.htm.jsonl, page 4; calculation C07; calculation C20

CHS reports no EBITDA, so the figure used is net income plus interest, tax and depreciation and amortisation. Net debt was USD 3,879.3 million at the February 28, 2026 quarter end, the highest period-end balance in the sources and 1.73 times the year-end level, and Q4 alone produced 65.5% of annual pre-tax earnings.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146; calculation C01; calculation C18; calculation C22

### Key findings

- Year-end leverage is low and falling, but it is a seasonal low. Total debt was USD 2,501.7 million at the 2026 year end, 1.27x EBITDA, against 2.12x a year earlier, while the working-capital lines swelled debt to a February quarter-end high. A lender sizing to that high sees 1.73 times the year-end net debt, so the year-end ratio overstates the cushion.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144; 10-Q_2026-02-28_chscp-20260228.htm.jsonl, page 4; calculation C04; calculation C17; calculation C18
- The EBITDA behind that leverage is a house calculation and 28.9% of it is equity income from joint ventures. Distributions from investees exceeded equity income by USD 25.4 million in FY2026, and CF Nitrogen alone paid USD 447.3 million, so the income was cash-backed this year, but it depends on urea and UAN prices. On EBITDA excluding equity income and other income, FY2026 total debt is 1.97x.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 158; calculation C01; calculation C19; calculation C20
- Earnings are back-ended. Q4 pre-tax earnings were USD 739.3 million, 65.5% of the year, after a nine-month operating loss. The annual report's own seasonality table shows Q4 at a much lower share and Q2 as a positive share although Q2 was a loss, so seasonality should be read from the quarterly filings, not from that table.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 60; 10-Q_2026-05-31_chscp-20260531.htm.jsonl, page 5; calculation C22
- Cash generation was strong but concentrated in Q4. Operating cash flow was USD 1,584.0 million, of which USD 1,382.8 million came in Q4 as receivables unwound and earnings peaked; free cash flow after capital spending and major maintenance was USD 1,052.5 million, and USD 753.4 million after preferred dividends, patronage cash and equity redemptions.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146; 10-Q_2026-05-31_chscp-20260531.htm.jsonl, pages 5–6; calculation C23; calculation C24
- Coverage is ample. EBITDA covered cash interest paid 11.79x in FY2026 against 9.57x in FY2025, even though interest expense rose USD 17.6 million on a higher average short-term balance and less capitalised interest.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 72–73; calculation C13
- Liquidity rests on a committed revolver and the securitization lines. At year end the USD 2,800.0 million revolver was undrawn alongside USD 263.6 million of cash. The securitization and repurchase facilities, which reached USD 850.0 million and USD 250.0 million of use at quarter ends, run only to August 25, 2027, and letters of credit under the revolver are not stated, so availability net of them is not established.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–164; 10-Q_2026-02-28_chscp-20260228.htm.jsonl, pages 12–13
- The debt stack is long-dated and unsecured where it is term debt: USD 1,703.0 million of private placement notes and a USD 300.0 million term loan, with USD 450.0 million due in fiscal 2030 as the largest single year. The maturity chart also counts the short-term notes payable in fiscal 2027, so that bar is a rollover need, not scheduled amortisation.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165; calculation C09
- Claims on cash are rising. Capital expenditures are expected at USD 850.8 million in FY2027 against USD 463.3 million in FY2026, and the company intends USD 300.0 million of patronage cash and equity redemptions beside USD 168.7 million of preferred dividends. Counting the USD 2,264.0 million of preferred stock as debt-like lifts FY2026 net leverage to 2.29x.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76; EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 1; calculation C21

### Contrary evidence and what would change the view

The strongest case against the low-leverage reading is that FY2026 earnings look unusually good for a commodity cooperative. Energy earned USD 554.6 million of pre-tax earnings after a USD 19.0 million loss in FY2025, helped by about USD 205.0 million of small refinery exemption relief, and record renewable energy credit costs were largely offset by higher crack spreads and wider crude oil discounts. If EBITDA returned to the FY2025 level of USD 1,412.3 million, FY2026 year-end total debt would be 1.77x and the February 2026 quarter-end total debt of USD 4,127.8 million would be 2.92x. The view would turn if period-end debt stays near its February level after the fiscal 2027 capital programme starts, if equity distributions from CF Nitrogen fall, or if the covenant levels, which the filings do not give, prove tight against those ratios.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 64; calculation C02; calculation C25; calculation C26

### Limitations

- The company reports no EBITDA, so every leverage and coverage ratio uses a house calculation that includes equity income; on the narrower operating definition the ratios are higher, and the low-leverage conclusion is weaker.
- Covenant levels are not stated, so headroom is not established and the conclusion cannot be tested against the tests that bind.
- The August 31, 2024 balance sheet and the fiscal 2025 annual report are not in the sources, so FY2024 leverage is not established and the FY2025 revolver size rests on the first-quarter report.
- CHS Capital, the financing subsidiary, discloses no separate cash, EBITDA or cash flow, so industrial leverage is not established; its notes payable of USD 255.4 million are matched-funding debt that cannot be set against industrial EBITDA.
- The legal ranking, guarantors and call terms of the notes are not stated, so no debt stack is drawn and the structural position of unsecured creditors is not established.
- Q4 figures are derived by subtracting unaudited nine-month statements from the audited year, so quarterly conclusions inherit any difference between the two sets.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-08-31 | Not supplied: the August 31, 2024 balance sheet is not in the sources | Not supplied: the August 31, 2024 balance sheet is not in the sources | x | Total debt and net debt cannot be stated without the August 31, 2024 balance sheet; EBITDA for FY2024 is stated in the register. |
| FY2025 / 2025-08-31 | 2.12 | 1.88 | x | Carrying-value debt over calculated reported EBITDA; the issuer states no EBITDA, and CHS Capital notes payable are included. |
| FY2026 / 2026-08-31 | 1.27 | 1.14 | x | Carrying-value debt over calculated reported EBITDA; the issuer states no EBITDA, and CHS Capital notes payable are included. |

Year-end debt is the seasonal low, so these ratios understate leverage during the year.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-08-31 | 17.62 | x | Calculated reported EBITDA over cash interest paid from the cash flow statement. |
| FY2025 / 2025-08-31 | 9.57 | x | Calculated reported EBITDA over cash interest paid from the cash flow statement. |
| FY2026 / 2026-08-31 | 11.79 | x | Calculated reported EBITDA over cash interest paid from the cash flow statement. |

EBITDA includes equity income, so cover on operating earnings alone would be lower.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2025 / 2025-08-31 | 327.826 | 2,620.000 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the 2,800.000 committed revolver less 180.000 drawn, with the facility size taken from the first-quarter report because the fiscal 2025 annual report was not supplied; letters of credit are not stated. |
| FY2026 / 2026-08-31 | 263.603 | 2,800.000 | US$m | Cash and cash equivalents excluding restricted cash; undrawn is the 2,800.000 committed revolver with no borrowings; securitization and repurchase facilities are excluded because their unused amounts depend on eligible receivables; letters of credit are not stated. |

Letters of credit under the revolver are not stated, so undrawn availability is shown gross of any.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2027 | 507.564 | US$m | Long-term debt due 58.562 plus short-term notes payable 449.002 counted as due within the year; the notes payable are working-capital lines renewed annually. |
| FY2028 | 190.600 | US$m | Long-term debt due as printed in the maturity table. |
| FY2029 | 0.150 | US$m | Long-term debt due as printed in the maturity table. |
| FY2030 | 450.000 | US$m | Long-term debt due as printed: a 150.000 note and the 300.000 term loan payable October 29, 2029. |
| FY2031 | 200.000 | US$m | Long-term debt due as printed in the maturity table. |
| FY2032 | 150.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |
| FY2033 | 165.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |
| FY2034 | 150.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |
| FY2036 | 240.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |
| FY2037 | 150.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |
| FY2039 | 250.000 | US$m | Part of the printed thereafter bucket, split by the fiscal year each note is stated as due; finance leases excluded. |

Fiscal years with no note due (FY2035 and FY2038) are omitted, and finance leases of 51.845 and issuance costs of 3.434 are outside the ladder.

### Financials and credit metrics

| Metric | Period | Value | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- |
| Revenue | FY2026 | 39,231.2 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Revenue | FY2025 | 35,462.6 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Revenue | FY2024 | 39,261.2 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Income before income taxes | FY2026 | 1,128.7 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Income before income taxes | FY2025 | 614.8 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net income attributable to CHS Inc. | FY2026 | 1,095.9 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net income attributable to CHS Inc. | FY2025 | 597.9 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| EBITDA (calculated) | FY2026 | 1,969.5 | USD millions | Calculated: net income plus interest, tax and depreciation and amortisation | calculation C01 |
| EBITDA (calculated) | FY2025 | 1,412.3 | USD millions | Calculated | calculation C02 |
| EBITDA (calculated) | FY2024 | 1,771.7 | USD millions | Calculated | calculation C03 |
| EBITDA excluding equity income and other income | FY2026 | 1,269.0 | USD millions | Calculated: operating earnings plus depreciation and amortisation | calculation C19 |
| Equity income share of EBITDA | FY2026 | 28.9 | % | Calculated | calculation C20 |
| Total debt | FY2026 | 2,501.7 | USD millions | Reported lines summed at carrying value | calculation C04 |
| Total debt | FY2025 | 2,988.3 | USD millions | Reported lines summed at carrying value | calculation C05 |
| Cash and cash equivalents | FY2026 | 263.6 | USD millions | Reported, excluding restricted cash | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Cash and cash equivalents | FY2025 | 327.8 | USD millions | Reported, excluding restricted cash | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net debt | FY2026 | 2,238.1 | USD millions | Calculated | calculation C07 |
| Net debt | FY2025 | 2,660.5 | USD millions | Calculated | calculation C08 |
| Net debt at the highest period end, 2026-02-28 | FY2026 interim | 3,879.3 | USD millions | Calculated from the second-quarter balance sheet | calculation C17 |
| Highest period-end net debt as a multiple of year-end net debt | FY2026 interim | 1.73 | times | Calculated | calculation C18 |
| Total debt at the highest period end, 2026-02-28 | FY2026 interim | 4,127.8 | USD millions | Reported lines summed at carrying value | calculation C16 |
| Total debt / EBITDA | FY2026 | 1.27 | x | Calculated | calculation C10 |
| Total debt / EBITDA | FY2025 | 2.12 | x | Calculated | calculation C11 |
| Net debt / EBITDA | FY2026 | 1.14 | x | Calculated | calculation C12 |
| Net debt / EBITDA | FY2025 | 1.88 | x | Calculated | calculation C14 |
| Total debt / EBITDA excluding equity income and other income | FY2026 | 1.97 | x | Calculated | calculation C19 |
| EBITDA / cash interest | FY2026 | 11.79 | x | Calculated | calculation C13 |
| EBITDA / cash interest | FY2025 | 9.57 | x | Calculated | calculation C15 |
| Net debt including preferred stock / EBITDA | FY2026 | 2.29 | x | Calculated; preferred stock treated as debt-like, an analyst judgement | calculation C21 |
| Total debt at FY2026 year end / FY2025 EBITDA | FY2026 | 1.77 | x | Calculated sensitivity, an analyst judgement | calculation C25 |
| Highest period-end total debt / FY2025 EBITDA | FY2026 interim | 2.92 | x | Calculated sensitivity, an analyst judgement | calculation C26 |
| Operating cash flow | FY2026 | 1,584.0 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Operating cash flow in Q4 | Q4 FY2026 | 1,382.8 | USD millions | Calculated: full year less nine months | calculation C23 |
| Free cash flow after capital spending and major maintenance | FY2026 | 1,052.5 | USD millions | Calculated | calculation C23 |
| Free cash flow after preferred dividends, patronage cash and equity redemptions | FY2026 | 753.4 | USD millions | Calculated | calculation C24 |
| Pre-tax earnings in Q4 | Q4 FY2026 | 739.3 | USD millions | Calculated: full year less nine months | calculation C22 |
| Q4 share of annual pre-tax earnings | Q4 FY2026 | 65.5 | % | Calculated | calculation C22 |
| Interest expense increase | FY2026 | 17.6 | USD millions | Reported change | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 72–73 |
| Cash distributions from CF Nitrogen | FY2026 | 447.3 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 158 |
| Distributions from investees in excess of equity income | FY2026 | 25.4 | USD millions | Reported cash flow adjustment | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Capital expenditures, acquisition of property, plant and equipment | FY2026 | 463.3 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76 |
| Expected capital expenditures | FY2027 | 850.8 | USD millions | Management expectation | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76 |
| Preferred stock dividends | FY2027 | 168.7 | USD millions | Management expectation, equal to the annual amount paid | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76 |
| Patronage cash and equity redemptions intended | FY2027 | 300.0 | USD millions | Management intention, 150.0 patronage cash and up to 150.0 redemptions | EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 1 |
| Preferred stock carrying value | FY2026 | 2,264.0 | USD millions | Reported within equities | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Private placement notes outstanding | FY2026 | 1,703.0 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| Term loan | FY2026 | 300.0 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| Revolver commitment, undrawn at year end | FY2026 | 2,800.0 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| Largest scheduled maturity year, long-term debt | FY2030 | 450.0 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| Energy pre-tax earnings | FY2026 | 554.6 | USD millions | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Energy pre-tax loss | FY2025 | -19.0 | USD millions | Reported, recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Small refinery exemption benefit in Energy margin | FY2026 | 205.0 | USD millions | Reported, approximate | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 64 |
| Total debt at the highest period end, 2026-02-28 (repeated for the sensitivity) | FY2026 interim | 4,127.8 | USD millions | Reported lines summed at carrying value | calculation C16 |
| CHS Capital notes payable | FY2026 | 255.4 | USD millions | Reported, matched-funding debt | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| EBITDA at the FY2025 level | FY2025 | 1,412.3 | USD millions | Calculated | calculation C02 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-08-31 | Not supplied: the August 31, 2024 balance sheet is not in the sources | Not supplied: the August 31, 2024 balance sheet is not in the sources | Not supplied: the August 31, 2024 balance sheet is not in the sources | US$m | Reported fiscal year end; the August 31, 2024 balance sheet is not in the sources. |
| FY2025 / 2025-08-31 | 2,988.290 | 327.826 | 2,660.464 | US$m | Reported; gross debt is notes payable, current portion and long-term debt at carrying value, including CHS Capital notes payable, the securitization within them and finance leases; principal is 2,936.986 before finance leases of 55.198 and issuance costs of -3.894. |
| FY2026 / 2026-08-31 | 2,501.725 | 263.603 | 2,238.122 | US$m | Reported; gross debt is notes payable, current portion and long-term debt at carrying value, including CHS Capital notes payable, the securitization within them and finance leases; principal on the ladder is 2,453.314 before finance leases of 51.845 and issuance costs of -3.434. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2026 / 2026-08-31 | 2,453.314 | 48.411 | 2,501.725 | US$m | Principal is the ladder total: long-term debt 2,004.312 excluding finance leases plus short-term notes payable 449.002. Reconciling items are finance lease liabilities 51.845 carried inside long-term debt and deferred financing costs of -3.434, summed in the calculations. The 2,004.312 equals the maturity table total in the annual report. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | The annual report, three quarterly reports and three earnings releases were read. The revolving term loan reverting to a nonrevolving loan on October 29, 2026 changes its maturity, not net debt. The intended USD 300.0 million of fiscal 2027 patronage cash and redemptions and the announced projects are intentions, not completed events, so no pro forma figure is stated. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 39,261.229 | 1,771.742 | US$m | Revenue as reported; the column carries reported EBITDA calculated as net income plus interest expense, income tax and depreciation and amortisation, because the issuer states no adjusted EBITDA; every row is one fiscal year. |
| FY2025 | 35,462.608 | 1,412.277 | US$m | Revenue as reported; the column carries reported EBITDA calculated as net income plus interest expense, income tax and depreciation and amortisation, because the issuer states no adjusted EBITDA; every row is one fiscal year. |
| FY2026 | 39,231.217 | 1,969.497 | US$m | Revenue as reported; the column carries reported EBITDA calculated as net income plus interest expense, income tax and depreciation and amortisation, because the issuer states no adjusted EBITDA; every row is one fiscal year. |

The EBITDA measure is a house calculation that includes equity income and other income, not an issuer figure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal rank of any facility | Not supplied: no executed debt documents are supplied | Not supplied: security is stated only as unsecured for the notes and term loan | Not supplied: no ranked facility is stated | Not supplied: no ranked facility is stated | US$m | The annual report calls the notes, term loan and revolver unsecured and the securitization a secured financing, but no source states ranking, guarantors or obligor scope, so no facility is drawn. |

No qualification.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA | Not supplied: the issuer states no EBITDA or add-backs | US$m | Opening step; the calculated reported EBITDA is in the income statement and register. |
| Issuer-adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA | US$m | Closing step; no adjusted measure or add-back is stated, so no bridge is drawn. |

No qualification.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 30 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 31 |
| Fields total | 33 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 3 |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2023-09-01 | 2024-08-31 |
| FY2025 | 2024-09-01 | 2025-08-31 |
| FY2026 | 2025-09-01 | 2026-08-31 |

### T4.4 Income statement

| Line item | FY2026 | FY2025 | FY2024 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenues | 39,231,217 | 35,462,608 | 39,261,229 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Cost of goods sold | 37,443,360 | 34,325,794 | 37,509,902 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Gross profit | 1,787,857 | 1,136,814 | 1,751,327 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Marketing, general and administrative expenses | 1,195,975 | 1,046,059 | 1,166,969 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Operating earnings | 591,882 | 90,755 | 584,358 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Interest expense | 163,633 | 146,079 | 104,064 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Other income | -131,239 | -100,431 | -137,630 | USD thousands | Reported; printed as a deduction in the issuer's statement | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Equity income from investments | -569,231 | -569,665 | -479,863 | USD thousands | Reported; printed as a deduction in the issuer's statement | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Income before income taxes | 1,128,719 | 614,772 | 1,097,787 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Income tax expense (benefit) | 32,737 | 16,777 | -4,872 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net income | 1,095,982 | 597,995 | 1,102,659 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net income attributable to noncontrolling interests | 79 | 78 | 340 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Net income attributable to CHS Inc. | 1,095,903 | 597,917 | 1,102,319 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Depreciation and amortization, including amortization of deferred major maintenance | 677,145 | 651,426 | 569,891 | USD thousands | Reported in the cash flow statement; amortization of deferred major maintenance is included | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| EBITDA (Reported) | 1,969,497 | 1,412,277 | 1,771,742 | USD thousands | Calculated: net income plus interest expense, income tax expense and depreciation and amortization; the issuer states no EBITDA, and the figure includes equity income and other income | calculation C01; calculation C02; calculation C03 |
| Segment revenues, net of intersegment revenues: Energy | 11,359,955 | 8,198,254 | 9,410,241 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment revenues, net of intersegment revenues: Grains | 21,584,138 | 20,987,888 | 24,092,806 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment revenues, net of intersegment revenues: Agronomy | 6,099,599 | 6,069,112 | 5,568,120 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment revenues, net of intersegment revenues: Corporate and Services | 187,525 | 207,354 | 190,062 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment income before income taxes: Energy | 554,590 | -19,015 | 406,658 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment income before income taxes: Grains | 127,378 | 44,003 | 254,570 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment income before income taxes: Agronomy | 354,640 | 375,283 | 258,577 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| Segment income before income taxes: Corporate and Services | 92,111 | 214,501 | 177,982 | USD thousands | Reported; prior years recast to the product-line segments | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |

### T4.5 Cash flow statement

| Line item | FY2026 | FY2025 | FY2024 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Net income | 1,095,982 | 597,995 | 1,102,659 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Depreciation and amortization, including amortization of deferred major maintenance | 677,145 | 651,426 | 569,891 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Equity income from investments, net of distributions received | 25,371 | -60,961 | 64,332 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Provision for current expected credit losses | 19,817 | 6,136 | 5,631 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Deferred taxes | -50,793 | -38,744 | -109,846 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Other, net (operating non-cash) | 494 | -55,668 | -35,427 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Change in receivables | -150,562 | 6,999 | -335,974 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Change in inventories | -455,758 | -53,184 | 147,764 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Change in accounts payable and accrued expenses | 359,133 | -276,114 | -213,788 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Other, net (operating assets and liabilities) | 63,180 | -142,098 | 77,638 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Net Cash from Operating Activities | 1,584,009 | 635,787 | 1,272,880 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Acquisition of property, plant and equipment | -463,262 | -728,575 | -808,763 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Proceeds from disposition of property, plant and equipment | 31,067 | 34,438 | 15,819 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Expenditures for major maintenance | -68,255 | -271,380 | -22,748 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Proceeds from sale and maturity of investments | 200,485 | 513,305 | 0 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Purchases of investments | -166,968 | 0 | -500,179 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Changes in CHS Capital notes receivable, net | -332,609 | -169,072 | -100,184 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Business acquisitions, net of cash acquired | 0 | -237,174 | 0 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Other investing activities, net | -2,824 | -22,137 | -15,533 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Net Cash from Investing Activities | -802,366 | -880,595 | -1,431,588 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Proceeds from notes payable and long-term debt | 15,419,459 | 19,038,369 | 3,842,339 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Payments on notes payable, long-term debt and finance lease obligations | -15,922,265 | -18,512,827 | -3,768,121 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Preferred stock dividends paid | -168,668 | -168,668 | -168,668 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Redemptions of equities | -100,433 | -287,683 | -355,925 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Cash patronage dividends paid | -30,000 | -300,358 | -366,012 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Other financing activities, net | 5,053 | 600 | 2,134 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Net Cash from Financing Activities | -796,854 | -230,567 | -814,253 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| FX Effect on Cash | 2,771 | 773 | 2,236 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Net Cash Change | -12,440 | -474,602 | -970,725 | USD thousands | Reported; includes restricted cash and the FX effect | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Opening Cash | 399,260 | 873,862 | 1,844,587 | USD thousands | Reported; cash, cash equivalents and restricted cash at the start of the year | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Closing Cash | 386,820 | 399,260 | 873,862 | USD thousands | Reported; includes restricted cash of 123,217 at FY2026 year end, so it differs from the balance sheet cash line | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Cash Interest Paid | 167,057 | 147,583 | 100,542 | USD thousands | Reported supplemental cash flow information; interest paid is classified in operating activities | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| Cash income taxes paid, net of refunds | 5,303 | 77,070 | 129,065 | USD thousands | Reported in the income tax note | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 169 |

### T4.6 Balance sheet

| Line item | FY2026 | FY2025 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 263,603 | 327,826 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Receivables | 3,854,810 | 3,686,585 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Inventories | 3,983,445 | 3,270,350 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Other current assets | 1,298,113 | 801,590 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total current assets | 9,399,971 | 8,086,351 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Investments | 3,806,454 | 3,846,062 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Property, plant and equipment | 5,380,693 | 5,501,294 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Other assets | 1,525,757 | 1,430,142 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total Assets | 20,112,875 | 18,863,849 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Notes payable | 449,002 | 1,152,457 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Current portion of long-term debt | 70,072 | 90,447 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Accounts payable | 2,938,414 | 2,717,648 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Accrued expenses | 840,097 | 695,965 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Other current liabilities | 1,309,667 | 625,969 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total current liabilities | 5,607,252 | 5,282,486 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Long-term debt | 1,982,651 | 1,745,386 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Other liabilities | 878,127 | 755,803 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Preferred stock | 2,264,038 | 2,264,038 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Equity certificates | 6,256,029 | 6,103,605 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Accumulated other comprehensive loss | -280,212 | -306,372 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Capital reserves | 3,401,410 | 3,015,424 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total CHS Inc. equities | 11,641,265 | 11,076,695 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Noncontrolling interests | 3,580 | 3,479 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total Equity | 11,644,845 | 11,080,174 | USD thousands | Reported | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |
| Total Liabilities | 8,468,030 | 7,783,675 | USD thousands | Calculated: total liabilities and equities less total equities; the balance sheet prints no liabilities total | calculation C06; calculation C27 |
| Total Debt | 2,501,725 | 2,988,290 | USD thousands | Calculated: notes payable plus current portion of long-term debt plus long-term debt at carrying value; includes CHS Capital notes payable and finance leases | calculation C04; calculation C05 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | n / d | Not supplied: the August 31, 2024 balance sheet is not in the sources | Not supplied: no balance sheet | 1,771.742 | calculation C03 | FY2024 / 2024-08-31 | USD | US$m | Not calculable: no debt figure at August 31, 2024 | Not Calculable | Tier 1 | No August 31, 2024 balance sheet; EBITDA calculated |
| Total debt / EBITDA | n / d | 2,988.290 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 | 1,412.277 | calculation C02 | FY2025 / 2025-08-31 | USD | US$m | 2.12 | Calculated | Tier 1 | EBITDA calculated, includes equity income; debt includes CHS Capital notes payable |
| Total debt / EBITDA | n / d | 2,501.725 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 | 1,969.497 | calculation C01 | FY2026 / 2026-08-31 | USD | US$m | 1.27 | Calculated | Tier 1 | EBITDA calculated, includes equity income; debt includes CHS Capital notes payable |
| Net debt / EBITDA | n / d | Not supplied: the August 31, 2024 balance sheet is not in the sources | Not supplied: no balance sheet | 1,771.742 | calculation C03 | FY2024 / 2024-08-31 | USD | US$m | Not calculable: no net debt figure at August 31, 2024 | Not Calculable | Tier 1 | No August 31, 2024 balance sheet; EBITDA calculated |
| Net debt / EBITDA | n / d | 2,660.464 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 | 1,412.277 | calculation C02 | FY2025 / 2025-08-31 | USD | US$m | 1.88 | Calculated | Tier 1 | EBITDA calculated, includes equity income; year end is the seasonal debt low |
| Net debt / EBITDA | n / d | 2,238.122 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 | 1,969.497 | calculation C01 | FY2026 / 2026-08-31 | USD | US$m | 1.14 | Calculated | Tier 1 | EBITDA calculated, includes equity income; year end is the seasonal debt low |
| EBITDA / cash interest | n / d | 1,771.742 | calculation C03 | 100.542 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 | FY2024 / 2024-08-31 | USD | US$m | 17.62 | Calculated | Tier 1 | EBITDA calculated; cash interest paid per the cash flow statement |
| EBITDA / cash interest | n / d | 1,412.277 | calculation C02 | 147.583 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 | FY2025 / 2025-08-31 | USD | US$m | 9.57 | Calculated | Tier 1 | EBITDA calculated; cash interest paid per the cash flow statement |
| EBITDA / cash interest | n / d | 1,969.497 | calculation C01 | 167.057 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 | FY2026 / 2026-08-31 | USD | US$m | 11.79 | Calculated | Tier 1 | EBITDA calculated; cash interest paid per the cash flow statement |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-08-31_chscp-20260831.htm.jsonl | Annual report on Form 10-K | Years ended August 31, 2026, 2025 and 2024; balance sheets at August 31, 2026 and 2025 | USD | Thousands | CHS Inc. consolidated | US GAAP | Tier 1 | Statements, debt note, segments, liquidity | Balance sheet for August 31, 2024 not included |
| 10-Q_2025-11-30_chscp-20251130.htm.jsonl | Quarterly report on Form 10-Q | Three months ended November 30, 2025 | USD | Thousands | CHS Inc. consolidated | US GAAP, unaudited | Tier 2b | Period-end debt, cash and facility usage | Unaudited |
| 10-Q_2026-02-28_chscp-20260228.htm.jsonl | Quarterly report on Form 10-Q | Three and six months ended February 28, 2026 | USD | Thousands | CHS Inc. consolidated | US GAAP, unaudited | Tier 2b | Period-end debt, cash and facility usage | Unaudited |
| 10-Q_2026-05-31_chscp-20260531.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months ended May 31, 2026 | USD | Thousands | CHS Inc. consolidated | US GAAP, unaudited | Tier 2b | Nine-month statements used to derive Q4 | Unaudited |
| EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl | Earnings release | Three and six months ended February 28, 2026 | USD | Thousands | CHS Inc. consolidated | Issuer presentation, unaudited | Tier 2b | Six-month segment earnings | Energy paragraph names the first quarter in error |
| EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl | Earnings release | Three and nine months ended May 31, 2026 | USD | Thousands | CHS Inc. consolidated | Issuer presentation, unaudited | Tier 2b | Nine-month segment earnings | Segment table only |
| EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl | Earnings release | Year ended August 31, 2026 | USD | Thousands | CHS Inc. consolidated | Issuer presentation, unaudited | Tier 2b | Full-year segment earnings and distribution intent | Segment table only |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CHS Inc. | Issuer and reporting entity; Minnesota agricultural cooperative with no common stock | August 31 | USD | Thousands | Consolidated with subsidiaries | US GAAP | FY2024, FY2025, FY2026 income and cash flow; balance sheets FY2025 and FY2026; interim balance sheets at November 30, 2025, February 28, 2026 and May 31, 2026 |
| CHS Capital, LLC | Wholly owned financing subsidiary within Corporate and Services; its notes payable are inside consolidated debt | August 31 | USD | Thousands | Consolidated | US GAAP | Notes payable and notes receivable only; no separate statements |
| Cofina Funding, LLC | Bankruptcy-remote securitization subsidiary; the securitization is accounted for as a secured financing | August 31 | USD | Thousands | Consolidated | US GAAP | Facility usage only |
| CF Industries Nitrogen, LLC; Ventura Foods, LLC; Ardent Mills, LLC | Equity-method investees, not consolidated; their debt is outside consolidated debt | August 31 | USD | Thousands | Equity method | US GAAP | Equity income and investment balances only |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA calculated from net income, interest expense, income tax and depreciation and amortization | 10-K_2026-08-31_chscp-20260831.htm.jsonl | Derived metric | Not supplied: the issuer states no EBITDA | 1,969,497; 1,412,277; 1,771,742 | The method derives EBITDA from components when none is stated; equity income and other income stay inside | FY2026, FY2025, FY2024 |
| Total debt summed from three balance sheet lines | 10-K_2026-08-31_chscp-20260831.htm.jsonl | Aggregation | 449,002; 70,072; 1,982,651 | 2,501,725 | Carrying value of every debt line the issuer carries, including CHS Capital notes payable and finance leases | FY2026 |
| Total liabilities derived as total liabilities and equities less total equities | 10-K_2026-08-31_chscp-20260831.htm.jsonl | Derived total | Not supplied: the balance sheet prints no liabilities total | 8,468,030; 7,783,675 | Needed for the balance sheet identity | FY2026, FY2025 |
| Thousands restated as millions in the money tables | 10-K_2026-08-31_chscp-20260831.htm.jsonl | Unit conversion | Thousands as printed | Millions to three decimals | The money unit is US$m; no figure is rounded | All money tables |
| Segment history recast by the issuer to the product-line model effective September 1, 2025 | 10-K_2026-08-31_chscp-20260831.htm.jsonl | Issuer recast | Earlier segment definitions | Recast figures as printed | Taken as printed; the earlier definitions are not supplied | FY2025, FY2024 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 39,231,217 thousand | USD 28,799,984 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 10,431,233 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; unaudited nine months subtracted from the audited year |
| Revenues, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 35,462,608 thousand | USD 26,856,724 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 8,605,884 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine months as printed in the third-quarter report comparatives |
| Income before income taxes, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 1,128,719 thousand | USD 389,424 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 739,295 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; unaudited nine months subtracted from the audited year |
| Income before income taxes, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 614,772 thousand | USD 432,980 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 181,792 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine months as printed in the third-quarter report comparatives |
| Net income, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 1,095,982 thousand | USD 380,763 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 715,219 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; unaudited nine months subtracted from the audited year |
| Net income, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 597,995 thousand | USD 401,270 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 196,725 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine months as printed in the third-quarter report comparatives |
| EBITDA (calculated), Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 1,969,497 thousand | USD 1,029,038 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 940,459 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month EBITDA is net income plus interest, tax and depreciation and amortization of the stub |
| EBITDA (calculated), Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 1,412,277 thousand | USD 992,024 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 420,253 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month EBITDA is net income plus interest, tax and depreciation and amortization of the stub |
| Operating cash flow, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 1,584,009 thousand | USD 201,214 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 1,382,795 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; unaudited nine months subtracted from the audited year |
| Operating cash flow, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 635,787 thousand | USD -635,272 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 1,271,059 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine months as printed in the third-quarter report comparatives |
| Segment income before income taxes, Energy, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 554,590 thousand | USD 28,804 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 525,786 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Energy, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD -19,015 thousand | USD -120,257 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 101,242 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Grains, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 127,378 thousand | USD -15,258 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 142,636 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Grains, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 44,003 thousand | USD 125,751 thousand | Not applicable: Q4 is the year less the nine-month stub | USD -81,748 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Agronomy, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 354,640 thousand | USD 300,356 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 54,284 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Agronomy, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 375,283 thousand | USD 264,144 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 111,139 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Corporate and Services, Q4 FY2026 | Q4 (full year less nine months, calculated) | USD 92,111 thousand | USD 75,522 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 16,589 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |
| Segment income before income taxes, Corporate and Services, Q4 FY2025 | Q4 (full year less nine months, calculated) | USD 214,501 thousand | USD 163,342 thousand | Not applicable: Q4 is the year less the nine-month stub | USD 51,159 thousand | Calculated | 10-K_2026-08-31_chscp-20260831.htm.jsonl; 10-Q_2026-05-31_chscp-20260531.htm.jsonl | No Q4 is reported; nine-month segment earnings from the third-quarter release |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | FY2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, % on prior year | Not supplied: FY2023 revenue is not in the sources | -9.68 | 10.63 | Up | FY2026 revenue rose on higher commodity prices after a fall in FY2025 |
| Margin | Gross margin, % | 4.46 | 3.21 | 4.56 | Up | Gross profit is thin relative to revenue because grain, fuel and fertilizer are traded at commodity prices |
| Margin | Operating margin, % | 1.49 | 0.26 | 1.51 | Up | Operating earnings exclude equity income and other income |
| Margin | EBITDA margin, % (calculated EBITDA) | 4.51 | 3.98 | 5.02 | Up | Includes equity income |
| Margin | Net income margin, % | 2.81 | 1.69 | 2.79 | Up | Effective tax rate of 2.9% in FY2026 reflects patronage deductions and clean fuel production credits |
| Cash flow | Operating cash flow, US$m | 1,272.880 | 635.787 | 1,584.009 | Up | FY2026 includes a large Q4 working-capital release |
| Cash flow | Operating cash flow / calculated EBITDA, % | 71.84 | 45.02 | 80.43 | Up | FY2025 conversion was low as working capital absorbed cash |
| Cash flow | Acquisition of property, plant and equipment, US$m | 808.763 | 728.575 | 463.262 | Down | Lower in FY2026 than in FY2025 and FY2024 |
| Cash flow | Expenditures for major maintenance, US$m | 22.748 | 271.380 | 68.255 | Mixed | FY2025 included the McPherson turnaround; FY2026 the Laurel partial turnaround |
| Cash flow | Free cash flow after capital spending and major maintenance, US$m | 441.369 | -364.168 | 1,052.492 | Up | Operating cash flow less both investing lines; working capital is included |
| Capital allocation | Preferred stock dividends paid, US$m | 168.668 | 168.668 | 168.668 | Flat | Fixed claim paid every year |
| Capital allocation | Cash patronage and equity redemptions paid, US$m | 721.937 | 588.041 | 130.433 | Down | Paid amounts fell each year; the board intends 300.000 of patronage cash and redemptions for fiscal 2027 |
| Earnings quality | Equity income from investments, US$m | 479.863 | 569.665 | 569.231 | Flat | FY2025 included a gain on a sale of a business by Ventura Foods |
| Earnings quality | Distributions received from investees, US$m, equity income plus the cash flow adjustment | 544.195 | 508.704 | 594.602 | Up | Derived: equity income plus the amount by which distributions exceeded it; CF Nitrogen paid 447.300, 304.400 and 308.400 in FY2026, FY2025 and FY2024 |
| Operating | Refinery throughput, barrels per day (flow rate) | Not supplied: not in the FY2026 comparison | 174,837 | 195,415 | Up | FY2025 throughput was lower because of the McPherson turnaround |
| Operating | Group 3 2:1:1 crack spread, dollars per barrel (rate) | Not supplied: not in the FY2026 comparison | 19.91 | 35.15 | Up | Refining margin driver for Energy |
| Operating | WTI less WCS crude discount, dollars per barrel (rate) | Not supplied: not in the FY2026 comparison | 11.57 | 13.17 | Up | Wider discount helps Laurel and McPherson margins |
| Operating | D6 ethanol RIN price, dollars per RIN (rate) | Not supplied: not in the FY2026 comparison | 0.8428 | 1.5683 | Up | Renewable energy credit cost for a net buyer of RINs |
| Operating | Grain and oilseed sales volume, thousands of bushels (flow) | Not supplied: not in the FY2026 comparison | 2,433,258 | 2,607,895 | Up | Grains volumes |
| Operating | Wholesale crop nutrient volume, thousands of tons (flow) | Not supplied: not in the FY2026 comparison | 7,311 | 6,789 | Down | Farmers deferred purchases |
| Working capital | Customer advance payments, US$m, period end | Not supplied: not in the sources | 233.804 | 261.627 | Up | Non-debt funding float: cash received from customers ahead of delivery |
| Working capital | Customer margin deposits and credit balances, US$m, period end | Not supplied: not in the sources | 94.148 | 138.263 | Up | Non-debt funding float: balances owed to customers |
| Working capital | Dividends and equity payable, US$m, period end | Not supplied: not in the sources | 120.000 | 363.215 | Up | Patronage and redemptions payable within the next fiscal year |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Net income plus interest, tax and depreciation and amortization | No EBITDA is stated by the issuer; management focuses on gross profit and income before income taxes | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 60 | FY2026, FY2025, FY2024 | Equity income and other income add 700.470 to FY2026 EBITDA of 1,969.497 against operating earnings plus depreciation and amortization of 1,269.027 | Leverage and coverage figures | Calculated EBITDA is used as primary; the narrower measure is shown beside it in the findings |
| Quarterly pre-tax earnings share | Quarterly income before income taxes over the annual total | The annual report prints Q2 FY2026 at 15% and Q4 FY2026 at 36% | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 60 against 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144, 10-Q_2026-02-28_chscp-20260228.htm.jsonl, page 5 and 10-Q_2026-05-31_chscp-20260531.htm.jsonl, page 5 | FY2026 | Filings give Q2 as a loss of 164.977 (-14.6% of the year) and Q4 as 739.295 (65.5%), so the printed shares do not match | Seasonality statements | The share derived from the quarterly filings is used; the printed table is not relied on |
| Capital expenditures | Acquisition of property, plant and equipment, with major maintenance shown separately | Segment note capital expenditures include major maintenance: 531.517 for FY2026; the cash flow statement shows 463.262 and 68.255; fiscal 2027 guidance of 850.8 excludes major maintenance of 41.8 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 181; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76 | FY2026, FY2027 | 68.255 between the two FY2026 figures | Free cash flow and capital intensity | Cash flow statement lines are used; the segment figure is not mixed in |
| Cash | Cash and cash equivalents on the balance sheet | The cash flow statement reconciles cash, cash equivalents and restricted cash of 386.820 against balance sheet cash of 263.603 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 against 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 | FY2026, FY2025 | Restricted cash of 123.217 sits in other current assets | Net debt | Balance sheet cash excluding restricted cash is used for net debt |
| Total debt | Carrying value of every balance sheet debt line, including notes payable | The issuer's liquidity table shows long-term debt including current maturities of 2,052.723 and notes payable of 449.002 separately; principal on the ladder basis is 2,453.314 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 74; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 | FY2026 | Carrying value 2,501.725 against principal 2,453.314, a difference of 48.411 made of finance leases 51.845 and issuance costs of -3.434 | Leverage figures | Carrying value is used; the difference is reconciled in the debt principal table |
| Leases | Lease liabilities the issuer presents on their own lines are not added to debt; those inside debt lines stay in | Finance lease liabilities of 51.845 are inside long-term debt; operating lease liabilities of 237.487 sit inside accrued expenses and other liabilities | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 192 | FY2026 | Operating lease liabilities of 237.487 are outside debt | Leverage figures | Finance leases stay in debt; operating leases are excluded and noted |
| Fiscal 2027 distribution growth | Increase on the amount paid in fiscal 2026 | The release calls USD 300.0 million of fiscal 2027 distributions about 150% above fiscal 2026; the amount paid in fiscal 2026 was 130.433, an increase of about 130%, and 150% matches the authorised 120.000 | EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 1; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 | FY2026, FY2027 | Low: the difference is in the base, authorised against paid | Capital allocation statements | Paid amounts are used for cash flow; the release's figure is treated as authorised against intended |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Fiscal year leverage, coverage and net debt for FY2025 and FY2026 | Ready with Limitations | EBITDA is calculated and includes equity income; FY2024 debt is not supplied | Supply the fiscal 2025 annual report to confirm FY2024 and the FY2025 facility size |
| Seasonal and intra-year debt profile | Ready with Limitations | Interim EBITDA on a last-twelve-months basis is not constructed | None required for the year-end view |
| Maturity profile and refinancing need | Ready with Limitations | Notes payable counted in fiscal 2027; call terms and legal rank not stated | Supply the note purchase agreements |
| Covenant headroom | Not Ready | Covenant levels and definitions are not stated | Supply the credit agreement and a compliance certificate |
| Industrial against finance leverage | Not Ready | CHS Capital cash and earnings are not separated | Supply CHS Capital stand-alone statements |
| Debt stack by legal rank | Not Ready | No source states legal rank, guarantors or obligor scope | Supply the executed debt documents |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4.69% unsecured notes due fiscal 2027 | Private placement note | Not supplied: per-note carrying value is not disclosed | 58,000 | 58,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 58,000 | Not applicable | 4.69% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2027; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 3.24% unsecured notes due fiscal 2028 | Private placement note | Not supplied: per-note carrying value is not disclosed | 95,000 | 95,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 95,000 | Not applicable | 3.24% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2028; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 4.74% unsecured notes due fiscal 2028 | Private placement note | Not supplied: per-note carrying value is not disclosed | 95,000 | 95,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 95,000 | Not applicable | 4.74% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2028; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 5.68% unsecured notes due fiscal 2030 | Private placement note | Not supplied: per-note carrying value is not disclosed | 150,000 | 150,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 150,000 | Not applicable | 5.68% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2030; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 3.48% unsecured notes due fiscal 2031 | Private placement note | Not supplied: per-note carrying value is not disclosed | 100,000 | 100,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 100,000 | Not applicable | 3.48% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2031; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 4.89% unsecured notes due fiscal 2031 | Private placement note | Not supplied: per-note carrying value is not disclosed | 100,000 | 100,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 100,000 | Not applicable | 4.89% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2031; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 5.84% unsecured notes due fiscal 2032 | Private placement note | Not supplied: per-note carrying value is not disclosed | 150,000 | 150,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 150,000 | Not applicable | 5.84% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2032; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 3.58% unsecured notes due fiscal 2033 | Private placement note | Not supplied: per-note carrying value is not disclosed | 65,000 | 65,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 65,000 | Not applicable | 3.58% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2033; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 4.71% unsecured notes due fiscal 2033 | Private placement note | Not supplied: per-note carrying value is not disclosed | 100,000 | 100,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 100,000 | Not applicable | 4.71% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2033; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 5.93% unsecured notes due fiscal 2034 | Private placement note | Not supplied: per-note carrying value is not disclosed | 150,000 | 150,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 150,000 | Not applicable | 5.93% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2034; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 3.73% unsecured notes due fiscal 2036 | Private placement note | Not supplied: per-note carrying value is not disclosed | 115,000 | 115,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 115,000 | Not applicable | 3.73% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2036; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 5.40% unsecured notes due fiscal 2036 | Private placement note | Not supplied: per-note carrying value is not disclosed | 125,000 | 125,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 125,000 | Not applicable | 5.40% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2036; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 6.05% unsecured notes due fiscal 2037 | Private placement note | Not supplied: per-note carrying value is not disclosed | 150,000 | 150,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 150,000 | Not applicable | 6.05% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2037; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 6.13% unsecured notes due fiscal 2039 | Private placement note | Not supplied: per-note carrying value is not disclosed | 250,000 | 250,000 | Not applicable | Unsecured, as stated | Not supplied: no source states legal rank | USD | 250,000 | Not applicable | 6.13% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Fiscal 2039; day not stated | Not supplied: amortisation terms are not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| 5.29% unsecured term loan, drawn on the revolving term facility | Term loan | Not supplied: per-note carrying value is not disclosed | 300,000 | 300,000 | 300,000 | Unsecured, as stated | Not supplied: no source states legal rank | USD | 300,000 | Not applicable | 5.29% at August 31, 2026; base rate plus applicable margin | Floating, as stated | Not supplied: the base rate is not named | Not supplied: the margin is not stated | Not supplied: not stated | 2029-10-29 payable; revolving until 2026-10-29 | 0 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| Other notes and contracts | Other debt | Not supplied: per-note carrying value is not disclosed | 1,312 | 1,312 | Not applicable | Not supplied: not stated | Not supplied: no source states legal rank | USD | 1,312 | Not applicable | 3.9% to 4.0% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| Finance lease liabilities | Finance lease | 51,845 | 51,845 | 51,845 | Not applicable | Not supplied: not stated | Not supplied: no source states legal rank | USD | 51,845 | Not applicable | Weighted average discount rate 4.75% | Not stated | Not supplied: not stated | Not applicable | Not applicable | Weighted average remaining term 6.2 years | 12,072 current portion | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 192–193 |
| Financing cost adjustment, deferred financing costs | Adjustment | -3,434 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -3,434 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| Notes payable excluding CHS Capital, bank and international lines | Short-term borrowings | 193,649 | 193,649 | 193,649 | Not supplied: committed size of uncommitted bilateral lines not stated | Not supplied: not stated | Not supplied: no source states legal rank | USD | 193,649 | Not applicable | 3.70% weighted average | Not stated | Not supplied: not stated | Not applicable | Not applicable | Short-term | Not supplied: not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–164 |
| CHS Capital notes payable, securitization utilisation and surplus funds notes | Short-term borrowings | 255,353 | 255,353 | 255,353 | Not applicable | Securitization is a secured financing of receivables; surplus funds notes unsecured, as stated | Not supplied: no source states legal rank | USD | 255,353 | Not applicable | 4.02% weighted average | Not stated | Not supplied: not stated | Not applicable | Not applicable | Securitization to 2027-08-25; surplus funds notes due on demand | Not supplied: not stated | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 164 |
| Revolving credit facility, five-year unsecured | Revolver | 0 | 0 | 0 | 2,800,000 | Unsecured, as stated | Not supplied: no source states legal rank | USD | 0 | Not applicable | Not supplied: not stated | Not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2028-04-21 | Not applicable | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| Securitization Facility, committed and uncommitted portions | Securitization | Not applicable: included in CHS Capital notes payable | Not applicable: included in CHS Capital notes payable | 175,000 | 850,000 committed and 250,000 uncommitted | Secured financing of receivables, as stated | Not supplied: no source states legal rank | USD | Not applicable: included in CHS Capital notes payable | Not applicable | Not supplied: not stated | Not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2027-08-25 | Not applicable | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 164 |
| Repurchase Facility | Repurchase agreement | 0 | 0 | 0 | 250,000 | Not supplied: not stated | Not supplied: no source states legal rank | USD | 0 | Not applicable | Not supplied: not stated | Not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2027-08-25 | Not applicable | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 164 |

### Interim balance sheet series

| Period | Cash | Notes payable | Current portion of long-term debt | Long-term debt | Total debt | Net debt | Revolver drawn | Securitization used | Repurchase facility used | Reporting unit | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2025-08-31 | 327.826 | 1,152.457 | 90.447 | 1,745.386 | 2,988.290 | 2,660.464 | 180.0 | 296.0 | 159.7 | US$m | 10-Q_2025-11-30_chscp-20251130.htm.jsonl, page 4 |
| 2025-11-30 | 374.694 | 1,859.159 | 89.882 | 1,740.200 | 3,689.241 | 3,314.547 | 215.0 | 800.0 | 250.0 | US$m | 10-Q_2025-11-30_chscp-20251130.htm.jsonl, page 4 |
| 2026-02-28 | 248.472 | 1,995.108 | 149.064 | 1,983.616 | 4,127.788 | 3,879.316 | 250.0 | 850.0 | 206.8 | US$m | 10-Q_2026-02-28_chscp-20260228.htm.jsonl, page 4 |
| 2026-05-31 | 497.614 | 1,589.756 | 149.663 | 1,983.919 | 3,723.338 | 3,225.724 | 190.0 | 650.0 | 250.0 | US$m | 10-Q_2026-05-31_chscp-20260531.htm.jsonl, page 4 |
| 2026-08-31 | 263.603 | 449.002 | 70.072 | 1,982.651 | 2,501.725 | 2,238.122 | 0 | 175.0 | 0 | US$m | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 144 |

Revolver, securitization and repurchase use are stated in millions to one decimal in the filings; 2025-08-31 balances come from the first-quarter report comparatives.

## Calculations

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C01 | EBITDA FY2026 = net income + interest expense + income tax expense + depreciation and amortization | 1,095,982 + 163,633 + 32,737 + 677,145 | 1,969,497 | USD thousands |
| C02 | EBITDA FY2025 | 597,995 + 146,079 + 16,777 + 651,426 | 1,412,277 | USD thousands |
| C03 | EBITDA FY2024 | 1,102,659 + 104,064 + -4,872 + 569,891 | 1,771,742 | USD thousands |
| C04 | Total debt FY2026 = notes payable + current portion + long-term debt | 449,002 + 70,072 + 1,982,651 | 2,501,725 | USD thousands |
| C05 | Total debt FY2025 | 1,152,457 + 90,447 + 1,745,386 | 2,988,290 | USD thousands |
| C06 | Total liabilities FY2026 = total assets less total equity | 20,112,875 - 11,644,845 | 8,468,030 | USD thousands |
| C07 | Net debt FY2026 = total debt less cash and cash equivalents | 2,501,725 - 263,603 | 2,238,122 | USD thousands |
| C08 | Net debt FY2025 | 2,988,290 - 327,826 | 2,660,464 | USD thousands |
| C09 | Fiscal 2027 maturity bar = long-term debt due + short-term notes payable | 58,562 + 449,002 | 507,564 | USD thousands |
| C10 | Total debt / EBITDA FY2026 | 2,501,725 / 1,969,497 | 1.27 | x |
| C11 | Total debt / EBITDA FY2025 | 2,988,290 / 1,412,277 | 2.12 | x |
| C12 | Net debt / EBITDA FY2026 | 2,238,122 / 1,969,497 | 1.14 | x |
| C13 | EBITDA / cash interest FY2026 | 1,969,497 / 167,057 | 11.79 | x |
| C14 | Net debt / EBITDA FY2025 | 2,660,464 / 1,412,277 | 1.88 | x |
| C15 | EBITDA / cash interest FY2025 | 1,412,277 / 147,583 | 9.57 | x |
| C16 | Total debt at 2026-02-28 = 1,995,108 + 149,064 + 1,983,616 | 1,995,108 + 149,064 + 1,983,616 | 4,127,788 | USD thousands |
| C17 | Net debt at 2026-02-28 = total debt less cash | 4,127,788 - 248,472 | 3,879,316 | USD thousands |
| C18 | Peak net debt as a multiple of FY2026 year-end net debt | 3,879,316 / 2,238,122 | 1.73 | times |
| C19 | EBITDA excluding equity income and other income = operating earnings + depreciation and amortization; total debt over it | 591,882 + 677,145 = 1,269,027; 2,501,725 / 1,269,027 | 1.97 | x |
| C20 | Equity income share of EBITDA FY2026 | 569,231 / 1,969,497 x 100 | 28.9 | % |
| C21 | Net debt including preferred stock / EBITDA FY2026 | (2,238,122 + 2,264,038) / 1,969,497 | 2.29 | x |
| C22 | Q4 FY2026 income before income taxes = 1,128,719 - 389,424; share of the year | 739,295 / 1,128,719 x 100 | 65.5 | % |
| C23 | Q4 FY2026 operating cash flow = 1,584,009 - 201,214; free cash flow = 1,584,009 - 463,262 - 68,255 | 1,382,795; 1,052,492 | 1,382,795; 1,052,492 | USD thousands |
| C24 | Free cash flow after preferred dividends, patronage cash and equity redemptions | 1,052,492 - 168,668 - 30,000 - 100,433 | 753,391 | USD thousands |
| C25 | FY2026 year-end total debt over FY2025 EBITDA | 2,501,725 / 1,412,277 | 1.77 | x |
| C26 | Peak total debt over FY2025 EBITDA | 4,127,788 / 1,412,277 | 2.92 | x |
| C27 | Total liabilities FY2025 | 18,863,849 - 11,080,174 | 7,783,675 | USD thousands |
| C28 | Debt ladder total and reconciling items: ladder 507.564 + 190.600 + 0.150 + 450.000 + 200.000 + 150.000 + 165.000 + 150.000 + 240.000 + 150.000 + 250.000; reconciling items = finance leases 51.845 + deferred financing costs -3.434; principal + items = 2,501.725 | 2,453.314 + 48.411 | 2,501.725 | US$m |
| C29 | Equity income plus the cash flow adjustment gives distributions received FY2026 | 569,231 + 25,371 | 594,602 | USD thousands |
| C30 | EBITDA / cash interest FY2024 | 1,771,742 / 100,542 | 17.62 | x |

No last-twelve-months figure beyond the fiscal year was constructed, because the latest period is a full fiscal year with no later stub.

## Gaps

- The August 31, 2024 balance sheet is not in the sources, so total debt, cash, net debt and leverage for FY2024 are not established; this restricts the leverage trend to two year ends. Severity Medium. Supplying the fiscal 2025 annual report would close it.
- Covenant levels and definitions for minimum consolidated net worth and the other financial ratios are not stated, so headroom cannot be calculated for any period. Severity High. Supplying the credit agreement and a compliance certificate would close it.
- The company states no EBITDA or adjusted EBITDA, so EBITDA is calculated from net income, interest, tax and depreciation and amortization for FY2026, FY2025 and FY2024, and no EBITDA bridge or issuer-adjusted ratios can be given. Severity Medium. A management EBITDA definition would close it.
- The legal rank, guarantors and obligor scope of the notes, term loan, revolver and securitization are not stated, so the debt stack is not drawn. Severity Medium. Supplying the executed debt documents would close it.
- Letters of credit issued under the revolver are not stated, so undrawn availability for FY2026 and FY2025 is gross of any. Severity Medium. A facility usage statement would close it.
- The size of the revolver at August 31, 2025 is taken from the first-quarter report, because the fiscal 2025 annual report is not in the sources, so FY2025 undrawn capacity rests on that report. Severity Low. The fiscal 2025 annual report would close it.
- CHS Capital cash, EBITDA, operating cash flow, capital spending and liquidity are not disclosed separately, so industrial and finance leverage are not split; its notes payable of USD 255.4 million sit inside total debt. Severity Medium. CHS Capital stand-alone statements would close it.
- Per-note carrying values, call terms and amortisation of the private placement notes are not stated; carrying value is shown at principal with one financing cost adjustment. Severity Low. The note purchase agreements would close it.
- Q4 FY2026 and Q4 FY2025 are not reported on their own and are derived by subtracting unaudited nine-month figures from the annual figures; segment pre-tax earnings for Q4 rest on the same subtraction. Severity Low. A fourth-quarter statement set would close it.
- The annual report's quarterly seasonality table for FY2026 prints Q2 at 15% and Q4 at 36%, which the quarterly filings contradict; the derived shares are used. Severity Low. A corrected table would close it.
- Interim last-twelve-months EBITDA is not constructed, so leverage at the February peak is shown only as net debt and as a multiple of year-end net debt and of FY2025 EBITDA. Severity Low. Not needed for the year-end view.
- The fiscal 2027 maturity bar includes short-term notes payable of 449.002 that are renewed rather than scheduled to amortise, which overstates scheduled repayments. Severity Low. Management's expected refinancing plan would close it.

## Next module

The orchestrator selects the next module.
