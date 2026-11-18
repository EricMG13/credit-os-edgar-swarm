---
issuer_id: www-110471
module_id: CP-0
module_name: SourceReadiness
analysis_date: 2026-11-18
run_id: www-110471-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
module_status: Complete
---

## Request

Wolverine World Wide Inc /De/ (issuer www-110471), as of 2026-11-18, credit snapshot pathway. The scope is the readiness of the five supplied SEC filings for the Financial foundation, Business & governance and Fundamental credit work, for the current period Q3 2026 (quarter ended 2026-10-03) against the prior period FY2025.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-28_www-20241228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended December 28, 2024, audited by Ernst & Young LLP | 2025-02-20 | 7239e33c4ae03b27f5635b1a953f7f93069ffa5bc28afa6ba494b2d8b1ccb420 | Checked for identity, period coverage, the superseded credit facilities and the original fiscal 2024 amounts |
| 10-K_2026-01-03_www-20260103.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 3, 2026 (53 weeks), audited by Ernst & Young LLP | 2026-02-27 | f58252240bbbfa7d9b61184a9217c945b56b2be2e0cc93102849cc1e20eab894 | Checked for the audited baseline, the recast fiscal 2024 amounts, debt and facility terms, claims outside debt, governance references and exhibits |
| 10-Q_2026-04-04_www-20260404.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 4, 2026 (unaudited) | 2026-05-14 | 607918af6fedbad373330ee245ab98ff6facb9118bcfa5632ff51201c6fc6044 | Checked for first-quarter coverage and the 2026 facility and covenant statements |
| 10-Q_2026-07-04_www-20260704.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 4, 2026 (unaudited) | 2026-08-13 | 5a09204c9fb474b4e2579452f2b10c4ffadd01196c6342344def825b064d76f3 | Checked for second-quarter coverage and the 2026 facility and covenant statements |
| 10-Q_2026-10-03_www-20261003.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 3, 2026 (unaudited) | 2026-11-12 | e7b2d4756d04f34834477b48b11b534f653fbd89b9d3fad410ef29da659129b1 | Checked for the latest period, debt, liquidity, claims outside debt, litigation and events up to the signature date |

No earlier module output was supplied to this module.

## Findings

### Bottom line

The five supplied filings support the requested financial, business and credit work on Wolverine World Wide, but they cannot support covenant headroom, ratings or board-level governance conclusions. The latest filing covers the quarter ended October 3, 2026 and was signed six days before the as-of date, so the evidence on debt, liquidity and earnings is current.
Basis: 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45; calculation C8

Prior-year amounts must come from the 2025 annual report, which recasts fiscal 2024 for the change from LIFO to FIFO inventory accounting, and any LTM measure spans 53 weeks because fiscal 2025 was a 53-week year. The credit agreement, notes indenture, proxy statement, ratings and covenant levels are absent, so creditors should treat covenant headroom, security terms beyond the filings' summaries and ownership detail as not established.
Basis: 10-K_2026-01-03_www-20260103.htm.jsonl, pages 78–79; 10-K_2024-12-28_www-20241228.htm.jsonl, page 64; 10-K_2026-01-03_www-20260103.htm.jsonl, page 68; 10-K_2026-01-03_www-20260103.htm.jsonl, page 87; 10-K_2026-01-03_www-20260103.htm.jsonl, page 117; 10-K_2026-01-03_www-20260103.htm.jsonl, page 121; calculation C10

### T1 - Input gate

| Gate item | Result | Source |
|---|---|---|
| Objective | Credit snapshot of the issuer from its filings: the financial foundation, the business and governance profile and the fundamental credit view; no portfolio, valuation, peer, legal-document or management-bridge input was supplied | Not applicable: run setting |
| Reporting entity and perimeter | Wolverine World Wide, Inc., a Delaware corporation listed on the New York Stock Exchange (symbol WWW), reporting consolidated with its subsidiaries; it is the registrant and not a subsidiary inside a parent's combined filing, so there is no parent-level or sibling figure to separate | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 4 |
| Debt perimeter | The 4.000% senior notes and the revolving facility are obligations of the registrant, guaranteed by domestic subsidiaries; no separate financial information for guarantor or non-guarantor subsidiaries is printed | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| Noncontrolling interests | USD 20.2 million at 2026-10-03, inside total stockholders' equity of USD 533.9 million | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5 |
| Fiscal calendar | 52- or 53-week year ending on the Saturday nearest December 31; fiscal 2025 had 53 weeks, fiscal 2024 and 2023 had 52 weeks each and fiscal 2026 has 52 weeks | 10-K_2026-01-03_www-20260103.htm.jsonl, page 68; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 8 |
| Run dates and periods | As-of date and cutoff 2026-11-18; current period Q3 2026; prior period FY2025 | Not applicable: run setting |
| Latest source | Form 10-Q for the quarter ended 2026-10-03, signed 2026-11-12, six days before the as-of date | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45 |
| Source set | Two annual reports (fiscal 2024 and fiscal 2025) and three quarterly reports (Q1, Q2 and Q3 2026), all primary SEC filings of the registrant at authority tier 1 | 10-K_2024-12-28_www-20241228.htm.jsonl; 10-K_2026-01-03_www-20260103.htm.jsonl; 10-Q_2026-04-04_www-20260404.htm.jsonl; 10-Q_2026-07-04_www-20260704.htm.jsonl; 10-Q_2026-10-03_www-20261003.htm.jsonl |
| Inputs not supplied | Ratings, quotes, peers, deal terms, portfolio, prior case, management bridge and executed legal documents: none supplied; blank run settings are not read as zero | Not applicable: run setting |
| Gate result | Pass for the requested modules: identity and periods match the run, the latest period is six days old at the as-of date and each requested evidence demand has primary support; the limits in the Gaps section restrict covenant, rating, market and governance conclusions | Not applicable: assessment of the rows above |

### T2 - Source register

| Source | Original filing | Authority tier | Active representation | Coverage | Limitation |
|---|---|---|---|---|---|
| 10-K_2024-12-28_www-20241228.htm.jsonl | Form 10-K, fiscal year ended 2024-12-28 (52 weeks), audited | Tier 1, primary filing | Visible text, 133 pages, one active representation | Fiscal 2024, 2023 and 2022 statements and notes; the facilities in force before 2025-09-24 | Fiscal 2024 and 2023 amounts predate the retrospective LIFO to FIFO change and are superseded by the 2025 annual report; its Term Facility and its USD 800.0 million revolver were replaced |
| 10-K_2026-01-03_www-20260103.htm.jsonl | Form 10-K, fiscal year ended 2026-01-03 (53 weeks), audited | Tier 1, primary filing | Visible text, 125 pages, one active representation | Fiscal 2025, 2024 and 2023 statements and notes, recast for the LIFO to FIFO change; year-end contractual obligations; exhibit list | 53-week year; Items 10 to 14 of Part III are incorporated by reference to a proxy statement that is not supplied |
| 10-Q_2026-04-04_www-20260404.htm.jsonl | Form 10-Q, quarter ended 2026-04-04, unaudited | Tier 1, primary filing | Visible text, 39 pages, one active representation | First quarter of 2026 with first quarter of 2025 comparatives | Interim notes only; refers to the 2025 annual report for accounting policies |
| 10-Q_2026-07-04_www-20260704.htm.jsonl | Form 10-Q, quarter ended 2026-07-04, unaudited | Tier 1, primary filing | Visible text, 40 pages, one active representation | Second quarter and first half of 2026 with 2025 comparatives | Interim notes only; refers to the 2025 annual report for accounting policies |
| 10-Q_2026-10-03_www-20261003.htm.jsonl | Form 10-Q, quarter ended 2026-10-03, unaudited | Tier 1, primary filing | Visible text, 45 pages, one active representation | Third quarter and nine months of 2026 with 2025 comparatives; balance sheet at 2026-10-03, 2026-01-03 and 2025-09-27 | Interim notes only; latest source, signed 2026-11-12 |

### T4 - Content-to-module map

| Evidence demand | Source | Module | Disposition | Readiness | Limitation |
|---|---|---|---|---|---|
| Annual statements for fiscal 2023 to 2025: income statement, balance sheet and cash flows | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 63–66 | Financial foundation | Selected | READY_WITH_LIMITATIONS | Fiscal 2025 had 53 weeks; fiscal 2024 and 2023 are on the recast FIFO basis |
| Interim statements for 2026: Q1, Q2, Q3 and nine months with 2025 comparatives | 10-Q_2026-04-04_www-20260404.htm.jsonl, pages 4–6; 10-Q_2026-07-04_www-20260704.htm.jsonl, pages 4–6; 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 4–7 | Financial foundation | Selected | READY_WITH_LIMITATIONS | Unaudited; no standalone fourth quarter of 2025, which exists only by difference |
| Accounting change and prior-period amounts | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 78–79; 10-K_2024-12-28_www-20241228.htm.jsonl, pages 64–65 | Financial foundation | Selected | READY_WITH_LIMITATIONS | Use the recast fiscal 2024 amounts from the 2025 annual report; the 2024 annual report holds the original amounts |
| Debt instruments, facility terms, guarantees, security and maturities | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 86–88 | Financial foundation; Fundamental credit | Selected | READY_WITH_LIMITATIONS | Notes and revolver are printed in full; call and redemption terms of the notes are not printed and the indenture and credit agreement texts are not supplied |
| Liquidity: cash, foreign cash, unborrowed revolver and letters of credit | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 5, 15, 37–38; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 51–52 | Financial foundation; Fundamental credit | Selected | READY | Revolver availability is printed net of borrowings and standby letters of credit and ties to the facility terms |
| Covenant statements | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15; 10-K_2026-01-03_www-20260103.htm.jsonl, page 87 | Fundamental credit | Selected | READY_WITH_LIMITATIONS | Test names and a compliance statement only; levels, definitions, step-downs, reported ratios and headroom are not printed |
| Claims outside debt: operating leases, pension and SERP, receivables purchase agreement, purchase and royalty commitments, environmental reserve and consent decree | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 5, 11–12, 16–17, 22, 24–26; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 53, 88, 94 | Financial foundation; Fundamental credit | Selected | READY_WITH_LIMITATIONS | None of these sits inside the debt figure; the contractual obligations table is printed only for fiscal 2025 year-end, and the quarter prints minimum royalties and advertising only |
| Litigation and environmental remediation | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 21–25; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 102–105 | Fundamental credit | Selected | READY_WITH_LIMITATIONS | The filing states that loss beyond recorded reserves cannot be estimated where remediation is ongoing |
| Segment, brand, channel and geographic revenue and operating profit | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 12–13, 27–28; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 106–108 | Financial foundation; Business & governance | Selected | READY | Operating segments changed from Q3 2026 while the reportable segments did not |
| Business description, brands, strategy, customers and sourcing | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 5–14; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29 | Business & governance | Selected | READY | Filing text only; no investor presentation or earnings release |
| Ownership and control | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 43, 117 | Business & governance | Selected | READY_WITH_LIMITATIONS | Share count and record-holder count only; the beneficial ownership table sits in the proxy statement, which is not supplied |
| Governance, board and compensation | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 41–43, 116–117, 120 | Business & governance | Selected | READY_WITH_LIMITATIONS | Executive officers, auditor and control statements only; board, committees, independence and compensation sit in the proxy statement |
| Corporate history, divestitures and licensing | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 45, 108–111 | Business & governance | Selected | READY | Covers transactions from 2023 to 2025 only |
| Latest-quarter and subsequent events | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 27, 29–30, 37, 40, 44 | Financial foundation; Business & governance | Selected | READY_WITH_LIMITATIONS | Nothing is supplied after the 2026-11-12 signature date |
| Near-term liquidity and refinancing evidence | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 14–15, 37–39; 10-K_2026-01-03_www-20260103.htm.jsonl, page 88 | Liquidity; Refinancing & LME | Not selected | READY_WITH_LIMITATIONS | The same pages as the debt and liquidity rows; the maturity schedule is printed for fiscal 2025 year-end only |
| Hedging and rate exposure | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 16–17, 43; 10-K_2026-01-03_www-20260103.htm.jsonl, pages 88–89 | Rates, FX & hedging | Not selected | READY_WITH_LIMITATIONS | Hedge notional and fair value are printed; no variable-rate debt at 2026-10-03 |
| Executed credit agreement, notes indenture and covenant definitions (not supplied; listed as exhibits only) | 10-K_2026-01-03_www-20260103.htm.jsonl, pages 121, 123 | Legal & covenants; Covenant capacity | Not selected | CONDITIONAL | The documents are not in the source set and the run declares no legal documents |
| Credit ratings and rating triggers | Not supplied: the filings state no rating | Ratings & triggers | Not selected | CONDITIONAL | No rating evidence in the source set or the run settings |
| Market prices, spreads and quotes | Not supplied: the run lists no quotes | Market-implied risk | Not selected | CONDITIONAL | No market evidence in the source set or the run settings |
| Peer set | Not supplied: the run sets no peer source | Peer benchmark | Not selected | CONDITIONAL | No peer financials in the source set |
| Management guidance and projections | Not supplied: the filings print no outlook figures | Forward credit model | Not selected | CONDITIONAL | Forward assumptions would be the analyst's own |
| Comparison with an earlier run | Not applicable: first run of this pathway | Changes since the last run | Inapplicable | Not applicable | No earlier run exists to compare |

### T6 - Evidence trace

| Evidence ID | Evidence | Value | Original filing | Source |
|---|---|---|---|---|
| E01 | Registrant identity | Wolverine World Wide, Inc.; Delaware; Commission file number 001-06024; New York Stock Exchange symbol WWW | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1 |
| E02 | Latest period and signature date | Quarterly period ended 2026-10-03; signed 2026-11-12 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45 |
| E03 | Shares outstanding | 82,086,831 common shares at 2026-10-26 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1 |
| E04 | Fiscal calendar in the latest quarter | 52- or 53-week year ending on the Saturday nearest December 31; fiscal 2026 has 52 weeks and fiscal 2025 had 53 weeks; first three quarters of 13 weeks and a fourth quarter of 13 or 14 weeks | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 8 |
| E05 | Fiscal year lengths | Fiscal 2025 had 53 weeks; fiscal 2024 and fiscal 2023 had 52 weeks each | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 68 |
| E06 | Total debt | USD 547.4 million at 2026-10-03, USD 621.7 million at 2026-01-03 and USD 676.4 million at 2025-09-27, after unamortized deferred financing costs of USD 2.6 million, USD 3.3 million and USD 3.6 million | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14 |
| E07 | Senior notes | USD 550.0 million 4.000% senior notes due 2029-08-15, issued 2021-08-26, interest paid semi-annually, guaranteed by substantially all domestic subsidiaries | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E08 | Revolving Facility terms | USD 600.0 million commitment maturing 2030-09-24; total debt capacity up to USD 850.0 million including permitted incremental debt; swingline USD 75.0 million; letter of credit subfacility USD 50.0 million; SOFR margin 1.25% to 2.25% and base rate margin 0.25% to 1.25%, set by the net total leverage ratio | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E09 | Revolver borrowings | Nil at 2026-10-03 (the filing states no borrowings outstanding); USD 75.0 million at 2026-01-03; USD 130.0 million at 2025-09-27 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E10 | Letters of credit under the revolver | USD 23.4 million at 2026-10-03; USD 14.5 million at 2026-01-03; USD 14.0 million at 2025-09-27 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E11 | Unborrowed revolver | USD 576.6 million at 2026-10-03; USD 510.5 million at 2026-01-03; USD 456.0 million at 2025-09-27, net of borrowings and standby letters of credit | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 37; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 38 |
| E12 | Cash | USD 148.1 million at 2026-10-03, of which USD 112.7 million was held in foreign jurisdictions | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 38 |
| E13 | Revolver security and guarantees | Guaranteed by substantially all material domestic subsidiaries and secured by substantially all personal and real property of the company and its material domestic subsidiaries, subject to exceptions | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E14 | Financial covenants | Maximum Consolidated Leverage Ratio and minimum Consolidated Interest Coverage Ratio, defined in the credit agreement; compliance with all covenants stated at 2026-10-03; levels, step-downs and reported ratios are not printed | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| E15 | Debt maturities at fiscal 2025 year-end | USD 75.0 million in 2026 and USD 550.0 million in 2029; none in 2027, 2028, 2030 or later | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 88 |
| E16 | Superseded facilities | At 2024-12-28 a Term Facility of USD 32.5 million due 2026-10-21 and a USD 800.0 million revolver; replaced on 2025-09-24 by the USD 600.0 million revolver | Form 10-K, fiscal years ended 2024-12-28 and 2026-01-03 | 10-K_2024-12-28_www-20241228.htm.jsonl, page 86; 10-K_2024-12-28_www-20241228.htm.jsonl, page 87; 10-K_2026-01-03_www-20260103.htm.jsonl, page 87 |
| E17 | Receivables purchase agreement | Sells up to USD 125.0 million of receivables, maturing 2028-09-25; USD 125.0 million sold and derecognized at 2026-10-03; unsold receivables held as collateral USD 60.3 million; outside the debt figure | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, pages 11–12 |
| E18 | Operating lease liabilities | Current USD 36.6 million and non-current USD 100.7 million at 2026-10-03; outside the debt figure | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5 |
| E19 | Pension and SERP | Accrued pension liabilities USD 53.0 million at 2026-10-03; funded status deficit USD 60.8 million at 2026-01-03 (USD 4.4 million current and USD 56.4 million accrued); outside the debt figure | Form 10-Q, quarter ended 2026-10-03; Form 10-K, fiscal year ended 2026-01-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-K_2026-01-03_www-20260103.htm.jsonl, page 94 |
| E20 | Contractual obligations at fiscal 2025 year-end | Purchase obligations USD 315.4 million, all within one year; operating lease obligations USD 168.9 million; SERP USD 45.6 million; municipal water improvements USD 8.2 million; USD 61.3 million paid against the USD 69.5 million consent-decree cap | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 53 |
| E21 | Environmental reserve | USD 21.4 million at 2026-10-03: USD 8.4 million expected within twelve months and USD 13.0 million over up to 25 years; consent-decree cap of USD 69.5 million on the municipal water works | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 22; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 24; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 25 |
| E22 | PFAS litigation | One pending matter, the 2025 Suit; liabilities of USD 8.5 million recorded at 2026-10-03 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 23 |
| E23 | Minimum royalties and advertising | Minimum royalties USD 0.5 million, USD 1.3 million, USD 1.4 million and USD 1.5 million for 2026 to 2029; minimum advertising USD 3.0 million for 2027 and USD 3.1 million for 2028 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 25 |
| E24 | Hedging and rate exposure | Foreign exchange hedge notional USD 335.9 million at 2026-10-03 with a maximum term of 538 days; no variable-rate debt at 2026-10-03 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 16; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 43 |
| E25 | Latest-quarter results | Q3 2026 revenue USD 505.4 million and operating profit USD 89.7 million; nine-month 2026 revenue USD 1,469.4 million | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 4 |
| E26 | IEEPA tariff refunds | Tariffs paid USD 35.9 million; refunds received USD 35.3 million including USD 1.3 million of interest; USD 33.9 million recognized in earnings; tariff refunds of USD 32.3 million recognized in Q3 2026 lowered corporate expenses | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 29; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 37 |
| E27 | Dividend after quarter-end | USD 0.10 per share declared 2026-11-02 for holders of record on 2027-01-04 | Form 10-Q, quarter ended 2026-10-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 40 |
| E28 | Management and segment change | Separation and release agreement with Susan Kuhn, President, Active Group in the 2025 annual report, effective 2026-10-31, filed as an exhibit; from Q3 2026 that position was eliminated and the operating segments became Merrell, Saucony, Chaco, Sweaty Betty and the Work Group, with the reportable segments unchanged | Form 10-Q, quarter ended 2026-10-03; Form 10-K, fiscal year ended 2026-01-03 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 27; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 44; 10-K_2026-01-03_www-20260103.htm.jsonl, page 42 |
| E29 | Fiscal 2024 amounts in the two annual reports | Operating profit USD 101.0 million as originally reported and USD 97.5 million as adjusted; net earnings USD 51.5 million and USD 48.8 million; total assets USD 1,668.8 million and USD 1,674.4 million | Form 10-K, fiscal years ended 2024-12-28 and 2026-01-03 | 10-K_2024-12-28_www-20241228.htm.jsonl, page 64; 10-K_2024-12-28_www-20241228.htm.jsonl, page 65; 10-K_2026-01-03_www-20260103.htm.jsonl, page 63; 10-K_2026-01-03_www-20260103.htm.jsonl, page 64 |
| E30 | Cause of the recast | LIFO to FIFO change made in Q3 2025 and applied retrospectively; effect on fiscal 2024 cost of goods sold of USD 3.5 million, on finished products of USD 7.2 million and on deferred income taxes of USD 1.6 million (a decrease) | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 78; 10-K_2026-01-03_www-20260103.htm.jsonl, page 79 |
| E31 | Part III by reference | Items 10 to 14 are incorporated by reference to the definitive proxy statement for the annual meeting expected on 2026-05-07; the proxy statement is not in the source set | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 116; 10-K_2026-01-03_www-20260103.htm.jsonl, page 117; 10-K_2026-01-03_www-20260103.htm.jsonl, page 120 |
| E32 | Indenture and credit agreement | Senior notes indenture dated 2021-08-26 (trustee The Huntington National Bank) and the form of notes, and the 2025 Replacement Facility Amendment and Reaffirmation Agreement dated 2025-09-24 (JP Morgan Chase Bank, N.A. as administrative agent), are incorporated by reference to earlier filings; the texts are not supplied | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 121; 10-K_2026-01-03_www-20260103.htm.jsonl, page 123 |
| E33 | Auditor | Ernst & Young LLP audited the fiscal 2025 financial statements and internal control over financial reporting | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 116 |
| E34 | Record holders | 596 stockholders of record at 2026-02-06; searches of the filings found no sponsor or controlling-holder description | Form 10-K, fiscal year ended 2026-01-03 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 43 |

### P3 - Input inventory

| Source | Original file | Original sha256 | Original bytes | Active sha256 | Pages | Entity | Period |
|---|---|---|---|---|---|---|---|
| 10-K_2024-12-28_www-20241228.htm.jsonl | 10-K_2024-12-28_www-20241228.htm | cfd36778a89d1d401d4faf6ea55226f1e3f4158268cdecce881492e5431b2c77 | 2258543 | 7239e33c4ae03b27f5635b1a953f7f93069ffa5bc28afa6ba494b2d8b1ccb420 | 133 | Wolverine World Wide, Inc. | Fiscal year ended 2024-12-28 |
| 10-K_2026-01-03_www-20260103.htm.jsonl | 10-K_2026-01-03_www-20260103.htm | cf9ca4517fca30b7f2dae1214e49a0f3bab98f5385f148d01529ec0ca548c4f2 | 2308820 | f58252240bbbfa7d9b61184a9217c945b56b2be2e0cc93102849cc1e20eab894 | 125 | Wolverine World Wide, Inc. | Fiscal year ended 2026-01-03 |
| 10-Q_2026-04-04_www-20260404.htm.jsonl | 10-Q_2026-04-04_www-20260404.htm | e2aec61837d90325c794f87b53bda36b7b2f22bb436c9b3a9f07516644b40258 | 929494 | 607918af6fedbad373330ee245ab98ff6facb9118bcfa5632ff51201c6fc6044 | 39 | Wolverine World Wide, Inc. | Quarter ended 2026-04-04 |
| 10-Q_2026-07-04_www-20260704.htm.jsonl | 10-Q_2026-07-04_www-20260704.htm | 9393fbb88bf496ad61f072732ef11bb6a55c63d52359bf74e4a837fa0739e3d1 | 1243647 | 5a09204c9fb474b4e2579452f2b10c4ffadd01196c6342344def825b064d76f3 | 40 | Wolverine World Wide, Inc. | Quarter ended 2026-07-04 |
| 10-Q_2026-10-03_www-20261003.htm.jsonl | 10-Q_2026-10-03_www-20261003.htm | f0332dee6dcc438a3fbaa0e11fb3f425911e4a37f81eae561509809764d5b791 | 1257227 | e7b2d4756d04f34834477b48b11b534f653fbd89b9d3fad410ef29da659129b1 | 45 | Wolverine World Wide, Inc. | Quarter ended 2026-10-03 |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-20 | day | 2025-02-20 | Form 10-K for the fiscal year ended 2024-12-28 signed by the registrant | Historical — signed "Date: February 20, 2025" | 10-K_2024-12-28_www-20241228.htm.jsonl, page 132 | Earlier annual report; its fiscal 2024 amounts are superseded by the recast amounts in the 2025 annual report |
| 2026-02-27 | day | 2026-02-27 | Form 10-K for the fiscal year ended 2026-01-03 (53 weeks) signed by the registrant | Historical — signed "Date: February 27, 2026" | 10-K_2026-01-03_www-20260103.htm.jsonl, page 124 | Controlling annual report: audited, with recast fiscal 2024 and 2023 comparatives |
| 2026-05-07 | day | 2026-02-27 | Annual meeting of stockholders | Scheduled — "expected to be held on May 7, 2026" | 10-K_2026-01-03_www-20260103.htm.jsonl, page 116 | The proxy statement carrying board, governance and ownership detail belongs to this meeting and is not in the source set |
| 2026-05-14 | day | 2026-05-14 | Form 10-Q for the quarter ended 2026-04-04 signed by the registrant | Historical — signed "May 14, 2026" | 10-Q_2026-04-04_www-20260404.htm.jsonl, page 39 | First-quarter 2026 report with 2025 comparatives |
| 2026-08-13 | day | 2026-08-13 | Form 10-Q for the quarter ended 2026-07-04 signed by the registrant | Historical — signed "August 13, 2026" | 10-Q_2026-07-04_www-20260704.htm.jsonl, page 40 | Second-quarter 2026 report with 2025 comparatives |
| 2026-11-12 | day | 2026-11-12 | Form 10-Q for the quarter ended 2026-10-03 signed by the registrant | Historical — signed "November 12, 2026" | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45 | Latest source, six days before the as-of date; nothing later is supplied |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 20 |
| Calculated | 5 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 0 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 6 |

## Calculations

| Calculation ID | Test | Inputs | Result | Stated figure | Source |
|---|---|---|---|---|---|
| C1 | Total debt at 2026-10-03 | Senior notes 550.0 plus revolver borrowings 0.0 less unamortized deferred financing costs 2.6, in USD million | 547.4 | 547.4 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15 |
| C2 | Total debt at 2026-01-03 | Senior notes 550.0 plus revolver borrowings 75.0 less unamortized deferred financing costs 3.3, in USD million | 621.7 | 621.7 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 14 |
| C3 | Unborrowed revolver at 2026-10-03 | Commitment 600.0 less borrowings 0.0 less letters of credit 23.4, in USD million | 576.6 | 576.6 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 15; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 37 |
| C4 | Unborrowed revolver at 2026-01-03 | Commitment 600.0 less borrowings 75.0 less letters of credit 14.5, in USD million | 510.5 | 510.5 | 10-K_2026-01-03_www-20260103.htm.jsonl, page 51; 10-K_2026-01-03_www-20260103.htm.jsonl, page 87 |
| C5 | Balance sheet tie at 2026-10-03 | Current liabilities 387.2 plus long-term debt 547.4 plus accrued pension liabilities 53.0 plus deferred income taxes 30.0 plus non-current lease liabilities 100.7 plus other liabilities 25.1 plus total stockholders' equity 533.9, in USD million | 1,677.3 | Total assets 1,677.3 | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5 |
| C6 | Effect of the LIFO to FIFO recast on fiscal 2024 operating profit | Original 101.0 less adjusted 97.5, in USD million | 3.5 | Effect on cost of goods sold 3.5 | 10-K_2024-12-28_www-20241228.htm.jsonl, page 64; 10-K_2026-01-03_www-20260103.htm.jsonl, page 63; 10-K_2026-01-03_www-20260103.htm.jsonl, page 78 |
| C7 | Effect of the recast on fiscal 2024 total assets | Adjusted 1,674.4 less original 1,668.8, in USD million | 5.6 | Finished products 7.2 less deferred income taxes 1.6 equals 5.6 | 10-K_2024-12-28_www-20241228.htm.jsonl, page 65; 10-K_2026-01-03_www-20260103.htm.jsonl, page 64; 10-K_2026-01-03_www-20260103.htm.jsonl, page 79 |
| C8 | Age of the latest source at the as-of date | 2026-11-12 to 2026-11-18 | 6 days | Not stated | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45 |
| C9 | Delay from period end to signature of the latest source | 2026-10-03 to 2026-11-12 | 40 days | Not stated | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 1; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 45 |
| C10 | Length of an LTM window ending 2026-10-03 built from these filings | 2025-09-27 to 2026-01-03 is 98 days (14 weeks); 2026-01-03 to 2026-10-03 is 273 days (39 weeks) | 371 days, 53 weeks | Fiscal 2025 had 53 weeks | 10-Q_2026-10-03_www-20261003.htm.jsonl, page 4; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 5; 10-K_2026-01-03_www-20260103.htm.jsonl, page 68 |
| C11 | LTM revenue is calculable from the supplied filings | Fiscal 2025 revenue 1,874.3 plus nine months 2026 revenue 1,469.4 less nine months 2025 revenue 1,356.8, in USD million | 1,986.9 for the 53 weeks ended 2026-10-03 | Not stated | 10-K_2026-01-03_www-20260103.htm.jsonl, page 63; 10-Q_2026-10-03_www-20261003.htm.jsonl, page 4 |

## Gaps

| Gap ID | Gap or conflict | Type | Severity | Affected work | Effect on readiness | Remediation | Status |
|---|---|---|---|---|---|---|---|
| G1 | The executed credit agreement and the senior notes indenture are not supplied, and the filings print no covenant levels, definitions, step-downs or reported covenant ratios | Source gap | MATERIAL | Legal & covenants; Covenant capacity; the covenant statements in Fundamental credit | Covenant headroom, notes security and priority stay not established; compliance is only the issuer's own statement | Supply the 2025 credit agreement with its amendments, the 2021 indenture or a compliance certificate | Open |
| G2 | The definitive proxy statement is not supplied; Items 10 to 14 of Part III are incorporated by reference to it | Source gap | MINOR | Business & governance (board, committees, independence, compensation, beneficial ownership) | Governance view is limited to executive officers, auditor and control statements | Supply the 2026 definitive proxy statement | Open |
| G3 | No credit rating, market price, spread or peer set is supplied and the filings state no rating | Source gap | MINOR | Ratings & triggers; Market-implied risk; Peer benchmark | None for the requested modules | Supply the evidence if those modules are selected | Open |
| G4 | No management guidance, earnings release or presentation is supplied and the filings print no outlook figures | Source gap | MINOR | Forward credit model; Earnings changes | Forward views would rest on the analyst's own assumptions | Supply the latest earnings release and any guidance | Open |
| G5 | No document is dated after 2026-11-12, so events between that date and the as-of date cannot be checked | Coverage gap | MINOR | All modules | Subsequent events stop at the quarterly report | Supply any current report filed since 2026-11-12 | Open |
| G6 | No standalone fourth quarter of 2025 and no 2025 quarterly reports are supplied; the 2025 quarters appear only as comparatives in the 2026 quarterly reports | Coverage gap | MINOR | Financial foundation | The fourth quarter of 2025 exists only as fiscal 2025 less nine months 2025 | None needed if the difference is shown | Open |
| G7 | An LTM window ending 2026-10-03 spans 53 weeks because fiscal 2025 had 53 weeks and its fourth quarter had 14 weeks | Period and definition | MINOR | Financial foundation; Fundamental credit | LTM measures are not like-for-like with a 52-week year | State the 53-week basis beside every LTM figure | Open |
| G8 | Fiscal 2024 amounts differ between the 2024 and 2025 annual reports because the LIFO to FIFO change was applied retrospectively | Conflict | MINOR | Financial foundation | Resolved by rule: the 2025 annual report controls fiscal 2024 and 2023; the 2024 annual report shows only the original amounts | Use the recast amounts and show the original only to explain the change | Resolved |
| G9 | The 2024 annual report describes a Term Facility due 2026-10-21 and a USD 800.0 million revolver that were replaced on 2025-09-24 | Version | MINOR | Financial foundation; Fundamental credit | Resolved by rule: only the facility in force at 2026-10-03 is current | Describe the superseded facilities only as history | Resolved |

## Next module

The orchestrator selects the next module.
