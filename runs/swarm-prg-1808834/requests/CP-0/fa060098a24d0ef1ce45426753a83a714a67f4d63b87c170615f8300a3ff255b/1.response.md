---
module_id: CP-0
module_name: Source readiness
issuer_id: prg-1808834
issuer_name: PROG Holdings, Inc.
analysis_date: 2026-11-18
module_status: Complete
---

# Source readiness: PROG Holdings, Inc.

## Request

Source readiness for PROG Holdings, Inc. (issuer prg-1808834), as of 2026-11-18, on the credit snapshot pathway. Scope: whether the eight supplied SEC filings and earnings supplements can support the requested snapshot work, and what remains unsupported.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_prg-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | 2025-02-19 | bb0713895e4cd65bb4f61bcf6a8bbefaf957bd9bdccf041094037d3b0756173a | FY2024 comparatives and the pre-acquisition debt position |
| 10-K_2025-12-31_prg-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-02-18 | 43696e0412932e198d68eb29cd6fc426ec1f509d5acbc8a6c20f289c6ae9ba90 | Identity, FY2025 statements, debt, covenants, exhibit list and the revolver wording |
| 10-Q_2026-03-31_prg-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-29 | d69e50080a94f37c92adfff5bf60505ef861d875465e58daa224b87e3bd35558 | Q1 2026 series and the revolver wording |
| 10-Q_2026-06-30_prg-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-07-29 | 761a8b8605c7eb75d013e764ecf91a6f3654b4df74a7d66c5849d8abf76f9948 | Q2 2026 series and the revolver wording |
| 10-Q_2026-09-30_prg-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-10-28 | 01c09edb5e69e3590223eccf26e6a6aed70ea2f7a1ff1e27fdf8cd6a94ab472f | Latest period, debt, covenant levels, subsequent events and the revolver wording |
| EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl | Earnings supplement presentation for the first quarter of 2026 (Exhibit 99.2) | 2026-04-29 | 953aa9345885f3ec580cacd32178c47ae8bc8190e8170e08ff72d0c8ba481009 | Adjusted EBITDA and net leverage definitions; table readability |
| EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl | Earnings supplement presentation for the second quarter of 2026 (Exhibit 99.2) | 2026-07-29 | d8b979c8ef29ce2214d37310135ed78fac399b967fe8e7ec7c1e06e3cf588a3e | Adjusted EBITDA series and net leverage; table readability |
| EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl | Earnings supplement presentation for the third quarter of 2026 (Exhibit 99.3) | 2026-10-28 | d76be93d472b42729dc5e10149c503bbae3814f63938c03123ad56c5d79d9f66 | Adjusted EBITDA series, net leverage and outlook; table readability |

No upstream analytical handoff was supplied to this module.

## Findings

### Bottom line

The eight supplied filings and earnings supplements are enough to run the credit snapshot for PROG Holdings on primary evidence through the quarter ended September 30, 2026, but not to test covenants, security or recovery against the legal documents.
Basis: 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 1; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 163

Creditors can rely on the two annual reports and three quarterly reports for debt, liquidity, covenant levels and segment results, and the newest document is 21 days old at the cutoff. Two limits cap how far conclusions can go: the annual reports call the revolving facility secured while the 2026 quarterly reports call it unsecured, and the earnings supplements print the adjusted EBITDA reconciliation only as table titles, so the company leverage figure cannot be rebuilt from its parts.
Basis: 10-K_2025-12-31_prg-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 9; calculation C2

### T1 Input gate

| Gate item | Result | Detail | Source |
| --- | --- | --- | --- |
| Objective | Stated | Credit snapshot pathway for PROG Holdings, Inc.; no separate objective text was supplied, so the pathway use case governs. Selected analytical work: source readiness, financial foundation, business and governance, fundamental credit. | Run settings (not issuer evidence) |
| Issuer and registrant | Established | PROG Holdings, Inc., Georgia corporation, common stock listed on the New York Stock Exchange as PRG, commission file number 1-39628, principal offices in Draper, Utah. | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 1 |
| Reporting perimeter | Established | Consolidated group of three reportable segments (Progressive Leasing, Purchasing Power from January 2, 2026, Four). Vive is presented as discontinued operations for all periods. Asset-backed funding vehicles of Purchasing Power are consolidated variable interest entities whose debt is non-recourse to the rest of the group. | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 5; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 7; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 21 |
| As-of date and cutoff | Stated | As-of 2026-11-18 and cutoff 2026-11-18; current period Q3 2026; prior period FY2025. | Run settings (not issuer evidence) |
| Latest period and document | Established | Quarterly report for the quarter and nine months ended 2026-09-30, signed 2026-10-28, 21 days before the cutoff (calculation C2). It carries subsequent events through its signing date. | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 80 |
| Periods covered | Established | Annual statements for FY2023 to FY2025 (three-year earnings and cash flow, two year-end balance sheets); quarterly statements for Q1, Q2 and Q3 2026 with prior-year comparatives; three earnings supplements with quarterly revenue, adjusted EBITDA and net leverage series. | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 107; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 3; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 |
| Primary filings | Present | Two annual reports and three quarterly reports on Form 10-K and Form 10-Q (authority tier 1). | 10-K_2025-12-31_prg-20251231.htm.jsonl |
| Issuer presentations | Present with limits | Three earnings supplements (authority tier 2). Headlines, commentary and chart values are readable; the reconciliation tables and outlook ranges are titles only. | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 9 |
| Legal documents | Not supplied | The run declares no legal documents. The indenture, the credit agreement and its Fourth Amendment appear only in the exhibit index of the annual report. | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 163 |
| Ratings, quotes, peers, portfolio | Not supplied | No issuer or note ratings, market prices, peer set or portfolio data were supplied. The filings give no issuer credit rating. | Run settings (not issuer evidence) |
| Dating of evidence | Pass | Every supplied document is dated 2026-10-28 or earlier; nothing dated after the cutoff is used as fact. Future dates in contract terms (2029 and 2030 maturities) are labelled as terms. | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41 |
| Source gate | Partial | Primary filings cover the requested snapshot work. Three limits are material: no executed legal documents, a conflict on whether the revolver is secured, and unreadable earnings-supplement tables. See Gaps. | Gaps |

### T2 Source register

| Source ID | Source | Document | Period covered | Document date | Authority tier | Active representation | Pages | Entity and perimeter | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_prg-20241231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2024 | FY2024 | 2025-02-19 | 1 (primary filing) | Prepared page text | 155 | Consolidated, as originally reported: Progressive Leasing and Vive are the reportable segments; Vive is recast as discontinued in later documents | Superseded by the FY2025 annual report for year-end 2025; kept for the FY2024 baseline. Describes the revolver as senior secured. |
| S2 | 10-K_2025-12-31_prg-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | FY2025 | 2026-02-18 | 1 (primary filing) | Prepared page text | 166 | Consolidated; Vive discontinued; Purchasing Power described as a subsequent event | Part III items are incorporated by reference to a proxy statement not supplied. Describes the revolver as senior secured and fully secured. |
| S3 | 10-Q_2026-03-31_prg-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | Q1 2026 | 2026-04-29 | 1 (primary filing) | Prepared page text | 72 | Consolidated incl. Purchasing Power from 2026-01-02; Vive discontinued | Unaudited. Describes the revolver as senior unsecured. |
| S4 | 10-Q_2026-06-30_prg-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | Q2 2026 and six months | 2026-07-29 | 1 (primary filing) | Prepared page text | 77 | Consolidated incl. Purchasing Power from 2026-01-02; Vive discontinued | Unaudited. Describes the revolver as senior unsecured. |
| S5 | 10-Q_2026-09-30_prg-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2026 | Q3 2026 and nine months | 2026-10-28 | 1 (primary filing) | Prepared page text | 80 | Consolidated incl. Purchasing Power from 2026-01-02; Vive discontinued | Unaudited. Describes the revolver as senior unsecured. Purchase price allocation for Purchasing Power is preliminary. |
| S6 | EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl | Earnings supplement presentation for the first quarter of 2026 (Exhibit 99.2) | Q1 2026 | 2026-04-29 | 2 (issuer presentation) | Prepared page text | 9 | Continuing operations; Adjusted EBITDA is the company definition | Tables of reconciliations and outlook ranges are not readable; company-prepared; supporting only. |
| S7 | EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl | Earnings supplement presentation for the second quarter of 2026 (Exhibit 99.2) | Q2 2026 | 2026-07-29 | 2 (issuer presentation) | Prepared page text | 8 | Continuing operations; Adjusted EBITDA is the company definition | Tables of reconciliations and outlook ranges are not readable; company-prepared; supporting only. |
| S8 | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl | Earnings supplement presentation for the third quarter of 2026 (Exhibit 99.3) | Q3 2026 | 2026-10-28 | 2 (issuer presentation) | Prepared page text | 9 | Continuing operations; Adjusted EBITDA is the company definition | Tables of reconciliations and outlook ranges are not readable; company-prepared; supporting only. |

### T4 Content-to-module map

| Capability | Module | Content and evidence demand | Source | Disposition | Readiness effect and limitation |
| --- | --- | --- | --- | --- | --- |
| Financial foundation | CP-1 | Statements, debt note, maturities and interest for FY2024, FY2025 and Q1 to Q3 2026 | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 107–109; 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 132–134; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 2–4; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 38–42 | Recommended | Ready with limitations: Purchasing Power is in results only from 2026-01-02; Vive is recast; company adjusted EBITDA cannot be reconciled from the supplements. |
| Business & governance | CP-1A | Business description, segments, partners, acquisition and divestiture, ownership and governance | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 7–14; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 27–31; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 52–55; 10-K_2025-12-31_prg-20251231.htm.jsonl, page 161 | Recommended | Ready with limitations: board, executive and ownership detail sits in an unsupplied proxy statement. |
| Fundamental credit | CP-2 | Segment trends, delinquency and write-offs, covenant levels, leverage, liquidity and outlook language | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 54–55; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 61; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 4–5 | Recommended | Ready with limitations: covenant EBITDA definition and the revolver ranking are not verifiable from the filings alone. |
| Earnings changes | CP-1B | Four quarters of results, GMV and adjusted EBITDA series, outlook wording | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 4–6; EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, pages 4–5; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 60–61 | Recommended | Ready with limitations: outlook ranges are not readable; not in this run selection. |
| Earnings quality | CP-1D | Add-backs and adjustments between GAAP and adjusted measures | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 7–9 | Blocked | Add-back amounts are in tables that are titles only; only the adjustment categories in words are available. |
| Peer benchmark | CP-1C | Peer set and peer metrics | Run settings (not issuer evidence) | Inapplicable | No peer set was supplied. |
| Liquidity | CP-2D | Cash, undrawn revolver, covenant levels, restricted cash, share repurchase funding | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 2; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 39–40; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 70–73 | Recommended | Ready with limitations: letters of credit outstanding are not stated; the planned accelerated repurchase draws on cash and the revolver. |
| Refinancing & LME | CP-3C | Maturity schedule, notes and revolver maturities, asset-backed maturities | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 41; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38 | Recommended | Ready with limitations: call terms of the notes are in the unsupplied indenture. |
| Downside | CP-2A | Stress inputs from segment, delinquency and funding data | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 54–55; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 35–36 | Recommended | Ready with limitations: depends on the forward model and the financial foundation. |
| Forward credit model | CP-2G | Quarterly drivers: GMV, revenue, provisions, cash flow, debt | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 56–68; EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 | Recommended | Ready with limitations: outlook ranges are not readable. |
| Rates, FX & hedging | CP-2E | Variable-rate exposure and hedges | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 76 | Inapplicable | The company states it uses no derivative instruments; the stated sensitivity is the only rate evidence. |
| Ratings & triggers | CP-2H | Issuer and note ratings, rating triggers | Run settings (not issuer evidence) | Blocked | No rating was supplied. |
| Legal & covenants | CP-4 | Executed credit agreement, indenture and asset-backed documents | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 162–163 | Blocked | No executed legal document was supplied; the exhibit index lists them. |
| Covenant capacity | CP-4A | Covenant definitions and baskets | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 | Blocked | Levels are stated; definitions are in the unsupplied credit agreement. |
| Structural priority | CP-4B | Guarantors, collateral, entity-level claims | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 38–40 | Blocked | Guarantors are described only as certain domestic subsidiaries; the revolver ranking conflicts across filings. |
| Intercreditor control | CP-4D | Intercreditor and lien arrangements | Run settings (not issuer evidence) | Blocked | No intercreditor document was supplied. |
| Recovery & fulcrum | CP-4C | Claims, collateral value and waterfall | 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 38–41 | Blocked | Needs the legal documents and entity-level asset data. |
| Security selection | CP-3 | Instrument terms and relative choice among securities | Run settings (not issuer evidence) | Blocked | No instrument documents or quotes were supplied. |
| Market-implied risk | CP-3D | Market prices, spreads and yields | Run settings (not issuer evidence) | Blocked | No market quotes were supplied. |
| Committee decision | CP-6 | Portfolio mandate and limits | Run settings (not issuer evidence) | Inapplicable | No portfolio data was supplied. |
| Evidence validation | CP-5 | Audit of other handoffs | Run settings (not issuer evidence) | Inapplicable | Not part of the credit snapshot pathway. |
| Changes since the last run | CP-8 | Comparison with an earlier run of the same pathway | Run settings (not issuer evidence) | Inapplicable | This is the first run of the pathway for this issuer. |
| Short credit snapshot | CP-L10 | Short snapshot pathway output | Run settings (not issuer evidence) | Inapplicable | A different pathway. |
| Research questions | CP-DR | Named research questions | Run settings (not issuer evidence) | Inapplicable | No research question was supplied; the open items are source gaps listed under Gaps. |

### T6 Evidence trace

| Trace ID | Statement | Source | Source wording | Lineage class |
| --- | --- | --- | --- | --- |
| E1 | Registrant name, state, listing and file number | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 1 | Commission file Number. 1-39628 | Directly Sourced |
| E2 | Latest period covered by the newest quarterly report | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 1 | FOR THE QUARTERLY PERIOD ENDED September 30, 2026 | Directly Sourced |
| E3 | Date the FY2025 annual report was filed | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 6 | filed with the United States Securities and Exchange Commission on February 18, 2026 | Directly Sourced |
| E4 | Vive is discontinued operations in every period shown | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 7 | Vive's results are presented as discontinued operations | Directly Sourced |
| E5 | Purchasing Power acquired for cash consideration | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 27 | The total consideration transferred for purposes of ASC 805 was $424.2 million | Directly Sourced |
| E6 | Revolver described as secured in the FY2025 annual report | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 133 | The Revolving Facility is fully secured | Conflicting |
| E7 | Revolver described as unsecured in the Q3 2026 quarterly report | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 | $350.0 million senior unsecured Revolving Facility | Conflicting |
| E8 | Net debt to EBITDA covenant level for 2026 under the revolver credit facility | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 | no more than (a) 3.25:1.00 | Directly Sourced |
| E9 | Senior unsecured notes outstanding | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 38 | Senior unsecured notes 6.00% November 2029 $ 600,000 | Directly Sourced |
| E10 | Asset-backed creditors have no recourse to the group | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 21 | The creditors of the VIEs do not have recourse to the assets or general credit of the Company | Directly Sourced |
| E11 | Reconciliation tables appear as titles only in the Q3 supplement | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 9 | GAAP to non-GAAP Reconciliation Tables PROG Holdings, Inc. Non-GAAP Financial Information Quarterly Segment EBITDA (In thousands) | Insufficient Information |
| E12 | Company net leverage definition | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 5 | Net leverage ratio defined as Gross recourse debt minus cash and cash equivalents divided by trailing 12-month adjusted EBITDA | Directly Sourced |
| E13 | Indenture and credit agreement are listed as exhibits, not supplied | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 163 | Indenture, dated November 26, 2021 | Insufficient Information |
| E14 | Share repurchase announced after quarter end | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 25 | On October 28, 2026, the Company announced its intention to enter into an accelerated share repurchase agreement | Directly Sourced |
| E15 | Governance and ownership items incorporated by reference to a proxy statement | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 161 | incorporated by reference | Directly Sourced |
| E16 | No derivative instruments held | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 76 | The Company does not currently use derivative financial instruments | Directly Sourced |
| E17 | Newest supplied document is 21 days older than the cutoff | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 80 | Date: October 28, 2026 | Calculated |

### P3 Input inventory

| Source ID | Source | Bytes | Pages | sha256 | Document family | Entity | Accessibility |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-12-31_prg-20241231.htm.jsonl | 378706 | 155 | bb0713895e4cd65bb4f61bcf6a8bbefaf957bd9bdccf041094037d3b0756173a | Annual report, Form 10-K | PROG Holdings, Inc. | Readable page text |
| S2 | 10-K_2025-12-31_prg-20251231.htm.jsonl | 398111 | 166 | 43696e0412932e198d68eb29cd6fc426ec1f509d5acbc8a6c20f289c6ae9ba90 | Annual report, Form 10-K | PROG Holdings, Inc. | Readable page text |
| S3 | 10-Q_2026-03-31_prg-20260331.htm.jsonl | 173950 | 72 | d69e50080a94f37c92adfff5bf60505ef861d875465e58daa224b87e3bd35558 | Quarterly report, Form 10-Q | PROG Holdings, Inc. | Readable page text |
| S4 | 10-Q_2026-06-30_prg-20260630.htm.jsonl | 191204 | 77 | 761a8b8605c7eb75d013e764ecf91a6f3654b4df74a7d66c5849d8abf76f9948 | Quarterly report, Form 10-Q | PROG Holdings, Inc. | Readable page text |
| S5 | 10-Q_2026-09-30_prg-20260930.htm.jsonl | 198071 | 80 | 01c09edb5e69e3590223eccf26e6a6aed70ea2f7a1ff1e27fdf8cd6a94ab472f | Quarterly report, Form 10-Q | PROG Holdings, Inc. | Readable page text |
| S6 | EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl | 20554 | 9 | 953aa9345885f3ec580cacd32178c47ae8bc8190e8170e08ff72d0c8ba481009 | Earnings supplement, Exhibit 99.2 | PROG Holdings, Inc. | Readable page text |
| S7 | EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl | 19834 | 8 | d8b979c8ef29ce2214d37310135ed78fac399b967fe8e7ec7c1e06e3cf588a3e | Earnings supplement, Exhibit 99.2 | PROG Holdings, Inc. | Readable page text |
| S8 | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl | 21415 | 9 | d76be93d472b42729dc5e10149c503bbae3814f63938c03123ad56c5d79d9f66 | Earnings supplement, Exhibit 99.3 | PROG Holdings, Inc. | Readable page text |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-02-19 | day | 2025-02-19 | Annual report for the year ended 2024-12-31 signed | Historical — signed by the registrant | 10-K_2024-12-31_prg-20241231.htm.jsonl, page 155 | Year-end 2024 baseline before the Purchasing Power acquisition and the Vive sale. |
| 2026-02-18 | day | 2026-02-18 | Annual report for the year ended 2025-12-31 signed | Historical — signed by the registrant | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 165 | Year-end 2025 balance sheet and debt before the acquisition financing; reports the acquisition as a subsequent event. |
| 2026-04-29 | day | 2026-04-29 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — signed by the registrant | 10-Q_2026-03-31_prg-20260331.htm.jsonl, page 72 | First quarter after the acquisition financing; starts the 2026 quarterly series. |
| 2026-07-29 | day | 2026-07-29 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — signed by the registrant | 10-Q_2026-06-30_prg-20260630.htm.jsonl, page 77 | Second quarter 2026 balance sheet and results after the acquisition. |
| 2026-10-28 | day | 2026-10-28 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — signed by the registrant | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 80 | Latest period covered; subsequent events run to this date. |
| 2026-04-29 | day | 2026-04-29 | First quarter 2026 earnings supplement presented | Historical — presented to investors on its cover date | EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl, page 1 | Company adjusted EBITDA and net leverage as presented for Q1 2026. |
| 2026-07-29 | day | 2026-07-29 | Second quarter 2026 earnings supplement presented | Historical — presented to investors on its cover date | EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, page 1 | Company adjusted EBITDA and net leverage as presented for Q2 2026. |
| 2026-10-28 | day | 2026-10-28 | Third quarter 2026 earnings supplement presented | Historical — presented to investors on its cover date | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, page 1 | Company adjusted EBITDA, net leverage and revised outlook language as presented for Q3 2026. |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 12 |
| Calculated | 1 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 2 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 3 |
| MINOR | 4 |

## Calculations

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Pages in the eight supplied sources | 155 + 166 + 72 + 77 + 80 + 9 + 8 + 9 | 576 pages | P3 Input inventory |
| C2 | Age of the newest supplied document at the cutoff | 2026-11-18 minus 2026-10-28 (3 days to 2026-10-31 plus 18 days) | 21 days | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 80 |
| C3 | Documents by form | 2 annual reports + 3 quarterly reports + 3 earnings supplements | 8 files | T2 Source register |

## Gaps

| Gap ID | Gap | Severity | Affected work | Remediation | Source |
| --- | --- | --- | --- | --- | --- |
| G1 | No executed credit agreement, indenture or asset-backed note document was supplied; the annual report lists them as exhibits and the run declares none. Covenant EBITDA as defined, guarantor lists, collateral, baskets and asset-backed triggers cannot be checked beyond the filings summaries. | MATERIAL | Legal & covenants; Covenant capacity; Structural priority; Intercreditor control; Recovery & fulcrum; Security selection; covenant statements in Fundamental credit | Supply the credit agreement with its Fourth Amendment, the November 2021 indenture and the Series 2026-A documents. | 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 162–163; 10-Q_2026-09-30_prg-20260930.htm.jsonl, pages 39–40 |
| G2 | Conflict: the FY2024 and FY2025 annual reports call the USD 350.0 million revolver senior secured and fully secured; the three 2026 quarterly reports call it senior unsecured. Not reconciled here; both wordings are kept. | MATERIAL | Financial foundation (debt stack ranking); Structural priority; Fundamental credit | Supply the amended credit agreement; until then state both wordings. | 10-K_2024-12-31_prg-20241231.htm.jsonl, pages 128–129; 10-K_2025-12-31_prg-20251231.htm.jsonl, pages 132–133; 10-Q_2026-03-31_prg-20260331.htm.jsonl, page 38; 10-Q_2026-06-30_prg-20260630.htm.jsonl, page 38; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 |
| G3 | The earnings supplements show the reconciliation, segment EBITDA and outlook tables only as titles. Adjusted EBITDA components, revenue and EBITDA guidance ranges are not established; only headline values, chart values and the net leverage definition are readable. | MATERIAL | Financial foundation (company LTM EBITDA); Earnings quality; Earnings changes; Fundamental credit | Supply the earnings releases with tables or the tables as data. | EX-99.3_2026-10-28_ex-993q32026earningssupp.htm.jsonl, pages 5–9; EX-99.2_2026-07-29_ex-992q22026earningssupp.htm.jsonl, pages 5–8; EX-99.2_2026-04-29_ex-992q12026earningssupp.htm.jsonl, pages 5–9 |
| G4 | Letters of credit outstanding under the USD 20.0 million sublimit are not stated in any supplied document (searched: letter of credit, LC, standby, surety, swingline). Availability equals the commitment, which implies none were outstanding at 2026-09-30. | MINOR | Liquidity | Confirm with the credit agreement or a compliance certificate. | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 133; 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 39 |
| G5 | No issuer or note ratings, market prices, peer set or portfolio data were supplied; relative value, market-implied risk and portfolio fit cannot be assessed. | MINOR | Peer benchmark; Market-implied risk; Ratings & triggers; Committee decision | Supply them if those modules are wanted. | Run settings (not issuer evidence) |
| G6 | The proxy statement is not supplied; board composition, executive and ownership detail are incorporated by reference. | MINOR | Business & governance | Supply the 2026 proxy statement. | 10-K_2025-12-31_prg-20251231.htm.jsonl, page 161 |
| G7 | Purchasing Power standalone financials before 2026-01-02 are not supplied; only unaudited pro forma revenue and earnings are given, so 2026 against 2025 is not like for like for that segment. | MINOR | Earnings changes; Fundamental credit | Use the pro forma note for comparisons and label it. | 10-Q_2026-09-30_prg-20260930.htm.jsonl, page 31 |

## Next module

The orchestrator selects the next module.
