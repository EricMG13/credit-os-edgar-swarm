---
issuer_id: sah-1043509
module_id: CP-0
analysis_date: 2026-11-18
issuer_name: Sonic Automotive Inc
pathway: credit_snapshot
run_id: sah-1043509-2026-11-18-credit_snapshot-host
---

## Request

Source readiness for Sonic Automotive Inc, as of 2026-11-18, on the credit snapshot pathway. The scope is the five supplied filings, assessed against the requested analyses: Financial foundation, Business & governance and Fundamental credit.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_sah.htm.jsonl | Annual report on Form 10-K of Sonic Automotive, Inc. for the year ended December 31, 2024, signed February 19, 2025 | 2025-02-19 | 836d2eea368346b1f0e4515059fa1c28395fae6599d991917b246b18574ce357 | Checked entity, period, signature, audit report, statements, debt, liquidity, covenant ratios at 2024-12-31 and Adjusted EBITDA coverage; FY2024 amounts tied to the FY2025 annual report comparatives |
| 10-K_2025-12-31_sah.htm.jsonl | Annual report on Form 10-K of Sonic Automotive, Inc. for the year ended December 31, 2025, signed February 23, 2026 | 2026-02-23 | ccd1eab0e7d1e563f359e792915f3bf529b431bddac2c8fb217bbe5644f4a346 | Checked entity, period, signature, audit report, business, governance, statements, debt note, maturity table, liquidity, covenant wording, obligations and exhibit list |
| 10-Q_2026-04-30_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended March 31, 2026, signed April 30, 2026 | 2026-04-30 | 1cd027fd7910522a80bc7bf59931c51a4fc41ba17f8f5f25d24b23cfbf353146 | Checked entity, period, signature, Q1 2026 statements, debt note, liquidity table, Adjusted EBITDA and exhibit list |
| 10-Q_2026-06-30_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended June 30, 2026, signed July 30, 2026 | 2026-07-30 | 97f33131d13d82a749a7edc3b15a392940d94b3e4e7b667799816fdc24397d9d | Checked entity, period, signature, Q2 2026 and six-month statements, debt note, liquidity table and Adjusted EBITDA |
| 10-Q_2026-10-29_sah.htm.jsonl | Quarterly report on Form 10-Q of Sonic Automotive, Inc. for the quarter ended September 30, 2026, signed October 29, 2026 | 2026-10-29 | e1bdf3c65867fa95357d1f034d0d04b5e8cc230819b0e8e3bb729246bf899da1 | Latest source: checked entity, period, signature, Q3 2026 and nine-month statements, debt note, covenant wording, liquidity, segments, Adjusted EBITDA and market risk |

No handoffs from other modules were supplied; Source readiness is the entry point of the run, so there is no upstream handoff to list.

## Findings

### Bottom line

The five supplied filings are enough to run Financial foundation, Business & governance and Fundamental credit on Sonic Automotive Inc's own disclosures, but covenant headroom and ratings-based triggers cannot be tested independently, so creditors should treat those two points as open.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 21; 10-K_2025-12-31_sah.htm.jsonl, pages 112–114

The latest filing covers the quarter ended 2026-09-30 and was signed on 2026-10-29. The covenant tests are printed, at a minimum fixed charge coverage of 1.20x and a maximum lease-adjusted leverage of 5.75x, but the issuer's own ratio values are printed only at 2024-12-31, and no agency rating is supplied.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, pages 21, 98; 10-K_2024-12-31_sah.htm.jsonl, page 107

### Key findings

All five filings are the consolidated reports of Sonic Automotive, Inc., the Delaware parent whose Class A shares trade on the New York Stock Exchange, so debt, earnings and liquidity are read at one perimeter and no parent-versus-subsidiary conflict arises in the sources. The senior notes are guaranteed by the domestic operating subsidiaries, and none of the filings prints separate financial statements for the guarantor group; only the 2024 annual report states that the parent company has no independent assets or operations.
Basis: 10-K_2025-12-31_sah.htm.jsonl, pages 1, 147; 10-K_2024-12-31_sah.htm.jsonl, pages 102–103; 10-Q_2026-10-29_sah.htm.jsonl, pages 1, 19

The supplied periods cover two fiscal years and three consecutive quarters of 2026, which is enough to build a latest-twelve-months view from the fourth quarter of 2025 plus the first nine months of 2026. The fourth quarter of 2025 is not printed on its own and has to be derived from the annual figures less the nine-month comparative, and the 2026 quarterly revenue amounts agree to the printed nine-month total.
Basis: calculation C1; calculation C2; calculation C3; 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5

The debt note ties to the balance sheet at 2026-09-30 and the liquidity table adds up to USD 585.2 million, so the issuer's printed debt and liquidity figures are internally consistent. The long-term debt table excludes floor plan notes payable of USD 2,288.0 million and the lease liabilities, so the debt perimeter has to be set explicitly in the analyses and not read from a single balance sheet line.
Basis: calculation C5; calculation C6; calculation C9; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17, 87

Covenant testing is the main limit. The filings print the two maintenance tests and state that the issuer remained in compliance, but only the annual report for 2024 prints ratio values, and the credit agreements that define the ratios are listed as exhibits without being supplied. No agency rating appears in any filing.
Basis: 10-K_2024-12-31_sah.htm.jsonl, page 107; 10-K_2025-12-31_sah.htm.jsonl, pages 112–114, 149; 10-Q_2026-10-29_sah.htm.jsonl, page 21

For Business & governance the annual report prints the business description, the executive officers, the voting control held through Class B shares by entities that the chairman and his family control, and the related-party transactions, but directors, board independence, compensation and beneficial ownership are incorporated by reference to a proxy statement that is not supplied.
Basis: 10-K_2025-12-31_sah.htm.jsonl, pages 2, 5–16, 37, 110, 152–153

The latest filing was signed 20 days before the as-of date, and nothing dated after the cutoff is used as fact.
Basis: calculation C10; 10-Q_2026-10-29_sah.htm.jsonl, page 98

### Contrary evidence and what would change the view

The strongest case against proceeding is that every source is the issuer's own filing, so nothing independently confirms covenant compliance, ratings or market pricing, and the debt perimeter choice, with floor plan notes and leases outside the long-term debt table, can change any leverage figure. The view would weaken to not ready for Fundamental credit if the credit agreements define the covenant ratios differently from the filings' summaries, and it would strengthen with the credit agreements, the two indentures, agency ratings and the 2026 proxy statement.
Basis: calculation C9; 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 21

### Limitations

Each filing is available only as extracted text, in chunks that the page references here follow, so original formatting and table layout are not available and the original HTML files are not among the supplied sources.
Basis: 10-Q_2026-10-29_sah.htm.jsonl, page 1

This module records readiness only and makes no credit judgement; its calculations are tie-outs of printed figures. Run settings leave ratings, quotes, peers, deal terms, portfolio limits and legal documents empty, and those blanks are treated as not supplied, not as zero.

### T1 Input gate

| Gate item | Value | Status | Source |
|---|---|---|---|
| Issuer and reporting entity | Sonic Automotive, Inc. (issuer id sah-1043509), a Delaware corporation, Commission File Number 1-13395, Class A common stock listed on the New York Stock Exchange as SAH; all five filings report the consolidated company and none is a combined filing with a parent | Pass | 10-Q_2026-10-29_sah.htm.jsonl, page 1; 10-K_2025-12-31_sah.htm.jsonl, page 1 |
| Objective | Use case of the credit snapshot pathway, with Source readiness, Financial foundation, Business & governance and Fundamental credit requested; no other objective stated | Recorded | Run settings, not issuer evidence |
| As-of date and cutoff | As-of date 2026-11-18 and cutoff 2026-11-18; latest source signed 2026-10-29, so no source is dated after the cutoff (calculation C10) | Pass | 10-Q_2026-10-29_sah.htm.jsonl, page 98 |
| Current and prior period | Current period Q3 2026 (quarter and nine months ended 2026-09-30); prior period FY2025 (year ended 2025-12-31) | Pass | 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5; 10-K_2025-12-31_sah.htm.jsonl, page 123 |
| Source coverage against the objective | Two annual reports (FY2024, FY2025) and three quarterly reports (Q1, Q2, Q3 2026) | Pass with limitations | 10-K_2024-12-31_sah.htm.jsonl, page 1; 10-K_2025-12-31_sah.htm.jsonl, page 1; 10-Q_2026-04-30_sah.htm.jsonl, page 1; 10-Q_2026-06-30_sah.htm.jsonl, page 1; 10-Q_2026-10-29_sah.htm.jsonl, page 1 |
| Source classes not supplied | Agency ratings, bond or loan quotes, peer set, deal terms, portfolio limits, prior case, management bridge, legal documents; each blank in the run settings is treated as not supplied, not as zero | Gap logged | Run settings, not issuer evidence |
| Perimeter detail left blank in the run settings | Borrower name, parent name, guarantors, sector, country and sponsor are blank; the filings name Sonic Automotive, Inc. as the registrant and the domestic operating subsidiaries as note guarantors; the 2024 annual report adds that the parent company has no independent assets or operations and that the one non-domestic non-guarantor operating subsidiary is minor, a statement the later filings do not repeat | Gap logged | 10-Q_2026-10-29_sah.htm.jsonl, page 19; 10-K_2024-12-31_sah.htm.jsonl, pages 102–103 |

### T2 Source register

| Source | Document | Reporting entity | Period covered | Document date | Authority tier | Audit status | Active representation | Usability |
|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_sah.htm.jsonl | Annual report, Form 10-K | Sonic Automotive, Inc., consolidated | FY2024, year ended 2024-12-31, with FY2023 and FY2022 comparatives in the statements | 2025-02-19 | Tier 1, primary filing | Grant Thornton LLP report dated 2025-02-19 for FY2024 and FY2023; predecessor auditor KPMG LLP report for FY2022 | Extracted text, one active representation | Usable as prior-year baseline and the only source of covenant ratio values (at 2024-12-31); FY2024 amounts agree to the FY2025 annual report comparatives (calculation C4) |
| 10-K_2025-12-31_sah.htm.jsonl | Annual report, Form 10-K | Sonic Automotive, Inc., consolidated | FY2025, year ended 2025-12-31, with FY2024 and FY2023 comparatives | 2026-02-23 | Tier 1, primary filing | Grant Thornton LLP report dated 2026-02-23 | Extracted text, one active representation | Usable; the controlling source for FY2025 figures, business description, governance and the 2025-12-31 maturity table |
| 10-Q_2026-04-30_sah.htm.jsonl | Quarterly report, Form 10-Q | Sonic Automotive, Inc., consolidated | Q1 2026, quarter ended 2026-03-31 | 2026-04-30 | Tier 1, primary filing | Unaudited interim statements | Extracted text, one active representation | Usable for Q1 2026 statements and the bridge facility description; Q1 revenue ties into the six- and nine-month totals (calculation C1) |
| 10-Q_2026-06-30_sah.htm.jsonl | Quarterly report, Form 10-Q | Sonic Automotive, Inc., consolidated | Q2 2026 and six months ended 2026-06-30 | 2026-07-30 | Tier 1, primary filing | Unaudited interim statements | Extracted text, one active representation | Usable for Q2 2026 and the six-month totals (calculations C1 and C2) |
| 10-Q_2026-10-29_sah.htm.jsonl | Quarterly report, Form 10-Q | Sonic Automotive, Inc., consolidated | Q3 2026 and nine months ended 2026-09-30 | 2026-10-29 | Tier 1, primary filing | Unaudited interim statements | Extracted text, one active representation | Usable; the controlling source for the latest balance sheet, debt, liquidity and covenant wording |

### P3 Input inventory

| Source | Original document named in the text header | Bytes of extracted text | Text chunks | Pinned sha256 | Accessibility | Entity | Period | Duplicate or version link |
|---|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_sah.htm.jsonl | 10-K_2024-12-31_sah.htm | 468503 | 188 | 836d2eea368346b1f0e4515059fa1c28395fae6599d991917b246b18574ce357 | Readable throughout | Sonic Automotive, Inc. | FY2024 | Distinct logical source; earlier annual report; no duplicate |
| 10-K_2025-12-31_sah.htm.jsonl | 10-K_2025-12-31_sah.htm | 443121 | 173 | ccd1eab0e7d1e563f359e792915f3bf529b431bddac2c8fb217bbe5644f4a346 | Readable throughout | Sonic Automotive, Inc. | FY2025 | Distinct logical source; later annual report controls FY2025 figures; FY2024 report kept for the 2024 baseline |
| 10-Q_2026-04-30_sah.htm.jsonl | 10-Q_2026-04-30_sah.htm | 183288 | 69 | 1cd027fd7910522a80bc7bf59931c51a4fc41ba17f8f5f25d24b23cfbf353146 | Readable throughout | Sonic Automotive, Inc. | Q1 2026 | Distinct logical source; no duplicate |
| 10-Q_2026-06-30_sah.htm.jsonl | 10-Q_2026-06-30_sah.htm | 249249 | 98 | 97f33131d13d82a749a7edc3b15a392940d94b3e4e7b667799816fdc24397d9d | Readable throughout | Sonic Automotive, Inc. | Q2 2026 and six months 2026 | Distinct logical source; no duplicate |
| 10-Q_2026-10-29_sah.htm.jsonl | 10-Q_2026-10-29_sah.htm | 253183 | 99 | e1bdf3c65867fa95357d1f034d0d04b5e8cc230819b0e8e3bb729246bf899da1 | Readable throughout | Sonic Automotive, Inc. | Q3 2026 and nine months 2026 | Distinct logical source; no duplicate |

### T4 Content-to-module map

| Module | Capability | Disposition | Readiness | Evidence demand and what the sources hold | Limitation | Source |
|---|---|---|---|---|---|---|
| CP-1 | Financial foundation | Recommended: requested in this run | READY_WITH_LIMITATIONS | Statements for FY2024, FY2025 and the three 2026 quarters with prior-year comparatives; debt note with carrying values by instrument; Adjusted EBITDA reconciliation by segment in every filing; segment note; cash paid for interest of USD 136.6 million and for income taxes of USD 80.0 million in the nine months of 2026 | Q4 2025 is derived and not printed (calculation C3); the long-term debt table excludes floor plan notes of USD 2,288.0 million and lease liabilities (calculation C9); no maturity table at 2026-09-30; an item declared after the quarter-end (a dividend) must be shown apart from period figures; no earnings release | 10-Q_2026-10-29_sah.htm.jsonl, pages 4–8, 16–17, 25–29, 91, 93–94; 10-K_2025-12-31_sah.htm.jsonl, pages 104, 122–125, 145; 10-K_2024-12-31_sah.htm.jsonl, pages 112–113, 132–135; 10-Q_2026-04-30_sah.htm.jsonl, pages 4–7, 14, 63–64; 10-Q_2026-06-30_sah.htm.jsonl, pages 4–8, 16, 91–92 |
| CP-1A | Business & governance | Recommended: requested in this run | READY_WITH_LIMITATIONS | Business description, three segments (Franchised Dealerships, EchoPark, Powersports), strategy, competition and manufacturer relationships; executive officers; Class B voting control through Sonic Financial Corporation and the OBS Family, LLC; related-party transactions with Speedway Motorsports entities; the Q3 2026 report states that risk factors are unchanged | Directors, board independence, compensation and beneficial ownership by holder are incorporated by reference to the 2026 proxy statement, not supplied; beneficial ownership appears only as greater-than-10% descriptions in the related-party note | 10-K_2025-12-31_sah.htm.jsonl, pages 2, 5–16, 37, 110, 152–153; 10-Q_2026-10-29_sah.htm.jsonl, page 97 |
| CP-2 | Fundamental credit | Recommended: requested in this run | READY_WITH_LIMITATIONS | Leverage and coverage inputs (Adjusted EBITDA, interest, cash flow, lease liabilities); liquidity table of USD 585.2 million at 2026-09-30, of which USD 190.0 million is a floor plan deposit; revolver availability of USD 289.5 million after USD 11.7 million of letters of credit; debt by instrument; covenant levels of 1.20x minimum fixed charge coverage and 5.75x maximum lease-adjusted leverage; contractual obligations table at 2025-12-31 | Covenant ratio values are printed only at 2024-12-31 (2.15x fixed charge coverage and 3.07x leverage) and are outdated for the as-of date; the definitions sit in unsupplied agreements; no ratings, quotes or peers; the floor plan deposit is counted in liquidity under the issuer's own definition | 10-Q_2026-10-29_sah.htm.jsonl, pages 5–8, 18, 21, 87, 93–94; 10-K_2025-12-31_sah.htm.jsonl, pages 98, 105, 145–149; 10-K_2024-12-31_sah.htm.jsonl, pages 107, 164 |
| CP-1B | Earnings changes | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Three- and nine-month comparatives against 2025 in each quarterly income statement and in the results discussion | No earnings release or management guidance; 2025 comparatives are as recast in the 2026 filings; the annual report's industry volume estimate for 2026 is not company guidance | 10-Q_2026-10-29_sah.htm.jsonl, pages 4–5, 32–35; 10-K_2025-12-31_sah.htm.jsonl, page 62 |
| CP-1C | Peer benchmark | Blocked: no peer financials supplied | CONDITIONAL | Peer financials and multiples; the annual report describes competition only in words | Run settings name no peer source; no peer filing is in the effective-source set | 10-K_2025-12-31_sah.htm.jsonl, pages 12–13 |
| CP-1D | Earnings quality | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Adjusted EBITDA reconciliation items by segment, including cyber insurance proceeds of USD 40.0 million in the nine months of 2025; floor plan cash flow classification, with operating cash flow of USD 424.2 million in the nine months of 2026 if all floor plan changes were operating | No 2025 quarterly filings to see items as first reported | 10-Q_2026-10-29_sah.htm.jsonl, pages 92–94; 10-K_2025-12-31_sah.htm.jsonl, page 104 |
| CP-2A | Downside | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Variable-rate debt of USD 2.7 billion with USD 20.4 million of sensitivity to a 1.0% rate change over nine months; interest rate caps; contractual obligations | Covenant definitions are not available for stress headroom; no management downside case | 10-Q_2026-10-29_sah.htm.jsonl, pages 22, 96; 10-K_2025-12-31_sah.htm.jsonl, page 105 |
| CP-2D | Liquidity | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Liquidity tables at 2024-12-31 (USD 861.6 million), 2025-12-31 (USD 701.6 million), 2026-03-31 (USD 770.3 million), 2026-06-30 (USD 676.1 million) and 2026-09-30 (USD 585.2 million); revolver borrowing base of USD 301.2 million | The issuer's total includes the USD 190.0 million floor plan deposit; the USD 150.0 million bridge facility matures 364 days after closing or on refinancing of the Mortgage Facility, whichever is earlier, so its timing needs a maturity read | 10-Q_2026-10-29_sah.htm.jsonl, pages 18, 21, 87; 10-Q_2026-06-30_sah.htm.jsonl, page 87; 10-Q_2026-04-30_sah.htm.jsonl, page 59; 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-K_2024-12-31_sah.htm.jsonl, page 99 |
| CP-2E | Rates, FX & hedging | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Interest rate cap agreements with notional amounts of USD 400.0 million, USD 200.0 million and USD 400.0 million at a cap rate of 5.500%, fair value USD 1.3 million, with one-month Term SOFR at about 3.91% at 2026-09-30; variable-rate sensitivity | No foreign-currency disclosure was found by term search in the annual report | 10-Q_2026-10-29_sah.htm.jsonl, pages 22, 96; 10-K_2025-12-31_sah.htm.jsonl, page 108 |
| CP-2G | Forward credit model | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Segment history for the last three fiscal years and the 2026 quarters; the annual report's 2026 industry volume estimate of 15.8 million to 16.5 million vehicles | No management projections; the run assumption fields are empty, so forecast drivers would be analyst assumptions | 10-K_2025-12-31_sah.htm.jsonl, pages 62, 165–169; 10-Q_2026-10-29_sah.htm.jsonl, pages 25–29 |
| CP-2H | Ratings & triggers | Blocked: no rating documents supplied | CONDITIONAL | Agency ratings and rating-linked triggers; the filings print none, the credit facility pricing grid is tied to the lease-adjusted leverage ratio and the indentures give holders a change-of-control repurchase right | No rating report or rating in the effective-source set | 10-K_2025-12-31_sah.htm.jsonl, pages 35, 171; 10-Q_2026-10-29_sah.htm.jsonl, page 18 |
| CP-3 | Security selection | Inapplicable until an instrument is named | CONDITIONAL | Instrument terms, pricing and allocation; the filings describe the senior note series and the facilities | No deal terms or quotes in the run settings | 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21 |
| CP-3C | Refinancing & LME | Not requested in this run; the sources would support it | READY_WITH_LIMITATIONS | Maturity table by year at 2025-12-31 totalling USD 1,635.2 million; redemption schedule of the senior notes; facility terms and amortisation | No maturity table at 2026-09-30 and the bridge facility is not in the 2025-12-31 table; the indentures are not supplied to read liability management capacity | 10-K_2025-12-31_sah.htm.jsonl, pages 145, 147; 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21 |
| CP-3D | Market-implied risk | Blocked: no market quotes supplied | CONDITIONAL | Bond and loan quotes; the only debt pricing figures are issuer-disclosed Level 2 fair values at 2026-09-30 of USD 457.5 million against USD 500.0 million carrying value for the 2031 senior notes and USD 614.3 million against USD 650.0 million for the 2029 senior notes | Fair values are not trading quotes at the as-of date | 10-Q_2026-10-29_sah.htm.jsonl, pages 24–25 |
| CP-4 | Legal & covenants | Blocked: governing agreements not supplied | CONDITIONAL | Credit agreements, mortgage and sidecar facility agreements, bridge facility agreement, indentures and guaranty agreements, listed as exhibits | Only the issuer's note summaries are available; exhibit text is not supplied | 10-K_2025-12-31_sah.htm.jsonl, pages 112–114; 10-Q_2026-04-30_sah.htm.jsonl, page 69; 10-Q_2026-10-29_sah.htm.jsonl, pages 17–21 |
| CP-4C | Recovery & fulcrum | Blocked: collateral and priority terms not supplied | CONDITIONAL | Security package, guarantor group and priority terms from the agreements; the notes state that the credit facilities are secured by substantially all guarantor assets and the senior notes are senior unsecured | Summaries only; no collateral values or guarantor-level financial statements | 10-Q_2026-10-29_sah.htm.jsonl, pages 17, 19 |
| CP-6 | Committee decision | Not requested in this run; portfolio fit and committee challenge are omitted from the report | READY_WITH_LIMITATIONS | Fund limits and portfolio context | No portfolio limits supplied; limits would be stated as not supplied | Run settings, not issuer evidence |
| CP-8 | Changes since the last run | Inapplicable: first run of this pathway for this issuer | CONDITIONAL | An earlier run of the same issuer and pathway to compare against | No earlier run exists, so there is nothing to compare; the module becomes runnable once a prior run is listed | Run settings, not issuer evidence |
| CP-DR | Research questions | Not requested: no research question in the run settings | READY_WITH_LIMITATIONS | The missing proxy statement, credit agreements and indentures are the natural research targets | Research capability is not part of the supplied sources | 10-K_2025-12-31_sah.htm.jsonl, pages 2, 110, 112–114 |

### T6 Evidence trace

| Evidence ID | Source | What the locator shows | Used for |
|---|---|---|---|
| EV01 | 10-Q_2026-10-29_sah.htm.jsonl, page 1 | Cover: quarterly report for the quarter ended September 30, 2026; Sonic Automotive, Inc.; Delaware; Commission File Number 1-13395; Class A common stock on the New York Stock Exchange | Entity, period and listing in T1 |
| EV02 | 10-Q_2026-10-29_sah.htm.jsonl, pages 98–99 | Signature block dated October 29, 2026 by the Chairman and Chief Executive Officer and the Chief Financial Officer | Latest document date and cutoff check (calculation C10) |
| EV03 | 10-K_2025-12-31_sah.htm.jsonl, pages 1, 118 | Cover for the year ended December 31, 2025; signature dated February 23, 2026 | FY2025 period and document date |
| EV04 | 10-K_2025-12-31_sah.htm.jsonl, pages 119–121 | Grant Thornton LLP opinion that the statements present fairly, report dated February 23, 2026 | Audit status in T2 |
| EV05 | 10-K_2024-12-31_sah.htm.jsonl, pages 1, 127, 128–130, 132 | Cover for the year ended December 31, 2024; signature dated February 19, 2025; Grant Thornton LLP report dated February 19, 2025; KPMG LLP report on FY2022 | FY2024 period, document date and audit status |
| EV06 | 10-Q_2026-04-30_sah.htm.jsonl, pages 1, 69 | Cover for the quarter ended March 31, 2026; signature dated April 30, 2026; exhibit 10.1 is the bridge facility credit agreement | Q1 period and document date; listed but unsupplied agreement |
| EV07 | 10-Q_2026-06-30_sah.htm.jsonl, pages 1, 98 | Cover for the quarter ended June 30, 2026; signature dated July 30, 2026 | Q2 period and document date |
| EV08 | 10-Q_2026-10-29_sah.htm.jsonl, pages 4–8 | Statements of operations, comprehensive operations, balance sheet, equity and cash flows for Q3 2026 and nine months 2026, with cash paid for interest and income taxes | Statement coverage for Financial foundation |
| EV09 | 10-K_2025-12-31_sah.htm.jsonl, pages 122–125 | Balance sheet, statements of operations, equity and cash flows for FY2025, FY2024 and FY2023 | Statement coverage and FY2024 comparatives |
| EV10 | 10-Q_2026-04-30_sah.htm.jsonl, pages 4–7; 10-Q_2026-06-30_sah.htm.jsonl, pages 4–8; 10-K_2024-12-31_sah.htm.jsonl, pages 132–135 | Statements for Q1 2026, Q2 2026 and six months, and FY2024 | Quarter and year coverage (calculations C1, C2, C4) |
| EV11 | 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21 | Debt table by instrument at 2026-09-30, credit facility, senior note, mortgage and sidecar, bridge facility and finance company note terms | Debt coverage and tie-out (calculation C5) |
| EV12 | 10-Q_2026-10-29_sah.htm.jsonl, page 21; 10-K_2025-12-31_sah.htm.jsonl, page 149 | Minimum fixed charge coverage 1.20x (printed as 1.20 to 1.00), maximum lease-adjusted leverage 5.75x (printed as 5.75 to 1.00), statement of continuing compliance, no ratio values | Covenant evidence and its gap |
| EV13 | 10-K_2024-12-31_sah.htm.jsonl, pages 107, 164 | Table of required and actual covenant ratios at December 31, 2024: fixed charge coverage 2.15x against a minimum of 1.20x and leverage 3.07x against a maximum of 5.75x | Only printed ratio values; outdated for the as-of date |
| EV14 | 10-Q_2026-10-29_sah.htm.jsonl, page 87; 10-Q_2026-06-30_sah.htm.jsonl, page 87; 10-Q_2026-04-30_sah.htm.jsonl, page 59; 10-K_2025-12-31_sah.htm.jsonl, page 98; 10-K_2024-12-31_sah.htm.jsonl, page 99 | Liquidity resources tables at each balance sheet date | Liquidity coverage (calculation C6) |
| EV15 | 10-Q_2026-10-29_sah.htm.jsonl, pages 93–94; 10-Q_2026-06-30_sah.htm.jsonl, pages 91–92; 10-Q_2026-04-30_sah.htm.jsonl, pages 63–64; 10-K_2025-12-31_sah.htm.jsonl, page 104; 10-K_2024-12-31_sah.htm.jsonl, pages 112–113 | Adjusted EBITDA reconciliation to net income by segment | Earnings and leverage inputs; FY2024 tie (calculation C4) |
| EV16 | 10-K_2025-12-31_sah.htm.jsonl, page 145 | Debt table at 2025-12-31 and future maturities by year totalling USD 1,635.2 million | Maturity coverage (calculation C8) |
| EV17 | 10-K_2025-12-31_sah.htm.jsonl, pages 5–16 | Item 1 business description, strategy, competition, franchise relationships and executive officers | Business & governance coverage |
| EV18 | 10-K_2025-12-31_sah.htm.jsonl, pages 37, 152–153 | Class B voting control through Sonic Financial Corporation and the OBS Family, LLC; related-party transactions | Governance coverage |
| EV19 | 10-K_2025-12-31_sah.htm.jsonl, pages 2, 110 | Part III items incorporated by reference to the 2026 proxy statement, described as to be filed hereafter | Governance gap |
| EV20 | 10-K_2025-12-31_sah.htm.jsonl, pages 112–114 | Exhibit list naming the indentures dated October 27, 2021, the sixth amended and restated credit agreement dated March 13, 2024, the credit agreement dated November 22, 2019 and the credit agreement dated December 27, 2024 | Unsupplied governing documents |
| EV21 | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 89 | Floor plan notes payable of USD 211.2 million trade and USD 2,076.8 million non-trade; MD&A states approximately USD 2.3 billion | Debt perimeter (calculation C9) |
| EV22 | 10-Q_2026-10-29_sah.htm.jsonl, pages 22, 24–25, 96 | Interest rate caps, Level 2 fair values of the senior notes and variable-rate sensitivity | Rates and market-related evidence |
| EV23 | 10-K_2025-12-31_sah.htm.jsonl, page 171 | The only reference to a corporate credit rating is as a factor in a lease discount rate; no rating is printed | Ratings gap |
| EV24 | 10-K_2025-12-31_sah.htm.jsonl, page 105 | Contractual obligations table at 2025-12-31 | Obligations coverage for Fundamental credit |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-19 | day | 2025-02-19 | Annual report for FY2024 signed on behalf of the registrant | Historical — report signed on behalf of the registrant | 10-K_2024-12-31_sah.htm.jsonl, page 127 | Dates the FY2024 baseline and the only printed covenant ratio values |
| 2026-02-23 | day | 2026-02-23 | Annual report for FY2025 signed on behalf of the registrant | Historical — report signed on behalf of the registrant | 10-K_2025-12-31_sah.htm.jsonl, page 118 | Dates the FY2025 figures and the 2025-12-31 maturity table |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for Q1 2026 signed on behalf of the registrant | Historical — report signed on behalf of the registrant | 10-Q_2026-04-30_sah.htm.jsonl, page 69 | Dates the Q1 2026 statements |
| 2026-07-30 | day | 2026-07-30 | Quarterly report for Q2 2026 signed on behalf of the registrant | Historical — report signed on behalf of the registrant | 10-Q_2026-06-30_sah.htm.jsonl, page 98 | Dates the Q2 2026 and six-month statements |
| 2026-10-29 | day | 2026-10-29 | Quarterly report for Q3 2026 signed on behalf of the registrant | Historical — report signed on behalf of the registrant | 10-Q_2026-10-29_sah.htm.jsonl, page 98 | Latest source; sets the 2026-09-30 balance sheet date and falls before the 2026-11-18 cutoff |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 9 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 5 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 6 |

## Calculations

All amounts are in USD million unless stated. Each calculation is a tie-out of printed figures and not a credit measure.

| ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Revenue: 2026 quarters sum to the six- and nine-month totals | Q1 2026 USD 3,688.5 million; Q2 2026 USD 3,934.0 million; six months 2026 USD 7,622.5 million; Q3 2026 USD 3,988.8 million; nine months 2026 USD 11,611.3 million | 3,688.5 + 3,934.0 = USD 7,622.5 million, equal to the printed six-month total (difference USD 0.0 million); 7,622.5 + 3,988.8 = USD 11,611.3 million, equal to the printed nine-month total (difference USD 0.0 million) | 10-Q_2026-04-30_sah.htm.jsonl, page 5; 10-Q_2026-06-30_sah.htm.jsonl, page 5; 10-Q_2026-10-29_sah.htm.jsonl, page 5 |
| C2 | Net income: 2026 quarters against year-to-date totals | Q1 2026 USD 60.8 million; Q2 2026 USD 57.4 million; six months 2026 USD 118.3 million; Q3 2026 USD 41.1 million; nine months 2026 USD 159.4 million | 60.8 + 57.4 = USD 118.2 million against the printed USD 118.3 million (difference USD 0.1 million, rounding in the printed figures); 118.3 + 41.1 = USD 159.4 million, equal to the printed nine-month total | 10-Q_2026-04-30_sah.htm.jsonl, page 5; 10-Q_2026-06-30_sah.htm.jsonl, page 5; 10-Q_2026-10-29_sah.htm.jsonl, page 5 |
| C3 | Q4 2025 revenue derived from the annual and nine-month figures | FY2025 revenue USD 15,153.6 million; nine months 2025 revenue USD 11,282.3 million (comparative column in the Q3 2026 report) | 15,153.6 − 11,282.3 = USD 3,871.3 million; derived, not printed in any source | 10-K_2025-12-31_sah.htm.jsonl, page 123; 10-Q_2026-10-29_sah.htm.jsonl, page 5 |
| C4 | FY2024 amounts agree between the two annual reports | FY2024 annual report: revenue USD 14,224.3 million, net income USD 216.0 million, total assets USD 5,895.7 million, Adjusted EBITDA USD 560.1 million; FY2025 annual report comparatives: USD 14,224.3 million, USD 216.0 million, USD 5,895.7 million, USD 560.1 million | Differences: USD 0.0 million on each of the four amounts | 10-K_2024-12-31_sah.htm.jsonl, pages 113, 132–134; 10-K_2025-12-31_sah.htm.jsonl, pages 104, 122–123 |
| C5 | Debt note ties to the balance sheet at 2026-09-30 | Instrument balances: USD 650.0 million, USD 500.0 million, USD 411.2 million, USD 150.0 million, USD 14.4 million, USD 39.8 million; debt issuance costs USD 15.7 million; current maturities USD 193.3 million; long-term debt USD 1,556.4 million | 650.0 + 500.0 + 411.2 + 150.0 + 14.4 + 39.8 = USD 1,765.4 million; less 15.7 = USD 1,749.7 million; 193.3 + 1,556.4 = USD 1,749.7 million; difference USD 0.0 million | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 16–17 |
| C6 | Liquidity table adds up at 2026-09-30 | Cash USD 10.7 million; floor plan deposit USD 190.0 million; revolver availability USD 289.5 million; mortgage and sidecar availability USD 95.0 million | 10.7 + 190.0 + 289.5 + 95.0 = USD 585.2 million, equal to the printed total available liquidity resources (difference USD 0.0 million) | 10-Q_2026-10-29_sah.htm.jsonl, page 87 |
| C7 | Revolver availability ties to its components at 2026-09-30 | Borrowing base USD 301.2 million; letters of credit USD 11.7 million; borrowings none (USD 0.0 million) | 301.2 − 11.7 − 0.0 = USD 289.5 million, equal to the printed availability | 10-Q_2026-10-29_sah.htm.jsonl, page 18 |
| C8 | 2025-12-31 maturity table sums to the debt subtotal | Maturities USD 52.4 million, USD 416.2 million, USD 14.2 million, USD 651.0 million, USD 1.1 million and USD 500.3 million thereafter; printed total USD 1,635.2 million; comparative subtotal in the Q3 2026 report USD 1,635.2 million | 52.4 + 416.2 + 14.2 + 651.0 + 1.1 + 500.3 = USD 1,635.2 million; difference USD 0.0 million against both | 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, page 17 |
| C9 | Floor plan notes sit outside the long-term debt table at 2026-09-30 | Floor plan notes payable, trade USD 211.2 million; non-trade USD 2,076.8 million | 211.2 + 2,076.8 = USD 2,288.0 million, consistent with the MD&A statement of approximately USD 2.3 billion | 10-Q_2026-10-29_sah.htm.jsonl, pages 6, 89 |
| C10 | Age of the latest filing at the as-of date | Signed 2026-10-29; as-of date 2026-11-18 | 2 days to 2026-10-31 plus 18 days in November = 20 days | 10-Q_2026-10-29_sah.htm.jsonl, page 98 |

## Gaps

The credit agreements, the two senior note indentures, the mortgage and sidecar facility agreements, the bridge facility agreement and the subsidiary guaranty agreements are listed as exhibits in the filings but are not supplied. Without them the definitions behind the fixed charge coverage and lease-adjusted leverage tests, the security package and the guarantor group cannot be read from the primary documents, and the analyses must rely on the issuer's own note summaries. This is a material gap for Fundamental credit; supplying the agreements would let Legal & covenants and Recovery & fulcrum run on governing text.
Basis: 10-K_2025-12-31_sah.htm.jsonl, pages 112–114; 10-Q_2026-04-30_sah.htm.jsonl, page 69; 10-Q_2026-10-29_sah.htm.jsonl, pages 17–21

The issuer's own covenant ratio values are printed only at 2024-12-31, where fixed charge coverage was 2.15x against a minimum of 1.20x and lease-adjusted leverage was 3.07x against a maximum of 5.75x. The annual report for 2025 and the three 2026 quarterly reports print the levels and state continuing compliance but no ratio value, so headroom at 2025-12-31 and at 2026-09-30 is not established, and the 2024 values are outdated for the as-of date and must not be carried forward as current. This is a material gap.
Basis: 10-K_2024-12-31_sah.htm.jsonl, pages 107, 164; 10-K_2025-12-31_sah.htm.jsonl, page 149; 10-Q_2026-10-29_sah.htm.jsonl, page 21

No agency rating appears in any filing, and the run settings supply no ratings, bond or loan quotes, peer set, deal terms or portfolio limits. Ratings-based triggers, market-implied spreads, peer benchmarking and portfolio fit are therefore not established, and the issuer-disclosed fair values of the two senior note series are the only debt pricing figures in the filings. The annual report's one mention of a corporate credit rating is as an input to a lease discount rate and gives no rating. This is a minor gap for the three requested analyses.
Basis: 10-K_2025-12-31_sah.htm.jsonl, page 171; 10-Q_2026-10-29_sah.htm.jsonl, pages 24–25

Directors, board independence and committees, executive and director compensation, beneficial ownership and the policies on affiliate transactions are incorporated by reference to the 2026 proxy statement, which is not supplied. The annual report's own passages on control, executive officers and related parties cover part of this, so governance can be assessed but not completely. This is a minor gap.
Basis: 10-K_2025-12-31_sah.htm.jsonl, pages 2, 110

The 2026 quarterly reports print no maturity schedule by year, so the debt maturity profile at 2026-09-30 has to be assembled from the individual facility descriptions. The last printed schedule is at 2025-12-31, does not include the bridge facility, and is outdated for later dates. This is a minor gap.
Basis: calculation C8; 10-K_2025-12-31_sah.htm.jsonl, page 145; 10-Q_2026-10-29_sah.htm.jsonl, pages 16–21

The 2024 annual report states that the parent company has no independent assets or operations and that the one non-domestic operating subsidiary that is not a guarantor is minor. The 2025 annual report and the 2026 quarterly reports state the guarantee by the domestic operating subsidiaries but not those two statements, so the guarantor perimeter at 2026-09-30 rests on a 2024 statement that is outdated, and no guarantor-level financial statements are printed. This is a minor gap.
Basis: 10-K_2024-12-31_sah.htm.jsonl, pages 102–103; 10-K_2025-12-31_sah.htm.jsonl, page 147; 10-Q_2026-10-29_sah.htm.jsonl, page 19

No 2025 quarterly reports, earnings releases, investor presentations or management projections were supplied. The fourth quarter of 2025 is therefore derived, and the 2025 comparatives are as shown in the 2026 filings, so originally reported 2025 quarters cannot be tied to them. This is a minor gap.
Basis: calculation C3; 10-Q_2026-10-29_sah.htm.jsonl, page 5

The file names do not follow one date convention: the two annual reports and the second-quarter report carry the period end, while the first- and third-quarter reports carry the signature date. Periods in this run are taken from each filing's cover page and not from its file name. This is a minor gap.
Basis: 10-Q_2026-04-30_sah.htm.jsonl, pages 1, 69; 10-Q_2026-06-30_sah.htm.jsonl, pages 1, 98; 10-Q_2026-10-29_sah.htm.jsonl, pages 1, 98

## Next module

The orchestrator selects the next module.
