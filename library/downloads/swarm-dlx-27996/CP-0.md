---
issuer_id: dlx-27996
module_id: CP-0
analysis_date: 2026-11-18
run_id: dlx-27996-2026-11-18-credit_snapshot-host
module_status: Complete
---

# Deluxe Corp: source readiness as of 2026-11-18

## Request

Issuer: Deluxe Corp (Deluxe Corporation, NYSE: DLX), issuer id dlx-27996. As of 2026-11-18, pathway credit_snapshot, requested modules CP-0, CP-1, CP-1A and CP-2, this module assesses whether the nine supplied issuer documents can support credit work on the quarter ended 2026-09-30 against FY2025. No objective was stated, so the objective is the pathway use case, and the run settings are not issuer evidence.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024, amounts in thousands | 2025-02-21 | 67b837bad3689eb57ce7992f50b42dfca6328fb57096d791edfb119f64350c9b | Prior-year history and the December 2024 refinancing terms; checked for units and superseded terms |
| 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, audited | 2026-02-13 | ef88882c6698cca61424cd4266ad2d1415faefa761efc11835cff37bacdc604f | Year-end FY2025 position, business description, debt, leases, commitments and the list of executed financing documents |
| 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | c6188e96c3e25ebda32357958a20d50628042058c0369e7bab137dca4608900b | Q1 2026 balances and the facility terms before the July 2026 amendment |
| 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-06 | 6a449761454530caf50ba1d8051436ea4a62cc2fe61b463317de655ff7e9cacd | Q2 2026 balances and the subsequent-event disclosure of the Celero closing |
| 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-05 | 1a71979ca733787a8d7d440764f230a4c6087a6a46bd4d2a31266efdae557532 | Current-period statements, debt note, covenant terms, liquidity and the Celero acquisition |
| EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-06 | 3217064ddd0f8be66f70bf58b3cfa43fb7f3bab05ab19f8cba13be318ddb127f | Q1 2026 management measures and the 2026 outlook given then |
| EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-05 | a7e482691fc66cd72f252a397273479f8d1cf0baae2887ed394bca26096905f8 | Q2 2026 management measures and the outlook updated for Celero |
| EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the closing of the Celero Commerce acquisition | 2026-07-31 | 96c47ce241c8b97cc47962d6a8e9dc36a99d834425d3b9e5d0db820b9c76c8e7 | Closing date, expected cost synergies and the planned investor day |
| EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-04 | e21b511b9fd3407ed636f1231d5c628d21b48ef3b99e88c5de6567c6c15ea9e2 | Q3 2026 management measures, reconciliations and the updated 2026 outlook |

The document date is the date the document states: the signature date for the annual and quarterly reports (their filing dates are not stated) and the release date for the three releases. No upstream handoff was supplied to this module, so none is listed.

## Findings

### Bottom line

The nine supplied filings and releases support a filed-basis credit assessment of Deluxe at 30 September 2026, but not covenant headroom, lien detail or market-implied views, because the financing agreements, ratings and prices are missing.

Debt of USD 2,025.5 million principal is printed by instrument and reconciles to the maturity table, and liquidity of USD 264.7 million follows from the printed cash and revolver availability. Celero was consolidated for only two months of the quarter against its full acquisition debt, and no pro forma earnings figure is supplied, so any trailing leverage built from these filings mixes periods.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19; 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 21; calculation C-1; calculation C-4; calculation C-11

### Key findings

- The documents cover every period the requested work needs: the audited year to 31 December 2025, three quarterly reports to 30 September 2026 and four releases, with the latest report signed on 5 November 2026 and nothing later before the 18 November 2026 cutoff.
  Basis: 10-K_2025-12-31_dlx.htm.jsonl, page 66; 10-Q_2026-09-30_dlx.htm.jsonl, page 52; calculation C-13
- Debt and liquidity are printed at instrument and facility level and cross-check to the printed totals, so the debt stack, the maturity wall and facility availability can be taken from the filings without reconstruction. The largest maturity year is 2029 at USD 985.0 million, when both note issues fall due.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19; 10-Q_2026-09-30_dlx.htm.jsonl, page 21; calculation C-4; calculation C-5
- The covenant package is printed as tests and levels only. The issuer states compliance but prints no covenant ratio, and the earnings measure the tests use is defined in a credit agreement that is not in the set, so headroom cannot be established.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 20; calculation C-12
- The Celero acquisition closed on 31 July 2026, so the quarter holds two months of its earnings against the whole of its financing. The price appears as three figures that differ by definition and reconcile to each other.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 4; 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13; calculation C-9; calculation C-11
- The amended credit agreement replaces the covenant terms printed in the FY2025 annual report, so the latest quarterly report governs current terms and the earlier terms are kept as history only.
  Basis: 10-K_2025-12-31_dlx.htm.jsonl, page 107; 10-Q_2026-09-30_dlx.htm.jsonl, page 20

### Contrary evidence and what would change the view

The strongest case against a limited verdict is that the largest gap sits in public documents: the financing agreements are exhibits to the issuer filings, and the latest quarterly report names the one that governs. Adding the amended credit agreement and the two indentures would lift the legal and covenant capabilities from conditional to ready, and a pro forma earnings statement for Celero, if the issuer files one, would remove the trailing-period mismatch. The verdict would worsen only if a supplied document contradicted a printed total, and none did in the cross-checks.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 51; 10-K_2025-12-31_dlx.htm.jsonl, pages 119, 121–122; calculation C-4; calculation C-5

### Limitations

- No document after 5 November 2026 is supplied, so events between that date and the cutoff are not covered.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, page 52
- The earnings releases and the outlook are management statements and are not audited, and their comparable adjusted measures exclude a business exit that the quarterly reports do not adjust for.
  Basis: EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 8; 10-Q_2026-09-30_dlx.htm.jsonl, page 39
- The FY2024 annual report states amounts in thousands while later reports state millions, so figures taken from it need a unit conversion and keep their own quantity family.
  Basis: 10-K_2024-12-31_dlx.htm.jsonl, page 74

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Issuer and reporting entity | Deluxe Corporation (registrant; Minnesota; NYSE: DLX; commission file number 1-7945); consolidated group including Deluxe Receivables LLC, a wholly owned subsidiary consolidated as a secured financing; Celero consolidated from 2026-07-31; listed registrant with no parent or combined filing described | 10-Q_2026-09-30_dlx.htm.jsonl, pages 1, 12, 21–22 |
| Run | dlx-27996-2026-11-18-credit_snapshot-host; pathway credit_snapshot; case kind public; requested modules CP-0, CP-1, CP-1A, CP-2 | Run settings, not issuer evidence |
| Objective | None stated; the objective is the pathway use case: a credit assessment of Deluxe on the latest reported quarter, compared with the prior fiscal year | Run settings, not issuer evidence |
| As-of date and cutoff | 2026-11-18 and 2026-11-18 | Run settings, not issuer evidence |
| Current and prior period | Q3 2026 (quarter ended 2026-09-30) and FY2025 (year ended 2025-12-31) | Run settings, not issuer evidence |
| Currency and unit | USD; millions in the FY2025 annual report and all 2026 documents; thousands in the FY2024 annual report | 10-Q_2026-09-30_dlx.htm.jsonl, page 2; 10-K_2024-12-31_dlx.htm.jsonl, page 74 |
| Inputs the run settings leave empty | Deal terms, quotes, ratings, valuation inputs, peers, assumptions, portfolio, prior case, management bridge and legal documents are not supplied; a blank is not read as zero | Run settings, not issuer evidence |
| Source preparation | Listing, hashing and pinning of the nine documents were completed before this module ran; no parse, package or hash result is recorded here | Run settings, not issuer evidence |
| Latest dated source | 2026-11-05 (quarterly report signature date); no issuer document dated 2026-11-06 to 2026-11-18 | 10-Q_2026-09-30_dlx.htm.jsonl, page 52 |
| Gate verdict for the requested modules | READY_WITH_LIMITATIONS: statements, debt note, liquidity and acquisition disclosures are present for the current and prior period; executed financing agreements, ratings, market data and Celero full-period earnings are not supplied | See P3, T2, T4, T6 and Gaps |

### T2 - Source register

| Source ID | Source | Document and perimeter | Period covered | Document date | Hierarchy tier | Authority and quality | Active representation | Usability for the run | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S01 | 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K; Deluxe Corporation consolidated | FY2024, with FY2023 and FY2022 comparatives; thousands | 2025-02-21 | 1 primary filing | Audited; auditor report dated 2025-02-21 | Supplied page text, 131 page records | READY_WITH_LIMITATIONS: history only | Units are thousands; FY2024 figures are restated in millions in the FY2025 report; December 2024 facility terms are superseded by the July 2026 amendment |
| S02 | 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K; Deluxe Corporation consolidated | FY2025, with FY2024 and FY2023 comparatives; millions | 2026-02-13 | 1 primary filing | Audited; auditor report dated 2026-02-13 | Supplied page text, 123 page records | READY | Part III items come from a proxy statement not supplied; referenced financing exhibits not supplied; covenant terms superseded in July 2026 |
| S03 | 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q; consolidated | Quarter ended 2026-03-31, with 2025 comparatives | 2026-05-07 | 1 primary filing | Unaudited | Supplied page text, 39 page records | READY_WITH_LIMITATIONS: intermediate period | Facility terms are those before the July 2026 amendment |
| S04 | 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q; consolidated | Quarter and six months ended 2026-06-30, with 2025 comparatives | 2026-08-06 | 1 primary filing | Unaudited | Supplied page text, 48 page records | READY_WITH_LIMITATIONS: intermediate period | Balance sheet excludes Celero; closing on 2026-07-31 is a subsequent event; allocation and pro forma figures not disclosed |
| S05 | 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q; consolidated | Quarter and nine months ended 2026-09-30, with 2025 comparatives and the 2025-12-31 balance sheet | 2026-11-05 | 1 primary filing | Unaudited; controls the current period | Supplied page text, 52 page records | READY | Celero is consolidated from 2026-07-31 and its allocation is preliminary; the 2025-12-31 balance sheet is presented differently from S02 |
| S06 | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1; Deluxe consolidated | Quarter ended 2026-03-31 | 2026-05-06 | 2 issuer release | Unaudited; management non-GAAP measures | Supplied page text, 9 page records | READY_WITH_LIMITATIONS: context | File label carries the period date, not the release date; outlook superseded by S07 and S09 |
| S07 | EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1; Deluxe consolidated | Quarter ended 2026-06-30 | 2026-08-05 | 2 issuer release | Unaudited; management non-GAAP measures | Supplied page text, 9 page records | READY_WITH_LIMITATIONS: context | File label carries the period date, not the release date; outlook superseded by S09 |
| S08 | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Press release, Exhibit 99.1; Celero Commerce acquisition closing | Event of 2026-07-31 | 2026-07-31 | 2 issuer release | Management announcement; no financial statements | Supplied page text, 4 page records | READY_WITH_LIMITATIONS: event evidence | File label 2026-06-30 is the period label; the release is dated 2026-07-31; forward-looking statements |
| S09 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1; Deluxe consolidated | Quarter and nine months ended 2026-09-30 | 2026-11-04 | 2 issuer release | Unaudited; management non-GAAP measures with GAAP reconciliations | Supplied page text, 9 page records | READY | Comparable adjusted measures exclude a business exit; outlook is management guidance |

### P3 - Input inventory

| Source ID | Source | Document family | Bytes | Page records | Page numbers present | sha256 |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 359097 | 131 | 1 to 131, none missing, none empty | 67b837bad3689eb57ce7992f50b42dfca6328fb57096d791edfb119f64350c9b |
| S02 | 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 346334 | 123 | 1 to 123, none missing, none empty | ef88882c6698cca61424cd4266ad2d1415faefa761efc11835cff37bacdc604f |
| S03 | 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 111236 | 39 | 1 to 39, none missing, none empty | c6188e96c3e25ebda32357958a20d50628042058c0369e7bab137dca4608900b |
| S04 | 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 134964 | 48 | 1 to 48, none missing, none empty | 6a449761454530caf50ba1d8051436ea4a62cc2fe61b463317de655ff7e9cacd |
| S05 | 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 148974 | 52 | 1 to 52, none missing, none empty | 1a71979ca733787a8d7d440764f230a4c6087a6a46bd4d2a31266efdae557532 |
| S06 | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 23360 | 9 | 1 to 9, none missing, none empty | 3217064ddd0f8be66f70bf58b3cfa43fb7f3bab05ab19f8cba13be318ddb127f |
| S07 | EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 24162 | 9 | 1 to 9, none missing, none empty | a7e482691fc66cd72f252a397273479f8d1cf0baae2887ed394bca26096905f8 |
| S08 | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the closing of the Celero Commerce acquisition | 7768 | 4 | 1 to 4, none missing, none empty | 96c47ce241c8b97cc47962d6a8e9dc36a99d834425d3b9e5d0db820b9c76c8e7 |
| S09 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 24017 | 9 | 1 to 9, none missing, none empty | e21b511b9fd3407ed636f1231d5c628d21b48ef3b99e88c5de6567c6c15ea9e2 |

### T4 - Content-to-module map

| Capability | Disposition | Evidence demand | Active representation | Source | Readiness | Limitation or reason |
| --- | --- | --- | --- | --- | --- | --- |
| Financial foundation (CP-1) | Recommended: requested in this run | Statements, debt by instrument, net debt, adjusted EBITDA and cash flow for FY2025, nine months 2026 and Q3 2026 | S05, S02, S09 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2–5, 18–19, 21–22, 38–39; 10-K_2025-12-31_dlx.htm.jsonl, pages 51, 66–67, 106; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 4–9 | READY_WITH_LIMITATIONS | Celero is in results for two months only and no pro forma earnings are printed; FY2024 report is in thousands; the 2025-12-31 balance sheet is presented differently in the 2026 reports |
| Business & governance (CP-1A) | Recommended: requested in this run | Business and segments, executive officers, ownership and governance, the Celero transaction | S02, S05, S08 | 10-K_2025-12-31_dlx.htm.jsonl, pages 3, 18, 117–118; 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13, 24–27, 29; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | READY_WITH_LIMITATIONS | Board, committees and ownership are incorporated from a proxy statement that is not supplied; the subsidiaries exhibit text is not in the set |
| Fundamental credit (CP-2) | Recommended: requested in this run | Combines the two analyses above with outlook, liquidity and capital resources | S05, S09, S02 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 32–33, 44–47; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1–2; 10-K_2025-12-31_dlx.htm.jsonl, pages 55–58 | READY_WITH_LIMITATIONS | No ratings, market prices or peer data; outlook is management guidance; covenant headroom is not calculable |
| Earnings changes (CP-1B) | Not requested in this run; evidence present | Quarter and nine-month results against the prior year, with business-exit effects | S05, S09, S06, S07 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 3, 33–43; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 6–8; EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 1; EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl, page 1 | READY | Comparable adjusted measures are management definitions that exclude the business exit |
| Earnings quality (CP-1D) | Not requested in this run; evidence present | Add-backs, adjusted EBITDA reconciliations and one-off items | S05, S09, S02 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 26, 39–40; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 6–8; 10-K_2025-12-31_dlx.htm.jsonl, page 51 | READY_WITH_LIMITATIONS | Add-back definitions are issuer-set; acquisition costs and integration expense affect Q3 2026 |
| Peer benchmark (CP-1C) | Blocked: evidence not carried | Peer statements and multiples | None | Not supplied: no peer document is in the source set and the run settings list no peers | CONDITIONAL | Peer source not carried |
| Downside (CP-2A) | Not requested in this run; assumptions absent | Downside assumptions or issuer sensitivities | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 36, 44 | READY_WITH_LIMITATIONS | Run settings carry no downside assumptions; the filings print only an interest-rate sensitivity |
| Liquidity (CP-2D) | Not requested in this run; evidence present | Unrestricted cash, facility availability, letters of credit, restricted cash and near-term maturities | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 10, 18–19, 21–22, 32, 44–46 | READY | No facility matures within twelve months of 2026-09-30: the revolver runs to 2031-07-31 and the securitization to 2028-12; term loan installments of 15.0 fall in the remainder of 2026 and 60.0 in 2027 |
| Rates, FX & hedging (CP-2E) | Not requested in this run; evidence present | Fixed and floating mix, swaps, sensitivity and foreign exchange | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 14, 36, 46–47, 49–50 | READY | Foreign exchange exposure is described as minimal and not hedged |
| Forward credit model (CP-2G) | Not requested in this run; evidence limited | Management projections, guidance and synergy targets | S09, S08 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | READY_WITH_LIMITATIONS | Annual guidance only; no multi-year projections, lender presentation or synergy phasing |
| Ratings & triggers (CP-2H) | Blocked: evidence not carried | Agency ratings and rating-linked terms | None | Not supplied: all nine documents were searched for rating agencies, credit ratings and downgrade; none appears | CONDITIONAL | Pricing margin varies with the consolidated leverage ratio but the pricing grid is not supplied |
| Security selection (CP-3) | Blocked: evidence not carried | Executed documents, instrument terms and prices | None | Not supplied: no executed documents or price quotes; the run settings list none | CONDITIONAL | Note terms are known only from filing summaries |
| Refinancing & LME (CP-3C) | Not requested in this run; evidence present with limits | Maturity wall, call and redemption terms, amend-and-extend history | S05, S02 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19, 21; 10-K_2025-12-31_dlx.htm.jsonl, pages 106, 119 | READY_WITH_LIMITATIONS | Call schedules, indenture covenants and the amended credit agreement are not supplied; the springing 2029-02-01 maturity is printed |
| Market-implied risk (CP-3D) | Blocked: evidence not carried | Bond prices, spreads and equity price | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, page 49 | CONDITIONAL | The filing prints fair values of the notes (472.9 and 458.7) without prices or yields; no equity price after 2025-06-30 is supplied |
| Legal & covenants (CP-4) | Blocked: evidence not carried | Executed credit agreement, indentures, definitions and baskets | S05, S02 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20, 51; 10-K_2025-12-31_dlx.htm.jsonl, pages 119, 121–122 | CONDITIONAL | The filings summarise the terms and name the executed documents, which are not supplied; a summary is not the executed document |
| Recovery & fulcrum (CP-4C) | Blocked: evidence not carried | Security packages, guarantor list and valuation inputs | S05 | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 | CONDITIONAL | Collateral is described only as substantially all assets of the company and its subsidiary guarantors; guarantors are not named |
| Evidence validation (CP-5) | Inapplicable to this module | Validates analyst outputs, which do not exist at the readiness gate | None | Not supplied: no source demand of its own | Not applicable | Runs after the analysts |
| Committee decision (CP-6) | Blocked: evidence not carried | Fund portfolio, sizing limits and instrument views | None | Not supplied: the run settings state no portfolio | CONDITIONAL | Fund limits are stated as not supplied |
| Changes since the last run (CP-8) | Inapplicable | An earlier run of the same pathway for this issuer | None | Not supplied: no earlier run of this pathway is listed for this issuer | Not applicable | First run of this pathway |
| Short credit snapshot (CP-L10) | Not requested in this run | Same documents as the requested modules | S05, S09 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2–3, 18; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1–2 | Follows the requested modules | Not part of this run |
| Research questions (CP-DR) | Not recommended | A concrete public-research question | None | Not supplied: the missing financing agreements are public exhibits named in the filings, so they are remediated by supplying them as sources | Not applicable | See gap G1 |

### T6 - Evidence trace

| Evidence ID | Evidence item | Source | Period | Value as printed | Note |
| --- | --- | --- | --- | --- | --- |
| EV-01 | Cash, debt and lease lines on the balance sheet | 10-Q_2026-09-30_dlx.htm.jsonl, page 2 | 30 Sep 2026 (31 Dec 2025 alongside) | Cash and cash equivalents 74.9; current portion of long-term debt 59.1; long-term debt 1,945.0; finance lease liabilities 75.3; operating lease liabilities 42.8 | Unaudited. Finance lease liabilities are a separate line from this report; see conflict log |
| EV-02 | Debt by instrument, principal and carrying amount | 10-Q_2026-09-30_dlx.htm.jsonl, page 18 | 30 Sep 2026 | Senior secured term loan facility 800.0; senior unsecured notes 475.0; senior secured notes 450.0; revolver drawn 200.5; securitization obligations 100.0; total principal 2,025.5; unamortized discount and issuance costs (21.4); total debt 2,004.1 | Five instruments in the printed table; the securitization is inside the debt figure |
| EV-03 | Maturity wall by year | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19 | 30 Sep 2026 | Remainder of 2026 15.0; 2027 60.0; 2028 160.0; 2029 985.0; 2030 65.0; 2031 740.5; total 2,025.5 | Principal by year after the 31 Jul 2026 amendment; earlier tables are superseded |
| EV-04 | Amended credit agreement: facilities, amortization, maturity, security | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20 | Amended 31 Jul 2026 | $800.0 million first lien term loan; $400.0 million first lien revolver with $25.0 million letter of credit sub-facility; term loan installments $15.0 million quarterly from 31 Dec 2026 to 30 Sep 2030, then $20.0 million to 30 Jun 2031, balance due 31 Jul 2031; revolver to 31 Jul 2031; secured by substantially all assets of the company and its subsidiary guarantors | Agreement itself not supplied; terms as summarised in the 10-Q note |
| EV-05 | Maintenance covenants and levels | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 | From 30 Sep 2026 | Total leverage 4.75 to 1.00 through 30 Jun 2027, 4.25 to 1.00 from 30 Sep 2027 to 31 Dec 2027, 4.00 to 1.00 from 31 Mar 2028; secured leverage 3.50 to 1.00 through 31 Dec 2027, 3.25 to 1.00 from 31 Mar 2028; interest coverage minimum 3.00 to 1.00; restricted payments up to $75.0 million annually; in compliance at 30 Sep 2026 | Issuer prints no reported ratio; covenant EBITDA is defined in the agreement and is not shown to equal the issuer adjusted EBITDA |
| EV-06 | Revolver availability | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 | 30 Sep 2026 | Commitment 400.0; drawn (200.5); outstanding letters of credit (9.7); net available 189.8 | Letters of credit are standby, mainly for workers compensation and environmental obligations |
| EV-07 | Senior notes | 10-Q_2026-09-30_dlx.htm.jsonl, page 21; 10-K_2025-12-31_dlx.htm.jsonl, page 119 | 30 Sep 2026 | 8.0% senior unsecured notes due June 2029, 500.0 issued 2021 and 25.0 repurchased in 2022; 8.125% senior secured notes due September 2029 (February 1, 2029 if any 2021 notes remain outstanding on that date), 450.0 | Springing maturity is a printed term; issuer is Deluxe Corporation; co-issuers and guarantors are not named in the text, and the indentures name certain subsidiaries as parties; indentures not supplied |
| EV-08 | Securitization facility | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21–22 | 30 Sep 2026 | Deluxe Receivables LLC; capacity 100.0, drawn 100.0; matures December 2028; pledged receivables approximately 140.0; rate 5.21%; classified as secured financing and reported in long-term debt | Wholly owned subsidiary consolidated in the filings |
| EV-09 | Debt carrying amount, fair value and rate by instrument | 10-Q_2026-09-30_dlx.htm.jsonl, pages 49–50 | 30 Sep 2026 | Total debt carrying 2,004.1; fair value 2,032.1; interest rate 6.9%; notes fair value 472.9 (unsecured) and 458.7 (secured) | Fair value of the notes is based on observable market prices per the filing; no prices supplied |
| EV-10 | Interest rate swaps and variable-rate exposure | 10-Q_2026-09-30_dlx.htm.jsonl, pages 14, 36 | 30 Sep 2026 | Notional 600.0 amortizing swaps maturing July 2030, weighted-average fixed rate 4.13%, fair value 5.7; variable-rate debt after swaps 500.5; 1 percentage point change moves interest expense by 1.3 for the remainder of 2026 | Cash flow hedges entered July 2026 |
| EV-11 | Celero acquisition: price, allocation, contribution | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13 | Closed 31 Jul 2026 | Cash consideration approximately 625.0 plus seller transaction expenses and other adjustments; consideration transferred 664.6; cash acquired 21.7; goodwill 385.6; revenue contribution 33.5 and net loss 1.9 for the quarter and nine months | Allocation is preliminary |
| EV-12 | Cash paid for acquisitions, net of cash acquired | 10-Q_2026-09-30_dlx.htm.jsonl, page 4 | Nine months 2026 | Payments for acquisitions, net of cash acquired (642.9) | Cash flow statement |
| EV-13 | Pro forma information for Celero | 10-Q_2026-09-30_dlx.htm.jsonl, page 13 | Q3 2026 and nine months 2026 as if acquired 1 Jan 2025 | Pro forma revenue 571.5 (Q3 2026) and 1,707.9 (nine months 2026); pro forma net income 24.3 and 67.3 | Revenue and net income only; no pro forma EBITDA or debt |
| EV-14 | Income statement | 10-Q_2026-09-30_dlx.htm.jsonl, page 3 | Q3 2026 and nine months 2026 with 2025 comparatives | Revenue 553.9 and 1,591.2; operating income 52.7 and 180.1; interest expense (35.0) and (90.6); net income 13.0 and 68.0 | Unaudited |
| EV-15 | Operating cash flow, capital expenditure and free cash flow | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 38 | Nine months 2026 | Net cash provided by operating activities 215.9; purchases of capital assets (81.0); free cash flow 134.9 | Free cash flow is the issuer definition: operating cash flow less purchases of capital assets |
| EV-16 | Adjusted EBITDA reconciliation | 10-Q_2026-09-30_dlx.htm.jsonl, page 39 | Q3 2026 and nine months 2026 | Adjusted EBITDA 127.1 (Q3 2026) and 353.8 (nine months 2026); Q3 2025 118.9 and nine months 2025 325.5 | Issuer definition adds back share-based compensation, restructuring, acquisition costs and other items |
| EV-17 | Net debt | 10-Q_2026-09-30_dlx.htm.jsonl, pages 38–39 | 30 Sep 2026 | Total debt 2,004.1 less cash and cash equivalents (74.9) gives net debt 1,929.2; 31 Dec 2025 net debt 1,392.5 | Issuer definition uses unrestricted cash only |
| EV-18 | Restricted cash and total cash | 10-Q_2026-09-30_dlx.htm.jsonl, pages 10, 44 | 30 Sep 2026 | Restricted cash in settlement processing assets 16.6 and non-current 2.7; total cash, restricted cash and equivalents 94.2; restricted total 19.3 | Excluded from the issuer net debt and liquidity figures |
| EV-19 | Finance and operating leases | 10-Q_2026-09-30_dlx.htm.jsonl, pages 10, 23–24; 10-K_2025-12-31_dlx.htm.jsonl, page 110 | 30 Sep 2026 and 31 Dec 2025 | New 16-year facility finance lease from June 2026: right-of-use asset and liability 49.6, undiscounted payments 88.3; operating lease liabilities current 10.2 (in accrued liabilities); 31 Dec 2025 finance lease liabilities 28.2 and operating lease liabilities 51.2 | Finance lease liabilities sit outside the debt figure; operating leases are outside it as well |
| EV-20 | Pension, retiree medical and other commitments | 10-Q_2026-09-30_dlx.htm.jsonl, pages 9, 18, 22–23; 10-K_2025-12-31_dlx.htm.jsonl, page 57 | 30 Sep 2026 and 31 Dec 2025 | Postretirement benefit plan asset 136.5 (an asset); self-insurance liabilities 5.6; indemnification and guarantee exposure not estimable and no liability recorded; litigation not material; multi-year service contract commitments of approximately 210.0 at 31 Dec 2025 | All outside the debt figure. No factoring, supply-chain finance or consent decree funding found |
| EV-21 | Segment results | 10-Q_2026-09-30_dlx.htm.jsonl, pages 25–26 | Q3 2026 and nine months 2026 | Segment revenue Merchant Services 135.1, B2B Payments 77.3, Data Solutions 102.9, Print 238.6 (Q3 2026); segment adjusted EBITDA 32.1, 22.5, 27.6 and 84.3 | Segment adjusted EBITDA is before corporate costs (39.4) |
| EV-22 | Interest expense, average rate and cash interest | 10-Q_2026-09-30_dlx.htm.jsonl, pages 36, 44 | Q3 2026 and nine months 2026 | Interest expense 35.0 (Q3 2026) and 90.6 (nine months 2026); weighted-average rate 7.0% and 7.1%; interest payments 85.8 (nine months 2026) | Cash interest from the cash flow narrative |
| EV-23 | Management outlook for 2026 | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | FY2026 guidance dated 4 Nov 2026 | Revenue 2.13 to 2.15 billion; adjusted EBITDA 470 to 480 million; adjusted diluted EPS 3.80 to 4.00; free cash flow approximately 200 million | Management guidance, not audited; no reconciliation to GAAP supplied |
| EV-24 | Comparable adjusted measures excluding the business exit | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 8 | Q3 2026 and nine months 2026 | Comparable adjusted EBITDA 127.1 (Q3 2026) against 116.0 (Q3 2025); adjusted EBITDA Q3 2025 118.9 includes business exit 2.9 | Management measure; the quarterly report prints adjusted EBITDA only |
| EV-25 | Celero closing and expected benefits | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | Announced 31 Jul 2026 | Closing of the Celero Commerce acquisition on 31 Jul 2026; more than 15 million of expected cost synergies; investor day intended for December 2026 | Management statement, forward looking |
| EV-26 | Executed financing and acquisition documents referenced | 10-Q_2026-09-30_dlx.htm.jsonl, page 51; 10-K_2025-12-31_dlx.htm.jsonl, pages 119, 121–122; 10-Q_2026-06-30_dlx.htm.jsonl, page 47 | Dated 2021 to 2026 | Refinancing Facility Agreement No. 2 dated 31 Jul 2026; indentures dated 1 Jun 2021 and 3 Dec 2024; credit agreement dated 3 Dec 2024; receivables financing agreement dated 13 Mar 2024 and Amendment No. 1 dated 15 Dec 2025; Celero equity purchase agreement dated 17 Jun 2026 | Listed as exhibits incorporated by reference; none is in the source set |
| EV-27 | Year-end FY2025 balance sheet and debt | 10-K_2025-12-31_dlx.htm.jsonl, pages 66, 106 | 31 Dec 2025 | Cash and cash equivalents 36.9; long-term debt 1,413.1 plus current portion 16.3; total principal 1,444.4; total debt 1,429.4; other non-current liabilities 59.8 | Audited |
| EV-28 | FY2025 net debt and adjusted EBITDA | 10-K_2025-12-31_dlx.htm.jsonl, page 51 | FY2025 and FY2024 | Net debt 1,392.5 (FY2025) and 1,468.7 (FY2024); adjusted EBITDA 431.5 (FY2025) and 412.1 (FY2024) | Issuer definition |
| EV-29 | FY2025 revolver availability and pre-amendment covenant terms | 10-K_2025-12-31_dlx.htm.jsonl, pages 107–108 | 31 Dec 2025 | Net available 379.6 (400.0 less drawn 13.0 and letters of credit 7.4); total leverage 4.00 to 1.00 and secured leverage 3.25 to 1.00 from 30 Jun 2026; dividends and repurchases capped at 60.0 a year if total leverage exceeds 2.75 to 1.00 | Superseded by the 31 Jul 2026 amendment for current terms |
| EV-30 | FY2025 cash flow and income statement | 10-K_2025-12-31_dlx.htm.jsonl, pages 55, 67 | FY2025 | Revenue 2,133.2; operating income 232.4; interest expense (122.0); net income 82.2; operating cash flow 270.6 per the cash flow summary | Audited; operating cash flow is printed in the MD&A liquidity table |
| EV-31 | Quarter-end debt, availability and net debt before the amendment | 10-Q_2026-03-31_dlx.htm.jsonl, pages 12, 14, 28; 10-Q_2026-06-30_dlx.htm.jsonl, pages 15, 17, 35 | 31 Mar 2026 and 30 Jun 2026 | Total principal 1,411.0 and 1,365.0; revolver net available 380.9 and 384.3; net debt 1,369.9 and 1,317.3 | Pre-amendment balances; the 30 Jun 2026 report discloses the Celero closing as a subsequent event |
| EV-32 | Quarter 2 subsequent event | 10-Q_2026-06-30_dlx.htm.jsonl, page 24 | Closed 31 Jul 2026 | Note 14 states that the Celero acquisition was completed on 31 Jul 2026 and refers to the debt note for the financing | Subsequent-event date flagged; the 30 Jun 2026 figures exclude Celero |
| EV-33 | Business description, segments and executive officers | 10-K_2025-12-31_dlx.htm.jsonl, pages 3, 18, 117 | FY2025 report | Four segments (Merchant Services, B2B Payments, Data Solutions, Print); eight executive officers listed with ages and tenure; Items 10 to 14 incorporated from the proxy statement | Board, committee and ownership detail are in a proxy statement that is not supplied |
| EV-34 | FY2024 annual report: units, net debt and adjusted EBITDA | 10-K_2024-12-31_dlx.htm.jsonl, pages 55, 74, 114 | FY2024 | Amounts in thousands: net debt 1,468,752; adjusted EBITDA 412,075; total principal 1,521,917 | Quantity family is thousands; the FY2025 report restates the same FY2024 figures in millions |
| EV-35 | Absence checks: ratings, reported covenant ratios, guarantor names, Celero earnings | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 | Searched across all nine documents | No credit rating, rating agency, reported covenant ratio, named guarantor list or Celero EBITDA appears in the text; covenant compliance is stated in words only | Search terms: rating, Moodys, Fitch, S&P, downgrade, leverage ratio, guarantor, Celero with EBITDA. Subsidiaries list (Exhibit 21.1) is named but its text is not in the set |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-21 | day | 2025-02-21 | FY2024 annual report signed | Historical — "Date: February 21, 2025" | 10-K_2024-12-31_dlx.htm.jsonl, page 131 | Base-year report; FY2024 figures are restated in millions in the FY2025 report |
| 2026-02-13 | day | 2026-02-13 | FY2025 annual report signed and audit report dated | Historical — "Date: February 13, 2026" | 10-K_2025-12-31_dlx.htm.jsonl, pages 66, 122 | Latest audited statements and the base for FY2025 comparisons |
| 2026-05-06 | day | 2026-05-06 | First quarter 2026 results released | Historical — "Minneapolis – May 6, 2026" | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 1 | Management measures for Q1 2026; outlook later superseded |
| 2026-05-07 | day | 2026-05-07 | First quarter 2026 quarterly report signed | Historical — "Date: May 7, 2026" | 10-Q_2026-03-31_dlx.htm.jsonl, page 39 | Q1 2026 balances before the July 2026 amendment |
| 2026-06-17 | day | 2026-08-06 | Celero equity purchase agreement and plan of merger dated | Historical — "dated June 17, 2026" | 10-Q_2026-06-30_dlx.htm.jsonl, page 47 | Executed acquisition document named in the exhibit list and not supplied |
| 2026-07-31 | day | 2026-07-31 | Celero Commerce acquisition closed | Historical — "has closed its acquisition of Celero Commerce" | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | Acquisition debt is on the balance sheet from this date and Celero earnings are consolidated from it |
| 2026-07-31 | day | 2026-11-05 | Amended and restated credit agreement (Refinancing Facility Agreement No. 2) dated | Historical — "dated July 31, 2026" | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19, 51 | Governs the term loan, revolver and covenant tests; executed document not supplied |
| 2026-08-05 | day | 2026-08-05 | Second quarter 2026 results released | Historical — "Minneapolis – August 5, 2026" | EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl, page 1 | Outlook updated to include Celero; later superseded |
| 2026-08-06 | day | 2026-08-06 | Second quarter 2026 quarterly report signed | Historical — "Date: August 6, 2026" | 10-Q_2026-06-30_dlx.htm.jsonl, page 47 | Reports the Celero closing as a subsequent event; balance sheet excludes Celero |
| 2026-11-04 | day | 2026-11-04 | Third quarter 2026 results released | Historical — "Minneapolis – November 4, 2026" | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 1 | Current-period management measures and the updated 2026 outlook |
| 2026-11-05 | day | 2026-11-05 | Third quarter 2026 quarterly report signed | Historical — "Date: November 5, 2026" | 10-Q_2026-09-30_dlx.htm.jsonl, page 52 | Latest dated source; nothing in the set after this date up to the cutoff |
| 2021-06-01 | day | 2026-02-13 | Indenture dated; the 8.0% senior unsecured notes were issued in June 2021 | Historical — "dated as of June 1, 2021" | 10-K_2025-12-31_dlx.htm.jsonl, page 119 | Executed note document named in the exhibit list and not supplied |
| 2024-12-03 | day | 2026-02-13 | Indenture and earlier credit agreement dated; the senior secured notes were issued in December 2024 | Historical — "dated as of December 3, 2024" | 10-K_2025-12-31_dlx.htm.jsonl, pages 119, 121 | Executed documents named in the exhibit list and not supplied; the credit agreement was amended on 2026-07-31 |
| 2025-12-15 | day | 2026-02-13 | Amendment No. 1 to the receivables financing agreement dated | Historical — "dated December 15, 2025" | 10-K_2025-12-31_dlx.htm.jsonl, page 122 | Securitization terms are known only from the note summary |
| 2026-12-01 | day | 2026-11-04 | Quarterly dividend payable to holders of record on 2026-11-17 | Scheduled — "payable on December 1, 2026" | EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2 | Scheduled cash outflow after the cutoff, subject to the restricted-payment limit in the amended agreement |
| 2026-12 | month | 2026-07-31 | Investor day intended by management | Scheduled — "intends to hold an investor day conference in December of this year" | EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 | New management information after the cutoff would not be in the source set |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 9 |
| Calculated | 4 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 4 |

## Calculations

All amounts are USD millions unless stated; every input is a printed figure with its source.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C-1 | Liquidity: unrestricted cash plus net revolver availability | 74.9 + 189.8 | 264.7 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 21 |
| C-2 | Revolver availability recomputed: commitment less drawn less letters of credit | 400.0 − 200.5 − 9.7 | 189.8, equal to the printed 189.8 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| C-3 | Securitization undrawn capacity, before the borrowing-base adjustment: capacity less drawn | 100.0 − 100.0 | 0.0 | 10-Q_2026-09-30_dlx.htm.jsonl, page 21 |
| C-4 | Principal by instrument: term loan, unsecured notes, secured notes, revolver, securitization | 800.0 + 475.0 + 450.0 + 200.5 + 100.0 | 2,025.5, equal to the printed total principal | 10-Q_2026-09-30_dlx.htm.jsonl, page 18 |
| C-5 | Maturity wall by year: remainder of 2026, 2027, 2028, 2029, 2030, 2031 | 15.0 + 60.0 + 160.0 + 985.0 + 65.0 + 740.5 | 2,025.5, equal to the printed total principal | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19 |
| C-6 | Carrying amount: principal less unamortized discount and issuance costs; and current plus long-term debt | 2,025.5 − 21.4; 59.1 + 1,945.0 | 2,004.1 for both, equal to the printed total debt | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 18 |
| C-7 | Net debt: total debt less unrestricted cash and cash equivalents | 2,004.1 − 74.9 | 1,929.2, equal to the printed net debt | 10-Q_2026-09-30_dlx.htm.jsonl, pages 38–39 |
| C-8 | Restricted cash and total cash: settlement processing 16.6 plus non-current 2.7; unrestricted plus restricted | 16.6 + 2.7; 74.9 + 19.3 | 19.3; 94.2, equal to the printed total | 10-Q_2026-09-30_dlx.htm.jsonl, pages 10, 44 |
| C-9 | Celero consideration roles: consideration transferred less cash acquired; consideration transferred less cash consideration | 664.6 − 21.7; 664.6 − 625.0 | 642.9, equal to the printed cash paid net of cash acquired; 39.6, the seller transaction expenses and other adjustments, which the filing does not itemise | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 |
| C-10 | Presentation change at 2025-12-31: other non-current liabilities after the change plus finance lease liabilities | 34.0 + 25.8 | 59.8, equal to the other non-current liabilities printed in the FY2025 annual report | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 6; 10-K_2025-12-31_dlx.htm.jsonl, page 66 |
| C-11 | Months of Celero in the quarter: closing 2026-07-31 to quarter end 2026-09-30 | August and September | 2 months | 10-Q_2026-09-30_dlx.htm.jsonl, pages 12–13 |
| C-12 | Covenant headroom against total leverage, secured leverage and interest coverage | Covenant EBITDA as defined in the credit agreement and the issuer reported ratio | Not calculable: the credit agreement is not supplied and the issuer prints no reported ratio | 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| C-13 | Page records across the nine documents | 131 + 123 + 39 + 48 + 52 + 9 + 9 + 4 + 9 | 424 | See P3 |

## Gaps

The gaps below limit what the requested work can establish; the conflicts record where the documents disagree and how each was treated.

| Gap ID | Type | Description | Severity | Search made | Effect on the requested work | Remediation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| G1 | Gap | The executed financing documents are not supplied: the amended and restated credit agreement dated 2026-07-31, the indentures dated 2021-06-01 and 2024-12-03, and the receivables financing agreement with its amendment. Guarantor names and the subsidiaries exhibit text are also not in the set. | MATERIAL | Every document was searched for guarantor and for the agreements; only the exhibit lists and note summaries are present | Covenant headroom, guarantor and lien detail and call terms are not established; the requested modules rely on the filing summaries | Add the five agreements and the subsidiaries list as sources | 10-Q_2026-09-30_dlx.htm.jsonl, pages 20, 51; 10-K_2025-12-31_dlx.htm.jsonl, pages 119, 121–122 |
| G2 | Gap | Celero earnings for the full trailing period, pro forma EBITDA and synergy phasing are not supplied. | MATERIAL | Every document was searched for Celero with EBITDA, pro forma EBITDA and run-rate; only pro forma revenue and net income and an expected cost synergy of more than USD 15 million are printed | Trailing leverage and interest cover would combine two months of Celero earnings with its full acquisition debt | Add an issuer statement of Celero or pro forma earnings if one exists; otherwise carry the caveat | 10-Q_2026-09-30_dlx.htm.jsonl, page 13; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 |
| G3 | Gap | No credit rating is supplied. | MINOR | Searched for Moodys, Fitch, S&P, rating agency, credit rating and downgrade in all nine documents; none found | Rating context and rating-linked terms are not established | Add a rating source if rating context is wanted | Not supplied: absence established by search |
| G4 | Gap | No share price, bond price or spread is supplied; the only market value printed is the non-affiliate equity value of USD 701,668,516 at 2025-06-30 on the FY2025 cover page. | MINOR | Searched for stock price, share price, market capitalization and yield | Market-implied views are not established | Add dated quotes if wanted | 10-K_2025-12-31_dlx.htm.jsonl, page 2 |
| G5 | Gap | The proxy statement is not supplied; board composition, committee membership, security ownership and executive compensation are incorporated into the annual report by reference. | MINOR | Items 10 to 14 were read | Governance and ownership are limited to the executive officer list | Add the proxy statement as a source | 10-K_2025-12-31_dlx.htm.jsonl, pages 117–118 |
| G6 | Gap | No issuer document dated after 2026-11-05 is supplied before the cutoff of 2026-11-18. | MINOR | Document dates compared with the cutoff | Events in the last thirteen days before the cutoff are not covered | Add any later filing or release | Not supplied: no later document exists in the set |
| K1 | Conflict | Covenant terms differ between the FY2025 annual report (total leverage 4.00 to 1.00 and secured leverage 3.25 to 1.00 from 2026-06-30; dividends and repurchases capped at 60.0 a year above 2.75 to 1.00) and the latest quarterly report (4.75 to 1.00 and 3.50 to 1.00 from 2026-09-30; payments up to 75.0 a year). | MINOR | Both printed | The amended agreement of 2026-07-31 explains the difference | The later report governs current terms; the earlier terms are history | 10-K_2025-12-31_dlx.htm.jsonl, pages 107–108; 10-Q_2026-09-30_dlx.htm.jsonl, page 20 |
| K2 | Conflict | Celero consideration appears as 625.0 (cash consideration), 664.6 (consideration transferred) and 642.9 (cash paid net of 21.7 cash acquired). | MINOR | Reconciled in C-9; the 39.6 between 625.0 and 664.6 is seller transaction expenses and other adjustments, not itemised | Each figure keeps its role; none is chosen silently | Use each figure for its stated role | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 |
| K3 | Conflict | Q3 2025 adjusted EBITDA is 118.9 in the quarterly report and 116.0 as comparable adjusted EBITDA in the release; the second excludes a business exit of 2.9. | MINOR | Both printed with their definitions | Growth rates differ by definition | Label each figure with its definition | 10-Q_2026-09-30_dlx.htm.jsonl, page 39; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 8 |
| K4 | Conflict | The FY2024 annual report prints thousands and the FY2025 annual report prints the same FY2024 amounts in millions, rounded. | MINOR | Net debt 1,468,752 thousand, which rounds to 1,468.8 million, against 1,468.7 million printed in the FY2025 report | A difference of 0.1 million; the documents do not state its cause | Use the figure from the document of the period analysed and keep each quantity family | 10-K_2024-12-31_dlx.htm.jsonl, pages 55, 74; 10-K_2025-12-31_dlx.htm.jsonl, page 51 |
| K5 | Conflict | The 2025-12-31 balance sheet is presented differently: other non-current liabilities of 59.8 in the FY2025 annual report become 34.0 plus a separate finance lease liabilities line of 25.8 in the 2026 reports. | MINOR | Reconciled in C-10 | The totals agree; only the line split changed | Use the 2026 presentation for 2026 comparisons | 10-K_2025-12-31_dlx.htm.jsonl, page 66; 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 6 |
| K6 | Conflict | File labels carry period dates, not publication dates: the 2026-03-31 release is dated 2026-05-06, one 2026-06-30 release is dated 2026-08-05 and the other 2026-07-31. | MINOR | Release dates read from each document | Dates in Sources and Events follow the documents | Use the dates stated in each document | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 1; EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl, page 1; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1 |
| K7 | Subsequent event | The 30 June 2026 quarterly report excludes Celero and its financing; the closing on 2026-07-31 is disclosed as a subsequent event and is not blended into June figures. | MINOR | Read in the subsequent event note | June 2026 balances are pre-acquisition | Keep June and September balances separate | 10-Q_2026-06-30_dlx.htm.jsonl, page 24 |

## Next module

The orchestrator selects the next module.
