---
module_id: CP-0
issuer_id: podd-1145197
issuer_name: Insulet Corp
analysis_date: 2026-11-18
pathway: credit_snapshot
---

# Source readiness: Insulet Corp (podd-1145197), as of 2026-11-18

## Request

Source readiness for Insulet Corp (issuer podd-1145197) as of 2026-11-18 on the credit snapshot pathway (credit_snapshot). The scope is whether the five supplied filings support the financial foundation, business and governance, and fundamental credit modules requested for this run, and what each other credit module would still need.

## Sources

No earlier module output was supplied: this module is the first in the run.

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_podd-20241231.htm.jsonl | Annual report on Form 10-K of Insulet Corporation for the year ended 2024-12-31 | 2025-02-20 | 3ca21f0666b600732db05bddf666ad42bc06b5874422b7fd248a4fcdf642da5b | Prior annual statements for fiscal years 2022 to 2024, the 2024 debt note and the letters of credit at 2024-12-31; cross-check of prior-year comparatives against the later annual report |
| 10-K_2025-12-31_podd-20251231.htm.jsonl | Annual report on Form 10-K of Insulet Corporation for the year ended 2025-12-31 | 2026-02-18 | defd65468dd3fb9d515378a3d4acc7b0fdbed9f6dacd99e95f5e6f3e371c07e6 | Latest audited annual statements for fiscal years 2023 to 2025, debt, lease and derivative notes, exhibit index, Part III incorporation by reference |
| 10-Q_2026-03-31_podd-20260331.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-03-31 | 2026-05-06 | 759f5516864d1425d45378bbf20a62d6996a0c267acea0694a674988d355480c | First 2026 interim statements, Adjusted EBITDA for the quarter, exhibit list |
| 10-Q_2026-06-30_podd-20260630.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-06-30 | 2026-08-05 | 8d1ffeb777a43a02857e676da62d545a546c1d220bc08a2d7cd8e7e1ca5717c0 | Second-quarter and six-month statements, Adjusted EBITDA for the quarter, revolver size before the September amendment |
| 10-Q_2026-09-30_podd-20260930.htm.jsonl | Quarterly report on Form 10-Q of Insulet Corporation for the quarter ended 2026-09-30 | 2026-11-04 | 49b21d6b40c12cfad0f5ab4652758a0060a1146d0e099962e233e2e4677340c8 | Latest balance sheet, debt, facilities, covenants, litigation, product corrections, capital returns and exhibit list |

## Findings

### Bottom line

The five supplied filings are enough for a short credit snapshot of Insulet Corp, but not for any view that depends on executed debt documents, ratings, market prices or peer figures, none of which were supplied.

The latest report covers the quarter to 2026-09-30 and was signed 14 days before the as-of date, so the balance sheet, the revolving facility and the term loan as last amended are current. Creditors cannot verify covenant levels, guarantors or collateral from the filings, because no executed credit agreement or indenture was supplied, so any statement on springing leverage tests or priority of claims rests on the issuer's own summaries. Letters of credit outstanding are not stated after 2024, and the cost of the product corrections is stated in more than one way, so liquidity headroom and one-off costs carry stated limits.
Basis: 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 37; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10–11; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 102; calculation C1

### T1 - Input gate

| Gate item | Requirement for the objective | What the run supplied | Result | Source |
|---|---|---|---|---|
| Objective | The run settings state none, so the objective is the pathway's use case: a short credit snapshot of the issuer | Pathway credit_snapshot with Source readiness, Financial foundation, Business & governance and Fundamental credit requested | Set from the pathway | Run settings |
| Issuer and perimeter | One named reporting entity | The registrant is Insulet Corporation, reporting consolidated statements; the run settings name no separate borrower, parent, sponsor or guarantor | Pass | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1 |
| As-of date and cutoff | Evidence dated on or before the cutoff | As-of date and cutoff are both 2026-11-18; the latest source was signed 2026-11-04 | Pass | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 37 |
| Current and prior period | Current period Q3 2026 and prior period FY2025 | Quarterly report to 2026-09-30 and annual report to 2025-12-31 | Pass | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| Annual statements | Latest audited annual statements | Annual report to 2025-12-31 with an audit report dated 2026-02-18, and the report to 2024-12-31 | Pass | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 73 |
| Interim statements | Each 2026 quarter | Quarterly reports to 2026-03-31, 2026-06-30 and 2026-09-30; the cash flow statements are year to date | Pass with limitation | 10-Q_2026-03-31_podd-20260331.htm.jsonl, page 4; 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 5; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 |
| Executed legal documents | Executed credit agreement, amendments and indentures for covenant, priority and recovery work | None supplied; the run settings declare none, and the exhibit indexes name the documents without carrying them | Not supplied | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 108, 111–112; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 36 |
| Credit ratings | Issuer and instrument ratings for rating-trigger work | None supplied; no rating of the issuer or its debt appears in any of the five filings | Not supplied | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 99 |
| Market prices and valuation inputs | Quotes, market capitalisation, enterprise value, peers | None supplied; the run settings leave these blank and name no peer source | Not supplied | Not supplied: the run settings carry none |
| Portfolio limits | Fund limits for the committee decision | None supplied | Not supplied | Not supplied: the run settings carry no portfolio |
| Earlier run of this pathway | A listed earlier run for comparison | None; this is the first run of the pathway | Not applicable | Not supplied: no earlier run exists |
| Lender presentation, earnings releases, management bridge | Optional management context | None among the five files | Not supplied | Not supplied: only filings were supplied |
| Proxy statement | Directors, officers, compensation and ownership (Part III) | Not supplied; Part III is incorporated by reference to a proxy statement | Not supplied | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 2, 107 |
| Gate result for the requested modules | Primary filings sufficient for the credit snapshot | The annual and quarterly filings carry the statements and business content the requested modules need; the limits are recorded in the module map and the gaps | Pass | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69–71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2–5 |

### T2 - Source register

| Source | Logical source | Form and period | Registrant and perimeter | Source tier | Active representation | Authority and limitation |
|---|---|---|---|---|---|---|
| 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 1–122 | Prior annual report | 10-K, fiscal year ended 2024-12-31, signed 2025-02-20 | Insulet Corporation, consolidated | Tier 1, primary filing | Supplied page-text file | Controls fiscal year 2022 figures and the 2024 notes; prior-year columns differ from the later annual report by amounts of USD 0.1 million in several lines |
| 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 1–117 | Latest annual report | 10-K, fiscal year ended 2025-12-31, signed 2026-02-18 | Insulet Corporation, consolidated | Tier 1, primary filing | Supplied page-text file | Controls fiscal years 2023 to 2025; Part III is not in the file |
| 10-Q_2026-03-31_podd-20260331.htm.jsonl, pages 1–30 | First-quarter report | 10-Q, quarter ended 2026-03-31, signed 2026-05-06 | Insulet Corporation, consolidated | Tier 1, primary filing | Supplied page-text file | Unaudited; three-month cash flow statement |
| 10-Q_2026-06-30_podd-20260630.htm.jsonl, pages 1–33 | Second-quarter report | 10-Q, quarter ended 2026-06-30, signed 2026-08-05 | Insulet Corporation, consolidated | Tier 1, primary filing | Supplied page-text file | Unaudited; six-month cash flow statement |
| 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 1–37 | Third-quarter report | 10-Q, quarter ended 2026-09-30, signed 2026-11-04 | Insulet Corporation, consolidated | Tier 1, primary filing | Supplied page-text file | Unaudited; nine-month cash flow statement; no debt maturity schedule; controls every figure dated 2026-09-30 |

### T4 - Content-to-module map

| Module | What the module needs | Disposition | Readiness | Content the sources carry | What the sources do not carry | Source |
|---|---|---|---|---|---|---|
| Financial foundation (CP-1) | Statements, debt, liquidity, cash flow and period labels for the consolidated perimeter | Supported with limitations | READY_WITH_LIMITATIONS | Three years of income statement and cash flow and two balance sheets to 2025-12-31; debt, lease and fair value notes; 2026 quarterly statements; Adjusted EBITDA reconciliations | Discrete-quarter cash flows must be derived from year-to-date statements; no debt maturity schedule at 2026-09-30; letters of credit not stated after 2024-12-31; 2025-12-31 balance sheet lines re-presented in the third-quarter report | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69–71; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 90–93; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2–5; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |
| Business & governance (CP-1A) | Business model, products, customers, geography, related parties, management and board | Supported with limitations | READY_WITH_LIMITATIONS | Business description and risk factors in the annual report to 2025-12-31; one reportable segment; customer concentration; related-party disclosure; signatories and directors | Part III (directors, officers, compensation, ownership) is incorporated by reference to a proxy statement not supplied; no executive officer biographies | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 4–44; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 116–117; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 6, 8, 16 |
| Fundamental credit (CP-2) | Credit assessment: leverage, coverage, cash generation, drivers, litigation | Supported with limitations | READY_WITH_LIMITATIONS | Adjusted EBITDA reconciliations, debt and cash, free cash flow reconciliation, litigation and product-correction disclosures, capital-return plans | No ratings, market prices or peer figures; no executed debt documents; no revenue or earnings guidance found in the third-quarter report | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 14–16; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 27–33; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 56 |
| Earnings changes (CP-1B) | Quarter-on-quarter and year-on-year changes with management's explanations | Supported with limitations | READY_WITH_LIMITATIONS | Three 2026 quarterly reports with 2025 comparatives and management discussion | No earnings releases or presentations | 10-Q_2026-03-31_podd-20260331.htm.jsonl, pages 16–21; 10-Q_2026-06-30_podd-20260630.htm.jsonl, pages 17–24; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 19–28 |
| Earnings quality (CP-1D) | Add-backs, non-cash items, working capital, accruals | Supported with limitations | READY_WITH_LIMITATIONS | Adjusted EBITDA reconciliation with footnotes; working-capital drivers; rebate and warranty accruals | Product-correction cost stated in more than one way (gap G3) | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 9–10; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 27–28; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 30 |
| Peer benchmark (CP-1C) | Peer set and peer figures | Blocked until a source is supplied | CONDITIONAL | None: the run settings name no peers and no peer source | Peer filings or a peer pack | Not supplied: the run settings carry no peers |
| Liquidity (CP-2D) | Unrestricted cash plus undrawn facilities net of letters of credit; near-term obligations | Supported with limitations | READY_WITH_LIMITATIONS | Cash of USD 584.4 million at 2026-09-30; revolver of USD 750 million with nothing outstanding; current debt of USD 19.1 million; purchase commitment of USD 45.1 million; capital expenditure and repurchase intentions | Letters of credit after 2024-12-31; whether the repurchase allocation includes the completed accelerated repurchase; maturities at 2026-09-30 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 32–33 |
| Refinancing & LME (CP-3C) | Debt stack, maturity wall, refinancing and liability-management options | Supported with limitations | READY_WITH_LIMITATIONS | Debt components at 2026-09-30; term loan refinancing terms; unsecured notes terms; maturity table at 2025-12-31 | Maturities at 2026-09-30; call schedules and baskets (no indenture or credit agreement); market prices | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10–11; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 93 |
| Downside (CP-2A) | Scenario inputs and base figures | Supported with limitations | READY_WITH_LIMITATIONS | Base figures from the statements; the run settings carry no downside assumptions, so the method's safe defaults apply | Scenario assumptions; covenant levels against which to test headroom | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| Forward credit model (CP-2G) | Forward drivers and inputs | Supported with limitations | READY_WITH_LIMITATIONS | Statements and the quarterly sequence; the report's statements on 2026 net interest expense, capital expenditure, product-correction cost and repurchases | No revenue or earnings guidance found in the third-quarter report; no assumptions in the run settings | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 20, 26, 30, 33 |
| Rates, FX & hedging (CP-2E) | Floating-rate exposure, swaps, currency mix | Supported with limitations | READY_WITH_LIMITATIONS | Swaps fixing USD 460.0 million of the term loan at a weighted average 3.47%; about 28% of FY2025 revenue in foreign currencies | Swap expiry date | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 13; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 65 |
| Ratings & triggers (CP-2H) | Issuer and instrument ratings and rating-linked terms | Blocked until a source is supplied | CONDITIONAL | None: no rating of the issuer or its debt appears in any supplied file; the 2024 report mentions a margin that depended on credit rating | Agency ratings and outlooks | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 99 |
| Legal & covenants (CP-4) | Executed governing documents | Blocked until a source is supplied | CONDITIONAL | The filings summarise the credit agreement and the notes and list the documents as exhibits | Executed credit agreement and amendments to the Ninth Amendment, and the 2025 indenture | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 92, 108, 111–112; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 32, 36 |
| Covenant capacity (CP-4A) | Covenant definitions, levels and test dates | Blocked until a source is supplied | CONDITIONAL | Revolver leverage covenant described as springing at 35% of commitments; notes' leverage and fixed charge tests described as incurrence tests | Ratio levels and definitions | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 92 |
| Structural priority (CP-4B) | Guarantor, collateral and ranking terms | Blocked until a source is supplied | CONDITIONAL | Credit agreement borrowings are guaranteed by certain wholly owned domestic subsidiaries, secured by substantially all assets and senior to unsecured debt | Names of guarantors (the subsidiaries exhibit is listed, not supplied); whether the notes are guaranteed | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 92, 115 |
| Intercreditor control (CP-4D) | Intercreditor and lien-sharing documents | Inapplicable on the evidence supplied | Inapplicable | No intercreditor or lien-sharing document is named in any exhibit index; the filings show a secured credit agreement, secured equipment financings and unsecured notes | None identified | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 108–116 |
| Recovery & fulcrum (CP-4C) | Executed documents, claims ranking and valuation inputs | Blocked until a source is supplied | CONDITIONAL | Balance sheet claims and the debt table | Executed documents and any valuation input | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 10 |
| Security selection (CP-3) | Instrument terms and prices | Blocked until a source is supplied | CONDITIONAL | Summary terms of the term loan and the unsecured notes | Prices, yields and executed terms | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10–12 |
| Market-implied risk (CP-3D) | Market prices and spreads | Blocked until a source is supplied | CONDITIONAL | Issuer-reported fair values of the term loan and the notes at 2026-09-30 | Market quotes, spreads and equity market data | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 12 |
| Committee decision (CP-6) | Earlier modules' conclusions and fund limits | Supported with limitations | READY_WITH_LIMITATIONS | Reads the earlier modules' outputs; no added issuer source | Fund limits: the run settings carry no portfolio | Not supplied: the run settings carry no portfolio |
| Evidence validation (CP-5) | Earlier modules' outputs and the sources they cite | Supported | READY | The five filings | No added source beyond the gaps recorded | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1 |
| Short credit snapshot (CP-L10) | Key figures drawn from Financial foundation | Supported with limitations | READY_WITH_LIMITATIONS | As for Financial foundation | As for Financial foundation | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 69–71; 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2–5 |
| Changes since the last run (CP-8) | An earlier run of the same issuer and pathway | Inapplicable | Inapplicable | None: this is the first run of the pathway | An earlier run | Not supplied: no earlier run exists |
| Research questions (CP-DR) | A named research question | Inapplicable | Inapplicable | None: the run settings set no research question; the missing documents are recorded in the gaps | None identified | Not supplied: the run settings set no research question |

### T6 - Evidence trace

| Trace ID | Statement in this answer | Source | Evidence quoted from the source |
|---|---|---|---|
| E1 | The registrant is Insulet Corporation | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1 | "INSULET CORPORATION (Exact name of Registrant as specified in its charter)" |
| E2 | The latest period is the quarter ended 2026-09-30 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1 | "For the quarterly period ended September 30, 2026" |
| E3 | The latest report was signed 2026-11-04 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 37 | "Date: November 4, 2026 /s/ Ashley A. McEvoy" |
| E4 | Cash and cash equivalents were USD 584.4 million at 2026-09-30 and USD 716.1 million at 2025-12-31 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 | "Cash and cash equivalents $ 584.4 $ 716.1" |
| E5 | Total debt, net was USD 962.2 million at 2026-09-30 and USD 949.2 million at 2025-12-31 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 | "Total debt, net 962.2 949.2" |
| E6 | The revolver is USD 750 million and expires in 2030 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 | "We have a $750 million senior secured revolving credit facility (the “Revolving Credit Facility”), which expires in 2030." |
| E7 | Nothing was outstanding under the revolver at 2026-09-30 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 | "At September 30, 2026, no amount was outstanding under the Revolving Credit Facility." |
| E8 | The revolver covenant is described without a ratio level | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 | "The Revolving Credit Facility contains a covenant to maintain a specified leverage ratio when outstanding borrowings equal or exceed 35% of the aggregate commitments under the Revolving Credit Facility." |
| E9 | The credit agreement was amended and the term loan refinanced in September 2026 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 11 | "In September 2026, the Company amended its senior secured credit agreement, refinancing the $475 million outstanding principal balance of its Term Loan B" |
| E10 | Credit agreement borrowings are guaranteed and secured | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 92 | "Borrowings under the Credit Agreement are guaranteed by certain wholly owned domestic subsidiaries of the Company and are secured by substantially all assets of the Company and of each subsidiary guarantor, subject to certain exceptions." |
| E11 | The credit agreement is listed as an exhibit, not supplied | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 111 | "Credit Agreement, dated as of May 4, 2021, by and among Insulet Corporation, the lenders and other parties party thereto and Morgan Stanley Senior Funding, Inc., as administrative agent and collateral agent" |
| E12 | An indenture is listed as an exhibit, not supplied | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 108 | "Indenture, dated as of March 20, 2025, between Insulet Corporation and Computershare Trust Company, National Association, as Trustee" |
| E13 | The latest amendment is listed as an exhibit, not supplied | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 36 | "Ninth Amendment to Credit Agreement, dated September 21, 2026" |
| E14 | The unsecured notes were issued in March 2025 at 6.5% and are due April 2033 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 11 | "In March 2025, the Company issued an aggregate principal amount of $450 million of 6.5% senior unsecured notes due in April 2033." |
| E15 | Letters of credit are last stated at 2024-12-31 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 102 | "The Company had $0.8 million and $20.9 million of letters of credit outstanding as of December 31, 2024 and December 31, 2023, respectively." |
| E16 | Part III is incorporated by reference to a proxy statement | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 2 | "Portions of such proxy statement are incorporated by reference into Part III of this Annual Report on Form 10-K." |
| E17 | The only reference to a rating is a margin that depended on it, with no rating level | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 99 | "based on the Company’s net leverage ratio and credit rating." |
| E18 | A debt maturity schedule is printed at 2025-12-31 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 93 | "The maturity of debt as of December 31, 2025 is as follows:" |
| E19 | The 2026 cash flow statements are year to date | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 5 | "CONDENSED CONSOLIDATED STATEMENTS OF CASH FLOWS (UNAUDITED) Nine Months Ended" |
| E20 | Product-correction cost, MD&A net charge | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 20 | "We recorded a net charge of $38.5 million associated with the MDCs during the nine months ended September 30, 2026." |
| E21 | Product-correction cost, accrued liability in the notes | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 | "The Company accrued an estimated liability of $37.0 million associated with the MDCs during the nine months ended September 30, 2026." |
| E22 | Product-correction cost, Adjusted EBITDA add-back | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | "Voluntary MDCs and related costs(3) (4.5) — 32.2 —" |
| E23 | Product-correction cost, management's total estimate | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 20 | "We estimate total costs associated with the MDCs will be approximately $50 million, most of which we expect to incur in 2026." |
| E24 | The repurchase allocation for 2026 is stated as approximately USD 400 million | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 33 | "We expect to allocate approximately $400 million toward repurchases in 2026, funded with existing cash." |
| E25 | An accelerated repurchase of USD 300 million was completed by 2026-03-31 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 17 | "to repurchase $300 million of the Company’s common stock, which were completed by March 31, 2026" |
| E26 | The issuer reports one segment | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 16 | "The Company operates under one reportable segment." |
| E27 | Swaps fix USD 460.0 million of the term loan at a weighted average 3.47% | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 13 | "pays fixed interest at a weighted average rate of 3.47% on a total notional value of $460.0 million of its Term Loan B" |
| E28 | About 28% of FY2025 revenue was in foreign currencies | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 65 | "Approximately 28% of our revenue was denominated in foreign currencies for the year ended December 31, 2025." |
| E29 | Third-quarter report splits prepaid expenses and other current assets at 2025-12-31 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2 | "Prepaid expenses 56.4 82.3" |
| E30 | Annual report shows them combined at 2025-12-31 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 | "Prepaid expenses and other current assets 228.3 142.0" |
| E31 | The 2024 operating cash flow is USD 430.3 million in the 2024 annual report | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 75 | "Net cash provided by operating activities 430.3 145.7 119.0" |
| E32 | The 2024 operating cash flow is USD 430.2 million in the 2025 annual report | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 | "Net cash provided by operating activities 569.3 430.2 145.7" |
| E33 | The issuer guaranteed up to USD 97 million of the seller's loan for the Costa Rica plant | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 11 | "The maximum potential amount of future payments under the guarantee is $97 million." |
| E34 | Adjusted EBITDA for the third quarter and nine months of 2026 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 | "Adjusted EBITDA $ 233.7 $ 160.0 $ 615.1 $ 451.5" |
| E35 | The revolver was USD 500 million in the second-quarter report | 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 29 | "We have a $500 million senior secured revolving credit facility (the “Revolving Credit Facility”), which expires in 2030." |

### P3 - Input inventory

| Source | Form | Registrant and period | Pages in file | File size in bytes | sha256 | Original document sha256 stated on page 1 | Relationship to other sources |
|---|---|---|---|---|---|---|---|
| 10-K_2024-12-31_podd-20241231.htm.jsonl | Annual report, Form 10-K | Insulet Corporation, fiscal year ended 2024-12-31 | 122 | 337189 | 3ca21f0666b600732db05bddf666ad42bc06b5874422b7fd248a4fcdf642da5b | 7bb57a250ed3fe985d50be021fde5b4c3c9c71a973e8bff5c7364ec6fa02349c | Prior annual report; overlaps the later annual report for fiscal years 2023 and 2024; a distinct source, not a duplicate |
| 10-K_2025-12-31_podd-20251231.htm.jsonl | Annual report, Form 10-K | Insulet Corporation, fiscal year ended 2025-12-31 | 117 | 319428 | defd65468dd3fb9d515378a3d4acc7b0fdbed9f6dacd99e95f5e6f3e371c07e6 | c2881971687e3f449210f9ed5823446a38c89ba1526b157ecb1b83a0b963be9f | Latest annual report; controls fiscal years 2023 to 2025 |
| 10-Q_2026-03-31_podd-20260331.htm.jsonl | Quarterly report, Form 10-Q | Insulet Corporation, quarter ended 2026-03-31 | 30 | 78140 | 759f5516864d1425d45378bbf20a62d6996a0c267acea0694a674988d355480c | 3ceaa041ad054e53ec11b1cba63bcda8d9741bd9ca73b4bc6553101d00e59ea7 | First 2026 quarter; its figures are repeated in the year-to-date figures of the later quarterly reports |
| 10-Q_2026-06-30_podd-20260630.htm.jsonl | Quarterly report, Form 10-Q | Insulet Corporation, quarter ended 2026-06-30 | 33 | 90122 | 8d1ffeb777a43a02857e676da62d545a546c1d220bc08a2d7cd8e7e1ca5717c0 | 62d7126422042572202f3ec5d5b740a26efd76b1485a1630b59d7a1d6d22cbe1 | Second 2026 quarter; six-month cash flow figures include the first quarter |
| 10-Q_2026-09-30_podd-20260930.htm.jsonl | Quarterly report, Form 10-Q | Insulet Corporation, quarter ended 2026-09-30 | 37 | 95285 | 49b21d6b40c12cfad0f5ab4652758a0060a1146d0e099962e233e2e4677340c8 | f660c2eb1f779322123dd677638b559bc767972db8fe6193ef6410cda1b0b4d7 | Latest quarter; nine-month cash flow figures include the first two quarters |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-20 | day | 2025-02-20 | Annual report for the year ended 2024-12-31 signed | Historical — signed on February 20, 2025 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 122 | Supplies fiscal year 2022 figures and 2024 notes that the later annual report no longer carries |
| 2026-02-18 | day | 2026-02-18 | Annual report for the year ended 2025-12-31 signed | Historical — signed on February 18, 2026 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 116 | Latest audited annual statements |
| 2026-05-06 | day | 2026-05-06 | Quarterly report for the quarter ended 2026-03-31 signed | Historical — Date: May 6, 2026 | 10-Q_2026-03-31_podd-20260331.htm.jsonl, page 30 | First 2026 interim statements |
| 2026-08-05 | day | 2026-08-05 | Quarterly report for the quarter ended 2026-06-30 signed | Historical — Date: August 5, 2026 | 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 33 | Second-quarter statements and the revolver size before the September amendment |
| 2026-11-04 | day | 2026-11-04 | Quarterly report for the quarter ended 2026-09-30 signed | Historical — Date: November 4, 2026 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 37 | Latest source, dated 14 days before the as-of date |
| 2026-09-30 | day | 2026-11-04 | Balance sheet date of the latest quarterly report | Historical — For the quarterly period ended September 30, 2026 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 1 | Figures in the report are at or for this date; later events the report describes are outside them |
| 2021-05-04 | day | 2026-02-18 | Credit agreement listed in the exhibit index, not supplied | Historical — Credit Agreement, dated as of May 4, 2021 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 111 | Governs the secured term loan and revolver; covenant terms cannot be checked |
| 2025-03-20 | day | 2026-02-18 | Indenture listed in the exhibit index, not supplied | Historical — Indenture, dated as of March 20, 2025 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 108 | The unsecured notes were issued in March 2025; the index does not link the two in words, so incurrence tests, guarantors and call terms cannot be checked |
| 2026-09-21 | day | 2026-11-04 | Ninth Amendment to the credit agreement listed in the exhibit index, not supplied | Historical — Ninth Amendment to Credit Agreement, dated September 21, 2026 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 36 | Latest amendment; the terms behind the term loan refinancing and the larger revolver cannot be checked |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 35 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 24 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 4 |
| Insufficient Information | 9 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 9 |

## Calculations

The checks below test whether the supplied figures agree with each other. Amounts are in USD million unless a unit is shown.

| Calculation ID | What is tested | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Age of the latest source at the as-of date | As-of date 2026-11-18 less signature date 2026-11-04 | 14 days | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 37 |
| C2 | Debt components at 2026-09-30 against total debt, net | 24.9 + 25.1 + 473.8 + 450.0 − 3.0 − 8.6; the revolver shows a dash and the report states nothing outstanding | 962.2; reported 962.2; difference 0.0 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 32 |
| C3 | Current and long-term portions at 2026-09-30 against total debt, net | 19.1 + 943.0 | 962.1; reported 962.2; difference 0.1, within the rounding the report states | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 2, 3, 10 |
| C4 | Debt components at 2025-12-31 against total debt, net | 34.9 + 477.5 + 450.0 − 3.5 − 9.7; and 18.4 + 930.8 | 949.2 by both routes; reported 949.2; difference 0.0 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 91 |
| C5 | Total debt, net at 2024-12-31 in the two annual reports | 1,379.9 in the 2024 report less 1,379.8 in the 2025 report | Difference 0.1 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 91 |
| C6 | Operating cash flow for 2024 in the two annual reports | 430.3 in the 2024 report less 430.2 in the 2025 report | Difference 0.1 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 75; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 71 |
| C7 | Operating income for 2023 in the two annual reports | 220.1 in the 2025 report less 220.0 in the 2024 report | Difference 0.1 | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 70; 10-K_2024-12-31_podd-20241231.htm.jsonl, page 74 |
| C8 | Re-presented 2025-12-31 balance sheet lines | 82.3 + 146.0 against 228.3; 82.4 + 205.8 against 288.2 | Both tie; differences 0.0 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| C9 | Product-correction cost figures for the nine months to 2026-09-30 | 37.0 accrued less 10.7 reduction = 26.3; net charge 38.5; Adjusted EBITDA add-back 32.2 | 26.3, 38.5 and 32.2 differ; the report does not reconcile them, and none is chosen here | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 20, 27 |
| C10 | Adjusted EBITDA for the nine months to 2026-09-30 from the three quarters | 181.7 + 199.8 + 233.7 | 615.2; reported 615.1; difference 0.1 | 10-Q_2026-03-31_podd-20260331.htm.jsonl, page 21; 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 24; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 27 |
| C11 | Change in revolver size between the second- and third-quarter reports | 750 less 500 | 250 | 10-Q_2026-06-30_podd-20260630.htm.jsonl, page 29; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 |
| C12 | Remaining 2026 repurchases if the USD 400 million allocation includes the accelerated repurchase | 400 less 300 | 100; the alternative reading leaves 400 | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 17, 33 |

## Gaps

The documents and figures below are missing, or conflict, and each limits the modules named.

| Gap ID | Type | Severity | What is missing or in conflict | Why it matters | Modules limited | Remediation | Source |
|---|---|---|---|---|---|---|---|
| G1 | Source gap | MATERIAL | The executed credit agreement and its amendments to the Ninth Amendment, the March 2025 indenture and the subsidiary list are named in the exhibit indexes but not supplied | Covenant levels and definitions, guarantors, collateral and call terms cannot be verified; the issuer's own summaries are the only evidence | Legal & covenants; Covenant capacity; Structural priority; Recovery & fulcrum; Security selection; Fundamental credit | Supply the executed documents, or state every covenant and priority point as the issuer's summary | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 108, 111–112, 115; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 36 |
| G2 | Source gap | MATERIAL | Letters of credit outstanding are not stated after 2024-12-31, and the filings do not say whether any reduce revolver availability | Revolver headroom net of any letters of credit cannot be computed, although no borrowings were outstanding | Liquidity; Fundamental credit | Obtain the letters of credit balance at 2026-09-30 | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 102; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 32 |
| G3 | Conflict | MATERIAL | The cost of the voluntary medical device corrections is a net charge of USD 38.5 million in the discussion, an accrued liability of USD 37.0 million before a USD 10.7 million reduction in the notes, an Adjusted EBITDA add-back of USD 32.2 million, and a management estimate of about USD 50 million in total | One-off cost, adjusted earnings and cash outflow all depend on which figure is used; the report does not reconcile them | Earnings quality; Financial foundation; Fundamental credit | State every figure with its role and period; do not choose one | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 10, 20, 27 |
| G4 | Ambiguity | MATERIAL | The report does not say whether the USD 400 million 2026 repurchase allocation includes the USD 300 million accelerated repurchase completed by 2026-03-31 | The remaining 2026 cash use is either about USD 100 million (USD 400 million less USD 300 million) or about USD 400 million, against cash of USD 584.4 million at 2026-09-30 | Liquidity; Fundamental credit; Forward credit model | Show both readings; do not choose one | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 17, 33 |
| G5 | Source gap | MINOR | No credit ratings are supplied | Rating-linked terms and triggers cannot be tested; the 2024 report mentions a margin that depended on credit rating but no level | Ratings & triggers | Supply agency ratings | 10-K_2024-12-31_podd-20241231.htm.jsonl, page 99 |
| G6 | Source gap | MINOR | No market prices, spreads, market capitalisation, enterprise value or peer figures | Relative value, market-implied and peer work have no inputs; only issuer-reported fair values of the term loan and notes are available | Market-implied risk; Security selection; Peer benchmark | Supply quotes and peer sources | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 12 |
| G7 | Source gap | MINOR | No fund limits and no earlier run of this pathway | The committee decision states limits as not supplied; no change comparison is possible | Committee decision; Changes since the last run | Supply the portfolio; none exists for an earlier run | Not supplied: the run settings carry no portfolio and no earlier run |
| G8 | Source gap | MINOR | The proxy statement is not supplied | Board, committees, compensation and ownership are not in the files | Business & governance | Supply the proxy statement | 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 2, 107 |
| G9 | Source gap | MINOR | No debt maturity schedule at 2026-09-30; the latest schedule is at 2025-12-31 and predates the September 2026 refinancing and the Costa Rica plant financing | The maturity wall must be rebuilt from the debt table and the amendment text | Refinancing & LME; Liquidity; Financial foundation | Derive from the debt components or obtain the schedule | 10-K_2025-12-31_podd-20251231.htm.jsonl, page 93; 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 10 |
| G10 | Source gap | MINOR | The expiry date of the interest rate swaps is not stated | The duration of the fixed rate against the term loan maturity is unknown | Rates, FX & hedging | Obtain the swap terms | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 13; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 95 |
| G11 | Conflict | MINOR | Prior-year figures differ by USD 0.1 million between the 2024 and 2025 annual reports in several lines, including total debt, operating cash flow and operating income | Rounding-sized, but a figure must name the report it comes from | Financial foundation | Use the 2025 report for fiscal years 2023 to 2025 and the 2024 report for fiscal year 2022; keep both figures visible | 10-K_2024-12-31_podd-20241231.htm.jsonl, pages 75, 96; 10-K_2025-12-31_podd-20251231.htm.jsonl, pages 71, 91 |
| G12 | Conflict | MINOR | The third-quarter report re-presents the 2025-12-31 balance sheet lines for prepaid expenses, other current assets, deferred tax assets and other assets | Totals tie, but line names differ between the reports | Financial foundation | Map the lines by arithmetic, as in the calculations | 10-Q_2026-09-30_podd-20260930.htm.jsonl, page 2; 10-K_2025-12-31_podd-20251231.htm.jsonl, page 69 |
| G13 | Source gap | MINOR | No earnings releases, lender presentation or revenue and earnings guidance are in the files | Forward work rests on the filings' own statements | Forward credit model; Earnings changes | Supply management materials if wanted | 10-Q_2026-09-30_podd-20260930.htm.jsonl, pages 20, 26, 30, 33 |

## Next module

The orchestrator selects the next module.
