---
issuer_id: hpp-1482512
module_id: CP-0
analysis_date: 2026-11-18
module_status: Complete
---

## Request

Source readiness for Hudson Pacific Properties, Inc. (issuer hpp-1482512), as of 2026-11-18, for the credit snapshot pathway. The scope is whether the five supplied filings can support the requested financial, business and fundamental credit work.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_hpp-20241231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024, combined for Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | 2025-02-25 (signature date) | e417207573fc1cebee4080d302e5fb27f8eb878e212bcb5cbb3f203bb75125b8 | Identity, perimeter and version map; comparatives for FY2024; share counts before the 2025 reverse split |
| 10-K_2025-12-31_hpp-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, combined for Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | 2026-02-27 (signature date) | 72983a1ff159b80b34efd23f404d112a3a14364c437b7becbe73a31ab809e840 | Prior-period anchor (FY2025); debt, liquidity, ratings and contractual obligations at 2025-12-31 |
| 10-Q_2026-03-31_hpp-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-08 (signature date) | efe375f8220311e4ce14f0fdca8791171f4cef1aa730bc8d912e50ca77584328 | Q1 2026 statements and debt note |
| 10-Q_2026-06-30_hpp-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-10 (signature date) | e4de09d9a2554ab5444fe35ded738ddb199d379d6f719551ce172a453f781850 | Q2 and six-month 2026 statements and debt note |
| 10-Q_2026-09-30_hpp-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-06 (signature date) | 48cee3357fb8f1fb8f4194d9a502474d555f9579c7a821df3d085608f9cabc10 | Current period (Q3 2026 and nine months 2026); debt, covenants, commitments and subsequent events |

No upstream analytical module was supplied to this module.

## Findings

### Bottom line

The five supplied filings are enough for a credit snapshot of Hudson Pacific Properties, Inc., but nothing after the quarterly report signed on 2026-11-06 is supplied, so events in the 12 days to the 2026-11-18 cutoff are not established.

Executed credit agreements, indentures and lender presentations are also absent, and ratings are printed only to 2026-09-30, so any covenant or ratings view rests on what the filings summarise.
Basis: 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 29, 73, 82; calculation C2

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-25 | day | 2025-02-25 | Annual report for FY2024 signed | Historical — signed February 25, 2025 | 10-K_2024-12-31_hpp-20241231.htm.jsonl, page 118 | Earliest source; its share counts are stated before the one-for-seven reverse split, so per-share figures are not comparable with later filings |
| 2026-02-27 | day | 2026-02-27 | Annual report for FY2025 signed | Historical — signed February 27, 2026 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 117 | Audited year-end anchor for debt, cash and credit ratings at 2025-12-31 |
| 2026-05-08 | day | 2026-05-08 | Quarterly report for Q1 2026 signed | Historical — dated May 8, 2026 | 10-Q_2026-03-31_hpp-20260331.htm.jsonl, page 68 | Supplies the first 2026 quarter in the series |
| 2026-08-10 | day | 2026-08-10 | Quarterly report for Q2 2026 signed | Historical — dated August 10, 2026 | 10-Q_2026-06-30_hpp-20260630.htm.jsonl, page 78 | Supplies the second 2026 quarter in the series |
| 2026-11-06 | day | 2026-11-06 | Quarterly report for Q3 2026 signed | Historical — dated November 6, 2026 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 82 | Latest source; nothing between this date and the 2026-11-18 cutoff is supplied |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 20 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 1 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 3 |
| Fields present | 9 |
| Fields total | 10 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 4 |

### Analytical appendix — complete canonical registers

#### T1 Input gate

| Gate item | Requirement | Finding | Status | Source |
|---|---|---|---|---|
| Objective | A stated objective, else the pathway's use case | No objective is stated in the run settings; the pathway's use case applies: a credit snapshot of the issuer as of 2026-11-18, with CP-1, CP-1A and CP-2 requested | Recorded; Analyst Inference | Run settings (not issuer evidence) |
| Issuer and perimeter | Reporting entity named | Hudson Pacific Properties, Inc. is a REIT whose only material asset is its interest in Hudson Pacific Properties, L.P.; the filings are combined and present each entity's statements separately. The Inc. does not issue debt but guarantees some of the operating partnership's debt | Confirmed from the filing text | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 4 |
| Current period | Latest quarter before cutoff | Quarter ended 2026-09-30, with the quarterly report signed 2026-11-06 | Covered | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 82 |
| Prior period | FY2025 year end | Year ended 2025-12-31, with the annual report signed 2026-02-27 | Covered | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 117 |
| Intervening quarters | Quarterly series within 2026 | Q1 2026 (signed 2026-05-08) and Q2 2026 (signed 2026-08-10) supplied | Covered | 10-Q_2026-03-31_hpp-20260331.htm.jsonl, page 68; 10-Q_2026-06-30_hpp-20260630.htm.jsonl, page 78 |
| Cutoff | Evidence dated up to 2026-11-18 | Last supplied document is signed 2026-11-06; 12 days to the cutoff are not covered | Gap (calculation C2) | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 82 |
| Ratings | Ratings in the run settings | None supplied in the run settings. The Q3 2026 quarterly report prints senior unsecured ratings at 2026-09-30 (Moody's B2, Standard and Poor's B, Fitch B+), the same as at 2025-12-31; the FY2025 annual report says the senior debt was downgraded in November 2024, May 2025 and June 2025 | Covered to 2026-09-30; later agency actions not established | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 73; 10-K_2025-12-31_hpp-20251231.htm.jsonl, pages 26, 99 |
| Legal documents | Executed credit agreement and indentures for covenant work | The run settings declare none; the filings summarise the revolving credit facility and senior note covenants only, and the FY2025 annual report lists the credit agreement among its exhibits without reproducing it | Not supplied | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 29; 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 114 |
| Market data, peers, valuation | Quotes, peer set, valuation inputs | None supplied | Not supplied | Run settings (not issuer evidence) |
| Portfolio | Fund limits | None supplied | Not supplied | Run settings (not issuer evidence) |
| Earlier run | Prior run of the same pathway | None; first run of this pathway | Not applicable | Run settings (not issuer evidence) |

#### T2 Source register

| Source ID | Source | Document and entity | Period | Authority tier | Active representation | Chunks | Usability | Limitation |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2024-12-31_hpp-20241231.htm.jsonl | Form 10-K, Hudson Pacific Properties, Inc. and L.P. (combined) | FY2024 and comparatives | 1 | Visible text of the original filing, one chunk per page of text | 194 | READY_WITH_LIMITATIONS | Share and per-share amounts pre-date the one-for-seven reverse split of 2025-12-01 |
| S2 | 10-K_2025-12-31_hpp-20251231.htm.jsonl | Form 10-K, Hudson Pacific Properties, Inc. and L.P. (combined) | FY2025, FY2024, FY2023 | 1 | Visible text of the original filing, one chunk per page of text | 195 | READY | Table cells arrive as space-separated text, so a column heading can sit apart from its row |
| S3 | 10-Q_2026-03-31_hpp-20260331.htm.jsonl | Form 10-Q, Hudson Pacific Properties, Inc. and L.P. (combined) | Q1 2026 (three months) | 1 | Visible text of the original filing, one chunk per page of text | 68 | READY | Unaudited; same table limitation |
| S4 | 10-Q_2026-06-30_hpp-20260630.htm.jsonl | Form 10-Q, Hudson Pacific Properties, Inc. and L.P. (combined) | Q2 2026 (three and six months) | 1 | Visible text of the original filing, one chunk per page of text | 78 | READY | Unaudited; same table limitation |
| S5 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl | Form 10-Q, Hudson Pacific Properties, Inc. and L.P. (combined) | Q3 2026 (three and nine months) | 1 | Visible text of the original filing, one chunk per page of text | 83 | READY | Unaudited; same table limitation; nothing after 2026-11-06 |

#### T4 Content-to-module map

| Map ID | Content | Active representation | Evidence demand | Module | Readiness effect | Limitation | Source |
|---|---|---|---|---|---|---|---|
| M1 | Company statements of operations, balance sheets and cash flows for Q3 2026 and nine months 2026 | S5 | Quarter and year-to-date lines with period labels; cash, debt, interest | CP-1 Financial foundation | READY_WITH_LIMITATIONS | Unaudited; EBITDA and net debt are not printed and must be computed | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 5–7, 9–10 |
| M2 | Audited statements for FY2025, FY2024 and FY2023, with year-end balance sheets | S2 | Annual series and the year-end anchor | CP-1 Financial foundation | READY | FY2025 per-share amounts are restated for the reverse split | 10-K_2025-12-31_hpp-20251231.htm.jsonl, pages 124–125 |
| M3 | Q1 and Q2 2026 statements | S3, S4 | Quarterly series for 2026 | CP-1 Financial foundation | READY | The Q2 report shows three-month and six-month columns; the three-month column is the quarter | 10-Q_2026-03-31_hpp-20260331.htm.jsonl, pages 5–7; 10-Q_2026-06-30_hpp-20260630.htm.jsonl, pages 5–7 |
| M4 | Debt table, principal maturities, covenant tables, interest reconciliation | S5, S2 | Instrument, rate, maturity, security, guarantee; maturity by year | CP-1 Financial foundation; CP-2 Fundamental credit | READY_WITH_LIMITATIONS | Covenant definitions are summarised, not read from the executed documents | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 26–29; 10-K_2025-12-31_hpp-20251231.htm.jsonl, pages 98–99 |
| M5 | Liquidity: cash, revolver capacity and commitment dates, letters of credit, commitments | S5, S2 | Cash plus undrawn capacity net of letters of credit; commitments expiring within twelve months | CP-2 Fundamental credit | READY_WITH_LIMITATIONS | Facility draws after 2026-11-06 are not supplied | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 27, 46–47 |
| M6 | Business description, portfolio, segments, tenants, lease expiries, development pipeline | S2, S5 | Office and studio portfolio, tenant concentration, occupancy, leasing | CP-1A Business & governance | READY | Tenant percentages use two bases (see Gaps) | 10-K_2025-12-31_hpp-20251231.htm.jsonl, pages 10–14; 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 55–57 |
| M7 | Transactions and subsequent events: note tender, property sales, impairments, held for sale | S5 | Event dates and amounts | CP-1A Business & governance; CP-2 Fundamental credit | READY | Terms of the tender offer beyond principal amounts are not given | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 22, 47, 56, 65 |
| M8 | Other capabilities: Liquidity, Refinancing & LME, Legal & covenants, Rates, FX & hedging, Ratings & triggers, Recovery & fulcrum | S5, S2 | Debt, derivative and ratings text exists in the filings; executed legal documents and agency reports do not | Not selected in this run (run requests CP-0, CP-1, CP-1A, CP-2) | Not applicable to this run | Legal & covenants and Recovery & fulcrum would be limited by the absence of executed documents | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 26–30, 73 |

#### T6 Evidence trace

| Evidence ID | Fact | Original document | Active representation | Period | Source |
|---|---|---|---|---|---|
| E1 | Hudson Pacific Properties, Inc. does not conduct business itself apart from acting as sole general partner and guaranteeing some operating partnership debt | Form 10-Q, quarter ended 2026-09-30 | S5 | Q3 2026 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 4 |
| E2 | Cash and cash equivalents 160,533 and restricted cash 44,035 (USD thousand) at 2026-09-30 | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 5 |
| E3 | Unsecured and secured debt, net 3,347,461 (USD thousand) at 2026-09-30 | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 6 |
| E4 | Total revenues 180,893 for Q3 2026 and 551,043 for nine months 2026 (USD thousand) | Form 10-Q, quarter ended 2026-09-30 | S5 | Q3 2026; 9M 2026 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 6 |
| E5 | Impairment loss 147,825 for Q3 2026 and 198,265 for nine months 2026 (USD thousand) | Form 10-Q, quarter ended 2026-09-30 | S5 | Q3 2026; 9M 2026 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 7 |
| E6 | Total unsecured and secured debt principal 3,360,350 (USD thousand) at 2026-09-30 | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 26 |
| E7 | Revolver capacity USD 795.3 million, of which USD 333.3 million of commitments mature on 2026-12-21 | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 27 |
| E8 | Principal due in 2027 of 1,479,767 (USD thousand) after extension options | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 28 |
| E9 | Revolving credit facility covenant table, including adjusted EBITDA to fixed charges of 1.7x against a 1.5x minimum | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 29 |
| E10 | Letters of credit of USD 2.0 million under the revolver and USD 3.1 million for tenant improvements on the Office Portfolio CMBS properties | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 46 |
| E11 | Tender offer repurchase of USD 100.0 million of each of the 3.95% 2027 and 5.95% 2028 notes on 2026-10-14; USD 30.0 million drawn on the revolver as of 2026-11-06 | Form 10-Q, quarter ended 2026-09-30 | S5 | Subsequent event | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 47 |
| E12 | Sale of Skyport Plaza for USD 75.5 million and of the Albuquerque studio for USD 9.4 million on 2026-10-15 | Form 10-Q, quarter ended 2026-09-30 | S5 | Subsequent event | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 47 |
| E13 | One-for-seven reverse stock split effective 2025-12-01 | Form 10-K, year ended 2025-12-31 | S2 | FY2025 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 70 |
| E14 | Credit ratings at 2025-12-31: Moody's B2, Standard and Poor's B, Fitch B+ | Form 10-K, year ended 2025-12-31 | S2 | At 2025-12-31 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 99 |
| E21 | Credit ratings for senior unsecured debt at 2026-09-30: Moody's B2, Standard and Poor's B, Fitch B+ | Form 10-Q, quarter ended 2026-09-30 | S5 | At 2026-09-30 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 73 |
| E15 | Total revenues 831,105 and net loss 592,298 for FY2025 (USD thousand) | Form 10-K, year ended 2025-12-31 | S2 | FY2025 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 125 |
| E16 | Unsecured and secured debt, net 3,351,458 at 2025-12-31 and 4,176,844 at 2024-12-31 (USD thousand) | Form 10-K, year ended 2025-12-31 | S2 | At 2025-12-31 and 2024-12-31 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 124 |
| E17 | Contractual obligations table at 2025-12-31, including principal due within one year of 1,079,767 (USD thousand) | Form 10-K, year ended 2025-12-31 | S2 | At 2025-12-31 | 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 99 |
| E18 | Cash and cash equivalents 138,008 and net loss 50,904 (USD thousand) for Q1 2026 | Form 10-Q, quarter ended 2026-03-31 | S3 | Q1 2026 | 10-Q_2026-03-31_hpp-20260331.htm.jsonl, pages 5–6 |
| E19 | Cash and cash equivalents 80,760 at 2026-06-30 and net loss 104,688 for Q2 2026 (USD thousand) | Form 10-Q, quarter ended 2026-06-30 | S4 | Q2 2026 | 10-Q_2026-06-30_hpp-20260630.htm.jsonl, pages 5–7 |
| E20 | Tenant concentration: Weil, Gotshal & Manges at about 0.8% of annualized base rent (note) and 0.9% of HPP's share of annualized base rent (overview) | Form 10-Q, quarter ended 2026-09-30 | S5 | After 2026-10-05 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 47, 55 |

#### P3 Input sources

| Input ID | Source | Original document name stated in the file | Original sha256 stated in the file | Entity | Period | Version link |
|---|---|---|---|---|---|---|
| I1 | 10-K_2024-12-31_hpp-20241231.htm.jsonl | 10-K_2024-12-31_hpp-20241231.htm | b82ca783003ba9f33ace6aa7fdf5d465681a52d39d1fdf35cd787bf14bf7ad14 | Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | FY2024 | Superseded for year-end 2025 values by I2; kept for the 2024 balance sheet and pre-split share counts |
| I2 | 10-K_2025-12-31_hpp-20251231.htm.jsonl | 10-K_2025-12-31_hpp-20251231.htm | 3f4ae90ac2281a2ba2049159d2e01c8191f3cb1555f75c44bf932a94bbaebcc1 | Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | FY2025 | Controls year-end 2025 values; restates per-share data for the reverse split |
| I3 | 10-Q_2026-03-31_hpp-20260331.htm.jsonl | 10-Q_2026-03-31_hpp-20260331.htm | 0438699e7d4a958c60e0b83629e84692115d3e4fd5779b7073cd5e86e426d3eb | Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | Q1 2026 | Quarter in the 2026 series |
| I4 | 10-Q_2026-06-30_hpp-20260630.htm.jsonl | 10-Q_2026-06-30_hpp-20260630.htm | d9b79875de6251f0768adffe6dbab2763d7eee54720171f62eb1d8afc56d46fd | Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | Q2 2026 | Quarter in the 2026 series |
| I5 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl | 10-Q_2026-09-30_hpp-20260930.htm | cad3b9f87adc059e907d25c9b23f3ac4aff5a489c79f5999c0209f74e7aa6026 | Hudson Pacific Properties, Inc. and Hudson Pacific Properties, L.P. | Q3 2026 | Controls the current-period values and subsequent events |

## Calculations

| ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | Chunks supplied across the five filings | 194 + 195 + 68 + 78 + 83 | 618 chunks |
| C2 | Days between the latest signed document and the cutoff | 2026-11-06 to 2026-11-18 | 12 days |
| C3 | Filings signed in 2026 up to the cutoff | 10-Q for Q1 (2026-05-08), 10-Q for Q2 (2026-08-10), 10-Q for Q3 (2026-11-06), plus the FY2025 10-K (2026-02-27) | 4 filings |

## Gaps

| Gap ID | Gap or conflict | Severity | Affected modules | Readiness effect | Remediation | Source |
|---|---|---|---|---|---|---|
| G1 | No document is supplied for the period after the quarterly report signed on 2026-11-06 to the cutoff of 2026-11-18, a span of 12 days (calculation C2); the revolver drawing of USD 30.0 million is stated only as of 2026-11-06 | MINOR | CP-1, CP-2 | READY_WITH_LIMITATIONS | Obtain any filing or release dated 2026-11-07 to 2026-11-18 | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 47 |
| G2 | Agency actions after 2026-09-30 and market quotes are not supplied; the latest ratings printed are Moody's B2, Standard and Poor's B and Fitch B+ at 2026-09-30 | MINOR | CP-2 | READY_WITH_LIMITATIONS | Supply any rating action since 2026-09-30 and traded levels | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 73 |
| G3 | No executed credit agreement, indenture or lender presentation is supplied (the FY2025 annual report lists the credit agreement as an exhibit only), so covenant definitions and baskets rest on the filing summaries | MINOR | CP-1, CP-2 | READY_WITH_LIMITATIONS | Supply the revolving credit facility agreement and the indentures if covenant headroom is to be assessed | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, page 29; 10-K_2025-12-31_hpp-20251231.htm.jsonl, page 114 |
| G4 | Conflict in the tenant share for Weil, Gotshal & Manges: about 0.8% of the Company's annualized base rent in the subsequent events note and 0.9% of HPP's share of annualized base rent in the overview; the two bases differ and the filing does not reconcile them | MINOR | CP-1A | READY | Quote both with their stated bases; do not choose one | 10-Q_2026-09-30_hpp-20260930.htm.jsonl, pages 47, 55 |
| G5 | Share and per-share amounts in the FY2024 annual report are stated before the one-for-seven reverse split of 2025-12-01 (141,353,435 shares at 2025-02-19 against 54,242,024 at 2026-02-18); later filings restate prior periods | Resolved by labelling | CP-1 | READY_WITH_LIMITATIONS | Use restated figures from the FY2025 annual report and the 2026 quarterlies for any per-share comparison | 10-K_2024-12-31_hpp-20241231.htm.jsonl, page 2; 10-K_2025-12-31_hpp-20251231.htm.jsonl, pages 2, 70 |

## Next module

The orchestrator selects the next module.
