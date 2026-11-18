# CIMPRESS plc source readiness

## Request
Source readiness for CIMPRESS plc (issuer id cmpr), as of 2026-11-05, on the credit snapshot pathway. The scope is whether the seven supplied files support the requested modules for the consolidated group. No separate objective was stated, so the objective is the pathway's use case, a short credit snapshot.

## Sources

No upstream handoffs were supplied to this module.

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2026-06-30_cmpr-20260630.htm.jsonl | Annual report on Form 10-K for the fiscal year ended June 30, 2026 | 2026-08-07 | 151f9f0c267c42ae21f0ccdb2698ae7b00f08c12c11ea93c9eead2d225985251 | Audited statements for FY2024 to FY2026, debt note, liquidity, covenant wording, segments, business description, risk factors and subsequent events; readiness of the requested modules. |
| 10-Q_2025-12-31_cmpr-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended December 31, 2025 | 2026-01-29 | 5912ac914c426cabed13522689ed2e56011a6c1882bd27d73724a7b41632fcbe | Second quarter and six-month FY2026 statements, debt terms before the June 2026 amendment, adjusted EBITDA reconciliation. |
| 10-Q_2026-03-31_cmpr-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | f9c2a0f9fab56a82d76e0a19184ee2eca64fd97201bf2165c7319cc1b208da3c | Third quarter and nine-month FY2026 statements, debt terms before the June 2026 amendment, adjusted EBITDA reconciliation; the nine-month figures needed to derive the fourth quarter. |
| 10-Q_2026-09-30_cmpr-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 | a95f01276eb1e8e5ae3ae14e80d4bc7b302a4218d45429f246acfed151ff64a5 | Latest quarter (first quarter of FY2027): statements, debt after the June 2026 amendment, revolver availability, Saxoprint acquisition, hedging, segments, liquidity and covenant wording. |
| EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl | Exhibit 99.1 earnings release for the third quarter of fiscal 2026 (file text holds the title line only) | not stated | a3c79968ecfa051f20fab57025394eb1344a953bc437c701ec4c06c5f40daff7 | Inspected for content; none usable, so it supports no analysis. |
| EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl | Exhibit 99.1 earnings release for the fourth quarter of fiscal 2026 (file text holds the title line only) | not stated | b8846b3859a01d99986aba6cc0cb5d6c8ccc873cb9cf041c588ae8b2cd1b1c63 | Inspected for content; none usable, so it supports no analysis. |
| EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl | Exhibit 99.1 earnings release for the first quarter of fiscal 2027 (file text holds the title line only) | not stated | 68106c8dfde50a0adfff0c65c56bcc6710e9d79d49953b8ae58fdbbcc7a5502c | Inspected for content; none usable, so it supports no analysis. |

## Findings

### Bottom line

The four periodic filings are enough to support a credit snapshot of CIMPRESS plc, but the three earnings releases are empty and no loan or bond documents were supplied, so creditor protections can be read only as the company summarises them.

The annual report for the year to June 30, 2026 and the quarterly reports for December 2025, March 2026 and September 2026 carry full statements, the debt note, liquidity and covenant wording, and the latest was signed seven days before the as-of date. The earnings releases are wrappers around slide images that were not supplied, so the fourth quarter of fiscal 2026 has no release of its own and must be derived from the full year less nine months. Covenant headroom, guarantor and security detail cannot be tested without the loan and bond documents, and ratings, market prices and company guidance are absent.
Basis: 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 1–2; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 20–21, 53; EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl, page 1; calculation C1

### T1 - Input gate

| Check | Result | Detail | Source |
| --- | --- | --- | --- |
| Objective | Credit snapshot of CIMPRESS plc as of 2026-11-05 | No separate objective was stated, so the objective is the pathway's use case. Requested work: Source readiness, Financial foundation, Business & governance and Fundamental credit. | Run settings (not an issuer source) |
| Issuer and perimeter | Cimpress plc, Ireland, ticker CMPR; the consolidated group | The statements consolidate wholly owned subsidiaries and entities in which Cimpress holds a controlling interest. No parent-only or subsidiary statements are supplied, so no perimeter split is possible. | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 1, 6 |
| Reporting basis | USD, in thousands; fiscal year ends June 30 | Current period is the first quarter of FY2027 (three months to 2026-09-30); prior period is FY2026 (year to 2026-06-30). | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 2; 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 1 |
| Evidence cutoff | 2026-11-05 | The latest source document was signed 2026-10-29; no supplied source is dated after the cutoff. | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 53 |
| Effective source set | Four filings usable; three release files carry no text | The filings carry 151, 58, 60 and 53 text pages. Each release file holds one page with its title line only; the wrapper references 35, 38 and 31 slide images that are not in the pack. | EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl, page 1 |
| Source hierarchy applied | Primary filings (four) control; issuer releases (three) add nothing; no market or user-supplied evidence | Run settings leave deal terms, quotes, ratings, valuation inputs, peers and assumptions blank; blanks are not treated as zero. | Run settings (not an issuer source) |
| Executed governing documents | None supplied | Run settings declare no legal documents. The annual report lists the 2032 notes indenture, the June 2026 credit agreement amendment, the subsidiary guaranty and the pledge and security agreement as incorporated by reference. | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 147, 150 |
| Ratings, market quotes, portfolio, management bridge, prior case | None supplied | None of the four filings states an issuer or instrument rating; the only rating wording concerns derivative counterparties. No company outlook or guidance section appears. | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 97 |
| Prior run | None | First run of this pathway for the issuer, so there is nothing to compare against. | Run settings (not an issuer source) |
| Source gate | partial | Primary filings cover every period and topic the requested modules need; three of seven files are empty and no financing documents are supplied. | See Gaps |
| Overall readiness | READY_WITH_LIMITATIONS for the requested modules | Limits are listed under Gaps; none stops a requested module. | See T4 |

### T2 - Source register

| Source | Document family | Source tier | Quality label | Reporting period | Date stated in document | Date in file name | Text pages | Usable text | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-06-30_cmpr-20260630.htm.jsonl | Annual report (Form 10-K) | 1 - primary filing | Primary, audited (auditor opinion dated 2026-08-07) | Year ended 2026-06-30 (FY2026) with FY2025 and FY2024 comparatives | 2026-08-07 | 2026-06-30 (period end) | 151 | Yes | Directors, compensation and ownership tables are incorporated from a proxy statement that is not supplied. |
| 10-Q_2025-12-31_cmpr-20251231.htm.jsonl | Quarterly report (Form 10-Q) | 1 - primary filing | Primary, unaudited interim | Quarter and six months ended 2025-12-31 (Q2 FY2026) | 2026-01-29 | 2025-12-31 (period end) | 58 | Yes | Debt maturity, covenant test and rate floor are those before the 2026-06-04 amendment. |
| 10-Q_2026-03-31_cmpr-20260331.htm.jsonl | Quarterly report (Form 10-Q) | 1 - primary filing | Primary, unaudited interim | Quarter and nine months ended 2026-03-31 (Q3 FY2026) | 2026-04-30 | 2026-03-31 (period end) | 60 | Yes | Debt maturity, covenant test and rate floor are those before the 2026-06-04 amendment. |
| 10-Q_2026-09-30_cmpr-20260930.htm.jsonl | Quarterly report (Form 10-Q) | 1 - primary filing | Primary, unaudited interim | Quarter ended 2026-09-30 (Q1 FY2027) | 2026-10-29 | 2026-09-30 (period end) | 53 | Yes | The Saxoprint purchase price allocation is preliminary and expected to be finalized in the second quarter of FY2027. |
| EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl | Issuer earnings release (Exhibit 99.1) | 2 - issuer release | No content to assess | Q3 FY2026 per file name | not stated | 2026-04-29 | 1 | No | Title line only; the wrapper references 35 slide images that are not supplied. |
| EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl | Issuer earnings release (Exhibit 99.1) | 2 - issuer release | No content to assess | Q4 FY2026 per file name | not stated | 2026-07-29 | 1 | No | Title line only; the wrapper references 38 slide images that are not supplied. |
| EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl | Issuer earnings release (Exhibit 99.1) | 2 - issuer release | No content to assess | Q1 FY2027 per file name | not stated | 2026-10-28 | 1 | No | Title line only; the wrapper references 31 slide images that are not supplied. |

### T4 - Content-to-module map

| Module | Content or evidence demand | Evidence in the supplied sources | Source | Disposition | Limitation or reason |
| --- | --- | --- | --- | --- | --- |
| Financial foundation (CP-1) | Statements, debt and other claims, adjusted EBITDA and free cash flow reconciliations, segments for FY2024 to FY2026 and the last three quarters | Balance sheet, operations and cash flow statements, debt note, reconciliations and five-segment note are all printed | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 75, 86–90, 117–120, 134–138; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 2–5, 20–22, 24–27, 49 | Recommended; ready with limitations | The fourth quarter of FY2026 is not stated by any readable source and must be derived as the full year less the nine-month figures; release reconciliations are unavailable. |
| Business & governance (CP-1A) | Business model, segments, strategy, ownership, history, transactions and governance | Business description, risk factors, related-party note, share concentration, the 2026-06-04 credit agreement restatement, the 2026-07-02 Saxoprint acquisition and the planned sale-leaseback | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 4–23, 24–49, 118, 142–143; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 18–19 | Recommended; ready with limitations | The proxy statement (directors, compensation, ownership table) is not supplied; governance detail beyond the annual report is not available. |
| Fundamental credit (CP-2) | Credit view from financial foundation and business facts: liquidity, leverage drivers, debt terms and downside pressure points | Liquidity discussion, contractual obligations, revolver availability, covenant wording, interest sensitivity and debt risk factors | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 43–45, 68–73; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 43–47, 50 | Recommended; ready with limitations | No ratings, market prices, peer set or company guidance; the covenant ratio value and the lender definition of EBITDA are not printed; debt and covenant terms are the company's summaries, not executed documents. |
| Earnings changes (CP-1B) | Quarter-on-quarter and guided changes from release content | Management discussion in each quarterly report; release files hold no text | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 32–43 | Not selected; conditional | Needs the release content (slide text or images), which the three release files do not carry. |
| Peer benchmark (CP-1C) | Peer set and peer financials | None | Not supplied: no supplied source carries it | Not selected; conditional | Run settings name no peers; peer data would have to come from research. |
| Earnings quality (CP-1D) | Adjusted versus GAAP earnings, add-backs, accruals, working capital | Adjusted EBITDA and free cash flow reconciliations in every filing | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 75; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 49 | Not selected; source-ready | Release reconciliations unavailable; filings suffice. |
| Downside (CP-2A) | Stress inputs: debt terms, rate sensitivity, hedges, cost pressure | Variable-rate debt and the effect of a 100 basis point rate rise, tariff costs, hedge notionals | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 13–16, 34–35, 50 | Not selected; source-ready with limitations | Run settings carry no stress assumptions; no management bridge supplied. |
| Liquidity (CP-2D) | Cash, undrawn facilities, letters of credit, near-term obligations | Cash, revolver availability after borrowings and letters of credit, contractual obligations by period, supply chain finance balance | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 2, 29, 45–46 | Not selected; source-ready | The amount of letters of credit outstanding is not stated separately; it is implied by the net availability figure. |
| Rates, FX & hedging (CP-2E) | Swap, cross-currency and forward positions, rate floors, currency exposure | Notional amounts, fair values, maturities and hedge designations | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 12–17, 50–52 | Not selected; source-ready | None beyond the filings' own disclosure. |
| Forward credit model (CP-2G) | Forecast drivers and management outlook | None: no outlook section in the filings; release files hold no text | Not supplied: no supplied source carries it | Not selected; conditional | Needs company guidance or a management bridge; run settings supply none. |
| Ratings & triggers (CP-2H) | Issuer and instrument ratings, rating triggers | None | Not supplied: no supplied source carries it | Not selected; blocked | No rating is stated in any source and run settings list none. |
| Security selection (CP-3) | Instrument-level terms, ranking, call and offer features | Summary terms of the 2032 notes and the term loan | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 21–22 | Not selected; conditional | Needs the indenture and credit agreement; none supplied. |
| Refinancing & LME (CP-3C) | Maturity profile, refinancing need, liability-management capacity | Maturities of the term loan, revolver and 2032 notes, including the earlier springing term loan date | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 21–22, 45–47 | Not selected; source-ready with limitations | Liability-management capacity cannot be tested without the executed documents. |
| Market-implied risk (CP-3D) | Quoted prices, spreads, yields | None | Not supplied: no supplied source carries it | Not selected; blocked | Run settings list no quotes. |
| Legal & covenants (CP-4) | Executed credit agreement, indenture, guarantees, security | The exhibit list names the documents; none is supplied | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 147, 150 | Not selected; blocked | No executed governing document is supplied, and the run settings declare none. |
| Recovery & fulcrum (CP-4C) | Claim ranking, collateral, recovery waterfall | Debt amounts only; no collateral valuation, guarantor schedule or intercreditor terms | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 22 | Not selected; blocked | Depends on executed legal documents that are not supplied. |
| Evidence validation (CP-5) | Audit of other modules' claims | Not a source demand | Not supplied: not a source-dependent capability | Not selected; inapplicable to source readiness | It tests analyst outputs, not source coverage. |
| Committee decision (CP-6) | Fund mandate, exposure and limits | None | Not supplied: no supplied source carries it | Not selected; blocked | No portfolio workbook supplied; run settings state the fund's limits as not supplied. |
| Changes since the last run (CP-8) | Comparison with an earlier run of the same pathway | None | Not supplied: no earlier run exists | Not selected; inapplicable | First run of this pathway for the issuer. |
| Short credit snapshot (CP-L10) | One-page key figures | Key figures derivable from the filings | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 2–5, 49 | Not selected; source-ready | A different preset from this run's modules. |
| Research questions (CP-DR) | Open research questions and missing public sources | None | Not supplied: run settings list no research questions | Not selected; inapplicable | No research question stated; no web access in this run. |

### T6 - Evidence trace

| Claim | Value as stated | Period | Source | Lineage |
| --- | --- | --- | --- | --- |
| Registrant identity | Cimpress plc, Ireland; ordinary shares listed on Nasdaq as CMPR | As of 2026-10-26 (24,620,977 shares outstanding) | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 1 | Directly Sourced |
| Fiscal year basis | Fiscal year ended June 30, 2026 | FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 1 | Directly Sourced |
| Annual report signing date | August 7, 2026 (company and auditor) | FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 86, 151 | Directly Sourced |
| Earlier quarterly reports signing dates | January 29, 2026 (quarter to December 31, 2025); April 30, 2026 (quarter to March 31, 2026) | Q2 and Q3 FY2026 | 10-Q_2025-12-31_cmpr-20251231.htm.jsonl, page 58; 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 60 | Directly Sourced |
| Latest quarterly report signing date | October 29, 2026 | Q1 FY2027 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 53 | Directly Sourced |
| Cash and cash equivalents | USD 120,127 thousand | 2026-09-30 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 2 | Directly Sourced |
| Debt outstanding | 7.375% notes due 2032 USD 525,000 thousand; senior secured credit facility USD 1,129,500 thousand; other USD 13,131 thousand; total debt net USD 1,644,170 thousand | 2026-09-30 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 20 | Directly Sourced |
| Revolver | USD 250,000 thousand commitment, USD 35,000 thousand drawn, available borrowing capacity USD 197.7 million after borrowings and letters of credit | 2026-09-30 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 21, 46 | Directly Sourced |
| Covenant after the June 2026 amendment | Consolidated Leverage Ratio may not exceed 4.50 to 1.00, tested when revolving loans, swingline loans and unreimbursed letter of credit disbursements exceed 20% of revolving commitments at a quarter end | 2026-06-30 and 2026-09-30 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 119; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 21 | Directly Sourced |
| Covenant before the amendment | First Lien Leverage Ratio may not exceed 3.25 to 1.00, tested if any revolving loans are outstanding at a quarter end | 2025-12-31 and 2026-03-31 | 10-Q_2025-12-31_cmpr-20251231.htm.jsonl, page 19; 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 19 | Directly Sourced |
| Term loan maturity and rate floor by report | May 17, 2028 with Term SOFR floor 0.50% (December 2025 and March 2026 reports); June 4, 2033 with floor 0% (annual report and September 2026 report) | 2025-12-31 to 2026-09-30 | 10-Q_2025-12-31_cmpr-20251231.htm.jsonl, page 19; 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 19; 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 118; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 21 | Directly Sourced |
| Earlier springing term loan maturity | June 16, 2032 if the 2032 notes have not been repaid, refinanced or extended; stated only in the September 2026 report | 2026-09-30 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 21 | Directly Sourced |
| Credit agreement restatement | Amended and restated senior secured credit agreement dated June 4, 2026; term loan issued at 99.75% of par; revolver maturity extended to June 2031 | FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 118 | Directly Sourced |
| 2032 senior notes | USD 525,000 thousand, 7.375%, unsecured, due September 15, 2032; private placement completed September 26, 2024 | FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 72–73, 119 | Directly Sourced |
| Adjusted EBITDA reported in the filings | USD 458,498 thousand (FY2026); USD 338,083 thousand (nine months to March 31, 2026); USD 237,558 thousand (six months to December 31, 2025); USD 89,820 thousand (Q1 FY2027) | FY2026, 9M FY2026, 6M FY2026, Q1 FY2027 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 75; 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, pages 55–56; 10-Q_2025-12-31_cmpr-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 49 | Directly Sourced |
| Fourth quarter of FY2026 not separately stated | Full-year and nine-month figures are printed, so the quarter can be derived by difference; no readable source states it | Q4 FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 87; 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 3 | Analyst Inference |
| Saxoprint acquisition | Closed July 2, 2026; total purchase consideration USD 141,081 thousand (EUR 123,996 thousand) in the quarterly report; EUR 120,000 thousand subject to post-closing adjustment in the annual report | Q1 FY2027 and subsequent event to FY2026 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 18; 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 143 | Directly Sourced |
| Section 338 tariff effective date | Annual report: announced to take effect on August 19, 2026; September 2026 quarterly report: took effect on August 22, 2026 | FY2026 and Q1 FY2027 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 57; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 34–35 | Conflicting |
| Segment comparatives recast | FY2024 and FY2025 segment results in the annual report are adjusted to the inter-segment cross-charge methodology adopted in the first quarter of FY2026; originally reported segment figures are not supplied | FY2024 to FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 59, 134–136 | Directly Sourced |
| Proxy statement incorporated by reference | Items 10 to 14 of Part III come from a proxy statement not supplied | FY2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 2 | Directly Sourced |
| Earnings release files carry no text | Each file holds one page with the title line only; wrappers reference 35, 38 and 31 slide images | Q3 FY2026, Q4 FY2026, Q1 FY2027 | EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl, page 1 | Directly Sourced |
| No issuer or instrument rating stated | Searched all four filings for rating-agency names and rating wording; the only hit concerns derivative counterparties | As of 2026-11-05 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 97 | Insufficient Information |
| No executed financing documents supplied | The 2032 notes indenture, credit agreement amendment, guaranty and security agreement are listed as exhibits incorporated by reference, not supplied | As of 2026-11-05 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 147, 150 | Insufficient Information |
| Age of the latest quarterly report at the as-of date | 7 days | 2026-10-29 to 2026-11-05 | calculation C1 | Calculated |
| Readiness of Financial foundation | READY_WITH_LIMITATIONS | As of 2026-11-05 | See T4 | Analyst Inference |
| Readiness of Business & governance | READY_WITH_LIMITATIONS | As of 2026-11-05 | See T4 | Analyst Inference |
| Readiness of Fundamental credit | READY_WITH_LIMITATIONS | As of 2026-11-05 | See T4 | Analyst Inference |
| Source gate | partial | As of 2026-11-05 | See T1 | Analyst Inference |

### P3 - Input inventory

| Source | Original file | Original sha256 | Original bytes | Extracted text bytes | Text pages | Document family | Entity | Period | Duplicate or version link | Access |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-06-30_cmpr-20260630.htm.jsonl | 10-K_2026-06-30_cmpr-20260630.htm | f222eb62e19a140808384faed35aa709f4800a0a0df4b658b19102ee0bfdd913 | 2,933,918 | 383,063 | 151 | Annual report | Cimpress plc | Year ended 2026-06-30 | Base annual report; no amendment supplied | Readable |
| 10-Q_2025-12-31_cmpr-20251231.htm.jsonl | 10-Q_2025-12-31_cmpr-20251231.htm | 900d4a8af759f7a347c5391dfbfe7a35df63548381ecb953c414cc2335904203 | 1,890,827 | 146,289 | 58 | Quarterly report | Cimpress plc | Quarter ended 2025-12-31 | Distinct quarter; no duplicate | Readable |
| 10-Q_2026-03-31_cmpr-20260331.htm.jsonl | 10-Q_2026-03-31_cmpr-20260331.htm | 2f640f2d3e3af3911a0a0e483d57f6a98fbb9bf95703ba93c77cbc498a6e4fe3 | 2,043,182 | 155,743 | 60 | Quarterly report | Cimpress plc | Quarter ended 2026-03-31 | Distinct quarter; no duplicate | Readable |
| 10-Q_2026-09-30_cmpr-20260930.htm.jsonl | 10-Q_2026-09-30_cmpr-20260930.htm | 8825b0805d7a5bf6ed1b5187b307c72ae932a53562c36d6eb3c09f7210e03538 | 1,527,072 | 135,532 | 53 | Quarterly report | Cimpress plc | Quarter ended 2026-09-30 | Distinct quarter; no duplicate | Readable |
| EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl | EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm | d47dd4861a475b7227d31baa9fa844fae3d374b9cc678c116a0f6dceafa9a302 | 11,150 | 211 | 1 | Earnings release | Cimpress plc | Q3 FY2026 per file name | Distinct release; no duplicate | Title line only; 35 slide images referenced, not supplied |
| EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl | EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm | 746b22097516ef5f52d653b8fc9b28cd7d43ae53cdef1dfd43d4c815aafdea90 | 12,068 | 211 | 1 | Earnings release | Cimpress plc | Q4 FY2026 per file name | Distinct release; no duplicate | Title line only; 38 slide images referenced, not supplied |
| EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl | EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm | 43c47b65d4e9e9d4bee5a0030caca959278dd672bac6f4a2b553f2e3a41f0be9 | 9,926 | 211 | 1 | Earnings release | Cimpress plc | Q1 FY2027 per file name | Distinct release; no duplicate | Title line only; 31 slide images referenced, not supplied |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-01-29 | day | 2026-01-29 | Quarterly report for the quarter ended December 31, 2025 signed | Historical — report signed January 29, 2026 | 10-Q_2025-12-31_cmpr-20251231.htm.jsonl, page 58 | Source for the second quarter of FY2026 and the debt terms before the June 2026 amendment. |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for the quarter ended March 31, 2026 signed | Historical — report signed April 30, 2026 | 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 60 | Source for the third quarter and nine months of FY2026, needed to derive the fourth quarter. |
| 2026-08-07 | day | 2026-08-07 | Annual report for the year ended June 30, 2026 signed | Historical — report and audit opinion signed August 7, 2026 | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 151 | Controlling audited source for FY2026 and the debt terms after the June 2026 amendment. |
| 2026-10-29 | day | 2026-10-29 | Quarterly report for the quarter ended September 30, 2026 signed | Historical — report signed October 29, 2026 | 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 53 | Latest source, seven days before the as-of date; sets the current-period evidence. |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 19 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 5 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 2 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | Age of the latest quarterly report at the as-of date | As-of date 2026-11-05 less signing date 2026-10-29 | 7 days |
| C2 | Files carrying usable text | Seven supplied files less three release files with title line only | 4 files |

## Gaps

| Gap | Type | Severity | Effect | Treatment | Source |
| --- | --- | --- | --- | --- | --- |
| The three earnings release files carry no text: each is a wrapper around slide images (35, 38 and 31) that are not supplied | Source gap | MINOR | No release commentary, company guidance or release-level reconciliations for the last three reported quarters; the fourth quarter of FY2026 has no stated standalone figures and must be derived from the full year less nine months | Modules rely on the four filings, whose management discussion and reconciliations cover each reported period; the derivation is shown by the module that uses it. Supply the slide text or image files to restore release evidence | EX-99.1_2026-04-29_q3_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-07-29_q4_fy26quarterlyearnings.htm.jsonl, page 1; EX-99.1_2026-10-28_q1_fy27quarterlyearnings.htm.jsonl, page 1 |
| No executed credit agreement, indenture, guaranty or security agreement supplied | Source gap | MINOR | Guarantors, collateral, covenant definitions, the lender definition of EBITDA and the covenant ratio value cannot be read from source; the filings give summary terms only | Modules describe terms as the filings summarise them and show no headroom test. Supply the executed documents to enable legal and covenant work | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 147, 150 |
| Proxy statement not supplied | Source gap | MINOR | Directors, compensation and the ownership table are incorporated into the annual report by reference and are not available | Governance work is limited to what the annual report prints. Supply the 2026 proxy statement to extend it | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 2 |
| Credit agreement terms differ between reports: covenant (First Lien Leverage Ratio 3.25 to 1.00 versus Consolidated Leverage Ratio 4.50 to 1.00), term loan maturity (May 17, 2028 versus June 4, 2033) and rate floor (0.50% versus 0%) | Conflict across periods | Preserved difference, not a defect | The June 4, 2026 amendment explains the change; later reports describe the current terms | Both versions are kept; modules use the June 2026 terms for current facts and the earlier terms only for history | 10-Q_2026-03-31_cmpr-20260331.htm.jsonl, page 19; 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 118–119; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 21 |
| The annual report states the term loan matures June 4, 2033 with no earlier date; the September 2026 report adds an earlier maturity of June 16, 2032 if the 2032 notes are not repaid, refinanced or extended | Conflict across documents | Preserved difference, not a defect | The maturity wall may start in 2032 rather than 2033 | The later filing controls the current fact; the annual report's silence is recorded, not resolved | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 118; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, page 21 |
| Saxoprint consideration: EUR 120,000 thousand subject to post-closing adjustment (annual report) versus USD 141,081 thousand, EUR 123,996 thousand at the acquisition-date rate (quarterly report) | Conflict of measure | Preserved difference, not a defect | The annual figure is the signed price before adjustment; the quarterly figure is total purchase consideration, preliminary until the second quarter of FY2027 | Both figures and their roles are kept; the quarterly figure is the later and controls the accounting fact | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 143; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 18–19 |
| Segment results for FY2024 and FY2025 are shown on the inter-segment methodology adopted in the first quarter of FY2026; the originally reported figures are not supplied | Definition change | Preserved difference, not a defect | Segment trends across FY2024 to FY2026 are on one basis, but cannot be tied to earlier segment reports | Modules use the annual report's recast figures and note the basis; no reconciliation to earlier reports is attempted | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, pages 59, 134–136 |
| Section 338 tariff effective date: August 19, 2026 (annual report, announced) versus August 22, 2026 (quarterly report, took effect) | Conflict across documents | Preserved difference, not a defect | Timing of the tariff cost start differs by three days between documents | The later filing controls the fact; the difference is carried, not resolved | 10-K_2026-06-30_cmpr-20260630.htm.jsonl, page 57; 10-Q_2026-09-30_cmpr-20260930.htm.jsonl, pages 34–35 |

## Next module
The orchestrator selects the next module.
