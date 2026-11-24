# Financial foundation: Coeur Mining, Inc.

## Request

Financial foundation for Coeur Mining, Inc. (issuer cde-215466), as of 2026-11-18, credit snapshot pathway. The scope is the financial statements, debt, liquidity and leverage metrics for FY2024, FY2025 and the latest twelve months to 2026-09-30, built from the ten supplied filings and releases.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_cde.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-19 | 05d003403f40be0fc6bc986b859acf7507bf7a7b1c9049aca2b90ea9c21c3f05 | FY2024 statements, balance sheet classification check, interest paid for FY2024 |
| 10-K_2025-12-31_cde.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-18 | a1fe4ff134a3f45cb2836efbd266884dfc6f97092f4c9406aae18ee487e63cc7 | FY2025 and FY2024 statements, debt and lease notes, EBITDA reconciliations, interest paid, previous credit agreement terms |
| 10-Q_2026-03-31_cde.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-06 | 458c34571e353b2acc1190134f16132eedb8bb0397d8ac9b7565f9f030a26eb1 | Restated FY2025 Adjusted EBITDA used to explain a difference in the trailing figure |
| 10-Q_2026-06-30_cde.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-05 | 046a40d672b0f0c8dc32a81655c8bd22d773a5062e8c86d1c8629fa445b47006 | Cross-check of total debt at 2026-06-30, which agrees with the trailing reconciliation |
| 10-Q_2026-09-30_cde.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-04 | 3d4d14a28b68273d7916682e11fd1dbe12b177d8058a9a0fad58d8bc79956913 | Latest period: 9M 2026 and Q3 2026 statements, debt note, liquidity, EBITDA reconciliations, post-balance-sheet events |
| EX99.1_2026-03-31_cde_a1q26earningsreleaseex-991-htm.htm.jsonl | Earnings release for the first quarter of 2026, filed as Exhibit 99.1 | 2026-05-06 | 8dd5a393b7ff57f625d8b83e8c187bb6b0955e87172f5bc9a8ea1a4636dcaf47 | Not used for a figure; the quarterly report for the same quarter is the source |
| EX99.1_2026-03-31_cde_a2q26inauguraldividendex-9-htm.htm.jsonl | Press release declaring the inaugural dividend, filed as Exhibit 99.1 | 2026-05-13 | 7a40c047a0fd3e04bac0a878451e71137bfe027159f86bb0b3708e993adc959c | Not used for a figure; the dividend paid in 2026 is taken from the cash flow statement |
| EX99.1_2026-03-31_cde_ef20071153-ex99-1-htm.htm.jsonl | Press release on the final results of the exchange offer for New Gold senior notes, filed as Exhibit 99.1 | 2026-04-21 | 24b06d6d9a2ee2424194b0723229f27e3c9257cc5940de2a36d6ab015ece6084 | Principal and cash terms of the exchange offer that created the 2032 Senior Notes |
| EX99.1_2026-06-30_cde_a2q26earningsreleaseex-991-htm.htm.jsonl | Earnings release for the second quarter of 2026, filed as Exhibit 99.1 | 2026-08-05 | 8a53b3b56eba0864750427747f42298f52baf89cbb11bd5738b36b64aa84b06f | Not used for a figure; the quarterly report for the same quarter is the source |
| EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl | Earnings release for the third quarter of 2026, filed as Exhibit 99.1 | 2026-11-04 | 8d2e6d61b56643320b319b292481e66a56994f1835dee54fcf35688a5d07537f | Five-quarter table, trailing twelve month EBITDA reconciliation, Q3 2025 EBITDA, operating KPIs |

Supplied handoff: Source readiness (CP-0), sha256 267354b70d66d83cacc46e7ea7ff6da33c12051397117ff655b905f73d8c8d38, used for the document map, document dates and source gaps.

## Findings

### Bottom line

Coeur Mining reports net cash of USD 471,080 thousand at 2026-09-30, so net debt to EBITDA is -0.26x and creditors face no net leverage, but trailing EBITDA includes the acquired Canadian operations only from the acquisition date, so the ratio is not a like-for-like trend.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, page 2; 10-Q_2026-09-30_cde.htm.jsonl, page 67; calculation C6; calculation C13

Debt is USD 701,652 thousand against cash of USD 1,172,732 thousand, and the USD 1,000 million revolving facility is undrawn. Pro forma for the insurance settlement agreed on 2026-10-23, net cash would be USD 541.08 million and net debt to EBITDA -0.30x. Two items are not established from the filings: cash interest paid for any 2026 period, so trailing interest cover cannot be calculated, and the outstanding principal of the 2029 notes, so the maturity ladder is incomplete.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 17–21; 10-Q_2026-09-30_cde.htm.jsonl, page 38; calculation C14; calculation C17

### Key findings

Net leverage has fallen from 1.77x at 2024-12-31 to -0.22x at 2025-12-31 and -0.26x at 2026-09-30. EBITDA rose from USD 302,600 thousand in FY2024 to USD 964,579 thousand in FY2025 while debt fell from USD 590,058 thousand to USD 340,533 thousand, so the improvement came from earnings and net repayment of debt.
Basis: 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; 10-K_2025-12-31_cde.htm.jsonl, page 129; calculation C1; calculation C2; calculation C4; calculation C5

Cash interest paid was USD 49,806 thousand in FY2024 and USD 31,763 thousand in FY2025, which gives EBITDA cover of 6.08x and 30.37x. The quarterly reports print no cash interest, so interest cover for the latest twelve months is not calculable and the improvement cannot be extended to 2026.
Basis: 10-K_2025-12-31_cde.htm.jsonl, page 175; 10-K_2024-12-31_cde.htm.jsonl, page 162; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4

Cash from operations was USD 1,239,687 thousand in the first nine months of 2026 against USD 512,292 thousand a year earlier, and free cash flow was USD 894,491 thousand after USD 345,196 thousand of capital expenditures. Share repurchases of USD 221,232 thousand and dividends of USD 20,645 thousand took USD 241,877 thousand of that, so shareholder distributions are the largest use of cash after capital expenditures.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4; calculation C19; calculation C20

Liquidity at 2026-09-30 is USD 1,172,732 thousand of cash and USD 972.3 million of undrawn revolving credit after USD 27.7 million of letters of credit, against USD 701,652 thousand of debt. Cash alone exceeds the carrying value of the 2029 notes, USD 291,342 thousand, so the nearest maturity in the sources is covered without drawing the facility.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, page 2; 10-Q_2026-09-30_cde.htm.jsonl, pages 17–21; calculation C16

The latest twelve months are not on a pro forma basis. The New Gold balance sheet is in the figures at 2026-09-30, but its earnings enter EBITDA only from the acquisition date, and the issuer's pro forma note covers revenue and net income, not EBITDA. The leverage ratio at 2026-09-30 therefore sits on a part-year earnings base, which makes it conservative rather than flattering.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 10–12; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22

Claims outside the debt figure are large relative to debt: reclamation obligations were USD 427,296 thousand at 2026-09-30 and deferred tax liabilities USD 3,100,085 thousand after the acquisition accounting. Only the current portion of operating lease liabilities, USD 7,664 thousand, is printed at 2026-09-30, and no pension or retiree medical obligation is disclosed.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 2 and 38; calculation C18

### Contrary evidence and what would change the view

The strongest contrary evidence is price dependence. The average realized gold price was USD 2,156 per ounce in FY2024, USD 3,184 in FY2025 and USD 4,140 in the first nine months of 2026, and total debt to EBITDA was 1.95x at 2024-12-31, so the net cash position rests on prices that have nearly doubled. A fall toward FY2024 prices would compress EBITDA while the 2029 and 2032 notes stay fixed. Cash interest for the latest twelve months and the exact 2029 notes principal would settle the two open items in the metrics; a lower realized price would be the signal that changes the view.
Basis: 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40; calculation C4

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.95 | 1.77 | x | Reported EBITDA at carrying-value debt |
| FY2025 / 2025-12-31 | 0.35 | -0.22 | x | Reported EBITDA at carrying-value debt |
| 2026-09-30 | 0.39 | -0.26 | x | Reported EBITDA at carrying-value debt; trailing EBITDA at 2026-09-30 includes the acquired operations from the acquisition date only |

Both ratios use reported EBITDA and balance-sheet carrying value of debt, and the 2026-09-30 row uses trailing EBITDA that includes the acquired operations only from the acquisition date, so it is not comparable with the earlier rows.
Basis: calculation C6; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6.08 | x | Reported EBITDA over cash interest paid from the supplemental cash flow information |
| FY2025 / 2025-12-31 | 30.37 | x | Reported EBITDA over cash interest paid from the supplemental cash flow information |
| 2026-09-30 | Not supplied: trailing cash interest paid is not printed | x | Reported EBITDA over cash interest paid; the quarterly reports print no interim cash interest |

Cash interest paid is printed only in the annual reports, so the 2026-09-30 row is not calculable.
Basis: 10-K_2025-12-31_cde.htm.jsonl, page 175; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 55.087 | 175.700 | US$m | Cash and cash equivalents; undrawn is the previous USD 400 million facility less USD 195.0 million drawn and USD 29.3 million of letters of credit |
| FY2025 / 2025-12-31 | 553.597 | 399.500 | US$m | Cash and cash equivalents; undrawn is the previous USD 400 million facility less USD 0.5 million of letters of credit |
| 2026-09-30 | 1,172.732 | 972.300 | US$m | Cash and cash equivalents; undrawn is the new USD 1,000 million facility less USD 27.7 million of letters of credit, with no draws |

Undrawn committed facilities are revolving credit facility availability after letters of credit, and the facility was replaced in 2026, so the earlier rows describe the previous facility.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 20–21; 10-K_2025-12-31_cde.htm.jsonl, page 154; 10-K_2024-12-31_cde.htm.jsonl, page 143

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2027 | 0.468 | US$m | Current portion of finance lease obligations at carrying value, due within twelve months of 2026-09-30; no principal is printed for leases, and a further 0.025 is non-current with no year stated |
| 2029 | Not supplied: the outstanding principal of the 2029 Senior Notes is not printed | US$m | The 2029 Senior Notes carry a 5.125% coupon and mature on 2029-02-15; carrying value is 291.342 net of issuance costs of about 1.8; USD 375.0 million was issued in 2021 and USD 76.0 million and USD 5.867 million were later exchanged for equity, per the earlier annual reports |
| 2031 | 0.000 | US$m | The new USD 1,000 million revolving credit facility matures in March 2031; nothing is drawn at 2026-09-30 |
| 2032 | 398.374 | US$m | 2032 Senior Notes of 385.774 issued in the exchange offer plus New Gold 2032 Senior Notes printed as approximately 12.6, so the total is approximate |

The ladder is incomplete because the outstanding principal of the 2029 notes is not printed, and the 2032 amount is approximate because the New Gold notes are printed as approximately USD 12.6 million.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 17–21; EX99.1_2026-03-31_cde_ef20071153-ex99-1-htm.htm.jsonl, page 1; 10-K_2025-12-31_cde.htm.jsonl, page 153; 10-K_2024-12-31_cde.htm.jsonl, page 74; 10-K_2024-12-31_cde.htm.jsonl, page 78

### Financials and credit metrics

| Measure | FY2024 | FY2025 | Latest twelve months to 2026-09-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| Revenue | 1,054.006 | 2,070.126 | 3,600.247 | US$m | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 23 |
| EBITDA (Reported) | 302.600 | 964.579 | 1,790.516 | US$m | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22 |
| EBITDA (Adjusted) | 339.152 | 1,025.772 | 1,825.599 | US$m | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 23 |
| Free cash flow | -8.954 | 665.717 | 1,207.759 | US$m | 10-K_2025-12-31_cde.htm.jsonl, page 117; 10-Q_2026-09-30_cde.htm.jsonl, page 66 |
| Total debt | 590.058 | 340.533 | 701.652 | US$m | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Cash and cash equivalents | 55.087 | 553.597 | 1,172.732 | US$m | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Net debt | 534.971 | -213.064 | -471.080 | US$m | Net debt data |
| Total debt / EBITDA | 1.95 | 0.35 | 0.39 | x | Calculation register |
| Net debt / EBITDA | 1.77 | -0.22 | -0.26 | x | Calculation register |
| EBITDA / cash interest | 6.08 | 30.37 | Not supplied: trailing cash interest paid is not printed | x | Calculation register |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 590.058 | 55.087 | 534.971 | US$m | Reported balance sheet; gross debt is carrying value including finance lease obligations of 105.000 carried in the debt lines; principal total not stated because the 2029 Senior Notes principal is not printed exactly |
| FY2025 / 2025-12-31 | 340.533 | 553.597 | -213.064 | US$m | Reported balance sheet; gross debt is carrying value including finance lease obligations of 49.741 carried in the debt lines; principal total not stated because the 2029 Senior Notes principal is not printed exactly |
| 2026-09-30 | 701.652 | 1,172.732 | -471.080 | US$m | Reported balance sheet; gross debt is carrying value including finance lease obligations of 0.493 carried in the debt lines; principal total not stated because the 2029 Senior Notes principal is not printed exactly; cash excludes restricted cash of 4.274 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | Not supplied: the 2029 Senior Notes principal is not printed exactly | Not supplied: needs the contractual principal | 701.652 | US$m | Carrying value is total debt at 2026-09-30 including finance lease obligations; reconciling items would be issuance costs, the premium received on the 2032 notes and any premium or discount on the other lines, but they cannot be summed because the 2029 notes principal is not printed |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Property damage and business interruption insurance settlement | 2026-10-23 | -70.000 | -541.080 | -0.30 | US$m | Agreement of 2026-10-23 on the Wharf fire claims; the issuer expects additional proceeds of USD 70 million in the fourth quarter of 2026, so the cash is expected, not received; net debt of -471.080 at 2026-09-30 falls to -541.080 over trailing EBITDA of 1,790.516 |
| Dividend of USD 0.02 per share declared | 2026-11-04 | Not supplied: the total payable is not stated | Not supplied: the total payable is not stated | Not supplied: the total payable is not stated | US$m | Payable on 2026-12-16 to holders of record on 2026-11-30; the shares entitled are not known at the filing date, so no total or pro forma figure is stated |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1,054.006 | 339.152 | US$m | Twelve months; issuer-adjusted EBITDA from the EBITDA reconciliation |
| FY2025 / 2025-12-31 | 2,070.126 | 1,025.772 | US$m | Twelve months; issuer-adjusted EBITDA from the EBITDA reconciliation |
| 2026-09-30 | 3,600.247 | 1,825.599 | US$m | Trailing twelve months to 2026-09-30 as printed by the issuer; issuer-adjusted EBITDA; the acquired operations are included from the acquisition date only |

Adjusted EBITDA is the issuer's own measure, which adds back the items in the EBITDA bridge and is not adjusted for the non-cash acquired inventory charge; the trailing row includes the acquired operations from the acquisition date only.
Basis: 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving credit facility, USD 1,000 million commitment | 1 | Yes | 0.000 | 0.00 | US$m | RCF; secured by a pledge of the shares of certain domestic and Canadian subsidiaries of Coeur; obligor is Coeur Mining, Inc. with named subsidiary guarantors; drawn amount shown, availability is in the liquidity table; cumulative leverage is the cumulative carrying value over trailing reported EBITDA of 1,790.516; the 2029 Senior Notes and finance leases are left out because no source states their security or rank |
| 2032 Senior Notes, 6.875% | 2 | No | 396.127 | 0.22 | US$m | Carrying value; principal 385.774 at issue; unsecured senior obligations of Coeur Mining, Inc., guaranteed by named subsidiary guarantors, effectively subordinated to secured debt and structurally subordinated to non-guarantor subsidiaries; cumulative leverage is the cumulative carrying value over trailing reported EBITDA of 1,790.516; the 2029 Senior Notes and finance leases are left out because no source states their security or rank |
| New Gold 2032 Senior Notes, 6.875% | 2 | No | 13.690 | 0.23 | US$m | Carrying value; principal approximately 12.6; senior unsecured notes of New Gold Inc.; Coeur Mining, Inc. is not an obligor or guarantor; cumulative leverage is the cumulative carrying value over trailing reported EBITDA of 1,790.516; the 2029 Senior Notes and finance leases are left out because no source states their security or rank |

The stack shows carrying values at 2026-09-30 for the instruments whose security and rank the filings state; the 2029 notes and finance leases are left out because those terms are not stated.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 17–21; calculation C15

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), trailing twelve months | 1,790.516 | US$m | Opening: issuer EBITDA for the twelve months to 2026-09-30, the reported measure |
| Foreign exchange (gain) loss | -11.161 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Asset retirement obligation accretion | 22.167 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Inventory adjustments and write-downs | 6.099 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| (Gain) loss on sale of assets | 3.297 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| (Gain) loss on debt extinguishment | 1.983 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Transaction and integration costs | 39.370 | US$m | Issuer add-back as printed; classification transaction costs; its realisation status is not stated |
| Kensington royalty settlement | 0.001 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Obligor exchange | 2.776 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Wharf property damage proceeds | -10.000 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Wage and hour litigation settlement | -0.572 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Mexico arbitration matter | 0.270 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| Interest income | -18.981 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| La Preciosa contingent gain | -0.166 | US$m | Issuer add-back as printed; classification other stated; its realisation status is not stated |
| EBITDA (Adjusted), trailing twelve months | 1,825.599 | US$m | Closing: issuer Adjusted EBITDA for the same twelve months, the specified adjusted measure; add-backs the issuer prints as a dash for the period are omitted |

The bridge is the issuer's printed reconciliation for the twelve months to 2026-09-30, and its closing figure is the issuer's trailing Adjusted EBITDA.
Basis: EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23; calculation C22

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 11 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 7 |
| Fields present | 23 |
| Fields total | 27 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 8 |

### Reporting periods

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
| 10-K_2024-12-31_cde.htm.jsonl | Annual report, Form 10-K | FY2024 with FY2023 and FY2022 comparatives | USD | thousands | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP | Tier 1: audited | FY2024 statements and cross-check of comparatives | Pre-dates the 2025 and 2026 acquisitions; deferred tax assets sit inside Other in its balance sheet |
| 10-K_2025-12-31_cde.htm.jsonl | Annual report, Form 10-K | FY2025 with FY2024 and FY2023 comparatives | USD | thousands | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP | Tier 1: audited | FY2025 and FY2024 statements, debt and lease notes, EBITDA reconciliations, interest paid | Includes Las Chispas from its acquisition date; pre-dates New Gold and the new credit agreement |
| 10-Q_2026-03-31_cde.htm.jsonl | Quarterly report, Form 10-Q | Quarter ended 2026-03-31 | USD | thousands | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Restated FY2025 Adjusted EBITDA | Used for one comparative figure only |
| 10-Q_2026-06-30_cde.htm.jsonl | Quarterly report, Form 10-Q | Quarter and six months ended 2026-06-30 | USD | thousands | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Cross-check of debt at 2026-06-30 | Not used for a statement column |
| 10-Q_2026-09-30_cde.htm.jsonl | Quarterly report, Form 10-Q | Quarter and nine months ended 2026-09-30 with 2025 comparatives | USD | thousands | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Current period statements, debt note, liquidity, reconciliations | Purchase price allocation of the acquisition is preliminary |
| EX99.1_2026-03-31_cde_a1q26earningsreleaseex-991-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-03-31 | USD | millions in highlights, thousands in statements | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP with non-GAAP measures | Tier 2b: unaudited issuer release | Reviewed for context | Not used for a figure |
| EX99.1_2026-03-31_cde_a2q26inauguraldividendex-9-htm.htm.jsonl | Press release, Exhibit 99.1 | Not a periodic report | USD | Not applicable | Coeur Mining, Inc. | Not applicable | Tier 2b: unaudited issuer release | Dividend context | States per-share amounts only |
| EX99.1_2026-03-31_cde_ef20071153-ex99-1-htm.htm.jsonl | Press release, Exhibit 99.1 | Not a periodic report | USD | whole dollars | Coeur Mining, Inc. as offeror; New Gold Inc. notes as subject | Not applicable | Tier 2b: unaudited issuer release | Exact principal of the 2032 Senior Notes issued | Tender and acceptance amounts only |
| EX99.1_2026-06-30_cde_a2q26earningsreleaseex-991-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-06-30 | USD | millions in highlights, thousands in statements | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP with non-GAAP measures | Tier 2b: unaudited issuer release | Reviewed for context | Not used for a figure |
| EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-09-30 with four earlier quarters | USD | millions in highlights, thousands in statements | Coeur Mining, Inc. and subsidiaries, consolidated | US GAAP with non-GAAP measures | Tier 2b: unaudited issuer release | Five-quarter table, trailing twelve month reconciliation, Q3 2025 EBITDA, operating KPIs | Issuer-defined non-GAAP measures; the quarterly report controls on a conflict |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Coeur Mining, Inc. | Issuer, parent and borrower under the revolving credit facility | 12-31 | USD | thousands | Consolidated with its subsidiaries | US GAAP | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| Subsidiary guarantors of the 2029 Senior Notes and 2032 Senior Notes | Guarantor group, named in the supplemental guarantor note | 12-31 | USD | thousands | Summarized obligor group information only, not full statements | US GAAP | 2026-09-30 and 2025-12-31 balance sheets and 9M 2026 income |
| New Gold Inc. | Acquired subsidiary; guarantor of the 2029 and 2032 notes; issuer of the remaining New Gold 2032 Senior Notes | 12-31 | USD | thousands | In the consolidation from the acquisition date in the first quarter of 2026 | US GAAP | From the acquisition date to 2026-09-30 |
| Restricted and unrestricted subsidiaries | Restricted group under the indentures and the credit agreement | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: the filings refer to restricted subsidiaries without naming them | Not supplied: not stated | Not supplied: not stated |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restate statement amounts from thousands to millions | 10-K_2025-12-31_cde.htm.jsonl; 10-Q_2026-09-30_cde.htm.jsonl | Unit scale | USD 1,172,732 thousand | USD 1,172.732 million | The money tables use US$m; no value changes | FY2024, FY2025, 2026-09-30 |
| Total Liabilities derived from the current and non-current subtotals | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 | Calculation | Not printed | 1,178,495; 1,382,631; 4,809,763 thousand | The filing prints no total of liabilities | FY2024, FY2025, 9M 2026 |
| Total Debt derived as current plus non-current Debt lines | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 | Calculation | Debt lines | 590,058; 340,533; 701,652 thousand | Matches the issuer total debt in its net debt reconciliation | FY2024, FY2025, 9M 2026 |
| FY2024 balance sheet taken from the FY2025 annual report comparative column | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-K_2024-12-31_cde.htm.jsonl, page 117 | Presentation | Other 76,267 thousand | Deferred tax assets 3,632 and Other 72,635 thousand | Same total, later presentation | FY2024 |
| FY2025 Other non-current assets split using the quarterly report comparative | 10-Q_2026-09-30_cde.htm.jsonl, page 2; 10-K_2025-12-31_cde.htm.jsonl, page 129 | Presentation | Other 63,513 thousand | Long-term stockpile 42,076 and Other 21,437 thousand | Same total, later presentation | FY2025 |
| Closing cash in the cash flow includes restricted cash | 10-Q_2026-09-30_cde.htm.jsonl, pages 3 and 38 | Definition | Cash and cash equivalents 1,172,732 thousand | Cash, cash equivalents and restricted cash 1,177,006 thousand | Restricted cash equivalents of 4,274 thousand sit in other lines; net debt uses balance sheet cash only | 9M 2026 |
| Trailing twelve month figures built as full year plus current stub less prior-year stub | 10-K_2025-12-31_cde.htm.jsonl; 10-Q_2026-09-30_cde.htm.jsonl; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl | Derived period | FY2025, 9M 2026, 9M 2025 amounts | Trailing twelve months to 2026-09-30 | Matches the issuer's printed trailing figures except Adjusted EBITDA, which differs by USD 3 thousand | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | 1,054,006 | 2,070,126 | 1,395,279 | 2,925,400 | 554,567 | 983,616 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Costs applicable to sales (excludes amortization) | 606,192 | 898,437 | 682,456 | 1,348,229 | 248,736 | 468,473 | USD thousands | Reported; includes non-cash acquired inventory purchase price allocation in 2025 and 2026 | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Amortization | 124,974 | 251,099 | 177,444 | 616,972 | 72,930 | 261,162 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| General and administrative | 47,727 | 57,197 | 41,992 | 65,959 | 14,830 | 21,603 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Exploration | 59,658 | 86,592 | 68,079 | 102,833 | 25,141 | 43,039 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Pre-development, reclamation, and other | 51,273 | 69,788 | 45,957 | 51,254 | 15,843 | 14,870 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Total costs and expenses | 889,824 | 1,363,113 | 1,015,928 | 2,185,247 | 377,480 | 809,147 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Income from operations | 164,182 | 707,013 | 379,351 | 740,153 | 177,087 | 174,469 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Gain (loss) on debt extinguishment | 417 | -113 | -6 | -1,877 | -6 | -3 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Fair value adjustments, net | Not supplied: the filing prints a dash | -342 | -342 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; dash cells are missing values | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Interest expense, net of capitalized interest | -51,276 | -30,942 | -24,974 | -28,287 | -6,273 | -10,834 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Other, net | 13,027 | 6,922 | 1,001 | 28,137 | -865 | 10,688 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Memo: interest income included in Other, net | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | 18,981 | Not supplied: the filing prints a dash | 8,095 | USD thousands | Reported in the EBITDA reconciliation as a deduction of the same amount; a memo line, not added in the sum to Total other expense, net; dash cells are missing values | 10-Q_2026-09-30_cde.htm.jsonl, pages 65–66; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 |
| Total other expense, net | -37,832 | -24,475 | -24,321 | -2,027 | -7,144 | -149 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Income before income and mining taxes | 126,350 | 682,538 | 355,030 | 738,126 | 169,943 | 174,320 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Income and mining tax (expense) benefit | -67,450 | -96,666 | 15,873 | -260,130 | 96,881 | -64,938 | USD thousands | Reported; a benefit is positive | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Net income | 58,900 | 585,872 | 370,903 | 477,996 | 266,824 | 109,382 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 129–130; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 |
| Segment revenue: New Afton | Not supplied: not a segment in this period | Not supplied: not a segment in this period | Not supplied: not a segment in this period | 282,403 | Not supplied: not a segment in this period | 111,260 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Rainy River | Not supplied: not a segment in this period | Not supplied: not a segment in this period | Not supplied: not a segment in this period | 644,631 | Not supplied: not a segment in this period | 243,428 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Las Chispas | Not supplied: not a segment in this period | 421,431 | 286,803 | 542,092 | 126,134 | 161,568 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Palmarejo | 379,060 | 473,764 | 331,138 | 480,317 | 121,193 | 132,484 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Rochester | 215,812 | 458,042 | 290,058 | 466,587 | 112,455 | 144,405 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Kensington | 225,129 | 377,710 | 253,899 | 287,483 | 98,890 | 91,350 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Wharf | 234,005 | 339,179 | 233,381 | 221,887 | 95,895 | 99,121 | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Silvertip | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| Segment revenue: Other, corporate and eliminations | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported: segment note; the segment is listed as printed and sums with the others to Revenue | 10-K_2025-12-31_cde.htm.jsonl, pages 147–148; 10-Q_2026-09-30_cde.htm.jsonl, pages 12–15 |
| EBITDA (Reported) | 302,600 | 964,579 | 557,448 | 1,383,385 | 249,146 | 446,316 | USD thousands | Reported: issuer non-GAAP EBITDA, net income plus interest expense net of capitalized interest plus income tax provision plus amortization | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cde.htm.jsonl, pages 65–66; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 |
| EBITDA (Adjusted) | 339,152 | 1,025,772 | 601,287 | 1,401,117 | 265,612 | 447,965 | USD thousands | Reported: issuer Adjusted EBITDA, EBITDA plus the add-backs in the EBITDA bridge; it is not adjusted for the non-cash acquired inventory purchase price allocation | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cde.htm.jsonl, pages 65–66; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 58,900 | 585,872 | 370,903 | 477,996 | 266,824 | 109,382 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Amortization | 124,974 | 251,099 | 177,444 | 616,972 | 72,930 | 261,162 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Accretion | 18,208 | 20,978 | 14,620 | 17,090 | 4,988 | 6,163 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Deferred taxes | -8,734 | -161,015 | -175,297 | -27,426 | -145,740 | -17,525 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| (Gain) loss on debt extinguishment | -417 | 113 | 6 | 1,877 | 6 | 3 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Fair value adjustments, net | Not supplied: the filing prints a dash | 342 | 342 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; dash cells are missing values | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Stock-based compensation | 12,022 | 19,209 | 12,527 | 24,605 | 5,012 | 8,572 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Loss on the sale or disposition of assets | 4,250 | Not supplied: the filing prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the quarterly statements carry no such line | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Write-downs | 3,235 | Not supplied: the filing prints a dash | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported; the quarterly statements carry no such line | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Deferred revenue recognition | -55,562 | -42,824 | -42,661 | -421 | -153 | -123 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Acquired inventory purchase price allocation | Not supplied: the statement prints no such line for this period | 93,477 | 90,163 | 265,835 | 33,443 | 40,397 | USD thousands | Reported; the FY2024 column carries no such line | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Other operating adjustments | 5,483 | 4,306 | 5,944 | -9,896 | 1,392 | 543 | USD thousands | Reported: the issuer line Other within operating activities | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Receivables | -504 | -6,688 | -7,953 | -3,982 | -7,132 | -17,139 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Prepaid expenses and other current assets | 2,777 | 72,634 | 77,000 | -38,237 | -7,489 | -14,866 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Inventory and ore on leach pads | -69,640 | -51,798 | -27,484 | -70,467 | -5,011 | -19,201 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Accounts payable and accrued liabilities | 79,242 | 101,174 | 16,738 | -14,259 | 18,636 | 28,251 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 174,234 | 886,879 | 512,292 | 1,239,687 | 237,706 | 385,619 | USD thousands | Reported: issuer line Cash provided by operating activities | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Capital expenditures | -183,188 | -221,162 | -159,843 | -345,196 | -49,034 | -145,408 | USD thousands | Reported; an outflow is negative | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Acquisitions, net | -10,000 | 93,635 | 93,635 | 121,559 | -10,000 | -6,700 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Proceeds from the sale of assets | 37 | 13 | 4 | 2,625 | -76 | 692 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Purchase of investments | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the filing prints a dash | -211 | Not supplied: the filing prints a dash | -166 | USD thousands | Reported; dash cells are missing values | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Other investing activities | -362 | -328 | -255 | -198 | -80 | -65 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -193,513 | -127,842 | -66,459 | -221,421 | -59,190 | -151,647 | USD thousands | Reported: issuer line Cash used in investing activities | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Issuance of common stock | 22,823 | 10,005 | 9,769 | 1,026 | 320 | 276 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Issuance of notes and bank borrowings, net of issuance costs | 391,500 | 166,500 | 166,500 | Not supplied: the filing prints a dash | 20,000 | Not supplied: the filing prints a dash | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Payments on debt, finance leases, and associated costs | -398,348 | -417,886 | -394,451 | -57,062 | -37,486 | -1,842 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Performance share cash settlement | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the filing prints a dash | -41,763 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; the annual statements carry no such line | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Dividend payments | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the filing prints a dash | -20,645 | Not supplied: the filing prints a dash | Not supplied: the filing prints a dash | USD thousands | Reported; the first dividend was paid in 2026 | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Share repurchases | Not supplied: the statement prints no such line for this period | -9,625 | -7,338 | -221,232 | -5,334 | -110,810 | USD thousands | Reported; the FY2024 column carries no such line | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Other financing activities | -2,085 | -9,625 | -9,293 | -55,313 | -1,388 | -639 | USD thousands | Reported: the 10-K line Other financing activities, labelled Stock-based compensation tax withholdings and other financing activities in the quarterly reports | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | 13,890 | -260,631 | -234,813 | -394,989 | -23,888 | -113,015 | USD thousands | Reported: issuer line Cash provided by (used in) financing activities | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -1,115 | 425 | 282 | -1,976 | 78 | 167 | USD thousands | Reported: effect of exchange rate changes on cash and cash equivalents | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Net Cash Change | -6,504 | 498,831 | 211,302 | 621,301 | 154,706 | 121,124 | USD thousands | Reported: increase (decrease) in cash, cash equivalents and restricted cash | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Opening Cash | 63,378 | 56,874 | 56,874 | 555,705 | 113,470 | 1,055,882 | USD thousands | Reported: cash, cash equivalents and restricted cash at beginning of period | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Closing Cash | 56,874 | 555,705 | 268,176 | 1,177,006 | 268,176 | 1,177,006 | USD thousands | Reported: cash, cash equivalents and restricted cash at end of period; includes restricted cash, so it differs from balance sheet cash and equivalents | 10-K_2025-12-31_cde.htm.jsonl, pages 130–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 49,806 | 31,763 | Not supplied: the quarterly report prints no cash interest paid | Not supplied: the quarterly report prints no cash interest paid | Not supplied: the quarterly report prints no cash interest paid | Not supplied: the quarterly report prints no cash interest paid | USD thousands | Reported: interest paid in the supplemental cash flow information of the annual reports; the quarterly reports print none | 10-K_2025-12-31_cde.htm.jsonl, page 175; 10-K_2024-12-31_cde.htm.jsonl, page 162 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 55,087 | 553,597 | 1,172,732 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Receivables (current) | 29,930 | 69,160 | 83,438 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Inventory | 78,617 | 163,330 | 378,881 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Ore on leach pads (current) | 92,724 | 157,461 | 231,636 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Prepaid expenses and other | 16,741 | 29,129 | 73,327 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total current assets | 273,099 | 972,677 | 1,940,014 | USD thousands | Reported: unlabelled subtotal of current assets | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Property, plant and equipment and mining properties, net | 1,817,616 | 2,744,884 | 12,061,831 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Goodwill | Not supplied: the filing prints a dash | 625,812 | 625,812 | USD thousands | Reported; a dash is a missing value | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Ore on leach pads (non-current) | 106,670 | 119,446 | 171,675 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Restricted assets | 8,512 | 9,114 | 9,179 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Receivables (non-current) | 19,583 | 19,683 | 23,358 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Deferred tax assets | 3,632 | 140,553 | 151,402 | USD thousands | Reported: the FY2024 column is the FY2025 annual report comparative, which shows this line apart from Other | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Long-term stockpile | Not supplied: included in Other non-current assets, not shown separately | 42,076 | 222,744 | USD thousands | Reported: FY2025 and 9M 2026 columns from the quarterly report, which splits Other non-current assets; the FY2025 annual report prints the sum in Other | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Other non-current assets | 72,635 | 21,437 | 20,034 | USD thousands | Reported: FY2025 column from the quarterly report split; the FY2025 annual report prints 63,513 including the stockpile; FY2024 column includes the stockpile | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total Assets | 2,301,747 | 4,695,682 | 15,226,049 | USD thousands | Reported: issuer line TOTAL ASSETS | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Accounts payable | 125,877 | 148,872 | 270,821 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Accrued liabilities and other | 156,609 | 212,213 | 220,784 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Debt (current) | 31,380 | 16,996 | 468 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Reclamation (current) | 16,954 | 15,063 | 19,256 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total current liabilities | 330,820 | 393,144 | 511,329 | USD thousands | Reported: unlabelled subtotal of current liabilities | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Debt (non-current) | 558,678 | 323,537 | 701,184 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Reclamation (non-current) | 243,538 | 262,448 | 408,040 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Deferred tax liabilities | 7,258 | 322,983 | 3,100,085 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Other long-term liabilities | 38,201 | 80,519 | 89,125 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total non-current liabilities | 847,675 | 989,487 | 4,298,434 | USD thousands | Reported: unlabelled subtotal of non-current liabilities | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total Liabilities | 1,178,495 | 1,382,631 | 4,809,763 | USD thousands | Calculated: current liabilities plus non-current liabilities; the filing prints no total | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Common stock | 3,992 | 6,421 | 10,225 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Additional paid-in capital | 4,181,521 | 5,783,019 | 12,425,099 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Accumulated deficit | -3,062,261 | -2,476,389 | -2,019,038 | USD thousands | Reported | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total Equity | 1,123,252 | 3,313,051 | 10,416,286 | USD thousands | Reported: unlabelled subtotal of stockholders equity; no temporary equity is printed | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Total Debt | 590,058 | 340,533 | 701,652 | USD thousands | Calculated: current plus non-current Debt lines at carrying value net of issuance costs; includes finance lease obligations carried in those lines; operating lease liabilities sit in accrued liabilities and other long-term liabilities and are not added | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| Cash & Equivalents | 55,087 | 553,597 | 1,172,732 | USD thousands | Reported: cash and cash equivalents; excludes restricted cash | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM | USD 2,070.126m | USD 2,925.400m | USD 1,395.279m | USD 3,600.247m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22 | Full year FY2025, current stub 9M 2026, prior-year stub 9M 2025; matches the trailing figure the issuer prints in its Q3 2026 release |
| EBITDA (Reported) | LTM | USD 964.579m | USD 1,383.385m | USD 557.448m | USD 1,790.516m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cde.htm.jsonl, pages 65–66; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22 | Matches the trailing EBITDA the issuer prints; includes the acquired Canadian operations from the acquisition date only |
| EBITDA (Adjusted) | LTM | USD 1,025.772m | USD 1,401.117m | USD 601.287m | USD 1,825.602m | Conflicted | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cde.htm.jsonl, pages 65–66; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22; 10-Q_2026-03-31_cde.htm.jsonl, page 65 | The issuer prints trailing Adjusted EBITDA of USD 1,825.599m, USD 0.003m below this sum, because the Q1 2026 quarterly report restates FY2025 Adjusted EBITDA as USD 1,025.769m against USD 1,025.772m in the annual report; the printed figure is used in the leverage tables |
| Net income | LTM | USD 585.872m | USD 477.996m | USD 370.903m | USD 692.965m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, page 130; 10-Q_2026-09-30_cde.htm.jsonl, page 3; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, page 22 | Matches the trailing net income the issuer prints |
| Net Cash from Operating Activities | LTM | USD 886.879m | USD 1,239.687m | USD 512.292m | USD 1,614.274m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, page 130; 10-Q_2026-09-30_cde.htm.jsonl, page 3 | Trailing cash from operations; no trailing figure is printed |
| Capital expenditures | LTM | USD 221.162m | USD 345.196m | USD 159.843m | USD 406.515m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, page 130; 10-Q_2026-09-30_cde.htm.jsonl, page 3 | Positive amount; the cash flow statement prints outflows as negative |
| Free cash flow | LTM | USD 665.717m | USD 894.491m | USD 352.449m | USD 1,207.759m | Calculated | 10-K_2025-12-31_cde.htm.jsonl, page 117; 10-Q_2026-09-30_cde.htm.jsonl, page 66 | Issuer free cash flow, cash from operations less capital expenditures, before acquisitions, buybacks and dividends |
| Cash Interest Paid | LTM | USD 31.763m | Not supplied: the quarterly reports print no cash interest paid | Not supplied: the quarterly reports print no cash interest paid | Not calculable: an input is missing | Not Calculable | 10-K_2025-12-31_cde.htm.jsonl, page 175; 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 and 38 | Trailing cash interest paid cannot be built without the interim figures |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 590.058 | Net debt data Gross debt | 302.600 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2024 / 2024-12-31 | USD | US$m | 1.95 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 534.971 | Net debt data Net debt | 302.600 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2024 / 2024-12-31 | USD | US$m | 1.77 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 302.600 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | 49.806 | 10-K_2025-12-31_cde.htm.jsonl, page 175 (interest paid) | FY2024 / 2024-12-31 | USD | US$m | 6.08 | Calculated | Tier 1 | Cash interest paid is the supplemental cash flow figure, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 590.058 | Net debt data Gross debt | 339.152 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2024 / 2024-12-31 | USD | US$m | 1.74 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 534.971 | Net debt data Net debt | 339.152 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2024 / 2024-12-31 | USD | US$m | 1.58 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 339.152 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | 49.806 | 10-K_2025-12-31_cde.htm.jsonl, page 175 (interest paid) | FY2024 / 2024-12-31 | USD | US$m | 6.81 | Calculated | Tier 1 | Cash interest paid is the supplemental cash flow figure, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 340.533 | Net debt data Gross debt | 964.579 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2025 / 2025-12-31 | USD | US$m | 0.35 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -213.064 | Net debt data Net debt | 964.579 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2025 / 2025-12-31 | USD | US$m | -0.22 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 964.579 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | 31.763 | 10-K_2025-12-31_cde.htm.jsonl, page 175 (interest paid) | FY2025 / 2025-12-31 | USD | US$m | 30.37 | Calculated | Tier 1 | Cash interest paid is the supplemental cash flow figure, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 340.533 | Net debt data Gross debt | 1,025.772 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2025 / 2025-12-31 | USD | US$m | 0.33 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -213.064 | Net debt data Net debt | 1,025.772 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | FY2025 / 2025-12-31 | USD | US$m | -0.21 | Calculated | Tier 1 | Debt at balance-sheet carrying value, not principal |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,025.772 | 10-K_2025-12-31_cde.htm.jsonl, pages 116–117 (EBITDA row of the EBITDA bridge) | 31.763 | 10-K_2025-12-31_cde.htm.jsonl, page 175 (interest paid) | FY2025 / 2025-12-31 | USD | US$m | 32.29 | Calculated | Tier 1 | Cash interest paid is the supplemental cash flow figure, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 701.652 | Net debt data Gross debt | 1,790.516 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | 2026-09-30 | USD | US$m | 0.39 | Calculated | Tier 2b | EBITDA is the issuer's trailing twelve months to 2026-09-30, which includes the acquired operations only from the acquisition date |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | -471.080 | Net debt data Net debt | 1,790.516 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | 2026-09-30 | USD | US$m | -0.26 | Calculated | Tier 2b | EBITDA is the issuer's trailing twelve months to 2026-09-30, which includes the acquired operations only from the acquisition date |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,790.516 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | Not supplied: the quarterly reports print no cash interest paid for any 2026 or 2025 interim period | 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 and 38 (no interest paid disclosed) | 2026-09-30 | USD | US$m | Not calculable: the trailing cash interest paid is not available | Not Calculable | Tier 2b | Trailing cash interest needs the interim interest paid, which is not printed |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 701.652 | Net debt data Gross debt | 1,825.599 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | 2026-09-30 | USD | US$m | 0.38 | Calculated | Tier 2b | EBITDA is the issuer's trailing twelve months to 2026-09-30, which includes the acquired operations only from the acquisition date; the issuer prints trailing Adjusted EBITDA of USD 1,825.599 million while the sum of full year plus stub less prior stub is USD 1,825.602 million |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | -471.080 | Net debt data Net debt | 1,825.599 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | 2026-09-30 | USD | US$m | -0.26 | Calculated | Tier 2b | EBITDA is the issuer's trailing twelve months to 2026-09-30, which includes the acquired operations only from the acquisition date; the issuer prints trailing Adjusted EBITDA of USD 1,825.599 million while the sum of full year plus stub less prior stub is USD 1,825.602 million |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,825.599 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 (LTM column) | Not supplied: the quarterly reports print no cash interest paid for any 2026 or 2025 interim period | 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 and 38 (no interest paid disclosed) | 2026-09-30 | USD | US$m | Not calculable: the trailing cash interest paid is not available | Not Calculable | Tier 2b | Trailing cash interest needs the interim interest paid, which is not printed |
| EBITDA margin (%) | EBITDA (Reported) / Revenue x 100 | 302.600 | Statement EBITDA (Reported) | 1,054.006 | Statement Revenue | FY2024 / 2024-12-31 | USD | US$m | 28.71 | Calculated | Tier 1 | Calculated from the statement figures at the printed precision |
| EBITDA margin (%) | EBITDA (Reported) / Revenue x 100 | 964.579 | Statement EBITDA (Reported) | 2,070.126 | Statement Revenue | FY2025 / 2025-12-31 | USD | US$m | 46.60 | Calculated | Tier 1 | Calculated from the statement figures at the printed precision |
| EBITDA margin (%) | EBITDA (Reported) / Revenue x 100 | 1,790.516 | Statement EBITDA (Reported) | 3,600.247 | Statement Revenue | 2026-09-30 | USD | US$m | 49.73 | Calculated | Tier 2b | Trailing figures at 2026-09-30 include the acquired operations from the acquisition date only |
| Free cash flow / EBITDA (reported) | Free cash flow / EBITDA (Reported) | -8.954 | Calculated: cash from operations less capital expenditures | 302.600 | Statement EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | -0.03 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital expenditures, before acquisitions, buybacks and dividends |
| Free cash flow / EBITDA (reported) | Free cash flow / EBITDA (Reported) | 665.717 | Calculated: cash from operations less capital expenditures | 964.579 | Statement EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 0.69 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital expenditures, before acquisitions, buybacks and dividends |
| Free cash flow / EBITDA (reported) | Free cash flow / EBITDA (Reported) | 1,207.759 | Calculated: cash from operations less capital expenditures | 1,790.516 | Statement EBITDA (Reported) | 2026-09-30 | USD | US$m | 0.67 | Calculated | Tier 2b | Free cash flow is operating cash flow less capital expenditures, before acquisitions, buybacks and dividends |
| Capital expenditures / revenue (%) | Capital expenditures / Revenue x 100 | 183.188 | Statement Capital expenditures (sign removed) | 1,054.006 | Statement Revenue | FY2024 / 2024-12-31 | USD | US$m | 17.38 | Calculated | Tier 1 | Calculated from the statement figures at the printed precision |
| Capital expenditures / revenue (%) | Capital expenditures / Revenue x 100 | 221.162 | Statement Capital expenditures (sign removed) | 2,070.126 | Statement Revenue | FY2025 / 2025-12-31 | USD | US$m | 10.68 | Calculated | Tier 1 | Calculated from the statement figures at the printed precision |
| Capital expenditures / revenue (%) | Capital expenditures / Revenue x 100 | 406.515 | Statement Capital expenditures (sign removed) | 3,600.247 | Statement Revenue | 2026-09-30 | USD | US$m | 11.29 | Calculated | Tier 2b | Calculated from the statement figures at the printed precision |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total debt | 230.787 | Chart data: liquidity Cash plus Undrawn committed facilities | 590.058 | Net debt data Gross debt | FY2024 / 2024-12-31 | USD | US$m | 0.39 | Calculated | Tier 1 | Undrawn facilities are revolving credit facility availability after letters of credit; the facility changed in 2026 |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total debt | 953.097 | Chart data: liquidity Cash plus Undrawn committed facilities | 340.533 | Net debt data Gross debt | FY2025 / 2025-12-31 | USD | US$m | 2.80 | Calculated | Tier 1 | Undrawn facilities are revolving credit facility availability after letters of credit; the facility changed in 2026 |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total debt | 2,145.032 | Chart data: liquidity Cash plus Undrawn committed facilities | 701.652 | Net debt data Gross debt | 2026-09-30 | USD | US$m | 3.06 | Calculated | Tier 2b | Undrawn facilities are revolving credit facility availability after letters of credit; the facility changed in 2026 |
| Revenue growth (%) | FY2025 revenue / FY2024 revenue - 1 | 2,070.126 | Statement Revenue FY2025 | 1,054.006 | Statement Revenue FY2024 | FY2025 / 2025-12-31 | USD | US$m | 96.41 | Calculated | Tier 1 | FY2025 includes the acquired Las Chispas operations from the acquisition date only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Volume, period flow | Gold ounces sold | 340,816 | 422,032 | 310,759 | 440,608 | 164,311 | Up | Gold volume is higher in each later period shown, with the acquired mines contributing; sources 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Volume, period flow | Silver ounces sold | 11,418,821 | 18,155,235 | 13,550,625 | 13,200,021 | 4,310,202 | Mixed | Silver sold in 9M 2026 was below 9M 2025 despite two more mines; sources 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Volume, period flow | Copper pounds sold | Not supplied: the annual report prints no copper line | Not supplied: the annual report prints no copper line | Not supplied: the filing prints a dash | 23,940,863 | 9,268,535 | Not applicable | Copper starts with the New Gold operations; source 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Volume, period flow | Gold ounces produced | 341,582 | 419,046 | 306,617 | 421,347 | 161,400 | Up | Production is reported on the same basis as sales; sources 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Price, rate | Average realized price per gold ounce (USD) | 2,156 | 3,184 | 2,957 | 4,140 | 3,979 | Up | Realized gold price is the main earnings driver; sources 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Price, rate | Average realized price per silver ounce (USD) | 27.95 | 40.01 | 35.15 | 72.12 | 62.22 | Up | Silver price rose faster than gold; sources 10-K_2025-12-31_cde.htm.jsonl, page 85; 10-Q_2026-09-30_cde.htm.jsonl, page 40 |
| Cash flow, period flow | Free cash flow, issuer-reported (USD thousands) | -8,954 | 665,717 | 352,449 | 894,491 | 240,211 | Up | Cash from operations less capital expenditures; sources 10-K_2025-12-31_cde.htm.jsonl, page 117; 10-Q_2026-09-30_cde.htm.jsonl, page 66 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt: carrying value against principal | Balance-sheet carrying value of every debt line, net of issuance costs, premiums and discounts | Total debt in the net debt reconciliation equals the carrying value of 701,652 thousand at 2026-09-30 | 10-Q_2026-09-30_cde.htm.jsonl, pages 17 and 67; principal of the 2029 notes is not printed and the New Gold notes are printed as approximately 12.6 million | 2026-09-30 | The carrying value of 396,127 thousand for the 2032 notes exceeds the 385,774 thousand issued; the total principal cannot be stated | Financial foundation; Liquidity; Refinancing & LME | Carrying value is used; the principal gap is logged |
| EBITDA | Reported EBITDA is the primary measure and Adjusted EBITDA is shown beside it | EBITDA is non-GAAP, net income plus interest, tax and amortization; Adjusted EBITDA adds back the items in the bridge and is the basis for indenture and revolving facility tests | 10-Q_2026-09-30_cde.htm.jsonl, page 65 | All periods | Adjusted EBITDA exceeds EBITDA by 35,083 thousand in the twelve months to 2026-09-30 | Financial foundation; Fundamental credit | Reported EBITDA is the denominator; Adjusted rows sit beside it |
| Adjusted EBITDA FY2025 | One stated figure per period | 1,025,772 thousand in the annual report and 1,025,769 thousand in the Q1 2026 quarterly report | 10-K_2025-12-31_cde.htm.jsonl, page 117; 10-Q_2026-03-31_cde.htm.jsonl, page 65 | FY2025 and trailing twelve months | USD 3 thousand | Financial foundation | The printed trailing figure of 1,825,599 thousand is used; the constructed sum is 1,825,602 thousand |
| Net leverage ratio | Net debt over reported EBITDA | Net debt over trailing Adjusted EBITDA, printed to one decimal as (0.3) | 10-Q_2026-09-30_cde.htm.jsonl, page 67 | 2026-09-30 | -0.26x on reported EBITDA against -0.26x on Adjusted EBITDA; same to two decimals | Financial foundation; Fundamental credit | Both are shown in the calculation register |
| Cash for net debt | Cash and equivalents | Net debt deducts cash and cash equivalents; the cash flow statement ends on cash, cash equivalents and restricted cash | 10-Q_2026-09-30_cde.htm.jsonl, pages 3 and 38 | 2026-09-30 | Restricted cash of 4,274 thousand | Financial foundation; Liquidity | Balance sheet cash excluding restricted cash is used |
| Interest | Cash interest paid for cover | Interest expense is net of capitalized interest; interest paid is printed only in the annual reports | 10-K_2025-12-31_cde.htm.jsonl, page 175; 10-Q_2026-09-30_cde.htm.jsonl, page 3 | FY2025: expense 30,942 against paid 31,763 thousand; interim periods | Interim cover is not calculable | Financial foundation; Fundamental credit | Interest paid is used where printed |
| Balance sheet classification | One presentation per line across periods | Deferred tax assets sit inside Other in the FY2024 annual report; Other is split into long-term stockpile in the later quarterly report | 10-K_2024-12-31_cde.htm.jsonl, page 117; 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2 | FY2024, FY2025 | None for totals | Financial foundation | Latest presentation used and logged in the normalization register |
| Claims outside debt | Leases and other obligations carried outside debt lines are not added to debt | Operating lease liabilities of 18,429 thousand at 2025-12-31 sit in accrued and other liabilities; only the current part, 7,664 thousand, is printed at 2026-09-30; reclamation 427,296 thousand and deferred tax liabilities 3,100,085 thousand are separate lines; stream agreements and the Mexico value-added tax matter are in the commitments note | 10-K_2025-12-31_cde.htm.jsonl, page 152; 10-Q_2026-09-30_cde.htm.jsonl, pages 2, 34–38 | 2025-12-31, 2026-09-30 | Reclamation of 427,296 thousand compares with debt of 701,652 thousand at 2026-09-30 | Financial foundation; Fundamental credit; Recovery & fulcrum | Not added to total debt; carried as separate claims |
| Acquired inventory purchase price allocation | Source figure and normalised figure shown separately | Costs applicable to sales include non-cash purchase price allocation of 265,835 thousand in 9M 2026 and 90,163 thousand in 9M 2025; Adjusted EBITDA does not add it back | 10-Q_2026-09-30_cde.htm.jsonl, pages 3 and 41 | 9M 2025, 9M 2026 | Lowers reported and Adjusted EBITDA by those amounts | Financial foundation; Earnings quality | No normalisation applied; the amounts are shown in the cash flow table |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and net debt at 2024-12-31 and 2025-12-31 | Ready | None beyond the principal gap | None |
| Leverage and net debt at 2026-09-30 | Ready with Limitations | Trailing EBITDA includes the acquired operations from the acquisition date only and no pro forma EBITDA is stated | Read with the pro forma note for revenue and net income |
| Interest cover at 2026-09-30 | Not Ready | Cash interest paid is not printed for any 2026 or 2025 interim period | Obtain interim interest paid from the issuer |
| Liquidity and revolving facility availability | Ready | Facility replaced in 2026; earlier rows describe the previous facility | None |
| Maturity ladder and debt stack | Ready with Limitations | Principal of the 2029 notes not printed; security and rank of the 2029 notes and finance leases not stated; New Gold notes principal approximate | Obtain the trustee principal statement or the indenture |
| Covenant headroom | Not Ready | Covenant levels and definitions are not printed | Obtain the credit agreement |
| Cash flow, EBITDA bridge and segment revenue | Ready | Dash cells are missing values | None |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving credit facility | Senior secured revolving credit facility | 0 | Not applicable | 0 | 1,000,000 | Secured by a pledge of the shares of certain domestic and Canadian subsidiaries | Senior secured | USD | 0 | Not applicable | Base rate plus 0.45% to 1.50%; Term SOFR or Daily Simple SOFR plus 1.45% to 2.50% | floating | Term SOFR, Daily Simple SOFR or base rate | 145 to 250 over SOFR; 45 to 150 over base rate | Not supplied: no floor is stated | 2031-03 | Not applicable | 10-Q_2026-09-30_cde.htm.jsonl, pages 20–21; no draws, USD 27.7 million letters of credit and USD 972.3 million available |
| 2029 Senior Notes | Senior notes | 291,342 | Not supplied: the outstanding principal is not printed | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 291,342 | Not applicable | 5.125% | fixed | Not applicable | Not applicable | Not applicable | 2029-02-15 | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_cde.htm.jsonl, pages 17–18; 10-K_2025-12-31_cde.htm.jsonl, page 153 |
| 2032 Senior Notes | Senior notes | 396,127 | 385,774 | Not applicable | Not applicable | Unsecured | Senior unsecured, effectively subordinated to secured debt | USD | 396,127 | Not applicable | 6.875% | fixed | Not applicable | Not applicable | Not applicable | 2032-04-01 | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_cde.htm.jsonl, pages 19–20; EX99.1_2026-03-31_cde_ef20071153-ex99-1-htm.htm.jsonl, page 1; principal is the amount issued, with no later retirement stated |
| New Gold 2032 Senior Notes | Senior unsecured notes of New Gold Inc. | 13,690 | 12,600 | Not applicable | Not applicable | Unsecured | Senior unsecured; Coeur Mining, Inc. is not an obligor or guarantor | USD | 13,690 | Not applicable | 6.875% | fixed | Not applicable | Not applicable | Not applicable | Not supplied: only the year 2032 is stated | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_cde.htm.jsonl, pages 18–19; principal is printed as approximately USD 12.6 million |
| Finance lease obligations | Finance leases | 493 | Not supplied: principal is not printed | Not applicable | Not applicable | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 493 | Not applicable | Not supplied: the rate at 2026-09-30 is not printed | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Not supplied: only the current portion of 468 thousand is stated as due within twelve months | Not supplied: no amortisation schedule is stated | 10-Q_2026-09-30_cde.htm.jsonl, pages 17 and 21 |

## Calculations

Each row lists its inputs and works the arithmetic; amounts are as printed, in USD thousands unless the row says millions.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Total debt at 2024-12-31 | Debt current 31,380 + debt non-current 558,678 (USD thousands) | 590,058 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C2 | Total debt at 2025-12-31 | Debt current 16,996 + debt non-current 323,537 | 340,533 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C3 | Total debt at 2026-09-30 | Debt current 468 + debt non-current 701,184 | 701,652 | 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| C4 | Net debt at 2024-12-31 | Total debt 590,058 − cash and cash equivalents 55,087 | 534,971 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C5 | Net debt at 2025-12-31 | Total debt 340,533 − cash and cash equivalents 553,597 | -213,064 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C6 | Net debt at 2026-09-30 | Total debt 701,652 − cash and cash equivalents 1,172,732 | -471,080 | 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| C7 | Total liabilities at 2024-12-31 | Current liabilities 330,820 + non-current liabilities 847,675 | 1,178,495 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C8 | Total liabilities at 2025-12-31 | Current liabilities 393,144 + non-current liabilities 989,487 | 1,382,631 | 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C9 | Total liabilities at 2026-09-30 | Current liabilities 511,329 + non-current liabilities 4,298,434 | 4,809,763 | 10-Q_2026-09-30_cde.htm.jsonl, page 2 |
| C10 | Trailing revenue | FY2025 2,070,126 + 9M 2026 2,925,400 − 9M 2025 1,395,279 | 3,600,247 | T4.8 |
| C11 | Trailing EBITDA (Reported) | FY2025 964,579 + 9M 2026 1,383,385 − 9M 2025 557,448 | 1,790,516 | T4.8 |
| C12 | Trailing Adjusted EBITDA, constructed | FY2025 1,025,772 + 9M 2026 1,401,117 − 9M 2025 601,287 | 1,825,602 | T4.8 |
| C13 | Net debt over trailing reported EBITDA at 2026-09-30 | Net debt -471,080 ÷ trailing EBITDA 1,790,516 | -0.26x | Calculation register |
| C14 | Pro forma net debt for the insurance settlement (USD millions) | Net debt -471.080 + amount -70.000 | -541.080 | 10-Q_2026-09-30_cde.htm.jsonl, page 38 |
| C15 | Cumulative leverage in the debt stack (USD millions) | Revolving facility 0.000; plus 2032 Senior Notes 396.127 = 396.127; plus New Gold notes 13.690 = 409.817; each over 1,790.516 | 0.00; 0.22; 0.23 | 10-Q_2026-09-30_cde.htm.jsonl, page 17 |
| C16 | Liquidity at 2026-09-30 (USD millions) | Cash 1,172.732 + undrawn facility 972.300 | 2,145.032 | 10-Q_2026-09-30_cde.htm.jsonl, pages 2 and 21 |
| C17 | Revolving facility availability (USD millions) | Commitment 1,000.0 − letters of credit 27.7 − draws 0.0; previous facility 400.0 − 0.5 − 0.0 at 2025-12-31 and 400.0 − 195.0 − 29.3 at 2024-12-31 | 972.3; 399.5; 175.7 | 10-Q_2026-09-30_cde.htm.jsonl, page 21; 10-K_2025-12-31_cde.htm.jsonl, page 154; 10-K_2024-12-31_cde.htm.jsonl, page 143 |
| C18 | Reclamation obligations | 2026-09-30: 19,256 + 408,040; 2025-12-31: 15,063 + 262,448 | 427,296; 277,511 | 10-Q_2026-09-30_cde.htm.jsonl, page 2; 10-K_2025-12-31_cde.htm.jsonl, page 129 |
| C19 | Free cash flow | 9M 2026: 1,239,687 − 345,196; FY2025: 886,879 − 221,162; FY2024: 174,234 − 183,188; 9M 2025: 512,292 − 159,843; Q3 2026: 385,619 − 145,408 | 894,491; 665,717; -8,954; 352,449; 240,211 | 10-Q_2026-09-30_cde.htm.jsonl, page 3; 10-K_2025-12-31_cde.htm.jsonl, page 130 |
| C20 | Share repurchases plus dividends in 9M 2026 | 221,232 + 20,645 | 241,877 | 10-Q_2026-09-30_cde.htm.jsonl, page 4 |
| C21 | Trailing free cash flow | FY2025 665,717 + 9M 2026 894,491 − 9M 2025 352,449 | 1,207,759 | T4.8 |
| C22 | Adjusted EBITDA less EBITDA, trailing twelve months | Adjusted 1,825,599 − reported 1,790,516, equal to the sum of the printed add-backs | 35,083 | EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23 |

## Gaps

- Cash interest paid is not printed for Q3 2026, 9M 2026, Q3 2025 or 9M 2025, so cash interest for the twelve months to 2026-09-30 cannot be built and interest cover at 2026-09-30 is not calculable. This restricts the latest-period coverage ratio and its chart. Severity is medium; the interim cash flow supplemental information or the issuer's confirmation would close it.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 3–4 and 38
- The outstanding principal of the 2029 notes is not printed: USD 375.0 million was issued, and exchanges of USD 76.0 million and USD 5.867 million are stated in earlier annual reports, but the balance is not stated exactly. The contractual principal, the reconciling items to carrying value and the 2029 maturity amount are therefore not stated. Severity is medium; the trustee statement or the indenture would close it.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 17–18; 10-K_2025-12-31_cde.htm.jsonl, page 153; 10-K_2024-12-31_cde.htm.jsonl, page 74; 10-K_2024-12-31_cde.htm.jsonl, page 78
- The New Gold 2032 notes are printed as approximately USD 12.6 million, so the 2032 maturity amount is approximate. Severity is low.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, page 19
- No source states the security or ranking of the 2029 notes or of the finance lease obligations, so both are left out of the debt stack and out of secured and senior subtotals. Severity is medium for any structural-priority reading; the indenture or the leases would close it.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 17–19; 10-K_2025-12-31_cde.htm.jsonl, page 153
- The financial covenants of the new credit agreement are named, a consolidated net leverage ratio and a net debt to capital ratio, but no level, definition or compliance statement is printed, so no covenant headroom is stated. This restricts Covenant capacity and Legal & covenants, not the figures of this module. Severity is low here; the credit agreement would close it.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, page 21
- The trailing twelve months to 2026-09-30 include the acquired Canadian operations only from the acquisition date, and the issuer's pro forma note covers revenue and net income only, so no pro forma EBITDA is stated and the leverage ratio at 2026-09-30 is on a part-year earnings base. Severity is medium; a pro forma EBITDA from the issuer would close it.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 10–12
- Trailing Adjusted EBITDA is printed as USD 1,825,599 thousand and constructs to USD 1,825,602 thousand, because the Q1 2026 quarterly report restates FY2025 Adjusted EBITDA. The difference is USD 3 thousand and the printed figure is used. Severity is low.
Basis: 10-Q_2026-03-31_cde.htm.jsonl, page 65; 10-K_2025-12-31_cde.htm.jsonl, page 117; EX99.1_2026-09-30_cde_a3q26earningsreleaseex-991-htm.htm.jsonl, pages 22–23
- Cells the filings print as a dash are missing values and are marked not supplied: fair value adjustments in several periods, the Silvertip and Other segment revenue lines, goodwill at FY2024, the issuance of notes in 9M 2026 and Q3 2026, and the dividend, performance share settlement and investment purchase lines in periods with no such activity. The sale of investments and proceeds from notes receivable lines, which print dashes for FY2024 and FY2025, are not carried. A line that a statement does not print for a period, such as the loss on disposal of assets in the quarterly statements or share repurchases in FY2024, is likewise marked not supplied. Severity is low.
Basis: 10-K_2025-12-31_cde.htm.jsonl, pages 129–131; 10-Q_2026-09-30_cde.htm.jsonl, pages 2–4
- The long-term stockpile is not shown apart from Other non-current assets at 2024-12-31, and deferred tax assets are shown apart only in the later annual report, so line-level comparison of those lines across periods is limited. Totals are unaffected. Severity is low.
Basis: 10-K_2024-12-31_cde.htm.jsonl, page 117; 10-K_2025-12-31_cde.htm.jsonl, page 129; 10-Q_2026-09-30_cde.htm.jsonl, page 2
- Only the current portion of operating lease liabilities, USD 7,664 thousand, is printed at 2026-09-30, so the non-current portion is not established; the annual report prints USD 18,429 thousand in total at 2025-12-31. Severity is low.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, page 38; 10-K_2025-12-31_cde.htm.jsonl, page 152
- Per-share amounts, other comprehensive income lines and the segment costs and income from operations printed in the segment note are not carried in the statement tables, which carry the issuer's income statement lines and segment revenue. Severity is low.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 2–3 and 12–15; 10-K_2025-12-31_cde.htm.jsonl, pages 129–130 and 147–148
- The dividend declared on 2026-11-04 has no stated total, and the insurance proceeds of USD 70 million are expected in the fourth quarter and not received, so the post-balance-sheet table states one pro forma row and one gap. Severity is low.
Basis: 10-Q_2026-09-30_cde.htm.jsonl, pages 38 and 60

## Next module

The orchestrator selects the next module.
