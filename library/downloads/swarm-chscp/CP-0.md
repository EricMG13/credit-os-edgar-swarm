# CP-0 Source readiness for CHS INC (chscp), as of 2026-11-05

## Request

Source readiness for CHS INC (issuer id chscp), as of 2026-11-05, on the credit_snapshot pathway. Scope: whether the seven supplied SEC filings and earnings releases support the Financial foundation, Business & governance and Fundamental credit work, and what remains missing.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2026-08-31_chscp-20260831.htm.jsonl | Annual report on Form 10-K of CHS Inc. for the fiscal year ended August 31, 2026, with audited consolidated statements and notes | 2026-11-04 | 7af90f68bff1cc427159bcc12ffc87c427ce829f2621b0c4238922f45880492c | Date taken from the signature page; read for statements, debt note, liquidity, equities, segments, business and governance |
| 10-Q_2025-11-30_chscp-20251130.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended November 30, 2025 | 2026-01-07 | 3b343d46b4f667e29be99b08f7d799dc25471f06dbcbf91d62c596b40053bc50 | Date taken from the signature page; read for first-quarter statements, facilities and covenant wording |
| 10-Q_2026-02-28_chscp-20260228.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended February 28, 2026 | 2026-04-08 | 335ab8ab1983479e957ab5bcc688bac42f2a8847cb6800ad1d72a83671457084 | Date taken from the signature page; read for second-quarter and six-month statements and facilities |
| 10-Q_2026-05-31_chscp-20260531.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 31, 2026 | 2026-07-08 | d9720f91bf0c93fa122637a031df8f3b728863173bc1b8717d0a6e377caf2082 | Date taken from the signature page; read for third-quarter and nine-month statements and facilities |
| EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl | Press release on second quarter fiscal year 2026 earnings (Exhibit 99.1) | 2026-04-08 | 33496a1570da087ac1976522b03589f92cee4a9a2670952160166094e3791034 | Read for quarterly segment earnings and management commentary |
| EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl | Press release on third quarter fiscal year 2026 earnings (Exhibit 99.1) | 2026-07-08 | 9732954cd83cfd2faab08d34c8a937435e86ab588c7e99ee653b9179d1961e0c | Read for quarterly and nine-month segment earnings and management commentary |
| EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl | Press release on fiscal year 2026 earnings (Exhibit 99.1) | 2026-11-04 | cae53d4e6b095242a55a168a21c6d1a5d0c45880ba1e0b3a388701114a691f44 | Read for full-year segment earnings, fiscal 2027 distribution intent and announced projects |

No upstream analytical handoff was supplied to this module; it is the entry module of the run.

## Findings

### Bottom line

The seven supplied filings and releases are enough to run the Financial foundation, Business & governance and Fundamental credit work on CHS INC, but they cannot support any covenant level, rating or letter-of-credit conclusion.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–165

Creditors should read headroom statements as unverified, because the filings say only that minimum consolidated net worth and other financial ratios apply and that the company was in compliance. No document is dated after the as-of date: the latest, signed on 2026-11-04, is one day earlier. The fourth quarter must be derived from the annual report less nine months, because no standalone fourth-quarter statements were supplied.
Basis: 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 140; EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-01-07 | day | 2026-01-07 | Quarterly report for the quarter ended November 30, 2025 signed for the registrant | Historical — signed on behalf of the registrant | 10-Q_2025-11-30_chscp-20251130.htm.jsonl, page 44 | Dates the first-quarter balance sheet, facilities and covenant wording used for the quarterly series |
| 2026-04-08 | day | 2026-04-08 | Quarterly report for the quarter ended February 28, 2026 signed for the registrant | Historical — signed on behalf of the registrant | 10-Q_2026-02-28_chscp-20260228.htm.jsonl, page 49 | Dates the second-quarter and six-month statements and the securitization extension wording |
| 2026-04-08 | day | 2026-04-08 | Second quarter fiscal year 2026 earnings release issued | Historical — "today released results for its second quarter of fiscal year 2026" | EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl, page 1 | Reports the second-quarter net loss; its energy paragraph mislabels the quarter, recorded as a conflict |
| 2026-07-08 | day | 2026-07-08 | Quarterly report for the quarter ended May 31, 2026 signed for the registrant | Historical — signed on behalf of the registrant | 10-Q_2026-05-31_chscp-20260531.htm.jsonl, page 50 | Dates the nine-month statements and the latest interim debt balances before year end |
| 2026-07-08 | day | 2026-07-08 | Third quarter fiscal year 2026 earnings release issued | Historical — "today released results for its third quarter of fiscal year 2026" | EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl, page 1 | Supplies the nine-month segment earnings that the fourth quarter is derived against |
| 2026-11-04 | day | 2026-11-04 | Annual report for the fiscal year ended August 31, 2026 signed for the registrant | Historical — signed on its behalf on November 4, 2026 | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 140 | Latest filing in the set; one day before the as-of date, so nothing is after the cutoff |
| 2026-11-04 | day | 2026-11-04 | Fiscal year 2026 earnings release issued | Historical — "today reported net income of $1.1 billion" | EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 1 | Announces the fiscal 2027 cash distribution intent and two announced growth projects |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 15 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 3 |

### T1 Input gate

| Gate item | Finding | Gate result | Source |
| --- | --- | --- | --- |
| Objective | Credit snapshot of CHS INC as of 2026-11-05 through Financial foundation, Business & governance and Fundamental credit; the run supplies no portfolio, no prior run and no valuation inputs | READY_WITH_LIMITATIONS | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 3 |
| Reporting entity and perimeter | CHS Inc., a Minnesota agricultural cooperative, reports consolidated with its subsidiaries including CHS Capital, LLC; it has no common stock, and its five preferred series trade on Nasdaq (the run's ticker CHSCP is the 8% series) | Pass | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 1–3 |
| Perimeter caveat | Equity-method investments (CF Nitrogen 7.86%, Ventura Foods 50%, Ardent Mills 12%) are not consolidated, and guarantees for nonconsolidated companies are a separate claim; CHS Capital notes payable are inside consolidated notes payable | Pass | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 157–159; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 190 |
| Period coverage | Audited fiscal 2026 (year ended August 31, 2026) with fiscal 2025 and fiscal 2024 income and cash flow comparatives and fiscal 2025 balance sheet; three fiscal 2026 interim quarters | Pass | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146 |
| Cutoff and as-of date | Latest dated document 2026-11-04; run as-of and cutoff 2026-11-05; no document is dated after the cutoff | Pass | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 140 |
| Source hierarchy | Tier 1: one annual and three quarterly filings; tier 2: three earnings releases; tier 3 market evidence and tier 4 user summaries: none supplied | Pass | EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 1 |
| Executed governing documents | Not supplied: the exhibit index lists the 2023 revolving credit agreement and term loan amendments but their text is not in the set | Limitation | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 133–134 |
| Covenant levels | Not supplied: filings state minimum consolidated net worth and other financial ratios apply and that the company complied; no level, step-down or definition is printed | Limitation | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| Ratings | Not supplied: no rating, outlook or agency is named in any source | Limitation | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 74–76 |
| Letters of credit under facilities | Not supplied: no letters of credit, standby or similar usage is stated against the 2.8 billion dollar revolver | Limitation | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–164 |
| Overall gate | Financial foundation READY_WITH_LIMITATIONS; Business & governance READY; Fundamental credit READY_WITH_LIMITATIONS | READY_WITH_LIMITATIONS | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146 |

### T2 Source register

| Source | Authority tier | Document family | Period or event | Entity and perimeter | Representation | Limitation |
| --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-08-31_chscp-20260831.htm.jsonl | 1 | Annual report with audited statements and notes | Year ended August 31, 2026 | CHS Inc. consolidated | Supplied text of the filing, one chunk per page | Segment history recast to the product-line model effective September 1, 2025; fiscal 2025 annual report not supplied |
| 10-Q_2025-11-30_chscp-20251130.htm.jsonl | 1 | Quarterly report, unaudited | Three months ended November 30, 2025 | CHS Inc. consolidated | Supplied text of the filing, one chunk per page | Unaudited; prior-year comparatives recast to the product-line segment model |
| 10-Q_2026-02-28_chscp-20260228.htm.jsonl | 1 | Quarterly report, unaudited | Three and six months ended February 28, 2026 | CHS Inc. consolidated | Supplied text of the filing, one chunk per page | Unaudited; seasonally weakest quarter |
| 10-Q_2026-05-31_chscp-20260531.htm.jsonl | 1 | Quarterly report, unaudited | Three and nine months ended May 31, 2026 | CHS Inc. consolidated | Supplied text of the filing, one chunk per page | Unaudited; latest interim balance sheet before year end |
| EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl | 2 | Earnings release | Three and six months ended February 28, 2026 | CHS Inc. consolidated | Supplied text of the release, one chunk per page | Segment table only; energy paragraph names the first quarter in error |
| EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl | 2 | Earnings release | Three and nine months ended May 31, 2026 | CHS Inc. consolidated | Supplied text of the release, one chunk per page | Segment table only; no balance sheet or cash flow |
| EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl | 2 | Earnings release | Year ended August 31, 2026 | CHS Inc. consolidated | Supplied text of the release, one chunk per page | Full-year segment table only; no fourth-quarter stand-alone figures |

### P3 Input inventory

| Source | Bytes | Pages | Content classes | Entity | Period | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-08-31_chscp-20260831.htm.jsonl | 517912 | 193 | Statements, notes, MD&A, business, risk factors, governance, exhibit index | CHS Inc. | FY2026 | Page here means the source chunk; the statements sit in chunks 144–146 |
| 10-Q_2025-11-30_chscp-20251130.htm.jsonl | 116582 | 44 | Interim statements, notes, MD&A | CHS Inc. | Q1 FY2026 | Balance sheet in chunk 4 |
| 10-Q_2026-02-28_chscp-20260228.htm.jsonl | 137589 | 49 | Interim statements, notes, MD&A | CHS Inc. | Q2 FY2026 and six months | Balance sheet in chunk 4 |
| 10-Q_2026-05-31_chscp-20260531.htm.jsonl | 138408 | 50 | Interim statements, notes, MD&A | CHS Inc. | Q3 FY2026 and nine months | Balance sheet in chunk 4 |
| EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl | 9760 | 4 | Press release, segment table | CHS Inc. | Q2 FY2026 | Chunks 3–4 are forward-looking statement wording |
| EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl | 10207 | 4 | Press release, segment table | CHS Inc. | Q3 FY2026 | Chunks 3–4 are forward-looking statement wording |
| EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl | 11537 | 5 | Press release, segment table | CHS Inc. | FY2026 | Chunks 4–5 are forward-looking statement wording |

### T4 Content-to-module map

| Content | Source | Module | Evidence demand | Disposition | Readiness | Limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Audited statements, debt note, maturity table, cash flow, interim statements and releases | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–165 | Financial foundation (CP-1) | Fiscal and quarterly periods, facility-level debt, cash interest, segment results | Recommended | READY_WITH_LIMITATIONS | Fourth quarter is derived, not stated; fiscal 2025 comparatives are as recast in the fiscal 2026 annual report |
| Business description, segments, joint ventures, cooperative structure, patronage, board and management | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 3–16; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 85–96 | Business & governance (CP-1A) | Operating model, ownership and control, issuer history | Recommended | READY | No transaction documents or legal entity chart supplied |
| Liquidity, covenant wording, preferred stock, patronage, contractual obligations, guarantees, commodity and RIN exposure | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 74–77; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 169–171; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 190 | Fundamental credit (CP-2) | Credit view from earnings, leverage, liquidity and structure | Recommended | READY_WITH_LIMITATIONS | Covenant levels, ratings and letter-of-credit usage not stated |
| Quarterly and nine-month earnings, management commentary | 10-Q_2026-05-31_chscp-20260531.htm.jsonl, pages 38–44; EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl, pages 1–2 | Earnings changes (CP-1B) | Quarter-on-quarter changes | Inapplicable | Not selected | Not part of the selected modules of this run |
| Revolver, securitization, repurchase facility, term loan, cash | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–165 | Liquidity (CP-2D) | Cash plus undrawn facilities net of letters of credit | Inapplicable | Not selected | Not part of the selected modules of this run; letter-of-credit usage is not stated in any source |
| Maturity table by fiscal year | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 | Refinancing & LME (CP-3C) | Maturity wall and refinancing capacity | Inapplicable | Not selected | Not part of the selected modules of this run |
| Covenant wording and exhibit index | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163; 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 133–134 | Legal & covenants (CP-4) | Executed governing documents, tests and levels | Blocked | BLOCKED | No executed credit or note agreement supplied |
| No rating evidence in any source | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 74–76 | Ratings & triggers (CP-2H) | Agency ratings and rating triggers | Blocked | BLOCKED | Not supplied: no rating, outlook or trigger is stated |
| Hedging and derivative notes | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 183–187 | Rates, FX & hedging (CP-2E) | Hedge positions and sensitivities | Inapplicable | Not selected | Not part of the selected modules of this run |
| No peers, no quotes, no valuation inputs in the run settings | Not supplied: the run settings list no peers, quotes or valuation inputs | Peer benchmark (CP-1C); Market-implied risk (CP-3D) | Peer set, market prices, spreads | Blocked | BLOCKED | Not supplied: no peer, quote or valuation input |
| First run of this pathway | Not supplied: the run settings list no earlier run | Changes since the last run (CP-8) | Earlier run of the same issuer | Inapplicable | Not selected | No earlier run is listed |

### T6 Evidence trace

| Trace ID | Claim | Stated value | Period | Lineage | Source |
| --- | --- | --- | --- | --- | --- |
| E01 | Audited consolidated statements are present | Balance sheets August 31, 2026 and 2025; operations, comprehensive income, equities and cash flows for fiscal 2026, 2025 and 2024 | FY2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 144–146 |
| E02 | Reporting entity | CHS Inc. and subsidiaries; no common stock; five preferred series listed on Nasdaq | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 1–3 |
| E03 | Long-term debt table lists the private placement notes | Private placement debt 1,703,000 thousand USD, 14 unsecured notes outstanding, coupons 3.24% to 6.13%, fiscal 2027 to fiscal 2039 | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 164–165 |
| E04 | Term loan | 300,000 thousand USD at 5.29%; revolving to October 29, 2026, then nonrevolving and payable October 29, 2029 | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| E05 | Maturity schedule excluding finance leases | 2027 58,562; 2028 190,600; 2029 150; 2030 450,000; 2031 200,000; thereafter 1,105,000; total 2,004,312 thousand USD | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165 |
| E06 | Committed revolver | 2.8 billion USD unsecured, expires April 21, 2028; no borrowings at August 31, 2026, 180.0 million USD at August 31, 2025 | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| E07 | Securitization and repurchase facilities | Securitization committed 850.0 and uncommitted 250.0 million USD, availability 963.9 and utilized 175.0 million USD; repurchase facility 250.0 million USD, none utilized; both extended to August 25, 2027 | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 164 |
| E08 | Covenant levels | Filings state minimum consolidated net worth and other financial ratios; compliance stated; no level printed | August 31, 2026 | Insufficient Information | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 163 |
| E09 | Letters of credit under facilities | No statement found after searching letters of credit, standby, LC and EDC across all seven sources | Not stated | Insufficient Information | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 163–164 |
| E10 | Ratings | No rating or agency named in any source after searching rating, Moody, Standard & Poor and Fitch | Not stated | Insufficient Information | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 74–76 |
| E11 | Governing documents are listed but not supplied | Exhibit 10.18 revolving credit agreement and 10.20D term loan amendment named in the exhibit index | Exhibit index | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 133–134 |
| E12 | Preferred stock and dividends | Five series, 2,264,038 thousand USD on the balance sheet; dividends 168.7 million USD a year | FY2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, pages 170–171 |
| E13 | Segment pre-tax earnings | Energy 554,590; Grains 127,378; Agronomy 354,640; Corporate and Services 92,111; total 1,128,719 thousand USD | FY2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 67 |
| E14 | Operating cash flow and capital spending | Operating cash flow 1,584,009; acquisition of property, plant and equipment 463,262 thousand USD | FY2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 146 |
| E15 | Expected fiscal 2027 cash requirements | Capital expenditures 850.8; major maintenance 41.8; preferred dividends 168.7; cash patronage 150.0; equity redemptions 150.0 million USD | FY2027 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 76 |
| E16 | Contractual obligations | Total 10,727,634 thousand USD including purchase obligations 7,604,191 | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 77 |
| E17 | Guarantees of related companies | Covenants allow up to 1.1 billion USD; 110.4 million USD outstanding | August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 190 |
| E18 | Dated events after year end | Director resignation notice October 2, 2026; term loan reversion October 29, 2026; Treasury guidance on 45Z credit; fiscal 2027 distribution intent and two projects announced November 4, 2026; no separate subsequent events note found | After August 31, 2026 | Directly Sourced | 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 85; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 165; 10-K_2026-08-31_chscp-20260831.htm.jsonl, page 168; EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, pages 1–2 |
| E19 | Fourth quarter is not stated alone | Derivable as fiscal 2026 less nine months to May 31, 2026 from the annual report, the third quarter report and the releases | Q4 FY2026 | Analyst Inference | EX-99.1_2026-07-08_a3qfy26earningrelease.htm.jsonl, page 2; EX-99.1_2026-11-04_a4qfy26earningrelease.htm.jsonl, page 2 |
| E20 | Second quarter release labels its energy loss as the first quarter | Energy paragraph says 133.6 million USD pretax loss for the first quarter; the segment table shows it under three months ended February 28, 2026 | Q2 FY2026 | Conflicting | EX-99.1_2026-04-08_a2qfy26earningrelease.htm.jsonl, pages 1–2 |

## Calculations

None. This module calculates nothing.

## Gaps

| Gap | Effect | Remedy |
| --- | --- | --- |
| Executed credit agreements and note agreements are not supplied | Covenant levels, security, guarantors, events of default and cross-default terms cannot be confirmed; the notes are described only as unsecured | Supply the 2023 revolving credit agreement, the term loan amendments and the private placement note agreements named in the exhibit index |
| Covenant levels are not stated | Headroom cannot be computed; only a compliance statement exists | Supply the compliance certificate or the covenant definitions |
| No rating is stated | Rating-linked triggers and agency views cannot be assessed | Supply current agency ratings |
| Letters of credit under the revolver are not stated | Undrawn availability net of letters of credit cannot be computed | Supply the facility usage statement |
| Fourth-quarter standalone statements are not supplied | The fourth quarter is derived by difference and cannot be audited as a quarter | Supply a fourth-quarter financial statement set |
| Fiscal 2025 annual report is not supplied | Fiscal 2025 comparatives are available only as presented, and recast for segments, in the fiscal 2026 annual report | Supply the fiscal 2025 annual report |
| Second quarter release names the first quarter in its energy paragraph | The segment table under three months ended February 28, 2026 governs; the paragraph is treated as a label error | None needed; recorded as a conflict |
| No market quotes, peers, valuation inputs or portfolio are supplied | Market-implied, relative and portfolio work cannot be done | Supply quotes, peer set and portfolio file if those modules are wanted |

## Next module

The orchestrator selects the next module.
