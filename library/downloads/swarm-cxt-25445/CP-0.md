---
module_id: CP-0
module_name: SourceReadiness
run_id: cxt-25445-2026-11-18-credit_snapshot-host
issuer_name: Crane NXT, Co.
issuer_id: cxt-25445
reporting_period: Q3 2026
analysis_date: 2026-11-18
---

## Request
Assess whether the pinned issuer filings and releases support the selected credit_snapshot work for Crane NXT, Co. as of 2026-11-18. Scope is source preparation, evidence coverage, limitations and readiness for the selected modules.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_cxt.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 | a40c2da1e312c80059c7a702d6e8ead07a70bf3c60b776e12edea1a2fd778eac | Historical statements, debt and facility disclosures, operating segments and source lineage |
| 10-K_2025-12-31_cxt.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-26 | 01187d5c69747fdd7576e6df20b86f97ae44d4962226c99fc0083d69999c404b | Latest year-end statements, business description, debt, liquidity and notes |
| 10-Q_2026-03-31_cxt.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-06 | a8e9fbb164be7cd86f650fbb5d3eb4fc3dbc5a3297e893af12b5b216cc151d4a | Q1 2026 financial statements, acquisition and financing disclosures |
| 10-Q_2026-06-30_cxt.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-05 | 26065b334699985449b07e01e37f38843cee7dcbabfea858a70e5cf21c9b3917 | Q2 2026 statements, debt and amendment disclosures |
| 10-Q_2026-09-30_cxt.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-04 | 55422b5e495513ada133cd913a2e17251021745f2ce0eee3fa1e4e8436a4d411 | Current quarter and nine-month statements, debt, liquidity and subsequent events |
| EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl | First-quarter 2026 earnings release | 2026-05-06 | 08a8feef76d82c6540a59447f57579038d57c84af3731630fd0b026945ea3dd1 | Quarterly adjusted measures, segment results and management commentary |
| EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl | Second-quarter 2026 earnings release | 2026-08-05 | c8c9342ab29cb1624423def3fb7ee109bbbda3e7d7723b40a5611b23c2b55aab | Quarterly adjusted measures, guidance and management commentary |
| EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | Third-quarter 2026 earnings release | 2026-11-04 | 67f82d3885906de865063f3f40fbf1da0d9b57013fb7f261abf4484b67df59a9 | Latest quarter, nine-month adjusted measures, leverage and revised guidance |

## Findings

### Bottom line
The source set supports a filing-based credit snapshot of Crane NXT, Co. through Q3 2026, with limitations around executed facility terms and market inputs. Credit work can use issuer-level filings and releases, while covenant, ratings and market conclusions need separately sourced evidence.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 1; 10-Q_2026-09-30_cxt.htm.jsonl, page 1; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 1

The issuer is Crane NXT, Co.; its quarterly reports describe consolidated statements for Crane NXT and subsidiaries. The annual and interim filings cover FY2024, FY2025, Q1, Q2 and Q3 2026; the three releases provide quarter-specific non-GAAP reconciliations and narrative. The annual filings and latest 10-Q are primary sources; earnings releases are supporting issuer sources. The source set is current to the stated cutoff.
Basis: 10-K_2024-12-31_cxt.htm.jsonl, page 1; 10-K_2025-12-31_cxt.htm.jsonl, page 1; 10-Q_2026-03-31_cxt.htm.jsonl, page 1; 10-Q_2026-06-30_cxt.htm.jsonl, page 1; 10-Q_2026-09-30_cxt.htm.jsonl, page 1

### T1 — Input Gate

| Item | Input or result | Evidence | Status |
|---|---|---|---|
| Issuer perimeter | Crane NXT, Co. and subsidiaries, consolidated issuer reporting perimeter | 2026 10-Q identifies Crane NXT, Co.; Note 1 says references to the Company include Crane NXT, Co. and its subsidiaries | Present |
| As-of and current period | 2026-11-18; Q3 2026 | Run settings; latest 10-Q period ended September 30, 2026 | Present |
| Objective | Filing-based credit snapshot under pathway credit_snapshot | Selected pathway; no separate research question supplied | Present |
| Sources in scope | Five annual/interim filings and three earnings releases, each pinned by exact filename and sha256 in Sources | P3 and T2 below | Present |
| Source gate | READY_WITH_LIMITATIONS for CP-1, CP-1A and CP-2 | Annual/interim statements and quarterly releases cover requested historical and current-period analysis; executed facility terms, ratings, market data and portfolio inputs are not supplied | Partial |

### T2 — Source Register

| Source ID | Exact active file | Authority | Period and perimeter | Content status | Readiness use | Limitation |
|---|---|---|---|---|---|---|
| S1 | 10-K_2024-12-31_cxt.htm.jsonl | SEC annual filing | FY2024; Crane NXT, Co. and subsidiaries | Pinned, page-segmented text; pass-through | Historical baseline for financial and business analysis | Earlier reporting period |
| S2 | 10-K_2025-12-31_cxt.htm.jsonl | SEC annual filing | FY2025; Crane NXT, Co. and subsidiaries | Pinned, page-segmented text; pass-through | Latest audited year-end baseline and notes | No separately attached executed facility agreement |
| S3 | 10-Q_2026-03-31_cxt.htm.jsonl | SEC quarterly filing | Q1 2026; Crane NXT, Co. and subsidiaries | Pinned, page-segmented text; pass-through | Interim results, acquisition and funding | Unaudited interim statements |
| S4 | 10-Q_2026-06-30_cxt.htm.jsonl | SEC quarterly filing | Q2 2026; Crane NXT, Co. and subsidiaries | Pinned, page-segmented text; pass-through | Interim results and amendment references | Unaudited interim statements; amendment terms are not separately attached |
| S5 | 10-Q_2026-09-30_cxt.htm.jsonl | SEC quarterly filing | Q3 2026 and 9M 2026; Crane NXT, Co. and subsidiaries | Pinned, page-segmented text; pass-through | Current period, balance sheet, cash flow, debt and subsequent-event review | Unaudited interim statements |
| S6 | EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl | Issuer earnings release | Q1 2026; consolidated issuer and segments | Pinned, page-segmented text; pass-through | Adjusted results, segment narrative and guidance | Supporting management presentation; not a substitute for filing |
| S7 | EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl | Issuer earnings release | Q2 2026; consolidated issuer and segments | Pinned, page-segmented text; pass-through | Adjusted results, segment narrative and guidance | Supporting management presentation; not a substitute for filing |
| S8 | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | Issuer earnings release | Q3 and 9M 2026; consolidated issuer and segments | Pinned, page-segmented text; pass-through | Current adjusted results, net leverage and guidance | Supporting management presentation; not a substitute for filing |

### P3 — Input Sources

| Source ID | Logical source | Document family | Entity | Period | Original authority | Frozen decision | Active representation |
|---|---|---|---|---|---|---|---|
| S1 | Crane NXT FY2024 annual report | Annual report | Crane NXT, Co. and subsidiaries | FY2024 | SEC filing | PASS_THROUGH | 10-K_2024-12-31_cxt.htm.jsonl |
| S2 | Crane NXT FY2025 annual report | Annual report | Crane NXT, Co. and subsidiaries | FY2025 | SEC filing | PASS_THROUGH | 10-K_2025-12-31_cxt.htm.jsonl |
| S3 | Crane NXT Q1 2026 quarterly report | Quarterly report | Crane NXT, Co. and subsidiaries | Q1 2026 | SEC filing | PASS_THROUGH | 10-Q_2026-03-31_cxt.htm.jsonl |
| S4 | Crane NXT Q2 2026 quarterly report | Quarterly report | Crane NXT, Co. and subsidiaries | Q2 2026 | SEC filing | PASS_THROUGH | 10-Q_2026-06-30_cxt.htm.jsonl |
| S5 | Crane NXT Q3 2026 quarterly report | Quarterly report | Crane NXT, Co. and subsidiaries | Q3 and 9M 2026 | SEC filing | PASS_THROUGH | 10-Q_2026-09-30_cxt.htm.jsonl |
| S6 | Crane NXT Q1 2026 earnings release | Earnings release | Crane NXT, Co. and segments | Q1 2026 | Issuer release | PASS_THROUGH | EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl |
| S7 | Crane NXT Q2 2026 earnings release | Earnings release | Crane NXT, Co. and segments | Q2 2026 | Issuer release | PASS_THROUGH | EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl |
| S8 | Crane NXT Q3 2026 earnings release | Earnings release | Crane NXT, Co. and segments | Q3 and 9M 2026 | Issuer release | PASS_THROUGH | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl |

The source set contains no duplicate pairs or separate base/amendment files. Each filing and release remains a distinct active source. Pinned page text is the active content representation; filing authority remains with the SEC filing and release authority with the issuer.
Basis: 10-K_2024-12-31_cxt.htm.jsonl, page 1; 10-K_2025-12-31_cxt.htm.jsonl, page 1; 10-Q_2026-03-31_cxt.htm.jsonl, page 1; 10-Q_2026-06-30_cxt.htm.jsonl, page 1; 10-Q_2026-09-30_cxt.htm.jsonl, page 1; EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl, page 1; EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl, page 1; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 1

### T4 — Content-to-Module Map

| Module | Evidence demand | Active sources | Readiness | Limitation and effect |
|---|---|---|---|---|
| CP-1 | FY and quarterly statements, cash flows, segments, operating drivers and period labels | S1–S5; S6–S8 for reconciled adjusted measures and narrative | READY_WITH_LIMITATIONS | Audited FY2024/FY2025 and Q1–Q3 2026 coverage supports historical analysis; interim values remain unaudited and adjusted metrics require reconciliation to GAAP |
| CP-1A | Business model, segment profile, operating trends, acquisition and strategy narrative | S1–S5; S6–S8 | READY_WITH_LIMITATIONS | Filings and releases provide issuer and segment evidence; no independent market or industry research is supplied |
| CP-2 | Current credit snapshot, debt and liquidity disclosures, earnings and cash flow, material events and risks | S1–S5; S6–S8 | READY_WITH_LIMITATIONS | Filings disclose debt and liquidity summaries, but full executed facility/amendment terms, current agency ratings and market pricing are not separately supplied |
| Other credit routes | Covenant interpretation, ratings triggers, relative value, portfolio fit and recovery | No dedicated legal agreements, ratings research, market quotes or portfolio workbook in the supplied set | Not assessed in this selected scope | These conclusions require their own governing documents or user/market inputs |

### T6 — Evidence Trace

| Evidence ID | Evidence object | Exact source | Locator | Active representation | Use |
|---|---|---|---|---|---|
| E1 | Registrant identifies as Crane NXT, Co.; common stock trades as CXT | 10-Q_2026-09-30_cxt.htm.jsonl | page:1 | 10-Q_2026-09-30_cxt.htm.jsonl | Issuer identity and listed equity |
| E2 | FY2024 annual report and reporting entity | 10-K_2024-12-31_cxt.htm.jsonl | page:1 | 10-K_2024-12-31_cxt.htm.jsonl | Historical filing coverage |
| E3 | FY2025 annual report and reporting entity | 10-K_2025-12-31_cxt.htm.jsonl | page:1 | 10-K_2025-12-31_cxt.htm.jsonl | Latest audited year-end coverage |
| E4 | Q1 2026 quarterly period and registrant | 10-Q_2026-03-31_cxt.htm.jsonl | page:1 | 10-Q_2026-03-31_cxt.htm.jsonl | Interim filing coverage |
| E5 | Q2 2026 quarterly period and registrant | 10-Q_2026-06-30_cxt.htm.jsonl | page:1 | 10-Q_2026-06-30_cxt.htm.jsonl | Interim filing coverage |
| E6 | Q3 2026 quarterly period and registrant | 10-Q_2026-09-30_cxt.htm.jsonl | page:1 | 10-Q_2026-09-30_cxt.htm.jsonl | Current period coverage |
| E7 | Q1 release reports first quarter results | EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl | page:1 | EX99.1_2026-03-31_cxt_exhibit991-pressreleasexq1-htm.htm.jsonl | Adjusted result and management narrative coverage |
| E8 | Q2 release reports second quarter results and guidance | EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl | page:1 | EX99.1_2026-06-30_cxt_exhibit991-pressreleasexq2-htm.htm.jsonl | Adjusted result and guidance coverage |
| E9 | Q3 release reports third quarter results and updated guidance | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | page:1 | EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl | Latest adjusted result and guidance coverage |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| Not supplied: no separate source-readiness event is stated | Not supplied: no event date | Not supplied: no publication date | Not supplied: no source-readiness event | Not supplied: no event status | Not supplied: no event source | Not supplied: no event-specific credit relevance |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 5 |
| Fields total | 5 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 0 |

## Calculations
No derived calculation is required to determine source readiness.

## Gaps

| Gap | Missing evidence | What it limits | Affected analysis |
|---|---|---|---|
| G1 | Full executed credit agreement and complete amendment text are not separately supplied; the filings disclose summaries and identify referenced agreements | The exact current covenant definitions, baskets, collateral and guarantor terms cannot be established from the supplied source set alone | Debt and liquidity analysis can proceed from filing disclosures; legal-term conclusions remain limited |
| G2 | Current agency rating reports and current market prices or bond/loan quotations are not supplied | Current ratings, spread, market value and relative-value conclusions cannot be established | Not needed to prepare the selected historical filing-based modules |
| G3 | Portfolio workbook, target position and portfolio constraints are not supplied | Position sizing and portfolio fit cannot be evaluated | Outside the selected modules |

The source set supports issuer-level filing analysis but not a market or portfolio recommendation. Any conclusion must preserve the reported consolidated issuer perimeter and distinguish audited annual results from unaudited interim periods and issuer-adjusted measures from GAAP results. No external source was used.
Basis: 10-K_2025-12-31_cxt.htm.jsonl, page 1; 10-Q_2026-09-30_cxt.htm.jsonl, page 1; EX99.1_2026-09-30_cxt_exhibit991-pressreleasexq3-htm.htm.jsonl, page 1

## Next module
The orchestrator selects the next module.
