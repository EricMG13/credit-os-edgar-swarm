---
issuer_id: cmc-22444
module_id: CP-0
analysis_date: 2026-11-18
run_id: cmc-22444-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

# COMMERCIAL METALS Co (cmc-22444) - source readiness as of 2026-11-18

## Request

Source readiness for COMMERCIAL METALS Co (cmc-22444), as of 2026-11-18, on the credit snapshot pathway. The scope is whether the 12 supplied documents can support the Financial foundation, Business & governance and Fundamental credit modules for the quarter ended 2026-05-31.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-08-31_cmc.htm.jsonl | Annual report on Form 10-K for the year ended August 31, 2024 | 2024-10-17 | 8d4b918ae5dfb9f103a90b6a498f9b473fc2884200199e013c27b12f54967ca8 | Prior-year statements, debt note and covenant levels; classified and mapped to modules |
| 10-K_2025-08-31_cmc.htm.jsonl | Annual report on Form 10-K for the year ended August 31, 2025 | 2025-10-16 | d925fb94e85a880b14ff8f2100f934eaf32d58443b3db315561ab0696f9679de | Latest annual statements, debt maturities, covenant levels and ratios, business description, risk factors, Part III reference |
| 10-Q_2025-11-30_cmc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended November 30, 2025 | 2026-01-08 | 328fcc682aa16787082e0972e0de6853f82c100000063f089113b06515594027 | First-quarter statements; classified and mapped to modules |
| 10-Q_2026-02-28_cmc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended February 28, 2026 | 2026-03-31 | 4509039dd0524549949453395b9a583f3d6068fdf90595372c256252f9d01380 | Second-quarter statements; classified and mapped to modules |
| 10-Q_2026-05-31_cmc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 31, 2026 | 2026-06-29 | d7c399e276f561642e056ef2918f65a8d1e9eeb24c4dca36c1c27a66a1ac0487 | Latest statements, debt, liquidity, acquisitions, litigation, segments; main evidence for the gate |
| EX99.1_2025-11-30_cmc_cmc-11302025xdividendxex991-htm.htm.jsonl | Press release announcing the quarterly dividend declared January 5, 2026 | 2026-01-05 | e91d934a56bf8de3bcdf3a023521ffcad782ae1af8cecefddfb10a419d20f2e1 | Classified; dividend context |
| EX99.1_2025-11-30_cmc_cmc-11302025xearningsrelea-htm.htm.jsonl | Press release reporting first-quarter fiscal 2026 results | 2026-01-08 | c464d6bd75644a8ac82e2a76bc0ccc9e87fde109e41b8ae1b2b43a461c51e55c | Classified; adjusted measures and period tie-outs |
| EX99.1_2026-02-28_cmc_cmc-2282026xdividendxex991-htm.htm.jsonl | Press release announcing an increase in the quarterly dividend, March 25, 2026 | 2026-03-25 | b97c5d8e72501a1ab2b9f66d28e1f7f333aef891d9c0c2af1962ad91e1cfb474 | Classified; dividend context |
| EX99.1_2026-02-28_cmc_cmc-2282026xearningsreleas-htm.htm.jsonl | Press release reporting second-quarter fiscal 2026 results | 2026-03-26 | e8df96a5865313aab01f3e04622ffe6edbe28c0e87a1820463f529536c51b99a | Classified; adjusted measures and period tie-outs |
| EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl | Press release announcing a board appointment, April 13, 2026 | 2026-04-13 | 76aebdac8fc258d156cdd70ed41ba5d2acd3a214f37fc8972ed66a06958ccd3d | Governance evidence for board change |
| EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl | Press release announcing the quarterly dividend declared June 24, 2026 | 2026-06-24 | 1b482b62b86f55c180a7c920b0ef50fa5e4855879cd2a843b51828ca2f2905da | Classified; dividend context |
| EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | Press release reporting third-quarter fiscal 2026 results | 2026-06-25 | a6775657b6b5f16b89ccbb7c0378913ca2b1d83e5b23a07d20fa501ffdcebdc8 | Five-quarter adjusted EBITDA reconciliation, issuer leverage and liquidity statements, outlook |

## Findings

### Bottom line

The 12 supplied documents are sufficient for a credit snapshot of COMMERCIAL METALS Co, but only with limits: covenant headroom, ratings and the year ended 2026-08-31 cannot be assessed from them. The set holds two annual reports, three 2026 quarterly reports and seven press releases; the latest balance sheet is dated 2026-05-31, 171 days before the as-of date.
Basis: calculation C1; calculation C2; 10-Q_2026-05-31_cmc.htm.jsonl, page 3

The credit agreement and note terms, rating levels, the proxy statement and any report for the year ended 2026-08-31 are not in the set. Conclusions on leverage and liquidity therefore rest on filings dated up to 2026-06-29, and covenant levels come from the 2025 annual report. The issuer's own leverage figure uses acquisition adjustments and is not comparable with leverage computed from reported debt.
Basis: 10-K_2025-08-31_cmc.htm.jsonl, page 115; 10-Q_2026-05-31_cmc.htm.jsonl, page 21; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4

### Analytical appendix — complete canonical registers

#### T1 Input gate

| Gate item | Requirement | Finding | Status | Source |
|---|---|---|---|---|
| Objective | The selected pathway's use case when no objective is stated | Credit snapshot of the issuer built from Financial foundation, Business & governance and Fundamental credit; no separate objective was stated | Recorded | Run settings |
| Issuer identity | Registrant named in the documents matches the run | Commercial Metals Company, Delaware registrant, common stock listed on the New York Stock Exchange under CMC; the run settings name no separate borrower or parent | Pass | 10-Q_2026-05-31_cmc.htm.jsonl, page 1 |
| Reporting perimeter | One consolidated perimeter across the set | Statements are for Commercial Metals Company and subsidiaries; Foley and CP&P join the perimeter in December 2025, so periods before that are not like-for-like | Pass with limitation | 10-Q_2026-05-31_cmc.htm.jsonl, pages 2–3; 10-Q_2026-05-31_cmc.htm.jsonl, page 10 |
| As-of date and cutoff | No evidence dated after 2026-11-18 | Latest dated document is the third-quarter report signed 2026-06-29; nothing is dated after the cutoff | Pass | 10-Q_2026-05-31_cmc.htm.jsonl, page 61 |
| Current period | Run period q3-2026 is covered | Quarter ended 2026-05-31 is covered by the quarterly report and the results release | Pass | 10-Q_2026-05-31_cmc.htm.jsonl, page 2; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 1 |
| Prior period | Run period fy-2025 is covered | Year ended 2025-08-31 is covered by the annual report with statements, debt note and covenant disclosure | Pass | 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; 10-K_2025-08-31_cmc.htm.jsonl, page 115 |
| Discrete quarters | Four discrete quarters with quarter and year-to-date distinguished | Five quarters to 2026-05-31 are reconciled in one release table, and nine-month and quarterly net sales tie across sources | Pass | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 13–14 |
| Year ended 2026-08-31 | Later period if the as-of date follows year end | No annual report or fourth-quarter release for the year ended 2026-08-31 is in the set; the run period is the third quarter, so this limits currency, not coverage of the run period | Gap | 10-Q_2026-05-31_cmc.htm.jsonl, page 61 |
| Legal documents | Executed financing documents for covenant work | Run settings declare none; the annual report lists the credit agreement amendments only as exhibits incorporated by reference | Gap | 10-K_2025-08-31_cmc.htm.jsonl, page 142 |
| Ratings | Rating levels and outlooks | Run settings declare none; the annual report says the senior unsecured notes are rated by three agencies without stating the levels | Gap | 10-K_2025-08-31_cmc.htm.jsonl, page 31 |
| Market data, peers, portfolio | Quotes, peer set and fund limits where those modules are selected | None supplied; none of the three selected modules needs them | Not applicable | Run settings |
| Prior run | Earlier run of this pathway for comparison | None; this is the first run of the pathway | Not applicable | Run settings |

#### T2 Source register

| Source | Document family | Entity and perimeter | Period | Authority tier | Active representation | Quality | Limitation |
|---|---|---|---|---|---|---|---|
| 10-K_2024-08-31_cmc.htm.jsonl | Annual report | Commercial Metals Company and subsidiaries, consolidated | Year ended 2024-08-31 | 1 primary filing | Supplied extracted text | Full filing text, audited statements | Predates the 2025 and 2026 acquisitions and debt issues |
| 10-K_2025-08-31_cmc.htm.jsonl | Annual report | Commercial Metals Company and subsidiaries, consolidated | Year ended 2025-08-31 | 1 primary filing | Supplied extracted text | Full filing text, audited statements | Debt ladder predates the November 2025 notes; Part III is incorporated from a proxy statement not supplied |
| 10-Q_2025-11-30_cmc.htm.jsonl | Quarterly report | Commercial Metals Company and subsidiaries, consolidated | Quarter ended 2025-11-30 | 1 primary filing | Supplied extracted text | Full filing text, unaudited | Unaudited |
| 10-Q_2026-02-28_cmc.htm.jsonl | Quarterly report | Commercial Metals Company and subsidiaries, consolidated | Quarter ended 2026-02-28 | 1 primary filing | Supplied extracted text | Full filing text, unaudited | Unaudited; first quarter with Foley and CP&P |
| 10-Q_2026-05-31_cmc.htm.jsonl | Quarterly report | Commercial Metals Company and subsidiaries, consolidated | Quarter ended 2026-05-31 | 1 primary filing | Supplied extracted text | Full filing text, unaudited | Unaudited; purchase accounting for the acquisitions is preliminary |
| EX99.1_2025-11-30_cmc_cmc-11302025xdividendxex991-htm.htm.jsonl | Dividend press release | Commercial Metals Company | Declared 2026-01-05 | 2 issuer release | Supplied extracted text | Short release | Context only |
| EX99.1_2025-11-30_cmc_cmc-11302025xearningsrelea-htm.htm.jsonl | Earnings press release | Commercial Metals Company, consolidated | Quarter ended 2025-11-30 | 2 issuer release | Supplied extracted text | Full release with reconciliations | Non-GAAP measures defined by the issuer |
| EX99.1_2026-02-28_cmc_cmc-2282026xdividendxex991-htm.htm.jsonl | Dividend press release | Commercial Metals Company | Declared 2026-03-25 | 2 issuer release | Supplied extracted text | Short release | Context only |
| EX99.1_2026-02-28_cmc_cmc-2282026xearningsreleas-htm.htm.jsonl | Earnings press release | Commercial Metals Company, consolidated | Quarter ended 2026-02-28 | 2 issuer release | Supplied extracted text | Full release with reconciliations | Non-GAAP measures defined by the issuer |
| EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl | Board appointment press release | Commercial Metals Company | Announced 2026-04-13 | 2 issuer release | Supplied extracted text | Short release | Governance context only |
| EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl | Dividend press release | Commercial Metals Company | Declared 2026-06-24 | 2 issuer release | Supplied extracted text | Short release | Context only |
| EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | Earnings press release | Commercial Metals Company, consolidated | Quarter ended 2026-05-31 | 2 issuer release | Supplied extracted text | Full release with reconciliations | Leverage and liquidity figures use issuer definitions |

#### P3 Input inventory

| Source | Form | Period end | Text chunks | File size (bytes) | Accessible |
|---|---|---|---|---|---|
| 10-K_2024-08-31_cmc.htm.jsonl | 10-K | 2024-08-31 | 143 | 385877 | Yes |
| 10-K_2025-08-31_cmc.htm.jsonl | 10-K | 2025-08-31 | 145 | 386412 | Yes |
| 10-Q_2025-11-30_cmc.htm.jsonl | 10-Q | 2025-11-30 | 47 | 129387 | Yes |
| 10-Q_2026-02-28_cmc.htm.jsonl | 10-Q | 2026-02-28 | 60 | 165280 | Yes |
| 10-Q_2026-05-31_cmc.htm.jsonl | 10-Q | 2026-05-31 | 61 | 166083 | Yes |
| EX99.1_2025-11-30_cmc_cmc-11302025xdividendxex991-htm.htm.jsonl | EX-99.1 | 2025-11-30 | 1 | 1273 | Yes |
| EX99.1_2025-11-30_cmc_cmc-11302025xearningsrelea-htm.htm.jsonl | EX-99.1 | 2025-11-30 | 15 | 35337 | Yes |
| EX99.1_2026-02-28_cmc_cmc-2282026xdividendxex991-htm.htm.jsonl | EX-99.1 | 2026-02-28 | 4 | 8504 | Yes |
| EX99.1_2026-02-28_cmc_cmc-2282026xearningsreleas-htm.htm.jsonl | EX-99.1 | 2026-02-28 | 14 | 36696 | Yes |
| EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl | EX-99.1 | 2026-02-28 | 2 | 3556 | Yes |
| EX99.1_2026-05-31_cmc_cmc-5312026xdividendxex991-htm.htm.jsonl | EX-99.1 | 2026-05-31 | 4 | 7795 | Yes |
| EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl | EX-99.1 | 2026-05-31 | 14 | 35398 | Yes |

#### T4 Content-to-module map

| Capability | Module | Content basis | Evidence demand | Disposition | Readiness | Limitation |
|---|---|---|---|---|---|---|
| Financial foundation | Financial foundation (CP-1) | 10-Q_2026-05-31_cmc.htm.jsonl, pages 2–4; 10-Q_2026-05-31_cmc.htm.jsonl, pages 21–22; 10-K_2025-08-31_cmc.htm.jsonl, pages 92–93; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 13–14 | Statements, debt by instrument, cash interest and tax, five-quarter EBITDA reconciliation, liquidity | Recommended; selected in this run | READY_WITH_LIMITATIONS | No document after 2026-06-29; no scheduled repayment table after the November 2025 notes; issuer EBITDA measures are non-GAAP |
| Business and governance | Business & governance (CP-1A) | 10-K_2025-08-31_cmc.htm.jsonl, pages 3–8; 10-Q_2026-05-31_cmc.htm.jsonl, pages 7–10; 10-Q_2026-05-31_cmc.htm.jsonl, pages 31–34; EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl, page 1 | Business model, segments, acquisitions, board and management | Recommended; selected in this run | READY_WITH_LIMITATIONS | Proxy statement not supplied, so board composition, ownership and pay are not available beyond one appointment release |
| Fundamental credit | Fundamental credit (CP-2) | 10-Q_2026-05-31_cmc.htm.jsonl, pages 42–49; 10-Q_2026-05-31_cmc.htm.jsonl, pages 29–30; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4 | Drivers of earnings, leverage path, litigation and liquidity pressure, outlook | Recommended; selected in this run | READY_WITH_LIMITATIONS | No rating levels or market data; covenant ratios at 2026-05-31 not stated |
| Earnings changes | Earnings changes (CP-1B) | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 13–14 | Quarter-on-quarter and year-on-year bridge | Not selected in this pathway; sources would support it | READY | None beyond issuer non-GAAP definitions |
| Earnings quality | Earnings quality (CP-1D) | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, pages 13–14 | Add-backs and one-offs | Not selected in this pathway; sources would support it | READY_WITH_LIMITATIONS | Add-back detail is the issuer's own |
| Liquidity | Liquidity (CP-2D) | 10-Q_2026-05-31_cmc.htm.jsonl, pages 47–48; 10-Q_2026-05-31_cmc.htm.jsonl, page 22 | Cash, facilities, letters of credit | Not selected in this pathway; sources would support it | READY | None |
| Refinancing and LME | Refinancing & LME (CP-3C) | 10-Q_2026-05-31_cmc.htm.jsonl, pages 21–22; 10-K_2025-08-31_cmc.htm.jsonl, page 115 | Maturity wall and refinancing access | Not selected in this pathway; sources would support it | READY_WITH_LIMITATIONS | Annual ladder is at 2025-08-31 and predates the new notes |
| Rates, FX and hedging | Rates, FX & hedging (CP-2E) | 10-Q_2026-05-31_cmc.htm.jsonl, pages 23–25 | Derivative positions and fair value | Not selected in this pathway; sources would support it | READY | None |
| Downside and forward model | Downside (CP-2A); Forward credit model (CP-2G) | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4; 10-Q_2026-05-31_cmc.htm.jsonl, page 48 | Management outlook and capital spending plan | Not selected in this pathway; sources would support it | READY_WITH_LIMITATIONS | Outlook is qualitative |
| Ratings and triggers | Ratings & triggers (CP-2H) | 10-K_2025-08-31_cmc.htm.jsonl, page 31 | Rating levels, outlooks, rating-linked terms | Not selected in this pathway | CONDITIONAL | Rating levels and agency reports are not in the set |
| Legal and covenants | Legal & covenants (CP-4); Covenant capacity (CP-4A); Structural priority (CP-4B); Intercreditor control (CP-4D); Recovery & fulcrum (CP-4C) | 10-K_2025-08-31_cmc.htm.jsonl, page 115; 10-K_2025-08-31_cmc.htm.jsonl, page 142 | Executed credit agreement, indentures, guarantor and security terms | Not selected in this pathway | CONDITIONAL | Executed documents are not in the set; the revolver is described as secured by U.S. inventory only in the annual report |
| Security selection and market-implied risk | Security selection (CP-3); Market-implied risk (CP-3D) | Run settings | Deal terms and quotes | Inapplicable in this run | BLOCKED | Run settings supply no deal terms or quotes |
| Peer benchmark | Peer benchmark (CP-1C) | Run settings | Peer set | Inapplicable in this run | BLOCKED | Run settings supply no peers |
| Committee decision | Committee decision (CP-6) | Run settings | Fund limits and portfolio | Inapplicable in this run | BLOCKED | No portfolio supplied |
| Changes since the last run | Changes since the last run (CP-8) | Run settings | Earlier run of this pathway | Inapplicable in this run | BLOCKED | First run of the pathway |

#### T6 Evidence trace

| Trace ID | Item | Value | Period | Source | Lineage |
|---|---|---|---|---|---|
| E1 | Cash and cash equivalents | USD 559,759 thousand | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 3 | Directly Sourced |
| E2 | Restricted cash | USD 3,458 thousand | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 3 | Directly Sourced |
| E3 | Total debt (instrument table total, including finance leases) | USD 3,428,920 thousand against USD 1,364,085 thousand at 2025-08-31 | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21 | Directly Sourced |
| E4 | Revolver commitment, drawn amount, maturity and letters of credit | USD 1.0 billion, nothing drawn, maturity 2030-12-17, letters of credit USD 1.0 million | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 22 | Directly Sourced |
| E5 | Senior unsecured notes issued November 2025 | 5.750% notes due 2033 USD 1,000,000 thousand and 6.000% notes due 2035 USD 1,000,000 thousand | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, pages 21–22 | Directly Sourced |
| E6 | Covenant levels and reported ratios | Interest coverage not less than 2.50 to 1.00 (reported 10.18 to 1.00); debt to capitalization not above 0.60 to 1.00 (reported 0.25 to 1.00) | 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl, page 115 | Directly Sourced |
| E7 | Covenant status at the latest balance sheet date | In compliance with all financial covenants; ratios and levels not stated | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 21; 10-Q_2026-05-31_cmc.htm.jsonl, page 49 | Insufficient Information |
| E8 | Accrued contingent litigation-related loss | USD 373,476 thousand against USD 362,272 thousand at 2025-08-31 | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 3 | Directly Sourced |
| E9 | Pacific Steel Group jury verdict, trebled by the court | USD 110.0 million before trebling; payment timing uncertain | Verdict 2024-11-05 | 10-Q_2026-05-31_cmc.htm.jsonl, page 29; 10-Q_2026-05-31_cmc.htm.jsonl, page 52 | Directly Sourced |
| E10 | Acquisition prices | Foley approximately USD 1.84 billion, closed 2025-12-15; CP&P approximately USD 675 million, closed 2025-12-01 | Quarter ended 2026-02-28 | 10-Q_2026-05-31_cmc.htm.jsonl, page 10 | Directly Sourced |
| E11 | Net sales | USD 2,483,245 thousand for the quarter; USD 6,735,570 thousand for nine months | Quarter and nine months ended 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 2 | Directly Sourced |
| E12 | Operating cash flow, capital expenditure and acquisitions net of cash acquired | USD 603,023 thousand; USD 404,273 thousand; USD 2,516,122 thousand | Nine months ended 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 4 | Directly Sourced |
| E13 | Adjusted EBITDA by quarter | Q3 USD 335,909 thousand; Q2 USD 251,256 thousand; Q1 USD 288,568 thousand; Q4 FY2025 USD 278,428 thousand | Quarters ended 2026-05-31 back to 2025-08-31 | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 | Directly Sourced |
| E14 | Issuer net leverage adjusted for acquisitions and available liquidity | 2.1x; nearly USD 1.8 billion; issuer definition adds USD 245 million expected precast EBITDA and removes USD 36.5 million of costs | 2026-05-31 | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4 | Directly Sourced |
| E15 | Liquidity availability components | Cash USD 559,759 thousand; revolver USD 999,030 thousand; Poland credit facilities USD 163,348 thousand; Poland receivables facility USD 46,338 thousand | 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, pages 47–48 | Directly Sourced |
| E16 | Ratings | Senior unsecured notes rated by three agencies; levels and outlooks not stated | 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl, page 31 | Insufficient Information |
| E17 | Governance content outside the set | Part III information incorporated from the 2026 proxy statement | Year ended 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl, page 139 | Directly Sourced |
| E18 | Board change | Michael Dumais named to the board effective 2026-06-23, announced 2026-04-13 | 2026-04-13 | EX99.1_2026-02-28_cmc_d117730dex991-htm.htm.jsonl, page 1 | Directly Sourced |
| E19 | Security of the credit agreement | Obligations secured by U.S.-domiciled inventory | 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl, page 115 | Directly Sourced |
| E20 | Segment structure | Three reportable segments; the emerging businesses segment renamed Construction Solutions Group after the precast acquisitions | Quarter ended 2026-05-31 | 10-Q_2026-05-31_cmc.htm.jsonl, page 7; 10-Q_2026-05-31_cmc.htm.jsonl, page 31 | Directly Sourced |
| E21 | Scheduled long-term debt maturities excluding finance leases | USD 1,789 thousand in 2026; USD 1,782 thousand in 2027; USD 1,795 thousand in 2028; USD 1,806 thousand in 2029; USD 301,814 thousand in 2030; USD 896,182 thousand thereafter | Years from 2025-08-31 | 10-K_2025-08-31_cmc.htm.jsonl, page 115 | Directly Sourced |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| Not supplied: source readiness records no credit events | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: dated events are recorded by the Financial foundation and Business & governance modules |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 19 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Count of supplied documents | 2 annual reports + 3 quarterly reports + 7 press releases | 12 documents | Supplied file set |
| C2 | Days from the latest balance sheet date to the as-of date | 2026-05-31 to 2026-11-18: 30 + 31 + 31 + 30 + 31 days to 2026-10-31, plus 18 days | 171 days | 10-Q_2026-05-31_cmc.htm.jsonl, page 3 |
| C3 | Liquidity components tie to the issuer's statement of nearly USD 1.8 billion | USD 559,759 thousand + USD 999,030 thousand + USD 163,348 thousand + USD 46,338 thousand | USD 1,768,475 thousand | 10-Q_2026-05-31_cmc.htm.jsonl, pages 47–48; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 4 |
| C4 | Nine-month net sales ties to the three quarters in the release | USD 6,735,570 thousand less (USD 2,120,307 thousand + USD 2,132,018 thousand) | USD 2,483,245 thousand, equal to third-quarter net sales | 10-Q_2026-05-31_cmc.htm.jsonl, page 2; EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 |
| C5 | Nine-month adjusted EBITDA ties to the three quarters in the release | USD 335,909 thousand + USD 251,256 thousand + USD 288,568 thousand | USD 875,733 thousand, equal to the nine-month figure | EX99.1_2026-05-31_cmc_cmc-5312026xearningsreleas-htm.htm.jsonl, page 13 |
| C6 | Debt instrument table foots to total debt | USD 300,000 thousand + 300,000 + 300,000 + 1,000,000 + 1,000,000 + 145,060 + 150,000 + 33,012 + 8,819 + 192,029 (thousand) | USD 3,428,920 thousand | 10-Q_2026-05-31_cmc.htm.jsonl, page 21 |

## Gaps

| Gap ID | Type | Severity | Gap or conflict | Affected modules | Readiness effect | Remediation | Status |
|---|---|---|---|---|---|---|---|
| G1 | Source gap | MINOR | No annual report or fourth-quarter release for the year ended 2026-08-31 is in the set; the August 2026 investor day materials are also absent. The run period is the third quarter, so the latest balance sheet is dated 2026-05-31 | Financial foundation; Fundamental credit | Selected modules proceed with the quarter to 2026-05-31 as latest | Add the fiscal 2026 annual report or results release if one exists before relying on year-end leverage | Open |
| G2 | Source gap | MATERIAL | Covenant ratios at 2026-05-31 and the terms of the December 2025 amendment to the credit agreement beyond its higher commitment and later maturity are not stated; covenant levels and ratios are available only at 2025-08-31 | Fundamental credit; Legal & covenants; Covenant capacity | Covenant headroom at the latest date is not calculable; selected modules state the 2025-08-31 position with its date | Supply the credit agreement with its amendments and the latest compliance figures | Open |
| G3 | Source gap | MINOR | Rating levels and outlooks are not stated in any document | Fundamental credit; Ratings & triggers | Ratings are stated as not established | Supply agency ratings with dates if the analysis needs them | Open |
| G4 | Source gap | MINOR | Proxy statement not supplied; board composition, ownership and executive pay sit in it | Business & governance | Governance is limited to the annual report business section and one board appointment release | Supply the 2026 proxy statement | Open |
| G5 | Source gap | MINOR | No scheduled repayment table after the November 2025 notes; the annual ladder is at 2025-08-31. Maturities can be read from the instrument names in the latest debt note | Financial foundation; Refinancing & LME | Maturity wall is built from instrument names and flagged as such | None required for the snapshot | Open |
| G6 | Definition conflict | MINOR | Issuer net leverage adjusted for acquisitions, core EBITDA and adjusted EBITDA differ from covenant EBITDA and from net debt over reported EBITDA; the issuer figure adds expected precast EBITDA and removes acquisition costs | Financial foundation; Fundamental credit | Leverage must be computed from reported debt and stated EBITDA with the definition named; the issuer figure is context only | Name the definition beside every leverage figure | Open |
| G7 | Perimeter and period break | MINOR | Foley and CP&P were acquired in December 2025 and USD 2,000,000 thousand of notes issued in November 2025, so year-end 2025-08-31 comparisons are not like-for-like | Financial foundation; Fundamental credit | Comparisons across the break carry a stated limitation | Show post-balance-sheet effects beside any year-end figure | Open |

## Next module

The orchestrator selects the next module.
