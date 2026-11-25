---
issuer_id: vsec
module_id: CP-0
analysis_date: 2026-11-05
---

## Request

VSE CORP (issuer vsec), as of 2026-11-05, credit snapshot pathway. This module checks whether the seven supplied filings and earnings releases, which run from the FY2025 annual report to the Q3 2026 quarterly report, can support the requested analysis of the issuer's business and governance, financial foundation and fundamental credit. The reporting entity is VSE Corporation and its subsidiaries on a consolidated basis.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_vsec-20251231.htm.jsonl | Annual report on Form 10-K for the fiscal year ended 2025-12-31 (audited) | 2026-02-27 | 83b072172f28f55aebaf3a6972f9c86687a4b113bdf988f323774cea0cf36aed | Business description, risk factors, FY2025 statements and notes, debt note, subsequent events, exhibit list |
| 10-Q_2026-03-31_vsec-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-03-31 (unaudited) | 2026-05-08 (signature date) | f6b924ea5eba470e1f49667b84c48b593c43a380b95f687d6114875e8f37f39d | Q1 2026 statements, February 2026 offerings, PAG closing and credit agreement amendment as subsequent events |
| 10-Q_2026-06-30_vsec-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-06-30 (unaudited) | 2026-08-06 (signature date) | fa3609d44d226dc8671529fb2fbfc175fcb641b5ffc98070769608107bc75600 | First statements with PAG consolidated, term loan B note, exhibit list naming the credit agreement amendment |
| 10-Q_2026-09-30_vsec-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 2026-09-30 (unaudited) | 2026-11-05 (signature date) | 68af0ce7093699c714a705843bb9cea05a028d2dd1bb6a0a12fdd362022c36f1 | Latest balance sheet, debt and maturity note, acquisitions, liquidity discussion, subsequent event |
| EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | Earnings press release for the first quarter of 2026 (exhibit 99.1) | 2026-05-05 | 1a0b0741e0cb41d8d01fb77bba0765b0d91e0ee2d640c0871a3ef4c38f0e2f04 | Q1 2026 non-GAAP reconciliations, net debt, guidance update after the PAG closing |
| EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | Earnings press release for the second quarter of 2026 (exhibit 99.1) | 2026-08-05 | 047a25aea3f55f6b12255c44556aba2d1cd8074d64427d9b3bf8fc3f0328e7e4 | Q2 2026 non-GAAP reconciliations, net debt and leverage, raised guidance, changed adjusted net income definition |
| EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | Earnings press release for the third quarter of 2026 (exhibit 99.1) | 2026-11-04 | 433c5d4af4ceef97f7133d6bf32c06676acee7a23adece5c52f374d8108500f0 | Q3 2026 non-GAAP reconciliations, net debt, net leverage and adjusted net leverage, raised guidance |

No earlier module output was supplied: this module is the first of the run.

## Findings

### Bottom line

The seven supplied filings and earnings releases support a dated credit snapshot of VSE CORP, but not covenant headroom, ratings or market-based work, so creditors should read every leverage ratio as management-defined until the credit agreement is supplied.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 17–19; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 5–7; calculation C5

The statements and releases tie on the figures that drive leverage: principal debt of USD 978.8 million and net debt of USD 894.2 million in the Q3 release reproduce from the quarterly report's balance sheet and debt note. Management reports net leverage of 3.0x and adjusted net leverage of 2.3x, and the gap between them rests on USD 88.8 million of pre-acquisition EBITDA that no supplied document itemizes. Covenant levels, guarantor and collateral terms, ratings, market prices and the governance disclosures held in the proxy statement are not established.
Basis: 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 5–7; calculation C2; calculation C4; calculation C5; calculation C6

### T1 - Input gate

| Gate item | Result | Source |
|---|---|---|
| Objective | Credit snapshot of VSE CORP for a portfolio manager or credit committee reader; the run states no investment objective, deal terms or fund constraint, so the objective is the pathway's use case | Run settings, not issuer evidence |
| As-of date and cutoff | 2026-11-05 for both; the latest supplied document is signed 2026-11-05 and nothing supplied is dated after the cutoff | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 36 |
| Requested analysis | Source readiness, Business & governance, Financial foundation, Fundamental credit | Run settings, not issuer evidence |
| Reporting entity and perimeter | VSE Corporation and its subsidiaries, consolidated; one reportable segment (Aviation); the Fleet and Federal and Defense businesses are reported as discontinued operations; no parent, sponsor or separate borrower entity is named in the run settings | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 7–8 |
| Current and prior periods | Current period Q3 2026 (three and nine months ended 2026-09-30); prior period FY2025 (year ended 2025-12-31) | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 3 |
| Currency and units | USD; statements in thousands, release narrative in millions | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |
| Document set | One annual report (FY2025), three quarterly reports (Q1 to Q3 2026), three earnings releases (Q1 to Q3 2026) | Sources table above |
| Audit status | FY2025 statements carry an audit opinion that they present fairly, in all material respects, with one critical audit matter on the write-down of slow-moving inventory; the 2026 quarterly statements are unaudited | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 39–40 |
| Declared attachments | No portfolio workbook, prior case or management bridge; legal documents declared none | Run settings, not issuer evidence |
| Declared market and rating inputs | Ratings, quotes, deal terms, peers and valuation inputs are blank in the run settings and are treated as not supplied, never as zero | Run settings, not issuer evidence |
| Source gate | partial: the primary filings and releases cover the requested modules; the credit agreement and its amendment, ratings, market data and the proxy statement are missing (see Gaps) | Gaps section below |
| Fit to objective | Supports the financial foundation, business profile and fundamental credit views with stated limitations; does not support covenant headroom, recovery, ratings or market-implied work | T4 below |

### T2 - Source register

| ID | Document | Source | Entity and period | Authority tier | Quality | Limitations |
|---|---|---|---|---|---|---|
| S1 | Annual report FY2025 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 1 | VSE Corporation, consolidated; FY2025 with FY2024 and FY2023 comparatives | Tier 1: filed, audited | High | Describes the PAG purchase as pending and the debt table before the May 2026 refinancing; Part III is incorporated by reference to a proxy statement that is not supplied |
| S2 | Quarterly report Q1 2026 | 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 1 | VSE Corporation, consolidated; three months to 2026-03-31 | Tier 1: filed, unaudited | High | Balance sheet predates the PAG closing and the term loan B; PAG closing and the amendment appear only as subsequent events |
| S3 | Quarterly report Q2 2026 | 10-Q_2026-06-30_vsec-20260630.htm.jsonl, page 1 | VSE Corporation, consolidated; three and six months to 2026-06-30 | Tier 1: filed, unaudited | High | First statements with PAG consolidated; purchase price allocation preliminary |
| S4 | Quarterly report Q3 2026 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 1 | VSE Corporation, consolidated; three and nine months to 2026-09-30 | Tier 1: filed, unaudited | High | Latest statements; allocations for PAG, NorthStar and Atech preliminary; risk factors refer back to the annual report |
| S5 | Earnings release Q1 2026 | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1 | VSE Corporation, continuing operations; three months to 2026-03-31 | Tier 2: issuer release | Medium | Management non-GAAP measures; adjusted net income and EPS use the earlier definition, later restated |
| S6 | Earnings release Q2 2026 | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 1 | VSE Corporation, continuing operations; three and six months to 2026-06-30 | Tier 2: issuer release | Medium | Management non-GAAP measures; adjusted net income and EPS definition changed with retrospective restatement |
| S7 | Earnings release Q3 2026 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 1 | VSE Corporation, continuing operations; three and nine months to 2026-09-30 | Tier 2: issuer release | Medium | Management non-GAAP measures; leverage ratios differ from the credit agreement's covenant ratio |

### T4 - Content-to-module map

| Capability | Disposition | Content located | Readiness | Limitation | Source |
|---|---|---|---|---|---|
| Financial foundation | Recommended (selected in this run) | Balance sheets, income statements and cash flow statements for FY2025 and Q1 to Q3 2026; debt, derivative and acquisition notes; non-GAAP reconciliations, net debt and leverage tables in the releases | READY_WITH_LIMITATIONS | Pre-acquisition EBITDA behind the adjusted leverage ratio is not itemized; Q4 2025 stand-alone quarter is derived, not reported; purchase allocations are preliminary; 2025 cash flows include discontinued operations | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 3–7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 17–19; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 6–7 |
| Business & governance | Recommended (selected in this run) | Business description, one-segment structure, disposals, acquisitions, customer concentration, risk factors and the named chief executive and chief financial officers | READY_WITH_LIMITATIONS | Board, independence, ownership and compensation sit in the proxy statement, which is not supplied; no sponsor is named in the run settings | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 3–5; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 78 |
| Fundamental credit | Recommended (selected in this run) | Leverage, coverage inputs, liquidity, maturities, acquisition funding and integration evidence | READY_WITH_LIMITATIONS | No covenant levels, ratings, market prices or peers; leverage ratios are management-defined | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| Earnings changes | Recommended if requested | Three quarterly releases with prior-year comparatives and guidance changes | READY | Q1 adjusted net income uses the earlier definition | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |
| Earnings quality | Recommended if requested | Non-GAAP reconciliations, add-backs and the Q2 2026 definition change | READY_WITH_LIMITATIONS | Add-backs include acquisition, integration and restructuring costs and stock-based compensation; the pre-acquisition portion is not itemized | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 6–7; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, pages 5–7 |
| Liquidity | Recommended if requested | Cash, revolver commitments and drawings, letters of credit, scheduled term loan and amortizing note payments, earn-out obligations | READY_WITH_LIMITATIONS | Timing and form of the PAG earn-out payment are not stated | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 17–19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| Refinancing & LME | Recommended if requested | Maturity table by year, term loan B due 2033, revolver due 2030, amortizing notes due 2029 | READY_WITH_LIMITATIONS | No market prices; covenant levels absent | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19 |
| Rates, FX & hedging | Recommended if requested | Interest rate swaps, variable rate terms and the interest rates on the term loan and revolver | READY | Market risk disclosure covers interest rates only; foreign exchange exposure is not quantified although revenue is earned outside the United States and a translation adjustment appears in 2026 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 19–20; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 38; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 5 |
| Downside and Forward credit model | Recommended if requested | FY2026 revenue growth and Adjusted EBITDA margin guidance and quarterly history | READY_WITH_LIMITATIONS | No management case beyond FY2026; no capital expenditure, interest, tax or cash flow guidance in figures | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |
| Ratings & triggers | Blocked | No rating or rating trigger in any supplied document | BLOCKED | The only mention of credit ratings is a generic risk factor sentence | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 23 |
| Legal & covenants; Covenant capacity; Structural priority; Intercreditor control; Recovery & fulcrum; Security selection | Blocked | Filings state covenant types, a collateral requirement and an annual dividend limit, but no levels, guarantor list, collateral perimeter, lien ranking or intercreditor terms; the credit agreement, its amendment and the note indenture are incorporated by reference to filings not supplied | BLOCKED | Run settings declare no legal documents; a filing's summary of an agreement is not the executed agreement | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 63; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-06-30_vsec-20260630.htm.jsonl, page 33; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 81 |
| Market-implied risk | Blocked | No quotes, spreads or valuation inputs | BLOCKED | Quotes and valuation inputs are blank in the run settings | Run settings, not issuer evidence |
| Peer benchmark | Blocked | No peer set or peer financials | BLOCKED | Peers are empty in the run settings | Run settings, not issuer evidence |
| Committee decision and Evidence validation | Recommended if requested | Issuer evidence as above | READY_WITH_LIMITATIONS | Fund limits are not supplied; any sizing view needs them | Run settings, not issuer evidence |
| Research questions | Inapplicable | No research question is entered in the run settings | Inapplicable | None | Run settings, not issuer evidence |
| Changes since the last run | Inapplicable | First run of this pathway; no earlier run is pinned | Inapplicable | None | Run settings, not issuer evidence |

### T6 - Evidence trace

| Claim ID | Claim | Value | Lineage class | Source |
|---|---|---|---|---|
| E1 | Principal debt at 2026-09-30 | Term loan USD 897,750 thousand; revolver USD 20,000 thousand; amortizing notes USD 61,043 thousand; total USD 978,793 thousand | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| E2 | Debt carrying amount at 2026-09-30 | USD 959,939 thousand after USD 18,854 thousand of issuance costs; current portion USD 32,344 thousand | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| E3 | Cash at 2026-09-30 | USD 65,786 thousand | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| E4 | Net debt at 2026-09-30 | USD 894,153 thousand (principal less issuance costs less cash) | Directly Sourced | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| E5 | Management leverage ratios | Net leverage 3.0x on TTM Adjusted EBITDA of USD 300,387 thousand; adjusted net leverage 2.3x on TTM Acquisition Adjusted EBITDA of USD 389,234 thousand | Directly Sourced | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| E6 | Ratio definitions | Net leverage and adjusted net leverage differ from the Total Net Leverage Ratio defined in the credit agreement | Directly Sourced | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5 |
| E7 | Covenant types | Maximum Total Net Leverage Ratio, minimum Interest Coverage Ratio and an annual limit on dividends; compliance stated at 2026-09-30 | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 33 |
| E8 | Covenant levels and step-downs | Not printed in any of the seven sources | Insufficient Information | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 19; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 63 |
| E9 | Credit agreement amendment | First amendment 2026-05-05: term loan B USD 900.0 million due 2033-05-05; revolver raised from USD 400.0 million to USD 500.0 million due 2030-05-02 | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18 |
| E10 | Unused revolver commitments | USD 479.2 million at 2026-09-30, after USD 20.0 million drawn and USD 0.8 million of letters of credit | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| E11 | PAG acquisition date | Completed 2026-05-05 | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 9 |
| E12 | PAG consideration | Headline approximately USD 2.025 billion in cash and equity versus purchase consideration of USD 2,020,007 thousand including earn-out at fair value | Conflicting | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10; 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 20; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 2 |
| E13 | Revenue | Q3 2026 USD 541,006 thousand; nine months 2026 USD 1,314,723 thousand | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| E14 | Adjusted EBITDA | Q3 2026 USD 107,165 thousand; nine months 2026 USD 248,619 thousand; TTM USD 300,387 thousand | Directly Sourced | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| E15 | FY2026 guidance | Revenue growth 65% to 66.5%; Adjusted EBITDA margin 18.9% to 19.1% | Directly Sourced | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |
| E16 | Segment structure | One reportable and operating segment | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 21 |
| E17 | Customer concentration | One affiliated customer group was 20% of FY2025 revenue; no 2026 update | Directly Sourced | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 11; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 70 |
| E18 | Governance disclosures | Part III is incorporated by reference to a proxy statement that is not supplied | Insufficient Information | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 78 |
| E19 | Credit ratings | No rating stated in any supplied document | Insufficient Information | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 23 |
| E20 | Q4 2025 stand-alone revenue | USD 301,182 thousand, derived as FY2025 less nine months 2025 | Calculated | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 30; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| E21 | Gap between the two TTM EBITDA bases | USD 88,847 thousand (TTM Acquisition Adjusted EBITDA less TTM Adjusted EBITDA) | Calculated | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| E22 | Composition of that gap | Not itemized by acquired business or period | Insufficient Information | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, pages 5–7 |
| E23 | Audit status of FY2025 | Audit opinion that the statements present fairly, in all material respects; one critical audit matter on slow-moving inventory write-down | Directly Sourced | 10-K_2025-12-31_vsec-20251231.htm.jsonl, pages 39–40 |
| E24 | Test Logic acquisition | Acquired 2026-10-05, funded with cash on hand; price not stated | Insufficient Information | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 27 |
| E25 | Atech acquisition | Acquired 2026-08-31 for USD 64.1 million net of cash acquired | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 9 |
| E26 | Latest document date | Quarterly report signed 2026-11-05, equal to the cutoff | Directly Sourced | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 36 |
| E27 | Adjusted net income definition | Changed from Q2 2026 to add back intangible amortization and stock-based compensation, with prior periods restated | Directly Sourced | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7 |
| E28 | Base of the pre-acquisition portion | Described as Adjusted EBITDA in one place and as EBITDA in another | Conflicting | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |

### P3 - Input inventory

| ID | File | Original file sha256 | Text chunks | Document family | Period | Version relationship |
|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_vsec-20251231.htm.jsonl | 57923a818021135997fb71164db698af80129b950333b9739c884b6f04effa7f | 82 | Annual report (Form 10-K) | FY2025 | Base annual report; later quarterly reports revise some opening allocations |
| S2 | 10-Q_2026-03-31_vsec-20260331.htm.jsonl | 8451b8aaf418e4d3eb269c399733f24d4580d23b9fb7b6eaaa84927c81a72f95 | 28 | Quarterly report (Form 10-Q) | Q1 2026 | Distinct quarter; not a duplicate |
| S3 | 10-Q_2026-06-30_vsec-20260630.htm.jsonl | 6f66911597ee67b19ac5c8947ed6ee33420a3cbd584c5a7dd3c65d68f7ca817f | 34 | Quarterly report (Form 10-Q) | Q2 2026 | Distinct quarter; not a duplicate |
| S4 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl | 108c0da0efb90376cbae88527e2858854b8ecfad590402c989308eb3d27a6dda | 36 | Quarterly report (Form 10-Q) | Q3 2026 | Latest quarter; controls current-period facts |
| S5 | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl | 518acea6d8625d590010fc0546cbdbe3f0783e5db9dc67113383685b440c8d10 | 10 | Earnings release (exhibit 99.1) | Q1 2026 | Release for Q1 2026; the quarterly report controls where they differ |
| S6 | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl | 3a30a0ce387288c229111912dfdad3e7709f73aeaccd8bddc44b3ec29ac82a84 | 13 | Earnings release (exhibit 99.1) | Q2 2026 | Release for Q2 2026; the quarterly report controls where they differ |
| S7 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl | 70830e87d8972bfa14326aa497974cde54be80ecdc3f3ebaa2e261dfa94984d0 | 13 | Earnings release (exhibit 99.1) | Q3 2026 | Release for Q3 2026; the quarterly report controls where they differ |
| S0 | _retrieval.json | Not stated | Not applicable | Retrieval record left out of the effective set by the launcher | Not applicable | Not issuer evidence; not used for any figure |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2026-02-27 | day | 2026-02-27 | Annual report for FY2025 filed | Historical — filed with the SEC on February 27, 2026 | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 82 | Latest audited statements and the base for the year-end net debt of USD 223,446 thousand used in the releases |
| 2026-05-05 | day | 2026-05-05 | First quarter 2026 earnings release published | Historical — press release dated May 5, 2026 | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 1 | Published on the PAG closing date; updates FY2026 guidance to include PAG |
| 2026-05-08 | day | 2026-05-08 | First quarter 2026 quarterly report signed | Historical — signed May 8, 2026 | 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 28 | Balance sheet before the term loan B and PAG; the closing and amendment are reported as subsequent events |
| 2026-08-05 | day | 2026-08-05 | Second quarter 2026 earnings release published | Historical — press release dated August 5, 2026 | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 1 | First release reporting PAG results from 2026-05-05; changes the adjusted net income definition |
| 2026-08-06 | day | 2026-08-06 | Second quarter 2026 quarterly report signed | Historical — signed August 6, 2026 | 10-Q_2026-06-30_vsec-20260630.htm.jsonl, page 34 | First balance sheet with the term loan B and PAG; lists the credit agreement amendment as an exhibit |
| 2026-11-04 | day | 2026-11-04 | Third quarter 2026 earnings release published | Historical — press release dated November 4, 2026 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 1 | Latest management leverage ratios and raised FY2026 guidance |
| 2026-11-05 | day | 2026-11-05 | Third quarter 2026 quarterly report signed | Historical — signed November 5, 2026 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 36 | Latest statements and debt maturity table; signed on the as-of date, so nothing later is used |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 19 |
| Calculated | 2 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 12 |
| Fields total | 12 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 9 |

## Calculations

Every calculation below uses USD thousand inputs exactly as printed; results in millions are rounded to one decimal for the reader passage.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Text chunks across the seven sources | 82 + 28 + 34 + 36 + 10 + 13 + 13 | 216 chunks | Input inventory above |
| C2 | Principal debt tie at 2026-09-30 | 897,750 + 20,000 + 61,043 = 978,793 (equals the release's principal amount) | USD 978.8 million | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C3 | Debt carrying amount tie | 978,793 − 18,854 = 959,939; current 32,344 + long-term 927,595 = 959,939 | USD 959.9 million | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17 |
| C4 | Net debt tie | 978,793 − 18,854 − 65,786 = 894,153 (equals the release's net debt) | USD 894.2 million | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C5 | Management leverage ratios reproduced | 894,153 / 300,387 = 2.98; 894,153 / 389,234 = 2.30 | 2.98x shown as 3.0x; 2.30x shown as 2.3x | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C6 | Gap between the two TTM EBITDA bases | 389,234 − 300,387 = 88,847 | USD 88.8 million | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C7 | Unused revolver commitments | 500,000 − 20,000 − 800 = 479,200 (letters of credit of USD 0.8 million as printed) | USD 479.2 million | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 17; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 32 |
| C8 | Quarterly revenue ties to nine months 2026 | 324,580 + 449,137 + 541,006 = 1,314,723 | USD 1,314.7 million | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 3; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 4; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 3 |
| C9 | Q4 2025 stand-alone revenue (derived, not reported) | 1,112,275 − 811,093 = 301,182 | USD 301.2 million | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 30; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 4 |
| C10 | Quarterly Adjusted EBITDA ties to nine months 2026 | 55,430 + 86,024 + 107,165 = 248,619 | USD 248.6 million | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C11 | TTM Adjusted EBITDA roll-forward | 182,924 − 131,156 + 248,619 = 300,387 | USD 300.4 million | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 |
| C12 | Q1 2026 adjusted net income on the restated definition (derived) | 97,818 − 55,036 = 42,782; 42,782 + 55,036 + 63,758 = 161,576 | USD 42.8 million | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 6 |
| C13 | Aero 3 goodwill revision since the annual report | 218,342 − 214,519 = 3,823 | USD 3.8 million | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 52; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 13 |
| C14 | PAG purchase consideration reconciliation | 1,770,370 − 22,215 = 1,748,155; 1,748,155 + 238,002 + 33,850 = 2,020,007 | USD 2,020.0 million | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10 |

## Gaps

Each item below was searched for in all seven documents, using the term and its synonyms, before it was recorded as missing.

### Missing documents and information

| Gap ID | Type | Severity | Evidence demand | What could not be established | Search made | Remediation |
|---|---|---|---|---|---|---|
| G1 | Source | MATERIAL | Credit agreement dated 2025-05-02, its first amendment dated 2026-05-05 and the amortizing note indenture | Covenant levels and step-downs, the covenant definition of Total Net Leverage Ratio and Interest Coverage Ratio, the dividend limit, guarantors, collateral perimeter and the margin grid after the amendment are not established; the filings give covenant types, compliance and the names of the agents only | Searched for maximum, minimum, not exceed, to 1.0, covenant, guarantor, collateral, pledge and indenture; only covenant types, a general collateral statement and exhibit references were found | Obtain the executed credit agreement, the amendment and the indenture from the filings they are incorporated from, or the lender presentation |
| G2 | Source | MATERIAL | Pre-acquisition EBITDA behind TTM Acquisition Adjusted EBITDA | The USD 88.8 million gap between the two TTM bases is not itemized by acquired business or period, is unaudited and is not a pro forma statement under Regulation S-X Article 11; the adjusted net leverage ratio cannot be rebuilt | Searched for pre-acquisition, acquisition adjusted, pro forma and synergies; only definitions and pro forma revenue and net income were found | Obtain stand-alone EBITDA of each acquired business for the trailing twelve months, or management's reconciliation |
| G3 | Source | MATERIAL | Proxy statement for the 2026 annual meeting (Part III information) | Board composition, independence, committee structure, executive compensation and beneficial ownership are not established; only the chief executive and chief financial officers appear as signatories | Searched Items 10 to 14 of the annual report and the 10-Q exhibit lists; Part III is incorporated by reference | Obtain the definitive proxy statement the annual report expected to file on or about 2026-03-24 |
| G4 | Source | MINOR | Credit ratings | No rating, outlook or rating trigger is stated | Searched for Moody, S&P, Fitch, credit rating, investment grade; only a generic risk factor sentence was found | Supply agency ratings if rating context is required |
| G5 | Source | MINOR | Market prices, spreads, valuation inputs and peer data | Traded levels of the term loan B, the amortizing notes and the tangible equity units, and any peer set, are not established | Searched the run settings and all seven documents for quotes, trading price and peer references; only offering prices and a stock price at 2025-06-30 were found | Supply dated quotes and a peer set if market-implied or relative work is requested |
| G6 | Source | MINOR | Q4 2025 earnings release and non-GAAP history before FY2025 | A reported Q4 2025 quarter and Adjusted EBITDA before FY2025 are not established; Q4 2025 revenue is derived and FY2025 Adjusted EBITDA appears only as a comparative in the 2026 releases | Searched the annual report for Adjusted EBITDA and found only the PAG earn-out reference | Obtain the Q4 2025 earnings release |
| G7 | Source | MINOR | Test Logic purchase price | Acquired 2026-10-05 and described as not material and funded with cash on hand; the price is not stated | Searched all seven documents for Test Logic; one subsequent event note found | Obtain the current report or the next quarterly report |
| G8 | Source | MINOR | Customer concentration after FY2025 | The 20% share of one customer group is stated for FY2025 only; the 2026 quarterly reports split revenue between commercial and government customers only | Searched for customer group, concentration and affiliated customers in all seven documents | Obtain the FY2026 annual report or a customer disclosure |
| G9 | Source | MINOR | Timing and form of the PAG earn-out payment | Up to USD 125.0 million is payable in cash or equity at the company's sole discretion on 2026 PAG adjusted EBITDA; the payment date and the intended form are not stated | Searched for earn-out, contingent consideration and payable in all seven documents | Obtain the stock purchase agreement or management's settlement plan |
| G10 | Source | MINOR | Forward financial detail | Guidance covers revenue growth and Adjusted EBITDA margin only; capital expenditure, cash interest, cash taxes and free cash flow are not quantified for FY2026, and the only leverage outlook is the Q1 statement that adjusted net leverage would be below 3.0x pro forma | Searched the three releases for guidance, outlook and expect; qualitative free cash flow comments only | Obtain management's model or a guidance table |
| G11 | Source | MINOR | Final purchase price allocations | Allocations for PAG, NorthStar, Atech, Aero 3 and the PT6 fuel pump asset are preliminary, so goodwill and intangibles may change | Allocation notes in the Q3 quarterly report state preliminary status | Check the FY2026 annual report for final allocations |
| G12 | Source | MINOR | Fund limits and portfolio context | Not supplied in the run settings; any sizing or concentration view cannot be tested | Run settings declare no portfolio workbook | Supply the portfolio workbook if a committee view is requested |

### Conflicts and version differences

| ID | Topic | Source A | Source B | Difference | Treatment |
|---|---|---|---|---|---|
| K1 | PAG consideration | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 9–10 | 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 20; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 2; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 4 | Purchase consideration of USD 2,020,007 thousand, which includes earn-out at fair value and is net of cash acquired, versus a headline of approximately USD 2.025 billion in cash and equity and USD 1.750 billion of cash | Both kept: different definitions, reconciled in calculation C14; the quarterly report's amounts govern accounting figures |
| K2 | Financing structure | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 29; 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 74 | 10-Q_2026-03-31_vsec-20260331.htm.jsonl, page 21; 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 18 | The annual report describes commitments for a term loan B, a revolver upsize and an upsize of the term loan A, with bridge and backstop facilities reduced to zero; later reports show a single USD 900.0 million term loan B that repaid the prior term loan in full | The later quarterly reports control; the annual report text is a plan |
| K3 | Leverage definitions | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7; EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, page 8 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5 | Net leverage 3.0x and adjusted net leverage 2.3x versus the credit agreement's Total Net Leverage Ratio, whose definition and level are not supplied; at 2026-06-30 the same ratios were 3.6x and 2.4x | No ratio is chosen; each is labelled by definition |
| K4 | EBITDA base of the pre-acquisition portion | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 5 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Adjusted EBITDA in the definition and EBITDA in the table footnote | Preserved; the base is not established |
| K5 | Adjusted net income definition | EX-99.1_2026-05-05_vse-prxq1x2026earningsrele.htm.jsonl, page 5 | EX-99.1_2026-08-05_vse-prxq2x2026earningsrele.htm.jsonl, pages 5–7 | Q1 2026 adjusted EPS of USD 1.17 uses the earlier definition; from Q2 2026 amortization and stock-based compensation are added back with prior periods restated | Restated basis used for comparisons; Q1 derived in calculation C12 |
| K6 | Aero 3 allocation | 10-K_2025-12-31_vsec-20251231.htm.jsonl, page 52 | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, page 13 | Goodwill of USD 214,519 thousand in the annual report versus USD 218,342 thousand after measurement period adjustments | The later report controls; reconciled in calculation C13 |
| K7 | 2025 cash flow perimeter | 10-Q_2026-09-30_vsec-20260930.htm.jsonl, pages 6–7 | EX-99.1_2026-11-04_vse-prxq3x2026earningsrele.htm.jsonl, page 7 | Nine months 2025 operating cash flow and free cash flow include discontinued operations, while 2026 figures do not | 2025 free cash flow is not comparable with continuing operations |

## Next module

The orchestrator selects the next module.
