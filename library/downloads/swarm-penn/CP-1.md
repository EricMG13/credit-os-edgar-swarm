---
issuer_id: penn
module_id: CP-1
analysis_date: 2026-11-05
run_id: penn-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

# CP-1 Financial foundation: PENN Entertainment, Inc.

## Request

PENN Entertainment, Inc. (issuer id penn), credit snapshot pathway, as of 2026-11-05. This answer extracts and normalises the consolidated statements, debt, liquidity and leverage figures from the supplied filings and releases; it gives no recommendation.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_penn-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-26 | e6f090720b62a51573341a18254da71e5663d9a3ca11809ee32b87032414e4c4 | Audited statements, debt note, segment note, Adjusted EBITDA reconciliation, REIT payments, covenant levels and liquidity at 2024 and 2025 year ends |
| 10-Q_2026-03-31_penn-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-29 | f74720e254c5d598fec44396bf0d01f4b1fcb35191eafe54dbae1433241cfe17 | Revolver availability at 2026-03-31 |
| 10-Q_2026-06-30_penn-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-06 | e4a4a68372f7e9e6e78807b6eaf280e8a90a9eb8c02165e49ee603cc73e74ba7 | Revolver availability at 2026-06-30 |
| 10-Q_2026-09-30_penn-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-05 | 289bd66b2b3ba7c0442b90807e0166affa057570b7680ca91b89ac74aa566568 | Nine-month statements, balance sheet at 2026-09-30, debt note, maturity ladder, market risk table, lease note, segment note |
| EX-99.1_2026-04-23_pennex991-q12026.htm.jsonl | Earnings press release (Exhibit 99.1) for the quarter ended 31 March 2026 | 2026-04-23 | bd58a1d530bb3cf8b4081bd3c78bc172ec144332ab675d2b2c776af0b2ffd599 | Cash and company-reported leverage at 2026-03-31, and the March and April 2026 financing events |
| EX-99.1_2026-08-06_pennex991-q22026.htm.jsonl | Earnings press release (Exhibit 99.1) for the quarter and six months ended 30 June 2026 | 2026-08-06 | 29f1d9698d7fe07b2e827f80ed415692eef3a01380a671b91317aa4e3711e167 | Cash and company-reported leverage at 2026-06-30, and the May 2026 financing events |
| EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl | Earnings press release (Exhibit 99.1) for the quarter and nine months ended 30 September 2026 | 2026-11-05 | 9cd3b27bc143946725e283ad70f7a65c0842d014c7b12f2cd6670b5aee829c8c | Trailing twelve month figures, company-reported leverage, cash rent, segment results and measure definitions |
| Source readiness (CP-0) | Earlier module output for this run: source inventory and content map | 2026-11-05 | d0f9a97508764e127ecaee247b1c61b613f773e432de0e0cfd1c674fec86a0b1 | Source list, periods covered and the limitations on the credit agreement, ratings and governance detail |

## Findings

### Bottom line

PENN’s net debt is 1.58x LTM adjusted EBITDA on carrying values, but lease and financing obligations outside that debt lift the company’s own lease-adjusted leverage to 5.6x, so creditors should read leverage on the wider basis.
Basis: calculation N3; calculation L3; calculation R17; calculation X5; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7

Reported EBITDA, which carries impairment losses, gives net leverage of 2.12x, and FY2025 reported EBITDA is negative because USD 945.3 million of impairment sits inside it, so adjusted EBITDA is the usable measure for that year. Adjusted EBITDA covers cash interest 2.85x on the trailing twelve months but only 1.97x after the cash rent that exceeds the rent expense in EBITDA.
Basis: calculation R14; calculation R18; calculation X4; calculation X2; 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7

Liquidity is USD 2,020.9 million against USD 400.0 million of senior notes due January 2027, and covenant headroom cannot be calculated because the credit agreement is not supplied.
Basis: calculation L7; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 16–19

### Analysis by dimension

Leverage has fallen on earnings growth and cash build rather than debt paydown. Total debt over adjusted EBITDA moved from 4.12x at the 2024 year end to 3.48x at the 2025 year end and 2.54x on the trailing twelve months, and net debt over adjusted EBITDA from 3.07x to 2.65x and 1.58x, while carrying-value debt stayed near USD 2.8 billion and cash rose from USD 706.6 million to USD 1,044.8 million. Creditors therefore depend on adjusted EBITDA holding at about USD 1,088.2 million, and the Interactive segment, whose nine-month segment loss narrowed from USD 227.6 million to USD 38.7 million, is the largest single source of earnings change.
Basis: calculation R4; calculation R10; calculation R16; calculation R5; calculation R11; calculation R17; calculation L3

Coverage is thinner than the headline suggests. Adjusted EBITDA covers cash interest 1.62x in FY2024, 2.17x in FY2025 and 2.85x on the trailing twelve months, while reported EBITDA covers 1.22x, a negative multiple in FY2025 and 2.12x. Cash rent to the REIT landlords of USD 992.5 million exceeds the USD 656.2 million of rent expense inside EBITDA by USD 336.3 million, so after that gap cover is 1.97x. A fall in earnings therefore reaches interest and lease payments together, which are largely fixed.
Basis: calculation R6; calculation R12; calculation R18; calculation X1; calculation X2; calculation X4; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7

Cash flow quality improved as development spending ended. Operating cash flow was USD 626.4 million in the nine months of 2026 against capital expenditure of USD 251.2 million, free cash flow of USD 375.2 million against negative USD 56.3 million a year earlier. Part of earlier development spending was financed by sale-and-leaseback proceeds from the REIT landlords (USD 216.3 million in 2026), which converts capex into financing obligations and rent; after principal payments on finance leases and financing obligations free cash flow for the nine months is USD 300.1 million.
Basis: calculation F3; calculation F4; calculation F5; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6

Liquidity is adequate for near-term maturities. Cash of USD 1,044.8 million and an undrawn revolver of USD 976.1 million give USD 2,020.9 million, against the only large maturity inside twelve months, USD 400.0 million of senior unsecured notes due January 2027, plus current amortisation of USD 33.1 million. The revolver and Term Loan A were extended to 2031 in April 2026 and the Term Loan B to 2033 in May 2026, so the 2027 notes are the near-term refinancing event; the sources show an intent to refinance but no executed refinancing.
Basis: calculation L7; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 16–19; EX-99.1_2026-04-23_pennex991-q12026.htm.jsonl, page 2; EX-99.1_2026-08-06_pennex991-q22026.htm.jsonl, page 3

Data quality and definition risks are material to how the figures are read. Reported EBITDA is derived and includes impairment losses, the issuer measures leverage three different ways, carrying-value debt differs from the issuer’s principal-based net debt by USD 38.3 million, and cash interest appears as USD 291.6 million in the cash flow statement but USD 100.9 million in the release for the nine months of 2026. Interim figures are unaudited. Each is logged with both figures, and none is reconciled silently.
Basis: calculation P1; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 6; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 8; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 11–12

Customer-related liabilities form a non-debt funding float that the cash balance partly backs. At the 2025 year end accrued liabilities included advanced deposits of USD 75.3 million (USD 90.0 million a year earlier), unpaid wagers of USD 52.4 million (USD 56.5 million), progressive jackpot liabilities of USD 79.1 million (USD 63.3 million) and the loyalty point obligation of USD 29.8 million (USD 29.7 million), together USD 236.6 million (USD 239.5 million). Some of the cash shown in net debt is therefore owed to customers, so net debt flatters the free cash position; the breakdown is not printed at the 2026 quarter ends.
Basis: 10-K_2025-12-31_penn-20251231.htm.jsonl, page 137; calculation W1

The most material gaps are the credit agreement, which blocks covenant headroom, and the lease and financing obligations of USD 8,157.6 million at present value, which sit outside Total Debt and explain why the lease-adjusted ratio is far above the debt-only ratios. The remaining gaps limit instrument-level detail rather than the main conclusions.
Basis: calculation X6; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 27; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 17

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_penn-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | US GAAP, audited | Tier 1 (audited statements) | Annual statements, debt note, segment note, Adjusted EBITDA reconciliation, REIT payments, covenant levels | Part III items are incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2026-03-31_penn-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2026-03-31 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited, no auditor review stated) | Revolver availability at 2026-03-31 | Unaudited |
| 10-Q_2026-06-30_penn-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-06-30 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited, no auditor review stated) | Revolver availability at 2026-06-30 | Unaudited |
| 10-Q_2026-09-30_penn-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and nine months ended 2026-09-30 with 2025 comparatives | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | US GAAP, unaudited | Tier 2b (unaudited, no auditor review stated) | Nine-month statements, balance sheet at 2026-09-30, debt note, maturity ladder, covenant levels, market risk table | Unaudited; the 2025-09-30 balance sheet is not printed |
| EX-99.1_2026-04-23_pennex991-q12026.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2026-03-31 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | Issuer non-GAAP measures, unaudited | Tier 2b | Cash at 2026-03-31; company-reported leverage at 2026-03-31; the April 2026 amendment and March 2026 notes issue | Company-defined measures |
| EX-99.1_2026-08-06_pennex991-q22026.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and six months ended 2026-06-30 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | Issuer non-GAAP measures, unaudited | Tier 2b | Cash at 2026-06-30; company-reported leverage at 2026-06-30; the May 2026 convertible repayment and amendment | Company-defined measures |
| EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and nine months ended 2026-09-30 | USD | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | Issuer non-GAAP measures, unaudited | Tier 2b | Trailing twelve month Consolidated Adjusted EBITDA, leverage ratios, cash rent, segment results | Company-defined measures |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PENN Entertainment, Inc. | Registrant, issuer of the senior unsecured notes and borrower under the credit facilities (named Penn National Gaming, Inc. in the credit agreement exhibit); the guarantor group and restricted group are Not supplied: the identities are in the credit agreement, which is not supplied | 31 December | USD (theScore reports in Canadian dollars and is translated) | Millions | PENN Entertainment, Inc. and subsidiaries, consolidated | US GAAP | FY2023 to FY2025 operations and cash flows; balance sheets at 2024-12-31 and 2025-12-31; Q1, Q2 and Q3 2026 with six- and nine-month totals and 2025 comparatives; balance sheets at 2026-03-31, 2026-06-30 and 2026-09-30 |

Two items dated after the 2026-09-30 balance sheet are flagged and kept out of period figures: the annual escalator effective 2026-11-01 raised the fixed rent of the largest master lease by USD 4.4 million, and a notice dated 2026-10-15 to redeem all Exchangeable Shares for common stock on or about 2026-12-15 is an equity event; neither changes net debt.
Basis: 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 31

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Derive EBITDA (Reported) from components | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Derivation | Not supplied: the issuer states no unadjusted EBITDA | 506.1; -226.7; -323.4; 714.5 (USD millions) | Operating income (loss) plus depreciation and amortization; impairment losses stay inside and income from unconsolidated affiliates is excluded; Analyst Judgement on the definition | FY2024; FY2025; 9M 2025; 9M 2026 |
| State debt at balance-sheet carrying value | 10-Q_2026-09-30_penn-20260930.htm.jsonl | Basis | Principal 2806.6 | Carrying value 2768.3 | Carrying value is principal less discounts and issuance costs of 38.3; principal is kept beside it; leases and financing obligations are separate balance sheet lines and are not added | 2026-09-30; also FY2024 and FY2025 year ends |
| Construct trailing twelve months to 2026-09-30 | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl | Derived period | FY2025, 9M 2025 and 9M 2026 as reported | LTM revenue 7282.6; LTM EBITDA (Reported) 811.2; LTM Consolidated Adjusted EBITDA 1088.2; LTM cash interest 382.4 | Full year plus current stub less prior-year stub; every component is available and the stubs are the same nine-month duration | 2026-09-30 |
| Keep Interactive revenue as presented | 10-Q_2026-09-30_penn-20260930.htm.jsonl | No adjustment | Interactive revenue includes gaming-tax gross-up of 562.7 for nine months 2026 | Unchanged | The issuer states the gross-up inside revenue and gaming taxes; no basis in the sources to net it; margins on revenue are labelled | 9M 2025; 9M 2026; FY2025 |
| Use cash and cash equivalents excluding restricted cash | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Basis | Closing cash in the cash flow statement includes restricted cash (1074.1 at 2026-09-30) | Cash and cash equivalents 1044.8 | Net debt uses the balance sheet line; the cash flow roll-forward keeps restricted cash | 2024-12-31; 2025-12-31; 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gaming (revenue) | 5169.5 | 5350.0 | 3991.2 | 4102.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Food, beverage, hotel, and other (revenue) | 1408.6 | 1611.0 | 1163.6 | 1374.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total revenues | 6578.1 | 6961.0 | 5154.8 | 5476.4 | USD millions | Reported; Interactive revenue includes gaming-tax gross-up reimbursements | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Gaming (operating expense) | 3429.0 | 3446.4 | 2575.9 | 2456.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Food, beverage, hotel, and other (operating expense) | 985.5 | 1162.2 | 831.1 | 1008.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| General and administrative | 1568.4 | 1633.8 | 1231.2 | 1289.1 | USD millions | Reported; includes rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Depreciation and amortization | 433.6 | 446.9 | 332.7 | 358.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Impairment losses | 89.1 | 945.3 | 840.0 | 8.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total operating expenses | 6505.6 | 7634.6 | 5810.9 | 5120.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Operating income (loss) | 72.5 | -673.6 | -656.1 | 355.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Interest expense, net | -470.5 | -405.8 | -303.9 | -307.7 | USD millions | Reported; net of capitalised interest | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Interest income | 23.6 | 9.7 | 7.6 | 7.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Income from unconsolidated affiliates | 28.1 | 37.7 | 29.1 | 26.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Gain on REIT transactions, net | Not supplied: the source prints a dash for this period | 3.3 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Gain on financing arrangement | Not supplied: the source prints a dash for this period | 215.1 | 215.1 | Not supplied: the source prints a dash for this period | USD millions | Reported; non-cash gain on the COVID-19 insurance financing arrangement | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Loss on early extinguishment of debt | -0.3 | -11.8 | -11.8 | -1.8 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Other | 5.3 | 4.7 | 7.5 | -0.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total other income (expenses) | -413.8 | -147.1 | -56.4 | -276.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Income (loss) before income taxes | -341.3 | -820.7 | -712.5 | 79.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Income tax benefit (expense) | 28.0 | -24.6 | -59.4 | -17.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Net income (loss) | -313.3 | -845.3 | -771.9 | 62.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Net loss attributable to non-controlling interest | 1.8 | 2.2 | 1.7 | 1.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Net income (loss) attributable to PENN Entertainment, Inc. | -311.5 | -843.1 | -770.2 | 63.8 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| EBITDA (Reported) | 506.1 | -226.7 | -323.4 | 714.5 | USD millions | Calculated: Operating income (loss) plus Depreciation and amortization; the issuer states no unadjusted EBITDA; impairment losses stay inside it and income from unconsolidated affiliates is excluded | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| EBITDA (Adjusted) | 672.2 | 830.1 | 604.3 | 862.4 | USD millions | Reported: Consolidated Adjusted EBITDA as the issuer defines it, after rent expense on triple net operating leases; add-backs are in the EBITDA bridge | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 67; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 6 |

### Segment schedule

| Business unit | Measure | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Northeast | Revenues | 2755.7 | 2769.2 | 2083.0 | 2127.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Northeast | Segment Adjusted EBITDAR | 801.0 | 795.0 | 601.6 | 622.8 | USD millions | Reported; before rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| South | Revenues | 1169.0 | 1167.1 | 881.5 | 874.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| South | Segment Adjusted EBITDAR | 433.2 | 401.6 | 305.8 | 321.5 | USD millions | Reported; before rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| West | Revenues | 525.3 | 543.2 | 405.7 | 444.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| West | Segment Adjusted EBITDAR | 187.5 | 197.6 | 150.3 | 159.9 | USD millions | Reported; before rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Midwest | Revenues | 1172.2 | 1181.4 | 878.2 | 968.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Midwest | Segment Adjusted EBITDAR | 486.8 | 474.6 | 354.7 | 386.2 | USD millions | Reported; before rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Interactive | Revenues | 959.9 | 1302.6 | 903.9 | 1056.0 | USD millions | Reported; includes gaming-tax gross-up reimbursements of 588.3 (FY2025), 405.6 (9M 2025) and 562.7 (9M 2026) | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Interactive | Segment Adjusted EBITDAR | -499.5 | -267.5 | -227.6 | -38.7 | USD millions | Reported; before rent expense on triple net operating leases | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Corporate, other and eliminations | Revenues | -4.0 | -2.5 | 2.5 | 5.2 | USD millions | Calculated: Other category (standalone racing and corporate overhead) plus intersegment eliminations, which are aggregated first | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Corporate, other and eliminations | Segment Adjusted EBITDAR | -116.7 | -139.5 | -110.5 | -94.9 | USD millions | Reported: Other category, mainly corporate overhead; no elimination line in EBITDAR | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Rent expense associated with triple net operating leases | Deduction from Segment Adjusted EBITDAR | -620.1 | -631.7 | -470.0 | -494.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5 |
| Consolidated | Consolidated Adjusted EBITDA | 672.2 | 830.1 | 604.3 | 862.4 | USD millions | Reported; segment sum less other category and rent expense equals the issuer figure | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 174–176; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 3–5; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | -313.3 | -845.3 | -771.9 | 62.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Depreciation and amortization | 433.6 | 446.9 | 332.7 | 358.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Amortization of debt discount and debt issuance costs | 8.7 | 8.3 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Noncash interest expense | 47.1 | 14.3 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Noncash operating lease expense | 316.6 | 372.4 | 266.0 | 308.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Gain on REIT transactions, net | Not supplied: the source prints a dash for this period | -3.3 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Loss on sale or disposal of property and equipment | 10.0 | 0.4 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Income from unconsolidated affiliates | -28.1 | -37.7 | -29.1 | -26.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Return on investment from unconsolidated affiliates | 33.4 | 37.4 | 28.5 | 29.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Deferred income taxes | -58.1 | 26.9 | 55.5 | 38.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Stock-based compensation | 52.9 | 60.9 | 48.5 | 47.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Investment Agreement warrant expense | 67.9 | 57.1 | 43.0 | Not supplied: the source prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Impairment losses | 89.1 | 945.3 | 840.0 | 8.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Gain on financing arrangement | Not supplied: the source prints a dash for this period | -215.1 | -215.1 | Not supplied: the source prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Loss on early extinguishment of debt | 0.3 | 11.8 | 11.8 | 1.8 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Accounts receivable | 58.9 | 1.6 | 24.3 | 12.5 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Prepaid expenses and other current assets | 26.7 | -19.0 | 11.8 | 33.6 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Other assets | -35.7 | -12.1 | -13.8 | 1.0 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Accounts payable | 14.2 | -2.4 | 7.5 | 11.0 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Accrued expenses | -67.7 | 18.0 | 1.0 | 25.7 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Income taxes | 33.4 | -3.8 | -2.1 | 19.3 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Operating lease liabilities | -298.2 | -356.6 | -254.6 | -298.6 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Other current and long-term liabilities | -48.4 | -23.9 | -17.5 | -28.5 | USD millions | Reported change in operating assets and liabilities | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Other (operating) | 16.0 | 26.1 | 34.5 | 22.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Capital expenditures | -482.7 | -647.7 | -457.3 | -251.2 | USD millions | Reported; total capex; the maintenance and project split is in the two memo rows below where the capex discussion gives it | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from sale-and-leaseback transactions in conjunction with development projects | Not supplied: the source prints a dash for this period | 280.0 | 130.0 | 216.3 | USD millions | Reported; REIT-funded development capex | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from sale of investments | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | 17.8 | Not supplied: the source prints a dash for this period | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Consideration paid for gaming licenses and other intangible assets | -57.9 | -37.7 | -29.3 | -28.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Other (investing) | -0.6 | 54.3 | 35.5 | 30.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from revolving credit facility | Not supplied: the source prints a dash for this period | 877.5 | 727.5 | 235.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Repayments on revolving credit facility | Not supplied: the source prints a dash for this period | -307.5 | -217.5 | -805.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from issuance of term loans, net of discount | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | Not supplied: the source prints a dash for this period | 1404.5 | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from issuance of bonds | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | Not supplied: the source prints a dash for this period | 600.0 | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Repayments on credit facilities | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | Not supplied: the source prints a dash for this period | -1406.9 | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Repayment and repurchases of convertible debt | Not supplied: the source prints a dash for this period | -223.8 | -223.8 | -106.7 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Principal payments on long-term debt | -37.5 | -37.5 | -28.2 | -20.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Payments of other long-term obligations | -10.1 | -0.7 | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Debt issuance costs | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | Not supplied: the source prints a dash for this period | -26.6 | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Principal payments on financing obligations | -40.8 | -43.5 | -32.4 | -34.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Principal payments on finance leases | -50.3 | -53.4 | -39.8 | -41.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Repurchases of common stock | Not supplied: the source prints a dash for this period | -354.4 | -269.4 | Not supplied: the source prints a dash for this period | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Proceeds from insurance financing | 29.3 | 26.8 | Not supplied: the source prints a dash for this period | 7.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Payments on insurance financing | -35.4 | -31.1 | -27.1 | -26.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Indemnification payments | -30.5 | Not supplied: the source prints a dash for this period | Not supplied: not a separate line in the nine-month statement | Not supplied: not a separate line in the nine-month statement | USD millions | Reported where printed | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Other (financing) | -11.2 | -18.0 | -18.3 | -11.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Maintenance capital expenditures (memo, from the capital expenditure discussion) | Not supplied: the capex discussion gives no maintenance and project split for this period | -239.3 | Not supplied: the capex discussion gives no maintenance and project split for this period | -111.5 | USD millions | Reported in the liquidity discussion, not in the cash flow statement; included in total capex | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 69 |
| Project capital expenditures (memo, from the capital expenditure discussion) | Not supplied: the capex discussion gives no maintenance and project split for this period | -408.4 | Not supplied: the capex discussion gives no maintenance and project split for this period | -139.7 | USD millions | Reported in the liquidity discussion, not in the cash flow statement; included in total capex | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 88; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 69 |
| Net Cash from Operating Activities | 359.3 | 508.2 | 401.0 | 626.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Investing Activities | -541.2 | -351.1 | -303.3 | -33.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Net Cash from Financing Activities | -186.5 | -165.6 | -129.0 | -231.7 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| FX Effect on Cash | -2.3 | -0.5 | -0.4 | -2.0 | USD millions | Reported: effect of currency rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Net Cash Change | -370.7 | -9.0 | -31.7 | 359.3 | USD millions | Reported: operating plus investing plus financing plus the FX effect; includes restricted cash | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Opening Cash | 1094.5 | 723.8 | 723.8 | 714.8 | USD millions | Reported: cash, cash equivalents and restricted cash at the start of the period | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Closing Cash | 723.8 | 714.8 | 692.1 | 1074.1 | USD millions | Reported: cash, cash equivalents and restricted cash at the end of the period | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| Cash Interest Paid | 415.5 | 383.0 | 292.2 | 291.6 | USD millions | Reported: cash paid for interest, net of amounts capitalized, from the supplemental disclosure; an operating cash outflow under US GAAP; the documents do not itemise it and the release states a much lower figure for traditional debt only | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 6 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 706.6 | 686.6 | 1044.8 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Accounts receivable, net | 256.8 | 254.2 | 240.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Prepaid expenses | 152.3 | 151.7 | 120.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Other current assets | 38.7 | 73.6 | 52.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total current assets | 1154.4 | 1166.1 | 1458.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 3705.0 | 3717.3 | 3441.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Investment in and advances to unconsolidated affiliates | 86.2 | 79.4 | 77.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Goodwill | 2563.1 | 1786.6 | 1764.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Other intangible assets, net | 1529.9 | 1404.8 | 1375.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Operating lease right-of-use assets | 3976.8 | 3966.1 | 3776.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Finance lease right-of-use assets | 2014.3 | 1924.3 | 1883.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Other assets | 232.0 | 223.9 | 217.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total assets | 15261.7 | 14268.5 | 13994.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Accounts payable | 50.8 | 54.2 | 57.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Current maturities of long-term debt | 38.2 | 38.2 | 33.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Current portion of financing obligations | 43.5 | 45.8 | 47.5 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Current portion of operating lease liabilities | 322.1 | 386.0 | 422.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Current portion of finance lease liabilities | 53.2 | 45.7 | 55.6 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Accrued expenses and other current liabilities | 907.3 | 905.6 | 902.7 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total current liabilities | 1415.1 | 1475.5 | 1518.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Long-term debt, net of current maturities, debt discounts, and debt issuance costs | 2732.5 | 2848.9 | 2735.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Long-term portion of financing obligations | 2343.1 | 2297.8 | 2262.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Long-term portion of operating lease liabilities | 3654.3 | 3592.4 | 3376.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Long-term portion of finance lease liabilities | 2062.3 | 2017.4 | 1994.0 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Deferred income taxes | 61.0 | 87.8 | 125.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Other long-term liabilities | 135.0 | 121.2 | 86.4 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total liabilities | 12403.3 | 12441.0 | 12097.7 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 105–106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Common stock | 1.8 | 1.8 | 1.8 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Treasury stock, at cost | -779.5 | -1137.2 | -1137.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Additional paid-in capital | 4542.4 | 4652.8 | 4689.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Accumulated deficit | -647.0 | -1490.1 | -1426.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Accumulated other comprehensive loss | -255.0 | -193.3 | -222.3 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total PENN Entertainment, Inc. stockholders’ equity | 2862.7 | 1834.0 | 1905.1 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Non-controlling interest | -4.3 | -6.5 | -7.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total stockholders’ equity | 2858.4 | 1827.5 | 1897.2 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total liabilities and stockholders’ equity | 15261.7 | 14268.5 | 13994.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total Assets | 15261.7 | 14268.5 | 13994.9 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total Liabilities | 12403.3 | 12441.0 | 12097.7 | USD millions | Reported | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Total Equity | 2858.4 | 1827.5 | 1897.2 | USD millions | Reported: total stockholders’ equity including non-controlling interest; no temporary equity | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| Total Debt | 2770.7 | 2887.1 | 2768.3 | USD millions | Calculated: current maturities of long-term debt plus long-term debt net of current maturities, discounts and issuance costs; financing obligations, finance leases and operating leases are separate balance sheet lines and are not added | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| Cash & Equivalents | 706.6 | 686.6 | 1044.8 | USD millions | Reported: cash and cash equivalents, excluding restricted cash | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 105; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amended Term Loan A Facility due 2031 | Term loan A | Not supplied: instrument carrying values are not disclosed | 441.3 | 441.3 | Not applicable | Secured: interests in owned real property listed in Item 2 collateralise the obligations under the Amended Credit Facilities, with stated exceptions | Not supplied: no source labels the facilities’ ranking | USD | 441.3 | Not applicable | Term SOFR plus 1.50% to 2.25% by total net leverage ratio | Floating | Term SOFR | 150 to 225 | Not applicable | April 2031 | Not supplied: scheduled amortisation by instrument is not stated | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–17 |
| Amended Term Loan B Facility due 2033 | Term loan B | Not supplied: instrument carrying values are not disclosed | 957.5 | 957.5 | Not applicable | Secured: interests in owned real property listed in Item 2 collateralise the obligations under the Amended Credit Facilities, with stated exceptions | Not supplied: no source labels the facilities’ ranking | USD | 957.5 | Not applicable | Term SOFR plus 2.00% (base rate plus 1.00%) | Floating | Term SOFR | 200 | 50 | May 2033 | Not supplied: scheduled amortisation by instrument is not stated | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–18 |
| Amended Revolving Credit Facility due 2031 | Revolving credit facility | Not supplied: instrument carrying values are not disclosed | Not supplied: the debt table prints a dash; availability of 976.1 is the 1000.0 commitment less 23.9 of letters of credit | Not supplied: the debt table prints a dash; availability of 976.1 is the 1000.0 commitment less 23.9 of letters of credit | 1000.0 | Secured: interests in owned real property listed in Item 2 collateralise the obligations under the Amended Credit Facilities, with stated exceptions | Not supplied: no source labels the facilities’ ranking | USD | Not supplied: the debt table prints a dash; availability of 976.1 is the 1000.0 commitment less 23.9 of letters of credit | Not applicable | Term SOFR plus 1.50% to 2.25% by total net leverage ratio; commitment fee 0.20% to 0.35% on unused amounts | Floating | Term SOFR | 150 to 225 | Not applicable | April 2031 | Not applicable | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–18 |
| 5.625% senior unsecured notes due 2027 | Senior unsecured notes | Not supplied: instrument carrying values are not disclosed | 400.0 | Not applicable | Not applicable | Unsecured (stated) | Senior (the notes are stated to be senior unsecured notes) | USD | 400.0 | Not applicable | 5.625% | Fixed | Not applicable | Not applicable | Not applicable | 2027-01-15 | 0.0 | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 18; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 139 |
| 4.125% senior unsecured notes due 2029 | Senior unsecured notes | Not supplied: instrument carrying values are not disclosed | 400.0 | Not applicable | Not applicable | Unsecured (stated) | Senior (the notes are stated to be senior unsecured notes) | USD | 400.0 | Not applicable | 4.125% | Fixed | Not applicable | Not applicable | Not applicable | 2029-07-01 | 0.0 | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 139 |
| 6.75% senior unsecured notes due 2031 | Senior unsecured notes | Not supplied: instrument carrying values are not disclosed | 600.0 | Not applicable | Not applicable | Unsecured (stated) | Senior (the notes are stated to be senior unsecured notes) | USD | 600.0 | Not applicable | 6.75% | Fixed | Not applicable | Not applicable | Not applicable | 2031-04-01 | 0.0 | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 18 |
| Other long-term obligations | Other long-term obligations | Not supplied: instrument carrying values are not disclosed | 7.8 | Not applicable | Not applicable | Not supplied: not stated | Not supplied: not stated | USD | 7.8 | Not applicable | Not supplied: not stated | Not supplied: not stated | Not applicable | Not applicable | Not applicable | Not supplied: not stated | Not supplied: scheduled amortisation by instrument is not stated | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16 |
| Financing cost adjustment | Debt discounts and debt issuance costs | -38.3 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -38.3 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total revenues (LTM to 2026-09-30) | LTM | USD 6,961.0m | USD 5,476.4m | USD 5,154.8m | USD 7,282.6m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Interactive revenue includes gaming-tax gross-up |
| EBITDA (Reported) (LTM to 2026-09-30) | LTM | USD -226.7m | USD 714.5m | USD -323.4m | USD 811.2m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Derived from operating income and depreciation; impairment losses included in all three components |
| Consolidated Adjusted EBITDA (LTM to 2026-09-30) | LTM | USD 830.1m | USD 862.4m | USD 604.3m | USD 1,088.2m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl | Equals the trailing twelve month figure the issuer states |
| Cash Interest Paid (LTM to 2026-09-30) | LTM | USD 383.0m | USD 291.6m | USD 292.2m | USD 382.4m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Cash paid for interest net of amounts capitalized |
| Net Cash from Operating Activities (LTM to 2026-09-30) | LTM | USD 508.2m | USD 626.4m | USD 401.0m | USD 733.6m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Includes non-cash lease items as printed |
| Capital expenditures, outflow (LTM to 2026-09-30) | LTM | USD 647.7m | USD 251.2m | USD 457.3m | USD 441.6m | Calculated | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl | Total capex; part is funded by sale-and-leaseback proceeds shown separately |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 2770.7 | Net debt data Gross debt (T4.6 Total Debt), FY2024 / 2024-12-31 | 506.1 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 5.47 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2064.1 | Net debt data Net debt, FY2024 / 2024-12-31 | 506.1 | T4.4 EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.08 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 506.1 | T4.4 EBITDA (Reported), FY2024 | 415.5 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.22 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses |
| Total debt / adjusted EBITDA | Total Debt (carrying value) / EBITDA (Adjusted) | 2770.7 | Net debt data Gross debt (T4.6 Total Debt), FY2024 / 2024-12-31 | 672.2 | T4.4 EBITDA (Adjusted), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.12 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2064.1 | Net debt data Net debt, FY2024 / 2024-12-31 | 672.2 | T4.4 EBITDA (Adjusted), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.07 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 672.2 | T4.4 EBITDA (Adjusted), FY2024 | 415.5 | T4.5 Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 1.62 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 2887.1 | Net debt data Gross debt (T4.6 Total Debt), FY2025 / 2025-12-31 | -226.7 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: reported EBITDA is negative because impairment losses of 945.3 are charged inside it | Not Calculable | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2200.5 | Net debt data Net debt, FY2025 / 2025-12-31 | -226.7 | T4.4 EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | Not calculable: reported EBITDA is negative because impairment losses of 945.3 are charged inside it | Not Calculable | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | -226.7 | T4.4 EBITDA (Reported), FY2025 | 383.0 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | -0.59 | Calculated | Tier 1 (audited statements) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses; negative because reported EBITDA is negative |
| Total debt / adjusted EBITDA | Total Debt (carrying value) / EBITDA (Adjusted) | 2887.1 | Net debt data Gross debt (T4.6 Total Debt), FY2025 / 2025-12-31 | 830.1 | T4.4 EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.48 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2200.5 | Net debt data Net debt, FY2025 / 2025-12-31 | 830.1 | T4.4 EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.65 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 830.1 | T4.4 EBITDA (Adjusted), FY2025 | 383.0 | T4.5 Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.17 | Calculated | Tier 1 debt and cash; Tier 2b issuer non-GAAP EBITDA | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge |
| Total debt / EBITDA | Total Debt (carrying value) / EBITDA (Reported) | 2768.3 | Net debt data Gross debt (T4.6 Total Debt), 2026-09-30 | 811.2 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 3.41 | Calculated | Tier 2b (unaudited) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1723.5 | Net debt data Net debt, 2026-09-30 | 811.2 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.12 | Calculated | Tier 2b (unaudited) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 811.2 | T4.8 EBITDA (Reported) LTM to 2026-09-30 | 382.4 | T4.8 Cash Interest Paid LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.12 | Calculated | Tier 2b (unaudited) | EBITDA (Reported) is derived as operating income plus depreciation and amortization and includes impairment losses; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| Total debt / adjusted EBITDA | Total Debt (carrying value) / EBITDA (Adjusted) | 2768.3 | Net debt data Gross debt (T4.6 Total Debt), 2026-09-30 | 1088.2 | T4.8 Consolidated Adjusted EBITDA LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.54 | Calculated | Tier 2b (unaudited) | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1723.5 | Net debt data Net debt, 2026-09-30 | 1088.2 | T4.8 Consolidated Adjusted EBITDA LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 1.58 | Calculated | Tier 2b (unaudited) | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1088.2 | T4.8 Consolidated Adjusted EBITDA LTM to 2026-09-30 | 382.4 | T4.8 Cash Interest Paid LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 2.85 | Calculated | Tier 2b (unaudited) | EBITDA (Adjusted) is the issuer’s Consolidated Adjusted EBITDA, after triple net rent expense; add-backs in the EBITDA bridge; trailing twelve months to 2026-09-30 built from FY2025 plus nine months 2026 less nine months 2025 |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Total revenues x 100 | 672.2 | T4.4 EBITDA (Adjusted), FY2024 | 6578.1 | T4.4 Total revenues, FY2024 | FY2024 | USD | US$m | 10.22 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; Interactive revenue includes gaming-tax gross-up |
| Capital expenditures / revenue | Capital expenditures / Total revenues x 100 | 482.7 | T4.5 Capital expenditures (outflow), FY2024 | 6578.1 | T4.4 Total revenues, FY2024 | FY2024 | USD | US$m | 7.34 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; total capex including development projects funded by sale-and-leaseback proceeds |
| Net cash from operating activities / total debt | Net Cash from Operating Activities / Total Debt x 100 | 359.3 | T4.5 Net Cash from Operating Activities, FY2024 | 2770.7 | T4.6 Total Debt, FY2024 | FY2024 | USD | US$m | 12.97 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; carrying-value debt only, leases excluded |
| Free cash flow (operating cash flow less capital expenditures) | Net Cash from Operating Activities - Capital expenditures | 359.3 | T4.5 Net Cash from Operating Activities, FY2024 | 482.7 | T4.5 Capital expenditures (outflow), FY2024 | FY2024 | USD | US$m | -123.4 | Calculated | Tier 1 (audited statements) | Levered free cash flow before principal payments on finance leases and financing obligations and before dividends and buybacks; working capital included |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Total revenues x 100 | 830.1 | T4.4 EBITDA (Adjusted), FY2025 | 6961.0 | T4.4 Total revenues, FY2025 | FY2025 | USD | US$m | 11.93 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; Interactive revenue includes gaming-tax gross-up |
| Capital expenditures / revenue | Capital expenditures / Total revenues x 100 | 647.7 | T4.5 Capital expenditures (outflow), FY2025 | 6961.0 | T4.4 Total revenues, FY2025 | FY2025 | USD | US$m | 9.30 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; total capex including development projects funded by sale-and-leaseback proceeds |
| Net cash from operating activities / total debt | Net Cash from Operating Activities / Total Debt x 100 | 508.2 | T4.5 Net Cash from Operating Activities, FY2025 | 2887.1 | T4.6 Total Debt, FY2025 | FY2025 | USD | US$m | 17.60 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage; carrying-value debt only, leases excluded |
| Free cash flow (operating cash flow less capital expenditures) | Net Cash from Operating Activities - Capital expenditures | 508.2 | T4.5 Net Cash from Operating Activities, FY2025 | 647.7 | T4.5 Capital expenditures (outflow), FY2025 | FY2025 | USD | US$m | -139.5 | Calculated | Tier 1 (audited statements) | Levered free cash flow before principal payments on finance leases and financing obligations and before dividends and buybacks; working capital included |
| Revenue growth | Total revenues FY2025 / Total revenues FY2024 - 1 | 6961.0 | T4.4 Total revenues, FY2025 | 6578.1 | T4.4 Total revenues, FY2024 | FY2025 | USD | US$m | 5.82 | Calculated | Tier 1 (audited statements) | Calculated Value is a percentage change |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth versus the prior comparable period (%) | 3.38 | 5.82 | Not supplied: the nine months 2024 base is not in the sources | 6.24 | Up | Growth is driven by Interactive and the retail development projects; Interactive revenue includes gaming-tax gross-up |
| Profitability | Adjusted EBITDA margin (%) | 10.22 | 11.93 | 11.72 | 15.75 | Up | Margin on issuer-adjusted EBITDA, after triple net rent expense |
| Cash flow | Capital expenditures / revenue (%) | 7.34 | 9.30 | 8.87 | 4.59 | Down | Capex fell as development projects completed; part of it was funded by sale-and-leaseback proceeds |
| Cash flow | Free cash flow, operating cash flow less capital expenditures (USD millions) | -123.4 | -139.5 | -56.3 | 375.2 | Up | Positive in 9M 2026 only; before principal payments on finance leases and financing obligations |
| Segment | Interactive Segment Adjusted EBITDAR (USD millions) | -499.5 | -267.5 | -227.6 | -38.7 | Up | Loss narrowing but still negative |
| Segment | Retail Segment Adjusted EBITDAR, four reportable segments (USD millions) | 1908.5 | 1868.8 | 1412.4 | 1490.4 | Up | Calculated sum of Northeast, South, West and Midwest; nine-month comparison is like for like |
| Leases | Cash payments to REIT landlords (USD millions) | 950.4 | 967.8 | 721.9 | 746.6 | Up | Includes payments on finance leases and financing obligations that sit outside EBITDA |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): operating income plus depreciation and amortization, impairment losses included | Consolidated Adjusted EBITDA adds back stock-based compensation, impairment losses, pre-opening expenses, income from unconsolidated affiliates and other items, and is stated after triple net rent expense | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 67 | FY2024; FY2025; 9M 2025; 9M 2026 | High: FY2025 reported -226.7 against adjusted 830.1 | Financial foundation; Fundamental credit | Show both, labelled; reported ratios are not calculable for FY2025, so adjusted ratios carry that year |
| Debt (carrying value against principal) | Total Debt at balance-sheet carrying value: 2768.3 at 2026-09-30 | Total traditional debt at principal: 2806.6; traditional net debt 1761.8 against derived net debt 1723.5 | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7 | 2024-12-31; 2025-12-31; 2026-09-30 | Medium: the difference is the 38.3 of discounts and issuance costs | Financial foundation; Fundamental credit | Use carrying value for ratios; keep principal beside it; the issuer’s net debt is on principal |
| Net leverage | Net debt (carrying value) / adjusted EBITDA: 1.58x at 2026-09-30 | Lease-adjusted net leverage 6.4x, 5.9x and 5.6x and traditional net leverage 3.8x, 2.9x and 2.3x at the 2026 quarter ends, each with its own numerator and denominator; the covenant ratio is defined in the credit agreement and is not supplied | EX-99.1_2026-04-23_pennex991-q12026.htm.jsonl, page 6; EX-99.1_2026-08-06_pennex991-q22026.htm.jsonl, page 8; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, pages 11–12; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 17 | 2025-12-31; 2026-03-31; 2026-06-30; 2026-09-30 | High: the measures span 1.58x to 5.6x | Fundamental credit | Present each with its definition; never compare across definitions |
| Lease and financing obligations | Not added to Total Debt: separate balance sheet lines of 3798.2 operating, 2049.6 finance and 2309.8 financing obligations (present values) | Issuer capitalises cash rent at eight times in its lease-adjusted ratio | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 27; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 12 | 2026-09-30 | High: 8157.6 of claims sit outside Total Debt | Fundamental credit | Carry a lease-adjusted view beside the debt-only ratios |
| Cash interest | Cash Interest Paid: cash paid for interest net of amounts capitalized, 291.6 for nine months 2026 | Cash paid for interest on traditional debt: 100.9 for nine months 2026 | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 6; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 8 | 9M 2025; 9M 2026; FY2025 | Medium | Financial foundation; Fundamental credit | Use the cash flow statement figure for cover; quote the release figure only with its label |
| Rent and payments to REIT landlords | Rent expense associated with triple net operating leases, an operating expense inside EBITDA: 656.2 for the trailing twelve months | Cash payments to REIT landlords under all triple net leases: 992.5 for the trailing twelve months, including finance lease and financing obligation payments that sit outside EBITDA; minimum annual rent 986.3 of which 970.0 relates to the triple net leases | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 73–74; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 91 | FY2025; 9M 2025; 9M 2026; LTM 2026-09-30 | High: the 336.3 difference is a fixed claim outside EBITDA | Fundamental credit | Quote both with their labels; cover after the gap is 1.97x |
| Cash | Cash & Equivalents 1044.8, excluding restricted cash | Closing cash in the cash flow statement 1074.1 includes restricted cash | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 6 | 2026-09-30 | Low | Financial foundation | Net debt uses cash and cash equivalents; the cash flow roll-forward keeps restricted cash |
| Revenue | Total revenues as reported | Interactive revenue includes gaming-tax gross-up of 562.7 for nine months 2026 and 405.6 for nine months 2025 | EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 5; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 15 | 9M 2025; 9M 2026; FY2025 | Low | Financial foundation | Margins on revenue are labelled; no netting is applied |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage metrics | Ready with Limitations | EBITDA (Reported) is derived and negative for FY2025; interim periods are unaudited trailing figures; the covenant ratio is not available | Quote adjusted and reported ratios together with their labels |
| Liquidity and maturity ladder | Ready | None identified; the January 2027 notes sit inside twelve months and are classified long-term on stated intent and ability to refinance | Monitor refinancing of the 2027 notes |
| Debt structure by instrument | Ready with Limitations | Carrying values per instrument, per-instrument amortisation and the credit facilities’ ranking are not disclosed | Obtain the credit agreement and indentures |
| Covenant analysis | Not Ready | The credit agreement’s definitions and the reported covenant ratios are not supplied | Obtain the credit agreement and the latest compliance certificate |
| Lease-adjusted leverage | Ready with Limitations | Company-defined ratios; lease and financing obligations are outside Total Debt | Carry the issuer’s lease-adjusted view beside debt-only ratios |
| Segment and operating KPIs | Ready with Limitations | Interactive revenue includes gaming-tax gross-up; segment measure is before triple net rent | Label margins and keep the segment measure before rent |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2770.7 | 706.6 | 2064.1 | US$m | Gross debt is carrying value: current maturities of long-term debt 38.2 plus long-term debt net of current maturities, discounts and issuance costs 2732.5; contractual principal is 2797.3 less discounts and issuance costs of 26.6; financing obligations, finance leases and operating leases are separate balance sheet lines and are not included; cash is cash and cash equivalents excluding restricted cash; reported at the balance sheet date |
| FY2025 / 2025-12-31 | 2887.1 | 686.6 | 2200.5 | US$m | Gross debt is carrying value: current maturities of long-term debt 38.2 plus long-term debt net of current maturities, discounts and issuance costs 2848.9; contractual principal is 2904.1 less discounts and issuance costs of 17.0; financing obligations, finance leases and operating leases are separate balance sheet lines and are not included; cash is cash and cash equivalents excluding restricted cash; reported at the balance sheet date |
| 2026-09-30 | 2768.3 | 1044.8 | 1723.5 | US$m | Gross debt is carrying value: current maturities of long-term debt 33.1 plus long-term debt net of current maturities, discounts and issuance costs 2735.2; contractual principal is 2806.6 less discounts and issuance costs of 38.3; financing obligations, finance leases and operating leases are separate balance sheet lines and are not included; cash is cash and cash equivalents excluding restricted cash; reported at the balance sheet date |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2806.6 | -38.3 | 2768.3 | US$m | Principal is the sum of the maturity ladder; the one reconciling item is debt discounts and debt issuance costs of -38.3 (calculation shown); no debt is left out of the ladder; carrying value is Gross debt of Net debt data for 2026-09-30 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2026 remainder | 8.1 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30; remainder of 2026 excludes the nine months already elapsed |
| 2027 | 433.1 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30; includes the 5.625% senior unsecured notes of 400.0 due 2027-01-15, classified long-term on stated intent and ability to refinance |
| 2028 | 33.1 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30 |
| 2029 | 433.2 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30; includes the 4.125% senior unsecured notes of 400.0 due 2029-07-01 |
| 2030 | 33.2 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30 |
| Thereafter | 1865.9 | US$m | Schedule of future minimum repayments of long-term debt at 2026-09-30; from 2031 onward, so by their maturities in the debt note it holds the 6.75% senior unsecured notes due 2031-04-01 and the remaining Term Loan A and Term Loan B balances |

Amounts are contractual principal; the 2027 bucket includes the senior notes due January 2027 that the issuer classifies as long-term on intent and ability to refinance.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5.47 | 4.08 | x | Carrying-value debt over derived EBITDA (Reported); impairment losses inside EBITDA |
| FY2025 / 2025-12-31 | Not supplied: reported EBITDA is negative | Not supplied: reported EBITDA is negative | x | Carrying-value debt over derived EBITDA (Reported); impairment losses inside EBITDA; the ratio is not calculable on a negative denominator, see the adjusted rows of the calculation register |
| 2026-09-30 | 3.41 | 2.12 | x | Carrying-value debt over trailing twelve months EBITDA (Reported) to 2026-09-30; impairment losses inside EBITDA |

Reported EBITDA carries impairment losses, so the FY2025 point is not calculable and the adjusted ratios in the calculation register show the issuer-adjusted view.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.22 | x | EBITDA (Reported) over cash interest paid; cash interest is the cash flow statement figure net of capitalised amounts and is far above the release’s traditional-debt figure |
| FY2025 / 2025-12-31 | -0.59 | x | EBITDA (Reported) over cash interest paid; cash interest is the cash flow statement figure net of capitalised amounts and is far above the release’s traditional-debt figure; negative because reported EBITDA is negative |
| 2026-09-30 | 2.12 | x | EBITDA (Reported) over cash interest paid; cash interest is the cash flow statement figure net of capitalised amounts and is far above the release’s traditional-debt figure; trailing twelve months to 2026-09-30 |

The FY2025 reported cover is negative because reported EBITDA is negative; adjusted cover is in the calculation register.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 706.6 | 979.1 | US$m | Cash excludes restricted cash; undrawn is the 1000.0 revolver less nothing drawn and letters of credit of 20.9; source 10-K_2025-12-31_penn-20251231.htm.jsonl, page 139 |
| FY2025 / 2025-12-31 | 686.6 | 406.1 | US$m | Cash excludes restricted cash; undrawn is the 1000.0 revolver less 570.0 drawn and letters of credit of 23.9; source 10-K_2025-12-31_penn-20251231.htm.jsonl, page 139 |
| 2026-03-31 | 708.0 | 951.1 | US$m | Interim date; cash from the release; undrawn is the 1000.0 revolver less 25.0 drawn and letters of credit of 23.9; source EX-99.1_2026-04-23_pennex991-q12026.htm.jsonl, page 6; 10-Q_2026-03-31_penn-20260331.htm.jsonl, page 16 |
| 2026-06-30 | 887.2 | 976.1 | US$m | Interim date; cash from the release; undrawn is the 1000.0 revolver less nothing drawn and letters of credit of 23.9; source EX-99.1_2026-08-06_pennex991-q22026.htm.jsonl, page 3; 10-Q_2026-06-30_penn-20260630.htm.jsonl, page 19 |
| 2026-09-30 | 1044.8 | 976.1 | US$m | Cash excludes restricted cash; undrawn is the 1000.0 revolver less nothing drawn and letters of credit of 23.9; source 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 17–18 |

Undrawn committed facilities is the revolver availability the issuer states, net of letters of credit and drawings; cash excludes restricted cash.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- |
| Total revenues | 6578.1 | 6961.0 | 7282.6 | US$m | Reported; LTM calculated; Interactive revenue includes gaming-tax gross-up |
| Consolidated Adjusted EBITDA (issuer-adjusted) | 672.2 | 830.1 | 1088.2 | US$m | Reported non-GAAP, after triple net rent expense; LTM equals the issuer figure |
| EBITDA (Reported, derived) | 506.1 | -226.7 | 811.2 | US$m | Calculated: operating income plus depreciation and amortization; includes impairment losses |
| Net cash from operating activities | 359.3 | 508.2 | 733.6 | US$m | Reported; LTM calculated |
| Capital expenditures | 482.7 | 647.7 | 441.6 | US$m | Reported outflow; LTM calculated |
| Cash interest paid | 415.5 | 383.0 | 382.4 | US$m | Reported net of capitalised amounts; LTM calculated |
| Total debt (carrying value) | 2770.7 | 2887.1 | 2768.3 | US$m | Balance sheet carrying value; principal is 2797.3, 2904.1 and 2806.6 |
| Cash and cash equivalents | 706.6 | 686.6 | 1044.8 | US$m | Balance sheet; excludes restricted cash |
| Net debt (carrying value less cash) | 2064.1 | 2200.5 | 1723.5 | US$m | Calculated |
| Total debt / EBITDA (Reported) | 5.47 | Not calculable: negative denominator | 3.41 | x | Calculated; impairment losses inside EBITDA |
| Net debt / EBITDA (Reported) | 4.08 | Not calculable: negative denominator | 2.12 | x | Calculated |
| Total debt / adjusted EBITDA | 4.12 | 3.48 | 2.54 | x | Calculated, labelled adjusted |
| Net debt / adjusted EBITDA | 3.07 | 2.65 | 1.58 | x | Calculated, labelled adjusted |
| EBITDA (Reported) / cash interest | 1.22 | -0.59 | 2.12 | x | Calculated |
| Adjusted EBITDA / cash interest | 1.62 | 2.17 | 2.85 | x | Calculated, labelled adjusted |
| Lease-adjusted net leverage (company-reported) | Not supplied: the 2024 figure is not in the supplied documents | 6.8 | 5.6 | x | Issuer-defined: cash rent payments capitalised at 8 times plus traditional net debt, over Consolidated Adjusted EBITDA plus rent expense |
| Traditional net leverage (company-reported) | Not supplied: the 2024 figure is not in the supplied documents | 4.5 | 2.3 | x | Issuer-defined: traditional net debt over Consolidated Adjusted EBITDA plus rent expense less cash rent payments |
| Cash payments to REIT landlords | 950.4 | 967.8 | 992.5 | US$m | Reported payments to GLPI and VICI under the triple net leases; LTM calculated |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | Sources read: the third quarter 2026 quarterly report and release, both dated 2026-11-05; no debt issue, repayment, acquisition, disposal or dividend after the 2026-09-30 balance sheet date is stated; the 2026 refinancings are inside the quarterly balance sheets |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 6578.1 | 672.2 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted Consolidated Adjusted EBITDA, after triple net rent expense; revenue includes Interactive gaming-tax gross-up |
| FY2025 / 2025-12-31 | 6961.0 | 830.1 | US$m | Twelve months; issuer-adjusted EBITDA; the reported measure is negative at -226.7 because of impairment losses of 945.3 |
| 2026-09-30 | 7282.6 | 1088.2 | US$m | Twelve months to 2026-09-30 calculated as FY2025 plus nine months 2026 less nine months 2025; issuer-adjusted EBITDA equals the issuer’s trailing figure |

The EBITDA is the issuer-adjusted measure after rent expense, not the derived reported measure, and the last row is a trailing twelve month figure.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Amended Term Loan A Facility due 2031 | 1 | Yes | 441.3 | 0.54 | US$m | Principal at 2026-09-30; cumulative principal 441.3 over trailing twelve months EBITDA (Reported) of 811.2; obligor PENN Entertainment, Inc. with subsidiary guarantors party to the amendments, identities not supplied; secured by interests in listed owned real property; rank follows the stated security and no document states an intercreditor ranking |
| Amended Term Loan B Facility due 2033 | 1 | Yes | 957.5 | 1.72 | US$m | Principal at 2026-09-30; cumulative principal 1398.8 over trailing twelve months EBITDA (Reported) of 811.2; obligor PENN Entertainment, Inc. with subsidiary guarantors party to the amendments, identities not supplied; secured by interests in listed owned real property; rank follows the stated security and no document states an intercreditor ranking |
| 5.625% senior unsecured notes due 2027 | 2 | No | 400.0 | 2.22 | US$m | Principal at 2026-09-30; cumulative principal 1798.8 over trailing twelve months EBITDA (Reported) of 811.2; obligor PENN Entertainment, Inc., not guaranteed by subsidiaries; stated senior unsecured; rank follows the stated security |
| 4.125% senior unsecured notes due 2029 | 2 | No | 400.0 | 2.71 | US$m | Principal at 2026-09-30; cumulative principal 2198.8 over trailing twelve months EBITDA (Reported) of 811.2; obligor PENN Entertainment, Inc., not guaranteed by subsidiaries; stated senior unsecured; rank follows the stated security |
| 6.75% senior unsecured notes due 2031 | 2 | No | 600.0 | 3.45 | US$m | Principal at 2026-09-30; cumulative principal 2798.8 over trailing twelve months EBITDA (Reported) of 811.2; obligor PENN Entertainment, Inc., not guaranteed by subsidiaries; stated senior unsecured; rank follows the stated security; on adjusted EBITDA of 1088.2 the cumulative figure is 2.57 |

Amounts are principal, the revolver has no balance, and the rank follows the stated security because no document states an intercreditor ranking.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported) FY2025 | -226.7 | US$m | Opening: reported measure, derived as operating income -673.6 plus depreciation and amortization 446.9 |
| Stock-based compensation | 60.9 | US$m | Issuer add-back from its reconciliation; classification: share-based compensation; realisation status: not stated |
| Cash-settled stock-based award variance | -12.9 | US$m | Issuer add-back from its reconciliation; classification: other stated: difference between budget and actual expense for cash-settled awards; realisation status: not stated |
| Loss on disposal of assets | 0.4 | US$m | Issuer add-back from its reconciliation; classification: other stated: loss on disposal of assets; realisation status: not stated |
| Pre-opening expenses | 17.3 | US$m | Issuer add-back from its reconciliation; classification: other stated: pre-opening expenses; realisation status: not stated |
| Impairment losses | 945.3 | US$m | Issuer add-back from its reconciliation; classification: other stated: impairment losses; realisation status: not stated |
| Income from unconsolidated affiliates | 37.7 | US$m | Issuer add-back from its reconciliation; classification: other stated: unconsolidated affiliates included in adjusted EBITDA; realisation status: not stated |
| Non-operating items of equity method investments | 4.5 | US$m | Issuer add-back from its reconciliation; classification: other stated: depreciation of the Kansas Entertainment joint venture; realisation status: not stated |
| Other expenses | 3.6 | US$m | Issuer add-back from its reconciliation; classification: other stated; realisation status: not stated |
| Consolidated Adjusted EBITDA FY2025 | 830.1 | US$m | Closing: issuer-adjusted measure as reported; opening plus the stated add-backs equals it exactly |

The opening measure is derived by this analysis and the closing measure is the issuer’s; every step is the issuer’s own add-back.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 13 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 34 |
| Fields total | 34 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

## Calculations

Each row works one figure from stated inputs; the ratios repeat the calculation register so that every figure quoted in the text has its inputs beside it.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| G1 | Gross debt (carrying value), FY2024 / 2024-12-31 | Current maturities of long-term debt 38.2 plus long-term debt net of current maturities, discounts and issuance costs 2732.5 | USD 2,770.7 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106 |
| G2 | Gross debt (carrying value), FY2025 / 2025-12-31 | Current maturities of long-term debt 38.2 plus long-term debt net of current maturities, discounts and issuance costs 2848.9 | USD 2,887.1 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106 |
| G3 | Gross debt (carrying value), 2026-09-30 | Current maturities of long-term debt 33.1 plus long-term debt net of current maturities, discounts and issuance costs 2735.2 | USD 2,768.3 million | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| N1 | Net debt (carrying value less cash), FY2024 / 2024-12-31 | Gross debt 2770.7 less cash and cash equivalents 706.6 | USD 2,064.1 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106 |
| N2 | Net debt (carrying value less cash), FY2025 / 2025-12-31 | Gross debt 2887.1 less cash and cash equivalents 686.6 | USD 2,200.5 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 106 |
| N3 | Net debt (carrying value less cash), 2026-09-30 | Gross debt 2768.3 less cash and cash equivalents 1044.8 | USD 1,723.5 million | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2 |
| P1 | Debt principal to carrying value, 2026-09-30 | Ladder: 8.1 + 433.1 + 33.1 + 433.2 + 33.2 + 1865.9 = 2806.6; reconciling item: discounts and issuance costs -38.3; 2806.6 + (-38.3) | USD 2,768.3 million; equals Gross debt | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–16 |
| E1 | EBITDA (Reported), FY2024 | Operating income (loss) 72.5 plus depreciation and amortization 433.6 | USD 506.1 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| E2 | EBITDA (Reported), FY2025 | Operating income (loss) -673.6 plus depreciation and amortization 446.9 | USD -226.7 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| E3 | EBITDA (Reported), 9M 2025 | Operating income (loss) -656.1 plus depreciation and amortization 332.7 | USD -323.4 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| E4 | EBITDA (Reported), 9M 2026 | Operating income (loss) 355.9 plus depreciation and amortization 358.6 | USD 714.5 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |
| L1 | Total revenues, trailing twelve months to 2026-09-30 | FY2025 6961.0 plus 9M 2026 5476.4 less 9M 2025 5154.8 | USD 7,282.6 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L2 | EBITDA (Reported), trailing twelve months to 2026-09-30 | FY2025 -226.7 plus 9M 2026 714.5 less 9M 2025 -323.4 | USD 811.2 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L3 | Consolidated Adjusted EBITDA, trailing twelve months to 2026-09-30 | FY2025 830.1 plus 9M 2026 862.4 less 9M 2025 604.3 | USD 1,088.2 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L4 | Cash Interest Paid, trailing twelve months to 2026-09-30 | FY2025 383.0 plus 9M 2026 291.6 less 9M 2025 292.2 | USD 382.4 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L5 | Net Cash from Operating Activities, trailing twelve months to 2026-09-30 | FY2025 508.2 plus 9M 2026 626.4 less 9M 2025 401.0 | USD 733.6 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L6 | Capital expenditures (outflow), trailing twelve months to 2026-09-30 | FY2025 647.7 plus 9M 2026 251.2 less 9M 2025 457.3 | USD 441.6 million | 10-K_2025-12-31_penn-20251231.htm.jsonl; 10-Q_2026-09-30_penn-20260930.htm.jsonl |
| L7 | Liquidity at 2026-09-30 | Cash 1044.8 plus undrawn revolver 976.1 (1000.0 commitment less 23.9 of letters of credit) | USD 2,020.9 million | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 17–18 |
| R1 | Total debt / EBITDA, FY2024 / 2024-12-31 | 2770.7 divided by 506.1 | 5.47x | Net debt data and statements as cited in the calculation register |
| R2 | Net debt / EBITDA, FY2024 / 2024-12-31 | 2064.1 divided by 506.1 | 4.08x | Net debt data and statements as cited in the calculation register |
| R3 | EBITDA / cash interest, FY2024 / 2024-12-31 | 506.1 divided by 415.5 | 1.22x | Net debt data and statements as cited in the calculation register |
| R4 | Total debt / adjusted EBITDA, FY2024 / 2024-12-31 | 2770.7 divided by 672.2 | 4.12x | Net debt data and statements as cited in the calculation register |
| R5 | Net debt / adjusted EBITDA, FY2024 / 2024-12-31 | 2064.1 divided by 672.2 | 3.07x | Net debt data and statements as cited in the calculation register |
| R6 | Adjusted EBITDA / cash interest, FY2024 / 2024-12-31 | 672.2 divided by 415.5 | 1.62x | Net debt data and statements as cited in the calculation register |
| R7 | Total debt / EBITDA, FY2025 / 2025-12-31 | 2887.1 divided by -226.7 | Not calculable: negative denominator | Net debt data and statements as cited in the calculation register |
| R8 | Net debt / EBITDA, FY2025 / 2025-12-31 | 2200.5 divided by -226.7 | Not calculable: negative denominator | Net debt data and statements as cited in the calculation register |
| R9 | EBITDA / cash interest, FY2025 / 2025-12-31 | -226.7 divided by 383.0 | -0.59x | Net debt data and statements as cited in the calculation register |
| R10 | Total debt / adjusted EBITDA, FY2025 / 2025-12-31 | 2887.1 divided by 830.1 | 3.48x | Net debt data and statements as cited in the calculation register |
| R11 | Net debt / adjusted EBITDA, FY2025 / 2025-12-31 | 2200.5 divided by 830.1 | 2.65x | Net debt data and statements as cited in the calculation register |
| R12 | Adjusted EBITDA / cash interest, FY2025 / 2025-12-31 | 830.1 divided by 383.0 | 2.17x | Net debt data and statements as cited in the calculation register |
| R13 | Total debt / EBITDA, 2026-09-30 | 2768.3 divided by 811.2 | 3.41x | Net debt data and statements as cited in the calculation register |
| R14 | Net debt / EBITDA, 2026-09-30 | 1723.5 divided by 811.2 | 2.12x | Net debt data and statements as cited in the calculation register |
| R15 | EBITDA / cash interest, 2026-09-30 | 811.2 divided by 382.4 | 2.12x | Net debt data and statements as cited in the calculation register |
| R16 | Total debt / adjusted EBITDA, 2026-09-30 | 2768.3 divided by 1088.2 | 2.54x | Net debt data and statements as cited in the calculation register |
| R17 | Net debt / adjusted EBITDA, 2026-09-30 | 1723.5 divided by 1088.2 | 1.58x | Net debt data and statements as cited in the calculation register |
| R18 | Adjusted EBITDA / cash interest, 2026-09-30 | 1088.2 divided by 382.4 | 2.85x | Net debt data and statements as cited in the calculation register |
| X1 | Cash rent payments to REIT landlords, trailing twelve months | FY2025 967.8 plus 9M 2026 746.6 less 9M 2025 721.9; the issuer states 7940.0 as eight times this | USD 992.5 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 91; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 73–74; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 8 |
| X2 | Cash rent that is not rent expense in EBITDA, trailing twelve months | Cash rent payments 992.5 less rent expense associated with triple net operating leases 656.2 | USD 336.3 million | EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7 |
| X3 | Adjusted EBITDA less the cash rent not in rent expense, trailing twelve months | 1088.2 less 336.3; this is the denominator the issuer uses for traditional net leverage | USD 751.9 million | EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 11 |
| X4 | Cover of cash interest after the cash rent gap, trailing twelve months | 751.9 divided by 382.4 | 1.97x | Calculated from X3 and L4 |
| X5 | Lease-adjusted net leverage as the issuer reports it | Issuer states 5.6x at 2026-09-30 and 6.8x at 2025-12-31 (traditional net leverage 2.3x and 4.5x) | 5.6x and 2.3x at 2026-09-30 | EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7 |
| X6 | Lease and financing obligations outside Total Debt at 2026-09-30 | Present value of operating leases 3798.2 plus finance leases 2049.6 plus financing obligations 2309.8 | USD 8,157.6 million | 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 27 |
| F1 | Free cash flow, FY2024 | Net Cash from Operating Activities 359.3 less capital expenditures 482.7 | USD -123.4 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| F2 | Free cash flow, FY2025 | Net Cash from Operating Activities 508.2 less capital expenditures 647.7 | USD -139.5 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| F3 | Free cash flow, 9M 2025 | Net Cash from Operating Activities 401.0 less capital expenditures 457.3 | USD -56.3 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| F4 | Free cash flow, 9M 2026 | Net Cash from Operating Activities 626.4 less capital expenditures 251.2 | USD 375.2 million | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| F5 | Free cash flow after lease and financing obligation principal, 9M 2026 | 375.2 less principal payments on financing obligations 34.1 and on finance leases 41.0 | USD 300.1 million | 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| B1 | EBITDA bridge FY2025 | -226.7 + 60.9 - 12.9 + 0.4 + 17.3 + 945.3 + 37.7 + 4.5 + 3.6 | USD 830.1 million; equals Consolidated Adjusted EBITDA | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85 |
| S1 | Cumulative leverage of the debt stack | Cumulative principal 441.3; 1398.8; 1798.8; 2198.8; 2798.8 divided by LTM EBITDA (Reported) 811.2 | 0.54x, 1.72x, 2.22x, 2.71x, 3.45x; last row 2.57x on adjusted EBITDA of 1088.2 | Debt instruments and LTM calculation |
| W1 | Customer-related liabilities within accrued expenses | Advanced deposits 75.3 plus unpaid wagers 52.4 plus progressive jackpot liability 79.1 plus PENN Play loyalty point obligation 29.8 (2025 year end); 90.0 + 56.5 + 63.3 + 29.7 (2024 year end) | USD 236.6 million at 2025-12-31; USD 239.5 million at 2024-12-31 | 10-K_2025-12-31_penn-20251231.htm.jsonl, page 137 |
| K1 | KPI dashboard percentages | Adjusted EBITDA margin: 672.2 / 6578.1, 830.1 / 6961.0, 604.3 / 5154.8, 862.4 / 5476.4; capex over revenue: 482.7 / 6578.1, 647.7 / 6961.0, 457.3 / 5154.8, 251.2 / 5476.4 | Margins 10.22%, 11.93%, 11.72%, 15.75%; capex 7.34%, 9.30%, 8.87%, 4.59% | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 67; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 6; 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 5–6 |
| K2 | Revenue growth | FY2025 6961.0 / FY2024 6578.1 - 1; FY2024 6578.1 / FY2023 6362.9 - 1; 9M 2026 5476.4 / 9M 2025 5154.8 - 1 | 5.82%; 3.38%; 6.24% | 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 3 |

## Gaps

- The covenant leverage and interest coverage ratios cannot be calculated or tested: the credit agreement’s definitions are not supplied and the filings print only the covenant levels and a compliance statement. This restricts any statement of covenant headroom. Severity: High. Action: obtain the credit agreement with its amendments and the latest compliance certificate.
Basis: 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 17–20
- Lease, finance lease and financing obligations of USD 8,157.6 million at present value are separate balance sheet lines and are excluded from Total Debt, so every debt-only ratio in this analysis understates the fixed-claim burden; the issuer’s lease-adjusted ratio of 5.6x and its cash rent payments are the bridge. Severity: High. Action: carry a lease-adjusted view beside the debt-only ratios.
Basis: 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 27; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7
- EBITDA (Reported) is not stated by the issuer and is derived as operating income plus depreciation and amortization, so it includes impairment losses (USD 945.3 million in FY2025); reported leverage is not calculable for FY2025 and the reported measure for 9M 2025 and FY2025 is negative. Severity: Medium. Action: use the adjusted ratios for FY2025 and show both measures with their labels.
Basis: 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–107; 10-K_2025-12-31_penn-20251231.htm.jsonl, page 85
- Carrying values per debt instrument and scheduled amortisation per instrument are not disclosed, so instruments are shown at principal with one aggregate financing cost adjustment of USD 38.3 million; the rank of the credit facilities against the notes is not stated and the debt stack follows the stated security; the revolver carries no balance (the table prints a dash) and is left out of the stack; other long-term obligations of USD 7.8 million are left out of the stack because no rank, security or maturity is stated. Severity: Medium. Action: obtain the credit agreement and indentures.
Basis: 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 15–18
- Cash interest is stated two ways for the nine months of 2026: USD 291.6 million net of capitalised interest in the cash flow statement and USD 100.9 million for traditional debt in the release; the documents do not reconcile them and the cash flow figure is used for cover. Severity: Medium. Action: quote each with its label.
Basis: 10-Q_2026-09-30_penn-20260930.htm.jsonl, page 6; EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 8
- Statement coverage: the nine-month statements do not print some lines separately (amortization of debt discount and issuance costs, noncash interest expense, loss on disposal of property, payments of other long-term obligations, indemnification payments, gain on REIT transactions), several nil lines are printed as dashes and are recorded as not supplied rather than zero, the balance sheet at 2025-09-30 is not printed so the 9M 2025 column carries no balance sheet, the maintenance and project capex split is printed only for FY2025 and 9M 2026, and interim figures are unaudited; totals tie in every column. Severity: Low. Action: none needed for the conclusions.
Basis: 10-K_2025-12-31_penn-20251231.htm.jsonl, pages 106–109; 10-Q_2026-09-30_penn-20260930.htm.jsonl, pages 3–6
- The issuer’s lease-adjusted and traditional net leverage for 2024-12-31 are not in the supplied documents, so the financials table shows them as not supplied for FY2024. Severity: Low. Action: obtain the earlier release if the 2024 comparison is needed.
Basis: EX-99.1_2026-11-05_pennex991-q32026.htm.jsonl, page 7

## Next module

The orchestrator selects the next module.
