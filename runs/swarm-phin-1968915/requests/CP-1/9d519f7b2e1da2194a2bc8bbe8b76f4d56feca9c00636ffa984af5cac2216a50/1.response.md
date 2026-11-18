---
issuer_id: phin-1968915
module_id: CP-1
analysis_date: 2026-11-18
run_id: phin-1968915-2026-11-18-credit_snapshot-host
module_status: Complete
---

## Request

Phinia Inc. (issuer id phin-1968915), as of 2026-11-18, credit snapshot pathway. This module builds the financial foundation from the eight supplied issuer filings and earnings releases: statements, debt, liquidity, leverage and interest cover.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_phin-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-13 (signature date; filing date not stated) | e718cc57f88f78c0ea6d29051d20457b1e7f75b821cbc30c724bb4cf4416e9c4 | Balance sheet at 2023-12-31, FY2023 and FY2024 cross-checks, pre-recast segment sales, maturity schedule at 2024-12-31, 2023 revolver borrowings |
| 10-K_2025-12-31_phin-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-12 (signature date; filed that day per the third-quarter 2026 quarterly report) | db100fb2f3e4c00a967e1a79c41ee86f6afd6d948eb8d2535246160daecc4d7a | FY2023 to FY2025 income, cash flow and balance sheet statements, cash paid for interest, debt note and maturity schedule at 2025-12-31, covenants, leases, pension, segment and customer data |
| 10-Q_2026-03-31_phin-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 (signature date; filing date not stated) | 0f40e69e24948f97e2777533d9cda6bef302d1fd29a82948780ba450138893b0 | Balance sheet at 2026-03-31, revolver drawn and availability, cash paid for interest |
| 10-Q_2026-06-30_phin-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 (signature date; filing date not stated) | f82a90b1df51f81c78ddfe2b7705e983b5b0159f6100634835e4ecf29ae7594e | Balance sheet at 2026-06-30, revolver drawn and availability, cash paid for interest, expected stoba price |
| 10-Q_2026-09-30_phin-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 (signature date; filing date not stated) | 81dd7011d80aa25a7c7c0e93793ac997462ff7fdddcc3fb16cbe662222ae61b6 | Nine-month and third-quarter statements, balance sheet at 2026-09-30, debt note, revolver and liquidity, stoba closing |
| EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl | Exhibit 99.1 earnings release for the first quarter of 2026 | 2026-04-30 (stated in the release) | 54cef29b3376054b32a50be48baeda94b8a4df4da8d1622cc04660ec8aa6de81 | Q1 2026 EBITDA and adjusted EBITDA reconciliation, net debt at 2026-03-31 |
| EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl | Exhibit 99.1 earnings release for the second quarter of 2026 | 2026-07-30 (stated in the release) | d739aa01ae10505ce04975a25f73cdbe48d4eb01523370a1bb70d070a2d4970e | Q2 and six-month 2026 EBITDA and adjusted EBITDA reconciliation, net debt at 2026-06-30 |
| EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl | Exhibit 99.1 earnings release for the third quarter of 2026 | 2026-10-29 (stated in the release) | f058eef841c35649ef6da9db6601f6003ed2a32cbe82d314023e70eac20e598b | Q3 and nine-month EBITDA and adjusted EBITDA reconciliation, net debt at 2026-09-30, FY2025 adjusted EBITDA total |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 780228086984190df3093f457800d066451473f9fba2aa489be784059ee1f761 | Source coverage, gaps and the stoba subsequent event that frame this module |

## Findings

### Bottom line

Leverage is moderate and no material term debt matures before 2029, so the main creditor exposure is the stoba purchase that closed after the balance-sheet date, not refinancing. Total debt was 2.25x and net debt 1.35x reported EBITDA at 30 September 2026, before the USD 136 million purchase lifted net debt to USD 793 million, or 1.64x.
Basis: calculation R1; calculation R2; calculation P1; calculation P2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7

Cash interest cover was 7.46x on a net-of-interest-received basis that overstates cover, and adjusted EBITDA is stated only from FY2025, so adjusted ratios rest on one full-year figure of USD 478 million.
Basis: calculation R3; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3

### Leverage and coverage

Net leverage on reported EBITDA rose from 1.03x in FY2023 to 1.45x in FY2025 and was 1.35x at 30 September 2026, because net debt grew from USD 433 million to USD 657 million while last-twelve-months reported EBITDA moved from USD 420 million to USD 485 million. The main driver is shareholder return rather than weaker earnings: dividends and treasury stock purchases were USD 244 million in FY2025 against free cash flow of USD 188 million, and USD 198 million in the nine months of 2026 against USD 160 million, so the gap was funded from cash and the revolver and net debt rose. For creditors this means leverage is a policy outcome that management can move either way, and the next test is whether the stoba purchase is followed by lower returns or by further borrowing.
Basis: calculation N1; calculation N6; calculation M3; calculation F1; calculation F2; calculation F3

Interest cover on cash interest paid fell from 16.15x in FY2023 to 7.15x in FY2025 and was 7.46x on a last-twelve-months basis. The fall reflects gross debt rising from USD 798 million to USD 970 million as the 2024 notes replaced term loans, and FY2023 cash interest covers only part of a year under the post-spin-off capital structure. The measure is net of interest received, so it overstates cover against gross cash interest, which the filings do not state.
Basis: calculation R3; calculation I3; calculation D1; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 7; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 56

The strongest contrary evidence to a moderate view is the pace of shareholder returns and the acquisition after quarter end: both lift net debt without a matching rise in earnings, and the pro forma figure excludes the acquired business's own cash, debt and EBITDA, which no source states. A cut in buybacks, or a stoba contribution that lifts EBITDA as the revised full-year guidance assumes, would strengthen the view; a further debt-funded acquisition or a revolver balance that stays drawn would weaken it. Covenant definitions are not supplied, so no covenant headroom is stated.
Basis: calculation P1; calculation P2; calculation F3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; Source readiness (CP-0)

### Cash flow and liquidity

Operating cash flow was USD 312 million in FY2025, about 74% of reported EBITDA, and capital expenditure of USD 124 million left free cash flow of USD 188 million. In the nine months of 2026 free cash flow was USD 160 million against USD 121 million a year earlier, because operating cash flow was USD 15 million higher and capital expenditure USD 24 million lower. Free cash flow after interest therefore covers dividends but not dividends and buybacks together.
Basis: calculation F1; calculation F2; calculation F3; calculation F4

Liquidity at 30 September 2026 was USD 436 million of cash and USD 377 million of undrawn revolver, and the revolver had been drawn to USD 123 million ahead of the stoba payment, so the cash includes borrowed money that was paid out on 1 October 2026. Of the cash, USD 361 million is held by subsidiaries outside the United States, and the filings do not say whether it is restricted. Liquidity after the payment is not established.
Basis: 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7

Term debt is long-dated: the schedule at 31 December 2025 shows USD 3 million due in 2026, USD 1 million in 2027, USD 1 million in 2028, USD 526 million in 2029 and USD 450 million in 2032. The revolver, USD 123 million drawn at 30 September 2026, matures in July 2028, so the first material maturity after the revolver is the 2029 secured notes. No schedule at 30 September 2026 is supplied.
Basis: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 15; calculation C1

### Data quality and definitions

Reported EBITDA is the issuer's unadjusted EBITDA: stated in the releases for the quarters and nine-month periods, and built from statement components for the fiscal years with the same definition, which reproduces the issuer's figures for both nine-month periods. The issuer's net leverage of 1.3x divides net debt by trailing adjusted EBITDA and is 1.32x on our calculation; on reported EBITDA it is 1.35x. The gap is the issuer's add-backs, mainly restructuring and merger costs, which leave adjusted EBITDA USD 11 million above reported on a last-twelve-months basis.
Basis: calculation E4; calculation C2; calculation B1; calculation B2; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9

Three definition differences are kept visible rather than reconciled: cash paid for interest is net of interest received, the FY2024 annual report shows restructuring inside other operating expense while the FY2025 report splits it out, and the revolver draws appear on two cash flow lines whose split the filings do not state. None changes a leverage figure, but the first overstates interest cover.
Basis: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_phin-20241231.htm.jsonl | Annual report | FY2024 with FY2023 and FY2022; balance sheets 2024-12-31 and 2023-12-31 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 1 (audited) | 2023-12-31 balance sheet, maturity schedule at 2024-12-31, pre-recast segment sales | Superseded by the FY2025 report for FY2024 where presentation differs |
| 10-K_2025-12-31_phin-20251231.htm.jsonl | Annual report | FY2025 with FY2024 and FY2023; balance sheets 2025-12-31 and 2024-12-31 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 1 (audited) | Fiscal-year statements, debt note, maturity schedule, cash interest paid, covenants | No adjusted EBITDA measure; exhibits not supplied |
| 10-Q_2026-03-31_phin-20260331.htm.jsonl | Quarterly report | Three months to 2026-03-31; balance sheet 2026-03-31 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Balance sheet, revolver position, cash interest paid | Three-month statements only |
| 10-Q_2026-06-30_phin-20260630.htm.jsonl | Quarterly report | Three and six months to 2026-06-30; balance sheet 2026-06-30 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Balance sheet, revolver position, cash interest paid | Six-month cash flow only |
| 10-Q_2026-09-30_phin-20260930.htm.jsonl | Quarterly report | Three and nine months to 2026-09-30; balance sheet 2026-09-30 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited) | Latest statements, debt note, revolver, stoba closing | Precedes the stoba payment; no maturity schedule |
| EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl | Earnings release | Three months to 2026-03-31 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited issuer material) | EBITDA and adjusted EBITDA reconciliation | Non-GAAP measures are issuer-defined |
| EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl | Earnings release | Three and six months to 2026-06-30 | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited issuer material) | EBITDA and adjusted EBITDA reconciliation | Non-GAAP measures are issuer-defined |
| EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl | Earnings release | Three and nine months to 2026-09-30; FY2025 and 2026 guidance table | USD | Millions | PHINIA Inc. and consolidated subsidiaries | US GAAP | Tier 2b (unaudited issuer material) | EBITDA and adjusted EBITDA reconciliation, net debt, FY2025 adjusted EBITDA total | FY2025 adjusted EBITDA appears only as a guidance comparator without reconciliation |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PHINIA Inc. | Issuer of the 2029 secured notes and the 2032 notes, borrower under the revolving credit agreement, registrant | 31 December | USD | Millions | PHINIA Inc. and its consolidated subsidiaries; guarantors are certain domestic restricted subsidiaries, not separately reported | US GAAP | FY2022 to FY2025 annual; Q1, H1 and 9M 2026 with 2025 comparatives; Q3 2026 and Q3 2025 quarter figures from the Q3 release |

Subsequent event: the stoba Group acquisition closed on 2026-10-01 for USD 136 million, after the 2026-09-30 balance sheet; it is kept out of every period figure and shown only in the post-balance-sheet table.
Basis: 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Parenthesised amounts written with a minus sign | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | Sign convention | (15) for equity in affiliates' earnings FY2025 | -15 | The checked tables use plain signed numbers; the income statement prints income deductions in parentheses | All income statement columns |
| EBITDA (Reported) built for fiscal years | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | Derivation | Not stated for FY2023 to FY2025 | 420; 430; 422 | Same components as the issuer's EBITDA definition; reproduces the issuer's stated EBITDA for 9M 2026 and 9M 2025 (calculation E4) | FY2023, FY2024, FY2025 |
| Total debt taken as short-term borrowings and current portion plus long-term debt | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | Definition | Two balance sheet lines | One carrying-value total | Debt is balance sheet carrying value, net of issuance costs; finance leases of USD 4 million are inside the lines | All balance sheet columns |
| Last-twelve-months figures constructed from stubs | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 | Derived period | Full year, current stub and prior-year stub | LTM values | Full year plus current stub less prior-year stub, only where all three are stated | 2026-03-31, 2026-06-30, 2026-09-30 |
| Cash interest paid kept net of interest received | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 | None | Interest, net as printed | Interest, net as printed | The filings do not state gross cash interest, so no normalisation is possible | All periods |
| No currency or scale conversion | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | None | USD millions as printed | USD millions | Statements are in one currency and unit | All periods |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 3,500 | 3,403 | 3,483 | 2,594 | 2,730 | 908 | 912 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Cost of sales | 2,776 | 2,647 | 2,721 | 2,025 | 2,122 | 708 | 708 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Gross profit | 724 | 756 | 762 | 569 | 608 | 200 | 204 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Selling, general and administrative expenses | 413 | 442 | 445 | 324 | 354 | 105 | 111 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Restructuring expense | 12 | 14 | 17 | 11 | 16 | 4 | 5 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other operating expense, net | 58 | 41 | 46 | 49 | 5 | 57 | 4 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Operating income | 241 | 259 | 254 | 185 | 233 | 34 | 84 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Equity in affiliates' earnings, net of tax | -10 | -11 | -15 | -11 | -13 | -3 | -4 | USD millions | Reported; parentheses in the filing shown as a minus | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Interest expense | 56 | 99 | 81 | 60 | 62 | 20 | 21 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Interest income | -13 | -16 | -14 | -11 | -6 | -3 | -2 | USD millions | Reported; parentheses in the filing shown as a minus | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other postretirement (income) expense, net | 2 | Not supplied: dash in the filing | 4 | 3 | -4 | 1 | -1 | USD millions | Reported; annual report label is Other postretirement expense | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Earnings before income taxes | 206 | 187 | 198 | 144 | 194 | 19 | 70 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Provision for income taxes | 104 | 108 | 68 | 59 | 50 | 6 | 3 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Net earnings | 102 | 79 | 130 | 85 | 144 | 13 | 67 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Depreciation and tooling amortization | 143 | 132 | 127 | 94 | 98 | 32 | 33 | USD millions | Reported (cash flow reconciliation; Q3 from the release) | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Intangible asset amortization | 28 | 28 | 30 | 22 | 24 | 8 | 8 | USD millions | Reported (cash flow reconciliation; Q3 amortization of acquisition-related intangibles from the release) | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Stock-based compensation expense | 10 | 14 | 18 | 13 | 17 | Not supplied: not stated for the quarter | Not supplied: not stated for the quarter | USD millions | Reported (cash flow reconciliation) | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 |
| EBITDA (Reported) | 420 | 430 | 422 | 309 | 372 | 76 | 130 | USD millions | Fiscal years: Calculated from statement components; quarters and nine months: reported by the issuer as EBITDA, before adjustments | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 |
| EBITDA (Adjusted) | Not supplied: not stated | Not supplied: not stated | 478 | 362 | 380 | 133 | 135 | USD millions | Issuer-adjusted EBITDA; FY2025 is a single total printed in the guidance table, add-backs as in the bridge below | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net cash provided by operating activities | 250 | 308 | 312 | 216 | 231 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Capital expenditures, including tooling outlays | -150 | -105 | -124 | -95 | -71 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Payments for businesses acquired, net of cash acquired | Not supplied: not printed | Not supplied: not printed | -9 | -9 | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Insurance proceeds received for damage to property, plant and equipment | Not supplied: not printed | 3 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Payments for investment in equity securities | -2 | -1 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Proceeds from asset disposals and other, net | 2 | 2 | 1 | 1 | 1 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net cash used in investing activities | -150 | -101 | -132 | -103 | -70 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Proceeds from issuance of long-term debt, net of discount | 708 | 975 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Payments for debt issuance costs | -14 | -15 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Borrowings (repayments) under revolving facilities | 75 | -75 | 1 | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Repayments of debt, including current portion | -4 | -722 | -24 | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net increase in short-term borrowings | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | 121 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Borrowings under Revolving Facility | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | 80 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Repayments under Revolving Facility | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | -80 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Repayment of acquired debt | Not supplied: not printed | Not supplied: not printed | -32 | -32 | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Dividends paid to stockholders | -23 | -44 | -42 | -32 | -33 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Payments for purchase of treasury stock, including excise tax | -24 | -212 | -202 | -172 | -165 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Payments for stock-based compensation items | -1 | -3 | -11 | -9 | -10 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Cash outflows related to debt due to Former Parent | -728 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Cash inflows related to debt due from Former Parent | 36 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net transfers to Former Parent | -5 | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | Not supplied: not printed | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net cash (used in) provided by financing activities | 20 | -96 | -310 | -245 | -87 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Effect of exchange rate changes on cash | -6 | 8 | 5 | -3 | 3 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net (decrease) increase in cash and cash equivalents | 114 | 119 | -125 | -135 | 77 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Cash and cash equivalents at beginning of period | 251 | 365 | 484 | 484 | 359 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Cash and cash equivalents at end of period | 365 | 484 | 359 | 349 | 436 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net Cash from Operating Activities | 250 | 308 | 312 | 216 | 231 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net Cash from Investing Activities | -150 | -101 | -132 | -103 | -70 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net Cash from Financing Activities | 20 | -96 | -310 | -245 | -87 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Net Cash Change | 114 | 119 | -125 | -135 | 77 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Opening Cash | 251 | 365 | 484 | 484 | 359 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Closing Cash | 365 | 484 | 359 | 349 | 436 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| FX Effect on Cash | -6 | 8 | 5 | -3 | 3 | USD millions | Reported | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Cash Interest Paid | 26 | 34 | 59 | 27 | 33 | USD millions | Reported; interest paid net of interest received | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 365 | 484 | 359 | 328 | 370 | 436 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Receivables, net | 1,017 | 817 | 804 | 818 | 853 | 902 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Inventories | 487 | 444 | 473 | 489 | 475 | 485 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Prepayments and other current assets | 58 | 96 | 126 | 135 | 140 | 150 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total current assets | 1,927 | 1,841 | 1,762 | 1,770 | 1,838 | 1,973 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Property, plant and equipment, net | 921 | 843 | 876 | 854 | 841 | 826 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Investments and long-term receivables | 115 | 111 | 145 | 155 | 158 | 156 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Goodwill | 499 | 471 | 509 | 510 | 509 | 510 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other intangible assets, net | 417 | 374 | 398 | 387 | 376 | 366 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other non-current assets | 162 | 128 | 127 | 125 | 120 | 128 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total assets | 4,041 | 3,768 | 3,817 | 3,801 | 3,842 | 3,959 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Short-term borrowings and current portion of long-term debt | 89 | 25 | 3 | 24 | 51 | 124 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Accounts payable | 639 | 522 | 510 | 525 | 529 | 521 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other current liabilities | 420 | 422 | 434 | 421 | 438 | 516 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total current liabilities | 1,148 | 969 | 947 | 970 | 1,018 | 1,161 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Long-term debt | 709 | 963 | 967 | 968 | 968 | 969 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Retirement-related liabilities | 132 | 112 | 141 | 137 | 134 | 130 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Other non-current liabilities | 165 | 150 | 175 | 177 | 181 | 174 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total liabilities | 2,154 | 2,194 | 2,230 | 2,252 | 2,301 | 2,434 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Common stock | 1 | 1 | 1 | 1 | 1 | 1 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Additional paid-in capital | 2,031 | 1,976 | 1,978 | 1,973 | 1,979 | 1,980 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Retained earnings | 9 | 44 | 132 | 158 | 187 | 243 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Accumulated other comprehensive loss | -131 | -217 | -98 | -104 | -104 | -113 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Treasury stock | -23 | -230 | -426 | -479 | -522 | -586 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total equity | 1,887 | 1,574 | 1,587 | 1,549 | 1,541 | 1,525 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total liabilities and equity | 4,041 | 3,768 | 3,817 | 3,801 | 3,842 | 3,959 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total Assets | 4,041 | 3,768 | 3,817 | 3,801 | 3,842 | 3,959 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total Liabilities | 2,154 | 2,194 | 2,230 | 2,252 | 2,301 | 2,434 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total Equity | 1,887 | 1,574 | 1,587 | 1,549 | 1,541 | 1,525 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total Debt | 798 | 988 | 970 | 992 | 1,019 | 1,093 | USD millions | Calculated: short-term borrowings and current portion plus long-term debt, carrying value (calculation D1) | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Cash & Equivalents | 365 | 484 | 359 | 328 | 370 | 436 | USD millions | Reported | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Facility | Revolving credit facility | 123 | 123 | 123 | 500 | First-priority security interest shared with the 2029 secured notes | Equal to the 2029 secured notes | USD | 123 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 2028-07-03 | Not supplied: not stated | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 15; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 101; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 102 |
| 6.750% Senior Secured Notes due 2029 | Senior secured notes | 521 | 525 | Not applicable | Not applicable | First-priority security interest in substantially all assets of the issuer and guarantors, ranking equally with the Facilities | Equal to the Revolving Facility | USD | 521 | Not applicable | 6.750% | Fixed | Not applicable | Not applicable | Not applicable | 2029-04-15 | 0 | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 102; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| 6.625% Senior Notes due 2032 | Senior unsecured notes | 445 | 450 | Not applicable | Not applicable | Unsecured | Below the secured debt | USD | 445 | Not applicable | 6.625% | Fixed | Not applicable | Not applicable | Not applicable | 2032-10-15 | 0 | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| Finance leases | Finance lease liabilities inside debt | 4 | Not supplied: the schedule prints undiscounted payments, not principal | Not applicable | Not applicable | Not supplied: not stated | Not supplied: not stated | USD | 4 | Not applicable | Not supplied: weighted average discount rate 6.2% at 2025-12-31 only | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Not supplied: lease terms run to 2029 | Not supplied: payments of 1 a year in the schedule, principal not stated | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 116; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 117 |

The four rows add to total debt of USD 1,093 million at 30 September 2026 (123 plus 521 plus 445 plus 4), the carrying value on the balance sheet. The weighted average interest rate on all borrowings was 6.7% at 31 December 2025.
Basis: 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 101

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales, LTM to 2026-09-30 | LTM | USD 3,483m | USD 2,730m | USD 2,594m | USD 3,619m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | All three components stated |
| Gross profit, LTM to 2026-09-30 | LTM | USD 762m | USD 608m | USD 569m | USD 801m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | All three components stated |
| Operating income, LTM to 2026-09-30 | LTM | USD 254m | USD 233m | USD 185m | USD 302m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | All three components stated |
| Net earnings, LTM to 2026-09-30 | LTM | USD 130m | USD 144m | USD 85m | USD 189m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | All three components stated |
| EBITDA (Reported), LTM to 2026-03-31 | LTM | USD 422m | USD 115m | USD 102m | USD 435m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl, page 7 | FY2025 component is built from statement components (calculation E3); stubs are issuer-stated |
| EBITDA (Reported), LTM to 2026-06-30 | LTM | USD 422m | USD 242m | USD 233m | USD 431m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl, page 8 | FY2025 component is built from statement components (calculation E3); stubs are issuer-stated |
| EBITDA (Reported), LTM to 2026-09-30 | LTM | USD 422m | USD 372m | USD 309m | USD 485m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 | FY2025 component is built from statement components (calculation E3); stubs are issuer-stated |
| EBITDA (Adjusted), LTM to 2026-03-31 | LTM | USD 478m | USD 115m | USD 103m | USD 490m | Calculated | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl, page 8 | FY2025 component is a single total without reconciliation |
| EBITDA (Adjusted), LTM to 2026-06-30 | LTM | USD 478m | USD 245m | USD 229m | USD 494m | Calculated | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl, page 8 | FY2025 component is a single total without reconciliation |
| EBITDA (Adjusted), LTM to 2026-09-30 | LTM | USD 478m | USD 380m | USD 362m | USD 496m | Calculated | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 | FY2025 component is a single total without reconciliation |
| Cash Interest Paid, LTM to 2026-03-31 | LTM | USD 59m | USD -1m | USD -3m | USD 61m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 23 | Net of interest received; a negative stub is a net receipt |
| Cash Interest Paid, LTM to 2026-06-30 | LTM | USD 59m | USD 33m | USD 29m | USD 63m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 24 | Net of interest received; a negative stub is a net receipt |
| Cash Interest Paid, LTM to 2026-09-30 | LTM | USD 59m | USD 33m | USD 27m | USD 65m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 | Net of interest received; a negative stub is a net receipt |
| Net Cash from Operating Activities, LTM to 2026-09-30 | LTM | USD 312m | USD 231m | USD 216m | USD 327m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 | All three components stated |
| Capital expenditures, LTM to 2026-09-30 | LTM | USD 124m | USD 71m | USD 95m | USD 100m | Calculated | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 | Shown as a positive outflow |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 798 | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71 | 420 | calculation E1 | FY2023 / 2023-12-31 | USD | US$m | 1.90 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 433 | calculation N1 | 420 | calculation E1 | FY2023 / 2023-12-31 | USD | US$m | 1.03 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 420 | calculation E1 | 26 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2023 / 2023-12-31 | USD | US$m | 16.15 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 798 | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71 | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | FY2023 / 2023-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 433 | calculation N1 | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | FY2023 / 2023-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | 26 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year; cash interest is net of interest received |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 988 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | 430 | calculation E2 | FY2024 / 2024-12-31 | USD | US$m | 2.30 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 504 | calculation N2 | 430 | calculation E2 | FY2024 / 2024-12-31 | USD | US$m | 1.17 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 430 | calculation E2 | 34 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2024 / 2024-12-31 | USD | US$m | 12.65 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 988 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 504 | calculation N2 | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | Not supplied: adjusted EBITDA not stated | Not supplied: not stated | 34 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA not stated for the period | Not Calculable | Tier 1 (audited statements) | Adjusted EBITDA not stated for this fiscal year; cash interest is net of interest received |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 970 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | 422 | calculation E3 | FY2025 / 2025-12-31 | USD | US$m | 2.30 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 611 | calculation N3 | 422 | calculation E3 | FY2025 / 2025-12-31 | USD | US$m | 1.45 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 422 | calculation E3 | 59 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2025 / 2025-12-31 | USD | US$m | 7.15 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from statement components; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 970 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | 478 | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3 | FY2025 / 2025-12-31 | USD | US$m | 2.03 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs not reconciled for FY2025 |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 611 | calculation N3 | 478 | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3 | FY2025 / 2025-12-31 | USD | US$m | 1.28 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs not reconciled for FY2025 |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | 478 | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3 | 59 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 | FY2025 / 2025-12-31 | USD | US$m | 8.10 | Calculated | Tier 1 (audited statements) | Issuer-adjusted EBITDA; add-backs not reconciled for FY2025; cash interest is net of interest received |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 992 | 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2 | 435 | calculation M1 | 2026-03-31 | USD | US$m | 2.28 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 664 | calculation N4 | 435 | calculation M1 | 2026-03-31 | USD | US$m | 1.53 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 435 | calculation M1 | 61 | calculation I1 | 2026-03-31 | USD | US$m | 7.13 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 992 | 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2 | 490 | calculation A1 | 2026-03-31 | USD | US$m | 2.02 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 664 | calculation N4 | 490 | calculation A1 | 2026-03-31 | USD | US$m | 1.36 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | 490 | calculation A1 | 61 | calculation I1 | 2026-03-31 | USD | US$m | 8.03 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs; cash interest is net of interest received |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 1,019 | 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2 | 431 | calculation M2 | 2026-06-30 | USD | US$m | 2.36 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 649 | calculation N5 | 431 | calculation M2 | 2026-06-30 | USD | US$m | 1.51 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 431 | calculation M2 | 63 | calculation I2 | 2026-06-30 | USD | US$m | 6.84 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 1,019 | 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2 | 494 | calculation A2 | 2026-06-30 | USD | US$m | 2.06 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 649 | calculation N5 | 494 | calculation A2 | 2026-06-30 | USD | US$m | 1.31 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | 494 | calculation A2 | 63 | calculation I2 | 2026-06-30 | USD | US$m | 7.84 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs; cash interest is net of interest received |
| Total debt / EBITDA | Total debt divided by reported EBITDA | 1,093 | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | 485 | calculation M3 | 2026-09-30 | USD | US$m | 2.25 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| Net debt / EBITDA | Net debt divided by reported EBITDA | 657 | calculation N6 | 485 | calculation M3 | 2026-09-30 | USD | US$m | 1.35 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs |
| EBITDA / cash interest | Reported EBITDA divided by cash interest paid | 485 | calculation M3 | 65 | calculation I3 | 2026-09-30 | USD | US$m | 7.46 | Calculated | Tier 2b (unaudited) | LTM reported EBITDA from issuer-stated stubs; cash interest is net of interest received |
| Total debt / adjusted EBITDA | Total debt divided by issuer-adjusted EBITDA | 1,093 | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 | 496 | calculation A3 | 2026-09-30 | USD | US$m | 2.20 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Net debt / adjusted EBITDA | Net debt divided by issuer-adjusted EBITDA | 657 | calculation N6 | 496 | calculation A3 | 2026-09-30 | USD | US$m | 1.32 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs |
| Adjusted EBITDA / cash interest | Issuer-adjusted EBITDA divided by cash interest paid | 496 | calculation A3 | 65 | calculation I3 | 2026-09-30 | USD | US$m | 7.63 | Calculated | Tier 2b (unaudited) | Issuer-adjusted EBITDA; LTM built from issuer-stated stubs; cash interest is net of interest received |
| Gross margin | Calculated Value = Numerator Value / Denominator Value x 100 | 762 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | 3,483 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2025 | USD | % | 21.88 | Calculated | Tier 1 (audited statements) | Reported gross profit over net sales |
| EBITDA margin (reported) | Calculated Value = Numerator Value / Denominator Value x 100 | 422 | calculation E3 | 3,483 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2025 | USD | % | 12.12 | Calculated | Tier 1 (audited statements) | Reported EBITDA built from components |
| EBITDA margin (reported) | Calculated Value = Numerator Value / Denominator Value x 100 | 485 | calculation M3 | 3,619 | calculation L1 | LTM to 2026-09-30 | USD | % | 13.40 | Calculated | Tier 2b (unaudited) | LTM figures |
| Capital expenditures to net sales | Calculated Value = Numerator Value / Denominator Value x 100 | 124 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74 | 3,483 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2025 | USD | % | 3.56 | Calculated | Tier 1 (audited statements) | Capital expenditures including tooling outlays |
| Free cash flow conversion | Calculated Value = Numerator Value / Denominator Value x 100 | 188 | calculation F1 | 422 | calculation E3 | FY2025 | USD | % | 44.55 | Calculated | Tier 1 (audited statements) | Free cash flow is operating cash flow less capital expenditures |
| Operating cash flow to total debt | Calculated Value = Numerator Value / Denominator Value x 100 | 312 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74 | 970 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2025 | USD | % | 32.16 | Calculated | Tier 1 (audited statements) | Operating cash flow before dividends and buybacks |
| Net sales growth | Calculated Value = Numerator Value / Denominator Value - 1 | 3,483 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | 3,403 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2025 | USD | % | 2.35 | Calculated | Tier 1 (audited statements) | Growth on a reported basis, no currency adjustment |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- |
| Segment net sales (period flow) | Fuel Systems net sales, recast, USD millions | 2,417 | 2,275 | 2,320 | Down then up | FY2024 fell by 142 and FY2025 rose by 45; the segment is named Power Systems from 2026-09-01. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 8 |
| Segment net sales (period flow) | Aftermarket net sales, recast, USD millions | 1,231 | 1,282 | 1,306 | Up | Rose in both years; the segment is named Aftermarket Solutions from 2026-09-01. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 8 |
| Segment net sales (period flow) | Inter-segment eliminations, USD millions | -148 | -154 | -143 | Not a trend | Eliminations are deducted to reach consolidated net sales. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 8 |
| Customer concentration (rate) | General Motors share of net sales, % | 16 | 17 | 18 | Up | No other customer exceeded 10% in any year. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 |
| Investment (rate) | Net R&D costs as a share of net sales, % | 3.1 | 3.3 | 3.0 | Down in FY2025 | FY2025 is the lowest of the three years. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 12 |
| Margin (rate, issuer-reported) | Adjusted EBITDA margin, % | Not supplied: not stated | Not supplied: not stated | 13.7 | Not a trend | The FY2025 figure is a guidance comparator; 9M 2026 is 13.9% and 9M 2025 is 14.0%. Source: EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Geography (rate) | Share of net sales generated in the United States, % | Not supplied: not stated | Not supplied: not stated | 37 | Not a trend | 63% was generated outside the United States in FY2025. Source: 10-K_2025-12-31_phin-20251231.htm.jsonl, page 10 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net leverage | Net debt over reported EBITDA | Net debt over trailing twelve-month adjusted EBITDA, printed as 1.3x at 2026-09-30 | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 | 2026-09-30 | Medium: 1.35x against 1.32x | Fundamental credit | Show both; the reported-EBITDA figure is the chart figure (calculations R2 and C2) |
| EBITDA | Reported EBITDA, unadjusted | Adjusted EBITDA adds back restructuring, separation-related and merger costs, other postretirement items and equity earnings | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 | FY2025 and 2026 periods | Medium: USD 8 million in 9M 2026 (380 less 372) | Fundamental credit | Keep the two labelled apart; FY2025 adjusted EBITDA is one printed total |
| Cash interest | Cash interest paid, gross | Interest, net of interest received | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 | All periods | Medium: understates gross interest paid, overstates cover | Fundamental credit | Label the net basis; gross not stated |
| Debt | Carrying value, net of issuance costs | The release's total debt equals carrying value; principal is USD 981 million at 2025-12-31 against carrying value USD 970 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 7 | 2025-12-31 | Low: USD 11 million of issuance costs | Fundamental credit | Use carrying value; reconciling item shown in the principal to carrying value table |
| Operating expense line | Restructuring shown separately | FY2024 annual report shows restructuring inside other operating expense, net (USD 55 million) | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 | FY2023, FY2024 | Low: totals agree | Business & governance | Use the FY2025 presentation (restructuring USD 14 million and other operating expense USD 41 million for FY2024) |
| Segments | Consistent segment perimeter | OES business moved from Aftermarket to Fuel Systems in Q4 2025 with prior periods recast; renamed Power Systems and Aftermarket Solutions from 2026-09-01 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 8; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 22; 10-K_2024-12-31_phin-20241231.htm.jsonl, page 6 | FY2023, FY2024 | Low: consolidated figures unchanged | Business & governance | Use the recast figures of the FY2025 report |
| Revolver cash flow lines | One line per facility movement | Borrowings and repayments of USD 80 million each and a net increase in short-term borrowings of USD 121 million, against a revolver balance of USD 123 million | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14 | 9M 2026 | Low: totals tie | Fundamental credit | Show lines as printed; the split is not stated |
| Stoba purchase price | Price at closing | About USD 150 million expected in the Q2 report; USD 136 million at closing in the Q3 report | 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 37; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7 | 2026-10-01 | Medium: USD 14 million | Business & governance | Use USD 136 million; the reason for the difference is not stated |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and interest cover, FY2023 to 2026-09-30 | Ready with Limitations | Reported EBITDA built from components for fiscal years; adjusted EBITDA missing for FY2023 and FY2024; cash interest net | Label the identities; supply the Q4 2025 release for a stated FY2025 reconciliation |
| Liquidity | Ready with Limitations | FY2023 availability not stated; letters of credit not stated; 2026-09-30 figures precede the stoba payment | Supply post-closing liquidity and letters of credit outstanding |
| Debt maturities | Ready with Limitations | Schedule is at 2025-12-31 only; the drawn revolver at 2026-09-30 is not in it | Supply a maturity schedule at 2026-09-30 |
| Financials and credit metrics | Ready | Statements tie; LTM built from stated stubs | None |
| Debt stack | Ready with Limitations | Finance leases not placed; revolver pricing not stated; guarantors not named | Supply the credit agreement and indentures |
| Post-balance-sheet view of the stoba purchase | Ready with Limitations | Acquired cash, debt and EBITDA not stated | Supply stoba's closing balance sheet or issuer pro forma figures |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2023-01-01 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1.90 | 1.03 | x | Reported-EBITDA basis; reported EBITDA built from statement components; balance sheet debt at carrying value |
| FY2024 / 2024-12-31 | 2.30 | 1.17 | x | Reported-EBITDA basis; reported EBITDA built from statement components; balance sheet debt at carrying value |
| FY2025 / 2025-12-31 | 2.30 | 1.45 | x | Reported-EBITDA basis; reported EBITDA built from statement components; balance sheet debt at carrying value |
| 2026-03-31 | 2.28 | 1.53 | x | Reported-EBITDA basis; LTM reported EBITDA built from issuer-stated stubs; balance sheet debt at carrying value |
| 2026-06-30 | 2.36 | 1.51 | x | Reported-EBITDA basis; LTM reported EBITDA built from issuer-stated stubs; balance sheet debt at carrying value |
| 2026-09-30 | 2.25 | 1.35 | x | Reported-EBITDA basis; LTM reported EBITDA built from issuer-stated stubs; balance sheet debt at carrying value |

The figures use reported EBITDA, not the issuer's adjusted EBITDA, and the 2026-09-30 row precedes the stoba payment.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 16.15 | x | Reported EBITDA over cash interest paid; fiscal-year figures; cash interest is net of interest received, so cover is overstated against gross interest |
| FY2024 / 2024-12-31 | 12.65 | x | Reported EBITDA over cash interest paid; fiscal-year figures; cash interest is net of interest received, so cover is overstated against gross interest |
| FY2025 / 2025-12-31 | 7.15 | x | Reported EBITDA over cash interest paid; fiscal-year figures; cash interest is net of interest received, so cover is overstated against gross interest |
| 2026-03-31 | 7.13 | x | Reported EBITDA over cash interest paid; last-twelve-months figures; cash interest is net of interest received, so cover is overstated against gross interest |
| 2026-06-30 | 6.84 | x | Reported EBITDA over cash interest paid; last-twelve-months figures; cash interest is net of interest received, so cover is overstated against gross interest |
| 2026-09-30 | 7.46 | x | Reported EBITDA over cash interest paid; last-twelve-months figures; cash interest is net of interest received, so cover is overstated against gross interest |

Cash interest is paid net of interest received, so each figure overstates cover relative to gross cash interest, and FY2023 precedes a full year under the current capital structure.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 365 | Not supplied: availability at 2023-12-31 not stated; the FY2024 report states USD 75 million of revolver borrowings at that date | US$m | Cash as printed. 10-K_2024-12-31_phin-20241231.htm.jsonl, page 98 |
| FY2024 / 2024-12-31 | 484 | 499 | US$m | Cash as printed; undrawn revolver availability as stated by the issuer, no letters of credit stated. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 101 |
| FY2025 / 2025-12-31 | 359 | 500 | US$m | Cash as printed; undrawn revolver availability as stated by the issuer, no letters of credit stated. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 101 |
| 2026-03-31 | 328 | 480 | US$m | Cash as printed; undrawn revolver availability as stated by the issuer, no letters of credit stated. 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 15 |
| 2026-06-30 | 370 | 450 | US$m | Cash as printed; undrawn revolver availability as stated by the issuer, no letters of credit stated. 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 16 |
| 2026-09-30 | 436 | 377 | US$m | Cash as printed; undrawn revolver availability as stated by the issuer, no letters of credit stated. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 15 |

Cash at 2026-09-30 includes revolver borrowings drawn to fund the stoba purchase paid on 2026-10-01, so the 2026-09-30 row overstates liquidity after that date.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 3 | US$m | Principal due in 2026 per the schedule at 2025-12-31. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| FY2027 | 1 | US$m | Principal due in 2027 per the schedule at 2025-12-31. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| FY2028 | 1 | US$m | Principal due in 2028 per the schedule at 2025-12-31; the revolver, undrawn at that date, matures in July 2028. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| FY2029 | 526 | US$m | Principal due in 2029 per the schedule at 2025-12-31: the 2029 secured notes of USD 525 million and other debt. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| FY2030 | 0 | US$m | The schedule prints a dash for 2030; the printed total confirms no principal falls due. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |
| FY2032 | 450 | US$m | The schedule's after-2030 amount of USD 450 million, which is the 2032 senior notes maturing 2032-10-15. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |

The schedule is at 2025-12-31, the latest supplied; it does not include the USD 123 million revolver draw at 2026-09-30.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM to 2026-09-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Net sales | 3,500 | 3,403 | 3,483 | 3,619 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Gross profit | 724 | 756 | 762 | 801 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Operating income | 241 | 259 | 254 | 302 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Net earnings | 102 | 79 | 130 | 189 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| EBITDA (reported) | 420 | 430 | 422 | 485 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| EBITDA (issuer-adjusted) | Not supplied: not stated | Not supplied: not stated | 478 | 496 | USD millions | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Net cash from operating activities | 250 | 308 | 312 | 327 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Capital expenditures | 150 | 105 | 124 | 100 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Free cash flow (operating cash flow less capital expenditures) | 100 | 203 | 188 | 227 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| Total debt (carrying value) | 798 | 988 | 970 | 1,093 | USD millions | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Cash and cash equivalents | 365 | 484 | 359 | 436 | USD millions | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Net debt | 433 | 504 | 611 | 657 | USD millions | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| Total debt / EBITDA (reported) | 1.90 | 2.30 | 2.30 | 2.25 | x | calculation R1 |
| Net debt / EBITDA (reported) | 1.03 | 1.17 | 1.45 | 1.35 | x | calculation R2 |
| EBITDA / cash interest | 16.15 | 12.65 | 7.15 | 7.46 | x | calculation R3 |
| Total debt / adjusted EBITDA | Not supplied: adjusted EBITDA not stated | Not supplied: adjusted EBITDA not stated | 2.03 | 2.20 | x | calculation R4 |
| Net debt / adjusted EBITDA | Not supplied: adjusted EBITDA not stated | Not supplied: adjusted EBITDA not stated | 1.28 | 1.32 | x | calculation R5 |
| Cash plus undrawn revolver | Not supplied: availability not stated | 983 | 859 | 813 | USD millions | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 101; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 37 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 798 | 365 | 433 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases are inside the debt lines; principal not stated at this date; no pro forma adjustment. 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71 |
| FY2024 / 2024-12-31 | 988 | 484 | 504 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases are inside the debt lines; principal not stated at this date; no pro forma adjustment. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| FY2025 / 2025-12-31 | 970 | 359 | 611 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases of USD 4 million are inside the debt lines; principal USD 981 million (schedule at 2025-12-31); no pro forma adjustment. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| 2026-03-31 | 992 | 328 | 664 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases are inside the debt lines; principal not stated at this date; no pro forma adjustment. 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2 |
| 2026-06-30 | 1,019 | 370 | 649 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases are inside the debt lines; principal not stated at this date; no pro forma adjustment. 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2 |
| 2026-09-30 | 1,093 | 436 | 657 | US$m | Reported as of the balance sheet date; gross debt is short-term borrowings and current portion plus long-term debt at carrying value, finance leases of USD 4 million are inside the debt lines; principal not stated at this date; no pro forma adjustment. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 981 | -11 | 970 | US$m | Principal is the sum of the debt maturing rows; the reconciling item is debt issuance costs of USD 11 million deducted in the schedule (calculation C1). 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Acquisition of the stoba Group closed, purchase price paid from cash on hand | 2026-10-01 | 136 | 793 | 1.64 | US$m | Net debt at 2026-09-30 plus the USD 136 million purchase price (calculations P1 and P2); leverage is on the same LTM reported EBITDA as the 2026-09-30 figure. No issuer-stated pro forma figure exists, as the source readiness review also found, so this row is calculated from the stated price. Not reflected: stoba's own cash, debt and EBITDA, which no source states, and any payment after closing. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 37 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 3,500 | 420 | US$m | Twelve-month period (fiscal year); the EBITDA column is reported EBITDA, the issuer's unadjusted definition built from statement components for fiscal years, not issuer-adjusted EBITDA; no identity is mixed across rows. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| FY2024 / 2024-12-31 | 3,403 | 430 | US$m | Twelve-month period (fiscal year); the EBITDA column is reported EBITDA, the issuer's unadjusted definition built from statement components for fiscal years, not issuer-adjusted EBITDA; no identity is mixed across rows. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| FY2025 / 2025-12-31 | 3,483 | 422 | US$m | Twelve-month period (fiscal year); the EBITDA column is reported EBITDA, the issuer's unadjusted definition built from statement components for fiscal years, not issuer-adjusted EBITDA; no identity is mixed across rows. 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| 2026-09-30 | 3,619 | 485 | US$m | Twelve-month period (last twelve months to 2026-09-30 (calculations L1 and M3)); the EBITDA column is reported EBITDA, the issuer's unadjusted definition built from statement components for fiscal years, not issuer-adjusted EBITDA; no identity is mixed across rows. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |

The EBITDA column is reported EBITDA, not the issuer's adjusted measure, which is stated for FY2025 and 2026 periods only.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving Facility (drawn) | 1 | Yes | 123 | 1.33 | US$m | Drawn amount at 2026-09-30 of a USD 500 million commitment; first-priority security shared with the 2029 secured notes; borrower PHINIA Inc. with certain subsidiary guarantors; cumulative leverage is through rank 1 (calculation K1). 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 15; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 102 |
| 6.750% Senior Secured Notes due 2029 | 1 | Yes | 521 | 1.33 | US$m | Carrying value; USD 525 million par; issuer PHINIA Inc., guaranteed by certain domestic restricted subsidiaries; ranks equally with the Facilities; cumulative leverage is through rank 1. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 102 |
| 6.625% Senior Notes due 2032 | 2 | No | 445 | 2.25 | US$m | Carrying value; USD 450 million par; senior unsecured, guaranteed by the same class of subsidiaries; cumulative leverage is through rank 2 over reported LTM EBITDA of USD 485 million. 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103 |

Finance leases of USD 4 million are inside total debt but left out because no source states their rank or security.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months 2026 | 372 | US$m | Opening measure: the issuer's unadjusted EBITDA for the nine months to 2026-09-30. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Restructuring expense | 16 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Merger and acquisition costs | 5 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Losses (gains) for other one-time events | 1 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Separation-related costs | 3 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Other postretirement (income) expense, net | -4 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Equity in affiliates' earnings, net of tax | -13 | US$m | Issuer add-back or deduction as stated in the reconciliation; a negative reduces the measure. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| Adjusted EBITDA, nine months 2026 | 380 | US$m | Closing measure: the issuer's adjusted EBITDA; the steps add exactly to it. EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |

The bridge is for nine months 2026 because the issuer prints no full-year reconciliation for FY2025.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 36 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 25 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 7 |

## Calculations

Each calculation below shows its inputs and result in USD million unless stated, and every ratio is rounded half up to two decimals from the exact quotient.

| Calc ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| N1 | Net debt at FY2023 / 2023-12-31 | Total debt USD 798 million less cash USD 365 million | USD 433 million | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71 |
| N2 | Net debt at FY2024 / 2024-12-31 | Total debt USD 988 million less cash USD 484 million | USD 504 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| N3 | Net debt at FY2025 / 2025-12-31 | Total debt USD 970 million less cash USD 359 million | USD 611 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| N4 | Net debt at 2026-03-31 | Total debt USD 992 million less cash USD 328 million | USD 664 million | 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2 |
| N5 | Net debt at 2026-06-30 | Total debt USD 1,019 million less cash USD 370 million | USD 649 million | 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2 |
| N6 | Net debt at 2026-09-30 | Total debt USD 1,093 million less cash USD 436 million | USD 657 million | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| D1 | Total debt as the sum of the balance sheet debt lines | FY2023 / 2023-12-31: USD 89 million plus USD 709 million; FY2024 / 2024-12-31: USD 25 million plus USD 963 million; FY2025 / 2025-12-31: USD 3 million plus USD 967 million; 2026-03-31: USD 24 million plus USD 968 million; 2026-06-30: USD 51 million plus USD 968 million; 2026-09-30: USD 124 million plus USD 969 million | FY2023 / 2023-12-31: USD 798 million; FY2024 / 2024-12-31: USD 988 million; FY2025 / 2025-12-31: USD 970 million; 2026-03-31: USD 992 million; 2026-06-30: USD 1,019 million; 2026-09-30: USD 1,093 million | 10-K_2024-12-31_phin-20241231.htm.jsonl, page 71; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 2; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| E1 | EBITDA (Reported) FY2023 from statement components | Net earnings 102 plus depreciation and tooling amortization 143 plus intangible asset amortization 28 plus interest expense 56 plus provision for income taxes 104 plus interest income as printed -13 (USD million) | USD 420 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 |
| E2 | EBITDA (Reported) FY2024 from statement components | Net earnings 79 plus depreciation and tooling amortization 132 plus intangible asset amortization 28 plus interest expense 99 plus provision for income taxes 108 plus interest income as printed -16 (USD million) | USD 430 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 |
| E3 | EBITDA (Reported) FY2025 from statement components | Net earnings 130 plus depreciation and tooling amortization 127 plus intangible asset amortization 30 plus interest expense 81 plus provision for income taxes 68 plus interest income as printed -14 (USD million) | USD 422 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123 |
| E4 | Check of the derivation against the issuer's stated EBITDA for nine months 2026 and 2025 | Components give 372 and 309 (USD million); the release states EBITDA of 372 and 309 | Equal in both periods, so the same definition is used for the fiscal years | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 |
| L1 | LTM net sales to 2026-09-30 | FY2025 3,483 plus 9M 2026 2,730 less 9M 2025 2,594 (USD million) | USD 3,619 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| L2 | LTM gross profit to 2026-09-30 | FY2025 762 plus 9M 2026 608 less 9M 2025 569 (USD million) | USD 801 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| L3 | LTM operating income to 2026-09-30 | FY2025 254 plus 9M 2026 233 less 9M 2025 185 (USD million) | USD 302 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| L4 | LTM net earnings to 2026-09-30 | FY2025 130 plus 9M 2026 144 less 9M 2025 85 (USD million) | USD 189 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 2 |
| L5 | LTM net cash from operating activities to 2026-09-30 | FY2025 312 plus 9M 2026 231 less 9M 2025 216 (USD million) | USD 327 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| L6 | LTM capital expenditures to 2026-09-30 | FY2025 124 plus 9M 2026 71 less 9M 2025 95 (USD million) | USD 100 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| M1 | LTM EBITDA (Reported) to 2026-03-31 | FY2025 422 plus Q1 2026 115 less Q1 2025 102 (USD million) | USD 435 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl, page 7 |
| M2 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 422 plus H1 2026 242 less H1 2025 233 (USD million) | USD 431 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl, page 8 |
| M3 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 422 plus 9M 2026 372 less 9M 2025 309 (USD million) | USD 485 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| A1 | LTM EBITDA (Adjusted) to 2026-03-31 | FY2025 478 plus Q1 2026 115 less Q1 2025 103 (USD million) | USD 490 million | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-04-30_q120268kex991pressrelease.htm.jsonl, page 8 |
| A2 | LTM EBITDA (Adjusted) to 2026-06-30 | FY2025 478 plus H1 2026 245 less H1 2025 229 (USD million) | USD 494 million | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-07-30_q220268kex991pressrelease.htm.jsonl, page 8 |
| A3 | LTM EBITDA (Adjusted) to 2026-09-30 | FY2025 478 plus 9M 2026 380 less 9M 2025 362 (USD million) | USD 496 million | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| I1 | LTM cash interest paid, net of interest received, to 2026-03-31 | FY2025 59 plus Q1 2026 -1 less Q1 2025 -3 (USD million; a negative is a net receipt) | USD 61 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-03-31_phin-20260331.htm.jsonl, page 23 |
| I2 | LTM cash interest paid, net of interest received, to 2026-06-30 | FY2025 59 plus H1 2026 33 less H1 2025 29 (USD million; a negative is a net receipt) | USD 63 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-06-30_phin-20260630.htm.jsonl, page 24 |
| I3 | LTM cash interest paid, net of interest received, to 2026-09-30 | FY2025 59 plus 9M 2026 33 less 9M 2025 27 (USD million; a negative is a net receipt) | USD 65 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 123; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 24 |
| R1 | Total debt / EBITDA (reported) | FY2023 / 2023-12-31: 798 / 420; FY2024 / 2024-12-31: 988 / 430; FY2025 / 2025-12-31: 970 / 422; 2026-03-31: 992 / 435; 2026-06-30: 1,019 / 431; 2026-09-30: 1,093 / 485 (USD million) | FY2023 / 2023-12-31: 1.90; FY2024 / 2024-12-31: 2.30; FY2025 / 2025-12-31: 2.30; 2026-03-31: 2.28; 2026-06-30: 2.36; 2026-09-30: 2.25 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| R2 | Net debt / EBITDA (reported) | FY2023 / 2023-12-31: 433 / 420; FY2024 / 2024-12-31: 504 / 430; FY2025 / 2025-12-31: 611 / 422; 2026-03-31: 664 / 435; 2026-06-30: 649 / 431; 2026-09-30: 657 / 485 (USD million) | FY2023 / 2023-12-31: 1.03; FY2024 / 2024-12-31: 1.17; FY2025 / 2025-12-31: 1.45; 2026-03-31: 1.53; 2026-06-30: 1.51; 2026-09-30: 1.35 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| R3 | EBITDA (reported) / cash interest paid | FY2023 / 2023-12-31: 420 / 26; FY2024 / 2024-12-31: 430 / 34; FY2025 / 2025-12-31: 422 / 59; 2026-03-31: 435 / 61; 2026-06-30: 431 / 63; 2026-09-30: 485 / 65 (USD million) | FY2023 / 2023-12-31: 16.15; FY2024 / 2024-12-31: 12.65; FY2025 / 2025-12-31: 7.15; 2026-03-31: 7.13; 2026-06-30: 6.84; 2026-09-30: 7.46 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| R4 | Total debt / adjusted EBITDA | FY2023 / 2023-12-31: adjusted EBITDA not stated; FY2024 / 2024-12-31: adjusted EBITDA not stated; FY2025 / 2025-12-31: 970 / 478; 2026-03-31: 992 / 490; 2026-06-30: 1,019 / 494; 2026-09-30: 1,093 / 496 (USD million) | FY2023 / 2023-12-31: not calculable; FY2024 / 2024-12-31: not calculable; FY2025 / 2025-12-31: 2.03; 2026-03-31: 2.02; 2026-06-30: 2.06; 2026-09-30: 2.20 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| R5 | Net debt / adjusted EBITDA | FY2023 / 2023-12-31: adjusted EBITDA not stated; FY2024 / 2024-12-31: adjusted EBITDA not stated; FY2025 / 2025-12-31: 611 / 478; 2026-03-31: 664 / 490; 2026-06-30: 649 / 494; 2026-09-30: 657 / 496 (USD million) | FY2023 / 2023-12-31: not calculable; FY2024 / 2024-12-31: not calculable; FY2025 / 2025-12-31: 1.28; 2026-03-31: 1.36; 2026-06-30: 1.31; 2026-09-30: 1.32 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| R6 | Adjusted EBITDA / cash interest paid | FY2023 / 2023-12-31: adjusted EBITDA not stated; FY2024 / 2024-12-31: adjusted EBITDA not stated; FY2025 / 2025-12-31: 478 / 59; 2026-03-31: 490 / 61; 2026-06-30: 494 / 63; 2026-09-30: 496 / 65 (USD million) | FY2023 / 2023-12-31: not calculable; FY2024 / 2024-12-31: not calculable; FY2025 / 2025-12-31: 8.10; 2026-03-31: 8.03; 2026-06-30: 7.84; 2026-09-30: 7.63 | calculation N1; calculation N2; calculation N3; calculation N4; calculation N5; calculation N6; calculation E1; calculation E2; calculation E3; calculation M1; calculation M2; calculation M3; calculation A1; calculation A2; calculation A3; calculation I1; calculation I2; calculation I3 |
| F1 | Free cash flow FY2025, FY2024, FY2023 (operating cash flow less capital expenditures) | FY2025 312 less 124; FY2024 308 less 105; FY2023 250 less 150 (USD million) | FY2025 USD 188 million; FY2024 USD 203 million; FY2023 USD 100 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74 |
| F2 | Free cash flow nine months 2026 and 2025 | 9M 2026 231 less 71; 9M 2025 216 less 95 (USD million) | 9M 2026 USD 160 million; 9M 2025 USD 121 million | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| F3 | Capital returned to shareholders (dividends plus treasury stock purchases) against free cash flow | FY2025: 42 plus 202 = 244 against 188; 9M 2026: 33 plus 165 = 198 against 160 (USD million) | FY2025 returns exceed free cash flow by USD 56 million; 9M 2026 by USD 38 million | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 3 |
| F4 | Operating cash flow as a share of reported EBITDA, FY2025 | 312 / 422 | 74% | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 74; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| P1 | Pro forma net debt after the stoba purchase paid on 2026-10-01 | Net debt at 2026-09-30 USD 657 million plus purchase price USD 136 million | USD 793 million | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 37 |
| P2 | Pro forma net debt / EBITDA (reported) | 793 / 485 (the same LTM EBITDA as the 2026-09-30 net leverage) | 1.64 | calculation P1; calculation M3 |
| C1 | Debt principal to carrying value at 2025-12-31 | Principal 3 + 1 + 1 + 526 + 0 + 450 = 981; reconciling item: debt issuance costs -11 (USD million) | USD 970 million, equal to total debt at 2025-12-31 | 10-K_2025-12-31_phin-20251231.htm.jsonl, page 103; 10-K_2025-12-31_phin-20251231.htm.jsonl, page 73 |
| C2 | Net leverage on the issuer's definition (net debt divided by LTM adjusted EBITDA) at 2026-09-30 | 657 / 496 | 1.32x; the release prints 1.3x | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 7 |
| K1 | Cumulative debt through rank 1 and rank 2 over reported LTM EBITDA to 2026-09-30 | Rank 1: revolver drawn 123 plus 2029 secured notes carrying value 521 = 644; rank 2: plus 2032 notes carrying value 445 = 1,089; EBITDA 485 (USD million) | Rank 1: 1.33; rank 2: 2.25 | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14 |
| K2 | Debt not placed in the stack | Total debt 1,093 less rank 1 and rank 2 debt 1,089 (USD million) | USD 4 million of finance leases | 10-Q_2026-09-30_phin-20260930.htm.jsonl, page 14 |
| B1 | EBITDA bridge, nine months 2026 | Reported 372 plus add-backs 16 + 5 + 1 + 3 = 25, less deductions 4 + 13 = 17 (USD million) | USD 380 million adjusted, a net USD 8 million above reported | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |
| B2 | Adjusted over reported EBITDA, LTM to 2026-09-30 | 496 less 485 (USD million) | USD 11 million | EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 3; EX-99.1_2026-10-29_q320268kex991pressrelease.htm.jsonl, page 9 |

## Gaps

- Adjusted EBITDA is not stated for FY2023 or FY2024, and FY2025 appears only as a single total of USD 478 million in the third-quarter release, so adjusted leverage and cover for FY2023 and FY2024 are not supplied and the adjusted trend rests on one full-year figure; severity High; the fourth-quarter 2025 release or reconciliations for FY2024 and FY2025 would close it.
- Reported EBITDA for FY2023 to FY2025 is built from statement components because the annual reports do not state it; the same build reproduces the issuer's stated EBITDA for both nine-month periods, so severity is Medium; a stated FY2025 EBITDA would close it.
- The only maturity schedules are at 2025-12-31 and 2024-12-31, so the debt maturity chart does not show the USD 123 million revolver draw at 2026-09-30 or its July 2028 maturity; severity High; a schedule at 2026-09-30 would close it.
- The stoba purchase closed on 2026-10-01, after the latest balance sheet, and no source states stoba's own cash, debt or EBITDA, cash paid net of cash acquired, or liquidity after closing, so the pro forma net debt and leverage are limited to the USD 136 million price on the stated EBITDA; severity High; the issuer's closing balance sheet or pro forma figures would close it.
- Cash paid for interest is printed net of interest received, so interest cover on cash interest overstates cover against gross interest paid, and the first quarter of 2026 and 2025 show net receipts that cannot be stated as cash interest paid; severity Medium; gross interest paid would close it.
- Availability under the revolver at 2023-12-31 is not stated, only USD 75 million of borrowings, so the FY2023 undrawn facilities cell is not supplied; severity Low; the FY2023 annual report would close it.
- Several cash flow and income statement lines are printed as a dash or are absent from one statement while present in another (for example the revolver and short-term borrowing lines in the nine-month statement, the debt issuance lines in the annual statement, and other postretirement expense in FY2024), and stock-based compensation is not stated for the third quarter; these cells are not supplied and are never read as zero; severity Low.
- The revolver's margin, reference rate, floor and scheduled amortisation are not stated in the supplied sources, nor are the finance leases' rank, security and principal, so those cells are not supplied and the finance leases are left out of the debt stack; severity Medium; the credit agreement would close it.
- The filings do not say which cash flow line carries the USD 123 million revolver balance: borrowings and repayments are USD 80 million each and the net increase in short-term borrowings is USD 121 million; severity Low; the figures are shown as printed.
- The adjusted EBITDA margin for FY2023 and FY2024 and the United States share of net sales for FY2023 and FY2024 are not stated in the supplied reports, so those dashboard cells are not supplied; severity Low.
- Letters of credit under the revolver are not stated, so undrawn facilities equal the issuer's stated availability and are not reduced for any letter of credit; severity Low.

## Next module

The orchestrator selects the next module.
