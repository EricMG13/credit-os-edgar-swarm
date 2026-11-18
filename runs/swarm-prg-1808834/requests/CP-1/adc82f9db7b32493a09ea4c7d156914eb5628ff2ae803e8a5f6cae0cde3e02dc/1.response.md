---
module_id: CP-1
module_name: Financial foundation
issuer_id: prg-1808834
issuer_name: PROG Holdings, Inc.
analysis_date: 2026-11-18
module_status: Complete
---

# Financial foundation: PROG Holdings, Inc.

## Request

Financial foundation for PROG Holdings, Inc. (issuer prg-1808834), as of 2026-11-18, on the credit snapshot pathway. Scope: normalised statements, debt, liquidity and credit metrics for FY2024, FY2025 and the latest quarter ended 2026-09-30, from the supplied filings and earnings supplements.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_prg-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-19 | bb0713895e4cd65bb4f61bcf6a8bbefaf957bd9bdccf041094037d3b0756173a | FY2024 as originally reported, used to size the perimeter change from the discontinued Vive business |
| 10-K_2025-12-31_prg-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-18 | 43696e0412932e198d68eb29cd6fc426ec1f509d5acbc8a6c20f289c6ae9ba90 | FY2024 and FY2025 statements, debt note, covenants, segment depreciation, cash reconciliation |
| 10-Q_2026-03-31_prg-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 | d69e50080a94f37c92adfff5bf60505ef861d875465e58daa224b87e3bd35558 | Read for the credit facility description only; no 2026 first-quarter figure is used in a statement column |
| 10-Q_2026-06-30_prg-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 | 761a8b8605c7eb75d013e764ecf91a6f3654b4df74a7d66c5849d8abf76f9948 | Read for the credit facility description only; no 2026 second-quarter figure is used in a statement column |
| 10-Q_2026-09-30_prg-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-28 | 01c09edb5e69e3590223eccf26e6a6aed70ea2f7a1ff1e27fdf8cd6a94ab472f | Nine-month and third-quarter statements, balance sheet at 2026-09-30, debt note, maturities, covenants, acquisition, subsequent events |
| EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl | Earnings supplement presentation for the first quarter of 2026 (Exhibit 99.2) | 2026-04-29 | 953aa9345885f3ec580cacd32178c47ae8bc8190e8170e08ff72d0c8ba481009 | Company adjusted EBITDA for Q1 2025 and Q1 2026, net leverage at 2026-03-31 |
| EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl | Earnings supplement presentation for the second quarter of 2026 (Exhibit 99.2) | 2026-07-29 | d8b979c8ef29ce2214d37310135ed78fac399b967fe8e7ec7c1e06e3cf588a3e | Company adjusted EBITDA for Q2 2025 and Q2 2026, net leverage at 2026-06-30 |
| EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl | Earnings supplement presentation for the third quarter of 2026 (Exhibit 99.3) | 2026-10-28 | d76be93d472b42729dc5e10149c503bbae3814f63938c03123ad56c5d79d9f66 | Company adjusted EBITDA for Q3 2025, Q4 2025 and Q3 2026, net leverage definition and value, operating cash flow from continuing operations |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | d3f74393f88729bc8e6d05fa278852f8922d8a828710ce1f3334269169f92c1e | Source limits: no executed legal documents, the revolver secured or unsecured conflict, unreadable supplement tables |

## Findings

### Bottom line

Leverage rose sharply after the Purchasing Power acquisition: reported net debt was 2.73x LTM EBITDA at September 30, 2026, against 1.24x at the end of 2025, and creditors now share the group with USD 272.0 million of non-recourse asset-backed debt.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C15; calculation C16

The USD 600.0 million of unsecured notes are the recourse claim, and on the company recourse-only definition leverage is 1.5x, so the reported and company figures describe different perimeters and covenant headroom is not established. If the announced USD 100.0 million share repurchase goes ahead, reported net leverage would be 3.09x as of the October 28, 2026 announcement.
Basis: EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 25; calculation C21; calculation C23

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2.91 | 2.50 | x | Reported EBITDA derived from the statements (operating profit plus depreciation and amortization excluding lease merchandise depreciation); debt at carrying value |
| FY2025 / 2025-12-31 | 2.58 | 1.24 | x | Same basis; recast comparative for Vive discontinued operations |
| 2026-09-30 | 3.12 | 2.73 | x | Last-twelve-months reported EBITDA; debt includes USD 272.0 million of non-recourse asset-backed principal at carrying value 270.006 |

The 2026-09-30 ratios put non-recourse asset-backed debt in the numerator and last-twelve-months EBITDA struck before all interest in the denominator, so they are not the issuer recourse leverage.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5.97 | x | Reported EBITDA over cash interest paid in the cash flow statement (consolidated, including discontinued operations) |
| FY2025 / 2025-12-31 | 6.17 | x | Same basis; cash interest as printed for the year |
| 2026-09-30 | 5.06 | x | Last-twelve-months reported EBITDA over last-twelve-months cash interest (FY2025 plus 9M 2026 less 9M 2025) |

Cash interest paid is a consolidated cash figure that includes asset-backed financing interest from 2026, while EBITDA is before all interest.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 90.920 | 300.0 | US$m | Cash and cash equivalents from continuing operations (cash flow statement total 95.655 includes 4.735 held in discontinued operations); undrawn is the revolver 350.0 commitment less 50.0 drawn |
| FY2025 / 2025-12-31 | 308.774 | 350.0 | US$m | Cash and cash equivalents; revolver undrawn at the 350.0 commitment |
| 2026-09-30 | 108.917 | 350.0 | US$m | Cash and cash equivalents excluding restricted cash of 9.663 held for the asset-backed vehicles; revolver 350.0 stated as available, letters of credit outstanding not stated |

Restricted cash and the asset-backed vehicles own receivables are not available to corporate creditors, and letters of credit drawn on the revolver are not stated.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| 2027 | 0.000 | US$m | Printed as a dash; read as nil because the stated years add to the printed total |
| 2028 | 0.000 | US$m | Printed as a dash; read as nil because the stated years add to the printed total |
| 2029 | 600.000 | US$m | 6.00% senior unsecured notes due November 2029, principal |
| 2030 | 272.000 | US$m | Asset-backed debt, Series 2023-A due April 2030 (52.000) and Series 2026-A due August 2030 (220.000), principal, non-recourse |
| 2031 | 0.000 | US$m | Printed as a dash; read as nil because the stated years add to the printed total |

The schedule starts in 2027 and shows nothing thereafter; the asset-backed repayments follow collections, so contractual dates are an outer bound.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM 2026-09-30 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 2399.081 | 2409.223 | 2762.754 | US$m | Reported; the LTM column is FY2025 plus 9M 2026 less 9M 2025 and includes Purchasing Power from 2026-01-02 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| EBITDA (reported, derived) | 221.059 | 230.805 | 277.174 | US$m | Calculated: operating profit plus depreciation and amortization excluding lease merchandise depreciation | calculation C1; calculation C2; calculation C11 |
| EBITDA (issuer-adjusted) | Not supplied: no adjusted figure for 2024 in the sources | 269.1 | 320.2 | US$m | Company-stated quarters summed; reconciliation tables not readable | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; calculation C7; calculation C12 |
| Cash interest paid | 37.033 | 37.432 | 54.727 | US$m | Reported cash flow statement figure; LTM calculated | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4; calculation C13 |
| Total debt (carrying value) | 643.563 | 594.861 | 865.841 | US$m | Balance sheet debt, net; 2026-09-30 includes asset-backed debt | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Cash and equivalents | 90.920 | 308.774 | 108.917 | US$m | Balance sheet, continuing operations, excluding restricted cash | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Net debt | 552.643 | 286.087 | 756.924 | US$m | Total debt less cash and equivalents | calculation C14; calculation C15; calculation C16 |
| Total debt / EBITDA | 2.91 | 2.58 | 3.12 | x | Reported EBITDA | calculation C17 |
| Net debt / EBITDA | 2.50 | 1.24 | 2.73 | x | Reported EBITDA | calculation C17 |
| EBITDA / cash interest | 5.97 | 6.17 | 5.06 | x | Reported EBITDA | calculation C17 |
| Net debt / issuer-adjusted EBITDA | Not calculable: no adjusted figure for 2024 | 1.06 | 2.36 | x | Issuer-adjusted EBITDA | calculation C17 |
| Company-defined net leverage (recourse principal less cash / LTM adjusted EBITDA) | Not supplied: not stated for 2024 | Not supplied: not stated for 2025 | 1.53 | x | The company states 1.5x at 2026-09-30 on the same definition | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; calculation C21 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 643.563 | 90.920 | 552.643 | US$m | Gross debt is Debt, net at carrying value: 600.000 senior unsecured notes plus 50.000 revolver draw less 6.437 unamortized issuance costs; principal 650.000. Cash from continuing operations |
| FY2025 / 2025-12-31 | 594.861 | 308.774 | 286.087 | US$m | Gross debt is Debt, net at carrying value: 600.000 senior unsecured notes less 5.139 unamortized issuance costs; principal 600.000. Reported, no pro forma |
| 2026-09-30 | 865.841 | 108.917 | 756.924 | US$m | Gross debt is Debt, net at carrying value: corporate 595.835 (principal 600.000) plus asset-backed 270.006 (principal 272.000), non-recourse; total principal 872.000. Reported; the October 2026 repurchase is shown only under post-balance-sheet adjustments |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 872.000 | -6.159 | 865.841 | US$m | Principal 600.000 notes plus 272.000 asset-backed from the maturity schedule; reconciling items are unamortized debt issuance costs of 4.165 on corporate debt and 1.994 on asset-backed debt; the revolver has no balance and its issuance costs sit in other assets |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Announced intention to enter a USD 100.0 million accelerated share repurchase | 2026-10-28 | 100.0 | 856.924 | 3.09 | US$m | Announced intention, not yet executed; funded from cash on hand and revolver borrowings, so net debt rises by the approximate amount either way; completion expected across Q4 2026 and Q1 2027; leverage over LTM reported EBITDA 277.174 as in Net debt / EBITDA for 2026-09-30; the Board also replenished the buyback authorization, which changes no net debt |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 | 2399.081 | 221.059 | US$m | Revenue as recast for Vive discontinued operations; EBITDA is the reported measure derived from the statements |
| FY2025 | 2409.223 | 230.805 | US$m | Same basis |
| LTM 2026-09-30 | 2762.754 | 277.174 | US$m | Last twelve months to 2026-09-30; includes Purchasing Power from 2026-01-02 only; same reported EBITDA identity |

The EBITDA column is the reported identity derived from the statements, not the issuer adjusted measure, and every row spans twelve months.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Asset-backed debt of the Purchasing Power funding vehicles (Series 2023-A and 2026-A) | 1 | Yes | 270.006 | 0.97 | US$m | Carrying value, principal 272.000; secured by pledged receivables, non-recourse to the rest of the group; obligor scope is the consolidated securitization and warehouse entities; cumulative leverage over LTM reported EBITDA 277.174 |
| 6.00% senior unsecured notes due 2029 | 2 | No | 595.835 | 3.12 | US$m | Carrying value, principal 600.000; general unsecured obligations of PROG Holdings, Inc. guaranteed by certain domestic subsidiaries not named in the sources; cumulative through this row is total debt over LTM reported EBITDA |

The revolver is left out because the annual and quarterly reports disagree on whether it is secured, and the order shown reads secured before unsecured from each instrument description, not from a stated legal waterfall.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (reported, LTM 2026-09-30) | Not supplied: the issuer adjustment reconciliation tables are not readable in the supplements, so no signed adjustments are stated | US$m | Opening measure: reported EBITDA derived from the statements, 277.174; not stated as a step because the bridge cannot be completed |
| EBITDA (issuer-adjusted, LTM 2026-09-30) | Not supplied: the issuer adjustment reconciliation tables are not readable in the supplements, so no signed adjustments are stated | US$m | Closing measure: company adjusted EBITDA, 320.2; the 43.026 difference is not itemised in readable form |

No signed adjustment is stated, so no partial bridge is drawn.

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_prg-20241231.htm.jsonl | Annual report (Form 10-K) | FY2024, with FY2023 and FY2022 comparatives | USD | thousands | Consolidated as originally reported: Progressive Leasing and Vive reportable segments | US GAAP, audited | Tier 1 (audited statements) | FY2024 as originally reported; perimeter comparison | Superseded for FY2024 by the recast comparatives in the FY2025 report; calls the revolver senior secured |
| 10-K_2025-12-31_prg-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025, with FY2024 and FY2023 comparatives | USD | thousands | Consolidated; Vive discontinued; Purchasing Power described as a subsequent event | US GAAP, audited | Tier 1 (audited statements) | FY2024 and FY2025 statement columns; debt note; segment depreciation | Cash flow statement includes discontinued operations; calls the revolver senior secured and fully secured |
| 10-Q_2026-03-31_prg-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 | USD | thousands | Consolidated incl. Purchasing Power from 2026-01-02; Vive discontinued | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | Credit facility wording check | Not extracted into a statement column; calls the revolver senior unsecured |
| 10-Q_2026-06-30_prg-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 2026 and six months | USD | thousands | Consolidated incl. Purchasing Power from 2026-01-02; Vive discontinued | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | Credit facility wording check | Not extracted into a statement column; calls the revolver senior unsecured |
| 10-Q_2026-09-30_prg-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 2026 and nine months to 2026-09-30, with 2025 comparatives | USD | thousands | Consolidated incl. Purchasing Power from 2026-01-02 and consolidated asset-backed vehicles; Vive discontinued | US GAAP, unaudited | Tier 2b (unaudited without auditor review stated) | 9M and Q3 columns; balance sheet at 2026-09-30; debt, maturities, covenants, acquisition, subsequent events | Purchase price allocation is preliminary; calls the revolver senior unsecured |
| EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl | Earnings supplement presentation | Q1 2026 with quarterly series from Q1 2025 | USD | millions | Continuing operations; company adjusted EBITDA definition | Non-GAAP company measures, unaudited | Tier 2b (company presentation) | Adjusted EBITDA Q1 2025 and Q1 2026; net leverage | Reconciliation and outlook tables not readable |
| EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl | Earnings supplement presentation | Q2 2026 with quarterly series from Q2 2025 | USD | millions | Continuing operations; company adjusted EBITDA definition | Non-GAAP company measures, unaudited | Tier 2b (company presentation) | Adjusted EBITDA Q2 2025 and Q2 2026; net leverage | Reconciliation and outlook tables not readable |
| EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl | Earnings supplement presentation | Q3 2026 with quarterly series from Q3 2025 | USD | millions | Continuing operations; company adjusted EBITDA definition | Non-GAAP company measures, unaudited | Tier 2b (company presentation) | Adjusted EBITDA Q3 2025, Q4 2025, Q3 2026; net leverage; continuing operating cash flow | Reconciliation and outlook tables not readable |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PROG Holdings, Inc. | Issuer, reporting entity and guarantor of the revolving facility | December 31 | USD | thousands | Consolidated: Progressive Leasing, Purchasing Power from 2026-01-02, Four, other operations; Vive discontinued; consolidated variable interest entities | US GAAP | Earnings and cash flow FY2023 to FY2025; balance sheets 2024-12-31, 2025-12-31, 2026-09-30; Q1 to Q3 2026 and nine months with 2025 comparatives |
| Progressive Finance Holdings, LLC | Borrower under the revolving facility (wholly owned subsidiary) | December 31 | USD | Not supplied: not separately reported | Not reported separately | Not supplied: no separate statements | Not supplied: no separate statements |
| Purchasing Power securitization and warehouse entities | Non-recourse asset-backed borrowers, consolidated as variable interest entities | December 31 | USD | thousands | Consolidated; 356.7 million of receivables and 8.1 million of restricted cash may only settle their own obligations | US GAAP | Balance at 2026-09-30 only (debt 272.0 million principal) |
| Guarantors of the senior notes | Certain existing and future domestic subsidiaries | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named |
| Restricted group under the credit agreement and indenture | Not supplied: legal documents were not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated |

The January 2, 2026 acquisition of Purchasing Power falls after the 2025 year end but inside the September 30, 2026 balance sheet, so the FY2025 column is the pre-acquisition position and is not adjusted. The only event after September 30, 2026 with a stated amount that changes net debt is the October 28, 2026 share repurchase announcement; the October 2026 North Carolina civil investigative demand states no amount.
Basis: 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 157–158; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 25; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 45

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) derived because the statements print none: operating profit plus depreciation and amortization excluding lease merchandise depreciation, which is treated as a cost of leasing | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 49–51 | Derivation | Operating profit 206,773 and D&A 24,032 (FY2025) | 230,805 (FY2025) | Method step 4 derives EBITDA from components; lease merchandise is the leasing inventory, depreciated to nil over about 12 months, and the issuer does not add it back | FY2024, FY2025, 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| FY2024 taken from the FY2025 annual report as recast for Vive discontinued operations, not from the FY2024 report | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-K_2024-12-31_prg-20241231.htm.jsonl, page 103 | Perimeter | Revenue 2,463,496; operating profit 194,897; pre-tax earnings 163,608 (as originally reported) | Revenue 2,399,081; operating profit 194,725; pre-tax earnings 163,436 (continuing operations) | Vive was sold in October 2025 and is a discontinued operation in every later filing; current perimeter used | FY2024 |
| Interest expense, net calculated for interim columns because the quarterly statements print expense and income on separate lines | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 | Derivation | Interest expense (47,778) and interest income 1,538 (9M 2026) | (46,240) | Annual statements print one net line; interim columns made comparable | 9M 2025, 9M 2026, Q3 2025, Q3 2026 |
| Amounts converted from thousands to millions in the money tables, exactly, with no rounding | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 | Unit | 865,841 (USD thousands) | 865.841 (US$m) | The money unit is millions even where a statement prints thousands | All money tables |
| FY2024 balance sheet lines merged to match the later presentation: goodwill and other intangibles, prepaid and other assets including lease right-of-use assets, other liabilities | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107 | Reclassification | Goodwill 296,061 and other intangibles 73,775; prepaid 73,193 and right-of-use 3,879; customer deposits 40,917 and lease liabilities 11,307 | 369,836; 77,072; 52,224 | Matches the 2025 year-end and 2026-09-30 line structure printed in the quarterly report | FY2024 |
| Issuer adjusted EBITDA for fiscal and nine-month periods built by summing company-stated quarters, since no period total is printed | EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl, page 5; EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, page 4; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 | Derivation | Q1 2025 69.9, Q2 2025 72.0, Q3 2025 65.7, Q4 2025 61.5 (USD millions) | FY2025 269.1 (USD millions) | Quarters are printed to one decimal in USD millions, so sums carry a precision of 0.1 | FY2025, 9M 2025, 9M 2026 |
| Last-twelve-months figures built as full year plus current nine months less prior nine months | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 107–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 3–4 | Derivation | FY2025 230,805; 9M 2026 232,442; 9M 2025 186,073 (EBITDA) | 277,174 (LTM EBITDA) | Method step 8 | LTM 2026-09-30 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Q3 2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lease revenues and fees | 2,366,489 | 2,322,754 | 1,777,814 | 1,698,960 | 556,583 | 552,266 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Product and service revenues | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | 363,854 | Not supplied: no such line before the January 2, 2026 acquisition | 128,941 | USD thousands | Reported; Purchasing Power line exists from 2026-01-02 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Other revenues | 32,592 | 86,469 | 56,823 | 125,354 | 21,123 | 44,572 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Total revenues | 2,399,081 | 2,409,223 | 1,834,637 | 2,188,168 | 577,706 | 725,779 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Depreciation of lease merchandise | 1,621,101 | 1,590,240 | 1,224,049 | 1,150,142 | 378,499 | 376,821 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Cost of product sales | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | 214,034 | Not supplied: no such line before the January 2, 2026 acquisition | 75,826 | USD thousands | Reported; Purchasing Power line from 2026-01-02 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Provision for lease merchandise write-offs | 178,338 | 173,115 | 131,688 | 136,127 | 41,037 | 45,977 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Operating expenses | 404,917 | 445,747 | 287,121 | 428,624 | 95,588 | 135,007 | USD thousands | Reported; the annual statements include the provision for loan losses here, the 2026 quarterly statements print it separately | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Provision for credit losses | Not supplied: included within operating expenses in the annual statement | Not supplied: included within operating expenses in the annual statement | 23,535 | 85,360 | 9,991 | 30,526 | USD thousands | Reported on its own line in the quarterly report and its 2025 comparatives | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Total costs and expenses | 2,204,356 | 2,209,102 | 1,666,393 | 2,014,287 | 525,115 | 664,157 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Gain on sale of lease receivables | Not supplied: the statement prints no such line for this period | 6,652 | Not supplied: the statement prints no such line for this period | 14,039 | Not supplied: the statement prints no such line for this period | 2,881 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Gain on change in fair value of receivables | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | Not supplied: no such line before the January 2, 2026 acquisition | 9,000 | Not supplied: no such line before the January 2, 2026 acquisition | 1,478 | USD thousands | Reported; arises on the acquired Purchasing Power receivables | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Operating profit | 194,725 | 206,773 | 168,244 | 196,920 | 52,591 | 65,981 | USD thousands | Reported (EBIT) | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Interest expense | Not supplied: the annual statement prints interest expense net of interest income only | Not supplied: the annual statement prints interest expense net of interest income only | -29,547 | -47,778 | -9,790 | -14,172 | USD thousands | Reported, shown negative as printed | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Interest income | Not supplied: the annual statement prints interest expense net of interest income only | Not supplied: the annual statement prints interest expense net of interest income only | 4,417 | 1,538 | 1,899 | 501 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Interest expense, net | -31,289 | -32,254 | -25,130 | -46,240 | -7,891 | -13,671 | USD thousands | Annual columns as printed; interim columns calculated as expense less income (calculation shown in the normalization register) | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Earnings from continuing operations before income tax expense (benefit) | 163,436 | 174,519 | 143,114 | 150,680 | 44,700 | 52,310 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Income tax expense (benefit) | -33,875 | 50,167 | 38,676 | 39,606 | 12,433 | 14,832 | USD thousands | Reported; FY2024 is a benefit | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Net earnings from continuing operations | 197,311 | 124,352 | 104,438 | 111,074 | 32,267 | 37,478 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Earnings (loss) from discontinued operations, net of tax | -62 | 22,436 | 1,884 | -749 | 854 | -236 | USD thousands | Reported; Vive | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Net earnings | 197,249 | 146,788 | 106,322 | 110,325 | 33,121 | 37,242 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 |
| Depreciation and amortization excluding lease merchandise depreciation | 26,334 | 24,032 | 17,829 | 35,522 | 6,004 | 10,314 | USD thousands | Segment note, continuing operations; excludes depreciation of lease merchandise | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 152–153; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 49–51 |
| Stock-based compensation | 29,179 | 28,807 | 21,633 | 24,963 | 7,107 | 8,129 | USD thousands | Annual and nine-month columns from the cash flow statement (consolidated); quarterly columns from the statement of shareholders equity | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 24 |
| Restructuring and other expenses (exceptionals) | 20,838 | 2,798 | 0 | 7,868 | 0 | -798 | USD thousands | Segment note; 9M 2026 includes a 4.8 million legal settlement; the 2025 interim columns are stated as no restructuring activity | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 152–153; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 46–51 |
| EBITDA (Reported) | 221,059 | 230,805 | 186,073 | 232,442 | 58,595 | 76,295 | USD thousands | Calculated: operating profit plus depreciation and amortization excluding lease merchandise depreciation; unadjusted, includes one-off items | calculation C1 to C6 |
| EBITDA (Adjusted) | Not supplied: no quarterly adjusted figure for 2024 appears in the sources | 269,100 | 207,600 | 258,700 | 65,700 | 80,000 | USD thousands | Issuer-adjusted EBITDA: company quarterly values summed (precision 0.1 million); excludes stock-based compensation, restructuring, transaction and integration costs, legal settlement, cyber incident costs net of insurance and the fair value gain; includes interest on Purchasing Power asset-backed borrowings as a cost | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 7–8; calculation C7 to C9 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net earnings | 197,249 | 146,788 | 106,322 | 110,325 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Depreciation of lease merchandise | 1,621,101 | 1,590,240 | 1,224,049 | 1,150,142 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Other depreciation and amortization | 26,977 | 24,456 | 18,253 | 35,522 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Provisions for accounts receivable and credit losses | 386,558 | 408,090 | 305,613 | 338,270 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Stock-based compensation | 29,179 | 28,807 | 21,633 | 24,963 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Gain on change in fair value of receivables | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | -9,000 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Deferred income taxes | -56,030 | 51,072 | 33,417 | 28,560 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Gain on sale of receivables | Not supplied: the statement prints no such line for this period | -43,683 | Not supplied: the statement prints no such line for this period | -14,525 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Impairment of assets | 6,018 | 3,248 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Income tax benefit from reversal of uncertain tax position | -51,443 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Non-cash lease expense | -3,632 | -2,939 | -2,280 | -1,698 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Other changes, net | -2,640 | -2,054 | -2,450 | 1,055 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Additions to lease merchandise | -1,850,425 | -1,696,573 | -1,180,200 | -1,231,076 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Book value of lease merchandise sold or disposed | 182,509 | 177,567 | 135,240 | 178,650 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Accounts receivable | -342,954 | -324,030 | -236,707 | -214,787 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Prepaid expenses and other assets | -25,394 | 8,980 | 8,742 | -3,318 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Income tax receivable and payable | 24,743 | -39,697 | -40,460 | 25,763 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Accounts payable and accrued expenses | -8,495 | 8,194 | 6,275 | -28,622 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Customer deposits and advance payments | 5,204 | -3,504 | -7,582 | -4,073 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Net Cash from Operating Activities | 138,525 | 334,962 | 389,865 | 386,151 | USD thousands | Reported; consolidated, includes discontinued operations (Vive) | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Investments in loans receivable (funding of loans receivable) | -459,463 | -920,318 | -596,455 | -916,128 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Proceeds from loans receivable (collections from loans receivable) | 388,437 | 784,569 | 534,863 | 896,871 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Proceeds from sale of loans receivable | Not supplied: the statement prints no such line for this period | 152,436 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Funding of other receivables | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | -68,810 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Collections from other receivables | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | 60,283 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Purchases of property and equipment | -8,316 | -10,042 | -7,449 | -13,013 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Proceeds from sale of property and equipment | 131 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | 415 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Other proceeds | 41 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Acquisition of business, net of cash acquired | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | -391,845 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Net Cash from Investing Activities | -79,170 | 6,645 | -69,041 | -432,227 | USD thousands | Reported; consolidated | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Borrowings (payments) on revolving facility, net (annual statement line) | 50,000 | -50,000 | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Proceeds from debt (quarterly statement line) | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | 546,178 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Repayments on debt (quarterly statement line) | Not supplied: the statement prints no such line for this period | Not supplied: the statement prints no such line for this period | -50,000 | -612,786 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Acquisition of treasury stock | -138,651 | -51,775 | -51,775 | -46,885 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Dividends paid | -20,393 | -20,767 | -15,625 | -16,726 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Issuance of stock under stock option and employee purchase plans | 2,364 | 1,630 | 1,028 | 1,135 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Cash paid for shares withheld for employee taxes | -9,660 | -7,492 | -7,413 | -10,406 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Debt issuance costs | -2,776 | -84 | -84 | -4,628 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Net Cash from Financing Activities | -119,116 | -128,488 | -123,869 | -144,118 | USD thousands | Reported; consolidated | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Net Cash Change | -59,761 | 213,119 | 196,955 | -190,194 | USD thousands | Reported; operating plus investing plus financing; no FX effect | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Opening Cash | 155,416 | 95,655 | 95,655 | 308,774 | USD thousands | Reported; cash flow statement basis includes cash in discontinued operations and, from 2026, restricted cash | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Closing Cash | 95,655 | 308,774 | 292,610 | 118,580 | USD thousands | Reported; 2026-09-30 includes restricted cash of 9,663; FY2024 includes 4,735 in discontinued operations | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 17 |
| Cash Interest Paid | 37,033 | 37,432 | 19,119 | 36,414 | USD thousands | Reported net cash paid for interest, consolidated; classified in operating activities | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |
| Net cash paid (received) for income taxes | 49,840 | 45,793 | 46,068 | -14,614 | USD thousands | Reported; the 9M 2026 figure is a net refund | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 108–109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 90,920 | 308,774 | 108,917 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Restricted cash | Not supplied: the balance sheet prints a dash or no line at this date | Not supplied: the balance sheet prints a dash or no line at this date | 9,663 | USD thousands | Reported; held for the securitization and financing arrangements | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Receivables, net (accounts receivable) | 80,206 | 74,228 | 374,630 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Other receivables, net | Not supplied: the balance sheet prints a dash or no line at this date | Not supplied: the balance sheet prints a dash or no line at this date | 40,415 | USD thousands | Reported; Purchasing Power pass-through receivables from 2026-01-02 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Lease merchandise, net | 680,242 | 609,009 | 511,293 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Loans receivable, net | 39,128 | 90,648 | 74,383 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Property and equipment, net | 20,044 | 19,526 | 26,482 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Goodwill and other intangibles, net | 369,836 | 353,835 | 755,308 | USD thousands | Reported; FY2024 is goodwill 296,061 plus other intangibles 73,775 (normalization register) | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Income tax receivable | 10,644 | 47,894 | 22,791 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Deferred income tax assets | 9,206 | 19,561 | 18,423 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Prepaid expenses and other assets (including operating lease right-of-use assets) | 77,072 | 73,383 | 104,812 | USD thousands | Reported; FY2024 is prepaid 73,193 plus operating lease right-of-use assets 3,879 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Assets of discontinued operations | 136,469 | 13,550 | 8,483 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Total Assets | 1,513,767 | 1,610,408 | 2,055,600 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Accounts payable and accrued expenses | 89,570 | 96,471 | 159,727 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Debt, net | 643,563 | 594,861 | 865,841 | USD thousands | Reported; carrying value net of issuance costs; 2026-09-30 includes 270,006 of non-recourse asset-backed debt | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Deferred income tax liabilities | 74,320 | 121,152 | 167,562 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Other liabilities (customer deposits, operating lease liabilities and other) | 52,224 | 44,676 | 52,410 | USD thousands | Reported; FY2024 is customer deposits and advance payments 40,917 plus operating lease liabilities 11,307 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Liabilities of discontinued operations | 3,809 | 6,831 | 2,063 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Total Liabilities | 863,486 | 863,991 | 1,247,603 | USD thousands | Reported | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Total Equity | 650,281 | 746,417 | 807,997 | USD thousands | Reported total shareholders equity; no temporary equity | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Total Debt | 643,563 | 594,861 | 865,841 | USD thousands | Balance sheet debt, net at carrying value: every debt line the issuer carries; lease liabilities are in other liabilities and not added | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |
| Cash & Equivalents | 90,920 | 308,774 | 108,917 | USD thousands | Balance sheet cash and cash equivalents; excludes restricted cash | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 6.00% senior unsecured notes due 2029 | Senior notes | Not supplied: carrying value by instrument is not disclosed | 600,000 | 600,000 | Not applicable | Unsecured; general unsecured obligations guaranteed by certain domestic subsidiaries | Senior unsecured | USD | 600,000 | Not applicable | 6.00% | Fixed | Not applicable | Not applicable | Not applicable | 2029-11-15 | 0 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 38–41; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 132 |
| Term Loan A | Term loan | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | Not applicable | Not supplied: the filings conflict on whether the credit facility is secured | Not supplied: the filings conflict on ranking | USD | 0 | Not applicable | Term SOFR or base rate plus a margin set by leverage | Floating | Term SOFR | Not supplied: the margin grid is stated for the facility, not per loan | Not supplied: not stated | 2029-11-15 | Not supplied: prepaid in full during 2026 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 38–41; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 73–75 |
| Revolving facility | Revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | 350,000 | Not supplied: the filings conflict on whether it is secured | Not supplied: the filings conflict on ranking | USD | 0 | Not applicable | Term SOFR plus 1.5% to 2.8%, or base rate plus a lower margin | Floating | Term SOFR | 150 to 280 | Not supplied: not stated | 2029-11-15 | 0 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 75; 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 132–133 |
| Asset-backed Series 2023-A Class A | Warehouse asset-backed note | Not supplied: carrying value by instrument is not disclosed | 41,285 | 41,285 | Not supplied: not stated | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 41,285 | Not applicable | 2.05% plus the greater of the CP Rate or a 0% floor | Floating | CP Rate | 205 | 0 | April 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 40 |
| Asset-backed Series 2023-A Class B | Warehouse asset-backed note | Not supplied: carrying value by instrument is not disclosed | 10,715 | 10,715 | Not supplied: not stated | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 10,715 | Not applicable | 8.25% plus the greater of term SOFR plus 0.1% or a 3.0% floor | Floating | Term SOFR | 825 | 300 | April 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 40 |
| Asset-backed Series 2026-A Class A | Securitization note | Not supplied: carrying value by instrument is not disclosed | 122,680 | 122,680 | Not applicable | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 122,680 | Not applicable | 4.37% | Fixed | Not applicable | Not applicable | Not applicable | August 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Asset-backed Series 2026-A Class B | Securitization note | Not supplied: carrying value by instrument is not disclosed | 32,010 | 32,010 | Not applicable | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 32,010 | Not applicable | 4.81% | Fixed | Not applicable | Not applicable | Not applicable | August 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Asset-backed Series 2026-A Class C | Securitization note | Not supplied: carrying value by instrument is not disclosed | 29,330 | 29,330 | Not applicable | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 29,330 | Not applicable | 5.25% | Fixed | Not applicable | Not applicable | Not applicable | August 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Asset-backed Series 2026-A Class D | Securitization note | Not supplied: carrying value by instrument is not disclosed | 20,230 | 20,230 | Not applicable | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 20,230 | Not applicable | 5.40% | Fixed | Not applicable | Not applicable | Not applicable | August 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Asset-backed Series 2026-A Class E | Securitization note | Not supplied: carrying value by instrument is not disclosed | 15,750 | 15,750 | Not applicable | Secured by pledged receivables and collections; non-recourse to the Company | Not supplied: the priority between classes is not stated | USD | 15,750 | Not applicable | 7.54% | Fixed | Not applicable | Not applicable | Not applicable | August 2030 | Not supplied: repaid from collections | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Financing cost adjustment | Unamortized debt issuance costs | -6,159 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -6,159 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; calculation C19 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD thousands) | Current Stub (USD thousands) | Prior-Year Stub (USD thousands) | Derived Value (USD thousands) | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue | LTM to 2026-09-30 | 2,409,223 | 2,188,168 | 1,834,637 | 2,762,754 | Calculated | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 | FY2025 excludes Purchasing Power; the current stub includes it from 2026-01-02, so the LTM mixes perimeters |
| EBITDA (Reported) | LTM to 2026-09-30 | 230,805 | 232,442 | 186,073 | 277,174 | Calculated | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 107–152; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 3–51 | Derived EBITDA; unadjusted; same perimeter mix |
| EBITDA (Adjusted), issuer | LTM to 2026-09-30 | 269,100 | 258,700 | 207,600 | 320,200 | Calculated | EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl, page 5; EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, page 4; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 | Built from quarterly values printed to 0.1 million; equals the four quarters Q4 2025 to Q3 2026 summed (61.5 + 90.3 + 88.4 + 80.0) |
| Cash Interest Paid | LTM to 2026-09-30 | 37,432 | 36,414 | 19,119 | 54,727 | Calculated | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 | Consolidated cash paid; includes asset-backed interest only from 2026 |
| Net Cash from Operating Activities | LTM to 2026-09-30 | 334,962 | 386,151 | 389,865 | 331,248 | Calculated | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 108; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 4 | Consolidated, includes discontinued operations; includes a net tax refund of 14,614 in 9M 2026 |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 643.563 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107 | 221.059 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 2.91 | Calculated | Tier 1 | Recast comparative; carrying value debt |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 552.643 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C14 | 221.059 | calculation C1 | FY2024 / 2024-12-31 | USD | US$m | 2.50 | Calculated | Tier 1 | Recast comparative; carrying value debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 221.059 | calculation C1 | 37.033 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | 5.97 | Calculated | Tier 1 | Recast comparative; carrying value debt |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 643.563 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107 | Not supplied: the sources state no issuer-adjusted EBITDA for 2024 | Not supplied: not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no issuer-adjusted EBITDA for 2024 | Not Calculable | Tier 2b | Issuer-adjusted EBITDA starts with Q1 2025 in the supplements |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 552.643 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C14 | Not supplied: the sources state no issuer-adjusted EBITDA for 2024 | Not supplied: not stated | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no issuer-adjusted EBITDA for 2024 | Not Calculable | Tier 2b | Issuer-adjusted EBITDA starts with Q1 2025 in the supplements |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | Not supplied: the sources state no issuer-adjusted EBITDA for 2024 | Not supplied: not stated | 37.033 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109 | FY2024 / 2024-12-31 | USD | US$m | Not calculable: no issuer-adjusted EBITDA for 2024 | Not Calculable | Tier 2b | Issuer-adjusted EBITDA starts with Q1 2025 in the supplements |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 594.861 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107 | 230.805 | calculation C2 | FY2025 / 2025-12-31 | USD | US$m | 2.58 | Calculated | Tier 1 | Carrying value debt |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 286.087 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C15 | 230.805 | calculation C2 | FY2025 / 2025-12-31 | USD | US$m | 1.24 | Calculated | Tier 1 | Carrying value debt |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 230.805 | calculation C2 | 37.432 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 6.17 | Calculated | Tier 1 | Carrying value debt |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 594.861 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107 | 269.1 | calculation C7 | FY2025 / 2025-12-31 | USD | US$m | 2.21 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; Carrying value debt |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 286.087 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C15 | 269.1 | calculation C7 | FY2025 / 2025-12-31 | USD | US$m | 1.06 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; Carrying value debt |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 269.1 | calculation C7 | 37.432 | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109 | FY2025 / 2025-12-31 | USD | US$m | 7.19 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; Carrying value debt |
| Total debt / EBITDA | Total Debt / EBITDA (Reported) | 865.841 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 | 277.174 | calculation C11 | 2026-09-30 | USD | US$m | 3.12 | Calculated | Tier 2b | LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| Net debt / EBITDA | Net Debt / EBITDA (Reported) | 756.924 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; calculation C16 | 277.174 | calculation C11 | 2026-09-30 | USD | US$m | 2.73 | Calculated | Tier 2b | LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 277.174 | calculation C11 | 54.727 | calculation C13 | 2026-09-30 | USD | US$m | 5.06 | Calculated | Tier 2b | LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| Total debt / adjusted EBITDA | Total Debt / EBITDA (Adjusted) | 865.841 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 | 320.2 | calculation C12 | 2026-09-30 | USD | US$m | 2.70 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| Net debt / adjusted EBITDA | Net Debt / EBITDA (Adjusted) | 756.924 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; calculation C16 | 320.2 | calculation C12 | 2026-09-30 | USD | US$m | 2.36 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 320.2 | calculation C12 | 54.727 | calculation C13 | 2026-09-30 | USD | US$m | 5.85 | Calculated | Tier 2b | Issuer-adjusted EBITDA built from company quarterly values; LTM EBITDA; includes 270.006 non-recourse asset-backed debt at carrying value |
| Company-defined net leverage | Gross recourse debt less cash / LTM issuer-adjusted EBITDA | 491.083 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; calculation C21 | 320.2 | calculation C12 | 2026-09-30 | USD | US$m | 1.53 | Calculated | Tier 2b | Recourse principal 600.000 less cash 108.917; the company states 1.5x; excludes non-recourse asset-backed debt; not the covenant definition |
| Recourse net debt / EBITDA after asset-backed interest | Corporate debt carrying value less cash / (LTM reported EBITDA less asset-backed interest) | 486.918 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; calculation C22 | 264.052 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 42; calculation C11; calculation C22 | 2026-09-30 | USD | US$m | 1.84 | Calculated | Tier 2b | House matched-funding view: asset-backed interest of 13.122 (nine months 2026; none in Q4 2025) is deducted from EBITDA while asset-backed debt is left out of the numerator |
| Liquidity / total debt | Cash plus undrawn revolver / total debt | 458.917 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39; calculation C20 | 865.841 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | 0.53 | Calculated | Tier 2b | Undrawn revolver taken at the stated availability of 350.0; letters of credit not stated |

### T4.10 KPI dashboard

| KPI Category | Metric Name | Q3 2025 | Q3 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- |
| Volume | Gross merchandise volume, consolidated (period flow, USD thousands) | 574,029 | 912,032 | Up | Includes Purchasing Power 161,174 from 2026 and Four growth; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 57 |
| Volume | Gross merchandise volume, Progressive Leasing (period flow, USD thousands) | 410,943 | 420,437 | Up | Up 2.3%; e-commerce is 26.4% of the 2026 quarter against 23.0% |
| Volume | Gross merchandise volume, Four (period flow, USD thousands) | 163,086 | 330,421 | Up | Gross loan originations |
| Volume | Gross merchandise volume, Purchasing Power (period flow, USD thousands) | Not supplied: acquired on 2026-01-02 | 161,174 | Not comparable | No prior-year period |
| Customers | Active customers, Progressive Leasing (period end, thousands) | 784 | 781 | Flat | Relatively unchanged as e-commerce gains offset weaker durable goods demand |
| Customers | Active customers, Four (period end, thousands) | 218 | 366 | Up | Growth in buy now pay later transactions |
| Customers | Active customers, Purchasing Power (period end, thousands) | Not supplied: acquired on 2026-01-02 | 262 | Not comparable | No prior-year period |
| Credit quality | Provision for lease merchandise write-offs, percent of Progressive Leasing revenue (period flow) | 7.4 | 8.3 | Worse | Higher period-end delinquency; decisioning tightened late in Q2 and again in Q3 2026; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 54–55 |
| Credit quality | Four provision for credit losses, percent of Four revenue (period flow) | 43.7 | 32.3 | Better | Model refinement and subscription revenue growth |
| Profitability | Progressive Leasing gross margin, percent of revenue (period flow) | 32.0 | 31.8 | Flat | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 61 |
| Profitability | Issuer adjusted EBITDA margin, percent of consolidated revenue (period flow) | 11.4 | 11.0 | Down | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 |
| Leverage | Company net leverage ratio, recourse debt less cash over LTM adjusted EBITDA (period end, x) | Not supplied: not in the sources | 1.5 | Down since March | Reported 2.0x at 2026-03-31 and 1.7x at 2026-06-30; does not add back asset-backed interest; EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl, page 5; EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, page 5; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported, unadjusted: operating profit plus depreciation and amortization excluding lease merchandise depreciation | Adjusted EBITDA: earnings before non-asset-backed interest, depreciation, amortization and taxes, excluding stock-based compensation, restructuring, transaction and integration costs, legal settlement, cyber incident costs net of insurance and the fair value gain; includes asset-backed interest as a cost | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 7–8; calculation C1 to C12 | FY2025: reported 230.805 against adjusted 269.1; LTM 2026-09-30: 277.174 against 320.2 | LTM difference 43.026 (15.52% of reported) | Financial foundation; Fundamental credit; Liquidity | Reported EBITDA is the ratio denominator and adjusted is shown beside it; the adjustment components are not readable, so the 43.026 is not itemised |
| Net leverage perimeter | Net debt: total debt at carrying value including non-recourse asset-backed debt, less cash and equivalents | Net leverage: gross recourse debt (600.0 principal) less cash over trailing 12-month adjusted EBITDA, no add-back of non-recourse asset-backed interest | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38 | 2026-09-30 | Reported 2.73x against company 1.5x (house calculation 1.53x) | Fundamental credit; Liquidity; Refinancing & LME | Both are shown; neither is a covenant measure; matched-funding debt is not industrial leverage |
| Covenant leverage | Not defined here; no covenant capacity is inferred | Total net debt to EBITDA as defined by the Credit Facility of no more than 3.25 through 2026, 3.00 through 2027 and 2.50 thereafter; consolidated interest coverage of at least 3.00 | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 | 2026-09-30 and later | Reported 2.73x and cover 5.06x are not the covenant figures; the company states compliance | Covenant capacity; Legal & covenants | Not calculable: the credit agreement definitions were not supplied |
| Revolver security | A single description of the facility ranking | Senior secured and fully secured (annual reports); senior unsecured (all three 2026 quarterly reports) | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 132–133; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 | FY2024, FY2025, Q1 to Q3 2026 | Changes the rank of the 350.0 commitment against the notes | Structural priority; Fundamental credit | Both wordings kept; the revolver is left out of the debt stack until the credit agreement is supplied |
| FY2024 perimeter | Continuing operations, Vive excluded | As originally reported: Vive included (revenue 2,463,496; operating profit 194,897; pre-tax earnings 163,608) | 10-K_2024-12-31_prg-20241231.htm.jsonl, page 103; 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 107–126 | FY2024 | Revenue 64,415 and operating profit 172 (USD thousands) from Vive | Financial foundation; Earnings changes | FY2025 annual report recast used; the original shown here |
| Operating cash flow perimeter | Consolidated cash flow statement, including discontinued operations | Operating cash flow from continuing operations 392.7 million for nine months 2026 against consolidated 386.151 million | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 4–32 | 9M 2026 and FY2024, FY2025 | Discontinued operations used 6.576 million of operating cash in 9M 2026 | Fundamental credit; Forward credit model | Consolidated figures used; the supplement figure is carried as context |
| Cash | Balance sheet cash and cash equivalents from continuing operations | Cash flow statement closing cash includes discontinued operations and restricted cash | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 127; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 17 | 2024-12-31 and 2026-09-30 | 4,735 (2024, discontinued operations); 9,663 (2026, restricted cash) in USD thousands | Liquidity | Balance sheet cash used for net debt and liquidity |
| Provision for credit losses | Separate line, as the 2026 quarterly statements print it | Included within operating expenses in the annual statements (40,339 for 2025 and 18,639 for 2024 in the segment note) | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 152; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3 | FY2024, FY2025 against 2026 and 9M 2025 | Operating expenses are not comparable across annual and quarterly columns | Earnings changes; Earnings quality | Line kept as printed with the reclassification stated |
| Purchasing Power consideration | One economic event with several figures | Negotiated purchase price 420.0 million; total consideration 424.227 million (cash to seller 216.220, seller debt settled 199.283, seller costs 6.724, escrow 2.000); net cash used in investing 391.845 after 32.4 million of cash acquired | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 27–31; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 157 | Acquisition on 2026-01-02 | Differences of 4.2 million of seller asset-backed debt and 32.4 million of cash acquired | Business & governance; Financial foundation | All figures kept with their roles; the cash flow figure is used for cash |
| Non-debt funding float | Customer deposits and advance payments (mainly deferred revenue on initial lease payments) are working-capital float, not debt | Presented within customer deposits and advance payments in the annual report and within other liabilities in the quarterly report | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 2–9 | FY2024 40,917; FY2025 37,413 (USD thousands) | Falls 3,504 in FY2025; the 9M 2026 cash flow change is minus 4,073 | Liquidity; Fundamental credit | Kept out of debt; flagged as float |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage and coverage on reported EBITDA | Ready with Limitations | EBITDA is derived, unadjusted and mixes perimeters in the 2026 LTM; debt includes non-recourse asset-backed debt | Read with the recourse and adjusted views beside it |
| Company-defined and adjusted leverage | Ready with Limitations | Adjustment components are not readable; FY2024 adjusted EBITDA is not supplied | Obtain the earnings releases with tables |
| Liquidity at 2026-09-30 | Ready with Limitations | Letters of credit outstanding are not stated; availability is stated as 350.0 | Confirm availability with the credit agreement or a compliance certificate |
| Maturity profile | Ready | Schedule starts in 2027; asset-backed repayments follow collections | None |
| Debt stack and ranking | Not Ready | Revolver security conflicts across filings; guarantors are not named; no waterfall is stated | Obtain the credit agreement, indenture and Series 2026-A documents |
| Covenant headroom | Not Ready | Covenant EBITDA definitions are not supplied; no capacity is inferred | Obtain the credit agreement definitions |
| Base period for a forecast | Ready with Limitations | Purchasing Power has under three quarters of history inside PROG; outlook ranges are not readable | State the perimeter change with any forecast |

### Analysis by dimension

Leverage moved up because debt rose faster than EBITDA after the acquisition. Reported net debt to EBITDA was 2.50x at the end of 2024, 1.24x at the end of 2025 after the revolver draw was repaid and cash built, and 2.73x at September 30, 2026. The January 2, 2026 acquisition took about USD 391.845 million of net cash and brought USD 338.608 million of non-recourse funding debt, so carrying value debt rose to USD 865.841 million while last-twelve-months EBITDA reached only USD 277.174 million. For creditors the recourse claim is still the USD 600.0 million of notes, but the reported ratio now mixes recourse and non-recourse debt, which is why the company states 1.5x on its own definition.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 4–41; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; calculation C15; calculation C16; calculation C21

Interest cover on reported EBITDA slipped from 6.17x in FY2025 to 5.06x over the last twelve months. Cash interest paid rose to USD 54.727 million as asset-backed interest entered the figure, while EBITDA is struck before all interest. On the issuer adjusted measure, which treats asset-backed interest as a cost, cover is 5.85x on the same cash interest. The covenant floor is 3.00x on the facility definition, which is not the same measure and leaves headroom unestablished.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 39–42; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 109; calculation C11; calculation C13; calculation C17

Cash flow quality is steady but flattered by tax. Operating cash flow was USD 386.151 million in the first nine months of 2026 against USD 389.865 million a year earlier, and a swing from net tax paid of USD 46.068 million to a net refund of USD 14.614 million supplied USD 60.682 million of the comparison, so without it operating cash flow would have fallen by about USD 64.4 million. Operating cash flow is struck after USD 1,231.076 million of lease merchandise additions, so it already carries the cost of replacing the leasing inventory; capital expenditure is small at USD 13.013 million.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 4–70; calculation C24; calculation C25

Liquidity looks adequate against dated obligations. Cash of USD 108.917 million and the undrawn USD 350.0 million revolver give USD 458.917 million against no principal maturing in the printed schedule before 2029, when USD 600.0 million of notes and the revolver mature, and 2030 for the USD 272.0 million asset-backed principal. The announced USD 100.0 million share repurchase would draw on cash and the revolver, and net debt would rise by the same amount on either funding route; letters of credit under the revolver are not stated.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 39–41; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 72; calculation C20; calculation C23

Subsequent and multi-figure events are kept apart from period figures. The share repurchase announced on October 28, 2026 appears only in the post-balance-sheet table, and the Purchasing Power purchase price appears as USD 420.0 million negotiated, USD 424.227 million of total consideration and USD 391.845 million of net cash used, each with its role in the conflict register.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 25–31; 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 157–158

Data-quality and definition risks sit in three places. The annual and quarterly reports disagree on whether the revolver is secured, the issuer adjusted EBITDA cannot be rebuilt from readable reconciliation tables, and the cash flow statement includes discontinued operations. Customer deposits and advance payments, a non-debt funding float of USD 37.413 million at the end of 2025 against USD 40.917 million a year earlier, are kept outside debt; the balance fell during 2025 and the nine-month 2026 cash flow shows a further outflow of USD 4.073 million, which shrinks a small source of interest-free funding.
Basis: 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 107–133; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 9

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 46 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 3 |
| Insufficient Information | 5 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

## Calculations

Amounts in thousands are USD thousands as printed; amounts with three decimals are US$m converted exactly.

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C1 | EBITDA (Reported) FY2024 | Operating profit 194,725 + depreciation and amortization excluding lease merchandise 26,334 | 221,059 | USD thousands |
| C2 | EBITDA (Reported) FY2025 | 206,773 + 24,032 | 230,805 | USD thousands |
| C3 | EBITDA (Reported) 9M 2025 | 168,244 + 17,829 | 186,073 | USD thousands |
| C4 | EBITDA (Reported) 9M 2026 | 196,920 + 35,522 | 232,442 | USD thousands |
| C5 | EBITDA (Reported) Q3 2025 | 52,591 + 6,004 | 58,595 | USD thousands |
| C6 | EBITDA (Reported) Q3 2026 | 65,981 + 10,314 | 76,295 | USD thousands |
| C7 | EBITDA (Adjusted) FY2025, company quarters summed | Q1 2025 69.9 + Q2 2025 72.0 + Q3 2025 65.7 + Q4 2025 61.5 | 269.1 | USD millions |
| C8 | EBITDA (Adjusted) 9M 2025 | 69.9 + 72.0 + 65.7 | 207.6 | USD millions |
| C9 | EBITDA (Adjusted) 9M 2026 | Q1 2026 90.3 + Q2 2026 88.4 + Q3 2026 80.0 | 258.7 | USD millions |
| C10 | LTM revenue to 2026-09-30 | FY2025 2,409,223 + 9M 2026 2,188,168 - 9M 2025 1,834,637 | 2,762,754 | USD thousands |
| C11 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 230,805 + 9M 2026 232,442 - 9M 2025 186,073 | 277,174 | USD thousands |
| C12 | LTM EBITDA (Adjusted) to 2026-09-30 | FY2025 269.1 + 9M 2026 258.7 - 9M 2025 207.6 (equals Q4 2025 61.5 + 90.3 + 88.4 + 80.0) | 320.2 | USD millions |
| C13 | LTM cash interest paid to 2026-09-30 | FY2025 37,432 + 9M 2026 36,414 - 9M 2025 19,119 | 54,727 | USD thousands |
| C14 | Net debt 2024-12-31 | Gross debt 643.563 - cash 90.920 | 552.643 | US$m |
| C15 | Net debt 2025-12-31 | Gross debt 594.861 - cash 308.774 | 286.087 | US$m |
| C16 | Net debt 2026-09-30 | Gross debt 865.841 - cash 108.917 | 756.924 | US$m |
| C17 | Ratios of the register | Each Calculated Value is numerator over denominator in the register, printed to two decimals; for example 2026-09-30 net debt 756.924 / EBITDA 277.174 | 2.73 | x |
| C18 | Maturity ladder total | 0.000 + 0.000 + 600.000 + 272.000 + 0.000 | 872.000 | US$m |
| C19 | Reconciling items to carrying value | Issuance costs -4.165 (corporate) + -1.994 (asset-backed); 872.000 - 6.159 = 865.841 | -6.159 | US$m |
| C20 | Liquidity | Cash + undrawn revolver: 2024-12-31 90.920 + 300.0; 2025-12-31 308.774 + 350.0; 2026-09-30 108.917 + 350.0 | 390.920; 658.774; 458.917 | US$m |
| C21 | Company-defined net leverage 2026-09-30 | (600.000 - 108.917) / 320.2 = 491.083 / 320.2 | 1.53 | x |
| C22 | Recourse net debt over EBITDA after asset-backed interest | (595.835 - 108.917) / (277.174 - 13.122) = 486.918 / 264.052 | 1.84 | x |
| C23 | Pro forma for the share repurchase announced 2026-10-28 | Net debt 756.924 + 100.0 = 856.924; 856.924 / 277.174 | 856.924; 3.09 | US$m; x |
| C24 | Tax effect on nine-month operating cash flow | Tax paid 9M 2025 46,068 - net refund 9M 2026 (14,614) = swing 60,682; change in operating cash flow 386,151 - 389,865 = -3,714; excluding the swing -3,714 - 60,682 | -64,396 | USD thousands |
| C25 | Free cash flow proxy 9M 2026 | Operating cash flow 386,151 - purchases of property and equipment 13,013 | 373,138 | USD thousands |
| C26 | Adjusted less reported EBITDA, LTM | 320.2 - 277.174 = 43.026; 43.026 / 277.174 | 43.026; 15.52% | US$m; % |

## Gaps

| Severity | Gap | What it restricts | Action that would close it |
| --- | --- | --- | --- |
| High | The issuer adjusted EBITDA reconciliation, segment EBITDA and outlook tables are titles only in the supplements, so the adjustment components, the EBITDA bridge and the outlook ranges are not established; adjusted EBITDA is the sum of company quarterly values printed to 0.1 million. | Limits adjusted ratios, the company leverage rebuild and the EBITDA bridge | Supply the earnings releases with their tables |
| High | The annual reports call the revolver senior secured and fully secured while the 2026 quarterly reports call it senior unsecured, so the facility ranking and its place in the debt stack are not established. | Limits the debt stack, structural priority and recovery conclusions | Supply the credit agreement and its Fourth Amendment |
| High | Covenant EBITDA as defined by the credit facility and the asset-backed performance tests are not supplied, so covenant headroom cannot be calculated; only the levels are stated. | Limits any covenant capacity statement | Supply the credit agreement and the asset-backed documents |
| Medium | No issuer-adjusted EBITDA is stated for 2024, so adjusted leverage and cover for FY2024 are not calculable. | Limits the FY2024 adjusted ratios | Supply 2024 quarterly earnings supplements |
| Medium | Letters of credit outstanding under the USD 20.0 million sublimit are not stated for 2026; availability is stated as USD 350.0 million, which implies none. | Limits the undrawn facility figure by an unknown small amount | Confirm with a compliance certificate |
| Medium | The cash flow statements include discontinued operations (Vive), so operating cash flow and cash interest are consolidated figures; the supplement states 392.7 million from continuing operations for nine months 2026. | Limits comparability of cash flow and coverage with continuing earnings | Use continuing figures where the filings give them |
| Medium | Lines that exist only from 2026 (product and service revenues, cost of product sales, restricted cash, other receivables, acquisition cash flows) show Not supplied for earlier columns because the statements print no such line, and the annual statements print no separate provision for credit losses or gross interest expense and income. | Limits period comparison of these lines; totals are unaffected | None; the lines did not exist or were presented differently |
| Medium | The guarantors of the senior notes are described only as certain domestic subsidiaries and the legal documents were not supplied. | Limits the guarantor scope in the debt stack | Supply the indenture |

## Next module

The orchestrator selects the next module.
