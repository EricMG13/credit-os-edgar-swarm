## Request

Build the financial foundation for WEX Inc. (issuer id wex-1309108) as of 2026-11-18 under the credit snapshot pathway. Scope is the consolidated group on annual statements for FY2023 to FY2025 and interim statements to 2026-09-30, with carrying-value debt, liquidity, covenants and the split between corporate debt and bank funding. No information dated after 2026-11-18 is used.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_wex-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 (filing date, stated in the 2025 annual report) | b860a20cd34f6627a19863f28a4ff42d1235d8ca32fd9ddb55aec6425749724a | FY2023 balance sheet and FY2023 comparatives; term loan amortization wording; Corporate Cash at 2024-12-31. |
| 10-K_2025-12-31_wex-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-13 (filing date, stated in the quarterly report for September 30, 2026) | a278043c8942a29b84e71294e4c05c4d6559b5d3a84e88f4b2288502a00c2f51 | Audited FY2023 to FY2025 statements, debt note, five-year principal table, covenants, segments and non-GAAP measures. |
| 10-Q_2026-03-31_wex-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 (signature date; filing date not stated) | 6b1be1882f109d72a594b96e932d0ffb073b3406ee29425a192e44fa7a97d654 | Quarterly revenue continuity check only; no figure of the statement tables is taken from it. |
| 10-Q_2026-06-30_wex-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 (signature date; filing date not stated) | 1cd3eea51e9ac5968b8634d4d76a19cc10ec19e794b1a01d33ec533abfa31a22 | Quarterly revenue continuity check only; no figure of the statement tables is taken from it. |
| 10-Q_2026-09-30_wex-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 (signature date; filing date not stated) | a52e79f8055bb1402f6b8d0ab287a60fbc5d719c061ba9e49ba5827290340d0b | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt note, covenants, liquidity, bank capital and segment results. |

| Supplied analysis | Module | sha256 | Use |
|---|---|---|---|
| Source readiness | CP-0 | e6a8fee3667e6823350c7959828bbc5bf54acac8c6af435d2711746a6432d534 | Accepted source register, reporting perimeter, period coverage and the gaps it logged; no financial figure is imported from it. |

No external sources were used.

## Findings

### Bottom line

WEX's consolidated debt is 4.85x last-twelve-months EBITDA at 2026-09-30, but USD 1,808.8 million of the USD 5,321.1 million funds receivables at WEX Bank and its securitization vehicles, so leverage on the corporate debt alone is nearer 3.20x. Net of cash the consolidated figure is 4.31x, and cover on cash interest paid fell from 3.72x in FY2023 to 2.98x in FY2025.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 21–23; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 141–142; calculation C1; calculation C4; calculation C5

WEX states no EBITDA, so every ratio uses operating income plus depreciation and amortization calculated here, and the covenant leverage of 2.7x against a 4.75x maximum rests on definitions the filings do not print. Covenant headroom and priority cannot be tested without the executed debt documents.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55; calculation C3; Source readiness (CP-0)

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_wex-20241231.htm.jsonl | Annual Form 10-K | FY2024, FY2023 and FY2022; used for the 2023-12-31 balance sheet | USD | millions | WEX Inc. consolidated, including WEX Bank and consolidated VIEs | US GAAP | Tier 1 audited statements | FY2023 balance sheet column and Corporate Cash at 2024-12-31 | Superseded for FY2024 by the later annual report, which agrees on the totals compared. |
| 10-K_2025-12-31_wex-20251231.htm.jsonl | Annual Form 10-K | FY2025, FY2024 and FY2023 | USD | millions | WEX Inc. consolidated, including WEX Bank and consolidated VIEs | US GAAP | Tier 1 audited statements; non-GAAP schedules are management measures | Annual statements, debt note, five-year principal table, supplemental cash paid | No EBITDA is stated; Part III is incorporated by reference. |
| 10-Q_2026-09-30_wex-20260930.htm.jsonl | Quarterly Form 10-Q | Three and nine months to 2026-09-30 with 2025 comparatives | USD | millions | WEX Inc. consolidated, including WEX Bank and consolidated VIEs | US GAAP | Tier 2b unaudited interim | Nine-month columns, 2026-09-30 balance sheet and debt, covenants and liquidity | Unaudited; no supplemental interest or tax paid; no maturity table; some totals differ from their parts by 0.1 through rounding. |
| 10-Q_2026-06-30_wex-20260630.htm.jsonl | Quarterly Form 10-Q | Three and six months to 2026-06-30 | USD | millions | WEX Inc. consolidated | US GAAP | Tier 2b unaudited interim | Revenue continuity check | Not otherwise used. |
| 10-Q_2026-03-31_wex-20260331.htm.jsonl | Quarterly Form 10-Q | Three months to 2026-03-31 | USD | millions | WEX Inc. consolidated | US GAAP | Tier 2b unaudited interim | Revenue continuity check | Not otherwise used. |

Evidence tiers follow the method: Tier 1 is audited statements and Tier 2b is unaudited statements without auditor review. The two annual reports carry auditors' opinions that the financial statements present fairly, in all material respects, and a separate auditors' report on internal control over financial reporting.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 136–137; 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 144–145; Source readiness (CP-0)

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| WEX Inc. | Registrant and issuer of the Senior Notes; borrower under the Credit Agreement | December 31 | USD | millions | Consolidated: parent, WEX Bank, WEX Europe Services and consolidated securitization vehicles | US GAAP | FY2023, FY2024, FY2025, 9M 2025, 9M 2026; balance sheets at 2023-12-31, 2024-12-31, 2025-12-31 and 2026-09-30 |
| WEX Bank | Utah industrial bank subsidiary funding receivables with deposits, FHLB advances and federal funds; outside the Credit Agreement collateral | December 31 | USD | millions | Consolidated into WEX Inc.; no separate statements supplied; regulatory capital ratios printed | US GAAP; FDIC and Utah regulatory capital | Bank capital at 2025-12-31 and 2026-09-30 |
| Securitization vehicles (VIEs) | Bankruptcy-remote entities holding Australian and European receivables; creditors have no recourse to WEX Inc. | December 31 | EUR and AUD facilities, reported in USD | millions | Consolidated into WEX Inc. | US GAAP | Debt at each balance sheet date |

| Period | Start | End |
|---|---|---|
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

Balance sheet figures are instants at the period end, not flows that begin on the start date. The two nine-month columns are year-to-date flows. WEX consolidates a deposit-taking bank, so the statements mix the funding of customer receivables with the corporate capital structure; the debt split further below separates them.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 64

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Reporting basis retained | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | Presentation only | USD millions; US GAAP; consolidated | USD millions; US GAAP; consolidated | No currency conversion, perimeter change or earnings add-back; the securitization facilities in euro and Australian dollars are reported by the issuer in USD | All periods |
| EBITDA derived from components | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | Calculated, no source EBITDA | Operating income and two depreciation and amortization lines | FY2023 923.3; FY2024 1007.6; FY2025 995.0; 9M 2025 746.8; 9M 2026 849.6 | WEX prints no EBITDA or adjusted EBITDA; EBITDA is operating income plus both depreciation and amortization lines and keeps stock-based compensation, operating interest and non-operating items where the statements put them | All periods; calculation C3 |
| Total Debt aggregation | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9 | Calculated aggregation | Short-term debt, net and long-term debt, net | 2023-12-31 3868.6; 2024-12-31 4375.3; 2025-12-31 4858.4; 2026-09-30 5321.1 | Balance-sheet carrying value, current plus long-term, net of issuance costs; securitized debt, participation debt, FHLB advances and borrowed federal funds are inside the short-term line | Balance sheet dates; calculation C1 |
| Cash-flow sign convention | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 | Presentation only | Parenthesized outflows | Negative numbers | Direction preserved; Cash Interest Paid kept positive as the supplemental line prints it | All cash flow periods |
| Last-twelve-months construction | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | Calculated | FY2025, 9M 2026 and 9M 2025 | LTM to 2026-09-30 | Full year plus current stub less prior-year stub for EBITDA, revenue and financing interest; cash interest is not constructible | 2026-09-30; calculation C4 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Payment processing revenue | 1213.7 | 1200.5 | 1142.8 | 858.8 | 973.4 | USD millions | Reported revenue; Tier 1 annual, Tier 2b interim | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Account servicing revenue | 646.4 | 690.6 | 726.0 | 542.3 | 547.0 | USD millions | Reported revenue | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Finance fee revenue | 314.2 | 298.2 | 321.3 | 239.3 | 297.9 | USD millions | Reported revenue (late fees, factoring and finance charges) | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Other revenue | 373.7 | 438.9 | 470.7 | 347.6 | 389.1 | USD millions | Reported revenue (includes investment income on HSA deposits held by WEX Bank) | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Total revenues | 2548.0 | 2628.1 | 2660.8 | 1987.9 | 2207.5 | USD millions | Reported total | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Processing costs | 621.6 | 647.7 | 665.2 | 491.9 | 493.7 | USD millions | Reported expense magnitude, cost of services | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Service fees | 73.3 | 83.7 | 95.9 | 71.5 | 70.1 | USD millions | Reported expense magnitude, cost of services | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Provision for credit losses | 89.8 | 68.2 | 78.4 | 57.9 | 85.5 | USD millions | Reported expense magnitude, cost of services | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Operating interest | 84.2 | 104.1 | 109.0 | 82.0 | 89.5 | USD millions | Reported expense magnitude, cost of services; interest on deposits and bank funding of receivables, not financing interest | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Depreciation and amortization (cost of services) | 104.4 | 134.0 | 152.1 | 113.7 | 118.3 | USD millions | Reported expense magnitude, cost of services | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Total cost of services | 973.3 | 1037.8 | 1100.6 | 817.0 | 857.2 | USD millions | Reported total | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| General and administrative | 428.0 | 375.8 | 330.2 | 251.9 | 292.4 | USD millions | Reported expense magnitude | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Sales and marketing | 327.8 | 341.0 | 387.0 | 285.9 | 326.5 | USD millions | Reported expense magnitude | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Depreciation and amortization (operating expenses) | 171.8 | 187.3 | 179.0 | 135.5 | 131.2 | USD millions | Reported expense magnitude; includes acquisition-related intangible amortization | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Operating income | 647.1 | 686.3 | 663.9 | 497.6 | 600.1 | USD millions | Reported; Tier 1 annual, Tier 2b interim | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Financing interest expense, net of financial instruments | -204.6 | -235.9 | -240.6 | -181.8 | -159.0 | USD millions | Reported accrued expense on the Credit Agreement and Senior Notes net of swaps, shown negative as printed; not cash paid | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Net foreign currency gain (loss) | 4.9 | -26.1 | -0.2 | -3.3 | 4.0 | USD millions | Reported; sign as printed | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Change in fair value of contingent consideration | -8.5 | -6.5 | -2.9 | -2.3 | -0.7 | USD millions | Reported; sign as printed | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Loss on extinguishment of Convertible Notes | -70.1 | Not supplied: the 2025 annual report prints a dash | Not supplied: the 2025 annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported exceptional item in FY2023 only; dashes retained as missing, not zero | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Income before income taxes | 368.8 | 417.8 | 420.2 | 310.2 | 444.5 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Income tax provision | 102.2 | 108.2 | 116.1 | 90.3 | 124.1 | USD millions | Reported accrued tax, not cash paid | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Net income attributable to shareholders | 266.6 | 309.6 | 304.1 | 219.8 | 320.3 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Stock-based compensation expense | 127.0 | 112.2 | 100.3 | 77.8 | 107.0 | USD millions | Reported non-cash charge from the cash flow statement; not added back to EBITDA here | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Depreciation and amortization, total (calculated) | 276.2 | 321.3 | 331.1 | 249.2 | 249.5 | USD millions | Calculated: the two printed lines; the cash flow statement prints 249.6 for 9M 2026, a 0.1 rounding difference (calculation C3) | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| EBITDA (Reported) | 923.3 | 1007.6 | 995.0 | 746.8 | 849.6 | USD millions | Calculated: operating income plus total depreciation and amortization; WEX states no EBITDA, so this is the only EBITDA and is not issuer-reported (calculation C3) | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |

Per-share amounts and share counts are kept apart from the monetary lines.

### Supplemental equity quantities

| Quantity | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Diluted earnings per share | 6.16 | 7.50 | 8.47 | 6.07 | 9.20 | USD per share | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Weighted average diluted shares | 43.3 | 41.3 | 35.9 | 36.2 | 34.8 | million shares | Reported weighted average, not a period-end count | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |

### Segment schedule

| Business unit | Period | Total revenues | Segment adjusted operating income | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Mobility | FY2023 | 1382.7 | 599.4 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Corporate Payments | FY2023 | 496.9 | 277.2 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Benefits | FY2023 | 668.4 | 241.8 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Unallocated corporate | FY2023 | Not supplied: no separate revenue line | -103.0 | USD millions | Reported unallocated corporate expenses, shown as a deduction; not an operating segment | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 208 |
| Mobility | FY2024 | 1400.8 | 598.5 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Corporate Payments | FY2024 | 487.8 | 256.2 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Benefits | FY2024 | 739.5 | 307.0 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Unallocated corporate | FY2024 | Not supplied: no separate revenue line | -102.1 | USD millions | Reported unallocated corporate expenses, shown as a deduction; not an operating segment | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 208 |
| Mobility | FY2025 | 1386.0 | 541.1 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Corporate Payments | FY2025 | 477.4 | 213.3 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Benefits | FY2025 | 797.4 | 341.6 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 207–208 |
| Unallocated corporate | FY2025 | Not supplied: no separate revenue line | -98.5 | USD millions | Reported unallocated corporate expenses, shown as a deduction; not an operating segment | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 208 |
| Mobility | 9M 2025 | 1040.8 | 412.2 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Benefits | 9M 2025 | 592.5 | 258.5 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Corporate Payments | 9M 2025 | 354.5 | 153.7 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Unallocated corporate | 9M 2025 | Not supplied: no separate revenue line | -74.1 | USD millions | Reported unallocated corporate expenses, shown as a deduction; not an operating segment | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 53 |
| Mobility | 9M 2026 | 1202.1 | 511.1 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Benefits | 9M 2026 | 629.8 | 271.2 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Corporate Payments | 9M 2026 | 375.6 | 171.1 | USD millions | Reported segment revenue from external customers and segment adjusted operating income, an issuer non-GAAP measure | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 34–36 |
| Unallocated corporate | 9M 2026 | Not supplied: no separate revenue line | -78.1 | USD millions | Reported unallocated corporate expenses, shown as a deduction; not an operating segment | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 53 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|---|
| Net income | 266.6 | 309.6 | 304.1 | 219.8 | 320.3 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Stock-based compensation | 127.0 | 112.2 | 100.3 | 77.8 | 107.0 | USD millions | Reported non-cash adjustment | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Depreciation and amortization | 276.2 | 321.3 | 331.1 | 249.2 | 249.6 | USD millions | Reported non-cash adjustment; the income statement lines sum to 249.5 for nine months 2026, a 0.1 rounding difference | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Debt restructuring and debt issuance cost amortization and accretion expense | 18.7 | 11.0 | 8.9 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported non-cash adjustment, annual report only | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Deferred tax provision (benefit) | -21.3 | 11.1 | 43.6 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported non-cash adjustment, annual report only | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Provision for credit losses | 89.8 | 68.2 | 78.4 | 57.9 | 85.5 | USD millions | Reported non-cash adjustment | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Loss on extinguishment of Convertible Notes | 70.1 | Not supplied: the annual report prints a dash | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported non-cash adjustment in FY2023 only | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Unrealized loss on interest rate swaps | 80.8 | Not supplied: the annual report prints a dash | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported non-cash adjustment in FY2023 only | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Other non-cash adjustments (annual report line) | 5.4 | 19.4 | 1.8 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported; the 2024 annual report shows 2023 as -3.1 beside a separate 8.5 contingent consideration line, which sum to the 5.4 shown here | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Other non-cash adjustments (quarterly report aggregate) | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | 34.6 | 16.8 | USD millions | Reported single aggregate line of the quarterly reports; not comparable with the annual components | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Accounts receivable and securitized accounts receivable | -195.1 | 325.2 | -400.6 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported change; outflow negative | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Prepaid expenses and other current and other long-term assets | 44.3 | -44.1 | 5.2 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported change | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Accounts payable | 115.4 | -396.3 | -20.1 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported change | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Accrued expenses and other current and long-term liabilities | 38.2 | -224.8 | -28.5 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported change | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Income taxes | -8.2 | -31.3 | 30.0 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported change | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net change in operating assets and liabilities (quarterly report aggregate) | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | -479.8 | -1198.8 | USD millions | Reported single aggregate line of the quarterly reports | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Operating Activities | 907.9 | 481.4 | 454.3 | 159.6 | -419.6 | USD millions | Reported total; swings with fuel prices and receivable funding | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Purchases of property, equipment and capitalized software | -143.6 | -147.3 | -140.6 | -102.2 | -128.0 | USD millions | Reported capital expenditure; outflow negative; maintenance and growth split not supplied | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Purchases of equity securities and other investments | -17.8 | -54.2 | -12.4 | -11.7 | -26.8 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Purchases of available-for-sale debt securities | -1768.1 | -1259.6 | -1725.3 | -923.6 | -1128.4 | USD millions | Reported; investment of deposits at WEX Bank | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Sales and maturities of available-for-sale debt securities | 193.6 | 506.4 | 1249.7 | 653.4 | 551.9 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Acquisition of intangible assets | -4.5 | -5.1 | -73.1 | -14.5 | Not supplied: the quarterly report prints a dash | USD millions | Reported; FY2025 includes the bp card program deposit | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Acquisitions, net of cash and restricted cash acquired | -402.0 | -0.9 | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Other investing activities | 4.1 | Not supplied: the annual report prints a dash | 4.7 | 4.4 | -0.4 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Investing Activities | -2138.3 | -960.6 | -696.9 | -394.3 | -731.8 | USD millions | Reported total | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repurchases of common stock | -303.4 | -652.0 | -799.8 | -799.8 | -267.4 | USD millions | Reported; FY2025 includes the March 2025 tender offer | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net change in restricted cash payable | 276.2 | -387.7 | -112.3 | -215.6 | -185.7 | USD millions | Reported; customer funds, offset in restricted cash | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net change in deposits | 593.1 | 382.6 | 967.8 | 697.6 | 758.1 | USD millions | Reported; WEX Bank deposit funding including HSA deposits | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Advances from the FHLB | Not supplied: the annual report prints a dash | 3215.0 | 18392.5 | 11524.0 | 20751.0 | USD millions | Reported gross advances; short-term bank funding | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repayments to the FHLB | Not supplied: the annual report prints a dash | -2110.0 | -18392.5 | -11519.0 | -20431.0 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net change in borrowed federal funds | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | Not supplied: the quarterly report prints a dash | 195.0 | USD millions | Reported in the 2026 quarterly report; the annual report folds it into other short-term debt | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net activity on other short-term debt (annual report line) | 58.9 | -67.4 | 21.9 | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net borrowings (repayments) on other debt (quarterly report line) | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | Not supplied: the annual report prints the components separately | -1.9 | 21.5 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Borrowings on revolving credit facility | 3449.3 | 8659.5 | 10084.8 | 7969.7 | 9221.9 | USD millions | Reported gross borrowings | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repayments on revolving credit facility | -2787.3 | -8415.9 | -10562.0 | -8273.5 | -9255.3 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Borrowings on term loans | Not supplied: the annual report prints a dash | 68.3 | 447.8 | 447.8 | Not supplied: the quarterly report prints a dash | USD millions | Reported; FY2025 is the Term B-3 incremental loan | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repayments on term loans | -63.3 | -60.0 | -62.3 | -46.4 | -47.6 | USD millions | Reported scheduled amortization | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Proceeds from issuance of Senior Notes | Not supplied: the annual report prints a dash | Not supplied: the annual report prints a dash | 550.0 | 550.0 | Not supplied: the quarterly report prints a dash | USD millions | Reported; the 2033 notes issued 2025-03-06 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Borrowings on BTFP | 5975.0 | 1570.0 | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported; Bank Term Funding Program | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repayments on BTFP | -5200.0 | -2345.0 | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Repurchase of Convertible Notes | -368.9 | Not supplied: the annual report prints a dash | Not supplied: the annual report prints a dash | Not supplied: the quarterly report prints no such line | Not supplied: the quarterly report prints no such line | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Payments of deferred and contingent consideration | -52.2 | -93.7 | -76.7 | -76.7 | -80.7 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Other financing activities | -4.1 | -24.1 | -40.4 | -39.3 | -19.2 | USD millions | Reported | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Financing Activities | 1573.3 | -260.3 | 418.9 | 216.8 | 660.6 | USD millions | Reported total | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| FX Effect on Cash | 27.4 | -53.5 | 65.1 | 62.3 | -13.6 | USD millions | Reported effect of exchange rates on cash, cash equivalents and restricted cash | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Net Cash Change | 370.3 | -793.0 | 241.4 | 44.4 | Not supplied: the quarterly report prints -504.3, which differs by 0.1 from the sum of its activity totals and the exchange effect (-504.4); rounding in the filing | USD millions | Reported net change in cash, cash equivalents and restricted cash | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Opening Cash | 1859.7 | 2230.0 | 1437.0 | 1437.0 | 1678.4 | USD millions | Reported opening cash, cash equivalents and restricted cash; includes restricted cash, unlike the balance sheet Cash & Equivalents | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Closing Cash | 2230.0 | 1437.0 | 1678.4 | Not supplied: the quarterly report prints 1481.5, which differs by 0.1 from opening cash plus the printed net change (1481.4); rounding in the filing | 1174.1 | USD millions | Reported closing cash, cash equivalents and restricted cash | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 |
| Cash Interest Paid | 247.9 | 328.5 | 333.6 | Not supplied: the quarterly reports print no supplemental interest paid | Not supplied: the quarterly reports print no supplemental interest paid | USD millions | Reported supplemental interest paid, positive; the filing does not split it, but it exceeds accrued financing interest expense, so it appears to include interest on deposits and bank funding (analyst inference); FY2023 excludes USD 50.0 million of swap termination proceeds | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 141–142 |
| Income taxes paid (net of refunds) | 130.3 | 131.9 | 44.5 | Not supplied: the quarterly reports print no taxes paid | Not supplied: the quarterly reports print no taxes paid | USD millions | Reported in the income tax note, positive paid amount | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 181 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Cash and cash equivalents | 975.8 | 595.8 | 905.8 | 593.2 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Restricted cash | 1254.2 | 837.8 | 772.7 | 580.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Accounts receivable, net | 3428.5 | 3008.6 | 3362.6 | 5342.7 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Investment securities, current | 3022.1 | 3764.7 | 4332.9 | 4673.6 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Securitized accounts receivable, restricted | 129.4 | 109.6 | 123.7 | 192.8 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Prepaid expenses and other current assets | 125.3 | 199.0 | 215.4 | 158.7 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total current assets | 8935.3 | 8515.5 | 9713.0 | 11541.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Property, equipment and capitalized software | 242.9 | 261.2 | 253.7 | 267.2 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Goodwill | 3015.7 | 2983.4 | 3015.3 | 3025.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Other intangible assets | 1458.7 | 1260.0 | 1088.2 | 1008.2 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Investment securities, non-current | 66.8 | 80.5 | 94.2 | 102.7 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Deferred income taxes, net (asset) | 13.7 | 18.3 | 16.9 | 17.4 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Other assets | 149.0 | 202.8 | 218.2 | 233.7 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total Assets | 13882.1 | 13321.6 | 14399.5 | Not supplied: the quarterly report prints 16196.9, which differs by 0.1 from total liabilities plus total equity (16197.0); rounding in the filing | USD millions | Reported total; the 2026-09-30 figure is withheld because it does not equal liabilities plus equity | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Accounts payable | 1479.1 | 1090.9 | 1070.4 | 2046.7 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Accrued expenses and other current liabilities | 802.7 | 653.6 | 695.2 | 583.4 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Restricted cash payable | 1253.5 | 837.0 | 771.5 | 577.5 | USD millions | Reported; customer funds held, a non-debt funding float offset by restricted cash | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Short-term deposits | 3942.8 | 4452.7 | 5423.1 | 6180.5 | USD millions | Reported; WEX Bank deposits including HSA deposits, a non-debt funding float | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Short-term debt, net | 1041.1 | 1293.2 | 1326.4 | 1863.5 | USD millions | Reported carrying value; includes securitized debt, participation debt, FHLB advances, borrowed federal funds and the current portion of long-term debt | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total current liabilities | 8519.2 | 8327.3 | 9286.6 | 11251.6 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Long-term debt, net | 2827.5 | 3082.1 | 3532.0 | 3457.6 | USD millions | Reported carrying value, net of issuance costs and discounts; Credit Agreement plus the Senior Notes less the current portion | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Long-term deposits | 129.8 | Not supplied: the 2024 annual report prints a dash | Not supplied: the line is not printed on the 2025 balance sheet | Not supplied: the line is not printed on the 2026 balance sheet | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Deferred income taxes, net (liability) | 129.5 | 145.6 | 187.3 | 210.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Other liabilities | 455.5 | 277.7 | 159.1 | 124.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total Liabilities | 12061.5 | 11832.8 | 13165.0 | 15044.9 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total Equity | 1820.6 | 1488.8 | 1234.5 | 1152.1 | USD millions | Reported | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Total Debt | 3868.6 | 4375.3 | 4858.4 | 5321.1 | USD millions | Calculated: short-term debt, net plus long-term debt, net; carrying value including WEX Bank funding and securitization (calculation C1) | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |
| Cash & Equivalents | 975.8 | 595.8 | 905.8 | 593.2 | USD millions | Reported cash and cash equivalents, excluding restricted cash; the 2026-09-30 amount includes USD 463.0 million held by WEX Bank | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–140; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–9 |

### T4.18 Debt instruments

Amounts are USD millions at 2026-09-30. Tranche carrying values are not disclosed, so each instrument is stated at the principal its note prints and one financing cost adjustment row reconciles the total to the balance-sheet Total Debt of 5321.1.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 20–23; calculation C6

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term A-1 Loans | Term loan, Credit Agreement | Not supplied: tranche carrying value not disclosed | 787.5 | 787.5 | Not supplied: commitment not stated separately | Senior secured: security interest in substantially all assets of the Company, excluding WEX Bank and certain foreign subsidiaries (2025 annual report) | Senior secured under the Credit Agreement; priority against the other tranches not stated | USD | 787.5 | Not applicable | Applicable margin set by the consolidated leverage ratio; amount not printed | floating | Term SOFR or base rate at the Company's option | Not supplied: margin grid not printed | Not supplied: floor not stated | Earlier of 2029-05-10 and 91 days before the Term B-2 maturity (2028-01-01, calculated, if that rule applies) | Not supplied: the 2026 reports do not restate scheduled payments | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 187 |
| Term B-2 Loans | Term loan, Credit Agreement | Not supplied: tranche carrying value not disclosed | 1364.0 | 1364.0 | Not supplied: commitment not stated separately | Senior secured, as above | Senior secured under the Credit Agreement; priority against the other tranches not stated | USD | 1364.0 | Not applicable | Term SOFR plus 1.75 percent; base rate plus 0.75 percent | floating | Term SOFR or base rate | 175 | Not supplied: floor not stated | 2028-04-01 | Not supplied: the 2026 reports do not restate scheduled payments | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 187 |
| Term B-3 Loans | Term loan, Credit Agreement | Not supplied: tranche carrying value not disclosed | 443.3 | 443.3 | Not supplied: commitment not stated separately | Senior secured, as above | Senior secured under the Credit Agreement; priority against the other tranches not stated | USD | 443.3 | Not applicable | Term SOFR plus 1.75 percent; base rate plus 0.75 percent; issued at 0.5 percent OID on 2025-03-06 | floating | Term SOFR or base rate | 175 | Not supplied: floor not stated | 2032-03-06 | Not supplied: the 2026 reports do not restate scheduled payments | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 187 |
| Revolving Credit Facility | Revolver, Credit Agreement | Not supplied: no separate carrying value | 395.0 | 395.0 | 1600.0 (USD 1.6 billion as printed); letters of credit 44.5; remaining capacity 1160.5 | Senior secured, as above | Senior secured under the Credit Agreement; priority against the other tranches not stated | USD | 395.0 | Not applicable | Applicable margin set by the consolidated leverage ratio; commitment fee 0.25 percent of the unused portion at 2026-09-30 | floating | Term SOFR or base rate | Not supplied: margin grid not printed | Not supplied: floor not stated | Earlier of 2029-05-10 and 91 days before the Term B-2 maturity (2028-01-01, calculated, if that rule applies) | Not applicable: revolving | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| Senior Notes due 2033 | Senior unsecured notes | Not supplied: carrying value not disclosed separately | 550.0 | 550.0 | Not applicable: notes | Unsecured; guaranteed by subsidiary guarantors party to the Indenture, not named in the supplied text | Senior unsecured; behind the secured Credit Agreement debt to the value of its collateral (analyst inference; the Indenture is not supplied) | USD | 550.0 | Not applicable | 6.500 percent | fixed | Not applicable: fixed | Not applicable: fixed | Not applicable: fixed | 2033-03-15 | 0 (bullet) | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21, 55–56; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 187–188 |
| Securitized debt (VIEs) | Receivables securitization, EUR and AUD facilities | Not supplied: carrying value not disclosed separately | 118.8 | 118.8 | EUR 55.0 million limit (MUFG Bank); AUD 100.0 million to 125.0 million by month (ANZ) | Secured on Australian and European receivables sold to bankruptcy-remote vehicles; no recourse to WEX Inc. | Not supplied: legal rank against other debt not stated | EUR and AUD (split not stated) | 118.8 | Not applicable: the issuer states the USD amount | Variable rate plus margin; 5.21 percent weighted rate | floating | Not supplied: reference rate not stated | Not supplied: margin not stated | Not supplied: floor not stated | EUR facility expires April 2027; AUD facility expires October 2027, renewable annually | Not supplied: revolving facilities, no schedule | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| Participation debt | Unsecured bank participation, WEX Bank | Not supplied: carrying value not disclosed separately | 70.0 | 70.0 | 70.0 maximum | Unsecured | Not supplied: legal rank against other debt not stated | USD | 70.0 | Not applicable | Reference rate plus 2.25 percent; 6.16 percent weighted rate | floating | Not supplied: reference rate not stated | 225 | Not supplied: floor not stated | Expires December 2026; cancellable on 60 days' notice | Not supplied: no schedule | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 22 |
| FHLB advances | Collateralized short-term bank funding, WEX Bank | Not supplied: carrying value not disclosed separately | 1425.0 | 1425.0 | Remaining borrowing capacity 14.3 | Collateralized by investment securities | Not supplied: legal rank against other debt not stated | USD | 1425.0 | Not applicable | 4.03 percent weighted rate | Not supplied: rate type not stated | Not supplied: reference rate not stated | Not supplied: margin not stated | Not supplied: floor not stated | Short-term; maturities not stated | Not supplied: no schedule | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21, 23 |
| Borrowed federal funds | Uncommitted federal funds lines, WEX Bank | Not supplied: carrying value not disclosed separately | 195.0 | 195.0 | Not applicable: uncommitted lines | Not supplied: security not stated | Not supplied: legal rank against other debt not stated | USD | 195.0 | Not applicable | 3.99 percent weighted rate | Not supplied: rate type not stated | Not supplied: reference rate not stated | Not supplied: margin not stated | Not supplied: floor not stated | Short-term; maturities not stated | Not supplied: no schedule | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21, 23 |
| Financing cost adjustment | Aggregate contra-debt, not an instrument | -27.5 | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | USD | -27.5 | Not applicable | Not applicable: contra-debt | not stated | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | Not applicable: contra-debt | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| EBITDA (Reported) | LTM to 2026-09-30 | USD 995.0m | USD 849.6m | USD 746.8m | USD 1097.8m | Calculated | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | EBITDA is operating income plus depreciation and amortization, not an issuer figure; stubs are nine-month 2026 and nine-month 2025 (calculation C4). |
| Total revenues | LTM to 2026-09-30 | USD 2660.8m | USD 2207.5m | USD 1987.9m | USD 2880.4m | Calculated | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | Printed totals; nine-month 2025 segment revenue sums to 1987.8, a 0.1 rounding difference. |
| Financing interest expense, net of financial instruments | LTM to 2026-09-30 | USD 240.6m | USD 159.0m | USD 181.8m | USD 217.8m | Calculated | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | Accrued expense on the Credit Agreement and Senior Notes net of swaps, not cash paid. |
| Cash Interest Paid | LTM to 2026-09-30 | USD 333.6m | Not supplied: the quarterly reports print no supplemental interest paid | Not supplied: the quarterly reports print no supplemental interest paid | Not calculable: the nine-month stubs are not printed | Not Calculable | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 141–142; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 10–11 | Interest cover on cash interest paid cannot be extended beyond FY2025. |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3868.6 | Net debt data; calculation C1 | 923.3 | Income statement EBITDA (Reported), calculation C3 | FY2023 / 2023-12-31 | USD | US$m | 4.19 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Carrying-value debt including WEX Bank funding and securitization; not the covenant ratio. |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 2892.8 | Net debt data; calculation C2 | 923.3 | Income statement EBITDA (Reported), calculation C3 | FY2023 / 2023-12-31 | USD | US$m | 3.13 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Cash is unrestricted cash and equivalents; most of it is held by WEX Bank. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 923.3 | Income statement EBITDA (Reported), calculation C3 | 247.9 | Supplemental interest paid, 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 141–142 | FY2023 / 2023-12-31 | USD | US$m | 3.72 | Calculated | Tier 1; EBITDA calculated, not issuer-reported | Cash interest paid appears to include interest on deposits and bank funding that EBITDA already deducts as operating interest (analyst inference), so this cover is conservative. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4375.3 | Net debt data; calculation C1 | 1007.6 | Income statement EBITDA (Reported), calculation C3 | FY2024 / 2024-12-31 | USD | US$m | 4.34 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Carrying-value debt including WEX Bank funding and securitization; not the covenant ratio. |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 3779.5 | Net debt data; calculation C2 | 1007.6 | Income statement EBITDA (Reported), calculation C3 | FY2024 / 2024-12-31 | USD | US$m | 3.75 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Cash is unrestricted cash and equivalents; most of it is held by WEX Bank. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1007.6 | Income statement EBITDA (Reported), calculation C3 | 328.5 | Supplemental interest paid, 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 141–142 | FY2024 / 2024-12-31 | USD | US$m | 3.07 | Calculated | Tier 1; EBITDA calculated, not issuer-reported | Cash interest paid appears to include interest on deposits and bank funding that EBITDA already deducts as operating interest (analyst inference), so this cover is conservative. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 4858.4 | Net debt data; calculation C1 | 995.0 | Income statement EBITDA (Reported), calculation C3 | FY2025 / 2025-12-31 | USD | US$m | 4.88 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Carrying-value debt including WEX Bank funding and securitization; not the covenant ratio. |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 3952.6 | Net debt data; calculation C2 | 995.0 | Income statement EBITDA (Reported), calculation C3 | FY2025 / 2025-12-31 | USD | US$m | 3.97 | Calculated | Tier 1 balance sheet; EBITDA calculated, not issuer-reported | Cash is unrestricted cash and equivalents; most of it is held by WEX Bank. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 995.0 | Income statement EBITDA (Reported), calculation C3 | 333.6 | Supplemental interest paid, 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 141–142 | FY2025 / 2025-12-31 | USD | US$m | 2.98 | Calculated | Tier 1; EBITDA calculated, not issuer-reported | Cash interest paid appears to include interest on deposits and bank funding that EBITDA already deducts as operating interest (analyst inference), so this cover is conservative. |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 5321.1 | Net debt data; calculation C1 | 1097.8 | LTM EBITDA, calculation C4 | 2026-09-30 | USD | US$m | 4.85 | Calculated | Tier 2b interim balance sheet; LTM EBITDA calculated | Carrying-value debt including WEX Bank funding and securitization; not the covenant ratio. LTM EBITDA. |
| Net debt / EBITDA | (Total Debt - Cash & Equivalents) / EBITDA (Reported) | 4727.9 | Net debt data; calculation C2 | 1097.8 | LTM EBITDA, calculation C4 | 2026-09-30 | USD | US$m | 4.31 | Calculated | Tier 2b interim balance sheet; LTM EBITDA calculated | Cash is unrestricted cash and equivalents; most of it is held by WEX Bank. LTM EBITDA. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1097.8 | LTM EBITDA, calculation C4 | Not supplied: no interim cash interest paid is printed | Not supplied | 2026-09-30 | USD | US$m | Not calculable: no interim cash interest paid is printed | Not Calculable | Insufficient | Last-twelve-months cash interest cannot be constructed. |
| Reported EBITDA / financing interest expense | EBITDA (Reported) / financing interest expense | 923.3 | EBITDA, calculation C3 or C4 | 204.6 | Income statement financing interest expense, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2023 | USD | US$m | 4.51 | Calculated | Tier 1; EBITDA calculated | Accrued financing interest on the Credit Agreement and Senior Notes only, excluding operating interest on deposits; shown beside the cash-paid cover. |
| Reported EBITDA / financing interest expense | EBITDA (Reported) / financing interest expense | 1007.6 | EBITDA, calculation C3 or C4 | 235.9 | Income statement financing interest expense, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2024 | USD | US$m | 4.27 | Calculated | Tier 1; EBITDA calculated | Accrued financing interest on the Credit Agreement and Senior Notes only, excluding operating interest on deposits; shown beside the cash-paid cover. |
| Reported EBITDA / financing interest expense | EBITDA (Reported) / financing interest expense | 995.0 | EBITDA, calculation C3 or C4 | 240.6 | Income statement financing interest expense, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2025 | USD | US$m | 4.14 | Calculated | Tier 1; EBITDA calculated | Accrued financing interest on the Credit Agreement and Senior Notes only, excluding operating interest on deposits; shown beside the cash-paid cover. |
| Reported EBITDA / financing interest expense | EBITDA (Reported) / financing interest expense | 1097.8 | EBITDA, calculation C3 or C4 | 217.8 | Income statement financing interest expense, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | LTM to 2026-09-30 | USD | US$m | 5.04 | Calculated | Tier 1; EBITDA calculated | Accrued financing interest on the Credit Agreement and Senior Notes only, excluding operating interest on deposits; shown beside the cash-paid cover. |
| Corporate debt / EBITDA | (Total Debt - bank and securitization funding debt) / EBITDA (Reported) | 2882.6 | Calculation C5 | 923.3 | EBITDA, calculation C3 or C4 | FY2023 | USD | US$m | 3.12 | Calculated | Tier 1 and Tier 2b; analyst split of the issuer's debt lines | Excludes securitized debt, participation debt, FHLB advances and borrowed federal funds; EBITDA still includes WEX Bank earnings, so this is an analyst split, not an issuer perimeter. |
| Corporate debt / EBITDA | (Total Debt - bank and securitization funding debt) / EBITDA (Reported) | 3134.3 | Calculation C5 | 1007.6 | EBITDA, calculation C3 or C4 | FY2024 | USD | US$m | 3.11 | Calculated | Tier 1 and Tier 2b; analyst split of the issuer's debt lines | Excludes securitized debt, participation debt, FHLB advances and borrowed federal funds; EBITDA still includes WEX Bank earnings, so this is an analyst split, not an issuer perimeter. |
| Corporate debt / EBITDA | (Total Debt - bank and securitization funding debt) / EBITDA (Reported) | 3586.8 | Calculation C5 | 995.0 | EBITDA, calculation C3 or C4 | FY2025 | USD | US$m | 3.60 | Calculated | Tier 1 and Tier 2b; analyst split of the issuer's debt lines | Excludes securitized debt, participation debt, FHLB advances and borrowed federal funds; EBITDA still includes WEX Bank earnings, so this is an analyst split, not an issuer perimeter. |
| Corporate debt / EBITDA | (Total Debt - bank and securitization funding debt) / EBITDA (Reported) | 3512.3 | Calculation C5 | 1097.8 | EBITDA, calculation C3 or C4 | LTM to 2026-09-30 | USD | US$m | 3.20 | Calculated | Tier 1 and Tier 2b; analyst split of the issuer's debt lines | Excludes securitized debt, participation debt, FHLB advances and borrowed federal funds; EBITDA still includes WEX Bank earnings, so this is an analyst split, not an issuer perimeter. |
| Net corporate debt / EBITDA | (Corporate debt - Corporate Cash) / EBITDA (Reported) | 3054.0 | Calculation C5 | 1007.6 | EBITDA, calculation C3 or C4 | FY2024 | USD | US$m | 3.03 | Calculated | Tier 1 and Tier 2b; analyst split | Corporate Cash as WEX defines it is cash outside WEX Bank; the 2023 figure is not printed. |
| Net corporate debt / EBITDA | (Corporate debt - Corporate Cash) / EBITDA (Reported) | 3464.3 | Calculation C5 | 995.0 | EBITDA, calculation C3 or C4 | FY2025 | USD | US$m | 3.48 | Calculated | Tier 1 and Tier 2b; analyst split | Corporate Cash as WEX defines it is cash outside WEX Bank; the 2023 figure is not printed. |
| Net corporate debt / EBITDA | (Corporate debt - Corporate Cash) / EBITDA (Reported) | 3406.2 | Calculation C5 | 1097.8 | EBITDA, calculation C3 or C4 | LTM to 2026-09-30 | USD | US$m | 3.10 | Calculated | Tier 1 and Tier 2b; analyst split | Corporate Cash as WEX defines it is cash outside WEX Bank; the 2023 figure is not printed. |
| EBITDA margin | EBITDA (Reported) / Total revenues | 995.0 | Calculation C3 | 2660.8 | Income statement, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2025 | USD | US$m | 0.3739 | Calculated | Tier 1 | Fraction, not a percentage. |
| EBITDA margin | EBITDA (Reported) / Total revenues | 1007.6 | Calculation C3 | 2628.1 | Income statement, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2024 | USD | US$m | 0.3834 | Calculated | Tier 1 | Fraction, not a percentage. |
| Revenue growth | Current total revenues / prior total revenues - 1 | 2660.8 | Income statement, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | 2628.1 | Income statement, 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 | FY2025 | USD | US$m | 0.0124 | Calculated | Tier 1 | Fraction; fuel prices moved Mobility revenue in both directions. |
| Revenue growth | Current total revenues / prior total revenues - 1 | 2207.5 | Income statement, 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | 1987.9 | Income statement, 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 | 9M 2026 | USD | US$m | 0.1105 | Calculated | Tier 2b | Fraction against nine months 2025; the quarterly report attributes USD 119.0 million of the Mobility increase to higher fuel prices. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2025 | FY2024 | 9M 2026 | 9M 2025 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Operating, period flow | Mobility payment processing dollars of fuel, USD millions | 48734.7 | 52020.9 | 47908.3 | 36875.4 | Lower for FY2025; sharply higher for 9M 2026 | Issuer-reported; fuel price driven; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 40 |
| Operating, rate | Average U.S. fuel price, USD per gallon | 3.32 | 3.47 | 4.40 | 3.33 | Lower for FY2025; higher for 9M 2026 | Rate; not averaged across periods; revenue and receivables rise with price; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 40 |
| Operating, rate | Mobility net payment processing rate, percent | 1.32 | 1.34 | 1.20 | 1.32 | Lower | Rate; the rate falls as fuel prices rise because part of the fee is fixed; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 40 |
| Operating, rate | Mobility credit losses, basis points of fuel spend | 13 | 12 | 15.3 | 12.4 | Higher | Issuer-reported loss performance; FY2025 values are printed as whole numbers; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 40 |
| Operating, period average | Benefits average HSA custodial cash assets, USD millions | 4749.2 | 4280.4 | 5243.6 | 4707.6 | Higher | Period average, not period end; most of it is held by WEX Bank as deposits; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 111; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 44 |
| Issuer reported, non-GAAP | Adjusted free cash flow, USD millions | 638.0 | 562.0 | 502.8 | 376.7 | Higher | Issuer non-GAAP; includes Net Funding Activity and excludes changes in WEX Bank cash; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 119; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 56, 59 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation | Source |
|---|---|---|---|---|---|---|---|---|
| EBITDA | Reported unadjusted EBITDA is the primary denominator | WEX states no EBITDA or adjusted EBITDA; its covenant Consolidated EBITDA is defined in the Credit Agreement and no value is printed; its non-GAAP measures are adjusted operating income, adjusted net income and adjusted free cash flow | EBITDA here is operating income plus depreciation and amortization, after operating interest on deposits and bank funding and after stock-based compensation | All periods | FY2025 EBITDA 995.0 against segment adjusted operating income 1095.9 less unallocated corporate expenses 98.5 | Leverage, cover, Fundamental credit | Use the calculated figure and label it; do not read it as the covenant measure; the issuer's reported covenant leverage is 2.7 to 1.0 at 2026-09-30 against a 4.75 maximum | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 7, 118, 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55 |
| Leverage perimeter | Matched-funding debt is not industrial leverage | Total debt includes WEX Bank funding and VIE debt that funds customer receivables | Debt 5321.1 against corporate debt 3512.3 and bank and securitization funding 1808.8 at 2026-09-30 | 2026-09-30 and prior year ends | Consolidated 4.85 against corporate 3.20 at 2026-09-30 | Leverage, Fundamental credit, Structural priority | Show both; the corporate cut still carries WEX Bank earnings in EBITDA, so it is an analyst split, not an issuer perimeter | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–23; calculation C5 |
| Interest | Coverage uses cash interest paid | Supplemental interest paid is not split by the filing and exceeds financing interest expense, which suggests it includes interest on deposits and bank funding (analyst inference); financing interest expense is accrued and excludes operating interest | FY2025 cash paid 333.6; financing interest expense 240.6; operating interest 109.0; EBITDA already deducts the 109.0; 240.6 plus 109.0 is 349.6 | FY2023 to FY2025 | Cover 2.98 on cash paid against 4.14 on accrued financing interest in FY2025 | Cover, Fundamental credit | Keep both; cash-paid cover is conservative if it includes operating interest, which the filing does not confirm; interim cash interest is not printed | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 141–142 |
| Debt basis | Total debt at carrying value; principal kept separately | Principal by instrument and a financing cost adjustment | 2026-09-30 principal 5348.6 against carrying value 5321.1; unamortized issuance costs and discounts 27.5; the Credit Agreement total prints 2989.7 against tranche lines that sum to 2989.8 | 2026-09-30; FY2025 principal 4892.3 against carrying 4858.4 | Difference 27.5 at 2026-09-30 and 33.9 at 2025-12-31 | Leverage, Refinancing & LME | Use carrying value for ratios and principal for maturities; the 0.1 is filing rounding | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 186, 190; calculation C6 |
| Term A-1 and revolver maturity | Contractual maturity from executed documents | The note says the earlier of 2029-05-10 and 91 days before the Term B-2 maturity; the five-year principal table places 1119.2 in 2029 | If the 91-day rule applied, the date would be 2028-01-01 (calculated); the annual report ladder uses 2029 | Debt maturing 2028 and 2029 | 787.5 of Term A-1 and 395.0 of revolver borrowings at 2026-09-30 move a year earlier or later | Refinancing & LME, Liquidity | Draw the ladder as the annual report does, and flag that the executed Credit Agreement is not supplied | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 186, 190 |
| Cash | Cash and cash equivalents, excluding restricted cash | Cash flow statement cash includes restricted cash; Corporate Cash excludes WEX Bank cash | Balance sheet cash 593.2 against cash-flow cash 1174.1; WEX Bank holds 463.0 and Corporate Cash is 106.1 | 2026-09-30 | Net debt uses 593.2; corporate net debt uses 106.1 | Net debt, Liquidity | Use unrestricted balance sheet cash for net debt and state that most of it sits in WEX Bank | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 12, 53 |
| Non-debt funding float | Deposits and customer funds are credit-relevant float, not ordinary payables | Short-term deposits, restricted cash payable and merchant payables fund the receivables book | Deposits 6180.5 including HSA deposits 4758.0; restricted cash payable 577.5; accounts payable 2046.7 | 2026-09-30 | Deposits exceed total debt carrying value | Liquidity, Structural priority | Carry as a named funding float; it is not included in Total Debt | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 20 |
| Operating cash flow | Operating cash flow before and after working capital | Nine-month 2026 operating cash flow is -419.6 because rising fuel prices enlarge receivables funded by deposits and borrowings; adjusted free cash flow adds Net Funding Activity | Operating cash flow -419.6 against adjusted free cash flow 502.8 | 9M 2026 | Difference of 922.4 between the two measures | Cash flow quality, Fundamental credit | Do not read operating cash flow alone; adjusted free cash flow is an issuer non-GAAP measure with its own definition | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 56–59 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 4.19 | 3.13 | x | Carrying debt including WEX Bank funding; EBITDA calculated; annual statements |
| FY2024 / 2024-12-31 | 4.34 | 3.75 | x | Carrying debt including WEX Bank funding; EBITDA calculated; annual statements |
| FY2025 / 2025-12-31 | 4.88 | 3.97 | x | Carrying debt including WEX Bank funding; EBITDA calculated; annual statements |
| 2026-09-30 | 4.85 | 4.31 | x | Carrying debt at 2026-09-30; EBITDA is last twelve months to 2026-09-30; calculated |

These ratios include debt that funds receivables at WEX Bank and its securitization vehicles, so they overstate the leverage of the corporate debt.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 20–23; calculation C1; calculation C2; calculation C4; calculation C5

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2023 / 2023-12-31 | 3.72 | x | EBITDA (Reported) / supplemental cash interest paid; annual; appears to include bank funding interest |
| FY2024 / 2024-12-31 | 3.07 | x | EBITDA (Reported) / supplemental cash interest paid; annual; appears to include bank funding interest |
| FY2025 / 2025-12-31 | 2.98 | x | EBITDA (Reported) / supplemental cash interest paid; annual; appears to include bank funding interest |
| 2026-09-30 | Not supplied: no interim cash interest paid is printed | x | Last-twelve-months cash interest cannot be constructed from the quarterly reports |

Cash interest paid appears to include interest on deposits and bank funding that EBITDA already deducts, so the cover may understate debt-service capacity.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 141–142; calculation C3

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 / 2023-12-31 | 975.8 | 731.2 | US$m | Cash and cash equivalents excluding restricted cash; undrawn revolver capacity after letters of credit, contingent on covenant compliance; excludes uncommitted federal funds and Federal Reserve discount window lines |
| FY2024 / 2024-12-31 | 595.8 | 655.2 | US$m | Cash and cash equivalents excluding restricted cash; undrawn revolver capacity after letters of credit, contingent on covenant compliance; excludes uncommitted federal funds and Federal Reserve discount window lines |
| FY2025 / 2025-12-31 | 905.8 | 1127.1 | US$m | Cash and cash equivalents excluding restricted cash; undrawn revolver capacity after letters of credit, contingent on covenant compliance; excludes uncommitted federal funds and Federal Reserve discount window lines |
| 2026-09-30 | 593.2 | 1160.5 | US$m | Cash and cash equivalents excluding restricted cash; undrawn revolver capacity after letters of credit, contingent on covenant compliance; excludes uncommitted federal funds and Federal Reserve discount window lines |

Most of the cash is held by WEX Bank and is not freely available to the parent.
Basis: 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 148, 191; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 186; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 21, 53

### Financials and credit metrics

| Metric | 2023-12-31 or FY2023 | 2024-12-31 or FY2024 | 2025-12-31 or FY2025 | 2026-09-30 or 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Total Debt (carrying value) | 3868.6 | 4375.3 | 4858.4 | 5321.1 | USD millions | Calculated short-term plus long-term debt, net | calculation C1 |
| Bank and securitization funding debt | 986.0 | 1241.0 | 1271.6 | 1808.8 | USD millions | Securitized debt, participation debt, FHLB advances and borrowed federal funds as printed; analyst split | calculation C5 |
| Corporate debt (Credit Agreement and Senior Notes, carrying value) | 2882.6 | 3134.3 | 3586.8 | 3512.3 | USD millions | Total Debt less bank and securitization funding; the 2024 and 2025 figures are 0.1 above the sum of the printed lines because of rounding | calculation C5 |
| Corporate Cash | Not supplied: the 2024 annual report states it for 2024-12-31 only, and no report supplied states it for 2023-12-31 | 80.3 | 122.5 | 106.1 | USD millions | Cash outside WEX Bank, calculated under the consolidated leverage ratio terms of the Credit Agreement as the annual report defines it | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 7, 129; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 124; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 53 |
| Covenant consolidated leverage ratio, as reported | Not supplied: ratio value not printed | Not supplied: ratio value not printed | Not supplied: ratio value not printed | 2.7 | times | Reported against a maximum of 4.75 times; definition in the executed Credit Agreement not supplied | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55 |
| Covenant interest coverage ratio minimum | 3.00 | 3.00 | 3.00 | 3.00 | times | Minimum level only; the reported value is not printed | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 130; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55 |
| Revolver commitments, drawn amount and letters of credit | Not supplied: commitments before the May 2024 amendment are not printed; drawn 662.0 and letters of credit 36.8 | 1600.0; 905.6; 39.2 | 1600.0; 428.4; 44.5 | 1600.0; 395.0; 44.5 | USD millions | Commitments are printed as USD 1.6 billion from the May 2024 amendment onward; remaining capacity is commitments less drawn less letters of credit | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 131, 190–191; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 186–187; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| Adjusted free cash flow (issuer non-GAAP) | 510.6 | 562.0 | 638.0 | 502.8 for 9M 2026 against 376.7 for 9M 2025 | USD millions | Issuer measure including Net Funding Activity | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 119; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 56, 59 |
| WEX Bank total capital ratio | 16.27 | 15.36 | 15.94 | 13.01 | percent | Regulatory total capital to risk-weighted assets against an 8.00 minimum and a 10.00 well-capitalized level | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 215; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 210; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 37 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 1335.0 | US$m | Printed; includes securitized debt 101.4, participation debt 65.2, FHLB advances 1105.0 and 63.4 of term loan principal; ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |
| FY2027 | 63.4 | US$m | Printed; ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |
| FY2028 | 1396.1 | US$m | Printed; includes the Term B-2 Loans due 2028-04-01; ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |
| FY2029 | 1119.2 | US$m | Printed; the annual report places the Term A-1 Loans and revolver borrowings in 2029; ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |
| FY2030 | 4.5 | US$m | Printed; ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |
| Thereafter | 974.1 | US$m | Calculated: total principal 4892.3 less the five printed years; Term B-3 balance due 2032 and the Senior Notes due 2033 (calculation C7); ladder drawn at 2025-12-31 because the quarterly reports print no maturity table |

The ladder is drawn at 2025-12-31 and has not been rolled forward to 2026-09-30, since no maturity table is printed for that date.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, page 190; calculation C7

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2023 / 2023-12-31 | 3868.6 | 975.8 | 2892.8 | US$m | Reported carrying value including securitized debt 101.9, participation debt 39.1 and borrowed federal funds 845.0; principal not printed as a total at this date; calculated net debt. |
| FY2024 / 2024-12-31 | 4375.3 | 595.8 | 3779.5 | US$m | Reported carrying value including securitized debt 86.8, participation debt 49.2 and FHLB advances 1105.0; calculated net debt. |
| FY2025 / 2025-12-31 | 4858.4 | 905.8 | 3952.6 | US$m | Reported carrying value including securitized debt 101.4, participation debt 65.2 and FHLB advances 1105.0; principal total 4892.3; calculated net debt. |
| 2026-09-30 | 5321.1 | 593.2 | 4727.9 | US$m | Reported carrying value including securitized debt 118.8, participation debt 70.0, FHLB advances 1425.0 and borrowed federal funds 195.0; principal total 5348.6 from instrument lines; calculated net debt; before any post-quarter event. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 4892.3 | -33.9 | 4858.4 | US$m | Ladder total from the five printed years plus the calculated remainder. Reconciling items are unamortized debt issuance costs and discounts of 33.9; no debt is left out of the ladder. Calculation C7. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | The 2026 quarterly reports and the 2025 annual report were read for events after 2026-09-30; the only post-quarter items printed are the FDIC order termination on 2026-10-15 and a share count on 2026-10-26, neither of which changes net debt. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2023 | 2548.0 | 923.3 | US$m | Annual duration; the column holds reported EBITDA, calculated as operating income plus depreciation and amortization, because WEX states no adjusted EBITDA. |
| FY2024 | 2628.1 | 1007.6 | US$m | Same annual duration and reported identity; not issuer-adjusted or house-adjusted. |
| FY2025 | 2660.8 | 995.0 | US$m | Same annual duration and reported identity; fuel prices moved revenue and costs in both directions. |

The EBITDA shown is a reported-basis figure calculated here, not an adjusted measure, and is after operating interest on deposits and bank funding.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; calculation C3

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Term A-1 Loans | 1 | Yes | 787.5 | 0.72 | US$m | Borrower WEX Inc. with its Credit Agreement subsidiaries; security interest in substantially all assets excluding WEX Bank and certain foreign subsidiaries; priority among tranches not stated, so rank 1 is shared and the order is presentational; cumulative debt through this row over LTM EBITDA 1097.8; principal amounts; calculation C8 |
| Term B-2 Loans | 1 | Yes | 1364.0 | 1.96 | US$m | Borrower WEX Inc. with its Credit Agreement subsidiaries; security interest in substantially all assets excluding WEX Bank and certain foreign subsidiaries; priority among tranches not stated, so rank 1 is shared and the order is presentational; cumulative debt through this row over LTM EBITDA 1097.8; principal amounts; calculation C8 |
| Term B-3 Loans | 1 | Yes | 443.3 | 2.36 | US$m | Borrower WEX Inc. with its Credit Agreement subsidiaries; security interest in substantially all assets excluding WEX Bank and certain foreign subsidiaries; priority among tranches not stated, so rank 1 is shared and the order is presentational; cumulative debt through this row over LTM EBITDA 1097.8; principal amounts; calculation C8 |
| Revolving Credit Facility, drawn | 1 | Yes | 395.0 | 2.72 | US$m | Borrower WEX Inc. with its Credit Agreement subsidiaries; security interest in substantially all assets excluding WEX Bank and certain foreign subsidiaries; priority among tranches not stated, so rank 1 is shared and the order is presentational; cumulative debt through this row over LTM EBITDA 1097.8; principal amounts; calculation C8 |
| Senior Notes due 2033 | 2 | No | 550.0 | 3.22 | US$m | Issuer WEX Inc.; guaranteed by subsidiary guarantors party to the Indenture, not named in the supplied text; unsecured; cumulative debt through this row over LTM EBITDA 1097.8; principal amounts; calculation C8 |

Bank-level debt of WEX Bank and the securitization vehicles is left out because no source states its legal rank against these facilities, so the stack is not a full capital structure or recovery waterfall.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–23; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 187; calculation C8

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported) | Not supplied: WEX states no adjusted EBITDA, so there is no issuer bridge to reconcile | US$m | Opening measure is the calculated reported EBITDA; no add-backs are stated by the issuer and none are constructed. |
| EBITDA (Adjusted) | Not supplied: WEX states no adjusted EBITDA | US$m | No issuer-adjusted measure exists in the five filings; the closing measure cannot be stated. |

No bridge is stated because the issuer prints adjusted operating income and adjusted net income, not adjusted EBITDA.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 7, 118; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 50–53

### Financial interpretation

Leverage on the balance sheet rose from 4.19x at the end of FY2023 to 4.88x at the end of FY2025 and stands at 4.85x on last-twelve-months EBITDA at 2026-09-30, while net of cash it is 4.31x. The step up in FY2025 came from debt raised in March 2025 to fund the share tender offer, and the step up since comes from bank funding of larger receivables: carrying debt rose by USD 462.7 million in nine months while bank and securitization funding rose by USD 537.2 million, so corporate debt fell by USD 74.5 million and the whole increase funds customer receivables. Creditors of the Credit Agreement and Senior Notes should therefore anchor on the corporate cut of 3.20x at 2026-09-30, an analyst split in which EBITDA still includes WEX Bank earnings, which was 3.60x on year-end FY2025 debt of USD 3,586.8 million over FY2025 EBITDA.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 186–188; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8, 21–23; calculation C1; calculation C4; calculation C5

The strongest contrary evidence is how little of the consolidated figure the corporate lenders are exposed to and how the company reports its own covenant: leverage under the Credit Agreement was 2.7 times at 2026-09-30 against a 4.75 times maximum, undrawn revolver capacity was USD 1,160.5 million, and WEX Bank's total capital ratio was 13.01% against a 10.00% well-capitalized level. Against that, EBITDA here is calculated rather than issuer-defined, the covenant definition is not printed, revolver availability depends on covenant compliance, and the cash is mostly held by WEX Bank. The view changes if the executed Credit Agreement shows that the covenant EBITDA adds back items beyond those used here, which would explain the gap between 2.7 times and the calculated figures.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22, 37, 55

Debt service coverage is thin on the cash-paid measure: EBITDA covered supplemental cash interest 2.98x in FY2025 against 3.72x in FY2023, falling because cash interest paid rose by USD 85.7 million while EBITDA rose by USD 71.7 million. Cash interest paid exceeds accrued financing interest by about USD 93.0 million, close to the USD 109.0 million of operating interest that EBITDA already deducts, which suggests it includes bank funding interest although the filing does not say so. The cover on accrued financing interest of 4.14x is therefore the better indicator of what the corporate debt costs, and it too has declined from 4.51x. Interim cash interest is not printed, so no cover is stated at 2026-09-30.
Basis: 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139, 141–142; calculation C3; calculation C9

Liquidity depends on funding markets as much as on cash. The revolver has USD 1,160.5 million undrawn, but WEX Bank's FHLB capacity is only USD 14.3 million after advances of USD 1,425.0 million and its federal funds lines are uncommitted. Deposits of USD 6,180.5 million, of which HSA deposits are USD 4,758.0 million, are a non-debt funding source that finances receivables and securities; a loss of depositors or of FHLB collateral capacity would force the group to draw the revolver or shrink receivables, and the revolver is only available while the covenants are met. Nine-month operating cash flow of negative USD 419.6 million reflects receivable growth from higher fuel prices and is financed by deposits and borrowings, not by weaker earnings.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 20–23, 57–59

Corporate refinancing falls outside the next twelve months apart from scheduled term loan amortization of about USD 63.4 million a year. The nearest corporate maturity is in 2028: the Term B-2 Loans of USD 1,364.0 million fall due on 2028-04-01 and, if the 91-day rule in the Credit Agreement note applies, the Term A-1 Loans and revolver would fall due on 2028-01-01 rather than 2029-05-10. The bank funding lines roll far more often: participation debt expires in December 2026 and the securitization facilities in April and October 2027, and each depends on its counterparty renewing it. A downside would begin with lower fuel prices, which cut Mobility payment processing and late fee revenue and take away the fuel price benefit of about 3 percentage points to Mobility's adjusted operating margin that the company cites for 2026; lower EBITDA then lifts leverage while the fixed corporate interest bill is unchanged. The observable tests are the average fuel price, the leverage ratio the company reports each quarter, and the renewal of the securitization and participation lines.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22, 40, 42, 55; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 190

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Reported financial and debt comparison across FY2023 to 2026-09-30 | Ready with Limitations | Statements reconcile except for filing rounding noted in the gaps; no EBITDA is printed; interim cash interest and taxes are not printed | Use the calculated EBITDA with its label; do not compare it with covenant EBITDA. |
| Corporate versus bank-funded leverage | Ready with Limitations | Split rests on the debt note lines; WEX Bank earnings remain inside EBITDA; no bank-only statements | State the perimeter with every leverage figure. |
| Covenant headroom and legal priority | Not Ready | No executed Credit Agreement or Indenture; covenant definitions and guarantor lists are not supplied | Do not infer capacity from consolidated tables; request the executed documents. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 12 |
| Calculated | 10 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 9 |

## Calculations

All amounts are USD millions unless a ratio is stated. Ratios are rounded to two decimals only at the last step.

| Calc ID | Quantity | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Total Debt at carrying value | Short-term debt, net plus long-term debt, net: 1041.1 + 2827.5; 1293.2 + 3082.1; 1326.4 + 3532.0; 1863.5 + 3457.6 | 3868.6; 4375.3; 4858.4; 5321.1 | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 148; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9 |
| C2 | Net debt | Total Debt less cash and cash equivalents: 3868.6 - 975.8; 4375.3 - 595.8; 4858.4 - 905.8; 5321.1 - 593.2 | 2892.8; 3779.5; 3952.6; 4727.9 | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 147; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| C3 | EBITDA (Reported), calculated | Operating income + depreciation and amortization in cost of services + depreciation and amortization in operating expenses: FY2023 647.1 + 104.4 + 171.8; FY2024 686.3 + 134.0 + 187.3; FY2025 663.9 + 152.1 + 179.0; 9M 2025 497.6 + 113.7 + 135.5; 9M 2026 600.1 + 118.3 + 131.2 | 923.3; 1007.6; 995.0; 746.8; 849.6 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| C4 | LTM to 2026-09-30 | EBITDA 995.0 + 849.6 - 746.8; revenue 2660.8 + 2207.5 - 1987.9; financing interest expense 240.6 + 159.0 - 181.8 | 1097.8; 2880.4; 217.8 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| C5 | Bank and securitization funding debt and corporate debt | 2023-12-31: 101.9 + 39.1 + 845.0 = 986.0, corporate 3868.6 - 986.0; 2024-12-31: 86.8 + 49.2 + 1105.0 = 1241.0, corporate 4375.3 - 1241.0; 2025-12-31: 101.4 + 65.2 + 1105.0 = 1271.6, corporate 4858.4 - 1271.6; 2026-09-30: 118.8 + 70.0 + 1425.0 + 195.0 = 1808.8, corporate 5321.1 - 1808.8 | corporate 2882.6; 3134.3; 3586.8; 3512.3 | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 190; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 186; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21 |
| C6 | Principal to carrying value at 2026-09-30 | Instrument principals 787.5 + 1364.0 + 443.3 + 395.0 + 550.0 + 118.8 + 70.0 + 1425.0 + 195.0 = 5348.6; less unamortized issuance costs and discounts 27.5 | 5321.1 carrying value; the printed Credit Agreement total of 2989.7 is 0.1 below its tranche lines (2989.8) | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21 |
| C7 | Principal ladder at 2025-12-31 | Credit Agreement 3070.7 + Senior Notes 550.0 + securitized debt 101.4 + participation debt 65.2 + FHLB advances 1105.0 = 4892.3; printed years 1335.0 + 63.4 + 1396.1 + 1119.2 + 4.5 = 3918.2; thereafter 4892.3 - 3918.2 = 974.1; less issuance costs and discounts 33.9 = 4858.4 | 4892.3; 974.1; 4858.4 | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 186, 190 |
| C8 | Cumulative leverage in the debt stack on LTM EBITDA of 1097.8 | 787.5; 2151.5; 2594.8; 2989.8; 3539.8 divided by 1097.8 | 0.72; 1.96; 2.36; 2.72; 3.22 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21 |
| C9 | Cover on accrued financing interest | EBITDA / financing interest expense: 923.3 / 204.6; 1007.6 / 235.9; 995.0 / 240.6; 1097.8 / 217.8 | 4.51; 4.27; 4.14; 5.04 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| C10 | Term A-1 and revolver springing date | 91 days before 2028-04-01 | 2028-01-01 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 21 |

## Gaps

- WEX prints no EBITDA or adjusted EBITDA in any of the five filings, and the covenant Consolidated EBITDA is defined only by reference to the Credit Agreement; EBITDA in this analysis is calculated from operating income and depreciation and amortization, which restricts every leverage and cover figure to that definition, and no adjusted EBITDA bridge or issuer-adjusted EBITDA is stated. Severity High. Supplying the compliance certificate or the executed Credit Agreement would close it.
- The executed Credit Agreement and Indenture are not supplied, so covenant definitions, the relative priority of the Credit Agreement tranches, the guarantor list for the Senior Notes and the springing maturity rule for the Term A-1 Loans and revolver are taken from the issuer's summaries. Severity Medium. Supplying the executed documents with all amendments would close it.
- The quarterly reports print no supplemental interest paid or taxes paid, so cash interest, interest cover on cash paid and cash taxes are not available for 9M 2025, 9M 2026 or the twelve months to 2026-09-30, and net cash interest cover is stated for the fiscal years only. Severity Medium.
- No separate statements for WEX Bank are supplied; the split between corporate debt and bank funding rests on the instrument lines of the debt note, and EBITDA still includes WEX Bank earnings after its funding cost, so the corporate leverage is an analyst split rather than an issuer perimeter. Severity Medium.
- No maturity table is printed in the quarterly reports, so the maturity ladder is drawn at 2025-12-31 and not at 2026-09-30, and the remainder after 2030 is calculated as principal less the five printed years. Severity Low.
- Several line items print as dashes or are absent in some periods: the loss on extinguishment of the Convertible Notes, long-term deposits, FHLB advances in 2023, borrowings on term loans, proceeds from Senior Notes, Bank Term Funding Program borrowings, repurchase of Convertible Notes and acquisitions are missing for the periods where the source prints a dash or the quarterly report prints no such line, and they are not treated as zero. The quarterly reports aggregate several operating cash flow lines into single lines that the annual report breaks out, so those rows carry values for one kind of period only. Severity Low.
- The filings' own rounding leaves differences of 0.1 that were not forced to zero: nine-month 2026 net cash change, nine-month 2025 closing cash, nine-month 2026 total assets, nine-month 2025 segment revenue, the Credit Agreement tranche lines against their printed total, and several operating, investing and financing line sums. The three affected totals in the statement tables are shown as not supplied with the reason. Severity Low.
- Cash flow lines for capital expenditure are total only; maintenance and growth capex are not supplied, and no segment cash flow is printed. Severity Low.
- Corporate Cash is not printed for 2023-12-31 in the supplied reports; the 2024 annual report states it for 2024-12-31 only. Severity Low.
- Bank-level debt of WEX Bank and the securitization vehicles has no stated legal rank against the Credit Agreement and the Senior Notes and is left out of the debt stack. Severity Medium.

## Next module

The orchestrator selects the next module.
