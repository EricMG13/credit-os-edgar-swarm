---
module_id: CP-0
issuer_id: oln
analysis_date: 2026-11-05
module_status: Complete
run_id: oln-2026-11-05-credit_snapshot-host
pathway: credit_snapshot
---

# CP-0 Source readiness: OLIN Corp (oln)

## Request

OLIN Corp (issuer id oln), as of 2026-11-05, pathway credit_snapshot. Scope: whether the seven supplied issuer documents support the requested credit snapshot work, and what remains unsupported.

## Sources

No upstream handoff was supplied to this module; it is the entry point of the run.

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report on Form 10-K of Olin Corporation for the fiscal year ended 2025-12-31 | 2026-02-20 (signature date) | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | Identity, business, debt note, covenant and risk disclosure, source-gap search |
| 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 | 2026-05-08 (signature date) | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Coverage and period map, covenant-level search |
| 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 | 2026-07-31 (signature date) | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Coverage and period map, merger announcement timing |
| 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 | 2026-10-30 (signature date) | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Current-period debt, liquidity, merger, ratings and legal disclosure |
| EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings press release for the first quarter of 2026, Exhibit 99.1 | 2026-05-07 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Coverage and period map |
| EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings press release for the second quarter of 2026, Exhibit 99.1 | 2026-07-30 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Coverage and period map, merger completion timing as first stated |
| EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings press release for the third quarter of 2026, Exhibit 99.1 | 2026-10-29 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | Current-period results, net debt, liquidity, guidance and merger timing |

## Findings

### Bottom line

The seven supplied OLIN Corp documents are enough to start the requested credit snapshot, because they carry full statements, the debt note, liquidity, segments and the pending Huntsman merger through the quarter ended 2026-09-30. Covenant levels, the merger agreement and the rating agency reports are not in the set, so covenant headroom and combined-company leverage cannot be established from it.
Basis: 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–14; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1–3

The set holds one annual report, three quarterly reports and three earnings releases, all dated on or before the 2026-11-05 cutoff. The covenant gap blocks only the legal and covenant work this run does not select; the merger and ratings gaps reach the business and credit assessments, which must carry them as stated limitations.
Basis: 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-20 | day | 2026-02-20 | Annual report for fiscal 2025 signed | Historical — report signed February 20, 2026 | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150 | Base period for FY2025 statements; the filing date itself is not stated, so the signature date is used |
| 2026-05-07 | day | 2026-05-07 | First quarter 2026 earnings release | Historical — Olin Announces First Quarter 2026 Results | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl, page 1 | Quarter before the merger was announced |
| 2026-05-08 | day | 2026-05-08 | First quarter 2026 quarterly report signed | Historical — report signed May 8, 2026 | 10-Q_2026-03-31_oln-20260331.htm.jsonl, page 49 | Notes and liquidity for the quarter ended 2026-03-31 |
| 2026-07-30 | day | 2026-07-30 | Second quarter 2026 earnings release | Historical — Olin Announces Second Quarter 2026 Results | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 1 | First release stating the merger and its completion timing |
| 2026-07-31 | day | 2026-07-31 | Second quarter 2026 quarterly report signed | Historical — report signed July 31, 2026 | 10-Q_2026-06-30_oln-20260630.htm.jsonl, page 59 | Notes and liquidity for the quarter ended 2026-06-30 |
| 2026-10-29 | day | 2026-10-29 | Third quarter 2026 earnings release | Historical — Olin Announces Third Quarter 2026 Results | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1 | Latest results, net debt and fourth quarter guidance |
| 2026-10-30 | day | 2026-10-30 | Third quarter 2026 quarterly report signed | Historical — report signed October 30, 2026 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 | Latest notes; latest source in the set and inside the cutoff |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 14 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 12 |
| Fields total | 12 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 5 |

### T1 - Input gate

| Item | Value | Source |
|---|---|---|
| Objective | Credit snapshot of OLIN Corp on its own reporting perimeter: financial foundation, business and governance facts, and the fundamental credit assessment | Run settings for pathway credit_snapshot |
| Issuer and registrant | OLIN Corp; registrant Olin Corporation, Virginia, Commission file number 1-1070, NYSE symbol OLN | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 1 |
| Reporting perimeter | Olin Corporation consolidated statements; certain domestic subsidiaries guarantee the Senior Secured Credit Facility, and no separate guarantor or borrower statements are supplied | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| As-of date and cutoff | 2026-11-05 for both | Run settings |
| Current and prior period | Q3 2026 (quarter ended 2026-09-30), prior period FY2025 | Run settings |
| Currency and unit | USD; statements print $ in millions | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 7 |
| Newest source date | 2026-10-30; nothing supplied is dated after the cutoff | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 61 |
| Legal documents | None declared in the run settings; no executed credit agreement, indenture or merger agreement is supplied | Run settings |
| Ratings, quotes, peers, portfolio, research questions, prior case | Not supplied in the run settings | Run settings |
| Source gate | pass for the requested credit snapshot: primary filings cover each requested module's evidence demand, with limits in the Gaps section | 10-K_2025-12-31_oln-20251231.htm.jsonl, page 150 |

### T2 - Source register

| Source ID | Source | Document family | Authority tier | Entity | Period covered | Document date | Triage decision | Active representation | Readiness input |
|---|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl | Annual report | 1 primary filing | Olin Corporation | FY2025 | 2026-02-20 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S2 | 10-Q_2026-03-31_oln-20260331.htm.jsonl | Quarterly report | 1 primary filing | Olin Corporation | Q1 2026 | 2026-05-08 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S3 | 10-Q_2026-06-30_oln-20260630.htm.jsonl | Quarterly report | 1 primary filing | Olin Corporation | Q2 2026 and six months | 2026-07-31 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl | Quarterly report | 1 primary filing | Olin Corporation | Q3 2026 and nine months | 2026-10-30 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S5 | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | Earnings release | 2 issuer release | Olin Corporation | Q1 2026 | 2026-05-07 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S6 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | Earnings release | 2 issuer release | Olin Corporation | Q2 2026 | 2026-07-30 | PASS_THROUGH | Supplied page text | ORIGINAL |
| S7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | Earnings release | 2 issuer release | Olin Corporation | Q3 2026 and nine months | 2026-10-29 | PASS_THROUGH | Supplied page text | ORIGINAL |

### T4 - Content-to-module map

| Capability | Module | Content located | Source | Disposition | Readiness | Reason |
|---|---|---|---|---|---|---|
| Historical statements, debt, cash, net debt and adjusted EBITDA | CP-1 | Statements of operations, balance sheet, cash flows, adjusted EBITDA reconciliation, net debt table, debt note | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 7–11; 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Recommended | READY | Quarterly and annual statements for FY2025 and Q1 to Q3 2026 are all present |
| Business, segments, ownership, transaction and governance facts | CP-1A | Business description, segment results, merger terms, officers and directors | 10-K_2025-12-31_oln-20251231.htm.jsonl, pages 4–19; 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–9 | Recommended | READY_WITH_LIMITATIONS | Director, officer and compensation items are incorporated by reference to a proxy statement that is not supplied (10-K page 142) |
| Fundamental credit assessment | CP-2 | Combines the financial foundation and business facts | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 33–41 | Recommended | READY_WITH_LIMITATIONS | Carries the limits of the business module; covenant levels and combined-company leverage are unavailable |
| Short credit snapshot | CP-L10 | Key figures from the financial foundation | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 3 | Not selected in this run | READY | Sources support it if a later run selects it |
| Earnings change by quarter | CP-1B | Three quarterly releases and quarterly reports | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1–3 | Not selected in this run | READY | Q1 to Q3 2026 and the 2025 comparatives are printed; Q4 2025 is derivable from the annual report less nine months 2025 |
| Liquidity and cash flow bridge | CP-2D | Cash, revolver, letters of credit, receivables facility | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–15 and 50–52 | Not selected in this run | READY | Facility-level inputs are printed |
| Refinancing and liability management | CP-3C | Debt table, facility maturities, merger refinancing amendment | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9 and 12–14 | Not selected in this run | READY_WITH_LIMITATIONS | Merger financing terms are summarised in the quarterly report, not in the executed amendment |
| Covenants and legal terms | CP-4 | Covenant descriptions and the covenant relief period | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14 | Blocked | BLOCKED | No executed governing document is supplied and no covenant ratio level is printed |
| Restructuring and fulcrum | CP-4C | None beyond the debt note | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Blocked | BLOCKED | Requires executed legal documents and a forward model |
| Downside pathway | CP-2A | Guidance of USD 80 million to USD 100 million fourth quarter adjusted EBITDA | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2 | Not selected in this run | READY_WITH_LIMITATIONS | Context supplies no downside assumptions |
| Forward credit model | CP-2G | Fourth quarter guidance only | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2 | Not selected in this run | READY_WITH_LIMITATIONS | Context supplies no forecast assumptions |
| Macro, currency and hedging sensitivity | CP-2E | Derivative instruments note, market risk item | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 26–31 | Not selected in this run | READY | Derivative notes are printed |
| Ratings migration and triggers | CP-2H | Ratings table and outlooks as the issuer prints them | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53 | Not selected in this run | READY_WITH_LIMITATIONS | Agency reports and trigger documents are not supplied |
| Peer benchmark | CP-1C | None | Not supplied: no peer set in the run settings | Not selected in this run | CONDITIONAL | No peer financials are supplied |
| Earnings quality | CP-1D | Adjusted EBITDA reconciliation, add-backs | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 10 | Not selected in this run | READY | Add-backs are reconciled in the release |
| Relative value and security selection | CP-3 | None | Not supplied: no quotes, spreads or valuation inputs | Not selected in this run | CONDITIONAL | No market data is supplied |
| Market-implied risk | CP-3D | None | Not supplied: no market quotes in the run settings | Not selected in this run | BLOCKED | Needs dated market evidence |
| Investment committee challenge | CP-6 | None | Not supplied: no portfolio in the run settings | Not selected in this run | CONDITIONAL | Fund limits are not supplied |
| Evidence trace validator | CP-5 | Every handoff of the run | Not applicable: reads upstream handoffs, not issuer files | Not selected in this run | READY | Source files are traceable by page |
| Changes since the last run | CP-8 | None | Not applicable: first run of this pathway | Inapplicable | READY | No earlier run of this issuer and pathway exists |
| Deep research | CP-DR | None recommended | Not supplied: no named research question | Not recommended | READY | Source volume alone is not a trigger |

### T6 - Evidence trace

| Trace ID | Claim | Stated value | Source | Lineage class |
|---|---|---|---|---|
| E1 | Registrant identity | Olin Corporation, Virginia, file number 1-1070, NYSE OLN | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 1 | Directly Sourced |
| E2 | Q3 2026 sales and adjusted EBITDA | Sales USD 1,747.7 million; adjusted EBITDA USD 191.4 million | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, pages 1 and 10 | Directly Sourced |
| E3 | Total debt at 2026-09-30 | USD 3,013.1 million, equal to the balance sheet long-term debt with no current installments | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 | Directly Sourced |
| E4 | Reported net debt and leverage | Net debt USD 2,798.3 million; 5.2x trailing twelve months adjusted EBITDA of USD 536.6 million; year-end 2025 net debt USD 2,659.7 million and 4.1x | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 | Directly Sourced |
| E5 | Cash | USD 214.8 million at 2026-09-30 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 | Directly Sourced |
| E6 | Revolving facility | USD 1,200.0 million commitments; USD 170.0 million drawn; USD 0.4 million letters of credit; USD 1,029.6 million undrawn; matures 2030-03-14 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Directly Sourced |
| E7 | Receivables financing | USD 500.0 million agreement maturing 2027-11-19; USD 465.0 million drawn; USD 34.0 million additional capacity | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 14–15 | Directly Sourced |
| E8 | Instruments in the debt note | 5.625% notes due 2029 USD 669.3 million; 5.00% notes due 2030 USD 515.3 million; 6.625% notes due 2033 USD 600.0 million; term loans USD 528.1 million; recovery zone bonds USD 83.0 million | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Directly Sourced |
| E9 | Maintenance covenants | A net leverage ratio and an interest coverage ratio apply; compliance is stated; the covenant relief period ends on the earlier of 2027-09-30 or the issuer's election; no ratio level is printed in any of the four filings | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 13–14 | Directly Sourced |
| E10 | Merger terms | Agreement dated 2026-06-15; 0.5476 Olin shares per Huntsman share; expected ownership 54.5% Olin and 45.5% Huntsman; shareholder approvals 2026-08-25; termination fee USD 121 million | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 7–8 and 58 | Directly Sourced |
| E11 | Merger financing amendment | Second amendment executed 2026-10-27 for a USD 2,500.0 million facility on the closing date: USD 750.0 million term loan and USD 1,750.0 million revolver | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 8–9 | Directly Sourced |
| E12 | Ratings as the issuer prints them | Fitch BB+ Rating Watch Positive; Moody's Ba2 Negative; S&P BB Credit Watch Developing, as of 2026-09-30 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 52–53 | Directly Sourced |
| E13 | Fourth quarter guidance | Adjusted EBITDA of USD 80 million to USD 100 million | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 2 | Directly Sourced |
| E14 | Merger completion timing moved | Second quarter release: first half of 2027; third quarter release: first quarter of 2027 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl, page 3; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 1 | Directly Sourced |
| E15 | Debt note ties to the balance sheet | Calculation C2 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12 | Calculated |
| E16 | Undrawn revolver ties to the printed figure | Calculation C3 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 | Calculated |
| E17 | Readiness verdicts for the three requested modules | READY for the financial foundation; READY_WITH_LIMITATIONS for business and credit assessment | 10-Q_2026-09-30_oln-20260930.htm.jsonl, pages 12–14 | Analyst Inference |

### P3 - Input inventory

| Source ID | Source | Size in bytes | Pages in text | sha256 | Original role |
|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_oln-20251231.htm.jsonl | 412406 | 150 | 4c4aa24234dd70c75f25e45010299b0359519fd53db6b33485bc189c79880655 | Active content as supplied |
| S2 | 10-Q_2026-03-31_oln-20260331.htm.jsonl | 126059 | 49 | b7b2893c43ac8c80dd177251279128741771bfa43d75cbf90bad3645179170d6 | Active content as supplied |
| S3 | 10-Q_2026-06-30_oln-20260630.htm.jsonl | 154025 | 59 | 31cc1696caa1e392e8267ebed3744e51e1777dcbf99f80668497471e88c3bcb0 | Active content as supplied |
| S4 | 10-Q_2026-09-30_oln-20260930.htm.jsonl | 163596 | 61 | fcb130292ef752affbb45743362d92ca38d4b7b812532fc678ec7413956a3cd3 | Active content as supplied |
| S5 | EX-99.1_2026-05-07_exhibit991q12026earningspr.htm.jsonl | 22982 | 9 | 9f1321ffd9728e7b42deb60dc916ea8598957e5a719c0c9054fc2f70430134aa | Active content as supplied |
| S6 | EX-99.1_2026-07-30_exhibit991q22026earningspr.htm.jsonl | 27570 | 11 | 08a70fcc145c266c21d73e09e50eda1490a6994f07dbbc111206ffd51445010c | Active content as supplied |
| S7 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl | 27471 | 11 | 27ebe9b3524b1cfc010f76a20b291e6a4f5bd41b4c9d2abf5a2ffd63c041424f | Active content as supplied |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Count of supplied issuer documents and text pages | 1 annual report + 3 quarterly reports + 3 earnings releases; 150 + 49 + 59 + 61 + 9 + 11 + 11 pages | 7 documents; 350 pages | P3 input inventory |
| C2 | Debt note against balance sheet at 2026-09-30, USD million | 669.3 + 515.3 + 600.0 + 528.1 + 170.0 + 465.0 + 83.0 + 0.0 − 17.6 | 3,013.1, equal to the printed total debt of 3,013.1 and to balance sheet long-term debt of 3,013.1 with 0.0 current installments | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 12; EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 8 |
| C3 | Undrawn revolver at 2026-09-30, USD million | 1,200.0 − 170.0 − 0.4 | 1,029.6, equal to the printed undrawn commitments of 1,029.6 | 10-Q_2026-09-30_oln-20260930.htm.jsonl, page 13 |
| C4 | Net debt tie-out at 2026-09-30, USD million | 3,013.1 − 214.8 | 2,798.3, equal to the printed net debt of 2,798.3 | EX-99.1_2026-10-29_exhibit991q32026earningspr.htm.jsonl, page 11 |

## Gaps

| Gap ID | Type | Severity | Evidence demand | Affected modules | Readiness effect | Remediation | Owner | Status |
|---|---|---|---|---|---|---|---|---|
| G1 | Source gap | MINOR | Executed senior credit agreement and its amendments, note indentures, and any covenant ratio levels; the run settings declare no legal documents and none of the four filings prints a ratio level | CP-4, CP-4C, CP-2D | Covenant headroom is not calculable; CP-4 is blocked; the requested modules are unaffected | Supply the executed credit agreement, the February 2026 amendment and the indentures | Analyst | Open |
| G2 | Source gap | MINOR | Merger agreement, joint proxy statement and Huntsman financial statements; Olin's own filings state the terms but Huntsman's debt, earnings and the combined capital structure are not in the set | CP-1A, CP-2, CP-3C | No combined-company leverage can be established; any statement about the combined company rests on Olin's description alone | Supply the merger agreement and Huntsman's latest quarterly report | Analyst | Open |
| G3 | Source gap | MINOR | Rating agency reports and rating trigger terms; ratings appear only as the issuer prints them as of 2026-09-30 | CP-2H, CP-2 | Rating drivers and triggers are not established | Supply the three agencies' latest reports | Analyst | Open |
| G4 | Source gap | MINOR | Market quotes, spreads, equity market value, peer set and portfolio limits; the run settings leave each blank, which is not zero | CP-1C, CP-3, CP-3D, CP-6 | These modules cannot run as supplied | Supply dated market data and the fund's limits if those modules are wanted | Analyst | Open |
| G5 | Version change | MINOR | Merger completion timing: the second quarter release says first half of 2027, the third quarter release and quarterly report say first quarter of 2027; the later document controls the current statement and both are kept | CP-1A, CP-2 | None for source readiness; analysis must quote the later timing and flag the earlier one | Use the third quarter wording; keep the earlier statement as history | Analyst | Open |

## Next module

The orchestrator selects the next module.
