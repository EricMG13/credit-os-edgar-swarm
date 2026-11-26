# CP-0 source readiness: COHERENT CORP.

## Request
Source readiness for COHERENT CORP. (cohr), as of 2026-11-05, on the credit snapshot pathway. Scope: whether the seven supplied filings and releases support Business & governance, Financial foundation and Fundamental credit work for the quarter ended 2026-09-30 and the year ended 2026-06-30.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2026-06-30_iivi-20260630.htm.jsonl | Annual report on Form 10-K for the fiscal year ended June 30, 2026 | 2026-08-14 | e427b31d3ddbac8e2682229c0851cd57a35f7942a911c46bc2f7e184a8d2417f | Audited annual statements, debt and liquidity notes, covenants, segments, business description, exhibit index and Part III references. Document date is the signature date; the filing date is not stated. |
| 10-Q_2025-12-31_iivi-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended December 31, 2025 | 2026-02-04 | f7c4c25b26330da07c84899cb176e2f656eac9af26c4128e5f71e23f3921c2c5 | Second-quarter fiscal 2026 statements, debt table and liquidity table. Document date is the signature date; the filing date is not stated. |
| 10-Q_2026-03-31_iivi-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended March 31, 2026 | 2026-05-06 | f448bb1aae6e87add6b50bc7c2c3335a7137b8a9e4f7f09915b24d3212838bb2 | Third-quarter fiscal 2026 statements, debt table and liquidity table. Document date is the signature date; the filing date is not stated. |
| 10-Q_2026-09-30_iivi-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended September 30, 2026 | 2026-11-04 | 2522ad33326b2e35e6501525fb87f419508656f6b0de5277f8f2cf521928150e | Latest quarter: statements, debt table, facilities, liquidity table, fair values and the segment note. Document date is the signature date; the filing date is not stated. |
| EX-99.1_2026-05-06_d57080dex991.htm.jsonl | Exhibit 99.1 press release: third quarter fiscal 2026 results | 2026-05-06 | dd0ab92d28fa855aab2f4b2d6a0ad55f65e0e80e6b5fe9f8c4fcf3b5db2b5776 | Third-quarter results, non-GAAP reconciliations and segment revenues. |
| EX-99.1_2026-08-12_d128030dex991.htm.jsonl | Exhibit 99.1 press release: fourth quarter and full year fiscal 2026 results | 2026-08-12 | 2026b9917624616c285039908d8b9c9ea20eabeae7f1857e479c3c647a5b1bab | Fourth-quarter and full-year results, statements, non-GAAP reconciliations and segment revenues. |
| EX-99.1_2026-11-04_d176836dex991.htm.jsonl | Exhibit 99.1 press release: first quarter fiscal 2027 results | 2026-11-04 | c65396b97d274ca2df0db447a0ca9d97bbff5b1393199d2c9b3e69ebf1b4d0a2 | First-quarter results, statements, non-GAAP reconciliations, segment revenues and the second-quarter outlook. |

No upstream analysis was supplied to this module.

## Findings

### Bottom line

The sources are sufficient for a financial and fundamental credit snapshot of COHERENT CORP. through the quarter ended 2026-09-30, but not for covenant headroom, rating or relative-value conclusions, which would rest on documents the run does not hold. The audited annual report, three quarterly reports and three earnings releases all cover the issuer's own consolidated group, so no parent or sister-company statements are needed.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 85–89, 104; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 2–5, 10

The executed credit agreement, its five amendments and the indenture are listed in the annual report's exhibit index but were not supplied, and no source states a covenant ratio, an EBITDA figure, a letter-of-credit balance or a credit rating. Governance and ownership detail sits in a proxy statement that was not supplied. Business & governance, Financial foundation and Fundamental credit can proceed with these limits written into their results.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 51, 136–138

### T1 Input gate

| Item | Value | Source |
| --- | --- | --- |
| Run | cohr-2026-11-05-credit_snapshot-host | Run settings |
| Issuer and reporting entity | COHERENT CORP., a Pennsylvania registrant listed on the NYSE as COHR. Debt, earnings, cash and liquidity are taken from its own consolidated statements; no parent or sister-company statements are used. | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 1, 85–86 |
| Consolidation perimeter | Consolidated group includes Silicon Carbide LLC, about 75% owned, with noncontrolling interests of USD 334,705 thousand at 2026-06-30. Restricted cash of USD 604 million at 2026-06-30 is held there for that subsidiary only. | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 79, 86, 116 |
| Fiscal calendar | Fiscal year ends 2026-06-30. The latest period is Q1 FY2027, the quarter ended 2026-09-30. File names carry period-end dates, not filing dates. | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 1; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 1 |
| As-of date and cutoff | 2026-11-05 for both. The latest source is dated 2026-11-04 and no source is dated after the cutoff. | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 45; EX-99.1_2026-11-04_d176836dex991.htm.jsonl, page 1 |
| Pathway and objective | credit_snapshot (Full credit assessment). No objective is stated, so the objective is the pathway use case: should we own this issuer, in which instrument, and why. This run executes Source readiness, Financial foundation, Business & governance and Fundamental credit; capital structure, relative value, portfolio fit, committee challenge and changes sections are not produced. | Run settings |
| Current and prior period | Current period Q1 FY2027 (quarter ended 2026-09-30); prior period FY2026 (year ended 2026-06-30). | Run settings |
| Currency and units | USD. Statements in the filings are in thousands and the liquidity tables and releases in millions; the releases state that amounts may not recalculate due to rounding. Filing amounts govern. | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 85; EX-99.1_2026-11-04_d176836dex991.htm.jsonl, page 6 |
| Source status | Received. Seven issuer files supplied, all for COHERENT CORP.; the run settings file is not issuer evidence. | Run settings |
| Inputs left blank in the run settings | Legal documents none; ratings, quotes, deal terms, peers, portfolio, earlier run, management bridge and research questions none; valuation and scenario assumptions blank. None is treated as zero. | Run settings |
| Supplied analysis | None. This module is the entry module. | Not applicable |
| Limitation | Source gate passes for the three modules this run executes; the limits are listed under Gaps. | Gaps |

### T2 Source register

| Source | Document | Period covered | Authority tier | Active representation | Extraction confidence | Usability | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-06-30_iivi-20260630.htm.jsonl | Annual report on Form 10-K for the fiscal year ended June 30, 2026 | FY2026 with FY2025 and FY2024 comparatives | Tier 1: audited annual filing | Page-chunked text of the filing; statements, debt note and liquidity read in full | HIGH on pages read; tables flatten to rows | Usable with limitations | Part III by reference to a proxy statement not supplied; credit agreement and indenture listed but not attached; original and amended facility terms both described. |
| 10-Q_2025-12-31_iivi-20251231.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended December 31, 2025 | Q2 FY2026 and six months to 2025-12-31 | Tier 1: unaudited interim filing | Page-chunked text of the filing | HIGH on pages read | Usable | Balance sheet compared with 2025-06-30 only; no 2025-09-30 balance sheet. |
| 10-Q_2026-03-31_iivi-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended March 31, 2026 | Q3 FY2026 and nine months to 2026-03-31 | Tier 1: unaudited interim filing | Page-chunked text of the filing | HIGH on pages read | Usable | Balance sheet compared with 2025-06-30 only. |
| 10-Q_2026-09-30_iivi-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarterly period ended September 30, 2026 | Q1 FY2027 with Q1 FY2026 comparatives | Tier 1: unaudited interim filing | Page-chunked text of the filing; statements, debt table and liquidity read in full | HIGH on pages read | Usable with limitations | Management discussion mislabels the fiscal quarter of one borrowing; August 2026 facility size differs from the annual report. |
| EX-99.1_2026-05-06_d57080dex991.htm.jsonl | Exhibit 99.1 press release: third quarter fiscal 2026 results | Q3 FY2026 and nine months | Tier 2: issuer release, unaudited | Page-chunked text of the release | HIGH on pages read | Usable with limitations | Non-GAAP measures are issuer-defined; amounts in USD millions and rounded; pro forma growth not defined. |
| EX-99.1_2026-08-12_d128030dex991.htm.jsonl | Exhibit 99.1 press release: fourth quarter and full year fiscal 2026 results | Q4 FY2026 and FY2026 | Tier 2: issuer release, unaudited | Page-chunked text of the release | HIGH on pages read | Usable with limitations | Issued two days before the annual report; non-GAAP measures issuer-defined; pro forma growth not defined. |
| EX-99.1_2026-11-04_d176836dex991.htm.jsonl | Exhibit 99.1 press release: first quarter fiscal 2027 results | Q1 FY2027 with Q4 FY2026 and Q1 FY2026 columns | Tier 2: issuer release, unaudited | Page-chunked text of the release | HIGH on pages read | Usable with limitations | Carries the only outlook (second quarter of fiscal 2027); non-GAAP measures issuer-defined; pro forma growth not defined. |

### T4 Content-to-module map

| Module | Disposition | Evidence demand | Source | Readiness | Limitation |
| --- | --- | --- | --- | --- | --- |
| CP-1 Financial foundation | Recommended: selected for this run | Annual statements for FY2026, FY2025 and FY2024; discrete quarters Q1 FY2026 to Q1 FY2027 with quarter and year-to-date distinctions; segment revenue and profit; every debt line with carrying value and principal (Term A Facility, Term B Facility, other credit facilities, local lines of credit, the Germany facility construction loan and the 5.00% Senior Notes, with the revolver undrawn) and the maturity wall by fiscal year to 2031; cash interest and tax; subsequent events | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 85–89, 101, 104, 127–130, 134; 10-Q_2025-12-31_iivi-20251231.htm.jsonl, pages 3–5; 10-Q_2026-03-31_iivi-20260331.htm.jsonl, pages 3–5; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 2–5, 10, 24–26; EX-99.1_2026-08-12_d128030dex991.htm.jsonl, pages 6–8 | READY_WITH_LIMITATIONS | Q1 FY2026 exists only as comparative columns; no balance sheet at 2025-09-30; no EBITDA or covenant earnings figure; filings in USD thousands and releases in USD millions, filings govern. |
| CP-1A Business & governance | Recommended: selected for this run | Business model, segments, products, customers, facilities and workforce; management; NVIDIA agreement and share placement; Silicon Carbide LLC partners; divestitures; ownership and governance | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 8–24, 28, 58–63, 103–104, 114, 116, 136–137; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 9–10, 42 | READY_WITH_LIMITATIONS | Directors, compensation, beneficial ownership and related-party matters sit in a proxy statement that was not supplied; the two customers above 10% of revenue are not named. |
| CP-2 Fundamental credit | Recommended: selected for this run | Leverage, coverage, liquidity, maturities and cash conversion from the financial foundation; claims outside debt (operating and finance leases, purchase commitments, supply chain financing, retirement plans, regulatory inquiry, noncontrolling interest, restricted cash), none of which sits inside the debt table; maintenance covenant levels; the August 2026 facility | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 51, 78–80, 95, 104–113, 116, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 10–14, 28, 41–42; EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 2–3 | READY_WITH_LIMITATIONS | No reported covenant ratio or EBITDA; letters of credit drawn on the revolver not stated; no guarantor-level financials; forward information is the next-quarter outlook only. |
| CP-1B Earnings changes | Not part of this run: sources would support it | Quarter-on-quarter and year-on-year changes in revenue, margins, operating income and non-GAAP measures | EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 1–3, 6–9; EX-99.1_2026-08-12_d128030dex991.htm.jsonl, pages 1–3, 6–8; EX-99.1_2026-05-06_d57080dex991.htm.jsonl, pages 1–3, 6–8 | READY_WITH_LIMITATIONS | No release for Q1 FY2026 or Q2 FY2026; adjustments are issuer-defined. |
| CP-1D Earnings quality | Not part of this run: sources would support it | Cash conversion, working capital swings, one-off items and the non-GAAP bridge | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 62–63, 88; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 4, 9–10; EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 8–9 | READY_WITH_LIMITATIONS | Reconciliations are issuer-defined; no EBITDA schedule. |
| CP-2D Liquidity | Not part of this run: sources would support it | Cash, restricted cash, short-term investments, revolver availability and near-term maturities at each period end | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 78–79, 104; 10-Q_2025-12-31_iivi-20251231.htm.jsonl, page 46; 10-Q_2026-03-31_iivi-20260331.htm.jsonl, page 48; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 41–42 | READY_WITH_LIMITATIONS | Letters of credit drawn on the revolver are not stated; restricted cash at Silicon Carbide LLC is usable by that subsidiary only. |
| CP-3C Refinancing & LME | Not part of this run: sources would support it | Maturity wall, springing maturity test, redemption terms, amendments and drawn foreign facilities | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 104–108, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 10–14 | READY_WITH_LIMITATIONS | Executed documents not supplied, so baskets, redemption prices and amendment mechanics rest on summaries. |
| CP-2E Rates, FX & hedging | Not part of this run: sources would support it | Floating-rate exposure, interest rate cap terms, currency exposure and the paused balance-sheet hedging | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 80, 131–132; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 27–29, 43 | READY_WITH_LIMITATIONS | Cap contract not supplied; currency exposures are named but not quantified. |
| CP-2A Downside; CP-2G Forward credit model | Not part of this run: sources would support it | Operating drivers, outlook, capital spending plans and scenario inputs | EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 2–3; 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 60–61, 79; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 41–42 | READY_WITH_LIMITATIONS | Only a next-quarter outlook and aims for later years are stated; no multi-year projection or capital spending plan; scenario assumptions in the run settings are blank. |
| CP-1C Peer benchmark | Blocked until peer statements are supplied | Peer financial statements and multiples | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 59 | CONDITIONAL | Peer names only; no peer statements in the sources and no peers in the run settings. |
| CP-2H Ratings & triggers | Blocked until rating material is supplied | Agency ratings, outlooks and rating-linked triggers | Not supplied: no source states a rating or a rating trigger | CONDITIONAL | No rating agency, rating or rating trigger found in any source or in the run settings. |
| CP-3D Market-implied risk; CP-3 Security selection | Blocked until dated quotes and instrument terms are supplied | Dated prices, yields and spreads; instrument terms and allocation | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 132; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 28 | CONDITIONAL | Only period-end fair values of the notes and term loans from quoted prices, which the issuer says trade in limited volume; no quote at the as-of date and no deal terms. |
| CP-4 Legal & covenants; CP-4A Covenant capacity | Blocked until executed documents are supplied | Executed credit agreement and indenture, definitions, baskets and tests, compliance figures | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 51, 105–108, 137–138 | CONDITIONAL | Documents are listed but not supplied; the run settings declare no legal documents; no covenant ratio is reported. |
| CP-4B Structural priority; CP-4C Recovery & fulcrum; CP-4D Intercreditor control | Blocked until documents and guarantor financials are supplied | Guarantor and collateral map, claims by entity, security and release terms | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 105, 107–108, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 11, 13–14 | CONDITIONAL | Guarantees and security are described in summary only; no entity-level financials or collateral schedule. |
| CP-5 Evidence validation; CP-6 Committee decision | Inapplicable to this run | Validation of other modules; portfolio limits and a committee posture | Not applicable: no source is needed | Not applicable | Neither is a module of this run; no portfolio was supplied. |
| CP-8 Changes since the last run | Inapplicable to this run | An earlier run of the same issuer and pathway | Not applicable: no source is needed | Not applicable | This is the first run of this pathway for the issuer. |
| CP-DR Research questions; CP-L10 Short credit snapshot | Inapplicable to this run | A stated research question; the lite pathway | Not applicable: no source is needed | Not applicable | The run settings state no research question and the pathway is not the lite one; missing documents are listed under Gaps. |

### T6 Evidence trace

| Evidence ID | Evidence | Period or date | Source |
| --- | --- | --- | --- |
| E01 | Registrant name, Pennsylvania incorporation, commission file number 001-39375, NYSE listing as COHR, fiscal year covered | Year ended 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 1 |
| E02 | Common shares outstanding at 2026-08-10: 195,832,246 | 2026-08-10 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 2 |
| E03 | Consolidated balance sheets at 2026-06-30 and 2025-06-30 in USD thousands, with current portion of long-term debt and long-term debt | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 85–86 |
| E04 | Consolidated statements of earnings for FY2026, FY2025 and FY2024 in USD thousands | FY2026 to FY2024 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 86 |
| E05 | Consolidated statements of cash flows for FY2026 to FY2024, cash paid for interest and income taxes, cash reconciliation | FY2026 to FY2024 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 88–89 |
| E06 | Ernst & Young LLP opinions on the financial statements and on internal control over financial reporting, dated 2026-08-14 | Year ended 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 82–85 |
| E07 | Debt components, total debt of USD 3,222,224 thousand and principal repayments by fiscal year to 2031 | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 104 |
| E08 | Senior credit facilities: 2022 terms, Amendments No. 4 and No. 5 of 2025-09-26, USD 700 million revolver, springing maturity, covenant compliance statement, USD 664 million availability | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 105–107 |
| E09 | 5.000% Senior Notes due 2029: USD 990 million issued, domestic subsidiary guarantees, maturity 2029-12-15, indenture covenants | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 107–108 |
| E10 | Maintenance covenants: maximum total net leverage of 4.25 to 1.00 and minimum interest coverage of 2.50 to 1.00 on the Term Loan A and revolver | As stated in the annual report | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 51 |
| E11 | Cash, restricted cash, short-term investments, revolver availability and total debt obligations in USD millions | 2026-06-30 and 2025-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 78 |
| E12 | Cash held outside the United States, restricted cash including Silicon Carbide LLC, purchase commitments of USD 11.8 billion, operating lease obligations of USD 375 million | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 79 |
| E13 | Purchase commitments of USD 3.4 billion in fiscal 2027 and USD 8.4 billion thereafter | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 113 |
| E14 | Lease cost, remaining terms and future minimum lease payments | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 109 |
| E15 | Supply chain financing arrangements: USD 27 million of payables accelerated by suppliers | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 95 |
| E16 | Employee retirement plans: 401(k) matching and defined benefit assumptions with expected benefit payments | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 110–111 |
| E17 | Interest rate cap, rate sensitivity and the suspended balance-sheet currency hedging programme | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 80 |
| E18 | Subsequent event: August 2026 facility of about USD 945 million, undrawn at 2026-08-14 | 2026-08-12 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 134 |
| E19 | Revenue by segment for FY2026 to FY2024 and the recast of comparatives to two reportable segments | FY2026 to FY2024 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 101, 127 |
| E20 | Segment profit and geographic revenue | FY2026 to FY2024 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 127–130 |
| E21 | Business description: two reporting segments, Datacenter & Communications and Industrial | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 14 |
| E22 | Two customers each contributed more than 10% of revenue in fiscal 2026; neither is named | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 17, 28 |
| E23 | NVIDIA agreement of 2026-03-02 and USD 2 billion private placement of 7,788,161 shares at USD 256.80 | 2026-03-02 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 60–61, 114 |
| E24 | Silicon Carbide LLC: Denso and Mitsubishi Electric hold about 12.5% each; the company holds about 75% | 2023-12-04 onward | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 116 |
| E25 | Sale of the aerospace and defense business on 2025-09-02, sale of the Munich product division on 2026-01-30 and assets held for sale | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 62–63, 103–104 |
| E26 | Export-control inquiry from the Bureau of Industry and Security on past product sales to Huawei; no determination received | As stated in the annual report | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 113 |
| E27 | Executive officers of the registrant | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 21–22 |
| E28 | Directors, compensation, ownership and related matters incorporated by reference to the 2026 proxy statement | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 136–137 |
| E29 | Exhibit index: Credit Agreement of 2022-07-01, Amendments No. 1 to No. 5, the indenture and four supplemental indentures, filed by reference | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 137–138 |
| E30 | Peer group named for the performance graph; no peer financial statements | FY2026 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 59 |
| E31 | Fair value and carrying value of the senior notes, Term A and Term B at each period end | 2026-06-30 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 132 |
| E32 | Condensed balance sheet at 2026-09-30 and earnings for the three months ended 2026-09-30 and 2025-09-30 | Q1 FY2027 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 2–3 |
| E33 | Cash flows for the three months ended 2026-09-30 and 2025-09-30, cash paid for interest and tax, cash components at 2025-09-30 | Q1 FY2027 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 4–5 |
| E34 | Debt components at 2026-09-30, total debt of USD 4,000,598 thousand including other credit facilities of USD 802,793 thousand | 2026-09-30 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 10 |
| E35 | Revolver availability, covenant compliance, 2026 credit lines and the August 2026 facility drawn | 2026-09-30 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 12–14 |
| E36 | Liquidity table, cash held outside the United States and restricted cash at Silicon Carbide LLC | 2026-09-30 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 41–42 |
| E37 | Fair value and carrying value of the senior notes, Term A and Term B | 2026-09-30 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 28 |
| E38 | Statements for the three and six months ended 2025-12-31, debt table and liquidity table | Q2 FY2026 | 10-Q_2025-12-31_iivi-20251231.htm.jsonl, pages 3–5, 10, 46 |
| E39 | Statements for the three and nine months ended 2026-03-31, debt table and liquidity table | Q3 FY2026 | 10-Q_2026-03-31_iivi-20260331.htm.jsonl, pages 3–5, 12, 48 |
| E40 | Third-quarter fiscal 2026 results, non-GAAP reconciliations and segment revenues | Q3 FY2026 | EX-99.1_2026-05-06_d57080dex991.htm.jsonl, pages 1–3, 6–8 |
| E41 | Fourth-quarter and full-year fiscal 2026 results, non-GAAP reconciliations, statements and segment revenues | Q4 FY2026 and FY2026 | EX-99.1_2026-08-12_d128030dex991.htm.jsonl, pages 1–3, 6–8 |
| E42 | First-quarter fiscal 2027 results, non-GAAP reconciliations, statements, segment revenues and the second-quarter outlook | Q1 FY2027 | EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 1–3, 6–9 |
| E43 | Headline growth stated on a pro forma basis; no definition or table follows | Q1 FY2027 | EX-99.1_2026-11-04_d176836dex991.htm.jsonl, page 1 |
| E44 | Management discussion attributes the USD 773 million of other-facility borrowing to the first quarter of fiscal 2026 | Q1 FY2027 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 40 |
| E45 | August 2026 facility of about USD 950 million with a USD 475 million local-currency tranche, first used on 2026-08-17 | 2026-09-30 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 14, 41 |

### P3 Input inventory

| Source key | File | Document type | Reporting entity | Period | Version link | Authority tier | sha256 | Hash stated in extraction header |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2026-06-30_iivi-20260630.htm.jsonl | 10-K_2026-06-30_iivi-20260630.htm.jsonl | Annual report | COHERENT CORP. and subsidiaries, consolidated | FY2026 (year ended 2026-06-30) | Controls annual figures; 2026-06-30 balances repeat in the Q1 FY2027 quarterly report | Tier 1 | e427b31d3ddbac8e2682229c0851cd57a35f7942a911c46bc2f7e184a8d2417f | 6af2c3e352445d6f9e83c6607dbf0953e0f985117ac316e895c933a7a82ea7d4 (names 10-K_2026-06-30_iivi-20260630.htm) |
| 10-Q_2025-12-31_iivi-20251231.htm.jsonl | 10-Q_2025-12-31_iivi-20251231.htm.jsonl | Quarterly report | COHERENT CORP. and subsidiaries, consolidated | Q2 FY2026 (quarter ended 2025-12-31) | Interim filing between the FY2025 annual report and the Q3 FY2026 report | Tier 1 | f7c4c25b26330da07c84899cb176e2f656eac9af26c4128e5f71e23f3921c2c5 | 3823ed1a87d695439d8f7a8d658380f3a6d58a83db6f8d9cb9bbfed64bc1c243 (names 10-Q_2025-12-31_iivi-20251231.htm) |
| 10-Q_2026-03-31_iivi-20260331.htm.jsonl | 10-Q_2026-03-31_iivi-20260331.htm.jsonl | Quarterly report | COHERENT CORP. and subsidiaries, consolidated | Q3 FY2026 (quarter ended 2026-03-31) | Interim filing; same-day release is the third-quarter press release | Tier 1 | f448bb1aae6e87add6b50bc7c2c3335a7137b8a9e4f7f09915b24d3212838bb2 | 0bcfe03d2a9377ff3d773259f21adf32d744f0bad26fa09fce4f4892f9810d2e (names 10-Q_2026-03-31_iivi-20260331.htm) |
| 10-Q_2026-09-30_iivi-20260930.htm.jsonl | 10-Q_2026-09-30_iivi-20260930.htm.jsonl | Quarterly report | COHERENT CORP. and subsidiaries, consolidated | Q1 FY2027 (quarter ended 2026-09-30) | Latest filing; controls 2026-09-30 balances; same-day release is the first-quarter press release | Tier 1 | 2522ad33326b2e35e6501525fb87f419508656f6b0de5277f8f2cf521928150e | 239614533192fd7273f06de81b4551f192305d9ebe92ba4095fa45403ff46fd0 (names 10-Q_2026-09-30_iivi-20260930.htm) |
| EX-99.1_2026-05-06_d57080dex991.htm.jsonl | EX-99.1_2026-05-06_d57080dex991.htm.jsonl | Press release | COHERENT CORP. and subsidiaries, consolidated | Q3 FY2026 (quarter ended 2026-03-31) | Issued the same day as the Q3 FY2026 quarterly report | Tier 2 | dd0ab92d28fa855aab2f4b2d6a0ad55f65e0e80e6b5fe9f8c4fcf3b5db2b5776 | ee6a4726f5032991409f6848ad2145687c76ab5bc34c5ecfa45907fc8546e98a (names EX-99.1_2026-05-06_d57080dex991.htm) |
| EX-99.1_2026-08-12_d128030dex991.htm.jsonl | EX-99.1_2026-08-12_d128030dex991.htm.jsonl | Press release | COHERENT CORP. and subsidiaries, consolidated | Q4 FY2026 and FY2026 | Issued before the annual report, which governs where they differ | Tier 2 | 2026b9917624616c285039908d8b9c9ea20eabeae7f1857e479c3c647a5b1bab | 8a9f26db98240743fa56cce8c5da3288e4c6afaab9845646cf1ab6998ba7d319 (names EX-99.1_2026-08-12_d128030dex991.htm) |
| EX-99.1_2026-11-04_d176836dex991.htm.jsonl | EX-99.1_2026-11-04_d176836dex991.htm.jsonl | Press release | COHERENT CORP. and subsidiaries, consolidated | Q1 FY2027 (quarter ended 2026-09-30) | Issued the same day as the Q1 FY2027 quarterly report | Tier 2 | c65396b97d274ca2df0db447a0ca9d97bbff5b1393199d2c9b3e69ebf1b4d0a2 | 79a6524c7bbccc89ee694c0d35a6a30f708e21819649ac4c75cbdb19084a3ce7 (names EX-99.1_2026-11-04_d176836dex991.htm) |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event | Not supplied: source readiness states no issuer event |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 24 |
| Calculated | 4 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 4 |
| Fields present | 8 |
| Fields total | 8 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 4 |

## Calculations

Each check below tests the supplied text or sizes a gap; none is a credit measure.

| Calculation ID | Check | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| X1 | Total assets at 2026-06-30 equals the sum of its seven asset lines (USD thousand) | 6,925,499 + 2,999,343 + 4,375,597 + 2,884,474 + 69,434 + 571,222 + 474,283 | 18,299,852, equal to the printed total of 18,299,852; difference 0 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 85 |
| X2 | Total debt at 2026-06-30 equals the sum of the debt table lines, issuance costs deducted (USD thousand) | 1,140,625 − 10,087 + 1,080,000 − 21,228 + 28,004 + 4,791 + 14,062 + 990,000 − 3,943 | 3,222,224, equal to the printed total debt of 3,222,224; difference 0 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 104 |
| X3 | Gross principal at 2026-06-30 equals the five-year repayment schedule total (USD thousand) | 1,140,625 + 1,080,000 + 28,004 + 4,791 + 14,062 + 990,000 against 7,916 + 34,375 + 93,629 + 2,135,625 + 985,937 | 3,257,482 on both sides, equal to the printed schedule total of 3,257,482; difference 0 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 104 |
| X4 | Total debt at 2026-09-30 equals the sum of the debt table lines, issuance costs deducted (USD thousand) | 1,140,625 − 9,513 + 1,080,000 − 19,609 + 802,793 + 6,745 + 13,235 + 990,000 − 3,678 | 4,000,598, equal to the printed total debt of 4,000,598; difference 0 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 10 |
| X5 | Total assets at 2026-09-30 equals the sum of its seven asset lines (USD thousand) | 7,924,266 + 3,869,814 + 4,448,341 + 2,815,867 + 90,429 + 538,838 + 560,091 | 20,247,646, equal to the printed total of 20,247,646; difference 0 | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 2–3 |
| X6 | Revolver commitment less stated availability (USD million) | 700 − 664 at 2026-06-30; 700 − 669 at 2026-09-30 | 36 at 2026-06-30 and 31 at 2026-09-30; neither difference is itemised in the sources | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 106, 107; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 12, 13 |
| X7 | Purchase commitments by period equal the total stated in the liquidity section (USD billion) | 3.4 in fiscal 2027 + 8.4 thereafter | 11.8, equal to the printed total of 11.8; difference 0 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 79, 113 |
| X8 | August 2026 facility tranches against the stated total, in each report (USD million) | Annual report: 470 + 475; latest quarterly report: 475 + 475 | 945 in the annual report and 950 in the latest quarterly report; difference 5 | 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 78, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 14, 41 |
| X9 | Other credit facilities at 2026-09-30: 2026 credit lines plus August 2026 facility against the debt table (USD million) | 205 + 598 against 802.793 | 803 against 802.793; difference 0.207, a rounding difference | 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 10, 14 |

## Gaps

Gaps are ranked Medium or Low by their effect on the three modules this run executes; none is High.

- Medium: The executed credit agreement, its five amendments, the indenture for the 2029 senior notes and four supplemental indentures were not supplied. The annual report lists them as exhibits filed elsewhere, and the run settings declare no legal documents. Maturities, pricing and the two maintenance covenants come from the debt notes and risk factors, which give no covenant definitions, baskets, release terms or redemption prices, and no source states a reported covenant ratio or the covenant earnings measure. Covenant headroom, security and priority conclusions need the executed documents or a compliance certificate.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 51, 105–108, 137–138
- Medium: No source states EBITDA or adjusted EBITDA. The releases reconcile non-GAAP operating income and earnings, and the cash flow statements give depreciation and amortization, so leverage and coverage have to be built from statement lines and cannot be tied to the issuer's or the lenders' definition.
Basis: EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 8–9; 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 88
- Medium: Governance, ownership and customer detail is incomplete. Directors, compensation, beneficial ownership, related-party matters and director independence are incorporated by reference to a 2026 proxy statement that was not supplied, and the two customers that each contributed more than 10% of revenue are not named. The ownership picture rests on the notes, which name only the NVIDIA share purchase and the Silicon Carbide LLC partners.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 17, 28, 114, 116, 136–137
- Medium: Guarantor-level financial information was not found. The senior debt is guaranteed by certain subsidiaries, while the foreign unsecured facilities drawn since June 2026 are not guaranteed by the company or its other subsidiaries. No summarised guarantor and non-guarantor financials were supplied, so the split of earnings, cash and debt across those groups is not established.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 105, 107–108, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 11, 13–14
- Low: The first fiscal quarter of 2026 has no standalone quarterly report or release, the second fiscal quarter of 2026 has no release, and no balance sheet at 2025-09-30 or 2024-06-30 was supplied. Income and cash flow for the quarter ended 2025-09-30 appear as comparatives in the latest quarterly report, and its equity statement and cash reconciliation give some balances at that date, so four discrete quarters of fiscal 2026 can be rebuilt but not a full September 2025 balance sheet.
Basis: 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 3–5; 10-K_2026-06-30_iivi-20260630.htm.jsonl, page 85
- Low: The amount of letters of credit drawn on the revolving credit facility is not stated; the sources, searched for letters of credit, standby facilities and bank guarantees, give only the sub-limit. Availability is stated and the gap between the revolver commitment and that availability is not itemised, so liquidity net of letters of credit rests on the stated availability.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 78, 106–107; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 12–13, 41; calculation X6
- Low: No credit rating, rating trigger, current price or yield, transaction terms, peer financial statements or portfolio data were supplied. The filings give period-end fair values for the notes and term loans from quoted prices at the last trading day before each period end, and the annual report names a peer group without peer financials. Ratings & triggers, Market-implied risk, Security selection and Peer benchmark would need those inputs.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 59, 132; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, page 28
- Low: Forward information is limited to the outlook for the second quarter of fiscal 2027 and aims for later years; no multi-year projection or capital spending plan was found. Forward credit model and Downside work would rest on assumptions the user has not entered.
Basis: EX-99.1_2026-11-04_d176836dex991.htm.jsonl, pages 2–3
- Low: Headline growth in the releases is stated on a pro forma basis, which no source defines or tabulates, so pro forma growth cannot be tied to reported revenue.
Basis: EX-99.1_2026-11-04_d176836dex991.htm.jsonl, page 1; EX-99.1_2026-08-12_d128030dex991.htm.jsonl, page 1; EX-99.1_2026-05-06_d57080dex991.htm.jsonl, page 1
- Low: The August 2026 facility is sized at about USD 945 million in the annual report, which ties the amount to exchange rates at signing, and at about USD 950 million in the latest quarterly report. Both are kept, each at its own report date; the later report states first use on 2026-08-17 and USD 598 million drawn at 2026-09-30, and no source says why the stated sizes differ.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 78, 134; 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 14, 41; calculation X8
- Low: The latest quarterly report's management discussion attributes the USD 773 million of other-facility borrowing to the first quarter of fiscal 2026, while its cash flow statement shows the borrowing in the three months ended 2026-09-30 and none in the year-earlier column. The statement and the period headings govern, so the borrowing belongs to the first quarter of fiscal 2027.
Basis: 10-Q_2026-09-30_iivi-20260930.htm.jsonl, pages 4, 40
- Low: The annual report's debt note describes the original 2022 terms, with a USD 350 million revolver and a term loan A maturing in 2027, beside the September 2025 amendments, which replaced them with a USD 700 million revolver and a term loan A maturing in 2030 unless the springing maturity applies. The amended terms and the 2026-06-30 debt table control.
Basis: 10-K_2026-06-30_iivi-20260630.htm.jsonl, pages 104–106

## Next module

The orchestrator selects the next module.
