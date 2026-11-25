# CP-1 Financial foundation: ENTEGRIS INC (entg), as of 2026-11-05

## Request

ENTEGRIS INC (entg), as of 2026-11-05, credit snapshot pathway. This module extracts and normalises the consolidated financial statements, debt, liquidity and credit metrics of Entegris, Inc. from the supplied filings and releases, for the requested financial foundation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_entg-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-31 | 2026-02-10 (signature date stated in the document; the third-quarter 2026 10-Q states filing on 2026-02-11) | 260dc4cc98d7ad114dcfe1b4d9e49beac9ed9f7c97f27f59e6df3a75c0628528 | FY2024 and FY2025 statements, FY2025 debt note, non-GAAP bridge, cash requirements, covenant risk factor |
| 10-Q_2026-03-28_entg-20260328.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-28 | 2026-04-30 (signature date) | 3b83d32b0eaaaa1280f7799359a8f16448b715b610a83c1edceec0d49387802a | Q1 2026 balance sheet, term loan repayment, revolver amendment event |
| 10-Q_2026-06-27_entg-20260627.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-27 | 2026-08-04 (signature date) | 5d06fd99ce42692b479a85d0b3d96bd08dbc1bdd295141cd5adf69b1988058ed | Q2 2026 balance sheet, debt note, amended revolver terms, voluntary payment event |
| 10-Q_2026-09-26_entg-20260926.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-26 | 2026-10-29 (signature date) | 7b5685a1d8fe745548fe7c65968e18c36857c1e4dd7f2b8045f8166b689f4db9 | Latest balance sheet, nine-month and Q3 statements, debt note, liquidity, covenant statement, non-GAAP bridge, subsequent events |
| EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl | Press release (Exhibit 99.1) reporting first-quarter 2026 results | 2026-04-30 | 0e10b62e7e542aab19ae90b6d94252e94c7183b272237a1b5ecd040e7a3bb9d7 | Q4 2025 and Q1 2026 stand-alone quarters |
| EX-99.1_2026-08-04_entgq22026ex991.htm.jsonl | Press release (Exhibit 99.1) reporting second-quarter 2026 results | 2026-08-04 | 729b6288fa7f91f06fa1d1330da9031db0436138ba5a59730b16535055ac78c0 | Q2 2026 stand-alone quarter |
| EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl | Press release (Exhibit 99.1) reporting third-quarter 2026 results | 2026-10-29 | e35116403bbcb30c3a986093aa969493d265b238a073d77c0b1aa4aec9296a99 | Q3 2026 stand-alone quarter and fourth-quarter outlook |

- Source readiness (CP-0): sha256 ba3a775d3800350778736b10ab6b6cdeb19ade0b14b26c4f98e86059e9de2e38

## Findings

### Bottom line

Entegris has delevered materially: net debt is 2.96x last-twelve-months reported EBITDA, down from 3.95x at FY2025, and interest cover is 5.42x, so the creditor risk that remains is the USD 2,000.0 million of principal due in 2029, not liquidity or coverage.
Basis: calculation C-37; calculation C-31; calculation C-38; calculation C-46; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11

Net debt at 2026-09-26 is USD 2,904.1 million (USD 2,919.38 million pro forma for the dividend payable on 2026-11-18), on total debt of USD 3,260.6 million at carrying value. Reported EBITDA is a derived figure because the issuer states only an adjusted one; on the adjusted measure net leverage is 2.88x. The 10-K note tables are captioned in thousands but print millions.
Basis: calculation C-12; calculation C-53; calculation C-40; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-Q_2026-09-26_entg-20260926.htm.jsonl, pages 8–9

### Key findings

Leverage fell because the company repaid USD 450.0 million of term loan in 2026 while last-twelve-months reported EBITDA rose to USD 982.1 million from USD 845.6 million at FY2025. Total debt over reported EBITDA is now 3.32x against 4.37x at FY2025, and on the issuer's adjusted measure 3.23x against 4.17x. Both the repayment and the earnings recovery contributed; the repayment is permanent, while the earnings recovery depends on semiconductor demand.
Basis: calculation C-44; calculation C-36; calculation C-30; calculation C-39; calculation C-33; calculation C-14; calculation C-02; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12

Coverage is comfortable: reported EBITDA covers cash interest 5.42x, up from 4.56x at FY2025, on last-twelve-months cash interest paid of USD 181.1 million. All remaining debt is fixed-rate notes because the term loan is repaid and the revolver is undrawn, so interest cost no longer moves with rates; the revolver carries a margin of 1.25% over SOFR if it is drawn.
Basis: calculation C-38; calculation C-32; calculation C-16; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12

Cash generation is strong but flattered by timing. Nine-month operating cash flow of USD 606.0 million was 1.76x net income, and free cash flow reached USD 482.0 million against USD 262.2 million a year earlier, because capital expenditure fell by about half to USD 124.0 million from USD 241.2 million. Working capital absorbed USD 65.8 million net: a USD 320.7 million build in receivables and inventories was offset by higher payables and accruals, which include variable compensation still to be paid. Customer advances, the one non-debt funding source in the filings, rose to USD 74.1 million from USD 49.9 million at year-end, which is small against operating cash flow. With the 10-K planning about USD 250.0 million of 2026 capital expenditure, nine-month spending is well below plan, so this free cash flow should not be annualised.
Basis: calculation C-47; calculation C-22; calculation C-23; calculation C-48; calculation C-49; calculation C-50; 10-Q_2026-09-26_entg-20260926.htm.jsonl, pages 6–7; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 10; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 33; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 82

Liquidity is USD 1,106.5 million: cash of USD 356.5 million plus an undrawn USD 750.0 million revolver maturing in 2031, before any letters of credit, which the filings do not state. Nothing matures before 2028; USD 400.0 million falls due in 2028, USD 2,000.0 million, or 60.7% of principal, in 2029 and USD 895.0 million in 2030. A year of free cash flow at the last-twelve-months level of USD 616.0 million would cover the 2028 maturity but not the 2029 principal, so creditors depend on refinancing access in 2028 and 2029 rather than on cash on hand.
Basis: calculation C-45; calculation C-46; calculation C-43; calculation C-19; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-Q_2026-09-26_entg-20260926.htm.jsonl, pages 11–12

The structure puts USD 1,600.0 million of senior secured notes and the undrawn revolver ahead of three unsecured note series. Secured debt is 1.63x last-twelve-months reported EBITDA and all principal is 3.36x. Guarantors, collateral and the rank among the secured instruments are not supplied, so the ranking follows the filings' own labels.
Basis: calculation C-56; calculation C-55; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12

The statements are consolidated for Entegris, Inc. and its subsidiaries, with no finance subsidiary to separate. Debt excludes lease liabilities of USD 100.4 million, which the balance sheet shows on their own line. Depreciation fell by USD 55.6 million over nine months after the January 2026 useful-life change, which lifts operating income and net income but not EBITDA, and Q3 2026 Adjusted EBITDA excludes USD 8.3 million of tariff refunds.
Basis: 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 9; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38

### Contrary evidence and what would change the view

The strongest challenge is that the improvement may not last. Reported EBITDA for Q3 2026 was USD 310.1 million against USD 219.0 million a year earlier, and FY2025 reported EBITDA of USD 845.6 million was below FY2024's USD 912.1 million, so earnings move with the semiconductor cycle. Working-capital timing and low capital expenditure also help cash flow, and cash was flat at USD 356.5 million because all excess cash went to repaying USD 450.0 million of debt rather than to liquidity. The view would change if quarterly EBITDA fell back toward the FY2025 level, if nine-month capital expenditure caught up with the USD 250.0 million plan, or if the credit agreement showed letters of credit encumbering the revolver or a covenant trigger close to current usage.
Basis: calculation C-06; calculation C-05; calculation C-02; calculation C-01; calculation C-44; calculation C-50; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 34

### Limitations

- Reported EBITDA is derived here from operating income plus depreciation and amortization of intangible assets, because the issuer states only an adjusted figure; a ratio on another EBITDA definition would differ, and the adjusted twin is shown beside it for that reason.
Basis: calculation C-14; calculation C-51; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38
- Availability under the revolver net of letters of credit, the revolver covenant's trigger level, and guarantor and collateral terms are not stated in the filings, so liquidity may be slightly overstated, covenant headroom is not worked out and the ranking among secured debt follows the filings' labels.
Basis: 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 34; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 56

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-27 |
| 9M 2026 | 2026-01-01 | 2026-09-26 |
| Q3 2025 | 2025-06-29 | 2025-09-27 |
| Q3 2026 | 2026-06-28 | 2026-09-26 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_entg-20251231.htm.jsonl | Annual report on Form 10-K | FY2024 and FY2025 (with FY2023 comparatives) | USD | Millions (note-table captions say thousands; figures are millions) | Entegris, Inc. and subsidiaries, consolidated | US GAAP | Tier 1: audited statements | FY2024 and FY2025 statements, debt note, non-GAAP bridge, covenant risk factor | Captions in thousands on several note tables; debt terms predate the 2026 revolver amendment |
| 10-Q_2026-03-28_entg-20260328.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-28 | USD | Millions | Entegris, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Q1 2026 balance sheet and debt events | Unaudited |
| 10-Q_2026-06-27_entg-20260627.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-27 | USD | Millions | Entegris, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Q2 2026 balance sheet, revolver terms, voluntary payment | Unaudited |
| 10-Q_2026-09-26_entg-20260926.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-26 | USD | Millions | Entegris, Inc. and subsidiaries, consolidated | US GAAP | Tier 2b: unaudited, no auditor review stated | Latest statements, debt, liquidity, non-GAAP bridge | Unaudited; covenant trigger level and letters of credit not stated |
| EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl | Press release (Exhibit 99.1) | Quarter ended 2026-03-28 with the Q4 2025 stand-alone quarter | USD | Millions | Entegris, Inc. | US GAAP and issuer non-GAAP | Tier 2b: unaudited issuer release | Q4 2025 and Q1 2026 stand-alone Adjusted EBITDA | Condensed; the 10-Q controls where figures differ |
| EX-99.1_2026-08-04_entgq22026ex991.htm.jsonl | Press release (Exhibit 99.1) | Quarter ended 2026-06-27 | USD | Millions | Entegris, Inc. | US GAAP and issuer non-GAAP | Tier 2b: unaudited issuer release | Q2 2026 stand-alone Adjusted EBITDA | Condensed |
| EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl | Press release (Exhibit 99.1) | Quarter ended 2026-09-26 | USD | Millions | Entegris, Inc. | US GAAP and issuer non-GAAP | Tier 2b: unaudited issuer release | Q3 2026 stand-alone quarter and cash flow | Condensed; interest shown net |

Sufficiency: the sources hold the income statement, cash flow statement and balance sheet for FY2024, FY2025, the first nine months of 2025 and 2026 and the third quarter of each year. They hold no key performance indicators beyond segment sales and profit.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Entegris, Inc. | Issuer and registrant; parent of the consolidated group | December 31 (quarters are 13 or 14 weeks ending on a Saturday) | USD | Millions | Entegris, Inc. and subsidiaries | US GAAP | FY2023 to FY2025; Q1, Q2 and Q3 2026 with 2025 comparatives; nine months 2026 and 2025 |
| Borrower, guarantor group and restricted group | Not supplied: the filings name no separate borrower or guarantor list | Not applicable | USD | Millions | Not supplied: the indenture exhibits name certain subsidiaries as parties | US GAAP | Not applicable |

Subsequent events are flagged with their dates and kept out of period figures. A quarterly dividend of USD 0.10 per share was declared on 2026-10-14 and is payable on 2026-11-18, after the latest balance sheet date of 2026-09-26; it appears only in the post-balance-sheet table.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) derived | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Derivation | No unadjusted EBITDA is stated by the issuer | Operating income plus depreciation plus amortization of intangible assets | The issuer states only Adjusted EBITDA; the derived figure is the unadjusted measure the method needs | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026, LTM |
| Total Liabilities derived | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Derivation | No total liabilities line is printed | Total assets less total equity | Equals the sum of the printed liability lines at each date | FY2024, FY2025, Q3 2026 |
| Note-table unit captions | 10-K_2025-12-31_entg-20251231.htm.jsonl | Unit | Captions say thousands | Figures read as USD millions | The 10-Qs state the underlying amounts are in millions and unchanged | FY2024, FY2025 |
| Debt basis | 10-Q_2026-09-26_entg-20260926.htm.jsonl; 10-K_2025-12-31_entg-20251231.htm.jsonl | Basis | Principal (par value) | Carrying value (net of unamortized discount and debt issuance costs) | Total Debt is the balance-sheet carrying value; principal is logged beside it | FY2024, FY2025, Q3 2026 |
| Last twelve months | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Period construction | Full year and nine-month stubs | FY2025 plus nine months 2026 less nine months 2025 | Stubs are comparable nine-month periods | LTM to 2026-09-26 |
| Interest presentation | EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Presentation | Release shows interest expense net of interest income | The 10-Q shows interest expense and interest income separately and is used | Cash interest paid is taken from the cash flow supplement, not the income statement | Q3 2026, 9M 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 3,241.2 | 3,196.6 | 2,372.7 | 2,700.8 | 807.1 | 1,005.7 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Cost of sales | 1,754.5 | 1,776.7 | 1,313.4 | 1,399.8 | 455.8 | 505.5 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Gross profit | 1,486.7 | 1,419.9 | 1,059.3 | 1,301.0 | 351.3 | 500.2 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Selling, general and administrative expenses | 446.6 | 450.6 | 320.2 | 380.6 | 101.8 | 136.5 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Engineering, research and development expenses | 316.1 | 329.0 | 250.0 | 245.6 | 80.9 | 87.5 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Amortization of intangible assets | 190.1 | 184.4 | 138.1 | 138.0 | 46.0 | 45.6 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Operating income | 533.9 | 455.9 | 351.0 | 536.8 | 122.6 | 230.6 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Depreciation | 188.1 | 205.3 | 151.6 | 102.4 | 50.4 | 33.9 | USD millions | Reported in the cash flow statement; segment note for Q3 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 15 |
| EBITDA (Reported) | 912.1 | 845.6 | 640.7 | 777.2 | 219.0 | 310.1 | USD millions | Calculated: operating income plus depreciation plus amortization of intangible assets; the issuer states no unadjusted EBITDA (T4.3) | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 15 |
| EBITDA (Adjusted) | 931.1 | 886.2 | 658.1 | 780.1 | 220.7 | 303.3 | USD millions | Reported by the issuer as Adjusted EBITDA: adds back restructuring costs and the other items named in the bridge table, excludes IEEPA tariff refunds from Q3 2026 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38 |
| Restructuring costs | 3.9 | 29.7 | 17.4 | 11.2 | 1.7 | 1.5 | USD millions | Reported non-GAAP adjustment (exceptional item) | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38 |
| Share-based compensation expense | 65.9 | 69.3 | 50.4 | 54.8 | 18.4 | 19.7 | USD millions | Reported in the cash flow statement; Q3 from the release | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7; EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl, page 7 |
| Interest expense | 215.2 | 199.8 | 151.3 | 142.9 | 47.9 | 45.4 | USD millions | Reported, total interest expense | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Interest income | -7.3 | -7.9 | -5.1 | -5.3 | -1.8 | -1.5 | USD millions | Reported, printed as a deduction | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Other expense, net | 4.0 | 9.4 | 5.3 | 9.4 | 4.2 | 0.2 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Income before income tax expense | 322.0 | 254.6 | 199.5 | 389.8 | 72.3 | 186.5 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Income tax expense | 28.3 | 18.0 | 12.5 | 46.2 | 1.5 | 28.7 | USD millions | Reported; cash taxes are in the cash flow table | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| Net income | 292.8 | 235.6 | 186.2 | 343.4 | 70.5 | 157.8 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 292.8 | 235.6 | 186.2 | 343.4 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Depreciation | 188.1 | 205.3 | 151.6 | 102.4 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Amortization | 190.1 | 184.4 | 138.1 | 138.0 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Share-based compensation expense | 65.9 | 69.3 | 50.4 | 54.8 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Net Cash from Operating Activities | 631.7 | 695.4 | 503.4 | 606.0 | USD millions | Reported; interest paid is classified in operating activities | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Acquisition of property, plant and equipment | -315.6 | -299.2 | -241.2 | -124.0 | USD millions | Reported; total capital expenditure, maintenance and growth split not supplied | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Net Cash from Investing Activities | -67.1 | -300.8 | -234.5 | -123.9 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Payments of long-term debt | -848.3 | -300.0 | -150.0 | -450.0 | USD millions | Reported; term loan repayments | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Payments for dividends | -60.6 | -60.8 | -45.7 | -46.2 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Net Cash from Financing Activities | -688.9 | -366.9 | -204.1 | -486.8 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| FX Effect on Cash | -3.4 | 3.5 | 5.8 | 0.8 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Net Cash Change | -127.7 | 31.2 | 70.6 | -3.9 | USD millions | Reported: operating plus investing plus financing plus the FX effect | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Opening Cash | 456.9 | 329.2 | 329.2 | 360.4 | USD millions | Reported: cash and cash equivalents at the start of the period | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Closing Cash | 329.2 | 360.4 | 399.8 | 356.5 | USD millions | Reported: cash and cash equivalents at the end of the period | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Cash Interest Paid | 199.2 | 185.4 | 94.7 | 90.4 | USD millions | Reported: interest paid, net of capitalized interest, from the supplemental disclosure | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| Income taxes paid, net of refunds received | 103.8 | 113.0 | 108.6 | 90.3 | USD millions | Reported: cash taxes from the supplemental disclosure | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 107–108; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 6; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 329.2 | 360.4 | 356.5 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Trade accounts receivable, net | 495.3 | 458.7 | 625.2 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Inventories, net | 638.1 | 643.2 | 769.0 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total current assets | 1,616.3 | 1,638.2 | 1,920.7 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Property, plant and equipment, net | 1,622.9 | 1,636.1 | 1,621.8 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Goodwill | 3,943.6 | 3,946.7 | 3,950.0 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Intangible assets, net | 1,091.7 | 906.9 | 769.1 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total Assets | 8,394.6 | 8,350.5 | 8,540.6 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Accounts payable | 193.3 | 171.5 | 262.4 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total current liabilities | 525.2 | 488.6 | 722.1 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Long-term debt, net of unamortized discount and debt issuance costs | 3,981.1 | 3,697.6 | 3,260.6 | USD millions | Reported; no current portion is printed | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Long-term lease liabilities | 72.1 | 98.6 | 100.4 | USD millions | Reported; operating and finance leases on their own lines, outside Total Debt | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 124; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total Debt | 3,981.1 | 3,697.6 | 3,260.6 | USD millions | Reported carrying value: the long-term debt line; no securitization or finance lease sits inside it | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total Liabilities | 4,703.1 | 4,397.1 | 4,207.7 | USD millions | Calculated: total assets less total equity (T4.3) | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| Total Equity | 3,691.5 | 3,953.4 | 4,332.9 | USD millions | Reported | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |

Period headers: the balance sheet column headed Q3 2026 is the balance sheet at 2026-09-26.

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility due 2031 | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0.0 | 0.0 | 750.0 | Senior secured (the filing's own label) | Not supplied: the filings state no rank among the secured debt | USD | 0.0 | Not applicable | Margin 1.25% over SOFR (0.25% over base rate) at 2026-09-26 | Floating | SOFR | 125 | Not supplied: no floor is stated | 2031-04-29 | 0.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12 |
| Senior secured notes due 2029 | Senior secured notes | Not supplied: carrying value by instrument is not disclosed | 1,600.0 | 1,600.0 | Not applicable | Senior secured (the filing's own label) | Not supplied: the filings state no rank among the secured debt | USD | 1,600.0 | Not applicable | 4.75% | Fixed | Not applicable | Not applicable | Not applicable | 2029 | 0.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |
| Senior unsecured notes due 2030 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 895.0 | 895.0 | Not applicable | Unsecured (the filing's own label) | Not supplied: the filings state no rank among the unsecured debt | USD | 895.0 | Not applicable | 5.95% | Fixed | Not applicable | Not applicable | Not applicable | 2030 | 0.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120 |
| Senior unsecured notes due 2029 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 400.0 | 400.0 | Not applicable | Unsecured (the filing's own label) | Not supplied: the filings state no rank among the unsecured debt | USD | 400.0 | Not applicable | 3.625% (printed 3.63% in the 10-Q) | Fixed | Not applicable | Not applicable | Not applicable | 2029 | 0.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120 |
| Senior unsecured notes due 2028 | Senior unsecured notes | Not supplied: carrying value by instrument is not disclosed | 400.0 | 400.0 | Not applicable | Unsecured (the filing's own label) | Not supplied: the filings state no rank among the unsecured debt | USD | 400.0 | Not applicable | 4.375% (printed 4.38% in the 10-Q) | Fixed | Not applicable | Not applicable | Not applicable | 2028 | 0.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120 |
| Term Loans B due 2029 | Term loan | 0.0 | 0.0 | 0.0 | Not applicable | Senior secured (the filing's own label) | Not supplied: the filings state no rank among the secured debt | USD | 0.0 | Not applicable | Repaid in full during 2026 | Floating | SOFR | Not applicable | Not applicable | 2029 | Not applicable | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 34 |
| Financing cost adjustment | Unamortized discount and debt issuance costs | -34.4 | -34.4 | Not applicable | Not applicable | Not applicable | Not applicable | USD | -34.4 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |

Reporting Currency Amount is the disclosed principal for each instrument, because carrying values by instrument are not disclosed; the five instruments with principal plus the financing cost adjustment add to the Total Debt of the balance sheet at 2026-09-26.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-09-26 | USD 3,196.6m | USD 2,700.8m | USD 2,372.7m | USD 3,524.7m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | FY2025 plus nine months 2026 less nine months 2025; comparable stubs |
| EBITDA (Reported) | LTM to 2026-09-26 | USD 845.6m | USD 777.2m | USD 640.7m | USD 982.1m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Derived EBITDA, not an issuer figure; same definition in all three components |
| EBITDA (Adjusted) | LTM to 2026-09-26 | USD 886.2m | USD 780.1m | USD 658.1m | USD 1,008.2m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Issuer-adjusted; the add-backs differ between FY2025 and the stubs |
| Cash Interest Paid | LTM to 2026-09-26 | USD 185.4m | USD 90.4m | USD 94.7m | USD 181.1m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Interest paid net of capitalized interest |
| Net Cash from Operating Activities | LTM to 2026-09-26 | USD 695.4m | USD 606.0m | USD 503.4m | USD 798.0m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Working capital moves with the cycle |
| Capital expenditure | LTM to 2026-09-26 | USD 299.2m | USD 124.0m | USD 241.2m | USD 182.0m | Calculated | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl | Acquisition of property, plant and equipment, shown as a positive amount |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3,981.1 | 329.2 | 3,651.9 | US$m | Reported at 2024-12-31. Gross debt is the carrying value of the long-term debt line (no finance leases or securitization inside it); principal was 4,045.0. Net debt is gross debt less cash. Source: 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120. |
| FY2025 / 2025-12-31 | 3,697.6 | 360.4 | 3,337.2 | US$m | Reported at 2025-12-31. Gross debt is the carrying value of the long-term debt line (no finance leases or securitization inside it); principal was 3,745.0. Net debt is gross debt less cash. Source: 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120. |
| 2026-09-26 | 3,260.6 | 356.5 | 2,904.1 | US$m | Reported at 2026-09-26. Gross debt is the carrying value of the long-term debt line (no finance leases or securitization inside it); principal is 3,295.0. Net debt is gross debt less cash; mutual fund investment of 10.0 in other noncurrent assets is not netted. Source: 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11. |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.36 | 4.00 | x | Carrying-value debt over reported EBITDA (derived: operating income plus depreciation and amortization). Fiscal-year EBITDA. |
| FY2025 / 2025-12-31 | 4.37 | 3.95 | x | Carrying-value debt over reported EBITDA (derived: operating income plus depreciation and amortization). Fiscal-year EBITDA. |
| 2026-09-26 | 3.32 | 2.96 | x | Carrying-value debt over reported EBITDA (derived: operating income plus depreciation and amortization). LTM EBITDA to 2026-09-26 (T4.8). |

The EBITDA in these ratios is a derived unadjusted figure, not an issuer-reported one; the adjusted ratios are in the calculation register.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.58 | x | Reported EBITDA over cash interest paid; both fiscal-year figures. |
| FY2025 / 2025-12-31 | 4.56 | x | Reported EBITDA over cash interest paid; both fiscal-year figures. |
| 2026-09-26 | 5.42 | x | Reported EBITDA over cash interest paid; both LTM to 2026-09-26 (T4.8). |

Cash interest paid is lower than interest expense because the expense includes non-cash amortization of discount and issuance costs.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 329.2 | Not supplied: the 10-K does not date the revolver commitment at 2024-12-31 | US$m | Cash reported at the balance sheet date. Undrawn availability at this date is not stated. |
| FY2025 / 2025-12-31 | 360.4 | 575.0 | US$m | Cash reported; undrawn is the revolver commitment less zero borrowings. Letters of credit under the revolver are not stated, so availability could be lower; the yen line of about 6.3 is not counted as committed. |
| 2026-03-28 | 442.7 | 575.0 | US$m | Cash reported; undrawn is the revolver commitment less zero borrowings. Letters of credit under the revolver are not stated, so availability could be lower; the yen line of about 6.3 is not counted as committed. |
| 2026-06-27 | 353.6 | 750.0 | US$m | Cash reported; undrawn is the revolver commitment less zero borrowings. Letters of credit under the revolver are not stated, so availability could be lower; the yen line of about 6.3 is not counted as committed. |
| 2026-09-26 | 356.5 | 750.0 | US$m | Cash reported; undrawn is the revolver commitment less zero borrowings. Letters of credit under the revolver are not stated, so availability could be lower; the yen line of about 6.3 is not counted as committed. |

Undrawn committed facilities are the revolver commitment with no borrowings outstanding; letters of credit drawn on it are not stated.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 0.0 | US$m | Principal maturing in the fiscal year at 2026-09-26; the filing prints a dash where nothing matures, and every note series matures in 2028 to 2030 |
| FY2027 | 0.0 | US$m | Principal maturing in the fiscal year at 2026-09-26; the filing prints a dash where nothing matures, and every note series matures in 2028 to 2030 |
| FY2028 | 400.0 | US$m | Principal maturing in the fiscal year at 2026-09-26 (par value, not carrying value) |
| FY2029 | 2,000.0 | US$m | Principal maturing in the fiscal year at 2026-09-26 (par value, not carrying value) |
| FY2030 | 895.0 | US$m | Principal maturing in the fiscal year at 2026-09-26 (par value, not carrying value) |

The revolver commitment of 750.0 matures on 2031-04-29 and is undrawn, so it is not in the ladder.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-26 | 3,295.0 | -34.4 | 3,260.6 | US$m | Reconciling items are the unamortized discount and debt issuance costs of 34.4 only; the ladder leaves out no debt. Principal is the sum of the debt maturities table. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Quarterly cash dividend of USD 0.10 per share, declared 2026-10-14 | 2026-11-18 | 15.28 | 2,919.38 | 2.97 | US$m | Payable after the balance sheet date and after the cutoff, so a scheduled future payment. The filing states the per-share amount only; the amount is estimated as 0.10 per share times 152.8 million shares outstanding at 2026-10-26 (record date count not stated). Pro forma net debt adds it to net debt of 2,904.1; leverage uses LTM reported EBITDA of 982.1. Cash generated after 2026-09-26 is not reflected. Source: 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 17; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 2. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| 2025-09-27 | 807.1 | 220.7 | US$m | Quarter ended on this date; Adjusted EBITDA is the issuer-adjusted measure; fiscal quarters are 13 or 14 weeks. Source: EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl, page 5; EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl, page 8. |
| 2025-12-31 | 823.9 | 228.1 | US$m | Quarter ended on this date; Adjusted EBITDA is the issuer-adjusted measure; fiscal quarters are 13 or 14 weeks. Source: EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl, page 1; EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl, page 7. |
| 2026-03-28 | 811.9 | 226.1 | US$m | Quarter ended on this date; Adjusted EBITDA is the issuer-adjusted measure; fiscal quarters are 13 or 14 weeks. Source: EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl, page 1; EX-99.1_2026-04-30_entgq12026ex991.htm.jsonl, page 7. |
| 2026-06-27 | 883.2 | 250.7 | US$m | Quarter ended on this date; Adjusted EBITDA is the issuer-adjusted measure; fiscal quarters are 13 or 14 weeks. Source: EX-99.1_2026-08-04_entgq22026ex991.htm.jsonl, page 1; EX-99.1_2026-08-04_entgq22026ex991.htm.jsonl, page 8. |
| 2026-09-26 | 1,005.7 | 303.3 | US$m | Quarter ended on this date; Adjusted EBITDA is the issuer-adjusted measure; fiscal quarters are 13 or 14 weeks. Source: EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl, page 1; EX-99.1_2026-10-29_entgq32026ex991.htm.jsonl, page 8. |

Adjusted EBITDA is issuer-adjusted for all five quarters, and the quarters are not the same length.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility due 2031 | 1 | Yes | 0.0 | 0.00 | US$m | Principal at 2026-09-26; cumulative principal over LTM reported EBITDA of 982.1 (a ratio on principal, not carrying value). Secured status is the filing's own label; guarantors, collateral and the rank among the secured debt are not supplied. Drawn amount; commitment 750.0. |
| Senior secured notes due 2029 | 1 | Yes | 1,600.0 | 1.63 | US$m | Principal at 2026-09-26; cumulative principal over LTM reported EBITDA of 982.1 (a ratio on principal, not carrying value). Secured status is the filing's own label; guarantors, collateral and the rank among the secured debt are not supplied.  |
| Senior unsecured notes due 2028 | 2 | No | 400.0 | 2.04 | US$m | Principal at 2026-09-26; cumulative principal over LTM reported EBITDA of 982.1 (a ratio on principal, not carrying value). Secured status is the filing's own label; guarantors, collateral and the rank among the secured debt are not supplied.  |
| Senior unsecured notes due 2029 | 2 | No | 400.0 | 2.44 | US$m | Principal at 2026-09-26; cumulative principal over LTM reported EBITDA of 982.1 (a ratio on principal, not carrying value). Secured status is the filing's own label; guarantors, collateral and the rank among the secured debt are not supplied.  |
| Senior unsecured notes due 2030 | 2 | No | 895.0 | 3.36 | US$m | Principal at 2026-09-26; cumulative principal over LTM reported EBITDA of 982.1 (a ratio on principal, not carrying value). Secured status is the filing's own label; guarantors, collateral and the rank among the secured debt are not supplied.  |

Ranks 1 and 2 follow the secured and unsecured labels in the filings; no legal ranking among the secured instruments is stated.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported) | 845.6 | US$m | FY2025 reported (derived) EBITDA: operating income plus depreciation plus amortization of intangible assets |
| Restructuring costs | 29.7 | US$m | FY2025 add-back as the issuer states it. Source: 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85 |
| Loss on sale of businesses, net | 10.9 | US$m | FY2025 add-back as the issuer states it. Source: 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85 |
| EBITDA (Adjusted) | 886.2 | US$m | FY2025 issuer-adjusted EBITDA as stated. Source: 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85 |

The bridge is for FY2025; for nine months 2026 the issuer also removes 8.3 of tariff refunds and adds 11.2 of restructuring costs.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,981.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105 | 912.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 4.36 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,651.9 | Net debt data | 912.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 4.00 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 912.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | 199.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 108 | FY2024 / 2024-12-31 | USD | US$m | 4.58 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year; cash interest paid, not expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,981.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105 | 931.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 4.28 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,651.9 | Net debt data | 931.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 3.92 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 931.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | 199.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 108 | FY2024 / 2024-12-31 | USD | US$m | 4.67 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year; cash interest paid, not expense |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,697.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105 | 845.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 4.37 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 3,337.2 | Net debt data | 845.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 3.95 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 845.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | 185.4 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 108 | FY2025 / 2025-12-31 | USD | US$m | 4.56 | Calculated | Tier 1 | Derived EBITDA (not issuer-reported); fiscal year; cash interest paid, not expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,697.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105 | 886.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 4.17 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 3,337.2 | Net debt data | 886.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 3.77 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 886.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | 185.4 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 108 | FY2025 / 2025-12-31 | USD | US$m | 4.78 | Calculated | Tier 1 | Issuer-adjusted EBITDA; fiscal year; cash interest paid, not expense |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 3,260.6 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 | 982.1 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 3.32 | Calculated | Tier 2b | Derived EBITDA (not issuer-reported); LTM, interim row has no statement tie |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,904.1 | Net debt data | 982.1 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 2.96 | Calculated | Tier 2b | Derived EBITDA (not issuer-reported); LTM, interim row has no statement tie |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 982.1 | T4.8 constructed period register (LTM) | 181.1 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 5.42 | Calculated | Tier 2b | Derived EBITDA (not issuer-reported); LTM, interim row has no statement tie; cash interest paid, not expense |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 3,260.6 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 | 1,008.2 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 3.23 | Calculated | Tier 2b | Issuer-adjusted EBITDA; LTM, interim row has no statement tie |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,904.1 | Net debt data | 1,008.2 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 2.88 | Calculated | Tier 2b | Issuer-adjusted EBITDA; LTM, interim row has no statement tie |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,008.2 | T4.8 constructed period register (LTM) | 181.1 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 5.57 | Calculated | Tier 2b | Issuer-adjusted EBITDA; LTM, interim row has no statement tie; cash interest paid, not expense |
| FCF conversion | Free cash flow / EBITDA (Reported) | 316.1 | Operating cash flow less capital expenditure (T4.5, T4.8) | 912.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2024 / 2024-12-31 | USD | US$m | 0.3466 | Calculated | Tier 1 | Free cash flow after working capital; excludes government incentive proceeds |
| FCF conversion | Free cash flow / EBITDA (Reported) | 396.2 | Operating cash flow less capital expenditure (T4.5, T4.8) | 845.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 | FY2025 / 2025-12-31 | USD | US$m | 0.4685 | Calculated | Tier 1 | Free cash flow after working capital; excludes government incentive proceeds |
| FCF conversion | Free cash flow / EBITDA (Reported) | 616.0 | Operating cash flow less capital expenditure (T4.5, T4.8) | 982.1 | T4.8 constructed period register (LTM) | 2026-09-26 | USD | US$m | 0.6272 | Calculated | Tier 2b | Free cash flow after working capital; excludes government incentive proceeds |
| Capex / Revenue | Capital expenditure / Revenue | 315.6 | Acquisition of property, plant and equipment (T4.5, T4.8) | 3,241.2 | Net sales (T4.4, T4.8) | FY2024 / 2024-12-31 | USD | US$m | 0.0974 | Calculated | Tier 1 | Total capital expenditure; maintenance and growth split not supplied |
| Capex / Revenue | Capital expenditure / Revenue | 299.2 | Acquisition of property, plant and equipment (T4.5, T4.8) | 3,196.6 | Net sales (T4.4, T4.8) | FY2025 / 2025-12-31 | USD | US$m | 0.0936 | Calculated | Tier 1 | Total capital expenditure; maintenance and growth split not supplied |
| Capex / Revenue | Capital expenditure / Revenue | 182.0 | Acquisition of property, plant and equipment (T4.5, T4.8) | 3,524.7 | Net sales (T4.4, T4.8) | 2026-09-26 | USD | US$m | 0.0516 | Calculated | Tier 2b | Total capital expenditure; maintenance and growth split not supplied |
| Liquidity / Total debt | (Cash + undrawn committed facilities) / Total Debt | 1,106.5 | Chart data: liquidity | 3,260.6 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 | 2026-09-26 | USD | US$m | 0.3394 | Calculated | Tier 2b | Letters of credit under the revolver are not stated |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Margins | Gross margin (issuer-reported, %) | 45.9 | 44.4 | 44.6 | 48.2 | 43.5 | 49.7 | Up in 2026 | Gross margin rose 3.6 percentage points over nine months; the issuer cites volume, lower depreciation from the useful-life change, and tariff refunds |
| Margins | Operating margin (issuer-reported, %) | 16.5 | 14.3 | 14.8 | 19.9 | 15.2 | 22.9 | Up in 2026 | Operating leverage on higher sales, plus lower depreciation |
| Margins | Adjusted EBITDA margin (issuer-reported, %) | 28.7 | 27.7 | 27.7 | 28.9 | 27.3 | 30.2 | Up in 2026 | Adjusted EBITDA excludes restructuring and, in Q3 2026, tariff refunds |
| Margins | Net income margin (issuer-reported, %) | 9.0 | 7.4 | 7.8 | 12.7 | 8.7 | 15.7 | Up in 2026 | Driven by operating income growth |
| Segments | Materials Solutions net sales | 1,400.1 | 1,406.7 | 1,044.9 | 1,126.5 | 348.6 | 404.1 | Up in 2026 | Advanced deposition, etch and CMP consumables |
| Segments | Advanced Purity Solutions net sales | 1,850.2 | 1,799.1 | 1,334.6 | 1,583.1 | 460.8 | 604.9 | Up in 2026 | Filtration, purification and FOUPs; most of the growth |
| Segments | Materials Solutions segment profit | 286.2 | 276.6 | 212.7 | 237.9 | 65.2 | 84.3 | Up in 2026 | Higher sales and lower depreciation |
| Segments | Advanced Purity Solutions segment profit | 496.1 | 426.4 | 322.2 | 497.2 | 118.2 | 212.7 | Up in 2026 | Operating leverage on volume |
| Cash flow | Net Cash from Operating Activities | 631.7 | 695.4 | 503.4 | 606.0 | 249.5 | 266.8 | Up in 2026 | Nine-month operating cash flow rose despite a receivable and inventory build; quarterly figures from the release |
| Liquidity | Cash & Equivalents at period end | 329.2 | 360.4 | 399.8 | 356.5 | 399.8 | 356.5 | Flat | Cash held near 356.5 while 450.0 of term loan was repaid |
| Funding float | Current contract liabilities (customer advances), at period end | 41.7 | 49.9 | 48.8 | 74.1 | 48.8 | 74.1 | Up in 2026 | A non-debt funding source; small against operating cash flow but rising |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA is the issuer's unadjusted EBITDA; adjusted EBITDA is shown beside it | The issuer states only Adjusted EBITDA (operating income plus depreciation plus amortization, with restructuring, other charges and, in Q3 2026, tariff refunds adjusted) | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 85; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38 | All periods | LTM: 982.1 reported (derived) against 1,008.2 adjusted, a gap of 26.1 | Financial foundation; Fundamental credit | Use the derived reported EBITDA for ratios and the issuer's adjusted measure as a labelled twin |
| Total debt | Balance-sheet carrying value, with principal logged beside it | Debt table shows par value; the balance sheet shows carrying value net of unamortized discount and issuance costs | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 | FY2024, FY2025, Q3 2026 | At 2026-09-26: principal 3,295.0 against carrying value 3,260.6, a difference of 34.4 | Financial foundation; Fundamental credit | Use carrying value in ratios; the principal ratio is labelled in the debt stack |
| Net debt | Gross debt less cash and cash equivalents | No issuer net debt is stated; a mutual fund investment of 10.0 sits in other noncurrent assets | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 13 | Q3 2026 | 10.0 not netted | Financial foundation | Cash only is netted; restricted cash is not stated |
| Leases | Lease liabilities on their own balance-sheet lines are not added to Total Debt | Long-term lease liabilities of 100.4 at 2026-09-26 are presented separately; the current portion sits in other accrued liabilities | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 124 | Q3 2026 | 100.4 excluded from debt | Financial foundation; Liquidity | Kept outside Total Debt; amount logged here |
| Interest | Cover uses cash interest paid | Interest expense includes amortization of discount and issuance costs | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 | 9M 2026 | Interest expense 142.9 against interest paid 90.4 | Financial foundation | Cash interest paid is the denominator; expense is shown in the income statement |
| Depreciation estimate | Not applicable | Useful lives were lengthened in January 2026, cutting depreciation by 55.6 over nine months | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 9 | 9M 2026, Q3 2026 | Raises operating income and net income, not EBITDA | Earnings quality | EBITDA is unaffected; operating income and net income are not comparable with 2025 |
| Tariff refunds | Not applicable | Q3 2026 Adjusted EBITDA excludes 8.3 of IEEPA tariff refunds that relate to costs incurred from April 2025 to February 2026 and were not excluded when incurred | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 38 | Q3 2026, 9M 2026 | Lowers Adjusted EBITDA by 8.3; the earlier costs stayed in the adjusted measure | Earnings quality | Logged; the exclusion is conservative for Q3 2026 only |
| Covenant ratio name | Not applicable | The 10-K calls the revolver ratio a secured net leverage ratio; the second- and third-quarter 10-Qs call it a first lien net leverage ratio of 5.20 to 1.00 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 56; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 34 | FY2025, Q2 and Q3 2026 | Definition and trigger level are not stated | Covenant capacity | Logged; headroom is not worked out |
| Unit captions | Statements in USD millions | Several 10-K note tables are captioned in thousands but print millions | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 86, 120–124, 134–135; 10-Q_2026-09-26_entg-20260926.htm.jsonl, pages 8–9 | FY2024, FY2025 | No figure changes | Financial foundation | Read as millions, as the 10-Q states |

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-26 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Net sales | 3,241.2 | 3,196.6 | 3,524.7 | USD millions | Reported; LTM is FY2025 plus nine months 2026 less nine months 2025 |
| EBITDA (Reported, derived) | 912.1 | 845.6 | 982.1 | USD millions | Calculated: operating income plus depreciation plus amortization |
| EBITDA (Adjusted, issuer) | 931.1 | 886.2 | 1,008.2 | USD millions | Reported by the issuer |
| Cash interest paid | 199.2 | 185.4 | 181.1 | USD millions | Reported cash flow supplement |
| Operating cash flow | 631.7 | 695.4 | 798.0 | USD millions | Reported |
| Capital expenditure | 315.6 | 299.2 | 182.0 | USD millions | Acquisition of property, plant and equipment |
| Free cash flow | 316.1 | 396.2 | 616.0 | USD millions | Calculated: operating cash flow less capital expenditure |
| Total debt (carrying value) | 3,981.1 | 3,697.6 | 3,260.6 | USD millions | Reported balance sheet |
| Cash and cash equivalents | 329.2 | 360.4 | 356.5 | USD millions | Reported balance sheet |
| Net debt | 3,651.9 | 3,337.2 | 2,904.1 | USD millions | Calculated: total debt less cash |
| Total debt / EBITDA (reported) | 4.36 | 4.37 | 3.32 | x | Calculated |
| Net debt / EBITDA (reported) | 4.00 | 3.95 | 2.96 | x | Calculated |
| Total debt / adjusted EBITDA | 4.28 | 4.17 | 3.23 | x | Calculated |
| Net debt / adjusted EBITDA | 3.92 | 3.77 | 2.88 | x | Calculated |
| EBITDA / cash interest (reported) | 4.58 | 4.56 | 5.42 | x | Calculated |
| Adjusted EBITDA / cash interest | 4.67 | 4.78 | 5.57 | x | Calculated |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage, coverage and net debt on carrying value | Ready with Limitations | EBITDA (Reported) is derived because the issuer states only an adjusted figure | State the derived basis wherever the ratio is quoted |
| Liquidity and maturity wall | Ready with Limitations | Letters of credit under the revolver and the covenant trigger level are not stated | Obtain the credit agreement for availability and the test trigger |
| Debt stack and ranking | Ready with Limitations | Guarantors, collateral and the rank among secured debt are not supplied | Obtain the indentures and credit agreement |
| Cash flow and free cash flow | Ready | Maintenance and growth capital expenditure are not split | None required for the bounded use |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 22 |
| Calculated | 14 |
| Assumption-Based | 1 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 2 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 4 |

## Calculations

Amounts are USD millions unless a row says otherwise; ratios are times.

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C-01 | EBITDA (Reported), FY2024: operating income plus depreciation plus amortization of intangible assets | 533.9 + 188.1 + 190.1 | 912.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-02 | EBITDA (Reported), FY2025: operating income plus depreciation plus amortization of intangible assets | 455.9 + 205.3 + 184.4 | 845.6 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-03 | EBITDA (Reported), 9M 2025: operating income plus depreciation plus amortization of intangible assets | 351.0 + 151.6 + 138.1 | 640.7 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-04 | EBITDA (Reported), 9M 2026: operating income plus depreciation plus amortization of intangible assets | 536.8 + 102.4 + 138.0 | 777.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-05 | EBITDA (Reported), Q3 2025: operating income plus depreciation plus amortization of intangible assets | 122.6 + 50.4 + 46.0 | 219.0 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-06 | EBITDA (Reported), Q3 2026: operating income plus depreciation plus amortization of intangible assets | 230.6 + 33.9 + 45.6 | 310.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 5 |
| C-07 | Total Liabilities, FY2024 (2024-12-31): total assets less total equity | 8,394.6 - 3,691.5 | 4,703.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-08 | Total Liabilities, FY2025 (2025-12-31): total assets less total equity | 8,350.5 - 3,953.4 | 4,397.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-09 | Total Liabilities, Q3 2026 (2026-09-26): total assets less total equity | 8,540.6 - 4,332.9 | 4,207.7 | 10-K_2025-12-31_entg-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-10 | Net debt, FY2024 / 2024-12-31: gross debt less cash | 3,981.1 - 329.2 | 3,651.9 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-11 | Net debt, FY2025 / 2025-12-31: gross debt less cash | 3,697.6 - 360.4 | 3,337.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-12 | Net debt, 2026-09-26: gross debt less cash | 3,260.6 - 356.5 | 2,904.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 105; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4 |
| C-13 | LTM to 2026-09-26, Revenue: FY2025 plus nine months 2026 less nine months 2025 | 3,196.6 + 2,700.8 - 2,372.7 | 3,524.7 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-14 | LTM to 2026-09-26, EBITDA (Reported): FY2025 plus nine months 2026 less nine months 2025 | 845.6 + 777.2 - 640.7 | 982.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-15 | LTM to 2026-09-26, EBITDA (Adjusted): FY2025 plus nine months 2026 less nine months 2025 | 886.2 + 780.1 - 658.1 | 1,008.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-16 | LTM to 2026-09-26, Cash interest paid: FY2025 plus nine months 2026 less nine months 2025 | 185.4 + 90.4 - 94.7 | 181.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-17 | LTM to 2026-09-26, Operating cash flow: FY2025 plus nine months 2026 less nine months 2025 | 695.4 + 606.0 - 503.4 | 798.0 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-18 | LTM to 2026-09-26, Capital expenditure: FY2025 plus nine months 2026 less nine months 2025 | 299.2 + 124.0 - 241.2 | 182.0 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-19 | LTM to 2026-09-26 free cash flow: operating cash flow less capital expenditure | 798.0 - 182.0 | 616.0 | 10-K_2025-12-31_entg-20251231.htm.jsonl; 10-Q_2026-09-26_entg-20260926.htm.jsonl |
| C-20 | Free cash flow, FY2024 / 2024-12-31: operating cash flow less capital expenditure | 631.7 - 315.6 | 316.1 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 |
| C-21 | Free cash flow, FY2025 / 2025-12-31: operating cash flow less capital expenditure | 695.4 - 299.2 | 396.2 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 107 |
| C-22 | Free cash flow, nine months 2026: operating cash flow less capital expenditure | 606.0 - 124.0 | 482.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| C-23 | Free cash flow, nine months 2025: operating cash flow less capital expenditure | 503.4 - 241.2 | 262.2 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| C-24 | Total debt / EBITDA (Reported), FY2024 / 2024-12-31 | 3,981.1 / 912.1 | 4.36 | T4.9 Calculation register |
| C-25 | Net debt / EBITDA (Reported), FY2024 / 2024-12-31 | 3,651.9 / 912.1 | 4.00 | T4.9 Calculation register |
| C-26 | EBITDA (Reported) / cash interest paid, FY2024 / 2024-12-31 | 912.1 / 199.2 | 4.58 | T4.9 Calculation register |
| C-27 | Total debt / EBITDA (Adjusted), FY2024 / 2024-12-31 | 3,981.1 / 931.1 | 4.28 | T4.9 Calculation register |
| C-28 | Net debt / EBITDA (Adjusted), FY2024 / 2024-12-31 | 3,651.9 / 931.1 | 3.92 | T4.9 Calculation register |
| C-29 | EBITDA (Adjusted) / cash interest paid, FY2024 / 2024-12-31 | 931.1 / 199.2 | 4.67 | T4.9 Calculation register |
| C-30 | Total debt / EBITDA (Reported), FY2025 / 2025-12-31 | 3,697.6 / 845.6 | 4.37 | T4.9 Calculation register |
| C-31 | Net debt / EBITDA (Reported), FY2025 / 2025-12-31 | 3,337.2 / 845.6 | 3.95 | T4.9 Calculation register |
| C-32 | EBITDA (Reported) / cash interest paid, FY2025 / 2025-12-31 | 845.6 / 185.4 | 4.56 | T4.9 Calculation register |
| C-33 | Total debt / EBITDA (Adjusted), FY2025 / 2025-12-31 | 3,697.6 / 886.2 | 4.17 | T4.9 Calculation register |
| C-34 | Net debt / EBITDA (Adjusted), FY2025 / 2025-12-31 | 3,337.2 / 886.2 | 3.77 | T4.9 Calculation register |
| C-35 | EBITDA (Adjusted) / cash interest paid, FY2025 / 2025-12-31 | 886.2 / 185.4 | 4.78 | T4.9 Calculation register |
| C-36 | Total debt / EBITDA (Reported), 2026-09-26 | 3,260.6 / 982.1 | 3.32 | T4.9 Calculation register |
| C-37 | Net debt / EBITDA (Reported), 2026-09-26 | 2,904.1 / 982.1 | 2.96 | T4.9 Calculation register |
| C-38 | EBITDA (Reported) / cash interest paid, 2026-09-26 | 982.1 / 181.1 | 5.42 | T4.9 Calculation register |
| C-39 | Total debt / EBITDA (Adjusted), 2026-09-26 | 3,260.6 / 1,008.2 | 3.23 | T4.9 Calculation register |
| C-40 | Net debt / EBITDA (Adjusted), 2026-09-26 | 2,904.1 / 1,008.2 | 2.88 | T4.9 Calculation register |
| C-41 | EBITDA (Adjusted) / cash interest paid, 2026-09-26 | 1,008.2 / 181.1 | 5.57 | T4.9 Calculation register |
| C-42 | Debt at 2026-09-26: principal less carrying value is the reconciling item | 3,260.6 - 3,295.0 | -34.4 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |
| C-43 | Debt maturities at 2026-09-26 sum to principal | 0.0 + 0.0 + 400.0 + 2,000.0 + 895.0 | 3,295.0 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |
| C-44 | Principal repaid between 2025-12-31 and 2026-09-26 | 3,745.0 - 3,295.0 | 450.0 | 10-K_2025-12-31_entg-20251231.htm.jsonl, page 120; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |
| C-45 | Liquidity at 2026-09-26: cash plus undrawn committed revolver | 356.5 + 750.0 | 1,106.5 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 4; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 12 |
| C-46 | Share of principal maturing in FY2029 | 2,000.0 / 3,295.0 | 60.7% | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 11 |
| C-47 | Operating cash flow over net income, nine months 2026 | 606.0 / 343.4 | 1.76 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, pages 5, 7 |
| C-48 | Change in operating assets and liabilities, nine months 2026: receivables, inventories, payables and accruals, other current assets, income taxes, other | -167.5 - 153.2 + 266.7 + 8.9 - 24.0 + 3.3 | -65.8 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| C-49 | Receivables and inventories build, nine months 2026 | 167.5 + 153.2 | 320.7 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7 |
| C-50 | Nine-month capital expenditure against the 2026 plan stated in the 10-K | 124.0 against a plan of approximately 250.0 | Plan not yet reached | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 7; 10-K_2025-12-31_entg-20251231.htm.jsonl, page 82 |
| C-51 | LTM adjusted less reported EBITDA | 1,008.2 - 982.1 | 26.1 | T4.8 constructed period register |
| C-52 | Dividend payable 2026-11-18: per-share amount times shares outstanding at 2026-10-26 | 0.10 x 152.8 | 15.28 | 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 17; 10-Q_2026-09-26_entg-20260926.htm.jsonl, page 2 |
| C-53 | Pro forma net debt after the dividend | 2,904.1 + 15.28 | 2,919.38 | Net debt data; Post-balance-sheet adjustments |
| C-54 | Pro forma net debt over LTM reported EBITDA | 2,919.38 / 982.1 | 2.97 | Post-balance-sheet adjustments |
| C-55 | Cumulative principal over LTM reported EBITDA at the last rank (all principal) | 3,295.0 / 982.1 | 3.36 | Chart data: debt stack |
| C-56 | Secured principal over LTM reported EBITDA (revolver drawn 0.0 plus secured notes 1,600.0) | 1,600.0 / 982.1 | 1.63 | Chart data: debt stack |
| C-57 | FCF conversion, FY2024 / 2024-12-31: free cash flow over reported EBITDA | 316.1 / 912.1 | 0.3466 | T4.9 Calculation register |
| C-58 | FCF conversion, FY2025 / 2025-12-31: free cash flow over reported EBITDA | 396.2 / 845.6 | 0.4685 | T4.9 Calculation register |
| C-59 | FCF conversion, 2026-09-26: free cash flow over reported EBITDA | 616.0 / 982.1 | 0.6272 | T4.9 Calculation register |
| C-60 | Capex / Revenue, FY2024 / 2024-12-31: capital expenditure over net sales | 315.6 / 3,241.2 | 0.0974 | T4.9 Calculation register |
| C-61 | Capex / Revenue, FY2025 / 2025-12-31: capital expenditure over net sales | 299.2 / 3,196.6 | 0.0936 | T4.9 Calculation register |
| C-62 | Capex / Revenue, 2026-09-26: capital expenditure over net sales | 182.0 / 3,524.7 | 0.0516 | T4.9 Calculation register |
| C-63 | Liquidity over total debt at 2026-09-26 | 1,106.5 / 3,260.6 | 0.3394 | T4.9 Calculation register |

## Gaps

- Medium: letters of credit drawn on the revolver are not stated for any balance sheet date, so undrawn committed facilities and liquidity may be overstated; obtain the credit agreement or a compliance statement.
- Medium: the level of revolver use that triggers the first lien net leverage test of 5.20 to 1.00 is not stated, so covenant headroom is not worked out; obtain the credit agreement.
- Medium: guarantors, collateral and the rank among the secured instruments are not supplied, so the debt stack ranking follows the filings' own labels; obtain the indentures and credit agreement.
- Medium: the issuer states no unadjusted EBITDA, so reported EBITDA is derived from operating income plus depreciation and amortization; the adjusted measure is shown beside it for every ratio.
- Low: the 10-K does not date the revolver commitment at 2024-12-31, so undrawn facilities for that date are not supplied.
- Low: carrying values by instrument are not disclosed, so the debt instruments table states principal and one financing cost adjustment row of 34.4; a floor on the revolver is not stated.
- Low: the filing prints a dash for years with no maturity; the ladder shows zero for those years because the stated principal equals the sum of the other years.
- Low: the dividend amount payable on 2026-11-18 is estimated from the per-share rate and shares outstanding at 2026-10-26, because the total is not stated.
- Low: maintenance and growth capital expenditure are not split, and cash interest paid for the third quarter alone is not stated.
- Low: the filings mention no supplier finance or receivables factoring programme, so the only non-debt funding float read is customer contract liabilities.
- Low: several 10-K note tables are captioned in thousands but print millions; they are read as millions, as the 10-Q states.

## Next module

The orchestrator selects the next module.
