---
module_id: CP-0
issuer_id: wfrd
analysis_date: 2026-11-05
module_status: Complete with limitations
---

## Request

Weatherford International plc (issuer id wfrd), as of 2026-11-05, credit snapshot pathway. Scope: decide whether the seven supplied issuer documents can support the requested analysis (Financial foundation, Business & governance, Fundamental credit) and record what is missing.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, with audited consolidated statements (KPMG LLP, unqualified opinion) | 2026-02-04 (signature and audit report date) | dac00725a2c3d644200d2314099fff47d7f3eb762778ea3920935ae50ab28ce2 | Year-end balance sheet, FY2025 and FY2024 statements, debt and credit agreement notes, business description, risk factors |
| 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-22 (signature date) | 9947bc5d7e7ed46ec27eb5be20182fefc783d1bcf9e98ead61e47e75e87e1802 | Q1 2026 statements and notes, redomestication costs, quarter-end debt and liquidity |
| 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-22 (signature date) | 0659d6081747e0dbacebc77689bd519f07b2164e0adebad5354150ed075c3f19 | H1 2026 and Q2 2026 statements and notes, June 2026 balance sheet |
| 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-21 (signature date) | 678145577a1f518a8936739eae48408772c69c0e9c66ea7073ec677a8f4ec5f5 | Latest balance sheet, nine-month statements, debt, covenants, letters of credit, subsequent events, NCS acquisition, redomestication |
| EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-21 | 16b049423c2a0b3987004d0686dae44f41d8fe13554c66ab3742b5ef18204c19 | Q1 2026 adjusted EBITDA, adjusted free cash flow, net debt and net leverage reconciliations |
| EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-21 | c318686e28c9fd3731b6593cf62a7f0973fd91c30668b11db34c9715af2ad0be | Q2 2026 adjusted EBITDA, adjusted free cash flow, net debt and net leverage reconciliations |
| EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-20 | f95c1562ed4f41199ffe8f8d250788ec78ae6a54ea4c8df350ecd996b8e7fb5e | Q3 2026 adjusted EBITDA, trailing-twelve-month EBITDA, net debt, net leverage, 2030 notes redemption notice, ratings actions |

## Findings

### Bottom line

The supplied filings support a credit snapshot of Weatherford through September 30, 2026; creditors can rely on filed figures for debt, liquidity and covenant levels, but not for legal ranking, covenant compliance or market pricing.

The set is one audited annual report, three quarterly reports and three earnings releases, all issued by the company, which is the strongest evidence tier available for this question. No executed credit agreement, indenture, rating agency report, market quote, peer data or portfolio file was supplied, so those questions stay open and are listed under the gaps.
Basis: 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| Not supplied: this module records source readiness only and states no dated credit events | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: dated debt, acquisition and redomestication events are recorded by the modules that own them | Not supplied: no event is stated | Not supplied: no event is stated | Not supplied: no event is stated |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 16 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 11 |
| Fields total | 12 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 6 |

### T1 - Input gate

| Gate item | Result | Evidence | Limitation |
|---|---|---|---|
| Objective | Credit snapshot of Weatherford International plc: leverage, liquidity, capital structure, earnings and business profile to the latest quarter | Requested modules Financial foundation, Business & governance and Fundamental credit; no separate objective was stated, so the pathway's use case applies | The pathway stops at Fundamental credit; legal, covenant-capacity, recovery and market-implied work is not requested |
| Reporting entity | Weatherford International plc (Irish public limited company, ticker WFRD) and consolidated subsidiaries; one consolidated perimeter in every source | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 | Notes are issued by Weatherford International Ltd (Bermuda) with Weatherford US Holding, LLC and, from 2026-09-25 for the 2033 notes, Weatherford International Holding LLC as co-issuers; no separate issuer-level statements exist |
| As-of and cutoff | As-of 2026-11-05; latest source dated 2026-10-21 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 39 | No source is dated after the cutoff; events through 2026-10-21 can be used as facts |
| Current and prior periods | Current Q3 2026 (balance sheet 2026-09-30); prior FY2025 (balance sheet 2025-12-31) | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | Q4 2025 earnings release not supplied; FY2025 and FY2024 come from the audited annual report |
| Currency and units | USD, millions | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | Share counts and per-share figures are not in millions of dollars |
| Legal documents | None supplied | No credit agreement, indenture or supplemental indenture text in the set | Covenant levels, guarantor lists and ranking rest on the notes' summaries only |
| Portfolio and prior run | No portfolio workbook; first run of this pathway | Run settings | Portfolio fit and change-since-last-run work cannot be done |
| Source authority | Tier 1 for the annual and quarterly reports; tier 2 for the earnings releases | T2 below | Non-GAAP figures (adjusted EBITDA, adjusted free cash flow, net leverage) are issuer definitions and are labelled as such |
| Gate result | READY_WITH_LIMITATIONS for the requested modules | T2, T4 and the gap table | Limitations are listed under the gaps |

### T2 - Source register

| Source ID | File | Document family | Authority tier | Period covered | Quality and fidelity | Active representation | Readiness input | Limitation | Source |
|---|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report | 1 | FY2025 with FY2024 and FY2023 comparatives | Audited by KPMG LLP, unqualified opinion on statements and internal control; text extract of 106 pages | Parsed text extract | PARSED | Page numbers are extract chunks, not printed pages; tables flattened to text lines | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 66 |
| S2 | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | Quarterly report | 1 | Q1 2026 (three months to 2026-03-31) | Unaudited interim statements; text extract of 31 pages | Parsed text extract | PARSED | Unaudited; superseded for the balance sheet by later quarters | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl, page 1 |
| S3 | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | Quarterly report | 1 | Q2 2026 and six months to 2026-06-30 | Unaudited interim statements; text extract of 36 pages | Parsed text extract | PARSED | Unaudited | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 1 |
| S4 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report | 1 | Q3 2026 and nine months to 2026-09-30 | Unaudited interim statements; text extract of 39 pages; management evaluated disclosure controls as effective | Parsed text extract | PARSED | Unaudited; legal contingencies note gives no amounts | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 12; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 37 |
| S5 | EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl | Earnings release | 2 | Q1 2026 | Issuer release with GAAP to non-GAAP reconciliations; text extract of 15 pages | Parsed text extract | PARSED | Non-GAAP measures on issuer definitions | EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl, page 1 |
| S6 | EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl | Earnings release | 2 | Q2 2026 | Issuer release with reconciliations; text extract of 15 pages | Parsed text extract | PARSED | Non-GAAP measures on issuer definitions | EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl, page 1 |
| S7 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings release | 2 | Q3 2026 and trailing twelve months to 2026-09-30 | Issuer release with reconciliations; text extract of 16 pages | Parsed text extract | PARSED | Non-GAAP measures on issuer definitions; states the redemption notice was issued but says the release itself is not the notice | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 |

### T4 - Content-to-module map

| Content area | What the sources hold | Module that uses it | Disposition | Reason | Source |
|---|---|---|---|---|---|
| Income statement, cash flow and balance sheet by period | FY2025, FY2024 and FY2023 annual; Q1, Q2 and Q3 2026 and nine months 2026 interim; June 2026 and December 2025 comparatives | Financial foundation (CP-1) | Recommended | Statements, segment tables and non-GAAP reconciliations are all in the set | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68 |
| Debt instruments, credit agreement, letters of credit | 2030 and 2033 senior notes with co-issuers, finance leases, a revolving credit agreement with covenant levels, letters of credit and surety bonds | Financial foundation (CP-1) and Fundamental credit (CP-2) | Recommended | Note 7 and the liquidity section state instruments, amounts and covenants | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 9-11 |
| Business, segments, ownership, acquisition and redomestication | Three reportable segments, geography, NCS Multistage acquisition, Irish to Delaware redomestication, share repurchase programme | Business & governance (CP-1A) | Recommended | Business description in the annual report and recent developments in the latest quarterly report | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 15-17; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 38 |
| Credit synthesis | Leverage, liquidity, earnings trend, customer concentration, geopolitical exposure, ratings | Fundamental credit (CP-2) | Recommended | Requires the Financial foundation and Business & governance outputs plus the filings | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 18-34 |
| Near-term liquidity detail | Cash, restricted cash, undrawn commitments, letters of credit, trapped cash, factoring | Liquidity (CP-2D) | Not selected in this run; sources sufficient | Pathway stops at Fundamental credit; the same facts are used inside Financial foundation | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 31-34 |
| Refinancing | 2030 notes redemption notice, 2033 notes, credit agreement springing maturity | Refinancing & LME (CP-3C) | Not selected in this run; sources sufficient | Pathway stops at Fundamental credit | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 10-16 |
| Executed legal terms | Summaries of the credit agreement and indentures only | Legal & covenants (CP-4), Covenant capacity (CP-4A), Structural priority (CP-4B), Intercreditor control (CP-4D), Recovery & fulcrum (CP-4C) | Blocked if requested | No executed credit agreement or indenture was supplied | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 |
| Ratings | Moody's, S&P and Fitch ratings and outlooks as stated by the issuer | Ratings & triggers (CP-2H) | Limited if requested | Issuer statement only; no agency report or trigger schedule | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 |
| Rates, FX and hedging | Foreign currency forwards and a credit default swap described in the annual report | Rates, FX & hedging (CP-2E) | Not selected in this run; partly sourced | Derivative notes exist but the pathway does not request them | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 54 |
| Peers, market pricing and security selection | None | Peer benchmark (CP-1C), Market-implied risk (CP-3D), Security selection (CP-3) | Blocked if requested | No peer, quote or valuation data in the set | Run settings |
| Portfolio, earnings changes and downside | No portfolio file; earnings trend sits in the releases | Committee decision (CP-6), Earnings changes (CP-1B), Downside (CP-2A) | Not selected in this run | Outside the credit snapshot pathway; first run so no prior comparison | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20 |

### T6 - Evidence trace

| Claim | Statement | Period | Source |
|---|---|---|---|
| E1 | Cash and cash equivalents USD 1,161 million; restricted cash USD 37 million | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| E2 | Current portion of long-term debt USD 264 million and long-term debt USD 1,216 million; total debt USD 1,480 million | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 |
| E3 | Net debt USD 282 million; trailing twelve months adjusted EBITDA USD 1,001 million; net leverage 0.28x (issuer definitions) | 2026-09-30 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 |
| E4 | 8.625% senior notes due 2030: principal USD 236 million, carrying value USD 234 million, reclassified to current | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 9-10 |
| E5 | Notice issued 2026-10-20 to redeem all 2030 notes on 2026-10-30 at par from cash on hand | Subsequent event | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 |
| E6 | 6.75% senior notes due 2033: principal USD 1.2 billion, carrying value USD 1,183 million | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 9-10 |
| E7 | Credit agreement commitment USD 1 billion, zero borrowings, USD 1 million financial and USD 233 million performance letters of credit | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 |
| E8 | Covenants: minimum liquidity USD 250 million, minimum interest coverage 2.50x, maximum total net leverage 3.50x, maximum secured net leverage 1.50x | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 |
| E9 | Revenue USD 1,143 million and operating income USD 153 million in Q3 2026; adjusted EBITDA USD 254 million | Q3 2026 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, pages 12 and 15 |
| E10 | Cash from operations USD 503 million and capital expenditure USD 141 million | Nine months 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3-4 |
| E11 | NCS Multistage acquisition completed 2026-09-01, total consideration USD 128 million | Q3 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| E12 | Redomestication to Delaware approved by shareholders 2026-09-03, expected in Q4 2026, subject to Irish High Court sanction | Q3 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16 |
| E13 | Ratings: Moody's Ba2 positive, S&P BB positive, Fitch BB positive | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 |
| E14 | Audited FY2025 revenue USD 4,918 million; auditor KPMG LLP issued an unqualified opinion dated 2026-02-04 | FY2025 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 66 and 68 |
| E15 | Surety bonds outstanding USD 534 million; uncommitted bilateral letters of credit USD 297 million | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 11 and 34 |
| E16 | Largest Mexican customer 14% of net receivables; Mexico 19% of net receivables | 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32 |

### P3 - Input inventory

| Source ID | File | Bytes of extract | Pages in extract | sha256 of extract | sha256 of original document as stated in the extract | Document family | Accessible | Duplicate or version link |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl | 294561 | 106 | dac00725a2c3d644200d2314099fff47d7f3eb762778ea3920935ae50ab28ce2 | 12362f79e220f01f37fa2888885fc0e54168ec936dc4788dbc9afc84eeea9ddf | Annual report | Yes | None; base annual document |
| S2 | 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | 86869 | 31 | 9947bc5d7e7ed46ec27eb5be20182fefc783d1bcf9e98ead61e47e75e87e1802 | 4a9b2ca4a2d1822e72ba7b8ea6942d2aa8fc1fec1cdc3469c2b6a818c58ff0ba | Quarterly report | Yes | None; distinct period |
| S3 | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | 101952 | 36 | 0659d6081747e0dbacebc77689bd519f07b2164e0adebad5354150ed075c3f19 | e1a5b7387a2e72f03b402773def222e2a2a9b65137463c1e17132e5a9c316654 | Quarterly report | Yes | None; distinct period |
| S4 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | 111662 | 39 | 678145577a1f518a8936739eae48408772c69c0e9c66ea7073ec677a8f4ec5f5 | 34b02c07814f37ad164c3cc8c7f3d04757f035960efe604fb4c4fcfdc3e98e22 | Quarterly report | Yes | None; distinct period |
| S5 | EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl | 38328 | 15 | 16b049423c2a0b3987004d0686dae44f41d8fe13554c66ab3742b5ef18204c19 | 75710bd6ffa142c4630df466082bd839bba3c43f9b8b358a62a13a0388445253 | Earnings release | Yes | Overlaps S2 in period; kept, because it holds non-GAAP reconciliations the 10-Q does not |
| S6 | EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl | 40302 | 15 | c318686e28c9fd3731b6593cf62a7f0973fd91c30668b11db34c9715af2ad0be | 538a2b73b89a90229793d6890186a128ac7aa17eaf9dc6d2447cedbfd00857e9 | Earnings release | Yes | Overlaps S3 in period; kept for the same reason |
| S7 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | 41924 | 16 | f95c1562ed4f41199ffe8f8d250788ec78ae6a54ea4c8df350ecd996b8e7fb5e | 7c09c3083cfe77c8a9adc825f1d61383b9cc6648771794281498f6d524a55b4d | Earnings release | Yes | Overlaps S4 in period; kept for the same reason |

## Calculations

No new calculation was made in this module; every figure in the tables above is quoted from a source as printed.

## Gaps

The gaps below name the evidence each would have supplied and the work it limits.

| Gap | Type | Severity | Evidence demand | Effect on readiness | Remediation | Status |
|---|---|---|---|---|---|---|
| G1 | Missing document | MINOR | Executed credit agreement, 2030 and 2033 note indentures and the supplemental indenture of 2026-09-25 | Covenant definitions, guarantor lists, ranking and baskets cannot be checked beyond the filings' summaries; legal and covenant-capacity work is blocked | Supply the documents if those modules are later requested | Open |
| G2 | Missing document | MINOR | Rating agency reports and any trigger schedule | Ratings rest on the issuer's own statement of agency actions | Supply agency publications if ratings work is requested | Open |
| G3 | Missing data | MINOR | Market quotes, peer data and valuation inputs; the only market-based figure in the set is the fair value of the senior notes in the quarterly debt note | Market-implied risk, peer benchmark and security selection cannot be done | Supply dated market data if requested | Open |
| G4 | Missing document | MINOR | Fourth-quarter 2025 earnings release | FY2025 non-GAAP reconciliation comes from the annual report and later releases only; fourth-quarter 2025 stand-alone figures must be derived | Supply the release or accept derivation | Open |
| G5 | Definition difference | MINOR | Context settings give Bermuda as the issuer's country; the quarterly report gives Ireland as the parent's state of incorporation, with the notes issued by a Bermuda subsidiary and a move to Delaware expected in Q4 2026 | Perimeter wording must follow the filings, not the settings | Treat the filings as controlling | Open |
| G6 | Subsequent event | MINOR | Confirmation that the 2030 notes were redeemed on 2026-10-30 as the notice states | The latest sources are dated 2026-10-21, before the planned redemption date, so completion is a stated plan and not a confirmed fact; net debt after the redemption must be labelled pro forma | Supply a later filing or release if confirmation is needed | Open |

## Next module

The orchestrator selects the next module.
