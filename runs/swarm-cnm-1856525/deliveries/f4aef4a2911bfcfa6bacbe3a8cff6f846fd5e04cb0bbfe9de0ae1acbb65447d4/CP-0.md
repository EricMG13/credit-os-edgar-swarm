---
module_id: CP-0
module_name: SourceReadiness
issuer_id: cnm-1856525
analysis_date: 2026-11-18
run_id: cnm-1856525-2026-11-18-credit_snapshot-host
method_version: deploy-v-r14
pathway: credit_snapshot
---

# CP-0 Source readiness for Core & Main, Inc. (cnm-1856525), as of 2026-11-18

## Request

Source readiness for Core & Main, Inc. (issuer id cnm-1856525), as of 2026-11-18, on the credit snapshot pathway. The scope is whether the seven supplied issuer documents can support the requested analytical work and what remains missing.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-01-28_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended January 28, 2024 | 2024-03-19 (signature page and auditor's report) | 7d49a2886a7b87956b9b3c00170119569c12f68ef6f9901dc1e2c0c33d36ab4a | Fiscal 2023 audited statements, debt note and subsequent-event note; earliest annual comparison and history of the term loans. |
| 10-K_2025-02-02_cnm.htm.jsonl | Annual report on Form 10-K for the fiscal year ended February 2, 2025 | 2025-03-25 (auditor's report; the signature page prints 2024-03-25) | e22a4f864a5fbd988927e6678e529c0188660ca06badc8d8df757277e51e3278 | Fiscal 2024 audited statements, debt note, business and structure description; latest annual report supplied. |
| 10-Q_2026-05-03_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended May 3, 2026 | 2026-06-10 (signature page) | e961340eaef56046003419c49345b8385cc4758b7ed1e0f6ebe7c011c8ca7772 | First-quarter fiscal 2026 statements, April 2026 asset-based facility amendment, exhibit list. |
| 10-Q_2026-08-02_cnm.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended August 2, 2026 | 2026-09-09 (signature page) | 28b726b3f6668bcdd97245f0621ab2882b59eb8ea624fb56e28ade1353c29582 | Latest balance sheet and six-month statements, debt note, liquidity, July 2026 refinancing, August 2026 subsequent event, exhibit list. |
| EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 first quarter results | 2026-06-10 (dateline) | 477e5f3e43d234f37f42b280aadf2b1519060085427091f1fc6c99c4a3062f24 | First-quarter results, net debt table, Adjusted EBITDA reconciliation, outlook. |
| EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the launch of a senior notes offering | 2026-06-25 (dateline) | cb8f146c390230ebda3e60db4c869cf724b254ec5081fea6559ffb69b3f490ec | Launch announcement, intended use of proceeds and guarantor group of the notes due 2034. |
| EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl | Press release (Exhibit 99.1) announcing fiscal 2026 second quarter results | 2026-09-09 (dateline) | da395e9c6715bf9c1e1ddee4a29d0807fc00729e5c3b140e2d774d335674b8b5 | Second-quarter results, net debt table, Adjusted EBITDA reconciliation, outlook. |

No earlier module output is supplied to this module, which is the first in the run.

## Findings

### Bottom line

The supplied filings support a credit snapshot of Core & Main, Inc. as at the second quarter of fiscal 2026, but not a trailing twelve-month leverage figure, because the annual report for the year ended February 1, 2026 is missing.
Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 11; 10-K_2025-02-02_cnm.htm.jsonl, page 1

The latest balance sheet is dated 108 days before the as-of date and no third-quarter material is supplied. The executed credit agreements, the indenture for the 2034 notes and their amendments are also absent, so covenant, guarantee and security conclusions can rest only on the quarterly report's own summaries. No credit rating level or market price is supplied.
Basis: calculation C1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 18–19; 10-Q_2026-08-02_cnm.htm.jsonl, pages 47–48

For creditors, net debt, cash and revolver availability at the end of the second quarter can be read directly from the filings, while leverage and coverage have to be shown on six-month results or company guidance and labelled as such.
Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 36; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 5, 12

### P3 - Input sources

| Source ID | Source | Original file | Original sha256 | Document family | Authority tier | Entity and perimeter | Reporting period | Version link |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-01-28_cnm.htm.jsonl, page 1 | 10-K_2024-01-28_cnm.htm | f423ec3cd4dcbff1243cbddb304b5cd0564c35d0e56627be55587e4c86d05171 | Annual report (Form 10-K) | 1 - primary filing, audited | Core & Main, Inc. (registrant; holding company) consolidated with Core & Main Holdings, LP and Core & Main LP, the operating entity | Fiscal 2023, year ended 2024-01-28 | Earlier of two annual reports; its note on subsequent events shows the 2031 term loan at USD 750 million, later raised to USD 944 million (see S2). |
| S2 | 10-K_2025-02-02_cnm.htm.jsonl, page 1 | 10-K_2025-02-02_cnm.htm | c0e7295eb8661ac72eba98cc6d06a013f5bed78936ac1e2d65b7adb630c78862 | Annual report (Form 10-K) | 1 - primary filing, audited | Core & Main, Inc. (registrant; holding company) consolidated with Core & Main Holdings, LP and Core & Main LP, the operating entity | Fiscal 2024, year ended 2025-02-02 | Follows S1 and carries its fiscal 2023 comparatives; precedes the unsupplied annual report for the year ended 2026-02-01. |
| S3 | 10-Q_2026-05-03_cnm.htm.jsonl, page 1 | 10-Q_2026-05-03_cnm.htm | a6de1fcceace15aad8892ddf475717dea93342791907f4984c63001a8707914f | Quarterly report (Form 10-Q) | 1 - primary filing, unaudited | Core & Main, Inc. (registrant; holding company) consolidated with Core & Main Holdings, LP and Core & Main LP, the operating entity | Quarter ended 2026-05-03 | Follows S2 in time; its balances at 2026-05-03 are superseded by S4; same period as S5. |
| S4 | 10-Q_2026-08-02_cnm.htm.jsonl, page 1 | 10-Q_2026-08-02_cnm.htm | c833f2b7c77d6aa79e0c07e64bf92f8ab6da5b2c10e131f84e211d5427955046 | Quarterly report (Form 10-Q) | 1 - primary filing, unaudited | Core & Main, Inc. (registrant; holding company) consolidated with Core & Main Holdings, LP and Core & Main LP, the operating entity | Quarter and six months ended 2026-08-02 | Latest periodic filing supplied; reports the July 2026 refinancing and the August 2026 repricing; same period as S7. |
| S5 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 1 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm | 93be81f546a1f1a835bc7eb696f8da3009d038feec2fc3e9413ca06d2c668094 | Earnings release (Exhibit 99.1) | 2 - issuer release, unaudited, management-defined non-GAAP measures | Core & Main, Inc. consolidated | Quarter ended 2026-05-03 | Same period as S3. |
| S6 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm | 75e3d7a6871d710d9e2b95c4b9e00d6a59b727209b91a61ec950e4db0fe1411d | Offering announcement (Exhibit 99.1) | 2 - issuer release | Core & Main LP as issuer of the notes; guarantors Core & Main Midco, LLC and Core & Main Intermediate GP, LLC | No financial period; announced 2026-06-25 | Launch notice only; the completed 6.0% notes due 2034 are reported in S4. |
| S7 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm | c0b9f436bf70b0ed10f091f45d67fd69b9b476d1a8a7e7122c3f702f5ea38ca6 | Earnings release (Exhibit 99.1) | 2 - issuer release, unaudited, management-defined non-GAAP measures | Core & Main, Inc. consolidated | Quarter and six months ended 2026-08-02 | Same period as S4. |

### T1 - Input gate

| Item | Value | Source |
| --- | --- | --- |
| Run | cnm-1856525-2026-11-18-credit_snapshot-host | Run settings |
| Objective | Credit snapshot: the selected pathway's use case; no separate objective is stated | Run settings |
| Issuer and reporting perimeter | Core & Main, Inc. (NYSE: CNM), a holding company; statements are consolidated with Core & Main Holdings, LP and Core & Main LP, the operating entity that is borrower and note issuer; Holdings partnership interests not held by the registrant are non-controlling interests | 10-Q_2026-08-02_cnm.htm.jsonl, page 1; 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 11 |
| As-of date and cutoff | 2026-11-18; the latest supplied document is dated 2026-09-09 and none is dated after the cutoff | 10-Q_2026-08-02_cnm.htm.jsonl, page 48; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 |
| Periods | Current period q2-2026 (quarter ended 2026-08-02); prior period fy-2025 (year ended 2026-02-01), whose annual report is not supplied | Run settings; 10-Q_2026-08-02_cnm.htm.jsonl, page 11 |
| Fiscal calendar | 52- or 53-week year ending on the Sunday nearest January 31, with 13-week quarters; fiscal 2026 ends 2027-01-31 and has 52 weeks | 10-Q_2026-08-02_cnm.htm.jsonl, page 12; 10-Q_2026-05-03_cnm.htm.jsonl, page 22 |
| Modules requested | CP-0, CP-1, CP-1A, CP-2 | Run settings |
| Issuer sources received | Seven documents: two annual reports, two quarterly reports and three press releases | Sources section |
| Run inputs not supplied | Legal documents, credit ratings, market quotes, peer set, portfolio, earlier run of this pathway, management bridge | Run settings |
| Preparation validation | Completed before this module began; no result is recorded here | Not applicable |
| Source status | Partial | T4 and Gaps section |
| Overall readiness for the objective | READY_WITH_LIMITATIONS | T4 |

### T2 - Source register

| Source ID | Source | Document | Authority and quality | Active representation | Extraction confidence | Usability | Limitation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 10-K_2024-01-28_cnm.htm.jsonl, page 1 | Form 10-K, fiscal 2023, year ended 2024-01-28 | Tier 1; audited; auditor's report dated 2024-03-19 | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable with limitations | History only: the credit facilities it reports have since been refinanced. |
| S2 | 10-K_2025-02-02_cnm.htm.jsonl, page 1 | Form 10-K, fiscal 2024, year ended 2025-02-02 | Tier 1; audited; auditor's report dated 2025-03-25 | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable with limitations | One annual cycle behind the year ended 2026-02-01; signature page prints 2024-03-25; Part III incorporated from a proxy statement that is not supplied. |
| S3 | 10-Q_2026-05-03_cnm.htm.jsonl, page 1 | Form 10-Q, quarter ended 2026-05-03 | Tier 1; unaudited | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable with limitations | Balances at 2026-05-03 are superseded by S4; exhibits (for example Amendment No. 6 to the ABL credit agreement) are listed but not supplied. |
| S4 | 10-Q_2026-08-02_cnm.htm.jsonl, page 1 | Form 10-Q, quarter and six months ended 2026-08-02 | Tier 1; unaudited | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable with limitations | Latest balance sheet is 108 days before the as-of date; executed financing documents are listed as exhibits but not supplied; a subsequent-event note states the August 2026 repricing in one sentence. |
| S5 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 1 | Earnings release, quarter ended 2026-05-03 | Tier 2; unaudited; non-GAAP measures defined by management | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable | Net debt is stated gross of issuance costs, which differs from the balance sheet carrying value. |
| S6 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 | Offering launch release, 2026-06-25 | Tier 2 | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable with limitations | Announces launch only; coupon, pricing and closing are not in this document and come from S4. |
| S7 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 | Earnings release, quarter and six months ended 2026-08-02 | Tier 2; unaudited; non-GAAP measures defined by management | Page-text file as supplied; the HTML original is provenance only | HIGH; tables arrive as flat text lines and column order is read from the headers | Usable | Net debt is stated gross of issuance costs; Adjusted EBITDA uses a depreciation and amortization figure that includes depreciation in cost of sales. |

### T4 - Content-to-module map

| Module | Run status | Evidence demand | Active sources | Readiness | Readiness effect and limitation | Source |
| --- | --- | --- | --- | --- | --- | --- |
| CP-1 Financial foundation | Requested in this run | Income statement, balance sheet, cash flow and notes for annual and interim periods; net debt and debt table; claims outside debt (tax receivable agreement liabilities, operating leases, purchase obligations); EBITDA reconciliation; cash interest and tax; liquidity inputs | S1, S2, S3, S4, S5, S7 | READY_WITH_LIMITATIONS | Statements exist for fiscal 2023, fiscal 2024, the first quarter and first half of fiscal 2026 with prior-year comparatives, and the 2026-02-01 balance sheet. Fiscal 2025 annual statements are not supplied, so trailing twelve-month figures are Not calculable. Releases state net debt gross of issuance costs while the balance sheet states carrying value, so both bases are needed. Tax receivable agreement liabilities, lease liabilities and supplier purchase obligations are stated outside the debt figures. | 10-K_2025-02-02_cnm.htm.jsonl, pages 106, 108, 127; 10-Q_2026-08-02_cnm.htm.jsonl, pages 5, 6, 16, 36, 40; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 9, 11, 12 |
| CP-1A Business & governance | Requested in this run | Business description, ownership and corporate structure, issuer and guarantor of each debt instrument, management and governance events, capital allocation | S2, S3, S4, S6 | READY_WITH_LIMITATIONS | Holding-company structure, the repurchase program and the guarantor group of the 2034 notes are stated. The annual report for the year ended 2026-02-01 and the proxy statements are not supplied, so current ownership percentages and governance terms are not sourced beyond share counts. | 10-K_2025-02-02_cnm.htm.jsonl, pages 2, 6; 10-Q_2026-08-02_cnm.htm.jsonl, pages 10, 47; EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1; 10-Q_2026-05-03_cnm.htm.jsonl, page 43 |
| CP-2 Fundamental credit | Requested in this run | Operating drivers, end-market mix, earnings trend, leverage, coverage, liquidity, debt structure, outlook and the limits of each | S1, S2, S3, S4, S5, S6, S7 | READY_WITH_LIMITATIONS | Operating and liquidity inputs through 2026-08-02 are sourced. Leverage and coverage are limited to six-month results and the fiscal 2026 guidance because trailing twelve-month figures are Not calculable. No rating level, market price or peer set is supplied, and legal terms come from summaries. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 26, 36; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 5, 11, 12 |
| CP-1B Earnings changes | Not requested in this run | Quarterly and year-to-date results against prior-year periods, guidance and its reaffirmation | S3, S4, S5, S7 | READY_WITH_LIMITATIONS | First- and second-quarter results with comparatives and the reaffirmed fiscal 2026 outlook are stated; no fiscal 2025 full-year result is supplied. | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, pages 1, 3; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 1, 5 |
| CP-1D Earnings quality | Not requested in this run | Adjusted EBITDA add-backs, non-GAAP definitions, cash conversion | S2, S4, S5, S7 | READY_WITH_LIMITATIONS | Reconciliations for 2025 and 2026 interim periods show equity-based compensation and other expense add-backs; no annual reconciliation after fiscal 2024 is supplied. | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 10; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 10, 11 |
| CP-1C Peer benchmark | Not requested in this run | Peer financials and a peer set | None | CONDITIONAL | No peer filing or peer set is in the supplied set. | No supplied document addresses this |
| CP-2D Liquidity | Not requested in this run | Unrestricted cash, undrawn facilities net of letters of credit, near-term maturities and obligations | S4, S7 | READY_WITH_LIMITATIONS | Cash, ABL capacity, letters of credit and current maturities at 2026-08-02 are stated; nothing later is supplied. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 36, 40; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 |
| CP-3C Refinancing & LME | Not requested in this run | Maturities, redemption terms, refinancing events | S3, S4, S6 | READY_WITH_LIMITATIONS | Maturities, the July 2026 refinancing and the call terms of the 2034 notes are stated in summary; the amendment and indenture texts are not supplied. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 18; EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 |
| CP-2E Rates, FX & hedging | Not requested in this run | Swap terms, floating-rate exposure, sensitivity statements | S4 | READY_WITH_LIMITATIONS | Swap notional, fixed rate and maturity and the interest-rate sensitivity statement are in the second-quarter report; the swap confirmation is not supplied. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 19, 43 |
| CP-2A Downside | Not requested in this run | Statement and liquidity inputs for stress cases | S2, S4, S7 | READY_WITH_LIMITATIONS | Inputs are those of Financial foundation and Liquidity, with the same trailing twelve-month limitation. | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 5, 12 |
| CP-2G Forward credit model | Not requested in this run | Four discrete quarters, fiscal-year actuals, segment and driver history | S2, S3, S4, S5, S7 | CONDITIONAL | Fiscal 2025 annual actuals and the third and fourth quarters of fiscal 2025 are not supplied. | 10-Q_2026-08-02_cnm.htm.jsonl, page 11 |
| CP-2H Ratings & triggers | Not requested in this run | Rating levels, outlooks, rating triggers | None | CONDITIONAL | The annual reports say ratings exist but no document states a rating, agency or outlook. | 10-K_2025-02-02_cnm.htm.jsonl, page 57 |
| CP-4 Legal & covenants, with Covenant capacity, Structural priority, Intercreditor control and Recovery & fulcrum | Not requested in this run | Executed credit agreements, indenture, amendments, security and guarantee documents | S4 summaries only | CONDITIONAL | No executed financing document is supplied; the quarterly report summarizes covenants, collateral and the guarantor group only. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 18–19; 10-Q_2026-08-02_cnm.htm.jsonl, pages 47–48 |
| CP-3 Security selection and CP-3D Market-implied risk | Not requested in this run | Instrument terms documents, market quotes | S4 fair values only | CONDITIONAL | Fair values in the quarterly report are level 2 quotes from financial institutions, not trading prices; no market quote is supplied. | 10-Q_2026-08-02_cnm.htm.jsonl, pages 16, 18 |
| CP-6 Committee decision | Not requested in this run | Portfolio and mandate inputs | None | CONDITIONAL | No portfolio workbook or mandate is supplied. | No supplied document addresses this |
| CP-DR Research questions, CP-5 Evidence validation, CP-8 Changes since the last run | Not requested in this run | Research questions; module outputs to validate; an earlier run of this pathway | None | Not applicable | No research question is stated, validation applies to module outputs rather than sources, and this is the first run of this pathway for the issuer. | No supplied document addresses this |

### T6 - Evidence trace

| Evidence ID | Source | Original source | Locator | Fact established |
| --- | --- | --- | --- | --- |
| E1 | 10-Q_2026-08-02_cnm.htm.jsonl, page 1 | S4 | Cover page | Quarterly report for the quarter ended August 2, 2026; Class A shares outstanding 184,192,708 and Class B 6,301,342 as of September 4, 2026. |
| E2 | 10-Q_2026-08-02_cnm.htm.jsonl, page 48 | S4 | Signature page | Quarterly report signed September 9, 2026; Seventh Amendment to the Term Loan Credit Agreement dated August 11, 2026 listed as an exhibit filed with it. |
| E3 | 10-Q_2026-08-02_cnm.htm.jsonl, page 11 | S4 | Note 1, basis of presentation | February 1, 2026 balance sheet is derived from audited statements in the annual report for the fiscal year ended February 1, 2026, which is read with the report but is not a supplied document. |
| E4 | 10-Q_2026-08-02_cnm.htm.jsonl, page 6 | S4 | Condensed consolidated balance sheet, liabilities | At 2026-08-02 current maturities of long-term debt USD 17 million, long-term debt USD 2,432 million, tax receivable agreement liabilities USD 644 million, current operating lease liabilities USD 79 million and non-current operating lease liabilities USD 221 million (2026-02-01: USD 24 million, USD 2,124 million, USD 680 million, USD 75 million, USD 214 million). |
| E5 | 10-Q_2026-08-02_cnm.htm.jsonl, page 5 | S4 | Condensed consolidated balance sheet, assets | Cash and cash equivalents USD 312 million at 2026-08-02 (USD 220 million at 2026-02-01). |
| E6 | 10-Q_2026-08-02_cnm.htm.jsonl, page 16 | S4 | Note 6, debt: Senior Term Loan Credit Facility | July 1, 2026 amendment refinanced the remaining 2028 term loan with a USD 800 million term loan maturing July 1, 2033; the 2031 term loan is USD 944 million maturing February 9, 2031. |
| E7 | 10-Q_2026-08-02_cnm.htm.jsonl, page 18 | S4 | Note 6, debt: ABL facility and 2034 notes | April 9, 2026 ABL amendment extended maturity to April 9, 2031 (capacity USD 1,250 million); on July 1, 2026 Core & Main LP issued USD 750 million senior unsecured notes due July 1, 2034 at 6.0%. |
| E8 | 10-Q_2026-08-02_cnm.htm.jsonl, page 19 | S4 | Note 6, debt: covenants and collateral | Excess-cash-flow repayment trigger at a Consolidated Secured Leverage Ratio of 3.25 or more (the sentence begins on the previous page); fixed charge coverage ratio of at least 1.00 when ABL availability is below 10.0%; compliance reported at 2026-08-02; substantially all Core & Main LP assets pledged; interest rate swap notional USD 1,500 million to July 27, 2028. |
| E9 | 10-Q_2026-08-02_cnm.htm.jsonl, page 23 | S4 | Note 12, subsequent events | August 2026 repricing of the 2031 term loan cut the Term SOFR margin from 2.00% to 1.75%. |
| E10 | 10-Q_2026-08-02_cnm.htm.jsonl, page 36 | S4 | MD&A, liquidity and capital resources | Cash USD 312 million; no ABL borrowings; about USD 24 million letters of credit; about USD 1,226 million available under the USD 1,250 million ABL. |
| E11 | 10-Q_2026-08-02_cnm.htm.jsonl, page 47 | S4 | Item 6, exhibits | Indenture and First Supplemental Indenture dated July 1, 2026 (issuer Core & Main LP; guarantors Core & Main Midco, LLC and Core & Main Intermediate GP, LLC) are incorporated by reference to a Form 8-K filed July 2, 2026 and are not supplied. |
| E12 | 10-Q_2026-08-02_cnm.htm.jsonl, page 12 | S4 | Note 1, fiscal year | Fiscal year is a 52- or 53-week period ending on the Sunday nearest January 31; quarters are 13 weeks. |
| E13 | 10-Q_2026-08-02_cnm.htm.jsonl, page 10 | S4 | Note 1, organization and repurchase program | Core & Main, Inc. is a holding company that indirectly owns Core & Main LP through Holdings; USD 412 million remained under the USD 1 billion repurchase authorization at 2026-08-02. |
| E14 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1 | S7 | Release headline | Second-quarter fiscal 2026 results released September 9, 2026 for the quarter ended August 2, 2026. |
| E15 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5 | S7 | Outlook | Fiscal 2026 outlook reaffirmed: net sales USD 7,800 to 7,900 million; Adjusted EBITDA USD 950 to 980 million; operating cash flow 60% to 70% of Adjusted EBITDA. |
| E16 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 10 | S7 | Non-GAAP definitions | Net Debt is defined as total consolidated debt gross of unamortized discounts and debt issuance costs, net of cash. |
| E17 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 11 | S7 | Adjusted EBITDA reconciliation | Adjusted EBITDA USD 274 million (three months) and USD 500 million (six months) to 2026-08-02, against USD 266 million and USD 490 million a year earlier. |
| E18 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 12 | S7 | Net debt table | At 2026-08-02 total debt USD 2,478 million, cash USD 312 million, net debt USD 2,166 million. |
| E19 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 | S6 | Release text | Launch of a USD 750 million senior notes offering due 2034 by Core & Main LP announced June 25, 2026; proceeds to prepay part of the term loan due July 27, 2028; guarantors Core & Main Midco, LLC and Core & Main Intermediate GP, LLC. |
| E20 | 10-Q_2026-05-03_cnm.htm.jsonl, page 22 | S3 | MD&A, significant events | April 9, 2026 amendment of the Senior ABL Credit Facility extended maturity from February 9, 2029 to April 9, 2031; fiscal 2026 ends January 31, 2027 with 52 weeks. |
| E21 | 10-Q_2026-05-03_cnm.htm.jsonl, page 43 | S3 | Signature page | First-quarter report signed June 10, 2026. |
| E22 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 1 | S5 | Release headline | First-quarter fiscal 2026 results released June 10, 2026 for the quarter ended May 3, 2026. |
| E23 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 11 | S5 | Net debt table | At 2026-05-03 total debt USD 2,160 million, cash USD 150 million, net debt USD 2,010 million. |
| E24 | 10-K_2025-02-02_cnm.htm.jsonl, page 106 | S2 | Auditor's report and balance sheet | Auditor's report dated March 25, 2025; balance sheet at 2025-02-02; fiscal 2024 net sales USD 7,441 million. |
| E25 | 10-K_2025-02-02_cnm.htm.jsonl, page 154 | S2 | Signature page | Signature page prints March 25, 2024, which precedes the fiscal year end of February 2, 2025. |
| E26 | 10-K_2025-02-02_cnm.htm.jsonl, page 127 | S2 | Note 6, debt | Debt at 2025-02-02: principal USD 2,283 million, unamortized discount and issuance costs USD 22 million. |
| E27 | 10-K_2025-02-02_cnm.htm.jsonl, page 128 | S2 | Note 6, debt: 2031 term loan | December 17, 2024 amendment raised the 2031 term loan by USD 200 million to USD 944 million. |
| E28 | 10-K_2024-01-28_cnm.htm.jsonl, page 110 | S1 | Auditor's report and balance sheet | Auditor's report dated March 19, 2024; balance sheet at 2024-01-28. |
| E29 | 10-K_2024-01-28_cnm.htm.jsonl, page 154 | S1 | Note 15, subsequent events | February 9, 2024: new USD 750 million seven-year term loan maturing February 9, 2031 (later increased to USD 944 million). |
| E30 | 10-K_2025-02-02_cnm.htm.jsonl, page 6 | S2 | Item 1, business | Core & Main, Inc. is a holding company whose primary assets are its interest in Core & Main Holdings, LP and related deferred tax assets. |
| E31 | 10-K_2025-02-02_cnm.htm.jsonl, page 2 | S2 | Cover page | Part III is incorporated by reference to the proxy statement for the 2025 annual meeting, which is not supplied. |
| E32 | 10-K_2025-02-02_cnm.htm.jsonl, page 57 | S2 | Item 1A, risk factors | Annual report says credit ratings exist and may change but does not state a rating, agency or outlook. |
| E33 | 10-Q_2026-08-02_cnm.htm.jsonl, page 40 | S4 | MD&A, purchase obligations | Supplier purchase obligations of USD 1,223 million at 2026-08-02, generally cancellable, with payments expected through the fiscal year ended January 30, 2028. |

### Events: Sources

| Event date | Date precision | Published | Event | Status | Source | Credit relevance |
| --- | --- | --- | --- | --- | --- | --- |
| 2024-03-19 | day | 2024-03-19 | Annual report for the year ended 2024-01-28 signed and audited | Historical — signature page and auditor's report dated March 19, 2024 | 10-K_2024-01-28_cnm.htm.jsonl, page 164; 10-K_2024-01-28_cnm.htm.jsonl, page 110 | Fixes the earliest annual period in the set; the facilities it reports have since been refinanced, so it supports history only. |
| 2025-03-25 | day | 2025-03-25 | Auditor's report on the fiscal year ended 2025-02-02 issued | Historical — auditor's report dated March 25, 2025 (signature page prints March 25, 2024) | 10-K_2025-02-02_cnm.htm.jsonl, page 106; 10-K_2025-02-02_cnm.htm.jsonl, page 154 | Latest annual report supplied; the printed signature-date conflict changes no figure but must be shown beside the document date. |
| 2026-06-10 | day | 2026-06-10 | First-quarter fiscal 2026 results released and quarterly report signed | Historical — dateline June 10, 2026 and signature date June 10, 2026 | EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 1; 10-Q_2026-05-03_cnm.htm.jsonl, page 43 | Source for the balance sheet at 2026-05-03 and the April 2026 facility amendment; superseded for balances by the second-quarter documents. |
| 2026-06-25 | day | 2026-06-25 | Senior notes offering launch release published | Historical — "today announced the launch of an offering" of USD 750 million senior notes due 2034 | EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1 | Only document that states the intended use of proceeds; final terms are in the second-quarter report. |
| 2026-08-02 | day | 2026-09-09 | Second quarter of fiscal 2026 ends; date of the latest balance sheet | Historical — second quarter ended August 2, 2026 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1; 10-Q_2026-08-02_cnm.htm.jsonl, page 1 | Every point-in-time balance in the run is read at this date, 108 days before the as-of date. |
| 2026-09-09 | day | 2026-09-09 | Second-quarter fiscal 2026 results released and quarterly report signed | Historical — dateline Sept. 9, 2026 and signature date September 9, 2026 | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 1; 10-Q_2026-08-02_cnm.htm.jsonl, page 48 | Latest document in the set; nothing later is supplied through the as-of date. |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 14 |
| Calculated | 3 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 1 |
| Insufficient Information | 4 |
| Fields present | 6 |
| Fields total | 6 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 7 |

## Calculations

| ID | Calculation | Inputs | Result | Unit | Source |
| --- | --- | --- | --- | --- | --- |
| C1 | Days from the latest balance-sheet date to the as-of date | 2026-08-02 to 2026-11-18: 29 days to August 31, 30 days of September, 31 days of October, 18 days of November | 108 | days | 10-Q_2026-08-02_cnm.htm.jsonl, page 1 |
| C2 | Days from the latest document date to the as-of date | 2026-09-09 to 2026-11-18: 21 days to September 30, 31 days of October, 18 days of November | 70 | days | 10-Q_2026-08-02_cnm.htm.jsonl, page 48 |
| C3 | End of the third quarter of fiscal 2026 on the company's calendar | 2026-08-02 plus one 13-week quarter of 91 days (29 + 30 + 31 + 1) | 2026-11-01 | date | 10-Q_2026-08-02_cnm.htm.jsonl, page 12 |
| C4 | Trailing twelve-month Adjusted EBITDA to 2026-08-02 (fiscal 2025 plus six months 2026 less six months 2025) | Six months 2026 USD 500 million; six months 2025 USD 490 million; fiscal 2025 Adjusted EBITDA Not supplied: no document gives it | Not calculable: fiscal 2025 input missing | USD million | EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 11 |

## Gaps

- Material gap: the annual report on Form 10-K for the year ended February 1, 2026 and the results release for that year are not supplied. Both quarterly reports refer to that annual report and carry its year-end balance sheet as a comparative, but no annual income statement, cash flow statement or Adjusted EBITDA for fiscal 2025 appears in any supplied document, and a search of every source for fiscal 2025, trailing and twelve-month figures found none. Trailing twelve-month leverage, coverage and cash conversion are therefore not calculable, and fiscal 2025 comparisons are limited to the balance sheet. The minimum remedy is that annual report.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, page 11; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 6; calculation C4
- Material gap: no executed financing document is supplied. The term loan credit agreement with its sixth and seventh amendments, the asset-based credit agreement with its latest amendment, and the indenture and first supplemental indenture for the 2034 notes appear only as exhibit references, and the run settings state that no legal documents were supplied. Covenant definitions, guarantor and security terms and the exact repricing terms can therefore be read only from the filings' own summaries. The minimum remedy is those agreements.
  Basis: 10-Q_2026-08-02_cnm.htm.jsonl, pages 47–48; 10-Q_2026-05-03_cnm.htm.jsonl, page 42
- Minor gap: no third-quarter material is supplied. The latest balance sheet is dated August 2, 2026 and the latest document September 9, 2026, while the third quarter of fiscal 2026 ends on November 1, 2026 on the company's 13-week calendar, so any later financing, repurchase or trading change is not visible.
  Basis: calculation C1; calculation C2; calculation C3; 10-Q_2026-08-02_cnm.htm.jsonl, page 12
- Minor gap: no credit rating level, agency or outlook and no market price for any instrument is supplied. The annual reports say ratings exist but name none, and the fair values of the term loans and the 2034 notes in the quarterly report are quotes from financial institutions at the second level of the fair value hierarchy, not trading prices.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, page 57; 10-Q_2026-08-02_cnm.htm.jsonl, pages 16–18
- Minor gap: no peer set, portfolio, earlier run of this pathway, management bridge or investor presentation is supplied. Both results releases say a slide presentation was made available on the company's website, but none is in the set.
  Basis: EX99.1_2026-05-03_cnm_cnmq12026earningspressrele-htm.htm.jsonl, page 4; EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, page 5
- Minor gap: the proxy statements incorporated by reference into Part III of both annual reports are not supplied, so director, compensation and ownership detail beyond the share counts on the cover pages is not sourced.
  Basis: 10-K_2024-01-28_cnm.htm.jsonl, page 2; 10-K_2025-02-02_cnm.htm.jsonl, page 2
- Minor conflict: the signature page of the annual report for the year ended February 2, 2025 prints March 25, 2024, which precedes the year end. The auditor's report in the same document is dated March 25, 2025 and the cover gives share counts as of March 21, 2025, so March 25, 2025 is used as the document date. No figure depends on the printed signature date.
  Basis: 10-K_2025-02-02_cnm.htm.jsonl, pages 2, 106, 154
- Minor conflict: the results releases state net debt on total debt gross of unamortized discounts and issuance costs, while the balance sheet carries debt net of those costs, and the Adjusted EBITDA reconciliation uses a depreciation and amortization figure that includes depreciation reported in cost of sales, which differs from the income statement line. Financial foundation should show each basis with its definition; neither is a source error.
  Basis: EX99.1_2026-08-02_cnm_cnmq22026earningspressrele-htm.htm.jsonl, pages 8–12
- Minor note: the file names carry the period of the filing each document accompanied, not the document's own date. The senior notes launch release is named for the quarter ended May 3, 2026 but is dated June 25, 2026, so the dateline governs.
  Basis: EX99.1_2026-05-03_cnm_jun2026seniornoteslaunchpr-htm.htm.jsonl, page 1

## Next module

The orchestrator selects the next module.
