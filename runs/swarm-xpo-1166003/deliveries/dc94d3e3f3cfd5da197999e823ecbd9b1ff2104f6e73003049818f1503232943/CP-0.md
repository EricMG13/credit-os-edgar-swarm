---
issuer_id: xpo-1166003
module_id: CP-0
analysis_date: 2026-11-18
pathway: credit_snapshot
---

# XPO, Inc. source readiness

## Request

Source readiness for XPO, Inc. (issuer xpo-1166003), as of 2026-11-18, on the credit snapshot pathway. Scope: whether the five supplied filings can support the requested financial foundation, business and fundamental credit work, and what remains outside them.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_xpo-20241231.htm.jsonl | Annual report on Form 10-K of XPO, Inc. for the year ended 2024-12-31 | not stated (signed 2025-02-07) | 72ce6a56b51b85837bd7fee86230c867c634e6fded0fc893ecfd93f801ad0800 | Classified and mapped to modules; prior-year comparatives for FY2024 and FY2023 |
| 10-K_2025-12-31_xpo-20251231.htm.jsonl | Annual report on Form 10-K of XPO, Inc. for the year ended 2025-12-31 | not stated (signed 2026-02-05) | ec7758b972fd04e909ecfdc9df05c28ab78f799cfc27ef091ba65d3b60290229 | Classified and mapped to modules; latest audited year, debt note and facility terms |
| 10-Q_2026-03-31_xpo-20260331.htm.jsonl | Quarterly report on Form 10-Q of XPO, Inc. for the quarter ended 2026-03-31 | not stated (signed 2026-04-30) | 807ee2c04ff25e8d2a429ab8c69bdd24fc886c44ef633598448c62d34fdbc82d | Classified and mapped to modules; first-quarter 2026 interim evidence |
| 10-Q_2026-06-30_xpo-20260630.htm.jsonl | Quarterly report on Form 10-Q of XPO, Inc. for the quarter ended 2026-06-30 | not stated (signed 2026-07-30) | 861d8b27a1e9774695dd0837b8c020ac35bd22b26238410b53a8171feae978f4 | Classified and mapped to modules; second-quarter 2026 interim evidence |
| 10-Q_2026-09-30_xpo-20260930.htm.jsonl | Quarterly report on Form 10-Q of XPO, Inc. for the quarter ended 2026-09-30 | not stated (signed 2026-10-29) | 30d8c379410fe7b688cf563604823fa68c614e669d0391a2d850c9308fc4f609 | Classified and mapped to modules; latest balance sheet, debt note, liquidity and subsequent events |

No upstream handoffs were supplied: this is the first module of the run.

## Findings

### Bottom line

The five filings are enough to run the financial foundation, business and fundamental credit work on XPO, Inc., with limitations. They are not enough for work that needs the credit agreements, ratings, market prices, peers or portfolio inputs, none of which was supplied.

The latest evidence is the quarterly report for the period ended 2026-09-30, signed 2026-10-29, so anything between that date and the as-of date 2026-11-18 is outside the sources. The filings name the covenant tests and state compliance, but they print no covenant levels, so headroom cannot be established from them.
Basis: 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 42; 10-K_2025-12-31_xpo-20251231.htm.jsonl, pages 103–104

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: source readiness records no dated credit event | Not supplied: no dated credit event is recorded | Not supplied: no dated credit event is recorded | Not supplied: dated credit events belong to the financial and credit modules | Not supplied: no dated credit event is recorded | Not supplied: no dated credit event is recorded | Not supplied: no dated credit event is recorded |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 9 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 14 |
| Fields total | 17 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

### T1 Input gate

| Gate | Requirement | Result | Evidence | Source |
| --- | --- | --- | --- | --- |
| G1 Objective | The pathway's use case when no objective is stated | Credit snapshot of XPO, Inc.; the run states no further objective or research question | Run settings name the credit snapshot pathway and list no research question | Run settings (not an issuer source) |
| G2 Issuer identity | Registrant named from document content | XPO, Inc., a Delaware registrant, common stock listed on the New York Stock Exchange under the symbol XPO | Cover page of the latest quarterly report | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 1 |
| G3 Reporting perimeter | Entity the statements describe | Consolidated XPO, Inc. and subsidiaries; two reportable segments, North American LTL and European Transportation; no separate statements for any subsidiary issuer or guarantor group | Note on segment reporting | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 8 |
| G4 As-of date and cutoff | Evidence dated on or before 2026-11-18 | Pass: the latest document is signed 2026-10-29; 20 days of events to the as-of date are not covered by any source | Signature block of the latest quarterly report | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 42 |
| G5 Period basis | Current and prior periods stated by the run | Current period Q3 2026 (quarter ended 2026-09-30); prior period FY2025 | Run settings; statements for both periods are in the sources | 10-K_2025-12-31_xpo-20251231.htm.jsonl, pages 77–79 |
| G6 Primary documents | Controlling filings for the objective | Pass: two annual reports and three quarterly reports, tier 1 | Cover pages and signature blocks | 10-K_2024-12-31_xpo-20241231.htm.jsonl, page 1 |
| G7 Legal documents | Executed credit agreements and indentures when legal or covenant work is requested | None supplied; the filings summarise the facilities only | Run settings state no legal documents; facility terms are summarised in the debt note | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 15 |
| G8 Ratings, prices, peers, portfolio | Inputs for ratings, market-implied, peer and portfolio work | None supplied: ratings, quotes, deal terms, peers, valuation inputs and portfolio limits are blank in the run settings | The annual report states only that secured debt carries investment grade ratings, without naming agencies or levels | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 38 |

### T2 Source register

| Source ID | Source | Document | Period covered | Authority tier | Quality assessment | Active representation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_xpo-20241231.htm.jsonl | Annual report on Form 10-K | FY2024, with FY2023 and FY2022 comparatives | 1 Primary filing | Audited annual statements by KPMG LLP; retained for comparatives and the prior debt table | Supplied page-tagged text, one active representation | 10-K_2024-12-31_xpo-20241231.htm.jsonl, page 1 |
| S2 | 10-K_2025-12-31_xpo-20251231.htm.jsonl | Annual report on Form 10-K | FY2025, with FY2024 and FY2023 comparatives | 1 Primary filing | Audited annual statements by KPMG LLP; controls FY2025 and year-end 2025 balances | Supplied page-tagged text, one active representation | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 1 |
| S3 | 10-Q_2026-03-31_xpo-20260331.htm.jsonl | Quarterly report on Form 10-Q | Q1 2026 (three months ended 2026-03-31) | 1 Primary filing | Unaudited interim statements; later quarters may restate | Supplied page-tagged text, one active representation | 10-Q_2026-03-31_xpo-20260331.htm.jsonl, page 1 |
| S4 | 10-Q_2026-06-30_xpo-20260630.htm.jsonl | Quarterly report on Form 10-Q | Q2 2026 and first half 2026 | 1 Primary filing | Unaudited interim statements | Supplied page-tagged text, one active representation | 10-Q_2026-06-30_xpo-20260630.htm.jsonl, page 1 |
| S5 | 10-Q_2026-09-30_xpo-20260930.htm.jsonl | Quarterly report on Form 10-Q | Q3 2026 and nine months 2026 | 1 Primary filing | Unaudited interim statements; controls the latest balance sheet, debt table and liquidity | Supplied page-tagged text, one active representation | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 1 |

### T4 Content-to-module map

| Capability | Evidence demand | Content located | Mapping status | Readiness | Limitation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Financial foundation | Annual and interim income statement, balance sheet, cash flow, debt table, cash interest, adjusted EBITDA | Annual statements FY2025 and FY2024; interim statements Q1, Q2 and Q3 2026; debt table at 2026-09-30 and 2025-12-31; cash paid for interest; segment adjusted EBITDA with reconciliation to net income | Recommended | READY_WITH_LIMITATIONS | No stand-alone fourth-quarter statement; interim figures unaudited; adjusted EBITDA is the issuer's segment measure | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 2–4, 9–10, 13 |
| Business & governance | Business description, segments, customers, employees, management, transactions | Segment note, executive summary, European divestiture authorisation, insider plans and chief executive agreements | Recommended | READY_WITH_LIMITATIONS | No ownership table or sponsor disclosure in the sources read; the European sale has no stated terms or timing | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 23–25, 41 |
| Fundamental credit | Debt structure, liquidity, leverage, cash flow, covenants, risks | Debt table, facility terms, liquidity statement, receivables programme, contingencies, share repurchases | Recommended | READY_WITH_LIMITATIONS | Covenant levels, ratings and market pricing are not supplied; conclusions rest on the filings alone | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 13, 15–17, 33–38 |
| Liquidity | Cash, undrawn committed facilities, letters of credit, maturities | Cash, revolving facility availability, letter of credit facility, total liquidity statement | Not selected in this run; content available | READY | Letter of credit facility is uncommitted | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 15, 33 |
| Refinancing & LME | Maturity ladder, recent refinancings, market access | Maturity ladder at 2025-12-31 and May 2026 term loan refinancing | Not selected in this run; content available | READY_WITH_LIMITATIONS | Ladder is stated at 2025-12-31 only; no market prices | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 102 |
| Rates, FX & hedging | Swap notionals, floating-rate exposure, currency mix | Derivative table and hedge descriptions | Not selected in this run; content available | READY | Fair value of swaps only; no sensitivity table located | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 11–13 |
| Legal & covenants | Executed credit agreement and indentures | Filing summaries of facilities only | Not selected in this run; blocked on documents | CONDITIONAL | The executed agreements are not in the effective source set | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 15 |
| Covenant capacity | Covenant definitions, levels and issuer reported figures | Statement of compliance and ratio names only | Not selected in this run; blocked on documents | CONDITIONAL | Levels and definitions are not in the effective source set | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 103 |
| Structural priority and recovery | Guarantor and collateral perimeter, intercreditor terms | Summary of lien and guarantee terms for the secured notes and term loans | Not selected in this run; blocked on documents | CONDITIONAL | Guarantor financials and intercreditor terms are not supplied | 10-K_2025-12-31_xpo-20251231.htm.jsonl, pages 105–106 |
| Ratings & triggers | Agency ratings and rating-linked terms | Statement that secured debt is investment grade rated, no agency or level named | Not selected in this run; inapplicable without ratings | BLOCKED | No rating is supplied | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 38 |
| Market-implied risk and security selection | Bond prices, spreads, quotes | None | Not selected in this run; inapplicable without quotes | BLOCKED | No quote or deal term is supplied | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 13 |
| Peer benchmark | Peer set and peer metrics | None | Not selected in this run; inapplicable without peers | BLOCKED | The run names no peers | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 1 |
| Changes since the last run | Earlier run of the same issuer and pathway | None | Not selected in this run; inapplicable | BLOCKED | First run of this pathway | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 1 |

### T6 Evidence trace

| Trace ID | Readiness statement | Evidence | Lineage class | Source |
| --- | --- | --- | --- | --- |
| E1 | The latest balance sheet is at 2026-09-30 | Condensed balance sheet at 2026-09-30 with 2025-12-31 comparative | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 2 |
| E2 | The latest debt table gives principal and carrying value by instrument | Debt table at 2026-09-30 and 2025-12-31 | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 13 |
| E3 | The issuer reports adjusted EBITDA by segment with a reconciliation to net income | Segment note tables and reconciliation | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 9–10 |
| E4 | Cash paid for interest is stated for each period | Supplemental cash flow disclosure | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 4 |
| E5 | Liquidity is stated as cash plus revolver availability | Liquidity statement and facility terms | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, pages 15, 33 |
| E6 | The maturity ladder is stated at year-end 2025 | Principal payment obligations table | Directly Sourced | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 102 |
| E7 | Covenant levels are not printed | Compliance statements and ratio names without thresholds, apart from a pricing step in the term loan | Directly Sourced | 10-K_2025-12-31_xpo-20251231.htm.jsonl, pages 103–104 |
| E8 | Interim quarterly statements for Q1 and Q2 2026 are available | Condensed statements in each quarterly report | Directly Sourced | 10-Q_2026-06-30_xpo-20260630.htm.jsonl, pages 2–4 |
| E9 | The annual statements cover FY2025 and FY2024 | Consolidated statements in the annual reports | Directly Sourced | 10-K_2025-12-31_xpo-20251231.htm.jsonl, pages 77–79 |
| E10 | Events after 2026-10-29 are not covered | Signature date of the latest report against the as-of date | Analyst Inference | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 42 |
| E11 | The business may be sold in part: a European divestiture authorisation remains in effect without terms | Statement in the business overview | Directly Sourced | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 25 |
| E12 | Executed legal documents, ratings, quotes and peers are absent | Run settings list none | Analyst Inference | Run settings (not an issuer source) |

### P3 Input inventory

| Input ID | Source | Content class | Pages | Entity | Reporting period | Currency and unit | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| I1 | 10-K_2024-12-31_xpo-20241231.htm.jsonl | Annual report with audited statements | 135 | XPO, Inc. consolidated | Year ended 2024-12-31 | USD millions except per share data | 10-K_2024-12-31_xpo-20241231.htm.jsonl, page 1 |
| I2 | 10-K_2025-12-31_xpo-20251231.htm.jsonl | Annual report with audited statements | 131 | XPO, Inc. consolidated | Year ended 2025-12-31 | USD millions except per share data | 10-K_2025-12-31_xpo-20251231.htm.jsonl, page 1 |
| I3 | 10-Q_2026-03-31_xpo-20260331.htm.jsonl | Quarterly report with unaudited statements | 33 | XPO, Inc. consolidated | Quarter ended 2026-03-31 | USD millions except per share data | 10-Q_2026-03-31_xpo-20260331.htm.jsonl, page 2 |
| I4 | 10-Q_2026-06-30_xpo-20260630.htm.jsonl | Quarterly report with unaudited statements | 41 | XPO, Inc. consolidated | Quarter and six months ended 2026-06-30 | USD millions except per share data | 10-Q_2026-06-30_xpo-20260630.htm.jsonl, page 2 |
| I5 | 10-Q_2026-09-30_xpo-20260930.htm.jsonl | Quarterly report with unaudited statements | 42 | XPO, Inc. consolidated | Quarter and nine months ended 2026-09-30 | USD millions except per share data | 10-Q_2026-09-30_xpo-20260930.htm.jsonl, page 2 |

## Calculations

| ID | Calculation | Inputs | Result |
| --- | --- | --- | --- |
| C1 | Days from the latest signature date to the as-of date | Signed 2026-10-29; as-of 2026-11-18 | 20 days |

## Gaps

- Executed credit agreements, indentures and any amendments are not supplied. The filings summarise the facilities, so covenant definitions, levels, baskets and release mechanics cannot be established from them.
- Credit ratings, bond prices, deal terms, peer data and portfolio limits are not supplied, so ratings, market-implied, peer and portfolio work cannot be done for this run.
- No source covers the period after the latest quarterly report was signed on 2026-10-29. Later financing, trading or operating events are not established.

## Next module

The orchestrator selects the next module.
