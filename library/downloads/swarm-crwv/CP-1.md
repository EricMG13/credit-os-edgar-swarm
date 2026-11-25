---
module_id: CP-1
issuer_id: crwv
issuer_name: CoreWeave, Inc.
analysis_date: 2026-11-05
run_id: crwv-2026-11-05-credit_snapshot-host
---

# Financial foundation: CoreWeave, Inc.

## Request

CoreWeave, Inc., as of 2026-11-05, credit snapshot pathway. This module extracts and normalises the consolidated financial statements, debt, liquidity and credit ratios of CoreWeave, Inc. from the supplied annual report, three quarterly reports and three earnings releases, with the latest balance sheet at June 30, 2026.

## Sources

| Source | Document | Document date | sha256 | Use |
|---|---|---|---|---|
| 10-K_2025-12-31_crwv-20251231.htm.jsonl | Annual report on Form 10-K for the year ended December 31, 2025 | 2026-03-02 | 0d0cf44f53b9a917ce74530e1073134d5052786896b56bf540c0ff56c3d09cf5 | Audited FY2024 and FY2025 statements, debt note, interest, liquidity and customer concentration |
| 10-Q_2025-09-30_crwv-20250930.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended September 30, 2025, printed in thousands | 2025-11-13 | 4ab2a43787603e448a27ee75655cd8189c101995b2b2a09f948fefcf24dc65dc | Terms of the delayed draw term loans 1.0 to 3.0 (spreads, security, amortisation) |
| 10-Q_2026-03-31_crwv-20260331.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended March 31, 2026 | 2026-05-07 | 02ad347fc934b455da7d76c35b5ed5e2481a8b415629a65ddd1d28789dd893ea | Read for subsequent-event and period checks; no figure in the statement tables |
| 10-Q_2026-06-30_crwv-20260630.htm.jsonl | Quarterly report on Form 10-Q for the quarter ended June 30, 2026 | 2026-08-11 | 8c1fe67059916099b1322f23cd4d1d50ec7098f810b5bf54d990d03a024fa1d1 | First-half 2026 and 2025 statements, June 30, 2026 balance sheet, debt note, liquidity, leases, subsequent events |
| EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl | Earnings press release (Exhibit 99.1) for the fourth quarter and fiscal year 2025 | 2026-02-26 | d1cb2e7f415a836bfc361c60f3592d7d5ff529dbcae4e476b1fc937be4fb40b5 | FY2025 and FY2024 adjusted EBITDA and its reconciliation; December 2025 balance sheet check |
| EX-99.1_2026-05-07_coreweave1q26earningspress.htm.jsonl | Earnings press release (Exhibit 99.1) for the first quarter of 2026 | 2026-05-07 | e0f8ee20aa75c8abb15cd88aa7bc89813b32cc2ad3558378d8026da7d76cfee8 | Read for first-quarter adjusted EBITDA; no figure in the statement tables |
| EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl | Earnings press release (Exhibit 99.1) for the second quarter of 2026 | 2026-08-11 | af17b6e32fc6d5e125e64130df944ece5d560c39bdc4236cbad0414accede85b | First-half 2026 and 2025 adjusted EBITDA reconciliation and backlog |
| Source readiness (CP-0) | Source readiness module output accepted for this run | 2026-11-05 | b3761001a1f9e817f3d4312c7e1e0f4568c7b31827b3890ee0ab7c8f3ac97679 | Source gate, limitations and the conflicts it logged |

## Findings

### Bottom line

Leverage is high and rising because capital spending is funded mainly by new borrowing: net debt reached USD 29,544 million at June 30, 2026, or 7.86x reported last-twelve-month EBITDA, while free cash flow stayed negative.
Basis: calculation C7; calculation C13; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 5

Reported EBITDA covers cash interest paid only 2.86x, and USD 10,597 million of principal falls due by the end of 2027 against USD 5,524 million of cash, so continued access to debt markets matters as much as operating results. Issuer-adjusted EBITDA, which appears only in the earnings releases, lowers net leverage to 6.71x.
Basis: calculation C13; calculation C10; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 27; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, page 7

### Credit analysis

#### Leverage trajectory and drivers

Debt carried on the balance sheet rose from USD 7,926 million at December 31, 2024 to USD 21,373 million a year later and USD 35,068 million at June 30, 2026, an increase of USD 13,695 million in six months, because delayed draw loans, senior notes, convertible notes and equipment financing paid for data centre equipment faster than EBITDA grew. Total debt to reported EBITDA moved from 6.68x to 8.88x to 9.33x, and on the issuer's adjusted measure from 6.50x to 6.91x to 7.97x, so leverage has risen on either definition.
Basis: calculation C6; calculation C9; calculation C13; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–27

#### Coverage trends

Reported EBITDA covered cash interest paid 6.45x in FY2024, 2.77x in FY2025 and 2.86x over the last twelve months. Cash interest paid is net of capitalised amounts of USD 322 million over the last twelve months, so it understates total interest cost; against contractual interest expense of USD 1,812 million the cover is 2.08x.
Basis: calculation C4; calculation C12; calculation C13; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 9; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 27

#### Cash-flow quality

Operating cash flow of USD 3,663 million in the first half of 2026 includes USD 1,483 million of working-capital inflow, led by deferred revenue of USD 1,365 million, so before working capital it was USD 2,180 million. Capital spending of USD 14,117 million exceeded operating cash flow by USD 10,454 million in the half and by USD 13,655 million over the last twelve months, and the gap was met by debt and equity issuance.
Basis: calculation C11; calculation C17; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9

#### Non-debt funding float

Deferred revenue, which is customer prepayment for capacity not yet delivered, rose to USD 9,692 million at June 30, 2026 from USD 8,185 million at December 31, 2025 and USD 4,064 million a year earlier. Accrued purchases of USD 5,520 million and accounts payable of USD 3,633 million add supplier credit of USD 9,153 million that sits outside reported debt, and the filings do not split it between equipment and other purchases, so the build is partly funded by customers and vendors whose claims fall due as capacity is delivered and paid for.
Basis: calculation C14; calculation C18; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 22

#### Liquidity adequacy

Liquidity at June 30, 2026 was USD 15,553 million, made up of USD 5,524 million of cash, USD 15 million of marketable securities and USD 10,014 million of availability under existing facilities that can be drawn only against eligible assets and project conditions. Restricted cash of USD 1,380 million is excluded; the issuer describes it as primarily bank deposits related to a collateralised loan facility. Net debt after the August 2026 draws, USD 1,200 million on the revolving facility and USD 1,200 million on a new delayed draw facility, is not established because the use of proceeds is not stated.
Basis: calculation C16; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 46; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 53–54; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 57

#### Refinancing and maturity profile

Scheduled principal is USD 4,413 million for the rest of 2026, USD 6,184 million in 2027 and USD 4,416 million in 2028, USD 10,597 million through 2027, with USD 14,896 million after 2030. The ladder includes scheduled amortisation of delayed draw loans, which the issuer says are repaid from contracted cash flows, and equipment financing, so part of it is a cash drain before it is a refinancing need, but the total through 2027 still exceeds cash on hand.
Basis: calculation C10; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 27; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 29–32; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 56

#### Debt structure

Secured delayed draw loans total USD 13,643 million of principal, unsecured senior and convertible notes USD 16,617 million, and equipment and software financing USD 5,102 million. Recourse debt is USD 31,405 million of carrying value and non-recourse debt USD 3,663 million, so most borrowing is recourse to the parent, through direct obligation or guarantees.
Basis: calculation C15; calculation C20; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–27

#### Data quality and definitions

None of the four filings states EBITDA, so reported EBITDA here is operating income plus depreciation and amortisation. The issuer's adjusted EBITDA of USD 4,400 million exceeds it by USD 640 million over the last twelve months, of which stock-based compensation is USD 619 million and acquisition-related costs USD 21 million, so the adjusted measure is mostly a share-based pay add-back rather than a cash adjustment.
Basis: calculation C2; calculation C3; calculation C19; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, page 7; EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl, page 7

#### Subsequent events

In August 2026 a subsidiary closed a delayed draw term loan facility of USD 2,600 million with USD 1,200 million drawn after closing, and the parent drew USD 1,200 million on its revolving credit facility. Both fall after the June 30, 2026 balance sheet and are kept out of every period figure and ratio.
Basis: 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 46

#### Contrary evidence and what would change the view

Most delayed draw borrowing is secured on specific customer contracts, described as generally with investment-grade counterparties, and contracted backlog of about USD 104 billion exceeds debt, so ratios built on trailing EBITDA may overstate risk from capacity that is financed but not yet earning. The view would soften if third-quarter 2026 results showed adjusted EBITDA growing faster than debt, capital spending falling toward operating cash flow, and cash interest cover rising above the current level; it would harden if customer prepayments or availability under the delayed draw facilities stopped growing.
Basis: 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 56; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, page 1

#### Limitations

- Nothing after the second-quarter 2026 report is supplied, so every ratio is dated June 30, 2026 and any third-quarter borrowing or earnings is outside the leverage and liquidity conclusions.
- Reported EBITDA is calculated from operating income and depreciation, not stated by the issuer, so leverage on that basis differs from the issuer-adjusted figures by the share-based pay add-back.
- Debt terms rest on the issuer's note descriptions without the executed documents, so the secured and unsecured split and the guarantor scope are as stated by the issuer, not verified.

### T4.1 Source register

| Source File Name | Document Type | Period Coverage | Currency | Unit | Perimeter | Accounting Basis | Evidence Quality Tier | Analytical Use | Limitations |
|---|---|---|---|---|---|---|---|---|---|
| 10-K_2025-12-31_crwv-20251231.htm.jsonl | Annual report | FY2025, FY2024, FY2023 | USD | millions | Consolidated | US GAAP | Tier 1 audited statements | FY2024 and FY2025 statements, debt note, interest | No EBITDA measure; Part III by reference |
| 10-Q_2025-09-30_crwv-20250930.htm.jsonl | Quarterly report | Three and nine months to 2025-09-30 | USD | thousands | Consolidated | US GAAP | Tier 2b unaudited without stated auditor review | Facility terms only | Printed in thousands; superseded by later reports for balances |
| 10-Q_2026-03-31_crwv-20260331.htm.jsonl | Quarterly report | Three months to 2026-03-31 | USD | millions | Consolidated | US GAAP | Tier 2b unaudited without stated auditor review | Cross-check of period construction | Debt on single lines |
| 10-Q_2026-06-30_crwv-20260630.htm.jsonl | Quarterly report | Three and six months to 2026-06-30 | USD | millions | Consolidated | US GAAP | Tier 2b unaudited without stated auditor review | H1 statements, June 2026 balance sheet, debt note | No balance sheet at 2025-06-30 |
| EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl | Earnings release | Fourth quarter and FY2025, FY2024 | USD | millions | Consolidated | US GAAP and issuer non-GAAP | Tier 2b unaudited | Adjusted EBITDA FY2024 and FY2025 | Issuer-defined measure |
| EX-99.1_2026-05-07_coreweave1q26earningspress.htm.jsonl | Earnings release | Three months to 2026-03-31 | USD | millions | Consolidated | US GAAP and issuer non-GAAP | Tier 2b unaudited | Cross-check only | Issuer-defined measure |
| EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl | Earnings release | Three and six months to 2026-06-30 | USD | millions | Consolidated | US GAAP and issuer non-GAAP | Tier 2b unaudited | Adjusted EBITDA H1 2026 and H1 2025 | Issuer-defined measure |

The supplied sources cover income statement, cash flow statement and balance sheet for the periods used, so the statement tables are not blocked; no lender, sponsor or rating agency material is supplied.

### T4.2 Entity period key

| Entity Name | Entity Role | Fiscal Year End | Reporting Currency | Reporting Unit | Consolidation Perimeter | Accounting Basis | Available Periods |
|---|---|---|---|---|---|---|---|
| CoreWeave, Inc. | Issuer and ultimate parent; guarantor of delayed draw facilities 1.0 to 3.0 and 5.0 | December 31 | USD | millions (thousands in the September 2025 report) | Wholly and majority-owned subsidiaries, including non-recourse and bankruptcy-remote financing subsidiaries | US GAAP | FY2023, FY2024, FY2025; nine months 2025; Q1 2026; Q2 and H1 2026 with H1 2025 |
| CoreWeave Compute Acquisition Co. VIII, LLC | Borrower of the DDTL 4.0 facility (non-recourse) | December 31 | USD | millions | Consolidated subsidiary | US GAAP | Assets securing DDTL 4.0 stated at 2026-06-30 only |
| CoreWeave Financing DDTL V, LLC | Borrower of the DDTL 5.0 facility | December 31 | USD | millions | Consolidated subsidiary | US GAAP | 2026-06-30 |
| Restricted group | Not supplied: no credit agreement or indenture defining it is in the source set | Not supplied: not defined | Not supplied: not defined | Not supplied: not defined | Not supplied: not defined | Not supplied: not defined | Not supplied: not defined |

Subsequent events are flagged by date: in August 2026 the delayed draw facility DDTL 5.5 was signed and the revolving facility was drawn; the source states the month only.

### T4.3 Normalization register

| Adjustment Description | Source File | Adjustment Type | Before Value | After Value | Rationale | Affected Periods |
|---|---|---|---|---|---|---|
| EBITDA (Reported) derived as operating income plus depreciation and amortisation (N1) | 10-Q_2026-06-30_crwv-20260630.htm.jsonl; 10-K_2025-12-31_crwv-20251231.htm.jsonl | Calculated measure | Not supplied: no EBITDA in the filings | FY2024 1,187; FY2025 2,408; H1 2025 995; H1 2026 2,347 | The issuer states no unadjusted EBITDA; operating income excludes the fair value, interest and tax lines so the measure matches the issuer's own adjusted starting point before add-backs | FY2024, FY2025, H1 2025, H1 2026 |
| Debt, current and non-current, at June 30, 2026 summed across recourse and non-recourse lines (N2) | 10-Q_2026-06-30_crwv-20260630.htm.jsonl | Presentation | Recourse 6,235 and 25,170; non-recourse 1,278 and 2,385 | Current 7,513; non-current 27,555 | The balance sheet label of earlier periods is a single debt line; totals tie under both presentations | H1 2026 |
| December 31, 2025 debt taken from the annual report single lines (N3) | 10-K_2025-12-31_crwv-20251231.htm.jsonl | Presentation | Recourse 20,726; non-recourse 647 (as reclassified in the June 2026 report) | Current 6,708; non-current 14,665; total 21,373 | Both presentations give 21,373; the annual report label is used for the year-end column | FY2025 |
| Last twelve months to June 30, 2026 built as FY2025 plus H1 2026 less H1 2025 (N4) | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl; EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl | Derived period | Not supplied: no reported twelve-month figure | See the constructed period register | Reported periods stay as printed; the derived period is labelled | LTM June 2026 |
| Lines printed as a dash or not printed carried as missing, not zero (N5) | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | Missing value | Dash or absent line | Not supplied | The method treats a dash as a missing value with a gap line | All statement tables |

### T4.4 Income statement

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Revenue | 1,915 | 5,131 | 2,194 | 4,653 | USD millions | Reported; Tier 1 for FY, Tier 2b for H1 | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Cost of revenue | 493 | 1,453 | 575 | 1,595 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Technology and infrastructure | 961 | 2,929 | 1,231 | 2,780 | USD millions | Reported; includes depreciation of the equipment fleet | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Sales and marketing | 18 | 144 | 47 | 129 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| General and administrative | 119 | 651 | 349 | 342 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Total operating expenses | 1,591 | 5,177 | 2,202 | 4,846 | USD millions | Reported subtotal | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Operating income (loss) | 324 | -46 | -8 | -193 | USD millions | Reported subtotal | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Gain (loss) on fair value adjustments | -756 | 27 | 27 | Not supplied: the filing prints a dash | USD millions | Reported; H1 2026 printed as a dash | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Interest expense, net | -361 | -1,229 | -531 | -1,176 | USD millions | Reported; net of interest income, after capitalised interest | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Other income (expense), net | 49 | 33 | 1 | 149 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Loss before income taxes | -744 | -1,215 | -511 | -1,220 | USD millions | Reported subtotal | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Provision for (benefit from) income taxes | 119 | -48 | 94 | 146 | USD millions | Reported; a benefit is negative | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Net loss | -863 | -1,167 | -605 | -1,366 | USD millions | Reported; equals net loss and comprehensive loss in FY2024 and FY2025 | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| Depreciation and amortization | 863 | 2,454 | 1,003 | 2,540 | USD millions | Reported in the cash flow statement | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Stock-based compensation expense | 31 | 630 | 329 | 318 | USD millions | Reported in the cash flow statement; net of capitalised amounts | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| EBITDA (Reported) | 1,187 | 2,408 | 995 | 2,347 | USD millions | Calculated: operating income plus depreciation and amortization; normalization N1; the issuer states no unadjusted EBITDA | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 140; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 8 |
| EBITDA (Adjusted) | 1,219 | 3,093 | 1,360 | 2,667 | USD millions | Issuer-stated adjusted EBITDA; adds back stock-based compensation and acquisition related costs to operating income plus depreciation and amortization; not in any filing | EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl, pages 1–7; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, pages 1–7 |

### T4.5 Cash flow statement

| Line item | FY2024 | FY2025 | H1 2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|---|
| Net loss | -863 | -1,167 | -605 | -1,366 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Depreciation and amortization | 863 | 2,454 | 1,003 | 2,540 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Amortization of debt discounts and issuance costs and accretion of redemption premiums | 33 | 110 | 67 | 86 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Stock-based compensation expense | 31 | 630 | 329 | 318 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Non-cash lease expense | 123 | 357 | 144 | 365 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Deferred income taxes | 113 | -53 | 91 | 140 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Loss (gain) on fair value adjustments | 756 | -27 | -27 | Not supplied: the filing prints a dash | USD millions | Reported; H1 2026 printed as a dash | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Debt extinguishment loss | 12 | 19 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported in the annual report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Other non-cash reconciling items | 3 | 103 | 39 | 97 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Accounts receivable | -280 | -2,749 | -1,505 | 607 | USD millions | Reported change; an inflow is positive | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Prepaid expenses and other assets | -514 | -784 | -70 | -611 | USD millions | Reported change | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Accounts payable and accrued expenses | 511 | 253 | -289 | 304 | USD millions | Reported change | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Deferred revenue | 2,049 | 4,174 | 743 | 1,365 | USD millions | Reported change | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Lease liabilities | -88 | -262 | -110 | -182 | USD millions | Reported change | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Net Cash from Operating Activities | 2,749 | 3,058 | -190 | 3,663 | USD millions | Reported total; lines above sum to it in every column | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Purchase of property and equipment, including capitalized internal-use software | -8,702 | -10,309 | -3,860 | -14,117 | USD millions | Reported; cash paid only, excludes equipment bought on credit | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Purchases of marketable securities | -34 | -47 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported in the annual report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Maturities and sales of marketable securities | 188 | 43 | 29 | 18 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Investments related to joint ventures | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | -32 | -550 | USD millions | Reported in the quarterly report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Purchase of strategic investments | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: the filing prints a dash | -138 | USD millions | Reported in the quarterly report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Sales of warrants received as lease incentive | Not supplied: the filing prints a dash | 254 | 101 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Issuance of notes receivable | -60 | -90 | -73 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Business combinations, net of cash acquired | Not supplied: the filing prints a dash | -108 | -46 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Other investing activities | -50 | -14 | 6 | -87 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Net Cash from Investing Activities | -8,658 | -10,271 | -3,875 | -14,874 | USD millions | Reported total; lines above sum to it in every column | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Proceeds from issuance of debt, net | 7,018 | 11,829 | 4,396 | 16,747 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Repayments of debt | -589 | -3,399 | -1,575 | -5,219 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Purchase of capped calls related to convertible senior notes | Not supplied: the filing prints a dash | -340 | Not supplied: the filing prints a dash | -492 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Issuance of common stock in private placements, net of issuance costs | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | Not supplied: the filing prints a dash | 2,982 | USD millions | Reported in the quarterly report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Proceeds from initial public offering, net of underwriting discounts and commissions | Not supplied: the filing prints a dash | 1,491 | 1,491 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Redeemable convertible preferred stock cash dividends paid | -58 | -29 | -29 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Issuance of redeemable convertible preferred stock, net of issuance costs | 1,172 | Not supplied: the filing prints a dash | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported in the annual report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Payment of tax withholdings on settlement of restricted stock units | Not supplied: the filing prints a dash | -144 | -133 | Not supplied: the filing prints a dash | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Proceeds from exercise of stock options | 3 | 20 | Not supplied: line not printed in this statement | Not supplied: line not printed in this statement | USD millions | Reported in the annual report only | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Other financing activities | -82 | -120 | -66 | -33 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Net Cash from Financing Activities | 7,464 | 9,308 | 4,084 | 13,985 | USD millions | Reported total; lines above sum to it in every column | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Net Cash Change | 1,555 | 2,095 | 19 | 2,774 | USD millions | Reported net increase in cash, cash equivalents and restricted cash; no foreign exchange line is printed | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Opening Cash | 480 | 2,035 | 2,035 | 4,130 | USD millions | Reported; includes restricted cash and equivalents | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Closing Cash | 2,035 | 4,130 | 2,054 | 6,904 | USD millions | Reported; includes restricted cash and equivalents, so it is not the balance sheet Cash & Equivalents | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |
| Cash Interest Paid | 184 | 869 | 362 | 806 | USD millions | Reported supplemental disclosure: cash paid for interest, net of capitalized amounts | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 140–141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 8–9 |

### T4.6 Balance sheet

| Line item | FY2024 | FY2025 | H1 2026 | Unit | Basis | Source |
|---|---|---|---|---|---|---|
| Cash and cash equivalents | 1,361 | 3,127 | 5,524 | USD millions | Reported; unrestricted | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Restricted cash and cash equivalents, current | 37 | 819 | 873 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Marketable securities | Not supplied: the filing prints a dash | 34 | 15 | USD millions | Reported; December 2024 printed as a dash | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Accounts receivable, net | 417 | 3,169 | 2,541 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Prepaid expenses and other current assets | 101 | 339 | 567 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total current assets | 1,916 | 7,488 | 9,520 | USD millions | Reported subtotal | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Restricted cash and cash equivalents, non-current | 637 | 184 | 507 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Restricted marketable securities, non-current | 29 | Not supplied: the filing prints a dash | Not supplied: line not printed in the June 2026 balance sheet | USD millions | Reported in the annual report only; December 2025 printed as a dash | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Property and equipment, net | 11,915 | 30,557 | 46,736 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Operating lease right-of-use assets | 2,590 | 8,231 | 16,595 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Intangible assets, net | 5 | 235 | 245 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Goodwill | 20 | 1,101 | 1,101 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Other non-current assets | 721 | 1,506 | 2,366 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total Assets | 17,833 | 49,302 | 77,070 | USD millions | Reported total | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Accounts payable | 868 | 1,623 | 3,633 | USD millions | Reported; operating and equipment supplier credit, not added to debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Accrued liabilities | 356 | 5,773 | 6,424 | USD millions | Reported; accrued purchases are 5,196 at December 31, 2025 and 5,520 at June 30, 2026 | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Debt, current | 2,468 | 6,708 | 7,513 | USD millions | Reported for FY2024 and FY2025; H1 2026 is recourse 6,235 plus non-recourse 1,278 (normalization N2) | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Deferred revenue, current | 769 | 1,709 | 2,686 | USD millions | Reported; customer prepayments | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Operating lease liabilities, current | 213 | 427 | 584 | USD millions | Reported; not added to debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Finance lease liabilities, current | 58 | 38 | 7 | USD millions | Reported; not added to debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Other current liabilities | 231 | 162 | 70 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total current liabilities | 4,963 | 16,440 | 20,917 | USD millions | Reported subtotal | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Debt, non-current | 5,458 | 14,665 | 27,555 | USD millions | Reported for FY2024 and FY2025; H1 2026 is recourse 25,170 plus non-recourse 2,385 (normalization N2) | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Derivative and warrant liabilities | 200 | 1 | Not supplied: line not printed in the June 2026 balance sheet | USD millions | Reported in the annual report; the June 2026 report includes it in other non-current liabilities | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Deferred revenue, non-current | 3,295 | 6,476 | 7,006 | USD millions | Reported; customer prepayments | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Operating lease liabilities, non-current | 2,389 | 7,768 | 15,735 | USD millions | Reported; not added to debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Finance lease liabilities, non-current | 34 | 216 | 214 | USD millions | Reported; not added to debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Deferred tax liabilities, non-current | 149 | 115 | 256 | USD millions | Reported | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Other non-current liabilities | 37 | 286 | 363 | USD millions | Reported; December 2025 is 286 here and 287 in the June 2026 report, which includes derivative and warrant liabilities | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total Liabilities | 16,525 | 45,967 | 72,046 | USD millions | Reported total | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Temporary Equity | 1,722 | 0 | Not supplied: line not printed in the June 2026 balance sheet | USD millions | Redeemable convertible preferred stock; December 2025 balance sheet states no shares issued | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total Equity | -414 | 3,335 | 5,024 | USD millions | Reported; stockholders' equity (deficit) | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Total Debt | 7,926 | 21,373 | 35,068 | USD millions | Calculated: Debt, current plus Debt, non-current at carrying value, net of issuance costs and discounts; excludes finance and operating lease liabilities shown on their own lines | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 137; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 5 |
| Cash & Equivalents | 1,361 | 3,127 | 5,524 | USD millions | Reported: cash and cash equivalents excluding restricted cash and marketable securities | 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 137–138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 5–6 |
| Senior Secured Debt | Not supplied: carrying value by security is not disclosed | Not supplied: carrying value by security is not disclosed | Not supplied: carrying value by security is not disclosed | USD millions | Not disclosed by carrying value | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–27 |

### T4.18 Debt instruments

| Instrument | Type | Carrying Value | Principal | Drawn | Commitment | Security | Ranking | Currency | Reporting Currency Amount | FX Rate | Coupon or Margin | Rate Type | Reference Rate | Spread (bps) | Floor (bps) | Maturity | Annual Amortisation | Source |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DDTL 1.0 Facility | Delayed draw term loan, recourse | Not supplied: carrying value by instrument is not disclosed | 1,300 | 1,300 | 2,300 | First-priority pledge of the subsidiary equity and assets; guaranteed by CoreWeave, Inc. | Not supplied: ranking clause not stated | USD | 1,300 | Not applicable | Term SOFR plus 9.62% | Floating | Term SOFR | 962 | Not supplied: floor not stated | March 2028 | Quarterly instalments; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31; 10-Q_2025-09-30_crwv-20250930.htm.jsonl, pages 64–66; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| DDTL 2.0 Facility | Delayed draw term loan, recourse | Not supplied: carrying value by instrument is not disclosed | 3,190 | 3,190 | 7,600 | First-priority pledge of the subsidiary equity and assets; guaranteed by CoreWeave, Inc. | Not supplied: ranking clause not stated | USD | 3,190 | Not applicable | Term SOFR plus 6.00%, 6.50% or 13.00% by customer credit quality | Floating | Term SOFR | 600 to 1300 | Not supplied: floor not stated | August 2030 | Quarterly from January 2026; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31; 10-Q_2025-09-30_crwv-20250930.htm.jsonl, pages 64–66; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| DDTL 2.1 Facility | Delayed draw term loan, recourse | Not supplied: carrying value by instrument is not disclosed | 3,000 | 3,000 | 3,000 | First-priority pledge of the subsidiary equity and assets; guaranteed by CoreWeave, Inc. | Not supplied: ranking clause not stated | USD | 3,000 | Not applicable | Term SOFR plus 4.25% | Floating | Term SOFR | 425 | Not supplied: floor not stated | March 2031 | Quarterly from July 2026; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31; 10-Q_2025-09-30_crwv-20250930.htm.jsonl, pages 64–66; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| DDTL 3.0 Facility | Delayed draw term loan, recourse | Not supplied: carrying value by instrument is not disclosed | 2,215 | 2,215 | 2,600 | First-priority pledge of the subsidiary equity and assets; guaranteed by CoreWeave, Inc. | Not supplied: ranking clause not stated | USD | 2,215 | Not applicable | Daily compounded SOFR plus 4.00% | Floating | Daily compounded SOFR | 400 | Not supplied: floor not stated | August 2030 | Monthly from April 2026; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31; 10-Q_2025-09-30_crwv-20250930.htm.jsonl, pages 64–66; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| DDTL 5.0 Facility | Delayed draw term loan, recourse | Not supplied: carrying value by instrument is not disclosed | 1,101 | 1,101 | 3,100 | First-priority pledge of the subsidiary equity and assets; guaranteed by CoreWeave, Inc. | Not supplied: ranking clause not stated | USD | 1,101 | Not applicable | SOFR plus 4.50% | Floating | SOFR | 450 | Not supplied: floor not stated | November 2031 in the debt table; expected final payment May 2031 in the text | Monthly from November 2026; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31 |
| DDTL 4.0 Facility | Delayed draw term loan, non-recourse | Not supplied: carrying value by instrument is not disclosed | 2,837 | 2,837 | 8,500 | First-priority pledge of the borrower equity and substantially all of its assets; limited carve-out guarantees only | Not supplied: ranking clause not stated | USD | 2,837 | Not applicable | Floating at daily compounded SOFR plus 2.25%; fixed at 2.00% plus a blended Treasury rate | Floating and fixed | Daily compounded SOFR | 225 | Not supplied: floor not stated | March 2032 | Monthly from the earliest of the commitment end or site amortisation dates; amount not supplied | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31 |
| Revolving Credit Facility | Senior secured revolving credit facility | Not supplied: carrying value by instrument is not disclosed | 0 | 0 | 2,500 | Pledges of certain assets as collateral | Not supplied: ranking clause not stated | USD | 0 | Not applicable | Not supplied: margin not stated in the sources read | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | November 2029 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–31 |
| 2030 Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 2,000 | 2,000 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 2,000 | Not applicable | 9.25% | Fixed | Not applicable | Not applicable | Not applicable | June 2030 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| 2031 9.00% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 1,750 | 1,750 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 1,750 | Not applicable | 9.00% | Fixed | Not applicable | Not applicable | Not applicable | February 2031 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| 2031 9.75% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 2,750 | 2,750 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 2,750 | Not applicable | 9.75% | Fixed | Not applicable | Not applicable | Not applicable | October 2031 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34 |
| 2032 9.625% Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 1,250 | 1,250 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 1,250 | Not applicable | 9.625% | Fixed | Not applicable | Not applicable | Not applicable | July 2032 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34 |
| 2032 EUR Senior Notes | Senior notes | Not supplied: carrying value by instrument is not disclosed | 2,279 | 2,279 | Not applicable | Unsecured | Not supplied: ranking clause not stated | EUR | 2,279 | Not applicable: USD amount as stated by the issuer (principal EUR 2,000 million) | 8.50% | Fixed | Not applicable | Not applicable | Not applicable | July 2032 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34 |
| 2031 Convertible Senior Notes | Convertible senior notes | Not supplied: carrying value by instrument is not disclosed | 2,588 | 2,588 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 2,588 | Not applicable | 1.75% | Fixed | Not applicable | Not applicable | Not applicable | December 2031 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–33; 10-K_2025-12-31_crwv-20251231.htm.jsonl, pages 175–178 |
| 2032 Convertible Senior Notes | Convertible senior notes | Not supplied: carrying value by instrument is not disclosed | 4,000 | 4,000 | Not applicable | Unsecured | Not supplied: ranking clause not stated | USD | 4,000 | Not applicable | 1.75% | Fixed | Not applicable | Not applicable | Not applicable | October 2032 | 0 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–33 |
| OEM and Software License Financing Arrangements, recourse | Equipment and software vendor financing | Not supplied: carrying value by instrument is not disclosed | 4,220 | 4,220 | Not supplied: not stated | Not supplied: security not stated | Not supplied: not stated | USD | 4,220 | Not applicable | Effective rate 11%; stated rates not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | December 2026 to July 2030 | Not supplied: not stated | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–32 |
| OEM and Software License Financing Arrangements, non-recourse | Equipment and software vendor financing | Not supplied: carrying value by instrument is not disclosed | 882 | 882 | Not supplied: not stated | Not supplied: security not stated | Not supplied: not stated | USD | 882 | Not applicable | Effective rate 9%; stated rates not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | August 2026 to August 2028 | Not supplied: not stated | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 27–32 |
| Magnetar Loan | Refundable deposit with redemption premium | Not supplied: carrying value by instrument is not disclosed | 189 | 189 | Not supplied: not stated | Not supplied: security not stated | Not supplied: not stated | USD | 189 | Not applicable | Effective rate 12%; stated rate not supplied | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | January 2029 | Not supplied: not stated | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–34 |
| Financing cost adjustment | Unamortized discount and issuance costs, recourse 427 and non-recourse 56 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | USD | -483 | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | Not applicable | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–27 |

The Reporting Currency Amount cells plus the financing cost adjustment add to 35,068, the Total Debt of the balance sheet (calculation C8); no row is treated as secured or senior beyond the security the filings state.

### T4.8 Constructed period register

| Metric Name | Derived Period Type | Full-Year Component | Current Stub | Prior-Year Stub | Derived Value | Calculation Status | Source Files | Limitations |
|---|---|---|---|---|---|---|---|---|
| Revenue | LTM to 2026-06-30 | USD 5,131m | USD 4,653m | USD 2,194m | USD 7,590m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| EBITDA (Reported) | LTM to 2026-06-30 | USD 2,408m | USD 2,347m | USD 995m | USD 3,760m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| EBITDA (Adjusted) | LTM to 2026-06-30 | USD 3,093m | USD 2,667m | USD 1,360m | USD 4,400m | Calculated | EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Cash interest paid | LTM to 2026-06-30 | USD 869m | USD 806m | USD 362m | USD 1,313m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Contractual interest expense | LTM to 2026-06-30 | USD 1,220m | USD 1,075m | USD 483m | USD 1,812m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Capitalised interest | LTM to 2026-06-30 | USD 182m | USD 176m | USD 36m | USD 322m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Net cash from operating activities | LTM to 2026-06-30 | USD 3,058m | USD 3,663m | USD -190m | USD 6,911m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Purchase of property and equipment | LTM to 2026-06-30 | USD 10,309m | USD 14,117m | USD 3,860m | USD 20,566m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Stock-based compensation expense | LTM to 2026-06-30 | USD 630m | USD 318m | USD 329m | USD 619m | Calculated | 10-K_2025-12-31_crwv-20251231.htm.jsonl; 10-Q_2026-06-30_crwv-20260630.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |
| Acquisition related costs | LTM to 2026-06-30 | USD 55m | USD 2m | USD 36m | USD 21m | Calculated | EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl | All three components are reported; the stubs are the same six months of consecutive years |

### T4.9 Calculation register

| Metric Name | Formula | Numerator Value | Numerator Source | Denominator Value | Denominator Source | Period | Currency | Unit | Calculated Value | Calculation Status | Evidence Quality Tier | Limitations |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 7,926 | Net debt data, Gross debt | 1,187 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 6.68 | Calculated | Tier 1 audited | Carrying value over calculated reported EBITDA |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 21,373 | Net debt data, Gross debt | 2,408 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 8.88 | Calculated | Tier 1 audited | Carrying value over calculated reported EBITDA |
| Total debt / EBITDA | Gross debt / EBITDA (Reported) | 35,068 | Net debt data, Gross debt | 3,760 | T4.8 EBITDA (Reported) LTM | 2026-06-30 | USD | US$m | 9.33 | Calculated | Tier 2b unaudited | Carrying value over calculated reported EBITDA; LTM denominator |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 6,565 | Net debt data, Net debt | 1,187 | T4.4 EBITDA (Reported) | FY2024 / 2024-12-31 | USD | US$m | 5.53 | Calculated | Tier 1 audited | Cash excludes restricted cash |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 18,246 | Net debt data, Net debt | 2,408 | T4.4 EBITDA (Reported) | FY2025 / 2025-12-31 | USD | US$m | 7.58 | Calculated | Tier 1 audited | Cash excludes restricted cash |
| Net debt / EBITDA | Net debt / EBITDA (Reported) | 29,544 | Net debt data, Net debt | 3,760 | T4.8 EBITDA (Reported) LTM | 2026-06-30 | USD | US$m | 7.86 | Calculated | Tier 2b unaudited | Cash excludes restricted cash; LTM denominator |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 1,187 | T4.4 EBITDA (Reported) | 184 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 6.45 | Calculated | Tier 1 audited | Cash interest is net of capitalised interest |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 2,408 | T4.4 EBITDA (Reported) | 869 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 2.77 | Calculated | Tier 1 audited | Cash interest is net of capitalised interest |
| EBITDA / cash interest | EBITDA (Reported) / cash interest paid | 3,760 | T4.8 EBITDA (Reported) LTM | 1,313 | T4.8 Cash interest paid LTM | 2026-06-30 | USD | US$m | 2.86 | Calculated | Tier 2b unaudited | Cash interest is net of capitalised interest; LTM operands |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 7,926 | Net debt data, Gross debt | 1,219 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | 6.50 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA from releases only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 21,373 | Net debt data, Gross debt | 3,093 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 6.91 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA from releases only |
| Total debt / adjusted EBITDA | Gross debt / EBITDA (Adjusted) | 35,068 | Net debt data, Gross debt | 4,400 | T4.8 EBITDA (Adjusted) LTM | 2026-06-30 | USD | US$m | 7.97 | Calculated | Tier 2b unaudited | Issuer-defined adjusted EBITDA from releases only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 6,565 | Net debt data, Net debt | 1,219 | T4.4 EBITDA (Adjusted) | FY2024 / 2024-12-31 | USD | US$m | 5.39 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA from releases only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 18,246 | Net debt data, Net debt | 3,093 | T4.4 EBITDA (Adjusted) | FY2025 / 2025-12-31 | USD | US$m | 5.90 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA from releases only |
| Net debt / adjusted EBITDA | Net debt / EBITDA (Adjusted) | 29,544 | Net debt data, Net debt | 4,400 | T4.8 EBITDA (Adjusted) LTM | 2026-06-30 | USD | US$m | 6.71 | Calculated | Tier 2b unaudited | Issuer-defined adjusted EBITDA from releases only |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 1,219 | T4.4 EBITDA (Adjusted) | 184 | T4.5 Cash Interest Paid | FY2024 / 2024-12-31 | USD | US$m | 6.63 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA; cash interest net of capitalised interest |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 3,093 | T4.4 EBITDA (Adjusted) | 869 | T4.5 Cash Interest Paid | FY2025 / 2025-12-31 | USD | US$m | 3.56 | Calculated | Tier 1 audited | Issuer-defined adjusted EBITDA; cash interest net of capitalised interest |
| Adjusted EBITDA / cash interest | EBITDA (Adjusted) / cash interest paid | 4,400 | T4.8 EBITDA (Adjusted) LTM | 1,313 | T4.8 Cash interest paid LTM | 2026-06-30 | USD | US$m | 3.35 | Calculated | Tier 2b unaudited | Issuer-defined adjusted EBITDA; cash interest net of capitalised interest |
| EBITDA / contractual interest expense | EBITDA (Reported) / contractual interest expense | 3,760 | T4.8 EBITDA (Reported) LTM | 1,812 | T4.8 Contractual interest expense LTM | 2026-06-30 | USD | US$m | 2.08 | Calculated | Tier 2b unaudited | Contractual interest is before capitalised interest |
| Capital spending / revenue | Purchase of property and equipment / Revenue | 20,566 | T4.8 Purchase of property and equipment LTM | 7,590 | T4.8 Revenue LTM | 2026-06-30 | USD | US$m | 2.71 | Calculated | Tier 2b unaudited | Cash capital spending only |
| Operating cash flow / capital spending | Net cash from operating activities / Purchase of property and equipment | 6,911 | T4.8 Net cash from operating activities LTM | 20,566 | T4.8 Purchase of property and equipment LTM | 2026-06-30 | USD | US$m | 0.34 | Calculated | Tier 2b unaudited | Cash capital spending only |

### T4.10 KPI dashboard

| KPI Category | Metric Name | FY2024 | FY2025 | H1 2025 | H1 2026 | Trend Direction | Analyst Note |
|---|---|---|---|---|---|---|---|
| Contracted demand | Remaining performance obligations, period-end (USD billions) | 15.1 | 60.7 | Not supplied: not stated for June 2025 | 103.7 | Rising | Net of variable consideration; 41% expected in the first 24 months after June 30, 2026. Source: annual report page 8 and June 2026 report page 15 |
| Contracted demand | Revenue backlog, period-end (USD billions) | Not supplied: not stated | 66.8 | Not supplied: not stated | 104 | Rising | Issuer-defined, includes amounts beyond remaining performance obligations; excludes more than 25 billion of commitments added in early July. Source: earnings releases for the fourth quarter of 2025 and the second quarter of 2026 |
| Customer concentration | Largest customer share of revenue (%), period flow | 62 | 67 | 72 | 40 | Falling | The customer labelled A may differ between periods; second customer 15% in FY2024 and 23% in H1 2026. Source: annual report page 145 and June 2026 report page 15 |
| Funding float | Deferred revenue, current plus non-current, period-end (USD millions) | 4,064 | 8,185 | Not supplied: June 2025 balance sheet not supplied | 9,692 | Rising | Customer prepayments; calculation C14 |
| Funding float | Liabilities for property and equipment additions, non-cash, period flow (USD millions) | 893 | 11,151 | 2,155 | 9,796 | Rising | Includes equipment financed by manufacturers; cash capital spending excludes these until paid. Source: annual report page 141 and June 2026 report page 9 |
| Funding float | Accrued purchases, period-end (USD millions) | Not supplied: not stated | 5,196 | Not supplied: June 2025 balance sheet not supplied | 5,520 | Rising | Equipment purchases accrued and not yet paid, inside accrued liabilities. Source: June 2026 report page 22 |
| Capacity | Active power, period-end (GW) | Not supplied: not stated | Not supplied: not stated | Not supplied: not stated | 1.5 | Rising | Contracted power about 3.7 GW at June 30, 2026. Source: second-quarter 2026 earnings release page 2 |

### T4.11 Definition conflict register

| Metric Name | Canonical Definition | Issuer-Reported Definition | Source of Conflict | Periods Affected | Materiality | Modules Affected | Resolution / Recommendation |
|---|---|---|---|---|---|---|---|
| EBITDA | Reported EBITDA: operating income plus depreciation and amortization, no add-backs | Adjusted EBITDA: adds stock-based compensation and acquisition related costs (releases only) | EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, page 7; EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl, page 7 | FY2024, FY2025, H1 2025, H1 2026, LTM | LTM gap of 640 between 3,760 and 4,400 in USD millions; stock-based compensation is 619 of it | Fundamental credit; Liquidity; Downside | Use reported EBITDA for primary leverage; show adjusted beside it, labelled |
| Cash interest | Cash interest paid, net of capitalised amounts | Contractual interest expense before capitalisation 1,812 LTM, capitalised interest 322 LTM | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 27; 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 175 | FY2025, H1 2025, H1 2026, LTM | Cover is 2.86x on cash paid and 2.08x on contractual interest | Fundamental credit; Downside | Primary cover on cash interest paid as the method states; contractual cover shown in the register |
| Total debt | Balance-sheet carrying value, 35,068 | Principal 35,551 in the maturity table | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–27 | H1 2026 | Difference 483, the unamortised discount and issuance costs | Liquidity; Refinancing & LME | Carrying value is the leverage numerator; principal is the maturity ladder total |
| Debt presentation | Single debt lines for FY2024 and FY2025 | Recourse and non-recourse lines from the June 2026 report, with December 2025 reclassified | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 12; 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 137 | FY2025, H1 2026 | No change in total debt: 21,373 under both | Financial foundation consumers | Use totals; keep the recourse split in the instrument table |
| Net debt | Gross debt less unrestricted cash and equivalents | Not defined by the issuer; restricted cash 1,380 and marketable securities 15 at June 30, 2026 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 5 | H1 2026 | Netting restricted cash would lower net debt by up to 1,395 | Liquidity; Fundamental credit | Restricted cash mostly supports the delayed draw facilities, so it is not netted |
| Lease obligations | Lease liabilities on their own lines are not added to debt | Finance lease 221 and operating lease 16,319 at June 30, 2026 | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 23 | H1 2026 | Operating lease liabilities exceed 46% of carrying debt; not-yet-commenced leases add a further stated amount | Fundamental credit; Downside | Kept outside debt; flagged as fixed charges |
| Depreciation and amortization | One figure per period | Second-quarter 2025 is 560 in the cash flow statement and 559 in the adjusted EBITDA reconciliation | EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, pages 6–7 | Q2 2025 | Difference of 1; H1 2025 is 1,003 in both | Financial foundation | No effect on any period used |
| Other income, net | One figure per period | FY2024 is 49 in the income statement and 48 in the adjusted EBITDA reconciliation | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl, page 7 | FY2024 | Difference of 1; no effect on reported EBITDA | Financial foundation | Income statement figure used |
| Maturity dates | One final maturity per facility | DDTL 5.0 shows November 2031 in the debt table and an expected final payment in May 2031 in the text | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, pages 26–30 | H1 2026 | Six months; no effect on the ladder total | Refinancing & LME | Debt table date used; text date noted |

### Period table

| Period | Start | End |
|---|---|---|
| FY2024 | 2024-01-01 | 2024-12-31 |
| FY2025 | 2025-01-01 | 2025-12-31 |
| H1 2025 | 2025-01-01 | 2025-06-30 |
| H1 2026 | 2026-01-01 | 2026-06-30 |

### Chart data: leverage

| Period | Total debt / EBITDA | Net debt / EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 6.68 | 5.53 | x | Carrying-value debt over reported EBITDA (operating income plus depreciation and amortisation); fiscal-year EBITDA; adjusted ratios are in the register |
| FY2025 / 2025-12-31 | 8.88 | 7.58 | x | Carrying-value debt over reported EBITDA (operating income plus depreciation and amortisation); fiscal-year EBITDA; adjusted ratios are in the register |
| 2026-06-30 | 9.33 | 7.86 | x | Carrying-value debt over reported EBITDA (operating income plus depreciation and amortisation); last-twelve-months EBITDA; adjusted ratios are in the register |

The ratios use calculated reported EBITDA because the issuer states none, and the issuer-adjusted ratios are lower.

### Chart data: interest cover

| Period | EBITDA / cash interest | Reporting unit | Basis and limitation |
|---|---|---|---|
| FY2024 / 2024-12-31 | 6.45 | x | Reported EBITDA over cash interest paid, net of capitalised interest; fiscal-year operands |
| FY2025 / 2025-12-31 | 2.77 | x | Reported EBITDA over cash interest paid, net of capitalised interest; fiscal-year operands |
| 2026-06-30 | 2.86 | x | Reported EBITDA over cash interest paid, net of capitalised interest; last-twelve-months operands |

Cash interest paid is net of capitalised interest, so cover on contractual interest expense is lower.

### Chart data: liquidity

| Period | Cash | Undrawn committed facilities | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,361 | 4,406 | US$m | Unrestricted cash and equivalents; undrawn is the issuer's availability under existing facilities, which includes delayed draw commitments usable only against eligible assets |
| FY2025 / 2025-12-31 | 3,127 | 3,701 | US$m | Unrestricted cash and equivalents; undrawn is the issuer's availability under existing facilities, which includes delayed draw commitments usable only against eligible assets |
| 2026-06-30 | 5,524 | 10,014 | US$m | Unrestricted cash and equivalents; undrawn is the issuer's availability under existing facilities, which includes delayed draw commitments usable only against eligible assets; marketable securities of 15 are excluded |

Availability under existing facilities is conditional on eligible assets and project conditions, so it is not freely available cash.

### Chart data: debt maturities

| Period | Debt maturing | Reporting unit | Basis and limitation |
|---|---|---|---|
| 2026-12-31 | 4,413 | US$m | Remaining portion of 2026 principal at June 30, 2026 |
| 2027-12-31 | 6,184 | US$m | Principal due in 2027 |
| 2028-12-31 | 4,416 | US$m | Principal due in 2028 |
| 2029-12-31 | 2,421 | US$m | Principal due in 2029 |
| 2030-12-31 | 3,221 | US$m | Principal due in 2030 |
| 2031-12-31 | 14,896 | US$m | Principal due after 2030, shown against 2031; includes scheduled amortisation of delayed draw loans |

The ladder is contractual principal including scheduled amortisation, drawn from the issuer's table of future principal payments.

### Financials and credit metrics

| Metric | FY2024 | FY2025 | LTM June 2026 | Unit | Definition and limitation | Source |
|---|---|---|---|---|---|---|
| Revenue | 1,915 | 5,131 | 7,590 | USD millions | Reported; LTM is FY2025 plus H1 2026 less H1 2025 | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| EBITDA (Reported) | 1,187 | 2,408 | 3,760 | USD millions | Calculated: operating income plus depreciation and amortisation | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 138; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 6 |
| EBITDA (Adjusted) | 1,219 | 3,093 | 4,400 | USD millions | Issuer-defined; earnings releases only | EX-99.1_2026-02-26_coreweave4q25earningspress.htm.jsonl, page 7; EX-99.1_2026-08-11_coreweave2q26earningspress.htm.jsonl, page 7 |
| Net cash from operating activities | 2,749 | 3,058 | 6,911 | USD millions | Reported; LTM constructed | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 140; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 8 |
| Purchase of property and equipment | 8,702 | 10,309 | 20,566 | USD millions | Reported cash paid; excludes equipment bought on credit | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 140; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 8 |
| Cash interest paid | 184 | 869 | 1,313 | USD millions | Net of capitalised interest | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 141; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 9 |
| Total debt at carrying value | 7,926 | 21,373 | 35,068 | USD millions | Balance sheet current plus non-current debt | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 137; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 5 |
| Net debt | 6,565 | 18,246 | 29,544 | USD millions | Total debt less unrestricted cash and equivalents | 10-K_2025-12-31_crwv-20251231.htm.jsonl, page 137; 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 5 |
| Total debt / EBITDA (Reported) | 6.68 | 8.88 | 9.33 | x | Calculation register | Calculation register |
| Net debt / EBITDA (Reported) | 5.53 | 7.58 | 7.86 | x | Calculation register | Calculation register |
| EBITDA (Reported) / cash interest | 6.45 | 2.77 | 2.86 | x | Calculation register | Calculation register |
| Net debt / EBITDA (Adjusted) | 5.39 | 5.90 | 6.71 | x | Calculation register | Calculation register |

### Net debt data

| Period | Gross debt | Cash | Net debt | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| FY2024 / 2024-12-31 | 7,926 | 1,361 | 6,565 | US$m | Carrying value of debt, current plus non-current, net of 107 unamortised discount and issuance costs; principal is 8,033; excludes finance lease liabilities of 92 and operating lease liabilities of 2,602 shown on their own lines; cash excludes restricted cash of 674 |
| FY2025 / 2025-12-31 | 21,373 | 3,127 | 18,246 | US$m | Carrying value of debt, current plus non-current, net of 242 unamortised discount and issuance costs; principal is 21,615; excludes finance lease liabilities of 254 and operating lease liabilities of 8,195 shown on their own lines; cash excludes restricted cash of 1,003 and marketable securities of 34 |
| 2026-06-30 | 35,068 | 5,524 | 29,544 | US$m | Carrying value of debt, current plus non-current, net of 483 unamortised discount and issuance costs; principal is 35,551; reported at the balance-sheet date, before the August 2026 draws; excludes finance lease liabilities of 221 and operating lease liabilities of 16,319 shown on their own lines; cash excludes restricted cash of 1,380 and marketable securities of 15 |

### Debt principal to carrying value

| Period | Contractual principal | Reconciling items | Carrying value | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|
| 2026-06-30 | 35,551 | -483 | 35,068 | US$m | Reconciling items are unamortised discount and issuance costs of 427 on recourse debt and 56 on non-recourse debt; no debt is left out of the ladder (calculation C8) |

### Post-balance-sheet adjustments

| Event | Date | Amount | Pro forma net debt | Pro forma net leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| DDTL 5.5 facility of 2,600 signed with 1,200 drawn after closing | Not supplied: the source states August 2026 only | Not supplied: net debt effect depends on use of proceeds, which is not stated | Not supplied: depends on the unstated use of proceeds | Not supplied: depends on the unstated use of proceeds | US$m | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 46; a draw raises debt and cash together until the proceeds are spent; not reflected in any period figure |
| Revolving credit facility drawn for 1,200 | Not supplied: the source states August 2026 only | Not supplied: net debt effect depends on use of proceeds, which is not stated | Not supplied: depends on the unstated use of proceeds | Not supplied: depends on the unstated use of proceeds | US$m | 10-Q_2026-06-30_crwv-20260630.htm.jsonl, page 46; reduces the 2,000 of remaining capacity stated at June 30, 2026; not reflected in any period figure |

### Chart data: revenue and EBITDA

| Period | Revenue | Adjusted EBITDA | Reporting unit | Basis and limitation |
|---|---|---|---|---|
| FY2024 / 2024-12-31 | 1,915 | 1,219 | US$m | Twelve months; issuer-adjusted EBITDA from the fourth-quarter 2025 release |
| FY2025 / 2025-12-31 | 5,131 | 3,093 | US$m | Twelve months; issuer-adjusted EBITDA from the fourth-quarter 2025 release |
| 2026-06-30 | 7,590 | 4,400 | US$m | Twelve months; constructed as FY2025 plus H1 2026 less H1 2025; issuer-adjusted EBITDA from earnings releases |

Adjusted EBITDA is issuer-defined and appears only in the earnings releases.

### Chart data: debt stack

| Facility | Ranking | Secured | Amount | Cumulative leverage | Reporting unit | Basis and limitation |
|---|---|---|---|---|---|---|
| DDTL 1.0 Facility | 1 | Yes | 1,300 | 0.35 | US$m | Principal at June 30, 2026; cumulative principal 1,300 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Recourse: guaranteed by CoreWeave, Inc.; first-priority pledge of the borrower equity and assets |
| DDTL 2.0 Facility | 1 | Yes | 3,190 | 1.19 | US$m | Principal at June 30, 2026; cumulative principal 4,490 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Recourse: guaranteed by CoreWeave, Inc.; same security |
| DDTL 2.1 Facility | 1 | Yes | 3,000 | 1.99 | US$m | Principal at June 30, 2026; cumulative principal 7,490 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Recourse: guaranteed by CoreWeave, Inc.; same security |
| DDTL 3.0 Facility | 1 | Yes | 2,215 | 2.58 | US$m | Principal at June 30, 2026; cumulative principal 9,705 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Recourse: guaranteed by CoreWeave, Inc.; same security |
| DDTL 5.0 Facility | 1 | Yes | 1,101 | 2.87 | US$m | Principal at June 30, 2026; cumulative principal 10,806 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Recourse: guaranteed by CoreWeave, Inc.; same security |
| DDTL 4.0 Facility | 1 | Yes | 2,837 | 3.63 | US$m | Principal at June 30, 2026; cumulative principal 13,643 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Non-recourse: obligor is CoreWeave Compute Acquisition Co. VIII, LLC; limited carve-out guarantees only |
| Revolving Credit Facility | 1 | Yes | 0 | 3.63 | US$m | Principal at June 30, 2026; cumulative principal 13,643 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Undrawn at June 30, 2026 with 2,500 commitment less 533 letters of credit; secured by pledges of certain assets |
| 2030 Senior Notes | 2 | No | 2,000 | 4.16 | US$m | Principal at June 30, 2026; cumulative principal 15,643 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured obligations of CoreWeave, Inc.; guarantors are named in the indenture, which is not supplied |
| 2031 9.00% Senior Notes | 2 | No | 1,750 | 4.63 | US$m | Principal at June 30, 2026; cumulative principal 17,393 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; guarantors not supplied |
| 2031 9.75% Senior Notes | 2 | No | 2,750 | 5.36 | US$m | Principal at June 30, 2026; cumulative principal 20,143 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; guarantors not supplied |
| 2032 9.625% Senior Notes | 2 | No | 1,250 | 5.69 | US$m | Principal at June 30, 2026; cumulative principal 21,393 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; guarantors not supplied |
| 2032 EUR Senior Notes | 2 | No | 2,279 | 6.30 | US$m | Principal at June 30, 2026; cumulative principal 23,672 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; USD amount as stated by the issuer for EUR 2,000 million; guarantors not supplied |
| 2031 Convertible Senior Notes | 2 | No | 2,588 | 6.98 | US$m | Principal at June 30, 2026; cumulative principal 26,260 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; guarantors not supplied |
| 2032 Convertible Senior Notes | 2 | No | 4,000 | 8.05 | US$m | Principal at June 30, 2026; cumulative principal 30,260 over LTM reported EBITDA of 3,760; rank follows the stated security only, as no ranking clause is supplied; Unsecured; guarantors not supplied |

Equipment and software financing of 5,102 and the Magnetar loan of 189 are not in the table because no source states their security or ranking, so the final cumulative figure is below total principal.

### Chart data: EBITDA bridge

| Step | Amount | Reporting unit | Basis and limitation |
|---|---|---|---|
| EBITDA (Reported), H1 2026 | 2,347 | US$m | Calculated: operating income of -193 plus depreciation and amortisation of 2,540 |
| Stock-based compensation | 318 | US$m | Issuer add-back; share-based, not realised cash; stated in the second-quarter 2026 release |
| Acquisition related costs | 2 | US$m | Issuer add-back; transaction costs; stated in the second-quarter 2026 release |
| EBITDA (Adjusted), H1 2026 | 2,667 | US$m | Issuer-stated adjusted EBITDA for the six months to June 30, 2026 |

The bridge is for the first half of 2026 and its steps are the only add-backs the issuer states between operating income plus depreciation and adjusted EBITDA.

### T4.13 Readiness

| Requested Use | Readiness Status | Gaps or Limitations | Recommended Actions |
|---|---|---|---|
| Leverage and coverage at June 30, 2026 | Ready with Limitations | Reported EBITDA is calculated; adjusted EBITDA is issuer-defined; nothing after the second quarter of 2026 | Add the third-quarter 2026 report; obtain covenant EBITDA definitions |
| Liquidity and refinancing | Ready with Limitations | Facility availability depends on eligible assets; August 2026 draws are outside the figures | Obtain facility agreements and the third-quarter report |
| Debt structure and ranking | Not Ready | No executed documents; security from note descriptions only; ranking not stated | Obtain indentures and credit agreements |
| Cash-flow analysis | Ready with Limitations | No balance sheet at June 30, 2025; equipment bought on credit is outside cash capital spending | Obtain detail of accrued purchases |

### Confidence inputs

| Input | Value |
|---|---|
| Directly Sourced | 22 |
| Calculated | 12 |
| Assumption-Based | 0 |
| Analyst Inference | 2 |
| Weak Lineage | 0 |
| Untraced | 0 |
| Conflicting | 2 |
| Insufficient Information | 3 |
| Fields present | 23 |
| Fields total | 24 |
| Source gate | pass |
| CRITICAL | 0 |
| MATERIAL | 2 |
| MINOR | 10 |

## Calculations

| ID | Calculation | Inputs | Result |
|---|---|---|---|
| C1 | EBITDA (Reported) = operating income + depreciation and amortization, USD millions | FY2024 324 + 863; FY2025 -46 + 2,454; H1 2025 -8 + 1,003; H1 2026 -193 + 2,540 | FY2024 1,187; FY2025 2,408; H1 2025 995; H1 2026 2,347 |
| C2 | LTM EBITDA (Reported) = FY2025 + H1 2026 - H1 2025, USD millions | 2,408 + 2,347 - 995 = 3,760 | 3,760 |
| C3 | LTM EBITDA (Adjusted) = FY2025 + H1 2026 - H1 2025, USD millions | 3,093 + 2,667 - 1,360 = 4,400 | 4,400 |
| C4 | LTM cash interest paid = FY2025 + H1 2026 - H1 2025, USD millions | 869 + 806 - 362 = 1,313 | 1,313 |
| C5 | LTM revenue = FY2025 + H1 2026 - H1 2025, USD millions | 5,131 + 4,653 - 2,194 = 7,590 | 7,590 |
| C6 | Total debt at carrying value = current + non-current debt, USD millions | FY2024 2,468 + 5,458; FY2025 6,708 + 14,665; June 2026 (6,235 + 1,278) + (25,170 + 2,385) = 7,513 + 27,555 | FY2024 7,926; FY2025 21,373; June 2026 35,068 |
| C7 | Net debt = total debt - cash and cash equivalents, USD millions | FY2024 7,926 - 1,361; FY2025 21,373 - 3,127; June 2026 35,068 - 5,524 | FY2024 6,565; FY2025 18,246; June 2026 29,544 |
| C8 | Principal to carrying value, USD millions | 35,551 - 427 - 56 | 35,068, equal to total debt at June 30, 2026 |
| C9 | Increase in carrying debt over six months, USD millions | 35,068 - 21,373 | 13,695 |
| C10 | Principal due through 2027, USD millions | 4,413 + 6,184 | 10,597 |
| C11 | Cash shortfall = capital spending - operating cash flow, USD millions | H1 2026 14,117 - 3,663; LTM 20,566 - 6,911; free cash flow is the same amount with a negative sign (FY2024 -5,953; FY2025 -7,251; H1 2025 -4,050; H1 2026 -10,454; LTM -13,655) | H1 2026 10,454; LTM 13,655 |
| C12 | LTM contractual interest and capitalised interest, USD millions | Contractual 1,220 + 1,075 - 483 = 1,812; capitalised 182 + 176 - 36 = 322 | Contractual 1,812; capitalised 322 |
| C13 | Leverage and cover ratios: numerator / denominator to two decimals | Total debt 35,068 / 3,760; net debt 29,544 / 3,760; 3,760 / 1,313; adjusted net debt 29,544 / 4,400 | 9.33x; 7.86x; 2.86x; 6.71x |
| C14 | Deferred revenue = current + non-current, USD millions | FY2024 769 + 3,295; FY2025 1,709 + 6,476; June 2026 2,686 + 7,006 | 4,064; 8,185; 9,692 |
| C15 | Principal by type at June 30, 2026, USD millions | Secured delayed draw loans 1,300 + 3,190 + 3,000 + 2,215 + 1,101 + 2,837; unsecured notes 2,000 + 1,750 + 2,750 + 1,250 + 2,279 + 2,588 + 4,000; equipment and software financing 4,220 + 882; Magnetar 189 | 13,643; 16,617; 5,102; 189; total 35,551 |
| C16 | Total liquidity at June 30, 2026, USD millions | 5,524 + 15 + 10,014 | 15,553 |
| C17 | H1 2026 working-capital change and operating cash flow before it, USD millions | 607 - 611 + 304 + 1,365 - 182; 3,663 - 1,483 | 1,483; 2,180 |
| C18 | Supplier credit = accounts payable + accrued purchases at June 30, 2026, USD millions | 3,633 + 5,520 | 9,153 |
| C20 | Carrying value by recourse type at June 30, 2026, USD millions | Recourse 31,832 - 427; non-recourse 3,719 - 56 | 31,405; 3,663 |
| C19 | LTM gap between adjusted and reported EBITDA, USD millions | 4,400 - 3,760; stock-based compensation 630 + 318 - 329; acquisition related costs 55 + 2 - 36 | 640 = 619 + 21 |

## Gaps

- No document after the second-quarter 2026 report is supplied, so every ratio, liquidity figure and maturity is dated June 30, 2026 and the third quarter of 2026 is missing. This restricts the leverage, liquidity and refinancing conclusions to that date. Severity High. The action is to add the third-quarter 2026 report when it is published.
- No filing states EBITDA and adjusted EBITDA appears only in the three earnings releases, so reported EBITDA is calculated by this module and the issuer-adjusted figures are unaudited and issuer-defined. This restricts leverage and cover to a calculated basis. Severity High. The action is to obtain the covenant EBITDA definitions from the credit agreements.
- No executed credit agreement or indenture is supplied, so security, guarantors, ranking and covenants in the instrument table rest on the issuer's note descriptions. This restricts structural conclusions. Severity Medium. The action is to obtain the documents listed in the exhibit index of the June 2026 report.
- Carrying value is not disclosed by instrument, so the instrument table states principal with one financing cost adjustment of negative 483. This restricts per-instrument leverage. Severity Medium. The action is to obtain the debt footnote detail by instrument.
- The stated rates for the equipment and software financing, the Magnetar loan and the revolving credit facility margin are not in the sources read, the delayed draw spreads for facilities 1.0 and 2.0 come from the September 2025 quarterly report, and floors are not stated anywhere. This restricts interest-cost projections. Severity Medium. The action is to obtain the facility agreements.
- Cash capital spending excludes equipment bought on credit: non-cash additions of property and equipment were USD 9,796 million in the first half of 2026 and USD 11,151 million in FY2025, and the unpaid amount sits in payables, accrued purchases and equipment financing, which the filings do not split. This restricts free cash flow conclusions. Severity Medium. The action is to obtain the breakdown of accrued purchases by vendor and maturity.
- The balance sheet at June 30, 2025 is not supplied, so the first half of 2025 column has no balance sheet and no mid-year 2025 net debt. This restricts trend comparison to year ends. Severity Low. The action is to add the second-quarter 2025 quarterly report.
- Lines printed as a dash or not printed in a period are carried as Not supplied, not zero, in the income statement, cash flow and balance sheet tables, including the first-half 2026 fair value line and several investing and financing lines; every column sums to its printed total without them. This restricts nothing. Severity Low. The action is none beyond noting the presentation.
- The issuer reports one operating segment and discloses revenue by geography only, so no segment revenue schedule is stated and no segment sum is given. This restricts segment analysis. Severity Low. The action is none.
- The net debt effect of the August 2026 delayed draw and revolver draws is not established because the use of proceeds is not stated, so no pro forma net debt or leverage is given. This restricts post-balance-sheet conclusions. Severity Low. The action is to obtain the third-quarter report.
- Second-quarter 2025 depreciation and amortisation is 560 in the cash flow statement and 559 in the adjusted EBITDA reconciliation, and fiscal 2024 other income is 49 in the income statement and 48 in the reconciliation, each a difference of 1 that affects no period used. Severity Low. The action is none.
- The leases that have not yet commenced carry an undiscounted payment commitment stated only as an aggregate with commencement years, so the timing of future fixed charges is not established. This restricts fixed-charge conclusions. Severity Low. The action is to obtain the lease schedule.

## Next module

The orchestrator selects the next module.
