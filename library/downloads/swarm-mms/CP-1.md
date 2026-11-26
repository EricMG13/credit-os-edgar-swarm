# MAXIMUS, INC. (mms): financial foundation as of 2026-11-05

## Request

MAXIMUS, INC. (mms), as of 2026-11-05, pathway credit_snapshot: the financial foundation (statements, constructed periods, leverage, interest cover, liquidity, debt and definition conflicts) built from the seven supplied SEC filings and earnings releases. The latest balance sheet is 2026-06-30 and the statements are in USD thousands.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-09-30_mms-20250930.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 30 September 2025 | 2025-11-20 | 962786100737da7c8a25bf2c0b0d8b7bba5fc8fe85f1a63dc4a22607d3101fd0 | Audited fiscal 2024 and 2025 statements, debt note, cash paid for interest, receivables purchase agreement, segments, backlog |
| 10-Q_2025-12-31_mms-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 December 2025 (fiscal first quarter 2026) | 2026-02-05 | 1ece10b3b4a1f72edf52da31ebe99ab2543998f22e423edd0be2ded3496f545d | Receivables purchase limit in force at 2025-12-31 |
| 10-Q_2026-03-31_mms-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 (fiscal second quarter 2026) | 2026-05-07 | 72c28dae66fdf3271ecd55284a1e9ffd02e932cd689052dff69253e7614fe8a8 | Receivables purchase limit in force at 2026-03-31 |
| 10-Q_2026-06-30_mms-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 (fiscal third quarter 2026) | 2026-08-06 | e0ee49037a76362fa1359adeb6f1d6ec0af3bf048fce3d62f4b088d4d2e2d60b | Nine-month 2026 and 2025 statements, balance sheet at 2026-06-30, debt note, covenants, liquidity, non-GAAP reconciliation, subsequent events |
| EX-99.1_2026-02-05_mms-2025x12x31x8kxex991.htm.jsonl | Earnings release (Exhibit 99.1) for fiscal first quarter 2026 | 2026-02-05 | ff62eabdd3d1037513edc754533c1c20140d9d029aa9713e0d89283ab79659d9 | Read for the post-period record; no figure taken from it |
| EX-99.1_2026-05-07_mms-2026x03x31x8kxex991.htm.jsonl | Earnings release (Exhibit 99.1) for fiscal second quarter 2026 | 2026-05-07 | 3cc2b6ddbaacd127b88b399aaed54a4ba71be05c3b12c29939da2343ffcad4ec | Superseded fiscal 2026 guidance, share repurchase authorisation |
| EX-99.1_2026-08-06_mms-2026x06x30x8kxex991.htm.jsonl | Earnings release (Exhibit 99.1) for fiscal third quarter 2026 | 2026-08-06 | 78b1fb3302628c3c36cbd9a44260145bf92a755c30565ab852ed03fa9e5e9aa0 | Current fiscal 2026 guidance, dividend declaration, collections commentary |

| Handoff | Module | sha256 | Use |
|---|---|---|---|
| CP-0 | Source readiness (CP-0) | d36847807af64b136a659c216db610e4445ebb50804b6986a04e34e06541de36 | Source inventory, period coverage and the documents that were not supplied |

## Findings

### Bottom line

Net debt rose to 2.21x last-twelve-month EBITDA at 2026-06-30 from 1.68x at 2025-09-30, while cash interest cover held at 8.28x, so leverage has increased without yet straining coverage.
Basis: calculation K21; calculation K22

The increase is financed by debt rather than earnings: the term loans were enlarged to fund operations and share repurchases while a federal customer paid late, so nine-month operating cash flow was negative. Management reports USD 245 million collected after the quarter end, which would lower net leverage to 1.87x on a pro forma basis, but the collection date and other post-quarter cash movements are not stated.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29; calculation K17; calculation K18

Covenant headroom is not assessed because the credit agreement was not supplied; the company reports 2.00x against a maximum of 4.00x on its own definition, which differs from the measures used here.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33

### Analysis by dimension

Leverage has climbed in each period on every EBITDA measure, and the climb is debt-driven. Gross debt at carrying value moved from 1.84x EBITDA in fiscal 2024 to 2.02x in fiscal 2025 and 2.29x on the last twelve months to 2026-06-30, and net debt from 1.55x to 1.68x to 2.21x. Reported EBITDA grew over the same span, so the rise comes from borrowing: the nine months to 2026-06-30 drew USD 302.74 million more than they repaid and the Term Loan B was enlarged on 2026-05-27, while buybacks and a receivables build absorbed cash. Creditors hold a larger claim on a business whose cash conversion is, for now, depressed.
Basis: calculation K13; calculation K14; calculation K15; calculation K21; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 30

Interest cover is strong and slightly improving, because EBITDA growth outpaced the cost of a larger, partly hedged floating-rate debt stack. Reported EBITDA covered cash interest paid 7.78x in fiscal 2024, 8.02x in fiscal 2025 and 8.28x over the last twelve months, while swaps fix the rate on USD 675.0 million of the loans, roughly two-fifths of principal. The cushion is wide against the 3.00x minimum in the credit agreement as the company describes it, but that test uses a different EBITDA and interest definition, so no headroom is inferred.
Basis: calculation K21; calculation K24; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 16; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32

Cash-flow quality is the weak point. Operating cash flow was negative in the nine months to 2026-06-30, USD -179.863 million against USD -220.000 million a year earlier, because the cash flow statement shows a receivables build of USD 489.403 million while a large federal customer delayed payment; days sales outstanding reached 98 days against 62 days at 2025-09-30, or 123 days against 73 days before the effect of receivable sales. Free cash flow was negative for the period. Fiscal 2025 operating cash flow of USD 429.372 million and free cash flow of USD 366.159 million show what the business generates when collections are normal, and management guides to a recovery by year end, so the credit question is the timing of one federal contract's payments rather than earnings power.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31; 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 51; EX-99.1_2026-08-06_mms-2026x06x30x8kxex991.htm.jsonl, page 4; calculation K10; calculation K12

A receivables purchase programme with Wells Fargo acts as off-balance-sheet working-capital funding. Receivables of USD 1.28 billion were sold in the nine months to 2026-06-30 against USD 574.2 million a year earlier, with a facility limit that rose from USD 250.0 million to USD 350.0 million between the first and second quarters; the outstanding balance of sold receivables at each balance-sheet date is not stated. The programme lowers reported debt and receivables, so leverage on balance-sheet debt understates the funding the business relies on, and the facility would have to be replaced if it were withdrawn.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 20; 10-Q_2025-12-31_mms-20251231.htm.jsonl, page 17; 10-Q_2026-03-31_mms-20260331.htm.jsonl, page 18; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 94

Liquidity is thin on cash and relies on committed lines. Unrestricted cash fell to USD 56.953 million at 2026-06-30 from USD 222.351 million at 2025-09-30, restricted cash of USD 96.296 million held for customers and as collateral is excluded from it, and the revolver gives stated access of about USD 730.0 million with USD 20.0 million drawn. Against gross debt at carrying value of USD 1,636.935 million, near-term liquidity therefore depends on the revolver, the receivables programme and the delayed collections; no letter-of-credit amount is stated after 2025-09-30, so whether the stated access is net of letters of credit is not established.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 84

Claims outside the debt figure are modest but not nil. Operating lease liabilities of USD 94.883 million at 2026-06-30 are reported on their own lines and excluded from Total Debt; deferred compensation plan liabilities of USD 66.468 million are matched by plan assets of USD 67.877 million; performance bond commitments were USD 33.2 million at 2025-09-30 with no later figure stated; and the class actions arising from the 2023 MOVEit cybersecurity incident are accrued within a range of outcomes whose amount is not stated. The receivables purchase programme described above is the largest funding item outside debt.
Basis: calculation K27; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 22; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 98

Maturities are manageable but cluster in fiscal 2029, when USD 690.184 million falls due, and the rest falls due by fiscal 2031 when the credit agreement ends; scheduled principal payments through September 2028 total USD 176.195 million, about a tenth of principal. Seven interest rate swaps hedge USD 675.0 million of the term loans, the earliest expiring in September 2026.
Basis: calculation K24; calculation K25; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 16; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32

Three EBITDA measures coexist and the leverage ratios are not comparable across them. The credit agreement's Consolidated EBITDA is USD 798.419 million for the last twelve months, the company's adjusted measure is USD 711.009 million and reported EBITDA derived here is USD 714.036 million; the company's own net leverage of 2.00x nets only unrestricted cash and uses the credit-agreement measure, against 2.21x here. The figures used for ratios are the reported, carrying-value ones, with the adjusted twin shown beside them in the register; the difference between carrying value and principal debt is USD 16.613 million.
Basis: calculation K5; calculation K6; calculation K16; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15

Events after the balance-sheet date are kept out of the period figures: the collection of USD 245 million, a quarterly dividend of USD 0.33 per share declared on 2026-07-06 and payable on 2026-08-31, a cash payment of about USD 17.3 million, and a temporary customer contract modification effective 2026-07-01 that management expects to cut diluted earnings per share by about USD 0.35 per quarter. The collection lowers net debt but its date and the offsetting cash uses are not stated, so the pro forma figure is indicative only.
Basis: calculation K17; calculation K26; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 22; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 27; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31; EX-99.1_2026-08-06_mms-2026x06x30x8kxex991.htm.jsonl, page 4

The most material gaps are the absence of any figure after 2026-06-30, so the fiscal year-end balance sheet is unknown, and the absence of the credit agreement, which leaves covenant headroom, legal rank and instrument-level terms unstated. Each is logged under Gaps with its consequence.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32; Source readiness (CP-0)

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-09-30_mms-20250930.htm.jsonl | Annual report, Form 10-K | Fiscal 2025 and 2024 (income statement and cash flow also fiscal 2023); balance sheets 2025-09-30 and 2024-09-30 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 1 (audited statements) | Fiscal year statements, debt note, supplemental cash flow, segments, backlog | Part III governance items incorporated by reference to a proxy statement not supplied |
| 10-Q_2025-12-31_mms-20251231.htm.jsonl | Quarterly report, Form 10-Q | Three months ended 2025-12-31 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (unaudited, no auditor review stated) | Receivables purchase limit at 2025-12-31 | No figure used in the statement tables |
| 10-Q_2026-03-31_mms-20260331.htm.jsonl | Quarterly report, Form 10-Q | Three and six months ended 2026-03-31 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (unaudited, no auditor review stated) | Receivables purchase limit at 2026-03-31 | No figure used in the statement tables |
| 10-Q_2026-06-30_mms-20260630.htm.jsonl | Quarterly report, Form 10-Q | Three and nine months ended 2026-06-30; balance sheets 2026-06-30 and 2025-09-30 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (unaudited, no auditor review stated) | Nine-month statements, balance sheet, debt, covenants, liquidity, non-GAAP reconciliation | Unaudited; no balance sheet at 2025-06-30 |
| EX-99.1_2026-02-05_mms-2025x12x31x8kxex991.htm.jsonl | Earnings release, Exhibit 99.1 | Fiscal first quarter 2026 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (issuer release, unaudited) | Context only | Management measures; superseded by later releases |
| EX-99.1_2026-05-07_mms-2026x03x31x8kxex991.htm.jsonl | Earnings release, Exhibit 99.1 | Fiscal second quarter 2026 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (issuer release, unaudited) | Superseded guidance | Management measures |
| EX-99.1_2026-08-06_mms-2026x06x30x8kxex991.htm.jsonl | Earnings release, Exhibit 99.1 | Fiscal third quarter 2026 | USD | thousands | Maximus, Inc. and wholly-owned subsidiaries, consolidated | U.S. GAAP | Tier 2b (issuer release, unaudited) | Current guidance and dividend declaration | Management measures; guidance is not a reported result |

The supplied documents hold income statement, cash flow statement and balance sheet in full, so the financial work is supported to 2026-06-30; the credit agreement and any figure after that date are not supplied.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Maximus, Inc. | Issuer and reporting entity; party to the credit agreement with the administrative agent | 30 September | USD | thousands | Maximus, Inc. and its wholly-owned subsidiaries | U.S. GAAP | FY2024, FY2025, 9M 2025, 9M 2026 (balance sheets at 2024-09-30, 2025-09-30 and 2026-06-30) |
| Wholly owned material domestic subsidiaries | Guarantors of the credit agreement; not named in the supplied documents | 30 September | USD | thousands | Inside the consolidated perimeter | U.S. GAAP | Same as the issuer |

Subsequent events after 2026-06-30 are listed in the post-balance-sheet table and in the analysis above, each with its date where the source gives one; none is blended into a period figure. The perimeter is the same across all seven documents, with no entity change other than the divestitures of the Australia and Korea businesses in December 2024 and the United States child support business in December 2025.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived because the issuer states no unadjusted EBITDA | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 4; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | Derived measure | Not supplied: no issuer EBITDA before adjustments | Operating income plus amortization of intangible assets plus depreciation and amortization of property, equipment and capitalized software | The method requires reported EBITDA as the primary denominator; Analyst Judgement: other (income)/expense, net, divestiture items and impairment are left in | FY2024, FY2025, 9M 2025, 9M 2026 |
| Thousands restated as millions in the money tables | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–6 | Unit | Total debt FY2025 1,334,273 thousand | 1,334.273 US$m | The money unit is US$m for USD statements; no value is rounded | All periods |
| Last-twelve-month figures constructed as latest full year plus current stub less prior-year stub | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–6 | Derived period | Not applicable | See constructed period register | Standard LTM construction; every component is a reported figure | 2026-06-30 |
| Debt taken at carrying value, current plus non-current, net of issuance costs and discounts | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 | None required | Total debt 1,636,935 thousand at 2026-06-30 | 1,636,935 thousand | Carrying value is the method's debt basis; principal 1,653,548 thousand is shown in the reconciliation | 2024-09-30, 2025-09-30, 2026-06-30 |
| Other (income)/expense, net kept with the sign the filing prints | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5 | Sign | (640) for fiscal 2025 | -640 | Negative means income, as the statements print it | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue | 5,306,197 | 5,431,276 | 4,112,861 | 3,929,984 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Cost of revenue | 4,054,545 | 4,097,833 | 3,112,970 | 2,920,247 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Gross profit | 1,251,652 | 1,333,443 | 999,891 | 1,009,737 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Selling, general, and administrative expenses | 671,583 | 713,107 | 525,423 | 492,827 | USD thousands | Reported; includes the divestiture-related items shown below | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Amortization of intangible assets | 91,570 | 92,047 | 69,041 | 60,785 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Operating income | 488,499 | 528,289 | 405,427 | 456,125 | USD thousands | Reported; the EBIT line | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Interest expense | 82,440 | 84,080 | 61,648 | 66,805 | USD thousands | Reported accrued expense, not cash paid | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Other (income)/expense, net | -450 | -640 | -603 | -1,639 | USD thousands | Reported; negative is income | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Interest income | Not supplied: not presented separately | Not supplied: not presented separately | Not supplied: not presented separately | Not supplied: not presented separately | USD thousands | Not stated; inside other (income)/expense, net | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Income before income taxes | 406,509 | 444,849 | 344,382 | 390,959 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Provision for income taxes | 99,595 | 125,815 | 100,636 | 95,360 | USD thousands | Reported accrued expense | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Income tax payments (cash) | 99,686 | 149,937 | 100,891 | 81,479 | USD thousands | Reported supplemental cash flow disclosure | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |
| Net income | 306,914 | 319,034 | 243,746 | 295,599 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Depreciation and amortization of property, equipment, and capitalized software | 33,957 | 41,669 | 27,502 | 37,091 | USD thousands | Reported in the cash flow statement | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Stock compensation expense | 35,349 | 41,182 | 30,324 | 24,274 | USD thousands | Reported in the cash flow statement | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Divestiture-related charges/(gains) | 1,018 | 39,549 | 39,343 | -10,147 | USD thousands | Reported; positive is a charge, negative a gain | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| EBITDA (Reported) | 614,026 | 662,005 | 501,970 | 554,001 | USD thousands | Calculated (calculations K1 to K4): operating income plus amortization of intangible assets plus depreciation and amortization of property, equipment and capitalized software; the issuer states no unadjusted EBITDA | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| EBITDA (Adjusted) | 615,044 | 701,554 | 541,313 | 550,768 | USD thousands | Issuer-stated Adjusted EBITDA (Non-GAAP): reported EBITDA plus divestiture-related charges, less divestiture-related gains, plus capitalized software impairment charges of 6,914 in 9M 2026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |

After the table: the three segments' revenue sums to consolidated revenue in every period, so no corporate or elimination revenue exists.

### Segment schedule

| Segment | Period | Revenue | Segment operating income | Unit | Source |
|---|---|---|---|---|---|
| U.S. Federal Services | FY2024 | 2,737,244 | 333,622 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Federal Services | FY2025 | 3,067,691 | 469,155 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Federal Services | 9M 2025 | 2,319,756 | 355,944 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Federal Services | 9M 2026 | 2,260,735 | 396,477 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Services | FY2024 | 1,911,813 | 246,982 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Services | FY2025 | 1,763,691 | 171,264 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Services | 9M 2025 | 1,334,418 | 139,610 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| U.S. Services | 9M 2026 | 1,249,229 | 113,065 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Outside the U.S. | FY2024 | 657,140 | 7,705 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Outside the U.S. | FY2025 | 599,894 | 22,391 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Outside the U.S. | 9M 2025 | 458,687 | 18,856 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Outside the U.S. | 9M 2026 | 420,020 | -3,259 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Corporate and unallocated items (divestiture-related, other, amortization of intangible assets) | FY2024 | Not supplied: no corporate or elimination revenue is presented | -99,810 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Corporate and unallocated items (divestiture-related, other, amortization of intangible assets) | FY2025 | Not supplied: no corporate or elimination revenue is presented | -134,521 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Corporate and unallocated items (divestiture-related, other, amortization of intangible assets) | 9M 2025 | Not supplied: no corporate or elimination revenue is presented | -108,983 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Corporate and unallocated items (divestiture-related, other, amortization of intangible assets) | 9M 2026 | Not supplied: no corporate or elimination revenue is presented | -50,158 | USD thousands | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |

The segment operating income of the three segments plus the corporate row equals consolidated operating income in each period.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), FY2025 | 662.005 | US$m | Calculated reported EBITDA for fiscal 2025 (calculation K2); identity: reported |
| Add back: divestiture-related charges | 39.549 | US$m | Loss on sale of the Australia and Korea businesses in fiscal 2025, the only add-back the issuer states for the year; classification: divestiture-related; realisation not applicable (non-cash loss); 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 |
| Adjusted EBITDA (Non-GAAP), FY2025 | 701.554 | US$m | Issuer-stated adjusted EBITDA for fiscal 2025; identity: issuer-adjusted; opening plus the stated add-back equals the closing; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 |

The bridge covers fiscal 2025 only; the nine months to 2026-06-30 add a divestiture gain and an impairment add-back that are not part of this annual bridge.

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net income | 306,914 | 319,034 | 243,746 | 295,599 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Depreciation and amortization of property, equipment, and capitalized software | 33,957 | 41,669 | 27,502 | 37,091 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Capitalized software impairment charges | Not supplied: the statement prints no value for this period | Not supplied: the statement prints no value for this period | Not supplied: the statement prints no value for this period | 6,914 | USD thousands | Reported; the annual statements print no such line and the 9M 2025 column prints a dash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Amortization of intangible assets | 91,570 | 92,047 | 69,041 | 60,785 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Amortization of debt issuance costs and debt discount | 3,534 | 2,782 | 2,046 | 2,314 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Deferred income taxes | -36,022 | -16,716 | -5,829 | 54,416 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Stock compensation expense | 35,349 | 41,182 | 30,324 | 24,274 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Divestiture-related charges/(gains) | 1,018 | 39,549 | 39,343 | -10,147 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Accounts receivable | -50,562 | -31,852 | -553,297 | -489,403 | USD thousands | Reported change; negative is a build | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Prepaid expenses and other current assets | 10,565 | -13,804 | 9,341 | 13,152 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Deferred contract costs | -13,155 | -2,117 | -856 | 2,748 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Accounts payable and accrued liabilities | 18,267 | -7,492 | -21,808 | -33,345 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Accrued compensation and benefits | 38,247 | 12,225 | -50,369 | -79,734 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Deferred revenue | 28,534 | -29,990 | -8,675 | -24,658 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Income taxes | 32,305 | -7,508 | 5,625 | -40,504 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Operating lease right-of-use assets and liabilities | -1,906 | -1,937 | -3,508 | -2,814 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Other assets and liabilities | 16,643 | -7,700 | -2,626 | 3,449 | USD thousands | Reported change | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Net Cash from Operating Activities | 515,258 | 429,372 | -220,000 | -179,863 | USD thousands | Reported; sales of receivables to the purchase programme are recorded inside operating activities | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Purchases of property and equipment and capitalized software | -114,190 | -63,213 | -55,686 | -28,752 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Asset acquisition | -17,999 | Not supplied: the filing prints a dash or no line for this period | Not supplied: the filing prints a dash or no line for this period | Not supplied: the filing prints a dash or no line for this period | USD thousands | Reported; the fiscal 2025 column prints a dash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Proceeds from divestitures | 3,085 | 5,117 | 736 | 16,842 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Other (investing) | Not supplied: the filing prints a dash or no line for this period | -2,165 | -2,165 | -2,500 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Net Cash from Investing Activities | -129,104 | -60,261 | -57,115 | -14,410 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Cash dividends paid to Maximus shareholders | -72,901 | -68,710 | -51,865 | -51,437 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Purchases of Maximus common stock | -73,069 | -447,482 | -306,443 | -204,919 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Tax withholding related to RSU vesting | -13,455 | -16,451 | -16,451 | -17,325 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Payments for contingent consideration | -10,977 | Not supplied: the filing prints a dash or no line for this period | Not supplied: the filing prints a dash or no line for this period | Not supplied: the filing prints a dash or no line for this period | USD thousands | Reported; the fiscal 2025 column prints a dash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Payments for debt financing costs | -9,724 | -1,658 | -1,658 | -2,393 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Proceeds from borrowings | 1,100,166 | 1,499,000 | 1,335,208 | 1,368,675 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Principal payments for debt | -1,212,202 | -1,297,639 | -810,174 | -1,065,935 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Other (financing; 9M columns include customer escrowed funds) | 16,516 | -10,937 | -1,824 | 60,841 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Net Cash from Financing Activities | -275,646 | -343,877 | 146,793 | 87,507 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| FX Effect on Cash | 3,164 | -538 | -65 | -444 | USD thousands | Reported effect on cash, cash equivalents and restricted cash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Net Cash Change | 113,672 | 24,696 | -130,387 | -107,210 | USD thousands | Reported; operating plus investing plus financing plus the FX effect; includes restricted cash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Opening Cash | 122,091 | 235,763 | 235,763 | 260,459 | USD thousands | Reported; cash, cash equivalents and restricted cash, not the balance-sheet cash line | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Closing Cash | 235,763 | 260,459 | 105,376 | 153,249 | USD thousands | Reported; cash, cash equivalents and restricted cash, not the balance-sheet cash line | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Cash Interest Paid | 78,955 | 82,562 | 60,809 | 64,526 | USD thousands | Reported interest payments in the supplemental cash flow disclosure | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash & Equivalents | 183,123 | 222,351 | 56,953 | USD thousands | Reported cash and cash equivalents; excludes restricted cash held inside prepaid expenses and other current assets | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Accounts receivable, net | 879,514 | 898,095 | 1,382,014 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Income taxes receivable | 5,282 | 3,904 | 31,019 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Prepaid expenses and other current assets | 132,625 | 128,574 | 171,377 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total current assets | 1,200,544 | 1,252,924 | 1,641,363 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Property and equipment, net | 38,977 | 30,972 | 28,485 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Capitalized software, net | 187,677 | 214,260 | 201,373 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Operating lease right-of-use assets | 133,594 | 100,514 | 88,302 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Goodwill | 1,782,871 | 1,782,095 | 1,780,543 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Intangible assets, net | 630,569 | 538,266 | 477,031 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred contract costs, net | 59,432 | 63,332 | 60,205 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred compensation plan assets | 55,913 | 63,272 | 67,877 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred income taxes (asset) | 14,801 | 11,491 | 8,047 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Other assets | 27,130 | 12,513 | 13,553 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total Assets | 4,131,508 | 4,069,639 | 4,366,779 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Accounts payable and accrued liabilities | 303,321 | 296,888 | 263,220 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Accrued compensation and benefits | 237,121 | 236,948 | 146,064 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred revenue, current portion | 83,238 | 53,784 | 36,626 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Income taxes payable | 26,535 | 17,321 | 1,138 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Long-term debt, current portion | 40,139 | 52,680 | 71,599 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Operating lease liabilities, current portion | 47,656 | 38,605 | 38,280 | USD thousands | Reported; operating lease liabilities stay outside Total Debt | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Other current liabilities | 69,519 | 68,937 | 121,142 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total current liabilities | 807,529 | 765,163 | 678,069 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred revenue, non-current portion | 45,077 | 43,757 | 35,863 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred income taxes (liability) | 169,118 | 149,020 | 199,887 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Long-term debt, non-current portion | 1,091,954 | 1,281,593 | 1,565,336 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Deferred compensation plan liabilities, non-current portion | 57,599 | 62,145 | 66,468 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Operating lease liabilities, non-current portion | 97,221 | 71,289 | 56,603 | USD thousands | Reported; operating lease liabilities stay outside Total Debt | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Other liabilities | 20,195 | 22,637 | 24,002 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total Liabilities | 2,288,693 | 2,395,604 | 2,626,228 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Common stock | 598,304 | 628,118 | 647,138 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Accumulated other comprehensive loss | -32,460 | -17,867 | -20,721 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Retained earnings | 1,276,971 | 1,063,784 | 1,114,134 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total Equity | 1,842,815 | 1,674,035 | 1,740,551 | USD thousands | Reported total shareholders' equity; no temporary equity or minority interest | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total Debt | 1,132,093 | 1,334,273 | 1,636,935 | USD thousands | Reported total debt: current portion plus non-current portion, net of unamortized issuance costs and discounts; no lease or other obligation is carried inside it | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| Restricted cash (inside prepaid expenses and other current assets) | 52,640 | 38,108 | 96,296 | USD thousands | Reported; customer and collateral funds | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |

The fiscal 2025 and fiscal 2024 columns are audited; the 9M 2026 column is the unaudited balance sheet at 2026-06-30. No balance sheet at 2025-06-30 is supplied.

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Term Loan A | Term loan under the credit agreement | Not supplied: carrying value is disclosed in total only | 819,375 | 819,375 | Not applicable | Secured by substantially all assets of the company and its wholly owned material domestic subsidiaries under the credit agreement, which they guarantee | Not supplied: no source states the legal rank of the facilities | USD | 819,375 | Not applicable | Margin of 1.0% to 2.0% over Term SOFR by leverage; 1.375% at 2026-06-30 | Floating | Term SOFR | 137.5 | Not supplied: no floor is stated for this loan | 2029-05-30 | Not supplied: only total scheduled principal payments are stated, not by facility | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 30 |
| Term Loan B | Term loan under the credit agreement; increased by USD 325 million on 2026-05-27 | Not supplied: carrying value is disclosed in total only | 814,173 | 814,173 | Not applicable | Secured by substantially all assets of the company and its wholly owned material domestic subsidiaries under the credit agreement, which they guarantee | Not supplied: no source states the legal rank of the facilities | USD | 814,173 | Not applicable | Fixed margin of 2.0% over SOFR | Floating | SOFR | 200 | 50 | 2031-05-30 | Not supplied: only total scheduled principal payments are stated, not by facility | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29 |
| Revolver | Revolving credit facility under the credit agreement | Not supplied: carrying value is disclosed in total only | 20,000 | 20,000 | 750,000 | Secured by substantially all assets of the company and its wholly owned material domestic subsidiaries under the credit agreement, which they guarantee | Not supplied: no source states the legal rank of the facilities | USD | 20,000 | Not applicable | Margin like the Term Loan A, plus a commitment fee of 0.125% to 0.30% on unused funds | Floating | Term SOFR | 137.5 | Not supplied: no floor is stated for this facility | Not supplied: the revolver maturity is not stated; the credit agreement ends in May 2031 | Not supplied: a revolver has no scheduled amortisation stated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32 |
| Financing cost adjustment | Unamortized issuance costs and discounts | -16,613 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -16,613 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |

The three facilities plus the financing cost adjustment equal Total Debt of 1,636,935 thousand at 2026-06-30. Revolving facilities in Canada and the United Kingdom are named in the annual report but no amount or commitment is stated, so they are not rows.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-06-30 | USD 5,431.276m | USD 3,929.984m | USD 4,112.861m | USD 5,248.399m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 4 | FY2025 plus 9M 2026 less 9M 2025; every component reported |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 662.005m | USD 554.001m | USD 501.970m | USD 714.036m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–6 | Calculated EBITDA components; the 9M 2026 stub includes a USD 6.914m capitalized software impairment and a USD 10.147m divestiture gain |
| Adjusted EBITDA (issuer) | LTM to 2026-06-30 | USD 701.554m | USD 550.768m | USD 541.313m | USD 711.009m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 | Issuer-stated non-GAAP measure; differs from the credit agreement Consolidated EBITDA |
| Cash interest paid | LTM to 2026-06-30 | USD 82.562m | USD 64.526m | USD 60.809m | USD 86.279m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 | Interest payments from the supplemental cash flow disclosure |
| Interest expense | LTM to 2026-06-30 | USD 84.080m | USD 66.805m | USD 61.648m | USD 89.237m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5 | Agrees to the twelve-month interest expense the company prints for its covenant calculation |
| Net income | LTM to 2026-06-30 | USD 319.034m | USD 295.599m | USD 243.746m | USD 370.887m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5 | Agrees to the twelve-month net income the company prints for its covenant calculation |
| Net cash from operating activities | LTM to 2026-06-30 | USD 429.372m | USD -179.863m | USD -220.000m | USD 469.509m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | Negative nine-month operating cash flow in both stubs |
| Purchases of property and equipment and capitalized software | LTM to 2026-06-30 | USD 63.213m | USD 28.752m | USD 55.686m | USD 36.279m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | Shown as a positive amount paid |
| Free cash flow (operating cash flow less purchases of property and equipment and capitalized software) | LTM to 2026-06-30 | USD 366.159m | USD -208.615m | USD -275.686m | USD 433.230m | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | Non-GAAP as the company defines it; derived here from reported lines |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-09-30 | 1,132.093 | 183.123 | 948.970 | US$m | Carrying value after USD 13.726m of issuance costs and discounts; principal 1,145.819 US$m, which included a 5.194 US$m subsidiary loan since repaid; no leases or other obligations inside it; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 |
| FY2025 / 2025-09-30 | 1,334.273 | 222.351 | 1,111.922 | US$m | Carrying value after USD 12.602m of issuance costs and discounts; principal 1,346.875 US$m; no leases or other obligations inside it; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 |
| 2026-06-30 | 1,636.935 | 56.953 | 1,579.982 | US$m | Carrying value after USD 16.613m of issuance costs and discounts; principal 1,653.548 US$m; reported, not pro forma; no leases or other obligations inside it; restricted cash of 96.296 US$m is excluded from cash; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 183.123 | Not supplied: the revolver commitment and drawings at 2024-09-30 are not stated in the supplied documents | US$m | Unrestricted cash only; restricted cash of 52.640 US$m excluded; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93 |
| FY2025 / 2025-09-30 | 222.351 | 750.000 | US$m | Revolver access of USD 750.0 million stated as additional to the loans; letters of credit of USD 3.0 million are not deducted because the filing does not say they reduce it; restricted cash of 38.108 US$m excluded; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 52; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 84 |
| 2026-06-30 | 56.953 | 730.000 | US$m | Stated access of approximately USD 730.0 million with 20.0 US$m drawn on a USD 750 million facility; letters of credit are not stated; restricted cash of 96.296 US$m excluded; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |

Undrawn committed facilities is the revolver access the company states, not net of any letters of credit, and the receivables purchase limit is not counted as a committed facility.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2026 | 18.952 | US$m | Remainder of fiscal 2026 only: 2026-07-01 to 2026-09-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| FY2027 | 75.809 | US$m | Year ended 2027-09-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| FY2028 | 81.434 | US$m | Year ended 2028-09-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| FY2029 | 690.184 | US$m | Year ended 2029-09-30; includes the Term Loan A maturing 2029-05-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| FY2030 | 8.309 | US$m | Year ended 2030-09-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| FY2031 | 778.860 | US$m | The filing's years-thereafter amount; the credit agreement ends in May 2031, so it is placed in fiscal 2031 by Analyst Judgement; includes the Term Loan B maturing 2031-05-30; contractual principal at 2026-06-30; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |

The schedule is contractual principal at 2026-06-30, before the unamortized issuance costs and discounts, and does not show any unscheduled prepayment or the revolver's own maturity.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 1.84 | 1.55 | x | Carrying-value debt over reported EBITDA for fiscal 2024; reported EBITDA is calculated, not issuer-stated |
| FY2025 / 2025-09-30 | 2.02 | 1.68 | x | Carrying-value debt over reported EBITDA for fiscal 2025; reported EBITDA is calculated, not issuer-stated |
| 2026-06-30 | 2.29 | 2.21 | x | Carrying-value debt over reported EBITDA for the last twelve months to 2026-06-30 (constructed, calculation K5); the interim ratio has no statement tie; reported EBITDA is calculated, not issuer-stated |

The ratios use reported EBITDA derived from the statements and carrying-value debt, so they are higher than the company's own 2.00x covenant ratio, which uses a different EBITDA and nets only unrestricted cash.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-09-30 | 7.78 | x | Reported EBITDA over cash interest paid for fiscal 2024 |
| FY2025 / 2025-09-30 | 8.02 | x | Reported EBITDA over cash interest paid for fiscal 2025 |
| 2026-06-30 | 8.28 | x | Reported EBITDA over cash interest paid for the last twelve months to 2026-06-30 (constructed, calculations K5 and K8) |

Cash interest paid differs from the interest expense in the income statement, and the company's own coverage test uses interest expense and a wider EBITDA.

### Financials and credit metrics

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue | 5,306,197 | 5,431,276 | 4,112,861 | 3,929,984 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Gross profit | 1,251,652 | 1,333,443 | 999,891 | 1,009,737 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Operating income | 488,499 | 528,289 | 405,427 | 456,125 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| EBITDA (Reported) | 614,026 | 662,005 | 501,970 | 554,001 | USD thousands | Calculated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| EBITDA (Adjusted) | 615,044 | 701,554 | 541,313 | 550,768 | USD thousands | Issuer-stated | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |
| Net income | 306,914 | 319,034 | 243,746 | 295,599 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 515,258 | 429,372 | -220,000 | -179,863 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Free cash flow (operating cash flow less purchases of property, equipment and capitalized software) | 401,068 | 366,159 | -275,686 | -208,615 | USD thousands | Calculated; matches the company's non-GAAP free cash flow | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| Cash Interest Paid | 78,955 | 82,562 | 60,809 | 64,526 | USD thousands | Reported | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |
| Total Debt | 1,132,093 | 1,334,273 | Not supplied: no balance sheet at 2025-06-30 is supplied | 1,636,935 | USD thousands | Reported carrying value at period end | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| Cash & Equivalents | 183,123 | 222,351 | Not supplied: no balance sheet at 2025-06-30 is supplied | 56,953 | USD thousands | Reported unrestricted cash at period end | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Net debt | 948,970 | 1,111,922 | Not supplied: no balance sheet at 2025-06-30 is supplied | 1,579,982 | USD thousands | Calculated: total debt less cash | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| Total debt / EBITDA | 1.84 | 2.02 | Not supplied: no balance sheet at 2025-06-30 is supplied | 2.29 | x | Calculated; the 9M 2026 column is the last twelve months to 2026-06-30 | Calculation register |
| Net debt / EBITDA | 1.55 | 1.68 | Not supplied: no balance sheet at 2025-06-30 is supplied | 2.21 | x | Calculated; the 9M 2026 column is the last twelve months to 2026-06-30 | Calculation register |
| EBITDA / cash interest | 7.78 | 8.02 | Not supplied: no balance sheet at 2025-06-30 is supplied | 8.28 | x | Calculated; the 9M 2026 column is the last twelve months to 2026-06-30 | Calculation register |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported) | 1,132.093 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | 614.026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2024 / 2024-09-30 | USD | US$m | 1.84 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated |
| Net debt / EBITDA | Net debt at carrying value / EBITDA (Reported) | 948.970 | Net debt data | 614.026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2024 / 2024-09-30 | USD | US$m | 1.55 | Calculated | Tier 1 | Net of unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 614.026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | 78.955 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 | FY2024 / 2024-09-30 | USD | US$m | 7.78 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Total debt at carrying value / EBITDA (Adjusted) | 1,132.093 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | 615.044 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | FY2024 / 2024-09-30 | USD | US$m | 1.84 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Net debt / adjusted EBITDA | Net debt at carrying value / EBITDA (Adjusted) | 948.970 | Net debt data | 615.044 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | FY2024 / 2024-09-30 | USD | US$m | 1.54 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 615.044 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | 78.955 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 | FY2024 / 2024-09-30 | USD | US$m | 7.79 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported) | 1,334.273 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | 662.005 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2025 / 2025-09-30 | USD | US$m | 2.02 | Calculated | Tier 1 | Reported EBITDA is calculated, not issuer-stated |
| Net debt / EBITDA | Net debt at carrying value / EBITDA (Reported) | 1,111.922 | Net debt data | 662.005 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2025 / 2025-09-30 | USD | US$m | 1.68 | Calculated | Tier 1 | Net of unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 662.005 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | 82.562 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 | FY2025 / 2025-09-30 | USD | US$m | 8.02 | Calculated | Tier 1 | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Total debt at carrying value / EBITDA (Adjusted) | 1,334.273 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | 701.554 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | FY2025 / 2025-09-30 | USD | US$m | 1.90 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Net debt / adjusted EBITDA | Net debt at carrying value / EBITDA (Adjusted) | 1,111.922 | Net debt data | 701.554 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | FY2025 / 2025-09-30 | USD | US$m | 1.58 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 701.554 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 | 82.562 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 | FY2025 / 2025-09-30 | USD | US$m | 8.50 | Calculated | Tier 1 | Issuer-adjusted EBITDA (Non-GAAP) |
| Total debt / EBITDA | Total debt at carrying value / EBITDA (Reported) | 1,636.935 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 | 714.036 | Constructed LTM (calculation K5) | 2026-06-30 | USD | US$m | 2.29 | Calculated | Tier 2b | Reported EBITDA is calculated, not issuer-stated; interim ratio uses last-twelve-month EBITDA |
| Net debt / EBITDA | Net debt at carrying value / EBITDA (Reported) | 1,579.982 | Net debt data | 714.036 | Constructed LTM (calculation K5) | 2026-06-30 | USD | US$m | 2.21 | Calculated | Tier 2b | Net of unrestricted cash only |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 714.036 | Constructed LTM (calculation K5) | 86.279 | Constructed LTM (calculation K8) | 2026-06-30 | USD | US$m | 8.28 | Calculated | Tier 2b | Cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Total debt at carrying value / EBITDA (Adjusted) | 1,636.935 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 | 711.009 | Constructed LTM (calculation K6) | 2026-06-30 | USD | US$m | 2.30 | Calculated | Tier 2b | Issuer-adjusted EBITDA (Non-GAAP) |
| Net debt / adjusted EBITDA | Net debt at carrying value / EBITDA (Adjusted) | 1,579.982 | Net debt data | 711.009 | Constructed LTM (calculation K6) | 2026-06-30 | USD | US$m | 2.22 | Calculated | Tier 2b | Issuer-adjusted EBITDA (Non-GAAP) |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 711.009 | Constructed LTM (calculation K6) | 86.279 | Constructed LTM (calculation K8) | 2026-06-30 | USD | US$m | 8.24 | Calculated | Tier 2b | Issuer-adjusted EBITDA (Non-GAAP) |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported) | 401.068 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | 614.026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2024 / 2024-09-30 | USD | US$m | 0.65 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital purchases; a ratio of a flow to an EBITDA measure |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported) | 366.159 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | 662.005 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64 | FY2025 / 2025-09-30 | USD | US$m | 0.55 | Calculated | Tier 1 | Free cash flow is operating cash flow less capital purchases; a ratio of a flow to an EBITDA measure |
| Free cash flow / EBITDA | Free cash flow / EBITDA (Reported) | 433.230 | Constructed LTM (calculation K12) | 714.036 | Constructed LTM (calculation K5) | 2026-06-30 | USD | US$m | 0.61 | Calculated | Tier 2b | Free cash flow is operating cash flow less capital purchases; a ratio of a flow to an EBITDA measure |
| Operating cash flow / total debt | Net cash from operating activities / total debt at carrying value | 515.258 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | 1,132.093 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | FY2024 / 2024-09-30 | USD | US$m | 0.46 | Calculated | Tier 1 | Operating cash flow is after the effect of receivables sold to the purchase programme |
| Operating cash flow / total debt | Net cash from operating activities / total debt at carrying value | 429.372 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 | 1,334.273 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83 | FY2025 / 2025-09-30 | USD | US$m | 0.32 | Calculated | Tier 1 | Operating cash flow is after the effect of receivables sold to the purchase programme |
| Operating cash flow / total debt | Net cash from operating activities / total debt at carrying value | 469.509 | Constructed LTM (calculation K10) | 1,636.935 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 | 2026-06-30 | USD | US$m | 0.29 | Calculated | Tier 2b | Operating cash flow is after the effect of receivables sold to the purchase programme |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Margin (period rate, issuer-reported) | Gross profit percentage | 23.6% | 24.6% | 24.3% | 25.7% | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 45; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 23 |
| Margin (period rate, issuer-reported) | Operating margin | 9.2% | 9.7% | 9.9% | 11.6% | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 45; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 23 |
| Margin (period rate, issuer-reported) | Adjusted EBITDA margin (Non-GAAP) | 11.6% | 12.9% | 13.2% | 14.0% | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |
| Segment margin (period rate) | U.S. Federal Services segment operating margin | 12.2% | 15.3% | 15.3% | 17.5% | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Segment margin (period rate) | U.S. Services segment operating margin | 12.9% | 9.7% | 10.5% | 9.1% | Down | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Segment margin (period rate) | Outside the U.S. segment operating margin | 1.2% | 3.7% | 4.1% | -0.8% | Down | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 78–79; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 10–11 |
| Working capital (period-end) | Days sales outstanding | 61 days | 62 days | Not supplied: no balance sheet at 2025-06-30 is supplied | 98 days | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 51; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31 |
| Working capital (period-end) | Days sales outstanding excluding the effect of receivable sales | Not supplied: not stated for 2024-09-30 | 73 days | Not supplied: no balance sheet at 2025-06-30 is supplied | 123 days | Up | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31 |
| Funding float (period flow, USD) | Receivables sold to the purchase programme | 334.3 million | 732.1 million | 574.2 million | 1.28 billion | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 94; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 20 |
| Funding float (period-end, USD) | Restricted cash held for customers and collateral | 52.640 million | 38.108 million | Not supplied: no balance sheet at 2025-06-30 is supplied | 96.296 million | Up | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |
| Backlog (period-end, USD) | Backlog | 16,167 million | 15,327 million | Not supplied: not stated in the interim filings | Not supplied: not stated in the interim filings | Down | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 49 |
| Workforce (period-end) | Employees | Not supplied: not stated for 2024-09-30 | 37,200 | Not supplied: not stated in the interim filings | Not supplied: not stated in the interim filings | Not established | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 13 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA: operating income plus amortization of intangibles plus depreciation and amortization, calculated; USD 714.036m for the last twelve months to 2026-06-30 | Adjusted EBITDA (Non-GAAP) USD 711.009m; Consolidated EBITDA under the credit agreement USD 798.419m, which adds pro forma and other adjustments of USD 52.278m | Three EBITDA definitions across the 10-K, the 10-Q and the credit agreement summary; fiscal 2025: 662.005, 701.554 and 793.995 USD millions | FY2025, LTM to 2026-06-30 | High: the credit-agreement figure is USD 84.383m, or 11.8%, above reported EBITDA at 2026-06-30 | All modules that use leverage or cover | Use reported EBITDA for ratios, show the issuer-adjusted twin beside it, and do not use the credit-agreement figure; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 54; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |
| Net debt and leverage | Carrying-value debt less unrestricted cash over reported EBITDA: 2.21x at 2026-06-30 | Company-stated Consolidated Net Total Leverage Ratio of 2.00x: funded debt at principal less unrestricted cash up to USD 150 million over Consolidated EBITDA; maximum stated 4.00x, with a step up to 4.50x under certain circumstances | Debt basis, cash cap, EBITDA and the covenant limit definition differ; at 2025-09-30 the company netted USD 150.000m of cash against USD 222.351m held | FY2025, 2026-06-30 | High for covenant work; nil for this module | Covenant and downside work | Quote both with their definitions and never infer headroom from either; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 54; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33 |
| Total debt | Balance-sheet carrying value: USD 1,636.935m at 2026-06-30 | Principal USD 1,653.548m (Funded Debt as the credit agreement defines it) | Carrying value is net of USD 16.613m unamortized issuance costs and discounts | 2024-09-30, 2025-09-30, 2026-06-30 | Low: 1.0% of principal | Leverage and liquidity | Carrying value for ratios; principal in the reconciliation and ladder; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33 |
| Interest | Cash interest paid for coverage: USD 86.279m for the last twelve months | Interest expense of USD 89.237m in the income statement and the credit agreement's net interest expense of USD 91.588m | Accrual against cash against covenant definition | FY2025, LTM to 2026-06-30 | Medium: the three measures differ by up to 5.309m | Cover and downside | Cover on cash interest paid; the covenant ratio of 8.72x uses a different definition; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33 |
| Cash | Unrestricted cash on the balance sheet: USD 56.953m at 2026-06-30 | Cash, cash equivalents and restricted cash of USD 153.249m in the cash flow statement; restricted cash of USD 96.296m is held for customers and collateral | Two cash figures for one balance-sheet date | 2026-06-30 | High for liquidity: restricted cash is 63% of the larger figure | Liquidity | Net debt uses unrestricted cash only; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 32 |
| Operating cash flow | Reported net cash from operating activities after the effect of receivable sales | Sales of receivables under the purchase programme are recorded within operating activities: USD 1.28 billion derecognized in the nine months to 2026-06-30, USD 574.2 million a year earlier | Funding that lowers receivables is presented as operating cash flow, not financing | FY2024, FY2025, 9M 2025, 9M 2026 | High for cash-flow quality | Liquidity and cash-flow analysis | Treat the programme as working-capital funding and read operating cash flow with the outstanding sold balance, which is not stated; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 20; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 94 |
| Child support business divestiture | Gain on sale of USD 10.147m recorded as a divestiture-related item | Sale price of approximately USD 15.0 million, annual revenue of about USD 25.0 million, and total proceeds from divestitures of USD 16.842m in the nine months, which also include final installments of the 2023 United Kingdom sale | One event, three figures with different roles: price, accounting gain and cash proceeds | 9M 2026 | Low | Earnings and cash flow | The gain is excluded from adjusted EBITDA; the proceeds figure is not the sale price; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Historical statements and constructed last twelve months to 2026-06-30 | Ready with Limitations | Interim filings are unaudited; no balance sheet at 2025-06-30 | Use as stated with the unaudited label |
| Leverage and interest cover | Ready with Limitations | Reported EBITDA is calculated, not issuer-stated; carrying-value debt; interim EBITDA is a last-twelve-month figure | Show the issuer-adjusted twin beside each ratio |
| Liquidity | Ready with Limitations | Letters of credit after 2025-09-30 are not stated; the outstanding balance of sold receivables is not stated | Obtain the fiscal year-end report |
| Covenant headroom | Not Ready | The credit agreement and its amendments were not supplied; only the company's own ratios and limits are stated | Obtain the credit agreement |
| Fiscal year-end 2026 position | Not Ready | No document reports results after 2026-06-30 | Obtain the fiscal 2026 annual report and fourth-quarter release |
| Forward modelling inputs | Ready with Limitations | Guidance was lowered in the third-quarter release; no post-quarter actuals | Use the current guidance with the dated qualification |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-06-30 | 1,653.548 | -16.613 | 1,636.935 | US$m | Principal is the sum of the six scheduled-payment rows; the only reconciling item is unamortized issuance costs and discounts of USD 16.613m (calculation K16); Canada and United Kingdom facilities are not in the ladder and their amounts are not stated; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Cash collected from one U.S. federal customer after the quarter end | Not supplied: the source states 'subsequent to June 30, 2026' only | -245.000 | 1,334.982 | 1.87 | US$m | Management states that USD 245 million of delayed receipts was collected after 2026-06-30 (calculations K17 and K18); it is a gross collection, so later cash outflows (repurchases, interest, the dividend, operating costs) and any borrowing or repayment are not reflected; leverage uses last-twelve-month reported EBITDA; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31 |
| Quarterly cash dividend of USD 0.33 per share, declared 2026-07-06 and payable 2026-08-31 | 2026-08-31 | 17.300 | 1,597.282 | 2.24 | US$m | The filing anticipates a cash payment of approximately USD 17.3 million, so the amount is an approximation (calculation K26); it is a cash outflow after the balance-sheet date that raises net debt; it is shown separately from the collection above and the two are not netted; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 22; EX-99.1_2026-08-06_mms-2026x06x30x8kxex991.htm.jsonl, page 4 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-09-30 | 5,306.197 | 615.044 | US$m | Twelve months; issuer-adjusted EBITDA (Non-GAAP) in every row; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 |
| FY2025 / 2025-09-30 | 5,431.276 | 701.554 | US$m | Twelve months; issuer-adjusted EBITDA (Non-GAAP) in every row; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59 |
| 2026-06-30 | 5,248.399 | 711.009 | US$m | Last twelve months to 2026-06-30, constructed (calculations K6 and K7); issuer-adjusted EBITDA (Non-GAAP) in every row; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |

The last row is a constructed twelve-month period, comparable in duration with the two fiscal years, and its adjusted EBITDA is below reported EBITDA because it excludes a divestiture gain.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no source states the legal rank of the facilities | Not supplied: legal rank not stated | Not supplied: the credit agreement as a whole is stated to be secured, but no facility rank is stated | Not supplied: no facility has a stated rank | Not supplied: no facility has a stated rank | US$m | The 10-K states the credit agreement is secured by substantially all assets and guaranteed by wholly owned material domestic subsidiaries but does not rank the Term Loan A, Term Loan B and revolver against each other or against the Canada and United Kingdom facilities; 10-K_2025-09-30_mms-20250930.htm.jsonl, page 84 |

No debt stack is drawn because the legal rank of each facility is not stated.

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 120 |
| Calculated | 60 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 8 |
| Fields present | 24 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

## Calculations

Amounts are in USD thousands as printed unless a unit is stated; the money tables restate them in US$m without rounding. Each input is quoted from the cited statement line.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| K1 | EBITDA (Reported) FY2024 | 488,499 + 91,570 + 33,957 | 614,026 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| K2 | EBITDA (Reported) FY2025 | 528,289 + 92,047 + 41,669 | 662,005 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| K3 | EBITDA (Reported) 9M 2025 | 405,427 + 69,041 + 27,502 | 501,970 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| K4 | EBITDA (Reported) 9M 2026 | 456,125 + 60,785 + 37,091 | 554,001 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 4–5 |
| K5 | EBITDA (Reported), last twelve months to 2026-06-30 | FY2025 662,005 + 9M 2026 554,001 - 9M 2025 501,970 | 714,036 | Calculations K2 to K4 |
| K6 | Adjusted EBITDA, last twelve months to 2026-06-30 | FY2025 701,554 + 9M 2026 550,768 - 9M 2025 541,313 | 711,009 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 59; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 36 |
| K7 | Revenue, last twelve months to 2026-06-30 | FY2025 5,431,276 + 9M 2026 3,929,984 - 9M 2025 4,112,861 | 5,248,399 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 64; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 4 |
| K8 | Cash interest paid, last twelve months to 2026-06-30 | FY2025 82,562 + 9M 2026 64,526 - 9M 2025 60,809 | 86,279 | 10-K_2025-09-30_mms-20250930.htm.jsonl, page 93; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 19 |
| K9 | Interest expense and net income, last twelve months to 2026-06-30 | Interest expense 84,080 + 66,805 - 61,648; net income 319,034 + 295,599 - 243,746 | 89,237 and 370,887; both agree to the covenant tables | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 33 |
| K10 | Operating cash flow, last twelve months to 2026-06-30 | FY2025 429,372 + 9M 2026 -179,863 - 9M 2025 -220,000 | 469,509 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| K11 | Capital purchases, last twelve months to 2026-06-30 | FY2025 63,213 + 9M 2026 28,752 - 9M 2025 55,686 | 36,279 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| K12 | Free cash flow, last twelve months to 2026-06-30 | 469,509 - 36,279 | 433,230 | Calculations K10 and K11 |
| K13 | Net debt FY2024 / 2024-09-30 | 1,132,093 - 183,123 | 948,970 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| K14 | Net debt FY2025 / 2025-09-30 | 1,334,273 - 222,351 | 1,111,922 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| K15 | Net debt 2026-06-30 | 1,636,935 - 56,953 | 1,579,982 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 64–65; 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 5–6 |
| K16 | Reconciling items between principal and carrying value | 1,636,935 - 1,653,548 (unamortized issuance costs and discounts 16,613) | -16,613 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| K17 | Pro forma net debt after the USD 245 million collection | 1,579,982 - 245,000 | 1,334,982 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31 |
| K18 | Pro forma net leverage | 1,334,982 / 714,036 | 1.87x | Calculations K5 and K17 |
| K19 | Free cash flow by period | Operating cash flow plus purchases of property, equipment and capitalized software: FY2024 515,258 - 114,190; FY2025 429,372 - 63,213; 9M 2025 -220,000 - 55,686; 9M 2026 -179,863 - 28,752 | 401,068; 366,159; -275,686; -208,615 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| K20 | Net borrowing in the nine months to 2026-06-30 | Proceeds from borrowings 1,368,675 - principal payments 1,065,935 | 302,740 | 10-K_2025-09-30_mms-20250930.htm.jsonl, pages 65–66; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 6 |
| K21 | Ratios at 2026-06-30 on the last twelve months | Net debt 1,579,982 / EBITDA 714,036; total debt 1,636,935 / 714,036; EBITDA 714,036 / cash interest 86,279 | 2.21x; 2.29x; 8.28x | Calculation register |
| K22 | Ratios at 2025-09-30 | Net debt 1,111,922 / EBITDA 662,005; total debt 1,334,273 / 662,005; EBITDA 662,005 / cash interest 82,562 | 1.68x; 2.02x; 8.02x | Calculation register |
| K23 | Covenant figures as the company states them | Funded Debt 1,653,548 less cash 56,953, over Consolidated EBITDA 798,419 | 2.00x; maximum 4.00x | 10-Q_2026-06-30_mms-20260630.htm.jsonl, pages 32–33 |
| K24 | Principal hedged by interest rate swaps at 2026-06-30 | 150,000 + 200,000 + 50,000 + 75,000 + 75,000 + 75,000 + 50,000 = 675,000 of principal 1,653,548 | 675,000; 40.8% of principal | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 16; 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 29 |
| K25 | Scheduled principal payments through 2028-09-30 | 18,952 + 75,809 + 81,434 = 176,195 of principal 1,653,548 | 176,195; 10.7% of principal | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15 |
| K26 | Pro forma net debt and leverage after the dividend payable 2026-08-31 | 1,579,982 + 17,300 = 1,597,282; 1,597,282 / 714,036 | 1,597,282; 2.24x | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 22 |
| K27 | Operating lease liabilities at 2026-06-30 | 38,280 current + 56,603 non-current | 94,883 | 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5 |

## Gaps

No document reports results after 2026-06-30, so the balance sheet, net debt, leverage and liquidity at the fiscal year end 2026-09-30 are not established. This restricts every leverage, liquidity and net debt figure to a position that is 128 days old at the as-of date. Severity High. The action is to obtain the fiscal 2026 annual report and fourth-quarter release when published.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15

The credit agreement and its first and second amendments were not supplied, so covenant definitions, baskets, the legal rank of each facility, the terms of the 2026-05-27 Term Loan B increase and the revolver maturity are known only from summaries. This restricts covenant headroom, the debt stack and instrument terms. Severity High. The action is to obtain the executed agreement and amendments.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 39

The date of the USD 245 million collection and the other cash movements after 2026-06-30 are not stated, so the pro forma net debt and net leverage after it are indicative only. Severity Medium. The action is to obtain the fiscal year-end cash position.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 31

Performance bond commitments are stated only at 2025-09-30 (USD 33.2 million), and the amount accrued for the MOVEit litigation is not stated, so claims outside debt at 2026-06-30 are not fully established. Severity Medium. The action is to obtain the fiscal year-end contingencies note.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 98

No letter-of-credit amount is stated after 2025-09-30, so the revolver access of about USD 730.0 million at 2026-06-30 may be overstated by letters of credit drawn on it. Severity Low. The action is to obtain the lender's availability statement or the fiscal year-end report.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 84

The revolver commitment and drawings at 2024-09-30 are not stated, so undrawn committed facilities for fiscal 2024 are not established. Severity Low. The action is to obtain the fiscal 2024 annual report.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 52

No balance sheet at 2025-06-30 is supplied, so the 9M 2025 balance-sheet column, days sales outstanding at that date and interim leverage at 2025-06-30 are not established. Severity Low. The action is to obtain the third-quarter fiscal 2025 report.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5

The legal rank of the Term Loan A, Term Loan B and revolver against each other, against the Canada and United Kingdom facilities and against other claims is not stated, so no debt stack is drawn. Severity Medium. The action is to obtain the credit agreement.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 84

Carrying values, scheduled annual amortisation, floors and maturity dates are not stated for each facility separately, only in total, so those cells of the instrument register are not established. Severity Low. The action is to obtain the credit agreement.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 15

Amounts and commitments of the revolving facilities in Canada and the United Kingdom are not stated, so they are left out of the instrument register and the maturity ladder. Severity Low. The action is to obtain the subsidiary facility terms.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 83

Interest income is not presented separately and sits inside other income and expense, net, so no interest income line is stated for any period. Severity Low. The action is to obtain the notes behind that line.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 5

Capitalized software impairment charges are stated only for 9M 2026; the annual statements print no such line and the 9M 2025 column prints a dash, which is read as missing, not zero. Asset acquisition and payments for contingent consideration are stated only for fiscal 2024, with dashes or no line elsewhere. Severity Low. The action is to read the notes of the fiscal 2025 and interim filings.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 65

The outstanding balance of receivables sold to the purchase programme at each balance-sheet date is not stated, so the funding it provides cannot be added to debt. Severity Medium. The action is to obtain the programme's period-end balance.
Basis: 10-Q_2026-06-30_mms-20260630.htm.jsonl, page 20

Backlog at 2026-06-30, employees at 2024-09-30 and 2026-06-30, and days sales outstanding excluding receivable sales at 2024-09-30 are not stated in the supplied filings. Severity Low. The action is to obtain the fiscal year-end report.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 49

The corporate and unallocated segment row has no revenue because the filing presents none; the three segments sum to consolidated revenue in every period. Severity Low. No action is needed unless the filing changes.
Basis: 10-K_2025-09-30_mms-20250930.htm.jsonl, page 78

## Next module

The orchestrator selects the next module.
