# Embecta Corp. (embc-1872789): financial foundation as of 2026-11-18

## Request

Financial foundation for Embecta Corp. (issuer id embc-1872789), as of 2026-11-18, on the credit snapshot pathway. Scope: normalised statements, debt, net debt, leverage, cover and liquidity inputs for fiscal 2023 to 2025 and the nine months to 2026-06-30, from the nine supplied filings and releases.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-09-30_embc.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2024 | 2024-12-11 | 5589b293fe64b9126d94b4c5e2eebf9a4aca79f08691da8a8029e3a871e8dbab | Fiscal 2023 balance sheet and fiscal 2022 to 2024 statements, 2024 debt and cash interest |
| 10-K_2025-09-30_embc.htm.jsonl | Annual report on Form 10-K for the fiscal year ended September 30, 2025 | 2025-11-25 | 8c6d61f1340856eb552fea65ce0855b9f9eca00ec71c4a3cd7255164c167749b | Fiscal 2023 to 2025 statements, debt note, supplemental cash flow information, receivable sale, revenue by region and product |
| 10-Q_2025-12-31_embc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended December 31, 2025 | 2026-02-05 | 44593d75f82cc13e420e7e4ea7346f905bc1e71d3fc226d70a359fd72659df72 | Balance sheet and debt at 2025-12-31 |
| 10-Q_2026-03-31_embc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-05 | 7a5f4081db12a4772e8765621895ee97ee47069b9a554895d8295b002e8788f3 | Balance sheet and debt at 2026-03-31, six-month cash flow presentation |
| 10-Q_2026-06-30_embc.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-07 | 9052bf42fe84035248ea87da53d236d2d43804778cfcf4f7a4a90bf17edba707 | Nine-month statements, balance sheet and debt at 2026-06-30, acquisition accounting, subsequent events |
| EX99.1_2025-12-31_embc_q12026ex-991-htm.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of fiscal 2026 | 2026-02-05 | 324f4fb9741b7a8afb0adc23a0be5fd37017b1da0030cf832f937a495806b8f3 | First-quarter EBITDA and adjusted EBITDA |
| EX99.1_2026-03-31_embc_q22026ex-991-htm.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of fiscal 2026 | 2026-05-05 | 5b58cfbf6e930a9537dc6014462a646e178b0bcb9284297f546692f20a3ec7e5 | Second-quarter EBITDA and adjusted EBITDA |
| EX99.1_2026-03-31_embc_ss6329586-ex9901-htm.htm.jsonl | Press release (Exhibit 99.1) announcing completion of the Owen Mumford acquisition | 2026-05-15 | 69d3badc26ffdaedac52f28a4661fd01b3c8466c3ade24698b8905b772ae7493 | Announced consideration and closing date |
| EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of fiscal 2026 | 2026-08-07 | 4dc8dc96b68b9578ca793606f2ab9d6ac9c2e2cc2c3f4a829e45a0ea6918c11f | EBITDA and adjusted EBITDA reconciliation, regional and product revenue, revolver drawing, dividend |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness (CP-0) | CP-0 | 4414772a5a737f5357533b680349a5f23166e5b9b42d543bbe3b7faefc341d55 | Source dates, perimeter, gaps and conflicts already logged for the nine sources; period and document dates were taken from it |

## Findings

### Bottom line

Embecta's net leverage rose to 4.67x last-twelve-months EBITDA at 2026-06-30 from 4.12x at the 2025 year end, as revolver-funded acquisition spending met falling United States revenue, leaving creditors a thinner cushion.
Net debt rose USD 67.7 million to USD 1,240.4 million while reported EBITDA for the last twelve months fell to USD 265.8 million from USD 284.3 million. Pro forma for the dividend payable on 2026-09-15, net debt is approximately USD 1,241.0 million.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; 10-Q_2026-06-30_embc.htm.jsonl, page 22; calculation C2; calculation C5; calculation C8; calculation C14; calculation C15

Cash interest cover was 2.74x at the 2025 year end and is not calculable for the latest twelve months. Cash of USD 214.7 million and an undrawn revolver of USD 370.1 million at 2026-06-30 are tempered by a revolver cut to USD 310.0 million on 2026-08-06 and USD 139.4 million of debt due in fiscal 2027. Issuer-adjusted EBITDA cannot be built for any twelve-month period, so every ratio uses the unadjusted measure.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, pages 21–22; 10-Q_2026-06-30_embc.htm.jsonl, pages 52–53; calculation C9; calculation C12

### Key findings

Leverage improved through fiscal 2025 and then reversed. Net debt over reported EBITDA fell from 6.78x at the 2024 year end to 4.12x at the 2025 year end, helped by USD 184.6 million of term loan repayments and by a fall in other operating expense, net from USD 124.5 million to USD 65.4 million that lifted fiscal 2025 EBITDA to USD 284.3 million from USD 192.7 million. The fiscal 2024 base was depressed by separation and restructuring costs, so part of the improvement is a lower cost base, not a stronger business. Since September 2025 the ratio has risen to 4.67x as USD 180.0 million was drawn on the revolver for the Owen Mumford acquisition, USD 128.4 million of cash left for the purchase net of cash acquired, and EBITDA fell.
Basis: 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; calculation C4; calculation C8; calculation C15

The earnings trend is weaker than reported EBITDA suggests. Nine-month revenue fell 7.6% to USD 754.7 million. United States revenue fell 20.6% and pen needles, the largest product family, fell 13.2%, while Owen Mumford added USD 13.8 million after its 2026-05-15 closing. Reported EBITDA fell only 8.6% to USD 197.6 million because the prior-year nine months carried USD 45.4 million of patch pump costs that the issuer adds back, whereas issuer-adjusted EBITDA fell 23.9% to USD 247.5 million. Leverage on reported EBITDA therefore likely understates the pressure creditors face on the operating run rate; the adjusted ratio cannot be built because fiscal 2025 adjusted EBITDA is not stated.
Basis: EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 2–4; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 8–11; calculation C13; calculation C18

Free cash flow stayed positive but was supported by receivable sales. Free cash flow was USD 87.9 million in nine months 2026 against USD 105.7 million a year earlier, and USD 167.2 million of trade receivables, 22.2% of nine-month revenue, were sold to a third-party buyer on an uncommitted basis and moved cash into operating activities. If the buyer withdrew, working capital would absorb cash equal to the receivables then held by the buyer, an amount the filings do not state.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, page 4; 10-Q_2026-06-30_embc.htm.jsonl, page 25; calculation C16; calculation C20

Interest cover is modest. Reported EBITDA covered cash interest 2.74x in fiscal 2025 after 1.64x in fiscal 2024 and 2.21x in fiscal 2023, and the last twelve months cannot be calculated because cash interest for nine months 2025 is not stated. Nine-month interest expense, net fell to USD 70.6 million from USD 81.2 million as debt was repaid, so cover is unlikely to have worsened sharply, although quarterly interest expense, net edged up to USD 23.9 million in the third quarter from USD 22.6 million in the second as the revolver was drawn.
Basis: 10-K_2025-09-30_embc.htm.jsonl, page 113; 10-Q_2026-06-30_embc.htm.jsonl, page 2; 10-Q_2026-03-31_embc.htm.jsonl, page 2; 10-Q_2026-06-30_embc.htm.jsonl, page 22; calculation C9; calculation C21

Liquidity is adequate on the face of the balance sheet but the dated structure matters. Cash was USD 214.7 million and the undrawn revolver USD 370.1 million before any letters of credit, which are not stated. The 2026-08-06 amendment cut commitments to USD 310.0 million, keeps USD 100.0 million maturing in March 2027 and extends USD 210.0 million to December 2028 at a higher margin. Debt maturing is USD 139.4 million in fiscal 2027, USD 618.0 million in fiscal 2029 and USD 700.0 million in fiscal 2030, and the estimated fair value of debt fell to 81.5% of carrying value at 2026-06-30 from 97.6% at 2026-03-31, a market signal that Market-implied risk should weigh.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, pages 21–22; 10-Q_2026-06-30_embc.htm.jsonl, pages 52–53; 10-Q_2026-03-31_embc.htm.jsonl, page 18; calculation C12; calculation C17

### Contrary evidence and what would change the view

The strongest contrary evidence is cash flow: nine-month free cash flow stayed positive at USD 87.9 million, USD 70.3 million of term loan prepayments were voluntary, interest expense, net is falling and guidance for adjusted operating margin was raised in August. The view would improve if fiscal 2026 results show twelve-month reported EBITDA recovering above the fiscal 2025 level of USD 284.3 million with the revolver repaid, and it would worsen if United States revenue keeps falling at the nine-month pace or the receivable buyer limits purchases.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, page 4; 10-Q_2026-06-30_embc.htm.jsonl, page 22; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 1–5; calculation C16

### Limitations

Fiscal-year EBITDA is calculated from net income, interest, tax and D&A because the annual reports print none, so every fiscal-year ratio rests on a derived denominator.
Basis: 10-K_2025-09-30_embc.htm.jsonl, page 101; calculation C4

The latest balance sheet is at 2026-06-30 and the interim statements are unaudited, so the revolver classification, the preliminary Owen Mumford purchase accounting and the contingent consideration may change by the fiscal 2026 annual report.
Basis: 10-Q_2026-06-30_embc.htm.jsonl, page 3

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2023 | 2022-10-01 | 2023-09-30 |
| FY2024 | 2023-10-01 | 2024-09-30 |
| FY2025 | 2024-10-01 | 2025-09-30 |
| Q1 2026 | 2025-10-01 | 2025-12-31 |
| Q2 2026 | 2026-01-01 | 2026-03-31 |
| Q3 2025 | 2025-04-01 | 2025-06-30 |
| 9M 2025 | 2024-10-01 | 2025-06-30 |
| Q3 2026 | 2026-04-01 | 2026-06-30 |
| 9M 2026 | 2025-10-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-09-30_embc.htm.jsonl | Annual report (Form 10-K) | Fiscal years 2022 to 2024; balance sheets 2023 and 2024 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 1 audited | Fiscal 2023 balance sheet, 2024 debt and cash interest | Annual statements audited; no quarterly data inside |
| 10-K_2025-09-30_embc.htm.jsonl | Annual report (Form 10-K) | Fiscal years 2023 to 2025; balance sheets 2024 and 2025 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 1 audited | Annual statements, debt note, receivable sale, supplemental cash flow information | Annual statements audited; no quarterly data inside |
| 10-Q_2025-12-31_embc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter ended 2025-12-31 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2b unaudited | Balance sheet and debt at 2025-12-31 | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| 10-Q_2026-03-31_embc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and six months ended 2026-03-31 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2b unaudited | Balance sheet and debt at 2026-03-31; six-month cash flow presentation | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| 10-Q_2026-06-30_embc.htm.jsonl | Quarterly report (Form 10-Q) | Quarter and nine months ended 2026-06-30 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2b unaudited | Latest statements, debt note, acquisition accounting, subsequent events | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| EX99.1_2025-12-31_embc_q12026ex-991-htm.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter ended 2025-12-31 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2c issuer material | Quarterly EBITDA and adjusted EBITDA | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| EX99.1_2026-03-31_embc_q22026ex-991-htm.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and six months ended 2026-03-31 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2c issuer material | Quarterly EBITDA and adjusted EBITDA | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| EX99.1_2026-03-31_embc_ss6329586-ex9901-htm.htm.jsonl | Press release (Exhibit 99.1) | Event of 2026-05-15 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2c issuer material | Acquisition completion and announced price | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |
| EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl | Earnings release (Exhibit 99.1) | Quarter and nine months ended 2026-06-30 | USD | millions | Embecta Corp. consolidated | US GAAP | Tier 2c issuer material | EBITDA, adjusted EBITDA, bridge, guidance, revolver drawing | Quarterly figures unaudited; releases carry company-defined non-GAAP measures |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Embecta Corp. | Issuer, registrant and borrower under the credit agreement and issuer of the senior secured notes | 09-30 | USD | millions | Consolidated; Owen Mumford included from 2026-05-15 | US GAAP | FY2022 to FY2025; Q1 to Q3 2026 and nine months 2026 with 2025 comparatives |
| Owen Mumford Holdings Limited | Acquired subsidiary, a UK company | 09-30 (Embecta consolidation basis) | GBP price, USD consolidation | millions | Consolidated from the 2026-05-15 closing; USD 13.8 million of revenue in the period to 2026-06-30 | US GAAP, preliminary purchase accounting | Q3 2026 only |
| Subsidiary guarantors | Guarantors of the credit agreement and the senior secured notes; not named in the supplied filings | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named | Not supplied: not named |
| Becton, Dickinson and Company | Former parent; counterparty to separation agreements and the former factoring agreements | 09-30 | USD | millions | Not consolidated; related balances shown on separate lines until 2025-09-30 | Not applicable | Balances to 2025-09-30 |

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| Total Liabilities derived because the statements print no total | 10-K_2025-09-30_embc.htm.jsonl, page 102; 10-Q_2026-06-30_embc.htm.jsonl, page 3 | Aggregation | Not supplied: no printed total | See Total Liabilities row of the balance sheet table | Fixed row required; sum of the printed liability lines; ties to assets less equity | All balance sheet columns |
| Total Debt set to current debt obligations plus long-term debt at carrying value | 10-K_2025-09-30_embc.htm.jsonl, page 102; 10-Q_2026-06-30_embc.htm.jsonl, page 3 | Definition | Principal in the debt note | Carrying value in the balance sheet | Method uses carrying value; the principal difference is logged in the definition conflict register | All balance sheet columns |
| EBITDA for fiscal years built from components using the issuer reconciliation definition | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, page 103; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 | Calculation | Not supplied: no fiscal-year EBITDA in the annual reports | See EBITDA (Reported) row | Annual reports print no EBITDA; the issuer defines it as net income plus interest expense, net plus income tax plus D&A | FY2023, FY2024, FY2025 |
| Interim EBITDA taken as the issuer states it | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 | Sourcing | Not applicable | See EBITDA (Reported) row | Release reconciliation states it; its D&A for nine months 2026 is 31.0 against 31.1 in the cash flow statement | Q3 2025, 9M 2025, Q3 2026, 9M 2026 |
| Sign convention: outflows negative in the cash flow table; interest expense, net negative as printed | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, page 103 | Presentation | As printed | As printed | Cash interest paid is shown as a positive amount as the method requires | All columns |
| Cash and equivalents excludes restricted cash | 10-Q_2026-06-30_embc.htm.jsonl, page 2; 10-Q_2026-06-30_embc.htm.jsonl, page 25 | Definition | Cash and restricted cash 218.2 | Cash and equivalents 214.7 | Restricted cash secures bank guarantees and holds collections for the receivable buyer; it is not available for debt service | All balance sheet columns |

### T4.4 Income statement

| Line item | FY2023 | FY2024 | FY2025 | Q3 2025 | 9M 2025 | Q3 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | 1,120.8 | 1,123.1 | 1,080.4 | 295.5 | 816.4 | 271.7 | 754.7 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Cost of products sold | 370.9 | 387.9 | 403.6 | 98.4 | 298.1 | 118.4 | 311.9 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Gross Profit | 749.9 | 735.2 | 676.8 | 197.1 | 518.3 | 153.3 | 442.8 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Selling and administrative expense | 341.3 | 365.1 | 332.0 | 84.4 | 245.1 | 78.6 | 232.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Research and development expense | 85.2 | 78.8 | 37.3 | 4.4 | 32.7 | 5.6 | 15.6 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Impairment expense | 2.5 | Not supplied: the annual statement prints a dash | Not supplied: the annual statement prints a dash | Not supplied: line not printed in the interim statement | Not supplied: line not printed in the interim statement | Not supplied: line not printed in the interim statement | Not supplied: line not printed in the interim statement | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Other operating expense, net | 99.4 | 124.5 | 65.4 | 14.3 | 54.9 | 20.4 | 27.8 | USD millions | Reported; the annual statement labels the line Other operating expenses | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Total Operating Expenses | 528.4 | 568.4 | 434.7 | 103.1 | 332.7 | 104.6 | 275.8 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Operating Income | 221.5 | 166.8 | 242.1 | 94.0 | 185.6 | 48.7 | 167.0 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Interest expense, net | -107.0 | -112.3 | -107.3 | -26.6 | -81.2 | -23.9 | -70.6 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Other income (expense), net | -8.8 | -10.3 | 1.5 | 4.8 | 2.9 | 2.8 | -0.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Income Before Income Taxes | 105.7 | 44.2 | 136.3 | 72.2 | 107.3 | 27.6 | 96.0 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Income tax provision (benefit) | 35.3 | -34.1 | 40.9 | 26.7 | 38.3 | 6.5 | 34.9 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Net Income | 70.4 | 78.3 | 95.4 | 45.5 | 69.0 | 21.1 | 61.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Net income per common share, basic | 1.23 | 1.36 | 1.64 | 0.78 | 1.18 | 0.36 | 1.04 | USD per share | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Net income per common share, diluted | 1.22 | 1.34 | 1.62 | 0.78 | 1.18 | 0.36 | 1.03 | USD per share | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Depreciation and amortization | 32.6 | 36.2 | 40.7 | 9.2 | 27.6 | 10.5 | 31.1 | USD millions | Reported in the cash flow statement for FY and 9M columns (9M 2026 reconciliation prints 31.0); Q3 columns from the release reconciliation | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Stock-based compensation | 21.5 | 26.3 | 31.6 | Not supplied: the release prints a different add-back figure and no statement line | 22.1 | Not supplied: the release prints a different add-back figure and no statement line | 15.8 | USD millions | Reported in the cash flow statement | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 |
| Interest income (within interest expense, net) | 9.4 | 12.0 | 6.0 | 1.5 | 4.6 | 0.8 | 2.4 | USD millions | Reported in the cash and equivalents note | 10-K_2025-09-30_embc.htm.jsonl, page 136; 10-Q_2026-06-30_embc.htm.jsonl, page 25 |
| EBITDA (Reported) | 245.3 | 192.7 | 284.3 | 108.0 | 216.1 | 62.0 | 197.6 | USD millions | FY columns calculated: Net Income plus interest expense, net plus income tax provision plus D&A, as the issuer defines EBITDA; Q3 and 9M columns as the issuer states unadjusted EBITDA in its release | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, page 103; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| EBITDA (Adjusted) | Not supplied: the annual reports and the supplied releases state no adjusted EBITDA for the fiscal year | Not supplied: the annual reports and the supplied releases state no adjusted EBITDA for the fiscal year | Not supplied: the annual reports and the supplied releases state no adjusted EBITDA for the fiscal year | 131.0 | 325.4 | 85.7 | 247.5 | USD millions | Issuer-adjusted EBITDA as stated in the release; add-backs in the EBITDA bridge | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 2 |

### T4.5 Cash flow statement

| Line item | FY2023 | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Net Income | 70.4 | 78.3 | 95.4 | 69.0 | 61.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Depreciation and amortization | 32.6 | 36.2 | 40.7 | 27.6 | 31.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Amortization of inventory step-up | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | 1.9 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Amortization of debt issuance costs | 6.4 | 6.9 | 9.1 | 6.5 | 5.2 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Amortization of cloud computing arrangements | Not supplied: line absent or a dash in this column | 6.3 | 10.4 | 7.8 | 7.8 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Impairment of property, plant and equipment | 2.5 | Not supplied: line absent or a dash in this column | 10.6 | 10.6 | 0.5 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Gain on sale of certain intellectual property rights and long-lived assets | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | -10.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Stock-based compensation | 21.5 | 26.3 | 31.6 | 22.1 | 15.8 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Deferred income taxes | 14.3 | -70.6 | 17.6 | 11.9 | 12.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Trade receivables, net | 7.0 | -174.7 | 44.2 | 11.7 | -20.8 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Inventories | -28.8 | -16.5 | -6.1 | -11.3 | -7.3 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Due from/due to Becton, Dickinson and Company | -23.2 | 58.9 | 25.3 | 19.8 | Not supplied: line absent or a dash in this column | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Prepaid expenses and other | -14.2 | 39.5 | 8.5 | 2.6 | -6.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Accounts payable, accrued expenses and other current liabilities | 7.9 | 60.0 | -68.9 | -57.2 | 1.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Income and other net taxes payable | -12.6 | 13.2 | -28.1 | -16.9 | -3.6 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Other assets and liabilities, net | -16.1 | -28.1 | 1.4 | 3.5 | 1.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 67.7 | 35.7 | 191.7 | 107.7 | 90.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Capital expenditures | -26.5 | -15.8 | -9.3 | -2.0 | -2.2 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Owen Mumford acquisition, net of cash acquired | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | -128.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Proceeds from the sale of certain intellectual property rights and long-lived assets | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | 10.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -26.5 | -15.8 | -9.3 | -2.0 | -120.5 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Payments on long-term debt | -9.5 | -34.6 | -184.6 | -112.2 | -77.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Proceeds on drawdown of revolving credit facility | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | 180.0 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Payments on revolving credit facility | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | -50.1 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Payments related to tax withholding for stock-based compensation | -3.6 | -3.0 | -5.7 | -5.7 | -4.9 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Payments on finance lease | -1.2 | -1.3 | -1.4 | -1.0 | -1.2 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Dividend payments | -34.4 | -34.5 | -35.0 | -26.2 | -18.4 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Repurchases of common stock | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | Not supplied: line absent or a dash in this column | -8.7 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -48.7 | -73.4 | -226.7 | -145.1 | 19.3 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| FX Effect on Cash | 3.1 | 1.2 | -1.3 | -1.2 | 0.7 | USD millions | Reported | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Net Cash Change | -4.4 | -52.3 | -45.6 | -40.6 | -10.4 | USD millions | Reported; operating plus investing plus financing plus FX effect | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Opening Cash | 330.9 | 326.5 | 274.2 | 274.2 | 228.6 | USD millions | Reported; includes restricted cash | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Closing Cash | 326.5 | 274.2 | 228.6 | 233.6 | 218.2 | USD millions | Reported; includes restricted cash | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 111.0 | 117.7 | 103.8 | Not supplied: the supplied reports state no cash interest for nine months 2025 | 56.3 | USD millions | Reported in notes: cash paid for interest related to debt (nine months 2026 from the debt note) | 10-K_2025-09-30_embc.htm.jsonl, page 113; 10-Q_2026-06-30_embc.htm.jsonl, page 22 |
| Cash taxes paid, net of refunds | 30.4 | 29.1 | 50.1 | Not supplied: not stated for the nine-month columns | Not supplied: not stated for the nine-month columns | USD millions | Reported in notes | 10-K_2025-09-30_embc.htm.jsonl, page 113 |

### T4.6 Balance sheet

| Line item | FY2023 | FY2024 | FY2025 | Q1 2026 | Q2 2026 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cash & Equivalents | 326.3 | 267.5 | 225.5 | 201.3 | 184.9 | 214.7 | USD millions | Reported; unrestricted | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Restricted cash | 0.2 | 6.7 | 3.1 | 3.1 | 8.5 | 3.5 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Trade receivables, net | 16.7 | 193.0 | 145.6 | 159.2 | 147.1 | 182.2 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Inventories, materials | 32.1 | 40.4 | 50.0 | 52.4 | 52.5 | 64.3 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Inventories, work in process | 8.1 | 4.8 | 11.7 | 14.3 | 13.3 | 22.2 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Inventories, finished products | 111.9 | 126.3 | 116.9 | 115.1 | 126.8 | 127.7 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Inventories | 152.1 | 171.5 | 178.6 | 181.8 | 192.6 | 214.2 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Amounts due from Becton, Dickinson and Company | 142.4 | 53.8 | 3.3 | Not supplied: line absent or a dash at this date | Not supplied: line absent or a dash at this date | Not supplied: line absent or a dash at this date | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Prepaid expenses and other | 111.4 | 68.5 | 75.3 | 74.8 | 75.0 | 90.5 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Current Assets | 749.1 | 761.0 | 631.4 | 620.2 | 608.1 | 705.1 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Property, Plant and Equipment, Net | 300.2 | 290.4 | 257.2 | 248.9 | 237.5 | 316.8 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Goodwill and Intangible Assets | 24.7 | 23.7 | 22.4 | 22.1 | 21.9 | Not supplied: the 2026-06-30 balance sheet prints goodwill and intangibles on two lines | USD millions | Reported as one line to 2026-03-31 | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Goodwill | Not supplied: printed as one combined line at this date | Not supplied: printed as one combined line at this date | 15.4 | Not supplied: printed as one combined line at this date | Not supplied: printed as one combined line at this date | 39.9 | USD millions | Reported on separate lines from 2026-06-30; 2025-09-30 split taken from the comparative column of the latest quarterly report | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Intangible Assets, net | Not supplied: printed as one combined line at this date | Not supplied: printed as one combined line at this date | 7.0 | Not supplied: printed as one combined line at this date | Not supplied: printed as one combined line at this date | 47.5 | USD millions | Reported on separate lines from 2026-06-30; 2025-09-30 split taken from the comparative column of the latest quarterly report | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Deferred Income Taxes and Other Assets | 140.4 | 210.2 | 179.9 | 172.5 | 161.8 | 156.0 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Assets | 1,214.4 | 1,285.3 | 1,090.9 | 1,063.7 | 1,029.3 | 1,265.3 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Accounts payable | 53.5 | 91.0 | 74.2 | 72.1 | 79.7 | 90.5 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Accrued expenses | 118.1 | 134.2 | 98.9 | 111.6 | 113.8 | 138.6 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Amounts due to Becton, Dickinson and Company | 73.1 | 42.5 | 16.3 | Not supplied: line absent or a dash at this date | Not supplied: line absent or a dash at this date | Not supplied: line absent or a dash at this date | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Salaries, wages and related items | 62.1 | 66.7 | 49.4 | 31.3 | 34.6 | 41.4 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Current debt obligations | 9.5 | 9.5 | 9.5 | 9.5 | 9.5 | 139.4 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Current finance lease liabilities | 3.6 | 3.4 | 3.4 | 3.5 | 3.5 | 3.5 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Income taxes | 33.6 | 26.7 | 9.8 | 6.7 | 6.2 | 6.4 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Current Liabilities | 353.5 | 374.0 | 261.5 | 234.7 | 247.3 | 419.8 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Deferred Income Taxes and Other Liabilities | 57.2 | 54.1 | 62.6 | 61.0 | 63.4 | 115.1 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Long-Term Debt | 1,593.9 | 1,565.3 | 1,388.7 | 1,352.9 | 1,316.9 | 1,315.7 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Non Current Finance Lease Liabilities | 31.5 | 30.2 | 28.7 | 28.2 | 27.8 | 27.4 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Liabilities | 2,036.1 | 2,023.6 | 1,741.5 | 1,676.8 | 1,655.4 | 1,878.0 | USD millions | Calculated: total current liabilities plus deferred income taxes and other liabilities plus long-term debt plus non-current finance lease liabilities; the statement prints no total | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Debt | 1,603.4 | 1,574.8 | 1,398.2 | 1,362.4 | 1,326.4 | 1,455.1 | USD millions | Calculated: current debt obligations plus long-term debt at carrying value, net of issuance costs and discounts; finance lease liabilities are on separate lines and excluded | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Common stock | 0.6 | 0.6 | 0.6 | 0.6 | 0.6 | 0.6 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Additional paid-in capital | 27.9 | 52.5 | 80.0 | 81.8 | 88.0 | 83.6 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Accumulated deficit | -541.1 | -498.6 | -445.6 | -411.1 | -424.7 | -404.3 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Accumulated other comprehensive loss | -309.1 | -292.8 | -285.6 | -284.4 | -290.0 | -292.6 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total Equity | -821.7 | -738.3 | -650.6 | -613.1 | -626.1 | -612.7 | USD millions | Reported | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Term Loan B | Term loan | Not supplied: carrying value is disclosed in aggregate only | 639.4 | 639.4 | Not applicable | Secured by substantially all assets of Embecta and each subsidiary guarantor, subject to exceptions | First lien (credit agreement titled First Lien Credit Agreement) | USD | 639.4 | Not applicable | SOFR plus 300 bps | floating | SOFR | 300 | 50 | March 2029 | 9.5 | 10-Q_2026-06-30_embc.htm.jsonl, pages 21–22; 10-Q_2026-06-30_embc.htm.jsonl, page 52 |
| Revolving Credit Facility | Revolver | Not supplied: carrying value is disclosed in aggregate only | 129.9 | 129.9 | 500.0 | Secured by substantially all assets of Embecta and each subsidiary guarantor, subject to exceptions | First lien (credit agreement titled First Lien Credit Agreement) | USD | 129.9 | Not applicable | SOFR or alternate base rate or EURIBOR plus an applicable margin; commitment fee 0.25 percent | floating | SOFR, alternate base rate or EURIBOR | Not supplied: the margin is described as applicable and not quantified for the pre-amendment facility | Not supplied: not stated for the revolver | March 2027 (USD 100.0 million after the 2026-08-06 amendment; USD 210.0 million extended to 2028-12-30) | 0 | 10-Q_2026-06-30_embc.htm.jsonl, page 21; 10-Q_2026-06-30_embc.htm.jsonl, pages 52–53 |
| 5.00% senior secured notes | Senior secured notes | Not supplied: carrying value is disclosed in aggregate only | 500.0 | 500.0 | Not applicable | Secured by substantially all assets of Embecta and each subsidiary guarantor, subject to exceptions | Not supplied: lien priority against the credit agreement is not stated | USD | 500.0 | Not applicable | 5.00% | fixed | Not applicable | Not applicable | Not applicable | 2030-02-15 | 0 | 10-Q_2026-06-30_embc.htm.jsonl, pages 21–22; 10-K_2025-09-30_embc.htm.jsonl, page 128 |
| 6.75% senior secured notes | Senior secured notes | Not supplied: carrying value is disclosed in aggregate only | 200.0 | 200.0 | Not applicable | Secured by substantially all assets of Embecta and each subsidiary guarantor, subject to exceptions | Not supplied: lien priority against the credit agreement is not stated | USD | 200.0 | Not applicable | 6.75% | fixed | Not applicable | Not applicable | Not applicable | 2030-02-15 | 0 | 10-Q_2026-06-30_embc.htm.jsonl, pages 21–22; 10-K_2025-09-30_embc.htm.jsonl, page 128 |
| Financing cost adjustment | Unamortised issuance costs and discounts | -14.2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -14.2 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_embc.htm.jsonl, page 22 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Revenues | LTM | USD 1,080.4m | USD 754.7m | USD 816.4m | USD 1,018.7m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 | Latest full year plus current nine months less prior-year nine months; periods comparable |
| Gross Profit | LTM | USD 676.8m | USD 442.8m | USD 518.3m | USD 601.3m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 | Includes Owen Mumford from 2026-05-15 |
| Operating Income | LTM | USD 242.1m | USD 167.0m | USD 185.6m | USD 223.5m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 | Includes acquisition costs in nine months 2026 |
| Net Income | LTM | USD 95.4m | USD 61.1m | USD 69.0m | USD 87.5m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 | None beyond comparability of periods |
| EBITDA (Reported) | LTM | USD 284.3m | USD 197.6m | USD 216.1m | USD 265.8m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 | Fiscal-year component is calculated from components, the stubs are issuer-stated; same definition throughout |
| EBITDA (Adjusted) | LTM | Not supplied: fiscal 2025 adjusted EBITDA not stated | USD 247.5m | USD 325.4m | Not calculable: the full-year component is missing | Not Calculable | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 | One missing component makes the derived figure missing |
| Net Cash from Operating Activities | LTM | USD 191.7m | USD 90.1m | USD 107.7m | USD 174.1m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 | Receivable sales move cash into operating activities |
| Capital expenditures (positive amount) | LTM | USD 9.3m | USD 2.2m | USD 2.0m | USD 9.5m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 | Total capex only; maintenance and growth split not stated |
| Free cash flow (operating cash flow less capital expenditures) | LTM | USD 182.4m | USD 87.9m | USD 105.7m | USD 164.6m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 | Levered; after cash interest and taxes; working capital included |
| Cash Interest Paid | LTM | USD 103.8m | USD 56.3m | Not supplied: nine months 2025 cash interest not stated | Not calculable: the prior-year stub is missing | Not Calculable | 10-K_2025-09-30_embc.htm.jsonl, page 113; 10-Q_2026-06-30_embc.htm.jsonl, page 22 | One missing component makes the derived figure missing |
| Revenues | Q4 (calculated) | USD 1,080.4m | Not applicable | USD 816.4m | USD 264.0m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 | No standalone quarter ended 2025-09-30 is supplied; fiscal year less nine months, labelled calculated |
| EBITDA (Reported) | Q4 (calculated) | USD 284.3m | Not applicable | USD 216.1m | USD 68.2m | Calculated | 10-K_2025-09-30_embc.htm.jsonl, page 101; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 | Fiscal-year component calculated; labelled calculated |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,603.4 | Net debt data FY2023 / 2023-09-30 | 245.3 | EBITDA (Reported) FY, income statement table | FY2023 / 2023-09-30 | USD | US$m | 6.54 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,277.1 | Net debt data FY2023 / 2023-09-30 | 245.3 | EBITDA (Reported) FY, income statement table | FY2023 / 2023-09-30 | USD | US$m | 5.21 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 245.3 | EBITDA (Reported) FY, income statement table | 111.0 | Cash Interest Paid, cash flow statement table | FY2023 / 2023-09-30 | USD | US$m | 2.21 | Calculated | Tier 1 inputs, EBITDA calculated | Cash paid for interest related to debt, which can differ from interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,603.4 | Net debt data FY2023 / 2023-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2023 / 2023-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,277.1 | Net debt data FY2023 / 2023-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2023 / 2023-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | 111.0 | Cash Interest Paid, cash flow statement table | FY2023 / 2023-09-30 | USD | US$m | Not calculable: the numerator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,574.8 | Net debt data FY2024 / 2024-09-30 | 192.7 | EBITDA (Reported) FY, income statement table | FY2024 / 2024-09-30 | USD | US$m | 8.17 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,307.3 | Net debt data FY2024 / 2024-09-30 | 192.7 | EBITDA (Reported) FY, income statement table | FY2024 / 2024-09-30 | USD | US$m | 6.78 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 192.7 | EBITDA (Reported) FY, income statement table | 117.7 | Cash Interest Paid, cash flow statement table | FY2024 / 2024-09-30 | USD | US$m | 1.64 | Calculated | Tier 1 inputs, EBITDA calculated | Cash paid for interest related to debt, which can differ from interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,574.8 | Net debt data FY2024 / 2024-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2024 / 2024-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,307.3 | Net debt data FY2024 / 2024-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2024 / 2024-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | 117.7 | Cash Interest Paid, cash flow statement table | FY2024 / 2024-09-30 | USD | US$m | Not calculable: the numerator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,398.2 | Net debt data FY2025 / 2025-09-30 | 284.3 | EBITDA (Reported) FY, income statement table | FY2025 / 2025-09-30 | USD | US$m | 4.92 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,172.7 | Net debt data FY2025 / 2025-09-30 | 284.3 | EBITDA (Reported) FY, income statement table | FY2025 / 2025-09-30 | USD | US$m | 4.12 | Calculated | Tier 1 inputs, EBITDA calculated | EBITDA calculated from components; debt at carrying value |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 284.3 | EBITDA (Reported) FY, income statement table | 103.8 | Cash Interest Paid, cash flow statement table | FY2025 / 2025-09-30 | USD | US$m | 2.74 | Calculated | Tier 1 inputs, EBITDA calculated | Cash paid for interest related to debt, which can differ from interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,398.2 | Net debt data FY2025 / 2025-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2025 / 2025-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,172.7 | Net debt data FY2025 / 2025-09-30 | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | FY2025 / 2025-09-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: fiscal-year adjusted EBITDA is not stated in any supplied document | EBITDA (Adjusted), income statement table | 103.8 | Cash Interest Paid, cash flow statement table | FY2025 / 2025-09-30 | USD | US$m | Not calculable: the numerator is missing | Not Calculable | Tier 1 inputs, EBITDA calculated | Issuer states adjusted EBITDA for quarters and nine months only |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,455.1 | Net debt data 2026-06-30 | 265.8 | EBITDA (Reported) last twelve months, constructed period register | 2026-06-30 | USD | US$m | 5.47 | Calculated | Tier 2b inputs, EBITDA derived | Last-twelve-months EBITDA derived in the constructed period register; debt at carrying value at 2026-06-30 |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,240.4 | Net debt data 2026-06-30 | 265.8 | EBITDA (Reported) last twelve months, constructed period register | 2026-06-30 | USD | US$m | 4.67 | Calculated | Tier 2b inputs, EBITDA derived | Last-twelve-months EBITDA derived in the constructed period register; debt at carrying value at 2026-06-30 |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 265.8 | EBITDA (Reported) last twelve months, constructed period register | Not supplied: nine months 2025 cash interest paid is not stated, so the twelve-month figure is missing | Cash Interest Paid, cash flow statement table | 2026-06-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 2b inputs, EBITDA derived | One missing component makes the derived figure missing |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,455.1 | Net debt data 2026-06-30 | Not supplied: adjusted EBITDA for the twelve months is not stated | EBITDA (Adjusted), income statement table | 2026-06-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 2b inputs, EBITDA derived | Issuer states adjusted EBITDA for quarters and nine months only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,240.4 | Net debt data 2026-06-30 | Not supplied: adjusted EBITDA for the twelve months is not stated | EBITDA (Adjusted), income statement table | 2026-06-30 | USD | US$m | Not calculable: the denominator is missing | Not Calculable | Tier 2b inputs, EBITDA derived | Issuer states adjusted EBITDA for quarters and nine months only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | Not supplied: adjusted EBITDA for the twelve months is not stated | EBITDA (Adjusted), income statement table | Not supplied: nine months 2025 cash interest paid is not stated | Cash Interest Paid, cash flow statement table | 2026-06-30 | USD | US$m | Not calculable: the numerator is missing | Not Calculable | Tier 2b inputs, EBITDA derived | Issuer states adjusted EBITDA for quarters and nine months only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2023 | FY2024 | FY2025 | LTM to 2026-06-30 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, year on year (%) | -0.8 | 0.2 | -3.8 | Not supplied: the prior twelve months are not built | Not supplied: no prior-year column | -7.6 | Down | Fiscal 2022 revenue of USD 1,129.5 million is from the 2024 annual report; 9M 2026 includes USD 13.8 million from Owen Mumford | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Margin | Gross margin (%) | 66.9 | 65.5 | 62.6 | 59.0 | 63.5 | 58.7 | Down | Nine months 2026 includes purchase accounting and acquired inventory step-up | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Margin | Operating margin (%) | 19.8 | 14.9 | 22.4 | 21.9 | 22.7 | 22.1 | Mixed | Fiscal 2024 and 2025 carry separation, restructuring and patch pump costs | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Margin | EBITDA margin, reported (%) | 21.9 | 17.2 | 26.3 | 26.1 | 26.5 | 26.2 | Down | Fiscal columns calculated; nine-month columns issuer-stated | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Margin | Adjusted EBITDA margin, issuer (%) | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not calculable | 39.9 | 32.8 | Down | Issuer prints 39.9 and 32.8 percent for the nine-month periods | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Cash flow | Operating cash flow conversion, operating cash flow over reported EBITDA (%) | 27.6 | 18.5 | 67.4 | 65.5 | 49.8 | 45.6 | Mixed | Working capital swings and receivable sales affect operating cash flow | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Cash flow | Capital expenditures over revenue (%) | 2.4 | 1.4 | 0.9 | 0.9 | 0.2 | 0.3 | Down | Total capex only | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Revenue mix, period flow | United States revenue (USD millions) | 601.4 | 607.2 | 579.1 | Not supplied: not stated | 437.1 | 347.1 | Down | Geographic split from the segment note and the releases | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | International revenue (USD millions) | 519.4 | 515.9 | 501.3 | Not supplied: not stated | 379.3 | 407.6 | Up | Nine months 2026 includes Owen Mumford; international excludes the United States only | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | Pen needles revenue (USD millions) | 829.2 | 844.4 | 784.1 | Not supplied: not stated | 596.3 | 517.6 | Down | Largest product family | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | Syringes revenue (USD millions) | 138.1 | 126.2 | 124.6 | Not supplied: not stated | 92.3 | 93.7 | Stable | Product family | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | Safety revenue (USD millions) | 126.3 | 129.4 | 137.8 | Not supplied: not stated | 103.2 | 108.3 | Up | Product family | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | Other revenue (USD millions) | 14.2 | 10.3 | 14.0 | Not supplied: not stated | 9.9 | 23.2 | Up | Other includes Owen Mumford products, swabs and other accessories | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | Contract manufacturing revenue (USD millions) | 13.0 | 12.8 | 19.9 | Not supplied: not stated | 14.7 | 11.9 | Mixed | Product family | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |
| Revenue mix, period flow | United States share of revenue (%) | 53.7 | 54.1 | 53.6 | Not supplied: not stated | 53.5 | 46.0 | Down | Calculated from the two geographic lines | 10-K_2025-09-30_embc.htm.jsonl, page 123; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 3–4 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt | Balance-sheet carrying value, current plus long-term, net of issuance costs and discounts | Principal outstanding in the debt note; the release quotes debt principal | 10-Q_2026-06-30_embc.htm.jsonl, page 22; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 5 | 2026-06-30 | USD 14.2 million (principal 1,469.3 against carrying 1,455.1); about 1 percent of debt | Leverage and net debt | Carrying value used in every ratio; principal shown beside it in the reconciliation table |
| EBITDA | Reported, unadjusted EBITDA | Issuer EBITDA is net income plus interest expense, net plus income tax plus D&A; the covenant EBITDA is defined with other adjustments that the supplied documents do not state | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8; 10-Q_2026-06-30_embc.htm.jsonl, page 40 | All | Covenant leverage cannot be reproduced from supplied inputs | Leverage and covenants | Ratios use the issuer unadjusted EBITDA and are labelled; covenant headroom is not inferred |
| Adjusted EBITDA | Shown beside reported EBITDA, labelled, when the issuer states it | Issuer adds back stock-based compensation, stand-up costs, acquisition costs, cloud computing amortisation, patch pump items and other; realisation status of each add-back is not stated | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 8–11 | 9M 2026, 9M 2025, quarters | USD 49.9 million of add-backs in nine months 2026 against EBITDA of 197.6; nine months 2025 carried USD 45.4 million of patch pump add-backs | Leverage | Adjusted ratios are not calculable for any twelve-month period; add-backs kept separate in the bridge |
| Depreciation and amortization | As printed in the cash flow statement | Release reconciliation prints 31.0 for nine months 2026; the cash flow statement prints 31.1 | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8; 10-Q_2026-06-30_embc.htm.jsonl, page 4 | 9M 2026 | USD 0.1 million | EBITDA | Issuer-stated EBITDA of 197.6 kept; difference noted |
| Owen Mumford consideration | One economic event with several figures | Announced GBP 100 million upfront; GBP 126.0 million paid including acquired cash; USD 169.9 million cash consideration; USD 208.0 million purchase consideration including USD 38.1 million contingent consideration; USD 128.4 million net of cash acquired in the cash flow | EX99.1_2026-03-31_embc_ss6329586-ex9901-htm.htm.jsonl, page 1; 10-Q_2026-06-30_embc.htm.jsonl, page 4; 10-Q_2026-06-30_embc.htm.jsonl, page 8; 10-Q_2026-06-30_embc.htm.jsonl, page 34 | 9M 2026 | USD 208.0 million against USD 128.4 million of cash outflow | Net debt, leverage, cash flow | Cash flow figure used for cash movements; contingent consideration of USD 38.9 million at 2026-06-30 is a non-debt liability outside debt |
| Cash flow presentation of factored receivables | Cash and restricted cash as printed | Six-month statement shows a financing line of 5.4 for unremitted collections from factored receivables; the nine-month statement shows none | 10-Q_2026-03-31_embc.htm.jsonl, page 4; 10-Q_2026-06-30_embc.htm.jsonl, page 4 | 6M and 9M 2026 | USD 5.4 million within financing activities | Cash flow | Each period kept as printed; no restatement attempted |
| Revolver classification | Current debt obligations at the balance-sheet date | USD 129.9 million drawn is current because the revolver matured in March 2027 at 2026-06-30; the 2026-08-06 amendment extends USD 210.0 million of commitments to 2028-12-30 | 10-Q_2026-06-30_embc.htm.jsonl, page 3; 10-Q_2026-06-30_embc.htm.jsonl, page 52 | 2026-06-30 | USD 129.9 million of current debt | Liquidity and maturities | Period figures unchanged; amendment shown as a dated event |
| Fiscal 2025 interim and fourth quarter | A reported discrete quarter first | No standalone quarter ended 2025-09-30 and no as-filed fiscal 2025 interim reports are supplied | 10-K_2025-09-30_embc.htm.jsonl, page 101 | Q4 2025 | Fourth-quarter figures only by difference | Quarterly series | Fourth quarter built as fiscal year less nine months and labelled calculated |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Statements and normalised financials, FY2023 to FY2025 and nine months 2026 | Ready with Limitations | Printed dashes recorded as gaps; no fiscal 2025 interim reports | Use the statement tables as printed; treat gaps as not stated, not zero |
| Leverage and net debt | Ready with Limitations | EBITDA is the issuer unadjusted measure and for fiscal years is calculated; adjusted EBITDA for twelve months is not calculable; covenant EBITDA differs | Quote carrying-value ratios with the labels; do not infer covenant headroom |
| Interest cover | Ready with Limitations | Twelve-month cash interest at 2026-06-30 is not calculable | Use fiscal-year cover; state the gap for the latest period |
| Liquidity and maturities | Ready with Limitations | Letters of credit not stated; commitments changed on 2026-08-06 | Show undrawn as commitment less drawn and flag the amendment |
| Post-balance-sheet position | Ready with Limitations | Nothing after 2026-08-07 is supplied; dividend payment not confirmed | State the pro forma row as an approximation |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-09-30 | 6.54 | 5.21 | x | Debt at carrying value over fiscal-year reported EBITDA; EBITDA calculated as net income plus interest expense, net plus tax plus D&A. |
| FY2024 / 2024-09-30 | 8.17 | 6.78 | x | Debt at carrying value over fiscal-year reported EBITDA; EBITDA calculated as net income plus interest expense, net plus tax plus D&A. |
| FY2025 / 2025-09-30 | 4.92 | 4.12 | x | Debt at carrying value over fiscal-year reported EBITDA; EBITDA calculated as net income plus interest expense, net plus tax plus D&A. |
| 2026-06-30 | 5.47 | 4.67 | x | Debt at carrying value over last-twelve-months reported EBITDA (FY2025 plus nine months 2026 less nine months 2025); EBITDA is the issuer unadjusted measure, calculated in part. |

Leverage is on reported EBITDA built from components for fiscal years and the last twelve months for 2026-06-30, so it is not the covenant ratio.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2023 / 2023-09-30 | 2.21 | x | Fiscal-year reported EBITDA over cash paid for interest related to debt; EBITDA calculated. |
| FY2024 / 2024-09-30 | 1.64 | x | Fiscal-year reported EBITDA over cash paid for interest related to debt; EBITDA calculated. |
| FY2025 / 2025-09-30 | 2.74 | x | Fiscal-year reported EBITDA over cash paid for interest related to debt; EBITDA calculated. |
| 2026-06-30 | Not supplied: cash interest paid for nine months 2025 is not stated, so the twelve-month figure cannot be built | x | Reported EBITDA over cash interest paid; the last-twelve-months cash interest is not calculable. |

Cover uses cash paid for interest and is not calculable for the latest twelve months.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2023 / 2023-09-30 | 326.3 | Not supplied: the supplied reports do not state the revolver drawing at 2023-09-30 | US$m | Cash is unrestricted cash and equivalents. The revolver commitment and drawing at 2023-09-30 are not stated in the supplied reports. |
| FY2024 / 2024-09-30 | 267.5 | 500.0 | US$m | Cash is unrestricted cash and equivalents. Undrawn is the USD 500.0 million commitment with no drawing stated at the date; letters of credit are not stated. |
| FY2025 / 2025-09-30 | 225.5 | 500.0 | US$m | Cash is unrestricted cash and equivalents. Undrawn is the USD 500.0 million commitment with no drawing stated at the date; letters of credit are not stated. |
| 2025-12-31 | 201.3 | 500.0 | US$m | Cash is unrestricted cash and equivalents. Undrawn is the USD 500.0 million commitment with no drawing stated at the date; letters of credit are not stated. |
| 2026-03-31 | 184.9 | 500.0 | US$m | Cash is unrestricted cash and equivalents. Undrawn is the USD 500.0 million commitment with no drawing stated at the date; letters of credit are not stated. |
| 2026-06-30 | 214.7 | 370.1 | US$m | Cash is unrestricted cash and equivalents. Undrawn is the USD 500.0 million commitment less USD 129.9 million drawn at 2026-06-30; letters of credit drawn on the facility are not stated. The 2026-08-06 amendment reduced commitments to USD 310.0 million and is not reflected. |

Undrawn facilities are before letters of credit, which are not stated, and before the revolver cut on 2026-08-06.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 2.4 | US$m | Remaining scheduled term loan amortisation to 2026-09-30. |
| FY2027 | 139.4 | US$m | Term loan amortisation of USD 9.5 million plus USD 129.9 million drawn on the revolver; the revolver commitments mature on 2027-03-31 before the 2026-08-06 amendment, which extends USD 210.0 million of them to 2028-12-30 and is not reflected. |
| FY2028 | 9.5 | US$m | Scheduled term loan amortisation. |
| FY2029 | 618.0 | US$m | Term loan balance due March 2029. |
| FY2030 | 700.0 | US$m | The 5.00% and 6.75% senior secured notes due February 2030. The source prints a dash for amounts after fiscal 2030. |

Revolver drawings of USD 129.9 million sit in fiscal 2027 and the 2026-08-06 amendment, which extends USD 210.0 million of commitments, is not reflected.

### Financials and credit metrics

| Metric | FY2023 | FY2024 | FY2025 | LTM to 2026-06-30 | Unit | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 1,120.8 | 1,123.1 | 1,080.4 | 1,018.7 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Gross profit | 749.9 | 735.2 | 676.8 | 601.3 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Operating income | 221.5 | 166.8 | 242.1 | 223.5 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| Net income | 70.4 | 78.3 | 95.4 | 87.5 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| EBITDA (reported, issuer definition) | 245.3 | 192.7 | 284.3 | 265.8 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, page 103; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| Adjusted EBITDA (issuer) | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not calculable: fiscal 2025 adjusted EBITDA not stated | USD millions | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 2 |
| Net cash from operating activities | 67.7 | 35.7 | 191.7 | 174.1 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 |
| Capital expenditures (positive amount) | 26.5 | 15.8 | 9.3 | 9.5 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 |
| Free cash flow (operating cash flow less capital expenditures) | 41.2 | 19.9 | 182.4 | 164.6 | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 |
| Cash interest paid | 111.0 | 117.7 | 103.8 | Not calculable: nine months 2025 cash interest not stated | USD millions | 10-K_2025-09-30_embc.htm.jsonl, page 113; 10-Q_2026-06-30_embc.htm.jsonl, page 22 |
| Total debt (carrying value) | 1,603.4 | 1,574.8 | 1,398.2 | 1,455.1 | USD millions | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Cash and equivalents (unrestricted) | 326.3 | 267.5 | 225.5 | 214.7 | USD millions | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Net debt | 1,277.1 | 1,307.3 | 1,172.7 | 1,240.4 | USD millions | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| Total debt / EBITDA (x) | 6.54 | 8.17 | 4.92 | 5.47 | x | calculation C7 |
| Net debt / EBITDA (x) | 5.21 | 6.78 | 4.12 | 4.67 | x | calculation C8 |
| EBITDA / cash interest (x) | 2.21 | 1.64 | 2.74 | Not calculable: nine months 2025 cash interest not stated | x | calculation C9 |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2023 / 2023-09-30 | 1,603.4 | 326.3 | 1,277.1 | US$m | Reported carrying value: current debt obligations 9.5 plus long-term debt 1,593.9. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal at 2023-09-30 is not stated in the supplied reports. Cash is unrestricted cash and equivalents; restricted cash is excluded. |
| FY2024 / 2024-09-30 | 1,574.8 | 267.5 | 1,307.3 | US$m | Reported carrying value: current debt obligations 9.5 plus long-term debt 1,565.3. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal USD 1,601.3 million; a deduction of USD 26.5 million for issuance costs and discounts. Cash is unrestricted cash and equivalents; restricted cash is excluded. |
| FY2025 / 2025-09-30 | 1,398.2 | 225.5 | 1,172.7 | US$m | Reported carrying value: current debt obligations 9.5 plus long-term debt 1,388.7. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal USD 1,416.8 million; a deduction of USD 18.6 million for issuance costs and discounts. Cash is unrestricted cash and equivalents; restricted cash is excluded. |
| 2025-12-31 | 1,362.4 | 201.3 | 1,161.1 | US$m | Reported carrying value: current debt obligations 9.5 plus long-term debt 1,352.9. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal USD 1,379.3 million; a deduction of USD 16.9 million for issuance costs and discounts. Cash is unrestricted cash and equivalents; restricted cash is excluded. |
| 2026-03-31 | 1,326.4 | 184.9 | 1,141.5 | US$m | Reported carrying value: current debt obligations 9.5 plus long-term debt 1,316.9. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal USD 1,341.8 million; a deduction of USD 15.4 million for issuance costs and discounts. Cash is unrestricted cash and equivalents; restricted cash is excluded. |
| 2026-06-30 | 1,455.1 | 214.7 | 1,240.4 | US$m | Reported carrying value: current debt obligations 139.4 plus long-term debt 1,315.7. Includes the term loan, both senior secured notes and any revolver drawing, net of issuance costs and discounts; excludes finance lease liabilities shown on separate lines. Principal USD 1,469.3 million; a deduction of USD 14.2 million for issuance costs and discounts. Cash is unrestricted cash and equivalents; restricted cash is excluded. Nine-month term loan repayments were USD 77.4 million, of which USD 70.3 million was discretionary; USD 180.0 million was drawn on the revolver and USD 50.1 million repaid. |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-06-30 | 1,469.3 | -14.2 | 1,455.1 | US$m | Principal is the sum of the five maturity rows. Reconciling items are unamortised debt issuance costs and discounts of USD 14.2 million, a deduction; no debt is left out of the ladder. Carrying value is Gross debt for 2026-06-30. |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Quarterly dividend of USD 0.01 per share declared, payable to holders of record on 2026-08-27 | 2026-09-15 | 0.6 | 1,241.0 | 4.67 | US$m | Amount is USD 0.01 per share on the 56,659,599 shares outstanding at 2026-07-31, an approximation because the record-date share count is not stated. Pro forma net debt is net debt at 2026-06-30 plus that amount; net leverage uses last-twelve-months reported EBITDA. Payment is not confirmed by any supplied document. The 2026-08-06 credit agreement amendment changes revolver commitments, not net debt, and is not a row. Source: EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 5; 10-Q_2026-06-30_embc.htm.jsonl, page 1. |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| Q1 2025 | 261.9 | 97.3 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |
| Q2 2025 | 259.0 | 97.1 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |
| Q3 2025 | 295.5 | 131.0 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |
| Q1 2026 | 261.2 | 97.2 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |
| Q2 2026 | 221.8 | 64.6 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |
| Q3 2026 | 271.7 | 85.7 | US$m | Three months. Adjusted EBITDA is the issuer-adjusted measure stated in the earnings release; no house adjustment. Revenue is reported revenue (adjusted revenue is identical in every quarter). |

Adjusted EBITDA is the issuer-adjusted measure for each three-month period; the fiscal year and twelve-month figures are not stated.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Not supplied: the supplied filings do not state the lien priority of the senior secured notes against the first lien credit agreement | Not supplied: the supplied filings do not state the lien priority of the senior secured notes against the first lien credit agreement | Not supplied: the supplied filings do not state the lien priority of the senior secured notes against the first lien credit agreement | Not supplied: the supplied filings do not state the lien priority of the senior secured notes against the first lien credit agreement | Not supplied: the supplied filings do not state the lien priority of the senior secured notes against the first lien credit agreement | US$m | Instruments, amounts, security and maturities are in the debt instruments register. The credit agreement is titled first lien, but the 5.00% and 6.75% senior secured notes are described only as senior secured, so no rank order can be stated without leaving out USD 700.0 million of secured debt; a partial stack would understate cumulative leverage. |

No rank order is stated for the senior secured notes, so no stack is drawn.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), issuer measure | 197.6 | US$m | Nine months ended 2026-06-30. Opening measure: issuer unadjusted EBITDA, net income plus interest expense, net plus income tax plus D&A. |
| Stock-based compensation expense | 15.7 | US$m | Add-back as the issuer states it for nine months 2026. Share-based compensation; realisation status not stated. |
| One-time stand up costs | 15.0 | US$m | Add-back as the issuer states it for nine months 2026. Other stated: costs of standing up the company after separation; realisation status not stated. |
| Acquisition-related costs | 16.3 | US$m | Add-back as the issuer states it for nine months 2026. Transaction costs of the Owen Mumford acquisition, including purchase price accounting adjustments; realisation status not stated. |
| Amortization of cloud computing arrangements | 7.9 | US$m | Add-back as the issuer states it for nine months 2026. Other stated: amortisation of implementation costs of cloud computing arrangements; realisation status not stated. |
| (Income) expense associated with the discontinued patch pump program | -8.1 | US$m | Add-back as the issuer states it for nine months 2026. Restructuring of the discontinued patch pump program, a net income of USD 8.1 million in nine months 2026 including a gain on sale; realisation status not stated. |
| Other | 3.1 | US$m | Add-back as the issuer states it for nine months 2026. Other stated: regulatory compliance and discontinued product costs; realisation status not stated. |
| Adjusted EBITDA, issuer measure | 247.5 | US$m | Closing measure: issuer-adjusted EBITDA. Opening plus the six add-backs equals this figure; the business optimisation line prints a dash for nine months 2026 and is omitted. |

The bridge is for nine months 2026 only and uses the issuer add-backs as stated.

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 24 |
| Calculated | 14 |
| Assumption-Based | 0 |
| Analyst Inference | 3 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 5 |
| Fields present | 16 |
| Fields total | 16 |
| Source gate | partial |
| CRITICAL | 0 |
| MATERIAL | 5 |
| MINOR | 9 |

## Calculations

| Calculation ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C1 | Gross debt at each balance-sheet date (USD millions): current debt obligations plus long-term debt | FY2023: 9.5 + 1,593.9; FY2024: 9.5 + 1,565.3; FY2025: 9.5 + 1,388.7; 2025-12-31: 9.5 + 1,352.9; 2026-03-31: 9.5 + 1,316.9; 2026-06-30: 139.4 + 1,315.7 | 1,603.4; 1,574.8; 1,398.2; 1,362.4; 1,326.4; 1,455.1 in the same order | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| C2 | Net debt at each balance-sheet date (USD millions): gross debt less unrestricted cash | 1,603.4 - 326.3; 1,574.8 - 267.5; 1,398.2 - 225.5; 1,362.4 - 201.3; 1,326.4 - 184.9; 1,455.1 - 214.7 | 1,277.1; 1,307.3; 1,172.7; 1,161.1; 1,141.5; 1,240.4 in the same order (FY2023, FY2024, FY2025, 2025-12-31, 2026-03-31, 2026-06-30) | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| C3 | Total Liabilities at each balance-sheet column (USD millions): current liabilities plus deferred income taxes and other liabilities plus long-term debt plus non-current finance lease liabilities | FY2023: 353.5 + 57.2 + 1,593.9 + 31.5; FY2024: 374.0 + 54.1 + 1,565.3 + 30.2; FY2025: 261.5 + 62.6 + 1,388.7 + 28.7; Q1 2026: 234.7 + 61.0 + 1,352.9 + 28.2; Q2 2026: 247.3 + 63.4 + 1,316.9 + 27.8; Q3 2026: 419.8 + 115.1 + 1,315.7 + 27.4 | FY2023: 2,036.1; FY2024: 2,023.6; FY2025: 1,741.5; Q1 2026: 1,676.8; Q2 2026: 1,655.4; Q3 2026: 1,878.0; each equals total assets less total equity | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| C4 | EBITDA (Reported) for fiscal years (USD millions): net income plus interest expense, net plus income tax provision plus D&A | FY2023: 70.4 + 107.0 + 35.3 + 32.6; FY2024: 78.3 + 112.3 - 34.1 + 36.2; FY2025: 95.4 + 107.3 + 40.9 + 40.7 | FY2023: 245.3; FY2024: 192.7; FY2025: 284.3 | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, page 103 |
| C5 | Last-twelve-months figures at 2026-06-30 (USD millions): fiscal 2025 plus nine months 2026 less nine months 2025 | Revenue 1,080.4 + 754.7 - 816.4; gross profit 676.8 + 442.8 - 518.3; operating income 242.1 + 167.0 - 185.6; net income 95.4 + 61.1 - 69.0; EBITDA 284.3 + 197.6 - 216.1; operating cash flow 191.7 + 90.1 - 107.7; capital expenditures 9.3 + 2.2 - 2.0 | Revenue 1,018.7; gross profit 601.3; operating income 223.5; net income 87.5; EBITDA 265.8; operating cash flow 174.1; capital expenditures 9.5; free cash flow 164.6 (operating cash flow less capital expenditures) | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–5; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| C6 | Fourth quarter of fiscal 2025 by difference (USD millions): fiscal year less nine months | Revenue 1,080.4 - 816.4; EBITDA 284.3 - 216.1 | Revenue 264.0; EBITDA 68.2; labelled calculated because no standalone quarter is supplied | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| C7 | Total debt / EBITDA (x): gross debt over reported EBITDA | FY2023: 1,603.4 / 245.3; FY2024: 1,574.8 / 192.7; FY2025: 1,398.2 / 284.3; 2026-06-30: 1,455.1 / 265.8 | FY2023: 6.54; FY2024: 8.17; FY2025: 4.92; 2026-06-30: 5.47 | calculation C1; calculation C4; calculation C5 |
| C8 | Net debt / EBITDA (x): net debt over reported EBITDA | FY2023: 1,277.1 / 245.3; FY2024: 1,307.3 / 192.7; FY2025: 1,172.7 / 284.3; 2026-06-30: 1,240.4 / 265.8 | FY2023: 5.21; FY2024: 6.78; FY2025: 4.12; 2026-06-30: 4.67 | calculation C2; calculation C4; calculation C5 |
| C9 | EBITDA / cash interest (x): reported EBITDA over cash paid for interest | FY2023: 245.3 / 111.0; FY2024: 192.7 / 117.7; FY2025: 284.3 / 103.8 | FY2023: 2.21; FY2024: 1.64; FY2025: 2.74; 2026-06-30 is not calculable because nine months 2025 cash interest is not stated | 10-K_2025-09-30_embc.htm.jsonl, page 113; 10-Q_2026-06-30_embc.htm.jsonl, page 22 |
| C10 | Contractual principal at 2026-06-30 (USD millions): sum of the maturity rows | 2.4 + 139.4 + 9.5 + 618.0 + 700.0 | 1,469.3; equals the stated total principal | 10-Q_2026-06-30_embc.htm.jsonl, page 22 |
| C11 | Reconciling items at 2026-06-30 (USD millions): carrying value less contractual principal | 1,455.1 - 1,469.3 (issuance costs and discounts of 14.2 deducted; no debt left out of the ladder) | -14.2; principal plus reconciling items equals carrying value | 10-Q_2026-06-30_embc.htm.jsonl, page 22; 10-Q_2026-06-30_embc.htm.jsonl, page 3 |
| C12 | Undrawn revolver at 2026-06-30 (USD millions): commitment less drawn | 500.0 - 129.9 | 370.1; letters of credit drawn are not stated | 10-Q_2026-06-30_embc.htm.jsonl, page 21 |
| C13 | EBITDA bridge, nine months 2026 (USD millions): reported EBITDA plus add-backs | 197.6 + 15.7 + 15.0 + 16.3 + 7.9 - 8.1 + 3.1 | 247.5; equals issuer-adjusted EBITDA; add-backs total 49.9 | EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, pages 8–11 |
| C14 | Dividend effect on net debt (USD millions) | 56,659,599 shares x USD 0.01 = 566,595.99 dollars, shown as 0.6; net debt 1,240.4 + 0.6; pro forma net debt / reported LTM EBITDA 1,241.0 / 265.8 | Amount 0.6; pro forma net debt 1,241.0; pro forma net leverage 4.67 | 10-Q_2026-06-30_embc.htm.jsonl, page 1; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 5 |
| C15 | Change in net debt from 2025-09-30 to 2026-06-30 (USD millions) | Gross debt 1,455.1 - 1,398.2; cash 214.7 - 225.5; net debt 1,240.4 - 1,172.7 | Gross debt up 56.9; cash down 10.8; net debt up 67.7 | 10-K_2024-09-30_embc.htm.jsonl, page 101; 10-K_2025-09-30_embc.htm.jsonl, pages 101–102; 10-Q_2025-12-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-03-31_embc.htm.jsonl, pages 2–3; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–3 |
| C16 | Free cash flow (USD millions): operating cash flow less capital expenditures | FY2025: 191.7 - 9.3; 9M 2025: 107.7 - 2.0; 9M 2026: 90.1 - 2.2 | FY2025 182.4; 9M 2025 105.7; 9M 2026 87.9 | 10-K_2025-09-30_embc.htm.jsonl, page 103; 10-Q_2026-06-30_embc.htm.jsonl, page 4 |
| C17 | Estimated fair value of debt over carrying value (%) | 2026-06-30: 1,186.2 / 1,455.1; 2026-03-31: 1,294.8 / 1,326.4 | 81.5 percent and 97.6 percent | 10-Q_2026-06-30_embc.htm.jsonl, page 22; 10-Q_2026-03-31_embc.htm.jsonl, page 18 |
| C18 | Revenue and adjusted EBITDA changes (%) | FY2025 revenue 1,080.4 / 1,123.1 - 1; 9M revenue 754.7 / 816.4 - 1; LTM revenue 1,018.7 / 1,080.4 - 1; 9M United States revenue 347.1 / 437.1 - 1; 9M pen needles revenue 517.6 / 596.3 - 1; 9M adjusted EBITDA 247.5 / 325.4 - 1; 9M reported EBITDA 197.6 / 216.1 - 1 | -3.8; -7.6; -5.7; -20.6; -13.2; -23.9; -8.6 (percent, in that order) | 10-K_2025-09-30_embc.htm.jsonl, page 101; 10-Q_2026-06-30_embc.htm.jsonl, page 2; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| C19 | Margins and ratios on the KPI dashboard (%) | Gross margin = gross profit / revenue; operating margin = operating income / revenue; EBITDA margin = reported EBITDA / revenue; operating cash flow conversion = operating cash flow / reported EBITDA; capital expenditures over revenue; United States share = United States revenue / revenue | See the KPI dashboard for each period; each is the stated numerator over the stated denominator, one decimal | 10-K_2025-09-30_embc.htm.jsonl, pages 101–103; 10-Q_2026-06-30_embc.htm.jsonl, pages 2–4; EX99.1_2026-06-30_embc_q32026ex-991-htm.htm.jsonl, page 8 |
| C20 | Receivables sold as a share of nine-month revenue (%) | 167.2 / 754.7 | 22.2 percent | 10-Q_2026-06-30_embc.htm.jsonl, page 25; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |
| C21 | Quarterly interest expense, net (USD millions) | Second quarter 2026: 22.6; third quarter 2026: 23.9; 23.9 - 22.6 | Up 1.3 from the second quarter to the third | 10-Q_2026-03-31_embc.htm.jsonl, page 2; 10-Q_2026-06-30_embc.htm.jsonl, page 2 |

## Gaps

- Adjusted EBITDA for fiscal 2023, 2024 and 2025 and for any twelve-month period is not stated in the annual reports or the supplied releases, which give it only for quarters and nine months; leverage and cover on the issuer-adjusted measure are not calculable for the latest period. Severity High. The fourth-quarter fiscal 2025 release or a fiscal 2025 adjusted EBITDA reconciliation would close it.
- Cash interest paid for nine months 2025 is not stated, so cash interest and EBITDA cover for the last twelve months to 2026-06-30 are not calculable. Severity Medium. The third-quarter fiscal 2025 quarterly report would close it.
- No standalone quarter ended 2025-09-30 and no as-filed fiscal 2025 interim reports are supplied, so the fourth quarter of fiscal 2025 exists only by difference, labelled calculated, and fiscal 2025 interim balance sheets are not shown. Severity Low. Supplying the fiscal 2025 interim reports would close it.
- Lines the issuer prints as dashes, impairment expense in fiscal 2024 and 2025 and several cash flow, balance sheet and related-party lines in some periods, are recorded as not supplied, not as zero, in the statement tables; lines that exist in one statement and not another show not supplied in the other columns. Severity Low. No action unless a source states a value.
- The lien priority of the 5.00% and 6.75% senior secured notes against the first lien credit agreement is not stated, so no ranked debt stack or cumulative leverage is written and USD 700.0 million of secured debt cannot be placed. Severity Medium. The indentures or the credit agreement would close it.
- Letters of credit drawn on the revolver are not stated, so undrawn committed facilities are the commitment less drawings and may be overstated. Severity Medium. The compliance certificate or credit agreement schedules would close it.
- The revolver drawing and commitment at 2023-09-30 and the debt principal at 2023-09-30 are not stated in the supplied reports, so fiscal 2023 undrawn facilities and principal are not supplied. Severity Low. The fiscal 2023 annual report would close it.
- Segment revenue: the issuer reports one operating segment, so there is no segment schedule; revenue by region and product family is in the KPI dashboard for each fiscal year and nine-month period, and no segment sum is stated. Severity Low.
- The EBITDA reconciliation prints D&A of 31.0 for nine months 2026 while the cash flow statement prints 31.1, a difference of USD 0.1 million that is kept as stated by each source. Severity Low.
- The six-month cash flow statement carries a financing line for unremitted cash collections from factored receivables that the nine-month statement does not, and the filings do not explain the change; each period is kept as printed. Severity Low.
- Events after 2026-06-30 are limited to the 2026-08-06 credit agreement amendment and the dividend payable on 2026-09-15; nothing after 2026-08-07 is supplied, the dividend amount rests on the share count at 2026-07-31, and payment is not confirmed. Severity Medium. Later filings would close it.
- Maintenance and growth capital expenditures are not separated in any supplied document; total capital expenditures only are carried. Severity Low.
- Pension and similar obligations are small: the annual report states an unfunded net pension obligation of USD 3.9 million for the Swiss plan at 2025-09-30 and a deferred compensation plan balance of USD 12.1 million; no larger retiree obligation is stated and both sit outside the debt figure. Severity Low.
- Contingent consideration for Owen Mumford of USD 38.9 million at 2026-06-30 and the securities class action are liabilities outside debt and outside the net debt figure; the class action loss range is not estimable per the filing. Severity Low.

## Next module

The orchestrator selects the next module.
