---
issuer_id: gff-50725
module_id: CP-0
analysis_date: 2026-11-18
---

# CP-0 Source readiness: Griffon Corp (gff-50725)

## Request

Source readiness for Griffon Corp (issuer gff-50725) as of 2026-11-18, under the credit snapshot pathway. Scope: whether the four supplied filings can support the selected modules (Source readiness, Financial foundation, Business & governance and Short credit snapshot), and what remains unsupported.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-09-30_gff-20250930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2025 | 2025-11-19 | fc0e17249f99e02270a17b9a7f2256446e6e5d40d93fbd4171ae85061e5c72d8 | Identity, perimeter and period map; the earlier perimeter that still includes the AMES businesses; prior year-end debt and liquidity. The date is the signature date; the filing date is not stated |
| 10-K_2026-09-30_gff-20260930.htm.jsonl | Annual report on Form 10-K for the year ended 30 September 2026 | 2026-11-17 | 92a3b051e05b0f1a1729b1e53dc85ac489959385dfef38d93cc2515c94a1d639 | Latest source: identity, restated perimeter, debt, liquidity, subsequent events, exhibit list and gaps. The date is the signature date; the filing date is not stated |
| 10-Q_2026-03-31_gff-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | 294b90cf2bfc764d150ad2661c4d88f4eb74b3458e1216b4553b6403a26f0165 | Interim period map and the earliest interim report in the sources that shows the AMES businesses as discontinued. The date is the signature date; the filing date is not stated |
| 10-Q_2026-06-30_gff-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-05 | 96058c3de96a5c5432d03a061fc3a8aa41dcb03dc811c973c95926861cef64c7 | Interim period map; debt structure before the August 2026 refinancing. The date is the signature date; the filing date is not stated |

No handoff from another module is supplied: this module is the entry point.

## Findings

### Bottom line

The four filings support a credit snapshot of Griffon Corp's continuing building-products business at 2026-09-30, but covenant headroom, lien priority and recovery cannot be tested because no executed credit agreement or indenture is supplied.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 56; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 129–133

The latest annual report was signed on 2026-11-17, one day before the cut-off, and restates 2025 and 2024 without the divested AMES tools and garden businesses, while the 2025 annual report still shows the larger earlier perimeter, so the two are kept apart. The run settings name Q3 2026 as the current period, yet the June 2026 quarterly balance sheet predates the August 2026 refinancing, so debt and liquidity read from it describe a superseded structure.
Basis: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 133; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 78; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 18; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 53

### T1 - Input gate

| Gate item | Result | Source |
| --- | --- | --- |
| Objective | Not stated by the user; the selected pathway's use case applies: a credit snapshot of the issuer, answered here by Source readiness, Financial foundation, Business & governance and Short credit snapshot | Run settings |
| Issuer identity | Griffon Corporation, Delaware corporation, NYSE symbol GFF, Commission File No. 001-06620; the filings print the same registrant as the run's Griffon Corp | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1 |
| Reporting perimeter | Griffon Corporation consolidated. It is the parent registrant, not a subsidiary inside a group filing, and the statements present no finance-subsidiary split. Continuing operations are the Building Products segment; the two equity-method joint ventures are carried as investments, not consolidated | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 121–122 |
| As-of date and cut-off | 2026-11-18 for both, from the run settings; the latest dated source is signed 2026-11-17 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 133 |
| Periods set by the run | Current period Q3 2026 and prior period FY2025; the sources also carry the year ended 2026-09-30, which is later than Q3 2026 | Run settings; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1 |
| Sources supplied | Four issuer filings, all primary filings: two annual reports and two quarterly reports. No earnings release, lender presentation, rating report, market quote file or peer file | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 1; 10-Q_2026-03-31_gff-20260331.htm.jsonl, page 1; 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 1 |
| Legal documents declared | None declared by the run settings; the filings list the indenture and credit agreement amendments as exhibits but their text is not supplied | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 130–133 |
| Ratings, quotes, deal terms, peers, portfolio, prior run, research questions | None supplied by the run settings | Run settings |
| Evidence after the cut-off | None found: the latest dated events in the sources are a dividend declaration and an added repurchase authority on 2026-11-16, and share repurchases counted to the same date | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 114 |
| Gate result | READY_WITH_LIMITATIONS for the four selected modules; CONDITIONAL for any module that needs an executed legal document, a rating, a market quote, a peer set or a portfolio input, because those sources are not carried | See T4 |

### T2 - Source register

| Source | Document family | Entity and perimeter | Reporting period | Source tier | Authority and quality | Active content | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-09-30_gff-20250930.htm.jsonl | Annual report, Form 10-K | Griffon Corporation consolidated, including the AMES businesses; two reportable segments | Year ended 2025-09-30, with 2024 and 2023 comparatives | 1: primary filing | Audited statements; highest evidence tier | The page-chunked text file listed in Sources; the original .htm is provenance | 2025 and 2024 figures are on the pre-disposal perimeter and are superseded for those years by the restated figures in the 2026 annual report |
| 10-K_2026-09-30_gff-20260930.htm.jsonl | Annual report, Form 10-K | Griffon Corporation consolidated, continuing operations only; AMES U.S., Canada, Australia and U.K. shown as discontinued for all periods; one operating segment, Building Products, plus two joint ventures reported as segments | Year ended 2026-09-30, with 2025 and 2024 restated | 1: primary filing | Audited statements; controls the 2024 to 2026 series | The page-chunked text file listed in Sources; the original .htm is provenance | Part III information is incorporated by reference from a proxy statement that is not supplied |
| 10-Q_2026-03-31_gff-20260331.htm.jsonl | Quarterly report, Form 10-Q | Griffon Corporation consolidated, continuing operations; AMES shown as discontinued for all periods | Quarter and six months ended 2026-03-31 | 1: primary filing | Unaudited interim statements | The page-chunked text file listed in Sources; the original .htm is provenance | Unaudited |
| 10-Q_2026-06-30_gff-20260630.htm.jsonl | Quarterly report, Form 10-Q | Griffon Corporation consolidated, continuing operations; AMES North America sold on 2026-06-09, AMES Australia not yet sold | Quarter and nine months ended 2026-06-30 | 1: primary filing | Unaudited interim statements | The page-chunked text file listed in Sources; the original .htm is provenance | Unaudited; its debt table is before the August 2026 refinancing |

### T4 - Content-to-module map

| Content | Source | Capability | Disposition | Reason and limitation |
| --- | --- | --- | --- | --- |
| Business model, brands, customers, distribution, seasonality, revenue by end market | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 5–12; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 121–123 | Business & governance (CP-1A) | READY_WITH_LIMITATIONS; selected in this run | Continuing business only. The filing narrative gives no management outlook figures |
| Ownership, guarantors, joint ventures, seller financing to the joint ventures | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 58–59; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 93–95 | Business & governance (CP-1A) | READY_WITH_LIMITATIONS; selected in this run | Guarantor data is summarised; guarantee and release terms sit in the indenture, which is not supplied |
| Management, directors, related parties | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 16; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 120; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 134 | Business & governance (CP-1A) | READY_WITH_LIMITATIONS; selected in this run | Executive officers are named. Board independence, compensation and ownership are in a proxy statement that is not supplied |
| Income statement, balance sheet, cash flow statement | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71–74; 10-K_2025-09-30_gff-20250930.htm.jsonl, pages 77–79; 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 2–5; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2–6 | Financial foundation (CP-1) | READY_WITH_LIMITATIONS; selected in this run | Two perimeters: the 2026 annual report restates 2025 and 2024; the 2025 annual report does not. Interim statements are unaudited |
| Debt instruments, coupons, maturities, capitalised fees | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 55–57; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 103–106; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 17–21; 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 14–17; 10-K_2025-09-30_gff-20250930.htm.jsonl, page 104 | Financial foundation (CP-1) | READY_WITH_LIMITATIONS; selected in this run | Principal, carrying value and coupon are printed. No indenture or credit agreement text; the revolver's three maintenance tests are named without levels |
| Liquidity: cash, revolver availability, letters of credit, foreign cash | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 51, 56, 105; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 21, 51 | Financial foundation (CP-1); Short credit snapshot (CP-2) | READY; selected in this run | Availability is stated subject to covenants whose levels are not supplied |
| Adjusted EBITDA reconciliation and the credit-agreement leverage ratio | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 63–66; 10-K_2025-09-30_gff-20250930.htm.jsonl, pages 57, 65; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 57–60; 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 49–52 | Financial foundation (CP-1) | READY_WITH_LIMITATIONS; selected in this run | The compliance EBITDA adds stock-based compensation and, in 2025, discontinued operations not yet disposed, so it differs from the issuer's adjusted EBITDA |
| Disposals, discontinued operations, equity-method investments, perimeter change | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 5–6; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 76–77; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 99–103; 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 6–7 | Financial foundation (CP-1); Business & governance (CP-1A) | READY; selected in this run | Gains, losses and proceeds are stated; the joint ventures' own results are not recorded for 2026 |
| Events after the year-end: dividend, share repurchases, additional repurchase authority | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 114 | Financial foundation (CP-1); Short credit snapshot (CP-2) | READY; selected in this run | Dated to 2026-11-16 and 2026-11-17; amounts after the year-end are not blended into year-end figures |
| Leases, purchase commitments, retiree plans, environmental matters | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 107–109; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 118–120; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 124–126 | Financial foundation (CP-1); Business & governance (CP-1A) | READY_WITH_LIMITATIONS; selected in this run | The Memphis site is described as a probable liability with no amount stated |
| Interest-rate and currency exposure, hedges | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 67, 81 | Rates, FX & hedging | READY_WITH_LIMITATIONS; not selected in this run | The filing states that a 100 basis point rate change is not material and gives no sensitivity amount |
| Maturity wall, refinancing history, revolver extension | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53–57; 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 103–106 | Refinancing & LME; Liquidity | READY; not selected in this run | Ladder, redemption and issuance facts are stated |
| Quarterly earnings series | 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 2–5; 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 2–6 | Earnings changes; Earnings quality | READY_WITH_LIMITATIONS; not selected in this run | The fourth quarter is not printed and would be derived from the annual report less nine months |
| Executed credit agreement, indenture, amendments, second-lien documents | Exhibit list only: 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 130–133 | Legal & covenants; Covenant capacity; Structural priority; Intercreditor control; Recovery & fulcrum | CONDITIONAL; not selected in this run | The text of these documents is not in the effective source set; the filings only summarise them |
| Credit ratings and rating triggers | None supplied; the annual report only names a possible downgrade as a risk: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 3 | Ratings & triggers | CONDITIONAL; not selected in this run | No rating is supplied by the run settings or stated in the filings |
| Market quotes and trading levels | Run settings supply none; the only market value is the 2034 notes' year-end fair value: 10-K_2026-09-30_gff-20260930.htm.jsonl, page 104 | Market-implied risk | CONDITIONAL; not selected in this run | One fair-value figure is not a quote series |
| Peer set and valuation inputs | None supplied | Peer benchmark | CONDITIONAL; not selected in this run | The run settings name no peer source |
| Portfolio limits and mandate | None supplied | Committee decision | CONDITIONAL; not selected in this run | The fund's limits are not supplied |
| Earlier run for comparison | None; the run is the first of this pathway | Changes since the last run | Inapplicable | There is no earlier run to compare with |

### T6 - Evidence trace

| Trace | Statement | Source | Wording at the locator |
| --- | --- | --- | --- |
| E1 | The registrant is Griffon Corporation, listed on the NYSE as GFF | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1 | "GRIFFON CORPORATION (Exact name of registrant as specified in its charter)"; "Common Stock, $0.25 par value GFF New York Stock Exchange" |
| E2 | The latest annual report covers the year ended 2026-09-30 | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1 | "For the year ended September 30, 2026" |
| E3 | The latest annual report was signed on 2026-11-17 and the auditor's report is dated the same day | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 133 | "signed below on November 17, 2026"; "November 17, 2026" |
| E4 | The 2025 annual report was signed on 2025-11-19 | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 140 | "signed below on November 19, 2025" |
| E5 | The March 2026 quarterly report covers the quarter ended 2026-03-31 and is dated 2026-05-07 | 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 1, 59 | "For the quarterly period ended March 31, 2026"; "Date: May 7, 2026" |
| E6 | The June 2026 quarterly report covers the quarter ended 2026-06-30 and is dated 2026-08-05 | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 1, 67 | "For the quarterly period ended June 30, 2026"; "Date: August 5, 2026" |
| E7 | The AMES businesses are discontinued operations for all periods presented in the 2026 annual report | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 6 | "the AMES U.S., Canada, Australia, and U.K. operations have been reported as discontinued operations in the Consolidated Statements of Operations for all periods presented" |
| E8 | The 2025 annual report prints 2025 revenue of 2,519,926 thousand dollars, and the 2026 annual report restates 2025 revenue to 1,795,384 thousand dollars | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 78; 10-K_2026-09-30_gff-20260930.htm.jsonl, page 72 | "Revenue $ 2,519,926 $ 2,623,520 $ 2,685,183"; "Revenue $ 1,848,378 $ 1,795,384 $ 1,855,985" |
| E9 | At 2026-09-30 debt is the 2034 senior notes, the 2031 revolver and a small other balance | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 103 | "Senior Notes due 2034 (a) $ 800,000"; "Revolver due 2031 (b) 260,000"; "Other debt (c) 5" |
| E10 | At 2026-06-30 debt was the 2028 senior notes, the term loan and a small revolver draw | 10-Q_2026-06-30_gff-20260630.htm.jsonl, page 18 | "Senior notes due 2028 (a) $ 974,775"; "Term loan B due 2029 (b) 285,000"; "Revolver due 2028 (b) 15,000" |
| E11 | The refinancing happened on 2026-08-18, after the June quarter end | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 53, 105 | "On August 18, 2026, the Company issued $800,000 aggregate principal amount of 6.25% senior notes due 2034"; "Griffon redeemed all $974,775 aggregate principal outstanding of the 5.75% Senior Notes due 2028" |
| E12 | The revolver's maintenance tests are named without levels | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 56 | "financial maintenance tests including a maximum total leverage ratio, a maximum senior secured leverage ratio and a minimum interest coverage ratio" |
| E13 | The indenture and the credit agreement amendments are exhibits, not supplied text | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 130, 133 | "4.2 Indenture, dated as of August 18, 2026"; "10.29 Third Amendment to Fifth Amended and Restated Credit Agreement, dated as of August 18, 2026" |
| E14 | The 2034 notes are guaranteed by named domestic subsidiaries | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 58 | "fully and unconditionally guaranteed, jointly and severally by Clopay Corporation, Clopay Holding Corp., Hunter Holdings Corporation, Hunter Fan Company, CornellCookson, LLC and Cornell Real Estate Holdings, LLC" |
| E15 | The latest events in the sources are dated 2026-11-16 | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 54, 114 | "On November 16, 2026, the Board of Directors declared a cash dividend of $0.25 per share" |
| E16 | Statement figures are in thousands of US dollars | 10-K_2026-09-30_gff-20260930.htm.jsonl, pages 71, 75 | "(in thousands, except per share data)"; "US dollars and non US currencies in thousands" |

### P3 - Input inventory

| Source | Original document | Original bytes | Original sha256 | Text file bytes | Accessibility | Document family | Provisional entity | Provisional period | Duplicate candidates |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-09-30_gff-20250930.htm.jsonl | 10-K_2025-09-30_gff-20250930.htm | 3023886 | 60225dab8ff7637a8d5090faf1c503eecdf38843143c28632d5a36d48cd4545d | 382890 | Readable, 140 text pages | Annual report | Griffon Corporation | Year ended 2025-09-30 | None: a different fiscal year from the other annual report |
| 10-K_2026-09-30_gff-20260930.htm.jsonl | 10-K_2026-09-30_gff-20260930.htm | 2529568 | b50afaf683e6fcb48654dfe9a56084a51c972ce49c3bc003d4207cc0bf004db5 | 357240 | Readable, 134 text pages | Annual report | Griffon Corporation | Year ended 2026-09-30 | None |
| 10-Q_2026-03-31_gff-20260331.htm.jsonl | 10-Q_2026-03-31_gff-20260331.htm | 1844203 | 1d1a2da3df2affa01f53319ca269508a963239b62d9f16b186b6d3fb6ad5616c | 158088 | Readable, 59 text pages | Quarterly report | Griffon Corporation | Quarter ended 2026-03-31 | None: a different quarter from the other quarterly report |
| 10-Q_2026-06-30_gff-20260630.htm.jsonl | 10-Q_2026-06-30_gff-20260630.htm | 2024471 | 8920a3fdd6d104c53a0b26e60c0303efab5b7dc702b02e50ac82718116215be9 | 180708 | Readable, 67 text pages | Quarterly report | Griffon Corporation | Quarter ended 2026-06-30 | None |
| _retrieval.json | _retrieval.json | 3131 | 142a9f8c9e2f3968355a76f2e6fea63e858a19ec81146cdd5f25c444a82b6bb1 | Not applicable: not a text source | Present in the source folder and ignored by the run | Retrieval log, not an issuer document | Not applicable | Not applicable | None; no figure or date in this handoff is taken from it |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-09-30 | day | 2025-11-19 | Fiscal year 2025 ends; the 2025 annual report covers the year to this date | Historical — "For the year ended September 30, 2025" | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 1 | Prior-period balance-sheet date; its figures include the AMES businesses later reported as discontinued |
| 2025-11-19 | day | 2025-11-19 | The 2025 annual report is signed | Historical — "signed below on November 19, 2025" | 10-K_2025-09-30_gff-20250930.htm.jsonl, page 140 | Date of the earlier perimeter's last audited statements |
| 2026-03-31 | day | 2026-05-07 | Quarter ended; the March 2026 quarterly report covers the quarter to this date | Historical — "For the quarterly period ended March 31, 2026" | 10-Q_2026-03-31_gff-20260331.htm.jsonl, pages 1, 59 | Earliest interim report in the sources that shows the AMES businesses as discontinued |
| 2026-06-30 | day | 2026-08-05 | Quarter ended; the June 2026 quarterly report covers the quarter to this date | Historical — "For the quarterly period ended June 30, 2026" | 10-Q_2026-06-30_gff-20260630.htm.jsonl, pages 1, 67 | Last balance sheet before the August 2026 refinancing |
| 2026-09-30 | day | 2026-11-17 | Fiscal year 2026 ends; the 2026 annual report covers the year to this date | Historical — "For the year ended September 30, 2026" | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 1 | Latest balance-sheet date: first year-end with the refinanced debt and the post-disposal perimeter |
| 2026-11-17 | day | 2026-11-17 | The 2026 annual report is signed and the auditor's report is dated | Historical — "signed below on November 17, 2026" | 10-K_2026-09-30_gff-20260930.htm.jsonl, page 133 | Latest-dated source, one day before the cut-off |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 12 |
| Calculated | 0 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 3 |

## Calculations

This module performs no calculation; it compares dates, periods and perimeters only, and every figure it quotes is copied from a source.

## Gaps

No executed credit agreement, indenture or amendment text is supplied. The 2026 annual report lists them as exhibits and names the revolver's three maintenance tests without stating their levels, so covenant headroom, lien priority and guarantee release terms cannot be established beyond the filing summaries.

The two annual reports sit on different perimeters. The 2025 annual report prints 2025 revenue of USD 2,519,926 thousand including the AMES businesses, and the 2026 annual report restates 2025 revenue to USD 1,795,384 thousand for continuing operations. The restated figures are the only like-for-like series for 2024 to 2026; the 2025 annual report is context for the earlier perimeter and its figures are not mixed into that series.

The run settings name Q3 2026 as the current period and fiscal 2025 as the prior period, while the sources also carry the year ended 2026-09-30. The June 2026 quarterly balance sheet still shows the 2028 senior notes, the term loan and a small revolver draw, all refinanced after that date. Both periods are mapped here, and each later module must state which one a figure uses; this conflict is recorded, not resolved.

No earnings release, lender presentation or investor deck is supplied, so management guidance and commentary beyond the filings are not established from these sources.

No credit rating, market quote series, peer set, portfolio limit or earlier run is supplied; the annual report mentions only a possible rating downgrade as a risk and a year-end fair value for the 2034 senior notes.

## Next module

The orchestrator selects the next module.
