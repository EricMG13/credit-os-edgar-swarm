---
issuer_id: ahco
module_id: CP-1
analysis_date: 2026-11-05
---

# AdaptHealth Corp. — Financial foundation, as of 2026-11-05

## Request

AdaptHealth Corp. (Nasdaq: AHCO), as of 2026-11-05, credit snapshot pathway. This module extracts and normalises the issuer's financial statements for FY2024, FY2025 and the 2026 interim periods into statement tables, a calculation register, a debt reconciliation and definition conflicts. It draws no credit recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_ahco-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 (signature date; filing date not stated) | ab2ec08f93eea99a2c9d582aaa2f8bd4d1c4f2aa62641d3b784e702a3bdcc76c | FY2024 and FY2025 statements, EBITDA reconciliation, segments, debt note, liquidity. |
| 10-Q_2026-03-31_ahco-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-05 | cc01aa88546035b041251eaca53354757481e77019d2aa4177a669ddd6279ff0 | Perimeter check: first-quarter statements still include Diabetes Health; December 31, 2025 comparatives as originally reported. |
| 10-Q_2026-06-30_ahco-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | 6f9505a3792b53d02437ac824331bcd7d04f44b090fdd001f46d6c8128891c95 | Perimeter check: first quarterly report with Diabetes Health as discontinued operations. |
| 10-Q_2026-09-30_ahco-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-03 | 9972ed3f9dddf422ff2b662dabdd681108366e28bd8c4ae70359b4ed7246cede | Third-quarter and nine-month 2026 statements, balance sheet at September 30, 2026, debt note, liquidity. |
| EX-99.1_2026-05-05_ahco-20260505x8k_ex991.htm.jsonl | Earnings release (Exhibit 99.1 to a Form 8-K) for the first quarter of 2026 | 2026-05-05 | f3ab001bcc2c9ba7977e50b28183c49771c9b8a0719329baefd53ef80e8618f7 | Perimeter and guidance basis of the first-quarter release. |
| EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl | Earnings release (Exhibit 99.1 to a Form 8-K) for the second quarter of 2026 | 2026-08-04 | 0b36996a99a75e0d1a0ef0e6f97fbb42fdcb41f16a689bade487fa2dab0dc23a | Guidance bridge and the corporate overhead that stays in continuing operations. |
| EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl | Earnings release (Exhibit 99.1 to a Form 8-K) for the third quarter of 2026 | 2026-11-03 | 8001e1aa0b352faa53a1b3726a1c918e40448a376cbe7f6418edd3708c625e0c | Third-quarter headline figures, organic growth and operating indicators. |

| Module | Document | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness handoff for this run, as of 2026-11-05 | 2ce67249fc3111a4e52c1cfdb21a30ff8045cd60d9df2e21ccee684aef4f35b6 | Source inventory, perimeter conflict and gaps carried into this module. |

## Findings

### Bottom line

AdaptHealth's FY2025 net leverage was 3.45x reported EBITDA, up from 2.98x, but no trailing leverage can be stated for September 30, 2026 because earnings after the Diabetes Health reclassification are continuing-operations only, so creditors lack a clean current leverage figure.
Basis: calculation K1; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 27

Net debt rose to USD 1,803.17 million at September 30, 2026 from USD 1,630.16 million at year-end, and nine-month free cash flow was close to zero, while the April 2026 refinancing funded the redemption of the 2028 notes through amortising secured term loans.
Basis: calculation N2; calculation N3; calculation F4; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 38–43

### Key findings

Reported leverage worsened in FY2025 while adjusted leverage improved, so the direction turns on whether goodwill impairment is treated as recurring: net debt to reported EBITDA moved from 2.98x to 3.45x, and net debt to the issuer's adjusted EBITDA from 2.72x to 2.64x, with the FY2025 impairment arising in the Diabetes Health reporting unit that is now being sold.
Basis: calculation K1; calculation K2; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 97

Interest cover on reported EBITDA fell from 5.14x to 4.67x in FY2025 even though cash interest paid fell with lower debt, and on adjusted EBITDA cover rose from 5.64x to 6.09x, so the quality of earnings, not the interest bill, drives the change.
Basis: calculation K1; calculation K2; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130

Cash generation weakened sharply in 2026: nine-month operating cash flow of USD 395.61 million was almost fully absorbed by capital spending of USD 392.98 million, leaving free cash flow of USD 2.63 million against USD 140.1 million a year earlier (cash flows include discontinued operations), while USD 127.42 million went on acquisitions and net debt rose.
Basis: calculation F3; calculation F4; calculation R1; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8

Liquidity at September 30, 2026 was cash of USD 80.69 million plus USD 268.7 million of revolver availability after letters of credit, and no principal falls due before 2029 beyond scheduled amortisation, but the credit facilities carry a springing maturity that could pull them forward to May 2029 if more than USD 150.0 million of the notes due 2029 remain outstanding.
Basis: calculation U2; calculation R1; calculation M1; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–43

The debt stack shifted from unsecured to secured and amortising: the notes due 2028 were redeemed in August 2026 with a USD 325.0 million delayed-draw term loan, scheduled amortisation began in September 2026, and the filings state no covenant level, so headroom cannot be tested against the covenants themselves.
Basis: 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–43

### Contrary evidence and what would change the view

The strongest evidence against a deteriorating view is that adjusted leverage fell in FY2025 to 2.64x, that the issuer states covenant compliance at September 30, 2026 with USD 268.7 million still borrowable under the covenants, and that third-quarter organic revenue growth was 12.8%. This view would change if the issuer restates FY2025 on continuing operations and trailing adjusted leverage then proves lower than the FY2025 figure, or if the executed credit agreement shows covenant levels well clear of the current ratios.
Basis: calculation K2; calculation U2; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 41; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 1

### Limitations

- Trailing leverage and interest cover at September 30, 2026 are not established, so any conclusion about current leverage waits for a restated full year on the continuing-operations basis.
- Covenant levels and the issuer's reported covenant ratios are not printed, so liquidity headroom rests on the borrowing limit the issuer states and not on a covenant test.
- Debt by instrument is stated at principal because carrying values by instrument are not disclosed, and the maturity ladder uses amortisation amounts printed to one decimal, so the final-maturity amount carries rounding of up to USD 0.1 million.
- FY2024 and FY2025 earnings include Diabetes Health while the nine-month and third-quarter columns exclude it, so a growth rate across those columns compares different perimeters.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3.15 | 2.98 | x | Reported EBITDA (issuer definition, before add-backs) of US$m 628.021; gross and net debt at balance-sheet carrying value; FY2024 earnings include Diabetes Health. |
| FY2025 / 2025-12-31 | 3.67 | 3.45 | x | Reported EBITDA (issuer definition, before add-backs) of US$m 472.526; gross and net debt at balance-sheet carrying value; FY2025 earnings include Diabetes Health. |
| 2026-09-30 | Not supplied: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not supplied: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | x | Trailing twelve-month EBITDA needs a full-year continuing-operations figure that no source states; the 9M 2026 figure alone is not a twelve-month measure. |

Reported EBITDA includes the goodwill impairment charges, so the reported ratios are higher than the adjusted ratios kept in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 5.14 | x | Reported EBITDA of US$m 628.021 over cash interest paid of US$m 122.072 (cash flow statement); FY2024 earnings include Diabetes Health. |
| FY2025 / 2025-12-31 | 4.67 | x | Reported EBITDA of US$m 472.526 over cash interest paid of US$m 101.243 (cash flow statement); FY2025 earnings include Diabetes Health. |
| 2026-09-30 | Not supplied: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | x | Trailing twelve-month EBITDA is not established; nine-month cash interest paid is stated but is not a twelve-month figure. |

Cash interest paid differs from net interest expense in the income statement, and the two are kept apart.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 109.747 | Not supplied: letters of credit outstanding at 2024-12-31 are not stated, so availability net of letters of credit cannot be worked (commitments of US$m 300.0, no borrowings) | US$m | Cash is the balance sheet figure; the revolver commitment and nil borrowings are stated for the 2024 revolver. |
| FY2025 / 2025-12-31 | 106.136 | 273.700 | US$m | Revolver commitments 300.0 less borrowings nil less letters of credit 26.3; equals the amount the issuer states it could borrow under the covenants. |
| 2026-09-30 | 80.687 | 268.700 | US$m | Revolver commitments 450.0 less borrowings 147.0 less letters of credit 34.3; equals the amount the issuer states it could borrow under the covenants; the delayed-draw term loan is fully drawn. |

Availability is stated net of letters of credit and does not test any covenant level, which the filings do not print.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 4.000 | US$m | Remaining 2026: December 31, 2026 amortisation of 2.0 on each of the two term loans. Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |
| FY2027 | 16.000 | US$m | Four quarterly payments of 2.0 on each term loan. Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |
| FY2028 | 22.300 | US$m | Term loan 12.2 (two payments of 2.0, two of 4.1) and delayed-draw term loan 10.1 (three of 2.0, one of 4.1). Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |
| FY2029 | 532.800 | US$m | Four quarterly payments of 4.1 on each term loan (32.8) plus the 4.625% senior notes of 500.0 due August 1, 2029. Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |
| FY2030 | 632.800 | US$m | Amortisation of 32.8 plus the 5.125% senior notes of 600.0 due March 1, 2030. Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |
| FY2031 | 687.069 | US$m | Final amortisation of 4.1 on each term loan, the balance of the term loans at April 2031 (531.869) and the revolver borrowings of 147.0. Contractual dates only; the secured facilities mature in April 2031 but carry a springing maturity 91 days before August 1, 2029 (2029-05-02) if more than US$m 150.0 of the 4.625% notes remain. |

The quarterly amortisation amounts are printed to one decimal, so each year carries small rounding.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Basis |
|---|---|---|---|---|---|---|---|
| Net revenue (US$m) | 3260.975 | 3244.857 | 1974.014 | 2165.828 | 672.367 | 745.648 | FY columns as reported including Diabetes Health; 9M and Q3 columns continuing operations. |
| EBITDA (Reported) (US$m) | 628.021 | 472.526 | 390.572 | 32.019 | 135.601 | -39.119 | Issuer definition before add-backs; same perimeter split as revenue. |
| EBITDA (Adjusted) (US$m) | 688.657 | 616.681 | 395.179 | 378.462 | 146.090 | 141.904 | Issuer-adjusted; same perimeter split as revenue. |
| Adjusted EBITDA margin (%) | 21.1 | 19.0 | 20.0 | 17.5 | 21.7 | 19.0 | As stated by the issuer; same perimeter split. |
| Net (loss) income, all operations (US$m) | 94.780 | -66.038 | 35.499 | -300.358 | 25.750 | -152.766 | Includes discontinued operations in the 9M and Q3 columns, so comparable across all columns. |
| Net cash from operating activities (US$m) | 541.839 | 601.771 | 418.587 | 395.613 | Not supplied: the cash flow statement is year-to-date only | Not supplied: the cash flow statement is year-to-date only | Includes discontinued operations in the 9M columns. |
| Purchases of equipment and other fixed assets (US$m) | -306.055 | -382.388 | -278.492 | -392.981 | Not supplied: the cash flow statement is year-to-date only | Not supplied: the cash flow statement is year-to-date only | Cash paid; outflows are negative. |
| Free cash flow (US$m) | 235.784 | 219.383 | 140.095 | 2.632 | Not supplied: the cash flow statement is year-to-date only | Not supplied: the cash flow statement is year-to-date only | Operating cash flow less purchases of equipment, as the issuer defines it; includes discontinued operations in the 9M columns. |
| Net debt at period end (US$m) | 1871.424 | 1630.160 | Not supplied: no 2025-09-30 net debt in the sources read | 1803.170 | Not supplied: no 2025-09-30 net debt in the sources read | 1803.170 | Balance-sheet carrying value of debt less cash; the 9M 2026 and Q3 2026 columns are the same date, 2026-09-30. |
| Net debt / EBITDA (Reported) (x) | 2.98 | 3.45 | Not supplied: trailing EBITDA not established | Not supplied: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not supplied: trailing EBITDA not established | Not supplied: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Only FY2024 and FY2025 are calculable; no trailing figure exists for 2026. |

Free cash flow in the nine-month columns includes discontinued operations while EBITDA excludes them.

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1981.171 | 109.747 | 1871.424 | US$m | Gross debt is carrying value: secured term loan and senior notes principal of US$m 2000.000 less unamortized deferred financing fees of 18.829; includes no lease obligations (finance leases are separate balance sheet lines). |
| FY2025 / 2025-12-31 | 1736.296 | 106.136 | 1630.160 | US$m | Gross debt is carrying value: principal of US$m 1750.000 (secured term loan 315.0, senior notes 1435.0) less unamortized deferred financing fees of 13.704; includes no lease obligations. |
| 2026-09-30 | 1883.857 | 80.687 | 1803.170 | US$m | Gross debt is carrying value: principal of US$m 1894.969 (secured term loans 647.969, revolver 147.0, senior notes 1100.0) less unamortized deferred financing fees of 11.112; includes no lease obligations. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 1894.969 | -11.112 | 1883.857 | US$m | Principal is the sum of the six Debt maturing rows. The one reconciling item is unamortized deferred financing fees of 11.112; finance leases of 39.357 sit on separate balance sheet lines and are outside both figures. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Repayment of USD 10.0 million of the 2026 revolver | Not supplied: the source states October 2026 only | Not supplied: the source states the repayment but not how it was funded | Not supplied: the funding of the repayment is not stated | Not supplied: trailing EBITDA not established | US$m | Third-quarter 10-Q liquidity section; borrowings fell from 147.0 to 137.0 at the filing date; net debt would be unchanged if the repayment came from cash on hand. |
| Sale of the Diabetes Health business for USD 235.0 million in cash (agreement dated 2026-07-19) | Not supplied: the source states the first quarter of 2027 only | -235.000 | 1568.170 | Not supplied: trailing EBITDA on the continuing-operations basis is not established | US$m | Third-quarter 10-Q held-for-sale note; gross cash consideration subject to purchase price adjustments, regulatory approvals and closing conditions; tax, fees, adjustments and use of proceeds are not reflected. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 3260.975 | 688.657 | US$m | Annual periods; Adjusted EBITDA is the issuer-adjusted measure; FY2024 as reported including Diabetes Health. |
| FY2025 / 2025-12-31 | 3244.857 | 616.681 | US$m | Annual periods; Adjusted EBITDA is the issuer-adjusted measure; FY2025 as reported including Diabetes Health. |

The 2026 interim periods are not shown because nine-month figures are a different duration and exclude Diabetes Health.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | Not supplied: no source states the legal rank of any facility | US$m | The debt note labels the term loans secured and the notes senior unsecured, but no source states legal rank, collateral, intercreditor terms or guarantor scope, so no rank number is written; the facilities are named in the debt instruments register and under the gaps. |

No facility is ranked because no source states legal rank, collateral or guarantor scope.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (reported, issuer definition), FY2025 | 472.526 | US$m | Opening: the issuer's unadjusted EBITDA for the year ended 2025-12-31, as reported including Diabetes Health. |
| Equity-based compensation | 21.876 | US$m | Add-back; non-cash; realisation status not applicable. |
| Goodwill impairment | 127.995 | US$m | Add-back; non-cash charge arising in the Diabetes Health reporting unit, the business now being sold. |
| Litigation settlement expense | 1.000 | US$m | Add-back; estimated amount to be funded under a previously disclosed securities settlement. |
| Gain on sale of businesses | -32.602 | US$m | Deduction; gains on dispositions in Wellness at Home. |
| Other non-recurring expenses, net | 25.886 | US$m | Add-back; consulting, transaction, reorganisation and other items as the issuer lists them. |
| Adjusted EBITDA (issuer-adjusted), FY2025 | 616.681 | US$m | Closing: the issuer's Adjusted EBITDA; the warrant and extinguishment lines are dashes in 2025. |

Adjustments total USD 144.155 million, about 30.5% of reported EBITDA, so the adjusted measure is materially above the reported one.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 14 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 14 |
| Fields total | 14 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 4 |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Net revenue | 3,260,975 | 3,244,857 | 1,974,014 | 2,165,828 | 672,367 | 745,648 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Cost of net revenue | 2,579,882 | 2,635,658 | 1,594,130 | 1,851,183 | 533,849 | 630,841 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| General and administrative expenses | 359,238 | 382,293 | 268,301 | 278,638 | 88,143 | 88,661 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Depreciation and amortization, excluding patient equipment depreciation | 45,045 | 40,640 | 21,330 | 24,433 | 7,002 | 9,316 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Goodwill impairment | 13,078 | 127,995 | Not supplied: the statement prints a dash | 328,987 | Not supplied: the statement prints a dash | 184,751 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Total costs and expenses | 2,997,243 | 3,186,586 | 1,883,761 | 2,483,241 | 628,994 | 913,569 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Gain on sale of businesses | Not supplied: the statement prints a dash | -32,602 | -32,225 | -6,269 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Gain on deconsolidation of subsidiary | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: the statement prints a dash | -12,002 | Not supplied: the statement prints a dash | -12,002 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Operating income (loss) | 263,732 | 90,873 | 122,478 | -299,142 | 43,373 | -155,919 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Interest expense, net | 126,668 | 105,753 | 81,312 | 80,403 | 25,380 | 28,600 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Loss on extinguishment of debt | 2,273 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 1,322 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Change in fair value of warrant liability | -4,021 | Not supplied: the statement prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Other loss, net | 2,793 | 274 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| (Loss) income before income taxes | 136,019 | -15,154 | 41,166 | -380,867 | 17,993 | -184,519 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Income tax expense (benefit) | 41,239 | 50,884 | 36,813 | -45,886 | 6,519 | -17,494 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Net (loss) income from continuing operations | Not supplied: the annual report does not present discontinued operations | Not supplied: the annual report does not present discontinued operations | 4,353 | -334,981 | 11,474 | -167,025 | USD thousands | Reported; the interim statements present discontinued operations, the annual statements do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Net income from discontinued operations, net of tax | Not supplied: the annual report does not present discontinued operations | Not supplied: the annual report does not present discontinued operations | 31,146 | 34,623 | 14,276 | 14,259 | USD thousands | Reported; the interim statements present discontinued operations, the annual statements do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Net (loss) income | 94,780 | -66,038 | 35,499 | -300,358 | 25,750 | -152,766 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Income attributable to noncontrolling interest | 4,358 | 4,756 | 3,523 | 3,598 | 1,241 | 1,221 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Net (loss) income attributable to AdaptHealth Corp. | 90,422 | -70,794 | 31,976 | -303,956 | 24,509 | -153,987 | USD thousands | Reported; FY columns include Diabetes Health, 9M and Q3 columns are continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 |
| Depreciation and amortization, including patient equipment depreciation | 365,334 | 381,927 | 268,094 | 332,483 | 92,228 | 116,800 | USD thousands | Reported by the issuer in its EBITDA reconciliation (unaudited); FY columns start from net income attributable plus noncontrolling interest, interim columns from continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 |
| EBITDA (Reported) | 628,021 | 472,526 | 390,572 | 32,019 | 135,601 | -39,119 | USD thousands | Reported by the issuer in its EBITDA reconciliation (unaudited); FY columns start from net income attributable plus noncontrolling interest, interim columns from continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 |
| EBITDA (Adjusted) | 688,657 | 616,681 | 395,179 | 378,462 | 146,090 | 141,904 | USD thousands | Reported by the issuer in its EBITDA reconciliation (unaudited); FY columns start from net income attributable plus noncontrolling interest, interim columns from continuing operations. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 |
| Segment net revenue: Sleep Health | 1,349,213 | 1,378,147 | 1,005,875 | 1,138,816 | 354,835 | 393,860 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment net revenue: Respiratory Health | 651,150 | 691,160 | 512,927 | 563,350 | 176,996 | 190,808 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment net revenue: Diabetes Health | 614,410 | 592,413 | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment net revenue: Wellness at Home | 646,202 | 583,137 | 455,212 | 463,662 | 140,536 | 160,980 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment Adjusted EBITDA: Sleep Health | 348,744 | 310,559 | 208,390 | 196,100 | 77,061 | 70,741 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment Adjusted EBITDA: Respiratory Health | 200,112 | 209,749 | 138,731 | 155,483 | 51,247 | 56,230 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment Adjusted EBITDA: Diabetes Health | 60,525 | 26,073 | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | Not supplied: reported as discontinued operations, not a segment in this column | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |
| Segment Adjusted EBITDA: Wellness at Home | 79,276 | 70,300 | 48,058 | 26,879 | 17,782 | 14,933 | USD thousands | Reported; FY columns include the Diabetes Health segment, interim columns show the three continuing segments. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 77; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 80 |

The statement prints a dash where it shows nothing; each such cell is recorded as not supplied, never as zero.

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net (loss) income | 94,780 | -66,038 | 35,499 | -300,358 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Depreciation and amortization, including patient equipment depreciation | 365,334 | 381,927 | 284,421 | 343,665 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Goodwill impairment | 13,078 | 127,995 | Not supplied: the statement prints a dash | 328,987 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Equity-based compensation | 14,880 | 21,876 | 16,738 | 13,254 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in fair value of warrant liability | -4,021 | Not supplied: the statement prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Reduction in the carrying amount of operating lease right-of-use assets | 32,848 | 31,114 | 22,946 | 32,050 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Reduction in the carrying amount of finance lease right-of-use assets | 11,100 | 15,342 | 10,942 | 14,909 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Deferred income tax expense (benefit) | 32,049 | 47,163 | 47,167 | -33,424 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in fair value of interest rate swaps, net of reclassification adjustment | -367 | Not supplied: the statement prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Amortization of deferred financing costs | 5,666 | 5,694 | 4,437 | 5,369 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Loss on extinguishment of debt | 2,273 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 1,322 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payment of contingent consideration from an acquisition | -1,850 | Not supplied: the statement prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Gain on deconsolidation of subsidiary | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: the statement prints a dash | -12,002 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Gain on sale of businesses | Not supplied: the statement prints a dash | -32,602 | -32,225 | -6,269 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Other operating adjustments | 2,128 | 2,721 | 3,000 | 1,472 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in accounts receivable | -26,217 | 30,986 | 22,142 | -24,969 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in inventory | -28,065 | -11,491 | -9,749 | -4,948 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in prepaid and other assets | 27,325 | -61,071 | -75,059 | 26,743 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in operating lease obligations | -32,934 | -31,117 | -23,474 | -30,809 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Change in operating liabilities | 33,832 | 139,272 | 111,802 | 40,621 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Operating Activities | 541,839 | 601,771 | 418,587 | 395,613 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Purchases of equipment and other fixed assets | -306,055 | -382,388 | -278,492 | -392,981 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payments for business acquisitions, net of cash acquired | -9,536 | -42,378 | -18,561 | -127,422 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the sale of businesses, net of cash disposed | Not supplied: the statement prints a dash | 120,420 | 117,175 | 6,269 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the sale of assets | 5,316 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 1,439 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Investment in joint venture | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: the statement prints a dash | -2,000 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Receipt of contingent consideration from the sale of assets | Not supplied: the statement prints a dash | 1,156 | 1,156 | Not supplied: the statement prints a dash | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Investing Activities | -310,275 | -303,190 | -178,722 | -514,695 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Proceeds from borrowings on long-term debt and lines of credit | 253,477 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | 900,000 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Repayments on long-term debt and lines of credit | -423,477 | -250,000 | -225,000 | -755,031 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Repayments of finance lease obligations | -9,865 | -18,478 | -12,179 | -12,925 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Proceeds from the exercise of stock options | 742 | Not supplied: the statement prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Proceeds received in connection with employee stock purchase plan | 999 | 1,211 | 1,210 | 1,338 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payments relating to the Tax Receivable Agreement | -1,432 | -25,045 | -25,045 | -26,846 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payments of debt financing costs | -6,429 | Not supplied: the statement prints a dash | Not supplied: the statement prints a dash | -5,444 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Distributions to noncontrolling interests | -5,600 | -6,967 | -5,426 | -3,821 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payments for tax withholdings from vesting of restricted stock units and stock option exercises | -2,066 | -2,701 | -2,604 | -3,427 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Payments of contingent consideration and deferred purchase price from acquisitions | -5,298 | -212 | -211 | -211 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Net Cash from Financing Activities | -198,949 | -302,192 | -269,255 | 93,633 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Net Cash Change | 32,615 | -3,611 | -29,390 | -25,449 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Opening Cash | 77,132 | 109,747 | 109,747 | 106,136 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Closing Cash | 109,747 | 106,136 | 80,357 | 80,687 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 7–8 |
| Cash Interest Paid | 122,072 | 101,243 | 95,999 | 96,639 | USD thousands | Reported supplemental disclosure; cash paid, positive; interest is an operating cash item under U.S. GAAP. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 8 |
| Cash paid (refunded) for income taxes, net | 14,139 | 24,283 | 23,993 | -12,788 | USD thousands | Reported; the 9M columns include discontinued operations; outflows are negative. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 8 |

Capital expenditure is not split into maintenance and growth, and the cash flow statement is printed year to date only.

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 109,747 | 106,136 | 80,687 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Accounts receivable | 408,019 | 370,897 | 395,866 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Inventory | 139,842 | 151,247 | 111,897 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Prepaid and other current assets | 45,432 | 100,619 | 73,508 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Assets held for sale, current | 52,748 | Not supplied: the statement prints a dash | 177,131 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total current assets | 755,788 | 728,899 | 839,089 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Equipment and other fixed assets, net | 474,556 | 509,956 | 646,895 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Operating lease right-of-use assets | 105,999 | 111,968 | 121,244 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Finance lease right-of-use assets | 37,801 | 52,300 | 39,366 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Goodwill | 2,675,166 | 2,541,428 | 2,158,313 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Identifiable intangible assets, net | 105,548 | 85,121 | 29,902 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Deferred income taxes, net | 314,505 | 267,786 | 302,997 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Other assets | 17,584 | 19,119 | 62,903 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total Assets | 4,486,947 | 4,316,577 | 4,200,709 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Accounts payable and accrued expenses | 437,985 | 553,700 | 600,674 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Current portion of long-term debt | 16,250 | 20,313 | 16,250 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Current portion of operating lease obligations | 29,945 | 30,728 | 36,543 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Current portion of finance lease obligations | 14,315 | 17,702 | 18,281 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Contract liabilities | 34,944 | 59,843 | 67,182 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Other liabilities, current | 26,505 | 30,106 | 5,305 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Liabilities held for sale | 7,043 | Not supplied: the statement prints a dash | 580 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total current liabilities | 566,987 | 712,392 | 744,815 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Long-term debt, less current portion | 1,964,921 | 1,715,983 | 1,867,607 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Operating lease obligations, less current portion | 80,275 | 85,470 | 90,173 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Finance lease obligations, less current portion | 24,630 | 32,604 | 21,076 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Other long-term liabilities | 272,016 | 243,804 | 243,805 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total Liabilities | 2,908,829 | 2,790,253 | 2,967,476 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Common stock | 13 | 13 | 14 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Preferred stock | 1 | 1 | 1 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Treasury stock, at cost | -25,548 | -25,548 | -25,548 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Additional paid-in capital | 2,156,604 | 2,176,990 | 2,188,155 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Accumulated deficit | -562,178 | -632,972 | -936,928 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Accumulated other comprehensive income | 2,253 | 78 | Not supplied: the statement prints a dash | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total stockholders' equity attributable to AdaptHealth Corp. | 1,571,145 | 1,518,562 | 1,225,694 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Noncontrolling interest in subsidiary | 6,973 | 7,762 | 7,539 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total Equity | 1,578,118 | 1,526,324 | 1,233,233 | USD thousands | Reported; the Q3 2026 column shows Diabetes Health as held for sale, the FY columns do not. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Total Debt | 1,981,171 | 1,736,296 | 1,883,857 | USD thousands | Calculated: current portion plus long-term debt, carrying value net of issuance costs; lease obligations are separate lines and excluded. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| Cash & Equivalents | 109,747 | 106,136 | 80,687 | USD thousands | Reported cash; the balance sheet prints no restricted cash or short-term investment line. | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |

The December 31, 2025 balance sheet is shown as the annual report printed it; the later quarterly reports recast it for held-for-sale assets, which moves goodwill but not totals.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_ahco-20251231.htm.jsonl | Annual report, Form 10-K | FY2025 with FY2024 and FY2023 comparatives | USD | thousands | Consolidated; includes Diabetes Health in continuing operations | U.S. GAAP | Tier 1 (audited statements; EBITDA reconciliation is unaudited) | FY2024 and FY2025 statements, debt note, segments, EBITDA | Not restated for the later discontinued-operations treatment. |
| 10-Q_2026-03-31_ahco-20260331.htm.jsonl | Quarterly report, Form 10-Q | Quarter ended 2026-03-31 | USD | thousands | Consolidated; includes Diabetes Health | U.S. GAAP | Tier 2b (unaudited) | Perimeter check only | Superseded for perimeter by later quarterly reports. |
| 10-Q_2026-06-30_ahco-20260630.htm.jsonl | Quarterly report, Form 10-Q | Quarter and six months ended 2026-06-30 | USD | thousands | Continuing operations; Diabetes Health discontinued | U.S. GAAP | Tier 2b (unaudited) | Perimeter check only | Six-month statements not used in the columns. |
| 10-Q_2026-09-30_ahco-20260930.htm.jsonl | Quarterly report, Form 10-Q | Quarter and nine months ended 2026-09-30 | USD | thousands | Continuing operations; Diabetes Health discontinued | U.S. GAAP | Tier 2b (unaudited) | 9M and Q3 statements, balance sheet at 2026-09-30, debt, liquidity | Cash flow statement includes discontinued operations. |
| EX-99.1_2026-05-05_ahco-20260505x8k_ex991.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-03-31 | USD | millions in text | Includes Diabetes Health | U.S. GAAP with company-defined non-GAAP measures | Tier 2b (unaudited) | Guidance basis check | Company-defined measures. |
| EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-06-30 | USD | millions in text | Continuing operations except free cash flow | U.S. GAAP with company-defined non-GAAP measures | Tier 2b (unaudited) | Guidance bridge; overhead remaining in continuing operations | Company-defined measures. |
| EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-09-30 | USD | millions in text | Continuing operations except cash flow measures | U.S. GAAP with company-defined non-GAAP measures | Tier 2b (unaudited) | Headline results and operating indicators | Company-defined measures. |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| AdaptHealth Corp. | Issuer and registrant of the consolidated statements | December 31 | USD | thousands | Consolidated; Diabetes Health included in FY2024, FY2025 and first-quarter 2026, discontinued from the second quarter of 2026 | U.S. GAAP | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30 |
| AdaptHealth LLC | Party to the 2026 credit agreement; borrower role not stated in the sources | Not supplied: not stated | USD | Not supplied: separate statements are not supplied | Not supplied: no separate statements | Not supplied: not stated | Not supplied: no separate statements |
| Guarantors | Guarantors of the senior notes and credit facility, unnamed | Not supplied: not stated | USD | Not supplied: not stated | Not supplied: the supplemental indentures name no guarantor | Not supplied: not stated | Not supplied: no separate statements |

A subsequent event after the September 30, 2026 balance sheet is the October 2026 repayment of USD 10.0 million of the revolver and the pending sale of Diabetes Health; neither is blended into any period figure.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Money tables restated in millions from statements printed in thousands | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 | Unit conversion | 1,883,857 thousand | 1883.857 US$m | The money tables use US$m, in millions even where a statement prints thousands; no figure is rounded. | All money tables |
| FY2025 column kept as originally reported | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | Perimeter label, no adjustment | Goodwill 2,541,428 thousand | Goodwill 2,541,428 thousand | The recast December 31, 2025 comparative in the later quarterly reports (goodwill 2,457,627 thousand) is not used for the FY2025 column; the difference is the held-for-sale reclassification. | FY2025 balance sheet |
| Lease obligations kept outside Total Debt | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 | Classification, no adjustment | Total Debt 1,883,857 thousand | Total Debt 1,883,857 thousand | Finance lease obligations (39,357 thousand) and operating lease obligations (126,716 thousand) are separate balance sheet lines, not debt lines. | 2026-09-30 |
| Statement dashes recorded as not supplied | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 | Null handling | Dash | Not supplied | A source dash is a missing value with a gap line, not zero. | All statement tables |
| Maturity ladder built from stated amortisation terms | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–42 | Derived schedule | Quarterly amounts of 2.0 and 4.1 million | Annual ladder in US$m | The filings print no maturity table; the ladder applies the printed amortisation terms and sets the final-maturity amount as principal less scheduled amortisation. | 2026-09-30 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Net revenue | LTM to 2026-09-30 | 3,244,857 thousand (FY2025, includes Diabetes Health) | 2,165,828 thousand (9M 2026, continuing operations) | 1,974,014 thousand (9M 2025, continuing operations) | Not calculable: perimeters differ between the full year and the stubs | Not Comparable | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5 | The full year includes Diabetes Health and the stubs exclude it. |
| EBITDA (Reported) | LTM to 2026-09-30 | 472,526 thousand (FY2025, includes Diabetes Health) | 32,019 thousand (9M 2026, continuing operations) | 390,572 thousand (9M 2025, continuing operations) | Not calculable: perimeters differ between the full year and the stubs | Not Comparable | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 | No restated FY2025 or fourth-quarter 2025 on continuing operations; the 2025 stub is not the prior-year stub of the annual perimeter. |
| EBITDA (Adjusted) | LTM to 2026-09-30 | 616,681 thousand (FY2025, includes Diabetes Health) | 378,462 thousand (9M 2026, continuing operations) | 395,179 thousand (9M 2025, continuing operations) | Not calculable: perimeters differ between the full year and the stubs | Not Comparable | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76; EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl, page 3 | Allocated corporate overhead of USD 60 million stays in continuing operations, so the Diabetes Health segment figure cannot be subtracted. |
| Fourth quarter of 2025 | Q4 by difference (full year less nine months) | 3,244,857 thousand (FY2025 revenue) | Not supplied: no fourth-quarter release in the sources | 1,974,014 thousand (9M 2025, continuing operations) | Not calculable: no reported fourth quarter and the two periods differ in perimeter | Not Comparable | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 | Fourth quarter is derived only when none is reported, and then only on one perimeter. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1981.171 | Net debt data FY2024 / 2024-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 628.021 | T4.4 EBITDA (Reported) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2024 / 2024-12-31 | USD | US$m | 3.15 | Calculated | Tier 1 (debt); Tier 2b (EBITDA reconciliation) | Carrying value of debt; FY2024 includes Diabetes Health. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1871.424 | Net debt data FY2024 / 2024-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 628.021 | T4.4 EBITDA (Reported) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2024 / 2024-12-31 | USD | US$m | 2.98 | Calculated | Tier 1 (debt, cash); Tier 2b (EBITDA reconciliation) | Net debt is carrying value less cash; FY2024 includes Diabetes Health. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 628.021 | T4.4 EBITDA (Reported) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | 122.072 | T4.5 Cash Interest Paid FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 | FY2024 / 2024-12-31 | USD | US$m | 5.14 | Calculated | Tier 1 (cash interest); Tier 2b (EBITDA reconciliation) | Cash interest paid, not interest expense. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1981.171 | Net debt data FY2024 / 2024-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 688.657 | T4.4 EBITDA (Adjusted) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2024 / 2024-12-31 | USD | US$m | 2.88 | Calculated | Tier 1 (debt); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA; add-backs are in the EBITDA bridge. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1871.424 | Net debt data FY2024 / 2024-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 688.657 | T4.4 EBITDA (Adjusted) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2024 / 2024-12-31 | USD | US$m | 2.72 | Calculated | Tier 1 (debt, cash); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 688.657 | T4.4 EBITDA (Adjusted) FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | 122.072 | T4.5 Cash Interest Paid FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 | FY2024 / 2024-12-31 | USD | US$m | 5.64 | Calculated | Tier 1 (cash interest); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA over cash interest paid. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1736.296 | Net debt data FY2025 / 2025-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 472.526 | T4.4 EBITDA (Reported) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2025 / 2025-12-31 | USD | US$m | 3.67 | Calculated | Tier 1 (debt); Tier 2b (EBITDA reconciliation) | Carrying value of debt; FY2025 includes Diabetes Health. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1630.160 | Net debt data FY2025 / 2025-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 472.526 | T4.4 EBITDA (Reported) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2025 / 2025-12-31 | USD | US$m | 3.45 | Calculated | Tier 1 (debt, cash); Tier 2b (EBITDA reconciliation) | Net debt is carrying value less cash; FY2025 includes Diabetes Health. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 472.526 | T4.4 EBITDA (Reported) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | 101.243 | T4.5 Cash Interest Paid FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 | FY2025 / 2025-12-31 | USD | US$m | 4.67 | Calculated | Tier 1 (cash interest); Tier 2b (EBITDA reconciliation) | Cash interest paid, not interest expense. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1736.296 | Net debt data FY2025 / 2025-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 616.681 | T4.4 EBITDA (Adjusted) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2025 / 2025-12-31 | USD | US$m | 2.82 | Calculated | Tier 1 (debt); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA; add-backs are in the EBITDA bridge. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1630.160 | Net debt data FY2025 / 2025-12-31; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 | 616.681 | T4.4 EBITDA (Adjusted) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | FY2025 / 2025-12-31 | USD | US$m | 2.64 | Calculated | Tier 1 (debt, cash); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 616.681 | T4.4 EBITDA (Adjusted) FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 | 101.243 | T4.5 Cash Interest Paid FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 | FY2025 / 2025-12-31 | USD | US$m | 6.09 | Calculated | Tier 1 (cash interest); Tier 2b (adjusted EBITDA) | Issuer-adjusted EBITDA over cash interest paid. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1883.857 | Net debt data 2026-09-30; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | Tier 1 (debt, cash); no EBITDA | Trailing twelve-month EBITDA not established. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1803.170 | Net debt data 2026-09-30; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | Tier 1 (debt, cash); no EBITDA | Trailing twelve-month EBITDA not established. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1883.857 | Net debt data 2026-09-30; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | Tier 1 (debt, cash); no EBITDA | Trailing twelve-month EBITDA not established. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1803.170 | Net debt data 2026-09-30; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | Tier 1 (debt, cash); no EBITDA | Trailing twelve-month EBITDA not established. |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | Not calculable: trailing twelve-month cash interest is not constructed because the EBITDA numerator is not established | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | No trailing EBITDA | Nine-month cash interest paid of USD 96.639 million is stated but is not a twelve-month figure. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | T4.8 Constructed period register | Not calculable: trailing twelve-month cash interest is not constructed because the EBITDA numerator is not established | T4.8 Constructed period register | 2026-09-30 | USD | US$m | Not calculable: trailing twelve-month EBITDA is not established, because FY2025 and fourth-quarter 2025 are not stated on the continuing-operations basis of the 2026 columns | Not Calculable | No trailing EBITDA | Nine-month cash interest paid of USD 96.639 million is stated but is not a twelve-month figure. |
| Purchases of equipment / net revenue | Purchases of equipment / Net revenue | 382388 | T4.5 FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129 | 3244857 | T4.4 FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127 | FY2025 | USD | USD thousands | 0.12 | Calculated | Tier 1 | Cash capital spending over revenue; FY2025 includes Diabetes Health; capital expenditure is not split into maintenance and growth. |
| Purchases of equipment / net revenue | Purchases of equipment / Net revenue | 392981 | T4.5 9M 2026; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 7 | 2165828 | T4.4 9M 2026; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 | 9M 2026 | USD | USD thousands | 0.18 | Calculated | Tier 2b | Cash flow statement includes discontinued operations while revenue is continuing operations. |
| Net revenue growth | Net revenue FY2025 / Net revenue FY2024 - 1 | 3244857 | T4.4 FY2025; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127 | 3260975 | T4.4 FY2024; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127 | FY2025 | USD | USD thousands | -0.0049 | Calculated | Tier 1 | Both years include Diabetes Health; a change expressed as a fraction. |
| Net revenue growth | Net revenue 9M 2026 / Net revenue 9M 2025 - 1 | 2165828 | T4.4 9M 2026; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 | 1974014 | T4.4 9M 2025; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 | 9M 2026 | USD | USD thousands | 0.0972 | Calculated | Tier 2b | Both periods are continuing operations; a change expressed as a fraction. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Growth | Net revenue growth, year on year (rate) | -0.5% | 5.4% | 12.7% | 10.9% | Up | FY2025 as reported; Q1 includes Diabetes Health, Q2 and Q3 are continuing operations, so the series is not one perimeter. 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 87; EX-99.1_2026-05-05_ahco-20260505x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 1 |
| Growth | Organic revenue growth (rate) | Not supplied: no full-year figure in the sources | 9.1% | 15.9% | 12.8% | Down from Q2 | Issuer-defined organic revenue growth; EX-99.1_2026-05-05_ahco-20260505x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 1 |
| Profitability | Adjusted EBITDA margin (rate) | 19.0% | Not supplied: not stated in the sources read | Not supplied: not stated in the sources read | 19.0% | Flat against FY2025; down from 21.7% a year earlier | Q3 2026 against Q3 2025 21.7%; continuing operations in the 2026 columns; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 75 |
| Operating | Patients served annually (period-end) | 4.3 million | Not supplied: not stated | Not supplied: not stated | 4.8 million | Up | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 6; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 3 |
| Operating | Locations (period-end) | 640 | Not supplied: not stated | Not supplied: not stated | 660 | Up | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 6; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 3 |
| Operating | Registered myAPP users (period-end) | Not supplied: not stated | 412,000 | 512,000 | 615,000 | Up | Q2 and Q3 are stated as more than the figure shown; EX-99.1_2026-05-05_ahco-20260505x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl, page 1; EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 1 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Total Debt | Balance-sheet carrying value, current plus long-term, net of issuance costs; principal is kept separate | Debt note total at carrying value; principal is the sum of the instruments before deferred financing fees | Principal 1,894,969 thousand against carrying value 1,883,857 thousand at 2026-09-30 (difference 11,112 thousand); principal 1,750,000 thousand against 1,736,296 thousand at 2025-12-31 (difference 13,704 thousand) | 2025-12-31, 2026-09-30 | Low: under 1% of debt | Financial foundation; Fundamental credit | Carrying value is used for every leverage ratio; principal is shown in the reconciliation. 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 38–39; 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 167–168 |
| EBITDA (Reported) | Unadjusted EBITDA from the statements | FY columns start from net income attributable to AdaptHealth plus noncontrolling interest; the 2026 columns start from net income from continuing operations | Different starting lines and perimeters across FY2025 and the 2026 columns | FY2024, FY2025, 9M and Q3 2026 | High: no trailing figure can be built | Financial foundation; Fundamental credit | Perimeter label on every figure; trailing EBITDA stated as not calculable. 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 |
| EBITDA (Adjusted) | Issuer-stated adjusted EBITDA shown beside reported EBITDA, labelled | Adds back equity-based compensation, goodwill impairment, gains, restructuring and other non-recurring items; the credit agreement tests a variation of Adjusted EBITDA | Add-backs of 144,155 thousand in FY2025 (30.5% of reported EBITDA) and 346,443 thousand in 9M 2026, mostly goodwill impairment of 328,987 thousand; the covenant definition is not supplied | FY2024, FY2025, 9M 2026 | High: adjusted leverage is lower than reported leverage by definition | Financial foundation; Fundamental credit; Legal & covenants | Both measures are shown; covenant EBITDA is not established. 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 74–76 |
| Free cash flow | Operating cash flow less capital expenditure | Operating cash flow less purchases of equipment and other fixed assets, with cash flows from continuing and discontinued operations | 9M 2026 free cash flow of 2,632 thousand against EBITDA that excludes discontinued operations | 9M 2025, 9M 2026 | Medium | Financial foundation; Liquidity | Both stated with their perimeter. 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 84–85; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 92 |
| Net loss attributable | Net income attributable to AdaptHealth Corp. in the statement of operations | Release headline net loss attributable of USD 168.2 million is continuing operations only | Statement shows (153,987) thousand including discontinued operations of 14,259 thousand for Q3 2026 | Q2 2026, Q3 2026 | Medium | Financial foundation | Statement figure used; headline noted. EX-99.1_2026-11-03_ahco-20261103x8k_ex991.htm.jsonl, page 1; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 5 |
| Interest | Cash interest paid for coverage; net interest expense kept separate | Net interest expense in the income statement; cash interest paid in the supplemental cash flow disclosure | FY2025 net interest expense 105,753 thousand against cash interest paid 101,243 thousand; 9M 2026 80,403 thousand against 96,639 thousand | FY2025, 9M 2026 | Low | Financial foundation | Coverage uses cash interest paid. 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 127; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 4–5; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 8 |
| Lease obligations | Lease liabilities on their own lines are not added to Total Debt | Finance lease obligations of 39,357 thousand and operating lease obligations of 126,716 thousand at 2026-09-30 on separate lines | Finance leases of 50,306 thousand and operating leases of 116,198 thousand at 2025-12-31 on separate lines | 2025-12-31, 2026-09-30 | Medium: finance leases are interest-bearing claims outside Total Debt | Financial foundation; Fundamental credit | Excluded from Total Debt and stated here. 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 126; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 4 |
| Covenant ratios | Not calculated here | Consolidated Total Leverage Ratio and Consolidated Interest Coverage Ratio as defined in the credit agreement | Definitions, levels and reported ratios are not supplied | 2026-09-30 | High for covenant work | Legal & covenants; Covenant capacity | No covenant capacity is inferred. 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 41–42 |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Annual statements and annual leverage and cover, FY2024 and FY2025 | Ready with Limitations | Both years include Diabetes Health; EBITDA is the issuer's reconciliation and unaudited. | Label the perimeter on every figure. |
| Current-period leverage and interest cover at 2026-09-30 | Not Ready | Trailing twelve-month EBITDA is not calculable on one perimeter. | Obtain FY2025 restated for discontinued operations. |
| Liquidity and net debt at 2026-09-30 | Ready with Limitations | Cash and facilities are stated; covenant levels are not. | Obtain the executed credit agreement for covenant levels. |
| Debt structure and maturities | Ready with Limitations | Ranking, collateral and guarantor scope are not stated; carrying value by instrument is not disclosed; the ladder uses rounded amortisation amounts. | Obtain the indentures and credit agreement. |
| Interim trend on continuing operations (9M and Q3) | Ready with Limitations | Continuing-operations comparatives are stated, but cash flows include discontinued operations. | Label cash flow and EBITDA perimeters separately. |
| Covenant capacity | Not Ready | No covenant level, definition or reported ratio is supplied. | Supply the credit agreement and compliance certificate. |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Secured term loans (2026 Term Loan and 2026 Delayed Draw Term Loan) | Amortising term loans | Not supplied: carrying value by instrument is not disclosed | 647,969 | 647,969 | Not applicable | Secured (the debt note labels them secured); collateral and guarantors not described | Not supplied: no source states the legal rank | USD | 647,969 | Not applicable | Term SOFR plus 1.125% to 2.000% by leverage; 5.06% at 2026-09-30 | Floating | Term SOFR | 112.5 to 200.0 | 0 | 2031-04 (day not stated; springing maturity 2029-05-02 if more than USD 150.0 million of the 4.625% notes remain) | 16,000 through 2027, then 32,800 from 2029 (2.0 and 4.1 million a quarter on each loan) | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–42 |
| 2026 Revolver | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 147,000 | 147,000 | 450,000 | Not supplied: no source states whether it is secured | Not supplied: no source states the legal rank | USD | 147,000 | Not applicable | Term SOFR plus 1.125% to 2.000% by leverage; commitment fee 0.15% to 0.30% | Floating | Term SOFR | 112.5 to 200.0 | 0 | 2031-04 (day not stated; same springing maturity) | 0 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–42 |
| 4.625% senior unsecured notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 500,000 | 500,000 | Not applicable | Unsecured (stated in the name of the notes) | Not supplied: no source states the legal rank | USD | 500,000 | Not applicable | 4.625% | Fixed | Not applicable | Not applicable | Not applicable | 2029-08-01 | 0 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 42 |
| 5.125% senior unsecured notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 600,000 | 600,000 | Not applicable | Unsecured (stated in the name of the notes) | Not supplied: no source states the legal rank | USD | 600,000 | Not applicable | 5.125% | Fixed | Not applicable | Not applicable | Not applicable | 2030-03-01 | 0 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 42 |
| Financing cost adjustment | Unamortized deferred financing fees | -11,112 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -11,112 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 38–39 |

The instrument amounts plus the financing cost adjustment equal Total Debt of 1,883,857 thousand. The 6.125% notes due 2028 (principal 325,000 thousand after open-market repurchases) were redeemed on August 3, 2026 with the proceeds of the USD 325.0 million delayed-draw term loan borrowed on July 27, 2026 plus cash on hand, and are not outstanding at the balance sheet date.

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| N1 | Net debt at 2024-12-31 | Gross debt 1981.171 less cash 109.747 (US$m) | 1871.424 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 |
| N2 | Net debt at 2025-12-31 | Gross debt 1736.296 less cash 106.136 (US$m) | 1630.160 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 126–127 |
| N3 | Net debt at 2026-09-30 | Gross debt 1883.857 less cash 80.687 (US$m) | 1803.170 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 3–4 |
| K1 | Reported-EBITDA leverage and cover | FY2024: 1981.171 / 628.021 = 3.15; 1871.424 / 628.021 = 2.98; 628.021 / 122.072 = 5.14. FY2025: 1736.296 / 472.526 = 3.67; 1630.160 / 472.526 = 3.45; 472.526 / 101.243 = 4.67 | Total debt / EBITDA 3.15 and 3.67; net debt / EBITDA 2.98 and 3.45; EBITDA / cash interest 5.14 and 4.67 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 |
| K2 | Adjusted-EBITDA leverage and cover | FY2024: 1981.171 / 688.657 = 2.88; 1871.424 / 688.657 = 2.72; 688.657 / 122.072 = 5.64. FY2025: 1736.296 / 616.681 = 2.82; 1630.160 / 616.681 = 2.64; 616.681 / 101.243 = 6.09 | Total debt / adjusted EBITDA 2.88 and 2.82; net debt / adjusted EBITDA 2.72 and 2.64; adjusted EBITDA / cash interest 5.64 and 6.09 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96; 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 130 |
| P1 | Contractual principal at 2026-09-30 | Sum of the six Debt maturing rows: 4.000 + 16.000 + 22.300 + 532.800 + 632.800 + 687.069 | 1894.969, equal to secured term loans 647.969 plus revolver 147.000 plus senior notes 1100.000 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 38–39 |
| P2 | Reconciling item at 2026-09-30 | Carrying value 1883.857 less principal 1894.969; equals unamortized deferred financing fees | -11.112 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 38–39 |
| M1 | Maturity ladder from stated terms | Term loan scheduled after 2026-09-30: 2.0 + 8.0 + 12.2 + 16.4 + 16.4 + 4.1 = 59.1; delayed-draw: 2.0 + 8.0 + 10.1 + 16.4 + 16.4 + 4.1 = 57.0; balloon 647.969 - 59.1 - 57.0 = 531.869; 2031: 4.1 + 4.1 + 531.869 + 147.000 = 687.069. Springing date: 2029-08-01 less 91 days | FY2026 4.000; FY2027 16.000; FY2028 22.300; FY2029 532.800 (32.8 + 500.0); FY2030 632.800 (32.8 + 600.0); FY2031 687.069; springing date 2029-05-02 for the 4.625% notes (2029-11-30 for the 5.125% notes). The quarterly amounts are printed to one decimal, so each can differ from the exact amount by up to 0.1 (US$m) | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–42 |
| U1 | Undrawn revolver at 2025-12-31 | Commitments 300.0 less borrowings 0 less letters of credit 26.3 (US$m) | 273.700, equal to the borrowing limit the issuer states | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 169–171 |
| U2 | Undrawn revolver at 2026-09-30 | Commitments 450.0 less borrowings 147.0 less letters of credit 34.3 (US$m) | 268.700, equal to the borrowing limit the issuer states | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, pages 40–42 |
| F1 | Free cash flow FY2024 | Operating cash flow 541,839 less purchases of equipment 306,055 (USD thousands) | 235,784 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129 |
| F2 | Free cash flow FY2025 | Operating cash flow 601,771 less purchases of equipment 382,388 (USD thousands) | 219,383 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 129 |
| F3 | Free cash flow 9M 2025 | Operating cash flow 418,587 less purchases of equipment 278,492 (USD thousands) | 140,095 | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 7 |
| F4 | Free cash flow 9M 2026 | Operating cash flow 395,613 less purchases of equipment 392,981 (USD thousands) | 2,632, equal to the USD 2.6 million the issuer reports | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 92 |
| B1 | EBITDA bridge FY2025 | 472.526 + 21.876 + 127.995 + 1.000 - 32.602 + 25.886 (US$m); adjustments total 144.155; 144.155 / 472.526 = 30.5% | 616.681, equal to the issuer's Adjusted EBITDA | 10-K_2025-12-31_ahco-20251231.htm.jsonl, pages 95–96 |
| S1 | Segment sums equal consolidated FY2025 revenue | 1,378,147 + 691,160 + 592,413 + 583,137 (USD thousands) | 3,244,857 | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98 |
| T1 | Pro forma net debt for the Diabetes Health sale | Net debt 1803.170 less cash consideration 235.000 (US$m) | 1568.170, before tax, fees, purchase price adjustments and use of proceeds | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 27 |
| R1 | Figures rounded to two decimals for the text | Cash 80.687 gives 80.69; operating cash flow 395.613 gives 395.61; purchases of equipment 392.981 gives 392.98; acquisitions 127.422 gives 127.42; free cash flow 2.632 gives 2.63; 9M 2025 free cash flow 140.095 gives 140.10 (written 140.1); Net debt 1803.170 gives 1,803.17; 1630.160 gives 1,630.16 | As listed; the exact figures are in the tables | 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 7 |
| L1 | Trailing twelve months to 2026-09-30, continuing operations | FY2025 + 9M 2026 - 9M 2025 needs FY2025 on continuing operations | Not calculable: FY2025 and fourth-quarter 2025 are not stated on continuing operations; the Diabetes Health segment cannot be subtracted because USD 60 million of allocated overhead stays in continuing operations | 10-K_2025-12-31_ahco-20251231.htm.jsonl, page 98; EX-99.1_2026-08-04_ahco-20260804x8k_ex991.htm.jsonl, page 3; 10-Q_2026-09-30_ahco-20260930.htm.jsonl, page 27 |

## Gaps

- Trailing twelve-month EBITDA, leverage and interest cover at September 30, 2026 are not calculable because FY2025 and the fourth quarter of 2025 are not stated on the continuing-operations perimeter of the 2026 columns, which restricts every current-leverage conclusion; the Diabetes Health segment cannot be subtracted from FY2025 because USD 60 million of allocated corporate overhead stays in continuing operations; severity High; closing it needs FY2025 restated for the discontinued Diabetes Health business.
- Covenant levels, step-downs and the issuer's reported covenant ratios are not printed in any source, which restricts any covenant headroom statement to the borrowing limit the issuer states; severity Medium; closing it needs the executed 2026 credit agreement and compliance certificate.
- No source states the legal rank, collateral package, intercreditor terms or guarantor scope of the term loans, revolver or notes, so no facility is ranked in the debt stack and the security and ranking cells of the debt instruments table are not supplied; severity Medium; closing it needs the indentures and credit agreement.
- Carrying value by instrument is not disclosed, so the instruments are stated at principal with one financing cost adjustment; severity Low.
- Capital expenditure is not split into maintenance and growth, and the cash flow statement is printed year to date only, so no quarterly cash flow or maintenance capital figure is available; severity Low.
- Lines the statements print as a dash, and lines printed in one statement but not another (such as the warrant liability and interest rate swap lines in the 2026 cash flow statements), are recorded as not supplied rather than zero; severity Low.
- Segment figures for Diabetes Health are not supplied for the 2026 columns because the business is reported as discontinued operations, and no corporate or elimination line is printed because segment totals equal consolidated totals; severity Low.
- Letters of credit outstanding at December 31, 2024 are not stated, so undrawn availability net of letters of credit at that date is not supplied; severity Low.
- Operating indicators such as patients served, locations and registered app users are stated at different dates and in different forms in the annual report and the releases, and several quarterly values are not stated; severity Low.
- The nine-month and third-quarter cash interest paid is stated but cannot be used for a twelve-month cover ratio until a trailing EBITDA exists; severity Medium.
- The December 31, 2025 balance sheet is shown as the annual report printed it, while the later quarterly reports recast it for held-for-sale assets (goodwill 2,541,428 thousand against 2,457,627 thousand); totals are unchanged and the difference is explained, so severity Low.
- The release headline net loss attributable and the statement net loss attributable differ in basis (continuing operations against all operations); both are given and the statement figure is used; severity Low.

## Next module

The orchestrator selects the next module.

