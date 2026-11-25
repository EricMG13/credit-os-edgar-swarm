## Request

Source readiness for Trinity Industries Inc (issuer trn-99780), as of 2026-11-18, for the credit snapshot pathway. The scope is whether the five supplied filings can support the requested analysis of the consolidated issuer, and what remains missing. No credit conclusion is drawn.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_trn.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 | 247c5f3703e0027cdf1310c49374a9e71cfdfe961877fec838da3e91d8886212 | Identity, period and version map; FY2022 to FY2024 statements, interest and tax paid, covenant table and maturity ladder at 2024-12-31 |
| 10-K_2025-12-31_trn.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-19 | df483ffa3ed73b7b4c4f4b734b43150f2e53740ca919897ccd88ff37b318897f | Identity, period and version map; FY2025 statements, debt note, maturity ladder, covenants, segments, quarterly data, December 2025 restructuring, governance and exhibit index |
| 10-Q_2026-03-31_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | a9c5c6e9c79d8bd953576936e574854fe7a56ae05d508b53ecf03c90db77158c | Q1 2026 statements, debt note and April 2026 subsequent events |
| 10-Q_2026-06-30_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-30 | e59202e662d8e74a34ab1e77443247e23ee53e74df0e08106acbfd54d83bdeb4 | Q2 and six-month 2026 statements, debt note and June 2026 revolver amendment |
| 10-Q_2026-09-30_trn.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-29 | 8c9ce2293f595571213562da5e18064d3b6c95501d045babc9b211608e138e61 | Latest period: Q3 and nine-month 2026 statements, debt, liquidity, covenants, subsequent events and tie-out checks |

No earlier module output was supplied to this module; it is the first module of the run.

## Findings

### Bottom line

The five supplied filings support a consolidated credit snapshot of Trinity Industries, with three open limits that later analysis must carry as gaps rather than estimate: 2026 cash interest, the debt maturity ladder after year-end, and executed financing documents. Nothing in the set blocks the requested analysis, but each limit narrows what can be said about cash interest cover, refinancing timing and covenant definitions.
Basis: 10-K_2025-12-31_trn.htm.jsonl, pages 69, 107; 10-Q_2026-09-30_trn.htm.jsonl, pages 3–4, 23

The two annual reports and three 2026 quarterly reports run to the quarter ended 2026-09-30 and supply statements, a debt note, liquidity and covenant disclosure for that quarter, with the prior-year comparatives needed for a last-twelve-months view. A further risk is comparability: the December 2025 and April 2026 railcar partnership exchanges removed Triumph and then TRIP Holdings, with their non-recourse debt, from the consolidated statements, and no pro forma figures are printed. Nothing dated after the 2026-10-29 quarterly report is in the set although the cutoff is 2026-11-18, and no rating, price, peer or portfolio input was supplied.
Basis: 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4, 17–18, 47, 50–51, 56; 10-K_2025-12-31_trn.htm.jsonl, page 43

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-20 | day | 2025-02-20 | Annual report for FY2024 signed | Historical — report signed on its behalf by the undersigned | 10-K_2024-12-31_trn.htm.jsonl, page 146 | Oldest source in the set; supplies FY2022 to FY2024 evidence and is superseded for current facts by the FY2025 report |
| 2026-02-19 | day | 2026-02-19 | Annual report for FY2025 signed | Historical — report signed on its behalf by the undersigned | 10-K_2025-12-31_trn.htm.jsonl, page 136 | Latest audited statements; year-end anchor for 2025-12-31 balances and the maturity ladder |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for Q1 2026 signed | Historical — report signed on its behalf by the undersigned | 10-Q_2026-03-31_trn.htm.jsonl, page 40 | Reports the April 2026 partnership exchange and notes issue as subsequent events |
| 2026-07-30 | day | 2026-07-30 | Quarterly report for Q2 2026 signed | Historical — report signed on its behalf by the undersigned | 10-Q_2026-06-30_trn.htm.jsonl, page 52 | First report whose statements reflect the April 2026 deconsolidation; carries the June 2026 revolver amendment |
| 2026-10-29 | day | 2026-10-29 | Quarterly report for Q3 2026 signed | Historical — report signed on its behalf by the undersigned | 10-Q_2026-09-30_trn.htm.jsonl, page 56 | Latest source in the set; facts after this date up to the 2026-11-18 cutoff are not established |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 24 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 6 |

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Run | trn-99780-2026-11-18-credit_snapshot-host; requested modules CP-0, CP-1, CP-1A, CP-2 | Run settings |
| Issuer | Trinity Industries, Inc.; Delaware; Commission File Number 1-6903; common stock ticker TRN on the New York Stock Exchange | 10-Q_2026-09-30_trn.htm.jsonl, page 1 |
| Reporting entity and perimeter | Trinity Industries, Inc. and Subsidiaries, consolidated, in two reportable segments (Railcar Leasing and Services Group; Rail Products Group); at 2026-09-30 debt is USD 598.9 million recourse and USD 4,726.1 million non-recourse; no separate borrower or guarantor statements supplied | 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 14, 20 |
| As-of date and cutoff | 2026-11-18 for both | Run settings |
| Periods | Current period Q3 2026 (quarter and nine months ended 2026-09-30); prior period FY2025 | Run settings; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| Objective | Credit snapshot of the consolidated issuer from public filings: Financial foundation (CP-1), Business & governance (CP-1A) and Fundamental credit (CP-2); no other objective stated | Run settings |
| Inputs declared in run settings | No ratings, quotes, deal terms, peers, precedents, portfolio, prior case or management bridge; legal documents: none | Run settings |
| Source status | Received: five of five filings (two annual, three quarterly); Source readiness is judged on these only | Sources table |
| Package, parse and hash checks | Performed by the launcher before this answer; no result is recorded here | Not applicable |
| Overall readiness | READY_WITH_LIMITATIONS for the three selected modules; limitations in the Gaps section | T4 register |

### T2 - Source register

| Logical source | Original file | Active content file | Authority and quality | Extraction confidence | Usability verdict | Modules supported | Limitation flags | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Annual report FY2024 | 10-K_2024-12-31_trn.htm | 10-K_2024-12-31_trn.htm.jsonl | Tier 1 primary filing; audited statements, opinion states they present fairly in all material respects | HIGH | Usable_with_Limitations | CP-1, CP-1A, CP-2 | Superseded for current-period facts by the FY2025 report; pre-restructuring perimeter; tables flattened to text lines | 10-K_2024-12-31_trn.htm.jsonl, pages 73, 75–78 |
| Annual report FY2025 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | Tier 1 primary filing; audited statements, opinion states they present fairly in all material respects | HIGH | Usable | CP-1, CP-1A, CP-2 | Q4 2025 discrete quarter only in unaudited selected quarterly data; December 2025 perimeter change; tables flattened to text lines | 10-K_2025-12-31_trn.htm.jsonl, pages 64, 66–69, 121 |
| Quarterly report Q1 2026 | 10-Q_2026-03-31_trn.htm | 10-Q_2026-03-31_trn.htm.jsonl | Tier 1 primary filing; unaudited interim statements | HIGH | Usable | CP-1, CP-1A, CP-2 | Three-month flows only; no cash interest or tax paid line; tables flattened to text lines | 10-Q_2026-03-31_trn.htm.jsonl, pages 2–4 |
| Quarterly report Q2 2026 | 10-Q_2026-06-30_trn.htm | 10-Q_2026-06-30_trn.htm.jsonl | Tier 1 primary filing; unaudited interim statements | HIGH | Usable | CP-1, CP-1A, CP-2 | First report whose statements reflect the April 2026 deconsolidation; no cash interest or tax paid line; tables flattened to text lines | 10-Q_2026-06-30_trn.htm.jsonl, pages 2–4 |
| Quarterly report Q3 2026 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | Tier 1 primary filing; unaudited interim statements | HIGH | Usable | CP-1, CP-1A, CP-2 | Latest period; no cash interest or tax paid line; maturity ladder not reprinted; tables flattened to text lines | 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4, 20–23 |

### P3 - Input sources

| Logical source | Original file | Active content file | Document family | Entity | Period covered | Document date | Version link | Original file hash stated in the text header | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Annual report FY2024 | 10-K_2024-12-31_trn.htm | 10-K_2024-12-31_trn.htm.jsonl | Annual report, Form 10-K | Trinity Industries, Inc. and Subsidiaries, consolidated | Year ended 2024-12-31, with FY2023 and FY2022 | 2025-02-20 | Prior annual report; later official filing (FY2025) controls current-period facts; retained for FY2022 to FY2024 evidence | 5ee3438bbdb8f25f03c0c11a8616ff21d7845e6af43caed657ceeb430f43fe2b | 10-K_2024-12-31_trn.htm.jsonl, pages 1, 146 |
| Annual report FY2025 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | Annual report, Form 10-K | Trinity Industries, Inc. and Subsidiaries, consolidated | Year ended 2025-12-31, with FY2024 and FY2023 | 2026-02-19 | Current annual report; baseline for the prior period FY2025 | ddc5bd1aca06547ed5a03aad30e315a769396f9d3ee7ccc48275d98f5449214a | 10-K_2025-12-31_trn.htm.jsonl, pages 1, 136 |
| Quarterly report Q1 2026 | 10-Q_2026-03-31_trn.htm | 10-Q_2026-03-31_trn.htm.jsonl | Quarterly report, Form 10-Q | Trinity Industries, Inc. and Subsidiaries, consolidated | Three months ended 2026-03-31, with 2025 comparatives | 2026-04-30 | Superseded for balance-sheet facts by the Q2 and Q3 reports; retained for three-month flows | 787c3530a0cd815fb06d03acfcf1e1bf4d3520ef309e3ef0d8af5284bf036650 | 10-Q_2026-03-31_trn.htm.jsonl, pages 1, 40 |
| Quarterly report Q2 2026 | 10-Q_2026-06-30_trn.htm | 10-Q_2026-06-30_trn.htm.jsonl | Quarterly report, Form 10-Q | Trinity Industries, Inc. and Subsidiaries, consolidated | Three and six months ended 2026-06-30, with 2025 comparatives | 2026-07-30 | Superseded for balance-sheet facts by the Q3 report; retained for three-month and six-month flows | 76e3ab15f1f45c72d49b6a538fbcf8a3adf77a5d8b8dfd5e9e255eaa1b7ceb33 | 10-Q_2026-06-30_trn.htm.jsonl, pages 1, 52 |
| Quarterly report Q3 2026 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | Quarterly report, Form 10-Q | Trinity Industries, Inc. and Subsidiaries, consolidated | Three and nine months ended 2026-09-30, with 2025 comparatives | 2026-10-29 | Latest report; controls current-period facts | c92eb5058d97d1d5b7cdf079e878e305d4a95484924ef05b8be937169861f806 | 10-Q_2026-09-30_trn.htm.jsonl, pages 1, 56 |

### T4 - Content-to-module map

| Module | Disposition | Evidence demand | Active representations | Readiness | Readiness effect and limitation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| CP-1 | Selected | Annual, quarterly and year-to-date statements; four discrete quarters to Q3 2026 | All five filings | READY | FY2022 to FY2025 and Q1, Q2 and Q3 2026 statements are printed; the 2025 nine-month comparatives sit in the Q3 report, so a last-twelve-months view can be built from filed figures; the Q4 2025 discrete quarter is printed only in the unaudited selected quarterly data | 10-K_2025-12-31_trn.htm.jsonl, pages 66–69, 121; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4 |
| CP-1 | Selected | Debt by instrument, carrying values, recourse and non-recourse split | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY_WITH_LIMITATIONS | Instruments and carrying values are printed at 2025-12-31 and 2026-09-30; the maturity ladder is printed only at 2025-12-31 and is not updated for the April 2026 redemption, the Tribute Rail deconsolidation, the June 2026 revolver extension or the October 2026 term loan | 10-K_2025-12-31_trn.htm.jsonl, pages 98–100, 107; 10-Q_2026-09-30_trn.htm.jsonl, pages 20–23 |
| CP-1 | Selected | Cash-paid interest and cash taxes | 10-K_2025-12-31_trn.htm.jsonl; 10-K_2024-12-31_trn.htm.jsonl | READY_WITH_LIMITATIONS | Interest paid and income tax payments are printed for annual periods only; the three 2026 quarterly reports print neither, so only interest expense, net is available for 2026 periods | 10-K_2025-12-31_trn.htm.jsonl, pages 46, 69; 10-K_2024-12-31_trn.htm.jsonl, page 78; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4 |
| CP-1 | Selected | EBITDA, add-backs and covenant ratios | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY_WITH_LIMITATIONS | No issuer-reported EBITDA; operating profit and depreciation and amortization are printed; covenant ratios and their definitions are printed but the credit agreement is not supplied; gains inside operating profit are disclosed (USD 194.2 million on the Triumph divestiture in FY2025; USD 131.6 million on the TRIP Holdings divestiture in nine months 2026) | 10-K_2025-12-31_trn.htm.jsonl, page 43; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4, 16, 50–51 |
| CP-1 | Selected | Segment data and operating indicators (fleet, utilization, backlog) | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY | Segment revenue, operating profit, depreciation, capital expenditure and assets are printed with fleet, utilization and backlog narrative | 10-K_2025-12-31_trn.htm.jsonl, pages 90–92; 10-Q_2026-09-30_trn.htm.jsonl, pages 14–16, 34, 43, 46 |
| CP-1 | Selected | Liquidity, facilities and letters of credit | 10-Q_2026-09-30_trn.htm.jsonl | READY | Unrestricted cash, revolver availability net of letters of credit and warehouse facility availability are printed, with a separate letter of credit outside the revolver | 10-Q_2026-09-30_trn.htm.jsonl, pages 21, 47, 51 |
| CP-1A | Selected | Business model, segments, fleet, customers and strategy | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY | Item 1 describes both segments and the lease fleet; the quarterly reports update fleet, utilization and backlog | 10-K_2025-12-31_trn.htm.jsonl, pages 5–15; 10-Q_2026-09-30_trn.htm.jsonl, pages 29–46 |
| CP-1A | Selected | Governance, management and ownership | 10-K_2025-12-31_trn.htm.jsonl | READY_WITH_LIMITATIONS | Executive officers and signing directors are named; board composition, independence, compensation and share ownership are incorporated by reference to a 2026 proxy statement that is not supplied | 10-K_2025-12-31_trn.htm.jsonl, pages 11, 127–128, 136 |
| CP-1A | Selected | Transactions and new debt issues in the period | 10-Q_2026-03-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY | April 2026 partnership exchange, April 2026 Series 2026-1 notes, June 2026 revolver amendment, June 2026 India joint venture stake and the October 2026 term loan are described with amounts and dates | 10-Q_2026-03-31_trn.htm.jsonl, pages 14, 17; 10-Q_2026-09-30_trn.htm.jsonl, pages 17–23 |
| CP-2 | Selected | Fundamental credit view from Financial foundation and Business & governance, plus risk factors, litigation and covenant disclosure | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY_WITH_LIMITATIONS | Risk factors, East Palestine and highway products litigation and covenant disclosure are printed; run settings supply no peer, rating, market-price or legal-document input | 10-K_2025-12-31_trn.htm.jsonl, pages 16–33, 117–120; 10-Q_2026-09-30_trn.htm.jsonl, pages 27, 50–51 |
| CP-1B | Not selected in this run | Quarter and year-on-year earnings changes | All five filings | READY | Three 2026 quarters with 2025 comparatives and all four 2025 quarters are printed | 10-K_2025-12-31_trn.htm.jsonl, page 121; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| CP-2D | Not selected in this run | Near-term liquidity | 10-Q_2026-09-30_trn.htm.jsonl | READY | Cash, revolver, warehouse availability and letters of credit are printed at 2026-09-30 | 10-Q_2026-09-30_trn.htm.jsonl, pages 21, 47, 51 |
| CP-3C | Not selected in this run | Refinancing and liability management | 10-K_2025-12-31_trn.htm.jsonl; 10-Q_2026-09-30_trn.htm.jsonl | READY_WITH_LIMITATIONS | Instrument terms and 2026 refinancings are printed; the maturity ladder is year-end 2025 only | 10-K_2025-12-31_trn.htm.jsonl, page 107; 10-Q_2026-09-30_trn.htm.jsonl, pages 22–23 |
| CP-4 | Not selected in this run | Executed credit agreement, indentures and amendments | None supplied | CONDITIONAL | The exhibit index lists the credit agreement, its amendments and the indentures, but none is supplied and run settings declare no legal documents; only the issuer's own covenant summary is available | 10-K_2025-12-31_trn.htm.jsonl, pages 130–134; 10-Q_2026-09-30_trn.htm.jsonl, pages 50–51 |
| CP-2H | Not selected in this run | Agency ratings and rating triggers | None supplied | CONDITIONAL | The filings name three rating agencies but state no rating or outlook, and run settings declare no ratings | 10-K_2025-12-31_trn.htm.jsonl, page 30 |
| CP-1C | Not selected in this run | Peer set and peer financials | None supplied | CONDITIONAL | Run settings name no peer source; the annual report names only an equity index for its performance graph | 10-K_2025-12-31_trn.htm.jsonl, page 37 |
| CP-3D | Not selected in this run | Market prices and spreads | None supplied | CONDITIONAL | Run settings declare no quotes; the filings give only fair-value estimates of debt (USD 608.6 million Level 2 and USD 2,970.7 million Level 3 at 2026-09-30) | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| Other capabilities (Downside; Forward credit model; Rates, FX & hedging; Structural priority; Intercreditor control; Recovery & fulcrum; Security selection; Committee decision; Evidence validation; Changes since the last run) | Not selected in this run | Not part of the credit snapshot pathway | Not applicable | Not assessed | Outside the requested scope, so no readiness verdict is given; this is the first run of the pathway, so no earlier run exists to compare | Run settings |

### T6 - Evidence trace

| Evidence ID | Original source | Active representation | Locator | Source | What the locator holds |
| --- | --- | --- | --- | --- | --- |
| E-01 | 10-K_2024-12-31_trn.htm | 10-K_2024-12-31_trn.htm.jsonl | page:75 | 10-K_2024-12-31_trn.htm.jsonl, page 75 | Statements of operations for FY2024, FY2023 and FY2022 |
| E-02 | 10-K_2024-12-31_trn.htm | 10-K_2024-12-31_trn.htm.jsonl | page:78 | 10-K_2024-12-31_trn.htm.jsonl, page 78 | Interest paid of USD 271.4 million and income tax payments of USD 54.6 million for FY2024 |
| E-03 | 10-K_2024-12-31_trn.htm | 10-K_2024-12-31_trn.htm.jsonl | page:115 | 10-K_2024-12-31_trn.htm.jsonl, page 115 | Principal payments ladder at 2024-12-31, total USD 5,715.3 million |
| E-04 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | page:66 | 10-K_2025-12-31_trn.htm.jsonl, page 66 | Statements of operations for FY2025, FY2024 and FY2023; revenues USD 2,156.9 million in FY2025 |
| E-05 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:67–68 | 10-K_2025-12-31_trn.htm.jsonl, pages 67–68 | Balance sheets at 2025-12-31 and 2024-12-31; total assets USD 8,424.4 million at 2025-12-31 |
| E-06 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:68–69 | 10-K_2025-12-31_trn.htm.jsonl, pages 68–69 | Cash flow statement; interest paid of USD 272.8 million in FY2025 |
| E-07 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:98–100 | 10-K_2025-12-31_trn.htm.jsonl, pages 98–100 | Debt note: instruments and carrying values; USD 600.0 million of senior notes due 2028; USD 600.0 million revolver; non-recourse leasing debt |
| E-08 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | page:107 | 10-K_2025-12-31_trn.htm.jsonl, page 107 | Remaining principal payments by year at 2025-12-31, total USD 5,466.5 million |
| E-09 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:50, 53 | 10-K_2025-12-31_trn.htm.jsonl, pages 50, 53 | Liquidity at 2025-12-31 and covenant table: maximum leverage 3.75x limit against 1.22x; minimum interest coverage 2.25x limit against 9.38x |
| E-10 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:90–92 | 10-K_2025-12-31_trn.htm.jsonl, pages 90–92 | Segment note: two reportable segments, segment results and total assets by segment |
| E-11 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | page:121 | 10-K_2025-12-31_trn.htm.jsonl, page 121 | Selected quarterly data for the four quarters of 2025 and 2024 |
| E-12 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | page:43 | 10-K_2025-12-31_trn.htm.jsonl, page 43 | December 2025 railcar partnership restructuring; USD 194.2 million gain on the Triumph divestiture |
| E-13 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:127–128 | 10-K_2025-12-31_trn.htm.jsonl, pages 127–128 | Part III items incorporated by reference to the 2026 proxy statement |
| E-14 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:130–134 | 10-K_2025-12-31_trn.htm.jsonl, pages 130–134 | Exhibit index: senior notes indenture, credit agreement and amendments, leasing subsidiary master indentures |
| E-15 | 10-K_2025-12-31_trn.htm | 10-K_2025-12-31_trn.htm.jsonl | pages:117–120 | 10-K_2025-12-31_trn.htm.jsonl, pages 117–120 | Contingencies note: East Palestine derailment and highway products litigation |
| E-16 | 10-Q_2026-03-31_trn.htm | 10-Q_2026-03-31_trn.htm.jsonl | pages:2–4 | 10-Q_2026-03-31_trn.htm.jsonl, pages 2–4 | Q1 2026 statements of operations, balance sheet and cash flows |
| E-17 | 10-Q_2026-03-31_trn.htm | 10-Q_2026-03-31_trn.htm.jsonl | pages:14, 17 | 10-Q_2026-03-31_trn.htm.jsonl, pages 14, 17 | Subsequent events: April 9, 2026 contribution agreement; April 17, 2026 Series 2026-1 notes |
| E-18 | 10-Q_2026-06-30_trn.htm | 10-Q_2026-06-30_trn.htm.jsonl | pages:2–4 | 10-Q_2026-06-30_trn.htm.jsonl, pages 2–4 | Q2 and six-month 2026 statements |
| E-19 | 10-Q_2026-06-30_trn.htm | 10-Q_2026-06-30_trn.htm.jsonl | pages:19–21 | 10-Q_2026-06-30_trn.htm.jsonl, pages 19–21 | Debt note at 2026-06-30 including the June 2026 revolver amendment |
| E-20 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | pages:2–4 | 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4 | Q3 and nine-month 2026 statements of operations, balance sheet and cash flows |
| E-21 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | pages:14–16 | 10-Q_2026-09-30_trn.htm.jsonl, pages 14–16 | Segment note with operating profit, depreciation and capital expenditure by segment |
| E-22 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | pages:17–18 | 10-Q_2026-09-30_trn.htm.jsonl, pages 17–18 | 2026 railcar partnership exchange; TRIP Holdings deconsolidated; USD 131.6 million gain |
| E-23 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | pages:20–23 | 10-Q_2026-09-30_trn.htm.jsonl, pages 20–23 | Debt note at 2026-09-30, revolver amendment, Series 2026-1 notes, October 19, 2026 term loan and redemption |
| E-24 | 10-Q_2026-09-30_trn.htm | 10-Q_2026-09-30_trn.htm.jsonl | pages:47, 50–51 | 10-Q_2026-09-30_trn.htm.jsonl, pages 47, 50–51 | Committed liquidity USD 897.2 million; covenant table and definitions at 2026-09-30 |

## Calculations

These checks recompute printed arithmetic to confirm that the figures survived in the supplied text; no analytical figure is derived here.

| ID | Check | Inputs | Result | Printed figure | Outcome | Source |
| --- | --- | --- | --- | --- | --- | --- |
| C1 | Committed liquidity at 2026-09-30 | USD 158.3 million cash + USD 592.4 million revolver availability + USD 146.5 million warehouse availability | USD 897.2 million | USD 897.2 million | Ties | 10-Q_2026-09-30_trn.htm.jsonl, page 47 |
| C2 | Total debt at 2026-09-30 | USD 598.9 million recourse + USD 4,726.1 million non-recourse | USD 5,325.0 million | USD 5,325.0 million | Ties | 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 20 |
| C3 | Recourse debt at 2026-09-30 | USD 602.2 million senior notes carrying value - USD 3.3 million unamortized issuance costs | USD 598.9 million | USD 598.9 million | Ties | 10-Q_2026-09-30_trn.htm.jsonl, page 20 |
| C4 | Revolver availability at 2026-09-30 | USD 600.0 million facility - USD 7.6 million letters of credit | USD 592.4 million | USD 592.4 million | Ties | 10-Q_2026-09-30_trn.htm.jsonl, page 21 |
| C5 | Nine-month 2026 revenues | USD 660.3 million Manufacturing + USD 851.9 million Leasing & Services | USD 1,512.2 million | USD 1,512.2 million | Ties | 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C6 | FY2025 revenues against the four quarters | USD 585.4 million + USD 506.2 million + USD 454.1 million + USD 611.2 million | USD 2,156.9 million | USD 2,156.9 million | Ties | 10-K_2025-12-31_trn.htm.jsonl, pages 66, 121 |
| C7 | Nine-month 2025 revenues: 2025 quarters in the annual report against the comparative in the Q3 report | USD 585.4 million + USD 506.2 million + USD 454.1 million | USD 1,545.7 million | USD 1,545.7 million | Ties | 10-K_2025-12-31_trn.htm.jsonl, page 121; 10-Q_2026-09-30_trn.htm.jsonl, page 2 |
| C8 | 2025-12-31 balances repeated across filings | Total assets USD 8,424.4 million and total debt USD 5,442.5 million in the FY2025 report, Q1, Q2 and Q3 reports | Same figures in all four filings | USD 8,424.4 million; USD 5,442.5 million | Agree | 10-K_2025-12-31_trn.htm.jsonl, pages 67, 98; 10-Q_2026-03-31_trn.htm.jsonl, pages 3, 16; 10-Q_2026-06-30_trn.htm.jsonl, pages 3, 19; 10-Q_2026-09-30_trn.htm.jsonl, pages 3, 20 |
| C9 | Covenant ratios at 2026-09-30 | Covenant EBITDA as defined in the credit agreement is needed | Not calculable: the credit agreement and the issuer's covenant EBITDA are not supplied | Maximum net leverage 0.75x against a 3.75x limit; minimum interest coverage 13.13x against a 2.25x limit | Printed ratios only | 10-Q_2026-09-30_trn.htm.jsonl, pages 50–51 |

## Gaps

| Gap | Severity | What could not be established | Why it matters | Source |
| --- | --- | --- | --- | --- |
| Cash interest and cash taxes paid in 2026 | MATERIAL | The three 2026 quarterly reports print no interest paid or income taxes paid line (searched for interest paid, paid interest, cash interest, income tax payments and taxes paid). The FY2025 report prints interest paid of USD 272.8 million and income tax payments of USD 51.4 million, so nine-month 2026 and last-twelve-month cash interest and cash taxes are not established; interest expense, net is printed (USD 195.5 million for nine months 2026) | Cash interest cover and cash flow after interest rest on accrual interest expense for 2026 periods, which differs in timing from cash paid | 10-K_2025-12-31_trn.htm.jsonl, pages 46, 69; 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4 |
| Debt maturity ladder after 2025-12-31 | MATERIAL | The latest ladder is at 2025-12-31 and shows USD 1,096.1 million due in 2026. Since then the 2019-1 notes (USD 377.1 million outstanding) were redeemed in April 2026, Tribute Rail debt left the consolidated statements, the revolver maturity was extended in June 2026, and a USD 349.8 million term loan entered on October 19, 2026 funded the redemption of the 2019-2 notes (USD 280.9 million outstanding) and the repayment of warehouse borrowings. The quarterly report states that scheduled maturities are described in the 2025 annual report, so a ladder at 2026-09-30 is not established | Refinancing timing and the maturity wall by year cannot be stated for the latest balance sheet without an assumption | 10-K_2025-12-31_trn.htm.jsonl, page 107; 10-Q_2026-09-30_trn.htm.jsonl, pages 21–23 |
| Perimeter change across the December 2025 and April 2026 exchanges | MATERIAL | Triumph left the consolidated statements in December 2025 and TRIP Holdings, with Tribute Rail debt of USD 271.3 million at 2025-12-31, in April 2026; 2025 comparatives include these entities and their noncontrolling interests, and no pro forma figures are printed (searched for pro forma) | Debt, interest, noncontrolling interest and fleet comparisons before and after the exchanges describe different perimeters; adjusting for them needs assumptions the filings do not support | 10-K_2025-12-31_trn.htm.jsonl, pages 43, 98; 10-Q_2026-09-30_trn.htm.jsonl, pages 17–18, 20 |
| Executed financing documents | MINOR | No credit agreement, indenture or amendment is supplied and run settings declare no legal documents; the annual report exhibit index lists them | Covenant definitions, guarantors and baskets rest on the issuer's own summary; the June 2026 amendment terms are known only as summarized | 10-K_2025-12-31_trn.htm.jsonl, pages 130–134; 10-Q_2026-09-30_trn.htm.jsonl, pages 21, 51 |
| Issuer-reported EBITDA | MINOR | The filings print no EBITDA or adjusted EBITDA (searched for EBITDA); it appears only inside covenant definitions | EBITDA has to be derived from operating profit and depreciation, with disclosed disposition gains separated, and the covenant EBITDA cannot be recomputed | 10-K_2025-12-31_trn.htm.jsonl, page 54; 10-Q_2026-09-30_trn.htm.jsonl, page 51 |
| Governance detail | MINOR | Board composition, independence, compensation and share ownership are incorporated by reference to the 2026 proxy statement, which is not supplied | Governance can be described only from the executive officer list and the signing directors | 10-K_2025-12-31_trn.htm.jsonl, pages 11, 127–128, 136 |
| Events after the latest filing | MINOR | No earnings release, lender presentation or current report is supplied; nothing after the 2026-10-29 quarterly report up to the 2026-11-18 cutoff is established | Developments in the three weeks before the cutoff, including any later financing or rating action, are unknown | 10-Q_2026-09-30_trn.htm.jsonl, page 56 |
| Ratings, prices, peers and portfolio | MINOR | Run settings supply no rating, quote, peer, valuation or portfolio input; the annual report names the rating agencies but states no rating | Agency view, market pricing and relative value are not established | 10-K_2025-12-31_trn.htm.jsonl, page 30 |
| Text representation | MINOR | Tables arrive as flattened text rows, charts and images are not carried, and page numbers are text chunks rather than printed pages; key statements were tied out in the Calculations section | Column headings of multi-column tables must be read from context, so a misread column is possible outside the tied-out figures | 10-Q_2026-09-30_trn.htm.jsonl, pages 2–4 |

## Next module

The orchestrator selects the next module.
