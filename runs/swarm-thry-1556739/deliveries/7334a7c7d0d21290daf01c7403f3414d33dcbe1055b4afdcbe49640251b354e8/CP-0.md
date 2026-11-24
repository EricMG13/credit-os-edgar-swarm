---
module_id: CP-0
module_name: SourceReadiness
issuer_id: thry-1556739
analysis_date: 2026-11-18
run_id: thry-1556739-2026-11-18-credit_snapshot-host
pathway: credit_snapshot
---

# Source readiness: Thryv Holdings, Inc. (thry-1556739)

## Request

Source readiness for Thryv Holdings, Inc. (issuer thry-1556739), as of 2026-11-18, pathway credit_snapshot (Full credit assessment). Scope: whether the five supplied SEC filings support the modules of that pathway, and what remains missing.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2024-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2024 (audit report by Grant Thornton LLP dated February 27, 2025) | 2025-02-27 | 282980666d3a5a06b5af2d5429137e362482dcfdc1b3bba5918f0727d2c53a53 | Identity, perimeter, period and content mapping for FY2024; presentation of research and development; ABL facility size printed there. Document date is the signature date; the FY2025 annual report gives the same date as the filing date (page 169). |
| 10-K_2025-12-31_thry.htm.jsonl | Visible-text extraction of the annual report on Form 10-K for the year ended December 31, 2025 (audit report by Grant Thornton LLP dated February 26, 2026) | 2026-02-26 | faf758b44ae5df8fec898bbc507989fec9683935c5c0a4d014cb5f042fa5ff17 | Last audited year-end: debt, leases, ABL availability, interest-rate sensitivity, revenue by type, exhibit list, governance incorporation. Document date is the signature date the document states. |
| 10-Q_2026-03-31_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-04-30 | 2920a22d6eeccdfffeae8ccc16ace65c14c7678a339d93c27519c6de59863a14 | First-quarter 2026 statements and debt as reported before the Print Business was presented as discontinued. Document date is the signature date. |
| 10-Q_2026-06-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-04 | 8268f9e47f9d7b81e9e17f40ae4c224df8143d74fa7a0127a2505231f9437fea | Second-quarter and six-month 2026 statements, debt and ABL availability as reported before the recast. Document date is the signature date. |
| 10-Q_2026-09-30_thry.htm.jsonl | Visible-text extraction of the quarterly report on Form 10-Q for the quarter ended September 30, 2026 | 2026-11-09 | a894cef210c66630722da5f2cb4baeae3c58e9ed007152c412d67ede30ceed27 | Latest source: recast statements, debt, covenants, going-concern disclosure, Print Business sale, liquidity. Document date is the signature date. |

No analytical output from another module was supplied to this module.

## Findings

### Bottom line

The five Thryv filings support the requested credit assessment as at September 30, 2026, but covenant and recovery work can rest only on the company's own summaries, because no executed loan agreement, rating or dated market quote is supplied.

The main limit is the reporting perimeter. The third-quarter 2026 report treats the Print Business, which the company agreed to sell for USD 142.0 million, as discontinued in every period it shows. The two annual reports and the first two quarterly reports still include it, and no recast full year 2025 is supplied. Revenue and net income for the first nine months of 2026 and 2025 reconcile exactly between the two presentations, so those periods can be bridged.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 12; 10-Q_2026-09-30_thry.htm.jsonl, page 16; calculation C1; calculation C2; calculation C3; calculation C4

Nothing dated after the third-quarter report was signed on November 9, 2026 is supplied, so the closing of the sale and the outcome of the covenant waiver discussions, both open when that report was signed, are not established at the November 18, 2026 cutoff.
Basis: 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 67

### T1 - Input gate

| Field | Value | Source |
|---|---|---|
| Run | thry-1556739-2026-11-18-credit_snapshot-host, method version deploy-v-r14 | Run settings |
| Issuer and reporting entity | Thryv Holdings, Inc., a Delaware holding company with common stock listed on Nasdaq (THRY). The consolidated statements include its wholly-owned subsidiaries. The operating subsidiary Thryv, Inc. is the Term Loan borrower and the holding company has no operations of its own. | 10-Q_2026-09-30_thry.htm.jsonl, page 1; 10-Q_2026-09-30_thry.htm.jsonl, page 12; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 56 |
| Objective | Full credit assessment of the issuer (pathway credit_snapshot). The run settings state no objective or research question, so the pathway's use case applies. | Run settings |
| Period | Current period Q3 2026 (three and nine months ended 2026-09-30); prior period FY2025 | Run settings |
| As-of date and cutoff | 2026-11-18 and 2026-11-18 | Run settings |
| Currency and unit | US dollars; statements in thousands, narrative in millions | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-K_2025-12-31_thry.htm.jsonl, page 113 |
| Source status | Received: five SEC filings, FY2024 to Q3 2026, all primary documents | 10-Q_2026-09-30_thry.htm.jsonl, page 1 |
| Overall readiness | READY_WITH_LIMITATIONS | Not applicable: readiness judgement of this module |
| Limitations | Mixed perimeter across periods; no executed loan agreements, ratings, market quotes, peers or portfolio; nothing dated after 2026-11-09 | See Gaps |

### T2 - Source register

| Logical source | Original file | Active representation | Authority | Period covered | Perimeter | Usability | Limitation flags | Source |
|---|---|---|---|---|---|---|---|---|
| Annual report FY2024 | 10-K_2024-12-31_thry.htm | 10-K_2024-12-31_thry.htm.jsonl | Tier 1 primary filing; audited (Grant Thornton LLP) | FY2024 with FY2023 and FY2022 comparatives | Consolidated, including the print business inside Marketing Services; research and development inside sales and marketing | Usable_with_Limitations | One year-end older than the latest annual report; presentation differs from later reports; tables flattened to one line per row and page is a text chunk number | 10-K_2024-12-31_thry.htm.jsonl, page 120 |
| Annual report FY2025 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl | Tier 1 primary filing; audited (Grant Thornton LLP) | FY2025 with FY2024 and FY2023 comparatives | Consolidated, including the print business as originally reported; written before the sale agreement | Usable_with_Limitations | Not recast for the discontinued Print Business; Part III incorporated by reference to a proxy statement not supplied | 10-K_2025-12-31_thry.htm.jsonl, page 116 |
| Quarterly report Q1 2026 | 10-Q_2026-03-31_thry.htm | 10-Q_2026-03-31_thry.htm.jsonl | Tier 1 primary filing; unaudited | Three months 2026 and 2025; balance sheet at 2026-03-31 and 2025-12-31 | Consolidated, including the print business | Usable_with_Limitations | Not recast; no six-month or nine-month figures | 10-Q_2026-03-31_thry.htm.jsonl, page 4 |
| Quarterly report Q2 2026 | 10-Q_2026-06-30_thry.htm | 10-Q_2026-06-30_thry.htm.jsonl | Tier 1 primary filing; unaudited | Three and six months 2026 and 2025; balance sheet at 2026-06-30 and 2025-12-31 | Consolidated, including the print business | Usable_with_Limitations | Not recast | 10-Q_2026-06-30_thry.htm.jsonl, page 5 |
| Quarterly report Q3 2026 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl | Tier 1 primary filing; unaudited | Three and nine months 2026 and 2025; balance sheet at 2026-09-30 and 2025-12-31 | Continuing operations only; the Print Business shown as discontinued operations in all periods | Usable | Recast comparatives cover only the periods this report shows; contains going-concern language | 10-Q_2026-09-30_thry.htm.jsonl, page 6 |

### T4 - Content-to-module map

| Module | Evidence demand | Active representation | Disposition | Readiness | Readiness effect | Source |
|---|---|---|---|---|---|---|
| CP-1 Financial foundation | Statements, debt note, cash flow, Adjusted EBITDA reconciliation and segment data for FY2024, FY2025 and Q1 to Q3 2026 | All five filings | Recommended | READY_WITH_LIMITATIONS | Debt, cash and covenant text at 2026-09-30 are printed. Income and cash-flow periods sit on two perimeters: continuing operations for Q3 2026 and nine months 2026 and 2025, and including print for FY2024, FY2025, Q1 2026 and Q2 2026. No continuing-operations FY2025 is supplied. | 10-Q_2026-09-30_thry.htm.jsonl, pages 6–9; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 54; 10-K_2025-12-31_thry.htm.jsonl, pages 116–119 |
| CP-1A Business & governance | Business model, segments, client metrics, Print Transaction, restructuring, related-party lender, legal matters, board and ownership | Q3 2026 and FY2025 filings | Recommended | READY_WITH_LIMITATIONS | Business, metrics, sale terms, restructuring and the SEC matter are printed. Directors, officers, ownership and the identity of the related-party lender (40.0% of the Term Loan) are incorporated by reference to a proxy statement that is not supplied. | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 32; 10-Q_2026-09-30_thry.htm.jsonl, pages 42–44; 10-K_2025-12-31_thry.htm.jsonl, page 169 |
| CP-2 Fundamental credit | Leverage, coverage, liquidity, going-concern and covenant evidence | All five filings | Recommended | READY_WITH_LIMITATIONS | The company states substantial doubt about continuing as a going concern and a forecast breach of the leverage covenant at the 2026-12-31 test. The covenant ratio, its definitions and the SaaS revenue floors are not printed. No ratings or market quotes are supplied. | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 57; 10-Q_2026-09-30_thry.htm.jsonl, pages 65–66 |
| CP-DR Research questions | Named questions: has the Print Transaction closed and on what proceeds; has the Term Loan covenant been waived or amended; is a replacement revolver in place; what happened after 2026-11-09 | None in the set; the filings state the open questions only | Recommended | READY_WITH_LIMITATIONS | The questions are concrete and the answers are outside the set. Liquidity and Refinancing & LME depend on the first three. | 10-Q_2026-09-30_thry.htm.jsonl, page 11; 10-Q_2026-09-30_thry.htm.jsonl, page 58; 10-Q_2026-09-30_thry.htm.jsonl, page 63 |
| CP-4 Legal & covenants | Executed Term Loan Credit Agreement and ABL Credit Agreement: definitions, baskets, tests, amendments | None; note summaries only | Blocked | CONDITIONAL | No executed agreement is in the set and the run settings declare none, so the module's own source gate stops it. The notes give the 3.0 to 1.0 maximum total net leverage, the minimum SaaS revenue test, the ABL 1.0 to 1.0 fixed charge test and the USD 8.5 million minimum excess availability, without definitions or thresholds. The agreements are listed as exhibits incorporated by reference to a Form 8-K filed 2024-05-02. | 10-Q_2026-09-30_thry.htm.jsonl, page 24; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-K_2025-12-31_thry.htm.jsonl, page 170 |
| CP-2A Downside | Base-period figures and drivers for stress; downside assumptions | All five filings | Recommended | READY_WITH_LIMITATIONS | The run settings supply no downside assumptions (blank, not zero), so the declared defaults apply. A stress must name which perimeter it starts from. | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 54 |
| CP-2E Rates, FX & hedging | Floating-rate terms, hedges, currency exposure | Q3 2026 and FY2025 filings | Recommended | READY_WITH_LIMITATIONS | Term Loan at SOFR plus 6.75% and ABL at SOFR plus 2.50% to 2.75%. No debt hedge found (swap agreements appear only as a covenant restriction). No foreign-exchange hedging to date; Australia was about 11.5% of Q3 2026 revenue. Rate sensitivity is stated at 2025-12-31 (USD 2.6 million per 100 bp) and 2026-03-31 (USD 2.7 million per 100 bp); the Q2 and Q3 2026 reports omit market-risk disclosure. | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 35; 10-Q_2026-09-30_thry.htm.jsonl, page 61; 10-Q_2026-06-30_thry.htm.jsonl, page 53; 10-Q_2026-03-31_thry.htm.jsonl, page 44; 10-K_2025-12-31_thry.htm.jsonl, pages 113–114 |
| CP-2D Liquidity | Unrestricted cash, undrawn facilities net of usage, near-term cash calls | Q3 2026 filing | Recommended | READY_WITH_LIMITATIONS | Cash USD 8.752 million and ABL excess availability USD 19.5 million (USD 11.0 million after the minimum) at 2026-09-30. The ABL is repaid and terminated when the sale closes and its borrowing base is print assets only. Facility size is printed only in the FY2024 report (USD 85.0 million). No letters of credit found in any source. | 10-Q_2026-09-30_thry.htm.jsonl, page 14; 10-Q_2026-09-30_thry.htm.jsonl, page 25; 10-Q_2026-09-30_thry.htm.jsonl, page 63; 10-K_2024-12-31_thry.htm.jsonl, page 111 |
| CP-3C Refinancing & LME | Maturities, amortization, use of sale proceeds, waiver status, replacement revolver | Q3 2026 filing | Recommended | READY_WITH_LIMITATIONS | Term Loan matures 2029-05-01 with USD 35.0 million of amortization in the next 12 months; ABL matures 2028-05-01 and is repaid at the sale close; proceeds uses are named. The waiver outcome and any replacement revolver are not stated. | 10-Q_2026-09-30_thry.htm.jsonl, page 10; 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 58 |
| CP-2G Forward credit model | Quarterly and annual series, drivers, management outlook | All five filings | Recommended | READY_WITH_LIMITATIONS | Series exist on mixed perimeters. Management outlook is limited to restructuring savings of USD 50.0 million to USD 55.0 million gross annualized (full benefit from 2028) and about USD 2.8 million of capital expenditure for the rest of 2026. No earnings release or guidance document is supplied. | 10-Q_2026-09-30_thry.htm.jsonl, page 30; 10-Q_2026-09-30_thry.htm.jsonl, page 58 |
| CP-3 Security selection | Instrument terms, executed documents, deal terms | Notes only | Blocked | CONDITIONAL | The Term Loan and ABL are described in the notes, but no executed document, deal terms or dated quote is supplied. | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 24 |
| CP-5 Evidence validation | Every analyst output traced to a pinned source | All five filings | Recommended | READY_WITH_LIMITATIONS | The five filings are hashed and pinned; the limits above carry into validation. | 10-Q_2026-09-30_thry.htm.jsonl, page 1 |
| CP-6 Committee decision | Fund limits and portfolio context | None | Recommended | READY_WITH_LIMITATIONS | No portfolio or fund limits are supplied in the run settings, so the decision states them as not supplied. | Not applicable: run settings carry no portfolio |
| CP-8 Changes since the last run | An earlier listed run of the same issuer and pathway | None | Inapplicable | Not applicable | The launcher reports a first run of this pathway, so there is nothing to compare. | Not applicable: no earlier run |
| CP-1B Earnings changes | Quarter-on-quarter and year-on-year earnings drivers | Q3 2026 filing | Inapplicable | Not applicable | Not part of the Full pathway. Three-month and nine-month 2026 against 2025 comparatives exist on the recast perimeter if it is later selected. | 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, pages 34–35 |
| CP-1C Peer benchmark | Peer financials and multiples | None | Inapplicable | Not applicable | Not part of the Full pathway; the run settings name no peer set. | Not applicable: no peers supplied |
| CP-1D Earnings quality | Adjusted EBITDA add-backs and one-offs | Q3 2026 filing | Inapplicable | Not applicable | Not part of the Full pathway. If selected, the reconciliation is printed (restructuring and integration USD 17.815 million for nine months 2026) and the commission amortization life was lengthened from 18 months to 36 months, which raised nine-month income by USD 6.6 million. | 10-Q_2026-09-30_thry.htm.jsonl, page 14; 10-Q_2026-09-30_thry.htm.jsonl, page 54 |
| CP-2H Ratings & triggers | Agency ratings and rating triggers | None | Inapplicable | Not applicable | Not part of the Full pathway. No agency rating is stated in any filing; the annual reports mention rating reductions only as a generic risk. | 10-K_2025-12-31_thry.htm.jsonl, page 77 |
| CP-3D Market-implied risk | Dated prices, quotes, spreads | Q3 2026 filing | Inapplicable | Not applicable | Not part of the Full pathway. The only market datum is the Term Loan fair value of USD 215.476 million against a carrying amount of USD 221.569 million at 2026-09-30 (observable quoted prices, not a dated quote). | 10-Q_2026-09-30_thry.htm.jsonl, page 19 |
| CP-4C Recovery & fulcrum | Executed documents, collateral and guarantee terms, claims waterfall | Notes only | Inapplicable | Not applicable | Not part of the Full pathway and would face the same missing agreements. The Term Loan is secured by all assets of Thryv, Inc., certain subsidiaries and the Company; the ABL borrowing base is print assets only. | 10-Q_2026-09-30_thry.htm.jsonl, page 23; 10-Q_2026-09-30_thry.htm.jsonl, page 63 |
| CP-L10 Short credit snapshot | Short snapshot pathway | None | Inapplicable | Not applicable | The short credit snapshot is deactivated and is not part of this pathway. | Not applicable: pathway setting |

### T6 - Evidence trace

| Evidence ID | Original source | Source | Evidence at the locator |
|---|---|---|---|
| EV-01 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 1 | Registrant Thryv Holdings, Inc., Delaware, common stock on Nasdaq (THRY); cover shares outstanding date November 6, 2026. |
| EV-02 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 56 | Thryv Holdings, Inc. is a holding company with no operations of its own; cash flows come from the operating subsidiary Thryv, Inc.; debt agreements may restrict transfers to the holding company. |
| EV-03 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 23 | Debt at 2026-09-30: Term Loan USD 227,500 thousand (matures May 1, 2029; SOFR + 6.75%); ABL Facility USD 17,600 thousand (matures May 1, 2028); unamortized discount and issuance costs (5,931); total debt obligations 239,169. Term Loan incurred by Thryv, Inc., secured by all its assets and those of certain subsidiaries and the Company, guaranteed by the Company and certain subsidiaries; 40.0% held by a related party; mandatory amortization USD 35.0 million over the next 12 months. |
| EV-04 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 24 | Term Loan tests: maximum Total Net Leverage Ratio 3.0 to 1.0 at each fiscal quarter-end; minimum SaaS Revenue at quarterly thresholds set in the agreement; in compliance at 2026-09-30. |
| EV-05 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 25 | ABL tests: fixed charge coverage not less than 1.0 to 1.0; minimum Excess Availability USD 8.5 million at all times; Excess Availability USD 19.5 million and available capacity about USD 11.0 million at 2026-09-30; in compliance. |
| EV-06 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 10 | Asset Purchase Agreement with Coldwater YP, LLC for the Print Business: cash price USD 142.0 million subject to adjustments; expected to close in Q4 2026; proceeds to repay and terminate the ABL, pay USD 34.3 million of accrued tax liabilities and repay part of the Term Loan. Scope includes digital editions of the print directories. |
| EV-07 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 16 | Discontinued operations: revenue USD 89,480 thousand (nine months 2026) and USD 172,156 thousand (nine months 2025); income from discontinued operations before tax USD 50,528 thousand and USD 116,406 thousand. |
| EV-08 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 63 | Purchase price falls for each month closing is delayed (revenue-based adjustment); the ABL borrowing base consists exclusively of Print Business assets and the ABL ends when the sale closes. |
| EV-09 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 11 | Going-concern: substantial doubt; forecast non-compliance with the Total Net Leverage Ratio at the December 31, 2026 assessment absent waiver or amendment; waiver needs a majority of holders, of which 40.0% is a related party; discussions with lenders under way; no waiver obtained. |
| EV-10 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, pages 65–66 | Risk factor repeating the going-concern and covenant position; no waiver or amendment obtained as of the report date. |
| EV-11 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 58 | Company seeking a new revolving credit facility; about USD 2.8 million of capital expenditure expected for the rest of 2026. |
| EV-12 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 14 | Cash and cash equivalents USD 8,752 thousand at 2026-09-30 (USD 11,551 thousand at 2025-09-30); restricted cash USD 43 thousand; commission amortization life lengthened from 18 months to 36 months. |
| EV-13 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, pages 8–9 | Nine-month 2026 cash flow: continuing operations used USD 37,867 thousand in operating activities; discontinued operations provided USD 77,453 thousand; additions to fixed assets USD 23,613 thousand; cash paid for interest USD 20,274 thousand. |
| EV-14 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 31 | USD 33.9 million accrued for IRS notices for tax years 2012 to 2015, expected to be paid when the sale closes. |
| EV-15 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 30 | Restructuring program: USD 50.0 million to USD 55.0 million gross annualized savings, full benefit from 2028; USD 15.0 million to USD 20.0 million further costs. |
| EV-16 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 20 | Goodwill impairment of USD 94.8 million in the SaaS reporting unit in Q3 2026. |
| EV-17 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, pages 34–35 | Recast segment results: nine-month 2026 revenue SaaS USD 343,242 thousand and Marketing Services USD 33,032 thousand; Segment Adjusted EBITDA USD 11,934 thousand. |
| EV-18 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, pages 42–44 | Client counts, ARPU and seasoned net revenue retention (89% against 94%) recast to exclude clients conveying to the purchaser. |
| EV-19 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 54 | Adjusted EBITDA reconciliation for continuing operations: USD 4,205 thousand (Q3 2026) and USD 11,934 thousand (nine months 2026). |
| EV-20 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 26 | One qualified and two non-qualified frozen pension plans; contributions made and expected for 2026. |
| EV-21 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 19 | Term Loan carrying amount USD 221,569 thousand and fair value USD 215,476 thousand at 2026-09-30 (observable quoted prices). |
| EV-22 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 32 | SEC Enforcement Staff notified the company that its investigation is concluded with no enforcement action to be recommended. |
| EV-23 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 66 | Exhibit list refers to the Asset Purchase Agreement and to a Form 8-K filed September 14, 2026; neither is supplied. |
| EV-24 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl, page 67 | Report signed November 9, 2026 by the chief executive officer and chief financial officer. |
| EV-25 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, pages 116–117 | FY2025 as originally reported: revenue USD 785,015 thousand; cash USD 10,752 thousand at 2025-12-31. |
| EV-26 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, pages 143–146 | FY2025 debt (Term Loan USD 236,250 thousand, ABL USD 25,120 thousand, total debt obligations 253,487), operating lease liabilities USD 2,987 thousand, finance lease liability USD 4,863 thousand, ABL availability about USD 19.7 million of a USD 28.2 million borrowing base. |
| EV-27 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, page 165 | FY2025 revenue by type: SaaS USD 461,027 thousand; Marketing Services print USD 223,572 thousand and digital USD 100,416 thousand. |
| EV-28 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, pages 113–114 | Substantially all debt floating; USD 2.6 million more interest per 100 bp; no foreign-exchange hedging to date. |
| EV-29 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, page 169 | Directors, compensation, ownership and related transactions incorporated by reference to the 2026 proxy statement. |
| EV-30 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, page 170 | Exhibit list: Credit Agreement (ABL) and Term Loan Credit Agreement, each among Thryv Holdings, Inc., Thryv, Inc. and lenders with Citizens Bank, N.A. as administrative agent, dated May 1, 2024, incorporated by reference to a Form 8-K filed May 2, 2024. |
| EV-31 | 10-K_2024-12-31_thry.htm | 10-K_2024-12-31_thry.htm.jsonl, page 111 | ABL described as a new USD 85.0 million facility; availability about USD 46.5 million at 2024-12-31. |
| EV-32 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, page 77 | Rating-reduction risk factor; no actual rating is stated. |
| EV-33 | 10-Q_2026-03-31_thry.htm | 10-Q_2026-03-31_thry.htm.jsonl, page 4 | Q1 2026 as reported: revenue USD 167,684 thousand; net income USD 4,542 thousand. |
| EV-34 | 10-Q_2026-06-30_thry.htm | 10-Q_2026-06-30_thry.htm.jsonl, page 5 | Q2 2026 as reported: revenue USD 150,728 thousand; six-month revenue USD 318,412 thousand; net loss USD 16,660 thousand. |
| EV-35 | 10-K_2024-12-31_thry.htm | 10-K_2024-12-31_thry.htm.jsonl, page 120 | FY2024 income statement: revenue USD 824,156 thousand; sales and marketing USD 270,146 thousand with no separate research and development line. |
| EV-36 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl, page 6 | Marketing Services segment includes the legacy print and digital solutions business (print inside the segment before the recast). |

### P3 - Input inventory

| Source ID | Original file | Text file | Original sha256 | Document family | Authority | Accessibility | Entity | Reporting period | Version | Source |
|---|---|---|---|---|---|---|---|---|---|---|
| IN-1 | 10-K_2024-12-31_thry.htm | 10-K_2024-12-31_thry.htm.jsonl | feff7558385404bcc6a809aeedff8d169b5dd07ab4de5f6412f432342109979e | Annual report (Form 10-K) | Tier 1 primary filing; audited | Accessible | Thryv Holdings, Inc. (consolidated) | FY2024 | Original filing; no amendment in the set | 10-K_2024-12-31_thry.htm.jsonl, page 1 |
| IN-2 | 10-K_2025-12-31_thry.htm | 10-K_2025-12-31_thry.htm.jsonl | bd6228f1b3fad837a325df4082764ef032c6984e34ec39db3252bffd29111b58 | Annual report (Form 10-K) | Tier 1 primary filing; audited | Accessible | Thryv Holdings, Inc. (consolidated) | FY2025 | Original filing; no amendment in the set | 10-K_2025-12-31_thry.htm.jsonl, page 1 |
| IN-3 | 10-Q_2026-03-31_thry.htm | 10-Q_2026-03-31_thry.htm.jsonl | f5029822a201bb0a86837d537a25afabe6dbcb48d448893f428b045994fe4d33 | Quarterly report (Form 10-Q) | Tier 1 primary filing; unaudited | Accessible | Thryv Holdings, Inc. (consolidated) | Q1 2026 | Original filing; no amendment in the set | 10-Q_2026-03-31_thry.htm.jsonl, page 1 |
| IN-4 | 10-Q_2026-06-30_thry.htm | 10-Q_2026-06-30_thry.htm.jsonl | 847e7f6370947a87c7e8c23d3b219f991fe0627e69b02a17726e374119c87b35 | Quarterly report (Form 10-Q) | Tier 1 primary filing; unaudited | Accessible | Thryv Holdings, Inc. (consolidated) | Q2 2026 | Original filing; no amendment in the set | 10-Q_2026-06-30_thry.htm.jsonl, page 1 |
| IN-5 | 10-Q_2026-09-30_thry.htm | 10-Q_2026-09-30_thry.htm.jsonl | 66f22fb7fde0f4b68997a8c50bc109c41139eaea593d42fe0686193503072fed | Quarterly report (Form 10-Q) | Tier 1 primary filing; unaudited | Accessible | Thryv Holdings, Inc. (continuing operations; Print Business as discontinued) | Q3 2026 | Original filing; recasts earlier periods it shows; no amendment in the set | 10-Q_2026-09-30_thry.htm.jsonl, page 1 |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-02-27 | day | 2025-02-27 | Annual report for the year ended December 31, 2024 signed | Historical — signed February 27, 2025 | 10-K_2024-12-31_thry.htm.jsonl, page 180 | Earliest report in the set; its figures include the print business. |
| 2026-02-26 | day | 2026-02-26 | Annual report for the year ended December 31, 2025 signed | Historical — signed February 26, 2026 | 10-K_2025-12-31_thry.htm.jsonl, page 172 | Last audited year-end; written before the sale agreement and not recast. |
| 2026-04-30 | day | 2026-04-30 | Quarterly report for the quarter ended March 31, 2026 signed | Historical — signed April 30, 2026 | 10-Q_2026-03-31_thry.htm.jsonl, page 47 | First 2026 quarter, as reported with the print business. |
| 2026-08-04 | day | 2026-08-04 | Quarterly report for the quarter ended June 30, 2026 signed | Historical — signed August 4, 2026 | 10-Q_2026-06-30_thry.htm.jsonl, page 54 | Second 2026 quarter, as reported with the print business. |
| 2026-11-09 | day | 2026-11-09 | Quarterly report for the quarter ended September 30, 2026 signed | Historical — signed November 9, 2026 | 10-Q_2026-09-30_thry.htm.jsonl, page 67 | Latest source, nine days before the as-of date; first report with the Print Business recast and going-concern language. |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 30 |
| Calculated | 7 |
| Assumption-Based | 0 |
| Analyst Inference | 6 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 24 |
| Fields total | 28 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 5 |

## Calculations

These checks tie the recast third-quarter presentation to the quarters as originally reported, and tie the debt table to the balance sheet. Amounts are in USD thousands and are copied from the cited pages.

| ID | Check | Inputs | Result | Source |
|---|---|---|---|---|
| C1 | Nine months 2026 revenue, as reported against recast | Q1 2026 revenue 167,684; Q2 2026 revenue 150,728; Q3 2026 continuing 118,937 plus discontinued 28,405 = 147,342; recast nine-month continuing 376,274 plus discontinued 89,480 | As reported 167,684 + 150,728 + 147,342 = 465,754; recast 376,274 + 89,480 = 465,754; difference 0 | 10-Q_2026-03-31_thry.htm.jsonl, page 4; 10-Q_2026-06-30_thry.htm.jsonl, page 5; 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 16 |
| C2 | Nine months 2025 revenue, as reported against recast | Q1 2025 revenue 181,371; Q2 2025 revenue 210,470; Q3 2025 continuing 137,427 plus discontinued 64,128 = 201,555; recast nine-month continuing 421,240 plus discontinued 172,156 | As reported 181,371 + 210,470 + 201,555 = 593,396; recast 421,240 + 172,156 = 593,396; difference 0 | 10-Q_2026-03-31_thry.htm.jsonl, page 4; 10-Q_2026-06-30_thry.htm.jsonl, page 5; 10-Q_2026-09-30_thry.htm.jsonl, page 6; 10-Q_2026-09-30_thry.htm.jsonl, page 16 |
| C3 | Nine months 2026 net result, as reported against nine-month report | Q1 2026 net income 4,542; Q2 2026 net loss (16,660); Q3 2026 net loss (103,068); nine-month net loss (115,186) | 4,542 − 16,660 − 103,068 = (115,186); difference 0 | 10-Q_2026-03-31_thry.htm.jsonl, page 4; 10-Q_2026-06-30_thry.htm.jsonl, page 5; 10-Q_2026-09-30_thry.htm.jsonl, page 6 |
| C4 | Nine months 2025 net result, as reported against nine-month report | Q1 2025 net loss (9,618); Q2 2025 net income 13,931; Q3 2025 net income 5,654; nine-month net income 9,967 | −9,618 + 13,931 + 5,654 = 9,967; difference 0 | 10-Q_2026-03-31_thry.htm.jsonl, page 4; 10-Q_2026-06-30_thry.htm.jsonl, page 5; 10-Q_2026-09-30_thry.htm.jsonl, page 6 |
| C5 | Balance sheet at 2025-12-31, annual report against recast comparative plus discontinued liabilities | Accounts payable 8,643 + 1,121; accrued liabilities 89,776 + 1,470; contract liabilities 21,065 + 7,810; annual report 9,764, 91,246 and 28,875 | 8,643 + 1,121 = 9,764; 89,776 + 1,470 = 91,246; 21,065 + 7,810 = 28,875; each difference 0 | 10-K_2025-12-31_thry.htm.jsonl, page 117; 10-Q_2026-09-30_thry.htm.jsonl, page 7; 10-Q_2026-09-30_thry.htm.jsonl, page 17 |
| C6 | Debt at 2026-09-30, note against balance sheet | Term Loan current 21,000 + 14,000; Term Loan non-current 111,112 + 75,457; ABL 17,600; note total 239,169 | 35,000 + 186,569 = 221,569; 221,569 + 17,600 = 239,169; difference 0 | 10-Q_2026-09-30_thry.htm.jsonl, page 7; 10-Q_2026-09-30_thry.htm.jsonl, page 23 |
| C7 | FY2024 sales and marketing, FY2024 report against FY2025 report | FY2025 report: sales and marketing 254,433 plus research and development 15,713; FY2024 report: sales and marketing 270,146 | 254,433 + 15,713 = 270,146; difference 0 | 10-K_2025-12-31_thry.htm.jsonl, page 116; 10-K_2024-12-31_thry.htm.jsonl, page 120 |

## Gaps

The gaps below are those the pinned sources cannot fill; the search made is stated in each row.

| Gap | Type | Severity | What is missing and why it matters | Search made | Remediation | Modules affected |
|---|---|---|---|---|---|---|
| G1 | COVERAGE_GAP | MATERIAL | No continuing-operations income or cash-flow figures for FY2025, FY2024, Q4 2025, or Q1 and Q2 of 2025 and 2026 individually; recast income figures exist only for Q3 2026, Q3 2025 and the nine-month totals. A last-twelve-months series on the continuing perimeter cannot be built. The annual revenue-by-type table does not map one-to-one to the sold perimeter, which also holds digital editions of the print directories and Australia White Pages online. The Print Business Adjusted EBITDA is not printed. | Searched all five filings for recast, discontinued operations, held for sale, pro forma and Print Business Adjusted EBITDA: only the Q3 2026 three-month and nine-month tables were found; the other four filings carry no discontinued-operations presentation | Obtain the recast annual and quarterly statements the company files after the sale; until then state every figure with its perimeter | Financial foundation; Fundamental credit; Downside; Forward credit model; Liquidity |
| G2 | SOURCE_GAP | MATERIAL | Executed Term Loan Credit Agreement and ABL Credit Agreement are not supplied. The reported leverage ratio, the definitions of Consolidated EBITDA and Consolidated Total Net Indebtedness, the SaaS revenue floors and the restructuring add-back limit are not printed; the forecast breach at the 2026-12-31 test is stated without its ratio. | Searched for SaaS Revenue, Consolidated EBITDA, Consolidated Total Net Indebtedness, Total Net Leverage Ratio and to 1.0: only the 3.0 to 1.0 maximum, the ABL 1.0 to 1.0 minimum and the USD 8.5 million minimum were found | Obtain Exhibits 10.1 and 10.2 to the Form 8-K filed 2024-05-02 and any amendment or waiver | Legal & covenants; Covenant capacity; Security selection; Recovery & fulcrum; Fundamental credit |
| G3 | STALE_EVIDENCE | MATERIAL | Nothing dated after the Q3 2026 report was signed on 2026-11-09 is supplied, although the cutoff is 2026-11-18. The sale close (expected Q4 2026), the waiver or amendment, any replacement revolver, repayment of the accrued tax liability and any new financing are open. | Searched the Q3 2026 report, the latest source, for subsequent events and for dates after November 9, 2026: none found | Establish post-2026-11-09 events through research before conclusions on liquidity or covenants | Liquidity; Refinancing & LME; Fundamental credit; Research questions |
| G4 | SOURCE_GAP | MATERIAL | The Asset Purchase Agreement and the Form 8-K filed 2026-09-14 are not supplied. Closing conditions, the revenue-based price adjustment mechanics, escrow or indemnity terms and the management services arrangement are known only from the 10-Q summary. | Searched the Q3 2026 report for purchase price adjustment, closing conditions, escrow and indemnity: only the summary in the report was found | Obtain the agreement and the 8-K | Business & governance; Refinancing & LME; Liquidity |
| G5 | SOURCE_GAP | MINOR | ABL facility size is printed only in the FY2024 report (USD 85.0 million). No letters of credit, standby letters or similar claims on the ABL are stated in any source. Availability is defined differently across filings (see conflict X2). | Searched for letter of credit, standby, LC, EDC, commitment and USD 85.0 million: only the FY2024 report states the size; no letters of credit found | Confirm from the ABL agreement | Liquidity |
| G6 | SOURCE_GAP | MINOR | The related-party lender holding 40.0% of the Term Loan is not named; directors, officers, ownership and compensation are incorporated by reference to a proxy statement not supplied. | Searched for the related-party name, Item 12 and Item 13 text, beneficial owners: only the incorporation by reference was found | Obtain the 2026 proxy statement | Business & governance; Legal & covenants |
| G7 | SOURCE_GAP | MINOR | No agency rating, dated market quote, peer set, deal terms or portfolio is supplied; the run settings declare none. The only market datum is the Term Loan fair value at 2026-09-30. | Searched for Moody's, S&P, Fitch, credit rating: only a generic risk factor was found | Supply if the pathway modules that need them are to run | Ratings & triggers; Market-implied risk; Peer benchmark; Committee decision |
| G8 | COVERAGE_GAP | MINOR | Interest-rate sensitivity is stated only at 2025-12-31 and 2026-03-31; the Q2 and Q3 2026 reports omit market-risk disclosure as a smaller reporting company, so none is stated for 2026-06-30 or 2026-09-30. | Searched for hypothetical 100 basis point, interest rate risk, swap and hedge in all five filings: sensitivity found in the FY2024, FY2025 and Q1 2026 reports; Q2 and Q3 state the item is not applicable; no debt swap found | Compute from the 2026-09-30 debt balances if needed | Rates, FX & hedging |
| G9 | COVERAGE_GAP | MINOR | The Term Loan fair value is the only fair-value datum for debt; no fair value is given for the ABL beyond the statement that carrying value approximates fair value. | Searched the Q3 2026 report for fair value of the ABL: only that statement was found | Use dated quotes if supplied | Market-implied risk |

Conflicts and version differences found:

| Conflict | Type | Severity | Sources and values | Effect | Resolution applied |
|---|---|---|---|---|---|
| X1 | Perimeter | MATERIAL | The same periods differ between presentations: nine-month 2025 revenue is USD 421,240 thousand in the Q3 2026 report (continuing) against USD 593,396 thousand when the Q1, Q2 and Q3 2025 figures including print are added (see calculation C2); the 2025-12-31 balance sheet moves print receivables, accruals and contract liabilities into discontinued operations. | Any comparison across filings mixes perimeters unless each figure carries its basis | Both presentations are kept; the bridges in the Calculations reconcile exactly for nine-month revenue and net result and for 2025-12-31 liabilities |
| X2 | Definition | MINOR | ABL availability: the annual reports give borrowing base availability and an amount available to be drawn after restrictions (USD 56.9 million and USD 46.5 million at 2024-12-31; USD 28.2 million and USD 19.7 million at 2025-12-31); the 2026 quarterly reports give Excess Availability and capacity after the USD 8.5 million minimum (Q1 borrowing base USD 14.2 million and capacity about USD 5.7 million; Q2 USD 23.0 million and USD 14.5 million; Q3 USD 19.5 million and USD 11.0 million). | The series is not like-for-like across the year-end and quarterly reports | Each figure is carried with its own definition |
| X3 | Presentation | MINOR | Research and development sits inside sales and marketing in the FY2024 report (USD 270,146 thousand) and is shown separately from the FY2025 report on (USD 254,433 thousand and USD 15,713 thousand). | Line-item trends across the two annual reports need the reclassified FY2024 split | Reconciled by calculation C7; no value changed |

## Next module

The orchestrator selects the next module.
