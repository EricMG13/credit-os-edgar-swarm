## Request

Financial foundation for Trinity Industries Inc (issuer trn-99780), as of 2026-11-18, for the credit snapshot pathway. The scope is the consolidated statements, debt, liquidity and credit metrics from the five supplied filings, in US dollars. Net debt and leverage use balance-sheet carrying values and a reported EBITDA derived from printed lines.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_trn.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 | 247c5f3703e0027cdf1310c49374a9e71cfdfe961877fec838da3e91d8886212 | FY2023 balance sheet and FY2024 comparatives; 2024-12-31 liquidity components and covenant table |
| 10-K_2025-12-31_trn.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 | df483ffa3ed73b7b4c4f4b734b43150f2e53740ca919897ccd88ff37b318897f | FY2023 to FY2025 statements, debt note and maturity ladder, interest paid, covenants, fleet data and quarterly data |
| 10-Q_2026-03-31_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | a9c5c6e9c79d8bd953576936e574854fe7a56ae05d508b53ecf03c90db77158c | Liquidity components at 2026-03-31 |
| 10-Q_2026-06-30_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-30 | e59202e662d8e74a34ab1e77443247e23ee53e74df0e08106acbfd54d83bdeb4 | Liquidity components at 2026-06-30 |
| 10-Q_2026-09-30_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 | 8c9ce2293f595571213562da5e18064d3b6c95501d045babc9b211608e138e61 | Q3 and nine-month 2026 statements, 2026-09-30 debt, liquidity, covenants, subsequent events and fleet data |

| Supplied module | Module code | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 8bef18195e5be960e8db0e338f7dc688fbb1053a7a44760af3609698f7abf4f6 | Perimeter, source gaps and the finding that 2026 cash interest paid is not printed |

## Findings

### Bottom line

Reported net debt to EBITDA fell from 7.95x in FY2023 to 5.04x over the twelve months to 2026-09-30, but two non-cash divestiture gains inflate that EBITDA; without them it is 7.39x, so creditors should read leverage as about seven times and no longer improving.
Basis: 10-K_2025-12-31_trn.htm.jsonl, pages 43, 66; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4, 17–18; calculation C22; calculation C25

Debt is USD 5,325.0 million at 2026-09-30, of which USD 4,726.1 million is non-recourse fleet debt secured on railcars, against cash of USD 158.3 million. Cash interest paid is not printed for 2026, so cover is stated only to FY2025 at 3.50x; an interest expense proxy gives 3.85x for the latest twelve months. Committed liquidity fell to USD 897.2 million from USD 1,115.5 million at year-end as warehouse availability dropped to USD 146.5 million.
Basis: 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 20, 47; 10-K_2025-12-31_trn.htm.jsonl, pages 50, 69; calculation C29; calculation C35

### Analysis by dimension

Leverage has improved on the reported measure but not on the underlying one. Net debt of USD 5,166.7 million over reported EBITDA of USD 1,025.2 million gives 5.04x, against 5.49x at FY2025 and 7.95x at FY2023. Gains of USD 194.2 million in Q4 2025 and USD 131.6 million in Q2 2026, both non-cash gains from moving railcar partnerships out of the consolidated statements, sit inside that EBITDA; removing them leaves USD 699.4 million and a ratio of 7.39x, an Analyst Judgement adjustment shown beside the reported figure. Because the earnings of those partnerships are in the twelve-month figure while their debt has left the balance sheet, even the reported ratio is flattered by a perimeter mismatch that the filings do not quantify.
Basis: 10-K_2025-12-31_trn.htm.jsonl, pages 43, 66; 10-Q_2026-09-30_trn.htm.jsonl, pages 2, 17–18; calculation C22; calculation C25; calculation C20

Interest cover is modest and cannot be stated on a cash basis for the latest period. EBITDA covered cash interest paid 3.50x in FY2025 and 2.89x in FY2024. For the twelve months to 2026-09-30 only interest expense, net of USD 266.1 million is available, which gives a proxy cover of 3.85x, or 2.63x without the two gains. Creditors cannot confirm the cash figure until the filings print it.
Basis: 10-K_2025-12-31_trn.htm.jsonl, pages 66, 69; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4; calculation C29; calculation C30

Cash flow after fleet investment has been negative in FY2025 and in nine months 2026. Operating cash flow from continuing operations was USD 242.7 million for nine months 2026, but lease fleet capital expenditure of USD 409.5 million less proceeds from lease portfolio sales of USD 168.7 million, and operating and administrative capital expenditure of USD 34.7 million, left a deficit of USD 32.8 million before dividends of USD 75.4 million and buybacks of USD 42.0 million. Total debt fell USD 117.5 million in the nine months, less than the USD 270.6 million of Tribute Rail debt that left the consolidated balance sheet, so other debt rose as non-recourse borrowing funded the fleet.
Basis: 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4, 20, 22; 10-K_2025-12-31_trn.htm.jsonl, page 98; calculation C44; calculation C47

Liquidity is lower and its least certain part is shrinking. Cash of USD 158.3 million and revolver availability of USD 592.4 million are firm, while warehouse availability of USD 146.5 million depends on eligible unpledged railcars and has fallen from USD 321.5 million at year-end. The ladder at 2025-12-31 shows USD 1,096.1 million due in 2026 before the April and October 2026 refinancings, so the maturity wall at the latest date is not established.
Basis: 10-Q_2026-09-30_trn.htm.jsonl, pages 21, 47; 10-K_2025-12-31_trn.htm.jsonl, pages 50, 107; calculation C35

Data quality and definition risks matter to how far these ratios can be trusted. The issuer reports no EBITDA, so reported EBITDA here is total operating profit plus depreciation and amortization, and it includes disposition gains of USD 290.8 million in FY2025. The issuer reports a covenant net leverage ratio of 0.75x at 2026-09-30 against 5.04x on the consolidated basis used here, because its covenant perimeter and definition are not supplied; the two are not reconciled. A printed dash is treated as not supplied rather than zero.
Basis: 10-K_2025-12-31_trn.htm.jsonl, pages 43, 66; 10-Q_2026-09-30_trn.htm.jsonl, pages 50–51

Subsequent events after 2026-09-30 are kept out of the period figures. A USD 349.8 million non-recourse term loan on 2026-10-19 funded the redemption of USD 280.9 million of 2019 notes and the repayment of warehouse borrowings, so its effect on net debt is not established; the cash settlement of USD 1.3 million of share repurchases moves pro forma net debt to USD 5,168.0 million, still 5.04x. Supplier finance of USD 46.3 million, down from USD 49.1 million at year-end, sits inside accounts payable and is working-capital float rather than debt.
Basis: 10-Q_2026-09-30_trn.htm.jsonl, pages 8, 22–23, 49; calculation C48

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 8.10 | 7.95 | x | Reported EBITDA derived from operating profit plus depreciation and amortization; carrying-value debt; includes the partially-owned leasing subsidiaries then consolidated. |
| FY2024 / 2024-12-31 | 7.25 | 6.96 | x | Reported EBITDA derived; carrying-value debt; includes the partially-owned leasing subsidiaries then consolidated. |
| FY2025 / 2025-12-31 | 5.70 | 5.49 | x | Reported EBITDA derived and includes the USD 194.2m non-cash Triumph divestiture gain; debt includes Tribute Rail until its April 2026 deconsolidation. |
| 2026-09-30 | 5.19 | 5.04 | x | Twelve months to 2026-09-30; reported EBITDA derived and includes the USD 194.2m and USD 131.6m non-cash divestiture gains; debt excludes the deconsolidated partnerships; without the gains net debt / EBITDA is 7.39x. |

Reported EBITDA includes non-cash divestiture gains in FY2025 and the latest twelve months, so the ratios understate underlying leverage; the issuer covenant net leverage of 0.75x uses a different, unsupplied definition.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 2.88 | x | Reported EBITDA derived over interest paid in the cash flow statement. |
| FY2024 / 2024-12-31 | 2.89 | x | Reported EBITDA derived over interest paid in the cash flow statement. |
| FY2025 / 2025-12-31 | 3.50 | x | Reported EBITDA derived over interest paid in the cash flow statement. EBITDA includes the USD 194.2m non-cash divestiture gain. |
| 2026-09-30 | Not supplied: the 2026 quarterly reports print no interest paid, so cash interest for the twelve months is not available | x | Interest expense, net for the twelve months is USD 266.1m, which gives a proxy cover of 3.85x in the calculation register; it is not a cash figure. |

The latest period has no cash interest paid, so cover on interest expense, net is a proxy only.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 105.7 | Not supplied: the FY2023 annual report is not supplied and the FY2024 report states liquidity components at 2024-12-31 only | US$m | Cash is the unrestricted balance at 2023-12-31; undrawn facilities are not stated for that date. |
| FY2024 / 2024-12-31 | 228.2 | 759.2 | US$m | Undrawn is revolver availability USD 591.3m net of letters of credit plus warehouse facility availability USD 167.9m, which depends on eligible unpledged railcars; unrestricted cash only, restricted cash excluded. |
| FY2025 / 2025-12-31 | 201.3 | 914.2 | US$m | Undrawn is revolver availability USD 592.7m net of letters of credit plus warehouse facility availability USD 321.5m, which depends on eligible unpledged railcars; unrestricted cash only, restricted cash excluded. |
| 2026-03-31 | 132.6 | 935.2 | US$m | Undrawn is revolver availability USD 595.6m net of letters of credit plus warehouse facility availability USD 339.6m, which depends on eligible unpledged railcars; unrestricted cash only, restricted cash excluded. |
| 2026-06-30 | 155.7 | 879.2 | US$m | Undrawn is revolver availability USD 592.4m net of letters of credit plus warehouse facility availability USD 286.8m, which depends on eligible unpledged railcars; unrestricted cash only, restricted cash excluded. |
| 2026-09-30 | 158.3 | 738.9 | US$m | Undrawn is revolver availability USD 592.4m net of letters of credit plus warehouse facility availability USD 146.5m, which depends on eligible unpledged railcars; unrestricted cash only, restricted cash excluded. |

Warehouse availability is limited by eligible unpledged equipment, so undrawn committed facilities overstate firm access.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 1,096.1 | US$m | Remaining principal at 2025-12-31 by anticipated repayment date; includes USD 676.4m of 2019 notes and USD 271.3m of Tribute Rail debt, both since redeemed or deconsolidated. |
| FY2027 | 680.4 | US$m | Remaining principal at 2025-12-31 by anticipated repayment date. |
| FY2028 | 1,679.8 | US$m | Remaining principal at 2025-12-31 by anticipated repayment date; includes the USD 600.0m senior notes and a USD 443.5m warehouse facility termination payment. |
| FY2029 | 259.0 | US$m | Remaining principal at 2025-12-31 by anticipated repayment date. |
| FY2030 | 938.0 | US$m | Remaining principal at 2025-12-31 by anticipated repayment date. |
| FY2031 | 813.2 | US$m | All principal due in 2031 and later at 2025-12-31; not a single year. |

The ladder is drawn at 2025-12-31 and is not updated for 2026 redemptions, the Tribute Rail deconsolidation or the October 2026 term loan.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | Twelve months to 2026-09-30 |
| --- | --- | --- | --- | --- |
| Revenue (US$m) | 2,983.3 | 3,079.2 | 2,156.9 | 2,123.4 |
| EBITDA, reported and derived (US$m) | 710.2 | 785.3 | 954.3 | 1,025.2 |
| Total debt, carrying value (US$m) | 5,754.2 | 5,690.9 | 5,442.5 | 5,325.0 |
| Cash and cash equivalents (US$m) | 105.7 | 228.2 | 201.3 | 158.3 |
| Net debt (US$m) | 5,648.5 | 5,462.7 | 5,241.2 | 5,166.7 |
| Total debt / EBITDA (x) | 8.10 | 7.25 | 5.70 | 5.19 |
| Net debt / EBITDA (x) | 7.95 | 6.96 | 5.49 | 5.04 |
| EBITDA / cash interest (x) | 2.88 | 2.89 | 3.50 | Not supplied: cash interest paid is not printed for 2026 |
| EBITDA / interest expense, net, proxy (x) | 2.67 | 2.87 | 3.48 | 3.85 |
| Net debt / EBITDA without the divestiture gains (x) | Not supplied: no divestiture gain in the period | Not supplied: no divestiture gain in the period | 6.90 | 7.39 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 5,754.2 | 105.7 | 5,648.5 | US$m | Carrying value of recourse and non-recourse debt including the sale-leaseback financing carried in debt; the principal total for 2023 is not supplied. |
| FY2024 / 2024-12-31 | 5,690.9 | 228.2 | 5,462.7 | US$m | Carrying value of recourse and non-recourse debt including the USD 50.0m sale-leaseback financing carried in debt; contractual principal USD 5,715.3m at 2024-12-31 in the FY2024 report. |
| FY2025 / 2025-12-31 | 5,442.5 | 201.3 | 5,241.2 | US$m | Carrying value including the USD 47.6m sale-leaseback financing carried in debt; contractual principal USD 5,466.5m, difference USD -24.0m; cash is unrestricted only. |
| 2026-09-30 | 5,325.0 | 158.3 | 5,166.7 | US$m | Carrying value including the USD 45.7m sale-leaseback financing carried in debt; excludes the deconsolidated Tribute Rail debt; the principal total is not printed; cash is unrestricted only and excludes USD 119.7m restricted cash. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 5,466.5 | -24.0 | 5,442.5 | US$m | Principal is the sum of the maturity ladder; reconciling items are the USD 3.1m premium on the senior notes, USD 0.9m of unamortized discounts and USD 26.2m of unamortized debt issuance costs; the ladder is drawn at 2025-12-31 only. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| TRL-2026 term loan of USD 349.8m with redemption of the Series 2019-2 notes (USD 280.9m) and repayment of warehouse borrowings | 2026-10-19 | Not supplied: the warehouse repayment and issuance costs are not stated | Not supplied: the net effect on net debt cannot be worked | Not supplied: no pro forma net debt | US$m | The 10-Q for the quarter ended 2026-09-30 states proceeds of USD 349.8m, the USD 280.9m redemption and an unstated warehouse repayment; the interest rate swap entered in October 2026 does not change net debt; fees are not reflected. |
| Cash settlement of September 2026 share repurchases | Not supplied: the source states a month only (October 2026) | 1.3 | 5,168.0 | 5.04 | US$m | USD 1.3m of shares repurchased in September 2026 were cash settled in October 2026; pro forma net leverage is over the same LTM EBITDA as the 2026-09-30 net leverage; no other event is reflected. |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 2,983.3 | 710.2 | US$m | Twelve-month period; EBITDA is the reported measure derived from total operating profit plus depreciation and amortization, not an issuer-adjusted figure. |
| FY2024 / 2024-12-31 | 3,079.2 | 785.3 | US$m | Twelve-month period; EBITDA is the reported measure derived from total operating profit plus depreciation and amortization, not an issuer-adjusted figure. |
| FY2025 / 2025-12-31 | 2,156.9 | 954.3 | US$m | Twelve-month period; EBITDA is the reported measure derived from total operating profit plus depreciation and amortization, not an issuer-adjusted figure; includes the non-cash divestiture gains. |
| 2026-09-30 | 2,123.4 | 1,025.2 | US$m | Twelve-month period; EBITDA is the reported measure derived from total operating profit plus depreciation and amortization, not an issuer-adjusted figure; includes the non-cash divestiture gains. |

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Secured railcar equipment notes, wholly-owned leasing subsidiaries | 1 | Yes | 3,041.5 | 2.97 | US$m | Carrying value at 2026-09-30; obligations of limited-purpose leasing subsidiaries, non-recourse to Trinity and secured on railcars and leases; senior to the unsecured senior notes as to collateral. Cumulative over the LTM reported EBITDA, which includes non-cash gains; other equipment financing of USD 45.7m is left out because no source states its rank. |
| TRL-2023 term loan | 1 | Yes | 1,006.6 | 3.95 | US$m | Carrying value; obligation of TRL-2023, non-recourse to Trinity and secured on its railcars and leases. Cumulative over the LTM reported EBITDA, which includes non-cash gains; other equipment financing of USD 45.7m is left out because no source states its rank. |
| TILC warehouse facility | 1 | Yes | 653.5 | 4.59 | US$m | Drawn USD 653.5m of an USD 800.0m facility; obligor is the warehouse loan facility trust, non-recourse and secured on railcars and leases. Cumulative over the LTM reported EBITDA, which includes non-cash gains; other equipment financing of USD 45.7m is left out because no source states its rank. |
| Revolving credit facility | 2 | No | 0.0 | 4.59 | US$m | USD 600.0m unsecured corporate facility, undrawn at 2026-09-30; obligor Trinity Industries, Inc., guaranteed by certain wholly-owned subsidiaries; equal rank with the senior notes. Cumulative over the LTM reported EBITDA, which includes non-cash gains; other equipment financing of USD 45.7m is left out because no source states its rank. |
| Senior notes due 2028 | 2 | No | 602.2 | 5.17 | US$m | Carrying value including a USD 2.2m premium; obligor Trinity Industries, Inc., guaranteed by domestic subsidiaries that guarantee the revolver; subordinated to secured debt to the extent of collateral. Cumulative over the LTM reported EBITDA, which includes non-cash gains; other equipment financing of USD 45.7m is left out because no source states its rank. |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Reported EBITDA, twelve months to 2026-09-30 | Not supplied: the issuer states no adjusted EBITDA, so no bridge to one is stated | US$m | The reported measure is derived by this module; a house-adjusted view that removes the two non-cash divestiture gains is in the calculation register and is not an issuer bridge. |
| Issuer-adjusted EBITDA | Not supplied: the issuer states no adjusted EBITDA | US$m | No add-backs are stated by the issuer, so the adjusted measure and its steps are not supplied. |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 38 |
| Calculated | 22 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 5 |
| Fields present | 25 |
| Fields total | 26 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 7 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues - Manufacturing | 1,943.9 | 1,938.4 | 952.1 | 153.3 | 249.1 | 655.6 | 660.3 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Revenues - Leasing & Services | 1,039.4 | 1,140.8 | 1,204.8 | 300.8 | 286.0 | 890.1 | 851.9 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Total revenues | 2,983.3 | 3,079.2 | 2,156.9 | 454.1 | 535.1 | 1,545.7 | 1,512.2 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Cost of revenues - Manufacturing | 1,827.5 | 1,748.2 | 864.1 | 132.4 | 227.7 | 598.1 | 602.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Cost of revenues - Leasing & Services | 628.7 | 662.8 | 720.1 | 180.3 | 180.6 | 530.6 | 544.1 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Total cost of revenues | 2,456.2 | 2,411.0 | 1,584.2 | 312.7 | 408.3 | 1,128.7 | 1,146.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Gross profit | 527.1 | 668.2 | 572.7 | 141.4 | 126.8 | 417.0 | 365.6 | USD millions | Calculated: total revenues less total cost of revenues | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Selling, engineering, and administrative expenses | 201.9 | 235.7 | 214.3 | 45.2 | 55.1 | 144.6 | 156.9 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Gains on dispositions - Lease portfolio sales | 82.8 | 57.3 | 91.4 | 21.7 | 8.5 | 35.4 | 38.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Gains on dispositions - Gain on divestiture of partially-owned leasing subsidiary | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 194.2 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 131.6 | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Gains on dispositions - Other | 6.8 | 6.0 | 5.2 | 0.7 | 15.4 | 6.0 | 17.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Total gains on dispositions of property and other divestitures | 89.6 | 63.3 | 290.8 | 22.4 | 23.9 | 41.4 | 187.8 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Restructuring activities, net | -2.2 | 4.3 | Not supplied: the filing prints a dash for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Total operating profit | 417.0 | 491.5 | 649.2 | 118.6 | 95.6 | 313.8 | 396.5 | USD millions | Reported; used as EBIT | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Depreciation and amortization | 293.2 | 293.8 | 305.1 | 76.9 | 70.5 | 226.4 | 214.6 | USD millions | Reported in the cash flow statement for FY and nine months, in the segment note for the quarters | 10-K_2025-12-31_trn.htm.jsonl, page 68; 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 16 |
| EBITDA (Reported) | 710.2 | 785.3 | 954.3 | 195.5 | 166.1 | 540.2 | 611.1 | USD millions | Calculated: total operating profit plus depreciation and amortization; the issuer reports no EBITDA; includes disposition gains | 10-K_2025-12-31_trn.htm.jsonl, pages 66, 68; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–3, 16 |
| Interest expense, net | 265.5 | 273.5 | 274.2 | 69.8 | 65.8 | 203.6 | 195.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Other, net (income) expense | 2.5 | -3.8 | -0.4 | 0.6 | -0.5 | -0.4 | 1.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Income from continuing operations before income taxes | 149.0 | 221.8 | 375.4 | 48.2 | 30.3 | 110.6 | 199.4 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Provision for income taxes | 9.0 | 50.4 | 90.9 | 11.1 | 8.8 | 22.6 | 49.1 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Income from continuing operations | 140.0 | 171.4 | 284.5 | 37.1 | 21.5 | 88.0 | 150.3 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Loss from discontinued operations, net of income taxes | -13.4 | -14.3 | -7.2 | -1.1 | -4.0 | -4.9 | -9.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Net income | 126.6 | 157.1 | 277.3 | 36.0 | 17.5 | 83.1 | 140.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Net income attributable to noncontrolling interest | 20.6 | 18.7 | 24.2 | 5.7 | -0.1 | 16.6 | 0.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Net income attributable to Trinity Industries, Inc. | 106.0 | 138.4 | 253.1 | 30.3 | 17.6 | 66.5 | 140.1 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 126.6 | 157.1 | 277.3 | 83.1 | 140.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Loss from discontinued operations, net of income taxes | 13.4 | 14.3 | 7.2 | 4.9 | 9.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 293.2 | 293.8 | 305.1 | 226.4 | 214.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Stock-based compensation expense | 22.7 | 23.6 | 22.9 | 16.6 | 16.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Provision (benefit) for deferred income taxes | -41.5 | -22.1 | 77.5 | 14.0 | 47.1 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net gains on lease portfolio sales | -82.8 | -57.3 | -91.4 | -35.4 | -38.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Gain on divestiture of partially-owned leasing subsidiary | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | -194.2 | Not supplied: the filing prints a dash for this period | -131.6 | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Gains on dispositions of property and other assets | -0.5 | -3.3 | -5.2 | -6.0 | -17.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Gains on insurance recoveries from property damage | -6.3 | -2.7 | Not supplied: the filing prints a dash for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Non-cash impact of restructuring activities | -2.2 | 4.3 | Not supplied: the filing prints a dash for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Non-cash interest expense | 12.7 | 13.4 | 9.0 | 6.3 | 7.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Loss on extinguishment of debt | Not supplied: the filing prints a dash for this period | 1.5 | 1.4 | 0.8 | Not supplied: the filing prints a dash for this period | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Other | -5.7 | -2.6 | 3.5 | 2.1 | 2.9 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| (Increase) decrease in receivables | -24.6 | -17.1 | -15.5 | 67.4 | 26.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| (Increase) decrease in income tax receivable | 2.6 | 2.8 | -25.1 | -26.9 | 13.8 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| (Increase) decrease in inventories | -54.9 | 208.1 | 7.1 | -78.4 | -62.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| (Increase) decrease in other assets | -0.6 | 0.9 | -1.1 | -3.9 | -1.8 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Increase (decrease) in accounts payable | 2.2 | -53.6 | 25.6 | 1.2 | 30.3 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Increase (decrease) in accrued liabilities | 53.2 | 22.2 | -32.4 | -79.0 | -15.0 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Increase (decrease) in other liabilities | 1.5 | 4.8 | -4.8 | -6.0 | Not supplied: the filing prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net cash provided by operating activities - continuing operations | 309.0 | 588.1 | 366.9 | 187.2 | 242.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net cash used in operating activities - discontinued operations | -13.4 | -14.3 | -7.2 | -4.9 | -9.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 295.6 | 573.8 | 359.7 | 182.3 | 233.0 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Capital expenditures - lease fleet | -668.8 | -541.9 | -749.3 | -530.3 | -409.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Proceeds from lease portfolio sales | 381.8 | 360.7 | 399.3 | 142.9 | 168.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Capital expenditures - operating and administrative | -41.3 | -53.8 | -45.6 | -26.8 | -34.7 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Proceeds from dispositions of property and other assets | 19.9 | 20.6 | 15.4 | 11.1 | 29.9 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Acquisitions, net of cash acquired | -62.2 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Restricted cash related to the divestiture of partially-owned subsidiary | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | -16.8 | Not supplied: the filing prints a dash for this period | -6.9 | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Proceeds from insurance recoveries | 5.1 | 3.7 | Not supplied: the filing prints a dash for this period | Not supplied: the statement carries no such line for this period | Not supplied: the statement carries no such line for this period | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Equity investments and other | 2.5 | -3.9 | 11.4 | 4.7 | -37.6 | USD millions | Reported; labelled Equity investments in the quarterly reports | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -363.0 | -214.6 | -385.6 | -398.4 | -290.1 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Payments to retire debt | -1,518.9 | -2,050.5 | -1,763.7 | -1,039.2 | -559.4 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Proceeds from issuance of debt | 1,652.7 | 1,970.4 | 1,943.7 | 1,284.1 | 701.8 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Payments to settle contingent consideration liability | Not supplied: the filing prints a dash for this period | -8.0 | -8.0 | -8.0 | Not supplied: the filing prints a dash for this period | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Dividends paid to common shareholders | -86.0 | -93.2 | -98.7 | -74.6 | -75.4 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Shares repurchased | Not supplied: the filing prints a dash for this period | -20.7 | -71.3 | -58.9 | -42.0 | USD millions | Reported; a dash is not zero here | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Purchase of shares to satisfy employee tax on vested stock | -7.2 | -9.0 | -8.7 | -8.4 | -9.3 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Distributions to noncontrolling interest | -32.4 | -8.9 | -18.2 | -14.6 | -4.2 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | 8.2 | -219.9 | -24.9 | 80.4 | 11.5 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Net Cash Change | -59.2 | 139.3 | -50.8 | -135.7 | -45.6 | USD millions | Reported | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Opening Cash | 294.3 | 235.1 | 374.4 | 374.4 | 323.6 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Closing Cash | 235.1 | 374.4 | 323.6 | 238.7 | 278.0 | USD millions | Reported; cash, cash equivalents and restricted cash | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 246.2 | 271.4 | 272.8 | Not supplied: the 2026 quarterly reports print no interest paid line | Not supplied: the 2026 quarterly reports print no interest paid line | USD millions | Reported as interest paid in the supplemental disclosure; US GAAP classifies it in operating activities | 10-K_2025-12-31_trn.htm.jsonl, page 69 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 105.7 | 228.2 | 201.3 | 158.3 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Receivables, net of allowance | 363.5 | 379.1 | 389.1 | 358.4 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Income tax receivable | 5.2 | 2.4 | 27.5 | 13.7 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Inventories | 684.3 | 476.2 | 469.1 | 531.8 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Restricted cash | 129.4 | 146.2 | 122.3 | 119.7 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Property, plant, and equipment, net | 7,004.8 | 6,988.1 | 6,621.3 | 6,393.7 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Goodwill | 221.5 | 221.5 | 221.5 | 221.5 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Other assets | 392.1 | 390.5 | 372.3 | 546.9 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Total Assets | 8,906.5 | 8,832.2 | 8,424.4 | 8,344.0 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Accounts payable | 305.3 | 251.7 | 269.6 | 294.5 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Accrued liabilities | 302.3 | 353.0 | 301.2 | 271.7 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Debt - Recourse | 794.6 | 597.8 | 598.5 | 598.9 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Debt - Non-recourse, wholly-owned subsidiaries | 3,819.2 | 4,021.3 | 4,573.4 | 4,726.1 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Debt - Non-recourse, partially-owned subsidiaries | 1,140.4 | 1,071.8 | 270.6 | Not supplied: the filing prints a dash for this period | USD millions | Reported; a dash is not zero here | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Deferred income taxes | 1,103.5 | 1,075.6 | 1,129.0 | 1,193.4 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Other liabilities | 165.7 | 153.8 | 136.8 | 128.6 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Total Liabilities | 7,631.0 | 7,525.0 | 7,279.1 | 7,213.2 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Trinity stockholders' equity | 1,037.1 | 1,058.9 | 1,077.2 | 1,128.3 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Noncontrolling interest | 238.4 | 248.3 | 68.1 | 2.5 | USD millions | Reported | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Total Equity | 1,275.5 | 1,307.2 | 1,145.3 | 1,130.8 | USD millions | Reported: Trinity stockholders equity plus noncontrolling interest | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Total Debt | 5,754.2 | 5,690.9 | 5,442.5 | 5,325.0 | USD millions | Reported: recourse plus non-recourse debt at carrying value, net of issuance costs, including the sale-leaseback financing carried in debt | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| Cash & Equivalents | 105.7 | 228.2 | 201.3 | 158.3 | USD millions | Reported: unrestricted cash and cash equivalents; restricted cash is a separate line | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77; 10-K_2025-12-31_trn.htm.jsonl, pages 67–68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving credit facility | Corporate unsecured revolver | 0.0 | 0.0 | 0.0 | 600.0 | Unsecured | Equal rank with the senior notes due 2028 | USD | 0.0 | Not applicable | SOFR or Canadian Overnight Repo Rate Average plus 1.25%; all-in 5.13% | Floating | SOFR or CORRA | 125 | Not supplied: floor not stated | Earlier of 2031-06-12 or 2028-04-15 if the senior notes due 2028 are not repaid | 0 | 10-Q_2026-09-30_trn.htm.jsonl, page 21; 10-K_2025-12-31_trn.htm.jsonl, page 100 |
| Senior notes due 2028 | Senior notes | 602.2 | 600.0 | Not applicable | Not applicable | Unsecured as described: subordinated to secured debt and equal rank with the unsecured revolver | Equal rank with the revolver; senior to subordinated debt | USD | 602.2 | Not applicable | 7.75% | Fixed | Not applicable | Not applicable | Not applicable | July 2028 (day not stated) | 0 | 10-Q_2026-09-30_trn.htm.jsonl, page 20; 10-K_2025-12-31_trn.htm.jsonl, page 100 |
| Secured railcar equipment notes, wholly-owned leasing subsidiaries | Non-recourse asset-backed notes | 3,041.5 | 3,041.9 | Not applicable | Not applicable | Railcars, leases, cash reserves and other assets of each issuing subsidiary | Not supplied: relative rank among the issuing subsidiaries is not stated | USD | 3,041.5 | Not applicable | Not supplied: the 2026 quarterly reports aggregate the series; the 2026-1 notes pay 5.35% and 5.56% | Fixed | Not applicable | Not applicable | Not applicable | Not supplied: the quarterly reports aggregate the series; the Series 2026-1 notes have a stated final maturity of April 19, 2056 | Not supplied: scheduled repayments are printed at 2025-12-31 only | 10-Q_2026-09-30_trn.htm.jsonl, pages 20, 22 |
| TRL-2023 term loan | Non-recourse term loan | 1,006.6 | 1,007.1 | Not applicable | Not applicable | Railcars, leases and cash reserves of TRL-2023 | Not supplied: relative rank is not stated | USD | 1,006.6 | Not applicable | Daily simple SOFR plus 1.50% at 2025-12-31 | Floating | Daily simple SOFR | 150 | Not supplied: floor not stated | 2030-04-30 | Not supplied: scheduled repayments are printed at 2025-12-31 only | 10-Q_2026-09-30_trn.htm.jsonl, page 20; 10-K_2025-12-31_trn.htm.jsonl, page 104 |
| TILC warehouse facility | Non-recourse warehouse loan facility | 653.5 | 653.5 | 653.5 | 800.0 | Railcars, leases and cash reserves held by the warehouse loan facility trust | Not supplied: relative rank is not stated | USD | 653.5 | Not applicable | One-month term SOFR plus 1.75%; all-in 5.43% | Floating | One-month term SOFR | 175 | Not supplied: floor not stated | 2028-03-15 (revolving termination 2027-03-15), per the 2025 annual report | Not supplied: scheduled repayments are printed at 2025-12-31 only | 10-Q_2026-09-30_trn.htm.jsonl, page 21; 10-K_2025-12-31_trn.htm.jsonl, page 101 |
| Other equipment financing | Failed sale-leaseback financing liability | 45.7 | 45.7 | Not applicable | Not applicable | Not supplied: no security statement | Not supplied: rank is not stated | USD | 45.7 | Not applicable | Not supplied: rate not stated | Not supplied: rate type not stated | Not supplied: reference rate not stated | Not supplied: spread not stated | Not supplied: floor not stated | Not supplied: maturity not stated | Not supplied: not stated | 10-Q_2026-09-30_trn.htm.jsonl, page 20; 10-K_2025-12-31_trn.htm.jsonl, page 106 |
| Financing cost adjustment | Unamortized debt issuance costs (USD 3.3m recourse; USD 21.2m non-recourse) | -24.5 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -24.5 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | LTM | USD 2,156.9m | USD 1,512.2m | USD 1,545.7m | USD 2,123.4m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Twelve months to 2026-09-30: FY2025 plus nine months 2026 less nine months 2025; the perimeter changed in December 2025 and April 2026 |
| Total operating profit | LTM | USD 649.2m | USD 396.5m | USD 313.8m | USD 731.9m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Includes the USD 194.2m Triumph gain (Q4 2025) and the USD 131.6m TRIP Holdings gain (Q2 2026) |
| Depreciation and amortization | LTM | USD 305.1m | USD 214.6m | USD 226.4m | USD 293.3m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | From the cash flow statements |
| EBITDA (Reported) | LTM | USD 954.3m | USD 611.1m | USD 540.2m | USD 1,025.2m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Derived as total operating profit plus depreciation and amortization; the issuer reports no EBITDA; includes the two non-cash divestiture gains |
| Interest expense, net | LTM | USD 274.2m | USD 195.5m | USD 203.6m | USD 266.1m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Accrual measure; not cash interest paid |
| Net cash provided by operating activities - continuing operations | LTM | USD 366.9m | USD 242.7m | USD 187.2m | USD 422.4m | Calculated | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Before fleet investment; discontinued operations excluded |
| Cash interest paid | LTM | USD 272.8m | Not supplied: the 2026 quarterly reports print no interest paid line | Not supplied: the 2025 quarterly reports print no interest paid line | Not calculable: the nine-month stubs are not supplied | Not Calculable | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Cash interest paid for the twelve months to 2026-09-30 is not established |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,754.2 | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77 | 710.2 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2023 / 2023-12-31 | USD | US$m | 8.10 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,690.9 | 10-K_2025-12-31_trn.htm.jsonl, pages 67–68 | 785.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2024 / 2024-12-31 | USD | US$m | 7.25 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,442.5 | 10-K_2025-12-31_trn.htm.jsonl, pages 67–68 | 954.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2025 / 2025-12-31 | USD | US$m | 5.70 | Calculated | Tier 1 | EBITDA includes the USD 194.2m non-cash Triumph gain |
| Total debt / EBITDA | Total debt / EBITDA (Reported) | 5,325.0 | 10-Q_2026-09-30_trn.htm.jsonl, page 3 | 1,025.2 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 5.19 | Calculated | Tier 2b | Twelve-month EBITDA from the constructed period register includes the two non-cash gains; interim ratio is not tied to a statement column |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 5,648.5 | Net debt data | 710.2 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2023 / 2023-12-31 | USD | US$m | 7.95 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 5,462.7 | Net debt data | 785.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2024 / 2024-12-31 | USD | US$m | 6.96 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 5,241.2 | Net debt data | 954.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2025 / 2025-12-31 | USD | US$m | 5.49 | Calculated | Tier 1 | EBITDA includes the USD 194.2m non-cash Triumph gain |
| Net debt / EBITDA | (Total debt - cash) / EBITDA (Reported) | 5,166.7 | Net debt data | 1,025.2 | T4.8 LTM EBITDA (Reported) | 2026-09-30 | USD | US$m | 5.04 | Calculated | Tier 2b | Twelve-month EBITDA from the constructed period register includes the two non-cash gains; interim ratio is not tied to a statement column |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 710.2 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 246.2 | 10-K_2025-12-31_trn.htm.jsonl, page 69 | FY2023 / 2023-12-31 | USD | US$m | 2.88 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 785.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 271.4 | 10-K_2025-12-31_trn.htm.jsonl, page 69 | FY2024 / 2024-12-31 | USD | US$m | 2.89 | Calculated | Tier 1 | Derived EBITDA; the issuer reports none |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 954.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 272.8 | 10-K_2025-12-31_trn.htm.jsonl, page 69 | FY2025 / 2025-12-31 | USD | US$m | 3.50 | Calculated | Tier 1 | EBITDA includes the USD 194.2m non-cash Triumph gain |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,025.2 | T4.8 LTM EBITDA (Reported) | Not supplied: cash interest paid is not printed in the 2026 quarterly reports | Not supplied | 2026-09-30 | USD | US$m | Not calculable: the denominator is not supplied | Not Calculable | Tier 2b | Cash interest paid for the twelve months to 2026-09-30 is not established; see the proxy rows |
| EBITDA / interest expense, net (proxy) | EBITDA (Reported) / interest expense, net | 710.2 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 265.5 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2023 / 2023-12-31 | USD | US$m | 2.67 | Proxy | Tier 1 | Accrual interest expense, net is a proxy for cash interest and differs in timing |
| EBITDA / interest expense, net (proxy) | EBITDA (Reported) / interest expense, net | 785.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 273.5 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2024 / 2024-12-31 | USD | US$m | 2.87 | Proxy | Tier 1 | Accrual interest expense, net is a proxy for cash interest and differs in timing |
| EBITDA / interest expense, net (proxy) | EBITDA (Reported) / interest expense, net | 954.3 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | 274.2 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | FY2025 / 2025-12-31 | USD | US$m | 3.48 | Proxy | Tier 1 | Accrual interest expense, net is a proxy for cash interest and differs in timing |
| EBITDA / interest expense, net (proxy) | EBITDA (Reported) / interest expense, net | 1,025.2 | T4.8 LTM EBITDA (Reported) | 266.1 | T4.8 LTM interest expense, net | 2026-09-30 | USD | US$m | 3.85 | Proxy | Tier 2b | Accrual interest expense, net is a proxy for cash interest and differs in timing |
| Net debt / EBITDA excluding divestiture gains (Analyst Judgement) | Net debt / EBITDA excluding divestiture gains | 5,241.2 | Net debt data | 760.1 | Calculation C19 | FY2025 / 2025-12-31 | USD | US$m | 6.90 | Estimated | Tier 1 | Removes the USD 194.2m non-cash Triumph divestiture gain; a house adjustment, not an issuer figure |
| Net debt / EBITDA excluding divestiture gains (Analyst Judgement) | Net debt / EBITDA excluding divestiture gains | 5,166.7 | Net debt data | 699.4 | Calculation C20 | 2026-09-30 | USD | US$m | 7.39 | Estimated | Tier 2b | Removes the USD 194.2m and USD 131.6m non-cash divestiture gains; debt perimeter and EBITDA perimeter still differ |
| EBITDA excluding divestiture gains / interest expense, net (proxy, Analyst Judgement) | EBITDA excluding divestiture gains / interest expense, net | 699.4 | Calculation C20 | 266.1 | T4.8 LTM interest expense, net | 2026-09-30 | USD | US$m | 2.63 | Estimated | Tier 2b | Accrual interest expense, net is a proxy for cash interest |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | Latest period | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, year on year (%) | 50.88 | 3.21 | -29.95 | -2.17 (nine months 2026 against nine months 2025) | Down | FY2023 growth uses FY2022 revenue of USD 1,977.3m from the FY2024 annual report; the FY2025 fall reflects lower Manufacturing revenue |
| Margin | EBITDA margin, reported and derived (%) | 23.81 | 25.50 | 44.24 | 48.28 (twelve months to 2026-09-30) | Up | Lifted by non-cash divestiture gains in FY2025 and the twelve months to 2026-09-30 |
| Cash flow | Operating cash flow from continuing operations (US$m) | 309.0 | 588.1 | 366.9 | 422.4 (twelve months to 2026-09-30) | Mixed | Before fleet investment |
| Cash flow | Cash flow after net fleet investment (US$m) | -19.3 | 353.1 | -28.7 | 165.5 (twelve months to 2026-09-30) | Mixed | Operating cash flow less lease fleet capital expenditure plus lease portfolio sale proceeds less operating and administrative capital expenditure |
| Fleet | Company-owned railcars in the lease fleet, period end | 109,295 | 109,635 | 101,485 | 97,160 (2026-09-30) | Down | The perimeter changed through the 2025 and 2026 partnership transactions, so counts are not like-for-like; period-end values; sources: 10-K_2024-12-31_trn.htm.jsonl, pages 45, 53; 10-K_2025-12-31_trn.htm.jsonl, pages 41, 48; 10-Q_2026-09-30_trn.htm.jsonl, pages 34, 43 |
| Fleet | Fleet utilization, period end (%) | 97.5 | 97.0 | 97.1 | 97.0 (2026-09-30) | Down then flat | Period-end rate as reported; not averaged; sources: 10-K_2024-12-31_trn.htm.jsonl, page 53; 10-K_2025-12-31_trn.htm.jsonl, pages 41, 48; 10-Q_2026-09-30_trn.htm.jsonl, pages 34, 43 |
| Fleet | Average remaining lease term of company-owned railcars (years) | 2.9 | 2.9 | 2.8 | 2.7 (2026-09-30) | Down | Period-end value as reported; sources: 10-K_2024-12-31_trn.htm.jsonl, page 53; 10-K_2025-12-31_trn.htm.jsonl, page 48; 10-Q_2026-09-30_trn.htm.jsonl, page 43 |
| Backlog | Value of the railcar backlog (US$ billion) | 3.2 | 2.1 | 1.7 | 1.6 (2026-09-30) | Down | Rounded by the issuer to one decimal; the Rail Products Group backlog from the Leasing Group is supported by external lease commitments; sources: 10-K_2024-12-31_trn.htm.jsonl, page 45; 10-K_2025-12-31_trn.htm.jsonl, page 41; 10-Q_2026-09-30_trn.htm.jsonl, page 35 |
| Capital | Net fleet investment (US$m) | 287.0 | 181.2 | 350.0 | 240.8 (nine months 2026) | Mixed | Lease fleet capital expenditure net of lease portfolio sale proceeds, as the issuer states for each period; sources: 10-K_2024-12-31_trn.htm.jsonl, page 60; 10-K_2025-12-31_trn.htm.jsonl, page 53; 10-Q_2026-09-30_trn.htm.jsonl, page 49 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA as the unadjusted figure the issuer states | The issuer states no EBITDA or adjusted EBITDA; EBITDA appears only inside covenant definitions | Derived as total operating profit plus depreciation and amortization; operating profit includes disposition gains of USD 290.8m in FY2025 (USD 194.2m non-cash Triumph gain) and USD 187.8m for nine months 2026 (USD 131.6m non-cash TRIP Holdings gain) | FY2025; twelve months to 2026-09-30 | High: the two non-cash gains are 31.8% of twelve-month EBITDA (USD 325.8m of USD 1,025.2m) | Financial foundation, Fundamental credit | Reported measure kept as the denominator; a house-adjusted ratio without the gains is shown beside it and labelled Analyst Judgement |
| Net debt / EBITDA against covenant net leverage | Carrying-value debt over reported EBITDA, consolidated | Maximum net leverage covenant of 3.75x, actual 0.75x at 2026-09-30, on indebtedness net of unrestricted cash above USD 50.0m up to USD 300.0m over EBITDA of the Borrower and its restricted subsidiaries | Credit agreement not supplied, so the perimeter and add-backs behind 0.75x are not known; 5.04x on the consolidated basis used here | 2026-09-30 and each year end | High: 4.29x apart; not reconciled | Legal & covenants, Covenant capacity | Both figures given with sources; the issuer ratio is not used as leverage here |
| Total debt | Balance-sheet carrying value net of issuance costs; principal kept separately | Debt table prints carrying value by instrument; maturity ladder prints principal | Carrying value USD 5,442.5m (page 98) against principal USD 5,466.5m (page 107) at 2025-12-31, a difference of USD -24.0m; principal not printed at 2026-09-30 | 2025-12-31 | Low: 0.4% of carrying value | Financial foundation | Carrying value used in every ratio; principal shown in Debt principal to carrying value |
| Interest | Cash interest paid for cover | Interest paid is printed for annual periods; interest expense, net is printed for all periods | FY2025 interest paid USD 272.8m against interest expense, net USD 274.2m; no cash figure for 2026 periods | FY2025; 2026 periods | Medium: cash cover not stated for the latest period | Financial foundation, Fundamental credit | Fixed cover rows use interest paid; a proxy on interest expense, net is labelled |
| Cash | Unrestricted cash and cash equivalents for net debt | Balance sheet shows restricted cash separately; the cash flow statement reconciles cash plus restricted cash | Net debt uses USD 158.3m unrestricted cash; restricted cash is USD 119.7m and is excluded; closing cash in the cash flow statement is USD 278.0m including restricted cash | 2026-09-30 | Medium: USD 119.7m | Financial foundation | Unrestricted cash used for net debt and liquidity |
| Triumph divestiture, December 2025 | All figures of one event, each with its statement role | Income statement gain USD 194.2m; non-cash net assets divested USD 69.2m and non-controlling interest derecognised USD 103.3m in the cash flow supplement; Triumph debt no longer consolidated | The figures are different measures of one exchange and are not reconciled in the filing | FY2025 | Medium | Financial foundation | Gain removed in the house-adjusted ratio; other figures shown for reference |
| TRIP Holdings divestiture, April 2026 | All figures of one event, each with its statement role | Gain USD 131.6m; fair value of the new partnership interest USD 112.9m; net assets derecognised USD 50.0m in the note against USD 39.2m of noncash net assets divested in the cash flow supplement; non-controlling interest derecognised USD 64.3m | The note and the cash flow supplement state USD 50.0m and USD 39.2m for net assets; the filing does not explain the difference of USD 10.8m | Nine months 2026 | Medium | Financial foundation | Both figures shown; neither is used in a ratio |
| Obligations outside Total Debt | Total Debt is every balance-sheet debt line; lease liabilities on their own lines are not added, and an obligation the issuer carries inside its debt lines stays in | The sale-leaseback financing (USD 45.7m at 2026-09-30) is carried inside debt; operating lease liabilities (USD 106.7m at 2025-12-31) sit in other liabilities; purchase and other contractual obligations were USD 400.3m due within twelve months and USD 19.0m thereafter at 2025-12-31 and are off balance sheet; the frozen SERP obligation (USD 10.4m at 2025-12-31) is in accrued liabilities; supplier finance (USD 46.3m at 2026-09-30) is in accounts payable; litigation accruals are USD 15.3m at 2026-09-30 against reasonably possible losses of USD 14.6m to USD 26.0m | Only the sale-leaseback financing is in Total Debt; the other items are outside it and are not added | 2025-12-31 and 2026-09-30 | Medium: each item is stated on its own date and the items are not summed because the dates differ | Financial foundation, Fundamental credit | Total Debt kept to debt lines; these obligations are named here so the credit read can weigh them; sources: 10-K_2025-12-31_trn.htm.jsonl, pages 51, 73, 111; 10-Q_2026-09-30_trn.htm.jsonl, pages 8, 20, 29 |
| Fleet counts | Period-end operating indicators on a stated perimeter | Company-owned railcars include wholly-owned, partially-owned and leased-in railcars | The count fell from 109,635 at 2024-12-31 to 97,160 at 2026-09-30 largely because railcars moved to investor-owned status in the partnership transactions | 2024-12-31 to 2026-09-30 | Medium | Business & governance | Counts are shown per period and not joined into a trend |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_trn.htm.jsonl | Annual report, Form 10-K, audited | FY2022 to FY2024; balance sheets at 2024-12-31 and 2023-12-31 | USD | millions | Trinity Industries, Inc. and Subsidiaries, consolidated | US GAAP | Tier 1: audited statements | FY2023 balance sheet; 2024-12-31 liquidity and covenant table | Superseded for current facts; perimeter before the December 2025 and April 2026 exchanges |
| 10-K_2025-12-31_trn.htm.jsonl | Annual report, Form 10-K, audited | FY2023 to FY2025; balance sheets at 2025-12-31 and 2024-12-31; quarterly data for 2025 and 2024 | USD | millions | Trinity Industries, Inc. and Subsidiaries, consolidated | US GAAP | Tier 1: audited statements; quarterly data unaudited | Annual statements, debt note, maturity ladder, interest paid, covenants | Interest paid only for annual periods; ladder at 2025-12-31 only |
| 10-Q_2026-03-31_trn.htm.jsonl | Quarterly report, Form 10-Q, unaudited | Three months ended 2026-03-31 | USD | millions | Trinity Industries, Inc. and Subsidiaries, consolidated | US GAAP | Tier 2b: unaudited without auditor review stated | Liquidity components at 2026-03-31 | No interest paid line |
| 10-Q_2026-06-30_trn.htm.jsonl | Quarterly report, Form 10-Q, unaudited | Three and six months ended 2026-06-30 | USD | millions | Trinity Industries, Inc. and Subsidiaries, consolidated | US GAAP | Tier 2b: unaudited without auditor review stated | Liquidity components at 2026-06-30 | No interest paid line; first statements after the April 2026 deconsolidation |
| 10-Q_2026-09-30_trn.htm.jsonl | Quarterly report, Form 10-Q, unaudited | Three and nine months ended 2026-09-30 | USD | millions | Trinity Industries, Inc. and Subsidiaries, consolidated | US GAAP | Tier 2b: unaudited without auditor review stated | Latest statements, debt, liquidity, covenants and subsequent events | No interest paid line; maturity ladder not reprinted |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Trinity Industries, Inc. | Issuer, parent and borrower under the revolving credit facility; issuer of the senior notes due 2028 | December 31 | USD | millions | Consolidated, including non-recourse leasing subsidiaries; the Triumph and TRIP Holdings partnerships left the perimeter in December 2025 and April 2026 | US GAAP | FY2023 to FY2025; Q3 and nine months 2025 and 2026; balance sheets at 2023-12-31 to 2026-09-30 |
| Certain wholly-owned domestic subsidiaries | Guarantors of the revolver and senior notes; names not stated in the sources read | December 31 | USD | millions | Included in the consolidated statements; no separate financials supplied | US GAAP | Not supplied: no guarantor statements |
| Trinity Industries Leasing Company (TILC) and its limited-purpose leasing subsidiaries | Borrowers of the non-recourse lease fleet debt | December 31 | USD | millions | Wholly-owned and consolidated; non-recourse to Trinity | US GAAP | Within the consolidated statements; no separate financials supplied |
| TRIP Holdings and Tribute Rail | Partially-owned leasing subsidiary and its debt issuer, deconsolidated in April 2026 | December 31 | USD | millions | Consolidated to April 1, 2026; not consolidated afterwards | US GAAP | Consolidated in FY2023 to FY2025 and the first quarter of 2026 |

A subsequent event is flagged with its date and kept out of period figures: the October 19, 2026 TRL-2026 term loan and the October 2026 cash settlement of share repurchases, both after the 2026-09-30 balance sheet.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA derived because the issuer reports none | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Derivation | Not supplied: no issuer EBITDA | EBITDA (Reported) equals total operating profit plus depreciation and amortization, USD 1,025.2m for the twelve months to 2026-09-30 | Method step 4: derive EBITDA from components and label it calculated | All periods |
| Divestiture gains removed from EBITDA (Analyst Judgement) | 10-K_2025-12-31_trn.htm.jsonl, page 43; 10-Q_2026-09-30_trn.htm.jsonl, page 17 | Normalization | USD 1,025.2m | USD 699.4m (USD 760.1m for FY2025) | The USD 194.2m and USD 131.6m gains arise from deconsolidating railcar partnerships and are non-cash; shown beside the reported measure, never replacing it | FY2025; twelve months to 2026-09-30 |
| Unrestricted cash only in net debt | 10-Q_2026-09-30_trn.htm.jsonl, page 3 | Definition | Cash and restricted cash USD 278.0m | USD 158.3m | Restricted cash of USD 119.7m is not available to repay debt | 2026-09-30 and each year end |
| No currency or unit conversion | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | None | USD millions | USD millions | All statements are printed in US dollars in millions | All periods |
| Printed dash treated as not supplied | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | Convention | Dash | Not supplied: the filing prints a dash | Method rule: a dash is a missing value with a gap line, never zero | Rows with a dash |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage on carrying-value debt and reported EBITDA | Ready with Limitations | EBITDA is derived, includes non-cash gains, and its perimeter differs from the debt perimeter | Read the house-adjusted ratio beside the reported one |
| Interest cover on cash interest | Not Ready | Cash interest paid is not printed for 2026 periods | Obtain interest paid for the nine months 2026 and 2025 from the filer; until then use the proxy on interest expense, net |
| Liquidity and facility headroom | Ready | Warehouse availability depends on eligible unpledged railcars | None for source content |
| Debt structure and maturities | Ready with Limitations | Ladder is drawn at 2025-12-31 only; 2026 refinancings are not reflected | Obtain a ladder at 2026-09-30 or the October 22, 2026 current report |
| Covenant analysis | Not Ready | Executed credit agreement not supplied; covenant perimeter unknown | Obtain the credit agreement and the June 2026 amendment |

## Calculations

Each figure below is worked from printed inputs with the arithmetic shown; ratios are printed to two decimals and amounts are in US dollars in millions unless stated.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Net debt at 2023-12-31 | USD 5,754.2m gross debt - USD 105.7m cash | USD 5,648.5m | 10-K_2024-12-31_trn.htm.jsonl, pages 76–77 |
| C2 | Net debt at 2024-12-31 | USD 5,690.9m gross debt - USD 228.2m cash | USD 5,462.7m | 10-K_2025-12-31_trn.htm.jsonl, pages 67–68 |
| C3 | Net debt at 2025-12-31 | USD 5,442.5m gross debt - USD 201.3m cash | USD 5,241.2m | 10-K_2025-12-31_trn.htm.jsonl, pages 67–68 |
| C4 | Net debt at 2026-09-30 | USD 5,325.0m gross debt - USD 158.3m cash | USD 5,166.7m | 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| C5 | EBITDA (Reported) FY2023 | USD 417.0m total operating profit + USD 293.2m depreciation and amortization | USD 710.2m | 10-K_2025-12-31_trn.htm.jsonl, pages 66, 68 |
| C6 | EBITDA (Reported) FY2024 | USD 491.5m total operating profit + USD 293.8m depreciation and amortization | USD 785.3m | 10-K_2025-12-31_trn.htm.jsonl, pages 66, 68 |
| C7 | EBITDA (Reported) FY2025 | USD 649.2m total operating profit + USD 305.1m depreciation and amortization | USD 954.3m | 10-K_2025-12-31_trn.htm.jsonl, pages 66, 68 |
| C8 | EBITDA (Reported) Q3 2025 | USD 118.6m total operating profit + USD 76.9m depreciation and amortization | USD 195.5m | 10-Q_2026-09-30_trn.htm.jsonl, pages 2, 16 |
| C9 | EBITDA (Reported) Q3 2026 | USD 95.6m total operating profit + USD 70.5m depreciation and amortization | USD 166.1m | 10-Q_2026-09-30_trn.htm.jsonl, pages 2, 16 |
| C10 | EBITDA (Reported) 9M 2025 | USD 313.8m total operating profit + USD 226.4m depreciation and amortization | USD 540.2m | 10-Q_2026-09-30_trn.htm.jsonl, pages 2–3 |
| C11 | EBITDA (Reported) 9M 2026 | USD 396.5m total operating profit + USD 214.6m depreciation and amortization | USD 611.1m | 10-Q_2026-09-30_trn.htm.jsonl, pages 2–3 |
| C12 | EBITDA (Reported), twelve months to 2026-09-30 | USD 954.3m FY2025 + USD 611.1m 9M 2026 - USD 540.2m 9M 2025 | USD 1,025.2m | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–3 |
| C13 | Revenues, twelve months to 2026-09-30 | USD 2,156.9m + USD 1,512.2m - USD 1,545.7m | USD 2,123.4m | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C14 | Total operating profit, twelve months to 2026-09-30 | USD 649.2m + USD 396.5m - USD 313.8m | USD 731.9m | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C15 | Depreciation and amortization, twelve months to 2026-09-30 | USD 305.1m + USD 214.6m - USD 226.4m | USD 293.3m | 10-K_2025-12-31_trn.htm.jsonl, page 68; 10-Q_2026-09-30_trn.htm.jsonl, page 3 |
| C16 | Interest expense, net, twelve months to 2026-09-30 | USD 274.2m + USD 195.5m - USD 203.6m | USD 266.1m | 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C17 | Operating cash flow from continuing operations, twelve months to 2026-09-30 | USD 366.9m + USD 242.7m - USD 187.2m | USD 422.4m | 10-K_2025-12-31_trn.htm.jsonl, page 68; 10-Q_2026-09-30_trn.htm.jsonl, page 4 |
| C18 | Operating profit plus depreciation and amortization agrees with the LTM EBITDA | USD 731.9m + USD 293.3m | USD 1,025.2m (equals USD 1,025.2m) | Calculation of this module |
| C19 | EBITDA without the FY2025 divestiture gain (Analyst Judgement) | USD 954.3m - USD 194.2m gain on the Triumph divestiture | USD 760.1m | 10-K_2025-12-31_trn.htm.jsonl, pages 43, 66 |
| C20 | EBITDA without the two divestiture gains, twelve months to 2026-09-30 (Analyst Judgement) | USD 1,025.2m - USD 194.2m (Q4 2025) - USD 131.6m (Q2 2026) | USD 699.4m | 10-K_2025-12-31_trn.htm.jsonl, pages 43, 121; 10-Q_2026-09-30_trn.htm.jsonl, pages 2, 17 |
| C21 | Share of the two gains in LTM EBITDA | (USD 194.2m + USD 131.6m) / USD 1,025.2m | 31.78% | Calculation of this module |
| C22 | Net debt / EBITDA, 2026-09-30 | USD 5,166.7m / USD 1,025.2m | 5.04x | Calculation register |
| C23 | Net debt / EBITDA, FY2023 | USD 5,648.5m / USD 710.2m | 7.95x | Calculation register |
| C24 | Net debt / EBITDA, FY2025 | USD 5,241.2m / USD 954.3m | 5.49x | Calculation register |
| C25 | Net debt / EBITDA without the two gains, 2026-09-30 (Analyst Judgement) | USD 5,166.7m / USD 699.4m | 7.39x | Calculation register |
| C26 | Net debt / EBITDA without the FY2025 gain (Analyst Judgement) | USD 5,241.2m / USD 760.1m | 6.90x | Calculation register |
| C27 | EBITDA / cash interest, FY2025 | USD 954.3m / USD 272.8m | 3.50x | Calculation register |
| C28 | EBITDA / cash interest, FY2024 | USD 785.3m / USD 271.4m | 2.89x | Calculation register |
| C29 | EBITDA / interest expense, net (proxy), 2026-09-30 | USD 1,025.2m / USD 266.1m | 3.85x | Calculation register |
| C30 | EBITDA without the two gains / interest expense, net (proxy), 2026-09-30 (Analyst Judgement) | USD 699.4m / USD 266.1m | 2.63x | Calculation register |
| C31 | Undrawn committed facilities and committed liquidity at 2024-12-31 | USD 591.3m revolver + USD 167.9m warehouse = USD 759.2m undrawn; + USD 228.2m cash | USD 759.2m undrawn; USD 987.4m committed liquidity | 10-K_2024-12-31_trn.htm.jsonl, page 57 |
| C32 | Undrawn committed facilities and committed liquidity at 2025-12-31 | USD 592.7m revolver + USD 321.5m warehouse = USD 914.2m undrawn; + USD 201.3m cash | USD 914.2m undrawn; USD 1,115.5m committed liquidity | 10-K_2025-12-31_trn.htm.jsonl, page 50 |
| C33 | Undrawn committed facilities and committed liquidity at 2026-03-31 | USD 595.6m revolver + USD 339.6m warehouse = USD 935.2m undrawn; + USD 132.6m cash | USD 935.2m undrawn; USD 1,067.8m committed liquidity | 10-Q_2026-03-31_trn.htm.jsonl, page 34 |
| C34 | Undrawn committed facilities and committed liquidity at 2026-06-30 | USD 592.4m revolver + USD 286.8m warehouse = USD 879.2m undrawn; + USD 155.7m cash | USD 879.2m undrawn; USD 1,034.9m committed liquidity | 10-Q_2026-06-30_trn.htm.jsonl, page 43 |
| C35 | Undrawn committed facilities and committed liquidity at 2026-09-30 | USD 592.4m revolver + USD 146.5m warehouse = USD 738.9m undrawn; + USD 158.3m cash | USD 738.9m undrawn; USD 897.2m committed liquidity | 10-Q_2026-09-30_trn.htm.jsonl, page 47 |
| C36 | Revolver availability at 2026-09-30 | USD 600.0m facility - USD 7.6m letters of credit | USD 592.4m | 10-Q_2026-09-30_trn.htm.jsonl, page 21 |
| C37 | Contractual principal at 2025-12-31: sum of the maturity ladder | USD 1,096.1m + USD 680.4m + USD 1,679.8m + USD 259.0m + USD 938.0m + USD 813.2m | USD 5,466.5m | 10-K_2025-12-31_trn.htm.jsonl, page 107 |
| C38 | Reconciling items from principal to carrying value at 2025-12-31 | USD 3.1m premium on the senior notes - USD 0.9m unamortized discounts - USD 26.2m unamortized debt issuance costs (USD 4.6m + USD 20.9m + USD 0.7m) | USD -24.0m | 10-K_2025-12-31_trn.htm.jsonl, pages 98, 107 |
| C39 | Principal plus reconciling items equals carrying value | USD 5,466.5m + USD -24.0m | USD 5,442.5m (equals gross debt USD 5,442.5m) | 10-K_2025-12-31_trn.htm.jsonl, page 98 |
| C40 | Cash flow after net fleet investment and operating capital expenditure, FY2023 | USD 309.0m operating cash flow (continuing) - USD 668.8m lease fleet capital expenditure + USD 381.8m lease portfolio sale proceeds - USD 41.3m operating and administrative capital expenditure | USD -19.3m | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69 |
| C41 | Cash flow after net fleet investment and operating capital expenditure, FY2024 | USD 588.1m operating cash flow (continuing) - USD 541.9m lease fleet capital expenditure + USD 360.7m lease portfolio sale proceeds - USD 53.8m operating and administrative capital expenditure | USD 353.1m | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69 |
| C42 | Cash flow after net fleet investment and operating capital expenditure, FY2025 | USD 366.9m operating cash flow (continuing) - USD 749.3m lease fleet capital expenditure + USD 399.3m lease portfolio sale proceeds - USD 45.6m operating and administrative capital expenditure | USD -28.7m | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69 |
| C43 | Cash flow after net fleet investment and operating capital expenditure, 9M 2025 | USD 187.2m operating cash flow (continuing) - USD 530.3m lease fleet capital expenditure + USD 142.9m lease portfolio sale proceeds - USD 26.8m operating and administrative capital expenditure | USD -227.0m | 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| C44 | Cash flow after net fleet investment and operating capital expenditure, 9M 2026 | USD 242.7m operating cash flow (continuing) - USD 409.5m lease fleet capital expenditure + USD 168.7m lease portfolio sale proceeds - USD 34.7m operating and administrative capital expenditure | USD -32.8m | 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4 |
| C45 | Cash flow after net fleet investment, twelve months to 2026-09-30 | USD -28.7m + USD -32.8m - (USD -227.0m) | USD 165.5m | Calculation of this module |
| C46 | Net fleet investment, nine months 2026 | USD 409.5m lease fleet capital expenditure - USD 168.7m lease portfolio sale proceeds | USD 240.8m | 10-Q_2026-09-30_trn.htm.jsonl, pages 4, 49 |
| C47 | Change in total debt, 2025-12-31 to 2026-09-30 | USD 5,442.5m - USD 5,325.0m | USD 117.5m decrease; the Tribute Rail debt of USD 270.6m left the consolidated balance sheet in the same period | 10-K_2025-12-31_trn.htm.jsonl, page 98; 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 22 |
| C48 | Pro forma net debt after the October 2026 share repurchase cash settlement | USD 5,166.7m + USD 1.3m | USD 5,168.0m | 10-Q_2026-09-30_trn.htm.jsonl, page 49 |
| C49 | Pro forma net debt / EBITDA | USD 5,168.0m / USD 1,025.2m | 5.04x | Calculation register |
| C50 | Cumulative debt through Secured railcar equipment notes, wholly-owned leasing subsidiaries | USD 3,041.5m cumulative / USD 1,025.2m EBITDA | 2.97x | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C51 | Cumulative debt through TRL-2023 term loan | USD 4,048.1m cumulative / USD 1,025.2m EBITDA | 3.95x | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C52 | Cumulative debt through TILC warehouse facility | USD 4,701.6m cumulative / USD 1,025.2m EBITDA | 4.59x | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C53 | Cumulative debt through Revolving credit facility | USD 4,701.6m cumulative / USD 1,025.2m EBITDA | 4.59x | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C54 | Cumulative debt through Senior notes due 2028 | USD 5,303.8m cumulative / USD 1,025.2m EBITDA | 5.17x | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C55 | Debt stack plus other equipment financing less issuance costs equals gross debt | USD 5,303.8m stack + USD 45.7m other equipment financing - USD 24.5m issuance costs (USD 3.3m + USD 21.2m) | USD 5,325.0m | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C56 | Principal of the secured railcar equipment notes and the TRL-2023 term loan | USD 3,041.5m + USD 0.4m discount; USD 1,006.6m + USD 0.5m discount | USD 3,041.9m; USD 1,007.1m | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C57 | Revenue growth FY2023, FY2024, FY2025 and nine months 2026 | USD 2,983.3m / USD 1,977.3m - 1; USD 3,079.2m / USD 2,983.3m - 1; USD 2,156.9m / USD 3,079.2m - 1; USD 1,512.2m / USD 1,545.7m - 1 | 50.88%; 3.21%; -29.95%; -2.17% | 10-K_2024-12-31_trn.htm.jsonl, page 75; 10-K_2025-12-31_trn.htm.jsonl, page 66; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C58 | EBITDA margin FY2023, FY2024, FY2025 and twelve months to 2026-09-30 | USD 710.2m / USD 2,983.3m; USD 785.3m / USD 3,079.2m; USD 954.3m / USD 2,156.9m; USD 1,025.2m / USD 2,123.4m | 23.81%; 25.50%; 44.24%; 48.28% | Calculation of this module |

## Gaps

- Cash interest paid is not printed for the nine months to 2026-09-30, the nine months to 2025-09-30 or the twelve months to 2026-09-30, because the three 2026 quarterly reports carry no interest paid line; EBITDA over cash interest is therefore not calculable for the latest period, and a proxy on interest expense, net is used instead. Severity High; the action that would close it is to obtain interest paid for those periods from the filer.
- The debt maturity ladder is printed only at 2025-12-31, so debt maturing is not stated at 2026-09-30 and does not reflect the April 2026 redemption of the 2019-1 notes, the deconsolidation of Tribute Rail debt, the June 2026 revolver extension or the October 2026 term loan. Severity High; the action is to obtain a ladder at 2026-09-30.
- The issuer reports no EBITDA or adjusted EBITDA, so reported EBITDA is derived from total operating profit and depreciation and amortization and includes non-cash divestiture gains of USD 194.2 million in Q4 2025 and USD 131.6 million in Q2 2026. The earnings of the deconsolidated partnerships are in the twelve-month figure while their debt is not in the balance sheet, and no pro forma figures are printed. Severity High; the action is to obtain a management reconciliation or pro forma statements.
- The covenant net leverage ratio of 0.75x and interest coverage of 13.13x at 2026-09-30 cannot be reconciled to the consolidated ratios here, because the executed credit agreement and the covenant perimeter are not supplied. Severity Medium; the action is to obtain the credit agreement and its June 2026 amendment.
- The effect on net debt of the October 19, 2026 term loan, the redemption of the 2019-2 notes and the repayment of warehouse borrowings is not stated, because the warehouse repayment and issuance costs are not given, so no pro forma net debt or net leverage is stated for that event. Severity Medium; the action is to obtain the current report of October 22, 2026 or a ladder after the transaction.
- Liquidity components are printed at 2024-12-31 and later dates only, so undrawn committed facilities for FY2023 are not supplied. Severity Low; the action is to obtain the FY2023 annual report.
- Where the filings print a dash, the cell is shown as not supplied and not as zero: the divestiture gain line in the income statement for periods without a gain, the restructuring line for FY2025, the cash flow lines for acquisitions, insurance recoveries, contingent consideration, share repurchases, debt extinguishment and restricted cash related to the divestiture in periods without them, and the partially-owned subsidiary debt line at 2026-09-30. Quarterly statements also carry no restructuring, insurance recovery or non-cash restructuring line. Severity Low; no action is needed beyond reading these cells as nil.
- The cash flow statement is printed for years and for nine months only, so discrete Q2 and Q3 2026 cash flows and the Q4 2025 cash flow are not constructed, and the twelve-month figures at 2026-03-31 and 2026-06-30 are not built; leverage is stated at year ends and at 2026-09-30 only. Severity Low; the action is to construct them if a quarterly trend is needed.
- Instrument terms for the secured railcar equipment notes are printed by series in the 2025 annual report but only as one aggregate in the 2026 quarterly reports, so one coupon, maturity and amortisation for the aggregate is not supplied; the rank of the other equipment financing of USD 45.7 million is not stated, so it is left out of the debt stack. Severity Low; the action is to rebuild the series table from the 2025 annual report if needed.
- The issuer states no adjusted EBITDA, so the EBITDA bridge to an issuer-adjusted measure is not stated and the bridge table carries no amounts. Severity Low; no action is possible from the filings.

## Next module

The orchestrator selects the next module.
