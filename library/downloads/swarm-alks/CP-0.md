---
issuer_id: alks
module_id: CP-0
analysis_date: 2026-11-05
run_id: alks-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
module_status: Ready with limitations
---

## Request

Source readiness assessment for Alkermes plc. (issuer id alks), as of 2026-11-05, on the credit snapshot pathway. Scope: whether the seven supplied filings and earnings releases can support the financial foundation, the business and operating model, and the fundamental credit view, and what remains missing.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K of Alkermes public limited company for the year ended 31 December 2025 | 2026-02-25 | e4cb39ef2746983905a66c4851e17231fe0e2b3eb3dd9d346653644971686601 | Audited FY2025 statements, business description, pre-acquisition debt position, bridge facility and term loan terms |
| 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-05 | 2f002a6c3ee21ba1a12ed08afd7616a7de0cb6e62154bfb1ecb118ba4eafd45f | Q1 2026 statements and first post-acquisition debt and liquidity disclosures |
| 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-28 | bc67cf08c7dfc8de310d0ecdd1030e2a1391c6b7ce68e53f0b348219bcf79e99 | Q2 2026 statements and six-month comparatives |
| 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-03 | df6328c67d9ab03d30760e47eacac03760e7e83fb341e7073082128f2c7068d4 | Latest balance sheet, debt note, liquidity discussion, acquisition accounting and legal proceedings |
| EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-05 | 3f53152d2ff381e382b1d7a092db23f6a1d1dce5883995e4eda0a38a2d5d57a8 | Q1 2026 adjusted EBITDA, 2026 company expectations as first given |
| EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-28 | 4e5567773d88766be4958174400b81baacad01bd80fe607c8eb27ade6994b31f | Q2 2026 adjusted EBITDA, updated 2026 company expectations, chief executive transition |
| EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-03 | 041cf8e725b3d45a5b701a4d1acae145f94c2d37b75244f3f5fe173ac5392fc6 | Q3 and nine-month 2026 adjusted EBITDA reconciliation, reiterated 2026 expectations |

No analytical handoff from another module was supplied; this module is the first in the run.

## Findings

### Bottom line

The supplied sources support a credit snapshot of Alkermes plc as of 2026-11-05, but not covenant, rating or market-pricing work, because no executed credit agreement, rating or price evidence was supplied. The newest balance sheet is 36 days old at the as-of date.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58; calculation C1

Debt must be built from the quarterly filings, because the annual report's year-end statements predate the Avadel acquisition: the two senior secured term loans carry scheduled principal of USD 1,511.75 million against USD 787.57 million of cash and investments at 2026-09-30. Adjusted EBITDA is printed only in the earnings releases, and the filings say covenant levels exist but do not print them.
Basis: 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27–29; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6; calculation C2; calculation C4; calculation C5

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-25 | day | 2026-02-25 | Annual report for FY2025 signed and audit report dated | Historical — annual report signed by the directors and audit report dated 25 February 2026 | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 161; 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Latest audited statements; they describe the company before the Avadel acquisition and the term loans, so they cannot show the current debt. |
| 2026-05-05 | day | 2026-05-05 | First-quarter 2026 earnings release and Form 10-Q signed | Historical — Form 10-Q signed 5 May 2026 and release dated 5 May 2026 | 10-Q_2026-03-31_alks-20260331.htm.jsonl, page 50; EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl, page 1 | First quarter with Avadel and the term loans in the statements. |
| 2026-07-28 | day | 2026-07-28 | Second-quarter 2026 earnings release and Form 10-Q signed | Historical — Form 10-Q signed 28 July 2026 and release dated 28 July 2026 | 10-Q_2026-06-30_alks-20260630.htm.jsonl, page 57; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1 | Source of the updated 2026 company expectations that the third-quarter release reiterates. |
| 2026-11-03 | day | 2026-11-03 | Third-quarter 2026 earnings release and Form 10-Q signed | Historical — Form 10-Q signed 3 November 2026 and release dated 3 November 2026 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 1 | Newest source in the set, two days before the as-of date; it carries the latest balance sheet at 30 September 2026. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 12 |
| Calculated | 6 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 1 |

### T1 Input gate

| Gate item | Requirement | Finding | Status | Source |
|---|---|---|---|---|
| Reporting entity | The issuer is named and its perimeter is stated | Alkermes public limited company, incorporated in Ireland, Nasdaq symbol ALKS, reporting consolidated with its subsidiaries; the term loans are borrowed by Alkermes plc (TopCo Borrower), Alkermes, Inc. (U.S. Borrower) and Alkermes Finance LLC (U.S. Co-Borrower) | Pass | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 |
| As-of date | No source is dated after the as-of date 2026-11-05 | Newest source is dated 2026-11-03; none is later | Pass | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 1 |
| Objective | The pathway's use case when no objective is stated | Credit snapshot: historical financial foundation, business and revenue model, and a fundamental credit view; no further objective was stated in the run settings | Recorded | Run settings (not issuer evidence) |
| Periods | Current and comparison periods are identifiable | Current period Q3 2026 and nine months 2026 to 30 September 2026; comparison FY2025 and the 2025 interim periods | Pass | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–8 |
| Audited base year | An audited annual report is supplied | FY2025 annual report with an audit report by PricewaterhouseCoopers LLP, dated 25 February 2026, stating that the statements present fairly the financial position | Pass | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 162 and 165 |
| Interim coverage | Quarterly reports since the annual report are supplied | Form 10-Q for each of Q1, Q2 and Q3 2026 and an earnings release for each quarter | Pass | 10-Q_2026-03-31_alks-20260331.htm.jsonl, page 1; 10-Q_2026-06-30_alks-20260630.htm.jsonl, page 1; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1 |
| Currency and units | Reporting currency and scale are stated | USD; statements in thousands, releases and management discussion in millions | Pass | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 5 |
| Governing legal documents | Executed credit agreement or indenture when covenant or priority work is requested | Not supplied: the run settings declare no legal documents; the credit agreement of 2026-02-12 and its amendment of 2026-08-12 are described in the notes only | Gap | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28 and 58 |
| Ratings, market quotes, portfolio, peers | Inputs for rating, market-implied, portfolio and peer work | Not supplied: the run settings carry no issuer rating, price quote, portfolio limit or peer set | Gap | Run settings (not issuer evidence) |

### T2 Source register

| Source ID | Source | Document | Period covered | Tier | Authority and quality | Limitation | Use |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_alks-20251231.htm.jsonl | Annual report on Form 10-K | FY2025 (year ended 2025-12-31), with FY2024 and FY2023 comparatives | 1 | Primary filing with audit report | Year-end statements exclude Avadel and the term loans; Part III information is incorporated by reference to a proxy statement not supplied | Audited base year and business description |
| S2 | 10-Q_2026-03-31_alks-20260331.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 (quarter ended 2026-03-31) | 1 | Primary filing, unaudited | Acquisition accounting preliminary | Q1 2026 statements |
| S3 | 10-Q_2026-06-30_alks-20260630.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 and six months to 2026-06-30 | 1 | Primary filing, unaudited | Acquisition accounting preliminary | Q2 2026 statements |
| S4 | 10-Q_2026-09-30_alks-20260930.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026 and nine months to 2026-09-30 | 1 | Primary filing, unaudited | Purchase price allocation preliminary until no later than one year from 2026-02-12 | Latest balance sheet, debt and liquidity |
| S5 | EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | Earnings release | Q1 2026 | 2 | Issuer release, unaudited | Adjusted EBITDA is a company-defined non-GAAP measure | Q1 adjusted EBITDA and first 2026 expectations |
| S6 | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | Earnings release | Q2 2026 and six months to 2026-06-30 | 2 | Issuer release, unaudited | Adjusted EBITDA is a company-defined non-GAAP measure | Updated 2026 expectations |
| S7 | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | Earnings release | Q3 2026 and nine months to 2026-09-30 | 2 | Issuer release, unaudited | Adjusted EBITDA is a company-defined non-GAAP measure | Itemised adjusted EBITDA reconciliation |

### T4 Content-to-module map

| Capability | Evidence demand | Content found in the sources | Source | Disposition | Limitation |
|---|---|---|---|---|---|
| Financial foundation (CP-1) | Annual and interim statements, debt by facility, cash, interest, cash flow | Audited FY2025 statements; Q1, Q2 and Q3 2026 statements; debt note with two term loans; liquidity table by region | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 165–168; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–8 and 27–30 and 49–52 | Supported; requested in this run | Q4 2025 is not reported on its own and can only be derived by subtraction; no Adjusted EBITDA appears in any annual or quarterly report, only in the releases |
| Business & governance (CP-1A) | Company description, products, revenue model, ownership, management, acquisitions | Business section of the annual report; product tables, segment note and Avadel acquisition note in the Q3 report; chief executive transition in the Q2 release | 10-K_2025-12-31_alks-20251231.htm.jsonl, pages 9–62; 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 14–20; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, page 1 | Supported; requested in this run | Board, compensation and holder information is incorporated by reference to a proxy statement not supplied; no sponsor is stated |
| Fundamental credit (CP-2) | Earnings drivers, balance sheet strength, guidance, risks | Quarterly results discussion, company expectations for 2026, legal proceedings, debt and liquidity | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 36–52; EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, pages 2–3 | Supported; requested in this run | Covenant levels, ratings and market prices are absent, so conclusions on covenant headroom or market-implied risk are bounded |
| Liquidity (CP-2D) | Cash, investments, undrawn facilities, letters of credit | Cash, restricted cash and investments by region; no revolving facility is described; held-to-maturity investments pledged under lease letters of credit | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 49–50 | Supported for cash; no undrawn facility found | Not requested in this run |
| Refinancing & LME (CP-3C) | Maturity schedule and amendment history | Scheduled principal by year; amendment of 2026-08-12 that cut margins | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28–29 | Supported by the sources | Not requested in this run |
| Rates, FX & hedging (CP-2E) | Floating-rate exposure, hedges, currency exposure | Term SOFR margins, two interest rate collars entered in October 2026, euro cost exposure | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 30 and 55 | Supported by the sources | Not requested in this run |
| Legal & covenants (CP-4) | Executed credit agreement or indenture | Summary of covenants in the notes; amendment listed as an exhibit but not supplied | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28 and 58 | Blocked: no executed governing document supplied | Not requested in this run |
| Covenant capacity (CP-4A) | Covenant levels and the issuer's covenant calculations | The filings name a maximum Secured Net Leverage Ratio and a minimum Consolidated Interest Coverage Ratio and state compliance, without levels or reported ratios | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28 and 30 | Blocked: levels not printed | Not requested in this run |
| Structural priority (CP-4B) and Intercreditor control (CP-4D) | Guarantor list, security package, ranking, intercreditor terms | One senior secured credit agreement with subsidiary guarantors and a lien on substantially all assets; no other debt class; no guarantor list | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | Blocked: no legal documents | Not requested in this run |
| Recovery & fulcrum (CP-4C) | Enterprise value, claim waterfall, legal ranking | Not supplied: no valuation or legal ranking inputs | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | Blocked | Not requested in this run |
| Security selection (CP-3) and Market-implied risk (CP-3D) | Instrument prices, spreads, tradable securities | Not supplied: the run settings carry no quotes, and the only debt is two syndicated term loans | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27 | Blocked: no market inputs | Not requested in this run |
| Ratings & triggers (CP-2H) | Issuer or facility rating, rating-linked terms | Not supplied: the filings state ratings only for the company's own investments | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 23 | Blocked | Not requested in this run |
| Peer benchmark (CP-1C) | Peer set and peer financials | Not supplied: no peers in the run settings | Run settings (not issuer evidence) | Blocked | Not requested in this run |
| Downside (CP-2A) and Forward credit model (CP-2G) | Scenario assumptions, forecast drivers | Company expectations for 2026 only; no scenario assumptions in the run settings | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, pages 2–3; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2 | Partly supported | Not requested in this run |
| Earnings changes (CP-1B), Earnings quality (CP-1D) and Short credit snapshot (CP-L10) | Quarterly bridge, adjustments, one-off items | Itemised adjusted EBITDA reconciliation and the transaction adjustments to cost of goods, research and development, and selling and administrative expense | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, pages 2 and 6 | Supported by the sources | Not requested in this run |
| Committee decision (CP-6), Evidence validation (CP-5) and Changes since the last run (CP-8) | Portfolio limits; an earlier run for comparison | Not supplied: no portfolio, and this is the first run of the pathway | Run settings (not issuer evidence) | Inapplicable to this run | Not requested in this run |

### T6 Evidence trace

| Trace ID | Claim | Value | Source | Locator | Check |
|---|---|---|---|---|---|
| E1 | Newest balance sheet date and filing date | Balance sheet 2026-09-30; Form 10-Q signed 2026-11-03 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 58 | Signature block "Date: November 3, 2026" | Confirmed against page 1 cover "quarterly period ended September 30, 2026" |
| E2 | Two term loans are the only debt | Term Loan A due 2031-02-12 carrying USD 735,016 thousand; Term Loan B due 2031-08-12 carrying USD 762,715 thousand; total USD 1,497,731 thousand; current portion USD 26,500 thousand | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 27 | Note 12 table "Long-term debt consisted of the following" | Confirmed; the balance sheet on page 6 shows USD 26,500 thousand current and USD 1,471,231 thousand long-term |
| E3 | Scheduled principal | USD 1,511,750 thousand in total, of which USD 6,625 thousand in 2026 and USD 1,347,562 thousand after 2030 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 | "Scheduled maturities with respect to the Facilities" table | Recomputed in calculation C4 |
| E4 | Principal stated at the amendment | Term Loan A USD 745.3 million and Term Loan B USD 773.1 million, together USD 1,518.4 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 28 | "outstanding principal amount of $745.3 million" and "$773.1 million" | Differs from the 30 September schedule by one quarterly instalment of USD 6.625 million; see gap G4 |
| E5 | Cash and investments | Cash and cash equivalents USD 631,314 thousand; short-term investments USD 124,150 thousand; long-term investments USD 32,110 thousand; total USD 787,574 thousand | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6 | Balance sheet lines and liquidity table | Recomputed in calculation C2; release states USD 787,574 thousand on page 7 |
| E6 | Year-end 2025 position before the acquisition | No long-term debt; cash USD 388,570 thousand; restricted cash USD 731,206 thousand held in escrow | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165 | Consolidated balance sheet 31 December 2025 | Confirmed; escrow described on page 193 |
| E7 | Avadel acquisition closing and price | Closed 2026-02-12; total preliminary consideration USD 2,306,920 thousand | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 15–16 | Note 3 business combination and consideration table | Recomputed in calculation C6 |
| E8 | Contingent value right | Liability USD 136,922 thousand on the balance sheet; payment of up to USD 165.7 million if the milestone is met | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6 and 17 | Balance sheet line "Contingent consideration"; note on contingent consideration | Confirmed |
| E9 | Revenue and net result, Q3 and nine months 2026 | Total revenues USD 480,132 thousand and USD 1,369,052 thousand; net income USD 16,287 thousand and net loss USD (49,692) thousand | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 6–7 | Statements of operations | Agrees with release page 1 (USD 480.1 million; USD 1,369.1 million) |
| E10 | Adjusted EBITDA is company-defined and only in releases | Q3 2026 USD 120,065 thousand; nine months USD 339,544 thousand | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 | Itemised reconciliation tables | Recomputed in calculation C7; no mention in the annual or quarterly reports |
| E11 | Covenants exist but levels are not printed | Maximum Secured Net Leverage Ratio and minimum Consolidated Interest Coverage Ratio apply to the credit agreement other than the Term Loan B; company states compliance at 2026-09-30 | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 28 and 30 | "with the levels set forth in the Credit Agreement"; "in compliance with its debt covenants" | Same wording in the annual report page 194 and the Q1 and Q2 reports |
| E12 | Interest rate hedges after quarter end | Two zero-cost collars of USD 375.0 million notional each, cap 5.25% | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 30 | Note 12 final paragraph | Confirmed; repeated on page 55 |
| E13 | 2026 company expectations | Total revenues USD 1,730 million to USD 1,840 million; adjusted EBITDA USD 370 million to USD 410 million; reiterated on 2026-11-03 | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl, pages 2–3; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 2 | "Financial Expectations for 2026" table; "reiterates its financial expectations" | Confirmed |
| E14 | Cash definitions differ between sources | Cash, restricted cash and investments USD 1,319.5 million at 2025-12-31 in the Q3 report; cash and total investments USD 588,360 thousand at 2025-12-31 in the release | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 7 | Liquidity table; selected balance sheet | Reconciled in calculation C3; see gap G5 |

### P3 Input inventory

| Input ID | Source | Bytes | sha256 | Text pages | Entity | Period | Access | Header hash printed on page 1 |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_alks-20251231.htm.jsonl | 553024 | e4cb39ef2746983905a66c4851e17231fe0e2b3eb3dd9d346653644971686601 | 212 | Alkermes plc | FY2025 | Readable | fa48049fc0dbfc7a7165a35030ee5062ba7c8be0f979cb29b9799665e81dde46 |
| S2 | 10-Q_2026-03-31_alks-20260331.htm.jsonl | 144686 | 2f002a6c3ee21ba1a12ed08afd7616a7de0cb6e62154bfb1ecb118ba4eafd45f | 50 | Alkermes plc | Q1 2026 | Readable | 9fb9db23e1874427b6c5e986fa56de45b8ffeca3644af64fd805d2c111ff33da |
| S3 | 10-Q_2026-06-30_alks-20260630.htm.jsonl | 158596 | bc67cf08c7dfc8de310d0ecdd1030e2a1391c6b7ce68e53f0b348219bcf79e99 | 57 | Alkermes plc | Q2 2026 | Readable | 2492893f1d05de64f9587da123a324c40c19b4da3f4221b0b52aef2002648ebb |
| S4 | 10-Q_2026-09-30_alks-20260930.htm.jsonl | 168160 | df6328c67d9ab03d30760e47eacac03760e7e83fb341e7073082128f2c7068d4 | 58 | Alkermes plc | Q3 2026 | Readable | ed91e0b988fba961e8def0376eb1f92149676bf885c4493d0599767aa4832ee6 |
| S5 | EX-99.1_2026-05-05_alks-ex99_1.htm.jsonl | 19267 | 3f53152d2ff381e382b1d7a092db23f6a1d1dce5883995e4eda0a38a2d5d57a8 | 7 | Alkermes plc | Q1 2026 | Readable | da7f2a227e804ffefe22d1038f6538fe4b9e4a5f9336c3a5ed86c8c1f6010baf |
| S6 | EX-99.1_2026-07-28_alks-ex99_1.htm.jsonl | 22960 | 4e5567773d88766be4958174400b81baacad01bd80fe607c8eb27ade6994b31f | 8 | Alkermes plc | Q2 2026 | Readable | ec62be24272b4fef8cea8ee6beadb03fdf00096f79c3aa3e16e408ad906a8f6c |
| S7 | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl | 18864 | 041cf8e725b3d45a5b701a4d1acae145f94c2d37b75244f3f5fe173ac5392fc6 | 7 | Alkermes plc | Q3 2026 | Readable | b5bf94f09ae48eaeffeba063f4edbbd334cc0e93f46d49ebffbf8b751ee6194e |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Days from the latest balance sheet date to the as-of date | 2026-09-30 to 2026-11-05: 31 days to 2026-10-31 plus 5 days | 36 days | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 1 |
| C2 | Cash and investments at 2026-09-30 | USD 631,314 thousand cash plus USD 124,150 thousand short-term investments plus USD 32,110 thousand long-term investments | USD 787,574 thousand, which is USD 787.57 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 5–6; EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 7 |
| C3 | Cash and investments at 2025-12-31 on both definitions | Unrestricted: USD 388,570 thousand plus USD 199,645 thousand plus USD 145 thousand; with restricted cash: that sum plus USD 731,206 thousand | USD 588,360 thousand unrestricted, matching the release; USD 1,319,566 thousand with restricted cash against USD 1,319.5 million in the Q3 liquidity table, a rounding difference of USD 0.07 million | 10-K_2025-12-31_alks-20251231.htm.jsonl, page 165; 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 49 |
| C4 | Scheduled principal at 2026-09-30 | USD 6,625 thousand plus USD 26,500 thousand plus USD 40,563 thousand plus USD 45,250 thousand plus USD 45,250 thousand plus USD 1,347,562 thousand | USD 1,511,750 thousand, which is USD 1,511.75 million | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 29 |
| C5 | Principal to carrying value of the term loans | USD 1,511,750 thousand principal less USD 10.4 million unamortised discount less USD 3.6 million unamortised financing costs, against USD 735,016 thousand plus USD 762,715 thousand carrying value | USD 1,497,750 thousand expected against USD 1,497,731 thousand reported, a difference of USD 19 thousand from rounding of the two deduction amounts | 10-Q_2026-09-30_alks-20260930.htm.jsonl, pages 27 and 30 |
| C6 | Acquisition consideration | USD 2,064,310 thousand for shares plus USD 134,897 thousand for equity awards plus USD 107,713 thousand contingent value right | USD 2,306,920 thousand | 10-Q_2026-09-30_alks-20260930.htm.jsonl, page 16 |
| C7 | Adjusted EBITDA reconciliation, nine months 2026 and Q3 2026 | Nine months: EBITDA USD 81,798 thousand plus share-based compensation USD 112,624 thousand plus Avadel costs USD 118,140 thousand plus contingent consideration change USD 26,982 thousand. Q3: USD 62,960 thousand plus USD 26,747 thousand plus USD 29,790 thousand plus USD 568 thousand | Nine months USD 339,544 thousand; Q3 USD 120,065 thousand, both equal to the release | EX-99.1_2026-11-03_alks-ex99_1.htm.jsonl, page 6 |

## Gaps

| Gap ID | Type | Missing or conflicting item | Evidence demand affected | Severity | Remediation | Status |
|---|---|---|---|---|---|---|
| G1 | Source gap | Executed credit agreement of 2026-02-12 and Amendment No. 1 of 2026-08-12 are not supplied; the amendment is listed as an exhibit to the Q3 report | Covenant levels, guarantor list, security package, baskets, mandatory prepayment terms | MATERIAL for legal and covenant work; none for the requested modules | Supply the executed credit agreement and the amendment | Open |
| G2 | Source gap | Covenant levels and the issuer's reported Secured Net Leverage Ratio and Consolidated Interest Coverage Ratio are not printed | Covenant headroom | MATERIAL for covenant work; none for the requested modules | Supply the compliance certificate or the credit agreement | Open |
| G3 | Source gap | No issuer or facility rating, no price quote, no portfolio limit and no peer set in the run settings | Rating, market-implied, portfolio and peer work | MINOR for the requested modules | Supply the inputs if those analyses are wanted | Open |
| G4 | Conflict | Three debt amounts: principal USD 1,518.4 million at the amendment, principal USD 1,511.75 million at 2026-09-30, and carrying value USD 1,497.731 million after unamortised discount and financing costs | Debt used for leverage and net debt | MINOR | Use scheduled principal for claims and carrying value for the balance sheet, and label which is used; the difference between the first two is one scheduled instalment of USD 6.625 million | Resolved in calculations C4 and C5 |
| G5 | Conflict | Cash is shown as USD 1,319.5 million with restricted cash and as USD 588.36 million without it at 2025-12-31, and as USD 787.6 million at 2026-09-30 in both sources | Opening cash and net debt | MINOR | Name the definition each time; restricted cash of USD 731.2 million at 2025-12-31 was escrowed for the acquisition | Resolved in calculation C3 |
| G6 | Period gap | Q4 2025 is not reported on its own and the annual report has no Adjusted EBITDA; Adjusted EBITDA exists only for 2026 quarters and the 2025 comparatives in the releases | Four discrete quarters and trailing twelve-month earnings | MATERIAL for trailing earnings; MINOR otherwise | Derive Q4 2025 by subtracting nine months from the full year where needed, and label it derived | Open |
| G7 | Perimeter gap | The year-end 2025 statements exclude Avadel and the term loans; the pro forma figures in the Q3 report cover revenue and net income only, not EBITDA or debt service | Pro forma leverage and coverage | MATERIAL for pro forma work | Treat the latest balance sheet as the current perimeter and state that earlier periods are not comparable | Open |
| G8 | Source gap | Board, executive compensation and holder information is incorporated by reference to a proxy statement not supplied | Governance and ownership | MINOR | Supply the 2026 proxy statement if ownership detail is wanted | Open |
| G9 | Parse limitation | Tables are flattened to one value per line and some tables break across page chunks, so column headers sit on the previous page | Reading of multi-column tables | MINOR | Read each table with its neighbouring page and confirm totals by sum | Mitigated by recomputing totals |

## Next module

The orchestrator selects the next module.
