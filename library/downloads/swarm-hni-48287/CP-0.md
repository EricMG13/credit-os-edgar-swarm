## Request

Source readiness for Hni Corp (HNI Corporation, issuer hni-48287), as of 2026-11-18, on the credit snapshot pathway. It covers the five supplied filings, two annual reports and three quarterly reports, the latest for the quarter ended 2026-10-03, and states whether they can support the requested analysis.

## Sources

No upstream handoff was supplied to this module; it is the entry point.

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-28_hni-20241228.htm.jsonl | Annual report on Form 10-K of HNI Corporation for the fiscal year ended December 28, 2024 | 2025-02-25 (filing date as stated in the 2025 annual report) | 999f58da0b84782fd97532881e9c7a07573ef51289aed6f3d93f517fc40388e2 | Inventoried by entity, period and content; identified as the pre-Steelcase baseline and the only source of the superseded covenant definitions |
| 10-K_2026-01-03_hni-20260103.htm.jsonl | Annual report on Form 10-K of HNI Corporation for the fiscal year ended January 3, 2026 | 2026-03-03 (signature date) | b6cfbf8c6cf7f5cf7fb5940b6d3b59b2f17fff56a63904129c74eae79a5a02b2 | Inventoried by entity, period and content; identified as the year-end anchor for the Steelcase acquisition, the debt maturity table and the leases, benefits and commitments notes |
| 10-Q_2026-04-04_hni-20260404.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 4, 2026 | 2026-05-06 (signature date) | b84d678b7b6507f27ff44abee20a4fdf46475dff36e1bbdd9bcd6f3e30748ae7 | Inventoried by entity, period and content; identified as the first quarter with Steelcase in the current-year column |
| 10-Q_2026-07-04_hni-20260704.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 4, 2026 | 2026-08-04 (signature date) | aad7ad70813e3c078773faa74f6e17fbba5464a879acaa0d63c2295e542e7ae1 | Inventoried by entity, period and content; identified as the quarter of the June 2026 term loan B refinancing |
| 10-Q_2026-10-03_hni-20261003.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 3, 2026 | 2026-11-03 (signature date) | 2a8dee24eaf2212e988af283b9f34996abcdc7c31f9c92db3a61d05e92b3c5cb | Inventoried by entity, period and content; identified as the latest filing and the current-period anchor for the snapshot |

## Findings

### Bottom line

The five supplied filings are sufficient for a credit snapshot of Hni Corp through the quarter ended 2026-10-03, but only on the post-Steelcase perimeter, and covenant headroom cannot be tested because the credit agreement and its definitions were not supplied.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14–18

The filings print the statements, the debt note with covenant levels, the segment note and the liquidity discussion, so Financial foundation, Business & governance and Fundamental credit can run on them. Steelcase, acquired on 2025-12-10, is in the Q3 2026 figures but not in the prior-year columns, so the 133% rise in Q3 net sales reflects the acquisition and cannot be read as organic growth, and its purchase accounting is still provisional. No ratings, market prices, peer set, management adjusted-EBITDA bridge or filing after 2026-11-03 was supplied, which leaves the latest filing 15 days before the as-of date.
Basis: 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 6, 10–11, 30, 44; calculation C1

### T1 - Input gate

| Gate item | Finding | Gate result | Source |
|---|---|---|---|
| Reporting entity | HNI Corporation, an Iowa corporation whose common stock is listed on the NYSE as HNI, reporting consolidated with its subsidiaries; the run settings name it Hni Corp. The consolidated group is the perimeter for debt, earnings, leverage and coverage. No separate borrower or guarantor statements are supplied. | Pass | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 1 |
| Stated objective | None is stated in the run settings; the objective is the credit snapshot pathway's use case, a credit view of the issuer at the quarter ended 2026-10-03. | Recorded | Run settings |
| As-of date and cutoff | As-of date 2026-11-18 and cutoff 2026-11-18. The latest supplied document is signed 2026-11-03 and nothing supplied is dated after the cutoff. | Pass | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 44 |
| Reporting periods | Current period Q3 2026 (three months ended 2026-10-03) and prior period FY2025 (53 weeks ended 2026-01-03), as set in the run settings. The fiscal year is a 52/53-week year ending on the Saturday nearest December 31; FY2024 had 52 weeks and ended 2024-12-28, and the extra FY2025 week fell in the fourth quarter. | Pass | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 3, 44 |
| Perimeter and comparability | Steelcase Inc. was acquired on 2025-12-10 and is consolidated from that date in the Workplace Furnishings segment; a workplace furnishings dealer acquired in September 2026 is in the same segment. Q3 2026 net sales were USD 1,592.9 million against USD 683.8 million in Q3 2025, an increase of 133% that the filer attributes to Steelcase (USD 856.6 million) and the dealer (USD 14.1 million). Prior-year columns exclude Steelcase; FY2025 includes Steelcase net sales of USD 187.5 million from the acquisition date. | Limitation: year-on-year comparisons across the acquisition are not like for like | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 6–7, 30; 10-K_2026-01-03_hni-20260103.htm.jsonl, page 46 |
| Executed legal documents | The run settings declare no legal documents. The Credit Agreement of 2025-09-05 (amended 2025-11-05, 2025-12-10 and 2026-06-10) and the terms of the Public Notes are summarised in the debt note but not supplied, so the definitions of Net Leverage Ratio, Interest Coverage Ratio and Consolidated EBITDA, the guarantor list and the collateral package are not available from a controlling document. | Gap: conditional for covenant, structure and recovery work | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14–18; Run settings |
| Ratings, prices and peers | The run settings supply no ratings, quotes, valuation, peer set or portfolio workbook, and the filings print no credit rating. | Gap: not supplied | Run settings |
| Company-adjusted measures | No earnings release, investor presentation or management bridge is supplied, and the filings print no adjusted EBITDA; any adjusted figure must be built from the filings' own line items (acquisition costs, restructuring, purchase accounting) and labelled as analyst-built. | Limitation | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 11 |
| Prior run | None; this is the first run of this pathway for the issuer. | Recorded | Run settings |
| Readiness result | READY_WITH_LIMITATIONS for the credit snapshot objective on the selected analytical work (Source readiness, Financial foundation, Business & governance, Fundamental credit). CONDITIONAL for any work that needs executed credit documents, ratings, market prices or a peer set. | READY_WITH_LIMITATIONS | Rows above in this register |

### T2 - Source register

| Source | Document | Document date | Period covered | Source tier | sha256 | Effective use and limitation |
|---|---|---|---|---|---|---|
| 10-K_2024-12-28_hni-20241228.htm.jsonl | Form 10-K, fiscal year ended 2024-12-28 | 2025-02-25 (filing date as stated in the 2025 annual report) | FY2024 (52 weeks) with FY2023 and FY2022 income statement comparatives and the 2023-12-30 balance sheet | Tier 1, primary filing | 999f58da0b84782fd97532881e9c7a07573ef51289aed6f3d93f517fc40388e2 | Pre-Steelcase baseline and superseded debt and covenant terms. The 2024-12-28 balance sheet shows cash and other assets differently from the 2025 annual report's comparative (see gaps). 101 text chunks. |
| 10-K_2026-01-03_hni-20260103.htm.jsonl | Form 10-K, fiscal year ended 2026-01-03 | 2026-03-03 (signature date) | FY2025 (53 weeks) with FY2024 and FY2023 comparatives | Tier 1, primary filing | b6cfbf8c6cf7f5cf7fb5940b6d3b59b2f17fff56a63904129c74eae79a5a02b2 | Year-end anchor for the Steelcase transaction, debt by instrument and maturity by year, leases, benefit plans and commitments. Steelcase appears for three weeks only; purchase accounting was preliminary and was revised in later quarters. 131 text chunks. |
| 10-Q_2026-04-04_hni-20260404.htm.jsonl | Form 10-Q, quarter ended 2026-04-04 | 2026-05-06 (signature date) | Q1 2026 against Q1 2025 | Tier 1, primary filing | b84d678b7b6507f27ff44abee20a4fdf46475dff36e1bbdd9bcd6f3e30748ae7 | Intermediate balance sheet and cash flow; prior-year column excludes Steelcase. 37 text chunks. |
| 10-Q_2026-07-04_hni-20260704.htm.jsonl | Form 10-Q, quarter ended 2026-07-04 | 2026-08-04 (signature date) | Q2 2026 and six months 2026 against 2025 | Tier 1, primary filing | aad7ad70813e3c078773faa74f6e17fbba5464a879acaa0d63c2295e542e7ae1 | Intermediate balance sheet and cash flow; Amendment No. 3 term loan B refinancing of 2026-06-10; prior-year columns exclude Steelcase. 42 text chunks. |
| 10-Q_2026-10-03_hni-20261003.htm.jsonl | Form 10-Q, quarter ended 2026-10-03 | 2026-11-03 (signature date) | Q3 2026 and nine months 2026 against 2025 | Tier 1, primary filing | 2a8dee24eaf2212e988af283b9f34996abcdc7c31f9c92db3a61d05e92b3c5cb | Current-period anchor: latest statements, debt note, covenant levels, segment note, liquidity discussion and subsequent-quarter events. Prior-year columns exclude Steelcase. 44 text chunks. |

### T4 - Content-to-module map

| Content located | Evidence demand | Source | Modules it informs | Mapping status | Readiness effect | Limitation |
|---|---|---|---|---|---|---|
| Income statement, balance sheet and cash flow for the quarter, year to date and fiscal year | Period-labelled statement lines for Q3 2026, nine months 2026, FY2025, FY2024 and the prior-year comparatives | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2–5; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 73–76; 10-K_2024-12-28_hni-20241228.htm.jsonl, pages 63–65 | Financial foundation (CP-1); Fundamental credit (CP-2); Earnings changes (CP-1B); Earnings quality (CP-1D) | Recommended | READY_WITH_LIMITATIONS | Perimeter break at 2025-12-10; FY2025 has 53 weeks; no stand-alone Q4 2025 statement and no last-twelve-months statement, both would be derived; amounts may not sum because of rounding. |
| Debt note: instruments, rates, amortisation, revolver size, covenant levels | Every instrument with rate, maturity, security and amount, and covenant levels by test date | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 14–19; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 101–106 | Financial foundation (CP-1); Liquidity (CP-2D); Refinancing & LME (CP-3C); Legal & covenants (CP-4); Covenant capacity (CP-4A); Structural priority (CP-4B) | Recommended for Financial foundation, Liquidity and Refinancing & LME; blocked for Legal & covenants, Covenant capacity and Structural priority | READY_WITH_LIMITATIONS; CONDITIONAL for the three modules that need executed documents | No executed credit agreement or indenture; covenant definitions, guarantors and collateral are not itemised; the maturity table by year is printed only in the 2025 annual report as at 2026-01-03. |
| Segment note: Workplace Furnishings and Residential Building Products | Net sales, cost of sales, operating income, depreciation and amortisation, capital expenditure by segment | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 24–26; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 125–127 | Financial foundation (CP-1); Business & governance (CP-1A); Fundamental credit (CP-2); Earnings changes (CP-1B) | Recommended | READY | Identifiable assets by segment appear only in the annual report, not in the quarterly reports. |
| Business description, competition, properties, legal proceedings, executive officers and risk factors | Business model, customers and channels, management and governance facts | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 3–42 | Business & governance (CP-1A) | Recommended | READY_WITH_LIMITATIONS | Board, compensation and ownership items are incorporated by reference to a proxy statement that was not supplied. |
| Steelcase and dealer acquisitions: consideration, purchase accounting, pro forma results | Consideration, allocation, measurement-period status and pro forma comparatives | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 7–11; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 94–95 | Business & governance (CP-1A); Financial foundation (CP-1); Fundamental credit (CP-2) | Recommended | READY_WITH_LIMITATIONS | Allocation is provisional (Steelcase to be finalised in the fourth quarter of 2026, the dealer in 2027); pro forma gives net sales and net income only, not EBITDA or cash flow. |
| Liquidity discussion, cash requirements, capital allocation | Cash, revolver capacity and drawings, capex outlook, dividends, repurchases, commitments | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 35–37; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 49–52 | Liquidity (CP-2D); Fundamental credit (CP-2); Forward credit model (CP-2G) | Recommended for Fundamental credit; recommended for Liquidity if selected | READY_WITH_LIMITATIONS | The filings describe letters of credit and surety bonds but do not say whether any reduce revolver availability; the cash requirements summary is as at 2026-01-03 with a statement of no material change. |
| Leases, benefit plans and other claims outside debt | Lease maturities, pension and retiree plan funding, purchase obligations, guarantees, supplier finance | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 51–52, 122–125, 128–129; 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 23–24, 26 | Fundamental credit (CP-2); Liquidity (CP-2D); Recovery & fulcrum (CP-4C) | Recommended | READY_WITH_LIMITATIONS | Lease maturity and benefit payment tables are as at 2026-01-03 only; the quarterly reports update the balance sheet lines but not the tables. |
| Interest rate swap and variable-rate exposure | Hedge terms, notional, variable-rate debt, rate sensitivity | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 21; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 57–58 | Rates, FX & hedging (CP-2E) | Recommended if selected | READY_WITH_LIMITATIONS | The rate sensitivity is printed as at 2026-01-03 only; the quarterly report states no material change. |
| Acquisition costs, restructuring, purchase accounting and tariff effects | Itemised non-recurring and non-cash items in the income statement | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 2, 11, 24, 26–27, 30–33 | Earnings quality (CP-1D); Earnings changes (CP-1B); Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | No company-defined adjusted EBITDA; the dollar amount of tariff refunds recognised in Q3 2026 and in the nine months is not stated. |
| Credit ratings and rating triggers | Agency ratings, outlooks and any ratings-based pricing or triggers | Run settings | Ratings & triggers (CP-2H) | Blocked | CONDITIONAL | No rating is supplied and the filings print none. |
| Market prices, quotes and security terms | Dated quotes for the secured notes and loans | Run settings | Market-implied risk (CP-3D); Security selection (CP-3) | Blocked | CONDITIONAL | No quote or deal term is supplied. |
| Peer set and valuation | Peer financials and market values | Run settings | Peer benchmark (CP-1C) | Inapplicable for this run | Not applicable | The run settings name no peer source. |
| Executed credit documents | Credit Agreement, Public Notes indenture, guarantees and security documents | Run settings | Intercreditor control (CP-4D); Recovery & fulcrum (CP-4C); Structural priority (CP-4B) | Blocked | CONDITIONAL | The run settings declare no legal documents. |
| Prior run | An earlier run of the same issuer and pathway | Run settings | Changes since the last run (CP-8) | Inapplicable for this run | Not applicable | First run of this pathway. |

### T6 - Evidence trace

| Trace item | Statement traced | Source | Located wording |
|---|---|---|---|
| Steelcase closing | Steelcase Inc. was acquired on 2025-12-10 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 6 | "On December 10, 2025, the Corporation acquired Steelcase Inc." |
| Steelcase consideration | Total consideration about USD 1.9 billion, of which cash USD 864.5 million | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 8 | "total cash consideration of $864.5 million" |
| Credit Agreement | Dated 2025-09-05, administrative agent Wells Fargo Bank, amended 2025-11-05, 2025-12-10 and 2026-06-10 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 15 | "On September 5, 2025, in connection with the acquisition of Steelcase, the Corporation entered into a Credit Agreement" |
| Revolving Facility | USD 425 million facility with USD 45 million drawn at 2026-10-03 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 16 | "As of October 3, 2026, the Corporation had $45 million of borrowings outstanding under the $425 million Revolving Facility." |
| Covenant levels | Maximum Net Leverage Ratio 4.25 to 1.00 for the first four full fiscal quarters after closing, 4.00 to 1.00 for the fifth and sixth, 3.50 to 1.00 thereafter; minimum Interest Coverage Ratio 3.50 to 1.00; compliance stated at 2026-10-03 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 18 | "The Corporation was in compliance with these financial covenants as of October 3, 2026." |
| Public Notes | USD 450.0 million at 5.125% due 2029, of which USD 351 million were issued by HNI in exchange and USD 99 million remain Steelcase notes | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 106 | "scheduled maturity of January 18, 2029" |
| Legal documents not supplied | The run declares no legal documents | Run settings | legal_documents: none |
| Superseded covenant definitions | The 2024 annual report prints a consolidated leverage ratio of not more than 3.5 to 1.0 and an interest coverage ratio of not less than 4.0 to 1.0 under the earlier credit agreements | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 86 | "a consolidated leverage ratio (as defined in the credit agreements) of not greater than 3.5 to 1.0" |
| Fiscal calendar | 52/53-week year; FY2025 has 53 weeks | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 44 | "The financial statements for fiscal year 2025 are on a 53-week basis" |
| Pro forma results | Pro forma net sales of USD 5,932.6 million for FY2025 and USD 5,687.8 million for FY2024, net income USD 176.1 million and USD 119.9 million | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 95 | "Net sales $ 5,932.6 $ 5,687.8" |
| Latest signature date | The Q3 2026 quarterly report is signed 2026-11-03 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 44 | "Date: November 3, 2026" |
| Q3 net sales growth | Net sales for Q3 2026 rose 133% on the prior-year quarter | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 30 | "an increase of 133 percent" |

### P3 - Input inventory

| Source | Original file | Document family | Size in bytes | Text chunks | Entity | Period | Accessibility | Duplicate candidate |
|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-28_hni-20241228.htm.jsonl | 10-K_2024-12-28_hni-20241228.htm | Annual report, Form 10-K | 275765 | 101 | HNI Corporation | Fiscal year ended 2024-12-28 | Readable text | None; the 2025 annual report restates comparatives but is a different period |
| 10-K_2026-01-03_hni-20260103.htm.jsonl | 10-K_2026-01-03_hni-20260103.htm | Annual report, Form 10-K | 349021 | 131 | HNI Corporation | Fiscal year ended 2026-01-03 | Readable text | None |
| 10-Q_2026-04-04_hni-20260404.htm.jsonl | 10-Q_2026-04-04_hni-20260404.htm | Quarterly report, Form 10-Q | 101481 | 37 | HNI Corporation | Quarter ended 2026-04-04 | Readable text | None |
| 10-Q_2026-07-04_hni-20260704.htm.jsonl | 10-Q_2026-07-04_hni-20260704.htm | Quarterly report, Form 10-Q | 114821 | 42 | HNI Corporation | Quarter ended 2026-07-04 | Readable text | None |
| 10-Q_2026-10-03_hni-20261003.htm.jsonl | 10-Q_2026-10-03_hni-20261003.htm | Quarterly report, Form 10-Q | 122114 | 44 | HNI Corporation | Quarter ended 2026-10-03 | Readable text | None |
| _retrieval.json | _retrieval.json | Support file listed in the issuer folder | Not supplied: size not recorded | Not supplied: not a text source | Not supplied: not read | Not supplied: not read | Not read; not used as evidence | None |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-25 | day | 2025-02-25 | Annual report for the fiscal year ended 2024-12-28 signed | Historical — Date: February 25, 2025 | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 57 | Last annual report before the Steelcase acquisition; the baseline for the legacy HNI perimeter and for the superseded covenant terms. |
| 2026-03-03 | day | 2026-03-03 | Annual report for the fiscal year ended 2026-01-03 signed | Historical — Date: March 3, 2026 | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 67 | First annual report with Steelcase consolidated (from 2025-12-10); anchors the year-end debt, maturity table and 53-week year. |
| 2026-05-06 | day | 2026-05-06 | Quarterly report for the quarter ended 2026-04-04 signed | Historical — Date: May 6, 2026 | 10-Q_2026-04-04_hni-20260404.htm.jsonl, page 37 | First quarter in which Steelcase is in the current-year column but not the prior-year column. |
| 2026-08-04 | day | 2026-08-04 | Quarterly report for the quarter ended 2026-07-04 signed | Historical — Date: August 4, 2026 | 10-Q_2026-07-04_hni-20260704.htm.jsonl, page 42 | Covers the 2026-06-10 term loan B refinancing under Amendment No. 3. |
| 2026-11-03 | day | 2026-11-03 | Quarterly report for the quarter ended 2026-10-03 signed | Historical — Date: November 3, 2026 | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 44 | Latest supplied filing, 15 days before the as-of date; nothing supplied covers 2026-11-04 to 2026-11-18. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 22 |
| Calculated | 4 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 5 |
| Fields total | 5 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 4 |

## Calculations

| Calculation ID | Item | Inputs | Result |
|---|---|---|---|
| C1 | Days from the latest filing to the as-of date | As-of date 2026-11-18 less signature date 2026-11-03 of the quarterly report for the quarter ended 2026-10-03 | 15 days |
| C2 | Period continuity of the quarterly sequence | Period ends 2026-01-03, 2026-04-04, 2026-07-04 and 2026-10-03; 28 + 28 + 31 + 4 = 91 days from January to April, 26 + 31 + 30 + 4 = 91 days from April to July, 27 + 31 + 30 + 3 = 91 days from July to October | 91 days between each pair of period ends, or 13 weeks, so the three 2026 quarters follow the fiscal year with no gap |
| C3 | Difference between two presentations of the balance sheet at 2024-12-28 | Cash and cash equivalents USD 22.5 million less USD 20.2 million; other assets USD 63.0 million less USD 60.7 million | USD 2.3 million on each line |
| C4 | Reconciliation of 2023 operating costs between the two annual reports | Selling and administrative expenses USD 772.0 million plus acquisition costs USD 41.2 million, against USD 813.2 million | USD 813.2 million, equal to the 2024 annual report's single line |

## Gaps

The gaps below limit what later analysis can say; none stops the credit snapshot from being built on the supplied filings.

| Gap or difference | What is missing or differs | Effect | Source |
|---|---|---|---|
| Executed credit documents | The Credit Agreement (2025-09-05, three amendments) and the Public Notes terms are described in the debt note but not supplied. The definitions behind Net Leverage Ratio, Interest Coverage Ratio and Consolidated EBITDA, the guarantors and the collateral are not printed. | Covenant headroom, guarantor and collateral coverage and structural priority are not calculable; the filer's statement of compliance at 2026-10-03 is the only test result. | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 15, 18 |
| Superseded covenant terms | The 2024 annual report prints a leverage test of not more than 3.5 to 1.0 on funded debt and an interest coverage test of not less than 4.0 to 1.0 under the credit agreements replaced on 2025-12-10. | These are not the current tests and must not be applied to the current agreement. | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 86 |
| Company-adjusted measures | No earnings release, investor presentation or adjusted EBITDA is supplied. The dollar amount of tariff refunds recognised in Q3 2026 and in the nine months is not stated; the second-quarter report gives only a margin effect. | Adjusted earnings can only be analyst-built from line items; tariff refunds cannot be sized in dollars from the filings. | 10-Q_2026-07-04_hni-20260704.htm.jsonl, pages 23, 30; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 24 |
| Ratings, prices, peers, portfolio | The run settings supply none of them and the filings print no credit rating. | Ratings, market-implied, peer and portfolio-fit work is not supported. | Run settings |
| Period after the latest filing | Nothing supplied is dated after 2026-11-03; any current report or event between 2026-11-04 and 2026-11-18 is outside the sources. | Subsequent events to the as-of date are not established. | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 44 |
| Perimeter break | Q3 2025 and nine months 2025 exclude Steelcase. Pro forma net sales and net income are given for Q3 2025 and nine months 2025 (USD 1,511.5 million and USD 4,422.0 million net sales) and for FY2025 and FY2024, but no pro forma EBITDA or cash flow; a last-twelve-months view would mix perimeters. | Growth and margin comparisons across the acquisition need the pro forma columns and must be labelled by perimeter. | 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 11; 10-K_2026-01-03_hni-20260103.htm.jsonl, page 95 |
| Provisional purchase accounting | Steelcase allocation is preliminary and the quarterly report already lowered goodwill by USD 121.3 million and raised intangible assets by USD 281.0 million since the annual report; the dealer allocation is also provisional. | Goodwill, intangibles, deferred taxes and amortisation can still change materially in the fourth quarter of 2026. | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 10–11 |
| Presentation difference: restricted cash | The 2024 annual report shows cash and cash equivalents of USD 22.5 million and other assets of USD 60.7 million at 2024-12-28; the 2025 annual report shows USD 20.2 million and USD 63.0 million for the same date and states that USD 2.4 million of restricted cash is in other assets. The 2024 annual report does not mention restricted cash. | Each line differs by USD 2.3 million, which is consistent with restricted cash having moved from cash to other assets, but the filings do not say so; year-end 2024 cash is taken from the later presentation when compared with 2025 and 2026. | 10-K_2024-12-28_hni-20241228.htm.jsonl, pages 63–64; 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 74, 76 |
| Presentation difference: acquisition costs | The 2024 annual report shows 2023 selling and administrative expenses of USD 813.2 million with no separate acquisition cost line; the 2025 annual report shows USD 772.0 million and a separate acquisition costs line of USD 41.2 million for 2023. | 2023 operating costs are the same in total but split differently; use the 2025 annual report's presentation. | 10-K_2024-12-28_hni-20241228.htm.jsonl, page 63; 10-K_2026-01-03_hni-20260103.htm.jsonl, page 73 |
| Capital expenditure outlook | The 2025 annual report expected 2026 capital expenditure of USD 140 million to USD 150 million; the quarterly report for Q3 2026 expects USD 125 million to USD 130 million. | The later statement governs; the change is not explained in the sources. | 10-K_2026-01-03_hni-20260103.htm.jsonl, page 49; 10-Q_2026-10-03_hni-20261003.htm.jsonl, page 36 |
| Tables dated 2026-01-03 only | The debt maturity table by year, the lease maturity table, the benefit plan payment tables and the market risk sensitivity are printed only in the 2025 annual report; the quarterly reports say there were no material changes. | Forward maturities and obligations as at 2026-10-03 are carried from the year-end tables and updated only for the stated debt movements. | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 51–52, 57–58, 101, 122–125 |
| Governance detail | Directors, executive compensation and ownership are incorporated by reference to a proxy statement that is not supplied; the 2025 annual report lists the executive officers. | Governance work is limited to management and risk-factor disclosure. | 10-K_2026-01-03_hni-20260103.htm.jsonl, pages 2, 42 |
| Page references | Source pages are fixed-size text chunks, not printed pages, and tables are flattened into text lines. | Citations name the chunk number; a statement can be split across two chunks. | 10-Q_2026-10-03_hni-20261003.htm.jsonl, pages 4–5 |

## Next module

The orchestrator selects the next module.
