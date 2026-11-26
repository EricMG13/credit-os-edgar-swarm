## Request
Financial foundation for RXO, Inc. (issuer rxo-1929561), as of 2026-11-18, on the credit_snapshot pathway. Scope: normalised statements, debt, liquidity, leverage and cover for the consolidated company from FY2024 to the nine months to 2026-09-30, built from the five supplied filings and the Source readiness answer.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_rxo.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 (signed February 26, 2025) | 2025-02-26 | 27c472795169d6e5a423dec8f80dc8e1d4006cc51a7a6f976e3e54c1ca8c28e6 | Cross-check of FY2024 statements, debt and revolver terms against the FY2025 comparatives; no figure of this report is carried where the FY2025 report restates a comparative. |
| 10-K_2025-12-31_rxo.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 (signed February 9, 2026) | 2026-02-09 | 438fdd5b608ae4e649f5e3abec67cebfd580622a8139a8deaa85ad814b21edaa | Audited FY2025 and FY2024 statements, segment and revenue notes, lease and debt notes, year-end liquidity and the terminated revolver. |
| 10-Q_2026-03-31_rxo.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 (signed May 7, 2026) | 2026-05-07 | 75b71f8ba6b3be3b318692deec4f5e79e7fc2572de37fb8b3ab17a64b2479e74 | Read for the first debt table after the February 2026 refinancing and to reconcile quarters to the nine-month totals. |
| 10-Q_2026-06-30_rxo.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 (signed August 6, 2026) | 2026-08-06 | 5c61f072185d2cb34cb12ff6b4e25b2337dd4e25ae50fc6da59a8870e09af7e9 | Read for the second-quarter debt table, the new non-U.S. facility and to reconcile quarters to the nine-month totals. |
| 10-Q_2026-09-30_rxo.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 (signed October 29, 2026) | 2026-10-29 | 10aa417a79d0c4cdf789db16642b27bb6f6af33225d204910ff08edfa838cc2f | Latest balance sheet, nine-month and third-quarter statements, segment note, debt, liquidity and subsequent events. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | 10aa21e3faf3127d9c7d04a6658c79a340f04e68c59b6756218820d99bb407e1 | Source inventory, period coverage, perimeter, gaps and the readiness limits for this module; no financial balance or ratio is imported. |

No source outside the five filings was used.

## Findings

### Bottom line

The 2026 refinancing moved bond maturities to 2031, but debt of USD 496 million is 8.86x last-twelve-month reported EBITDA (4.28x adjusted) and operating cash flow is negative, so creditors rely on adjusted earnings and USD 335 million of ABL availability.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9–11; calculation C14; calculation C19

The strongest counterweight is that the cash outflow is working capital, not operating losses: receivables rose USD 252 million since the end of 2025 while payables rose USD 169 million as higher freight prices lifted revenue, and that investment should reverse if rates ease. Against that, the USD 60 million gap between reported and adjusted EBITDA is mostly restructuring and integration charges that recur in every period shown.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 21; calculation C15; calculation C22

### Financial interpretation

Carrying debt rose from USD 368 million at 2024-12-31 to USD 404 million at 2025-12-31 and USD 496 million at 2026-09-30, while cash stayed between USD 17 million and USD 35 million, so net debt climbed from USD 333 million to USD 471 million. The USD 92 million increase in debt since the end of 2025 is, in the issuer's words, borrowing to fund working capital as revenue grew. Reported EBITDA, which is operating income plus depreciation and amortization and so carries restructuring, integration and impairment charges, was USD 56 million over the last twelve months and gives net leverage of 8.41x; on the issuer-adjusted measure of USD 116 million the same net debt is 4.06x. The distance between the two answers is the main credit judgement in this module: the adjusted measure rests on add-backs whose recurrence is untested, and restructuring costs appear in every period shown.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9, 25; 10-Q_2026-09-30_rxo.htm.jsonl, page 8; calculation C13; calculation C14; calculation C15

Cash interest paid was USD 29 million over the last twelve months, so reported EBITDA covers it 1.93x and adjusted EBITDA 4.00x. That figure is a fair guide to the near future: the annual coupon on the 2031 notes of USD 25.5 million plus interest on the drawn ABL of about USD 3.4 million at its stated effective rate gives about USD 28.9 million, close to what was paid, although no coupon on the 2031 notes had been paid at the balance-sheet date and interest on the redeemed 2027 notes sits in the base year. Cover therefore depends almost entirely on the adjusted measure, and falls toward one times if the add-backs are not accepted.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 4, 10–11; calculation C23; calculation C28

Operating cash flow was negative USD 22 million in the nine months to 2026-09-30 against positive USD 44 million a year earlier, and negative USD 15 million over the last twelve months. Receivables absorbed USD 261 million of cash in the nine months, partly offset by a USD 175 million rise in payables, as higher freight rates and fuel prices lifted revenue per load. Capital spending of USD 42 million leaves free cash flow of negative USD 64 million for the nine months and negative USD 73 million over the last twelve months, financed by borrowing. This is a working-capital float rather than an operating loss: payables fund much of the receivables, so a fall in freight prices would release cash from receivables but also shrink payables, and the net effect is not established. The issuer describes truck brokerage as generating robust free cash flow conversion; that is not visible in these figures.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4, 17, 21; calculation C10; calculation C11; calculation C12

Cash of USD 25 million and stated ABL availability of USD 335 million give USD 360 million of liquidity at 2026-09-30, against USD 582 million of cash and undrawn commitments at the end of 2025. The two are not comparable: the old unsecured revolver's commitments were limited by financial covenants to USD 202 million of usable capacity at the end of 2025, so usable liquidity then was nearer USD 219 million. The ABL's availability depends on a borrowing base whose inputs are not printed and on covenants whose levels are not stated, and the two non-U.S. facilities are drawn at or close to their limits.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-Q_2026-09-30_rxo.htm.jsonl, pages 10–11, 25; calculation C18; calculation C19; calculation C20

Nothing of size matures before 2031: the 2027 notes were redeemed in the refinancing, the ABL Facility matures on 2031-02-05 and the 2031 notes on 2031-05-15, and only USD 35 million of short-term debt and USD 1 million of undated lease financing fall elsewhere. The USD 465 million of principal that matures in 2031 and the 2028-05-15 first call date on the notes frame any future refinancing, and the pending merger may change both.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 9–11; calculation C21

Statement identities hold in every column: assets equal liabilities plus equity, the cash flow totals equal the net change and opening cash plus the change equals closing cash. The FY2024 comparatives in the 2025 annual report agree with the 2024 annual report. Three derived items need care: reported EBITDA is calculated because the issuer prints none, adjusted EBITDA is calculated from two issuer-stated segment lines, and last-twelve-month figures combine audited and unaudited components. Lease liabilities stay outside debt as separate lines; operating lease liabilities were USD 231 million at 2026-09-30, and no pension or retiree medical obligation is described in any filing.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 66–68, 87; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–4; calculation C24; calculation C25; calculation C26; calculation C27

The merger agreement with C.H. Robinson is the only event after the balance-sheet date and is kept out of every figure. The latest quarterly report states no effect on RXO's net debt, financing or debt repayment, so the post-balance-sheet table records none, and what happens to the notes and the ABL Facility on closing is not established.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 16, 31; Source readiness (CP-0)

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2024-09-16 | day | 2026-02-09 | RXO completed the acquisition of Coyote from United Parcel Service of America, Inc. for USD 1.038 billion in cash, plus USD 10 million of later working-capital adjustments paid in the first quarter of 2025. | Historical — acquired the technology-driven, asset-light truckload freight brokerage services business | 10-K_2025-12-31_rxo.htm.jsonl, page 6 | Explains the step up in revenue, receivables, goodwill and intangible assets between FY2023 and FY2024 and the one-off acquisition cash flows; both prior-year columns carry it. |
| 2026-11-15 | day | 2026-10-29 | First semiannual cash interest payment on the 6.375% unsecured notes due 2031. | Scheduled — payable semiannually in cash in arrears on May 15 and November 15 of each year, beginning November 15, 2026 | 10-Q_2026-09-30_rxo.htm.jsonl, page 11 | Marks the start of coupon payments on the 2031 notes, none of which had been paid at the 2026-09-30 balance sheet; the annual coupon is close to the last-twelve-month cash interest paid (calculation C28), and payment itself is not confirmed by the supplied filings. |
| 2028-05-15 | day | 2026-10-29 | First date from which RXO may redeem the 2031 notes in whole or in part, at 103.188% of principal. | Scheduled — may redeem the 2031 Notes in whole or in part on or after May 15, 2028 | 10-Q_2026-09-30_rxo.htm.jsonl, page 11 | Sets when the 2031 notes can be refinanced without a make-whole premium, which is relevant to any refinancing of the notes. |
| 2031-02-05 | day | 2026-10-29 | ABL Facility maturity date. | Scheduled — The ABL Facility matures on February 5, 2031 | 10-Q_2026-09-30_rxo.htm.jsonl, page 10 | The ABL is the only committed liquidity source and does not mature before 2031. |
| 2031-05-15 | day | 2026-10-29 | Maturity of the USD 400 million 6.375% notes due 2031. | Scheduled — mature on May 15, 2031 | 10-Q_2026-09-30_rxo.htm.jsonl, page 11 | Largest single debt maturity; nothing else of size falls due before it. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 10 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_rxo.htm.jsonl | Annual report on Form 10-K | FY2025 with FY2024 and FY2023 comparatives | USD | millions, except share data in thousands | RXO, Inc. and its majority-owned subsidiaries, one reportable segment | US GAAP | Tier 1: audited statements | Controlling for FY2025 statements, debt note, lease note, segment note and year-end liquidity | Revolver and 2027 notes superseded by the 2026 refinancing; no earnings release or non-GAAP reconciliation. |
| 10-K_2024-12-31_rxo.htm.jsonl | Annual report on Form 10-K | FY2024 with FY2023 and FY2022 comparatives | USD | millions, except share data in thousands | RXO, Inc. and its majority-owned subsidiaries, one reportable segment | US GAAP | Tier 1: audited statements | Cross-check of FY2024 statements and year-end 2024 debt; history only | Predates the 2026 refinancing; FY2024 values agree with the FY2025 comparatives (calculation C26). |
| 10-Q_2026-03-31_rxo.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 with Q1 2025 | USD | millions, except share data in thousands | RXO, Inc. and its majority-owned subsidiaries, one reportable segment | US GAAP | Tier 2b: unaudited without stated auditor review | Quarter reconciliation and first debt table after the refinancing | Year-to-date cash flow equals the quarter; no segment bridge beyond the segment note. |
| 10-Q_2026-06-30_rxo.htm.jsonl | Quarterly report on Form 10-Q | Q2 and six months 2026 with 2025 | USD | millions, except share data in thousands | RXO, Inc. and its majority-owned subsidiaries, one reportable segment | US GAAP | Tier 2b: unaudited without stated auditor review | Quarter reconciliation and second-quarter debt table | Cash flow is six-month year-to-date; new non-U.S. facility commitment differs from the Q3 report. |
| 10-Q_2026-09-30_rxo.htm.jsonl | Quarterly report on Form 10-Q | Q3 and nine months 2026 with 2025 | USD | millions, except share data in thousands | RXO, Inc. and its majority-owned subsidiaries, one reportable segment | US GAAP | Tier 2b: unaudited without stated auditor review | Controlling for the latest balance sheet, nine-month and third-quarter statements, debt, liquidity and the merger subsequent event | Cash flow is nine-month year-to-date only; no discrete Q3 cash flow is printed. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| RXO, Inc. | Issuer, listed parent and borrower; co-borrower on the ABL Facility | December 31 | USD | millions | RXO, Inc. and its majority-owned subsidiaries; one reportable segment (truck brokerage, last mile, managed transportation) | US GAAP | FY2024, FY2025, 2025-12-31 balance sheet, Q1 to Q3 2026 and 9M 2026 with 2025 comparatives, 2026-09-30 balance sheet |
| RXO Capacity Solutions Inc. and RXO Last Mile Canada Inc. | Co-borrowers under the ABL Facility | December 31 | USD | millions | Consolidated within RXO, Inc.; no separate statements | US GAAP | Not supplied: no separate statements |
| Direct and indirect wholly-owned domestic subsidiaries (other than certain excluded subsidiaries) | Guarantors of the 2031 notes | December 31 | USD | millions | Consolidated within RXO, Inc.; individual guarantors and excluded subsidiaries not listed in the supplied text | US GAAP | Not supplied: no guarantor financial information |

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

Balance-sheet observations are instants at the period end, not flows from the period start. The fiscal year is the calendar year. The merger agreement with C.H. Robinson announced after the latest balance-sheet date is the only later event; it is kept out of every period figure and states no effect on net debt.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–4; 10-Q_2026-09-30_rxo.htm.jsonl, page 16; 10-K_2025-12-31_rxo.htm.jsonl, pages 66–68, 106

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_rxo.htm.jsonl; 10-Q_2026-09-30_rxo.htm.jsonl | No adjustment | USD millions as printed | USD millions as printed | All statements are in US dollars and the same US GAAP perimeter; no currency conversion and no restatement of comparatives was needed. | All |
| EBITDA (Reported) derived | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Derivation from components | Operating income (loss) plus depreciation and amortization expense: FY2025 -79 and 116 | FY2025 37 | The issuer prints no EBITDA; reported EBITDA is operating income plus depreciation and amortization, so restructuring, integration and impairment charges stay inside it. | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| EBITDA (Adjusted) derived | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | Derivation from issuer-stated lines | Segment adjusted EBITDA 144 and unallocated corporate expenses 35 (FY2025) | FY2025 109 | The issuer states segment adjusted EBITDA and unallocated corporate expenses but no consolidated adjusted EBITDA; the difference is the consolidated issuer-adjusted measure. Analyst Judgement on which lines make the consolidated measure. | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Total Liabilities derived | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 | Sum of printed subtotals | Total current liabilities 1,038 and total long-term liabilities 698 (2025-12-31) | 1,736 | The balance sheet prints no total liabilities line. | FY2024, FY2025, 9M 2026 |
| Total Debt as sum of two balance-sheet lines | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67, 89; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | Sum of printed lines | Short-term debt and current maturities 35 and long-term debt and finance leases 461 (2026-09-30) | 496 | Carrying value, net of issuance costs and discounts; equals the debt note's total carrying value in every period. | FY2024, FY2025, 9M 2026 |
| Cash & Equivalents excludes restricted cash | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 4, 6 | Definition | Cash, cash equivalents and restricted cash 26 (2026-09-30) | Cash and cash equivalents 25 | Restricted cash of 1 sits in other current assets; net debt uses cash and cash equivalents only. The cash flow statement's opening and closing cash include restricted cash. | FY2025, 9M 2026 |
| Last-twelve-month construction | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 | Derived period | Full year plus current stub less prior-year stub | LTM to 2026-09-30 | Used for every interim ratio; each component is a printed figure and the stubs cover the same nine months. | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Revenue | 4550 | 5742 | 4273 | 5070 | 1421 | 1871 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Cost of transportation and services (exclusive of depreciation and amortization) | 3565 | 4611 | 3408 | 4181 | 1137 | 1538 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Direct operating expense (exclusive of depreciation and amortization) | 202 | 190 | 143 | 161 | 48 | 58 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Sales, general and administrative expense | 666 | 832 | 632 | 631 | 208 | 223 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Depreciation and amortization expense | 87 | 116 | 88 | 80 | 26 | 28 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Transaction and integration costs | 53 | 22 | 18 | 7 | 5 | 1 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Restructuring costs | 33 | 38 | 21 | 20 | 4 | 6 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Goodwill impairment | Not supplied: the filing prints a dash for this line | 12 | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Operating income (loss) | -56 | -79 | -37 | -10 | -7 | 17 | USD millions | Reported subtotal; negative is a loss | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Other expense (income) | 218 | 1 | 1 | 2 | -1 | 1 | USD millions | Reported; expense-sign convention, negative is income | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Debt extinguishment loss | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the filing prints a dash for this line | 11 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints a dash for this line | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Interest expense, net | 30 | 35 | 26 | 28 | 9 | 10 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Income (loss) before income taxes | -304 | -115 | -64 | -51 | -15 | 6 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Income tax provision (benefit) | -14 | -15 | -10 | -9 | -1 | 3 | USD millions | Reported; negative is a benefit | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Net income (loss) | -290 | -100 | -54 | -42 | -14 | 3 | USD millions | Reported; Tier 1 for FY columns, Tier 2b for interim columns | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| Segment adjusted EBITDA (issuer-stated) | 136 | 144 | 119 | 134 | 38 | 66 | USD millions | Reported in the segment note; before unallocated corporate expenses | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| Unallocated corporate expenses (issuer-stated) | 15 | 35 | 27 | 35 | 8 | 15 | USD millions | Reported in the segment note; positive is an expense | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| EBITDA (Reported) | 31 | 37 | 51 | 70 | 19 | 45 | USD millions | Calculated: operating income (loss) plus depreciation and amortization expense; the issuer states no EBITDA; interim columns are period amounts, not last-twelve-month figures | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| EBITDA (Adjusted) | 121 | 109 | 92 | 99 | 30 | 51 | USD millions | Calculated, issuer-adjusted: segment adjusted EBITDA less unallocated corporate expenses, both issuer-stated; add-backs are transaction and integration costs, restructuring and other costs, goodwill impairment and other expense (see the EBITDA bridge) | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |

### Segment schedule

| Service offering | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Truck brokerage | 3029 | 4225 | 3131 | 3879 | 1039 | 1433 | USD millions | Revenue by service offering as printed; one reportable segment, so no segment profit by offering is stated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 8–9 |
| Last mile | 1055 | 1196 | 898 | 943 | 305 | 334 | USD millions | Revenue by service offering as printed; one reportable segment, so no segment profit by offering is stated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 8–9 |
| Managed transportation | 600 | 549 | 416 | 430 | 137 | 163 | USD millions | Revenue by service offering as printed; one reportable segment, so no segment profit by offering is stated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 8–9 |
| Eliminations | -134 | -228 | -172 | -182 | -60 | -59 | USD millions | Revenue by service offering as printed; one reportable segment, so no segment profit by offering is stated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 8–9 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (loss) | -290 | -100 | -54 | -42 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Depreciation and amortization expense | 87 | 116 | 88 | 80 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Stock compensation expense | 23 | 29 | 22 | 21 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Deferred tax benefit | -19 | -21 | -15 | -12 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Deemed non-pro rata distribution | 216 | Not supplied: the filing prints a dash for this line | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Impairment of operating lease assets | 13 | 4 | 3 | 1 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Goodwill impairment | Not supplied: the filing prints a dash for this line | 12 | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Debt extinguishment loss | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the filing prints a dash for this line | 11 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Other | 7 | 11 | 7 | 8 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Accounts receivable | -109 | -5 | 120 | -261 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Other current assets and other long-term assets | 8 | 19 | 20 | -35 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Accounts payable | -65 | -16 | -74 | 175 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Accrued expenses, other current liabilities and other long-term liabilities | 117 | 2 | -73 | 32 | USD millions | Reported; operating section | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | -12 | 51 | 44 | -22 | USD millions | Reported total; nine-month columns are year-to-date | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Payment for purchases of property and equipment | -45 | -59 | -43 | -42 | USD millions | Reported; investing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Business acquisition, net of cash acquired | -1019 | -10 | -10 | Not supplied: the filing prints a dash for this line | USD millions | Reported; investing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Proceeds from sale of property and equipment | Not supplied: the filing prints a dash for this line | 2 | 1 | Not supplied: the filing prints a dash for this line | USD millions | Reported; investing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Other (investing) | Not supplied: the filing prints a dash for this line | -4 | -4 | Not supplied: the filing prints a dash for this line | USD millions | Reported; investing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -1064 | -71 | -56 | -42 | USD millions | Reported total | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Proceeds from borrowings on revolving credit facilities | 238 | 566 | 471 | 931 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Repayment of borrowings on revolving credit facilities | -226 | -533 | -438 | -882 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Proceeds from issuance of common stock and pre-funded warrants | 1125 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints a dash for this line | Not supplied: the line is not presented in this column's statement | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Proceeds from issuance of debt | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | 400 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Repurchase of debt | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | Not supplied: the line is not presented in this column's statement | -362 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Payment for equity issuance costs | -30 | -1 | -1 | Not supplied: the filing prints a dash for this line | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Repayment of debt and finance leases | -3 | -2 | -1 | -2 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Payment for debt issuance costs | -3 | Not supplied: the filing prints a dash for this line | Not supplied: the filing prints a dash for this line | -9 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Payment for tax withholdings related to vesting of stock compensation awards | -4 | -19 | -20 | -4 | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Other (financing) | 11 | -10 | -10 | Not supplied: the filing prints a dash for this line | USD millions | Reported; financing section; outflow negative | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | 1108 | 1 | 1 | 72 | USD millions | Reported total | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -2 | 2 | 2 | Not supplied: the filing prints a dash for this line | USD millions | Reported; effect of exchange rates on cash, cash equivalents and restricted cash | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Net Cash Change | 30 | -17 | -9 | 8 | USD millions | Reported; operating plus investing plus financing plus FX effect | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Opening Cash | 5 | 35 | 35 | 18 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Closing Cash | 35 | 18 | 26 | 26 | USD millions | Reported; cash, cash equivalents and restricted cash; the balance sheet cash line excludes restricted cash of 1 at 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 27 | 32 | 17 | 14 | USD millions | Reported supplemental line, cash paid for interest, net; positive is an amount paid | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |
| Cash paid for income taxes, net | 4 | 7 | 6 | 6 | USD millions | Reported supplemental line | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 35 | 17 | 25 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 1227 | 1226 | 1478 | USD millions | Reported; net of allowances | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Other current assets | 77 | 74 | 104 | USD millions | Reported; includes restricted cash of 1 at 2025-12-31 and 2026-09-30 | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total current assets | 1339 | 1317 | 1607 | USD millions | Reported subtotal | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Property and equipment, net | 135 | 134 | 124 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Operating lease assets | 276 | 238 | 203 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Goodwill | 1123 | 1111 | 1111 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Identifiable intangible assets, net | 499 | 453 | 422 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Other long-term assets | 42 | 24 | 29 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total long-term assets | 2075 | 1960 | 1889 | USD millions | Reported subtotal | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total Assets | 3414 | 3277 | 3496 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Accounts payable | 568 | 539 | 708 | USD millions | Reported; includes third-party transportation costs payable | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Accrued expenses | 373 | 397 | 432 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Short-term debt and current maturities of long-term debt | 17 | 17 | 35 | USD millions | Reported; includes the non-U.S. revolving facilities at 2026-09-30 | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Short-term operating lease liabilities | 81 | 75 | 67 | USD millions | Reported; lease liabilities are not added to Total Debt | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Other current liabilities | 26 | 10 | 13 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total current liabilities | 1065 | 1038 | 1255 | USD millions | Reported subtotal | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Long-term debt and obligations under finance leases | 351 | 387 | 461 | USD millions | Reported; carrying value net of issuance costs | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Deferred tax liabilities | 88 | 51 | 38 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Long-term operating lease liabilities | 215 | 191 | 164 | USD millions | Reported; lease liabilities are not added to Total Debt | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 83 | 69 | 62 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total long-term liabilities | 737 | 698 | 725 | USD millions | Reported subtotal | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total Liabilities | 1802 | 1736 | 1980 | USD millions | Calculated: total current liabilities plus total long-term liabilities; the balance sheet prints no total | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Common stock | 2 | 2 | 2 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 1904 | 1929 | 1946 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Accumulated deficit | -284 | -384 | -426 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive loss | -10 | -6 | -6 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total Equity | 1612 | 1541 | 1516 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Total Debt | 368 | 404 | 496 | USD millions | Calculated: short-term debt and current maturities plus long-term debt and obligations under finance leases; carrying value, equal to the debt note total | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67, 89; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 |
| Cash & Equivalents | 35 | 17 | 25 | USD millions | Reported cash and cash equivalents; excludes restricted cash | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 |
| Restricted cash (within other current assets) | Not supplied: not stated separately for 2024-12-31 | 1 | 1 | USD millions | Stated in the notes to the 2026 quarterly report as USD 1 million at both dates | 10-Q_2026-09-30_rxo.htm.jsonl, page 6 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ABL Facility | Asset-based revolving credit facility, five-year | 65 | 65 | 65 | 450 | Secured: first priority perfected security interest in all assets of the credit parties, excluding fee-owned and leasehold real property | First priority secured | USD | 65 | Not applicable | Adjusted term SOFR or base rate plus an applicable margin; effective rate 5.24% at 2026-09-30 | floating | Adjusted term SOFR or base rate | Not supplied: the applicable margin is not stated | Not applicable | 2031-02-05 | 0 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 10–11 |
| 6.375% Notes due 2031 | Senior unsecured notes | 395 | 400 | 400 | Not applicable | Unsecured; guaranteed by each direct and indirect wholly-owned domestic subsidiary other than certain excluded subsidiaries | Senior unsecured | USD | 395 | Not applicable | 6.375% fixed; effective rate 6.71% at 2026-09-30 | fixed | Not applicable | Not applicable | Not applicable | 2031-05-15 | 0 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 9, 11–12 |
| Non-U.S. revolving credit facility, one-year term | Revolving credit facility classified as short-term debt | 13 | 13 | 13 | Not supplied: stated as a maximum commitment of approximately 17 | Not supplied: security is not stated | Not supplied: ranking is not stated | Not supplied: the filing prints US dollar amounts and states no denomination | 13 | Not supplied: no conversion stated | Not supplied: pricing is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: one-year term, no date stated | Not supplied: not stated | 10-Q_2026-09-30_rxo.htm.jsonl, page 11 |
| Non-U.S. revolving credit facility, indefinite term | Revolving credit facility classified as short-term debt | 20 | 20 | 20 | Not supplied: stated as a maximum commitment of approximately 20 | Not supplied: security is not stated | Not supplied: ranking is not stated | Not supplied: the filing prints US dollar amounts and states no denomination | 20 | Not supplied: no conversion stated | Not supplied: pricing is not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: indefinite term, can be terminated at any time | Not supplied: not stated | 10-Q_2026-09-30_rxo.htm.jsonl, page 11 |
| Finance leases, asset financing and other short-term debt (remainder of the aggregate line) | Finance leases and asset financing | 3 | 3 | Not supplied: not split out | Not supplied: not stated | Not supplied: security is not stated | Not supplied: ranking is not stated | USD | 3 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: schedule not stated for 2026-09-30 | Not supplied: not stated | 10-Q_2026-09-30_rxo.htm.jsonl, page 9 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-09-30 | USD 5742m | USD 5070m | USD 4273m | USD 6539m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 37m | USD 70m | USD 51m | USD 56m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 109m | USD 99m | USD 92m | USD 116m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| Cash Interest Paid | LTM to 2026-09-30 | USD 32m | USD 14m | USD 17m | USD 29m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| Net income (loss) | LTM to 2026-09-30 | USD -100m | USD -42m | USD -54m | USD -88m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 51m | USD -22m | USD 44m | USD -15m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| Payment for purchases of property and equipment (capex) | LTM to 2026-09-30 | USD 59m | USD 42m | USD 43m | USD 58m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Full year FY2025 plus nine months 2026 less nine months 2025; interim components are unaudited. |
| Free cash flow (operating cash flow less capex) | LTM to 2026-09-30 | USD -8m | USD -64m | USD 1m | USD -73m | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Levered, after working capital; excludes acquisitions and debt flows. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 368 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 31 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2024 / 2024-12-31 | USD | US$m | 11.87 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 333 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 31 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2024 / 2024-12-31 | USD | US$m | 10.74 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 31 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | 27 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | FY2024 / 2024-12-31 | USD | US$m | 1.15 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 368 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 121 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | FY2024 / 2024-12-31 | USD | US$m | 3.04 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 333 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 121 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | FY2024 / 2024-12-31 | USD | US$m | 2.75 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 121 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | 27 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | FY2024 / 2024-12-31 | USD | US$m | 4.48 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 404 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 37 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2025 / 2025-12-31 | USD | US$m | 10.92 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 387 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 37 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2025 / 2025-12-31 | USD | US$m | 10.46 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 37 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | 32 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | FY2025 / 2025-12-31 | USD | US$m | 1.16 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 404 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 109 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | FY2025 / 2025-12-31 | USD | US$m | 3.71 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 387 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 109 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | FY2025 / 2025-12-31 | USD | US$m | 3.55 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 109 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | 32 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | FY2025 / 2025-12-31 | USD | US$m | 3.41 | Calculated | Tier 1 | Fiscal-year ratio on printed annual figures. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 496 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 56 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 8.86 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 471 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 56 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 8.41 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 56 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 29 | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 1.93 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 496 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 116 | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | 2026-09-30 | USD | US$m | 4.28 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 471 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 116 | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | 2026-09-30 | USD | US$m | 4.06 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 116 | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | 29 | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 4.00 | Calculated | Tier 1 and Tier 2b | Last-twelve-month EBITDA built from FY2025 plus nine months 2026 less nine months 2025 (T4.8); interim figures are unaudited. |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue | 31 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | 4550 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2024 / 2024-12-31 | USD | US$m | 0.68% | Calculated | Tier 1 | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Revenue | 121 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | 4550 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2024 / 2024-12-31 | USD | US$m | 2.66% | Calculated | Tier 1 | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt | -12 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | 368 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | FY2024 / 2024-12-31 | USD | US$m | -0.03 | Calculated | Tier 1 | Free-name ratio of two stated figures. |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt | 635 | Chart data: liquidity, FY2024 / 2024-12-31 | 368 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | FY2024 / 2024-12-31 | USD | US$m | 1.73 | Calculated | Tier 1 | Free-name ratio of two stated figures. |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue | 37 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | 5742 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2025 / 2025-12-31 | USD | US$m | 0.64% | Calculated | Tier 1 | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Revenue | 109 | 10-K_2025-12-31_rxo.htm.jsonl, page 85 | 5742 | 10-K_2025-12-31_rxo.htm.jsonl, page 67 | FY2025 / 2025-12-31 | USD | US$m | 1.90% | Calculated | Tier 1 | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt | 51 | 10-K_2025-12-31_rxo.htm.jsonl, page 68 | 404 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | FY2025 / 2025-12-31 | USD | US$m | 0.13 | Calculated | Tier 1 | Free-name ratio of two stated figures. |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt | 582 | Chart data: liquidity, FY2025 / 2025-12-31 | 404 | 10-K_2025-12-31_rxo.htm.jsonl, page 89 | FY2025 / 2025-12-31 | USD | US$m | 1.44 | Calculated | Tier 1 | Free-name ratio of two stated figures. |
| EBITDA margin (reported) | EBITDA (Reported) / Revenue | 56 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 6539 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 0.86% | Calculated | Tier 1 and Tier 2b | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| EBITDA margin (adjusted) | EBITDA (Adjusted) / Revenue | 116 | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | 6539 | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 1.77% | Calculated | Tier 1 and Tier 2b | Free-name ratio; margin shown as a percentage, the others as a plain ratio. |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt | -15 | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | 496 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 2026-09-30 | USD | US$m | -0.03 | Calculated | Tier 1 and Tier 2b | Free-name ratio of two stated figures. |
| Liquidity / total debt | (Cash + undrawn committed facilities) / Total Debt | 360 | Chart data: liquidity, 2026-09-30 | 496 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | 2026-09-30 | USD | US$m | 0.73 | Calculated | Tier 1 and Tier 2b | Free-name ratio of two stated figures. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | 9M 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|
| Truck brokerage | Revenue per load change, year on year | Not supplied: not stated for the full year | 34% | 48% | Rising | Driven by freight rates and fuel prices; the issuer states the change, not the level. |
| Truck brokerage | Load volume change, year on year, excluding business moved to managed transportation | Not supplied: not stated for the full year | -2% | 2% | Mixed | The nine-month sentence says volume decreased 2% yet refers to volume growth; the quarter figure is clean. |
| Last mile | Volume change, year on year | Not supplied: not stated in the extracted text for the full year | Not supplied: not stated for nine months | 5% | Rising | Stated for the quarter only. |
| Last mile | Rate change, year on year | Not supplied: not stated in the extracted text for the full year | 5% | 4% | Rising | Issuer-stated change in rates. |
| Revenue concentration | Largest customer share of revenue | 11.4% | Not supplied: not stated in the interim report | Not supplied: not stated in the interim report | Not applicable | One customer was USD 653 million of FY2025 revenue; no interim update. |
| Contracted revenue | Fixed-consideration remaining performance obligation (USD millions) | 13 | 51 | 51 | Rising | Period-end value at 2026-09-30, so the nine-month and quarter columns show the same figure; excludes contracts of one year or less and variable consideration. |
| Workforce | Team members at period end (count) | 9218 | Not supplied: not stated in the interim report | Not supplied: not stated in the interim report | Not applicable | Includes temporary workers; period-end. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA is the unadjusted figure the method uses as the primary denominator | The issuer states segment adjusted EBITDA and unallocated corporate expenses, not an EBITDA | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | All | High: reported EBITDA of 56 against adjusted EBITDA of 116 for the last twelve months moves total leverage between 8.86x and 4.28x | Financial foundation; Fundamental credit | Both are shown and labelled; reported is the primary chart denominator. Adjustments are issuer-stated and their recurrence is not verified. |
| EBITDA | Operating income plus depreciation and amortization | Net income plus interest, tax and depreciation and amortization would also deduct other expense and the 2026 debt extinguishment loss | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | 9M 2026, LTM | Low: 2 of other expense and 11 of extinguishment loss in 9M 2026 | Financial foundation | Operating income plus depreciation and amortization is kept so that financing and non-operating items stay out of the leverage denominator. |
| Total debt | Carrying value, the sum of balance-sheet debt lines | Principal is 501 at 2026-09-30 against carrying value 496 | 10-Q_2026-09-30_rxo.htm.jsonl, page 9; 10-Q_2026-09-30_rxo.htm.jsonl, page 2 | 9M 2026 | Low: 5 of unamortized issuance cost on the 2031 notes | Financial foundation; Fundamental credit | Carrying value is the leverage numerator; principal is shown in the debt reconciliation. |
| Total debt | Lease liabilities the issuer presents on their own lines are not added to Total Debt | Operating lease liabilities of 67 current and 164 long-term are separate lines; finance leases sit inside debt | 10-Q_2026-09-30_rxo.htm.jsonl, page 2; 10-K_2025-12-31_rxo.htm.jsonl, page 87 | All | Medium: operating lease liabilities are a fixed claim outside the debt figure | Fundamental credit | Operating leases stay outside Total Debt and are named as a claim outside debt. |
| Net debt | Cash and cash equivalents excludes restricted cash | Cash, cash equivalents and restricted cash is 26 on the cash flow statement | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 4, 6 | 9M 2026 | Low: 1 of restricted cash | Financial foundation | Net debt uses 25 of cash and cash equivalents. |
| Debt extinguishment (2027 notes redemption) | One economic event with several figures: principal, cash paid and loss | Principal 355, cash paid for debt repurchase 362, extinguishment loss 11, carrying value 351 at 2025-12-31 | 10-Q_2026-09-30_rxo.htm.jsonl, pages 4, 11; 10-K_2025-12-31_rxo.htm.jsonl, page 89 | 9M 2026 | Low: the cash paid exceeds principal by the premium and accrued interest; the loss includes written-off costs | Financial foundation | All figures are kept: principal 355 sets debt, 362 is the financing cash outflow, 11 is the income statement loss. |
| Coyote acquisition | One economic event with several figures: purchase price, cash flow and later adjustment | Purchase price USD 1.038 billion, business acquisition net of cash acquired 1,019 in FY2024, further 10 paid in 2025 | 10-K_2025-12-31_rxo.htm.jsonl, pages 6, 68 | FY2024, FY2025 | Low: differences are cash acquired and a working-capital adjustment | Financial foundation | The cash flow statement figures are used in T4.5; the purchase price is context. |
| Free cash flow | Levered free cash flow is operating cash flow less capex, after working capital | The issuer prints no free cash flow figure; the business overview describes truck brokerage as generating robust free cash flow conversion | 10-K_2025-12-31_rxo.htm.jsonl, page 5; 10-Q_2026-09-30_rxo.htm.jsonl, page 17 | All | Medium: the issuer describes robust free cash flow conversion while calculated free cash flow was -64 in 9M 2026 (calculation C12) | Fundamental credit | Free cash flow is calculated (T4.8); the issuer's qualitative statement is not a figure and is not used. |
| Non-debt funding float | Accounts payable is working-capital float, not ordinary payables, when it funds receivables | Accounts payable of 708 against receivables of 1,478 at 2026-09-30; a non-recourse receivables factoring policy is described with no current balance | 10-Q_2026-09-30_rxo.htm.jsonl, page 2; 10-K_2025-12-31_rxo.htm.jsonl, page 74 | 9M 2026 | Medium: payables rose by 169 since 2025-12-31 and absorbed part of the 252 rise in receivables | Fundamental credit | Flagged as a float: it reverses if freight prices fall and payables shrink faster than receivables. |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 11.87 | 10.74 | x | Carrying debt over reported EBITDA (operating income plus depreciation and amortization); annual statements. |
| FY2025 / 2025-12-31 | 10.92 | 10.46 | x | Carrying debt over reported EBITDA (operating income plus depreciation and amortization); annual statements. |
| 2026-09-30 | 8.86 | 8.41 | x | Carrying debt over reported EBITDA (operating income plus depreciation and amortization); last-twelve-month EBITDA to 2026-09-30, interim figures unaudited. |

Reported EBITDA includes restructuring, integration and impairment charges, so the ratios are far higher than on the issuer-adjusted measure shown in the register.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3; calculation C13; calculation C14

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 1.15 | x | Reported EBITDA over net cash interest paid; annual. Cash paid is not accrued interest expense. |
| FY2025 / 2025-12-31 | 1.16 | x | Reported EBITDA over net cash interest paid; annual. Cash paid is not accrued interest expense. |
| 2026-09-30 | 1.93 | x | Reported EBITDA over net cash interest paid; last twelve months to 2026-09-30. Cash paid is not accrued interest expense. |

Cash interest paid is a last-twelve-month figure that still contains interest on the redeemed 2027 notes, and the annual coupon on the 2031 notes plus ABL interest is of a similar size.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4; calculation C23; calculation C28

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 35 | 600 | US$m | Cash is cash and cash equivalents excluding restricted cash; Revolver commitments of 600 with nothing drawn at 2024-12-31 and no letters of credit on it; covenant-limited availability is not stated for this date. |
| FY2025 / 2025-12-31 | 17 | 565 | US$m | Cash is cash and cash equivalents excluding restricted cash; Revolver commitments of 600 less 35 drawn, no letters of credit on it; the issuer states covenant-limited availability of 202, which is the amount actually usable. |
| 2026-09-30 | 25 | 335 | US$m | Cash is cash and cash equivalents excluding restricted cash; ABL commitment 450 less 65 drawn less 50 letters of credit, as stated availability of 335; subject to a borrowing base not printed; excludes the non-U.S. facilities, drawn 13 of about 17 and 20 of about 20. |

The undrawn figure changes definition from an unsecured revolver in 2024 and 2025 to a borrowing-base facility in 2026, so the three periods are not like for like.
Basis: 10-K_2024-12-31_rxo.htm.jsonl, pages 58–59, 95; 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-Q_2026-09-30_rxo.htm.jsonl, pages 10, 25

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| Within 12 months of 2026-09-30 | 35 | US$m | Short-term debt and current maturities: the two non-U.S. revolving facilities (13 and 20) and a current portion of finance leases and asset financing (2, calculated as 35 less 33); the facilities have a one-year term or can be terminated at any time. |
| FY2031 | 465 | US$m | ABL Facility drawn 65 maturing 2031-02-05 and the 6.375% notes of 400 maturing 2031-05-15, both principal. |
| Not dated in the filing | 1 | US$m | Long-term portion of finance leases and asset financing: principal 466 less 465; the filing gives no maturity for it. |

The ladder is drawn at 2026-09-30 from the debt note's terms because the quarterly reports print no maturity table; the 2025 annual report's table is superseded by the 2026 refinancing.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 9–11; 10-K_2025-12-31_rxo.htm.jsonl, page 89; calculation C21

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Revenue | 4550 | 5742 | 6539 | USD millions | Reported for fiscal years; last twelve months calculated (T4.8) | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| EBITDA (Reported) | 31 | 37 | 56 | USD millions | Calculated: operating income plus depreciation and amortization | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| EBITDA (Adjusted) | 121 | 109 | 116 | USD millions | Calculated, issuer-adjusted: segment adjusted EBITDA less unallocated corporate expenses | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| EBITDA margin (reported) | 0.68 | 0.64 | 0.86 | % | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 |
| EBITDA margin (adjusted) | 2.66 | 1.90 | 1.77 | % | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| Net cash from operating activities | -12 | 51 | -15 | USD millions | Reported for fiscal years; last twelve months calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 |
| Capital expenditures (total) | 45 | 59 | 58 | USD millions | Reported purchases of property and equipment; last twelve months calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 |
| Free cash flow (operating cash flow less capex) | -57 | -8 | -73 | USD millions | Calculated, levered, after working capital | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 |
| Total debt (carrying value) | 368 | 404 | 496 | USD millions | Calculated sum of balance-sheet debt lines | 10-K_2025-12-31_rxo.htm.jsonl, page 89; 10-Q_2026-09-30_rxo.htm.jsonl, page 9 |
| Cash and cash equivalents | 35 | 17 | 25 | USD millions | Reported | 10-K_2025-12-31_rxo.htm.jsonl, page 66; 10-Q_2026-09-30_rxo.htm.jsonl, page 2 |
| Net debt | 333 | 387 | 471 | USD millions | Calculated: total debt less cash | 10-K_2025-12-31_rxo.htm.jsonl, page 89; 10-Q_2026-09-30_rxo.htm.jsonl, page 9 |
| Undrawn committed facilities | 600 | 565 | 335 | USD millions | Stated or calculated from the facility notes; definition differs by period | 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-Q_2026-09-30_rxo.htm.jsonl, page 10 |
| Liquidity (cash plus undrawn committed facilities) | 635 | 582 | 360 | USD millions | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 10 |
| Total debt / EBITDA (reported) | 11.87 | 10.92 | 8.86 | x | Calculated; carrying debt | Chart data: leverage |
| Net debt / EBITDA (reported) | 10.74 | 10.46 | 8.41 | x | Calculated | Chart data: leverage |
| Total debt / adjusted EBITDA | 3.04 | 3.71 | 4.28 | x | Calculated; issuer-adjusted EBITDA | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| Net debt / adjusted EBITDA | 2.75 | 3.55 | 4.06 | x | Calculated; issuer-adjusted EBITDA | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |
| EBITDA / cash interest (reported) | 1.15 | 1.16 | 1.93 | x | Calculated | Chart data: interest cover |
| Adjusted EBITDA / cash interest | 4.48 | 3.41 | 4.00 | x | Calculated | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 368 | 35 | 333 | US$m | Carrying debt lines: short-term debt 17 and long-term debt including finance leases 351; principal 374 (7.50% notes 355 plus finance leases, asset financing and short-term debt 19). Calculated net debt; restricted cash not separately stated. |
| FY2025 / 2025-12-31 | 404 | 17 | 387 | US$m | Carrying debt lines: short-term debt 17 and long-term debt including finance leases 387; principal 408 (revolver 35, 7.50% notes 355, finance leases, asset financing and short-term debt 18). Calculated net debt. Reported before the February 2026 refinancing. |
| 2026-09-30 | 496 | 25 | 471 | US$m | Carrying debt lines: short-term debt 35 and long-term debt including finance leases 461; principal 501 (ABL 65, 2031 notes 400, finance leases, asset financing and short-term debt 36). Calculated net debt after the 2026 refinancing; no event after this date changes net debt. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 501 | -5 | 496 | US$m | Ladder: principal of the ABL 65, the 2031 notes 400 and finance leases, asset financing and short-term debt 36 (calculation C21). Reconciling item: unamortized issuance cost on the 2031 notes of 5; the ABL and other lines carry no discount. Operating lease liabilities are not in the ladder or in carrying value. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | The latest filing, signed 2026-10-29, was read for events after 2026-09-30. The merger agreement with C.H. Robinson is described without any effect on net debt, financing or debt repayment (10-Q_2026-09-30_rxo.htm.jsonl, page 16); earlier events (the February 2026 refinancing) are already in the 2026 balance sheets. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 4550 | 121 | US$m | Annual duration; revenue reported; adjusted EBITDA is the issuer-adjusted measure (segment adjusted EBITDA less unallocated corporate expenses), not reported or house-adjusted. |
| FY2025 | 5742 | 109 | US$m | Same annual duration and issuer-adjusted identity; reported EBITDA is 37 on the same year. |
| LTM 2026-09-30 | 6539 | 116 | US$m | Twelve-month duration built from FY2025 plus nine months 2026 less nine months 2025; same issuer-adjusted identity; interim components unaudited. |

The EBITDA in this chart is the issuer-adjusted measure, whereas the leverage and interest-cover charts use reported EBITDA.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 67, 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3, 8; calculation C05; calculation C07

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| ABL Facility | 1 | Yes | 65 | 1.16 | US$m | Borrowers RXO, Inc., RXO Capacity Solutions Inc. and RXO Last Mile Canada Inc.; guaranteed by the credit parties; first priority security in all assets of the credit parties other than real property; 10-Q_2026-09-30_rxo.htm.jsonl, pages 10–11; 10-K_2025-12-31_rxo.htm.jsonl, page 106. Principal drawn; undrawn 335 not included. Cumulative principal over last-twelve-month reported EBITDA of 56. |
| 6.375% notes due 2031 | 2 | No | 400 | 8.30 | US$m | Issuer RXO, Inc.; guaranteed by each direct and indirect wholly-owned domestic subsidiary other than certain excluded subsidiaries; unsecured senior; 10-Q_2026-09-30_rxo.htm.jsonl, pages 9, 11–12. Principal; cumulative 65 plus 400 over the same denominator. |

Only the two instruments whose security and rank the filings state are shown; the non-U.S. facilities and the finance leases and asset financing (principal 36 in all) carry no stated rank, and the notes' guarantor group is not listed.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 9–12; calculation C21

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | 37 | US$m | FY2025 operating income of -79 plus depreciation and amortization of 116; opening amount; calculated, not issuer-stated. |
| Transaction and integration costs | 22 | US$m | Issuer line; classification transaction costs; realisation status not stated; the 2025 annual report ties 19 of it to Coyote. |
| Restructuring and other costs | 39 | US$m | Issuer segment-note line; classification restructuring; realisation status not stated; includes 1 of other costs above the income statement restructuring line of 38. |
| Goodwill impairment | 12 | US$m | Issuer line; classification other stated, non-cash impairment of the ground and air express reporting unit; realisation status not stated. |
| Other expense deducted in the segment measure | -1 | US$m | Issuer segment-note line deducted in arriving at segment adjusted EBITDA but not part of operating income; classification other stated. |
| EBITDA (Adjusted) | 109 | US$m | Closing issuer-adjusted measure: segment adjusted EBITDA of 144 less unallocated corporate expenses of 35, both issuer-stated; no house acceptance of the add-backs. |

The bridge reconciles arithmetically for FY2025 but does not show that the add-backs are non-recurring; restructuring charges have recurred in every period shown.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 67, 85; calculation C17

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Statements and balance-sheet identities for FY2024, FY2025 and 2026-09-30 | Ready | Interim cash flow is year-to-date only; discrete Q3 cash flow is not printed. | None required. |
| Leverage and cover on carrying debt and reported EBITDA | Ready with Limitations | Reported EBITDA is derived, not issuer-stated, and sits near zero, so ratios are very high and sensitive to one-off charges. | Read beside the adjusted ratios and the EBITDA bridge. |
| Leverage and cover on adjusted EBITDA | Ready with Limitations | Adjusted EBITDA is derived from two issuer-stated segment lines; no consolidated reconciliation or earnings release is supplied. | Obtain the issuer's earnings release or covenant EBITDA definition. |
| Liquidity | Ready with Limitations | ABL availability is stated; the borrowing base inputs and covenant levels are not printed; non-U.S. commitments are approximate. | Obtain the ABL credit agreement and the latest borrowing base certificate. |
| Covenant headroom | Not Ready | Covenant levels, test dates and definitions of the ABL Facility are not stated; the old revolver's levels are obsolete. | Obtain the executed ABL credit agreement. |
| Effect of the merger on debt | Not Ready | The merger agreement and any change-of-control debt terms are not supplied. | Obtain the merger agreement and the 2031 notes indenture. |

## Calculations

All amounts are in USD millions unless a row states another unit; each result keeps the sign and rounding of its inputs and no figure is an issuer-stated total unless its row says so.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Total Liabilities, 2024-12-31 / 2025-12-31 / 2026-09-30 | 1,065 + 737; 1,038 + 698; 1,255 + 725 | 1802; 1736; 1980 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 | The balance sheet prints no total liabilities line. |
| C02 | Total Debt (carrying), 2024-12-31 / 2025-12-31 / 2026-09-30 | 17 + 351; 17 + 387; 35 + 461 | 368; 404; 496 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67, 89; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9 | Equals the debt note's total carrying value in each period; operating lease liabilities are not included. |
| C03 | EBITDA (Reported), FY2024 / FY2025 / 9M 2025 / 9M 2026 / Q3 2025 / Q3 2026 | (-56) + 87; (-79) + 116; (-37) + 88; (-10) + 80; (-7) + 26; 17 + 28 | 31; 37; 51; 70; 19; 45 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Operating income plus depreciation and amortization; interim figures are period amounts, not last twelve months. |
| C04 | EBITDA (Adjusted), FY2024 / FY2025 / 9M 2025 / 9M 2026 / Q3 2025 / Q3 2026 | 136 − 15; 144 − 35; 119 − 27; 134 − 35; 38 − 8; 66 − 15 | 121; 109; 92; 99; 30; 51 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | Segment adjusted EBITDA less unallocated corporate expenses; the issuer prints no consolidated figure. |
| C05 | Last-twelve-month revenue to 2026-09-30 | 5,742 + 5,070 − 4,273 | 6539 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Interim components are unaudited. |
| C06 | Last-twelve-month EBITDA (Reported) to 2026-09-30 | 37 + 70 − 51 | 56 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Built from calculation C03. |
| C07 | Last-twelve-month EBITDA (Adjusted) to 2026-09-30 | 109 + 99 − 92 | 116 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 85; 10-Q_2026-09-30_rxo.htm.jsonl, page 8 | Built from calculation C04. |
| C08 | Last-twelve-month cash interest paid to 2026-09-30 | 32 + 14 − 17 | 29 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Net cash paid for interest. |
| C09 | Last-twelve-month net income (loss) to 2026-09-30 | (-100) + (-42) − (-54) | -88 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 67; 10-Q_2026-09-30_rxo.htm.jsonl, page 3 | Includes the 2026 debt extinguishment loss of 11. |
| C10 | Last-twelve-month operating cash flow to 2026-09-30 | 51 + (-22) − 44 | -15 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Year-to-date components. |
| C11 | Last-twelve-month capital expenditure to 2026-09-30 | 59 + 42 − 43 | 58 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Purchases of property and equipment. |
| C12 | Free cash flow, FY2024 / FY2025 / 9M 2026 / LTM 2026-09-30 | (-12) − 45; 51 − 59; (-22) − 42; (-15) − 58 | -57; -8; -64; -73 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, page 68; 10-Q_2026-09-30_rxo.htm.jsonl, page 4 | Levered, after working capital and cash interest; excludes acquisitions and debt flows. |
| C13 | Net debt, 2024-12-31 / 2025-12-31 / 2026-09-30 | 368 − 35; 404 − 17; 496 − 25 | 333; 387; 471 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, page 2 | Cash excludes restricted cash of 1 at the last two dates. |
| C14 | Leverage, 2024-12-31 / 2025-12-31 / 2026-09-30 | Total debt over reported EBITDA: 368 / 31; 404 / 37; 496 / 56. Net debt over reported EBITDA: 333 / 31; 387 / 37; 471 / 56. Total debt over adjusted EBITDA: 368 / 121; 404 / 109; 496 / 116. Net debt over adjusted EBITDA: 333 / 121; 387 / 109; 471 / 116 | Total reported 11.87; 10.92; 8.86. Net reported 10.74; 10.46; 8.41. Total adjusted 3.04; 3.71; 4.28. Net adjusted 2.75; 3.55; 4.06 | x | T4.9 Calculation register | The 2026-09-30 column uses last-twelve-month EBITDA. |
| C15 | Gap between adjusted and reported EBITDA, last twelve months to 2026-09-30, and its issuer-stated components | Gap: 116 − 56. Transaction and integration costs: 22 + 7 − 18. Restructuring and other costs: 39 + 22 − 24. Goodwill impairment: 12 + 0 − 0. Components: 11 + 37 + 12 | Gap 60; components 11, 37, 12, sum 60 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 67, 85; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3, 8 | Other expense lines in the segment note net to a difference of 1 or less over the period and are not decomposed; goodwill impairment arose in FY2025 only. |
| C16 | EBITDA margins, FY2024 / FY2025 / LTM 2026-09-30 | Reported: 31 / 4,550; 37 / 5,742; 56 / 6,539. Adjusted: 121 / 4,550; 109 / 5,742; 116 / 6,539 | Reported 0.68%; 0.64%; 0.86%. Adjusted 2.66%; 1.90%; 1.77% | % | T4.9 Calculation register | Margins are small because brokered revenue is gross of purchased transportation. |
| C17 | EBITDA bridge, FY2025, reported to adjusted | 37 + 22 + 39 + 12 + (-1) | 109, equal to 144 − 35 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 67, 85 | Add-backs are the issuer's lines; realisation status is not stated. |
| C18 | Liquidity, 2024-12-31 / 2025-12-31 / 2026-09-30 | 35 + 600; 17 + 565; 25 + 335 | 635; 582; 360 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 10 | Undrawn definition changes from an unsecured revolver to a borrowing-base facility. |
| C19 | ABL availability at 2026-09-30 | 450 − 65 − 50 | 335, equal to the stated availability of 335 | USD millions | 10-Q_2026-09-30_rxo.htm.jsonl, pages 10, 25 | Subject to a borrowing base whose inputs are not printed. |
| C20 | Revolver availability, 2024-12-31 and 2025-12-31, and usable liquidity at 2025-12-31 | 600 − 0; 600 − 35. Usable: 17 + 202 | 600; 565; 219 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 52, 90; 10-K_2024-12-31_rxo.htm.jsonl, pages 58–59, 95 | 202 is the capacity the issuer states after giving effect to the financial covenants; no equivalent is stated for 2024-12-31. |
| C21 | Debt ladder and principal to carrying value at 2026-09-30 | Current 13 + 20 + (35 − 33); 2031: 65 + 400; undated: 466 − 465; total 35 + 465 + 1. Principal 65 + 400 + 36. Carrying: 501 + (-5) | Ladder 501; principal 501; carrying 496 | USD millions | 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 9–11 | The current portion of finance leases and asset financing (2) and the undated portion (1) are calculated by difference. |
| C22 | Working capital and debt movement from 2025-12-31 to 2026-09-30 | Receivables 1,478 − 1,226. Payables 708 − 539. Total debt 496 − 404. Net debt 471 − 387 | 252; 169; 92; 84 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2, 25 | Balance-sheet movements, not cash flow. |
| C23 | Interest cover, 2024-12-31 / 2025-12-31 / 2026-09-30 | Reported EBITDA over cash interest paid: 31 / 27; 37 / 32; 56 / 29. Adjusted: 121 / 27; 109 / 32; 116 / 29 | Reported 1.15; 1.16; 1.93. Adjusted 4.48; 3.41; 4.00 | x | T4.9 Calculation register | Cash interest paid, not interest expense. |
| C24 | Balance sheet identity, 2024-12-31 / 2025-12-31 / 2026-09-30 | Liabilities plus equity: 1,802 + 1,612; 1,736 + 1,541; 1,980 + 1,516 | 3414; 3277; 3496, equal to total assets | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-Q_2026-09-30_rxo.htm.jsonl, pages 2–3 | Total liabilities is calculated (C01). |
| C25 | Cash flow identities, FY2024 / FY2025 / 9M 2025 / 9M 2026 | Net change: (-12) + (-1,064) + 1,108 + (-2); 51 + (-71) + 1 + 2; 44 + (-56) + 1 + 2; (-22) + (-42) + 72. Closing: 5 + 30; 35 + (-17); 35 + (-9); 18 + 8 | 30; -17; -9; 8; closing 35; 18; 26; 26 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4 | Opening and closing cash include restricted cash. |
| C26 | FY2024 comparatives, 2025 annual report against 2024 annual report | Revenue 4,550 − 4,550; net loss (-290) − (-290); total assets 3,414 − 3,414 | 0; 0; 0 | USD millions | 10-K_2025-12-31_rxo.htm.jsonl, pages 66–67; 10-K_2024-12-31_rxo.htm.jsonl, pages 72–73 | Three lines tested. |
| C27 | Operating lease liabilities at 2026-09-30, outside debt | 67 + 164 | 231 | USD millions | 10-Q_2026-09-30_rxo.htm.jsonl, page 2 | Short-term and long-term operating lease liabilities. |
| C28 | Run-rate cash interest check | 2031 notes: 400 × 6.375% = 25.5. ABL: 65 × 5.24% = 3.4 (3.406). Sum 25.5 + 3.4 | 28.9, against last-twelve-month cash interest paid of 29 | USD millions | 10-Q_2026-09-30_rxo.htm.jsonl, pages 10–11 | Analyst Judgement: excludes non-U.S. facilities and fees; uses the stated effective rate at 2026-09-30. |

## Gaps

- High: Consolidated adjusted EBITDA is not stated. The issuer prints segment adjusted EBITDA and unallocated corporate expenses, so adjusted EBITDA here is calculated from those two lines, and the add-backs carry the issuer's own classifications with no realisation status. Leverage and cover on the adjusted measure cannot be tied to an issuer figure or a covenant definition. Closing it needs the issuer's earnings release or the covenant EBITDA definition.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, page 8; 10-K_2025-12-31_rxo.htm.jsonl, page 85; calculation C04; calculation C15
- High: The ABL Facility's covenant levels, test dates, definitions and borrowing base inputs are not stated and the credit agreement was not supplied. The stated availability of USD 335 million cannot be tested against the covenants and covenant headroom is not calculable. Closing it needs the executed ABL credit agreement and the latest borrowing base certificate.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 10–11; 10-K_2025-12-31_rxo.htm.jsonl, pages 52–53; calculation C19; Source readiness (CP-0)
- Medium: The two non-U.S. revolving facilities (USD 13 million and USD 20 million drawn) have approximate commitments and no stated security, ranking, pricing, currency or maturity date, and the remaining USD 3 million of finance leases and asset financing is calculated by difference. They are kept out of the debt stack, and the maturity ladder places them in the next twelve months and the lease remainder in an undated row. Closing it needs the facility terms.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, pages 9, 11; calculation C21
- Medium: No guarantor or non-guarantor financial information is supplied for the 2031 notes and the excluded subsidiaries are not listed, so structural priority and the share of earnings outside the guarantor group cannot be tested.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, page 12
- Low: Cash flows are printed year-to-date only, so a discrete third-quarter cash flow is not shown. The interim balance sheets at 2026-03-31 and 2026-06-30 are in the quarterly reports but were not tabulated, so the leverage trend between 2025-12-31 and 2026-09-30 is not charted.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, page 4; 10-Q_2026-03-31_rxo.htm.jsonl, pages 2–3; 10-Q_2026-06-30_rxo.htm.jsonl, pages 2–4
- Low: Lines the filings print as a dash, and lines absent from the interim statements (goodwill impairment, debt extinguishment loss, the deemed non-pro rata distribution, equity and debt issuance proceeds, other investing items), are shown as not supplied rather than as zero.
Basis: 10-K_2025-12-31_rxo.htm.jsonl, pages 67–68; 10-Q_2026-09-30_rxo.htm.jsonl, pages 3–4
- Low: Restricted cash is stated as USD 1 million at 2025-12-31 and 2026-09-30 only; at 2024-12-31 it is not stated separately, although cash and cash equivalents equal the cash flow closing balance.
Basis: 10-Q_2026-09-30_rxo.htm.jsonl, page 6; 10-K_2025-12-31_rxo.htm.jsonl, pages 66, 68
- Low: The maximum commitment of the second non-U.S. facility is about USD 21 million in the June report and about USD 20 million in the September report; the later figure is used and the difference is not explained by either filing.
Basis: 10-Q_2026-06-30_rxo.htm.jsonl, page 11; 10-Q_2026-09-30_rxo.htm.jsonl, page 11; Source readiness (CP-0)

## Next module
The orchestrator selects the next module.
