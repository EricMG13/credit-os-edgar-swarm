---
issuer_id: ash-1674862
module_id: CP-0
analysis_date: 2026-11-18
---

## Request

Source readiness for Ashland Inc. (issuer ash-1674862), as of 2026-11-18, on the credit snapshot pathway. The scope is whether the five supplied SEC filings can support the requested financial foundation, business and governance, and short credit snapshot work, and which other analyses stay blocked.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ash_ash-20240930.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2024 | 2024-11-18 (signature date) | 5e1a481df3781af713f3addf5fd5e6269c46f3eb3a280ab14d7ee80c28e89486 | Inventory, period and entity map, coverage and gap tests for fiscal 2022 to 2024 statements, the 2024 debt and liquidity position, business and governance content |
| 10-K_2025-09-30_ash_ash-20250930.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2025 | 2025-11-20 (signature date; the later quarterly reports state it was filed with the SEC on that day) | f09d68592cee7e4e673c412620f066ba42ce0020f4ee741d27326171c43cea46 | Inventory, period and entity map, coverage and gap tests for fiscal 2023 to 2025 statements, the 2025 debt and liquidity position, business and governance content |
| 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended December 31, 2025 | 2026-02-03 (signature date) | f44789fe9df3664ff7eac7dd2aaaa0efa3fa8c1f3866f899fe702f62f0f97767 | Inventory, period map, coverage tests for the first fiscal quarter of 2026 and the ratings sentence |
| 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 (signature date) | dfa86a0d9d2b31e4a724248c6c13b720be49a0f08f548f4898c2688739bf408f | Inventory, period map, coverage tests for the second fiscal quarter of 2026 and the ratings sentence |
| 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 (signature date) | e052d086570fcb1d4d12840a47830a340abd5b0829f75dd023eceada69cdf858 | Inventory, period map, latest-period coverage tests, debt, liquidity, covenant and ratings content, exhibit list |

No earlier module output was supplied to this module.

## Findings

### Bottom line

The five Ashland filings support a filing-based credit snapshot at the June 2026 quarter, but not covenant-document, agency-rating, market-pricing or peer conclusions, so creditors should read every result of this run as company-reported and 141 days old.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–3; calculation C-1

The filings carry full statements, the debt note, liquidity, covenant levels and segment data for fiscal 2022 to 2026. The executed credit agreement, the note indentures, agency reports, market quotes, peer data and the proxy statement were not supplied, and the fiscal year ended 2026-09-30 has no annual report in the set.
Basis: 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–3; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 13–17; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 72; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 41

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Reporting entity | Ashland Inc., a Delaware corporation; consolidated with its subsidiaries; commission file number 333-211719; common stock listed on the New York Stock Exchange as ASH | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| Issuer ID and run | ash-1674862; run ash-1674862-2026-11-18-credit_snapshot-host | Run settings (not issuer evidence) |
| Objective | None stated by the user; the objective is the credit snapshot pathway's use case: a public-filing financial foundation, business and governance facts and a short credit snapshot | Run settings (not issuer evidence) |
| Sections requested | Key findings; company and operating model; chart strip; financials and credit metrics; strengths and weaknesses; company profile; transaction summary | Run settings (not issuer evidence) |
| Sections not requested | Capital structure; relative value; portfolio fit; committee challenge; what changed | Run settings (not issuer evidence) |
| As-of date and cutoff | 2026-11-18 for both | Run settings (not issuer evidence) |
| Current and prior period | Q3 2026 (fiscal quarter ended 2026-06-30, with nine months reported) and FY2025 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| Fiscal year end | September 30 | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 1 |
| Reporting currency and scale | US dollars, millions except per-share data | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 |
| Sources supplied | Two annual reports and three quarterly reports; all primary SEC filings of the registrant | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 1 |
| Latest balance-sheet date in the set | 2026-06-30, which is 141 days before the as-of date | calculation C-1 |
| Legal documents declared | None declared in the run settings | Run settings (not issuer evidence) |
| Ratings, quotes, peers, portfolio and assumptions entered | None entered; no peer source; no portfolio data | Run settings (not issuer evidence) |
| Earlier run of this pathway | None; first run | Run settings (not issuer evidence) |
| Source gate | pass for the requested sections; the limits in the gap register apply to work the pathway does not request | T4 and the gap register |

### T2 - Source register

| Source | Document | Period covered | Document date | Authority tier | Quality and reliability | Active representation | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ash_ash-20240930.htm.jsonl | Annual report, Form 10-K | FY2024 with FY2023 and FY2022 income and cash-flow comparatives; balance sheets at 2024-09-30 and 2023-09-30 | 2024-11-18 (signature date) | Tier 1: primary filing | Audited annual statements; management discussion; issuer-stated non-GAAP measures | Page-text extract of 173 pages is the active content; the original HTML document is provenance only | Earliest period in the set; superseded for current-period facts by the later annual report |
| 10-K_2025-09-30_ash_ash-20250930.htm.jsonl | Annual report, Form 10-K | FY2025 with FY2024 and FY2023 income and cash-flow comparatives; balance sheets at 2025-09-30 and 2024-09-30 | 2025-11-20 (signature date) | Tier 1: primary filing | Audited annual statements; management discussion; issuer-stated non-GAAP measures | Page-text extract of 182 pages is the active content; the original HTML document is provenance only | Controls for fiscal year-end 2025 facts; Part III is incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | Quarterly report, Form 10-Q | Three months ended 2025-12-31 against the same quarter a year earlier; balance sheet at 2025-12-31 against 2025-09-30 | 2026-02-03 (signature date) | Tier 1: primary filing | Unaudited interim statements; management discussion | Page-text extract of 61 pages is the active content; the original HTML document is provenance only | Interim and unaudited; no separate 2026 cash-flow data beyond three months |
| 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | Quarterly report, Form 10-Q | Three and six months ended 2026-03-31 against the prior year; balance sheet at 2026-03-31 against 2025-09-30 | 2026-04-29 (signature date) | Tier 1: primary filing | Unaudited interim statements; management discussion | Page-text extract of 70 pages is the active content; the original HTML document is provenance only | Interim and unaudited |
| 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | Quarterly report, Form 10-Q | Three and nine months ended 2026-06-30 against the prior year; balance sheet at 2026-06-30 against 2025-09-30 | 2026-07-29 (signature date) | Tier 1: primary filing; latest in the set | Unaudited interim statements; management discussion; lists the 2026 credit agreement as an exhibit incorporated by reference | Page-text extract of 73 pages is the active content; the original HTML document is provenance only | Interim and unaudited; balance sheet is 141 days old at the as-of date |

### P3 - Input inventory

| Source | Bytes | Pages | sha256 of supplied file | Original HTML sha256 stated in the extract | Document family | Provisional entity and period | Duplicates and versions | Accessibility |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-09-30_ash_ash-20240930.htm.jsonl | 487527 | 173 | 5e1a481df3781af713f3addf5fd5e6269c46f3eb3a280ab14d7ee80c28e89486 | ce196022826aa45cfc52bdcdea019b98d879a803e333a9b4741630c361e2c9e6 | Annual report | Ashland Inc.; fiscal year ended 2024-09-30 | Distinct filing; no duplicate | Readable text, every page present |
| 10-K_2025-09-30_ash_ash-20250930.htm.jsonl | 506112 | 182 | f09d68592cee7e4e673c412620f066ba42ce0020f4ee741d27326171c43cea46 | 4905b94f426eb9bc1f4037ef4e776cfb6786d5cb5d5d792aa457a43bb5d71eee | Annual report | Ashland Inc.; fiscal year ended 2025-09-30 | Distinct filing; its figures for 2024 and 2023 are comparatives of the earlier annual report | Readable text, every page present |
| 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl | 169234 | 61 | f44789fe9df3664ff7eac7dd2aaaa0efa3fa8c1f3866f899fe702f62f0f97767 | a702b7706cff913cc8535713cb219fb8816d949c178b39230ecd9f36190ae5e6 | Quarterly report | Ashland Inc.; quarter ended 2025-12-31 | Distinct filing; no duplicate | Readable text, every page present |
| 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl | 197005 | 70 | dfa86a0d9d2b31e4a724248c6c13b720be49a0f08f548f4898c2688739bf408f | 021aa6816ab9f329da5bf2363a82317ccb71ddb7b7fccb0e45e164f33c5fa722 | Quarterly report | Ashland Inc.; quarter ended 2026-03-31 | Distinct filing; no duplicate | Readable text, every page present |
| 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl | 209436 | 73 | e052d086570fcb1d4d12840a47830a340abd5b0829f75dd023eceada69cdf858 | d1eabffee0bb9878c6ff58152b71cb0b4d24758beda54c76ccd66bd70de9f980 | Quarterly report | Ashland Inc.; quarter ended 2026-06-30 | Distinct filing; no duplicate | Readable text, every page present |

### T4 - Content-to-module map

| Content | Source | Capability served | Mapping status | Readiness effect | Limitation |
| --- | --- | --- | --- | --- | --- |
| Income statement, balance sheet and cash flow, annual and interim | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 122–125; 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, pages 118–121; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 1–3; 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, pages 1–3; 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, pages 1–3 | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Supports FY2023 to FY2025, the three 2026 quarterly reports and a trailing twelve months at 2026-06-30; the fourth quarter of FY2025 can be derived but the fourth quarter of FY2024 cannot, because no nine-month FY2024 figures are in the set |
| Debt note, maturity ladder, 2026 revolving credit agreement terms, receivable sales programs and supply chain finance | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 13–17; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 149–153; 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, pages 142–147 | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Carrying value and principal differ by definition; the quarterly maturity ladder stops at 2031 and the 2043 notes sit beyond it; no agreement or indenture text |
| Liquidity, free cash flow, covenant levels and reported covenant ratios | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 62–67; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 85–99 | Financial foundation (CP-1); Short credit snapshot (CP-2) | Recommended | READY_WITH_LIMITATIONS | Covenant levels and ratios are the issuer's statements; covenant EBITDA is defined differently from reported Adjusted EBITDA |
| Segment note and management discussion of results | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 29–32; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 35–61; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 55–84; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 178–182 | Financial foundation (CP-1); Business & governance (CP-1A) | Recommended | READY | Four reportable segments plus unallocated and other; non-GAAP reconciliations are the issuer's |
| Business description, markets, raw materials, competition, employees and regulation | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 2–18; 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, pages 2–18 | Business & governance (CP-1A) | Recommended | READY | Annual-report descriptions only; no investor presentation |
| Governance: directors and officers on the signature page, Part III cross-references, insider trading policy | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 40–43; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 55 | Business & governance (CP-1A) | Recommended | READY_WITH_LIMITATIONS | Board committees, compensation and share ownership sit in a proxy statement that is not supplied |
| Divestitures, restructuring, the 2026 credit agreement, the share repurchase authorization | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 5–7; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 14–15; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 36–38; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 138–141 | Business & governance (CP-1A) | Recommended | READY | No 8-K or press release for the May 2026 agreement |
| Asbestos, environmental and other litigation, reserves, insurance receivable and restricted investments | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 8–10; 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 20–25; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 165–171 | Short credit snapshot (CP-2); Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Reserves are management estimates; no actuarial or legal reports |
| Pensions, retiree medical and leases | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 17–19; 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 155–164 | Financial foundation (CP-1); Short credit snapshot (CP-2) | Recommended | READY | Interim notes are condensed |
| Strengths, weaknesses and credit-risk transmission | Built from the module outputs above | Short credit snapshot (CP-2) | Recommended | READY_WITH_LIMITATIONS | No agency analysis or market data to test the view against |
| Executed 2026 credit agreement, note indentures, guarantor and security schedules | Not supplied; the agreement is listed as an exhibit incorporated by reference at 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 72, and the indentures are listed likewise at 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, pages 45–47 | Legal & covenants (CP-4); Covenant capacity (CP-4C); Structural priority (CP-3); Intercreditor control; Recovery & fulcrum | Blocked | CONDITIONAL | Source not carried by the set; none of these is requested by the pathway |
| Agency reports, rating actions and triggers | Not supplied; the issuer states current ratings at 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 | Ratings & triggers (CP-2H) | Blocked | CONDITIONAL | Source not carried by the set; action dates are not stated |
| Market prices, quotes, spreads and equity valuation | Not supplied; none entered in the run settings | Market-implied risk; Relative value; Security selection | Blocked | CONDITIONAL | Source not carried by the set |
| Peer financials and portfolio data | Not supplied; no peer source and no portfolio data | Peer benchmark; Portfolio fit; Committee decision | Blocked | CONDITIONAL | Source not carried by the set |
| Forward assumptions, hedging detail and market-risk disclosures | Item 7A text exists at 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 69; no assumptions entered | Forward credit model; Downside; Rates, FX & hedging | Inapplicable | READY | Not requested by the pathway |
| Earlier run and research questions | None entered; first run of this pathway | Changes since the last run; Research questions | Inapplicable | READY | Nothing to compare or to answer |

### T6 - Evidence trace

| Trace ID | Claim | Lineage class | Source | Quoted evidence |
| --- | --- | --- | --- | --- |
| TR-01 | The registrant is Ashland Inc., a Delaware corporation, commission file number 333-211719 | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 | "Commission file number 333-211719" |
| TR-02 | The fiscal year ends September 30 | Directly Sourced | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 1 | "For the fiscal year ended September 30, 2025" |
| TR-03 | The FY2025 annual report was filed with the SEC on 2025-11-20 | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 4 | "filed with the SEC on November 20, 2025" |
| TR-04 | The latest report covers three and nine months ended 2026-06-30 with prior-year comparatives | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 1 | "For the quarterly period ended June 30, 2026" |
| TR-05 | Annual statements cover FY2025, FY2024 and FY2023 | Directly Sourced | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 122 | "Sales - Note P" |
| TR-06 | Long-term debt of USD 1,374 million at 2026-06-30 with no current portion, in four instruments | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 | "The current portion of the long-term debt was zero for both June 30, 2026 and September 30, 2025" |
| TR-07 | The maturity ladder shows nothing in 2026, USD 4 million in 2027, USD 571 million in 2028, USD 97 million in 2029, nothing in 2030 and USD 450 million in 2031 | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 | "$4 million in 2027, $571 million in 2028, $97 million in 2029, zero in 2030 and $450 million in 2031" |
| TR-08 | The 2026 credit agreement of 2026-05-28 gives a USD 500 million five-year unsecured revolving facility with a USD 125 million letter of credit sublimit | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 14 | "provides for a $500 million five-year revolving credit facility (including a $125 million letter of credit sublimit)" |
| TR-09 | Available liquidity of USD 936 million is cash of USD 440 million plus revolver capacity of USD 496 million | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 65 | "available liquidity position, which includes cash and cash equivalents and the revolving credit facility, was $936 million at June 30, 2026" |
| TR-10 | Covenant levels are a maximum net leverage of 4.0 and a minimum interest coverage of 3.0, with reported ratios of 2.3 and 6.9 | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 67 | "At June 30, 2026, Ashland’s calculation of the consolidated net leverage ratio was 2.3." |
| TR-11 | The issuer states S&P at BB and Moody's at Ba2, both with stable outlooks, at 2026-06-30 | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 | "was downgraded to BB during the nine months ended June 30, 2026" |
| TR-12 | Total debt principal was USD 1,403 million against carrying value of USD 1,374 million | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 | "outstanding principal balance of $1,403 million, discounts of $20 million, and debt issuance costs of $9 million" |
| TR-13 | There are four reportable segments plus unallocated and other | Directly Sourced | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 4 | "Ashland is comprised of the following reportable segments: Life Sciences, Personal Care, Specialty Additives and Intermediates." |
| TR-14 | Part III is incorporated by reference to a proxy statement that is not in the set | Directly Sourced | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 41 | "Ashland plans to file such Proxy Statement within 120 days after September 30, 2025" |
| TR-15 | The U.S. receivables sale program was scheduled to terminate on 2026-09-11 and no later report in the set restates or updates that date | Directly Sourced | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 151 | "extended from April 14, 2025 to September 11, 2026" |
| TR-16 | The latest balance sheet is 141 days old at the as-of date | Calculated | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2 | "CONDENSED CONSOLIDATED BALANCE SHEETS" |
| TR-17 | A trailing twelve months to 2026-06-30 can be built from FY2025 plus nine months of 2026 less nine months of 2025 | Analyst Inference | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 3 | "Nine months ended" |
| TR-18 | The fourth quarter of FY2024 cannot be isolated because no FY2024 nine-month report is in the set | Analyst Inference | 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 118 | "Statements of Consolidated Comprehensive Income" |
| TR-19 | The executed credit agreement and note indentures are not in the set | Insufficient Information | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 72 | "Second Amended and Restated Credit Agreement dated as of May 28, 2026" |
| TR-20 | No agency report, market quote, peer data or portfolio data is in the set | Insufficient Information | Run settings (not issuer evidence) | Quotes, ratings, peers and portfolio entries are empty |
| TR-21 | Status of the U.S. receivables sale program after 2026-09-11 is not established | Insufficient Information | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 16 | "Ashland continues to maintain its U.S. Accounts Receivable Sales Program, which was entered into during fiscal 2021" |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2024-11-18 | day | 2024-11-18 | Annual report for the fiscal year ended 2024-09-30 signed | Historical — signed November 18, 2024 | 10-K_2024-09-30_ash_ash-20240930.htm.jsonl, page 56 | Earliest annual report in the set; gives the 2024-09-30 debt, liquidity and ratings position |
| 2025-11-20 | day | 2025-11-20 | Annual report for the fiscal year ended 2025-09-30 signed | Historical — signed November 20, 2025; later reports state it was filed with the SEC on that day | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 55 | Controls for fiscal year-end 2025 facts and the pre-refinancing revolver of USD 600 million |
| 2026-02-03 | day | 2026-02-03 | Quarterly report for the quarter ended 2025-12-31 signed | Historical — signed February 3, 2026 | 10-Q_2025-12-31_ash_ash-20251231.htm.jsonl, page 61 | First 2026 interim view of liquidity and the first reported agency downgrade |
| 2026-04-29 | day | 2026-04-29 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — signed April 29, 2026 | 10-Q_2026-03-31_ash_ash-20260331.htm.jsonl, page 70 | Second 2026 interim view; reports a further agency downgrade |
| 2026-07-29 | day | 2026-07-29 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — signed July 29, 2026 | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 73 | Latest report in the set; its balance sheet is 141 days old at the as-of date |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 15 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 9 |

## Calculations

Each result is worked from the figures stated in the inputs column.

| Calc ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C-1 | Days from the latest balance-sheet date to the as-of date | 2026-11-18 less 2026-06-30 | 141 days | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 2 |
| C-3 | Days from the 2026 fiscal year end to the as-of date | 2026-11-18 less 2026-09-30 | 49 days | 10-K_2025-09-30_ash_ash-20250930.htm.jsonl, page 1 |
| C-4 | Available liquidity at 2026-06-30 | Cash and cash equivalents USD 440 million plus revolver capacity USD 496 million, where USD 496 million is USD 500 million less USD 4 million of letters of credit | USD 936 million, which equals the issuer's stated figure | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, pages 65–66 |
| C-5 | Debt carrying value from the instrument table at 2026-06-30 | USD 450 million plus USD 571 million plus USD 282 million plus USD 76 million less USD 5 million of other | USD 1,374 million, which equals long-term debt on the balance sheet | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 13 |
| C-6 | Principal less discounts and issuance costs at 2026-06-30 | USD 1,403 million less USD 20 million less USD 9 million | USD 1,374 million, which equals carrying value; the USD 29 million difference is the definition gap | 10-Q_2026-06-30_ash_ash-20260630.htm.jsonl, page 66 |

## Gaps

| Gap ID | Type | Severity | What is missing or differs | Affected work | Remediation |
| --- | --- | --- | --- | --- | --- |
| G-1 | Source gap: period | MINOR | No annual or quarterly report after the quarter ended 2026-06-30; the fiscal year ended 2026-09-30, 49 days before the as-of date, has no annual report in the set, and the latest balance sheet is 141 days old | Financial foundation; Short credit snapshot: every balance-sheet figure is at 2026-06-30 | Add the FY2026 annual report when filed |
| G-2 | Source gap: legal documents | MINOR | The executed 2026 credit agreement (an exhibit incorporated by reference to a Form 8-K filed 2026-05-29), the indentures for the 2028, 2031 and 2043 notes and the 2029 junior subordinated notes, and any guarantor and security schedules are not supplied; the annual report lists the indentures as exhibits incorporated by reference | Legal and covenant analysis, structural priority, intercreditor control and recovery are not requested; Financial foundation relies on the issuer's description of covenant levels | Supply the agreement and indentures before any legal or recovery work |
| G-3 | Source gap: ratings | MINOR | Only the issuer's own statement of S&P at BB and Moody's at Ba2 is in the set; neither agency report is supplied and the dates of the downgrades are not stated beyond the quarter | Short credit snapshot: rating context rests on the issuer's sentence | Supply agency reports if rating triggers or notching are needed |
| G-4 | Source gap: market, peers, portfolio | MINOR | No quotes, spreads, share price, peer financials or portfolio data, and none entered in the run settings | Market-implied, relative-value and portfolio work are not requested and cannot be done | Supply the data if those sections are requested |
| G-5 | Source gap: governance | MINOR | Part III of both annual reports is incorporated by reference to a proxy statement that is not supplied | Business & governance: board committees, compensation and share ownership are not established | Supply the latest proxy statement |
| G-6 | Source gap: liquidity | MINOR | The U.S. accounts receivable sale program was scheduled to terminate on 2026-09-11 per the annual reports; the June 2026 quarterly report gives U.S. program sales outstanding of USD 68 million but no termination date, and none of the three 2026 quarterly reports lists an amendment as an exhibit, so nothing in the set shows an extension or a lapse | Financial foundation and Short credit snapshot: whether USD 68 million of sold receivables stays off balance sheet after that date is not established | Supply the amendment or the fiscal 2026 annual report |
| G-7 | Source gap: quarterly detail | MINOR | No fiscal 2024 quarterly report is in the set, so the fourth quarter of FY2024 cannot be isolated and quarterly history before the first quarter of FY2025 is annual only | Financial foundation: the quarterly series starts at the first quarter of FY2025 | Supply the three 2024 quarterly reports if a longer series is wanted |
| G-8 | Source gap: company materials | MINOR | No earnings release, investor presentation, call transcript or guidance; adjusted measures are taken from the reconciliations in the quarterly management discussion | Financial foundation; Short credit snapshot: outlook statements are limited to what the filings say | Supply releases and presentations if guidance is wanted |
| G-9 | Definition difference | MINOR | Total debt is USD 1,374 million at carrying value and USD 1,403 million at principal; covenant EBITDA is defined differently from reported Adjusted EBITDA | Financial foundation must state which definition each ratio uses and not blend them | State the definition beside each ratio |

## Next module

The orchestrator selects the next module.
