---
module_id: CP-0
issuer_id: nmrk-1690680
analysis_date: 2026-11-18
run_id: nmrk-1690680-2026-11-18-credit_snapshot-host
issuer_name: Newmark Group, Inc.
---

# Source readiness for Newmark Group, Inc.

## Request

Source readiness for Newmark Group, Inc. (issuer nmrk-1690680), as of 2026-11-18, on the credit snapshot pathway. Scope: whether the eight supplied filings and earnings releases support the requested business and governance, financial foundation and fundamental credit work, and what remains blocked. The run settings state no separate objective, so the pathway's full credit assessment use case is the objective.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_nmrk-20241231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2024 (date shown is the signature date; filing date not stated) | 2025-03-03 | c6b11e9dd04fb471f1a5822008f0079818e871cc12a802f9ab9d89acf691fbd5 | Identity, period and audit-status checks; searched for covenant levels, adjusted EBITDA and ratings; locators for the FY2024 statements, debt note and auditor's report. |
| 10-K_2025-12-31_nmrk-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 31, 2025 (date shown is the signature date; filing date not stated) | 2026-03-02 | 22a5aacf7096eb3dc4b4c8223c5e2be4d10d69343c4c3da2b094b0da4440b6ee | Prior-period (FY2025) anchor; identity, perimeter and audit-status checks; locators for statements, debt, warehouse, ratings, ownership, business description, exhibit index and Part III references. |
| 10-Q_2026-03-31_nmrk-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended March 31, 2026 (date shown is the signature date; filing date not stated) | 2026-05-08 | 9d42ee2a7d64c79213ec29d3852d82675fcd0b6ca1162de8641bc1a7316a57ce | Period coverage; locators for the Q1 2026 statements, debt, warehouse, liquidity and ratings; revenue and net income tied to the Q1 release. |
| 10-Q_2026-06-30_nmrk-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended June 30, 2026 (date shown is the signature date; filing date not stated) | 2026-08-07 | a0edff3260d7d93d0cca139e34b3a89b90c43cf836241c61b6b6defad440183f | Period coverage; locators for the six-month 2026 statements, debt, warehouse, liquidity and ratings; exhibit index entry for the credit agreement; revenue and net income tied to the Q2 release. |
| 10-Q_2026-09-30_nmrk-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended September 30, 2026 (date shown is the signature date; filing date not stated) | 2026-11-06 | 7bcaad668dfadfc424a92b6e8f9c4b42aee62b7ff912c13a987477ae5eb61d36 | Current-period anchor; identity and perimeter; locators for the Q3 and nine-month 2026 statements, debt, warehouse, liquidity, ratings, commitments, subsequent events and ownership; cash-flow comparison with the Q3 release. |
| EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-30 | b2ae5042797965a9e2d658652478295428fe572872279c56780d106e60a3ce32 | Locators for the adjusted EBITDA reconciliation and net leverage statement; revenue and net income tied to the Q1 10-Q. |
| EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-29 | 2f35928c24c665e176df0535eed421f74981dcfe38a84f7e4898e35d5bc2f8e0 | Locators for the adjusted EBITDA reconciliation and net leverage statement; six-month cash-flow totals tied to the Q2 10-Q. |
| EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-29 | 11847a8b2a4e67e7db1d2de1466afd57547ae954b82ddfb89c4b0330afcd210e | Adjusted EBITDA and net leverage definitions and statements; nine-month cash-flow totals compared with the Q3 10-Q; revenue and net income tied to the Q3 10-Q. |

No upstream handoff was supplied to this module. The run settings file holds the user's dated inputs and is not an issuer source, so it is not listed.

## Findings

### Bottom line

The eight supplied filings and releases are enough to run business, financial and fundamental credit work on Newmark, but they cannot support any view on covenant headroom, security terms or relative value.

The newest quarterly report was signed 12 days before the cutoff, and the 2024 and 2025 annual reports are audited. Two points limit the financial work: adjusted EBITDA and the issuer's net leverage appear only in the unaudited earnings releases, and the third-quarter release and quarterly report print different nine-month 2026 cash-flow totals, so the filing controls under the source hierarchy and the release figure stays beside it. No executed credit agreement or indenture was supplied, and the filings state covenant compliance without printing any covenant level, so creditor protection can be read only as management describes it.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 138; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 16–17; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 34; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 62; calculation C1; calculation C2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-03-03 | day | 2025-03-03 | Annual report for fiscal 2024 signed | Historical — signed "on the 3rd day of March, 2025" | 10-K_2024-12-31_nmrk-20241231.htm.jsonl, page 258 | Audited FY2024 baseline and the debt note as it stood at that year-end. |
| 2026-03-02 | day | 2026-03-02 | Annual report for fiscal 2025 signed; auditor's report dated the same day | Historical — signed "on the 2nd day of March, 2026" | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 269 | Newest audited balance sheet and the prior-period anchor for the run. |
| 2026-04-30 | day | 2026-04-30 | First quarter 2026 earnings release issued | Historical — "today reported its financial results for the three months ended March 31, 2026" | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl, page 1 | Carries the issuer's adjusted EBITDA reconciliation and net leverage statement for the quarter; unaudited. |
| 2026-05-08 | day | 2026-05-08 | First quarter 2026 quarterly report signed | Historical — signed "Date: May 8, 2026" | 10-Q_2026-03-31_nmrk-20260331.htm.jsonl, page 129 | First unaudited 2026 statements; controls over the release where the two differ. |
| 2026-07-29 | day | 2026-07-29 | Second quarter 2026 earnings release issued | Historical — "today reported its financial results for the three and six months ended June 30, 2026" | EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl, page 1 | Carries the adjusted EBITDA reconciliation and net leverage statement for the half-year; unaudited. |
| 2026-08-07 | day | 2026-08-07 | Second quarter 2026 quarterly report signed | Historical — signed "Date: August 7, 2026" | 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 134 | Six-month 2026 statements; its exhibit index lists the current credit agreement, which was not supplied. |
| 2026-10-29 | day | 2026-10-29 | Third quarter 2026 earnings release issued | Historical — "today reported its financial results for the three and nine months ended September 30, 2026" | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 1 | Source of the issuer's net leverage and adjusted EBITDA statements for September 2026; its cash-flow totals differ from the quarterly report. |
| 2026-11-06 | day | 2026-11-06 | Third quarter 2026 quarterly report signed | Historical — signed "Date: November 6, 2026" | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 138 | Newest source and current-period anchor; the nearest source to the cutoff (see calculation C1). |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 12 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 9 |

### T1 - Input gate

| Gate item | Result | Detail | Source |
| --- | --- | --- | --- |
| Objective | Recorded | The run settings state no objective, so the objective is the credit snapshot pathway's use case: a full credit assessment of whether to own the issuer, in which instrument, and why. This run asks for four modules only: Source readiness (CP-0), Financial foundation (CP-1), Business & governance (CP-1A) and Fundamental credit (CP-2). | Run settings |
| Issuer identity | Pass | Newmark Group, Inc., Delaware, Commission file number 001-38329, Nasdaq ticker NMRK. The cover of each periodic report names this one registrant, and each release names Newmark Group, Inc. The run settings leave borrower, parent, guarantors, sponsor, sector and country blank; blank is not zero. | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 1 |
| Reporting perimeter | Pass with limitation | Consolidated Newmark Group, Inc. statements. GSE warehouse facilities sit on the balance sheet beside long-term debt, and the issuer's total corporate debt excludes them; warehouse borrowings are recourse only to Berkeley Point Capital, LLC. | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 59–60; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 8 |
| Dates | Pass | As-of 2026-11-18 equals the cutoff; current period Q3 2026; prior period FY2025. The newest source is dated 2026-11-06 and no source is dated after the cutoff. | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 138 |
| Source set | Pass | Eight files: two annual reports (FY2024, FY2025), three quarterly reports (Q1, Q2 and Q3 2026) and three earnings releases (one per 2026 quarter). Executed legal documents, rating agency reports, market quotes, peer data, a portfolio workbook, a prior case, a management bridge and research questions: none supplied. | Run settings |
| Period coverage | Pass with limitation | Year-end statements for FY2025 and FY2024; interim statements for the three months to 2026-03-31, six months to 2026-06-30 and nine months to 2026-09-30, each with the prior-year comparative. A stand-alone Q3 2025 quarterly report and a Q4 2025 results release were not supplied. | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 173; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 19–20 |
| Authority | Recorded | Tier 1: the two annual reports (audited) and three quarterly reports (unaudited). Tier 2: the three earnings releases (unaudited, with non-GAAP measures). No tier 3 or tier 4 evidence. | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 173; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 20 |
| Gate result | READY_WITH_LIMITATIONS | The effective source set supports the requested modules with the limitations in the content-to-module map and the gap list. It cannot support Legal & covenants (CP-4) or Security selection (CP-3), and has no portfolio input for Committee decision (CP-6); this run requests none of them. | Content-to-module map and gap list in this module |

### T2 - Source register

| Source ID | Source file | Document | Period covered | Authority tier | Audit status | Active representation | Limitations | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_nmrk-20241231.htm.jsonl | Annual report, Form 10-K | FY2024, year ended 2024-12-31 | 1 - primary filing | Audited; Ernst & Young LLP report dated 2025-03-03 | Supplied text file; original HTML is provenance only | Statements in USD thousands; tables are flattened text; a page is an extraction chunk, not a printed page | 10-K_2024-12-31_nmrk-20241231.htm.jsonl, page 167 |
| S2 | 10-K_2025-12-31_nmrk-20251231.htm.jsonl | Annual report, Form 10-K | FY2025, year ended 2025-12-31 | 1 - primary filing | Audited; Ernst & Young LLP report dated 2026-03-02 | Supplied text file; original HTML is provenance only | Part III items are incorporated by reference to a proxy statement or 10-K amendment that was not supplied; same text-extraction limits | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 173; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 264 |
| S3 | 10-Q_2026-03-31_nmrk-20260331.htm.jsonl | Quarterly report, Form 10-Q | Three months ended 2026-03-31 | 1 - primary filing | Unaudited | Supplied text file; original HTML is provenance only | Interim figures only; same text-extraction limits | 10-Q_2026-03-31_nmrk-20260331.htm.jsonl, page 20 |
| S4 | 10-Q_2026-06-30_nmrk-20260630.htm.jsonl | Quarterly report, Form 10-Q | Three and six months ended 2026-06-30 | 1 - primary filing | Unaudited | Supplied text file; original HTML is provenance only | Interim figures only; same text-extraction limits | 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 20 |
| S5 | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl | Quarterly report, Form 10-Q | Three and nine months ended 2026-09-30 | 1 - primary filing | Unaudited | Supplied text file; original HTML is provenance only | Interim figures only; no covenant levels; same text-extraction limits | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 20 |
| S6 | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl | Earnings release, Exhibit 99.1 | Three months ended 2026-03-31 | 2 - issuer release | Unaudited | Supplied text file; original HTML is provenance only | Non-GAAP measures defined by the issuer; amounts in USD millions and thousands by table | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl, page 29 |
| S7 | EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl | Earnings release, Exhibit 99.1 | Three and six months ended 2026-06-30 | 2 - issuer release | Unaudited | Supplied text file; original HTML is provenance only | Non-GAAP measures defined by the issuer; amounts in USD millions and thousands by table | EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl, page 32 |
| S8 | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl | Earnings release, Exhibit 99.1 | Three and nine months ended 2026-09-30 | 2 - issuer release | Unaudited | Supplied text file; original HTML is provenance only | Non-GAAP measures defined by the issuer; nine-month cash-flow totals differ from S5 | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 16–17 |

### T4 - Content-to-module map

| Capability | Disposition | Readiness if run | Content basis | Evidence demand | Limitation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Audited FY2024 and FY2025 statements; unaudited Q1, Q2 and Q3 2026 statements; debt, warehouse, liquidity and cash-paid-interest disclosures; adjusted EBITDA reconciliations and net leverage statements in the releases | Statement lines by period; debt at carrying value with principal; cash and facility availability; cash interest; reported EBITDA with adjusted EBITDA beside it; post-balance-sheet items | Adjusted EBITDA and the issuer's net leverage exist only in the releases, and the issuer's net leverage excludes the GSE warehouse facilities; nine-month 2026 cash-flow totals differ between the Q3 release and the Q3 10-Q (the 10-Q controls); stand-alone Q3 2025 and Q4 2025 documents were not supplied; interim statements are unaudited | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 19–20; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 23–24; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 59–62; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 32–34; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 173–178; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 221 |
| Business & governance (CP-1A) | Recommended | READY_WITH_LIMITATIONS | Service lines and business description; single reportable segment; revenue by service line; control by Cantor and the Lutnick family voting arrangements; ownership structure; related-party arrangements | Company description, revenue model and mix, ownership and control, related parties, management and board | Directors, executive officers, compensation and beneficial ownership are incorporated by reference to a proxy statement or 10-K amendment that was not supplied; ownership diagrams are not carried as images | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 17; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 20; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 53–55; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 264; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 92; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 133–134; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 68–84 |
| Fundamental credit (CP-2) | Recommended | READY_WITH_LIMITATIONS | Issuer-stated ratings; liquidity statement; commitments, contingencies and the subsequent-events note; the outputs of the Financial foundation and Business & governance modules (their production is ordered by CP-OS and is not a readiness ground) | Credit-relevant judgement from the statements, debt, liquidity, ratings and contingencies | No executed debt documents, so covenant levels and guarantor terms are not established; ratings are stated by the issuer in its filings, with no agency report supplied; no market prices, peers or portfolio inputs | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 91–92; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 112; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 116; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 96 |
| Downside (CP-2A) | Inapplicable to this run | Not assessed: not requested | The run settings leave the downside assumptions blank (Not supplied) | Scenario assumptions | Not requested | Run settings |
| Liquidity (CP-2D) | Inapplicable to this run | Not assessed: not requested | Cash, revolving facility availability and the warehouse line table are printed | Cash, undrawn committed facilities, facility terms | Not requested | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 59–62; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 112 |
| Rates, FX & hedging (CP-2E) | Inapplicable to this run | Not assessed: not requested | Derivative notional table and interest-rate sensitivity are printed | Hedge terms, rate sensitivity | Not requested | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 52; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 136 |
| Forward credit model (CP-2G) | Inapplicable to this run | Not assessed: not requested | Needs the Financial foundation and Downside outputs and forecast assumptions, none of which this run produces or supplies | Forecast drivers | Not requested | Run settings |
| Refinancing & LME (CP-3C) | Inapplicable to this run | Not assessed: not requested | Maturities and terms of the senior notes, credit facility and warehouse lines are printed | Maturity profile, facility terms | Not requested | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 59–62 |
| Legal & covenants (CP-4) | Blocked | BLOCKED | The exhibit indexes list the indenture, second supplemental indenture, form of 2029 notes and credit agreements by reference only; none was supplied and the run settings declare no legal documents | Executed governing documents | No executed governing document | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 265; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 267–268; 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 134 |
| Security selection (CP-3) | Inapplicable to this run | CONDITIONAL if run | No instrument terms, quotes or deal terms in the run settings; the executed documents are not carried | Instrument terms, prices, executed documents | Missing sources | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 265 |
| Peer benchmark (CP-1C) | Inapplicable to this run | Not assessed: not requested | The run settings name no peer source | Peer set and peer financials | Not requested | Run settings |
| Committee decision (CP-6) | Inapplicable to this run | Not assessed: not requested | No portfolio file supplied | Fund mandate and exposures | Not requested | Run settings |
| Evidence validation (CP-5) | Inapplicable to this run | Not assessed: not requested | Reads the other modules' outputs | Prior module outputs | Not requested | Run settings |
| Research questions (CP-DR) | Inapplicable to this run | Not assessed: no research question | The run settings state no research question | A concrete question and receiving module | None stated | Run settings |
| Changes since the last run (CP-8) | Inapplicable to this run | Not assessed: first run | First run of this pathway for the issuer | An earlier run of the same pathway | None exists | Run settings |

### T6 - Evidence trace

| Trace ID | Readiness claim | Source ID | What the locator shows | Lineage class | Source |
| --- | --- | --- | --- | --- | --- |
| E1 | The registrant is Newmark Group, Inc., Delaware, Commission file number 001-38329, one registrant on the cover | S5 | Cover page names Newmark Group, Inc., Delaware, file number 001-38329 | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1 |
| E2 | The newest report covers the quarter ended 2026-09-30 and is signed 2026-11-06, 12 days before the cutoff | S5 | Signature block reads "Date: November 6, 2026"; age computed in calculation C1 | Calculated | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 138 |
| E3 | The Q3 report prints the balance sheet at 2026-09-30 and 2025-12-31 with cash, warehouse facilities, long-term debt and equity, unaudited | S5 | Balance sheet lines: cash 239,983; warehouse facilities 1,309,105; long-term debt 877,508 (USD thousands) | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 19–20 |
| E4 | Corporate debt is the 7.500% senior notes plus the revolving credit facility, and warehouse facilities are reported apart | S5 | Debt note: senior notes 597,508 and credit facility 280,000 give total corporate debt 877,508 (USD thousands) | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 60–62 |
| E5 | Warehouse lines are listed by line with committed and uncommitted amounts and balances; recourse is limited to Berkeley Point Capital, LLC | S5 | Warehouse table totals 1,309,105 outstanding (USD thousands); recourse sentence | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 59–60 |
| E6 | The liquidity statement gives cash and committed revolver availability | S5 | Cash and cash equivalents USD 240.0 million and USD 620.0 million available under the revolving credit facility | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 112 |
| E7 | Cash paid for interest and taxes is printed for nine months 2026 and 2025 | S5 | Supplemental cash-flow table: interest 53,779 and taxes 42,689 for nine months 2026 (USD thousands) | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 24 |
| E8 | Adjusted EBITDA, its reconciliation and the issuer's net leverage are stated only in the releases; none of the five periodic reports contains those terms | S8 | Definitions, reconciliation and the net leverage statement in the Q3 release; a text search of both annual and all three quarterly reports found no match | Directly Sourced | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 32–34; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 28 |
| E9 | Nine-month 2026 operating, investing and financing cash-flow totals differ between the Q3 release and the Q3 10-Q, while the net change in cash is the same | S5, S8 | 10-Q operating (175,421), investing (198,561), financing 381,896; release operating (171,272), investing (201,054), financing 380,240; both net increase 7,914 (USD thousands); see calculations C2 to C5 | Conflicting | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 16–17 |
| E10 | Issuer-stated ratings at 2026-09-30 differ from those at 2025-12-31 for two agencies | S5, S2 | 2026-09-30: Fitch BBB- Stable; S&P Global BBB- Stable; JCRA A- Stable; Kroll BBB- Positive. 2025-12-31: JCR BBB+ Stable; Kroll BBB- Positive; Fitch BBB- Stable; S&P BB+ Stable | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 116; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 96 |
| E11 | Covenant compliance is asserted but no covenant level, test result or headroom figure is printed | S5, S2 | Compliance sentences for the warehouse facilities and the credit facilities; the annual report names minimum interest coverage and maximum leverage tests only for the former delayed draw term loan | Insufficient Information | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 60; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 62; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 224 |
| E12 | The indenture, second supplemental indenture, form of notes and credit agreements are listed by reference and were not supplied | S2, S4 | Exhibit index entries 4.2 to 4.4, 10.19 and 10.24 in the annual report; Third Amended and Restated Credit Agreement in the Q2 report's exhibit index | Insufficient Information | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 265; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 267–268; 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 134 |
| E13 | Directors, executive officers, compensation and beneficial ownership are incorporated by reference to documents not supplied | S2 | Part III items 10 to 14 incorporate a proxy statement or 10-K amendment | Insufficient Information | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 264 |
| E14 | Newmark is controlled by Cantor and CFGM, with Lutnick family voting arrangements and a stated ownership structure | S2, S5 | Risk factor on control by Cantor and CFGM; Lutnick Family Voting Agreement; ownership structure sections | Directly Sourced | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 53–55; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 104; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 133–134 |
| E15 | Both annual reports carry an Ernst & Young LLP audit opinion | S1, S2 | Auditor's signature and dates: 2025-03-03 for FY2024 and 2026-03-02 for FY2025 | Directly Sourced | 10-K_2024-12-31_nmrk-20241231.htm.jsonl, page 167; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 173 |
| E16 | The Q3 subsequent-events note records one dividend declaration; a warehouse line renewal after quarter-end is footnoted in the warehouse table instead | S5 | Note 29 text; footnote 1 to the warehouse table | Directly Sourced | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 92; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 59 |
| E17 | Each release ties to its quarterly report on revenue and on net income for fully diluted shares, within rounding | S6, S7, S8, S3, S4, S5 | Q1 release 846.5 and 19.6 (USD millions) against 846,519 and 19,610; Q2 release 888.4 and 27.1 against 888,419 and 27,139; Q3 release 973.2 and 67.4 against 973,195 and 67,351 (USD thousands) | Directly Sourced | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl, page 1; 10-Q_2026-03-31_nmrk-20260331.htm.jsonl, page 21; EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl, page 1; 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 21; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 1; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 20 |

### P3 - Input inventory and identity, period and version map

| Source ID | Supplied file | Original HTML sha256, stated on page 1 of the text file | Document family | Entity named | Period | Document date | Size in bytes | Text pages | Version and duplicate status | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_nmrk-20241231.htm.jsonl | ccc5a46e14b5c39c80c879a2069482d3b780c2cca4127781dee88def63cacb33 | Annual report | Newmark Group, Inc. | FY2024 | 2025-03-03 | 684681 | 259 | Distinct; kept as the FY2024 audited baseline; S2 carries the FY2024 comparatives and controls for year-end 2025 figures | 10-K_2024-12-31_nmrk-20241231.htm.jsonl, page 1 |
| S2 | 10-K_2025-12-31_nmrk-20251231.htm.jsonl | 4acc795aaacfcda563be58bbd24719338ad94c0399480b2ec670779aea8396bf | Annual report | Newmark Group, Inc. | FY2025 | 2026-03-02 | 723440 | 269 | Distinct; controls for FY2025 year-end figures | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 1 |
| S3 | 10-Q_2026-03-31_nmrk-20260331.htm.jsonl | fb0c25d452631ef9276bfdc9fabecaaf86587d940c0cc49d499635560679d8ea | Quarterly report | Newmark Group, Inc. | Q1 2026 | 2026-05-08 | 352342 | 129 | Distinct; interim; later 10-Qs restate cumulative periods | 10-Q_2026-03-31_nmrk-20260331.htm.jsonl, page 1 |
| S4 | 10-Q_2026-06-30_nmrk-20260630.htm.jsonl | 10e48ef2342260319ee5df20449e9d92f6a744651bd79b29a4e8b04efa9e50a1 | Quarterly report | Newmark Group, Inc. | Q2 2026 and six months | 2026-08-07 | 367790 | 134 | Distinct; interim | 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 1 |
| S5 | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl | 54316bab347f6b4f1bbc1f636a3fb7e983cb4f28b6aaea135d0e771e16361777 | Quarterly report | Newmark Group, Inc. | Q3 2026 and nine months | 2026-11-06 | 374375 | 138 | Distinct; newest source; controls over S8 where they differ | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1 |
| S6 | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl | 14e8f2feac3b25c4cb1af7c5156ccb5504ee5ecaac63d0c5a11d49be21fd2812 | Earnings release | Newmark Group, Inc. | Q1 2026 | 2026-04-30 | 82984 | 30 | Distinct; precedes S3 | EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl, page 1 |
| S7 | EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl | 59656c01a7f2807e28138bbbdc6d3a066038d965a90fc587bb71627ec6c4ae23 | Earnings release | Newmark Group, Inc. | Q2 2026 and six months | 2026-07-29 | 87220 | 33 | Distinct; precedes S4 | EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl, page 1 |
| S8 | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl | 5923d5bace0142fbe5f3b66c73f1f8cdfce5c942c375cf9797e44897a667b016 | Earnings release | Newmark Group, Inc. | Q3 2026 and nine months | 2026-10-29 | 90644 | 35 | Distinct; precedes S5 | EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 1 |

| Item | Value | Source |
| --- | --- | --- |
| Registrant | Newmark Group, Inc., Delaware; Commission file number 001-38329 | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1 |
| Listing | Class A common stock, symbol NMRK, The Nasdaq Stock Market LLC | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1 |
| Reporting perimeter | Consolidated. Newmark Holdings, L.P. is a consolidated subsidiary for which Newmark is general partner; Newmark and Newmark Holdings jointly own Newmark Partners, L.P., the operating partnership | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 24 |
| Fiscal year | Calendar year ending December 31 | 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 1 |
| Currency and units | US dollars. Statements are in thousands; the releases use USD millions in their highlight tables and thousands in their reconciliations | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 19; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 1 |
| Current and prior period | Current period Q3 2026 (quarter and nine months ended 2026-09-30); prior period FY2025 | Run settings |
| Version rule | The later filing controls where it restates or amends a term of an earlier one, and a filing controls over a release; the earlier document stays as evidence of the term at its date | Source hierarchy: filings over issuer releases (method rule) |
| Duplicates, amendments and supplements | None among the eight files: eight distinct hashes, no contained copy, and no amendment, waiver or supplement | The Sources section of this module |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Age of the newest source at the cutoff | Cutoff 2026-11-18 less signature date 2026-11-06 | 12 days | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 138 |
| C2 | Nine-month 2026 operating cash flow, Q3 10-Q less Q3 release | (175,421) less (171,272), USD thousands | (4,149) USD thousands; the 10-Q shows more cash used | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 16 |
| C3 | Nine-month 2026 investing cash flow, Q3 10-Q less Q3 release | (198,561) less (201,054), USD thousands | 2,493 USD thousands; the release shows more cash used | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 16 |
| C4 | Nine-month 2026 financing cash flow, Q3 10-Q less Q3 release | 381,896 less 380,240, USD thousands | 1,656 USD thousands | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 16 |
| C5 | Sum of the three differences, tested against the net change in cash | (4,149) plus 2,493 plus 1,656, USD thousands; both documents print a net increase of 7,914 | 0 USD thousands | 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 17 |

## Gaps

The executed debt documents were not supplied, and the run settings declare none. The annual report's exhibit index lists the indenture, the second supplemental indenture, the form of the 2029 notes and the earlier credit agreements, and the second quarter report's exhibit index lists the current third amended and restated credit agreement, all by reference only. Covenant definitions, guarantor terms, baskets and events of default therefore cannot be read from a primary document. The gap is minor for the requested modules, which can work from the filings' own debt notes, and blocking for Legal & covenants and Covenant capacity, which this run does not request. To close it, supply the executed credit agreement, the indenture and the supplemental indenture.
Basis: 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 265; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 267–268; 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 134

No covenant level, test result or headroom figure is printed anywhere in the supplied sources, after a search of every file for covenant, leverage, coverage and net worth terms. The quarterly and annual reports state only that Newmark was in compliance with all financial covenants at the balance-sheet dates, and the 2025 annual report names minimum interest coverage and maximum leverage tests only for the former delayed draw term loan, which it describes as consistent with the credit facility then in place. The annual report also names GSE and HUD eligibility criteria, including minimum net worth and operational liquidity, without printing their levels. Headroom is not calculable, and Fundamental credit can report management's compliance statement only; inferring levels from the issuer's net leverage figure would be unsupported.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 60; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 62; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 147; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 224; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 38

Adjusted EBITDA and the issuer's net leverage appear only in the three earnings releases, which are unaudited; neither annual report nor any quarterly report prints either term. The release defines net debt as total corporate debt excluding the GSE warehouse facilities, net of cash or liquidity, and net leverage as that net debt over trailing twelve-month adjusted EBITDA. The issuer's net leverage therefore rests on corporate debt only and on adjusted EBITDA, so it will not agree with a ratio built on reported EBITDA or on debt that includes the warehouse lines, and each ratio must be labelled; whether the warehouse lines count as debt is a perimeter decision for the Financial foundation, not a source question. Reported EBITDA has to be built from statement lines.
Basis: EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 8; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 28; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 34

The third-quarter release and the third-quarter quarterly report disagree on the nine-month 2026 cash-flow totals: the quarterly report prints operating cash flow of USD (175.4) million against USD (171.3) million in the release, investing of USD (198.6) million against USD (201.1) million, and financing of USD 381.9 million against USD 380.2 million, while both print the same net increase in cash. The differences net to zero, which is consistent with a classification difference, but neither document says why the totals differ; the release says only that other reclassifications may have been made to conform presentation. The quarterly report controls under the source hierarchy and the release figures stay beside it. The first and second quarter releases agree with their quarterly reports on operating cash flow.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 23; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, pages 16–17; EX-99.1_2026-10-29_nmrkex991secversion.htm.jsonl, page 15; EX-99.1_2026-04-30_nmrkex991043026-secversion.htm.jsonl, page 14; 10-Q_2026-03-31_nmrk-20260331.htm.jsonl, page 23; EX-99.1_2026-07-29_nmrkex991-secversion.htm.jsonl, page 15; 10-Q_2026-06-30_nmrk-20260630.htm.jsonl, page 24; calculation C2; calculation C3; calculation C4; calculation C5

A stand-alone third-quarter 2025 report and a fourth-quarter 2025 results release were not supplied. The third-quarter 2025 figures are available as comparatives inside the third-quarter 2026 report, and the fourth quarter of 2025 can be derived only as the 2025 annual figure less the nine-month 2025 comparative. A derived quarter or trailing twelve-month figure is valid only when every component is printed.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, pages 19–20; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, pages 173–174

Directors, executive officers, executive compensation, beneficial ownership and related transactions in the 2025 annual report are incorporated by reference to an amendment to the annual report or a 2026 proxy statement, neither of which was supplied. Business & governance can describe control by Cantor and the voting arrangements from the notes and risk factors but cannot describe the board or management from a primary document. Supply the proxy statement or annual report amendment to close it.
Basis: 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 264

Two terms differ between the 2025 annual report and the later quarterly reports because the later reports describe later events: the issuer-stated ratings, where the S&P and JCR ratings differ between 2025-12-31 and 2026-09-30, and the revolving credit facility's size and maturity, which the annual report describes as it stood before the amendment and restatement reported in the second quarter. The later report controls each current term. No rating agency report or rating action was supplied, so the ratings rest on the issuer's own statements.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 116; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 96; 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 61; 10-K_2025-12-31_nmrk-20251231.htm.jsonl, page 147

No bond or loan prices, deal terms, peer set, valuation inputs, portfolio file, management bridge or research question was supplied; the run settings leave these blank, not at zero. Peer benchmark, Market-implied risk, Security selection and Committee decision would have nothing to work from if they were requested, and the first run of this pathway has no earlier run for a comparison.

The supplied files are text only. Tables are flattened into lines, charts and diagrams are not carried as images, and a page in a citation is a chunk of the extraction rather than a printed page of the filing. The original HTML hash stated on the first page of each text file is recorded in the input inventory for provenance.
Basis: 10-Q_2026-09-30_nmrk-20260930.htm.jsonl, page 1

## Next module

The orchestrator selects the next module.
