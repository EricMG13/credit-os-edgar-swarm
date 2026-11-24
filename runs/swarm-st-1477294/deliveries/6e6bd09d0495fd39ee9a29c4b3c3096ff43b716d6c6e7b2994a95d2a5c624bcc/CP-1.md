# Financial foundation: Sensata Technologies Holding plc

## Request

Financial foundation for Sensata Technologies Holding plc as of 2026-11-18. Pathway: credit snapshot. Scope: statements, debt, liquidity, leverage and coverage on the plc's consolidated figures to the third quarter of 2026.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_st.pdf | Annual report on Form 10-K for the year ended 2024-12-31 | 2025-02-28 | cf7dd4099a068ba51be0a9ebcd8be5843218c6b2802ac578f056ba203f20360b | FY2023 and FY2024 statements in thousands, FY2024 cash flow and balance sheet, segment history, FY2024 Adjusted EBITDA as first reported |
| 10-K_2025-12-31_st.pdf | Annual report on Form 10-K for the year ended 2025-12-31 | 2026-02-27 | f5a313cd57e71a55ab76489d83e63967f6ffc066dcf20cdd46587f58279fc2c0 | FY2025 statements, EBITDA and Adjusted EBITDA reconciliation, debt note, maturities, leases, cash paid for interest and taxes |
| 10-Q_2026-03-31_st.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31, as prepared text | 2026-04-28 | 70b6efec940a99630687a238297312571827f7ea7b73b85de7482fcdcfe9fdd2 | Balance sheet at 2026-03-31, debt note, revolver availability, April 2026 revolver amendment, note fair values |
| 10-Q_2026-06-30_st.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30, as prepared text | 2026-07-29 | 4e8014ae29af62e87e6287d7dc5f1461413d5d1419fe2f11c054c3c069427ec2 | Balance sheet at 2026-06-30, debt note, June 2026 tender offer, revolver availability |
| 10-Q_2026-09-30_st.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30, as prepared text | 2026-10-27 | ef1fc99d4666f158166de5b36c1f842b8b3656732c661f87e5d9eaab71ebba43 | Third-quarter and nine-month 2026 statements with 2025 comparatives, balance sheet at 2026-09-30, debt note, segments, dividend and shares outstanding |
| PRESENTATION_Q12026_st.pdf | Earnings presentation for the first quarter of 2026 | 2026-04-28 | 6c421cd431d8022d0b45a2e310fdb519d8e70c3c543fe8b6c3d3028abe8aefe0 | Last-twelve-month EBITDA and Adjusted EBITDA at 2026-03-31, five-date debt and leverage table |
| PRESENTATION_Q22026_st.pdf | Earnings presentation for the second quarter of 2026 | 2026-07-29 | 4035a395622ad0e58d3ed073c4984f4c9e22fe1cff90a6254308aa8098e85399 | Last-twelve-month EBITDA and Adjusted EBITDA at 2026-06-30, five-date debt and leverage table |
| PRESENTATION_Q32026_st.pdf | Earnings presentation for the third quarter of 2026 | 2026-10-27 | dfbfac32b74a15d8111f94ba73fd630ef76650b68fbae0c18b6e915a4e60153a | Last-twelve-month EBITDA and Adjusted EBITDA at 2026-09-30, quarterly EBITDA bridge, five-date debt and leverage table |
| RESULTS_Q12026_st.pdf | Earnings release for the first quarter of 2026 | 2026-04-28 | 21b22d2a4f9bcf2dbe604f81204d9ea99e14961ed4662bc39c62372088eb1877 | Cross-check of first-quarter statements and Adjusted EBITDA |
| RESULTS_Q22026_st.pdf | Earnings release for the second quarter of 2026 | 2026-07-29 | a15485b2956aec3b9456ce8adf95d4571115ddfb12e7094cb933c9def700a238 | Cross-check of second-quarter statements and Adjusted EBITDA |
| RESULTS_Q32026_st.pdf | Earnings release for the third quarter of 2026 | 2026-10-27 | a470437b9fc805ab604b2292dab1385af5e6c4589cf4eea78a8256ea74b15e06 | Third-quarter and nine-month EBITDA reconciliation, gross and net debt and leverage table |

| Module | Document | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | Source readiness handoff for this run | cc7022dff5ee387be0935e986a31a7f1000c18765b97d7e2de1ff9a257f52553 | Source dates, units, perimeter and known gaps carried into the statements and gap lines |

## Findings

### Bottom line

Sensata's balance sheet is stronger, with net debt at 2.29x LTM reported EBITDA (2.08x adjusted) against 4.47x at year-end 2025, but most of that improvement comes from the 2025 impairment leaving the earnings window rather than from debt repaid.
Basis: calculation K11; calculation K12; PRESENTATION_Q32026_st.pdf, page 31; PRESENTATION_Q32026_st.pdf, page 34

On adjusted EBITDA the move is smaller, from 2.72x to 2.08x net, and the issuer's own principal-based ratio reads 2.1x. Cash of USD 553.4 million and an undrawn revolver of USD 645.8 million sit against a first note maturity of USD 207.3 million in 2029. Cash interest paid is not printed for 2026 interim periods, so interim interest cover is not established; the FY2025 figure is 3.25x.
Basis: calculation K12; 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-Q_2026-09-30_st.htm.jsonl, page 13; 10-K_2025-12-31_st.pdf, page 58

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_st.pdf | Annual report (Form 10-K), audited | FY2024 with FY2023 and FY2022 comparatives | USD | thousands | Sensata Technologies Holding plc, consolidated | US GAAP | Tier 1: audited statements | FY2023 and FY2024 statements converted exactly to millions; FY2024 Adjusted EBITDA as first reported | Adverse opinion on internal control because of material weaknesses; two reportable segments; PDF pages 1, 4, 6 and 140 to 142 carry no text |
| 10-K_2025-12-31_st.pdf | Annual report (Form 10-K), audited | FY2025 with FY2024 and FY2023 comparatives (balance sheet FY2025 and FY2024) | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP | Tier 1: audited statements | FY2025 statements, EBITDA and Adjusted EBITDA, debt, maturities, leases, cash interest and taxes | Statements to one decimal, so some subtotals differ by 0.1; Adjusted EBITDA for FY2024 and FY2023 restated against the FY2024 report |
| 10-Q_2026-03-31_st.htm.jsonl | Quarterly report (Form 10-Q), as prepared text | Three months to 2026-03-31 with 2025 comparatives | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP | Tier 2b: unaudited, auditor review not stated | Balance sheet at 2026-03-31 and debt note | Page numbers are text chunks; no cash paid for interest line |
| 10-Q_2026-06-30_st.htm.jsonl | Quarterly report (Form 10-Q), as prepared text | Three and six months to 2026-06-30 with 2025 comparatives | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP | Tier 2b: unaudited, auditor review not stated | Balance sheet at 2026-06-30 and debt note | Page numbers are text chunks; no cash paid for interest line |
| 10-Q_2026-09-30_st.htm.jsonl | Quarterly report (Form 10-Q), as prepared text | Three and nine months to 2026-09-30 with 2025 comparatives | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP | Tier 2b: unaudited, auditor review not stated | Third-quarter and nine-month statements, balance sheet at 2026-09-30, debt note, segments | Page numbers are text chunks; no cash paid for interest line; printed totals do not add by 0.1 at 2026-09-30 |
| RESULTS_Q32026_st.pdf | Earnings release | Third quarter and nine months of 2026 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | EBITDA and Adjusted EBITDA reconciliation and issuer net debt and leverage | Issuer-defined measures; leverage is on principal, not carrying value |
| RESULTS_Q22026_st.pdf | Earnings release | Second quarter and half year of 2026 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | Cross-check of Adjusted EBITDA | Issuer-defined measures |
| RESULTS_Q12026_st.pdf | Earnings release | First quarter of 2026 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | Cross-check of Adjusted EBITDA | Issuer-defined measures |
| PRESENTATION_Q32026_st.pdf | Earnings presentation | Third quarter of 2026; five quarter-ends to 2026-09-30 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | LTM EBITDA and Adjusted EBITDA at 2026-09-30; quarterly EBITDA | Management slides; chart values only as extracted text |
| PRESENTATION_Q22026_st.pdf | Earnings presentation | Second quarter of 2026; five quarter-ends to 2026-06-30 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | LTM EBITDA and Adjusted EBITDA at 2026-06-30 | Management slides |
| PRESENTATION_Q12026_st.pdf | Earnings presentation | First quarter of 2026; five quarter-ends to 2026-03-31 | USD | millions | Sensata Technologies Holding plc, consolidated | US GAAP with issuer-defined non-GAAP measures | Tier 2b: unaudited issuer material | LTM EBITDA and Adjusted EBITDA at 2026-03-31 | Management slides |

The sources are sufficient for the income statement, cash flow statement and balance sheet on the consolidated perimeter, and for the debt note; they do not print cash interest paid for any 2026 interim period.
Basis: 10-K_2025-12-31_st.pdf, pages 55–58; 10-Q_2026-09-30_st.htm.jsonl, pages 2–4

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sensata Technologies Holding plc | Issuer and registrant; reporting entity | December 31 | USD | millions (FY2024 report: thousands) | Consolidated with its subsidiaries | US GAAP | FY2023 to FY2025; Q3 and nine months of 2026 and 2025; balance sheets at 2024-12-31, 2025-12-31, 2026-03-31, 2026-06-30 and 2026-09-30 |
| Sensata Technologies B.V. | Issuer of the 4.0% and 5.875% senior notes; borrower and rated entity under the credit agreement | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Restricted group with its subsidiaries; no subsidiary designated unrestricted | Not supplied: no separate statements | Not supplied: no separate statements |
| Sensata Technologies, Inc. | Issuer of the 4.375%, 3.75% and 6.625% senior notes | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Wholly owned indirect subsidiary | Not supplied: no separate statements | Not supplied: no separate statements |
| Guarantor subsidiaries | Guarantors of the notes and the revolver under their documents | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: no separate statements | Not supplied: the guarantor list is in documents not supplied | Not supplied: no separate statements | Not supplied: no separate statements |

After the balance sheet date of 2026-09-30 the third-quarter report states a quarterly dividend of USD 0.12 per share approved in October 2026 and payable in November 2026 to holders of record on 2026-11-11, an executive separation announced 2026-10-22 and an amendment to a security agreement dated 2026-10-26. None is blended into a period figure; the dividend is the only one that changes net debt and it is carried in the post-balance-sheet table.
Basis: 10-Q_2026-09-30_st.htm.jsonl, page 14; 10-Q_2026-09-30_st.htm.jsonl, page 43; 10-Q_2026-09-30_st.htm.jsonl, page 44

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| FY2023 and FY2024 lines converted from thousands to millions | 10-K_2024-12-31_st.pdf | Unit conversion, exact | Net revenue FY2024 3,932,764 thousand | 3,932.764 USD millions | The FY2025 report prints FY2024 to one decimal and its cash flow and balance sheet do not foot at one decimal; the thousands figures foot exactly | FY2023, FY2024 |
| Adjusted EBITDA for FY2023 and FY2024 taken from the FY2025 report | 10-K_2025-12-31_st.pdf | Definition basis | FY2024 881.6 and FY2023 906.6 as first reported | FY2024 882.8 and FY2023 912.3 as restated | One current definition across all periods; both figures are kept in the definition conflict table | FY2023, FY2024 |
| Total Debt set to the sum of the three balance sheet debt lines | 10-Q_2026-09-30_st.htm.jsonl; 10-K_2025-12-31_st.pdf | Aggregation | Issuer total debt and finance lease obligations 2,849.7 at 2025-12-31 | 2,849.8 USD millions | Carrying value is the sum of the printed lines; the issuer total differs by 0.1 at 2025-12-31 and 2026-03-31 | FY2025, 2026-03-31 |
| Net debt on carrying value, not the issuer's principal basis | PRESENTATION_Q32026_st.pdf | Definition basis | Issuer net debt 1,873.7 at 2026-09-30 | 1,859.6 USD millions | The method's debt is carrying value; the issuer deducts cash from gross principal | All net debt rows |
| Prepaid expenses and other merged with the FY2024 report's Other working capital line | 10-K_2024-12-31_st.pdf | Line mapping | Prepaid -12,978 and Other -5,806 thousand for FY2024 | -18.784 USD millions | The FY2025 report presents one line; FY2023 is merged the same way (13,943 and -14,119 thousand give -0.176) | FY2023, FY2024 |
| Other investing merged with investment in debt and equity securities | 10-K_2024-12-31_st.pdf | Line mapping | FY2023 -390 and 994 thousand | 0.604 USD millions | The FY2025 report presents one Other line | FY2023, FY2024 |
| Gross profit, change in operating assets and liabilities and free cash flow calculated | 10-K_2025-12-31_st.pdf; 10-Q_2026-09-30_st.htm.jsonl | Calculated lines | Not printed as one line | Formulas in the basis cells and calculations | The method asks for these lines; each is labelled calculated and built from printed components | All statement columns |
| Period labels | 10-K_2025-12-31_st.pdf; 10-Q_2026-09-30_st.htm.jsonl | Label | Quarter ended 2026-09-30; nine months ended 2026-09-30 | Q3 2026; 9M 2026 | Balance sheet columns carry the label of the period that ends on the balance sheet date | All columns |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net revenue | 4,054.083 | 3,932.764 | 3,704.5 | 932.0 | 1,003.6 | 2,786.6 | 2,929.1 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Cost of revenue | 2,792.825 | 2,776.931 | 2,620.2 | 672.6 | 671.7 | 1,968.4 | 2,009.0 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Gross profit (calculated) | 1,261.258 | 1,155.833 | 1,084.3 | 259.4 | 331.9 | 818.2 | 920.1 | USD millions | Calculated: Net revenue less Cost of revenue | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Research and development | 178.867 | 169.276 | 133.8 | 33.0 | 33.4 | 102.4 | 97.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Selling, general and administrative | 350.655 | 392.196 | 356.2 | 85.8 | 95.9 | 259.6 | 279.8 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Amortization of intangible assets | 173.860 | 145.744 | 80.2 | 19.6 | 15.7 | 61.4 | 47.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Goodwill impairment charge | 321.700 | 150.100 | 225.7 | 225.7 | Not supplied: the filing prints a dash for this period | 225.7 | Not supplied: the filing prints a dash for this period | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands; a dash in the filing is not read as zero | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Restructuring and other charges, net | 54.500 | 149.241 | 50.8 | 18.2 | 11.7 | 31.8 | 13.6 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Total operating costs and expenses | 3,872.407 | 3,783.488 | 3,467.0 | 1,054.9 | 828.4 | 2,649.2 | 2,446.8 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Operating income/(loss) | 181.676 | 149.276 | 237.5 | -122.9 | 175.3 | 137.4 | 482.3 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Interest expense | -182.184 | -155.793 | -149.1 | -37.7 | -30.0 | -113.4 | -96.8 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Interest income | 31.324 | 16.180 | 19.1 | 5.3 | 2.5 | 14.1 | 9.9 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Other, net | -12.974 | -21.500 | 15.8 | 6.9 | 6.2 | 9.9 | 6.6 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Income/(loss) before taxes | 17.842 | -11.837 | 123.3 | -148.4 | 154.0 | 48.0 | 402.0 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Provision for/(benefit from) income taxes | 21.751 | -140.314 | 92.0 | 14.1 | 39.8 | 79.9 | 98.6 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Net income/(loss) | -3.909 | 128.477 | 31.3 | -162.5 | 114.2 | -31.9 | 303.4 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 70; 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| Depreciation expense | 133.105 | 167.135 | 176.2 | 53.4 | 34.5 | 127.7 | 102.1 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; PRESENTATION_Q32026_st.pdf, page 31; RESULTS_Q32026_st.pdf, page 14 |
| Segment revenue: Automotive | 2,167.4 | 2,195.5 | 2,111.7 | 535.8 | 555.8 | 1,595.5 | 1,629.9 | USD millions | Reported by segment, recast to three segments; FY2023 and FY2024 from the FY2025 report at one decimal | 10-K_2025-12-31_st.pdf, page 100; 10-Q_2026-09-30_st.htm.jsonl, page 19 |
| Segment revenue: Industrials | 863.2 | 749.2 | 787.8 | 186.3 | 209.8 | 571.0 | 597.2 | USD millions | Reported by segment, recast to three segments; FY2023 and FY2024 from the FY2025 report at one decimal | 10-K_2025-12-31_st.pdf, page 100; 10-Q_2026-09-30_st.htm.jsonl, page 19 |
| Segment revenue: Aerospace, Defense, and Commercial Equipment | 876.1 | 860.2 | 805.0 | 209.9 | 238.0 | 620.2 | 702.0 | USD millions | Reported by segment, recast to three segments; FY2023 and FY2024 from the FY2025 report at one decimal | 10-K_2025-12-31_st.pdf, page 100; 10-Q_2026-09-30_st.htm.jsonl, page 19 |
| Segment revenue: Other (not allocated to reportable segments) | 147.5 | 127.9 | Not supplied: the filing prints a dash for this period | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | USD millions | Reported by segment note; the FY2025 report prints a dash and the interim notes have no Other line | 10-K_2025-12-31_st.pdf, page 100; 10-Q_2026-09-30_st.htm.jsonl, page 19 |
| EBITDA (Reported) | 475.7 | 440.7 | 509.8 | -43.1 | 231.7 | 336.3 | 638.2 | USD millions | Reported: issuer EBITDA, net income before interest expense net, tax, depreciation and amortization of intangibles, with no add-backs | 10-K_2025-12-31_st.pdf, page 42; PRESENTATION_Q32026_st.pdf, page 31; RESULTS_Q32026_st.pdf, page 14 |
| EBITDA (Adjusted) | 912.3 | 882.8 | 835.9 | 212.1 | 248.1 | 624.4 | 680.4 | USD millions | Issuer-adjusted: EBITDA plus restructuring related and other, financing and other transaction costs and other, net; FY2023 and FY2024 as restated in the FY2025 report | 10-K_2025-12-31_st.pdf, page 42; PRESENTATION_Q32026_st.pdf, page 31; RESULTS_Q32026_st.pdf, page 14 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income/(loss) | -3.909 | 128.477 | 31.3 | -31.9 | 303.4 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Depreciation | 133.105 | 167.135 | 176.2 | 127.7 | 102.1 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Amortization of debt issuance costs | 6.772 | 5.734 | 4.7 | 3.5 | 3.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Goodwill impairment charge | 321.700 | 150.100 | 225.7 | 225.7 | Not supplied: the filing prints a dash for this period | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Loss/(gain) on sale of business | -5.877 | 98.750 | 10.4 | 10.2 | Not supplied: the filing prints a dash for this period | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Share-based compensation | 29.994 | 38.459 | 25.0 | 18.6 | 22.6 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| (Gain)/loss on debt financing | 1.413 | 9.757 | -2.8 | Not supplied: the filing prints a dash for this period | -5.0 | USD millions | Reported; the quarterly report calls it gain on extinguishment of debt | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Amortization of intangible assets | 173.860 | 145.744 | 80.2 | 61.4 | 47.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Deferred income taxes | -54.159 | -233.408 | -0.2 | -1.0 | 39.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| (Gain)/loss on equity investments, net | 0.711 | 13.976 | -1.5 | Not supplied: the filing prints a dash for this period | -4.9 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Other non-cash (gain)/loss, net | 35.986 | 86.506 | 47.0 | 29.5 | -3.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Acquisition-related compensation payments | -22.620 | -5.232 | Not supplied: the filing prints a dash for this period | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Accounts receivable, net | 2.861 | 56.627 | 11.2 | -34.0 | -62.9 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Inventories | -70.155 | 16.172 | -14.3 | -38.0 | 37.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Prepaid expenses and other | -0.176 | -18.784 | -9.5 | -18.3 | 6.3 | USD millions | Reported; FY2023 and FY2024 combine the FY2024 report's prepaid and other working capital lines | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Accounts payable and accrued expenses | -80.712 | -109.954 | 56.7 | 66.7 | 67.8 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Income taxes payable | -12.119 | 1.488 | -18.5 | 0.0 | 4.7 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Change in operating assets and liabilities (calculated) | -160.301 | -54.451 | 25.6 | -23.6 | 53.1 | USD millions | Calculated: sum of the five working capital lines above; the issuer prints 53.1 and -23.6 for the nine-month columns | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 456.675 | 551.547 | 621.5 | 420.0 | 557.8 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Additions to property, plant and equipment and capitalized software | -184.609 | -158.555 | -131.2 | -81.6 | -68.5 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Proceeds from sale of business, net of cash sold | 19.000 | 135.717 | 33.7 | 35.6 | 1.3 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Other investing | 0.604 | 3.681 | 1.8 | 1.6 | 4.5 | USD millions | Reported; combines investment in debt and equity securities with other for FY2023 and FY2024 | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -165.005 | -19.157 | -95.8 | -44.4 | -62.7 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Proceeds from exercise of stock options and issuance of ordinary shares | 5.346 | 4.605 | Not supplied: the filing prints a dash for this period | Not supplied: the filing prints a dash for this period | 1.4 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Payments of employee restricted stock tax withholdings | -12.280 | -11.661 | -5.5 | -4.2 | -7.8 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Proceeds from borrowings on debt | Not supplied: the filing prints a dash for this period | 500.000 | Not supplied: the filing prints a dash for this period | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Payments on debt | -848.897 | -701.870 | -352.2 | -1.5 | -433.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Dividends paid | -71.543 | -72.210 | -70.4 | -52.9 | -52.4 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Payments to repurchase ordinary shares | -88.398 | -68.891 | -120.6 | -120.6 | -25.1 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Purchase of noncontrolling interest in joint venture | Not supplied: the filing prints a dash for this period | -79.393 | Not supplied: the filing prints a dash for this period | Not supplied: the interim statement carries no such line | Not supplied: the interim statement carries no such line | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Payments of debt financing costs | -0.787 | -13.381 | -2.0 | -1.8 | -1.2 | USD millions | Reported; FY2023 and FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -1,016.559 | -442.801 | -550.6 | -181.0 | -518.4 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| FX Effect on Cash | 7.475 | -4.023 | 4.4 | 3.1 | 3.7 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Net Cash Change | -717.414 | 85.566 | Not supplied: the filing prints -20.6 but the three activity totals and the exchange effect add to -20.5 and opening to closing cash differs by -20.7 | 197.7 | -19.6 | USD millions | Reported; the three activity totals plus the exchange effect | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Opening Cash | 1,225.518 | 508.104 | 593.7 | 593.7 | 573.0 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Closing Cash | 508.104 | 593.670 | 573.0 | Not supplied: opening cash 593.7 plus net change 197.7 is 791.4 but the filing prints 791.3 | 553.4 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 187.236 | 147.801 | 157.0 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: cash interest paid is not printed for interim periods | USD millions | Reported as supplemental cash flow items for fiscal years only; cash paid, not accrued expense | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 58 |
| Cash taxes paid | 95.473 | 92.560 | 114.9 | Not supplied: cash taxes paid are not printed for interim periods | Not supplied: cash taxes paid are not printed for interim periods | USD millions | Reported; FY2025 from the tax note, FY2023 and FY2024 from the supplemental items | 10-K_2024-12-31_st.pdf, page 72; 10-K_2025-12-31_st.pdf, page 74 |
| Free cash flow (calculated) | 272.066 | 392.992 | 490.3 | 338.4 | 489.3 | USD millions | Calculated: Net Cash from Operating Activities less additions to property, plant and equipment and capitalized software; the issuer prints 490.2 for FY2025 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q32026_st.pdf, page 3 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 593.670 | 573.0 | 635.1 | 403.3 | 553.4 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Accounts receivable, net | 660.180 | 657.4 | 693.2 | 737.4 | 725.1 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Inventories | 614.455 | 617.8 | 605.8 | 579.1 | 579.0 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Prepaid expenses and other current assets | 158.934 | 146.1 | 152.4 | 151.2 | 145.0 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total current assets | 2,027.239 | 1,994.3 | 2,086.6 | 1,871.0 | 2,002.6 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Property, plant and equipment, net | 821.653 | 776.5 | 763.1 | 759.2 | 751.0 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Goodwill | 3,383.800 | 3,158.2 | 3,158.2 | 3,158.3 | 3,158.3 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Other intangible assets, net | 492.878 | 411.6 | 396.6 | 382.2 | 367.5 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Deferred income tax assets | 288.189 | 277.2 | 271.8 | 265.5 | 256.0 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Other assets | 129.505 | 133.9 | 138.6 | 149.2 | 151.1 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total Assets | 7,143.264 | 6,751.7 | 6,815.0 | 6,585.4 | Not supplied: total liabilities 3,619.6 plus total equity 3,066.8 is 6,686.4 but the filing prints 6,686.5 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Current portion of long-term debt and finance lease obligations | 2.414 | 2.3 | 2.4 | 2.4 | 2.5 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Accounts payable | 362.186 | 413.0 | 446.4 | 473.5 | 500.2 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Income taxes payable | 29.417 | 16.8 | 16.3 | 17.7 | 21.6 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Accrued expenses and other current liabilities | 317.341 | 343.1 | 293.5 | 323.0 | 313.4 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total current liabilities | 711.358 | 775.1 | 758.6 | 816.5 | 837.6 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Deferred income tax liabilities | 235.689 | 226.9 | 235.3 | 243.5 | 249.5 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Pension and other post-retirement benefit obligations | 27.910 | 39.1 | 39.5 | 40.8 | 40.4 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Finance lease obligations, less current portion | 20.984 | 18.9 | 18.5 | 17.7 | 17.3 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Long-term debt, net | 3,176.098 | 2,828.6 | 2,829.4 | 2,424.8 | 2,393.2 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Other long-term liabilities | 80.782 | 77.8 | 78.2 | 82.0 | 81.6 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total Liabilities | 4,252.821 | 3,966.3 | 3,959.5 | 3,625.4 | 3,619.6 | USD millions | Reported | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Ordinary shares | 2.257 | 2.3 | 2.3 | 2.3 | 2.3 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Treasury shares, at cost | -1,282.051 | -1,402.7 | -1,427.8 | -1,427.8 | -1,427.8 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 1,872.577 | 1,897.6 | 1,904.4 | 1,913.0 | 1,921.6 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Retained earnings | 2,340.203 | 2,295.6 | 2,363.7 | 2,442.3 | 2,538.8 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive income/(loss) | -42.543 | -7.4 | 13.0 | 30.2 | 32.0 | USD millions | Reported; FY2024 converted exactly from thousands | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total Equity | 2,890.443 | 2,785.4 | 2,855.5 | 2,960.0 | 3,066.8 | USD millions | Reported total shareholders' equity | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Total Debt | 3,199.496 | 2,849.8 | 2,850.3 | 2,444.9 | 2,413.0 | USD millions | Calculated carrying value: current portion of long-term debt and finance lease obligations plus finance lease obligations less current portion plus long-term debt, net; includes finance leases the issuer carries in its debt lines | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| Cash & Equivalents | 593.670 | 573.0 | 635.1 | 403.3 | 553.4 | USD millions | Reported cash and cash equivalents | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility | Revolving credit facility | 0.0 | 0.0 | 0.0 | 650.0 | Secured by substantially all assets of Sensata Technologies B.V. and its guarantor subsidiaries | Senior secured credit facility | USD | 0.0 | Not applicable | Base Rate margin 0.00% to 0.50%; Term SOFR, EURIBOR and Daily Simple SONIA margin 1.00% to 1.50%; commitment fee 0.125% to 0.250% | floating | Term SOFR, EURIBOR or Daily Simple SONIA | 100 to 150 | Not applicable | 2030-09-24 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 13; 10-K_2025-12-31_st.pdf, page 85; 10-K_2025-12-31_st.pdf, page 86; 10-K_2025-12-31_st.pdf, page 90 |
| 4.0% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 207.3 | Not applicable | Not applicable | Unsecured | Senior | USD | 207.3 | Not applicable | 4.000% (a single stated rate with fixed payment dates) | fixed | Not applicable | Not applicable | Not applicable | 2029-04-15 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86 |
| 4.375% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 450.0 | Not applicable | Not applicable | Unsecured | Senior | USD | 450.0 | Not applicable | 4.375% (a single stated rate with fixed payment dates) | fixed | Not applicable | Not applicable | Not applicable | 2030-02-15 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86 |
| 5.875% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 500.0 | Not applicable | Not applicable | Unsecured | Senior | USD | 500.0 | Not applicable | 5.875% (a single stated rate with fixed payment dates) | fixed | Not applicable | Not applicable | Not applicable | 2030-09-01 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86 |
| 3.75% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 750.0 | Not applicable | Not applicable | Unsecured | Senior | USD | 750.0 | Not applicable | 3.750% (a single stated rate with fixed payment dates) | fixed | Not applicable | Not applicable | Not applicable | 2031-02-15 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86 |
| 6.625% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 500.0 | Not applicable | Not applicable | Unsecured | Senior | USD | 500.0 | Not applicable | 6.625% (a single stated rate with fixed payment dates) | fixed | Not applicable | Not applicable | Not applicable | 2032-07-15 | 0.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86 |
| Financing cost adjustment | Debt premium net of discount less deferred financing costs | -14.1 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -14.1 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_st.htm.jsonl, page 12 |
| Finance lease obligations | Finance leases | 19.8 | Not supplied: lease liability, not a principal amount | Not applicable | Not applicable | Not supplied: the sources do not state security | Not supplied: the sources do not state ranking | USD | 19.8 | Not applicable | Not supplied: weighted-average discount rate 8.8% at 2025-12-31 only | Not supplied: rate type not stated | Not applicable | Not applicable | Not applicable | Not supplied: maturity not stated for the 2026-09-30 balance | Not supplied: scheduled principal by year is not stated; undiscounted payments are 3.9 for 2026 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 95 |

The Reporting Currency Amount cells add to USD 2,413.0 million, the Total Debt at 2026-09-30, once the financing cost adjustment is included. Each note series is a bullet maturity: the sources state no scheduled amortisation.
Basis: calculation K1; calculation K20; 10-Q_2026-09-30_st.htm.jsonl, page 12

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-03-31 | USD 509.8m | USD 195.5m | USD 185.9m | USD 519.4m | Verified: agrees to the printed LTM 519.4 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | Issuer EBITDA, no add-backs |
| EBITDA (Adjusted) | LTM to 2026-03-31 | USD 835.9m | USD 206.5m | USD 200.2m | USD 842.2m | Verified: agrees to the printed LTM 842.2 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | Issuer-adjusted |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 509.8m | USD 406.5m | USD 379.4m | USD 536.9m | Verified: agrees to the printed LTM 536.9 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | Issuer EBITDA, no add-backs; stubs are the six-month columns |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 835.9m | USD 432.3m | USD 412.3m | USD 855.9m | Verified: agrees to the printed LTM 855.9 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | Issuer-adjusted; stubs are the six-month columns |
| EBITDA (Reported) | LTM to 2026-09-30 | USD 509.8m | USD 638.2m | USD 336.3m | USD 811.7m | Verified: agrees to the printed LTM 811.7 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | Issuer EBITDA, no add-backs; stubs are the nine-month columns |
| EBITDA (Adjusted) | LTM to 2026-09-30 | USD 835.9m | USD 680.4m | USD 624.4m | USD 891.9m | Verified: agrees to the printed LTM 891.9 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | Issuer-adjusted; stubs are the nine-month columns |
| Net revenue | LTM to 2026-09-30 | USD 3,704.5m | USD 2,929.1m | USD 2,786.6m | USD 3,847.0m | Calculated | 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 | Nine-month stubs; comparable periods |
| Net Cash from Operating Activities | LTM to 2026-09-30 | USD 621.5m | USD 557.8m | USD 420.0m | USD 759.3m | Calculated | 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 | Nine-month stubs |
| Additions to property, plant and equipment and capitalized software | LTM to 2026-09-30 | USD 131.2m | USD 68.5m | USD 81.6m | USD 118.1m | Calculated | 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 | Outflows shown as positive amounts |
| Interest expense | LTM to 2026-09-30 | USD 149.1m | USD 96.8m | USD 113.4m | USD 132.5m | Calculated | 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 | Income statement interest expense, not cash interest |
| Cash Interest Paid | LTM to 2026-09-30 | USD 157.0m | Not supplied: cash interest paid is not printed for interim periods | Not supplied: cash interest paid is not printed for interim periods | Not calculable: the stubs are not printed | Not Calculable | 10-K_2025-12-31_st.pdf, page 58 | Printed for fiscal years only |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 3,199.496 | 10-K_2024-12-31_st.pdf, page 69 | 440.7 | 10-K_2025-12-31_st.pdf, page 42 | FY2024 / 2024-12-31 | USD | US$m | 7.26 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,605.826 | 10-K_2024-12-31_st.pdf, page 69 | 440.7 | 10-K_2025-12-31_st.pdf, page 42 | FY2024 / 2024-12-31 | USD | US$m | 5.91 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 440.7 | 10-K_2025-12-31_st.pdf, page 42 | 147.801 | 10-K_2024-12-31_st.pdf, page 72 | FY2024 / 2024-12-31 | USD | US$m | 2.98 | Calculated | Tier 1 | Cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 3,199.496 | 10-K_2024-12-31_st.pdf, page 69 | 882.8 | 10-K_2025-12-31_st.pdf, page 42 | FY2024 / 2024-12-31 | USD | US$m | 3.62 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,605.826 | 10-K_2024-12-31_st.pdf, page 69 | 882.8 | 10-K_2025-12-31_st.pdf, page 42 | FY2024 / 2024-12-31 | USD | US$m | 2.95 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 882.8 | 10-K_2025-12-31_st.pdf, page 42 | 147.801 | 10-K_2024-12-31_st.pdf, page 72 | FY2024 / 2024-12-31 | USD | US$m | 5.97 | Calculated | Tier 1 | Cash paid for interest, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,849.8 | 10-K_2025-12-31_st.pdf, page 55 | 509.8 | 10-K_2025-12-31_st.pdf, page 42 | FY2025 / 2025-12-31 | USD | US$m | 5.59 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,276.8 | 10-K_2025-12-31_st.pdf, page 55 | 509.8 | 10-K_2025-12-31_st.pdf, page 42 | FY2025 / 2025-12-31 | USD | US$m | 4.47 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 509.8 | 10-K_2025-12-31_st.pdf, page 42 | 157.0 | 10-K_2025-12-31_st.pdf, page 58 | FY2025 / 2025-12-31 | USD | US$m | 3.25 | Calculated | Tier 1 | Cash paid for interest, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,849.8 | 10-K_2025-12-31_st.pdf, page 55 | 835.9 | 10-K_2025-12-31_st.pdf, page 42 | FY2025 / 2025-12-31 | USD | US$m | 3.41 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,276.8 | 10-K_2025-12-31_st.pdf, page 55 | 835.9 | 10-K_2025-12-31_st.pdf, page 42 | FY2025 / 2025-12-31 | USD | US$m | 2.72 | Calculated | Tier 1 | Carrying-value debt; fiscal-year EBITDA ties to the income statement table |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 835.9 | 10-K_2025-12-31_st.pdf, page 42 | 157.0 | 10-K_2025-12-31_st.pdf, page 58 | FY2025 / 2025-12-31 | USD | US$m | 5.32 | Calculated | Tier 1 | Cash paid for interest, not interest expense |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,850.3 | 10-Q_2026-03-31_st.htm.jsonl, pages 2–3 | 519.4 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | 2026-03-31 | USD | US$m | 5.49 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,215.2 | 10-Q_2026-03-31_st.htm.jsonl, pages 2–3 | 519.4 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | 2026-03-31 | USD | US$m | 4.26 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 519.4 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-03-31 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,850.3 | 10-Q_2026-03-31_st.htm.jsonl, pages 2–3 | 842.2 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | 2026-03-31 | USD | US$m | 3.38 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,215.2 | 10-Q_2026-03-31_st.htm.jsonl, pages 2–3 | 842.2 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | 2026-03-31 | USD | US$m | 2.63 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 842.2 | RESULTS_Q12026_st.pdf, page 12; PRESENTATION_Q12026_st.pdf, page 23 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-03-31 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,444.9 | 10-Q_2026-06-30_st.htm.jsonl, pages 2–3 | 536.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | 2026-06-30 | USD | US$m | 4.55 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 2,041.6 | 10-Q_2026-06-30_st.htm.jsonl, pages 2–3 | 536.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | 2026-06-30 | USD | US$m | 3.80 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 536.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-06-30 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,444.9 | 10-Q_2026-06-30_st.htm.jsonl, pages 2–3 | 855.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | 2026-06-30 | USD | US$m | 2.86 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 2,041.6 | 10-Q_2026-06-30_st.htm.jsonl, pages 2–3 | 855.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | 2026-06-30 | USD | US$m | 2.39 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 855.9 | RESULTS_Q22026_st.pdf, page 14; PRESENTATION_Q22026_st.pdf, page 26 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-06-30 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,413.0 | 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | 811.7 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | 2026-09-30 | USD | US$m | 2.97 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,859.6 | 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | 811.7 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | 2026-09-30 | USD | US$m | 2.29 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 811.7 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-09-30 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,413.0 | 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | 891.9 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | 2026-09-30 | USD | US$m | 2.71 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,859.6 | 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | 891.9 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | 2026-09-30 | USD | US$m | 2.08 | Calculated | Tier 2b | Carrying-value debt over the LTM EBITDA the issuer prints |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 891.9 | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 31 | Not supplied: cash interest paid is not printed for interim periods | Not supplied: the quarterly report, release and presentation print no cash paid for interest line | 2026-09-30 | USD | US$m | Not calculable: no cash interest paid for this period | Not Calculable | Tier 2b | Cash interest paid is printed for fiscal years only |
| Net revenue growth | Net revenue FY2025 / Net revenue FY2024 - 1 | 3,704.5 | 10-K_2025-12-31_st.pdf, page 56 | 3,932.764 | 10-K_2024-12-31_st.pdf, page 70 | FY2025 | USD | US$m | -0.0580 | Calculated | Tier 1 | Calculated from printed or calculated components |
| EBITDA (Reported) margin | EBITDA (Reported) / Net revenue | 509.8 | 10-K_2025-12-31_st.pdf, page 42 | 3,704.5 | 10-K_2025-12-31_st.pdf, page 56 | FY2025 | USD | US$m | 0.1376 | Calculated | Tier 1 | Calculated from printed or calculated components |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net revenue | 835.9 | 10-K_2025-12-31_st.pdf, page 42 | 3,704.5 | 10-K_2025-12-31_st.pdf, page 56 | FY2025 | USD | US$m | 0.2256 | Calculated | Tier 1 | Issuer-adjusted EBITDA |
| Free cash flow conversion | Free cash flow / EBITDA (Reported) | 490.3 | Free cash flow (calculated) FY2025: 10-K_2025-12-31_st.pdf, page 58 | 509.8 | 10-K_2025-12-31_st.pdf, page 42 | FY2025 | USD | US$m | 0.9617 | Calculated | Tier 1 | Calculated from printed or calculated components |
| Capital expenditure intensity | Additions to property, plant and equipment and capitalized software / Net revenue | 131.2 | 10-K_2025-12-31_st.pdf, page 58 | 3,704.5 | 10-K_2025-12-31_st.pdf, page 56 | FY2025 | USD | US$m | 0.0354 | Calculated | Tier 1 | Calculated from printed or calculated components |
| EBITDA (Reported) margin, LTM | EBITDA (Reported) LTM / Net revenue LTM | 811.7 | PRESENTATION_Q32026_st.pdf, page 31 | 3,847.0 | Calculated LTM revenue: 10-Q_2026-09-30_st.htm.jsonl, page 3 | 2026-09-30 | USD | US$m | 0.2110 | Calculated | Tier 2b | Calculated from printed or calculated components |
| Liquidity over total debt | (Cash and cash equivalents + undrawn revolver) / Total Debt | 1,199.2 | 10-Q_2026-09-30_st.htm.jsonl, page 2; 10-Q_2026-09-30_st.htm.jsonl, page 13 | 2,413.0 | 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | 2026-09-30 | USD | US$m | 0.4970 | Calculated | Tier 2b | Undrawn revolver is availability net of letters of credit |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Net revenue growth (%) | 0.62 | -2.99 | -5.80 | Not supplied: 9M 2024 revenue is not in the sources | 5.11 | Down in FY2024 and FY2025, up in 2026 | FY2023 uses FY2022 revenue of 4,029.262 from the FY2024 report |
| Margin | Gross margin, calculated (%) | 31.11 | 29.39 | 29.27 | 29.36 | 31.41 | Down to FY2025, up in 2026 | Revenue less cost of revenue over revenue |
| Margin | EBITDA (Reported) margin (%) | 11.73 | 11.21 | 13.76 | 12.07 | 21.79 | Up | Reported EBITDA is after non-cash goodwill impairment of 321.7, 150.1 and 225.7 in FY2023, FY2024 and FY2025 |
| Margin | Adjusted EBITDA margin (%) | 22.50 | 22.45 | 22.56 | 22.41 | 23.23 | Broadly flat, up in 2026 | Issuer-adjusted EBITDA |
| Cash flow | Capital expenditure over revenue (%) | 4.55 | 4.03 | 3.54 | 2.93 | 2.34 | Down | Additions to property, plant and equipment and capitalized software |
| Cash flow | Free cash flow, calculated (USD millions) | 272.066 | 392.992 | 490.3 | 338.4 | 489.3 | Up | Operating cash flow less capital expenditure; the issuer prints 272.1, 393.0 and 490.2 for the fiscal years |
| Cash flow | Free cash flow over EBITDA (Reported) (%) | 57.19 | 89.17 | 96.17 | 100.62 | 76.67 | Mixed | Not the issuer's conversion measure, which divides by adjusted net income |
| Leverage | Issuer-reported gross leverage ratio (x) | 3.8 | 3.7 | 3.4 | 3.9 | 2.7 | Down | Principal basis over LTM Adjusted EBITDA; 9M 2025 is the 2025-09-30 figure |
| Leverage | Issuer-reported net leverage ratio (x) | 3.2 | 3.0 | 2.7 | 2.9 | 2.1 | Down | Principal basis over LTM Adjusted EBITDA; 9M 2025 is the 2025-09-30 figure |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Adjusted EBITDA | Reported EBITDA is primary; adjusted is shown beside it, labelled | Issuer Adjusted EBITDA restated: FY2024 first reported 881.6, restated 882.8; FY2023 first reported 906.6, restated 912.3 | 10-K_2024-12-31_st.pdf, page 54; 10-K_2025-12-31_st.pdf, page 42 | FY2023, FY2024 | 1.2 (0.14%) for FY2024 and 5.7 (0.63%) for FY2023 | Financial foundation; Earnings changes | The restated figures are used in every period; both are kept here |
| EBITDA (Reported) against EBITDA (Adjusted) | Reported EBITDA with no add-backs | Adjusted EBITDA adds restructuring related and other, financing and other transaction costs and other, net | 10-K_2025-12-31_st.pdf, page 41; 10-K_2025-12-31_st.pdf, page 42; PRESENTATION_Q32026_st.pdf, page 31 | All periods | FY2025 add-backs net 326.1 (63.97% of reported EBITDA); LTM to 2026-09-30 net 80.2 (9.88%) | Financial foundation; Fundamental credit | FY2025 reported EBITDA is struck after a non-cash goodwill impairment of 225.7; leverage is shown on both bases and the reported basis is primary |
| Debt: carrying value against principal | Total Debt is balance sheet carrying value; principal is kept separately | Issuer gross debt is principal including finance leases and excludes premium and deferred financing costs | 10-Q_2026-09-30_st.htm.jsonl, page 12; PRESENTATION_Q32026_st.pdf, page 34 | All balance sheet dates | At 2026-09-30 carrying 2,413.0 against principal 2,427.1, a difference of 14.1 (deferred financing costs 14.2 less premium 0.1) | Financial foundation; Fundamental credit | Carrying value is used; the issuer's principal figure is stated beside it in the net debt table |
| Net debt | Gross debt at carrying value less cash and cash equivalents | Issuer net debt is gross principal less cash | RESULTS_Q32026_st.pdf, page 14; PRESENTATION_Q32026_st.pdf, page 34 | All balance sheet dates | 2,294.2 against 2,276.8 at 2025-12-31 (17.4) and 1,873.7 against 1,859.6 at 2026-09-30 (14.1) | Financial foundation; Fundamental credit | Carrying-value net debt is used; issuer-reported leverage is shown as a KPI |
| Total debt rounding | Sum of the printed balance sheet debt lines | Issuer total debt and finance lease obligations 2,849.7 at 2025-12-31 and 2,850.2 at 2026-03-31 | PRESENTATION_Q32026_st.pdf, page 34; RESULTS_Q32026_st.pdf, page 14 | FY2025, 2026-03-31 | 0.1 in each | Financial foundation | The sum of the printed lines, 2,849.8 and 2,850.3, is used; the issuer totals come from unrounded numbers |
| Interest | Interest expense, interest expense net and cash interest paid are three different quantities | FY2025 interest expense 149.1, interest expense net 130.0 and cash paid for interest 157.0 | 10-K_2025-12-31_st.pdf, page 56; 10-K_2025-12-31_st.pdf, page 42; 10-K_2025-12-31_st.pdf, page 58 | FY2025 | Cash paid exceeds expense by 7.9 and exceeds net expense by 27.0 | Financial foundation; Earnings quality | Cover uses cash interest paid; expense and net expense are kept in their own rows |
| Debt retirement events | One economic event with several figures is one row | June 2026 tender: principal 406.1 retired for cash of 400.0; third-quarter open-market purchases: principal 32.6 for cash of 31.8; nine-month gain on extinguishment of debt 5.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 | 2026 | Principal exceeds cash paid by 6.1 and 0.8 | Financial foundation; Refinancing & LME | Principal is used for the debt roll; cash paid is the cash flow; the gain is not netted into either |
| Free cash flow | Operating cash flow less capital expenditure | Issuer free cash flow 490.2 for FY2025 | 10-K_2025-12-31_st.pdf, page 42; 10-K_2025-12-31_st.pdf, page 58 | FY2025 | 0.1 against the calculated 490.3 from rounded components | Financial foundation | The calculated figure is used and the issuer figure is stated in the basis cell |
| Units and segments | One currency and one unit | The FY2024 report prints thousands and two segments; later documents print millions and three segments | 10-K_2024-12-31_st.pdf, page 69; 10-K_2024-12-31_st.pdf, page 118; 10-K_2025-12-31_st.pdf, page 100 | FY2023, FY2024 | Exact conversion; segment revenue for FY2023 and FY2024 is taken from the FY2025 report | Financial foundation; Business & governance | FY2023 and FY2024 statement lines are converted exactly; segment history before 2023 is not on the current structure |
| Segment and balance sheet rounding | Printed components add to printed totals | FY2023 segment revenue adds to 4,054.2 against 4,054.1; nine-month 2025 segments add to 2,786.7 against 2,786.6; 2026-09-30 liabilities and equity add to 6,686.4 against total assets 6,686.5 | 10-K_2025-12-31_st.pdf, page 100; 10-Q_2026-09-30_st.htm.jsonl, page 19; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 | FY2023, 9M 2025, 9M 2026 | 0.1 in each | Financial foundation | Printed figures are kept; Total Assets at 2026-09-30 is left unsupplied because the filing prints the difference |
| Operating leases and pensions | Lease liabilities on their own lines are not added to debt | Operating lease liabilities of 72.8 at 2025-12-31 and pension obligations of 40.4 at 2026-09-30 are outside the debt lines | 10-K_2025-12-31_st.pdf, page 95; 10-Q_2026-09-30_st.htm.jsonl, page 2 | 2025-12-31, 2026-09-30 | Not in Total Debt | Financial foundation; Fundamental credit | Excluded from Total Debt; finance leases of 19.8 are inside the debt lines and named in the basis cells |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 7.26 | 5.91 | x | Carrying-value debt over fiscal-year reported EBITDA; the issuer's adjusted ratios are in the calculation register |
| FY2025 / 2025-12-31 | 5.59 | 4.47 | x | Carrying-value debt over fiscal-year reported EBITDA; the issuer's adjusted ratios are in the calculation register |
| 2026-03-31 | 5.49 | 4.26 | x | Carrying-value debt over the issuer's printed LTM reported EBITDA; interim figures are last twelve months |
| 2026-06-30 | 4.55 | 3.80 | x | Carrying-value debt over the issuer's printed LTM reported EBITDA; interim figures are last twelve months |
| 2026-09-30 | 2.97 | 2.29 | x | Carrying-value debt over the issuer's printed LTM reported EBITDA; interim figures are last twelve months |

Reported EBITDA is struck after the non-cash goodwill impairments of 2023, 2024 and the third quarter of 2025, so the FY2024 and FY2025 ratios are higher than the adjusted ratios by a wide margin.
Basis: 10-K_2025-12-31_st.pdf, page 41; 10-K_2025-12-31_st.pdf, page 42

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.98 | x | Fiscal-year reported EBITDA over cash interest paid |
| FY2025 / 2025-12-31 | 3.25 | x | Fiscal-year reported EBITDA over cash interest paid |
| 2026-03-31 | Not supplied: cash interest paid is not printed for interim periods | x | Cash interest paid is not printed for interim periods, so no ratio is stated |
| 2026-06-30 | Not supplied: cash interest paid is not printed for interim periods | x | Cash interest paid is not printed for interim periods, so no ratio is stated |
| 2026-09-30 | Not supplied: cash interest paid is not printed for interim periods | x | Cash interest paid is not printed for interim periods, so no ratio is stated |

Interim periods carry no cover figure because cash interest paid is printed for fiscal years only.
Basis: 10-K_2025-12-31_st.pdf, page 58

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 593.670 | 745.8 | US$m | Cash and cash equivalents from the balance sheet; undrawn revolver is availability net of USD 4.2 million of letters of credit; commitments were 750.0 before the September 2025 amendment |
| FY2025 / 2025-12-31 | 573.0 | 645.8 | US$m | Cash and cash equivalents from the balance sheet; undrawn revolver is availability net of USD 4.2 million of letters of credit |
| 2026-03-31 | 635.1 | 645.8 | US$m | Cash and cash equivalents from the balance sheet; undrawn revolver is availability net of USD 4.2 million of letters of credit |
| 2026-06-30 | 403.3 | 645.8 | US$m | Cash and cash equivalents from the balance sheet; undrawn revolver is availability net of USD 4.2 million of letters of credit |
| 2026-09-30 | 553.4 | 645.8 | US$m | Cash and cash equivalents from the balance sheet; undrawn revolver is availability net of USD 4.2 million of letters of credit |

No other committed facility or receivables program is described in the sources read.
Basis: 10-K_2024-12-31_st.pdf, page 58; 10-K_2025-12-31_st.pdf, page 46; 10-Q_2026-09-30_st.htm.jsonl, page 13

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 0.0 | US$m | No series in the debt table matures in 2026; the annual report ladder at 2025-12-31 shows a dash for 2026 to 2028; contractual principal at 2026-09-30, finance leases excluded |
| FY2027 | 0.0 | US$m | No series in the debt table matures in 2027; contractual principal at 2026-09-30, finance leases excluded |
| FY2028 | 0.0 | US$m | No series in the debt table matures in 2028; contractual principal at 2026-09-30, finance leases excluded |
| FY2029 | 207.3 | US$m | 4.0% notes due 2029-04-15 after the June 2026 tender and third-quarter purchases; contractual principal at 2026-09-30, finance leases excluded |
| FY2030 | 950.0 | US$m | 4.375% notes due 2030-02-15 (450.0) and 5.875% notes due 2030-09-01 (500.0); the revolver matures 2030-09-24 and is undrawn; contractual principal at 2026-09-30, finance leases excluded |
| FY2031 | 750.0 | US$m | 3.75% notes due 2031-02-15; contractual principal at 2026-09-30, finance leases excluded |
| FY2032 | 500.0 | US$m | 6.625% notes due 2032-07-15; contractual principal at 2026-09-30, finance leases excluded |

The ladder is built from the tranche table at 2026-09-30 because the quarterly report prints no aggregate maturity table.
Basis: 10-Q_2026-09-30_st.htm.jsonl, page 12; calculation K20

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-30 |
| --- | --- | --- | --- |
| Net revenue (US$m) | 3,932.764 | 3,704.5 | 3,847.0 |
| EBITDA reported (US$m) | 440.7 | 509.8 | 811.7 |
| EBITDA adjusted, issuer-defined (US$m) | 882.8 | 835.9 | 891.9 |
| Net cash from operating activities (US$m) | 551.547 | 621.5 | 759.3 |
| Capital expenditure (US$m) | 158.555 | 131.2 | 118.1 |
| Free cash flow, calculated (US$m) | 392.992 | 490.3 | 641.2 |
| Total debt, carrying value (US$m) | 3,199.496 | 2,849.8 | 2,413.0 |
| Cash and cash equivalents (US$m) | 593.670 | 573.0 | 553.4 |
| Net debt, carrying value (US$m) | 2,605.826 | 2,276.8 | 1,859.6 |
| Total debt / EBITDA reported (x) | 7.26 | 5.59 | 2.97 |
| Net debt / EBITDA reported (x) | 5.91 | 4.47 | 2.29 |
| Total debt / adjusted EBITDA (x) | 3.62 | 3.41 | 2.71 |
| Net debt / adjusted EBITDA (x) | 2.95 | 2.72 | 2.08 |
| EBITDA reported / cash interest paid (x) | 2.98 | 3.25 | Not supplied: cash interest paid is not printed for interim periods |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3,199.496 | 593.670 | 2,605.826 | US$m | Carrying value: current portion of long-term debt and finance lease obligations, finance lease obligations less current portion and long-term debt, net (2.414 + 20.984 + 3,176.098); includes finance lease obligations of 23.4 that the issuer carries in its debt lines; principal total including finance leases 3,223.4 |
| FY2025 / 2025-12-31 | 2,849.8 | 573.0 | 2,276.8 | US$m | Carrying value: current portion of long-term debt and finance lease obligations, finance lease obligations less current portion and long-term debt, net (2.3 + 18.9 + 2,828.6); includes finance lease obligations of 21.2 that the issuer carries in its debt lines; principal total including finance leases 2,867.2; the issuer prints total debt and finance lease obligations of 2,849.7 |
| 2026-03-31 | 2,850.3 | 635.1 | 2,215.2 | US$m | Carrying value: current portion of long-term debt and finance lease obligations, finance lease obligations less current portion and long-term debt, net (2.4 + 18.5 + 2,829.4); includes finance lease obligations of 20.9 that the issuer carries in its debt lines; principal total including finance leases 2,866.9; the issuer prints 2,850.2 |
| 2026-06-30 | 2,444.9 | 403.3 | 2,041.6 | US$m | Carrying value: current portion of long-term debt and finance lease obligations, finance lease obligations less current portion and long-term debt, net (2.4 + 17.7 + 2,424.8); includes finance lease obligations of 20.1 that the issuer carries in its debt lines; principal total including finance leases 2,460.1 |
| 2026-09-30 | 2,413.0 | 553.4 | 1,859.6 | US$m | Carrying value: current portion of long-term debt and finance lease obligations, finance lease obligations less current portion and long-term debt, net (2.5 + 17.3 + 2,393.2); includes finance lease obligations of 19.8 that the issuer carries in its debt lines; principal total including finance leases 2,427.1 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2,407.3 | 5.7 | 2,413.0 | US$m | Reconciling items are debt premium net of discount of 0.1, deferred financing costs of -14.2 and finance lease obligations of 19.8 that the ladder leaves out; 0.1 - 14.2 + 19.8 = 5.7 |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Quarterly dividend of USD 0.12 per share approved in October 2026 and payable in November 2026 to holders of record on 2026-11-11 | Not supplied: the source states October 2026 only | 17.5 | 1,877.1 | 2.31 | US$m | Calculated from the per-share rate and 145,562,402 shares outstanding at 2026-10-14; the filing states no total. Pro forma net debt is net debt at 2026-09-30 plus the dividend; net leverage uses the same LTM reported EBITDA of 811.7. The payment date and later cash flows are not yet reflected. The June 2026 tender and third-quarter purchases are inside the 2026-09-30 balance sheet |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 4,054.083 | 912.3 | US$m | Twelve months; Adjusted EBITDA is issuer-adjusted as restated in the FY2025 report (first reported 906.6); revenue converted exactly from thousands |
| FY2024 / 2024-12-31 | 3,932.764 | 882.8 | US$m | Twelve months; issuer-adjusted as restated (first reported 881.6); revenue converted exactly from thousands |
| FY2025 / 2025-12-31 | 3,704.5 | 835.9 | US$m | Twelve months; issuer-adjusted EBITDA |
| 2026-09-30 | 3,847.0 | 891.9 | US$m | Last twelve months to 2026-09-30; revenue is calculated as FY2025 plus nine months 2026 less nine months 2025; issuer-adjusted EBITDA is the printed LTM figure |

Adjusted EBITDA is the issuer's own measure with large add-backs in earlier years, so it is not comparable with reported EBITDA.
Basis: calculation K9; 10-K_2025-12-31_st.pdf, page 42; PRESENTATION_Q32026_st.pdf, page 31

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Revolving Credit Facility | 1 | Yes | 0.0 | 0.00 | US$m | Senior secured; drawn amount nil, commitment 650.0 and availability 645.8 after 4.2 of letters of credit; secured by substantially all assets of Sensata Technologies B.V. and its guarantor subsidiaries and guaranteed by certain subsidiaries; equal-rank series listed by maturity; cumulative principal 0.0 over LTM reported EBITDA of 811.7 at 2026-09-30 |
| 4.0% Senior Notes due 2029 | 2 | No | 207.3 | 0.26 | US$m | Senior unsecured, issued by Sensata Technologies B.V.; guaranteed by Sensata Technologies, Inc. and the subsidiaries that guarantee the credit agreement; equal-rank series listed by maturity; cumulative principal 207.3 over LTM reported EBITDA of 811.7 at 2026-09-30 |
| 4.375% Senior Notes due 2030 | 2 | No | 450.0 | 0.81 | US$m | Senior unsecured, issued by Sensata Technologies, Inc.; guaranteed by Sensata Technologies B.V. and the subsidiaries that guarantee the credit agreement; equal-rank series listed by maturity; cumulative principal 657.3 over LTM reported EBITDA of 811.7 at 2026-09-30 |
| 5.875% Senior Notes due 2030 | 2 | No | 500.0 | 1.43 | US$m | Senior unsecured, issued by Sensata Technologies B.V.; guaranteed by Sensata Technologies, Inc. and the subsidiaries that guarantee the credit agreement; equal-rank series listed by maturity; cumulative principal 1,157.3 over LTM reported EBITDA of 811.7 at 2026-09-30 |
| 3.75% Senior Notes due 2031 | 2 | No | 750.0 | 2.35 | US$m | Senior unsecured, issued by Sensata Technologies, Inc.; guaranteed by Sensata Technologies B.V. and the subsidiaries that guarantee the credit agreement; equal-rank series listed by maturity; cumulative principal 1,907.3 over LTM reported EBITDA of 811.7 at 2026-09-30 |
| 6.625% Senior Notes due 2032 | 2 | No | 500.0 | 2.97 | US$m | Senior unsecured, issued by Sensata Technologies, Inc.; guaranteed by Sensata Technologies B.V. and the subsidiaries that guarantee the credit agreement; equal-rank series listed by maturity; cumulative principal 2,407.3 over LTM reported EBITDA of 811.7 at 2026-09-30 |

Finance lease obligations of 19.8 are left out because no source states their legal rank, and the series rank equally so the running total follows maturity order.
Basis: calculation K21; 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 86; 10-K_2025-12-31_st.pdf, page 88

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2026-09-30 | 811.7 | US$m | Opening: issuer EBITDA with no add-backs; printed LTM figure |
| Restructuring related and other | 87.1 | US$m | Add-back classified as restructuring; realisation status not stated; includes non-cash charges the issuer does not separate in this table |
| Financing and other transaction costs | 5.7 | US$m | Add-back classified as transaction costs; realisation status not stated |
| Other, net | -12.6 | US$m | Adjustment classified as other; deducted; realisation status not stated |
| EBITDA (Adjusted), LTM to 2026-09-30 | 891.9 | US$m | Closing: issuer-adjusted EBITDA; the steps add to the closing figure exactly |

The add-backs are the issuer's own and no step is a plug: 811.7 plus 87.1 plus 5.7 less 12.6 equals 891.9.
Basis: calculation K22; PRESENTATION_Q32026_st.pdf, page 31; RESULTS_Q32026_st.pdf, page 14

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
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### Analysis by dimension

Leverage trajectory. Carrying-value debt fell from USD 2,849.8 million at 2025-12-31 to USD 2,413.0 million at 2026-09-30 because the issuer spent cash on a June 2026 tender of USD 406.1 million of 4.0% notes for USD 400.0 million and on third-quarter open-market purchases of USD 32.6 million of principal, while cash fell only from USD 573.0 million to USD 553.4 million, so net debt fell by USD 417.2 million to USD 1,859.6 million. Debt reduction explains 0.82x of the 2.18x fall in reported net leverage and the recovery of trailing reported EBITDA from USD 509.8 million to USD 811.7 million explains 1.36x, mostly because the third-quarter 2025 goodwill impairment of USD 225.7 million left the window. Creditors therefore hold real but smaller protection from debt repaid than the headline ratio suggests.
Basis: calculation K3; calculation K12; 10-Q_2026-09-30_st.htm.jsonl, page 12; 10-K_2025-12-31_st.pdf, page 42

Coverage. Reported EBITDA covered cash interest paid 3.25x in FY2025 and 2.98x in FY2024, and adjusted EBITDA covered it 5.32x and 5.97x. Interest expense in the first nine months of 2026 was USD 96.8 million against USD 113.4 million a year earlier, which points to better coverage in 2026, but cash interest paid is not printed for interim periods, so the interim ratio is not established and the improvement rests on expense, not cash.
Basis: calculation K15; 10-K_2025-12-31_st.pdf, page 56; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, page 3

Cash flow quality. Operating cash flow was USD 621.5 million in FY2025 and USD 557.8 million in the first nine months of 2026, after USD 131.2 million and USD 68.5 million of capital expenditure, leaving calculated free cash flow of USD 490.3 million and USD 489.3 million. Working capital supplied USD 53.1 million of the 2026 nine-month operating cash flow against an outflow of USD 23.6 million a year earlier, so part of the 2026 cash flow could reverse if receivables and inventory rebuild.
Basis: calculation K6; calculation K23; 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4

Liquidity. Cash of USD 553.4 million and an undrawn revolver of USD 645.8 million, together USD 1,199.2 million or 0.50x total debt, face a debt profile with no maturity before 2029 and a first maturity of USD 207.3 million. Shareholder returns are the main discretionary use: USD 52.4 million of dividends and USD 25.1 million of buybacks in nine months, and the October 2026 dividend would add about USD 17.5 million to net debt.
Basis: calculation K16; calculation K19; 10-Q_2026-09-30_st.htm.jsonl, page 13; 10-Q_2026-09-30_st.htm.jsonl, page 14

Data quality and definitions. Reported EBITDA of USD 509.8 million for FY2025 is struck after USD 307.0 million of restructuring-related and other add-backs that include a non-cash goodwill impairment, and the issuer restated its adjusted EBITDA for FY2024 from USD 881.6 million to USD 882.8 million, so adjusted series are comparable only on the later definition. Several printed totals differ from their components by 0.1 through rounding; where the filing itself prints the difference, the total is left unsupplied and logged under the gap lines.
Basis: calculation K14; 10-K_2024-12-31_st.pdf, page 54; 10-K_2025-12-31_st.pdf, page 42

Contrary evidence. The issuer-adjusted view of 2.08x net and strong free cash flow argue that leverage was already moderate before the repayments, and that view wins if add-backs fall as they did from USD 326.1 million in FY2025 to USD 80.2 million over the last twelve months and if working capital inflows persist. Monitoring should watch interim cash interest, any new restructuring add-backs and working capital in the next report.
Basis: calculation K14; calculation K23; PRESENTATION_Q32026_st.pdf, page 31

Non-debt funding float and other claims. The sources read show no customer deposits, deferred revenue, factoring or supplier-finance program. Operating lease liabilities of USD 72.8 million at 2025-12-31 and pension obligations of USD 40.4 million at 2026-09-30 sit outside total debt; finance leases of USD 19.8 million are inside it.
Basis: 10-K_2025-12-31_st.pdf, page 95; 10-Q_2026-09-30_st.htm.jsonl, page 2; 10-Q_2026-09-30_st.htm.jsonl, page 12

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage on reported EBITDA at annual and interim dates | Ready with Limitations | Interim EBITDA is the issuer's printed LTM figure; reported EBITDA is after non-cash impairments in FY2023 to FY2025 | Use the adjusted ratios beside the reported ones; confirm add-back composition in the next report |
| Interest cover | Ready with Limitations | Cash interest paid is printed for fiscal years only, so interim cover is not calculable | Obtain interim cash paid for interest from the issuer |
| Liquidity and maturities | Ready | Revolver availability is net of letters of credit; no aggregate maturity table at 2026-09-30, so the ladder is built from the tranche table | None needed for the requested use |
| Debt structure and ranking | Ready with Limitations | Ranking rests on the annual report's description; the executed documents are not supplied and the finance lease rank is not stated | Obtain the credit agreement and indentures for covenant and guarantee detail |
| Statement tables and period construction | Ready with Limitations | Three totals are left unsupplied because the filing prints the rounding difference; first and second quarter columns are not tabulated | Add the quarterly columns if a quarterly series is needed |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 25 |
| Fields total | 25 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 0 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| K1 | Total Debt, carrying value: current portion + finance lease obligations less current portion + long-term debt, net | FY2024 2.414 + 20.984 + 3,176.098; FY2025 2.3 + 18.9 + 2,828.6; 2026-03-31 2.4 + 18.5 + 2,829.4; 2026-06-30 2.4 + 17.7 + 2,424.8; 2026-09-30 2.5 + 17.3 + 2,393.2 (USD millions) | 3,199.496; 2,849.8; 2,850.3; 2,444.9; 2,413.0 | 10-K_2024-12-31_st.pdf, page 69; 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-03-31_st.htm.jsonl, pages 2–3; 10-Q_2026-06-30_st.htm.jsonl, pages 2–3; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| K2 | Net debt = Total Debt less cash and cash equivalents | 3,199.496 - 593.670; 2,849.8 - 573.0; 2,850.3 - 635.1; 2,444.9 - 403.3; 2,413.0 - 553.4 (USD millions) | 2,605.826; 2,276.8; 2,215.2; 2,041.6; 1,859.6 | Net debt data table |
| K3 | Change from 2025-12-31 to 2026-09-30 | Total debt 2,849.8 - 2,413.0; cash 573.0 - 553.4; net debt 2,276.8 - 1,859.6 (USD millions) | Total debt down 436.8; cash down 19.6; net debt down 417.2 | 10-K_2025-12-31_st.pdf, page 55; 10-Q_2026-09-30_st.htm.jsonl, pages 2–3 |
| K4 | Gross profit = Net revenue - Cost of revenue | FY2025 3,704.5 - 2,620.2; 9M 2026 2,929.1 - 2,009.0 (USD millions) | 1,084.3; 920.1; other columns in the income statement table | 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| K5 | Change in operating assets and liabilities = sum of five working capital lines | 9M 2026: -62.9 + 37.2 + 6.3 + 67.8 + 4.7; 9M 2025: -34.0 - 38.0 - 18.3 + 66.7 + 0.0 (USD millions) | 53.1; -23.6 | 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| K6 | Free cash flow = Net Cash from Operating Activities less additions to property, plant and equipment and capitalized software | FY2025 621.5 - 131.2; 9M 2026 557.8 - 68.5; 9M 2025 420.0 - 81.6 (USD millions) | 490.3; 489.3; 338.4 | 10-K_2025-12-31_st.pdf, page 58; 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |
| K7 | LTM EBITDA (Reported) = FY2025 + current stub - prior-year stub | 509.8 + 195.5 - 185.9; 509.8 + 406.5 - 379.4; 509.8 + 638.2 - 336.3 (USD millions) | 519.4; 536.9; 811.7 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q12026_st.pdf, page 12; RESULTS_Q22026_st.pdf, page 14; RESULTS_Q32026_st.pdf, page 14 |
| K8 | LTM EBITDA (Adjusted) = FY2025 + current stub - prior-year stub | 835.9 + 206.5 - 200.2; 835.9 + 432.3 - 412.3; 835.9 + 680.4 - 624.4 (USD millions) | 842.2; 855.9; 891.9 | 10-K_2025-12-31_st.pdf, page 42; RESULTS_Q12026_st.pdf, page 12; RESULTS_Q22026_st.pdf, page 14; RESULTS_Q32026_st.pdf, page 14 |
| K9 | LTM net revenue, operating cash flow, capital expenditure and free cash flow | 3,704.5 + 2,929.1 - 2,786.6; 621.5 + 557.8 - 420.0; 131.2 + 68.5 - 81.6; 759.3 - 118.1 (USD millions) | 3,847.0; 759.3; 118.1; 641.2 | 10-K_2025-12-31_st.pdf, page 56; 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| K10 | Leverage and cover ratios are numerator over denominator, rounded half up to two decimals | Numerators and denominators are in the calculation register | See the calculation register | Calculation register table |
| K11 | Reported net leverage at 2025-12-31 and 2026-09-30 | 2,276.8 / 509.8; 1,859.6 / 811.7 | 4.47x; 2.29x; fall 2.18x | Net debt data table |
| K12 | Decomposition of the fall in reported net leverage | Debt effect: 4.47x less 1,859.6 / 509.8 = 3.65x; earnings effect: 3.65x less 2.29x | Debt reduction 0.82x; trailing EBITDA recovery 1.36x; adjusted net leverage 2.72x to 2.08x | Calculation register table |
| K13 | Adjusted net leverage at 2025-12-31 and 2026-09-30 | 2,276.8 / 835.9; 1,859.6 / 891.9 | 2.72x; 2.08x | Calculation register table |
| K14 | Add-backs between EBITDA (Reported) and EBITDA (Adjusted) | FY2025 835.9 - 509.8; LTM 891.9 - 811.7; shares 326.1 / 509.8 and 80.2 / 811.7 (USD millions) | 326.1 (63.97%); 80.2 (9.88%) | 10-K_2025-12-31_st.pdf, page 42; PRESENTATION_Q32026_st.pdf, page 31 |
| K15 | FY2025 interest quantities | Cash paid 157.0 less interest expense 149.1; cash paid 157.0 less interest expense net 130.0 (USD millions) | 7.9; 27.0 | 10-K_2025-12-31_st.pdf, page 42; 10-K_2025-12-31_st.pdf, page 56; 10-K_2025-12-31_st.pdf, page 58 |
| K16 | Liquidity at 2026-09-30 = cash + undrawn revolver; over Total Debt | 553.4 + 645.8; 1,199.2 / 2,413.0 (USD millions) | 1,199.2; 0.4970 | 10-Q_2026-09-30_st.htm.jsonl, page 2; 10-Q_2026-09-30_st.htm.jsonl, page 13 |
| K17 | Capital expenditure over revenue, nine months 2026 | 68.5 / 2,929.1 | 0.0234 | 10-Q_2026-09-30_st.htm.jsonl, page 3 |
| K18 | Tender and purchase differences | 406.1 - 400.0; 32.6 - 31.8 (USD millions) | 6.1; 0.8 | 10-Q_2026-09-30_st.htm.jsonl, page 12 |
| K19 | October 2026 dividend and pro forma net debt | 0.12 x 145,562,402 = 17,467,488 USD, 17.5 USD millions; 1,859.6 + 17.5 = 1,877.1; 1,877.1 / 811.7 | 17.5; 1,877.1; 2.31x | 10-Q_2026-09-30_st.htm.jsonl, page 2; 10-Q_2026-09-30_st.htm.jsonl, page 14 |
| K20 | Contractual principal and reconciling items at 2026-09-30 | 0.0 + 0.0 + 0.0 + 207.3 + 950.0 + 750.0 + 500.0 = 2,407.3; 0.1 - 14.2 + 19.8 = 5.7; 2,407.3 + 5.7 = 2,413.0; instruments 0.0 + 207.3 + 450.0 + 500.0 + 750.0 + 500.0 - 14.1 + 19.8 = 2,413.0 (USD millions) | 2,407.3; 5.7; 2,413.0 | 10-Q_2026-09-30_st.htm.jsonl, page 12 |
| K21 | Cumulative debt stack over LTM reported EBITDA of 811.7 | 0.0; 207.3; 657.3; 1,157.3; 1,907.3; 2,407.3 divided by 811.7 | 0.00x; 0.26x; 0.81x; 1.43x; 2.35x; 2.97x | 10-Q_2026-09-30_st.htm.jsonl, page 12 |
| K22 | EBITDA bridge | 811.7 + 87.1 + 5.7 - 12.6 (USD millions) | 891.9 | PRESENTATION_Q32026_st.pdf, page 31 |
| K23 | Working capital swing in nine-month operating cash flow | 53.1 - (-23.6) (USD millions) | 76.7 | 10-Q_2026-09-30_st.htm.jsonl, pages 3–4 |

## Gaps

- Cash interest paid and cash taxes paid are not printed for the first nine months of 2025 or 2026 or for any 2026 quarter, so interim EBITDA to cash interest cover and its interim cash tax lines are not calculable; severity High; the action is to obtain the interim cash paid for interest and taxes from the issuer.
- Net cash change for FY2025 is left unsupplied because the filing prints 20.6 as a decrease while the three activity totals and the exchange effect add to a decrease of 20.5 and opening and closing cash differ by 20.7; severity Low; no action closes it short of the issuer's unrounded figures.
- Closing cash for the first nine months of 2025 is left unsupplied because opening cash of 593.7 plus the net change of 197.7 is 791.4 and the filing prints 791.3; severity Low; no action closes it short of unrounded figures.
- Total assets at 2026-09-30 are left unsupplied because total liabilities of 3,619.6 plus total equity of 3,066.8 add to 6,686.4 and the filing prints 6,686.5; severity Low; no action closes it short of unrounded figures.
- The filing prints a dash, not a figure, for the goodwill impairment charge in the third quarter and nine months of 2026, for the goodwill impairment, sale of business and equity investment lines in the 2026 and 2025 nine-month cash flows where it does, for option proceeds, borrowings, noncontrolling interest purchases and acquisition-related compensation in the periods named, and for segment other revenue in FY2025; these are left unsupplied rather than read as zero; severity Low; the action is to confirm with the issuer that a dash means nil.
- The interim cash flow and segment statements carry no line for acquisition-related compensation, borrowings, noncontrolling interest purchases or other segment revenue, so those cells are unsupplied; severity Low; the action is to confirm nil with the issuer.
- Revenue growth for the first nine months of 2025 is not stated because nine-month 2024 revenue is not in the sources; severity Low; the action is to supply the 2024 quarterly reports.
- The FY2023 balance sheet is not tabulated, so no FY2023 net debt or leverage is stated, and the first and second quarter and half-year income statement and cash flow columns are not tabulated; only EBITDA for those periods is used through the last-twelve-month figures; severity Medium; the action is to add the FY2023 balance sheet from the FY2024 annual report and the 2026 quarterly columns if a longer series is needed.
- Carrying value by note series is not disclosed, only principal by series and one aggregate of premium and deferred financing costs, so the debt instrument table shows principal and a financing cost adjustment row; severity Low; the action is to obtain the per-series carrying amounts.
- The rank and security of finance lease obligations of USD 19.8 million are not stated, so they are excluded from the debt stack and its cumulative leverage; severity Low; the action is to read the lease agreements.
- A floor for the revolver rate is not stated, scheduled principal by year for finance leases is not stated beyond undiscounted payments of USD 3.9 million for 2026, and the finance lease maturity at 2026-09-30 is not stated; severity Low; the action is to read the executed documents and the lease note.
- No restricted-group, guarantor or parent-only statements are supplied for 2025 or 2026, and the credit agreement's covenant ratio is not printed, so leverage is on the plc's consolidated perimeter only; severity Medium; the action is to obtain compliance certificates and the executed credit agreement.
- Adjusted EBITDA for FY2024 and FY2023 was restated by 1.2 and 5.7 against the figures first reported, and the FY2025 add-backs include a non-cash goodwill impairment the issuer does not separate in its reconciliation; severity Medium; the action is to obtain the composition of the add-backs by quarter.
- Printed totals differ from their components by 0.1 in the issuer's debt total at 2025-12-31 and 2026-03-31, free cash flow for FY2025, and segment revenue for FY2023 and the first nine months of 2025; severity Low; the printed figures are kept and the differences are logged.
- Reported EBITDA is not a printed income statement line and is taken from the issuer's reconciliation of net income to EBITDA, which is unaudited non-GAAP information in the annual report; severity Low; the action is to recompute it from audited components if the audit standard matters.

## Next module

The orchestrator selects the next module.
