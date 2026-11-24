---
issuer_id: cco-holdings-llc
module_id: CP-0
analysis_date: 2026-11-05
run_id: cco-holdings-llc-2026-11-05-credit_snapshot-host
---

# Source readiness for CCO HOLDINGS LLC

## Request

CCO HOLDINGS LLC (issuer id cco-holdings-llc), as of 2026-11-05, credit snapshot pathway. This assessment tests whether the seven supplied filings and releases can support the financial foundation, business and governance and fundamental credit work, and records what is missing.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_ccoh-20251231.htm.jsonl | Annual report on Form 10-K of CCO Holdings, LLC and CCO Holdings Capital Corp. for the year ended December 31, 2025 | 2026-01-30 | 98fc08971e7b602f253b4465dc2493c7d1fd2140d7f51b96e967ed5fb3218118 | Audited issuer statements for FY2025, instrument-level debt table, facility terms, covenant levels and parent-only statements at 2025-12-31, business, ownership and transaction description |
| 10-Q_2025-09-30_ccoh-20250930.htm.jsonl | Quarterly report on Form 10-Q of CCO Holdings, LLC and CCO Holdings Capital Corp. for the quarter ended September 30, 2025 | 2025-10-31 | bf1745dd3dbecf91195f9fef9fea0cafc9d8a639b8157c8bb3d02dd7240529a1 | Third-quarter 2025 and nine-month 2025 statements; earlier statement of the Cox Transactions terms |
| 10-Q_2026-03-31_ccoh-20260331.htm.jsonl | Quarterly report on Form 10-Q of CCO Holdings, LLC and CCO Holdings Capital Corp. for the quarter ended March 31, 2026 | 2026-04-24 | 213317fa77d5c45445d49d044bc961ab9dfa41083289474b65a9c5985c9bbe1b | First-quarter 2026 statements; facility availability at 2026-03-31; Cox Transactions terms as restated |
| 10-Q_2026-06-30_ccoh-20260630.htm.jsonl | Quarterly report on Form 10-Q of CCO Holdings, LLC and CCO Holdings Capital Corp. for the quarter ended June 30, 2026 | 2026-07-24 | 9af8d8232114d58e6ac96035eb67adc4aa9622876079128a14eacfcc389f347e | Latest period: balances at 2026-06-30, quarter and six-month results, debt by class, facility availability, Cox Transactions and Liberty Broadband status at filing |
| EX-99.1_2026-01-30_chtrex991earningsrelease12.htm.jsonl | Earnings release (Exhibit 99.1) of Charter Communications, Inc. for the fourth quarter and full year 2025 | 2026-01-30 | cb5b5ac26ab78f0a85b295e8b2969a94081a4aecc513efb234aeefb51019e762 | Parent-level context; the only stated fourth-quarter 2025 figures in the set, at the Charter perimeter |
| EX-99.1_2026-04-24_chtrex991earningsrelease33.htm.jsonl | Earnings release (Exhibit 99.1) of Charter Communications, Inc. for the first quarter 2026 | 2026-04-24 | 483c56fedf60126a16d804e1d36760024be2164b76b1c1509864a6a063bd22be | Parent-level context for the first quarter of 2026 |
| EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl | Earnings release (Exhibit 99.1) of Charter Communications, Inc. for the second quarter 2026 | 2026-07-24 | 07d1723b22b814c108cba78554e38a4e4a76d8f38c9cdfecbd3804011635822c | Parent-level context for the second quarter of 2026; perimeter comparison with the issuer |

No earlier module output was supplied; this is the entry module.

## Findings

### Bottom line

The seven supplied documents support a credit snapshot of CCO HOLDINGS LLC as of June 30, 2026 but not as of November 5, 2026, because nothing dated after July 24, 2026 is supplied and facility terms are dated December 31, 2025.
Basis: 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 40; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 157

Balances, earnings and liquidity at June 30, 2026 can be read from the issuer's own statements. The status of the Cox Transactions and of the Liberty Broadband Combination, and any financing after July 2026, is not established; the latest document is 104 days older than the as-of date. Charter-level earnings releases cover a wider perimeter, and their second-quarter Adjusted EBITDA is USD 21 million above the issuer's own figure, so they are context only. Executed debt documents, market prices and a portfolio are not supplied, which blocks Legal & covenants, Security selection and Committee decision.
Basis: 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 19, 40; EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 4; calculation C1; calculation C3

### T1 - Input gate

| Gate item | Result | Source |
|---|---|---|
| Issuer and reporting entity | CCO Holdings, LLC is the issuer and CCO Holdings Capital Corp. the co-registrant; the statements are consolidated for CCO Holdings, LLC and its subsidiaries | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 1; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 7 |
| Position in group | Direct subsidiary of CCH I Holdings, LLC and indirect subsidiary of Charter Communications, Inc.; Charter entities provide financing, cash management and treasury services on a centralized basis | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 7 |
| Objective | No objective is stated in the run settings, so the selected pathway's use case applies: a credit snapshot of the issuer for a reader who has not read the filings | Run settings (not a source document) |
| Run anchor | As-of and cutoff 2026-11-05; current period second quarter 2026; prior period fiscal year 2025; reporting currency USD | Run settings (not a source document) |
| Reporting basis | US GAAP, dollars in millions; reduced disclosure format; interim statements unaudited | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 8 |
| Latest period in the set | Quarter and six months ended 2026-06-30, filed 2026-07-24 | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 40 |
| Distance from the as-of date | 104 days from the filing date and 128 days from the balance-sheet date; no third-quarter 2026 document is in the set | calculation C1; calculation C2 |
| Perimeter of the earnings releases | Charter Communications, Inc. consolidated, not the issuer: second-quarter 2026 cash is USD 509 million against USD 285 million for the issuer | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 12; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5 |
| Inputs not supplied | Executed legal documents, agency rating levels, market quotes, peers and a portfolio: neither the set nor the run settings carry them | Run settings (not a source document) |
| Source gate | partial: three material limitations (age of the set, Cox terms differ between filings, facility terms only at year-end); the issuer statements for FY2025 and to 2026-06-30 are otherwise complete | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 154; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 10 |

### T2 - Source register

| Source | Document | Reporting entity and perimeter | Period covered | Document date | Tier | Authority and limitation |
|---|---|---|---|---|---|---|
| 10-K_2025-12-31_ccoh-20251231.htm.jsonl | Annual report on Form 10-K | CCO Holdings, LLC and subsidiaries, consolidated; parent-only condensed statements in Note 20 | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | 2026-01-30 | 1 | Controlling primary filing with audited statements; the only source of the instrument table, facility terms, covenant levels, commitments and parent-only statements |
| 10-Q_2025-09-30_ccoh-20250930.htm.jsonl | Quarterly report on Form 10-Q | CCO Holdings, LLC and subsidiaries, consolidated | Three and nine months ended 2025-09-30 with 2024 comparatives | 2025-10-31 | 1 | Primary filing, unaudited; supplies the third-quarter 2025 quarter on its own; states the Cox cash consideration as USD 500 million |
| 10-Q_2026-03-31_ccoh-20260331.htm.jsonl | Quarterly report on Form 10-Q | CCO Holdings, LLC and subsidiaries, consolidated | Three months ended 2026-03-31 with 2025 comparatives | 2026-04-24 | 1 | Primary filing, unaudited; availability USD 4.6 billion at 2026-03-31; states the Cox cash consideration as USD 650 million |
| 10-Q_2026-06-30_ccoh-20260630.htm.jsonl | Quarterly report on Form 10-Q | CCO Holdings, LLC and subsidiaries, consolidated | Three and six months ended 2026-06-30 with 2025 comparatives; balance sheet at 2026-06-30 against 2025-12-31 | 2026-07-24 | 1 | Latest primary filing, unaudited; debt by class only, no instrument table; the leverage test is stated as met without a figure |
| EX-99.1_2026-01-30_chtrex991earningsrelease12.htm.jsonl | Earnings release, Exhibit 99.1 | Charter Communications, Inc. and subsidiaries, consolidated | Fourth quarter and full year 2025 | 2026-01-30 | 2 | Issuer-prepared release for the parent; a wider perimeter than the issuer; context only for issuer figures |
| EX-99.1_2026-04-24_chtrex991earningsrelease33.htm.jsonl | Earnings release, Exhibit 99.1 | Charter Communications, Inc. and subsidiaries, consolidated | First quarter 2026 | 2026-04-24 | 2 | Issuer-prepared release for the parent; a wider perimeter than the issuer; context only for issuer figures |
| EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl | Earnings release, Exhibit 99.1 | Charter Communications, Inc. and subsidiaries, consolidated | Second quarter and six months 2026 | 2026-07-24 | 2 | Issuer-prepared release for the parent; a wider perimeter than the issuer; context only for issuer figures |

### T4 - Content-to-module map

| Capability | Module | Source content | Source | Disposition | Reason and limitation |
|---|---|---|---|---|---|
| Issuer statements, debt and EBITDA reconciliation | Financial foundation (CP-1) | Consolidated statements for FY2025, FY2024 and FY2023 and for six months to 2026-06-30; debt note; Adjusted EBITDA and free cash flow reconciliations | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 140–142; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 91; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 5–7; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26 | Recommended | Issuer perimeter, unaudited interim statements; fourth quarter 2025 is not stated for the issuer alone (Charter-level only in the January 2026 release) |
| Business, ownership, transactions and governance | Business & governance (CP-1A) | Business description; ownership chain; Cox Transactions; Liberty Broadband Combination; share repurchase arrangements with Liberty Broadband and Advance/Newhouse Partnership | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 6–28; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 173–181; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 8–9; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 28–32 | Recommended with limitations | Cox terms differ between the annual report and the 2026 quarterly reports; closing status after 2026-07-24 is not supplied |
| Fundamental credit synthesis | Fundamental credit (CP-2) | Draws on the financial foundation and business modules; no separate source need | Financial foundation (CP-1); Business & governance (CP-1A) | Recommended with limitations | Inherits the limits of both modules; parent-only statements exist only for 2025-12-31 (annual report) |
| Research on missing public documents | Research questions (CP-DR) | Named needs: the third-quarter 2026 filing and release, and the Cox and Liberty Broadband closing status after 2026-07-24 | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 27 | Recommended with limitations | Concrete question exists but this run has no web access, so the question is recorded for a later run |
| Downside analysis | Downside (CP-2A) | Statement-based drivers: revenue by product, Adjusted EBITDA, capital expenditure, free cash flow | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 19–23; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 37 | Recommended with limitations | Run settings carry no downside assumptions; the only forward statement is full-year 2026 capital expenditure of about USD 11.4 billion, excluding the Cox Transactions |
| Near-term liquidity | Liquidity (CP-2D) | Cash, restricted cash, facility availability, revolving commitments, letters of credit, equipment installment plan facility, supplier finance and deferred payment programs | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 10–12; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 27; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 157; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 182 | Recommended with limitations | Commitments and letters of credit by facility are year-end only; the 2026-06-30 report gives aggregate availability of about USD 3.7 billion; the Revolving Loan B of about USD 960 million matures 2027-08-31, within twelve months of the as-of date |
| Rates, FX and hedging | Rates, FX & hedging (CP-2E) | Fixed and variable rate debt, weighted average rates, sterling notes and cross-currency derivatives | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 105; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 13; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 38 | Recommended with limitations | Rate mix and the interest-rate table are at 2025-12-31; the 2026-06-30 report states no material change in interest rate risk |
| Forward credit model | Forward credit model (CP-2G) | Historical statements and the capital expenditure statement above | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 37 | Recommended with limitations | Needs the downside analysis first; run settings carry no forecast assumptions and no management bridge |
| Legal and covenant terms | Legal & covenants (CP-4) | Covenant tests are summarised in the debt note; the exhibit index lists indentures and credit agreements incorporated by reference | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 156; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 158; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 110–138 | Blocked | No executed governing document is supplied and the run settings declare none; a filing's summary of the agreements is not one |
| Refinancing and liability management | Refinancing & LME (CP-3C) | Principal maturities by year; January 2026 notes issued; February 2026 notes redeemed; second-quarter 2026 open-market repurchases; Cox funding need | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 160; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 104; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 11; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 27 | Recommended with limitations | The maturity table is at 2025-12-31 and the 2026-06-30 report gives debt by class only, so the wall by year needs a labelled roll-forward |
| Security selection | Security selection (CP-3) | Fair value of debt by class at 2026-06-30 only | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 10 | Blocked | No market quotes or instrument prices are supplied and the run settings carry none; fair values by class are not instrument prices |
| Evidence validation | Evidence validation (CP-5) | Applies to the handoffs of the selected modules once produced | Not supplied: no source need of its own | Recommended with limitations | Inherits the limits of the modules it validates; outside the modules selected for this run |
| Committee decision | Committee decision (CP-6) | Fund limits and holdings | Not supplied: no portfolio document in the set | Blocked | No portfolio is supplied, so the fund's limits are not established |
| Forward model source route | CP-MODEL | Statements, reconciliations and debt detail named above | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 5–7; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 102–103 | Inapplicable | Not selected in this run; source sufficiency for a later model route is not evaluated here |
| Earnings changes, earnings quality, peer benchmark, ratings, market-implied risk, recovery and short snapshot | CP-1B; CP-1D; CP-1C; CP-2H; CP-3D; CP-4C; CP-L10 | Not part of the credit snapshot pathway | Not supplied: no need in this pathway | Inapplicable | Outside the pathway's modules; the inputs these would need (peers, ratings, quotes, executed security documents) are also not supplied |
| Changes since the last run | Changes since the last run (CP-8) | A comparison with an earlier run of the same issuer and pathway | Not supplied: no earlier run | Inapplicable | This is the first run of this pathway for this issuer |

### T6 - Evidence trace

| Trace ID | Claim | Value as stated | Lineage | Source |
|---|---|---|---|---|
| EV-01 | Issuer and ownership chain | CCO Holdings, LLC is held by CCH I Holdings, LLC, an indirect subsidiary of Charter Communications, Inc.; CCO Holdings Capital Corp. is wholly owned by CCO Holdings, LLC | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 1; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 7 |
| EV-02 | Reporting format and audit status | Reduced disclosure format; the interim statements are unaudited | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 8 |
| EV-03 | Cash at the latest balance-sheet date | Cash and cash equivalents USD 285 million at 2026-06-30 | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5 |
| EV-04 | Debt at the latest balance-sheet date | Principal USD 93,845 million and carrying value USD 93,959 million at 2026-06-30; senior unsecured notes principal USD 26,734 million | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 10 |
| EV-05 | Availability under the credit facilities | About USD 3.7 billion at 2026-06-30; about USD 4.6 billion at 2026-03-31; about USD 4.4 billion at 2025-12-31 | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 11; 10-Q_2026-03-31_ccoh-20260331.htm.jsonl, page 11; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 104 |
| EV-06 | Second-quarter 2026 Adjusted EBITDA of the issuer | USD 5,428 million | Directly Sourced | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 19; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26 |
| EV-07 | Second-quarter 2026 Adjusted EBITDA of Charter Communications, Inc. | USD 5,449 million | Directly Sourced | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 4 |
| EV-08 | Perimeter difference between the two Adjusted EBITDA figures | USD 21 million | Calculated | calculation C3 |
| EV-09 | Instrument-level debt detail exists at year-end only | Senior unsecured notes USD 27,250 million principal and total debt USD 94,617 million at 2025-12-31 | Directly Sourced | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 102–103; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 154 |
| EV-10 | Facility terms and letters of credit at year-end | Revolving Loan B up to about USD 960 million due 2027-08-31; Revolving Loan C up to USD 5.5 billion due 2030-03-15 with USD 2.1 billion outstanding; letters of credit USD 364 million, USD 26 million of them issued under the credit facility | Directly Sourced | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 157; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 182 |
| EV-11 | Covenant levels | Indenture maximum total leverage ratio 6.0 to 1.0 against 4.0 at 2025-12-31; Charter Operating ceilings 5.0 to 1.0 and 4.0 to 1.0 against 2.8 and 2.8; the 2026-06-30 level is not stated, only that the issuer's test was met | Directly Sourced | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 156; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 158; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 36 |
| EV-12 | Cox cash consideration under the Contribution | USD 500 million in the annual report and the third-quarter 2025 report; USD 650 million in the first-quarter and second-quarter 2026 reports | Conflicting | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 28; 10-Q_2025-09-30_ccoh-20250930.htm.jsonl, page 9; 10-Q_2026-03-31_ccoh-20260331.htm.jsonl, page 9; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 9 |
| EV-13 | Cox and Liberty Broadband closing status after 2026-07-24 | Not supplied: no document after 2026-07-24 | Insufficient Information | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, pages 27–28 |
| EV-14 | Executed debt documents | Not supplied: the exhibit index lists indentures and credit agreements incorporated by reference, none is in the set | Insufficient Information | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 110–138 |
| EV-15 | Agency rating levels, market quotes and portfolio | Not supplied: no rating level, quote or holding is in the set or the run settings; the filings say only that the company has a split credit rating, with the secured notes investment grade and the unsecured notes high-yield | Insufficient Information | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26; Run settings (not a source document) |
| EV-16 | Age of the latest document | 104 days after filing and 128 days after the balance-sheet date | Calculated | calculation C1; calculation C2 |

### P3 - Input inventory

| Key | Source | Original document | Document family | Pages | Bytes | sha256 | Role |
|---|---|---|---|---|---|---|---|
| 10-K FY2025 | 10-K_2025-12-31_ccoh-20251231.htm.jsonl | 10-K_2025-12-31_ccoh-20251231.htm | Annual report | 189 | 493465 | 98fc08971e7b602f253b4465dc2493c7d1fd2140d7f51b96e967ed5fb3218118 | Active content |
| 10-Q Q3 2025 | 10-Q_2025-09-30_ccoh-20250930.htm.jsonl | 10-Q_2025-09-30_ccoh-20250930.htm | Quarterly report | 53 | 132911 | bf1745dd3dbecf91195f9fef9fea0cafc9d8a639b8157c8bb3d02dd7240529a1 | Active content |
| 10-Q Q1 2026 | 10-Q_2026-03-31_ccoh-20260331.htm.jsonl | 10-Q_2026-03-31_ccoh-20260331.htm | Quarterly report | 36 | 97364 | 213317fa77d5c45445d49d044bc961ab9dfa41083289474b65a9c5985c9bbe1b | Active content |
| 10-Q Q2 2026 | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl | 10-Q_2026-06-30_ccoh-20260630.htm | Quarterly report | 40 | 104600 | 9af8d8232114d58e6ac96035eb67adc4aa9622876079128a14eacfcc389f347e | Active content |
| Release Q4 2025 | EX-99.1_2026-01-30_chtrex991earningsrelease12.htm.jsonl | EX-99.1_2026-01-30_chtrex991earningsrelease12.htm | Earnings release | 18 | 48648 | cb5b5ac26ab78f0a85b295e8b2969a94081a4aecc513efb234aeefb51019e762 | Active content |
| Release Q1 2026 | EX-99.1_2026-04-24_chtrex991earningsrelease33.htm.jsonl | EX-99.1_2026-04-24_chtrex991earningsrelease33.htm | Earnings release | 17 | 45323 | 483c56fedf60126a16d804e1d36760024be2164b76b1c1509864a6a063bd22be | Active content |
| Release Q2 2026 | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm | Earnings release | 17 | 47475 | 07d1723b22b814c108cba78554e38a4e4a76d8f38c9cdfecbd3804011635822c | Active content |

A page here is the source chunk numbered in the supplied text, not a printed page. The supplied text of each filing is a text-only rendering of the original document.

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-10-31 | day | 2025-10-31 | Quarterly report for the quarter ended September 30, 2025 filed | Historical — filed with the Securities and Exchange Commission on October 31, 2025 | 10-Q_2025-09-30_ccoh-20250930.htm.jsonl, page 53 | Earliest document in the set; third-quarter 2025 and nine-month statements and the earlier statement of the Cox Transactions terms |
| 2026-01-30 | day | 2026-01-30 | Annual report for the year ended December 31, 2025 filed | Historical — filed with the Securities and Exchange Commission on January 30, 2026 | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 138 | Latest audited statements; instrument-level debt, facility and covenant detail at December 31, 2025 |
| 2026-01-30 | day | 2026-01-30 | Charter Communications, Inc. fourth quarter and full year 2025 results released | Historical — dated January 30, 2026 in the release | EX-99.1_2026-01-30_chtrex991earningsrelease12.htm.jsonl, page 1 | Parent-level context; the only stated fourth-quarter 2025 figures in the set, at the Charter perimeter |
| 2026-04-24 | day | 2026-04-24 | Quarterly report for the quarter ended March 31, 2026 filed | Historical — filed with the Securities and Exchange Commission on April 24, 2026 | 10-Q_2026-03-31_ccoh-20260331.htm.jsonl, page 36 | First interim statements after the annual report; first statement of the Cox cash consideration as USD 650 million |
| 2026-04-24 | day | 2026-04-24 | Charter Communications, Inc. first quarter 2026 results released | Historical — dated April 24, 2026 in the release | EX-99.1_2026-04-24_chtrex991earningsrelease33.htm.jsonl, page 1 | Parent-level context for the first quarter of 2026 |
| 2026-07-24 | day | 2026-07-24 | Quarterly report for the quarter ended June 30, 2026 filed | Historical — filed with the Securities and Exchange Commission on July 24, 2026 | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 40 | Latest issuer filing in the set; nothing later is supplied, so later financing and closing events are not covered |
| 2026-07-24 | day | 2026-07-24 | Charter Communications, Inc. second quarter 2026 results released | Historical — dated July 24, 2026 in the release | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 1 | Latest document of any kind in the set; parent-level context for the second quarter |
| 2026-06-30 | day | 2026-07-24 | Latest balance-sheet date covered by the set | Historical — period end of the second-quarter 2026 report | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5 | Every balance and leverage input in this run is at this date; later events are not covered |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 10 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 5 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Days from the latest supplied document to the as-of date | Filing date 2026-07-24; as-of date 2026-11-05 | 104 days | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 40 |
| C2 | Days from the latest balance-sheet date to the as-of date | Balance-sheet date 2026-06-30; as-of date 2026-11-05 | 128 days | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5 |
| C3 | Second-quarter 2026 Adjusted EBITDA, Charter Communications, Inc. less the issuer | USD 5,449 million less USD 5,428 million | USD 21 million | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 4; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 19 |
| C4 | Cash and cash equivalents at 2026-06-30, Charter Communications, Inc. less the issuer | USD 509 million less USD 285 million | USD 224 million | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 12; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5 |
| C5 | Cash paid to Cox Enterprises under the Contribution, 2026 reports less the annual report | USD 650 million less USD 500 million | USD 150 million | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 9; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 28 |
| C6 | Cash needed at the Cox closing under each reading: equity sale cash plus Contribution cash | USD 3,500 million plus USD 500 million; USD 3,500 million plus USD 650 million | USD 4,000 million; USD 4,150 million | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 28; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 64; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 9; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 27 |
| C7 | Evidence trace claims by lineage | EV-01 to EV-16: ten Directly Sourced, two Calculated, one Conflicting, three Insufficient Information | 16 claims | T6 |

## Gaps

| Gap | Type | Severity | Affected work | What is missing and why it matters | Remediation | Source |
|---|---|---|---|---|---|---|
| No document after July 24, 2026 | Stale evidence | MATERIAL | All selected work | The third-quarter 2026 quarterly report and release are not supplied although the as-of date is November 5, 2026; leverage, liquidity, financing and the Cox closing status can be stated only as of June 30, 2026, 104 days before the as-of date (calculation C1) | Supply the third-quarter 2026 filing and release, or label every figure as of June 30, 2026 | 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 40 |
| Cox Transactions terms differ between filings and closing status is unknown | Conflict | MATERIAL | Business & governance; Fundamental credit; Refinancing & LME | Cash paid to Cox Enterprises under the Contribution is USD 500 million in the annual report and the third-quarter 2025 report and USD 650 million in the 2026 quarterly reports (difference USD 150 million, calculation C5); cash needed at closing is USD 4.0 billion in the annual report and about USD 4.2 billion in the second-quarter 2026 report (calculation C6); assumed net debt and finance leases are USD 12.6 billion in the annual report and USD 12.4 billion in the three quarterly reports. No supplied text explains the change and none says whether the closing has occurred | Supply the transaction agreement amendment (the agreement is listed in the exhibit index as incorporated by reference) or a later filing; until then show both readings and use the latest filing's terms | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 28; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 64; 10-Q_2025-09-30_ccoh-20250930.htm.jsonl, page 9; 10-Q_2026-03-31_ccoh-20260331.htm.jsonl, page 9; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 9; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 27 |
| Facility-level terms and letters of credit only at year-end | Stale evidence | MATERIAL | Liquidity; Fundamental credit | Commitments, maturities and letters of credit by facility are stated only at December 31, 2025 (revolving commitments of about USD 960 million maturing August 31, 2027 and USD 5.5 billion maturing March 15, 2030; letters of credit USD 364 million); the June 30, 2026 report gives only aggregate availability of about USD 3.7 billion, down from about USD 4.6 billion at March 31, 2026, so liquidity by facility net of letters of credit cannot be recomputed for June 30, 2026 | Supply the third-quarter 2026 filing, a compliance certificate or the credit agreement; otherwise roll forward from year-end and label the result | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 157; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 182; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 11 |
| Debt detail by instrument is year-end only | Coverage | MINOR | Financial foundation; Refinancing & LME | The June 30, 2026 report gives debt in three classes only. The year-end instrument and maturity tables predate the January 2026 issuance of USD 1.75 billion and USD 1.25 billion of notes, the February 2026 redemption of USD 750 million and USD 2.25 billion of notes and USD 1.2 billion of open-market repurchases in the second quarter of 2026, whose series are not named; the maturity wall by year needs a labelled roll-forward | Supply an instrument table at June 30, 2026; otherwise label the roll-forward as analyst-derived | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 102–103; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 104; 10-K_2025-12-31_ccoh-20251231.htm.jsonl, page 160; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 11 |
| Earnings releases cover a wider perimeter than the issuer | Conflict | MINOR | Earnings changes; Financial foundation | The releases report Charter Communications, Inc.; for the second quarter of 2026 Adjusted EBITDA is USD 5,449 million against USD 5,428 million for the issuer (USD 21 million, calculation C3) and cash is USD 509 million against USD 285 million (USD 224 million, calculation C4). The issuer's own statements govern and the releases are context only | None needed: resolved by the source hierarchy; keep both figures labelled by perimeter | EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 4; EX-99.1_2026-07-24_chtrex991earningsrelease63.htm.jsonl, page 12; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 5; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 19 |
| Fourth quarter of 2025 is not stated for the issuer alone | Coverage | MINOR | Financial foundation; Earnings changes | The annual report gives the full year only and the January 2026 release states the fourth quarter at the Charter perimeter; an issuer-level fourth quarter needs the nine-month statements subtracted from the full year and must be labelled as derived | Derive and label, or supply issuer-level quarterly data | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 140–142; 10-Q_2025-09-30_ccoh-20250930.htm.jsonl, pages 5–7; EX-99.1_2026-01-30_chtrex991earningsrelease12.htm.jsonl, page 1 |
| Parent-only statements exist for year-end only | Coverage | MINOR | Fundamental credit | Condensed statements of CCO Holdings, LLC alone appear only for December 31, 2025; no interim parent-only statements are supplied, so the issuer's own cash and debt service at June 30, 2026 cannot be separated from its subsidiaries | Supply interim parent-only data or state the limit in the analysis | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 188–189 |
| Executed debt documents, market quotes and portfolio are not supplied | Missing input | MINOR | Legal & covenants; Security selection; Committee decision | No indenture, credit agreement, quote or fund holding is in the set, and the run settings carry none; covenant levels can be quoted only as the filings summarise them. Agency rating levels are also absent: the filings describe the secured notes as investment grade and the unsecured notes as high-yield without naming an agency rating | Supply the executed documents, quotes and portfolio if these modules are wanted | 10-K_2025-12-31_ccoh-20251231.htm.jsonl, pages 110–138; 10-Q_2026-06-30_ccoh-20260630.htm.jsonl, page 26 |

## Next module

The orchestrator selects the next module.
