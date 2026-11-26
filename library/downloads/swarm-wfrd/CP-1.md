---
module_id: CP-1
issuer_id: wfrd
analysis_date: 2026-11-05
module_status: Complete with limitations
---

## Request

Weatherford International plc (issuer id wfrd), as of 2026-11-05, credit snapshot pathway. Scope: the financial foundation, meaning normalised statements, debt, liquidity, leverage and cover, from the supplied annual and quarterly filings and earnings releases to 2026-09-30.

## Sources

| Source | Document | Document date | sha256 | Use |
| --- | --- | --- | --- | --- |
| 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report on Form 10-K for the year ended 31 December 2025 (audited by KPMG LLP) | 2026-02-04 (signature and audit report date) | dac00725a2c3d644200d2314099fff47d7f3eb762778ea3920935ae50ab28ce2 | FY2024 and FY2025 statements, segment note, debt and credit agreement notes, maturity table, pension note |
| 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 31 March 2026 | 2026-04-22 (signature date) | 9947bc5d7e7ed46ec27eb5be20182fefc783d1bcf9e98ead61e47e75e87e1802 | Inventory only; no figure of this module rests on it |
| 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 June 2026 | 2026-07-22 (signature date) | 0659d6081747e0dbacebc77689bd519f07b2164e0adebad5354150ed075c3f19 | June 2026 balance sheet, six-month income and cash flow figures, June 2026 debt and letters of credit |
| 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended 30 September 2026 | 2026-10-21 (signature date) | 678145577a1f518a8936739eae48408772c69c0e9c66ea7073ec677a8f4ec5f5 | September 2026 balance sheet, nine-month statements, debt note, covenants, liquidity, subsequent events |
| EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-04-21 | 16b049423c2a0b3987004d0686dae44f41d8fe13554c66ab3742b5ef18204c19 | Inventory only; no figure of this module rests on it |
| EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-07-21 | c318686e28c9fd3731b6593cf62a7f0973fd91c30668b11db34c9715af2ad0be | Six-month adjusted EBITDA and the June 2026 net debt reconciliation |
| EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings press release (Exhibit 99.1) for the third quarter of 2026 | 2026-10-20 | f95c1562ed4f41199ffe8f8d250788ec78ae6a54ea4c8df350ecd996b8e7fb5e | Nine-month and last-twelve-month adjusted EBITDA, issuer net debt, adjusted free cash flow, redemption notice |

| Handoff | Module | sha256 | Use |
| --- | --- | --- | --- |
| Source readiness | CP-0 | 855ac2f1f1d176f5a027e7f65aeb849da9fdfdffbb2289f0d9dcf592344eca1f | Source inventory, period coverage and the gaps already recorded (no legal documents, no market data) |

## Findings

### Bottom line

Weatherford is lightly levered on a net basis, but creditors are relying on cash rather than earnings, because last-twelve-months EBITDA has fallen about a third since FY2024.
Basis: calculation C61; calculation C62; calculation C72; calculation C71; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68

Net debt was USD 319 million at September 30, 2026 (USD 321 million pro forma for the planned October 30, 2026 redemption of the 2030 notes), or 0.37x last-twelve-months EBITDA of USD 867 million, against USD 718 million at FY2024. Gross debt of USD 1,480 million is 1.71x, up from 1.28x, so the improvement came from cash build and repayment, not from earnings. Liquidity is ample, with USD 1,161 million of cash and USD 766 million undrawn.
Basis: calculation C4; calculation C1; calculation C43; calculation C25; calculation C71; calculation C72; calculation C33; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16

### Key findings

Leverage is low on a net basis and has risen on a gross basis. Net debt fell by USD 399 million from FY2024 to USD 319 million, because cash rose by USD 245 million to USD 1,161 million and total debt fell by USD 154 million to USD 1,480 million. Against last-twelve-months EBITDA of USD 867 million, net leverage is 0.37x and gross leverage 1.71x; on the company's adjusted EBITDA of USD 1,001 million they are 0.32x and 1.48x. Gross leverage was 1.28x at FY2024, so the credit has deleveraged through the numerator while the denominator shrank. The company's own net leverage of 0.28x also deducts USD 37 million of restricted cash.
Basis: calculation C58; calculation C60; calculation C59; calculation C73; calculation C71; calculation C75; calculation C74; calculation C72; calculation C79; calculation C80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16

Earnings are the weak side of the credit. Last-twelve-months EBITDA is 32.32% below FY2024 on the reported basis and 27.57% below on the company's adjusted basis, on revenue 14.95% lower at USD 4,689 million. The company attributes the decline mainly to Middle East disruption from the Iran conflict and to lower North America activity; Well Construction and Completions adjusted EBITDA fell by USD 54 million over nine months while Production and Intervention rose by USD 13 million. Third-quarter adjusted EBITDA of USD 254 million was 5.58% below a year earlier and 13.90% above the second quarter, and the company expects a meaningful fourth-quarter ramp that the filings do not quantify.
Basis: calculation C61; calculation C62; calculation C63; calculation C70; calculation C82; calculation C64; calculation C65; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 20; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 25; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 3

Cash generation improved in 2026, but not all of the improvement is repeatable. Cash from operations was USD 503 million over nine months against USD 408 million, and free cash flow after capital expenditures rose to USD 362 million from USD 233 million as capital expenditures fell to USD 141 million from USD 175 million. Receivable collections supplied USD 186 million of the 2026 figure; without them, cash from operations would be USD 317 million, below the USD 386 million of the prior year on the same basis. Factoring proceeds fell by USD 215 million to USD 16 million, so the improvement does not rest on selling receivables.
Basis: calculation C48; calculation C49; calculation C54; calculation C55; calculation C56; calculation C52; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32

Liquidity is strong, but the headline overstates what is freely available. Cash of USD 1,161 million includes USD 164 million that cannot be immediately repatriated, which leaves USD 997 million, and restricted cash of USD 37 million is excluded. The USD 1,000 million credit agreement is undrawn, with USD 766 million of headroom after letters of credit, but only USD 599 million of that can be borrowed, because the annual report limits USD 400 million of the commitment to performance letters of credit and the quarterly reports do not restate the split. Letters of credit under bilateral lines of USD 297 million and surety bonds of USD 534 million could be called if contract obligations were breached.
Basis: calculation C38; calculation C33; calculation C34; calculation C35; calculation C69; calculation C83; calculation C36; calculation C37; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 34; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 85

The maturity wall is distant and is about to shrink. The company gave notice on October 20, 2026 to redeem all USD 236 million of the 2030 notes on October 30, 2026 with cash, and no source yet confirms completion. That leaves the 2033 notes, USD 1,200 million of principal due in 2033, as the only bond; before then the annual report schedules only USD 29 million of maturities in 2026 and USD 20 million in 2027, mainly finance leases. The company says the redemption cuts annual cash interest by about USD 20 million, and it ends the clause that would pull the credit agreement's maturity forward while more than USD 200 million of the 2030 notes remain outstanding.
Basis: calculation C43; calculation C44; calculation C84; calculation C39; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86

Claims outside the debt figure are modest against earnings. Operating lease liabilities are USD 148 million and the pension plans were underfunded by USD 21 million at December 31, 2025; USD 19 million is outstanding under a supplier finance programme that began operating in the third quarter and sits in accounts payable. None of these is added to debt. Shareholder returns took USD 113 million in nine months, and a dividend of about USD 19.93 million is payable on December 3, 2026.
Basis: calculation C67; calculation C68; calculation C57; calculation C45; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 88

Three definition points matter when these figures are set beside the company's own. EBITDA (Reported) here is operating income plus D&A, because the company states only adjusted EBITDA; the difference is USD 116 million over nine months of 2026. Net debt here deducts unrestricted cash only, so it is USD 37 million above the company's USD 282 million. Fiscal-year adjusted EBITDA is calculated from the segment note, because no fourth-quarter release was supplied, and it reproduces the company's stated last-twelve-months figures exactly.
Basis: calculation C85; calculation C81; calculation C27; calculation C28; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80

### Contrary evidence and what would change the view

The strongest evidence against a cautious reading is that the company generated USD 379 million of adjusted free cash flow in nine months, that all three agencies hold positive outlooks (Moody's Ba2, S&P BB and Fitch BB), and that management expects a meaningful fourth-quarter ramp in adjusted EBITDA. Fourth-quarter adjusted EBITDA that fails to rise from the third quarter's USD 254 million, a further Middle East escalation, or slower collection from the largest Mexican customer would turn the view negative, because cash rather than earnings supports the net leverage. Adjusted EBITDA stabilising near USD 1,001 million with gross leverage below 1.48x would turn it positive.
Basis: calculation C52; calculation C64; calculation C27; calculation C74; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 3; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5

### Confidence inputs

| Input | Value |
| --- | --- |
| Directly Sourced | 30 |
| Calculated | 24 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 0 |
| Insufficient Information | 6 |
| Fields present | 27 |
| Fields total | 29 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 4 |
| MINOR | 9 |

### Period table

| Period | Start | End |
| --- | --- | --- |
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| 9M 2025 | 2025-01-01 | 2025-09-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |
| 9M 2026 | 2026-01-01 | 2026-09-30 |

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10-K_2025-12-31_wfrd-20251231.htm.jsonl | Annual report (Form 10-K) | FY2025 with FY2024 and FY2023 comparatives; balance sheets at 2025-12-31 and 2024-12-31 | USD | Millions | Weatherford International plc and consolidated subsidiaries | US GAAP | Tier 1 (audited statements, KPMG LLP unqualified opinion) | Annual statements, debt note, maturity table, segment note | Page numbers are extract chunks; the Q4 2025 release was not supplied |
| 10-Q_2026-03-31_wfrd-20260331.htm.jsonl | Quarterly report (Form 10-Q) | Q1 2026 | USD | Millions | Consolidated | US GAAP | Tier 2b (unaudited) | Inventory only | Not used for any figure |
| 10-Q_2026-06-30_wfrd-20260630.htm.jsonl | Quarterly report (Form 10-Q) | Q2 and H1 2026; balance sheet at 2026-06-30 | USD | Millions | Consolidated | US GAAP | Tier 2b (unaudited) | June 2026 balance sheet, H1 stubs, June 2026 debt | Other Charges, Net includes redomestication costs, which the later report shows separately |
| 10-Q_2026-09-30_wfrd-20260930.htm.jsonl | Quarterly report (Form 10-Q) | Q3 and 9M 2026; balance sheet at 2026-09-30 | USD | Millions | Consolidated | US GAAP | Tier 2b (unaudited) | Latest balance sheet, 9M statements, debt, covenants, liquidity, subsequent events | 2025 comparatives were reclassified; no cash flow statement for the quarter alone |
| EX-99.1_2026-04-21_a2026-q1ex991earningsrelea.htm.jsonl | Earnings release (Exhibit 99.1) | Q1 2026 | USD | Millions | Consolidated | Non-GAAP reconciled to US GAAP | Tier 2b (unaudited) | Inventory only | Not used for any figure |
| EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl | Earnings release (Exhibit 99.1) | Q2 and H1 2026 | USD | Millions | Consolidated | Non-GAAP reconciled to US GAAP | Tier 2b (unaudited) | H1 adjusted EBITDA, June 2026 net debt | Non-GAAP measures on issuer definitions |
| EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl | Earnings release (Exhibit 99.1) | Q3 and 9M 2026; last twelve months to 2026-09-30 | USD | Millions | Consolidated | Non-GAAP reconciled to US GAAP | Tier 2b (unaudited) | 9M and LTM adjusted EBITDA, issuer net debt, adjusted free cash flow, redemption notice | Non-GAAP measures on issuer definitions; the release is not itself the redemption notice |

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Weatherford International plc | Parent and registrant (Irish public limited company); borrower's parent under the Credit Agreement; guarantor of the notes | 31 December | USD | Millions | Consolidated group; wholly owned subsidiaries and controlled joint ventures, with noncontrolling interests | US GAAP | FY2023 to FY2025 (income and cash flow), 2024-12-31 and 2025-12-31 balance sheets, Q1 to Q3 2026 and 2026 year to date |
| Weatherford International Ltd (Bermuda) | Issuer of the 2030 and 2033 senior notes; borrower under the Credit Agreement | 31 December | USD | Millions | Not reported separately; inside the consolidated group | US GAAP | No entity-level statements supplied |
| Weatherford US Holding, LLC (formerly Weatherford International, LLC, Weatherford Delaware) | Co-issuer and co-obligor of the 2030 notes (since 2022-12-01) and the 2033 notes (since 2025-10-24); borrower under the Credit Agreement | 31 December | USD | Millions | Not reported separately | US GAAP | No entity-level statements supplied |
| Weatherford International Holding LLC (Texas) | Additional co-issuer and co-obligor of the 2033 notes from 2026-09-25, when its guarantee was released | 31 December | USD | Millions | Not reported separately | US GAAP | No entity-level statements supplied |
| Weatherford Canada Ltd. and WOFS International Finance GmbH (Switzerland) | Borrowers under the Credit Agreement | 31 December | USD | Millions | Not reported separately | US GAAP | No entity-level statements supplied |

Subsequent events are flagged with their dates and kept out of the period figures: the 2026-09-25 supplemental indenture adding a co-issuer to the 2033 notes (inside the quarter), the 2026-10-15 dividend declaration, the 2026-10-20 notice to redeem the 2030 notes for redemption on 2026-10-30, and the 2026-12-03 dividend payment.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
| --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported) derived as operating income plus depreciation and amortization | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | Derivation | Not stated by the issuer | FY2024 1,281; FY2025 1,023; 9M 2025 750; 9M 2026 594 | The issuer states only adjusted EBITDA; the method asks for reported EBITDA as the primary denominator | All periods |
| Net debt deducts unrestricted cash only | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | Perimeter | Issuer net debt 282 at 2026-09-30 (also deducts restricted cash 37) | 319 | Restricted cash is mainly collateral for letters of credit and is not available to repay debt; Analyst Judgement | 2026-09-30 and earlier dates |
| Adjusted EBITDA for FY2024 and FY2025 calculated from the segment note | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | Derivation | Not stated by the issuer | FY2024 1,382; FY2025 1,067 | The segment note's adjusted EBITDA plus All Other less Corporate follows the issuer's definition and reproduces its stated LTM figures (calculation C27 and C28 tie) | FY2024, FY2025 |
| Last-twelve-months construction | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | Construction | Not applicable | See the constructed period register | Full year plus current stub less prior-year stub, as the method states | 2026-06-30, 2026-09-30 |
| Redomestication line | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | Presentation | H1 2026 Other Charges, Net 40 (includes redomestication) | Not restated; the H1 statement is used only for its operating income | The nine-month 2026 report splits out redomestication of 30; the six-month report did not, and no restated six-month split is stated | H1 2026 |
| 2025 comparatives reclassified by the issuer | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 5 | Reclassification | Amounts not stated | Comparatives used as printed in the 2026 reports | The issuer says certain 2025 interim amounts were reclassified to the 2026 presentation and does not state them | 9M 2025, H1 2025 |
| Currency and unit | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | None | USD millions | USD millions | All sources are in one currency and unit; no conversion | All periods |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Revenue: Services | 3,393 | 2,980 | 2,233 | 2,086 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Revenue: Products | 2,120 | 1,938 | 1,396 | 1,314 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Total Revenue | 5,513 | 4,918 | 3,629 | 3,400 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Cost of Services | 2,048 | 1,901 | 1,418 | 1,357 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Cost of Products | 1,557 | 1,483 | 1,074 | 996 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Gross Profit | 1,908 | 1,534 | 1,137 | 1,047 | USD millions | Calculated: Total Revenue less Cost of Services less Cost of Products (calculation C9 to C12) | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Research and Development | 123 | 108 | 86 | 64 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Selling, General and Administrative | 791 | 664 | 494 | 522 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Gain on Sale of Business | Not supplied: the statement prints a dash, which is read as not stated | -70 | -70 | Not supplied: the statement prints a dash, which is read as not stated | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Restructuring Charges | 42 | 58 | 51 | 28 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Redomestication | Not supplied: the 2025 annual report prints no such line | Not supplied: the 2025 annual report prints no such line | Not supplied: the statement prints a dash, which is read as not stated | 30 | USD millions | Reported; separate line only from the third-quarter 2026 report | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Other Charges, Net | 14 | 18 | 19 | 20 | USD millions | Reported; printed as Other Charges (Credits), Net in the annual report | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Total Costs and Expenses | 4,575 | 4,162 | 3,072 | 3,017 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Operating Income | 938 | 756 | 557 | 383 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Interest Expense, Net of Interest Income | -102 | -91 | -70 | -48 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Interest Income | 56 | 46 | 36 | 34 | USD millions | Reported in the caption of the line above | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Interest Expense (gross) | 158 | 137 | 106 | 82 | USD millions | Calculated: net interest expense plus interest income (calculation C13 to C16); the 9M figures equal the interest expense the quarterly report states | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Loss on Extinguishment of Debt and Bond Redemption Premium | -9 | -39 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; the 2026 quarterly statements include such items in Other Expense, Net | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Loss on Blue Chip Swap Securities | -10 | -2 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; the 2026 quarterly statements include such items in Other Expense, Net | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Other Expense, Net | -78 | -70 | -61 | -26 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Income Before Income Taxes | 739 | 554 | 426 | 309 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Income Tax Provision | -189 | -97 | -108 | -33 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Net Income | 550 | 457 | 318 | 276 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Net Income Attributable to Noncontrolling Interests | 44 | 26 | 25 | 9 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Net Income Attributable to Weatherford | 506 | 431 | 293 | 267 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Basic Income per Share | 6.93 | 5.96 | 4.04 | 3.71 | USD per share | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Basic Weighted Average Shares Outstanding | 73.0 | 72.2 | 72.4 | 71.9 | shares in millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Diluted Income per Share | 6.75 | 5.93 | 4.02 | 3.70 | USD per share | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Diluted Weighted Average Shares Outstanding | 74.9 | 72.6 | 72.7 | 72.2 | shares in millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Depreciation and Amortization | 343 | 267 | 193 | 211 | USD millions | Reported in the cash flow statement; not a line of the income statement | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Share-Based Compensation | 45 | 38 | 26 | 38 | USD millions | Reported in the cash flow statement; not a line of the income statement | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| EBITDA (Reported) | 1,281 | 1,023 | 750 | 594 | USD millions | Calculated: Operating Income plus Depreciation and Amortization, because the issuer states no unadjusted EBITDA (calculation C17 to C20); excludes Other Expense, Net | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| EBITDA (Adjusted) | 1,382 | 1,067 | 776 | 710 | USD millions | Issuer-adjusted definition: operating income plus D&A, share-based compensation, restructuring, redomestication and other charges, less the gain on sale. Stated for 9M 2025 and 9M 2026 in the third-quarter release; for FY2024 and FY2025 calculated from the segment note as the segment adjusted EBITDA of three segments plus All Other less Corporate (calculation C21 and C22) | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 |
| Segment revenue: Drilling and Evaluation | 1,682 | 1,371 | 1,031 | 943 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment revenue: Well Construction and Completions | 1,976 | 1,875 | 1,365 | 1,326 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment revenue: Production and Intervention | 1,452 | 1,340 | 987 | 926 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment revenue: All Other | 403 | 332 | 246 | 205 | USD millions | Reported; non-core integrated services and projects, not a reportable segment | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment adjusted EBITDA: Drilling and Evaluation | 467 | 309 | 226 | 220 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment adjusted EBITDA: Well Construction and Completions | 564 | 515 | 371 | 317 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment adjusted EBITDA: Production and Intervention | 319 | 257 | 184 | 197 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment adjusted EBITDA: All Other | 84 | 42 | 37 | 29 | USD millions | Reported | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |
| Segment adjusted EBITDA: Corporate | -52 | -56 | -42 | -53 | USD millions | Reported; corporate costs, not an operating unit | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 6; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 7 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Net Income | 550 | 457 | 318 | 276 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Depreciation and Amortization | 343 | 267 | 193 | 211 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Foreign Exchange Losses | 56 | 45 | 40 | 11 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Loss on Blue Chip Swap Securities | 10 | 2 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; not a separate line in the quarterly statements | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Gain on Disposition of Assets | -35 | -9 | -6 | -28 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Gain on Sale of Business | Not supplied: the statement prints a dash, which is read as not stated | -70 | -70 | Not supplied: the statement prints a dash, which is read as not stated | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Deferred Income Tax Provision (Benefit) | 8 | -14 | 13 | -35 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Share-Based Compensation | 45 | 38 | 26 | 38 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Accounts Receivable | -31 | 75 | 22 | 186 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Inventories | -112 | 24 | -17 | -19 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Accounts Payable | 97 | -131 | -91 | -72 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Accrued Salaries and Benefits | -74 | -24 | -27 | -7 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Income Taxes Payable | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | -3 | -23 | USD millions | Reported; the annual statement has no separate line | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Other Changes, Net | -65 | 16 | 10 | -35 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Operating Activities | 792 | 676 | 408 | 503 | USD millions | Reported; the label in the filings is Net Cash Provided by Operating Activities | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Capital Expenditures for Property, Plant and Equipment | -299 | -226 | -175 | -141 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Proceeds from Disposition of Assets | 31 | 16 | 11 | 17 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Proceeds from Sale of Business | Not supplied: the statement prints a dash, which is read as not stated | 97 | 97 | Not supplied: the statement prints a dash, which is read as not stated | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Purchases of Blue Chip Swap Securities | -50 | -117 | -103 | -23 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Proceeds from Sales of Blue Chip Swap Securities | 40 | 115 | 102 | 22 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Business Acquisitions, Net of Cash Acquired | -51 | Not supplied: the statement prints a dash, which is read as not stated | Not supplied: the statement prints a dash, which is read as not stated | -13 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Proceeds from Sale of Investments | 41 | Not supplied: the statement prints a dash, which is read as not stated | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; not a separate line in the quarterly statements | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Other Investing Activities | -5 | -30 | -14 | -26 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Investing Activities | -293 | -145 | -82 | -164 | USD millions | Reported; the label in the filings is Net Cash Used in Investing Activities | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Borrowings of Long-term Debt | Not supplied: the statement prints a dash, which is read as not stated | 1,200 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; not a separate line in the quarterly statements | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Debt Issuance Costs | Not supplied: the statement prints a dash, which is read as not stated | -18 | Not supplied: not a separate line in the quarterly statement | Not supplied: not a separate line in the quarterly statement | USD millions | Reported; not a separate line in the quarterly statements | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Repayments of Long-term Debt | -287 | -1,388 | -80 | -25 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Distributions to Noncontrolling Interests | -39 | -29 | -16 | -9 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Tax Remittance on Equity Awards | -31 | -21 | -20 | -20 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Share Repurchases | -99 | -101 | -94 | -54 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Dividends Paid | -36 | -72 | -54 | -59 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Other Financing Activities | -19 | -45 | -13 | Not supplied: the statement prints a dash, which is read as not stated | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Net Cash from Financing Activities | -511 | -474 | -277 | -167 | USD millions | Reported; the label in the filings is Net Cash Used in Financing Activities | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| FX Effect on Cash | -76 | 10 | 7 | -16 | USD millions | Reported effect of exchange rate changes on cash, cash equivalents and restricted cash | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Net Cash Change | -88 | 67 | 56 | 156 | USD millions | Reported; includes restricted cash | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Opening Cash | 1,063 | 975 | 975 | 1,042 | USD millions | Reported; cash, cash equivalents and restricted cash, so it differs from Cash & Equivalents in the balance sheet | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Closing Cash | 975 | 1,042 | 1,031 | 1,198 | USD millions | Reported; cash, cash equivalents and restricted cash, so it differs from Cash & Equivalents in the balance sheet | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Cash Interest Paid | 153 | 125 | 71 | 57 | USD millions | Reported supplemental information; positive amount paid | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Income Taxes Paid, Net of Refunds | 168 | 157 | 122 | 127 | USD millions | Reported supplemental information | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Ordinary Shares Issued for Acquisition (non-cash) | 79 | Not supplied: the statement prints a dash, which is read as not stated | Not supplied: the statement prints a dash, which is read as not stated | 101 | USD millions | Reported supplemental non-cash information | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |
| Portion of Assumed Equity Awards Included in Acquisition Consideration (non-cash) | Not supplied: not a separate line in the annual statement | Not supplied: not a separate line in the annual statement | Not supplied: the statement prints a dash, which is read as not stated | 7 | USD millions | Reported supplemental non-cash information; printed only in the third-quarter 2026 report | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, pages 3–4 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | H1 2026 | 9M 2026 | Unit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cash and Cash Equivalents | 916 | 987 | 1,100 | 1,161 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Restricted Cash | 59 | 55 | 37 | 37 | USD millions | Reported; mainly cash collateral for letters of credit | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Accounts Receivable, Net | 1,261 | 1,234 | 1,104 | 1,105 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Inventories, Net | 880 | 836 | 811 | 861 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Other Current Assets | 286 | 260 | 246 | 245 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Current Assets | 3,402 | 3,372 | 3,298 | 3,409 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Property, Plant and Equipment, Net | 1,061 | 1,124 | 1,131 | 1,160 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Intangibles, Net | 325 | 285 | 265 | 288 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Operating Lease Assets | 124 | 128 | 118 | 123 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Other Non-Current Assets | 247 | 288 | 290 | 356 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Assets | 5,159 | 5,197 | 5,102 | 5,336 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Current Portion of Long-term Debt | 17 | 30 | 30 | 264 | USD millions | Reported; at 2026-09-30 includes the 2030 senior notes carrying value of 234 reclassified to current | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Accounts Payable | 792 | 650 | 625 | 595 | USD millions | Reported; at 2026-09-30 includes 19 outstanding under a supply chain finance programme | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Accrued Salaries and Benefits | 302 | 285 | 241 | 277 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Income Taxes Payable | 129 | 129 | 95 | 103 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Current Portion of Operating Lease Liabilities | 44 | 48 | 42 | 45 | USD millions | Reported; not included in Total Debt | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Other Current Liabilities | 412 | 395 | 374 | 391 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Current Liabilities | 1,696 | 1,537 | 1,407 | 1,675 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Long-term Debt | 1,617 | 1,455 | 1,450 | 1,216 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Operating Lease Liabilities | 110 | 109 | 100 | 103 | USD millions | Reported; non-current, not included in Total Debt | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Non-Current Taxes Payable | 274 | 242 | 217 | 218 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Other Non-Current Liabilities | 179 | 158 | 139 | 132 | USD millions | Reported; includes pension underfunding of 41 at 2025-12-31 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Liabilities | 3,876 | 3,501 | 3,313 | 3,344 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Capital in Excess of Par Value | 2,921 | 2,815 | 2,794 | 2,887 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Retained Deficit | -1,486 | -1,129 | -1,022 | -922 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Accumulated Other Comprehensive Income (Loss) | -150 | 13 | 16 | -9 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Shareholders' Equity | 1,285 | 1,699 | 1,788 | 1,956 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Noncontrolling Interests | -2 | -3 | 1 | 36 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Equity | 1,283 | 1,696 | 1,789 | 1,992 | USD millions | Reported as Total Shareholders' Equity; includes noncontrolling interests | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Liabilities and Shareholders' Equity | 5,159 | 5,197 | 5,102 | 5,336 | USD millions | Reported, signs as printed | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Total Debt | 1,634 | 1,485 | 1,480 | 1,480 | USD millions | Calculated: Current Portion of Long-term Debt plus Long-term Debt, carrying value net of issuance costs (calculation C5 to C8); includes finance leases, excludes operating lease liabilities | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |
| Cash & Equivalents | 916 | 987 | 1,100 | 1,161 | USD millions | Reported as Cash and Cash Equivalents; excludes restricted cash | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8.625% Senior Notes due 2030 | Senior notes; issuer Weatherford International Ltd (Bermuda) with co-issuer Weatherford US Holding, LLC; guaranteed by the company and subsidiary guarantors | 234 | 236 | Not applicable | Not applicable | Not supplied: not stated in the sources | Not supplied: not stated in the sources | USD | 234 | Not applicable | 8.625% | Fixed | Not applicable | Not applicable | Not applicable | 2030-04-30; notice to redeem on 2026-10-30 issued 2026-10-20 | 0 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |
| 6.75% Senior Notes due 2033 | Senior notes; issuer Weatherford International Ltd (Bermuda) with co-issuers Weatherford US Holding, LLC and, from 2026-09-25, Weatherford International Holding LLC | 1,183 | 1,200 | Not applicable | Not applicable | Not supplied: not stated in the sources | Not supplied: not stated in the sources | USD | 1,183 | Not applicable | 6.75% | Fixed | Not applicable | Not applicable | Not applicable | 2033-10-15 | 0 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |
| Finance leases | Finance lease liabilities, 30 current and 33 long-term | 63 | 63 | Not applicable | Not applicable | Not supplied: not stated in the sources | Not supplied: not stated in the sources | USD | 63 | Not applicable | 6.7% weighted-average discount rate at 2025-12-31 | Not supplied: not stated for 2026-09-30 | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Weighted-average remaining term 3.2 years at 2025-12-31 | Not supplied: the 2026-09-30 schedule is not stated; payments at 2025-12-31 were 29 in 2026 and 20 in 2027 on the debt maturity table | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 83; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| Credit Agreement (revolving and letter of credit facility) | Revolving credit and letters of credit; borrowers Weatherford International Ltd, Weatherford US Holding, LLC, Weatherford Canada Ltd. and WOFS International Finance GmbH | 0 | 0 | 0 | 1,000 | Secured by substantially all personal property of the company and guarantor subsidiaries | Not supplied: not stated in the sources | USD | 0 | Not applicable | Not supplied: not stated in the sources | Not supplied: not stated in the sources | Not supplied: not stated in the sources | Not supplied: not stated in the sources | Not supplied: not stated in the sources | 2030-09-18, or 91 days before the 2030 notes mature while more than USD 200 million of them remain outstanding | 0 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 |

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA (Reported), LTM to 2026-09-30 | LTM | USD 1,023m | USD 594m | USD 750m | USD 867m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | 9M 2025 comparatives were reclassified by the issuer; the amount is not stated |
| EBITDA (Adjusted), LTM to 2026-09-30 | LTM | USD 1,067m | USD 710m | USD 776m | USD 1,001m | Verified against the 1,001 stated by the issuer | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | FY2025 is calculated from the segment note |
| Cash interest paid, LTM to 2026-09-30 | LTM | USD 125m | USD 57m | USD 71m | USD 111m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4 | Coupon dates are semiannual, so the figure is lumpy |
| Revenue, LTM to 2026-09-30 | LTM | USD 4,918m | USD 3,400m | USD 3,629m | USD 4,689m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | None beyond the reclassification note above |
| EBITDA (Reported), LTM to 2026-06-30 | LTM | USD 1,023m | USD 371m | USD 505m | USD 889m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 3 | H1 stubs are operating income 230 plus D&A 141 (2026) and 379 plus 126 (2025); the second-quarter report put redomestication inside other charges |
| EBITDA (Adjusted), LTM to 2026-06-30 | LTM | USD 1,067m | USD 456m | USD 507m | USD 1,016m | Verified against the 1,016 stated by the issuer | EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl, page 14; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | FY2025 is calculated from the segment note |
| Cash interest paid, LTM to 2026-06-30 | LTM | USD 125m | USD 55m | USD 70m | USD 110m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 4 | Coupon dates are semiannual, so the figure is lumpy |
| Revenue, LTM to 2026-06-30 | LTM | USD 4,918m | USD 2,257m | USD 2,397m | USD 4,778m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2 | None |
| EBITDA (Adjusted), Q4 2025 | Q4 (calculated) | USD 1,067m | USD 776m | Not applicable | USD 291m | Calculated | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 | No fourth-quarter 2025 release was supplied, so the quarter is the full year less nine months |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1,634 | 916 | 718 | US$m | Reported carrying values, not principal: current portion 17 plus long-term debt 1,617, which hold the 2030 senior notes (1,586) and finance leases (48); the 2033 notes did not yet exist. Principal is not stated exactly (the 2030 notes' remaining principal is given as 1.6 billion). Cash excludes restricted cash of 59. |
| FY2025 / 2025-12-31 | 1,485 | 987 | 498 | US$m | Reported carrying values, not principal: current portion 30 plus long-term debt 1,455, which hold the 2033 senior notes (1,181), the 2030 senior notes (234) and finance leases (70). Contractual principal is 1,506, 21 above the carrying value. Cash excludes restricted cash of 55. |
| 2026-06-30 | 1,480 | 1,100 | 380 | US$m | Reported carrying values, not principal: current portion 30 plus long-term debt 1,450, which hold the 2033 notes (1,182), the 2030 notes (234) and finance leases (64). Principal is 1,500 (236 plus 1,200 plus 64). Cash excludes restricted cash of 37; the issuer's own net debt of 343 also deducts it. |
| 2026-09-30 | 1,480 | 1,161 | 319 | US$m | Reported carrying values, not principal: current portion 264 (the 2030 notes 234, reclassified to current because of the redemption notice, plus finance leases 30) plus long-term debt 1,216 (the 2033 notes 1,183 plus finance leases 33). Principal is 1,499. Cash excludes restricted cash of 37, so net debt is 37 above the issuer's own 282. Reported, before the planned redemption of the 2030 notes. |

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 916 | Not supplied: the commitment at 2024-12-31 is not stated | US$m | Cash is Cash & Equivalents (restricted cash of 59 excluded). Undrawn facility not supplied: the commitment in force at 2024-12-31 is not stated, since the annual report gives 720 only as the amount before the September 2025 amendment. |
| FY2025 / 2025-12-31 | 987 | 748 | US$m | Cash is Cash & Equivalents (restricted cash of 55 excluded). Undrawn is the 1,000 commitment less 7 financial and 245 performance letters of credit, no borrowings; of it 400 is for performance letters of credit only. |
| 2026-06-30 | 1,100 | 753 | US$m | Cash is Cash & Equivalents (restricted cash of 37 excluded). Undrawn is the 1,000 commitment less 4 financial and 243 performance letters of credit, no borrowings; the split between tranches is stated only in the annual report. |
| 2026-09-30 | 1,161 | 766 | US$m | Cash is Cash & Equivalents (restricted cash of 37 excluded) and includes 164 that cannot be immediately repatriated. Undrawn is the 1,000 commitment less 1 financial and 233 performance letters of credit, no borrowings; only 599 is available for borrowing, the other 167 for performance letters of credit. |

Undrawn committed facilities are the total commitment net of letters of credit, and only part of it can be borrowed.

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 1.28 | 0.56 | x | Gross and net debt at carrying value over EBITDA (Reported) calculated as operating income plus D&A; FY rows use the fiscal-year statement figure and interim rows use last-twelve-months EBITDA. Net debt deducts unrestricted cash only. The adjusted-EBITDA ratios are in the calculation register. |
| FY2025 / 2025-12-31 | 1.45 | 0.49 | x | Same basis as the FY2024 row. |
| 2026-06-30 | 1.66 | 0.43 | x | Same basis; last-twelve-months EBITDA to 2026-06-30. |
| 2026-09-30 | 1.71 | 0.37 | x | Same basis; last-twelve-months EBITDA to 2026-09-30. Before the planned redemption of the 2030 notes (pro forma net leverage is in the post-balance-sheet table). |

Net debt deducts unrestricted cash only and interim rows rest on last-twelve-months EBITDA that the company does not state on a reported basis.

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,634 | Net debt data, gross debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,281 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2024 / 2024-12-31 | USD | US$m | 1.28 | Calculated | Tier 1 (audited statements) | Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 718 | Net debt data, net debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,281 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2024 / 2024-12-31 | USD | US$m | 0.56 | Calculated | Tier 1 (audited statements) | Reported EBITDA is operating income plus D&A and is not stated by the issuer; Net debt deducts unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,281 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | 153 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2024 / 2024-12-31 | USD | US$m | 8.37 | Calculated | Tier 1 (audited statements) | Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,634 | Net debt data, gross debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,382 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | FY2024 / 2024-12-31 | USD | US$m | 1.18 | Calculated | Tier 1 (audited statements) | Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 718 | Net debt data, net debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,382 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | FY2024 / 2024-12-31 | USD | US$m | 0.52 | Calculated | Tier 1 (audited statements) | Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer; Net debt deducts unrestricted cash only. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,382 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | 153 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2024 / 2024-12-31 | USD | US$m | 9.03 | Calculated | Tier 1 (audited statements) | Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,485 | Net debt data, gross debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,023 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2025 / 2025-12-31 | USD | US$m | 1.45 | Calculated | Tier 1 (audited statements) | Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 498 | Net debt data, net debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,023 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2025 / 2025-12-31 | USD | US$m | 0.49 | Calculated | Tier 1 (audited statements) | Reported EBITDA is operating income plus D&A and is not stated by the issuer; Net debt deducts unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 1,023 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | 125 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2025 / 2025-12-31 | USD | US$m | 8.18 | Calculated | Tier 1 (audited statements) | Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,485 | Net debt data, gross debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,067 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | FY2025 / 2025-12-31 | USD | US$m | 1.39 | Calculated | Tier 1 (audited statements) | Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 498 | Net debt data, net debt; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, pages 68–69 | 1,067 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | FY2025 / 2025-12-31 | USD | US$m | 0.47 | Calculated | Tier 1 (audited statements) | Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer; Net debt deducts unrestricted cash only. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,067 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 79; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 80 | 125 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | FY2025 / 2025-12-31 | USD | US$m | 8.54 | Calculated | Tier 1 (audited statements) | Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Adjusted EBITDA for the fiscal year is calculated from the segment note, not stated by the issuer. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,480 | Net debt data, gross debt; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3 | 889 | LTM, calculation C26; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 3 | 2026-06-30 | USD | US$m | 1.66 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 380 | Net debt data, net debt; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3 | 889 | LTM, calculation C26; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 3 | 2026-06-30 | USD | US$m | 0.43 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Reported EBITDA is operating income plus D&A and is not stated by the issuer; Net debt deducts unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 889 | LTM, calculation C26; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 3 | 110 | LTM, calculation C30; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 4 | 2026-06-30 | USD | US$m | 8.08 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,480 | Net debt data, gross debt; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3 | 1,016 | LTM, calculation C28; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl, page 14 | 2026-06-30 | USD | US$m | 1.46 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Adjusted EBITDA is the issuer's own last-twelve-months figure. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 380 | Net debt data, net debt; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, pages 2–3 | 1,016 | LTM, calculation C28; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl, page 14 | 2026-06-30 | USD | US$m | 0.37 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Adjusted EBITDA is the issuer's own last-twelve-months figure; Net debt deducts unrestricted cash only. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,016 | LTM, calculation C28; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; EX-99.1_2026-07-21_a2026-q2ex991earningsrelea.htm.jsonl, page 14 | 110 | LTM, calculation C30; 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 4 | 2026-06-30 | USD | US$m | 9.24 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Adjusted EBITDA is the issuer's own last-twelve-months figure. |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 1,480 | Net debt data, gross debt; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 867 | LTM, calculation C25; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | 1.71 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 319 | Net debt data, net debt; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 867 | LTM, calculation C25; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | 2026-09-30 | USD | US$m | 0.37 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Reported EBITDA is operating income plus D&A and is not stated by the issuer; Net debt deducts unrestricted cash only. |
| EBITDA / cash interest | EBITDA (Reported) / Cash Interest Paid | 867 | LTM, calculation C25; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | 111 | LTM, calculation C29; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 7.81 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Reported EBITDA is operating income plus D&A and is not stated by the issuer. |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 1,480 | Net debt data, gross debt; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 1,001 | LTM, calculation C27; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | 2026-09-30 | USD | US$m | 1.48 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Adjusted EBITDA is the issuer's own last-twelve-months figure. |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 319 | Net debt data, net debt; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 1,001 | LTM, calculation C27; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | 2026-09-30 | USD | US$m | 0.32 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Adjusted EBITDA is the issuer's own last-twelve-months figure; Net debt deducts unrestricted cash only. |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / Cash Interest Paid | 1,001 | LTM, calculation C27; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16 | 111 | LTM, calculation C29; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4 | 2026-09-30 | USD | US$m | 9.02 | Calculated | Tier 2b (unaudited) | Denominator is last-twelve-months, built from the full year plus the current stub less the prior-year stub; Cash interest paid is lumpy because the notes pay semiannually (2033 notes April 15 and October 15, 2030 notes June 1 and December 1); Adjusted EBITDA is the issuer's own last-twelve-months figure. |
| Free cash flow conversion, 9M 2026 | (Operating cash flow - capital expenditures) / EBITDA (Adjusted) | 362 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 710 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 | 9M 2026 | USD | USD millions | 0.51 | Calculated | Tier 2b (unaudited) | Free cash flow is before disposal proceeds. |
| Free cash flow conversion, 9M 2025 | (Operating cash flow - capital expenditures) / EBITDA (Adjusted) | 233 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 776 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 | 9M 2025 | USD | USD millions | 0.30 | Calculated | Tier 2b (unaudited) | Includes 231 of cash from factoring, which the nine months of 2026 do not. |
| Capital expenditures / revenue, 9M 2026 | Capital expenditures / Total Revenue | 141 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | 3,400 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | 9M 2026 | USD | USD millions | 0.04 | Calculated | Tier 2b (unaudited) | The company guides capital spend to 3% to 5% of revenue over a 12 to 18 month rolling period. |
| Capital expenditures / revenue, FY2025 | Capital expenditures / Total Revenue | 226 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 70 | 4,918 | 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68 | FY2025 | USD | USD millions | 0.05 | Calculated | Tier 1 (audited statements) | None. |

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 8.37 | x | EBITDA (Reported) over cash interest paid in the fiscal year (statement figure). |
| FY2025 / 2025-12-31 | 8.18 | x | EBITDA (Reported) over cash interest paid in the fiscal year (statement figure). |
| 2026-06-30 | 8.08 | x | Last-twelve-months EBITDA (Reported) over last-twelve-months cash interest paid; cash interest paid is lumpy because coupons are semiannual. |
| 2026-09-30 | 7.81 | x | Last-twelve-months EBITDA (Reported) over last-twelve-months cash interest paid; cash interest paid is lumpy because coupons are semiannual. |

Cash interest paid is lumpy because coupons are semiannual, so cover can move with payment timing.

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- |
| FY2025 / 2025-12-31 | 1,506 | -21 | 1,485 | US$m | Scheduled maturities of 1,506 less unamortized debt issuance costs and discount of 21 (the 2030 notes 2, the 2033 notes 19) give carrying value 1,485, the Gross debt of FY2025 in the net debt table (calculation C40). At 2026-09-30 principal is 1,499 and carrying value 1,480, a difference of -19 (calculation C42). 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 |

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| FY2026 | 29 | US$m | Scheduled debt maturities for 2026; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| FY2027 | 20 | US$m | Scheduled debt maturities for 2027; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| FY2028 | 9 | US$m | Scheduled debt maturities for 2028; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| FY2029 | 4 | US$m | Scheduled debt maturities for 2029; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| FY2030 | 238 | US$m | Includes the 2030 senior notes (236 principal), due 2030-04-30 and called for redemption on 2026-10-30, so this amount is expected to fall by 236; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |
| FY2033 | 1,206 | US$m | The annual report's Thereafter bucket: the 2033 senior notes (1,200 principal, due 2033-10-15) plus 6 of finance lease payments after 2030, whose years are not stated; ladder drawn at 2025-12-31, the latest maturity table in the sources; FY labels are calendar years of maturity. 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 86 |

The ladder is drawn at December 31, 2025 and the 2030 notes in the 2030 row are to be redeemed on October 30, 2026.

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Redemption of all 2030 senior notes (notice issued 2026-10-20) | 2026-10-30 | 2 | 321 | 0.37 | US$m | Redemption at 100% of the 236 principal, funded from cash, expected on 2026-10-30; the carrying value of 234 leaves debt and 236 leaves cash, so net debt on the carrying-value basis rises by 2 (the unamortized issuance cost). Accrued interest to the redemption date is not stated and is not reflected, nor is cash earned in October; completion is not confirmed by any source. Measured from the 2026-09-30 net debt of 319 and LTM EBITDA (Reported) of 867. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 |
| Cash dividend of USD 0.275 per share declared 2026-10-15, payable to holders of record on 2026-11-06 | 2026-12-03 | 19.93 | 338.93 | 0.39 | US$m | Scheduled payment after the 2026-11-05 cutoff, measured separately from the redemption row. The amount uses the 72,470,284 shares outstanding at 2026-10-15; the record-date share count is not stated. Measured from net debt of 319 and LTM EBITDA (Reported) of 867. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 1; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- |
| FY2024 / 2024-12-31 | 5,513 | 1,382 | US$m | Twelve months. Revenue as reported; Adjusted EBITDA on the issuer's definition, calculated from the segment note (calculation C22). |
| FY2025 / 2025-12-31 | 4,918 | 1,067 | US$m | Twelve months. Revenue as reported; Adjusted EBITDA on the issuer's definition, calculated from the segment note (calculation C21). |
| 2026-06-30 | 4,778 | 1,016 | US$m | Last twelve months to 2026-06-30: full year plus six months 2026 less six months 2025. Adjusted EBITDA is the issuer's stated figure (calculation C28). |
| 2026-09-30 | 4,689 | 1,001 | US$m | Last twelve months to 2026-09-30: full year plus nine months 2026 less nine months 2025. Adjusted EBITDA is the issuer's stated figure (calculation C27). |

All rows are twelve-month periods, and the fiscal-year adjusted EBITDA is calculated from the segment note while the interim rows are stated by the company.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
| --- | --- | --- | --- | --- | --- | --- |
| Credit Agreement (revolving credit and letter of credit facility, USD 1,000 million commitment) | 1 | Yes | 0 | 0.00 | US$m | Drawn amount at 2026-09-30 (zero borrowings); 1 of financial and 233 of performance letters of credit are outstanding under it. Borrowers: Weatherford International Ltd (Bermuda), Weatherford US Holding, LLC, Weatherford Canada Ltd. and WOFS International Finance GmbH; guaranteed by Weatherford International plc and certain subsidiaries and secured by substantially all personal property of the company and those subsidiaries. Cumulative leverage is drawn debt over LTM EBITDA (Reported) of 867. The 2030 notes (carrying 234), the 2033 notes (carrying 1,183) and finance leases (63) are left out because no source states their security or legal rank. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 11 |

Only the credit agreement has a stated security, so the notes and finance leases are omitted.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
| --- | --- | --- | --- |
| EBITDA (Reported), 9M 2026 | 594 | US$m | Opening amount: operating income 383 plus D&A 211 (calculation C20); the issuer states no unadjusted EBITDA. |
| Other Charges, Net | 20 | US$m | Add-back, classified as transaction costs (mainly merger and acquisition costs); realisation status not stated. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 22 |
| Restructuring Charges | 28 | US$m | Add-back, classified as restructuring (mainly severance); realisation status not stated. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9 |
| Redomestication | 30 | US$m | Add-back, classified as transaction costs (legal, tax and consulting for the move to Delaware); realisation status not stated. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 21 |
| Share-Based Compensation | 38 | US$m | Add-back, classified as share-based compensation; non-cash. 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 28 |
| EBITDA (Adjusted), 9M 2026 | 710 | US$m | Closing amount, the issuer's stated adjusted EBITDA; 594 plus 20 plus 28 plus 30 plus 38 equals 710. The nine-month gain on sale of business is a dash and no add-back is made for it. EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 |

The bridge covers nine months of 2026 only, the period for which the company states its reconciliation from operating income.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM to 2026-06-30 | LTM to 2026-09-30 | Unit | Basis |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue | 5,513 | 4,918 | 4,778 | 4,689 | US$m | Fiscal year, then last twelve months to 2026-06-30 and 2026-09-30 |
| EBITDA (Reported) | 1,281 | 1,023 | 889 | 867 | US$m | Operating income plus D&A; calculated |
| EBITDA (Adjusted), issuer definition | 1,382 | 1,067 | 1,016 | 1,001 | US$m | Issuer-stated for the interim LTM figures; FY figures calculated from the segment note |
| Total debt (carrying value) | 1,634 | 1,485 | 1,480 | 1,480 | US$m | Includes finance leases |
| Cash & Equivalents | 916 | 987 | 1,100 | 1,161 | US$m | Excludes restricted cash |
| Net debt | 718 | 498 | 380 | 319 | US$m | Total debt less unrestricted cash |
| Undrawn committed facilities | Not supplied: commitment at 2024-12-31 not stated | 748 | 753 | 766 | US$m | Net of letters of credit drawn on the facility |
| Total debt / EBITDA | 1.28 | 1.45 | 1.66 | 1.71 | x | Reported EBITDA |
| Net debt / EBITDA | 0.56 | 0.49 | 0.43 | 0.37 | x | Reported EBITDA |
| EBITDA / cash interest | 8.37 | 8.18 | 8.08 | 7.81 | x | Reported EBITDA over cash interest paid |
| Total debt / adjusted EBITDA | 1.18 | 1.39 | 1.46 | 1.48 | x | Issuer-definition adjusted EBITDA |
| Net debt / adjusted EBITDA | 0.52 | 0.47 | 0.37 | 0.32 | x | Issuer-definition adjusted EBITDA |
| Adjusted EBITDA / cash interest | 9.03 | 8.54 | 9.24 | 9.02 | x | Issuer-definition adjusted EBITDA over cash interest paid |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | 9M 2025 | 9M 2026 | Trend Direction | Analyst Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Growth | Revenue growth, year on year | 7.36% | -10.79% | Not supplied: nine months 2024 is not in the sources | -6.31% | Down | FY2024 against FY2023 revenue of 5,135, FY2025 against FY2024 and 9M 2026 against 9M 2025; the decline reflects Middle East disruption from the Iran conflict and lower North America activity; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 68; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 |
| Margin | EBITDA (Reported) margin | 23.24% | 20.80% | 20.67% | 17.47% | Down | Calculated: EBITDA (Reported) over revenue |
| Margin | EBITDA (Adjusted) margin, issuer definition | 25.07% | 21.70% | 21.38% | 20.88% | Down | FY figures calculated; the 9M issuer figures are 21.4% and 20.9% |
| Cash flow | Free cash flow (operating cash flow less capital expenditures), USD millions | 493 | 450 | 233 | 362 | Up in 2026 | Calculated; 9M 2026 includes 186 of receivable collections |
| Cash flow | Capital expenditures as a share of revenue | 5.42% | 4.60% | 4.82% | 4.15% | Down | Calculated; company guides to 3% to 5% |
| Segment | Segment adjusted EBITDA margin, Drilling and Evaluation | 27.76% | 22.54% | 21.92% | 23.33% | Mixed | Calculated from segment revenue and segment adjusted EBITDA |
| Segment | Segment adjusted EBITDA margin, Well Construction and Completions | 28.54% | 27.47% | 27.18% | 23.91% | Down | Lower Middle East activity and higher other expense |
| Segment | Segment adjusted EBITDA margin, Production and Intervention | 21.97% | 19.18% | 18.64% | 21.27% | Up in 2026 | Cost reductions and subsea intervention |
| Geography | Revenue, Middle East, North Africa and Asia, USD millions | 2,123 | 2,116 | 1,560 | 1,369 | Down | Revenue by geographic area; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8 |
| Geography | Revenue, North America, USD millions | 1,046 | 983 | 734 | 661 | Down | Revenue by geographic area; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 81; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 8 |
| Receivables | Mexico share of net accounts receivable | 31% | 27% | Not supplied: not stated at 2025-09-30 | 19% | Down | Point-in-time at each period end; the largest Mexican customer was 26%, 24% and 14% of net receivables at 2024-12-31, 2025-12-31 and 2026-09-30; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 53; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32 |
| Funding float | Supplier finance programme outstanding, USD millions | Not supplied: programme not yet operating | Not supplied: programme not yet operating | Not supplied: programme not yet operating | 19 | New | Became operational in Q3 2026 and sits in accounts payable (595 at 2026-09-30); 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 |
| Funding float | Receivable sales (factoring) proceeds, USD millions | 110 | 247 | 231 | 16 | Down in 2026 | Cash proceeds from receivables sold; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 54; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 32 |
| Operations | Average worldwide rig count | 1,948 | 1,818 | 1,825 | 1,831 | Flat in 2026 | Average rig counts from the Baker Hughes count quoted by the issuer, for the year or the nine months; 10-K_2025-12-31_wfrd-20251231.htm.jsonl, page 42; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 19 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
| --- | --- | --- | --- | --- | --- | --- | --- |
| EBITDA | EBITDA (Reported): operating income plus D&A, no add-backs | Adjusted EBITDA: also adds back share-based compensation, restructuring, redomestication, other charges and the gain on sale | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 14; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | All periods | High: 9M 2026 594 against 710, a 116 difference; FY2025 1,023 against 1,067, a 44 difference | Financial foundation | Reported EBITDA drives the primary ratios; the adjusted ratios are separate rows |
| Net debt | Total debt at carrying value less unrestricted cash and equivalents: 319 at 2026-09-30 | Total debt less cash and equivalents and restricted cash: 282 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 16; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3 | All balance-sheet dates | Medium: 37 at 2026-09-30 | Financial foundation | Unrestricted cash is used; the issuer's figure is quoted as stated |
| Total debt | Carrying value of every balance-sheet debt line: 1,480 at 2026-09-30 | Principal of the notes plus finance leases: 1,499 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10 | 2026-09-30 | Low: 19, which is unamortized issuance costs of 2 on the 2030 notes and 17 on the 2033 notes | Financial foundation | Carrying value is the ratio numerator; principal appears in the maturity table |
| Free cash flow | Operating cash flow less capital expenditures: 362 for 9M 2026 | Adjusted free cash flow: also adds proceeds from disposition of assets: 379 | EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 14; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 15 | 9M 2025, 9M 2026 | Low: 17 in 9M 2026, 11 in 9M 2025 | Financial foundation | The method's definition is used; the issuer's figure is shown in calculations |
| Interest | Cash interest paid is the cover denominator: 57 in 9M 2026 | Interest expense: 82 gross and 48 net of interest income in 9M 2026 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 4; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 22 | All periods | Medium: coupons are semiannual, so cash paid in a period can sit far from the accrual | Financial foundation | Cover uses cash paid on a last-twelve-months basis; expense is shown in the income statement |
| Leases | Finance leases carried inside debt stay in total debt (63 at 2026-09-30); operating lease liabilities are not added | Finance leases are in current and long-term debt; operating lease liabilities are separate balance-sheet lines (148) | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9 | All dates | Medium: operating leases are 148 outside the debt figure | Financial foundation | Not added to debt; flagged as a claim outside debt |
| Cash | Cash and cash equivalents excluding restricted cash: 1,161 | Total cash including restricted cash: 1,198; cash that cannot be immediately repatriated: 164 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 3; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 31 | 2026-09-30 | Medium | Financial foundation | Net debt uses 1,161; the 164 is shown as a liquidity limitation |
| 2030 notes redemption (multi-figure event) | Carrying value 234 in current debt at 2026-09-30 | Principal 236; redemption at 100% of principal plus accrued interest on 2026-10-30; the release says the release is not itself the notice | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 9; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 10; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 16; EX-99.1_2026-10-20_a2026-q3ex991earningsrelea.htm.jsonl, page 5 | 2026-09-30 and after | Low in amount, High for timing: moves 234 into current debt | Financial foundation | Carrying value 234 stays in period figures; principal 236 and the cash payment are in the post-balance-sheet table |
| Other Charges, Net and Redomestication | Other charges and redomestication are separate lines | Second-quarter report: other charges of 40 for six months include redomestication; third-quarter report shows 20 and 30 for nine months | 10-Q_2026-06-30_wfrd-20260630.htm.jsonl, page 2; 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 2 | H1 2026 | Low: no effect on operating income | Financial foundation | H1 is used only for operating income and D&A |
| Supplier finance programme | A supplier finance obligation in payables is a funding float, not debt | 19 included in accounts payable at 2026-09-30 | 10-Q_2026-09-30_wfrd-20260930.htm.jsonl, page 15 | 2026-09-30 | Low today, new programme | Financial foundation | Not added to debt; flagged and tracked |

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
| --- | --- | --- | --- |
| Leverage, coverage and liquidity at 2026-09-30 | Ready with Limitations | EBITDA (Reported) is calculated; FY adjusted EBITDA is calculated; the facility's tranche split is from the annual report only; the redemption of the 2030 notes is planned and not confirmed | Read leverage with the pro forma row; confirm redemption in the next filing |
| Debt structure and maturity wall | Ready with Limitations | No ladder at 2026-09-30; security and ranking of the notes not stated; no legal documents | Use the 2025-12-31 ladder with the redemption adjustment; obtain the indentures for ranking |
| Covenant analysis | Not Ready | Covenant levels are stated but definitions and compliance figures are not; capacity is not inferred | Obtain the credit agreement and any compliance certificate |
| Earnings and cash flow trend | Ready with Limitations | No fourth-quarter 2025 release; 2025 comparatives were reclassified; the quarter's own cash flow statement is not in the third-quarter report | Treat Q4 2025 as calculated |
| Segment analysis | Ready | Segment revenue and adjusted EBITDA are printed for every column used | None |
| Claims outside debt | Ready with Limitations | Pension figures are at 2025-12-31 only; litigation amounts are not disclosed | Use the 2025 pension figures with that date |

## Calculations

| ID | Calculation | Inputs | Result | Unit |
| --- | --- | --- | --- | --- |
| C1 | Net debt, FY2024 / 2024-12-31 | Total debt 1,634 less Cash & Equivalents 916 | 718 | US$m |
| C2 | Net debt, FY2025 / 2025-12-31 | Total debt 1,485 less Cash & Equivalents 987 | 498 | US$m |
| C3 | Net debt, 2026-06-30 | Total debt 1,480 less Cash & Equivalents 1,100 | 380 | US$m |
| C4 | Net debt, 2026-09-30 | Total debt 1,480 less Cash & Equivalents 1,161 | 319 | US$m |
| C5 | Total debt, FY2024 | Current portion 17 plus long-term debt 1,617 | 1,634 | US$m |
| C6 | Total debt, FY2025 | Current portion 30 plus long-term debt 1,455 | 1,485 | US$m |
| C7 | Total debt, 2026-06-30 | Current portion 30 plus long-term debt 1,450 | 1,480 | US$m |
| C8 | Total debt, 2026-09-30 | Current portion 264 plus long-term debt 1,216 | 1,480 | US$m |
| C9 | Gross profit, FY2024 | Revenue 5,513 less cost of services 2,048 less cost of products 1,557 | 1,908 | USD millions |
| C10 | Gross profit, FY2025 | Revenue 4,918 less cost of services 1,901 less cost of products 1,483 | 1,534 | USD millions |
| C11 | Gross profit, 9M 2025 | Revenue 3,629 less cost of services 1,418 less cost of products 1,074 | 1,137 | USD millions |
| C12 | Gross profit, 9M 2026 | Revenue 3,400 less cost of services 1,357 less cost of products 996 | 1,047 | USD millions |
| C13 | Gross interest expense, FY2024 | Net interest expense 102 plus interest income 56 | 158 | USD millions |
| C14 | Gross interest expense, FY2025 | Net interest expense 91 plus interest income 46 | 137 | USD millions |
| C15 | Gross interest expense, 9M 2025 | Net interest expense 70 plus interest income 36 | 106 | USD millions |
| C16 | Gross interest expense, 9M 2026 | Net interest expense 48 plus interest income 34 | 82 | USD millions |
| C17 | EBITDA (Reported), FY2024 | Operating income 938 plus depreciation and amortization 343 | 1,281 | USD millions |
| C18 | EBITDA (Reported), FY2025 | Operating income 756 plus depreciation and amortization 267 | 1,023 | USD millions |
| C19 | EBITDA (Reported), 9M 2025 | Operating income 557 plus depreciation and amortization 193 | 750 | USD millions |
| C20 | EBITDA (Reported), 9M 2026 | Operating income 383 plus depreciation and amortization 211 | 594 | USD millions |
| C21 | EBITDA (Adjusted), FY2025, from the segment note | Segment adjusted EBITDA 309 plus 515 plus 257 plus All Other 42 less Corporate 56 | 1,067 | USD millions |
| C22 | EBITDA (Adjusted), FY2024, from the segment note | Segment adjusted EBITDA 467 plus 564 plus 319 plus All Other 84 less Corporate 52 | 1,382 | USD millions |
| C23 | LTM revenue to 2026-09-30 | FY2025 4,918 plus 9M 2026 3,400 less 9M 2025 3,629 | 4,689 | USD millions |
| C24 | LTM revenue to 2026-06-30 | FY2025 4,918 plus H1 2026 2,257 less H1 2025 2,397 | 4,778 | USD millions |
| C25 | LTM EBITDA (Reported) to 2026-09-30 | FY2025 1,023 plus 9M 2026 594 less 9M 2025 750 | 867 | USD millions |
| C26 | LTM EBITDA (Reported) to 2026-06-30 | FY2025 1,023 plus H1 2026 371 (operating income 230 plus D&A 141) less H1 2025 505 (operating income 379 plus D&A 126) | 889 | USD millions |
| C27 | LTM EBITDA (Adjusted) to 2026-09-30 | FY2025 1,067 plus 9M 2026 710 less 9M 2025 776; equals the 1,001 the issuer states | 1,001 | USD millions |
| C28 | LTM EBITDA (Adjusted) to 2026-06-30 | FY2025 1,067 plus H1 2026 456 less H1 2025 507; equals the 1,016 the issuer states | 1,016 | USD millions |
| C29 | LTM cash interest paid to 2026-09-30 | FY2025 125 plus 9M 2026 57 less 9M 2025 71 | 111 | USD millions |
| C30 | LTM cash interest paid to 2026-06-30 | FY2025 125 plus H1 2026 55 less H1 2025 70 | 110 | USD millions |
| C31 | Undrawn committed facility, 2025-12-31 | Commitment 1,000 less borrowings 0 less financial letters of credit 7 less performance letters of credit 245 | 748 | US$m |
| C32 | Undrawn committed facility, 2026-06-30 | Commitment 1,000 less borrowings 0 less financial letters of credit 4 less performance letters of credit 243 | 753 | US$m |
| C33 | Undrawn committed facility, 2026-09-30 | Commitment 1,000 less borrowings 0 less financial letters of credit 1 less performance letters of credit 233 | 766 | US$m |
| C34 | Headroom in the revolving and financial letter of credit tranche, 2026-09-30 | Tranche 600 less borrowings 0 less financial letters of credit 1 | 599 | US$m |
| C35 | Headroom in the performance letter of credit tranche, 2026-09-30 | Tranche 400 less performance letters of credit 233 | 167 | US$m |
| C36 | Cash plus total undrawn facility, 2026-09-30 | Cash 1,161 plus undrawn 766 | 1,927 | US$m |
| C37 | Cash plus facility available for borrowing, 2026-09-30 | Cash 1,161 plus revolving tranche headroom 599 | 1,760 | US$m |
| C38 | Cash that can be repatriated at once, 2026-09-30 | Cash 1,161 less cash that cannot be immediately repatriated 164 | 997 | US$m |
| C39 | Scheduled debt maturities at 2025-12-31 | 29 plus 20 plus 9 plus 4 plus 238 plus 1,206 | 1,506 | US$m |
| C40 | Reconciling items, 2025-12-31 | Carrying value 1,485 less contractual principal 1,506 (unamortized issuance costs and discount) | -21 | US$m |
| C41 | Contractual principal at 2026-09-30 | 2030 notes 236 plus 2033 notes 1,200 plus finance leases 63 (30 current plus 33 long-term) | 1,499 | US$m |
| C42 | Carrying value less principal, 2026-09-30 | Carrying value 1,480 less principal 1,499; equals issuance costs 2 on the 2030 notes plus 17 on the 2033 notes | -19 | US$m |
| C43 | Net debt after redemption of the 2030 notes | Debt carrying value removed 234, cash paid 236: change = -234 - (-236) = 2; net debt 319 plus 2 | 321 | US$m |
| C44 | Pro forma net leverage after the redemption | 321 divided by LTM EBITDA (Reported) 867 | 0.37 | x |
| C45 | Dividend declared 2026-10-15 | 72,470,284 shares at 2026-10-15 times USD 0.275 per share = USD 19,929,328, or 19.93 million | 19.93 | US$m |
| C46 | Net debt after the dividend payment | Net debt 319 plus 19.93 | 338.93 | US$m |
| C47 | Pro forma net leverage after the dividend payment | 338.93 divided by LTM EBITDA (Reported) 867 | 0.39 | x |
| C48 | Free cash flow, 9M 2026 | Operating cash flow 503 less capital expenditures 141 | 362 | USD millions |
| C49 | Free cash flow, 9M 2025 | Operating cash flow 408 less capital expenditures 175 | 233 | USD millions |
| C50 | Free cash flow, FY2025 | Operating cash flow 676 less capital expenditures 226 | 450 | USD millions |
| C51 | Free cash flow, FY2024 | Operating cash flow 792 less capital expenditures 299 | 493 | USD millions |
| C52 | Issuer adjusted free cash flow, 9M 2026 (check) | 503 less 141 plus proceeds from disposition of assets 17; the issuer states 379 | 379 | USD millions |
| C53 | Issuer adjusted free cash flow, 9M 2025 (check) | 408 less 175 plus proceeds from disposition of assets 11; the issuer states 244 | 244 | USD millions |
| C54 | Operating cash flow without receivable collections, 9M 2026 | 503 less accounts receivable change 186 | 317 | USD millions |
| C55 | Operating cash flow without receivable collections, 9M 2025 | 408 less accounts receivable change 22 | 386 | USD millions |
| C56 | Factoring proceeds, 9M 2026 against 9M 2025 | 16 in 9M 2026 and 231 in 9M 2025, as stated; change 16 less 231 | -215 | USD millions |
| C57 | Shareholder returns, 9M 2026 | Dividends paid 59 plus share repurchases 54 | 113 | USD millions |
| C58 | Reduction in net debt, FY2024 to 2026-09-30 | 718 less 319 | 399 | US$m |
| C59 | Reduction in total debt, FY2024 to 2026-09-30 | 1,634 less 1,480 | 154 | US$m |
| C60 | Increase in cash, FY2024 to 2026-09-30 | 1,161 less 916 | 245 | US$m |
| C61 | Change in LTM EBITDA (Reported) from FY2024 | 867 divided by 1,281 less 1 | -32.32 | % |
| C62 | Change in LTM EBITDA (Adjusted) from FY2024 | 1,001 divided by 1,382 less 1 | -27.57 | % |
| C63 | Change in LTM revenue from FY2024 | 4,689 divided by 5,513 less 1 | -14.95 | % |
| C64 | Third-quarter adjusted EBITDA against the prior year | 254 divided by 269 less 1 (the issuer states a decrease of 6%) | -5.58 | % |
| C65 | Third-quarter adjusted EBITDA against the second quarter | 254 divided by 223 less 1 (the issuer states an increase of 14%) | 13.90 | % |
| C66 | Fourth-quarter 2025 adjusted EBITDA, calculated | FY2025 1,067 less 9M 2025 776 | 291 | USD millions |
| C67 | Operating lease liabilities, 2026-09-30 | Current 45 plus non-current 103; not in total debt | 148 | USD millions |
| C68 | Pension underfunding, 2025-12-31 | Projected benefit obligation 128 less plan assets 107 | 21 | USD millions |
| C69 | Letters of credit outstanding, 2026-09-30 | Credit agreement 1 plus 233 plus uncommitted bilateral lines 297 | 531 | USD millions |
| C70 | WCC segment adjusted EBITDA change, 9M 2026 against 9M 2025 | 317 less 371 | -54 | USD millions |
| C71 | Gross leverage on reported EBITDA, 2026-09-30 | Total debt 1,480 divided by LTM EBITDA (Reported) 867 | 1.71 | x |
| C72 | Gross leverage on reported EBITDA, FY2024 | Total debt 1,634 divided by EBITDA (Reported) 1,281 | 1.28 | x |
| C73 | Net leverage on reported EBITDA, 2026-09-30 | Net debt 319 divided by LTM EBITDA (Reported) 867 | 0.37 | x |
| C74 | Gross leverage on adjusted EBITDA, 2026-09-30 | Total debt 1,480 divided by LTM EBITDA (Adjusted) 1,001 | 1.48 | x |
| C75 | Net leverage on adjusted EBITDA, 2026-09-30 | Net debt 319 divided by LTM EBITDA (Adjusted) 1,001 | 0.32 | x |
| C76 | Cash interest cover on reported EBITDA, 2026-09-30 | LTM EBITDA (Reported) 867 divided by LTM cash interest 111 | 7.81 | x |
| C77 | Cash interest cover on adjusted EBITDA, 2026-09-30 | LTM EBITDA (Adjusted) 1,001 divided by LTM cash interest 111 | 9.02 | x |
| C78 | Gross leverage on reported EBITDA, FY2025 | Total debt 1,485 divided by EBITDA (Reported) 1,023 | 1.45 | x |
| C79 | Issuer net leverage, 2026-09-30 (check) | Issuer net debt 282 divided by LTM adjusted EBITDA 1,001 | 0.28 | x |
| C80 | Issuer net debt, 2026-09-30 (check) | Total debt 1,480 less cash 1,161 less restricted cash 37 | 282 | US$m |
| C81 | Restricted cash excluded from net debt here | 282 less 319 | -37 | US$m |
| C82 | Production and Intervention segment adjusted EBITDA change, 9M 2026 against 9M 2025 | 197 less 184 | 13 | USD millions |
| C83 | Surety bonds outstanding, 2026-09-30 | Stated as 534 (629 at 2025-12-31); not debt | 534 | USD millions |
| C84 | Cash interest saved by redeeming the 2030 notes, annualized | Stated by the issuer as approximately 20 | 20 | USD millions |
| C85 | Adjusted less reported EBITDA, 9M 2026 | 710 less 594 | 116 | USD millions |
| C86 | Revolver tranche of the Credit Agreement | Stated split of the 1,000 commitment: 600 for revolving loans or financial letters of credit and 400 for performance letters of credit | 600 | US$m |

## Gaps

- The income statement and cash flow lines printed as a dash are shown as not supplied, as the method requires, not as zero; this covers the gain on sale of business, redomestication in nine months 2025, the sale of business, acquisitions, investment sales, borrowings, issuance costs and other financing lines, and the non-cash acquisition items. Severity Low; no action beyond confirming that each dash means nil.

- The quarterly statements fold the loss on extinguishment of debt, the Blue Chip Swap loss, borrowings, issuance costs and investment-sale proceeds into other lines, so those rows are not supplied for the nine-month columns and non-operating items are not like for like between the annual and nine-month columns. Severity Low; no action.

- The company states no unadjusted EBITDA, so EBITDA (Reported) is calculated for every period, and it states no fiscal-year adjusted EBITDA in the sources supplied because no fourth-quarter 2025 release was provided; the FY2024 and FY2025 adjusted figures come from the segment note and the fourth-quarter 2025 figure is the full year less nine months. Severity Low; obtaining the fourth-quarter 2025 release would close it.

- The undrawn committed facility at December 31, 2024 is not supplied, because the commitment in force on that date is not stated. Severity Low; the credit agreement of that date would close it.

- The split of the credit agreement between USD 600 million for borrowing or financial letters of credit and USD 400 million for performance letters of credit is stated only in the annual report; the 2026 reports state the USD 1,000 million total. Severity Medium for liquidity; the credit agreement would confirm the split.

- No source states the security or legal rank of the 2030 notes, the 2033 notes or the finance leases, so they are left out of the debt stack and senior secured debt cannot be separated from the total. Severity Medium; the indentures would close it.

- The maturity table is drawn at December 31, 2025 because no later schedule is printed, and the amount due in 2030 includes the 2030 notes that are to be redeemed. Completion of the redemption on October 30, 2026, and the accrued interest paid with it, are neither confirmed nor stated. Severity Medium; the next filing would close it.

- The remaining principal of the 2030 notes at December 31, 2024 is given only to the nearest hundred million, so total principal at that date is not stated exactly. Severity Low; no action.

- Covenant levels are stated, but the definitions, the company's calculated ratios and any headroom are not, so covenant capacity is not calculated here. Severity Medium; the credit agreement and a compliance certificate would close it.

- The company reclassified some 2025 interim amounts to the 2026 presentation without stating them, so last-twelve-months figures that combine an annual 2025 figure with a reclassified nine-month 2025 figure carry a small basis risk. Severity Low; no action.

- Pension figures are at December 31, 2025 only and the legal contingencies note gives no amounts, so both are carried without a 2026 update. Severity Low; the next annual report would update them.

- The dividend amount uses the shares outstanding on October 15, 2026; the share count at the record date is not stated. Severity Low; no action.

- Cash interest paid is lumpy because coupons are semiannual, so last-twelve-months cash interest cover can move with payment timing. Severity Low; no action.

## Next module

The orchestrator selects the next module.
