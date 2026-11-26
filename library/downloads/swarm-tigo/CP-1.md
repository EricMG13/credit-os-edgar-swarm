## Request

MILLICOM INTERNATIONAL CELLULAR SA (issuer id tigo), as of 2026-11-05, on the credit snapshot pathway (full credit assessment). The scope is Financial foundation: the income statement, cash flow, balance sheet, debt, net debt and credit-metric registers built from the four supplied filings, in US dollars millions.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 20-F_2025-12-31_tigo-20251231.htm.jsonl | Annual report on Form 20-F for the year ended December 31, 2025, with audited consolidated financial statements | 2026-03-24 | 13be2a8c900b103376e04c45e18282d28f2b1aac3516bfaed99fc02cc0e15f37 | Audited FY2025 statements, debt and financing note, instrument list at 2025-12-31, net debt, liquidity statement, covenant statement, FY2024 comparatives for revenue and Adjusted EBITDA |
| 6-K_2026-05-12_dp246578_6k.htm.jsonl | Form 6-K furnishing unaudited interim financial statements for the three months ended March 31, 2026 and the Q1 2026 earnings release | 2026-05-12 | e31fa18185d3ceef7ba9e0133efc952dd4f43ccbd999e9a5f5b5af04d8dbf712 | Cross-check of the quarterly gross debt, net debt and leverage series; Chile associate revolving facility; not used for a table figure |
| 6-K_2026-08-06_dp251442_6k.htm.jsonl | Form 6-K furnishing unaudited, independently reviewed interim financial statements for the six months ended June 30, 2026, the Q2 2026 earnings release and a press release | 2026-08-06 | 76b47ade3b6a5a2f060db2592b816c6ed584aa9ed405d036c0be893943dc1c51 | Cross-check of the quarterly net debt and leverage series and of the review conclusion; not used for a table figure |
| 6-K_2026-11-05_dp256407_6k.htm.jsonl | Form 6-K furnishing unaudited interim financial statements for the nine months ended September 30, 2026, the Q3 2026 earnings release and a press release | 2026-11-05 | 6ab7c7e5e635829f16eb15a89301463e6131db3f5c0e68ee118ba6350801f894 | Nine-month 2026 and 2025 statements, 2026-09-30 balance sheet, debt movements and maturity bands, issuer net debt and leverage, Adjusted EBITDA reconciliation, subsequent events, KPIs |

| Module | Document | sha256 | Use |
|---|---|---|---|
| Source readiness (CP-0) | Accepted source-readiness module output for this run | feddc445c04747edb1b77c28793b2a836beb8190289c8edc129f0106940768a7 | Source gate, perimeter, restatement and gap findings carried forward; no figure copied without a source locator |

## Findings

### Bottom line

Leverage looks moderate on the statements, with debt at 2.27x last-twelve-month reported EBITDA, but the ratio understates creditor exposure because lease liabilities of USD 3,190 million sit outside debt and EBITDA is struck before lease costs. Debt rose from USD 6,886 million at 31 December 2025 to USD 8,648 million at 30 September 2026 while cash fell from USD 1,552 million to USD 848 million, so net debt before derivatives rose from USD 5,334 million to USD 7,800 million.
Basis: calculation K10; calculation K11; calculation K12; calculation K14; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25

The issuer's own net leverage of 2.53x, which deducts lease costs from EBITDA, adds derivatives to net debt and is pro forma for acquisitions, is the better guide, and interest cover on reported EBITDA is 4.58x. Availability of the USD 600 million revolving facility after 2025 and any instrument-level debt detail are not established, so liquidity and ranking conclusions rest on year-end 2025 data.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 40; calculation K13; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255

### Leverage and coverage

Debt of USD 8,648 million is 2.27x last-twelve-month reported EBITDA of USD 3,813 million and 2.31x issuer-adjusted EBITDA of USD 3,743 million; at 31 December 2025 the same ratios were 2.36x and 2.50x. EBITDA grew faster than debt, mostly through acquisitions: the issuer reports nine-month Adjusted EBITDA growth of 50.6%, of which 8.8% is organic. The last twelve months include Ecuador and Uruguay from October 2025 and Coltel only from 6 February 2026, while the balance sheet carries the debt of all three in full, so on a pro forma basis the ratio would be lower, which partly offsets the lease effect. Adding lease liabilities of USD 3,190 million to debt gives 3.10x reported EBITDA, against 3.25x at year-end 2025.
Basis: calculation K04; calculation K05; calculation K12; calculation K14; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 9–10; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3

Cash interest paid including lease interest was USD 832 million over the last twelve months, so reported EBITDA covers it 4.58x, down from 4.99x for 2025 because interest rose faster than EBITDA; on interest paid on debt alone cover is 6.82x. Cover is also more exposed to rates than a year ago: the issuer states that 56% of total debt is at fixed rates, against 70% at year-end 2025, mainly because Coltel's variable-rate debt was added.
Basis: calculation K07; calculation K08; calculation K13; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32

### Cash flow and claims outside debt

Operating cash flow was USD 2,028 million in nine months 2026 against cash capex of USD 965 million on spectrum, other intangibles and property, plant and equipment, leaving levered free cash flow of USD 1,063 million before USD 267 million of lease principal and USD 587 million of dividends. Acquisitions of subsidiaries took a further USD 924 million and, with dividends and lease principal, outweighed free cash flow, so cash fell by USD 698 million in the period.
Basis: calculation K17; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4

Two claims sit outside debt. Lease liabilities were USD 3,190 million at 30 September 2026, and payables and accruals for capital expenditure were USD 2,101 million against USD 1,198 million at year-end 2025, an increase of USD 903 million whose interest terms the filings do not state. A dividend payable of USD 579 million is a current liability, with declared instalments scheduled from October 2026 to April 2027, and it is not in net debt.
Basis: calculation K14; calculation K18; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 20

### Liquidity and maturities

Cash of USD 848 million does not cover the USD 872 million of debt due within one year, and a further USD 986 million falls due in the following year. The largest dated band is USD 1,947 million in the year to September 2029, and USD 2,094 million falls after September 2031. Undrawn committed facilities at 30 September 2026 are not established; at year-end 2025 cash plus the undrawn revolving facility was USD 2,152 million against USD 329 million due within one year.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25; calculation K19; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 272

### Definitions and data quality

The issuer's 2.53x is not comparable with 2.05x here. Its net debt adds USD 183 million of derivatives and vendor financing to debt, and its EBITDA is after lease depreciation and lease interest and pro forma for acquisitions, whereas the ratios in this module use balance-sheet debt less cash over reported EBITDA before lease costs. Operating cash flow is USD 2,028 million in the cash flow statement and USD 2,019 million in the issuer's free cash flow reconciliation, a difference of USD 9 million that the filing does not explain.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 40; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 42; calculation K20

December 2025 comparatives were restated after the Uruguay and Ecuador purchase accounting was finalised, and the filings print one-million rounding differences between statement totals and their parts. The registers below use the audited 2025 figures for the 2025 column and record the restated figures where they differ.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 12; 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 195–196

### Subsequent events

On 15 October 2026 Coltel borrowed about USD 12.5 million from BTG Pactual and prepaid about USD 12.5 million to Banco Santander, which leaves net debt unchanged. The dividend payable of USD 579 million would raise net debt to USD 8,379 million, or 2.20x last-twelve-month reported EBITDA, if settled from cash.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 28; calculation K21

### Contrary evidence and what would change the view

The strongest evidence against a benign reading is the issuer's own net leverage of 2.53x and the 3.10x ratio of debt plus lease liabilities to reported EBITDA, both above the 2.27x headline; the strongest evidence for it is interest cover of 4.58x and nine-month levered free cash flow of USD 1,063 million. The view would improve if the issuer confirms that the USD 600 million revolving facility is still undrawn, if its pro forma EBITDA shows leverage at or below its year-end target of 2.5x, and if the dividend payable of USD 579 million is covered by free cash flow rather than cash. It would worsen if the revolving facility has been drawn or the capital expenditure payables carry interest.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 44; calculation K13; calculation K14; calculation K17; calculation K18; calculation K21

### Limitations

- The 2026 reports are unaudited, and only the six-month statements carry an auditor's review conclusion, which is not an audit; the 2025 figures are audited but were later restated for Uruguay and Ecuador purchase accounting.
Basis: 6-K_2026-08-06_dp251442_6k.htm.jsonl, page 8; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 12; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195
- Reported EBITDA is calculated from operating profit and depreciation and amortization because the issuer states only Adjusted EBITDA, and it includes equity-accounted profit; the last-twelve-month figures are not pro forma and mix two treatments of the Paraguay mobile finance business.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 40; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41; calculation K04

- No instrument list, legal rank, security, guarantor scope, covenant level or 2026 compliance statement is supplied, and the availability of the USD 600 million revolving facility at 30 September 2026 is not stated, so liquidity, ranking and covenant conclusions are not established.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 258; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25

### Period table

| Period | Start | End |
|---|---|---|
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 20-F_2025-12-31_tigo-20251231.htm.jsonl | Annual report on Form 20-F with audited statements | FY2025 with FY2024 and FY2023 comparatives (year to 2025-12-31) | USD | millions | Millicom International Cellular S.A. and subsidiaries; Honduras joint venture equity-accounted | IFRS as issued by the IASB; audit opinion | Tier 1 audited statements | FY2025 statements, instrument list, net debt, liquidity, covenants | Tables are flattened text; indentures and credit agreements are listed as exhibits, not included |
| 6-K_2026-05-12_dp246578_6k.htm.jsonl | Form 6-K with unaudited interim statements and earnings release | Three months to 2026-03-31 | USD | millions | Group including Coltel from 2026-02-06; Paraguay mobile finance business discontinued | IAS 34; unaudited, no review report in the file | Tier 2b unaudited without auditor review | Cross-check of the quarterly debt and leverage series | Coltel purchase accounting provisional |
| 6-K_2026-08-06_dp251442_6k.htm.jsonl | Form 6-K with unaudited reviewed interim statements, earnings release and press release | Six months to 2026-06-30 | USD | millions | Same group as the first quarter | IAS 34; review conclusion by the independent auditor, which is not an audit | Tier 2a unaudited with auditor review | Cross-check of the quarterly debt and leverage series | Two income statement columns are labelled Not reviewed |
| 6-K_2026-11-05_dp256407_6k.htm.jsonl | Form 6-K with unaudited interim statements, earnings release and press release | Nine months to 2026-09-30 with 2025 comparatives | USD | millions | Same group; Ecuador and Uruguay consolidated from October 2025; Chile associate equity-accounted from 2026-02-10 | IAS 34; unaudited, no review report in the file | Tier 2b unaudited without auditor review | Latest statements, debt movements, maturity bands, issuer net debt and leverage, subsequent events | December 2025 comparatives restated; Ecuador purchase accounting still provisional; no instrument list |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| Millicom International Cellular S.A. (Luxembourg) | Issuer and parent of the Tigo group; borrower of the senior notes and revolving facility | December 31 | USD | millions | Consolidated group | IFRS (IASB); interims under IAS 34 | FY2025; 9M 2025; 9M 2026; balance sheets at 2025-12-31 and 2026-09-30 |
| Operating subsidiaries that borrow (Guatemala, Colombia, Panama, Paraguay, Bolivia, Costa Rica, El Salvador, Ecuador, Uruguay) | Borrowers of local bonds and bank loans; Millicom guarantees some | December 31 | USD for reporting; local currencies for the debt | millions | Fully consolidated | IFRS | Debt by location at 2025-12-31 only |
| Honduras joint venture | Equity-accounted joint venture; its debt is outside the group debt figures | December 31 | USD | millions | Equity method; shown at 100% only in segment data | IFRS | FY2025; nine months 2026 |
| Celtel Chile (Tigo Chile) associate | Equity-accounted associate from 2026-02-10; has its own revolving facility | December 31 | USD | millions | Equity method; losses beyond the carrying amount unrecognised | IFRS | Nine months 2026 |

Subsequent events are flagged under Post-balance-sheet adjustments below with their dates; none is blended into a period figure.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived as operating profit plus depreciation plus amortization | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Calculated | Not stated by the issuer | 2,919; 2,073; 2,967 | The issuer states only Adjusted EBITDA; the method needs an unadjusted figure. It includes the share of profit in joint ventures and other operating income (expense), net | FY2025; 9M 2025; 9M 2026 |
| Cash Interest Paid is interest paid on debt and other financing plus interest paid on leases | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Calculated | Two cash flow lines | 585; 432; 679 | Lease interest is paid in cash and is excluded from EBITDA under IFRS 16, so cover that omits it would flatter the group; interest received is not netted | FY2025; 9M 2025; 9M 2026 |
| Gross debt is the debt note total, not the sum of the two balance-sheet lines | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Rounding | 6,885 (6,556 + 329); 8,649 (7,777 + 872) | 6,886; 8,648 | The issuer's debt notes and net debt tables state the totals; the face lines differ by one million through rounding | FY2025; 2026-09-30 |
| Net debt is gross debt less cash and cash equivalents only | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Definition | Issuer net debt 5,357; 7,983 | 5,334; 7,800 | The issuer also adds derivatives and vendor financing of 23 and 183; the module keeps them out so net debt follows the Net debt data definition and shows the issuer figure beside it | FY2025; 2026-09-30 |
| FY2025 balance sheet kept as filed; restated figures recorded only | 6-K_2026-11-05_dp256407_6k.htm.jsonl | Restatement | Total assets 17,253; total debt 6,886 | Restated total assets 17,271; restated total debt 6,887 | The audited statements are the fiscal-year source; the restatement follows finalised Uruguay and updated Ecuador purchase accounting | FY2025 |
| Nine months 2025 statements are re-presented for the discontinued Paraguay mobile finance business; FY2025 is not | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Perimeter | FY2025 includes the business in continuing operations | 9M 2025 excludes it | The twelve-month figures mix the two bases; the effect is small (nine-month 2025 Adjusted EBITDA of the business was 8 on the issuer's cash flow table) and is stated as a limitation | FY2025; 9M 2025; LTM |
| Last twelve months built as FY2025 plus 9M 2026 less 9M 2025 | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Derived period | Not stated by the issuer | See the constructed period register | Standard method; it is not pro forma for Coltel before 2026-02-06 | LTM to 2026-09-30 |

### T4.4 Income statement

| Line item | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Revenue | 5,819 | 4,150 | 6,440 | USD millions | Reported; FY2025 audited, 9M columns unaudited and re-presented for discontinued operations | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Equipment, programming and other direct costs | -1,311 | -940 | -1,555 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Operating expenses | -1,758 | -1,247 | -1,928 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Depreciation | -961 | -677 | -1,155 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Amortization | -319 | -233 | -334 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Share of profit (loss) in Honduras joint venture and Chile associate | 102 | 40 | 11 | USD millions | Reported; FY2025 is the Honduras joint venture only, the Chile associate is equity-accounted from 2026-02-10 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Other operating income (expenses), net | 68 | 69 | -2 | USD millions | Reported; 9M 2026 includes a goodwill impairment of 32 for Costa Rica | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Operating profit | 1,639 | 1,163 | 1,478 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Interest and other financial expenses | -702 | -507 | -868 | USD millions | Reported; the 9M 2025 note total is 508 against 507 on the face of the statement | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Interest and other financial income | 28 | 16 | 37 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Sale of Lati Operations | 741 | 742 | Not supplied: the filing prints a dash | USD millions | Reported one-off gain; the FY2025 note states 741 and the nine-month 2025 column 742 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Other non-operating (expenses) income, net | -43 | -68 | -72 | USD millions | Reported; 9M 2026 includes the Guatemala litigation settlement expense of 99 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Profit (loss) from other joint ventures and associates, net | 1 | 1 | -4 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Profit before taxes from continuing operations | 1,665 | 1,346 | 571 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Tax expense | -303 | -257 | -298 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Profit from continuing operations | 1,362 | 1,090 | 274 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Profit from discontinued operations, net of tax | Not supplied: the filing prints a dash | 6 | 1 | USD millions | Reported; Paraguay mobile finance business | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Net profit for the period | 1,362 | 1,096 | 275 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Net profit attributable to owners of the Company | 1,316 | 1,064 | 316 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| Non-controlling interests | 46 | 32 | -41 | USD millions | Reported; the sign is the share of profit (loss) attributable to non-controlling interests | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| EBITDA (Reported) | 2,919 | 2,073 | 2,967 | USD millions | Calculated by calculations K01 to K03: operating profit plus depreciation plus amortization; includes the share of profit in joint ventures and other operating income (expense), net; the issuer states no unadjusted EBITDA | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| EBITDA (Adjusted) | 2,749 | 1,964 | 2,958 | USD millions | Issuer-stated Adjusted EBITDA: operating profit excluding impairment losses, depreciation and amortization, share of profit in the Honduras joint venture and Chile associate, and gains or losses on fixed asset disposals; it is after one-off costs of 149 in 9M 2026 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41 |

### T4.5 Cash flow statement

| Line item | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Depreciation and amortization | 1,280 | 910 | 1,490 | USD millions | Reported; FY2025 audited, 9M columns unaudited | 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 196–197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Total changes in working capital | -137 | -74 | 19 | USD millions | Reported; an outflow is negative | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Interest paid on leases | -176 | -119 | -216 | USD millions | Reported as paid in operating activities; an outflow is negative here and positive in Cash Interest Paid | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Interest paid on debt and other financing | -409 | -313 | -463 | USD millions | Reported as paid in operating activities; an outflow is negative here and positive in Cash Interest Paid | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Interest received | 27 | 16 | 31 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Taxes paid | -335 | -236 | -306 | USD millions | Reported as paid in operating activities | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 1,734 | 1,257 | 2,028 | USD millions | Reported; includes discontinued operations; the 9M 2026 free cash flow reconciliation prints 2,019 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Acquisition of subsidiaries, net of cash acquired | -545 | Not supplied: the filing prints a dash | -924 | USD millions | Reported; the FY2025 line also covers joint ventures and associates; Coltel 9M 2026 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Purchase of spectrum and licenses | -73 | -62 | -207 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Purchase of other intangible assets | -91 | -97 | -100 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Purchase of property, plant and equipment | -650 | -464 | -658 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -374 | 61 | -2,001 | USD millions | Reported; an outflow is negative | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Proceeds from debt and other financing | 1,199 | 725 | 1,131 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Repayment of debt and other financing | -599 | -375 | -999 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Lease capital repayment | -209 | -139 | -267 | USD millions | Reported; lease principal is a financing outflow under IFRS 16 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Dividends paid to owners of the Company | -754 | -420 | -587 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -485 | -328 | -721 | USD millions | Reported; an outflow is negative | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -14 | -18 | -4 | USD millions | Reported as exchange impact on cash and cash equivalents | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Net Cash Change | 861 | 972 | -698 | USD millions | Reported net increase (decrease): operating plus investing plus financing plus the exchange effect | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Opening Cash | 699 | 699 | 1,552 | USD millions | Reported cash and cash equivalents at the beginning of the year | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Effect of cash in disposal group or disposed operations | -8 | -8 | -6 | USD millions | Reported; FY2025 is the effect of the Lati disposal, the nine-month columns are cash in disposal groups held for sale | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Closing Cash | Not supplied: the statement prints 1,552 after an effect of -8 for the Lati disposal that the fixed rows cannot hold, so opening cash 699 plus net change 861 does not reach it | Not supplied: the statement prints 1,663 after an effect of -8 for a disposal group held for sale that the fixed rows cannot hold, so opening cash 699 plus net change 972 does not reach it | Not supplied: the statement prints 848 after an effect of -6 for a disposal group held for sale that the fixed rows cannot hold, so opening cash 1,552 plus net change -698 does not reach it | USD millions | The printed closing balance equals Cash & Equivalents on the balance sheet where one exists; a gap is written because the roll-forward rows do not add | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 585 | 432 | 679 | USD millions | Calculated by calculation K07: interest paid on debt and other financing plus interest paid on leases, both printed in operating activities | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2025 | 9M 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|
| Intangible assets, net | 7,798 | 8,777 | USD millions | Reported; the restated 2025-12-31 figure is 7,806 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2 |
| Property, plant and equipment, net | 3,226 | 4,715 | USD millions | Reported; the restated 2025-12-31 figure is 3,218 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2 |
| Right of use assets, net | 2,346 | 2,910 | USD millions | Reported; the restated 2025-12-31 figure is 2,321 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2 |
| Total non-current assets | 14,270 | 17,910 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2 |
| Trade receivables, net | 527 | 711 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2 |
| Restricted cash | 50 | 31 | USD millions | Reported; outside Cash & Equivalents and outside the cash used for net debt | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total current assets | 2,982 | 2,759 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total Assets | 17,253 | 20,709 | USD millions | Reported; the restated 2025-12-31 figure is 17,271 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Debt and financing, non-current | 6,556 | 7,777 | USD millions | Reported balance-sheet line | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Debt and financing, current | 329 | 872 | USD millions | Reported balance-sheet line | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Lease liabilities, non-current | 2,293 | 2,846 | USD millions | Reported; separate lines, not added to Total Debt | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Lease liabilities, current | 293 | 344 | USD millions | Reported; separate lines, not added to Total Debt | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Derivative financial instruments, liabilities (non-current and current together) | 23 | 203 | USD millions | Calculated by calculation K20: 9 plus 14 at 2025-12-31 and 157 plus 46 at 2026-09-30, before derivative assets of 19 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Payables and accruals for capital expenditure, non-current | 758 | 1,644 | USD millions | Reported; a non-debt claim whose interest terms are not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Payables and accruals for capital expenditure, current | 440 | 457 | USD millions | Reported; a non-debt claim whose interest terms are not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Dividend payable | 424 | 579 | USD millions | Reported current liability; not in debt or net debt | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total non-current liabilities | 10,240 | 13,384 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total current liabilities | 3,392 | 5,032 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total Liabilities | Not supplied: the printed 13,633 plus total equity 3,621 is 17,254, one above total assets 17,253; the filing's own rounding | Not supplied: the printed 18,432 plus total equity 2,278 is 20,710, one above total assets 20,709; the filing's own rounding | USD millions | Printed 13,633 and 18,432; omitted because the printed parts do not add to total assets | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Equity attributable to owners of the Company | 3,640 | 2,238 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Non-controlling interests | -20 | 40 | USD millions | Reported | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total Equity | 3,621 | 2,278 | USD millions | Reported; the printed parts add to 3,620 at 2025-12-31 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| Total Debt | 6,886 | 8,648 | USD millions | Reported carrying value of bonds and bank and development-bank financing, current plus non-current, net of issuance costs and discounts; excludes lease liabilities, derivatives and vendor financing; the face lines add to 6,885 and 8,649 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| Cash & Equivalents | 1,552 | 848 | USD millions | Reported cash and cash equivalents; restricted cash is excluded | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 195; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |

### Segment schedule

| Segment | Period | Revenue | Adjusted EBITDA | Unit | Basis and limitation | Source |
|---|---|---|---|---|---|---|
| Guatemala | FY2025 | 1,671 | 928 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Colombia | FY2025 | 1,450 | 604 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Panama | FY2025 | 725 | 371 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Honduras (joint venture shown at 100%) | FY2025 | 621 | 320 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Paraguay | FY2025 | 578 | 297 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Bolivia | FY2025 | 356 | 174 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Other segments (El Salvador, Nicaragua, Costa Rica, Ecuador, Uruguay) | FY2025 | 1,066 | 466 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Total segments | FY2025 | 6,467 | 3,159 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Inter-segment and other eliminations | FY2025 | -648 | -410 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Total Group | FY2025 | 5,819 | 2,749 | USD millions | Reported segment figure, issuer's label and order; eliminations include Honduras as a joint venture and unallocated items | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 |
| Guatemala | 9M 2025 | 1,239 | 687 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Colombia (Tigo Colombia) | 9M 2025 | 1,056 | 430 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Panama | 9M 2025 | 536 | 277 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Paraguay | 9M 2025 | 403 | 206 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Honduras (joint venture shown at 100%) | 9M 2025 | 462 | 234 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Other segments (including Bolivia) | 9M 2025 | 936 | 433 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Total segments | 9M 2025 | 4,632 | 2,267 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Inter-segment and other eliminations | 9M 2025 | -482 | -304 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Total Group | 9M 2025 | 4,150 | 1,964 | USD millions | Reported segment figure, issuer's label and order; re-presented for discontinued operations and for the Other segments category | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18 |
| Guatemala | 9M 2026 | 1,314 | 737 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Tigo Colombia | 9M 2026 | 1,354 | 550 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Coltel Colombia | 9M 2026 | 1,127 | 409 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Panama | 9M 2026 | 547 | 280 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Paraguay | 9M 2026 | 522 | 292 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Ecuador | 9M 2026 | 353 | 170 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Honduras (joint venture shown at 100%) | 9M 2026 | 482 | 248 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Chile (associate shown at 100%) | 9M 2026 | 987 | 209 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Other segments (El Salvador, Nicaragua, Costa Rica, Uruguay, Bolivia) | 9M 2026 | 1,249 | 590 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Total segments | 9M 2026 | 7,936 | 3,485 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Inter-segment and other eliminations | 9M 2026 | -1,496 | -527 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |
| Total Group | 9M 2026 | 6,440 | 2,958 | USD millions | Reported segment figure, issuer's label and order; segment revenue parts add to 7,935 against the printed 7,936 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 |

Segment definitions changed between periods, with Coltel and Ecuador shown separately and Bolivia moved into Other segments in 2026, so rows with the same label are comparable only where the label is the same; the Honduras and Chile rows are at 100% and are removed in the eliminations row.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 18

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 2.36 | 1.83 | x | Reported EBITDA (operating profit plus depreciation and amortization) for FY2025; debt is balance-sheet carrying value excluding leases; net debt is gross debt less cash |
| 2026-09-30 | 2.27 | 2.05 | x | Reported EBITDA for the last twelve months to 2026-09-30, FY2025 plus 9M 2026 less 9M 2025; not pro forma for Coltel before 2026-02-06; the issuer-defined leverage of 2.53x is on another basis |

These ratios use EBITDA before lease costs, which flatters them, and last-twelve-month earnings that omit Coltel before 6 February 2026, which burdens them, so they are not comparable with the issuer's own 2.53x.
Basis: calculation K12; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2025 / 2025-12-31 | 4.99 | x | Reported EBITDA over cash interest paid on debt and leases for FY2025 |
| 2026-09-30 | 4.58 | x | Reported EBITDA over cash interest paid on debt and leases for the last twelve months to 2026-09-30; interest received is not netted |

Cover includes lease interest in the denominator and uses cash paid rather than expense, so it is not comparable with a coverage ratio on interest expense.
Basis: calculation K13

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2025 / 2025-12-31 | 1,552 | 600 | US$m | Cash and cash equivalents; the revolving credit facility is stated as unused at 2025-12-31; no letters of credit drawn on it are stated; restricted cash of 50 is excluded |
| 2026-09-30 | 848 | Not supplied: no 2026 report restates the USD 600 million revolving facility or its drawings | US$m | Cash and cash equivalents; restricted cash of 31 is excluded; availability of the facility at 2026-09-30 is not established, so no liquidity total is stated |

The 2026-09-30 undrawn figure is missing, not zero, so liquidity at that date is understated by whatever the revolving facility still provides.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 272; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| Year to 2027-09-30 | 872 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder; the six bands add to 8,647 against the printed total of 8,648 |
| Year to 2028-09-30 | 986 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder |
| Year to 2029-09-30 | 1,947 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder |
| Year to 2030-09-30 | 1,601 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder |
| Year to 2031-09-30 | 1,147 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder |
| After 2031-09-30 | 2,094 | US$m | Issuer maturity band at 2026-09-30, stated on the same basis as the carrying value of 8,648; the filing prints no separate principal ladder |

The bands add to USD 8,647 million, one million below the printed total, and the issuer does not say whether they are principal or carrying amounts.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25; calculation K15

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Not supplied: no supplied source states a legal rank, security or guarantor ladder for any facility | Not supplied: no supplied source states a legal rank, security or guarantor ladder for any facility | Not supplied: no supplied source states a legal rank, security or guarantor ladder for any facility | Not supplied: no supplied source states a legal rank, security or guarantor ladder for any facility | Not supplied: no supplied source states a legal rank, security or guarantor ladder for any facility | US$m | The filings title most notes senior and call the Swedish krona bond, the redeemed Paraguay notes and one term loan senior unsecured, but state no legal rank among creditors, collateral or full guarantor scope, and the 2026 reports give no instrument list; the instrument register records what is stated |

No debt stack is drawn because legal rank and security are not stated for any facility.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 245–246; 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 247–251

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2025 / 2025-12-31 | 6,886 | 1,552 | 5,334 | US$m | Reported carrying value of bonds and bank and development-bank financing as filed; includes no securitization or finance leases; lease liabilities of 2,587 are outside it; principal total 6,937 less undiscounted amortized costs of 52; the issuer's own net debt of 5,357 also adds derivatives and vendor financing of 23 |
| 2026-09-30 | 8,648 | 848 | 7,800 | US$m | Reported carrying value of debt and financing; includes no securitization or finance leases; lease liabilities of 3,190 are outside it; the principal total is not stated, the maturity bands add to 8,647; the issuer's own net debt of 7,983 also adds derivatives and vendor financing of 183 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-09-30 | 8,647 | 1 | 8,648 | US$m | Principal is the sum of the six maturity bands; reconciling items are the one-million rounding difference to the printed total of 8,648; the filing prints no issuance costs or discounts at 2026-09-30, although at 2025-12-31 principal of 6,937 exceeded carrying value by amortized costs of 52, so true principal at 2026-09-30 is probably higher than shown |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Coltel new loan of COP 40,000 million with BTG Pactual and partial prepayment of the Banco Santander loan | 2026-10-15 | 0 | 7,800 | 2.05 | US$m | Each leg is about 12.5; a borrowing held as cash or a repayment from cash leaves net debt unchanged before fees and exchange effects; both amounts are stated as approximate; the leverage is over last-twelve-month reported EBITDA of 3,813 |
| Settlement of the dividend payable on the balance sheet (October 2026, January 2027 and April 2027 instalments) | Not supplied: the source states October 2026 only for the first instalment | 579 | 8,379 | 2.20 | US$m | Dividend payable at 2026-09-30 of 579 settled in cash; the source gives the per-share schedule (0.75 per share in each of three instalments from the annual meeting, plus an interim 1.50 per share in two instalments) but no cash total by instalment; new debt or cash raised before payment would change the result |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 5,804 | 2,469 | US$m | Twelve months; issuer-adjusted EBITDA as filed in the 2025 annual report comparatives |
| FY2025 / 2025-12-31 | 5,819 | 2,749 | US$m | Twelve months; issuer-adjusted EBITDA as filed; includes the Paraguay mobile finance business in continuing operations |
| 2026-09-30 | 8,109 | 3,743 | US$m | Twelve months to 2026-09-30, FY2025 plus 9M 2026 less 9M 2025; issuer-adjusted EBITDA; includes Ecuador and Uruguay from October 2025 and Coltel from 2026-02-06, so it is not like for like with FY2025 |

Growth between the rows is mostly acquired, with the issuer reporting organic revenue growth of 4.4% for nine months 2026.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228; calculation K06; calculation K05; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), nine months to 2026-09-30 | 2,967 | US$m | Operating profit 1,478 plus depreciation 1,155 plus amortization 334; reported measure, calculated |
| Other operating income (expenses), net, added back | 2 | US$m | The 9M 2026 line is an expense of 2; the issuer removes the whole line, which holds disposal gains and the Costa Rica impairment |
| Share of profit in Honduras joint venture and Chile associate, removed | -11 | US$m | The 9M 2026 line is a profit of 11; the issuer removes it from Adjusted EBITDA |
| Adjusted EBITDA (issuer-stated), nine months to 2026-09-30 | 2,958 | US$m | Issuer-adjusted measure; its one-off costs of 149 stay inside it, so no further add-back is made |

The bridge covers nine months 2026 only, the period for which the issuer prints the full reconciliation in its quarterly series.
Basis: calculation K22; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41

### Financials and credit metrics

| Measure | FY2025 | 9M 2025 | 9M 2026 | LTM 2026-09-30 | Unit | Basis and limitation |
|---|---|---|---|---|---|---|
| Revenue | 5,819 | 4,150 | 6,440 | 8,109 | US$m | Reported; LTM is FY2025 plus 9M 2026 less 9M 2025 |
| EBITDA (Reported) | 2,919 | 2,073 | 2,967 | 3,813 | US$m | Operating profit plus depreciation plus amortization, calculated |
| EBITDA (Adjusted) | 2,749 | 1,964 | 2,958 | 3,743 | US$m | Issuer-stated |
| Cash Interest Paid | 585 | 432 | 679 | 832 | US$m | Debt and lease interest paid in cash |
| Operating cash flow | 1,734 | 1,257 | 2,028 | 2,505 | US$m | Reported, including discontinued operations |
| Cash capex (spectrum, intangibles, PP&E) | 814 | 623 | 965 | 1,156 | US$m | Cash purchases shown in investing activities |
| Levered free cash flow before leases and dividends | 920 | 634 | 1,063 | 1,349 | US$m | Operating cash flow less cash capex; differs from the issuer's free cash flow, which also deducts lease payments |
| Total debt | 6,886 | Not supplied: no 2025-09-30 balance sheet in the filings | 8,648 | 8,648 | US$m | Carrying value at period end |
| Net debt (gross debt less cash) | 5,334 | Not supplied: no 2025-09-30 balance sheet in the filings | 7,800 | 7,800 | US$m | Excludes derivatives and vendor financing |
| Total debt / EBITDA (Reported) | 2.36 | Not calculable: no 2025-09-30 debt in the statements | Not calculable: nine-month EBITDA is not annual | 2.27 | x | Debt over reported EBITDA; the nine-month columns are not annualised |
| Net debt / EBITDA (Reported) | 1.83 | Not calculable: no 2025-09-30 debt in the statements | Not calculable: nine-month EBITDA is not annual | 2.05 | x | Net debt over reported EBITDA |
| EBITDA / cash interest | 4.99 | 4.80 | 4.37 | 4.58 | x | Reported EBITDA over cash interest paid; the nine-month columns divide nine months by nine months |
| Issuer-defined net leverage (not comparable) | 2.17x | 2.09x at 2025-09-30 | 2.53x | 2.53x | x | Issuer net debt over LTM Adjusted EBITDA after lease costs, pro forma for acquisitions; stated by the issuer at each quarter end |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM | USD 5,819m | USD 6,440m | USD 4,150m | USD 8,109m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | FY2025 includes the Paraguay mobile finance business, 9M 2025 does not |
| EBITDA (Reported) | LTM | USD 2,919m | USD 2,967m | USD 2,073m | USD 3,813m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Not pro forma for Coltel before 2026-02-06; mixed continuing-operations basis |
| EBITDA (Adjusted) | LTM | USD 2,749m | USD 2,958m | USD 1,964m | USD 3,743m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Issuer-adjusted; the FY2025 figure of 2,749 includes the Paraguay mobile finance business; the discrete quarters Q4 2025 to Q3 2026 add to 3,734 |
| Cash Interest Paid | LTM | USD 585m | USD 679m | USD 432m | USD 832m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Debt and lease interest paid in cash |
| Cash interest paid on debt only | LTM | USD 409m | USD 463m | USD 313m | USD 559m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Excludes lease interest |
| Net Cash from Operating Activities | LTM | USD 1,734m | USD 2,028m | USD 1,257m | USD 2,505m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Includes discontinued operations |
| Capex (issuer-defined, excluding spectrum and licenses) | LTM | USD 719m | USD 669m | USD 447m | USD 941m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Issuer capex excludes spectrum and lease capitalisations |
| Funds from operations (operating cash flow before working capital changes) | LTM | USD 1,871m | USD 2,009m | USD 1,331m | USD 2,549m | Calculated | 20-F_2025-12-31_tigo-20251231.htm.jsonl; 6-K_2026-11-05_dp256407_6k.htm.jsonl | Derived; the issuer states no funds from operations |

Full-year component is FY2025, current stub is nine months 2026 and prior-year stub is nine months 2025; every cell is in USD millions.
Basis: calculation K04; calculation K05; calculation K08; calculation K09; calculation K22

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 6,886 | Net debt data, FY2025 / 2025-12-31 | 2,919 | T4.4 EBITDA (Reported), FY2025; calculation K01 | FY2025 / 2025-12-31 | USD | US$m | 2.36 | Calculated | Tier 1 | FY2025 audited; debt excludes lease liabilities; EBITDA before lease costs |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 5,334 | Net debt data, FY2025 / 2025-12-31 | 2,919 | T4.4 EBITDA (Reported), FY2025; calculation K01 | FY2025 / 2025-12-31 | USD | US$m | 1.83 | Calculated | Tier 1 | FY2025 audited; debt excludes lease liabilities; EBITDA before lease costs; net debt excludes derivatives of 23 |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 2,919 | T4.4 EBITDA (Reported), FY2025; calculation K01 | 585 | T4.5 Cash Interest Paid, FY2025; calculation K07 | FY2025 / 2025-12-31 | USD | US$m | 4.99 | Calculated | Tier 1 | Interest paid on debt and leases; interest received not netted |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 6,886 | Net debt data, FY2025 / 2025-12-31 | 2,749 | T4.4 EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 2.50 | Calculated | Tier 1 | FY2025 audited; debt excludes lease liabilities; EBITDA before lease costs; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 5,334 | Net debt data, FY2025 / 2025-12-31 | 2,749 | T4.4 EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 1.94 | Calculated | Tier 1 | FY2025 audited; debt excludes lease liabilities; EBITDA before lease costs; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 2,749 | T4.4 EBITDA (Adjusted), FY2025 | 585 | T4.5 Cash Interest Paid, FY2025; calculation K07 | FY2025 / 2025-12-31 | USD | US$m | 4.70 | Calculated | Tier 1 | Issuer-adjusted EBITDA; interest paid on debt and leases |
| Total debt / EBITDA | Total Debt / EBITDA (Reported), LTM | 8,648 | Net debt data, 2026-09-30 | 3,813 | T4.8 EBITDA (Reported), LTM; calculation K04 | 2026-09-30 | USD | US$m | 2.27 | Calculated | Tier 2b | LTM EBITDA is not pro forma for Coltel before 2026-02-06; debt excludes lease liabilities; the issuer-defined leverage is 2.53x |
| Net debt / EBITDA | Net debt / EBITDA (Reported), LTM | 7,800 | Net debt data, 2026-09-30 | 3,813 | T4.8 EBITDA (Reported), LTM; calculation K04 | 2026-09-30 | USD | US$m | 2.05 | Calculated | Tier 2b | LTM EBITDA is not pro forma for Coltel before 2026-02-06; debt excludes lease liabilities; the issuer-defined leverage is 2.53x; net debt excludes derivatives and vendor financing of 183 |
| EBITDA / cash interest | EBITDA (Reported), LTM / Cash Interest Paid, LTM | 3,813 | T4.8 EBITDA (Reported), LTM; calculation K04 | 832 | T4.8 Cash Interest Paid, LTM; calculation K08 | 2026-09-30 | USD | US$m | 4.58 | Calculated | Tier 2b | LTM is FY2025 plus 9M 2026 less 9M 2025; interest paid on debt and leases |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted), LTM | 8,648 | Net debt data, 2026-09-30 | 3,743 | T4.8 EBITDA (Adjusted), LTM; calculation K05 | 2026-09-30 | USD | US$m | 2.31 | Calculated | Tier 2b | LTM EBITDA is not pro forma for Coltel before 2026-02-06; debt excludes lease liabilities; the issuer-defined leverage is 2.53x; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted), LTM | 7,800 | Net debt data, 2026-09-30 | 3,743 | T4.8 EBITDA (Adjusted), LTM; calculation K05 | 2026-09-30 | USD | US$m | 2.08 | Calculated | Tier 2b | LTM EBITDA is not pro forma for Coltel before 2026-02-06; debt excludes lease liabilities; the issuer-defined leverage is 2.53x; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted), LTM / Cash Interest Paid, LTM | 3,743 | T4.8 EBITDA (Adjusted), LTM; calculation K05 | 832 | T4.8 Cash Interest Paid, LTM; calculation K08 | 2026-09-30 | USD | US$m | 4.50 | Calculated | Tier 2b | Issuer-adjusted EBITDA; interest paid on debt and leases |
| Debt plus lease liabilities / EBITDA | (Total Debt + lease liabilities) / EBITDA (Reported) | 9,473 | Total Debt 6,886 plus lease liabilities 2,587; calculation K14 | 2,919 | calculation K01 | FY2025 | USD | US$m | 3.25 | Calculated | Tier 1 | Lease liabilities as printed in the lease note; EBITDA before lease costs |
| Debt plus lease liabilities / EBITDA | (Total Debt + lease liabilities) / EBITDA (Reported), LTM | 11,838 | Total Debt 8,648 plus lease liabilities 3,190; calculation K14 | 3,813 | calculation K04 | 2026-09-30 | USD | US$m | 3.10 | Calculated | Tier 2b | Lease liabilities are the sum of the current and non-current lines; LTM EBITDA is not pro forma |
| EBITDA / cash interest on debt only | EBITDA (Reported) / interest paid on debt and other financing | 2,919 | calculation K01 | 409 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197 | FY2025 | USD | US$m | 7.14 | Calculated | Tier 1 | Excludes lease interest, so it overstates cover against total fixed charges |
| EBITDA / cash interest on debt only | EBITDA (Reported), LTM / interest paid on debt and other financing, LTM | 3,813 | calculation K04 | 559 | calculation K09 | 2026-09-30 | USD | US$m | 6.82 | Calculated | Tier 2b | Excludes lease interest |
| (EBITDA - capex) / cash interest | (EBITDA (Reported) - issuer capex) / Cash Interest Paid | 2,200 | EBITDA 2,919 less capex 719; calculation K01 | 585 | calculation K07 | FY2025 | USD | US$m | 3.76 | Calculated | Tier 1 | Issuer capex excludes spectrum and lease capitalisations |
| (EBITDA - capex) / cash interest | (EBITDA (Reported), LTM - issuer capex, LTM) / Cash Interest Paid, LTM | 2,872 | EBITDA 3,813 less capex 941; calculations K04 and K22 | 832 | calculation K08 | 2026-09-30 | USD | US$m | 3.45 | Calculated | Tier 2b | Issuer capex excludes spectrum and lease capitalisations |
| Operating cash flow / total debt | Net Cash from Operating Activities / Total Debt | 1,734 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197 | 6,886 | Net debt data, FY2025 / 2025-12-31 | FY2025 | USD | US$m | 0.25 | Calculated | Tier 1 | Ratio of a flow to a year-end stock |
| Operating cash flow / total debt | Net Cash from Operating Activities, LTM / Total Debt | 2,505 | calculation K22 | 8,648 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 0.29 | Calculated | Tier 2b | Ratio of a flow to a period-end stock; LTM operating cash flow is not pro forma |
| Funds from operations / total debt | Funds from operations (operating cash flow before working capital changes) / Total Debt | 1,871 | calculation K22 | 6,886 | Net debt data, FY2025 / 2025-12-31 | FY2025 | USD | US$m | 0.27 | Proxy | Tier 1 | Funds from operations is derived; the issuer states none |
| Funds from operations / total debt | Funds from operations, LTM / Total Debt | 2,549 | calculation K22 | 8,648 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 0.29 | Proxy | Tier 2b | Funds from operations is derived; LTM is not pro forma |
| Cash / total debt | Cash & Equivalents / Total Debt | 1,552 | Net debt data, FY2025 / 2025-12-31 | 6,886 | Net debt data, FY2025 / 2025-12-31 | FY2025 | USD | US$m | 0.23 | Calculated | Tier 1 | Cash only; no undrawn facilities included |
| Cash / total debt | Cash & Equivalents / Total Debt | 848 | Net debt data, 2026-09-30 | 8,648 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | 0.10 | Calculated | Tier 2b | Cash only; undrawn facilities at 2026-09-30 not established |
| Liquidity / total debt | (Cash & Equivalents + undrawn revolving facility) / Total Debt | 2,152 | Cash 1,552 plus undrawn 600; calculation K19 | 6,886 | Net debt data, FY2025 / 2025-12-31 | FY2025 | USD | US$m | 0.31 | Calculated | Tier 1 | The undrawn facility is stated at 2025-12-31 only |
| Liquidity / total debt | (Cash & Equivalents + undrawn facilities) / Total Debt | Not calculable: undrawn committed facilities at 2026-09-30 are not stated | Not supplied: no 2026 report | 8,648 | Net debt data, 2026-09-30 | 2026-09-30 | USD | US$m | Not calculable: the numerator is missing | Not Calculable | Tier 2b | See the liquidity chart gap |
| Levered free cash flow | Net Cash from Operating Activities - cash capex (spectrum, intangibles, PP&E) | 1,734 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197 | 814 | calculation K17 | FY2025 | USD | US$m | 920 | Calculated | Tier 1 | Before lease principal, dividends and acquisitions; working capital included |
| Levered free cash flow | Net Cash from Operating Activities - cash capex (spectrum, intangibles, PP&E) | 1,257 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 | 623 | calculation K17 | 9M 2025 | USD | US$m | 634 | Calculated | Tier 2b | Before lease principal, dividends and acquisitions; working capital included |
| Levered free cash flow | Net Cash from Operating Activities - cash capex (spectrum, intangibles, PP&E) | 2,028 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 | 965 | calculation K17 | 9M 2026 | USD | US$m | 1,063 | Calculated | Tier 2b | Before lease principal, dividends and acquisitions; the issuer's own free cash flow of 788 deducts lease payments and finance charges |
| Free cash flow conversion | Levered free cash flow / EBITDA (Reported) | 920 | calculation K17 | 2,919 | calculation K01 | FY2025 | USD | US$m | 31.52 | Calculated | Tier 1 | Percentage; before lease principal and dividends |
| Free cash flow conversion | Levered free cash flow / EBITDA (Reported) | 1,063 | calculation K17 | 2,967 | calculation K03 | 9M 2026 | USD | US$m | 35.83 | Calculated | Tier 2b | Percentage; before lease principal and dividends |
| EBITDA margin (Reported) | EBITDA (Reported) / Revenue | 2,919 | calculation K01 | 5,819 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194 | FY2025 | USD | US$m | 50.16 | Calculated | Tier 1 | Percentage; includes joint venture profit and other operating income |
| EBITDA margin (Reported) | EBITDA (Reported) / Revenue | 2,967 | calculation K03 | 6,440 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 | 9M 2026 | USD | US$m | 46.07 | Calculated | Tier 2b | Percentage; includes joint venture profit and other operating income |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue | 2,749 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 | 5,819 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194 | FY2025 | USD | US$m | 47.24 | Calculated | Tier 1 | Percentage; issuer-adjusted |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue | 1,964 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41 | 4,150 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 | 9M 2025 | USD | US$m | 47.33 | Calculated | Tier 2b | Percentage; issuer-adjusted; the issuer prints 47.3% |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Revenue | 2,958 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41 | 6,440 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 | 9M 2026 | USD | US$m | 45.93 | Calculated | Tier 2b | Percentage; issuer-adjusted; the issuer prints 45.9% |
| Capex / revenue | Issuer capex / Revenue | 719 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228 | 5,819 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194 | FY2025 | USD | US$m | 12.36 | Calculated | Tier 1 | Percentage; capex excludes spectrum and lease capitalisations |
| Capex / revenue | Issuer capex / Revenue | 669 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 17 | 6,440 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 | 9M 2026 | USD | US$m | 10.39 | Calculated | Tier 2b | Percentage; capex excludes spectrum and lease capitalisations |
| Senior secured debt / EBITDA | Senior Secured Debt / EBITDA (Reported) | Not supplied: security is not stated for any instrument | Not supplied | 3,813 | calculation K04 | 2026-09-30 | USD | US$m | Not calculable: no secured amount is stated | Not Calculable | Tier 2b | No source states which instruments are secured |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|---|
| Operating (period-end) | Mobile customers, thousands | 42,158 | 49,311 | 57,335 | 55,779 | 55,845 | Up | Up year on year, flat since Q2 2026; includes Coltel, Ecuador and Uruguay from acquisition; excludes the Honduras joint venture; Q3 2026 is 32.5% above Q3 2025 as reported |
| Operating (period-end) | Postpaid mobile subscribers, thousands | 8,896 | 10,919 | 16,543 | 16,805 | 17,194 | Up | Coltel alone added 5.5 million postpaid subscribers |
| Operating (rate) | Mobile ARPU, US$ per month | 6.2 | 6.8 | 6.7 | 7.1 | 7.4 | Up | Rate; excludes Coltel; never averaged across periods |
| Operating (period-end) | Homes passed, thousands | 13,708 | 13,762 | 21,853 | 22,057 | 22,792 | Up | Step up from the Coltel and acquired fixed networks |
| Operating (period-end) | Customer relationships, thousands | 4,576 | 4,604 | 6,141 | 6,066 | 5,966 | Down | Fell over the last two quarters after the Q1 2026 consolidation |
| Operating (period-end) | HFC and FTTH revenue generating units, thousands | 8,014 | 8,003 | 11,082 | 10,829 | 10,430 | Down | Excluding acquisitions the issuer says units would have fallen by 434 thousand year on year |
| Operating (rate) | Home ARPU, US$ per month | 24.6 | 25.3 | 26.1 | 26.9 | 27.7 | Up | Rate; excludes Coltel |
| Issuer-reported credit measure (non-IFRS) | Gross debt, US$ millions | 6,260 | 6,886 | 8,624 | 8,742 | 8,648 | Up | Issuer table; debt of Coltel, Ecuador and Uruguay is added from acquisition |
| Issuer-reported credit measure (non-IFRS) | Net debt including derivatives and vendor financing, US$ millions | 4,627 | 5,357 | 7,609 | 8,075 | 7,983 | Up | Adds derivatives and vendor financing of 30, 23, 162, 194 and 183 and deducts cash |
| Issuer-reported credit measure (non-IFRS) | Leverage, net debt over LTM Adjusted EBITDA after lease costs, pro forma | 2.09x | 2.17x | 2.76x | 2.73x | 2.53x | Up | Issuer-defined; target below 2.5x at year-end 2026; not comparable with the ratios in this module |
| Issuer-reported credit measure (non-IFRS) | Fixed-rate share of debt, % | Not supplied: not stated | 70% | Not supplied: not stated | Not supplied: not stated | 56% | Down | Variable-rate Coltel debt lowered the share; average interest rate 8.3% and average maturity 3.5 years at 2026-09-30 |
| Issuer-reported one-offs | One-off items above Adjusted EBITDA, US$ millions, quarter | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | -31 | Not applicable | Nine months 2026 total is -149, of which Colombia -116; they are costs inside Adjusted EBITDA |
| Segment | Coltel Adjusted EBITDA since acquisition, nine months 2026, US$ millions | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 409 | Not applicable | Coltel revenue since acquisition was 1,127 and it reported a net loss of 168 including about 71 of severance |

The dashboard takes the quarterly tables of the nine-month 2026 earnings release as printed; quarter-end values are not averaged and a change of perimeter starts a new series.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 33; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 10

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | EBITDA (Reported) is the issuer's unadjusted EBITDA; Adjusted EBITDA is shown beside it | The issuer states only Adjusted EBITDA: operating profit excluding impairment losses, depreciation and amortization, share of profit in the Honduras joint venture and Chile associate, and disposal gains or losses | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 40; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41 | FY2025; 9M 2025; 9M 2026; LTM | FY2025: reported 2,919 against adjusted 2,749, a difference of 170 (joint venture profit 102 plus other operating income 68); LTM: 3,813 against 3,743 | Fundamental credit; Liquidity; Forward credit model | Both measures are shown and labelled; reported EBITDA includes equity-accounted profit that is not group cash EBITDA |
| Net debt | Gross debt (carrying value) less cash and cash equivalents | Debt and financial liabilities including derivatives (assets and liabilities) less cash and pledged and time deposits | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 262 | FY2025; 2026-09-30 | Module 5,334 and 7,800 against issuer 5,357 and 7,983; difference 23 and 183 | Fundamental credit; Covenant capacity | Module net debt follows the Net debt data definition; issuer figure carried in the KPI dashboard |
| Leverage | Net debt over reported EBITDA | Net debt over LTM Adjusted EBITDA after subtracting depreciation of right-of-use assets and lease interest, pro forma for acquisitions in the last twelve months | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 40; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 32 | 2026-09-30 and each quarter end | Module net debt to reported EBITDA 2.05x; issuer 2.53x | Fundamental credit; Ratings & triggers; Covenant capacity | Not reconciled: the issuer prints no pro forma EBITDA or lease cost deduction; use the issuer figure only with its label |
| Debt: carrying value against principal | Total Debt is carrying value; principal is kept separately | FY2025 note D.5 prints outstanding debt and financing of 6,937 principal and 52 of undiscounted amortized costs; the 2026-09-30 report prints one total of 8,648 and maturity bands adding to 8,647 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 272; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 | FY2025; 2026-09-30 | FY2025 principal 6,937 against carrying 6,886, a difference of 51; 2026-09-30 principal not stated | Refinancing & LME; Legal & covenants; Recovery & fulcrum | Carrying value used for ratios; the 2026 principal is unknown and likely above the carrying value |
| Total debt, December 2025 | Audited carrying value | 6,886 in the annual report and the issuer's debt tables; 6,887 in the nine-month 2026 note restated; 6,885 as the sum of the balance-sheet lines | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 | FY2025 | One million; below any ratio's second decimal | Fundamental credit | 6,886 used for FY2025; the restated 6,887 recorded |
| Lease liabilities, December 2025 | Separate lines, not added to Total Debt | 2,587 total in the lease note; 2,586 as the sum of current 293 and non-current 2,293; 2,563 restated in the nine-month 2026 report | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 258; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 12 | FY2025 | Up to 24 between as-filed and restated components | Fundamental credit; Liquidity | As-filed 2,587 used for FY2025; restatement follows the Uruguay purchase accounting |
| Operating cash flow, nine months 2026 | Cash flow statement figure | 2,028 in the statement (includes discontinued operations of 6) and 2,019 in the free cash flow reconciliation | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 42 | 9M 2026 | 9; the 2025 column agrees, so the 2026 gap is unexplained | Fundamental credit; Earnings quality | Statement figure 2,028 used; the difference is a small limitation |
| Free cash flow | Operating cash flow less cash capex, before leases and dividends | Issuer free cash flow deducts lease payments, net finance charges and taxes within operating free cash flow; equity free cash flow adds repatriation from joint ventures | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 31; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 42 | 9M 2026 | Module levered free cash flow 1,063 against issuer free cash flow 788 and equity free cash flow 867 | Fundamental credit; Forward credit model | Both kept; the issuer figures are non-IFRS and after lease payments |
| Cash interest | Interest paid in cash, kept apart from interest expense | Interest and other financial expenses of 868 for nine months 2026 include lease interest of 232 and other items of 164; cash interest paid is 679 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 | 9M 2026 | Expense 868 against cash paid 679 | Fundamental credit | Cash paid used for cover |
| Interest expense, nine months 2025 | As printed on the face of the income statement | 507 on the face of the statement and 508 in the finance expense note | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 | 9M 2025 | One million | Earnings quality | 507 used |
| Revolving credit facility maturity and size | Governing agreement | The note says 565 of 600 extended to 2027-10-15; the business section says the full 600 was extended to 2027-10-15; the exhibit list says 2027-10-12 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 124; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 189 | FY2025 | 35 of amount and three days of maturity | Liquidity; Legal & covenants | Unresolved; the credit agreement was not supplied |
| Perimeter | One perimeter across periods | Coltel consolidated from 2026-02-06, Ecuador from 2025-10-30 and Uruguay from 2025-10-07; the Paraguay mobile finance business is discontinued in the 2025 comparatives of the 2026 reports only | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 2; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 12 | All 2026 periods against 2025 | Revenue up 55.2% and Adjusted EBITDA up 50.6% for nine months as reported, of which organic growth is 4.4% and 8.8% | All modules | Periods are labelled; no pro forma is constructed |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage statements | Ready with Limitations | LTM EBITDA is not pro forma for Coltel; interim EBITDA mixes continuing-operations bases; the issuer's 2.53x is on another definition | Obtain the issuer's pro forma LTM EBITDA and lease cost deduction; keep the ratios labelled |
| Liquidity and maturity wall | Ready with Limitations | Undrawn facilities at 2026-09-30 not stated; the bands add to 8,647 against 8,648; principal at 2026-09-30 not stated | Obtain treasury confirmation of the revolving facility and the Q3 2026 debt schedule |
| Debt stack, ranking and structural priority | Not Ready | No source states legal rank, security or guarantor scope; no instrument list after 2025-12-31 | Supply the indentures, the revolving credit agreement and loan agreements, and the Q3 2026 instrument schedule |
| Covenant headroom | Not Ready | Covenant types are stated but no level, definition or 2026 compliance statement is supplied | Supply the covenant definitions and compliance certificates |
| Cash flow and free cash flow | Ready with Limitations | Operating cash flow differs by 9 between two statements; closing cash roll-forward has a disposal-group effect; capex payables terms not stated | Request the reconciliation of operating cash flow and the terms of capital expenditure payables |
| Business and governance, and fundamental credit synthesis | Ready with Limitations | Statements are supplied; legal, ratings and market inputs are outside this module | Use the registers with their stated limitations |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| SEK Variable Rate Notes due 2027, Millicom International Cellular S.A. | Bond | 244 | Not supplied: not stated | Not applicable | Not applicable | Unsecured (stated: senior unsecured sustainability bond) | Senior (stated: senior unsecured) | SEK | 244 | Not applicable | STIBOR + 3.000% | floating | 3-month STIBOR | 300 | Not applicable | 2027-01 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| USD 7.375% Senior Notes due 2032, Millicom International Cellular S.A. | Bond | 446 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 446 | Not applicable | 7.375% | fixed | Not applicable | Not applicable | Not applicable | 2032-04-02 (a further 87.5 reopened on 2026-04-14, not in this amount) | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| USD 4.500% Senior Notes due 2031, Millicom International Cellular S.A. | Bond | 755 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 755 | Not applicable | 4.500% | fixed | Not applicable | Not applicable | Not applicable | 2031-04-27 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| USD 6.250% Senior Notes due 2029, Millicom International Cellular S.A. | Bond | 614 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 614 | Not applicable | 6.250% | fixed | Not applicable | Not applicable | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| USD 5.125% Senior Notes due 2028, Millicom International Cellular S.A. | Bond | 359 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 359 | Not applicable | 5.125% | fixed | Not applicable | Not applicable | Not applicable | 2028-01-15 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| USD 5.875% Senior Notes due 2027, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 140 | Not supplied: not stated | Not applicable | Not applicable | Unsecured (stated in the 2026 reports: senior unsecured notes) | Senior (stated: senior unsecured) | USD | 140 | Not applicable | 5.875% | fixed | Not applicable | Not applicable | Not applicable | 2027 (redeemed in full on 2026-04-29) | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| PYG 9.250% Notes due 2026, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 8 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 8 | Not applicable | 9.250% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.000% Notes due 2029, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 10 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 10 | Not applicable | 10.000% | fixed | Not applicable | Not applicable | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 9.250% Notes due 2026, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 2 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 2 | Not applicable | 9.250% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.000% Notes due 2029, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 4 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 4 | Not applicable | 10.000% | fixed | Not applicable | Not applicable | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 9.250% Notes due 2027, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 2 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 2 | Not applicable | 9.250% | fixed | Not applicable | Not applicable | Not applicable | 2027 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.000% Notes due 2030, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 3 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 3 | Not applicable | 10.000% | fixed | Not applicable | Not applicable | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 6.000% Notes due 2026, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 15 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 15 | Not applicable | 6.000% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 6.700% Notes due 2028, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 22 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 22 | Not applicable | 6.700% | fixed | Not applicable | Not applicable | Not applicable | 2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 7.500% Notes due 2031, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 24 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 24 | Not applicable | 7.500% | fixed | Not applicable | Not applicable | Not applicable | 2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 7.800% Notes due 2027, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 16 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 16 | Not applicable | 7.800% | fixed | Not applicable | Not applicable | Not applicable | 2027 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 8.170% Notes due 2032, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 56 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 56 | Not applicable | 8.170% | fixed | Not applicable | Not applicable | Not applicable | 2032 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 8.100% Notes due 2029, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 15 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 15 | Not applicable | 8.100% | fixed | Not applicable | Not applicable | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 8.900% Notes due 2031, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 2 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 2 | Not applicable | 8.900% | fixed | Not applicable | Not applicable | Not applicable | 2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.000% Notes due 2028, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 6 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 6 | Not applicable | 10.000% | fixed | Not applicable | Not applicable | Not applicable | 2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.000% Notes due 2028, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 2 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 2 | Not applicable | 10.000% | fixed | Not applicable | Not applicable | Not applicable | 2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.850% Notes due 2030, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 33 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 33 | Not applicable | 10.850% | fixed | Not applicable | Not applicable | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 10.850% Notes due 2030, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 5 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 5 | Not applicable | 10.850% | fixed | Not applicable | Not applicable | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 11.500% Notes due 2036, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 51 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 51 | Not applicable | 11.500% | fixed | Not applicable | Not applicable | Not applicable | 2036 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| PYG 12.000% Notes due 2032, Paraguay (Telefonica Celular del Paraguay S.A.E.) | Bond | 77 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | PYG | 77 | Not applicable | 12.000% | fixed | Not applicable | Not applicable | Not applicable | 2032 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| BOB 5.800% Notes due 2026, Bolivia (Tigo Bolivia) | Bond | 11 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | BOB | 11 | Not applicable | 5.800% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| BOB 4.300% Notes due 2029, Bolivia (Tigo Bolivia) | Bond | 6 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | BOB | 6 | Not applicable | 4.300% | fixed | Not applicable | Not applicable | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| BOB 5.300% Notes due 2026, Bolivia (Tigo Bolivia) | Bond | 1 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | BOB | 1 | Not applicable | 5.300% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245 |
| BOB 5.000% Notes due 2026, Bolivia (Tigo Bolivia) | Bond | 17 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | BOB | 17 | Not applicable | 5.000% | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| BOB 6.000% Notes due 2028, Bolivia (Tigo Bolivia) | Bond | 27 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | BOB | 27 | Not applicable | 6.000% | fixed | Not applicable | Not applicable | Not applicable | 2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 3 (tranche B) due 2026, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 67 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 67 | Not applicable | CPI + 4.150% | floating | Colombian CPI | 415 | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 3 (tranche C) due 2036, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 34 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 34 | Not applicable | CPI + 4.890% | floating | Colombian CPI | 489 | Not applicable | 2036 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 6.600% due 2030, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 40 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 40 | Not applicable | 6.600% | fixed | Not applicable | Not applicable | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 4 (tranche A) due 2028, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 31 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 31 | Not applicable | 5.560% | fixed | Not applicable | Not applicable | Not applicable | 2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 4 (tranche B) due 2031, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 75 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 75 | Not applicable | CPI + 2.610% | floating | Colombian CPI | 261 | Not applicable | 2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 4 (tranche C) due 2036, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 23 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 23 | Not applicable | CPI + 3.180% | floating | Colombian CPI | 318 | Not applicable | 2036 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 7 (tranche B) due 2026, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 3 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 3 | Not applicable | CPI + 8.100% | floating | Colombian CPI | 810 | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 7 (tranche C) due 2027, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 4 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 4 | Not applicable | CPI + 8.250% | floating | Colombian CPI | 825 | Not applicable | 2027 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| UNE Bond 8 (tranche A) due 2027, Colombia (UNE EPM Telecomunicaciones S.A.) | Bond | 15 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: no rank stated | COP | 15 | Not applicable | 17.000% | fixed | Not applicable | Not applicable | Not applicable | 2027 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| USD 4.500% Senior Notes due 2030, Panama (Telecomunicaciones Digitales S.A.) | Bond | 550 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 550 | Not applicable | 4.500% | fixed | Not applicable | Not applicable | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| USD 5.125% Senior Notes due 2032, Guatemala (Comcel, notes issued through CT Trust) | Bond | 738 | Not supplied: not stated | Not applicable | Not applicable | Not supplied: not stated | Not supplied: the title says senior notes; no legal rank among creditors is stated | USD | 738 | Not applicable | 5.125% | fixed | Not applicable | Not applicable | Not applicable | 2032 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 246 |
| PYG long-term loans, Paraguay | Bank or development-bank loan | 212 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | PYG | 212 | Not applicable | Not supplied: not stated | fixed | Not applicable | Not applicable | Not applicable | 2026-2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| USD long-term loans, Panama (fixed) | Bank or development-bank loan | 75 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | USD | 75 | Not applicable | Not supplied: not stated | fixed | Not applicable | Not applicable | Not applicable | 2026 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| BOB long-term loans, Bolivia | Bank or development-bank loan | 65 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | BOB | 65 | Not applicable | Not supplied: not stated | fixed | Not applicable | Not applicable | Not applicable | 2026-2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| GTQ long-term loans, Guatemala (fixed) | Bank or development-bank loan | 396 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | GTQ | 396 | Not applicable | Not supplied: not stated | fixed | Not applicable | Not applicable | Not applicable | 2027-2028 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| CRC long-term loans, Costa Rica | Bank or development-bank loan | 148 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | CRC | 148 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2029 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| COP long-term loans, Colombia | Bank or development-bank loan | 329 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | COP | 329 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2028-2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| USD long-term loans, Panama (variable) | Bank or development-bank loan | 109 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | USD | 109 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| GTQ long-term loans, Guatemala (variable) | Bank or development-bank loan | 469 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | GTQ | 469 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2030-2033 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| USD credit facility and senior unsecured term loan facility, El Salvador | Bank or development-bank loan | 248 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Unsecured (stated in the facility title: senior unsecured term loan); a Millicom parent guaranty is stated for the 150 IDB Invest and Bladex loans only | Senior (stated in the facility title) | USD | 248 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| USD long-term loans, Ecuador | Bank or development-bank loan | 83 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | USD | 83 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2029-2031 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| UYU long-term loans, Uruguay | Bank or development-bank loan | 201 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: no rank stated | UYU | 201 | Not applicable | Not supplied: not stated | floating | Not supplied: not stated | Not supplied: not stated | Not applicable | 2027-2030 | Not supplied: not stated | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| USD revolving credit facility, ESG-linked, Millicom International Cellular S.A., eleven banks | Revolving credit facility | Not supplied: undrawn; the table prints (1) of capitalised cost, carried in the financing cost adjustment | Not applicable | 0 | 600 | Not supplied: not stated | Not supplied: not stated | USD | 0 | Not applicable | Not supplied: not stated | floating | SOFR | Not supplied: not stated | Not applicable | 2027-10-15 (the exhibit list states 2027-10-12) | Not applicable | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255 |
| Financing cost adjustment | Adjustment | -2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |

The register is at 2025-12-31, the latest date for which the filings print an instrument list; the 2026 reports give totals, movements and maturity bands only, and the Reporting Currency Amounts plus the adjustment add to 6,886.
Basis: 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 245–246; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252; calculation K16

### Debt movements since 2025-12-31

| Borrower | Movement | Date | Amount as printed | Source |
|---|---|---|---|---|
| Millicom International Cellular S.A. | New 8-year private bond linked to the Colombian peso and US dollar at a fixed rate, subscribed by the Inter-American Development Bank and Proparco | 2026-03-27 | COP 370,000 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Millicom International Cellular S.A. | Reopening of the 7.375% Senior Notes due 2032 in a Regulation S private placement to Banco General | 2026-04-14 | USD 87.5 million aggregate principal | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Tigo Paraguay | Redemption in full of the 5.875% Senior Unsecured Notes due 2027 at par plus accrued interest | 2026-04-29 | USD 139.7 million approximate principal | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| Tigo Paraguay | Local bond redemption and repayment of local bank facilities | 2026-09 | PYG 98 billion (about USD 17 million) and about PYG 88 billion (about USD 15 million) | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| Tigo Colombia | Four-year variable term loan with Davivienda; partial repurchase and redemption of the UNE Bond 3 tranche B due May 2026 | 2026-03-11 and 2026 | COP 220,000 million loan; COP 35,250 million repurchased and about COP 215,000 million (about USD 58 million) redeemed | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Coltel | Other debt and financing acquired with the business | 2026-02-06 | USD 1,424 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 9 |
| Coltel | Two one-year variable loans with JP Morgan | 2026-03 and 2026-05 | COP 70,000 million each (about USD 38 million in total) | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Coltel | One-year variable bridge facility with Banco Santander, used to repay the HSBC facility due 2026-04-17 | 2026-04-13 | USD 100 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Coltel | Three-year loans with BTG Pactual and Bancolombia and a one-year loan with Banco AV Villas | 2026-06 | COP 170,000 million, COP 820,000 million and COP 29,000 million (about USD 49 million, USD 237 million and USD 8 million) | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Coltel | Repayment of credit facilities with Banco de Occidente, Bladex and J.P. Morgan | 2026-07 | About USD 102 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Coltel | Two three-year variable loans with Banco Davivienda and DaviBank, used mainly to repay a Bank of Nova Scotia loan of COP 272,000 million (about USD 87 million) | 2026-08 | COP 245,000 million (about USD 77 million) and COP 54,500 million (about USD 17 million) | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Tigo Guatemala | Two variable bank loans, five-year and six-year | 2026-02-18 and 2026-03-17 | GTQ 400 million each | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 24 |
| Tigo Panama | Repayment of the Bank of Nova Scotia loan and a new six-year loan with BAC International for an equivalent amount | 2026-08 | USD 75 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| Tigo Bolivia | Two seven-year bonds at 9.8%, repayment of a 5% bond at maturity, eight local bank loans and repayment of local facilities | 2026-06 to 2026-09 | Bonds of about BOB 87 million each; 5% bond BOB 181 million; loans of BOB 440 million and BOB 193 million; repayments of about BOB 152 million | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 23 |

Local-currency amounts are as the filing prints them, with its approximate US dollar equivalents; the sources state no exchange rate, so none is applied.
Basis: 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 23–25; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 9

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 62 |
| Calculated | 34 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 8 |
| Fields present | 20 |
| Fields total | 22 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

## Calculations

Each calculation below shows its inputs in USD millions; the registers above print the results exactly as worked here.

| Calculation ID | Calculation | Inputs (USD millions) | Result | Source |
|---|---|---|---|---|
| K01 | EBITDA (Reported) FY2025 = operating profit + depreciation + amortization | 1,639 + 961 + 319 | 2,919 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194 |
| K02 | EBITDA (Reported) 9M 2025 | 1,163 + 677 + 233 | 2,073 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| K03 | EBITDA (Reported) 9M 2026 | 1,478 + 1,155 + 334 | 2,967 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| K04 | LTM EBITDA (Reported) = FY2025 + 9M 2026 - 9M 2025 | 2,919 + 2,967 - 2,073 | 3,813 | calculations K01 to K03 |
| K05 | LTM EBITDA (Adjusted) | 2,749 + 2,958 - 1,964 | 3,743 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 228; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41 |
| K06 | LTM revenue | 5,819 + 6,440 - 4,150 | 8,109 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 194; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 1 |
| K07 | Cash interest paid = debt interest + lease interest: FY2025; 9M 2025; 9M 2026 | 409 + 176; 313 + 119; 463 + 216 | 585; 432; 679 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, pages 3–4 |
| K08 | LTM cash interest paid | 585 + 679 - 432 | 832 | calculation K07 |
| K09 | LTM interest paid on debt only | 409 + 463 - 313 | 559 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 |
| K10 | Net debt at 2025-12-31 = gross debt - cash | 6,886 - 1,552 | 5,334 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 245; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 261 |
| K11 | Net debt at 2026-09-30 = gross debt - cash | 8,648 - 848 | 7,800 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| K12 | Leverage ratios: total debt / EBITDA, net debt / EBITDA, total debt / adjusted EBITDA, net debt / adjusted EBITDA at FY2025; then at 2026-09-30 | 6,886/2,919; 5,334/2,919; 6,886/2,749; 5,334/2,749; 8,648/3,813; 7,800/3,813; 8,648/3,743; 7,800/3,743 | 2.36x; 1.83x; 2.50x; 1.94x; 2.27x; 2.05x; 2.31x; 2.08x | calculations K01, K04, K05, K10, K11 |
| K13 | Interest cover = EBITDA / cash interest paid: reported then adjusted, FY2025 then LTM; reported 9M 2025 and 9M 2026 | 2,919/585; 2,749/585; 3,813/832; 3,743/832; 2,073/432; 2,967/679 | 4.99x; 4.70x; 4.58x; 4.50x; 4.80x; 4.37x | calculations K01 to K08 |
| K14 | Lease liabilities at 2026-09-30 = current + non-current; debt plus leases | 344 + 2,846; 8,648 + 3,190; 6,886 + 2,587 | 3,190; 11,838; 9,473 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 258 |
| K15 | Maturity bands at 2026-09-30 and reconciling item to carrying value | 872 + 986 + 1,947 + 1,601 + 1,147 + 2,094; 8,648 - 8,647 | 8,647; 1 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 25 |
| K16 | Instrument register at 2025-12-31: bond rows + bank rows + undrawn facility + adjustment | 4,553 + 2,335 + 0 + (-2) | 6,886 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, pages 245–246; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 252 |
| K17 | Cash capex = purchase of spectrum + other intangibles + PP&E; levered free cash flow = operating cash flow - cash capex: FY2025; 9M 2025; 9M 2026 | 73 + 91 + 650; 62 + 97 + 464; 207 + 100 + 658; 1,734 - 814; 1,257 - 623; 2,028 - 965 | 814; 623; 965; 920; 634; 1,063 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 |
| K18 | Payables and accruals for capital expenditure = non-current + current: 2026-09-30; 2025-12-31; increase | 1,644 + 457; 758 + 440; 2,101 - 1,198 | 2,101; 1,198; 903 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3 |
| K19 | Liquidity at 2025-12-31 = cash + undrawn revolving facility; over total debt | 1,552 + 600; 2,152/6,886 | 2,152; 0.31 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 255; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 272 |
| K20 | Derivative liabilities: 9 + 14 at 2025-12-31; 157 + 46 at 2026-09-30; difference between operating cash flow figures 2,028 - 2,019 | 9 + 14; 157 + 46; 2,028 - 2,019 | 23; 203; 9 | 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 196; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 42 |
| K21 | Pro forma net debt after settling the dividend payable = 7,800 + 579; over LTM reported EBITDA | 7,800 + 579; 8,379/3,813 | 8,379; 2.20x | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 3; calculation K04 |
| K22 | Bridge: 2,967 + 2 - 11 = 2,958; LTM operating cash flow 2,505 = 1,734 + 2,028 - 1,257; LTM issuer capex 941 = 719 + 669 - 447; funds from operations = operating cash flow - working capital change: 1,871; 2,009; 1,331; LTM 2,549 | 2,967 + 2 - 11; 1,734 + 2,028 - 1,257; 719 + 669 - 447; 1,734 - (-137); 2,028 - 19; 1,257 - (-74); 1,871 + 2,009 - 1,331 | 2,958; 2,505; 941; 1,871; 2,009; 1,331; 2,549 | 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 41; 20-F_2025-12-31_tigo-20251231.htm.jsonl, page 197; 6-K_2026-11-05_dp256407_6k.htm.jsonl, page 4 |

## Gaps

- No instrument list is printed at 30 September 2026: the nine-month 2026 report gives debt totals, movements and maturity bands only, so the instrument register stops at 31 December 2025, the movements table records only the 2026 borrowings and repayments that the report describes, and the debt stack cannot be drawn; this is High severity because it blocks structural priority and refinancing work, and the action is to obtain the third-quarter 2026 debt schedule.
- No source states a legal rank, security or guarantor ladder for any facility beyond the titles senior notes and the senior unsecured wording for the Swedish krona bond, the redeemed Paraguay notes and one term loan, and the indentures and credit agreements are listed as exhibits but not supplied; the debt stack is therefore a single not-supplied row, this is High severity for ranking and covenant work, and the action is to supply the executed documents.
- Undrawn committed facilities at 30 September 2026 are not established: no 2026 report mentions the USD 600 million revolving facility, and searches for revolving, undrawn, committed, standby and letters of credit found only the 2025 statement and a separate USD 65 million facility of the Chile associate; liquidity at that date is cash only, this is High severity, and the action is a treasury or lender confirmation.
- Contractual principal at 30 September 2026 is not stated: the maturity bands add to USD 8,647 million against a printed total of USD 8,648 million and the filing prints no issuance costs, so the reconciling item is rounding only; at year-end 2025 principal exceeded carrying value by USD 51 million, so principal is probably above the carrying figures shown; this is Medium severity and the action is to obtain the principal schedule.
- Last-twelve-month EBITDA is not pro forma for Coltel before 6 February 2026 and the issuer prints no pro forma EBITDA, so the ratios at 30 September 2026 overstate leverage on that one point, while the exclusion of lease costs understates it; the fiscal-year figure also includes the Paraguay mobile finance business that the nine-month 2025 column excludes; this is Medium severity and the action is to obtain the issuer's pro forma bridge.
- Closing Cash is not supplied for FY2025, 9M 2025 or 9M 2026 because the cash flow statement prints a separate effect of disposed or held-for-sale cash of 8, 8 and 6 that the fixed rows cannot hold, so opening cash plus the net change does not reach the printed balance; the balance-sheet cash is stated, this is Low severity, and no action is needed beyond reading the printed statement.
- Total Liabilities is not supplied for FY2025 or 9M 2026 because the printed total liabilities plus total equity exceed printed total assets by one million in both columns; this is the filing's own rounding, it is Low severity, and the action is to read the printed total liabilities of 13,633 and 18,432 with that limitation.
- Lines the filing prints as a dash are carried as not supplied rather than zero: Sale of Lati Operations for 9M 2026, profit from discontinued operations for FY2025 and acquisitions of subsidiaries for 9M 2025; this is Low severity and the action is to read the dash as nil only after confirming with the issuer.
- No statement of financial position at 30 September 2025 is in the supplied filings, so debt, net debt and the ratios at that date are not calculated; the issuer's own series shows 6,260 of gross debt and 2.09x leverage at that date; this is Medium severity and the action is to supply the third-quarter 2025 report.
- Gross profit, cost of sales and selling and administrative expense are not printed because the income statement is by nature; this is Low severity and no action is needed.
- The leverage ratios in the financial metrics table are not calculated for the nine-month columns because nine-month EBITDA is not an annual figure, and the date and cash total of the October 2026 dividend instalment are not stated, so that row of the post-balance-sheet table gives only the figures the balance sheet supports; this is Low severity and the action is to obtain the instalment amounts.
- Several cells of the KPI dashboard are not stated: the fixed-rate share of debt at four quarter ends, the one-off items above Adjusted EBITDA for four quarters and Coltel's quarterly Adjusted EBITDA are not in the nine-month 2026 report; this is Low severity and the action is to read the earlier quarterly releases if a series is needed.
- Principal, drawn amount, commitment, security, ranking, annual amortisation and for most loans the rate, reference rate and spread are not stated per instrument in the 2025 annual report; each is marked not supplied in the instrument register; this is Medium severity and the action is to supply the debt agreements.
- Covenant levels and any 2026 compliance statement are not supplied: the annual report states that no covenant breach occurred at 31 December 2025 and none is expected in the next twelve months, but the 2026 reports are silent; this is High severity for covenant work and the action is to supply the covenant definitions and certificates.
- The terms of the USD 2,101 million of payables and accruals for capital expenditure, including interest, due dates and whether any is supplier finance, are not stated; this is Medium severity because it is a large claim outside debt, and the action is to obtain the schedule.
- Coltel purchase accounting remains provisional and the Ecuador measurement period ended on 30 October 2026 with the accounting not yet finalised at the report date, so goodwill, lease liabilities and property values may be restated; this is Low severity and the action is to read the fourth-quarter 2026 report.
- The quarterly interim reports for the first and second quarters of 2026 were used only to cross-check the gross debt, net debt and leverage series, which they confirm; the revolving facility maturity differs between the annual report note and its exhibit list as recorded in the conflict register; this is Low severity.

## Next module

The orchestrator selects the next module.
