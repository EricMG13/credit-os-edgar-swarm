---
issuer_id: rrc-315852
module_id: CP-0
module_name: Source readiness
analysis_date: 2026-11-18
run_id: rrc-315852-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# Source readiness: Range Resources Corp (rrc-315852), as of 2026-11-18

## Request

Range Resources Corp (issuer rrc-315852), as of 2026-11-18, on the credit_snapshot pathway (the full credit assessment). This run asks for Source readiness, Financial foundation, Business & governance and Fundamental credit. The scope is whether the five supplied SEC filings can support that work, and what stays unsupported.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_rrc.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-25 | af3e831de20bab2e8080ac53dda18470e8ef8f51d3e7696ab46e2006adccede9 | FY2024 audited statements, debt note and covenant levels; FY2023 and FY2022 income and cash flow columns |
| 10-K_2025-12-31_rrc.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 | b37e9894de70dc98ae33c4f54a3594fae7c9c0e322fe266547e1de92ee6e7584 | FY2025 audited statements, debt note, covenant levels, business description, executive officers, exhibit index |
| 10-Q_2026-03-31_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-21 | 8912ea8893f9e37355082bc56c57589bef2ab40f68df5a8272cfc97f1730383d | Q1 2026 unaudited statements, debt and liquidity |
| 10-Q_2026-06-30_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-21 | 61f21be4e900f20f2715526bd1eda19e12050235ef80f9e644e8da1f0cc2551e | Q2 2026 and six-month unaudited statements, debt and liquidity |
| 10-Q_2026-09-30_rrc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-27 | 5f22b9d6b4ae8c0fa2605705fd5765842826e27b4fdbc6d3490b900d914c70da | Q3 2026 and nine-month unaudited statements, debt, liquidity, commitments, derivatives and the subsequent-event note on the EQT merger |

Document dates are the signature dates printed in each filing. No analytical module output was supplied to this module, because it is the first module of the run.

## Findings

### Bottom line

The five supplied Range Resources filings support a credit snapshot of the company to the end of Q3 2026, but not credit work on the pending EQT merger or on any security's legal terms. Every overlapping item tested across the annual and interim statements agrees, so financial, business and fundamental credit work can proceed within stated limits. Covenant headroom, ratings, market pricing and combined-company leverage stay not established until the credit agreement, indentures, merger agreement and EQT filings are supplied. The latest filing was signed 22 days before the as-of date, and nothing later was supplied.
Basis: 10-Q_2026-09-30_rrc.htm.jsonl, pages 18, 50; calculation C-2

### T1 Input gate

| Gate item | Value | Status | Source |
|---|---|---|---|
| Issuer and reporting entity | Range Resources Corporation, a Delaware corporation listed on the NYSE under RRC; statements are consolidated for the company and its subsidiaries | Stated | 10-Q_2026-09-30_rrc.htm.jsonl, page 2; 10-K_2025-12-31_rrc.htm.jsonl, page 9 |
| Objective | The selected pathway's use case: the full credit assessment (whether to own this issuer, in which instrument, and why); the run settings state no other objective and no research question | Recorded | Run settings (not issuer evidence) |
| Requested modules | Source readiness (CP-0); Financial foundation (CP-1); Business & governance (CP-1A); Fundamental credit (CP-2) | Stated | Run settings (not issuer evidence) |
| As-of date and cutoff | 2026-11-18 for both | Stated | Run settings (not issuer evidence) |
| Current and prior period | Current period Q3 2026; prior period FY2025 | Stated | Run settings (not issuer evidence) |
| Issuer sources | Two annual reports (FY2024, FY2025) and three interim reports (Q1, Q2 and Q3 2026), each a Form 10-K or Form 10-Q | Supplied | 10-Q_2026-09-30_rrc.htm.jsonl, page 1 |
| Latest document date against cutoff | The latest filing was signed 2026-10-27; no supplied document is dated after the cutoff | Within cutoff | 10-Q_2026-09-30_rrc.htm.jsonl, page 50 |
| Currency and unit | USD; statements are printed in thousands, except per-share data | Stated | 10-Q_2026-09-30_rrc.htm.jsonl, page 2 |
| Analytical module outputs | None supplied; this is the first module of the run | Not applicable | Run settings (not issuer evidence) |
| Executed legal documents | None declared in the run settings | Not supplied: no credit agreement or indenture in the source set | Run settings (not issuer evidence) |
| Portfolio and fund limits | None supplied | Not supplied: no portfolio workbook | Run settings (not issuer evidence) |
| Ratings, market quotes and peer set | None supplied | Not supplied: the run settings carry none | Run settings (not issuer evidence) |
| Earlier run for comparison | None; first run of this pathway for this issuer | Not applicable | Run settings (not issuer evidence) |
| Readiness for the requested work | READY_WITH_LIMITATIONS for Financial foundation, Business & governance and Fundamental credit; limits are listed under Gaps | Recorded | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–4, 8–9, 18 |

### T2 Source register

| Source ID | Source | Document | Reporting period | Authority | Active representation | Quality and usability | Source |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2024-12-31_rrc.htm.jsonl | Annual report on Form 10-K | Year ended 2024-12-31 (FY2024), with FY2023 and FY2022 income and cash flow columns | Tier 1 primary filing; audited, with an Ernst & Young LLP opinion dated 2025-02-25 | Extracted visible text, the only active representation | Usable for FY2024 statements, debt and covenant levels; tables are flattened to one cell per line | 10-K_2024-12-31_rrc.htm.jsonl, pages 102–103 |
| S2 | 10-K_2025-12-31_rrc.htm.jsonl | Annual report on Form 10-K | Year ended 2025-12-31 (FY2025), with FY2024 and FY2023 income and cash flow columns | Tier 1 primary filing; audited, with an Ernst & Young LLP opinion dated 2026-02-24 | Extracted visible text, the only active representation | Usable for FY2025 statements, debt, covenant levels, business and officers; tables are flattened to one cell per line | 10-K_2025-12-31_rrc.htm.jsonl, pages 104–109 |
| S3 | 10-Q_2026-03-31_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three months ended 2026-03-31 (Q1 2026) | Tier 1 primary filing; unaudited interim statements | Extracted visible text, the only active representation | Usable for Q1 2026 statements, debt and liquidity; tables are flattened to one cell per line | 10-Q_2026-03-31_rrc.htm.jsonl, pages 2–4 |
| S4 | 10-Q_2026-06-30_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three and six months ended 2026-06-30 (Q2 2026) | Tier 1 primary filing; unaudited interim statements | Extracted visible text, the only active representation | Usable for Q2 2026 and six-month statements, debt and liquidity; tables are flattened to one cell per line | 10-Q_2026-06-30_rrc.htm.jsonl, pages 2–4 |
| S5 | 10-Q_2026-09-30_rrc.htm.jsonl | Quarterly report on Form 10-Q | Three and nine months ended 2026-09-30 (Q3 2026) | Tier 1 primary filing; unaudited interim statements | Extracted visible text, the only active representation | Usable for the latest balance sheet, Q3 and nine-month results, debt, liquidity and the merger note; tables are flattened to one cell per line | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–4, 18 |

### T4 Content-to-module map

| Module | Active representation | Evidence demand | Readiness | Disposition | Limitation and reason | Source |
|---|---|---|---|---|---|---|
| Financial foundation (CP-1) | Extracted text of all five filings | Statements for FY2024, FY2025 and Q1 to Q3 2026; debt by instrument; cash flow; derivative and commitment notes | READY_WITH_LIMITATIONS | Recommended; requested in this run | Q4 2025 is not reported alone, though the FY2025 and nine-month 2025 inputs are in two filings; debt-to-EBITDAX as the credit agreement defines it is not reconciled; the merger signed after quarter end is outside the balance sheet | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–109; 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–4, 8–9, 18 |
| Business & governance (CP-1A) | Extracted text of the FY2025 annual report and the Q3 2026 report | Business description, properties, executive officers, risk factors, merger terms | READY_WITH_LIMITATIONS | Recommended; requested in this run | Directors, committees, ownership and compensation are incorporated by reference to a proxy statement that is not supplied; the merger is described only in Range's own quarterly report | 10-K_2025-12-31_rrc.htm.jsonl, pages 9, 22, 154; 10-Q_2026-09-30_rrc.htm.jsonl, pages 18, 42–49 |
| Fundamental credit (CP-2) | Extracted text of all five filings | Debt, liquidity, leverage, cash flow and business risk drawn together | READY_WITH_LIMITATIONS | Recommended; requested in this run | No ratings, market quotes, peer set or executed legal documents are supplied; the pending merger leaves combined-company credit not established | 10-Q_2026-09-30_rrc.htm.jsonl, pages 8–9, 34; 10-K_2025-12-31_rrc.htm.jsonl, page 131 |
| Earnings changes (CP-1B) | Extracted text of the three 2026 quarterly reports and the FY2025 annual report | Quarter and year-on-year comparatives; management discussion | READY_WITH_LIMITATIONS | Recommended; not requested in this run | No earnings release, presentation or guidance document is supplied | 10-Q_2026-09-30_rrc.htm.jsonl, pages 3, 22 |
| Peer benchmark (CP-1C) | None | Peer financials and multiples | CONDITIONAL | Blocked until a peer set is supplied | The run settings carry no peer source; the annual report names a peer group for its stock performance graph and performance units, without financial data | 10-K_2025-12-31_rrc.htm.jsonl, page 77 |
| Earnings quality (CP-1D) | Extracted text of the FY2025 annual report and the Q3 2026 report | Cash conversion, non-cash items, derivative effects, working capital | READY_WITH_LIMITATIONS | Recommended; not requested in this run | Non-GAAP reconciliations beyond the annual report's derivative adjustment are not supplied | 10-Q_2026-09-30_rrc.htm.jsonl, page 4; 10-K_2025-12-31_rrc.htm.jsonl, page 84 |
| Downside (CP-2A) | Extracted text of the FY2025 annual report and the Q3 2026 report | Statements, hedge positions, borrowing base, commitments | READY_WITH_LIMITATIONS | Recommended; not requested in this run | The run settings carry no downside assumptions; hedge detail is limited to the quarterly report tables | 10-Q_2026-09-30_rrc.htm.jsonl, pages 9–12, 17 |
| Liquidity (CP-2D) | Extracted text of the FY2025 annual report and the Q3 2026 report | Cash, drawn facility, letters of credit, borrowing base, facility maturity | READY_WITH_LIMITATIONS | Recommended; not requested in this run | The credit agreement and any letter-of-credit schedule are not supplied | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2, 9, 34 |
| Rates, FX & hedging (CP-2E) | Extracted text of the Q3 2026 report and the FY2025 annual report | Derivative volumes, prices and fair values; floating-rate debt | READY_WITH_LIMITATIONS | Recommended; not requested in this run | Hedge counterparty terms are not supplied | 10-Q_2026-09-30_rrc.htm.jsonl, pages 10–12, 35, 37–38 |
| Forward credit model (CP-2G) | Extracted text of the FY2025 annual report and the Q3 2026 report | Forecast drivers and guidance | CONDITIONAL | Blocked until forecast assumptions are supplied | The run settings carry no forecast assumptions; the annual report gives a 2026 capital budget range and modest production growth without a volume, and the Q3 2026 report says spending is consistent with that budget | 10-K_2025-12-31_rrc.htm.jsonl, pages 13, 91; 10-Q_2026-09-30_rrc.htm.jsonl, page 33 |
| Ratings & triggers (CP-2H) | None | Rating actions and rating-based triggers | CONDITIONAL | Blocked until ratings are supplied | The annual report says debt ratings are received from the agencies but prints none | 10-K_2025-12-31_rrc.htm.jsonl, page 49 |
| Security selection (CP-3) | Extracted text of the Q3 2026 report | Instrument terms and pricing | CONDITIONAL | Blocked until instrument terms and prices are supplied | The notes outstanding are listed in the debt note, but no indenture or price is supplied | 10-Q_2026-09-30_rrc.htm.jsonl, page 8; 10-K_2025-12-31_rrc.htm.jsonl, page 155 |
| Refinancing & LME (CP-3C) | Extracted text of the FY2025 annual report and the Q3 2026 report | Maturity schedule, facility maturity, borrowing base, call terms | READY_WITH_LIMITATIONS | Recommended; not requested in this run | Indenture call and covenant terms are not supplied | 10-K_2025-12-31_rrc.htm.jsonl, page 131; 10-Q_2026-09-30_rrc.htm.jsonl, pages 8–9 |
| Market-implied risk (CP-3D) | None | Quotes and spreads | CONDITIONAL | Blocked until quotes are supplied | The run settings carry no market quotes | Run settings (not issuer evidence) |
| Legal & covenants (CP-4) | Extracted text, summaries only | Executed credit agreement and indentures | CONDITIONAL | Blocked until executed documents are supplied | The filings summarise covenants; the exhibit index lists a credit agreement and indentures that are not in the source set | 10-K_2025-12-31_rrc.htm.jsonl, pages 131, 155; 10-Q_2026-09-30_rrc.htm.jsonl, pages 8, 50 |
| Recovery & fulcrum (CP-4C) | None | Executed security and claim documents in a restructuring | Not applicable | Inapplicable on the supplied evidence | The filings state covenant compliance and describe no restructuring | 10-Q_2026-09-30_rrc.htm.jsonl, page 8 |
| Evidence validation (CP-5) | Outputs of the analytical modules | Checking module outputs against the filings | READY | Recommended; not requested in this run | No source limitation beyond those listed for the modules it checks | Run settings (not issuer evidence) |
| Committee decision (CP-6) | None | Fund mandate, exposures and limits | CONDITIONAL | Blocked until a portfolio workbook is supplied | No portfolio or fund limits are supplied | Run settings (not issuer evidence) |
| Changes since the last run (CP-8) | None | An earlier run of this pathway for this issuer | Not applicable | Inapplicable | This is the first run of the pathway for this issuer | Run settings (not issuer evidence) |
| Short credit snapshot (CP-L10) | None | A one-page snapshot | Not applicable | Inapplicable | The module belongs to the short snapshot pathway, not this one | Run settings (not issuer evidence) |
| Research questions (CP-DR) | None | Named research needs | Not applicable | Inapplicable in this run | The run settings carry no research question; the missing documents are listed under Gaps | Run settings (not issuer evidence) |

### T6 Evidence trace

| Evidence ID | Evidence | Original source | Active representation | Source |
|---|---|---|---|---|
| E01 | Reporting entity, quarter end and share count of the latest report | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 1 |
| E02 | Balance sheet at 2026-09-30 and 2025-12-31 | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 2–3 |
| E03 | Income statement, three and nine months 2026 and 2025 | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 3 |
| E04 | Cash flow statement, nine months 2026 and 2025 | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 4 |
| E05 | Debt table: bank debt and the 4.75% senior notes due 2030 | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 8 |
| E06 | Bank facility terms, borrowing base, commitments and undrawn letters of credit | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 9 |
| E07 | Guarantor structure and release provisions | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 10 |
| E08 | Covenant compliance statements, with no covenant levels printed | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 8, 34 |
| E09 | Liquidity discussion, share repurchase authorization and shelf registration | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 34–35 |
| E10 | Divestiture contract obligation (exit costs) | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 16 |
| E11 | Transportation, gathering and processing commitments | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, page 17 |
| E12 | Derivative volumes, hedge prices and fair values | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 10–12 |
| E13 | EQT merger agreement: fixed exchange ratio, ownership split and termination fees | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 18–20 |
| E14 | Merger conditions, termination rights and merger risk factors | 10-Q_2026-09-30_rrc.htm | 10-Q_2026-09-30_rrc.htm.jsonl | 10-Q_2026-09-30_rrc.htm.jsonl, pages 42–49 |
| E15 | Q2 2026 balance sheet, income statement, cash flow and debt note | 10-Q_2026-06-30_rrc.htm | 10-Q_2026-06-30_rrc.htm.jsonl | 10-Q_2026-06-30_rrc.htm.jsonl, pages 2–4, 7–8 |
| E16 | Q1 2026 balance sheet, income statement, cash flow and debt note | 10-Q_2026-03-31_rrc.htm | 10-Q_2026-03-31_rrc.htm.jsonl | 10-Q_2026-03-31_rrc.htm.jsonl, pages 2–4, 6–7 |
| E17 | FY2025 balance sheet, income statement and cash flow statement | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, pages 107–109 |
| E18 | FY2025 debt note, guarantees, covenant levels and maturity schedule | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, pages 129–131 |
| E19 | FY2025 liquidity discussion and 2026 capital budget | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, pages 90–91 |
| E20 | FY2025 business description, operating area and reserves | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, page 9 |
| E21 | FY2025 executive officers; Part III items incorporated from the proxy statement | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, pages 22, 154 |
| E22 | FY2025 auditor reports by Ernst & Young LLP | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, pages 104–107 |
| E23 | FY2024 balance sheet, income statement and cash flow statement | 10-K_2024-12-31_rrc.htm | 10-K_2024-12-31_rrc.htm.jsonl | 10-K_2024-12-31_rrc.htm.jsonl, pages 102–104 |
| E24 | FY2024 debt note, covenant levels and maturity schedule | 10-K_2024-12-31_rrc.htm | 10-K_2024-12-31_rrc.htm.jsonl | 10-K_2024-12-31_rrc.htm.jsonl, pages 122–124 |
| E25 | FY2024 auditor report by Ernst & Young LLP | 10-K_2024-12-31_rrc.htm | 10-K_2024-12-31_rrc.htm.jsonl | 10-K_2024-12-31_rrc.htm.jsonl, pages 99–102 |
| E26 | Exhibit index naming the credit agreement and indentures, which are not supplied | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, page 155; 10-Q_2026-09-30_rrc.htm.jsonl, page 50 |
| E27 | Statement that debt ratings are received, with no rating printed | 10-K_2025-12-31_rrc.htm | 10-K_2025-12-31_rrc.htm.jsonl | 10-K_2025-12-31_rrc.htm.jsonl, page 49 |
| E28 | Signature dates of the five filings | Five original filings | Five extracted texts | 10-K_2024-12-31_rrc.htm.jsonl, page 149; 10-K_2025-12-31_rrc.htm.jsonl, page 156; 10-Q_2026-03-31_rrc.htm.jsonl, page 36; 10-Q_2026-06-30_rrc.htm.jsonl, page 41; 10-Q_2026-09-30_rrc.htm.jsonl, page 50 |

### P3 Input sources

| Input ID | Original file | Original sha256 as printed in the extract | Entity and perimeter | Period | Version and links | Source |
|---|---|---|---|---|---|---|
| I1 | 10-K_2024-12-31_rrc.htm | af3eb90c740cd58bb3d71fa83345e0b4c066e608b31611cea712846ee9fa5f50 | Range Resources Corporation, consolidated with its subsidiaries | FY2024 (year ended 2024-12-31) | Earlier annual report; the FY2025 annual report repeats the FY2024 comparatives; FY2022 income and cash flow columns appear only here | 10-K_2024-12-31_rrc.htm.jsonl, page 1 |
| I2 | 10-K_2025-12-31_rrc.htm | fc8fac571e5d5c164e06f3a291d190832e17dd3713f2ad83e5eed96b846d08e2 | Range Resources Corporation, consolidated with its subsidiaries; guarantor subsidiaries not materially different from the consolidated statements | FY2025 (year ended 2025-12-31) | Controls the year-end 2025 position; carries FY2024 and FY2023 comparatives | 10-K_2025-12-31_rrc.htm.jsonl, page 1 |
| I3 | 10-Q_2026-03-31_rrc.htm | 11892f7bac9dd73c96bc3063e9fc42b21dea955fd539574666ab4f1770cce110 | Range Resources Corporation, consolidated with its subsidiaries | Q1 2026 (three months ended 2026-03-31) | Interim report; superseded by the Q2 and Q3 reports for cumulative 2026 figures | 10-Q_2026-03-31_rrc.htm.jsonl, page 1 |
| I4 | 10-Q_2026-06-30_rrc.htm | 90632a85e328bd48c4477ff2f040d94ca0208029bbe06df768f65e482028868d | Range Resources Corporation, consolidated with its subsidiaries | Q2 2026 (three and six months ended 2026-06-30) | Interim report; superseded by the Q3 report for cumulative 2026 figures | 10-Q_2026-06-30_rrc.htm.jsonl, page 1 |
| I5 | 10-Q_2026-09-30_rrc.htm | 341bf294e0c2616320ad342baf4668d739b516344d9b8ab043a93734db1a4b4e | Range Resources Corporation, consolidated with its subsidiaries; guarantor subsidiaries not materially different from the consolidated statements | Q3 2026 (three and nine months ended 2026-09-30) | Controls the latest balance sheet and is the only source for the EQT merger | 10-Q_2026-09-30_rrc.htm.jsonl, pages 1, 10 |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-25 | day | 2025-02-25 | Annual report on Form 10-K for FY2024 signed | Historical — dated February 25, 2025 | 10-K_2024-12-31_rrc.htm.jsonl, page 149 | Earliest source; anchors FY2024 audited statements and the FY2022 and FY2023 income columns |
| 2026-02-24 | day | 2026-02-24 | Annual report on Form 10-K for FY2025 signed | Historical — dated February 24, 2026 | 10-K_2025-12-31_rrc.htm.jsonl, page 156 | Latest audited statements and covenant levels as of year-end 2025 |
| 2026-04-21 | day | 2026-04-21 | Quarterly report on Form 10-Q for Q1 2026 signed | Historical — dated April 21, 2026 | 10-Q_2026-03-31_rrc.htm.jsonl, page 36 | First 2026 interim statements |
| 2026-07-21 | day | 2026-07-21 | Quarterly report on Form 10-Q for Q2 2026 signed | Historical — dated July 21, 2026 | 10-Q_2026-06-30_rrc.htm.jsonl, page 41 | Second 2026 interim statements |
| 2026-10-25 | day | 2026-10-27 | Range Resources signed an all-stock merger agreement with EQT Corporation after the quarter end | Historical — subsequent event described in the Q3 2026 report | 10-Q_2026-09-30_rrc.htm.jsonl, page 18 | The only source for the merger; no merger agreement or EQT filing was supplied, so combined-company credit work is not supported |
| 2026-10-27 | day | 2026-10-27 | Quarterly report on Form 10-Q for Q3 2026 signed | Historical — dated October 27, 2026 | 10-Q_2026-09-30_rrc.htm.jsonl, page 50 | Latest source, 22 days before the as-of date; no later filing was supplied |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 39 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 22 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 9 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 7 |

## Calculations

All amounts are USD thousand as printed in the statements. Each row compares two figures that two filings both state, or counts what the source set holds; the rows cover only these items.

| Calculation ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C-1 | Count of filings | 2 annual reports plus 3 interim reports | 5 filings | 10-K_2024-12-31_rrc.htm.jsonl, page 1; 10-K_2025-12-31_rrc.htm.jsonl, page 1; 10-Q_2026-03-31_rrc.htm.jsonl, page 1; 10-Q_2026-06-30_rrc.htm.jsonl, page 1; 10-Q_2026-09-30_rrc.htm.jsonl, page 1 |
| C-2 | Days from the latest filing date to the as-of date | 2026-11-18 less 2026-10-27: 4 days left in October plus 18 days in November | 22 days | 10-Q_2026-09-30_rrc.htm.jsonl, page 50 |
| C-3 | Days from the latest period end to the as-of date | 2026-11-18 less 2026-09-30: 31 days in October plus 18 days in November | 49 days | 10-Q_2026-09-30_rrc.htm.jsonl, page 1 |
| C-4 | Debt at 2025-12-31: balance sheet against the Q3 comparative | Annual report: bank debt net 106,700 plus senior notes net 1,091,634 equals USD 1,198,334 thousand; Q3 report comparative total debt net of issuance costs USD 1,198,334 thousand | Difference USD 0 thousand | 10-K_2025-12-31_rrc.htm.jsonl, page 107; 10-Q_2026-09-30_rrc.htm.jsonl, page 8 |
| C-5 | Debt principal at 2025-12-31: components against the annual report's maturity schedule | Q3 report comparative: bank debt 118,000 plus 8.25% notes 600,000 plus 4.75% notes 500,000 equals USD 1,218,000 thousand; annual report maturity schedule total USD 1,218,000 thousand | Difference USD 0 thousand | 10-Q_2026-09-30_rrc.htm.jsonl, page 8; 10-K_2025-12-31_rrc.htm.jsonl, page 131 |
| C-6 | Total assets at 2025-12-31: annual report against the Q3 comparative | Annual report USD 7,421,948 thousand; Q3 report comparative USD 7,421,948 thousand | Difference USD 0 thousand | 10-K_2025-12-31_rrc.htm.jsonl, page 107; 10-Q_2026-09-30_rrc.htm.jsonl, page 2 |
| C-7 | FY2024 net income and 2024-12-31 total assets: FY2024 annual report against the FY2025 annual report | Net income USD 266,340 thousand in both; total assets USD 7,347,675 thousand in both | Differences USD 0 thousand and USD 0 thousand | 10-K_2024-12-31_rrc.htm.jsonl, pages 102–103; 10-K_2025-12-31_rrc.htm.jsonl, pages 107–108 |

The tie-outs found no conflict between sources for the items they cover. No other cross-source comparison was made in this module.

## Gaps

The source set carries the primary financial statements for the requested work, and lacks the legal, market and portfolio inputs below. Each missing item is a source request, not an estimate.

| Gap | Missing or limited evidence | Effect on the requested work | Remediation | Severity |
|---|---|---|---|---|
| Executed credit agreement, indentures and covenant levels | The filings summarise the bank facility and notes; the exhibit index lists a credit agreement and indentures that are not in the source set. The debt-to-EBITDAX ceiling and current-ratio floor are printed only in the annual reports; the quarterly reports state compliance without levels; EBITDAX as the credit agreement defines it is not reconciled in any filing | Covenant definitions, baskets, change-of-control terms and covenant headroom at 2026-09-30 are not calculable; Fundamental credit cannot conclude on covenant capacity | Supply the executed credit agreement, the 2030 notes indenture and the latest compliance certificate | MATERIAL |
| Merger documents | Only Range's own quarterly report describes the all-stock merger with EQT: fixed exchange ratio, ownership split, termination fees and closing conditions | No merger agreement, EQT filing, pro forma capital structure or treatment of Range's debt and facility at closing is available; whether the merger triggers the noteholders' repurchase right at 101% is not established | Supply the merger agreement, EQT's registration statement and current reports, and any pro forma data | MATERIAL |
| Credit ratings | The annual report says ratings are received from the agencies and prints none | Ratings & triggers and any ratings reference in Fundamental credit are not established | Supply current rating reports | MINOR |
| Market data and peers | No bond or loan quotes, spreads, current equity price or peer financials are supplied; the FY2025 annual report prints the non-affiliate equity market value only as of the end of Q2 2025 | Relative value, market-implied risk and instrument choice are not supported | Supply dated quotes and a peer set | MINOR |
| Portfolio and fund limits | No portfolio workbook is supplied | Committee decision cannot state fit or limits | Supply the portfolio workbook | MINOR |
| Proxy statement | Directors, committees, ownership and compensation are incorporated by reference to the annual meeting proxy statement | Business & governance cannot describe the board or shareholder base beyond the executive officers | Supply the proxy statement | MINOR |
| Earnings releases, presentations and guidance | None supplied; the annual report's 2026 outlook gives a capital budget range and modest production growth without a volume, and the filings print non-GAAP measures only for derivative fair value adjustments and PV-10 | Quantified production, cost and leverage guidance and adjusted earnings definitions are not established | Supply the latest earnings release and investor presentation | MINOR |
| Period after the latest filing | The latest filing was signed 22 days before the as-of date; no current report or other document after that was supplied | Events between 2026-10-27 and the as-of date, including any EQT registration filing, are not established | Supply filings dated after 2026-10-27 | MINOR |
| Representation limits | The extracted text flattens tables to one cell per line and carries no charts or images; a page is a text chunk, not a printed page | Column alignment and signs in tables are rebuilt by the reader from the page text | Check table figures against the original filing where a sign or column is unclear | MINOR |

## Next module

The orchestrator selects the next module.
