## Request

Source readiness for Ziprecruiter, Inc. (zip-1617553), as of 2026-11-18, under the credit_snapshot pathway (full credit assessment: should we own this issuer, in which instrument, and why). Scope is the five supplied SEC filings (two annual reports and three 2026 quarterly reports) and the modules selected for this run: Source readiness, Financial foundation, Business & governance and Fundamental credit.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_zip-20241231.htm.jsonl | Annual report on Form 10-K of Ziprecruiter, Inc. for the year ended 31 December 2024 | 2025-02-25 (signature date; filing date not stated) | 4c6af145b03114d7fc912e17b781557c30eaf55222c72a7a1e2ec997aad65c29 | Identity, period and version map; FY2024 and FY2023 comparatives and the 2024 debt, covenant and liquidity description |
| 10-K_2025-12-31_zip-20251231.htm.jsonl | Annual report on Form 10-K of Ziprecruiter, Inc. for the year ended 31 December 2025 | 2026-02-25 (signature date; filing date not stated) | 6dfe6d458eadd70f776719e563c19476bcf176d4563b526b71feb00c5d33eb46 | Prior-period anchor (FY2025): audited statements, debt note, credit facility and notes terms, business description |
| 10-Q_2026-03-31_zip-20260331.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 31 March 2026 | 2026-05-07 (signature date; filing date not stated) | 5e50a7cc70946277b7a20b88ef836cbbcfa0d0dd3d289ffc085bf555703efc7f | Q1 2026 statements; first report that the credit facility expired on 2026-04-30 with no borrowings |
| 10-Q_2026-06-30_zip-20260630.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 30 June 2026 | 2026-08-05 (signature date; filing date not stated) | b52e8b008cdcfe329007adb1e5461c18705547e8db0ac74d8a5ed84b46d67915 | Q2 2026 statements; June 2026 notes repurchase and extinguishment gain |
| 10-Q_2026-09-30_zip-20260930.htm.jsonl | Quarterly report on Form 10-Q of Ziprecruiter, Inc. for the quarter ended 30 September 2026 | 2026-11-09 (signature date; filing date not stated) | 02a71bc8b05fc313332809859cd2714710e240d686bc1d6349f7b0b2e3bd1a83 | Current period (Q3 2026 and nine months 2026): statements, debt, liquidity, notes fair value, subsequent items |

Supplied handoffs: none. Source readiness is the entry module of this run, so no upstream handoff exists.

## Findings

### Bottom line

The five supplied filings are enough to run the requested credit snapshot on ZipRecruiter's own consolidated statements, but they cannot test the notes' covenants or price the notes, so legal, ratings and market-based work stays conditional or blocked.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 39; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 19

The capital structure is now a single instrument: USD 250.7 million of 5% senior unsecured notes due 2030, left after USD 299.3 million of principal was repurchased in 2026 for USD 236.8 million. The USD 290.0 million revolving credit facility expired unrenewed on 2026-04-30. The latest period covered is the quarter ended 2026-09-30, and nothing after the 2026-11-09 signing of that report is covered.
Basis: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21; 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 40; calculation C1; calculation C2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-25 | day | 2025-02-25 | Annual report for the year ended 2024-12-31 signed | Historical — signed in Santa Monica, California | 10-K_2024-12-31_zip-20241231.htm.jsonl, page 152 | Sets the earliest balance sheet (2024-12-31 and 2023-12-31) and the three-year income statement base |
| 2026-02-25 | day | 2026-02-25 | Annual report for the year ended 2025-12-31 signed; auditor's report dated the same day | Historical — signed in Santa Monica, California | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 150 | Audited prior-period anchor (FY2025) for the pathway's prior period; the only audited statements in the set after FY2024 |
| 2026-05-07 | day | 2026-05-07 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — signed in Santa Monica, California | 10-Q_2026-03-31_zip-20260331.htm.jsonl, page 90 | Q1 2026 unaudited statements; records the credit facility's 2026-04-30 expiry as a subsequent event |
| 2026-08-05 | day | 2026-08-05 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — signed in Santa Monica, California | 10-Q_2026-06-30_zip-20260630.htm.jsonl, page 93 | Q2 2026 unaudited statements; first report of the June 2026 notes repurchase and the extinguishment gain |
| 2026-11-09 | day | 2026-11-09 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — signed in Santa Monica, California | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 97 | Latest source in the set; nine days before the as-of date, so the 2026-11-09 to 2026-11-18 window has no source |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 10 |
| Calculated | 3 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 12 |
| Fields total | 12 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 5 |

### T1 - Input gate

| Gate item | Result | Detail | Source |
| --- | --- | --- | --- |
| Objective | Stated by the pathway | Full credit assessment: should we own this issuer, in which instrument, and why. No separate user objective is in the run settings | Run settings (not issuer evidence) |
| Issuer and reporting perimeter | Pass | Ziprecruiter, Inc., a Delaware corporation, registrant of all five filings; consolidated with ZipRecruiter Israel Ltd., ZipRecruiter Canada Ltd. and Poplar Technologies Ltd. (Breakroom); ZipRecruiter UK Ltd. dissolved 2025-12-02; one operating and reportable segment; the notes are issued by the registrant itself | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 11–13; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128 |
| As-of date and cutoff | Pass | As-of 2026-11-18, cutoff 2026-11-18; latest supplied document signed 2026-11-09, cover share count dated 2026-11-02 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 1 and 97 |
| Current and prior period | Pass | Current period Q3 2026 (three and nine months ended 2026-09-30); prior period FY2025 (audited, year ended 2025-12-31) | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 98 |
| Statement coverage | Pass | Annual income statement and cash flow for FY2023, FY2024 and FY2025; balance sheets at 2024-12-31, 2025-12-31 and 2026-09-30; nine-month 2025 comparatives in the Q3 2026 report. Q4 2025 is not reported separately in any source | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–10 |
| Debt documents | Gap | No executed indenture or credit agreement supplied; the run settings declare no legal documents. The annual report's exhibit list names the indenture (dated 2022-01-12, Computershare Trust Company, N.A. as trustee) and the credit agreement (dated 2021-04-30, JPMorgan Chase Bank, N.A. as administrative agent, with four amendments and a 2024-07-08 supplement), both incorporated by reference. Terms in this run come from the filings' own description of the notes and the facility | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 127–129 and 148–149 |
| Ratings, market prices, peers | Gap | None supplied. The only market evidence in the set is the notes' fair value estimate in the Q3 2026 report | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 19 |
| Portfolio and fund limits | Gap | None supplied | Run settings (not issuer evidence) |
| Lender presentation, earnings releases, 8-Ks | Gap | None collected; the collection note says presentations are optional | Pack collection note (not a pinned source) |
| Overall gate | Partial | Sufficient for Financial foundation, Business & governance and Fundamental credit on issuer filings; insufficient for covenant, structural-priority, recovery, ratings and market-implied work | See T4 |

### T2 - Source register

| Source | Logical source | Family | Period | Entity | Authority tier | Quality | Active representation | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_zip-20241231.htm.jsonl | FY2024 annual report | Annual report (audited statements) | Year ended 2024-12-31, with FY2023 and FY2022 comparatives where the filing prints them | Ziprecruiter, Inc. consolidated | 1 (primary filing) | High; audited | Supplied text extract is the only active representation; the original page layout is not reviewed | Superseded for current-period facts by the FY2025 annual report; kept for FY2023–FY2024 statements and history |
| 10-K_2025-12-31_zip-20251231.htm.jsonl | FY2025 annual report | Annual report (audited statements) | Year ended 2025-12-31, with FY2024 and FY2023 comparatives | Ziprecruiter, Inc. consolidated | 1 (primary filing) | High; audited | Supplied text extract is the only active representation | Directors, executive pay and ownership are incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2026-03-31_zip-20260331.htm.jsonl | Q1 2026 quarterly report | Quarterly report (unaudited) | Quarter ended 2026-03-31 | Ziprecruiter, Inc. consolidated | 1 (primary filing) | Medium; unaudited | Supplied text extract is the only active representation | Unaudited; condensed notes |
| 10-Q_2026-06-30_zip-20260630.htm.jsonl | Q2 2026 quarterly report | Quarterly report (unaudited) | Quarter ended 2026-06-30 | Ziprecruiter, Inc. consolidated | 1 (primary filing) | Medium; unaudited | Supplied text extract is the only active representation | Unaudited; June 2026 repurchase date not stated to the day |
| 10-Q_2026-09-30_zip-20260930.htm.jsonl | Q3 2026 quarterly report | Quarterly report (unaudited) | Quarter ended 2026-09-30 | Ziprecruiter, Inc. consolidated | 1 (primary filing) | Medium; unaudited | Supplied text extract is the only active representation | Unaudited; controlling source for current-period facts |

### T4 - Content-to-module map

| Module | Capability | Disposition | Readiness | Source-located evidence | Limitation |
| --- | --- | --- | --- | --- | --- |
| CP-1 | Financial foundation | Recommended (selected for this run) | READY_WITH_LIMITATIONS | Statements: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 98–101; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6–10. Debt: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 127–129; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 21–22. Adjusted EBITDA reconciliation and liquidity: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 30 and 39–43 | Adjusted EBITDA is the company's own measure (adds back stock-based compensation); the indenture's leverage definition is not supplied; Q4 2025 must be derived as FY2025 less nine months 2025 |
| CP-1A | Business & governance | Recommended (selected for this run) | READY_WITH_LIMITATIONS | Business description: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 6–13; dual-class and key-person risk: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 5–6; ownership and compensation: not supplied | Part III governance content is incorporated by reference to a proxy statement not in the set; no investor presentation |
| CP-2 | Fundamental credit | Recommended (selected for this run) | READY_WITH_LIMITATIONS | Same statements and debt evidence as Financial foundation; risk factors: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 46–95 | Depends on the Financial foundation and Business & governance outputs; no rating or market view to set against it |
| CP-1B | Earnings changes | Not selected; sources support | READY | Q3 2026 against Q3 2025 and nine months: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 7 and 35–38 | No earnings release or guidance document |
| CP-1D | Earnings quality | Not selected; sources support | READY_WITH_LIMITATIONS | Adjusted EBITDA bridge, stock-based compensation, gain on debt extinguishment, deferred tax: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10 and 28–30 | Company definition only |
| CP-2D | Liquidity | Not selected; sources support | READY_WITH_LIMITATIONS | Cash, expired facility, cash-collateralised letters of credit: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6, 17 and 21 | No committed facility remains, so liquidity is cash only |
| CP-3C | Refinancing & LME | Not selected; sources support | READY_WITH_LIMITATIONS | Notes maturity, call schedule and 2026 repurchases: 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 128–129; 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 21–22 and 40 | Indenture not supplied; no market access evidence |
| CP-2G | Forward credit model | Not selected; sources support | READY_WITH_LIMITATIONS | Quarterly statements and key operating metrics: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 28–30 | No guidance or management case |
| CP-2A | Downside | Not selected; sources support | CONDITIONAL | Statements as above | Depends on the forward model; no covenant levels to stress |
| CP-4 | Legal & covenants | Blocked | BLOCKED | Summary only: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 39 and 85 | No executed indenture or credit agreement; the run settings declare none |
| CP-4A | Covenant capacity | Blocked | BLOCKED | Same summary | Covenant levels and definitions are not supplied |
| CP-4B | Structural priority | Blocked | BLOCKED | Notes described as senior unsecured obligations of the registrant with guarantees: 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128 | Guarantors are not named |
| CP-4C | Recovery & fulcrum | Blocked | BLOCKED | Same | Guarantors, security and enterprise-value inputs are not supplied |
| CP-2H | Ratings & triggers | Blocked | BLOCKED | None | No rating supplied |
| CP-3D | Market-implied risk | Blocked | BLOCKED | Fair value estimate only: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 19 | No bond price, spread or equity market data |
| CP-3 | Security selection | Blocked | BLOCKED | One instrument outstanding: 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21 | No quote or relative-value inputs |
| CP-6 | Committee decision | Blocked | BLOCKED | None | No portfolio or fund limits supplied |
| CP-2E | Rates, FX & hedging | Inapplicable | NOT_REQUIRED | Fixed-rate notes, no hedges: 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 44–45 | Foreign currency exposure is described as not material |
| CP-1C | Peer benchmark | Blocked | BLOCKED | None | No peer set supplied |

### T6 - Evidence trace

| Trace ID | Claim | Value | Period | Source | Lineage |
| --- | --- | --- | --- | --- | --- |
| E1 | Senior unsecured notes principal outstanding | USD 250.7 million | At 2026-09-30 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 40 | Directly Sourced |
| E2 | Notes terms: issued 2022-01-12, USD 550.0 million, 5%, due 2030-01-15, coupons 15 January and 15 July | USD 550.0 million; 5% | Issue and maturity | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21; 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128 | Directly Sourced |
| E3 | Principal repurchased, nine months 2026 | USD 299.3 million for USD 236.8 million (USD 294.6 million for USD 232.8 million privately negotiated in June 2026; USD 4.7 million for USD 4.0 million in the open market in September 2026) | Nine months 2026 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21 | Directly Sourced |
| E4 | Gain on debt extinguishment | USD 60.0 million (Q2 2026 USD 59.3 million; Q3 2026 USD 0.7 million) | Nine months 2026 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 7 and 22; 10-Q_2026-06-30_zip-20260630.htm.jsonl, page 20 | Directly Sourced |
| E5 | Revolving credit facility expired unrenewed, no borrowings at expiry | USD 290.0 million commitments, expiry 2026-04-30 | Q2 2026 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21; 10-Q_2026-03-31_zip-20260331.htm.jsonl, page 22 | Directly Sourced |
| E6 | Letters of credit cash collateralised by a restricted deposit | USD 2.1 million | At 2026-09-30 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 17 | Directly Sourced |
| E7 | Cash and cash equivalents; marketable securities | USD 174.7 million; nil | At 2026-09-30 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 6 | Directly Sourced |
| E8 | Revenue | USD 124.4 million (Q3 2026); USD 350.1 million (nine months 2026) | Q3 2026; nine months 2026 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 7 | Directly Sourced |
| E9 | Adjusted EBITDA (company definition) | USD 20.8 million (Q3 2026); USD 45.0 million (nine months 2026) | Q3 2026; nine months 2026 | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 30 | Directly Sourced |
| E10 | Fair value of the notes | USD 209.3 million (2026-09-30); USD 429.0 million (2025-12-31) | At period ends | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 19 | Directly Sourced |
| E11 | Notes carrying value ties to principal less unamortised issuance costs | USD 248.7 million | At 2026-09-30 | calculation C4 | Calculated |
| E12 | Gain on extinguishment reconciles to principal, price and write-off | USD 60.0 million | Nine months 2026 | calculation C5 | Calculated |
| E13 | Repurchase price as a share of principal repurchased | 79.12% | Nine months 2026 | calculation C2 | Calculated |
| E14 | Indenture covenant package (incurrence limits; risk factor also cites net leverage ratio requirements) | Not supplied: no executed indenture; filings summarise it | n/a | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 39 and 85 | Insufficient Information |
| E15 | Guarantors of the notes | Not supplied: the filing mentions guarantees but names no guarantor | n/a | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 128 | Insufficient Information |
| E16 | Events between 2026-11-09 and 2026-11-18 | Not supplied: no source after the Q3 2026 report | n/a | Not applicable | Insufficient Information |

### P3 - Input inventory

| Source | Original file named in the extract | Original file sha256 stated in the extract | Extract pages | Extract size | Pinned extract sha256 | Duplicate or version relation | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_zip-20241231.htm.jsonl | 10-K_2024-12-31_zip-20241231.htm | d3d227e7f53994ecd9f5ba8e7db087d5b0958711a2411b12c6513a07b8bf5472 | 153 | 428,618 bytes | 4c6af145b03114d7fc912e17b781557c30eaf55222c72a7a1e2ec997aad65c29 | Earlier annual report; not a duplicate | Retained, active |
| 10-K_2025-12-31_zip-20251231.htm.jsonl | 10-K_2025-12-31_zip-20251231.htm | f4ddaa199513dfe282576206cc432f77dfccb69a2b547fcf3e894f9805edad2e | 150 | 426,427 bytes | 6dfe6d458eadd70f776719e563c19476bcf176d4563b526b71feb00c5d33eb46 | Controlling annual report; not a duplicate | Retained, active |
| 10-Q_2026-03-31_zip-20260331.htm.jsonl | 10-Q_2026-03-31_zip-20260331.htm | 14484146153e73624435ea7621406b21d8d0aee8b68b27497bf02a3a6ce6b35f | 90 | 249,649 bytes | 5e50a7cc70946277b7a20b88ef836cbbcfa0d0dd3d289ffc085bf555703efc7f | Distinct quarter; not a duplicate | Retained, active |
| 10-Q_2026-06-30_zip-20260630.htm.jsonl | 10-Q_2026-06-30_zip-20260630.htm | 4e3074ee3163e427c34cca02f12cd000ca19c5208c34ad0adfc486a2a921d428 | 93 | 266,878 bytes | b52e8b008cdcfe329007adb1e5461c18705547e8db0ac74d8a5ed84b46d67915 | Distinct quarter; not a duplicate | Retained, active |
| 10-Q_2026-09-30_zip-20260930.htm.jsonl | 10-Q_2026-09-30_zip-20260930.htm | 9edad54eeab18aed2d21618ce76ea83a4a346623d930669377c03aa0baa49329 | 97 | 271,615 bytes | 02a71bc8b05fc313332809859cd2714710e240d686bc1d6349f7b0b2e3bd1a83 | Latest quarter; controls current-period facts | Retained, active |

## Calculations

The figures below reconcile the debt movement that every later module will rely on. Amounts are in USD millions as printed in the notes; the statements print thousands.

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Notes principal outstanding at 2026-09-30 | USD 550.0 million issued less USD 299.3 million repurchased in nine months 2026 | USD 250.7 million, equal to the principal the report states | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 21 and 40 |
| C2 | Principal repurchased, cash paid and price as a share of principal | USD 294.6 million plus USD 4.7 million gives USD 299.3 million; USD 232.8 million plus USD 4.0 million gives USD 236.8 million (cash flow statement prints 236,764 thousand); 236.8 divided by 299.3 | 79.12% of principal | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 10 and 21 |
| C3 | Discount captured on repurchase | USD 299.3 million less USD 236.8 million | USD 62.5 million before the issuance cost write-off | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 21 |
| C4 | Notes carrying value | USD 250.7 million less USD 2.0 million unamortised issuance costs; balance sheet prints 248,715 thousand | USD 248.7 million | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 6 and 22 |
| C5 | Gain on extinguishment | USD 62.5 million less USD 2.5 million issuance cost write-off | USD 60.0 million, equal to the gain the income statement prints (60,003 thousand) | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 7 and 22 |
| C6 | Price definitions in the June 2026 repurchase | One note prints USD 229.4 million "plus fees" and the debt note prints USD 232.8 million; USD 229.4 million plus USD 3.4 million of fees directly related to the transaction | USD 232.8 million; the two figures differ only by fees, so they agree | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 19, 21 and 22 |

## Gaps

The set supports the selected modules but leaves the following gaps, each stated with what it blocks.

| Gap | Severity | What it affects | Remediation | Source |
| --- | --- | --- | --- | --- |
| No executed indenture for the 5% senior unsecured notes due 2030. The filings describe incurrence-style negative covenants, a change-of-control put at 101% and a call price of 101.25% in 2026 falling to 100.00% from 2027-01-15, and one risk factor also refers to net leverage ratio requirements that the covenant description does not define | MATERIAL | Legal & covenants, Covenant capacity, Refinancing & LME (call and make-whole terms), Recovery & fulcrum | Obtain the executed indenture (Exhibit 4.4, filed with an 8-K dated 2022-01-12) and any supplement | 10-Q_2026-09-30_zip-20260930.htm.jsonl, pages 39 and 85; 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 129 and 148 |
| Guarantors of the notes are not named, although the annual report refers to the notes and the guarantees | MINOR | Structural priority, Recovery & fulcrum | Obtain the indenture and the list of subsidiaries filed as Exhibit 21.1, neither of which is supplied | 10-K_2025-12-31_zip-20251231.htm.jsonl, pages 128 and 149 |
| No credit rating, bond price, spread or peer set; the only market evidence is the company's own fair value estimate for the notes | MINOR | Ratings & triggers, Market-implied risk, Security selection, Peer benchmark | Supply dated quotes and ratings if market work is wanted | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 19 |
| No lender presentation, earnings release or 8-K; the filings' own signature dates are the only publication dates, and no filing date is stated | MINOR | Earnings changes (guidance), event dating | Supply the quarterly presentation and earnings releases if wanted | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 97 |
| Part III governance (directors, executive pay, ownership) is incorporated by reference to a proxy statement that is not supplied | MINOR | Business & governance | Supply the 2026 proxy statement | 10-K_2025-12-31_zip-20251231.htm.jsonl, page 147 |
| The window from 2026-11-09 to 2026-11-18 is not covered by any source | MINOR | Every module that quotes a current balance | State the period covered in each output | 10-Q_2026-09-30_zip-20260930.htm.jsonl, page 97 |

## Next module

The orchestrator selects the next module.
