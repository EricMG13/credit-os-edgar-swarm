---
module_id: CP-1
module_name: FinancialFoundation
issuer_id: bgs-1278027
issuer_name: B&G Foods, Inc.
analysis_date: 2026-11-18
run_id: bgs-1278027-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1 Financial foundation: B&G Foods, Inc.

## Request

B&G Foods, Inc. (issuer bgs-1278027), as of 2026-11-18, credit snapshot pathway. Scope is the financial foundation: statements, debt, liquidity, leverage and coverage from the five supplied filings, with the source readiness answer as context.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-28_bgs_bgs-20241228x10k.htm.jsonl | Annual report on Form 10-K of B&G Foods, Inc. for the fiscal year ended December 28, 2024 | 2025-02-25 | bce8ec394a6f056fcbfa1e7edb54dafa77c5089c046bb31b19c11199db87c989 | Fiscal 2024 comparatives cross-checked to the fiscal 2025 annual report; segment and income statement agreement; debt table at December 28, 2024 |
| 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl | Annual report on Form 10-K of B&G Foods, Inc. for the fiscal year ended January 3, 2026 | 2026-03-03 | 183168e6db8b8cd6a26cb231552715c4246b121dad4689c89b9251ebd135ac24 | Fiscal 2025 and fiscal 2024 statements, non-GAAP reconciliation, debt note, cash flows, segments, pensions and subsequent events |
| 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl | Quarterly report on Form 10-Q of B&G Foods, Inc. for the quarter ended April 4, 2026 | 2026-05-13 | a0bdef4209c53fc644fcc998037f7494e43674088aa2dfd034ba3e87e22d4136 | Balance sheet and debt at April 4, 2026; first quarter definition of adjusted EBITDA |
| 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl | Quarterly report on Form 10-Q of B&G Foods, Inc. for the quarter ended July 4, 2026 | 2026-08-12 | ba90dfae0b6fc3a21a09062a6aed540df9148b6cc67dce758347bb0e1351703d | Balance sheet and debt at July 4, 2026; the June 2026 note issuance and the July 6, 2026 redemption timing |
| 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | Quarterly report on Form 10-Q of B&G Foods, Inc. for the quarter ended October 3, 2026 | 2026-11-10 | c7c9f53a62d39c8eb484aa1c061c572122df9227e9d1f2a63bbfae128cf20bf8 | Latest statements for 13 and 39 weeks, balance sheet, debt note, cash flows, segments, non-GAAP reconciliation and events after quarter end |

| Module | Document | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness answer for B&G Foods, Inc. | 02cae1b2e6901620b84494982d6f963d171a3250835daa1fc6aab92afba30fa8 | Source coverage, period calendar and the gaps in legal documents, ratings and covenant ratios; one omission in it is corrected under Gaps |

## Findings

### Bottom line

Net debt is 6.95x issuer-adjusted EBITDA but 15.00x reported EBITDA on twelve-month figures at the latest quarter, so creditors hold a heavily geared balance sheet and the lower ratio depends on large add-backs.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 50–52; calculation R4; calculation R5; calculation R9

Cover is thin: issuer-adjusted EBITDA is 2.08x cash interest and reported EBITDA is only 0.96x, before the full-year cost of the 11.00% notes that replaced the 5.25% notes. Undrawn revolver capacity net of letters of credit has fallen to USD 55.1 million from USD 207.6 million at the end of fiscal 2025, and borrowings and asset sales, not operating cash, funded the 2026 acquisition and dividends. Debt maturities are concentrated in 2028, and the twelve-month figures span 53 weeks.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 19–20; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24; calculation R6; calculation R10; calculation R18

### Leverage trajectory and drivers

Net debt rose by USD 84,328 thousand in the 39 weeks to October 3, 2026, to USD 1,978,111 thousand, because the USD 109,655 thousand acquisition of the College Inn and Kitchen Basics brands and USD 38,341 thousand of dividends outran USD 61,437 thousand of asset sale proceeds and USD 29,566 thousand of operating cash flow. The consequence is that deleveraging now depends on further disposals and cost savings rather than on cash generation. The revolver's maximum leverage ratio steps down from 7.50x to 7.25x for the quarter ending January 2, 2027 and to 7.00x from April 3, 2027, but headroom is not established because the covenant's own EBITDA and net debt definitions are not reproduced in the filings.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 21; calculation R1; calculation R2

Gross leverage on reported EBITDA is 11.60x for fiscal 2025 and 15.46x for the twelve months to October 3, 2026, but reported EBITDA is depressed by non-cash impairments and by the loss on the Green Giant frozen sale, which the issuer adds back; on issuer-adjusted EBITDA the same ratios are 7.16x and 7.17x. The strongest contrary reading is that the add-backs are largely non-cash, which would make the adjusted ratio the better guide to debt service; against that, impairments in fiscal 2024, fiscal 2025 and again in the third quarter of 2026, with reported EBITDA negative in fiscal 2024, show an asset base losing value, so the adjusted ratio may understate the risk that brand values cannot support the debt in a sale or restructuring.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 50–52; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 55; calculation R4; calculation R5; calculation R9

### Coverage and interest burden

Cash interest paid was USD 149,039 thousand in fiscal 2025 and USD 137,053 thousand over the twelve months to October 3, 2026. The cost of debt is rising because the 11.00% notes due 2031 replaced the 5.25% notes due 2027, so cover of 2.08x on issuer-adjusted EBITDA is more likely to fall than rise unless EBITDA grows, and on reported EBITDA it is already below 1.00x.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 19–20; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24; calculation R6; calculation R10

### Cash-flow quality

Operating cash flow was USD 29,566 thousand for the 39 weeks of 2026 against USD 5,950 thousand a year earlier, helped by a USD 58,481 thousand rise in trade payables that reverses if suppliers are paid faster, while inventories absorbed USD 75,445 thousand. After capital expenditures of USD 17,752 thousand, free cash flow was USD 11,814 thousand, well below the USD 38,341 thousand of dividends paid; the issuer has since halved its dividend rate and drew on the revolver to fund the shortfall, which is a direct claim on liquidity.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69; calculation R11; calculation R12

### Liquidity adequacy

Cash of USD 61,743 thousand plus undrawn revolver capacity of USD 55.1 million, net of USD 19.9 million of letters of credit, is the whole stated liquidity buffer, and undrawn capacity has fallen at every quarter end of 2026. The 8.00% senior secured notes mature on September 15, 2028 and the revolver on December 16, 2028, so about USD 1,157.69 million falls due in fiscal 2028, which is the main refinancing pressure point; nothing but term loan amortization matures in the next twelve months.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 19–20; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 22; calculation R13; calculation R18

### Data-quality and definition risks

The period basis is not clean: fiscal 2025 has 53 weeks with a 14-week fourth quarter, so the twelve-month figures to October 3, 2026 span 53 weeks. From the first quarter of 2026 the issuer also adds back losses on sales and disposals of property, plant and equipment, which the fiscal 2025 annual report did not, so the twelve-month adjusted EBITDA mixes two definitions by about USD 1,134 thousand, or 0.40%. This does not change the leverage conclusion, but covenant tests are defined on the credit agreement's own EBITDA, which the filings do not reproduce, so covenant headroom is not established.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 6; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 50–52; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 45; calculation R3; calculation R14

The July 4, 2026 balance sheet shows total debt of USD 2,522,281 thousand and cash of USD 591,576 thousand because the 2031 notes were issued on June 10, 2026 and the 2027 notes were redeemed only on July 6, 2026; net debt there is largely unaffected, but gross debt and cash both are, so the second quarter position is kept out of the ratios. After the October 3, 2026 balance sheet the issuer sold the B&M and Joan of Arc brands and paid a dividend, and the agreement to sell Green Giant Canada was terminated on October 5, 2026; none of these is in the period figures.
Basis: 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 17; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 22; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 36; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 14; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 39; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-28 | Not supplied: reported EBITDA is negative, so a ratio on it is not calculable | Not supplied: reported EBITDA is negative, so a ratio on it is not calculable | x | Reported EBITDA of -104.448 US$m, after impairments of goodwill and intangibles; debt at carrying value; the adjusted ratios are in the calculation register |
| 2026-01-03 | 11.60 | 11.26 | x | Reported EBITDA of 168.12 US$m (53 weeks) and carrying-value debt; the adjusted ratios are in the calculation register |
| 2026-10-03 | 15.46 | 15.00 | x | Reported EBITDA for the 53 weeks to 2026-10-03 (FY2025 plus 39 weeks of 2026 less 39 weeks of 2025) and carrying-value debt; the adjusted ratios are in the calculation register |

The ratios use reported EBITDA, which includes non-cash impairments and the loss on the Green Giant frozen sale; on issuer-adjusted EBITDA they are 7.16x and 6.96x for fiscal 2025 and 7.17x and 6.95x for the twelve months to October 3, 2026.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-28 | -0.73 | x | Reported EBITDA of -104.448 US$m over cash interest paid of 142.424 US$m; the negative figure reflects impairments |
| 2026-01-03 | 1.13 | x | Reported EBITDA of 168.12 US$m over cash interest paid of 149.039 US$m |
| 2026-10-03 | 0.96 | x | Reported EBITDA for 53 weeks over cash interest paid for 53 weeks (FY2025 plus 39 weeks of 2026 less 39 weeks of 2025) |

Cash interest is the cash-flow statement figure, not interest expense, and on issuer-adjusted EBITDA cover is 2.07x, 1.83x and 2.08x for the three periods.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-28 | 50.583 | 225.3 | US$m | Cash from the balance sheet; undrawn is available borrowing capacity net of 4.7 US$m letters of credit (commitments 475.0 less loans 245 less letters of credit), as printed |
| 2026-01-03 | 56.293 | 207.6 | US$m | Cash from the balance sheet; undrawn is available borrowing capacity net of 7.4 US$m letters of credit (commitments 430.0 less loans 215 less letters of credit), as printed |
| 2026-04-04 | 64.542 | 140.1 | US$m | Cash from the balance sheet; undrawn is available borrowing capacity net of 19.9 US$m letters of credit (commitments 430.0 less loans 270 less letters of credit), as printed |
| 2026-07-04 | 591.576 | 79.6 | US$m | Cash from the balance sheet; undrawn is available borrowing capacity net of 20.4 US$m letters of credit (commitments 430.0 less loans 330 less letters of credit), as printed; cash includes the 2031 note proceeds held for the 2027 note redemption paid on 2026-07-06 |
| 2026-10-03 | 61.743 | 55.1 | US$m | Cash from the balance sheet; undrawn is available borrowing capacity net of 19.9 US$m letters of credit (commitments 430.0 less loans 355 less letters of credit), as printed |

Cash at 2026-07-04 was held to redeem the 2027 notes two days later and is not spare liquidity; the revolver is the only committed facility stated.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 1.125 | US$m | Remainder of fiscal 2026 after 2026-10-03: term loan amortization |
| FY2027 | 4.5 | US$m | Term loan amortization of 0.25% of original principal per calendar quarter |
| FY2028 | 1,157.69 | US$m | Revolver 355 US$m and the 8.00% senior secured notes 799.315 US$m plus term loan amortization of 3.375 US$m; the revolver matures 2028-12-16 and the notes 2028-09-15 |
| FY2029 | 432 | US$m | Tranche B term loans due 2029-10-10 after amortization |
| FY2030 | 0 | US$m | The schedule prints a dash for 2030 and its total reconciles without any 2030 amount, so no maturity is stated |
| FY2031 | 475 | US$m | Printed as the thereafter bucket; the only instrument is the 11.00% senior notes due 2031-06-15 |

Amounts are contractual principal as the debt note schedules them, not carrying value; fiscal 2028 combines the revolver, the secured notes and term loan amortization.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | Twelve months to 2026-10-03 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Net sales | 1,932.454 | 1,828.687 | 1,791.549 | US$m | Reported; the twelve-month column is fiscal 2025 plus 39 weeks of 2026 less 39 weeks of 2025 (53 weeks) |
| EBITDA (Reported) | -104.448 | 168.12 | 131.914 | US$m | Issuer-stated EBITDA before adjustments; includes non-cash impairments |
| Adjusted EBITDA (issuer-adjusted) | 295.413 | 272.2 | 284.56 | US$m | Issuer-stated adjusted EBITDA; the twelve-month figure mixes two add-back definitions |
| Cash interest paid | 142.424 | 149.039 | 137.053 | US$m | Cash-flow statement figure |
| Net cash from operating activities | 130.914 | 101.396 | 125.012 | US$m | Cash-flow statement figure |
| Capital expenditures | -27.263 | -30.647 | -25.539 | US$m | Outflow, negative; total capital expenditures only, no maintenance split stated |
| Free cash flow (operating cash flow less capital expenditures) | 103.651 | 70.749 | 99.473 | US$m | Calculated before dividends and acquisitions |
| Total debt (carrying value) | 2,020.448 | 1,950.076 | 2,039.854 | US$m | Balance sheet current plus long-term debt, net of issuance costs and discounts; the last column is at 2026-10-03 |
| Net debt | 1,969.865 | 1,893.783 | 1,978.111 | US$m | Total debt less cash and cash equivalents |
| Net debt / EBITDA (reported) | Not supplied: reported EBITDA is negative | 11.26 | 15.00 | x | Reported EBITDA denominator |
| Net debt / adjusted EBITDA | 6.67 | 6.96 | 6.95 | x | Issuer-adjusted EBITDA denominator |
| Adjusted EBITDA / cash interest | 2.07 | 1.83 | 2.08 | x | Issuer-adjusted EBITDA over cash interest paid |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-28 | 2,020.448 | 50.583 | 1,969.865 | US$m | Reported; gross debt is balance-sheet carrying value, current plus long-term debt net of issuance costs and discounts, and holds no lease or securitization; principal is 2,044.315 US$m |
| 2026-01-03 | 1,950.076 | 56.293 | 1,893.783 | US$m | Reported; gross debt is balance-sheet carrying value, current plus long-term debt net of issuance costs and discounts, and holds no lease or securitization; principal is 1,968 US$m |
| 2026-04-04 | 2,005.314 | 64.542 | 1,940.772 | US$m | Reported; gross debt is balance-sheet carrying value, current plus long-term debt net of issuance costs and discounts, and holds no lease or securitization; principal is 2,021.875 US$m |
| 2026-07-04 | 2,522.281 | 591.576 | 1,930.705 | US$m | Reported; gross debt is balance-sheet carrying value, current plus long-term debt net of issuance costs and discounts, and holds no lease or securitization; principal is 2,555.75 US$m; includes both the 2027 and the 2031 notes because the redemption was paid on 2026-07-06 |
| 2026-10-03 | 2,039.854 | 61.743 | 1,978.111 | US$m | Reported; gross debt is balance-sheet carrying value, current plus long-term debt net of issuance costs and discounts, and holds no lease or securitization; principal is 2,070.315 US$m |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-10-03 | 2,070.315 | -30.461 | 2,039.854 | US$m | Reconciling items are unamortized deferred debt financing costs of -16.261 and unamortized discount of -14.2; no debt is left out of the ladder, and the principal is the sum of the debt maturities rows |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Sale of the B&M and Joan of Arc brands to McCall Farms, Inc. | 2026-10-13 | -8 | 1,970.111 | 14.93 | US$m | Sale price of 8 US$m stated in the third quarter report, subject to closing and post-closing inventory adjustments; the divested brands' EBITDA and transaction costs are not reflected, and the leverage uses reported EBITDA for the 53 weeks to 2026-10-03 |
| Quarterly dividend paid | 2026-10-30 | 7.708 | 1,985.819 | 15.05 | US$m | The report states the payment date and 46 US$m of fiscal 2026 dividends including it; the amount shown is dividends payable at 2026-10-03, and 38.341 paid in 39 weeks plus 7.708 is 46.049, which agrees with the stated 46 US$m |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-28 | 1,932.454 | 295.413 | US$m | Net sales and issuer-adjusted EBITDA for 52 weeks |
| 2026-01-03 | 1,828.687 | 272.2 | US$m | Net sales and issuer-adjusted EBITDA for 53 weeks |
| 2026-10-03 | 1,791.549 | 284.56 | US$m | Net sales and issuer-adjusted EBITDA for 53 weeks to 2026-10-03, constructed as fiscal 2025 plus 39 weeks of 2026 less 39 weeks of 2025; mixes two add-back definitions |

Adjusted EBITDA is the issuer's own adjusted measure in every row, and the three rows are annual-length periods of 52 or 53 weeks.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving credit loans due 2028 | 1 | Yes | 355 | 12.09 | US$m | Principal drawn; secured by substantially all assets except real property and pari passu with the term loans and the 8.00% secured notes; guaranteed by all existing and certain future domestic subsidiaries; cumulative leverage is the whole equal-rank tier of 1,595.315 US$m over reported EBITDA for 53 weeks |
| Tranche B term loans due 2029 | 1 | Yes | 441 | 12.09 | US$m | Principal; same collateral, guarantors and rank as the revolver; cumulative leverage is the equal-rank tier |
| 8.00% senior secured notes due 2028 | 1 | Yes | 799.315 | 12.09 | US$m | Principal; first-priority liens on the same collateral and the same guarantors as the credit agreement, pari passu with it; cumulative leverage is the equal-rank tier |
| 11.00% senior notes due 2031 | 2 | No | 475 | 15.69 | US$m | Principal; unsecured senior obligation guaranteed by domestic subsidiaries, effectively junior to the secured debt and to liabilities of non-guarantor subsidiaries; cumulative leverage is total principal of 2,070.315 US$m over reported EBITDA for 53 weeks, or 7.28 on issuer-adjusted EBITDA |

Amounts are principal, not carrying value, so the stack's total of 2,070.315 US$m is 30.461 US$m above total debt at carrying value, and rank and security come from the filings' summaries, not the executed documents.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), fiscal 2025 | 168.12 | US$m | Opening: issuer-stated EBITDA for the 53 weeks ended 2026-01-03, the reported measure |
| Acquisition/divestiture-related and non-recurring expenses | 14.655 | US$m | Add-back as the issuer states it; classification: transaction costs and non-recurring expenses; realisation status not stated |
| Impairment of intangible assets | 60.798 | US$m | Add-back as stated; classification other stated (impairment); realisation status not stated |
| (Gain) loss on sales of assets | -2.867 | US$m | Adjustment as stated; classification other stated (gain on sale); realisation status not stated; a gain, so deducted |
| Impairment of property, plant and equipment, net | 2.994 | US$m | Add-back as stated; classification other stated (impairment); realisation status not stated |
| Impairment of assets held for sale | 28.5 | US$m | Add-back as stated; classification other stated (impairment); realisation status not stated |
| Adjusted EBITDA (issuer-adjusted), fiscal 2025 | 272.2 | US$m | Closing: issuer-stated adjusted EBITDA; no goodwill impairment arose in fiscal 2025, and no plug is used |

The bridge is for fiscal 2025 only; the twelve-month figure to October 3, 2026 is not bridged because the add-back lines changed in 2026.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2023-12-31 | 2024-12-28 |
| FY2025 | 2024-12-29 | 2026-01-03 |
| Q1 2026 | 2026-01-04 | 2026-04-04 |
| Q2 2026 | 2026-04-05 | 2026-07-04 |
| Q3 2026 | 2026-07-05 | 2026-10-03 |
| 9M 2025 | 2024-12-29 | 2025-09-27 |
| 9M 2026 | 2026-01-04 | 2026-10-03 |
| Q3 2025 | 2025-06-29 | 2025-09-27 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 1,932,454 | 1,828,687 | 1,289,131 | 1,251,993 | 439,304 | 459,782 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Cost of goods sold | 1,510,504 | 1,429,870 | 1,013,049 | 983,532 | 340,291 | 350,845 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Gross profit | 421,950 | 398,817 | 276,082 | 268,461 | 99,013 | 108,937 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Selling, general and administrative expenses | 188,068 | 194,947 | 140,945 | 142,058 | 44,615 | 51,280 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Amortization expense | 20,444 | 20,292 | 15,301 | 13,366 | 5,083 | 4,524 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Impairment of goodwill | 70,580 | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| (Gain) loss on sales of assets | 135 | -2,867 | -2,867 | 36,282 | -15,513 | Not supplied: printed as a dash | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| (Gain) impairment on assets held for sale | Not supplied: printed as a dash | 28,500 | 27,800 | -1,800 | 27,800 | -1,800 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line impairment of assets held for sale | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Impairment of intangible assets | 320,000 | 60,798 | 26,000 | 40,700 | 26,000 | 40,700 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Operating income (loss) | -177,277 | 97,147 | 68,903 | 37,855 | 11,028 | 14,233 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Interest expense, net | 157,447 | 149,631 | 110,835 | 119,086 | 37,297 | 44,784 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Other income | -4,215 | -4,750 | -3,549 | -4,568 | -1,201 | -1,531 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Loss before income tax benefit | -330,509 | -47,734 | -38,383 | -76,663 | -25,068 | -29,020 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Income tax expense (benefit) | -79,258 | -4,477 | -10,304 | -7,624 | -5,926 | 3,494 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line income tax benefit | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Net loss | -251,251 | -43,257 | -28,079 | -69,039 | -19,142 | -32,514 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| Depreciation and amortization | 68,614 | 66,223 | 50,124 | 43,947 | 16,570 | 14,442 | USD thousands | Reported; the cash flow statement for fiscal years and 39 weeks, the non-GAAP reconciliation for 13 weeks | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| EBITDA (Reported) | -104,448 | 168,120 | 122,576 | 86,370 | 28,799 | 30,206 | USD thousands | Issuer-stated EBITDA, net loss before net interest expense, income taxes and depreciation and amortization; no adjustments, so it includes impairments and gains and losses on sales | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| EBITDA (Adjusted) | 295,413 | 272,200 | 187,525 | 199,885 | 70,407 | 81,848 | USD thousands | Issuer-adjusted EBITDA: EBITDA adjusted for acquisition and divestiture expenses, impairments, gains and losses on sales and, from the 2026 reports, losses on sales and disposals of property, plant and equipment; the fiscal 2025 report did not add back the last item | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net loss | -251,251 | -43,257 | -28,079 | -69,039 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Depreciation and amortization | 68,614 | 66,223 | 50,124 | 43,947 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Amortization of operating lease right-of-use assets | 19,387 | 20,152 | 15,004 | 14,331 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Amortization of deferred debt financing costs and bond discount | 5,928 | 6,420 | 4,937 | 5,187 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report adds premium to the label | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Deferred income taxes | -99,107 | -1,816 | -13,801 | -3,543 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Impairment of goodwill | 70,580 | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| (Gain) impairment on assets held for sale | Not supplied: printed as a dash | 28,500 | 27,800 | -1,800 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line impairment of assets held for sale | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Impairment of intangible assets | 320,000 | 60,798 | 26,000 | 40,700 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Impairment of property, plant and equipment | 208 | 2,994 | 2,994 | 172 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Loss on sales and disposals of property, plant and equipment | 215 | 1,134 | 1,029 | 5,734 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line loss on sales of property, plant and equipment | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| (Gain) loss on sales of assets | 135 | -2,867 | -2,867 | 36,282 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| (Gain) loss on extinguishment of debt | 2,126 | -2,754 | -2,754 | 1,127 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Share-based compensation expense | 8,664 | 13,317 | 10,604 | 9,954 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Trade accounts receivable | -30,297 | 32,065 | 14,761 | -25,856 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Inventories | 43,247 | -23,318 | -95,531 | -75,445 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Prepaid expenses and other current assets | 2,338 | -14,367 | -4,601 | 8,250 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Income tax receivable/payable, net | -1,511 | -8,042 | -2,176 | -5,501 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Other assets | -13,715 | -9,297 | -1,755 | 1,674 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Trade accounts payable | -9,168 | -3,139 | 53,194 | 58,481 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Accrued expenses | -13,824 | -29,506 | -47,806 | -13,658 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line accrued expenses and lease liabilities | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Other liabilities | 8,345 | 8,156 | -1,127 | -1,431 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Net Cash from Operating Activities | 130,914 | 101,396 | 5,950 | 29,566 | USD thousands | Issuer-printed total; operating activities include interest paid under US GAAP | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Capital expenditures | -27,263 | -30,647 | -22,860 | -17,752 | USD thousands | Reported; fiscal years audited, interim periods unaudited; total only, maintenance and growth are not split | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Proceeds from sales of assets and property, plant and equipment | -422 | 69,963 | 69,939 | 61,437 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line proceeds from sales of assets | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Payments for acquisition of businesses, net of cash acquired | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: printed as a dash | -109,655 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Net Cash from Investing Activities | -27,685 | 39,316 | 47,079 | -65,970 | USD thousands | Issuer-printed total | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Redemptions and repurchases of senior notes | -266,077 | -37,817 | -37,817 | -509,310 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Proceeds from issuance of senior notes | 250,000 | Not supplied: printed as a dash | Not supplied: printed as a dash | 475,000 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report calls the line proceeds from issuance of senior secured notes; the 2026 amount is the face amount of the 2031 notes | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Repayments of borrowings under term loan facility | -528,625 | -5,625 | -3,375 | -3,375 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Borrowings under term loan facility | 450,000 | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Repayments of borrowings under revolving credit facility | -365,000 | -225,000 | -120,000 | -40,000 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Borrowings under revolving credit facility | 440,000 | 195,000 | 165,000 | 180,000 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Proceeds from issuance of common stock, net | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Dividends paid | -60,041 | -60,598 | -45,402 | -38,341 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Payments of tax withholding on behalf of employees for net share settlement of share-based compensation | -615 | -893 | -893 | -3,415 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Payments of debt financing costs | -12,605 | -882 | -882 | -18,413 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Net Cash from Financing Activities | -92,963 | -135,815 | -43,369 | 42,146 | USD thousands | Issuer-printed total | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| FX Effect on Cash | -777 | 813 | 662 | -292 | USD thousands | Issuer-printed effect of exchange rate fluctuations on cash and cash equivalents | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Net Cash Change | 9,489 | 5,710 | 10,322 | 5,450 | USD thousands | Issuer-printed net increase in cash; operating plus investing plus financing plus the FX effect | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Opening Cash | 41,094 | 50,583 | 50,583 | 56,293 | USD thousands | Issuer-printed cash and cash equivalents at the beginning of the period | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Closing Cash | 50,583 | 56,293 | 60,905 | 61,743 | USD thousands | Issuer-printed cash and cash equivalents at the end of the period | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Cash Interest Paid | 142,424 | 149,039 | 132,168 | 120,182 | USD thousands | Issuer-printed cash interest payments from the supplemental disclosures; a cash amount, not interest expense | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| Cash income tax payments, net of refunds | 21,229 | 5,767 | 6,060 | 1,418 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 50,583 | 56,293 | 64,542 | 591,576 | 61,743 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Trade accounts receivable, net | 172,260 | 140,699 | 152,937 | 133,278 | 165,957 | USD thousands | Reported; fiscal years audited, interim periods unaudited; the annual report prints the line net of an allowance for doubtful accounts and discounts | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Inventories | 511,232 | 420,766 | 354,495 | 391,368 | 424,607 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Assets held for sale | Not supplied: printed as a dash | 51,343 | 37,484 | 31,673 | 52,911 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Prepaid expenses and other current assets | 38,301 | 53,380 | 42,734 | 35,462 | 44,194 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Income tax receivable | 9,068 | 17,337 | 21,421 | 23,714 | 23,191 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total current assets | 781,444 | 739,818 | 673,613 | 1,207,071 | 772,603 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Property, plant and equipment, net | 278,119 | 253,433 | 232,474 | 228,938 | 224,440 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Operating lease right-of-use assets | 55,431 | 50,983 | 50,474 | 50,273 | 48,256 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Finance lease right-of-use assets | 773 | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Goodwill | 548,231 | 543,812 | 549,488 | 548,965 | 548,939 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Other intangible assets, net | 1,285,946 | 1,190,974 | 1,274,240 | 1,269,876 | 1,224,591 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Other assets | 34,788 | 45,890 | 46,159 | 44,307 | 43,738 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Deferred income taxes (asset) | 9,320 | 9,885 | 9,901 | 10,138 | 9,742 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total assets | 2,994,052 | 2,834,795 | 2,836,349 | 3,359,568 | 2,872,309 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Trade accounts payable | 113,209 | 107,669 | 123,013 | 124,769 | 164,201 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Accrued expenses | 83,960 | 78,436 | 65,922 | 84,763 | 79,674 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Current portion of operating lease liabilities | 17,963 | 16,697 | 15,617 | 15,207 | 14,703 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Current portion of finance lease liabilities | 726 | Not supplied: printed as a dash | Not supplied: line not presented in this report | Not supplied: line not presented in this report | Not supplied: line not presented in this report | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Current portion of long-term debt | 5,625 | 4,500 | 4,500 | 513,810 | 4,500 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Income tax payable | 344 | 343 | 715 | 726 | 857 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Dividends payable | 15,038 | 15,196 | 15,424 | 7,722 | 7,708 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total current liabilities | 236,865 | 222,841 | 225,191 | 746,997 | 271,643 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Long-term debt, net of current portion | 2,014,823 | 1,945,576 | 2,000,814 | 2,008,471 | 2,035,354 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Deferred income taxes (liability) | 168,027 | 167,951 | 158,901 | 160,812 | 164,103 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Long-term operating lease liabilities, net of current portion | 37,697 | 34,636 | 37,396 | 37,726 | 36,149 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Other liabilities | 11,833 | 10,866 | 10,643 | 10,496 | 10,419 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total liabilities | 2,469,245 | 2,381,870 | 2,432,945 | 2,964,502 | 2,517,668 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Preferred stock | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Common stock | 791 | 800 | 812 | 813 | 811 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Additional paid-in capital | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | Not supplied: printed as a dash | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Accumulated other comprehensive income (loss) | -4,743 | 15,045 | 13,349 | 13,077 | 9,854 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Retained earnings | 528,759 | 437,080 | 389,243 | 381,176 | 343,976 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total stockholders' equity | 524,807 | 452,925 | 403,404 | 395,066 | 354,641 | USD thousands | Reported; fiscal years audited, interim periods unaudited | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total Assets | 2,994,052 | 2,834,795 | 2,836,349 | 3,359,568 | 2,872,309 | USD thousands | Issuer-printed total assets | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total Liabilities | 2,469,245 | 2,381,870 | 2,432,945 | 2,964,502 | 2,517,668 | USD thousands | Issuer-printed total liabilities; lease liabilities the issuer carries on their own lines are included here and are not part of Total Debt | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total Equity | 524,807 | 452,925 | 403,404 | 395,066 | 354,641 | USD thousands | Issuer-printed total stockholders' equity; no temporary equity or minority interest is presented | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| Total Debt | 2,020,448 | 1,950,076 | 2,005,314 | 2,522,281 | 2,039,854 | USD thousands | Calculated: current portion of long-term debt plus long-term debt, net of current portion, at carrying value net of issuance costs and discounts; equals the debt note total; lease liabilities are not added | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 15; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 17; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |
| Cash & Equivalents | 50,583 | 56,293 | 64,542 | 591,576 | 61,743 | USD thousands | Issuer-printed cash and cash equivalents; no restricted cash or short-term investments are presented | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt (carrying value) / EBITDA (Reported) | 2,020.448 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | -104.448 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | FY2024 / 2024-12-28 | USD | US$m | Not calculable: the denominator is negative, so a ratio on it is not calculable | Not Calculable | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,969.865 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | -104.448 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | FY2024 / 2024-12-28 | USD | US$m | Not calculable: the denominator is negative, so a ratio on it is not calculable | Not Calculable | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | -104.448 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 142.424 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | FY2024 / 2024-12-28 | USD | US$m | -0.73 | Calculated | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| Total debt / adjusted EBITDA | Total debt (carrying value) / EBITDA (Adjusted) | 2,020.448 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 295.413 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | FY2024 / 2024-12-28 | USD | US$m | 6.84 | Calculated | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,969.865 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 295.413 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | FY2024 / 2024-12-28 | USD | US$m | 6.67 | Calculated | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 295.413 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 142.424 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | FY2024 / 2024-12-28 | USD | US$m | 2.07 | Calculated | Tier 1 (audited) | 52-week year; reported EBITDA is negative because of impairments |
| Total debt / EBITDA | Total debt (carrying value) / EBITDA (Reported) | 1,950.076 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 168.12 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 2026-01-03 | USD | US$m | 11.60 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,893.783 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 168.12 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 2026-01-03 | USD | US$m | 11.26 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 168.12 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 149.039 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 2026-01-03 | USD | US$m | 1.13 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| Total debt / adjusted EBITDA | Total debt (carrying value) / EBITDA (Adjusted) | 1,950.076 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 272.2 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 2026-01-03 | USD | US$m | 7.16 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,893.783 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 272.2 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 2026-01-03 | USD | US$m | 6.96 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 272.2 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 149.039 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 2026-01-03 | USD | US$m | 1.83 | Calculated | Tier 1 (audited) | 53-week year with a 14-week fourth quarter |
| Total debt / EBITDA | Total debt (carrying value) / EBITDA (Reported) | 2,039.854 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 131.914 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 15.46 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,978.111 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 131.914 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 15.00 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 131.914 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 137.053 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 | 2026-10-03 | USD | US$m | 0.96 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| Total debt / adjusted EBITDA | Total debt (carrying value) / EBITDA (Adjusted) | 2,039.854 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 284.56 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 7.17 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,978.111 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 284.56 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 6.95 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 284.56 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 137.053 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 | 2026-10-03 | USD | US$m | 2.08 | Calculated | Tier 2b (audited year plus unaudited interim periods) | 53-week twelve-month window built from the supplied filings (calculation R3) |
| Gross margin | Gross profit / Net sales x 100 | 398.817 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 1,828.687 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 2026-01-03 | USD | US$m | 21.81 | Calculated | Tier 1 (audited) | Percent; fiscal 2025, 53 weeks |
| EBITDA margin (Reported) | EBITDA (Reported) / Net sales x 100 | 168.12 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 1,828.687 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 2026-01-03 | USD | US$m | 9.19 | Calculated | Tier 1 (audited) | Percent; includes impairments |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales x 100 | 272.2 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 1,828.687 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 2026-01-03 | USD | US$m | 14.88 | Calculated | Tier 1 (audited) | Percent; issuer-adjusted |
| Net sales growth | (FY2025 Net sales / FY2024 Net sales - 1) x 100 | 1,828.687 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 1,932.454 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 2026-01-03 | USD | US$m | -5.37 | Calculated | Tier 1 (audited) | Percent; 53 weeks against 52 weeks, with divestitures reducing net sales |
| Free cash flow conversion | Free cash flow / EBITDA (Adjusted) x 100 | 70.749 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 272.2 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 | 2026-01-03 | USD | US$m | 25.99 | Calculated | Tier 1 (audited) | Percent; free cash flow is operating cash flow less capital expenditures, before dividends and acquisitions |
| Capital expenditures / Net sales | Capital expenditures / Net sales x 100 | 30.647 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 1,828.687 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99 | 2026-01-03 | USD | US$m | 1.68 | Calculated | Tier 1 (audited) | Percent; total capital expenditures only |
| Operating cash flow / Total debt | Net cash from operating activities / Total debt x 100 | 101.396 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 1,950.076 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119 | 2026-01-03 | USD | US$m | 5.20 | Calculated | Tier 1 (audited) | Percent; carrying-value debt |
| EBITDA less capital expenditures / cash interest | (EBITDA (Reported) - Capital expenditures) / cash interest paid | 137.473 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 149.039 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 2026-01-03 | USD | US$m | 0.92 | Calculated | Tier 1 (audited) | Times; reported EBITDA less total capital expenditures |
| Liquidity / Total debt | (Cash + undrawn committed facilities) / Total debt x 100 | 116.843 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 20 | 2,039.854 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 2026-10-03 | USD | US$m | 5.73 | Calculated | Tier 2b (unaudited) | Percent; undrawn is the revolver availability net of letters of credit as printed |
| Senior secured debt / EBITDA (principal basis, reported) | Senior secured principal / EBITDA (Reported) | 1,595.315 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 131.914 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 12.09 | Calculated | Tier 2b (audited year plus unaudited interim periods) | Times; principal, not carrying value, so it is labelled; secured is the revolver, term loans and 8.00% secured notes |
| Senior secured debt / adjusted EBITDA (principal basis) | Senior secured principal / EBITDA (Adjusted) | 1,595.315 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 | 284.56 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | 2026-10-03 | USD | US$m | 5.61 | Calculated | Tier 2b (audited year plus unaudited interim periods) | Times; principal basis; mixes two add-back definitions |
| Free cash flow, fiscal 2025 | Net cash from operating activities - Capital expenditures | 101.396 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 30.647 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 100–101 | 2026-01-03 | USD | US$m | 70.749 | Calculated | Tier 1 (audited) | Before dividends and acquisitions; a difference, not a ratio |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-28_bgs_bgs-20241228x10k.htm.jsonl | Annual report on Form 10-K | Fiscal 2024 (52 weeks ended 2024-12-28) with fiscal 2023 and 2022 | USD | thousands | B&G Foods, Inc. consolidated with its subsidiaries | US GAAP | Tier 1 (audited) | Cross-check of fiscal 2024 comparatives and segment data; debt at the end of fiscal 2024 | Superseded by the fiscal 2025 report for any current fact |
| 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl | Annual report on Form 10-K | Fiscal 2025 (53 weeks ended 2026-01-03) with fiscal 2024 and 2023 | USD | thousands | B&G Foods, Inc. consolidated with its subsidiaries | US GAAP | Tier 1 (audited) | Fiscal year statements, non-GAAP reconciliation, debt note, segments and pension funded status | 53-week year; the adjusted EBITDA definition differs from the 2026 reports |
| 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 (13 weeks ended 2026-04-04) | USD | thousands | B&G Foods, Inc. consolidated with its subsidiaries | US GAAP | Tier 2b (unaudited; no auditor review stated) | Balance sheet and debt at 2026-04-04; the new adjusted EBITDA add-back | Interim; no discrete Q1 income statement column is built |
| 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 (13 weeks ended 2026-07-04) | USD | thousands | B&G Foods, Inc. consolidated with its subsidiaries | US GAAP | Tier 2b (unaudited; no auditor review stated) | Balance sheet and debt at 2026-07-04; refinancing timing | The balance sheet is at a refinancing-timing peak for debt and cash |
| 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026 (13 weeks) and 39 weeks ended 2026-10-03 | USD | thousands | B&G Foods, Inc. consolidated with its subsidiaries | US GAAP | Tier 2b (unaudited; no auditor review stated) | Latest statements, debt, cash flows, segments, non-GAAP reconciliation and events after quarter end | Covenant ratios are not printed; legal documents are summarised |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B&G Foods, Inc. | Issuer, borrower and registrant; a holding company whose principal assets are the shares of its subsidiaries | Saturday closest to December 31: 2026-01-03 for fiscal 2025 and 2027-01-02 for fiscal 2026 | USD | thousands | Consolidated with its wholly owned subsidiaries | US GAAP | FY2024, FY2025, Q1 2026, Q2 2026, Q3 2026, 9M 2025, 9M 2026, Q3 2025 |
| Domestic subsidiaries | Guarantors of the credit agreement and both note issues: all existing and certain future domestic subsidiaries | Same as the issuer | USD | thousands | Inside the consolidated statements; only summarized combined guarantor information for 39 weeks is printed | US GAAP | 9M 2026 and the 2026-10-03 balance sheet summarized |
| Foreign subsidiaries | Not guarantors; include the Canadian business and a Mexican manufacturing facility | Same as the issuer | USD (Canadian dollar and Mexican peso exposures are named; functional currencies are not stated) | thousands | Inside the consolidated statements; not separately reported | US GAAP | Not separately stated |

Subsequent events flagged by date: the sale of the B&M and Joan of Arc brands on October 13, 2026, the dividend paid on October 30, 2026, and the termination on October 5, 2026 of the agreement to sell Green Giant Canada. The source readiness answer lists the first two and omits the third, which is stated in the third quarter report; the termination has no effect on net debt and is kept out of the period figures.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 14; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 39; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69; Source readiness (CP-0)

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Money tables restate the printed thousands as millions without rounding | All five filings | Unit | 2,039,854 (USD thousands) | 2,039.854 (US$m) | The money tables use a common millions unit; three decimals keep every printed digit | All periods |
| Total Debt is carrying value, not principal | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | Debt basis | Principal 2,070,315 (USD thousands) | Carrying value 2,039,854 (USD thousands) | The method sets carrying value net of issuance costs and discounts as the leverage numerator; the difference of -30,461 is reconciled | 2026-10-03 |
| Lease liabilities kept out of Total Debt | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | Debt perimeter | Operating lease liabilities 14,703 current and 36,149 long-term (USD thousands) | Excluded from Total Debt | The issuer presents them on their own balance-sheet lines; the finance lease at 2024-12-28 (726 current) is likewise excluded | All balance sheet dates |
| Twelve-month figures are constructed, never reported | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | Derived period | Fiscal 2025 plus 39 weeks of 2026 less 39 weeks of 2025 | 53 weeks to 2026-10-03 | Latest full year plus current stub less prior-year comparable stub; every component is available and the stubs are both 39 weeks | 2026-10-03 |
| Printed dashes are carried as not supplied | All five filings | Missing value | — | Not supplied: printed as a dash | The method treats a source dash as a missing value, not zero; the maturity ladder's fiscal 2030 dash is the one exception, read as zero because the schedule total reconciles | Rows with dashes |
| No currency conversion | All five filings | Currency | USD | USD | Every statement is in United States dollars; no FX rate is needed or applied | All periods |
| No analyst normalization of EBITDA | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl | None | EBITDA (Reported) and EBITDA (Adjusted) as the issuer states them | Unchanged | Both issuer measures are shown, labelled; the add-back definition change is logged, not adjusted | All periods |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM (53 weeks to 2026-10-03) | USD 168.12m | USD 86.37m | USD 122.576m | USD 131.914m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | Components comparable; the window spans 53 weeks including a 14-week fourth quarter of 2025 |
| EBITDA (Adjusted) | LTM (53 weeks to 2026-10-03) | USD 272.2m | USD 199.885m | USD 187.525m | USD 284.56m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 | The fiscal 2025 component excludes the add-back for losses on sales and disposals of property, plant and equipment that the two 39-week components include |
| Net sales | LTM (53 weeks to 2026-10-03) | USD 1,828.687m | USD 1,251.993m | USD 1,289.131m | USD 1,791.549m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 6 | Divestitures and the March 2026 acquisition change the perimeter inside the window |
| Cash interest paid | LTM (53 weeks to 2026-10-03) | USD 149.039m | USD 120.182m | USD 132.168m | USD 137.053m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 9 | Cash-flow supplemental disclosure; excludes the full-year effect of the 2031 notes |
| Net cash from operating activities | LTM (53 weeks to 2026-10-03) | USD 101.396m | USD 29.566m | USD 5.95m | USD 125.012m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 | 53-week window |
| Capital expenditures | LTM (53 weeks to 2026-10-03) | USD -30.647m | USD -17.752m | USD -22.86m | USD -25.539m | Calculated | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 | Outflows are negative; total only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Segment net sales (USD thousands) | Specialty | 679,076 | 629,976 | 419,785 | 422,740 | Annual falling; 39 weeks rising | Largest segment; the fiscal 2025 decline was mostly lower volumes, lower net pricing and product mix, with the Don Pepino sale a smaller effect |
| Segment net sales (USD thousands) | Meals | 462,397 | 444,426 | 320,187 | 358,213 | Annual falling; 39 weeks rising | The 2026 rise includes the College Inn and Kitchen Basics acquisition |
| Segment net sales (USD thousands) | Frozen & Vegetables | 395,785 | 358,571 | 259,506 | 172,681 | Annual falling; 39 weeks falling | Shrinking with the Le Sueur and Green Giant U.S. frozen divestitures |
| Segment net sales (USD thousands) | Spices & Flavor Solutions | 395,196 | 395,714 | 289,653 | 298,359 | Annual rising; 39 weeks rising | Broadly stable |
| Segment net sales (USD thousands) | Total segment net sales | 1,932,454 | 1,828,687 | 1,289,131 | 1,251,993 | Annual falling; 39 weeks falling | Equals reported net sales in every period |
| Segment adjusted EBITDA (USD thousands) | Specialty | 170,137 | 159,685 | 103,894 | 83,722 | Annual falling; 39 weeks falling | Highest-earning segment in fiscal 2024 and 2025; second to Spices & Flavor Solutions in 39 weeks of 2026, and falling |
| Segment adjusted EBITDA (USD thousands) | Meals | 101,053 | 106,596 | 74,598 | 75,536 | Annual rising; 39 weeks rising | Stable to rising |
| Segment adjusted EBITDA (USD thousands) | Frozen & Vegetables | 9,522 | -331 | -28 | 9,114 | Annual falling; 39 weeks rising | Near break-even: negative in fiscal 2025 and in 39 weeks of 2025, positive in 39 weeks of 2026 |
| Segment adjusted EBITDA (USD thousands) | Spices & Flavor Solutions | 110,848 | 99,919 | 76,787 | 93,576 | Annual falling; 39 weeks rising | Fell in fiscal 2025 and is rising in 39 weeks of 2026 |
| Segment adjusted EBITDA (USD thousands) | Total segment adjusted EBITDA | 391,560 | 365,869 | 255,251 | 261,948 | Annual falling; 39 weeks rising | Before unallocated corporate expenses |
| Segment adjusted EBITDA (USD thousands) | Unallocated corporate expenses | 96,147 | 93,669 | 67,726 | 62,063 | Annual falling; 39 weeks falling | Total segment adjusted EBITDA less these expenses equals Adjusted EBITDA in every period |

Segment figures are the issuer's own definition, in USD thousands; the segment note states that total assets by segment are not reviewed by the chief operating decision maker, so no segment asset figure exists.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 145; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 85; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 38–39; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 64–65

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA / adjusted EBITDA add-backs | Reported EBITDA is the primary measure; adjusted EBITDA is shown beside it, labelled | From the first quarter of 2026 the issuer also adds back losses on sales and disposals of property, plant and equipment (5,734 for 39 weeks of 2026 and 1,029 for 39 weeks of 2025, USD thousands); the fiscal 2025 report did not (1,134, USD thousands, in the cash flow statement) | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 45 | Twelve months to 2026-10-03 | 1,134 thousand USD, or 0.40% of twelve-month adjusted EBITDA; not adjusted | Use the issuer figures as stated and flag the mix; an aligned figure would need the issuer's restated fiscal 2025 adjusted EBITDA |
| EBITDA used for covenants | Reported EBITDA | Covenants use adjusted EBITDA as defined in the credit agreement, before share-based compensation, which the filings do not reproduce | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 21 | All periods | Reported 131,914 against adjusted 284,560 for the twelve months (USD thousands), a gap of 152,646; covenant EBITDA is not stated | Covenant headroom is not established from these filings |
| Total debt | Carrying value, current plus long-term, net of issuance costs and discounts | Principal 2,070,315 and carrying value 2,039,854; instrument carrying values of 2,056,115 are net of discount only, with deferred financing costs of 16,261 shown separately (USD thousands) | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 | 2026-10-03 | Principal exceeds carrying value by 30,461 thousand USD, or 1.47%; reconciled in one row | Carrying value is used in every ratio; principal is labelled where used |
| Net debt | Total debt less cash and cash equivalents | The issuer states net debt of 2,008.6 million USD as principal less cash, a different basis from carrying value less cash of 1,978.111 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 70 | 2026-10-03 | 30.461 million USD | The issuer's figure is principal-based; the carrying-value figure is used |
| Lease liabilities and pensions | Lease liabilities on their own lines are not added to Total Debt | Operating lease liabilities of 50,852 thousand USD sit outside debt; the pension plans are funded, with a funded status of 31,979 thousand USD at 2026-01-03; a multi-employer withdrawal liability with a present value of about 11.3 million USD is in liabilities | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 32; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 134; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 30 | All periods | Operating lease liabilities are about 2.5% of total debt; the overfunded pension plans add no debt-like claim | Kept outside debt and named here |
| Interest | Cash interest paid is the coverage denominator | Interest expense, net of 119,086 thousand USD for 39 weeks of 2026 against cash interest paid of 120,182 thousand USD | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 6; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 9 | 9M 2026 | 1,096 thousand USD | Cash interest paid is used; the two are kept apart |
| Refinancing in 2026 (one event, several figures) | One conflict row with all figures and their roles | The 2031 notes: face 475,000 and issue price 97.67% of face, so an issue discount of about 11,068, with 10,587 unamortized at 2026-10-03 (14,200 across all instruments); the cash flow statement prints proceeds at face 475,000 and debt financing costs paid of 18,413; the 2027 notes of 509,310 were redeemed with payment on 2026-07-06 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 9; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 36 | Q2 2026, Q3 2026 | The report does not say where the issue discount appears in the cash flow statement; 11,068 thousand USD | Cash flow lines are used as printed; the balance sheet debt figures carry the net effect |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover on reported EBITDA | Ready with Limitations | Fiscal 2024 reported EBITDA is negative so its leverage ratios are not calculable; the twelve-month window spans 53 weeks | State the week count with every twelve-month figure |
| Leverage and interest cover on issuer-adjusted EBITDA | Ready with Limitations | The twelve-month figure mixes two add-back definitions by about 0.40% | Use as stated with the flag; obtain the restated fiscal 2025 adjusted EBITDA if an aligned figure is needed |
| Liquidity and maturity profile | Ready | Facility availability is as printed in the filings; the credit agreement itself is not supplied | None beyond obtaining the agreement for covenant work |
| Debt by instrument, rank and security | Ready with Limitations | Ranking and security are from the filings' summaries, not the indentures | Obtain the executed indentures and credit agreement |
| Covenant headroom | Not Ready | Measured covenant ratios and the credit-agreement EBITDA definition are not in the filings | Obtain the compliance calculation or the definitions |
| Subsequent events and pro forma net debt | Ready with Limitations | The B&M sale is subject to adjustments and the dividend amount is the payable at quarter end | Confirm both amounts against a later filing |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving credit loans due 2028 | Revolving credit facility | 355,000 | 355,000 | 355,000 | 430,000 | Secured by substantially all assets of the issuer and its domestic subsidiaries except real property | Senior secured; pari passu with the term loans and the 8.00% senior secured notes | USD | 355,000 | Not applicable | SOFR plus 1.50% to 2.00% by leverage ratio, or base rate plus 0.50% to 1.00%; weighted average 5.89% at 2026-10-03; commitment fee 0.50% on the unused portion | Floating | SOFR | 150 to 200 by leverage ratio | Not applicable | 2028-12-16 | 0 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 20; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| Tranche B term loans due 2029 | Term loan | 437,979 | 441,000 | 441,000 | Not applicable | Secured by substantially all assets of the issuer and its domestic subsidiaries except real property | Senior secured; pari passu with the revolver and the 8.00% senior secured notes | USD | 437,979 | Not applicable | SOFR plus 3.50% or base rate plus 2.50%; weighted average 7.40% at 2026-10-03 | Floating | SOFR | 350 | Not applicable | 2029-10-10 | 4,500 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| 8.00% senior secured notes due 2028 | Senior secured notes | 798,723 | 799,315 | Not applicable | Not applicable | Secured by first-priority liens on substantially all assets except real property and certain intangibles, shared with the credit agreement | Senior secured; pari passu with the credit agreement debt | USD | 798,723 | Not applicable | 8.00% fixed; interest on March 15 and September 15 | Fixed | Not applicable | Not applicable | Not applicable | 2028-09-15 | 0 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 22; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 23; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| 11.00% senior notes due 2031 | Senior unsecured notes | 464,413 | 475,000 | Not applicable | Not applicable | Unsecured; general unsecured obligations guaranteed by domestic subsidiaries | Senior unsecured; effectively junior to secured debt and to non-guarantor subsidiaries' liabilities; pari passu with other unsecured senior debt | USD | 464,413 | Not applicable | 11.00% fixed; issued 2026-06-10 at 97.67% of face; interest on June 15 and December 15 | Fixed | Not applicable | Not applicable | Not applicable | 2031-06-15 | 0 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 25; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| Financing cost adjustment | Unamortized deferred debt financing costs | -16,261 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -16,261 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |

Instrument carrying values are the issuer's, net of discount only; the revolver's own deferred financing costs are not shown separately in the quarterly debt table, so the single financing cost adjustment row carries the aggregate of 16,261 thousand USD. Amounts are USD thousands as printed.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27; calculation R16

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 8 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 2 |
| Fields present | 26 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 2 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| R1 | Net debt change from 2026-01-03 to 2026-10-03 (USD thousands) | 1,978,111 - 1,893,783 | 84,328 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 98 |
| R2 | Acquisition and dividends against asset sale proceeds and operating cash flow, 39 weeks of 2026 (USD thousands) | 109,655 + 38,341 = 147,996; 61,437 + 29,566 = 91,003; 147,996 - 91,003 | 56,993 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| R3 | Weeks in the twelve-month window to 2026-10-03 | Fiscal 2025 of 53 weeks less 39 weeks of 2025 gives a fourth quarter of 14 weeks, the printed figure; 14 + 39 | 53 weeks | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 6; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 5–6 |
| R4 | EBITDA (Reported), twelve months to 2026-10-03 (USD thousands) | 168,120 + 86,370 - 122,576 | 131,914 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| R5 | EBITDA (Adjusted), twelve months to 2026-10-03 (USD thousands) | 272,200 + 199,885 - 187,525 | 284,560 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| R6 | Cash interest paid, twelve months to 2026-10-03 (USD thousands) | 149,039 + 120,182 - 132,168 | 137,053 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 9 |
| R7 | Net sales, twelve months to 2026-10-03 (USD thousands) | 1,828,687 + 1,251,993 - 1,289,131 | 1,791,549 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 6 |
| R8 | Operating cash flow and capital expenditures, twelve months to 2026-10-03 (USD thousands) | 101,396 + 29,566 - 5,950; -30,647 + (-17,752) - (-22,860) | 125,012 and -25,539 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 |
| R9 | Leverage at 2026-10-03: net debt 1,978,111 and total debt 2,039,854 over twelve-month EBITDA (USD thousands) | 1,978,111 / 284,560; 1,978,111 / 131,914; 2,039,854 / 284,560; 2,039,854 / 131,914 | 6.95x; 15.00x; 7.17x; 15.46x | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |
| R10 | Cover at 2026-10-03 over twelve-month cash interest paid (USD thousands) | 284,560 / 137,053; 131,914 / 137,053 | 2.08x; 0.96x | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| R11 | Free cash flow, 39 weeks of 2026 (USD thousands) | 29,566 - 17,752 | 11,814 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 |
| R12 | Dividends paid less free cash flow, 39 weeks of 2026 (USD thousands) | 38,341 - 11,814 | 26,527 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8 |
| R13 | Fiscal 2028 maturities (USD thousands) | Revolver 355,000 + 8.00% senior secured notes 799,315 + term loan amortization; the schedule total of 1,157,690 less 1,154,315 leaves 3,375, which is three quarterly payments of 1,125 | 1,157,690 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |
| R14 | Add-back definition difference against twelve-month adjusted EBITDA (USD thousands) | 1,134 / 284,560 | 0.40% | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 101; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 52 |
| R15 | Reconciling items between principal and carrying value at 2026-10-03 (USD thousands) | -16,261 + -14,200 | -30,461 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |
| R16 | Instrument carrying values to Total Debt at 2026-10-03 (USD thousands) | 355,000 + 437,979 + 798,723 + 464,413 - 16,261 | 2,039,854 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| R17 | Discount by instrument against the unamortized discount (USD thousands) | 441,000 - 437,979 = 3,021; 799,315 - 798,723 = 592; 475,000 - 464,413 = 10,587; 3,021 + 592 + 10,587 | 14,200 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 27 |
| R18 | Revolver availability at 2026-10-03 (USD million) | Commitments 430.0 - loans 355.0 - letters of credit 19.9; printed 55.1 | 55.1 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 20 |
| R19 | Pro forma net debt for each event after 2026-10-03 (USD thousands) | 1,978,111 - 8,000; 1,978,111 + 7,708 | 1,970,111; 1,985,819 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 14; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69 |
| R20 | Dividends paid in 39 weeks plus the payable at 2026-10-03 against the printed fiscal 2026 total (USD thousands) | 38,341 + 7,708 | 46,049, which agrees with the printed 46.0 million USD | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69 |
| R21 | Segment adjusted EBITDA less unallocated corporate expenses, fiscal 2025 (USD thousands) | 365,869 - 93,669 | 272,200, equal to Adjusted EBITDA | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 145; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77 |
| R22 | Issue discount on the 2031 notes (USD thousands) | 475,000 x (1 - 0.9767) | 11,067.5 | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24 |
| R23 | EBITDA identity, fiscal 2025 (USD thousands) | -43,257 + -4,477 + 149,631 + 66,223 | 168,120 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 100 |
| R24 | Balance sheet identity at 2026-10-03 (USD thousands) | 2,517,668 + 354,641 | 2,872,309, equal to total assets | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5 |
| R25 | Cash roll-forward, 39 weeks of 2026 (USD thousands) | 29,566 + -65,970 + 42,146 + -292 = 5,450; 56,293 + 5,450 | 61,743, equal to closing cash | 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 8–9 |
| R26 | Comparatives across filings (USD thousands) | Cash 56,293, total assets 2,834,795, total liabilities 2,381,870 at 2026-01-03 in all four filings; fiscal 2024 net sales 1,932,454 and net loss -251,251 in both annual reports | Differences 0 | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, pages 98–99; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 5; 10-K_2024-12-28_bgs_bgs-20241228x10k.htm.jsonl, page 96 |
| R27 | Principal by date (USD thousands) | 2024-12-28 2,044,315; 2026-01-03 1,968,000; 2026-04-04 2,021,875; 2026-07-04 2,555,750; 2026-10-03 2,070,315, each the sum of the instrument principals | As listed | 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 119; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 15; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 17; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 19 |

## Gaps

- High: the measured covenant ratios and the credit agreement's EBITDA definition are not in any filing, so covenant headroom is not established; the leverage covenant steps down from 7.50x to 7.25x for the quarter ending January 2, 2027 and to 7.00x from April 3, 2027. Action: obtain the compliance calculation or the credit agreement definitions.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 21
- High: reported EBITDA for fiscal 2024 is negative, so total debt and net debt over reported EBITDA are not calculable for that year and are shown as not supplied in the leverage table. Action: none beyond reading the adjusted ratios beside it.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 99
- Medium: fiscal 2025 has 53 weeks with a 14-week fourth quarter, so every twelve-month figure to October 3, 2026 spans 53 weeks. Action: state the week count wherever a twelve-month figure is used.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 6; calculation R3
- Medium: the twelve-month adjusted EBITDA mixes two add-back definitions by about USD 1,134 thousand, or 0.40%, because losses on sales and disposals of property, plant and equipment are added back from 2026 but not in the fiscal 2025 report. Action: obtain the issuer's restated fiscal 2025 adjusted EBITDA.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 77; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, pages 50–52; 10-Q_2026-04-04_bgs_bgs-20260404x10q.htm.jsonl, page 45; calculation R14
- Medium: the balance sheet at July 4, 2026 carries both the 2027 and the 2031 notes and cash of USD 591,576 thousand because the redemption was paid on July 6, 2026; gross debt and cash for that date are not comparable. Action: read the July 4, 2026 liquidity and net debt rows with the redemption timing.
Basis: 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 5; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 17; 10-Q_2026-07-04_bgs_bgs-20260704x10q.htm.jsonl, page 36
- Medium: the dividend amount in the post-balance-sheet table is the dividends payable at quarter end, and the sale price of the B&M and Joan of Arc brands is subject to post-closing adjustments; both are shown as stated and not yet reflected in EBITDA. Action: confirm against the next quarterly report.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 14; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 69; calculation R19; calculation R20
- Medium: the source readiness answer lists two events after quarter end and omits a third, the October 5, 2026 termination of the agreement to sell Green Giant Canada, which has no effect on net debt; this answer corrects that omission. Action: none; the earlier answer cannot be edited.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 39; Source readiness (CP-0)
- Low: lines printed as a dash in the source are carried as not supplied rather than zero, and lines whose labels differ between the annual and quarterly reports are kept as separate rows with the other columns not supplied. Action: none.
- Low: capital expenditures are given in total only, with no maintenance and growth split. Action: none available in the filings.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 8
- Low: the issue discount on the 2031 notes is not located in the cash flow statement, which prints proceeds at face and debt financing costs of USD 18,413 thousand. Action: confirm with the issuer's note disclosure.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 9; 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 24; calculation R22
- Low: undrawn facility amounts are the issuer's printed availability net of letters of credit; no facility agreement is supplied to test them. Action: obtain the credit agreement.
Basis: 10-Q_2026-10-03_bgs_bgs-20261003x10q.htm.jsonl, page 20
- Low: no segment assets are reported, and the pension plans are funded with a funded status of USD 31,979 thousand at January 3, 2026, so no pension deficit is added to debt. Action: none.
Basis: 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 134; 10-K_2026-01-03_bgs_bgs-20260103x10k.htm.jsonl, page 145

## Next module

The orchestrator selects the next module.

