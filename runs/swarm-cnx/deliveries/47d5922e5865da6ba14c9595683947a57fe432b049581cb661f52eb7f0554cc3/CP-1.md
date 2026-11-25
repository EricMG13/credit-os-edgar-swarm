---
issuer_id: cnx
module_id: CP-1
analysis_date: 2026-11-05
---

# Financial foundation: CNX Resources Corp (cnx), as of 2026-11-05

## Request

CNX Resources Corp (cnx), as of 2026-11-05, credit snapshot pathway (credit_snapshot). Scope: normalised statements, debt, liquidity, leverage and interest cover for FY2024, FY2025 and the nine months to 2026-09-30, built from the seven supplied filings.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_cnx-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, with the auditor's report | 2026-02-10 | 34906d26867f4063a9570548326f1aea238accaf202234ed312875cc66d730a2 | Audited FY2024 and FY2025 statements, debt note, cash paid for interest, segment note, volumes |
| 10-Q_2026-03-31_cnx-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 | f35c89e68df093f0b33c8b07e7cb640d444c8935ee3804f523cf6d7a71ff1fc7 | Read for the reclassification statement and as a cross-check of the 2026 debt and revolver notes |
| 10-Q_2026-06-30_cnx-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 | 19c075fbeb27af8c1c213ff72323d0cfdbec50455060a5f2125b46e7ba51d5e1 | Read for the reclassification statement and as a cross-check of the 2026 debt and revolver notes |
| 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 | 9faf7d3a55a356eeebefe08284a5f300d91a2458f040ef83dd387bbff3cef8f1 | Unaudited nine-month 2026 and 2025 statements, balance sheet at 2026-09-30, debt, revolvers, covenants, commitments, cash paid, segments, volumes |
| EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl | Supplemental earnings release (Exhibit 99.1) for the first quarter of 2026 | not stated | 3a5697850deb2e3211d5d3185b6661a51563bd62fdb20267f3de757d37357681 | Issuer adjusted EBITDA for Q1 2025 |
| EX-99.1_2026-07-30_ex991supplementalq226.htm.jsonl | Supplemental earnings release (Exhibit 99.1) for the second quarter of 2026 | not stated | 2b713e19b995caa894ecb7c089bf8f3063b820ae69afc0691f484cdb6def48b2 | Issuer adjusted EBITDA for Q2 2025 and Q2 2026 |
| EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl | Supplemental earnings release (Exhibit 99.1) for the third quarter of 2026 | not stated | 8ed99193157f937c422b4de1e94f2baf28f198a6be7de2f9096adc91e46b5481 | Issuer EBITDA, adjusted EBITDA, adjusted EBITDAX and net debt reconciliations for five quarters |

| Module | Document | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Source readiness handoff for this run | 81ddf59b31695751047733a51ffba738295229f8c45996f750c682acd2712203 | Perimeter, reclassification, release-date and document-gap findings; no figure is taken from it |

## Findings

### Bottom line

Leverage is low on both measures, so debt service is not the constraint for creditors at 2026-09-30: net debt was 1.25x trailing reported EBITDA and 1.80x issuer-adjusted EBITDA, and cash interest was covered 7.99x on the adjusted measure.
Basis: calculation C5; calculation C6; calculation C8; calculation C11; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, pages 11–13

Reported EBITDA is a weak denominator because it carries unrealised derivative marks: the issuer removes USD 595 million of unrealised gains to reach USD 1,262 million, while FY2024 was depressed by derivative losses, so the 4.16x FY2024 ratio and the 1.25x current ratio are not like-for-like. Cash is USD 1.98 million, so liquidity rests on USD 1,673.05 million of undrawn revolver commitments, USD 533 million of it available to the midstream subsidiary only.
Basis: calculation C1; calculation C9; calculation C17; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, pages 11–13; 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21

### Leverage and coverage

Total debt was 1.25x trailing reported EBITDA at 2026-09-30, against 1.56x at FY2025 and 4.20x at FY2024. The FY2024 figure is high because reported EBITDA that year was only USD 515.986 million after a USD 172.405 million derivative loss recorded in revenue, not because debt was higher: gross debt at FY2024 was below the FY2025 level. On the issuer-adjusted measure total debt was 1.81x at 2026-09-30 and 1.96x at FY2025, with FY2024 not supplied. Because the adjusted measure removes unrealised gains but keeps the realised settlements on hedges, it is the closer proxy for cash earnings, and most of the gap between the two measures is unrealised hedge marks.
Basis: calculation C5; calculation C6; calculation C9; calculation C10; calculation C11

### Cash flow quality and capital return

Operating cash flow was USD 810.558 million in the nine months to 2026-09-30 against capital expenditure of USD 451.058 million. In February 2026 the company issued USD 500.000 million of senior notes due March 2034, and during 2026 it paid USD 507.965 million to repurchase all USD 500.000 million of senior notes due January 2029, recording a USD 12.009 million loss on extinguishment; on 2026-05-01 it settled the USD 208.553 million convertible notes in shares. Share repurchases of USD 434.678 million are the largest cash use after capital expenditure once the refinancing nets out, and the fall in gross debt in 2026 came mainly from the share settlement, not from cash retained. The creditor consequence is that deleveraging is a board choice made against a buyback authority that is still open, so leverage can rise again without a change in earnings.
Basis: 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 22–23; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 35

### Liquidity and maturities

Cash was USD 1.977 million at 2026-09-30, so liquidity is undrawn revolver capacity: USD 1,140.053 million on the CNX facility after USD 27.097 million of letters of credit and USD 533.000 million on the CNXM facility. Both revolvers mature on 2029-05-17, so no facility expires within twelve months, and the contractual obligations table shows no long-term debt due within one year, so no principal is due before FY2029. The CNXM facility serves the midstream subsidiary and is outside the covenant perimeter of the CNX facility, which limits how much of the undrawn amount can support the parent's obligations.
Basis: 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 65–66

### Data quality and definitions

Reported EBITDA is calculated from statement lines because the filings do not print it; the issuer's own EBITDA nets interest income, which is stated only in rounded millions, so the issuer's quarterly figures sum to USD 1,820 million against the USD 1,820.621 million calculated here, and netting it would move no ratio by more than 0.02x. Three debt measures coexist for the same debt at 2026-09-30 and reconcile exactly: principal, principal net of discounts, and carrying value. The notes' security and legal rank are not stated by series, so the debt stack ranks only the two secured revolvers and the notes are named under Gaps.
Basis: calculation C12; Source readiness (CP-0); 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_cnx-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives (income and cash flow); balance sheets 2025-12-31 and 2024-12-31 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 1 | Audited statements, debt, cash paid, segments, volumes | Part III and exhibits incorporated by reference; reclassifications not itemised |
| 10-Q_2026-03-31_cnx-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 with Q1 2025 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | Cross-check of 2026 debt and reclassification statement | Unaudited; not used for any figure in the statement tables |
| 10-Q_2026-06-30_cnx-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 and six months 2026 with 2025 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | Cross-check of 2026 debt and reclassification statement | Unaudited; not used for any figure in the statement tables |
| 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 and nine months 2026 with 2025; balance sheet 2026-09-30 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | Nine-month statements, debt, revolvers, cash paid, segments | Unaudited; prior periods reclassified without itemisation |
| EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl | Earnings release (Exhibit 99.1) | Five quarters, Q1 2025 to Q1 2026 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | Adjusted EBITDA Q1 2025 | Issuer non-GAAP in USD millions; no publication date stated |
| EX-99.1_2026-07-30_ex991supplementalq226.htm.jsonl | Earnings release (Exhibit 99.1) | Five quarters, Q2 2025 to Q2 2026 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | Adjusted EBITDA Q2 2025 and Q2 2026 | Issuer non-GAAP in USD millions; no publication date stated |
| EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl | Earnings release (Exhibit 99.1) | Five quarters, Q3 2025 to Q3 2026; twelve months to 2026-09-30 | USD | Thousands in the filings; millions in the releases | Consolidated CNX Resources Corporation including CNXM | US GAAP | Tier 2b | EBITDA, adjusted EBITDA, adjusted EBITDAX, net debt | Issuer non-GAAP in USD millions; no publication date stated |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| CNX Resources Corporation | Issuer and registrant; borrower under the CNX Credit Facility | 12-31 | USD | Thousands | Consolidated with its subsidiaries, including CNXM | US GAAP | FY2024, FY2025, 9M 2025, 9M 2026 |
| CNX Midstream Partners LP (CNXM) | Consolidated subsidiary; borrower under the CNXM Credit Facility and issuer of the 4.75% senior notes due April 2030 | 12-31 | USD | Thousands | Consolidated into CNX; outside the CNX Credit Facility covenant ratios; CNX is not a guarantor of its debt | US GAAP | Debt at 2026-09-30, 2025-12-31 and 2024-12-31 |
| Subsidiary guarantors of the CNX Credit Facility and the CNX senior notes | Guarantors: most of CNX's subsidiaries, not CNXM, its subsidiaries or its general partner | 12-31 | USD | Thousands | Individual subsidiary names are in Exhibit 21 to the annual report, which is not in the set | US GAAP | Not applicable: no separate statements |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| Unit conversion of chart and ratio inputs from thousands to millions | 10-K_2025-12-31_cnx-20251231.htm.jsonl | Unit conversion | USD thousands as printed | US$m with three decimals, exact | The money tables state US$m; no figure is rounded | FY2024, FY2025, 2026-09-30 |
| EBITDA (Reported) calculated from statement lines | 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Derived measure | Not printed in the filings | Net income plus income tax plus interest expense plus depreciation, depletion and amortization | The method needs a reported EBITDA; the filings print none, so it is calculated and labelled; interest income, which the issuer nets, is stated only in rounded millions in the MD&A and is not netted | FY2024, FY2025, 9M 2025, 9M 2026, LTM |
| EBITDA (Adjusted) taken from the issuer's quarterly reconciliations and summed | EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl | Issuer adjustment | USD millions per quarter | USD thousands (millions x 1,000) | Only the issuer states an adjusted EBITDA; the thousands shown carry millions precision | FY2025, 9M 2025, 9M 2026, LTM |
| Cash excludes restricted cash | 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Definition | Cash, cash equivalents and restricted cash 4,406 | Cash and Cash Equivalents 1,977 | Restricted cash is escrow for acquisitions, not accessible; the issuer's net debt includes it (see definition conflicts) | 2026-09-30 |
| Lease obligations kept out of Total Debt | 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Definition | Finance leases 33,245 and operating leases 116,741 on own lines | Excluded from Total Debt | The issuer presents leases on their own balance-sheet lines and not inside its debt lines | 2026-09-30 |
| Debt at balance-sheet carrying value | 10-Q_2026-09-30_cnx-20260930.htm.jsonl | Definition | Principal 2,299,850 | Carrying value 2,278,924 | Gross principal is never the leverage denominator; the difference is logged in the definition conflict register | 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Natural Gas, NGLs and Oil Revenue | 1,186,077 | 1,913,728 | 1,437,113 | 1,483,994 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Gain (Loss) on Commodity Derivative Instruments | -172,405 | 96,661 | 24,596 | 340,880 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Purchased Gas Revenue | 59,467 | 45,349 | 30,985 | 29,569 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Other Revenue and Operating Income | 193,647 | 183,396 | 135,956 | 130,699 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Total Revenue and Other Operating Income | 1,266,786 | 2,239,134 | 1,628,650 | 1,985,142 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Lease Operating Expense | 70,646 | 97,416 | 76,715 | 66,871 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Transportation, Gathering and Compression | 382,220 | 383,104 | 289,165 | 300,257 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Production, Ad Valorem and Other Fees | 27,554 | 31,200 | 24,666 | 22,004 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Depreciation, Depletion and Amortization | 485,754 | 574,114 | 428,979 | 405,490 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Exploration and Production Related Other Costs | 8,446 | 10,516 | 5,509 | 8,625 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Purchased Gas Costs | 57,248 | 42,647 | 29,066 | 29,752 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Selling, General and Administrative Costs | 145,736 | 140,302 | 98,456 | 100,850 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Other Operating Expense | 82,748 | 68,912 | 54,273 | 39,251 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Total Operating Expense | 1,260,352 | 1,348,211 | 1,006,829 | 973,100 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Other Expense (Income) | -6,126 | 13,716 | 9,429 | 5,674 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Gain on Asset Sales and Abandonments, net | -24,715 | -97,168 | -94,759 | -9,255 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Loss on Debt Extinguishment | 7,043 | 842 | Not supplied: the source prints a dash | 12,009 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Interest Expense | 150,594 | 170,592 | 128,616 | 119,081 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Total Other Expense (Income) | 126,796 | 87,982 | 43,286 | 127,509 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Total Costs and Expenses | 1,387,148 | 1,436,193 | 1,050,115 | 1,100,609 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Income (Loss) Before Income Tax | -120,362 | 802,941 | 578,535 | 884,533 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Income Tax Expense (Benefit) | -29,868 | 169,779 | 141,625 | 168,204 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Net Income (Loss) | -90,494 | 633,162 | 436,910 | 716,329 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Segment revenue: Shale (total revenue and other operating income) | 1,408,747 | 1,663,532 | 1,263,231 | 1,294,694 | USD thousands | Reported segment schedule | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 164–165; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 34 |
| Segment revenue: Coalbed Methane (total revenue and other operating income) | 125,794 | 136,663 | 101,475 | 111,205 | USD thousands | Reported segment schedule | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 164–165; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 34 |
| Segment revenue: Other (total revenue and other operating income) | -267,755 | 438,939 | 263,944 | 579,243 | USD thousands | Reported segment schedule | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 164–165; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 34 |
| EBITDA (Reported) | 515,986 | 1,547,647 | 1,136,130 | 1,409,104 | USD thousands | Calculated: net income + income tax + interest expense + DD&A; the issuer's own EBITDA also nets interest income, which the MD&A states only in rounded millions (USD 2 million FY2024, USD 1 million FY2025 and in each nine-month period) and which is not netted here | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| EBITDA (Adjusted) | Not supplied: the releases in the set start with Q1 2025 | 1,236,000 | 949,000 | 975,000 | USD thousands | Issuer-adjusted EBITDA from the quarterly reconciliations (unrealised derivative gains, stock compensation, debt extinguishment and discrete items removed), summed from four, three or three quarters, in millions x 1,000 | EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl, page 13; EX-99.1_2026-07-30_ex991supplementalq226.htm.jsonl, page 12; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net Income (Loss) | -90,494 | 633,162 | 436,910 | 716,329 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Depreciation, Depletion and Amortization | 485,754 | 574,114 | 428,979 | 405,490 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Amortization of Deferred Financing Costs | 11,345 | 10,732 | 8,083 | 6,788 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Stock-Based Compensation | 20,091 | 23,679 | 19,065 | 18,796 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Gain on Asset Sales and Abandonments, net | -24,715 | -97,168 | -94,759 | -9,255 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Loss on Debt Extinguishment | 7,043 | 842 | Not supplied: the source prints a dash | 12,009 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| (Gain) Loss on Commodity Derivative Instruments | 172,405 | -96,661 | -24,596 | -340,880 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Loss on Other Derivative Instruments | 1,099 | Not supplied: the source prints a dash | Not supplied: the line is not printed in this statement | Not supplied: the line is not printed in this statement | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Net Cash (Paid) Received in Settlement of Commodity Derivative Instruments | 307,939 | -143,536 | -161,977 | -208,527 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Deferred Income Taxes | -33,869 | 161,210 | 140,140 | 160,423 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Other | 1,345 | 1,839 | 1,842 | 1,334 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Assets: Accounts and Notes Receivable | -59,996 | -66,641 | 49,036 | 130,336 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Assets: Supplies Inventories | 5,274 | -11,629 | -16,250 | -7,795 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Assets: Prepaid Expenses | -675 | -3,038 | -1,575 | -1,240 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Assets: Changes in Other Assets | -47,084 | 22,533 | 22,883 | 14,536 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Liabilities: Accounts Payable | -4,194 | 21,609 | -17,974 | -27,844 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Liabilities: Accrued Interest | 1,585 | 5,059 | -15,393 | -27,053 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Liabilities: Other Operating Liabilities | 21,000 | 18,870 | -20,388 | -15,094 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Changes in Operating Liabilities: Changes in Other Liabilities | 41,926 | -26,019 | -22,118 | -17,795 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Capital Expenditures | -540,332 | -494,988 | -320,574 | -451,058 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Proceeds from Asset Sales | 60,734 | 107,655 | 105,207 | 48,723 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Investment in Equity Affiliates | -4,871 | 4,019 | -3,303 | -5,615 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Apex Acquisition (Net of Cash Acquired) | Not supplied: the source prints a dash | -517,599 | -517,599 | -10,255 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Payments on Long-Term Notes | -356,504 | Not supplied: the source prints a dash | Not supplied: the source prints a dash | -507,965 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Proceeds from CNXM Revolving Credit Facility Borrowings | 265,250 | 339,225 | 252,925 | 273,050 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Repayments of CNXM Revolving Credit Facility Borrowings | -354,350 | -322,525 | -248,475 | -238,800 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Proceeds from CNX Revolving Credit Facility Borrowings | 1,134,500 | 1,927,100 | 1,574,600 | 1,549,700 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Repayments of CNX Revolving Credit Facility Borrowings | -1,143,100 | -1,770,550 | -1,370,800 | -1,516,850 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Proceeds from Issuance of CNX Senior Notes | 395,000 | 198,500 | 198,500 | 500,000 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Payments on Other Debt | -2,409 | -4,464 | -3,089 | -3,914 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Proceeds from Issuance of Common Stock | 2,689 | 2,094 | 986 | 3,385 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Shares Withheld for Taxes | -18,279 | -14,007 | -13,840 | -17,249 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Purchases of Common Stock | -184,203 | -523,561 | -423,226 | -434,678 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Debt Issuance and Financing Fees | -15,274 | -1,465 | -960 | -8,090 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Operating Activities | 815,779 | 1,028,957 | 731,908 | 810,558 | USD thousands | Reported; issuer label Net Cash Provided by Operating Activities | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Investing Activities | -484,469 | -900,913 | -736,269 | -418,205 | USD thousands | Reported; issuer label Net Cash Used in Investing Activities | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Net Cash from Financing Activities | -276,680 | -169,653 | -33,379 | -401,411 | USD thousands | Reported; issuer label Net Cash Used in Financing Activities | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Net Cash Change | 54,630 | -41,609 | -37,740 | -9,058 | USD thousands | Reported; issuer label Net (Decrease) Increase in Cash, Cash Equivalents and Restricted Cash | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Opening Cash | 443 | 55,073 | 55,073 | 13,464 | USD thousands | Reported; issuer label Cash, Cash Equivalents and Restricted Cash at Beginning of Period | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Closing Cash | 55,073 | 13,464 | 17,333 | 4,406 | USD thousands | Reported; issuer label Cash, Cash Equivalents and Restricted Cash at End of Period | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11 |
| Cash Interest Paid | 136,263 | 154,598 | 135,812 | 139,234 | USD thousands | Reported; issuer label Interest paid, net of amounts capitalised (supplemental cash flow information) | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 36 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Restricted Cash | 37,875 | 12,685 | 2,429 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Accounts and Notes Receivable: Trade, net | 179,547 | 264,658 | 140,931 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Accounts and Notes Receivable: Other Receivables, net | 17,859 | 61,249 | 28,855 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Supplies Inventories | 14,572 | 26,201 | 33,996 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Derivative Instruments (current assets) | 87,925 | 106,068 | 353,295 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Prepaid Expenses | 15,659 | 18,697 | 19,936 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Current Assets | 370,635 | 490,337 | 581,419 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Property, Plant and Equipment | 13,037,948 | 14,057,224 | 14,488,439 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Less: Accumulated Depreciation, Depletion and Amortization | 5,653,837 | 6,193,871 | 6,566,969 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Property, Plant and Equipment, Net | 7,384,111 | 7,863,353 | 7,921,470 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Operating Lease Right-of-Use Assets | 98,713 | 150,310 | 114,556 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Derivative Instruments (non-current assets) | 160,183 | 134,396 | 105,011 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Goodwill | 323,314 | 323,314 | 323,314 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Other Intangible Assets, net | 63,885 | 57,333 | 52,419 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Other (non-current assets) | 111,062 | 75,403 | 61,825 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Other Non-Current Assets | 757,157 | 740,756 | 657,125 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Accounts Payable | 123,249 | 158,811 | 146,169 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Derivative Instruments (current liabilities) | 354,621 | 377,945 | 110,001 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Current Portion of Finance Lease Obligations | 4,236 | 5,095 | 5,753 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Current Portion of Long-Term Debt | 327,766 | 208,095 | Not supplied: the source prints a dash | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Current Portion of Operating Lease Obligations | 51,474 | 48,453 | 45,420 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Other Accrued Liabilities | 261,232 | 325,976 | 230,707 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Current Liabilities | 1,122,578 | 1,124,375 | 538,050 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Long-Term Debt | 1,838,234 | 2,213,264 | 2,278,924 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Finance Lease Obligations | 21,040 | 24,991 | 27,492 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Operating Lease Obligations | 49,519 | 104,955 | 71,321 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Derivative Instruments (non-current liabilities) | 429,533 | 158,368 | 94,746 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Deferred Income Taxes | 696,136 | 857,367 | 1,054,659 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Asset Retirement Obligations | 119,189 | 163,051 | 167,968 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Other (non-current liabilities) | 137,644 | 111,059 | 92,588 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Non-Current Liabilities | 3,291,295 | 3,633,055 | 3,787,698 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Common Stock | 1,490 | 1,427 | 1,440 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Capital in Excess of Par Value | 2,348,959 | 2,357,039 | 2,491,908 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Preferred Stock (none issued) | Not supplied: the source prints a dash | Not supplied: the source prints a dash | Not supplied: the source prints a dash | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Retained Earnings | 1,753,293 | 1,984,229 | 2,346,382 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Accumulated Other Comprehensive Loss | -5,712 | -5,679 | -5,464 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Assets | 8,511,903 | 9,094,446 | 9,160,014 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Liabilities | 4,413,873 | 4,757,430 | 4,325,748 | USD thousands | Reported | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Equity | 4,098,030 | 4,337,016 | 4,834,266 | USD thousands | Reported; total stockholders' equity | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Total Debt | 2,166,000 | 2,421,359 | 2,278,924 | USD thousands | Reported: current portion of long-term debt plus long-term debt, net of discounts and issuance costs; finance and operating leases are on their own lines and excluded | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| Cash & Equivalents | 17,198 | 779 | 1,977 | USD thousands | Reported: Cash and Cash Equivalents; restricted cash is a separate line | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD thousands) | Current Stub (USD thousands) | Prior-Year Stub (USD thousands) | Derived Value (USD thousands) | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue (Total Revenue and Other Operating Income) | LTM to 2026-09-30 | 2,239,134 | 1,985,142 | 1,628,650 | 2,595,626 | Calculated | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 | Includes derivative gains and losses as printed |
| EBITDA (Reported) | LTM to 2026-09-30 | 1,547,647 | 1,409,104 | 1,136,130 | 1,820,621 | Calculated | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 | Each component is calculated from statement lines; the issuer's quarterly figures sum to USD 1,820 million |
| EBITDA (Adjusted) | LTM to 2026-09-30 | 1,236,000 | 975,000 | 949,000 | 1,262,000 | Calculated | EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl, page 13; EX-99.1_2026-07-30_ex991supplementalq226.htm.jsonl, page 12; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 | Issuer figures in millions, shown x 1,000; sums four quarters Q4 2025 to Q3 2026 |
| Cash Interest Paid | LTM to 2026-09-30 | 154,598 | 139,234 | 135,812 | 158,020 | Calculated | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 36 | Interest paid net of amounts capitalised |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,166.000 | Net debt data, Gross debt | 515.986 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 4.20 | Calculated | Tier 1 audited year | Debt at carrying value; reported EBITDA is calculated from statement lines. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,421.359 | Net debt data, Gross debt | 1,547.647 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 1.56 | Calculated | Tier 1 audited year | Debt at carrying value; reported EBITDA is calculated from statement lines. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,278.924 | Net debt data, Gross debt | 1,820.621 | T4.4 EBITDA (Reported) LTM, T4.8 | 2026-09-30 | USD | US$m | 1.25 | Calculated | Tier 2b: audited year plus unaudited stubs | Debt at carrying value; reported EBITDA is calculated from statement lines. EBITDA and cash interest are last twelve months to 2026-09-30. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,148.802 | Net debt data, Net debt | 515.986 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 4.16 | Calculated | Tier 1 audited year | Debt at carrying value; reported EBITDA is calculated from statement lines. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,420.580 | Net debt data, Net debt | 1,547.647 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 1.56 | Calculated | Tier 1 audited year | Debt at carrying value; reported EBITDA is calculated from statement lines. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,276.947 | Net debt data, Net debt | 1,820.621 | T4.4 EBITDA (Reported) LTM, T4.8 | 2026-09-30 | USD | US$m | 1.25 | Calculated | Tier 2b: audited year plus unaudited stubs | Debt at carrying value; reported EBITDA is calculated from statement lines. EBITDA and cash interest are last twelve months to 2026-09-30. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 515.986 | T4.4 EBITDA (Reported) | 136.263 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 3.79 | Calculated | Tier 1 audited year | Cash interest is interest paid net of amounts capitalised; reported EBITDA is calculated from statement lines. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,547.647 | T4.4 EBITDA (Reported) | 154.598 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 10.01 | Calculated | Tier 1 audited year | Cash interest is interest paid net of amounts capitalised; reported EBITDA is calculated from statement lines. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,820.621 | T4.4 EBITDA (Reported) LTM, T4.8 | 158.020 | T4.5 Cash Interest Paid LTM, T4.8 | 2026-09-30 | USD | US$m | 11.52 | Calculated | Tier 2b: audited year plus unaudited stubs | Cash interest is interest paid net of amounts capitalised; reported EBITDA is calculated from statement lines. EBITDA and cash interest are last twelve months to 2026-09-30. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,166.000 | Net debt data, Gross debt | Not supplied: the releases in the set start with Q1 2025 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2024 is not supplied | Not Calculable | Tier 1 audited year; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,421.359 | Net debt data, Gross debt | 1,236.000 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 1.96 | Calculated | Tier 1 audited year; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,278.924 | Net debt data, Gross debt | 1,262.000 | T4.4 EBITDA (Adjusted) LTM, T4.8 | 2026-09-30 | USD | US$m | 1.81 | Calculated | Tier 2b: audited year plus unaudited stubs; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. EBITDA and cash interest are last twelve months to 2026-09-30. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,148.802 | Net debt data, Net debt | Not supplied: the releases in the set start with Q1 2025 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | Not calculable: adjusted EBITDA for FY2024 is not supplied | Not Calculable | Tier 1 audited year; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,420.580 | Net debt data, Net debt | 1,236.000 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 1.96 | Calculated | Tier 1 audited year; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,276.947 | Net debt data, Net debt | 1,262.000 | T4.4 EBITDA (Adjusted) LTM, T4.8 | 2026-09-30 | USD | US$m | 1.80 | Calculated | Tier 2b: audited year plus unaudited stubs; issuer non-GAAP | Debt at carrying value; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. EBITDA and cash interest are last twelve months to 2026-09-30. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: see Gaps | T4.4 EBITDA (Adjusted) | 136.263 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | Not calculable: the numerator is not supplied | Not Calculable | Tier 1 audited year; issuer non-GAAP | Cash interest is interest paid net of amounts capitalised; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,236.000 | T4.4 EBITDA (Adjusted) | 154.598 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 7.99 | Calculated | Tier 1 audited year; issuer non-GAAP | Cash interest is interest paid net of amounts capitalised; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,262.000 | T4.4 EBITDA (Adjusted) LTM, T4.8 | 158.020 | T4.5 Cash Interest Paid LTM, T4.8 | 2026-09-30 | USD | US$m | 7.99 | Calculated | Tier 2b: audited year plus unaudited stubs; issuer non-GAAP | Cash interest is interest paid net of amounts capitalised; adjusted EBITDA is the issuer's, summed from quarterly figures in millions. EBITDA and cash interest are last twelve months to 2026-09-30. |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Operating (period flow) | Total sales volumes (Bcfe) | 550.8 | 629.0 | 476.7 | 460.2 | FY2025 above FY2024; 9M 2026 below 9M 2025 | Volumes as printed in the MD&A tables (10-K_2025-12-31_cnx-20251231.htm.jsonl, page 86; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 51); the FY2025 rise follows the January 2025 Apex acquisition and the 9M 2026 fall is attributed in the 10-Q to normal declines |
| Capital return (period flow) | Purchases of common stock (USD thousands) | 184,203 | 523,561 | 423,226 | 434,678 | FY2025 above FY2024; 9M 2026 above 9M 2025 | Cash flow statement line (10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 10–11) |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| Net debt (restricted cash) | Gross debt at carrying value less Cash and Cash Equivalents; restricted cash excluded | Total long-term debt less cash, cash equivalents and restricted cash | EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 against 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 | 2026-09-30; FY2025 | 2026-09-30: 2,276.947 here against the issuer's 2,275 (USD millions), a difference of 1.947; FY2025: 2,420.580 here against 2,408, a difference of 12.580; 0.5% of net debt at most | Fundamental credit; Liquidity | Use the method definition; show the issuer figure beside it |
| Total debt (principal, net of discount, carrying) | Balance-sheet carrying value, current plus long-term, net of issuance costs and discounts | Debt principal 2,299,850 and total debt of 2,290 million excluding issuance costs; release shows 2,279 million | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 21, 65 and 66; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 | 2026-09-30 | Principal 2,299,850, after discounts 2,290,015, carrying 2,278,924 (USD thousands); reconciling items total 20,926, which is 0.92% of carrying value | Financial foundation; Refinancing & LME | Carrying value is the leverage denominator; the three figures are one bridge (calculation C12) |
| EBITDA identity | EBITDA (Reported) calculated from statement lines, with the adjusted measure beside it | Issuer EBITDA, adjusted EBITDA and adjusted EBITDAX, all in millions | EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, pages 11–13 | LTM to 2026-09-30 | Calculated 1,820.621; issuer sum of four quarters 1,820; adjusted EBITDA 1,262; adjusted EBITDAX 1,276, which is 14 above adjusted EBITDA because it also adds back exploration expense (USD millions); the issuer nets interest income of USD 1 million in the period, which would move no ratio by more than 0.02x | Financial foundation; Fundamental credit | Chart and register use reported and issuer-adjusted EBITDA only; adjusted EBITDAX is recorded here |
| Cash interest against interest expense | Cash interest paid is the cover denominator | Interest expense is on the income statement; interest paid is supplemental cash flow information | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 114, 117 and 155 | FY2025 | Interest paid 154,598 against interest expense 170,592 (USD thousands): difference 15,994; the cash flow shows non-cash amortisation of financing costs of 10,732 and a rise in accrued interest of 5,059, together 15,791; the remaining 203 is not explained in the sources | Financial foundation | Cover uses cash interest paid; the two are kept apart |
| Leases | Lease liabilities on their own balance-sheet lines are not added to Total Debt | Finance lease obligations and operating lease obligations are shown separately | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 9 and 65 | 2026-09-30 | Finance leases 33,245 (1.46% of carrying debt) and operating leases 116,741 (5.12%) (USD thousands) | Liquidity; Fundamental credit | Excluded from Total Debt and from every ratio here |
| Free cash flow | Operating cash flow less capital expenditure | Operating cash flow less capital expenditure plus proceeds from asset sales less investments in equity affiliates | EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 13 against 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 11 | 9M 2026 | Issuer-defined free cash flow for nine months 2026 is 402.608 against 359.500 on operating cash flow less capital expenditure (USD millions) | Fundamental credit | Free cash flow is not a fixed ratio in this foundation; either definition must be named when used |
| Obligations outside Total Debt | Total Debt is the balance-sheet debt lines only | The contractual obligations and commitments tables list other claims on cash | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 9, 21, 28, 65 and 66 | 2026-09-30 | All outside Total Debt (USD thousands): finance leases 33,245 and operating leases 116,741; gas firm transportation and processing 1,237,864 and purchase orders 10,620; employee-related long-term liabilities 31,559 and other long-term liabilities 397,733; asset retirement obligations 167,968 non-current and 21,075 current; letters of credit 27,097, surety bonds 285,482 and other guarantees 43,015, none recorded as liabilities; a current settlement accrual of 13,985 and the Coal Act litigation, whose loss is not estimated | Fundamental credit; Liquidity; Legal & covenants | Keep outside every leverage ratio here; do not net against debt |
| Covenant leverage and coverage | Consolidated gross and net debt over reported EBITDA, including CNXM | CNX Credit Facility: debt less cash on hand over consolidated EBITDA, excluding CNXM, at most 3.50x, and current ratio at least 1.00x; CNXM Credit Facility: net leverage at most 5.00x (5.25x in certain circumstances), secured leverage at most 3.25x and interest coverage at least 2.50x | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 20 and 21 | 2026-09-30 | Compliance with every test is stated for 2026-09-30, but the issuer prints no covenant figure and the covenant EBITDA and debt definitions are in agreements not supplied, so headroom is not calculated | Legal & covenants; Covenant capacity | Do not infer headroom from the consolidated ratios here |
| Prior-period reclassification | Comparative figures as originally filed | Certain prior-period amounts reclassified to conform to the current presentation | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 11; 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 128 | FY2024 and 2025 comparatives | Not quantified: the filings do not itemise the lines; the annual report states no effect on previously reported net income, equity or the cash flow statement | Financial foundation | Comparative columns are used as filed in the latest report that prints them |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and interest cover on reported EBITDA | Ready with Limitations | Reported EBITDA is calculated and is volatile with derivative marks; FY2024 and the trailing period are not like-for-like | Read it beside the adjusted measure |
| Leverage and interest cover on issuer-adjusted EBITDA | Ready with Limitations | FY2024 adjusted EBITDA is not supplied; figures are issuer non-GAAP sums in millions | Do not compare FY2024 on the adjusted basis |
| Liquidity and maturity ladder | Ready | Undrawn amounts depend on elected commitments and letters of credit as stated at each date; the CNXM facility is outside the CNX perimeter | State the perimeter with each figure |
| Debt stack by legal rank | Ready with Limitations | Security and legal rank of the senior notes are not stated by series, so the stack ranks only the two secured revolvers | Supply the indentures to rank the notes |
| Covenant headroom | Not Ready | Covenant levels are stated but the definitions of EBITDA and debt are in agreements not supplied; headroom is not calculated | Supply the credit agreements |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Senior Notes due March 2032 | Senior notes | 595,467 | 600,000 | Not applicable | Not applicable | Not supplied: the sources do not state this by series | Not supplied: the sources do not state this by series | USD | 595,467 | Not applicable | 7.25% | fixed | Not applicable | Not applicable | Not applicable | March 2032 (day not stated) | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 66 |
| Senior Notes due March 2034 | Senior notes | 500,000 | 500,000 | Not applicable | Not applicable | Not supplied: the sources do not state this by series | Not supplied: the sources do not state this by series | USD | 500,000 | Not applicable | 5.875% | fixed | Not applicable | Not applicable | Not applicable | March 2034 (day not stated) | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 21–22 |
| Senior Notes due January 2031 | Senior notes | 496,765 | 500,000 | Not applicable | Not applicable | Not supplied: the sources do not state this by series | Not supplied: the sources do not state this by series | USD | 496,765 | Not applicable | 7.375% | fixed | Not applicable | Not applicable | Not applicable | January 2031 (day not stated) | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 66 |
| CNX Midstream Partners LP Senior Notes due April 2030 | Senior notes issued by CNXM; CNX is not a guarantor | 397,933 | 400,000 | Not applicable | Not applicable | Not supplied: the sources do not state this by series | Not supplied: the sources do not state this by series | USD | 397,933 | Not applicable | 4.75% | fixed | Not applicable | Not applicable | Not applicable | April 2030 (day not stated) | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 66 |
| CNX Revolving Credit Facility | Senior secured revolving credit facility | 232,850 | 232,850 | 232,850 | 1,400,000 elected commitments (borrowing base 2,400,000) | Secured: senior secured revolving credit facility | Senior secured | USD | 232,850 | Not applicable | SOFR plus 1.75% to 2.75% | floating | SOFR | 175 to 275 by pricing grid | Not applicable | 2029-05-17 | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21 |
| CNX Midstream Partners LP Revolving Credit Facility | Senior secured revolving credit facility of CNXM; CNX is not a guarantor | 67,000 | 67,000 | 67,000 | 600,000 elected commitments | Secured: senior secured revolving credit facility | Senior secured | USD | 67,000 | Not applicable | SOFR plus 1.75% to 3.00% | floating | SOFR | 175 to 300 by pricing grid | Not applicable | 2029-05-17 | 0 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 20–21 |
| Financing cost adjustment | Aggregate unamortised debt issuance costs, not stated by instrument | -11,091 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -11,091 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 4.20 | 4.16 | x | Carrying-value debt over reported EBITDA, calculated from statement lines; fiscal year |
| FY2025 / 2025-12-31 | 1.56 | 1.56 | x | Carrying-value debt over reported EBITDA, calculated from statement lines; fiscal year |
| 2026-09-30 | 1.25 | 1.25 | x | Carrying-value debt over reported EBITDA, calculated from statement lines; last twelve months to 2026-09-30, interim EBITDA |

Reported EBITDA includes unrealised derivative marks, so the three periods are not like-for-like and the FY2024 ratio is inflated by a depressed denominator.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 3.79 | x | Reported EBITDA over cash interest paid; fiscal year |
| FY2025 / 2025-12-31 | 10.01 | x | Reported EBITDA over cash interest paid; fiscal year |
| 2026-09-30 | 11.52 | x | Reported EBITDA over cash interest paid; last twelve months to 2026-09-30 |

Cover uses cash interest paid, not interest expense, and reported EBITDA that carries unrealised derivative marks.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 17.198 | 1,913.344 | US$m | Cash and Cash Equivalents; undrawn is unused capacity after letters of credit of USD 1,329.394 million on the CNX facility and USD 583.950 million on the CNXM facility |
| FY2025 / 2025-12-31 | 0.779 | 1,739.253 | US$m | Cash and Cash Equivalents; undrawn is unused capacity after letters of credit of USD 1,172.003 million on the CNX facility and USD 567.250 million on the CNXM facility |
| 2026-09-30 | 1.977 | 1,673.053 | US$m | Cash and Cash Equivalents; undrawn is unused capacity after letters of credit of USD 1,140.053 million on the CNX facility and USD 533.000 million on the CNXM facility |

The undrawn figure adds the CNXM facility, which is available to the midstream subsidiary only and sits outside the CNX covenant perimeter.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2029 | 299.850 | US$m | Principal at 2026-09-30: CNX revolver 232.850 and CNXM revolver 67.000, both maturing 2029-05-17 |
| FY2030 | 400.000 | US$m | Principal at 2026-09-30: CNXM 4.75% senior notes due April 2030, principal |
| FY2031 | 500.000 | US$m | Principal at 2026-09-30: Senior notes due January 2031, principal |
| FY2032 | 600.000 | US$m | Principal at 2026-09-30: Senior notes due March 2032, principal |
| FY2034 | 500.000 | US$m | Principal at 2026-09-30: Senior notes due March 2034, principal |

The ladder is drawn on principal, not carrying value, and the notes' day of maturity within the month is not stated.

### Financials and credit metrics

| Measure | FY2024 | FY2025 | LTM to 2026-09-30 | Basis |
|---|---|---|---|---|
| Total Revenue and Other Operating Income (US$m) | 1,266.786 | 2,239.134 | 2,595.626 | Includes derivative gains and losses as printed |
| EBITDA (Reported) (US$m) | 515.986 | 1,547.647 | 1,820.621 | Calculated from statement lines |
| EBITDA (Adjusted) (US$m) | Not supplied | 1,236.000 | 1,262.000 | Issuer-adjusted, summed from quarterly figures in millions |
| Total debt (US$m) | 2,166.000 | 2,421.359 | 2,278.924 | Carrying value; 2026-09-30 for the last column |
| Net debt (US$m) | 2,148.802 | 2,420.580 | 2,276.947 | Total debt less Cash and Cash Equivalents |
| Total debt / EBITDA (x) | 4.20 | 1.56 | 1.25 | Reported EBITDA |
| Net debt / EBITDA (x) | 4.16 | 1.56 | 1.25 | Reported EBITDA |
| Net debt / adjusted EBITDA (x) | Not calculable | 1.96 | 1.80 | Issuer-adjusted EBITDA |
| EBITDA / cash interest (x) | 3.79 | 10.01 | 11.52 | Reported EBITDA over cash interest paid |
| Adjusted EBITDA / cash interest (x) | Not calculable | 7.99 | 7.99 | Issuer-adjusted EBITDA over cash interest paid |
| Cash interest paid (US$m) | 136.263 | 154.598 | 158.020 | Interest paid net of amounts capitalised |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 2,166.000 | 17.198 | 2,148.802 | US$m | Reported balance sheet date; gross debt is current plus long-term debt net of discounts and issuance costs, with finance and operating leases on their own lines and excluded; principal USD 2,190.154 million |
| FY2025 / 2025-12-31 | 2,421.359 | 0.779 | 2,420.580 | US$m | Reported balance sheet date; gross debt is current plus long-term debt net of discounts and issuance costs, with leases excluded; principal USD 2,441.306 million |
| 2026-09-30 | 2,278.924 | 1.977 | 2,276.947 | US$m | Reported balance sheet date; gross debt is long-term debt net of discounts and issuance costs, with leases excluded; principal USD 2,299.850 million |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 2,299.850 | -20.926 | 2,278.924 | US$m | Reconciling items are unamortised discounts of 9.835 (7.25% notes 4.533, 7.375% notes 3.235, CNXM notes 2.067) and unamortised issuance costs of 11.091, summed in calculation C12; the 5.875% notes were issued at par and the revolvers carry no discount |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| None found in the sources read | — | — | — | — | US$m | The 2026-10-29 quarterly report and release were read for events after 2026-09-30 and state none that changes net debt; share repurchases after the balance sheet date are not stated as amounts |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 | 1,266.786 | Not supplied: the releases in the set start with Q1 2025 | US$m | Revenue is Total Revenue and Other Operating Income as printed, derivative losses included; adjusted EBITDA is the issuer-adjusted measure and is not supplied for FY2024 |
| FY2025 | 2,239.134 | 1,236.000 | US$m | Revenue as printed; adjusted EBITDA is issuer-adjusted, summed from four quarterly figures in millions |
| LTM Q3 2026 | 2,595.626 | 1,262.000 | US$m | Twelve months to 2026-09-30, calculated; adjusted EBITDA is issuer-adjusted, summed from four quarterly figures in millions |

Revenue includes derivative gains and losses, so revenue and adjusted EBITDA move differently from sales of gas.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| CNX Credit Facility | 1 | Yes | 232.850 | 0.13 | US$m | Senior secured revolving facility of CNX, guaranteed by most subsidiaries and not by CNXM; leverage over last-twelve-month reported EBITDA of USD 1,820.621 million |
| CNXM Credit Facility | 1 | Yes | 67.000 | 0.16 | US$m | Senior secured revolving facility of CNXM, guaranteed by certain CNXM subsidiaries and not by CNX; a different obligor from the CNX facility, shown on the same rank because each is senior secured |

The senior notes are left out because no source states their legal rank by series, so the stack covers only the two secured revolvers.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| Reported EBITDA, last twelve months to 2026-09-30 | 1,820 | US$m | Sum of the issuer's four quarterly EBITDA figures in millions; the statement-derived figure is 1,820.621 |
| Unrealized gain on commodity derivative instruments | -595 | US$m | Issuer adjustment, sum of four quarters |
| Stock-based compensation | 24 | US$m | Issuer adjustment, sum of four quarters |
| Loss on debt extinguishment | 13 | US$m | Issuer adjustment, sum of four quarters |
| Adjusted EBITDA, last twelve months to 2026-09-30 | 1,262 | US$m | Issuer-adjusted EBITDA; the gain on a non-core asset sale of USD 57 million falls in Q3 2025, outside the twelve months |

The bridge uses the issuer's quarterly figures rounded to millions, so it does not carry the thousands precision of the statement tables.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 16 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 28 |
| Fields total | 28 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 7 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | EBITDA (Reported), FY2024 | Net income -90,494 + income tax -29,868 + interest expense 150,594 + DD&A 485,754 (USD thousands) | USD 515,986 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C2 | EBITDA (Reported), FY2025 | Net income 633,162 + income tax 169,779 + interest expense 170,592 + DD&A 574,114 (USD thousands) | USD 1,547,647 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C3 | EBITDA (Reported), 9M 2025 | Net income 436,910 + income tax 141,625 + interest expense 128,616 + DD&A 428,979 (USD thousands) | USD 1,136,130 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C4 | EBITDA (Reported), 9M 2026 | Net income 716,329 + income tax 168,204 + interest expense 119,081 + DD&A 405,490 (USD thousands) | USD 1,409,104 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C5 | EBITDA (Reported), last twelve months to 2026-09-30 | FY2025 1,547,647 + 9M 2026 1,409,104 - 9M 2025 1,136,130 (USD thousands) | USD 1,820,621 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C6 | EBITDA (Adjusted), last twelve months to 2026-09-30 | FY2025 1,236,000 (323 + 330 + 296 + 287) + 9M 2026 975,000 (396 + 287 + 292) - 9M 2025 949,000 (323 + 330 + 296), issuer quarterly figures in USD millions x 1,000 | USD 1,262,000 thousand | EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl, page 13; EX-99.1_2026-07-30_ex991supplementalq226.htm.jsonl, page 12; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 |
| C7 | Revenue, last twelve months to 2026-09-30 | FY2025 2,239,134 + 9M 2026 1,985,142 - 9M 2025 1,628,650 (USD thousands) | USD 2,595,626 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| C8 | Cash interest paid, last twelve months to 2026-09-30 | FY2025 154,598 + 9M 2026 139,234 - 9M 2025 135,812 (USD thousands) | USD 158,020 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 155; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 36 |
| C9 | Net debt, FY2024 | Gross debt 2,166,000 (327,766 + 1,838,234) less cash 17,198 (USD thousands) | USD 2,148,802 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116 |
| C10 | Net debt, FY2025 | Gross debt 2,421,359 (208,095 + 2,213,264) less cash 779 (USD thousands) | USD 2,420,580 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 115–116 |
| C11 | Net debt, 2026-09-30 | Gross debt 2,278,924 (nil current portion + 2,278,924) less cash 1,977 (USD thousands) | USD 2,276,947 thousand | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9 |
| C12 | Debt principal to carrying value, 2026-09-30 | Principal 2,299,850 (600,000 + 500,000 + 500,000 + 400,000 + 232,850 + 67,000) less discounts 9,835 (4,533 + 3,235 + 2,067) less issuance costs 11,091 (USD thousands) | USD 2,278,924 thousand, equal to long-term debt on the balance sheet; reconciling items -20,926 | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21 |
| C13 | Undrawn committed facilities, FY2024 | CNX 1,329,394 + CNXM 583,950 (USD thousands) | USD 1,913,344 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 143–144 |
| C14 | Undrawn committed facilities, FY2025 | CNX 1,172,003 + CNXM 567,250 (USD thousands) | USD 1,739,253 thousand | 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 143–144; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 20–21 |
| C15 | Undrawn committed facilities, 2026-09-30 | CNX 1,140,053 (1,400,000 commitments less 232,850 borrowings less 27,097 letters of credit) + CNXM 533,000 (600,000 less 67,000) (USD thousands) | USD 1,673,053 thousand | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21 |
| C16 | Principal maturing by fiscal year, 2026-09-30 | FY2029 232,850 + 67,000; FY2030 400,000; FY2031 500,000; FY2032 600,000; FY2034 500,000 (USD thousands) | USD 2,299,850 thousand, equal to C12 principal | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21 |
| C17 | Figures rounded to two decimals for the narrative | Net debt 2,276.947 -> 2,276.95; Cash 1.977 -> 1.98; undrawn 1,673.053 -> 1,673.05; unrealised derivative gains 595 and adjusted EBITDA 1,262 as in the EBITDA bridge; CNXM undrawn 533.000 -> 533 (USD millions) | USD 2,276.95 million; USD 1.98 million; USD 1,673.05 million; USD 595 million; USD 533 million | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–9; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 19–21; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, pages 11–13 |

## Gaps

| Gap | Line item or metric | Period | What it restricts | Severity | Action | Source |
|---|---|---|---|---|---|---|
| Adjusted EBITDA for FY2024 | EBITDA (Adjusted); Total debt, Net debt and cash-cover ratios on the adjusted measure | FY2024 | The three releases begin at Q1 2025, so the adjusted measure and its ratios cannot be stated for FY2024 | Medium | Supply the fourth-quarter 2024 and earlier releases | EX-99.1_2026-04-30_ex991supplementalq126.htm.jsonl, page 13 |
| Source dashes read as missing | Current portion of long-term debt (2026-09-30), loss on debt extinguishment (9M 2025), preferred stock (all dates), payments on long-term notes and Apex acquisition lines where printed as a dash, and the loss on other derivative instruments line not printed for nine months | FY2024, FY2025, 9M 2025, 9M 2026 | The filings print a dash, which is a nil amount in practice but is carried as missing, not zero, as the method requires; no total depends on them | Low | None needed; read as nil only if a later check requires it | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 8–11 |
| Per-share data not carried | Earnings per share and share counts | All | The statement tables carry monetary lines only; per-share and share-count quantities are a different family | Low | Take per-share figures from the filings when needed | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 8 |
| Security and legal rank of the senior notes | Debt stack, Security and Ranking in the instrument table | 2026-09-30 | No source states the security or legal rank of each note series; the debt stack ranks only the two secured revolvers and excludes the notes | High | Supply the indentures, or a source that states the notes' security and ranking | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, pages 21–22; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 66 |
| Executed debt documents | Covenant definitions and headroom | 2026-09-30 | Covenant levels are stated (net leverage at most 3.50x and current ratio at least 1.00x for the CNX facility) but the definitions are in agreements not supplied, so headroom is not calculated | Medium | Supply the credit agreements | 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 21 |
| Interest income and issuer EBITDA | EBITDA (Reported) | All | The income statements do not print interest income and the MD&A gives it only in rounded millions (USD 2 million FY2024, USD 1 million FY2025 and in each nine-month period), so reported EBITDA does not net it as the issuer's does; no ratio moves by more than 0.02x | Low | Compare with the issuer's quarterly EBITDA figures | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 94; 10-Q_2026-09-30_cnx-20260930.htm.jsonl, page 59; EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, pages 11–12 |
| Release dates and rounding | EBITDA (Adjusted) | FY2025, 9M 2025, 9M 2026, LTM | The releases state no publication date and give quarterly figures rounded to millions, so adjusted EBITDA carries millions precision | Low | Take adjusted EBITDA to thousands only from a filing that states it | EX-99.1_2026-10-29_ex991supplementalq326.htm.jsonl, page 12 |
| FY2023 not carried | Statement tables and charts | FY2023 | The annual report prints FY2023 income and cash flow statements but no balance sheet, and no adjusted EBITDA exists in the set, so FY2023 is left out of every table | Low | Add FY2023 if a longer history is wanted | 10-K_2025-12-31_cnx-20251231.htm.jsonl, page 114; 10-K_2025-12-31_cnx-20251231.htm.jsonl, pages 116–117 |

## Next module

The orchestrator selects the next module.
