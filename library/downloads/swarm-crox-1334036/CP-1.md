# Financial foundation for Crocs, Inc. (crox-1334036), as of 2026-11-18

## Request

Crocs, Inc. (issuer crox-1334036), as of 2026-11-18, credit snapshot pathway. This module extracts the issuer's annual and interim statements, debt and liquidity into one US dollar basis and calculates leverage and cover from them, using the source readiness output for the run.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_crox.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-13 | dc83d530769e300f4899802742bdef3c70d2748d023f78096431633740eb290f | FY2023 balance sheet, year-end 2023 debt and liquidity, store counts and digital share for FY2023. |
| 10-K_2025-12-31_crox.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-12 | eb34144ce35fb97bc95f103c28b887d665784c704e015d7c4daf644b7817bed9 | FY2023 to FY2025 statements of operations and cash flows, FY2024 and FY2025 balance sheets, debt note, contractual obligations, tax and lease notes. |
| 10-Q_2026-03-31_crox.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 | aaaab36b6b9d2185d6e481ff13d876b720b8de006f3dd0a3c7a913c4109b4de9 | Asia facility borrowings at 2026-03-31 and the first-quarter borrowings table. |
| 10-Q_2026-06-30_crox.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 | 7e2758a175d55878e15407fcc5d302287581f1d77ef5838012b12bbd15e9701d | Revolver drawings at 2026-06-30. |
| 10-Q_2026-09-30_crox.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 | d73581771af7108a9f3517ca38023296566d59820474dcb3871d99ec9ec38882 | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt by instrument, liquidity, segment results, commitments, legal proceedings. |
| EX99.1_2026-03-31_crox_croxq12026-pressrelease-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-30 | 25b6a72e0f19457baeaf30e3950ea611ce0034f7b145a6973e96f9f4c9fc3f66 | Total borrowings at 2026-03-31 as the release states them. |
| EX99.1_2026-06-30_crox_croxq22026-pressrelease-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-30 | 27707336b30a4f357d789bf37f64744d3c54ccfa7cb575931a8679f39fd36440 | Not used for figures; read for events after the balance-sheet date. |
| EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-29 | 95c8942b5aad46a030160271e78535d9cc95f59625f0c19ed5adf49d9144e7e0 | Non-GAAP reconciliation, tariff refund amount, free cash flow and debt repaid in the quarter. |
| Source readiness (CP-0) handoff | Source readiness output for this run | not stated | 013aa26e0401a1ed8962b804f28847d20544431d635ed6c9499af9a16d72a392 | Source register, gaps and period scope. |

## Findings

### Bottom line

Crocs is lightly levered: net debt was 1.12x trailing twelve-month reported EBITDA at 2026-09-30 and EBITDA covered cash interest 14.28x, so creditors have wide cover on filed figures, but nearly all free cash flow goes to shareholder returns.

The issuer reports no EBITDA, so it is built from operating income plus depreciation and amortization. FY2025 is distorted by non-cash impairments: net leverage reads 4.81x as reported and 1.14x before impairments. The trailing figure also holds a one-off tariff refund, and without it net leverage would be 1.19x. The revolving facility, drawn USD 113.0 million, matures in November 2027.
Basis: 10-Q_2026-09-30_crox.htm.jsonl, pages 3–6, 15–16; 10-K_2025-12-31_crox.htm.jsonl, pages 115–118; calculation C1; calculation C5; calculation C6

### Leverage and coverage

At 2026-09-30 gross debt was USD 1,289.044 million at balance-sheet carrying value and net debt USD 1,125.587 million, which is 1.12x reported trailing twelve-month EBITDA of USD 1,006.666 million. Cash interest paid over the same twelve months was USD 70.509 million, so EBITDA covers it 14.28x. Both ratios are low because FY2025 earnings were cut by USD 738.115 million of non-cash goodwill and trademark impairments on the HEYDUDE brand, which pushed reported FY2025 EBITDA down to USD 228.797 million and the FY2025 net leverage to 4.81x; before impairments it was 1.14x. The creditor reading is that leverage is low on any basis and that the FY2025 headline ratio reflects accounting charges, not debt service.
A caution runs the other way. The trailing figure holds USD 64.071 million of tariff refunds credited to cost of sales in the third quarter of 2026, which the issuer calls non-recurring. Without it, and before impairments, trailing EBITDA is USD 945.896 million and net leverage 1.19x. That is still low, so the refund does not change the view.
Basis: 10-Q_2026-09-30_crox.htm.jsonl, pages 3, 6, 8, 15; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 8; 10-K_2025-12-31_crox.htm.jsonl, pages 115–118; calculation C1; calculation C2; calculation C5; calculation C6

### Cash-flow quality and shareholder returns

Operating cash flow for the nine months to 2026-09-30 was USD 561.189 million and capital expenditure USD 53.615 million, so free cash flow was USD 507.574 million. Over the same nine months the company spent USD 506.194 million on share repurchases, 0.9973 of free cash flow, and a further USD 17.338 million on repurchases for tax withholding. Because the buyback absorbs nearly all free cash flow, net debt did not fall: it was USD 1,100.531 million at FY2025 and USD 1,125.587 million at 2026-09-30, and revolver drawings rose from USD 62.0 million to USD 113.0 million.
The remaining repurchase authorization is about USD 1.7 billion against trailing free cash flow of USD 753.993 million, so the policy could lift leverage if management chose to fund buybacks from the revolver. The constraints the filings describe are a leverage cap of 3.25 to 1.00 and a minimum interest cover of 3.00 to 1.00 in the credit agreement, plus repurchase limits that depend on leverage; the definitions are not supplied, so the room cannot be measured. Trailing operating cash flow of USD 813.719 million is above FY2025 operating cash flow of USD 710.431 million mainly because of changes in income taxes and accounts payable, which the issuer attributes to the timing of payments and refunds and to inventory purchases.
Basis: 10-Q_2026-09-30_crox.htm.jsonl, pages 6, 8, 16–17, 32; 10-K_2025-12-31_crox.htm.jsonl, pages 118, 138; calculation C7

### Liquidity and maturities

Liquidity at 2026-09-30 was cash of USD 163.457 million and USD 886.4 million of undrawn revolving facility. A further USD 15.0 million Asia facility is counted by the issuer as available borrowing, but the filings do not call it committed, so it is left out of the undrawn figure. Of the cash, USD 88.9 million is held outside the United States. No debt falls due until the revolving facility matures in November 2027; the term loan falls due on 2029-02-17 and the 2029 notes on 2029-03-15, together USD 850.000 million or 64.7% of face value, followed by the 2031 notes of USD 350.000 million. Both note issues are already callable at a premium that declines to par: the 2029 notes since 2024-03-15 and the 2031 notes since 2026-08-15.
The creditor implication is that the revolver, the only committed liquidity backstop, comes up for renewal about a year after the as-of date and the filings disclose no extension. The 2029 wall is concentrated in two instruments that fall due within a month of each other.
Basis: 10-Q_2026-09-30_crox.htm.jsonl, pages 15–16, 30–32; 10-K_2025-12-31_crox.htm.jsonl, pages 86–88; calculation C4

### Claims outside the debt figure

Four claims sit outside gross debt. Operating lease liabilities of USD 374.074 million (USD 90.820 million current and USD 283.254 million long-term) are on their own balance-sheet lines and are not added to debt. Long-term income taxes payable of USD 641.563 million are excluded as well; the annual report ties them to uncertain tax positions of USD 636.973 million at FY2025, and no payment schedule is given. Purchase commitments were USD 307.5 million at 2026-09-30. Legal claims are accrued at USD 0.6 million with no estimate of a range, against a securities class action and four derivative actions.
The long-term tax liability is the largest of these: at about 57% of net debt it would be material if it fell due in cash together. The filings do not say when or whether that happens, so the creditor treatment is to carry it as a named non-debt claim, not to add it to leverage.
Basis: 10-Q_2026-09-30_crox.htm.jsonl, pages 4, 19–21; 10-K_2025-12-31_crox.htm.jsonl, pages 116, 134, 152–153; calculation C8

### Data quality and definitions

Three points limit how far the figures can be pushed. Reported EBITDA is a derived measure (income from operations plus depreciation and amortization from the cash flow statement) because the issuer states neither EBITDA nor adjusted EBITDA, so no adjusted ratios are shown. The issuer's statements and its releases present expenses differently: the releases fold impairment charges into selling, general and administrative expenses, and the statements here follow the quarterly and annual reports. The September 2025 balance sheet is not printed in the supplied documents, so the nine months of 2025 appear in the income and cash flow statements only.
Basis: 10-K_2025-12-31_crox.htm.jsonl, pages 115–118; 10-Q_2026-09-30_crox.htm.jsonl, pages 3–6; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 4

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1.53 | 1.39 | x | Reported EBITDA, calculated as income from operations plus depreciation and amortization. |
| FY2024 / 2024-12-31 | 1.24 | 1.07 | x | Reported EBITDA, calculated as income from operations plus depreciation and amortization. |
| FY2025 / 2025-12-31 | 5.38 | 4.81 | x | Reported EBITDA includes USD 738.115 million of non-cash goodwill and asset impairments, so the ratio is overstated against underlying earnings. |
| 2026-09-30 | 1.28 | 1.12 | x | Trailing twelve months to 2026-09-30: FY2025 plus nine months 2026 less nine months 2025; includes USD 64.071 million of non-recurring tariff refunds. |

The FY2025 ratios are distorted upward by non-cash impairments and the trailing figure is lifted by a one-off tariff refund; the register shows the figures before impairments.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 7.20 | x | Reported EBITDA over cash interest paid per the cash flow statement. |
| FY2024 / 2024-12-31 | 10.98 | x | Reported EBITDA over cash interest paid per the cash flow statement. |
| FY2025 / 2025-12-31 | 2.95 | x | Reported EBITDA over cash interest paid; FY2025 EBITDA includes USD 738.115 million of non-cash impairments. |
| 2026-09-30 | 14.28 | x | Trailing twelve months: reported EBITDA over cash interest paid, both built as FY2025 plus nine months 2026 less nine months 2025. |

Cover uses cash interest paid, which differs slightly from interest expense.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 149.288 | 558.7 | US$m | Cash and cash equivalents; undrawn is the revolving facility availability the issuer states, net of letters of credit; the amount of the commitment at this date is not stated in the supplied pages. |
| FY2024 / 2024-12-31 | 180.485 | 809.4 | US$m | Cash and cash equivalents; undrawn is the revolving facility availability, net of USD 190.0 million drawn and letters of credit; the Asia facility availability of USD 15.0 million is excluded. |
| FY2025 / 2025-12-31 | 130.354 | 937.4 | US$m | Cash and cash equivalents; undrawn is the revolving facility availability, net of USD 62.0 million drawn and letters of credit; the Asia facility availability of USD 15.0 million is excluded. |
| 2026-09-30 | 163.457 | 886.4 | US$m | Cash and cash equivalents; undrawn is the revolving facility availability, net of USD 113.0 million drawn and USD 0.6 million letters of credit; the Asia facility availability of USD 15.0 million is excluded. |

The revolving facility is the only committed undrawn source counted here, and it matures in November 2027.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 0 | US$m | Contractual principal by maturity year at 2026-09-30; No instrument matures in 2026 on the debt note. |
| FY2027 | 113.000 | US$m | Contractual principal by maturity year at 2026-09-30; Revolving Facility drawings of 113.000 mature in November 2027. |
| FY2028 | 0 | US$m | Contractual principal by maturity year at 2026-09-30; No instrument matures in 2028 on the debt note. |
| FY2029 | 850.000 | US$m | Contractual principal by maturity year at 2026-09-30; Term Loan B 500.000 matures 2029-02-17 and the 4.250% Senior Notes 350.000 mature 2029-03-15. |
| FY2030 | 0 | US$m | Contractual principal by maturity year at 2026-09-30; No instrument matures in 2030 on the debt note. |
| FY2031 | 350.000 | US$m | Contractual principal by maturity year at 2026-09-30; The 4.125% Senior Notes 350.000 mature 2031-08-15. |

The ladder is principal at face value, not carrying value, and treats the revolver as repayable at its stated maturity.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 3962.347 | 4102.108 | 4040.647 | 4101.148 | US$m | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| EBITDA (Reported) | 1091.087 | 1091.751 | 228.797 | 1006.666 | US$m | calculation C5 |
| EBITDA before impairments | 1100.374 | 1115.833 | 966.912 | 1009.967 | US$m | calculation C6 |
| Gross debt (carrying value) | 1664.324 | 1349.339 | 1230.885 | 1289.044 | US$m | 10-K_2024-12-31_crox.htm.jsonl, page 112; 10-K_2025-12-31_crox.htm.jsonl, page 116; 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Net debt | 1515.036 | 1168.854 | 1100.531 | 1125.587 | US$m | calculation C1 |
| Total debt / EBITDA | 1.53 | 1.24 | 5.38 | 1.28 | x | calculation C5 |
| Net debt / EBITDA | 1.39 | 1.07 | 4.81 | 1.12 | x | calculation C5 |
| EBITDA / cash interest | 7.20 | 10.98 | 2.95 | 14.28 | x | calculation C5 |
| Net debt / EBITDA before impairments | 1.38 | 1.05 | 1.14 | 1.11 | x | calculation C6 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1664.324 | 149.288 | 1515.036 | US$m | Carrying value: long-term borrowings plus current borrowings of 23.328, which include Asia facility borrowings of about 3.3; principal 1,710.000 plus about 3.3 Asia borrowings. |
| FY2024 / 2024-12-31 | 1349.339 | 180.485 | 1168.854 | US$m | Carrying value: long-term borrowings; principal 1,390.000; no current borrowings were printed as an amount. |
| FY2025 / 2025-12-31 | 1230.885 | 130.354 | 1100.531 | US$m | Carrying value: long-term borrowings; principal 1,262.000; operating lease liabilities are on separate lines and excluded. |
| 2026-09-30 | 1289.044 | 163.457 | 1125.587 | US$m | Carrying value: long-term borrowings; principal 1,313.000; operating lease liabilities of 374.074 are on separate lines and excluded. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 1313.000 | -23.956 | 1289.044 | US$m | Principal is the sum of the maturity ladder; the one reconciling item is unamortized issuance costs of 23.956 (calculation C2); the Asia facility had no borrowings at 2026-09-30. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Read the quarterly report and earnings release for the third quarter of 2026; neither states an event after 2026-09-30 that changes net debt. The cover of the quarterly report shows fewer shares outstanding at 2026-10-22 than at 2026-09-30, which implies repurchases in October, but no amount is stated, so none is worked out. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 3962.347 | 1091.087 | US$m | Twelve-month periods. The Adjusted EBITDA column carries reported EBITDA (income from operations plus depreciation and amortization) in every row because the issuer states no adjusted EBITDA; no row mixes identities. |
| FY2024 / 2024-12-31 | 4102.108 | 1091.751 | US$m | Twelve-month periods. The Adjusted EBITDA column carries reported EBITDA (income from operations plus depreciation and amortization) in every row because the issuer states no adjusted EBITDA; no row mixes identities. |
| FY2025 / 2025-12-31 | 4040.647 | 228.797 | US$m | Twelve-month periods. The Adjusted EBITDA column carries reported EBITDA (income from operations plus depreciation and amortization) in every row because the issuer states no adjusted EBITDA; no row mixes identities. |
| 2026-09-30 | 4101.148 | 1006.666 | US$m | Twelve-month periods. The Adjusted EBITDA column carries reported EBITDA (income from operations plus depreciation and amortization) in every row because the issuer states no adjusted EBITDA; no row mixes identities. |

FY2025 EBITDA includes USD 738.115 million of non-cash impairments and the trailing row includes a one-off tariff refund of USD 64.071 million.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving Facility | 1 | Yes | 113.000 | 0.11 | US$m | Drawn amount at 2026-09-30 of a USD 1.0 billion senior secured facility, secured by all of the assets of the Borrowers and guaranteed by certain other subsidiaries of the Borrowers; relative priority to the term loan is not stated, so both share rank 1. Cumulative leverage is cumulative debt over trailing reported EBITDA of 1006.666. |
| Term Loan B Facility | 1 | Yes | 500.000 | 0.61 | US$m | Senior secured term loan secured by substantially all assets of the Company and each subsidiary guarantor; obligors are the Company and its subsidiary guarantors. Cumulative leverage is cumulative debt through this row over trailing reported EBITDA of 1006.666. |

The two senior notes (USD 700.000 million together) are left out because no supplied source states whether they are secured; they are named under the gaps.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA, trailing twelve months to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA, so there is no bridge to state | US$m | Opening step; the reported measure would be income from operations plus depreciation and amortization. |
| Issuer-adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA | US$m | Closing step; the method names the issuer's own adjusted EBITDA, which is not stated in any supplied document. |

No bridge is drawn, because the issuer's adjusted measures are operating income and margins, not EBITDA.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | 3,962,347 | 4,102,108 | 4,040,647 | 3,083,007 | 3,143,508 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Cost of sales | 1,752,337 | 1,691,850 | 1,683,592 | 1,249,614 | 1,230,122 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Gross profit | 2,210,010 | 2,410,258 | 2,357,055 | 1,833,393 | 1,913,386 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Selling, general and administrative expenses | 1,163,940 | 1,364,265 | 1,469,425 | 1,092,160 | 1,131,636 | USD thousands | Reported; excludes impairments, which the reports show on their own lines | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Goodwill impairment | Not supplied: printed as a dash in the filing | Not supplied: printed as a dash in the filing | 307,000 | 307,000 | Not supplied: printed as a dash in the filing | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Asset impairments | 9,287 | 24,082 | 431,115 | 431,115 | 3,301 | USD thousands | Reported; FY2023 and FY2024 are the reclassified amounts shown in the 2025 annual report | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Income from operations | 1,036,783 | 1,021,911 | 149,515 | 3,118 | 778,449 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Foreign currency gains (losses), net | -1,240 | -6,777 | 9,843 | 8,264 | -2,651 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Interest income | 2,406 | 3,484 | 1,844 | 1,235 | 4,261 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Interest expense | -161,351 | -109,264 | -88,287 | -67,000 | -59,427 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Other income (expense), net | -326 | 1,231 | 63 | 143 | -431 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Income (loss) before income taxes | 876,272 | 910,585 | 72,978 | -54,240 | 720,201 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Income tax expense (benefit) | 83,706 | -39,486 | 154,176 | 132,123 | 161,003 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Net income (loss) | 792,566 | 950,071 | -81,198 | -186,363 | 559,198 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 115–116; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Depreciation and amortization | 54,304 | 69,840 | 79,282 | 58,337 | 60,875 | USD thousands | Reported (cash flow statement) | 10-K_2025-12-31_crox.htm.jsonl, page 117; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| EBITDA (Reported) | 1,091,087 | 1,091,751 | 228,797 | 61,455 | 839,324 | USD thousands | Calculated: income from operations plus depreciation and amortization; impairments are not added back | calculation C5 |
| Impairments (goodwill and asset) | 9,287 | 24,082 | 738,115 | 738,115 | 3,301 | USD thousands | Calculated: goodwill impairment plus asset impairments | 10-K_2025-12-31_crox.htm.jsonl, page 115; 10-Q_2026-09-30_crox.htm.jsonl, page 3 |
| Crocs Brand revenues | 3,012,954 | 3,277,967 | 3,325,807 | 2,557,427 | 2,640,574 | USD thousands | Reported segment schedule; corporate costs are shown as their own row | 10-K_2025-12-31_crox.htm.jsonl, page 154; 10-Q_2026-09-30_crox.htm.jsonl, page 20 |
| HEYDUDE Brand revenues | 949,393 | 824,141 | 714,840 | 525,580 | 502,934 | USD thousands | Reported segment schedule; corporate costs are shown as their own row | 10-K_2025-12-31_crox.htm.jsonl, page 154; 10-Q_2026-09-30_crox.htm.jsonl, page 20 |
| Crocs Brand income from operations | 1,079,330 | 1,182,012 | 1,111,679 | 904,718 | 939,585 | USD thousands | Reported segment schedule; corporate costs are shown as their own row | 10-K_2025-12-31_crox.htm.jsonl, page 154; 10-Q_2026-09-30_crox.htm.jsonl, page 20 |
| HEYDUDE Brand income (loss) from operations | 212,386 | 137,401 | -668,855 | -675,952 | 76,492 | USD thousands | Reported segment schedule; corporate costs are shown as their own row | 10-K_2025-12-31_crox.htm.jsonl, page 154; 10-Q_2026-09-30_crox.htm.jsonl, page 20 |
| Enterprise corporate | -254,933 | -297,502 | -293,309 | -225,648 | -237,628 | USD thousands | Reported segment schedule; corporate costs are shown as their own row | 10-K_2025-12-31_crox.htm.jsonl, page 154; 10-Q_2026-09-30_crox.htm.jsonl, page 20 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 792,566 | 950,071 | -81,198 | -186,363 | 559,198 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Depreciation and amortization | 54,304 | 69,840 | 79,282 | 58,337 | 60,875 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Operating lease cost | 79,543 | 85,130 | 104,313 | 76,614 | 85,421 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Inventory donations | 2,078 | 812 | 871 | Not supplied: not printed on its own line in the quarterly report | Not supplied: not printed on its own line in the quarterly report | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Provision for (recovery of) doubtful accounts, net | 3,568 | 1,352 | -190 | Not supplied: not printed on its own line in the quarterly report | Not supplied: not printed on its own line in the quarterly report | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Share-based compensation | 29,072 | 33,053 | 36,701 | 28,512 | 36,496 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Asset impairments | 9,287 | 24,081 | 738,115 | 738,115 | 3,301 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Deferred taxes | -410,319 | -254,454 | 47,093 | 17,057 | -47 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Other non-cash items | 3,820 | 14,171 | 5,931 | 6,059 | 10,055 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Accounts receivable | -13,317 | 42,587 | -6,169 | -65,052 | -76,691 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Inventories | 86,350 | 22,055 | -13,842 | -40,165 | -45,873 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Prepaid expenses and other assets | -31,839 | -13,892 | -22,317 | -17,372 | -30,585 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Accounts payable, accrued expenses and other liabilities | 83,892 | 13,922 | 1,233 | -68,459 | -22,650 | USD thousands | Reported in the nine-month columns; the FY columns are the calculated sum of the two lines the annual report prints | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Right-of-use assets and operating lease liabilities | -75,107 | -88,772 | -105,293 | -77,580 | -87,614 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Income taxes | 316,546 | 92,530 | -74,099 | -11,802 | 69,303 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Net Cash from Operating Activities | 930,444 | 992,486 | 710,431 | 457,901 | 561,189 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Purchases of property, equipment, and software | -115,625 | -69,347 | -51,231 | -45,120 | -53,615 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Other investing | -46 | Not supplied: printed as a dash in the annual report | Not supplied: printed as a dash in the annual report | Not supplied: no such line in the quarterly report | Not supplied: no such line in the quarterly report | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Net Cash from Investing Activities | -115,671 | -69,347 | -51,231 | -45,120 | -53,615 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Proceeds from borrowings | 257,905 | 102,156 | 819,000 | 626,000 | 476,550 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Repayments of borrowings | -923,703 | -425,405 | -947,000 | -664,000 | -425,550 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Repurchases of common stock, including excise tax | -175,019 | -552,451 | -582,320 | -402,153 | -506,194 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Repurchases of common stock for tax withholding | -17,086 | -8,239 | -4,245 | -4,245 | -17,338 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Other financing | -1,736 | -2,109 | Not supplied: printed as a dash in the annual report | Not supplied: no such line in the quarterly report | Not supplied: no such line in the quarterly report | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Net Cash from Financing Activities | -859,639 | -886,048 | -714,565 | -444,398 | -472,532 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| FX Effect on Cash | 3,078 | -6,510 | 5,598 | 5,462 | -2,000 | USD thousands | Reported | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Net Cash Change | -41,788 | 30,581 | -49,767 | -26,155 | 33,042 | USD thousands | Reported; operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Opening Cash | 194,885 | 153,097 | 183,678 | 183,678 | 133,911 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Closing Cash | 153,097 | 183,678 | 133,911 | 157,523 | 166,953 | USD thousands | Reported; includes restricted cash | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6 |
| Cash Interest Paid | 151,621 | 99,463 | 77,684 | 65,873 | 58,698 | USD thousands | Reported supplemental disclosure; positive amount paid | 10-K_2025-12-31_crox.htm.jsonl, pages 117–118; 10-Q_2026-09-30_crox.htm.jsonl, page 6; 10-K_2025-12-31_crox.htm.jsonl, page 118; 10-Q_2026-09-30_crox.htm.jsonl, page 8 |
| Cash paid for income taxes, net of refunds | 176,564 | 122,678 | 185,066 | 126,207 | 91,089 | USD thousands | Reported supplemental disclosure; recast to a net-of-refunds basis by the issuer | 10-K_2025-12-31_crox.htm.jsonl, page 149; 10-Q_2026-09-30_crox.htm.jsonl, page 8 |
| Free cash flow | 814,819 | 923,139 | 659,200 | 412,781 | 507,574 | USD thousands | Calculated: operating cash flow less purchases of property, equipment and software; matches the issuer definition | EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 11; calculation C7 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 149,288 | 180,485 | 130,354 | 163,457 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Accounts receivable, net | 305,747 | 257,657 | 278,191 | 355,022 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Inventories | 385,054 | 356,254 | 368,687 | 413,030 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total current assets | 910,704 | 872,269 | 885,883 | 1,027,617 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Property and equipment, net | 238,315 | 244,335 | 238,191 | 240,778 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Intangible assets, net | 1,792,562 | 1,777,080 | 1,324,680 | 1,312,049 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Goodwill | 711,588 | 711,491 | 404,689 | 404,630 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Deferred tax assets, net | 667,972 | 872,350 | 935,054 | 904,841 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Restricted cash (non-current) | 3,807 | 3,193 | 3,557 | 3,496 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Right-of-use assets | 287,440 | 307,228 | 338,669 | 332,085 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total Assets | 4,643,834 | 4,812,153 | 4,174,750 | 4,280,671 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Accounts payable | 260,978 | 264,901 | 266,090 | 272,506 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Accrued expenses and other liabilities | 285,771 | 298,068 | 300,959 | 266,533 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Income taxes payable | 65,952 | 108,688 | 47,308 | 84,174 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Current borrowings | 23,328 | Not supplied: no such line at this date | Not supplied: no such line at this date | Not supplied: no such line at this date | USD thousands | Reported; FY2023 includes Asia facility borrowings of about 3.3 | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Current operating lease liabilities | 62,267 | 68,551 | 85,772 | 90,820 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total current liabilities | 698,296 | 740,208 | 700,129 | 714,033 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Long-term income taxes payable | 565,171 | 595,434 | 649,057 | 641,563 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Long-term borrowings | 1,640,996 | 1,349,339 | 1,230,885 | 1,289,044 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Long-term operating lease liabilities | 269,769 | 283,406 | 297,192 | 283,254 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total Liabilities | 3,189,911 | 2,976,421 | 2,881,467 | 2,935,664 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total Equity | 1,453,923 | 1,835,732 | 1,293,283 | 1,345,007 | USD thousands | Reported | 10-K_2024-12-31_crox.htm.jsonl, page 112 (FY2023); 10-K_2025-12-31_crox.htm.jsonl, pages 116–117 (FY2024, FY2025); 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| Total Debt | 1,664,324 | 1,349,339 | 1,230,885 | 1,289,044 | USD thousands | Calculated: current plus long-term borrowings at carrying value, net of issuance costs; operating lease liabilities on their own lines are not included | 10-K_2024-12-31_crox.htm.jsonl, pages 112, 135; 10-K_2025-12-31_crox.htm.jsonl, pages 116, 138; 10-Q_2026-09-30_crox.htm.jsonl, pages 4, 15 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1664.324 | Net debt data, Gross debt, FY2023 / 2023-12-31 | 1091.087 | EBITDA (Reported) FY2023 / 2023-12-31 | FY2023 / 2023-12-31 | USD | US$m | 1.53 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1515.036 | Net debt data, Net debt, FY2023 / 2023-12-31 | 1091.087 | EBITDA (Reported) FY2023 / 2023-12-31 | FY2023 / 2023-12-31 | USD | US$m | 1.39 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 1091.087 | EBITDA (Reported) FY2023 / 2023-12-31 | 151.621 | Cash Interest Paid FY2023 / 2023-12-31 | FY2023 / 2023-12-31 | USD | US$m | 7.20 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1349.339 | Net debt data, Gross debt, FY2024 / 2024-12-31 | 1091.751 | EBITDA (Reported) FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | 1.24 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1168.854 | Net debt data, Net debt, FY2024 / 2024-12-31 | 1091.751 | EBITDA (Reported) FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | 1.07 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 1091.751 | EBITDA (Reported) FY2024 / 2024-12-31 | 99.463 | Cash Interest Paid FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | 10.98 | Calculated | Tier 1, audited | None beyond the derived EBITDA. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1230.885 | Net debt data, Gross debt, FY2025 / 2025-12-31 | 228.797 | EBITDA (Reported) FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 5.38 | Calculated | Tier 1, audited | EBITDA includes USD 738.115 million of non-cash impairments; see the before-impairments rows. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1100.531 | Net debt data, Net debt, FY2025 / 2025-12-31 | 228.797 | EBITDA (Reported) FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 4.81 | Calculated | Tier 1, audited | EBITDA includes USD 738.115 million of non-cash impairments; see the before-impairments rows. |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 228.797 | EBITDA (Reported) FY2025 / 2025-12-31 | 77.684 | Cash Interest Paid FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 2.95 | Calculated | Tier 1, audited | EBITDA includes USD 738.115 million of non-cash impairments; see the before-impairments rows. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1289.044 | Net debt data, Gross debt, 2026-09-30 | 1006.666 | Constructed period register, EBITDA (Reported), trailing twelve months | 2026-09-30 | USD | US$m | 1.28 | Calculated | 2b, unaudited interim combined with audited year | Includes USD 64.071 million of non-recurring tariff refunds in cost of sales. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1125.587 | Net debt data, Net debt, 2026-09-30 | 1006.666 | Constructed period register, EBITDA (Reported), trailing twelve months | 2026-09-30 | USD | US$m | 1.12 | Calculated | 2b, unaudited interim combined with audited year | Includes USD 64.071 million of non-recurring tariff refunds in cost of sales. |
| EBITDA / cash interest | EBITDA (Reported) / Cash interest paid | 1006.666 | Constructed period register, EBITDA (Reported), trailing twelve months | 70.509 | Constructed period register, Cash Interest Paid, trailing twelve months | 2026-09-30 | USD | US$m | 14.28 | Calculated | 2b, unaudited interim combined with audited year | Includes USD 64.071 million of non-recurring tariff refunds in cost of sales. |
| Net debt / EBITDA before impairments | Net debt / (EBITDA (Reported) + impairments) | 1515.036 | Net debt data, Net debt, FY2023 / 2023-12-31 | 1100.374 | EBITDA (Reported) plus impairments FY2023 / 2023-12-31 | FY2023 / 2023-12-31 | USD | US$m | 1.38 | Calculated | Tier 1, audited | Analyst Judgement: impairments are treated as non-cash one-offs; goodwill and asset impairments from the income statement. |
| Net debt / EBITDA before impairments | Net debt / (EBITDA (Reported) + impairments) | 1168.854 | Net debt data, Net debt, FY2024 / 2024-12-31 | 1115.833 | EBITDA (Reported) plus impairments FY2024 / 2024-12-31 | FY2024 / 2024-12-31 | USD | US$m | 1.05 | Calculated | Tier 1, audited | Analyst Judgement: impairments are treated as non-cash one-offs; goodwill and asset impairments from the income statement. |
| Net debt / EBITDA before impairments | Net debt / (EBITDA (Reported) + impairments) | 1100.531 | Net debt data, Net debt, FY2025 / 2025-12-31 | 966.912 | EBITDA (Reported) plus impairments FY2025 / 2025-12-31 | FY2025 / 2025-12-31 | USD | US$m | 1.14 | Calculated | Tier 1, audited | Analyst Judgement: impairments are treated as non-cash one-offs; goodwill and asset impairments from the income statement. |
| Net debt / EBITDA before impairments | Net debt / (EBITDA (Reported) + impairments) | 1125.587 | Net debt data, Net debt, 2026-09-30 | 1009.967 | Constructed period register, EBITDA before impairments, trailing twelve months | 2026-09-30 | USD | US$m | 1.11 | Calculated | 2b, unaudited interim combined with audited year | Analyst Judgement: impairments are treated as non-cash one-offs; goodwill and asset impairments from the income statement. |
| Net debt / EBITDA before impairments and tariff refunds | Net debt / (EBITDA (Reported) + impairments - tariff refunds) | 1125.587 | Net debt data, Net debt, 2026-09-30 | 945.896 | Constructed period register, EBITDA before impairments, less tariff refunds of 64.071 | 2026-09-30 | USD | US$m | 1.19 | Calculated | 2b, unaudited interim combined with audited year | Analyst Judgement: the issuer calls the refunds non-recurring; the release states the amount for the quarter. |
| Cash share repurchases / free cash flow | Repurchases of common stock including excise tax / Free cash flow | 506.194 | T4.5 Cash flow statement, Repurchases of common stock, 9M 2026 | 507.574 | T4.5 Cash flow statement, Free cash flow, 9M 2026 | 9M 2026 | USD | US$m | 0.9973 | Calculated | 2b, unaudited | Excludes USD 17.338 million of repurchases for tax withholding. |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_crox.htm.jsonl | Annual report on Form 10-K, audited | FY2024 with FY2023 and FY2022 comparatives | USD | thousands | Crocs, Inc. consolidated | US GAAP | Tier 1, audited | FY2023 balance sheet, FY2023 debt and liquidity, FY2023 store counts | Superseded for FY2024 and FY2023 income and cash flow lines by the recast comparatives in the 2025 annual report. |
| 10-K_2025-12-31_crox.htm.jsonl | Annual report on Form 10-K, audited | FY2025 with FY2024 and FY2023 comparatives | USD | thousands | Crocs, Inc. consolidated | US GAAP | Tier 1, audited | FY2023 to FY2025 statements, debt note, contractual obligations | Controls FY2025 facts. |
| 10-Q_2026-03-31_crox.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three months ended 2026-03-31 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 2b, unaudited | Asia facility borrowings at 2026-03-31 | No auditor review report is in the supplied text. |
| 10-Q_2026-06-30_crox.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three and six months ended 2026-06-30 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 2b, unaudited | Revolver drawings at 2026-06-30 | No auditor review report is in the supplied text. |
| 10-Q_2026-09-30_crox.htm.jsonl | Quarterly report on Form 10-Q, unaudited | Three and nine months ended 2026-09-30 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 2b, unaudited | Nine-month statements, balance sheet at 2026-09-30, debt and liquidity | No auditor review report is in the supplied text; controls current-period facts. |
| EX99.1_2026-03-31_crox_croxq12026-pressrelease-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Q1 2026 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 3b, issuer release | Total borrowings as the release states them | Management presentation; filings control. |
| EX99.1_2026-06-30_crox_croxq22026-pressrelease-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Q2 2026 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 3b, issuer release | Not used for figures | Management presentation; filings control. |
| EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Q3 2026 | USD | thousands | Crocs, Inc. consolidated | US GAAP | 3b, issuer release | Tariff refund amount, free cash flow, debt repaid | Management presentation; filings control. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Crocs, Inc. | Issuer and registrant; borrower together with certain subsidiaries under the credit agreements | 12-31 | USD | thousands | Crocs, Inc. and consolidated subsidiaries; two segments, the Crocs Brand and the HEYDUDE Brand | US GAAP | FY2023, FY2024, FY2025 (annual); Q1 2026, H1 2026, 9M 2026 (interim, with 2025 comparatives); the 2025 interim balance sheets are not supplied |

A subsequent event is noted: the cover of the quarterly report for the third quarter of 2026 gives 45,725,039 shares outstanding at 2026-10-22, below the 46.2 million at 2026-09-30, which implies repurchases after the balance-sheet date that the sources do not quantify.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Express statement amounts in US dollar millions in the money tables | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | Unit conversion, no currency change | USD thousands as printed | USD millions with three decimals, exact | The money tables use the money unit; no FX rate is involved | All |
| Derive EBITDA (Reported) as income from operations plus depreciation and amortization | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | Derivation | Not stated by the issuer | See T4.4 | The issuer states no EBITDA | All |
| Use the FY2023 and FY2024 amounts as recast in the 2025 annual report (asset impairments shown on their own line; cash taxes net of refunds) | 10-K_2025-12-31_crox.htm.jsonl | Reclassification | Original presentation in the 2024 annual report | Recast presentation | Same basis across the three years; income from operations is unchanged | FY2023, FY2024 |
| Add impairments back to reported EBITDA for a separate row | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | Analyst Judgement | FY2025 EBITDA 228,797 | 966,912 | Impairments are non-cash; the unadjusted measure stays the primary denominator | FY2025 |
| Remove the tariff refund credited to cost of sales from trailing EBITDA | EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl | Analyst Judgement | Trailing EBITDA before impairments 1,009,967 | 945,896 | The issuer calls the refund non-recurring; the amount is its stated 64,071 | Trailing twelve months to 2026-09-30 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD thousands) | Current Stub (USD thousands) | Prior-Year Stub (USD thousands) | Derived Value (USD thousands) | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM at 2026-09-30 | 4,040,647 | 3,143,508 | 3,083,007 | 4,101,148 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Income from operations | LTM at 2026-09-30 | 149,515 | 778,449 | 3,118 | 924,846 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Depreciation and amortization | LTM at 2026-09-30 | 79,282 | 60,875 | 58,337 | 81,820 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| EBITDA (Reported) | LTM at 2026-09-30 | 228,797 | 839,324 | 61,455 | 1,006,666 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Impairments (goodwill and asset) | LTM at 2026-09-30 | 738,115 | 3,301 | 738,115 | 3,301 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| EBITDA before impairments | LTM at 2026-09-30 | 966,912 | 842,625 | 799,570 | 1,009,967 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Cash Interest Paid | LTM at 2026-09-30 | 77,684 | 58,698 | 65,873 | 70,509 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Net Cash from Operating Activities | LTM at 2026-09-30 | 710,431 | 561,189 | 457,901 | 813,719 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Purchases of property, equipment, and software | LTM at 2026-09-30 | -51,231 | -53,615 | -45,120 | -59,726 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |
| Free cash flow | LTM at 2026-09-30 | 659,200 | 507,574 | 412,781 | 753,993 | Calculated | 10-K_2025-12-31_crox.htm.jsonl; 10-Q_2026-09-30_crox.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; the 2025 stub is the comparative printed in the 2026 report. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Profitability | Gross margin (%), calculated | 55.78 | 58.76 | 58.33 | 59.47 | 60.87 | Up | The issuer reports 59.5 and 60.9 for the nine months. |
| Profitability | Operating margin (%), calculated | 26.17 | 24.91 | 3.70 | 0.10 | 24.76 | Volatile | FY2025 and nine months 2025 carry the impairments. |
| Profitability | EBITDA (Reported) margin (%), calculated | 27.54 | 26.61 | 5.66 | 1.99 | 26.70 | Volatile | Same impairment effect. |
| Growth | Revenue growth (%), year on year | Not supplied: FY2022 revenue not extracted | 3.53 | -1.50 | Not applicable | 1.96 | Flat | The issuer reports 2.0 for the nine months. |
| Segment | Crocs Brand revenue growth (%), year on year | Not supplied: FY2022 not extracted | 8.80 | 1.46 | Not applicable | 3.25 | Up | The issuer reports 3.3 for the nine months. |
| Segment | HEYDUDE Brand revenue growth (%), year on year | Not supplied: FY2022 not extracted | -13.19 | -13.26 | Not applicable | -4.31 | Down, narrowing | The issuer reports a decrease of 4.3 for the nine months. |
| Operating | Company-operated stores, Crocs Brand (period end) | 349 | 390 | 439 | 427 | 500 | Up | Period-end counts. |
| Operating | Company-operated stores, HEYDUDE Brand (period end) | 14 | 52 | 75 | 75 | 78 | Up | Period-end counts. |
| Operating | Digital sales as a percent of total revenues (%) | 37.9 | 37.2 | 37.8 | Not supplied: annual measure only | Not supplied: annual measure only | Flat | Includes marketplaces and e-tailers reported in wholesale. |
| Cash flow | Free cash flow (USD thousands) | 814,819 | 923,139 | 659,200 | 412,781 | 507,574 | Up | Operating cash flow less purchases of property, equipment and software. |
| Capital allocation | Cash share repurchases including excise tax (USD thousands) | 175,019 | 552,451 | 582,320 | 402,153 | 506,194 | Up | Authorization remaining about USD 1.7 billion at 2026-09-30. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA, unadjusted, as the primary denominator | The issuer states no EBITDA; its non-GAAP measures are adjusted operating income and margin | EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, pages 9–11 | All | FY2025 reported EBITDA of 228,797 against 966,912 before impairments, a difference of 738,115 | Financial foundation and the analyses that use it | Use derived reported EBITDA; show the before-impairments row beside it |
| Total debt | Balance-sheet carrying value, current plus long-term | Face value, less unamortized issuance costs: the quarterly report says total borrowings of USD 1.3 billion, the release USD 1.29 billion | 10-Q_2026-09-30_crox.htm.jsonl, pages 15, 23; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 2 | 2026-09-30 | Carrying 1,289,044 against face 1,313,000, a difference of 23,956 | All leverage ratios | Carrying value is the denominator; face is shown as principal |
| Operating lease liabilities | Not added to Total Debt when on their own lines | Presented on separate balance-sheet lines | 10-Q_2026-09-30_crox.htm.jsonl, page 4 | 2026-09-30 | 374,074 outside debt; cash paid for operating leases 87,469 in the nine months | Financial foundation | Kept outside Total Debt; named as a claim outside debt |
| Long-term income taxes payable | Not debt | Uncertain tax positions and related liabilities | 10-K_2025-12-31_crox.htm.jsonl, pages 116, 152–153; 10-Q_2026-09-30_crox.htm.jsonl, page 4 | 2026-09-30 | 641,563 | Financial foundation | Kept outside Total Debt; named as a non-debt claim |
| SG&A presentation | Statement lines as in the quarterly report | The release shows impairments inside SG&A | 10-Q_2026-09-30_crox.htm.jsonl, page 3; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 4 | 9M 2025 and 9M 2026 | 1,134,937 against 1,131,636 and 1,830,275 against 1,092,160 | Financial foundation | Use the quarterly report lines; the difference equals the impairment lines |
| Total borrowings at 2026-03-31 | Carrying value including all borrowings | The release's USD 1.34 billion includes Asia facility borrowings of 5,600 that the quarterly report's table omits | 10-Q_2026-03-31_crox.htm.jsonl, pages 12, 15; EX99.1_2026-03-31_crox_croxq12026-pressrelease-htm.htm.jsonl, page 2 | 2026-03-31 | 5,600 | Liquidity analysis of that date | Add the 5,600 to first-quarter gross debt when that date is used |
| Free cash flow | Operating cash flow less capital expenditure | Operating cash flow less purchases of property, equipment and software | EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 11 | 9M 2025 and 9M 2026 | None; the amounts agree | Financial foundation | No conflict |
| FY2025 adjusted operating margin base | Not applicable | 22.3% in the first and second-quarter outlooks, 22.5% in the third-quarter outlook | EX99.1_2026-03-31_crox_croxq12026-pressrelease-htm.htm.jsonl, page 3; EX99.1_2026-06-30_crox_croxq22026-pressrelease-htm.htm.jsonl, page 3; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 3 | FY2025 | Unresolved; 0.2 percentage points | Fundamental credit | Quote with its source and date; no FY2025 release is supplied |
| Cash interest against interest expense | Cash paid is the cover denominator | Interest expense 59,427 against cash paid 58,698 in the nine months to 2026-09-30 | 10-Q_2026-09-30_crox.htm.jsonl, pages 3, 8 | 9M 2026 | 729 | Interest cover | Use cash paid |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and cover at 2026-09-30 | Ready with Limitations | EBITDA is derived, not issuer-stated; trailing figure includes a one-off tariff refund | Use the before-impairments and before-refund rows beside the reported ones |
| Liquidity and maturities | Ready | Asia facility commitment not stated; revolver maturity November 2027 | Confirm any revolver extension from later filings |
| Covenant headroom | Not Ready | No covenant ratio or definition is printed | Obtain compliance certificates or the credit agreements |
| Security and ranking | Ready with Limitations | The notes' security is not stated | Obtain the indentures |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Facility | Senior secured revolving credit facility | Not supplied: carrying value by instrument is not disclosed; the fair value note repeats face value | 113,000 | 113,000 | 1,000,000 | Secured by all of the assets of the Borrowers and guaranteed by certain other subsidiaries | Senior secured; ranking against the term loan not stated | USD | 113,000 | Not applicable | Term SOFR plus a leverage-based margin of 1.35% to 1.975%, including a 0.10% SOFR adjustment | Floating | Term SOFR or Daily Simple SOFR | 135 to 197.5 | Not supplied: floor not stated | 2027-11 (day not stated) | Not applicable | 10-Q_2026-09-30_crox.htm.jsonl, page 16; 10-K_2025-12-31_crox.htm.jsonl, page 85 |
| Term Loan B Facility | Senior secured term loan | Not supplied: carrying value by instrument is not disclosed; the fair value note repeats face value | 500,000 | 500,000 | 500,000 | Secured by substantially all assets of the Company and each subsidiary guarantor | Senior secured; ranking against the revolving facility not stated | USD | 500,000 | Not applicable | Adjusted Term SOFR plus 2.25% | Floating | Adjusted Term SOFR | 225 | Not supplied: floor not stated | 2029-02-17 | 0 | 10-Q_2026-09-30_crox.htm.jsonl, pages 15–16; 10-K_2025-12-31_crox.htm.jsonl, pages 86–87, 90 |
| 4.250% Senior Notes due 2029 | Senior notes | Not supplied: carrying value by instrument is not disclosed; the fair value note repeats face value | 350,000 | 350,000 | 350,000 | Not supplied: the filings do not state whether the notes are secured | Pari passu in right of payment with existing and future senior debt, including the credit agreement | USD | 350,000 | Not applicable | 4.250% (effective 4.64%) | Fixed | Not applicable | Not applicable | Not applicable | 2029-03-15 | 0 | 10-Q_2026-09-30_crox.htm.jsonl, pages 15–16; 10-K_2025-12-31_crox.htm.jsonl, pages 87–88, 90 |
| 4.125% Senior Notes due 2031 | Senior notes | Not supplied: carrying value by instrument is not disclosed; the fair value note repeats face value | 350,000 | 350,000 | 350,000 | Not supplied: the filings do not state whether the notes are secured | Pari passu in right of payment with existing and future senior debt, including the credit agreement | USD | 350,000 | Not applicable | 4.125% (effective 4.35%) | Fixed | Not applicable | Not applicable | Not applicable | 2031-08-15 | 0 | 10-Q_2026-09-30_crox.htm.jsonl, pages 15–16; 10-K_2025-12-31_crox.htm.jsonl, pages 87–88, 90 |
| Asia Revolving Credit Facility (Citibank (China) Shanghai Branch) | Revolving credit facility | 0 | 0 | 0 | 15,000 | Not supplied: not stated | Not supplied: not stated | USD | 0 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not applicable | 10-Q_2026-09-30_crox.htm.jsonl, page 16 |
| Financing cost adjustment | Unamortized issuance costs | -23,956 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -23,956 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_crox.htm.jsonl, page 15 |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 34 |
| Calculated | 16 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 6 |

## Calculations

Amounts are in US dollar millions with three decimals unless a row says thousands; each is the thousands figure the filing prints divided by 1,000.

| ID | Check | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Net debt = gross debt less cash | FY2023 / 2023-12-31: 1664.324 - 149.288; FY2024 / 2024-12-31: 1349.339 - 180.485; FY2025 / 2025-12-31: 1230.885 - 130.354; 2026-09-30: 1289.044 - 163.457 | 1515.036; 1168.854; 1100.531; 1125.587 | 10-K_2024-12-31_crox.htm.jsonl, page 112; 10-K_2025-12-31_crox.htm.jsonl, page 116; 10-Q_2026-09-30_crox.htm.jsonl, page 4 |
| C2 | Gross debt at carrying value, 2026-09-30 | Face values 350.000 + 350.000 + 500.000 + 113.000 = 1313.000; less unamortized issuance costs 23.956 | 1289.044, equal to long-term borrowings on the balance sheet | 10-Q_2026-09-30_crox.htm.jsonl, pages 4, 15 |
| C3 | Gross debt at carrying value, FY2023 | Long-term borrowings 1640.996 + current borrowings 23.328 | 1664.324; the note's face 1710.000 less issuance costs 49.004 is 1660.996, and the 3.328 difference is the Asia facility borrowing of about 3.3 | 10-K_2024-12-31_crox.htm.jsonl, pages 83, 112, 135 |
| C4 | Maturity ladder principal | 0 + 113.000 + 0 + 850.000 + 0 + 350.000 | 1313.000, equal to the face total | 10-Q_2026-09-30_crox.htm.jsonl, page 15 |
| C5 | EBITDA (Reported) and ratios | FY2023 / 2023-12-31: EBITDA 1091.087, gross debt 1664.324, net debt 1515.036, cash interest 151.621; FY2024 / 2024-12-31: EBITDA 1091.751, gross debt 1349.339, net debt 1168.854, cash interest 99.463; FY2025 / 2025-12-31: EBITDA 228.797, gross debt 1230.885, net debt 1100.531, cash interest 77.684; 2026-09-30: EBITDA 1006.666, gross debt 1289.044, net debt 1125.587, cash interest 70.509 | FY2023 / 2023-12-31: 1.53, 1.39, 7.20; FY2024 / 2024-12-31: 1.24, 1.07, 10.98; FY2025 / 2025-12-31: 5.38, 4.81, 2.95; 2026-09-30: 1.28, 1.12, 14.28 | 10-K_2025-12-31_crox.htm.jsonl, pages 115–118; 10-Q_2026-09-30_crox.htm.jsonl, pages 3, 6, 8 |
| C6 | EBITDA before impairments and before tariff refunds | Reported EBITDA plus impairments FY2023 / 2023-12-31: 1091.087 + 9.287 = 1100.374; FY2024 / 2024-12-31: 1091.751 + 24.082 = 1115.833; FY2025 / 2025-12-31: 228.797 + 738.115 = 966.912; 2026-09-30: 1006.666 + 3.301 = 1009.967; less tariff refunds 64.071 gives 945.896 | Net debt over these: FY2023 / 2023-12-31: 1.38; FY2024 / 2024-12-31: 1.05; FY2025 / 2025-12-31: 1.14; 2026-09-30: 1.11; trailing before refunds 1.19 | 10-K_2025-12-31_crox.htm.jsonl, pages 115, 117; 10-Q_2026-09-30_crox.htm.jsonl, pages 3, 6; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 8 |
| C7 | Free cash flow and repurchase share, 9M 2026 | Operating cash flow 561.189 - capital expenditure 53.615 = 507.574; repurchases 506.194 / 507.574; trailing free cash flow 659.200 + 507.574 - 412.781 | 507.574; 0.9973; 753.993 | 10-Q_2026-09-30_crox.htm.jsonl, page 6; EX99.1_2026-09-30_crox_croxq32026-pressrelease-htm.htm.jsonl, page 11 |
| C8 | Claims outside debt at 2026-09-30 | Operating lease liabilities 90.820 + 283.254; long-term income taxes payable 641.563 over net debt 1125.587 | 374.074; 0.5700 | 10-Q_2026-09-30_crox.htm.jsonl, page 4 |

## Gaps

- The issuer states neither EBITDA nor adjusted EBITDA, so reported EBITDA is derived from operating income and depreciation and amortization, and no adjusted ratios, adjusted EBITDA row or EBITDA bridge can be stated. This restricts every leverage and cover figure to a derived basis. Severity: Low. Action: obtain the issuer's covenant EBITDA definition or an investor presentation that states an adjusted EBITDA.
- The filings state compliance with the financial covenants but print no covenant ratio, definition or headroom, so covenant capacity cannot be measured from these figures. Severity: Low. Action: obtain the compliance certificates or the credit agreements.
- No supplied source states whether the two senior notes are secured, so they are left out of the debt stack and out of secured and senior subtotals, and their security cell is not supplied. Severity: Low. Action: obtain the indentures.
- The September 2025 balance sheet is not printed in the supplied documents, so the nine months of 2025 are stated for income and cash flow only, and a trailing twelve-month ratio at 2025-09-30 cannot be built. Severity: Low. Action: obtain the third-quarter 2025 quarterly report if a year-on-year comparison of leverage is needed.
- A few statement cells state that no value was printed (lines printed as a dash, lines folded into other lines in the quarterly reports, and current borrowings after 2023), so those cells are left as gaps, not zero. This restricts line-level comparison across annual and interim columns only. Severity: Low. Action: none needed for the ratios.
- The amount of the revolving facility commitment at 2023-12-31 is not stated in the supplied pages, only the availability of USD 558.7 million, so undrawn capacity for that date rests on the stated availability. Severity: Low. Action: none needed for the latest period.

## Next module

The orchestrator selects the next module.
