---
issuer_id: american-airlines-inc
module_id: CP-1
analysis_date: 2026-11-05
run_id: american-airlines-inc-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-1 Financial foundation for AMERICAN AIRLINES, INC.

## Request
Financial foundation for AMERICAN AIRLINES, INC. (american-airlines-inc), as of 2026-11-05, under the credit_snapshot pathway. The scope is the issuer's own statements, debt, liquidity and credit metrics for FY2024, FY2025 and the nine months to September 30, 2026, with the parent's figures kept apart.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Combined annual report on Form 10-K of American Airlines Group Inc. and American Airlines, Inc. for the year ended December 31, 2025 | 2026-02-18 | 241cb406125cf4a40a3dec4d315c7a8e709f73f5f12957d46a28f056de7b338c | Audited FY2025 and FY2024 statements of American Airlines, Inc., debt note, liquidity table, supplemental cash flow. |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-22 | edb09356472b6a21c11979d0ace904761af85e302b5218542813aede49a0decc | Latest-period statements of American Airlines, Inc., debt note, maturity ladder, liquidity, covenant summary, commitments. |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Third-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-10-22 | ce6723a4b2e59ac217d38de9b2fa855bbf5fa9fd11b713b0732222688fa7865b | Parent-level net debt definition and outlook, used as context only. |

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 | bd54f0ef7be7c4905b1acb2a15d1e60b5211836b6a174b954a6d8e979771d4f3 | Inventory information from Source readiness only; not used for figures. |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Combined quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 | e590d34e327bfac4cc2a446c7444656df89c4b6aac523f8df741e9c71b1ace9a | Inventory information from Source readiness only; not used for figures. |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | First-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-04-23 | 9a2e0cf77a5348cca76e4e1fa089b91044513dded2916dcf498cbc76a4f142fe | Inventory information from Source readiness only; not used for figures. |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Second-quarter 2026 earnings presentation (Exhibit 99.2) of American Airlines Group Inc. | 2026-07-23 | 60d450333d317c8f5bcb2c0834ff53272fd96fa253d4a67d36813c30742d7ee9 | Inventory information from Source readiness only; not used for figures. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | ef9f4eb6c899bc40f69251d5b030a69569521b0da9a81ab880b7552fbcd7b445 | Accepted source inventory, reporting perimeter, document dates and the limitation that no executed debt documents were supplied; no financial figure imported. |

No external sources were used.

## Findings

### Bottom line
Total debt reached 8.87x last-twelve-month reported EBITDA at September 30, 2026, up from 5.63x at the end of 2024, so creditors of American Airlines, Inc. depend on USD 11,763 million of available liquidity and collateral rather than earnings cover.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; calculation C03; calculation C05; calculation C09

The fall in earnings is led by fuel: aircraft fuel and related taxes rose by USD 4,427 million in the first nine months of 2026 while revenue grew 15.63%. Debt rose only USD 617 million since December 31, 2025, and liquidity covers the USD 4,181 million of principal due before the end of 2027 by 2.81x, while interest paid over the last twelve months is covered 2.06x.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; calculation C09; calculation C11; calculation C12

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_aal-20251231.htm.jsonl | Annual Form 10-K, combined filing | FY2025 with FY2024 comparatives | USD | millions | Issuer statements in Item 8B; parent statements in Item 8A kept apart | US GAAP | Tier 1 audited statements | Issuer annual statements, debt and liquidity | Governance items omitted for the issuer; debt terms summarised, not executed agreements |
| 10-Q_2026-09-30_aal-20260930.htm.jsonl | Quarterly Form 10-Q, combined filing | Q3 2026, nine months 2026, balance sheet at 2026-09-30 | USD | millions | Issuer statements in Item 1B; parent statements in Item 1A kept apart | US GAAP | Tier 2b unaudited interim | Latest-period issuer statements, debt ladder, liquidity | Nine-month cash flow prints totals for operating activities only; no quarter cash flow |
| EX-99.2_2026-10-22_earningspresentation.htm.jsonl | Earnings presentation, Exhibit 99.2 | Q3 2026, outlook for Q4 and FY2026 | USD | millions or billions as printed | American Airlines Group Inc. only | US GAAP and non-GAAP | Tier 2c issuer presentation, supporting only | Parent context | Parent-level; does not override the filings |
| 10-Q_2026-03-31_aal-20260331.htm.jsonl | Quarterly Form 10-Q, inventoried by Source readiness | Q1 2026 | USD | millions | Group and issuer | US GAAP | Tier 2b unaudited interim | Not used for figures | Superseded for balances by the third-quarter report |
| 10-Q_2026-06-30_aal-20260630.htm.jsonl | Quarterly Form 10-Q, inventoried by Source readiness | Q2 and H1 2026 | USD | millions | Group and issuer | US GAAP | Tier 2b unaudited interim | Not used for figures | Superseded for balances by the third-quarter report |
| EX-99.2_2026-04-23_earningspresentation.htm.jsonl | Earnings presentation, inventoried by Source readiness | Q1 2026 | USD | millions or billions as printed | American Airlines Group Inc. only | US GAAP and non-GAAP | Tier 2c issuer presentation | Not used for figures | Parent-level |
| EX-99.2_2026-07-23_earningspresentation.htm.jsonl | Earnings presentation, inventoried by Source readiness | Q2 2026 | USD | millions or billions as printed | American Airlines Group Inc. only | US GAAP and non-GAAP | Tier 2c issuer presentation | Not used for figures | Parent-level |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| American Airlines, Inc. | Issuer; wholly-owned subsidiary and co-registrant of American Airlines Group Inc. | December 31 | USD | millions | Consolidated subsidiaries of American; its own statements, not the parent's | US GAAP | FY2025; FY2024; Q3 2026; Q3 2025; 9M 2026; 9M 2025; balance sheets at 2025-12-31, 2024-12-31 and 2026-09-30 |
| American Airlines Group Inc. | Parent and co-registrant; not the issuer | December 31 | USD | millions | Group consolidation including regional carriers and parent-level debt | US GAAP | Shown for comparison only; parent balance sheet at 2026-09-30 |
| AAdvantage Loyalty IP Ltd. | Cayman Islands co-borrower of the AAdvantage term loans; indirect wholly-owned subsidiary of American | Not supplied: stand-alone statements not printed | USD | millions | Debt-specific obligor; no stand-alone statements | Not supplied: not stated | Debt described at 2026-09-30 |

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |

Balance-sheet figures are instants at the end of the period named; the nine-month 2026 balance sheet is the position at September 30, 2026. No restated figures for earlier years were found.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27 | Presentation only | USD millions; US GAAP; issuer consolidated | USD millions; US GAAP; issuer consolidated | No currency conversion, perimeter change or house adjustment | All |
| Total debt aggregation | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Calculated aggregation | FY2025: 3750 and 21509; FY2024: 4326 and 21410; 2026-09-30: 3689 and 22187 | FY2025: 25259; FY2024: 25736; 2026-09-30: 25876 | Current maturities plus long-term debt at carrying value; finance leases sit inside both lines as printed; calculation C01 | FY2025; FY2024; 9M 2026 |
| Reported EBITDA derivation | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Calculated | Operating income and depreciation and amortization as printed | FY2025: 3395; FY2024: 4573; 9M 2026: 1977 | The issuer states no EBITDA; operating income plus depreciation and amortization, unadjusted; calculation C02 | All income statement columns |
| Last-twelve-month construction | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 | Calculated | Full year, current nine months and prior nine months | EBITDA 2916; cash interest 1416 | Full year plus current stub less prior-year stub; calculation C03 | 2026-09-30 |
| Cash-flow sign convention | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 | Presentation only | Parenthesised outflows | Negative numbers | Direction preserved; cash interest paid stated as a positive amount | FY2025; FY2024; 9M 2026; 9M 2025 |

### T4.4 Income statement

| Line item | FY2025 | FY2024 | Q3 2026 | Q3 2025 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|---|
| Passenger revenue | 49643 | 49586 | 14900 | 12471 | 42609 | 36985 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Cargo revenue | 839 | 804 | 274 | 212 | 761 | 612 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other revenue | 4144 | 3814 | 1160 | 1005 | 3609 | 3031 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total operating revenues | 54626 | 54204 | 16334 | 13688 | 46979 | 40628 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Aircraft fuel and related taxes | 10718 | 11418 | 4635 | 2767 | 12444 | 8017 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Salaries, wages and benefits | 17556 | 16012 | 4711 | 4459 | 14019 | 13058 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Regional expenses | 5406 | 5009 | 1452 | 1353 | 4278 | 4027 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Maintenance, materials and repairs | 3844 | 3794 | 1092 | 1028 | 3100 | 2876 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other rent and landing fees | 3476 | 3303 | 996 | 906 | 2862 | 2627 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Aircraft rent | 1220 | 1242 | 309 | 310 | 926 | 910 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Selling expenses | 1997 | 1812 | 553 | 483 | 1664 | 1467 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Depreciation and amortization | 1884 | 1919 | 491 | 473 | 1442 | 1414 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Special items, net | 159 | 610 | 9 | 7 | 29 | 125 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other operating expenses | 6855 | 6431 | 1972 | 1735 | 5680 | 5065 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total operating expenses | 53115 | 51550 | 16220 | 13521 | 46444 | 39586 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Operating income | 1511 | 2654 | 114 | 167 | 535 | 1042 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Interest income | 949 | 1058 | 231 | 249 | 639 | 732 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Interest expense, net | -1780 | -2029 | -427 | -450 | -1231 | -1343 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Other income (expense), net | 81 | 5 | -101 | 49 | -200 | 41 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Total nonoperating expense, net | -750 | -966 | -297 | -152 | -792 | -570 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Income (loss) before income taxes | 761 | 1688 | -183 | 15 | -257 | 472 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Income tax provision (benefit) | 197 | 426 | -32 | 5 | -26 | 128 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Net income (loss) | 564 | 1262 | -151 | 10 | -231 | 344 | USD millions | Reported as printed; FY columns audited, Q3 and 9M columns unaudited | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| EBITDA (Reported) | 3395 | 4573 | 605 | 640 | 1977 | 2456 | USD millions | Calculated: operating income plus depreciation and amortization; the issuer states no EBITDA; calculation C02 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |


### Segment schedule

| Business unit | Period | Revenue | Operating income | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| American, single operating segment | FY2025 | 54626 | 1511 | USD millions | Reported; the issuer is managed as one operating segment, so segment totals equal the consolidated lines | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| American, single operating segment | FY2024 | 54204 | 2654 | USD millions | Reported; the issuer is managed as one operating segment, so segment totals equal the consolidated lines | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| American, single operating segment | 9M 2026 | 46979 | 535 | USD millions | Reported; the issuer is managed as one operating segment, so segment totals equal the consolidated lines | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |

### T4.5 Cash flow statement

| Line item | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income (loss) | 564 | 1262 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Depreciation and amortization | 2177 | 2198 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Debt extinguishment costs | 20 | 9 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Special items, net non-cash | -17 | -1 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Pension and postretirement | -31 | -82 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Deferred income tax provision | 197 | 426 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Share-based compensation, non-cash | 55 | 89 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Other, net | -91 | -260 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Decrease (increase) in accounts receivable | -69 | 33 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase in other assets | -144 | -287 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase in accounts payable | 274 | 284 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase (decrease) in air traffic liability | 399 | 559 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase in receivables from related parties, net | -1701 | -1099 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase in loyalty program liability | 510 | 727 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Contributions to pension plans | -225 | -295 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Increase (decrease) in other liabilities | 12 | -154 | Not supplied: the nine-month statement prints the operating total only | Not supplied: the nine-month statement prints the operating total only | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Net Cash from Operating Activities | 1930 | 3409 | 4440 | 2229 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Capital expenditures and aircraft purchase deposits | -3716 | -2624 | -2660 | -2103 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Proceeds from sale-leaseback transactions and sale of property and equipment | 343 | 654 | 77 | 243 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Sales of short-term investments | 6189 | 8013 | 2751 | 4944 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Purchases of short-term investments | -4905 | -7194 | -5025 | -4801 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Decrease (increase) in restricted short-term investments | 3 | 177 | 180 | -20 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Other investing activities | 254 | 65 | -80 | 280 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Net Cash from Investing Activities | -1832 | -909 | -4757 | -1457 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Payments on long-term debt and finance leases | -4503 | -3973 | -5343 | -3086 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Proceeds from issuance of long-term debt | 3773 | 1670 | 5933 | 2169 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Net proceeds from fuel financing | 840 | 74 | Not supplied: the nine-month statement prints no separate fuel financing line | Not supplied: the nine-month statement prints no separate fuel financing line | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Other financing activities | -63 | -48 | -113 | 180 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Net Cash from Financing Activities | 47 | -2277 | 477 | -737 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Net Cash Change | 145 | 223 | 160 | 35 | USD millions | Reported as printed; FY columns audited, 9M columns unaudited and condensed | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Opening Cash | 893 | 670 | 1038 | 893 | USD millions | Cash and restricted cash as the statement prints it; the balance-sheet cash line is smaller | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Closing Cash | 1038 | 893 | 1198 | 928 | USD millions | Cash and restricted cash as the statement prints it; the balance-sheet cash line is smaller | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–203; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Cash Interest Paid | 1551 | 1806 | 1044 | 1179 | USD millions | Supplemental interest paid, net, stated as a positive amount paid; accrued interest expense is separate | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |

### T4.6 Balance sheet

| Line item | FY2025 | FY2024 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash | 936 | 795 | 1094 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Short-term investments | 4880 | 6177 | 7159 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Restricted cash and short-term investments | 735 | 732 | 555 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accounts receivable, net | 2041 | 1977 | 1891 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Receivables from related parties, net | 9896 | 8187 | 10430 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Aircraft fuel, spare parts and supplies, net | 2596 | 2476 | 2939 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Prepaid expenses and other | 645 | 675 | 678 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total current assets | 21729 | 21019 | 24746 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Flight equipment | 46226 | 43158 | 48318 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Ground property and equipment | 9954 | 9709 | 10240 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Equipment purchase deposits | 656 | 1012 | 633 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total property and equipment, at cost | 56836 | 53879 | 59191 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Less accumulated depreciation and amortization | -24621 | -23060 | -25935 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total property and equipment, net | 32215 | 30819 | 33256 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease right-of-use assets | 7038 | 7274 | 6699 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Goodwill | 4091 | 4091 | 4091 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Intangibles, net | 2066 | 2044 | 2067 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Deferred tax asset | 1832 | 2068 | 1844 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other assets | 1276 | 1440 | 1115 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total other assets | 9265 | 9643 | 9117 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Assets | 70247 | 68755 | 73818 | USD millions | Reported; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Current maturities of long-term debt and finance leases | 3750 | 4326 | 3689 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accounts payable | 2717 | 2372 | 3175 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accrued salaries and wages | 1957 | 1995 | 1985 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Air traffic liability | 7158 | 6759 | 9414 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Loyalty program liability, current | 3725 | 3556 | 4446 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease liabilities, current | 1048 | 1082 | 1025 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Fuel financing | 914 | 74 | 933 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other accrued liabilities | 2768 | 2738 | 2871 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total current liabilities | 24037 | 22902 | 27538 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Long-term debt and finance leases, net of current maturities | 21509 | 21410 | 22187 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Pension and postretirement benefits | 1566 | 2115 | 1098 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Loyalty program liability, noncurrent | 6839 | 6498 | 7068 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Operating lease liabilities, noncurrent | 5860 | 5926 | 5567 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Other liabilities | 1408 | 1670 | 1465 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total noncurrent liabilities | 37182 | 37619 | 37385 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Additional paid-in capital | 17468 | 17408 | 17520 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Accumulated other comprehensive loss | -4507 | -4677 | -4461 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Retained deficit | -3933 | -4497 | -4164 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Equity | 9028 | 8234 | 8895 | USD millions | Reported as printed; the 9M 2026 column is the position at 2026-09-30 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Liabilities | 61219 | 60521 | 64923 | USD millions | Calculated: total current plus total noncurrent liabilities; calculation C18 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Total Debt | 25259 | 25736 | 25876 | USD millions | Calculated: current maturities plus long-term debt, both lines including finance leases; fuel financing and operating lease liabilities are separate lines and excluded; calculation C01 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Cash & Equivalents | 936 | 795 | 1094 | USD millions | Reported cash line; short-term investments and restricted cash are separate lines | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |

### T4.18 Debt instruments

All money columns are USD millions at September 30, 2026 for American Airlines, Inc. Instrument carrying values are not printed, so principal is kept and one financing cost adjustment row reconciles to total debt; finance leases carried inside the debt lines are a separate row.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; calculation C07

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2013 Term Loan Facility | Term loan | Not supplied: instrument carrying value not printed | 960 | 960 | Not applicable: term loan | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 960 | Not applicable | SOFR + 2.25% (margin elected at December 31, 2025); variable rate 5.94% at 2026-09-30 | floating | SOFR | 225 | 0 | February 2028 | 1.00% of principal issued each year; dollar amount not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 220–222 |
| 2014 Term Loan Facility | Term loan | Not supplied: instrument carrying value not printed | 1850 | 1850 | Not applicable: term loan | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 1850 | Not applicable | SOFR (three-month) + 3.00% after the May 2026 refinancing; variable rate 6.76% at 2026-09-30 | floating | SOFR | 300 | 0 | May 2033 | 1.00% of principal each year from May 2027; dollar amount not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 32 |
| 2023 Term Loan Facility | Term loan | Not supplied: instrument carrying value not printed | 1078 | 1078 | Not applicable: term loan | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 1078 | Not applicable | SOFR + 2.25% (margin elected at December 31, 2025); variable rate 6.09% at 2026-09-30 | floating | SOFR | 225 | 0 | June 2029 | 1.00% of principal issued each year; dollar amount not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 220–222 |
| 7.25% senior secured notes due 2028 | Notes | Not supplied: instrument carrying value not printed | 750 | 750 | Not applicable: notes | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 750 | Not applicable | 7.25% | fixed | Not applicable: fixed | Not applicable: fixed | Not applicable: fixed | February 2028 | 0 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| 5.75% senior secured notes due 2029 | Notes | Not supplied: instrument carrying value not printed | 2750 | 2750 | Not applicable: notes | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 2750 | Not applicable | 5.75% | fixed | Not applicable: fixed | Not applicable: fixed | Not applicable: fixed | April 2029 | Installments began July 2026; dollar amount not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 218 |
| 2021 AAdvantage Term Loan Facility | Term loan | Not supplied: instrument carrying value not printed | 2247 | 2247 | Not applicable: term loan | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 2247 | Not applicable | SOFR (three-month) + 2.25%; variable rate 5.98% at 2026-09-30 | floating | SOFR | 225 | 0 | April 2028 | Approximately 6 per quarter, 0.25% of principal at March 24, 2025 | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 226 |
| 2025 AAdvantage Term Loan Facility | Term loan | Not supplied: instrument carrying value not printed | 988 | 988 | Not applicable: term loan | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 988 | Not applicable | SOFR (three-month) + 2.75% after the February 2026 amendment; variable rate 6.48% at 2026-09-30 | floating | SOFR | 275 | 0 | May 2032 | 0.25% of original principal each quarter; dollar amount not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 33; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 226 |
| Enhanced equipment trust certificates | Pass-through certificates | Not supplied: instrument carrying value not printed | 9332 | 9332 | Not applicable: certificates | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 9332 | Not applicable | Fixed 2.88% to 7.15%, averaging 4.54% | fixed | Not applicable: fixed | Not applicable: fixed | Not applicable: fixed | 2027 to 2039 | Not supplied: aggregate schedule by certificate not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66 |
| Equipment loans and other notes payable | Equipment debt | Not supplied: instrument carrying value not printed | 4926 | 4926 | Not applicable: term debt | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 4926 | Not applicable | Fixed and variable 2.55% to 6.76%, averaging 5.65% | fixed and floating | Not supplied: reference rate not stated | Not supplied: not stated | Not supplied: not stated | 2027 to 2038 | Not supplied: aggregate schedule not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Special facility revenue bonds | Revenue bonds | Not supplied: instrument carrying value not printed | 694 | 694 | Not applicable: bonds | Secured (listed under secured debt) | Not supplied: legal rank not stated | USD | 694 | Not applicable | Fixed 3.00% to 5.38% | fixed | Not applicable: fixed | Not applicable: fixed | Not applicable: fixed | 2031 to 2036 | Not supplied: aggregate schedule not printed | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Finance leases carried within the debt lines | Lease obligations | 645 | Not supplied: principal split from future interest not printed | Not applicable: lease | Not applicable: lease | Not supplied: lease terms not read | Not supplied: legal rank not stated | USD | 645 | Not applicable | Not supplied: contractual rates not stated | not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: multiple lease expiries | Not supplied: not stated | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |
| Financing cost adjustment | Aggregate contra-debt, not an instrument | -344 | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | USD | -344 | Not applicable | Not applicable: contra-debt | not stated | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31 |

The finance lease row carries its recognised amount in the Carrying Value column only; its Reporting Currency Amount is the same figure, so the amounts plus the adjustment row reconcile to total debt.
Basis: calculation C07; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-09-30 | USD 3,395m | USD 1,977m | USD 2,456m | USD 2,916m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Components are derived EBITDA, not issuer-stated; stubs are nine-month periods. |
| Cash Interest Paid | LTM to 2026-09-30 | USD 1,551m | USD 1,044m | USD 1,179m | USD 1,416m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 | Interest paid, net, as the supplemental line prints it. |
| Total operating revenues | LTM to 2026-09-30 | USD 54,626m | USD 46,979m | USD 40,628m | USD 60,977m | Calculated | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Used for the last-twelve-month EBITDA margin only. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Carrying debt / reported EBITDA | 25736 | Balance sheet; C01 | 4573 | Annual statement and calculation C02 | FY2024 / 2024-12-31 | USD | US$m | 5.63 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated; ratios rounded to two decimals. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 24941 | C04 | 4573 | Annual statement and calculation C02 | FY2024 / 2024-12-31 | USD | US$m | 5.45 | Calculated | Tier 1 audited | Cash is the balance-sheet cash line only; short-term investments not deducted. |
| EBITDA / cash interest | Reported EBITDA / net cash interest paid | 4573 | Annual statements; C02 | 1806 | Supplemental cash flow, 10-K page 254 | FY2024 / 2024-12-31 | USD | US$m | 2.53 | Calculated | Tier 1 audited | Denominator is net interest paid, not accrued expense. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 25259 | Balance sheet; C01 | 3395 | Annual statement and calculation C02 | FY2025 / 2025-12-31 | USD | US$m | 7.44 | Calculated | Tier 1 audited | EBITDA derived, not issuer-stated; ratios rounded to two decimals. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 24323 | C04 | 3395 | Annual statement and calculation C02 | FY2025 / 2025-12-31 | USD | US$m | 7.16 | Calculated | Tier 1 audited | Cash is the balance-sheet cash line only; short-term investments not deducted. |
| EBITDA / cash interest | Reported EBITDA / net cash interest paid | 3395 | Annual statements; C02 | 1551 | Supplemental cash flow, 10-K page 254 | FY2025 / 2025-12-31 | USD | US$m | 2.19 | Calculated | Tier 1 audited | Denominator is net interest paid, not accrued expense. |
| Total debt / EBITDA | Carrying debt / reported EBITDA | 25876 | Balance sheet; C01 | 2916 | Calculation C03 (last twelve months) | 2026-09-30 | USD | US$m | 8.87 | Calculated | Tier 1 and 2b | EBITDA derived, not issuer-stated; ratios rounded to two decimals. Last-twelve-month EBITDA. |
| Net debt / EBITDA | Carrying debt less cash / reported EBITDA | 24782 | C04 | 2916 | Calculation C03 (last twelve months) | 2026-09-30 | USD | US$m | 8.50 | Calculated | Tier 1 and 2b | Cash is the balance-sheet cash line only; short-term investments not deducted. |
| EBITDA / cash interest | Reported EBITDA / net cash interest paid | 2916 | Calculation C03 | 1416 | Calculation C03 | 2026-09-30 | USD | US$m | 2.06 | Calculated | Tier 1 and 2b | Denominator is net interest paid, not accrued expense. |
| Net debt net of short-term investments / EBITDA | (Carrying debt - cash - short-term investments) / reported EBITDA | 18764 | C06 | 4573 | Calculation C02 or C03 | FY2024 / 2024-12-31 | USD | US$m | 4.10 | Calculated | Tier 1 and 2b | Alternative reading; short-term investments are not shown to be unrestricted. |
| Net debt net of short-term investments / EBITDA | (Carrying debt - cash - short-term investments) / reported EBITDA | 19443 | C06 | 3395 | Calculation C02 or C03 | FY2025 / 2025-12-31 | USD | US$m | 5.73 | Calculated | Tier 1 and 2b | Alternative reading; short-term investments are not shown to be unrestricted. |
| Net debt net of short-term investments / EBITDA | (Carrying debt - cash - short-term investments) / reported EBITDA | 17623 | C06 | 2916 | Calculation C02 or C03 | 2026-09-30 | USD | US$m | 6.04 | Calculated | Tier 1 and 2b | Alternative reading; short-term investments are not shown to be unrestricted. |
| Total debt including fuel financing / EBITDA | (Carrying debt + fuel financing) / reported EBITDA | 25810 | C06 | 4573 | Calculation C02 or C03 | FY2024 / 2024-12-31 | USD | US$m | 5.64 | Calculated | Tier 1 and 2b | Alternative reading; fuel financing is a separate secured bank obligation outside the debt lines. |
| Total debt including fuel financing / EBITDA | (Carrying debt + fuel financing) / reported EBITDA | 26173 | C06 | 3395 | Calculation C02 or C03 | FY2025 / 2025-12-31 | USD | US$m | 7.71 | Calculated | Tier 1 and 2b | Alternative reading; fuel financing is a separate secured bank obligation outside the debt lines. |
| Total debt including fuel financing / EBITDA | (Carrying debt + fuel financing) / reported EBITDA | 26809 | C06 | 2916 | Calculation C02 or C03 | 2026-09-30 | USD | US$m | 9.19 | Calculated | Tier 1 and 2b | Alternative reading; fuel financing is a separate secured bank obligation outside the debt lines. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2026 | 9M 2025 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Calculated margin | Operating income margin (%) | 4.90 | 2.77 | 1.14 | 2.56 | Lower | Calculated from reported lines; calculation C15 for the nine-month pair. |
| Calculated margin | EBITDA margin (%) | 8.44 | 6.21 | 4.21 | 6.05 | Lower | Reported EBITDA over revenue; last-twelve-month margin to 2026-09-30 is 4.78%; calculation C15. |
| Calculated cash flow | Free cash flow (operating cash flow less capital expenditures), USD millions | 785 | -1786 | 1780 | 126 | Higher in 2026 | After lending to related parties; calculation C10. |
| Operating | Capacity, load factor, yield and other airline operating statistics | Not supplied: reported for the parent including regional carriers only | Not supplied: reported for the parent including regional carriers only | Not supplied: reported for the parent including regional carriers only | Not supplied: reported for the parent including regional carriers only | Not established | No issuer-level operating series is printed; none is invented. |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Affected conclusions | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| Debt principal versus carrying value | Every balance-sheet debt line at carrying value | Contractual principal in the debt note and maturity ladder, before discounts and finance leases | 2026-09-30 principal 25575 versus carrying 25876; FY2025 24848 versus 25259; FY2024 25372 versus 25736 | FY2024; FY2025; 2026-09-30 | 2026-09-30 difference 301 USD millions: finance leases 645 less discount, premium and issuance costs 344 | Leverage and net debt | Use carrying value for ratios and principal for the maturity ladder; calculation C07. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 218 |
| EBITDA | Issuer-reported unadjusted EBITDA | The issuer states none; the parent's presentations use adjusted EBITDAR and net special items | Operating income plus depreciation and amortization on the income statement is used; the cash flow statement shows larger depreciation and amortization (FY2025 2177 against 1884) and the statements do not explain the difference | FY2025; FY2024 | Reported EBITDA FY2025 3395; using the cash-flow figure would add 293 USD millions (calculation C19) | Leverage and interest cover | Keep the income statement line; no house adjustment; EBITDAR and add-backs are not constructed. | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 7 |
| Net debt cash | Total debt less cash and equivalents | The issuer's liquidity table counts cash plus short-term investments plus undrawn facilities; the parent's net debt also deducts short-term investments | 2026-09-30 cash 1094 against short-term investments 7159 | FY2024; FY2025; 2026-09-30 | Net debt net of short-term investments is lower: calculation C06 | Net leverage | Fixed row deducts the cash line only; the alternative is a labelled register row. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 6 |
| Fuel financing | Every balance-sheet debt line the issuer carries | Presented as its own current liability line, not in debt | Fuel financing 933 at 2026-09-30, 914 at 2025-12-31, 74 at 2024-12-31; a bank facility at one-month SOFR plus 3.75%, second-priority security over brand intellectual property | FY2024; FY2025; 2026-09-30 | Adds 0.32x to total debt over last-twelve-month EBITDA at 2026-09-30 | Leverage and claims on assets | Excluded from Total Debt as presented by the issuer; shown in a labelled alternative row. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 151 |
| Perimeter of debt | The issuer's own statements | Combined filing also prints the parent's statements | Parent debt 29635 against issuer 25876 at 2026-09-30 | 2026-09-30 | Difference 3759 USD millions sits outside the issuer | All issuer ratios | Use issuer statements throughout; parent figures are context; calculation C16. | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Interest | Coverage uses cash interest paid, net | Interest expense, net on the income statement | FY2025 expense 1780 against paid 1551; 9M 2026 expense 1231 against paid 1044 | FY2025; 9M 2026 | Different timing and non-cash items | Interest cover | Use interest paid; no capitalised interest or cash taxes are printed. | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Operating cash flow | Operating cash flow after related-party lending | The issuer prints lending to related parties inside operating activities | FY2025 line: increase in receivables from related parties 1701 outflow | FY2025; FY2024 | Lowers issuer operating cash flow; the offsetting position sits with affiliates | Free cash flow | Preserve as printed; do not add back. | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5.63 | 5.45 | x | Carrying debt including finance leases over reported EBITDA derived from operating income plus depreciation and amortization; cash is the balance-sheet cash line; annual statements. |
| FY2025 / 2025-12-31 | 7.44 | 7.16 | x | Same definitions; annual statements. |
| 2026-09-30 | 8.87 | 8.50 | x | Same definitions on last-twelve-month EBITDA to 2026-09-30; the interim balance sheet is unaudited. |

The September 2026 reading is a last-twelve-month ratio and deducts the cash line only, so it is not a year-end figure and is higher than a reading net of short-term investments.
Basis: calculation C03; calculation C05; calculation C06

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 2.53 | x | Reported EBITDA over interest paid, net; annual statements and supplemental cash flow. |
| FY2025 / 2025-12-31 | 2.19 | x | Same identity and annual duration. |
| 2026-09-30 | 2.06 | x | Last-twelve-month EBITDA over last-twelve-month interest paid to 2026-09-30. |

Cover is on interest paid, net, which is not a fixed-charge measure and excludes aircraft rent.
Basis: calculation C03; calculation C05

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 795 | 3289 | US$m | Issuer cash line and undrawn revolving and other facilities at 2024-12-31; short-term investments of 6177 are not in the cash column. |
| FY2025 / 2025-12-31 | 936 | 3397 | US$m | Same basis at 2025-12-31; short-term investments of 4880 are not in the cash column. |
| 2026-09-30 | 1094 | 3510 | US$m | Same basis at 2026-09-30; short-term investments of 7159 are not in the cash column; undrawn includes a cargo receivables facility due to expire in December 2026. |

Cash alone understates accessible liquidity because the issuer holds short-term investments many times larger than its cash line.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26

### Financials and credit metrics

| Metric | FY2024 | FY2025 | Latest | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Total debt | 25736 | 25259 | 25876 | USD millions | Carrying value; latest is the position at 2026-09-30; calculation C01 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Net debt | 24941 | 24323 | 24782 | USD millions | Total debt less the cash line; calculation C04 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |
| Reported EBITDA | 4573 | 3395 | 2916 | USD millions | Latest is last twelve months to 2026-09-30; calculations C02 and C03 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 |
| Cash interest paid | 1806 | 1551 | 1416 | USD millions | Latest is last twelve months to 2026-09-30; calculation C03 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 |
| Total debt / EBITDA | 5.63 | 7.44 | 8.87 | times | Calculation C05 | Calculation C05 |
| Net debt / EBITDA | 5.45 | 7.16 | 8.50 | times | Calculation C05 | Calculation C05 |
| EBITDA / cash interest | 2.53 | 2.19 | 2.06 | times | Calculation C05 | Calculation C05 |
| Net debt net of short-term investments / EBITDA | 4.10 | 5.73 | 6.04 | times | Labelled alternative; calculation C06 | Calculation C06 |
| Total available liquidity, issuer | 10261 | 9213 | 11763 | USD millions | Cash plus short-term investments plus undrawn facilities as the issuer prints it; calculation C09 | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 121; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60 |
| Free cash flow, nine months for the latest column | 785 | -1786 | 1780 | USD millions | Operating cash flow less capital expenditures; the latest column is the nine months to 2026-09-30 (nine months 2025: 126); calculation C10 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 |
| Customer-funded float, latest against December 2025 | Not supplied: FY2024 total not computed | 17722 | 20928 | USD millions | Air traffic liability plus both loyalty program liabilities; calculation C13 | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| Q4 2026 | 631 | US$m | Remainder of 2026 from the contractual obligations table; principal only. Finance lease payments excluded. |
| FY2027 | 3550 | US$m | Principal only; American's own debt. Finance lease payments excluded. |
| FY2028 | 7861 | US$m | Principal only; includes the 2013 term loan and the 7.25% notes due in February 2028 within the year. Finance lease payments excluded. |
| FY2029 | 3884 | US$m | Principal only. Finance lease payments excluded. |
| FY2030 | 972 | US$m | Principal only. Finance lease payments excluded. |
| Thereafter | 8677 | US$m | 2031 and later, including the 2033 term loan and the longest equipment and certificate maturities; not a single-year bullet. Finance lease payments excluded. |

The ladder is contractual principal at September 30, 2026 for the issuer only and excludes about USD 3,746 million of parent-level principal.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; calculation C08

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 25736 | 795 | 24941 | US$m | Carrying value including finance leases of 664; contractual principal 25372 less discount, premium and issuance costs 300; fuel financing of 74 is outside gross debt. |
| FY2025 / 2025-12-31 | 25259 | 936 | 24323 | US$m | Carrying value including finance leases of 724; contractual principal 24848 less discount, premium and issuance costs 313; fuel financing of 914 is outside gross debt. |
| 2026-09-30 | 25876 | 1094 | 24782 | US$m | Carrying value including finance leases of 645; contractual principal 25575 less discount, premium and issuance costs 344; fuel financing of 933 is outside gross debt; reported, before any later event. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 25575 | 301 | 25876 | US$m | Ladder total 25575; add finance leases carried in the debt lines 645; subtract unamortised discount, premium and issuance costs 344; net 301. Finance leases enter at their recognised amount, not undiscounted payments. Calculations C07 and C08. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | Read the third-quarter report, the annual report and the third-quarter presentation. October 2026 purchase-option exercises for five aircraft and a commitment for two more are stated without a price or financing, so no net debt effect can be calculated; the parent's litigation filing in October 2026 has no stated amount. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 54204 | 4573 | US$m | Annual duration; the column holds reported EBITDA derived as operating income plus depreciation and amortization, not an issuer-adjusted or house-adjusted measure; the issuer states no adjusted EBITDA. |
| FY2025 | 54626 | 3395 | US$m | Same annual duration and identity; reported, unadjusted. |

The EBITDA column is the unadjusted measure used for the leverage and cover ratios, because the issuer states no adjusted figure.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; calculation C02

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no filing page states the legal rank among the secured instruments | Not supplied: legal rank not stated | Not supplied: rank order not established | Not supplied: no ranked amounts | Not supplied: no ranked amounts | US$m | Every instrument in the debt note is listed as secured on different collateral pools, and the filings state no intercreditor rank, so a ranked stack would be invented; the instruments are in the debt instruments table. |

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | Not supplied: bridge cannot be stated | US$m | Opening measure is reported EBITDA derived from operating income plus depreciation and amortization; no adjusted measure or add-back list is stated by the issuer. |
| EBITDA (Adjusted) | Not supplied: the issuer states no adjusted EBITDA | US$m | Closing adjusted measure is not stated for the issuer; the parent's adjusted EBITDAR is a different measure for a different perimeter. |

No qualification.

### Financial interpretation
Leverage has risen because earnings fell, not because borrowing grew. Reported EBITDA moved from USD 4,573 million in FY2024 to USD 3,395 million in FY2025 and USD 2,916 million over the last twelve months, while total debt moved from USD 25,736 million to USD 25,876 million. Fuel explains most of the recent step: aircraft fuel and related taxes rose by USD 4,427 million, or 55.22%, in the first nine months of 2026, and operating income was USD 535 million against USD 1,042 million a year earlier. The nine-month EBITDA margin fell to 4.21% from 6.05%, so the fuel price path is the main swing factor for leverage: lower prices would help and higher prices would extend the deterioration.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 58; calculation C02; calculation C03; calculation C11; calculation C15

Interest cover has slipped more gently than leverage, from 2.53x in FY2024 to 2.19x in FY2025 and 2.06x over the last twelve months, because interest paid fell from USD 1,806 million in FY2024 to USD 1,551 million in FY2025 and USD 1,416 million over the last twelve months as the issuer repaid higher-cost debt. That offset is finite: cover on reported EBITDA is thin for a business whose fixed charges also include aircraft rent and large purchase commitments, and interest paid is not a fixed-charge measure.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 59; calculation C05

Liquidity is the main support for creditors. At September 30, 2026 American reported USD 11,763 million of available liquidity, being cash of USD 1,094 million, short-term investments of USD 7,159 million and undrawn facilities of USD 3,510 million, against USD 4,181 million of principal due before the end of 2027, a cover of 2.81x. The wall is heavier in 2028 at USD 7,861 million, so the test is whether liquidity is preserved or refinancing is available when that year approaches. The filing summarises minimum-liquidity and collateral-value covenants but prints no headroom, and undrawn facilities are committed lines rather than cash, so covenant capacity is not established.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–61; calculation C08; calculation C09

Cash generation is flattered by customer-funded balances. Operating cash flow was USD 4,440 million in the first nine months of 2026 against USD 2,229 million a year earlier, and free cash flow after capital expenditures was USD 1,780 million against USD 126 million. Yet customer-funded balances, being the air traffic liability and both loyalty program liabilities, rose by USD 3,206 million to USD 20,928 million since December 31, 2025. These are obligations to provide travel or miles, they follow the season and they are not interest-bearing debt, so the improvement can reverse if bookings slow or redemptions rise; FY2025 free cash flow was USD -1,786 million after capital expenditures of USD 3,716 million.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27; calculation C10; calculation C13

The issuer also lends to its affiliates. Receivables from related parties were USD 10,430 million at September 30, 2026, USD 534 million higher than at year-end, and the 2025 cash flow shows a USD 1,701 million outflow for this line inside operating activities. Repayment terms are not established from the statements, so these balances support group liquidity but their availability to the issuer's own creditors is not shown. Parent debt of USD 29,635 million exceeds the issuer's USD 25,876 million by USD 3,759 million, so the parent's net debt target, which also counts leases and pensions, is on a wider definition than any ratio here.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 6; calculation C14; calculation C16

Fuel financing of USD 933 million is, as the annual report describes it, a bank facility at one-month SOFR plus 3.75%, secured on a second-priority basis by brand intellectual property, and the issuer shows it on its own line outside debt. Counting it lifts total debt to 9.19x last-twelve-month EBITDA, so the fixed ratios understate claims on the issuer's assets and the labelled alternative should be read beside them.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 151; calculation C06

No event after September 30, 2026 with a stated effect on net debt was found. In October 2026 American exercised purchase options for five Airbus A320 Family aircraft and committed to purchase two Boeing 777-200ER aircraft in the fourth quarter; no price or financing is stated for them individually, so they stay out of period figures.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 65

The strongest contrary evidence is the size of liquidity against the principal due before the end of 2027: all of the issuer's debt principal is listed as secured, much of it amortises, maturities run out to 2039, and short-term investments have grown during 2026. That would win if fuel prices fall and quarterly EBITDA recovers toward the FY2025 level, so the observable tests are quarterly operating income, fuel cost, the customer-funded balances and the liquidity figure at the next filing. A downside sequence begins with another fuel price rise or a booking slowdown, first breaks operating cash conversion because customer-funded balances unwind, and then draws on short-term investments to service the 2027 and 2028 principal, which would show as lower liquidity before it shows as a covenant event.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 6

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Issuer-level leverage, cover and liquidity for the credit snapshot | Ready with Limitations | EBITDA derived because the issuer states none; cash is the balance-sheet cash line only; interim ratios use last-twelve-month figures | Read the fixed ratios with the labelled alternatives; do not treat them as covenant measures. |
| Debt maturity and refinancing view | Ready with Limitations | Principal ladder is complete for the issuer; instrument carrying values, individual certificate schedules and legal rank are not printed | Obtain the executed agreements before any secured-capacity or recovery conclusion. |
| Cash-flow quality and free cash flow | Ready with Limitations | Nine-month operating components, cash taxes and capitalised interest are not printed; related-party lending sits in operating cash flow | Request the component cash flow and affiliate balance terms. |
| Legal leverage, covenant capacity and recovery priority | Not Ready | No executed debt documents, ranking or covenant headroom | Do not infer capacity from the filing summaries. |

### Limitations
EBITDA is derived as operating income plus depreciation and amortization because the issuer states none, and it keeps special items inside operating income; the interim ratios use last-twelve-month figures built from reported full-year and nine-month amounts. Net debt deducts the cash line only, so the fixed net leverage is higher than readings that also deduct short-term investments, which are not shown to be unrestricted.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; calculation C03; calculation C06

The statements are the issuer's own, taken from a combined filing, and the earnings presentations describe the parent only. The nine-month cash flow prints operating activities as one total, no quarterly cash flow is given, and the legal rank, collateral and covenant headroom of each instrument are not stated, so none is inferred. No later source than the third-quarter report was supplied, so events between October 22, 2026 and the cutoff are not established.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 25–27; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; Source readiness (CP-0)

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 16 |
| Calculated | 10 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 40 |
| Fields total | 46 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 5 |

## Calculations

All amounts are USD millions for American Airlines, Inc. Ratios are rounded half up to two decimals and are calculated, not source-reported.

| ID | Purpose and period | Operation and complete operands | Result | Unit | Source | Limitation |
|---|---|---|---|---|---|---|
| C01 | Total debt at carrying value, FY2024; FY2025; 2026-09-30 | 4326 + 21410; 3750 + 21509; 3689 + 22187 | 25736; 25259; 25876 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Current maturities plus long-term debt, both lines including finance leases; fuel financing and operating leases excluded. |
| C02 | Reported EBITDA (operating income plus depreciation and amortization), all columns | FY2025: 1511 + 1884; FY2024: 2654 + 1919; Q3 2026: 114 + 491; Q3 2025: 167 + 473; 9M 2026: 535 + 1442; 9M 2025: 1042 + 1414 | FY2025 3395; FY2024 4573; Q3 2026 605; Q3 2025 640; 9M 2026 1977; 9M 2025 2456 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | The issuer states no EBITDA; special items stay inside operating income, so this is unadjusted. |
| C03 | Last-twelve-month figures to 2026-09-30 (full year 2025 plus nine months 2026 less nine months 2025) | EBITDA: 3395 + 1977 - 2456; cash interest: 1551 + 1044 - 1179; revenue: 54626 + 46979 - 40628 | EBITDA 2916; cash interest 1416; revenue 60977 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 254 | Constructed from reported full-year and nine-month figures; no quarter was estimated. |
| C04 | Net debt (total debt less cash), FY2024; FY2025; 2026-09-30 | 25736 - 795; 25259 - 936; 25876 - 1094 | 24941; 24323; 24782 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Cash is the balance-sheet cash line only; short-term investments and restricted balances are not deducted. |
| C05 | Leverage and cover on the fixed definitions, FY2024; FY2025; 2026-09-30 | Total debt / EBITDA: 25736 / 4573; 25259 / 3395; 25876 / 2916. Net debt / EBITDA: 24941 / 4573; 24323 / 3395; 24782 / 2916. EBITDA / cash interest: 4573 / 1806; 3395 / 1551; 2916 / 1416 | Total debt 5.63; 7.44; 8.87. Net debt 5.45; 7.16; 8.50. Cover 2.53; 2.19; 2.06 | times | Calculations C01 to C04 | Rounded half up to two decimals; the 2026-09-30 ratios use last-twelve-month EBITDA and cash interest. |
| C06 | Alternative leverage readings, FY2024; FY2025; 2026-09-30 | Net of short-term investments: (25736 - 795 - 6177) / 4573; (25259 - 936 - 4880) / 3395; (25876 - 1094 - 7159) / 2916. Including fuel financing: (25736 + 74) / 4573; (25259 + 914) / 3395; (25876 + 933) / 2916 | Net of short-term investments 4.10; 5.73; 6.04. Including fuel financing 5.64; 7.71; 9.19 | times | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Labelled alternatives, not the fixed definitions; short-term investments are not shown to be unrestricted. |
| C07 | Principal to carrying value at 2026-09-30 | Principal: 960 + 1850 + 1078 + 750 + 2750 + 2247 + 988 + 9332 + 4926 + 694 = 25575. Finance leases carried in the debt lines: (3689 - 3580) + (22187 - 21651) = 109 + 536 = 645. Reconciling items: 645 - 344 = 301. Carrying: 25575 + 301 | Principal 25575; reconciling items 301; carrying 25876 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 31–31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Finance lease amount is derived as the balance-sheet debt lines less the debt note; the discount, premium and issuance cost total is as printed. |
| C08 | Debt maturity ladder at 2026-09-30 | 631 + 3550 + 7861 + 3884 + 972 + 8677 | 25575 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66 | American's contractual principal only; parent-level principal is excluded; finance lease payments (including interest) are not part of the ladder. |
| C09 | Principal due before the end of 2027 and liquidity cover | 631 + 3550 = 4181; total available liquidity 1094 + 7159 + 3510 = 11763; 11763 / 4181 | 4181; 11763; 2.81 | USD millions; times | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 59–60 | Issuer-level liquidity as printed; undrawn facilities are committed lines, not cash; scheduled interest and aircraft commitments are not deducted. |
| C10 | Free cash flow (operating cash flow less capital expenditures), FY2025; FY2024; 9M 2026; 9M 2025 | 1930 - 3716; 3409 - 2624; 4440 - 2660; 2229 - 2103 | -1786; 785; 1780; 126 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, pages 26–27 | After lending to related parties and before sale-leaseback proceeds; nine-month operating components are not printed. |
| C11 | Nine-month 2026 change against nine-month 2025 | Revenue: 46979 / 40628 - 1; fuel: 12444 - 8017; fuel growth: 4427 / 8017; operating income: 535 - 1042 | Revenue growth 15.63%; fuel increase 4427; fuel growth 55.22%; operating income change -507 | USD millions; % | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 25 | Unaudited; fuel is one cost line and does not explain the whole fall in operating income. |
| C12 | Debt change since December 31, 2025 | 25876 - 25259 | 617 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Carrying values including finance leases. |
| C13 | Customer-funded float (air traffic liability plus both loyalty program liabilities), 2026-09-30 and 2025-12-31 | 9414 + 4446 + 7068; 7158 + 3725 + 6839; 20928 - 17722 | 20928; 17722; 3206 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Non-debt, non-interest-bearing liabilities that fund operations until travel or redemption; seasonal. |
| C14 | Receivables from related parties, change since December 31, 2025 | 10430 - 9896 | 534 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Balance-sheet movement; the cash-flow line for 2025 is a USD 1,701 million outflow. |
| C15 | Margins on reported EBITDA and operating income | EBITDA / revenue: 4573 / 54204; 3395 / 54626; 2916 / 60977. Operating income / revenue: 535 / 46979; 1042 / 40628 | EBITDA margin 8.44%; 6.21%; 4.78%. Operating margin 9M 2026 1.14%; 9M 2025 2.56% | % | Calculations C02, C03 | Rounded half up to two decimals. |
| C16 | Parent-level against issuer-level debt at 2026-09-30 | Parent: 3692 + 25943 = 29635; issuer 25876; difference 29635 - 25876. Parent and other subsidiaries contractual principal per the obligations table: 3746 | 29635; 25876; 3759 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 66 | Parent balance sheet as printed; the difference sits outside the issuer. |
| C17 | Statement identities, 2026-09-30 column | Liabilities 27538 + 37385 = 64923; 64923 + 8895 = 73818. Cash: 4440 - 4757 + 477 = 160; 1038 + 160 = 1198 | 73818; 160; 1198 | USD millions | 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 27 | Identities reconcile for every column; see the statement tables. |
| C18 | Fixed-row statement totals, all balance-sheet columns | Total liabilities: 24037 + 37182; 22902 + 37619; 27538 + 37385 | 61219; 60521; 64923 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 201–202; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26 | Current plus noncurrent liabilities as printed. |
| C19 | Depreciation and amortization, cash flow statement against income statement, FY2025 | 2177 - 1884 | 293 | USD millions | 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202 | The statements do not explain the difference; the income statement line is used for EBITDA. |

## Gaps

- Medium: No filing page states the legal rank among the secured instruments, their guarantor or obligor scope beyond the debt note, or covenant headroom, so the ranked debt stack is left empty and secured capacity, recovery and covenant conclusions are not established. Executed agreements and a collateral map would close this.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61
- Medium: The issuer states no EBITDA or adjusted EBITDA, so reported EBITDA is derived from operating income and depreciation and amortization, no EBITDAR or add-back bridge can be built for the issuer, and the EBITDA bridge is not stated. The parent's adjusted measures belong to a different perimeter. An issuer-level reconciliation would close this.
Basis: 10-K_2025-12-31_aal-20251231.htm.jsonl, page 201; EX-99.2_2026-10-22_earningspresentation.htm.jsonl, page 7
- Medium: Fuel financing of USD 933 million is a secured bank obligation shown outside debt. It is not in total debt, and the amount, repayment schedule and second-priority collateral terms beyond the annual report description are not established. The labelled alternative leverage row shows its effect.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 151
- Low: The nine-month cash flow prints only the operating total, so the nine-month working capital, deferred tax and other operating components, cash taxes paid and capitalised interest are not established for the issuer. Parent commentary attributes higher operating cash flow to the air traffic and loyalty liabilities, but the issuer's own split is not printed.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 61
- Low: Individual instrument carrying values, the dollar amortisation of several term loans, certificate-level schedules and the finance lease terms are not printed; the aggregate reconciliation to total debt is supported, but a complete instrument interest and principal schedule is not.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 31; 10-K_2025-12-31_aal-20251231.htm.jsonl, pages 220–227
- Low: Repayment terms and security of the receivables from related parties, and the issuer's quarterly cash flow, are not stated, so the amount of cash available to the issuer's own creditors beyond its balance sheet is not established.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 26; 10-K_2025-12-31_aal-20251231.htm.jsonl, page 202
- Low: Operating statistics such as capacity, load factor and yield are printed for the parent including regional carriers, not for the issuer, so no issuer-level operating series is shown, and nothing dated after October 22, 2026 was supplied, so events to the cutoff are not established.
Basis: 10-Q_2026-09-30_aal-20260930.htm.jsonl, page 48; Source readiness (CP-0)

## Next module
The orchestrator selects the next module.
