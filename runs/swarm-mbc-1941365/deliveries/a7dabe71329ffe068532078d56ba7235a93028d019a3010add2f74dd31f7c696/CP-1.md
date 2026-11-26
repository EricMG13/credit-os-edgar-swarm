# Financial foundation for MasterBrand, Inc. (mbc-1941365), as of 2026-11-18

## Request

Financial foundation for MasterBrand, Inc. (issuer id mbc-1941365) as of 2026-11-18 under the credit snapshot pathway. It extracts the issuer's statements, debt, cash interest and leverage from the eight supplied filings and releases, on the reporting entity MasterBrand, Inc. and its consolidated subsidiaries. It builds on the source readiness findings listed below.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-29_mbc-20241229.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2024-12-29 | 2025-02-19 | 4a06d15036f2b0d16b6b3245fd33777cf4f2fe25e55c90d199c512ecef1f2c22 | Fiscal 2023 balance sheet and 2024 debt note; the date is the signature date, the filing date is not stated |
| 10-K_2025-12-28_mbc-20251228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-28 | 2026-02-13 | 780c6c4cf493983b2f3fc6aeb7f51830d982a7918879f3d055a2e053058b9641 | Fiscal 2023 to 2025 income and cash flow statements, fiscal 2024 and 2025 balance sheets, debt note, cash interest, commitments; the date is the signature date, the filing date is not stated |
| 10-Q_2026-03-29_mbc-20260329.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-29 | 2026-05-06 | 124d5274f2d21d85dd69b4fccfb176d2011b708881bca2e1e6b1177a3e1dcbd7 | First-quarter 2026 and 2025 statements, balance sheet at 2026-03-29, debt note, cash interest paid |
| 10-Q_2026-06-28_mbc-20260628.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-28 | 2026-08-05 | 2527768c2b57c2e7f67b04a2af0914ec33d817a31980006052a20aa8c9a5d11a | Second-quarter and 26-week statements, balance sheet at 2026-06-28, debt note, cash interest paid |
| 10-Q_2026-09-27_mbc-20260927.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-27 | 2026-11-06 | 24f5e6ea10b93926b12430342ee3ece2bd772d5b103b90d3b04617e021f1d273 | Third-quarter and 39-week statements, balance sheet at 2026-09-27, debt note, merger accounting, cash interest paid |
| EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl | Earnings press release for the first quarter of 2026 (Exhibit 99.1) | 2026-05-05 | c1c7687c5831826527aa879f60bcb393c0ae911e98cbdf62caf939d3bbc598f6 | EBITDA and adjusted EBITDA reconciliation for the first quarter of 2026 and 2025 |
| EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl | Earnings press release for the second quarter of 2026 (Exhibit 99.1) | 2026-08-04 | 859f5c50411d998e1076d9f74fdfcc37303daa1b7aba3647fe2a834aca93a1da | EBITDA and adjusted EBITDA reconciliation for the second quarter and 26 weeks |
| EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl | Earnings press release for the third quarter of 2026 (Exhibit 99.1) | 2026-11-05 | 29576c90ef823c04d664c8877b3afbc4429ca62f9c4b9348557845a636534eba | EBITDA and adjusted EBITDA reconciliation, net debt table with trailing adjusted EBITDA, outlook |

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness (CP-0) | 7d0b06345596a76fe8ad1c1fd6cd8e74de80abd40604d7f84a8f22d2a1ae8f21 | Source inventory, effective-source set, perimeter, gaps and readiness verdicts |

## Findings

### Bottom line

Leverage rose sharply with the American Woodmark merger: net debt of USD 1,091.1 million at 2026-09-27 is 5.16x last-twelve-months adjusted EBITDA, so creditors depend on synergy delivery and an earnings recovery the filings do not yet show.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 19; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13; calculation calc-6

The issuer's own 4.3x counts American Woodmark's earnings before the merger. On reported EBITDA of USD 66.4 million for the last twelve months leverage is 16.43x, because restructuring and acquisition costs are excluded only from the adjusted figure. Cash interest paid of USD 78.6 million is covered 2.69x by adjusted EBITDA and 0.84x by reported EBITDA. Cash of USD 139.7 million and undrawn revolver of USD 554.5 million are the liquidity cushion.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 2, 13; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19, 22; calculation calc-3; calculation calc-5; calculation calc-7

### Key findings

Net debt rose from USD 559.1 million at the end of fiscal 2023 to USD 791.2 million at the end of fiscal 2025 and USD 1,091.1 million at 2026-09-27, while reported EBITDA fell from USD 368.2 million in fiscal 2023 to USD 213.9 million in fiscal 2025. Net leverage on adjusted EBITDA was 2.65x at the end of fiscal 2025 and 5.16x on the last twelve months to 2026-09-27. The 2026 increase came from the USD 375.0 million Term Loan A that repaid American Woodmark's debt, partly offset by USD 120.0 million of net revolver repayments, and the cash paid for the business was USD 330.3 million after the cash it held.
Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74, 102; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 9, 19; calculation calc-1; calculation calc-6; calculation calc-9; calculation calc-11; calculation calc-12; calculation calc-17

The last-twelve-months figures include American Woodmark only from 2026-05-28 while net debt already carries its refinanced debt, so 5.16x and 16.43x overstate leverage against a full-perimeter reading. The issuer's 4.3x uses USD 253.9 million of combined adjusted EBITDA, of which USD 78.6 million is American Woodmark's trailing earnings before the merger, and no American Woodmark statements are supplied to verify it.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 2, 13; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 11; calculation calc-10

Cash interest paid was USD 74.4 million in fiscal 2025 and USD 78.6 million over the last twelve months, against USD 41.7 million in fiscal 2024, when the 7.00% senior notes issued in June 2024 had paid no coupon yet. Adjusted EBITDA covered cash interest 4.01x in fiscal 2025 and 2.69x over the last twelve months, and reported EBITDA covered it 2.88x and 0.84x.
Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19, 22; calculation calc-5; calculation calc-8

Operating cash flow was USD 80.2 million in the 39 weeks of 2026 against USD 108.8 million a year earlier, and free cash flow after capital expenditure of USD 36.6 million was USD 43.6 million. Payables added USD 41.0 million and all working capital items USD 19.1 million, so the cash flow leans on supplier payment timing while the 39-week net loss was USD 82.2 million.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4; calculation calc-13

Liquidity at 2026-09-27 was USD 694.2 million, cash of USD 139.7 million plus USD 554.5 million of undrawn revolver, against USD 625.2 million at the end of fiscal 2025. The next twelve months carry USD 18.8 million of Term Loan A amortization, the revolver and Term Loan A mature in June 2029 and the 7.00% senior notes in July 2032, and the letters of credit that reduce revolver availability are not stated at 2026-09-27.
Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74, 106; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 19, 22; calculation calc-14

Reported EBITDA for the 39 weeks of 2026 was USD 69.1 million against adjusted EBITDA of USD 176.5 million, a USD 107.4 million gap of restructuring, acquisition-related and purchase accounting costs that the issuer excludes. The choice of measure moves last-twelve-months net leverage from 5.16x to 16.43x, so every leverage figure here names its EBITDA.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 10; calculation calc-15

### Contrary evidence and what would change the view

The strongest contrary evidence is the issuer's combined-basis leverage of 4.3x, integration that the issuer reports as ahead of schedule, and its statement that all debt covenants were met at 2026-09-27. Trailing adjusted EBITDA moving toward the combined USD 253.9 million with net debt flat or lower would bring leverage toward 4.3x; a trailing figure below USD 211.6 million, or net debt above USD 1,091.1 million, would push it further up. The filings print no covenant ratio, so headroom is not established.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 1–2, 13; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 20–21; calculation calc-10

### Limitations

- Earnings before 2026-05-28 for American Woodmark are not in any statement supplied, so last-twelve-months ratios mix two perimeters and the issuer's combined figure cannot be checked.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 10–11; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13
- Fiscal 2025 EBITDA, the fourth quarter of 2025 and every last-twelve-months figure are derived from stated components, and fiscal 2023 adjusted EBITDA is not stated in any source supplied.
  Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13; calculation calc-9; calculation calc-16
- Debt ranking, guarantor scope and covenant definitions rest on the filings' summaries, because the credit agreement and the indenture are not supplied.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–21
- American Woodmark purchase accounting is preliminary for up to one year after closing, so acquired assets and goodwill may change.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 9–10

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-29_mbc-20241229.htm.jsonl | Annual report (Form 10-K) | Fiscal 2022 to 2024; balance sheets at 2023-12-31 and 2024-12-29 | USD | millions | MasterBrand, Inc. consolidated, before the American Woodmark merger | US GAAP | Tier 1: audited statements | Fiscal 2023 balance sheet and 2024 debt note | Fiscal 2023 was a 53-week year; older than the fiscal 2025 report for fiscal 2024 |
| 10-K_2025-12-28_mbc-20251228.htm.jsonl | Annual report (Form 10-K) | Fiscal 2023 to 2025; balance sheets at 2024-12-29 and 2025-12-28 | USD | millions | MasterBrand, Inc. consolidated, before the merger | US GAAP | Tier 1: audited statements | Annual statements, debt note, maturities, cash interest paid | Merger pending at year end; fiscal 2023 was 53 weeks |
| 10-Q_2026-03-29_mbc-20260329.htm.jsonl | Quarterly report (Form 10-Q) | 13 weeks ended 2026-03-29 and 2025-03-30; balance sheet at 2026-03-29 | USD | millions | MasterBrand, Inc. consolidated, before the merger | US GAAP | Tier 2b: unaudited | First-quarter statements, debt, cash interest paid | Unaudited; no discrete second or third quarter cash flow |
| 10-Q_2026-06-28_mbc-20260628.htm.jsonl | Quarterly report (Form 10-Q) | 13 and 26 weeks ended 2026-06-28 and 2025-06-29; balance sheet at 2026-06-28 | USD | millions | MasterBrand, Inc. consolidated; American Woodmark from 2026-05-28 | US GAAP | Tier 2b: unaudited | Second-quarter and half-year statements, merger accounting | Unaudited; purchase accounting preliminary |
| 10-Q_2026-09-27_mbc-20260927.htm.jsonl | Quarterly report (Form 10-Q) | 13 and 39 weeks ended 2026-09-27 and 2025-09-28; balance sheet at 2026-09-27 | USD | millions | MasterBrand, Inc. consolidated; American Woodmark for the full quarter | US GAAP | Tier 2b: unaudited | Latest statements, debt note, liquidity, pro forma note | Unaudited; no subsequent-events note; purchase accounting preliminary |
| EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl | Earnings press release (Exhibit 99.1) | 13 weeks ended 2026-03-29 and 2025-03-30 | USD | millions | MasterBrand, Inc. consolidated, before the merger | US GAAP with issuer non-GAAP measures | Tier 2b: unaudited issuer release | EBITDA and adjusted EBITDA for the first quarter | Non-GAAP definitions are the issuer's own |
| EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl | Earnings press release (Exhibit 99.1) | 13 and 26 weeks ended 2026-06-28 and 2025-06-29 | USD | millions | MasterBrand, Inc. consolidated; American Woodmark from 2026-05-28 | US GAAP with issuer non-GAAP measures | Tier 2b: unaudited issuer release | EBITDA and adjusted EBITDA for the second quarter and half year | Non-GAAP definitions are the issuer's own |
| EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl | Earnings press release (Exhibit 99.1) | 13 and 39 weeks ended 2026-09-27 and 2025-09-28 | USD | millions | MasterBrand, Inc. consolidated; American Woodmark for the full quarter | US GAAP with issuer non-GAAP measures | Tier 2b: unaudited issuer release | EBITDA and adjusted EBITDA, fiscal 2024 and 2025 adjusted EBITDA, net debt table | Combined trailing EBITDA includes pre-acquisition American Woodmark earnings not shown in any statement |

The sources are sufficient for the income statement, cash flow statement, balance sheet and the debt note; they carry no executed credit agreement or indenture, and no statements for American Woodmark before it joined the group.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 8–11, 19–22

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MasterBrand, Inc. | Issuer, registrant, borrower under the 2024 Credit Agreement and issuer of the 7.00% Senior Notes due 2032 | Last Sunday in December; 52 or 53 weeks; fiscal 2025 ended 2025-12-28; fiscal 2026 ends 2026-12-27 | USD | millions | MasterBrand, Inc. and its consolidated subsidiaries; American Woodmark Corporation from 2026-05-28 | US GAAP | FY2023 to FY2025; Q1 to Q3 2025; Q1 to Q3 2026; H1 and 9M 2025 and 2026 |
| American Woodmark Corporation | Acquired operating company that survived the merger as a wholly owned subsidiary | Not supplied: the supplied sources state no fiscal year end for it | USD | millions | Consolidated from 2026-05-28 | US GAAP | From 2026-05-28 only; no standalone period |
| Guarantor subsidiaries | Subsidiaries that are borrowers under or guarantors of the 2024 Credit Agreement and guarantee the notes | Not supplied: the entities are not named in the sources supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: the group of guarantors is not named | Not supplied: not stated | Not supplied: not stated |
| Restricted group | Restricted subsidiaries under the indenture | Not supplied: the indenture is not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated |

The perimeter changes on 2026-05-28, when American Woodmark joined; amounts before that date are legacy MasterBrand alone. Two events after the balance sheet date are flagged and kept out of every period figure: a separation agreement with the chief financial officer dated 2026-10-23, and duty refunds of USD 1.3 million that the third-quarter release says were received in the fourth quarter.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 8, 51; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 3

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Depreciation and amortization combined into one line | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 3 | Aggregation | Depreciation 67.9 and amortization of intangibles 25.6 for FY2025; 57.1 and 20.2 for FY2024; 49.0 and 15.3 for FY2023; 16.3 and 6.4 for Q1 2026; 16.4 and 6.4 for Q1 2025 | 93.5 for FY2025; 77.3 for FY2024; 64.3 for FY2023; 22.7 for Q1 2026; 22.8 for Q1 2025 | The second, third and half-year statements print one combined line; one basis is used in every column | FY2023 to FY2025; Q1 2025; Q1 2026 |
| EBITDA (Reported) for fiscal years calculated from components | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Derivation | Not stated for any fiscal year | 213.9 for FY2025; 319.6 for FY2024; 368.2 for FY2023 | Net income plus interest expense plus income tax plus depreciation and amortization, the earnings releases' own EBITDA definition; the interim columns use the stated release figures | FY2023 to FY2025 |
| Fourth quarter of 2025 as fiscal year less 39 weeks | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 | Derivation | No fourth-quarter 2025 statements supplied | Net sales 644.6; EBITDA (Reported) -2.7; adjusted EBITDA 35.1 | A reported fourth quarter comes first and none exists; fiscal year less nine months is labelled calculated | Q4 2025 |
| Last twelve months to three interim dates | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | Derivation | Not stated except adjusted EBITDA 211.6 to 2026-09-27 | EBITDA (Reported) 159.4, 74.0 and 66.4; adjusted EBITDA 259.1, 216.2 and 211.6; cash interest paid 70.8, 72.6 and 78.6 | Latest full year plus current year-to-date less prior-year comparable year-to-date, every component stated | 2026-03-29; 2026-06-28; 2026-09-27 |
| Cash interest paid for interim periods taken from the debt note | 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 | Source selection | Not printed in the interim cash flow statements | 29.8 (Q1 2026); 37.6 (H1 2026); 73.3 (9M 2026) | The interim statements print no interest paid line; the debt notes state it, so the note is the source | Q1 2025 to 9M 2026 |
| No currency conversion | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 | None | USD millions | USD millions | Every statement is printed in US dollars in millions; no foreign exchange rate is needed | All periods |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2022-12-26 | 2023-12-31 |
| FY2024 | 2024-01-01 | 2024-12-29 |
| FY2025 | 2024-12-30 | 2025-12-28 |
| Q1 2025 | 2024-12-30 | 2025-03-30 |
| Q2 2025 | 2025-03-31 | 2025-06-29 |
| Q3 2025 | 2025-06-30 | 2025-09-28 |
| H1 2025 | 2024-12-30 | 2025-06-29 |
| 9M 2025 | 2024-12-30 | 2025-09-28 |
| Q1 2026 | 2025-12-29 | 2026-03-29 |
| Q2 2026 | 2026-03-30 | 2026-06-28 |
| Q3 2026 | 2026-06-29 | 2026-09-27 |
| H1 2026 | 2025-12-29 | 2026-06-28 |
| 9M 2026 | 2025-12-29 | 2026-09-27 |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2025 | Q2 2025 | Q3 2025 | H1 2025 | 9M 2025 | Q1 2026 | Q2 2026 | Q3 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net sales | 2,726.2 | 2,700.4 | 2,734.7 | 660.3 | 730.9 | 698.9 | 1,391.2 | 2,090.1 | 618.0 | 815.2 | 1,036.8 | 1,433.2 | 2,470.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Cost of products sold | 1,824.8 | 1,823.4 | 1,907.1 | 458.1 | 491.2 | 480.7 | 949.3 | 1,430.0 | 461.4 | 609.7 | 781.9 | 1,071.1 | 1,853.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Gross profit | 901.4 | 877.0 | 827.6 | 202.2 | 239.7 | 218.2 | 441.9 | 660.1 | 156.6 | 205.5 | 254.9 | 362.1 | 617.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Selling, general and administrative expenses | 569.7 | 603.1 | 667.8 | 154.0 | 159.4 | 167.5 | 313.4 | 480.9 | 155.9 | 216.7 | 224.0 | 372.6 | 596.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Amortization of intangible assets | 15.3 | 20.2 | 25.6 | 6.4 | 6.4 | 6.4 | 12.8 | 19.2 | 6.4 | 7.4 | 9.8 | 13.8 | 23.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Restructuring charges | 10.1 | 18.0 | 15.2 | 4.7 | 6.6 | 2.6 | 11.3 | 13.9 | 12.8 | 9.2 | 11.1 | 22.0 | 33.1 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Operating income (loss) | 306.3 | 235.7 | 119.0 | 37.1 | 67.3 | 41.7 | 104.4 | 146.1 | -18.5 | -27.8 | 10.0 | -46.3 | -36.3 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Interest expense | 65.2 | 74.0 | 74.1 | 19.4 | 18.9 | 18.2 | 38.3 | 56.5 | 18.4 | 20.8 | 24.4 | 39.2 | 63.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Gain on sale of asset | Not supplied: the statement prints a dash for this period | -4.3 | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Other (income) expense, net | 2.4 | -2.3 | -1.4 | 0.4 | -0.6 | 0.1 | -0.2 | -0.1 | -0.8 | -0.1 | -2.0 | -0.9 | -2.9 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Income (loss) before taxes | 238.7 | 168.3 | 46.3 | 17.3 | 49.0 | 23.4 | 66.3 | 89.7 | -36.1 | -48.5 | -12.4 | -84.6 | -97.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Income tax expense (benefit) | 56.7 | 42.4 | 19.6 | 4.0 | 11.7 | 5.3 | 15.7 | 21.0 | -20.7 | 9.1 | -3.2 | -11.6 | -14.8 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Net income (loss) | 182.0 | 125.9 | 26.7 | 13.3 | 37.3 | 18.1 | 50.6 | 68.7 | -15.4 | -57.6 | -9.2 | -73.0 | -82.2 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 2; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2 |
| Depreciation and amortization | 64.3 | 77.3 | 93.5 | 22.8 | 24.2 | 23.4 | 47.0 | 70.4 | 22.7 | 34.4 | 45.4 | 57.1 | 102.5 | USD millions | Calculated: depreciation plus amortization of intangibles where the cash flow statement prints them apart | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 9 |
| EBITDA (Reported) | 368.2 | 319.6 | 213.9 | 59.5 | 92.1 | 65.0 | 151.6 | 216.6 | 5.0 | 6.7 | 57.4 | 11.7 | 69.1 | USD millions | Interim columns as stated in the earnings releases; fiscal-year columns calculated as net income plus interest expense plus income tax plus depreciation and amortization; the fiscal 2024 figure includes a gain on sale of asset of 4.3 | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 |
| EBITDA (Adjusted) | Not supplied: fiscal 2023 adjusted EBITDA is not stated in any source supplied | 363.6 | 298.2 | 67.1 | 105.4 | 90.6 | 172.5 | 263.1 | 28.0 | 62.5 | 86.0 | 90.5 | 176.5 | USD millions | Issuer-adjusted, non-GAAP: EBITDA plus restructuring, restructuring-related, acquisition-related and non-cash purchase accounting charges, less insurance recoveries; fiscal 2024 and 2025 figures appear only in the third-quarter release | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | Q1 2025 | H1 2025 | 9M 2025 | Q1 2026 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net income (loss) | 182.0 | 125.9 | 26.7 | 13.3 | 50.6 | 68.7 | -15.4 | -73.0 | -82.2 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Depreciation and amortization | 64.3 | 77.3 | 93.5 | 22.8 | 47.0 | 70.4 | 22.7 | 57.1 | 102.5 | USD millions | Calculated: depreciation plus amortization of intangibles where printed apart | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Restructuring charges, net of cash payments | -9.4 | 10.5 | -1.7 | 3.1 | 5.0 | 3.0 | 5.8 | 8.1 | 13.4 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Amortization and write-off of finance fees | 2.2 | 8.9 | 2.7 | 0.7 | 1.4 | 2.1 | 0.7 | 1.5 | 2.4 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Stock-based compensation | 17.8 | 21.9 | 16.1 | 5.1 | 10.8 | 15.2 | 4.3 | 17.0 | 25.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Provision for bad debt | 1.9 | 0.4 | 17.8 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Recognition of actuarial losses and pension settlement charges | 2.9 | 2.7 | -0.4 | 0.3 | 0.2 | 0.2 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Deferred taxes | -5.7 | 4.6 | 12.8 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Change in accounts receivable | 86.2 | 21.3 | 24.0 | -30.0 | -26.9 | -26.6 | -67.6 | -6.3 | 7.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Change in inventories | 123.6 | -10.7 | 8.0 | -12.2 | 0.2 | 4.4 | -2.8 | 7.5 | 4.8 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Change in other current assets | 2.1 | -5.7 | -22.4 | 5.9 | 0.1 | -9.7 | -17.2 | 2.6 | -2.4 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Change in accounts payable | -69.4 | 23.8 | 15.7 | -0.1 | -5.5 | -2.2 | -24.6 | 3.4 | 41.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Change in accrued expenses and other current liabilities | 17.2 | 3.4 | 3.6 | -38.0 | -23.2 | -27.5 | -39.4 | -8.1 | -23.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Other operating items | -10.1 | 7.7 | -0.7 | -2.3 | -6.3 | 10.8 | 0.5 | -4.0 | -8.3 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 405.6 | 292.0 | 195.7 | -31.4 | 53.4 | 108.8 | -133.0 | 5.8 | 80.2 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Capital expenditures | -57.3 | -80.9 | -78.2 | -9.8 | -27.9 | -43.8 | -13.2 | -23.4 | -36.6 | USD millions | Reported; cash paid, excluding unpaid capital expenditure stated in the statement footnote | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Proceeds from the disposition of assets | 0.4 | 14.6 | 3.8 | Not supplied: the statement prints a dash for this period | 3.6 | 3.7 | 0.2 | 0.3 | 0.3 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Acquisition of business, net of cash acquired | Not supplied: the statement prints a dash for this period | -514.5 | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | -330.3 | -330.3 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -56.9 | -580.8 | -74.4 | -9.8 | -24.3 | -40.1 | -13.0 | -353.4 | -366.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Proceeds from revolving credit facility borrowings | 255.0 | 470.0 | 240.0 | 95.0 | 115.0 | 150.0 | 150.0 | 150.0 | 210.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Issuance of long-term debt and Term Loan A | Not supplied: the statement prints a dash for this period | 700.0 | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | 375.0 | 375.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Repayment of revolving credit facility borrowings | -490.0 | -150.0 | -275.0 | -45.0 | -125.0 | -205.0 | -40.0 | -110.0 | -330.0 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Repayment of term loan | -37.5 | -712.5 | Not supplied: the statement prints a dash for this period | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Payment of financing fees | Not supplied: the statement prints a dash for this period | -17.8 | -1.8 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | -1.0 | -1.0 | -1.1 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Repurchase of common stock | -22.0 | -6.5 | -18.1 | -11.4 | -18.1 | -18.1 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Payments of employee taxes withheld from share-based awards | -4.0 | -11.4 | -8.3 | -4.5 | -4.6 | -4.8 | -6.7 | -7.8 | -8.7 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Other financing items | -1.4 | -2.2 | -2.5 | -0.6 | -1.3 | -1.9 | -0.7 | -1.6 | -2.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -299.9 | 269.6 | -65.7 | 33.5 | -34.0 | -79.8 | 101.6 | 404.6 | 242.6 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -1.2 | -7.9 | 6.7 | 0.2 | 4.0 | 4.9 | -1.1 | 0.7 | -0.4 | USD millions | Reported | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Net Cash Change | 47.6 | -27.1 | 62.3 | -7.5 | -0.9 | -6.2 | -45.5 | 57.7 | -44.2 | USD millions | Reported; operating plus investing plus financing plus the effect of exchange rates | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Opening Cash | 101.1 | 148.7 | 121.6 | 121.6 | 121.6 | 121.6 | 183.9 | 183.9 | 183.9 | USD millions | Reported; cash, cash equivalents and restricted cash, so the closing figure can exceed balance sheet cash | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Closing Cash | 148.7 | 121.6 | 183.9 | 114.1 | 120.7 | 115.4 | 138.4 | 241.6 | 139.7 | USD millions | Reported; cash, cash equivalents and restricted cash, so the closing figure can exceed balance sheet cash | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74–75; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 3–4; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 64.0 | 41.7 | 74.4 | 33.4 | 39.4 | 69.1 | 29.8 | 37.6 | 73.3 | USD millions | Reported in the debt note as interest paid on debt; the interim cash flow statements do not print it | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 148.7 | 120.6 | 183.3 | 138.4 | 241.6 | 139.7 | USD millions | Reported; excludes restricted cash included in other assets | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Accounts receivable, net | 203.0 | 191.0 | 150.4 | 217.7 | 247.2 | 233.4 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Inventories | 249.8 | 276.4 | 269.1 | 271.7 | 435.6 | 438.3 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Other current assets | 75.7 | 62.7 | 93.1 | 107.1 | 137.3 | 139.9 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total current assets | 677.2 | 650.7 | 695.9 | 734.9 | 1,061.7 | 951.3 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Property, plant and equipment, net | 356.6 | 481.5 | 503.1 | 494.0 | 832.6 | 811.6 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Operating lease right-of-use assets, net | 60.1 | 66.4 | 189.1 | 182.7 | 282.6 | 268.1 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Goodwill | 925.1 | 1,125.8 | 1,127.5 | 1,127.1 | 1,318.5 | 1,323.8 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Other intangible assets, net | 335.5 | 571.3 | 547.7 | 540.8 | 888.6 | 878.8 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Other assets | 27.2 | 34.1 | 37.1 | 37.2 | 95.6 | 95.6 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total Assets | 2,381.7 | 2,929.8 | 3,100.4 | 3,116.7 | 4,479.6 | 4,329.2 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Accounts payable | 151.4 | 180.7 | 203.7 | 175.1 | 249.5 | 286.9 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Current portion of long-term debt | 17.6 | Not supplied: the statement prints a dash for this period | Not supplied: the statement prints a dash for this period | Not supplied: the balance sheet prints no such line | 18.8 | 18.8 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Current operating lease liabilities | 16.1 | 19.5 | 24.3 | 24.3 | 56.3 | 56.1 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Other current liabilities | 164.3 | 195.2 | 187.7 | 154.5 | 279.1 | 268.2 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total current liabilities | 349.4 | 395.4 | 415.7 | 353.9 | 603.7 | 630.0 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Long-term debt | 690.2 | 1,007.8 | 974.5 | 1,084.9 | 1,371.5 | 1,212.0 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Deferred income taxes | 83.6 | 158.7 | 171.6 | 166.4 | 270.9 | 270.7 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Pension and other postretirement plan liabilities | 7.9 | 3.2 | 3.9 | 3.8 | Not supplied: the line is combined into other non-current liabilities in this report | Not supplied: the line is combined into other non-current liabilities in this report | USD millions | Reported; the 2026 quarterly reports combine this line with other non-current liabilities | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Operating lease liabilities | 46.3 | 55.0 | 175.2 | 171.1 | 243.2 | 231.8 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Other non-current liabilities | 10.5 | 15.0 | 14.9 | 16.1 | 21.6 | 21.1 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total Liabilities | 1,187.9 | 1,635.1 | 1,755.8 | 1,796.2 | 2,510.9 | 2,365.6 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total Equity | 1,193.8 | 1,294.7 | 1,344.6 | 1,320.5 | 1,968.7 | 1,963.6 | USD millions | Reported | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Total Debt | 707.8 | 1,007.8 | 974.5 | 1,084.9 | 1,390.3 | 1,230.8 | USD millions | Calculated: current portion of long-term debt plus long-term debt, both at carrying value net of issuance costs | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |
| Cash & Equivalents | 148.7 | 120.6 | 183.3 | 138.4 | 241.6 | 139.7 | USD millions | Reported cash and cash equivalents, excluding restricted cash | 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 78; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, pages 2–3; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 3; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term Loan A due June 2029 | Amortising term loan (delayed-draw, funded 2026-05-28) | Not supplied: the filing states no carrying value by instrument | 375.1 | 375.1 | Not applicable: term loan | Not supplied: the filing states that the 2024 Credit Agreement is secured by certain assets and guaranteed by certain subsidiaries, and does not separately state the security of Term Loan A | Not supplied: the filing states no ranking | USD | 375.1 | Not applicable | SOFR plus a margin that depends on the net leverage ratio; the margin is not stated | Floating | SOFR | Not supplied: the margin range is not stated for Term Loan A | Not supplied: no floor is stated | June 2029 | 18.8 in the next twelve months; later years Not supplied: quarterly payments of 1.25% to 1.875% of the 375.0 commitment, split not stated | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–22 |
| Revolving credit facility due June 2029 | Revolving credit facility | Not supplied: the filing states no carrying value by instrument | 165.0 | 165.0 | 750.0 | Secured: the 2024 Credit Agreement is secured by certain assets and guaranteed by certain subsidiaries | Not supplied: the filing states no ranking | USD | 165.0 | Not applicable | SOFR plus 1.625% to 2.25%, or base rate plus 0.625% to 1.25%, by net leverage; commitment fee 0.20% to 0.30% on the unused portion | Floating | SOFR or base rate | Not supplied: a range of 162.5 to 225 bps depends on net leverage, no single spread is stated | Not supplied: no floor is stated | June 2029 | 0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 20, 22 |
| 7.00% Senior Notes due 2032 | Fixed-rate senior notes | Not supplied: the filing states no carrying value by instrument | 700.0 | 700.0 | Not applicable: notes | Unsecured and unsubordinated; guaranteed on a senior unsecured basis by each subsidiary that is a borrower under or guarantor of the 2024 Credit Agreement | Not supplied: the filing states no ranking against the secured facilities | USD | 700.0 | Not applicable | 7.00% a year, paid on 15 January and 15 July | Fixed | Not applicable: fixed rate | Not applicable: fixed rate | Not applicable: fixed rate | 2032-07-15 | 0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–20 |
| Financing cost adjustment | Unamortized debt issuance costs | -9.3 | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | USD | -9.3 | Not applicable | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | Not applicable: adjustment row | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 19 |

The reporting-currency amounts and the financing cost adjustment add to 1,230.8, the balance sheet total debt at 2026-09-27.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 19; calculation calc-2

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) LTM to 2026-03-29 | LTM | USD 213.9m | USD 5.0m | USD 59.5m | USD 159.4m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Includes American Woodmark only from 2026-05-28; fiscal 2025 figure calculated from components |
| EBITDA (Adjusted) LTM to 2026-03-29 | LTM | USD 298.2m | USD 28.0m | USD 67.1m | USD 259.1m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Issuer-adjusted; includes American Woodmark only from 2026-05-28 |
| Cash interest paid LTM to 2026-03-29 | LTM | USD 74.4m | USD 29.8m | USD 33.4m | USD 70.8m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 | Interest paid on debt as stated in the debt notes |
| EBITDA (Reported) LTM to 2026-06-28 | LTM | USD 213.9m | USD 11.7m | USD 151.6m | USD 74.0m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Includes American Woodmark only from 2026-05-28; fiscal 2025 figure calculated from components |
| EBITDA (Adjusted) LTM to 2026-06-28 | LTM | USD 298.2m | USD 90.5m | USD 172.5m | USD 216.2m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Issuer-adjusted; includes American Woodmark only from 2026-05-28 |
| Cash interest paid LTM to 2026-06-28 | LTM | USD 74.4m | USD 37.6m | USD 39.4m | USD 72.6m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 | Interest paid on debt as stated in the debt notes |
| EBITDA (Reported) LTM to 2026-09-27 | LTM | USD 213.9m | USD 69.1m | USD 216.6m | USD 66.4m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Includes American Woodmark only from 2026-05-28; fiscal 2025 figure calculated from components |
| EBITDA (Adjusted) LTM to 2026-09-27 | LTM | USD 298.2m | USD 176.5m | USD 263.1m | USD 211.6m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | Issuer-adjusted; includes American Woodmark only from 2026-05-28; the release states the same 211.6 |
| Cash interest paid LTM to 2026-09-27 | LTM | USD 74.4m | USD 73.3m | USD 69.1m | USD 78.6m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18; 10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 | Interest paid on debt as stated in the debt notes |
| Net sales LTM to 2026-09-27 | LTM | USD 2,734.7m | USD 2,470.0m | USD 2,090.1m | USD 3,114.6m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4 | Includes American Woodmark only from 2026-05-28 |
| Gross profit LTM to 2026-09-27 | LTM | USD 827.6m | USD 617.0m | USD 660.1m | USD 784.5m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4 | Includes American Woodmark only from 2026-05-28 |
| Net income (loss) LTM to 2026-09-27 | LTM | USD 26.7m | USD -82.2m | USD 68.7m | USD -124.2m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4 | Includes American Woodmark only from 2026-05-28 |
| Net cash from operating activities LTM to 2026-09-27 | LTM | USD 195.7m | USD 80.2m | USD 108.8m | USD 167.1m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4 | Includes American Woodmark only from 2026-05-28 |
| Capital expenditures LTM to 2026-09-27 | LTM | USD -78.2m | USD -36.6m | USD -43.8m | USD -71.0m | Calculated | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4 | Includes American Woodmark only from 2026-05-28 |
| Net sales Q4 2025 | Q4 as fiscal year less 39 weeks | USD 2,734.7m | USD 2,090.1m | Not supplied: not used for a fourth quarter | USD 644.6m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | No fourth-quarter 2025 release or statements supplied; labelled calculated |
| EBITDA (Reported) Q4 2025 | Q4 as fiscal year less 39 weeks | USD 213.9m | USD 216.6m | Not supplied: not used for a fourth quarter | USD -2.7m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | No fourth-quarter 2025 release or statements supplied; labelled calculated |
| EBITDA (Adjusted) Q4 2025 | Q4 as fiscal year less 39 weeks | USD 298.2m | USD 263.1m | Not supplied: not used for a fourth quarter | USD 35.1m | Calculated | EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, pages 9–10; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 9–10, 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74 | No fourth-quarter 2025 release or statements supplied; labelled calculated |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 707.8 | Net debt data Gross debt | 368.2 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2023 / 2023-12-31 | USD | US$m | 1.92 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 559.1 | Net debt data Net debt | 368.2 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2023 / 2023-12-31 | USD | US$m | 1.52 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 368.2 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | 64.0 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2023 / 2023-12-31 | USD | US$m | 5.75 | Calculated | Tier 2b | Fiscal year; EBITDA calculated from statement components |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 707.8 | Net debt data Gross debt | Not supplied: fiscal 2023 adjusted EBITDA is not stated in any source supplied | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: fiscal 2023 adjusted EBITDA is not stated | Not Calculable | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 559.1 | Net debt data Net debt | Not supplied: fiscal 2023 adjusted EBITDA is not stated in any source supplied | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: fiscal 2023 adjusted EBITDA is not stated | Not Calculable | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: fiscal 2023 adjusted EBITDA is not stated in any source supplied | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | 64.0 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2023 / 2023-12-31 | USD | US$m | Not calculable: fiscal 2023 adjusted EBITDA is not stated | Not Calculable | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,007.8 | Net debt data Gross debt | 319.6 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2024 / 2024-12-29 | USD | US$m | 3.15 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 887.2 | Net debt data Net debt | 319.6 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2024 / 2024-12-29 | USD | US$m | 2.78 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 319.6 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | 41.7 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2024 / 2024-12-29 | USD | US$m | 7.66 | Calculated | Tier 2b | Fiscal 2024 cash interest paid is low because the 7.00% senior notes issued in June 2024 paid their first coupon in 2025 |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,007.8 | Net debt data Gross debt | 363.6 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2024 / 2024-12-29 | USD | US$m | 2.77 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 887.2 | Net debt data Net debt | 363.6 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2024 / 2024-12-29 | USD | US$m | 2.44 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 363.6 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | 41.7 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2024 / 2024-12-29 | USD | US$m | 8.72 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal 2024 cash interest paid is low because the 7.00% senior notes issued in June 2024 paid their first coupon in 2025 |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 974.5 | Net debt data Gross debt | 213.9 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2025 / 2025-12-28 | USD | US$m | 4.56 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 791.2 | Net debt data Net debt | 213.9 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | FY2025 / 2025-12-28 | USD | US$m | 3.70 | Calculated | Tier 1 | Fiscal year; EBITDA calculated from statement components |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 213.9 | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; T4.4 EBITDA (Reported) | 74.4 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2025 / 2025-12-28 | USD | US$m | 2.88 | Calculated | Tier 2b | Fiscal year; EBITDA calculated from statement components |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 974.5 | Net debt data Gross debt | 298.2 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2025 / 2025-12-28 | USD | US$m | 3.27 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 791.2 | Net debt data Net debt | 298.2 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | FY2025 / 2025-12-28 | USD | US$m | 2.65 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 298.2 | T4.4 EBITDA (Adjusted); EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 | 74.4 | T4.5 Cash Interest Paid; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106 | FY2025 / 2025-12-28 | USD | US$m | 4.01 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Fiscal year; EBITDA calculated from statement components |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,084.9 | Net debt data Gross debt | 159.4 | T4.8 EBITDA (Reported) LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 6.81 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 946.5 | Net debt data Net debt | 159.4 | T4.8 EBITDA (Reported) LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 5.94 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 159.4 | T4.8 EBITDA (Reported) LTM to 2026-03-29 | 70.8 | T4.8 Cash interest paid LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 2.25 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,084.9 | Net debt data Gross debt | 259.1 | T4.8 EBITDA (Adjusted) LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 4.19 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 946.5 | Net debt data Net debt | 259.1 | T4.8 EBITDA (Adjusted) LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 3.65 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 259.1 | T4.8 EBITDA (Adjusted) LTM to 2026-03-29 | 70.8 | T4.8 Cash interest paid LTM to 2026-03-29 | 2026-03-29 | USD | US$m | 3.66 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,390.3 | Net debt data Gross debt | 74.0 | T4.8 EBITDA (Reported) LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 18.79 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,148.7 | Net debt data Net debt | 74.0 | T4.8 EBITDA (Reported) LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 15.52 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 74.0 | T4.8 EBITDA (Reported) LTM to 2026-06-28 | 72.6 | T4.8 Cash interest paid LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 1.02 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,390.3 | Net debt data Gross debt | 216.2 | T4.8 EBITDA (Adjusted) LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 6.43 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,148.7 | Net debt data Net debt | 216.2 | T4.8 EBITDA (Adjusted) LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 5.31 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 216.2 | T4.8 EBITDA (Adjusted) LTM to 2026-06-28 | 72.6 | T4.8 Cash interest paid LTM to 2026-06-28 | 2026-06-28 | USD | US$m | 2.98 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,230.8 | Net debt data Gross debt | 66.4 | T4.8 EBITDA (Reported) LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 18.54 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,091.1 | Net debt data Net debt | 66.4 | T4.8 EBITDA (Reported) LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 16.43 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 66.4 | T4.8 EBITDA (Reported) LTM to 2026-09-27 | 78.6 | T4.8 Cash interest paid LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 0.84 | Calculated | Tier 2b | Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,230.8 | Net debt data Gross debt | 211.6 | T4.8 EBITDA (Adjusted) LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 5.82 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,091.1 | Net debt data Net debt | 211.6 | T4.8 EBITDA (Adjusted) LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 5.16 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 211.6 | T4.8 EBITDA (Adjusted) LTM to 2026-09-27 | 78.6 | T4.8 Cash interest paid LTM to 2026-09-27 | 2026-09-27 | USD | US$m | 2.69 | Calculated | Tier 2b | Issuer-adjusted EBITDA; Last twelve months; includes American Woodmark only from 2026-05-28 and restructuring and acquisition costs |
| Gross margin | Gross profit / Net sales | 901.4 | T4.4 Gross profit | 2,726.2 | T4.4 Net sales | FY2023 | USD | US$m | 0.3306 | Calculated | Tier 2b | Ratio, not a percentage; legacy MasterBrand |
| Gross margin | Gross profit / Net sales | 877.0 | T4.4 Gross profit | 2,700.4 | T4.4 Net sales | FY2024 | USD | US$m | 0.3248 | Calculated | Tier 2b | Ratio, not a percentage; legacy MasterBrand |
| Gross margin | Gross profit / Net sales | 827.6 | T4.4 Gross profit | 2,734.7 | T4.4 Net sales | FY2025 | USD | US$m | 0.3026 | Calculated | Tier 2b | Ratio, not a percentage; legacy MasterBrand |
| Gross margin | Gross profit / Net sales | 660.1 | T4.4 Gross profit | 2,090.1 | T4.4 Net sales | 9M 2025 | USD | US$m | 0.3158 | Calculated | Tier 2b | Ratio, not a percentage; legacy MasterBrand |
| Gross margin | Gross profit / Net sales | 617.0 | T4.4 Gross profit | 2,470.0 | T4.4 Net sales | 9M 2026 | USD | US$m | 0.2498 | Calculated | Tier 2b | Ratio, not a percentage; includes American Woodmark from 2026-05-28 |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 363.6 | T4.4 EBITDA (Adjusted) | 2,700.4 | T4.4 Net sales | FY2024 | USD | US$m | 0.1346 | Calculated | Tier 2b | Ratio, not a percentage; issuer-adjusted EBITDA; legacy MasterBrand |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 298.2 | T4.4 EBITDA (Adjusted) | 2,734.7 | T4.4 Net sales | FY2025 | USD | US$m | 0.1090 | Calculated | Tier 2b | Ratio, not a percentage; issuer-adjusted EBITDA; legacy MasterBrand |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 263.1 | T4.4 EBITDA (Adjusted) | 2,090.1 | T4.4 Net sales | 9M 2025 | USD | US$m | 0.1259 | Calculated | Tier 2b | Ratio, not a percentage; issuer-adjusted EBITDA; legacy MasterBrand |
| Adjusted EBITDA margin | EBITDA (Adjusted) / Net sales | 176.5 | T4.4 EBITDA (Adjusted) | 2,470.0 | T4.4 Net sales | 9M 2026 | USD | US$m | 0.0715 | Calculated | Tier 2b | Ratio, not a percentage; issuer-adjusted EBITDA; includes American Woodmark from 2026-05-28 |
| Capital expenditures / Net sales | Capital expenditures / Net sales | 80.9 | T4.5 Capital expenditures | 2,700.4 | T4.4 Net sales | FY2024 | USD | US$m | 0.0300 | Calculated | Tier 2b | Ratio, not a percentage; cash paid for capital expenditures |
| Capital expenditures / Net sales | Capital expenditures / Net sales | 78.2 | T4.5 Capital expenditures | 2,734.7 | T4.4 Net sales | FY2025 | USD | US$m | 0.0286 | Calculated | Tier 2b | Ratio, not a percentage; cash paid for capital expenditures |
| Capital expenditures / Net sales | Capital expenditures / Net sales | 36.6 | T4.5 Capital expenditures | 2,470.0 | T4.4 Net sales | 9M 2026 | USD | US$m | 0.0148 | Calculated | Tier 2b | Ratio, not a percentage; cash paid for capital expenditures |
| Net sales growth | FY2025 Net sales / FY2024 Net sales - 1 | 2,734.7 | T4.4 Net sales FY2025 | 2,700.4 | T4.4 Net sales FY2024 | FY2025 | USD | US$m | 0.0127 | Calculated | Tier 2b | Growth as a ratio, not a percentage; legacy MasterBrand |
| Net sales growth | 9M 2026 Net sales / 9M 2025 Net sales - 1 | 2,470.0 | T4.4 Net sales 9M 2026 | 2,090.1 | T4.4 Net sales 9M 2025 | 9M 2026 | USD | US$m | 0.1818 | Calculated | Tier 2b | Growth as a ratio, not a percentage; includes American Woodmark from 2026-05-28, so it is not organic |
| Free cash flow | Net Cash from Operating Activities - Capital expenditures | 292.0 | T4.5 Net Cash from Operating Activities | 80.9 | T4.5 Capital expenditures | FY2024 | USD | US$m | 211.1 | Calculated | Tier 2b | Levered, after working capital, before dividends and acquisitions |
| Free cash flow | Net Cash from Operating Activities - Capital expenditures | 195.7 | T4.5 Net Cash from Operating Activities | 78.2 | T4.5 Capital expenditures | FY2025 | USD | US$m | 117.5 | Calculated | Tier 2b | Levered, after working capital, before dividends and acquisitions |
| Free cash flow | Net Cash from Operating Activities - Capital expenditures | 80.2 | T4.5 Net Cash from Operating Activities | 36.6 | T4.5 Capital expenditures | 9M 2026 | USD | US$m | 43.6 | Calculated | Tier 2b | Levered, after working capital, before dividends and acquisitions |

### T4.10 KPI dashboard

| KPI Category | Metric Name | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- |
| Margin | Gross profit margin as reported, percent | 31.6 | 25.0 | Down | Issuer-reported for the 39 weeks; 9M 2026 includes American Woodmark's lower gross margin from 2026-05-28 |
| Margin | Adjusted EBITDA margin as reported, percent | 12.6 | 7.1 | Down | Lower volume, unfavorable fixed cost leverage and mix, partly offset by the acquired business and duty refunds |
| Margin | Net income (loss) margin as reported, percent | 3.3 | -3.3 | Down | Net loss in the 39 weeks of 2026 against net income a year earlier |
| Cash flow | Free cash flow as reported, USD millions | 65.0 | 43.6 | Down | Operating cash flow less capital expenditure, as the issuer defines free cash flow |
| Leverage | Net debt to adjusted EBITDA as reported, times | 2.5 | 4.3 | Up | The 2026 figure includes American Woodmark's pre-acquisition trailing adjusted EBITDA; the 2025 figure is at 2025-09-28 |
| Integration | Cost synergies realised to date, USD millions | Not supplied: not applicable before the merger | 11 | Not applicable | Issuer-reported as of 2026-09-27; an annual run-rate target of over 100 by the end of year three is stated |

Margins, free cash flow and the leverage ratio in this dashboard are the issuer's own printed figures, labelled as reported.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 1–2, 10, 13

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net debt / EBITDA | Gross debt less cash over last-twelve-months reported EBITDA of the same perimeter | Net debt over trailing adjusted EBITDA including American Woodmark's pre-acquisition trailing twelve months; 4.3x on combined 253.9, being legacy 175.3 plus 78.6 | Four figures for one position at 2026-09-27: 4.3x issuer combined adjusted (third-quarter release); 5.16x as-reported adjusted on 211.6; 16.43x as-reported EBITDA on 66.4; the credit agreement's covenant ratio is not stated | 2026-06-28; 2026-09-27 | High: the reading ranges from 4.3x to 16.43x | Fundamental credit; Downside; Liquidity | Quote every figure with its EBITDA and perimeter; use the as-reported basis for trend and the issuer's combined figure only as the issuer's own |
| EBITDA | Reported EBITDA is net income plus interest, tax, depreciation and amortization | Adjusted EBITDA adds restructuring, restructuring-related, acquisition-related and purchase accounting charges and deducts insurance recoveries | Reported 69.1 against adjusted 176.5 for 9M 2026; 213.9 against 298.2 for FY2025 | FY2025; 9M 2026 | High: 107.4 of add-backs in 9M 2026 | Fundamental credit; Earnings quality | Show both rows; reported is the primary denominator, adjusted is labelled |
| Total debt | Balance sheet carrying value, current plus long-term, net of issuance costs | Total debt 1,230.8 in the release, equal to carrying value | Carrying value 1,230.8 against principal 1,240.1; difference 9.3 of issuance costs; Term Loan A parts add to 375.1 against 375.0 drawn | 2026-09-27 | Low | Financial foundation | Carrying value used; principal logged in the debt reconciliation |
| Cash interest | Interest paid in cash, not interest expense | Interest paid on debt, stated in the debt note | FY2024 paid 41.7 against expense 74.0, because the senior notes issued in June 2024 paid their first coupon in 2025; 39 weeks of 2026 paid 73.3 against expense 63.6 | FY2024; 9M 2026 | Medium | Fundamental credit | Cash interest paid is the cover denominator; read FY2024 cover with care |
| Lease liabilities | Not added to total debt when the balance sheet shows them on separate lines | Operating lease liabilities shown on their own lines: 56.1 current and 231.8 non-current at 2026-09-27 | Left outside Total Debt | 2026-09-27 | Medium: 287.9 of lease liabilities sit outside debt | Fundamental credit | Total debt excludes operating lease liabilities |
| Perimeter | One perimeter for every period | American Woodmark consolidated from 2026-05-28 | 2026 quarters and last-twelve-months ratios mix legacy and combined perimeters; a pro forma note exists only for net sales and net income | Q2 2026 to 9M 2026 | High | Fundamental credit; Downside | No pro forma EBITDA is built; the issuer's combined figure is shown as the issuer's own |
| Balance sheet comparatives | Year-end comparison | The third-quarter release compares with 2025-09-28; the quarterly report compares with 2025-12-28 | Amounts at 2026-09-27 agree in both | 2026-09-27 | Low | Financial foundation | Year-end columns come from the quarterly reports |
| Fiscal year length | Comparable periods | Fiscal 2023 had 53 weeks; fiscal 2024, 2025 and 2026 have 52 | Fiscal 2023 amounts cover one more week | FY2023 | Low | Fundamental credit | Not adjusted; flagged |
| Pension and other postretirement liabilities | Shown apart where material | Combined into other non-current liabilities in the 2026 quarterly reports | At 2025-12-28 the annual report shows 3.9 and 14.9; the quarterly reports show 18.8 combined | 2025-12-28; 2026 quarters | Low | Financial foundation | Kept as printed; the line is a stated gap in the 2026 columns |
| Cash and cash equivalents | Cash excluding restricted cash | Cash flow statement closing cash includes restricted cash | Closing cash 183.9 against balance sheet cash 183.3 at 2025-12-28 | FY2025 | Low | Financial foundation | Net debt uses balance sheet cash |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Historical statements and debt at carrying value | Ready with Limitations | Preliminary purchase accounting; perimeter changes on 2026-05-28; fiscal 2023 is a 53-week year | None needed beyond reading later quarterly reports |
| Leverage and cover on as-reported EBITDA | Ready with Limitations | Last-twelve-months figures mix perimeters; reported EBITDA carries restructuring and acquisition costs | Read with the adjusted rows beside them |
| Combined-company leverage | Not Ready | No American Woodmark statements; the issuer's combined 4.3x cannot be checked | Obtain American Woodmark's own filings |
| Covenant compliance reading | Not Ready | No credit agreement; the covenant ratio is not printed; the issuer says covenants were met | Obtain the credit agreement and compliance certificate |
| Liquidity reading | Ready with Limitations | Letters of credit under the revolver not stated at 2026-09-27 | Obtain letter-of-credit usage |
| Debt ranking, security and guarantees | Not Ready | No source states legal ranking; no indenture or credit agreement | Obtain the indenture and credit agreement |
| Cash flow quality | Ready with Limitations | Interim cash flows are year-to-date only; payables timing drives part of the cash flow | Read year-to-date figures against the same period of 2025 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 1.92 | 1.52 | x | Fiscal year, reported EBITDA, balance sheet carrying value of debt |
| FY2024 / 2024-12-29 | 3.15 | 2.78 | x | Fiscal year, reported EBITDA, balance sheet carrying value of debt |
| FY2025 / 2025-12-28 | 4.56 | 3.70 | x | Fiscal year, reported EBITDA, balance sheet carrying value of debt |
| 2026-03-29 | 6.81 | 5.94 | x | Reported EBITDA for the last twelve months, carrying value of debt; before the merger |
| 2026-06-28 | 18.79 | 15.52 | x | Reported EBITDA for the last twelve months, carrying value of debt; includes American Woodmark only from 2026-05-28 |
| 2026-09-27 | 18.54 | 16.43 | x | Reported EBITDA for the last twelve months, carrying value of debt; includes American Woodmark only from 2026-05-28 |

Reported EBITDA includes restructuring and acquisition costs, and the 2026 rows pair debt that includes the acquisition with earnings that include the acquired business only from 2026-05-28.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13; calculation calc-7

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 5.75 | x | Fiscal year, reported EBITDA over interest paid in cash |
| FY2024 / 2024-12-29 | 7.66 | x | Fiscal year, reported EBITDA over interest paid in cash; fiscal 2024 interest paid is low because the senior notes paid their first coupon in 2025 |
| FY2025 / 2025-12-28 | 2.88 | x | Fiscal year, reported EBITDA over interest paid in cash |
| 2026-03-29 | 2.25 | x | Last twelve months, reported EBITDA over interest paid in cash; includes American Woodmark only from 2026-05-28 |
| 2026-06-28 | 1.02 | x | Last twelve months, reported EBITDA over interest paid in cash; includes American Woodmark only from 2026-05-28 |
| 2026-09-27 | 0.84 | x | Last twelve months, reported EBITDA over interest paid in cash; includes American Woodmark only from 2026-05-28 |

Cash interest paid, not interest expense, is the denominator, and fiscal 2024 flatters cover.
Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22; calculation calc-8

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 148.7 | Not supplied: the revolver availability at 2023-12-31 is not stated in the sources supplied | US$m | Cash and cash equivalents; the revolving credit facility of that date is not stated |
| FY2024 / 2024-12-29 | 120.6 | 405.4 | US$m | Cash and cash equivalents; undrawn is stated availability under the USD 750.0 million revolver after drawings and letters of credit (10-K_2024-12-29_mbc-20241229.htm.jsonl, page 115) |
| FY2025 / 2025-12-28 | 183.3 | 441.9 | US$m | Cash and cash equivalents; undrawn is stated availability under the USD 750.0 million revolver after drawings and letters of credit (10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106) |
| 2026-03-29 | 138.4 | 332.3 | US$m | Cash and cash equivalents; undrawn is stated availability under the USD 750.0 million revolver after drawings and letters of credit (10-Q_2026-03-29_mbc-20260329.htm.jsonl, page 18) |
| 2026-06-28 | 241.6 | 393.9 | US$m | Cash and cash equivalents; undrawn is stated availability under the USD 750.0 million revolver after drawings and letters of credit (10-Q_2026-06-28_mbc-20260628.htm.jsonl, page 21) |
| 2026-09-27 | 139.7 | 554.5 | US$m | Cash and cash equivalents; undrawn is stated availability under the USD 750.0 million revolver after drawings and letters of credit (10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22) |

Undrawn committed facilities are the issuer's stated revolver availability, which is net of letters of credit and subject to the credit agreement's conditions.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 20, 22

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| Within 12 months of 2026-09-27 | 18.8 | US$m | Term Loan A current portion at 2026-09-27 |
| After 12 months to June 2029 (Term Loan A) | 356.3 | US$m | Term Loan A long-term portion, due by June 2029 in quarterly payments and a final payment; the split is not stated |
| June 2029 (revolving credit facility) | 165.0 | US$m | Drawn balance of the USD 750.0 million revolver |
| July 2032 (7.00% Senior Notes) | 700.0 | US$m | Principal of the senior notes |

The rows are contractual principal at 2026-09-27, not carrying value, and the Term Loan A payments after the first twelve months are not split by year in the filings.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–22; calculation calc-2

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-09-27 | Unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| Net sales | 2,700.4 | 2,734.7 | 3,114.6 | US$m | Last twelve months is calculated; includes American Woodmark from 2026-05-28 |
| Gross profit | 877.0 | 827.6 | 784.5 | US$m | Last twelve months is calculated |
| EBITDA (Reported) | 319.6 | 213.9 | 66.4 | US$m | Fiscal years calculated from statement components; last twelve months calculated |
| EBITDA (Adjusted) | 363.6 | 298.2 | 211.6 | US$m | Issuer-adjusted; the last-twelve-months figure is the one the third-quarter release states |
| Net income (loss) | 125.9 | 26.7 | -124.2 | US$m | Last twelve months is calculated |
| Net cash from operating activities | 292.0 | 195.7 | 167.1 | US$m | Last twelve months is calculated |
| Capital expenditures | -80.9 | -78.2 | -71.0 | US$m | Cash paid; last twelve months is calculated |
| Free cash flow | 211.1 | 117.5 | 96.1 | US$m | Operating cash flow less capital expenditures, calculated |
| Cash interest paid | 41.7 | 74.4 | 78.6 | US$m | Interest paid on debt from the debt note |
| Total debt | 1,007.8 | 974.5 | 1,230.8 | US$m | Carrying value at the period end |
| Cash and cash equivalents | 120.6 | 183.3 | 139.7 | US$m | At the period end |
| Net debt | 887.2 | 791.2 | 1,091.1 | US$m | Total debt less cash and cash equivalents at the period end |
| Net debt / EBITDA (Reported) | 2.78 | 3.70 | 16.43 | x | Last-twelve-months column mixes perimeters |
| Net debt / EBITDA (Adjusted) | 2.44 | 2.65 | 5.16 | x | Issuer-adjusted EBITDA; the issuer's combined basis states 4.3x |
| EBITDA (Reported) / cash interest | 7.66 | 2.88 | 0.84 | x | Fiscal 2024 cash interest is low |
| EBITDA (Adjusted) / cash interest | 8.72 | 4.01 | 2.69 | x | Issuer-adjusted EBITDA |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-12-31 | 707.8 | 148.7 | 559.1 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 712.5 (term loan 712.5 less issuance costs 4.7); cash excludes restricted cash |
| FY2024 / 2024-12-29 | 1,007.8 | 120.6 | 887.2 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 1,020.0 (revolver 320.0 and notes 700.0 less issuance costs 12.2); cash excludes restricted cash |
| FY2025 / 2025-12-28 | 974.5 | 183.3 | 791.2 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 985.0 (revolver 285.0 and notes 700.0 less issuance costs 10.5); cash excludes restricted cash |
| 2026-03-29 | 1,084.9 | 138.4 | 946.5 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 1,095.0 (revolver 395.0 and notes 700.0 less issuance costs 10.1); cash excludes restricted cash |
| 2026-06-28 | 1,390.3 | 241.6 | 1,148.7 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 1,400.0 (Term Loan A 375.0, revolver 325.0 and notes 700.0 less issuance costs 9.7); cash excludes restricted cash |
| 2026-09-27 | 1,230.8 | 139.7 | 1,091.1 | US$m | Gross debt is balance sheet carrying value, current plus long-term, net of issuance costs, with no leases or securitization inside it; principal 1,240.1 (Term Loan A 375.1, revolver 165.0 and notes 700.0 less issuance costs 9.3); cash excludes restricted cash |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-27 | 1,240.1 | -9.3 | 1,230.8 | US$m | Principal is the sum of the maturity rows; the reconciling item is unamortized debt issuance costs of 9.3 and nothing else; no debt is left out of the ladder; Term Loan A is carried at 375.1 against 375.0 drawn |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| None found in the sources read | — | — | — | — | US$m | The quarterly report for 2026-09-27 and the three earnings releases state no debt issue, repayment, acquisition, disposal or dividend after 2026-09-27; the release mentions duty refunds of 1.3 in the fourth quarter, an operating receipt with no stated date, and a chief financial officer separation dated 2026-10-23 with no amount |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| Q1 2025 | 660.3 | 67.1 | US$m | Issuer-adjusted EBITDA for the 13 weeks; legacy MasterBrand |
| Q2 2025 | 730.9 | 105.4 | US$m | Issuer-adjusted EBITDA for the 13 weeks; legacy MasterBrand |
| Q3 2025 | 698.9 | 90.6 | US$m | Issuer-adjusted EBITDA for the 13 weeks; legacy MasterBrand |
| Q4 2025 | 644.6 | 35.1 | US$m | Calculated as fiscal 2025 less the 39 weeks; issuer-adjusted EBITDA; legacy MasterBrand |
| Q1 2026 | 618.0 | 28.0 | US$m | Issuer-adjusted EBITDA for the 13 weeks; legacy MasterBrand |
| Q2 2026 | 815.2 | 62.5 | US$m | Issuer-adjusted EBITDA for the 13 weeks; American Woodmark included from 2026-05-28 |
| Q3 2026 | 1,036.8 | 86.0 | US$m | Issuer-adjusted EBITDA for the 13 weeks; American Woodmark included for the full quarter |

The 2026 quarters after the merger include American Woodmark, so growth against 2025 is not organic.
Basis: EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, page 9; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 9; calculation calc-16

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: no source states the legal ranking of the facilities and the notes | Not supplied: the credit agreement and the indenture are not supplied | Not supplied: ranking not stated | Not supplied: the amounts are in the debt instruments register | Not supplied: needs a stated ranking | US$m | The filings describe the credit facilities as secured by certain assets and the senior notes as unsecured and unsubordinated, but state no legal rank between them; the facilities are left out and named under Gaps |

No facility is drawn because no source states a legal rank, and the amounts are in the debt instruments register.
Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–20

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), 39 weeks 2026 | 69.1 | US$m | Reported EBITDA, the opening measure; net loss -82.2 plus interest 63.6, tax -14.8 and depreciation and amortization 102.5 |
| Restructuring charges | 33.1 | US$m | Restructuring; realisation not stated |
| Restructuring-related charges | 17.2 | US$m | Restructuring; realisation not stated |
| Acquisition-related costs | 48.4 | US$m | Transaction costs; realisation not stated |
| Non-cash purchase accounting adjustments | 9.2 | US$m | Other stated: inventory fair value step-up and lease asset amortization; realisation not stated |
| Insurance (recoveries) costs | -0.5 | US$m | Other stated; realisation not stated |
| EBITDA (Adjusted), 39 weeks 2026 | 176.5 | US$m | Issuer-adjusted EBITDA, the closing measure; steps are the issuer's own and add exactly |

The bridge covers the 39 weeks to 2026-09-27 only, because the sources give add-back detail for fiscal 2025 as a total.
Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 10–12; calculation calc-15

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 16 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

## Calculations

Amounts are in USD million unless a row says otherwise; ratios are in times and printed to two decimal places.

| Calculation ID | Item | Inputs | Result | Check against the source | Source |
| --- | --- | --- | --- | --- | --- |
| calc-1 | Net debt at six balance sheet dates | Gross debt less cash: 707.8 - 148.7; 1,007.8 - 120.6; 974.5 - 183.3; 1,084.9 - 138.4; 1,390.3 - 241.6; 1,230.8 - 139.7 | 559.1; 887.2; 791.2; 946.5; 1,148.7; 1,091.1 | The first-quarter, second-quarter and third-quarter releases state 946.5, 1,148.7 and 1,091.1; differences 0.0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3; EX-99.1_2026-05-05_q12026earningspressrelease.htm.jsonl, page 2; EX-99.1_2026-08-04_q22026earningspressrelease.htm.jsonl, page 3; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 2 |
| calc-2 | Debt principal to carrying value at 2026-09-27 | Term Loan A 18.8 + 356.3; revolver 165.0; notes 700.0; unamortized issuance costs 9.3 | Principal 18.8 + 356.3 + 165.0 + 700.0 = 1,240.1; carrying value 1,240.1 - 9.3 = 1,230.8 | Balance sheet current debt 18.8 + long-term debt 1,212.0 = 1,230.8; difference 0.0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 19 |
| calc-3 | Last-twelve-months reported EBITDA to 2026-09-27 | Fiscal 2025 213.9 + 39 weeks 2026 69.1 - 39 weeks 2025 216.6 | 213.9 + 69.1 - 216.6 = 66.4 | Calculated; components stated or calculated in the income statement table | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 10 |
| calc-4 | Last-twelve-months adjusted EBITDA to 2026-09-27 | Fiscal 2025 298.2 + 39 weeks 2026 176.5 - 39 weeks 2025 263.1 | 298.2 + 176.5 - 263.1 = 211.6 | The third-quarter release states 211.6; difference 0.0 | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 10, 13 |
| calc-5 | Last-twelve-months cash interest paid to 2026-09-27 | Fiscal 2025 74.4 + 39 weeks 2026 73.3 - 39 weeks 2025 69.1 | 74.4 + 73.3 - 69.1 = 78.6 | Interest paid on debt from the debt notes | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 |
| calc-6 | Net debt to last-twelve-months adjusted EBITDA at 2026-09-27 | Net debt 1,091.1; adjusted EBITDA 211.6 | 1,091.1 / 211.6 = 5.16; gross 1,230.8 / 211.6 = 5.82 | Issuer states 4.3x on a combined basis, not comparable | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 |
| calc-7 | Net debt and gross debt to last-twelve-months reported EBITDA at 2026-09-27 | Net debt 1,091.1; gross debt 1,230.8; reported EBITDA 66.4 | 1,091.1 / 66.4 = 16.43; 1,230.8 / 66.4 = 18.54 | Not comparable with the issuer's measure | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 |
| calc-8 | Cover to 2026-09-27 and fiscal 2025 | Adjusted EBITDA 211.6 and 298.2; reported EBITDA 66.4 and 213.9; cash interest paid 78.6 and 74.4 | 211.6 / 78.6 = 2.69; 66.4 / 78.6 = 0.84; 298.2 / 74.4 = 4.01; 213.9 / 74.4 = 2.88 | Cash interest paid is the denominator, as the method requires | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 106; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22 |
| calc-9 | Fiscal year reported EBITDA | Net income, interest expense, income tax, depreciation and amortization of intangibles: FY2025 26.7, 74.1, 19.6, 67.9, 25.6; FY2024 125.9, 74.0, 42.4, 57.1, 20.2; FY2023 182.0, 65.2, 56.7, 49.0, 15.3 | FY2025 26.7 + 74.1 + 19.6 + 67.9 + 25.6 = 213.9; FY2024 125.9 + 74.0 + 42.4 + 57.1 + 20.2 = 319.6; FY2023 182.0 + 65.2 + 56.7 + 49.0 + 15.3 = 368.2 | The releases define EBITDA the same way and the 39 weeks of 2025 agree at 216.6 (68.7 + 56.5 + 21.0 + 70.4) | 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–74; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 10 |
| calc-10 | Issuer's combined adjusted EBITDA | Legacy 175.3; American Woodmark pre-acquisition trailing twelve months 78.6; net debt 1,091.1 | 175.3 + 78.6 = 253.9; 1,091.1 / 253.9 = 4.30 | Issuer states 253.9 and 4.3x; the 78.6 has no statement behind it in the sources | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13 |
| calc-11 | Net debt movement from 2025-12-28 to 2026-09-27 | Net debt 1,091.1 less 791.2; Term Loan A 375.1; net revolver repayments 330.0 - 210.0 = 120.0; issuance costs 10.5 - 9.3 = 1.2; cash 183.3 - 139.7 = 43.6 | 1,091.1 - 791.2 = 299.9; debt 375.1 - 120.0 + 1.2 = 256.3, plus the fall in cash 43.6 = 299.9 | Both routes give 299.9; difference 0.0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 19; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74, 102 |
| calc-12 | Cash paid for the acquisition | Settlement of American Woodmark debt 367.5; cash acquired 37.2 | 367.5 - 37.2 = 330.3 | Cash flow statement shows 330.3 net of cash acquired; difference 0.0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 9–10 |
| calc-13 | Working capital items and free cash flow in the 39 weeks of 2026 | Receivables 7.6; inventories 4.8; other current assets -2.4; payables 41.0; accrued -23.6; other -8.3; operating cash flow 80.2; capital expenditures 36.6 | 7.6 + 4.8 - 2.4 + 41.0 - 23.6 - 8.3 = 19.1; 80.2 - 36.6 = 43.6 | The release states free cash flow 43.6; difference 0.0 | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 3 |
| calc-14 | Liquidity | Cash 139.7 and undrawn revolver 554.5 at 2026-09-27; cash 183.3 and undrawn 441.9 at 2025-12-28 | 139.7 + 554.5 = 694.2; 183.3 + 441.9 = 625.2 | Availability is stated net of drawings and letters of credit | 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 3, 22; 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 74, 106 |
| calc-15 | Adjusted EBITDA add-backs for the 39 weeks of 2026 | Restructuring 33.1; restructuring-related 17.2; acquisition-related 48.4; purchase accounting 9.2; insurance -0.5 | 33.1 + 17.2 + 48.4 + 9.2 - 0.5 = 107.4; 69.1 + 107.4 = 176.5 | Adjusted less reported 176.5 - 69.1 = 107.4; difference 0.0 | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 10 |
| calc-16 | Fourth quarter of 2025 derived | Net sales 2,734.7 less 2,090.1; reported EBITDA 213.9 less 216.6; adjusted EBITDA 298.2 less 263.1 | 644.6; -2.7; 35.1 | Derived; no fourth-quarter release supplied | 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 2; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, pages 10, 13 |
| calc-17 | Net debt to adjusted and reported EBITDA at the end of fiscal 2025 | Net debt 791.2; adjusted EBITDA 298.2; reported EBITDA 213.9 | 791.2 / 298.2 = 2.65; 791.2 / 213.9 = 3.70 | Fiscal year ratios; no interim stub | EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13; 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 74 |

## Gaps

- Fiscal 2023 adjusted EBITDA is not stated in any source supplied, so the three adjusted ratios for fiscal 2023 are not calculable; severity Low; the fiscal 2023 earnings release would close it.
  Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13
- The revolver availability at 2023-12-31 is not stated, so fiscal 2023 undrawn committed facilities and liquidity are missing; severity Low; the fiscal 2023 annual report would close it.
  Basis: 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 115
- Statement cells show a stated gap where the source prints a dash or no line, namely gain on sale of asset, provision for bad debt, deferred taxes, pension settlement, disposals, acquisitions, term debt issuance and repayment, financing fees, share repurchases and the current portion of debt; they restrict nothing because no amount is stated; severity Low.
  Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, pages 73–75; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 2–4
- The pension and other postretirement liability line is combined into other non-current liabilities in the second and third 2026 quarterly reports, so that line is a gap in those two columns; severity Low.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3
- Statements for American Woodmark before 2026-05-28 are not supplied, so last-twelve-months EBITDA, leverage and cover mix perimeters, and the issuer's USD 78.6 million of pre-acquisition earnings cannot be checked; severity High; American Woodmark's own filings would close it.
  Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 13; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 11
- The credit agreement and the indenture are not supplied, so legal ranking, guarantor names, floors, margins for Term Loan A and covenant definitions are not stated and the debt stack is empty; severity High; the executed documents would close it.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 19–22
- The covenant net leverage ratio the issuer reports to its lenders is not printed, and the issuer's 4.3x is on a different basis, so covenant headroom is not calculable; severity High; the compliance certificate would close it.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 20–21; EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 2
- Letters of credit outstanding under the revolver at 2026-09-27 are not stated, so availability cannot be split between drawings and letters of credit; severity Medium; the facility usage report would close it.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 22
- Instrument-level carrying values are not disclosed, so the debt instruments register carries principal and one financing cost adjustment of 9.3; Term Loan A parts add to 375.1 against 375.0 drawn, a 0.1 difference the filing does not explain; severity Low.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 9, 19
- The fair-value paragraph compares fair value with a carrying value of 1,221.3 that excludes the 18.8 current portion although it says it includes current maturities; severity Low; the debt table and balance sheet are used instead.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 19
- No fourth-quarter 2025 release or statements are supplied, so the fourth quarter of 2025 is calculated as fiscal 2025 less the 39 weeks; severity Low.
  Basis: 10-K_2025-12-28_mbc-20251228.htm.jsonl, page 73
- The interim cash flow statements print no interest paid line and no discrete second or third quarter cash flows, so interim cash interest comes from the debt notes and cash flows are year to date; severity Low.
  Basis: 10-Q_2026-06-28_mbc-20260628.htm.jsonl, pages 3–4, 21
- American Woodmark purchase accounting is preliminary for up to one year, so acquired balances may change; severity Medium; later quarterly reports would close it.
  Basis: 10-Q_2026-09-27_mbc-20260927.htm.jsonl, pages 9–10
- The third-quarter release compares its balance sheet with 2025-09-28 while the quarterly report compares with 2025-12-28, so year-end figures come from the quarterly report; severity Low.
  Basis: EX-99.1_2026-11-05_q32026earningspressrelease.htm.jsonl, page 12; 10-Q_2026-09-27_mbc-20260927.htm.jsonl, page 3
- Fiscal 2022 and earlier statements exist in the older annual report but are not extracted, so history starts at fiscal 2023; severity Low.
  Basis: 10-K_2024-12-29_mbc-20241229.htm.jsonl, page 77

## Next module

The orchestrator selects the next module.
