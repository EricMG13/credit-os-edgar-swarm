---
module_id: CP-1
module_name: FinancialFoundation
issuer_id: tnet-937098
analysis_date: 2026-11-18
module_status: Complete
---

## Request

Financial foundation for Trinet Group, Inc. (tnet-937098) as of 2026-11-18 under the credit snapshot pathway. The scope is the consolidated income statement, cash flow, balance sheet, debt, liquidity and credit metrics for FY2023 to FY2025, nine months 2025 and nine months 2026, with a last-twelve-months view to 2026-09-30.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_tnet.htm.jsonl | Annual report on Form 10-K of Trinet Group, Inc. for the year ended December 31, 2024 | 2025-02-13 | dff167df35fa6c58c40fa71f75e3c029e4dffbe00c50d576f833e1f71a7bf55f | FY2023 balance sheet, FY2024 and FY2023 statements, FY2024 debt note, 2024 revolver history and remaining capacity. |
| 10-K_2025-12-31_tnet.htm.jsonl | Annual report on Form 10-K of Trinet Group, Inc. for the year ended December 31, 2025 | 2026-02-12 | fc4faff14384e279442e1e94ba41397be8676b8f8e22ba0a9628e4f56eda5fad | Audited FY2025, FY2024 and FY2023 statements, adjusted EBITDA reconciliation, debt note, liquidity and obligations. |
| 10-Q_2026-03-31_tnet.htm.jsonl | Quarterly report on Form 10-Q of Trinet Group, Inc. for the quarter ended March 31, 2026 | 2026-04-30 | 2ee0c1102c38824a525b1c7ffdd1045842db8658f75984b4a0d3e8aecf5ba2a7 | Covenant compliance statement and Cocoon acquisition notice; no figures extracted into the tables. |
| 10-Q_2026-06-30_tnet.htm.jsonl | Quarterly report on Form 10-Q of Trinet Group, Inc. for the quarter ended June 30, 2026 | 2026-07-30 | d3b010931f56e186b4bd36b7941bb66993a25a2b2c5ef5568f6b42fc2b810e4f | Cocoon acquisition note and covenant compliance statement; no figures extracted into the tables. |
| 10-Q_2026-09-30_tnet.htm.jsonl | Quarterly report on Form 10-Q of Trinet Group, Inc. for the quarter ended September 30, 2026 | 2026-10-29 | 129ed71c15bd0c1c63080ef0d5fa30243e90f8ad32a531be35d324b779874a81 | Nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, capital resources, fair values and dividends. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | f5028dbe62ed6410c33b94be43bfb8a1f025f14edc3c98bf19335e8de4c6c6d3 | Source inventory, period fit, the covenant, letters-of-credit and legal-document gaps and the Cocoon closing-day conflict; no financial balances imported. |

Document dates are the dates on each report's signature page. No external sources were used. The run settings are not issuer evidence and are not listed.

## Findings

### Bottom line

Trinet's leverage is moderate and well covered but sits on a shrinking, interest-income-supported earnings base: net debt is 1.58x last-twelve-months reported EBITDA, cash interest cover is 7.33x and no borrowed debt matures before 2029, so debt service looks secure while earnings durability is the exposure.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; calculation C09; calculation C10

Reported EBITDA of USD 359 million is derived, because the issuer states only Adjusted EBITDA of USD 460 million, and interest income on client funds supplies USD 53 million of it. Net debt of USD 568 million becomes USD 581 million, or 1.62x, after the October dividend. The covenant level and revolver availability after letters of credit are not established.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 12; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; calculation C02; calculation C07; calculation C11; Source readiness (CP-0)

### Key findings

Leverage rose from FY2023 to FY2025 because earnings fell, not because debt rose, and has partly reversed in 2026: total debt fell from USD 1,093 million at FY2023 to USD 896 million at 2026-09-30, but reported EBITDA fell from USD 613 million in FY2023 to USD 339 million in FY2025 before recovering to USD 359 million on a last-twelve-months basis. Net debt over reported EBITDA moved from 1.31x to 1.72x, 1.79x and 1.58x, and on Adjusted EBITDA from 1.16x to 1.23x. Net debt counts unrestricted cash only, so the USD 50 million of corporate investments at 2026-09-30 would lower net leverage to 1.44x if included.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; calculation C01; calculation C02; calculation C08; calculation C09; calculation C10; calculation C14

Cash interest cover has fallen from the FY2023 level because the first coupon on the 2031 notes was paid in February 2024, after that year-end: reported EBITDA covered cash interest paid 24.52x in FY2023, 6.15x in FY2024, 6.52x in FY2025 and 7.33x on a last-twelve-months basis (9.39x on Adjusted EBITDA). Cash interest paid was USD 52 million in FY2025 and USD 49 million over the last twelve months, which compares with interest expense, bank fees and other of USD 56 million in FY2025.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-K_2025-12-31_tnet.htm.jsonl, page 119; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; calculation C03; calculation C10

Cash generation is solid but is returned to shareholders in full: operating cash flow was USD 303 million in FY2025 and free cash flow after capital expenditure USD 234 million, against buybacks and dividends of USD 235 million. In the nine months to 2026-09-30 free cash flow was USD 243 million against USD 134 million of buybacks and dividends, so the 2026 pace leaves room to build cash.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; calculation C12; calculation C13

Liquidity is ample against a maturity profile with nothing borrowed due before 2029: unrestricted cash was USD 328 million and the USD 700 million revolver had no borrowings at 2026-09-30, while the only maturities are USD 500 million in 2029 and USD 400 million in 2031 and the revolver itself matures in 2028. Availability after letters of credit is stated only at year-end, USD 699 million at 2025-12-31, so the September figure is before letters of credit.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, pages 25–26; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-K_2025-12-31_tnet.htm.jsonl, page 120; 10-K_2025-12-31_tnet.htm.jsonl, pages 118–119; calculation C08

Claims outside the debt figure are identifiable: operating lease liabilities of USD 67 million at 2026-09-30, purchase obligations of USD 136 million and workers' compensation obligations of USD 151 million at FY2025, none of which is added to debt. No pension, retiree medical, factoring, supply-chain finance or consent decree obligation is described, and litigation is accrued at amounts the filings call immaterial.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-K_2025-12-31_tnet.htm.jsonl, pages 80–81; 10-Q_2026-09-30_tnet.htm.jsonl, pages 38–39; calculation C23

The latest quarter was weaker than the nine months suggest: in Q3 2026 revenue was USD 1,175 million against USD 1,232 million, derived reported EBITDA USD 68 million against USD 79 million, Adjusted EBITDA USD 89 million against USD 100 million and net income USD 31 million against USD 34 million. The nine-month gain in Adjusted EBITDA includes a one-time recovery of USD 21 million of prior-year costs in Q2 2026, so the underlying trend is flatter than the nine-month comparison. No debt was issued or repaid in the nine months.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28; 10-Q_2026-09-30_tnet.htm.jsonl, page 12; 10-Q_2026-09-30_tnet.htm.jsonl, page 10; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; calculation C01

Part of reported EBITDA is yield on client funds, not operations. Interest income earned on funds held for clients is booked in revenue and was USD 67 million in FY2025, or 19.76% of reported EBITDA, and USD 53 million over the last twelve months, or 14.76%. The funding float behind it is shrinking: payroll tax liabilities and other payroll withholdings fell from USD 1,906 million at FY2024 to USD 1,198 million at 2026-09-30, and nine-month interest income fell from USD 53 million to USD 39 million. Lower client balances or lower short-term rates cut EBITDA without any change in operating performance.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; calculation C15; calculation C16

One subsequent event is stated: the October 2026 dividend, which was declared and unpaid at 2026-09-30 at USD 13 million. It raises net debt to USD 581 million and net leverage to 1.62x on the same reported EBITDA, and it is kept out of the period figures.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 29; 10-Q_2026-09-30_tnet.htm.jsonl, page 25; calculation C11

Data quality limits the foundation in three ways. The issuer states no unadjusted EBITDA, so reported EBITDA is derived from income before tax, interest expense, bank fees and other, and amortization of intangible assets. The quarterly reports print no debt table, so USD 900 million of note principal exceeds balance-sheet debt of USD 896 million by USD 4 million without a printed explanation. Source dashes are carried as not supplied, not as zero.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12; 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; calculation C01; calculation C19

### Contrary evidence and what would change the view

The strongest case against the earnings-durability concern is nine-month momentum: Adjusted EBITDA for nine months 2026 was USD 403 million against USD 368 million a year earlier, operating cash flow rose to USD 317 million from USD 242 million, the insurance cost ratio fell to 86% from 90%, and net leverage on reported EBITDA improved from 1.79x at FY2025 to 1.58x. Implied Q4 2025 reported EBITDA was only USD 31 million, so a Q4 2026 above that level lifts the last-twelve-months figure. That case is weaker than it looks, because the nine-month gain includes the one-time recovery and the latest quarter went the other way.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 10; 10-Q_2026-09-30_tnet.htm.jsonl, page 11; 10-Q_2026-09-30_tnet.htm.jsonl, page 12; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; calculation C09; calculation C10; calculation C22; calculation C01

What would change the view is a reversal in the drivers of that improvement: a higher insurance cost ratio, a further fall in worksite employees (total worksite employees were down 11% year on year at 2026-09-30), lower interest income as client balances or rates fall, or shareholder payments above free cash flow as in FY2025. A covenant level or letters-of-credit figure that proved tight would also change it, and neither is in the sources.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 13; 10-K_2025-12-31_tnet.htm.jsonl, page 74; 10-Q_2026-09-30_tnet.htm.jsonl, page 25; calculation C12; calculation C13

### Limitations

Reported EBITDA is a derived figure and the interim tables use a last-twelve-months construction, so neither ties to a printed statement line for interim periods. Debt detail by instrument is printed only at year-end, revolver availability after letters of credit is stated only at year-end, the covenant level is not printed, and discrete 2025 quarters are available only as comparatives inside the 2026 reports. Dashes in the statements are not assumed to be zero, and the October dividend is linked to the declared-and-unpaid amount by inference.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 118–120; 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 32; Source readiness (CP-0)

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 1.78 | 1.31 | x | Carrying-value debt over derived reported EBITDA at FY2023, before the 2024 restructuring and before the first coupon on the 2031 notes. |
| FY2024 / 2024-12-31 | 2.71 | 1.72 | x | Carrying-value debt over derived reported EBITDA; unadjusted EBITDA is derived by this module, not stated by the issuer. |
| FY2025 / 2025-12-31 | 2.64 | 1.79 | x | Carrying-value debt over derived reported EBITDA; unadjusted EBITDA is derived by this module, not stated by the issuer. |
| 2026-09-30 | 2.50 | 1.58 | x | Carrying-value debt at 2026-09-30 over last-twelve-months derived reported EBITDA (FY2025 + 9M 2026 - 9M 2025); an interim figure, so no statement tie. |

Net debt deducts unrestricted cash only, and EBITDA is derived because the issuer states only an adjusted figure.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 24.52 | x | Derived reported EBITDA over cash interest paid (operating-activity supplemental disclosure); FY2023 cash interest includes no coupon on the 2031 notes, whose first payment was February 2024. |
| FY2024 / 2024-12-31 | 6.15 | x | Derived reported EBITDA over cash interest paid (operating-activity supplemental disclosure). |
| FY2025 / 2025-12-31 | 6.52 | x | Derived reported EBITDA over cash interest paid (operating-activity supplemental disclosure). |
| 2026-09-30 | 7.33 | x | Derived reported EBITDA over cash interest paid (operating-activity supplemental disclosure); last-twelve-months cash interest paid of 49 (FY2025 + 9M 2026 - 9M 2025). |

Cash interest paid differs from interest expense, bank fees and other, which also includes bank fees and non-cash interest.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 287 | Not supplied: the 2024 annual report states remaining revolver capacity at 2024-12-31 only | US$m | Cash is unrestricted cash and cash equivalents; revolver availability at 2023-12-31 is not stated (200 drawn of a 700 commitment, letters of credit not stated). |
| FY2024 / 2024-12-31 | 360 | 606 | US$m | Cash is unrestricted cash and cash equivalents; remaining revolver capacity of 606 is the amount the 2024 annual report states after 90 drawn and letters of credit. |
| FY2025 / 2025-12-31 | 287 | 699 | US$m | Cash is unrestricted cash and cash equivalents; remaining revolver capacity of 699 is the amount the 2025 annual report states with no borrowings. |
| 2026-09-30 | 328 | 700 | US$m | Cash is unrestricted cash and cash equivalents; 700 is the revolver commitment with no borrowings outstanding, before letters of credit that are not stated at this date. |

The latest undrawn figure is the commitment before letters of credit, while earlier figures are stated after them.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 0 | US$m | No scheduled principal: neither note matures and the revolver has no balance (remainder of 2026 from 2026-09-30). |
| FY2027 | 0 | US$m | No scheduled principal: neither note matures and the revolver has no balance. |
| FY2028 | 0 | US$m | The revolver commitment matures 2028-08-16 per the 2024 annual report, with no balance outstanding, so no principal falls due. |
| FY2029 | 500 | US$m | 2029 Notes, 3.50% senior unsecured, due March 2029; principal as stated, single maturity. |
| FY2030 | 0 | US$m | No scheduled principal: neither note matures and the revolver has no balance. |
| FY2031 | 400 | US$m | 2031 Notes, 7.125% senior unsecured, due August 2031; principal as stated, single maturity. |

The ladder is built from instrument maturity dates at 2026-09-30 and assumes no scheduled amortization, which the sources do not state either way.

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 4994 | 697 | US$m | Issuer-adjusted EBITDA (non-GAAP). Fiscal year, twelve months. |
| FY2024 / 2024-12-31 | 5053 | 485 | US$m | Issuer-adjusted EBITDA (non-GAAP). Fiscal year, twelve months. |
| FY2025 / 2025-12-31 | 5010 | 425 | US$m | Issuer-adjusted EBITDA (non-GAAP). Fiscal year, twelve months. |
| 2026-09-30 | 4827 | 460 | US$m | Issuer-adjusted EBITDA (non-GAAP). Last twelve months to 2026-09-30: FY2025 + 9M 2026 - 9M 2025, a twelve-month duration like the fiscal years. |

Adjusted EBITDA adds back stock-based compensation, amortization of cloud computing arrangements, restructuring and transaction costs.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| 2029 Notes | 1 | No | 500 | 1.39 | US$m | Senior unsecured, 3.50%, due March 2029; issuer TriNet Group, Inc., guarantors are 'the guarantors listed therein' in the indenture and are not named in the sources. Principal, not carrying value; cumulative leverage on last-twelve-months reported EBITDA of 359. The revolver's rank and security are not stated and it has no balance, so it is left out and named under Gaps. |
| 2031 Notes | 1 | No | 400 | 2.51 | US$m | Senior unsecured, 7.125%, due August 2031; ranks equally with the 2029 Notes as senior unsecured; guarantors not named in the sources. Principal, not carrying value; cumulative 900 over reported EBITDA of 359, against 2.50x on carrying value. |

The stack shows principal and only the two note issues; the undrawn revolver is excluded because its rank and security are not stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 339 | US$m | Derived reported EBITDA: income before tax 217 + interest expense, bank fees and other 56 + amortization of intangible assets 66. |
| Stock based compensation | 65 | US$m | Add-back as stated in the issuer's reconciliation; classification share-based compensation; realisation not stated. |
| Amortization of cloud computing arrangements | 10 | US$m | Add-back as stated; classification other stated (non-cash amortization); realisation not stated. |
| Restructuring costs | 11 | US$m | Add-back as stated; classification restructuring; realisation not stated. |
| EBITDA (Adjusted), FY2025 | 425 | US$m | Issuer-adjusted EBITDA as stated; transaction and integration costs print as a dash in FY2025 and are not a step. |

The bridge is for FY2025 only and starts from a reported EBITDA this module derived, so the opening amount is calculated, not stated.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Total revenues | 4994 | 5053 | 5010 | 4827 | USD millions | Reported; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 |
| EBITDA (Reported) | 613 | 363 | 339 | 359 | USD millions | Calculated: income before tax + interest expense, bank fees and other + amortization of intangible assets | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 |
| EBITDA (Adjusted) | 697 | 485 | 425 | 460 | USD millions | Issuer-adjusted; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| Adjusted EBITDA margin | 13.96 | 9.60 | 8.48 | 9.53 | percent | Calculated: adjusted EBITDA over total revenues | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| Net income | 375 | 173 | 155 | 172 | USD millions | Reported; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Net cash from operating activities | 539 | 279 | 303 | 378 | USD millions | Reported; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Capital expenditures | 75 | 78 | 69 | 92 | USD millions | Acquisitions of property and equipment and software; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Free cash flow (operating cash flow less capital expenditures) | 464 | 201 | 234 | 286 | USD millions | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Cash interest paid | 25 | 59 | 52 | 49 | USD millions | Reported supplemental disclosure; LTM derived | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Total debt (carrying value) | 1093 | 983 | 895 | 896 | USD millions | Calculated: revolver borrowings plus long-term debt, noncurrent | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Cash and cash equivalents | 287 | 360 | 287 | 328 | USD millions | Reported; unrestricted only | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Net debt | 806 | 623 | 608 | 568 | USD millions | Calculated: total debt less cash and cash equivalents | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total debt / EBITDA (Reported) | 1.78 | 2.71 | 2.64 | 2.50 | x | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Net debt / EBITDA (Reported) | 1.31 | 1.72 | 1.79 | 1.58 | x | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Net debt / EBITDA (Adjusted) | 1.16 | 1.28 | 1.43 | 1.23 | x | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| EBITDA (Reported) / cash interest | 24.52 | 6.15 | 6.52 | 7.33 | x | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| EBITDA (Adjusted) / cash interest | 27.88 | 8.22 | 8.17 | 9.39 | x | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Interest income as a share of EBITDA (Reported) | 11.75 | 17.63 | 19.76 | 14.76 | percent | Calculated: interest income over derived reported EBITDA | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 1093 | 287 | 806 | US$m | Gross debt is carrying value: revolver borrowings 109 current plus long-term debt, noncurrent 984; includes the revolver drawn 200, the 2029 Notes and the 2031 Notes; principal 1,100. Operating lease liabilities are on their own lines and excluded. Cash is unrestricted cash only; 65 of current and 143 of noncurrent investments are excluded. |
| FY2024 / 2024-12-31 | 983 | 360 | 623 | US$m | Gross debt is carrying value: revolver borrowings 75 current plus long-term debt, noncurrent 908; includes the revolver drawn 90, the 2029 Notes and the 2031 Notes; principal 990. Operating lease liabilities are excluded. Cash is unrestricted cash only. |
| FY2025 / 2025-12-31 | 895 | 287 | 608 | US$m | Gross debt is carrying value: long-term debt, noncurrent 895 (2029 Notes 498 and 2031 Notes 397), no revolver balance; principal 900. Operating lease liabilities are excluded. Cash is unrestricted cash only. |
| 2026-09-30 | 896 | 328 | 568 | US$m | Gross debt is carrying value: long-term debt, noncurrent 896, no revolver balance; principal 900 (500 and 400). Operating lease liabilities are excluded. Cash is unrestricted cash only; 50 of corporate investments and 1,164 of restricted funds are excluded. Reported, before the October dividend. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 900 | -4 | 896 | US$m | Principal is the sum of the debt maturities ladder (500 + 400). The reconciling item of -4 is the arithmetic difference between principal and balance-sheet debt; the quarterly report prints no issuance-cost schedule, so it is attributed to unamortized issuance costs by inference (5 at 2025-12-31). The revolver has no balance. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| October 2026 cash dividend of USD 0.29 per share, declared and unpaid at 2026-09-30 | Not supplied: the source states October 2026 only | 13 | 581 | 1.62 | US$m | The nine-month cash flow supplemental schedule states a cash dividend declared but not yet paid of 13, and the filing says the October dividend was paid; it does not link the two in words. Pro forma net debt is net debt of 568 plus 13, over last-twelve-months reported EBITDA of 359. No October share repurchases or other events are stated. |

### Period table

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| Professional service revenues | 756 | 765 | 719 | 169 | 157 | 550 | 505 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Insurance service revenues | 4166 | 4224 | 4224 | 1046 | 1005 | 3159 | 3035 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Interest income | 72 | 64 | 67 | 17 | 13 | 53 | 39 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Total revenues | 4994 | 5053 | 5010 | 1232 | 1175 | 3762 | 3579 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Insurance costs | 3513 | 3797 | 3835 | 943 | 894 | 2832 | 2617 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Cost of providing services | 307 | 304 | 289 | 73 | 68 | 215 | 203 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Sales and marketing | 285 | 289 | 269 | 68 | 72 | 203 | 207 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| General and administrative | 211 | 232 | 207 | 51 | 53 | 149 | 168 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Systems development and programming | 65 | 68 | 71 | 18 | 20 | 55 | 56 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Depreciation and amortization of intangible assets | 72 | 75 | 66 | 16 | 17 | 50 | 53 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Interest expense, bank fees and other | 40 | 62 | 56 | 13 | 12 | 42 | 39 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Total costs and operating expenses | 4493 | 4827 | 4793 | 1182 | 1136 | 3546 | 3343 | USD millions | Reported total as printed in the annual MD&A table and the interim statement | 10-K_2025-12-31_tnet.htm.jsonl, page 70; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Income before tax | 501 | 226 | 217 | 50 | 39 | 216 | 236 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Income taxes | 126 | 53 | 62 | 16 | 8 | 60 | 63 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Net income | 375 | 173 | 155 | 34 | 31 | 156 | 173 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| Stock based compensation | 59 | 65 | 65 | 17 | 17 | 48 | 50 | USD millions | Reported in the issuer's reconciliation of net income to Adjusted EBITDA; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| Amortization of cloud computing arrangements | 8 | 8 | 10 | 2 | 4 | 7 | 10 | USD millions | Reported in the issuer's reconciliation of net income to Adjusted EBITDA; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| Restructuring costs | Not supplied: source dash | 49 | 11 | 2 | Not supplied: source dash | 5 | 13 | USD millions | Reported in the issuer's reconciliation of net income to Adjusted EBITDA; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| Transaction and integration costs | 17 | Not supplied: source dash | Not supplied: source dash | Not supplied: source dash | Not supplied: source dash | Not supplied: source dash | 2 | USD millions | Reported in the issuer's reconciliation of net income to Adjusted EBITDA; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |
| EBITDA (Reported) | 613 | 363 | 339 | 79 | 68 | 308 | 328 | USD millions | Calculated: Income before tax + Interest expense, bank fees and other + Depreciation and amortization of intangible assets; the issuer states no unadjusted EBITDA; interest income stays in revenue | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 |
| EBITDA (Adjusted) | 697 | 485 | 425 | 100 | 89 | 368 | 403 | USD millions | Issuer-stated non-GAAP Adjusted EBITDA: net income excluding taxes, stock based compensation, interest expense, bank fees and other, depreciation and amortization, cloud computing amortization, restructuring and transaction costs | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income | 375 | 173 | 155 | 156 | 173 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Depreciation and amortization of intangible assets | 72 | 75 | 66 | 50 | 53 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Amortization of deferred costs | 40 | 44 | 49 | 36 | 39 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Amortization of ROU asset, lease modification, impairment, and abandonment | 9 | 11 | 7 | 5 | 6 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Stock based compensation | 59 | 65 | 65 | 48 | 50 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Deferred income taxes | 5 | -2 | 45 | -3 | -2 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Impairment of intangibles and other | 7 | 28 | 5 | 4 | 9 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; the interim statement prints this line as Other | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Accounts receivable, net | -3 | -2 | Not supplied: source dash | 1 | 1 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Prepaid expenses, net | 4 | -18 | -12 | 14 | 26 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Other payroll assets | -3 | 3 | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Other assets | -35 | -52 | -42 | -30 | -34 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Accounts payable and other liabilities | -11 | Not supplied: source dash | -4 | Not supplied: source dash | 9 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Client deposits and other client liabilities | 23 | -10 | -3 | -1 | -2 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Accrued wages | 7 | -5 | -2 | -15 | -8 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Accrued health insurance costs, net | 7 | -2 | 1 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Accrued workers' compensation costs, net | -8 | -11 | -4 | Not supplied: source dash | -3 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Payroll taxes liabilities and other payroll withholdings | 8 | -3 | -10 | -12 | -1 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Operating lease liabilities | -17 | -15 | -13 | -11 | 1 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Working-capital change (sum of the printed movements) | -28 | -115 | -89 | -54 | -11 | USD millions | Calculated: sum of the changes in operating assets and liabilities printed above | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Net Cash from Operating Activities | 539 | 279 | 303 | 242 | 317 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; interest paid is classified in operating activities | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Purchases of marketable securities | -276 | -190 | -78 | -59 | -151 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Proceeds from sale and maturity of marketable securities | 286 | 421 | 103 | 82 | 78 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Acquisitions of property and equipment and software | -75 | -78 | -69 | -51 | -74 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Proceeds from sale of business | Not supplied: source dash | Not supplied: source dash | 1 | 1 | Not supplied: source dash | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Acquisition of subsidiary, net of cash acquired | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: source dash | -22 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Other Investments | -5 | Not supplied: source dash | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Net Cash from Investing Activities | -70 | 153 | -43 | -27 | -169 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Change in WSE and TriNet Trust related assets and liabilities, net | 6 | 139 | 281 | -303 | -529 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Repurchase of common stock | -1122 | -183 | -183 | -122 | -94 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Proceeds from issuance of common stock | 15 | 12 | 11 | 6 | 5 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Payment of long-term financing costs and debt issuance costs | -9 | Not supplied: source dash | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Proceeds from issuance of 2031 Notes | 400 | Not supplied: source dash | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Proceeds from revolving credit agreement borrowings | 695 | Not supplied: source dash | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Repayment of revolving credit agreement borrowings | -495 | -110 | -90 | -90 | Not supplied: source dash | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Awards effectively repurchased for required employee withholding taxes | -30 | -28 | -16 | -12 | -10 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Dividends paid | Not supplied: source dash | -37 | -52 | -39 | -40 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Net Cash from Financing Activities | -540 | -207 | -49 | -560 | -668 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; includes the change in client-fund (WSE and TriNet Trust) assets and liabilities | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Net Cash Change | -71 | 225 | 211 | -345 | -520 | USD millions | Reported; operating plus investing plus financing; the statements print no exchange-rate effect line in these periods | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Opening Cash | 1537 | 1466 | 1691 | 1691 | 1902 | USD millions | Reported; cash, cash equivalents and restricted cash (client funds included), not the balance-sheet unrestricted line | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Closing Cash | 1466 | 1691 | 1902 | 1346 | 1382 | USD millions | Reported; cash, cash equivalents and restricted cash (client funds included), not the balance-sheet unrestricted line | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Cash Interest Paid | 25 | 59 | 52 | 51 | 48 | USD millions | Reported supplemental disclosure of cash paid | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Income taxes paid, net | 114 | 76 | 27 | 27 | 17 | USD millions | Reported supplemental disclosure of cash paid | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |
| Free cash flow (operating cash flow less capital expenditures) | 464 | 201 | 234 | 191 | 243 | USD millions | Calculated: Net Cash from Operating Activities less Acquisitions of property and equipment and software; levered, after working capital | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 287 | 360 | 287 | 328 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Investments | 65 | Not supplied: source dash | Not supplied: source dash | 50 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero; a line the later statement does not print is not supplied | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Restricted cash, cash equivalents and investments | 1269 | 1413 | 1694 | 1164 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accounts receivable, net | 18 | 32 | 20 | 7 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Payroll funds receivable | 447 | 349 | 264 | 371 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Prepaid expenses, net | 67 | 64 | 82 | 47 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Other payroll assets | 381 | 916 | 474 | 414 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Other current assets | 44 | 46 | 47 | 50 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total current assets | 2578 | 3180 | 2868 | 2431 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; printed subtotal | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Restricted cash, cash equivalents and investments, noncurrent | 158 | 145 | 128 | 116 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Investments, noncurrent | 143 | Not supplied: source dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero; a line the later statement does not print is not supplied | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Property and equipment, net | 17 | 10 | 11 | 27 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Operating lease right-of-use asset | 24 | 24 | 36 | 47 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Goodwill | 462 | 461 | 461 | 465 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Software and other intangible assets, net | 172 | 156 | 153 | 176 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Other assets | 139 | 143 | 140 | 131 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total Assets | 3693 | 4119 | 3797 | 3393 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; printed subtotal | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accounts payable and other current liabilities | 87 | 89 | 86 | 91 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Revolving credit agreement borrowings | 109 | 75 | Not supplied: source dash | Not supplied: line not printed in this statement | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; a dash is not assumed zero; a line the later statement does not print is not supplied | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Client deposits and other client liabilities | 65 | 76 | 57 | 44 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accrued wages | 515 | 580 | 555 | 561 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accrued health insurance costs, net | 175 | 189 | 207 | 181 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accrued workers' compensation costs, net | 50 | 44 | 42 | 42 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Payroll tax liabilities and other payroll withholdings | 1438 | 1906 | 1671 | 1198 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Operating lease liabilities | 14 | 13 | 10 | 11 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Insurance premiums and other payables | 10 | 9 | 9 | 8 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total current liabilities | 2463 | 2981 | 2637 | 2136 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; printed subtotal | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Long-term debt, noncurrent | 984 | 908 | 895 | 896 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Accrued workers' compensation costs, noncurrent, net | 120 | 110 | 106 | 103 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Deferred taxes | 13 | 11 | 55 | 51 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Operating lease liabilities, noncurrent | 30 | 26 | 37 | 56 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Other non-current liabilities | 5 | 14 | 13 | 18 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total Liabilities | 3615 | 4050 | 3743 | 3260 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim; printed subtotal | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total Equity | 78 | 69 | 54 | 133 | USD millions | Reported; Tier 1 audited annual and Tier 2b unaudited interim | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total liabilities & stockholders' equity | 3693 | 4119 | 3797 | 3393 | USD millions | Reported; equals Total Assets | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Total Debt | 1093 | 983 | 895 | 896 | USD millions | Calculated: Revolving credit agreement borrowings plus Long-term debt, noncurrent, at carrying value net of issuance costs; operating lease liabilities are on their own lines and are not added | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |
| Cash & Equivalents | 287 | 360 | 287 | 328 | USD millions | Reported unrestricted cash and cash equivalents; restricted cash, cash equivalents and investments are separate lines | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_tnet.htm.jsonl | Annual report on Form 10-K | FY2024 with FY2023 and FY2022 comparatives | USD | millions | Trinet Group, Inc. consolidated | US GAAP | Tier 1 audited | FY2023 balance sheet; 2024 debt, revolver history and remaining capacity | Superseded for FY2024 and FY2025 figures by the later annual report; it prints cash-flow lines that the later annual report condenses |
| 10-K_2025-12-31_tnet.htm.jsonl | Annual report on Form 10-K | FY2025 with FY2024 and FY2023 comparatives | USD | millions | Trinet Group, Inc. consolidated | US GAAP | Tier 1 audited | Controlling annual statements, adjusted EBITDA reconciliation, debt note, liquidity | Debt note gives year-end instrument detail only; chart figures carry no values in the text |
| 10-Q_2026-03-31_tnet.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 | USD | millions | Trinet Group, Inc. consolidated | US GAAP | Tier 2b unaudited | Covenant compliance statement and Cocoon notice only | No figures extracted; no debt note |
| 10-Q_2026-06-30_tnet.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 and H1 2026 | USD | millions | Trinet Group, Inc. consolidated | US GAAP | Tier 2b unaudited | Cocoon acquisition note and covenant statement only | No figures extracted; no debt note |
| 10-Q_2026-09-30_tnet.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026 and 9M 2026 with 2025 comparatives | USD | millions | Trinet Group, Inc. consolidated | US GAAP | Tier 2b unaudited | Nine-month statements, balance sheet at 2026-09-30, capital resources, fair values, dividends | No debt note; some prior-year amounts reclassified |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Trinet Group, Inc. | Issuer, registrant and reporting parent; note issuer | December 31 | USD | millions | Consolidated, including the variable interest entity TriNet Trust | US GAAP | FY2023; FY2024; FY2025; 9M 2025; 9M 2026 |
| TriNet Trust | Consolidated variable interest entity holding ASO client funds | December 31 | USD | millions | Included in consolidated statements and in the WSE and TriNet Trust column of the liquidity table | US GAAP | Balance at 2026-09-30 and 2025-12-31 |
| TriNet USA, Inc. | Named as Holdings in the exhibit index description of the credit agreement; the borrower is not named | Not supplied: not stated | USD | millions | Not supplied: no standalone statements | Not supplied | Not supplied: no standalone periods |

Subsequent event: the October 2026 dividend is dated by month only and is held in the post-balance-sheet table, not in any period figure.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 29

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Presentation basis kept | Q3 and K25 statements | Presentation only | USD millions; US GAAP; consolidated | USD millions; US GAAP; consolidated | No conversion, perimeter or basis change | All |
| Source dash carried as a gap | Statements | Presentation | Printed dash | Not supplied: source dash | A dash is not assumed to be zero | FY2023; FY2024; FY2025; 9M 2025; 9M 2026 |
| Reported EBITDA derived | T4.4 | Calculated | Not stated by the issuer | Income before tax + interest expense, bank fees and other + amortization of intangible assets | Method requires reported EBITDA as the leverage denominator; issuer states only an adjusted figure | All |
| Total Debt assembled | T4.6 | Calculated | Revolver borrowings and long-term debt lines | Their sum at carrying value | Method debt basis; operating lease liabilities are not added | FY2023; FY2024; FY2025; 9M 2026 |
| Interim columns labelled by fiscal span | Q3 and K25 | Presentation | Nine months ended September 30 | 9M 2025 and 9M 2026 | Fiscal year is the calendar year | 9M 2025; 9M 2026 |
| Cash definitions kept apart | T4.5 and T4.6 | Presentation | Cash flow cash includes restricted cash | Closing Cash is not Cash & Equivalents | Both are stated and not merged | All |
| Condensed lines in the later annual report | K24 and K25 | Presentation | 2024 report prints accretion, provisions and losses on disposal separately | 2025 report prints Impairment of intangibles and other and merges payables lines | FY2024 and FY2023 totals agree; the later presentation is used | FY2023; FY2024 |
| Prior-year reclassification noted | Q3 | Presentation | Certain prior year amounts reclassified in the 2026 reports | Carried as printed in the 2026 reports | No earlier 2025 interim filing to compare | 9M 2025 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Total revenues | LTM to 2026-09-30 | USD 5,010m | USD 3,579m | USD 3,762m | USD 4,827m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 339m | USD 328m | USD 308m | USD 359m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 425m | USD 403m | USD 368m | USD 460m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| Cash Interest Paid | LTM to 2026-09-30 | USD 52m | USD 48m | USD 51m | USD 49m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 303m | USD 317m | USD 242m | USD 378m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| Capital expenditures | LTM to 2026-09-30 | USD 69m | USD 74m | USD 51m | USD 92m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| Free cash flow | LTM to 2026-09-30 | USD 234m | USD 243m | USD 191m | USD 286m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |
| Interest income | LTM to 2026-09-30 | USD 67m | USD 39m | USD 53m | USD 53m | Calculated | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | Interim periods only as comparatives inside the 2026 reports; LTM is latest full year plus current stub minus prior-year stub |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 1093 | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2023 / 2023-12-31 | USD | US$m | 1.78 | Calculated | Tier 1 audited | Debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 806 | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2023 / 2023-12-31 | USD | US$m | 1.31 | Calculated | Tier 1 audited | Net debt deducts unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 25 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2023 / 2023-12-31 | USD | US$m | 24.52 | Calculated | Tier 1 audited | Cash interest paid is the cash-flow supplemental figure |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 1093 | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 697 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2023 / 2023-12-31 | USD | US$m | 1.57 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 806 | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 697 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2023 / 2023-12-31 | USD | US$m | 1.16 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 697 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 25 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2023 / 2023-12-31 | USD | US$m | 27.88 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 983 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2024 / 2024-12-31 | USD | US$m | 2.71 | Calculated | Tier 1 audited | Debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 623 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2024 / 2024-12-31 | USD | US$m | 1.72 | Calculated | Tier 1 audited | Net debt deducts unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 59 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2024 / 2024-12-31 | USD | US$m | 6.15 | Calculated | Tier 1 audited | Cash interest paid is the cash-flow supplemental figure |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 983 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 485 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2024 / 2024-12-31 | USD | US$m | 2.03 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 623 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | 485 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2024 / 2024-12-31 | USD | US$m | 1.28 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 485 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 59 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2024 / 2024-12-31 | USD | US$m | 8.22 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 895 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2025-12-31_tnet.htm.jsonl, page 118 | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2025 / 2025-12-31 | USD | US$m | 2.64 | Calculated | Tier 1 audited | Debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 608 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2025-12-31_tnet.htm.jsonl, page 118 | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2025 / 2025-12-31 | USD | US$m | 1.79 | Calculated | Tier 1 audited | Net debt deducts unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 52 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2025 / 2025-12-31 | USD | US$m | 6.52 | Calculated | Tier 1 audited | Cash interest paid is the cash-flow supplemental figure |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 895 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2025-12-31_tnet.htm.jsonl, page 118 | 425 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2025 / 2025-12-31 | USD | US$m | 2.11 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 608 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2025-12-31_tnet.htm.jsonl, page 118 | 425 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | FY2025 / 2025-12-31 | USD | US$m | 1.43 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 425 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 52 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2025 / 2025-12-31 | USD | US$m | 8.17 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA; labelled |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 896 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 2026-09-30 | USD | US$m | 2.50 | Calculated | Tier 2b unaudited; last-twelve-months construction | Debt at carrying value; last-twelve-months construction, no statement tie |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 568 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 2026-09-30 | USD | US$m | 1.58 | Calculated | Tier 2b unaudited; last-twelve-months construction | Net debt deducts unrestricted cash only; last-twelve-months construction, no statement tie |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 49 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 2026-09-30 | USD | US$m | 7.33 | Calculated | Tier 2b unaudited; last-twelve-months construction | Cash interest paid is the cash-flow supplemental figure; last-twelve-months construction, no statement tie |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 896 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | 460 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 2026-09-30 | USD | US$m | 1.95 | Calculated | Tier 2b unaudited; last-twelve-months construction | Issuer-adjusted EBITDA; labelled; last-twelve-months construction, no statement tie |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 568 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | 460 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 2026-09-30 | USD | US$m | 1.23 | Calculated | Tier 2b unaudited; last-twelve-months construction | Issuer-adjusted EBITDA; labelled; last-twelve-months construction, no statement tie |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 460 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 49 | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 2026-09-30 | USD | US$m | 9.39 | Calculated | Tier 2b unaudited; last-twelve-months construction | Issuer-adjusted EBITDA; labelled; last-twelve-months construction, no statement tie |
| EBITDA margin (reported, percent) | EBITDA (Reported) / Total revenues x 100 | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 4994 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2023 | USD | US$m | 12.27 | Calculated | Tier 1 audited | Derived reported EBITDA; interest income is inside revenue |
| Adjusted EBITDA margin (percent) | EBITDA (Adjusted) / Total revenues x 100 | 697 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 4994 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2023 | USD | US$m | 13.96 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA over total revenues |
| Interest income as a share of reported EBITDA (percent) | Interest income / EBITDA (Reported) x 100 | 72 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2023 | USD | US$m | 11.75 | Calculated | Tier 1 audited | Interest income on client funds is booked in revenue |
| Free cash flow conversion (percent of reported EBITDA) | Free cash flow / EBITDA (Reported) x 100 | 464 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 613 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2023 | USD | US$m | 75.69 | Calculated | Tier 1 audited | Levered free cash flow after working capital and cash interest |
| Operating cash flow / total debt (percent) | Net Cash from Operating Activities / Total Debt x 100 | 539 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 1093 | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | FY2023 | USD | US$m | 49.31 | Calculated | Tier 1 audited | Debt at carrying value |
| Capital expenditures / revenue (percent) | Capital expenditures / Total revenues x 100 | 75 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 4994 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2023 | USD | US$m | 1.50 | Calculated | Tier 1 audited | Capital expenditures include capitalized software |
| EBITDA margin (reported, percent) | EBITDA (Reported) / Total revenues x 100 | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 5053 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2024 | USD | US$m | 7.18 | Calculated | Tier 1 audited | Derived reported EBITDA; interest income is inside revenue |
| Adjusted EBITDA margin (percent) | EBITDA (Adjusted) / Total revenues x 100 | 485 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 5053 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2024 | USD | US$m | 9.60 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA over total revenues |
| Interest income as a share of reported EBITDA (percent) | Interest income / EBITDA (Reported) x 100 | 64 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2024 | USD | US$m | 17.63 | Calculated | Tier 1 audited | Interest income on client funds is booked in revenue |
| Free cash flow conversion (percent of reported EBITDA) | Free cash flow / EBITDA (Reported) x 100 | 201 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 363 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2024 | USD | US$m | 55.37 | Calculated | Tier 1 audited | Levered free cash flow after working capital and cash interest |
| Operating cash flow / total debt (percent) | Net Cash from Operating Activities / Total Debt x 100 | 279 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 983 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2024-12-31_tnet.htm.jsonl, page 125 | FY2024 | USD | US$m | 28.38 | Calculated | Tier 1 audited | Debt at carrying value |
| Capital expenditures / revenue (percent) | Capital expenditures / Total revenues x 100 | 78 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 5053 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2024 | USD | US$m | 1.54 | Calculated | Tier 1 audited | Capital expenditures include capitalized software |
| EBITDA margin (reported, percent) | EBITDA (Reported) / Total revenues x 100 | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 5010 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2025 | USD | US$m | 6.77 | Calculated | Tier 1 audited | Derived reported EBITDA; interest income is inside revenue |
| Adjusted EBITDA margin (percent) | EBITDA (Adjusted) / Total revenues x 100 | 425 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 5010 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2025 | USD | US$m | 8.48 | Calculated | Tier 1 audited | Issuer-adjusted EBITDA over total revenues |
| Interest income as a share of reported EBITDA (percent) | Interest income / EBITDA (Reported) x 100 | 67 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2025 | USD | US$m | 19.76 | Calculated | Tier 1 audited | Interest income on client funds is booked in revenue |
| Free cash flow conversion (percent of reported EBITDA) | Free cash flow / EBITDA (Reported) x 100 | 234 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 339 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | FY2025 | USD | US$m | 69.03 | Calculated | Tier 1 audited | Levered free cash flow after working capital and cash interest |
| Operating cash flow / total debt (percent) | Net Cash from Operating Activities / Total Debt x 100 | 303 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 895 | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-K_2025-12-31_tnet.htm.jsonl, page 118 | FY2025 | USD | US$m | 33.85 | Calculated | Tier 1 audited | Debt at carrying value |
| Capital expenditures / revenue (percent) | Capital expenditures / Total revenues x 100 | 69 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 5010 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2025 | USD | US$m | 1.38 | Calculated | Tier 1 audited | Capital expenditures include capitalized software |
| EBITDA margin (reported, percent) | EBITDA (Reported) / Total revenues x 100 | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 4827 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 7.44 | Calculated | Tier 2b unaudited; last-twelve-months construction | Derived reported EBITDA; interest income is inside revenue |
| Adjusted EBITDA margin (percent) | EBITDA (Adjusted) / Total revenues x 100 | 460 | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | 4827 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 9.53 | Calculated | Tier 2b unaudited; last-twelve-months construction | Issuer-adjusted EBITDA over total revenues |
| Interest income as a share of reported EBITDA (percent) | Interest income / EBITDA (Reported) x 100 | 53 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 2026-09-30 | USD | US$m | 14.76 | Calculated | Tier 2b unaudited; last-twelve-months construction | Interest income on client funds is booked in revenue |
| Free cash flow conversion (percent of reported EBITDA) | Free cash flow / EBITDA (Reported) x 100 | 286 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 359 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | 2026-09-30 | USD | US$m | 79.67 | Calculated | Tier 2b unaudited; last-twelve-months construction | Levered free cash flow after working capital and cash interest |
| Operating cash flow / total debt (percent) | Net Cash from Operating Activities / Total Debt x 100 | 378 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 896 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | 2026-09-30 | USD | US$m | 42.19 | Calculated | Tier 2b unaudited; last-twelve-months construction | Debt at carrying value |
| Capital expenditures / revenue (percent) | Capital expenditures / Total revenues x 100 | 92 | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | 4827 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 2026-09-30 | USD | US$m | 1.91 | Calculated | Tier 2b unaudited; last-twelve-months construction | Capital expenditures include capitalized software |
| Total revenues growth (percent) | Total revenues / prior-period total revenues - 1, in percent | 5053 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 4994 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2024 | USD | US$m | 1.18 | Calculated | Tier 1 audited | Growth over the comparable prior period |
| Total revenues growth (percent) | Total revenues / prior-period total revenues - 1, in percent | 5010 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 5053 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | FY2025 | USD | US$m | -0.85 | Calculated | Tier 1 audited | Growth over the comparable prior period |
| Total revenues growth (percent) | Total revenues / prior-period total revenues - 1, in percent | 3579 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 3762 | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | 9M 2026 | USD | US$m | -4.86 | Calculated | Tier 2b unaudited | Growth over the comparable prior period |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|---|---|
| Operating | Insurance cost ratio (percent) | 84 | 90 | 91 | 90 | 89 | 90 | 86 | Up to FY2025, lower in 2026 | Insurance costs over insurance service revenues; the 2025 rise came from higher health benefits insurance costs and the 2026 fall follows repricing and a one-time recovery of costs of 21 from prior years in Q2 2026. |
| Operating | Average WSEs (worksite employees, period average) | 331,423 | 352,681 | 333,886 | 335,235 | 296,372 | 337,330 | 298,068 | Down | Average WSEs fell 12% in 9M 2026 against 9M 2025; includes PEO platform users. |
| Operating | Total WSEs (period end) | 347,542 | 360,681 | 323,206 | 331,973 | 295,494 | 331,973 | 295,494 | Down | Total WSEs 295,494 against 331,973 a year earlier, down 11%, mainly technology and professional services clients. |
| Earnings | Adjusted EBITDA margin as printed (percent) | 14.0 | 9.6 | 8.5 | 8.2 | 7.6 | 9.8 | 11.3 | Down to FY2025, up in 2026 | FY2023 is printed as 14.2 in the 2024 annual report and 14.0 in the 2025 annual report; the 9M margins are the issuer's own. |

The operating measures are the issuer's own and are labelled period average, period end or rate; they are not recomputed here.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 70; 10-K_2025-12-31_tnet.htm.jsonl, page 72; 10-K_2025-12-31_tnet.htm.jsonl, page 74; 10-Q_2026-09-30_tnet.htm.jsonl, page 11; 10-Q_2026-09-30_tnet.htm.jsonl, page 13; 10-Q_2026-09-30_tnet.htm.jsonl, page 12

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported (unadjusted) EBITDA is the denominator; adjusted EBITDA is shown beside it, labelled | Issuer states only Adjusted EBITDA, adding back stock based compensation, amortization of cloud computing arrangements, restructuring and transaction costs | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | All periods | FY2025: adjusted 425 against derived reported 339, a difference of 86; last twelve months: 460 against 359, a difference of 101 | Fundamental credit | Reported EBITDA is derived by this module and used as the primary denominator; adjusted ratios are separate labelled rows |
| Interest | Cash interest paid is the coverage denominator | Issuer prints interest expense, bank fees and other as an expense line and interest paid as cash | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 27; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | FY2023; FY2024; FY2025; 9M 2025; 9M 2026 | FY2025: expense 56 against cash paid 52; 9M 2026: expense 39 against cash paid 48 | Fundamental credit | Cash interest paid is used; the expense line also holds bank fees and non-cash interest |
| Debt | Total Debt is balance-sheet carrying value; principal is kept apart | Notes are stated at principal in the capital-resources text and at carrying value on the balance sheet | 10-K_2025-12-31_tnet.htm.jsonl, page 118; 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | FY2023; FY2024; FY2025; 9M 2026 | Principal against carrying value: 1,100 against 1,093 (FY2023); 990 against 983 (FY2024); 900 against 895 (FY2025); 900 against 896 (2026-09-30) | Fundamental credit | Carrying value is used; principal is shown in the reconciliation table |
| Net debt | Cash deducted is unrestricted cash and equivalents; restricted cash and investments are shown separately | Issuer shows corporate investments of 50 and restricted client and collateral funds of 1,164 at 2026-09-30 | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 35 | 9M 2026 | Net debt would be 518 and net leverage 1.44x if the investments were deducted; the restricted funds are held for client payroll, taxes and insurance collateral | Fundamental credit | Unrestricted cash only; the alternative is stated here |
| EBITDA content | EBITDA is an operating measure | Interest income earned on client funds is booked in revenue and is therefore inside EBITDA | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | All periods | Interest income is 19.76% of derived reported EBITDA in FY2025 and 14.76% over the last twelve months | Fundamental credit | Interest income is not deducted; its share is reported so the reader can adjust |
| Cash | Cash and equivalents is the balance-sheet unrestricted line | Cash flow statement cash includes restricted cash and client funds | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | All periods | Closing Cash 1382 against Cash & Equivalents 328 at 2026-09-30 | Fundamental credit | Both are stated and not merged |
| Adjusted EBITDA margin | Margin is adjusted EBITDA over total revenues | The 2024 annual report prints the FY2023 margin as 14.2% and the 2025 annual report prints 14.0% for the same Adjusted EBITDA of 697 | 10-K_2024-12-31_tnet.htm.jsonl, page 75; 10-K_2025-12-31_tnet.htm.jsonl, page 71 | FY2023 | 0.2 percentage points; amount unchanged | Fundamental credit | Margin is recomputed from printed revenue; the earlier denominator is not stated |
| Non-debt funding float | A non-interest-bearing liability funding operations is flagged, not treated as debt | Payroll tax liabilities and other payroll withholdings and client deposits are matched by restricted funds and receivables | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 21; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | FY2024; FY2025; 9M 2026 | Payroll tax liabilities and other payroll withholdings were 1,906 at FY2024, 1,671 at FY2025 and 1,198 at 2026-09-30 | Fundamental credit | Kept outside debt; trend and its effect on interest income are reported |
| Obligations outside debt | Operating lease liabilities, purchase obligations and workers' compensation obligations are kept outside Total Debt | The issuer presents lease liabilities on their own lines and prints purchase and workers' compensation obligations in a contractual table | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-K_2025-12-31_tnet.htm.jsonl, pages 80–81 | 9M 2026; FY2025 | Operating lease liabilities 67 at 2026-09-30 (11 current and 56 noncurrent); purchase obligations 136 and workers' compensation obligations 151 at FY2025; no pension, retiree medical or factoring obligation is described | Fundamental credit | Not added to debt; reported here |
| Acquisition date (event) | One closing day | First quarter report gives April 8, 2026; second and third quarter reports give April 10, 2026 | 10-Q_2026-03-31_tnet.htm.jsonl, page 40; 10-Q_2026-06-30_tnet.htm.jsonl, page 42; 10-Q_2026-09-30_tnet.htm.jsonl, page 43 | 9M 2026 | Gross purchase price 23 (includes 1 of the target's own cash) and net cash paid 22 (the acquisition line in 9M 2026 investing cash flow) agree across the reports; the day differs by two days | Business & governance | Later reports control; the difference is kept |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Financial foundation for a credit snapshot | Ready with Limitations | Reported EBITDA derived; quarterly reports print no debt table; letters of credit and covenant level not printed | Obtain the credit agreement and compliance certificate for the covenant level and letters of credit |
| Leverage and coverage metrics | Ready with Limitations | Interim ratios use a last-twelve-months construction; net debt uses unrestricted cash only | State the alternative net debt with investments, as done in the definition register |
| Liquidity | Ready with Limitations | Revolver availability after letters of credit stated only at year-end | Obtain letters of credit outstanding at 2026-09-30 |
| Covenant testing | Not Ready | Maximum total net leverage level, definition and reported ratio are not printed | Obtain the executed credit agreement |
| Debt by instrument at 2026-09-30 | Ready with Limitations | Instrument carrying values are not printed in the quarterly report; principal is stated | Use the year-end note table and the principal stated at 2026-09-30 |
| Segment view | Ready with Limitations | One reportable segment; revenue is shown by service type only | None |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2029 Notes | Senior unsecured notes | Not supplied: instrument carrying value is not printed in the quarterly report (498 at 2025-12-31) | 500 | 500 | Not applicable | Unsecured as stated | Senior unsecured; ranks equally with other senior unsecured debt | USD | 500 | Not applicable | 3.50% | Fixed | Not applicable | Not applicable | Not applicable | March 2029 | 0 | 10-Q_2026-09-30_tnet.htm.jsonl, pages 25–26; 10-K_2025-12-31_tnet.htm.jsonl, pages 118–119 |
| 2031 Notes | Senior unsecured notes | Not supplied: instrument carrying value is not printed in the quarterly report (397 at 2025-12-31) | 400 | 400 | Not applicable | Unsecured as stated | Senior unsecured | USD | 400 | Not applicable | 7.125% | Fixed | Not applicable | Not applicable | Not applicable | August 2031 | 0 | 10-Q_2026-09-30_tnet.htm.jsonl, pages 25–26; 10-K_2025-12-31_tnet.htm.jsonl, pages 118–119 |
| 2021 Revolver | Revolving credit facility | 0 | 0 | 0 | 700 | Not supplied: security is not stated in the sources | Not supplied: rank is not stated in the sources | USD | 0 | Not applicable | Term SOFR plus 1.25% to 2.00% margin and 10 bps credit adjustment spread | Floating | Term SOFR | 125 to 200 | 0 | 2028-08-16 (stated in the 2024 annual report only) | Not applicable | 10-Q_2026-09-30_tnet.htm.jsonl, pages 25–26; 10-K_2025-12-31_tnet.htm.jsonl, page 120; 10-K_2024-12-31_tnet.htm.jsonl, pages 126–127 |
| Financing cost adjustment | Aggregate issuance costs | Not supplied: not separately printed at 2026-09-30 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 |

The Reporting Currency Amounts add to balance-sheet debt: 500 + 400 + 0 + (-4) = 896.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; calculation C19

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 20 |
| Calculated | 30 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 16 |
| Fields total | 17 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 10 |

## Calculations

All amounts are USD millions as printed unless stated. Last twelve months to 2026-09-30 is the latest full year plus the nine months of 2026 less the nine months of 2025.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Reported EBITDA by period | FY2023: 501 + 40 + 72; FY2024: 226 + 62 + 75; FY2025: 217 + 56 + 66; Q3 2025: 50 + 13 + 16; Q3 2026: 39 + 12 + 17; 9M 2025: 216 + 42 + 50; 9M 2026: 236 + 39 + 53 (income before tax + interest expense, bank fees and other + amortization of intangible assets) | FY2023 613; FY2024 363; FY2025 339; Q3 2025 79; Q3 2026 68; 9M 2025 308; 9M 2026 328 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | Derived; the issuer states no unadjusted EBITDA. |
| C02 | Last-twelve-months reported EBITDA | 339 + 328 - 308 | 359 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | Latest full year plus current stub less prior-year stub. |
| C03 | Last-twelve-months cash interest paid | 52 + 48 - 51 | 49 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Cash paid, operating-activity supplemental disclosure. |
| C04 | Last-twelve-months total revenues | 5010 + 3579 - 3762 | 4827 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | Includes interest income. |
| C05 | Last-twelve-months Adjusted EBITDA | 425 + 403 - 368 | 460 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | Issuer-adjusted, non-GAAP. |
| C06 | Last-twelve-months operating cash flow, capital expenditure and free cash flow | Operating: 303 + 317 - 242; capital expenditure: 69 + 74 - 51; free cash flow: 378 - 92 | 378; 92; 286 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Free cash flow is after working capital and cash interest, before acquisitions. |
| C07 | Last-twelve-months interest income | 67 + 39 - 53 | 53 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | Interest income on client funds is inside revenue. |
| C08 | Total Debt at carrying value | FY2023: 109 + 984; FY2024: 75 + 908; FY2025: 0 + 895; 2026-09-30: 0 + 896 (revolver borrowings + long-term debt, noncurrent) | 1093; 983; 895; 896 | USD millions | 10-K_2024-12-31_tnet.htm.jsonl, pages 99–100; 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | Operating lease liabilities are on their own lines and are not added; the FY2025 and 2026-09-30 balance sheets print no revolver line. |
| C09 | Net debt | FY2023: 1093 - 287; FY2024: 983 - 360; FY2025: 895 - 287; 2026-09-30: 896 - 328 | 806; 623; 608; 568 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | Unrestricted cash only. |
| C10 | Leverage and cover ratios quoted | Total debt / EBITDA: 1093 / 613; 983 / 363; 895 / 339; 896 / 359. Net debt / EBITDA: 806 / 613; 623 / 363; 608 / 339; 568 / 359. EBITDA / cash interest: 613 / 25; 363 / 59; 339 / 52; 359 / 49. Net debt / Adjusted EBITDA: 806 / 697; 623 / 485; 608 / 425; 568 / 460. Adjusted EBITDA / cash interest: 460 / 49 | Total 1.78; 2.71; 2.64; 2.50; net 1.31; 1.72; 1.79; 1.58; cover 24.52; 6.15; 6.52; 7.33; net on adjusted 1.16; 1.28; 1.43; 1.23; adjusted cover 9.39 | x | 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Printed to two decimals; the register holds each row with its operands. |
| C11 | Pro forma net debt and leverage after the October 2026 dividend | 568 + 13 = 581; 581 / 359 | 581; 1.62 | USD millions; x | 10-Q_2026-09-30_tnet.htm.jsonl, page 29; 10-Q_2026-09-30_tnet.htm.jsonl, page 25 | Net debt rises by the dividend paid; EBITDA unchanged; the date is not stated. |
| C12 | Free cash flow | FY2023: 539 - 75; FY2024: 279 - 78; FY2025: 303 - 69; 9M 2025: 242 - 51; 9M 2026: 317 - 74 | 464; 201; 234; 191; 243 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Capital expenditure includes capitalized software. |
| C13 | Shareholder payments | FY2025: 183 + 52; 9M 2026: 94 + 40 (repurchase of common stock + dividends paid) | 235; 134 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Excludes withholding-tax repurchases of 16 (FY2025) and 10 (9M 2026). |
| C14 | Net debt including corporate investments | 568 - 50 = 518; 518 / 359 | 518; 1.44 | USD millions; x | 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | Alternative definition; the register uses unrestricted cash only. |
| C15 | Interest income share of reported EBITDA | FY2025: 67 x 100 / 339; last twelve months: 53 x 100 / 359 | 19.76; 14.76 | percent | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-Q_2026-09-30_tnet.htm.jsonl, page 27 | Interest income is inside revenue and EBITDA. |
| C16 | Change in payroll tax liabilities and other payroll withholdings | 1198 - 1906 | -708 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 93–94; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | From FY2024 to 2026-09-30; a non-debt funding float that is matched by restricted funds and receivables. |
| C17 | Working-capital change, sum of printed movements | FY2023: -3 + 4 - 3 - 35 - 11 + 23 + 7 + 7 - 8 + 8 - 17; FY2024: -2 - 18 + 3 - 52 + 0 - 10 - 5 - 2 - 11 - 3 - 15; FY2025: 0 - 12 + 0 - 42 - 4 - 3 - 2 + 1 - 4 - 10 - 13; 9M 2025: 1 + 14 - 30 + 0 - 1 - 15 - 12 - 11; 9M 2026: 1 + 26 - 34 + 9 - 2 - 8 - 3 - 1 + 1 | -28; -115; -89; -54; -11 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29 | Dash lines are left out, not read as zero; operating cash flow equals non-cash adjustments plus this sum in every period. |
| C18 | Adjusted EBITDA bridge, FY2025 | 339 + 65 + 10 + 11 | 425 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 71 | Reconciles exactly to the issuer's Adjusted EBITDA; transaction and integration costs print as a dash. |
| C19 | Principal to carrying value, 2026-09-30 | 500 + 400 = 900; 896 - 900 | 900; -4 | USD millions | 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | Reconciling item is the unexplained difference, attributed to issuance costs by inference. |
| C20 | EBITDA margins, last twelve months | Reported: 359 x 100 / 4827; adjusted: 460 x 100 / 4827 | 7.44; 9.53 | percent | 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12 | Margins on total revenues including interest income. |
| C21 | FY2023 Adjusted EBITDA margin recomputed | 697 x 100 / 4994 | 13.96 | percent | 10-K_2025-12-31_tnet.htm.jsonl, page 71 | Matches the 2025 annual report's 14.0%; the 2024 annual report prints 14.2%. |
| C22 | Implied Q4 2025 EBITDA | Reported: 339 - 308; adjusted: 425 - 368 | 31; 57 | USD millions | 10-K_2025-12-31_tnet.htm.jsonl, page 93; 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12; 10-Q_2026-09-30_tnet.htm.jsonl, pages 27–28 | Calculated as the fiscal year less nine months because no Q4 is reported; the 9M 2025 amounts come from the 2026 reports, which say some prior-year amounts were reclassified. |
| C23 | Operating lease liabilities at 2026-09-30 | 11 + 56 | 67 | USD millions | 10-Q_2026-09-30_tnet.htm.jsonl, page 28 | Current 11 plus noncurrent 56; presented on their own lines and outside the debt figure. |

## Gaps

- High: The maximum total net leverage ratio, any step-down, the definition and the reported ratio are not printed in any of the five filings, so covenant headroom is not calculable. It restricts any covenant conclusion; the credit agreement or a compliance certificate would close it.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-K_2025-12-31_tnet.htm.jsonl, page 121
- High: Revolver availability after letters of credit is stated only at year-end, USD 606 million at 2024-12-31 and USD 699 million at 2025-12-31, and is not stated at 2026-09-30 or 2023-12-31. The liquidity table therefore shows the commitment less borrowings at 2026-09-30, which is before letters of credit, and no figure for 2023-12-31. Letters of credit outstanding would close it.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 120; 10-K_2024-12-31_tnet.htm.jsonl, page 128; 10-Q_2026-09-30_tnet.htm.jsonl, page 25
- Medium: The issuer states no unadjusted EBITDA, so reported EBITDA is derived from income before tax, interest expense, bank fees and other, and amortization of intangible assets. Interest income on client funds stays inside it, and the interim ratios rest on a last-twelve-months construction with no statement tie.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 71; 10-Q_2026-09-30_tnet.htm.jsonl, page 12; calculation C01; calculation C02
- Medium: The quarterly reports print no debt note, so instrument carrying values, issuance costs and rates at 2026-09-30 are not stated, and the USD 4 million difference between note principal and balance-sheet debt is unexplained. The annual note gives 5 of issuance costs at 2025-12-31, which suggests the cause but does not prove it.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 25; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-K_2025-12-31_tnet.htm.jsonl, page 118; calculation C19
- High: The revolver's security, rank and guarantors, and the identity of its borrower, are not stated in the sources, and the note guarantors are not named, so the debt stack shows the two note issues only and excludes the revolver, which has no balance.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, page 119; 10-K_2025-12-31_tnet.htm.jsonl, pages 133–134
- Medium: The statements print dashes that are carried as not supplied, not as zero: accounts receivable in FY2025, other payroll assets in FY2025, accounts payable and other liabilities in FY2024 and 9M 2025, workers' compensation in 9M 2025, proceeds from sale of business in three periods, other investments in two years, the 2031 note proceeds and revolver proceeds outside FY2023, dividends in FY2023, revolver repayment in 9M 2026, investments in FY2024 and FY2025, and the transaction and integration costs and restructuring lines. Operating cash flow still equals the printed adjustments and movements in every period, and the 2024 annual report's two payables lines net to zero for FY2024.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29; 10-K_2024-12-31_tnet.htm.jsonl, pages 100–101
- Low: Lines printed in the annual statements but not in the interim statements (other payroll assets, accrued health insurance costs, acquisition of subsidiary in annual columns, financing items in 9M columns) are shown as not printed, and the interim balance sheet does not print the revolver or noncurrent investment lines.
Basis: 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 28; 10-Q_2026-09-30_tnet.htm.jsonl, page 29
- Medium: The 2025 quarterly reports were not supplied, so discrete 2025 quarters and a balance sheet at 2025-09-30 are not available as filed, the 2026 reports say some prior-year amounts were reclassified, and no maintenance or growth capital expenditure split is printed.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 32; 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95
- Low: The company reports one segment, so no segment revenue or elimination schedule exists; revenue is shown by service type, and no segment sum is stated.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 31; 10-Q_2026-09-30_tnet.htm.jsonl, page 42
- Low: The first quarter report gives April 8, 2026 as the closing day of the Cocoon acquisition and the later reports give April 10, 2026; the cash price of USD 22 million net of cash acquired is in the 9M 2026 investing flows and the day does not change any figure here.
Basis: 10-Q_2026-03-31_tnet.htm.jsonl, page 40; 10-Q_2026-06-30_tnet.htm.jsonl, page 42; 10-Q_2026-09-30_tnet.htm.jsonl, page 43; 10-Q_2026-09-30_tnet.htm.jsonl, page 29
- Low: The 2024 annual report prints the FY2023 Adjusted EBITDA margin as 14.2% and the 2025 annual report prints 14.0% for the same USD 697 million; the margin used here is recomputed from printed revenue.
Basis: 10-K_2024-12-31_tnet.htm.jsonl, page 75; 10-K_2025-12-31_tnet.htm.jsonl, page 71; calculation C21
- Low: The October dividend is linked to the USD 13 million declared and unpaid at 2026-09-30 by inference, and its day is not stated, so it is held in the post-balance-sheet table with no date.
Basis: 10-Q_2026-09-30_tnet.htm.jsonl, page 29; 10-Q_2026-09-30_tnet.htm.jsonl, page 25
- Medium: The 2025 annual report merges payables, impairment and other lines that the 2024 annual report prints separately, and the nine-month interim statements print Other where the annual statements print impairment of intangibles and other; totals agree, but line-level trends across annual and interim columns are not like for like.
Basis: 10-K_2024-12-31_tnet.htm.jsonl, pages 100–101; 10-K_2025-12-31_tnet.htm.jsonl, pages 94–95; 10-Q_2026-09-30_tnet.htm.jsonl, page 29

## Next module

The orchestrator selects the next module.
