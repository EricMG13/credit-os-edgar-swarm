---
module_id: CP-0
issuer_id: gva-861459
analysis_date: 2026-11-18
issuer_name: Granite Construction Inc
pathway: credit_snapshot
run_id: gva-861459-2026-11-18-credit_snapshot-host
---

## Request

Source readiness for Granite Construction Inc (gva-861459), as of 2026-11-18, on the credit snapshot pathway. Scope: whether the five supplied SEC filings, covering fiscal 2024 and 2025 and the first three quarters of 2026, support the requested financial foundation, business and fundamental credit work.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_gva-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024 | 2025-02-13 (date signed) | 534d52cef6d622c0952233f2e7a6edae57d524686ee9a438797f58b6d478f4ba | Triaged for authority, period coverage and version links to the later annual report; read for the 2023 and 2024 statements, the debt note and the credit agreement as it stood at the end of 2024. |
| 10-K_2025-12-31_gva-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 | 2026-02-12 (date signed) | acfffbeb192fc1b8147c7479344ae15f2da7d84de95eb39ab0cc17fb958cc0ae | Triaged for authority and period coverage; read for the audited FY2025 statements, business description, debt, leases, benefit plans, segments and risk factors. |
| 10-Q_2026-03-31_gva-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-30 (date signed) | 0c05b0b0190bc3b6f38a5779e638e3dd5c08fa7c17ac2486d0329afc8e9b6d29 | Triaged for period coverage; read for the first-quarter 2026 statements and the February 2026 note exchange. |
| 10-Q_2026-06-30_gva-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-30 (date signed) | 0c4ffa4311c6b4ce5353c077c09151ea4f3382ee977879135f25202837e9621b | Triaged for period coverage; read for the first-half 2026 statements and the June 2026 senior notes issue. |
| 10-Q_2026-09-30_gva-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-29 (date signed) | ea9d11b31cea8dbbe5a21ee2ce19abee7e7258c96aeb4305b4293ecccee9442f | Triaged for period coverage and the latest balance sheet; read for the third-quarter and nine-month 2026 statements, debt, liquidity and segments. |

## Findings

### Bottom line

The five filings support a credit snapshot of Granite Construction Inc, so the financial, business and credit work can proceed on filed evidence, but creditors cannot test covenant headroom because the financial covenant levels in the credit agreement are not supplied.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 31–32; 10-K_2025-12-31_gva-20251231.htm.jsonl, page 145

Coverage runs from the 2024 annual report to the third-quarter 2026 report, signed 20 days before the cutoff, so the latest quarter is included and nothing postdates the cutoff. Ratings, market quotes, peer data, executed legal documents and portfolio inputs are not supplied, so work that depends on them is conditional.
Basis: 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 51; calculation calc-3

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Objective | Credit snapshot of Granite Construction Inc (ticker GVA) for a portfolio manager or credit committee reader who has not read the filings. No objective is stated beyond the pathway use case, so readiness is assessed against that use case. | Run settings (not issuer evidence) |
| Issuer and reporting entity | Granite Construction Incorporated, a Delaware corporation listed on the New York Stock Exchange. The statements are consolidated and include consolidated construction joint ventures (CCJVs), with non-controlling interests shown separately in equity. The parent is the listed holding company. | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 1–3 |
| As-of date and cutoff | As-of 2026-11-18; cutoff 2026-11-18 | Run settings (not issuer evidence) |
| Current and prior period | Current period Q3 2026 (quarter and nine months ended 2026-09-30); prior period FY2025 | Run settings (not issuer evidence) |
| Case kind | Public case, listed equity | Run settings (not issuer evidence) |
| Borrower, parent, guarantors, sponsor | Left blank in the run settings. The filings state that the 6.375% Senior Notes due 2034 are guaranteed on a senior unsecured basis by each domestic subsidiary that is a borrower or guarantor under the Credit Agreement. | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 25 |
| Ratings | None supplied in the run settings. The filings were searched for rating agency names and issuer ratings; the only hits are an equity index reference and a statement that derivative counterparties have high credit ratings, so no issuer credit rating is stated. | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 59, 79 |
| Quotes, valuation and peers | None supplied (no deal terms, quotes, market capitalisation or peer set in the run settings) | Run settings (not issuer evidence) |
| Attachments | No portfolio workbook, prior case, management bridge or legal documents declared | Run settings (not issuer evidence) |
| Research questions | None supplied | Run settings (not issuer evidence) |
| Preparation of the five filings | Listing, hashing and pinning was done by the launcher before this answer; no result is recorded here. | Run settings (not issuer evidence) |
| Source freshness | Latest document signed 2026-10-29; shares outstanding stated at 2026-10-23; cutoff 2026-11-18, which is 20 days after the signing date (calc-3). No document in the set is dated after the cutoff. | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 1, 51 |
| Validation status | READY_WITH_LIMITATIONS for the requested route (Financial foundation, Business & governance, Fundamental credit); limitations are listed in T4 and under Gaps | T4 below |

### T2 - Source register

| Source | Document and authority | Period covered | Quality and usability | Active representation | Limitations |
| --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_gva-20241231.htm.jsonl | Annual report on Form 10-K, primary filing (tier 1), with an audit report dated 2025-02-13 | Fiscal 2022 to 2024 statements of operations and cash flows; balance sheets at 2024-12-31 and 2023-12-31 | High. Audited statements, debt note and covenant description. FY2024 revenue 4,007,574 and total assets 3,025,655 (USD thousand) agree with the comparatives in the FY2025 annual report (calc-6). | Page-numbered text of the original document, the supplied .jsonl | Superseded for FY2024 by the FY2025 annual report comparatives; credit agreement shown as it stood before the August 2025 refinancing |
| 10-K_2025-12-31_gva-20251231.htm.jsonl | Annual report on Form 10-K, primary filing (tier 1), with an audit report dated 2026-02-12 | Fiscal 2023 to 2025 statements of operations and cash flows; balance sheets at 2025-12-31 and 2024-12-31 | High. Audited statements; debt note totals tie to the balance sheet (calc-5). | Page-numbered text of the original document, the supplied .jsonl | Part III items are incorporated by reference to a proxy statement that is not supplied; no non-GAAP EBITDA is reported |
| 10-Q_2026-03-31_gva-20260331.htm.jsonl | Quarterly report on Form 10-Q, primary filing (tier 1), unaudited | Quarter ended 2026-03-31; balance sheet at 2026-03-31 and 2025-12-31 | Medium to high. Unaudited condensed statements; reports the February 2026 note exchange and the April 2026 acquisition as a subsequent event. | Page-numbered text of the original document, the supplied .jsonl | Unaudited; superseded for the 2026 year-to-date by the later quarterly reports |
| 10-Q_2026-06-30_gva-20260630.htm.jsonl | Quarterly report on Form 10-Q, primary filing (tier 1), unaudited | Quarter and six months ended 2026-06-30; balance sheet at 2026-06-30 and 2025-12-31 | Medium to high. Unaudited condensed statements; reports the June 2026 senior notes issue and the embedded derivative recognised in May 2026. | Page-numbered text of the original document, the supplied .jsonl | Unaudited; superseded for the 2026 year-to-date by the third-quarter report |
| 10-Q_2026-09-30_gva-20260930.htm.jsonl | Quarterly report on Form 10-Q, primary filing (tier 1), unaudited | Quarter and nine months ended 2026-09-30; balance sheet at 2026-09-30 and 2025-12-31 | Medium to high. Latest filing in the set. Balance sheet foots (calc-4) and debt note ties to the balance sheet (calc-4). | Page-numbered text of the original document, the supplied .jsonl | Unaudited; financial covenant levels not printed; nine-month 2025 cash taxes paid revised for a new accounting standard (page 6) |

### P3 - Input sources

| Logical source | Original document | Entity | Reporting period | Authority | Version links |
| --- | --- | --- | --- | --- | --- |
| LS-1 | 10-K_2024-12-31_gva-20241231.htm.jsonl | Granite Construction Incorporated, consolidated | Fiscal year ended 2024-12-31, with 2023 and 2022 comparatives | Primary filing, audited | Earlier annual report; its 2024 figures reappear as comparatives in LS-2. The FY2025 annual report states it was filed with the SEC on 2025-02-14 (page 72). |
| LS-2 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Granite Construction Incorporated, consolidated | Fiscal year ended 2025-12-31, with 2024 and 2023 comparatives | Primary filing, audited | Later annual report; supplies the 2025-12-31 opening balances used by LS-3, LS-4 and LS-5 |
| LS-3 | 10-Q_2026-03-31_gva-20260331.htm.jsonl | Granite Construction Incorporated, consolidated | Quarter ended 2026-03-31 (three months) | Primary filing, unaudited | Follows LS-2; superseded for year-to-date figures by LS-4 and LS-5 |
| LS-4 | 10-Q_2026-06-30_gva-20260630.htm.jsonl | Granite Construction Incorporated, consolidated | Quarter and six months ended 2026-06-30 | Primary filing, unaudited | Follows LS-3; superseded for year-to-date figures by LS-5 |
| LS-5 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Granite Construction Incorporated, consolidated | Quarter and nine months ended 2026-09-30, with 2025 comparatives | Primary filing, unaudited | Latest period; carries 2025 nine-month comparatives that allow the fourth quarter of 2025 to be derived by difference (calc-1) |

### T4 - Content-to-module map

| Capability (module) | Evidence demand | Active source and locator | Mapping status | Readiness | Limitation |
| --- | --- | --- | --- | --- | --- |
| Financial foundation (CP-1) | Statements, debt note, leases, liquidity, segments and cash flow for fiscal 2023 to 2025 and the first three quarters of 2026 | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–96, 139–146; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–6, 24–32, 35–36 | Recommended | READY_WITH_LIMITATIONS | No reported adjusted EBITDA; no 2025 interim report as a separate document (2025 quarters come from comparative columns, fourth quarter by difference); covenant levels not supplied |
| Business & governance (CP-1A) | Business model, customers, segments, acquisitions, executive officers, risk factors | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 5–8, 22–23, 24–49; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 8–15, 37–41 | Recommended | READY_WITH_LIMITATIONS | Board, ownership and compensation sit in a proxy statement that is not supplied; no ownership percentages |
| Fundamental credit (CP-2) | Financial foundation and Business & governance outputs plus filed risk disclosures | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 24–49; 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 37–48 | Recommended | READY_WITH_LIMITATIONS | Depends on the two earlier modules; no ratings, quotes or peer data |
| Earnings changes (CP-1B) | Quarterly and nine-month comparisons, management drivers | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 39–43 | Not requested in this run | READY_WITH_LIMITATIONS | No earnings releases, call transcripts or guidance beyond a 2026 capital expenditure range |
| Earnings quality (CP-1D) | Non-cash items, working capital, cash conversion | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 5–6, 46–47 | Not requested in this run | READY_WITH_LIMITATIONS | Large non-cash convertible note items in 2026 need separate treatment |
| Liquidity (CP-2D) | Cash, marketable securities, revolver availability, letters of credit, joint venture cash | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 30–31, 44–46 | Not requested in this run | READY | Joint venture cash is not freely available to the issuer |
| Refinancing & LME (CP-3C) | Maturities, convertible notes, 2026 note exchange and redemption, new senior notes | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 24–31; 10-Q_2026-03-31_gva-20260331.htm.jsonl, pages 22–24 | Not requested in this run | READY | No market prices for the notes |
| Downside (CP-2A) | Stress inputs: margins, backlog, working capital, debt service | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 35–36, 40–41, 44–47 | Not requested in this run | READY_WITH_LIMITATIONS | Covenant levels needed for headroom tests are not supplied |
| Forward credit model (CP-2G) | Forecast drivers and base operands | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 46–47 | Not requested in this run | READY_WITH_LIMITATIONS | No management projections; capital expenditure range only |
| Rates, FX & hedging (CP-2E) | Interest rate swaps and variable-rate exposure | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 20; 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 79–80 | Not requested in this run | READY | Swaps cover a notional USD 350 million of the USD 600 million term loan; the latest report states no change in market risk exposure and gives no rate sensitivity |
| Ratings & triggers (CP-2H) | Issuer and instrument ratings, rating-linked triggers | None supplied | Not requested in this run | CONDITIONAL | No ratings in the run settings or the filings |
| Legal & covenants (CP-4) | Executed credit agreement and indentures | None supplied; filings summarise the terms only (10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 25–32) | Not requested in this run | CONDITIONAL | No executed legal documents declared or supplied |
| Covenant capacity (CP-4A) | Covenant levels and reported ratios | Levels not printed (10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 31–32) | Not requested in this run | CONDITIONAL | Levels and compliance ratios are not supplied, so capacity cannot be inferred |
| Structural priority, Intercreditor control, Recovery & fulcrum | Collateral, guarantor and intercreditor terms | Partial: 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 25, 30–31 | Not requested in this run | CONDITIONAL | No collateral schedule, guarantor list or intercreditor agreement supplied |
| Peer benchmark (CP-1C) | Peer financials | None supplied | Not requested in this run | CONDITIONAL | Peer source is none in the run settings |
| Security selection and Market-implied risk (CP-3, CP-3D) | Quotes, deal terms, market prices | Partial: fair values of the notes and term loan in 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 20; no quotes supplied | Not requested in this run | CONDITIONAL | Disclosed fair values are model-based Level 2 and Level 3 measures, not dealer quotes; no deal terms in the run settings |
| Committee decision (CP-6) | Portfolio limits and mandate | None supplied | Not requested in this run | CONDITIONAL | No portfolio workbook supplied |
| Evidence validation (CP-5) | Checks across the earlier modules against the filings | All five filings | Not requested in this run | READY | Applies once earlier modules exist |
| Changes since the last run (CP-8) | Earlier run of the same issuer and pathway | None | Inapplicable | Not applicable | First run of this pathway for this issuer |

### T6 - Evidence trace

| Evidence ID | Original source | Active representation | Locator | What it evidences |
| --- | --- | --- | --- | --- |
| EV-01 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | page 2 | Balance sheet at 2026-09-30: total assets USD 4,468,399 thousand; current maturities of long-term debt USD 381,686 thousand |
| EV-02 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | page 3 | Statement of operations: nine-month 2026 revenue USD 4,134,668 thousand; operating income USD 320,013 thousand |
| EV-03 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 5–6 | Nine-month cash flow statement: operating cash flow USD 404,270 thousand |
| EV-04 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | page 24 | Debt table at 2026-09-30: total debt USD 1,556,025 thousand |
| EV-05 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | page 25 | 6.375% Senior Notes due 2034, USD 600.0 million issued 2026-06-02, guaranteed by domestic subsidiaries |
| EV-06 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 26–30 | 3.25% Convertible Notes due 2030 and the 2026 settlement of the 3.75% Convertible Notes |
| EV-07 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 30–31 | Credit Agreement: revolver availability USD 588.8 million, letters of credit USD 11.2 million, term loan maturity 2030-08-05 |
| EV-08 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 31–32 | Financial covenants named (minimum interest coverage, maximum leverage); compliance stated; levels not printed |
| EV-09 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 35–36 | Segment revenue, gross profit, operating income and depreciation for Construction and Materials |
| EV-10 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | page 40 | Committed and awarded projects USD 7,455,470 thousand at 2026-09-30 |
| EV-11 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 44–46 | Liquidity: cash USD 480,289 thousand and total cash and securities USD 525,391 thousand |
| EV-12 | 10-Q_2026-09-30_gva-20260930.htm.jsonl | Page-numbered text of the original | pages 8–15 | Acquisitions: Kenny Seng Construction, Asphalt Terminal Entity, Warren Paving, Papich Construction, Cinderlite |
| EV-13 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Page-numbered text of the original | pages 92–96 | Audited FY2025 statements: revenue USD 4,424,379 thousand; operating cash flow USD 468,916 thousand |
| EV-14 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Page-numbered text of the original | pages 139–145 | FY2025 debt note, credit agreement terms, convertible notes and covenant description |
| EV-15 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Page-numbered text of the original | page 146 | Lease maturities: total future minimum lease payments USD 215,258 thousand |
| EV-16 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Page-numbered text of the original | pages 5–8 | Business description, strategy and acquisitions |
| EV-17 | 10-K_2025-12-31_gva-20251231.htm.jsonl | Page-numbered text of the original | page 6 | Largest customer: California Department of Transportation, 10.1% of 2025 revenue |
| EV-18 | 10-K_2024-12-31_gva-20241231.htm.jsonl | Page-numbered text of the original | pages 87–88, 131–132 | FY2024 balance sheet, statement of operations and debt note |
| EV-19 | 10-Q_2026-06-30_gva-20260630.htm.jsonl | Page-numbered text of the original | pages 24, 46–47 | June 2026 senior notes issue and the planned use of proceeds |
| EV-20 | 10-Q_2026-03-31_gva-20260331.htm.jsonl | Page-numbered text of the original | pages 6, 23–24 | February 2026 note exchange agreements and the April 2026 acquisition as a subsequent event |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-13 | day | 2025-02-13 | Annual report for fiscal 2024 signed | Historical — report signed | 10-K_2024-12-31_gva-20241231.htm.jsonl, page 83 | Earliest document in the set; sets the start of the evidence window |
| 2026-02-12 | day | 2026-02-12 | Annual report for fiscal 2025 signed | Historical — report signed | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 86 | Latest audited statements in the set |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — report signed | 10-Q_2026-03-31_gva-20260331.htm.jsonl, page 42 | First 2026 interim evidence; reports the note exchange completed in March 2026 |
| 2026-07-30 | day | 2026-07-30 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — report signed | 10-Q_2026-06-30_gva-20260630.htm.jsonl, page 55 | Reports the June 2026 senior notes issue |
| 2026-10-29 | day | 2026-10-29 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — report signed | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 51 | Latest document in the set, 20 days before the cutoff; defines the latest balance sheet |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 6 |
| Calculated | 3 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 3 |

## Calculations

| Calculation ID | Test | Inputs (USD thousand unless stated) | Result | Source |
| --- | --- | --- | --- | --- |
| calc-1 | Fourth quarter 2025 revenue derived by difference: FY2025 revenue less nine-month 2025 revenue | 4,424,379 less 3,259,009 | 1,165,370 | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| calc-2 | Twelve months to 2026-09-30 revenue: FY2025 plus nine-month 2026 less nine-month 2025 | 4,424,379 plus 4,134,668 less 3,259,009 | 5,300,038 | 10-K_2025-12-31_gva-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 3 |
| calc-3 | Days from the latest signing date to the cutoff: 2026-10-29 to 2026-11-18 | 2 days to 2026-10-31 plus 18 days | 20 days | 10-Q_2026-09-30_gva-20260930.htm.jsonl, page 51 |
| calc-4 | Third-quarter 2026 consistency: total liabilities plus total equity equals total assets, and current plus long-term debt equals the debt note total | Liabilities 1,905,853 plus 1,174,339 plus 150,641 plus 147,385 plus 93,482 equals 3,471,700; plus equity 996,699 equals 4,468,399. Debt 381,686 plus 1,174,339 equals 1,556,025. | Total assets 4,468,399 (agrees); debt 1,556,025 (agrees) | 10-Q_2026-09-30_gva-20260930.htm.jsonl, pages 2–3, 24 |
| calc-5 | Year-end 2025 debt note total: principal less issuance costs equals total debt, and equals current plus long-term debt | 373,750 plus 373,750 plus 600,000 less 8,371 equals 1,339,129; 375,896 plus 963,233 equals 1,339,129 | 1,339,129 (agrees) | 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93, 139 |
| calc-6 | Overlap test between annual reports: FY2024 revenue and total assets in the FY2024 report against the comparatives in the FY2025 report | Revenue 4,007,574 and total assets 3,025,655 in both | Agrees | 10-K_2024-12-31_gva-20241231.htm.jsonl, pages 87–88; 10-K_2025-12-31_gva-20251231.htm.jsonl, pages 92–93 |

## Gaps

| Gap | What is missing | Effect | Remediation |
| --- | --- | --- | --- |
| Covenant levels | The Credit Agreement's minimum interest coverage and maximum leverage levels, and the issuer's reported ratios, are not printed in any of the five filings. Compliance is stated as met at each period end. | Covenant headroom cannot be calculated or inferred; Covenant capacity and the headroom parts of Downside are conditional. | Executed Credit Agreement or compliance certificate |
| Executed legal documents | No credit agreement, indenture or intercreditor agreement is supplied; the filings summarise terms only. | Legal & covenants, Structural priority, Intercreditor control and Recovery & fulcrum rest on summaries. | Executed documents |
| Ratings, quotes and peers | No ratings, market quotes, deal terms or peer set are supplied. | Ratings & triggers, Security selection, Market-implied risk and Peer benchmark are conditional. | Dated rating and market evidence |
| Portfolio inputs | No portfolio workbook or mandate is supplied. | Committee decision states the fund's limits as not supplied. | Portfolio workbook |
| Proxy statement | Board composition, ownership and compensation are incorporated by reference to a proxy statement that is not supplied. | Governance and ownership analysis is limited to the executive officer list and risk factors. | Proxy statement |
| 2025 interim reports | No 2025 quarterly report is supplied as a separate document. | First, second and third quarter 2025 figures come from the comparative columns of the 2026 reports; the fourth quarter of 2025 is derived by difference (calc-1). | Not needed for the requested work |
| Adjusted EBITDA | The filings report no adjusted EBITDA or reconciliation. | EBITDA must be built from operating income and depreciation, depletion and amortization and labelled as calculated. | None; method note |

## Next module

The orchestrator selects the next module.
