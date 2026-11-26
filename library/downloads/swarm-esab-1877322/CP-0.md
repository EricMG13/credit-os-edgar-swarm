---
module_id: CP-0
module_name: Source readiness
issuer_id: esab-1877322
issuer_name: ESAB Corp
analysis_date: 2026-11-18
pathway: credit snapshot
module_status: Complete
---

# CP-0 Source readiness: ESAB Corp (esab-1877322)

## Request

ESAB Corp (esab-1877322), as of 2026-11-18, credit snapshot pathway. Scope: whether the five supplied SEC filings can support the Financial foundation, Business & governance and Fundamental credit modules requested for this run, and what is missing.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_esab-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-20 | 8ea58a06e8accc5572f57381573170af74734fa165d53e6dd42aa7df44b9974c | Inventoried and read for identity, FY2024 statements, debt note and signature page; the date is the signature date, the filing date is not stated |
| 10-K_2025-12-31_esab-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-20 | 39fec53df5558e15951b5a9712fdf352a83a668e1bb520905419999bceca45eb | Inventoried and read for FY2025 statements, debt note, debt maturities, subsequent events, executive officers and Part III; the date is the signature date, the filing date is not stated |
| 10-Q_2026-04-03_esab-20260403.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended April 3, 2026 | 2026-05-07 | 87ed2b5108a9275c938cf55468b93711dfcccf9a434c75d0b03075a2655254b4 | Inventoried and read for Q1 2026 statements, officer changes and exhibit list; the date is the signature date, the filing date is not stated |
| 10-Q_2026-07-03_esab-20260703.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended July 3, 2026 | 2026-08-06 | b2b67b8533ed1d21f5bc50726e68f7ae6a1e19e7d9a11d0bee2594fce20db11c | Inventoried and read for Q2 2026 statements and signature page; the date is the signature date, the filing date is not stated |
| 10-Q_2026-10-02_esab-20261002.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended October 2, 2026 | 2026-11-04 | 9f0e55c3c7e3a6dbf05c32d8d51df4f5c9c53f67d187880f38c3e9bc80d46598 | Inventoried and read for the latest statements, acquisition note, debt note, liquidity and subsequent events; the date is the signature date, the filing date is not stated |

No analytical output from another module was supplied to this module.

## Findings

### Bottom line

The five supplied SEC filings support the requested credit work on ESAB Corp, but only with limitations: leverage cannot be read directly because no pro forma or covenant-defined EBITDA is printed for the balance sheet enlarged by the June 2026 Eddyfi acquisition. Any leverage or covenant-headroom conclusion built on these filings should be labelled provisional until the credit agreement and a pro forma EBITDA are obtained.
Basis: 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 10–11; 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 16–17

The latest balance sheet is dated October 2, 2026, 47 days before the as-of date, and the annual and quarterly statements tie to one another on every amount tested. The acquisition breaks comparability, so year-end 2025 debt and cash predate it and should not be carried forward as current. No executed agreement, indenture, credit rating, market price or peer set was supplied, so legal, ratings and valuation work stays blocked.
Basis: 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2–3; calculation C1; calculation C2; calculation C4; calculation C6

### T1 - Input gate

| Gate check | Result | Detail | Source |
| --- | --- | --- | --- |
| Objective | Pass | Credit snapshot of ESAB Corp as of 2026-11-18 using the Financial foundation, Business & governance and Fundamental credit modules; the run settings state no further objective, so the objective is the pathway's use case | Run settings (not an issuer source) |
| Issuer identity | Pass | ESAB Corporation, Delaware, common stock listed on the New York Stock Exchange as ESAB, commission file number 001-41297, large accelerated filer; matches the run's issuer | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 1 |
| Reporting perimeter | Pass with limitation | Consolidated ESAB Corporation; Eddyfi is consolidated from June 1, 2026; the run settings name no separate borrower, parent, guarantor or sponsor; the debt note says certain US subsidiaries guarantee the credit agreement and senior notes without naming them | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 9, 16 |
| Periods | Pass | Fiscal years 2024 and 2025 from the two annual reports; Q1, Q2 and Q3 2026 (13-week quarters ended April 3, July 3 and October 2, 2026) with prior-year comparatives | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 77; 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2–3 |
| Currency and units | Pass | US dollars; statements are in thousands and management's discussion is in millions | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2, 51–52 |
| Cutoff | Pass | Cutoff is 2026-11-18; the latest signature date in the sources is 2026-11-04; later dates in the sources are labelled plans or expectations (a trading plan window from 2026-11-30, a pension settlement charge expected in Q4 2026) | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 31, 56 |
| Source authority | Pass | All five sources are SEC annual and quarterly reports (primary tier); no earnings release, 8-K or issuer presentation was supplied | 10-K_2024-12-31_esab-20241231.htm.jsonl, page 1; 10-K_2025-12-31_esab-20251231.htm.jsonl, page 1; 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 1; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 1; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 1 |
| Legal documents | Not supplied: run settings declare none | The credit agreement, indentures and share purchase agreement are listed as exhibits incorporated by reference but were not supplied | 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 45 |
| Market inputs | Not supplied: run settings are blank | No ratings, price quotes, peer set, portfolio workbook, prior case or management bridge | Run settings (not an issuer source) |
| Gate result | Pass with limitations | The five filings carry the primary evidence the three requested modules need; limitations are listed under Gaps | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2–5 |

### T2 - Source register

| Source | Document family | Period covered | Authority tier | Audit status | Active representation | Limitation | Source reference |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_esab-20241231.htm.jsonl | Annual report | FY2024 with FY2023 and FY2022 income statements; balance sheets at December 31, 2024 and 2023 | 1 (primary filing) | Audited | Supplied page-text file, 133 pages | Oldest source; statements titled consolidated and combined; FY2024 amounts recur as comparatives in the 2025 annual report and tie | 10-K_2024-12-31_esab-20241231.htm.jsonl, pages 75–77 |
| 10-K_2025-12-31_esab-20251231.htm.jsonl | Annual report | FY2025 with FY2024 and FY2023 income statements; balance sheets at December 31, 2025 and 2024 | 1 (primary filing) | Audited | Supplied page-text file, 129 pages | Year-end balance sheet predates the Eddyfi acquisition and the 2031 senior notes; Part III (directors, compensation, ownership) incorporated by reference to a proxy statement not supplied | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 77–79 |
| 10-Q_2026-04-03_esab-20260403.htm.jsonl | Quarterly report | Three months ended April 3, 2026 versus April 4, 2025; balance sheet at April 3, 2026 versus December 31, 2025 | 1 (primary filing) | Unaudited | Supplied page-text file, 46 pages | Cash flow statement covers three months only; balance sheet holds cash raised ahead of the Eddyfi closing | 10-Q_2026-04-03_esab-20260403.htm.jsonl, pages 2–4 |
| 10-Q_2026-07-03_esab-20260703.htm.jsonl | Quarterly report | Three and six months ended July 3, 2026 versus July 4, 2025; balance sheet at July 3, 2026 | 1 (primary filing) | Unaudited | Supplied page-text file, 57 pages | Cash flow statement is year-to-date (six months); holds about one month of Eddyfi | 10-Q_2026-07-03_esab-20260703.htm.jsonl, pages 2–4 |
| 10-Q_2026-10-02_esab-20261002.htm.jsonl | Quarterly report | Three and nine months ended October 2, 2026 versus October 3, 2025; balance sheet at October 2, 2026 | 1 (primary filing) | Unaudited | Supplied page-text file, 56 pages | Cash flow statement is year-to-date (nine months); purchase price allocation is preliminary and open to adjustment within one year | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2–5 |

### T4 - Content-to-module map

| Content area | Module | Disposition | What the sources hold | What limits it | Source |
| --- | --- | --- | --- | --- | --- |
| Income statement, balance sheet and cash flow statement for FY2024, FY2025 and Q1 to Q3 2026 with prior-year comparatives | Financial foundation | Recommended with limitations | Full statements in all five filings; the December 31, 2025 balance sheet is identical in the 2025 annual report and the three 2026 quarterly reports | Cash flows are year-to-date in each quarterly report; Q4 2025 is not reported alone; the year-end 2025 balance sheet predates the Eddyfi acquisition | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 2–5; 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 77–79 |
| Debt instruments, facility terms, availability and cash location | Financial foundation | Recommended with limitations | Debt table by instrument; term loan A and revolver maturing October 16, 2030; 2029 and 2031 senior notes; revolver availability; letter of credit capacity; cash held outside the United States | No covenant levels or springing-maturity terms printed; no maturity ladder after the 2026 financing; agreements not supplied | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 15–18, 51–52; 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 106–109 |
| Adjusted EBITDA reconciliation and segment results | Financial foundation | Recommended with limitations | Company-defined Adjusted EBITDA and core adjusted EBITDA reconciled to net income; Americas and EMEA & APAC segment tables | Company definition differs from the credit agreement's EBITDA, which is not printed; no pro forma EBITDA | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 29–30, 38–40 |
| Business description, strategy, risk factors, executive officers | Business & governance | Recommended with limitations | Item 1 business and Item 1A risk factors; executive officer table and biographies; two reportable segments | Directors, ownership and compensation sit in a proxy statement not supplied; the 2026 change in principal financial officer is not explained | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 7–44, 47–48, 122–123 |
| Eddyfi acquisition, its financing and purchase accounting | Business & governance; Financial foundation | Recommended with limitations | Closing on June 1, 2026; consideration; financing from cash, 2031 senior notes, revolver, mandatory convertible preferred stock and common stock placements; preliminary allocation; pro forma net sales and net income | Allocation is preliminary; no pro forma EBITDA; Eddyfi stand-alone financial statements not supplied | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 9–11, 16–17, 51 |
| Contingent and non-debt claims: asbestos, pensions, leases, purchase obligations, tariffs, Russia | Fundamental credit | Recommended with limitations | Asbestos liability and insurance assets in the quarterly and annual notes; US pension plan termination with a charge of about USD 37 million expected in Q4 2026; unconditional purchase obligations of USD 162.4 million at year-end 2025; Russia about 5% of net sales | Lease and purchase-obligation tables are year-end 2025 only; no current-quarter update | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 27–28, 31; 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 18, 63, 116–119 |
| Quarterly comparatives for earnings drivers | Earnings changes; Earnings quality | Inapplicable: not requested in this run | Three- and nine-month comparatives with volume, price, acquisition and currency components | Not requested; no limitation beyond those above | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 41–50 |
| Facility, swap and refinancing data | Liquidity; Refinancing & LME; Rates, FX & hedging; Downside; Forward credit model | Inapplicable: not requested in this run | Facility terms, availability, derivative notes and debt maturities | Not requested; no management projections or guidance supplied | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 15–21 |
| Credit ratings and market prices | Ratings & triggers; Market-implied risk | Blocked: inputs absent | No agency rating is stated in any filing and the run settings supply none; no price quotes supplied | Needs agency ratings and dated quotes | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 24–25 |
| Executed agreements | Legal & covenants; Covenant capacity; Structural priority; Intercreditor control; Recovery & fulcrum; Security selection | Blocked: executed agreements absent | Run settings declare no legal documents; the filings only summarise the credit agreement and indentures | Needs the credit agreement, indentures and share purchase agreement | 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 45 |
| Peer set | Peer benchmark | Blocked: inputs absent | Run settings name no peers | Needs a peer list and peer financials | Run settings (not an issuer source) |
| Portfolio and committee inputs | Committee decision; Evidence validation | Inapplicable: not requested in this run | No portfolio workbook supplied | Not requested | Run settings (not an issuer source) |
| Comparison with an earlier run | Changes since the last run | Inapplicable: first run of this pathway | No earlier run of this issuer and pathway | Not applicable | Run settings (not an issuer source) |

### T6 - Evidence trace

| Claim ID | Claim | Evidence | Lineage class | Source |
| --- | --- | --- | --- | --- |
| E1 | The registrant is ESAB Corporation, a Delaware company listed on the New York Stock Exchange | Cover page of the latest quarterly report | Directly Sourced | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 1 |
| E2 | The five filings cover FY2024, FY2025 and the first three quarters of 2026 | Cover pages and statement headings of each filing | Directly Sourced | 10-K_2024-12-31_esab-20241231.htm.jsonl, page 75; 10-K_2025-12-31_esab-20251231.htm.jsonl, page 77; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 2 |
| E3 | 2026 quarterly net sales sum to the reported nine-month figure | USD 745,597 thousand + USD 807,627 thousand + USD 824,521 thousand = USD 2,377,745 thousand | Calculated | calculation C1 |
| E4 | 2025 comparative quarterly net sales sum to the reported nine-month comparative | USD 678,138 thousand + USD 715,586 thousand + USD 727,845 thousand = USD 2,121,569 thousand | Calculated | calculation C2 |
| E5 | The December 31, 2025 balance sheet is carried unchanged in the three 2026 quarterly reports | Long-term debt USD 1,232,540 thousand and total assets USD 4,766,094 thousand in each | Directly Sourced | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 78; 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 3; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 3; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 3 |
| E6 | Q4 2025 net sales are not reported alone and follow by difference | USD 2,842,555 thousand less USD 2,121,569 thousand = USD 720,986 thousand | Calculated | calculation C3 |
| E7 | The debt table components sum to total debt and reconcile to the balance sheet | Components, current portion and deferred fees reconcile to long-term debt of USD 2,319,712 thousand | Calculated | calculation C4 |
| E8 | Stated revolver availability equals the facility less drawings | USD 1,050,000 thousand less USD 290,000 thousand = USD 760,000 thousand | Calculated | calculation C5 |
| E9 | Eddyfi was acquired on June 1, 2026 for about USD 1.5 billion net of cash received, financed with cash, the 2031 senior notes, a revolver draw and equity placements | Acquisition note and financing note | Directly Sourced | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 9, 16 |
| E10 | The Eddyfi purchase price allocation is preliminary and may change materially within one year | Note 3 preliminary purchase price allocation | Directly Sourced | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 9 |
| E11 | The pro forma disclosure gives net sales and net income only | Pro forma table and adjustments paragraph | Directly Sourced | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 10–11 |
| E12 | The latest balance sheet date is 47 days before the as-of date | October 2, 2026 to November 18, 2026 | Calculated | calculation C6 |
| E13 | Cash flow statements in the quarterly reports are cumulative year-to-date | Nine months ended October 2, 2026 column | Directly Sourced | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 5 |
| E14 | Directors, executive compensation and ownership are incorporated by reference to a proxy statement that was not supplied | Documents incorporated by reference and Part III items | Directly Sourced | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 2, 122–123 |
| E15 | The principal financial officer and chief accounting officer named in signatures changed between the 2025 annual report and the 2026 quarterly reports | Signature pages | Directly Sourced | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 129; 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 46; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 57 |
| E16 | Covenant levels and the springing-maturity trigger are not printed, although compliance is stated | Compliance sentence without thresholds | Insufficient Information | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 16–17 |
| E17 | No pro forma or covenant-defined EBITDA is printed for the enlarged business | Pro forma table holds net sales and net income only | Insufficient Information | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 10–11 |
| E18 | No credit rating is stated in the filings or the run settings | Search of all five filings found only generic rating-risk wording | Insufficient Information | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 24–25 |
| E19 | Gross equity placements equal the committed equity named before closing | USD 175.0 million + USD 143 million = USD 318 million against about USD 318 million committed | Calculated | calculation C8 |
| E20 | Net consideration for Eddyfi differs from the nine-month acquisitions cash outflow | USD 1,487,883 thousand less USD 24,673 thousand = USD 1,463,210 thousand against USD 1,469,372 thousand | Calculated | calculation C7 |

### P3 - Input inventory

| Source | Filing described | Bytes | Pages in supplied text | Period end | Entity | Inventory status |
| --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_esab-20241231.htm.jsonl | Annual report FY2024 | 361,876 | 133 | 2024-12-31 | ESAB Corporation | Listed; searched and read where cited |
| 10-K_2025-12-31_esab-20251231.htm.jsonl | Annual report FY2025 | 352,551 | 129 | 2025-12-31 | ESAB Corporation | Listed; searched and read where cited |
| 10-Q_2026-04-03_esab-20260403.htm.jsonl | Quarterly report Q1 2026 | 127,570 | 46 | 2026-04-03 | ESAB Corporation | Listed; searched and read where cited |
| 10-Q_2026-07-03_esab-20260703.htm.jsonl | Quarterly report Q2 2026 | 157,471 | 57 | 2026-07-03 | ESAB Corporation | Listed; searched and read where cited |
| 10-Q_2026-10-02_esab-20261002.htm.jsonl | Quarterly report Q3 2026 | 156,680 | 56 | 2026-10-02 | ESAB Corporation | Listed; searched and read where cited |
| _retrieval.json | Not supplied: file not read | Not supplied: file not read | Not supplied: file not read | Not supplied: file not read | Not supplied: file not read | Ignored by the launcher before this module ran; not read |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-20 | day | 2025-02-20 | Annual report for FY2024 signed | Historical — signed on behalf of the registrant | 10-K_2024-12-31_esab-20241231.htm.jsonl, page 132; 10-K_2024-12-31_esab-20241231.htm.jsonl, pages 76, 106 | Oldest statements in the set: year-end 2024 total debt USD 1,085,000 thousand and cash USD 249,358 thousand; the amounts recur as comparatives in the 2025 annual report |
| 2026-02-20 | day | 2026-02-20 | Annual report for FY2025 signed | Historical — signed on behalf of the registrant | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 129; 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 78, 106; 10-K_2025-12-31_esab-20251231.htm.jsonl, page 121 | Last statements before the Eddyfi acquisition: year-end 2025 total debt USD 1,243,215 thousand and cash USD 185,863 thousand; its subsequent-events note carries the January 2026 Eddyfi agreement |
| 2026-05-07 | day | 2026-05-07 | Quarterly report for Q1 2026 signed | Historical — signed on behalf of the registrant | 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 46; 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 3 | Cash at April 3, 2026 was USD 1,004,790 thousand against USD 185,863 thousand at year-end 2025, ahead of the June 1 closing, so the balance sheet is not comparable with later quarters |
| 2026-08-06 | day | 2026-08-06 | Quarterly report for Q2 2026 signed | Historical — signed on behalf of the registrant | 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 57; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 8 | First statements consolidating Eddyfi, which closed June 1, 2026, so the quarter holds about one month of its results (net sales contribution USD 21.4 million) |
| 2026-11-04 | day | 2026-11-04 | Quarterly report for Q3 2026 signed | Historical — signed on behalf of the registrant | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 56 | Latest statements and the only balance sheet after a full quarter of Eddyfi; signed 14 days before the as-of date |
| 2026-10-02 | day | 2026-11-04 | Latest balance sheet date: quarterly period ended October 2, 2026 | Historical — Quarterly Period Ended October 2, 2026 | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 1 | Latest dated financial position; it is 47 days before the as-of date, so later cash and debt movements are not in the sources |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 9 |
| Calculated | 8 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 3 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

## Calculations

Amounts are as printed, in US dollars. Day counts run from the period end or signature date to the as-of date.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | 2026 quarterly net sales against the nine-month figure | Q1 USD 745,597 thousand; Q2 USD 807,627 thousand; Q3 USD 824,521 thousand | Sum USD 2,377,745 thousand equals the reported nine-month net sales of USD 2,377,745 thousand; difference USD 0 | 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 2; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 2 |
| C2 | 2025 comparative quarterly net sales against the nine-month comparative | Q1 USD 678,138 thousand; Q2 USD 715,586 thousand; Q3 USD 727,845 thousand | Sum USD 2,121,569 thousand equals the reported nine-month comparative of USD 2,121,569 thousand; difference USD 0 | 10-Q_2026-04-03_esab-20260403.htm.jsonl, page 2; 10-Q_2026-07-03_esab-20260703.htm.jsonl, page 2; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 2 |
| C3 | Implied Q4 2025 net sales | FY2025 USD 2,842,555 thousand less nine months 2025 USD 2,121,569 thousand | USD 720,986 thousand (derived, not reported alone) | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 77; 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 2 |
| C4 | Debt table tie-out at October 2, 2026 | Term loans USD 350,000 thousand + senior unsecured notes USD 1,700,000 thousand + revolver USD 290,000 thousand + other debt USD 7,041 thousand; less current portion USD 9,357 thousand; less deferred financing fees USD 17,972 thousand | Total debt USD 2,347,041 thousand; long-term debt USD 2,319,712 thousand equals the balance sheet; the year-end 2025 column also ties (USD 1,243,215 thousand total, USD 1,232,540 thousand long-term) | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 3, 15 |
| C5 | Revolver availability at October 2, 2026 | Revolving Facility USD 1,050,000 thousand less drawn USD 290,000 thousand | USD 760,000 thousand equals the stated USD 760 million of availability | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 15–17 |
| C6 | Age of the latest balance sheet | October 2, 2026 to the as-of date November 18, 2026; signature date November 4, 2026 to the as-of date | 47 days; 14 days | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 1, 56 |
| C7 | Eddyfi consideration net of cash received | Allocation total USD 1,487,883 thousand less cash acquired USD 24,673 thousand; nine-month cash flow line USD 1,469,372 thousand | USD 1,463,210 thousand; difference from the cash flow line USD 6,162 thousand, not attributed in the filing (the cash flow line covers all acquisitions in the period) | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 5, 9 |
| C8 | Equity placements against committed equity | MCPS gross proceeds USD 175.0 million + common stock gross proceeds USD 143 million | USD 318 million, equal to the approximately USD 318 million of committed equity named in the 2025 annual report | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 51; 10-K_2025-12-31_esab-20251231.htm.jsonl, page 52 |

## Gaps

| Gap ID | Type | Severity | Evidence demand | Effect on the requested work | Remediation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| G1 | Source gap | MATERIAL | Pro forma EBITDA for the enlarged business and Eddyfi stand-alone results; the filings print pro forma net sales and net income only, and Eddyfi sales since June 1, 2026 of USD 84.3 million for nine months | Financial foundation and Fundamental credit can compute last-twelve-month leverage only on an EBITDA that holds about four months of Eddyfi, which overstates leverage against the enlarged debt; any pro forma figure would be a labelled estimate | Obtain the acquisition-date presentation or earnings release with pro forma EBITDA, or state leverage on both bases | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 9–11 |
| G2 | Source gap | MATERIAL | Covenant levels, EBITDA definition and the springing-maturity condition of the credit agreement; the filings state compliance and a margin grid of 1.125% to 1.750% on total leverage but no maintenance threshold (searched for threshold, maximum, ratio and step-down wording) | Covenant headroom is not calculable; Financial foundation and Fundamental credit can state compliance only | Obtain the amended and restated credit agreement and the 2029 and 2031 indentures | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 16–17 |
| G3 | Source gap | MINOR | Directors, executive compensation and security ownership (the Rales Holders hold registration rights; their holding is not stated) are incorporated from the 2026 proxy statement | Business & governance cannot assess board independence, ownership concentration or pay | Obtain the 2026 proxy statement | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 2, 42, 122–123 |
| G4 | Source gap | MINOR | Debt maturity ladder after the 2026 financing; the only ladder is at year-end 2025 and omits the 2031 senior notes (contractual dates are printed for each instrument) | The maturity wall must be assembled from instrument terms; the term loan amortisation after 2026 is known only from the year-end 2025 ladder | Assemble the ladder from the debt note and flag it as derived | 10-K_2025-12-31_esab-20251231.htm.jsonl, page 109 |
| G5 | Source gap | MINOR | Quarterly reports for Q1 to Q3 2025 as originally filed; they appear only as comparatives in the 2026 reports, and Q4 2025 is not reported alone | Comparatives could differ from the original filings if recast; the sums tie, so none is visible | Treat comparatives as the 2026 reports print them; derive Q4 2025 by difference and label it | 10-Q_2026-10-02_esab-20261002.htm.jsonl, page 2 |
| G6 | Source gap | MINOR | Credit ratings, price quotes, peer set, portfolio workbook, prior case and management bridge are not in the sources or run settings | Ratings, market-implied, peer and portfolio work cannot be done; the requested modules are unaffected | Supply them if those analyses are wanted | Run settings (not an issuer source) |
| G7 | Conflict | MINOR | Multi-figure event, Eddyfi price: about USD 1.45 billion at signing (2025 annual report); about USD 1.5 billion consideration net of cash received at closing; allocation total USD 1,487,883 thousand before USD 24,673 thousand of cash acquired; nine-month acquisitions cash outflow USD 1,469,372 thousand covering all acquisitions. Eddyfi revenue is about USD 270 million projected for 2026 (2025 annual report) and about USD 240 million for 2025 (Q3 2026 report): different periods, not a conflict | The figures have different roles and none is chosen over another; later modules should cite each with its role | Cite the closing allocation for the balance sheet and the cash flow line for cash paid | 10-Q_2026-10-02_esab-20261002.htm.jsonl, pages 5, 9, 35; 10-K_2025-12-31_esab-20251231.htm.jsonl, page 52 |
| G8 | Source gap | MINOR | Reason for the 2026 change of principal financial officer (the 2025 annual report names Kevin Johnson; the Q1 2026 report names the chief executive as interim; the Q2 2026 report names R. Brent Jones) and of the chief accounting officer | Business & governance cannot say from the filings whether the change was planned or what it means for finance continuity | Obtain the 8-K for the change | 10-K_2025-12-31_esab-20251231.htm.jsonl, pages 47, 129; 10-Q_2026-04-03_esab-20260403.htm.jsonl, pages 45–46 |

## Next module

The orchestrator selects the next module.
