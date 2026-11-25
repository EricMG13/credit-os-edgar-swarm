# WEX Inc. source readiness as of 2026-11-18

## Request

Issuer: WEX Inc. (issuer id wex-1309108), as of 2026-11-18, with the same cutoff date. Pathway: credit snapshot, current period Q3 2026 against FY2025. Scope: whether the five supplied filings support Financial foundation, Business & governance and Fundamental credit, and what is missing.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_wex-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 (filing date, stated in the 2025 annual report) | b860a20cd34f6627a19863f28a4ff42d1235d8ca32fd9ddb55aec6425749724a | Audited FY2024, FY2023 and FY2022 statements and notes; overlap check of FY2024 totals against the 2025 annual report; earlier debt, covenant and business description. |
| 10-K_2025-12-31_wex-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-13 (filing date, stated in the quarterly report for September 30, 2026) | a278043c8942a29b84e71294e4c05c4d6559b5d3a84e88f4b2288502a00c2f51 | Audited FY2025 statements and notes (the prior period of this run); business, segments, risk factors, debt note, covenants and liquidity at year end 2025. |
| 10-Q_2026-03-31_wex-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-23 (signature date; filing date not stated) | 6b1be1882f109d72a594b96e932d0ffb073b3406ee29425a192e44fa7a97d654 | Unaudited Q1 2026 statements with Q1 2025 comparatives; quarterly continuity check; proxy contest wording. |
| 10-Q_2026-06-30_wex-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-23 (signature date; filing date not stated) | 1cd3eea51e9ac5968b8634d4d76a19cc10ec19e794b1a01d33ec533abfa31a22 | Unaudited Q2 and six-month 2026 statements; proxy contest concluded in Q2; Cooperation Agreement exhibit reference. |
| 10-Q_2026-09-30_wex-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 (signature date; filing date not stated) | a52e79f8055bb1402f6b8d0ab287a60fbc5d719c061ba9e49ba5827290340d0b | Unaudited Q3 and nine-month 2026 statements (the current period of this run); debt note, covenants, liquidity, bank capital and post-quarter items. |

No upstream analytical output was supplied to this module; it is the entry point of the run.

## Findings

### Bottom line

The five WEX filings support a credit snapshot of the consolidated group through the third quarter of 2026, but creditors cannot check covenant definitions, guarantors or collateral against executed debt documents, so those protections rest on the company's own summaries. Debt, liquidity and covenant ratios can be taken as the quarterly report prints them.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 55–56

The main perimeter caution is that WEX consolidates a deposit-taking bank and securitization vehicles, so debt and cash must be split between the funding of customer receivables and the rest of the group before leverage is judged. The balance sheet date is 49 days before the cutoff, the latest filing was signed 20 days before it, and nothing dated after the cutoff is used.
Basis: 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9; calculation C1; calculation C2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-20 | day | 2025-02-20 | Annual report on Form 10-K for the year ended 2024-12-31 signed | Historical — signature page dated February 20, 2025; the 2025 annual report states the filing date as the same day | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 227 | Latest audited baseline before FY2025; supplies FY2023 and FY2022 comparatives. |
| 2026-02-13 | day | 2026-02-13 | Annual report on Form 10-K for the year ended 2025-12-31 signed | Historical — signature page dated February 13, 2026; the September 2026 quarterly report states it was filed with the SEC on that date | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 222 | Audited year-end 2025 baseline, the prior period of this run. |
| 2026-04-23 | day | 2026-04-23 | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 signed | Historical — signature page dated April 23, 2026; filing date not stated | 10-Q_2026-03-31_wex-20260331.htm.jsonl, page 56 | Unaudited first-quarter 2026 evidence and 2025 comparatives. |
| 2026-07-23 | day | 2026-07-23 | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 signed | Historical — signature page dated July 23, 2026; filing date not stated | 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 61 | Unaudited second-quarter and six-month 2026 evidence; records that the proxy contest concluded in the quarter. |
| 2026-10-29 | day | 2026-10-29 | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 signed | Historical — signature page dated October 29, 2026; filing date not stated | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 63 | Latest evidence in the run, 20 days before the cutoff; current period for every requested module. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 11 |
| Calculated | 4 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 2 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 5 |

### Analytical appendix — complete canonical registers

The source-readiness registers follow.

### T1 - Input gate

| Gate item | Requirement | Finding | Status | Source |
|---|---|---|---|---|
| Objective and pathway | Use case of the credit snapshot pathway for Financial foundation, Business & governance and Fundamental credit | No separate objective is stated in the run settings, so the pathway's use case governs. Cutoff 2026-11-18; current period Q3 2026; prior period FY2025. | Met | Not supplied: set by the run settings, which are not an issuer source |
| Issuer identity | One reporting entity named from the filings | Registrant WEX Inc., Delaware, Commission file number 001-32426, common stock listed on the New York Stock Exchange as WEX, large accelerated filer. No parent registrant is named. Borrower, parent, guarantor, sector, country and sponsor fields in the run settings are blank and are not treated as zero or as none. | Met | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 1 |
| Period coverage | Current and prior period with comparatives | Annual statements for FY2024 (with FY2023 and FY2022) and FY2025; interim statements for Q1, Q2 and Q3 2026 with 2025 comparatives. Fourth quarter and full year 2026 were not reported at the cutoff. | Met | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Reporting perimeter | Entity whose debt, cash and earnings are read | Consolidated WEX Inc., which includes WEX Bank (a Utah industrial bank funded by USD 6,180.5 million of short-term deposits at 2026-09-30) and consolidated securitization vehicles. Separate bank statements and an industrial versus financing split are not supplied; the bank's regulatory capital ratios are printed. | Met with limitation | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 20, 37; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 64 |
| Executed legal documents | Credit Agreement and Indenture for covenant, guarantor and collateral work | Run settings declare no legal documents. Covenant levels, the Indenture date (2025-03-06) and the collateral description appear only as the issuer's summaries; the agreements are exhibits incorporated by reference and not supplied. | Not supplied: executed Credit Agreement and Indenture | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 55–56; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 187, 218–219 |
| Ratings, quotes, peers, portfolio | Agency, market and fund inputs where a module needs them | None supplied in the run settings; no agency rating is stated in any of the five filings. Not needed by the three requested modules. | Not supplied: no ratings, quotes, peers or portfolio | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 66 |
| Evidence date against cutoff | No source dated after the cutoff | Latest document signed 2026-10-29, 20 days before the cutoff; latest balance sheet date 2026-09-30, 49 days before it. Contract dates after the cutoff (for example trading plan windows) are labelled as dates in the filing, not facts. | Met | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 61–63 |
| Subsequent events | Post-period items kept separate from period figures | The quarterly report has no subsequent events note. Two post-quarter items are printed: the FDIC consent order of 2023 was terminated on 2026-10-15, and 32,864,048 shares were outstanding on 2026-10-26. | Met | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 1, 58 |
| Quarterly and trailing coverage | Quarter series and trailing twelve months | Q1, Q2 and Q3 2026 and their 2025 comparatives are printed. A stand-alone fourth quarter 2025 and trailing twelve months to 2026-09-30 are not printed; they need FY2025 and the nine-month 2025 comparatives, which are both supplied. | Met with limitation | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |

### T2 - Source register

| Source | Document | Tier | Authority | Audit status | Period | Representation | Readiness input | Limitation |
|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 1–227 | Annual report, Form 10-K | 1 | Primary filing by the registrant | Audited; auditor's reports on the statements and on internal control | FY2024 with FY2023 and FY2022 | One prepared page-text file, pinned by the launcher | PARSED | Older report; FY2024 comparatives in the 2025 annual report control where they differ. No difference was found in the totals compared (E9). |
| 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 1–223 | Annual report, Form 10-K | 1 | Primary filing by the registrant | Audited; auditor's reports on the statements and on internal control | FY2025 with FY2024 and FY2023 | One prepared page-text file, pinned by the launcher | PARSED | Part III is incorporated by reference to a proxy statement that is not supplied; credit agreement, indenture and subsidiary list are exhibits not supplied; reports covenant compliance without the leverage ratio value. |
| 10-Q_2026-03-31_wex-20260331.htm.jsonl, pages 1–56 | Quarterly report, Form 10-Q | 1 | Primary filing by the registrant | Unaudited interim statements | Q1 2026 with Q1 2025 | One prepared page-text file, pinned by the launcher | PARSED | Interim; covenant and indenture terms are summaries; reports compliance without the leverage ratio value. |
| 10-Q_2026-06-30_wex-20260630.htm.jsonl, pages 1–61 | Quarterly report, Form 10-Q | 1 | Primary filing by the registrant | Unaudited interim statements | Q2 and six months 2026 with 2025 | One prepared page-text file, pinned by the launcher | PARSED | Interim; the Cooperation Agreement of 2026-05-03 is listed as an exhibit incorporated from a Form 8-K that is not supplied. |
| 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 1–63 | Quarterly report, Form 10-Q | 1 | Primary filing by the registrant | Unaudited interim statements | Q3 and nine months 2026 with 2025 | One prepared page-text file, pinned by the launcher | PARSED | Latest evidence; leverage ratio printed to one decimal (2.7 to 1.0); no subsequent events note. |

### P3 - Input inventory

| Input | File | Prepared text sha256 | Original document sha256 stated on page 1 | Bytes | Pages | Document family | Entity and perimeter | Period | Version link | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 10-K_2024-12-31_wex-20241231.htm.jsonl | b860a20cd34f6627a19863f28a4ff42d1235d8ca32fd9ddb55aec6425749724a | 26dd04e8a94eb11527be2979ba4993a9dc2df699bb4f2229950e0248002a7427 | 569,622 | 227 | Annual report (Form 10-K) | WEX Inc. and consolidated subsidiaries including WEX Bank | Year ended 2024-12-31 | Earlier annual report; FY2024 reappears as a comparative in input 2; not a duplicate | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 1 |
| 2 | 10-K_2025-12-31_wex-20251231.htm.jsonl | a278043c8942a29b84e71294e4c05c4d6559b5d3a84e88f4b2288502a00c2f51 | 94d02c1f553b08e854499140a30babc6dbddc165036f36cbd6e85bdc5203338e | 563,560 | 223 | Annual report (Form 10-K) | WEX Inc. and consolidated subsidiaries including WEX Bank | Year ended 2025-12-31 | Later annual report; controls for FY2024 comparatives and for year-end 2025 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 1 |
| 3 | 10-Q_2026-03-31_wex-20260331.htm.jsonl | 6b1be1882f109d72a594b96e932d0ffb073b3406ee29425a192e44fa7a97d654 | 5cd899a072b976374bd7a33e0373a8cf0a924ee9a298320bfe415ec5a22a9fca | 150,319 | 56 | Quarterly report (Form 10-Q) | WEX Inc. and consolidated subsidiaries including WEX Bank | Three months ended 2026-03-31 | First 2026 quarter; follows input 2 | 10-Q_2026-03-31_wex-20260331.htm.jsonl, page 1 |
| 4 | 10-Q_2026-06-30_wex-20260630.htm.jsonl | 1cd3eea51e9ac5968b8634d4d76a19cc10ec19e794b1a01d33ec533abfa31a22 | e405b58b94d7e67bc50b12a1afb3813e0ed2f2c008b3c75c5beff13318d1b4e6 | 163,509 | 61 | Quarterly report (Form 10-Q) | WEX Inc. and consolidated subsidiaries including WEX Bank | Three and six months ended 2026-06-30 | Second 2026 quarter; follows input 3 | 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 1 |
| 5 | 10-Q_2026-09-30_wex-20260930.htm.jsonl | a52e79f8055bb1402f6b8d0ab287a60fbc5d719c061ba9e49ba5827290340d0b | f5cc14c655de9ee125cd24c20d61116ec8ffa348450e3816a5c70ad7206bad00 | 171,714 | 63 | Quarterly report (Form 10-Q) | WEX Inc. and consolidated subsidiaries including WEX Bank | Three and nine months ended 2026-09-30 | Third 2026 quarter; latest; follows input 4 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 1 |

### T4 - Content-to-module map

| Capability | Module | Disposition | Readiness | Evidence demand and active content | Limitation | Source |
|---|---|---|---|---|---|---|
| Statements, debt table, liquidity, cash flow, non-GAAP reconciliations | Financial foundation (CP-1) | Recommended; requested in this run | READY_WITH_LIMITATIONS | FY2023 to FY2025 statements, nine-month 2026 statements, the financing and other debt note, covenant and liquidity text, adjusted free cash flow reconciliation | Consolidated only; no bank-only statements; Consolidated EBITDA and interest charges as the Credit Agreement defines them are not printed; no pro forma debt adjustment is printed | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8–11; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 20–23; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 53–59; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 139–141 |
| Business model, segments, ownership, governance, transactions | Business & governance (CP-1A) | Recommended; requested in this run | READY_WITH_LIMITATIONS | Business description and three segments; WEX Bank charter and regulation; activist letter of 2026-02-09 and the proxy contest that concluded in Q2 2026; bp co-branded card program asset acquisition; FDIC order terminated 2026-10-15 | Part III information (directors, ownership) and the Form 8-K with the Cooperation Agreement of 2026-05-03 are not supplied; a listed company with no sponsor named | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 11–24; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 64–71; 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 46; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 16–17 |
| Overall fundamental credit view | Fundamental credit (CP-2) | Recommended; requested in this run | READY_WITH_LIMITATIONS | Rests on the two modules above; covenant levels and the reported leverage ratio as printed | No agency rating, market price or peer input; covenant capacity cannot be tested against executed definitions | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 55–56 |
| Earnings changes and earnings quality | Earnings changes (CP-1B); Earnings quality (CP-1D) | Not selected in this pathway; evidence present | READY | Quarter series with comparatives and company non-GAAP reconciliations | Fourth quarter 2025 and trailing twelve months need derivation | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8, 50–53 |
| Liquidity and refinancing | Liquidity (CP-2D); Refinancing & LME (CP-3C) | Not selected in this pathway; evidence present | READY_WITH_LIMITATIONS | Revolver, term loans, senior notes, securitization lines expiring in April and October 2027, participation line expiring in December 2026, FHLB advances and federal funds lines | FHLB remaining capacity is USD 14.3 million and the federal funds lines are uncommitted; revolver, notes and securitization terms are the issuer's summaries | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–23 |
| Rates, FX and hedging | Rates, FX & hedging (CP-2E) | Not selected in this pathway; evidence thin | READY_WITH_LIMITATIONS | Market risk section refers to the 2025 annual report; the derivatives note covers only a contingent consideration liability | Hedge book detail is limited to the annual report market risk section | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 20, 60; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 133–136 |
| Legal documents, covenant capacity, structural priority, intercreditor control, recovery | Legal & covenants (CP-4); Covenant capacity (CP-4A); Structural priority (CP-4B); Intercreditor control (CP-4D); Recovery & fulcrum (CP-4C) | Not selected in this pathway; would be blocked on documents | CONDITIONAL | Executed Credit Agreement and amendments, Indenture of 2025-03-06, guarantor and collateral schedules | These documents are not carried by the effective-source set; only issuer summaries exist | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 187, 218–219 |
| Ratings, market-implied risk, security selection, peers, relative value | Ratings & triggers (CP-2H); Market-implied risk (CP-3D); Security selection (CP-3); Peer benchmark (CP-1C) | Not selected in this pathway; no inputs | CONDITIONAL | Agency ratings, dated quotes, peer set and valuation inputs | None are in the run settings or the filings; the filings name no agency rating | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 66 |
| Downside, forward model, committee and evidence review | Downside (CP-2A); Forward credit model (CP-2G); Committee decision (CP-6); Evidence validation (CP-5) | Not selected in this pathway | READY_WITH_LIMITATIONS | Would rest on the financial and credit modules; the fund's limits and portfolio inputs are not supplied | Portfolio inputs not supplied | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 8 |
| Changes since the last run | Changes since the last run (CP-8) | Inapplicable | Not supplied: first run of this pathway for this issuer | No earlier run of the same pathway exists to compare | No comparison is possible | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 1 |
| Research questions | Research questions (CP-DR) | Inapplicable | Not supplied: no research question in the run settings | No named research need is stated; missing documents are logged under Gaps | None | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 2 |

### T6 - Evidence trace

| Trace ID | Claim | Lineage | Value as printed | Period | Source |
|---|---|---|---|---|---|
| E1 | The registrant is WEX Inc. | Directly Sourced | Delaware; Commission file number 001-32426; New York Stock Exchange symbol WEX; large accelerated filer | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 1 |
| E2 | The consolidated perimeter includes a deposit-taking bank | Directly Sourced | Short-term deposits USD 6,180.5 million, of which HSA deposits USD 4,758.0 million; WEX Bank reported as well capitalized | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 20, 37 |
| E3 | Debt outstanding is printed by instrument | Directly Sourced | Total long-term debt USD 3,539.7 million; long-term debt, net USD 3,457.6 million; short-term debt, net USD 1,863.5 million | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 9, 21 |
| E4 | Covenant levels and the reported leverage ratio are printed | Directly Sourced | Interest coverage of at least 3.00 to 1.00; leverage of at most 4.75 to 1.00; reported leverage ratio 2.7 to 1.0 | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55 |
| E5 | Revolving credit facility availability is printed | Directly Sourced | Commitments USD 1.6 billion; borrowings USD 395.0 million; letters of credit USD 44.5 million; remaining capacity USD 1,160.5 million | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| E6 | Printed revolver capacity recomputes from its inputs | Calculated | 1,600.0 less 395.0 less 44.5 equals 1,160.5; difference 0.0 (calculation C4) | 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| E7 | Annual report filing dates are stated | Directly Sourced | 10-K for FY2024 filed 2025-02-20; 10-K for FY2025 filed 2026-02-13 | 2025-02-20; 2026-02-13 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 114; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 12 |
| E8 | Quarterly reports were signed on stated dates | Directly Sourced | 2026-04-23; 2026-07-23; 2026-10-29 | Q1, Q2 and Q3 2026 | 10-Q_2026-03-31_wex-20260331.htm.jsonl, page 56; 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 61; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 63 |
| E9 | FY2024 totals agree between the two annual reports | Calculated | Total revenues 2,628.1 in both; net income attributable to shareholders 309.6 in both; total assets 13,321.6 in both; differences 0.0 (calculation C5) | FY2024 | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 |
| E10 | Year-end 2025 debt balances agree between the annual report and the September 2026 comparatives | Calculated | Long-term debt, net 3,532.0 in both; short-term debt, net 1,326.4 in both; differences 0.0 (calculation C6) | 2025-12-31 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 186; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9 |
| E11 | Quarterly revenue ties to the nine-month figure within rounding | Calculated | 673.8 plus 753.5 plus 780.1 equals 2,207.4 against printed 2,207.5; difference 0.1 (calculation C7) | Q1 to Q3 2026 | 10-Q_2026-03-31_wex-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 8; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8, 12 |
| E12 | Debt documents appear only as issuer summaries | Directly Sourced | Indenture dated 2025-03-06 among WEX Inc., the guarantors and Citibank, N.A. as trustee; Credit Agreement amendments listed as exhibits incorporated by reference | 2026-09-30 | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 8, 218–219; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 55–56 |
| E13 | No issuer or instrument credit rating is stated | Insufficient Information | A search of all five filings for agency names and rating terms finds only a general risk factor on a credit rating downgrade and equity index references | FY2024 to Q3 2026 | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 53, 66 |
| E14 | Consolidated EBITDA as the Credit Agreement defines it is not printed | Insufficient Information | The term appears only in a definition and in covenant descriptions; no value is stated in any of the five filings | FY2024 to Q3 2026 | 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 7, 73; 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 7, 75, 105 |
| E15 | The business reports three segments | Directly Sourced | Mobility, Benefits and Corporate Payments | FY2025; Q3 2026 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 106; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 34 |
| E16 | A shareholder campaign and a later cooperation agreement are referenced | Directly Sourced | Activist nominating letter dated 2026-02-09; proxy contest concluded in Q2 2026; Cooperation Agreement dated 2026-05-03 listed as an exhibit, text not supplied | 2026-02-09 to 2026-05-04 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 64; 10-Q_2026-06-30_wex-20260630.htm.jsonl, pages 46, 61 |
| E17 | Post-quarter items are stated | Directly Sourced | FDIC consent order of 2023 terminated 2026-10-15; 32,864,048 shares outstanding on 2026-10-26 | After 2026-09-30 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 1, 58 |

## Calculations

All amounts are in USD millions unless a day count or a ratio is stated.

| Calc ID | Quantity | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Days from the latest balance sheet date to the cutoff | 2026-09-30 to 2026-11-18: 31 days to 2026-10-31, then 18 days | 49 days | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9 |
| C2 | Days from the latest filing signature to the cutoff | 2026-10-29 to 2026-11-18: 2 days to 2026-10-31, then 18 days | 20 days | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 63 |
| C3 | Pages across the five sources | 227 + 223 + 56 + 61 + 63 | 630 pages | 10-K_2024-12-31_wex-20241231.htm.jsonl, page 1 |
| C4 | Revolving credit facility availability | 1,600.0 commitments less 395.0 borrowings less 44.5 letters of credit; commitments are printed as USD 1.6 billion | 1,160.5; printed 1,160.5; difference 0.0 | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 21–22 |
| C5 | FY2024 overlap between the annual reports | Total revenues 2,628.1 less 2,628.1; net income attributable to shareholders 309.6 less 309.6; total assets 13,321.6 less 13,321.6 | 0.0; 0.0; 0.0 | 10-K_2024-12-31_wex-20241231.htm.jsonl, pages 147–148; 10-K_2025-12-31_wex-20251231.htm.jsonl, page 139 |
| C6 | Year-end 2025 overlap | Long-term debt, net 3,532.0 less 3,532.0; short-term debt, net 1,326.4 less 1,326.4 | 0.0; 0.0 | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 186; 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 9 |
| C7 | Quarterly revenue continuity, Q1 to Q3 2026 | 673.8 + 753.5 + 780.1 = 2,207.4 against printed nine-month revenue of 2,207.5 | 0.1 difference, rounding; the quarterly report says amounts may not foot | 10-Q_2026-03-31_wex-20260331.htm.jsonl, page 7; 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 8; 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 8, 12 |

## Gaps

Five source gaps are logged. None blocks the three requested modules; each limits what they can say. No conflict was found between the filings in the overlapping figures compared.

| Gap ID | Type | Severity | Missing item | Affected modules | Readiness effect | Remediation | Source |
|---|---|---|---|---|---|---|---|
| G1 | Source gap | MINOR | Executed Credit Agreement with all amendments, and the Indenture for the 2033 Senior Notes | Fundamental credit (limits); Legal & covenants and the covenant, priority and recovery modules if selected (they become MATERIAL and CONDITIONAL) | Covenant definitions, baskets, guarantors and the security package cannot be verified; the covenant ratio is taken as reported | Supply the executed documents through the latest amendment | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 55–56; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 187, 218–219 |
| G2 | Source gap | MINOR | Agency ratings, dated quotes, valuation peers and portfolio inputs | Fundamental credit (no market or agency cross-check); Ratings & triggers, Market-implied risk, Peer benchmark and Committee decision if selected | No effect on Financial foundation or Business & governance | Supply dated ratings, quotes and peers if those modules are wanted | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 66 |
| G3 | Source gap | MINOR | Part III proxy statement information, Form 8-K reports (including the Cooperation Agreement filed 2026-05-04), earnings releases and investor presentations | Business & governance | Board composition, shareholder register and the terms of the 2026 agreement are not established | Supply the 2026 proxy statement and the 2026-05-04 Form 8-K | 10-K_2025-12-31_wex-20251231.htm.jsonl, page 2; 10-Q_2026-06-30_wex-20260630.htm.jsonl, page 61 |
| G4 | Perimeter gap | MINOR | Separate statements for WEX Bank and for the non-bank group | Financial foundation; Fundamental credit | Debt, cash and cash flow must be split from consolidated notes; only the bank's capital ratios are printed | Split from the debt, deposits and regulatory capital notes, labelling the perimeter | 10-Q_2026-09-30_wex-20260930.htm.jsonl, pages 20–23, 37 |
| G5 | Definition gap | MINOR | Consolidated EBITDA and consolidated interest charges as the Credit Agreement defines them | Financial foundation; Fundamental credit | Covenant headroom cannot be recomputed; the reported 2.7 to 1.0 leverage ratio stands as printed | Supply the compliance certificate or the executed definitions | 10-Q_2026-09-30_wex-20260930.htm.jsonl, page 55; 10-K_2025-12-31_wex-20251231.htm.jsonl, pages 7, 73 |

## Next module

The orchestrator selects the next module.
