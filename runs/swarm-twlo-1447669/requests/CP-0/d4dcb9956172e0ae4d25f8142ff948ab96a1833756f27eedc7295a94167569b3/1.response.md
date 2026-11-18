---
issuer_id: twlo-1447669
issuer_name: Twilio Inc
module_id: CP-0
analysis_date: 2026-11-18
reporting_period: Q3 2026
reporting_currency: USD
pathway: credit_snapshot
run_id: twlo-1447669-2026-11-18-credit_snapshot-host
method_version: deploy-v-r14
artifact: twlo-1447669_CP-0_20261118.md
module_status: Ready with Limitations
---

# Twilio Inc source readiness, as of 2026-11-18

## Request

Twilio Inc (issuer twlo-1447669), as of 2026-11-18, pathway credit_snapshot: a full credit assessment run through Financial foundation, Business & governance and Fundamental credit. Scope: whether the five supplied SEC filings can support that work, and what remains blocked.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_twlo-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-26 | afc80dae142f1e2c48131f9c9da01c49763830e7d85e3635b95dcb2c35324db8 | Inventory and period coverage for FY2022 to FY2024; two-segment presentation; original FY2024 product revenue groups; first printed terms of the senior notes in this set. |
| 10-K_2025-12-31_twlo-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-24 | 8c23a5b2267d10b1ed34358eff69987b9802fc03b69d28331c7a0b42d10c5fbd | Controlling annual source for FY2025 and its FY2024 and FY2023 comparatives; debt terms and covenants summary; commitments; Stytch acquisition; Syniverse investment; Part III incorporated by reference; exhibit list. |
| 10-Q_2026-03-31_twlo-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-01 | b2c45b905396faa88b0f483398b8f72b641b36e9f41b31733422513df8d665ee | First 2026 interim period; purchase commitments at that date; discontinued customer-account metric; balance sheet presentation check. |
| 10-Q_2026-06-30_twlo-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 | bb65df71688feef2fb4ef0ce49bb85c96817f8c06d5bf41bd9ced5745b5c97de | Second 2026 interim period; purchase commitments at that date; deferred tax asset line shown separately; valuation allowance release quarter. |
| 10-Q_2026-09-30_twlo-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-30 | b4d585ca5f8e62081a2705cc0ead0bc494604cbd967e8d301cf0f4b11f9b89fb | Latest period: balance sheet, three- and nine-month results, cash flows, debt note, liquidity discussion, commitments, hedges, related party and subsequent-period checks. |

No upstream analytical handoff was supplied to this module, and no web or other external source was used.

## Findings

### Bottom line

The supplied filings are enough for a full financial, liquidity and business analysis of Twilio Inc, but not for legal, covenant, ratings or pricing work, so creditor protections can be read only from the issuer's own summary of the notes. The borrowings are two series of unsecured senior notes due 2029 and 2031 with only minor finance leases besides, and no credit facility, letter of credit or other bank commitment is disclosed, so the main liquidity inputs are printed. The indentures, the proxy statement, earnings releases, ratings and trading levels were not supplied, and nothing dated after the Q3 filing of 2026-10-30 was supplied.
Basis: 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 134–136; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 128; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 149–150

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-26 | day | 2025-02-26 | Annual report for the year ended 2024-12-31 signed | Historical — signed by the Chief Executive Officer, the Chief Financial Officer and eight further directors | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 167 | Only source for FY2022 and for the two-segment presentation; its FY2024 product revenue groups differ from the FY2025 report. |
| 2026-02-24 | day | 2026-02-24 | Annual report for the year ended 2025-12-31 signed | Historical — signed by the Chief Executive Officer, the Chief Financial Officer and eight further directors | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 152 | Controlling annual source for FY2025 and its comparatives; Part III is incorporated by reference to a proxy statement that is not supplied. |
| 2026-05-01 | day | 2026-05-01 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — signed by the Chief Executive Officer and the Chief Financial Officer | 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 98 | First 2026 interim source; the discontinued customer-account metric is announced in this report. |
| 2026-08-07 | day | 2026-08-07 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — signed by the Chief Executive Officer and the Chief Financial Officer | 10-Q_2026-06-30_twlo-20260630.htm.jsonl, page 106 | Interim source for the quarter in which the U.S. valuation allowance was released; purchase commitments are first shown at the higher level. |
| 2026-10-30 | day | 2026-10-30 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — signed by the Chief Executive Officer and the Chief Financial Officer | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 107 | Latest supplied document, 19 days before the as-of date; no later filing, release or subsequent-event note is supplied. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 19 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 4 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 5 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 9 |

### Analytical appendix — complete canonical registers

### T1 - Input gate

| Item | Value | Origin |
|---|---|---|
| Run | twlo-1447669-2026-11-18-credit_snapshot-host; host session, no provider call | Run setting |
| Issuer and reporting entity | Twilio Inc, a Delaware registrant, Commission File Number 001-37806; Class A common stock listed on the New York Stock Exchange as TWLO; consolidated perimeter. The run settings name no parent, sponsor or guarantor. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 1 |
| Objective | Full credit assessment under the credit_snapshot pathway: whether to own the issuer, in which instrument, and why. The run settings state no separate objective, so the pathway's use case is the objective. | Run setting |
| Modules in this run | Source readiness; Financial foundation; Business & governance; Fundamental credit. First run of this pathway, so no earlier run exists to compare with. | Run setting |
| Reporting dates | As-of date 2026-11-18; cutoff 2026-11-18; current period Q3 2026 (quarter ended 2026-09-30); prior period FY2025 | Run setting |
| Latest supplied document | Quarterly report for the quarter ended 2026-09-30, signed 2026-10-30; 154,734,032 Class A shares outstanding at 2026-10-16; 19 days before the as-of date (calculation C07) | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 1, 107 |
| Reporting currency and unit | USD; statements printed in thousands of dollars | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Deal terms, ratings, quotes, peers, portfolio, legal documents | Not supplied: the run settings list none of them | Run setting |
| Source status | Partial: filings received for FY2022 through Q3 2026; legal, governance, release, rating and market documents are absent (see the gap ledger) | Gap ledger below |
| Overall readiness | READY_WITH_LIMITATIONS | T4 below |

### P3 - Input sources

| Source | Original document | Original sha256 | Form and entity | Period | Document date | Version status | Related documents |
|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_twlo-20241231.htm.jsonl | 10-K_2024-12-31_twlo-20241231.htm | 3b934dfe0fc68cdb788972787430630a722fe1a3ef9de8c75bfce2279d5dbc9b | Form 10-K, Twilio Inc consolidated | Fiscal years 2024, 2023 and 2022; balance sheets at 2024-12-31 and 2023-12-31 | 2025-02-26 | Filed annual report; its FY2024 figures are repeated, with product groups reclassified, in the FY2025 report | Base for the FY2025 annual report comparatives |
| 10-K_2025-12-31_twlo-20251231.htm.jsonl | 10-K_2025-12-31_twlo-20251231.htm | 824031db87e1b8d789e2a478599760fe9e41a42d7317e2d4d1fbafaf4da65d49 | Form 10-K, Twilio Inc consolidated | Fiscal years 2025, 2024 and 2023; balance sheets at 2025-12-31 and 2024-12-31 | 2026-02-24 | Filed annual report; controlling for FY2025 and the year-end 2025 balance sheet | Part III defers to a 2026 proxy statement; exhibits 4.1 to 4.4 (indenture and note forms) are filed by reference to a 2021 current report |
| 10-Q_2026-03-31_twlo-20260331.htm.jsonl | 10-Q_2026-03-31_twlo-20260331.htm | a37ed29da60e27d248de3d85ffc31ccdede9a04e822d221bcc2cdbbe2bba73e0 | Form 10-Q, Twilio Inc consolidated | Three months ended 2026-03-31 with 2025 comparatives; balance sheets at 2026-03-31 and 2025-12-31 | 2026-05-01 | Filed unaudited interim report | Read with the FY2025 annual report |
| 10-Q_2026-06-30_twlo-20260630.htm.jsonl | 10-Q_2026-06-30_twlo-20260630.htm | a9c3a57e59b21f5b6719f25c8faaee9d23a34ebb70e717e65ecdb42a2c29a0d4 | Form 10-Q, Twilio Inc consolidated | Three and six months ended 2026-06-30 with 2025 comparatives; balance sheets at 2026-06-30 and 2025-12-31 | 2026-08-07 | Filed unaudited interim report | Read with the FY2025 annual report |
| 10-Q_2026-09-30_twlo-20260930.htm.jsonl | 10-Q_2026-09-30_twlo-20260930.htm | 1d59d88beb7d8655fcfe1d0699f94e87e0bc4814ee6c7db6f26ccae351f00dd4 | Form 10-Q, Twilio Inc consolidated | Three and nine months ended 2026-09-30 with 2025 comparatives; balance sheets at 2026-09-30 and 2025-12-31 | 2026-10-30 | Filed unaudited interim report; latest supplied document | Refers to the FY2025 annual report as filed 2026-02-24 |

### T2 - Source register

| Source | Document | Source class | Authority and quality | Active representation | Usability | Limitation |
|---|---|---|---|---|---|---|
| 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 1–167 | Annual report, year ended 2024-12-31 | Class 1: controlling primary filing | Audited consolidated statements for three years to 2024-12-31 (auditor opinion at page 112) | Prepared text of the original filing; the original remains the authority | Usable_with_Limitations | Superseded for FY2024 comparatives by the FY2025 report; the only source of FY2022 and of the two-segment presentation; Part III by reference. |
| 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 1–152 | Annual report, year ended 2025-12-31 | Class 1: controlling primary filing | Audited consolidated statements for three years to 2025-12-31 (auditor opinion at page 101) | Prepared text of the original filing; the original remains the authority | Usable_with_Limitations | Part III (directors, officers, pay, ownership) is incorporated by reference to a proxy statement that is not supplied; the indenture and note forms are listed as exhibits but their text is not supplied. |
| 10-Q_2026-03-31_twlo-20260331.htm.jsonl, pages 1–98 | Quarterly report, quarter ended 2026-03-31 | Class 1: controlling primary filing | Unaudited interim statements | Prepared text of the original filing; the original remains the authority | Usable | Interim notes are condensed; no lease maturity table. |
| 10-Q_2026-06-30_twlo-20260630.htm.jsonl, pages 1–106 | Quarterly report, quarter ended 2026-06-30 | Class 1: controlling primary filing | Unaudited interim statements | Prepared text of the original filing; the original remains the authority | Usable | Interim notes are condensed; no lease maturity table. |
| 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 1–107 | Quarterly report, quarter ended 2026-09-30 | Class 1: controlling primary filing | Unaudited interim statements; latest supplied period | Prepared text of the original filing; the original remains the authority | Usable | Non-GAAP reconciliations cover three months only; purchase commitments are a single total with no yearly schedule. |

### T4 - Content-to-module map

| Module | Evidence demand | Active representation | Mapping status | Readiness | Readiness effect and limitation | Source |
|---|---|---|---|---|---|---|
| Financial foundation (CP-1) | Annual statements FY2022 to FY2025; interim statements Q1 to Q3 2026 with 2025 comparatives; senior notes at principal and carrying value; cash paid for interest and tax; depreciation and amortization; segment and revenue splits; perimeter; claims outside debt | FY2024 and FY2025 annual report text; Q1, Q2 and Q3 2026 quarterly report text | Mapped | READY_WITH_LIMITATIONS | Statements, debt note and supplemental cash items are printed. Limits: no stand-alone Q4 2025 (FY2025 less nine months 2025 is the only route); the Q3 non-GAAP reconciliation covers three months only; the issuer reports no EBITDA or adjusted EBITDA, only non-GAAP income from operations and free cash flow; the 2025-12-31 balance sheet splits out a deferred tax asset in the Q2 and Q3 reports but not in the annual report or Q1; the FY2024 report presents two reportable segments, while from the third quarter of 2025 one segment is reported. Claims outside debt are printed as operating lease liabilities, purchase commitments, accrued non-income taxes and unrecognized tax benefits; finance leases are minor (assets held under them USD 1.4 million at 2025-12-31; principal payments USD 193 thousand in nine months 2026); no pension, retiree medical, factoring or supplier-finance arrangement is described, and the legal-matters note names no specific proceeding. No subsequent-events note is printed in the Q3 report. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2–6; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 15–16; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–108; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 128, 130, 146; 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 115–119 |
| Business & governance (CP-1A) | Business model, products, customers, revenue by product and region; ownership and control; corporate structure; transactions; management and board; capitalisation | FY2025 annual report text; Q3 2026 quarterly report text | Mapped | READY_WITH_LIMITATIONS | The business description, product and regional revenue, the Stytch acquisition (closed 2025-11-14), the 43.7% Syniverse equity-method investment, the Syniverse wholesale agreement and the two note series are printed. Governance rests on signature-page names only: Part III defers to a proxy statement that is not supplied, so board committees, independence, pay and ownership are not available; the subsidiary list is an exhibit that is not supplied; no sponsor or controlling holder is named, and a single class of common stock remains because the Class B stock converted into Class A on 2023-06-28. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 6–17; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 116; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 131–133; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 149–152; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 23 |
| Fundamental credit (CP-2) | Synthesis of financial and business evidence; business and financial risk factors; debt and liquidity; absence of ratings and peers | Same filings as above | Mapped | READY_WITH_LIMITATIONS | Risk factors, the debt-service risk factor and liquidity discussion are printed. No rating, peer set, management guidance or market level is supplied, so relative standing and market-implied views cannot be supported. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 17–75; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 38–39; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 92–93 |
| Downside (CP-2A) | Cost structure and usage-based revenue mix; liquidity buffer; leverage covenants | FY2025 annual report text; Q3 2026 quarterly report text | Mapped | READY_WITH_LIMITATIONS | Cost, revenue-mix and liquidity inputs are printed. The note summary lists restrictions on liens, subsidiary guarantees and mergers or asset sales and no financial maintenance test, so covenant headroom cannot be tested. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 29; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| Liquidity (CP-2D) | Unrestricted cash and securities; undrawn facilities net of letters of credit; commitments; buyback capacity | Q3 2026 quarterly report text; FY2025 annual report text | Mapped | READY_WITH_LIMITATIONS | Cash and cash equivalents of USD 1,061,531 thousand and short-term marketable securities of USD 1,829,940 thousand at 2026-09-30 are printed. Searches of all five filings for credit facilities, revolvers, lines of credit, letters of credit, standby or surety instruments found none beyond a reference to a possible future revolving facility. Limits: purchase commitments are a single total in each quarterly report and the year-end schedule is only in the annual report; the lease maturity table is only in the annual report; the stepped-up commitment level is not explained. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 6, 15, 38–39; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 130, 137 |
| Rates, FX & hedging (CP-2E) | Interest-rate exposure; currency hedges and exposure | Q3 2026 quarterly report text; FY2025 annual report text | Mapped | READY_WITH_LIMITATIONS | Fixed-rate notes and no interest-rate derivatives; forward contracts with a sell notional of USD 348.7 million and maturities of up to seventeen months at 2026-09-30; management states that a hypothetical 10% change in rates or in exchange rates would not have had a material impact. Exposure by currency is not quantified: only the local currencies are listed and the sensitivity test is qualitative. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 12, 43; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 129 |
| Forward credit model (CP-2G) | Historical drivers; guidance; forecast assumptions | Q3 2026 quarterly report text; FY2025 annual report text | Mapped | READY_WITH_LIMITATIONS | History through Q3 2026 is printed. No guidance document is supplied and the run settings carry no forecast assumptions, so any forecast rests on analyst assumptions. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3, 27 |
| Refinancing & LME (CP-3C) | Maturity profile, call and change-of-control terms, facility availability, liability-management history | FY2025 annual report text; Q3 2026 quarterly report text | Mapped | READY_WITH_LIMITATIONS | The 2029 notes mature on 2029-03-15 and the 2031 notes on 2031-03-15; call schedules, the 101% change-of-control repurchase offer and the covenant fall-away while investment-grade rated are summarised. No facility exists and no liability-management transaction is described. The indenture is not supplied, so exact terms are unverified. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 134–136; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 13, 39 |
| Legal & covenants (CP-4) | Executed indenture and first supplemental indenture; covenant definitions and baskets | None: executed legal documents are not in the effective source set | Blocked | BLOCKED | The method's gate requires an executed governing document. The filing's summary of the notes is not one, and the run settings declare no legal documents. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 150 |
| Security selection (CP-3) | Instrument terms; trading levels; ratings; executed terms | FY2025 annual report text (instrument summary only) | Conditional | CONDITIONAL | Instrument terms are summarised, and fair values of the notes are disclosed (USD 474.0 million for the 2029 notes and USD 455.5 million for the 2031 notes at 2026-09-30). No trading level, rating or executed indenture is supplied. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 11; 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136 |
| Evidence validation (CP-5) | Page locators in the filings for every figure used by other modules | All five filings | Mapped | READY | Every filing carries page locators, so figures can be traced. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 1–107 |
| Committee decision (CP-6) | Portfolio and fund limits; the other modules' conclusions | None: no portfolio workbook is supplied | Conditional | CONDITIONAL | Fund limits and portfolio fit are not supplied, so they cannot be assessed. | Not supplied: the run settings list no portfolio |
| Research questions (CP-DR) | Named public documents not in the set: executed indenture and first supplemental indenture (exhibits 4.1 and 4.2), the 2026 proxy statement, list of subsidiaries (exhibit 21.1), the Q3 2026 earnings release | None | Named research needs only | Not applicable | These are research targets for the owner of each receiving module, not source gaps this module can fill. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 149–151 |
| Earnings changes (CP-1B) | Quarter-on-quarter and year-on-year change with guidance | Q3 2026 quarterly report text | Not applicable | Not applicable | Not in this pathway. Three-month 2026 and 2025 columns are printed, but no earnings release or guidance is supplied. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| Peer benchmark (CP-1C) | Peer set and peer financials | None | Not applicable | Not applicable | Not in this pathway, and no peer set or peer document is supplied. | Not supplied: no peer document |
| Earnings quality (CP-1D) | Non-recurring and non-cash items | Q3 2026 quarterly report text | Not applicable | Not applicable | Not in this pathway. Nine months 2026 include a USD 937.1 million non-cash tax benefit and a USD 32.8 million prepaid-asset impairment, both printed. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 13, 27 |
| Ratings & triggers (CP-2H) | Rating reports and rating-linked terms | FY2025 annual report text | Not applicable | Not applicable | Not in this pathway. The only rating link is that some covenants lapse while the notes are rated investment grade by either of two agencies; no rating is stated. | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 136 |
| Market-implied risk (CP-3D) | Bond prices, spreads, equity and options data | None | Not applicable | Not applicable | Not in this pathway, and the run settings list no quotes. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 11 |
| Recovery & fulcrum (CP-4C) | Distress event, claims waterfall, executed security terms | None | Not applicable | Not applicable | Not in this pathway. The latest report states compliance with all indenture covenants. | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| Changes since the last run (CP-8) | An earlier listed run of the same issuer and pathway | None | Not applicable | Not applicable | First run of this pathway, so there is nothing to compare. | Not supplied: no earlier run |
| Short credit snapshot (CP-L10) | One-page snapshot inputs | None | Not applicable | Not applicable | Belongs to a different, deactivated pathway. | Not supplied: not part of this pathway |

### T6 - Evidence trace

| Evidence ID | Evidence | Original document | Source |
|---|---|---|---|
| E01 | Senior notes: principal USD 500,000 thousand each, unamortized discount and issuance costs, and net carrying amount of USD 993,606 thousand at 2026-09-30 (USD 992,287 thousand at 2025-12-31) | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| E02 | Terms of the notes: 3.625% notes due 2029-03-15 and 3.875% notes due 2031-03-15; general unsecured; none of the subsidiaries guarantees them initially, though material domestic subsidiaries may guarantee them later; restrictive covenants on liens, subsidiary guarantees and mergers or asset sales; lapse while investment-grade rated; change-of-control repurchase at 101% | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136 |
| E03 | Statement of compliance with all indenture covenants at 2026-09-30 | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| E04 | Balance sheet at 2026-09-30: cash and cash equivalents USD 1,061,531 thousand; short-term marketable securities USD 1,829,940 thousand; operating lease liabilities USD 26,583 thousand current and USD 36,811 thousand noncurrent | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| E05 | Only reference to a revolving credit facility is to a future one (risk factor); the same wording appears in each supplied filing | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 92 |
| E06 | Three- and nine-month statements of operations to 2026-09-30 with 2025 comparatives | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 3 |
| E07 | Nine-month cash flow statement including cash paid for interest of USD 37,516 thousand | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 5–6 |
| E08 | Three-month free cash flow reconciliation; non-GAAP income from operations; no nine-month non-GAAP table | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 37 |
| E09 | FY2025, FY2024 and FY2023 statements of operations, balance sheets and cash flows | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–108 |
| E10 | FY2024 report: two operating and reportable segments and segment non-GAAP results | 10-K_2024-12-31_twlo-20241231.htm | 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 142–144 |
| E11 | FY2025 report: one operating and reportable segment from the third quarter of 2025 | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 82 |
| E12 | Purchase commitments: yearly schedule totalling USD 349,241 thousand at 2025-12-31 | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 137 |
| E13 | Purchase commitments: USD 273.2 million at 2026-03-31 | 10-Q_2026-03-31_twlo-20260331.htm | 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 13 |
| E14 | Purchase commitments: USD 1.5 billion at 2026-06-30 | 10-Q_2026-06-30_twlo-20260630.htm | 10-Q_2026-06-30_twlo-20260630.htm.jsonl, page 14 |
| E15 | Purchase commitments: USD 1.3 billion at 2026-09-30, remaining terms of up to four years | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 15 |
| E16 | Operating lease maturities and obligations at 2025-12-31 | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 130 |
| E17 | Foreign currency forwards: sell notional USD 348.7 million, maturities up to seventeen months at 2026-09-30 | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 12 |
| E18 | Fixed-rate notes, no interest-rate derivatives, hypothetical 10% rate change not material | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 43 |
| E19 | U.S. valuation allowance released in the second quarter of 2026: income tax benefit USD 937.1 million in nine months 2026 | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 27 |
| E20 | Stytch acquisition on 2025-11-14 for USD 104.1 million in cash | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 131 |
| E21 | Syniverse: 44.6% acquired in 2022 for USD 750.0 million; 43.7% at 2025-12-31; impairment USD 80.6 million; wholesale agreement | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 131–132 |
| E22 | Active Customer Accounts discontinued as a key metric from the first quarter of 2026; 402,000 at 2025-12-31 | 10-Q_2026-03-31_twlo-20260331.htm | 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 24; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 84 |
| E23 | Part III incorporated by reference to a proxy statement not supplied | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 149 |
| E24 | Directors and officers who signed the annual report | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 152 |
| E25 | Exhibits 4.1 to 4.4 (indenture, first supplemental indenture and note forms) filed by reference to a 2021 current report | 10-K_2025-12-31_twlo-20251231.htm | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 150 |
| E26 | Share repurchase program: USD 698.7 million remaining at 2026-09-30; expires 2027-12-31 | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 39 |
| E27 | Dec 31, 2025 balance sheet: deferred tax asset shown separately in the Q2 and Q3 reports | 10-Q_2026-06-30_twlo-20260630.htm | 10-Q_2026-06-30_twlo-20260630.htm.jsonl, pages 2, 7; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2; 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 2 |
| E28 | Fair values of the notes (Level 2) at 2026-09-30 | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 11 |
| E29 | Legal-matters note: general description only; it names no specific proceeding, consent decree or settlement | 10-Q_2026-09-30_twlo-20260930.htm | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 15 |
| E30 | FY2024 product revenue groups as first reported, and as reclassified in the FY2025 report | 10-K_2024-12-31_twlo-20241231.htm | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 136 |

## Calculations

| Calc ID | Calculation | Inputs | Result | Source |
|---|---|---|---|---|
| C01 | Principal of the two note series | 500,000 (2029 notes) + 500,000 (2031 notes), USD thousands, unchanged from 2025-12-31 to 2026-09-30 | 1,000,000 thousand, or USD 1,000.0 million | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 13 |
| C02 | Net carrying amount of the notes | 497,398 + 496,208 = 993,606; unamortized discount and issuance costs 2,124 + 478 + 3,095 + 697 = 6,394; 1,000,000 − 6,394 = 993,606 | 993,606 thousand, equal to long-term debt, net on the balance sheet | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 2, 13 |
| C03 | Principal due by year, USD thousands | 2026 to 2028: none printed; 2029: 500,000; 2030: none printed; 2031: 500,000 | 1,000,000 thousand in total | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 135 |
| C04 | Deferred tax asset presentation at 2025-12-31 | 222,648 (other long-term assets, Q3 report) + 20,026 (deferred tax asset, Q3 report) = 242,674 | Equals the single line of 242,674 in the annual report and the Q1 report; no value differs | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 104; 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 2 |
| C05 | FY2024 product revenue reclassification, USD thousands | Messaging 2,435,462 − 2,358,767 = 76,695; Other 770,185 − 693,490 = 76,695 | 76,695 thousand moved from Other to Messaging, matching the USD 76.7 million the FY2025 report states | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 136 |
| C06 | FY2025 purchase commitment schedule | 288,615 + 31,861 + 13,152 + 9,166 + 6,447 | 349,241 thousand, equal to the stated total | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 137 |
| C07 | Age of the latest supplied document | As-of date 2026-11-18 less signing date 2026-10-30 | 19 days | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 107 |

## Gaps

| Gap ID | Type | Severity | Finding | Affected modules | Readiness effect | Remediation | Source |
|---|---|---|---|---|---|---|---|
| G01 | SOURCE_GAP | MATERIAL | The executed indenture dated 2021-03-09 and the first supplemental indenture are not supplied; the 10-K summary lists three restrictive covenants and a lapse while investment-grade rated, and nothing more | Legal & covenants; Security selection; Refinancing & LME; Downside | Legal & covenants is blocked; the others rely on the issuer's summary | Supply the executed indenture and first supplemental indenture (exhibits 4.1 and 4.2) | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 135–136; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 150 |
| G02 | CONFLICT | MATERIAL | Purchase commitments are USD 349,241 thousand at 2025-12-31 in the annual report (with a yearly schedule), then USD 273.2 million at 2026-03-31, USD 1.5 billion at 2026-06-30 and USD 1.3 billion at 2026-09-30 in the quarterly reports as single totals; the step-up between the first two quarterly dates is not explained and the quarterly totals may be defined differently from the annual schedule | Financial foundation; Liquidity; Fundamental credit | Claims outside debt cannot be scheduled by year for 2026 | Obtain the yearly schedule and the commitment counterparties behind the June 2026 level | 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 137; 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 13; 10-Q_2026-06-30_twlo-20260630.htm.jsonl, page 14; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 15 |
| G03 | SOURCE_GAP | MATERIAL | No rating, trading level, spread or peer data is supplied; the run settings list none | Security selection; Market-implied risk; Ratings & triggers; Peer benchmark | The question of which instrument to own cannot be priced from these filings | Supply dated market levels and any agency ratings | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 11 |
| G04 | SOURCE_GAP | MINOR | The 2026 proxy statement (Part III: directors, officers, pay, ownership, independence) is not supplied; the annual report defers to it | Business & governance | Governance is limited to signature-page names | Supply the 2026 proxy statement | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 149, 152 |
| G05 | SOURCE_GAP | MINOR | No earnings release, investor presentation, guidance or management bridge is supplied | Forward credit model; Financial foundation | Adjusted EBITDA is not issuer-reported and guidance is absent | Supply the Q3 2026 earnings release and any guidance | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 36–37 |
| G06 | COVERAGE_GAP | MINOR | Q4 2025 is not printed as a stand-alone quarter; FY2025 less the nine-month 2025 comparative is the only route in the supplied filings | Financial foundation; Forward credit model | Four discrete quarters to Q3 2026 need one derived quarter | Derive Q4 2025 from the FY2025 report and the nine-month 2025 comparative in the Q3 report | 10-K_2025-12-31_twlo-20251231.htm.jsonl, pages 104–108; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, pages 3–6 |
| G07 | COVERAGE_GAP | MINOR | The Q3 report gives non-GAAP reconciliations for three months only | Financial foundation | Nine-month add-backs must be assembled from each quarter's report | Use the Q1, Q2 and Q3 three-month tables | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 37 |
| G08 | CONFLICT | MINOR | The FY2024 report presents two reportable segments; from the third quarter of 2025 the company reports one | Financial foundation; Business & governance | Segment history before the third quarter of 2025 exists only in the FY2024 report | Keep segment and consolidated series separate | 10-K_2024-12-31_twlo-20241231.htm.jsonl, pages 142–144; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 82 |
| G09 | CONFLICT | MINOR | FY2024 product revenue groups differ between the FY2024 report and the FY2025 report because RCS and WhatsApp messaging moved from Other to Messaging (calculation C05) | Financial foundation; Business & governance | Product series must use the FY2025 report's regrouped FY2024 values | Use the FY2025 report's presentation for FY2024 and FY2023 | 10-K_2024-12-31_twlo-20241231.htm.jsonl, page 151; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 136 |
| G10 | CONFLICT | MINOR | The 2025-12-31 balance sheet shows other long-term assets as one line in the annual report and the Q1 report (242,674) and as two lines in the Q2 and Q3 reports (calculation C04); no value differs | Financial foundation | None beyond labelling | Use the split presentation for the deferred tax asset and note the reclassification | 10-Q_2026-06-30_twlo-20260630.htm.jsonl, pages 2, 7; 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 2 |
| G11 | COVERAGE_GAP | MINOR | Active Customer Accounts ceased to be reported from the first quarter of 2026; the series ends at 402,000 at 2025-12-31 | Business & governance; Fundamental credit | Customer-count trend cannot be extended; the revenue-expansion rate continues | State the break in the series | 10-Q_2026-03-31_twlo-20260331.htm.jsonl, page 24; 10-K_2025-12-31_twlo-20251231.htm.jsonl, page 84 |
| G12 | STALE_EVIDENCE | MINOR | Nothing dated after the Q3 report of 2026-10-30 is supplied, up to the cutoff of 2026-11-18; no later current report or release is in the set | All modules | Events between 2026-10-30 and 2026-11-18 are not established | Supply any current report filed after 2026-10-30 | 10-Q_2026-09-30_twlo-20260930.htm.jsonl, page 107 |

## Next module

The orchestrator selects the next module.
