---
issuer_id: oln
module_id: CP-0
analysis_date: 2026-11-05
---

# CP-0 Source readiness: OLIN Corp (oln)

## Request

OLIN Corp (oln), as of 2026-11-05: source readiness for the credit snapshot pathway (credit_snapshot) over the seven supplied filings and earnings releases. The run asks for Financial foundation, Business & governance and Fundamental credit; this module maps content to them, records gaps and states no credit view.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, signed 20 February 2026 | 2026-02-20 | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | Audited FY2025 statements, debt note, pension, lease, litigation and environmental notes, business description, February 2026 amendment and ratings table; checked for covenant levels and executed-document exhibits |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026, signed 8 May 2026 | 2026-05-08 | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Q1 2026 statements and debt note; first appearance of the 2026 downgrades |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026, signed 31 July 2026 | 2026-07-31 | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Q2 2026 statements; first description of the Huntsman merger, expected closing and termination terms |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026, signed 30 October 2026 | 2026-10-30 | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Latest statements, debt note, liquidity, ratings, merger terms, October 2026 credit facility amendment and exhibit list |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings release for the first quarter of 2026 (Exhibit 99.1), dated 7 May 2026 | 2026-05-07 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Q1 2026 adjusted EBITDA reconciliation, net debt table and trailing leverage |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings release for the second quarter of 2026 (Exhibit 99.1), dated 30 July 2026 | 2026-07-30 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Q2 2026 adjusted EBITDA reconciliation, net debt table, merger announcement wording |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings release for the third quarter of 2026 (Exhibit 99.1), dated 29 October 2026 | 2026-10-29 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | Q3 2026 adjusted EBITDA reconciliation, net debt and trailing leverage table, fourth-quarter outlook, merger milestones |

No output from an earlier module was supplied to this module; it is the entry module of the run.

## Findings

### Bottom line

The seven supplied filings and releases support a snapshot of Olin's consolidated position to 30 September 2026, but not the covenant, financing-document or post-merger questions that decide creditor protection. The statements, the debt note, facility availability and the issuer-reported agency ratings are complete to that date, while covenant levels, the indentures and credit agreement, the merger agreement and Huntsman's own financials are absent.

Reported net debt of USD 2,798.3 million and net leverage of 5.2x trace to the filings and recompute exactly. Covenant headroom and the combined company's leverage cannot be established from these sources, so any later conclusion on them must be marked as a gap.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–15; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11; calculation cp0-2; calculation cp0-5

### Key findings

The sources cover the 2025 annual report, the three 2026 quarterly reports and the three matching earnings releases, dated from 20 February 2026 to 30 October 2026, so nothing in them postdates the 5 November 2026 as-of date. The fourth quarter of 2025 is not reported separately and has to be derived from the annual figures less the first nine months of 2025.
Basis: 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1

The reporting entity is Olin Corporation, a Virginia company that reports consolidated statements for itself and its subsidiaries, so those statements are the issuer's own figures for debt, earnings, leverage and coverage; the sources hold no separate statements for a borrowing or finance subsidiary. Certain domestic subsidiaries guarantee the senior secured credit facility, but the sources do not name them.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2, 13; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 149

The September 2026 debt note lists every instrument: three series of senior notes, the term loan, the revolver, the receivables financing and the recovery zone bonds, which total USD 3,013.1 million after deducting USD 17.6 million of deferred issuance costs. With cash of USD 214.8 million this gives net debt of USD 2,798.3 million. Undrawn revolver commitments are USD 1,029.6 million and receivables headroom is USD 34.0 million.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2, 12, 13, 15; calculation cp0-1; calculation cp0-2; calculation cp0-6

The ratings table in the annual report is dated 19 February 2026 and is superseded: at 30 September 2026 Fitch rates Olin BB+ on Rating Watch Positive, Moody's rates it Ba2 with a negative outlook and S&P rates it BB on Credit Watch Developing. These are Olin's own statements, and no agency report was supplied.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 68

The Huntsman merger is known only through Olin's own summaries. Closing is now expected in the first quarter of 2027, against the first half of 2027 in the July 2026 quarterly report; shareholders approved the transaction on 25 August 2026 and the Hart-Scott-Rodino waiting period has expired. Olin could owe a termination fee of USD 121 million, and the July report also mentioned expense reimbursement of up to USD 30 million that the October report does not repeat.
Basis: 10-Q_2026-06-30_oln-20260630.htm.jsonl, pages 8, 56; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8, 58; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1

The senior secured credit facility carries a maximum net leverage ratio and a minimum interest coverage ratio, relaxed by an amendment of 19 February 2026 for a relief period that ends on the earlier of 30 September 2027 or Olin's election. No source prints the covenant levels, step-downs or definitions, or the issuer's reported covenant ratio, so headroom is not established; Olin states that it was in compliance at 30 September 2026.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 141

### Contrary evidence and what would change the view

The strongest case against calling these sources sufficient is that two questions a creditor needs answered after the 2026 downgrades, how much covenant headroom remains and what the merged group's leverage will be, cannot be answered from them. The readiness view would change for Fundamental credit, and for Legal & covenants if it were requested, if the credit agreement's covenant levels, Huntsman's financial statements or the merger agreement's financing terms were supplied.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14, 60–61; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 141

### Limitations

Page references in this run follow the numbered text records of each supplied file, not the printed page numbers of the filings.

Agency ratings, merger terms and credit facility terms are Olin's own descriptions; the agency reports, the merger agreement and the credit agreement were not read.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8, 13, 52

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-20 | day | 2026-02-20 | Annual report on Form 10-K for FY2025 signed by the chief executive officer and the directors | Historical — Date: February 20, 2026 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150 | Latest audited statements and the FY2025 base for net debt and leverage; its ratings table of 19 February 2026 is superseded by the September 2026 table |
| 2026-05-07 | day | 2026-05-07 | Earnings release for Q1 2026 published | Historical — Clayton, MO, May 7, 2026 | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl, page 1 | Only source of the Q1 2026 adjusted EBITDA and net debt measures, which the quarterly report does not state |
| 2026-05-08 | day | 2026-05-08 | Quarterly report on Form 10-Q for Q1 2026 signed | Historical — Date: May 8, 2026 | 10-Q_2026-03-31_oln-20260331.htm.jsonl, page 49 | Q1 2026 statements and the debt note after the February 2026 covenant amendment |
| 2026-07-30 | day | 2026-07-30 | Earnings release for Q2 2026 published | Historical — Clayton, MO, July 30, 2026 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 1 | Only source of the Q2 2026 adjusted EBITDA and net debt measures; first release to carry the merger announcement |
| 2026-07-31 | day | 2026-07-31 | Quarterly report on Form 10-Q for Q2 2026 signed | Historical — Date: July 31, 2026 | 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 59 | Q2 2026 statements; first filing to give the expected merger closing and termination terms |
| 2026-10-29 | day | 2026-10-29 | Earnings release for Q3 2026 published | Historical — Clayton, MO, October 29, 2026 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1 | Only source of the latest net debt, trailing leverage and the fourth-quarter adjusted EBITDA outlook |
| 2026-10-30 | day | 2026-10-30 | Quarterly report on Form 10-Q for Q3 2026 signed | Historical — Date: October 30, 2026 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 | Latest supplied document, 6 days before the as-of date; sets the freshness of every figure in the run |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 10 |
| Calculated | 4 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 2 |
| Fields present | 10 |
| Fields total | 10 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 5 |

### T1 - Input gate

| Gate item | Finding | Source |
|---|---|---|
| Objective | None stated, so the objective is the credit snapshot pathway's use case: a credit snapshot of OLIN Corp as of 2026-11-05. This run asks for Financial foundation (CP-1), Business & governance (CP-1A) and Fundamental credit (CP-2). | Run settings |
| Issuer and reporting entity | Olin Corporation, Virginia, NYSE: OLN, Commission file number 1-1070; consolidated with its subsidiaries; no parent, sponsor or separate subsidiary statements in the sources | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 1–2 |
| As-of date and cutoff | As-of date and cutoff are both 2026-11-05; the latest supplied document is dated 2026-10-30, 6 days earlier; no source is dated after the cutoff | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 |
| Periods | Current period Q3 2026 (quarter and nine months ended 2026-09-30); prior period FY2025; comparatives Q3 2025, nine months 2025, Q1 2026 and Q2 2026 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2–5 |
| Currency and units | USD; statements in USD millions except per-share data | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 |
| Legal documents | The run settings declare none; the credit agreement, its amendments, the indentures, the receivables agreement and the merger agreement are named in exhibit lists only | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 145–149; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 60–61 |
| Market, ratings, deal, peer, portfolio and assumption inputs | All blank or none in the run settings; ratings are taken from the issuer's filing only | Run settings; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 52 |
| Source hierarchy applied | Filings (annual and quarterly reports) rank above issuer earnings releases; on every figure tied between the two (Q3 sales, cash, total debt) they agree | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2–3; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 7–8 |
| Source gate | pass: primary filings for the current and prior period are present; the covenant and merger-document gaps are logged under Gaps | See Gaps |

### T2 - Source register

| Source | Document family | Tier | Period covered | Entity | Authority and quality | Limitation |
|---|---|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report | 1 | FY2025 (year ended 2025-12-31) | Olin Corporation, consolidated | Audited; auditor's report dated 2026-02-20 | Governance items incorporated by reference to a proxy statement not supplied; ratings table dated 2026-02-19 is stale |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report | 1 | Q1 2026 | Olin Corporation, consolidated | Unaudited | Interim notes are condensed |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report | 1 | Q2 2026 and first half 2026 | Olin Corporation, consolidated | Unaudited | Interim notes are condensed |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report | 1 | Q3 2026 and nine months 2026 | Olin Corporation, consolidated | Unaudited; latest dated source | Covenant levels and executed documents not printed |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings release | 2 | Q1 2026 | Olin Corporation, consolidated | Unaudited; non-GAAP measures defined by the issuer | Adjusted EBITDA and net debt are issuer definitions |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings release | 2 | Q2 2026 | Olin Corporation, consolidated | Unaudited; non-GAAP measures defined by the issuer | Adjusted EBITDA and net debt are issuer definitions |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings release | 2 | Q3 2026 and nine months 2026 | Olin Corporation, consolidated | Unaudited; non-GAAP measures defined by the issuer | Liquidity headline of about USD 1.3 billion is not itemized; adjusted EBITDA and net debt are issuer definitions |

### T4 - Content-to-module map

| Capability | Module | Evidence the sources hold | Source | Disposition | Readiness | Limitation |
|---|---|---|---|---|---|---|
| Annual and interim statements | Financial foundation (CP-1) | Audited FY2025 statements; condensed Q1, Q2 and Q3 2026 statements with prior-year comparatives; nine-month cash flows | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 80–83; 10-Q_2026-03-31_oln-20260331.htm.jsonl, pages 2–4; 10-Q_2026-06-30_oln-20260630.htm.jsonl, pages 2–4; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2–5 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Q4 2025 is not stated separately and is derived as FY2025 less nine months 2025 from the Q3 2026 comparatives; interim statements are unaudited |
| Debt by instrument and net debt | Financial foundation (CP-1) | Instrument table at 30 Sep 2026, 31 Dec 2025 and 30 Sep 2025 (three senior note series, term loan, revolver, receivables financing, recovery zone bonds); issuer net debt table | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–15; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 104–108 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Carrying values are net of 17.6 of deferred issuance costs; guarantor names and note terms are absent |
| Adjusted EBITDA and trailing leverage | Financial foundation (CP-1) | Reconciliations of net income to adjusted EBITDA for Q1, Q2 and Q3 2026 and the prior-year quarters; trailing twelve-month figures at four balance-sheet dates | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl, pages 8–9; EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, pages 10–11; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 10–11 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Non-GAAP and issuer-defined; only the earnings releases state adjusted EBITDA and net debt, the quarterly and annual reports do not; the FY2025 reconciliation is not supplied, only the trailing figure of 651.8 at 31 December 2025 |
| Cash interest and taxes, capital spending, dividends | Financial foundation (CP-1) | Cash paid for interest 129.4 and income taxes 4.6 for nine months 2026; capital expenditures 106.6; dividends paid 68.3 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 4–5, 49; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 82–83 | Recommended: requested in this run | READY | None beyond the unaudited interim basis |
| Claims outside debt | Financial foundation (CP-1); Fundamental credit (CP-2) | Lease note, pension and retiree medical notes, purchase commitments, accrued pension liability, Shintech judgment and payments, environmental liabilities | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 109–117, 131–136; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2, 16–17, 24–25 | Recommended: requested in this run | READY_WITH_LIMITATIONS | The outcome of the appeal and the timing of any further Shintech payment are not established |
| Liquidity components | Financial foundation (CP-1); Fundamental credit (CP-2) | Cash 214.8, undrawn revolver 1,029.6, receivables headroom 34.0, letters of credit 168.2 in total | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2, 13–15, 50–52 | Recommended: requested in this run | READY_WITH_LIMITATIONS | The headline liquidity of about USD 1.3 billion is not itemized |
| Business model, segments, operations, competition | Business & governance (CP-1A) | Item 1 business description, segment note, segment commentary in the Q3 release | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 4–20, 129–131; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 22–23; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 2–3, 8 | Recommended: requested in this run | READY | None |
| Governance, board and management | Business & governance (CP-1A) | Signature page names the chief executive officer, chief financial officer, chairman and directors; board, officer and compensation items are incorporated from a proxy statement | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 142–143, 150 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Board, committee, compensation and ownership detail is absent (G-4) |
| Merger and capital allocation | Business & governance (CP-1A); Fundamental credit (CP-2) | Exchange ratio, ownership split, approvals, expected closing, termination fee, credit facility amendment effective at closing, acquisition costs | 10-Q_2026-06-30_oln-20260630.htm.jsonl, pages 7–8, 32, 56; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–9, 33–34, 58–59; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1, 3 | Recommended: requested in this run | READY_WITH_LIMITATIONS | The merger agreement and Huntsman's statements are absent (G-2) |
| Ratings and outlooks as disclosed | Fundamental credit (CP-2) | Rating table at 30 Sep 2026 and the June 2026 agency actions after the merger announcement; the February 2026 table is superseded | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53; 10-K_2025-12-31_oln-20251231.htm.jsonl, page 68 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Issuer's own statement; no agency publication (G-5) |
| Fundamental credit view | Fundamental credit (CP-2) | Combines the rows above with the leverage, liquidity, structure and ratings evidence | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14, 52–53; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 | Recommended: requested in this run | READY_WITH_LIMITATIONS | Covenant headroom is Not calculable and the combined company's leverage is not established (G-1, G-2) |
| Liquidity | Liquidity (CP-2D) | Components as in the liquidity row above | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–15, 50–52 | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Headline liquidity not itemized (G-6) |
| Rates, FX and hedging | Rates, FX & hedging (CP-2E) | Commodity hedge notional 248.5, 100 bp SOFR sensitivity of 12.5 of annual interest expense on variable-rate debt, currency derivative exposure | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 26–30, 53–54 | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Hedge documents absent |
| Refinancing and maturities | Refinancing & LME (CP-3C) | Facility and note maturities from the debt note and the contractual obligations table | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–15; 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 68–69 | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Indentures absent, so call, make-whole and change-of-control terms are not available (G-1) |
| Downside and forward model | Downside (CP-2A); Forward credit model (CP-2G) | Q4 2026 adjusted EBITDA outlook of 80 to 100; 2026 capital spending, depreciation and tax-rate outlook; quarterly history | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 45 | Not requested in this run; the sources would support them | READY_WITH_LIMITATIONS | No user assumptions in the run settings; no merger synergy or Huntsman inputs (G-2) |
| Legal and covenant terms | Legal & covenants (CP-4) | Qualitative covenant description only; executed governing documents absent | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14 | Not requested in this run | CONDITIONAL | Needs the executed credit agreement and indentures; covenant capacity is Not calculable without levels (G-1) |
| Security selection | Security selection (CP-3) | Note series described in the debt note; no quotes, prices or instrument ratings | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Not requested in this run | CONDITIONAL | Needs market quotes, which the run settings leave blank |
| Evidence validation | Evidence validation (CP-5) | Reads the other modules' outputs against the pinned sources | Not applicable | Not requested in this run | READY | None |
| Committee decision | Committee decision (CP-6) | No fund limits or portfolio data supplied | Not applicable | Not requested in this run | READY_WITH_LIMITATIONS | Fund limits are stated as not supplied (G-5) |
| Research questions | Research questions (CP-DR) | No research question in the run settings; G-1 and G-2 name what would need research | Not applicable | Not requested in this run | Inapplicable | None |
| Changes since the last run | Changes since the last run (CP-8) | First run of this pathway for the issuer | Not applicable | Inapplicable | Inapplicable | None |

### T6 - Evidence trace

| ID | Claim | Lineage class | Source | Locator opened and result |
|---|---|---|---|---|
| E-1 | Total debt at 30 Sep 2026 is 3,013.1: 669.3 + 515.3 + 600.0 + 528.1 + 170.0 + 465.0 + 83.0 less 17.6 of deferred issuance costs | Calculated | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Opened; the table's total of 3,013.1 equals the recomputed sum |
| E-2 | Net debt is 2,798.3: total debt 3,013.1 less cash 214.8 | Calculated | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 2 | Opened; matches the issuer's net debt of 2,798.3 and the balance sheet cash of 214.8 |
| E-3 | Trailing twelve-month adjusted EBITDA is 536.6: 468.9 for nine months 2026 plus 651.8 for FY2025 less 584.1 for nine months 2025 | Calculated | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 10–11 | Opened; matches the issuer's 536.6 and its footnote on the method |
| E-4 | Net debt to trailing adjusted EBITDA is 5.2x: 2,798.3 divided by 536.6 is 5.2149 | Calculated | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 | Opened; the issuer states 5.2x |
| E-5 | Undrawn revolver commitments are 1,029.6: 1,200.0 less 170.0 drawn less 0.4 of letters of credit | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Opened; the filing states 1,029.6 and the recomputation agrees |
| E-6 | The debt note lists three senior note series, a term loan, a revolver, receivables financing and recovery zone bonds | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Opened; the table lists those instruments and no other |
| E-7 | At 30 Sep 2026 Fitch is BB+ on Rating Watch Positive, Moody's is Ba2 with a negative outlook and S&P is BB on Credit Watch Developing | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 52 | Opened; table found as stated |
| E-8 | The annual report's ratings table is dated 2026-02-19 and shows Fitch BBB-, Moody's Ba1 and S&P BB; later downgrades and watch actions supersede it | Directly Sourced | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 68; 10-Q_2026-03-31_oln-20260331.htm.jsonl, page 43; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53 | Opened; table dates and the downgrade sentences found |
| E-9 | Each Huntsman share converts into 0.5476 Olin shares; Olin holders are to own about 54.5% and Huntsman holders 45.5% of the combined company | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 | Opened; wording and figures found |
| E-10 | Closing is expected in the first quarter of 2027 in the October 2026 report and in the first half of 2027 in the July 2026 report | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 8; 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 8 | Opened; both sentences found; the later filing controls |
| E-11 | Termination fee of 121: the July 2026 report adds expense reimbursement of up to 30, the October 2026 report states the fee only | Conflicting | 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 56; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 58 | Opened; difference confirmed; whether the reimbursement still applies is not established (G-7) |
| E-12 | The covenant relief period ends on the earlier of 2027-09-30 or Olin's election on five business days' notice | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Opened; wording found |
| E-13 | No supplied source prints the covenant levels, step-downs, definitions or the issuer's reported covenant ratio | Insufficient Information | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 141; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14 | Searched all seven sources for maximum, minimum, not exceed, coverage ratio of, net leverage ratio of and to 1.0; only qualitative wording found (G-1) |
| E-14 | The credit agreement, amendments, indentures, receivables agreement and merger agreement are named in exhibit lists but not supplied | Insufficient Information | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 145–149; 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 58; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 60–61 | Opened; exhibit lists found, documents absent (G-1, G-2) |
| E-15 | The seven documents are dated 2026-02-20, 2026-05-07, 2026-05-08, 2026-07-30, 2026-07-31, 2026-10-29 and 2026-10-30 | Directly Sourced | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150; 10-Q_2026-03-31_oln-20260331.htm.jsonl, page 49; 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 59; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 | Opened; signature dates and release datelines found |
| E-16 | Q3 2026 sales of 1,747.7, cash of 214.8 and total debt of 3,013.1 agree between the quarterly report and the release | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2–3; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 7–8 | Opened; the figures agree |
| E-17 | Financial foundation is READY_WITH_LIMITATIONS | Analyst Inference | See the Financial foundation rows of the content-to-module map | Follows from E-1 to E-6 and the Q4 2025 derivation need |
| E-18 | Business & governance is READY_WITH_LIMITATIONS | Analyst Inference | See the Business & governance rows of the content-to-module map | Follows from the proxy-statement and merger-agreement gaps |
| E-19 | Fundamental credit is READY_WITH_LIMITATIONS | Analyst Inference | See the Fundamental credit rows of the content-to-module map | Follows from E-7, E-12 and E-13 |
| E-20 | The merger agreement is dated 2026-06-15 and was announced on 2026-06-16, so the two dates describe different events | Directly Sourced | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7, 58; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 3 | Opened; no conflict |

### P3 - Input inventory

| Source | Role | Document family | Period or date stated | Entity | Records | Bytes | sha256 | Version relation |
|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Issuer evidence | Annual report | FY2025; signed 2026-02-20 | Olin Corporation | 150 | 412,406 | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | Base annual report; no amendment supplied |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Issuer evidence | Quarterly report | Q1 2026; signed 2026-05-08 | Olin Corporation | 49 | 126,059 | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Pairs with the Q1 2026 release |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Issuer evidence | Quarterly report | Q2 2026; signed 2026-07-31 | Olin Corporation | 59 | 154,025 | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Pairs with the Q2 2026 release |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Issuer evidence | Quarterly report | Q3 2026; signed 2026-10-30 | Olin Corporation | 61 | 163,596 | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Pairs with the Q3 2026 release; latest source |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Issuer evidence | Earnings release | Q1 2026; dated 2026-05-07 | Olin Corporation | 9 | 22,982 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Pairs with the Q1 2026 quarterly report |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Issuer evidence | Earnings release | Q2 2026; dated 2026-07-30 | Olin Corporation | 11 | 27,570 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Pairs with the Q2 2026 quarterly report |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Issuer evidence | Earnings release | Q3 2026; dated 2026-10-29 | Olin Corporation | 11 | 27,471 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | Pairs with the Q3 2026 quarterly report |
| context | Run settings, not issuer evidence | Run settings | as-of 2026-11-05 | OLIN Corp | Not applicable | 1,323 | 09d8a3ab70b39856c937eb920b788157e416ce636cea1515d7a99dd15e9d89b1 | Not applicable |

## Calculations

Each check below recomputes a figure the findings rely on from the printed inputs; amounts are USD millions unless stated.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| cp0-1 | Total debt at 30 September 2026 | 669.3 + 515.3 + 600.0 + 528.1 + 170.0 + 465.0 + 83.0 − 17.6 | 3,013.1 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 |
| cp0-2 | Net debt at 30 September 2026 | 3,013.1 − 214.8 | 2,798.3 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| cp0-3 | Trailing twelve-month adjusted EBITDA at 30 September 2026 | 468.9 + 651.8 − 584.1 | 536.6 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 10–11 |
| cp0-4 | Nine-month 2026 adjusted EBITDA from the three quarters | 86.2 + 191.3 + 191.4 | 468.9 | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl, page 1; EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 1; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1 |
| cp0-5 | Net debt to trailing adjusted EBITDA | 2,798.3 / 536.6 | 5.2149x, stated by the issuer as 5.2x | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |
| cp0-6 | Undrawn senior secured revolver commitments | 1,200.0 − 170.0 − 0.4 | 1,029.6 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| cp0-7 | Two builds of liquidity to compare with the issuer's headline of about USD 1.3 billion | Cash 214.8 + undrawn revolver 1,029.6 = 1,244.4; adding receivables headroom 34.0 = 1,278.4 | 1,244.4 and 1,278.4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 2, 13, 15 |
| cp0-8 | Days from the latest source to the as-of date | 2026-10-30 to 2026-11-05 | 6 days | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 |

## Gaps

Seven gaps are logged; two are material to a credit reading and five are minor.

| ID | Gap | Type and severity | Evidence searched | Affected capability | Remediation |
|---|---|---|---|---|---|
| G-1 | Covenant levels, step-downs, EBITDA and debt definitions and the issuer's reported covenant ratio are not printed, and the credit agreement, its amendments, the indentures and the receivables agreement are not supplied | Source gap, MATERIAL | All seven sources searched for numeric tests; only the qualitative description and the exhibit lists were found | Fundamental credit headroom, Legal & covenants, Covenant capacity, Refinancing & LME | Supply the executed credit agreement with the 19 February 2026 and 27 October 2026 amendments and the note indentures |
| G-2 | The merger agreement, the registration statement, the 8-K filings of 16 June, 18 August and 28 October 2026, and Huntsman's financial statements and debt are not supplied | Source gap, MATERIAL | The quarterly reports and releases describe the merger only in summary | Combined-company leverage, Forward credit model, Business & governance | Supply the merger agreement and Huntsman's latest annual and quarterly statements |
| G-3 | No Q4 2025 earnings release; the FY2025 adjusted EBITDA reconciliation is absent and only the trailing figure of 651.8 at 31 December 2025 appears | Source gap, MINOR | Searched all releases and the annual report for adjusted EBITDA | Financial foundation (Q4 2025 quarter) | Derive Q4 2025 from FY2025 less nine months 2025, or supply the February 2026 release |
| G-4 | The proxy statement (board, committees, executive officers, compensation, ownership) and the subsidiary list are not supplied | Source gap, MINOR | The annual report incorporates these items by reference | Business & governance; guarantor identity | Supply the 2026 proxy statement and the list of subsidiaries |
| G-5 | No agency publications, market quotes, peers, portfolio inputs or investor presentation and call slides; the run settings leave these blank | Source gap, MINOR | Run settings and the Q3 release, which refers to slides on the issuer's website | Ratings & triggers, Security selection, Committee decision | Supply them if those modules are requested |
| G-6 | The headline liquidity of about USD 1.3 billion is not itemized; the two builds from printed components give 1,244.4 and 1,278.4 | Definition gap, MINOR | Searched all releases and the Q3 report for how liquidity is built | Liquidity | State the build in the Liquidity analysis and label it as a calculation |
| G-7 | The July 2026 quarterly report mentions expense reimbursement of up to USD 30 million besides the termination fee, and the October 2026 report does not | Conflict between periods, MINOR | Compared the two risk-factor passages | Business & governance; Fundamental credit | Treat the termination fee of USD 121 million as the stated figure and flag the reimbursement as not established |

## Next module

The orchestrator selects the next module.
