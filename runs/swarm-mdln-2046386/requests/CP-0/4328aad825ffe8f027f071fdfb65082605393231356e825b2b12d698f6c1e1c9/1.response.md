---
issuer_id: mdln-2046386
module_id: CP-0
analysis_date: 2026-11-18
run_id: mdln-2046386-2026-11-18-credit_snapshot-host
---

# Source readiness for Medline Inc. as of 2026-11-18

## Request

Source readiness for Medline Inc. (issuer mdln-2046386), as of 2026-11-18, on the credit snapshot pathway. The scope is whether the eight supplied filings and releases support the requested Financial foundation, Business & governance and Fundamental credit work, and what stays blocked. No credit conclusion is drawn here.

## Sources

No upstream analytical output was supplied for this run: Source readiness is the first module.

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_mdln-20251231.htm.jsonl | Annual report on Form 10-K of Medline Inc. for the year ended December 31, 2025 | 2026-02-25 | cc17cd9e735531219f10a41b8375030c458bb58aa3f93e081f84b0c9fb1428c0 | FY2025 statements with FY2024 and FY2023 comparatives, debt note, business, ownership and risk disclosures, exhibit list of the unsupplied debt documents |
| 10-Q_2026-03-28_mdln-20260328.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 28, 2026 | 2026-05-06 | 7db0036f079791db470a9bf513f269c7643ce9e613c0cbcde863bbb6d1269fd5 | Q1 2026 statements, debt note and Q1 2025 comparatives |
| 10-Q_2026-06-27_mdln-20260627.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 27, 2026 | 2026-08-05 | 67b0e337eaf9661631fec1dae4e6f3cdd8dbe6c6053cdff24c834a9dc20bcfcb | Q2 2026 and six-month statements, the refinancing, exhibit list |
| 10-Q_2026-09-26_mdln-20260926.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 26, 2026 | 2026-11-04 | 5861a145ad0299877e35f6bb253c69f28f675cf1ceba9d034f1bda131ff1bc54 | Q3 2026 and nine-month statements, debt, liquidity, covenant, subsequent events, segment and risk disclosures |
| EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl | Earnings press release for the first quarter 2026, furnished as Exhibit 99.1 | 2026-05-06 | 90a0427bff3c69a08b24857579c495b4aa322bd6770fac4f07095ff82da0127f | Q1 2026 Adjusted EBITDA and guidance, cross-check to the Q1 report |
| EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl | Earnings press release for the second quarter and first six months 2026, furnished as Exhibit 99.1 | 2026-08-05 | 2a4aa54fb379595dc089422b9c59887f55d70af8f675fdf82683194cd31ae829 | Q2 2026 Adjusted EBITDA, trailing twelve months, guidance, cross-check to the Q2 report |
| EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl | Earnings press release for the third quarter and nine months 2026, furnished as Exhibit 99.1 | 2026-11-04 | 1398f1a996c445a321c8ff1571c5d140bc20b16920db6e404835b252fb50f485 | Q3 2026 Adjusted EBITDA, net debt and Net Leverage, guidance and its basis, segment table |
| S-1-A_2024-audited-financial-statements_medline.htm.jsonl | Amendment No. 1 to the registration statement on Form S-1, with audited statements of Medline Holdings, LP for FY2022 to FY2024 | 2025-11-04 | 16fc78ab8910878b9ae19ceda69fd5a5278772166be721d57e1e0197e6604236 | Audited FY2024, FY2023 and FY2022 history, pre-IPO governance and description of debt |

### T1 - Input gate

| Gate item | Value | Status | Source |
|---|---|---|---|
| Objective | None stated, so the pathway's use case applies: a short credit view of Medline Inc. built by the Financial foundation, Business & governance and Fundamental credit modules | Recorded | Run settings |
| Issuer | Medline Inc., a Delaware corporation whose Class A common stock is listed on Nasdaq as MDLN | Confirmed | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 1 |
| Reporting entity | Consolidated Medline Inc., a holding company whose material assets are its interests in Medline Holdings, LP and subsidiaries; the reorganization before the IPO was accounted for under common control at historical carrying amounts | Confirmed | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 13; 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 164 |
| Debt issuers | Medline Borrower, LP and Medline Co-Issuer, Inc., indirect subsidiaries of the registrant, issued the 2031 and 2033 notes; no separate statements for the borrower group appear in any of the eight sources | Limitation | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 64 |
| Parent, borrower and guarantors in run settings | Blank; the run settings list no guarantors | Not supplied by run settings | Run settings |
| Current and comparison period | Q3 2026 (quarter ended September 26, 2026) against FY2025 | Recorded | Run settings |
| As-of date and cutoff | 2026-11-18 for both | Recorded | Run settings |
| Latest document in the set | 2026-11-04, the Q3 2026 report and release; no document is dated between 2026-11-05 and the as-of date | Limitation | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 74; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 1 |
| Legal documents declared | None | Limitation | Run settings |
| Ratings, quotes, peers, portfolio and research questions in run settings | None supplied for any of them | Limitation | Run settings |
| Source gate for the requested modules | Pass: the primary filings carry statements, debt, liquidity, covenant, segment, ownership and business content for the periods the run needs | Pass | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 9–12; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 158–161 |

### P3 - Input inventory

| Source ID | File | Bytes | Text pages | sha256 | Document family | Entity and period | Duplicate or version link | Source |
|---|---|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_mdln-20251231.htm.jsonl | 567114 | 225 | cc17cd9e735531219f10a41b8375030c458bb58aa3f93e081f84b0c9fb1428c0 | Annual report, Form 10-K | Medline Inc.; year ended 2025-12-31 with FY2024 and FY2023 comparatives | None; FY2024 appears again in S8 as audited history | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 1 |
| S2 | 10-Q_2026-03-28_mdln-20260328.htm.jsonl | 145656 | 54 | 7db0036f079791db470a9bf513f269c7643ce9e613c0cbcde863bbb6d1269fd5 | Quarterly report, Form 10-Q | Medline Inc.; quarter ended 2026-03-28 | None; same period as S5, which is a release and not a duplicate | 10-Q_2026-03-28_mdln-20260328.htm.jsonl, page 1 |
| S3 | 10-Q_2026-06-27_mdln-20260627.htm.jsonl | 189610 | 72 | 67b0e337eaf9661631fec1dae4e6f3cdd8dbe6c6053cdff24c834a9dc20bcfcb | Quarterly report, Form 10-Q | Medline Inc.; quarter ended 2026-06-27 with six-month figures | None; same period as S6, which is a release and not a duplicate | 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 1 |
| S4 | 10-Q_2026-09-26_mdln-20260926.htm.jsonl | 198506 | 74 | 5861a145ad0299877e35f6bb253c69f28f675cf1ceba9d034f1bda131ff1bc54 | Quarterly report, Form 10-Q | Medline Inc.; quarter ended 2026-09-26 with nine-month figures | None; same period as S7, which is a release and not a duplicate | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 1 |
| S5 | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl | 26031 | 10 | 90a0427bff3c69a08b24857579c495b4aa322bd6770fac4f07095ff82da0127f | Earnings release, Exhibit 99.1 | Medline Inc.; quarter ended 2026-03-28 | Overlaps S2; distinct document | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1 |
| S6 | EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl | 32797 | 12 | 2a4aa54fb379595dc089422b9c59887f55d70af8f675fdf82683194cd31ae829 | Earnings release, Exhibit 99.1 | Medline Inc.; quarter and six months ended 2026-06-27 | Overlaps S3; distinct document | EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 1 |
| S7 | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl | 35373 | 13 | 1398f1a996c445a321c8ff1571c5d140bc20b16920db6e404835b252fb50f485 | Earnings release, Exhibit 99.1 | Medline Inc.; quarter and nine months ended 2026-09-26 | Overlaps S4; distinct document | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 1 |
| S8 | S-1-A_2024-audited-financial-statements_medline.htm.jsonl | 1357957 | 518 | 16fc78ab8910878b9ae19ceda69fd5a5278772166be721d57e1e0197e6604236 | Registration statement amendment, Form S-1/A | Medline Holdings, LP (formerly Mozart Holdings, LP); audited FY2022 to FY2024, unaudited nine months to 2025-09-27 | None; the only source for FY2022 and for pre-IPO governance | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, page 1 |

### T2 - Source register

| Source ID | Source | Authority tier | Original authority | Active representation | Quality and fidelity limits | Usability |
|---|---|---|---|---|---|---|
| S1 | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 1 | 1 | Primary filing, audited by Ernst & Young LLP | Page text of the supplied file | Management's report on internal control and the auditor's attestation are omitted for a newly public company; Part III items are incorporated from a proxy statement that is not supplied; the FY2024 comparative balance sheet folds income taxes payable of $4 million into accrued expenses | Usable for FY2025 and comparatives |
| S2 | 10-Q_2026-03-28_mdln-20260328.htm.jsonl, page 1 | 1 | Primary filing, unaudited | Page text of the supplied file | Unaudited; the first quarter's cash flow equals the quarter | Usable |
| S3 | 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 1 | 1 | Primary filing, unaudited | Page text of the supplied file | Unaudited; cash flows are cumulative for six months, so the second quarter alone needs subtraction | Usable |
| S4 | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 1 | 1 | Primary filing, unaudited | Page text of the supplied file | Unaudited; cash flows are cumulative for nine months; subsequent events run to the signing date | Usable; controls where it and the release both state a figure |
| S5 | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1 | 2 | Issuer release furnished with a current report | Page text of the supplied file | Non-GAAP measures defined by the issuer; unaudited | Usable as a cross-check |
| S6 | EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 1 | 2 | Issuer release furnished with a current report | Page text of the supplied file | Non-GAAP measures defined by the issuer; unaudited; Net Leverage deducts short-term investments of $350 million, which the release labels as time deposits and the Q2 report as short-term investments | Usable as a cross-check |
| S7 | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 1 | 2 | Issuer release furnished with a current report | Page text of the supplied file | Non-GAAP measures defined by the issuer; net leverage uses principal debt; guidance basis differs from reported Adjusted EBITDA | Usable; definitions logged in Gaps |
| S8 | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, page 1 | 1 | Primary filing, a preliminary prospectus amendment; audited statements of the predecessor partnership | Page text of the supplied file | Offering price and pro forma amounts are left blank; the ownership tables show holder names without share counts or percentages; the entity is the partnership, not Medline Inc.; governance is as of the filing date | Usable for FY2022 to FY2024 history; outdated for current governance |

### T4 - Content-to-module map

| Content item | Active representation | Evidence demand | Module | Disposition | Readiness | Limitation | Source |
|---|---|---|---|---|---|---|---|
| Financial statements and derived periods | Page text of the annual report, the three 2026 quarterly reports and the registration statement | Income statement and cash flow for FY2022 to FY2025, balance sheets for year-ends 2023 to 2025, and Q1 to Q3 2026 with 2025 comparatives; Q4 2025 by subtraction | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Second and third quarter cash flows are cumulative and need subtraction; periods before the IPO are the partnership's, carried at historical amounts | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 158–161; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 9–12; S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 420–423 |
| Debt by instrument, maturities, revolver and springing covenant | Page text of the Q3 2026 and FY2025 reports | Amount, rate, maturity and security by instrument; maturity wall; revolver availability; covenant level and test | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Terms come from the notes to the statements because executed documents are not supplied; guarantor and collateral detail is partial | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 19–23; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 69; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 188–190 |
| Adjusted EBITDA, trailing twelve months and Net Leverage | Page text of the Q3 2026 release and report and the annual report | Reported reconciliation, trailing twelve month total, net debt definition, guidance basis | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | Reported figures include tariff refund benefits that guidance excludes; the release's leverage uses principal debt | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 2–4; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62; 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 137 |
| Events after the balance-sheet date | Page text of the Q3 2026 report | Dated financing and operating events after the quarter end, to the signing date | Financial foundation (CP-1) | Recommended | READY_WITH_LIMITATIONS | The issuer publishes no pro forma net debt for the prepayment | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 44–45 |
| Business, products, customers and segments | Page text of the annual report, the Q3 2026 report and release | Operating model, segment and product-line data, customer channels, regulatory exposure | Business & governance (CP-1A) | Recommended | READY | Segment assets are not reported | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 11–18; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 43–44; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 11 |
| Ownership, group structure, tax receivable agreement and noncontrolling interests | Page text of the annual report, the Q3 2026 report and the registration statement | Who controls the issuer, how cash reaches the borrower, claims outside debt | Business & governance (CP-1A) | Recommended | READY_WITH_LIMITATIONS | The registration statement's ownership tables show no share counts; current ownership comes from risk-factor text | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 99–108; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 163–164; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 24–26; S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 350–357 |
| Management, board and related-party arrangements | Page text of the registration statement and the annual report | Board, officers, committees, pay, related-party agreements | Business & governance (CP-1A) | Recommended | READY_WITH_LIMITATIONS | The proxy statement is not supplied; detail is as of the registration statement | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 264–349; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 217–218 |
| Transactions and new debt issues | Page text of the Q3 and Q2 2026 reports and the annual report | Refinancing, note issuance, term loan terms, uses of proceeds, equity offerings, repurchase authorisation | Business & governance (CP-1A) | Recommended | READY | Terms are as summarised in the notes; the indentures are not supplied | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 19–23; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 52–54; 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 163 |
| Operating events, regulatory matters and credit drivers | Page text of the Q3 2026 report and release | Fire, tariffs and refunds, FDA warning letters, recall, restructuring, litigation, guidance | Fundamental credit (CP-2) | Recommended | READY | The recall cost appears as two different ranges | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 47–52; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 27–28; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 1–3 |
| Liquidity inputs | Page text of the Q3 2026 report | Cash, short-term investments, revolver availability, covenant | Liquidity (CP-2D) | Inapplicable: not requested | Not rated: not requested | Inputs are present in the filings if the module is added | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 23; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 64–65 |
| Quarterly change series | Page text of the three 2026 reports and releases | Quarter-on-quarter and year-on-year change in sales and Adjusted EBITDA | Earnings changes (CP-1B) | Inapplicable: not requested | Not rated: not requested | Quarterly Adjusted EBITDA ties to the nine-month total (calculation CALC-8) | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1; EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 10; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62 |
| Add-backs and cash conversion | Page text of the Q3 2026 report and release | Adjusted EBITDA reconciliation, add-back detail, operating cash flow | Earnings quality (CP-1D) | Inapplicable: not requested | Not rated: not requested | Add-backs include fire losses net of insurance and refinancing costs | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12 |
| Peer financials and multiples | None | Peer set, peer leverage and margins | Peer benchmark (CP-1C) | Blocked | CONDITIONAL | No peer data in the eight sources or the run settings | Run settings |
| Maturity ladder and refinancing capacity | Page text of the Q3 2026 report | Maturity schedule, cash, revolver, recent refinancing | Refinancing & LME (CP-3C) | Inapplicable: not requested | Not rated: not requested | Ladder is stated; no lender or sponsor support terms are supplied | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 |
| Scenario and forecast inputs | Page text of the Q3 2026 release | Shock inputs, forecast assumptions | Downside (CP-2A); Forward credit model (CP-2G) | Inapplicable: not requested | Not rated: not requested | Run settings carry no scenario assumptions; guidance covers full-year 2026 only | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 2; Run settings |
| Derivative and currency disclosures | Page text of the Q3 2026 report | Hedge notional, fair value, floating-rate exposure | Rates, FX & hedging (CP-2E) | Inapplicable: not requested | Not rated: not requested | Disclosures are present in the notes | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 32–33 |
| Credit ratings | None | Agency ratings, outlooks, rating triggers | Ratings & triggers (CP-2H) | Blocked | CONDITIONAL | No rating or agency view appears in the eight sources or the run settings | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 124 |
| Executed credit agreement, indentures and security documents | None | Covenant definitions, baskets, guarantors, collateral, priorities | Legal & covenants (CP-4); Covenant capacity (CP-4A); Structural priority (CP-4B); Intercreditor control (CP-4D) | Blocked | CONDITIONAL | The documents are listed as exhibits but not supplied | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 218–222; 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 71 |
| Structure, documents, valuation and prices | None | Waterfall inputs, security terms, market prices | Recovery & fulcrum (CP-4C); Security selection (CP-3) | Blocked | CONDITIONAL | Needs the executed documents and market prices, neither supplied | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 218–222; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 |
| Debt prices and spreads | None | Quotes by instrument | Market-implied risk (CP-3D) | Blocked | CONDITIONAL | No quotes; the notes give period-end fair values only | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 |
| Portfolio limits | None | Fund constraints and holdings | Committee decision (CP-6) | Inapplicable: not requested | Not rated: not requested | No portfolio supplied | Run settings |
| Review and snapshot modules | None | Outputs of the requested modules | Evidence validation (CP-5); Short credit snapshot (CP-L10) | Inapplicable: not requested | Not rated: not requested | Not part of the requested modules | Run settings |
| Earlier run | None | A prior run of the same issuer and pathway | Changes since the last run (CP-8) | Inapplicable: no earlier run | Not rated: no earlier run | The run record states this is the first run of the pathway for the issuer | Run settings |
| Named research needs | None | Questions for outside research | Research questions (CP-DR) | Inapplicable: not requested | Not rated: not requested | Run settings list no questions; the 2026 proxy statement and filings after 2026-11-04 are the open sources | Run settings |

### T6 - Evidence trace

| Evidence ID | Fact established | Source | Active representation | Supports |
|---|---|---|---|---|
| EV-01 | Registrant is Medline Inc., Delaware, Class A common stock on Nasdaq as MDLN | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 1 | Page text | Input gate |
| EV-02 | Medline Inc. is a holding company whose material assets are its interests in Medline Holdings, LP and subsidiaries | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 13 | Page text | Input gate |
| EV-03 | The reorganization was accounted for under common control at historical carrying amounts | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 164 | Page text | Input gate; Gaps |
| EV-04 | Fiscal year ends December 31; quarters follow a four-four-five week calendar ending on Saturdays | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 165 | Page text | Gaps |
| EV-05 | Balance sheet at 2026-09-26: cash 2,321; short-term investments 1,287; current borrowings 29; long-term borrowings 12,551; tax receivable agreement liability 4,403 (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9 | Page text | Content map |
| EV-06 | Income statement for three and nine months 2026 and 2025 | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 9–10 | Page text | Content map |
| EV-07 | Nine-month cash flow 2026 and 2025; cash interest paid 362 (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 11–12 | Page text | Content map |
| EV-08 | Principal debt 12,743 by class and the maturity schedule by year (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 19; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 | Page text | Content map; Calculations |
| EV-09 | Revolver of 1,000 with availability 962 after letters of credit of 38, nothing drawn (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 23 | Page text | Content map; Calculations |
| EV-10 | Springing first-lien net leverage covenant of 8.3x, tested only when revolver borrowings exceed 35% of commitments; not tested at 2026-09-26 | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 69 | Page text | Content map |
| EV-11 | Adjusted EBITDA reconciliation: 960 for Q3 2026, 2,796 for nine months 2026, 2,662 for nine months 2025 (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62 | Page text | Calculations |
| EV-12 | Trailing twelve month Adjusted EBITDA 3,601; net debt 9,135; Net Leverage 2.5 on total debt 12,743 (USD million) | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12 | Page text | Calculations; Gaps |
| EV-13 | FY2025 Adjusted EBITDA 3,467 and interest expense, net 812 (USD million) | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 137; 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 159 | Page text | Calculations |
| EV-14 | After the quarter end the issuer prepaid 750 of the 2033 refinancing term loan from cash, authorised a repurchase program of up to 1 billion and communicated a voluntary field action on Medline Brand beds to customers | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 45 | Page text | Gaps |
| EV-15 | Segment Adjusted EBITDA: Medline Brand 943 and Supply Chain Solutions 184 for Q3 2026, with Corporate & Other of (167) (USD million) | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 11 | Page text | Calculations |
| EV-16 | Full-year 2026 Adjusted EBITDA guidance of 3.3 billion to 3.4 billion excludes the net tariff refund benefit of 324 million recognised in nine months 2026 | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 2; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 4 | Page text | Gaps |
| EV-17 | Directors, compensation, ownership and related-party items of the annual report are incorporated from a proxy statement | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 217–218 | Page text | Gaps |
| EV-18 | The credit agreement, amendments and indentures are exhibits of the annual report and the Q2 2026 report | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 218–222; 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 71 | Page text | Gaps; Content map |
| EV-19 | The only rating-agency name found in any source is a stock index in the performance graph | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 124 | Page text | Gaps |
| EV-20 | Audited FY2024, FY2023 and FY2022 statements of Medline Holdings, LP | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 420–423 | Page text | Content map; Gaps |
| EV-21 | Offering price and pro forma amounts are blank in the summary data | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, page 45 | Page text | Source register |
| EV-22 | Management, compensation, related-person transactions and ownership sections of the registration statement | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 264–357 | Page text | Content map; Gaps |
| EV-23 | Description of the credit facilities and notes as summarised in the registration statement | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 358–370 | Page text | Gaps |
| EV-24 | Management's report on internal control and the auditor's attestation are omitted for a newly public company | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 216 | Page text | Source register |
| EV-25 | Fair value of each debt class, based on third-party trade prices (Level 2) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 | Page text | Gaps |
| EV-26 | Tracy distribution center fire, tariff refunds and FDA warning letters | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 49–51 | Page text | Content map |
| EV-27 | Bed discontinuation costs stated as 50 to 200 in the subsequent events note and 60 to 210 in the discussion (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 45; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 51 | Page text | Gaps |
| EV-28 | Tax receivable agreement liability 4,415, of which 12 is current (USD million) | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 25 | Page text | Content map |
| EV-29 | Q1 2026 balance sheet, income statement and Adjusted EBITDA of 776 (USD million) | 10-Q_2026-03-28_mdln-20260328.htm.jsonl, pages 7–8; 10-Q_2026-03-28_mdln-20260328.htm.jsonl, page 45; EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1 | Page text | Calculations |
| EV-30 | Q2 2026 balance sheet and Adjusted EBITDA of 1,060 (USD million) | 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 8; EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 10 | Page text | Calculations |
| EV-31 | Business of Medline Brand and Supply Chain Solutions, about 190,000 products and Prime Vendor agreements | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 12–13 | Page text | Content map |
| EV-32 | Designating stockholders hold about 67.0% of voting power; common unitholders hold 38.2% of common units | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 106–107 | Page text | Content map |
| EV-33 | Document dates: 10-K signed 2026-02-25; 10-Qs signed 2026-05-06, 2026-08-05 and 2026-11-04 | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 225; 10-Q_2026-03-28_mdln-20260328.htm.jsonl, page 54; 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 72; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 74 | Page text | Events |

## Findings

### Bottom line

The supplied filings and releases support the requested credit snapshot of Medline Inc. through the quarter ended September 26, 2026, with limits: no executed debt documents, ratings or market quotes, so covenant, structural and pricing views would rest on the issuer's own summaries.
Basis: 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 1; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 218–222

The 2025 annual report, the three 2026 quarterly reports with their releases and the audited 2024 statements allow annual and quarterly series to be built, with the fourth quarter of 2025 derived by subtraction. Three points need care rather than repair. Reported Adjusted EBITDA includes tariff refund benefits that the full-year guidance excludes. The release's net leverage uses principal debt, not the balance-sheet carrying value. The term loan prepayment of USD 750 million after quarter end is not reflected in published net debt. Nothing later than November 4, 2026 is covered.
Basis: 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 158–161; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 9–12; S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 420–423; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 2–4; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 45; calculation CALC-4; calculation CALC-9

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
|---|---|---|---|---|---|---|
| 2025-11-04 | day | 2025-11-04 | Amendment No. 1 to the IPO registration statement filed, carrying audited FY2024, FY2023 and FY2022 statements | Historical — "As filed with the Securities and Exchange Commission on November 4, 2025" | S-1-A_2024-audited-financial-statements_medline.htm.jsonl, page 1 | Only source for FY2022 and the only one with full management, compensation and related-party sections |
| 2026-02-25 | day | 2026-02-25 | Annual report on Form 10-K for FY2025 signed | Historical — "Date: February 25, 2026" | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 225 | Latest audited year and the first annual report after the IPO |
| 2026-05-06 | day | 2026-05-06 | Quarterly report on Form 10-Q for Q1 2026 signed | Historical — "Date: May 6, 2026" | 10-Q_2026-03-28_mdln-20260328.htm.jsonl, page 54 | Starts the 2026 quarterly series |
| 2026-05-06 | day | 2026-05-06 | Earnings release for Q1 2026 issued | Historical — "May 6, 2026" | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1 | States Q1 2026 Adjusted EBITDA used to check the nine-month total |
| 2026-08-05 | day | 2026-08-05 | Quarterly report on Form 10-Q for Q2 2026 signed | Historical — "Date: August 5, 2026" | 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 72 | Carries the quarter that includes the refinancing and the distribution center fire |
| 2026-08-05 | day | 2026-08-05 | Earnings release for Q2 2026 issued | Historical — "August 5, 2026" | EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 1 | States Q2 2026 Adjusted EBITDA and the first trailing twelve month figure |
| 2026-11-04 | day | 2026-11-04 | Quarterly report on Form 10-Q for Q3 2026 signed | Historical — "Date: November 4, 2026" | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 74 | Latest financial statements and subsequent events in the set; nothing later is covered |
| 2026-11-04 | day | 2026-11-04 | Earnings release for Q3 2026 issued | Historical — "November 4, 2026" | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 1 | States Net Leverage and the guidance basis used in Gaps |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 33 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 9 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 0 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 0 |
| MINOR | 7 |

## Calculations

Each row checks that sources agree or that a derived period can be built from them; none is a credit measure.

| ID | Check | Inputs (USD million) | Result | Source |
|---|---|---|---|---|
| CALC-1 | Trailing twelve month Adjusted EBITDA to Q3 2026 | FY2025 3,467 + nine months 2026 2,796 − nine months 2025 2,662 | 3,601; equals the release's trailing twelve month figure of 3,601 | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 137; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 11 |
| CALC-2 | Trailing twelve month interest expense, net | FY2025 812 + nine months 2026 373 − nine months 2025 646 | 539; equals the release's trailing twelve month figure of 539 | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 159; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 11 |
| CALC-3 | Net debt and Net Leverage on the release's definition | Total debt 12,743 − cash 2,321 − short-term investments 1,287 = 9,135; 9,135 ÷ 3,601 | Net debt 9,135; 2.5368x, shown by the release as 2.5 | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 19 |
| CALC-4 | Principal debt against balance-sheet debt | Principal 12,743; balance sheet 29 + 12,551 = 12,580; 12,743 − 12,580 | 163; the notes show deferred financing costs and an embedded derivative of 164, less other short-term debt of 1 that sits outside the principal table | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 19 |
| CALC-5 | Maturity schedule against principal debt | 14 + 28 + 27 + 8,027 + 28 + 4,619 | 12,743; equals principal debt | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 19; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 |
| CALC-6 | Revolver availability | Commitments 1,000 − letters of credit 38 | 962; equals the stated availability | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 23 |
| CALC-7 | Segment Adjusted EBITDA against the total | Nine months 2026: 2,775 + 575 − 554 = 2,796; Q3 2026: 943 + 184 − 167 = 960 | Both equal the reconciled totals of 2,796 and 960 | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, page 11; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62 |
| CALC-8 | Quarterly Adjusted EBITDA against the nine-month total | Q1 776 + Q2 1,060 + Q3 960 | 2,796; equals the nine-month total | EX-99.1_2026-05-06_ex9911q26pressrelease.htm.jsonl, page 1; EX-99.1_2026-08-05_ex9912q26pressrelease.htm.jsonl, page 10; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 62 |
| CALC-9 | Derived fourth quarter 2025 is possible: inputs are present | FY2025 net sales 28,432 − nine months 2025 net sales 20,645 | 7,787; shown only to prove the inputs exist, not as an analytical value | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 159; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9 |

## Gaps

Severity is measured against the requested modules; rows marked outside them would block modules that this run does not request.

| Gap | Severity | What could not be established | Effect on the work | Source |
|---|---|---|---|---|
| Executed debt documents | MINOR | The credit agreement and its amendments, the indentures and the security and guarantee documents are listed as exhibits but are not in the set, and the run settings declare none; guarantor lists, collateral terms and covenant definitions are known only from the filings' summaries | Financial foundation and Fundamental credit read debt terms from the notes and say so; the legal, covenant, structural and recovery modules cannot run on executed terms | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 218–222; 10-Q_2026-06-27_mdln-20260627.htm.jsonl, page 71 |
| Credit ratings | Outside the requested modules | No rating or rating-agency view appears in any of the eight sources or in the run settings; the only agency name found is a stock index | Ratings & triggers cannot run | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 124 |
| Market quotes and peer data | Outside the requested modules | No bond or loan prices, spreads or peer financials; the 10-Q gives period-end fair values of each debt class from third-party trade prices | Market-implied risk and Peer benchmark cannot run; Fundamental credit may use the fair values as one indicator | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 22 |
| Current governance record | MINOR | The 2026 proxy statement is not supplied, and the registration statement's ownership tables show no share counts or percentages; board, committee, pay and related-party detail is as of the registration statement, while holder-level ownership appears only as aggregate percentages in the annual report's risk factors | Business & governance states governance as of the registration statement and labels it outdated | 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 106–107; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 217–218; S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 264–357 |
| Coverage after 2026-11-04 | MINOR | No document is dated after the Q3 2026 report and release; filings or events between 2026-11-05 and 2026-11-18 are not established | Treated as not established, not as absence of events | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 74 |
| Prepayment after the quarter end | MINOR | The issuer states a prepayment of USD 750 million of the 2033 refinancing term loan from cash on hand and an expected loss on extinguishment of about USD 21 million, but publishes no pro forma debt, cash or leverage; the release's net leverage is struck on balance-sheet figures | Financial foundation shows it as a post-balance-sheet item and does not blend it into period-end net debt; pro forma leverage is not established | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, pages 44–45; EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12 |
| Adjusted EBITDA basis | MINOR | Reported Adjusted EBITDA for nine months 2026 includes net tariff refund benefits of USD 324 million, while full-year Adjusted EBITDA guidance of USD 3.3 billion to USD 3.4 billion excludes them; both bases are stated and neither is chosen here | Financial foundation shows reported and guidance bases side by side | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 2–4 |
| Debt basis for leverage | MINOR | The release's net debt of USD 9,135 million and Net Leverage of 2.5x use principal debt of USD 12,743 million and deduct short-term investments of USD 1,287 million, whereas the balance sheet carries debt of USD 12,580 million (calculation CALC-4) | Financial foundation logs both bases and the USD 163 million difference | EX-99.1_2026-11-04_ex9913q26pressrelease.htm.jsonl, pages 11–12; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 9; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 19 |
| Recall cost range | MINOR | The 10-Q states two ranges for the bed discontinuation and field action: USD 50 million to USD 200 million in the subsequent events note and USD 60 million to USD 210 million in the discussion, the second described as including inventory write-downs; the filing does not reconcile them | Both ranges are kept wherever the cost is used | 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 45; 10-Q_2026-09-26_mdln-20260926.htm.jsonl, page 51 |
| Perimeter and presentation across the IPO | Resolved | The registrant changed from the partnership Medline Holdings, LP to Medline Inc. at the IPO, but the reorganization was accounted for under common control at historical amounts; FY2024 total liabilities of USD 19,454 million and operating cash flow of USD 1,769 million agree between the annual report and the registration statement; only presentation differs, as the annual report folds income taxes payable of USD 4 million into accrued expenses and fiscal quarters end on Saturdays while the year ends December 31 | Financial foundation labels each period with its basis; no repair needed | 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 159; 10-K_2025-12-31_mdln-20251231.htm.jsonl, page 161; 10-K_2025-12-31_mdln-20251231.htm.jsonl, pages 164–165; S-1-A_2024-audited-financial-statements_medline.htm.jsonl, pages 420–423 |

## Next module

The orchestrator selects the next module.
