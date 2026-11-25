---
module_id: CP-0
issuer_id: ati-1018963
analysis_date: 2026-11-18
---

# Ati Inc source readiness

## Request

Source readiness for Ati Inc (ati-1018963), as of 2026-11-18, on the credit snapshot pathway. Scope: whether the five supplied SEC filings can support the financial foundation, company profile and short credit snapshot, and what stays outside them.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-29_ati_ati-20241229.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2024-12-29, audited, page-by-page text | 2025-02-21 | 5129255a626b98f7addfdf609eb74e55b220dc6812a97d8d2e664b25268101e0 | Inventoried, dated, classified and mapped; FY2024 statements, debt note and Adjusted EBITDA reconciliation located |
| 10-K_2025-12-28_ati_ati-20251228.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-28, audited, page-by-page text | 2026-02-20 | 5d347abcfa7f23bf17cce990198026c6f76789751d8e82391f3d73b8889e6812 | Inventoried, dated, classified and mapped; FY2025 statements, debt note, leases and subsequent event located |
| 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-29, unaudited, page-by-page text | 2026-04-30 | 5ffcd8d14437d458cf908cae774a27a1093a6470f770f7e1c7402d0a0d5fe7dc | Inventoried, dated, classified and mapped; Q1 2026 interim balance sheet and trailing Adjusted EBITDA located |
| 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-28, unaudited, page-by-page text | 2026-08-06 | 10832f623acc010f2bdcdc370490b828728a0a944d5d811800fe5849797a3b1e | Inventoried, dated, classified and mapped; Q2 2026 notes issue, redemption notice and interim balance sheet located |
| 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-27, unaudited, page-by-page text | 2026-10-29 | da8c601d00131a3f1ce69a17e0738bd7d88a2eb1e7b2c683f8a6d1f946a3cf87 | Inventoried, dated, classified and mapped; latest balance sheet, debt note, liquidity text and leverage reconciliation located |

## Findings

### Bottom line

The five supplied SEC filings are enough for Ati Inc's financial foundation, company profile and short credit snapshot through Q3 2026, but they contain no executed debt agreements, ratings or market prices, so legal priority, covenant and valuation work cannot rest on them.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–77

The filings carry audited statements for three fiscal years, interim statements for the nine months to 2026-09-27, the debt note by instrument, the credit facility terms and the company's own Adjusted EBITDA reconciliation. The latest filing is dated 2026-10-29, so nothing in it post-dates the as-of date. Terms of the credit facility and the notes come from the filings' own descriptions, not from the executed documents.
Basis: 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 47–48; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 61

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-21 | day | 2025-02-21 | Annual report for the fiscal year ended 2024-12-29 signed by the registrant | Historical — signature date printed on the annual report | 10-K_2024-12-29_ati_ati-20241229.htm.jsonl, page 162 | Audited FY2024 base year for the financial foundation and the earlier comparative for the FY2025 report |
| 2026-02-20 | day | 2026-02-20 | Annual report for the fiscal year ended 2025-12-28 signed by the registrant | Historical — signature date printed on the annual report | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 155 | Latest audited year; year-end balance sheet from which later net debt and leverage are measured |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for the quarter ended 2026-03-29 signed by the registrant | Historical — signature date printed on the quarterly report | 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl, page 50 | First 2026 interim balance sheet and trailing Adjusted EBITDA |
| 2026-08-06 | day | 2026-08-06 | Quarterly report for the quarter ended 2026-06-28 signed by the registrant | Historical — signature date printed on the quarterly report | 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl, page 60 | Interim balance sheet after the June 2026 notes issue and before the July 2026 redemption |
| 2026-10-29 | day | 2026-10-29 | Quarterly report for the quarter ended 2026-09-27 signed by the registrant | Historical — signature date printed on the quarterly report | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 61 | Latest filing in the pack and the source of the latest balance sheet, debt note and liquidity text |

### T1 Input gate

| Gate | Result | Detail | Source |
|---|---|---|---|
| Objective | Stated | Credit snapshot pathway use case: a short public credit assessment of the issuer for a portfolio manager or credit committee reader. The run settings state no other objective | Run settings (not an issuer source) |
| Issuer identity | PASS | ATI Inc., a Delaware corporation, Commission file number 1-12001, common stock listed as ATI on the New York Stock Exchange, headquarters in Dallas, Texas | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 1 |
| Reporting perimeter | PASS | Consolidated statements of ATI Inc. and its subsidiaries. No separate statements for a borrower, restricted group or guarantor group are supplied, and the run settings name no borrower, parent or guarantor | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 5 |
| As-of date and cutoff | PASS | As-of date and cutoff 2026-11-18. The latest source is signed 2026-10-29 and states shares outstanding at 2026-10-26. No source is dated after the cutoff | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 1; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 61 |
| Current and prior period | PASS | Current period Q3 2026 (quarter ended 2026-09-27, nine months to the same date); prior period FY2025 (year ended 2025-12-28) | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |
| Financial statements | PASS | Income statement, balance sheet, cash flow statement and notes for FY2023 to FY2025 in the annual reports, and for the nine months to 2026-09-27 against the nine months to 2025-09-28 in the latest quarterly report | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–77 |
| Debt and liquidity disclosure | PASS | Debt note by instrument, asset-based credit facility terms, letters of credit, covenant description, liquidity text and the issuer's own leverage ratios on Adjusted EBITDA | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 46–49 |
| Executed legal documents | Not supplied: the run settings declare none | The credit agreement and indentures appear only in the exhibit lists. Terms are taken from the filings' own summaries | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 152–154 |
| Credit ratings and market quotes | Not supplied: no rating source or quote in the run settings or filings read | No agency rating, bond price, equity price or enterprise value is stated in the filings read | Run settings (not an issuer source) |
| Peers, portfolio and prior case | Not supplied: none attached | Peer source none; no portfolio workbook; no management bridge; first run of this pathway | Run settings (not an issuer source) |
| Source gate | PASS | Financial statements and debt disclosure exist for the current and prior period, so the requested modules can run. Missing items restrict only legal, covenant, valuation and market work | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 |

### T2 Source register

| Source | Logical source | Document type | Entity | Period covered | Document date | Evidence tier | Audit status | Active representation | Readiness input | Limitation |
|---|---|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-29_ati_ati-20241229.htm.jsonl | Annual report FY2024 | Form 10-K | ATI Inc. and subsidiaries, consolidated | Fiscal year ended 2024-12-29, with FY2023 and FY2022 comparatives | 2025-02-21 | Tier 1 | Audited; Ernst & Young LLP opinion dated 2025-02-21 | Supplied page text, 162 pages | ORIGINAL | FY2024 amounts may be superseded by comparatives in the FY2025 report; key lines checked agree |
| 10-K_2025-12-28_ati_ati-20251228.htm.jsonl | Annual report FY2025 | Form 10-K | ATI Inc. and subsidiaries, consolidated | Fiscal year ended 2025-12-28, with FY2024 and FY2023 comparatives | 2026-02-20 | Tier 1 | Audited; Ernst & Young LLP opinion dated 2026-02-20 | Supplied page text, 155 pages | ORIGINAL | Controls the FY2025 balance sheet; balance sheet shows other current liabilities as one line |
| 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl | Quarterly report Q1 2026 | Form 10-Q | ATI Inc. and subsidiaries, consolidated | Quarter ended 2026-03-29 | 2026-04-30 | Tier 2b | Unaudited; no auditor review report in the file | Supplied page text, 50 pages | ORIGINAL | Interim figures can change; used for the interim balance sheet only |
| 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl | Quarterly report Q2 2026 | Form 10-Q | ATI Inc. and subsidiaries, consolidated | Quarter and half year ended 2026-06-28 | 2026-08-06 | Tier 2b | Unaudited; no auditor review report in the file | Supplied page text, 60 pages | ORIGINAL | Interim figures can change; carries the June 2026 notes issue and redemption notice |
| 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl | Quarterly report Q3 2026 | Form 10-Q | ATI Inc. and subsidiaries, consolidated | Quarter and nine months ended 2026-09-27 | 2026-10-29 | Tier 2b | Unaudited; no auditor review report in the file | Supplied page text, 61 pages | ORIGINAL | Latest balance sheet is unaudited; reclassifies part of other current liabilities into accrued liabilities against the annual report |

### P3 Input inventory

| Ref | File name | sha256 | Size in bytes | Pages | Format | Accessible | Duplicate check |
|---|---|---|---|---|---|---|---|
| S1 | 10-K_2024-12-29_ati_ati-20241229.htm.jsonl | 5129255a626b98f7addfdf609eb74e55b220dc6812a97d8d2e664b25268101e0 | 407485 | 162 | JSON lines, one page of visible text per line | Yes | Distinct period; no duplicate |
| S2 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl | 5d347abcfa7f23bf17cce990198026c6f76789751d8e82391f3d73b8889e6812 | 385497 | 155 | JSON lines, one page of visible text per line | Yes | Distinct period; no duplicate |
| S3 | 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl | 5ffcd8d14437d458cf908cae774a27a1093a6470f770f7e1c7402d0a0d5fe7dc | 122026 | 50 | JSON lines, one page of visible text per line | Yes | Distinct period; no duplicate |
| S4 | 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl | 10832f623acc010f2bdcdc370490b828728a0a944d5d811800fe5849797a3b1e | 156263 | 60 | JSON lines, one page of visible text per line | Yes | Distinct period; no duplicate |
| S5 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl | da8c601d00131a3f1ce69a17e0738bd7d88a2eb1e7b2c683f8a6d1f946a3cf87 | 158223 | 61 | JSON lines, one page of visible text per line | Yes | Distinct period; no duplicate |

### T4 Content-to-module map

| Content | Source | Module | Evidence demand | Mapping status | Readiness effect | Limitation |
|---|---|---|---|---|---|---|
| Income statement, balance sheet and cash flow statement for FY2023 to FY2025 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 74–77 | CP-1 | Annual statements, debt, cash and cash interest | Mapped | READY | Audited; consolidated perimeter only |
| FY2024 statements as first reported | 10-K_2024-12-29_ati_ati-20241229.htm.jsonl, pages 79–81 | CP-1 | FY2024 base year and comparison with the later comparatives | Mapped | READY | Compare with the FY2025 report comparatives |
| Interim statements for the quarter and nine months to 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 2–4 | CP-1 | Latest balance sheet, trailing twelve months construction | Mapped | READY_WITH_LIMITATIONS | Unaudited |
| Interim balance sheets at 2026-03-29 and 2026-06-28 | 10-Q_2026-03-29_ati_ati-20260329.htm.jsonl, page 2; 10-Q_2026-06-28_ati_ati-20260628.htm.jsonl, page 2 | CP-1 | Intermediate net debt and leverage rows | Mapped | READY_WITH_LIMITATIONS | Unaudited; no interim balance sheet at 2025-09-28 is supplied |
| Debt note by instrument, rates and maturities | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 14–16 | CP-1; CP-2 | Instrument list, carrying value against principal, maturity ladder | Mapped | READY | Guarantor scope of the senior notes is not stated in the note |
| Asset-based credit facility, letters of credit, covenant text and liquidity | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 15–16; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 46–48 | CP-1; CP-2 | Undrawn availability, covenant description | Mapped | READY_WITH_LIMITATIONS | Credit agreement not supplied; headroom beyond the filing text cannot be tested |
| Adjusted EBITDA reconciliation and issuer leverage ratios | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 57; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 63 | CP-1; CP-2 | Reported and adjusted EBITDA, add-back bridge | Mapped | READY | Issuer-defined measure; debt in the ratio is principal including issuance costs |
| Business description, segments and end markets | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 3–9; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 132–136 | CP-1A | Company, segment mix, products and customers | Mapped | READY | Management narrative |
| Pension, retiree, lease, receivable-sale and legal disclosures | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 99–101; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 106–107; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 112–121; 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 139–142 | CP-1; CP-2 | Claims outside the debt figure | Mapped | READY_WITH_LIMITATIONS | Plan-level detail limited to the notes |
| Capital allocation and subsequent event | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 142 | CP-1A; CP-2 | Share repurchase authorisations and financing events | Mapped | READY | One dated subsequent event in the annual report |
| Risk factors | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, pages 16–37 | CP-2 | Contrary evidence and what would change the view | Mapped | READY | Generic in places |
| Executed credit agreement and indentures | Not supplied: the run settings declare none | Legal and covenant work (CP-4) | Definitions, baskets, tests, guarantees | Blocked | BLOCKED | Not selected for this run; no executed document exists in the pack |
| Credit ratings and rating triggers | Not supplied: no rating source in the pack | Ratings work (CP-2H) | Agency ratings and trigger terms | Blocked | BLOCKED | Not selected for this run |
| Market prices, enterprise value, peers | Not supplied: peer source none and no quotes in the run settings | Valuation and market work (CP-1C, CP-1D) | Peer multiples, bond and equity quotes | Blocked | BLOCKED | Not selected for this run |
| Earnings releases, guidance and investor presentation | Not supplied: none in the pack | Earnings and guidance work (CP-1B) | Guidance, discrete quarter commentary | Blocked | BLOCKED | Not selected for this run; the filings carry no guidance table |
| Hedging, maturity wall and refinancing text | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, pages 17–19; 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47 | Hedging and refinancing work (CP-2E, CP-3C) | Hedge notional and maturities | Mapped | READY_WITH_LIMITATIONS | Not selected for this run; facts used only inside the modules that are |

### T6 Evidence trace

| Evidence item | Value | Period | Source | Check |
|---|---|---|---|---|
| Cash and cash equivalents, USD millions | 442.3 | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 | Agrees with liquidity text on page 47 |
| Debt at carrying value, USD millions | 1,857.5 | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 14 | Equals short-term debt 49.7 plus long-term debt 1,807.8 on page 2 |
| Total debt in the issuer's leverage ratio, USD millions | 1,872.7 | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 48 | Debt 1,857.5 plus debt issuance costs 15.2 |
| Adjusted EBITDA, trailing twelve months, USD millions | 1,075.9 | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 48 | Issuer-defined, with add-backs listed on the same page |
| Sales for the quarter, USD millions | 1,423.7 | Q3 2026 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 2 | Statement of operations |
| Sales for the fiscal year, USD millions | 4,587.4 | FY2025 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 74 | Audited statement of operations |
| Interest and commitment fees paid, USD millions | 117.8 | FY2025 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 101 | Debt note supplemental line |
| Cash provided by operating activities, USD millions | 614.3 | FY2025 | 10-K_2025-12-28_ati_ati-20251228.htm.jsonl, page 76 | Audited cash flow statement |
| Revolving credit facility size, USD millions | 600 | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15 | Letters of credit drawn on it are 29.3 on page 16 |
| Additional liquidity under the credit facility, USD millions | 570 (approximate) | 2026-09-27 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47 | Issuer's approximate figure |
| Senior notes issued 2026-06-03, due 2033, USD millions | 450.0 | 2026-06-03 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15 | Net proceeds 443.1 after fees of 6.9 |
| Senior notes due 2027 redeemed 2026-07-08, USD millions | 350.0 | 2026-07-08 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 15 | Redemption notice dated 2026-06-08 |
| Next significant maturity, 4.875% Senior Notes, USD millions | 325.0 | Fourth quarter of FY2029 | 10-Q_2026-09-27_ati_ati-20260927.htm.jsonl, page 47 | Principal in the debt table on page 14 |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 13 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 9 |
| Fields total | 9 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 6 |

## Calculations

No calculation is performed in this module: every figure above is quoted as the filings print it.

## Gaps

| Gap | Missing item | Affected work | Severity | Action |
|---|---|---|---|---|
| Executed legal documents | Credit agreement, indentures and guarantee terms are not in the pack; the run settings declare none | Legal priority, covenant capacity and security analysis; covenant description rests on the filings' own summary | MINOR | Supply the executed credit agreement and indentures before any covenant or priority conclusion |
| Credit ratings | No agency rating or rating-agency report | Ratings and trigger analysis | MINOR | Supply current agency ratings if ratings are to be assessed |
| Market data | No bond or equity prices, enterprise value or peer set | Valuation and market-implied work | MINOR | Supply dated quotes and a peer set if valuation is requested |
| Interim comparatives | No quarterly report for the quarter ended 2025-09-28 and no earnings release or guidance | Discrete Q4 2025 and a balance sheet at 2025-09-28 must be derived or left out | MINOR | Derive Q4 only where components exist; otherwise leave the period unstated |
| Definition difference | The issuer's total debt in its leverage ratio is principal including issuance costs; the balance sheet shows carrying value net of issuance costs | Leverage ratios must name which debt basis they use | MINOR | State both figures wherever a leverage ratio is given |
| Presentation difference | The Q3 2026 quarterly report moves part of other current liabilities into accrued liabilities against the annual report | Line-item comparison between the 2025-12-28 and 2026-09-27 balance sheets | MINOR | Compare totals, or restate the annual line from the quarterly report comparative |

## Next module

The orchestrator selects the next module.
