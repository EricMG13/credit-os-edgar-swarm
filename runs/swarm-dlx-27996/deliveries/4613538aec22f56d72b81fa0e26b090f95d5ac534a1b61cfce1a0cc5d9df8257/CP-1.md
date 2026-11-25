---
issuer_id: dlx-27996
module_id: CP-1
analysis_date: 2026-11-18
run_id: dlx-27996-2026-11-18-credit_snapshot-host
module_status: Complete
---

# Deluxe Corp: financial foundation as of 2026-11-18

## Request

Issuer: Deluxe Corp (Deluxe Corporation, issuer id dlx-27996), as of 2026-11-18, pathway credit_snapshot. Scope: extraction and normalisation of the statements, debt, liquidity and credit metrics for FY2024, FY2025 and the quarter ended 2026-09-30 from the nine supplied issuer documents. It rests on the accepted Source readiness handoff for the same run.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2024, amounts in thousands | 2025-02-21 | 67b837bad3689eb57ce7992f50b42dfca6328fb57096d791edfb119f64350c9b | Checked for the FY2024 net debt and adjusted EBITDA, the FY2024 revolver availability and units; FY2024 statement figures are taken from the FY2025 annual report in millions |
| 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025, audited | 2026-02-13 | ef88882c6698cca61424cd4266ad2d1415faefa761efc11835cff37bacdc604f | FY2024 and FY2025 income statement, cash flow statement, balance sheet, debt note, net debt, adjusted EBITDA reconciliation and cash interest paid |
| 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-05-07 | c6188e96c3e25ebda32357958a20d50628042058c0369e7bab137dca4608900b | 31 March 2026 balance sheet, debt note, revolver availability and first-quarter cash interest paid |
| 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-08-06 | 6a449761454530caf50ba1d8051436ea4a62cc2fe61b463317de655ff7e9cacd | 30 June 2026 balance sheet, debt note, revolver availability and half-year cash interest paid |
| 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-11-05 | 1a71979ca733787a8d7d440764f230a4c6087a6a46bd4d2a31266efdae557532 | Quarter and nine-month statements, 30 September 2026 balance sheet, debt note, maturities, revolver availability, cash interest paid and the Celero acquisition |
| EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-06 | 3217064ddd0f8be66f70bf58b3cfa43fb7f3bab05ab19f8cba13be318ddb127f | Reported EBITDA and adjusted EBITDA for the first quarter of 2026 and 2025 |
| EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-05 | a7e482691fc66cd72f252a397273479f8d1cf0baae2887ed394bca26096905f8 | Reported EBITDA and adjusted EBITDA for the six months of 2026 and 2025 |
| EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Press release (Exhibit 99.1) announcing the closing of the Celero Commerce acquisition | 2026-07-31 | 96c47ce241c8b97cc47962d6a8e9dc36a99d834425d3b9e5d0db820b9c76c8e7 | Closing date of the Celero acquisition (subsequent event to the 30 June 2026 balance sheet) |
| EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Earnings release (Exhibit 99.1) for the third quarter of 2026 | 2026-11-04 | e21b511b9fd3407ed636f1231d5c628d21b48ef3b99e88c5de6567c6c15ea9e2 | Reported EBITDA for the quarter and nine months, comparable adjusted measures and the 2026 outlook |

The document date is the date the document states: the signature date for the annual and quarterly reports (their filing dates are not stated) and the release date for the three releases.

| Module | Handoff | sha256 | Use |
| --- | --- | --- | --- |
| CP-0 | Source readiness | dde3cf6f06d2c1c98c80521e113682bfb408d46bf030839f8f3f80bdf1429706 | Source set, document dates, locator checks, and the list of executed financing documents that are not supplied |

## Findings

### Bottom line

Debt financing of the Celero acquisition lifted net debt to 4.92x trailing reported EBITDA at 30 September 2026 from 3.28x at 30 June 2026, so creditors now carry materially higher leverage on earnings that include only two months of Celero.

Total debt was USD 2,004.1 million against USD 1,352.2 million three months earlier, and cash interest cover of 3.45x carries the same two-month mismatch. Liquidity was USD 264.7 million, made up of USD 74.9 million of cash and USD 189.8 million of undrawn revolver.
Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 18, 21; calculation C-4; calculation C-5; calculation C-17; calculation C-25

### Key findings

- Reported net leverage fell from 4.02x at FY2024 to 3.28x at 30 June 2026 as net debt declined by USD 151.4 million to USD 1,317.3 million and trailing reported EBITDA rose from USD 365.2 million to USD 402.2 million. Net debt then rose by USD 611.9 million in the third quarter, in which the USD 642.9 million cash purchase of Celero was funded with a larger term loan and USD 200.5 million drawn on the revolver, so the open question is whether combined earnings restore leverage toward the earlier level.
  Basis: calculation C-1; calculation C-4; calculation C-5; calculation C-18; calculation C-23; calculation C-27; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 18, 21
- On the issuer's adjusted EBITDA, net leverage was 3.05x at 31 March 2026 and 2.92x at 30 June 2026 before rising to 4.20x at 30 September 2026. Adjusted EBITDA exceeds reported EBITDA by USD 52.6 million in FY2025, from share-based compensation, restructuring, impairment and legal items, so the adjusted ratios stand beside the reported ones and not in place of them.
  Basis: calculation C-19; calculation C-26; 10-K_2025-12-31_dlx.htm.jsonl, page 51
- Trailing reported EBITDA covered cash interest paid 3.45x at 30 September 2026 against 3.40x at FY2025 and 3.10x at FY2024. The USD 113.8 million of trailing cash interest holds only two months of interest on the enlarged debt, as the trailing EBITDA holds only two months of Celero, so the ratio is not a pro forma measure.
  Basis: calculation C-25; calculation C-26; 10-Q_2026-09-30_dlx.htm.jsonl, page 44; 10-K_2025-12-31_dlx.htm.jsonl, page 56
- Operating cash flow was USD 215.9 million over nine months of 2026, USD 47.4 million above the prior year, and free cash flow of USD 134.9 million equals 44% of reported EBITDA. The issuer attributes part of the gain to lower income tax payments from the 2025 federal tax law changes, so part of the improvement reflects tax payments rather than operations.
  Basis: calculation C-20; calculation C-21; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 38, 44
- A financing outflow of USD 256.9 million in the nine months is the unwinding of settlement processing obligations, which fell from USD 275.0 million at FY2025 to USD 18.1 million at 30 September 2026, and is not debt repayment. The obligations are held against restricted settlement assets of USD 16.6 million at 30 September 2026 and USD 273.6 million at FY2025, so the balance is a pass-through float rather than borrowing, but it makes closing cash and the net change in cash a poor guide to cash generation.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 4; 10-K_2025-12-31_dlx.htm.jsonl, page 66
- Liquidity fell from USD 416.5 million at FY2025 to USD 264.7 million at 30 September 2026 as revolver drawings rose from USD 13.0 million to USD 200.5 million. Principal due is small until 2029: USD 15.0 million in the remainder of 2026, USD 60.0 million in 2027 and USD 160.0 million in 2028, which includes the securitization facility, before USD 985.0 million in 2029.
  Basis: calculation C-14; calculation C-17; calculation C-7; 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19, 21; 10-K_2025-12-31_dlx.htm.jsonl, page 108
- Reported EBITDA is calculated for FY2024 and FY2025 because the annual reports print only adjusted EBITDA, and debt is taken at carrying value, USD 21.4 million below principal. The Celero price appears as USD 625.0 million of cash consideration, USD 664.6 million of consideration transferred and USD 642.9 million of cash paid net of cash acquired, and each figure is kept for its own role.
  Basis: calculation C-8; calculation C-9; calculation C-6; calculation C-23; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12, 18
- Claims outside the debt figure are mainly leases and service commitments: finance lease liabilities rose from USD 25.8 million at FY2025 to USD 75.3 million after a new 16-year facility lease of USD 49.6 million, operating lease liabilities are USD 42.8 million non-current, and service contract commitments were about USD 210.0 million at FY2025. The retiree plan is an asset of USD 136.5 million, and no factoring, supply-chain finance or consent decree funding appears.
  Basis: 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 9, 23–24; 10-K_2025-12-31_dlx.htm.jsonl, pages 57, 110

### Contrary evidence and what would change the view

The strongest case that the 4.92x overstates the strain is the two-month Celero contribution: the issuer raised its 2026 outlook for revenue and adjusted EBITDA after the closing and expects cost savings from combining the businesses, and the trailing earnings carry neither a full year of Celero nor any saving. A full-year or pro forma earnings figure for Celero, which the filings do not print, would lower the ratio by an amount that cannot be worked from the sources. The view would improve if a year-end balance sheet showed net debt falling toward the earlier level.
Basis: EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2; EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl, page 1; 10-Q_2026-09-30_dlx.htm.jsonl, page 13; calculation C-5

### Limitations

- Each interim ratio rests on trailing figures built from quarterly releases and reports that print one decimal, so the components carry rounding of about USD 0.1 million.
  Basis: calculation C-25
- No balance sheet after 30 September 2026 exists in the sources, so the December dividend is the only post-balance-sheet event found and its cash amount is not stated.
  Basis: EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 2
- The issuer cites a leverage target of three times without defining it, so the target is not compared with the ratios here.
  Basis: EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 1


### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| Q3 2025 | 2025-07-01 | 2025-09-30 |
| Q3 2026 | 2026-07-01 | 2026-09-30 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |
| Q1 2026 | 2026-01-01 | 2026-03-31 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2024-12-31_dlx.htm.jsonl | Annual report on Form 10-K | FY2024, with FY2023 and FY2022 comparatives | USD | thousands | Deluxe Corporation consolidated | US GAAP | Tier 1 audited | Cross-check of FY2024 net debt, adjusted EBITDA and revolver availability; units | Prints thousands; its FY2024 figures are restated in millions in the FY2025 annual report |
| 10-K_2025-12-31_dlx.htm.jsonl | Annual report on Form 10-K | FY2025, with FY2024 and FY2023 comparatives | USD | millions | Deluxe Corporation consolidated | US GAAP | Tier 1 audited | FY2024 and FY2025 statements, debt note, net debt and adjusted EBITDA reconciliation | Prints adjusted EBITDA only; reported EBITDA is calculated |
| 10-Q_2026-03-31_dlx.htm.jsonl | Quarterly report on Form 10-Q | Quarter ended 2026-03-31, with 2025 comparatives | USD | millions | Deluxe Corporation consolidated | US GAAP | Tier 2b unaudited, auditor review not stated | 31 March 2026 balances and first-quarter cash interest | Interim; facility terms before the July 2026 amendment |
| 10-Q_2026-06-30_dlx.htm.jsonl | Quarterly report on Form 10-Q | Quarter and six months ended 2026-06-30, with 2025 comparatives | USD | millions | Deluxe Corporation consolidated | US GAAP | Tier 2b unaudited, auditor review not stated | 30 June 2026 balances and half-year cash interest | Excludes Celero, which closed on 2026-07-31 |
| 10-Q_2026-09-30_dlx.htm.jsonl | Quarterly report on Form 10-Q | Quarter and nine months ended 2026-09-30, with 2025 comparatives | USD | millions | Deluxe Corporation consolidated, Celero from 2026-07-31 | US GAAP | Tier 2b unaudited, auditor review not stated | Current-period statements, debt note, liquidity and acquisition disclosures | Celero purchase price allocation is preliminary |
| EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter ended 2026-03-31 | USD | millions | Deluxe Corporation consolidated | Non-GAAP reconciled to US GAAP | Tier 2b unaudited issuer release | Reported EBITDA and adjusted EBITDA for Q1 2026 and Q1 2025 | Management measures |
| EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and six months ended 2026-06-30 | USD | millions | Deluxe Corporation consolidated | Non-GAAP reconciled to US GAAP | Tier 2b unaudited issuer release | Reported EBITDA and adjusted EBITDA for H1 2026 and H1 2025 | Management measures |
| EX99.1_2026-06-30_dlx_tm2621737d1-ex99-1-htm.htm.jsonl | Press release, Exhibit 99.1 | Event of 2026-07-31 | USD | not applicable | Celero Commerce acquisition | Not applicable | Tier 2b issuer announcement | Closing date as a subsequent event to the 30 June 2026 balance sheet | No financial statements |
| EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Earnings release, Exhibit 99.1 | Quarter and nine months ended 2026-09-30 | USD | millions | Deluxe Corporation consolidated | Non-GAAP reconciled to US GAAP | Tier 2b unaudited issuer release | Reported EBITDA for Q3 2026 and nine months 2026; 2026 outlook | Management measures and guidance |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deluxe Corporation | Issuer and borrower under the credit agreement; consolidated parent | 31 December | USD | millions | Consolidated: the company and its subsidiaries; Celero from 2026-07-31 | US GAAP | FY2024, FY2025, Q1, H1, Q3 and nine months 2026, with 2025 comparatives |
| Deluxe Receivables LLC | Wholly owned subsidiary; borrower under the securitization facility | 31 December | USD | millions | Consolidated; the facility is a secured financing and its borrowings are in long-term debt | US GAAP | 2024-12-31 to 2026-09-30 |
| Subsidiary guarantors | Guarantors of the credit agreement; not named in the sources | Not supplied: not stated | USD | millions | Not supplied: the sources name no guarantor | US GAAP | Not supplied: no list in the sources |
| Celero Commerce | Acquired business in Merchant Services; closed 2026-07-31 | Not supplied: not stated | USD | millions | Consolidated from 2026-07-31 only | US GAAP | 2026-07-31 to 2026-09-30 |

Subsequent events are kept out of period figures: the Celero acquisition closed on 31 July 2026, after the 30 June 2026 balance sheet and inside the third quarter, and a quarterly dividend is payable on 1 December 2026, after the 30 September 2026 balance sheet.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| FY2024 statements taken from the FY2025 annual report in millions | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–69 | Source selection | FY2024 in thousands in the FY2024 annual report | FY2024 in millions as comparatives | One unit across the statement tables; no conversion of any statement figure | FY2024 |
| FY2024 revolver availability restated from thousands to millions | 10-K_2024-12-31_dlx.htm.jsonl, page 116 | Unit restatement | 374,302 thousand | 374.3 million | Only the FY2024 revolver availability is not printed in millions; rounded to one decimal | FY2024 |
| Total Liabilities calculated as the sum of the printed liability lines | Balance sheet lines | Calculation | Not printed | FY2024 2,210.1; FY2025 2,182.9; Q3 2026 2,575.8 | The balance sheets print no total liabilities; equals total assets less total equity | FY2024, FY2025, Q3 2026 |
| EBITDA (Reported) for fiscal years calculated | Annual report reconciliation lines | Calculation | Not printed | FY2024 365.2; FY2025 378.9 | Net income less non-controlling interest plus interest expense, income tax and depreciation and amortization, the construction the quarterly releases use for their printed EBITDA | FY2024, FY2025 |
| Last-twelve-months figures constructed | Annual and interim reports and releases | Derived period | Not printed | See the constructed period register | Latest full year plus current stub less prior-year stub | 2026-03-31, 2026-06-30, 2026-09-30 |
| Total Debt taken at carrying value, not principal | Debt notes | Basis | Principal 1,444.4 and 2,025.5 | Carrying 1,429.4 and 2,004.1 | Debt is balance-sheet carrying value; the difference is the unamortized discount and issuance costs | FY2025, Q3 2026 |
| Finance lease liabilities kept outside Total Debt | Balance sheets | Perimeter | Separate line 75.3 at 2026-09-30 | Not added to Total Debt | Leases the issuer presents on their own lines are not added; the issuer net debt excludes them | Q3 2026 |
| Cash taken as unrestricted cash and cash equivalents | Balance sheets | Perimeter | Total cash including restricted 94.2 | Cash & Equivalents 74.9 | The issuer net debt uses unrestricted cash; restricted cash of 19.3 is excluded | Q3 2026 |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | Q3 2025 | Q3 2026 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Service revenue | 916.4 | 995.4 | 259.4 | 313.6 | 747.5 | 852.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Product revenue | 1,205.4 | 1,137.8 | 280.8 | 240.3 | 850.5 | 738.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Total revenue | 2,121.8 | 2,133.2 | 540.2 | 553.9 | 1,598.0 | 1,591.2 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Cost of services | -540.2 | -573.3 | -145.5 | -176.1 | -428.6 | -491.0 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Cost of products | -455.1 | -429.2 | -103.6 | -90.2 | -318.0 | -273.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Total cost of revenue | -995.3 | -1,002.5 | -249.1 | -266.3 | -746.6 | -764.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Selling, general and administrative expense | -909.2 | -873.3 | -212.4 | -226.2 | -652.1 | -637.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Restructuring and integration expense | -48.6 | -19.3 | -2.9 | -8.7 | -14.6 | -13.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Asset impairment charges | -7.7 | -5.7 | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | Not supplied: the interim statement prints no such line | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Gain on sale of businesses and long-lived assets | 31.2 | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | 5.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Operating income | 192.2 | 232.4 | 75.8 | 52.7 | 184.7 | 180.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Interest expense | -123.3 | -122.0 | -30.5 | -35.0 | -92.8 | -90.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Other income, net | 7.6 | 8.7 | 1.9 | 2.0 | 6.2 | 6.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Income before income taxes | 76.5 | 119.1 | 47.2 | 19.7 | 98.1 | 96.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Income tax provision | -23.6 | -36.9 | -13.5 | -6.7 | -27.9 | -28.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Net income | 52.9 | 82.2 | 33.7 | 13.0 | 70.2 | 68.0 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Net income attributable to non-controlling interest | -0.1 | -0.1 | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | -0.1 | -0.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Net income attributable to Deluxe | 52.8 | 82.1 | 33.7 | 13.0 | 70.1 | 67.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| Depreciation and amortization expense | 165.5 | 137.9 | 32.3 | 45.4 | 101.0 | 118.3 | USD millions | Reported in the issuer reconciliation of net income to adjusted EBITDA | 10-K_2025-12-31_dlx.htm.jsonl, page 51; 10-Q_2026-09-30_dlx.htm.jsonl, page 39 |
| Share-based compensation expense | 19.9 | 24.9 | 6.0 | 6.5 | 17.6 | 19.7 | USD millions | Reported in the issuer reconciliation of net income to adjusted EBITDA | 10-K_2025-12-31_dlx.htm.jsonl, page 51; 10-Q_2026-09-30_dlx.htm.jsonl, page 39 |
| Diluted earnings per share | 1.18 | 1.80 | 0.74 | 0.28 | 1.54 | 1.46 | USD per share | Reported | 10-K_2025-12-31_dlx.htm.jsonl, page 67; 10-Q_2026-09-30_dlx.htm.jsonl, page 3 |
| EBITDA (Reported) | 365.2 | 378.9 | 110.0 | 100.1 | 291.8 | 305.2 | USD millions | FY2024 and FY2025 calculated (net income less non-controlling interest plus interest, tax and depreciation and amortization); interim columns as printed by the issuer | 10-K_2025-12-31_dlx.htm.jsonl, page 51; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 4, 6; EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 4; EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl, page 4 |
| EBITDA (Adjusted) | 412.1 | 431.5 | 118.9 | 127.1 | 325.5 | 353.8 | USD millions | Issuer-adjusted EBITDA as printed; add-backs are in the EBITDA bridge | 10-K_2025-12-31_dlx.htm.jsonl, page 51; 10-Q_2026-09-30_dlx.htm.jsonl, page 39; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, page 4 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net income | 52.9 | 82.2 | 70.2 | 68.0 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Amortization of intangibles | 143.3 | 116.2 | 84.2 | 100.4 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Depreciation | 22.2 | 21.7 | 16.8 | 17.9 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Deferred income taxes | -20.4 | 26.5 | 16.1 | 24.3 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Amortization of prepaid product discounts | 35.2 | 32.5 | 24.5 | 21.5 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Employee share-based compensation expense | 19.9 | 24.9 | 17.6 | 19.7 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Operating lease expense | 18.3 | 14.5 | 10.9 | 10.7 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Amortization of cloud computing arrangement implementation costs | 16.5 | 15.4 | 11.8 | 7.1 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Asset impairment charges | 7.7 | 5.7 | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Gain on sale of businesses and long-lived assets | -31.2 | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | -5.1 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Other non-cash items, net | 38.8 | 22.1 | 16.5 | 19.7 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Trade accounts receivable | 3.5 | -19.9 | -20.7 | 1.1 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Inventories and supplies | 2.5 | 2.7 | 2.6 | -2.8 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Other current and non-current assets | -35.2 | -20.5 | -19.5 | -32.5 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Accounts payable | 10.5 | -3.9 | -8.7 | 3.4 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Prepaid product discount payments | -29.8 | -29.2 | -22.9 | -20.4 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Other accrued and non-current liabilities | -60.4 | -20.3 | -30.9 | -17.1 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Net Cash from Operating Activities | 194.3 | 270.6 | 168.5 | 215.9 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Purchases of capital assets | -94.3 | -95.3 | -72.6 | -81.0 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Residual commission buy-out | Not supplied: printed as a dash, which the method reads as missing, not zero | -36.0 | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Payment for acquisition | Not supplied: printed as a dash, which the method reads as missing, not zero | -12.1 | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Payments for acquisitions, net of cash, cash equivalents, restricted cash, and restricted cash equivalents acquired | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | -12.1 | -642.9 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Proceeds from company-owned life insurance policies | 1.5 | 5.8 | 3.0 | 34.0 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Proceeds from sale of businesses and long-lived assets | 23.3 | 2.0 | 2.0 | 10.8 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Proceeds from sale of settlement processing asset debt securities | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: printed as a dash, which the method reads as missing, not zero | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Other investing | -0.3 | 3.9 | 3.7 | 3.3 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Net Cash from Investing Activities | -69.8 | -131.7 | -76.0 | -675.8 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Proceeds from issuing long-term debt and swingline loans | 1,807.6 | 441.3 | 312.8 | 1,168.7 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Payments on long-term debt and swingline loans | -1,889.9 | -518.8 | -368.9 | -587.6 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Payments for debt issuance costs | -15.2 | -0.6 | Not supplied: printed as a dash, which the method reads as missing, not zero | -12.6 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Cash dividends paid to shareholders | -54.2 | -55.2 | -41.6 | -43.0 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Holdback payments for acquired assets | Not supplied: not a line of this period's cash flow statement | Not supplied: not a line of this period's cash flow statement | -0.6 | -13.0 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Net change in settlement processing obligations | -108.0 | 2.2 | -236.0 | -256.9 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Other financing | -7.5 | -5.7 | -5.0 | -13.3 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Net Cash from Financing Activities | -267.2 | -136.8 | -339.3 | 242.3 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| FX Effect on Cash | -6.1 | 1.7 | 1.2 | -1.2 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Net Cash Change | -148.8 | 3.8 | -245.6 | -218.8 | USD millions | Reported; outflows negative | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Opening Cash | 458.0 | 309.2 | 309.2 | 313.0 | USD millions | Statement total as printed; cash, cash equivalents, restricted cash and restricted cash equivalents | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Closing Cash | 309.2 | 313.0 | 63.6 | 94.2 | USD millions | Statement total as printed; cash, cash equivalents, restricted cash and restricted cash equivalents | 10-K_2025-12-31_dlx.htm.jsonl, pages 68–69; 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5 |
| Cash Interest Paid | 117.8 | 111.6 | 83.6 | 85.8 | USD millions | Cash interest paid is printed in the cash flow discussion, not on the statement; cash interest expense differs from interest expense | 10-K_2025-12-31_dlx.htm.jsonl, page 56; 10-Q_2026-09-30_dlx.htm.jsonl, page 44 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | Q3 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- |
| Cash and cash equivalents | 34.4 | 36.9 | 74.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Settlement processing assets | 271.9 | 273.6 | 16.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Trade accounts receivable, net of allowance for credit losses | 174.1 | 187.6 | 198.7 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Inventories and supplies, net of reserve | 36.4 | 33.5 | 35.7 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Prepaid expenses | 32.7 | 33.3 | 35.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Revenue in excess of billings | 26.7 | 30.8 | 46.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Other current assets | 35.4 | 70.1 | 49.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total current assets | 611.6 | 665.8 | 456.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Goodwill | 1,422.7 | 1,422.8 | 1,808.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Intangibles, net of accumulated amortization | 331.1 | 348.4 | 566.2 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Property, plant and equipment, net of accumulated depreciation | 111.6 | 101.0 | 149.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Operating lease assets | 49.4 | 43.0 | 47.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Long-term investments | 61.0 | 26.4 | 7.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Deferred income taxes (asset) | 7.0 | 1.8 | 1.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Other non-current assets | 236.6 | 254.4 | 256.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total Assets | 2,831.0 | 2,863.6 | 3,293.6 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Accounts payable | 164.9 | 161.3 | 175.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Settlement processing obligations | 273.9 | 275.0 | 18.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Accrued liabilities | 149.6 | 190.6 | 173.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Current portion of long-term debt | 37.1 | 16.3 | 59.1 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total current liabilities | 625.5 | 643.2 | 426.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Long-term debt | 1,466.0 | 1,413.1 | 1,945.0 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Finance lease liabilities | Not supplied: not a separate line of this balance sheet | Not supplied: not a separate line of this balance sheet | 75.3 | USD millions | Separate line from the 2026 reports; before then inside other non-current liabilities | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Operating lease liabilities (non-current) | 49.0 | 39.8 | 42.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Deferred income taxes (liability) | 2.1 | 27.0 | 57.3 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Other non-current liabilities | 67.5 | 59.8 | 29.0 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total Liabilities | 2,210.1 | 2,182.9 | 2,575.8 | USD millions | Calculated as the sum of the printed liability lines | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Common shares | 44.3 | 45.0 | 45.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Additional paid-in capital | 117.1 | 138.0 | 145.9 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Retained earnings | 489.2 | 515.9 | 541.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Accumulated other comprehensive loss | -29.9 | -18.5 | -15.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Non-controlling interest | 0.2 | 0.3 | 0.4 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total Equity | 620.9 | 680.7 | 717.8 | USD millions | Reported | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Total Debt | 1,503.1 | 1,429.4 | 2,004.1 | USD millions | Carrying value: current portion plus long-term debt, net of discount and issuance costs; includes securitization obligations; excludes finance and operating lease liabilities | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| Cash & Equivalents | 34.4 | 36.9 | 74.9 | USD millions | Unrestricted cash and cash equivalents; restricted cash is in settlement processing assets and other non-current assets | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67; 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Senior secured first lien term loan facility | Term loan | 787.9 | 800.0 | 800.0 | 800.0 | First lien; secured by substantially all assets of the company and its subsidiary guarantors, subject to exceptions | First lien | USD | 787.9 | Not applicable | Weighted-average rate 6.1% at 2026-09-30; margin varies with the consolidated leverage ratio and the grid is not stated | Floating | Term SOFR or an alternative base rate | Not supplied: margin grid not stated | Not supplied: not stated | 2031-07-31 | 60.0 a year: 15.0 each quarter from 2026-12-31 to 2030-09-30, then 20.0 each quarter | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19–20, 49 |
| Senior secured first lien revolving credit facility | Revolver | 200.5 | 200.5 | 200.5 | 400.0 | First lien; same collateral and guarantors as the term loan | First lien | USD | 200.5 | Not applicable | Weighted-average rate 6.1% at 2026-09-30; margin varies with the consolidated leverage ratio and the grid is not stated | Floating | Term SOFR or an alternative base rate | Not supplied: margin grid not stated | Not supplied: not stated | 2031-07-31 | 0 (revolving; no scheduled amortisation) | 10-Q_2026-09-30_dlx.htm.jsonl, pages 19, 21, 49 |
| 8.0% senior unsecured notes | Notes | 471.4 | 475.0 | 475.0 | Not applicable | Not supplied: the filings name the notes senior unsecured and state no collateral or guarantee terms | Not supplied: rank against the first lien facilities is not stated | USD | 471.4 | Not applicable | 8.0% (500.0 issued in 2021; 25.0 repurchased in 2022) | Fixed | Not applicable | Not applicable | Not applicable | 2029-06 (day not stated) | 0 (bullet) | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21, 49 |
| 8.125% senior secured notes | Notes | 444.3 | 450.0 | 450.0 | Not applicable | Not supplied: the filings name the notes senior secured and state no collateral terms | Not supplied: rank against the first lien facilities is not stated | USD | 444.3 | Not applicable | 8.125% | Fixed | Not applicable | Not applicable | Not applicable | 2029-09 (2029-02-01 if any of the 2021 notes remain outstanding on that date) | 0 (bullet) | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21, 49 |
| Securitization facility of Deluxe Receivables LLC | Receivables financing | 100.0 | 100.0 | 100.0 | 100.0 maximum, subject to a borrowing base | Secured by pledged receivables of about 140.0 | Not supplied: rank against the other debt is not stated | USD | 100.0 | Not applicable | 5.21% at 2026-09-30 | Floating | Commercial paper rate when funded by a conduit, otherwise SOFR | Not supplied: margin not stated | Not supplied: not stated | 2028-12 (day not stated) | 0 (no scheduled amortisation stated) | 10-Q_2026-09-30_dlx.htm.jsonl, pages 21–22, 49 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component (USD millions) | Current Stub (USD millions) | Prior-Year Stub (USD millions) | Derived Value (USD millions) | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) | LTM to 2026-03-31 | 378.9 | 111.0 | 85.9 | 404.0 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | FY2025 reported EBITDA is calculated; stubs are the first quarter printed in the issuer release |
| EBITDA (Adjusted) | LTM to 2026-03-31 | 431.5 | 117.9 | 100.2 | 449.2 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl | Issuer-adjusted; includes the Safeguard business exit in the prior-year stub |
| Cash Interest Paid | LTM to 2026-03-31 | 111.6 | 26.0 | 24.7 | 112.9 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-03-31_dlx.htm.jsonl | Interest payments in operating cash flow |
| EBITDA (Reported) | LTM to 2026-06-30 | 378.9 | 205.1 | 181.8 | 402.2 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | FY2025 reported EBITDA is calculated; stubs are the six months printed in the issuer release |
| EBITDA (Adjusted) | LTM to 2026-06-30 | 431.5 | 226.7 | 206.6 | 451.6 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-06-30_dlx_exhibit991080520268-k-htm.htm.jsonl | Issuer-adjusted; includes the Safeguard business exit in the prior-year stub |
| Cash Interest Paid | LTM to 2026-06-30 | 111.6 | 52.8 | 54.9 | 109.5 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-06-30_dlx.htm.jsonl | Interest payments in operating cash flow |
| EBITDA (Reported) | LTM to 2026-09-30 | 378.9 | 305.2 | 291.8 | 392.3 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | FY2025 reported EBITDA is calculated; stubs are the nine months printed in the issuer release |
| EBITDA (Adjusted) | LTM to 2026-09-30 | 431.5 | 353.8 | 325.5 | 459.8 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl | Issuer-adjusted; includes the Safeguard business exit in the prior-year stub |
| Cash Interest Paid | LTM to 2026-09-30 | 111.6 | 85.8 | 83.6 | 113.8 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-09-30_dlx.htm.jsonl | Interest payments in operating cash flow; includes only two months of interest on the Celero financing |
| Revenue | LTM to 2026-09-30 | 2,133.2 | 1,591.2 | 1,598.0 | 2,126.4 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-09-30_dlx.htm.jsonl | Includes the Safeguard business exit in the prior-year stub and two months of Celero in the current stub |
| Net income | LTM to 2026-09-30 | 82.2 | 68.0 | 70.2 | 80.0 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-09-30_dlx.htm.jsonl | Includes acquisition transaction costs in the current stub |
| Net Cash from Operating Activities | LTM to 2026-09-30 | 270.6 | 215.9 | 168.5 | 318.0 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-09-30_dlx.htm.jsonl | Cash flow statement totals |
| Purchases of capital assets | LTM to 2026-09-30 | 95.3 | 81.0 | 72.6 | 103.7 | Calculated | 10-K_2025-12-31_dlx.htm.jsonl; 10-Q_2026-09-30_dlx.htm.jsonl | Positive amount of cash paid |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,503.1 | Net debt data, FY2024 / 2024-12-31 | 365.2 | Income statement, EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.12 | Calculated | Tier 1 | carrying value over reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,468.7 | Net debt data, FY2024 / 2024-12-31 | 365.2 | Income statement, EBITDA (Reported), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 4.02 | Calculated | Tier 1 | net of unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 365.2 | Income statement, EBITDA (Reported), FY2024 | 117.8 | Cash flow statement, Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.10 | Calculated | Tier 1 | cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,503.1 | Net debt data, FY2024 / 2024-12-31 | 412.1 | Income statement, EBITDA (Adjusted), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.65 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,468.7 | Net debt data, FY2024 / 2024-12-31 | 412.1 | Income statement, EBITDA (Adjusted), FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.56 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 412.1 | Income statement, EBITDA (Adjusted), FY2024 | 117.8 | Cash flow statement, Cash Interest Paid, FY2024 | FY2024 / 2024-12-31 | USD | US$m | 3.50 | Calculated | Tier 1 | issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,429.4 | Net debt data, FY2025 / 2025-12-31 | 378.9 | Income statement, EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.77 | Calculated | Tier 1 | carrying value over reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,392.5 | Net debt data, FY2025 / 2025-12-31 | 378.9 | Income statement, EBITDA (Reported), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.68 | Calculated | Tier 1 | net of unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 378.9 | Income statement, EBITDA (Reported), FY2025 | 111.6 | Cash flow statement, Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.40 | Calculated | Tier 1 | cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,429.4 | Net debt data, FY2025 / 2025-12-31 | 431.5 | Income statement, EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.31 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,392.5 | Net debt data, FY2025 / 2025-12-31 | 431.5 | Income statement, EBITDA (Adjusted), FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.23 | Calculated | Tier 1 | issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 431.5 | Income statement, EBITDA (Adjusted), FY2025 | 111.6 | Cash flow statement, Cash Interest Paid, FY2025 | FY2025 / 2025-12-31 | USD | US$m | 3.87 | Calculated | Tier 1 | issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,397.1 | Net debt data, 2026-03-31 | 404.0 | Constructed period register, EBITDA (Reported), LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.46 | Calculated | Tier 2b | EBITDA is last-twelve-months; carrying value over reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,369.9 | Net debt data, 2026-03-31 | 404.0 | Constructed period register, EBITDA (Reported), LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.39 | Calculated | Tier 2b | EBITDA is last-twelve-months; net of unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 404.0 | Constructed period register, EBITDA (Reported), LTM to 2026-03-31 | 112.9 | Constructed period register, Cash Interest Paid, LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.58 | Calculated | Tier 2b | EBITDA is last-twelve-months; cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,397.1 | Net debt data, 2026-03-31 | 449.2 | Constructed period register, EBITDA (Adjusted), LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.11 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,369.9 | Net debt data, 2026-03-31 | 449.2 | Constructed period register, EBITDA (Adjusted), LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.05 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 449.2 | Constructed period register, EBITDA (Adjusted), LTM to 2026-03-31 | 112.9 | Constructed period register, Cash Interest Paid, LTM to 2026-03-31 | 2026-03-31 | USD | US$m | 3.98 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,352.2 | Net debt data, 2026-06-30 | 402.2 | Constructed period register, EBITDA (Reported), LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 3.36 | Calculated | Tier 2b | EBITDA is last-twelve-months; carrying value over reported EBITDA |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,317.3 | Net debt data, 2026-06-30 | 402.2 | Constructed period register, EBITDA (Reported), LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 3.28 | Calculated | Tier 2b | EBITDA is last-twelve-months; net of unrestricted cash |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 402.2 | Constructed period register, EBITDA (Reported), LTM to 2026-06-30 | 109.5 | Constructed period register, Cash Interest Paid, LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 3.67 | Calculated | Tier 2b | EBITDA is last-twelve-months; cash interest paid, not interest expense |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,352.2 | Net debt data, 2026-06-30 | 451.6 | Constructed period register, EBITDA (Adjusted), LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 2.99 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,317.3 | Net debt data, 2026-06-30 | 451.6 | Constructed period register, EBITDA (Adjusted), LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 2.92 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 451.6 | Constructed period register, EBITDA (Adjusted), LTM to 2026-06-30 | 109.5 | Constructed period register, Cash Interest Paid, LTM to 2026-06-30 | 2026-06-30 | USD | US$m | 4.12 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA over cash interest paid |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 2,004.1 | Net debt data, 2026-09-30 | 392.3 | Constructed period register, EBITDA (Reported), LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 5.11 | Calculated | Tier 2b | EBITDA is last-twelve-months; carrying value over reported EBITDA; EBITDA holds two months of Celero against the whole of its financing |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 1,929.2 | Net debt data, 2026-09-30 | 392.3 | Constructed period register, EBITDA (Reported), LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 4.92 | Calculated | Tier 2b | EBITDA is last-twelve-months; net of unrestricted cash; EBITDA holds two months of Celero against the whole of its financing |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 392.3 | Constructed period register, EBITDA (Reported), LTM to 2026-09-30 | 113.8 | Constructed period register, Cash Interest Paid, LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 3.45 | Calculated | Tier 2b | EBITDA is last-twelve-months; cash interest paid, not interest expense; interest base holds two months of interest on the enlarged debt |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 2,004.1 | Net debt data, 2026-09-30 | 459.8 | Constructed period register, EBITDA (Adjusted), LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 4.36 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA; EBITDA holds two months of Celero against the whole of its financing |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 1,929.2 | Net debt data, 2026-09-30 | 459.8 | Constructed period register, EBITDA (Adjusted), LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 4.20 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA; EBITDA holds two months of Celero against the whole of its financing |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 459.8 | Constructed period register, EBITDA (Adjusted), LTM to 2026-09-30 | 113.8 | Constructed period register, Cash Interest Paid, LTM to 2026-09-30 | 2026-09-30 | USD | US$m | 4.04 | Calculated | Tier 2b | EBITDA is last-twelve-months; issuer-adjusted EBITDA over cash interest paid; interest base holds two months of interest on the enlarged debt |
| Free cash flow conversion | Free cash flow / EBITDA (Reported) | 175.3 | 10-K_2025-12-31_dlx.htm.jsonl, page 56; free cash flow | 378.9 | Income statement, EBITDA (Reported), FY2025 | FY2025 | USD | USD millions | 0.4627 | Calculated | Tier 1 | Issuer free cash flow is operating cash flow less purchases of capital assets |
| Free cash flow conversion | Free cash flow / EBITDA (Reported) | 134.9 | 10-Q_2026-09-30_dlx.htm.jsonl, page 38; free cash flow | 305.2 | Income statement, EBITDA (Reported), 9M 2026 | 9M 2026 | USD | USD millions | 0.4420 | Calculated | Tier 2b | Nine months, not annualised |
| Capex / revenue | Purchases of capital assets / Total revenue | 95.3 | Cash flow statement, FY2025 | 2,133.2 | Income statement, Total revenue, FY2025 | FY2025 | USD | USD millions | 0.0447 | Calculated | Tier 1 | Total capital expenditure; maintenance and growth split not supplied |
| Capex / revenue | Purchases of capital assets / Total revenue | 81.0 | Cash flow statement, 9M 2026 | 1,591.2 | Income statement, Total revenue, 9M 2026 | 9M 2026 | USD | USD millions | 0.0509 | Calculated | Tier 2b | Nine months |
| EBITDA (Reported) margin | EBITDA (Reported) / Total revenue | 378.9 | Income statement, EBITDA (Reported), FY2025 | 2,133.2 | Income statement, Total revenue, FY2025 | FY2025 | USD | USD millions | 0.1776 | Calculated | Tier 1 | Fraction of revenue |
| EBITDA (Reported) margin | EBITDA (Reported) / Total revenue | 305.2 | Income statement, EBITDA (Reported), 9M 2026 | 1,591.2 | Income statement, Total revenue, 9M 2026 | 9M 2026 | USD | USD millions | 0.1918 | Calculated | Tier 2b | Fraction of revenue |
| Liquidity / total debt | (Cash + Undrawn committed facilities) / Total debt | 264.7 | Chart data: liquidity, 2026-09-30 (74.9 + 189.8) | 2,004.1 | Net debt data, 2026-09-30 | 2026-09-30 | USD | USD millions | 0.1321 | Calculated | Tier 2b | Undrawn is the revolver net of letters of credit; securitization headroom excluded |
| Operating cash flow / total debt | Net cash from operating activities, LTM / Total debt | 318.0 | Constructed period register, LTM to 2026-09-30 | 2,004.1 | Net debt data, 2026-09-30 | 2026-09-30 | USD | USD millions | 0.1587 | Calculated | Tier 2b | LTM operating cash flow over carrying debt that includes the Celero financing in full |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Margin | Adjusted EBITDA margin, issuer-printed (%) | 19.4 | 20.2 | 20.4 | 22.2 | Up | From 19.4% in FY2024 to 22.2% in nine months 2026; issuer-adjusted EBITDA over revenue |
| Margin | Merchant Services adjusted EBITDA margin (%) | 20.4 | 21.6 | 21.4 | 24.1 | Up | Includes two months of Celero in the nine months 2026 column |
| Margin | B2B Payments adjusted EBITDA margin (%) | 19.8 | 22.2 | 21.4 | 25.8 | Up | Issuer-printed segment margins |
| Margin | Data Solutions adjusted EBITDA margin (%) | 25.9 | 28.1 | 29.5 | 24.3 | Down | Nine months 2026 is below nine months 2025 by 5.2 percentage points; the issuer cites higher vendor rebates in the prior year |
| Margin | Print adjusted EBITDA margin (%) | 31.3 | 32.3 | 32.2 | 34.7 | Up | Print revenue is shrinking while its margin rises |
| Mix | Print share of revenue (%) | 56.8 | 53.3 | 53.3 | 46.3 | Down | Print revenue over total revenue; nine-month shares are issuer-printed |
| Mix | Non-Print share of revenue (%) | 43.2 | 46.7 | 46.7 | 53.7 | Up | Complement of the Print share; FY2024 includes 10.8 of revenue from a business exited in 2024 |
| Funding float | Settlement processing obligations at period end (USD millions) | 273.9 | 275.0 | Not supplied: the 2025-09-30 balance sheet is not in scope | 18.1 | Down | Year-end float of customer funds that unwinds in the first quarter; held against restricted settlement assets |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | Reported EBITDA: net income less non-controlling interest plus interest, tax and depreciation and amortization, with no add-backs | Annual reports print adjusted EBITDA only; releases print EBITDA and adjusted EBITDA; adjusted adds back share-based compensation, restructuring, impairment, legal and acquisition costs; comparable adjusted also removes a business exit | 10-K_2025-12-31_dlx.htm.jsonl, page 51; 10-Q_2026-09-30_dlx.htm.jsonl, page 39; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 6, 8 | FY2024, FY2025, all 2026 periods | Adjusted EBITDA exceeds reported by 52.6 in FY2025 | Fundamental credit; Earnings quality | Leverage and cover use reported EBITDA; adjusted ratios are separate rows |
| Total debt | Balance-sheet carrying value, current plus long-term, net of discount and issuance costs | Issuer net debt starts from total debt at carrying value; principal is stated separately in the debt note | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18, 38–39 | All balance-sheet dates | Carrying value is 21.4 below principal at 2026-09-30 | Fundamental credit; Refinancing & LME | Carrying value is the denominator numerator; principal 2,025.5 is the ladder total |
| Cash | Unrestricted cash and cash equivalents | Total cash, cash equivalents and restricted cash is 94.2 against 74.9 of cash and equivalents; restricted cash of 19.3 is in settlement processing assets and other non-current assets | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4–5, 10, 44 | 2026-09-30 and earlier | Restricted cash is 19.3 | Liquidity | Net debt and liquidity use 74.9; the cash flow statement closes on 94.2 |
| Net debt | Total debt at carrying value less unrestricted cash | Issuer net debt is total debt less cash and cash equivalents | 10-Q_2026-09-30_dlx.htm.jsonl, pages 38–39 | All balance-sheet dates | None: the definitions agree | Fundamental credit | Issuer figures reproduced |
| Free cash flow | Operating cash flow less purchases of capital assets, after interest paid | Issuer free cash flow is net cash provided by operating activities less purchases of capital assets | 10-Q_2026-09-30_dlx.htm.jsonl, page 38; 10-K_2025-12-31_dlx.htm.jsonl, page 56 | FY2024, FY2025, nine months | None: the definitions agree | Fundamental credit | Issuer figures reproduced |
| Celero consideration | One acquisition, three figures by role | Cash consideration of about 625.0 plus seller expenses and adjustments; consideration transferred of 664.6; cash paid net of 21.7 cash acquired of 642.9; 39.6 separates 664.6 from 625.0 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 | Q3 2026, nine months 2026 | Spread of 39.6 between the contractual price and consideration transferred | Business & governance; Fundamental credit | Use 625.0 as the contractual price, 664.6 as the accounting cost and 642.9 as the cash outflow |
| Finance lease liabilities | Lease liabilities on their own balance-sheet lines are not added to Total Debt | The 2026 reports show finance lease liabilities as a separate line (75.3 at 2026-09-30); the FY2025 annual report had them in other non-current liabilities (25.8 at 2025-12-31) | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 6; 10-K_2025-12-31_dlx.htm.jsonl, pages 66, 110 | 2025-12-31, 2026-09-30 | New 49.6 finance lease from June 2026; the line is outside the debt figure | Fundamental credit; Refinancing & LME | Kept outside Total Debt; listed beside it |
| Adjusted EBITDA, Q3 2025 | Issuer-adjusted EBITDA as printed in the quarterly report | The release prints comparable adjusted EBITDA of 116.0 for Q3 2025 against 118.9, excluding a business exit of 2.9 | 10-Q_2026-09-30_dlx.htm.jsonl, page 39; EX99.1_2026-09-30_dlx_exhibit991110420268-k-htm.htm.jsonl, pages 1, 8 | Q3 2025, nine months 2025 | Growth of 9.6% on the comparable basis against 6.9% on the printed basis | Earnings changes | Label each with its definition; this module uses the printed 118.9 |
| Units | One unit across the statement tables | The FY2024 annual report prints thousands; later reports print millions | 10-K_2024-12-31_dlx.htm.jsonl, page 74 | FY2024 | Rounding of 0.1 on FY2024 net debt | Fundamental credit | Tables use millions from the FY2025 annual report |
| Obligations outside Total Debt | Lease liabilities on their own lines, retiree and pension plans, purchase commitments, factoring, supplier finance and litigation are not financial debt | Finance lease liabilities of 75.3 at 2026-09-30, up from 25.8 at 2025-12-31 with a new 16-year facility lease of 49.6 from June 2026; operating lease liabilities of 42.8 non-current and 10.2 in accrued liabilities; a postretirement benefit plan asset of 136.5; multi-year service contract commitments of about 210.0 at 2025-12-31; no factoring, supply-chain finance or consent decree funding found; litigation not material; the securitization of 100.0 is inside Total Debt | 10-Q_2026-09-30_dlx.htm.jsonl, pages 2, 9–10, 22–24; 10-K_2025-12-31_dlx.htm.jsonl, pages 57, 110 | 2025-12-31, 2026-09-30 | Leases and commitments sit outside the debt figure and are listed beside it | Liquidity; Fundamental credit | Kept outside Total Debt; the securitization stays inside because the issuer reports it in long-term debt |
| Leverage target | The issuer cites a leverage target of three times without stating the ratio | Not supplied: the definition is not given in the sources | EX99.1_2026-03-31_dlx_exhibit991050620268-k-htm.htm.jsonl, page 1 | 2026-03-31 | Net debt over adjusted EBITDA is 3.05 on the calculation here | Fundamental credit | Do not read the issuer target as a defined ratio |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Reported-fact summary of the statements for FY2024, FY2025 and the quarter ended 2026-09-30 | Ready | Statements tie to their totals and to the reconciliations; FY2024 comes from the FY2025 annual report in millions | None needed |
| Leverage and interest cover on trailing reported EBITDA | Ready with Limitations | The 2026-09-30 trailing earnings and cash interest hold two months of Celero against its full financing; reported EBITDA for fiscal years is calculated | Obtain Celero full-period or pro forma earnings and interest |
| Liquidity | Ready | Securitization headroom depends on a borrowing base and is excluded | None needed |
| Debt stack by legal rank | Ready with Limitations | Only the first lien facilities have a stated rank; the notes and the securitization are left out | Obtain the executed financing documents |
| Covenant headroom | Not Ready | Reported covenant ratios are not printed and covenant EBITDA is defined in the credit agreement, which is not supplied | Obtain the amended credit agreement |
| Pro forma net debt for post-balance-sheet events | Ready with Limitations | The December dividend has no stated cash amount | Obtain the record-date share count or the declared total |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1,503.1 | 34.4 | 1,468.7 | US$m | Reported carrying value at 2024-12-31 (current portion 37.1 plus long-term debt 1,466.0); includes securitization obligations; excludes lease liabilities; principal 1,521.9 |
| FY2025 / 2025-12-31 | 1,429.4 | 36.9 | 1,392.5 | US$m | Reported carrying value at 2025-12-31 (current portion 16.3 plus long-term debt 1,413.1); includes securitization obligations; excludes lease liabilities; principal 1,444.4 |
| 2026-03-31 | 1,397.1 | 27.2 | 1,369.9 | US$m | Reported carrying value at 2026-03-31 (current portion 16.3 plus long-term debt 1,380.8); includes securitization obligations; excludes lease liabilities; principal 1,411.0 |
| 2026-06-30 | 1,352.2 | 34.9 | 1,317.3 | US$m | Reported carrying value at 2026-06-30 (long-term debt 1,352.2 and no current portion); includes securitization obligations; excludes lease liabilities; principal 1,365.0; before the Celero closing |
| 2026-09-30 | 2,004.1 | 74.9 | 1,929.2 | US$m | Reported carrying value at 2026-09-30 (current portion 59.1 plus long-term debt 1,945.0); includes securitization obligations and the revolver draw for Celero; excludes finance and operating lease liabilities; principal 2,025.5 |

Net debt is gross debt at carrying value less unrestricted cash.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 4.12 | 4.02 | x | Reported EBITDA for the fiscal year |
| FY2025 / 2025-12-31 | 3.77 | 3.68 | x | Reported EBITDA for the fiscal year |
| 2026-03-31 | 3.46 | 3.39 | x | Reported EBITDA, last twelve months |
| 2026-06-30 | 3.36 | 3.28 | x | Reported EBITDA, last twelve months |
| 2026-09-30 | 5.11 | 4.92 | x | Reported EBITDA, last twelve months; the trailing earnings hold two months of Celero against its full financing |

The 30 September 2026 ratios divide debt that includes the whole Celero financing by earnings that include only two months of Celero.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 3.10 | x | Reported EBITDA over cash interest paid for the fiscal year |
| FY2025 / 2025-12-31 | 3.40 | x | Reported EBITDA over cash interest paid for the fiscal year |
| 2026-03-31 | 3.58 | x | Reported EBITDA over cash interest paid, both last twelve months |
| 2026-06-30 | 3.67 | x | Reported EBITDA over cash interest paid, both last twelve months |
| 2026-09-30 | 3.45 | x | Reported EBITDA over cash interest paid, both last twelve months; the interest base holds two months of interest on the enlarged debt |

Cover uses cash interest paid, which differs from interest expense, and the latest period holds only two months of interest on the enlarged debt.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 34.4 | 374.3 | US$m | Cash is unrestricted cash and equivalents; undrawn is the revolver commitment less drawings and letters of credit, printed as 374,302 thousand and restated to one decimal |
| FY2025 / 2025-12-31 | 36.9 | 379.6 | US$m | Cash is unrestricted cash and equivalents; undrawn is the revolver commitment of 400.0 less 13.0 drawn and 7.4 of letters of credit |
| 2026-03-31 | 27.2 | 380.9 | US$m | Cash is unrestricted cash and equivalents; undrawn is the revolver net available for borrowing |
| 2026-06-30 | 34.9 | 384.3 | US$m | Cash is unrestricted cash and equivalents; undrawn is the revolver net available for borrowing, before the amendment and the Celero draw |
| 2026-09-30 | 74.9 | 189.8 | US$m | Cash is unrestricted cash and equivalents; undrawn is the revolver commitment of 400.0 less 200.5 drawn and 9.7 of letters of credit; securitization headroom is excluded |

Undrawn committed facilities exclude securitization headroom, which depends on a borrowing base.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 15.0 | US$m | Contractual principal due in the year at 2026-09-30; Remainder of 2026: the fourth quarter only |
| FY2027 | 60.0 | US$m | Contractual principal due in the year at 2026-09-30; Term loan installments |
| FY2028 | 160.0 | US$m | Contractual principal due in the year at 2026-09-30; Term loan installments of 60.0 and the securitization facility of 100.0 |
| FY2029 | 985.0 | US$m | Contractual principal due in the year at 2026-09-30; Both note issues and term loan installments |
| FY2030 | 65.0 | US$m | Contractual principal due in the year at 2026-09-30; Term loan installments |
| FY2031 | 740.5 | US$m | Contractual principal due in the year at 2026-09-30; Term loan balance, revolver drawings and final installments |

The ladder is contractual principal at 30 September 2026 after the July 2026 amendment, so it exceeds carrying value by the unamortized discount and issuance costs.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| 2026-09-30 | 2,025.5 | -21.4 | 2,004.1 | US$m | Principal is the sum of the maturity ladder; the one reconciling item is the unamortized discount and debt issuance costs deducted from principal; no debt is left out of the ladder |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Quarterly dividend of USD 0.30 per share payable to holders of record on 2026-11-17 | 2026-12-01 | Not supplied: the release states the rate per share and no total | Not supplied: depends on the dividend amount | Not supplied: depends on the dividend amount | US$m | Declared in the third-quarter release; the cash amount depends on the record-date share count, which the sources do not state; the 2026-12-31 term loan installment of 15.0 reduces debt and cash equally and leaves net debt unchanged |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 2,121.8 | 412.1 | US$m | Annual; issuer-adjusted EBITDA |
| FY2025 / 2025-12-31 | 2,133.2 | 431.5 | US$m | Annual; issuer-adjusted EBITDA |
| 2026-09-30 | 2,126.4 | 459.8 | US$m | Last twelve months to 2026-09-30, twelve months like the annual rows; issuer-adjusted EBITDA; includes two months of Celero and the Safeguard business exit in the prior-year stub |

Adjusted EBITDA is the issuer-adjusted measure in every row, and the last row holds only two months of Celero.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Senior secured first lien term loan facility | 1 | Yes | 800.0 | 2.04 | US$m | Borrower is Deluxe Corporation; secured by substantially all assets of the company and its subsidiary guarantors; cumulative leverage is cumulative first lien debt over trailing reported EBITDA of 392.3, which holds two months of Celero |
| Senior secured first lien revolving credit facility drawn | 1 | Yes | 200.5 | 2.55 | US$m | Same obligor and collateral as the term loan, equal rank; cumulative through this row is 800.0 plus 200.5 over trailing reported EBITDA of 392.3 |

Only facilities whose legal rank the filings state are drawn, so the notes and the securitization facility are left out of this stack.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), nine months 2026 | 305.2 | US$m | Reported EBITDA as printed by the issuer for the nine months ended 2026-09-30 |
| Acquisition transaction costs | 15.4 | US$m | Add-back, classified as transaction costs; realisation status not stated |
| Restructuring and integration expense | 14.6 | US$m | Add-back, classified as restructuring; realisation status not stated |
| Share-based compensation expense | 19.7 | US$m | Add-back, classified as share-based compensation; non-cash |
| Certain legal, environmental and other expense | 4.0 | US$m | Add-back, classified as other stated; realisation status not stated |
| Gain on sale of businesses and long-lived assets | -5.1 | US$m | Deduction of a gain, classified as other stated |
| EBITDA (Adjusted), nine months 2026 | 353.8 | US$m | Issuer-adjusted EBITDA as printed; the steps add to it exactly |

The add-backs are the issuer's own and none is a cost saving, run-rate or synergy adjustment.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | Last twelve months to 2026-09-30 |
| --- | --- | --- | --- |
| Revenue (USD millions) | 2,121.8 | 2,133.2 | 2,126.4 |
| EBITDA, reported (USD millions) | 365.2 | 378.9 | 392.3 |
| EBITDA, adjusted by the issuer (USD millions) | 412.1 | 431.5 | 459.8 |
| Net income (USD millions) | 52.9 | 82.2 | 80.0 |
| Net cash from operating activities (USD millions) | 194.3 | 270.6 | 318.0 |
| Purchases of capital assets (USD millions) | 94.3 | 95.3 | 103.7 |
| Free cash flow (USD millions) | 100.0 | 175.3 | 214.3 |
| Total debt at carrying value (USD millions) | 1,503.1 | 1,429.4 | 2,004.1 |
| Cash and cash equivalents (USD millions) | 34.4 | 36.9 | 74.9 |
| Net debt (USD millions) | 1,468.7 | 1,392.5 | 1,929.2 |
| Total debt / EBITDA (x) | 4.12 | 3.77 | 5.11 |
| Net debt / EBITDA (x) | 4.02 | 3.68 | 4.92 |
| EBITDA / cash interest (x) | 3.10 | 3.40 | 3.45 |
| Net debt / adjusted EBITDA (x) | 3.56 | 3.23 | 4.20 |

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 10 |
| Calculated | 9 |
| Assumption-Based | 0 |
| Analyst Inference | 0 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 4 |
| Fields present | 13 |
| Fields total | 13 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 1 |
| MINOR | 3 |

## Calculations

All amounts are USD millions unless stated; every input is a printed figure or a figure in a table above.

| ID | Calculation | Inputs | Result | Source |
| --- | --- | --- | --- | --- |
| C-1 | Net debt, FY2024 balance sheet: gross debt at carrying value less cash | 1,503.1 - 34.4 | 1,468.7 | Net debt data |
| C-2 | Net debt, FY2025 balance sheet: gross debt at carrying value less cash | 1,429.4 - 36.9 | 1,392.5 | Net debt data |
| C-3 | Net debt, 2026-03-31 balance sheet: gross debt at carrying value less cash | 1,397.1 - 27.2 | 1,369.9 | Net debt data |
| C-4 | Net debt, 2026-06-30 balance sheet: gross debt at carrying value less cash | 1,352.2 - 34.9 | 1,317.3 | Net debt data |
| C-5 | Net debt, 2026-09-30 balance sheet: gross debt at carrying value less cash | 2,004.1 - 74.9 | 1,929.2 | Net debt data |
| C-6 | Reconciling item and carrying value at 2026-09-30: carrying value less principal; principal plus the item | 2,004.1 - 2,025.5; 2,025.5 + (-21.4) | -21.4; 2,004.1 | 10-Q_2026-09-30_dlx.htm.jsonl, page 18 |
| C-7 | Contractual principal as the sum of the maturity ladder | 15.0 + 60.0 + 160.0 + 985.0 + 65.0 + 740.5 | 2,025.5 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 18–19 |
| C-8 | EBITDA (Reported) FY2024: net income less non-controlling interest plus interest, tax and depreciation and amortization | 52.9 - 0.1 + 123.3 + 23.6 + 165.5 | 365.2 | 10-K_2025-12-31_dlx.htm.jsonl, page 51 |
| C-9 | EBITDA (Reported) FY2025: the same construction | 82.2 - 0.1 + 122.0 + 36.9 + 137.9 | 378.9 | 10-K_2025-12-31_dlx.htm.jsonl, page 51 |
| C-10 | Total Liabilities FY2024: sum of printed liability lines | 625.5 + 1,466.0 + 49.0 + 2.1 + 67.5 | 2,210.1 | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67 |
| C-11 | Total Liabilities FY2025: sum of printed liability lines | 643.2 + 1,413.1 + 39.8 + 27.0 + 59.8 | 2,182.9 | 10-K_2025-12-31_dlx.htm.jsonl, pages 66–67 |
| C-12 | Total Liabilities 2026-09-30: sum of printed liability lines | 426.4 + 1,945.0 + 75.3 + 42.8 + 57.3 + 29.0 | 2,575.8 | 10-Q_2026-09-30_dlx.htm.jsonl, page 2 |
| C-13 | Liquidity, FY2024 balance sheet: cash plus undrawn committed facilities | 34.4 + 374.3 | 408.7 | Chart data: liquidity |
| C-14 | Liquidity, FY2025 balance sheet: cash plus undrawn committed facilities | 36.9 + 379.6 | 416.5 | Chart data: liquidity |
| C-15 | Liquidity, 2026-03-31 balance sheet: cash plus undrawn committed facilities | 27.2 + 380.9 | 408.1 | Chart data: liquidity |
| C-16 | Liquidity, 2026-06-30 balance sheet: cash plus undrawn committed facilities | 34.9 + 384.3 | 419.2 | Chart data: liquidity |
| C-17 | Liquidity, 2026-09-30 balance sheet: cash plus undrawn committed facilities | 74.9 + 189.8 | 264.7 | Chart data: liquidity |
| C-18 | Increase in net debt in the third quarter of 2026: 2026-09-30 less 2026-06-30 | 1,929.2 - 1,317.3 | 611.9 | Net debt data |
| C-19 | Adjusted less reported EBITDA FY2025, and the sum of the add-backs: share-based compensation, restructuring, impairment, legal | 431.5 - 378.9; 24.9 + 20.5 + 5.7 + 1.5 | 52.6; 52.6 | 10-K_2025-12-31_dlx.htm.jsonl, page 51 |
| C-20 | Increase in operating cash flow, nine months 2026 over nine months 2025 | 215.9 - 168.5 | 47.4 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 44 |
| C-21 | Free cash flow conversion, nine months 2026: free cash flow over reported EBITDA, as a percentage | 134.9 / 305.2 | 44% | 10-Q_2026-09-30_dlx.htm.jsonl, page 38 |
| C-22 | Cumulative first lien leverage at 2026-09-30: term loan; term loan plus revolver drawn; over trailing reported EBITDA | 800.0 / 392.3; (800.0 + 200.5) / 392.3 | 2.04; 2.55 | Constructed period register |
| C-23 | Celero consideration roles: consideration transferred less cash acquired; less the contractual cash consideration | 664.6 - 21.7; 664.6 - 625.0 | 642.9; 39.6 | 10-Q_2026-09-30_dlx.htm.jsonl, pages 4, 12 |
| C-24 | Free cash flow, last twelve months: operating cash flow less capital expenditure; and the same as FY2025 plus nine months 2026 less nine months 2025 | 318.0 - 103.7; 175.3 + 134.9 - 95.9 | 214.3; 214.3 | 10-K_2025-12-31_dlx.htm.jsonl, page 56; 10-Q_2026-09-30_dlx.htm.jsonl, page 38 |
| C-25 | Last twelve months constructed as latest full year plus current stub less prior-year stub for each row of the constructed period register | See T4.8 | See T4.8 | Constructed period register |
| C-26 | Credit ratios in the calculation register: numerator over denominator printed to two decimal places | See T4.9 | See T4.9 | Calculation register |
| C-27 | Reduction of net debt from FY2024 to 2026-06-30: FY2024 less 2026-06-30 | 1,468.7 - 1,317.3 | 151.4 | Net debt data |

## Gaps

- High: Celero earnings for a full trailing period, pro forma EBITDA and pro forma interest are not supplied, so leverage and cover at 30 September 2026 mix two months of Celero earnings with its full financing; closing it needs an issuer statement of Celero or pro forma earnings.
- Medium: the covenant ratios the issuer reports and the earnings measure defined in the amended credit agreement are not supplied, so covenant headroom is not calculable here; closing it needs the executed credit agreement and the issuer compliance figures.
- Medium: the legal rank and collateral of the 8.0% senior unsecured notes, the 8.125% senior secured notes and the securitization facility are not stated in the filings, so the debt stack shows only the two first lien facilities and the notes are left out of secured and senior subtotals; closing it needs the indentures and the intercreditor terms.
- Medium: reported EBITDA for FY2024 and FY2025 is not printed in the annual reports and is calculated here from net income, non-controlling interest, interest, tax and depreciation and amortization; closing it needs the issuer to print the measure for fiscal years.
- Low: the cash amount of the December 2026 dividend is not stated, so the post-balance-sheet net debt figures are not supplied; closing it needs the declared total or the record-date share count.
- Low: lines the issuer prints as a dash (the gain on sale of businesses for FY2025, both third quarters and nine months 2025, non-controlling interest for both third quarters, and several cash flow lines) and lines that appear in only one type of statement (the asset impairment charge in the annual income statements, and the residual commission buy-out, acquisition and holdback lines in the cash flow statements) are stated as not supplied rather than zero; closing it needs the issuer to state nil explicitly.
- Low: the 2025-12-31 balance sheet is presented differently in the 2026 reports, where finance lease liabilities are a separate line, so the FY2025 column keeps the annual report presentation and finance lease liabilities for FY2024 and FY2025 are not separately supplied.
- Low: the FY2024 revolver availability is printed in thousands in the FY2024 annual report only, and is restated here to one decimal in millions.
- Low: the margin grid and any floor of the term loan, the revolver and the securitization facility are not stated in the filings, so the debt instrument register shows weighted-average rates only; closing it needs the executed credit agreement and receivables financing agreement.
- Low: the issuer cites a three times leverage target without stating its definition, so the target cannot be compared with the ratios here.
- Low: the split of capital expenditure between maintenance and growth is not supplied, so only total capital expenditure is carried; closing it needs the issuer to disclose the split.

## Next module

The orchestrator selects the next module.
